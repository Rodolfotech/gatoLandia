"use client";
import { Category, Subcategory, Topic } from "../data/cats";


interface TopicContentProps {
  category: Category;
  subcategory: Subcategory;
  topic: Topic;
  nextTopic: Topic | null;
  prevTopic: Topic | null;
  onNavigate: (topicSlug: string) => void;
}

export default function TopicContent({
  category,
  subcategory,
  topic,
  nextTopic,
  prevTopic,
  onNavigate,
}: TopicContentProps) {
  return (
    <article
      style={{
        flex: 1,
        padding: "3rem 3.5rem",
        maxWidth: 780,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Breadcrumb */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.75rem",
          color: "#c9b49a",
          marginBottom: "2rem",
        }}
      >
        <span>{category.emoji}</span>
        <span style={{ color: category.color, fontWeight: 500 }}>
          {category.label}
        </span>
        <span>›</span>
        <span>{subcategory.label}</span>
      </nav>

      {/* Title */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: 900,
          color: "#2c2416",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
          letterSpacing: "-0.02em",
        }}
      >
        {topic.title}
      </h1>

      {/* Intro */}
      <p
        style={{
          fontSize: "1.05rem",
          color: "#6b5c44",
          lineHeight: 1.75,
          marginBottom: "2.5rem",
          paddingBottom: "2rem",
          borderBottom: `2px solid ${category.color}20`,
        }}
      >
        {topic.intro}
      </p>

      {/* Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
        {topic.sections.map((section, i) => (
          <section key={section.heading}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: `${category.color}18`,
                  border: `1.5px solid ${category.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: category.color,
                  marginTop: 2,
                }}
              >
                {i + 1}
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#2c2416",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {section.heading}
              </h2>
            </div>
            <p
              style={{
                color: "#4a3d2c",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                paddingLeft: "2.75rem",
                margin: 0,
              }}
            >
              {section.body}
            </p>
          </section>
        ))}
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "3.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(201,180,154,0.3)",
        }}
      >
        {prevTopic && (
          <button
            onClick={() => onNavigate(prevTopic.slug)}
            style={{
              flex: 1,
              textAlign: "left",
              background: "#fff",
              border: "1px solid rgba(201,180,154,0.4)",
              borderRadius: 12,
              padding: "1rem 1.25rem",
              cursor: "pointer",
              transition: "border-color 0.2s, box-shadow 0.2s",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = category.color + "60";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${category.color}10`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,180,154,0.4)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c9b49a", margin: "0 0 0.3rem" }}>
              ← Anterior
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2c2416", margin: 0 }}>
              {prevTopic.title}
            </p>
          </button>
        )}
        {nextTopic && (
          <button
            onClick={() => onNavigate(nextTopic.slug)}
            style={{
              flex: 1,
              textAlign: "right",
              background: `${category.color}08`,
              border: `1px solid ${category.color}30`,
              borderRadius: 12,
              padding: "1rem 1.25rem",
              cursor: "pointer",
              transition: "border-color 0.2s, box-shadow 0.2s",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = category.color + "70";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${category.color}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = category.color + "30";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c9b49a", margin: "0 0 0.3rem" }}>
              Siguiente →
            </p>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: category.color, margin: 0 }}>
              {nextTopic.title}
            </p>
          </button>
        )}
      </div>
    </article>
  );
}