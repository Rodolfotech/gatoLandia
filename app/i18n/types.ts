export type Locale = 'es' | 'en-US' | 'en-GB' | 'pt' | 'ru' | 'zh';

export interface LocaleInfo {
  code: Locale;
  label: string;
  flag: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: 'es',     label: 'Español',           flag: '🇪🇸' },
  { code: 'en-US',  label: 'English (US)',      flag: '🇺🇸' },
  { code: 'en-GB',  label: 'English (UK)',      flag: '🇬🇧' },
  { code: 'pt',     label: 'Português',         flag: '🇵🇹' },
  { code: 'ru',     label: 'Русский',           flag: '🇷🇺' },
  { code: 'zh',     label: '中文',               flag: '🇨🇳' },
];

export const DEFAULT_LOCALE: Locale = 'es';
