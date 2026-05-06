import type { Metadata } from "next";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";
import { isLocale } from "@/lib/i18n";
import { getSeoMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  return getSeoMetadata(safeLocale, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "el");

  return (
    <>
      <section className="bg-ivory py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
              {dictionary.common.brand}
            </p>
            <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              {dictionary.contact.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-charcoal/72 sm:text-lg">{dictionary.contact.body}</p>
          </div>
          <div className="mt-12">
            <BookingPanel
              title={dictionary.contact.discoveryTitle}
              body={dictionary.contact.discoveryBody}
              button={dictionary.common.bookDiscovery}
              href={bookingLinks.discovery}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
