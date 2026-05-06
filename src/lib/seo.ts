import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl, siteName } from "@/lib/site";

type SeoRoute = "" | "about" | "healing" | "contact" | "terms" | "privacy";

type SeoCopy = {
  title: string;
  description: string;
};

const seoCopy: Record<Locale, Record<SeoRoute, SeoCopy>> = {
  el: {
    "": {
      title: "Inner Glow | Healing & προσωπική καθοδήγηση",
      description:
        "Ατομικές συνεδρίες healing, discovery calls και ήπια προσωπική καθοδήγηση online ή δια ζώσης στην Ελλάδα με το Inner Glow.",
    },
    about: {
      title: "Σχετικά με την Inner Glow",
      description:
        "Γνώρισε την Inner Glow και την ήρεμη, γειωμένη προσέγγισή της σε θεραπείες, παρουσία και προσωπική φροντίδα.",
    },
    healing: {
      title: "Healing Sessions",
      description:
        "Ατομικές healing συνεδρίες με τη Μαργαρίτα για καθαρότητα, γείωση και βαθύτερη σύνδεση με τον εαυτό.",
    },
    contact: {
      title: "Επικοινωνία & Discovery Call",
      description:
        "Κλείσε ένα ραντεβού γνωριμίας Call με τη Μαργαρίτα ή ξεκίνησε την επικοινωνία για online και δια ζώσης healing συνεδρίες.",
    },
    terms: {
      title: "Όροι Χρήσης",
      description:
        "Όροι χρήσης για το website, το booking, τις συνεδρίες, τις ακυρώσεις και τις υπηρεσίες της Μαργαρίτας.",
    },
    privacy: {
      title: "Πολιτική Απορρήτου & Cookies",
      description:
        "Πολιτική απορρήτου και cookies για το website της Μαργαρίτα Πασχάλη, το newsletter, το booking και την επεξεργασία προσωπικών δεδομένων.",
    },
  },
  en: {
    "": {
      title: "Inner Glow | Healing & personal guidance",
      description:
        "Individual healing sessions, discovery calls and gentle personal guidance online or in person in Greece with Inner Glow.",
    },
    about: {
      title: "About Margarita",
      description:
        "Meet Margarita and her calm, grounded approach to healing, presence and personal care.",
    },
    healing: {
      title: "Healing Sessions",
      description:
        "Individual healing sessions with Margarita for clarity, grounding and a deeper connection with yourself.",
    },
    contact: {
      title: "Contact & Discovery Call",
      description:
        "Book a Discovery Call with Margarita or get started with online and in-person healing sessions.",
    },
    terms: {
      title: "Terms & Conditions",
      description:
        "Terms for website use, booking, sessions, cancellations and services offered by Margarita.",
    },
    privacy: {
      title: "Privacy Policy & Cookies",
      description:
        "Privacy and cookies policy for Margarita Paschali's website, newsletter, booking and personal data processing.",
    },
  },
};

export function routePath(locale: Locale, route: SeoRoute) {
  return route ? `/${locale}/${route}` : `/${locale}`;
}

export function absoluteRoute(locale: Locale, route: SeoRoute) {
  return `${getSiteUrl()}${routePath(locale, route)}`;
}

export function languageAlternates(route: SeoRoute) {
  return {
    el: routePath("el", route),
    en: routePath("en", route),
    "x-default": routePath("el", route),
  };
}

export function getSeoMetadata(locale: Locale, route: SeoRoute): Metadata {
  const copy = seoCopy[locale][route];
  const path = routePath(locale, route);
  const image = "/images/placeholders/hero.png";

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: languageAlternates(route),
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: absoluteRoute(locale, route),
      siteName,
      locale: locale === "el" ? "el_GR" : "en_US",
      alternateLocale: locale === "el" ? ["en_US"] : ["el_GR"],
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [image],
    },
  };
}
