// Study days and the dated list every unit shares.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { addDays, datedView, isDue, nextDate, reviewRows, studyDay, waiting, writeLine, changeLine, RETENTION } from './days.logic.js'

const day = '2026-09-22'

/**
 * A seeded generator of numbers in [0, 1) (mulberry32), so a failing case can be run again.
 * @param {number} seed
 */
function random(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const CASES = 2000

/**
 * A history of answers, oldest first: each a day after the last by 1 to 120 days, right or wrong.
 * @param {() => number} rnd
 */
function history(rnd) {
  /** @type {{ date: string, right: boolean, next: string }[]} */
  let lines = []
  let day = '2026-01-01'
  const n = 1 + Math.floor(rnd() * 12)
  for (let i = 0; i < n; i++) {
    lines = writeLine(
      lines,
      rnd() < 0.7,
      day,
      rnd() < 0.5 ? RETENTION.rebuildable : RETENTION.exact
    )
    day = addDays(day, 1 + Math.floor(rnd() * 120))
  }
  return { lines, day }
}

test('the day turns at 04:00', () => {
  assert.equal(studyDay(new Date('2026-09-23T03:59:00').getTime()), '2026-09-22')
  assert.equal(studyDay(new Date('2026-09-23T04:00:00').getTime()), '2026-09-23')
})

test('first line: the next day, right or wrong', () => {
  assert.equal(nextDate([], true, day), '2026-09-23')
  assert.equal(nextDate([], false, day), '2026-09-23')
})

test('an item always right returns on days 1, 8, 40, 158 and then in a year or more', () => {
  /** @type {import('./days.logic.js').Line[]} */
  let lines = []
  let d = '2026-09-01'
  const seen = []
  for (let i = 0; i < 5; i++) {
    lines = writeLine(lines, true, d)
    const last = lines.at(-1)
    assert.ok(last)
    d = last.next
    seen.push(d)
  }
  assert.deepEqual(seen, ['2026-09-02', '2026-09-09', '2026-10-11', '2027-02-06', '2028-02-14'])
})

test('missed on day d: back on d + 1, and if right there, two days later', () => {
  let lines = writeLine([], true, '2026-09-01') // next 09-02
  lines = writeLine(lines, false, '2026-09-02')
  assert.equal(lines.at(-1)?.next, '2026-09-03')
  lines = writeLine(lines, true, '2026-09-03')
  assert.equal(lines.at(-1)?.next, '2026-09-05')
})

test('a right answer after days away is dated from the days that really passed', () => {
  const lines = [{ date: '2026-09-01', right: true, next: '2026-09-02' }]
  assert.equal(nextDate(lines, true, '2026-09-11'), '2026-10-06')
  assert.ok(nextDate(lines, true, '2026-09-11') > nextDate(lines, true, '2026-09-03'))
})

test('one line a day per problem', () => {
  const lines = writeLine([], false, day)
  assert.equal(writeLine(lines, true, day), lines)
})

test('the dated list as the Review page shows it: a row per kind with its count due, also when nothing is due', () => {
  const groups = [
    { one: 'sheet', many: 'sheets', to: '/s', dates: [addDays(day, 2)] },
    {
      one: 'problem',
      many: 'problems',
      to: '/p',
      dates: ['2026-09-20', day, addDays(day, 1), addDays(day, 3)]
    },
    { one: 'proof', many: 'proofs', to: '/a', where: 'A', dates: [addDays(day, 1)] },
    { one: 'proof', many: 'proofs', to: '/b', where: 'B', dates: [day, addDays(day, 1)] },
    { one: 'life', many: 'lives', to: '/l', where: 'L', dates: [] },
    { one: 'life', many: 'lives', to: '/m', where: 'M', dates: [addDays(day, 1)] }
  ]
  const v = datedView(groups, day)
  assert.deepEqual(
    v.rows.map(g => [g.one, g.where, g.n]),
    [
      ['sheet', undefined, 0],
      ['problem', undefined, 2],
      ['proof', 'B', 1],
      ['life', undefined, 0]
    ]
  )
  assert.equal(v.dueCount, 3)
  // Items with places of their own: the row opens on the one due longest.
  const own = [
    {
      one: 'proof',
      many: 'proofs',
      to: '/t',
      where: 'T',
      dates: [addDays(day, 1), day, addDays(day, -2)],
      tos: ['/t?item=a', '/t?item=b', '/t?item=c']
    }
  ]
  assert.equal(datedView(own, day).rows[0]?.to, '/t?item=c')
  assert.deepEqual(datedView([], day), { rows: [], dueCount: 0, freshCount: 0, first: undefined })
  // The Review card opens the page of the item due longest.
  assert.equal(v.first, '/p')
})

test('new items with no date yet are counted beside the due ones, and the card opens them when nothing is due', () => {
  const sheets = { one: 'sheet', many: 'sheets', to: '/s', dates: [addDays(day, 2)] }
  const problems = { one: 'problem', many: 'problems', to: '/p', dates: [], fresh: 21 }
  const groups = [sheets, problems]
  const v = datedView(groups, day)
  assert.deepEqual([v.dueCount, v.freshCount, v.first], [0, 21, '/p'])
  assert.deepEqual(
    v.rows.map(g => [g.one, g.due, g.fresh, g.n]),
    [
      ['sheet', 0, 0, 0],
      ['problem', 0, 21, 21]
    ]
  )
  // Due work comes before new work: a sheet due opens first, though the problems row is longer.
  const both = datedView([{ ...sheets, dates: [day] }, problems], day)
  assert.deepEqual([both.dueCount, both.freshCount, both.first], [1, 21, '/s'])
  // A kind kept elsewhere is never the place to open.
  assert.equal(
    datedView([{ one: 'card', many: 'cards', to: '/c', dates: [day], away: 'In Anki' }], day).first,
    undefined
  )
  assert.equal(waiting(6, 21), '6 due, 21 new')
  assert.equal(waiting(6, 0), '6 due')
  assert.equal(waiting(0, 21), '21 new')
  assert.equal(waiting(0, 0), '')
})

test('the Review page: a row for each page done every session, always open, then the kinds answered elsewhere', () => {
  const pages = [
    { title: 'Number facts', to: '/u/number-facts' },
    { title: 'Mixed practice', to: '/u/mixed-practice' },
    { title: 'Marked work', to: '/u/marked-work' }
  ]
  const groups = [
    { one: 'sheet', many: 'sheets', to: '/u/number-facts', dates: [day], fresh: 3 },
    { one: 'problem', many: 'problems', to: '/u/mixed-practice', dates: [], fresh: 21 },
    {
      one: 'proof',
      many: 'proofs',
      to: '/u/t1#proofs',
      where: 'T1',
      dates: [day],
      tos: ['/u/t1?item=a#proofs']
    },
    { one: 'card', many: 'cards', to: '/u/texts', dates: [addDays(day, 1)] }
  ]
  assert.deepEqual(
    reviewRows(groups, day, pages).map(g => [g.name, g.to, g.due, g.fresh]),
    [
      ['Number facts', '/u/number-facts', 1, 3],
      ['Mixed practice', '/u/mixed-practice', 0, 21],
      ['Marked work', '/u/marked-work', 0, 0],
      ['Proofs: T1', '/u/t1?item=a#proofs', 1, 0],
      ['Cards', undefined, 0, 0]
    ]
  )
  // A unit without these pages lists only its kinds.
  assert.deepEqual(
    reviewRows(groups.slice(3), day).map(g => [g.name, g.to]),
    [['Cards', undefined]]
  )
})

test('a kind with a name of its own is listed under it on Review, with or without anything due', () => {
  const day = '2026-10-15'
  const life = {
    one: 'life',
    many: 'lives',
    name: 'Tell the whole life',
    to: '/u/life',
    where: 'The life'
  }
  assert.deepEqual(
    reviewRows([{ ...life, dates: [day] }], day).map(g => [g.name, g.n]),
    [['Tell the whole life', 1]]
  )
  assert.deepEqual(
    reviewRows([{ ...life, dates: [] }], day).map(g => [g.name, g.n]),
    [['Tell the whole life', 0]]
  )
})

test('a mark pressed by mistake: today\'s line is written again from the lines before it, an older line never', () => {
  const first = writeLine([], true, '2026-10-01')
  const right = writeLine(first, true, '2026-10-02')
  const wrong = changeLine(right, false, '2026-10-02')
  assert.ok(wrong)
  assert.deepEqual(wrong.at(-1), { date: '2026-10-02', right: false, next: '2026-10-03' })
  assert.deepEqual(changeLine(wrong, true, '2026-10-02'), right)
  assert.equal(changeLine(right, false, '2026-10-05'), right)
  assert.equal(changeLine(undefined, true, '2026-10-02'), undefined)
})

test('an item with no lines is never due; a day is added across a month end', () => {
  assert.equal(isDue(/** @type {never} */ (null), day), false) // null: an item with no lines is stored as null
  assert.equal(addDays('2026-09-30', 1), '2026-10-01')
})

test('a Review row with nothing waiting has no address at all, never a 0', () => {
  const rows = reviewRows([{ one: 'card', many: 'cards', to: '/u/cards', dates: [] }], '2026-10-15')
  assert.equal(rows[0]?.n, 0)
  assert.equal(rows[0]?.to, undefined)
})

test('a right answer never brings the item back sooner than a wrong one would', () => {
  const rnd = random(2)
  for (let c = 0; c < CASES; c++) {
    const { lines, day } = history(rnd)
    for (const retention of [RETENTION.rebuildable, RETENTION.exact]) {
      const right = nextDate(lines, true, day, retention)
      const wrong = nextDate(lines, false, day, retention)
      assert.ok(right >= wrong, `case ${c}: right ${right} before wrong ${wrong}`)
      assert.ok(right > day && wrong > day, `case ${c}: due on or before ${day}`)
    }
  }
})
