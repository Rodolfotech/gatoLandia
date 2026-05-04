"use client";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";
 
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer style={{ background: "#1e180e", padding: "2rem", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <PawIcon size={16} color="#d4853a" />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#d4853a",
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          {t('nav_logo')}
        </span>
      </div>
      <p style={{ color: "#6b5c44", fontSize: "0.8rem", margin: 0 }}>
        {t('footer_tagline')}
      </p>
    </footer>
  );
}
