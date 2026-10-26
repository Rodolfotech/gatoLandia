"use client";
import { useRouter } from "next/navigation";

/** Botón para volver a la página anterior; si no hay historial, lleva al inicio. */
export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg px-2 text-sm font-semibold text-(--amber-dark) transition hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
    >
      <span aria-hidden="true">←</span>
      Volver
    </button>
  );
}
