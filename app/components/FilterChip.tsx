interface FilterChipProps {
  active: boolean;
  count: number;
  onClick: () => void;
  children: React.ReactNode;
}

/** Chip de filtro con el número de artículos en un badge. El estado se indica con aria-pressed y color. */
export default function FilterChip({ active, count, onClick, children }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-11 shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border px-4 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) ${
        active
          ? "border-(--charcoal) bg-(--charcoal) font-semibold text-white"
          : "border-black/10 bg-white text-(--charcoal) hover:border-(--amber)"
      }`}
    >
      {children}
      <span
        className={`min-w-6 rounded-full px-2 py-0.5 text-center text-xs font-semibold tabular-nums ${
          active ? "bg-white/15 text-white" : "bg-black/5 text-(--charcoal)"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
