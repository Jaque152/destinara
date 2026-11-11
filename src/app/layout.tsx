import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Martian_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://destinara.com.mx"),
  title: {
    default: "Destinara · Viajes y experiencias por México, con criterio",
    template: "%s · Destinara",
  },
  description:
    "Viajes y experiencias por México, seleccionados y producidos con criterio: Pueblos Mágicos, naturaleza, playa, cultura y circuitos. Para quienes viajan con intención.",
  openGraph: {
    title: "Destinara · Viajes diseñados con criterio",
    description:
      "Curaduría de viajes por México. Seleccionamos, editamos y producimos cada experiencia.",
    url: "https://destinara.com.mx",
    siteName: "Destinara",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${bricolage.variable} ${instrument.variable} ${martian.variable}`}
    >
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
