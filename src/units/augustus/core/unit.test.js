// What the app reads of the Augustus unit (src/units/augustus/core/unit.logic.js): the dated list.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { unit } from './unit.logic.js'

test('the dated list counts the life learned today as due', () => {
  const lives = {
    lives: { augustus: { lastLesson: 0 } },
    recall: { augustus: { entered: '2026-10-01', learning: 0, next: null, lines: [], later: 0 } }
  }
  const row = unit.dated({ lives })[0]
  assert.ok(row)
  assert.deepEqual(row.dates, ['2026-10-01'])
})
