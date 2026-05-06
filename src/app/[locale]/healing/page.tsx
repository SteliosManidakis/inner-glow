import Image from "next/image";
import type { Metadata } from "next";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";
import { isLocale, type Locale } from "@/lib/i18n";
import { getLocationPrice } from "@/lib/pricing";
import { getSeoMetadata } from "@/lib/seo";

type Treatment = ReturnType<typeof getDictionary>["healing"]["treatments"][number];

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
        <Container>
          <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
            {dictionary.common.brand}
          </p>
          <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            {dictionary.healing.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/72 sm:text-lg">
            {dictionary.healing.body}
          </p>
        </Container>
      </section>
      {dictionary.healing.treatments.map((treatment, index) => (
        <TreatmentSection
          dictionary={dictionary}
          index={index}
          key={treatment.title}
          price={price}
          treatment={treatment}
        />
      ))}
    </>
  );
}

function TreatmentSection({
  dictionary,
  index,
  price,
  treatment,
}: {
  dictionary: ReturnType<typeof getDictionary>;
  index: number;
  price: Awaited<ReturnType<typeof getLocationPrice>>;
  treatment: Treatment;
}) {
  const isEven = index % 2 === 0;
  const treatmentBackground = isEven ? "bg-ivory" : "bg-sage/20";

  return (
    <article className={treatmentBackground}>
      <section className="py-14 sm:py-20 lg:py-24">
        <Container className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div className={isEven ? "" : "md:order-2"}>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
              {dictionary.healing.title}
            </p>
            <h2 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {treatment.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72 sm:text-lg">
              {treatment.body}
            </p>
          </div>
          <div className={`overflow-hidden ${isEven ? "rounded-bl-[3rem] sm:rounded-bl-[6rem]" : "rounded-br-[3rem] sm:rounded-br-[6rem]"}`}>
            <Image
              src={treatment.image}
              alt=""
              width={1000}
              height={750}
              className="aspect-[4/3] h-full w-full object-cover"
              priority={index === 0}
            />
          </div>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {treatment.sections.map((section) => (
            <section className="border-t border-olive/30 pt-6" key={section.title}>
              <h3 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">{section.title}</h3>
              <p className="mt-4 text-base leading-7 text-charcoal/72">{section.body}</p>
            </section>
          ))}
          <section className="border-t border-olive/30 pt-6">
            <h3 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
              {treatment.coordinator.title}
            </h3>
            <div className="mt-5 flex gap-4 sm:items-start md:block">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-tr-[2rem] md:h-auto md:w-full">
                <Image
                  src={treatment.coordinator.image}
                  alt=""
                  width={420}
                  height={420}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <p className="text-base leading-7 text-charcoal/72 md:mt-4">{treatment.coordinator.body}</p>
            </div>
          </section>
        </Container>
      </section>
      <section className="py-14 sm:py-20 lg:py-24">
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
    </article>
  );
}
