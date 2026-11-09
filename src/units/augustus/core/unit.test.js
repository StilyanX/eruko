// What the app reads of the Augustus unit (src/units/augustus/core/unit.logic.js): the unit page's
// rows and the dated list.
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

test('the unit page lists no lesson and no section; Continue reads the life page', () => {
  for (const lives of [{}, { lives: { augustus: { lastLesson: 11 } } }]) {
    const rows = unit.rows({ lives })
    assert.deepEqual(rows.items, [])
    assert.deepEqual(rows.top, [])
    assert.equal('sections' in rows, false)
    assert.deepEqual(rows.after, [
      {
        key: 'life',
        title: 'The life of Augustus',
        to: '/explore/biography/augustus/life',
        done: false
      }
    ])
  }
  assert.equal(
    unit.place({ lives: { lives: { augustus: { lastLesson: 11 } } } }),
    'Lesson 13 of 56.'
  )
})
