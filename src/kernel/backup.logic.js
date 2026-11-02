// Hides: the learner's records as one file, saved to carry them to another browser or to keep them
// when a browser clears its data: the file's text, how it is read back (its decoder), its name,
// the names of the records it holds and when a new one is due. The record's own parts are read and
// written by record/backup.js.
import { isRecord } from './decode.logic.js'
import { fail, ok } from './result.logic.js'

/** @typedef {{ [key: string]: import('./decode.logic.js').JsonRecord }} Records The records by key. */

/**
 * A backup file's text: `records` is { [key]: record }, `saved` the moment it was made.
 * @param {Records} records
 * @param {string} saved
 */
export const backupText = (records, saved) =>
  JSON.stringify({ app: 'eruko', backup: 1, saved, records }, null, 1)

/**
 * The names of the records that hold something, in `records` ({ [key]: record }).
 * @param {Records} records
 * @param {readonly import('./pages.logic.js').RecordPart[]} parts
 */
export const namesIn = (records, parts) =>
  parts.filter(p => Object.keys(records[p.key] ?? {}).length).map(p => p.title)

/**
 * The file name of a backup made on `now`, by the device's own date.
 * @param {Date} now
 * @param {string} [kind]
 */
export const backupName = (now, kind = 'backup') =>
  `eruko-${kind}-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}.json`

// A backup file older than this is due again.
const BACKUP_DAYS = 7
const DAY_MS = 24 * 3600000

/**
 * Whether a new backup file is due: none was saved, or the last is more than a week old.
 * @param {unknown} saved the last backup's time, an ISO string
 * @param {number} nowMs
 */
export function backupDue(saved, nowMs) {
  if (typeof saved !== 'string') return true
  const atMs = Date.parse(saved)
  return Number.isNaN(atMs) || nowMs - atMs > BACKUP_DAYS * DAY_MS
}

/**
 * Why a file cannot be loaded as a backup: it is not one, it comes from a newer Eruko, or it
 * holds no record (loading it would only empty every record here).
 * @typedef {'not-backup' | 'newer' | 'empty'} BackupError
 */

/**
 * The records in a backup file's text, and when it was saved. Only the parts Eruko keeps
 * (`parts`) are taken.
 * @param {string} text
 * @param {readonly import('./pages.logic.js').RecordPart[]} parts
 * @returns {import('./result.logic.js').Result<{ saved: string | null, records: Records }, BackupError>}
 */
export function decodeBackup(text, parts) {
  /** @type {unknown} */
  let data
  try {
    data = JSON.parse(text)
  } catch {
    return fail('not-backup')
  }
  // A file saved before the app was named Eruko says "aether".
  if (!isRecord(data) || !['eruko', 'aether'].includes(String(data.app)) || !isRecord(data.records)) return fail('not-backup')
  if (typeof data.backup === 'number' && data.backup > 1) return fail('newer')
  const held = data.records
  /** @type {Records} */
  const records = {}
  for (const { key } of parts) {
    const value = held[key]
    if (isRecord(value)) records[key] = value
  }
  if (!parts.some(p => Object.keys(records[p.key] ?? {}).length)) return fail('empty')
  return ok({ saved: typeof data.saved === 'string' ? data.saved : null, records })
}
