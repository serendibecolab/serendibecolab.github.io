/**
 * Strips leading slashes from a path string.
 * Used to construct safe URL paths for Astro.site-based URL construction.
 */
export const safePath = (p: unknown): string =>
  p?.toString().replace(/^\/+/, "") || "";
