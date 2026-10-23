export interface RouteSelection {
  categorySlug: string;
  subcategorySlug?: string;
  topicSlug?: string;
}

/** Lee la selección actual desde la URL: /categoria/[cat]/[sub]/[topic]. */
export function parseCategoryPath(pathname: string | null): RouteSelection | null {
  const [, root, categorySlug, subcategorySlug, topicSlug] = (pathname ?? "").split("/");
  if (root !== "categoria" || !categorySlug) return null;
  return { categorySlug, subcategorySlug, topicSlug };
}

/** Next puede pasar los segmentos de la URL con caracteres codificados (p. ej. ñ como %C3%B1). */
export function decodeParams<T extends Record<string, string>>(params: T): T {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, decodeURIComponent(value)]),
  ) as T;
}

/** Guía de primeros auxilios: la usan la barra superior y la tarjeta de urgencia de los artículos. */
export const EMERGENCY_HREF = "/categoria/emergencia/emergencias-felinas/guia-primeros-auxilios-gatitos";
