// Hides: what the maths units' answer checkers share: exact whole-number arithmetic, the
// shell of a form's match, the form of a comma list, and the sentence an answer worked on paper
// is marked by. Pure functions, tested in
// tests/study-answer.test.mjs.
import { InvariantError } from './invariant.logic.js'

/**
 * What makes an answer worked on paper right, for its form: a form that takes "or equivalent"
 * takes the value in any form, as its match does; any other, the value in the form asked.
 * @param {string | undefined} form
 */
export const markSentence = form =>
  /\bor equivalent\b/.test(form ?? '')
    ? 'Right when your answer has this value, whatever its form.'
    : 'Right when your answer has this value, in the form asked.'

/** @type {(a: bigint) => bigint} */
export const abs = a => (a < 0n ? -a : a)

/** The greatest common divisor, never negative. @type {(a: bigint, b: bigint) => bigint} */
export const gcd = (a, b) => {
  a = abs(a)
  b = abs(b)
  while (b) [a, b] = [b, a % b]
  return a
}

/**
 * True when a form's `match(typed, stored)` accepts the typed answer. A form with no match, a
 * blank answer and an answer too large to check (a match that throws) are all false; a broken
 * invariant in the match is a bug and is thrown on.
 * @param {((typed: string, stored: string) => unknown) | null | undefined} match
 * @param {unknown} typed
 * @param {unknown} stored
 */
export function matched(match, typed, stored) {
  if (!match) return false
  const text = typed == null ? '' : typeof typed === 'string' ? typed : JSON.stringify(typed)
  if (!text.trim()) return false
  try {
    return Boolean(match(text, String(stored)))
  } catch (error) {
    if (error instanceof InvariantError) throw error
    return false
  }
}

/**
 * The form of a comma list: both sides are cleaned with `clean`, split at the commas, and `item`
 * decides each pair.
 * @param {(s: string) => string} clean
 * @returns {(item: (typed: string, stored: string) => boolean) => (typed: string, stored: string) => boolean}
 */
export const listOf = clean => item => (typed, stored) => {
  const a = clean(typed).split(',')
  const b = clean(stored).split(',')
  return (
    a.length === b.length &&
    a.every((x, i) => {
      const y = b[i]
      return y !== undefined && item(x, y)
    })
  )
}
