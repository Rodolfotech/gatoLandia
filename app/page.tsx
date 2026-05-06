"use client";

import { useState } from "react";
import { useI18n } from "./i18n/I18nContext";
import Navbar, { ContentType } from "./components/Navbar";
import Footer from "./components/Footer";
import CategorySidebar from './components/Categorysidebar';
import CategoryOverview from './components/Categoryoverview';
import TopicContent from './components/Topicontent';
import { categories as defaultCategories, getCategory, getSubcategory, getTopic } from "./data/cats";
import ChatWidget from "./components/ChatWidget";

interface Selection {
  categorySlug: string;
  subcategorySlug: string;
  topicSlug: string;
}

export default function Home() {
  const { t, categories } = useI18n();
  const [selection, setSelection] = useState<Selection | null>(null);
  const [activeCatSlug, setActiveCatSlug] = useState<string | null>(null);
  const [activeContentType, setActiveContentType] = useState<ContentType>("enciclopedia");

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
      <Navbar
        categories={categories}
        activeCategorySlug={activeCatSlug}
        activeContentType={activeContentType}
        onLogoClick={handleLogoClick}
        onCategoryClick={selectTopic}
        onContentTypeChange={setActiveContentType}
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
          {/* ── HERO SECTION ── */}
          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `
                radial-gradient(ellipse at 20% 50%, rgba(212,133,58,0.08) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 20%, rgba(201,180,154,0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 60% 80%, rgba(255,224,196,0.15) 0%, transparent 50%),
                #fdf6ec
              `,
              position: "relative",
              overflow: "hidden",
              padding: "4rem 2rem",
            }}
          >
            {/* Decorative shapes */}
            <div style={{
              position: "absolute", top: "10%", right: "8%", width: 400, height: 400, borderRadius: "50%",
              border: "1px solid rgba(212,133,58,0.1)", background: "rgba(212,133,58,0.03)",
            }} />
            <div style={{
              position: "absolute", bottom: "10%", left: "5%", width: 200, height: 200, borderRadius: "50%",
              background: "rgba(201,180,154,0.08)",
            }} />

            <div style={{ maxWidth: 1100, textAlign: "center", position: "relative" }}>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.4rem 1.2rem",
                background: "rgba(212,133,58,0.1)", borderRadius: 999,
                fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" as const,
                color: "#a0622a", fontWeight: 500, marginBottom: "2rem",
              }}>
                <span style={{ fontSize: "0.9rem" }}>🐱</span>
                Conocimiento felino de expertos
              </div>

              {/* Main heading */}
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 900, lineHeight: 1.05, color: "#2c2416",
                marginBottom: "1.5rem", letterSpacing: "-0.03em",
              }}>
                Todo lo que tu gato<br />
                <em style={{ color: "#d4853a" }}>necesita</em> saber
              </h1>

              {/* Subtitle */}
              <p style={{
                fontSize: "1.15rem", color: "#6b5c44", maxWidth: 640,
                margin: "0 auto 3rem", lineHeight: 1.8, fontWeight: 300,
              }}>
                Desde cuidados neonatales hasta tenencia responsable.
                La enciclopedia definitiva para una convivencia feliz y saludable.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
                <button
                  onClick={() => handleCategoryTabClick('cuidado-gatito')}
                  style={{
                    padding: "0.85rem 2rem", borderRadius: 12,
                    background: "#d4853a", color: "#fff", border: "none",
                    fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,133,58,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Comenzar Guía →
                </button>
                <button
                  onClick={() => window.location.href = '/razas'}
                  style={{
                    padding: "0.85rem 2rem", borderRadius: 12,
                    background: "transparent", color: "#2c2416",
                    border: "1px solid rgba(201,180,154,0.5)",
                    fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                    e.currentTarget.style.borderColor = "rgba(201,180,154,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(201,180,154,0.5)";
                  }}
                >
                  🐾 Explorar Razas
                </button>
              </div>

              {/* Category Cards Preview */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem", maxWidth: 1000, margin: "0 auto",
              }}>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryTabClick(cat.slug)}
                    style={{
                      background: cat.bg,
                      border: `1px solid ${cat.color}25`,
                      borderRadius: 16, padding: "1.5rem 1rem",
                      cursor: "pointer", textAlign: "center",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-4px) scale(1.02)";
                      el.style.boxShadow = `0 12px 32px ${cat.color}15`;
                      el.style.borderColor = `${cat.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0) scale(1)";
                      el.style.boxShadow = "none";
                      el.style.borderColor = `${cat.color}25`;
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}></div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#2c2416", marginBottom: "0.3rem" }}>
                      {cat.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#8a7560" }}>
                      {cat.subcategories.reduce((a, s) => a + s.topics.length, 0)} temas
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

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

          {/* ── FEATURED CONTENT ── */}
          <section style={{
            padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto",
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700, color: "#2c2416",
              textAlign: "center", marginBottom: "3rem",
            }}>
              Contenido destacado
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}>
              {[
                { emoji: "🐾", title: "Guía Integral de Cuidado", desc: "Desde el neonato hasta la adultez: alimentación, salud y bienestar." },
                { emoji: "✨", title: "Tenencia Responsable", desc: "Marco ético y legal para una convivencia armónica y respetuosa." },
                { emoji: "💙", title: "Castración: Guía Familiar", desc: "Todo lo que niños y padres deben saber sobre esterilización." },
                { emoji: "🌍", title: "Impacto y Conciencia", desc: "El lado secreto de nuestros gatos y su efecto en el ecosistema." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "2rem", borderRadius: 16,
                    background: "rgba(253,246,236,0.8)",
                    border: "1px solid rgba(201,180,154,0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.emoji}</div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem", fontWeight: 700, color: "#2c2416",
                    marginBottom: "0.75rem",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6b5c44", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </>
      )}

      <ChatWidget />
    </main>
  );
}
