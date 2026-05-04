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

  return (
    <aside
      style={{
        width: 260,
        flexShrink: 0,
        borderRight: "1px solid rgba(201,180,154,0.3)",
        overflowY: "auto",
        height: "calc(100vh - 60px)",
        position: "sticky",
        top: 60,
      }}
    >
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
                onClick={() => toggleCat(cat.slug)}
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
                                    onSelect({
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
    </aside>
  );
}