/** Herramientas de la web que tienen sentido para cada tema. Clave: slug del tema. */
export interface Herramienta {
  titulo: string;
  descripcion: string;
  href: string;
}

const RACION: Herramienta = {
  titulo: "Calculadora de comida",
  descripcion: "Cuántos gramos de comida necesita tu gato al día.",
  href: "/calculadora",
};

const EDAD: Herramienta = {
  titulo: "Edad en años humanos",
  descripcion: "Convierte la edad de tu gato y descubre los cuidados de su etapa.",
  href: "/edad-gato",
};

const TOXICOS: Herramienta = {
  titulo: "¿Es tóxico para mi gato?",
  descripcion: "Semáforo verde, amarillo o rojo para alimentos y plantas.",
  href: "/toxicos",
};

export const topicHerramientas: Record<string, Herramienta[]> = {
  "comida-humeda-vs-seca": [RACION],
  "dieta-barf": [RACION],
  "guia-obesidad-prevencion": [RACION],
  "toxicos-comunes": [TOXICOS],
  "guia-primeros-auxilios-gatitos": [TOXICOS],
  "primeros-auxilios": [TOXICOS],
  "guia-bienvenida-cuidados": [EDAD, TOXICOS],
  "guia-neonatos": [EDAD],
  "primeras-semanas": [EDAD],
  "guia-principios": [EDAD],
  "guia-destete": [RACION, EDAD],
  "cuidados-senior": [EDAD, RACION],
};

/** Herramientas recomendadas para un tema, en el orden declarado. */
export function getTopicHerramientas(topicSlug: string): Herramienta[] {
  return topicHerramientas[topicSlug] ?? [];
}
