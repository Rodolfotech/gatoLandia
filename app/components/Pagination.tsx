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
}

const BUTTON_CLASS =
  "inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors enabled:hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)";

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
}: PaginationProps) {
  return (
    <nav aria-label="Paginación" className="mt-14 mb-12 border-t border-black/10 pt-8">
      <div className="flex items-center justify-between gap-4">
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

        <p aria-live="polite" className="text-center text-sm text-(--mid)">
          {unitLabel}{" "}
          <span className="font-semibold text-(--charcoal)">{current}</span> de {total}
        </p>

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
