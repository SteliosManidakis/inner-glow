import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({ children, href, variant = "primary", external = false }: ButtonProps) {
  const baseClass =
    "inline-flex min-h-12 max-w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold uppercase leading-tight tracking-[0.08em] transition focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 sm:w-auto";
  const className =
    variant === "primary"
      ? `${baseClass} bg-olive text-ivory hover:bg-charcoal`
      : `${baseClass} border border-olive/40 text-olive hover:border-olive hover:bg-sage/20`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
