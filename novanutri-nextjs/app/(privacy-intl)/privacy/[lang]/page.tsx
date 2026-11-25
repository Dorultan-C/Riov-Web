import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyPolicyView from "@/components/PrivacyPolicyView";
import {
  TRANSLATED_LANGS,
  getPrivacyLocale,
  privacyAlternates,
  privacyHref,
  type TranslatedLang,
} from "@/content/privacy-helpers";
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
  const locale = getPrivacyLocale(lang);
  if (!locale || !(TRANSLATED_LANGS as readonly string[]).includes(lang)) {
    return {};
  }
  return pageMetadata({
    title: `${locale.title} | Riov`,
    description: locale.policyTitle,
    path: privacyHref(locale),
    lang: locale.htmlLang,
    languages: privacyAlternates(),
  });
}

export default async function PrivacyLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(TRANSLATED_LANGS as readonly string[]).includes(lang)) {
    notFound();
  }
  const locale = getPrivacyLocale(lang as TranslatedLang);
  if (!locale) notFound();
  return <PrivacyPolicyView locale={locale} />;
}
