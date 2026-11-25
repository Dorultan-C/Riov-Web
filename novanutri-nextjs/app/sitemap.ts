import type { MetadataRoute } from "next";
import { absoluteUrl, publicPagePaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-25");
  return publicPagePaths().map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }));
}
