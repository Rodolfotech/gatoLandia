/**
 * Grupos de la barra de filtros. Reúnen las categorías originales de cats.ts en seis bloques.
 * Cada `origins` enlaza una categoría original (su slug) con el nombre que aparece en el subfiltro.
 */
export interface FeedOrigin {
  slug: string;
  label: string;
}

export interface FeedGroup {
  slug: string;
  label: string;
  origins: FeedOrigin[];
}

export const feedGroups: FeedGroup[] = [
  {
    slug: "comportamiento",
    label: "Comportamiento",
    origins: [
      { slug: "comportamiento", label: "Comportamiento general" },
      { slug: "juego", label: "Juego" },
    ],
  },
  {
    slug: "salud",
    label: "Salud",
    origins: [
      { slug: "salud", label: "Salud general" },
      { slug: "castracion", label: "Castración" },
      { slug: "emergencia", label: "Emergencias" },
    ],
  },
  {
    slug: "adopcion-tenencia",
    label: "Adopción y tenencia responsable",
    origins: [
      { slug: "adopcion", label: "Adopción" },
      { slug: "adquisicion-responsable", label: "Adquisición responsable" },
      { slug: "tenencia-responsable", label: "Tenencia responsable" },
      { slug: "impacto-conciencia", label: "Impacto y conciencia" },
    ],
  },
  {
    slug: "etapas-vida",
    label: "Etapas de vida",
    origins: [
      { slug: "cuidado-gatito", label: "Cuidado del gatito" },
      { slug: "etapas", label: "Etapas de vida" },
    ],
  },
  {
    slug: "alimentacion",
    label: "Alimentación",
    origins: [{ slug: "alimentacion", label: "Alimentación" }],
  },
  {
    slug: "razas-historia",
    label: "Razas e historia",
    origins: [
      { slug: "razas", label: "Razas" },
      { slug: "historia", label: "Historia y origen" },
    ],
  },
];

/** Grupo al que pertenece una categoría original, o null si no está en ninguno. */
export function groupOf(originSlug: string): FeedGroup | null {
  return feedGroups.find((g) => g.origins.some((o) => o.slug === originSlug)) ?? null;
}
