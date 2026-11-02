// Hides: what the app around a maths unit reads of it, as plain functions of the learner's
// records, for the parts every maths unit shares: the place line, the pages done, the unit page's
// rows and the dated list's first two rows. Each unit adds its own `dated` list. `r` holds every
// part of the record by its name; `recordOf` reads this unit's own part from it.
import { inCourse } from './pages.logic.js'
import { assert } from './invariant.logic.js'
import { FACT_KEYS, allFactsPassed, decodeFacts, drillToday, factNext } from './facts.logic.js'
import { lessonPlace, partToday, returns } from './practice.logic.js'

/**
 * @param {string | undefined} d
 * @returns {d is string}
 */
const isDate = d => Boolean(d)

/**
 * A maths unit's course as the shared rows read it: its entry, its own part of the record, its
 * topics, every bank problem's id and kind, a topic's state, the lost questions a record holds
 * (a marked question, which returns on lines of its own), and whether a proof or a
 * statement of a topic was worked on a day (a unit with proofs).
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @template {import('./practice.logic.js').PracticeTopic} T
 * @typedef {Readonly<{
 *   unit: import('./pages.logic.js').Unit,
 *   recordOf: (r: import('./pages.logic.js').UnitRecords) => R,
 *   topics: readonly T[],
 *   bank: readonly import('./practice.logic.js').Practised[],
 *   topicState: (topic: T, record: R) => { finished: boolean },
 *   lost?: (record: R) => readonly import('./practice.logic.js').Practised[],
 *   proofsToday?: (topic: T, record: R, today: string) => boolean
 * }>} MathsCourse
 */

/**
 * The unit page's rows: Start, the pages used every session, then the topics in course order.
 * @param {import('./pages.logic.js').Unit} unit
 * @param {Set<string>} done
 * @returns {import('./pages.logic.js').Rows}
 */
function rowsOf(unit, done) {
  const startPage = unit.pages.find(p => p.start)
  assert(startPage, `unit ${unit.slug} has a Start page`)
  /** @param {import('./pages.logic.js').Page} p */
  const row = p => ({
    key: p.slug,
    title: p.title,
    to: `/${unit.slug}/${p.slug}`,
    done: done.has(p.slug)
  })
  return {
    start: row(startPage),
    top: unit.pages.filter(p => p.repeats).map(row),
    items: unit.pages.filter(inCourse).map(row)
  }
}

/**
 * The dated list's two shared rows: the passed number-facts sheets, then mixed practice's returns,
 * each retired kind and each lost question with the day it is next due, counted from the course
 * file, so the unit page loads no bank. Mixed practice has no new count: a kind draws a fresh
 * problem when it is due. Until a part of the open topic is taken today (a kind's stage, the
 * try-first problem, a proof or a statement), the row is held: the way on is the open topic.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @template {import('./practice.logic.js').PracticeTopic} T
 * @param {MathsCourse<R, T>} course
 * @param {import('./pages.logic.js').UnitRecords} r
 * @param {string} today
 * @returns {import('./days.logic.js').DatedGroup[]}
 */
function datedOf({ unit, recordOf, topics, bank, topicState, lost, proofsToday }, r, today) {
  const math = recordOf(r)
  const facts = decodeFacts(r.facts ?? {})
  const base = `/${unit.slug}`
  const open = topics.find(t => !topicState(t, math).finished)
  const taken = open && (partToday(open, math, today) || proofsToday?.(open, math, today))
  return [
    {
      one: 'number-facts sheet',
      many: 'number-facts sheets',
      to: `${base}/number-facts`,
      dates: FACT_KEYS.map(op => factNext(facts[op])).filter(isDate),
      fresh: drillToday(facts, today)
    },
    {
      one: 'problem',
      many: 'problems',
      to: `${base}/mixed-practice`,
      dates: returns(bank, math, lost?.(math)).map(x => x.on),
      ...(open && !taken ? { hold: true } : {})
    }
  ]
}

/**
 * The shared plain functions of a maths unit: its address, a topic's title, the place line, the
 * pages done, the unit page's rows and the dated list's shared rows.
 * @template {import('./practice.logic.js').PracticeRecord} R
 * @template {import('./practice.logic.js').PracticeTopic} T
 * @param {MathsCourse<R, T>} course
 */
export function mathsUnit(course) {
  const { unit, recordOf, topics, topicState } = course
  /** @param {string} slug */
  const titleOf = slug => unit.pages.find(p => p.slug === slug)?.title ?? slug
  /**
   * The pages done, by slug: each finished topic, and number-facts once every sheet passes.
   * @param {import('./pages.logic.js').UnitRecords} r
   */
  function finished(r) {
    const record = recordOf(r)
    /** @type {Set<string>} */
    const done = new Set(topics.filter(t => topicState(t, record).finished).map(t => t.slug))
    if (allFactsPassed(decodeFacts(r.facts ?? {}))) done.add('number-facts')
    return done
  }
  return {
    slug: unit.slug,
    base: `/${unit.slug}`,
    titleOf,
    /** @param {import('./pages.logic.js').UnitRecords} r */
    place: r => {
      const record = recordOf(r)
      return lessonPlace(topics, t => topicState(t, record).finished, titleOf)
    },
    finished,
    /** @param {import('./pages.logic.js').UnitRecords} r */
    rows: r => rowsOf(unit, finished(r)),
    /**
     * @param {import('./pages.logic.js').UnitRecords} r
     * @param {string} today
     */
    dated: (r, today) => datedOf(course, r, today)
  }
}
