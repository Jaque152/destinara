"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { dict } = useLanguage();

  return (
    <section className="container flex min-h-[80vh] flex-col items-center justify-center pb-20 pt-32 text-center">
      <p className="eyebrow text-rosa">{dict.notFound.eyebrow}</p>
      <h1 className="mt-6 text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.85] tracking-[-0.055em] text-vino">
        {dict.notFound.title} <em className="font-normal text-rosa">{dict.notFound.titleEm}</em>
      </h1>
      <p className="mt-6 max-w-md text-lg text-vino/65">
        {dict.notFound.description}
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-full bg-rosa px-7 py-4 font-semibold text-blush hover:bg-vino">
          {dict.common.backHome}
        </Link>
        <Link href="/catalogo" className="rounded-full border-[1.5px] border-vino px-7 py-4 font-semibold text-vino hover:bg-vino hover:text-blush">
          {dict.common.exploreCatalog}
        </Link>
      </div>
    </section>
  );
}