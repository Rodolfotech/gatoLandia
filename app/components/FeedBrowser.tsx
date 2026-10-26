"use client";

import { useI18n } from "../i18n/I18nContext";
import { useArticleFeed } from "../lib/useArticleFeed";
import { FeedControls, FeedResults } from "./ArticleFeed";

interface FeedBrowserProps {
  /** Grupo que aparece seleccionado al cargar. null muestra todos los artículos. */
  initialGroup?: string | null;
  /** Muestra el buscador encima de los chips. */
  showSearch?: boolean;
}

/** Chips de categoría, subfiltros, resultados y paginación. Lo usan el inicio y los artículos. */
export default function FeedBrowser({ initialGroup = null, showSearch = false }: FeedBrowserProps) {
  const { categories } = useI18n();
  const feed = useArticleFeed(categories, initialGroup);

  return (
    <div>
      <FeedControls feed={feed} browsing showSearch={showSearch} />
      <FeedResults feed={feed} />
    </div>
  );
}
