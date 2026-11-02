// The end level of Augustus against "A Self-Study System" (Biography, "The end level", and the End
// level check of the build): the evidence read part by part, the pools, the draw over many
// rounds, the key and the line, when the round is due, the paging of the Reading, and Judgment.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  FOOTINGS,
  GAPS_SECTIONS,
  NO_END,
  WITNESSES,
  chaptersCited,
  citedAlone,
  drawRound,
  endDone,
  evidenceParts,
  footingOf,
  gapsKey,
  judge,
  judgment,
  linesOf,
  listPages,
  markRound,
  passagePages,
  placed,
  readingChapters,
  readingKey,
  roundDone,
  roundDue,
  roundInHand,
  soleWitness,
  stem
} from './end.logic.js'
import { ORIGINAL, endPools } from './end-pools.logic.js'
import { LIVES } from './lives.logic.js'
import { decodeLives, endOf } from './decode.logic.js'

const [life] = LIVES
assert.ok(life)
const p = endPools()
const lessons = life.lessons.map(l => String(l.id))
/** @param {string} id */
const at = id => {
  const s = p.byId.get(id)
  assert.ok(s, `the course holds ${id}`)
  return s
}

test('the evidence is read part by part at the semicolons, a part that begins with a number carrying on the one before', () => {
  assert.deepEqual(
    evidenceParts('Cicero, Letters to Atticus 14.10.1; 14.10.3; Appian, Civil Wars 3.1'),
    ['Cicero, Letters to Atticus 14.10.1; 14.10.3', 'Appian, Civil Wars 3.1']
  )
  assert.deepEqual(evidenceParts(''), [])
})

test('a sole witness: every part names one of the eight, and no part another; Dio is Cassius Dio, Nic. Dam. and Nikolaos of Damascus are Nicolaus', () => {
  assert.equal(soleWitness('Cassius Dio 53.1; 54.2'), 'Cassius Dio')
  assert.equal(soleWitness('Dio 53.1'), 'Cassius Dio')
  assert.equal(soleWitness('Nic. Dam. 28; Nikolaos of Damascus 30'), 'Nicolaus')
  assert.equal(soleWitness('Cassius Dio 53.1; Appian, Civil Wars 2'), null)
  assert.equal(
    soleWitness('Cicero, Philippics 3; Fasti Praenestini'),
    null,
    'a part names none of the eight'
  )
  assert.equal(soleWitness(''), null)
})

test('footing: the first class that applies; Cicero and a source of no class put a sentence in none', () => {
  assert.equal(footingOf({ evidence: 'Cassius Dio 1', dispute: 'Scholars differ.' }), 'disputed')
  assert.equal(footingOf({ evidence: '', dispute: 'Scholars differ.' }), 'disputed')
  assert.equal(footingOf({ evidence: 'Res Gestae 34; Velleius 2.89', dispute: '' }), 'staked')
  assert.equal(footingOf({ evidence: 'Res Gestae 34; Cassius Dio 53.1', dispute: '' }), 'unstaked')
  assert.equal(footingOf({ evidence: 'Res Gestae 10; Fasti Praenestini', dispute: '' }), null)
  assert.equal(footingOf({ evidence: 'Cicero, Philippics 5.46', dispute: '' }), null)
  assert.equal(footingOf({ evidence: '', dispute: '' }), null)
})

test('the chapters of the Res Gestae a sentence cites, and the one it cites alone', () => {
  assert.deepEqual(chaptersCited('Augustus, Res Gestae 15-16'), [15, 16])
  assert.equal(citedAlone('Augustus, Res Gestae 15-16'), null)
  assert.equal(citedAlone('Res Gestae 34; the inscription on the shield'), 34)
  assert.equal(
    citedAlone(
      'Augustus, Res Gestae 10; Fasti Praenestini (CIL I, 2nd ed., p. 222) gives the date'
    ),
    10
  )
  assert.equal(citedAlone('Cassius Dio 55.10.1'), null)
})

test("the course's own counts the paper gives, where the course has not moved since: each witness named, and named alone before Own words", () => {
  const all = placed(life)
  /** @param {RegExp} re */
  const naming = re => all.filter(s => evidenceParts(s.evidence).some(x => re.test(x))).length
  assert.equal(naming(/\bDio\b/), 545)
  assert.equal(naming(/\bAppian\b/), 252)
  assert.equal(naming(/\bSuetonius\b/), 116)
  assert.equal(naming(/\bCicero\b/), 83)
  assert.equal(naming(/\bPlutarch\b/), 65)
  assert.equal(naming(/\bVelleius\b/), 51)
  assert.equal(naming(/\bRes Gestae\b/), 24)
  /** @type {Record<string, number>} */
  const alone = {}
  for (const s of all) {
    const w = soleWitness(s.evidence)
    if (w) alone[w] = (alone[w] ?? 0) + 1
  }
  assert.deepEqual(alone, {
    'Cassius Dio': 289,
    Appian: 114,
    Cicero: 64,
    Suetonius: 16,
    Plutarch: 8,
    Nicolaus: 45,
    Velleius: 11,
    'the Res Gestae': 14
  })
})

// The paper counts nine chapters printed whole, chapters 6 and 17 left out with gaps; the
// transcription as fetched prints chapter 17 whole in both languages (no question mark, no run of
// dots), so the Original job keeps it: ten chapters, 19 keys, and chapter 6's one sentence the tenth.
test('the Reading: eleven chapters cited alone, ten printed whole, 19 keys and the tenth from chapter 6, chapter 5 from lesson 36 so lesson 35 stays a Gaps decision', () => {
  assert.deepEqual(readingChapters(life), [1, 5, 6, 10, 15, 16, 17, 25, 27, 34, 35])
  assert.deepEqual(
    ORIGINAL.chapters.map(c => c.n),
    [1, 5, 10, 15, 16, 17, 25, 27, 34, 35]
  )
  const keys = Object.values(p.keys)
  assert.equal(keys.flat().length, 19)
  assert.deepEqual(
    keys.map(k => k.length),
    [3, 1, 1, 4, 1, 1, 1, 1, 5, 1]
  )
  assert.deepEqual(
    (p.keys[5] ?? []).map(id => at(id).lesson + 1),
    [36]
  )
  assert.deepEqual(
    p.tenth.map(id => at(id).lesson + 1),
    [42]
  )
  assert.ok(p.sections[3]?.includes(34), 'lesson 35 is drawn for Gaps')
})

test('Gaps draws from the lessons the paper lists, save a lesson that holds a sentence the Reading lists', () => {
  const reading = new Set([...Object.values(p.keys).flat(), ...p.tenth].map(id => at(id).lesson))
  GAPS_SECTIONS.forEach((list, k) =>
    assert.deepEqual(
      p.sections[k],
      list.map(n => n - 1).filter(i => !reading.has(i))
    )
  )
})

test('the pools: Witnesses at odd places and Footing at even, none from a Gaps lesson or the Reading, none whose own words give the answer, Footing no hedge', () => {
  const gaps = new Set(p.sections.flat())
  const reading = new Set([...Object.values(p.keys).flat(), ...p.tenth])
  for (const w of WITNESSES)
    for (const s of p.witnesses[w] ?? []) {
      assert.equal(s.place % 2, 1)
      assert.equal(soleWitness(s.evidence), w)
      assert.ok(!gaps.has(s.lesson) && !reading.has(String(s.id)))
      assert.doesNotMatch(
        s.text,
        /\b(Dio|Appian|Cicero|Suetonius|Plutarch|Nicolaus|Velleius|Res Gestae|Nikolaos|historian|according to)\b/
      )
    }
  for (const f of FOOTINGS)
    for (const s of p.footing[f]) {
      assert.equal(s.place % 2, 0)
      assert.equal(footingOf(s), f)
      assert.ok(!gaps.has(s.lesson) && !reading.has(String(s.id)))
      assert.doesNotMatch(
        s.text,
        /\b(probably|perhaps|possibly|apparently|scholars|Scholars|may have)\b/
      )
    }
  assert.ok(
    WITNESSES.every(w => (p.witnesses[w]?.length ?? 0) >= 1),
    'every witness can be drawn'
  )
  assert.ok(
    FOOTINGS.every(f => p.footing[f].length >= 3),
    'every class can give three'
  )
})

/**
 * Every entry of a draw answered by its key.
 * @param {import('./decode.logic.js').Draw} draw
 * @returns {import('./decode.logic.js').Answers}
 */
const keyed = draw => ({
  gaps: gapsKey(life, draw.gaps).map(String),
  witnesses: Object.fromEntries(draw.witnesses.map(id => [id, soleWitness(at(id).evidence) ?? ''])),
  footing: Object.fromEntries(draw.footing.map(id => [id, footingOf(at(id)) ?? ''])),
  reading: Object.fromEntries(draw.chapters.map(c => [c, readingKey(p, draw, c) ?? '']))
})

/**
 * One round's walls: the parts' sizes, no sentence in two parts, none from a Gaps lesson, one of
 * each witness, three of each class, a key for each chapter and one tenth, and the turn of Gaps.
 * @param {import('./decode.logic.js').Draw} draw
 * @param {number} m the lines the round has
 */
function walls(draw, m) {
  assert.deepEqual(
    [
      draw.gaps.length,
      draw.witnesses.length,
      draw.footing.length,
      draw.chapters.length,
      draw.list.length
    ],
    [7, 8, 9, 10, 11]
  )
  assert.equal(draw.latin.length, 5)
  const ids = [...draw.witnesses, ...draw.footing, ...draw.list]
  assert.equal(new Set(ids).size, ids.length, 'no sentence stands in two parts')
  for (const id of [...draw.witnesses, ...draw.footing])
    assert.ok(
      !p.sections.flat().includes(at(id).lesson),
      'no sentence of a Gaps lesson in another part'
    )
  assert.equal(new Set(draw.witnesses.map(id => soleWitness(at(id).evidence))).size, 8)
  for (const f of FOOTINGS)
    assert.equal(
      draw.footing.filter(id => footingOf(at(id)) === f).length,
      3,
      'three of each class'
    )
  for (const c of draw.chapters) assert.ok(readingKey(p, draw, c), `chapter ${c} has its key`)
  assert.equal(draw.list.filter(id => p.tenth.includes(id)).length, 1)
  const drawn = new Set(draw.gaps.map(i => i + 1))
  assert.equal(drawn.has(31), m % 4 === 0)
  assert.equal(drawn.has(35), m % 4 === 1)
  assert.ok(drawn.has(m % 2 === 0 ? 54 : 55) && !drawn.has(m % 2 === 0 ? 55 : 54))
  assert.ok(drawn.has(46))
}

/**
 * Nothing the round before showed, where the pool holds another.
 * @param {import('./decode.logic.js').Draw} draw
 * @param {import('./decode.logic.js').Draw} prev
 */
function anew(draw, prev) {
  for (const w of WITNESSES) {
    const now = draw.witnesses.find(id => soleWitness(at(id).evidence) === w)
    if ((p.witnesses[w]?.length ?? 0) > 1)
      assert.ok(now && !prev.witnesses.includes(now), `${w} draws anew`)
  }
  for (const id of draw.footing) assert.ok(!prev.footing.includes(id))
  for (const c of draw.chapters) {
    const k = readingKey(p, draw, c)
    if ((p.keys[c]?.length ?? 0) > 1)
      assert.ok(k && !prev.list.includes(k), `chapter ${c} takes a new key`)
  }
  const tenth = draw.list.find(id => p.tenth.includes(id))
  if (p.tenth.length > 1)
    assert.ok(
      tenth && !prev.list.includes(tenth),
      'the tenth is the one the round before did not list'
    )
}

/**
 * Every pool's items shown in rounds that differ by one at most.
 * @param {import('./decode.logic.js').End} end
 */
function leastShown(end) {
  for (const w of WITNESSES) {
    const counts = (p.witnesses[w] ?? []).map(s => end.tally.witnesses?.[String(s.id)] ?? 0)
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, `${w} least shown first`)
  }
  for (const f of FOOTINGS) {
    const counts = p.footing[f].map(s => end.tally.footing?.[String(s.id)] ?? 0)
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, `${f} least shown first`)
  }
}

test('200 rounds from the first: no sentence in two parts, the turn of Gaps, no item of the round before where its pool holds more, and the least-shown draw', () => {
  let end = NO_END
  /** @type {import('./decode.logic.js').Draw | null} */
  let before = null
  for (let r = 0; r < 200; r++) {
    const draw = drawRound(p, end, `round-${r}`)
    walls(draw, end.lines.length)
    if (before) anew(draw, before)
    leastShown(end)
    // Right on even rounds, wrong on odd, so both lines are written.
    const answers = keyed(draw)
    const mark = markRound(life, p, draw, r % 2 === 0 ? answers : { ...answers, gaps: [] })
    assert.equal(mark.right, r % 2 === 0)
    const day = `2027-${String(1 + Math.floor(r / 28)).padStart(2, '0')}-${String(1 + (r % 28)).padStart(2, '0')}`
    end = roundDone(end, draw, mark.right, day, lessons)
    before = draw
  }
  assert.equal(end.lines.length, 200)
})

test('the same seed draws the same round, and another seed another', () => {
  assert.deepEqual(drawRound(p, NO_END, 'a'), drawRound(p, NO_END, 'a'))
  assert.notDeepEqual(drawRound(p, NO_END, 'a'), drawRound(p, NO_END, 'b'))
})

test('the key: the gaps count years with no year 0, a blank or a number not whole is wrong, one wrong entry makes the round wrong', () => {
  const draw = drawRound(p, NO_END, 'k')
  const answers = keyed(draw)
  assert.equal(markRound(life, p, draw, answers).right, true)
  const key = gapsKey(life, draw.gaps)
  assert.equal(
    markRound(life, p, draw, { ...answers, gaps: [`${key[0]}.0`, ...answers.gaps.slice(1)] }).right,
    false
  )
  assert.equal(
    markRound(life, p, draw, { ...answers, gaps: ['', ...answers.gaps.slice(1)] }).right,
    false
  )
  const [w] = draw.witnesses
  assert.ok(w)
  const other = WITNESSES.find(x => x !== answers.witnesses[w]) ?? ''
  assert.equal(
    markRound(life, p, draw, { ...answers, witnesses: { ...answers.witnesses, [w]: other } }).right,
    false
  )
  const [c, d] = draw.chapters
  assert.ok(c !== undefined && d !== undefined)
  const swapped = {
    ...answers.reading,
    [c]: answers.reading[d] ?? '',
    [d]: answers.reading[c] ?? ''
  }
  const marked = markRound(life, p, draw, { ...answers, reading: swapped })
  assert.equal(marked.right, false)
  assert.deepEqual(marked.reading.filter(x => !x).length, 2)
  // 12 BC to AD 4 is 15 years.
  const twelve = life.lessons.findIndex(l => l.date.y === -12)
  const four = life.lessons.findIndex(l => l.date.y === 4)
  assert.deepEqual(gapsKey(life, [four, twelve]), [15])
})

test('a stem: the question without its date clause, the man for Octavian or Augustus', () => {
  assert.equal(
    stem('By the end of 26 BC, has Augustus dropped the plan to cross to Britain?'),
    'Has the man dropped the plan to cross to Britain?'
  )
  assert.equal(
    stem("By 11 April 44 BC, has Octavian taken Augustus's name?"),
    "Has the man taken the man's name?"
  )
  for (const list of p.sections)
    for (const i of list) {
      const s = stem(life.lessons[i]?.question?.text ?? '')
      assert.doesNotMatch(
        s,
        /\b(BC|AD|Octavian|Augustus)\b/,
        `lesson ${i + 1}'s stem gives no date or name`
      )
    }
})

test('the line: right at 92 percent, wrong the next day; shown keeps the draw; tally counts each part on its own', () => {
  const draw = drawRound(p, NO_END, 'l')
  const right = roundDone(NO_END, draw, true, '2027-01-01', lessons)
  assert.deepEqual(right.lines, [{ date: '2027-01-01', right: true, next: '2027-01-02' }])
  const again = roundDone(right, drawRound(p, right, 'm'), true, '2027-01-02', lessons)
  assert.ok((again.lines[1]?.next ?? '') > '2027-01-03', 'a second right line waits longer')
  const wrong = roundDone(right, drawRound(p, right, 'n'), false, '2027-01-02', lessons)
  assert.equal(wrong.lines[1]?.next, '2027-01-03')
  assert.equal(right.shown.length, 7 + 11 + 8 + 9)
  assert.equal(
    Object.values(right.tally.gaps ?? {}).reduce((a, b) => a + b, 0),
    7
  )
  assert.equal(right.tally.gaps?.[lessons[draw.gaps[0] ?? 0] ?? ''], 1)
  assert.equal(Object.keys(right.tally.witnesses ?? {}).length, 8)
  assert.equal(Object.keys(right.tally.footing ?? {}).length, 9)
})

test('due: from the day after the life closed, then by its next date; never twice on one day; nothing before it closes', () => {
  assert.equal(roundDue(NO_END, undefined, '2027-01-01'), false)
  assert.equal(roundDue(NO_END, '2027-01-01', '2027-01-01'), false)
  assert.equal(roundDue(NO_END, '2027-01-01', '2027-01-02'), true)
  const end = { ...NO_END, lines: [{ date: '2027-01-02', right: false, next: '2027-01-03' }] }
  assert.equal(roundDue(end, '2027-01-01', '2027-01-02'), false)
  assert.equal(roundDue(end, '2027-01-01', '2027-01-03'), true)
  const open = {
    ...end,
    round: {
      date: '2027-01-03',
      draw: drawRound(p, end, 'o'),
      answers: { gaps: [], witnesses: {}, footing: {}, reading: {} },
      part: 0,
      screen: 0
    }
  }
  assert.equal(
    roundInHand({ closed: '2027-01-01', end: open }, '2027-01-09'),
    true,
    'a round open stays in hand'
  )
})

test('Augustus done: closed, Judgment held, and the latest line right', () => {
  const lines = [{ date: '2027-01-02', right: true, next: '2027-01-03' }]
  assert.equal(endDone({ ...NO_END, judged: '2026-12-01', lines }, '2027-01-01'), true)
  assert.equal(endDone({ ...NO_END, judged: null, lines }, '2027-01-01'), false)
  assert.equal(
    endDone(
      {
        ...NO_END,
        judged: '2026-12-01',
        lines: [...lines, { date: '2027-01-03', right: false, next: '2027-01-04' }]
      },
      '2027-01-01'
    ),
    false
  )
  assert.equal(endDone({ ...NO_END, judged: '2026-12-01', lines }, undefined), false)
})

// The paper's 120 and 23, 85 and 80 were counted on a copy that split words at the line numbers;
// the transcription's own words give chapter 15 105 and 21 in Latin and 112 and 16 in Greek.
test('the Reading pages at the end of a sentence past 150 words or 17 lines: chapter 15 into 105 and 21 words in Latin and 112 and 16 in Greek; no other passage is paged', () => {
  /** @param {string} t */
  const words = t => t.split(' ').length
  const c15 = ORIGINAL.chapters.find(c => c.n === 15)
  assert.ok(c15)
  assert.deepEqual(passagePages(c15.latin).map(words), [105, 21])
  assert.deepEqual(passagePages(c15.greek, true).map(words), [112, 16])
  for (const c of ORIGINAL.chapters.filter(x => x.n !== 15)) {
    assert.equal(passagePages(c.latin).length, 1, `chapter ${c.n} in Latin`)
    assert.equal(passagePages(c.greek, true).length, 1, `chapter ${c.n} in Greek`)
  }
  for (const c of ORIGINAL.chapters) {
    assert.equal(passagePages(c.latin).join(' '), c.latin, 'no word changed')
    assert.equal(passagePages(c.greek, true).join(' '), c.greek, 'no word changed')
  }
  for (const c of ORIGINAL.chapters)
    for (const page of [...passagePages(c.latin), ...passagePages(c.greek, true)]) {
      assert.ok(words(page) <= 150 && linesOf(page) <= 17)
    }
})

test('the list of ten pages at the end of a sentence past 150 words, every sentence on one page', () => {
  const list = Array.from({ length: 10 }, (_, k) => ({
    id: `s${k}`,
    text: Array(19).fill('word').join(' ')
  }))
  const pages = listPages(list)
  assert.deepEqual(
    pages.map(x => x.length),
    [7, 3]
  )
  assert.deepEqual(
    pages.flat(),
    list.map(s => s.id)
  )
})

/**
 * A record whose first life is checked, with forecasts of chance `p` against answers.
 * @param {readonly [number, number][]} forecasts
 */
const withForecasts = forecasts =>
  decodeLives({
    level: {
      state: 'lowered',
      checks: [{ life: 'augustus', date: '2027-01-01', n: forecasts.length }]
    },
    items: forecasts.map(([chance, answer], k) => ({
      id: `f${k}`,
      life: 'augustus',
      kind: 'forecast',
      p: chance,
      answer,
      score: 2 * (chance / 100 - answer) ** 2
    }))
  })

test('Judgment: 30 or more scored, a mean under 0.478, the lean inside twice its error; it is set once', () => {
  // 40 forecasts, 70% on each: 28 yes, 12 no. Mean 2 × (0.7 × 0.09 + 0.3 × 0.49) = 0.42; lean 0.
  const good = withForecasts([...Array(28).fill([70, 1]), ...Array(12).fill([70, 0])])
  const j = judgment(good)
  assert.equal(j.n, 40)
  assert.ok(Math.abs(j.mean - 0.42) < 1e-9)
  assert.ok(Math.abs(j.lean) < 1e-9 && j.line > 0)
  assert.equal(j.holds, true)
  // Too few: 20.
  assert.equal(
    judgment(withForecasts([...Array(14).fill([70, 1]), ...Array(6).fill([70, 0])])).holds,
    false
  )
  // Always 50%: mean 0.50.
  assert.equal(
    judgment(withForecasts([...Array(20).fill([50, 1]), ...Array(20).fill([50, 0])])).holds,
    false
  )
  // A lean outside its line: 90% each, yes 60% of the time.
  assert.equal(
    judgment(withForecasts([...Array(24).fill([90, 1]), ...Array(16).fill([90, 0])])).holds,
    false
  )
  // Known decisions and lives with no check are not read.
  assert.equal(
    judgment(
      decodeLives({ items: [{ id: 'x', life: 'augustus', kind: 'forecast', p: 70, answer: 1 }] })
    ).n,
    0
  )
  const set = judge(NO_END, good, '2027-02-01')
  assert.equal(set.judged, '2027-02-01')
  assert.equal(judge(set, good, '2027-03-01').judged, '2027-02-01', 'set once')
  assert.equal(judge(NO_END, withForecasts([[50, 1]]), '2027-02-01').judged, null)
})

test('the end level as stored: what a hand edit left odd reads as empty', () => {
  const e = endOf({
    judged: 3,
    lines: [{ date: '2027-01-01', right: true, next: '2027-01-02' }, { date: 1 }],
    shown: ['a', 2],
    tally: { gaps: { x: 1, y: 'two' } },
    round: { date: '2027-01-01' }
  })
  assert.equal(e.judged, null)
  assert.equal(e.lines.length, 1)
  assert.deepEqual(e.shown, ['a'])
  assert.deepEqual(e.tally.gaps, { x: 1 })
  assert.equal(e.round, undefined)
})
