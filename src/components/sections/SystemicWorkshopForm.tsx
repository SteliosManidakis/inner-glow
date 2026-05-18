"use client";

import { FormEvent, useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

type WorkshopFormCopy = {
  title: string;
  body: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  participationLabel: string;
  simpleParticipation: string;
  requestParticipation: string;
  privacy: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function SystemicWorkshopForm({ copy }: { copy: WorkshopFormCopy }) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/systemic-workshop-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        participationType: formData.get("participationType"),
        privacyAccepted: formData.get("privacyAccepted") === "on",
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    trackAnalyticsEvent("systemic_workshop_signup", {
      service: "systemicConstellation",
      participation_type: String(formData.get("participationType") ?? ""),
    });
    setStatus("success");
  }

  const disabled = status === "submitting";

  return (
    <form
      className="mx-auto max-w-2xl rounded-lg border-l-4 border-[var(--systemic-green)] bg-[var(--systemic-cream)] p-5 shadow-[0_18px_45px_rgba(41,37,31,0.12)] sm:p-8"
      id="signup-form"
      onSubmit={handleSubmit}
    >
      <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
        {copy.title}
      </h2>
      <p className="mt-3 text-base leading-7 text-charcoal/72">{copy.body}</p>

      <div className="mt-7 grid gap-5">
        <Field
          label={copy.nameLabel}
          name="name"
          placeholder={copy.namePlaceholder}
          required
        />
        <Field
          label={copy.phoneLabel}
          name="phone"
          placeholder={copy.phonePlaceholder}
          required
          type="tel"
        />
        <Field
          label={copy.emailLabel}
          name="email"
          placeholder={copy.emailPlaceholder}
          type="email"
        />

        <fieldset className="grid gap-3">
          <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">
            {copy.participationLabel}
          </legend>
          <label className="flex min-h-12 items-center gap-3 rounded-lg border border-olive/20 bg-white px-4 text-base text-charcoal">
            <input
              className="h-4 w-4 accent-[var(--systemic-orange)]"
              defaultChecked
              name="participationType"
              type="radio"
              value="simple"
            />
            <span>{copy.simpleParticipation}</span>
          </label>
          <label className="flex min-h-12 items-center gap-3 rounded-lg border border-olive/20 bg-white px-4 text-base text-charcoal">
            <input
              className="h-4 w-4 accent-[var(--systemic-orange)]"
              name="participationType"
              type="radio"
              value="with_request"
            />
            <span>{copy.requestParticipation}</span>
          </label>
        </fieldset>

        <label className="flex gap-3 text-sm leading-6 text-charcoal/70">
          <input
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--systemic-orange)]"
            name="privacyAccepted"
            required
            type="checkbox"
          />
          <span>{copy.privacy}</span>
        </label>

        <button
          className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--systemic-orange)] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_25px_rgba(255,107,53,0.28)] transition hover:scale-[1.02] hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={disabled}
          type="submit"
        >
          {disabled ? copy.submitting : copy.submit}
        </button>

        {status === "success" ? (
          <p className="text-sm font-semibold leading-6 text-[var(--systemic-green)]">
            {copy.success}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-semibold leading-6 text-red-900">{copy.error}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">
        {label}
      </span>
      <input
        className="min-h-13 rounded-lg border border-olive/20 bg-white px-4 text-base text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-[var(--systemic-green)] focus:ring-2 focus:ring-[var(--systemic-green)]/20"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
