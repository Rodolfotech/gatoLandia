import Link from "next/link";
import type { Herramienta } from "../data/herramientas";

interface ArticleToolsProps {
  herramientas: Herramienta[];
}

/** Enlaces a las herramientas de la web que se relacionan con el tema del artículo. */
export default function ArticleTools({ herramientas }: ArticleToolsProps) {
  if (herramientas.length === 0) return null;

  return (
    <section aria-labelledby="herramientas-articulo-titulo" className="mt-10 rounded-2xl bg-(--amber)/10 p-5">
      <h2
        id="herramientas-articulo-titulo"
        className="mb-3 texto-titulo-s font-bold text-(--charcoal)"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Herramientas relacionadas
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {herramientas.map((h) => (
          <li key={h.href}>
            <Link
              href={h.href}
              className="flex h-full flex-col rounded-xl border border-black/10 bg-white p-4 transition hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
            >
              <span className="font-semibold text-(--charcoal)">{h.titulo}</span>
              <span className="mt-1 text-sm leading-relaxed text-(--mid)">{h.descripcion}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
