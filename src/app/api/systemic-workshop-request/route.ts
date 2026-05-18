import { NextResponse } from "next/server";

const BREVO_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

type SystemicWorkshopPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  participationType?: unknown;
  privacyAccepted?: unknown;
};

const participationLabels: Record<string, string> = {
  simple: "Απλή συμμετοχή - 60€",
  with_request: "Συμμετοχή με αίτημα - 85€",
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as SystemicWorkshopPayload;
  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const participationType = clean(payload.participationType);
  const participationLabel = participationLabels[participationType];
  const privacyAccepted = payload.privacyAccepted === true;

  if (
    !name ||
    !phone ||
    !participationLabel ||
    !privacyAccepted ||
    (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
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
    "Εργαστήριο: 31/5/2026, 10:30-20:00",
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
    <p><strong>Εργαστήριο:</strong> 31/5/2026, 10:30-20:00</p>
  `;

  const response = await fetch(BREVO_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: senderName,
      },
      to: [{ email: toEmail, name: "Inner Glow" }],
      ...(email ? { replyTo: { email, name } } : {}),
      subject: `${title} - ${participationLabel} - ${name}`,
      textContent,
      htmlContent,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Systemic workshop email failed" }, { status: response.status });
  }

  return NextResponse.json({ ok: true });
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
