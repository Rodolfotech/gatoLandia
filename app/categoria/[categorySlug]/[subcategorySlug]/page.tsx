import { decodeParams } from "@/app/lib/routes";
import { notFound, redirect } from "next/navigation";
import { categories } from "@/app/data/cats";

type Props = {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
};

// Una subcategoría no tiene vista propia: abre su primer tema.
export default async function SubcategoryPage({ params }: Props) {
  const { categorySlug, subcategorySlug } = decodeParams(await params);
  const sub = categories
    .find((c) => c.slug === categorySlug)
    ?.subcategories.find((s) => s.slug === subcategorySlug);
  const firstTopic = sub?.topics[0];

  if (!sub || !firstTopic) notFound();

  redirect(`/categoria/${categorySlug}/${subcategorySlug}/${firstTopic.slug}`);
}
