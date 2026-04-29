/**
 * Minimal className combiner (keeps bundle tiny; no external deps).
 */
export function cn(...parts: Array<string | undefined | null | false>): string {
  return parts.filter(Boolean).join(' ')
}

