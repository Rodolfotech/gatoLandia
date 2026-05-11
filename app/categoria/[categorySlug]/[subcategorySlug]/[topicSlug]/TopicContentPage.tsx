"use client";

import { useRouter } from "next/navigation";
import { useI18n } from "@/app/i18n/I18nContext";
import { getCategory, getSubcategory, getTopic } from "@/app/data/cats";
import TopicContent from "@/app/components/Topicontent";

interface Props {
  categorySlug: string;
  subcategorySlug: string;
  topicSlug: string;
}

export default function TopicContentPage({ categorySlug, subcategorySlug, topicSlug }: Props) {
  const router = useRouter();
  const { categories: i18nCategories } = useI18n();

  const category = i18nCategories.find(c => c.slug === categorySlug) ?? getCategory(categorySlug);
  const subcategory = category?.subcategories.find(s => s.slug === subcategorySlug) ?? getSubcategory(categorySlug, subcategorySlug);
  const topic = subcategory?.topics.find(t => t.slug === topicSlug) ?? getTopic(categorySlug, subcategorySlug, topicSlug);

  if (!category || !subcategory || !topic) {
    return (
      <div style={{ padding: "3rem", textAlign: "center", color: "#8a7560" }}>
        Tema no encontrado
      </div>
    );
  }

  const siblingTopics = subcategory.topics;
  const topicIdx = siblingTopics.findIndex(t => t.slug === topicSlug);
  const prevTopic = topicIdx > 0 ? siblingTopics[topicIdx - 1] : null;
  const nextTopic = topicIdx < siblingTopics.length - 1 ? siblingTopics[topicIdx + 1] : null;

  function handleNavigate(slug: string) {
    router.push(`/categoria/${categorySlug}/${subcategorySlug}/${slug}`);
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <TopicContent
        category={category}
        subcategory={subcategory}
        topic={topic}
        prevTopic={prevTopic}
        nextTopic={nextTopic}
        pageIndex={topicIdx + 1}
        totalPages={siblingTopics.length}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
