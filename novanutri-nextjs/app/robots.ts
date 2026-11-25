import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/seo";

const ALLOWED = [
  "*",
  "GPTBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
