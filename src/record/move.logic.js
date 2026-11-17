// Hides: when a copy of the record counts as the record: same format, same tables, same rows in
// each, and SQLite's checks pass on it.

/**
 * What a record file holds, as counted when it is moved.
 * @typedef {{ format: number, tables: Record<string, number>, check: string, integrity?: string }} Census
 */

/**
 * Null when `copy` holds what `old` held and passes its checks; else why it does not.
 * @param {Census} old
 * @param {Census} copy
 * @returns {string | null}
 */
export function sameRecord(old, copy) {
  if (copy.check !== 'ok') return `The copy failed its quick check: ${copy.check}`
  if (copy.integrity !== undefined && copy.integrity !== 'ok')
    return `The copy failed its integrity check: ${copy.integrity}`
  if (copy.format !== old.format) return `The copy is in format ${copy.format}, not ${old.format}.`
  const names = new Set([...Object.keys(old.tables), ...Object.keys(copy.tables)])
  for (const name of names)
    if (old.tables[name] !== copy.tables[name])
      return `Table ${name} holds ${copy.tables[name] ?? 'nothing'} rows in the copy, ${old.tables[name] ?? 'nothing'} in the old record.`
  return null
}
