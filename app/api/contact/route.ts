import { after, NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { isValidEmail, isValidMessage, isValidName, normalizeName } from '@/app/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const nombre = normalizeName((formData.get('nombre') as string | null) ?? '').trim();
    const correo = ((formData.get('correo') as string | null) ?? '').trim().toLowerCase();
    const mensaje = formData.get('mensaje') as string;

    // Sin aceptar la política de privacidad y los términos no se envía el mensaje, aunque se salte la página.
    if (formData.get('acepta') !== 'si') {
      return NextResponse.json({ error: 'Debes aceptar la Política de Privacidad' }, { status: 400 });
    }

    if (nombre && !isValidName(nombre)) {
      return NextResponse.json({ error: 'El nombre solo puede tener letras y hasta 20 caracteres' }, { status: 400 });
    }

    if (correo && !isValidEmail(correo)) {
      return NextResponse.json({ error: 'El correo debe terminar en .com, .cl, .net u .org' }, { status: 400 });
    }

    if (mensaje && !isValidMessage(mensaje)) {
      return NextResponse.json({ error: 'El mensaje debe tener al menos 50 caracteres' }, { status: 400 });
    }

    if (mensaje && mensaje.length > 2000) {
      return NextResponse.json({ error: 'El mensaje supera los 2000 caracteres' }, { status: 400 });
    }

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const user = process.env.SMTP_USER || 'correoalmagatuna@gmail.com';
    const pass = process.env.SMTP_PASSWORD;
    const to = process.env.CONTACT_EMAIL || 'correoalmagatuna@gmail.com';

    if (!pass) {
      console.error('SMTP_PASSWORD no configurado');
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user, pass },
    });

    // El envío corre después de responder: el visitante no espera a Gmail.
    after(async () => {
      try {
        await transporter.sendMail({
          from: `"Formulario Contacto" <${user}>`,
          to,
          subject: `Nuevo contacto de ${nombre}`,
          html: `
            <h2>Nuevo mensaje desde el formulario de contacto</h2>
            <table style="border-collapse:collapse;width:100%;max-width:500px">
              <tr><td style="padding:8px;font-weight:600">Nombre</td><td style="padding:8px">${nombre}</td></tr>
              <tr><td style="padding:8px;font-weight:600">Correo</td><td style="padding:8px">${correo}</td></tr>
              <tr><td style="padding:8px;font-weight:600">Mensaje</td><td style="padding:8px;white-space:pre-wrap">${mensaje}</td></tr>
            </table>
          `,
        });
      } catch (error) {
        console.error('Error al enviar email:', error);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
