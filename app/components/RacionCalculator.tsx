"use client";

import { useState, type FormEvent } from "react";
import {
  calcularRacion,
  validarRacion,
  type Actividad,
  type Estado,
  type RacionErrores,
  type RacionForm,
  type RacionResultado,
  type TipoAlimento,
} from "../lib/racion";

const FORM_INICIAL: RacionForm = {
  peso: "",
  edad: "",
  actividad: null,
  estado: null,
  tipo: null,
  kcalPor100g: "",
};

const ESTADOS: { value: Estado; label: string }[] = [
  { value: "castrado", label: "Castrado" },
  { value: "entero", label: "Entero" },
];

const ACTIVIDADES: { value: Actividad; label: string; detalle: string }[] = [
  { value: "baja", label: "Baja", detalle: "Duerme casi todo el día" },
  { value: "moderada", label: "Moderada", detalle: "Juega unos ratos al día" },
  { value: "alta", label: "Alta", detalle: "Juega y trepa a diario" },
];

const TIPOS: { value: TipoAlimento; label: string }[] = [
  { value: "seco", label: "Seco (pienso)" },
  { value: "humedo", label: "Húmedo (lata o sobre)" },
];

const CAMPO =
  "mt-2 w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-base text-(--charcoal) placeholder:text-(--mid) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) aria-invalid:border-red-700";

const LABEL = "block text-sm font-semibold text-(--charcoal)";

const ERROR = "mt-1.5 text-sm font-medium text-red-800";

/** Calculadora de ración diaria. El cálculo está en app/lib/racion.ts. */
export default function RacionCalculator() {
  const [form, setForm] = useState<RacionForm>(FORM_INICIAL);
  const [errores, setErrores] = useState<RacionErrores>({});
  const [resultado, setResultado] = useState<RacionResultado | null>(null);

  function actualizar<K extends keyof RacionForm>(campo: K, valor: RacionForm[K]) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
    // Al corregir un campo, su error desaparece sin esperar a volver a enviar.
    setErrores((prev) => ({ ...prev, [campo]: undefined }));
    setResultado(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nuevos = validarRacion(form);
    setErrores(nuevos);

    const primero = Object.keys(nuevos)[0] as keyof RacionForm | undefined;
    if (primero) {
      setResultado(null);
      document.getElementById(`racion-${primero}`)?.focus();
      return;
    }

    setResultado(calcularRacion(form));
    setTimeout(() => document.getElementById("racion-resultado")?.focus(), 0);
  }

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
      <form noValidate onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="racion-peso" className={LABEL}>
              Peso (kg)
            </label>
            <input
              id="racion-peso" data-clarity-mask="True"
              type="text"
              inputMode="decimal"
              placeholder="Ej: 4,2"
              value={form.peso}
              onChange={(e) => actualizar("peso", e.target.value)}
              aria-invalid={!!errores.peso}
              aria-describedby={errores.peso ? "racion-peso-error" : "racion-peso-ayuda"}
              className={CAMPO}
            />
            <p id="racion-peso-ayuda" className="mt-1.5 text-sm text-(--mid)">
              Entre 0,5 y 15 kg.
            </p>
            {errores.peso && <p id="racion-peso-error" className={ERROR}>{errores.peso}</p>}
          </div>

          <div>
            <label htmlFor="racion-edad" className={LABEL}>
              Edad (años)
            </label>
            <input
              id="racion-edad" data-clarity-mask="True"
              type="text"
              inputMode="decimal"
              placeholder="Ej: 3"
              value={form.edad}
              onChange={(e) => actualizar("edad", e.target.value)}
              aria-invalid={!!errores.edad}
              aria-describedby={errores.edad ? "racion-edad-error" : undefined}
              className={CAMPO}
            />
            {errores.edad && <p id="racion-edad-error" className={ERROR}>{errores.edad}</p>}
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className={LABEL}>¿Está castrado?</legend>
          <div id="racion-estado" tabIndex={-1} className="mt-2 flex flex-wrap gap-2 focus:outline-none">
            {ESTADOS.map((op) => (
              <OpcionRadio
                key={op.value}
                name="estado"
                value={op.value}
                label={op.label}
                checked={form.estado === op.value}
                onChange={() => actualizar("estado", op.value)}
              />
            ))}
          </div>
          {errores.estado && <p className={ERROR}>{errores.estado}</p>}
        </fieldset>

        <fieldset className="mt-6">
          <legend className={LABEL}>Nivel de actividad</legend>
          <div id="racion-actividad" tabIndex={-1} className="mt-2 grid gap-2 focus:outline-none sm:grid-cols-3">
            {ACTIVIDADES.map((op) => (
              <OpcionRadio
                key={op.value}
                name="actividad"
                value={op.value}
                label={op.label}
                detalle={op.detalle}
                checked={form.actividad === op.value}
                onChange={() => actualizar("actividad", op.value)}
              />
            ))}
          </div>
          {errores.actividad && <p className={ERROR}>{errores.actividad}</p>}
        </fieldset>

        <fieldset className="mt-6">
          <legend className={LABEL}>Tipo de alimento</legend>
          <div id="racion-tipo" tabIndex={-1} className="mt-2 flex flex-wrap gap-2 focus:outline-none">
            {TIPOS.map((op) => (
              <OpcionRadio
                key={op.value}
                name="tipo"
                value={op.value}
                label={op.label}
                checked={form.tipo === op.value}
                onChange={() => actualizar("tipo", op.value)}
              />
            ))}
          </div>
          {errores.tipo && <p className={ERROR}>{errores.tipo}</p>}
        </fieldset>

        <div className="mt-6">
          <label htmlFor="racion-kcalPor100g" className={LABEL}>
            Kcal por 100 g del alimento
          </label>
          <input
            id="racion-kcalPor100g" data-clarity-mask="True"
            type="text"
            inputMode="numeric"
            placeholder="Ej: 380"
            value={form.kcalPor100g}
            onChange={(e) => actualizar("kcalPor100g", e.target.value)}
            aria-invalid={!!errores.kcalPor100g}
            aria-describedby={errores.kcalPor100g ? "racion-kcal-error" : "racion-kcal-ayuda"}
            className={CAMPO}
          />
          <p id="racion-kcal-ayuda" className="mt-1.5 text-sm text-(--mid)">
            Está en la etiqueta del envase, como «kcal/100 g» o «energía metabolizable».
          </p>
          {errores.kcalPor100g && <p id="racion-kcal-error" className={ERROR}>{errores.kcalPor100g}</p>}
        </div>

        <button
          type="submit"
          className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-(--amber-dark) px-5 text-sm font-semibold text-white hover:bg-[#8a5222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) sm:w-auto"
        >
          Calcular ración
        </button>
      </form>

      <section aria-labelledby="racion-resultado-titulo" className="md:sticky md:top-24">
        <div
          id="racion-resultado"
          tabIndex={-1}
          aria-live="polite"
          className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm focus:outline-none md:p-7"
        >
          <h2 id="racion-resultado-titulo" className="text-lg font-bold text-(--charcoal)" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ración diaria
          </h2>

          {resultado ? (
            <>
              <p className="mt-3 text-4xl font-black text-(--charcoal) tabular-nums">
                {resultado.gramos} g
                <span className="ml-2 text-base font-semibold text-(--mid)">al día</span>
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-(--mid)">Energía diaria</dt>
                  <dd className="font-semibold text-(--charcoal) tabular-nums">{resultado.mer} kcal</dd>
                </div>
                <div>
                  <dt className="text-(--mid)">En reposo</dt>
                  <dd className="font-semibold text-(--charcoal) tabular-nums">{resultado.rer} kcal</dd>
                </div>
              </dl>
              {resultado.aviso && (
                <p className="mt-5 rounded-lg bg-(--amber)/10 p-3 text-sm leading-relaxed text-(--charcoal)">{resultado.aviso}</p>
              )}
            </>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-(--mid)">
              Completa los datos del formulario para ver cuántos gramos necesita tu gato al día.
            </p>
          )}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-(--mid)">
          Este cálculo es orientativo. No sirve para gatitos menores de 1 año, gatas gestantes o lactantes, ni para gatos
          con enfermedades. Antes de cambiar la dieta, consulta a tu veterinario.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-(--mid)">
          Si cambias de alimento, mézclalo con el anterior durante unos 10 días. Empieza con poca cantidad de comida nueva
          y aumenta la proporción cada día, para evitar vómitos y molestias digestivas.
        </p>
      </section>
    </div>
  );
}

function OpcionRadio({
  name,
  value,
  label,
  detalle,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  detalle?: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex min-h-11 cursor-pointer flex-col justify-center rounded-lg border px-4 py-2 text-sm transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-(--amber-dark) ${
        checked
          ? "border-(--charcoal) bg-(--charcoal) text-white"
          : "border-black/15 bg-white text-(--charcoal) hover:border-(--amber)"
      }`}
    >
      <span className="flex items-center gap-2">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="accent-(--amber-dark)"
        />
        <span className="font-semibold">{label}</span>
      </span>
      {detalle && <span className={`mt-0.5 pl-6 text-xs ${checked ? "text-white/80" : "text-(--mid)"}`}>{detalle}</span>}
    </label>
  );
}
