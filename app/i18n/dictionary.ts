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

  // ── English (US) ─────────────────────────────────────────
  'en-US': {
    // Navbar
    nav_logo: 'KittyCats',
    nav_guides: 'Guides',
    nav_questions: 'Q&A',
    nav_encyclopedia: 'Encyclopedia',
    nav_language: 'Language',

    // Landing
    landing_badge: 'Complete Feline Encyclopedia',
    landing_title_1: 'The Feline',
    landing_title_2: 'Universe',
    landing_subtitle:
      'Everything you need to know about cats, organized by categories, subcategories, and topics.',
    landing_stats_categories: 'Categories',
    landing_stats_subcategories: 'Subcategories',
    landing_stats_topics: 'Topics',
    landing_stats_feline: 'Feline',

    // Chat
    chat_title: 'MiauBot',
    chat_subtitle: 'Feline Assistant • Powered by AI',
    chat_placeholder: 'Ask about cats...',
    chat_welcome:
      "Meow! 🐱 I'm MiauBot, your feline assistant. Ask me anything about cats: breeds, care, nutrition, behavior, health... I'm here to help!",
    chat_error:
      "Oops! 😿 My tail got tangled with the server. Please try again in a moment.",
    chat_send: '➤',

    // TopicContent
    topic_prev: '← Previous',
    topic_next: 'Next →',
    topic_prev_label: 'Previous',
    topic_next_label: 'Next',

    // ContentType labels
    content_guides: 'Guides',
    content_questions: 'Q&A',
    content_encyclopedia: 'Encyclopedia',

    // Footer
    footer_tagline: 'Feline Encyclopedia - Made with love for cats',

    // Sidebar
    sidebar_explore: 'Explore content',

    // Read topic link
    read_topic: 'Read topic',
  },

  // ── English (UK) ─────────────────────────────────────────
  'en-GB': {
    // Navbar
    nav_logo: 'KittyCats',
    nav_guides: 'Guides',
    nav_questions: 'Q&A',
    nav_encyclopedia: 'Encyclopaedia',
    nav_language: 'Language',

    // Landing
    landing_badge: 'Complete Feline Encyclopaedia',
    landing_title_1: 'The Feline',
    landing_title_2: 'Universe',
    landing_subtitle:
      'Everything you need to know about cats, organised by categories, subcategories, and topics.',
    landing_stats_categories: 'Categories',
    landing_stats_subcategories: 'Subcategories',
    landing_stats_topics: 'Topics',
    landing_stats_feline: 'Feline',

    // Chat
    chat_title: 'MiauBot',
    chat_subtitle: 'Feline Assistant • Powered by AI',
    chat_placeholder: 'Ask about cats...',
    chat_welcome:
      "Meow! 🐱 I'm MiauBot, your feline assistant. Ask me anything about cats: breeds, care, nutrition, behaviour, health... I'm here to help!",
    chat_error:
      "Oops! 😿 My tail got tangled with the server. Please try again in a moment.",
    chat_send: '➤',

    // TopicContent
    topic_prev: '← Previous',
    topic_next: 'Next →',
    topic_prev_label: 'Previous',
    topic_next_label: 'Next',

    // ContentType labels
    content_guides: 'Guides',
    content_questions: 'Q&A',
    content_encyclopedia: 'Encyclopaedia',

    // Footer
    footer_tagline: 'Feline Encyclopaedia - Made with love for cats',

    // Sidebar
    sidebar_explore: 'Explore content',

    // Read topic link
    read_topic: 'Read topic',
  },

  // ── Português ────────────────────────────────────────────
  pt: {
    // Navbar
    nav_logo: 'Gatinhos',
    nav_guides: 'Guias',
    nav_questions: 'Perguntas',
    nav_encyclopedia: 'Enciclopédia',
    nav_language: 'Idioma',

    // Landing
    landing_badge: 'Enciclopédia Felina Completa',
    landing_title_1: 'O Universo',
    landing_title_2: 'Felino',
    landing_subtitle:
      'Tudo o que precisas de saber sobre gatos, organizado por categorias, subcategorias e temas.',
    landing_stats_categories: 'Categorias',
    landing_stats_subcategories: 'Subcategorias',
    landing_stats_topics: 'Temas',
    landing_stats_feline: 'Felino',

    // Chat
    chat_title: 'MiauBot',
    chat_subtitle: 'Assistente Felino • Powered by IA',
    chat_placeholder: 'Pergunta sobre gatos...',
    chat_welcome:
      'Miau! 🐱 Sou o MiauBot, o teu assistente felino. Pergunta-me o que quiseres sobre gatos: raças, cuidados, alimentação, comportamento, saúde... Estou aqui para ajudar!',
    chat_error:
      'Ups! 😿 A minha cauda enroscou-se no servidor. Tenta novamente dentro de um momento.',
    chat_send: '➤',

    // TopicContent
    topic_prev: '← Anterior',
    topic_next: 'Seguinte →',
    topic_prev_label: 'Anterior',
    topic_next_label: 'Seguinte',

    // ContentType labels
    content_guides: 'Guias',
    content_questions: 'Perguntas',
    content_encyclopedia: 'Enciclopédia',

    // Footer
    footer_tagline: 'Enciclopédia Felina - Feito com amor pelos gatos',

    // Sidebar
    sidebar_explore: 'Explorar conteúdo',

    // Read topic link
    read_topic: 'Ler tema',
  },

  // ── Русский ──────────────────────────────────────────────
  ru: {
    // Navbar
    nav_logo: 'Котики',
    nav_guides: 'Руководства',
    nav_questions: 'Вопросы',
    nav_encyclopedia: 'Энциклопедия',
    nav_language: 'Язык',

    // Landing
    landing_badge: 'Полная энциклопедия кошек',
    landing_title_1: 'Кошачья',
    landing_title_2: 'Вселенная',
    landing_subtitle:
      'Всё, что нужно знать о кошках, организовано по категориям, подкатегориям и темам.',
    landing_stats_categories: 'Категории',
    landing_stats_subcategories: 'Подкатегории',
    landing_stats_topics: 'Темы',
    landing_stats_feline: 'Кошачий',

    // Chat
    chat_title: 'МяуБот',
    chat_subtitle: 'Кошачий ассистент • Powered by ИИ',
    chat_placeholder: 'Спроси о кошках...',
    chat_welcome:
      'Мяу! 🐱 Я МяуБот, твой кошачий ассистент. Спрашивай меня о чём угодно: породы, уход, питание, поведение, здоровье... Я здесь, чтобы помочь!',
    chat_error:
      'Упс! 😿 Мой хвост запутался с сервером. Попробуй ещё раз через минуту.',
    chat_send: '➤',

    // TopicContent
    topic_prev: '← Предыдущий',
    topic_next: 'Следующий →',
    topic_prev_label: 'Предыдущий',
    topic_next_label: 'Следующий',

    // ContentType labels
    content_guides: 'Руководства',
    content_questions: 'Вопросы',
    content_encyclopedia: 'Энциклопедия',

    // Footer
    footer_tagline: 'Кошачья энциклопедия - Создано с любовью к кошкам',

    // Sidebar
    sidebar_explore: 'Исследовать контент',

    // Read topic link
    read_topic: 'Читать тему',
  },

  // ── 中文 (简体) ───────────────────────────────────────────
  zh: {
    // Navbar
    nav_logo: '猫咪百科',
    nav_guides: '指南',
    nav_questions: '问答',
    nav_encyclopedia: '百科全书',
    nav_language: '语言',

    // Landing
    landing_badge: '完整的猫咪百科全书',
    landing_title_1: '猫咪',
    landing_title_2: '宇宙',
    landing_subtitle:
      '关于猫咪的一切知识，按类别、子类别和主题精心整理。',
    landing_stats_categories: '类别',
    landing_stats_subcategories: '子类别',
    landing_stats_topics: '主题',
    landing_stats_feline: '猫咪',

    // Chat
    chat_title: '喵喵机器人',
    chat_subtitle: '猫咪助手 • 由 AI 驱动',
    chat_placeholder: '问关于猫咪的问题...',
    chat_welcome:
      '喵！🐱 我是喵喵机器人，你的猫咪助手。问我任何关于猫的问题：品种、护理、营养、行为、健康...我在这里帮助你！',
    chat_error:
      '哎呀！😿 我的尾巴和服务器缠在一起了。请稍后再试。',
    chat_send: '➤',

    // TopicContent
    topic_prev: '← 上一个',
    topic_next: '下一个 →',
    topic_prev_label: '上一个',
    topic_next_label: '下一个',

    // ContentType labels
    content_guides: '指南',
    content_questions: '问答',
    content_encyclopedia: '百科全书',

    // Footer
    footer_tagline: '猫咪百科全书 - 为爱猫而制',

    // Sidebar
    sidebar_explore: '探索内容',

    // Read topic link
    read_topic: '阅读主题',
  },
};

/* ────────────────────────────────────────────────────────────
   Helper: obtiene una traducción, con fallback al español
   ──────────────────────────────────────────────────────────── */

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations['es'][key] ?? key;
}
