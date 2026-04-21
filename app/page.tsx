"use client";

import { useState } from "react";
import Navbar, { ContentType } from "./components/Navbar";
import Footer from "./components/Footer";
// Busca una línea similar a esta al principio del archivo
import  CategorySidebar  from '@/app/components/Categorysidebar'; 
import  CategoryOverview  from '@/app/components/Categoryoverview'
import  TopicContent  from '@/app/components/Topicontent'

import { categories, getCategory, getSubcategory, getTopic } from "./data/cats";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Selection {
  categorySlug: string;
  subcategorySlug: string;
  topicSlug: string;
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [activeCatSlug, setActiveCatSlug] = useState<string | null>(null);
  const [activeContentType, setActiveContentType] = useState<ContentType>("enciclopedia");

  // Datos derivados para la vista actual
  const currentCat    = activeCatSlug ? getCategory(activeCatSlug) : null;
  const currentSub    = selection ? getSubcategory(selection.categorySlug, selection.subcategorySlug) : null;
  const currentTopic  = selection ? getTopic(selection.categorySlug, selection.subcategorySlug, selection.topicSlug) : null;

  // Lógica de navegación Anterior / Siguiente
  const siblingTopics = currentSub?.topics ?? [];
  const topicIdx      = siblingTopics.findIndex((t) => t.slug === selection?.topicSlug);
  const prevTopic     = topicIdx > 0 ? siblingTopics[topicIdx - 1] : null;
  const nextTopic     = topicIdx < siblingTopics.length - 1 ? siblingTopics[topicIdx + 1] : null;

  // Handlers
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
      <Navbar
        categories={categories}
        activeCategorySlug={activeCatSlug}
        activeContentType={activeContentType}
        onLogoClick={handleLogoClick}
        onCategoryClick={selectTopic}
        onContentTypeChange={setActiveContentType}
      />

      {showExplorer ? (
        /* ── VISTA DEL EXPLORADOR ── */
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
        /* ── LANDING / HOME ── */
        <>
          <section
            style={{
              minHeight: "88vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(ellipse at 20% 50%, #ffe8c8 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #ffd9a8 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, #ffe0c0 0%, transparent 50%), #fdf6ec",
              position: "relative",
              overflow: "hidden",
              padding: "4rem 2rem",
            }}
          >
            {/* Elementos decorativos */}
            <div style={{ position: "absolute", top: "10%", right: "8%", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(212,133,58,0.15)" }} />
            <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 150, height: 150, borderRadius: "50%", background: "rgba(212,133,58,0.06)" }} />

            <div style={{ maxWidth: 900, textAlign: "center", position: "relative" }}>
              <div style={{ marginBottom: "1rem", fontSize: "5rem" }}>🐱</div>

              <div style={{
                display: "inline-block", padding: "0.3rem 1rem",
                background: "rgba(212,133,58,0.12)", borderRadius: 999,
                fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#a0622a", fontWeight: 500, marginBottom: "1.5rem",
              }}>
                Enciclopedia Felina Completa
              </div>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 900, lineHeight: 1.05, color: "#2c2416",
                marginBottom: "1.5rem", letterSpacing: "-0.03em",
              }}>
                El Universo<br />
                <em style={{ color: "#d4853a" }}>Felino</em>
              </h1>

              <p style={{
                fontSize: "1.1rem", color: "#6b5c44", maxWidth: 540,
                margin: "0 auto 3rem", lineHeight: 1.7, fontWeight: 300,
              }}>
                Todo lo que necesitas saber sobre los gatos, organizado por categorías, subcategorías y temas.
              </p>

              {/* Cards de Categorías */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "0.85rem",
              }}>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryTabClick(cat.slug)}
                    style={{
                      background: cat.bg,
                      border: `1px solid ${cat.color}30`,
                      borderRadius: 14, padding: "1.25rem 0.75rem",
                      cursor: "pointer", textAlign: "center",
                      transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
                    }}
                  >
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.4rem" }}>{cat.emoji}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#2c2416" }}>
                      {cat.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Estadísticas */}
          <section style={{ background: "#2c2416", color: "#fdf6ec", padding: "4rem 2rem" }}>
            <div style={{
              maxWidth: 900, margin: "0 auto",
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem", textAlign: "center",
            }}>
              {[
                { n: categories.length, label: "Categorías" },
                { n: categories.reduce((a, c) => a + c.subcategories.length, 0), label: "Subcategorías" },
                { n: categories.reduce((a, c) => a + c.subcategories.reduce((b, s) => b + s.topics.length, 0), 0), label: "Temas" },
                { n: "100%", label: "Felino" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "3rem", fontWeight: 900, color: "#d4853a" }}>{stat.n}</div>
                  <div style={{ fontSize: "0.85rem", color: "#c9b49a" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </>
      )}
    </main>
  );
}