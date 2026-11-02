// The game-record reader of the Go importers (scripts/lib/go-sgf.mjs): a file it cannot read is
// refused with the reason, never read for ever or half read.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { parse, read } from '../scripts/lib/go-sgf.mjs'

/**
 * `parse` run in a child process that is stopped after two seconds: a reader that loops for ever
 * fails the test there instead of holding the test runner.
 * @param {string} text
 */
const parsedApart = text => {
  const code = `import('./scripts/lib/go-sgf.mjs').then(m => console.log(JSON.stringify(m.parse(${JSON.stringify(text)}))))`
  const run = spawnSync(process.execPath, ['--input-type=module', '-e', code], {
    encoding: 'utf8',
    timeout: 2000
  })
  assert.equal(run.signal, null, 'the reader stops')
  return JSON.parse(run.stdout)
}

test('a value with no closing bracket is refused, and the reader stops', () => {
  assert.deepEqual(parsedApart('(;AB[aa'), { ok: false, error: 'a value has no closing bracket' })
})

test('an empty sequence "()" is refused where it stands', () => {
  assert.deepEqual(parse('(;B[aa]())'), { ok: false, error: 'the file holds an empty sequence "()"' })
  assert.deepEqual(parse('()'), { ok: false, error: 'the file holds an empty sequence "()"' })
  assert.deepEqual(read('(;B[aa]())'), { ok: false, error: 'the file holds an empty sequence "()"' })
  assert.deepEqual(read('no file'), { ok: false, error: 'the file holds no node' })
  assert.deepEqual(parse('((;B[aa]))'), { ok: false, error: 'a branch opens before the first node of its sequence' })
})

test('a file is read as its tree: each node its properties, a branch a child', () => {
  const tree = parse('(;AB[aa][bb]AW[cc];B[dd](;W[ee]C[Correct])(;W[ff]))')
  assert.ok(tree.ok)
  assert.deepEqual(tree.value.props, { AB: ['aa', 'bb'], AW: ['cc'] })
  assert.deepEqual(read('(;AB[aa]AW[cc](;B[dd]C[Correct \\] here])(;B[ee]C[Incorrect]))'), {
    ok: true,
    value: { black: ['A19'], white: ['C17'], played: ['D16', 'E15'], correct: ['D16'], side: 'B' }
  })
})
