"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { treatmentRoutes, type TreatmentRouteKey } from "@/lib/treatments";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function TreatmentRequestForm({
  dictionary,
  defaultService,
}: {
  dictionary: Dictionary;
  defaultService?: TreatmentRouteKey;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/treatment-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
      }),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  const disabled = status === "submitting";

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={dictionary.contactRequest.firstNameLabel}
          name="firstName"
          placeholder={dictionary.contactRequest.firstNamePlaceholder}
          required
        />
        <Field
          label={dictionary.contactRequest.lastNameLabel}
          name="lastName"
          placeholder={dictionary.contactRequest.lastNamePlaceholder}
          required
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={dictionary.contactRequest.emailLabel}
          name="email"
          placeholder={dictionary.contactRequest.emailPlaceholder}
          required
          type="email"
        />
        <Field
          label={dictionary.contactRequest.phoneLabel}
          name="phone"
          placeholder={dictionary.contactRequest.phonePlaceholder}
          required
          type="tel"
        />
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">
          {dictionary.treatmentRequest.serviceLabel}
        </span>
        <select
          className="min-h-12 rounded-lg border border-olive/20 bg-ivory px-4 text-base text-charcoal outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
          defaultValue={defaultService ?? ""}
          name="service"
          required
        >
          <option disabled value="">
            {dictionary.treatmentRequest.servicePlaceholder}
          </option>
          {treatmentRoutes.map((route) => (
            <option key={route.key} value={route.key}>
              {dictionary.nav[route.key]}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-olive">
          {dictionary.contactRequest.messageLabel}
        </span>
        <textarea
          className="min-h-36 rounded-lg border border-olive/20 bg-ivory px-4 py-3 text-base leading-7 text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-olive focus:ring-2 focus:ring-olive/20"
          name="message"
          placeholder={dictionary.contactRequest.messagePlaceholder}
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-olive px-6 py-3 text-center text-sm font-semibold uppercase leading-tight tracking-[0.08em] text-ivory transition hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          disabled={disabled}
          type="submit"
        >
          {disabled ? dictionary.treatmentRequest.submitting : dictionary.common.submit}
        </button>
        {status === "success" ? (
          <p className="text-sm leading-6 text-olive">{dictionary.treatmentRequest.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm leading-6 text-red-900">{dictionary.treatmentRequest.error}</p>
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
        className="min-h-12 rounded-lg border border-olive/20 bg-ivory px-4 text-base text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-olive focus:ring-2 focus:ring-olive/20"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
