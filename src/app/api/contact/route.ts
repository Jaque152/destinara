import { NextResponse } from "next/server";
import { sendContactNotificationEmail } from "@/lib/email";

const INTERESTS = [
  "Diseñar una experiencia a la medida",
  "Reservar algo del catálogo",
  "Viajes corporativos o de grupo",
  "Evento privado (boda, aniversario, XV)",
  "Prensa y colaboración",
  "Otra cosa",
];

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const interest = String(body.interest ?? "");
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "");
  const lang = (body.lang as "es" | "en") || "es";

  if (honeypot) return NextResponse.json({ ok: true });

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Correo inválido.";
  if (phone && phone.replace(/\D/g, "").length < 10) errors.phone = "Teléfono inválido.";
  if (!interest) errors.interest = "Selecciona una opción.";
  if (message.length < 10) errors.message = "Cuéntanos un poco más (mín. 10 caracteres).";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  await sendContactNotificationEmail({
    name,
    email,
    phone,
    interest,
    message,
    lang,
  });

  return NextResponse.json({ ok: true });
}