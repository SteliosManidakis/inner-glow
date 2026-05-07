import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl, siteName } from "@/lib/site";
import type { TreatmentRouteKey } from "@/lib/treatments";

type SeoRoute = "" | "about" | "healing" | "contact" | "terms" | "privacy";

type SeoCopy = {
  title: string;
  description: string;
};

const seoCopy: Record<Locale, Record<SeoRoute, SeoCopy>> = {
  el: {
    "": {
      title: "Inner Glow | Θεραπείες, διαλογισμοί & προσωπική ενδυνάμωση",
      description:
        "Η Inner Glow προσφέρει Reiki, EFT, ύπνωση, NLP coaching, συστημική αναπαράσταση και διαλογισμούς στη Βούλα και online.",
    },
    about: {
      title: "Σχετικά με την Inner Glow",
      description:
        "Γνώρισε την Inner Glow και τις πρακτικές αυτογνωσίας, συναισθηματικής αποφόρτισης και εσωτερικής σύνδεσης που προσφέρει.",
    },
    healing: {
      title: "Θεραπείες & καθοδηγούμενες πρακτικές",
      description:
        "Ατομικές θεραπείες και ομαδικές δράσεις Inner Glow: Reiki, EFT, ύπνωση, NLP coaching, συστημική αναπαράσταση και διαλογισμοί.",
    },
    contact: {
      title: "Επικοινωνία | Inner Glow",
      description:
        "Επικοινώνησε με την Inner Glow στη Βούλα ή κλείσε δωρεάν τηλεφωνικό ραντεβού γνωριμίας για να ενημερωθείς για τις υπηρεσίες.",
    },
    terms: {
      title: "Όροι & Προϋποθέσεις",
      description:
        "Όροι και προϋποθέσεις για τη χρήση του website, τις υπηρεσίες, τα workshops και τις δράσεις της Inner Glow.",
    },
    privacy: {
      title: "Πολιτική Απορρήτου & Cookies",
      description:
        "Πολιτική απορρήτου και cookies για το website της Inner Glow, το newsletter, τις φόρμες επικοινωνίας και τα προσωπικά δεδομένα.",
    },
  },
  en: {
    "": {
      title: "Inner Glow | Healing, meditation & personal empowerment",
      description:
        "Inner Glow offers Reiki, EFT, hypnosis, NLP coaching, systemic constellation and meditations in Voula and online.",
    },
    about: {
      title: "About Inner Glow",
      description:
        "Meet Inner Glow and its approach to self-awareness, emotional release and inner connection.",
    },
    healing: {
      title: "Therapies & guided practices",
      description:
        "Individual therapies and group practices at Inner Glow: Reiki, EFT, hypnosis, NLP coaching, systemic constellation and meditations.",
    },
    contact: {
      title: "Contact | Inner Glow",
      description:
        "Contact Inner Glow in Voula or request a free introductory phone appointment to learn more about the services.",
    },
    terms: {
      title: "Terms & Conditions",
      description:
        "Terms and conditions for website use, services, workshops and Inner Glow activities.",
    },
    privacy: {
      title: "Privacy Policy & Cookies",
      description:
        "Privacy and cookies policy for the Inner Glow website, newsletter, contact forms and personal data processing.",
    },
  },
};

const treatmentSeoCopy: Record<Locale, Record<TreatmentRouteKey, SeoCopy>> = {
  el: {
    regressionHypnosis: {
      title: "Ανάδρομη Ύπνωση | Inner Glow",
      description:
        "Συνεδρίες ανάδρομης ύπνωσης στην Inner Glow για βαθύτερη εσωτερική διερεύνηση, αυτογνωσία και σύνδεση με ασφάλεια.",
    },
    nlpCoaching: {
      title: "NLP Coaching & γυναικεία ενδυνάμωση | Inner Glow",
      description:
        "NLP Coaching για αυτοπεποίθηση, όρια, προσωπική εξέλιξη και γυναικεία ενδυνάμωση, online ή δια ζώσης.",
    },
    tapping: {
      title: "EFT Tapping συνεδρίες | Inner Glow",
      description:
        "EFT Tapping για συναισθηματική αποφόρτιση, άγχος και εσωτερική ασφάλεια, με online και δια ζώσης συνεδρίες.",
    },
    reiki: {
      title: "Reiki στη Βούλα | Inner Glow",
      description:
        "Ατομικές συνεδρίες Reiki στη Βούλα για χαλάρωση, ενεργειακή ισορροπία και βαθύτερη σύνδεση με τον εαυτό.",
    },
    systemicConstellation: {
      title: "Συστημική Αναπαράσταση στη Βούλα | Inner Glow",
      description:
        "Εργαστήρια Συστημικής Αναπαράστασης στη Βούλα για οικογενειακές σχέσεις, μοτίβα, εμπλοκές και καθαρότερη εικόνα.",
    },
    meditations: {
      title: "Ομαδικοί Διαλογισμοί στη Βούλα | Inner Glow",
      description:
        "Εβδομαδιαίοι καθοδηγούμενοι διαλογισμοί σε μικρές ομάδες στη Βούλα για ηρεμία, σύνδεση και εσωτερική παύση.",
    },
  },
  en: {
    regressionHypnosis: {
      title: "Regression Hypnosis | Inner Glow",
      description:
        "Regression hypnosis sessions at Inner Glow for deeper inner exploration, self-awareness and safe connection.",
    },
    nlpCoaching: {
      title: "NLP Coaching & women’s empowerment | Inner Glow",
      description:
        "NLP Coaching for confidence, boundaries, personal growth and women’s empowerment, online or in person.",
    },
    tapping: {
      title: "EFT Tapping sessions | Inner Glow",
      description:
        "EFT Tapping sessions for emotional release, anxiety and inner safety, available online and in person.",
    },
    reiki: {
      title: "Reiki in Voula | Inner Glow",
      description:
        "Individual Reiki sessions in Voula for relaxation, energetic balance and a deeper connection with yourself.",
    },
    systemicConstellation: {
      title: "Systemic Constellation in Voula | Inner Glow",
      description:
        "Systemic Constellation workshops in Voula for family relationships, patterns, entanglements and clearer perspective.",
    },
    meditations: {
      title: "Group Meditations in Voula | Inner Glow",
      description:
        "Weekly guided meditations in small groups in Voula for calm, connection and an inner pause.",
    },
  },
};

export function routePath(locale: Locale, route: string) {
  return route ? `/${locale}/${route}` : `/${locale}`;
}

export function absoluteRoute(locale: Locale, route: string) {
  return `${getSiteUrl()}${routePath(locale, route)}`;
}

export function languageAlternates(route: string) {
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

export function getTreatmentSeoMetadata(locale: Locale, treatmentKey: TreatmentRouteKey) {
  return treatmentSeoCopy[locale][treatmentKey];
}
