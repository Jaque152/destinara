"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight, Clock, Info, Lightbulb, MapPin, Users, X } from "lucide-react";
import { BookingWidget } from "@/components/product/BookingWidget";
import { TicketCard } from "@/components/site/TicketCard";
import { Reveal } from "@/components/site/Reveal";
import { formatMXN, type Product } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export function ExperienceView({ product, related }: { product: Product; related: Product[] }) {
  const { dict } = useLanguage();
  const categoryLabel = dict.catalogView.categories[product.category] || product.category;

  return (
    <>
      {/* Header */}
      <section className="container pt-28 sm:pt-32">
        <nav aria-label="Ruta" className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-vino/55">
          <Link href="/catalogo" className="hover:text-rosa">
            {dict.header.catalog}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/catalogo?categoria=${encodeURIComponent(product.category)}`} className="hover:text-rosa">
            {categoryLabel}
          </Link>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex animate-rise flex-wrap items-center gap-2">
              <span className="rounded-full bg-rosa px-3 py-1.5 text-xs font-semibold text-blush">{categoryLabel}</span>
              <span className="rounded-md bg-vino px-2 py-1 font-mono text-[0.6rem] tracking-widest text-lima">{product.code}</span>
            </div>
            <h1 className="mt-5 animate-rise text-balance text-[clamp(2.3rem,5.2vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-vino [animation-delay:80ms]">
              {product.title}
            </h1>
          </div>
          <div className="animate-rise lg:col-span-4 [animation-delay:160ms]">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-vino/55">{dict.experiencePage.fromPerAdult}</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-vino">{formatMXN(product.price)}</p>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-vino/55">
              {dict.experiencePage.taxIncluded}
            </p>
          </div>
        </div>

        <div className="relative mt-10 h-[52vh] min-h-[22rem] animate-rise overflow-hidden rounded-[2.5rem] [animation-delay:240ms] md:h-[64vh]">
          
          <img src={product.image} alt={product.short} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-vino/70 via-vino/10 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-6 sm:bottom-6">
            <Pill icon={<MapPin className="h-3.5 w-3.5" />}>{product.region}</Pill>
            <Pill icon={<Clock className="h-3.5 w-3.5" />}>{product.duration}</Pill>
            <Pill icon={<Users className="h-3.5 w-3.5" />}>
              {dict.experiencePage.minPeople.replace("{count}", String(product.minPeople))}
            </Pill>
            <Pill>{product.departure}</Pill>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container grid gap-14 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="space-y-16 lg:col-span-7 xl:col-span-8">
          <Reveal>
            <p className="eyebrow text-rosa">{dict.experiencePage.eyebrow}</p>
            <p className="mt-5 text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-[1.3] tracking-[-0.02em] text-vino">
              {product.summary}
            </p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-vino">
                {dict.experiencePage.whyTitle} <em className="font-normal text-rosa">{dict.experiencePage.whyTitleEm}</em>?
              </h2>
              <p className="mt-4 leading-relaxed text-vino/70">{product.why}</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl font-bold tracking-tight text-vino">
                {dict.experiencePage.specialTitle} <em className="font-normal text-rosa">{dict.experiencePage.specialTitleEm}</em>?
              </h2>
              <p className="mt-4 leading-relaxed text-vino/70">{product.special}</p>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid overflow-hidden rounded-[2rem] bg-white md:grid-cols-2">
              <div className="p-8">
                <p className="eyebrow text-rosa">{dict.experiencePage.includes}</p>
                <ul className="mt-5 space-y-3">
                  {product.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-vino">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lima">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-dashed border-vino/15 bg-blush-200/50 p-8 md:border-l md:border-t-0">
                <p className="eyebrow text-vino/60">{dict.experiencePage.excludes}</p>
                <ul className="mt-5 space-y-3">
                  {product.excludes?.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-vino/70">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-vino/10">
                        <X className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-vino">
                <Info className="h-5 w-5 text-rosa" /> {dict.experiencePage.importantInfo}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {product.info?.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-vino/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rosa" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-vino">
                <Lightbulb className="h-5 w-5 text-rosa" /> {dict.experiencePage.recommendations}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-vino/70">{product.tips}</p>
            </Reveal>
          </div>
        </div>

        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="lg:sticky lg:top-28">
            <BookingWidget product={product} />
          </div>
        </aside>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-blush-200/60 py-20 md:py-28">
          <div className="container">
            <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-rosa">{dict.experiencePage.nextTripEyebrow}</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-vino md:text-5xl">
                  {dict.experiencePage.alsoIn} <em className="font-normal text-rosa">{categoryLabel}</em>
                </h2>
              </div>
              <Link
                href={`/catalogo?categoria=${encodeURIComponent(product.category)}`}
                className="font-semibold text-vino underline decoration-rosa decoration-2 underline-offset-[6px] hover:text-rosa"
              >
                {dict.experiencePage.viewFullSection}
              </Link>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80} className="h-full">
                  <TicketCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container py-24 text-center md:py-32">
        <Reveal>
          <p className="eyebrow text-rosa">{dict.experiencePage.ctaEyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.4rem,6vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-vino">
            {dict.experiencePage.ctaTitle} <em className="font-normal text-rosa">{dict.experiencePage.ctaTitleEm}</em>?
          </h2>
          <Link
            href="/contacto"
            className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-rosa pl-7 pr-2 font-semibold text-blush hover:bg-vino"
          >
            {dict.experiencePage.startTrip}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blush/15 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function Pill({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-blush/95 px-3.5 py-2 text-xs font-semibold text-vino backdrop-blur">
      {icon && <span className="text-rosa">{icon}</span>}
      {children}
    </span>
  );
}