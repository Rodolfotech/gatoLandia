# SPEC — GatoLandia (AlmaGatuna · Enciclopedia Felina)

## 1. Propósito

Sitio de divulgación sobre gatos en español. Organiza el conocimiento en categorías → subcategorías → temas, con textos largos por secciones, imágenes, un asistente de chat y formularios de contacto.

**Público**: dueños de gatos y personas que se plantean adoptar uno. Tono cercano, informativo y no alarmista.

## 2. Mapa del sitio

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `app/page.tsx` | Portada: hero, tarjetas de categorías, contenido destacado, carrusel |
| `/categoria/[categorySlug]` | `app/categoria/[categorySlug]/page.tsx` | Vista general de una categoría (lista de temas) |
| `/categoria/[categorySlug]/[subcategorySlug]` | `.../[subcategorySlug]/page.tsx` | Redirige al primer tema de la subcategoría |
| `/categoria/[c]/[s]/[topicSlug]` | `TopicContentPage.tsx` | Contenido de un tema (secciones, imágenes, anuncios) |
| `/razas` | `app/razas/page.jsx` | Listado de razas (consume API externa) |
| `/preguntas` | `app/preguntas/page.jsx` | Preguntas frecuentes |
| `/contacto` | `app/contacto/page.tsx` | Formulario de contacto con adjuntos |
| `/sobre-nosotros`, `/privacidad`, `/terminos` | páginas legales e institucionales | — |
| `/sitemap.xml` | `app/sitemap.ts` | Sitemap generado desde los datos |

Navegación global en `app/layout.tsx`: `Navbar`, `Footer`, Google Analytics, Google AdSense e `I18nProvider`.

## 3. Modelo de contenido

Fuente de verdad: `app/data/cats.ts`.

```
Category     { slug, label, emoji, color, bg, description, subcategories[] }
 └ Subcategory { slug, label, topics[] }
    └ Topic    { slug, title, intro, sections[] }
       └ Section { heading, body, image?, adSlot? }
```

- `slug` es único dentro de su nivel y forma parte de la URL.
- `color` y `bg` por categoría alimentan los estilos de tarjetas y barras.
- `intro` también sirve como descripción SEO (recortada a 160 caracteres).
- Las traducciones viven en `app/i18n/content/` y se fusionan sobre el contenido original por `slug` (`mergeCategories`). Si una traducción no existe, se usa el original.
- `app/data/topics.ts` es un borrador incompleto (solo Salud y Comportamiento); no es la fuente de navegación.

Imágenes: se sirven desde `public/` y desde `i.postimg.cc` (dominio permitido en `next.config.ts`).

## 3.1 Reglas de redacción de los artículos

Aplican a todos los textos de `app/data/cats.ts`, sin excepción:

- **Sin nombres de países, ciudades ni normativas de un lugar concreto.** Usa "tu país", "tu zona", "la normativa local" o "en algunas regiones".
- **Oraciones genéricas.** Si un dato cambia según el lugar, di que varía y remite al veterinario. No escribas datos válidos solo para una zona.
- **Se permiten** continentes, mares, ríos y nombres de personas o de hechos históricos (por ejemplo, "el Nilo", "el Mediterráneo", "Asia Oriental").
- **Tono cercano** y frases cortas. Evita tecnicismos sin explicación. Las advertencias de seguridad y de salud se mantienen, aunque el texto sea sencillo.
- **Tablas** para datos comparables (calendarios, señales, opciones, pasos). Las tablas usan una línea por fila, que empieza con `|`.

**Por qué:** el sitio se lee en varios países, y los datos de un lugar pueden no aplicar en otro.

## 4. Internacionalización

- Único idioma activo: `es` (`app/i18n/types.ts`). La infraestructura (`LOCALES`, `t()`, `I18nContext`) está lista para más idiomas.
- `t(key)` busca en `app/i18n/dictionary.ts`.
- `locale` se envía también al endpoint de chat para responder en el idioma activo.

## 5. Funcionalidades

### 5.1 Navegación
- Las categorías van en una fila de pestañas arriba del contenido (`CategoryNav`, en `app/categoria/layout.tsx`). Debajo de la pestaña activa aparecen sus subcategorías y temas, agrupados por subcategoría.
- Todo el estado de navegación vive en la URL: el botón atrás y los enlaces funcionan. La pestaña activa y el tema actual se marcan con `aria-current="page"`.
- Flechas ← → (también Inicio y Fin) recorren las pestañas y los temas.
- `Navbar` (global): enlaces reales con `aria-current="page"` en la página activa. En móvil, el menú es un botón con `aria-expanded` que se cierra con Escape.
- Botón **Emergencia** fijo en la barra global, visible en todas las páginas y en móvil, que lleva a la guía de primeros auxilios (`/categoria/emergencia/emergencias-felinas/guia-primeros-auxilios-gatitos`).
- `Footer`: categorías generadas desde los datos (`/categoria/[slug]`), enlaces institucionales y legales. No hay enlaces de marcador (`#`).
- `Breadcrumb`: ruta corta (Inicio › Categoría › Subcategoría), sin el tema, porque el título y la lista ya lo muestran. Usa `aria-label="Ruta de navegación"` y `aria-current="page"` en el último elemento.
- Enlace "Saltar al contenido" al inicio de la página, que lleva a `#contenido` (el `main`).
- Home (`app/page.tsx`): feed tipo blog con todos los temas como tarjetas (`TopicCard`), búsqueda, filtro por categoría y botón "Cargar más" (12 por paso).
- Paginación (`Pagination`) en los temas.
- Los helpers de ruta y teclado están en `app/lib/routes.ts` y `app/lib/keyboardNav.ts`.

### 5.2 Tema (página de contenido)
- Muestra título, intro y secciones; cada sección puede traer imagen (`ImageCarousel` o imagen simple) y un espacio de anuncio (`AdBanner`).
- `Topicontent.tsx` es el componente principal de render (≈1000 líneas): candidato a dividirse en átomos/moléculas si se toca.

### 5.3 Asistente MiauBot (`ChatWidget`)
- Widget flotante. Llama a `POST /api/chat` con `{ message, locale }`.
- El backend usa OpenRouter con `meta-llama/llama-3.3-70b-instruct`, temperatura 0.8, máximo 600 tokens.
- Prompt de sistema: responde solo sobre gatos; si la pregunta es ajena, redirige al tema felino.
- Requiere `OPENROUTER_API_KEY`; sin ella responde 500 con mensaje de configuración.

### 5.4 Contacto (`POST /api/contact`)
- Recibe `multipart/form-data`: `nombre`, `pais`, `correo`, `telefono`, `mensaje` (todos obligatorios) e `imagenes` (opcional, varios archivos).
- Envía correo por SMTP con nodemailer. Destino: `CONTACT_EMAIL` (por defecto `correoalmagatuna@gmail.com`).

### 5.5 Razas (`/razas`)
- Consume `https://api.api-ninja.com/v1/allcats` desde `app/services/catApi.ts`.
- Si la API falla, la página debe mostrar un estado de error legible (no pantalla en blanco).

### 5.6 SEO de temas
- `generateMetadata` de cada tema toma `title`, `description` y `keywords` directamente de `app/data/cats.ts` (descripción = `intro` recortado a 160 caracteres).
- Los cambios de SEO se hacen editando ese archivo y se versionan con commit.
- No hay panel de administración ni almacenamiento externo de metadatos. (Se eliminó el panel `/gnt-admin`, sus APIs y `app/lib/auth.ts`.)

### 5.7 Accesibilidad y SEO transversal
- Metadatos globales y Open Graph en `app/layout.tsx`; JSON-LD `WebSite` y `Organization`.
- Redirecciones 301 para slugs con tildes o espacios (`next.config.ts`). Mantenerlas al renombrar rutas.

## 6. Configuración (variables de entorno)

Definir en `.env.local` (local) o en Vercel (producción). **Nunca versionar.**

| Variable | Uso | Obligatoria |
|---|---|---|
| `OPENROUTER_API_KEY` | Chat MiauBot | Sí para el chat |
| `SMTP_HOST`, `SMTP_PORT` | Servidor de correo (por defecto `smtp.gmail.com:587`) | No |
| `SMTP_USER` | Usuario SMTP | No (por defecto `correoalmagatuna@gmail.com`) |
| `SMTP_PASSWORD` | Contraseña SMTP | Sí para contacto |
| `CONTACT_EMAIL` | Destino del formulario | No |
| `NEXT_PUBLIC_SITE_URL` | URL canónica (por defecto `https://almagatuna.com`) | No |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics | No |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Google AdSense | No |

## 7. Requisitos no funcionales

- **Accesibilidad**: objetivo WCAG 2.1 AA.
- **Responsivo**: mobile-first, sin scroll horizontal, gutter lateral de 16 px en móvil (`--page-padding`).
- **Rendimiento**: `next/image` para imágenes con calidades 25–100; fuentes con `display: swap`.
- **SEO**: metadatos por página, sitemap, URLs en español con guiones, `lang="es"`.
- **Idioma**: toda la UI visible en español.

## 8. Problemas conocidos (a resolver)

Prioridad alta:
1. **Secretos en el código**: `app/services/catApi.ts` tiene una API key hardcodeada. Moverla a variable de entorno y rotar la clave.

Prioridad media:
2. `Topicontent.tsx` concentra demasiada lógica de render; dividir en átomos/moléculas.
3. `app/data/topics.ts` es un borrador incompleto que puede confundir; eliminar o completar.
4. Mezcla de `.tsx` y `.jsx` (`razas`, `preguntas`); unificar a TypeScript.
5. Nombres de componentes sin separación (`Topicontent`, `Categorysidebar`); renombrar a PascalCase consistente en un cambio dedicado.
6. El bloqueo de copiar/clic derecho es fácilmente evitable y perjudica la accesibilidad; revisar si se mantiene.

## 9. Fuera de alcance (por ahora)

- Más idiomas activos.
- Cuentas de usuario públicas o comentarios.
- Comercio electrónico.
