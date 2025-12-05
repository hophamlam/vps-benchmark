import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/i18n/i18n-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tocdovps.dev – VPS benchmark dashboard",
  description: "tocdovps.dev – Đánh giá tốc độ VPS một cách minh bạch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const STORAGE_KEY = 'vps-benchmark-theme';
                const stored = localStorage.getItem(STORAGE_KEY);
                let theme = 'light';
                
                if (stored === 'light' || stored === 'dark') {
                  theme = stored;
                } else {
                  const media = window.matchMedia('(prefers-color-scheme: dark)');
                  theme = media.matches ? 'dark' : 'light';
                }
                
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
