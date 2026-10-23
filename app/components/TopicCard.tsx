import Image from "next/image";
import Link from "next/link";

interface TopicCardProps {
  href: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  image?: string | null;
  imageAlt?: string;
  onSelect?: () => void;
}

/** Tarjeta de artículo al estilo blog: imagen, categoría, título, resumen y enlace. */
export default function TopicCard({ href, categoryLabel, title, excerpt, image, imageAlt = "", onSelect }: TopicCardProps) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
    >
      {image && (
        <div className="relative aspect-16/10 bg-black/5">
          <Image
            src={image}
            alt={imageAlt}
            fill
            unoptimized={image.startsWith("http")}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-(--amber-dark)">{categoryLabel}</p>
        <h3
          className="mt-2 text-lg leading-snug text-(--charcoal)"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-(--mid)">{excerpt}</p>
        <span className="mt-auto inline-flex min-h-11 items-center self-start pt-4 text-sm font-semibold text-(--amber-dark) group-hover:underline group-hover:underline-offset-4">
          Leer artículo →
        </span>
      </div>
    </Link>
  );
}
