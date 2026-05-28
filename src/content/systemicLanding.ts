import { siteImages } from "@/content/images";
import type { Locale } from "@/lib/i18n";

type SystemicLandingMode = "scheduled" | "interest";

export const systemicLandingTheme = {
  darkGreen: "#2D5016",
  cream: "#F5F1EB",
  orange: "#FF7F50",
  white: "#FFFFFF",
  redTint: "#FFE4D6",
} as const;

export const systemicLandingContent = {
  el: {
    // Change to "interest" or "scheduled".
    mode: "interest" as SystemicLandingMode,
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
      title: "Κάθε σύστημα έχει τη δική του αλήθεια",
      subtitle: "Ένα εργαστήριο που κλείνει κύκλους και ανοίγει πόρτες",
      cta: "ΔΗΛΩΣΕ ΣΥΜΜΕΤΟΧΗ ΤΩΡΑ",
      urgency: "Μόνο 3 θέσεις απομένουν",
      benefits: [
        {
          title: "Κατάλαβε την Οικογενειακή σου Δυναμική",
          body: "Δες με καθαρότητα τις αόρατες συνδέσεις, τα μοτίβα και τις κρυφές δυναμικές που επηρεάζουν τις σχέσεις και τις επιλογές σου.",
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
      timeNote: "Ωρα προσέλευσης 10:00\nΟλοήμερο + coffee break",
      locationLabel: "Τοποθεσία",
      location: "Βούλα, Αθήνα",
      locationNote: "Επτανήσου 3, Βούλα, 16673",
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
    interest: {
      stickyText: "Έχεις απορίες για τη Συστημική; Κάλεσε: +30 6931 81 81 45",
      heroCta: "ΕΚΔΗΛΩΣΗ ΕΝΔΙΑΦΕΡΟΝΤΟΣ",
      panelTitle: "Δεν υπάρχει προγραμματισμένο εργαστήριο αυτή τη στιγμή",
      panelBody:
        "Μπορείς να αφήσεις τα στοιχεία σου και θα επικοινωνήσουμε μαζί σου όταν οριστεί η επόμενη ημερομηνία.",
      panelCta: "ΘΕΛΩ ΝΑ ΕΝΗΜΕΡΩΘΩ",
      finalTitle: "Θέλεις να ενημερωθείς για το επόμενο εργαστήριο;",
      finalSubtitle:
        "Άφησε τα στοιχεία σου ή επικοινώνησε μαζί μας για να σε ενημερώσουμε όταν ανακοινωθεί νέα ημερομηνία.",
      finalOnline: "ΕΚΔΗΛΩΣΗ ΕΝΔΙΑΦΕΡΟΝΤΟΣ",
    },
    main: {
      title: "Τι μπορεί να αλλάξει όταν δεις το σύστημα καθαρά",
      body:
        "Η Συστημική Αναπαράσταση είναι μια βιωματική μέθοδος που φέρνει στο φως δυναμικές που συχνά λειτουργούν κάτω από την επιφάνεια — οικογενειακές σχέσεις, επαναλαμβανόμενα μοτίβα, εσωτερικές συγκρούσεις, επαγγελματικά αδιέξοδα ή συναισθηματικά βάρη που δεν εξηγούνται πάντα με τη λογική. Μέσα από τη διαδικασία, δημιουργείται χώρος για να παρατηρήσεις πιο καθαρά αυτό που συμβαίνει μέσα σου και γύρω σου.",
      bullets: [
        "Κατανόηση σχέσεων και συναισθηματικών εμπλοκών",
        "Φωτισμός εσωτερικών συγκρούσεων και αδιεξόδων",
        "Επανασύνδεση με τη δική σου θέση και αλήθεια",
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
            "Όχι απαραίτητα. Μπορείς να συμμετάσχεις ως εκπρόσωπος ή απλώς να παρατηρήσεις. Η ασφάλεια και τα όρια κάθε συμμετέχοντα διατηρούνται ασφαλή.",
        },

        {
          question: "Τι είναι η Συστημική Αναπαράσταση;",
          answer:
            "Η Συστημική Αναπαράσταση είναι μια βιωματική ομαδική διαδικασία που βοηθά στην αποκάλυψη κρυφών δυναμικών, μοτίβων και σχέσεων που επηρεάζουν τη ζωή ενός ανθρώπου. Μέσα από τη συμβολική αναπαράσταση ενός θέματος, δημιουργείται η δυνατότητα να δει κανείς πιο καθαρά όσα λειτουργούν κάτω από την επιφάνεια και να αποκτήσει βαθύτερη κατανόηση του εαυτού και των σχέσεών του.",
        },

        {
          question: "Ποια είναι τα οφέλη της Συστημικής Αναπαράστασης;",
          answer:
            "Η διαδικασία βοηθά στην κατανόηση επαναλαμβανόμενων μοτίβων, εσωτερικών συγκρούσεων και δυσκολιών σε σχέσεις, εργασία ή προσωπική ζωή. Μέσα από τη βιωματική εμπειρία, το άτομο μπορεί να αποκτήσει νέα οπτική, μεγαλύτερη επίγνωση και μια βαθύτερη αίσθηση ισορροπίας και σύνδεσης με τον εαυτό του.",
        },

        {
          question: "Χρειάζεται κάποια προετοιμασία πριν τη συμμετοχή;",
          answer:
            "Δεν απαιτείται κάποια ειδική προετοιμασία ή προηγούμενη εμπειρία. Αρκεί να έρθεις με ανοιχτότητα και σεβασμό προς τη διαδικασία. Ο συντονιστής καθοδηγεί την ομάδα σε κάθε στάδιο και βοηθά όλους τους συμμετέχοντες να νιώσουν ασφαλείς και ενταγμένοι στο βίωμα.",
        },

        {
          question: "Μπορεί η Συστημική Αναπαράσταση να αντικαταστήσει την ιατρική ή την ψυχοθεραπεία;",
          answer:
            "Όχι. Η Συστημική Αναπαράσταση δεν αντικαθιστά την ιατρική ή την ψυχοθεραπεία. Λειτουργεί συμπληρωματικά, προσφέροντας έναν διαφορετικό τρόπο κατανόησης των συναισθηματικών και συστημικών δυναμικών που μπορεί να σχετίζονται με μια κατάσταση.",
        },

        {
          question: "Σε ποιες καταστάσεις μπορεί να βοηθήσει;",
          answer:
            "Η Συστημική Αναπαράσταση μπορεί να εφαρμοστεί σε ζητήματα σχέσεων, οικογένειας, επαγγελματικών δυσκολιών, συναισθηματικών μπλοκαρισμάτων, προσωπικής ανάπτυξης και επαναλαμβανόμενων μοτίβων ζωής. Συχνά βοηθά το άτομο να αποκτήσει μεγαλύτερη σαφήνεια και να δει νέες δυνατότητες κίνησης και αλλαγής.",
        },

        {
          question: "Ποια η διαφορά 60€ vs 85€;",
          answer:
            "60€ σημαίνει συμμετοχή ως παρατηρητής ή εκπρόσωπος. 85€ σημαίνει συμμετοχή με δυνατότητα να δουλευτεί το δικό σου αίτημα, το οποίο καθορίζεται κατά την διάρκεια του εργαστηρίου",
        },

        {
          question: "Πότε γίνεται η πληρωμή;",
          answer:
            "Η πληρωμή πραγματοποιείται με την ολοκλήρωση του εργαστηρίου.",
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
    // Change to "interest" or "scheduled".
    mode: "interest" as SystemicLandingMode,
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
      title: "Every system has its one truth",
      subtitle: "A workshop that closes cycles and opens doors",
      cta: "REGISTER YOUR INTEREST NOW",
      urgency: "Only 3 spots left",
      benefits: [
        {
          title: "Understand Your Family Dynamics",
          body: "See the invisible connections, patterns and underlying dynamics that influence your relationships and choices.",
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
      timeNote: "Arrival time: 10:00 AM\nFull day + coffee break",
      locationLabel: "Location",
      location: "Voula, Athens",
      locationNote: "3 eptanisou, Voula, 16673",
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
    interest: {
      stickyText: "Questions about Systemic Constellation? Call: +30 6931 81 81 45",
      heroCta: "REGISTER INTEREST",
      panelTitle: "There is no scheduled workshop at the moment",
      panelBody:
        "You can leave your details and we will contact you when the next date is announced.",
      panelCta: "KEEP ME UPDATED",
      finalTitle: "Would you like to know about the next workshop?",
      finalSubtitle:
        "Leave your details or contact us and we will let you know when a new date is announced.",
      finalOnline: "REGISTER INTEREST",
    },
    main: {
      title: "What can shift when you see the system clearly",
      body:
        "Systemic Constellation is an experiential method that brings hidden dynamics to light — family relationships, recurring patterns, inner conflicts, professional dead ends, or emotional burdens that cannot always be explained through logic alone. Through the process, space is created for you to observe more clearly what is happening within you and around you.",
      bullets: [
        "Understanding relationships and emotional entanglements",
        "Bringing awareness to inner conflicts and life dead ends",
        "Reconnecting with your own place and truth",
      ],
    },
    testimonials: {
      title: "Participant experiences",
      items: [
        {
          quote:
            "I never thought I could understand my relationship problems this way. Revealing.",
          name: "Stelios M.",
          meta: "39 years old",
          date: "Previous participation",
        },
        {
          quote:
            "I was sceptical, but Kanaris created a truly safe space. I would come again.",
          name: "Eleni P.",
          meta: "55 years old",
          date: "Previous participation",
        },
        {
          quote:
            "I did not expect such deep work. But it felt natural and transformative.",
          name: "Takis V.",
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
            "Not necessarily. You can participate as a representative or simply observe. Safety and personal boundaries are respected throughout the process.",
        },

        {
          question: "What is Systemic Constellation?",
          answer:
            "Systemic Constellation is an experiential group process that helps reveal hidden dynamics, patterns and relationships influencing a person's life. Through symbolic representation, participants are given the opportunity to observe what may be operating beneath the surface and gain deeper understanding of themselves and their relationships.",
        },

        {
          question: "What are the benefits of Systemic Constellation?",
          answer:
            "The process can help bring awareness to recurring patterns, inner conflicts and difficulties in relationships, work or personal life. Through the experiential nature of the work, participants often gain new perspectives, greater clarity and a deeper sense of inner balance and connection.",
        },

        {
          question: "Do I need any preparation before participating?",
          answer:
            "No special preparation or previous experience is required. Simply come with openness and respect for the process. The facilitator guides the group throughout every stage and helps participants feel safe and supported.",
        },

        {
          question: "Can Systemic Constellation replace medical treatment or psychotherapy?",
          answer:
            "No. Systemic Constellation does not replace medical treatment or psychotherapy. It works as a complementary approach, offering a different perspective on emotional and systemic dynamics that may be connected to a situation.",
        },

        {
          question: "What kinds of situations can it help with?",
          answer:
            "Systemic Constellation may support people dealing with relationship issues, family dynamics, professional difficulties, emotional blocks, personal growth and recurring life patterns. It often helps participants gain clarity and discover new possibilities for movement and change.",
        },

        {
          question: "What is the difference between 60€ and 85€?",
          answer:
            "60€ is participation as an observer or representative. 85€ includes the possibility of working with your own personal request.",
        },

        {
          question: "When does the payment take place?",
          answer:
            "Payment is made upon completion of the workshop.",
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
