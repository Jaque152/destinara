import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué te gustaría vivir. Diseñamos experiencias a la medida o te ayudamos a reservar del catálogo.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interes?: string }> }) {
  const sp = await searchParams;
  return <ContactView initialInteres={sp.interes} />;
}