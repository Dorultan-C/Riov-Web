import type { Metadata } from "next";
import TermsView from "@/components/TermsView";
import { getTermsLocale, termsAlternates, termsHref } from "@/content/terms-helpers";
import { pageMetadata } from "@/lib/seo";

const locale = getTermsLocale("en")!;

export const metadata: Metadata = pageMetadata({
  title: `${locale.title} | Riov`,
  description: locale.termsTitle,
  path: termsHref(locale),
  lang: locale.htmlLang,
  languages: termsAlternates(),
});

export default function TermsPage() {
  return <TermsView locale={locale} />;
}
