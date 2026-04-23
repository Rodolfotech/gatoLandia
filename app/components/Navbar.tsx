"use client";

import { useState, useRef, useEffect } from "react";
import PawIcon from "./PawIcon";
import { categories as defaultCategories, Category } from "../data/cats";

export type ContentType = "guias" | "preguntas" | "enciclopedia";

interface NavbarProps {
  categories?: Category[];
  activeCategorySlug?: string | null;
  activeContentType?: ContentType;
  onCategoryClick?: (catSlug: string, subSlug: string, topicSlug: string) => void;
  onContentTypeChange?: (type: ContentType) => void;
  onLogoClick?: () => void;
}

const CONTENT_TYPES: { id: ContentType; label: string; icon: string }[] = [
  { id: "guias",       label: "Guías",       icon: "" },
  { id: "preguntas",   label: "Preguntas",   icon: "" },
  { id: "enciclopedia",label: "Enciclopedia",icon: "" },
];

export default function Navbar({
  categories = defaultCategories,
  activeCategorySlug = null,
  activeContentType = "enciclopedia",
  onCategoryClick = () => {},
  onContentTypeChange = () => {},
  onLogoClick = () => {},
}: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setHoveredSub(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function openCat(id: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    const cat = categories.find((c) => c.slug === id)!;
    setOpenMenu(id);
    setHoveredSub(cat.subcategories[0]?.slug ?? null);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setHoveredSub(null);
    }, 150);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const activeCat = categories.find((c) => c.slug === openMenu);
  const activeSub = activeCat?.subcategories.find((s) => s.slug === hoveredSub);

  return (
    <div ref={navRef} style={{ position: "sticky", top: 0, zIndex: 200 }}>
      {/* ── Top bar ── */}
      <nav
        style={{
          backdropFilter: "blur(14px)",
          backgroundColor: "rgba(253,246,236,0.97)",
          borderBottom: `1px solid ${openMenu ? "transparent" : "rgba(201,180,154,0.3)"}`,
          padding: "0 2rem",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: 60,
          transition: "border-color 0.2s",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => { onLogoClick(); setOpenMenu(null); }}
          style={{
            display: "flex", alignItems: "center", gap: "0.55rem",
            background: "none", border: "none", cursor: "pointer",
            padding: "0 1.25rem 0 0", flexShrink: 0,
          }}
        >

          {/* Logo */}
          <PawIcon size={18} color="#d4853a" /> 
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem", fontWeight: 700, color: "#2c2416", letterSpacing: "-0.02em",
          }}>
            Gatitos
          </span>
        </button>

        {/* Category tabs */}
        <div style={{ display: "flex", alignItems: "stretch", flex: 1, overflow: "hidden" }}>
          {categories.map((cat) => {
            const isOpen   = openMenu === cat.slug;
            const isActive = activeCategorySlug === cat.slug;
            return (
              <button
                key={cat.slug}
                onMouseEnter={() => openCat(cat.slug)}
                onMouseLeave={scheduleClose}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "0 0.65rem",
                  fontSize: "0.8rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isOpen || isActive ? 600 : 400,
                  color: isOpen || isActive ? cat.color : "#6b5c44",
                  display: "flex", alignItems: "center", gap: "0.3rem",
                  borderBottom: isOpen || isActive ? `2px solid ${cat.color}` : "2px solid transparent",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s, border-color 0.15s",
                  flexShrink: 0,
                }}
              >
                 {/* <span style={{ fontSize: "0.9rem" }}>{cat.emoji}</span> */}
                {cat.label}
                <span style={{
                  fontSize: "0.55rem", color: isOpen ? cat.color : "#c9b49a", marginLeft: 1,
                  transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s",
                }}>▾</span>
              </button>
            );
          })}
        </div>

        {/* Content type pills */}
        <div style={{
          display: "flex", alignItems: "center", gap: "0.25rem",
          paddingLeft: "1rem", borderLeft: "1px solid rgba(201,180,154,0.3)", flexShrink: 0,
        }}>
          {CONTENT_TYPES.map((ct) => (
            <button
              key={ct.id}
              onClick={() => onContentTypeChange(ct.id)}
              style={{
                background: activeContentType === ct.id ? "#d4853a" : "transparent",
                border: `1px solid ${activeContentType === ct.id ? "#d4853a" : "rgba(201,180,154,0.5)"}`,
                borderRadius: 999, cursor: "pointer",
                padding: "0.25rem 0.7rem", fontSize: "0.7rem",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                color: activeContentType === ct.id ? "#fff" : "#6b5c44",
                display: "flex", alignItems: "center", gap: "0.3rem",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
            >
              {ct.icon} {ct.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mega-menu ── */}
      {openMenu && activeCat && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            backgroundColor: "rgba(253,246,236,0.99)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(201,180,154,0.3)",
            boxShadow: "0 16px 40px rgba(44,36,22,0.1)",
            display: "flex",
            animation: "fadeDown 0.18s ease",
          }}
        >
          {/* Left: subcategories */}
          <div style={{
            width: 200, borderRight: "1px solid rgba(201,180,154,0.25)",
            padding: "1.25rem 0", flexShrink: 0,
          }}>
            <div style={{
              padding: "0 1.25rem 0.6rem",
              fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#c9b49a", fontWeight: 600,
            }}>
              {activeCat.emoji} {activeCat.label}
            </div>
            {activeCat.subcategories.map((sub) => {
              const isHov = hoveredSub === sub.slug;
              return (
                <button
                  key={sub.slug}
                  onMouseEnter={() => setHoveredSub(sub.slug)}
                  style={{
                    width: "100%", textAlign: "left",
                    background: isHov ? `${activeCat.color}0d` : "none",
                    border: "none",
                    borderLeft: isHov ? `3px solid ${activeCat.color}` : "3px solid transparent",
                    cursor: "pointer",
                    padding: "0.55rem 1.25rem",
                    fontSize: "0.84rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: isHov ? 600 : 400,
                    color: isHov ? activeCat.color : "#2c2416",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    transition: "all 0.12s",
                  }}
                >
                  {sub.label}
                  {isHov && <span style={{ fontSize: "0.65rem", color: activeCat.color }}>›</span>}
                </button>
              );
            })}
          </div>

          {/* Right: topics */}
          {activeSub && (
            <div style={{ flex: 1, padding: "1.25rem 1.75rem" }}>
              <div style={{
                fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#c9b49a", fontWeight: 600, marginBottom: "0.85rem",
              }}>
                {activeSub.label}
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "0.5rem",
              }}>
                {activeSub.topics.map((topic) => (
                  <button
                    key={topic.slug}
                    onClick={() => {
                      setOpenMenu(null);
                      onCategoryClick(activeCat.slug, activeSub.slug, topic.slug);
                    }}
                    style={{
                      textAlign: "left", background: "none",
                      border: "1px solid rgba(201,180,154,0.3)",
                      borderRadius: 8, cursor: "pointer",
                      padding: "0.6rem 0.85rem",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${activeCat.color}0d`;
                      el.style.borderColor = `${activeCat.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "none";
                      el.style.borderColor = "rgba(201,180,154,0.3)";
                    }}
                  >
                    <p style={{ fontSize: "0.83rem", fontWeight: 600, color: "#2c2416", margin: "0 0 0.2rem", lineHeight: 1.3 }}>
                      {topic.title}
                    </p>
                    <p style={{
                      fontSize: "0.72rem", color: "#8a7560", margin: 0, lineHeight: 1.4,
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                    }}>
                      {topic.intro}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}