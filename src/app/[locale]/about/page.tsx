import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { getSeoMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  return getSeoMetadata(safeLocale, "about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-ivory py-14 sm:py-20 lg:py-24">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="overflow-hidden rounded-tr-[3rem] sm:rounded-tr-[6rem]">
          <Image
            src="/images/placeholders/about.png"
            alt=""
            width={900}
            height={1100}
            className="aspect-[4/5] h-full w-full object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
            {dictionary.common.brand}
          </p>
          <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            {dictionary.about.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-charcoal/72 sm:text-lg">{dictionary.about.body}</p>
          <div className="mt-8 space-y-5 text-base leading-8 text-charcoal/72">
            {dictionary.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href={localizedPath(locale, "contact")} variant="secondary">
              {dictionary.common.bookDiscovery}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
