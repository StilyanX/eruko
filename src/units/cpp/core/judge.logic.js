// Hides: how an answer is judged ("A Self-Study System", Programming, The material: A test passes;
// The wording: Submit screen; Visuals: Program state; The build, Programming, The checks: Gate 1):
// a test passes when the output equals the stored one after the spaces at the ends of its lines
// and its final blank lines are dropped from both; a submit passes when every test does; a trace
// answer is right when every typed cell equals the recorded one after the spaces at its ends are
// dropped and the second input's output passes by the same rule. A Parsons answer is turned back
// into the program it stands for before it is run.
import { assert } from '../../../kernel/invariant.logic.js'
import { piecesOf, staysInPlace } from './parsons.logic.js'

/**
 * An output as a test compares it: its line ends with no spaces, and no blank line at its end.
 * @param {string} output
 */
const plain = output =>
  output
    .split('\n')
    .map(line => line.replace(/[ \t\r]+$/, ''))
    .join('\n')
    .replace(/\n+$/, '')

/**
 * A test passes: the output given equals the output stored, by the rule above.
 * @param {string} given
 * @param {string} expected
 */
export const samePrint = (given, expected) => plain(given) === plain(expected)

/**
 * A submit judged from the runner's reply: the tests passed of how many, and the first failed
 * test's input, the output expected and the output given. A program that did not compile
 * passes none, and carries the compiler's error text.
 * @param {import('./decode.logic.js').RunnerResult} reply
 * @param {readonly import('./decode.logic.js').Test[]} tests the examples, then the hidden tests
 * @returns {import('./decode.logic.js').Verdict}
 */
export function verdictOf(reply, tests) {
  const runs = reply.compiled ? reply.runs : []
  const passes = tests.map((t, i) => {
    const run = runs[i]
    return run !== undefined && samePrint(run.stdout, t.output)
  })
  const at = passes.indexOf(false)
  const test = tests[at]
  const run = runs[at]
  return {
    passed: passes.filter(Boolean).length,
    total: tests.length,
    failed: test
      ? {
          input: test.input,
          expected: test.output,
          given: run?.stdout ?? '',
          error: run?.stderr ?? ''
        }
      : null,
    error: reply.compiled ? '' : reply.error
  }
}

/**
 * Gate 1 for a submit: every test passed.
 * @param {import('./decode.logic.js').Verdict} verdict
 */
export const allPassed = verdict => verdict.total > 0 && verdict.passed === verdict.total

/**
 * Gate 1 for a trace item: every row as typed, its line's number first and then each column's
 * value, equals the recorded row once the spaces at the ends of each cell are dropped, and the
 * output typed for the second input passes as a test would.
 * @param {import('./decode.logic.js').Trace} trace
 * @param {readonly (readonly string[])[]} cells
 * @param {string} output
 */
export const traceRight = (trace, cells, output) =>
  cells.length === trace.rows.length &&
  trace.rows.every((row, i) =>
    [String(row.line), ...row.values].every((value, j) => (cells[i]?.[j] ?? '').trim() === value)
  ) &&
  samePrint(output, trace.output)

/**
 * The program a Parsons answer stands for: the lines that stay in place where they stand, and
 * into the other places, in order, the lines as the learner put them, each blank filled with
 * what was typed in it.
 * @param {import('./decode.logic.js').Code} code
 * @param {readonly number[]} order the lines put in order, by their index in the solution
 * @param {readonly string[]} fills what was typed in each blank, by the blank's index
 */
export function parsonsProgram(code, order, fills) {
  const moved = code.lines.flatMap((_, at) => (staysInPlace(code, at) ? [] : [at]))
  assert(
    order.length === moved.length && moved.every(at => order.includes(at)),
    'A Parsons answer puts every line that moves, once each'
  )
  let next = 0
  const lines = code.lines.map((line, at) => {
    if (staysInPlace(code, at)) return line
    const from = order[next++] ?? at
    return piecesOf(code, from)
      .map(p => (typeof p === 'string' ? p : (fills[p.blank] ?? '')))
      .join('')
  })
  return `${lines.join('\n')}\n`
}
