// Hides: how a message from another tab enters this one: the record's channel carries only the
// signals below, and anything else on it is left unheard.

/** How the record opened: as it was, read-only after its check found damage, or not at all. @typedef {'ok' | 'read-only' | 'failed'} RecordState */
/** A part of the record: its text, and how many times it has been saved. @typedef {{ text: string, version: number }} Part */
/**
 * A save's outcome: committed at a new version; refused because the part changed (the part as
 * it stands now comes back); refused outright, with the reason in `recordState`; or not answered,
 * to be sent again when a tab holding the record answers.
 * @typedef {{ ok: true, version: number } | { ok: false, now: Part } | { ok: false, refused: true } | { ok: false, later: true }} SaveReply
 */
/**
 * What the leader tells the other tabs, and what they ask it.
 * @typedef {{ t: 'hello', from: string }
 *   | { t: 'leader', from: string, hidden: boolean }
 *   | { t: 'snapshot', to: string, state: RecordState, why: string, records: Record<string, Part> }
 *   | { t: 'claim', from: string }
 *   | { t: 'handover', from: string }
 *   | { t: 'put', from: string, id: number, key: string, text: string, version: number }
 *   | { t: 'put-reply', to: string, id: number, reply: SaveReply }
 *   | { t: 'changed', key: string, part: Part }} Signal
 */

/** Every kind of signal, by its tag. */
const TAGS = new Set([
  'hello',
  'leader',
  'snapshot',
  'claim',
  'handover',
  'put',
  'put-reply',
  'changed'
])

/**
 * A signal heard on the record's channel, or null when it is none this version sends.
 * @param {unknown} data
 * @returns {Signal | null}
 */
export const signalOf = data =>
  typeof data === 'object' && data !== null && 't' in data && TAGS.has(String(data.t))
    ? /** @type {Signal} */ (data)
    : null
