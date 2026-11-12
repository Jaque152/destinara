"use client";

import Link from "next/link";
import { ArrowUpRight, Mail,MapPinned, BriefcaseBusiness, Phone, Quote } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { CONTACT } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";

export function ContactView({ initialInteres }: { initialInteres?: string }) {
  const { dict } = useLanguage();

  const preset =
    initialInteres === "medida"
      ? dict.contactView.interests[0]
      : initialInteres === "catalogo"
        ? dict.contactView.interests[1]
        : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-vino pb-20 pt-36 text-blush md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-rosa/25 blur-3xl" />
        <div className="container relative grid items-end gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow flex animate-rise items-center gap-3 text-lima">
              <span className="h-px w-8 bg-lima" /> {dict.contactPage.heroEyebrow}
            </p>
            <h1 className="mt-6 animate-rise text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[0.86] tracking-[-0.055em] [animation-delay:100ms]">
              {dict.contactPage.heroTitle} <em className="font-normal text-rosa">{dict.contactPage.heroTitleEm}</em>.
            </h1>
            <p className="mt-8 max-w-lg animate-rise text-lg leading-relaxed text-blush/70 [animation-delay:200ms]">
              {dict.contactPage.heroSubtitle}
            </p>
          </div>
          <div className="relative hidden h-[24rem] lg:col-span-5 lg:block">
            {[
              { src: IMG.papelPicado, cls: "left-0 bottom-0 h-[70%] w-[30%]", d: "300ms" },
              { src: IMG.pinkWall, cls: "left-[34%] bottom-0 h-full w-[32%]", d: "400ms" },
              { src: IMG.oaxaca, cls: "right-0 bottom-0 h-[82%] w-[30%]", d: "500ms" },
            ].map((a) => (
              <div
                key={a.src}
                className={`arch absolute animate-rise overflow-hidden border-[5px] border-blush/90 ${a.cls}`}
                style={{ animationDelay: a.d }}
              >
                
                <img src={a.src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="space-y-4 lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-rosa">{dict.contactPage.directContactEyebrow}</p>
              <h2 className="mt-4 text-5xl font-extrabold tracking-[-0.045em] text-vino">
                {dict.contactPage.conciergeTitle} <em className="font-normal text-rosa">{dict.contactPage.conciergeTitleEm}</em>.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-vino/70">
                {dict.contactPage.conciergeDesc}
              </p>
            </Reveal>

            <Reveal delay={80} className="pt-4">
              <InfoCard
                href={CONTACT.phoneHref}
                icon={<Phone className="h-5 w-5" />}
                label={dict.contactPage.phoneLabel}
                value={CONTACT.phone}
                meta={dict.contactPage.phoneMeta}
              />
            </Reveal>
            <Reveal delay={140}>
              <InfoCard
                href={`mailto:${CONTACT.email}`}
                icon={<Mail className="h-5 w-5" />}
                label={dict.contactPage.emailLabel}
                value={CONTACT.email}
                meta={dict.contactPage.emailMeta}
              />
            </Reveal>
            <Reveal delay={200}>
              <InfoCard
                icon={<MapPinned className="h-5 w-5" />}
                label={dict.contactPage.locationLabel}
                value={dict.contactPage.locationValue}
                meta={dict.contactPage.locationMeta}
              />
            </Reveal>

            <Reveal delay={220}>
              <InfoCard
                icon={<BriefcaseBusiness className="h-5 w-5" />}
                label={dict.contactPage.officeLabel}
                value={dict.contactPage.officeValue}
                meta={dict.contactPage.officeMeta}
              />
            </Reveal>

            <Reveal delay={260}>
              <blockquote className="relative mt-6 overflow-hidden rounded-[2rem] bg-rosa p-8 text-blush">
                <Quote className="h-8 w-8 text-lima" />
                <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
                  {dict.contactPage.quoteText}{" "}
                  <em className="font-normal">{dict.contactPage.quoteEm}</em>.
                </p>
                <div className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-24 rounded-t-full bg-vino/30" />
              </blockquote>
            </Reveal>
          </aside>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-rosa">{dict.contactPage.startConvEyebrow}</p>
              <h2 className="mt-4 text-5xl font-extrabold tracking-[-0.045em] text-vino">
                {dict.contactPage.startConvTitle} <em className="font-normal text-rosa">{dict.contactPage.startConvTitleEm}</em>.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-vino/70">
                {dict.contactPage.startConvDesc}
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8">
              <ContactForm preset={preset} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24 md:pb-32">
        <Reveal>
          <div className="relative grid gap-8 overflow-hidden rounded-[2.5rem] bg-vino px-8 py-14 text-blush md:grid-cols-2 md:items-end md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-rosa/30 blur-3xl" />
            <div className="relative">
              <p className="eyebrow text-lima">{dict.contactPage.ctaEyebrow}</p>
              <h2 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
                {dict.contactPage.ctaTitle} <em className="font-normal text-rosa">{dict.contactPage.ctaTitleEm}</em>.
              </h2>
            </div>
            <div className="relative">
              <p className="text-lg leading-relaxed text-blush/70">
                {dict.contactPage.ctaDesc}
              </p>
              <Link
                href="/catalogo"
                className="group mt-6 inline-flex h-14 items-center gap-3 rounded-full bg-lima pl-7 pr-2 font-semibold text-vino hover:bg-blush"
              >
                {dict.contactPage.ctaBtn}
                <span className="grid h-10 w-10 place-items-center rounded-full bg-vino text-lima transition-transform duration-300 group-hover:rotate-45">
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

function InfoCard({
  href,
  icon,
  label,
  value,
  meta,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  meta: string;
}) {
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lima text-vino transition-colors group-hover:bg-rosa group-hover:text-blush">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-vino/50">{label}</span>
        <strong className="mt-1 block break-words text-lg tracking-tight text-vino">{value}</strong>
        <span className="mt-0.5 block text-sm text-vino/55">{meta}</span>
      </span>
      {href && (
        <ArrowUpRight className="h-5 w-5 shrink-0 text-vino/40 transition-all group-hover:rotate-45 group-hover:text-rosa" />
      )}
    </>
  );
  const cls =
    "group flex items-center gap-4 rounded-[1.5rem] border-[1.5px] border-vino/10 bg-white/70 p-5 transition-all hover:border-rosa/40 hover:bg-white";
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}