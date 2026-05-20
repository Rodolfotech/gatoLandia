"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n/I18nContext";
import { Category, Subcategory, Topic } from "../data/cats";
import Pagination from "./Pagination";
import AdBanner from "./AdBanner";
import ImageCarousel from "./ImageCarousel";

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
      const url = `https://gato-landia.vercel.app/${category.slug}/${subcategory.slug}/${topic.slug}`;

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
        isPartOf: { "@type": "WebPage", name: subcategory.label, url: `https://gato-landia.vercel.app/${category.slug}/${subcategory.slug}` },
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
      try {
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
      } catch {
        // Ignore cleanup errors on rapid navigation
      }
    };
  }, [topic, category, subcategory]);
  
  const mediaItems = topic.sections.filter(s => s.image || s.adSlot);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [carouselViewer, setCarouselViewer] = useState<{ images: { src: string; alt: string }[]; current: number } | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="topic-content-layout">
        <article
          style={{
            flex: 1,
            padding: "var(--page-padding-lg, 3.5rem) var(--page-padding, 3rem)",
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
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
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
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
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
                      display: section.heading === "Antes de empezar" ? "none" : "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: category.color,
                      marginTop: 2,
                    }}
                  >
                    {topic.sections.filter((_, idx) => idx < i && topic.sections[idx].heading !== "Antes de empezar").length + 1}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                      fontWeight: 700,
                      color: "#2c2416",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {section.heading}
                  </h2>
                </div>
                <div className="section-body">
                  {renderMarkdown(section.body)}
                </div>
              </section>
            ))}
          </div>
        </article>

        {(mediaItems.length > 0 || topic.slug === "adquisicion-responsable-global") && (
          <div className="topic-media-column">
            {topic.slug === "adquisicion-responsable-global" && (
              <>
                <div
                  onClick={() => setLightbox("https://i.postimg.cc/cdzbSmCv/Titulo-adquisicion-responsable.webp")}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 12,
                    cursor: "pointer",
                    marginTop: "10rem",
                  }}
                >
                  <Image
                    src="https://i.postimg.cc/cdzbSmCv/Titulo-adquisicion-responsable.webp"
                    alt=""
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
                  <ImageCarousel
                    images={[
                      { src: "https://i.postimg.cc/D7NMTg0z/Que-adquisicion.webp", alt: "Qué adquisición" },
                      { src: "https://i.postimg.cc/KmWH2NjG/Donde-Adquisicion.webp", alt: "Dónde adquirir" },
                      { src: "https://i.postimg.cc/Cw2QgN5L/Necesita-Adquisicion.webp", alt: "Necesita adquisición" },
                      { src: "https://i.postimg.cc/RvhDy8S4/Beneficios-Adquisicion.webp", alt: "Beneficios adquisición" },
                      { src: "https://i.postimg.cc/33qcTBNQ/Compromiso-Adquisicion.webp", alt: "Compromiso adquisición" },
                      { src: "https://i.postimg.cc/Gbt5VNLR/Banner-adquisicion.webp", alt: "Banner adquisición" },
                    ]}
                    onImageClick={(src) => {
                      const idx = [
                        { src: "https://i.postimg.cc/D7NMTg0z/Que-adquisicion.webp", alt: "Qué adquisición" },
                        { src: "https://i.postimg.cc/KmWH2NjG/Donde-Adquisicion.webp", alt: "Dónde adquirir" },
                        { src: "https://i.postimg.cc/Cw2QgN5L/Necesita-Adquisicion.webp", alt: "Necesita adquisición" },
                        { src: "https://i.postimg.cc/RvhDy8S4/Beneficios-Adquisicion.webp", alt: "Beneficios adquisición" },
                        { src: "https://i.postimg.cc/33qcTBNQ/Compromiso-Adquisicion.webp", alt: "Compromiso adquisición" },
                        { src: "https://i.postimg.cc/Gbt5VNLR/Banner-adquisicion.webp", alt: "Banner adquisición" },
                      ].findIndex(i => i.src === src);
                      setCarouselViewer({ images: [
                        { src: "https://i.postimg.cc/D7NMTg0z/Que-adquisicion.webp", alt: "Qué adquisición" },
                        { src: "https://i.postimg.cc/KmWH2NjG/Donde-Adquisicion.webp", alt: "Dónde adquirir" },
                        { src: "https://i.postimg.cc/Cw2QgN5L/Necesita-Adquisicion.webp", alt: "Necesita adquisición" },
                        { src: "https://i.postimg.cc/RvhDy8S4/Beneficios-Adquisicion.webp", alt: "Beneficios adquisición" },
                        { src: "https://i.postimg.cc/33qcTBNQ/Compromiso-Adquisicion.webp", alt: "Compromiso adquisición" },
                        { src: "https://i.postimg.cc/Gbt5VNLR/Banner-adquisicion.webp", alt: "Banner adquisición" },
                      ], current: idx });
                    }}
                  />
                </div>
                <div
                  onClick={() => setLightbox("https://i.postimg.cc/pPS6HZrr/recuerda-Adquisicion.webp")}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 12,
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="https://i.postimg.cc/pPS6HZrr/recuerda-Adquisicion.webp"
                    alt=""
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
              </>
            )}
            {topic.sections.map((section) => (
              (section.image || section.adSlot) && (
                <div key={section.heading} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {section.image === "https://i.postimg.cc/33qcTBN5/comida.webp" ? (
                    <>
                      <div style={{ marginTop: "8rem", marginBottom: "1.5rem" }}>
                        <ImageCarousel
                          images={[
                            { src: "https://i.postimg.cc/jR2Fm9s3/Alimento-Balanceado.webp", alt: "Alimento Balanceado" },
                            { src: "https://i.postimg.cc/Yt0sZVrK/Alimento-Porciones.webp", alt: "Alimento Porciones" },
                            { src: "https://i.postimg.cc/5fyRTGxD/Alimento-Esenciales.webp", alt: "Alimento Esenciales" },
                            { src: "https://i.postimg.cc/zqvc6MJd/Alimento-Agua.webp", alt: "Alimento Agua" },
                            { src: "https://i.postimg.cc/vGTNkjQN/Alimento-cambio.webp", alt: "Alimento Cambio" },
                            { src: "https://i.postimg.cc/MzHFN4WC/Alimento-Observa.webp", alt: "Alimento Observa" },
                            { src: "https://i.postimg.cc/Lm5bw79F/Alimento-Toxico.webp", alt: "Alimento Tóxico" },
                            { src: "https://i.postimg.cc/vGTNkjQq/Alimento-Bueno.webp", alt: "Alimento Bueno" },
                          ]}
                          onImageClick={(src) => {
                            const imgs = [
                              { src: "https://i.postimg.cc/jR2Fm9s3/Alimento-Balanceado.webp", alt: "Alimento Balanceado" },
                              { src: "https://i.postimg.cc/Yt0sZVrK/Alimento-Porciones.webp", alt: "Alimento Porciones" },
                              { src: "https://i.postimg.cc/5fyRTGxD/Alimento-Esenciales.webp", alt: "Alimento Esenciales" },
                              { src: "https://i.postimg.cc/zqvc6MJd/Alimento-Agua.webp", alt: "Alimento Agua" },
                              { src: "https://i.postimg.cc/vGTNkjQN/Alimento-cambio.webp", alt: "Alimento Cambio" },
                              { src: "https://i.postimg.cc/MzHFN4WC/Alimento-Observa.webp", alt: "Alimento Observa" },
                              { src: "https://i.postimg.cc/Lm5bw79F/Alimento-Toxico.webp", alt: "Alimento Tóxico" },
                              { src: "https://i.postimg.cc/vGTNkjQq/Alimento-Bueno.webp", alt: "Alimento Bueno" },
                            ];
                            setCarouselViewer({ images: imgs, current: imgs.findIndex(i => i.src === src) });
                          }}
                        />
                      </div>
                      <div
                        onClick={() => setLightbox(section.image!)}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: 12,
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={section.image!}
                          alt={section.heading}
                          fill
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 800px"
                          style={{ objectFit: "cover", objectPosition: "center top" }}
                        />
                      </div>
                    </>
                  ) : section.image === "https://i.postimg.cc/TTs4691m/toxico.webp" ? (
                    <div
                      onClick={() => setLightbox(section.image!)}
                      style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 12,
                        cursor: "pointer",
                        marginTop: "8rem",
                      }}
                    >
                      <Image
                        src={section.image!}
                        alt={section.heading}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 800px"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                      />
                    </div>
                  ) : section.image === "https://i.postimg.cc/BJzV0gbJ/dieta.webp" ? (
                    <>
                      <div
                        onClick={() => setLightbox("https://i.postimg.cc/1ydjQHXF/Titulo-Dietas.webp")}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: 12,
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src="https://i.postimg.cc/1ydjQHXF/Titulo-Dietas.webp"
                          alt=""
                          fill
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 800px"
                          style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                      </div>
                      <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                        <ImageCarousel
                          images={[
                            { src: "https://i.postimg.cc/KmWH2Nj2/Dieta-Barf.webp", alt: "Dieta Barf" },
                            { src: "https://i.postimg.cc/ZJQMScn4/Dieta-Fundamentos.webp", alt: "Dieta Fundamentos" },
                            { src: "https://i.postimg.cc/TTs4691x/Dieta-Beneficios.webp", alt: "Dieta Beneficios" },
                          ]}
                          onImageClick={(src) => {
                            const imgs = [
                              { src: "https://i.postimg.cc/KmWH2Nj2/Dieta-Barf.webp", alt: "Dieta Barf" },
                              { src: "https://i.postimg.cc/ZJQMScn4/Dieta-Fundamentos.webp", alt: "Dieta Fundamentos" },
                              { src: "https://i.postimg.cc/TTs4691x/Dieta-Beneficios.webp", alt: "Dieta Beneficios" },
                            ];
                            setCarouselViewer({ images: imgs, current: imgs.findIndex(i => i.src === src) });
                          }}
                        />
                      </div>
                      <div
                        onClick={() => setLightbox(section.image!)}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: 12,
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={section.image!}
                          alt={section.heading}
                          fill
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 800px"
                          style={{ objectFit: "cover", objectPosition: "center top" }}
                        />
                      </div>
                    </>
                  ) : section.image === "https://i.postimg.cc/ZJQMScRG/bienvenida.webp" ? (
                    <>
                      <div
                        onClick={() => setLightbox("https://i.postimg.cc/MzLFSDHX/Titulo-adopcion.webp")}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: 12,
                          cursor: "pointer",
                          marginTop: "10rem",
                        }}
                      >
                        <Image
                          src="https://i.postimg.cc/MzLFSDHX/Titulo-adopcion.webp"
                          alt=""
                          fill
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 800px"
                          style={{
                             objectFit: "contain", 
                             objectPosition: "center",
                             
                            }}
                        />
                      </div>
                      <div style={{ marginTop: "16rem", marginBottom: "1.5rem" }}>
                        <ImageCarousel
                          images={[
                            { src: "https://i.postimg.cc/D70MHD2x/Adopta.webp", alt: "Adopta No Compres" },
                            { src: "https://i.postimg.cc/nnrPg5FJ/Antes-adoptar.webp", alt: "Antes de adoptar" },
                            { src: "https://i.postimg.cc/6BqmgSWw/Beneficio-adoptar.webp", alt: "Beneficio de adoptar" },
                            { src: "https://i.postimg.cc/x984h7fj/Cada-historia.webp", alt: "Cada historia" },
                            { src: "https://i.postimg.cc/dJfxYB3K/Cuadro-agradecimiento.webp", alt: "Cuadro de agradecimiento" },
                            { src: "https://i.postimg.cc/fMPrNKyW/Ellos-necesitan.webp", alt: "Ellos necesitan" },
                            { src: "https://i.postimg.cc/8TY0SHcz/Proceso-adopcion.webp", alt: "Proceso de adopción" },
                          { src: "https://i.postimg.cc/y7GbHPxd/Recuerda.webp", alt: "Recuerda" },
                        ]}
                        onImageClick={(src) => {
                          const imgs = [
                            { src: "https://i.postimg.cc/D70MHD2x/Adopta.webp", alt: "Adopta No Compres" },
                            { src: "https://i.postimg.cc/nnrPg5FJ/Antes-adoptar.webp", alt: "Antes de adoptar" },
                            { src: "https://i.postimg.cc/6BqmgSWw/Beneficio-adoptar.webp", alt: "Beneficio de adoptar" },
                            { src: "https://i.postimg.cc/x984h7fj/Cada-historia.webp", alt: "Cada historia" },
                            { src: "https://i.postimg.cc/dJfxYB3K/Cuadro-agradecimiento.webp", alt: "Cuadro de agradecimiento" },
                            { src: "https://i.postimg.cc/fMPrNKyW/Ellos-necesitan.webp", alt: "Ellos necesitan" },
                            { src: "https://i.postimg.cc/8TY0SHcz/Proceso-adopcion.webp", alt: "Proceso de adopción" },
                            { src: "https://i.postimg.cc/y7GbHPxd/Recuerda.webp", alt: "Recuerda" },
                          ];
                          setCarouselViewer({ images: imgs, current: imgs.findIndex(i => i.src === src) });
                        }}
                      />
                      </div>
                  
                      <div
                        onClick={() => setLightbox(section.image!)}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          position: "relative",
                          overflow: "hidden",
                          borderRadius: 12,
                          cursor: "pointer",
                           marginTop: "12rem",
                        }}
                      >
                        <Image
                          src={section.image!}
                          alt={section.heading}
                          fill
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 800px"
                          style={{ objectFit: "cover", objectPosition: "center top" }}
                        />
                      </div>
                    </>
                  ) : section.image && (
                    <div
                      onClick={() => setLightbox(section.image!)}
                      style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 12,
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={section.image}
                        alt={section.heading}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 800px"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                      />
                    </div>
                  )}
                  {section.adSlot && (
                    <AdBanner dataAdSlot={section.adSlot} dataAdFormat="auto" style={{ display: "block" }} />
                  )}
                </div>
              )
            ))}
          </div>
        )}
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

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt=""
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              borderRadius: 8,
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      {carouselViewer && (
        <div
          onClick={() => setCarouselViewer(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCarouselViewer((prev) => {
                if (!prev) return null;
                const prevIdx = prev.current === 0 ? prev.images.length - 1 : prev.current - 1;
                return { ...prev, current: prevIdx };
              });
            }}
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            ‹
          </button>
          <img
            src={carouselViewer.images[carouselViewer.current].src}
            alt={carouselViewer.images[carouselViewer.current].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              borderRadius: 8,
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCarouselViewer((prev) => {
                if (!prev) return null;
                const nextIdx = prev.current === prev.images.length - 1 ? 0 : prev.current + 1;
                return { ...prev, current: nextIdx };
              });
            }}
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            ›
          </button>
          <button
            onClick={() => setCarouselViewer(null)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            ✕
          </button>
        </div>
      )}

      <style>{`
        .topic-content-layout {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }
        .topic-media-column {
          width: 700px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 3rem 0;
          flex-shrink: 0;
        }
        .section-body {
          padding-left: 3rem;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .topic-media-column {
            width: 400px;
          }
        }
        @media (max-width: 768px) {
          .topic-content-layout {
            flex-direction: column;
          }
          .topic-media-column {
            width: 100%;
            padding: 0 var(--page-padding, 1.25rem) 2rem;
            order: -1;
          }
          .section-body {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
