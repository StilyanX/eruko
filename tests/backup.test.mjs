// The learner's records as a backup file: every part the units read is written (src/record/backup.js);
// what is read back is src/kernel/backup.test.js's.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { allRecords } from '../src/record/backup.js'
import { PARTS } from '../src/shell/registry.js'

test("a backup holds every part of the record the units read, each once", () => {
  const keys = Object.keys(allRecords(PARTS))
  assert.deepEqual(keys, PARTS.map(p => p.key))
  assert.equal(new Set(keys).size, keys.length)
  assert.ok(keys.length > 0)
})
