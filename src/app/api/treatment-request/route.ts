import { NextResponse } from "next/server";
import { dictionaries } from "@/content/dictionaries";
import { treatmentRoutes, type TreatmentRouteKey } from "@/lib/treatments";

const BREVO_EMAIL_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

type TreatmentRequestPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
};

const serviceLabels = new Map(
  treatmentRoutes.map((route) => [route.key, dictionaries.el.nav[route.key]]),
);

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as TreatmentRequestPayload;
  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const service = clean(payload.service);
  const message = clean(payload.message);
  const serviceLabel = isTreatmentRouteKey(service) ? serviceLabels.get(service) : undefined;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !serviceLabel ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Invalid treatment request" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? toEmail;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Inner Glow";

  if (!apiKey || !toEmail || !senderEmail) {
    return NextResponse.json({ error: "Contact email is not configured" }, { status: 501 });
  }

  const fullName = `${firstName} ${lastName}`;
  const title = "Νέο αίτημα θεραπείας";
  const preheader = `${title} - ${serviceLabel} από ${fullName}`;
  const textContent = [
    title,
    "",
    `Θεραπεία: ${serviceLabel}`,
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
      subject: `${title} - ${serviceLabel} - ${fullName}`,
      textContent,
      htmlContent: `
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
          ${escapeHtml(preheader)}
        </div>
        <h2>${escapeHtml(title)}</h2>
        <p><strong>Θεραπεία:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Όνομα:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Κινητό:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${escapeHtml(message || "-").replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Treatment request email failed" }, { status: response.status });
  }

  return NextResponse.json({ ok: true });
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isTreatmentRouteKey(value: string): value is TreatmentRouteKey {
  return treatmentRoutes.some((route) => route.key === value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
