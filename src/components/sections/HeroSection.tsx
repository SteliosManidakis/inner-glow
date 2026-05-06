import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/content/dictionaries";
import { bookingLinks } from "@/lib/booking";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";

export function HeroSection({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="order-2 pb-8 md:order-1">
          <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
            {dictionary.home.heroKicker}
          </p>
          <h1 className="mt-5 max-w-3xl text-wrap font-serif text-4xl leading-[1.08] text-charcoal sm:text-5xl xl:text-6xl">
            {dictionary.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72 sm:text-lg">
            {dictionary.home.heroBody}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
            <Button href={bookingLinks.discovery} external>
              {dictionary.common.bookDiscovery}
            </Button>
            <Button href={localizedPath(locale, "healing")} variant="secondary">
              {dictionary.common.learnMore}
            </Button>
          </div>
        </div>
        <div className="order-1 min-h-[38svh] overflow-hidden rounded-bl-[4rem] rounded-tr-[4rem] sm:rounded-bl-[6rem] sm:rounded-tr-[6rem] md:order-2 md:min-h-[70svh] xl:rounded-bl-[8rem] xl:rounded-tr-[8rem]">
          <Image
            src="/images/placeholders/hero.png"
            alt=""
            width={1400}
            height={1000}
            className="h-full min-h-[38svh] w-full object-cover md:min-h-[70svh]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
