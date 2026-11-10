import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceView } from "@/components/product/ExperienceView";
import { PRODUCTS, getProduct, getRelated } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Experiencia no encontrada" };
  return { title: product.title, description: product.summary };
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product, 4);

  return <ExperienceView product={product} related={related} />;
}