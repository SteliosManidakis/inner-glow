import { getSiteUrl, siteName } from "@/lib/site";

export function StructuredData() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/images/placeholders/hero.png`,
    logo: `${siteUrl}/images/full_green_logo.png`,
    email: "info@inner-glow.gr",
    telephone: "+306931818145",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Επτανήσου 3",
      addressLocality: "Βούλα",
      addressCountry: "GR",
    },
    areaServed: ["Βούλα", "Αθήνα", "Ελλάδα", "Online"],
    priceRange: "€€",
    sameAs: [],
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
