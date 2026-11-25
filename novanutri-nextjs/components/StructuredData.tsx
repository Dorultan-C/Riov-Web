"use client";

import { usePathname } from "next/navigation";
import { useSiteMessages } from "@/components/LanguageProvider";
import { serializeJsonLd, structuredData } from "@/lib/seo";

export default function StructuredData() {
  const messages = useSiteMessages();
  const pathname = usePathname() || "/";
  const json = serializeJsonLd(structuredData(messages, pathname));

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
