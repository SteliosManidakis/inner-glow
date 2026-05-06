import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";

export function PreviewSections({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return (
    <section className="bg-ivory py-16 sm:py-24 lg:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
        <article>
          <div className="aspect-[4/5] overflow-hidden rounded-tl-[3rem] sm:rounded-tl-[5rem]">
            <Image
              src="/images/placeholders/about.png"
              alt=""
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="mt-8 text-wrap font-serif text-3xl leading-tight text-charcoal sm:text-4xl">{dictionary.home.aboutTitle}</h2>
          <p className="mt-4 text-base leading-7 text-charcoal/72">{dictionary.home.aboutBody}</p>
          <div className="mt-6">
            <Button href={localizedPath(locale, "about")} variant="secondary">
              {dictionary.common.learnMore}
            </Button>
          </div>
        </article>
        <article className="md:pt-20">
          <div className="aspect-[4/3] overflow-hidden rounded-br-[3rem] sm:rounded-br-[5rem]">
            <Image
              src="/images/placeholders/healing.png"
              alt=""
              width={1000}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="mt-8 text-wrap font-serif text-3xl leading-tight text-charcoal sm:text-4xl">{dictionary.home.healingTitle}</h2>
          <p className="mt-4 text-base leading-7 text-charcoal/72">{dictionary.home.healingBody}</p>
          <div className="mt-6">
            <Button href={localizedPath(locale, "healing")}>{dictionary.common.bookHealing}</Button>
          </div>
        </article>
      </Container>
    </section>
  );
}
