import { useMemo, useState } from "react";
import { setSearchQuery, useSearchQuery } from "./searchStore";
import type { Category, Subcategory, Topic } from "../data/cats";
import { categoryImageAlt, categoryImages } from "../data/categoryImages";

export const PAGE_SIZE = 9;

export interface ArticleItem {
  cat: Category;
  sub: Subcategory;
  topic: Topic;
  image: string | null;
  imageAlt: string;
}

export function stripMarkup(text: string) {
  return text.replace(/\*\*/g, "");
}

/** Minúsculas y sin acentos, para que "parasitos" encuentre "Parásitos". */
export function normalizeText(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/** Estado del feed de artículos: búsqueda, categoría y paginación. Lo usan la home y las páginas de artículo. */
export function useArticleFeed(categories: Category[]) {
  const [category, setCategory] = useState<string | null>(null);
  const query = useSearchQuery();
  const [page, setPage] = useState(1);

  const articles = useMemo<ArticleItem[]>(
    () =>
      categories.flatMap((cat) =>
        cat.subcategories.flatMap((sub) =>
          sub.topics.map((topic) => ({
            cat,
            sub,
            topic,
            ...(topic.sections.find((s) => s.image)
              ? { image: topic.sections.find((s) => s.image)!.image!, imageAlt: topic.title }
              : { image: categoryImages[cat.slug] ?? null, imageAlt: categoryImageAlt[cat.slug] ?? "" }),
          })),
        ),
      ),
    [categories],
  );

  const q = normalizeText(query.trim());
  const filtered = articles.filter(
    ({ cat, topic }) =>
      (category === null || cat.slug === category) &&
      (q === "" ||
        normalizeText(topic.title).includes(q) ||
        normalizeText(stripMarkup(topic.intro)).includes(q)),
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const items = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return {
    articles,
    filtered,
    items,
    category,
    query,
    currentPage,
    totalPages,
    changeCategory(slug: string | null) {
      setCategory(slug);
      setPage(1);
    },
    changeQuery(value: string) {
      setSearchQuery(value);
      setPage(1);
    },
    goToPage(next: number) {
      setPage(next);
    },
  };
}

export type ArticleFeed = ReturnType<typeof useArticleFeed>;
