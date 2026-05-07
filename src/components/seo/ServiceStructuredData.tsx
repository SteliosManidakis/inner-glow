import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { absoluteRoute, getTreatmentSeoMetadata } from "@/lib/seo";
import { getSiteUrl, siteName } from "@/lib/site";
import type { TreatmentRoute } from "@/lib/treatments";

type Treatment = Dictionary["healing"]["treatments"][number];

export function ServiceStructuredData({
  locale,
  treatment,
  treatmentRoute,
}: {
  locale: Locale;
  treatment: Treatment;
  treatmentRoute: TreatmentRoute;
}) {
  const siteUrl = getSiteUrl();
  const seo = getTreatmentSeoMetadata(locale, treatmentRoute.key);
  const serviceUrl = absoluteRoute(locale, treatmentRoute.slug);
  const pricing = treatment.pricing as {
    options?: { label: string; price: string }[];
    price?: string;
  };
  const offers = buildOffers(pricing);
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: treatment.title,
    serviceType: treatment.title,
    description: seo.description,
    url: serviceUrl,
    image: `${siteUrl}${treatment.image}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: siteName,
      url: siteUrl,
      email: "info@inner-glow.gr",
      telephone: "+306931818145",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Επτανήσου 3",
        addressLocality: "Βούλα",
        addressCountry: "GR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Βούλα" },
      { "@type": "City", name: "Αθήνα" },
      { "@type": "AdministrativeArea", name: "Νότια Προάστια" },
      { "@type": "Country", name: "Ελλάδα" },
      { "@type": "VirtualLocation", name: "Online" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: locale === "el" ? "Ενήλικες" : "Adults",
    },
    ...(offers.length > 0 ? { offers } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": serviceUrl,
    },
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      type="application/ld+json"
    />
  );
}

function buildOffers(pricing: { options?: { label: string; price: string }[]; price?: string }) {
  if (pricing.options) {
    return pricing.options
      .map((option) => ({
        "@type": "Offer",
        name: option.label,
        price: parseEuroPrice(option.price),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      }))
      .filter((offer) => offer.price);
  }

  if (pricing.price) {
    const price = parseEuroPrice(pricing.price);
    return price
      ? [
          {
            "@type": "Offer",
            price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        ]
      : [];
  }

  return [];
}

function parseEuroPrice(price: string) {
  const match = price.match(/\d+(?:[,.]\d+)?/);
  return match ? match[0].replace(",", ".") : "";
}
