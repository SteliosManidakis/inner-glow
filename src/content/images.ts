// EDIT SITE IMAGES HERE
// Άλλαξε εδώ τις βασικές εικόνες του site.
// Τα αρχεία πρέπει να βρίσκονται μέσα στο public/images.
// Στον κώδικα τα γράφουμε χωρίς το public, π.χ. "/images/homepage.jpeg".

export const siteImages = {
  homeHero: "/images/homepage.jpeg",
  aboutHero: "/images/placeholders/about.png",
  socialShare: "/images/placeholders/hero.png",

  logos: {
    header: "/images/full_green_logo.png",
    footer: "/images/small_logo_cropped.png",
  },

  treatments: {
    reiki: "/images/reikipage.jpeg",
    eft: "/images/tappingpage.jpeg",
    regressionHypnosis: "/images/hypnosispage.jpeg",
    systemicConstellation: "/images/hypnosispage.jpeg",
    nlpCoaching: "/images/nlppage.jpeg",
    meditations: "/images/placeholders/healing.png",
  },

  coordinators: {
    reiki: "/images/crystals.png",
    eft: "/images/placeholders/about.png",
    regressionHypnosis: "/images/valsamos.png",
    systemicConstellation: "/images/kanaris.png",
    nlpCoaching: "/images/placeholders/about.png",
    meditations: "/images/placeholders/about.png",
  },
} as const;
