// The Parsons problem (src/units/cpp/core/parsons.logic.js): the frame and the empty lines in
// place, every other line shuffled with its indentation, each blank an empty field, no decoy.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cutParsons, piecesOf, shuffleBy, staysInPlace } from './parsons.logic.js'

/**
 * @template T
 * @param {unknown} value
 * @returns {T}
 */
const typed = value => /** @type {T} */ (value)

/** @type {import('./decode.logic.js').Problem} */
const problem = typed({
  id: '7.03',
  kind: 7,
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
      '    int n {0};',
      '    std::cin >> n;',
      '    int count {0};',
      '    for (int index {0}; index < n; ++index) {',
      '        int number {0};',
      '        std::cin >> number;',
      '        if (number < 0) {',
      '            ++count;',
      '        }',
      '    }',
      '    std::println("{}", count);',
      '}'
    ],
    frame: [0, 1, 3, 15],
    labels: [],
    blanks: [
      { line: 5, from: 16, to: 17 },
      { line: 6, from: 15, to: 16 },
      { line: 10, from: 12, to: 22 },
      { line: 14, from: 23, to: 28 }
    ]
  }
})
const code = problem.solution

test('the frame and the empty lines stay in place; a blank is an empty field among its line', () => {
  assert.deepEqual(
    code.lines.map((_, at) => at).filter(at => staysInPlace(code, at)),
    [0, 1, 2, 3, 15]
  )
  assert.deepEqual(piecesOf(code, 5), ['    std::cin >> ', { blank: 0 }, ';'])
  assert.deepEqual(piecesOf(code, 10), ['        if (', { blank: 2 }, ') {'])
  assert.deepEqual(piecesOf(code, 8), ['        int number {0};'])
  assert.deepEqual(piecesOf(code, 99), [])
  // a blank at the end of its line leaves no empty piece after it
  assert.deepEqual(piecesOf({ ...code, blanks: [{ line: 4, from: 4, to: 15 }] }, 4), [
    '    ',
    { blank: 0 }
  ])
})

test('a seeded shuffle gives the same order for the same seed, every item once', () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8]
  const a = shuffleBy('7.03')(items)
  assert.deepEqual(a, shuffleBy('7.03')(items))
  assert.deepEqual(
    [...a].sort((x, y) => x - y),
    items
  )
  assert.notDeepEqual(a, shuffleBy('7.04')(items))
  assert.deepEqual(items, [1, 2, 3, 4, 5, 6, 7, 8], 'the items given are left as they are')
})

test('the Parsons problem: the lines that move, shuffled, each with its indentation and its blanks; none added', () => {
  const p = cutParsons(problem, shuffleBy('7.03'))
  assert.equal(p.id, '7.03')
  assert.equal(p.length, 16)
  assert.deepEqual(
    p.frame.map(f => f.at),
    [0, 1, 2, 3, 15]
  )
  assert.deepEqual(p.frame[3], { at: 3, text: 'int main() {' })
  assert.deepEqual(
    [...p.lines.map(l => l.at)].sort((x, y) => x - y),
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  )
  assert.ok(
    p.lines.some((l, i) => l.at !== 4 + i),
    'shuffled'
  )
  assert.deepEqual(p.lines.find(l => l.at === 11)?.pieces, ['            ++count;'])
  // an order that leaves every line where it stood is turned by one line
  const same = cutParsons(problem, items => [...items])
  assert.deepEqual(
    same.lines.map(l => l.at),
    [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 4]
  )
})
