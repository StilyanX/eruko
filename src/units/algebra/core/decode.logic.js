// Hides: how Algebra's values from outside its code enter it:
// its part of the record as stored, read once into its types (the fields every maths unit keeps,
// then its proofs read and its statements proved); its course as generated, its ids made by their
// constructors; a topic's content module as an import of it gives it; and the two fields of a
// problem that only this unit's content writes:
//   given      on a Find the error problem, and on the worked example of a Find the error
//              kind: the worked solution to check, one string a line, in
//              order, exactly one of them wrong. The screen numbers the lines from 1, and the
//              answer names the wrong one by that number ("Line 3: 2*x = 10").
//   features   on a problem in the sketch form: what its sketch is checked on, and nothing else:
//              three lists, `intercepts`, `turning` and `asymptotes`, each item text with $…$
//              for maths; a list with nothing to check is empty. A number-line sketch keeps
//              `shaded` instead: each end of the shaded set, open or closed, and each ray's side
//              ("open circle at $2$", "shaded to the right of $2$"). The stored graph is the `figure`
//              of the solution's last line.
// The fields the course reads but the screens never do (`special` on a kind, `formNo` on a bank
// problem) are held to their shape by tests/algebra-language.test.mjs.
import { isRecord } from '../../../kernel/decode.logic.js'
import { topicOf, topicSlug } from '../../../kernel/maths-decode.logic.js'
import { decodePractice } from '../../../kernel/practice.logic.js'
import { decodeProofs, proofCourseTopic } from '../../../kernel/proofs-decode.logic.js'
import { proofTopicState } from '../../../kernel/proofs.logic.js'
import { TOPICS } from './course.gen.js'
import { decodeEnd } from './end-level.logic.js'

/**
 * The learner's Algebra record: the fields every maths unit keeps, then each proof read and each
 * statement proved, then the end level's papers.
 * @typedef {import('../../../kernel/practice.logic.js').PracticeRecord & import('../../../kernel/proofs-decode.logic.js').ProofsRecord & Readonly<{ end?: import('./end-level.logic.js').EndRecord | undefined }>} AlgebraRecord
 */

/**
 * Algebra's part of the record as stored, read into its types: a field missing or not of its
 * shape reads as not there, so a damaged field reads as not done.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} json
 * @returns {AlgebraRecord}
 */
export const decodeAlgebra = json => ({ ...decodePractice(json), ...decodeProofs(json), end: decodeEnd(json.end) })

/**
 * The course's topics in order, as scripts/gen/algebra.mjs wrote them, their ids made.
 * @type {readonly import('../../../kernel/proofs-decode.logic.js').ProofCourseTopic[]}
 */
export const COURSE = TOPICS.map(proofCourseTopic)

/**
 * Whether every topic of the course is finished: the end level then opens.
 * @param {AlgebraRecord} record
 */
export const courseDone = record => COURSE.every(t => proofTopicState(t, record).finished)

/**
 * A topic's content module, with the slug its page gives it.
 * @param {unknown} mod
 * @param {string} slug
 * @returns {import('../../../kernel/proofs-decode.logic.js').ProofTopic}
 */
export const topicModule = (mod, slug) => ({
  .../** @type {Omit<import('../../../kernel/proofs-decode.logic.js').ProofTopic, 'slug'>} */ (
    /** @type {unknown} */ (topicOf(mod, `topic ${slug}`))
  ),
  slug: topicSlug(slug)
})

/**
 * What a sketch is checked on: its intercepts, turning points and asymptotes, or on a number line its shaded set.
 * @typedef {Readonly<{ intercepts: readonly string[], turning: readonly string[], asymptotes: readonly string[], shaded: readonly string[] }>} Features
 */

/** @param {unknown} v @returns {readonly string[]} */
const texts = v => (Array.isArray(v) ? v.filter(x => typeof x === 'string') : [])

/**
 * A problem's sketch features, or null where it has none.
 * @param {object} problem
 * @returns {Features | null}
 */
export function featuresOf(problem) {
  const f = 'features' in problem ? problem.features : undefined
  if (!isRecord(f)) return null
  return { intercepts: texts(f.intercepts), turning: texts(f.turning), asymptotes: texts(f.asymptotes), shaded: texts(f.shaded) }
}

/**
 * The worked solution a Find the error problem gives to check, line by line; none for any other.
 * @param {object} problem
 * @returns {readonly string[]}
 */
export const givenOf = problem => texts('given' in problem ? problem.given : undefined)
