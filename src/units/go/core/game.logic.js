// Hides: a game as the Go record keeps it, read from the server's own record, and the checks "A
// Self-Study System" sets on it (The build, Go, The checks): which game is a rated game, which a
// practice game, and the practice game's count by area. Pure functions over the server's JSON,
// tested in tests/go-game.test.mjs.
import { studyDay } from '../../../kernel/days.logic.js'
import { assert } from '../../../kernel/invariant.logic.js'
import { BLACK, WHITE, areaScore, coord, emptyBoard, parseCoord, place } from './rules.logic.js'

/** The practice game's bot. */
export const PRACTICE = { bot: '15k-kgs-humanlike-kata' }

/**
 * A point of the server's record, counted from the top left, as the paper writes it.
 * @param {number} x
 * @param {number} y
 * @param {number} size
 */
const pointOf = (x, y, size) => (x < 0 || y < 0 ? 'pass' : coord(x, size - 1 - y))

/**
 * The server's string of points, two letters a point, as coordinates.
 * @param {string} text
 * @param {number} size
 */
const pointsOf = (text, size) =>
  (text.match(/../g) ?? []).map(p => pointOf(p.charCodeAt(0) - 97, p.charCodeAt(1) - 97, size))

/**
 * A game from the server's record of it, for the player with id `me`: the paper's fields, and
 * beside them what its checks read (the time control's system, whether the server cancelled the
 * game, how it ended, the stones set before the first move, and the stones taken off as dead).
 * @param {import('./decode.logic.js').GameDetail} detail
 * @param {number} me
 * @returns {import('./decode.logic.js').Game}
 */
export function gameOf(detail, me) {
  const { data } = detail
  const size = detail.width
  const colour = detail.black === me ? 'black' : 'white'
  const them = detail.players[colour === 'black' ? 'white' : 'black']
  // a move with no point (the decoder holds each move as numbers) is read as a pass
  const moves = data.moves.map(([x = -1, y = -1]) => pointOf(x, y, size))
  const lost = colour === 'black' ? detail.blackLost : detail.whiteLost
  const { outcome } = detail
  return {
    id: detail.id,
    date: studyDay(Date.parse(detail.ended)),
    ranked: detail.ranked,
    bot: them.bot,
    opponent: them.username,
    size,
    square: detail.width === detail.height,
    handicap: detail.handicap,
    rules: detail.rules,
    main: data.mainSeconds,
    time: data.system,
    cancelled: detail.annulled || /cancel/i.test(outcome),
    passed: moves.length >= 2 && moves.at(-1) === 'pass' && moves.at(-2) === 'pass',
    colour,
    result: `${lost ? 'lost' : 'won'} by ${outcome.toLowerCase()}`,
    first: data.initialPlayer === 'white' ? 'white' : 'black',
    placed: data.freePlacement && detail.handicap > 1 ? detail.handicap : 0,
    initial: { black: pointsOf(data.initialBlack, size), white: pointsOf(data.initialWhite, size) },
    removed: pointsOf(data.removed, size),
    moves,
    pass: [],
    reviewed: false,
    list: null
  }
}

/**
 * @param {string} text
 * @param {number} size
 */
function indexOf(text, size) {
  const p = parseCoord(text)
  assert(p, `A game's stored point is a point: ${text}`)
  return p[1] * size + p[0]
}

/**
 * The colour of each move: the sides take turns, after the handicap stones Black places first.
 * @param {Pick<import('./decode.logic.js').Game, 'first' | 'moves' | 'placed'>} game
 * @returns {import('./decode.logic.js').Colour[]}
 */
export function colours(game) {
  /** @type {import('./decode.logic.js').Colour[]} */
  const out = []
  let side = game.first
  game.moves.forEach((_, k) => {
    if (k < game.placed) return out.push('black')
    if (k === game.placed && game.placed) side = 'white'
    out.push(side)
    side = side === 'black' ? 'white' : 'black'
  })
  return out
}

/**
 * The board before move `k` (0 the first), as rules.js holds one; null when the record does not replay.
 * @param {Pick<import('./decode.logic.js').Game, 'size' | 'initial' | 'first' | 'moves' | 'placed'>} game
 * @param {number} [k]
 * @returns {import('./rules.logic.js').Board | null}
 */
export function boardBefore(game, k = game.moves.length) {
  let board = emptyBoard(game.size)
  /** @param {string} text */
  const at = text => indexOf(text, game.size)
  for (const p of game.initial.black) board.cells[at(p)] = BLACK
  for (const p of game.initial.white) board.cells[at(p)] = WHITE
  const side = colours(game)
  for (const [i, move] of game.moves.slice(0, k).entries()) {
    if (move === 'pass') continue
    const r = place(board, side[i] === 'black' ? BLACK : WHITE, at(move))
    if (!r) return null
    board = r.board
  }
  return board
}

/**
 * A board's stones by colour, as a whole-board diagram.
 * @param {import('./rules.logic.js').Board} board
 * @returns {import('./diagram.logic.js').Diagram}
 */
export function diagramOf(board) {
  /** @type {string[]} */
  const black = []
  /** @type {string[]} */
  const white = []
  board.cells.forEach((c, i) => {
    const at = coord(i % board.w, Math.floor(i / board.w))
    if (c === BLACK) black.push(at)
    else if (c === WHITE) white.push(at)
  })
  return { size: board.w, view: [0, 0, board.w, board.h], black, white }
}

/**
 * A rated game: ranked by the server, even, 19×19, the opponent not a bot, and the rules and
 * time equal to the record's `server`; a game the server cancels is not counted. This returns
 * what keeps a game from being one, as one sentence, or '' when it is one. Such a game is
 * reviewed and not counted.
 * @param {Pick<import('./decode.logic.js').Game, 'cancelled' | 'ranked' | 'bot' | 'handicap' | 'size' | 'square' | 'rules' | 'time' | 'main'>} game
 * @param {Pick<import('./decode.logic.js').Server, 'size' | 'rules' | 'main'>} server
 */
export function ratedLack(game, server) {
  const why = game.cancelled
    ? 'The server cancelled that game.'
    : !game.ranked
      ? 'That game is not ranked.'
      : game.bot
        ? 'That game is against a bot.'
        : game.handicap !== 0
          ? 'That game has a handicap.'
          : game.size !== server.size || !game.square
            ? 'That game is not on a 19×19 board.'
            : game.rules !== server.rules
              ? 'That game is not under the AGA rules.'
              : game.time !== 'absolute' || game.main !== server.main
                ? 'That game is not at 30 minutes each in absolute time with no overtime.'
                : ''
  return why && `${why} Eruko reviews it and does not count it as a rated game.`
}

/**
 * Games oldest first: by the day each ended, then by number.
 * @param {Pick<import('./decode.logic.js').Game, 'date' | 'id'>} a
 * @param {Pick<import('./decode.logic.js').Game, 'date' | 'id'>} b
 */
export const oldestFirst = (a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id)

/** @param {Pick<import('./decode.logic.js').GoRecord, 'server' | 'games'>} record */
export const ratedCount = record => {
  const { server } = record
  return server ? record.games.filter(g => !ratedLack(g, server)).length : 0
}

/**
 * A practice game: unranked, 19×19, against a bot, begun on an empty board and ended by two
 * passes. Returns what it lacks as one sentence, or '' when it is one.
 * @param {Pick<import('./decode.logic.js').Game, 'ranked' | 'size' | 'square' | 'bot' | 'handicap' | 'initial' | 'passed'>} game
 */
export function practiceLack(game) {
  if (game.ranked) return 'That game is ranked. A practice game is a private game that is not ranked.'
  if (game.size !== 19 || !game.square) return 'That game is not on a 19×19 board.'
  if (!game.bot) return `That game is not against a bot. Play the practice game against ${PRACTICE.bot}.`
  if (game.handicap || game.initial.black.length || game.initial.white.length) return 'That game did not begin on an empty board.'
  if (!game.passed) return 'That game did not end by two passes, so it has no count. Eruko reviews it. The next practice game is the one you count.'
  return ''
}

/**
 * Eruko's count of the server's final board by area, for the learner's colour, in its two parts:
 * the learner's stones left on the board once the dead stones are off, and the empty points that
 * reach only the learner's colour.
 * @param {import('./decode.logic.js').Game} game
 * @returns {{ stones: number, empty: number } | null}
 */
export function areaParts(game) {
  const board = boardBefore(game)
  if (!board) return null
  for (const p of game.removed) if (p !== 'pass') board.cells[indexOf(p, game.size)] = 0
  const mine = game.colour === 'black' ? BLACK : WHITE
  const stones = board.cells.filter(c => c === mine).length
  return { stones, empty: areaScore(board)[game.colour] - stones }
}

/**
 * Eruko's count of the server's final board by area, for the learner's colour: the dead stones off first.
 * @param {import('./decode.logic.js').Game} game
 * @returns {number | null}
 */
export function areaCount(game) {
  const parts = areaParts(game)
  return parts && parts.stones + parts.empty
}
