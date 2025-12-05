'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  type Locale,
  SUPPORTED_LOCALES,
} from "@/lib/i18n/config";
import { getTranslation } from "@/lib/i18n/dictionary";

type TranslationKey = Parameters<typeof getTranslation>[1];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey | string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

/**
 * Provider i18n đơn giản cho VI/EN
 * @param children - React node con nhận context i18n
 * @returns React context provider với locale hiện tại và hàm t()
 */
export const I18nProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  /**
   * Hàm setLocale:
   * - Cập nhật state locale hiện tại
   * - Lưu vào localStorage để nhớ lần truy cập sau
   * @param next - locale mới cần set
   */
  const setLocale = (next: Locale) => {
    if (!SUPPORTED_LOCALES.includes(next)) {
      return;
    }
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("vps-benchmark-locale", next);
    }
  };

  /**
   * Khi mount trên client:
   * - Lấy locale đã lưu trong localStorage (nếu có)
   * - Nếu không có, giữ DEFAULT_LOCALE
   */
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem(
      "vps-benchmark-locale",
    ) as Locale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      setLocaleState(stored);
    }
  }, []);

  /**
   * Hàm dịch key theo locale hiện tại
   * @param key - key trong dictionary (có thể là string động)
   * @returns chuỗi đã dịch
   */
  const t = (key: TranslationKey | string): string =>
    getTranslation(locale, key as TranslationKey);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

/**
 * Hook dùng để truy cập context i18n
 * @throws Error nếu dùng ngoài I18nProvider
 * @returns locale hiện tại, hàm setLocale và hàm t để dịch
 */
export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};


