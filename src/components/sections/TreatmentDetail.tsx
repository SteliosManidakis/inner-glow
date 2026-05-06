import Image from "next/image";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";

type Treatment = Dictionary["healing"]["treatments"][number];

type Price = {
  formatted: string;
  label: string;
};

export function TreatmentDetail({
  dictionary,
  price,
  treatment,
}: {
  dictionary: Dictionary;
  price: Price;
  treatment: Treatment;
}) {
  return (
    <article className="bg-ivory">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
              {dictionary.healing.title}
            </p>
            <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {treatment.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72 sm:text-lg">
              {treatment.body}
            </p>
          </div>
          <div className="overflow-hidden rounded-bl-[3rem] sm:rounded-bl-[6rem]">
            <Image
              src={treatment.image}
              alt=""
              width={1000}
              height={750}
              className="aspect-[4/3] h-full w-full object-cover"
              priority
            />
          </div>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {treatment.sections.map((section) => (
            <section className="border-t border-olive/30 pt-6" key={section.title}>
              <h2 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-charcoal/72">{section.body}</p>
            </section>
          ))}
          <section className="border-t border-olive/30 pt-6">
            <h2 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
              {treatment.coordinator.title}
            </h2>
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
              <div className="min-w-0">
                <p className="text-wrap font-serif text-xl leading-tight text-charcoal md:mt-4 sm:text-2xl">
                  {treatment.coordinator.name}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive">
                  {treatment.coordinator.role}
                </p>
                <p className="mt-3 text-base leading-7 text-charcoal/72">{treatment.coordinator.body}</p>
              </div>
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
