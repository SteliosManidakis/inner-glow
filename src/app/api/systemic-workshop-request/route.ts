import { NextResponse } from "next/server";

const BREVO_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const WORKSHOP_DETAILS = "4/7/2026, 11:00-20:30";
const CONSENT_TEXT =
  "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για επικοινωνία σχετικά με τη δήλωση συμμετοχής.";

type SystemicWorkshopPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  locale?: unknown;
  participationType?: unknown;
  privacyAccepted?: unknown;
};

const participationLabels = {
  el: {
    simple: "Απλή συμμετοχή - 60€",
    with_request: "Συμμετοχή με αίτημα - 85€",
  },
  en: {
    simple: "Simple participation - 60€",
    with_request: "Participation with request - 85€",
  },
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as SystemicWorkshopPayload;
  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const locale = clean(payload.locale) === "en" ? "en" : "el";
  const participationType = clean(payload.participationType);
  const participationLabel = participationLabels[locale][participationType as "simple" | "with_request"];
  const privacyAccepted = payload.privacyAccepted === true;

  if (
    !name ||
    !phone ||
    !email ||
    !participationLabel ||
    !privacyAccepted ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Invalid systemic workshop request" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? toEmail;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Inner Glow";

  if (!apiKey || !toEmail || !senderEmail) {
    return NextResponse.json({ error: "Contact email is not configured" }, { status: 501 });
  }

  const submittedAt = new Intl.DateTimeFormat("el-GR", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Europe/Athens",
  }).format(new Date());
  const title = "Νέα δήλωση συμμετοχής - Συστημική Αναπαράσταση";
  const preheader = `${title} από ${name}`;
  const textContent = [
    title,
    "",
    `Όνομα: ${name}`,
    `Τηλέφωνο: ${phone}`,
    `Email: ${email || "-"}`,
    `Τύπος συμμετοχής: ${participationLabel}`,
    "",
    `Εργαστήριο: ${WORKSHOP_DETAILS}`,
    "",
    "Συναίνεση επικοινωνίας: Ναι",
    `Χρόνος δήλωσης: ${submittedAt}`,
    `Κείμενο συναίνεσης: ${CONSENT_TEXT}`,
  ].join("\n");
  const htmlContent = `
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
      ${escapeHtml(preheader)}
    </div>
    <h2>${escapeHtml(title)}</h2>
    <p><strong>Όνομα:</strong> ${escapeHtml(name)}</p>
    <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
    <p><strong>Τύπος συμμετοχής:</strong> ${escapeHtml(participationLabel)}</p>
    <p><strong>Εργαστήριο:</strong> ${escapeHtml(WORKSHOP_DETAILS)}</p>
    <hr />
    <p><strong>Συναίνεση επικοινωνίας:</strong> Ναι</p>
    <p><strong>Χρόνος δήλωσης:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Κείμενο συναίνεσης:</strong> ${escapeHtml(CONSENT_TEXT)}</p>
  `;

  const response = await sendBrevoEmail(apiKey, {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [{ email: toEmail, name: "Inner Glow" }],
    ...(email ? { replyTo: { email, name } } : {}),
    subject: `${title} - ${participationLabel} - ${name}`,
    textContent,
    htmlContent,
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Systemic workshop email failed" }, { status: response.status });
  }

  const confirmation = getConfirmationEmail({
    locale,
    name,
    participationLabel,
  });
  const confirmationResponse = await sendBrevoEmail(apiKey, {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [{ email, name }],
    replyTo: { email: toEmail, name: "Inner Glow" },
    subject: confirmation.subject,
    textContent: confirmation.textContent,
    htmlContent: confirmation.htmlContent,
  });

  if (!confirmationResponse.ok) {
    console.error("Systemic workshop confirmation email failed", confirmationResponse.status);
  }

  return NextResponse.json({ ok: true });
}

function sendBrevoEmail(apiKey: string, body: unknown) {
  return fetch(BREVO_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });
}

function getConfirmationEmail({
  locale,
  name,
  participationLabel,
}: {
  locale: "el" | "en";
  name: string;
  participationLabel: string;
}) {
  if (locale === "en") {
    const subject = "We received your registration for the Systemic Constellation workshop";
    const textContent = [
      `Hello ${name},`,
      "",
      "Thank you for your interest. We have received your registration for the Systemic Constellation workshop.",
      "",
      "Registration details:",
      `Workshop: ${WORKSHOP_DETAILS}`,
      `Participation type: ${participationLabel}`,
      "",
      "We will contact you soon for final confirmation and practical details.",
      "",
      "Inner Glow",
      "info@inner-glow.gr",
    ].join("\n");
    const htmlContent = `
      <h2>${escapeHtml(subject)}</h2>
      <p>Hello ${escapeHtml(name)},</p>
      <p>Thank you for your interest. We have received your registration for the Systemic Constellation workshop.</p>
      <p><strong>Workshop:</strong> ${escapeHtml(WORKSHOP_DETAILS)}</p>
      <p><strong>Participation type:</strong> ${escapeHtml(participationLabel)}</p>
      <p>We will contact you soon for final confirmation and practical details.</p>
      <p>Inner Glow<br />info@inner-glow.gr</p>
    `;

    return { subject, textContent, htmlContent };
  }

  const subject = "Λάβαμε τη δήλωσή σας για τη Συστημική Αναπαράσταση";
  const textContent = [
    `Γεια σας ${name},`,
    "",
    "Ευχαριστούμε για το ενδιαφέρον σας. Λάβαμε τη δήλωσή σας για το εργαστήριο Συστημικής Αναπαράστασης.",
    "",
    "Στοιχεία δήλωσης:",
    `Εργαστήριο: ${WORKSHOP_DETAILS}`,
    `Τύπος συμμετοχής: ${participationLabel}`,
    "",
    "Θα επικοινωνήσουμε μαζί σας σύντομα για την τελική επιβεβαίωση και τις πρακτικές λεπτομέρειες.",
    "",
    "Inner Glow",
    "info@inner-glow.gr",
  ].join("\n");
  const htmlContent = `
    <h2>${escapeHtml(subject)}</h2>
    <p>Γεια σας ${escapeHtml(name)},</p>
    <p>Ευχαριστούμε για το ενδιαφέρον σας. Λάβαμε τη δήλωσή σας για το εργαστήριο Συστημικής Αναπαράστασης.</p>
    <p><strong>Εργαστήριο:</strong> ${escapeHtml(WORKSHOP_DETAILS)}</p>
    <p><strong>Τύπος συμμετοχής:</strong> ${escapeHtml(participationLabel)}</p>
    <p>Θα επικοινωνήσουμε μαζί σας σύντομα για την τελική επιβεβαίωση και τις πρακτικές λεπτομέρειες.</p>
    <p>Inner Glow<br />info@inner-glow.gr</p>
  `;

  return { subject, textContent, htmlContent };
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
