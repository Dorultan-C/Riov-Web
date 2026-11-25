import type { Metadata } from "next";
import type { SiteMessages } from "@/content/site";
import { SITE_LANGS, type SiteLang } from "@/lib/i18n/locales";
import { SITE_ORIGIN } from "@/lib/privacy";

export { SITE_ORIGIN };

/**
 * Countries with their own supermarket shop prices.
 * Source: SUPPORTED_MARKETS in the Riov app (EU-27 and the United Kingdom).
 * Names match the English labels in that repo's country list.
 */
export const SHOP_PRICE_COUNTRIES = [
  { code: "AT", name: "Austria" },
  { code: "BE", name: "Belgium" },
  { code: "BG", name: "Bulgaria" },
  { code: "HR", name: "Croatia" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "EE", name: "Estonia" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "GR", name: "Greece" },
  { code: "HU", name: "Hungary" },
  { code: "IE", name: "Ireland" },
  { code: "IT", name: "Italy" },
  { code: "LV", name: "Latvia" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MT", name: "Malta" },
  { code: "NL", name: "Netherlands" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "RO", name: "Romania" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "ES", name: "Spain" },
  { code: "SE", name: "Sweden" },
  { code: "GB", name: "United Kingdom" },
] as const;

/** United States price screens, including the 50 states. */
export const US_PRICE_COUNTRY = { code: "US", name: "United States" } as const;

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/riov-mediterranean-meal-plan/id6770679057";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.riov.app";

export const OG_IMAGE_PATH = "/logo.png";
export const OG_IMAGE_WIDTH = 1004;
export const OG_IMAGE_HEIGHT = 1002;

const OG_LOCALE: Record<SiteLang, string> = {
  en: "en_US",
  es: "es_ES",
  ca: "ca_ES",
  fr: "fr_FR",
  it: "it_IT",
  ro: "ro_RO",
  da: "da_DK",
};

/** Confirmed product facts for SoftwareApplication.featureList. English, not marketing claims. */
const FEATURE_LIST = [
  "Mediterranean meal plans from 1 to 31 days",
  "Diet types: Mediterranean, standard, pescatarian, vegetarian and vegan",
  "Daily calorie target on custom plans",
  "Recipe library with nutrition, allergens, estimated cost, equipment, prep time and servings",
  "Ratings, reviews and review photos",
  "AI food photo scanner and daily nutrition diary",
  "Shopping list generated from the meal plan",
  "Real supermarket prices in Europe and the United States",
  "PDF and text export of the plan and shopping list",
  "Metric and US customary units",
  "English, Spanish, Catalan, French, Italian, Romanian and Danish",
  "Allergy and disliked-ingredient filters",
  "Cooking mode with step-by-step instructions",
  "Favourites and recipes you submit",
  "iOS and Android",
];

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  lang = "en",
  languages,
  imageAlt = "Riov",
}: {
  title: string;
  description: string;
  path: string;
  lang?: string;
  languages?: Record<string, string>;
  imageAlt?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const locale = (OG_LOCALE as Record<string, string>)[lang] ?? "en_US";
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title,
    description,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Riov",
      title,
      description,
      locale,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      site: "@RiovApp",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export function publicPagePaths(): { path: string; priority: number }[] {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/collaborations", priority: 0.7 },
    { path: "/license", priority: 0.3 },
    { path: "/privacy", priority: 0.4 },
    { path: "/terms", priority: 0.4 },
    { path: "/llms.txt", priority: 0.5 },
    { path: "/llms-full.txt", priority: 0.4 },
  ];
  for (const lang of SITE_LANGS) {
    if (lang === "en") continue;
    pages.push({ path: `/privacy/${lang}`, priority: 0.3 });
    pages.push({ path: `/terms/${lang}`, priority: 0.3 });
  }
  return pages;
}

function areaServed() {
  return [
    { "@type": "Place", name: "Europe" },
    { "@type": "Country", name: US_PRICE_COUNTRY.name },
    ...SHOP_PRICE_COUNTRIES.map((country) => ({ "@type": "Country", name: country.name })),
  ];
}

export function structuredData(messages: SiteMessages, pathname: string) {
  const path = pathname.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  const description = messages.meta.description;
  const orgId = `${SITE_ORIGIN}/#organization`;
  const siteId = `${SITE_ORIGIN}/#website`;
  const appId = `${SITE_ORIGIN}/#app`;
  const served = areaServed();

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "Riov",
      url: SITE_ORIGIN,
      logo: absoluteUrl(OG_IMAGE_PATH),
      image: absoluteUrl(OG_IMAGE_PATH),
      email: "info@riov.app",
      description,
      areaServed: served,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sitges",
        addressRegion: "Barcelona",
        addressCountry: "ES",
      },
      founder: { "@type": "Person", name: "Cristian Dorultan" },
      sameAs: [
        "https://www.instagram.com/riov.app/",
        "https://www.youtube.com/@Riov-app",
        "https://x.com/RiovApp",
        "https://www.threads.com/@riov.app",
        "https://www.facebook.com/profile.php?id=61589291707380",
        "https://www.tiktok.com/@riov.app",
        APP_STORE_URL,
        PLAY_STORE_URL,
      ],
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      name: "Riov",
      url: SITE_ORIGIN,
      description,
      inLanguage: [...SITE_LANGS],
      publisher: { "@id": orgId },
    },
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": appId,
      name: "Riov",
      url: SITE_ORIGIN,
      description,
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      inLanguage: [...SITE_LANGS],
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      installUrl: [APP_STORE_URL, PLAY_STORE_URL],
      featureList: FEATURE_LIST,
      areaServed: served,
      publisher: { "@id": orgId },
      image: absoluteUrl(OG_IMAGE_PATH),
    },
  ];

  if (path === "/") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_ORIGIN}/#faq`,
      url: `${SITE_ORIGIN}/#faq`,
      isPartOf: { "@id": siteId },
      mainEntity: messages.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
