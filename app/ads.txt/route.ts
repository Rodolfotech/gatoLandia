// ads.txt: declara qué vendedores pueden vender el espacio publicitario de este sitio.
// Se genera desde NEXT_PUBLIC_ADSENSE_CLIENT_ID (ca-pub-XXXX); sin esa variable responde 404.
export function GET() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  if (!clientId) return new Response("Not found", { status: 404 });

  const publisherId = clientId.replace(/^ca-/, "");
  return new Response(`google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
