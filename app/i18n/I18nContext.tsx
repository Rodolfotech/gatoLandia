'use client';

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { Locale, DEFAULT_LOCALE, LOCALES } from './types';
import { t as translate } from './dictionary';
import { getContent } from './content';
import { Category } from '../data/cats';

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  locales: typeof LOCALES;
  categories: Category[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gatolandia-locale') as Locale | null;
      if (saved && LOCALES.some((l) => l.code === saved)) return saved;
    }
    return DEFAULT_LOCALE;
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gatolandia-locale', l);
    }
  }, []);

  const t = useCallback((key: string) => translate(locale, key), [locale]);

  const categories = useMemo(() => {
    return getContent(locale).categories;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, locales: LOCALES, categories }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
