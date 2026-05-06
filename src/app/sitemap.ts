import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const paths = ["", "about", "healing", "contact", "terms", "privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path ? `/${path}` : ""}`,
      lastModified: new Date(),
      changeFrequency: path ? "monthly" : "weekly",
      priority: path ? 0.7 : 1,
      alternates: {
        languages: {
          el: `${baseUrl}/el${path ? `/${path}` : ""}`,
          en: `${baseUrl}/en${path ? `/${path}` : ""}`,
        },
      },
    })),
  );
}
