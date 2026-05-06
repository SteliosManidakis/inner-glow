import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content/dictionaries";
import { SubscribeForm } from "./SubscribeForm";

export function SubscribeBand({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="bg-charcoal py-16 text-ivory sm:py-20">
      <Container className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl">{dictionary.subscribe.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ivory/72">{dictionary.subscribe.body}</p>
        </div>
        <div className="[&_button]:bg-clay [&_button]:text-charcoal [&_input]:bg-ivory [&_label]:text-clay [&_p]:text-ivory/72">
          <SubscribeForm copy={dictionary.subscribe} />
        </div>
      </Container>
    </section>
  );
}
