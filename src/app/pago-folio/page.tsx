import type { Metadata } from "next";
import { PagoFolioView } from "@/components/folio/PagoFolioView";

export const metadata: Metadata = {
  title: "Pago de Folio a la Medida",
  description: "Paga tu experiencia diseñada a la medida con Destinara.",
};

export default function PagoFolioPage() {
  return <PagoFolioView />;
}