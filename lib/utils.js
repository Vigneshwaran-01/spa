import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date input into a deterministic, zero-padded MM/DD/YYYY string.
 * This avoids differences between Node and browser locale implementations.
 * @param {string|number|Date} input - date value (ISO string, timestamp or Date)
 * @returns {string} formatted date like "03/09/2025" or empty string for invalid
 */
export function formatShortDate(input) {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return '';
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

// CommonJS fallback for small scripts/tests that use require()
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cn, formatShortDate };
}
