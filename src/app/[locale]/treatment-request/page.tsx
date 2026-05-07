import type { Metadata } from "next";
import { TreatmentRequestForm } from "@/components/sections/TreatmentRequestForm";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { treatmentRoutes, type TreatmentRouteKey } from "@/lib/treatments";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(isLocale(locale) ? locale : "el");

  return {
    title: dictionary.treatmentRequest.title,
    description: dictionary.treatmentRequest.body,
  };
}

export default async function TreatmentRequestPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const { locale: rawLocale } = await params;
  const { service } = await searchParams;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;
  const dictionary = getDictionary(locale);
  const requestedService = Array.isArray(service) ? service[0] : service;
  const defaultService = treatmentRoutes.some((route) => route.key === requestedService)
    ? (requestedService as TreatmentRouteKey)
    : undefined;

  return (
    <section className="bg-ivory py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.14em] text-olive sm:tracking-[0.18em]">
          {dictionary.common.brand}
        </p>
        <h1 className="mt-5 text-wrap font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {dictionary.treatmentRequest.title}
        </h1>
        <p className="mt-6 text-base leading-8 text-charcoal/72 sm:text-lg">
          {dictionary.treatmentRequest.body}
        </p>
        <div className="mt-10 rounded-lg bg-clay/20 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <TreatmentRequestForm dictionary={dictionary} defaultService={defaultService} />
        </div>
      </Container>
    </section>
  );
}
