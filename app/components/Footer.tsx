"use client";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer
      style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #2c2416 100%)",
      color: "#c9b49a",
      padding: "3rem 2rem 2rem",
      marginTop: "auto",
    }}>
        <style>{`
          .footer-grid {
            display: grid;
            grid-template-columns: 250px repeat(5, 1fr);
            gap: 3rem;
          }
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
            }
            .footer-logo {
              grid-column: 1 / -1;
            }
          }
          @media (max-width: 480px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
        `}</style>
        <div className="footer-grid" style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingBottom: "2rem",
          borderBottom: "1px solid rgba(201,180,154,0.15)",
        }}>
           {/* Logo */}
           <div className="footer-logo" style={{ minWidth: 0 }}>
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
                lineHeight: 1.2 // Evita que se corte verticalmente
              }}>
                {t('nav_logo')}
              </span>
            </div>
            <p style={{
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "#8a7560",
              margin: 0,
            }}>
              Hecho con amor por humanos para los gatos
            </p>
            <p style={{
              fontSize: "0.75rem",
              lineHeight: 1.4,
              color: "#8a7560",
              margin: "0.5rem 0 0 0",
              fontStyle: "italic",
            }}>
              El contenido es informativo y no sustituye la consulta veterinaria.
            </p>
          </div>

          {/* Comportamiento */}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Comportamiento
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Bienestar", "Estrés", "Lenguaje felino", "Adiestramiento"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "0.85rem", color: "#c9b49a", textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Alimentación */}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Alimentación
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Tipos de dieta", "Alimentos"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "0.85rem", color: "#c9b49a", textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Tenencia Responsable */}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Tenencia Responsable
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Nutrición", "Vínculo", "Compromiso", "Ética"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "0.85rem", color: "#c9b49a", textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Salud */}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Salud
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Vacunación", "Enfermedades", "Cuidados"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "0.85rem", color: "#c9b49a", textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Recursos */}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Recursos
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Razas", href: "/razas" },
                { label: "Preguntas", href: "/preguntas" },
                { label: "Sobre Nosotros", href: "/sobre-nosotros" },
                { label: "Contáctanos", href: "/contacto" },
              ].map((item) => (
                <a key={item.label} href={item.href} style={{ fontSize: "0.85rem", color: "#c9b49a", textDecoration: "none" }}>
                  {item.label}
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
         <p style={{ fontSize: "0.75rem", color: "#8a7560", margin: 0 }}>
           © {new Date().getFullYear()} GatoLandia. Todos los derechos reservados.
         </p>
         <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/privacidad" style={{ fontSize: "0.75rem", color: "#8a7560", textDecoration: "none" }}>Política de Privacidad</a>
            <a href="/terminos" style={{ fontSize: "0.75rem", color: "#8a7560", textDecoration: "none" }}>Términos y Condiciones</a>
            <a href="mailto:correoalmagatuna@gmail.com" style={{ fontSize: "0.75rem", color: "#8a7560", textDecoration: "none" }}>correoalmagatuna@gmail.com</a>
          </div>
       </div>
     </footer>
   );
}