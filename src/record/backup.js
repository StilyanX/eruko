// Hides: how a backup file's records are taken from, and put back into, the parts of the record
// as they stand in this tab.
import { persistedStore } from './store.js'


/**
 * Every record as it stands now, a change not yet written included.
 * @param {readonly import('../kernel/pages.logic.js').RecordPart[]} parts
 * @returns {import('../kernel/backup.logic.js').Records}
 */
export const allRecords = parts =>
  Object.fromEntries(parts.map(({ key }) => [key, persistedStore(key).get()]))

/**
 * Put `records` in place of every record, written at once; one a backup lacks is emptied.
 * @param {import('../kernel/backup.logic.js').Records} records
 * @param {readonly import('../kernel/pages.logic.js').RecordPart[]} parts
 */
export function restore(records, parts) {
  for (const { key } of parts) {
    const store = persistedStore(key)
    store.set(records[key] ?? {})
    store.flush()
  }
}
