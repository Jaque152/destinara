"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export function LegalView({ slug }: { slug: string }) {
  const { dict } = useLanguage();
  const docs = dict.legalPage.docs as Record<
    string,
    { title: string; em: string; navLabel: string; intro: string; sections: { h: string; p: string }[] }
  >;

  const doc = docs[slug];
  if (!doc) notFound();

  return (
    <section className="container pb-24 pt-32 md:pt-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="eyebrow text-rosa">{dict.legalPage.sidebarEyebrow}</p>
          <nav className="mt-6 flex flex-col gap-1">
            {Object.entries(docs).map(([k, d]) => (
              <Link
                key={k}
                href={`/legal/${k}`}
                className={
                  k === slug
                    ? "rounded-full bg-vino px-4 py-2.5 text-sm font-semibold text-blush"
                    : "rounded-full px-4 py-2.5 text-sm text-vino/70 hover:bg-white"
                }
              >
                {d.navLabel}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="lg:col-span-8">
          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-vino">
            {doc.title} <em className="font-normal text-rosa">{doc.em}</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vino/70">{doc.intro}</p>
          <div className="mt-12 space-y-4">
            {doc.sections.map((s, i) => (
              <div key={s.h} className="grid gap-4 rounded-[1.5rem] bg-white p-6 sm:grid-cols-[60px_1fr]">
                <span className="font-mono text-sm text-rosa">0{i + 1}</span>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-vino">{s.h}</h2>
                  <p className="mt-2 leading-relaxed text-vino/70">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-vino/45">
            {dict.legalPage.lastUpdated}
          </p>
        </article>
      </div>
    </section>
  );
}