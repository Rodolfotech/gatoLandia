'use client';

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { Locale, DEFAULT_LOCALE } from './types';
import { t as translate } from './dictionary';
import { getContent } from './content';
import { Category } from '../data/cats';

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  categories: Category[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const t = useCallback((key: string) => translate(locale, key), [locale]);

  const categories = useMemo(() => {
    return getContent(locale).categories;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, categories }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
