"use client";

import Link from "next/link";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ChatWidget from "./ChatWidget";
import FeedBrowser from "./FeedBrowser";
import { setSearchQuery } from "../lib/searchStore";

const HERRAMIENTAS = [
  {
    titulo: "Calculadora de comida",
    descripcion: "Cuántos gramos de comida húmeda o seca necesita tu gato al día.",
    href: "/calculadora",
  },
  {
    titulo: "Edad en años humanos",
    descripcion: "Convierte la edad de tu gato y descubre los cuidados de su etapa de vida.",
    href: "/edad-gato",
  },
  {
    titulo: "¿Es tóxico para mi gato?",
    descripcion: "Semáforo para alimentos y plantas: verde, amarillo o rojo.",
    href: "/toxicos",
  },
];

function HomeFeed() {
  return (
    <div className="min-h-screen bg-(--cream)">
      <header className="border-b border-black/5 bg-white/60 py-12 md:py-16">
        <div className="page-shell">
          <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-(--amber-dark)">
            Enciclopedia felina en español
          </p>
          <h1
            className="mt-3 text-4xl leading-tight text-(--charcoal) md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            Entiende a tu gato, cuídalo mejor
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-(--mid)">
            Artículos sobre adopción, cuidados, salud, alimentación y comportamiento, escritos para quienes
            conviven con un gato.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#articulos"
              className="inline-flex min-h-11 items-center rounded-lg bg-(--amber-dark) px-5 text-sm font-semibold text-white hover:bg-[#8a5222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
            >
              Leer artículos
            </a>
            <Link
              href="/razas"
              className="inline-flex min-h-11 items-center rounded-lg border border-black/15 bg-white px-5 text-sm font-semibold text-(--charcoal) hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
            >
              Explorar razas
            </Link>
          </div>
          </div>
        </div>
      </header>

      <section aria-labelledby="herramientas-titulo" className="page-shell pt-10">
        <h2 id="herramientas-titulo" className="text-xl text-(--charcoal)" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Herramientas para tu gato
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {HERRAMIENTAS.map((h) => (
            <li key={h.href}>
              <Link
                href={h.href}
                className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
              >
                <span className="font-semibold text-(--charcoal)">{h.titulo}</span>
                <span className="mt-2 text-sm leading-relaxed text-(--mid)">{h.descripcion}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <main id="articulos" className="page-shell scroll-mt-20 py-10">
        <FeedBrowser />
      </main>

      <ChatWidget />
    </div>
  );
}

function HomeRoute() {
  const q = useSearchParams().get("q") ?? "";

  // Una búsqueda que llega por la URL (desde otra página) pasa al buscador compartido.
  useEffect(() => {
    setSearchQuery(q);
  }, [q]);

  return <HomeFeed />;
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeRoute />
    </Suspense>
  );
}
