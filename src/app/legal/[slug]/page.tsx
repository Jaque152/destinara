import type { Metadata } from "next";
import { LegalView } from "./LegalView";

const VALID_SLUGS = ["privacidad", "terminos", "reembolsos", "informacion"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const titles: Record<string, string> = {
    privacidad: "Aviso de Privacidad",
    terminos: "Términos y Condiciones",
    reembolsos: "Políticas de Reembolso",
    informacion: "Información de Viaje",
  };
  return { title: titles[slug] ?? "Legal" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LegalView slug={slug} />;
}