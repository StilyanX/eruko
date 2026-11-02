// Hides: the one list of the units and their pages that Explore, the unit pages, the page loader
// and the top bar read. The units are the folders the generated list names (units.gen.js, written
// by scripts/gen/units.mjs from src/units/), each reached only through its manifest: its entry
// (title, address, discipline, pages, record parts) and the plain functions of its records. So a
// unit is added or removed with its folder alone. A unit's slug is its address, and a page's
// address is the unit's slug, a slash and the page's slug. tests/registry.test.mjs checks it.
import { courseSlot } from '../kernel/pages.logic.js'
import { FOLDERS } from './units.gen.js'
import { manifestOf } from '../kernel/decode.logic.js'

export { courseSlot, inCourse } from '../kernel/pages.logic.js'

/** Every unit's manifest, by the unit's folder (the first part of its pages' `file`). */
export const MANIFESTS = Object.fromEntries(
  await Promise.all(
    FOLDERS.map(
      /** @returns {Promise<[string, import('../kernel/pages.logic.js').Manifest]>} */
      async folder => [folder, manifestOf(await import(`../units/${folder}/manifest.js`), folder)]
    )
  )
)

/** @type {import('../kernel/pages.logic.js').Unit[]} */
export const UNITS = FOLDERS.flatMap(folder => MANIFESTS[folder]?.UNIT ?? [])

// The disciplines Explore groups the units under, in the order of their first unit.
export const DISCIPLINES = [...new Map(UNITS.map(u => [u.discipline.id, u.discipline])).values()]

/**
 * Every part of the record the units read, each once, in the units' order.
 * @type {import('../kernel/pages.logic.js').RecordPart[]}
 */
export const PARTS = [...new Map(UNITS.flatMap(u => u.parts).map(p => [p.key, p])).values()]

export const unitBySlug = Object.fromEntries(UNITS.map(u => [u.slug, u]))

/**
 * A unit's description as its explore card shows it: the first sentence, what the unit is. The
 * rest is method, for the Start page; a search still reads the whole.
 * @param {import('../kernel/pages.logic.js').Unit} unit
 */
export const cardLine = unit => /^.*?\.(?=\s|$)/.exec(unit.description)?.[0] ?? unit.description

/**
 * Every page by its full URL slug, with its unit.
 * @type {Record<string, import('../kernel/pages.logic.js').PageEntry>}
 */
export const pageBySlug = Object.fromEntries(
  UNITS.flatMap(unit =>
    unit.pages.map(p => [`${unit.slug}/${p.slug}`, { ...p, slug: `${unit.slug}/${p.slug}`, unit }])
  )
)

/**
 * The path above a page, as [label, to] pairs from Eruko down to the page's parent: the
 * current page is its own title, so it is never in its path. Home has none. A page inside one of
 * its unit's sections goes up to its unit with that section open (`?part=`).
 * @param {string} slug
 * @returns {[label: string, to: string][]}
 */
export function pathTo(slug) {
  if (slug === '') return []
  /** @type {[string, string]} */
  const home = ['Eruko', '/']
  const [, id] = slug.split('/')
  if (slug === `explore/${id}` && DISCIPLINES.some(d => d.id === id)) return [home]
  const unit = unitBySlug[slug]
  if (unit) return [home, [unit.discipline.name, `/explore/${unit.discipline.id}`]]
  const page = pageBySlug[slug]
  if (!page) return [home]
  const u = page.unit
  const n = (courseSlot(u, slug)?.at ?? -1) + 1
  const part = n && u.sections ? u.sections.findIndex(s => n >= s.first && n <= s.last) + 1 : 0
  return [
    home,
    [u.discipline.name, `/explore/${u.discipline.id}`],
    [u.title, `/${u.slug}${part ? `?part=${part}` : ''}`]
  ]
}
