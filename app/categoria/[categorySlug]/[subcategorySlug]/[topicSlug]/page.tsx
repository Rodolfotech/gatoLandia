import { categories } from "@/app/data/cats";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import TopicContentPage from "./TopicContentPage";

const OVERRIDES_FILE = path.join(process.cwd(), "data", "seo-overrides.json");

type Props = {
  params: Promise<{ categorySlug: string; subcategorySlug: string; topicSlug: string }>;
};

function readOverrides(): Record<string, { title?: string; description?: string; keywords?: string }> {
  try {
    if (fs.existsSync(OVERRIDES_FILE)) {
      return JSON.parse(fs.readFileSync(OVERRIDES_FILE, "utf-8"));
    }
  } catch {}
  return {};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug, subcategorySlug, topicSlug } = await params;
  const cat = categories.find(c => c.slug === categorySlug);
  const sub = cat?.subcategories.find(s => s.slug === subcategorySlug);
  const topic = sub?.topics.find(t => t.slug === topicSlug);

  if (!topic) return { title: "Tema no encontrado" };

  const routePath = `/${categorySlug}/${subcategorySlug}/${topicSlug}`;
  const overrides = readOverrides();
  const override = overrides[routePath];

  const baseDesc = topic.intro.replace(/\*\*/g, "").slice(0, 160);
  const title = override?.title || topic.title;
  const description = override?.description || baseDesc;
  const keywords = override?.keywords || [
    cat?.label || categorySlug,
    sub?.label || subcategorySlug,
    topic.title,
    "gatos",
    "cuidado felino",
  ].filter(Boolean).join(", ");

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} · Gatitos · Enciclopedia Felina`,
      description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { categorySlug, subcategorySlug, topicSlug } = await params;
  return (
    <TopicContentPage
      categorySlug={categorySlug}
      subcategorySlug={subcategorySlug}
      topicSlug={topicSlug}
    />
  );
}
