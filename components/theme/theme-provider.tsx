"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "vps-benchmark-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider đơn giản quản lý light/dark mode
 * - Lưu lựa chọn theme vào localStorage
 * - Thêm/bỏ class "dark" trên thẻ <html> để áp dụng CSS
 * @param children - React node con
 * @returns React context provider cho theme
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("light");

  /**
   * Áp dụng theme lên document.documentElement:
   * - Thêm class "dark" nếu theme là "dark"
   * - Bỏ class "dark" nếu theme là "light"
   */
  const applyTheme = (next: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  /**
   * Set theme và lưu vào localStorage
   * @param next - theme mới
   */
  const setTheme = (next: Theme) => {
    setThemeState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
    applyTheme(next);
  };

  /**
   * Khi mount:
   * - Lấy theme đã lưu trong localStorage nếu có
   * - Nếu không có, dùng prefers-color-scheme của hệ thống
   */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
      applyTheme(stored);
      return;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const initial: Theme = media.matches ? "dark" : "light";
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook truy cập theme context
 * @throws Error nếu sử dụng ngoài ThemeProvider
 * @returns theme hiện tại và hàm setTheme
 */
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
};


