import { categories } from "@/app/data/cats";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import TopicContentPage from "./TopicContentPage";

const OVERRIDES_FILE = path.join(process.cwd(), "data", "seo-overrides.json");
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";
const SITE_NAME = "AlmaGatuna · Enciclopedia Felina";

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

  const url = `${SITE_URL}/${categorySlug}/${subcategorySlug}/${topicSlug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description,
      url,
      images: [{ url: `${SITE_URL}/featuredcontent/cuidadoIntegral.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}/featuredcontent/cuidadoIntegral.png`],
    },
  };
}

export default async function Page({ params }: Props) {
  const { categorySlug, subcategorySlug, topicSlug } = await params;
  const cat = categories.find(c => c.slug === categorySlug);
  const sub = cat?.subcategories.find(s => s.slug === subcategorySlug);
  const topic = sub?.topics.find(t => t.slug === topicSlug);

  const url = `${SITE_URL}/${categorySlug}/${subcategorySlug}/${topicSlug}`;

  const jsonLd: Record<string, unknown>[] = [];

  if (topic && cat && sub) {
    const description = topic.intro.replace(/\*\*/g, "").slice(0, 160);

    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: cat.label, item: `${SITE_URL}/${cat.slug}` },
        { "@type": "ListItem", position: 3, name: sub.label, item: `${SITE_URL}/${cat.slug}/${sub.slug}` },
        { "@type": "ListItem", position: 4, name: topic.title, item: url },
      ],
    });

    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: topic.title,
      description,
      url,
      author: { "@type": "Organization", name: SITE_NAME },
      about: cat.label,
      isPartOf: { "@type": "WebPage", name: sub.label, url: `${SITE_URL}/${cat.slug}/${sub.slug}` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["#topic-intro"] },
    });

    if (topic.sections.length > 0) {
      jsonLd.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: topic.sections.map((s) => ({
          "@type": "Question",
          name: s.heading,
          acceptedAnswer: {
            "@type": "Answer",
            text: s.body.replace(/\*\*/g, "").slice(0, 500),
          },
        })),
      });
    }
  }

  return (
    <>
      {jsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <TopicContentPage
        categorySlug={categorySlug}
        subcategorySlug={subcategorySlug}
        topicSlug={topicSlug}
      />
    </>
  );
}
