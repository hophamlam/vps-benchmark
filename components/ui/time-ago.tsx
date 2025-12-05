"use client";

import React from "react";
import { useI18n } from "@/components/i18n/i18n-provider";
import { formatLocalDateTime, formatTimeAgo } from "@/lib/utils/time-ago";

type TimeAgoProps = {
  /**
   * UTC timestamp (ISO string hoặc Date object)
   */
  date: string | Date;
  /**
   * Custom className cho wrapper
   */
  className?: string;
};

/**
 * Component hiển thị relative time (ví dụ: "1 phút trước", "2 giờ trước")
 * Tự động dùng locale từ I18nProvider
 * @param date - UTC timestamp từ database
 * @param className - CSS class tùy chỉnh
 * @returns Span hiển thị relative time
 */
export const TimeAgo: React.FC<TimeAgoProps> = ({ date, className }) => {
  const { locale } = useI18n();
  const timeAgo = formatTimeAgo(date, locale);
  const absolute = formatLocalDateTime(date);

  return (
    <span className={className} title={absolute}>
      {timeAgo}
    </span>
  );
};

