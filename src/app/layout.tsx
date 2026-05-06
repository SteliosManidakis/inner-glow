import type { Metadata } from "next";
import { LangSync } from "@/components/layout/LangSync";
import { getSiteUrl, siteName } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Bilingual personal website for healing sessions, introductory calls and calm guidance with Inner Glow.",
  openGraph: {
    siteName,
    type: "website",
    images: [{ url: "/images/placeholders/hero.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/placeholders/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <LangSync />
        {children}
      </body>
    </html>
  );
}
