"use client";

import { useId } from "react";
import { useI18n } from "../i18n/I18nContext";
import ChipRail from "./ChipRail";
import Pagination from "./Pagination";
import TopicCard from "./TopicCard";
import type { ArticleFeed } from "../lib/useArticleFeed";
import { stripMarkup } from "../lib/useArticleFeed";
import TopicList from "./TopicList";
import SearchEmpty from "./SearchEmpty";
import { suggestTerms } from "../lib/searchSuggestions";

interface FeedControlsProps {
  feed: ArticleFeed;
  /** Hay una búsqueda o un filtro activo: las etiquetas se muestran seleccionadas. */
  browsing: boolean;
  /** Se llama al usar la búsqueda o una etiqueta. */
  onInteract?: () => void;
  /** En los artículos la barra superior ya tiene buscador: aquí se oculta. */
  showSearch?: boolean;
}

/** Buscador y etiquetas de categoría. Lo usan la home y las páginas de artículo. */
export function FeedControls({ feed, browsing, onInteract, showSearch = true }: FeedControlsProps) {
  const searchId = useId();
  const { categories } = useI18n();

  return (
    <div data-feed-controls>
      {showSearch && (
      <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm md:p-5">
        <label htmlFor={searchId} className="block text-sm font-semibold text-(--charcoal)">
          Buscar artículos
        </label>
        <input
          id={searchId}
          type="search"
          value={feed.query}
          onChange={(e) => {
            feed.changeQuery(e.target.value);
            onInteract?.();
          }}
          placeholder="Ej: vacunas, arenero, dieta"
          className="mt-2 w-full max-w-md rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm text-(--charcoal) placeholder:text-(--mid) focus-visible:outline-2 focus-visible:outline-(--amber-dark)"
        />
      </div>
      )}

      <div className="mt-3 md:mt-4">
        <ChipRail label="Filtrar por categoría">
          <FilterChip
            active={browsing && feed.category === null}
            onClick={() => {
              feed.changeCategory(null);
              onInteract?.();
              focusResults();
            }}
          >
            Todas ({feed.articles.length})
          </FilterChip>
          {categories.map((cat) => {
            const count = cat.subcategories.reduce((n, sub) => n + sub.topics.length, 0);
            return (
              <FilterChip
                key={cat.slug}
                active={browsing && feed.category === cat.slug}
                onClick={() => {
                  feed.changeCategory(cat.slug);
                  onInteract?.();
                  focusResults();
                }}
              >
                {cat.label} ({count})
              </FilterChip>
            );
          })}
        </ChipRail>
      </div>
    </div>
  );
}

/** Lleva el foco al recuento de resultados para que quien usa teclado o lector sepa que cambiaron. */
function focusResults() {
  setTimeout(() => document.getElementById("resultados-titulo")?.focus(), 0);
}

interface FeedResultsProps {
  feed: ArticleFeed;
  /** Se llama al elegir un artículo. */
  onSelect?: () => void;
  /** Agrupa las tarjetas por subcategoría, con un encabezado por grupo. */
  groupBySub?: boolean;
}

interface Group {
  key: string;
  label: string | null;
  items: ArticleFeed["items"];
}

function groupItems(items: ArticleFeed["items"], withCategory: boolean): Group[] {
  const groups: Group[] = [];
  for (const item of items) {
    const key = `${item.cat.slug}/${item.sub.slug}`;
    let group = groups.find((g) => g.key === key);
    if (!group) {
      group = {
        key,
        label: withCategory ? `${item.cat.label} · ${item.sub.label}` : item.sub.label,
        items: [],
      };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
}

/** Contador, tarjetas de artículo y paginación. */
export function FeedResults({ feed, onSelect, groupBySub = false }: FeedResultsProps) {
  const total = feed.filtered.length;

  // Con una etiqueta o una búsqueda se muestra una lista de temas; sin filtro, las tarjetas de siempre.
  const focused = feed.category !== null || feed.query.trim() !== "";

  return (
    <div id="resultados" role="region" aria-labelledby="resultados-titulo" className="scroll-mt-24">
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p id="resultados-titulo" tabIndex={-1} aria-live="polite" className="text-sm text-(--mid) focus:outline-none">
          Mostrando {feed.items.length} de {total} {total === 1 ? "artículo" : "artículos"}
        </p>
        {feed.category !== null && (
          <button
            type="button"
            onClick={() => feed.changeCategory(null)}
            className="min-h-11 rounded-lg px-3 text-sm font-semibold text-(--amber-dark) underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
          >
            Quitar filtro
          </button>
        )}
      </div>

      {feed.items.length > 0 && focused ? (
        <TopicList
          groups={groupItems(feed.items, feed.category === null)}
          onSelect={onSelect}
        />
      ) : feed.items.length > 0 ? (
        (groupBySub ? groupItems(feed.items, feed.category === null) : [{ key: "all", label: null, items: feed.items }]).map((group) => (
          <section key={group.key} className="mt-6 first:mt-5">
            {groupBySub && group.label && (
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-(--mid)">{group.label}</h3>
            )}
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map(({ cat, sub, topic, image, imageAlt }) => (
                <li key={`${cat.slug}-${sub.slug}-${topic.slug}`}>
                  <TopicCard
                    href={`/categoria/${cat.slug}/${sub.slug}/${topic.slug}`}
                    categoryLabel={`${cat.label} · ${sub.label}`}
                    title={topic.title}
                    excerpt={stripMarkup(topic.intro)}
                    image={image}
                    imageAlt={imageAlt}
                    onSelect={onSelect}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))
      ) : feed.query.trim() !== "" ? (
        <SearchEmpty
          query={feed.query.trim()}
          suggestions={suggestTerms(feed.query, feed.articles)}
          onPick={(term) => feed.changeQuery(term)}
          onClear={() => {
            feed.changeQuery("");
            feed.changeCategory(null);
          }}
        />
      ) : (
        <p className="mt-10 text-center text-(--mid)">No hay artículos en esta sección.</p>
      )}

      {feed.totalPages > 1 && (
        <Pagination
          current={feed.currentPage}
          total={feed.totalPages}
          hasPrev={feed.currentPage > 1}
          hasNext={feed.currentPage < feed.totalPages}
          color="#a0622a"
          onPrev={() => feed.goToPage(feed.currentPage - 1)}
          onNext={() => feed.goToPage(feed.currentPage + 1)}
          prevLabel="Anterior"
          nextLabel="Siguiente"
        />
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) ${
        active
          ? "border-(--charcoal) bg-(--charcoal) font-semibold text-white"
          : "border-black/10 bg-white text-(--charcoal) hover:border-(--amber)"
      }`}
    >
      {children}
    </button>
  );
}
