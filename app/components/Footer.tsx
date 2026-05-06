"use client";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #2c2416 100%)",
      color: "#c9b49a",
      padding: "3rem 2rem 2rem",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2.5rem",
        paddingBottom: "2rem",
        borderBottom: "1px solid rgba(201,180,154,0.15)",
      }}>
        {/* Brand */}
        <div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "1rem",
          }}>
            <PawIcon size={24} color="#d4853a" />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}>
              {t('nav_logo')}
            </span>
          </div>
          <p style={{
            fontSize: "0.85rem",
            lineHeight: 1.7,
            color: "#8a7560",
            margin: 0,
          }}>
            Hecho con amor por humanos para los gatos
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#f5f0e8",
            marginBottom: "1.25rem",
            textTransform: "uppercase" as const,
            letterSpacing: "0.1em",
          }}>
            Explora
          </h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["Salud", "Alergias", "Diabetes", "Obesidad", "Comportamiento", "Cuidado del Gatito", "Tenencia Responsable", "Castración", "Impacto y Conciencia"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.85rem",
                  color: "#c9b49a",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4853a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c9b49a")}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Resources */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#f5f0e8",
            marginBottom: "1.25rem",
            textTransform: "uppercase" as const,
            letterSpacing: "0.1em",
          }}>
            Recursos
          </h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["Razas de Gatos", "Preguntas Frecuentes", "Guías Veterinarias", "TNR y Callejeros"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.85rem",
                  color: "#c9b49a",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4853a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c9b49a")}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        paddingTop: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <p style={{
          fontSize: "0.75rem",
          color: "#8a7560",
          margin: 0,
        }}>
          © {new Date().getFullYear()} GatoLandia. Todos los derechos reservados.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
           <a
             href="/privacidad"
             style={{
               fontSize: "0.75rem",
               color: "#8a7560",
               textDecoration: "none",
               transition: "color 0.2s",
             }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "#c9b49a")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7560")}
           >
             Política de Privacidad
           </a>
           <a
             href="/terminos"
             style={{
               fontSize: "0.75rem",
               color: "#8a7560",
               textDecoration: "none",
               transition: "color 0.2s",
             }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "#c9b49a")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7560")}
           >
             Términos y Condiciones
           </a>
           <a
             href="mailto:conexiongatuna@gmail.com"
             style={{
               fontSize: "0.75rem",
               color: "#8a7560",
               textDecoration: "none",
               transition: "color 0.2s",
             }}
             onMouseEnter={(e) => (e.currentTarget.style.color = "#c9b49a")}
             onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7560")}
           >
             conexiongatuna@gmail.com
           </a>
         </div>
      </div>
    </footer>
  );
}
