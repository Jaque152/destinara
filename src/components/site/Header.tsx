"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, ShoppingBag, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";
import { useLanguage } from "@/context/LanguageContext";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { CONTACT } from "@/lib/products";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { count, setOpen, hydrated } = useCart();
  const { lang, setLang, dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bump, setBump] = useState(false);

  const NAV = [
    { href: "/#metodo", label: dict.header.criterion },
    { href: "/catalogo", label: dict.header.catalog },
    { href: "/#esencia", label: dict.header.aboutUs },
    { href: "/contacto", label: dict.header.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hydrated || count === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [count, hydrated]);

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 rounded-full border pl-5 pr-2 transition-all duration-500",
          scrolled
            ? "border-vino/10 bg-blush/85 shadow-[0_18px_40px_-28px_rgba(34,8,26,0.55)] backdrop-blur-xl"
            : "border-transparent bg-blush/60 backdrop-blur-md",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => {
            const active = item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href) && !item.href.includes("#"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.92rem] font-medium text-vino/80 transition-colors hover:text-vino",
                  active && "bg-vino text-blush hover:text-blush",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Selector de idioma */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-vino ring-1 ring-vino/10 hover:bg-vino hover:text-blush transition-colors"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "relative grid h-12 w-12 place-items-center rounded-full bg-white/80 text-vino ring-1 ring-vino/10 transition-all hover:bg-vino hover:text-blush",
              bump && "scale-110",
            )}
            aria-label={`${dict.header.openCart} (${count})`}
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span
              className={cn(
                "absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full px-1 font-mono text-[0.62rem] font-semibold transition-all",
                count > 0 ? "bg-rosa text-blush" : "bg-vino/10 text-vino/60",
              )}
            >
              {hydrated ? count : 0}
            </span>
          </button>

          <Link
            href="/contacto"
            className="group hidden h-12 items-center gap-2 rounded-full bg-rosa pl-5 pr-2 text-[0.92rem] font-semibold text-blush transition-colors hover:bg-vino sm:inline-flex"
          >
            {dict.common.startTrip}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-blush/15 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-full bg-vino text-blush lg:hidden"
            aria-label={dict.header.openMenu}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="bg-vino text-blush">
          <SheetTitle className="sr-only">{dict.header.menu}</SheetTitle>
          <SheetDescription className="sr-only">{dict.header.menuSubtitle}</SheetDescription>
          <div className="flex h-full flex-col px-7 pb-8 pt-8">
            <div className="flex items-center justify-between">
              <Logo tone="light" />
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 rounded-full border border-blush/20 bg-blush/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-lima"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{lang.toUpperCase()}</span>
              </button>
            </div>
            <nav className="mt-14 flex flex-col">
              {[{ href: "/", label: dict.header.home }, ...NAV].map((item, i) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between border-b border-blush/10 py-4 text-4xl font-bold tracking-tight transition-colors hover:text-lima"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-blush/40 group-hover:text-lima">0{i + 1}</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Link
                href="/contacto"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-lima font-semibold text-vino"
              >
                {dict.common.startTrip}
              </Link>
            </SheetClose>
            <div className="mt-auto space-y-1.5 pt-10 font-mono text-xs text-blush/60">
              <a href={CONTACT.phoneHref} className="block hover:text-lima">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block hover:text-lima">
                {CONTACT.email}
              </a>
              <span className="block">{CONTACT.city}</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}