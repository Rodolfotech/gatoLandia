import { Locale } from './types';

/* ────────────────────────────────────────────────────────────
   Diccionario de traducciones — GatoLandia i18n
   Para añadir una nueva clave, hazlo en todos los locales.
   ──────────────────────────────────────────────────────────── */

export const translations: Record<Locale, Record<string, string>> = {
  // ── Español ──────────────────────────────────────────────
  es: {
    // Navbar
    nav_logo: 'Gatitos',
    nav_guides: 'Guías',
    nav_questions: 'Preguntas',
    nav_encyclopedia: 'Enciclopedia',
    nav_language: 'Idioma',

    // Landing
    landing_badge: 'Enciclopedia Felina Completa',
    landing_title_1: 'El Universo',
    landing_title_2: 'Felino',
    landing_subtitle:
      'Todo lo que necesitas saber sobre los gatos, organizado por categorías, subcategorías y temas.',
    landing_stats_categories: 'Categorías',
    landing_stats_subcategories: 'Subcategorías',
    landing_stats_topics: 'Temas',
    landing_stats_feline: 'Felino',

    // Chat
    chat_title: 'MiauBot',
    chat_subtitle: 'Asistente Felino • Powered by IA',
    chat_placeholder: 'Pregunta sobre gatos...',
    chat_welcome:
      '¡Miau! 🐱 Soy MiauBot, tu asistente felino. Pregúntame lo que quieras sobre gatos: razas, cuidados, alimentación, comportamiento, salud... ¡Estoy aquí para ayudarte!',
    chat_error:
      '¡Ups! 😿 Mi cola se enredó con el servidor. Intenta de nuevo en un momento.',
    chat_send: '➤',

    // TopicContent
    topic_prev: '← Anterior',
    topic_next: 'Siguiente →',
    topic_prev_label: 'Anterior',
    topic_next_label: 'Siguiente',

    // ContentType labels (for Navbar)
    content_guides: 'Guías',
    content_questions: 'Preguntas',
    content_encyclopedia: 'Enciclopedia',

    // Footer
    footer_tagline: 'Enciclopedia Felina - Hecho con amor por los gatos',

    // Sidebar
    sidebar_explore: 'Explorar contenido',

    // Read topic link
    read_topic: 'Leer tema',
  },




};

/* ────────────────────────────────────────────────────────────
   Helper: obtiene una traducción, con fallback al español
   ──────────────────────────────────────────────────────────── */

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations['es'][key] ?? key;
}
