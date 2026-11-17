// Hides: what the shell reaches of this unit, and the only way it reaches it: the unit's entry in
// the list of units (`UNIT`), the plain functions of the records the unit page and Explore read
// (`view`), and which module draws each page, by the page's file name in the entry. Each loader
// resolves to the page's module: its element's tag (`TAG`) and, where it loads data of its own,
// `warm(slug)`.
export { UNIT } from './core/entry.logic.js'
export { unit as view } from './core/unit.logic.js'
import { TOPICS } from './core/course.gen.js'

// Number facts is Arithmetic's page: the entry names Arithmetic's file, so the shell loads it there.
// The topic page has a loader once the course has a topic: a loader no page names is a broken unit.

/** @type {Record<string, () => Promise<{ TAG: string, warm?: (slug: string) => unknown }>>} */
export const PAGES = {
  start: () => import('./start/start.element.js'),
  review: () => import('./review/review.element.js'),
  'mixed-practice': () => import('./mixed-practice/mixed-practice.element.js'),
  ...(TOPICS.length ? { topic: () => import('./topic/topic.element.js') } : {}),
  'end-level': () => import('./end-level/end-level.element.js')
}
