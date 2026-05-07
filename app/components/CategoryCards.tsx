"use client";

import Image from "next/image";

interface Category {
  slug: string;
  label: string;
  color: string;
  subcategories: { topics: unknown[] }[];
}

interface Props {
  categories: Category[];
  onCategoryClick: (slug: string) => void;
  imageMap?: Record<string, string>;
}

export default function CategoryCards({ categories, onCategoryClick, imageMap }: Props) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "1rem", maxWidth: 1000, margin: "0 auto",
    }}>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onCategoryClick(cat.slug)}
          style={{
            textAlign: "left",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            borderRadius: 12,
            padding: "0 0 1.25rem 0",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(255, 255, 255, 0.95)";
            el.style.borderColor = cat.color;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = `0 8px 24px ${cat.color}15`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(255, 255, 255, 0.8)";
            el.style.borderColor = "rgba(0, 0, 0, 0.06)";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
          }}
        >
          {imageMap?.[cat.slug] && (
            <div style={{
              width: "100%",
              height: 120,
              position: "relative",
              overflow: "hidden",
            }}>
              <Image
                src={`/${imageMap[cat.slug]}`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 200px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          )}
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: cat.color,
            borderRadius: imageMap?.[cat.slug] ? "0" : "12px 0 0 12px",
            opacity: 0.6,
          }} />
          <div style={{ padding: imageMap?.[cat.slug] ? "1rem 1.25rem 0" : "1.25rem 1.25rem 0 1.5rem" }}>
            <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a", margin: "0 0 0.4rem", lineHeight: 1.3 }}>
              {cat.label}
            </p>
            <p style={{
              fontSize: "0.75rem", color: "#888", margin: 0, lineHeight: 1.5,
              display: "flex", alignItems: "center", gap: "0.3rem",
            }}>
              <span style={{
                background: "rgba(0, 0, 0, 0.04)",
                padding: "0.1rem 0.4rem",
                borderRadius: 10,
                fontSize: "0.7rem",
                fontWeight: 500,
              }}>
                {(() => {
                  const count = cat.subcategories.reduce((a, s) => a + s.topics.length, 0);
                  return `${count} ${count === 1 ? "tema" : "temas"}`;
                })()}
              </span>
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
