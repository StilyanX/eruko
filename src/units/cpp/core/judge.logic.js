// Hides: how an answer is judged ("A Self-Study System", Programming, The material: A test passes;
// The wording: Check screen; Visuals: Program state; The build, Programming, The checks: Gate 1):
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
  if (reply.compiled && reply.catch2) return catch2Verdict(reply, tests)
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

// Function problems (Exercism's track): the test file's own Catch2 assertions settle a test.

/** @param {string} text XML text with its five entities */
const unescaped = text =>
  text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')

/** @param {string} body @param {string} tag */
const inner = (body, tag) => {
  const m = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`).exec(body)
  return m ? unescaped(m[1] ?? '').trim() : null
}

/**
 * @typedef {Readonly<{ original: string, expanded: string, type: string }>} Assertion One Catch2
 *   assertion as its report gives it: the expression as written, as it expanded, and its macro
 * @typedef {Readonly<{ name: string, success: boolean, failed: Assertion | null, error: string, assertions: readonly (Assertion & { ok: boolean })[] }>} CaseResult
 *   One test case of a Catch2 XML report: passed or not, its first failed assertion, an exception
 *   or fatal error it ended on, and its assertions in the order they ran (those that held are
 *   reported with -s only)
 */

/**
 * The test cases of Catch2 v2's XML report, in the order they ran. A report a crash cut short
 * holds only the cases it finished.
 * @param {string} xml
 * @returns {CaseResult[]}
 */
export function catch2Cases(xml) {
  /** @type {CaseResult[]} */
  const out = []
  for (const m of xml.matchAll(/<TestCase name="([^"]*)"[^>]*>([\s\S]*?)<\/TestCase>/g)) {
    const body = m[2] ?? ''
    const all = [
      ...body.matchAll(
        /<Expression success="(true|false)" type="([A-Z_]+)"[^>]*>([\s\S]*?)<\/Expression>/g
      )
    ].map(e => ({
      ok: e[1] === 'true',
      type: e[2] ?? '',
      original: inner(e[3] ?? '', 'Original') ?? '',
      expanded: inner(e[3] ?? '', 'Expanded') ?? ''
    }))
    const failed = all.find(a => !a.ok)
    const error = inner(body, 'Exception') ?? inner(body, 'FatalErrorCondition') ?? ''
    out.push({
      name: unescaped(m[1] ?? ''),
      success: /<OverallResult success="true"/.test(body),
      failed: failed
        ? { original: failed.original, expanded: failed.expanded, type: failed.type }
        : null,
      error,
      assertions: all
    })
  }
  return out
}

/**
 * The two sides of an expression's top-level `==`, or null when it has none.
 * @param {string} text
 */
function sidesOf(text) {
  let depth = 0
  let quote = ''
  for (let i = 0; i < text.length - 1; i++) {
    const c = text[i]
    if (quote) {
      if (c === '\\') i++
      else if (c === quote) quote = ''
    } else if (c === '"' || c === "'") quote = c
    else if ('([{'.includes(c ?? '')) depth++
    else if (')]}'.includes(c ?? '')) depth--
    else if (
      depth === 0 &&
      c === '=' &&
      text[i + 1] === '=' &&
      text[i - 1] !== '=' &&
      text[i - 1] !== '!' &&
      text[i - 1] !== '<' &&
      text[i - 1] !== '>'
    )
      return [text.slice(0, i).trim(), text.slice(i + 2).trim()]
  }
  return null
}

/**
 * The place of an expression's first top-level comma, or -1.
 * @param {string} text
 */
function topComma(text) {
  let depth = 0
  let quote = ''
  for (let i = 0; i < text.length; i++) {
    const c = text[i] ?? ''
    if (quote) {
      if (c === '\\') i++
      else if (c === quote) quote = ''
    } else if (c === '"' || c === "'") quote = c
    else if ('([{'.includes(c)) depth++
    else if (')]}'.includes(c)) depth--
    else if (c === ',' && depth === 0) return i
  }
  return -1
}

/** Whether a side reads as a value the test names, not a call of your code. @param {string} side */
const valueLike = side =>
  /^(-?\d|"|'|\{|true\b|false\b|nullptr\b|std::(vector|string|array|map|set|pair|optional|nullopt)|expected\w*\b|[A-Z_][A-Z0-9_]*\b)/.test(
    side
  )

/**
 * Which side of `a == b` is the call and which the value it must give: the side that reads as a
 * value (a literal, a braced list, a library type, a name such as `expected`); with neither or
 * both, the side with no call; else the right-hand side is the call (the track writes
 * `REQUIRE(expected == call)`).
 * @param {readonly string[]} sides
 * @returns {0 | 1} the index of the call
 */
const callSide = ([a = '', b = '']) => {
  if (valueLike(a) !== valueLike(b)) return valueLike(a) ? 1 : 0
  if (a.includes('(') !== b.includes('(')) return a.includes('(') ? 0 : 1
  return 1
}

/**
 * An assertion as the screen shows it: Call, Expected, and, from its expansion, Given.
 * @param {string} type the macro, REQUIRE or CHECK and their _FALSE and _THROWS forms
 * @param {string} original
 * @param {string} [expanded] '' before any run
 * @returns {Readonly<{ call: string, expected: string, given: string }>}
 */
export function callOf(type, original, expanded = '') {
  const negated =
    /_FALSE$/.test(type) ||
    (/^(REQUIRE|CHECK)$/.test(type) && /^!\s*[\w:(]/.test(original) && !sidesOf(original))
  if (/_THROWS_AS$/.test(type)) {
    const at = original.lastIndexOf(',')
    return {
      call: original.slice(0, at).trim(),
      expected: `throws ${original.slice(at + 1).trim()}`,
      given: expanded ? 'throws no such exception' : ''
    }
  }
  if (/_THROWS$/.test(type))
    return { call: original, expected: 'throws', given: expanded ? 'throws nothing' : '' }
  if (/_NOTHROW$/.test(type))
    return { call: original, expected: 'throws nothing', given: expanded ? 'throws' : '' }
  // REQUIRE_THAT(call, matcher): the matcher's own words are the value it must give
  if (/_THAT$/.test(type)) {
    const at = topComma(original)
    return {
      call: at < 0 ? original : original.slice(0, at).trim(),
      expected: at < 0 ? '' : original.slice(at + 1).trim(),
      given: expanded
    }
  }
  const sides = sidesOf(original)
  if (sides) {
    const c = callSide(sides)
    const given = sidesOf(expanded)
    // REQUIRE_FALSE(a == b): the call must give anything but the value it names
    const named = sides[1 - c] ?? ''
    return {
      call: sides[c] ?? '',
      expected: negated ? `not ${named}` : named,
      given: given ? (given[c] ?? '') : expanded
    }
  }
  const call = negated ? original.replace(/^!\s*/, '') : original
  return {
    call,
    expected: negated ? 'false' : 'true',
    given: expanded ? (negated ? 'true' : 'false') : ''
  }
}

/**
 * A function problem's submit judged from Catch2's XML report: a test is a test case, passed when
 * it ran and every assertion in it held; the first failed one shows as Call, Expected, Given (the
 * Failed fields input, expected, given), or the exception it ended on.
 * @param {import('./decode.logic.js').RunnerResult} reply
 * @param {readonly import('./decode.logic.js').Test[]} tests one per test case, `input` its name
 * @returns {import('./decode.logic.js').Verdict}
 */
export function catch2Verdict(reply, tests) {
  const cases = reply.compiled ? catch2Cases(reply.runs[0]?.stdout ?? '') : []
  const passes = tests.map(t => cases.find(c => c.name === t.input)?.success === true)
  const at = passes.indexOf(false)
  const test = tests[at]
  const c = test ? cases.find(x => x.name === test.input) : undefined
  const shown = c?.failed ? callOf(c.failed.type, c.failed.original, c.failed.expanded) : null
  return {
    passed: passes.filter(Boolean).length,
    total: tests.length,
    failed: test
      ? shown
        ? { input: shown.call, expected: shown.expected, given: shown.given, error: c?.error ?? '' }
        : {
            input: '',
            expected: '',
            given: '',
            error:
              c?.error ||
              `The tests stopped before the case "${test.input}" finished.${reply.compiled && reply.runs[0]?.stderr ? `\n${reply.runs[0].stderr}` : ''}`
          }
      : null,
    error: reply.compiled ? '' : reply.error
  }
}
