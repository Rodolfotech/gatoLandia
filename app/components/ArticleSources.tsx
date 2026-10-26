import { formatCitation, type Source } from "@/app/data/sources";

interface ArticleSourcesProps {
  sources: Source[];
}

/** Lista de fuentes del artículo, al final del texto. */
export default function ArticleSources({ sources }: ArticleSourcesProps) {
  if (sources.length === 0) return null;

  return (
    <section aria-labelledby="fuentes-titulo" className="mt-10 border-t border-black/10 pt-6">
      <h2
        id="fuentes-titulo"
        className="mb-3 text-[1.1rem] font-bold text-(--charcoal)"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Fuentes y referencias
      </h2>
      <ol className="m-0 list-decimal space-y-2 pl-5 text-[0.85rem] leading-relaxed text-(--mid)">
        {sources.map((source) => (
          <li key={source.id}>{formatCitation(source)}</li>
        ))}
      </ol>
    </section>
  );
}
