export type Locale = 'es';

export interface LocaleInfo {
  code: Locale;
  label: string;
  flag: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: 'es',     label: 'Español',           flag: '🇪🇸' },

];

export const DEFAULT_LOCALE: Locale = 'es';
