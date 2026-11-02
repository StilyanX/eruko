// Hides: step 2 of the Go unit, from "A Self-Study System" (Go, The steps; The review position; The
// build, Go, The engine and the server): the engine's pass over every position of a game, the
// points each move lost, and the list of the learner's moves to review. A move's loss is the
// engine's lead for the mover after its best move minus its lead after the move played. Pure
// functions, tested in tests/go-review.test.mjs.
import { assert } from '../../../kernel/invariant.logic.js'
import { colours } from './game.logic.js'

/**
 * @typedef {readonly ['B' | 'W', string]} Move A side and a point, "D4", as the engine reads a move
 * @typedef {Readonly<{ id: string, initialStones?: readonly Move[], initialPlayer?: 'B' | 'W', moves: readonly Move[], rules: string, komi: number, boardXSize: number, boardYSize: number, maxVisits: number, analyzeTurns: readonly number[] }>} Query One query in the analysis engine's own form
 */

/** @type {Readonly<Record<import('./decode.logic.js').Colour, 'B' | 'W'>>} */
const LETTER = { black: 'B', white: 'W' }

/**
 * @param {'B' | 'W'} side
 * @param {string} at
 * @returns {Move}
 */
const moveOf = (side, at) => [side, at]

/**
 * The query for position `k` of a game (0 the empty board, `moves.length` the last), in the
 * analysis engine's own form, at the record's `engine` setting unchanged. `extra` is one more
 * move played from that position: the learner's typed move in a review.
 * @param {Pick<import('./decode.logic.js').Engine, 'rules' | 'komi' | 'visits'>} engine
 * @param {import('./decode.logic.js').Game} game
 * @param {number} k
 * @param {string} [extra]
 * @returns {Query}
 */
export function queryFor(engine, game, k, extra) {
  const side = colours(game)
  // colours() gives one colour a move, so each move played has its own
  const moves = game.moves.slice(0, k).map((m, i) => moveOf(LETTER[side[i] ?? game.first], m))
  if (extra)
    moves.push(moveOf(LETTER[side[k] ?? (side[k - 1] === 'black' ? 'white' : 'black')], extra))
  return {
    id: `${game.id}-${k}${extra ? `-${extra}` : ''}`,
    initialStones: [
      ...game.initial.black.map(p => moveOf('B', p)),
      ...game.initial.white.map(p => moveOf('W', p))
    ],
    initialPlayer: LETTER[game.first],
    moves,
    rules: engine.rules,
    komi: engine.komi,
    boardXSize: game.size,
    boardYSize: game.size,
    maxVisits: engine.visits,
    analyzeTurns: [moves.length]
  }
}

/**
 * What is kept of the engine's answer for a position: Black's lead there, the best move, Black's
 * lead after it, and its line. The relay starts the engine so that it reports for Black.
 * @param {import('./decode.logic.js').Answer} answer
 * @returns {import('./decode.logic.js').PassAnswer}
 */
export function passAnswerOf(answer) {
  const best = [...answer.moveInfos].sort((a, b) => a.order - b.order)[0]
  return {
    lead: answer.scoreLead,
    best: best?.move ?? 'pass',
    bestLead: best?.scoreLead ?? answer.scoreLead,
    line: best?.pv ?? []
  }
}

/**
 * A lead for Black as the lead for `colour`.
 * @param {number} lead
 * @param {import('./decode.logic.js').Colour} colour
 */
const forSide = (lead, colour) => (colour === 'black' ? lead : -lead)

/**
 * The pass is done: the engine has answered for every position of the game.
 * @param {Pick<import('./decode.logic.js').Game, 'pass' | 'moves'>} game
 */
export const passDone = game =>
  Array.from({ length: game.moves.length + 1 }, (_, k) => game.pass[k]).every(Boolean)

/**
 * The engine's answer for position `k`, once the pass has it.
 * @param {Pick<import('./decode.logic.js').Game, 'pass'>} game
 * @param {number} k
 */
function answerAt(game, k) {
  const answer = game.pass[k]
  assert(answer, `The pass is done, so it holds an answer for position ${k}`)
  return answer
}

/**
 * The points move `k` lost (0 the first move), once the pass is done.
 * @param {import('./decode.logic.js').Game} game
 * @param {number} k
 */
export function lossAt(game, k) {
  const mover = colours(game)[k]
  assert(mover, `A review position is a move of the game: ${k + 1}`)
  return forSide(answerAt(game, k).bestLead, mover) - forSide(answerAt(game, k + 1).lead, mover)
}

/**
 * The review list: the learner's moves whose loss stands above the mean loss of their moves in
 * that game by more than twice the standard deviation of those losses, with n − 1 in its
 * divisor, the largest loss first. Each holds the move's number, the game move and its loss,
 * the engine's best move and line, and a blank for the typed move.
 * @param {import('./decode.logic.js').Game} game
 * @returns {import('./decode.logic.js').Entry[]}
 */
export function reviewList(game) {
  const side = colours(game)
  const mine = game.moves.map((at, k) => ({ at, k })).filter(({ k }) => side[k] === game.colour)
  if (mine.length < 2) return []
  const lost = mine.map(m => ({ ...m, loss: lossAt(game, m.k) }))
  const losses = lost.map(m => m.loss)
  const mean = losses.reduce((a, b) => a + b, 0) / losses.length
  const spread = Math.sqrt(losses.reduce((a, x) => a + (x - mean) ** 2, 0) / (losses.length - 1))
  return lost
    .filter(m => m.loss > mean + 2 * spread)
    .sort((a, b) => b.loss - a.loss)
    .map(m => ({
      move: m.k + 1,
      game: m.at,
      gameLoss: m.loss,
      best: answerAt(game, m.k).best,
      line: answerAt(game, m.k).line,
      typed: '',
      typedLoss: null
    }))
}

/**
 * The points the learner's typed move loses at a review position: 0.0 when it is the engine's
 * own move, and else the engine's lead after its best move minus its lead after the typed move
 * (`lead`, Black's lead after it, from one more query). A move the engine reads as better than
 * its own best loses 0.0.
 * @param {Pick<import('./decode.logic.js').Game, 'colour' | 'pass'>} game
 * @param {Pick<import('./decode.logic.js').Entry, 'best' | 'move'>} entry
 * @param {string} typed
 * @param {number} lead
 */
export function typedLoss(game, entry, typed, lead) {
  if (typed === entry.best) return 0
  const mover = game.colour
  return Math.max(0, forSide(answerAt(game, entry.move - 1).bestLead, mover) - forSide(lead, mover))
}

/**
 * Points to one decimal place, as the review screen writes them: "2.1".
 * @param {number} x
 */
export const points = x => (Math.round(Math.abs(x) * 10) / 10).toFixed(1)

/**
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').GameId} id
 * @param {(g: import('./decode.logic.js').Game) => Partial<import('./decode.logic.js').Game>} change
 * @returns {import('./decode.logic.js').GoRecord}
 */
const withGame = (record, id, change) => ({
  ...record,
  games: record.games.map(g => (g.id === id ? { ...g, ...change(g) } : g))
})

/**
 * The engine's answer for position `k` kept in the game's pass; when it completes the pass, the review list is drawn.
 * @param {import('./decode.logic.js').GameId} id
 * @param {number} k
 * @param {import('./decode.logic.js').PassAnswer} answer
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const withAnswer = (id, k, answer) => record =>
  withGame(record, id, g => {
    const pass = g.pass.slice()
    pass[k] = answer
    const next = { ...g, pass }
    if (!passDone(next)) return { pass }
    const list = reviewList(next)
    return { pass, list, reviewed: list.length === 0 }
  })

/**
 * A game the engine would not read: it is left out of the pass, so the games after it are read.
 * @param {import('./decode.logic.js').GameId} id
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const withUnread = id => record => withGame(record, id, () => ({ unread: true }))

/**
 * The game the engine's pass is on, and how far: `{ game, at, of }`; undefined when no game waits.
 * @param {import('./decode.logic.js').GoRecord} record
 */
export function passAt(record) {
  const game = record.games.find(g => !g.unread && !passDone(g))
  if (!game) return undefined
  const of = game.moves.length + 1
  const at = Array.from({ length: of }, (_, i) => i).find(i => !game.pass[i])
  return { game, at, of }
}

/**
 * An entry with its typed move: a skipped position ("none") keeps no loss, since it has none.
 * @param {import('./decode.logic.js').Entry} x
 * @param {string} typed
 * @param {number | null} loss
 * @returns {import('./decode.logic.js').Entry}
 */
function typedEntry(x, typed, loss) {
  if (typed !== 'none') return { ...x, typed, typedLoss: loss }
  /** @type {import('./decode.logic.js').Entry & { typedLoss?: unknown }} */
  const was = x
  const { typedLoss: _, ...rest } = was
  return { ...rest, typed }
}

/**
 * The points a review position's typed move lost: null while the engine has not read it, and for
 * a position skipped.
 * @param {import('./decode.logic.js').Entry} entry
 */
export const lossOf = entry => ('typedLoss' in entry ? entry.typedLoss : null)

/**
 * A review position answered: the typed move and its loss kept; the game is reviewed once every
 * position is. The loss is null while the engine has not read the move: the line shows at once.
 * @param {import('./decode.logic.js').GameId} id
 * @param {number} index
 * @param {string} typed
 * @param {number | null} loss
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const withTyped = (id, index, typed, loss) => record =>
  withGame(record, id, g => {
    assert(g.list, 'A review position is answered only on a game with a review list')
    const list = g.list.map((x, i) => (i === index ? typedEntry(x, typed, loss) : x))
    return { list, reviewed: list.every(x => x.typed) }
  })

/**
 * The engine's loss for a typed move, read after its line showed: kept only while the position
 * still holds that move.
 * @param {import('./decode.logic.js').GameId} id
 * @param {number} index
 * @param {string} typed
 * @param {number} loss
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const withLoss = (id, index, typed, loss) => record =>
  withGame(record, id, g => ({
    list: (g.list ?? []).map((x, i) =>
      i === index && x.typed === typed ? typedEntry(x, typed, loss) : x
    )
  }))
