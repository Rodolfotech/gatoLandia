import type { ArticleItem } from "./useArticleFeed";
import { normalizeText } from "./useArticleFeed";

/** Distancia de edición entre dos palabras (cuántos cambios separan una de otra). */
function distance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const current = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = current;
    }
  }
  return row[b.length];
}

/**
 * Palabras reales del contenido parecidas a lo escrito: empiezan igual o se diferencian en 1-2 letras.
 * Devuelve la forma que aparece en los títulos, para que la sugerencia sea una palabra que existe.
 */
export function suggestTerms(query: string, articles: ArticleItem[], limit = 4): string[] {
  const q = normalizeText(query.trim());
  if (q.length < 3) return [];

  const words = new Map<string, string>();
  for (const { cat, sub, topic } of articles) {
    for (const text of [topic.title, sub.label, cat.label, ...topic.sections.map((sec) => sec.heading)]) {
      for (const raw of text.split(/\s+/)) {
        const word = raw.replace(/[^\p{L}]/gu, "").toLowerCase();
        if (word.length < 4) continue;
        const key = normalizeText(word);
        if (!words.has(key)) words.set(key, word);
      }
    }
  }

  return [...words.entries()]
    .map(([key, word]) => ({
      word,
      score: key.startsWith(q) ? 0 : Math.min(distance(q, key), distance(q, key.slice(0, q.length))),
    }))
    .filter(({ score, word }) => score <= 2 && normalizeText(word) !== q)
    .sort((a, b) => a.score - b.score || a.word.localeCompare(b.word))
    .slice(0, limit)
    .map(({ word }) => word);
}
