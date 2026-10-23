export const RAZAS_API_URL = "https://api-cats-mauve.vercel.app/api/cats";
export const RAZAS_PAGE_SIZE = 9;

export interface Raza {
  id: number;
  raza: string;
  descripcion: string;
  origen: string;
  tiempo_de_vida: string;
  peso: string;
  imagen: string;
  /** Miniatura de 400 px, servida por la API. Puede faltar hasta que la API se despliegue. */
  miniatura?: string;
}

/**
 * Lee las razas de la API. Si falla, lanza el error: la página responde con error
 * en lugar de indexarse vacía. La caché de Next guarda la última respuesta correcta una hora.
 */
export async function fetchRazas(): Promise<Raza[]> {
  const res = await fetch(RAZAS_API_URL, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`API de razas: ${res.status}`);
  return res.json();
}
