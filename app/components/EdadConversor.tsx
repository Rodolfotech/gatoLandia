"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { edadHumana, ETAPAS, etapaDe, EDAD_LIMITES, type Etapa } from "../lib/edadFelina";

const ORDEN: Etapa[] = ["gatito", "adulto", "senior"];

/** Conversor de años de gato a años humanos, con consejos según la etapa de vida. */
export default function EdadConversor() {
  const [anios, setAnios] = useState(3);
  const [texto, setTexto] = useState("3");
  const rangoId = useId();
  const numeroId = useId();

  const humanos = edadHumana(anios);
  const etapa = etapaDe(anios);
  const info = ETAPAS[etapa];

  function cambiarDesdeRango(valor: number) {
    setAnios(valor);
    setTexto(String(valor));
  }

  function cambiarDesdeTexto(valor: string) {
    setTexto(valor);
    const numero = Number(valor.replace(",", "."));
    if (valor.trim() !== "" && !Number.isNaN(numero) && numero >= EDAD_LIMITES.min && numero <= EDAD_LIMITES.max) {
      setAnios(numero);
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:p-7">
        <label htmlFor={numeroId} className="block text-sm font-semibold text-(--charcoal)">
          Edad de tu gato (años)
        </label>
        <input
          id={numeroId}
          type="text"
          inputMode="decimal"
          data-clarity-mask="True"
          value={texto}
          onChange={(e) => cambiarDesdeTexto(e.target.value)}
          className="mt-2 w-32 rounded-lg border border-black/15 bg-white px-3 py-2.5 text-base text-(--charcoal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
        />

        <label htmlFor={rangoId} className="mt-6 block text-sm font-semibold text-(--charcoal)">
          O desliza para elegir
        </label>
        <input
          id={rangoId}
          type="range"
          min={EDAD_LIMITES.min}
          max={EDAD_LIMITES.max}
          step={0.5}
          value={anios}
          onChange={(e) => cambiarDesdeRango(Number(e.target.value))}
          aria-valuetext={`${anios} ${anios === 1 ? "año" : "años"} de gato, equivale a ${humanos} años humanos`}
          className="mt-3 w-full accent-(--amber-dark) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--amber-dark)"
        />
        <div className="mt-1 flex justify-between text-xs text-(--mid)" aria-hidden="true">
          <span>0</span>
          <span>12</span>
          <span>25</span>
        </div>

        <div aria-live="polite" className="mt-8 rounded-xl bg-(--amber)/10 p-5">
          <p className="text-sm text-(--mid)">Equivale aproximadamente a</p>
          <p className="mt-1 text-4xl font-black text-(--charcoal) tabular-nums">
            {humanos} <span className="text-base font-semibold text-(--mid)">años humanos</span>
          </p>
          <p className="mt-3 text-sm font-semibold text-(--charcoal)">
            Etapa: {info.titulo.toLowerCase()} · {info.rango}
          </p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-(--mid)">
          Es una referencia habitual para entender la etapa de vida. No es una medida exacta: cada gato envejece a su ritmo.
        </p>
      </div>

      <section aria-labelledby="etapa-titulo">
        <h2 id="etapa-titulo" className="text-xl text-(--charcoal)" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          Cuidados para la etapa {info.titulo.toLowerCase()}
        </h2>
        <ul className="mt-4 grid gap-3">
          {info.consejos.map((consejo) => (
            <li key={consejo} className="flex gap-3 rounded-lg border border-black/10 bg-white p-4 text-sm leading-relaxed text-(--charcoal)">
              <span aria-hidden="true" className="mt-1 text-(--amber-dark)">●</span>
              {consejo}
            </li>
          ))}
        </ul>
        <Link
          href={info.enlace.href}
          className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-(--amber-dark) underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
        >
          {info.enlace.texto}
        </Link>

        <nav aria-label="Etapas de vida" className="mt-10">
          <ul className="flex flex-wrap gap-2 text-sm">
            {ORDEN.map((e) => (
              <li key={e}>
                <span
                  aria-current={e === etapa ? "true" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 ${
                    e === etapa ? "border-(--charcoal) bg-(--charcoal) font-semibold text-white" : "border-black/10 bg-white text-(--charcoal)"
                  }`}
                >
                  {ETAPAS[e].titulo} · {ETAPAS[e].rango}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}
