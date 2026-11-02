// Hides: which stores hold the units' records. A screen that reads every unit's record (the
// explore page, a unit page) reads them here, each part by the name its units give it, and
// watches them so it redraws on a change.
import { persistedStore } from '../record/store.js'
import { PARTS } from './registry.js'

/**
 * Every part of the record as it stands, by its name.
 * @returns {import('../kernel/pages.logic.js').UnitRecords}
 */
export const recordsNow = () =>
  Object.fromEntries(PARTS.map(p => [p.name, persistedStore(p.key).get()]))

/**
 * Redraw `screen` on any change to a unit's record.
 * @param {import('../parts/view.dom.js').Screen} screen
 */
export function watchRecords(screen) {
  for (const { key } of PARTS) screen.watch(persistedStore(key))
}
