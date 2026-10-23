import { Category, categories } from '../../data/cats';
import { Locale } from '../types';

// Solo hay contenido en español. Para añadir otro idioma, importa aquí su archivo
// de forma estática y fusiona sus textos por slug (ver historial de git).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getContent(locale: Locale): { categories: Category[] } {
  return { categories };
}
