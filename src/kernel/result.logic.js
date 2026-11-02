// Hides: the shape of an expected failure: a function that can fail in
// a way the learner or the world causes (a file that is not a backup, a stored part that cannot be
// read, an answer that cannot be read) returns `{ ok: true, value }` or `{ ok: false, error }`,
// each function with its own closed set of errors. Throwing is for broken invariants only.

/**
 * @template T, E
 * @typedef {{ readonly ok: true, readonly value: T } | { readonly ok: false, readonly error: E }} Result
 */

/**
 * A success.
 * @template T
 * @param {T} value
 * @returns {{ readonly ok: true, readonly value: T }}
 */
export const ok = value => ({ ok: true, value })

/**
 * An expected failure.
 * @template E
 * @param {E} error
 * @returns {{ readonly ok: false, readonly error: E }}
 */
export const fail = error => ({ ok: false, error })
