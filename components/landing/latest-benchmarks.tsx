"use client";

import React from "react";
import { useI18n } from "@/components/i18n/i18n-provider";
import { BenchmarkTableRow } from "@/components/benchmark/benchmark-table-row";
import type { BenchmarkRunSummary } from "@/lib/types/benchmark";

type LatestBenchmarksSectionProps = {
  items: BenchmarkRunSummary[];
};

/**
 * Section hiển thị danh sách các lần benchmark mới nhất
 * @param items - mảng các record benchmark đã được map từ DB
 * @returns Một section bảng nhỏ trên landing page
 */
export const LatestBenchmarksSection: React.FC<LatestBenchmarksSectionProps> = ({
  items,
}) => {
  const { t } = useI18n();

  return (
    <section className="border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:py-10">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("latestBenchmarks.title")}
            </h2>
            <p className="text-xs text-muted-foreground">
              {t("latestBenchmarks.description")}
            </p>
          </div>
        </div>
        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card/80 p-12 text-center">
            <p className="text-sm text-muted-foreground">
              {t("latestBenchmarks.empty")}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {t("latestBenchmarks.emptyDescription")}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border bg-card/80 text-xs">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  <th className="px-3 py-2 text-left">{t("latestBenchmarks.table.time")}</th>
                  <th className="px-3 py-2 text-left">{t("latestBenchmarks.table.label")}</th>
                  <th className="px-3 py-2 text-right">{t("latestBenchmarks.table.ping")}</th>
                  <th className="px-3 py-2 text-right">{t("latestBenchmarks.table.download")}</th>
                  <th className="px-3 py-2 text-right">{t("latestBenchmarks.table.score")}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <BenchmarkTableRow
                    key={item.id}
                    item={item}
                    showRank={false}
                    showAbsoluteTime={false}
                    showViewButton={false}
                    textSize="xs"
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};


