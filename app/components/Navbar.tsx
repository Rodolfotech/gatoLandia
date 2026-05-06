"use client";

import { useRouter } from "next/navigation";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";
import LanguageSelector from "./LanguageSelector";

export type ContentType = "razas" | "preguntas";

interface NavbarProps {
  onLogoClick?: () => void;
}

function useContentTypes() {
  return [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-nosotros", label: "Sobre Nosotros" },
    { id: "contacto", label: "Contáctanos" },
    { id: "razas", label: "Razas" },
    { id: "preguntas", label: "Preguntas" },
  ];
}

export default function Navbar({ onLogoClick = () => {} }: NavbarProps) {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 300 }}>
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          height: 64,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
          gap: "0.5rem",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => { onLogoClick(); router.push("/"); }}
          style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            background: "none", border: "none", cursor: "pointer",
            padding: "0 1rem 0 0", flexShrink: 0,
          }}
        >
          <PawIcon size={20} color="#d4853a" />
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem", fontWeight: 700, color: "#1a1a1a",
            letterSpacing: "-0.02em",
          }}>
            {t('nav_logo')}
          </span>
        </button>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Right side */}
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          paddingLeft: "1rem",
        }}>
          {useContentTypes().map((ct) => (
            <button
              key={ct.id}
              onClick={() => {
                if (ct.id === "inicio") router.push("/");
                else if (ct.id === "sobre-nosotros") router.push("/sobre-nosotros");
                else if (ct.id === "contacto") router.push("/contacto");
                else if (ct.id === "razas") router.push("/razas");
                else if (ct.id === "preguntas") router.push("/preguntas");
              }}
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
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
}
