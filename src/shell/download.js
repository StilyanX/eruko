// Hides: how a file reaches the learner's downloads folder, and the backup file made from every
// part of the record the units read.
import { allRecords } from '../record/backup.js'
import { backupName, backupText } from '../kernel/backup.logic.js'
import { KEYS } from '../kernel/storage.logic.js'
import { persistedStore } from '../record/store.js'
import { PARTS } from './registry.js'

/**
 * Save a blob to the downloads folder under `name`. Its address is kept until the page closes: a
 * browser that asks where to save reads it only after the learner answers.
 * @param {Blob} blob
 * @param {string} name
 */
export function download(blob, name) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = name
  a.click()
}

/** Save every record as one backup file, and note when, for Settings' reminder. */
export function downloadBackup() {
  const saved = new Date().toISOString()
  const text = backupText(allRecords(PARTS), saved)
  download(new Blob([text], { type: 'application/json' }), backupName(new Date()))
  persistedStore(KEYS.backup).set({ saved })
}
