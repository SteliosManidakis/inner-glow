import Image from "next/image";
import type { Metadata } from "next";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";
import { isLocale, type Locale } from "@/lib/i18n";
import { getLocationPrice } from "@/lib/pricing";
import { getSeoMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  return getSeoMetadata(safeLocale, "healing");
}

export default async function HealingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;
  const dictionary = getDictionary(locale);
  const price = await getLocationPrice(locale);

  return (
    <>
      <section className="bg-ivory py-14 sm:py-20 lg:py-24">
        <Container className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
              {dictionary.common.brand}
            </p>
            <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {dictionary.healing.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72 sm:text-lg">
              {dictionary.healing.body}
            </p>
          </div>
          <div className="overflow-hidden rounded-bl-[3rem] sm:rounded-bl-[6rem]">
            <Image
              src="/images/placeholders/healing.png"
              alt=""
              width={1000}
              height={750}
              className="aspect-[4/3] h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>
      <section className="bg-sage/20 py-14 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {dictionary.healing.sections.map((section) => (
            <article className="border-t border-olive/30 pt-6" key={section.title}>
              <h2 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-charcoal/72">{section.body}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-ivory py-14 sm:py-20 lg:py-24">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              {dictionary.healing.pricingTitle}
            </p>
            <p className="mt-4 font-serif text-5xl leading-none text-charcoal sm:text-6xl">{price.formatted}</p>
            <p className="mt-2 text-charcoal/65">{dictionary.common.perSession}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal/60">
              {dictionary.healing.pricingLocationNote} {price.label}.
            </p>
          </div>
          <BookingPanel
            title={dictionary.common.bookHealing}
            body={dictionary.healing.pricingBody}
            button={dictionary.common.openBooking}
            href={bookingLinks.healing}
          />
        </Container>
      </section>
    </>
  );
}
