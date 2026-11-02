// The Augustus decoder (src/units/augustus/core/decode.logic.js) on a stale, restored or hand-edited
// record, and on what the learner types.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decodeLives, readChance } from './decode.logic.js'

/** A record with every part odd, as a hand edit might leave it. */
const ODD = {
  items: [
    null,
    { id: 'x', kind: 'nothing' },
    { id: 'f', life: 'aug', kind: 'forecast', p: 'high', known: 'yes', lifeDate: 3 },
    { id: 'c', life: 'aug', kind: 'claim', verdict: 'maybe', witness: 4 },
    { id: 'r', life: 'aug', kind: 'rule', text: 'A rule.', lives: 'aug', shape: 7 }
  ],
  position: {
    life: 'aug',
    lesson: 'two',
    step: 'jump',
    shape: 'new',
    check: { claims: [{}], shape: 'n1' }
  },
  telling: { life: 'aug', phase: 'odd', marks: { a: true, b: 'no' } },
  level: { state: 'high', checks: [{}] },
  pair: { shape: 'n1', cells: { 'a.problem': 'x', 'a.knew': 3 } },
  listing: {},
  you: { field: 1 },
  checklist: { note: 5 },
  model: 4,
  lives: { aug: { closed: '2026-10-01', setbacks: 'no', lastLesson: 'x' } },
  recall: { aug: { lines: [{}], next: 3 } },
  other: { kept: true }
}

test('the decoder reads odd fields of an item as absent and leaves out items of no kind', () => {
  const r = decodeLives(ODD)
  assert.deepEqual(
    r.items.map(i => i.kind),
    ['forecast', 'claim', 'rule']
  )
  const [f, c, rule] = r.items
  assert.ok(f?.kind === 'forecast' && c?.kind === 'claim' && rule?.kind === 'rule')
  assert.deepEqual([f.p, f.known, f.lifeDate], [undefined, undefined, undefined])
  assert.deepEqual([c.verdict, c.witness], [undefined, null])
  assert.deepEqual([rule.lives, rule.shape], [undefined, undefined])
  assert.deepEqual(r.lives.aug, { closed: '2026-10-01' }, 'a life closed keeps its day')
  assert.deepEqual(
    decodeLives({
      lives: { aug: { closed: true } },
      recall: { aug: { lines: [{ date: '2026-10-04' }] } }
    }).lives.aug,
    { closed: '2026-10-04' },
    'a life an older page saved only as closed closed on the day of its last telling'
  )
  assert.deepEqual(r.recall.aug, {
    lines: [{ date: '', right: 0, wrong: 0 }],
    learning: 0,
    later: 0,
    next: null
  })
})

test('the decoder reads each odd part as empty and keeps a field it does not name', () => {
  const r = decodeLives(ODD)
  assert.deepEqual(r.position, {
    life: 'aug',
    lesson: -1,
    step: 'situation',
    screen: 0,
    shape: 'new',
    check: { claims: [{ id: '', verdict: undefined }], shape: 'n1' }
  })
  assert.deepEqual(r.telling, { life: 'aug', phase: 'judge', text: '', marks: { a: true } })
  assert.deepEqual(r.level, {
    state: 'lowered',
    checks: [{ life: '', date: '', n: 0, mean: 0, variance: 0, meanP: 0, shareYes: 0 }]
  })
  assert.deepEqual(r.pair, {
    shape: 'n1',
    cells: { 'a.problem': 'x' },
    rule: '',
    rests: [],
    extra: []
  })
  assert.deepEqual(r.listing, { field: '', rank: '', people: '' })
  assert.deepEqual(r.you, { field: '', rank: '' })
  assert.deepEqual(r.checklist, { note: null, people: [] })
  assert.equal(r.model, undefined)
  assert.deepEqual(Object.entries(r).find(([k]) => k === 'other')?.[1], { kept: true })
  assert.equal(decodeLives({ telling: null }).telling, null)
  assert.equal(decodeLives({ telling: { phase: 'tell' } }).telling, null)
  assert.equal(decodeLives({ pair: {} }).pair, undefined)
})

test('a round an older page ended reads as after its last press: told again while short, else closed', () => {
  const recall = (/** @type {number} */ learning) => ({
    augustus: { lines: [], learning, later: 0, next: null, entered: '2026-10-01' }
  })
  const done = { life: 'augustus', phase: 'done', text: 'x', marks: { a: true } }
  assert.deepEqual(decodeLives({ telling: done, recall: recall(2) }).telling, {
    life: 'augustus',
    phase: 'tell',
    text: '',
    marks: {}
  })
  assert.equal(decodeLives({ telling: done, recall: recall(3) }).telling, null)
  assert.equal(decodeLives({ telling: done }).telling, null)
})

test('the last mark and the lesson read again are read, or left out when odd', () => {
  const r = decodeLives({
    lastMark: { day: '2026-10-01', life: 'aug', telling: { life: 'aug', phase: 'judge' } },
    reread: { life: 'aug', lesson: 2, screen: 'x' }
  })
  assert.deepEqual(r.lastMark, {
    day: '2026-10-01',
    life: 'aug',
    telling: { life: 'aug', phase: 'judge', text: '', marks: {} },
    recall: null,
    closed: null
  })
  assert.deepEqual(r.reread, { life: 'aug', lesson: 2, screen: 0 })
  const odd = decodeLives({ lastMark: { day: 3 }, reread: {} })
  assert.deepEqual([odd.lastMark, odd.reread], [undefined, undefined])
})

test('a chance of yes is read as people write it', () => {
  assert.deepEqual(
    ['85', '85%', '.85', '0.85', '0,85'].map(t => readChance(t)),
    Array(5).fill({ ok: true, value: 85 })
  )
})
