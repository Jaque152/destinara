"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Plane } from "lucide-react";
import { FlapText } from "@/components/site/FlapText";
import { IMG } from "@/lib/images";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const [i, setI] = useState(0);
  const { lang, dict } = useLanguage();

  const DEPARTURES = [
    { code: "OAX", city: lang === "es" ? "OAXACA" : "OAXACA", time: "07:40", gate: "A3", statusKey: "boarding" },
    { code: "SMA", city: lang === "es" ? "SAN MIGUEL" : "SAN MIGUEL", time: "08:15", gate: "B1", statusKey: "onTime" },
    { code: "MID", city: lang === "es" ? "MERIDA" : "MERIDA", time: "09:05", gate: "C4", statusKey: "onTime" },
    { code: "TQL", city: lang === "es" ? "TEQUILA" : "TEQUILA", time: "10:30", gate: "A7", statusKey: "lastCall" },
    { code: "SLP", city: lang === "es" ? "HUASTECA" : "HUASTECA", time: "11:20", gate: "D2", statusKey: "boarding" },
    { code: "TUL", city: lang === "es" ? "TULUM" : "TULUM", time: "12:45", gate: "B6", statusKey: "onTime" },
  ];

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % DEPARTURES.length), 4200);
    return () => clearInterval(t);
  }, [DEPARTURES.length]);

  const d = DEPARTURES[i];

  const getStatusText = (key: string) => {
    if (key === "lastCall") return dict.board.statusLastCall.toUpperCase();
    if (key === "boarding") return dict.board.statusBoarding.toUpperCase();
    return dict.board.statusOnTime.toUpperCase();
  };

  return (
    <section className="relative overflow-hidden bg-blush pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-rosa-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(230,0,126,0.08),transparent_60%)]" />

      <div className="container relative grid items-end gap-12 pb-14 lg:grid-cols-12 lg:gap-6 lg:pb-20">
        <div className="relative z-10 lg:col-span-7">
          <p className="eyebrow flex animate-rise items-center gap-2 text-vino/70">
            <span className="h-2 w-2 rounded-full bg-rosa" />
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(3.6rem,10.5vw,10rem)] font-extrabold leading-[0.84] tracking-[-0.055em] text-vino">
            <span className="block animate-rise [animation-delay:80ms]">{dict.hero.title1}</span>
            <span className="block animate-rise [animation-delay:160ms]">{dict.hero.title2}</span>
            <span className="block animate-rise [animation-delay:240ms]">
              {dict.hero.title3} <em className="pr-2 font-normal tracking-[-0.03em] text-rosa">{dict.hero.criterio}</em>
            </span>
          </h1>

          <div className="mt-10 grid animate-rise gap-8 [animation-delay:380ms] sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-lg leading-relaxed text-vino/75">
              {dict.hero.description}
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[30rem] w-full max-w-md sm:h-[36rem] lg:col-span-5 lg:mx-0 lg:ml-auto lg:h-[40rem]">
          <div className="absolute left-1/2 top-[8%] aspect-square w-[78%] -translate-x-1/2 overflow-hidden">
            <div className="h-full w-full animate-sun-rise rounded-full bg-rosa" />
          </div>
          <div className="arch absolute bottom-0 left-1/2 h-[86%] w-[72%] -translate-x-1/2 overflow-hidden border-[6px] border-blush bg-rosa-100 shadow-[0_40px_80px_-30px_rgba(34,8,26,0.55)]">
            
            <img src={IMG.monarch} alt="Arquitectura mexicana" className="h-full w-full object-cover" />
          </div>
          <div className="arch absolute -left-2 bottom-6 h-44 w-32 overflow-hidden border-[5px] border-blush shadow-xl sm:h-56 sm:w-40 lg:-left-10">
            
            <img src={IMG.yucatanCenote} alt="Cenote en Yucatán" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-2 top-[4%] h-32 w-32 sm:h-36 sm:w-36 lg:-right-6">
            <div className="absolute inset-0 rounded-full bg-lima" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow text-vino" aria-hidden="true">
              <defs>
                <path id="stampCircle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
              </defs>
              <text className="fill-current font-mono" fontSize="14.5" letterSpacing="3.6">
                <textPath href="#stampCircle">
                  {lang === "es" ? "DESTINARA · CURADURÍA DE VIAJES · MX · " : "DESTINARA · TRAVEL CURATION · MX · "}
                </textPath>
              </text>
            </svg>
            <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-rosa" aria-hidden="true">
              <path d="M12 1.5l2.6 7.9 7.9 2.6-7.9 2.6-2.6 7.9-2.6-7.9-7.9-2.6 7.9-2.6z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute -right-1 bottom-16 hidden rounded-2xl bg-vino px-4 py-3 text-blush shadow-2xl sm:block lg:-right-8">
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-lima">
              {lang === "es" ? "Pase · DST" : "Pass · DST"}
            </p>
            <p className="mt-1 flex items-center gap-2 text-lg font-bold tracking-tight">
              CDMX <Plane className="h-4 w-4 text-rosa" /> {d.code}
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-vino text-blush">
        <div className="container flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-8">
          <p className="eyebrow flex shrink-0 items-center gap-2 text-lima">
            <span className="h-2 w-2 animate-blink rounded-full bg-lima" />
            {dict.hero.nextDepartures}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base">
            <Field label={dict.hero.time}>
              <FlapText text={d.time} length={5} />
            </Field>
            <Field label={dict.hero.destination}>
              <FlapText text={d.city} length={10} />
            </Field>
            <Field label={dict.hero.gate} className="hidden sm:flex">
              <FlapText text={d.gate} length={2} />
            </Field>
            <Field label={dict.hero.status}>
              <span
                className={
                  d.statusKey === "lastCall"
                    ? "font-mono text-xs font-semibold tracking-widest text-rosa"
                    : "font-mono text-xs font-semibold tracking-widest text-lima"
                }
              >
                {getStatusText(d.statusKey)}
              </span>
            </Field>
          </div>
          <Link
            href="/catalogo"
            className="font-mono text-xs uppercase tracking-[0.16em] text-blush/70 underline decoration-rosa underline-offset-4 hover:text-lima md:ml-auto"
          >
            {dict.hero.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-blush/40">{label}</span>
      {children}
    </div>
  );
}