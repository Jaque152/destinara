"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { formatDateLong, useCart } from "@/lib/cart";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export function CartDrawer() {
  const { isOpen, setOpen, lines, subtotal, discount, total, updateAdults, remove, travelers } = useCart();
  const { dict } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="p-0">
        <div className="border-b border-vino/10 px-6 pb-5 pt-7">
          <p className="eyebrow text-rosa">{dict.cart.eyebrow}</p>
          <SheetTitle className="mt-2 text-3xl">
            {dict.cart.title} <em className="text-rosa">{dict.cart.titleEm}</em>
          </SheetTitle>
          <SheetDescription className="mt-1">
            {lines.length === 0
              ? dict.cart.emptyTitle
              : `${lines.length} ${lines.length === 1 ? dict.cart.experience : dict.cart.experiences} · ${travelers} ${travelers === 1 ? dict.cart.traveler : dict.cart.travelers}`}
          </SheetDescription>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="arch relative h-40 w-28 overflow-hidden bg-rosa-100">
                <div className="absolute inset-x-4 bottom-0 h-12 rounded-t-full bg-lima" />
              </div>
              <p className="mt-6 max-w-[16rem] text-vino/70">
                {dict.cart.emptyText}
              </p>
              <Button asChild className="mt-6" onClick={() => setOpen(false)}>
                <Link href="/catalogo">{dict.common.exploreCatalog}</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.id}
                  className="ticket relative flex gap-4 rounded-2xl bg-white p-3 pr-4 [--notch-y:50%]"
                  style={{ ["--notch" as string]: "9px" }}
                >
                  <Link
                    href={`/experiencia/${line.slug}`}
                    onClick={() => setOpen(false)}
                    className="arch-soft h-24 w-20 shrink-0 overflow-hidden bg-rosa-100"
                  >
                    
                    <img src={line.product.image} alt="" className="h-full w-full object-cover" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-rosa">
                      {line.product.code} · {formatDateLong(line.date)}
                    </p>
                    <Link
                      href={`/experiencia/${line.slug}`}
                      onClick={() => setOpen(false)}
                      className="mt-1 line-clamp-2 text-[0.95rem] font-semibold leading-tight text-vino hover:text-rosa"
                    >
                      {line.product.short}
                    </Link>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full bg-blush ring-1 ring-vino/10">
                        <button
                          type="button"
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-vino hover:text-blush disabled:opacity-30"
                          onClick={() => updateAdults(line.id, line.adults - 1)}
                          disabled={line.adults <= line.product.minPeople}
                          aria-label="Quitar un adulto"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center font-mono text-xs">{line.adults}</span>
                        <button
                          type="button"
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-vino hover:text-blush"
                          onClick={() => updateAdults(line.id, line.adults + 1)}
                          aria-label="Agregar un adulto"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-vino">{formatMXN(line.lineTotal)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(line.id)}
                    className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full text-vino/40 hover:bg-rosa-100 hover:text-rosa"
                    aria-label={`Eliminar ${line.product.short}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-vino/10 bg-white/60 px-6 pb-6 pt-5">
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between text-vino/70">
                <dt>{dict.cart.subtotal}</dt>
                <dd>{formatMXN(subtotal)}</dd>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-rosa">
                  <dt>{dict.cart.discount}</dt>
                  <dd>−{formatMXN(discount)}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between pt-2 text-vino">
                <dt className="font-semibold">{dict.cart.total}</dt>
                <dd className="text-2xl font-extrabold tracking-tight">{formatMXN(total)}</dd>
              </div>
              <p className="text-right font-mono text-[0.6rem] uppercase tracking-widest text-vino/50">{dict.cart.taxIncluded}</p>
            </dl>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link href="/carrito">{dict.cart.viewCart}</Link>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <Link href="/checkout">
                  {dict.cart.pay} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}