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
}: PaginationProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.75rem",
        marginTop: "3.5rem",
        paddingTop: "2rem",
        borderTop: "1px solid rgba(201,180,154,0.3)",
      }}
    >
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.5rem 1rem",
          borderRadius: 8,
          border: `1px solid ${hasPrev ? `${color}40` : "transparent"}`,
          background: hasPrev ? "transparent" : "transparent",
          color: hasPrev ? color : "#c9b49a",
          cursor: hasPrev ? "pointer" : "default",
          fontSize: "0.82rem",
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.2s",
          opacity: hasPrev ? 1 : 0.35,
          visibility: hasPrev ? "visible" : "hidden",
        }}
        onMouseEnter={(e) => {
          if (!hasPrev) return;
          const el = e.currentTarget;
          el.style.borderColor = `${color}70`;
          el.style.background = `${color}08`;
        }}
        onMouseLeave={(e) => {
          if (!hasPrev) return;
          const el = e.currentTarget;
          el.style.borderColor = `${color}40`;
          el.style.background = "transparent";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
        {prevLabel}
      </button>

      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 56,
          height: 32,
          borderRadius: 20,
          background: `${color}12`,
          color: color,
          fontSize: "0.78rem",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        {current}
      </span>

      <button
        onClick={onNext}
        disabled={!hasNext}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: "0.5rem 1rem",
          borderRadius: 8,
          border: `1px solid ${hasNext ? `${color}40` : "transparent"}`,
          background: hasNext ? "transparent" : "transparent",
          color: hasNext ? color : "#c9b49a",
          cursor: hasNext ? "pointer" : "default",
          fontSize: "0.82rem",
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.2s",
          opacity: hasNext ? 1 : 0.35,
          visibility: hasNext ? "visible" : "hidden",
        }}
        onMouseEnter={(e) => {
          if (!hasNext) return;
          const el = e.currentTarget;
          el.style.borderColor = `${color}70`;
          el.style.background = `${color}08`;
        }}
        onMouseLeave={(e) => {
          if (!hasNext) return;
          const el = e.currentTarget;
          el.style.borderColor = `${color}40`;
          el.style.background = "transparent";
        }}
      >
        {nextLabel}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
