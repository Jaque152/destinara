import type { Metadata } from "next";
import { CatalogView } from "@/components/catalog/CatalogView";

export const metadata: Metadata = {
  title: "Catálogo · Índice de viajes",
  description:
    "El índice editorial de Destinara: estancias, rutas y experiencias diseñadas con criterio en México. Cada viaje, una edición.",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; q?: string }>;
}) {
  const sp = await searchParams;
  return <CatalogView initialCategory={sp.categoria ?? null} initialQuery={sp.q ?? ""} />;
}