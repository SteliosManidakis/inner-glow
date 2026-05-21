import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { SystemicWorkshopForm } from "@/components/sections/SystemicWorkshopForm";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";
import {
  getSystemicLandingContent,
  systemicLandingTheme,
} from "@/content/systemicLanding";
import type { Locale } from "@/lib/i18n";

export function SystemicConstellationLanding({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const copy = getSystemicLandingContent(locale);
  const themeStyle = {
    "--systemic-green": systemicLandingTheme.darkGreen,
    "--systemic-cream": systemicLandingTheme.cream,
    "--systemic-orange": systemicLandingTheme.orange,
    "--systemic-red-tint": systemicLandingTheme.redTint,
  } as CSSProperties;

  return (
    <article className="bg-ivory" style={themeStyle}>
      <section className="sticky top-[5.5rem] z-20 bg-[var(--systemic-green)] px-4 py-2 text-white shadow-[0_12px_24px_rgba(41,37,31,0.18)] md:top-20">
        <div className="mx-auto flex min-h-9 max-w-6xl flex-wrap items-center justify-center gap-3 text-center text-sm font-semibold sm:text-base">
          <span>{copy.stickyBar.text}</span>
          <a
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--systemic-orange)] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:brightness-95"
            href={copy.phoneHref}
          >
            {copy.stickyBar.button}
          </a>
        </div>
      </section>
      <section className="relative isolate min-h-[68svh] overflow-hidden bg-[var(--systemic-cream)] text-charcoal">
        <Image
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
          fill
          priority
          src={copy.hero.image}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(245,241,235,0.22),rgba(245,241,235,0.38))]" />
        <Container className="flex min-h-[68svh] items-center py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-olive">
              {copy.hero.kicker}
            </p>
            <h1 className="mt-5 text-wrap font-serif text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-charcoal/78 sm:text-2xl">
              {copy.hero.subtitle}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3">
              <a
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--systemic-orange)] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(255,107,53,0.28)] transition hover:scale-[1.02] hover:brightness-95"
                href="#signup-form"
              >
                {copy.hero.cta}
              </a>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--systemic-green)]">
                <span className="inline-flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-[var(--systemic-orange)] text-sm leading-none text-white shadow-[0_0_0_4px_rgba(255,107,53,0.16)]">
                  !
                </span>
                <span>{copy.hero.urgency}</span>
              </p>
            </div>
            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
              {copy.hero.benefits.map((benefit) => (
                <div
                  className="rounded-lg border border-olive/18 bg-white/55 p-5 shadow-[0_12px_30px_rgba(41,37,31,0.08)] backdrop-blur"
                  key={benefit.title}
                >
                  <h2 className="text-lg font-bold leading-6 text-charcoal">{benefit.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-charcoal/72">{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start lg:py-16">
        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              {copy.main.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/72 sm:text-lg">
              {copy.main.body}
            </p>
            <ul className="mt-6 grid gap-3 text-base leading-7 text-charcoal/72">
              {copy.main.bullets.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--systemic-orange)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Testimonials copy={copy.testimonials} />
          <Faq copy={copy.faq} />

          <section>
            <SystemicWorkshopForm copy={copy.form} />
          </section>
        </div>

        <EventDetailsCard copy={copy} />
      </Container>

      <FinalCta copy={copy} />

      <section className="pb-14 sm:pb-20 lg:pb-24">
        <Container>
          <p className="border-t border-olive/20 pt-6 text-sm leading-7 text-charcoal/60 sm:text-base sm:leading-8">
            {dictionary.common.treatmentDisclaimer}
          </p>
        </Container>
      </section>
    </article>
  );
}

function EventDetailsCard({ copy }: { copy: ReturnType<typeof getSystemicLandingContent> }) {
  return (
    <aside className="order-first rounded-lg border-l-4 border-[var(--systemic-green)] bg-white p-5 shadow-[0_18px_45px_rgba(41,37,31,0.14)] lg:sticky lg:top-36 lg:order-none">
      <div className="space-y-5">
        <Detail label={copy.event.dateLabel} note={copy.event.dateNote} value={copy.event.date} />
        <Detail label={copy.event.timeLabel} note={copy.event.timeNote} value={copy.event.time} />
        <Detail
          label={copy.event.locationLabel}
          note={copy.event.locationNote}
          value={copy.event.location}
        />

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[var(--systemic-cream)] p-3 text-center">
            <p className="font-serif text-3xl leading-none text-[var(--systemic-orange)]">
              {copy.event.simplePrice}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-charcoal/62">
              {copy.event.simpleLabel}
            </p>
          </div>
          <div className="rounded-lg bg-[var(--systemic-cream)] p-3 text-center">
            <p className="font-serif text-3xl leading-none text-[var(--systemic-orange)]">
              {copy.event.requestPrice}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-charcoal/62">
              {copy.event.requestLabel}
            </p>
          </div>
        </div>

        <p className="inline-flex items-center justify-center gap-2 text-center text-sm font-bold uppercase tracking-[0.08em] text-[var(--systemic-green)]">
          <span className="inline-flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-[var(--systemic-orange)] text-sm leading-none text-white shadow-[0_0_0_4px_rgba(255,107,53,0.16)]">
            !
          </span>
          <span>{copy.event.urgency}</span>
        </p>

        <p className="text-sm font-semibold leading-6 text-charcoal">{copy.event.instructor}</p>

        <div className="grid gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--systemic-green)] px-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:brightness-110"
            href={copy.phoneHref}
          >
            {copy.event.callButton}
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--systemic-green)] px-4 text-sm font-bold uppercase tracking-[0.08em] text-[var(--systemic-green)] transition hover:bg-[var(--systemic-green)] hover:text-white"
            href={copy.whatsAppHref}
            rel="noreferrer"
            target="_blank"
          >
            {copy.event.whatsAppButton}
          </a>
        </div>
      </div>
    </aside>
  );
}

function Detail({ label, note, value }: { label: string; note: string; value: string }) {
  return (
    <div className="border-b border-olive/15 pb-4 last:border-b-0">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-olive">{label}</p>
      <p className="mt-1 text-lg font-semibold leading-6 text-charcoal">{value}</p>
      <p className="mt-1 whitespace-pre-line text-sm leading-5 text-charcoal/60">{note}</p>
    </div>
  );
}

function Testimonials({ copy }: { copy: ReturnType<typeof getSystemicLandingContent>["testimonials"] }) {
  return (
    <section className="rounded-lg bg-[var(--systemic-green)] p-5 text-white sm:p-8">
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl">{copy.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {copy.items.map((item) => (
          <article className="border-l-4 border-[var(--systemic-orange)] bg-white/10 p-4" key={item.name}>
            <p className="text-sm tracking-[0.12em] text-[var(--systemic-orange)]">★★★★★</p>
            <p className="mt-3 text-sm leading-6 text-white/86">“{item.quote}”</p>
            <p className="mt-4 text-sm font-bold">{item.name}, {item.meta}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/55">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq({ copy }: { copy: ReturnType<typeof getSystemicLandingContent>["faq"] }) {
  return (
    <section>
      <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">{copy.title}</h2>
      <div className="mt-5 divide-y divide-olive/20 rounded-lg border border-olive/20 bg-white">
        {copy.items.map((item) => (
          <details className="group" key={item.question}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[var(--systemic-cream)] px-4 py-4 text-base font-semibold text-charcoal transition hover:bg-sage/20">
              <span>{item.question}</span>
              <span className="text-xl leading-none text-[var(--systemic-orange)] group-open:rotate-45">+</span>
            </summary>
            <p className="px-4 py-4 text-base leading-7 text-charcoal/72">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ copy }: { copy: ReturnType<typeof getSystemicLandingContent> }) {
  return (
    <section className="bg-[linear-gradient(135deg,var(--systemic-green),#1c340e)] px-5 py-14 text-center text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{copy.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">{copy.finalCta.subtitle}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <LinkButton href={copy.phoneHref} tone="orange">{copy.finalCta.call}</LinkButton>
          <LinkButton href="#signup-form" tone="white">{copy.finalCta.online}</LinkButton>
          <LinkButton href={copy.whatsAppHref} tone="green" external>{copy.finalCta.whatsApp}</LinkButton>
        </div>
      </div>
    </section>
  );
}

function LinkButton({
  children,
  external = false,
  href,
  tone,
}: {
  children: ReactNode;
  external?: boolean;
  href: string;
  tone: "orange" | "white" | "green";
}) {
  const className =
    tone === "orange"
      ? "bg-[var(--systemic-orange)] text-white"
      : tone === "white"
        ? "bg-white text-[var(--systemic-green)]"
        : "bg-emerald-700 text-white";

  if (external) {
    return (
      <a
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold uppercase tracking-[0.08em] transition hover:scale-[1.03] ${className}`}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold uppercase tracking-[0.08em] transition hover:scale-[1.03] ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
