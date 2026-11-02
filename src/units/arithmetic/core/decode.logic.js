// Hides: how Arithmetic's values from outside its code enter it: its part of the record as stored, read once into its types (the fields every maths unit
// keeps, then its proofs read and its statements proved, then its end level); its course as generated, its ids made by
// their constructors; a topic's content module as an import of it gives it; and a number line's
// spec as a figure file gives it.
import { isRecord } from '../../../kernel/decode.logic.js'
import { assert } from '../../../kernel/invariant.logic.js'
import { topicOf, topicSlug } from '../../../kernel/maths-decode.logic.js'
import { decodePractice } from '../../../kernel/practice.logic.js'
import { decodeProofs, proofCourseTopic } from '../../../kernel/proofs-decode.logic.js'
import { TOPICS } from './course.gen.js'
import { decodeEnd } from './end-level.logic.js'

/**
 * The learner's Arithmetic record: the fields every maths unit keeps, then each proof read and
 * each statement proved, then the end level (`end`).
 * @typedef {import('../../../kernel/practice.logic.js').PracticeRecord & import('../../../kernel/proofs-decode.logic.js').ProofsRecord & { end?: import('./end-level.logic.js').EndRecord }} ArithmeticRecord
 */

/**
 * Arithmetic's part of the record as stored, read into its types: a field missing or not of its
 * shape reads as not there, so a damaged field reads as not done.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} json
 * @returns {ArithmeticRecord}
 */
export const decodeArithmetic = json => ({
  ...decodePractice(json),
  ...decodeProofs(json),
  ...(json.end === undefined ? {} : { end: decodeEnd(json.end) })
})

/**
 * The course's topics in order, as scripts/gen/arithmetic.mjs wrote them, their ids made.
 * @type {readonly import('../../../kernel/proofs-decode.logic.js').ProofCourseTopic[]}
 */
export const COURSE = TOPICS.map(proofCourseTopic)

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
 * @param {unknown} v
 * @param {string} what
 */
const text = (v, what) => {
  assert(typeof v === 'string', `${what} is not text`)
  return v
}

/**
 * @param {unknown} v
 * @param {string} what
 */
const whole = (v, what) => {
  assert(typeof v === 'number' && Number.isInteger(v), `${what} is not a whole number`)
  return v
}

/**
 * @param {unknown} v
 * @param {string} what
 * @returns {readonly unknown[]}
 */
const list = (v, what) => {
  if (v === undefined) return []
  assert(Array.isArray(v), `${what} is not a list`)
  return v
}

/**
 * A number line's spec, as a figure file of content/figures gives it (number-line.logic.js).
 * @param {unknown} json
 * @param {string} what the file, for the error
 * @returns {import('./number-line.logic.js').LineSpec}
 */
export function lineSpecOf(json, what) {
  assert(isRecord(json), `${what} is not a number line`)
  return {
    from: whole(json.from, `${what}: from`),
    to: whole(json.to, `${what}: to`),
    ...(json.cuts === undefined ? {} : { cuts: whole(json.cuts, `${what}: cuts`) }),
    marks: list(json.marks, `${what}: marks`).map(m => {
      assert(isRecord(m), `${what}: a mark is not a record`)
      return {
        at: text(m.at, `${what}: a mark's place`),
        tex: text(m.tex, `${what}: a mark's label`),
        ...(m.side === 'above' || m.side === 'below' ? { side: m.side } : {}),
        ...(m.row === undefined ? {} : { row: whole(m.row, `${what}: a mark's row`) })
      }
    }),
    arrows: list(json.arrows, `${what}: arrows`).map(a => {
      assert(isRecord(a), `${what}: an arrow is not a record`)
      return {
        from: text(a.from, `${what}: an arrow's start`),
        to: text(a.to, `${what}: an arrow's end`),
        tex: text(a.tex, `${what}: an arrow's label`),
        row: whole(a.row, `${what}: an arrow's row`)
      }
    })
  }
}
