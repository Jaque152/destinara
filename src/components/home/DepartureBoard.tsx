"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FlapText } from "@/components/site/FlapText";
import { useInView } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function DepartureBoard() {
  const { dict, lang } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const boardRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const ROWS = [
    {
      time: "06:15",
      code: "CDMX",
      city: "Ciudad de México",
      meta: lang === "es" ? "Centro histórico" : "Historic Center",
      nights: lang === "es" ? "3 noches" : "3 nights",
      gate: "A1",
      statusKey: "onTime",
      image: IMG.cdmx,
    },
    {
      time: "07:30",
      code: "SMA",
      city: "San Miguel de Allende",
      meta: "Bajío",
      nights: lang === "es" ? "2 noches" : "2 nights",
      gate: "B4",
      statusKey: "boarding",
      image: IMG.sanMiguel,
    },
    {
      time: "09:45",
      code: "YUC",
      city: "Yucatán",
      meta: lang === "es" ? "Cenotes y ruinas" : "Cenotes & ruins",
      nights: lang === "es" ? "4 noches" : "4 nights",
      gate: "C2",
      statusKey: "onTime",
      image: IMG.yucatanCenote,
    },
    {
      time: "11:10",
      code: "MTY",
      city: "Monterrey",
      meta: lang === "es" ? "Ciudad y diseño" : "City & design",
      nights: lang === "es" ? "2 noches" : "2 nights",
      gate: "A6",
      statusKey: "onTime",
      image: IMG.monterrey,
    },
    {
      time: "13:25",
      code: "RMY",
      city: "Riviera Maya",
      meta: lang === "es" ? "Caribe" : "Caribbean",
      nights: lang === "es" ? "5 noches" : "5 nights",
      gate: "D3",
      statusKey: "lastCall",
      image: IMG.rivieraMaya,
    },
  ];

  const getStatusText = (key: string) => {
    if (key === "lastCall") return dict.board.statusLastCall;
    if (key === "boarding") return dict.board.statusBoarding;
    return dict.board.statusOnTime;
  };

  const onMove = (e: React.MouseEvent) => {
    const board = boardRef.current;
    const prev = previewRef.current;
    if (!board || !prev) return;
    const r = board.getBoundingClientRect();
    prev.style.transform = `translate(${e.clientX - r.left + 28}px, ${e.clientY - r.top - 140}px)`;
  };

  return (
    <div ref={ref}>
      <div
        ref={boardRef}
        onMouseMove={onMove}
        onMouseLeave={() => setHovered(null)}
        className="relative overflow-hidden rounded-[2rem] bg-vino p-3 text-blush shadow-[0_40px_80px_-40px_rgba(34,8,26,0.8)] sm:p-5"
      >
        <div className="hidden grid-cols-[110px_120px_1fr_150px_80px_150px_40px] items-center gap-4 px-4 pb-4 pt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-lima/80 lg:grid">
          <span>{dict.board.colTime}</span>
          <span>{dict.board.colCode}</span>
          <span>{dict.board.colDest}</span>
          <span>{dict.board.colNights}</span>
          <span>{dict.board.colGate}</span>
          <span>{dict.board.colStatus}</span>
          <span />
        </div>

        <ul className="space-y-1.5">
          {ROWS.map((row, i) => {
            const statusLabel = getStatusText(row.statusKey);
            return (
              <li key={row.code}>
                <Link
                  href="/catalogo"
                  onMouseEnter={() => setHovered(i)}
                  className={cn(
                    "group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl px-4 py-4 transition-colors duration-300 lg:grid-cols-[110px_120px_1fr_150px_80px_150px_40px]",
                    hovered === i ? "bg-rosa" : "bg-vino-800",
                  )}
                >
                  <span className="arch-soft h-16 w-12 overflow-hidden lg:hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={row.image} alt="" className="h-full w-full object-cover" />
                  </span>
                  <span className="hidden text-sm lg:block">
                    <FlapText text={row.time} active={inView} />
                  </span>
                  <span className="hidden text-sm lg:block">
                    <FlapText text={row.code} length={4} active={inView} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-2xl font-bold tracking-tight sm:text-3xl">{row.city}</span>
                    <span className="mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-blush/55 lg:hidden">
                      {row.code} · {row.meta} · {row.nights}
                    </span>
                    <span className="mt-0.5 hidden font-mono text-[0.62rem] uppercase tracking-[0.16em] text-blush/55 lg:block">
                      {row.meta}
                    </span>
                  </span>
                  <span className="hidden font-mono text-xs uppercase tracking-widest text-blush/80 lg:block">{row.nights}</span>
                  <span className="hidden text-sm lg:block">
                    <FlapText text={row.gate} active={inView} />
                  </span>
                  <span
                    className={cn(
                      "hidden items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-widest lg:flex",
                      hovered === i ? "text-blush" : row.statusKey === "lastCall" ? "text-rosa" : "text-lima",
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full bg-current", row.statusKey !== "onTime" && "animate-blink")} />
                    {statusLabel}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-blush/10 transition-all duration-300 group-hover:rotate-45 group-hover:bg-blush group-hover:text-rosa">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          ref={previewRef}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
          style={{ transition: "transform 0.18s cubic-bezier(0.2,0.7,0.1,1)" }}
        >
          <div
            className={cn(
              "arch relative h-64 w-48 overflow-hidden border-[5px] border-blush shadow-2xl transition-all duration-300",
              hovered === null ? "scale-75 opacity-0" : "scale-100 opacity-100",
            )}
            style={{ transform: hovered === null ? undefined : "rotate(-4deg)" }}
          >
            {ROWS.map((row, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={row.code}
                src={row.image}
                alt=""
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                  hovered === i ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}