// Step 3's moves on the record ("A Self-Study System", The build, Go, The checks): "Game ended"
// keeps a game and opens its count, and gate 2 reads after every 15 rated games. The replies
// below have the shape of the server's own.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gameOf, ratedCount } from './game.logic.js'
import { gameCounted, gameEnded } from './play.logic.js'
import { detailOf, gameId } from './decode.logic.js'
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

test('"Game ended": the game is kept once, a practice game opens its count, and its count is judged', () => {
  const bot = {
    players: { black: { username: 'me' }, white: { username: 'b', ui_class: 'bot' } },
    ranked: false,
    id: 4
  }
  const g = gameOf(
    detail(
      reply(bot, {
        moves: [
          [0, 0, 1],
          [-1, -1, 1],
          [-1, -1, 1]
        ]
      })
    ),
    ME
  )
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...recordOf({}, course), server }
  r = gameEnded(course, [g], { rating: 600, deviation: 200 }, '2026-10-03', true)(r)
  assert.equal(r.games.length, 1)
  assert.deepEqual(r.position.open, { n: 3, step: 'count', game: 4 })
  assert.deepEqual(r.position.read, { day: '2026-10-03', rating: 600, deviation: 200 })
  assert.equal(
    gameEnded(course, [g], { rating: 600, deviation: 200 }, '2026-10-03', true)(r).games.length,
    1
  )
  const wrong = gameCounted(gameId(4), 12, '2026-10-03')(r)
  assert.ok(wrong.position.open)
  assert.equal(fieldsOf(wrong.position.open).right, false)
  // the first count, right or wrong, is the one the start gate needs
  assert.deepEqual(wrong.start, { counted: '2026-10-03', equal: '' })
  // counting again on a later day keeps the first day, and a right count sets `equal`
  const again = gameCounted(gameId(4), 361, '2026-10-04')(wrong)
  assert.deepEqual(again.start, { counted: '2026-10-03', equal: '2026-10-04' })
  const right = gameCounted(gameId(4), 361, '2026-10-03')(r)
  assert.ok(right.position.open)
  // a right count shows Eruko's count at once
  assert.equal(fieldsOf(right.position.open).right, true)
  assert.equal(fieldsOf(right.position.open).count, 361)
  assert.deepEqual(right.start, { counted: '2026-10-03', equal: '2026-10-03' })
  // a game that cannot be counted says why
  const short = gameEnded(
    course,
    [gameOf(detail(reply({ ...bot, id: 5 }, { moves: [[0, 0, 1]] })), ME)],
    /** @type {{ rating: number, deviation: number }} */ (/** @type {unknown} */ ({})),
    '2026-10-04',
    true
  )(r) // no player is read: the game cannot be counted
  assert.ok(short.position.open)
  assert.equal(short.position.open.step, 'note')
})

test('gate 2 reads after every 15 rated games, and a handicap game is reviewed and not counted', () => {
  /** @type {import('./decode.logic.js').GoRecord} */
  let r = { ...recordOf({}, course), server }
  const player = { rating: 812.4, deviation: 64.2 }
  for (let i = 1; i <= 14; i++)
    r = gameEnded(course, [gameOf(detail(reply({ id: i })), ME)], player, '2026-10-03', false)(r)
  r = gameEnded(
    course,
    [gameOf(detail(reply({ id: 100, handicap: 2 })), ME)],
    player,
    '2026-10-03',
    false
  )(r)
  assert.equal(ratedCount(r), 14)
  assert.equal(r.games.length, 15)
  assert.equal(r.readings.length, 0)
  r = gameEnded(course, [gameOf(detail(reply({ id: 15 })), ME)], player, '2026-10-04', false)(r)
  assert.equal(ratedCount(r), 15)
  assert.deepEqual(r.readings, [
    { date: '2026-10-04', games: 15, rating: 812.4, deviation: 64.2, p: 0, n: 0, state: 'open' }
  ])
  assert.deepEqual(r.first, { date: '2026-10-04', rating: 812.4, deviation: 64.2, games: 15 })
  assert.ok(r.position.open)
  assert.equal(r.position.open.step, 'reading')
})

test('"Game ended" with the server cleared meanwhile keeps the games and counts none as rated', () => {
  const g = gameOf(detail(reply()), ME)
  const r = gameEnded(
    course,
    [g],
    { rating: 600, deviation: 200 },
    '2026-10-03',
    false
  )({ ...recordOf({}, course), server: null })
  assert.equal(r.games.length, 1)
  assert.equal(ratedCount(r), 0)
})
