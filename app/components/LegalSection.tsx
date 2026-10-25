/** Sección plegable de las páginas legales (privacidad y términos). Se abre con teclado y el contenido queda en el HTML. */
function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-(--mid) transition-transform group-open:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

interface LegalSectionProps {
  id: string;
  numero: number;
  titulo: string;
  children: React.ReactNode;
}

export default function LegalSection({ id, numero, titulo, children }: LegalSectionProps) {
  return (
    <details id={id} className="group scroll-mt-28 rounded-2xl border border-black/10 bg-white shadow-sm">
      <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 px-5 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--amber-dark) text-sm font-bold text-white"
        >
          {numero}
        </span>
        <h2 className="flex-1 text-lg text-(--charcoal)" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          {titulo}
        </h2>
        <Chevron />
      </summary>
      <div className="px-5 pb-6 pl-[4.25rem] text-[0.95rem]">{children}</div>
    </details>
  );
}
