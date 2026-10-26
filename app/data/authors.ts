/** Autor responsable de los artículos. Cambia aquí el nombre o la biografía; la firma y el JSON-LD se calculan desde este archivo. */
export interface Author {
  name: string;
  role: string;
  bio: string;
  url: string;
}

export const editorialAuthor: Author = {
  name: "Rodolfo Parada",
  role: "Fundador y editor",
  bio: "Apasionado de los gatos y la tecnología, creador de AlmaGatuna.",
  url: "/sobre-nosotros",
};
