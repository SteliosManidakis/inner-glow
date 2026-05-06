"use client";

import { useState } from "react";

type SubscribeCopy = {
  title: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  placeholder: string;
  button: string;
  success: string;
  error: string;
};

export function SubscribeForm({ copy }: { copy: SubscribeCopy }) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setMessage(null);
    const formData = new FormData(form);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
      }),
    });

    setLoading(false);
    setMessage(response.ok ? copy.success : copy.error);
    if (response.ok) form.reset();
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <p className="text-sm font-semibold uppercase leading-relaxed tracking-[0.1em] text-olive sm:tracking-[0.12em]">
        {copy.title}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="firstName">
          {copy.firstNameLabel}
        </label>
        <input
          className="min-h-12 rounded-full border border-olive/25 bg-ivory px-5 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-olive"
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder={copy.firstNamePlaceholder}
          required
        />
        <label className="sr-only" htmlFor="lastName">
          {copy.lastNameLabel}
        </label>
        <input
          className="min-h-12 rounded-full border border-olive/25 bg-ivory px-5 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-olive"
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="family-name"
          placeholder={copy.lastNamePlaceholder}
          required
        />
        <label className="sr-only" htmlFor="email">
          {copy.emailLabel}
        </label>
        <input
          className="min-h-12 rounded-full border border-olive/25 bg-ivory px-5 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-olive sm:col-span-2"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={copy.placeholder}
          required
        />
        <button
          className="min-h-12 rounded-full bg-olive px-6 text-sm font-semibold uppercase tracking-[0.08em] text-ivory transition hover:bg-charcoal disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
          disabled={loading}
          type="submit"
        >
          {copy.button}
        </button>
      </div>
      {message ? <p className="text-sm text-charcoal/70">{message}</p> : null}
    </form>
  );
}
