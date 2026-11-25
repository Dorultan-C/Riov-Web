import type { Metadata } from "next";
import LicenseView from "@/components/LicenseView";
import { getSiteMessages } from "@/content/site";
import { getSiteLang } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getSiteLang();
  const t = getSiteMessages(lang);
  return pageMetadata({
    title: t.license.metaTitle,
    description: t.license.metaDescription,
    path: "/license",
    lang,
    imageAlt: t.nav.logoAlt,
  });
}

export default function LicensePage() {
  return <LicenseView />;
}
