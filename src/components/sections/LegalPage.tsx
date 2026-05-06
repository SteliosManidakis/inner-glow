import { Container } from "@/components/ui/Container";
import type { LegalPageContent } from "@/content/legal";

export function LegalPage({ title, content }: { title: string; content: LegalPageContent }) {
  return (
    <section className="bg-ivory py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-olive sm:tracking-[0.18em]">
          {content.lastUpdated}
        </p>
        <h1 className="mt-4 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base leading-8 text-charcoal/72 sm:text-lg">{content.intro}</p>

        <div className="mt-10 space-y-9 sm:mt-12 sm:space-y-10">
          {content.sections.map((section) => (
            <section className="border-t border-olive/20 pt-6" key={section.title}>
              <h2 className="text-wrap font-serif text-2xl leading-tight text-charcoal sm:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-charcoal/72">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {content.note ? (
          <p className="mt-12 border-t border-olive/20 pt-6 text-sm leading-7 text-charcoal/60">
            {content.note}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
