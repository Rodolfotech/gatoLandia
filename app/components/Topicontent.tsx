"use client";
import { useEffect } from "react";
import { useI18n } from "../i18n/I18nContext";
import { Category, Subcategory, Topic } from "../data/cats";
import Pagination from "./Pagination";
import AdBanner from "./AdBanner";

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
  pageIndex: number;
  totalPages: number;
  onNavigate: (topicSlug: string) => void;
}

export default function TopicContent({
  category,
  subcategory,
  topic,
  nextTopic,
  prevTopic,
  pageIndex,
  totalPages,
  onNavigate,
}: TopicContentProps) {
  const { t } = useI18n();

  useEffect(() => {
    const siteName = "Gatitos · Enciclopedia Felina";
    const path = `/${category.slug}/${subcategory.slug}/${topic.slug}`;
    const desc = topic.intro.replace(/\*\*/g, "").slice(0, 160);

    let cancelled = false;

    function apply(titleText: string, descText: string, kw?: string) {
      if (cancelled) return;
      const title = `${titleText} · ${siteName}`;
      const url = `https://gatitos.cl/${category.slug}/${subcategory.slug}/${topic.slug}`;

      document.title = title;

      const setMeta = (name: string, content: string, property = false) => {
        const attr = property ? "property" : "name";
        let el = document.querySelector(`meta[${attr}="${name}"]`);
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(attr, name);
          document.head.appendChild(el);
        }
        el.setAttribute("content", content);
      };

      setMeta("description", descText);
      setMeta("keywords", kw || "");
      setMeta("og:title", title, true);
      setMeta("og:description", descText, true);
      setMeta("og:url", url, true);
      setMeta("og:site_name", siteName, true);
      setMeta("twitter:title", title);
      setMeta("twitter:description", descText);
      setMeta("twitter:url", url);

      const sectionsLd = topic.sections.map((s) => ({
        "@type": "ListItem",
        position: topic.sections.indexOf(s) + 1,
        item: { "@type": "Article", headline: s.heading, description: s.body.replace(/\*\*/g, "").slice(0, 200) },
      }));

      const ld = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: topic.title,
        description: descText,
        url,
        author: { "@type": "Organization", name: siteName },
        about: category.label,
        isPartOf: { "@type": "WebPage", name: subcategory.label, url: `https://gatitos.cl/${category.slug}/${subcategory.slug}` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(sectionsLd.length > 0 ? { hasPart: sectionsLd } : {}),
      });

      let ldEl = document.querySelector('script[type="application/ld+json"]');
      if (!ldEl) {
        ldEl = document.createElement("script");
        ldEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(ldEl);
      }
      ldEl.textContent = ld;
    }

    fetch("/api/seo-data")
      .then((r) => r.json())
      .then((overrides) => {
        const o = overrides[path];
        apply(o?.title || topic.title, o?.description || desc, o?.keywords);
      })
      .catch(() => apply(topic.title, desc));

    return () => {
      cancelled = true;
      document.title = siteName;
      const removeMeta = (name: string, property = false) => {
        const attr = property ? "property" : "name";
        document.querySelector(`meta[${attr}="${name}"]`)?.remove();
      };
      removeMeta("description");
      removeMeta("keywords");
      removeMeta("og:title", true);
      removeMeta("og:description", true);
      removeMeta("og:url", true);
      removeMeta("og:site_name", true);
      removeMeta("twitter:title");
      removeMeta("twitter:description");
      removeMeta("twitter:url");
      document.querySelector('script[type="application/ld+json"]')?.remove();
    };
  }, [topic, category, subcategory]);
  
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
                display: "flex",
                gap: section.image || section.adSlot ? "2rem" : 0,
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                {renderMarkdown(section.body)}
              </div>
              {(section.image || section.adSlot) && (
                <div
                  style={{
                    width: 280,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.heading}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 12,
                      }}
                    />
                  )}
                  {section.adSlot && (
                    <AdBanner dataAdSlot={section.adSlot} dataAdFormat="auto" style={{ display: "block" }} />
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <Pagination
        current={pageIndex}
        total={totalPages}
        hasPrev={!!prevTopic}
        hasNext={!!nextTopic}
        color={category.color}
        onPrev={() => onNavigate(prevTopic!.slug)}
        onNext={() => onNavigate(nextTopic!.slug)}
        prevLabel={t('topic_prev_label')}
        nextLabel={t('topic_next_label')}
      />
    </article>
  );
}
