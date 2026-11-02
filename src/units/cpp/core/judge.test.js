// Judging an answer (src/units/cpp/core/judge.logic.js): a test passes after the end-of-line spaces
// and the final blank lines are dropped; a submit's verdict; a trace answer; a Parsons answer
// turned back into its program.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { allPassed, parsonsProgram, samePrint, traceRight, verdictOf } from './judge.logic.js'
import { cutParsons, shuffleBy } from './parsons.logic.js'

/**
 * @template T
 * @param {unknown} value
 * @returns {T}
 */
const typed = value => /** @type {T} */ (value)

test('a test passes once the spaces at the ends of lines and the final blank lines of both are dropped', () => {
  assert.equal(samePrint('2 \n', '2'), true)
  assert.equal(samePrint('1\n2\n\n\n', '1 \n2\n'), true)
  assert.equal(samePrint('1\r\n2\r\n', '1\n2\n'), true)
  assert.equal(samePrint(' 2\n', '2\n'), false, 'a space at the start of a line counts')
  assert.equal(samePrint('1\n\n2\n', '1\n2\n'), false, 'a blank line inside counts')
  assert.equal(samePrint('', '\n'), true)
})

const tests = [
  { input: '1\n', output: '1\n' },
  { input: '2\n', output: '4\n' },
  { input: '3\n', output: '9\n' }
]
/** @param {string} stdout */
const out = stdout => ({ stdout, stderr: '', exit: 0, signal: null, finished: true })

test("a submit's verdict: the tests passed of how many, and the first failed test", () => {
  const right = verdictOf({ compiled: true, runs: [out('1\n'), out('4 \n'), out('9')] }, tests)
  assert.deepEqual(right, { passed: 3, total: 3, failed: null, error: '' })
  assert.equal(allPassed(right), true)
  const crash = { stdout: '', stderr: 'terminate called', exit: 134, signal: null, finished: true }
  const wrong = verdictOf({ compiled: true, runs: [out('1\n'), out('5\n'), crash] }, tests)
  assert.deepEqual(wrong, {
    passed: 1,
    total: 3,
    failed: { input: '2\n', expected: '4\n', given: '5\n', error: '' },
    error: ''
  })
  assert.equal(allPassed(wrong), false)
  // a run the runner did not give back fails, with nothing given
  assert.deepEqual(verdictOf({ compiled: true, runs: [out('1\n'), out('4\n')] }, tests).failed, {
    input: '3\n',
    expected: '9\n',
    given: '',
    error: ''
  })
  const broken = verdictOf({ compiled: false, error: "main.cpp:5:5: error: expected ';'" }, tests)
  assert.deepEqual(broken, {
    passed: 0,
    total: 3,
    failed: { input: '1\n', expected: '1\n', given: '', error: '' },
    error: "main.cpp:5:5: error: expected ';'"
  })
  assert.equal(allPassed(verdictOf({ compiled: true, runs: [] }, [])), false)
})

/** @type {import('./decode.logic.js').Trace} */
const trace = typed({
  id: 'T1',
  lines: [],
  columns: ['width', 'height'],
  inputs: ['3 4\n', '5 6\n'],
  rows: [
    { line: 5, values: ['0', ''] },
    { line: 7, values: ['3', '4'] }
  ],
  output: '30\n'
})

test("a trace answer: every row, its line's number first, equal after the spaces at a cell's ends; then the output", () => {
  const cells = [
    ['5', '0', ''],
    [' 7 ', '3 ', ' 4']
  ]
  assert.equal(traceRight(trace, cells, '30'), true)
  assert.equal(traceRight(trace, cells, '31\n'), false)
  assert.equal(
    traceRight(
      trace,
      [
        ['5', '0', ''],
        ['7', '3', '5']
      ],
      '30\n'
    ),
    false
  )
  assert.equal(traceRight(trace, [['5', '0', '']], '30\n'), false, 'a row left out')
  assert.equal(traceRight(trace, [['5'], ['7', '3', '4']], '30\n'), false, 'a cell left out')
})

/** @type {import('./decode.logic.js').Problem} */
const problem = typed({
  id: '1.01',
  kind: 1,
  source: 'aether',
  statement: [],
  examples: [],
  tests: [],
  solution: {
    lines: [
      '#include <iostream>',
      '#include <print>',
      '',
      'int main() {',
      '    int a {0};',
      '    std::cin >> a;',
      '    std::println("{}", a * a);',
      '}'
    ],
    frame: [0, 1, 3, 7],
    labels: [],
    blanks: [
      { line: 5, from: 16, to: 17 },
      { line: 6, from: 23, to: 28 }
    ]
  }
})

test('a Parsons answer is the program it stands for: the frame in place, the lines in the order put, the blanks filled', () => {
  const code = problem.solution
  const p = cutParsons(problem, shuffleBy('1.01'))
  const inOrder = [...p.lines.map(l => l.at)].sort((x, y) => x - y)
  assert.equal(parsonsProgram(code, inOrder, ['a', 'a * a']), `${code.lines.join('\n')}\n`)
  assert.equal(
    parsonsProgram(code, [5, 4, 6], ['b']),
    [
      '#include <iostream>',
      '#include <print>',
      '',
      'int main() {',
      '    std::cin >> b;',
      '    int a {0};',
      '    std::println("{}", );',
      '}',
      ''
    ].join('\n')
  )
  assert.throws(() => parsonsProgram(code, [4, 5], []), /every line that moves/)
  assert.throws(() => parsonsProgram(code, [4, 4, 5], []), /every line that moves/)
})
