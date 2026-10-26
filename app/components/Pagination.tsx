"use client";

interface PaginationProps {
  current: number;
  total: number;
  hasPrev: boolean;
  hasNext: boolean;
  color: string;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
  /** Palabra que acompaña al número: "Página", "Tema", etc. */
  unitLabel?: string;
  /** Muestra los números de página. Requiere onGoTo. */
  numbered?: boolean;
  onGoTo?: (page: number) => void;
  /** Acción opcional que se muestra junto al contador, por ejemplo un botón de volver. */
  action?: React.ReactNode;
}

const BUTTON_CLASS =
  "inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors enabled:hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)";

/** Páginas a mostrar: todas si son pocas; si no, la primera, la última y un entorno de la actual con "…". */
function pageItems(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("…");
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push("…");
  items.push(total);
  return items;
}

export default function Pagination({
  current,
  total,
  hasPrev,
  hasNext,
  color,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  unitLabel = "Página",
  numbered = false,
  onGoTo,
  action,
}: PaginationProps) {
  return (
    <nav aria-label="Paginación" className="mt-14 mb-12 border-t border-black/10 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onPrev}
          disabled={!hasPrev}
          className={BUTTON_CLASS}
          style={{ borderColor: `${color}55`, color }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          {prevLabel}
        </button>

        <div className="order-first flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:order-0 sm:w-auto">
        {numbered && onGoTo ? (
          <ol className="flex flex-wrap items-center justify-center gap-1">
            {pageItems(current, total).map((item, i) =>
              item === "…" ? (
                <li key={`gap-${i}`} aria-hidden="true" className="px-2 text-(--mid)">
                  …
                </li>
              ) : (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => onGoTo(item)}
                    aria-label={`Página ${item}`}
                    aria-current={item === current ? "page" : undefined}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border px-3 text-sm font-semibold tabular-nums transition-colors enabled:hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                    style={
                      item === current
                        ? { backgroundColor: color, borderColor: color, color: "#fff" }
                        : { borderColor: `${color}55`, color }
                    }
                  >
                    {item}
                  </button>
                </li>
              ),
            )}
          </ol>
        ) : (
          <p aria-live="polite" className="text-center text-sm text-(--mid)">
            {unitLabel}{" "}
            <span className="font-semibold text-(--charcoal)">{current}</span> de {total}
          </p>
        )}
        {action}
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          className={BUTTON_CLASS}
          style={{ borderColor: `${color}55`, color }}
        >
          {nextLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
