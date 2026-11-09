// Hides: problems from the learner's own games and the problems Eruko writes, as "A Self-Study
// System" Go sets out (The build, Go, Own games and written problems): when no never-tried
// problem is left in the course, the next build is the first position of the oldest reviewed
// game's review list not yet posed; when no game has one, it is one change to a found problem the
// learner got wrong. Each is posed from its stones alone (pose.logic.js) and enters only when the
// exact search solves it. The problems are kept in the record, under `own`, with the kinds they
// make: a problem joins the kind whose problems give its sequence of reasons, and else makes a
// kind of its own, "own fight 1" on. Pure functions, tested in own.test.js.
import { KINDS, PARTS, SECTIONS, changeKey, kindId, positionKey, problemId } from './decode.logic.js'
import { boardOf } from './diagram.logic.js'
import { boardBefore, colours, diagramOf, oldestFirst } from './game.logic.js'
import { kindLine } from './record.logic.js'
import { byPoint, groupAt, parseCoord } from './rules.logic.js'

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
 * @param {import('./decode.logic.js').KindId} [seed] a written problem's seed's kind
 */
function homeOf(all, text, seed) {
  // a sequence two kinds of the bank give names neither, unless one is a written problem's
  // seed's: the problem then makes a kind of its own
  const givers = all.filter(k => k.seqs.includes(text))
  return (
    givers.find(k => k.source === 'own') ??
    givers.find(k => k.id === seed) ??
    (givers.length === 1 ? givers[0] : undefined)
  )
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
 * The record with a position or a change tried: marked as seen, and, when the search posed and
 * solved it (`problem`, from pose.logic.js), the problem added to the kind its reasons make. A
 * written problem comes with its seed's kind as its `kind`, which it joins when that kind is one
 * of two that give its reasons.
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
  const home = homeOf(all, seq.join('|'), problem.kind)
  // Ids of their own, never reused: the bank may grow kinds and problems after these are kept,
  // and each position or change is tried once, so its key names its problem.
  const id = home?.id ?? kindId(Math.max(OWN_KINDS, ...own.kinds.map(k => k.id)) + 1)
  const made = { ...problem, kind: id, source: 'aether', id: problemId(`o${key}`) }
  const kinds = own.kinds.some(k => k.id === id)
    ? own.kinds.map(k => (k.id === id ? { ...k, problems: [...k.problems, made.id] } : k))
    : home
      ? own.kinds
      : [...own.kinds, ownKind(all, own, id, seq, made.id)]
  return { ...record, own: { ...own, problems: [...own.problems, made], kinds, seen } }
}

/** @typedef {'black' | 'white' | 'off'} Act A change to a seed: a black or a white stone added, or a stone taken away */

/**
 * A seed's changes in the paper's order: a black stone on each empty point of its region, then a
 * white one, then each stone not of its group taken away; the points of each step column by
 * column from A, each column from row 1 up.
 * @param {import('./decode.logic.js').Problem} seed
 * @returns {{ at: string, act: Act }[]}
 */
export function changesOf(seed) {
  const { board, name } = boardOf({ view: [0, 0, seed.size, seed.size], black: seed.black, white: seed.white })
  const p = parseCoord(seed.group.at)
  const group = p ? new Set(groupAt(board, p[1] * seed.size + p[0]).stones.map(name)) : new Set()
  const empty = seed.region.filter(at => !seed.black.includes(at) && !seed.white.includes(at)).sort(byPoint)
  const off = [...seed.black, ...seed.white].filter(at => !group.has(at)).sort(byPoint)
  /** @type {(act: Act) => (at: string) => { at: string, act: Act }} */
  const as = act => at => ({ at, act })
  return [...empty.map(as('black')), ...empty.map(as('white')), ...off.map(as('off'))]
}

/**
 * The next written problem to pose: `{ key, seed, position }`, the first change not yet posed of
 * the first seed that has one. The seeds are the problems from the 420 files and the classical
 * collections whose first try was wrong, in the order of those tries; undefined when none is left.
 * `position` is the changed seed's stones and the seed's side to move, posed from its stones alone.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {Readonly<Record<string, import('./decode.logic.js').Problem>>} bank
 */
export function nextWritten(record, bank) {
  const seen = new Set(record.own.seen)
  for (const t of record.tries) {
    const seed = bank[t.id]
    if (t.right || !seed || seed.source === 'aether') continue
    for (const { at, act } of changesOf(seed)) {
      const key = changeKey(seed.id, at, act)
      if (seen.has(key)) continue
      const black = act === 'black' ? [...seed.black, at] : seed.black.filter(s => s !== at)
      const white = act === 'white' ? [...seed.white, at] : seed.white.filter(s => s !== at)
      /** @type {import('./pose.logic.js').Position} */
      const position = { black, white, side: seed.toMove === 'black' ? 'B' : 'W' }
      return { key, seed, position }
    }
  }
  return undefined
}

/**
 * The next build: a position of a reviewed game while one is left, else a written problem.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {Readonly<Record<string, import('./decode.logic.js').Problem>>} bank
 * @returns {{ key: import('./decode.logic.js').PositionKey, seed?: import('./decode.logic.js').Problem, position: import('./pose.logic.js').Position } | undefined}
 */
export const nextBuild = (record, bank) => nextPosition(record) ?? nextWritten(record, bank)

/**
 * What a build brings to the record: a written problem enters only when its sequence of reasons
 * is its seed's kind's and its best first moves share no point with its seed's; it then carries
 * its seed's kind. A position of a game enters as the search posed it.
 * @param {import('./decode.logic.js').Problem | null} problem
 * @param {import('./decode.logic.js').Problem} [seed]
 * @returns {import('./decode.logic.js').Problem | null}
 */
export function entering(problem, seed) {
  if (!problem || !seed) return problem
  const line = problem.solution.lines[0]
  const kind = KINDS.find(k => k.id === seed.kind)
  if (!line || !kind?.seqs.includes(once(line.moves.map(m => m.reason)).join('|'))) return null
  if (problem.answers.some(a => seed.answers.includes(a))) return null
  return { ...problem, kind: seed.kind }
}
