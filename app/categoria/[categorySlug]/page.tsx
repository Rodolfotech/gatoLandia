import { decodeParams } from "@/app/lib/routes";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/app/data/cats";
import CategoryOverview from "@/app/components/Categoryoverview";
import { ogImageFor } from "@/app/data/categoryImages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";
const SITE_NAME = "AlmaGatuna · Enciclopedia Felina";

type Props = {
  params: Promise<{ categorySlug: string }>;
};

function findCategory(categorySlug: string) {
  return categories.find((c) => c.slug === categorySlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = decodeParams(await params);
  const cat = findCategory(categorySlug);

  if (!cat) return { title: "Categoría no encontrada" };

  const url = `${SITE_URL}/categoria/${cat.slug}`;
  const image = { url: `${SITE_URL}${ogImageFor(cat.slug)}`, width: 1200, height: 630 };

  return {
    title: cat.seoTitle,
    description: cat.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${cat.seoTitle} · ${SITE_NAME}`,
      description: cat.description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.seoTitle} · ${SITE_NAME}`,
      description: cat.description,
      images: [image.url],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = decodeParams(await params);
  const cat = findCategory(categorySlug);

  if (!cat) notFound();

  // JSON-LD en el servidor para que llegue en el HTML inicial, sin depender de JavaScript.
  const topics = cat.subcategories.flatMap((sub) =>
    sub.topics.map((topic) => ({ sub, topic })),
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.label,
    description: cat.description,
    url: `${SITE_URL}/categoria/${cat.slug}`,
    about: cat.label,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: topics.map(({ sub, topic }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/categoria/${cat.slug}/${sub.slug}/${topic.slug}`,
        name: topic.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryOverview category={cat} />
    </>
  );
}
