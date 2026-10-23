"use client";

import Link from "next/link";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";

const INSTITUTIONAL = [
  { label: "Razas", href: "/razas" },
  { label: "Preguntas frecuentes", href: "/preguntas" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const LINK_CLASS =
  "rounded text-sm text-[#c9b49a] underline-offset-4 hover:text-[#f5f0e8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9a85c]";

export default function Footer() {
  const { t, categories } = useI18n();

  return (
    <footer className="mt-auto bg-linear-to-br from-[#1a1a1a] to-[#2c2416] px-6 pb-8 pt-12 text-[#c9b49a]">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-[#c9b49a]/15 pb-10 md:grid-cols-[220px_1fr_200px]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <PawIcon size={24} color="#d4853a" />
            <span className="text-xl font-bold text-[#f5f0e8]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t("nav_logo")}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#c9b49a]">Hecho con amor por humanos para los gatos.</p>
          <p className="mt-2 text-xs italic leading-relaxed text-[#c9b49a]">
            El contenido es informativo y no sustituye la consulta veterinaria.
          </p>
        </div>

        <nav aria-labelledby="footer-categorias">
          <h2
            id="footer-categorias"
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#f5f0e8]"
          >
            Categorías
          </h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/categoria/${cat.slug}`} className={LINK_CLASS}>
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-recursos">
          <h2
            id="footer-recursos"
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#f5f0e8]"
          >
            AlmaGatuna
          </h2>
          <ul className="flex flex-col gap-2.5">
            {INSTITUTIONAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={LINK_CLASS}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 pt-6">
        <p className="text-xs text-[#c9b49a]">
          © {new Date().getFullYear()} AlmaGatuna. Todos los derechos reservados.
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <li>
            <Link href="/privacidad" className={LINK_CLASS}>
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link href="/terminos" className={LINK_CLASS}>
              Términos y condiciones
            </Link>
          </li>
          <li>
            <a href="mailto:correoalmagatuna@gmail.com" className={LINK_CLASS}>
              correoalmagatuna@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
