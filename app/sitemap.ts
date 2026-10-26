import { categories } from "@/app/data/cats";
import type { MetadataRoute } from "next";
import { fetchRazas, RAZAS_PAGE_SIZE } from "@/app/lib/razas";

const BASE_URL = "https://almagatuna.com";
// Fecha del último cambio de contenido. Actualízala al editar app/data/cats.ts.
const LAST_MODIFIED = new Date("2026-10-22");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: BASE_URL, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contacto`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/razas`, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/preguntas`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/calculadora`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/toxicos`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/edad-gato`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/privacidad`, lastModified: LAST_MODIFIED, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terminos`, lastModified: LAST_MODIFIED, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Las subcategorías no tienen página propia: redirigen a su primer tema.
  const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: encodeURI(`${BASE_URL}/categoria/${cat.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const topicUrls: MetadataRoute.Sitemap = [];

  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      for (const topic of sub.topics) {
        topicUrls.push({
          url: encodeURI(`${BASE_URL}/categoria/${cat.slug}/${sub.slug}/${topic.slug}`),
          lastModified: LAST_MODIFIED,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    }
  }

  // Páginas de la guía de razas (la 1 ya está en staticPages). Si la API no responde, se omiten.
  const razas = await fetchRazas().catch(() => []);
  const razasPages = Math.ceil(razas.length / RAZAS_PAGE_SIZE);
  const razasUrls: MetadataRoute.Sitemap = Array.from({ length: Math.max(razasPages - 1, 0) }, (_, i) => ({
    url: `${BASE_URL}/razas?page=${i + 2}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryUrls, ...topicUrls, ...razasUrls];
}
