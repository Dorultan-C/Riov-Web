import type { Metadata } from "next";
import PrivacyPolicyView from "@/components/PrivacyPolicyView";
import { getPrivacyLocale, privacyAlternates, privacyHref } from "@/content/privacy-helpers";
import { pageMetadata } from "@/lib/seo";

const locale = getPrivacyLocale("en")!;

export const metadata: Metadata = pageMetadata({
  title: `${locale.title} | Riov`,
  description: locale.policyTitle,
  path: privacyHref(locale),
  lang: locale.htmlLang,
  languages: privacyAlternates(),
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView locale={locale} />;
}
