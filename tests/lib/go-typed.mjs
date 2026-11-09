// Hides: how a Go test writes the unit's typed values from plain literals: a small course, a
// record, a problem or a game as a test sets them out, with plain strings and numbers where the
// unit holds branded ids (src/units/go/core/decode.logic.js). The cast stands here, once, for
// every Go test.

/**
 * A course from a test's literal: parts with their items' ids, kinds with their problems.
 * @param {{ parts: { n: number, name: string, items: string[], cases?: number[] }[], kinds: { id: number, name: string, after: number[], problems: string[], source?: string, seqs?: string[], term?: string }[] }} course
 * @returns {import('../../src/units/go/core/own.logic.js').Course}
 */
export const courseFrom = course =>
  /** @type {import('../../src/units/go/core/own.logic.js').Course} */ (
    /** @type {unknown} */ ({
      parts: course.parts,
      kinds: course.kinds.map(k => ({ source: 'aether', seqs: [], ...k }))
    })
  )

/**
 * A value of the unit's typed shape `T` from a test's literal of the same fields.
 * @template T
 * @param {unknown} value
 * @returns {T}
 */
export const typed = value => /** @type {T} */ (value)

/**
 * A record from a test's literal.
 * @param {unknown} value
 * @returns {import('../../src/units/go/core/decode.logic.js').GoRecord}
 */
export const recordFrom = value => typed(value)

/**
 * A game from a test's literal.
 * @param {unknown} value
 * @returns {import('../../src/units/go/core/decode.logic.js').Game}
 */
export const gameFrom = value => typed(value)

/**
 * An item a test answers: one the next action gave, as gate 1 takes it.
 * @param {unknown} item
 * @returns {import('../../src/units/go/core/decode.logic.js').Asked}
 */
export const askedFrom = item => typed(item)

/**
 * A value's fields, read by name whatever its member of a union.
 * @param {unknown} value
 * @returns {{ readonly [field: string]: unknown }}
 */
export const fieldsOf = value => typed(value)

/**
 * A position's key from a test's literal, "7-41".
 * @param {string} text
 * @returns {import('../../src/units/go/core/decode.logic.js').PositionKey}
 */
export const keyFrom = text => typed(text)
