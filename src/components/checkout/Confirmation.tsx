"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDateLong } from "@/lib/cart";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export interface Order {
  id: string;
  createdAt: string;
  customer: { name: string; email: string; phone: string };
  lines: { 
    slug: string; 
    code: string; 
    title: string; 
    date: string; 
    adults: number; 
    unitPrice: number; 
    lineTotal: number;
  }[];
  subtotal: number;
  discount: number;
  coupon: string | null;
  total: number;
  payment: {
    method: "card";
    status: "pagado" | "pendiente";
    brand?: string;
    last4?: string;
  };
}

export function Confirmation({ order }: { order: Order }) {
  const { lang, dict } = useLanguage();
  const isPaid = order.payment.status === "pagado";
  const firstName = order.customer.name.split(" ")[0];

  const paymentDetails = order.payment.brand && order.payment.last4 
    ? `${order.payment.brand} ···· ${order.payment.last4}` 
    : dict.confirmationView.defaultCard;

  return (
    <section className="container pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto grid h-20 w-20 animate-rise place-items-center rounded-full bg-lima">
          <Check className="h-9 w-9 text-vino" strokeWidth={3} />
        </div>
        
        <p className="eyebrow mt-8 text-rosa">
          {isPaid ? dict.confirmationView.paidTitle : dict.confirmationView.pendingTitle}
        </p>
        
        <h1 className="mt-4 text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.88] tracking-[-0.055em] text-vino">
          {dict.confirmationView.headlineTitle} <em className="font-normal text-rosa">{dict.confirmationView.headlineTitleEm}</em>!
        </h1>
        
        <p className="mx-auto mt-5 max-w-xl text-lg text-vino/70">
          {dict.confirmationView.messagePrefix} {firstName}{dict.confirmationView.messageSuffixPaid}{" "}
          <span className="font-medium text-vino">{order.customer.email}</span>{dict.confirmationView.messageConcierge}
        </p>
      </div>

      {/* Ticket */}
      <div className="mx-auto mt-14 max-w-4xl">
        <div className="ticket grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgba(34,8,26,0.55)] md:grid-cols-[1fr_280px]">
          <div className="p-7 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-rosa">
                {dict.confirmationView.passHeader}
              </p>
              <span
                className={
                  isPaid
                    ? "rounded-full bg-lima px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-widest text-vino"
                    : "rounded-full bg-rosa/20 px-3 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-widest text-rosa"
                }
              >
                {isPaid ? dict.confirmationView.statusPaid : dict.confirmationView.statusPending}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <Meta label={dict.confirmationView.passengerLabel} value={order.customer.name} />
              <Meta label={dict.confirmationView.orderLabel} value={order.id} mono />
              <Meta label={dict.confirmationView.paymentLabel} value={paymentDetails} />
            </div>

            <ul className="mt-8 divide-y divide-vino/10 border-y border-vino/10">
              {order.lines.map((l) => (
                <li key={`${l.slug}-${l.date}`} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold text-vino">{l.title}</p>
                    <p className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-vino/50">
                      {l.code} · {formatDateLong(l.date, lang)} · {l.adults} {l.adults === 1 ? dict.checkoutView.adultSingular : dict.checkoutView.adultPlural}
                    </p>
                  </div>
                  <p className="font-bold text-vino">{formatMXN(l.lineTotal)}</p>
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-1.5 text-sm">
              {order.discount > 0 && (
                <div className="flex justify-between text-rosa">
                  <dt>{dict.cart.discount} {order.coupon && `(${order.coupon})`}</dt>
                  <dd>−{formatMXN(order.discount)}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <dt className="font-semibold text-vino">{dict.cart.total}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-vino">{formatMXN(order.total)}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col border-t-[1.5px] border-dashed border-vino/15 bg-vino p-7 text-blush md:border-l-[1.5px] md:border-t-0">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-lima">{dict.confirmationView.nextStepTitle}</p>
            <p className="mt-3 text-lg font-semibold leading-snug">
              {dict.confirmationView.nextStepText}
            </p>
            <div className="barcode mt-auto h-14 w-full pt-8 text-blush/80" aria-hidden="true" />
            <p className="mt-2 text-center font-mono text-[0.6rem] tracking-[0.3em] text-blush/50">{order.id}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/catalogo">{dict.confirmationView.continueExploring}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">{dict.confirmationView.backHome}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value, mono }: { label: string; value?: string; mono?: boolean }) {
  if (!value) return null;
  return (
    <div>
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-vino/45">{label}</p>
      <p className={mono ? "mt-1 font-mono font-semibold tracking-wider text-vino" : "mt-1 font-semibold text-vino"}>
        {value}
      </p>
    </div>
  );
}