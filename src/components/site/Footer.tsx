"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo, LogoMark } from "./Logo";
import { CONTACT } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { dict } = useLanguage();

  const SECTIONS = [
    { href: "/#metodo", label: dict.footer.sections === "Secciones" ? "El criterio" : "The Criterion" },
    { href: "/catalogo", label: dict.header.catalog },
    { href: "/#esencia", label: dict.header.aboutUs },
    { href: "/contacto", label: dict.common.startTrip },
    { href: "/contacto?interes=medida", label: dict.footer.customTrip },
    { href: "/legal/informacion", label: dict.footer.travelInfo },
  ];

  const LEGAL = [
    { href: "/legal/privacidad", label: dict.footer.privacy },
    { href: "/legal/terminos", label: dict.footer.terms },
    { href: "/legal/reembolsos", label: dict.footer.refunds },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden bg-vino text-blush">
      {/* CTA band */}
      <div className="relative border-b border-blush/10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-rosa/25 blur-3xl" />
        <div className="container relative grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-end md:py-28">
          <div>
            <p className="eyebrow text-lima">{dict.footer.tagline}</p>
            <h2 className="mt-5 text-balance text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {dict.footer.title} <em className="text-rosa">{dict.footer.titleEm}</em>.
            </h2>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-4 rounded-full bg-lima py-2 pl-7 pr-2 text-lg font-semibold text-vino transition-colors hover:bg-blush"
            >
              {dict.common.startTrip}
              <span className="grid h-12 w-12 place-items-center rounded-full bg-vino text-lima transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo tone="light" showDomain />
          <p className="mt-6 text-sm leading-relaxed text-blush/65">
            {dict.footer.description}
          </p>
        </div>
        <FooterCol title={dict.footer.sections} links={SECTIONS} />
        <FooterCol title={dict.footer.legal} links={LEGAL} />
        <div>
          <p className="eyebrow text-blush/45">{dict.footer.contact}</p>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-lima">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-lima">
                {CONTACT.email}
              </a>
            </li>
            <li className="text-blush/60">{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="container relative select-none" aria-hidden="true">
        <div className="flex items-end gap-[2vw] leading-none">
          <LogoMark className="mb-[1.4vw] h-[10vw] max-h-44" />
          <span className="block text-[15vw] font-extrabold tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_#E6007E] xl:text-[13rem]">
            destinara
          </span>
        </div>
      </div>

      {/* Base */}
      <div className="border-t border-blush/10">
        <div className="container flex flex-col items-start justify-between gap-4 py-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-blush/55 sm:flex-row sm:items-center">
          <span>© 2026 Destinara · {CONTACT.domain}</span>
          <div className="flex items-center gap-2">
            {["Visa", "Mastercard"].map((p) => (
              <span key={p} className="rounded-md border border-blush/15 px-2 py-1 text-[0.6rem] text-blush/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow text-blush/45">{title}</p>
      <ul className="mt-5 space-y-3 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group inline-flex items-center gap-1 transition-colors hover:text-lima">
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}