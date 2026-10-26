import type { Metadata } from "next";
import EdadConversor from "../components/EdadConversor";

export const metadata: Metadata = {
  title: "Calculadora de edad de gatos en años humanos",
  description:
    "Convierte la edad de tu gato en años humanos y descubre qué cuidados necesita según sea gatito, adulto o senior. Gratis y orientativa.",
  alternates: { canonical: "/edad-gato" },
};

export default function EdadGatoPage() {
  return (
    <div className="min-h-screen bg-(--cream)">
      <header className="border-b border-black/5 bg-white/60 py-12 md:py-14">
        <div className="page-shell">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--amber-dark)">Herramienta gratuita</p>
          <h1
            className="mt-3 text-4xl leading-tight text-(--charcoal) md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            Calculadora de edad de gatos
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-(--mid)">
            Descubre cuántos años humanos tiene tu gato y qué cuidados necesita en su etapa de vida.
          </p>
        </div>
      </header>

      <main className="page-shell py-10 md:py-12">
        <EdadConversor />
      </main>
    </div>
  );
}
