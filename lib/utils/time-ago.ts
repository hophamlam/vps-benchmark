import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";
import "dayjs/locale/en";
import type { Locale } from "@/lib/i18n/config";

// Load plugin relativeTime
dayjs.extend(relativeTime);

/**
 * Chuyển UTC timestamp thành relative time string (ví dụ: "1 phút trước", "2 giờ trước")
 * @param utcTimestamp - ISO string hoặc Date object từ UTC
 * @param locale - locale hiện tại (vi hoặc en)
 * @returns Chuỗi relative time đã được format theo locale
 */
export function formatTimeAgo(
  utcTimestamp: string | Date,
  locale: Locale = "vi",
): string {
  // Map locale từ project sang dayjs locale
  const dayjsLocale = locale === "vi" ? "vi" : "en";
  dayjs.locale(dayjsLocale);

  const date = dayjs(utcTimestamp);
  return date.fromNow();
}

/**
 * Format UTC timestamp thành local time string theo format "dd/mm/yyyy HH:mm:ss"
 * @param utcTimestamp - ISO string hoặc Date object từ UTC
 * @returns Chuỗi datetime local (ví dụ: 04/12/2025 16:05:12)
 */
export function formatLocalDateTime(utcTimestamp: string | Date): string {
  const date = dayjs(utcTimestamp);
  return date.format("DD/MM/YYYY HH:mm:ss");
}

