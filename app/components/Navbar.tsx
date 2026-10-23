"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import PawIcon from "./PawIcon";
import { useI18n } from "../i18n/I18nContext";
import { EMERGENCY_HREF } from "../lib/routes";
import SiteSearch from "./SiteSearch";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contáctanos" },
  { href: "/razas", label: "Razas" },
  { href: "/preguntas", label: "Preguntas" },
];

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--amber-dark)]";

export default function Navbar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function linkClass(href: string) {
    return `flex min-h-11 items-center rounded-lg border px-3.5 text-sm font-medium whitespace-nowrap transition-colors ${FOCUS_RING} ${
      isActive(href)
        ? "border-[var(--amber)]/30 bg-[var(--amber)]/10 text-[var(--amber-dark)]"
        : "border-black/10 text-[#666] hover:border-[var(--amber)]/30 hover:bg-[var(--amber)]/10 hover:text-[var(--amber-dark)]"
    }`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-[300]">
      <nav aria-label="Principal" className="border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="page-shell flex h-16 items-center gap-2">
        <Link
          href="/"
          className={`flex shrink-0 items-center gap-2.5 rounded-lg px-2 py-1 ${FOCUS_RING}`}
        >
          <PawIcon size={20} color="#d4853a" />
          <span className="text-lg font-bold tracking-tight text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("nav_logo")}
          </span>
        </Link>

        <SiteSearch className="hidden min-w-0 flex-1 md:mx-4 md:flex md:min-w-[12rem] md:max-w-md" />
        <div className="flex-1 md:hidden" />

        <ul className="hidden items-center gap-2 pl-4 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkClass(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={EMERGENCY_HREF}
          className={`flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg bg-[#B42318] px-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#931b12] ${FOCUS_RING}`}
        >
          <span aria-hidden="true">⚠</span>
          Emergencia
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? menuId : undefined}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`flex h-11 w-11 items-center justify-center rounded-lg text-[var(--charcoal)] xl:hidden ${FOCUS_RING}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-[999] bg-black/30 xl:hidden" onClick={closeMenu}>
          <nav
            id={menuId}
            aria-label="Principal"
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-1 border-b border-black/10 bg-white p-4 shadow-lg"
          >
            <SiteSearch className="mb-2" onSearch={closeMenu} />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-lg px-4 text-[0.95rem] font-medium transition-colors ${FOCUS_RING} ${
                  isActive(item.href)
                    ? "bg-[var(--amber)]/10 text-[var(--amber-dark)]"
                    : "text-[var(--charcoal)] hover:bg-[var(--amber)]/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
