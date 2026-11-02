// Hides: the Go unit's one interpreter: an event from a screen or a task
// behind it goes through the session's pure step (session.logic.js), the record it returns is
// set in the store, and the effects it returns are run. No other code writes the Go record.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { say } from '../../../parts/say.dom.js'
import { goStore, goView } from './screens.dom.js'
import { step } from './session.logic.js'

/**
 * @param {import('./session.logic.js').Effect} effect
 */
function run(effect) {
  switch (effect.t) {
    case 'say':
      say(effect.text)
      return
    default:
      unreachable(effect.t)
  }
}

/**
 * Run one event: the step, the record set, then its effects.
 * @param {import('./session.logic.js').Event} event
 */
export function send(event) {
  const { state, effects } = step(goView().record, event)
  goStore().set(state)
  for (const effect of effects) run(effect)
}
