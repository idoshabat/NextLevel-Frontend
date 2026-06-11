import type { MetadataRoute } from "next";
import { galleryCategories } from "@/data/gallery";
import { absoluteUrl, seoPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const galleryPages = galleryCategories.map((category) => ({
    url: absoluteUrl(`/gallery/${category.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: category.includeInIndex ? 0.65 : 0.45,
  }));

  return [
    ...seoPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: page.path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: page.priority,
    })),
    ...galleryPages,
  ];
}
