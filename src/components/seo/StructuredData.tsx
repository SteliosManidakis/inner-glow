import { siteImages } from "@/content/images";
import { getSiteUrl, siteName } from "@/lib/site";

export function StructuredData() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}${siteImages.socialShare}`,
    logo: `${siteUrl}${siteImages.logos.header}`,
    email: "info@inner-glow.gr",
    telephone: "+306931818145",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Επτανήσου 3",
      addressLocality: "Βούλα",
      addressCountry: "GR",
    },
    areaServed: ["Βούλα", "Αθήνα", "Νότια Προάστια", "Ελλάδα", "Online"],
    priceRange: "€€",
    sameAs: [],
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      type="application/ld+json"
    />
  );
}
