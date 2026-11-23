import type { Metadata } from "next";
import CollaborationsView from "@/components/CollaborationsView";
import { getSiteMessages } from "@/content/site";
import { getSiteLang } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getSiteLang();
  const t = getSiteMessages(lang);
  return {
    title: t.collaborations.metaTitle,
    description: t.collaborations.metaDescription,
  };
}

export default function CollaborationsPage() {
  return <CollaborationsView />;
}
