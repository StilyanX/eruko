// Hides: problems from the learner's own games, as "A Self-Study System" Go sets out (Problems past the
// found material; The build, Go, How problems are built and checked): when no never-tried
// problem is left in the course, each position of a reviewed game's review list is posed from
// its stones alone (pose.js) and enters only when the exact search solves it. The problems are
// kept in the record, under `own`, with the kinds they make: a problem joins the kind whose
// problems give its sequence of reasons, and else makes a kind of its own, "own fight 1" on.
// Pure functions, tested in tests/go-own.test.mjs.
import { KINDS, PARTS, SECTIONS, kindId, positionKey, problemId } from './decode.logic.js'
import { boardBefore, colours, diagramOf, oldestFirst } from './game.logic.js'
import { kindLine } from './record.logic.js'

/** @typedef {Readonly<{ parts: readonly import('./decode.logic.js').Part[], kinds: readonly import('./decode.logic.js').Kind[] }>} Course The course a record runs on: the rules parts, then the kinds in course order */

/**
 * The course a record runs on: the parts, the bank's kinds, each with the problems from the
 * learner's games that read as it, then the kinds those games made.
 * @param {import('./decode.logic.js').Own} own
 * @returns {Course}
 */
export function courseOf(own) {
  /** @param {import('./decode.logic.js').KindId} id */
  const mine = id => own.problems.filter(p => p.kind === id).map(p => p.id)
  return {
    parts: PARTS,
    kinds: [
      ...KINDS.map(k =>
        mine(k.id).length ? { ...k, problems: [...k.problems, ...mine(k.id)] } : k
      ),
      ...own.kinds
    ]
  }
}

/**
 * The course with the problems Eruko wrote, as "A Self-Study System" sets out (Plateaus and the
 * end): once every found problem of the bank is tried or shown, each kind's written problems
 * join it, after its own; before that the course is as given.
 * @param {Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 * @returns {Course}
 */
export function withWritten(course, record) {
  if (!courseUsed({ parts: PARTS, kinds: KINDS }, record)) return course
  return {
    ...course,
    kinds: course.kinds.map(k =>
      k.written?.length ? { ...k, problems: [...k.problems, ...k.written] } : k
    )
  }
}

/**
 * The unit page's sections for a record: the bank's, and the kinds from the learner's games after them.
 * @param {import('./decode.logic.js').Own} own
 * @returns {readonly import('../../../kernel/pages.logic.js').Section[]}
 */
export function sectionsOf(own) {
  const n = own.kinds.length
  const first = PARTS.length + KINDS.length + 1
  return n
    ? [...SECTIONS, { title: 'Kinds from your own games', first, last: first + n - 1 }]
    : SECTIONS
}

/** @param {readonly string[]} seq */
const once = seq => seq.filter((r, i) => r !== seq[i - 1])
/**
 * @param {readonly string[]} small
 * @param {readonly string[]} big
 */
const within = (small, big) => {
  let i = 0
  for (const r of big) if (r === small[i]) i++
  return i === small.length
}

/**
 * A kind's problems never tried: no first try yet, and not its first, which is shown solved. A
 * kind of one problem keeps that problem to ask: it is read solved when the kind opens, and
 * drawn once in mixed practice after.
 * @param {import('./decode.logic.js').Kind} kind
 * @param {Pick<import('./decode.logic.js').GoRecord, 'tries'>} record
 */
export const untried = (kind, record) => {
  const tried = new Set(record.tries.map(t => t.id))
  return (kind.problems.length === 1 ? kind.problems : kind.problems.slice(1)).filter(
    id => !tried.has(id)
  )
}

/**
 * Whether no never-tried problem is left in the course: every kind retired, and each of its problems tried or shown.
 * @param {Course} course
 * @param {import('./decode.logic.js').GoRecord} record
 */
export function courseUsed(course, record) {
  return (
    course.parts.every(p => p.items.every(id => record.recall[id])) &&
    course.kinds.every(k => kindLine(record, k.id)?.retired && !untried(k, record).length)
  )
}

/**
 * The next position to try: `{ key, game, move, position }`, the first position of a reviewed
 * game's list not tried yet, the oldest game first; undefined when none is left. `position` is
 * the board before the learner's move, by its stones, and the side to move.
 * @param {import('./decode.logic.js').GoRecord} record
 */
export function nextPosition(record) {
  const seen = new Set(record.own.seen)
  for (const game of [...record.games].sort(oldestFirst)) {
    if (!game.reviewed || game.size !== 19) continue
    for (const entry of game.list ?? []) {
      const key = positionKey(game.id, entry.move)
      if (seen.has(key)) continue
      const board = boardBefore(game, entry.move - 1)
      if (!board) continue
      const { black, white } = diagramOf(board)
      /** @type {import('./pose.logic.js').Position} */
      const position = { black, white, side: colours(game)[entry.move - 1] === 'black' ? 'B' : 'W' }
      return { key, game: game.id, move: entry.move, position }
    }
  }
  return undefined
}

/** The learner's own kinds are numbered from here up, past every kind the bank holds. */
const OWN_KINDS = 10000

/** How many times a position may be started before it is passed over as too long to solve. */
export const OWN_TRIES = 3

/**
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').PositionKey} key
 */
export const attemptsOf = (record, key) => record.own.attempts?.[key] ?? 0

/**
 * @param {import('./decode.logic.js').PositionKey} key
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const withAttempt = key => record => {
  const { own } = record
  return {
    ...record,
    own: { ...own, attempts: { ...own.attempts, [key]: attemptsOf(record, key) + 1 } }
  }
}

/**
 * The kind a problem from the learner's games joins: the kind of their own whose reasons it
 * gives, else the one bank kind that alone gives them; undefined when it makes a kind of its own.
 * @param {readonly import('./decode.logic.js').Kind[]} all
 * @param {string} text the problem's sequence of reasons, joined by |
 */
function homeOf(all, text) {
  // a sequence two kinds of the bank give names neither: the problem then makes a kind of its own
  const givers = all.filter(k => k.seqs.includes(text))
  return givers.find(k => k.source === 'own') ?? (givers.length === 1 ? givers[0] : undefined)
}

/**
 * A kind of the learner's own, made by its first problem: named by its place among them (a name
 * of its reasons gives its answer away), after the kinds whose sequence of reasons occurs in
 * order within its own.
 * @param {readonly import('./decode.logic.js').Kind[]} all
 * @param {import('./decode.logic.js').Own} own
 * @param {import('./decode.logic.js').KindId} id
 * @param {readonly string[]} seq
 * @param {import('./decode.logic.js').ProblemId} problem
 * @returns {import('./decode.logic.js').Kind}
 */
const ownKind = (all, own, id, seq, problem) => ({
  id,
  name: `own fight ${own.kinds.length + 1}`,
  source: 'own',
  problems: [problem],
  seqs: [seq.join('|')],
  after: all
    .filter(k => k.seqs.some(q => q.split('|').length < seq.length && within(q.split('|'), seq)))
    .map(k => k.id)
})

/**
 * The record with a position tried: marked as seen, and, when the search posed and solved it
 * (`problem`, from pose.js), the problem added to the kind its reasons make.
 * @param {import('./decode.logic.js').PositionKey} key
 * @param {import('./decode.logic.js').Problem | null | undefined} problem
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const withOwn = (key, problem) => record => {
  const { own } = record
  const seen = [...own.seen, key]
  const line = problem?.solution.lines[0]
  if (!problem || !line) return { ...record, own: { ...own, seen } }
  const seq = once(line.moves.map(m => m.reason))
  const all = courseOf(own).kinds
  const home = homeOf(all, seq.join('|'))
  // Ids of their own, never reused: the bank may grow kinds and problems after these are kept,
  // and each position is tried once, so its key names its problem.
  const id = home?.id ?? kindId(Math.max(OWN_KINDS, ...own.kinds.map(k => k.id)) + 1)
  const made = { ...problem, kind: id, source: 'aether', id: problemId(`o${key}`) }
  const kinds = own.kinds.some(k => k.id === id)
    ? own.kinds.map(k => (k.id === id ? { ...k, problems: [...k.problems, made.id] } : k))
    : home
      ? own.kinds
      : [...own.kinds, ownKind(all, own, id, seq, made.id)]
  return { ...record, own: { ...own, problems: [...own.problems, made], kinds, seen } }
}
