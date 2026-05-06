export const siteName = "Inner Glow";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://margarita-paschali.vercel.app").replace(
    /\/$/,
    "",
  );
}
