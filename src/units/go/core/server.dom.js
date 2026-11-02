// Hides: how the server's public record is read, by the user name with no login ("A Self-Study
// System", The build, Go, The engine and the server): the rating and its deviation, and the games,
// each with its record. The user name is the one thing sent. Each read returns its value or why
// it failed (decode.logic.js `ServerError`); the screens say each failure in one sentence
// (`serverSays`). Tested on stored replies in tests/go-game.test.mjs.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'
import { detailOf, endedOf, playersOf } from './decode.logic.js'

const API = 'https://online-go.com/api/v1'

/**
 * @typedef {{ ok: boolean, status?: number, json: () => Promise<unknown> }} Reply What of a fetch's answer is read
 * @typedef {(url: string, init?: RequestInit) => Promise<Reply>} Get
 */

/** The server's own address, as a game screen links to it. */
export const SITE = 'https://online-go.com'

const WAIT_MS = 20000

/**
 * What the server said, in one sentence for the learner.
 * @param {import('./decode.logic.js').ServerError} error
 */
export function serverSays(error) {
  switch (error) {
    case 'down':
      return 'The server did not answer. Check your connection, then press again.'
    case 'none':
      return 'The server has no such record.'
    case 'private':
      return 'The server keeps that record private, so Eruko cannot read it.'
    case 'no-player':
      return 'The server knows no player of that name.'
    case 'no-game':
      return "Eruko cannot read the server's record of that game."
    default:
      return unreachable(error)
  }
}

/**
 * One reply of the server, as JSON.
 * @param {string} path
 * @param {Get} get
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<unknown, import('./decode.logic.js').ServerError>>}
 */
async function read(path, get) {
  /** @type {Reply} */
  let r
  try {
    r = await get(`${API}${path}`, { signal: AbortSignal.timeout(WAIT_MS) })
  } catch {
    return fail('down')
  }
  if (r.status === 404) return fail('none')
  if (r.status === 403) return fail('private')
  if (!r.ok) return fail('down')
  try {
    return ok(await r.json())
  } catch {
    return fail('down')
  }
}

/**
 * A player by user name, in any capitals, with the name as the server writes it.
 * @param {string} user
 * @param {Get} [get]
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').Player, import('./decode.logic.js').ServerError>>}
 */
export async function readPlayer(user, get = fetch) {
  const name = encodeURIComponent(user)
  const exact = await read(`/players?username=${name}`, get)
  if (!exact.ok) return exact
  const [found] = playersOf(exact.value)
  if (found) return ok(found)
  // The server matches a name with its capitals: a name typed in other capitals is found among
  // the names that start with it in any capitals.
  const near = await read(`/players?username__istartswith=${name}`, get)
  if (!near.ok) return near
  const match = playersOf(near.value).find(x => x.user.toLowerCase() === user.toLowerCase())
  return match ? ok(match) : fail('no-player')
}

/**
 * The ids of a player's games that have ended, the last ended first.
 * @param {number} id
 * @param {Get} [get]
 */
export async function readEnded(id, get = fetch) {
  const list = await read(`/players/${id}/games?ordering=-ended&page_size=20`, get)
  return list.ok ? ok(endedOf(list.value)) : list
}

/**
 * One game's record, as game.logic.js `gameOf` reads it.
 * @param {import('./decode.logic.js').GameId} id
 * @param {Get} [get]
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').GameDetail, import('./decode.logic.js').ServerError>>}
 */
export async function readGame(id, get = fetch) {
  const reply = await read(`/games/${id}`, get)
  if (!reply.ok) return reply
  const detail = detailOf(reply.value)
  return detail.ok ? detail : fail('no-game')
}
