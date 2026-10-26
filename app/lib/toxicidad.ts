import { ELEMENTOS, type Elemento, type Nivel } from "../data/toxicidad";
import { normalizeText } from "./useArticleFeed";

export const NIVELES: Record<Nivel, { titulo: string; accion: string }> = {
  verde: {
    titulo: "Puede comerlo con moderación",
    accion: "Puede darlo en pequeñas cantidades, sin sal, azúcar ni condimentos.",
  },
  amarillo: {
    titulo: "Consulta antes",
    accion: "Pregunta a tu veterinario antes de dárselo.",
  },
  rojo: {
    titulo: "No le des",
    accion: "Si ya lo comió, llama a tu veterinario o a una clínica de urgencia cuanto antes.",
  },
};

/** Coincide si el texto está en el nombre o en un alias. Con menos de 3 letras, solo coincide un alias exacto. */
function coincide(elemento: Elemento, consulta: string): boolean {
  const nombre = normalizeText(elemento.nombre);
  const alias = elemento.alias.map(normalizeText);

  if (consulta.length < 3) return alias.includes(consulta) || nombre === consulta;
  return nombre.includes(consulta) || alias.some((a) => a.includes(consulta));
}

// Palabras de relleno de las preguntas ("¿pueden comer zapallo?"): no aportan al buscar.
const RELLENO = new Set([
  "puede", "pueden", "puedo", "comer", "come", "comen", "dar", "darle", "es", "son", "esta", "toxico", "toxica",
  "malo", "mala", "para", "gato", "gatos", "mi", "el", "la", "los", "las", "un", "una", "que", "con", "del", "de",
]);

function elementosPara(consulta: string): Elemento[] {
  return ELEMENTOS.filter((e) => coincide(e, consulta));
}

/** Busca alimentos y plantas. Las coincidencias exactas aparecen primero. */
export function buscarElementos(texto: string): Elemento[] {
  const consulta = normalizeText(texto.trim());
  if (consulta === "") return [];

  let encontrados = elementosPara(consulta);

  // Si la frase completa no coincide, busca cada palabra útil ("¿pueden comer zapallo?" → "zapallo").
  if (encontrados.length === 0) {
    const palabras = consulta.split(/[^a-z0-9ñ]+/).filter((p) => p.length >= 3 && !RELLENO.has(p));
    encontrados = [...new Set(palabras.flatMap((p) => elementosPara(p)))];
  }

  const exacta = (e: Elemento) => normalizeText(e.nombre) === consulta || e.alias.map(normalizeText).includes(consulta);
  return encontrados.sort((a, b) => Number(exacta(b)) - Number(exacta(a)));
}
