interface SearchEmptyProps {
  query: string;
  suggestions: string[];
  onPick: (term: string) => void;
  onClear: () => void;
}

/** Estado vacío de la búsqueda: explica qué pasó y ofrece palabras que sí existen. */
export default function SearchEmpty({ query, suggestions, onPick, onClear }: SearchEmptyProps) {
  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 md:p-8">
      <h3
        className="text-xl text-(--charcoal)"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
      >
        No existe ningún artículo con «{query}»
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-(--mid)">
        Prueba con otra palabra o revisa si está bien escrita.
      </p>

      {suggestions.length > 0 && (
        <div className="mt-5">
          <p className="text-sm font-semibold text-(--charcoal)">¿Quisiste decir?</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {suggestions.map((term) => (
              <li key={term}>
                <button
                  type="button"
                  onClick={() => onPick(term)}
                  className="min-h-11 rounded-full border border-black/15 bg-(--cream) px-4 text-sm font-semibold text-(--charcoal) hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
                >
                  {term}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={onClear}
        className="mt-6 min-h-11 rounded-lg px-1 text-sm font-semibold text-(--amber-dark) underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
      >
        Borrar búsqueda y ver todos los artículos
      </button>
    </div>
  );
}
