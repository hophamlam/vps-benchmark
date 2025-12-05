import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Hàm merge className với tailwind-merge để tránh conflict
 * @param inputs - các class name cần merge
 * @returns Chuỗi className đã được merge và optimize
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

