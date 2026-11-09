// Hides: how Arithmetic's values from outside its code enter it: its part of the record as stored, read once into its types (the fields every maths unit
// keeps, then its proofs read and its statements proved, then its end level and the place typed
// or marked on a number line not yet checked); its course as generated, its ids made by
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
 * A place on the number line not yet checked: its problem (`key`, its id or
 * prompt), the mark in hundredths or none, what is typed in the box, and whether a right mark in
 * fading stands checked before its Next.
 * @typedef {Readonly<{ key: string, mark: number | null, typed: string, shown?: true }>} PlaceDraft
 */

/**
 * The learner's Arithmetic record: the fields every maths unit keeps, then each proof read and
 * each statement proved, then the end level (`end`) and the place not yet checked (`place`,
 * null once checked).
 * @typedef {import('../../../kernel/practice.logic.js').PracticeRecord & import('../../../kernel/proofs-decode.logic.js').ProofsRecord & { end?: import('./end-level.logic.js').EndRecord, place?: PlaceDraft | null }} ArithmeticRecord
 */

/**
 * A stored place not yet checked, or undefined.
 * @param {unknown} v
 * @returns {PlaceDraft | undefined}
 */
function placeOf(v) {
  if (!isRecord(v) || typeof v.key !== 'string' || typeof v.typed !== 'string') return undefined
  const { mark } = v
  if (mark !== null && !(typeof mark === 'number' && Number.isInteger(mark) && mark >= 0)) return undefined
  return { key: v.key, mark, typed: v.typed, ...(v.shown === true ? { shown: true } : {}) }
}

/**
 * Arithmetic's part of the record as stored, read into its types: a field missing or not of its
 * shape reads as not there, so a damaged field reads as not done.
 * @param {import('../../../kernel/decode.logic.js').JsonRecord} json
 * @returns {ArithmeticRecord}
 */
export function decodeArithmetic(json) {
  const place = placeOf(json.place)
  return {
    ...decodePractice(json),
    ...decodeProofs(json),
    ...(json.end === undefined ? {} : { end: decodeEnd(json.end) }),
    ...(place ? { place } : {})
  }
}

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
