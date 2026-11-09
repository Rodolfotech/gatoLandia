# SPEC — GatoLandia (AlmaGatuna · Enciclopedia Felina)

## 1. Propósito

Sitio de divulgación sobre gatos en español. Organiza el conocimiento en categorías → subcategorías → temas, con textos largos por secciones, imágenes, un asistente de chat y formularios de contacto.

**Público**: dueños de gatos y personas que se plantean adoptar uno. Tono cercano, informativo y no alarmista.

## 2. Mapa del sitio

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `app/page.tsx` (metadatos) y `app/components/HomePage.tsx` (contenido) | Portada: encabezado, acceso a herramientas y feed de artículos con filtros |
| `/calculadora` | `app/calculadora/page.tsx` | Calculadora de ración diaria de alimento (ver 5.8) |
| `/edad-gato` | `app/edad-gato/page.tsx` | Conversor de edad a años humanos con consejos por etapa (ver 5.8) |
| `/toxicos` | `app/toxicos/page.tsx` | Buscador de alimentos y plantas con semáforo de toxicidad (ver 5.8) |
| `/categoria/[categorySlug]` | `app/categoria/[categorySlug]/page.tsx` | Vista general de una categoría (lista de temas) |
| `/categoria/[categorySlug]/[subcategorySlug]` | `.../[subcategorySlug]/page.tsx` | Redirige al primer tema de la subcategoría |
| `/categoria/[c]/[s]/[topicSlug]` | `TopicContentPage.tsx` | Contenido de un tema (secciones, imágenes, anuncios) |
| `/razas` | `app/razas/page.jsx` | Listado de razas (consume API externa) |
| `/preguntas` | `app/preguntas/page.jsx` | Preguntas frecuentes |
| `/contacto` | `app/contacto/page.tsx` | Formulario de contacto con adjuntos |
| `/sobre-nosotros`, `/privacidad`, `/terminos` | páginas legales e institucionales | — |
| `/sitemap.xml` | `app/sitemap.ts` | Sitemap generado desde los datos |

Navegación global en `app/layout.tsx`: `Navbar`, `Footer`, `TrackingScripts` (Google Tag Manager, Clarity y el evento de cambio de página, solo con consentimiento), Google AdSense e `I18nProvider`.

La barra de navegación enlaza a las páginas principales y a las herramientas (Calculadora, Edad felina, Toxicidad). Desde 1536 px muestra los enlaces en línea; por debajo, el menú es un botón desplegable.

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
- Datos auxiliares, todos con el mismo criterio de `slug`:
  - `app/data/feedGroups.ts`: agrupa las 14 categorías originales en 6 grupos para los chips de la portada y de los artículos (cada grupo lista sus categorías originales como subfiltros).
  - `app/data/herramientas.ts`: qué herramientas se recomiendan en cada tema (bloque "Herramientas relacionadas").
  - `app/data/sources.ts`: fuentes bibliográficas y su asignación a temas (bloque "Fuentes y referencias").
  - `app/data/toxicidad.ts`: alimentos y plantas con su nivel de toxicidad (buscador `/toxicos`).
  - `app/data/authors.ts`: autor que aparece en la firma de los artículos.

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
- Portada y artículos comparten el mismo bloque de filtros (`FeedBrowser`, con `FeedControls` y `FeedResults`):
  - Chips de los 6 grupos más "Todas", con el número de artículos en cada uno. En escritorio bajan a otra línea; en móvil se desplazan con un degradado al borde.
  - Al elegir un grupo aparece un panel con sus categorías originales (subfiltros). Incluye "Todas" para volver al grupo completo.
  - Resultados de 6 por página, con el texto "Mostrando X–Y de Z artículos en …" y paginación numerada (`Pagination`, con `numbered`).
  - Tarjetas (`TopicCard`) con la categoría y el subtema como enlaces propios.
  - Búsqueda y "Quitar filtro" disponibles en la portada y en las páginas de categoría.
- Paginación de los temas (`Pagination`), con "Tema X de Y" y el botón "Volver" junto al contador (`BackButton`).
- Los helpers de ruta y teclado están en `app/lib/routes.ts` y `app/lib/keyboardNav.ts`.

### 5.2 Tema (página de contenido)
- Muestra título, intro y secciones; cada sección puede traer imagen (`ImageCarousel` o imagen simple) y un espacio de anuncio (`AdBanner`).
- Al final del artículo aparecen, en este orden: el bloque "Explora más artículos" (`FeedBrowser`, abierto en la categoría del tema), "Herramientas relacionadas" (`ArticleTools`) y "Fuentes y referencias" (`ArticleSources`), antes del pie de página.
- La firma del artículo (`ArticleByline`) muestra el autor de `app/data/authors.ts` y enlaza a "Sobre nosotros". El JSON-LD incluye el autor (`Person`) y las citas (`citation`).
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
- `app/sitemap.ts` incluye la portada, las páginas fijas (incluidas las herramientas), las categorías, los 49 temas y las páginas de paginación de razas. Las subcategorías no van: redirigen al primer tema.
- `app/robots.txt` (en `public/robots.txt`) permite todo el sitio y apunta al sitemap.

### 5.8 Herramientas
- **Calculadora de ración** (`/calculadora`): energía en reposo = 70 × peso^0,75 kcal/día; energía diaria = reposo × factor (castrado 1,0 / 1,2 / 1,4 y entero 1,2 / 1,4 / 1,6, según actividad baja / moderada / alta); gramos = energía ÷ kcal por gramo del envase. Lógica en `app/lib/racion.ts`, formulario en `app/components/RacionCalculator.tsx`. No aplica a gatitos menores de 1 año, gestantes ni lactantes; avisa a partir de los 10 años.
- **Conversor de edad** (`/edad-gato`): primer año = 15 años humanos, segundo = 9 más, después 4 por año. Etapas: gatito (menos de 1 año), adulto (1 a 9) y senior (10 o más). Lógica en `app/lib/edadFelina.ts`, interfaz en `app/components/EdadConversor.tsx`.
- **Buscador de toxicidad** (`/toxicos`): semáforo verde / amarillo / rojo por alimento o planta. Datos en `app/data/toxicidad.ts`, búsqueda en `app/lib/toxicidad.ts` (coincidencia por nombre y alias, y búsqueda por palabras en preguntas completas). Los niveles y su texto de acción están en `NIVELES`.
- Los campos de texto de las tres herramientas llevan `data-clarity-mask="True"`.

### 5.9 Medición y consentimiento
- Google Tag Manager (`GTM-TG3767RF`, en `app/components/GoogleTagManager.tsx`). Google Analytics 4 se configura **dentro de GTM**: no hay carga directa de `gtag.js` desde el sitio.
- `GaPageView` envía al `dataLayer` un evento `pageview` en cada cambio de página, sin recargar. En GTM, la etiqueta de GA4 debe dispararse con "Todas las páginas" y con un disparador de evento personalizado llamado `pageview`.
- Microsoft Clarity (`app/components/MicrosoftClarity.tsx`), con el enmascaramiento en modo Equilibrado en su panel. Los campos de texto con datos del visitante llevan `data-clarity-mask`.
- `TrackingScripts` monta GTM, el evento de página y Clarity solo cuando el visitante acepta las cookies (`consentStore`). Si rechaza, no se carga ninguno.
- AdSense se controla aparte, según `docs/adsense.md`.

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
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Google AdSense | No |

`NEXT_PUBLIC_GA_MEASUREMENT_ID` ya no lo usa el código: el ID de GA4 vive en el contenedor de GTM. Puede eliminarse de Vercel.

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
