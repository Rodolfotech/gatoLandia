/** Quita el marcado de negrita del texto del contenido. */
export function stripMarkup(text: string) {
  return text.replace(/\*\*/g, "");
}

/** Corta el texto en la última palabra completa que quepa en `max` caracteres. */
export function truncateAtWord(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[,;:\s]+$/, "")}…`;
}

/** Descripción para metadatos: texto sin marcado y cortado en una palabra completa. */
export function metaDescription(text: string) {
  return truncateAtWord(stripMarkup(text), 160);
}

/** Imagen para compartir de un tema (generada en public/og/temas/, 1200×630). */
export function topicOgImage(topicSlug: string) {
  const name = topicSlug.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  return `/og/temas/${name}.webp`;
}
