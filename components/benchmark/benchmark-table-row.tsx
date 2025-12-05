"use client";

import React from "react";
import Link from "next/link";
import { TimeAgo } from "@/components/ui/time-ago";
import { formatLocalDateTime } from "@/lib/utils/time-ago";
import type { BenchmarkRunSummary } from "@/lib/types/benchmark";

type BenchmarkTableRowProps = {
  item: BenchmarkRunSummary;
  /**
   * Hiển thị rank (số thứ tự)
   */
  showRank?: boolean;
  rank?: number;
  /**
   * Hiển thị absolute time (dd/mm/yyyy HH:mm:ss)
   */
  showAbsoluteTime?: boolean;
  /**
   * Hiển thị View button
   */
  showViewButton?: boolean;
  /**
   * Size của text trong cell
   */
  textSize?: "xs" | "sm";
};

/**
 * Shared component hiển thị 1 row trong bảng benchmark
 * Có thể tùy chỉnh hiển thị rank, absolute time, view button
 * @param item - benchmark item data
 * @param showRank - có hiển thị cột rank không
 * @param rank - số rank (nếu showRank = true)
 * @param showAbsoluteTime - có hiển thị absolute time không
 * @param showViewButton - có hiển thị View button không
 * @param textSize - size của text (xs hoặc sm)
 * @returns Table row component
 */
export const BenchmarkTableRow: React.FC<BenchmarkTableRowProps> = ({
  item,
  showRank = false,
  rank,
  showAbsoluteTime = false,
  showViewButton = false,
  textSize = "xs",
}) => {
  const textSizeClass = textSize === "xs" ? "text-xs" : "text-sm";
  const paddingClass = textSize === "xs" ? "px-3 py-2" : "px-4 py-3";

  return (
    <tr className="border-t border-border/60 hover:bg-muted/30 transition-colors">
      {showRank && (
        <td
          className={`${paddingClass} text-left ${textSizeClass} font-medium text-muted-foreground`}
        >
          {rank}
        </td>
      )}
      <td className={`${paddingClass} text-left ${textSizeClass} text-muted-foreground`}>
        {showAbsoluteTime ? (
          <div className="flex flex-col">
            <span>{formatLocalDateTime(item.createdAt)}</span>
            <span className="text-[10px] text-muted-foreground/80">
              <TimeAgo date={item.createdAt} />
            </span>
          </div>
        ) : (
          <TimeAgo date={item.createdAt} />
        )}
      </td>
      <td className={`${paddingClass} text-left`}>
        <Link
          href={`/result/${item.id}`}
          className={`${textSizeClass} hover:text-primary hover:underline`}
        >
          {item.serverLabel || "—"}
        </Link>
      </td>
      <td className={`${paddingClass} text-right ${textSizeClass}`}>
        {item.avgPingMs !== null
          ? `${item.avgPingMs.toFixed(2)} ms`
          : "—"}
      </td>
      <td className={`${paddingClass} text-right ${textSizeClass}`}>
        {item.downloadMbps !== null
          ? `${item.downloadMbps.toFixed(2)} Mbps`
          : "—"}
      </td>
      <td
        className={`${paddingClass} text-right ${textSizeClass} font-semibold text-primary`}
      >
        {item.score !== null ? item.score.toFixed(2) : "—"}
      </td>
      {showViewButton && (
        <td className={`${paddingClass} text-right ${textSizeClass}`}>
          <Link
            href={`/result/${item.id}`}
            className="inline-flex items-center justify-center rounded-full border border-border/60 bg-background/80 px-2 py-1 text-[10px] font-medium text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition"
            aria-label={`View details for result ${item.id}`}
          >
            View
          </Link>
        </td>
      )}
    </tr>
  );
};

