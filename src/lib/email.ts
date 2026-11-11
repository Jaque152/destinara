import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const FROM_EMAIL: string = process.env.EMAIL_FROM || "Destinara <atencion@destinara.com.mx>";
const ADMIN_EMAIL: string = process.env.EMAIL_ADMIN || "atencion@destinara.com.mx";

interface OrderEmailProps {
  orderId: string;
  customerName: string;
  customerEmail: string;
  totalFormatted: string;
  subtotalFormatted: string;
  discountFormatted?: string;
  lines: {
    title: string;
    code: string;
    date: string;
    adults: number;
    lineTotalFormatted: string;
  }[];
  lang?: "es" | "en";
}

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  lang?: "es" | "en";
}

export async function sendOrderConfirmationEmail(props: OrderEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Resend] RESEND_API_KEY no está configurado. Omitiendo envío de correo.");
    return;
  }

  const isEn = props.lang === "en";

  const subject = isEn
    ? `Booking Confirmed: ${props.orderId} · Destinara`
    : `Reservación confirmada: ${props.orderId} · Destinara`;

  const html = `
<!DOCTYPE html>
<html lang="${isEn ? "en" : "es"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0; padding:0; background-color:#FDF8F5; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#22081A;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#FDF8F5; padding:40px 10px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 10px 30px rgba(34,8,26,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#22081A; padding:32px 40px; text-align:center;">
              <h1 style="margin:0; color:#FDF8F5; font-size:26px; font-weight:800; letter-spacing:-0.5px;">DESTINARA</h1>
              <p style="margin:6px 0 0; color:#D4E157; font-size:11px; text-transform:uppercase; letter-spacing:2px; font-family:monospace;">
                ${isEn ? "BOARDING PASS & CONFIRMATION" : "PASE DE ABORDAJE Y CONFIRMACIÓN"}
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 12px; font-size:24px; font-weight:700; color:#22081A;">
                ${isEn ? `Safe travels, ${props.customerName.split(" ")[0]}!` : `¡Buen viaje, ${props.customerName.split(" ")[0]}!`}
              </h2>
              <p style="margin:0 0 24px; font-size:15px; line-height:1.6; color:#554450;">
                ${
                  isEn
                    ? `Your payment has been successfully processed. Here are the details of your confirmed itinerary. Reference Code: <strong>${props.orderId}</strong>.`
                    : `Tu pago ha sido procesado exitosamente. A continuación te presentamos el resumen de tu itinerario confirmado con el folio: <strong>${props.orderId}</strong>.`
                }
              </p>

              <!-- Items Table -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid #F2E8E4; border-bottom:1px solid #F2E8E4; margin-bottom:24px;">
                ${props.lines
                  .map(
                    (l) => `
                <tr>
                  <td style="padding:16px 0; border-bottom:1px stroke #F8EFEC;">
                    <strong style="font-size:16px; color:#22081A;">${l.title}</strong><br>
                    <span style="font-size:12px; color:#887780; font-family:monospace;">
                      ${l.code} · ${l.date} · ${l.adults} ${isEn ? (l.adults === 1 ? "adult" : "adults") : (l.adults === 1 ? "adulto" : "adultos")}
                    </span>
                  </td>
                  <td align="right" style="padding:16px 0; font-size:16px; font-weight:700; color:#22081A;">
                    ${l.lineTotalFormatted}
                  </td>
                </tr>
                `
                  )
                  .join("")}
              </table>

              <!-- Totals -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:32px;">
                <tr>
                  <td style="font-size:14px; color:#665560;">${isEn ? "Subtotal" : "Subtotal"}</td>
                  <td align="right" style="font-size:14px; color:#22081A;">${props.subtotalFormatted}</td>
                </tr>
                ${
                  props.discountFormatted
                    ? `
                <tr>
                  <td style="font-size:14px; color:#E6007E;">${isEn ? "Discount" : "Descuento"}</td>
                  <td align="right" style="font-size:14px; color:#E6007E;">-${props.discountFormatted}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="font-size:18px; font-weight:800; color:#22081A; padding-top:12px;">${isEn ? "Total Paid" : "Total Pagado"}</td>
                  <td align="right" style="font-size:22px; font-weight:800; color:#E6007E; padding-top:12px;">${props.totalFormatted}</td>
                </tr>
              </table>

              <!-- Banner Concierge -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#22081A; border-radius:16px; padding:24px; color:#FDF8F5;">
                <tr>
                  <td>
                    <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#D4E157; font-family:monospace;">
                      ${isEn ? "NEXT STEP" : "SIGUIENTE PASO"}
                    </p>
                    <p style="margin:8px 0 0; font-size:14px; line-height:1.5; color:#FDF8F5;">
                      ${
                        isEn
                          ? "Your personal concierge will reach out via WhatsApp/email in less than 24 hours to coordinate meeting points and custom preferences."
                          : "Tu concierge personal se pondrá en contacto contigo en menos de 24 horas para afinar cada detalle y punto de encuentro."
                      }
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F8EFEC; padding:24px 40px; text-align:center; font-size:12px; color:#776670;">
              Destinara · Edición y producción de viajes por México<br>
              Ciudad de México · <a href="https://destinara.mx" style="color:#E6007E; text-decoration:none;">destinara.mx</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [props.customerEmail],
      bcc: [ADMIN_EMAIL],
      subject,
      html,
    });
  } catch (error) {
    console.error("[Resend Error - Order Email]", error);
  }
}

export async function sendContactNotificationEmail(props: ContactEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Resend] RESEND_API_KEY no está configurado. Omitiendo envío de correo de contacto.");
    return;
  }

  const isEn = props.lang === "en";

  const adminSubject = `[Nuevo Mensaje] ${props.name} · Destinara`;
  const userSubject = isEn
    ? `We received your inquiry · Destinara`
    : `Hemos recibido tu mensaje · Destinara`;

  // 1. Email estilizado para el administrador / Concierge
  const adminHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${adminSubject}</title>
</head>
<body style="margin:0; padding:0; background-color:#FDF8F5; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#22081A;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#FDF8F5; padding:40px 10px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 10px 30px rgba(34,8,26,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#22081A; padding:32px 40px; text-align:center;">
              <h1 style="margin:0; color:#FDF8F5; font-size:26px; font-weight:800; letter-spacing:-0.5px;">DESTINARA</h1>
              <p style="margin:6px 0 0; color:#D4E157; font-size:11px; text-transform:uppercase; letter-spacing:2px; font-family:monospace;">
                NUEVO MENSAJE DE CONTACTO
              </p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px; font-size:20px; font-weight:700; color:#22081A;">Detalles de la consulta</h2>
              
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid #F2E8E4; margin-bottom:24px;">
                <tr>
                  <td style="padding:14px 0; border-bottom:1px solid #F8EFEC; font-size:14px;">
                    <strong style="color:#22081A;">Nombre:</strong> <span style="color:#554450;">${props.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0; border-bottom:1px solid #F8EFEC; font-size:14px;">
                    <strong style="color:#22081A;">Email:</strong> <a href="mailto:${props.email}" style="color:#E6007E; text-decoration:none;">${props.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0; border-bottom:1px solid #F8EFEC; font-size:14px;">
                    <strong style="color:#22081A;">Teléfono:</strong> <span style="color:#554450;">${props.phone || "No proporcionado"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0; border-bottom:1px solid #F8EFEC; font-size:14px;">
                    <strong style="color:#22081A;">Interés:</strong> <span style="color:#554450;">${props.interest}</span>
                  </td>
                </tr>
              </table>

              <h3 style="margin:0 0 12px; font-size:16px; font-weight:700; color:#22081A;">Mensaje:</h3>
              <div style="background-color:#FDF8F5; padding:20px; border-left:4px solid #E6007E; border-radius:4px; font-size:14px; line-height:1.6; color:#554450;">
                ${props.message.replace(/\n/g, "<br>")}
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#F8EFEC; padding:24px 40px; text-align:center; font-size:12px; color:#776670;">
              Destinara · Área de Concierge
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // 2. Email estilizado de confirmación para el usuario
  const userHtml = `
<!DOCTYPE html>
<html lang="${isEn ? "en" : "es"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${userSubject}</title>
</head>
<body style="margin:0; padding:0; background-color:#FDF8F5; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#22081A;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#FDF8F5; padding:40px 10px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 10px 30px rgba(34,8,26,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#22081A; padding:32px 40px; text-align:center;">
              <h1 style="margin:0; color:#FDF8F5; font-size:26px; font-weight:800; letter-spacing:-0.5px;">DESTINARA</h1>
              <p style="margin:6px 0 0; color:#D4E157; font-size:11px; text-transform:uppercase; letter-spacing:2px; font-family:monospace;">
                ${isEn ? "CONCIERGE DESK" : "CONCIERGE PERSONAL"}
              </p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px; font-size:24px; font-weight:700; color:#22081A;">
                ${isEn ? `Thank you, ${props.name.split(" ")[0]}!` : `¡Gracias, ${props.name.split(" ")[0]}!`}
              </h2>
              <p style="margin:0 0 32px; font-size:15px; line-height:1.6; color:#554450;">
                ${
                  isEn
                    ? `We have received your message regarding <strong>"${props.interest}"</strong>. A Destinara concierge will review your request and get back to you personally.`
                    : `Hemos recibido tu mensaje acerca de <strong>"${props.interest}"</strong>. Un concierge de Destinara revisará tu solicitud y te escribirá personalmente.`
                }
              </p>

              <!-- Banner Concierge -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#22081A; border-radius:16px; padding:24px; color:#FDF8F5;">
                <tr>
                  <td>
                    <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#D4E157; font-family:monospace;">
                      ${isEn ? "WHAT HAPPENS NEXT?" : "¿QUÉ SIGUE?"}
                    </p>
                    <p style="margin:8px 0 0; font-size:14px; line-height:1.5; color:#FDF8F5;">
                      ${
                        isEn
                          ? "Our team is already working on your request. Expect a reply in under 24 hours. If you need immediate assistance, simply reply to this email."
                          : "Nuestro equipo ya está analizando tu solicitud. Te responderemos en menos de 24 horas. Si necesitas asistencia inmediata, puedes responder directamente a este correo."
                      }
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#F8EFEC; padding:24px 40px; text-align:center; font-size:12px; color:#776670;">
              Destinara · Edición y producción de viajes por México<br>
              Ciudad de México · <a href="https://destinara.mx" style="color:#E6007E; text-decoration:none;">destinara.mx</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: adminSubject,
        html: adminHtml,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [props.email],
        subject: userSubject,
        html: userHtml,
      }),
    ]);
  } catch (error) {
    console.error("[Resend Error - Contact Email]", error);
  }
}