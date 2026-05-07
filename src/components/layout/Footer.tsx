import Image from "next/image";
import Link from "next/link";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";
import { CookieSettingsButton } from "./CookieSettingsButton";

export function Footer({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal text-ivory">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl leading-tight">{dictionary.common.brand}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ivory/70">{dictionary.subscribe.body}</p>
          <Image
            src="/images/small_logo_cropped.png"
            alt=""
            width={96}
            height={96}
            className="mt-6 h-16 w-16 object-contain opacity-90"
          />
          <CookieSettingsButton dictionary={dictionary} />
        </div>
        <div className="[&_button]:bg-clay [&_button]:text-charcoal [&_button:hover]:bg-sage [&_input]:bg-ivory [&_input]:text-charcoal [&_p]:text-clay">
          <SubscribeForm copy={dictionary.subscribe} />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-ivory/10 px-5 py-6 text-sm text-ivory/65 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>{"\u00A9"} {new Date().getFullYear()} {dictionary.common.brand}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link className="inline-flex min-h-10 items-center" href={localizedPath(locale, "terms")}>
            {dictionary.nav.terms}
          </Link>
          <Link className="inline-flex min-h-10 items-center" href={localizedPath(locale, "privacy")}>
            {dictionary.nav.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
