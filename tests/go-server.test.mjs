// The Go server's reads (src/units/go/core/server.dom.js; "A Self-Study System", The build, Go, The
// checks): the learner found by user name, a game read from the server's record, and a reply in
// another shape said in one plain sentence. The replies below have the shape of the server's own.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gameOf } from '../src/units/go/core/game.logic.js'
import { readEnded, readGame, readPlayer, serverSays } from '../src/units/go/core/server.dom.js'
import { gameId } from '../src/units/go/core/decode.logic.js'

const ME = 77
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

test('the server is read by the user name alone', async () => {
  /** @type {string[]} */
  const asked = []
  const get = async (/** @type {string} */ url) => {
    asked.push(url)
    const body = url.includes('/players?')
      ? {
          results: [
            { id: ME, username: 'me', ratings: { overall: { rating: 652.1, deviation: 66.3 } } }
          ]
        }
      : url.includes('/games?')
        ? {
            results: [
              { id: 3, ended: '2026-10-03T10:00:00Z' },
              { id: 4, ended: null }
            ]
          }
        : reply()
    return { ok: true, json: async () => body }
  }
  assert.deepEqual(await readPlayer('me', get), {
    ok: true,
    value: { id: ME, user: 'me', rating: 652.1, deviation: 66.3 }
  })
  assert.deepEqual(await readEnded(ME, get), {
    ok: true,
    value: [{ id: 3, ended: '2026-10-03T10:00:00Z' }]
  })
  const game = await readGame(gameId(9001), get)
  assert.equal(game.ok && game.value.id, 9001)
  assert.ok(asked.every(u => u.startsWith('https://online-go.com/api/v1/')))
  assert.deepEqual(
    await readPlayer('nobody', async () => ({ ok: true, json: async () => ({ results: [] }) })),
    { ok: false, error: 'no-player' }
  )
  assert.deepEqual(
    await readPlayer('me', async () => {
      throw new Error('offline')
    }),
    { ok: false, error: 'down' }
  )
  const ended = await readEnded(ME, async () => ({
    ok: false,
    status: 500,
    json: async () => ({})
  }))
  assert.deepEqual(ended, { ok: false, error: 'down' })
})

test('the user name is found in any capitals, and kept as the server writes it', async () => {
  /** @type {string[]} */
  const asked = []
  const get = async (/** @type {string} */ url) => {
    asked.push(url)
    // the server's exact match keeps capitals: only the search by start ignores them
    const results = url.includes('username__istartswith=ME')
      ? [
          { id: 8, username: 'Mendel' },
          { id: ME, username: 'Me' }
        ]
      : []
    return { ok: true, json: async () => ({ results }) }
  }
  assert.deepEqual(await readPlayer('ME', get), {
    ok: true,
    value: { id: ME, user: 'Me', rating: 1500, deviation: 350 }
  })
  assert.equal(asked.length, 2)
  assert.deepEqual(await readPlayer('Men', get), { ok: false, error: 'no-player' })
  assert.deepEqual(
    await readPlayer('x', async u =>
      u.includes('istartswith')
        ? { ok: false, json: async () => ({}) }
        : { ok: true, json: async () => ({ results: [] }) }
    ),
    { ok: false, error: 'down' }
  )
})

test('a reply the server sends in another shape becomes one plain sentence', async () => {
  /**
   * @param {unknown} body
   * @param {number} [status]
   */
  const get = (body, status) => async () => ({
    ok: !status,
    ...(status === undefined ? {} : { status }),
    json: async () => body
  })
  /** @param {Promise<import('../src/kernel/result.logic.js').Result<unknown, import('../src/units/go/core/decode.logic.js').ServerError>>} read */
  const said = async read => {
    const r = await read
    return r.ok ? '' : serverSays(r.error)
  }
  const one = gameId(1)
  assert.match(await said(readGame(one, get({ id: 1 }))), /cannot read the server/)
  assert.match(await said(readGame(one, get(null))), /cannot read the server/)
  assert.match(await said(readGame(one, get({}, 403))), /private/)
  assert.match(await said(readGame(one, get({}, 404))), /no such record/)
  assert.match(await said(readGame(one, get({}, 500))), /did not answer/)
  assert.match(
    await said(
      readGame(one, async () => ({
        ok: true,
        json: async () => {
          throw new Error('not JSON')
        }
      }))
    ),
    /did not answer/
  )
  assert.match(await said(readPlayer('nobody', get({ results: [] }))), /no player of that name/)
  // an account with no game yet carries no rating: the server's own start stands in
  const bare = await readPlayer('new', get({ results: [{ id: 3, username: 'new' }] }))
  assert.deepEqual(bare, { ok: true, value: { id: 3, user: 'new', rating: 1500, deviation: 350 } })
})

test("a game record that names no white player is refused, and the learner's White game is found by it", async () => {
  const { white: _white, ...noWhite } = reply()
  assert.deepEqual(
    await readGame(gameId(9001), async () => ({ ok: true, json: async () => noWhite })),
    { ok: false, error: 'no-game' }
  )
  const asWhite = await readGame(gameId(9001), async () => ({
    ok: true,
    json: async () => reply({ black: 5, white: ME })
  }))
  assert.ok(asWhite.ok)
  assert.equal(asWhite.value.white, ME)
  assert.equal(gameOf(asWhite.value, ME).colour, 'white')
})
