import type { Locale } from "@/lib/i18n";

export const dictionaries = {
  el: {
    localeName: "Ελληνικά",
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      healing: "Θεραπείες",
      contact: "Επικοινωνία",
      terms: "Όροι χρήσης",
      privacy: "Πολιτική απορρήτου",
    },
    common: {
      brand: "Inner Glow",
      switchLanguage: "EN",
      bookDiscovery: "Κλείσε ραντεβού γνωριμίας",
      bookHealing: "Κλείσε θεραπεία",
      learnMore: "Μάθε περισσότερα",
      price: "100€",
      perSession: "ανά συνεδρία",
      openBooking: "Άνοιγμα booking",
    },
    seo: {
      homeTitle: "Healing sessions and personal guidance",
      homeDescription:
        "Προσωπικό bilingual website για συνεδρίες healing, τηλεφωνικά ραντεβού γνωριμίας και ήρεμη καθοδήγηση με το Inner Glow.",
      aboutTitle: "Σχετικά",
      healingTitle: "Healing",
      contactTitle: "Επικοινωνία",
      termsTitle: "Όροι χρήσης",
      privacyTitle: "Πολιτική απορρήτου",
    },
    home: {
      heroKicker: "Healing, presence, inner clarity",
      heroTitle: "Ένας ήρεμος χώρος για να επιστρέψεις στον εαυτό σου.",
      heroBody:
        "Η Inner Glow προσφέρει ατομικές συνεδρίες Tapping & Reiki σε συνδυασμό με ήπια καθοδήγηση για ανθρώπους που αναζητούν περισσότερη σύνδεση, γείωση και καθαρότητα στην καθημερινότητά τους.",
      introTitle: "Μια προσέγγιση που τιμά τον ρυθμό σου.",
      introBody:
        "Οι συνεδρίες συνδυάζουν παρουσία, ενεργειακή εργασία και στοχαστική συζήτηση. Δεν πρόκειται για γρήγορες λύσεις, αλλά για έναν ασφαλή τρόπο να ακούσεις τι χρειάζεται το σώμα, η καρδιά και η διαίσθησή σου.",
      aboutTitle: "Γνώρισε την Inner Glow",
      aboutBody:
        "Με ήρεμη, ανθρώπινη προσέγγιση, το Inner Glow δημιουργεί χώρο για βαθύτερη ακρόαση, προσωπική φροντίδα και ουσιαστική αλλαγή.",
      healingTitle: "Ατομικές συνεδρίες Tapping & Reiki",
      healingBody:
        "Μια συνεδρία αφιερωμένη σε εσένα, με καθαρή πρόθεση, πρακτική υποστήριξη και χώρο για όσα ζητούν προσοχή.",
    },
    about: {
        title: "Σχετικά με την Inner\u00A0Glow",
      body:
        "Η Inner Glow εργάζεται με ανθρώπους που θέλουν να νιώσουν ξανά πιο παρόντες, πιο ήρεμοι και πιο συνδεδεμένοι με την εσωτερική τους σοφία.",
      paragraphs: [
        "Η προσέγγισή μας είναι απαλή, γειωμένη και προσωπική. Κάθε συνάντηση ξεκινά από το πού βρίσκεσαι τώρα και κινείται με σεβασμό προς αυτό που είναι έτοιμο να φανερωθεί.",
      ],
    },
    healing: {
      title: "Θεραπείες",
      body:
        "Ατομικές συνεδρίες για καθαρότητα, γείωση και βαθύτερη σύνδεση με τον εαυτό.",
      treatments: [
        {
          title: "Reiki",
          body:
            "Μια ήπια ενεργειακή συνεδρία για χαλάρωση, εσωτερική ισορροπία και βαθύτερη επαφή με το σώμα.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "Τι περιλαμβάνει",
              body: "Η συνεδρία προσαρμόζεται στις ανάγκες σου και μπορεί να περιλαμβάνει ήπια συζήτηση, ενεργειακή εργασία και πρακτικές γείωσης.",
            },
            {
              title: "Για ποιον είναι",
              body: "Για ανθρώπους που χρειάζονται ηρεμία, αποφόρτιση ή έναν υποστηρικτικό χώρο για να επανέλθουν στο κέντρο τους.",
            },
          ],
          coordinator: {
            title: "Συντονιστής",
            name: "Inner Glow",
            role: "Reiki facilitator",
            body: "Η συνεδρία κρατά έναν ήρεμο, ασφαλή χώρο με γειωμένη παρουσία και καθοδήγηση προσαρμοσμένη στον ρυθμό σου.",
            image: "/images/placeholders/about.png",
          },
        },
        {
          title: "Tapping",
          body:
            "Μια πρακτική προσέγγιση που συνδυάζει ήπια καθοδήγηση και tapping σημεία για συναισθηματική αποφόρτιση.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "Τι περιλαμβάνει",
              body: "Η συνεδρία περιλαμβάνει στοχευμένη συζήτηση, αναγνώριση του θέματος που σε απασχολεί και καθοδηγούμενη εφαρμογή tapping.",
            },
            {
              title: "Για ποιον είναι",
              body: "Για ανθρώπους που βιώνουν ένταση, άγχος, μπλοκαρίσματα ή επαναλαμβανόμενα μοτίβα και θέλουν έναν πρακτικό τρόπο αποφόρτισης.",
            },
          ],
          coordinator: {
            title: "Συντονιστής",
            name: "Inner Glow",
            role: "Tapping facilitator",
            body: "Η καθοδήγηση γίνεται με απλότητα, σταθερότητα και προσοχή στο τι μπορεί να υποστηριχθεί με ασφάλεια σε κάθε βήμα.",
            image: "/images/placeholders/about.png",
          },
        },
        {
          title: "Ανάδρομη Ύπνωση",
          body:
            "Μια καθοδηγούμενη εμπειρία βαθιάς χαλάρωσης για διερεύνηση μνήμης, συμβολισμών και εσωτερικών μοτίβων.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "Τι περιλαμβάνει",
              body: "Η συνεδρία περιλαμβάνει προετοιμασία, καθοδηγούμενη χαλάρωση και ήρεμη επεξεργασία όσων αναδυθούν μέσα από την εμπειρία.",
            },
            {
              title: "Για ποιον είναι",
              body: "Για ανθρώπους που θέλουν να εξερευνήσουν βαθύτερα εσωτερικά θέματα, επαναλαμβανόμενα μοτίβα ή συναισθηματικές συνδέσεις.",
            },
          ],
          coordinator: {
            title: "Συντονιστής",
            name: "Inner Glow",
            role: "Regression hypnosis facilitator",
            body: "Ο συντονισμός δίνει έμφαση στην προετοιμασία, την παρουσία και την ήπια επιστροφή μετά την εμπειρία.",
            image: "/images/placeholders/about.png",
          },
        },
        {
          title: "Συστημική Αναπαράσταση",
          body:
            "Μια βιωματική προσέγγιση για να φωτιστούν σχέσεις, δυναμικές και μοτίβα μέσα σε οικογενειακά ή προσωπικά συστήματα.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "Τι περιλαμβάνει",
              body: "Η συνεδρία εστιάζει στο θέμα που φέρνεις, στη χαρτογράφηση των σχέσεων και στην παρατήρηση της δυναμικής που ζητά περισσότερη καθαρότητα.",
            },
            {
              title: "Για ποιον είναι",
              body: "Για ανθρώπους που θέλουν να κατανοήσουν βαθύτερα οικογενειακά, επαγγελματικά ή προσωπικά μοτίβα και τη θέση τους μέσα σε αυτά.",
            },
          ],
          coordinator: {
            title: "Συντονιστής",
            name: "Inner Glow",
            role: "Systemic constellation facilitator",
            body: "Η διαδικασία συντονίζεται με σεβασμό στο σύστημα, στα όρια και στον ρυθμό με τον οποίο μπορεί να φανεί κάθε πληροφορία.",
            image: "/images/placeholders/about.png",
          },
        },
      ],
      pricingTitle: "Τιμή",
      pricingBody:
        "Η συνεδρία γίνεται χωρίς online πληρωμή σε αυτό το στάδιο. Το booking απλώς κρατάει την ώρα σου.",
      pricingLocationNote:
        "Η τιμή εμφανίζεται με βάση την εκτιμώμενη τοποθεσία σου.",
    },
    contact: {
      title: "Επικοινωνία",
      body:
        "Αν θέλεις να μας γνωρισεις πριν κλείσεις συνεδρία, μπορείς να προγραμματίσεις ένα σύντομο τηλεφωνικό ραντεβού γνωριμίας.",
      discoveryTitle: "Τηλεφωνικό ραντεβού γνωριμίας",
      discoveryBody:
        "Ένα απλό πρώτο τηλεφώνημα για να δούμε αν η προσέγγιση μας ταιριάζει σε αυτό που χρειάζεσαι τώρα.",
    },
    subscribe: {
      title: "Μείνε σε επαφή",
      body:
        "Εγγράψου για ήρεμες σημειώσεις, νέα και μελλοντικές ενημερώσεις από την Inner Glow.",
      firstNameLabel: "Όνομα",
      firstNamePlaceholder: "Όνομα",
      lastNameLabel: "Επίθετο",
      lastNamePlaceholder: "Επίθετο",
      emailLabel: "Email",
      placeholder: "you@example.com",
      button: "Εγγραφή",
      success: "Η εγγραφή ολοκληρώθηκε.",
      error: "Κάτι πήγε στραβά. Δοκίμασε ξανά.",
    },
    legal: {
      terms:
        "Placeholder όροι χρήσης. Πριν το website δημοσιευτεί, το κείμενο πρέπει να ελεγχθεί και να αντικατασταθεί με τελικό νομικό περιεχόμενο.",
      privacy:
        "Placeholder πολιτική απορρήτου. Θα πρέπει να συμπεριλάβει τις τελικές πληροφορίες για analytics, newsletter provider και διαχείριση προσωπικών δεδομένων.",
    },
  },
  
  en: {
    localeName: "English",
    nav: {
      home: "Home",
      about: "About",
      healing: "Therapies",
      contact: "Contact",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
    },
    common: {
      brand: "Inner Glow",
      switchLanguage: "EL",
      bookDiscovery: "Book an introductory appointment",
      bookHealing: "Book a healing session",
      learnMore: "Learn more",
      price: "€100",
      perSession: "per session",
      openBooking: "Open booking",
    },
    seo: {
      homeTitle: "Healing sessions and personal guidance",
      homeDescription:
        "A bilingual personal website for healing sessions, introductory calls, and calm guidance with Inner Glow.",
      aboutTitle: "About",
      healingTitle: "Therapies",
      contactTitle: "Contact",
      termsTitle: "Terms & Conditions",
      privacyTitle: "Privacy Policy",
    },
    home: {
      heroKicker: "Healing, presence, inner clarity",
      heroTitle: "A quiet space to return to yourself.",
      heroBody:
        "Inner Glow offers individual healing sessions and gentle guidance for people seeking more connection, grounding, and clarity in everyday life.",
      introTitle: "An approach that honours your pace.",
      introBody:
        "Sessions combine presence, energetic work, and reflective conversation. This is not about quick fixes, but about creating a safe way to listen to what your body, heart, and intuition need.",
      aboutTitle: "Meet Inner Glow",
      aboutBody:
        "With a calm, human approach, Inner Glow creates space for deeper listening, personal care, and meaningful change.",
      healingTitle: "Individual healing sessions",
      healingBody:
        "A session dedicated to you, with clear intention, practical support, and room for what needs attention.",
    },
    about: {
      title: "About Inner\u00A0Glow",
      body:
        "Inner Glow works with people who want to feel more present, calmer, and more connected to their inner wisdom.",
      paragraphs: [
        "Our approach is gentle, grounded, and personal. Every meeting begins with where you are now and moves respectfully toward what is ready to be seen.",
      ],
    },
    healing: {
      title: "Therapies",
      body:
        "Individual sessions for clarity, grounding, and a deeper connection with yourself.",
      treatments: [
        {
          title: "Reiki",
          body:
            "A gentle energetic session for relaxation, inner balance, and a deeper connection with the body.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "What it includes",
              body: "The session adapts to your needs and may include gentle conversation, energetic work, and grounding practices.",
            },
            {
              title: "Who it is for",
              body: "For people who need calm, release, or a supportive space to return to their center.",
            },
          ],
          coordinator: {
            title: "Facilitator",
            name: "Inner Glow",
            role: "Reiki facilitator",
            body: "The session holds a calm, safe space with grounded presence and guidance adapted to your pace.",
            image: "/images/placeholders/about.png",
          },
        },
        {
          title: "Tapping",
          body:
            "A practical approach that combines gentle guidance and tapping points for emotional release.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "What it includes",
              body: "The session includes focused conversation, identifying the theme you want to work with, and guided tapping.",
            },
            {
              title: "Who it is for",
              body: "For people experiencing tension, anxiety, blocks, or repeating patterns who want a practical way to release pressure.",
            },
          ],
          coordinator: {
            title: "Facilitator",
            name: "Inner Glow",
            role: "Tapping facilitator",
            body: "Guidance is simple, steady, and attentive to what can be supported safely at each step.",
            image: "/images/placeholders/about.png",
          },
        },
        {
          title: "Regression Hypnosis",
          body:
            "A guided deep-relaxation experience for exploring memory, symbolism, and inner patterns.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "What it includes",
              body: "The session includes preparation, guided relaxation, and calm integration of what emerges through the experience.",
            },
            {
              title: "Who it is for",
              body: "For people who want to explore deeper inner themes, repeating patterns, or emotional connections.",
            },
          ],
          coordinator: {
            title: "Facilitator",
            name: "Inner Glow",
            role: "Regression hypnosis facilitator",
            body: "Facilitation emphasizes preparation, presence, and a gentle return after the experience.",
            image: "/images/placeholders/about.png",
          },
        },
        {
          title: "Systemic Constellation",
          body:
            "An experiential approach for bringing relationships, dynamics, and patterns within family or personal systems into clearer view.",
          image: "/images/placeholders/healing.png",
          sections: [
            {
              title: "What it includes",
              body: "The session focuses on the theme you bring, mapping relationships, and observing the dynamic that needs more clarity.",
            },
            {
              title: "Who it is for",
              body: "For people who want to better understand family, work, or personal patterns and their place within them.",
            },
          ],
          coordinator: {
            title: "Facilitator",
            name: "Inner Glow",
            role: "Systemic constellation facilitator",
            body: "The process is facilitated with respect for the system, its boundaries, and the pace at which information can emerge.",
            image: "/images/placeholders/about.png",
          },
        },
      ],
      pricingTitle: "Pricing",
      pricingBody:
        "There is no online payment at this stage. Booking simply reserves your time.",
      pricingLocationNote:
        "The price is shown based on your estimated location.",
    },
    contact: {
      title: "Contact",
      body:
        "If you would like to meet us before booking a session, you can schedule a short introductory phone appointment.",
      discoveryTitle: "Introductory phone appointment",
      discoveryBody:
        "A simple first call to see whether our approach fits what you need right now.",
    },
    subscribe: {
      title: "Stay in touch",
      body:
        "Subscribe for quiet notes, news, and future updates from Inner Glow.",
      firstNameLabel: "First name",
      firstNamePlaceholder: "First name",
      lastNameLabel: "Last name",
      lastNamePlaceholder: "Last name",
      emailLabel: "Email",
      placeholder: "you@example.com",
      button: "Subscribe",
      success: "You are subscribed.",
      error: "Something went wrong. Please try again.",
    },
    legal: {
      terms:
        "Placeholder terms and conditions. Before launch, this copy should be reviewed and replaced with final legal content.",
      privacy:
        "Placeholder privacy policy. It should include final details about analytics, newsletter provider, and personal data handling.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
