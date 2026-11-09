// The C++ unit's sources and tools: scripts/lib/cpp-course.mjs reads the source format and fails
// on each check's breach (tests/fixtures/cpp/good is a kind that passes; each bad case is that
// kind with one edit), course.gen.js matches the sources, and scripts/cpp-runner.mjs compiles,
// runs and stops a program.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { buildCourse, compared, courseShape, readCourse } from '../scripts/lib/cpp-course.mjs'
import { KINDS, SECTIONS } from '../src/units/cpp/core/course.gen.js'

const GOOD = path.join(import.meta.dirname, 'fixtures', 'cpp', 'good')
const KIND = 'kinds/01-sum/kind.md'
const PROBLEM = 'kinds/01-sum/1.01.md'
const hasCompiler = spawnSync('g++', ['--version']).status === 0
const hasGdb =
  spawnSync('gdb', ['--version']).status === 0 || spawnSync('nix-shell', ['--version']).status === 0
const noCompiler = hasCompiler ? false : 'g++ is not on the PATH'
const noTracer = !hasCompiler ? 'g++ is not on the PATH' : hasGdb ? false : 'neither gdb nor nix-shell is on the PATH'

/**
 * The good fixture copied, with each [file, from, to] edit made; the copy's folder.
 * @param {[string, string, string][]} edits
 */
function variant(edits) {
  const dir = mkdtempSync(path.join(tmpdir(), 'aether-cpp-fixture-'))
  cpSync(GOOD, dir, { recursive: true })
  for (const [file, from, to] of edits) {
    const at = path.join(dir, file)
    const text = readFileSync(at, 'utf8')
    assert.ok(text.includes(from), `the fixture ${file} holds ${JSON.stringify(from)}`)
    writeFileSync(at, text.replace(from, to))
  }
  return dir
}

/**
 * Reading the fixture with these edits fails with an error that matches `message`.
 * @param {[string, string, string][]} edits
 * @param {RegExp} message
 */
function refuses(edits, message) {
  const dir = variant(edits)
  try {
    assert.throws(() => readCourse(dir, { draft: true }), message)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

/**
 * Building the fixture with these edits fails with an error that matches `message`.
 * @param {[string, string, string][]} edits
 * @param {RegExp} message
 */
async function buildRefuses(edits, message) {
  const dir = variant(edits)
  try {
    await assert.rejects(buildCourse(dir, { draft: true }), message)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

test('the parser reads the kind, its plan, the frame, the labels and the blanks', () => {
  const course = readCourse(GOOD, { draft: true })
  assert.deepEqual(course.sections, [{ title: 'Whole programs', first: 1, last: 1 }])
  assert.deepEqual(courseShape(course).kinds, [
    { id: 1, name: 'Compute and print a value', after: [], plan: ['Read the two numbers.', 'Print the value.'], problems: ['1.01'], trace: 'T1' }
  ])
  const [kind] = course.kinds
  assert.ok(kind)
  assert.deepEqual(kind.example.solution.labels, [
    { at: 3, level: 0, text: 'Write the steps inside main, where the program starts.' },
    { at: 5, level: 1, text: 'Read the two numbers.' },
    { at: 8, level: 1, text: 'Print the value.' }
  ])
  const p = kind.problems[0]?.problem
  assert.ok(p)
  assert.deepEqual(p.statement, [
    'Write a program that reads two integers and prints the first minus the second.',
    'Input: one line, two integers separated by a space.',
    'Output: one line, the first minus the second.',
    'Limits: -1000 ≤ each integer ≤ 1000.'
  ])
  assert.deepEqual(p.examples, [{ input: '9 4\n', output: '5\n' }])
  assert.deepEqual(p.solution.frame, [0, 1, 3, 4, 9])
  assert.equal(p.solution.lines[7], '    std::cin >> first >> second;')
  assert.deepEqual(p.solution.blanks, [
    { line: 7, from: 16, to: 31 },
    { line: 8, from: 23, to: 37 }
  ])
  assert.deepEqual(kind.trace.inputs, ['3 4\n', '5 6\n'])
})

test('Label: every label is in labels.md and is one sentence', () => {
  refuses([[PROBLEM, '//: Print the value.', '//: Print the answer.']], /Label: "Print the answer\." is not in labels\.md/)
  refuses([['labels.md', '- Print the value.', '- print the value']], /Label: "print the value": .* starts with a capital letter/)
})

test('Same label: labels.md lists each label once', () => {
  refuses([['labels.md', '- Print the value.', '- Print the value.\n- Print the value.']], /Same label: "Print the value\." is listed twice/)
})

test('Blank: one per group, never a whole line, only in a solution', () => {
  refuses([[PROBLEM, 'int first {0};', 'int first {[[0]]};']], /1\.01\.md line \d+: Blank: the group "Read the two numbers\." holds 2 blanks/)
  refuses([[PROBLEM, '[[first - second]]', 'first - second']], /Blank: the group "Print the value\." holds 0 blanks/)
  refuses([[PROBLEM, '    std::cin >> [[first >> second]];', '    [[std::cin >> first >> second;]]']], /Blank: a blank is never a whole line/)
  refuses([[PROBLEM, '[[first - second]]', '[[ first - second ]]']], /Blank: write the blank tight, \[\[first - second\]\]/)
  refuses([[KIND, 'first + second);', '[[first + second]]);']], /Blank: only a problem's ## Solution holds/)
})

test('Label: every line outside the frame is in a group, and no label stands above the frame', () => {
  refuses([[PROBLEM, 'int main()\n{\n', 'int main()\n{\n    int spare {0};\n']], /Label: this line is in no group/)
  refuses([[PROBLEM, '//: Read the two numbers.\n', '//: Read the two numbers.\n    //:: Print the value.\n']], /Label: the group "Read the two numbers\." has no line of its own/)
})

test('Frame label: //@ stands in a worked example only', () => {
  refuses([[PROBLEM, '    //: Print the value.', '    //@ Write the steps inside main, where the program starts.\n    //: Print the value.']], /Frame label: \/\/@ labels stand in a worked example only/)
})

test('Kind: a solution\'s first-level labels equal the kind\'s plan', () => {
  refuses([[PROBLEM, '//: Print the value.', '//: Read the two numbers.']], /Kind: the first-level labels are \["Read the two numbers\.","Read the two numbers\."\]; kind 1's plan is/)
})

test('Statement: Input, Output and Limits, and no kind name or plan word', () => {
  refuses([[PROBLEM, 'Limits: -1000 ≤ each integer ≤ 1000.\n', '']], /Statement: the statement holds one line that starts "Limits: ", found 0/)
  refuses([[PROBLEM, 'Output: one line, the first minus the second.', 'Output: one line, the running total.']], /Statement: "running total" is a plan word/)
  refuses([[KIND, 'Output: one line, their sum.', 'Output: one line, their counters.']], /kind\.md line \d+: Statement: "counters" is a plan word/)
  refuses([[PROBLEM, 'Output: one line, the first minus the second.', 'Output: count the items that pass a test.']], /Statement: the statement names the kind "Count the items that pass a test"/)
  refuses([[PROBLEM, 'Write a program that reads', 'Read']], /Statement: the statement opens "Write a program that reads/)
})

test('Line: no code line is wider than 64 characters', () => {
  refuses([[PROBLEM, '[[first - second]]', '[[first - second + 0 + 0 + 0 + 0 + 0 + 000]]']], /Line: this line is 65 characters; no code line is wider than 64/)
})

test('Trace length: the trace program fits 18 lines; its columns are its names', () => {
  refuses([[KIND, '    int total {first + second};\n', '    int total {first + second};\n'.repeat(9)]], /Trace length: the trace program is 19 lines/)
  refuses([[KIND, 'Columns: first, total', 'Columns: first, sum']], /Trace: the column "sum" is no name in the trace program/)
})

test('Comment, Format and Kind name: what the format does not allow', () => {
  refuses([[PROBLEM, '    //: Print the value.', '    // print it\n    //: Print the value.']], /Comment: a program holds no comments/)
  refuses([[PROBLEM, '## Slow', '## Slower']], /1\.01\.md line \d+: Format: expected the heading "## Slow", found the heading "## Slower"/)
  refuses([['unit.md', '1 Compute', '1 compute']], /Kind name: "compute and print a value" is written in sentence case/)
  refuses([[KIND, '# Kind 1: Compute and print a value', '# Kind 1: Compute a value']], /Format: the heading is "# Kind 1: Compute and print a value"/)
})

test('Braces: a function\'s { stands alone on the next line, a control statement\'s ends its line', () => {
  refuses([[PROBLEM, 'int main()\n{\n', 'int main() {\n']], /Braces: a function's \{ stands alone on the next line/)
  refuses([[KIND, '    int total {first + second};\n', '    int total {first + second};\n    if (total > 0)\n    {\n        ++total;\n    }\n']], /Braces: a control statement's \{ ends its own line/)
  refuses([[KIND, 'int main()\n{\n    int first', 'int main()\n    int first']], /Braces: main's \{ stands alone on the line right after "int main\(\)"/)
})

test('Problems per kind: a first kind holds at least 10 problems, unless the build is a draft', () => {
  assert.throws(() => readCourse(GOOD), /kind\.md: Problems per kind: kind 1 holds 1 problems; it holds at least 10\. While you write, node scripts\/gen\/cpp\.mjs --draft/)
})

test('course.gen.js matches the sources (run node scripts/gen/cpp.mjs)', () => {
  const { sections, kinds } = courseShape(readCourse(undefined, { draft: true }))
  assert.deepEqual(SECTIONS, sections)
  assert.deepEqual(KINDS, kinds)
})

test('a test compares after end-of-line spaces and final blank lines are dropped', () => {
  assert.equal(compared('5  \n\n\n'), compared('5'))
  assert.notEqual(compared('5\n6'), compared('56'))
})

test('the build compiles every program, makes the tests\' outputs and records the trace', { skip: noTracer }, async () => {
  const { kinds } = await buildCourse(GOOD, { draft: true })
  const [kind] = kinds
  assert.ok(kind)
  assert.deepEqual(
    kind.problems['1.01']?.tests.map(t => [t.input, t.output]),
    [
      ['0 0\n', '0\n'],
      ['-1000 1000\n', '-2000\n'],
      ['-493 387\n', '-880\n'],
      ['-486 374\n', '-860\n']
    ]
  )
  assert.deepEqual(kind.trace.rows, [
    { line: 6, values: ['0', ''] },
    { line: 7, values: ['0', ''] },
    { line: 8, values: ['3', ''] },
    { line: 9, values: ['3', '7'] },
    { line: 10, values: ['3', '7'] }
  ])
  assert.equal(kind.trace.output, '11\n')
})

test('Trace per kind: a reference solution that reads its input and has two examples is kept as a returning trace, run on them', { skip: noTracer }, async () => {
  const [none] = (await buildCourse(GOOD, { draft: true })).kinds
  assert.deepEqual(none?.traces, [], 'one example: no returning trace')
  const two = variant([[PROBLEM, '```out\n5\n```\n', '```out\n5\n```\n```in\n2 7\n```\n```out\n-5\n```\n']])
  const [kind] = (await buildCourse(two, { draft: true })).kinds
  rmSync(two, { recursive: true, force: true })
  const [trace] = kind?.traces ?? []
  assert.equal(kind?.traces.length, 1)
  assert.equal(trace?.id, 'T1')
  assert.deepEqual(trace?.columns, ['first', 'second'])
  assert.deepEqual(trace?.inputs, ['9 4\n', '2 7\n'])
  assert.equal(trace?.lines.length, 10)
  assert.deepEqual(trace?.rows.at(-1), { line: 9, values: ['9', '4'] })
  assert.equal(trace?.output, '-5\n')
})

test('Entry check: the reference compiles and gives every example\'s output', { skip: noTracer }, async () => {
  await buildRefuses([[PROBLEM, '```out\n5\n', '```out\n6\n']], /Entry check: on example 1 the reference solution prints "5\\n"; the example expects "6\\n"/)
  await buildRefuses([[PROBLEM, '[[first - second]]', '[[first - secnd]]']], /Entry check: the reference solution does not compile[^]*'secnd' was not declared/)
})

test('Written problems: the slow solution agrees on every test it finishes', { skip: noTracer }, async () => {
  await buildRefuses([[PROBLEM, '    std::println("{}", difference);', '    std::println("{}", difference + 1);']], /Written problems: on the input "9 4\\n" the slow solution prints "6\\n" and the reference "5\\n"/)
})

test('Trace: every column is filled in some row', { skip: noTracer }, async () => {
  await buildRefuses([[KIND, 'Columns: first, total', 'Columns: first, main']], /Trace: the column "main" is empty in every row/)
})

test('the runner compiles once, runs each test on stdin, names files bare, and stops', { skip: noCompiler }, async () => {
  const runner = spawn(process.execPath, [path.join(import.meta.dirname, '..', 'scripts', 'cpp-runner.mjs'), '--port', '0'])
  try {
    const port = await new Promise((resolve, reject) => {
      runner.stdout.on('data', d => {
        const m = /answers at http:\/\/127\.0\.0\.1:(\d+)/.exec(String(d))
        if (m) resolve(Number(m[1]))
      })
      runner.on('exit', code => reject(new Error(`the runner stopped with ${code}`)))
    })
    const at = `http://127.0.0.1:${port}`
    /**
     * @param {string} route
     * @param {unknown} [body]
     */
    const call = async (route, body) =>
      (await fetch(at + route, body === undefined ? {} : { method: 'POST', body: JSON.stringify(body) })).json()
    const about = await call('/')
    assert.equal(about.ok, true)
    assert.equal(about.standard, 'c++23')
    const twice = '#include <iostream>\n#include <print>\n\nint main() {\n    int n {0};\n    std::cin >> n;\n    std::println("{}", n * 2);\n}\n'
    assert.deepEqual(await call('/run', { kind: 'program', files: { 'main.cpp': twice }, tests: [{ input: '4\n' }, { input: '-3' }] }), {
      compiled: true,
      runs: [
        { stdout: '8\n', stderr: '', exit: 0, signal: null, finished: true },
        { stdout: '-6\n', stderr: '', exit: 0, signal: null, finished: true }
      ]
    })
    const broken = await call('/run', { kind: 'program', files: { 'main.cpp': 'int main() {\n    x = 1;\n}\n' }, tests: [] })
    assert.equal(broken.compiled, false)
    assert.match(broken.error, /^main\.cpp: In function 'int main\(\)':\nmain\.cpp:2:5: error: 'x' was not declared/)
    assert.match((await call('/run', { kind: 'catch2', files: { 'main.cpp': twice }, tests: [] })).error, /_test\.cpp/, 'a function problem sends its test file')
    // a function problem: the track's test file under Catch2 v2, its first test alone as the example
    const header = '#pragma once\nint twice(int n);\n'
    const body = '#include "twice.h"\nint twice(int n) { return n + n; }\n'
    const tests = '#include "twice.h"\n#include "test/catch.hpp"\nTEST_CASE("one") { REQUIRE(twice(1) == 2); }\n#if defined(EXERCISM_RUN_ALL_TESTS)\nTEST_CASE("three") { REQUIRE(twice(3) == 7); }\n#endif\n'
    const files = { 'twice.h': header, 'twice.cpp': body, 'twice_test.cpp': tests }
    const example = await call('/run', { kind: 'catch2', files, tests: [], examples: true })
    assert.match(example.runs[0].stdout, /<OverallResultsCases successes="1" failures="0"/)
    const all = await call('/run', { kind: 'catch2', files, tests: [] })
    assert.match(all.runs[0].stdout, /<OverallResultsCases successes="1" failures="1"/)
    assert.match(all.runs[0].stdout, /twice\(3\) == 7[\s\S]*6 == 7/, 'the failed assertion and what it expanded to')
    const forever = '#include <iostream>\n\nint main() {\n    int n {0};\n    while (true) {\n        ++n;\n    }\n}\n'
    // Compiled first, so the stop below reaches a program already running.
    await call('/run', { kind: 'program', files: { 'main.cpp': forever }, tests: [] })
    const pending = call('/run', { kind: 'program', files: { 'main.cpp': forever }, tests: [{ input: '' }, { input: '' }] })
    await new Promise(resolve => setTimeout(resolve, 300))
    assert.deepEqual(await call('/stop', {}), { ok: true })
    const stopped = await pending
    assert.deepEqual(stopped.runs.map((/** @type {{ finished: boolean }} */ r) => r.finished), [false, false])
  } finally {
    runner.kill()
  }
})

const FUNCTION = path.join(import.meta.dirname, 'fixtures', 'cpp', 'function')

test('function problems: an Exercism exercise and a written one, built with Catch2; the example shown as calls', { skip: noTracer }, async () => {
  const { kinds } = await buildCourse(FUNCTION, { draft: true })
  const found = kinds[0]?.problems['1.01']
  const written = kinds[0]?.problems['1.02']
  assert.equal(found?.source, 'exercism')
  assert.deepEqual(found?.fn?.calls, [{ call: 'leap::is_leap_year(2015)', expected: 'false' }])
  assert.deepEqual([found?.examples.length, found?.tests.length], [1, 5])
  assert.deepEqual(found?.solution.frame, [0, 2, 9], '#pragma once and the namespace lines stand in place')
  assert.equal(written?.source, 'aether')
  assert.match(written?.fn?.test ?? '', /#if defined\(EXERCISM_RUN_ALL_TESTS\)\nTEST_CASE\("minus_four"\)/)
})

test('function problems: a reference that fails a case, and a written problem whose slow solution disagrees, do not enter', { skip: noTracer }, async () => {
  const at = (/** @type {[string, string, string][]} */ edits) => {
    const dir = mkdtempSync(path.join(tmpdir(), 'eruko-cpp-function-'))
    cpSync(FUNCTION, dir, { recursive: true })
    for (const [file, from, to] of edits) writeFileSync(path.join(dir, file), readFileSync(path.join(dir, file), 'utf8').replace(from, to))
    return dir
  }
  await assert.rejects(buildCourse(at([['kinds/01-leap/1.01.md', 'year % 400 == 0', 'year % 300 == 0']]), { draft: true }), /Entry check: the reference solution fails the test case/)
  await assert.rejects(buildCourse(at([['kinds/01-leap/1.02.md', 'odd = !odd;', 'odd = true;']]), { draft: true }), /Written problems: the slow solution fails/)
})
