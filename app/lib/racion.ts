/**
 * Cálculo orientativo de la ración diaria de un gato adulto.
 * Energía en reposo (RER) = 70 × peso^0,75 (kcal/día), la fórmula habitual para gatos adultos.
 * Energía diaria (MER) = RER × factor de actividad y estado. Gramos = MER ÷ kcal por gramo del alimento.
 * No aplica a gatitos menores de 1 año, gestantes ni lactantes, ni a gatos con enfermedades.
 */

export type Estado = "castrado" | "entero";
export type Actividad = "baja" | "moderada" | "alta";
export type TipoAlimento = "seco" | "humedo";

export interface RacionForm {
  peso: string;
  edad: string;
  actividad: Actividad | null;
  estado: Estado | null;
  tipo: TipoAlimento | null;
  kcalPor100g: string;
}

export interface RacionResultado {
  rer: number;
  mer: number;
  gramos: number;
  /** Aviso adicional según la edad (por ejemplo, gatos senior). */
  aviso: string | null;
}

export type RacionErrores = Partial<Record<keyof RacionForm, string>>;

// Factores de actividad y estado. Un gato castrado y poco activo necesita menos energía que uno entero y activo.
const FACTOR: Record<Estado, Record<Actividad, number>> = {
  castrado: { baja: 1.0, moderada: 1.2, alta: 1.4 },
  entero: { baja: 1.2, moderada: 1.4, alta: 1.6 },
};

export const LIMITES = {
  peso: { min: 0.5, max: 15 },
  edad: { min: 1, max: 25 },
  kcalPor100g: { min: 30, max: 600 },
};

/** Valor numérico de un campo, aceptando coma decimal. NaN si no es un número. */
function numero(valor: string): number {
  return Number(valor.trim().replace(",", "."));
}

export function validarRacion(form: RacionForm): RacionErrores {
  const errores: RacionErrores = {};
  const peso = numero(form.peso);
  const edad = numero(form.edad);
  const kcal = numero(form.kcalPor100g);

  if (!form.peso.trim() || Number.isNaN(peso)) {
    errores.peso = "Escribe el peso en kilos, por ejemplo 4,2.";
  } else if (peso < LIMITES.peso.min || peso > LIMITES.peso.max) {
    errores.peso = `El peso debe estar entre ${LIMITES.peso.min} y ${LIMITES.peso.max} kg.`;
  }

  if (!form.edad.trim() || Number.isNaN(edad)) {
    errores.edad = "Escribe la edad en años.";
  } else if (edad < LIMITES.edad.min) {
    errores.edad =
      "Esta calculadora es para gatos de 1 año o más. Para gatitos, sigue la guía de cuidado del gatito.";
  } else if (edad > LIMITES.edad.max) {
    errores.edad = `La edad debe estar entre ${LIMITES.edad.min} y ${LIMITES.edad.max} años.`;
  }

  if (!form.estado) errores.estado = "Elige si el gato está castrado o entero.";
  if (!form.actividad) errores.actividad = "Elige el nivel de actividad.";
  if (!form.tipo) errores.tipo = "Elige el tipo de alimento.";

  if (!form.kcalPor100g.trim() || Number.isNaN(kcal)) {
    errores.kcalPor100g = "Escribe las kcal por 100 g que indica la etiqueta.";
  } else if (kcal < LIMITES.kcalPor100g.min || kcal > LIMITES.kcalPor100g.max) {
    errores.kcalPor100g = `Las kcal por 100 g deben estar entre ${LIMITES.kcalPor100g.min} y ${LIMITES.kcalPor100g.max}.`;
  }

  return errores;
}

/** Calcula la ración. Asume que el formulario ya pasó validarRacion. */
export function calcularRacion(form: RacionForm): RacionResultado {
  const peso = numero(form.peso);
  const edad = numero(form.edad);
  const kcalPor100g = numero(form.kcalPor100g);
  const estado = form.estado!;
  const actividad = form.actividad!;

  const rer = 70 * Math.pow(peso, 0.75);
  const mer = rer * FACTOR[estado][actividad];
  const kcalPorGramo = kcalPor100g / 100;
  const gramos = Math.round(mer / kcalPorGramo);

  const aviso =
    edad >= 10
      ? "A partir de los 10 años el gato puede necesitar menos energía y revisiones más frecuentes. Consulta a tu veterinario antes de cambiar su dieta."
      : null;

  return {
    rer: Math.round(rer),
    mer: Math.round(mer),
    gramos,
    aviso,
  };
}
