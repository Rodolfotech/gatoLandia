"use client";

import { useState, useRef, useEffect } from "react";
import { Category } from "../data/cats";
import { useI18n } from "../i18n/I18nContext";

interface CategoryBarProps {
  categories?: Category[];
  activeCategorySlug?: string | null;
  onCategoryClick?: (catSlug: string, subSlug: string, topicSlug: string) => void;
  onLogoClick?: () => void;
}

export default function CategoryBar({
  categories: propCategories,
  activeCategorySlug = null,
  onCategoryClick = () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onLogoClick = () => {},
}: CategoryBarProps) {
  const { categories } = useI18n();
  const cats = propCategories || categories;
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      return () => carousel.removeEventListener('scroll', checkScroll);
    }
  }, [cats]);

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

  function handleCategoryClick(catSlug: string) {
    if (openMenu === catSlug) {
      setOpenMenu(null);
      setHoveredSub(null);
    } else {
      const cat = cats.find((c) => c.slug === catSlug)!;
      setOpenMenu(catSlug);
      setHoveredSub(cat.subcategories[0]?.slug ?? null);
    }
  }

  const activeCat = cats.find((c) => c.slug === openMenu);
  const activeSub = activeCat?.subcategories.find((s) => s.slug === hoveredSub);

  function scrollCarousel(direction: 'left' | 'right') {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    if (direction === 'left') {
      const scrollAmount = clientWidth * 0.8;
      carouselRef.current.scrollTo({
        left: Math.max(0, scrollLeft - scrollAmount),
        behavior: 'smooth'
      });
    } else {
      const remaining = maxScroll - scrollLeft;
      const scrollAmount = Math.min(clientWidth * 0.8, remaining);
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div ref={navRef} style={{ position: "relative", zIndex: 200 }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        padding: "0.5rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        width: "100%",
      }}>
        {/* Carousel Left Button */}
        <button
          onClick={() => scrollCarousel('left')}
          disabled={!canScrollLeft}
          style={{
            background: "none", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8,
            width: 28, height: 28, cursor: canScrollLeft ? "pointer" : "not-allowed", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.7rem", color: canScrollLeft ? "#666" : "#ccc", transition: "all 0.2s",
            opacity: canScrollLeft ? 1 : 0.5,
          }}
          onMouseEnter={e => {
            if (canScrollLeft) e.currentTarget.style.borderColor = "#d4853a";
          }}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"}
        >
          ‹
        </button>

        {/* Categories Carousel */}
        <div 
          ref={carouselRef}
          style={{
            flex: 1,
            overflowX: "auto",
            overflowY: "hidden",
            position: "relative",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="category-carousel"
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            padding: "0.25rem 0",
          }}>
            {cats.map((cat) => {
              const isOpen = openMenu === cat.slug;
              const isActive = activeCategorySlug === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryClick(cat.slug)}
                  style={{
                    background: isOpen ? "rgba(212, 133, 58, 0.08)" : isActive ? "rgba(0, 0, 0, 0.04)" : "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.45rem 0.8rem",
                    fontSize: "0.82rem",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: isOpen || isActive ? 600 : 400,
                    color: isOpen ? "#d4853a" : isActive ? "#1a1a1a" : "#666",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen && !isActive) {
                      e.currentTarget.style.background = "rgba(0, 0, 0, 0.04)";
                      e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen && !isActive) {
                      e.currentTarget.style.background = "none";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }}
                >
                  {cat.label}
                  <span style={{
                    fontSize: "0.55rem", color: isOpen ? "#d4853a" : "#999",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s ease",
                    marginLeft: "0.15rem",
                  }}>▾</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Right Button */}
        <button
          onClick={() => scrollCarousel('right')}
          disabled={!canScrollRight}
          style={{
            background: "none", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8,
            width: 28, height: 28, cursor: canScrollRight ? "pointer" : "not-allowed", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.7rem", color: canScrollRight ? "#666" : "#ccc", transition: "all 0.2s",
            opacity: canScrollRight ? 1 : 0.5,
          }}
          onMouseEnter={e => {
            if (canScrollRight) e.currentTarget.style.borderColor = "#d4853a";
          }}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"}
        >
          ›
        </button>
      </div>

      {/* Mega-menu */}
      {openMenu && activeCat && (
        <div
          onMouseEnter={() => {}}
          onMouseLeave={() => { setOpenMenu(null); setHoveredSub(null); }}
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
            display: "flex",
            animation: "fadeDown 0.2s ease",
          }}
        >
          {/* Left: Subcategories */}
          <div style={{
            width: 240,
            padding: "1.5rem 0", flexShrink: 0,
            background: "rgba(0, 0, 0, 0.01)",
          }}>
            <div style={{
              padding: "0 1.5rem 1rem",
              fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#999", fontWeight: 600,
            }}>
              {activeCat.label}
            </div>
            {activeCat.subcategories.map((sub) => {
              const isHov = hoveredSub === sub.slug;
              const topicCount = sub.topics.length;
              return (
                 <button
                  key={sub.slug}
                  onClick={() => setHoveredSub(sub.slug)}
                  style={{
                    width: "100%", textAlign: "left",
                    background: isHov ? "rgba(212, 133, 58, 0.06)" : "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.65rem 1.5rem",
                    fontSize: "0.85rem",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: isHov ? 600 : 400,
                    color: isHov ? "#1a1a1a" : "#333",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    transition: "all 0.15s ease",
                     outline: "none",
                   }}>
                       {sub.label}
                       <span style={{
                         fontSize: "0.65rem", color: "#999",
                         background: "rgba(0, 0, 0, 0.04)",
                         padding: "0.1rem 0.4rem", borderRadius: 10,
                       }}>
                         {topicCount}
                       </span>
                     </button>
               );
            })}
          </div>

          {/* Right: Topics */}
          {activeSub && (
            <div style={{ flex: 1, padding: "1.5rem 2rem" }}>
              <div style={{
                fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#999", fontWeight: 600, marginBottom: "1.25rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}>
                {activeSub.label}
                <span style={{
                  fontSize: "0.65rem", color: "#999",
                  background: "rgba(0, 0, 0, 0.04)",
                  padding: "0.1rem 0.4rem", borderRadius: 10,
                }}>
                  {activeSub.topics.length} temas
                </span>
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "0.6rem",
              }}>
                {activeSub.topics.map((topic) => (
                  <button
                    key={topic.slug}
                    onClick={() => {
                      setOpenMenu(null);
                      onCategoryClick(activeCat.slug, activeSub.slug, topic.slug);
                    }}
                    style={{
                      textAlign: "left", background: "rgba(0, 0, 0, 0.02)",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      borderRadius: 10, cursor: "pointer",
                      padding: "0.85rem 1rem",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(212, 133, 58, 0.04)";
                      el.style.borderColor = "rgba(212, 133, 58, 0.2)";
                      el.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(0, 0, 0, 0.02)";
                      el.style.borderColor = "rgba(0, 0, 0, 0.06)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1a1a1a", margin: "0 0 0.3rem", lineHeight: 1.3 }}>
                      {topic.title}
                    </p>
                    <p style={{
                      fontSize: "0.72rem", color: "#888", margin: 0, lineHeight: 1.5,
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
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .category-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
