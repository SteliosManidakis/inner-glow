"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.startsWith("/en") ? "en" : "el";
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
