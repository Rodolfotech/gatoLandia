import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center md:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-(--amber-dark)">Error 404</p>
      <h1
        className="mt-3 text-4xl leading-tight text-(--charcoal)"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
      >
        Esta página no existe
      </h1>
      <p className="mt-4 text-base leading-relaxed text-(--mid)">
        Puede que el enlace esté desactualizado o que la dirección tenga un error. Puedes volver a la portada o explorar
        las categorías.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-lg bg-(--amber-dark) px-5 text-sm font-semibold text-white hover:bg-[#8a5222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
        >
          Ir a la portada
        </Link>
        <Link
          href="/razas"
          className="inline-flex min-h-11 items-center rounded-lg border border-black/15 bg-white px-5 text-sm font-semibold text-(--charcoal) hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
        >
          Explorar razas
        </Link>
      </div>
    </div>
  );
}
