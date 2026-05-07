import type { Metadata } from "next";
import { siteImages } from "@/content/images";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl, siteName } from "@/lib/site";
import type { TreatmentRouteKey } from "@/lib/treatments";

type SeoRoute = "" | "about" | "healing" | "contact" | "terms" | "privacy";

type SeoCopy = {
  title: string;
  description: string;
  keywords: string[];
};

const seoCopy: Record<Locale, Record<SeoRoute, SeoCopy>> = {
  el: {
    "": {
      title: "Inner Glow | Θεραπείες, διαλογισμοί & ενδυνάμωση στη Βούλα",
      description:
        "Reiki, EFT, ύπνωση, NLP coaching, συστημική αναπαράσταση και διαλογισμοί στη Βούλα και online, με ήπια προσέγγιση αυτογνωσίας.",
      keywords: [
        "Inner Glow",
        "θεραπείες Βούλα",
        "ενεργειακές θεραπείες Βούλα",
        "διαλογισμός Βούλα",
        "προσωπική ενδυνάμωση Αθήνα",
      ],
    },
    about: {
      title: "Σχετικά με την Inner Glow | Αυτογνωσία και εσωτερική σύνδεση",
      description:
        "Γνώρισε την Inner Glow στη Βούλα και την προσέγγισή μας στην αυτογνωσία, τη συναισθηματική αποφόρτιση και την εσωτερική σύνδεση.",
      keywords: [
        "Inner Glow Βούλα",
        "αυτογνωσία Βούλα",
        "προσωπική ανάπτυξη Αθήνα",
        "ενεργειακές πρακτικές",
      ],
    },
    healing: {
      title: "Θεραπείες στη Βούλα | Reiki, EFT, Ύπνωση, NLP",
      description:
        "Ατομικές και ομαδικές πρακτικές Inner Glow: Reiki, EFT tapping, αναδρομική ύπνωση, NLP coaching, συστημική αναπαράσταση και διαλογισμοί.",
      keywords: [
        "θεραπείες Βούλα",
        "Reiki Βούλα",
        "EFT Αθήνα",
        "ύπνωση Αθήνα",
        "NLP coaching Βούλα",
      ],
    },
    contact: {
      title: "Επικοινωνία | Inner Glow Βούλα",
      description:
        "Επικοινώνησε με την Inner Glow στη Βούλα ή ζήτησε δωρεάν τηλεφωνικό ραντεβού γνωριμίας για τις υπηρεσίες και τις συνεδρίες.",
      keywords: [
        "Inner Glow επικοινωνία",
        "θεραπείες Βούλα επικοινωνία",
        "ραντεβού γνωριμίας Inner Glow",
      ],
    },
    terms: {
      title: "Όροι & Προϋποθέσεις | Inner Glow",
      description:
        "Όροι και προϋποθέσεις για τη χρήση του website, τις υπηρεσίες, τα workshops και τις δράσεις της Inner Glow.",
      keywords: ["όροι χρήσης Inner Glow", "όροι και προϋποθέσεις Inner Glow"],
    },
    privacy: {
      title: "Πολιτική Απορρήτου & Cookies | Inner Glow",
      description:
        "Πολιτική απορρήτου και cookies για το website της Inner Glow, τις φόρμες επικοινωνίας, το newsletter, το GA4 και το Google Tag Manager.",
      keywords: ["πολιτική απορρήτου Inner Glow", "cookies Inner Glow", "GDPR Inner Glow"],
    },
  },
  en: {
    "": {
      title: "Inner Glow | Healing, meditation & empowerment in Voula",
      description:
        "Reiki, EFT, hypnosis, NLP coaching, systemic constellation and meditations in Voula and online, with a gentle self-awareness approach.",
      keywords: [
        "Inner Glow",
        "healing sessions Voula",
        "Reiki Voula",
        "meditation Voula",
        "personal empowerment Athens",
      ],
    },
    about: {
      title: "About Inner Glow | Self-awareness and inner connection",
      description:
        "Meet Inner Glow in Voula and our approach to self-awareness, emotional release and inner connection.",
      keywords: [
        "Inner Glow Voula",
        "self awareness Voula",
        "personal growth Athens",
        "energy practices",
      ],
    },
    healing: {
      title: "Therapies in Voula | Reiki, EFT, Hypnosis, NLP",
      description:
        "Individual and group practices at Inner Glow: Reiki, EFT tapping, regression hypnosis, NLP coaching, systemic constellation and meditations.",
      keywords: [
        "therapies Voula",
        "Reiki Voula",
        "EFT Athens",
        "hypnosis Athens",
        "NLP coaching Voula",
      ],
    },
    contact: {
      title: "Contact | Inner Glow Voula",
      description:
        "Contact Inner Glow in Voula or request a free of charge 15min call to learn more about the services and sessions.",
      keywords: [
        "Inner Glow contact",
        "therapies Voula contact",
        "introductory appointment Inner Glow",
      ],
    },
    terms: {
      title: "Terms & Conditions | Inner Glow",
      description:
        "Terms and conditions for website use, services, workshops and Inner Glow activities.",
      keywords: ["Inner Glow terms", "Inner Glow terms and conditions"],
    },
    privacy: {
      title: "Privacy Policy & Cookies | Inner Glow",
      description:
        "Privacy and cookies policy for the Inner Glow website, contact forms, newsletter, GA4 and Google Tag Manager.",
      keywords: ["Inner Glow privacy policy", "Inner Glow cookies", "Inner Glow GDPR"],
    },
  },
};

const treatmentSeoCopy: Record<Locale, Record<TreatmentRouteKey, SeoCopy>> = {
  el: {
    regressionHypnosis: {
      title: "Αναδρομική Ύπνωση στην Αθήνα | Inner Glow",
      description:
        "Συνεδρίες αναδρομικής ύπνωσης στην Inner Glow για εσωτερική διερεύνηση, αυτογνωσία και σύνδεση με ασφάλεια, στη Βούλα και online.",
      keywords: [
        "αναδρομική ύπνωση Αθήνα",
        "ύπνωση Βούλα",
        "συνεδρία ύπνωσης",
        "ύπνωση νότια προάστια",
      ],
    },
    nlpCoaching: {
      title: "NLP Coaching στη Βούλα | Γυναικεία ενδυνάμωση",
      description:
        "NLP Coaching για αυτοπεποίθηση, όρια, προσωπική εξέλιξη και γυναικεία ενδυνάμωση, στη Βούλα ή online.",
      keywords: [
        "NLP coaching Βούλα",
        "NLP coaching Αθήνα",
        "γυναικεία ενδυνάμωση",
        "coaching νότια προάστια",
      ],
    },
    tapping: {
      title: "EFT Tapping στη Βούλα και online | Inner Glow",
      description:
        "EFT Tapping για συναισθηματική αποφόρτιση, άγχος, φόβους και εσωτερική ασφάλεια, με συνεδρίες δια ζώσης στη Βούλα ή online.",
      keywords: [
        "EFT tapping Βούλα",
        "EFT Αθήνα",
        "tapping άγχος",
        "συναισθηματική αποφόρτιση",
      ],
    },
    reiki: {
      title: "Reiki στη Βούλα | Ατομικές συνεδρίες Inner Glow",
      description:
        "Ατομικές συνεδρίες Reiki στη Βούλα για χαλάρωση, ενεργειακή ισορροπία, γείωση και βαθύτερη σύνδεση με τον εαυτό.",
      keywords: [
        "Reiki Βούλα",
        "Ρέικι Βούλα",
        "Reiki Αθήνα",
        "ενεργειακή θεραπεία Βούλα",
      ],
    },
    systemicConstellation: {
      title: "Συστημική Αναπαράσταση στη Βούλα | Inner Glow",
      description:
        "Εργαστήρια συστημικής αναπαράστασης στη Βούλα για οικογενειακές σχέσεις, μοτίβα, επαναλαμβανόμενες εμπλοκές και καθαρότερη ματιά.",
      keywords: [
        "συστημική αναπαράσταση Βούλα",
        "συστημική αναπαράσταση Αθήνα",
        "εργαστήριο συστημικής αναπαράστασης",
        "οικογενειακή αναπαράσταση",
      ],
    },
    meditations: {
      title: "Ομαδικοί Διαλογισμοί στη Βούλα | Inner Glow",
      description:
        "Εβδομαδιαίοι καθοδηγούμενοι διαλογισμοί σε μικρές ομάδες στη Βούλα για ηρεμία, μοίρασμα, σύνδεση και επιστροφή στον εαυτό.",
      keywords: [
        "διαλογισμός Βούλα",
        "ομαδικός διαλογισμός Αθήνα",
        "καθοδηγούμενος διαλογισμός",
        "διαλογισμοί νότια προάστια",
      ],
    },
  },
  en: {
    regressionHypnosis: {
      title: "Regression Hypnosis in Athens | Inner Glow",
      description:
        "Regression hypnosis sessions at Inner Glow for inner exploration, self-awareness and safe connection, in Voula and online.",
      keywords: [
        "regression hypnosis Athens",
        "hypnosis Voula",
        "hypnosis session",
        "hypnosis southern suburbs Athens",
      ],
    },
    nlpCoaching: {
      title: "NLP Coaching in Voula | Women's empowerment",
      description:
        "NLP Coaching for confidence, boundaries, personal growth and women's empowerment, in Voula or online.",
      keywords: [
        "NLP coaching Voula",
        "NLP coaching Athens",
        "women's empowerment",
        "coaching southern suburbs Athens",
      ],
    },
    tapping: {
      title: "EFT Tapping in Voula and online | Inner Glow",
      description:
        "EFT Tapping sessions for emotional release, anxiety, fears and inner safety, available in person in Voula or online.",
      keywords: [
        "EFT tapping Voula",
        "EFT Athens",
        "tapping for anxiety",
        "emotional release",
      ],
    },
    reiki: {
      title: "Reiki in Voula | Individual sessions at Inner Glow",
      description:
        "Individual Reiki sessions in Voula for relaxation, energetic balance, grounding and a deeper connection with yourself.",
      keywords: [
        "Reiki Voula",
        "Reiki Athens",
        "energy healing Voula",
        "Reiki session",
      ],
    },
    systemicConstellation: {
      title: "Systemic Constellation in Voula | Inner Glow",
      description:
        "Systemic Constellation workshops in Voula for family relationships, patterns, recurring entanglements and clearer perspective.",
      keywords: [
        "systemic constellation Voula",
        "systemic constellation Athens",
        "family constellation",
        "constellation workshop",
      ],
    },
    meditations: {
      title: "Group Meditations in Voula | Inner Glow",
      description:
        "Weekly guided meditations in small groups in Voula for calm, sharing, connection and an inner pause.",
      keywords: [
        "meditation Voula",
        "group meditation Athens",
        "guided meditation",
        "meditation southern suburbs Athens",
      ],
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
  const image = siteImages.socialShare;

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
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
