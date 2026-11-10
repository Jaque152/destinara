"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Lock, Minus, Plus, Tag, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatDateLong, isoDate, useCart } from "@/lib/cart";
import { COUPONS, formatMXN } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export function CartView() {
  const { lang, dict } = useLanguage();
  const {
    lines,
    hydrated,
    subtotal,
    discount,
    total,
    coupon,
    travelers,
    updateAdults,
    updateDate,
    remove,
    applyCoupon,
    removeCoupon,
    clear,
  } = useCart();
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => setMinDate(isoDate(2)), []);

  const submitCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    if (applyCoupon(code)) {
      setCodeError(null);
      setCode("");
      toast.success(dict.cartView.couponApplied, { description: COUPONS[code.trim().toUpperCase()]?.label });
    } else {
      setCodeError(dict.cartView.invalidCoupon);
    }
  };

  return (
    <section className="container pb-24 pt-32 md:pt-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-rosa">{dict.cartView.eyebrow}</p>
          <h1 className="mt-4 text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.055em] text-vino">
            {dict.cartView.title} <em className="font-normal text-rosa">{dict.cartView.titleEm}</em>
          </h1>
        </div>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 font-semibold text-vino underline decoration-rosa decoration-2 underline-offset-[6px] hover:text-rosa"
        >
          <ArrowLeft className="h-4 w-4" /> {dict.cartView.keepExploring}
        </Link>
      </div>

      {!hydrated ? (
        <div className="mt-14 h-64 animate-pulse rounded-[2rem] bg-white/60" />
      ) : lines.length === 0 ? (
        <div className="mt-14 grid items-center gap-10 rounded-[2.5rem] bg-white p-10 md:grid-cols-[auto_1fr] md:p-14">
          <div className="arch relative mx-auto h-56 w-40 overflow-hidden bg-rosa-100">
            <div className="absolute inset-x-5 bottom-0 h-16 rounded-t-full bg-lima" />
            <div className="absolute left-1/2 top-12 h-10 w-10 -translate-x-1/2 rotate-45 bg-rosa" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-vino md:text-4xl">
              {dict.cartView.emptyTitle} <em className="font-normal text-rosa">{dict.cartView.emptyTitleEm}</em>
            </h2>
            <p className="mt-3 max-w-md text-vino/65">
              {dict.cartView.emptyText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/catalogo">{dict.common.exploreCatalog}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contacto">{dict.cartView.bespokeBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Lines */}
          <div className="lg:col-span-8">
            <div className="hidden grid-cols-[1fr_170px_150px_140px] gap-4 border-b border-vino/10 pb-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-vino/50 md:grid">
              <span>{dict.cartView.colExp}</span>
              <span>{dict.cartView.colDate}</span>
              <span>{dict.cartView.colAdults}</span>
              <span className="text-right">{dict.cartView.colSubtotal}</span>
            </div>
            <ul className="divide-y divide-vino/10">
              {lines.map((line) => (
                <li key={line.id} className="grid gap-5 py-6 md:grid-cols-[1fr_170px_150px_140px] md:items-center md:gap-4">
                  <div className="flex gap-4">
                    <Link
                      href={`/experiencia/${line.slug}`}
                      className="arch-soft h-28 w-24 shrink-0 overflow-hidden bg-rosa-100"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={line.product.image} alt="" className="h-full w-full object-cover" />
                    </Link>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-rosa">
                        {line.product.code} · {line.product.category}
                      </p>
                      <Link
                        href={`/experiencia/${line.slug}`}
                        className="mt-1 block text-lg font-bold leading-tight tracking-tight text-vino hover:text-rosa"
                      >
                        {line.product.title}
                      </Link>
                      <p className="mt-1 text-sm text-vino/55">
                        {formatMXN(line.product.price)} {dict.cartView.perAdult} · {line.product.duration}
                      </p>
                      <button
                        type="button"
                        onClick={() => remove(line.id)}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-vino/50 hover:text-rosa"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> {dict.cartView.remove}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="mb-1 block font-mono text-[0.58rem] uppercase tracking-[0.16em] text-vino/45 md:hidden">
                      {dict.cartView.colDate}
                    </span>
                    <div className="relative">
                      <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rosa" />
                      <input
                        type="date"
                        value={line.date}
                        min={minDate || undefined}
                        onChange={(e) => e.target.value && updateDate(line.id, e.target.value)}
                        aria-label={`Fecha para ${line.product.short}`}
                        className="h-11 w-full rounded-xl border-[1.5px] border-vino/15 bg-white pl-9 pr-2 text-sm text-vino focus:border-rosa focus:outline-none focus:ring-4 focus:ring-rosa/15"
                      />
                    </div>
                    <span className="mt-1 block text-xs text-vino/45">{formatDateLong(line.date, lang)}</span>
                  </div>

                  <div>
                    <span className="mb-1 block font-mono text-[0.58rem] uppercase tracking-[0.16em] text-vino/45 md:hidden">
                      {dict.cartView.colAdults}
                    </span>
                    <div className="inline-flex items-center rounded-xl border-[1.5px] border-vino/15 bg-white p-1">
                      <button
                        type="button"
                        onClick={() => updateAdults(line.id, line.adults - 1)}
                        disabled={line.adults <= line.product.minPeople}
                        className="grid h-8 w-8 place-items-center rounded-lg hover:bg-vino hover:text-blush disabled:opacity-30"
                        aria-label="Quitar adulto"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-10 text-center font-mono text-sm font-semibold">{line.adults}</span>
                      <button
                        type="button"
                        onClick={() => updateAdults(line.id, line.adults + 1)}
                        className="grid h-8 w-8 place-items-center rounded-lg hover:bg-vino hover:text-blush"
                        aria-label="Agregar adulto"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    {line.product.minPeople > 1 && (
                      <span className="mt-1 block text-xs text-vino/45">{dict.cartView.minPeople} {line.product.minPeople}</span>
                    )}
                  </div>

                  <p className="text-xl font-extrabold tracking-tight text-vino md:text-right">{formatMXN(line.lineTotal)}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                clear();
                toast(dict.cartView.cartEmptiedToast);
              }}
              className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-vino/50 hover:text-rosa"
            >
              {dict.cartView.emptyCartBtn}
            </button>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-4">
            <div className="ticket rounded-[2rem] bg-vino p-7 text-blush lg:sticky lg:top-28 [--notch-y:62%]">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-lima">{dict.cartView.summary}</p>
              <p className="mt-2 text-sm text-blush/60">
                {lines.length} {lines.length === 1 ? dict.cart.experience : dict.cart.experiences} · {travelers}{" "}
                {travelers === 1 ? dict.cart.traveler : dict.cart.travelers}
              </p>

              <form onSubmit={submitCoupon} className="mt-6">
                {coupon ? (
                  <div className="flex items-center justify-between rounded-2xl bg-blush/10 px-4 py-3">
                    <span className="flex items-center gap-2 text-sm">
                      <Tag className="h-4 w-4 text-lima" />
                      <span className="font-mono font-semibold tracking-widest">{coupon}</span>
                    </span>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="grid h-7 w-7 place-items-center rounded-full hover:bg-blush/10"
                      aria-label="Quitar cupón"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <label htmlFor="coupon" className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-blush/50">
                      {dict.cartView.discountCode}
                    </label>
                    <div className="mt-2 flex gap-2">
                      <input
                        id="coupon"
                        value={code}
                        onChange={(e) => {
                          setCode(e.target.value);
                          setCodeError(null);
                        }}
                        placeholder="DESTINARA10"
                        className="h-11 min-w-0 flex-1 rounded-full border-[1.5px] border-blush/15 bg-blush/5 px-4 font-mono text-sm uppercase tracking-widest text-blush placeholder:text-blush/30 focus:border-lima focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="h-11 rounded-full bg-blush/10 px-4 text-sm font-semibold hover:bg-lima hover:text-vino"
                      >
                        {dict.cartView.apply}
                      </button>
                    </div>
                    {codeError && <p className="mt-2 text-xs text-rosa-200">{codeError}</p>}
                  </>
                )}
              </form>

              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between text-blush/70">
                  <dt>{dict.cart.subtotal}</dt>
                  <dd>{formatMXN(subtotal)}</dd>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-lima">
                    <dt>{dict.cart.discount}</dt>
                    <dd>−{formatMXN(discount)}</dd>
                  </div>
                )}
                <div className="flex justify-between text-blush/70">
                  <dt>{dict.cartView.serviceFees}</dt>
                  <dd>{dict.cartView.freeFees}</dd>
                </div>
              </dl>
              <div className="my-6 text-blush/20">
                <div className="perforation" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-semibold">{dict.cartView.total}</span>
                <span className="text-3xl font-extrabold tracking-tight">{formatMXN(total)}</span>
              </div>
              <p className="mt-1 text-right font-mono text-[0.58rem] uppercase tracking-[0.18em] text-blush/45">{dict.cart.taxIncluded}</p>

              <Button asChild size="lg" variant="lima" className="mt-6 w-full">
                <Link href="/checkout">
                  {dict.cartView.checkoutBtn} <ArrowRight />
                </Link>
              </Button>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-blush/50">
                <Lock className="h-3.5 w-3.5" /> {dict.cartView.securePayment}
              </p>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}