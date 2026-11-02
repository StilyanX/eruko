// Step 3's checks on a game ("A Self-Study System", The build, Go, The checks): a game read from the
// server's record, which game is rated and which a practice game, and the count by area. The
// replies below have the shape of the server's own.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  areaCount,
  areaParts,
  boardBefore,
  colours,
  diagramOf,
  gameOf,
  practiceLack,
  ratedCount,
  ratedLack
} from './game.logic.js'
import { gameEnded } from './play.logic.js'
import { detailOf } from './decode.logic.js'
import { SERVER, recordOf } from './record.logic.js'
import { courseFrom, fieldsOf } from '../../../../tests/lib/go-typed.mjs'

const ME = 77
const course = courseFrom({ parts: [], kinds: [] })
/** A game as the server's record gives one. `moves` are [x, y] from the top left; [-1, -1] is a pass. */
const reply = (
  /** @type {Record<string, unknown>} */ over = {},
  /** @type {Record<string, unknown>} */ data = {}
) => ({
  id: 9001,
  black: ME,
  white: 5,
  width: 19,
  height: 19,
  rules: 'aga',
  ranked: true,
  handicap: 0,
  outcome: '6.5 points',
  black_lost: true,
  white_lost: false,
  annulled: false,
  ended: '2026-10-03T10:00:00.000000Z',
  players: { black: { username: 'me', ui_class: '' }, white: { username: 'them', ui_class: '' } },
  ...over,
  gamedata: {
    moves: [
      [3, 3, 10],
      [15, 15, 10],
      [-1, -1, 10],
      [-1, -1, 10]
    ],
    initial_player: 'black',
    initial_state: { black: '', white: '' },
    free_handicap_placement: false,
    time_control: { system: 'absolute', total_time: 1800 },
    removed: '',
    ...data
  }
})
const server = { ...SERVER, user: 'me', id: ME, since: '' }
/**
 * A server's reply as the unit reads it.
 * @param {unknown} raw
 */
const detail = raw => {
  const d = detailOf(raw)
  assert.ok(d.ok)
  return d.value
}

test("a game from the server's record: the paper's fields, moves in Eruko's coordinates", () => {
  const g = gameOf(detail(reply()), ME)
  assert.equal(g.id, 9001)
  assert.equal(g.date, '2026-10-03')
  assert.equal(g.colour, 'black')
  assert.equal(g.result, 'lost by 6.5 points')
  assert.deepEqual(g.moves, ['D16', 'Q4', 'pass', 'pass'])
  assert.deepEqual(
    [g.size, g.rules, g.main, g.ranked, g.bot, g.handicap],
    [19, 'aga', 1800, true, false, 0]
  )
  assert.deepEqual(colours(g), ['black', 'white', 'black', 'white'])
  const before = boardBefore(g, 2)
  assert.ok(before)
  assert.deepEqual(diagramOf(before), {
    size: 19,
    view: [0, 0, 19, 19],
    black: ['D16'],
    white: ['Q4']
  })
  assert.equal(gameOf(detail(reply({ black: 5, white: ME })), ME).colour, 'white')
})

test('a rated game: ranked, even, 19×19, no bot, AGA rules, 30 minutes absolute; a cancelled game is not counted', () => {
  const rated = (/** @type {Record<string, unknown>[]} */ over) =>
    !ratedLack(gameOf(detail(reply(...over)), ME), server)
  assert.equal(rated([]), true)
  assert.equal(rated([{ ranked: false }]), false)
  assert.equal(rated([{ annulled: true }]), false)
  assert.equal(rated([{ outcome: 'Cancellation' }]), false)
  assert.equal(rated([{ handicap: 2 }]), false)
  assert.equal(rated([{ width: 13, height: 13 }]), false)
  assert.equal(rated([{ rules: 'japanese' }]), false)
  assert.equal(
    rated([
      { players: { black: { username: 'me' }, white: { username: 'bot', ui_class: 'bot' } } }
    ]),
    false
  )
  assert.equal(
    rated([
      {},
      { time_control: { system: 'byoyomi', main_time: 1800, periods: 5, period_time: 30 } }
    ]),
    false
  )
  assert.equal(rated([{}, { time_control: { system: 'absolute', total_time: 600 } }]), false)
  // resigning and the clock: the server's result stands
  assert.equal(rated([{ outcome: 'Resignation' }]), true)
  assert.equal(rated([{ outcome: 'Timeout' }]), true)
})

test('a practice game: unranked, 19×19, against a bot, from an empty board, ended by two passes', () => {
  const bot = {
    players: {
      black: { username: 'me' },
      white: { username: '15k-kgs-humanlike-kata', ui_class: 'bot' }
    },
    ranked: false
  }
  const lack = (over = {}, data = {}) =>
    practiceLack(gameOf(detail(reply({ ...bot, ...over }, data)), ME))
  assert.equal(lack(), '')
  assert.match(lack({ ranked: true }), /ranked/)
  assert.match(lack({ width: 9, height: 9 }), /19×19/)
  assert.match(lack({ players: reply().players }), /not against a bot/)
  assert.match(lack({ handicap: 3 }), /empty board/)
  assert.match(lack({ outcome: 'Resignation' }, { moves: [[3, 3, 1]] }), /two passes/)
})

test('the count by area: the dead stones off first, then the stones and the points that reach only them', () => {
  // Black's stones on column B wall off column A on a 5×5 board.
  const moves = []
  for (let y = 0; y < 5; y++) moves.push([1, y, 1], [2, y, 1])
  moves.push([0, 2, 1], [-1, -1, 1], [-1, -1, 1])
  // the last stone played at A3 is White's, inside Black's area: removed as dead
  const g = gameOf(
    detail(
      reply(
        { width: 5, height: 5 },
        { moves: [...moves.slice(0, 10), [-1, -1, 1], ...moves.slice(10)], removed: 'ac' }
      )
    ),
    ME
  )
  assert.deepEqual(colours(g).slice(10, 12), ['black', 'white'])
  assert.equal(areaCount(g), 10)
  assert.equal(areaCount({ ...g, colour: 'white' }), 15)
  assert.equal(areaCount({ ...g, removed: [] }), 5)
  // Black's five stones on column B and the five points of column A, the dead stone's among them
  assert.deepEqual(areaParts(g), { stones: 5, empty: 5 })
})

test('a game that is not rated says why, and the count does not move', () => {
  const lack = (
    /** @type {{ top?: Record<string, unknown>, data?: Record<string, unknown> }} */ over
  ) => ratedLack(gameOf(detail(reply(over.top, over.data)), ME), server)
  assert.equal(lack({}), '')
  assert.match(
    lack({ top: { ranked: false } }),
    /not ranked\. Eruko reviews it and does not count it/
  )
  assert.match(lack({ top: { handicap: 2 } }), /handicap/)
  assert.match(lack({ top: { rules: 'japanese' } }), /AGA rules/)
  assert.match(lack({ top: { annulled: true } }), /cancelled/)
  assert.match(
    lack({ data: { time_control: { system: 'byoyomi', main_time: 600 } } }),
    /30 minutes/
  )
  assert.match(
    lack({
      top: { players: { black: { username: 'me' }, white: { username: 'b', ui_class: 'bot' } } }
    }),
    /bot/
  )
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...recordOf({}, course), server }
  r = gameEnded(
    course,
    [gameOf(detail(reply({ id: 100, handicap: 2 })), ME)],
    { rating: 800, deviation: 60 },
    '2026-10-03',
    false
  )(r)
  assert.ok(r.position.open)
  assert.equal(r.position.open.step, 'note')
  assert.match(String(fieldsOf(r.position.open).text), /handicap/)
  assert.equal(ratedCount(r), 0)
  // a rated game beside it opens no note
  r = gameEnded(
    course,
    [gameOf(detail(reply({ id: 101 })), ME)],
    { rating: 800, deviation: 60 },
    '2026-10-03',
    false
  )({ ...r, position: { ...r.position, open: null } })
  assert.equal(r.position.open, null)
})
