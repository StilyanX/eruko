// Hides: the one way to the runner, the small program on this computer that compiles and runs
// every C++ program (scripts/cpp-runner.mjs, at entry.logic.js RUNNER): its word of itself, a
// program run on the inputs of some tests, and every run stopped at once. A call the runner
// refuses or does not answer is a returned failure, never a throw; the screens then say the one
// line that names `npm run cpp-runner`.
import { fail } from '../../../kernel/result.logic.js'
import { runnerAbout, runnerResult } from './decode.logic.js'
import { RUNNER } from './entry.logic.js'

/** What Setup says when the runner does not answer its check. */
export const RUNNER_SETUP =
  "The runner does not answer. Open a terminal in Eruko's folder, start it with npm run cpp-runner, then press Store again."

/** How long the runner's word of itself may take; a run has no time limit. */
const ABOUT_WAIT_MS = 10000

/**
 * A call to the runner, as JSON: 'unanswered' when nothing answers, it refuses, or what answers
 * is no JSON.
 * @param {string} path
 * @param {RequestInit} [init]
 * @returns {Promise<import('../../../kernel/result.logic.js').Result<unknown, 'unanswered'>>}
 */
async function call(path, init) {
  /** @type {Response} */
  let r
  try {
    r = await fetch(`${RUNNER}${path}`, init)
  } catch {
    return fail('unanswered')
  }
  if (!r.ok) return fail('unanswered')
  try {
    return { ok: true, value: await r.json() }
  } catch {
    return fail('unanswered')
  }
}

/** What the runner says of itself: the compiler and the first line it reports. */
export async function aboutRunner() {
  const r = await call('/', { signal: AbortSignal.timeout(ABOUT_WAIT_MS) })
  return r.ok ? runnerAbout(r.value) : r
}

/**
 * A program run as main.cpp on the input of each test, in order; a function problem's header
 * built with its test file and Catch2 instead, every case or (`examples`) the example alone.
 * @param {string} code
 * @param {readonly { input: string }[]} tests
 * @param {import('./decode.logic.js').Fn | null} [fn]
 * @param {boolean} [examples]
 */
export async function runProgram(code, tests, fn = null, examples = false) {
  const r = await call('/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      fn
        ? { files: { [fn.header]: code, [fn.name]: fn.test }, tests: [], kind: 'catch2', examples }
        : {
            files: { 'main.cpp': code },
            tests: tests.map(t => ({ input: t.input })),
            kind: 'program'
          }
    )
  })
  if (!r.ok) return r
  const read = runnerResult(r.value)
  return read.ok && fn && read.value.compiled
    ? { ...read, value: { ...read.value, catch2: /** @type {const} */ (true) } }
    : read
}

/**
 * One ask of the language track: its files, its tests' inputs and its settings (level,
 * sanitizer, device, tool, flags, reports), as track.logic.js builds them.
 * @param {import('./track.logic.js').RunAsk} ask
 */
export async function runAsk(ask) {
  const r = await call('/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...ask, kind: 'program' })
  })
  return r.ok ? runnerResult(r.value) : r
}

/** Every program the runner runs, stopped at once. */
export const stopRuns = () => call('/stop', { method: 'POST' })
