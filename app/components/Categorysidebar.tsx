"use client";

import { useState } from "react";
import { Category } from "../data/cats";
import { useI18n } from "../i18n/I18nContext";

interface Selection {
  categorySlug: string;
  subcategorySlug: string;
  topicSlug: string;
}

interface CategorySidebarProps {
  categories: Category[];
  selection: Selection | null;
  onSelect: (sel: Selection) => void;
}

export default function CategorySidebar({
  categories,
  selection,
  onSelect,
}: CategorySidebarProps) {
  const { t } = useI18n();
  const [openCat, setOpenCat] = useState<string | null>(
    selection?.categorySlug ?? null
  );
  const [openSub, setOpenSub] = useState<string | null>(
    selection?.subcategorySlug ?? null
  );

  function toggleCat(slug: string) {
    setOpenCat((prev) => (prev === slug ? null : slug));
    setOpenSub(null);
  }

  function toggleSub(slug: string) {
    setOpenSub((prev) => (prev === slug ? null : slug));
  }

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleSelect(sel: Selection) {
    onSelect(sel);
    setMobileOpen(false);
  }

  function handleToggleCat(slug: string) {
    toggleCat(slug);
  }

  const sidebarContent = (
    <>
      {/* Header */}
      <div
        style={{
          padding: "1.25rem 1.25rem 0.75rem",
          borderBottom: "1px solid rgba(201,180,154,0.2)",
        }}
      >
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c9b49a",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {t('sidebar_explore')}
        </p>
      </div>

      {/* Category list */}
      <nav>
        {categories.map((cat) => {
          const isCatOpen = openCat === cat.slug;
          const isCatActive = selection?.categorySlug === cat.slug;

          return (
            <div key={cat.slug}>
              {/* Category row */}
              <button
                onClick={() => handleToggleCat(cat.slug)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: isCatOpen
                    ? `${cat.color}0d`
                    : "none",
                  border: "none",
                  borderLeft: isCatActive
                    ? `3px solid ${cat.color}`
                    : "3px solid transparent",
                  cursor: "pointer",
                  padding: "0.7rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  transition: "background 0.15s",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: isCatActive ? 600 : 500,
                    color: isCatActive ? cat.color : "#2c2416",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{cat.emoji}</span>
                  {cat.label}
                </span>
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: "#c9b49a",
                    transform: isCatOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                    lineHeight: 1,
                  }}
                >
                  ▾
                </span>
              </button>

              {/* Subcategory list */}
              {isCatOpen && (
                <div
                  style={{
                    background: `${cat.color}06`,
                    borderBottom: `1px solid ${cat.color}15`,
                  }}
                >
                  {cat.subcategories.map((sub) => {
                    const isSubOpen = openSub === sub.slug;
                    const isSubActive = selection?.subcategorySlug === sub.slug;

                    return (
                      <div key={sub.slug}>
                        {/* Subcategory row */}
                        <button
                          onClick={() => toggleSub(sub.slug)}
                          style={{
                            width: "100%",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "0.55rem 1.25rem 0.55rem 2.25rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8rem",
                            fontWeight: isSubActive ? 600 : 400,
                            color: isSubActive ? cat.color : "#6b5c44",
                            transition: "color 0.15s",
                          }}
                        >
                          {sub.label}
                          <span
                            style={{
                              fontSize: "0.55rem",
                              color: "#c9b49a",
                              transform: isSubOpen ? "rotate(180deg)" : "none",
                              transition: "transform 0.2s",
                            }}
                          >
                            ▾
                          </span>
                        </button>

                        {/* Topic list */}
                        {isSubOpen && (
                          <div>
                            {sub.topics.map((topic) => {
                              const isTopicActive =
                                selection?.topicSlug === topic.slug;

                              return (
                                <button
                                  key={topic.slug}
                                  onClick={() =>
                                    handleSelect({
                                      categorySlug: cat.slug,
                                      subcategorySlug: sub.slug,
                                      topicSlug: topic.slug,
                                    })
                                  }
                                  style={{
                                    width: "100%",
                                    textAlign: "left",
                                    background: isTopicActive
                                      ? `${cat.color}18`
                                      : "none",
                                    border: "none",
                                    borderLeft: isTopicActive
                                      ? `2px solid ${cat.color}`
                                      : "2px solid transparent",
                                    cursor: "pointer",
                                    padding: "0.45rem 1rem 0.45rem 3rem",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.78rem",
                                    fontWeight: isTopicActive ? 600 : 400,
                                    color: isTopicActive ? cat.color : "#6b5c44",
                                    lineHeight: 1.3,
                                    transition: "all 0.15s",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isTopicActive)
                                      (e.currentTarget as HTMLElement).style.color =
                                        "#2c2416";
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isTopicActive)
                                      (e.currentTarget as HTMLElement).style.color =
                                        "#6b5c44";
                                  }}
                                >
                                  {topic.title}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="show-mobile"
        onClick={() => setMobileOpen(true)}
        style={{
          position: "fixed", bottom: 80, right: 16, zIndex: 100,
          width: 48, height: 48, borderRadius: "50%",
          background: "#d4853a", color: "#fff", border: "none",
          boxShadow: "0 4px 16px rgba(212,133,58,0.4)",
          cursor: "pointer", fontSize: "1.2rem",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="Abrir menú"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M3 12h18" />
          <path d="M3 6h18" />
          <path d="M3 18h18" />
        </svg>
      </button>

      {/* Desktop sidebar */}
      <aside className="hide-mobile" style={{
        width: 260,
        flexShrink: 0,
        borderRight: "1px solid rgba(201,180,154,0.3)",
        overflowY: "auto",
        height: "calc(100vh - 60px)",
        position: "sticky",
        top: 60,
      }}>
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 500,
            background: "rgba(0,0,0,0.3)",
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: "85%", maxWidth: 320,
              background: "#fdf6ec",
              overflowY: "auto",
              boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
              animation: "slideIn 0.2s ease",
            }}
          >
            {sidebarContent}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}