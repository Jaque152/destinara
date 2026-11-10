"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Check, MessageCircle, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatDateLong, isoDate, useCart } from "@/lib/cart";
import { formatMXN, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function BookingWidget({ product }: { product: Product }) {
  const router = useRouter();
  const { lang, dict } = useLanguage();
  const { add, setOpen } = useCart();
  const [minDate, setMinDate] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(product.minPeople);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setMinDate(isoDate(2));
  }, []);

  const total = product.price * adults;

  const validate = () => {
    if (!date) {
      setError(dict.bookingWidget.tourDateRequired);
      return false;
    }
    if (minDate && date < minDate) {
      setError(dict.bookingWidget.tour48hNotice);
      return false;
    }
    setError(null);
    return true;
  };

  const handleAdd = () => {
    if (!validate()) return;
    add(product.slug, date, adults);
    setAdded(true);
    toast.success(dict.bookingWidget.addedToastTitle, {
      description: `${product.short} · ${formatDateLong(date, lang)} · ${adults} ${adults === 1 ? dict.checkoutView.adultSingular : dict.checkoutView.adultPlural}`,
      action: { label: dict.cart.viewCart, onClick: () => setOpen(true) },
    });
  };

  const handleBuyNow = () => {
    if (!validate()) return;
    add(product.slug, date, adults);
    router.push("/checkout");
  };

  return (
    <div className="space-y-4">
      <div className="ticket overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_60px_-35px_rgba(34,8,26,0.5)] [--notch-y:118px]">
        {/* Header */}
        <div className="h-[118px] bg-vino px-6 py-5 text-blush">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-lima">{dict.bookingWidget.boardingPass}</p>
            <p className="font-mono text-[0.58rem] tracking-[0.2em] text-blush/50">{product.code}</p>
          </div>
          <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-blush/50">{dict.bookingWidget.fromPerAdult}</p>
          <p className="text-3xl font-extrabold tracking-tight">{formatMXN(product.price)}</p>
        </div>

        <div className="space-y-5 px-6 pb-6 pt-6">
          {/* Date */}
          <div>
            <label htmlFor="tour-date" className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-vino/60">
              {dict.bookingWidget.tourDateLabel}
            </label>
            <div className="relative mt-2">
              <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-rosa" />
              <input
                id="tour-date"
                type="date"
                value={date}
                min={minDate || undefined}
                onChange={(e) => {
                  setDate(e.target.value);
                  setAdded(false);
                  if (error) setError(null);
                }}
                aria-invalid={!!error}
                className={cn(
                  "h-12 w-full rounded-2xl border-[1.5px] bg-blush/60 pl-11 pr-4 text-[0.95rem] text-vino focus:border-rosa focus:outline-none focus:ring-4 focus:ring-rosa/15",
                  error ? "border-destructive" : "border-vino/15",
                )}
              />
            </div>
            {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
          </div>

          {/* Adults */}
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-vino/60">{dict.bookingWidget.adultsLabel}</p>
            <div className="mt-2 flex items-center justify-between rounded-2xl border-[1.5px] border-vino/15 bg-blush/60 p-1.5">
              <button
                type="button"
                onClick={() => {
                  setAdults((a) => Math.max(product.minPeople, a - 1));
                  setAdded(false);
                }}
                disabled={adults <= product.minPeople}
                className="grid h-9 w-9 place-items-center rounded-xl bg-white text-vino transition-colors hover:bg-vino hover:text-blush disabled:opacity-30"
                aria-label="Quitar adulto"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-mono text-lg font-semibold text-vino" aria-live="polite">
                {adults}
              </span>
              <button
                type="button"
                onClick={() => {
                  setAdults((a) => Math.min(20, a + 1));
                  setAdded(false);
                }}
                className="grid h-9 w-9 place-items-center rounded-xl bg-white text-vino transition-colors hover:bg-vino hover:text-blush"
                aria-label="Agregar adulto"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {product.minPeople > 1 && (
              <p className="mt-2 text-xs text-vino/50">
                {dict.bookingWidget.minPeopleNotice.replace("{count}", String(product.minPeople))}
              </p>
            )}
          </div>

          <div className="text-vino/15">
            <div className="perforation" />
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-sm text-vino/60">
              {adults} × {formatMXN(product.price)}
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-vino">{formatMXN(total)}</span>
          </div>

          <div className="grid gap-2">
            <Button size="lg" onClick={handleAdd} variant={added ? "lima" : "default"}>
              {added ? (
                <>
                  <Check /> {dict.bookingWidget.addedToCart}
                </>
              ) : (
                dict.bookingWidget.addToItinerary
              )}
            </Button>
            {added ? (
              <Button size="lg" variant="outline" asChild>
                <Link href="/carrito">
                  {dict.bookingWidget.viewCart} <ArrowRight />
                </Link>
              </Button>
            ) : (
              <Button size="lg" variant="dark" onClick={handleBuyNow}>
                {dict.bookingWidget.bookAndPay} <ArrowRight />
              </Button>
            )}
          </div>
          <div className="barcode h-10 w-full text-vino/80" aria-hidden="true" />
        </div>
      </div>

      <Link
        href="/contacto"
        className="flex items-center justify-between rounded-2xl border-[1.5px] border-vino/10 bg-white/60 px-5 py-4 text-vino transition-colors hover:border-rosa hover:text-rosa"
      >
        <span className="flex items-center gap-3 font-semibold">
          <MessageCircle className="h-5 w-5 text-rosa" /> {dict.bookingWidget.questionsTalk}
        </span>
        <ArrowRight className="h-4 w-4" />
      </Link>

      <div className="rounded-2xl bg-white/60 p-5">
        <p className="eyebrow text-vino/55">{dict.bookingWidget.practicalData}</p>
        <dl className="mt-4 divide-y divide-vino/10 text-sm">
          {[
            [dict.bookingWidget.categoryLabel, product.category],
            [dict.bookingWidget.fromLabel, formatMXN(product.price)],
            [dict.bookingWidget.formatLabel, dict.bookingWidget.formatValue],
            [dict.bookingWidget.durationLabel, product.duration],
            [dict.bookingWidget.departureLabel, product.departure],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-2.5">
              <dt className="text-vino/55">{k}</dt>
              <dd className="text-right font-semibold text-vino">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}