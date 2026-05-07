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
    "Καλώς ήρθατε στον ιστότοπο της Inner Glow - έναν χώρο εσωτερικής εργασίας, σύνδεσης και μεταμόρφωσης. Με την πρόσβασή σας στον παρόντα ιστότοπο και τη χρήση των υπηρεσιών μας, αποδέχεστε τους παρακάτω όρους χρήσης. Παρακαλούμε να τους διαβάσετε προσεκτικά.",
  lastUpdated: "Τελευταία ενημέρωση: 7 Μαΐου 2026",
  note: "",
  sections: [
    {
      title: "1. Περιγραφή Υπηρεσιών",
      body: [
        "Η Inner Glow προσφέρει ατομικές προσωπικές και ενεργειακές συνεδρίες, καθώς και ομαδικές δράσεις.",
        "• Βιωματικά workshops προσωπικής εξέλιξης (Reiki, EFT, ύπνωση)",
        "• Συστημική αναπαράσταση",
        "• Διαλογισμό",
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
    "Welcome to Inner Glow - a space for inner work, connection and transformation. By accessing this website and using our services, you agree to the following terms. Please read them carefully.",
  lastUpdated: "Last updated: May 7, 2026",
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
        "Inner Glow handles users' personal data with respect and in accordance with our Privacy Policy.",
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
      body: ["For any questions or clarifications, please contact us at: info@inner-glow.gr"],
    },
  ],
};

const privacyEl: LegalPageContent = {
  intro:
    "Η παρούσα πολιτική εξηγεί ποια προσωπικά δεδομένα συλλέγονται μέσω του website της Inner Glow, για ποιους σκοπούς χρησιμοποιούνται, ποιοι πάροχοι εμπλέκονται και πώς λειτουργούν τα cookies και οι τεχνολογίες analytics/marketing.",
  lastUpdated: "Τελευταία ενημέρωση: 7 Μαΐου 2026",
  note:
    "Το κείμενο αποτελεί πρακτική ενημέρωση για GDPR/cookies και δεν αποτελεί νομική συμβουλή. Για πλήρη νομική κάλυψη συνιστάται έλεγχος από νομικό σύμβουλο.",
  sections: [
    {
      title: "1. Υπεύθυνος επεξεργασίας",
      body: [
        "Υπεύθυνος επεξεργασίας για τα δεδομένα που συλλέγονται μέσω του website είναι η Inner Glow.",
        "Email επικοινωνίας για θέματα προσωπικών δεδομένων: info@inner-glow.gr.",
      ],
    },
    {
      title: "2. Δεδομένα που συλλέγουμε",
      body: [
        "Όταν συμπληρώνεις φόρμα επικοινωνίας ή φόρμα ενδιαφέροντος για θεραπεία, συλλέγουμε στοιχεία όπως όνομα, επίθετο, email, τηλέφωνο, επιλεγμένη υπηρεσία και το μήνυμα που επιλέγεις να μας στείλεις.",
        "Όταν εγγράφεσαι στο newsletter, συλλέγουμε όνομα, επίθετο και email.",
        "Μέσω του website ενδέχεται να συλλέγονται τεχνικά δεδομένα, όπως διεύθυνση IP, τύπος browser, συσκευή, σελίδες που επισκέπτεσαι και βασικές ενέργειες μέσα στο site, εφόσον έχεις δώσει συγκατάθεση για analytics ή marketing cookies.",
        "Το website φιλοξενείται στη Vercel, η οποία μπορεί να επεξεργάζεται τεχνικά δεδομένα απαραίτητα για τη λειτουργία, την ασφάλεια και την απόδοση του website.",
      ],
    },
    {
      title: "3. Σκοποί και νομική βάση",
      body: [
        "Χρησιμοποιούμε τα στοιχεία των φορμών για να απαντήσουμε στο αίτημά σου, να επικοινωνήσουμε μαζί σου και να οργανώσουμε πιθανή συνεδρία ή τηλεφωνική γνωριμία.",
        "Χρησιμοποιούμε τα στοιχεία newsletter για να στέλνουμε ενημερώσεις, νέα ή προσκλήσεις σχετικές με την Inner Glow. Η νομική βάση είναι η συγκατάθεσή σου.",
        "Χρησιμοποιούμε τεχνικά δεδομένα για την ασφαλή λειτουργία του website βάσει έννομου συμφέροντος.",
        "Χρησιμοποιούμε analytics και marketing τεχνολογίες μόνο μετά από συγκατάθεση, ώστε να μετράμε επισκεψιμότητα, αιτήματα ενδιαφέροντος και την αποτελεσματικότητα ενεργειών επικοινωνίας ή διαφήμισης.",
      ],
    },
    {
      title: "4. Πάροχοι και εργαλεία",
      body: [
        "Χρησιμοποιούμε Brevo για τη διαχείριση του newsletter και την αποστολή email από φόρμες.",
        "Χρησιμοποιούμε Vercel για τη φιλοξενία και διάθεση του website.",
        "Χρησιμοποιούμε Google Tag Manager για τη διαχείριση tags και Google Analytics 4 για στατιστικά επισκεψιμότητας και μέτρηση βασικών ενεργειών, όπως επιτυχής υποβολή φόρμας.",
        "Αν χρησιμοποιήσεις εξωτερικές υπηρεσίες booking ή άλλους συνδέσμους τρίτων, εφαρμόζονται επίσης οι δικοί τους όροι, πολιτικές απορρήτου και cookie πρακτικές.",
      ],
    },
    {
      title: "5. Cookies και συγκατάθεση",
      body: [
        "Το website χρησιμοποιεί απολύτως απαραίτητες τεχνικές λειτουργίες για τη σωστή και ασφαλή λειτουργία του.",
        "Τα analytics cookies χρησιμοποιούνται μόνο αν τα αποδεχτείς. Μας βοηθούν να κατανοούμε συνολικά την επισκεψιμότητα, τις σελίδες που έχουν ενδιαφέρον και την απόδοση των φορμών, χωρίς να στέλνουμε στο Google προσωπικά δεδομένα όπως όνομα, email ή τηλέφωνο.",
        "Τα marketing cookies ή tags χρησιμοποιούνται μόνο αν τα αποδεχτείς. Μπορούν να βοηθήσουν στη μέτρηση διαφημιστικών ενεργειών ή μελλοντικών καμπανιών.",
        "Μπορείς να αλλάξεις τις επιλογές σου οποιαδήποτε στιγμή από το κουμπί «Ρυθμίσεις cookies» στο footer.",
      ],
    },
    {
      title: "6. Google Analytics 4 και Google Tag Manager",
      body: [
        "Το Google Tag Manager φορτώνεται μόνο μετά από συγκατάθεση για analytics ή marketing cookies.",
        "Το Google Analytics 4 χρησιμοποιείται για συγκεντρωτικά στατιστικά και events, όπως προβολές σελίδων, επιτυχής υποβολή φόρμας γνωριμίας, επιτυχής υποβολή φόρμας θεραπείας και εγγραφή στο newsletter.",
        "Στα analytics events δεν αποστέλλονται προσωπικά δεδομένα όπως όνομα, email ή τηλέφωνο.",
        "Η Google μπορεί να επεξεργάζεται δεδομένα σύμφωνα με τις δικές της πολιτικές και ρυθμίσεις απορρήτου.",
      ],
    },
    {
      title: "7. Διατήρηση δεδομένων",
      body: [
        "Τα δεδομένα newsletter διατηρούνται μέχρι να διαγραφείς ή να ζητήσεις τη διαγραφή τους.",
        "Τα δεδομένα από φόρμες επικοινωνίας και ενδιαφέροντος διατηρούνται για όσο χρειάζεται ώστε να απαντήσουμε στο αίτημά σου, να οργανώσουμε πιθανή συνεργασία ή συνεδρία και να τηρήσουμε εύλογες διοικητικές ή νόμιμες υποχρεώσεις.",
        "Όταν η διατήρηση δεν είναι πλέον απαραίτητη, τα δεδομένα διαγράφονται ή ανωνυμοποιούνται όπου είναι πρακτικά εφικτό.",
      ],
    },
    {
      title: "8. Τα δικαιώματά σου",
      body: [
        "Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας, αντίρρησης και ανάκλησης συγκατάθεσης όπου η επεξεργασία βασίζεται σε συγκατάθεση.",
        "Μπορείς να ασκήσεις τα δικαιώματά σου στέλνοντας email στο info@inner-glow.gr.",
        "Έχεις επίσης δικαίωμα υποβολής καταγγελίας στην αρμόδια αρχή προστασίας δεδομένων.",
      ],
    },
    {
      title: "9. Ασφάλεια",
      body: [
        "Λαμβάνονται εύλογα οργανωτικά και τεχνικά μέτρα για την προστασία των προσωπικών δεδομένων.",
        "Καμία μέθοδος μετάδοσης ή αποθήκευσης στο διαδίκτυο δεν μπορεί να θεωρηθεί απόλυτα ασφαλής, όμως η πρόσβαση στα δεδομένα περιορίζεται σε όσα είναι απαραίτητα για επικοινωνία, newsletter, διαχείριση αιτημάτων και τεχνική λειτουργία.",
      ],
    },
    {
      title: "10. Αλλαγές στην πολιτική",
      body: [
        "Η πολιτική μπορεί να ενημερώνεται όταν αλλάζουν οι υπηρεσίες, οι πάροχοι, οι τεχνολογίες ή οι νομικές απαιτήσεις. Η νεότερη έκδοση εμφανίζεται πάντα σε αυτή τη σελίδα.",
      ],
    },
  ],
};

const privacyEn: LegalPageContent = {
  intro:
    "This policy explains what personal data is collected through the Inner Glow website, why it is used, which providers are involved and how cookies, analytics and marketing technologies work.",
  lastUpdated: "Last updated: May 7, 2026",
  note:
    "This is a practical GDPR/cookies information draft and does not constitute legal advice. For full legal coverage, review by a qualified legal professional is recommended.",
  sections: [
    {
      title: "1. Data controller",
      body: [
        "The data controller for data collected through the website is Inner Glow.",
        "Email for data protection requests: info@inner-glow.gr.",
      ],
    },
    {
      title: "2. Data we collect",
      body: [
        "When you submit a contact form or treatment request form, we collect details such as first name, last name, email, phone, selected service and the message you choose to send.",
        "When you subscribe to the newsletter, we collect first name, last name and email address.",
        "Technical data such as IP address, browser type, device, visited pages and basic website actions may be collected if you consent to analytics or marketing cookies.",
        "The website is hosted on Vercel, which may process technical data necessary for website operation, security and performance.",
      ],
    },
    {
      title: "3. Purposes and legal basis",
      body: [
        "We use form details to respond to your request, contact you and arrange a possible session or introductory call.",
        "We use newsletter details to send updates, news or invitations related to Inner Glow. The legal basis is your consent.",
        "We use technical data for secure website operation based on legitimate interest.",
        "We use analytics and marketing technologies only after consent, in order to measure traffic, lead requests and the effectiveness of communication or advertising activity.",
      ],
    },
    {
      title: "4. Providers and tools",
      body: [
        "We use Brevo to manage the newsletter and send emails from forms.",
        "We use Vercel to host and deliver the website.",
        "We use Google Tag Manager to manage tags and Google Analytics 4 for traffic statistics and key event measurement, such as successful form submissions.",
        "If you use external booking services or third-party links, their own terms, privacy policies and cookie practices also apply.",
      ],
    },
    {
      title: "5. Cookies and consent",
      body: [
        "The website uses strictly necessary technical functionality for proper and secure operation.",
        "Analytics cookies are used only if you accept them. They help us understand aggregate traffic, page interest and form performance, without sending personal data such as name, email or phone to Google.",
        "Marketing cookies or tags are used only if you accept them. They may help measure advertising activity or future campaigns.",
        "You can change your choices at any time through the Cookie settings button in the footer.",
      ],
    },
    {
      title: "6. Google Analytics 4 and Google Tag Manager",
      body: [
        "Google Tag Manager loads only after consent for analytics or marketing cookies.",
        "Google Analytics 4 is used for aggregate statistics and events, such as page views, successful introductory form submission, successful treatment request form submission and newsletter subscription.",
        "Analytics events do not send personal data such as name, email or phone.",
        "Google may process data according to its own privacy policies and settings.",
      ],
    },
    {
      title: "7. Data retention",
      body: [
        "Newsletter data is kept until you unsubscribe or request deletion.",
        "Contact and treatment request form data is kept for as long as needed to respond to your request, arrange possible cooperation or a session and maintain reasonable administrative or legal records.",
        "When retention is no longer necessary, data is deleted or anonymised where reasonably practical.",
      ],
    },
    {
      title: "8. Your rights",
      body: [
        "You have rights of access, rectification, erasure, restriction, portability, objection and withdrawal of consent where processing is based on consent.",
        "You may exercise your rights by emailing info@inner-glow.gr.",
        "You also have the right to lodge a complaint with the competent data protection authority.",
      ],
    },
    {
      title: "9. Security",
      body: [
        "Reasonable organisational and technical measures are used to protect personal data.",
        "No method of internet transmission or electronic storage can be considered completely secure, but access to data is limited to what is necessary for communication, newsletter, request handling and technical operation.",
      ],
    },
    {
      title: "10. Changes to this policy",
      body: [
        "This policy may be updated when services, providers, technologies or legal requirements change. The latest version will always be shown on this page.",
      ],
    },
  ],
};

export const legalContent: Record<Locale, { terms: LegalPageContent; privacy: LegalPageContent }> = {
  el: {
    terms: termsEl,
    privacy: privacyEl,
  },
  en: {
    terms: termsEn,
    privacy: privacyEn,
  },
};

export function getLegalContent(locale: Locale) {
  return legalContent[locale];
}
