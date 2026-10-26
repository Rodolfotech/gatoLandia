"use client";

import { useId } from "react";
import ChipRow from "./ChipRow";
import FilterChip from "./FilterChip";
import Pagination from "./Pagination";
import SearchEmpty from "./SearchEmpty";
import TopicCard from "./TopicCard";
import { feedGroups, type FeedGroup } from "../data/feedGroups";
import { suggestTerms } from "../lib/searchSuggestions";
import { PAGE_SIZE, stripMarkup, type ArticleFeed } from "../lib/useArticleFeed";

interface FeedControlsProps {
  feed: ArticleFeed;
  /** Hay una búsqueda o un filtro activo: las etiquetas se muestran seleccionadas. */
  browsing: boolean;
  /** Se llama al usar la búsqueda o una etiqueta. */
  onInteract?: () => void;
  /** En los artículos la barra superior ya tiene buscador: aquí se oculta. */
  showSearch?: boolean;
}

/** Buscador, grupos de categorías y subfiltros. Lo usan la home y las páginas de artículo. */
export function FeedControls({ feed, browsing, onInteract, showSearch = true }: FeedControlsProps) {
  const searchId = useId();
  const activeGroup = browsing ? feed.activeGroup : null;

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
        <ChipRow label="Filtrar por categoría">
          <FilterChip
            active={browsing && feed.category === null}
            count={feed.articles.length}
            onClick={() => {
              feed.changeCategory(null);
              onInteract?.();
              focusResults();
            }}
          >
            Todas
          </FilterChip>
          {feedGroups.map((group) => (
            <FilterChip
              key={group.slug}
              active={browsing && feed.category === group.slug}
              count={feed.articles.filter((a) => a.group?.slug === group.slug).length}
              onClick={() => {
                feed.changeCategory(group.slug);
                onInteract?.();
                focusResults();
              }}
            >
              {group.label}
            </FilterChip>
          ))}
        </ChipRow>
      </div>

      {activeGroup && <OriginRow feed={feed} group={activeGroup} onInteract={onInteract} />}
    </div>
  );
}

/** Subfiltro: las categorías originales del grupo elegido, con su número de artículos. */
function OriginRow({
  feed,
  group,
  onInteract,
}: {
  feed: ArticleFeed;
  group: FeedGroup;
  onInteract?: () => void;
}) {
  const inGroup = feed.articles.filter((a) => a.group?.slug === group.slug);

  return (
    <div className="mt-3 rounded-2xl bg-(--amber)/10 p-3">
      <ChipRow label={`Subcategorías de ${group.label}`}>
        <FilterChip
          active={feed.origin === null}
          count={inGroup.length}
          onClick={() => {
            feed.changeOrigin(null);
            onInteract?.();
            focusResults();
          }}
        >
          Todas
        </FilterChip>
        {group.origins.map((origin) => (
          <FilterChip
            key={origin.slug}
            active={feed.origin === origin.slug}
            count={inGroup.filter((a) => a.cat.slug === origin.slug).length}
            onClick={() => {
              feed.changeOrigin(origin.slug);
              onInteract?.();
              focusResults();
            }}
          >
            {origin.label}
          </FilterChip>
        ))}
      </ChipRow>
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
}

/** Recuento, tarjetas de artículo y paginación. */
export function FeedResults({ feed, onSelect }: FeedResultsProps) {
  const total = feed.filtered.length;
  const from = total === 0 ? 0 : (feed.currentPage - 1) * PAGE_SIZE + 1;
  const to = Math.min(feed.currentPage * PAGE_SIZE, total);
  const scope = feed.activeOrigin?.label ?? feed.activeGroup?.label;
  const inScope = scope ? ` en ${scope}` : "";

  function goTo(page: number) {
    feed.goToPage(page);
    focusResults();
  }

  return (
    <div id="resultados" role="region" aria-labelledby="resultados-titulo" className="scroll-mt-24">
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p id="resultados-titulo" tabIndex={-1} aria-live="polite" className="text-sm text-(--mid) focus:outline-none">
          {total === 0
            ? `0 artículos${inScope}`
            : `Mostrando ${from}–${to} de ${total} ${total === 1 ? "artículo" : "artículos"}${inScope}`}
        </p>
        {feed.category !== null && (
          <button
            type="button"
            onClick={() => feed.changeCategory(null)}
            className="min-h-11 rounded-lg px-3 text-sm font-semibold text-(--amber-dark) underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
          >
            {feed.origin !== null ? "Quitar filtros" : "Quitar filtro"}
          </button>
        )}
      </div>

      {feed.items.length > 0 ? (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feed.items.map(({ cat, sub, topic, image, imageAlt }) => (
            <li key={`${cat.slug}-${sub.slug}-${topic.slug}`}>
              <TopicCard
                href={`/categoria/${cat.slug}/${sub.slug}/${topic.slug}`}
                categoryLabel={`${cat.label} · ${sub.label}`}
                crumbs={[
                  { label: cat.label, href: `/categoria/${cat.slug}` },
                  { label: sub.label, href: `/categoria/${cat.slug}/${sub.slug}` },
                ]}
                title={topic.title}
                excerpt={stripMarkup(topic.intro)}
                image={image}
                imageAlt={imageAlt}
                onSelect={onSelect}
              />
            </li>
          ))}
        </ul>
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
          numbered
          onGoTo={goTo}
          onPrev={() => goTo(feed.currentPage - 1)}
          onNext={() => goTo(feed.currentPage + 1)}
          prevLabel="Anterior"
          nextLabel="Siguiente"
        />
      )}
    </div>
  );
}
