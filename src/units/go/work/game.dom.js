// Hides: what the work list's game step says: how to post the practice game or a rated one, the
// settings of a rated game as the server's challenge form names them, and what a posted challenge
// waits on. Each term is explained where it first appears: until one rated game is on the record.
import { PRACTICE } from '../core/game.logic.js'
import { rankRange } from '../core/readings.logic.js'
import { h } from '../../../parts/view.dom.js'
import { ogs } from '../core/screens.dom.js'

/** The end of a game, with the one term it needs explained where it first appears. */
const GAME_END =
  "After two passes the server marks the stones it judges dead. Dead stones are stones that could not avoid capture if play went on. They come off the board before the count. Check each group, marked or not. If the server is wrong about a group, change its mark. If you are not sure, leave the server's mark as it is. If you and your opponent still disagree, resume play and play the group out."

/** The practice game: the bot challenged by name, its settings, and how it ends. */
export const practiceText = () => [
  h(
    'p',
    null,
    'Play one practice game on ',
    ogs(),
    ' when you have an hour free. Challenge the bot ',
    PRACTICE.bot,
    ' by name to a private game with these settings:'
  ),
  h(
    'ul',
    { class: 'go-settings' },
    h('li', null, 'not ranked'),
    h('li', null, '19×19'),
    h('li', null, 'byo-yomi: 10 minutes main time and five periods of 30 seconds'),
    h('li', null, 'AGA rules')
  ),
  h(
    'p',
    null,
    'Byo-yomi: when the main time is gone, you make each move within 30 seconds. A slower move uses up one of the five periods. If the server refuses a setting, take the nearest it accepts. Play to the end, which is two passes. Then count the board by area for your colour.'
  ),
  h('p', null, GAME_END)
]

/**
 * The rank range a rated game is posted for, in words, from the rating last read.
 * @param {import('../core/decode.logic.js').ServerRead | null} read
 * @param {boolean} reading whether the server is being read
 */
export function rankText(read, reading) {
  const range = read && Number.isFinite(read.rating) ? rankRange(read.rating) : null
  if (range) return `rank range: ${range.lower} to ${range.upper}`
  return reading
    ? 'rank range: Eruko is reading the server'
    : 'rank range: Eruko could not read your rating, because the server did not answer'
}

/**
 * The settings of a rated game, in full, each term explained on the first rated game.
 * @param {string} rank the rank range in words
 * @param {boolean} first whether no rated game is on the record yet
 */
export const ratedList = (rank, first) =>
  h(
    'ul',
    { class: 'go-settings', key: 'rated' },
    h('li', null, 'ranked', first && ' (the game counts for the rating)'),
    h('li', null, 'even', first && ' (no handicap)'),
    h('li', null, '19×19'),
    h(
      'li',
      null,
      '30 minutes each in absolute time with no overtime',
      first &&
        ' (absolute time: the clock only runs down, and a player whose 30 minutes end loses on time)'
    ),
    h('li', null, 'AGA rules'),
    h('li', null, 'automatic komi', first && ' (the server sets it)'),
    h('li', null, rank)
  )

/**
 * What a rated game asks of the player who accepts, and, on the first rated game, how it ends.
 * @param {boolean} first whether no rated game is on the record yet
 */
export const ratedText = first => [
  h(
    'p',
    null,
    'The first player who accepts the challenge plays. Play no other game on that account. A bot game is never a rated game. Neither is a handicap game',
    first && ' (a game where one side starts with extra stones)',
    '. If a bot accepts, or the game has a handicap, play it to its end and press "Game ended".'
  ),
  first && [
    h('p', { key: 'end' }, GAME_END),
    h(
      'p',
      { key: 'resign' },
      "Resign when you choose. The result counts. If your opponent leaves or runs out of time, the server's result stands."
    )
  ]
]

/** A posted challenge no one has accepted: the list goes on, and this stays under the item open. */
export const postedText = () =>
  h(
    'p',
    null,
    'You posted a challenge on ',
    ogs(),
    ". Look at the server's page each time you finish an item. When someone has accepted, finish the item above and play the game to its end. If no one has accepted and you no longer have an hour free, withdraw the challenge."
  )
