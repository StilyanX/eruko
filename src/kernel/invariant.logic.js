// Hides: what happens when a rule the code relies on is broken. A broken invariant throws an InvariantError, never an expected failure:
// those are returned as values (result.logic.js). The record's writer stops all saving on one, so a
// broken record is never written (record/store.js).

/** A rule the code relies on, broken: a bug, never the learner's doing. */
export class InvariantError extends Error {
  name = 'InvariantError'
}

/**
 * Check what must hold; throw an InvariantError naming it when it does not.
 * @param {unknown} holds
 * @param {string} what the rule, as a plain sentence
 * @returns {asserts holds}
 */
export function assert(holds, what) {
  if (!holds) throw new InvariantError(what)
}

/**
 * The end of a switch over a union that handled every member: reached only by a value the
 * types did not allow, which throws.
 * @param {never} value
 * @returns {never}
 */
export function unreachable(value) {
  throw new InvariantError(`A value no case handles: ${JSON.stringify(value)}`)
}
