import type { Metadata } from "next";
import ToxicidadBuscador from "../components/ToxicidadBuscador";

export const metadata: Metadata = {
  title: "¿Es tóxico para gatos? Buscador de alimentos y plantas",
  description:
    "Revisa si un alimento o una planta es tóxico para tu gato. Semáforo verde, amarillo o rojo para lirio, chocolate, uvas, zapallo, potus y más.",
  alternates: { canonical: "/toxicos" },
};

export default function ToxicosPage() {
  return (
    <div className="min-h-screen bg-(--cream)">
      <header className="border-b border-black/5 bg-white/60 py-12 md:py-14">
        <div className="page-shell">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--amber-dark)">Consulta rápida</p>
          <h1
            className="mt-3 text-4xl leading-tight text-(--charcoal) md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            ¿Es tóxico para mi gato?
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-(--mid)">
            Escribe un alimento o una planta y verás de inmediato si puedes dárselo, si debes consultar antes o si es peligroso.
          </p>
        </div>
      </header>

      <main className="page-shell py-10 md:py-12">
        <ToxicidadBuscador />
      </main>
    </div>
  );
}
