import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";

export function IntroSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="bg-sage/20 py-16 sm:py-24 lg:py-28">
      <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
          {dictionary.common.brand}
        </p>
        <div>
          <h2 className="text-wrap font-serif text-3xl leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {dictionary.home.introTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/72">{dictionary.home.introBody}</p>
        </div>
      </Container>
    </section>
  );
}
