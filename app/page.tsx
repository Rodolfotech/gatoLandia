"use client";

import Link from "next/link";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "./i18n/I18nContext";
import ChatWidget from "./components/ChatWidget";
import { FeedControls, FeedResults } from "./components/ArticleFeed";
import { useArticleFeed } from "./lib/useArticleFeed";
import { setSearchQuery } from "./lib/searchStore";

function HomeFeed() {
  const { categories } = useI18n();
  const feed = useArticleFeed(categories);

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
            Todo lo que tu gato necesita saber
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

      <main id="articulos" className="page-shell scroll-mt-20 py-10">
        <FeedControls feed={feed} browsing showSearch={false} />
        <FeedResults feed={feed} />
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

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeRoute />
    </Suspense>
  );
}
