import type { Metadata } from "next";
import CookiePreferencesButton from "../components/CookiePreferencesButton";
import LegalSection from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Qué datos recopila AlmaGatuna, para qué los usa, cómo funcionan las cookies y la publicidad de Google, y cómo ejercer tus derechos.",
  openGraph: {
    title: "Política de Privacidad · AlmaGatuna · Enciclopedia Felina",
    description: "Qué datos recopila AlmaGatuna, cookies y publicidad.",
  },
};

const P = "mb-4 leading-relaxed text-(--charcoal)";
const UL = "mb-4 list-disc space-y-2 pl-5 leading-relaxed text-(--charcoal)";
const LINK = "underline underline-offset-4 hover:text-(--amber-dark) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)";

const SECCIONES = [
  { id: "responsable", titulo: "Responsable del tratamiento" },
  { id: "datos", titulo: "Información que recopilamos" },
  { id: "cookies", titulo: "Cookies y tecnologías de medición" },
  { id: "publicidad", titulo: "Publicidad de terceros y cookies de Google" },
  { id: "finalidad", titulo: "Finalidad del tratamiento de los datos" },
  { id: "transferencias", titulo: "Transferencias internacionales y proveedores" },
  { id: "conservacion", titulo: "Período de conservación" },
  { id: "derechos", titulo: "Derechos del usuario" },
  { id: "menores", titulo: "Protección de menores" },
  { id: "salud", titulo: "Descargo de responsabilidad médica veterinaria" },
  { id: "cambios", titulo: "Modificaciones a esta política" },
];

export default function PrivacidadPage() {
  return (
    <div className="page-shell py-12 md:py-16">
      <h1
        className="text-4xl leading-tight text-(--charcoal) md:text-5xl"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
      >
        Política de Privacidad
      </h1>
      <p className="mt-3 text-sm text-(--mid)">Última actualización: 25 de octubre de 2026</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[14rem_minmax(0,1fr)]">
        <nav aria-label="Contenido de la política" className="md:sticky md:top-28 md:self-start">
          <p className="text-sm font-semibold text-(--charcoal)">En esta política</p>
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
            En AlmaGatuna (accesible desde el sitio web almagatuna.com, en adelante &quot;el Sitio&quot;), nos comprometemos
            a respetar y proteger la privacidad y los datos de nuestros usuarios y visitantes en Chile, Latinoamérica y el
            resto del mundo.
          </p>
          <p className={P}>
            Esta Política de Privacidad describe de manera clara, transparente y accesible qué datos recopilamos, con qué
            propósitos los utilizamos, cómo los protegemos y qué opciones y derechos tienes al navegar por nuestro portal de
            contenidos felinos.
          </p>

          <LegalSection id="responsable" numero={1} titulo={SECCIONES[0].titulo}>
            <p className={P}>
              Responsable: equipo editorial y administración de AlmaGatuna, proyecto de divulgación independiente gestionado
              por persona natural.
            </p>
            <p className={P}>Sitio web oficial: almagatuna.com.</p>
            <p className={P}>Ámbito geográfico: Chile y Latinoamérica.</p>
            <p className={P}>
              Canal oficial de contacto y privacidad:{" "}
              <a className={LINK} href="mailto:correoalmagatuna@gmail.com">correoalmagatuna@gmail.com</a>. Para cualquier
              consulta, aclaración o solicitud relacionada con el manejo de datos en este sitio, puedes escribir directamente
              a esa casilla.
            </p>
          </LegalSection>

          <LegalSection id="datos" numero={2} titulo={SECCIONES[1].titulo}>
            <p className={P}>
              Solo recopilamos información personal cuando decides proporcionarla de manera voluntaria o a través de
              tecnologías estándar de navegación en internet.
            </p>
            <p className={P}>
              <strong>Formulario de contacto.</strong> Si nos escribes, recibimos tu nombre, tu dirección de correo electrónico y el mensaje que nos envías. No solicitamos ni aceptamos imágenes ni archivos adjuntos. Usamos estos datos solo para responder tu consulta. Llegan a nuestra
              casilla de correo electrónico y no los guardamos en bases de datos del sitio ni los comercializamos.
            </p>
            <p className={P}>
              <strong>Módulo interactivo de chat con inteligencia artificial.</strong> Las preguntas o comentarios que ingresas
              en el chat conversacional son transmitidos a proveedores de inferencia de inteligencia artificial para generar respuestas automatizadas relativas al cuidado y comportamiento de los gatos. Te
              recomendamos abstenerte de escribir datos personales identificables, claves o información bancaria dentro de la
              ventana de chat.
            </p>
            <p className={P}>
              <strong>Datos técnicos y de navegación.</strong> Durante tu visita se registran de forma automática: tipo y
              versión de tu navegador, sistema operativo del dispositivo, páginas consultadas, fecha y hora de la visita,
              tiempo de permanencia y ubicación aproximada a nivel de país o ciudad. También se registra tu dirección IP, que
              los servidores de alojamiento usan por motivos de seguridad. Google Analytics no almacena direcciones IP completas.
            </p>
            <p className={P}>
              <strong>Identificadores de cookies.</strong> Si aceptas las cookies, Google Analytics, Microsoft Clarity y Google
              AdSense asocian identificadores de cookies a tus visitas para medir el uso del sitio y mostrar publicidad. Lo
              detallamos en las secciones 3 y 4.
            </p>
          </LegalSection>

          <LegalSection id="cookies" numero={3} titulo={SECCIONES[2].titulo}>
            <p className={P}>
              Las cookies son pequeños archivos que se almacenan en tu dispositivo para recordar preferencias, analizar la
              navegación y permitir la visualización de publicidad. Usamos:
            </p>
            <ul className={UL}>
              <li>
                <strong>Cookies técnicas obligatorias:</strong> esenciales para la carga básica del sitio, la seguridad y la
                estabilidad de la plataforma.
              </li>
              <li>
                <strong>Google Analytics (métricas de uso):</strong> emplea cookies como _ga y _gid para recopilar estadísticas
                agregadas y anónimas que nos permiten conocer qué guías y artículos resultan de mayor utilidad para los lectores.
              </li>
              <li>
                <strong>Microsoft Clarity (experiencia y usabilidad):</strong> registra métricas de interacción, mapas de calor
                visuales y grabaciones de sesión anónimas para detectar errores de diseño y enlaces rotos. Los campos de texto
                donde el usuario pudiera escribir datos sensibles quedan automáticamente bloqueados y enmascarados.
              </li>
              <li>
                <strong>Google AdSense y socios publicitarios:</strong> utilizan cookies para desplegar, medir y auditar anuncios
                en los espacios publicitarios del sitio.
              </li>
            </ul>
            <p className={P}>
              <strong>Tu consentimiento.</strong> Google Analytics, Microsoft Clarity y los anuncios de Google solo se activan si
              aceptas las cookies en el aviso que aparece al entrar al sitio. Si rechazas, esos servicios no se cargan y la
              lectura de los artículos sigue igual. Puedes cambiar tu decisión en cualquier momento:
            </p>
            <p className={P}>
              <CookiePreferencesButton />
            </p>
            <p className={P}>
              <strong>Gestión de cookies.</strong> Puedes permitir, bloquear o eliminar las cookies en cualquier momento desde la
              configuración de tu navegador (Chrome, Firefox, Safari, Edge, Opera, etc.). Si bloqueas las cookies funcionales,
              algunos elementos interactivos del sitio podrían funcionar peor, aunque la lectura de todos los artículos
              informativos continúa disponible con normalidad.
            </p>
          </LegalSection>

          <LegalSection id="publicidad" numero={4} titulo={SECCIONES[3].titulo}>
            <p className={P}>
              Este sitio web incluye anuncios administrados a través de Google AdSense. En cumplimiento con las políticas y
              directrices oficiales de Google:
            </p>
            <ul className={UL}>
              <li>
                Google y otros proveedores asociados emplean cookies para publicar anuncios basados en tus visitas anteriores a
                este sitio web o a otros portales de internet.
              </li>
              <li>
                El uso de cookies publicitarias permite a Google y a sus empresas colaboradoras mostrar anuncios relevantes en
                función de las visitas realizadas a sitios web en la red.
              </li>
              <li>
                Puedes desactivar la publicidad personalizada en cualquier momento en la herramienta{" "}
                <a className={LINK} href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                  Configuración de anuncios de Google
                </a>
                .
              </li>
            </ul>
            <p className={P}>
              Si deseas desactivar las cookies publicitarias de proveedores externos independientes, puedes visitar{" "}
              <a className={LINK} href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>{" "}
              (región americana) o{" "}
              <a className={LINK} href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>{" "}
              (visitantes internacionales).
            </p>
          </LegalSection>

          <LegalSection id="finalidad" numero={5} titulo={SECCIONES[4].titulo}>
            <p className={P}>La información técnica y los mensajes recibidos se utilizan para:</p>
            <ul className={UL}>
              <li>Atender, responder y hacer seguimiento a consultas o sugerencias enviadas al correo de contacto.</li>
              <li>Evaluar el rendimiento técnico y mejorar la experiencia de lectura y navegación en el sitio.</li>
              <li>
                Desplegar anuncios publicitarios para financiar los costos de servidor, dominio e infraestructura técnica del
                proyecto.
              </li>
              <li>Detectar fallas de software, evitar ataques informáticos y garantizar la seguridad del sitio.</li>
            </ul>
          </LegalSection>

          <LegalSection id="transferencias" numero={6} titulo={SECCIONES[5].titulo}>
            <p className={P}>
              No vendemos, cedemos, transferimos ni alquilamos tus datos personales a terceros con fines de comercialización de
              bases de datos.
            </p>
            <p className={P}>
              Para la operación de un sitio web con dominio .com utilizamos herramientas y servicios de infraestructura
              provistos por empresas ubicadas principalmente en Estados Unidos y la Unión Europea, como Google LLC, Microsoft
              Corporation, proveedores de alojamiento web y servicios de API como OpenRouter. Por eso ciertos datos técnicos o
              registros de navegación pueden procesarse en servidores internacionales, bajo protocolos de seguridad y estándares
              de confidencialidad.
            </p>
          </LegalSection>

          <LegalSection id="conservacion" numero={7} titulo={SECCIONES[6].titulo}>
            <p className={P}>
              <strong>Comunicaciones por correo:</strong> los mensajes recibidos a través del formulario se conservan únicamente el
              tiempo necesario para resolver la consulta, y por un plazo máximo de doce (12) meses, luego del cual se eliminan de
              forma periódica.
            </p>
            <p className={P}>
              <strong>Métricas estadísticas:</strong> los datos de Google Analytics y Microsoft Clarity se conservan según las
              políticas de retención configuradas en esas plataformas (habitualmente entre 2 y 14 meses, de forma agregada y
              anónima).
            </p>
          </LegalSection>

          <LegalSection id="derechos" numero={8} titulo={SECCIONES[7].titulo}>
            <p className={P}>
              Cualquier persona, sin importar el país de Latinoamérica o del mundo desde el que nos visite, tiene derecho a:
            </p>
            <ul className={UL}>
              <li>Acceder a la información o registros que tengamos sobre sus consultas.</li>
              <li>Rectificar cualquier dato inexacto, desactualizado o incompleto.</li>
              <li>Cancelar o solicitar la eliminación de sus mensajes y datos de contacto de nuestros registros.</li>
              <li>Oponerse al uso o tratamiento de sus datos para determinados fines.</li>
            </ul>
            <p className={P}>
              Para hacer valer cualquiera de estos derechos, escribe a{" "}
              <a className={LINK} href="mailto:correoalmagatuna@gmail.com">correoalmagatuna@gmail.com</a> detallando tu solicitud.
              Nos comprometemos a responderla dentro de un plazo no superior a 10 a 15 días hábiles, de forma gratuita.
            </p>
            <p className={P}>
              Estos derechos están reconocidos en Chile por la Ley N° 19.628 sobre protección de la vida privada y por la Ley N°
              21.719 de protección de datos personales, que entra en vigencia el 1 de diciembre de 2026.
            </p>
          </LegalSection>

          <LegalSection id="menores" numero={9} titulo={SECCIONES[8].titulo}>
            <p className={P}>
              AlmaGatuna es un sitio de contenido cultural y educativo apto para todo público, enfocado en el bienestar de los
              animales. No recopilamos intencionadamente datos de menores de 14 años sin la autorización de sus padres o tutores.
              Si tienes constancia de que un menor nos ha enviado información personal, escríbenos a nuestro correo y la
              eliminaremos de inmediato.
            </p>
          </LegalSection>

          <LegalSection id="salud" numero={10} titulo={SECCIONES[9].titulo}>
            <p className={P}>
              Todo el contenido publicado en AlmaGatuna —incluidos los artículos informativos, las descripciones de razas, los
              consejos sobre alimentación y comportamiento, y las respuestas automatizadas del asistente virtual— tiene un
              carácter divulgativo, didáctico y orientativo.
            </p>
            <p className={P}>
              La información de este sitio no constituye diagnóstico clínico, pronóstico ni tratamiento, ni reemplaza la consulta
              con un médico veterinario. Si tu gato presenta malestares, síntomas clínicos, emergencias o conductas atípicas,
              llévalo de inmediato a revisión con un médico veterinario titulado y colegiado.
            </p>
          </LegalSection>

          <LegalSection id="cambios" numero={11} titulo={SECCIONES[10].titulo}>
            <p className={P}>
              Podemos actualizar esta Política de Privacidad cuando sea necesario para adaptarla a mejoras técnicas, a nuevas
              funciones o a cambios normativos. Cualquier modificación entra en vigor desde su publicación y se refleja en la
              fecha de &quot;Última actualización&quot; del encabezado.
            </p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
