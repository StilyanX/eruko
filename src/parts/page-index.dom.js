// Hides: where the shared parts find the app's pages. The shell's page loader provides the index
// of every page by its address (`providePages`), as it provides the dated lists, so no part
// reaches up into the shell.

/** @type {Record<string, import('../kernel/pages.logic.js').PageEntry>} */
let index = {}

/**
 * Provide every page by its full address, with its unit (the shell's page loader, once).
 * @param {Record<string, import('../kernel/pages.logic.js').PageEntry>} pages
 */
export function providePages(pages) {
  index = pages
}

/**
 * The page at a full address ("explore/<discipline>/<unit>/<page>"), with its unit;
 * undefined where no page is.
 * @param {string} slug
 * @returns {import('../kernel/pages.logic.js').PageEntry | undefined}
 */
export const pageAt = slug => index[slug]
