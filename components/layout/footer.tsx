"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/components/i18n/i18n-provider";

/**
 * Footer với layout grid, quick links và social links
 * @returns Footer ở cuối trang với các sections
 */
export const Footer: React.FC = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand & Description */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-block text-sm font-semibold hover:text-foreground transition-colors"
            >
              {t("header.brand")}
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("footer.note")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("footer.links.title")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.links.home")}
              </Link>
              <Link
                href="/leaderboard"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.links.leaderboard")}
              </Link>
              <Link
                href="/#how-it-works"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.links.howItWorks")}
              </Link>
            </nav>
          </div>

          {/* Social & External Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("footer.social.title")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://github.com/hophamlam/tocdovps-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open tocdovps.dev GitHub repository"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C4 14.91 3.48 13.73 3.32 13.2c-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                <span>GitHub</span>
              </Link>
              <Link
                href="https://hophamlam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit hophamlam.com"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 4.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 8 4.5ZM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                </svg>
                <span>{t("footer.social.website")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border/60 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {t("footer.copyright").replace("{year}", currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};
