import { NextResponse } from "next/server";

const BREVO_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

type ContactRequestPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as ContactRequestPayload;
  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);

  if (!firstName || !lastName || !email || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid contact request" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? toEmail;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Inner Glow";

  if (!apiKey || !toEmail || !senderEmail) {
    return NextResponse.json({ error: "Contact email is not configured" }, { status: 501 });
  }

  const fullName = `${firstName} ${lastName}`;
  const textContent = [
    "Νέο αίτημα για ραντεβού γνωριμίας",
    "",
    `Όνομα: ${fullName}`,
    `Email: ${email}`,
    `Κινητό: ${phone}`,
    "",
    "Μήνυμα:",
    message || "-",
  ].join("\n");

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
      replyTo: { email, name: fullName },
      subject: `Νέο αίτημα ραντεβού γνωριμίας - ${fullName}`,
      textContent,
      htmlContent: `
        <h2>Νέο αίτημα για ραντεβού γνωριμίας</h2>
        <p><strong>Όνομα:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Κινητό:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${escapeHtml(message || "-").replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Contact email failed" }, { status: response.status });
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
