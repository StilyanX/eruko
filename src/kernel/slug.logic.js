// Hides: how an address's path becomes the slug the registry keys pages by.
/**
 * URL pathname → registry slug: strips leading and trailing slashes.
 * @param {string} pathname
 */
export const normalizeSlug = pathname => pathname.replace(/^\/+|\/+$/g, '')
