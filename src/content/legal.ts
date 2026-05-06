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

export const legalContent: Record<Locale, { terms: LegalPageContent; privacy: LegalPageContent }> = {
  el: {
    terms: {
      intro:
        "Οι παρόντες όροι περιγράφουν τη χρήση του website και των υπηρεσιών που παρέχονται από τη Μαργαρίτα Πασχάλη.",
      lastUpdated: "Τελευταία ενημέρωση: 5 Μαΐου 2026",
      note:
        "Το κείμενο είναι πρακτικό draft για το website και δεν αποτελεί νομική συμβουλή. Πριν από επίσημο launch, συνιστάται έλεγχος από νομικό σύμβουλο.",
      sections: [
        {
          title: "1. Ποιοι είμαστε",
          body: [
            "Το website ανήκει στο προσωπικό brand Μαργαρίτα Πασχάλη. Για οποιαδήποτε ερώτηση σχετικά με το website ή τις υπηρεσίες, μπορείς να επικοινωνήσεις στο margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "2. Βασικοί όροι",
          body: [
            "Οι λέξεις «εμείς», «μας» ή «η Μαργαρίτα» αναφέρονται στη Μαργαρίτα Πασχάλη.",
            "Οι λέξεις «εσύ», «σου» ή «πελάτης» αναφέρονται στο άτομο που χρησιμοποιεί το website, εγγράφεται στο newsletter ή κλείνει discovery call ή συνεδρία.",
          ],
        },
        {
          title: "3. Χρήση του website",
          body: [
            "Το περιεχόμενο του website παρέχεται για ενημερωτικούς σκοπούς και για την παρουσίαση των υπηρεσιών της Μαργαρίτας Πασχάλη.",
            "Δεν επιτρέπεται η χρήση του website με τρόπο παράνομο, παραπλανητικό, επιβλαβή ή που παρεμβαίνει στη λειτουργία του.",
          ],
        },
        {
          title: "4. Υπηρεσίες και διαθεσιμότητα",
          body: [
            "Οι υπηρεσίες αφορούν ατομικές συνεδρίες healing και discovery calls. Για πελάτες στο εξωτερικό, οι συνεδρίες παρέχονται μόνο online. Για πελάτες στην Ελλάδα, οι συνεδρίες μπορούν να γίνουν online ή δια ζώσης, κατόπιν συνεννόησης.",
            "Η διαθεσιμότητα, η διάρκεια και ο τρόπος διεξαγωγής των συνεδριών μπορεί να αλλάζουν και επιβεβαιώνονται κατά τη διαδικασία booking.",
          ],
        },
        {
          title: "5. Booking, τιμή και ακυρώσεις",
          body: [
            "Η ενδεικτική τιμή για συνεδρία healing είναι 100 ευρώ ανά συνεδρία, εκτός αν συμφωνηθεί διαφορετικά.",
            "Το booking γίνεται μέσω Cal.com, όπου μπορείς να επιλέξεις διαθέσιμη ημερομηνία και ώρα. Μετά την κράτηση θα λάβεις email επιβεβαίωσης από την πλατφόρμα ή/και από τη Μαργαρίτα.",
            "Σε αυτό το στάδιο δεν πραγματοποιείται online πληρωμή μέσω του website.",
            "Ακύρωση ή αλλαγή ραντεβού μπορεί να γίνει έως 24 ώρες πριν από την προγραμματισμένη ώρα. Για ακυρώσεις σε μικρότερο διάστημα, ενδέχεται να χρειαστεί νέα συνεννόηση για επαναπρογραμματισμό.",
          ],
        },
        {
          title: "6. Καθυστερήσεις και μη εμφάνιση",
          body: [
            "Για online συνεδρίες, συνιστάται να συνδεθείς λίγα λεπτά πριν από την προγραμματισμένη ώρα. Για δια ζώσης συνεδρίες, συνιστάται να προσέλθεις στην ώρα σου.",
            "Αν καθυστερήσεις, η διάρκεια της συνεδρίας μπορεί να μειωθεί ώστε να μην επηρεαστούν επόμενα ραντεβού. Αν δεν εμφανιστείς χωρίς ενημέρωση, η συνεδρία μπορεί να θεωρηθεί ολοκληρωμένη ή να χρειαστεί νέα συνεννόηση.",
          ],
        },
        {
          title: "7. Πληροφορίες υγείας και προσωπική ευθύνη",
          body: [
            "Αν υπάρχει κατάσταση υγείας, εγκυμοσύνη, φαρμακευτική αγωγή ή άλλο θέμα που θεωρείς σχετικό με τη συνεδρία, παρακαλείσαι να το αναφέρεις πριν ή κατά τη διαδικασία booking, όπου ζητείται.",
            "Η παροχή ακριβών πληροφοριών βοηθά ώστε η συνεδρία να οργανωθεί με υπευθυνότητα. Η μη γνωστοποίηση σημαντικών πληροφοριών μπορεί να επηρεάσει την καταλληλότητα ή τον τρόπο διεξαγωγής της συνεδρίας.",
          ],
        },
        {
          title: "8. Συμπεριφορά και δικαίωμα άρνησης υπηρεσίας",
          body: [
            "Κατά τη διάρκεια της συνεδρίας ζητείται σεβασμός, συνέπεια και αποφυγή παρεμβολών, ώστε να διατηρείται ασφαλές και ήρεμο πλαίσιο.",
            "Η Μαργαρίτα διατηρεί το δικαίωμα να αρνηθεί ή να διακόψει συνεδρία σε περίπτωση επιθετικής, προσβλητικής, ανάρμοστης, σεξουαλικής, απειλητικής ή άλλης συμπεριφοράς που παραβιάζει το ασφαλές πλαίσιο συνεργασίας.",
          ],
        },
        {
          title: "9. Όχι ιατρική ή ψυχολογική συμβουλή",
          body: [
            "Οι υπηρεσίες και το περιεχόμενο του website δεν αποτελούν ιατρική, ψυχολογική, ψυχιατρική ή άλλη επαγγελματική διάγνωση, θεραπεία ή συμβουλή.",
            "Αν αντιμετωπίζεις επείγον ή σοβαρό θέμα υγείας, πρέπει να απευθυνθείς σε κατάλληλο επαγγελματία υγείας ή στις αρμόδιες υπηρεσίες έκτακτης ανάγκης.",
          ],
        },
        {
          title: "10. Feedback",
          body: [
            "Για σχόλια, ερωτήσεις ή αιτήματα σχετικά με εμπειρία συνεδρίας ή χρήση του website, μπορείς να επικοινωνήσεις στο margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "11. Πνευματική ιδιοκτησία",
          body: [
            "Τα κείμενα, η δομή, το design και το οπτικό υλικό του website προστατεύονται από δικαιώματα πνευματικής ιδιοκτησίας, εκτός αν αναφέρεται διαφορετικά.",
            "Δεν επιτρέπεται η αντιγραφή, αναδημοσίευση ή εμπορική χρήση περιεχομένου χωρίς προηγούμενη γραπτή άδεια.",
          ],
        },
        {
          title: "12. Περιορισμός ευθύνης",
          body: [
            "Καταβάλλεται προσπάθεια ώστε οι πληροφορίες του website να είναι ακριβείς και ενημερωμένες, όμως δεν παρέχεται εγγύηση ότι το περιεχόμενο είναι πάντα πλήρες, αδιάλειπτο ή χωρίς σφάλματα.",
            "Η χρήση του website και η απόφαση συμμετοχής σε υπηρεσίες γίνεται με προσωπική ευθύνη του χρήστη.",
          ],
        },
        {
          title: "13. Εφαρμοστέο δίκαιο",
          body: [
            "Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Για οποιαδήποτε διαφορά, τα αρμόδια δικαστήρια θα καθορίζονται σύμφωνα με την ισχύουσα ελληνική νομοθεσία.",
          ],
        },
      ],
    },
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
    terms: {
      intro:
        "These terms describe the use of this website and the services offered by Margarita Paschali.",
      lastUpdated: "Last updated: May 5, 2026",
      note:
        "This is a practical website draft and does not constitute legal advice. Before official launch, review by a qualified legal professional is recommended.",
      sections: [
        {
          title: "1. Who we are",
          body: [
            "This website belongs to the personal brand Margarita Paschali. For questions about the website or services, contact margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "2. Key terms",
          body: [
            "The words “we”, “us”, “our” or “Margarita” refer to Margarita Paschali.",
            "The words “you”, “your” or “client” refer to the person using the website, subscribing to the newsletter, or booking a discovery call or session.",
          ],
        },
        {
          title: "3. Website use",
          body: [
            "The website content is provided for informational purposes and to present Margarita Paschali's services.",
            "You may not use the website in an unlawful, misleading, harmful way or in a way that interferes with its operation.",
          ],
        },
        {
          title: "4. Services and availability",
          body: [
            "Services include individual healing sessions and discovery calls. For clients outside Greece, sessions are provided online only. For clients in Greece, sessions may take place online or in person by agreement.",
            "Availability, duration and session format may change and are confirmed during the booking process.",
          ],
        },
        {
          title: "5. Booking, price and cancellations",
          body: [
            "The indicative price for a healing session is EUR 100 per session, unless otherwise agreed.",
            "Bookings are handled through Cal.com, where you can choose an available date and time. After booking, you will receive a confirmation email from the platform and/or Margarita.",
            "At this stage, no online payment is processed through the website.",
            "Cancellations or rescheduling may be made up to 24 hours before the scheduled time. For shorter notice cancellations, rescheduling may require further agreement.",
          ],
        },
        {
          title: "6. Late arrivals and no-shows",
          body: [
            "For online sessions, you are encouraged to join a few minutes before the scheduled time. For in-person sessions, you are encouraged to arrive on time.",
            "If you are late, the session time may be reduced so that later appointments are not affected. If you do not attend without notice, the session may be treated as completed or rescheduling may require further agreement.",
          ],
        },
        {
          title: "7. Health information and personal responsibility",
          body: [
            "If you have a health condition, are pregnant, take medication or have any other matter you consider relevant to the session, you are encouraged to disclose this before or during the booking process where requested.",
            "Providing accurate information helps the session be arranged responsibly. Failure to disclose important information may affect the suitability or format of the session.",
          ],
        },
        {
          title: "8. Conduct and right to refuse service",
          body: [
            "During a session, respectful conduct, punctuality and avoidance of interruptions are requested so that a safe and calm setting can be maintained.",
            "Margarita reserves the right to refuse or end a session in the event of aggressive, abusive, inappropriate, sexual, threatening or other conduct that violates the safe working setting.",
          ],
        },
        {
          title: "9. No medical or psychological advice",
          body: [
            "The services and website content do not constitute medical, psychological, psychiatric or other professional diagnosis, treatment or advice.",
            "If you are facing an urgent or serious health issue, you should contact an appropriate health professional or emergency service.",
          ],
        },
        {
          title: "10. Feedback",
          body: [
            "For feedback, questions or requests about a session experience or website use, you may contact margaritapaschali@gmail.com.",
          ],
        },
        {
          title: "11. Intellectual property",
          body: [
            "The text, structure, design and visual material of the website are protected by intellectual property rights unless stated otherwise.",
            "Copying, republication or commercial use of content is not permitted without prior written permission.",
          ],
        },
        {
          title: "12. Limitation of liability",
          body: [
            "We aim to keep website information accurate and updated, but no guarantee is given that content will always be complete, uninterrupted or error-free.",
            "Use of the website and the decision to participate in services remain the user's responsibility.",
          ],
        },
        {
          title: "13. Governing law",
          body: [
            "These terms are governed by Greek law. Any dispute will be handled by the competent courts as determined under applicable Greek legislation.",
          ],
        },
      ],
    },
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
            "Approximate country information from the website request, provided by the hosting platform, may be used to display location-based pricing. This country information is used to show the price and is not stored by the website.",
            "The website is hosted on Vercel, which may process technical data necessary for website operation, security and performance.",
          ],
        },
        {
          title: "3. Purposes and legal basis",
          body: [
            "We use newsletter details to send updates, news or related content. The legal basis is your consent.",
            "We use booking data to arrange discovery calls and sessions. The legal basis is taking steps before a possible service or performing an agreement.",
            "We use approximate country information to display location-based pricing. The legal basis is legitimate interest in presenting relevant pricing information to visitors.",
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
            "If you subscribe to the newsletter, you may receive updates, news or invitations related to Margarita's work.",
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
