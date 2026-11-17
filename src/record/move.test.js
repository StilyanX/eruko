import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sameRecord } from './move.logic.js'

const old = { format: 2, tables: { records: 3 }, check: 'ok' }

test('a copy with the same format, tables and rows, passing both checks, is the record', () => {
  assert.equal(sameRecord(old, { ...old, integrity: 'ok' }), null)
})

test('a copy that differs in any way, or fails a check, is refused', () => {
  assert.match(String(sameRecord(old, { ...old, tables: { records: 2 } })), /records/)
  assert.match(String(sameRecord(old, { ...old, tables: { records: 3, extra: 0 } })), /extra/)
  assert.match(String(sameRecord(old, { ...old, tables: {} })), /nothing/)
  assert.match(String(sameRecord(old, { ...old, format: 1 })), /format/)
  assert.match(String(sameRecord(old, { ...old, check: 'page 2 bad' })), /quick check/)
  assert.match(String(sameRecord(old, { ...old, integrity: 'row 1 missing' })), /integrity/)
})
