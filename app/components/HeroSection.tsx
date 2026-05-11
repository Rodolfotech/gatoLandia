"use client";

import type { ReactNode } from "react";

interface CtaConfig {
  text: string;
  onClick: () => void;
}

interface HeroSectionProps {
  badge?: {
    icon: string;
    text: string;
  } | false;
  heading: ReactNode;
  subtitle: string;
  primaryCta: CtaConfig;
  secondaryCta: CtaConfig;
  children?: ReactNode;
}

export default function HeroSection({
  badge = { icon: "🐱", text: "Conocimiento felino de expertos" },
  heading,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: HeroSectionProps) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(212,133,58,0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(201,180,154,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 80%, rgba(255,224,196,0.15) 0%, transparent 50%),
          #fdf6ec
        `,
        position: "relative",
        overflow: "hidden",
        padding: "clamp(2rem, 5vw, 4rem) 1rem",
      }}
    >
      <div style={{ maxWidth: 1100, textAlign: "center", position: "relative" }}>
        {badge && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1.2rem",
            background: "rgba(212,133,58,0.1)", borderRadius: 999,
            fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" as const,
            color: "#a0622a", fontWeight: 500, marginBottom: "2rem",
          }}>
            <span style={{ fontSize: "0.9rem" }}>{badge.icon}</span>
            {badge.text}
          </div>
        )}

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          fontWeight: 900, lineHeight: 1.05, color: "#2c2416",
          marginBottom: "1.5rem", letterSpacing: "-0.03em",
        }}>
          {heading}
        </h1>

        <p style={{
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: "#6b5c44", maxWidth: 640,
          margin: "0 auto 3rem", lineHeight: 1.8, fontWeight: 300,
        }}>
          {subtitle}
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
          <button
            onClick={primaryCta.onClick}
            style={{
              padding: "0.85rem 2rem", borderRadius: 12,
              background: "#d4853a", color: "#fff", border: "none",
              fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,133,58,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {primaryCta.text}
          </button>
          <button
            onClick={secondaryCta.onClick}
            style={{
              padding: "0.85rem 2rem", borderRadius: 12,
              background: "transparent", color: "#2c2416",
              border: "1px solid rgba(201,180,154,0.5)",
              fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.02)";
              e.currentTarget.style.borderColor = "rgba(201,180,154,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,180,154,0.5)";
            }}
          >
            {secondaryCta.text}
          </button>
        </div>

        {children}
      </div>
    </section>
  );
}
