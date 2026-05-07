import type { Locale } from "@/lib/i18n";

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalPageContent = {
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  note: string;
};

const termsEl: LegalPageContent = {
  intro:
    "Καλώς ήρθατε στον ιστότοπο της Inner Glow – ένας χώρος εσωτερικής εργασίας, σύνδεσης και μεταμόρφωσης. Με την πρόσβασή σας στον παρόντα ιστότοπο και τη χρήση των υπηρεσιών μας, αποδέχεστε τους παρακάτω όρους χρήσης. Παρακαλούμε να τους διαβάσετε προσεκτικά.",
  lastUpdated: "Τελευταία ενημέρωση: 6 Μαΐου 2026",
  note: "",
  sections: [
    {
      title: "1. Περιγραφή Υπηρεσιών",
      body: [
        "Η Inner Glow προσφέρει ατομικές προσωπικές και ενεργειακές συνεδρίες, καθώς και ομαδικές δράσεις.",
        "• Βιωματικά workshops προσωπικής εξέλιξης (reiki, EFT, ύπνωση)",
        "• Συστημική αναπαράσταση",
        "• Διαλογισμός",
        "• NLP Coaching",
      ],
    },
    {
      title: "2. Δήλωση Συμμετοχής",
      body: [
        "Η συμμετοχή σε workshops και retreats γίνεται κατόπιν αίτησης ενδιαφέροντος. Η κράτηση θεωρείται έγκυρη έπειτα από επιβεβαίωση και, όπου απαιτείται, καταβολή προκαταβολής.",
        "Η δήλωση συμμετοχής δεν είναι μεταβιβάσιμη. Η Inner Glow διατηρεί το δικαίωμα επιλογής συμμετεχόντων, καθώς και ακύρωσης ή αλλαγής ημερομηνιών.",
      ],
    },
    {
      title: "3. Χρήση του Ιστότοπου",
      body: [
        "Ο παρών ιστότοπος προορίζεται για προσωπική και μη εμπορική χρήση.",
        "Απαγορεύεται η αντιγραφή, αναπαραγωγή ή διανομή περιεχομένου χωρίς προηγούμενη έγγραφη άδεια της Inner Glow.",
      ],
    },
    {
      title: "4. Πνευματικά Δικαιώματα",
      body: [
        "Όλο το περιεχόμενο του ιστοτόπου (κείμενα, φωτογραφίες, λογότυπα κ.λπ.) αποτελεί πνευματική ιδιοκτησία της Inner Glow και προστατεύεται από την ελληνική και ευρωπαϊκή νομοθεσία.",
        "Η χρήση του περιεχομένου για εμπορικούς σκοπούς ή η αλλοίωσή του χωρίς άδεια απαγορεύεται.",
      ],
    },
    {
      title: "5. Υπευθυνότητα",
      body: [
        "Οι πληροφορίες και οι υπηρεσίες που παρέχονται στον ιστότοπο ή στις δράσεις μας δεν αποτελούν ιατρική ή ψυχολογική συμβουλή και δεν αντικαθιστούν οποιαδήποτε ιατρική ή ψυχοθεραπευτική αγωγή.",
        "Οι συμμετέχοντες είναι υπεύθυνοι για την προσωπική τους υγεία και ευημερία. Η Inner Glow δεν ευθύνεται για τυχόν άμεσες ή έμμεσες συνέπειες από την εφαρμογή πρακτικών χωρίς την κατάλληλη καθοδήγηση.",
      ],
    },
    {
      title: "6. Προσωπικά Δεδομένα",
      body: [
        "Η Inner Glow διαχειρίζεται τα προσωπικά δεδομένα των χρηστών με σεβασμό και σύμφωνα με την Πολιτική Απορρήτου.",
        "Με τη χρήση του παρόντος ιστότοπου δηλώνετε ότι έχετε διαβάσει και αποδέχεστε την Πολιτική Απορρήτου.",
      ],
    },
    {
      title: "7. Τροποποίηση Όρων",
      body: [
        "Η Inner Glow διατηρεί το δικαίωμα να τροποποιεί τους παρόντες όρους χρήσης οποτεδήποτε και χωρίς προειδοποίηση. Οι αλλαγές ισχύουν από τη δημοσίευσή τους στον ιστότοπο.",
      ],
    },
    {
      title: "8. Δικαιοδοσία",
      body: [
        "Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Οποιαδήποτε διαφορά υπάγεται στην αποκλειστική αρμοδιότητα των δικαστηρίων Αθηνών.",
      ],
    },
    {
      title: "9. Επικοινωνία",
      body: [
        "Για οποιαδήποτε ερώτηση ή διευκρίνιση, μπορείτε να επικοινωνήσετε μαζί μας στο: info@inner-glow.gr",
      ],
    },
  ],
};

const termsEn: LegalPageContent = {
  intro:
    "Welcome to Inner Glow — a space for inner work, connection and transformation. By accessing this website and using our services, you agree to the following terms. Please read them carefully.",
  lastUpdated: "Last updated: May 6, 2026",
  note: "",
  sections: [
    {
      title: "1. Description of Services",
      body: [
        "Inner Glow offers individual personal and energy sessions, as well as group activities.",
        "• Experiential personal development workshops (Reiki, EFT, Hypnosis)",
        "• Systemic Constellation",
        "• Meditation",
        "• NLP Coaching",
      ],
    },
    {
      title: "2. Participation",
      body: [
        "Participation in workshops and retreats is subject to an application of interest. A booking is confirmed only after our confirmation and, where required, a deposit.",
        "Participation is non-transferable. Inner Glow reserves the right to select participants and to cancel or modify dates.",
      ],
    },
    {
      title: "3. Website Use",
      body: [
        "This website is intended for personal, non-commercial use.",
        "Copying, reproducing or distributing any content without prior written permission from Inner Glow is prohibited.",
      ],
    },
    {
      title: "4. Intellectual Property",
      body: [
        "All website content (texts, photos, logos, etc.) is the intellectual property of Inner Glow and is protected by Greek and EU law.",
        "Using the content for commercial purposes or altering it without permission is prohibited.",
      ],
    },
    {
      title: "5. Liability",
      body: [
        "Information and services provided on the website or in our activities do not constitute medical or psychological advice and do not replace any medical or psychotherapeutic treatment.",
        "Participants are responsible for their personal health and wellbeing. Inner Glow bears no liability for direct or indirect consequences arising from the application of practices without appropriate guidance.",
      ],
    },
    {
      title: "6. Personal Data",
      body: [
        "Inner Glow handles users’ personal data with respect and in accordance with our Privacy Policy.",
        "By using this website you acknowledge that you have read and accepted the Privacy Policy.",
      ],
    },
    {
      title: "7. Changes to Terms",
      body: [
        "Inner Glow reserves the right to modify these terms at any time without prior notice. Changes take effect upon publication on the website.",
      ],
    },
    {
      title: "8. Jurisdiction",
      body: [
        "These terms are governed by Greek law. Any dispute shall be subject to the exclusive jurisdiction of the courts of Athens.",
      ],
    },
    {
      title: "9. Contact",
      body: [
        "For any questions or clarifications, please contact us at: info@inner-glow.gr",
      ],
    },
  ],
};

export const legalContent: Record<Locale, { terms: LegalPageContent; privacy: LegalPageContent }> = {
  el: {
    terms: termsEl,
    privacy: {
      intro:
        "Η παρούσα πολιτική εξηγεί ποια προσωπικά δεδομένα συλλέγονται μέσω του website, γιατί συλλέγονται και ποια δικαιώματα έχεις.",
      lastUpdated: "Τελευταία ενημέρωση: 5 Μαΐου 2026",
      note:
        "Το κείμενο είναι πρακτικό draft για GDPR ενημέρωση και δεν αποτελεί νομική συμβουλή. Πριν από επίσημο launch, συνιστάται έλεγχος από νομικό σύμβουλο.",
      sections: [
        {
          title: "1. Υπεύθυνος επεξεργασίας",
          body: [
            "Υπεύθυνος επεξεργασίας για τα δεδομένα που συλλέγονται μέσω του website είναι η Μαργαρίτα Πασχάλη.",
            "Email επικοινωνίας για θέματα προσωπικών δεδομένων: margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "2. Δεδομένα που συλλέγουμε",
          body: [
            "Όταν εγγράφεσαι στο newsletter, συλλέγουμε όνομα, επίθετο και email.",
            "Όταν κλείνεις discovery call ή healing appointment μέσω Cal.com, μπορεί να συλλεχθούν στοιχεία όπως όνομα, email, στοιχεία επικοινωνίας, ζώνη ώρας, επιλεγμένη ημερομηνία/ώρα και όσα επιπλέον στοιχεία επιλέξεις να δώσεις στη φόρμα booking.",
            "Αν σε μεταγενέστερο στάδιο ζητηθούν πληροφορίες σχετικές με υγεία, εγκυμοσύνη, φαρμακευτική αγωγή ή άλλη ευαίσθητη πληροφορία για την καταλληλότητα ή ασφαλή διεξαγωγή συνεδρίας, αυτές θα χρησιμοποιούνται μόνο για τον σχετικό σκοπό και, όπου απαιτείται, με ρητή συγκατάθεση.",
            "Το website φιλοξενείται στη Vercel, η οποία μπορεί να επεξεργάζεται τεχνικά δεδομένα που είναι απαραίτητα για τη λειτουργία, ασφάλεια και απόδοση του website.",
          ],
        },
        {
          title: "3. Σκοποί και νομική βάση",
          body: [
            "Χρησιμοποιούμε τα στοιχεία newsletter για να σου στέλνουμε ενημερώσεις, νέα ή άλλο σχετικό περιεχόμενο. Η νομική βάση είναι η συγκατάθεσή σου.",
            "Χρησιμοποιούμε booking δεδομένα για να οργανώνουμε discovery calls και συνεδρίες. Η νομική βάση είναι η λήψη μέτρων πριν από πιθανή παροχή υπηρεσίας ή η εκτέλεση συμφωνίας.",
            "Χρησιμοποιούμε τεχνικά δεδομένα για τη λειτουργία και ασφάλεια του website, βάσει έννομου συμφέροντος.",
          ],
        },
        {
          title: "4. Πάροχοι και επεξεργαστές",
          body: [
            "Χρησιμοποιούμε Brevo για τη διαχείριση του newsletter.",
            "Χρησιμοποιούμε Cal.com για τη διαχείριση των bookings. Όταν μεταβαίνεις σε σελίδα booking της Cal.com, εφαρμόζονται επίσης οι όροι, η πολιτική απορρήτου και η cookie πρακτική της Cal.com.",
            "Χρησιμοποιούμε Vercel για τη φιλοξενία και διάθεση του website.",
            "Οι πάροχοι αυτοί λειτουργούν ως ανεξάρτητοι πάροχοι ή επεξεργαστές δεδομένων σύμφωνα με τους δικούς τους όρους και πολιτικές.",
          ],
        },
        {
          title: "5. Προωθητικές επικοινωνίες",
          body: [
            "Αν εγγραφείς στο newsletter, μπορείς να λαμβάνεις ενημερώσεις, νέα ή προσκλήσεις σχετικές με τη δραστηριότητα της Inner Glow.",
            "Μπορείς να διαγραφείς οποιαδήποτε στιγμή μέσω του unsubscribe link στο email ή στέλνοντας μήνυμα στο margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "6. Διατήρηση δεδομένων",
          body: [
            "Τα δεδομένα newsletter διατηρούνται μέχρι να διαγραφείς ή να ζητήσεις τη διαγραφή τους.",
            "Τα booking δεδομένα διατηρούνται για όσο χρειάζεται για την οργάνωση της συνεδρίας, την επικοινωνία, εύλογη διοικητική παρακολούθηση και τυχόν νόμιμες υποχρεώσεις.",
            "Όταν δεν είναι πλέον απαραίτητη η διατήρηση, τα δεδομένα διαγράφονται ή ανωνυμοποιούνται όπου είναι πρακτικά εφικτό.",
          ],
        },
        {
          title: "7. Τα δικαιώματά σου",
          body: [
            "Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας, αντίρρησης και ανάκλησης συγκατάθεσης όπου η επεξεργασία βασίζεται σε συγκατάθεση.",
            "Μπορείς να ασκήσεις τα δικαιώματά σου στέλνοντας email στο margaritapaschali@gmail.com.",
            "Έχεις επίσης δικαίωμα υποβολής καταγγελίας στην αρμόδια αρχή προστασίας δεδομένων.",
          ],
        },
        {
          title: "8. Ασφάλεια",
          body: [
            "Λαμβάνονται εύλογα οργανωτικά και τεχνικά μέτρα για την προστασία των προσωπικών δεδομένων. Καμία μέθοδος μετάδοσης ή αποθήκευσης στο διαδίκτυο δεν μπορεί να θεωρηθεί απόλυτα ασφαλής.",
            "Η πρόσβαση στα δεδομένα περιορίζεται σε όσα είναι απαραίτητα για τη λειτουργία του newsletter, του booking και της επικοινωνίας.",
          ],
        },
        {
          title: "9. Σύνδεσμοι προς τρίτους",
          body: [
            "Το website περιέχει συνδέσμους προς τρίτες υπηρεσίες, όπως Cal.com. Δεν ελέγχουμε τις πολιτικές απορρήτου ή cookies αυτών των υπηρεσιών και συνιστάται να τις διαβάζεις πριν υποβάλεις προσωπικά δεδομένα.",
          ],
        },
        {
          title: "10. Cookies",
          body: [
            "Αυτή τη στιγμή το website δεν χρησιμοποιεί analytics, advertising pixels ή μη απαραίτητα tracking cookies.",
            "Μπορεί να χρησιμοποιούνται απολύτως απαραίτητες τεχνικές λειτουργίες από την πλατφόρμα φιλοξενίας ή από υπηρεσίες που απαιτούνται για την ασφαλή λειτουργία του website.",
            "Οι σελίδες booking της Cal.com μπορεί να χρησιμοποιούν cookies ή παρόμοιες τεχνολογίες σύμφωνα με τη δική της πολιτική.",
            "Αν στο μέλλον προστεθούν analytics, marketing cookies ή παρόμοιες τεχνολογίες στο ίδιο το website, θα προστεθεί κατάλληλη ενημέρωση και μηχανισμός συγκατάθεσης πριν ενεργοποιηθούν.",
          ],
        },
        {
          title: "11. Αλλαγές στην πολιτική",
          body: [
            "Η πολιτική μπορεί να ενημερώνεται όταν αλλάζουν οι υπηρεσίες, οι πάροχοι ή οι νομικές απαιτήσεις. Η νεότερη έκδοση θα εμφανίζεται πάντα σε αυτή τη σελίδα.",
          ],
        },
      ],
    },
  },
  en: {
    terms: termsEn,
    privacy: {
      intro:
        "This policy explains what personal data is collected through the website, why it is collected and what rights you have.",
      lastUpdated: "Last updated: May 5, 2026",
      note:
        "This is a practical GDPR information draft and does not constitute legal advice. Before official launch, review by a qualified legal professional is recommended.",
      sections: [
        {
          title: "1. Data controller",
          body: [
            "The data controller for data collected through this website is Margarita Paschali.",
            "Email for data protection requests: margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "2. Data we collect",
          body: [
            "When you subscribe to the newsletter, we collect first name, last name and email address.",
            "When you book a discovery call or healing appointment through Cal.com, information such as your name, email address, contact details, time zone, selected date/time and any additional information you choose to provide in the booking form may be collected.",
            "If at a later stage health-related information, pregnancy information, medication information or other sensitive information is requested for suitability or safe session delivery, it will be used only for that purpose and, where required, with explicit consent.",
            "The website is hosted on Vercel, which may process technical data necessary for website operation, security and performance.",
          ],
        },
        {
          title: "3. Purposes and legal basis",
          body: [
            "We use newsletter details to send updates, news or related content. The legal basis is your consent.",
            "We use booking data to arrange discovery calls and sessions. The legal basis is taking steps before a possible service or performing an agreement.",
            "We use technical data for website operation and security based on legitimate interest.",
          ],
        },
        {
          title: "4. Providers and processors",
          body: [
            "We use Brevo to manage the newsletter.",
            "We use Cal.com to manage bookings. When you visit a Cal.com booking page, Cal.com's own terms, privacy policy and cookie practices also apply.",
            "We use Vercel to host and deliver the website.",
            "These providers act as independent providers or data processors according to their own terms and policies.",
          ],
        },
        {
          title: "5. Promotional communications",
          body: [
            "If you subscribe to the newsletter, you may receive updates, news or invitations related to Inner Glow's activity.",
            "You can unsubscribe at any time using the unsubscribe link in an email or by contacting margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "6. Data retention",
          body: [
            "Newsletter data is kept until you unsubscribe or request deletion.",
            "Booking data is kept for as long as needed to arrange the session, communicate with you, maintain reasonable administrative records and comply with any legal obligations.",
            "When retention is no longer necessary, data is deleted or anonymised where reasonably practical.",
          ],
        },
        {
          title: "7. Your rights",
          body: [
            "You have rights of access, rectification, erasure, restriction, portability, objection and withdrawal of consent where processing is based on consent.",
            "You may exercise your rights by emailing margaritapaschali@gmail.com.",
            "You also have the right to lodge a complaint with the competent data protection authority.",
          ],
        },
        {
          title: "8. Security",
          body: [
            "Reasonable organisational and technical measures are used to protect personal data. No method of internet transmission or electronic storage can be considered completely secure.",
            "Access to data is limited to what is necessary for newsletter management, booking and communication.",
          ],
        },
        {
          title: "9. Third-party links",
          body: [
            "The website contains links to third-party services such as Cal.com. We do not control the privacy or cookie policies of those services and recommend reading them before submitting personal data.",
          ],
        },
        {
          title: "10. Cookies",
          body: [
            "At the moment, the website does not use analytics, advertising pixels or non-essential tracking cookies.",
            "Strictly necessary technical functionality may be used by the hosting platform or services required for secure website operation.",
            "Cal.com booking pages may use cookies or similar technologies according to Cal.com's own policy.",
            "If analytics, marketing cookies or similar technologies are added to this website in the future, appropriate notice and a consent mechanism will be added before they are enabled.",
          ],
        },
        {
          title: "11. Changes to this policy",
          body: [
            "This policy may be updated when services, providers or legal requirements change. The latest version will always be shown on this page.",
          ],
        },
      ],
    },
  },
};

export function getLegalContent(locale: Locale) {
  return legalContent[locale];
}
