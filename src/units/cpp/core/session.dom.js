// Hides: the C++ unit's one interpreter: an event from a screen goes
// through the session's pure step (session.logic.js), the record it returns is set in the store,
// and the effects it returns are run: a program run on the runner, its reply sent back as the
// next event, every run stopped, a line said to a screen reader. It also runs the runtime change
// step: every reference solution against its tests under a compiler the runner newly reports.
// No other code writes the C++ record.
import { unreachable } from '../../../kernel/invariant.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'
import { createStore } from '../../../record/store.js'
import { today } from '../../../parts/clock.dom.js'
import { say } from '../../../parts/say.dom.js'
import { allPassed, verdictOf } from './judge.logic.js'
import { runAsk, runProgram, stopRuns } from './runner.dom.js'
import { cppStore, cppView, loadKind, trackItemNow } from './screens.dom.js'
import { step } from './session.logic.js'

/** True once a run found the runner not answering, until one is answered again. */
export const runnerDown = createStore(false)

/** The runs this page has asked for and not yet heard back. */
let waiting = 0

/**
 * @param {import('./session.logic.js').RunEffect} effect
 */
async function runOn(effect) {
  const { item, code, tests, why } = effect
  waiting += 1
  const reply = await runProgram(code, tests)
  waiting -= 1
  runnerDown.set(!reply.ok)
  if (!reply.ok) send({ t: 'runner-down', item })
  else if (why === 'submit')
    send({ t: 'submitted', item, code, tests, reply: reply.value, day: today() })
  else send({ t: 'examples-ran', item, reply: reply.value })
}

/**
 * Each ask of a track submit run in turn; the replies sent back together.
 * @param {import('./session.logic.js').TrackRunEffect} effect
 */
async function trackRuns(effect) {
  const { item, code, asks } = effect
  const content = trackItemNow(item)
  waiting += 1
  /** @type {import('./track.logic.js').Reply[]} */
  const replies = []
  for (const ask of asks) {
    const reply = await runAsk(ask)
    if (!reply.ok) {
      waiting -= 1
      runnerDown.set(true)
      send({ t: 'track-down', item })
      return
    }
    replies.push(reply.value)
  }
  waiting -= 1
  runnerDown.set(false)
  if (content && 'reference' in content)
    send({ t: 'track-ran', item, code, content, replies, day: today() })
}

/**
 * @param {import('./session.logic.js').Effect} effect
 */
function run(effect) {
  switch (effect.t) {
    case 'say':
      say(effect.text)
      return
    case 'stop':
      void stopRuns()
      return
    case 'run':
      void runOn(effect)
      return
    case 'track-run':
      void trackRuns(effect)
      return
    default:
      unreachable(effect)
  }
}

/**
 * Run one event: the step, the record set, then its effects.
 * @param {import('./session.logic.js').Event} event
 */
export function send(event) {
  const { course, record } = cppView()
  const { state, effects } = step(course, record, event)
  cppStore().set(state)
  for (const effect of effects) run(effect)
}

/**
 * A run the record holds that this page never asked for, as after a reload, is let go: nothing
 * answers it any more.
 */
export function settle() {
  const { open } = cppView().record.position
  if (waiting === 0 && open && 'running' in open && open.running)
    send(open.step === 'track' ? { t: 'track-lost', item: open } : { t: 'run-lost', item: open })
}

/**
 * The runtime change step: every reference solution of the course run against its examples and
 * hidden tests under the compiler the runner now reports; then the new runtime is stored with the
 * problems whose solution failed, which are not used. `onCount` hears each solution done, of how
 * many. Fails when a kind's file does not arrive or the runner stops answering; nothing is stored.
 * @param {import('./decode.logic.js').About} about
 * @param {(done: number, of: number) => void} onCount
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<null, 'unloaded' | 'unanswered'>>}
 */
export async function checkRuntime(about, onCount) {
  const { course } = cppView()
  const of = course.kinds.reduce((n, k) => n + k.problems.length, 0)
  /** @type {import('./decode.logic.js').ProblemId[]} */
  const refused = []
  let done = 0
  for (const kind of course.kinds) {
    const content = await loadKind(kind.id)
    if (content === 'failed') return fail('unloaded')
    for (const id of kind.problems) {
      const problem = content.problems[id]
      if (!problem) continue
      const tests = [...problem.examples, ...problem.tests]
      const reply = await runProgram(`${problem.solution.lines.join('\n')}\n`, tests)
      if (!reply.ok) return fail('unanswered')
      if (!allPassed(verdictOf(reply.value, tests))) refused.push(id)
      onCount(++done, of)
    }
  }
  send({ t: 'runtime-checked', about, refused })
  return ok(null)
}
