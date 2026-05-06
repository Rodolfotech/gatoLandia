export default function SobreNosotrosPage() {
  return (
    <div style={{ maxWidth: 800, margin: "4rem auto", padding: "0 2rem", color: "#2c2416" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "1.5rem" }}>
        ¡Bienvenido a nuestro rincón dedicado a los felinos!
      </h1>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
          ¿Quiénes somos?
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: "1rem" }}>
          Detrás de esta plataforma no hay una gran corporación, sino un apasionado de la tecnología y un verdadero amante de los gatos. Un ser humano como tú, solo quiero introducirte al fascinante mundo de los gatos, para crear este espacio informativo.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
          Nuestra Misión
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: "1rem" }}>
          Este sitio nació con el objetivo de ser una fuente clara, técnica y detallada sobre nuestros amigos felinos. Sabemos que en internet hay mucha información dispersa, por eso nos enfocamos en recopilar y organizar datos precisos para que cualquier "cat lover" encuentre lo que busca de forma sencilla y rápida.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
          ¿Por qué confiar en nosotros?
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: "1rem" }}>
          Cada artículo y dato publicado aquí ha sido cuidadosamente revisado y estructurado y espero que el contenido sea de calidad.
        </p>
        <p style={{ lineHeight: 1.7, fontSize: "1rem", marginTop: "1rem" }}>
          Si tienes alguna duda, sugerencia o simplemente quieres compartir una historia sobre tu compañero felino lo puedes realizar a nuestro correo.
        </p>
        <p style={{ lineHeight: 1.7, fontSize: "1rem", marginTop: "1rem" }}>
          <a href="mailto:conexiongatuna@gmail.com" style={{ color: "#d4853a", textDecoration: "none" }}>
            conexiongatuna@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
