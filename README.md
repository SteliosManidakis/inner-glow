# Margarita Paschali Website

Bilingual static website for the personal brand Margarita Paschali.

Built with Next.js App Router, static localized routes, Cal.com booking links, Brevo newsletter subscription, SEO metadata, sitemap, robots, and legal pages.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel deployment
- Cal.com booking
- Brevo newsletter contacts

## Local Development

Install dependencies:

```bash
npm install
```

Create a local env file:

```bash
cp .env.example .env.local
```

Fill `.env.local` with the real Brevo API key.

Run the dev server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000/el
```

If port 3000 is busy:

```bash
npm run dev -- --port 3001
```

## Routes

Default route:

```txt
/ -> /el
```

Localized pages:

```txt
/el
/el/about
/el/healing
/el/contact
/el/terms
/el/privacy

/en
/en/about
/en/healing
/en/contact
/en/terms
/en/privacy
```

Generated SEO endpoints:

```txt
/sitemap.xml
/robots.txt
```

## Content

Main translated content lives in:

```txt
src/content/dictionaries.ts
```

Legal content lives in:

```txt
src/content/legal.ts
```

SEO copy lives in:

```txt
src/lib/seo.ts
```

Booking URLs live in:

```txt
src/lib/booking.ts
```

## Environment Variables

Required in Vercel:

```txt
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CAL_DISCOVERY_URL
NEXT_PUBLIC_CAL_HEALING_URL
BREVO_API_KEY
BREVO_LIST_ID
```

`BREVO_API_KEY` is secret and must never be committed.

`.env.local` is ignored by git. `.env.example` is committed as documentation.

## Booking

Booking links currently point to:

```txt
https://cal.eu/margarita-paschali/discovery-call
https://cal.eu/margarita-paschali/healing-appointment
```

Durations, availability, buffers, meeting location, and booking questions are managed inside Cal.com and can change without code changes.

## Location-based Pricing

Healing page pricing is selected server-side from the visitor's estimated country on Vercel.

Pricing config lives in:

```txt
src/content/pricing.ts
```

Current rules:

```txt
Greece: 50 EUR
United States: 90 USD
United Kingdom: 80 GBP
European Union except Greece: 60 EUR
Rest of world: 80 USD
```

The website does not store the visitor's country or IP. It only uses the request country header to choose which price to render.

## Newsletter

The footer subscribe form sends:

```txt
firstName
lastName
email
```

The API route is:

```txt
src/app/api/subscribe/route.ts
```

Contacts are created/updated in Brevo using:

```txt
POST /v3/contacts
```

with attributes:

```txt
FIRSTNAME
LASTNAME
```

## Verification

Run before pushing:

```bash
npm run lint
npm run build
```

## Deployment

The project is deployed on Vercel from GitHub.

After changing environment variables in Vercel, trigger a redeploy.

If a custom domain is added later, update:

```txt
NEXT_PUBLIC_SITE_URL
```

then redeploy so canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` use the final domain.

## Pre-launch Checklist

- Replace placeholder copy with final brand copy.
- Replace placeholder generated images with final photography/brand assets.
- Review Terms and Privacy with a legal professional.
- Add a branded favicon and dedicated Open Graph image.
- Add analytics only if needed. If analytics or marketing cookies are added, add cookie consent before enabling them.
