"use client";

import { useState } from "react";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";

export type ContentType = "razas" | "preguntas";

interface NavbarProps {
  onLogoClick?: () => void;
}

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-nosotros", label: "Sobre Nosotros" },
  { id: "contacto", label: "Contáctanos" },
  { id: "razas", label: "Razas" },
  { id: "preguntas", label: "Preguntas" },
];

function navigate(id: string) {
  const map: Record<string, string> = {
    inicio: "/",
    "sobre-nosotros": "/sobre-nosotros",
    contacto: "/contacto",
    razas: "/razas",
    preguntas: "/preguntas",
  };
  window.location.href = map[id] || "/";
}

export default function Navbar({ onLogoClick = () => {} }: NavbarProps) {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 300 }}>
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          height: 64,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
          gap: "0.5rem",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => { onLogoClick(); window.location.href = "/"; }}
          style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            background: "none", border: "none", cursor: "pointer",
            padding: "0 0.5rem 0 0", flexShrink: 0,
          }}
        >
          <PawIcon size={20} color="#d4853a" />
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a",
            letterSpacing: "-0.02em",
          }}>
            {t('nav_logo')}
          </span>
        </button>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Desktop nav */}
        <div className="hide-mobile" style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          paddingLeft: "1rem",
        }}>
          {NAV_ITEMS.map((ct) => (
            <button
              key={ct.id}
              onClick={() => navigate(ct.id)}
              style={{
                background: "transparent",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: 8, cursor: "pointer",
                padding: "0.45rem 0.9rem",
                fontSize: "0.78rem", fontFamily: "'Inter', sans-serif",
                fontWeight: 500, color: "#666",
                display: "flex", alignItems: "center", gap: "0.3rem",
                transition: "all 0.2s ease", whiteSpace: "nowrap", flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212, 133, 58, 0.08)";
                e.currentTarget.style.borderColor = "rgba(212, 133, 58, 0.2)";
                e.currentTarget.style.color = "#d4853a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)";
                e.currentTarget.style.color = "#666";
              }}
            >
              {ct.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "0.5rem", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#2c2416",
          }}
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed", inset: 0, top: 64, zIndex: 999,
            background: "rgba(0,0,0,0.3)",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "1rem",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              animation: "fadeDown 0.15s ease",
            }}
          >
            {NAV_ITEMS.map((ct) => (
              <button
                key={ct.id}
                onClick={() => { setMenuOpen(false); navigate(ct.id); }}
                style={{
                  width: "100%", textAlign: "left",
                  background: "none", border: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: 8,
                  fontSize: "0.95rem", fontWeight: 500, color: "#2c2416",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,133,58,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
              >
                {ct.label}
              </button>
            ))}
            <div style={{ padding: "0.5rem 1rem" }}>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
