// Hides: the Go unit's one next action, from "A Self-Study System" (Go, The steps and Running it; The
// build, Go, The one next action): a pure function of the record, the course and the day, which
// returns the first case that applies. 1 what is due, oldest date first; 2 the next position of
// a game to review; 3 the game; 4 mixed practice; 5 new material: a kind begun ahead, then a
// rules item while a rules part is open, else the open kind's first run; 6 nothing left. A kind
// opens once the first three rules parts and the kinds it uses are done. Gate 1 judges an answer,
// gate 3 retires a kind, and the start gate opens rated games. Tested in tests/go-next.test.mjs.
import { assert } from '../../../kernel/invariant.logic.js'
import { isDue, nextOf, writeLine } from '../../../kernel/days.logic.js'
import { isRulesItem, itemId } from './decode.logic.js'
import { oldestFirst } from './game.logic.js'
import { kindLine, withKind, withPart } from './record.logic.js'
import { untried } from './own.logic.js'
import { viewOf } from './diagram.logic.js'
import { parseCoord } from './rules.logic.js'

/** The four results, the only words an answer's second part may be. @type {readonly import('./solve.logic.js').Fate[]} */
export const RESULT_WORDS = ['lives', 'dies', 'ko', 'seki']

/**
 * Gate 1 for a problem: the first move one of the best first moves, and the result right.
 * @param {Pick<import('./decode.logic.js').Problem, 'answers' | 'result'>} problem
 * @param {string} move
 * @param {string} result
 */
export const isRight = (problem, move, result) =>
  problem.answers.includes(move) && problem.result === result

/**
 * A typed answer as gate 1 compares it: its words in capitals, points in one order.
 * @param {string} text
 */
const plain = text =>
  text
    .toUpperCase()
    .split(/[\s,;.]+/)
    .filter(Boolean)
    .sort()
    .join(' ')

/**
 * Gate 1 for a rules item: the typed answer is exactly the stored answer.
 * @param {string} typed
 * @param {string} answer
 */
export const sameAnswer = (typed, answer) => plain(typed) === plain(answer)

/**
 * What a rules item's typed answer lacks in form, as one sentence, or '' when it has the form
 * its question asks for: a number, yes or no, or points. An answer of another form is refused,
 * never judged.
 * @param {string} typed
 * @param {string} answer
 */
export function formLack(typed, answer) {
  const t = typed.trim()
  if (/^\d+$/.test(answer)) return /^\d+$/.test(t) ? '' : 'Type a number, in digits.'
  if (answer === 'yes' || answer === 'no') return /^(yes|no)$/i.test(t) ? '' : 'Type yes or no.'
  const words = t.split(/[\s,;.]+/).filter(Boolean)
  return /^none$/i.test(t) || (words.length && words.every(w => parseCoord(w)))
    ? ''
    : 'Type the points, each a letter and a number such as D4 with a space between them, or type none.'
}

/**
 * What a typed first move (read by decode.logic.js `readMove`) lacks on a problem's diagram, as
 * one sentence, or '' when it is an empty point of the diagram. Such a move is refused, never judged.
 * @param {Pick<import('./diagram.logic.js').StoredDiagram, 'view' | 'black' | 'white'>} diagram
 * @param {string} move
 */
export function pointLack(diagram, move) {
  const point = parseCoord(move)
  assert(point, `A move read from the field is a point: ${move}`)
  const [x, y] = point
  const [ox, oy, w, h] = viewOf(diagram.view)
  if (x < ox || x >= ox + w || y < oy || y >= oy + h) return 'That point is not on this diagram.'
  if (diagram.black.includes(move) || diagram.white.includes(move))
    return 'A stone stands on that point.'
  return ''
}

/**
 * The id of the kind that holds a problem.
 * @param {import('./own.logic.js').Course} course
 * @param {string} id
 */
export const kindOf = (course, id) => course.kinds.find(k => k.problems.some(p => p === id))?.id

/**
 * The rules part still open: the first with an item never answered.
 * @param {import('./own.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').GoRecord, 'recall'>} record
 */
export const openPart = (course, record) =>
  course.parts.find(p => p.items.some(id => !record.recall[id]))

/**
 * How many rules parts come before any kind: the board and turns, liberties and capture, and ko,
 * since every problem's answer may name ko.
 */
const PARTS_FIRST = 3

/**
 * @param {import('./own.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').GoRecord, 'recall'>} record
 */
const firstPartsDone = (course, record) =>
  course.parts.slice(0, PARTS_FIRST).every(p => p.items.every(id => record.recall[id]))

/**
 * Whether a kind may open: the first three rules parts done, and every kind its answers use
 * (`after`) retired. The course's order is the work list's suggested order, never a lock.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').Kind} kind
 */
export const kindReady = (course, record, kind) =>
  firstPartsDone(course, record) && kind.after.every(id => Boolean(kindLine(record, id)?.retired))

/**
 * True until the learner begins a kind: the first worked example read, whichever kind it is,
 * carries the lines that explain the four results and ko threats.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 */
export const noKindBegun = (course, record) =>
  !course.kinds.some(k => kindLine(record, k.id)?.opened)

/**
 * What a kind that may not open yet waits on, by name: the first three rules parts while any
 * is open, then each kind it uses that is not retired.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').Kind} kind
 * @returns {string[]}
 */
export const waitsOn = (course, record, kind) => [
  ...(firstPartsDone(course, record) ? [] : ['the first three rules parts']),
  ...kind.after.flatMap(id => {
    const before = course.kinds.find(k => k.id === id)
    return before && !kindLine(record, id)?.retired ? [titled(before.name)] : []
  })
]

/**
 * The kind in hand: the first, in course order, whose first run began and has not ended. A
 * kind is begun from the work list or from its row on the unit page.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 */
const inHand = (course, record) =>
  course.kinds.find(k => {
    const line = kindLine(record, k.id)
    return line?.opened && !line.retired
  })

/**
 * The open kind: the kind in hand; else, once no rules part is open, the first kind not
 * retired that may open. A reading never holds it.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 */
export function openKind(course, record) {
  const hand = inHand(course, record)
  if (hand) return hand
  if (openPart(course, record)) return undefined
  return course.kinds.find(k => !kindLine(record, k.id)?.retired && kindReady(course, record, k))
}

/**
 * The problems and rules items due today, the oldest date first.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'recall'>} record
 * @param {string} day
 */
export function dueToday(record, day) {
  return Object.entries(record.recall)
    .flatMap(([id, lines]) => {
      const next = nextOf([...lines])
      return next !== undefined && isDue([...lines], day) ? [{ id: itemId(id), next }] : []
    })
    .sort((a, b) => (a.next < b.next ? -1 : a.next > b.next ? 1 : a.id < b.id ? -1 : 1))
    .map(x => x.id)
}

/**
 * The days the start gate's conditions were met: the practice game counted right, and each rules
 * item's first right answer on a day after its first; null while any is not met.
 * @param {import('./own.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').GoRecord, 'recall' | 'start'>} record
 */
function gateDays(course, record) {
  if (!record.start.counted) return null
  const days = course.parts.flatMap(p =>
    p.items.map(id => record.recall[id]?.slice(1).find(l => l.right)?.date)
  )
  return days.every(d => d !== undefined) ? [record.start.counted, ...days] : null
}

/**
 * The start gate: every rules item right on a day after its first, and one practice game counted right.
 * @param {import('./own.logic.js').Course} course
 * @param {Pick<import('./decode.logic.js').GoRecord, 'recall' | 'start'>} record
 */
export const startGate = (course, record) => gateDays(course, record) !== null

/**
 * A whole number from a text, the same for the same text: the day's order of a draw.
 * @param {string} text
 */
function hash(text) {
  let h = 2166136261
  for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  return h >>> 0
}

/**
 * Mixed practice today: the retired kinds that hold a never-tried problem and have had none
 * today, in mixed practice or in a first run, in the day's shuffled order, the kind just answered
 * last; each with its first never-tried problem.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {string} day
 */
function mixedToday(course, record, day) {
  const had = new Set(record.tries.filter(t => t.date === day).map(t => kindOf(course, t.id)))
  const owed = course.kinds.flatMap(k => {
    const retired = kindLine(record, k.id)?.retired
    // A kind of one problem was read solved the day it retired: its problem is asked on a later day.
    const ready = retired && (k.problems.length > 1 || retired < day)
    const [first] = untried(k, record)
    return ready && !had.has(k.id) && first !== undefined ? [{ kind: k, first }] : []
  })
  owed.sort((a, b) => hash(`${day} ${a.kind.id}`) - hash(`${day} ${b.kind.id}`))
  const last = record.position.last
  return [...owed.filter(x => x.kind.id !== last), ...owed.filter(x => x.kind.id === last)]
}

/**
 * The oldest game whose pass is done and whose review list holds a position not yet answered.
 * @param {Pick<import('./decode.logic.js').GoRecord, 'games'>} record
 */
export function toReview(record) {
  for (const game of [...record.games].sort(oldestFirst)) {
    if (game.reviewed || !game.list) continue
    const index = game.list.findIndex(x => !x.typed)
    if (index >= 0) return { game: game.id, index }
  }
  return null
}

/**
 * The game step today: `{ practice }` when a game is to be posted, with `waiting` true when
 * today's challenge is posted and no one has ended a game; null when no game is owed today.
 * Nothing is owed before the server is set up, once a game was played today, once "Skip the
 * game today" was pressed today, or while the start gate is closed with a practice game
 * already counted right.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {string} day
 */
export function gameToday(course, record, day) {
  if (!record.server || record.games.some(g => g.date === day) || record.position.skipped === day)
    return null
  const waiting = record.position.posted === day
  if (!record.start.counted) return { practice: true, waiting }
  // rated games from the session after the one in which the gate opened: the last of its days
  const opened = gateDays(course, record)
    ?.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .at(-1)
  return opened && opened < day ? { practice: false, waiting } : null
}

/**
 * New material: a kind begun ahead of the rules parts left finishes its first run first, then
 * the next rules item never met, then the open kind's worked example and its first run.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @returns {import('./decode.logic.js').Item | null}
 */
function newMaterial(course, record) {
  const hand = inHand(course, record)
  const [handFirst] = hand ? untried(hand, record) : []
  if (hand && handFirst !== undefined) return { n: 5, step: 'new', id: handFirst, kind: hand.id }
  const rule = openPart(course, record)?.items.find(id => !record.recall[id])
  if (rule !== undefined) return { n: 5, step: 'rules', id: rule, kind: null }
  const open = openKind(course, record)
  if (!open) return null
  const [example] = open.problems
  if (!kindLine(record, open.id)?.opened && example !== undefined)
    return { n: 5, step: 'example', id: example, kind: open.id }
  const [left] = untried(open, record)
  return left !== undefined ? { n: 5, step: 'new', id: left, kind: open.id } : null
}

/**
 * The one next action, `n` the case's number in the paper's list: 'recall' (a problem or rules
 * item due), 'review' (a position of a game), 'game', 'mixed', 'rules' (a rules item never met),
 * 'example' (the open kind's first problem, shown solved), 'new' (its next problem), or
 * 'nothing'. What is open comes back first, so a session reopens where it stopped.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {string} day
 * @returns {import('./decode.logic.js').Item}
 */
export function nextAction(course, record, day) {
  if (record.position.open) return record.position.open
  const [due] = dueToday(record, day)
  if (due !== undefined)
    return {
      n: 1,
      step: 'recall',
      id: due,
      kind: isRulesItem(due) ? null : (kindOf(course, due) ?? null)
    }
  const review = record.engine && toReview(record)
  if (review) return { n: 2, step: 'review', ...review }
  const game = gameToday(course, record, day)
  // A posted challenge no one has accepted does not stop the list: the next item runs.
  if (game && !game.waiting) return { n: 3, step: 'game', practice: game.practice }
  const [mixed] = mixedToday(course, record, day)
  if (mixed) return { n: 4, step: 'mixed', id: mixed.first, kind: mixed.kind.id }
  return newMaterial(course, record) ?? { n: 6, step: 'nothing' }
}

/**
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {Partial<import('./decode.logic.js').Position>} change
 * @returns {import('./decode.logic.js').GoRecord}
 */
const withPosition = (record, change) => ({
  ...record,
  position: { ...record.position, ...change }
})

/**
 * The worked example read: the kind's first run began today. A kind with one problem retires
 * when its first run ends, and mixed practice then draws that problem once.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').KindId} kind
 * @param {string} day
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const exampleRead = (course, kind, day) => record => {
  const held = course.kinds.find(k => k.id === kind)
  assert(held, `A worked example read is of a kind the course holds: ${kind}`)
  const alone = held.problems.length === 1
  return withKind(record, kind, { opened: day, ...(alone ? { retired: day } : {}) })
}

/**
 * Gate 3 for the open kind's first run: the kind retires at a right answer, or when no untried
 * problem is left; and a rules part is done once each of its items has been answered.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').Asked} item
 * @param {boolean} right
 * @param {string} day
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
const gates = (course, item, right, day) => record => {
  if (item.step === 'new') {
    const kind = course.kinds.find(k => k.id === item.kind)
    assert(kind, `A first run's problem is of a kind the course holds: ${item.kind}`)
    return right || !untried(kind, record).length
      ? withKind(record, kind.id, { retired: day })
      : record
  }
  if (item.step === 'rules') {
    const part = course.parts.find(p => p.items.includes(item.id))
    assert(part, `A rules item answered is of a part the course holds: ${item.id}`)
    return part.items.every(id => record.recall[id])
      ? withPart(record, part.n, { done: day })
      : record
  }
  return record
}

/**
 * An answer judged by gate 1: its line on the dated list, written from the day's first answer;
 * a problem's first try; gate 3 for a first run, and a rules part done. The item stays open with
 * its verdict until `closeItem`.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').Asked} item
 * @param {boolean} right
 * @param {string} day
 * @param {string} [given]
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const answerItem =
  (course, item, right, day, given = '') =>
  record => {
    const { id } = item
    /** @type {import('./decode.logic.js').GoRecord} */
    let next = {
      ...record,
      recall: { ...record.recall, [id]: writeLine(record.recall[id]?.slice(), right, day) }
    }
    if (item.step === 'mixed' || item.step === 'new')
      next = {
        ...next,
        tries: [...next.tries, { id: item.id, date: day, right, mixed: item.step === 'mixed' }]
      }
    next = gates(course, item, right, day)(next)
    return withPosition(next, {
      open: { ...item, right, given },
      last: item.kind ?? record.position.last
    })
  }

/**
 * "Next" after a verdict, a review position or a reading: nothing is open.
 * @param {import('./decode.logic.js').GoRecord} record
 */
export const closeItem = record => withPosition(record, { open: null })

/**
 * The item open is kept, so a session reopens where it stopped.
 * @param {import('./decode.logic.js').Item} item
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const openItem = item => record => withPosition(record, { open: item })



/**
 * The rating and deviation read from the server today, shown with the game's rank range.
 * @param {string} day
 * @param {{ rating: number, deviation: number }} read
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const serverRead =
  (day, { rating, deviation }) =>
  record =>
    withPosition(record, { read: { day, rating, deviation } })

/**
 * "Skip the game today": no game today, and the list moves on.
 * @param {string} day
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const skipGame = day => record => withPosition(record, { skipped: day, posted: '' })

/**
 * The challenge is posted: the list goes on while no one has accepted.
 * @param {string} day
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const postGame = day => record => withPosition(record, { posted: day })

/**
 * Why nothing is left, for the screen that says so: `later`, the day the next dated item comes
 * back ('' when none has a date).
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {string} day
 */
export function restOf(record, day) {
  const later =
    Object.values(record.recall)
      .flatMap(lines => {
        const next = nextOf([...lines])
        return next !== undefined && next > day ? [next] : []
      })
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))[0] ?? ''
  return { later }
}

/**
 * A name as a row or the place line shows it, with a capital.
 * @param {string} name
 */
export const titled = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

/**
 * Where the learner stands, as one plain line, in the unit's own words: the open rules part, then
 * the open kind of problem, each by its place among its own and by its name.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 */
export function place(course, record) {
  const part = openPart(course, record)
  const parts = course.parts.length
  const kinds = course.kinds.length
  if (part) return `Rules part ${part.n} of ${parts}: ${titled(part.name)}.`
  const n = course.kinds.findIndex(k => !kindLine(record, k.id)?.retired)
  const kind = course.kinds[n]
  if (!kind) return `All ${parts} rules parts and ${kinds} kinds done.`
  return `Kind ${n + 1} of ${kinds}: ${titled(kind.name)}.`
}

/**
 * How many items with no date yet wait today: mixed practice's, the rules items never met, and the open kind's.
 * @param {import('./own.logic.js').Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {string} day
 */
export function freshToday(course, record, day) {
  const part = openPart(course, record)
  const open = openKind(course, record)
  return (
    mixedToday(course, record, day).length +
    (part ? part.items.filter(id => !record.recall[id]).length : 0) +
    (open ? untried(open, record).length : 0)
  )
}
