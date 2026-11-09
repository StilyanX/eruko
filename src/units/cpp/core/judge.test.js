// Judging an answer (src/units/cpp/core/judge.logic.js): a test passes after the end-of-line spaces
// and the final blank lines are dropped; a submit's verdict; a trace answer; a Parsons answer
// turned back into its program.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  allPassed,
  parsonsProgram,
  samePrint,
  traceRight,
  verdictOf,
  catch2Cases,
  catch2Verdict,
  callOf
} from './judge.logic.js'
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

// A Catch2 v2 XML report, as the runner returns it for leap with `year % 4 == 0` alone.
const LEAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<Catch name="p">
  <Group name="p">
    <TestCase name="not_divisible_by_4" filename="leap_test.cpp" line="8">
      <OverallResult success="true"/>
    </TestCase>
    <TestCase name="divisible_by_100_not_divisible_by_400" filename="leap_test.cpp" line="19">
      <Expression success="false" type="REQUIRE" filename="leap_test.cpp" line="20">
        <Original>
          !leap::is_leap_year(2100)
        </Original>
        <Expanded>
          false
        </Expanded>
      </Expression>
      <OverallResult success="false"/>
    </TestCase>
    <TestCase name="vector &amp; size" filename="x_test.cpp" line="30">
      <Expression success="false" type="REQUIRE" filename="x_test.cpp" line="31">
        <Original>
          expected == x::f(&quot;ab&quot;)
        </Original>
        <Expanded>
          { 1, 2 } == { 2, 1 }
        </Expanded>
      </Expression>
      <OverallResult success="false"/>
    </TestCase>
  </Group>
</Catch>`

test('a Catch2 report: each test case passed or not, its first failed assertion as Call, Expected, Given', () => {
  const cases = catch2Cases(LEAP_XML)
  assert.deepEqual(
    cases.map(c => [c.name, c.success]),
    [
      ['not_divisible_by_4', true],
      ['divisible_by_100_not_divisible_by_400', false],
      ['vector & size', false]
    ]
  )
})

test('an assertion as a call: the side that reads as a value is Expected, the expansion gives Given', () => {
  assert.deepEqual(callOf('REQUIRE', '!leap::is_leap_year(2100)', 'false'), {
    call: 'leap::is_leap_year(2100)',
    expected: 'false',
    given: 'true'
  })
  assert.deepEqual(callOf('REQUIRE', 'expected == x::f("ab")', '{ 1, 2 } == { 2, 1 }'), {
    call: 'x::f("ab")',
    expected: 'expected',
    given: '{ 2, 1 }'
  })
  assert.deepEqual(callOf('REQUIRE', 'x::f(2) == 4'), { call: 'x::f(2)', expected: '4', given: '' })
  assert.deepEqual(
    callOf('REQUIRE_FALSE', 'triangle::kind(1, 1, 2) == triangle::flavor::equilateral').expected,
    'not triangle::flavor::equilateral'
  )
  assert.deepEqual(
    callOf(
      'REQUIRE_THAT',
      'age.on_earth(), Catch::Matchers::WithinAbs(31.69, accuracy)',
      '31.5 is within 0.01 of 31.69'
    ),
    {
      call: 'age.on_earth()',
      expected: 'Catch::Matchers::WithinAbs(31.69, accuracy)',
      given: '31.5 is within 0.01 of 31.69'
    }
  )
  assert.deepEqual(callOf('REQUIRE_FALSE', 'x::ok(3)'), {
    call: 'x::ok(3)',
    expected: 'false',
    given: ''
  })
  assert.deepEqual(callOf('REQUIRE_THROWS_AS', 'x::f(-1), std::domain_error'), {
    call: 'x::f(-1)',
    expected: 'throws std::domain_error',
    given: ''
  })
})

test("a function problem's check: a test is a test case, passed when every assertion in it held", () => {
  const tests = [
    { input: 'not_divisible_by_4', output: '' },
    { input: 'divisible_by_100_not_divisible_by_400', output: '' },
    { input: 'missing', output: '' }
  ]
  const v = catch2Verdict(
    {
      compiled: true,
      runs: [{ stdout: LEAP_XML, stderr: '', exit: 1, signal: null, finished: true }]
    },
    tests
  )
  assert.deepEqual([v.passed, v.total], [1, 3])
  assert.deepEqual(v.failed, {
    input: 'leap::is_leap_year(2100)',
    expected: 'false',
    given: 'true',
    error: ''
  })
  // a case the report never reached (a crash cut it short) is not passed
  assert.equal(
    catch2Verdict(
      {
        compiled: true,
        runs: [{ stdout: LEAP_XML, stderr: '', exit: 1, signal: null, finished: true }]
      },
      [
        { input: 'not_divisible_by_4', output: '' },
        { input: 'missing', output: '' }
      ]
    ).passed,
    1
  )
  assert.equal(
    catch2Verdict({ compiled: false, error: 'leap.h:3:1: error: x' }, tests).error,
    'leap.h:3:1: error: x'
  )
})
