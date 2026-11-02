// Hides: the two places Go reaches outside the app, faked for the screens' tests, so no test
// reaches the network: OGS's public API (the player by user name, their ended games, one game's
// record) and the KataGo relay on the learner's own computer (its word of itself and its
// queries). Each answers as the real one does (src/units/go/server.js, engine.js), or fails
// as it does when absent: `down` refuses the connection, `hang` never answers.
import { createHash } from 'node:crypto'
import { ENGINE } from '../src/units/go/core/record.logic.js'
import { USER } from './go-records.mjs'

/** @typedef {'ok' | 'down' | 'hang'} Reach */
/** @typedef {{ server?: Reach, relay?: Reach, games?: 'rated' | 'none' }} Net */

/** The network file the fake relay runs, and its bytes, as a test chooses them. */
export const NETWORK = {
  name: `${ENGINE.network}.bin.gz`,
  bytes: Buffer.from('a network file, for the tests')
}
const CHECKSUM = createHash('sha256').update(NETWORK.bytes).digest('hex')

/** The rated game the fake server holds: ended now, the learner Black, ten moves. */
const GAME = 777
/** A practice game against the bot, ended by two passes. */
const PRACTICE = 778

/**
 * One game's record as the server gives it.
 * @param {number} id
 * @param {number[][]} moves
 * @param {Record<string, unknown>} over
 */
const detail = (id, moves, over) => ({
  id,
  black: USER.id,
  white: 99,
  width: 19,
  height: 19,
  rules: 'aga',
  handicap: 0,
  ranked: true,
  outcome: 'Resignation',
  black_lost: false,
  white_lost: true,
  ended: new Date().toISOString(),
  players: { black: { username: USER.user }, white: { username: 'rival' } },
  gamedata: {
    moves,
    initial_player: 'black',
    time_control: { system: 'absolute', total_time: 1800 }
  },
  ...over
})

// Q16 D4 Q4 D16 R10 C10, in the server's own form: x then y from the top left.
const MOVES = [
  [15, 3],
  [3, 15],
  [15, 15],
  [3, 3],
  [16, 9],
  [2, 9]
]

/**
 * A fake reply: refused, never answered, or the body as JSON.
 * @param {import('@playwright/test').Route} route
 * @param {Reach} reach
 * @param {unknown} body
 */
const answer = (route, reach, body) =>
  reach === 'down'
    ? route.abort('connectionrefused')
    : reach === 'hang'
      ? undefined
      : route.fulfill({
          status: 200,
          contentType: 'application/json',
          headers: { 'access-control-allow-origin': '*' },
          body: JSON.stringify(body)
        })

/**
 * Fake OGS: the learner's account, its ended games, and the records of the two games.
 * @param {import('@playwright/test').Route} route
 * @param {Reach} server
 * @param {Net['games']} games
 */
function ogs(route, server, games) {
  const url = new URL(route.request().url())
  const p = url.pathname
  if (p === '/api/v1/players') {
    // the exact name keeps capitals; the search by start ignores them, as the server's do
    const name = url.searchParams.get('username')
    const start = url.searchParams.get('username__istartswith')?.toLowerCase()
    return answer(route, server, {
      results:
        name === USER.user || (start !== undefined && USER.user.startsWith(start))
          ? [{ id: USER.id, username: USER.user, ratings: { overall: { rating: 900, deviation: 120 } } }]
          : []
    })
  }
  if (p === `/api/v1/players/${USER.id}/games`)
    return answer(route, server, {
      results: games === 'rated' ? [{ id: GAME, ended: new Date().toISOString() }] : []
    })
  if (p === `/api/v1/games/${GAME}`) return answer(route, server, detail(GAME, MOVES, {}))
  if (p === `/api/v1/games/${PRACTICE}`)
    return answer(
      route,
      server,
      detail(PRACTICE, [...MOVES, [-1, -1], [-1, -1]], {
        ranked: false,
        players: { black: { username: USER.user }, white: { username: '15k-kgs-humanlike-kata', ui_class: 'bot' } },
        gamedata: {
          moves: [...MOVES, [-1, -1], [-1, -1]],
          initial_player: 'black',
          time_control: { system: 'byoyomi', main_time: 600 }
        }
      })
    )
  return route.fulfill({ status: 404, body: '{}' })
}

/**
 * Fake OGS and the relay for every page of `target` (a page or a browser context).
 * @param {import('@playwright/test').Page | import('@playwright/test').BrowserContext} target
 * @param {Net} [net]
 */
export async function stubNet(target, net = {}) {
  const { server = 'ok', relay = 'down', games = 'rated' } = net
  await target.route('https://online-go.com/**', route => ogs(route, server, games))
  await target.route(`${ENGINE.address}/**`, route => {
    const p = new URL(route.request().url()).pathname
    if (p === '/about') return answer(route, relay, { network: NETWORK.name, checksum: CHECKSUM })
    /** @type {{ id?: string }} */
    const query = JSON.parse(route.request().postData() ?? '{}')
    return answer(route, relay, {
      id: query.id,
      rootInfo: { visits: 500, scoreLead: 1.5 },
      moveInfos: [{ move: 'R14', order: 0, scoreLead: 2, pv: ['R14', 'C14'] }]
    })
  })
}
