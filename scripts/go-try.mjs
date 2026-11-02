#!/usr/bin/env node
// Runs the Go unit's engine steps for real, outside the page: it reads a player's last ended
// 19×19 game of more than 30 moves from the server's public record, sends every position of it
// through the relay to the engine once (the pass), and prints how long the pass took, the review
// list the rule draws, and one typed move judged as the review screen judges it. The relay
// (scripts/go-relay.mjs) must be running with the real engine.
//
//   node scripts/go-try.mjs <a user name on OGS> [the relay's address]
import { ENGINE } from '../src/units/go/core/record.logic.js'
import { askEngine, visitsASecond } from '../src/units/go/core/engine.dom.js'
import { gameOf } from '../src/units/go/core/game.logic.js'
import { serverSays } from '../src/units/go/core/server.dom.js'
import {
  passAnswerOf,
  lossAt,
  passDone,
  points,
  queryFor,
  reviewList,
  typedLoss
} from '../src/units/go/core/review.logic.js'
import { readEnded, readGame, readPlayer } from '../src/units/go/core/server.dom.js'

const [user, address = ENGINE.address] = process.argv.slice(2)
if (!user) {
  console.error('Usage: node scripts/go-try.mjs <a user name on OGS> [the relay address]')
  process.exit(2)
}
const engine = { ...ENGINE, address }

/**
 * A call's value, or the run stopped with why it failed.
 * @template T, E
 * @param {import('../src/kernel/result.logic.js').Result<T, E>} result
 * @param {(error: E) => string} [said]
 * @returns {T}
 */
function must(result, said = e => `The engine gave no answer: ${String(e)}.`) {
  if (result.ok) return result.value
  console.error(said(result.error))
  process.exit(1)
}
const player = must(await readPlayer(user), serverSays)
console.log(
  `${player.user}: rating ${Math.round(player.rating)}, deviation ${Math.round(player.deviation)}`
)
let game = null
for (const { id } of must(await readEnded(player.id), serverSays)) {
  const g = gameOf(must(await readGame(id), serverSays), player.id)
  if (g.size === 19 && g.square && g.moves.length > 30) {
    game = g
    break
  }
}
if (!game) {
  console.log('No ended 19×19 game of more than 30 moves among the last twenty.')
  process.exit(1)
}
console.log(
  `Game ${game.id}: ${game.moves.length} moves, ${game.colour}, ${game.result}, rules ${game.rules}, against ${game.opponent}${game.bot ? ' (a bot)' : ''}`
)
console.log(
  `Visits a second on a board not met before: ${must(await visitsASecond(engine)).toFixed(1)}`
)
const started = Date.now()
/** @type {import('../src/units/go/core/decode.logic.js').PassAnswer[]} */
const pass = []
for (let k = 0; k <= game.moves.length; k++)
  pass.push(passAnswerOf(must(await askEngine(address, queryFor(engine, game, k)))))
game = { ...game, pass }
const seconds = (Date.now() - started) / 1000
console.log(
  `The pass: ${game.moves.length + 1} positions in ${seconds.toFixed(0)} seconds, done ${passDone(game)}`
)
const losses = game.moves.map((_, k) => lossAt(game, k))
const worst = Math.max(...losses)
console.log(
  `Largest loss of a move: ${points(worst)} points; smallest: ${Math.min(...losses).toFixed(1)}`
)
const list = reviewList(game)
console.log(`Review list: ${list.length} of the player's moves`)
for (const e of list)
  console.log(
    `  move ${e.move} ${game.moves[e.move - 1]}: ${points(e.gameLoss)} points lost; engine ${e.best}, line ${e.line.slice(0, 6).join(' ')}`
  )
const e = list[0]
if (e) {
  const answer = must(await askEngine(address, queryFor(engine, game, e.move - 1, e.best)))
  console.log(
    `The engine's own move typed back: ${points(typedLoss(game, e, e.best, answer.scoreLead))} points lost`
  )
}
