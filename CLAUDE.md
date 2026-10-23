@AGENTS.md

# GatoLandia / AlmaGatuna — guía para Claude

Enciclopedia felina en español (Chile, `locale: es_CL`). Lee [SPEC.md](SPEC.md) antes de cambiar funcionalidades.

## Stack

- Next.js 16.2.4 (App Router) + React 19.2.4 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`) junto a `app/globals.css` con variables CSS (`--cream`, `--amber`, `--charcoal`, …)
- Fuentes vía `next/font/google`: Playfair Display (títulos) y DM Sans (cuerpo)
- Despliegue en Vercel (`vercel.json`)

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción; úsalo para validar cambios antes de dar por cerrada una tarea
- `npm run lint` — ESLint (`eslint.config.mjs`)

## Convenciones del código

- Idioma de la UI y del contenido: **español**. Los comentarios y nombres de dominio (`categories`, `subcategories`, `topics`) también están en español o en el inglés ya usado; sigue el estilo del archivo que editas.
- Imports con alias `@/` (p. ej. `@/app/data/cats`).
- Componentes en `app/components/`, uno por archivo, export default. Los nombres de archivo son inconsistentes (`Topicontent.tsx`, `Categorysidebar.tsx`): no los renombres sin pedirlo.
- Client components solo cuando hay estado o eventos (`'use client'`); las páginas de contenido son Server Components.
- Estilos: prioriza clases de Tailwind y las variables de `globals.css`. Evita añadir `style={{}}` nuevos salvo para valores dinámicos (colores por categoría).
- No pongas claves ni contraseñas en el código. Usa variables de entorno (ver SPEC.md, sección de configuración).

## Accesibilidad, diseño y responsivo

Prioridades al tocar UI (de acuerdo con AGENTS.md):

- **Accesibilidad**: HTML semántico (`nav`, `main`, `section`, encabezados en orden), `alt` descriptivo en imágenes, foco visible, contraste WCAG AA mínimo, objetivos táctiles ≥ 44px, `aria-label` en botones solo-icono. No dependas solo del color para transmitir estado.
- **Diseño atómico**: piezas pequeñas y reutilizables (átomos: botón, badge, icono; moléculas: tarjeta, buscador; organismos: navbar, sidebar, carrusel). Reutiliza antes de duplicar.
- **Responsivo**: mobile-first. Los breakpoints de `globals.css` (768px) y las variables `--page-padding` ya definen el comportamiento; respeta ambos.

## Cuidados al editar

- **Contenido de gatos**: los textos de `app/data/cats.ts` y `app/i18n/content/` son contenido editorial. No los reescribas ni "corrijas" datos médicos sin que el usuario lo pida.
- **Rutas**: las URLs de categorías y temas se usan para SEO y redirecciones en `next.config.ts`. Si cambias un `slug`, agrega la redirección correspondiente.
- **SEO**: los metadatos se calculan desde `app/data/cats.ts`. Para cambiar títulos o descripciones, edita ese archivo; no hay panel ni overrides.
- **Copiar texto**: el texto de los artículos debe poder seleccionarse y copiarse. No añadas `user-select: none` ni bloqueos de clic derecho.
- **Next.js 16**: APIs y convenciones pueden diferir de versiones anteriores. Consulta `node_modules/next/dist/docs/` antes de escribir código de Next.

## Qué no hacer

- No hagas commits ni push sin que el usuario lo pida.
- No añadas dependencias nuevas sin justificarlo.
- No modifiques `package-lock.json` a mano.
