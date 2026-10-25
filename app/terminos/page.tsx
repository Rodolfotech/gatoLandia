import type { Metadata } from "next";
import LegalSection from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Condiciones de uso de AlmaGatuna: carácter informativo del contenido, asistente virtual, propiedad intelectual, publicidad y limitación de responsabilidad.",
  openGraph: {
    title: "Términos y Condiciones · AlmaGatuna · Enciclopedia Felina",
    description: "Condiciones de uso de AlmaGatuna.",
  },
};

const P = "mb-4 leading-relaxed text-(--charcoal)";
const UL = "mb-4 list-disc space-y-2 pl-5 leading-relaxed text-(--charcoal)";
const LINK = "underline underline-offset-4 hover:text-(--amber-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)";

const SECCIONES = [
  { id: "informativo", titulo: "Carácter informativo y descargo de responsabilidad veterinaria" },
  { id: "asistente", titulo: "Uso del asistente virtual y herramientas con inteligencia artificial" },
  { id: "propiedad", titulo: "Propiedad intelectual y uso aceptable" },
  { id: "publicidad", titulo: "Publicidad, enlaces externos y servicios de terceros" },
  { id: "responsabilidad", titulo: "Limitación de responsabilidad" },
  { id: "modificaciones", titulo: "Modificaciones de los términos" },
  { id: "contacto", titulo: "Contacto y consultas" },
];

export default function TerminosPage() {
  return (
    <div className="page-shell py-12 md:py-16">
      <h1
        className="text-4xl leading-tight text-(--charcoal) md:text-5xl"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
      >
        Términos y Condiciones de Uso
      </h1>
      <p className="mt-3 text-sm text-(--mid)">Última actualización: 25 de octubre de 2026</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[14rem_minmax(0,1fr)]">
        <nav aria-label="Contenido de los términos" className="md:sticky md:top-28 md:self-start">
          <p className="text-sm font-semibold text-(--charcoal)">En estos términos</p>
          <ol className="mt-3 space-y-2 text-sm">
            {SECCIONES.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={`flex gap-2 rounded-md py-1 text-(--mid) hover:text-(--charcoal) ${LINK}`}>
                  <span className="w-5 shrink-0 text-right tabular-nums">{i + 1}</span>
                  <span>{s.titulo}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-4">
          <p className={P}>
            Bienvenido a <strong>AlmaGatuna</strong>, www.almagatuna.com, en adelante &quot;el Sitio&quot;. Al acceder, navegar y
            utilizar este portal, aceptas de forma plena y sin reservas los presentes Términos y Condiciones de Uso. Si no estás
            de acuerdo con alguna de las disposiciones aquí establecidas, te recomendamos no continuar con el uso del sitio.
          </p>

          <LegalSection id="informativo" numero={1} titulo={SECCIONES[0].titulo}>
            <p className={P}>
              Todo el contenido publicado en AlmaGatuna —incluyendo artículos editoriales, guías de cuidado, fichas de razas,
              consejos sobre alimentación y respuestas emitidas por herramientas interactivas— tiene fines{" "}
              <strong>exclusivamente educativos, divulgativos y de orientación general</strong>.
            </p>
            <ul className={UL}>
              <li>
                <strong>No constituye atención médica:</strong> en ningún caso el material publicado sustituye, complementa o
                equivale a un diagnóstico clínico veterinario, tratamiento médico, pronóstico o receta farmacéutica.
              </li>
              <li>
                <strong>Consulta profesional indispensable:</strong> ante cualquier síntoma de enfermedad, cambio conductual,
                accidente o sospecha de malestar en tu mascota, es tu responsabilidad acudir de inmediato a un médico veterinario
                matriculado o colegiado.
              </li>
              <li>
                El usuario asume de forma exclusiva cualquier riesgo derivado del uso o interpretación práctica de la información
                provista en este sitio.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="asistente" numero={2} titulo={SECCIONES[1].titulo}>
            <p className={P}>
              El Sitio puede incorporar módulos de conversación interactiva o chat potenciados por tecnologías de inteligencia
              artificial de terceros:
            </p>
            <ul className={UL}>
              <li>
                Las respuestas generadas por el asistente virtual son automáticas, orientativas y no están revisadas en tiempo
                real por profesionales veterinarios.
              </li>
              <li>
                El usuario se compromete a utilizar el chat de manera ética, absteniéndose de introducir comandos maliciosos,
                lenguaje ofensivo o información personal confidencial propia o de terceros.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="propiedad" numero={3} titulo={SECCIONES[2].titulo}>
            <ul className={UL}>
              <li>
                Los textos originales, logotipos, elementos gráficos, estructura de navegación, código y diseño del portal son
                propiedad del equipo editorial de AlmaGatuna o se utilizan bajo licencias autorizadas y estándares de atribución.
              </li>
              <li>
                Se permite la lectura personal, citas breves con atribución directa mediante enlace activo a la fuente original, y
                compartir enlaces en redes sociales.
              </li>
              <li>
                Queda terminantemente prohibida la extracción automatizada masiva (<em>web scraping</em> no autorizado), la
                reproducción total de artículos sin consentimiento previo por escrito o la comercialización directa del contenido
                del sitio.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="publicidad" numero={4} titulo={SECCIONES[3].titulo}>
            <ul className={UL}>
              <li>
                <strong>Espacios publicitarios:</strong> el Sitio financia sus costos técnicos y de mantenimiento mediante redes
                publicitarias de terceros, como Google AdSense. Los anunciantes son los únicos responsables por la exactitud de sus
                promociones, productos o servicios ofrecidos en los banners.
              </li>
              <li>
                <strong>Enlaces salientes:</strong> almagatuna.com puede contener hipervínculos hacia sitios web externos
                administrados por terceros. No tenemos control sobre el contenido, políticas de privacidad o disponibilidad de
                dichos sitios, por lo que su visita se realiza bajo tu propia cuenta y riesgo.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="responsabilidad" numero={5} titulo={SECCIONES[4].titulo}>
            <p className={P}>Dentro del marco legal aplicable:</p>
            <ul className={UL}>
              <li>
                La administración de AlmaGatuna no se hace responsable por perjuicios, pérdidas, diagnósticos erróneos caseros ni
                daños directos o indirectos relacionados con la salud de tus mascotas derivados de decisiones basadas en los
                contenidos del Sitio.
              </li>
              <li>
                No garantizamos la ausencia total de interrupciones temporales del servidor, caídas de conexión, errores de código o
                elementos técnicos ajenos a nuestro control razonable.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="modificaciones" numero={6} titulo={SECCIONES[5].titulo}>
            <p className={P}>
              Nos reservamos el derecho de actualizar, modificar o reemplazar estos Términos y Condiciones en cualquier momento
              para reflejar novedades legales, técnicas o de funcionamiento del portal. Las modificaciones entrarán en vigencia
              desde el momento de su publicación en esta misma URL, reflejándose en la fecha de &quot;Última actualización&quot;
              del encabezado.
            </p>
          </LegalSection>

          <LegalSection id="contacto" numero={7} titulo={SECCIONES[6].titulo}>
            <p className={P}>
              Para cualquier duda, aclaración, reporte de errores o solicitud relacionada con estos Términos y Condiciones, puedes
              ponerte en contacto con la administración del sitio a través del canal oficial:
            </p>
            <ul className={UL}>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a className={LINK} href="mailto:correoalmagatuna@gmail.com">correoalmagatuna@gmail.com</a>
              </li>
            </ul>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
