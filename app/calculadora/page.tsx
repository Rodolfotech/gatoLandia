import type { Metadata } from "next";
import RacionCalculator from "../components/RacionCalculator";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";
const PAGINA_URL = `${SITE_URL}/calculadora`;

const TITULO = "Calculadora de comida para gatos";
const DESCRIPCION =
  "Calcula cuántos gramos de comida húmeda o seca necesita tu gato al día según su peso, edad, actividad y si está castrado. Gratis y orientativa.";

const PREGUNTAS = [
  {
    pregunta: "¿Cuánta comida necesita un gato al día?",
    respuesta:
      "Depende del peso, la edad, la actividad y de si el gato está castrado. Por ejemplo, un gato de 4 kg, castrado y con actividad moderada, necesita unas 240 kcal al día. Con un alimento seco de 380 kcal por 100 g, eso equivale a unos 63 g.",
  },
  {
    pregunta: "¿La calculadora sirve para comida húmeda?",
    respuesta:
      "Sí. Elige «Húmedo» e indica las kcal por 100 g que aparecen en la lata o el sobre. Ese dato cambia mucho entre productos, así que no conviene usar un valor genérico.",
  },
  {
    pregunta: "¿Sirve para gatitos?",
    respuesta:
      "No. La calculadora está pensada para gatos de 1 año o más. Los gatitos tienen necesidades de crecimiento distintas, y las gatas gestantes o lactantes también quedan fuera.",
  },
];

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  const datosEstructurados = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: TITULO,
      url: PAGINA_URL,
      description: DESCRIPCION,
      applicationCategory: "HealthApplication",
      operatingSystem: "Cualquiera",
      browserRequirements: "Requiere JavaScript",
      inLanguage: "es",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CLP" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PREGUNTAS.map(({ pregunta, respuesta }) => ({
        "@type": "Question",
        name: pregunta,
        acceptedAnswer: { "@type": "Answer", text: respuesta },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-(--cream)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
      />

      <header className="border-b border-black/5 bg-white/60 py-12 md:py-14">
        <div className="page-shell">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--amber-dark)">Herramienta gratuita</p>
          <h1
            className="mt-3 text-4xl leading-tight text-(--charcoal) md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            Calculadora de comida para gatos
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-(--mid)">
            Indica el peso, la edad y el estilo de vida de tu gato, y te diremos cuántos gramos de comida húmeda o seca
            necesita al día.
          </p>
        </div>
      </header>

      <main className="page-shell py-10 md:py-12">
        <RacionCalculator />

        <section aria-labelledby="faq-titulo" className="mt-14 max-w-3xl">
          <h2 id="faq-titulo" className="text-2xl text-(--charcoal)" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Preguntas frecuentes
          </h2>
          <div className="mt-5 grid gap-6">
            {PREGUNTAS.map(({ pregunta, respuesta }) => (
              <div key={pregunta}>
                <h3 className="text-lg font-semibold text-(--charcoal)">{pregunta}</h3>
                <p className="mt-2 leading-relaxed text-(--mid)">{respuesta}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
