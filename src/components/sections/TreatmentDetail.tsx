import Image from "next/image";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";

type Treatment = Dictionary["healing"]["treatments"][number];

export function TreatmentDetail({
  dictionary,
  treatment,
}: {
  dictionary: Dictionary;
  treatment: Treatment;
}) {
  const announcement =
    "announcement" in treatment
      ? typeof treatment.announcement === "string"
        ? { text: treatment.announcement, size: "sm", weight: "bold" }
        : treatment.announcement
      : null;
  const announcementSizeClass =
    announcement?.size === "xl"
      ? "text-xl"
      : announcement?.size === "lg"
        ? "text-lg"
        : announcement?.size === "base"
          ? "text-base"
          : "text-sm";
  const announcementWeightClass =
    announcement?.weight === "normal" ? "font-normal" : "font-bold";
  const hasWrapImageLayout = "layout" in treatment && treatment.layout === "wrapImage";
  const bodyParagraphs = treatment.body.split("\n\n");
  const hasDetailSections = treatment.sections.length > 0 || treatment.coordinator.show;
  const pricing = treatment.pricing as {
    options?: { label: string; price: string }[];
    price?: string;
    note: string;
  };

  return (
    <article className="bg-ivory">
      {announcement ? (
        <section className="bg-sage/20 py-5">
          <Container>
            <p
              className={`text-center ${announcementSizeClass} ${announcementWeightClass} uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]`}
            >
              {announcement.text}
            </p>
          </Container>
        </section>
      ) : null}
      <section className="py-14 sm:py-20 lg:py-24">
        {hasWrapImageLayout ? (
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
                {treatment.title}
              </h1>
            </div>
            <div className="mt-8 text-base leading-8 text-charcoal/72 sm:text-lg">
              <div className="mb-6 overflow-hidden rounded-bl-[3rem] sm:rounded-bl-[6rem] md:float-right md:mb-8 md:ml-10 md:w-[48%] lg:w-[46%]">
                <Image
                  src={treatment.image}
                  alt=""
                  width={1000}
                  height={750}
                  className="aspect-[4/3] h-full w-full object-cover"
                  priority
                />
              </div>
              {bodyParagraphs.map((paragraph) => (
                <p className="mb-5 last:mb-0" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        ) : (
          <Container className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <h1 className="text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
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
        )}
      </section>
      {hasDetailSections ? (
      <section className="py-14 sm:py-20">
        <Container className={treatment.coordinator.show ? "grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" : "grid gap-8 sm:grid-cols-2"}>
          <div className={treatment.coordinator.show ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-1" : "contents"}>
            {treatment.sections.map((section) => (
              <section className="border-t border-olive/30 pt-6" key={section.title}>
                <h2 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">{section.title}</h2>
                {"body" in section ? (
                  <p className="mt-4 text-base leading-7 text-charcoal/72">{section.body}</p>
                ) : null}
                {"items" in section ? (
                  <ul className="mt-4 space-y-2 text-base leading-7 text-charcoal/72">
                    {section.items.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          {treatment.coordinator.show ? (
            <section className="border-t border-olive/30 pt-6">
              <h2 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
                {treatment.coordinator.title}
              </h2>
              <div className={`mt-5 grid gap-6 sm:items-start ${treatment.coordinator.showImage ? "sm:grid-cols-[0.85fr_1fr]" : ""}`}>
                {treatment.coordinator.showImage ? (
                  <div className="overflow-hidden rounded-tr-[3rem]">
                    <Image
                      src={treatment.coordinator.image}
                      alt=""
                      width={640}
                      height={720}
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="min-w-0">
                  <p className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
                    {treatment.coordinator.name}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive">
                    {treatment.coordinator.role}
                  </p>
                  <p className="mt-4 text-base leading-7 text-charcoal/72">{treatment.coordinator.body}</p>
                </div>
              </div>
            </section>
          ) : null}
        </Container>
      </section>
      ) : null}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container className={"workshopCta" in treatment ? "" : "grid gap-8 md:grid-cols-[0.8fr_1.2fr]"}>
          {"workshopCta" in treatment ? (
            <div>
              {"intro" in treatment.workshopCta ? (
                <p className="mb-8 max-w-3xl text-base leading-8 text-charcoal/72 sm:text-lg">
                  {treatment.workshopCta.intro}
                </p>
              ) : null}
              <div className="rounded-lg bg-clay/20 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <h2 className="text-wrap font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
                  {treatment.workshopCta.title}
                </h2>
                <div className="mt-5 space-y-2 text-lg leading-8 text-charcoal/72">
                  {treatment.workshopCta.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <div className="mt-7 flex">
                  <Button href={bookingLinks.healing} external>
                    {treatment.workshopCta.button}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
                  {dictionary.healing.pricingTitle}
                </p>
                {pricing.options ? (
                  <div className={`mt-4 ${pricing.options.length > 2 ? "grid gap-x-4 gap-y-0 sm:grid-cols-2" : "space-y-4"}`}>
                    {pricing.options.map((option) => (
                      <div className="border-t border-olive/20 pt-4" key={option.label}>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal/60">{option.label}</p>
                        <p className="mt-2 font-serif text-5xl leading-none text-charcoal sm:text-6xl">{option.price}</p>
                      </div>
                    ))}
                  </div>
                ) : pricing.price ? (
                  <>
                    <p className="mt-4 font-serif text-5xl leading-none text-charcoal sm:text-6xl">{pricing.price}</p>
                    <p className="mt-2 text-charcoal/65">{dictionary.common.perSession}</p>
                  </>
                ) : null}
                <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal/60">{pricing.note}</p>
              </div>
              <BookingPanel
                title={dictionary.common.bookHealing}
                body={dictionary.healing.pricingBody}
                button={dictionary.common.openBooking}
                href={bookingLinks.healing}
              />
            </>
          )}
        </Container>
      </section>
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
