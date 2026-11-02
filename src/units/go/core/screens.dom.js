// Hides: the pieces every Go screen shares and the one way a screen reads the Go record (it
// writes it only by sending an event, session.dom.js): a problem as it is asked, its solution, a field with its label, the line saying why an
// answer was refused or what is being waited on, the buttons that answer, and the engine's pass in
// words. Each keeps no state of its own, so each is a function, and its nodes sit among their
// siblings.
import { GO_PART } from './entry.logic.js'
import { persistedStore } from '../../../record/store.js'
import { dayName } from '../../../kernel/days.logic.js'
import { ownOf, readMove } from './decode.logic.js'
import { pointLack } from './next.logic.js'
import { courseOf, withWritten } from './own.logic.js'
import { REASONS } from './reasons.logic.js'
import { recordOf } from './record.logic.js'
import { passAt } from './review.logic.js'
import { SITE } from './server.dom.js'
import { unit } from './unit.logic.js'
import { linkTo } from '../../../parts/links.dom.js'
import { actions, actionsAs, choice, verdict } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { board } from './board.dom.js'

/** A side as the screens name it, by its letter or its colour. @type {Readonly<Record<string, string>>} */
export const SIDE = { B: 'Black', W: 'White', black: 'Black', white: 'White' }
const CLAUSE = Object.fromEntries(REASONS)
export const HOME = `/${unit.slug}`
export const POINT_WHY = 'Type the move as a letter and a number, such as D4. There is no column I.'
export const READING_SERVER = 'Eruko is reading the server.'

/** The Go record's store: one copy in memory for every screen. */
export const goStore = () => persistedStore(GO_PART.key)

/**
 * The record as the unit's functions read it (decode.logic.js), with the course it runs on.
 * @returns {{ record: import('./decode.logic.js').GoRecord, course: import('./own.logic.js').Course }}
 */
export function goView() {
  const raw = goStore().get()
  const course = courseOf(ownOf(raw))
  const record = recordOf(raw, course)
  return { course: withWritten(course, record), record }
}

/**
 * The task: the side, then the group by where it stands, never the aim.
 * @param {import('./decode.logic.js').Problem} p
 */
const taskOf = p =>
  `${SIDE[p.toMove]} plays first. What happens to the ${p.group.colour} group ${p.group.where ?? `at ${p.group.at}`}?`

/**
 * A problem as it is asked: the task, the ko field, and the diagram, which may take
 * a click (`pick`: board.dom.js's `onPoint` and `chosen`).
 * @param {import('./decode.logic.js').Problem} problem
 * @param {{ onPoint?: (at: string) => void, chosen?: readonly string[] }} [pick]
 */
export const asked = (problem, pick = {}) => [
  h('p', null, taskOf(problem)),
  h('p', { class: 'lrn-ss-note' }, problem.ko),
  board({ diagram: problem, plays: `${SIDE[problem.toMove]} plays first.`, ...pick })
]

/**
 * The points a typed answer names, each on the diagram: what the board rings.
 * @param {string} text
 * @param {import('./diagram.logic.js').StoredDiagram} diagram
 */
export const named = (text, diagram) =>
  text
    .toUpperCase()
    .split(/[\s,;.]+/)
    .filter(w => readMove(w) && !pointLack({ ...diagram, black: [], white: [] }, w))

/**
 * A point clicked, added to a typed list of points or taken out of it.
 * @param {string} text
 * @param {string} at
 */
export const toggled = (text, at) => {
  const words = text
    .toUpperCase()
    .split(/[\s,;.]+/)
    .filter(w => w && w !== 'NONE')
  return (words.includes(at) ? words.filter(w => w !== at) : [...words, at]).join(' ')
}

/**
 * One move of a line with its reason: "2. White C1. Takes the last space."; a pass: "3. White passes. Every move would do worse."
 * @param {import('./decode.logic.js').SolutionMove} m
 * @param {number} n
 */
const moveLine = (m, n) => `${n}. ${SIDE[m.side]} ${m.at ?? 'passes'}. ${CLAUSE[m.reason]}.`

// The four results and the ko field, each explained once, where it first appears: under the
// first worked example the learner reads, whichever kind it is.
export const RESULTS = [
  'Lives: with best play, the other side cannot capture the group.',
  'Dies: with best play, the other side captures the group.',
  'Ko: best play ends in a ko that the stated ko threats do not settle.',
  "Seki: neither side can capture the other side's group, and both groups stay on the board.",
  'Ko threat: a move elsewhere that the other side must answer, or lose more than the ko is worth.',
  'A side uses each of its threats once. The side with a threat left when the other has none wins the ko.'
]

/**
 * A variation of a line: where it parts from the line, its first move and reason, then its moves.
 * @param {import('./decode.logic.js').SolutionVariation} v
 */
function variation(v) {
  const [first, ...rest] = v.moves
  if (!first) return null
  return h(
    'p',
    { key: `${v.at}${first.at}` },
    'Variation: at move ',
    v.at,
    ', ',
    SIDE[first.side],
    ' ',
    first.at ?? 'passes',
    '.',
    ' ',
    CLAUSE[first.reason],
    '.',
    ' ',
    rest.map((m, i) => moveLine(m, v.at + 1 + i)).join(' ')
  )
}

/**
 * One best first move's line of best play as pages, one move to a numbered line with its
 * reason, and its variations.
 * @param {import('./decode.logic.js').Problem} problem
 * @param {import('./decode.logic.js').SolutionLine} line
 */
const lineOf = (problem, line) =>
  h(
    'div',
    { key: line.first },
    h('go-line-pages', {
      key: `${problem.id} ${line.first}`,
      '.position': problem,
      '.moves': line.moves,
      '.lines': line.moves.map((m, i) => moveLine(m, i + 1))
    }),
    line.variations.map(variation)
  )

/**
 * The solution, in its fixed order: every best first move with its line, then the first moves,
 * the result, the ko counts at which the result changes, and the kind's name last.
 * @param {import('./decode.logic.js').Problem} problem
 * @param {import('./own.logic.js').Course} course
 */
export function solution(problem, course) {
  const kind = course.kinds.find(k => k.id === problem.kind)
  const { lines, changes } = problem.solution
  return [
    lines.map(line => lineOf(problem, line)),
    h(
      'p',
      { key: 'first' },
      'First ',
      problem.answers.length > 1 ? 'moves' : 'move',
      ': ',
      problem.answers.join(' or '),
      '. Result: ',
      problem.result,
      '.',
      ' ',
      changes
        .map(
          c =>
            `With ko threats elsewhere Black ${c.black || 'none'}, White ${c.white || 'none'}: ${c.result}. `
        )
        .join(''),
      'Kind: ',
      // every problem the bank or the learner's games hold is of a kind of the course
      kind?.name ?? '',
      '.'
    )
  ]
}

/**
 * A field with its label above it.
 * @param {{ id: string, label: string, value: string, onChange: (v: string) => void, why: string, whyId?: string, capitals?: boolean }} p
 */
export const field = ({ id, label, value, onChange, why, whyId = 'go-why', capitals = false }) =>
  h(
    'div',
    null,
    h('label', { class: 'label', for: id }, label),
    h('input', {
      id,
      class: 'field',
      '.value': value,
      oninput: (/** @type {Event} */ e) => {
        if (e.target instanceof HTMLInputElement) onChange(e.target.value)
      },
      autocomplete: 'off',
      autocapitalize: capitals ? 'characters' : 'none',
      spellcheck: 'false',
      'aria-describedby': why ? whyId : undefined
    })
  )

/**
 * Why an answer was refused, said at once; nothing when there is no reason.
 * @param {import('../../../parts/view.dom.js').Child} children
 * @param {string} [id]
 */
export const why = (children, id = 'go-why') =>
  children ? h('p', { class: 'why', id, role: 'alert' }, children) : null

/**
 * What is being waited on, in words, for as long as the wait lasts.
 * @param {import('../../../parts/view.dom.js').Child} children
 */
export const busy = children =>
  children ? h('p', { class: 'lrn-ss-note', role: 'status' }, children) : null

/** The server's name, a link to it. */
export const ogs = () => h('a', { href: SITE, target: '_blank', rel: 'noreferrer' }, 'OGS')

/**
 * What to do when stuck, said once: on the item met before any answer is on the record.
 * @param {import('./decode.logic.js').GoRecord} record
 */
export const stuck = record =>
  Object.keys(record.recall).length
    ? null
    : h(
        'p',
        { class: 'lrn-ss-note' },
        'Keep trying until you see no further move. Then press "No further move" and read the answer. Pressing "No further move" counts as wrong.'
      )

/**
 * The one way on: Next.
 * @param {() => void} onPress
 */
export const next = onPress => actionsAs('next', choice({ primary: true, label: 'Next', onPress }))

/**
 * The verdict of a problem or a rules item, with what was typed.
 * @param {import('./decode.logic.js').Judged} item
 */
export const judged = item =>
  verdict(
    item.right,
    item.given ? `You typed ${item.given}.` : 'No further move counts as wrong.',
    'judged'
  )

/**
 * The two ways to answer a problem or a rules item.
 * @param {() => void} onNone
 */
export const answering = onNone =>
  actions(
    choice({ label: 'No further move', onPress: onNone }),
    choice({ primary: true, type: 'submit', label: 'Check' })
  )

/**
 * The course's problems by id, with the ones built from the learner's own games.
 * @param {Readonly<Record<string, import('./decode.logic.js').Problem>>} problems
 * @param {import('./decode.logic.js').GoRecord} record
 * @returns {Readonly<Record<string, import('./decode.logic.js').Problem>>}
 */
export const bankOf = (problems, record) => ({
  ...problems,
  ...Object.fromEntries(record.own.problems.map(p => [p.id, p]))
})

/** The one line a study screen says while the engine does not answer, with the way to the Start page. */
const engineWaits = () => [
  'Game review is waiting for the engine. Start it from the ',
  h('a', { href: linkTo(`${HOME}/start`) }, 'Start page'),
  '.'
]

/**
 * Where the engine stands, in one plain line, while a game waits on it.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {boolean} stalled
 */
export function passLine(record, stalled) {
  const now = record.engine ? passAt(record) : undefined
  if (!now) return null
  return h(
    'p',
    { class: 'lrn-ss-note', key: 'pass' },
    stalled
      ? engineWaits()
      : `The engine is reading your game of ${dayName(now.game.date)}. The review opens when the engine is done.`
  )
}
