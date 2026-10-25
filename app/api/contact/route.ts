import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const nombre = formData.get('nombre') as string;
    const correo = formData.get('correo') as string;
    const mensaje = formData.get('mensaje') as string;

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
