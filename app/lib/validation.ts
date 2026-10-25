// Correos aceptados: que terminen en .com, .cl, .net u .org (sin distinguir mayúsculas)
// y que no empiecen con punto ni con arroba.
export const EMAIL_PATTERN = "[^\\s@.][^\\s@]*@[^\\s@]+\\.(?:[cC][oO][mM]|[cC][lL]|[nN][eE][tT]|[oO][rR][gG])";

const EMAIL_REGEX = new RegExp(`^${EMAIL_PATTERN}$`);

export function isValidEmail(value: string) {
  return EMAIL_REGEX.test(value.trim());
}

export const NAME_MAX_LENGTH = 20;

// Nombre: solo letras (con tildes y ñ) y espacios, en mayúsculas, hasta 20 caracteres.
export function normalizeName(value: string) {
  return value
    .replace(/[^\p{L} ]/gu, "")
    .toLocaleUpperCase("es")
    .slice(0, NAME_MAX_LENGTH);
}

export const NAME_MIN_LETTERS = 3;

// Cuenta solo las letras (los espacios no cuentan para el mínimo).
export function countLetters(value: string) {
  return value.replace(/ /g, "").length;
}

export function isValidName(value: string) {
  const name = value.trim();
  return new RegExp(`^[\\p{L} ]{1,${NAME_MAX_LENGTH}}$`, "u").test(name) && countLetters(name) >= NAME_MIN_LETTERS;
}

export const MESSAGE_MIN_LENGTH = 50;

export function isValidMessage(value: string) {
  return value.trim().length >= MESSAGE_MIN_LENGTH;
}
