# AlmaGatuna · Enciclopedia Felina

Sitio de divulgación sobre gatos en español, hecho con Next.js 16, React 19 y Tailwind CSS 4.

La especificación completa (mapa del sitio, modelo de contenido, funcionalidades y variables de entorno) está en [SPEC.md](SPEC.md). Las instrucciones para AdSense están en [docs/adsense.md](docs/adsense.md).

## Requisitos

- Node.js y npm

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo en http://localhost:3000
npm run build      # build de producción; úsalo para validar antes de cerrar un cambio
npm run start      # servir el build de producción
npm run lint       # ESLint
```

## Configuración

Crea `.env.local` con las variables que necesites (la tabla completa está en la sección 6 de [SPEC.md](SPEC.md)). Nunca subas ese archivo al repositorio.

## Estructura

- `app/data/`: contenido y datos de navegación (`cats.ts` es la fuente de los artículos).
- `app/components/`: componentes, uno por archivo.
- `app/lib/`: lógica sin interfaz (búsqueda, cálculos, rutas).
- `app/calculadora`, `app/edad-gato`, `app/toxicos`: herramientas.
- `docs/`: notas de integración y propuestas de contenido.
