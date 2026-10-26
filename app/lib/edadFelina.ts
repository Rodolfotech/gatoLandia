/**
 * Equivalencia orientativa de edad entre gatos y personas.
 * Usa la referencia habitual: el primer año de un gato equivale a unos 15 años humanos, el segundo a 9 más
 * (24 en total) y cada año siguiente a 4 más. Es una aproximación para entender la etapa de vida, no una medida exacta.
 */

export type Etapa = "gatito" | "adulto" | "senior";

export const EDAD_LIMITES = { min: 0, max: 25 };

export function edadHumana(anios: number): number {
  if (anios <= 0) return 0;
  if (anios <= 1) return Math.round(15 * anios);
  if (anios <= 2) return Math.round(15 + 9 * (anios - 1));
  return Math.round(24 + 4 * (anios - 2));
}

/** Etapa de vida según la edad en años. Coincide con el aviso de senior de la calculadora de ración (10 años). */
export function etapaDe(anios: number): Etapa {
  if (anios < 1) return "gatito";
  if (anios < 10) return "adulto";
  return "senior";
}

export const ETAPAS: Record<Etapa, { titulo: string; rango: string; consejos: string[]; enlace: { texto: string; href: string } }> = {
  gatito: {
    titulo: "Gatito",
    rango: "Menos de 1 año",
    consejos: [
      "Vacunas y desparasitación según el calendario de tu veterinario.",
      "Socialización temprana: que conozca personas, sonidos y otros animales de forma tranquila.",
      "Comida pensada para crecer, en varias tomas al día.",
      "Juego diario con cañas o juguetes para gastar energía y aprender a cazar sin morder las manos.",
    ],
    enlace: { texto: "Cuidados de los primeros meses", href: "/categoria/etapas/gatito/primeras-semanas" },
  },
  adulto: {
    titulo: "Adulto",
    rango: "De 1 a 9 años",
    consejos: [
      "Chequeo veterinario al menos una vez al año.",
      "Controla su peso: un gato con sobrepeso tiene más riesgo de problemas de salud.",
      "Esterilización y microchip si aún no los tiene.",
      "Enriquecimiento del hogar: rascadores, escondites y juego con horarios fijos.",
    ],
    enlace: { texto: "Calcula su ración diaria", href: "/calculadora" },
  },
  senior: {
    titulo: "Senior",
    rango: "10 años o más",
    consejos: [
      "Chequeo veterinario cada 6 meses, con análisis de sangre y orina.",
      "Observa cambios de peso, de apetito, de sed o en el uso de la caja de arena.",
      "Revisa la boca: el sarro y la gingivitis son frecuentes en gatos mayores.",
      "El dolor suele pasar desapercibido. Cambios de carácter o dejar de subir a sitios altos pueden ser señal de molestias.",
    ],
    enlace: { texto: "Cuidados del gato mayor", href: "/categoria/etapas/senior/cuidados-senior" },
  },
};
