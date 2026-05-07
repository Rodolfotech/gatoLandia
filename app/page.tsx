"use client";

import { useState } from "react";
import { useI18n } from "./i18n/I18nContext";
import { ContentType } from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import CategorySidebar from './components/Categorysidebar';
import CategoryOverview from './components/Categoryoverview';
import TopicContent from './components/Topicontent';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { categories as defaultCategories, getCategory, getSubcategory, getTopic } from "./data/cats";
import ChatWidget from "./components/ChatWidget";
import FeaturedContent from "./components/FeaturedContent";
import CategoryCards from "./components/CategoryCards";
import HeroSection from "./components/HeroSection";

interface Selection {
  categorySlug: string;
  subcategorySlug: string;
  topicSlug: string;
}

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, categories } = useI18n();
  const [selection, setSelection] = useState<Selection | null>(null);
  const [activeCatSlug, setActiveCatSlug] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeContentType, setActiveContentType] = useState<ContentType>("razas");

  const currentCat    = activeCatSlug ? categories.find(c => c.slug === activeCatSlug) ?? getCategory(activeCatSlug) : null;
  const currentSub    = selection ? categories.find(c => c.slug === selection.categorySlug)?.subcategories.find(s => s.slug === selection.subcategorySlug) ?? getSubcategory(selection.categorySlug, selection.subcategorySlug) : null;
  const currentTopic  = selection ? (() => {
    const cat = categories.find(c => c.slug === selection.categorySlug);
    const sub = cat?.subcategories.find(s => s.slug === selection.subcategorySlug);
    return sub?.topics.find(t => t.slug === selection.topicSlug) ?? getTopic(selection.categorySlug, selection.subcategorySlug, selection.topicSlug);
  })() : null;

  const siblingTopics = currentSub?.topics ?? [];
  const topicIdx      = siblingTopics.findIndex((t) => t.slug === selection?.topicSlug);
  const prevTopic     = topicIdx > 0 ? siblingTopics[topicIdx - 1] : null;
  const nextTopic     = topicIdx < siblingTopics.length - 1 ? siblingTopics[topicIdx + 1] : null;

  function selectTopic(catSlug: string, subSlug: string, topicSlug: string) {
    setSelection({ categorySlug: catSlug, subcategorySlug: subSlug, topicSlug });
    setActiveCatSlug(catSlug);
  }

  function handleLogoClick() {
    setSelection(null);
    setActiveCatSlug(null);
  }

  function handleCategoryTabClick(catSlug: string) {
    setActiveCatSlug(catSlug);
    setSelection(null);
  }

  const showExplorer = activeCatSlug !== null;

   return (
      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <CategoryBar
         categories={categories}
         activeCategorySlug={activeCatSlug}
         onCategoryClick={selectTopic}
         onLogoClick={handleLogoClick}
       />

       {showExplorer ? (
        <div style={{ display: "flex", flex: 1, background: "#fdf6ec" }}>
          <CategorySidebar
            categories={categories}
            selection={selection}
            onSelect={(sel) => selectTopic(sel.categorySlug, sel.subcategorySlug, sel.topicSlug)}
          />
          <div style={{ flex: 1, overflowY: "auto" }}>
            {currentTopic && currentCat && currentSub ? (
              <TopicContent
                category={currentCat}
                subcategory={currentSub}
                topic={currentTopic}
                prevTopic={prevTopic}
                nextTopic={nextTopic}
                onNavigate={(slug) =>
                  selectTopic(selection!.categorySlug, selection!.subcategorySlug, slug)
                }
              />
            ) : currentCat ? (
              <CategoryOverview
                category={currentCat}
                onTopicSelect={selectTopic}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <HeroSection
            heading={<>
              Todo lo que tu gato<br />
              <em style={{ color: "#d4853a" }}>necesita</em> saber
            </>}
            subtitle="Desde cuidados neonatales hasta tenencia responsable. La enciclopedia definitiva para una convivencia feliz y saludable."
            primaryCta={{ text: "Comenzar Guía →", onClick: () => handleCategoryTabClick('cuidado-gatito') }}
            secondaryCta={{ text: "🐾 Explorar Razas", onClick: () => window.location.href = '/razas' }}
          >
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
              fontWeight: 700, color: "#2c2416",
              textAlign: "center", marginBottom: "2rem",
            }}>
              Todo sobre el cuidado de nuestro compañero felino
            </h2>
            <CategoryCards
              categories={categories}
              onCategoryClick={handleCategoryTabClick}
              imageMap={{ salud: "CategoryCards/salud.png", comportamiento: "CategoryCards/comportamiento.png", alimentacion: "CategoryCards/alimentacion.png" }}
            />
          </HeroSection>

          {/* ── STATS SECTION ── */}
          <section style={{
            background: "#2c2416", color: "#fdf6ec", padding: "5rem 2rem",
          }}>
            <div style={{
              maxWidth: 1000, margin: "0 auto",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem", textAlign: "center",
            }}>
              {[
                { n: categories.length, label: "Categorías", suffix: "" },
                { n: categories.reduce((a, c) => a + c.subcategories.length, 0), label: "Subcategorías", suffix: "" },
                { n: categories.reduce((a, c) => a + c.subcategories.reduce((b, s) => b + s.topics.length, 0), 0), label: "Temas", suffix: "" },
                { n: "24/7", label: "Acompañamiento", suffix: "" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: "3.5rem", fontWeight: 900, color: "#d4853a",
                    fontFamily: "'Playfair Display', serif", lineHeight: 1,
                  }}>
                    {stat.n}{stat.suffix}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#c9b49a", marginTop: "0.5rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <FeaturedContent
            items={[
              { id: 1, title: "Guía Integral de Cuidado", desc: "Desde el neonato hasta la adultez: alimentación, salud y bienestar.", img: "cuidadoIntegral.png" },
              { id: 2, title: "Tenencia Responsable", desc: "Marco ético y legal para una convivencia armónica y respetuosa.", img: "tenenciaResponsable.png" },
              { id: 3, title: "Castración: Guía Familiar", desc: "Todo lo que niños y padres deben saber sobre esterilización.", img: "castracion.png" },
              { id: 4, title: "Impacto y Conciencia", desc: "El lado secreto de nuestros gatos y su efecto en el ecosistema.", img: "impactoConciencia.png" },
            ]}
          />
        </>
      )}

      <ChatWidget />
    </main>
  );
}
