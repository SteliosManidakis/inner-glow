import { siteImages } from "@/content/images";
import type { Locale } from "@/lib/i18n";

export const systemicLandingTheme = {
  darkGreen: "#2D5016",
  cream: "#F5F1EB",
  orange: "#FF6B35",
  white: "#FFFFFF",
  redTint: "#FFE4D6",
} as const;

export const systemicLandingContent = {
  el: {
    phone: "+30 693 1818145",
    phoneHref: "tel:+306931818145",
    whatsAppHref:
      "https://wa.me/306931818145?text=%CE%9A%CE%B1%CE%BB%CE%B7%CF%83%CF%80%CE%AD%CF%81%CE%B1%2C%20%CE%B5%CE%BD%CE%B4%CE%B9%CE%B1%CF%86%CE%AD%CF%81%CE%BF%CE%BC%CE%B1%CE%B9%20%CE%B3%CE%B9%CE%B1%20%CF%84%CE%BF%20%CE%B5%CF%81%CE%B3%CE%B1%CF%83%CF%84%CE%AE%CF%81%CE%B9%CE%BF%20%CE%A3%CF%85%CF%83%CF%84%CE%B7%CE%BC%CE%B9%CE%BA%CE%AE%CF%82%20%CE%91%CE%BD%CE%B1%CF%80%CE%B1%CF%81%CE%AC%CF%83%CF%84%CE%B1%CF%83%CE%B7%CF%82%20%CF%83%CF%84%CE%B9%CF%82%2031%2F5.",
    stickyBar: {
      text: "Καλέσε: +30 6931 81 81 45",
      button: "Κλήση",
    },
    hero: {
      image: siteImages.landingPages.systemicConstellationHero,
      kicker: "Συστημική Αναπαράσταση",
      title: "Δες Αυτό Που Άλλοι Δεν Βλέπουν",
      subtitle: "Ένα εργαστήριο που κλείνει κύκλους και ανοίγει πόρτες",
      cta: "ΔΗΛΩΣΕ ΣΥΜΜΕΤΟΧΗ ΤΩΡΑ",
      urgency: "Μόνο 3 θέσεις απομένουν",
      benefits: [
        {
          title: "Κατάλαβε την Οικογενειακή σου Δυναμική",
          body: "Δες με καθαρότητα τις αόρατες συνδέσεις, τα μοτίβα και τις πιστότητες που επηρεάζουν τις σχέσεις και τις επιλογές σου.",
        },
        {
          title: "Απελευθέρωσε τον Εαυτό σου",
          body: "Άφησε χώρο για νέα κίνηση εκεί όπου παλιά μπλοκαρίσματα, ενοχές ή επαναλαμβανόμενες εμπλοκές κρατούσαν την ενέργειά σου δεσμευμένη.",
        },
        {
          title: "Κέρδισε Ηρεμία & Κατεύθυνση",
          body: "Φύγε με περισσότερη επίγνωση, εσωτερική ησυχία και μια πιο καθαρή αίσθηση για το επόμενο βήμα σου.",
        },
      ],
    },
    event: {
      dateLabel: "Ημερομηνία",
      date: "Κυριακή, 31 Μαΐου 2026",
      dateNote: "Πανσέληνος & Ολοκλήρωση",
      timeLabel: "Ώρα",
      time: "10:30 π.μ. - 20:00 μ.μ.",
      timeNote: "Ολοήμερο + coffee break",
      locationLabel: "Τοποθεσία",
      location: "Βούλα, Αθήνα",
      locationNote: "Ακριβής διεύθυνση κατόπιν δήλωσης",
      simplePrice: "60€",
      simpleLabel: "Απλή",
      requestPrice: "85€",
      requestLabel: "Με αίτημα",
      remainingSeats: 3,
      urgency: "Μόνο 3 θέσεις απομένουν",
      instructor: "Κανάρης Κάραλης | Ψυχολόγος | DGfS®",
      callButton: "Κάλεσε",
      whatsAppButton: "WhatsApp",
    },
    main: {
      title: "Τι μπορεί να αλλάξει όταν δεις το σύστημα καθαρά",
      body:
        "Η Συστημική Αναπαράσταση είναι μια βιωματική μέθοδος που φέρνει στο φως δυναμικές που συχνά λειτουργούν κάτω από την επιφάνεια: οικογενειακές σχέσεις, επαναλαμβανόμενα μοτίβα, εσωτερικές συγκρούσεις, επαγγελματικά αδιέξοδα ή βάρη που δεν εξηγούνται μόνο με τη λογική.",
      bullets: [
        "Σε οικογενειακές σχέσεις και επαναλαμβανόμενες εμπλοκές",
        "Σε σχέσεις, επαγγελματικά μπλοκαρίσματα ή αδιέξοδα ζωής",
        "Όταν θέλεις να δεις πιο καθαρά μια κατάσταση και τη θέση σου μέσα σε αυτή",
      ],
    },
    testimonials: {
      title: "Εμπειρίες συμμετεχόντων",
      items: [
        {
          quote:
            "Ποτέ δεν σκέφτηκα ότι μπορούσα να καταλάβω τα προβλήματα σχέσης μου έτσι. Αποκαλυπτικό.",
          name: "Στέλιος Μ.",
          meta: "39 ετών",
          date: "Παλαιότερη συμμετοχή",
        },
        {
          quote:
            "Ήμουν σκεπτικός, αλλά ο Κανάρης δημιούργησε έναν πραγματικά ασφαλή χώρο. Θα ξαναέρθω.",
          name: "Ελένη Π.",
          meta: "55 ετών",
          date: "Παλαιότερη συμμετοχή",
        },
        {
          quote:
            "Δεν περίμενα τόσο βαθύ έργο. Αλλά ήταν φυσικό και μετασχηματιστικό.",
          name: "Τάκης Β.",
          meta: "38 ετών",
          date: "Παλαιότερη συμμετοχή",
        },
      ],
    },
    faq: {
      title: "Συχνές ερωτήσεις",
      items: [
        {
          question: "Θα πρέπει να μιλήσω για τα προσωπικά μου θέματα μπροστά σε άλλους;",
          answer:
            "Όχι απαραίτητα. Μπορείς να συμμετάσχεις ως αντιπρόσωπος ή απλώς να παρατηρήσεις. Η ασφάλεια και τα όρια κάθε συμμετέχοντα διατηρούνται ασφαλή.",
        },
        {
          question: "Πόσο γρήγορα θα δω αποτελέσματα;",
          answer:
            "Πολλοί νιώθουν αλλαγή ήδη μέσα στο εργαστήριο. Συχνά όμως η πραγματική μετατόπιση συνεχίζεται στις εβδομάδες που ακολουθούν.",
        },
        {
          question: "Χρειάζονται προϋποθέσεις;",
          answer: "Καθόλου. Απλώς έλα με ανοιχτό μυαλό και σεβασμό στη διαδικασία.",
        },
        {
          question: "Ποια η διαφορά 60€ vs 85€;",
          answer:
            "60€ σημαίνει συμμετοχή ως παρατηρητής ή αντιπρόσωπος. 85€ σημαίνει συμμετοχή με δυνατότητα να δουλευτεί το δικό σου αίτημα.",
        },
      ],
    },
    form: {
      title: "Δήλωσε συμμετοχή",
      body: "Συμπλήρωσε τα βασικά στοιχεία και θα επικοινωνήσουμε μαζί σου για επιβεβαίωση.",
      nameLabel: "Όνομα",
      namePlaceholder: "Το όνομά σου",
      phoneLabel: "Τηλέφωνο",
      phonePlaceholder: "+30 ...",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      participationLabel: "Τύπος συμμετοχής",
      simpleParticipation: "Απλή συμμετοχή - 60€",
      requestParticipation: "Συμμετοχή με αίτημα - 85€",
      privacy:
        "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για επικοινωνία σχετικά με τη δήλωση συμμετοχής.",
      submit: "✓ Επιβεβαίωσε τη Δήλωση",
      submitting: "Αποστολή...",
      success: "Η δήλωσή σου στάλθηκε. Θα επικοινωνήσουμε σύντομα μαζί σου.",
      error: "Κάτι πήγε στραβά. Δοκίμασε ξανά σε λίγο.",
    },
    finalCta: {
      title: "Είσαι Έτοιμος να Δεις Καθαρά;",
      subtitle:
        "31 Μαΐου. Πανσέληνος & Ολοκλήρωση. Ένα εργαστήριο που κλείνει κύκλους.",
      call: "Καλέσε Τώρα",
      online: "Δήλωσε Online",
      whatsApp: "WhatsApp",
    },
  },
  en: {
    phone: "+30 693 1818145",
    phoneHref: "tel:+306931818145",
    whatsAppHref:
      "https://wa.me/306931818145?text=Hello%2C%20I%20am%20interested%20in%20the%20Systemic%20Constellation%20workshop%20on%2031%2F5.",
    stickyBar: {
      text: "Call: +30 6931 81 81 45",
      button: "Call",
    },
    hero: {
      image: siteImages.landingPages.systemicConstellationHero,
      kicker: "Systemic Constellation",
      title: "See What Others Cannot See",
      subtitle: "A workshop that closes cycles and opens doors",
      cta: "REGISTER YOUR INTEREST NOW",
      urgency: "Only 3 spots left",
      benefits: [
        {
          title: "Understand Your Family Dynamics",
          body: "See the invisible connections, patterns and loyalties that influence your relationships and choices.",
        },
        {
          title: "Free Yourself",
          body: "Create space for movement where old blocks, guilt or repeated entanglements have held your energy.",
        },
        {
          title: "Gain Calm & Direction",
          body: "Leave with more awareness, inner quiet and a clearer sense of your next step.",
        },
      ],
    },
    event: {
      dateLabel: "Date",
      date: "Sunday, May 31, 2026",
      dateNote: "Full moon & completion",
      timeLabel: "Time",
      time: "10:30 a.m. - 8:00 p.m.",
      timeNote: "Full day + coffee break",
      locationLabel: "Location",
      location: "Voula, Athens",
      locationNote: "Exact address after registration",
      simplePrice: "60€",
      simpleLabel: "Simple",
      requestPrice: "85€",
      requestLabel: "With request",
      remainingSeats: 3,
      urgency: "Only 3 spots left",
      instructor: "Kanaris Karalis | Psychologist | DGfS®",
      callButton: "Call",
      whatsAppButton: "WhatsApp",
    },
    main: {
      title: "What can shift when you see the system clearly",
      body:
        "Systemic Constellation is an experiential method that brings to light dynamics often operating beneath the surface: family relationships, repeated patterns, inner conflicts, professional dead ends or burdens that cannot be explained only through logic.",
      bullets: [
        "Family relationships and recurring entanglements",
        "Relationships, professional blocks or life dead ends",
        "When you want to see a situation and your place in it more clearly",
      ],
    },
    testimonials: {
      title: "Participant experiences",
      items: [
        {
          quote:
            "I never thought I could understand my relationship problems this way. Revealing.",
          name: "Maria K.",
          meta: "35 years old",
          date: "Previous participation",
        },
        {
          quote:
            "I was sceptical, but Kanaris created a truly safe space. I would come again.",
          name: "Nikos P.",
          meta: "42 years old",
          date: "Previous participation",
        },
        {
          quote:
            "I did not expect such deep work. But it felt natural and transformative.",
          name: "Eleni V.",
          meta: "38 years old",
          date: "Previous participation",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Will I have to talk about my personal issues in front of others?",
          answer:
            "Not necessarily. You can participate as a representative or simply observe. Safety and personal boundaries are respected.",
        },
        {
          question: "How quickly will I see results?",
          answer:
            "Many people feel a shift during the workshop itself. Often, the deeper movement continues in the following weeks.",
        },
        {
          question: "Are there any prerequisites?",
          answer: "No. Just come with an open mind and respect for the process.",
        },
        {
          question: "What is the difference between 60€ and 85€?",
          answer:
            "60€ is participation as an observer or representative. 85€ includes the possibility of working with your own request.",
        },
      ],
    },
    form: {
      title: "Register your interest",
      body: "Fill in the essential details and we will contact you to confirm.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone",
      phonePlaceholder: "+30 ...",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      participationLabel: "Participation type",
      simpleParticipation: "Simple participation - 60€",
      requestParticipation: "Participation with request - 85€",
      privacy:
        "I agree that my details may be used to contact me about this workshop registration.",
      submit: "✓ Confirm Registration",
      submitting: "Sending...",
      success: "Your registration was sent. We will contact you soon.",
      error: "Something went wrong. Please try again in a moment.",
    },
    finalCta: {
      title: "Are You Ready to See Clearly?",
      subtitle:
        "May 31. Full moon & completion. A workshop that closes cycles.",
      call: "Call Now",
      online: "Register Online",
      whatsApp: "WhatsApp",
    },
  },
} as const satisfies Record<Locale, unknown>;

export function getSystemicLandingContent(locale: Locale) {
  return systemicLandingContent[locale];
}
