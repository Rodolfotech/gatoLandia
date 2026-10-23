"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../i18n/I18nContext";
import { parseCategoryPath } from "../lib/routes";

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--amber-dark)]";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb() {
  const { categories } = useI18n();
  const pathname = usePathname();
  const selection = parseCategoryPath(pathname);
  const cat = categories.find((c) => c.slug === selection?.categorySlug);

  if (!selection || !cat) return null;

  const sub = cat.subcategories.find((s) => s.slug === selection.subcategorySlug);

  // El tema no va aquí: ya aparece como título y como elemento activo en la fila de temas.
  const crumbs: Crumb[] = [
    { label: "Inicio", href: "/" },
    { label: cat.label, href: `/categoria/${cat.slug}` },
  ];
  if (sub) crumbs.push({ label: sub.label });

  return (
    <nav aria-label="Ruta de navegación" className="page-shell pt-4 md:pt-6">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-[var(--mid)]">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={`${index}-${crumb.label}`} className="flex min-w-0 items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-[var(--mid)]">
                  ›
                </span>
              )}
              {isLast || !crumb.href ? (
                <span aria-current={isLast ? "page" : undefined} className="font-medium text-[var(--charcoal)]">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={`rounded underline decoration-dotted underline-offset-4 hover:text-[var(--charcoal)] ${FOCUS_RING}`}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
