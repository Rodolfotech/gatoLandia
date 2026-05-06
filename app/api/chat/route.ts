import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message, locale } = await req.json();

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key no configurada. Agrega OPENROUTER_API_KEY en .env.local' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
        'X-Title': 'GatoLandia',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.3-70b-instruct',
        messages: [
          {
            role: 'system',
            content:
              `You are MiauBot 🐱, a virtual assistant expert in everything related to cats. ` +
              `You answer questions about breeds, care, nutrition, behavior, health, history and feline curiosities. ` +
              `Your answers are friendly, informative and concise. You occasionally use cat emojis. ` +
              `If asked about something unrelated to cats, you kindly redirect to the feline topic. ` +
              `IMPORTANT: You must ALWAYS respond in the following language: ${locale || 'es'}. ` +
              `Use the exact same language for all your responses.`,
          },
          { role: 'user', content: message },
        ],
        temperature: 0.8,
        max_tokens: 600,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.error?.message || `Error de API: ${response.status}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch {
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
