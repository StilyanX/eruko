// Hides: step 3 of the Go unit as changes to the record, from "A Self-Study System" (Go, The steps;
// Start; The build, Go, The screens and The checks): a game ended and read from the server, the
// practice game's count by area, and the reading gate 2 makes after every 15 rated games. Pure
// functions, tested in tests/go-game.test.mjs.
import { assert } from '../../../kernel/invariant.logic.js'
import { areaCount, practiceLack, ratedCount, ratedLack } from './game.logic.js'
import { kindOf } from './next.logic.js'
import { EVERY_GAMES, withReading } from './readings.logic.js'

/**
 * Games ended and read from the server: each is kept once, with the rating and deviation read.
 * A practice game that can be counted opens its count; one that cannot says why. When the rated
 * games reach a multiple of 15, gate 2 makes its reading and its screen opens.
 * @param {import('./own.logic.js').Course} course
 * @param {readonly import('./decode.logic.js').Game[]} games
 * @param {{ rating: number, deviation: number }} player
 * @param {string} day
 * @param {boolean} practice
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const gameEnded = (course, games, player, day, practice) => record => {
  const known = new Set(record.games.map(g => g.id))
  const fresh = games.filter(g => !known.has(g.id))
  /** @type {import('./decode.logic.js').GoRecord} */
  let next = {
    ...record,
    games: [...record.games, ...fresh],
    position: {
      ...record.position,
      posted: '',
      read: { day, rating: player.rating, deviation: player.deviation }
    }
  }
  /** @param {import('./decode.logic.js').Item} item */
  const open = item => ({ ...next, position: { ...next.position, open: item } })
  if (practice) {
    const [game] = games
    assert(game, 'A practice game ended is read by its number, so one game was read')
    const lack = practiceLack(game)
    if (lack) return open({ n: 3, step: 'note', text: lack })
    return record.start.counted ? next : open({ n: 3, step: 'count', game: game.id })
  }
  // With the server cleared meanwhile (Set up again), no game can be judged rated: each is kept.
  const { server } = next
  if (!server) return next
  // A reading is owed once the rated games reach or pass a multiple of 15 no reading stands at.
  const count = ratedCount(next)
  /** @param {import('./decode.logic.js').Game} g */
  const lackOf = g => ratedLack(g, server)
  const added = fresh.some(g => !lackOf(g))
  const reached = Math.floor(count / EVERY_GAMES) * EVERY_GAMES
  if (added && reached > 0 && !next.readings.some(x => x.games >= reached && !x.before)) {
    // the reading stands at the multiple of 15 reached, so the reading 45 games before is found by its count
    next = withReading(next, id => kindOf(course, id), {
      date: day,
      games: reached,
      rating: player.rating,
      deviation: player.deviation
    })
    return open({ n: 3, step: 'reading' })
  }
  // A game that is no rated game says why: it is reviewed, and the count does not move.
  const first = fresh[0]
  if (first && !added) return open({ n: 3, step: 'note', text: lackOf(first) })
  return next
}

/**
 * The practice game's count: the learner's count of the board by area against Eruko's count of
 * the server's final board by the same rule. Equal: the game is counted right.
 * @param {import('./decode.logic.js').GameId} id
 * @param {number} typed the learner's count, read by decode.logic.js `readCount`
 * @param {string} day
 * @returns {(record: import('./decode.logic.js').GoRecord) => import('./decode.logic.js').GoRecord}
 */
export const gameCounted = (id, typed, day) => record => {
  const game = record.games.find(g => g.id === id)
  assert(game, `A count is of a game the record holds: ${id}`)
  const count = areaCount(game)
  const right = count !== null && typed === count
  return {
    ...record,
    start: right && !record.start.counted ? { counted: day } : record.start,
    position: {
      ...record.position,
      open: { n: 3, step: 'count', game: id, typed, count, right }
    }
  }
}
