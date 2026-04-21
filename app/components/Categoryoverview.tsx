"use client";

import { Category } from "../data/cats";

interface CategoryOverviewProps {
  category: Category;
  onTopicSelect: (catSlug: string, subSlug: string, topicSlug: string) => void;
}

export default function CategoryOverview({
  category,
  onTopicSelect,
}: CategoryOverviewProps) {
  return (
    <div
      style={{
        flex: 1,
        padding: "3rem 3.5rem",
        maxWidth: 860,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.3rem 0.9rem",
            background: `${category.color}15`,
            borderRadius: 999,
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: category.color,
            fontWeight: 600,
            marginBottom: "1.25rem",
          }}
        >
          <span>{category.emoji}</span>
          {category.label}
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#2c2416",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
            letterSpacing: "-0.025em",
          }}
        >
          {category.label}
        </h1>
        <p style={{ fontSize: "1rem", color: "#6b5c44", lineHeight: 1.6 }}>
          {category.description}
        </p>
      </div>

      {/* Subcategories */}
      {category.subcategories.map((sub) => (
        <div key={sub.slug} style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#2c2416",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
              borderBottom: `1.5px solid ${category.color}20`,
            }}
          >
            {sub.label}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {sub.topics.map((topic) => (
              <button
                key={topic.slug}
                onClick={() =>
                  onTopicSelect(category.slug, sub.slug, topic.slug)
                }
                style={{
                  textAlign: "left",
                  background: "#fff",
                  border: `1px solid rgba(201,180,154,0.35)`,
                  borderRadius: 12,
                  padding: "1.1rem 1.25rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = category.color + "50";
                  el.style.boxShadow = `0 4px 16px ${category.color}12`;
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201,180,154,0.35)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#2c2416",
                    margin: "0 0 0.4rem",
                    lineHeight: 1.3,
                  }}
                >
                  {topic.title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#8a7560",
                    lineHeight: 1.5,
                    margin: "0 0 0.75rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {topic.intro}
                </p>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: category.color,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  Leer tema →
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}