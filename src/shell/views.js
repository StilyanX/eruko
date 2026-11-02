// Hides: what the shell reads of each unit's records: the plain functions its manifest gives
// (`view`), by the unit's slug. The unit page and the explore page call them themselves, so they
// draw at once.
import { MANIFESTS } from './registry.js'

/** @type {Record<string, import('../kernel/pages.logic.js').View>} */
const VIEWS = Object.fromEntries(Object.values(MANIFESTS).map(m => [m.view.slug, m.view]))

/**
 * A unit's contract, by its slug.
 * @param {string} slug
 */
export function viewOf(slug) {
  const view = VIEWS[slug]
  if (!view) throw new Error(`No unit has the slug ${slug}.`)
  return view
}
