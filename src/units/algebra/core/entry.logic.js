// Hides: Algebra's entry in the app's list of units: its title, address, description, sources, pages
// and sections, in course order (content/unit.yaml, through scripts/gen/algebra.mjs). The
// description says how much of the course is built, read from the topic count.
// The shell lists every unit's entry (shell/registry.js), through the unit's manifest.
import { reviewPage, startPage } from '../../../kernel/pages.logic.js'
import { FACTS_PART } from '../../../kernel/facts.logic.js'
import { InvariantError } from '../../../kernel/invariant.logic.js'
import * as COURSE from './course.gen.js'

// The pages done every session, then the topics in course order, then the end level. A number
// facts sheet passed once counts for every maths unit, so the page is Arithmetic's: the shell loads
// it from Arithmetic's manifest.
/** @type {Readonly<Partial<Record<string, Readonly<{ title: string, file: string, repeats?: boolean }>>>>} */
const ALGEBRA_OWN = {
  'number-facts': { title: 'Number facts', file: 'arithmetic/number-facts', repeats: true },
  'mixed-practice': { title: 'Mixed practice', file: 'algebra/mixed-practice', repeats: true },
  'end-level': { title: 'End level', file: 'algebra/end-level', repeats: true }
}
/** @type {Readonly<Partial<Record<string, string>>>} */
const ALGEBRA_TITLES = COURSE.TITLES

/**
 * A page of the course by its slug: a page of the unit's own, or a topic with its title. A slug
 * that is neither is a broken course file.
 * @param {string} slug
 * @returns {import('../../../kernel/pages.logic.js').Page}
 */
export function algebraPage(slug) {
  const own = ALGEBRA_OWN[slug]
  if (own) return { ...own, slug }
  const title = ALGEBRA_TITLES[slug]
  if (title !== undefined) return { title, slug, file: 'algebra/topic' }
  throw new InvariantError(`Algebra page ${slug} is neither a titled topic nor a page of its own`)
}

/**
 * What the course holds, said from its topic count.
 * @param {number} topics
 */
export const builtLine = topics =>
  topics === 0
    ? 'No topic is written yet: the topics come from the books listed below.'
    : `${topics} ${topics === 1 ? 'topic is' : 'topics are'} written, in the books' order.`

/**
 * The unit's own part of the record.
 * @type {import('../../../kernel/pages.logic.js').RecordPart}
 */
export const ALGEBRA_PART = { name: 'algebra', key: 'aether-math-algebra', title: 'Algebra' }

/** @type {import('../../../kernel/pages.logic.js').Unit} */
export const UNIT = {
  title: 'Algebra',
  slug: 'explore/mathematics/algebra',
  discipline: { id: 'mathematics', name: 'Mathematics' },
  order: 1.5,
  // Its own record under the Mathematics system, and the number facts it shares.
  parts: [ALGEBRA_PART, FACTS_PART],
  className: 'lrn-math',
  description: `School algebra from the first equation to olympiad problems, with no calculator. ${builtLine(COURSE.TOPICS.length)} In a topic with a new method, try one problem first and study the worked examples. Work each answer on paper, then show the answer and mark yourself Right or Wrong.`,
  sources: [
    { title: 'Introduction to Algebra', author: 'Richard Rusczyk' },
    { title: 'Intermediate Algebra', author: 'Richard Rusczyk and Mathew Crawford' },
    { title: 'Problem-Solving Strategies', author: 'Arthur Engel' }
  ],
  pages: [
    startPage('algebra'),
    reviewPage('algebra'),
    ...COURSE.PAGES.map(algebraPage),
    algebraPage('end-level')
  ],
  // Runs of the course order under the books' chapter titles. Two may share a title: each is its
  // own section, told by its place.
  sections: COURSE.SECTIONS.map(({ title, first, last }) => ({ title, first, last }))
}
