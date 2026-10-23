import Link from "next/link";
import type { ArticleFeed } from "../lib/useArticleFeed";
import { stripMarkup } from "../lib/useArticleFeed";
import { truncateAtWord } from "../lib/seo";

export interface TopicGroup {
  key: string;
  label: string | null;
  items: ArticleFeed["items"];
}

interface TopicListProps {
  groups: TopicGroup[];
  onSelect?: () => void;
}

/** Lista de temas con título y resumen: se usa al filtrar por etiqueta o por búsqueda. */
export default function TopicList({ groups, onSelect }: TopicListProps) {
  return (
    <div className="max-w-3xl">
      {groups.map((group) => (
        <section key={group.key} className="mt-8 first:mt-6" aria-labelledby={group.label ? `grupo-${group.key}` : undefined}>
          {group.label && (
            <h3
              id={`grupo-${group.key}`}
              className="border-b border-black/10 pb-2 text-lg text-(--charcoal)"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              {group.label}
              <span className="ml-2 text-sm font-normal text-(--mid)">({group.items.length})</span>
            </h3>
          )}
          <ul className="divide-y divide-black/5">
            {group.items.map(({ cat, sub, topic }) => (
              <li key={`${cat.slug}-${sub.slug}-${topic.slug}`}>
                <Link
                  href={`/categoria/${cat.slug}/${sub.slug}/${topic.slug}`}
                  onClick={onSelect}
                  className="group flex min-h-14 items-center justify-between gap-4 py-4 pr-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                >
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-(--charcoal) group-hover:underline">
                      {topic.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-(--mid)">
                      {truncateAtWord(stripMarkup(topic.intro), 150)}
                    </span>
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-sm font-semibold text-(--amber-dark)">
                    Leer
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
