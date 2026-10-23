import { decodeParams } from "@/app/lib/routes";
import { categories } from "@/app/data/cats";
import { topicSeoOverrides } from "@/app/data/seoOverrides";
import { metaDescription, topicOgImage } from "@/app/lib/seo";
import type { Metadata } from "next";
import TopicContentPage from "./TopicContentPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";
const SITE_NAME = "AlmaGatuna · Enciclopedia Felina";

type Props = {
  params: Promise<{ categorySlug: string; subcategorySlug: string; topicSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug, subcategorySlug, topicSlug } = decodeParams(await params);
  const cat = categories.find(c => c.slug === categorySlug);
  const sub = cat?.subcategories.find(s => s.slug === subcategorySlug);
  const topic = sub?.topics.find(t => t.slug === topicSlug);

  if (!topic) return { title: "Tema no encontrado" };

  const override = topicSeoOverrides[`/categoria/${categorySlug}/${subcategorySlug}/${topicSlug}`];
  const title = override?.title ?? topic.title;
  const description = override?.description ?? metaDescription(topic.intro);
  const keywords = [
    cat?.label || categorySlug,
    sub?.label || subcategorySlug,
    topic.title,
    "gatos",
    "cuidado felino",
  ].filter(Boolean).join(", ");

  const url = `${SITE_URL}/categoria/${categorySlug}/${subcategorySlug}/${topicSlug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description,
      url,
      images: [{ url: `${SITE_URL}${topicOgImage(topicSlug)}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}${topicOgImage(topicSlug)}`],
    },
  };
}

export default async function Page({ params }: Props) {
  const { categorySlug, subcategorySlug, topicSlug } = decodeParams(await params);
  const cat = categories.find(c => c.slug === categorySlug);
  const sub = cat?.subcategories.find(s => s.slug === subcategorySlug);
  const topic = sub?.topics.find(t => t.slug === topicSlug);

  const url = `${SITE_URL}/categoria/${categorySlug}/${subcategorySlug}/${topicSlug}`;

  const jsonLd: Record<string, unknown>[] = [];

  if (topic && cat && sub) {
    const description = metaDescription(topic.intro);

    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: cat.label, item: `${SITE_URL}/categoria/${cat.slug}` },
        { "@type": "ListItem", position: 3, name: sub.label, item: `${SITE_URL}/categoria/${cat.slug}/${sub.slug}` },
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
      isPartOf: { "@type": "WebPage", name: sub.label, url: `${SITE_URL}/categoria/${cat.slug}/${sub.slug}` },
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
