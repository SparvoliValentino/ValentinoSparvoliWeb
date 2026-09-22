import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { es } from './dictionaries/es';
import { en } from './dictionaries/en';
import type { Dictionary, Locale } from './types';

const STORAGE_KEY = 'vs-locale';

const dictionaries: Record<Locale, Dictionary> = { es, en };

interface I18nContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : null;
  } catch {
    return null;
  }
}

function writeStoredLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage failures (private browsing, disabled storage, etc.)
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? 'es');

  useEffect(() => {
    document.documentElement.lang = locale;
    writeStoredLocale(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);
  const toggleLocale = useCallback(() => setLocaleState((prev) => (prev === 'es' ? 'en' : 'es')), []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, t: dictionaries[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}
