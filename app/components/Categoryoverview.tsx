"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopicCard from "./TopicCard";
import { Category } from "../data/cats";
import { categoryImageAlt, categoryImages } from "../data/categoryImages";
import { useI18n } from "../i18n/I18nContext";

interface CategoryOverviewProps {
  category: Category;
}

function stripMarkup(text: string) {
  return text.replace(/\*\*/g, "");
}

export default function CategoryOverview({ category }: CategoryOverviewProps) {
  const { categories } = useI18n();
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [subFilter, setSubFilter] = useState<string | null>(null);

  const totalTopics = category.subcategories.reduce((n, sub) => n + sub.topics.length, 0);
  const image = categoryImages[category.slug];
  const q = query.trim().toLowerCase();

  const sections = category.subcategories
    .filter((sub) => subFilter === null || sub.slug === subFilter)
    .map((sub) => ({
      sub,
      topics: sub.topics.filter(
        (topic) =>
          q === "" ||
          topic.title.toLowerCase().includes(q) ||
          stripMarkup(topic.intro).toLowerCase().includes(q),
      ),
    }))
    .filter((group) => group.topics.length > 0);

  const shownTopics = sections.reduce((n, group) => n + group.topics.length, 0);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <header className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-(--amber-dark)">
            Categoría · {totalTopics} temas en {category.subcategories.length} secciones
          </p>
          <h1
            className="mt-2 text-4xl leading-tight text-(--charcoal) md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            {category.label}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-(--mid)">{category.description}</p>
        </div>
        {image && (
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-white">
            <Image src={image} alt={categoryImageAlt[category.slug] ?? ""} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
          </div>
        )}
      </header>

      <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-(--charcoal)">
        {category.intro.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
        <label htmlFor={searchId} className="block text-sm font-semibold text-(--charcoal)">
          Buscar en {category.label}
        </label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej: vacunas, arenero, dieta"
          className="mt-2 w-full max-w-md rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm text-(--charcoal) placeholder:text-(--mid) focus-visible:outline-2 focus-visible:outline-(--amber-dark)"
        />

        <div role="group" aria-label="Filtrar por sección" className="mt-4 flex flex-wrap gap-2">
          <FilterChip active={subFilter === null} onClick={() => setSubFilter(null)}>
            Todas ({totalTopics})
          </FilterChip>
          {category.subcategories.map((sub) => (
            <FilterChip key={sub.slug} active={subFilter === sub.slug} onClick={() => setSubFilter(sub.slug)}>
              {sub.label} ({sub.topics.length})
            </FilterChip>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-3 text-sm text-(--mid)">
        Mostrando {shownTopics} {shownTopics === 1 ? "tema" : "temas"}
      </p>

      {sections.map(({ sub, topics }) => (
        <section key={sub.slug} aria-labelledby={`sec-${sub.slug}`} className="mt-10">
          <div className="flex items-baseline justify-between border-b border-black/10 pb-2">
            <h2
              id={`sec-${sub.slug}`}
              className="text-2xl text-(--charcoal)"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              {sub.label}
            </h2>
            <span className="text-sm text-(--mid)">
              {topics.length} {topics.length === 1 ? "tema" : "temas"}
            </span>
          </div>

          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <li key={topic.slug}>
                <TopicCard
                  href={`/categoria/${category.slug}/${sub.slug}/${topic.slug}`}
                  categoryLabel={sub.label}
                  title={topic.title}
                  excerpt={stripMarkup(topic.intro)}
                  image={topic.sections.find((s) => s.image)?.image ?? categoryImages[category.slug] ?? null}
                  imageAlt={topic.sections.find((s) => s.image) ? topic.title : categoryImageAlt[category.slug] ?? ""}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}

      {sections.length === 0 && (
        <p className="mt-10 text-center text-(--mid)">No hay temas que coincidan con la búsqueda.</p>
      )}

      <section aria-labelledby="otras-categorias" className="mt-16">
        <h2 id="otras-categorias" className="text-base font-semibold text-(--charcoal)">
          Explora otras categorías
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {otherCategories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/categoria/${c.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-4 text-sm text-(--charcoal) hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
              >
                {c.label} · {c.subcategories.reduce((n, sub) => n + sub.topics.length, 0)} temas
              </Link>
            </li>
          ))}
        </ul>
      </section>
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
      className={`min-h-11 rounded-full border px-4 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) ${
        active
          ? "border-(--charcoal) bg-(--charcoal) font-semibold text-white"
          : "border-black/10 bg-white text-(--charcoal) hover:border-(--amber)"
      }`}
    >
      {children}
    </button>
  );
}
