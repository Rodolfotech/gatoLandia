"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "../i18n/I18nContext";
import { Category, Subcategory, Topic, categories as allCats } from "../data/cats";
import Pagination from "./Pagination";
import AdBanner from "./AdBanner";
import AdSlot from "./AdSlot";
import FullImage from "./FullImage";
import { AD_SLOTS } from "@/app/lib/adSlots";
import ImageCarousel from "./ImageCarousel";
import BackButton from "./BackButton";
import { activateOnKey } from "@/app/lib/keyboardNav";
import EmergencyCard from "./EmergencyCard";
import { categoryImages } from "../data/categoryImages";

/** Miniatura de un tema: su primera imagen de sección o, si no tiene, la de su categoría. */
function topicImage(topic: Topic, categorySlug: string) {
  return topic.sections.find((s) => s.image)?.image ?? categoryImages[categorySlug] ?? null;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";
const SITE_NAME = "AlmaGatuna · Enciclopedia Felina";

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
  const parts = text.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ fontWeight: 700, color: "#2c2416" }}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={i} href={link[2]} style={{ color: "#a0622a", textDecoration: "underline", textUnderlineOffset: 3 }}>
          {link[1]}
        </Link>
      );
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

      // Primero los temas de la misma subcategoría, luego los de la misma categoría, y después el resto.
      const candidates: { cat: Category; sub: Subcategory; topic: Topic; score: number }[] = [];
      for (const c of allCats) {
        for (const s of c.subcategories) {
          for (const t of s.topics) {
            if (c.slug === category.slug && s.slug === subcategory.slug && t.slug === topic.slug) continue;
            const score = c.slug !== category.slug ? 0 : s.slug === subcategory.slug ? 2 : 1;
            candidates.push({ cat: c as unknown as Category, sub: s as unknown as Subcategory, topic: t as unknown as Topic, score });
          }
        }
      }
      const picks = candidates.sort((a, b) => b.score - a.score).slice(0, 4);

  useEffect(() => {
    const desc = topic.intro.replace(/\*\*/g, "").slice(0, 160);
    const url = `${SITE_URL}/${category.slug}/${subcategory.slug}/${topic.slug}`;

    const ld = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: category.label, item: `${SITE_URL}/${category.slug}` },
          { "@type": "ListItem", position: 3, name: subcategory.label, item: `${SITE_URL}/${category.slug}/${subcategory.slug}` },
          { "@type": "ListItem", position: 4, name: topic.title, item: url },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: topic.title,
        description: desc,
        url,
        author: { "@type": "Organization", name: SITE_NAME },
        about: category.label,
        isPartOf: { "@type": "WebPage", name: subcategory.label, url: `${SITE_URL}/${category.slug}/${subcategory.slug}` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#topic-intro"] },
      },
      ...(topic.sections.length > 0 ? [{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: topic.sections.map((s) => ({
          "@type": "Question",
          name: s.heading,
          acceptedAnswer: {
            "@type": "Answer",
            text: s.body.replace(/\*\*/g, "").slice(0, 500),
          },
        })),
      }] : []),
    ]);

    let ldEl = document.querySelector('script[type="application/ld+json"]');
    if (ldEl) {
      ldEl.textContent = ld;
    } else {
      ldEl = document.createElement("script");
      ldEl.setAttribute("type", "application/ld+json");
      ldEl.textContent = ld;
      document.head.appendChild(ldEl);
    }
  }, [topic, category, subcategory]);
  
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [carouselViewer, setCarouselViewer] = useState<{ images: { src: string; alt: string }[]; current: number } | null>(null);

  const articleRef = useRef<HTMLElement>(null);
  const [readProgress, setReadProgress] = useState(0);
  const readingMinutes = Math.max(
    1,
    Math.round(topic.sections.map((sec) => sec.body).join(" ").split(/\s+/).length / 200),
  );

  useEffect(() => {
    function update() {
      const el = articleRef.current;
      if (!el) return;
      const start = el.getBoundingClientRect().top + window.scrollY;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - start;
      const pct = total <= 0 ? 100 : Math.min(100, Math.max(0, Math.round((scrolled / total) * 100)));
      setReadProgress(pct);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [topic]);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isDialogOpen = lightbox !== null || carouselViewer !== null;

  // Mientras hay un visor abierto: el foco entra en "Cerrar", Tab no sale del visor,
  // Escape lo cierra y, al cerrarlo, el foco vuelve al elemento que lo abrió.
  useEffect(() => {
    if (!isDialogOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setCarouselViewer(null);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>("button");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [isDialogOpen]);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  // Resalta en el índice la sección que se está leyendo.
  useEffect(() => {
    const elements = topic.sections
      .map((_, i) => document.getElementById(`seccion-${i}`))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(Number(entry.target.id.replace("seccion-", "")));
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [topic]);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="page-shell topic-content-layout">
        <div className="topic-side">
          <BackButton />
        <details className="topic-toc" open>
              <summary>En este artículo</summary>
              <nav aria-label="Índice del artículo">
                <ol>
                  {topic.sections.map((section, i) =>
                    section.heading === "Antes de empezar" ? null : (
                      <li key={section.heading}>
                        <a
                          href={`#seccion-${i}`}
                          aria-current={activeSection === i ? "location" : undefined}
                        >
                          {section.heading}
                        </a>
                      </li>
                    )
                  )}
                </ol>
              </nav>
              <div style={{ marginTop: "1rem" }}>
                <div
                  role="progressbar"
                  aria-label="Progreso de lectura"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={readProgress}
                  style={{ height: 6, borderRadius: 999, background: "rgba(201,180,154,0.35)", overflow: "hidden" }}
                >
                  <div style={{ width: `${readProgress}%`, height: "100%", background: "var(--amber-dark)", transition: "width 150ms linear" }} />
                </div>
                <p style={{ margin: "0.4rem 0 0", fontSize: "0.75rem", color: "var(--mid)" }}>Leído {readProgress}%</p>
              </div>
            </details>
        </div>
        <article
          ref={articleRef}
          style={{
            minWidth: 0,
            padding: "2.5rem 0 3rem",
            fontFamily: "'Inter', 'DM Sans', sans-serif",
          }}
        >
          {/* Eyebrow: categoría, subcategoría y tiempo de lectura */}
          <p style={{ margin: "0 0 0.75rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber-dark)" }}>
            {category.label} · {subcategory.label}
          </p>
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
          <p style={{ margin: "0 0 1.5rem", fontSize: "0.85rem", color: "var(--mid)" }}>{readingMinutes} min de lectura</p>

          {/* Intro / Direct Answer */}
          <div
            id="topic-intro"
            style={{
              background: "#fffbf5",
              border: "1px solid rgba(201, 180, 154, 0.45)",
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "#4a3d2c",
              lineHeight: 1.75,
            }}>
              {renderMarkdown(topic.intro)}
            </div>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {topic.sections.map((section, i) => (
              <Fragment key={section.heading}>
              <section id={`seccion-${i}`} style={{ scrollMarginTop: "6rem" }}>
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
                      display: section.heading === "Antes de empezar" ? "none" : "block",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--amber-dark)",
                      marginTop: 4,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(topic.sections.filter((_, idx) => idx < i && topic.sections[idx].heading !== "Antes de empezar").length + 1).padStart(2, "0")}
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
              {i === 1 && <AdSlot slot={AD_SLOTS.articulo} />}
              </Fragment>
            ))}
          </div>
          <p
            style={{
              marginTop: "2.5rem",
              padding: "1rem 1.25rem",
              borderRadius: 12,
              background: "rgba(160, 98, 42, 0.06)",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "#6b5c44",
            }}
          >
            Esta información es orientativa y no sustituye la consulta veterinaria. Ante cualquier duda sobre la salud o el comportamiento de su gato, consulte con su veterinario.
          </p>
        </article>

        {(
          <div className="topic-media-column">
            <EmergencyCard />
            {/* También te puede interesar */}
        {(() => {
          if (picks.length === 0) return null;
          return (
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#2c2416",
                marginBottom: "1rem",
              }}>
                También te puede interesar
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.75rem",
              }}>
                {picks.map(({ cat, sub, topic }) => (
                  <a
                    key={`${cat.slug}-${sub.slug}-${topic.slug}`}
                    href={`/categoria/${cat.slug}/${sub.slug}/${topic.slug}`}
                    style={{
                      textAlign: "left",
                      background: "rgba(0,0,0,0.02)",
                      border: "1px solid rgba(201,180,154,0.3)",
                      borderRadius: 10,
                      padding: "0.85rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = cat.color + "50";
                      el.style.background = cat.color + "08";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(201,180,154,0.3)";
                      el.style.background = "rgba(0,0,0,0.02)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {topicImage(topic, cat.slug) && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={topicImage(topic, cat.slug) ?? undefined}
                        alt=""
                        width={56}
                        height={56}
                        loading="lazy"
                        style={{ flexShrink: 0, width: 56, height: 56, borderRadius: 8, objectFit: "cover" }}
                      />
                    )}
                    <div style={{ minWidth: 0 }}>
                    <span style={{
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: cat.color,
                      fontWeight: 600,
                    }}>
                      {cat.label} · {sub.label}
                    </span>
                    <p style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#2c2416",
                      margin: "0.3rem 0 0",
                      lineHeight: 1.3,
                    }}>
                      {topic.title}
                    </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })()}
            {topic.slug === "adquisicion-responsable-global" && (
              <>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Ampliar imagen: adquisición responsable"
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                  onKeyDown={activateOnKey(() => setLightbox("/images/titulo-adquisicion-responsable.webp"))}
                  onClick={() => setLightbox("/images/titulo-adquisicion-responsable.webp")}
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
                    src="/images/titulo-adquisicion-responsable.webp"
                    alt="Adquisición responsable: un compromiso para toda su vida. Adquirir un gatito es una decisión importante que implica amor, responsabilidad y compromiso. No es solo tener un gatito, es darle un hogar y una vida feliz."
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
                  <ImageCarousel
                    images={[
                      { src: "/images/que-adquisicion.webp", alt: "Qué adquisición" },
                      { src: "/images/donde-adquisicion.webp", alt: "Dónde adquirir" },
                      { src: "/images/necesita-adquisicion.webp", alt: "Necesita adquisición" },
                      { src: "/images/beneficios-adquisicion.webp", alt: "Beneficios adquisición" },
                      { src: "/images/compromiso-adquisicion.webp", alt: "Compromiso adquisición" },
                      { src: "/images/banner-adquisicion.webp", alt: "Banner adquisición" },
                    ]}
                    onImageClick={(src) => {
                      const idx = [
                        { src: "/images/que-adquisicion.webp", alt: "Qué adquisición" },
                        { src: "/images/donde-adquisicion.webp", alt: "Dónde adquirir" },
                        { src: "/images/necesita-adquisicion.webp", alt: "Necesita adquisición" },
                        { src: "/images/beneficios-adquisicion.webp", alt: "Beneficios adquisición" },
                        { src: "/images/compromiso-adquisicion.webp", alt: "Compromiso adquisición" },
                        { src: "/images/banner-adquisicion.webp", alt: "Banner adquisición" },
                      ].findIndex(i => i.src === src);
                      setCarouselViewer({ images: [
                        { src: "/images/que-adquisicion.webp", alt: "Qué adquisición" },
                        { src: "/images/donde-adquisicion.webp", alt: "Dónde adquirir" },
                        { src: "/images/necesita-adquisicion.webp", alt: "Necesita adquisición" },
                        { src: "/images/beneficios-adquisicion.webp", alt: "Beneficios adquisición" },
                        { src: "/images/compromiso-adquisicion.webp", alt: "Compromiso adquisición" },
                        { src: "/images/banner-adquisicion.webp", alt: "Banner adquisición" },
                      ], current: idx });
                    }}
                  />
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Ampliar imagen: recuerda"
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                  onKeyDown={activateOnKey(() => setLightbox("/images/recuerda-adquisicion.webp"))}
                  onClick={() => setLightbox("/images/recuerda-adquisicion.webp")}
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
                    src="/images/recuerda-adquisicion.webp"
                    alt="Recuerda: un gatito no es un juguete ni un capricho pasajero. Es un ser vivo que siente, necesita amor y depende de ti. ¡Elige con el corazón y actúa con responsabilidad!"
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
                  {section.image && (
                    <div
                      role="button"
                      tabIndex={0}
                      aria-label={`Ampliar imagen: ${section.heading}`}
                      className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                      onKeyDown={activateOnKey(() => setLightbox(section.image!))}
                      onClick={() => setLightbox(section.image!)}
                      style={{
                        width: "100%",
                        aspectRatio: "auto",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 16,
                        background: "#fffbf5",
                        border: "1px solid rgba(201, 180, 154, 0.45)",
                        padding: "0.75rem",
                        boxShadow: "0 2px 10px rgba(44, 36, 22, 0.06)",
                        cursor: "pointer",
                      }}
                    >
                      {section.image.endsWith(".svg") ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={section.image}
                          alt={section.heading}
                          style={{ display: "block", width: "100%", height: "auto" }}
                        />
                      ) : (
                        <FullImage
                          src={section.image}
                          alt={section.heading}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="rounded-[10px]"
                        />
                      )}
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

      {/* Preguntas relacionadas — People Also Ask pattern */}
      {subcategory.topics.length > 1 && (
        <section style={{
          maxWidth: 900,
          padding: "2rem var(--page-padding, 3rem) 0",
          margin: "0 auto",
          width: "100%",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#2c2416",
            marginBottom: "1rem",
          }}>
            Preguntas relacionadas sobre {subcategory.label.toLowerCase()}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {subcategory.topics
              .filter(t => t.slug !== topic.slug)
              .map(t => (
                <a
                  key={t.slug}
                  href={`/categoria/${category.slug}/${subcategory.slug}/${t.slug}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(t.slug); }}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(201,180,154,0.25)",
                    padding: "0.75rem 0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9rem",
                    color: "#4a3d2c",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = category.color}
                  onMouseLeave={e => e.currentTarget.style.color = "#4a3d2c"}
                >
                  <span style={{ color: category.color, fontSize: "0.7rem" }}>▸</span>
                  {t.title}
                </a>
              ))}
          </div>
        </section>
      )}


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
        unitLabel="Tema"
      />

      {lightbox && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
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
          <button
            ref={closeRef}
            type="button"
            aria-label="Cerrar"
            onClick={() => setLightbox(null)}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
          <img
            src={lightbox}
            alt="Imagen ampliada"
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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
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
            ref={closeRef}
            type="button"
            aria-label="Cerrar"
            onClick={() => setCarouselViewer(null)}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
          <button
            aria-label="Imagen anterior"
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
            aria-label="Imagen siguiente"
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
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 2.5rem;
        }
        @media (min-width: 900px) {
          .topic-content-layout {
            grid-template-columns: 10.5rem minmax(0, 1fr) 13rem;
            gap: 1.75rem;
          }
          .topic-side {
            position: sticky;
            top: 5.5rem;
            align-self: start;
            margin: 2.5rem 0 0;
          }
        }
        @media (min-width: 1200px) {
          .topic-content-layout {
            grid-template-columns: 13rem minmax(0, 1fr) 17rem;
            gap: 3rem;
          }
        }
        .topic-toc {
          margin: 1.5rem 0 0;
          font-size: 0.9rem;
        }
        @media (min-width: 900px) {
          .topic-toc {
            margin-top: 2.5rem;
          }
        }
        .topic-toc summary {
          cursor: pointer;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--mid);
        }
        .topic-toc summary:focus-visible {
          outline: 2px solid var(--amber-dark);
          outline-offset: 2px;
        }
        .topic-toc ol {
          list-style: none;
          margin: 0.75rem 0 0;
          padding: 0;
        }
        .topic-toc li {
          break-inside: avoid;
        }
        .topic-toc a {
          display: block;
          padding: 0.3rem 0 0.3rem 0.75rem;
          border-left: 2px solid transparent;
          color: var(--mid);
          line-height: 1.4;
          text-decoration: none;
        }
        .topic-toc a[aria-current="location"] {
          color: var(--charcoal);
          font-weight: 600;
          border-left-color: var(--amber);
        }
        .topic-toc a:hover {
          color: var(--charcoal);
          text-decoration: underline;
        }
        .topic-toc a:focus-visible {
          outline: 2px solid var(--amber-dark);
          outline-offset: 2px;
        }
        .topic-media-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2.5rem 0 3rem;
          min-width: 0;
        }
        .section-body {
          padding-left: 3rem;
          margin: 0;
        }
        @media (max-width: 768px) {
          .section-body {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
