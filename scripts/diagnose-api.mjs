/**
 * Script de diagnóstico para probar conexión con OpenRouter
 * Ejecutar con: node scripts/diagnose-api.mjs
 *
 * Nota: Para que funcione, necesitas tener OPENROUTER_API_KEY configurada.
 */

const API_KEY = process.env.OPENROUTER_API_KEY;

if (!API_KEY || API_KEY.includes('xxxxxxxx')) {
  console.error('❌ ERROR: API key no configurada o es un placeholder.');
  console.error('   Ve a https://openrouter.ai/settings/keys y obtén una key real.');
  console.error('   Luego edita .env.local o ejecuta:');
  console.error('   OPENROUTER_API_KEY=sk-or-v1-TU-KEY node scripts/diagnose-api.mjs');
  process.exit(1);
}

console.log('🔄 Probando conexión con OpenRouter...');

try {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'GatoLandia-Diagnosis',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.3-70b-instruct',
      messages: [
        { role: 'system', content: 'Responde "OK" brevemente.' },
        { role: 'user', content: 'Hola' },
      ],
      max_tokens: 50,
    }),
  });

  const status = response.status;
  console.log(`📡 Status HTTP: ${status}`);

  const data = await response.json();

  if (!response.ok) {
    console.error('❌ La API respondió con error:');
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  console.log('✅ Conexión exitosa con OpenRouter!');
  console.log(`🤖 Respuesta: "${data.choices[0].message.content}"`);
  console.log(`🔑 Modelo: ${data.model}`);

} catch (err) {
  console.error('❌ Error de conexión:', err.message);
}
