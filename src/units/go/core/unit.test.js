// What the app reads of the Go unit (src/units/go/unit.js): the place line, the rows of the
// unit page and the dated list, as functions of the record.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { typed } from '../../../../tests/lib/go-typed.mjs'
import { ENGINE, SERVER } from './record.logic.js'
import { UNITS } from '../../../shell/registry.js'
import { KINDS, PARTS, SECTIONS } from './course.gen.js'
import { positionsLeft } from './next.logic.js'
import { unit } from './unit.logic.js'

const day = '2026-10-08'
const GO = UNITS.find(u => u.slug === unit.slug)
assert.ok(GO)
const [FIRST_PART] = PARTS
assert.ok(FIRST_PART)
const [FIRST_KIND] = KINDS
assert.ok(FIRST_KIND)

test('the place line names the open rules part, then the open kind, each by its place among its own', () => {
  assert.equal(unit.place({}), 'Rules part 1 of 5: The board and turns.')
  const recall = Object.fromEntries(
    PARTS.flatMap(p => p.items).map(id => [id, [{ date: day, right: true, next: '2026-10-09' }]])
  )
  assert.equal(
    unit.place({ go: { recall } }),
    `Kind 1 of ${KINDS.length}: Capture a stone in atari.`
  )
  const course = KINDS.map(k => ({ kind: k.id, after: k.after, opened: day, retired: day }))
  assert.equal(
    unit.place({ go: { recall, course } }),
    `All 5 rules parts and ${KINDS.length} kinds done.`
  )
})

test('the rows: the five parts, then the kinds, each done in its turn; the sections hold them all', () => {
  const rows = unit.rows({})
  assert.equal(rows.items.length, PARTS.length + KINDS.length)
  assert.deepEqual(
    rows.items.slice(0, 5).map(r => r.title),
    [
      'The board and turns',
      'Liberties and capture',
      'Ko',
      'Passing and the end',
      'Counting by area'
    ]
  )
  assert.ok(rows.items.every(r => !r.done))
  // the part in hand opens the work list; a part not reached yet opens nothing; every kind
  // opens its own page, with its worked example
  assert.deepEqual(
    rows.items.slice(0, 3).map(r => r.to),
    ['/explore/go/go/work', undefined, undefined]
  )
  assert.equal(rows.items[5]?.to, `/explore/go/go/work?kind=${FIRST_KIND.id}`)
  assert.ok(rows.items.slice(5).every(r => r.to?.startsWith('/explore/go/go/work?kind=')))
  assert.equal(rows.start.done, false)
  assert.deepEqual(
    rows.top.map(r => r.title),
    ['Work list']
  )
  assert.deepEqual(GO.sections, SECTIONS)
})

test('a part done opens to be read again, a kind retired opens its page, and Start is done once set up', () => {
  const recall = Object.fromEntries(
    FIRST_PART.items.map(id => [id, [{ date: day, right: false, next: '2026-10-09' }]])
  )
  assert.deepEqual(
    unit
      .rows({ go: { recall } })
      .items.map(r => r.done)
      .slice(0, 2),
    [true, false]
  )
  // a part done opens to be read again, and the next part is the one in hand
  assert.deepEqual(
    unit
      .rows({ go: { recall } })
      .items.slice(0, 2)
      .map(r => r.to),
    ['/explore/go/go/work?part=1', '/explore/go/go/work']
  )
  // with every part done, a kind retired opens its page, the next kind opens the work list, and a later one its page
  const all = Object.fromEntries(
    PARTS.flatMap(p => p.items.map(id => [id, [{ date: day, right: true, next: '2026-10-09' }]]))
  )
  const course = [{ kind: FIRST_KIND.id, opened: day, retired: day }]
  assert.deepEqual(
    unit
      .rows({ go: { recall: all, course } })
      .items.slice(5, 8)
      .map(r => r.to),
    [
      `/explore/go/go/work?kind=${FIRST_KIND.id}`,
      '/explore/go/go/work',
      `/explore/go/go/work?kind=${KINDS[2]?.id}`
    ]
  )
  // set up: an engine with its network and a server with its player, as Start stores them
  const setUp = {
    engine: { ...ENGINE, checksum: 'c0ffee' },
    server: { ...SERVER, user: 'learner', id: 1, since: day }
  }
  assert.equal(unit.rows({ go: setUp }).start.done, true)
  assert.ok(unit.finished({ go: setUp }).has('start'))
  // an engine or a server stored without what set-up stores is not set up
  assert.equal(unit.finished({ go: { engine: {}, server: {} } }).has('start'), false)
})

test('the dated list: what is due, and what waits today with no date', () => {
  const [group] = unit.dated({}, day)
  assert.ok(group)
  assert.equal(group.to, '/explore/go/go/work')
  assert.deepEqual(group.dates, [])
  // the first game waits too: set-up comes when it comes
  assert.equal(group.fresh, FIRST_PART.items.length + 1)
  const recall = { 'R1.1': [{ date: day, right: true, next: '2026-10-09' }] }
  assert.deepEqual(unit.dated({ go: { recall } }, day)[0]?.dates, ['2026-10-09'])
  // each review position counts, as the Review page counts it, not one for the whole review
  const games = [{ id: 1, date: day, moves: [], list: [{ move: 1 }, { move: 2, typed: 'D4' }, { move: 3 }] }]
  const reviewing = typed({ go: { games } })
  assert.equal(positionsLeft(typed({ games })), 2)
  assert.equal(unit.dated(reviewing, day)[0]?.fresh, FIRST_PART.items.length + 2)
  // a stale or odd record never throws
  for (const go of [null, { list: {} }, { recall: {}, games: [] }])
    assert.ok(unit.dated(typed({ go }), day))
})

test("the unit page's last section ends on the last kind, after the rules parts", () => {
  assert.equal(GO.sections?.at(-1)?.last, PARTS.length + KINDS.length)
})
