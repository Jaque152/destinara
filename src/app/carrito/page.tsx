import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Carrito · Tu itinerario",
  description: "Revisa tu itinerario de experiencias Destinara antes de pagar.",
};

export default function CartPage() {
  return <CartView />;
}