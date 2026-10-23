"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import { useArticleFeed, type ArticleFeed } from "../lib/useArticleFeed";
import { FeedResults } from "./ArticleFeed";

interface BrowserValue {
  feed: ArticleFeed;
  /** El acordeón de resultados está abierto: se oculta el artículo. */
  browsing: boolean;
  start: () => void;
  stop: () => void;
}

const ArticleBrowserContext = createContext<BrowserValue | null>(null);

/** Comparte el feed y el estado del acordeón entre la barra de etiquetas y el contenido de la página. */
export function ArticleBrowserProvider({ children }: { children: React.ReactNode }) {
  const { categories } = useI18n();
  const feed = useArticleFeed(categories);
  // Abierto por una etiqueta, o mientras haya un término de búsqueda (barra o listado).
  const [opened, setOpened] = useState(false);
  // Cerrado a mano para un término concreto: vuelve a abrirse cuando el término cambia.
  const [closedFor, setClosedFor] = useState<string | null>(null);
  const browsing = (opened || feed.query.trim() !== "") && closedFor !== feed.query;
  const start = useCallback(() => {
    setOpened(true);
    setClosedFor(null);
  }, []);
  const stop = useCallback(() => {
    setOpened(false);
    setClosedFor(feed.query);
  }, [feed.query]);

  return (
    <ArticleBrowserContext.Provider value={{ feed, browsing, start, stop }}>{children}</ArticleBrowserContext.Provider>
  );
}

export function useArticleBrowser() {
  const ctx = useContext(ArticleBrowserContext);
  if (!ctx) throw new Error("useArticleBrowser debe usarse dentro de ArticleBrowserProvider");
  return ctx;
}

/** Muestra el acordeón de resultados mientras hay un filtro; si no, el contenido de la página. */
export function ArticleBrowserOutlet({ children }: { children: React.ReactNode }) {
  const { browsing } = useArticleBrowser();

  if (!browsing) return <>{children}</>;

  return <ResultsAccordion />;
}

function ResultsAccordion() {
  const { feed, stop } = useArticleBrowser();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  // Clic fuera del acordeón (sin contar los controles) o Escape: vuelve a mostrar el artículo.
  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      const target = e.target as Element;
      if (rootRef.current?.contains(target)) return;
      if (target.closest?.("[data-feed-controls]")) return;
      stop();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") stop();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [stop]);

  const categoryLabel = feed.category
    ? feed.articles.find((a) => a.cat.slug === feed.category)?.cat.label
    : null;
  const title = `${categoryLabel ?? "Todas las categorías"} · ${feed.filtered.length} ${
    feed.filtered.length === 1 ? "artículo" : "artículos"
  }`;

  return (
    <div ref={rootRef} className="page-shell pb-12">
      <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
        <button
          type="button"
          aria-expanded="true"
          aria-controls={panelId}
          onClick={stop}
          className="flex min-h-11 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--amber-dark)"
        >
          <span className="font-semibold text-(--charcoal)">{title}</span>
          <span aria-hidden="true" className="text-(--mid)">
            ▴
          </span>
        </button>
        <div id={panelId} className="border-t border-black/5 p-5">
          <FeedResults feed={feed} onSelect={stop} groupBySub />
        </div>
      </div>
    </div>
  );
}
