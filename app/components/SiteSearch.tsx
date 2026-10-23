"use client";

import { FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setSearchQuery, useSearchQuery } from "../lib/searchStore";

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--amber-dark)]";

interface SiteSearchProps {
  className?: string;
  /** Se llama al enviar la búsqueda (por ejemplo, para cerrar el menú móvil). */
  onSearch?: () => void;
}

/** Buscador de la barra superior. Filtra igual que el buscador del listado de artículos. */
export default function SiteSearch({ className, onSearch }: SiteSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchQuery();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch?.();
    if (pathname === "/") {
      document.getElementById("articulos")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // En un artículo el listado ya filtra al escribir: no hace falta salir de la página.
    if (pathname.startsWith("/categoria/")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const term = query.trim();
    router.push(term ? `/?q=${encodeURIComponent(term)}#articulos` : "/");
  }

  return (
    <form role="search" aria-label="Buscar artículos" data-feed-controls onSubmit={handleSubmit} className={className}>
      <input
        type="search"
        aria-label="Buscar artículos"
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar: vacunas, arenero, dieta…"
        className={`h-11 w-full rounded-full border border-black/10 bg-[#f5efe6] px-4 text-sm text-(--charcoal) placeholder:text-[#6b5c44] ${FOCUS_RING}`}
      />
    </form>
  );
}
