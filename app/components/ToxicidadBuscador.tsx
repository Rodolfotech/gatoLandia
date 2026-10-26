"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ELEMENTOS, type Elemento, type Nivel } from "../data/toxicidad";
import { buscarElementos, NIVELES } from "../lib/toxicidad";
import { EMERGENCY_HREF } from "../lib/routes";

// Color, icono y texto: el nivel no depende solo del color.
const ESTILO: Record<Nivel, { icono: string; caja: string; etiqueta: string }> = {
  verde: {
    icono: "✓",
    caja: "border-emerald-700 bg-emerald-50 text-emerald-900",
    etiqueta: "bg-emerald-700 text-white",
  },
  amarillo: {
    icono: "!",
    caja: "border-amber-700 bg-amber-50 text-amber-950",
    etiqueta: "bg-amber-600 text-white",
  },
  rojo: {
    icono: "✕",
    caja: "border-red-800 bg-red-50 text-red-950",
    etiqueta: "bg-red-800 text-white",
  },
};

const NIVEL_ORDEN: Nivel[] = ["rojo", "amarillo", "verde"];

/** Buscador de alimentos y plantas con semáforo de toxicidad. Los datos están en app/data/toxicidad.ts. */
export default function ToxicidadBuscador() {
  const [texto, setTexto] = useState("");
  const inputId = useId();
  const resultados = buscarElementos(texto);
  const buscando = texto.trim() !== "";

  return (
    <div>
      <label htmlFor={inputId} className="block text-base font-semibold text-(--charcoal)">
        ¿Qué alimento o planta quieres revisar?
      </label>
      <input
        id={inputId}
        type="search"
        data-clarity-mask="True"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Ej: zapallo, lirio, chocolate"
        autoComplete="off"
        className="mt-2 w-full max-w-xl rounded-lg border border-black/15 bg-white px-4 py-3 text-base text-(--charcoal) placeholder:text-(--mid) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
      />
      <p className="mt-2 text-sm text-(--mid)">Puedes escribir el nombre común, el científico o una pregunta completa.</p>

      <div aria-live="polite" className="mt-6">
        {buscando && (
          <p className="text-sm text-(--mid)">
            {resultados.length === 0
              ? "No encontramos ese alimento o planta."
              : `${resultados.length} ${resultados.length === 1 ? "resultado" : "resultados"}`}
          </p>
        )}

        {buscando && resultados.length === 0 && (
          <div className="mt-3 rounded-2xl border border-black/10 bg-white p-5">
            <p className="font-semibold text-(--charcoal)">Por precaución, no se lo des.</p>
            <p className="mt-2 text-sm leading-relaxed text-(--mid)">
              Si tu gato lo comió y tiene vómitos, decaimiento o dificultad para respirar, llama a tu veterinario o a una
              clínica de urgencia. Si no está seguro de qué comió, la guía de primeros auxilios te puede ayudar mientras
              tanto.
            </p>
            <Link href={EMERGENCY_HREF} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-(--amber-dark) underline underline-offset-4">
              Ver guía de primeros auxilios
            </Link>
          </div>
        )}

        {resultados.length > 0 && (
          <ul className="mt-3 grid gap-3">
            {resultados.map((e) => (
              <li key={`${e.tipo}-${e.nombre}`}>
                <ResultadoCard elemento={e} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {!buscando && (
        <section aria-labelledby="lista-titulo" className="mt-10">
          <h2 id="lista-titulo" className="text-xl text-(--charcoal)" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Lista completa
          </h2>
          <div className="mt-4 grid gap-8">
            {NIVEL_ORDEN.map((nivel) => (
              <div key={nivel}>
                <h3 className="flex items-center gap-2 text-base font-semibold text-(--charcoal)">
                  <span aria-hidden="true" className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${ESTILO[nivel].etiqueta}`}>
                    {ESTILO[nivel].icono}
                  </span>
                  {NIVELES[nivel].titulo}
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {ELEMENTOS.filter((e) => e.nivel === nivel).map((e) => (
                    <li key={`${e.tipo}-${e.nombre}`} className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-(--charcoal)">
                      {e.nombre}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-(--mid)">
        Esta información es orientativa y no reemplaza la consulta veterinaria. Ante cualquier duda o si tu gato ya comió algo
        de la lista roja, consulta de inmediato.
      </p>
    </div>
  );
}

function ResultadoCard({ elemento }: { elemento: Elemento }) {
  const nivel = elemento.nivel;
  return (
    <article className={`rounded-2xl border-l-4 bg-white p-5 shadow-sm ${ESTILO[nivel].caja}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${ESTILO[nivel].etiqueta}`}>
          <span aria-hidden="true">{ESTILO[nivel].icono}</span>
          {NIVELES[nivel].titulo}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-(--mid)">
          {elemento.tipo === "planta" ? "Planta" : "Alimento"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-(--charcoal)">{elemento.nombre}</h3>
      <p className="mt-2 text-sm leading-relaxed text-(--charcoal)">{elemento.nota}</p>
      <p className="mt-2 text-sm font-semibold text-(--charcoal)">{NIVELES[nivel].accion}</p>
    </article>
  );
}
