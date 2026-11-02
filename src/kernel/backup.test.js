// The learner's records as a backup file: what is written, and what is read back.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { backupDue, backupText, decodeBackup, namesIn } from './backup.logic.js'
import { KEYS } from './storage.logic.js'

// Three parts as units name them: the backup reads only what it is given.
const A = { name: 'a', key: 'aether-test-a', title: 'Alpha' }
const B = { name: 'b', key: 'aether-test-b', title: 'Beta' }
const C = { name: 'c', key: 'aether-test-c', title: 'Gamma' }
const parts = [A, B, C]
const records = { [A.key]: { cards: { gut: [] } }, [B.key]: {}, [C.key]: { items: [1] } }

test('a backup reads back as it was written', () => {
  const read = decodeBackup(backupText(records, '2026-10-02T10:00:00.000Z'), parts)
  assert.ok(read.ok)
  const back = read.value
  assert.equal(back.saved, '2026-10-02T10:00:00.000Z')
  assert.deepEqual(back.records, records)
  assert.deepEqual(namesIn(back.records, parts), ['Alpha', 'Gamma'])
})

test('only the records Eruko keeps are read: the theme, a stranger key and a broken record are left out', () => {
  const text = JSON.stringify({
    app: 'eruko',
    records: { [A.key]: { a: 1 }, [KEYS.theme]: 'dark', other: { x: 1 }, [B.key]: [1, 2] }
  })
  assert.deepEqual(decodeBackup(text, parts), {
    ok: true,
    value: { saved: null, records: { [A.key]: { a: 1 } } }
  })
})

test('a file that is not a backup is refused as one', () => {
  for (const text of [
    '',
    'not json',
    '[]',
    'null',
    '{"records":{}}',
    '{"app":"aether"}',
    '{"app":"other","records":{}}'
  ])
    assert.deepEqual(decodeBackup(text, parts), { ok: false, error: 'not-backup' })
})

test('a backup from a newer Eruko is refused, with what to do', () => {
  const text = JSON.stringify({ app: 'aether', backup: 2, records: {} })
  assert.deepEqual(decodeBackup(text, parts), { ok: false, error: 'newer' })
})

test('a backup that holds nothing is refused: loading it would only empty every record', () => {
  for (const records of [{}, { [A.key]: {} }, { other: { x: 1 } }])
    assert.deepEqual(decodeBackup(JSON.stringify({ app: 'aether', backup: 1, records }), parts), {
      ok: false,
      error: 'empty'
    })
})

test('a backup file is due when none was saved or the last is more than a week old', () => {
  const now = Date.parse('2026-10-14T12:00:00Z')
  assert.equal(backupDue(undefined, now), true)
  assert.equal(backupDue('not a date', now), true)
  assert.equal(backupDue('2026-10-08T12:00:00Z', now), false)
  assert.equal(backupDue('2026-10-07T11:59:00Z', now), true)
})
