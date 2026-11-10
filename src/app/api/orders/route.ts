import { NextResponse } from "next/server";
import { COUPONS, computeDiscount, formatMXN, getProduct } from "@/lib/products";
import { processEtominPayment } from "@/lib/etomin";
import { sendOrderConfirmationEmail } from "@/lib/email";

type Method = "card";

interface OrderBody {
  lang?: "es" | "en";
  items?: { slug: string; date: string; adults: number }[];
  coupon?: string | null;
  customer?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    notes?: string;
    direccion?: string;
    ciudad?: string;
    pais?: string;
    cp?: string;
  };
  cardData?: {
    number?: string;
    name?: string;
    month?: string;
    year?: string;
    cvv?: string;
  };
  invoice?: { rfc?: string; razonSocial?: string; cp?: string; usoCfdi?: string } | null;
  payment?: { method?: Method; brand?: string; last4?: string };
}

const code = (n: number) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

export async function POST(req: Request) {
  let body: OrderBody;
  try {
    body = (await req.json()) as OrderBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  if (items.length === 0) {
    return NextResponse.json({ ok: false, error: "Tu carrito está vacío." }, { status: 400 });
  }

  const c = body.customer ?? {};
  
  // 1. Extracción y saneamiento (Soluciona el error de "Object is possibly undefined" de TypeScript)
  const firstName = c.firstName?.trim();
  const lastName = c.lastName?.trim();
  const email = c.email?.trim();
  const phone = c.phone?.trim();

  const emailOk = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  
  if (!firstName || !lastName || !emailOk || !phone) {
    return NextResponse.json({ ok: false, error: "Revisa tus datos de contacto." }, { status: 422 });
  }

  // Validación de líneas e itinerario
  const lines = [];
  for (const it of items) {
    const p = getProduct(it.slug);
    const adults = Math.floor(Number(it.adults));
    
    if (!p || !/^\d{4}-\d{2}-\d{2}$/.test(it.date) || !Number.isFinite(adults) || adults < p.minPeople || adults > 20) {
      return NextResponse.json({ ok: false, error: "Hay una experiencia inválida en tu carrito." }, { status: 422 });
    }
    
    lines.push({
      slug: p.slug,
      code: p.code,
      title: p.short,
      date: it.date,
      adults,
      unitPrice: p.price,
      lineTotal: p.price * adults,
    });
  }

  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const couponCode = body.coupon && COUPONS[body.coupon] ? body.coupon : null;
  const discount = computeDiscount(subtotal, couponCode);
  const total = subtotal - discount;

  const orderId = `DST-${code(6)}`;

  // Procesamiento del Pago con Etomin si se proporcionan los datos de la tarjeta
  const card = body.cardData;
  if (card?.number && card?.cvv && card?.month && card?.year) {
    const paymentResult = await processEtominPayment({
      amount: total,
      orderId,
      currency: "MXN",
      cardData: {
        number: card.number,
        name: card.name || `${firstName} ${lastName}`,
        month: card.month,
        year: card.year,
        cvv: card.cvv,
      },
      customer: {
        nombre: firstName,
        apellido: lastName,
        email: email,
        telefono: phone,
        direccion: c.direccion || "Dirección no especificada",
        ciudad: c.ciudad || "CDMX",
        cp: c.cp || "06700",
        pais: c.pais || "MX",
      },
      metadata: {
        notes: c.notes || "",
      },
    });

    if (!paymentResult.success) {
      return NextResponse.json(
        { ok: false, error: paymentResult.error || "El pago fue rechazado por la pasarela." },
        { status: 400 }
      );
    }
  }

  const order = {
    id: orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
    },
    lines,
    subtotal,
    discount,
    coupon: couponCode,
    total,
    payment: {
      method: "card" as const,
      status: "pagado" as const,
      brand: body.payment?.brand ?? "Tarjeta",
      last4: body.payment?.last4 ?? (card?.number ? card.number.slice(-4) : "4242"),
    },
    invoice: body.invoice ?? null,
  };

  // 2. Envío de correo con "await" obligatorio (Evita que el proceso Serverless corte el envío de Resend)
  try {
    await sendOrderConfirmationEmail({
      orderId: order.id,
      customerName: order.customer.name,
      customerEmail: order.customer.email,
      subtotalFormatted: formatMXN(order.subtotal),
      discountFormatted: order.discount > 0 ? formatMXN(order.discount) : undefined,
      totalFormatted: formatMXN(order.total),
      lines: order.lines.map((l) => ({
        title: l.title,
        code: l.code,
        date: l.date,
        adults: l.adults,
        lineTotalFormatted: formatMXN(l.lineTotal),
      })),
      lang: body.lang ?? "es",
    });
  } catch (emailError) {
    console.error("Error al enviar el correo de confirmación:", emailError);
  }

  return NextResponse.json({ ok: true, order });
}