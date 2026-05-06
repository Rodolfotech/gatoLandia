"use client";
import { useI18n } from "../i18n/I18nContext";
import { Category, Subcategory, Topic } from "../data/cats";

// Enhanced markdown: handles **bold**, line breaks, list items, and emojis
function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    // Handle table-like structures (lines with | separator)
    if (line.includes('|') && line.trim().startsWith('|')) {
      const cells = line.split('|').filter(c => c.trim());
      return (
        <div key={lineIdx} style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cells.length}, 1fr)`,
          gap: "0.5rem",
          padding: "0.5rem 0",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
          {cells.map((cell, i) => (
            <div key={i} style={{
              fontSize: "0.85rem",
              color: lineIdx === 0 ? "#2c2416" : "#4a3d2c",
              fontWeight: lineIdx === 0 ? 600 : 400,
            }}>
              {renderInlineMarkdown(cell.trim())}
            </div>
          ))}
        </div>
      );
    }
    
    // Handle list items (•, -, etc.)
    if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*')) {
      return (
        <div key={lineIdx} style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "0.35rem",
          paddingLeft: "1rem",
        }}>
          <span style={{ color: "#c9b49a", flexShrink: 0 }}>•</span>
          <span style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a3d2c" }}>
            {renderInlineMarkdown(line.replace(/^[•\-\*]\s*/, ''))}
          </span>
        </div>
      );
    }
    
    // Handle numbered items (1., 2., etc.)
    if (/^\d+\.\s/.test(line.trim())) {
      const num = line.trim().match(/^(\d+)\./)?.[1];
      return (
        <div key={lineIdx} style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "0.35rem",
          paddingLeft: "1rem",
        }}>
          <span style={{ 
            color: "#fff", 
            background: "#d4853a", 
            borderRadius: "50%", 
            width: 20, 
            height: 20, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            fontSize: "0.7rem",
            fontWeight: 700,
            flexShrink: 0,
          }}>
            {num}
          </span>
          <span style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a3d2c" }}>
            {renderInlineMarkdown(line.replace(/^\d+\.\s/, ''))}
          </span>
        </div>
      );
    }
    
    // Handle warning/info boxes (lines starting with emojis like 🚨, ✅, ⚠️)
    if (/^[🚨🟡⚠️✅❌🔹🔸📌📋🩺🏥🍽️🐾🧬📚🎁⏱️🔪🚫📈📉🌿]/.test(line.trim())) {
      return (
        <div key={lineIdx} style={{
          background: "rgba(212, 133, 58, 0.06)",
          borderLeft: "3px solid #d4853a",
          padding: "0.75rem 1rem",
          borderRadius: "0 8px 8px 0",
          marginBottom: "0.75rem",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "#4a3d2c",
        }}>
          {renderInlineMarkdown(line)}
        </div>
      );
    }
    
    // Regular paragraph
    if (line.trim()) {
      return (
        <p key={lineIdx} style={{
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#4a3d2c",
          marginBottom: "0.75rem",
        }}>
          {renderInlineMarkdown(line)}
        </p>
      );
    }
    
    // Empty line = spacing
    return <div key={lineIdx} style={{ height: "0.5rem" }} />;
  });
}

// Inline markdown: handles **bold**
function renderInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ fontWeight: 700, color: "#2c2416" }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

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
  const { t } = useI18n();
  
  return (
    <article
      style={{
        flex: 1,
        padding: "3rem 3.5rem",
        maxWidth: 900,
        fontFamily: "'Inter', 'DM Sans', sans-serif",
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
      <div
        style={{
          fontSize: "1.05rem",
          color: "#6b5c44",
          lineHeight: 1.75,
          marginBottom: "2.5rem",
          paddingBottom: "2rem",
          borderBottom: `2px solid ${category.color}20`,
        }}
      >
        {renderMarkdown(topic.intro)}
      </div>

      {/* Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {topic.sections.map((section, i) => (
          <section key={section.heading}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: `${category.color}18`,
                  border: `1.5px solid ${category.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
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
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#2c2416",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {section.heading}
              </h2>
            </div>
            <div
              style={{
                paddingLeft: "3rem",
                margin: 0,
              }}
            >
              {renderMarkdown(section.body)}
            </div>
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
              transition: "all 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = category.color + "60";
              el.style.boxShadow = `0 4px 16px ${category.color}10`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(201,180,154,0.4)";
              el.style.boxShadow = "none";
            }}
          >
            <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c9b49a", margin: "0 0 0.3rem" }}>
              {t('topic_prev')}
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
              transition: "all 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = category.color + "70";
              el.style.boxShadow = `0 4px 16px ${category.color}15`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = category.color + "30";
              el.style.boxShadow = "none";
            }}
          >
            <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c9b49a", margin: "0 0 0.3rem" }}>
              {t('topic_next')}
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
