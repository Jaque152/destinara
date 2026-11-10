import axios from "axios";

export interface CardPayload {
  number: string;
  name: string;
  month: string; // MM
  year: string;  // YY o YYYY
  cvv: string;
}

export interface CustomerPayload {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion?: string;
  ciudad?: string;
  estado?: string;
  pais?: string;
  cp?: string;
  empresa?: string;
}

export interface PaymentData {
  amount: number;
  orderId: string;
  currency?: string;
  cardData: CardPayload;
  customer: CustomerPayload;
  metadata?: {
    ip?: string;
    deviceId?: string;
    notes?: string;
  };
}

const API_URL = process.env.ETOMIN_API_URL || "https://pagos.etomin.com/api/v1";

const etominClient = axios.create({
  baseURL: API_URL,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

async function getAuthToken(): Promise<string> {
  const user = process.env.ETOMIN_USER;
  const password = process.env.ETOMIN_PASSWORD;

  if (!user || !password) {
    throw new Error("Credenciales de Etomin no configuradas en las variables de entorno.");
  }

  const { data } = await etominClient.post("/signin", {
    email: user,
    password: password,
  });

  if (!data.authToken) {
    throw new Error("No se pudo obtener el token de autenticación de Etomin.");
  }

  return data.authToken;
}

async function tokenizeCard(token: string, card: CardPayload): Promise<string> {
  let cleanYear = card.year.replace(/\D/g, "");
  if (cleanYear.length === 2) {
    cleanYear = `20${cleanYear}`;
  }

  const { data } = await etominClient.post(
    "/card/tokenizer",
    {
      cardData: {
        cardNumber: card.number.replace(/\s/g, ""),
        cardholderName: card.name,
        expirationYear: cleanYear,
        expirationMonth: card.month.padStart(2, "0"),
      },
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!data.cardNumberToken) {
    throw new Error("Error en la tokenización de la tarjeta con Etomin.");
  }

  return data.cardNumberToken;
}

export async function processEtominPayment(payment: PaymentData) {
  try {
    // 1. Autenticación con Etomin
    const authToken = await getAuthToken();

    // 2. Tokenización de Tarjeta (sin CVV)
    const cardToken = await tokenizeCard(authToken, payment.cardData);
    const currency = (payment.currency || "MXN").toUpperCase();
    const currencyCode = currency === "USD" ? "840" : "484";

    // 3. Ejecución del Cobro (/sale)
    const salePayload = {
      amount: Number(payment.amount),
      currency: currencyCode,
      reference: payment.orderId,

      customerInformation: {
        firstName: payment.customer.nombre,
        lastName: payment.customer.apellido,
        email: payment.customer.email,
        phone1: payment.customer.telefono,
        address1: payment.customer.direccion || "N/A",
        address2: "",
        city: payment.customer.ciudad || "CDMX",
        state: payment.customer.estado || "CDMX",
        postalCode: payment.customer.cp || "00000",
        country: payment.customer.pais || "MX",
        company: payment.customer.empresa || "",
        ip: payment.metadata?.ip || "127.0.0.1",
      },

      cardData: {
        cardNumberToken: cardToken,
        cvv: payment.cardData.cvv,
      },
    };

    const { data } = await etominClient.post("/sale", salePayload, {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    const isApproved = data.status?.toUpperCase() === "APPROVED";

    return {
      success: isApproved,
      orderId: data.orderId || payment.orderId,
      reference: data.reference,
      transactionId: data.transactionId || data.id,
      status: data.status,
      data,
    };
  } catch (error: unknown) {
    const errorMsg = (error as { response?: { data?: { message?: string } }; message?: string }).response?.data?.message || (error as { message?: string }).message || "Error procesando el pago con Etomin.";
    console.error("[Etomin Payment Error]", (error as { response?: { data?: { message?: string } } }).response?.data || (error as { message?: string }).message);
    return {
      success: false,
      status: "error",
      error: errorMsg,
    };
  }
}