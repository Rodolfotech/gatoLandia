import { Fragment } from "react";
import FullImage from "./FullImage";
import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

interface TopicCardProps {
  href: string;
  categoryLabel: string;
  /** Categoría y subtema como enlaces. Si se pasan, sustituyen a categoryLabel. */
  crumbs?: Crumb[];
  title: string;
  excerpt: string;
  image?: string | null;
  imageAlt?: string;
  onSelect?: () => void;
}

/**
 * Tarjeta de artículo al estilo blog: imagen, categoría, título, resumen y enlace.
 * El título enlaza al artículo y ocupa toda la tarjeta; las categorías van encima, como enlaces propios.
 */
export default function TopicCard({
  href,
  categoryLabel,
  crumbs,
  title,
  excerpt,
  image,
  imageAlt = "",
  onSelect,
}: TopicCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-(--amber-dark)">
      {image && (
        <div className="bg-black/5">
          <FullImage src={image} alt={imageAlt} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {crumbs ? (
          <p className="text-xs font-semibold text-(--amber-dark)">
            {crumbs.map((crumb, i) => (
              <Fragment key={crumb.href}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <Link
                  href={crumb.href}
                  className="relative z-10 rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                >
                  {crumb.label}
                </Link>
              </Fragment>
            ))}
          </p>
        ) : (
          <p className="text-[11px] font-semibold uppercase tracking-wider text-(--amber-dark)">{categoryLabel}</p>
        )}
        <h3
          className="mt-2 text-lg leading-snug text-(--charcoal)"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          <Link
            href={href}
            onClick={onSelect}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {title}
          </Link>
        </h3>
        <div className="card-excerpt">
          <div>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-(--mid)">{excerpt}</p>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="mt-auto inline-flex min-h-11 items-center self-start pt-4 text-sm font-semibold text-(--amber-dark) group-hover:underline group-hover:underline-offset-4"
        >
          Leer artículo →
        </span>
      </div>
    </article>
  );
}
