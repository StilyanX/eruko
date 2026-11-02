// Hides: the changes to the Go record that are no study step: what the first stage fixes for the
// engine and the server, a course line's change, a forced change of the setting, and Set up
// again. The record's fields are typed and decoded in decode.logic.js ("A Self-Study System",
// The build, Go, The record). Pure functions, tested in tests/go-record.test.mjs.
import { decodeRecord } from './decode.logic.js'
import { passDone, reviewList } from './review.logic.js'

/** What the first stage fixes for the engine: never changed once stored. */
export const ENGINE = {
  network: 'kata1-tf3-b11c768-s11003M-d5973M-7gres',
  visits: 500,
  rules: 'aga',
  komi: 7.5,
  address: 'http://127.0.0.1:8766'
}

/** What the first stage fixes for the server: OGS, AGA rules, 30 minutes each, no overtime, 19×19. */
export const SERVER = { name: 'OGS', rules: 'aga', main: 1800, overtime: 0, size: 19 }

/**
 * The record as every function of the unit reads it (decode.logic.js), with the review list of a
 * game whose every position holds the engine's answer, as the answer that completed the pass
 * would have drawn it: such a game is not left waiting on an engine that has nothing left to read.
 * @param {unknown} raw
 * @param {Parameters<typeof decodeRecord>[1]} course the course it runs on (own.logic.js `courseOf`)
 * @returns {import('./decode.logic.js').GoRecord}
 */
export function recordOf(raw, course) {
  const record = decodeRecord(raw, course)
  return { ...record, games: record.games.map(listOwed) }
}

/**
 * @param {import('./decode.logic.js').Game} game
 * @returns {import('./decode.logic.js').Game}
 */
function listOwed(game) {
  if (game.list || game.reviewed || !passDone(game)) return game
  const list = reviewList(game)
  return { ...game, list, reviewed: list.length === 0 }
}

/**
 * @param {import('./decode.logic.js').CourseLine} c
 * @returns {c is import('./decode.logic.js').KindLine}
 */
const isKindLine = c => 'kind' in c

/**
 * @param {Pick<import('./decode.logic.js').GoRecord, 'course'>} record
 * @param {import('./decode.logic.js').KindId} id
 */
export const kindLine = (record, id) => record.course.filter(isKindLine).find(c => c.kind === id)

/**
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').KindId} id
 * @param {Partial<Pick<import('./decode.logic.js').KindLine, 'opened' | 'retired'>>} change
 * @returns {import('./decode.logic.js').GoRecord}
 */
export const withKind = (record, id, change) => ({
  ...record,
  course: record.course.map(c => (isKindLine(c) && c.kind === id ? { ...c, ...change } : c))
})

/**
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {number} n
 * @param {Pick<import('./decode.logic.js').PartLine, 'done'>} change
 * @returns {import('./decode.logic.js').GoRecord}
 */
export const withPart = (record, n, change) => ({
  ...record,
  course: record.course.map(c => (!isKindLine(c) && c.part === n ? { ...c, ...change } : c))
})

/**
 * A forced change of the engine, the server, the time control or the rules: the first line is
 * cleared, and every reading so far is marked as before the change, never compared against.
 * @param {import('./decode.logic.js').GoRecord} record
 * @returns {import('./decode.logic.js').GoRecord}
 */
export const forcedChange = record => ({
  ...record,
  first: null,
  readings: record.readings.map(x => ({ ...x, before: true }))
})

/**
 * Set up again, for a changed computer or OGS account: the engine and the user name are cleared,
 * and the account set up before is kept as `position.was`, so the first line goes only if another
 * account is stored (`serverStored`). The same network on a new computer reads like for like.
 * @param {import('./decode.logic.js').GoRecord} record
 * @returns {import('./decode.logic.js').GoRecord}
 */
export function setUpAgain(record) {
  const was = record.server?.id ?? record.position.was
  return {
    ...record,
    engine: null,
    server: null,
    position: { ...record.position, ...(was !== undefined ? { was } : {}) }
  }
}

/**
 * The user name stored: an account other than the one set up before is a forced change.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').Server} server
 * @returns {import('./decode.logic.js').GoRecord}
 */
export function serverStored(record, server) {
  const { was, ...position } = record.position
  const changed = was !== undefined && was !== server.id
  return { ...(changed ? forcedChange(record) : record), server, position }
}
