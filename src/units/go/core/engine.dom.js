// Hides: the way to the engine. KataGo's analysis engine reads one line of JSON per query and
// answers on its own output. The relay (scripts/go-relay.mjs) on the same computer passes those
// lines to and from one fixed local address. Each call returns its answer or why there is none
// (decode.logic.js `EngineError`). Tested against a stand-in engine in tests/go-engine.test.mjs.
import { fail, ok } from '../../../kernel/result.logic.js'
import { aboutOf, answerOf } from './decode.logic.js'
import { COLUMNS } from './rules.logic.js'

/** The relay is not running: nothing answers at its address. Said on the Start page, whose step 4 holds the command. */
export const RELAY_DOWN =
  'The engine did not answer. Start it as step 4 under What you need says, then press Check the engine again.'

/** How long a call may wait: the relay's word of itself, in seconds; a query at the engine's setting, in minutes. */
const ABOUT_WAIT_MS = 20000
const QUERY_WAIT_MS = 20 * 60000

/**
 * A call to the relay, as JSON: 'down' when nothing answers, 'unanswered' when what answers is
 * no JSON.
 * @param {string} url
 * @param {RequestInit} init
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<{ ok: boolean, json: unknown }, 'down' | 'unanswered'>>}
 */
async function call(url, init) {
  /** @type {Response} */
  let r
  try {
    r = await fetch(url, init)
  } catch {
    return fail('down')
  }
  try {
    return ok({ ok: r.ok, json: await r.json() })
  } catch {
    return fail('unanswered')
  }
}

/**
 * What the relay says of itself: the network file's name and checksum.
 * @param {string} address
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').About, 'down' | 'unanswered'>>}
 */
export async function aboutEngine(address) {
  const r = await call(`${address}/about`, { signal: AbortSignal.timeout(ABOUT_WAIT_MS) })
  if (!r.ok) return r
  return r.value.ok ? aboutOf(r.value.json) : fail('unanswered')
}

/**
 * One query to the engine, and its answer; 'refused' when the engine was reached and would not
 * read the query, and asking again does not help.
 * @param {string} address
 * @param {import('./review.logic.js').Query} query
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<import('./decode.logic.js').Answer, import('./decode.logic.js').EngineError>>}
 */
export async function askEngine(address, query) {
  const r = await call(`${address}/query`, {
    method: 'POST',
    body: JSON.stringify(query),
    signal: AbortSignal.timeout(QUERY_WAIT_MS)
  })
  if (!r.ok) return r
  const answer = answerOf(r.value.json)
  return r.value.ok || !answer.ok ? answer : fail('unanswered')
}

/** The computer serves when one game's pass takes under a day, at about 1.3 visits a second. */
export const SERVES = 1.3

/**
 * The speed test: one query at the engine's setting, as visits a second. The board holds four
 * stones on new random points each time, because the engine keeps what it has read and would
 * answer a board it has met before at once, which reads far too fast.
 * @param {Pick<import('./decode.logic.js').Engine, 'rules' | 'komi' | 'visits' | 'address'>} engine
 */
export async function visitsASecond(engine) {
  /** @type {Set<string>} */
  const points = new Set()
  while (points.size < 4)
    points.add(`${COLUMNS[Math.floor(Math.random() * 19)]}${1 + Math.floor(Math.random() * 19)}`)
  /** @type {import('./review.logic.js').Move[]} */
  const moves = [...points].map((p, k) => [k % 2 ? 'W' : 'B', p])
  /**
   * @param {string} id
   * @param {number} maxVisits
   * @param {number} turn
   * @returns {import('./review.logic.js').Query}
   */
  const query = (id, maxVisits, turn) => ({
    id,
    moves,
    rules: engine.rules,
    komi: engine.komi,
    boardXSize: 19,
    boardYSize: 19,
    maxVisits,
    analyzeTurns: [turn]
  })
  // One visit on the empty board first, because an engine that has just started loads its
  // network before it reads, and that wait is not its speed.
  const warm = await askEngine(engine.address, query(`warm-${Date.now()}`, 1, 0))
  if (!warm.ok) return warm
  const startedMs = Date.now()
  const answer = await askEngine(engine.address, query(`speed-${startedMs}`, engine.visits, moves.length))
  if (!answer.ok) return answer
  const seconds = Math.max(0.001, (Date.now() - startedMs) / 1000)
  return ok(answer.value.visits / seconds)
}
