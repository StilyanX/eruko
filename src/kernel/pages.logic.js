// Hides: the shape of a unit's entry in the app's list of units and pages, and the plain rules
// every unit's entry is built by: its Start and Review pages, which pages are its course, and
// where a page stands in that course. Each unit writes its own entry (core/entry.logic.js); the
// shell lists them (shell/registry.js).

/**
 * A page. `repeats` marks a page done again every session: the unit page lists it first, with no
 * number, and no done count includes it. `start` marks the unit's Start page, which the unit
 * page shows as a card ahead of the course, and `review` its Review page, the card under it.
 * `file` names the unit and the page's loader in its manifest ("<unit folder>/topic").
 * @typedef {Readonly<{ title: string, slug: string, file: string, repeats?: boolean, start?: boolean, review?: boolean }>} Page
 */
/**
 * A section of a unit's course on its unit page: a name and the first and last item it holds, by
 * the items' numbers (topics in course order, or texts by their number). `part` names the larger
 * part of the course it falls in, where the course has parts.
 * @typedef {Readonly<{ title: string, first: number, last: number, part?: string }>} Section
 */
/**
 * A discipline: the group Explore lists units under, by its address part and its name.
 * @typedef {Readonly<{ id: string, name: string }>} Discipline
 */
/**
 * A part of the learner's record: `name` is what the unit's plain functions call it in the
 * records they are given (`r.<name>`), `key` where it is stored, and `title` what a backup file
 * calls it. Two units may share one part (the number facts); it is then the same in both.
 * @typedef {Readonly<{ name: string, key: string, title: string }>} RecordPart
 */
/**
 * A unit. A unit's slug is its address, and a page's address is the unit's slug, a slash and the
 * page's slug. `className` marks every page of the unit for its own styles (study-page.css).
 * `discipline` is what Explore lists it under; `order` places it among the units (lower first).
 * `parts` are the parts of the record it reads, its own study record first. `hosts` are the
 * outside addresses it connects to (`connect`) and plays sound from (`media`), which the page's
 * Content-Security-Policy allows and nothing else.
 * @typedef {Readonly<{
 *   title: string,
 *   slug: string,
 *   discipline: Discipline,
 *   order: number,
 *   parts: readonly RecordPart[],
 *   hosts?: Readonly<{ connect?: readonly string[], media?: readonly string[] }>,
 *   className?: string,
 *   description: string,
 *   sources: readonly Readonly<{ title: string, author?: string }>[],
 *   pages: readonly Page[],
 *   sections?: readonly Section[]
 * }>} Unit
 */
/** A page by its full address, with its unit. @typedef {Page & { unit: Unit }} PageEntry */

/**
 * A row of a unit page, as a unit's `rows` gives it. `opens` says why a row not reached opens
 * nothing, where the unit has a reason of its own.
 * @typedef {Readonly<{
 *   key: string | number,
 *   title: string,
 *   to?: string | undefined,
 *   done?: boolean,
 *   lang?: string,
 *   opens?: string,
 *   state?: string
 * }>} Item
 */
/**
 * A unit page's rows: Start, the rows above the course, the course's rows, the rows after it, the
 * rows that end a section (by the section's index), and, for a course that grows with the
 * learner's record, its sections.
 * @typedef {Readonly<{
 *   start: Item,
 *   top: readonly Item[],
 *   items: readonly Item[],
 *   after?: readonly Item[],
 *   ends?: Readonly<Record<number, readonly Item[]>>,
 *   sections?: readonly Section[]
 * }>} Rows
 */
/**
 * Every part of the record as the units' plain functions are given it, by each part's `name`.
 * @typedef {{ readonly [name: string]: { [field: string]: unknown } | undefined }} UnitRecords
 */
/**
 * The unit contract: the plain functions of the records the app
 * reads of a unit. `place` is the place line, `finished` the pages done, `rows` the unit page's
 * rows, `dated` the dated list, kind by kind.
 * @typedef {{
 *   slug: string,
 *   place: (r: UnitRecords) => string,
 *   finished: (r: UnitRecords) => Set<string>,
 *   rows: (r: UnitRecords) => Rows,
 *   dated: (r: UnitRecords, today: string) => import('./days.logic.js').DatedGroup[]
 * }} View
 */
/**
 * A page's module: its element's tag and, where it loads data of its own, `warm(slug)`.
 * @typedef {{ TAG: string, warm?: (slug: string) => unknown }} PageModule
 */
/**
 * What a unit gives the app, through its manifest.js: its entry, the unit contract, and the
 * loader of each page's module by the page file's name.
 * @typedef {{ UNIT: Unit, view: View, PAGES: Record<string, () => Promise<PageModule>> }} Manifest
 */

/**
 * A unit's Start page: what the unit needs before its first session.
 * @param {string} folder
 * @returns {Page}
 */
export const startPage = folder => ({
  title: 'Start',
  slug: 'start',
  file: `${folder}/start`,
  start: true
})

/**
 * A unit's Review page: what is due today.
 * @param {string} folder
 * @returns {Page}
 */
export const reviewPage = folder => ({
  title: 'Review',
  slug: 'review',
  file: `${folder}/review`,
  review: true
})

/**
 * A page of the unit's course: not Start, not Review, and not a page done every session.
 * @param {Page} p
 */
export const inCourse = p => !p.repeats && !p.start && !p.review

/**
 * Where a page stands in its unit's course, `{ course, at }`, when the unit's sections number
 * exactly the course pages (a maths unit's topics); otherwise null.
 * @param {Unit} unit
 * @param {string} slug
 * @returns {{ course: Page[], at: number } | null}
 */
export function courseSlot(unit, slug) {
  const course = unit.pages.filter(inCourse)
  const at = course.findIndex(p => `${unit.slug}/${p.slug}` === slug)
  return at >= 0 && unit.sections?.at(-1)?.last === course.length ? { course, at } : null
}
