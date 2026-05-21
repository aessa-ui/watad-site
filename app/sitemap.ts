import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

// Single-page site: AR/EN is a client-side toggle on one URL,
// so the homepage is one entry (not two). Privacy + Terms stubs included.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: config.siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${config.siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${config.siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
