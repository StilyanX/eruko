// Hides: the parts of the record the app itself keeps, by their keys, and how a stored part is
// read. Each unit names its own parts in its entry. Values are shipped contracts:
// renaming one silently orphans every reader's saved data.
export const KEYS = /** @type {const} */ ({
  // The language (shell/language.js).
  settings: 'aether-settings',
  // The theme, read by index.html before first paint.
  theme: 'aether-theme',
  // A record's text that could not be read, by its key, kept until the learner saves it as a file
  // (record/store.js): a damaged record is never written over unseen.
  damaged: 'aether-damaged',
  // When the learner last saved a backup file (shell/download.js), for Settings' reminder.
  backup: 'aether-backup',
  // This browser's part in syncing the record with the computer (record/index.js): the saves made
  // while the computer could not be reached. Kept in the key store, never in the record.
  sync: 'aether-sync'
})
