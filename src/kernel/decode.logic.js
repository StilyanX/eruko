// Hides: how a value from outside the code enters it: each source the
// app itself reads (a part of the record as stored, the address, a stored setting) has one decoder
// here that takes what came in and returns a checked type or a failure. A unit's own sources (its
// part of the record, the files it imports, what it fetches) are decoded in its core/decode.logic.js.
// A backup file's decoder sits with the backup's text (backup.logic.js). The decoders and the id
// constructors are the only code that casts.
import { InvariantError } from './invariant.logic.js'

/** A stored record: a JSON object whose fields each unit owns. @typedef {{ [field: string]: unknown }} JsonRecord */

/**
 * A part of the record as stored: its value, or an empty record when there is none or it cannot
 * be read; and, as damaged, the stored text when it is there but is not a JSON object, so the
 * text is kept and never written over unseen.
 * @param {string | null} raw
 * @returns {{ value: JsonRecord, damaged: string | null }}
 */
export function parseRecord(raw) {
  if (raw === null) return { value: {}, damaged: null }
  /** @type {unknown} */
  let value
  try {
    value = JSON.parse(raw)
  } catch {
    return { value: {}, damaged: raw }
  }
  return isRecord(value) ? { value, damaged: null } : { value: {}, damaged: raw }
}

/**
 * Whether a value is a plain object (not a list, a number, a string or null): a part of the
 * record, whose fields each unit owns.
 * @param {unknown} value
 * @returns {value is JsonRecord}
 */
export const isRecord = value =>
  typeof value === 'object' && value !== null && Object.getPrototypeOf(value) === Object.prototype

/**
 * A unit's manifest module, as an import of its folder's manifest.js gives it: its entry, its
 * contract and its page loaders, each checked to be there. A folder without them is a broken
 * unit, not something the learner did.
 * @param {unknown} mod
 * @param {string} folder
 * @returns {import('./pages.logic.js').Manifest}
 */
export function manifestOf(mod, folder) {
  const has = (/** @type {unknown} */ v, /** @type {string} */ k) =>
    typeof v === 'object' && v !== null && k in v
  if (!has(mod, 'UNIT') || !has(mod, 'view') || !has(mod, 'PAGES'))
    throw new InvariantError(`units/${folder}/manifest.js gives no UNIT, view and PAGES`)
  return /** @type {import('./pages.logic.js').Manifest} */ (mod)
}
