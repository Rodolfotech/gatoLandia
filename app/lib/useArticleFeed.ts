import { useMemo, useState } from "react";
import { setSearchQuery, useSearchQuery } from "./searchStore";
import type { Category, Subcategory, Topic } from "../data/cats";
import { categoryImageAlt, categoryImages } from "../data/categoryImages";
import { feedGroups, groupOf, type FeedGroup, type FeedOrigin } from "../data/feedGroups";

export const PAGE_SIZE = 6;

export interface ArticleItem {
  cat: Category;
  sub: Subcategory;
  topic: Topic;
  /** Grupo de la barra de filtros al que pertenece la categoría original. */
  group: FeedGroup | null;
  image: string | null;
  imageAlt: string;
}

export function stripMarkup(text: string) {
  return text.replace(/\*\*/g, "");
}

/** Minúsculas y sin acentos, para que "parasitos" encuentre "Parásitos". */
export function normalizeText(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/**
 * Estado del feed de artículos: búsqueda, grupo, categoría original y paginación.
 * Lo usan la home y las páginas de artículo.
 */
export function useArticleFeed(categories: Category[], initialGroup: string | null = null) {
  // Slug del grupo de la barra (null = todas).
  const [category, setCategory] = useState<string | null>(initialGroup);
  // Slug de la categoría original dentro del grupo (null = todas las del grupo).
  const [origin, setOrigin] = useState<string | null>(null);
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
            group: groupOf(cat.slug),
            ...(topic.sections.find((s) => s.image)
              ? { image: topic.sections.find((s) => s.image)!.image!, imageAlt: topic.title }
              : { image: categoryImages[cat.slug] ?? null, imageAlt: categoryImageAlt[cat.slug] ?? "" }),
          })),
        ),
      ),
    [categories],
  );

  const activeGroup = feedGroups.find((g) => g.slug === category) ?? null;
  const activeOrigin: FeedOrigin | null = activeGroup?.origins.find((o) => o.slug === origin) ?? null;

  const q = normalizeText(query.trim());
  const filtered = articles.filter(
    ({ cat, group, topic }) =>
      (category === null || group?.slug === category) &&
      (origin === null || cat.slug === origin) &&
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
    origin,
    activeGroup,
    activeOrigin,
    query,
    currentPage,
    totalPages,
    changeCategory(slug: string | null) {
      setCategory(slug);
      setOrigin(null);
      setPage(1);
    },
    changeOrigin(slug: string | null) {
      setOrigin(slug);
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
