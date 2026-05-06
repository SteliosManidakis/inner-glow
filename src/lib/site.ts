export const siteName = "Margarita Paschali";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://margarita-paschali.vercel.app").replace(
    /\/$/,
    "",
  );
}
