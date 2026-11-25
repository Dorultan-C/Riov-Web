import type { Metadata } from "next";
import CollaborationsView from "@/components/CollaborationsView";
import { getSiteMessages } from "@/content/site";
import { getSiteLang } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getSiteLang();
  const t = getSiteMessages(lang);
  return pageMetadata({
    title: t.collaborations.metaTitle,
    description: t.collaborations.metaDescription,
    path: "/collaborations",
    lang,
    imageAlt: t.nav.logoAlt,
  });
}

export default function CollaborationsPage() {
  return <CollaborationsView />;
}
