// Hides: the checks of Biography in "A Self-Study System", and the one next action of its work
// list. Pure functions over the decoded record (decode.logic.js), tested in
// tests/augustus-next.test.mjs. Days are ISO 'YYYY-MM-DD' study days (the day turns at 04:00,
// kernel/days.logic.js). A probability is stored as a whole number from 0 to 100. Years are
// historical: 44 BC is -44, AD 14 is 14.
import { RETENTION, addDays, count } from '../../../kernel/days.logic.js'
import { intervalDays } from '../../../kernel/fsrs.logic.js'
import { assert } from '../../../kernel/invariant.logic.js'
import { lifeId } from './decode.logic.js'
import { roundInHand } from './end.logic.js'

/**
 * The course as the work list and the unit page read it (course.gen.js).
 * @typedef {Readonly<{ lives: readonly Readonly<{ id: string, name: string, lessons: number, setbacks?: boolean }>[],
 *   born?: import('./decode.logic.js').HistDate,
 *   lessons: readonly Readonly<{ date?: import('./decode.logic.js').HistDate, from?: number, question?: string | null }>[] }>} Course
 */
/**
 * The work list's one next action.
 * @typedef {Readonly<{ kind: 'recall' | 'end' | 'stuck' | 'level' | 'next-life', life: import('./decode.logic.js').LifeId }
 *   | { kind: 'lesson', life: import('./decode.logic.js').LifeId, lesson: number }
 *   | { kind: 'pair', shape: import('./decode.logic.js').ItemId }
 *   | { kind: 'none' }>} Action
 */

// Forecasts

/**
 * A forecast's score, 2 × (p − o)²: 0 best, 2 worst. `p` 0–100, `o` 1 or 0.
 * @param {number} p
 * @param {number} o
 */
export const score = (p, o) => Math.round(2 * (p / 100 - o) ** 2 * 10000) / 10000

/**
 * A score or lean as shown: two decimals, a lean signed, a minus sign true.
 * @param {number} x
 * @param {boolean} [signed]
 */
export const shown = (x, signed = false) =>
  `${signed && x > 0 ? '+' : ''}${x.toFixed(2)}`.replace('-', '−')

// Dates

/**
 * A year as written: "44 BC", "AD 14".
 * @param {number} y
 */
export const yearName = y => (y < 0 ? `${-y} BC` : `AD ${y}`)

// There is no year 0: 1 BC is followed by AD 1.
/** @param {number} y */
const astro = y => (y < 0 ? y + 1 : y)

/**
 * The person's age at a date, from `born` { y, m, d }. A date with no month, or in the birth
 * month with no day, falls on both sides of the birthday, so it gives both ages of that year,
 * "18–19". Without a birth year it gives none.
 * @param {import('./decode.logic.js').HistDate | null | undefined} date
 * @param {import('./decode.logic.js').HistDate | null | undefined} born
 */
export function ageAt(date, born) {
  if (!born?.y || !date?.y) return ''
  const years = astro(date.y) - astro(born.y)
  if (!date.m || !born.m || (date.m === born.m && !date.d))
    return years > 0 ? `${years - 1}–${years}` : ''
  const before = date.m !== born.m ? date.m < born.m : (date.d ?? 0) < (born.d ?? 1)
  const age = before ? years - 1 : years
  return age < 0 ? '' : String(age)
}

/**
 * The date line: the year and the person's age. "44 BC · age 18".
 * @param {import('./decode.logic.js').HistDate | null | undefined} date
 * @param {import('./decode.logic.js').HistDate | null | undefined} born
 */
export function dateLine(date, born) {
  if (!date?.y) return ''
  const age = ageAt(date, born)
  return age ? `${yearName(date.y)} · age ${age}` : yearName(date.y)
}

// Recall and gate 1

/**
 * A life's recall state with nothing told. `learning` counts right tellings on the first day, to
 * 3 (a telling with misses counts once they are told right again); `later` counts right days
 * after that, set back to 0 by a wrong telling.
 * @returns {import('./decode.logic.js').Recall}
 */
export const noRecall = () => ({ lines: [], learning: 0, later: 0, next: null })

/**
 * Still being learned: it has entered recall and has not yet been told right three times. That
 * runs as one item on the day it enters, and a session cut off before the third telling picks it
 * up first next time.
 * @param {import('./decode.logic.js').Recall | null | undefined} r
 * @returns {r is import('./decode.logic.js').Recall & { entered: string }}
 */
export const learningNow = r => Boolean(r?.entered && r.learning < 3)

/**
 * The date a life's recall waits on: the day it entered while it is still being learned (the
 * three tellings of that day), else its next date. The Review page counts it from this.
 * @param {import('./decode.logic.js').Recall | null | undefined} r
 */
export const recallDate = r => (learningNow(r) ? r.entered : (r?.next ?? undefined))

/**
 * The life enters recall the day its first lesson is done.
 * @param {import('./decode.logic.js').Recall | null | undefined} r
 * @param {string} today
 * @returns {import('./decode.logic.js').Recall}
 */
export const enterRecall = (r, today) => (r?.entered ? r : { ...noRecall(), entered: today })

/**
 * One whole telling judged: `right` and `wrong` count its items.
 * First day: a right telling adds one to `learning`; a wrong one leaves it, and the round ends
 * once its missed items are told right again, which the screen then counts as a right telling
 * (`retold`). The third right one writes the day's line, and the next date is the next day.
 * Later: one line a day. All right: the next date is the day FSRS-6 puts the chance of recall
 * at 92 percent, from the lines so far, and `later` goes up. Any wrong: the next date is the
 * next day and `later` goes to 0.
 * @param {import('./decode.logic.js').Recall} r
 * @param {{ right: number, wrong: number }} counts
 * @param {string} today
 * @returns {import('./decode.logic.js').Recall}
 */
export function tell(r, { right, wrong }, today) {
  const ok = wrong === 0
  if (learningNow(r)) {
    const learning = ok ? r.learning + 1 : r.learning
    if (learning < 3) return { ...r, learning }
    return {
      ...r,
      learning,
      lines: [...r.lines, { date: today, right, wrong }],
      next: addDays(today, 1)
    }
  }
  if (r.lines.at(-1)?.date === today) return r
  const history = [...r.lines.map(l => ({ date: l.date, ok: l.wrong === 0 })), { date: today, ok }]
  return {
    ...r,
    lines: [...r.lines, { date: today, right, wrong }],
    next: addDays(today, ok ? intervalDays(history, RETENTION.exact) : 1),
    later: ok ? r.later + 1 : 0
  }
}

/**
 * The end of a first-day round: every missed item is now told right, so the round counts as a
 * right telling. On a later day the telling already wrote its line, and nothing changes.
 * @param {import('./decode.logic.js').Recall} r
 * @param {number} items
 * @param {string} today
 * @returns {import('./decode.logic.js').Recall}
 */
export const retold = (r, items, today) =>
  learningNow(r) ? tell(r, { right: items, wrong: 0 }, today) : r

/**
 * New items (a lesson that adds to the life, or a rule that names it): back the next day, unless
 * sooner. The life's last lesson also starts the count of later right days again, so the life
 * closes only once it has been told right on three days after its last lesson.
 * @param {import('./decode.logic.js').Recall} r
 * @param {string} today
 * @param {boolean} [last] the lesson done is the life's last
 * @returns {import('./decode.logic.js').Recall}
 */
export function addsItems(r, today, last = false) {
  if (!r.entered) return r
  const next = addDays(today, 1)
  return { ...r, next: r.next && r.next < next ? r.next : next, ...(last ? { later: 0 } : {}) }
}

// Claims and the level

/**
 * A claim on a sentence with no second account's passage is left unchecked: with no witness to
 * hand there is nothing to check it against, so it carries no verdict and no word.
 * @param {import('./decode.logic.js').Sentence} s
 */
export const unchecked = s => !s.passage

/**
 * A claim with a witness is contested with no choice: its notes record a dispute, or the only
 * witness is the person himself or someone who served him.
 * @param {import('./decode.logic.js').Sentence} s
 */
export const forcedContested = s => !!s.passage && (!!s.dispute || !!s.passage.served)

/**
 * A record claim's verdict: one saved contested before any witness was to hand is unchecked.
 * @param {import('./decode.logic.js').Claim} i
 */
export const claimVerdict = i => (i.verdict === 'contested' && !i.witness ? 'unchecked' : i.verdict)

/**
 * One line of the level check for a life's scored forecasts: [{ p, answer, score }].
 * @param {import('./decode.logic.js').LifeId} life
 * @param {readonly { p: number, answer: number, score: number }[]} forecasts
 * @param {string} date
 * @returns {import('./decode.logic.js').LevelLine}
 */
export function levelLine(life, forecasts, date) {
  const n = forecasts.length
  const mean = n ? forecasts.reduce((s, f) => s + f.score, 0) / n : 0
  const variance = n > 1 ? forecasts.reduce((s, f) => s + (f.score - mean) ** 2, 0) / (n - 1) : 0
  const meanP = n ? forecasts.reduce((s, f) => s + f.p / 100, 0) / n : 0
  const shareYes = n ? forecasts.filter(f => f.answer === 1).length / n : 0
  return { life, date, n, mean, variance, meanP, shareYes }
}

/**
 * A share from 0 to 1 as a whole percentage: "33%".
 * @param {number} x
 */
const percent = x => `${Math.round(x * 100)}%`

/**
 * The level check's five lines (Biography, "Running it", "Level check"), in plain words: the mean
 * score, the lean as two lines (the average chance of yes, and how often yes came true), the score of
 * always saying 50%, and the counts of forecasts scored and marked "I already know". `now` is the
 * life's level line, `last` the last life's with two or more forecasts (or null), `items` the record's.
 * @param {readonly import('./decode.logic.js').Item[]} items
 * @param {import('./decode.logic.js').LifeId} life
 * @param {import('./decode.logic.js').LevelLine} now
 * @param {import('./decode.logic.js').LevelLine | null} last
 */
export function levelLines(items, life, now, last) {
  const known = items.filter(i => i.life === life && i.kind === 'forecast' && i.known).length
  // With nothing scored, a mean of 0.00 would read as a perfect score.
  if (!now.n)
    return [`You scored no forecast in this life and marked ${known} as "I already know".`]
  return [
    `Your average score ${shown(now.mean)}.${last ? ` Last life ${shown(last.mean)}.` : ''}`,
    `Your average chance of yes ${percent(now.meanP)}.${last ? ` Last life ${percent(last.meanP)}.` : ''}`,
    `Yes came true ${percent(now.shareYes)} of the time.${last ? ` Last life ${percent(last.shareYes)}.` : ''}`,
    `Always saying 50% scores ${shown(score(50, 1))}.`,
    `You scored ${count(now.n, 'forecast', 'forecasts')} and marked ${known} as "I already know".`
  ]
}

/**
 * The level gate. `checks` are the earlier lines, oldest first; `now` this life's line.
 * Compared with the last earlier line with two or more forecasts: raised when lower by more
 * than twice the error of the difference, lowered when higher by more, otherwise unchanged.
 * The first life, or fewer than two forecasts, leaves it unchanged.
 * @param {import('./decode.logic.js').Level} state
 * @param {readonly import('./decode.logic.js').LevelLine[]} checks
 * @param {import('./decode.logic.js').LevelLine} now
 * @returns {{ state: import('./decode.logic.js').Level, why: 'raised' | 'lowered' | 'noise' | 'few' | 'first', last: import('./decode.logic.js').LevelLine | null }}
 */
export function levelGate(state, checks, now) {
  const last = [...checks].reverse().find(c => c.n >= 2 && c.life !== now.life)
  if (!last) return { state, why: 'first', last: null }
  if (now.n < 2) return { state, why: 'few', last }
  const e = Math.sqrt(now.variance / now.n + last.variance / last.n)
  if (now.mean < last.mean - 2 * e) return { state: 'raised', why: 'raised', last }
  if (now.mean > last.mean + 2 * e) return { state: 'lowered', why: 'lowered', last }
  return { state, why: 'noise', last }
}

/**
 * The level check, recorded the moment a life reaches it, with no press: this life's line joins
 * the checks, and the gate sets the level. A life already checked is returned as it is.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {import('./decode.logic.js').LifeId} life
 * @param {string} day
 * @returns {import('./decode.logic.js').LivesRecord}
 */
export function recordLevel(record, life, day) {
  const checks = record.level?.checks ?? []
  if (checks.some(c => c.life === life)) return record
  const forecasts = record.items.flatMap(i =>
    i.kind === 'forecast' && i.life === life && !i.known
      ? [{ p: i.p ?? 0, answer: i.answer, score: i.score ?? 0 }]
      : []
  )
  const now = levelLine(life, forecasts, day)
  const state = levelGate(record.level?.state ?? 'lowered', checks, now).state
  return { ...record, level: { state, checks: [...checks, now] } }
}

/**
 * What the level check shows for a life already checked: its five lines, why the level moved or
 * did not, and whether it is the first check of all (which adds the line on what a score is).
 * Null for a life not yet checked.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {import('./decode.logic.js').LifeId} life
 */
export function levelResult(record, life) {
  const checks = record.level?.checks ?? []
  const at = checks.findIndex(c => c.life === life)
  const now = checks[at]
  if (!now) return null
  const earlier = checks.slice(0, at)
  const gate = levelGate(record.level?.state ?? 'lowered', earlier, now)
  return {
    lines: levelLines(record.items, life, now, gate.last),
    why: gate.why,
    first: earlier.length === 0
  }
}

// The life

/**
 * What recall asks back: every forecast (known ones too), claim, setback, and rule; never "no
 * rule" or a note.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {import('./decode.logic.js').LifeId} life
 * @returns {readonly (import('./decode.logic.js').Forecast | import('./decode.logic.js').Claim | import('./decode.logic.js').Setback | import('./decode.logic.js').Rule)[]}
 */
export const recallItems = (record, life) =>
  record.items.filter(
    /** @returns {i is import('./decode.logic.js').Forecast | import('./decode.logic.js').Claim | import('./decode.logic.js').Setback | import('./decode.logic.js').Rule} */
    i =>
      i.kind === 'rule'
        ? i.text !== 'no rule' && (i.lives ?? [i.life]).includes(life)
        : i.kind !== 'shape' && i.life === life
  )

/**
 * Closed: every lesson done, every chosen claim marked, right three times on its
 * first day of recall, and right on three days after its last lesson since the last wrong telling.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {import('./decode.logic.js').LifeId} life
 * @param {number} lessons
 */
export function lifeClosed(record, life, lessons) {
  const last = record.lives[life]?.lastLesson
  const done = last !== undefined && last >= lessons - 1
  const marked = record.items.every(
    i => i.kind !== 'claim' || i.life !== life || i.verdict !== undefined
  )
  const r = record.recall[life]
  return Boolean(done && marked && r !== undefined && r.learning >= 3 && r.later >= 3)
}

/**
 * Where the learner stands, as one plain line: the next lesson's place in the life. No decision is
 * named ahead of its lesson, which must be read with no hindsight.
 * @param {{ id: string, lessons: number }} life
 * @param {import('./decode.logic.js').LivesRecord} record
 */
export function place(life, record) {
  const last = record.lives[life.id]?.lastLesson ?? -1
  if (last >= life.lessons - 1) return `All ${life.lessons} lessons done.`
  return `Lesson ${last + 2} of ${life.lessons}.`
}

/**
 * The course's first life, the one the unit teaches.
 * @param {Pick<Course, 'lives'>} course
 */
export function firstLife(course) {
  const life = course.lives[0]
  assert(life, 'the course holds a life')
  return life
}

/**
 * The years a lesson covers, from the year its first screen opens on (`from`) to its decision:
 * "63 to 47 BC", "12 BC to AD 4". A lesson within one year keeps the date line, "45 BC · age 17".
 * @param {Course['lessons'][number]} lesson
 * @param {import('./decode.logic.js').HistDate | undefined} born
 */
function span(lesson, born) {
  const { from, date } = lesson
  if (from === undefined || !date?.y || from === date.y) return dateLine(date, born)
  if (from < 0 && date.y > 0) return `${yearName(from)} to ${yearName(date.y)}`
  return from < 0 ? `${-from} to ${yearName(date.y)}` : `${yearName(from)} to ${date.y}`
}

/**
 * The unit page's lesson rows, in reading order, each named by the years it covers: a decision
 * named on a row would be read before its lesson, and later questions give earlier outcomes away.
 * A lesson done opens to be read again; the open one opens the life's page; a lesson ahead opens
 * nothing. `page` is the life page's URL.
 * @param {Course} course
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {string} page
 */
export function lessonRows(course, record, page) {
  const last = record.lives[firstLife(course).id]?.lastLesson ?? -1
  return course.lessons.map((l, i) => ({
    key: `lesson-${i + 1}`,
    title: span(l, course.born),
    to: i <= last ? `${page}?lesson=${i + 1}` : i === last + 1 ? page : undefined,
    done: i <= last
  }))
}

/**
 * The unit page's last row: what follows the last lesson on the life's page, the recall, the level
 * check and the next life. It opens once every lesson is done; until then the open lesson's row
 * is the way in. `closed` marks the life closed.
 * @param {Course} course
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {string} page
 * @param {boolean} [closed]
 */
export function endRow(course, record, page, closed = false) {
  const life = firstLife(course)
  const last = record.lives[life.id]?.lastLesson ?? -1
  return {
    key: 'after',
    title: 'After the last lesson',
    to: last >= life.lessons - 1 ? page : undefined,
    done: closed
  }
}

/**
 * The notes the gate-3 list offers: this life's first, then earlier lives', each newest first.
 * The record appends notes as they are written, so the newest is the last.
 * @param {readonly import('./decode.logic.js').Item[]} items
 * @param {import('./decode.logic.js').LifeId} life
 * @returns {readonly import('./decode.logic.js').Shape[]}
 */
export function notesFor(items, life) {
  const notes = items.flatMap(i => (i.kind === 'shape' ? [i] : [])).reverse()
  return [...notes.filter(n => n.life === life), ...notes.filter(n => n.life !== life)]
}

/**
 * Pair due: a note shared by two or more lives, one of which it has not yet been compared for.
 * @param {import('./decode.logic.js').Shape} shape
 */
export const pairDue = shape =>
  shape.lives.length >= 2 && shape.lives.some(l => !shape.compared.includes(l))

// The one next action

/**
 * The first item of the work list that applies, in this order: a telling under way; recall of a
 * life still being learned today, and of every life due, oldest date first; the end level's round
 * when it is open or due; a pair due; a stuck
 * life; the next lesson after the last one done; once the last lesson is done, the level check,
 * then the next-life checklist. `course` lists the lives in reading order, each with its number
 * of lessons.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {Pick<Course, 'lives'>} course
 * @param {string} today
 * @returns {Action}
 */
export function lifeAction(record, course, today) {
  const lives = course.lives.map(l => ({ ...l, id: lifeId(l.id) }))
  // A telling under way (told, being checked, or its wrong items told again) finishes first.
  const telling = lives.find(l => l.id === record.telling?.life)
  if (telling) return { kind: 'recall', life: telling.id }
  const learning = lives.find(l => learningNow(record.recall[l.id]))
  if (learning) return { kind: 'recall', life: learning.id }
  const [soonest] = lives
    .flatMap(l => {
      const next = record.recall[l.id]?.next
      return next && next <= today ? [{ id: l.id, next }] : []
    })
    .sort((a, b) => (a.next < b.next ? -1 : a.next > b.next ? 1 : 0))
  if (soonest) return { kind: 'recall', life: soonest.id }
  // After the lives, the round of the end level, which is the first life's.
  const first = lives[0]
  if (first && roundInHand(record.lives[first.id], today)) return { kind: 'end', life: first.id }
  const shape = record.items.find(i => i.kind === 'shape' && pairDue(i))
  if (shape) return { kind: 'pair', shape: shape.id }
  const life = lives.find(l => l.id === inHand(record, course))
  if (!life) return { kind: 'none' }
  const state = record.lives[life.id] ?? {}
  // A life closed as stuck goes on to the next-life checklist.
  if (state.stuck) return { kind: 'next-life', life: life.id }
  if (state.setbacks === false || life.setbacks === false) return { kind: 'stuck', life: life.id }
  if ((state.lastLesson ?? -1) < life.lessons - 1)
    // The lesson after the last one done: a position that says otherwise (a stale record) never skips or invents one.
    return { kind: 'lesson', life: life.id, lesson: (state.lastLesson ?? -1) + 1 }
  if (!record.level?.checks.some(c => c.life === life.id)) return { kind: 'level', life: life.id }
  return { kind: 'next-life', life: life.id }
}

/**
 * The life in hand: the one with the latest `opened` and no `closed` or `stuck`; with none
 * opened, the life the position names, else the course's first.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {Pick<Course, 'lives'>} course
 */
export function inHand(record, course) {
  const [latest] = course.lives
    .flatMap(l => {
      const s = record.lives[l.id]
      return s?.opened && !s.stuck && !s.closed ? [{ id: l.id, opened: s.opened }] : []
    })
    .sort((a, b) => (a.opened < b.opened ? 1 : a.opened > b.opened ? -1 : 0))
  return latest?.id ?? record.position?.life ?? course.lives[0]?.id
}

/**
 * The life the next-life checklist opens: the first of the course after the life in hand that
 * has not been opened, once Eruko has built it; null while none is built.
 * @param {import('./decode.logic.js').LivesRecord} record
 * @param {Pick<Course, 'lives'>} course
 * @param {string} from the life in hand
 */
export function nextBuilt(record, course, from) {
  const at = course.lives.findIndex(l => l.id === from)
  return course.lives.slice(at + 1).find(l => !record.lives[l.id]?.opened && l.lessons > 0) ?? null
}

// The record's other rules

/**
 * Every day studied: a day joins `sessions` on its first write to the record.
 * @param {readonly string[]} sessions
 * @param {string} day
 */
export const studied = (sessions, day) => (sessions.includes(day) ? sessions : [...sessions, day])

/**
 * Where a sentence stands in the main account, in words. The copy on disk has no printed page
 * numbers, so a page is its chapter, section and paragraph: "II.1 ¶7" is chapter II, section 1,
 * paragraph 7; "V ¶3" is chapter V, which has no sections.
 * @param {string | null | undefined} page
 */
export function pageName(page) {
  const m = /^([IVX]+)(?:\.(\d+))? ¶(\d+)$/.exec(page ?? '')
  if (!m) return page ?? ''
  return `Bringmann ${m[2] ? `${m[1]}.${m[2]}` : m[1]}, paragraph ${m[3]}`
}

/** The paper's width, in CSS pixels, from which three columns stand side by side. */
const THREE_COLUMNS_FROM_PX = 1600

/**
 * The lives on the pair screen: this one, then the other lives the note carries, the most recent
 * first. Two at the lowered level, three at the raised.
 * @param {import('./decode.logic.js').Shape} shape
 * @param {import('./decode.logic.js').LifeId} life
 * @param {import('./decode.logic.js').Level} state
 */
export function pairLives(shape, life, state) {
  const others = shape.lives.filter(l => l !== life).reverse()
  return [life, ...others].slice(0, state === 'raised' ? 3 : 2)
}

/**
 * How many of the pair's lives stand side by side: a third column shows beside the others only
 * from 1,600 CSS pixels wide, and below that pages in place of the second.
 * @param {number} lives
 * @param {number} widthPx
 */
export const sideBySide = (lives, widthPx) =>
  lives === 3 && widthPx < THREE_COLUMNS_FROM_PX ? 2 : lives

/**
 * Gate 4 on a "no": at the lowered level, one more life the note carries and not yet on the
 * screen; with none, or at the raised level, "no rule" at once. Returns a life id or 'no rule'.
 * @param {import('./decode.logic.js').Shape} shape
 * @param {readonly string[]} onScreen
 * @param {import('./decode.logic.js').Level} state
 */
export function gateFour(shape, onScreen, state) {
  if (state === 'raised') return 'no rule'
  const more = [...shape.lives].reverse().find(l => !onScreen.includes(l))
  return more ?? 'no rule'
}

/**
 * A rule saved: every life it compares comes back the next day, unless sooner.
 * @param {Readonly<Record<string, import('./decode.logic.js').Recall>>} recall
 * @param {readonly string[]} lives
 * @param {string} today
 */
export const ruleSaved = (recall, lives, today) =>
  Object.fromEntries(
    Object.entries(recall).map(([id, r]) => [id, lives.includes(id) ? addsItems(r, today) : r])
  )

/**
 * The claims a rule may rest on: the checked claims of the lives it compares.
 * @param {readonly import('./decode.logic.js').Item[]} items
 * @param {readonly string[]} lives
 * @returns {readonly import('./decode.logic.js').Claim[]}
 */
export const restable = (items, lives) =>
  items.flatMap(i => (i.kind === 'claim' && lives.includes(i.life) && i.verdict ? [i] : []))

/**
 * Close a life as stuck: it is marked, and the next-life checklist runs.
 * @param {Readonly<Record<string, import('./decode.logic.js').LifeState>>} lives
 * @param {import('./decode.logic.js').LifeId} life
 * @param {string} today
 */
export const closeStuck = (lives, life, today) => ({
  ...lives,
  [life]: { ...lives[life], stuck: today }
})
