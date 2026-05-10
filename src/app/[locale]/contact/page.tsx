//C:\dev\inner-glow\src\app\[locale]\contact\page.tsx

import type { Metadata } from "next";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { getSeoMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  return getSeoMetadata(safeLocale, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;
  const dictionary = getDictionary(locale);

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
            <div className="mt-8 grid gap-6 text-base leading-7 text-charcoal/72 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">
                  {dictionary.contact.addressLabel}
                </p>
                <p className="mt-2">{dictionary.contact.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">
                  {dictionary.contact.phoneLabel}
                </p>
                <p className="mt-2">
                  <a className="transition hover:text-olive" href="tel:+306931818145">
                    +30 693 1818145
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">Email</p>
                <p className="mt-2">
                  <a className="transition hover:text-olive" href="mailto:info@inner-glow.gr">
                    info@inner-glow.gr
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <BookingPanel
              title={dictionary.contact.discoveryTitle}
              body={dictionary.contact.discoveryBody}
              button={dictionary.common.bookDiscovery}
              external={false}
              href={localizedPath(locale, "appointment-request")}
              alignContent
            />

            <BookingPanel
              title={dictionary.common.bookHealing}
              body={dictionary.healing.pricingBody}
              button={dictionary.common.openBooking}
              external={false}
              href={localizedPath(locale, "treatment-request")}
              alignContent
            />
          </div>
        </Container>
      </section>
    </>
  );
}
