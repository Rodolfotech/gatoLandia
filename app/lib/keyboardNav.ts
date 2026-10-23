export type NavStep = "next" | "prev" | "first" | "last";

const ITEM_SELECTOR = "[data-nav-item]";

const HORIZONTAL_KEYS: Record<string, NavStep> = {
  ArrowRight: "next",
  ArrowLeft: "prev",
  Home: "first",
  End: "last",
};

/** Mueve el foco al elemento indicado dentro del contenedor. */
function stepFocus(current: HTMLElement, container: HTMLElement, step: NavStep) {
  const items = Array.from(container.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
  const index = items.indexOf(current);
  if (index === -1) return;

  const targets: Record<NavStep, number> = {
    next: Math.min(index + 1, items.length - 1),
    prev: Math.max(index - 1, 0),
    first: 0,
    last: items.length - 1,
  };
  items[targets[step]].focus();
}

/** Flechas ← → (también Inicio y Fin) para recorrer los enlaces de un contenedor. */
export function handleHorizontalKeys(e: React.KeyboardEvent<HTMLElement>) {
  const step = HORIZONTAL_KEYS[e.key];
  const item = (e.target as HTMLElement).closest<HTMLElement>(ITEM_SELECTOR);
  if (!step || !item) return;
  e.preventDefault();
  stepFocus(item, e.currentTarget, step);
}

/** Hace que un elemento con role="button" se active también con Enter y Espacio. */
export function activateOnKey(action: () => void) {
  return (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };
}
