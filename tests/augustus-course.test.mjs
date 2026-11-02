// The built life of Augustus against "A Self-Study System" (Biography, "The material": the screen,
// the date line, the forecast point, the main account and the lowered level).
// The main account is Bringmann, Augustus, chapter I.1 to the end of chapter V. The copy prints no
// page numbers, so a page is its chapter, section and paragraph: "II.1 ¶7".
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COURSE } from '../src/units/augustus/core/course.gen.js'
import { UNIT } from '../src/units/augustus/core/entry.logic.js'
import { LIVES } from '../src/units/augustus/core/lives.logic.js'
import {
  ageAt,
  dateLine,
  forcedContested,
  pageName,
  unchecked
} from '../src/units/augustus/core/next.logic.js'

/** @typedef {(typeof LIVES)[number]['lessons'][number]} Lesson */
/** @typedef {Lesson['situation'][number]} Screen */
/** @typedef {{ y: number, m?: number | undefined, d?: number | undefined }} DateParts */

const life = LIVES.find(l => l.id === 'augustus')
assert.ok(life, 'the life of Augustus is built')
/** @param {Lesson} l */
const screensOf = l => [...l.situation, ...(l.outcome || [])]
const screens = life.lessons.flatMap(screensOf)
const sentences = screens.flatMap(s => s.sentences.map(x => ({ ...x, date: s.date })))
/** @param {string} t */
const words = t => t.split(/\s+/).filter(Boolean).length
// Order of two dates; a part one of them lacks (a month, a day) counts as equal.
/**
 * @param {DateParts} a
 * @param {DateParts} b
 */
const before = (a, b) =>
  a.y - b.y || (a.m && b.m ? a.m - b.m : 0) || (a.d && b.d && a.m === b.m ? a.d - b.d : 0)
const RENAMED = { y: -27, m: 1, d: 16 }

test('the life has lessons, and the last one has no question', () => {
  assert.ok(life.lessons.length > 10)
  assert.equal(life.lessons.at(-1)?.question, null)
  for (const l of life.lessons.slice(0, -1)) assert.ok(l.question, `${l.id} has a question`)
  assert.equal(
    new Set(life.lessons.map(l => l.id)).size,
    life.lessons.length,
    'lesson ids are unique'
  )
})

test('a screen holds at most 150 words and has a date for its date line', () => {
  for (const s of screens) {
    assert.ok(s.sentences.length > 0)
    const first = s.sentences[0]
    assert.ok(first)
    assert.ok(words(s.sentences.map(x => x.text).join(' ')) <= 150, first.text)
    assert.ok(dateLine(s.date, life.born), `date line for: ${first.text}`)
  }
})

// The situation and the outcome each run in date order. The outcome may open on what was hidden
// from him before the decision, so its first screen can be dated before the situation's last.
test('the situation and the outcome each run in date order', () => {
  for (const l of life.lessons)
    for (const run of [l.situation, l.outcome || []])
      for (let i = 1; i < run.length; i++) {
        const prev = run[i - 1]
        const cur = run[i]
        assert.ok(prev && cur)
        assert.ok(before(prev.date, cur.date) <= 0, `${l.id}: ${cur.sentences[0]?.text}`)
      }
})

test('lessons run in date order, each question dated by or after its decision', () => {
  const asked = life.lessons.filter(l => l.question)
  for (let i = 1; i < asked.length; i++) {
    const prev = asked[i - 1]
    const cur = asked[i]
    assert.ok(prev && cur)
    assert.ok(before(prev.date, cur.date) <= 0, cur.id)
  }
  for (const l of asked) {
    assert.ok(l.question)
    assert.ok(before(l.date, l.question.by) <= 0, `${l.id}: by ${JSON.stringify(l.question.by)}`)
  }
})

test('every sentence points to its paragraph in Bringmann, chapter I.1 to the end of chapter V', () => {
  for (const s of sentences) {
    assert.match(s.page, /^(I\.[12]|II\.[1-5]|III(\.[1-4])?|IV\.[12]|V) ¶\d{1,2}$/, s.text)
    assert.match(pageName(s.page), /^Bringmann (I|II|III|IV|V)(\.\d)?, paragraph \d+$/)
  }
})

test('no other book is the main account', () => {
  for (const s of sentences) assert.doesNotMatch(s.page, /Galinsky|CAH|LACTOR|Cooley/, s.text)
  assert.match(life.accounts.main.title, /^Klaus Bringmann, Augustus/)
})

test('Augustus is not named before 16 January 27 BC, Octavian not after 27 BC, and Octavius and the young Caesar not from his birth year', () => {
  for (const s of sentences) {
    // Words quoted as evidence, and his father's name, are not the lesson naming him.
    const own = s.text
      .replace(/"[^"]*"|“[^”]*”/g, '')
      .replace(/\b(father|Gaius|Gnaeus|last) Octavius\b/g, '')
    if (before(s.date, RENAMED) < 0)
      assert.doesNotMatch(own, /(?<!name |title |called )\bAugustus\b/, s.text)
    if (s.date.y > -27) assert.doesNotMatch(own, /\bOctavian\b/, s.text)
    // Before his birth the names are his forebears' and the young Julius Caesar's.
    if (s.date.y >= -63) assert.doesNotMatch(own, /\bOctavius\b|young Caesar/, s.text)
  }
})

// "Two days later" and "as soon as" join one event to the next and point nowhere.
const AHEAD =
  /\b(?<!(?:days?|months?|years?|weeks?|time|while|little) )later\b|\b(?<!as )soon\b|\b(would go on to|eventually|fateful|future|first of many|little did he know)\b/i
test('no word points ahead, in any lesson text or question', () => {
  for (const s of sentences)
    assert.doesNotMatch(s.text.replace(/"[^"]*"|“[^”]*”/g, ''), AHEAD, s.text)
  for (const l of life.lessons)
    if (l.question) assert.doesNotMatch(l.question.text, AHEAD, l.question.text)
})

// A year after "in" stands with BC or AD in its own clause; a number followed by a word ("88
// chapters", "15 senators") is a count.
test('years carry BC or AD', () => {
  for (const s of sentences)
    for (const m of s.text.matchAll(/\b(?:in|the year) (\d{1,4})\b(?=\s*(?:[.,;:)]|$))/g)) {
      const clause = s.text.slice(m.index).split(/[.;]/)[0] ?? ''
      assert.match(clause, /\b(BC|AD)\b/, `bare year "${m[0]}": ${s.text}`)
    }
})

test('each question is answered yes or no by a date, and the coin toss leaves about half the answers no', () => {
  const qs = life.lessons.flatMap(l => (l.question ? [l.question] : []))
  for (const q of qs) {
    assert.ok(q.answer === 0 || q.answer === 1)
    assert.match(q.text, /\?$/)
    assert.ok(q.by?.y, q.text)
    assert.ok(['taken', 'not taken'].includes(q.toss), q.text)
    assert.ok(q.option, q.text)
  }
  const yes = qs.filter(q => q.answer === 1).length / qs.length
  assert.ok(yes > 0.3 && yes < 0.7, `share of yes ${yes}`)
})

test('no second account is to hand, so every claim is unchecked', () => {
  assert.equal(life.accounts.second, null)
  for (const s of sentences) {
    assert.equal(s.passage, null, s.text)
    assert.ok(unchecked(s), s.text)
    assert.ok(!forcedContested(s), s.text)
  }
})

test('the lowered level shows no letters and no era screens', () => {
  for (const l of life.lessons) {
    assert.deepEqual(l.letters, [], l.id)
    assert.deepEqual(l.era, [], l.id)
  }
})

test('the course names every life in reading order, with its number of lessons', () => {
  assert.deepEqual(
    COURSE.lives,
    LIVES.map(l => ({ id: l.id, name: l.name, lessons: l.lessons.length }))
  )
})

test('the course gives each lesson its date and question, and sections by age band', () => {
  assert.deepEqual(COURSE.born, life.born)
  assert.deepEqual(
    COURSE.lessons,
    life.lessons.map(l => {
      const head = l.situation[0] ?? l.outcome?.[0]
      assert.ok(head)
      return { date: l.date, from: head.date.y, question: l.question?.text ?? null }
    })
  )
  // Each section is a run of lessons whose lower date-line age falls in its ten-year band.
  let next = 1
  for (const s of COURSE.sections) {
    assert.equal(s.first, next, s.title)
    next = s.last + 1
    // The first band holds ages 0 to 19.
    assert.match(s.title, s.first === 1 ? /^Birth to age 19$/ : /^Age \d+ to \d+$/)
    const [lo, hi] = s.first === 1 ? [0, 19] : (s.title.match(/\d+/g) ?? []).map(Number)
    assert.ok(lo !== undefined && hi !== undefined, s.title)
    for (let n = s.first; n <= s.last; n++) {
      /** @type {Lesson | undefined} */
      const lesson = life.lessons[n - 1]
      assert.ok(lesson)
      const age = parseInt(ageAt(lesson.date, life.born))
      assert.ok(age >= lo && age <= hi, `${s.title}: lesson ${n} is ${age}`)
    }
  }
  assert.equal(next - 1, life.lessons.length)
  // The last band ends at the age he died at, 75 (19 August AD 14), not at the end of its ten years.
  assert.equal(COURSE.sections.at(-1)?.title, 'Age 70 to 75')
})

test("the unit page's last section ends on the life's last lesson", () => {
  assert.equal(UNIT.sections?.at(-1)?.last, COURSE.lives[0]?.lessons)
})
