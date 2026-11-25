import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TermsView from "@/components/TermsView";
import {
  TRANSLATED_LANGS,
  getTermsLocale,
  termsAlternates,
  termsHref,
  type TranslatedLang,
} from "@/content/terms-helpers";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = getTermsLocale(lang);
  if (!locale || !(TRANSLATED_LANGS as readonly string[]).includes(lang)) {
    return {};
  }
  return pageMetadata({
    title: `${locale.title} | Riov`,
    description: locale.termsTitle,
    path: termsHref(locale),
    lang: locale.htmlLang,
    languages: termsAlternates(),
  });
}

export default async function TermsLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(TRANSLATED_LANGS as readonly string[]).includes(lang)) {
    notFound();
  }
  const locale = getTermsLocale(lang as TranslatedLang);
  if (!locale) notFound();
  return <TermsView locale={locale} />;
}
