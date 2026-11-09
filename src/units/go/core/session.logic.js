// Hides: what each move of the learner, and each reply the unit waits on, does to the Go record: one pure step from the record and an event to the next
// record and the effects to run, which the unit's one interpreter (session.dom.js) runs. The
// study day and every reply come in with the event. Tested in tests/go-session.test.mjs, which
// replays a stored log of events to its stored record.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { courseOf, withAttempt, withOwn } from './own.logic.js'
import {
  answerItem,
  closeItem,
  exampleRead,
  openItem,
  postGame,
  serverRead,
  skipGame
} from './next.logic.js'
import { gameCounted, gameEnded } from './play.logic.js'
import { ENGINE, SERVER, serverStored, setUpAgain } from './record.logic.js'
import { points, withAnswer, withLoss, withTyped, withUnread } from './review.logic.js'

/**
 * A move of the learner, or a reply the unit waited on: what the step is given.
 * @typedef {Readonly<{ t: 'answer', item: import('./decode.logic.js').Asked, right: boolean, given: string, day: string, answer?: string }>} Answer A problem or a rules item answered, judged by gate 1; `answer` is the right answer, said after Wrong
 * @typedef {Readonly<{ t: 'next' }>} Next "Next" after a verdict, a position, a reading or a note
 * @typedef {Readonly<{ t: 'example-read', kind: import('./decode.logic.js').KindId, day: string }>} ExampleRead A worked example read, or "Begin this kind"
 * @typedef {Readonly<{ t: 'open', item: import('./decode.logic.js').Item }>} Open An item kept open as it now stands: a count to count again or to show
 * @typedef {Readonly<{ t: 'review-move', item: import('./decode.logic.js').Review, typed: string, lossPts: number | null }>} ReviewMove A review position answered or skipped ("none"); its line shows at once
 * @typedef {Readonly<{ t: 'review-loss', game: import('./decode.logic.js').GameId, index: number, typed: string, lossPts: number }>} ReviewLoss The engine's loss for a typed review move
 * @typedef {Readonly<{ t: 'review-left-out', game: import('./decode.logic.js').GameId, index: number }>} ReviewLeftOut A position whose game does not replay, left out
 * @typedef {Readonly<{ t: 'skip-game', day: string }>} SkipGame "Skip the game today" or "Challenge withdrawn"
 * @typedef {Readonly<{ t: 'post-game', day: string }>} PostGame "Challenge posted"
 * @typedef {Readonly<{ t: 'games-ended', games: readonly import('./decode.logic.js').Game[], player: Readonly<{ rating: number, deviation: number }>, day: string, practice: boolean }>} GamesEnded "Game ended": the games read from the server
 * @typedef {Readonly<{ t: 'counted', game: import('./decode.logic.js').GameId, typed: number, day: string }>} Counted The practice game's count typed
 * @typedef {Readonly<{ t: 'server-read', day: string, player: Readonly<{ rating: number, deviation: number }> }>} ServerReadEvent The rating read from the server
 * @typedef {Readonly<{ t: 'pass-answer', game: import('./decode.logic.js').GameId, k: number, answer: import('./decode.logic.js').PassAnswer }>} PassAnswerEvent The engine's answer for a position of a game's pass
 * @typedef {Readonly<{ t: 'pass-unread', game: import('./decode.logic.js').GameId }>} PassUnread A game the engine would not read
 * @typedef {Readonly<{ t: 'own-started', key: import('./decode.logic.js').PositionKey }>} OwnStarted A search on a position of the learner's game started
 * @typedef {Readonly<{ t: 'own-tried', key: import('./decode.logic.js').PositionKey, problem: import('./decode.logic.js').Problem | null }>} OwnTried A position of the learner's game tried, and the problem it made
 * @typedef {Readonly<{ t: 'engine-stored', checksum: string }>} EngineStored The engine checked on the Start page
 * @typedef {Readonly<{ t: 'server-stored', player: import('./decode.logic.js').Player, day: string }>} ServerStored The OGS user name stored on the Start page
 * @typedef {Readonly<{ t: 'set-up-again' }>} SetUpAgain "Clear and set up again"
 * @typedef {Readonly<{ t: 'draft', draft: import('./decode.logic.js').Draft }>} DraftEvent What is typed for the item open, kept until it is answered
 * @typedef {Answer | Next | ExampleRead | Open | ReviewMove | ReviewLoss | ReviewLeftOut | SkipGame | PostGame | GamesEnded | Counted | ServerReadEvent | PassAnswerEvent | PassUnread | OwnStarted | OwnTried | EngineStored | ServerStored | SetUpAgain | DraftEvent} Event
 * @typedef {Readonly<{ t: 'say', text: string }>} Effect What the interpreter runs after the record is set: a line said to a screen reader
 */

/**
 * The record after a learner's study move: the answer judged, an item closed or kept open, a
 * worked example read, a review position answered.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {Answer | Next | ExampleRead | Open | ReviewMove | ReviewLoss | ReviewLeftOut} event
 * @returns {import('./decode.logic.js').GoRecord}
 */
function studied(record, event) {
  const course = courseOf(record.own)
  switch (event.t) {
    case 'answer':
      return answerItem(course, event.item, event.right, event.day, event.given)(record)
    case 'next':
      return closeItem(record)
    case 'example-read':
      return exampleRead(course, event.kind, event.day)(record)
    case 'open':
      return openItem(event.item)(record)
    case 'review-move': {
      const { item, typed, lossPts } = event
      return openItem({ ...item, shown: true })(
        withTyped(item.game, item.index, typed, lossPts)(record)
      )
    }
    case 'review-loss':
      return withLoss(event.game, event.index, event.typed, event.lossPts)(record)
    case 'review-left-out':
      return closeItem(withTyped(event.game, event.index, 'none', null)(record))
    default:
      return unreachable(event)
  }
}

/**
 * The record after a step of the game or the set-up, or a reply the unit waited on.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {Exclude<Event, Answer | Next | ExampleRead | Open | ReviewMove | ReviewLoss | ReviewLeftOut>} event
 * @returns {import('./decode.logic.js').GoRecord}
 */
function replied(record, event) {
  switch (event.t) {
    case 'skip-game':
      return skipGame(event.day)(record)
    case 'post-game':
      return postGame(event.day)(record)
    case 'games-ended': {
      const { games, player, day, practice } = event
      return gameEnded(
        courseOf(record.own),
        games,
        player,
        day,
        practice
      )(record)
    }
    case 'counted':
      return gameCounted(event.game, event.typed, event.day)(record)
    case 'server-read':
      return serverRead(event.day, event.player)(record)
    case 'pass-answer':
      return withAnswer(event.game, event.k, event.answer)(record)
    case 'pass-unread':
      return withUnread(event.game)(record)
    case 'own-started':
      return withAttempt(event.key)(record)
    case 'own-tried':
      return withOwn(event.key, event.problem)(record)
    case 'engine-stored':
      return { ...record, engine: { ...ENGINE, checksum: event.checksum } }
    case 'server-stored':
      return stored(record, event.player, event.day)
    case 'set-up-again':
      return setUpAgain(record)
    case 'draft':
      return { ...record, position: { ...record.position, draft: event.draft } }
    default:
      return unreachable(event)
  }
}

/**
 * The OGS user name stored on the Start page, with the rating read as it was found.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {import('./decode.logic.js').Player} player
 * @param {string} day
 * @returns {import('./decode.logic.js').GoRecord}
 */
function stored(record, player, day) {
  const s = serverStored(record, { ...SERVER, user: player.user, id: player.id, since: day })
  return {
    ...s,
    position: { ...s.position, read: { day, rating: player.rating, deviation: player.deviation } }
  }
}

/** @type {ReadonlySet<Event['t']>} */
const STUDY = new Set([
  'answer',
  'next',
  'example-read',
  'open',
  'review-move',
  'review-loss',
  'review-left-out'
])

/**
 * @param {Event} event
 * @returns {event is Answer | Next | ExampleRead | Open | ReviewMove | ReviewLoss | ReviewLeftOut}
 */
const isStudy = event => STUDY.has(event.t)

/** The moves that answer, close or leave the item open, and so clear what was typed for it. @type {ReadonlySet<Event['t']>} */
const CLEARS = new Set([
  'answer',
  'next',
  'open',
  'review-move',
  'review-left-out',
  'skip-game',
  'games-ended',
  'counted',
  'set-up-again'
])

/**
 * The session's one step: the next record, and the effects to run. A judged answer says its
 * verdict, and the right answer after Wrong; the engine's late loss for a review move is said
 * when it comes; a move that answers the item open clears its draft.
 * @param {import('./decode.logic.js').GoRecord} record
 * @param {Event} event
 * @returns {Readonly<{ state: import('./decode.logic.js').GoRecord, effects: readonly Effect[] }>}
 */
export function step(record, event) {
  const moved = isStudy(event) ? studied(record, event) : replied(record, event)
  const { draft: _typed, ...position } = moved.position
  const state = CLEARS.has(event.t) && moved.position.draft ? { ...moved, position } : moved
  /** @type {Effect[]} */
  const effects =
    event.t === 'answer'
      ? [{ t: 'say', text: event.right ? 'Right.' : ['Wrong.', event.answer].filter(Boolean).join(' ') }]
      : event.t === 'review-loss'
        ? [{ t: 'say', text: `Your move ${event.typed}: ${points(event.lossPts)} points lost.` }]
        : []
  return { state, effects }
}
