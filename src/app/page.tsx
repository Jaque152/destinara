"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { DepartureBoard } from "@/components/home/DepartureBoard";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { TicketCard } from "@/components/site/TicketCard";
import { IMG } from "@/lib/images";
import { PRODUCTS } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { dict, lang } = useLanguage();
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  const PRINCIPLES = [
    {
      n: "01",
      title: dict.method.p1Title,
      text: dict.method.p1Text,
    },
    {
      n: "02",
      title: dict.method.p2Title,
      text: dict.method.p2Text,
    },
    {
      n: "03",
      title: dict.method.p3Title,
      text: dict.method.p3Text,
    },
  ];

  const MARQUEE_ITEMS = lang === "es"
    ? ["Pueblos Mágicos", "Naturaleza", "Playa y Costa", "Cultura", "Circuitos", "Gastronomía", "A la medida"]
    : ["Magic Towns", "Nature", "Beach & Coast", "Culture", "Circuits", "Gastronomy", "Bespoke"];

  return (
    <>
      <Hero />

      {/* Nuestra mirada */}
      <section className="container relative py-28 md:py-40">
        <Reveal>
          <p className="eyebrow text-center text-rosa">{dict.look.eyebrow}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-6xl text-balance text-center text-[clamp(1.65rem,3.6vw,3.35rem)] font-medium leading-[1.16] tracking-[-0.03em] text-vino">
            {dict.look.text1} <em className="text-rosa">{dict.look.text1Em}</em>{dict.look.text2}{" "}
            <span className="font-extrabold">Destinara</span>{" "}
            {dict.look.text3} <em className="text-rosa">{dict.look.criterioEm}</em>.
          </p>
        </Reveal>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* El criterio */}
      <section id="metodo" className="relative overflow-hidden bg-vino py-28 text-blush md:py-36">
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-[50%] bg-rosa/20 blur-3xl" />
        <div className="container relative">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-lima">{dict.method.eyebrow}</p>
              <h2 className="mt-5 text-[clamp(3rem,7.5vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
                {dict.method.title} <em className="font-normal text-rosa">{dict.method.titleEm}</em>
                <br />
                {dict.method.titleSub}
              </h2>
            </Reveal>
            <Reveal delay={150} className="md:justify-self-end">
              <p className="max-w-sm text-lg leading-relaxed text-blush/70">
                {dict.method.subtitle}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div className="arch-soft group relative flex min-h-[26rem] flex-col overflow-hidden border-[1.5px] border-blush/15 px-8 pb-9 pt-14 transition-colors duration-500 hover:border-rosa hover:bg-rosa">
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-lima font-mono text-3xl font-medium text-vino transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-blush">
                    {p.n}
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-blush/70 group-hover:text-blush/90">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos curados */}
      <section className="py-28 md:py-36">
        <div className="container">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-rosa">{dict.board.eyebrow}</p>
              <h2 className="mt-4 text-[clamp(2.8rem,6.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-vino">
                {dict.board.title} <em className="font-normal text-rosa">{dict.board.titleEm}</em>
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="group inline-flex items-center gap-2 font-semibold text-vino underline decoration-rosa decoration-2 underline-offset-[6px] hover:text-rosa"
            >
              {dict.common.exploreCatalog} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <DepartureBoard />
          </Reveal>
        </div>
      </section>

      {/* Reserva en línea */}
      <section className="pb-28 md:pb-36">
        <div className="container">
          <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-rosa">{dict.onlineBooking.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-vino md:text-5xl">
                {dict.onlineBooking.title} <em className="font-normal text-rosa">{dict.onlineBooking.titleEm}</em>
              </h2>
            </div>
            <p className="max-w-sm text-vino/65">
              {dict.onlineBooking.description}
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <TicketCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* El ensayo */}
      <section className="relative bg-blush-200/60 py-28 md:py-36">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="arch aspect-[4/5] overflow-hidden border-[6px] border-blush shadow-[0_40px_80px_-40px_rgba(34,8,26,0.6)]">
              
              <img src={IMG.hacienda} alt="Hacienda en Yucatán" className="h-full w-full object-cover" />
            </div>
            <span className="absolute -left-3 top-16 -rotate-6 rounded-lg bg-lima px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-vino shadow-lg">
              {dict.essay.badge}
            </span>
            <div className="absolute -bottom-6 -right-2 grid h-28 w-28 place-items-center rounded-full bg-rosa text-center text-blush shadow-xl sm:-right-8">
              <span className="font-mono text-[0.58rem] uppercase leading-tight tracking-[0.16em]">
                {dict.essay.readLabel}
                <br />
                <span className="text-2xl font-bold tracking-tight">{dict.essay.readingTime}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-rosa">{dict.essay.eyebrow}</p>
            <h2 className="mt-4 text-[clamp(2.6rem,5.5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-vino">
              {dict.essay.title} <em className="font-normal text-rosa">{dict.essay.titleEm}</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-vino/75">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:italic first-letter:leading-[0.8] first-letter:text-rosa">
                {dict.essay.p1}
              </p>
              <p>{dict.essay.p2}</p>
              <p className="font-semibold text-vino">{dict.essay.p3}</p>
            </div>
            <Link
              href="/experiencia/ruta-maya-8-dias"
              className="group mt-9 inline-flex items-center gap-2 font-semibold text-vino underline decoration-rosa decoration-2 underline-offset-[6px] hover:text-rosa"
            >
              {dict.common.readEssay} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* El atelier */}
      <section id="esencia" className="relative overflow-hidden bg-rosa py-28 text-blush md:py-36">
        <div className="pointer-events-none absolute -right-32 top-10 h-[36rem] w-[36rem] rounded-full border-[1.5px] border-blush/20" />
        <div className="pointer-events-none absolute -right-10 top-32 h-[24rem] w-[24rem] rounded-full border-[1.5px] border-blush/20" />
        <div className="container relative grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="relative mx-auto h-[30rem] w-full max-w-md lg:col-span-5 lg:h-[36rem]">
            <div className="arch absolute left-0 top-0 h-[88%] w-[72%] overflow-hidden border-[6px] border-blush/90">
              
              <img src={IMG.atelierNotebook} alt="Cuaderno de viaje" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 aspect-square w-[52%] overflow-hidden rounded-full border-[6px] border-blush/90">
              
              <img src={IMG.mexicanFood} alt="Mesa mexicana" className="h-full w-full object-cover" />
            </div>
            <span className="absolute right-6 top-10 rotate-6 rounded-full bg-lima px-4 py-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-vino">
              {dict.atelier.badge}
            </span>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow text-vino">{dict.atelier.eyebrow}</p>
            <h2 className="mt-4 text-[clamp(2.8rem,6.5vw,6.2rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              {dict.atelier.title}
              <br />
              {dict.atelier.titleSub} <em className="font-normal text-lima">{dict.atelier.titleEm}</em>
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-blush/90">
              <p>{dict.atelier.p1}</p>
              <p>{dict.atelier.p2}</p>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-blush/25 pt-8">
              {[
                ["26", dict.atelier.stat1Label],
                ["18", dict.atelier.stat2Label],
                ["1 a 1", dict.atelier.stat3Label],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-extrabold tracking-tight md:text-4xl">{n}</dt>
                  <dd className="mt-1 font-mono text-[0.6rem] uppercase leading-snug tracking-[0.14em] text-blush/75">{l}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contacto"
              className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-vino pl-7 pr-2 font-semibold text-blush transition-colors hover:bg-lima hover:text-vino"
            >
              {dict.common.talk}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blush/10 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-28 text-center md:py-40">
        <Reveal>
          <p className="eyebrow text-rosa">{dict.cta.eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-5xl text-balance text-[clamp(2.6rem,6.8vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-vino">
            {dict.cta.title} <em className="font-normal text-rosa">{dict.cta.titleEm}</em>.
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-12 flex justify-center">
          <Link
            href="/contacto"
            className="ticket group flex items-stretch overflow-hidden rounded-2xl bg-vino text-blush transition-transform duration-300 hover:-rotate-1 hover:scale-[1.02] [--notch-y:50%]"
            style={{ ["--notch" as string]: "10px" }}
          >
            <span className="flex flex-col items-start px-8 py-5 text-left">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-lima">{dict.common.boardingPass}</span>
              <span className="mt-1 text-2xl font-bold tracking-tight">{dict.common.startTrip}</span>
            </span>
            <span className="w-px border-l-[1.5px] border-dashed border-blush/25" />
            <span className="grid w-20 place-items-center bg-rosa transition-colors group-hover:bg-lima group-hover:text-vino">
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}