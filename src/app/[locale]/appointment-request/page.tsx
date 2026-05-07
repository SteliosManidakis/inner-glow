import type { Metadata } from "next";
import { ContactRequestForm } from "@/components/sections/ContactRequestForm";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "el");

  return {
    title: dictionary.contactRequest.title,
    description: dictionary.contactRequest.body,
  };
}

export default async function AppointmentRequestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-ivory py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
          {dictionary.common.brand}
        </p>
        <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {dictionary.contactRequest.title}
        </h1>
        <p className="mt-6 text-base leading-8 text-charcoal/72 sm:text-lg">
          {dictionary.contactRequest.body}
        </p>
        <div className="mt-10 rounded-lg bg-clay/20 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <ContactRequestForm dictionary={dictionary} />
        </div>
      </Container>
    </section>
  );
}
