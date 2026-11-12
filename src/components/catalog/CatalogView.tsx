"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { TicketCard } from "@/components/site/TicketCard";
import { Reveal } from "@/components/site/Reveal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORIES, PRODUCTS, getLocalizedProduct, type Category } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

type Sort = "destacados" | "precio-asc" | "precio-desc" | "nombre";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function CatalogView({
  initialCategory,
  initialQuery,
}: {
  initialCategory: string | null;
  initialQuery: string;
}) {
  const { lang, dict } = useLanguage();
  const valid = CATEGORIES.includes(initialCategory as Category) ? (initialCategory as Category) : null;
  const [category, setCategory] = useState<Category | null>(valid);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<Sort>("destacados");

  const counts = useMemo(() => {
    const map = new Map<Category, number>();
    for (const p of PRODUCTS) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    return map;
  }, []);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    const list = PRODUCTS.filter((p) => (category ? p.category === category : true));
    
    // Mapear productos con su versión localizada según el idioma actual
    let localizedList = list.map((p) => getLocalizedProduct(p, lang));

    if (q) {
      localizedList = localizedList.filter((p) => normalize(`${p.title} ${p.short} ${p.region} ${p.summary} ${p.category}`).includes(q));
    }
    const sorted = [...localizedList];
    switch (sort) {
      case "precio-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "precio-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "nombre":
        sorted.sort((a, b) => a.short.localeCompare(b.short, lang === "en" ? "en" : "es"));
        break;
      default:
        sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return sorted;
  }, [category, query, sort, lang]);

  const getCategoryLabel = (cat: Category): string => {
    const categoriesMap = dict.catalogView.categories as Record<string, string>;
    return categoriesMap[cat] ?? cat;
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-vino pb-16 pt-36 text-blush md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -right-20 top-10 h-[34rem] w-[34rem] rounded-full bg-rosa/30 blur-3xl" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow animate-rise text-lima">{dict.catalogView.eyebrow}</p>
            <h1 className="mt-5 animate-rise text-[clamp(3.4rem,10vw,9rem)] font-extrabold leading-[0.85] tracking-[-0.055em] [animation-delay:100ms]">
              {dict.catalogView.title} <em className="font-normal text-rosa">{dict.catalogView.titleEm}</em>
            </h1>
          </div>
          <div className="animate-rise [animation-delay:200ms]">
            <p className="text-lg leading-relaxed text-blush/75">
              {dict.catalogView.description}
            </p>
            <div className="mt-6 flex items-center gap-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-blush/60">
              <span>
                <span className="mr-1 text-2xl font-bold tracking-tight text-lima">{PRODUCTS.length}</span> {dict.catalogView.entries}
              </span>
              <span>
                <span className="mr-1 text-2xl font-bold tracking-tight text-lima">{CATEGORIES.length}</span> {dict.catalogView.sections}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[5.5rem] z-30 border-b border-vino/10 bg-blush/90 backdrop-blur-xl">
        <div className="container flex flex-col gap-3 py-4 lg:flex-row lg:items-center">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
            <Chip active={category === null} onClick={() => setCategory(null)} count={PRODUCTS.length}>
              {dict.catalogView.all}
            </Chip>
            {CATEGORIES.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)} count={counts.get(c) ?? 0}>
                {getCategoryLabel(c)}
              </Chip>
            ))}
          </div>
          <div className="flex gap-2 lg:ml-auto">
            <label className="relative flex-1 lg:w-64 lg:flex-none">
              <span className="sr-only">{dict.catalogView.searchPlaceholder}</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-vino/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={dict.catalogView.searchPlaceholder}
                className="h-11 w-full rounded-full border-[1.5px] border-vino/15 bg-white/80 pl-10 pr-9 text-sm text-vino placeholder:text-vino/40 focus:border-rosa focus:outline-none focus:ring-4 focus:ring-rosa/15"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-vino/50 hover:bg-vino/10"
                  aria-label={dict.catalogView.clearSearch}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </label>
            <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
              <SelectTrigger className="h-11 w-44 rounded-full text-sm" aria-label={dict.catalogView.sortLabel}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="destacados">{dict.catalogView.sortFeatured}</SelectItem>
                <SelectItem value="precio-asc">{dict.catalogView.sortPriceAsc}</SelectItem>
                <SelectItem value="precio-desc">{dict.catalogView.sortPriceDesc}</SelectItem>
                <SelectItem value="nombre">{dict.catalogView.sortName}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container py-14 md:py-20">
        <p className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-vino/55">
          {results.length} {results.length === 1 ? dict.catalogView.tripSingular : dict.catalogView.tripPlural}
          {category ? ` · ${getCategoryLabel(category)}` : ""}
          {query ? ` · “${query}”` : ""}
        </p>
        {results.length === 0 ? (
          <div className="flex flex-col items-center rounded-[2rem] border-[1.5px] border-dashed border-vino/20 px-6 py-20 text-center">
            <p className="text-3xl font-bold tracking-tight text-vino">
              {dict.catalogView.noMatchesTitle} <em className="font-normal text-rosa">{dict.catalogView.noMatchesTitleEm}</em>
            </p>
            <p className="mt-3 max-w-md text-vino/60">
              {dict.catalogView.noMatchesText}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory(null);
              }}
              className="mt-6 rounded-full bg-vino px-6 py-3 text-sm font-semibold text-blush hover:bg-rosa"
            >
              {dict.catalogView.clearFilters}
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 70} className="h-full">
                <TicketCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* A la medida */}
      <section className="container pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-lima px-8 py-14 md:px-16 md:py-20">
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-56 rounded-t-full bg-rosa md:h-96 md:w-72" />
            <div className="pointer-events-none absolute -bottom-24 right-36 hidden h-56 w-40 rounded-t-full bg-vino md:block" />
            <div className="relative max-w-2xl">
              <p className="eyebrow text-vino/70">{dict.catalogView.customSectionEyebrow}</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-vino">
                {dict.catalogView.customSectionTitle} <em className="font-normal text-rosa">{dict.catalogView.customSectionTitleEm}</em>?
              </h2>
              <Link
                href="/contacto?interes=medida"
                className="group mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-vino pl-7 pr-2 font-semibold text-blush hover:bg-rosa"
              >
                {dict.catalogView.customSectionBtn}
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blush/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Chip({
  active,
  onClick,
  count,
  children,
}: {
  active: boolean;
  onClick: () => void;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-11 shrink-0 items-center gap-2 rounded-full border-[1.5px] px-4 text-sm font-medium transition-all",
        active
          ? "border-vino bg-vino text-blush"
          : "border-vino/15 bg-white/60 text-vino hover:border-vino/40",
      )}
    >
      {children}
      <span
        className={cn(
          "grid h-5 min-w-5 place-items-center rounded-full px-1 font-mono text-[0.58rem]",
          active ? "bg-lima text-vino" : "bg-vino/10 text-vino/60",
        )}
      >
        {count}
      </span>
    </button>
  );
}