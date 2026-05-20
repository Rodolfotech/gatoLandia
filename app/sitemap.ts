import { categories } from "@/app/data/cats";
import type { MetadataRoute } from "next";

const BASE_URL = "https://almagatuna.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/razas`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/preguntas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/privacidad`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terminos`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const topicUrls: MetadataRoute.Sitemap = [];

  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      for (const topic of sub.topics) {
        topicUrls.push({
          url: `${BASE_URL}/categoria/${cat.slug}/${sub.slug}/${topic.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    }
  }

  return [...staticPages, ...topicUrls];
}
