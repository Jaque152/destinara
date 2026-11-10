"use client";

import Link from "next/link";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Product } from "@/lib/products";
import { formatMXNShort } from "@/lib/products";
import { isoDate, useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export function TicketCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add, setOpen } = useCart();
  const [added, setAdded] = useState(false);

  const quickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const date = isoDate(14);
    add(product.slug, date, product.minPeople);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
    toast.success("Añadido a tu itinerario", {
      description: `${product.short} · ${product.minPeople} ${product.minPeople === 1 ? "adulto" : "adultos"}. Puedes ajustar fecha y viajeros en el carrito.`,
      action: { label: "Ver", onClick: () => setOpen(true) },
    });
  };

  return (
    <article
      className="ticket group relative flex h-full flex-col bg-white transition-transform duration-500 ease-out hover:-translate-y-1.5 [--notch-y:256px]"
      style={{ borderRadius: "1.5rem" }}
    >
      <Link href={`/experiencia/${product.slug}`} className="absolute inset-0 z-10" aria-label={product.title} />

      <div className="relative h-64 overflow-hidden rounded-t-[1.5rem]">
        <img
          src={product.image}
          alt={product.short}
          loading={index < 6 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vino/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-blush/95 px-3 py-1.5 text-xs font-semibold text-vino backdrop-blur">
          {product.category}
        </span>
        <span className="absolute bottom-4 right-4 rounded-md bg-vino px-2 py-1 font-mono text-[0.6rem] tracking-widest text-lima">
          {product.code}
        </span>
      </div>

      <div className="mx-5 text-vino/15">
        <div className="perforation" />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-rosa">
          {product.region} · {product.duration}
        </p>
        <h3 className="mt-2 text-[1.35rem] font-bold leading-[1.1] tracking-tight text-vino">{product.short}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-vino/60">{product.summary}</p>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-vino/45">Desde · por adulto</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-vino">
              {formatMXNShort(product.price)}
              <span className="ml-1 font-mono text-[0.62rem] font-normal tracking-widest text-vino/50">MXN</span>
            </p>
          </div>
          <button
            type="button"
            onClick={quickAdd}
            className={cn(
              "relative z-20 grid h-12 w-12 place-items-center rounded-full transition-all duration-300",
              added ? "bg-lima text-vino" : "bg-rosa text-blush hover:rotate-90 hover:bg-vino",
            )}
            aria-label={`Agregar ${product.short} al carrito`}
          >
            {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </article>
  );
}
