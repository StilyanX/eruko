// The wording of every lock reason: a wait is worded with
// "opens" and a condition, "once", "after" or "when"; a missing act is an order, "Play the clip
// first."; no other form. The reasons are gathered from the source by pattern: every string that
// says "opens", and every `why` of a locked button (a `why:` beside a `disabled:`), followed
// through a constant or a function of its file.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SRC = fileURLToPath(new URL('../src/', import.meta.url))

/** The app's own code: no generated file, test, unit material or vendored library. */
const files = readdirSync(SRC, { recursive: true, encoding: 'utf8' })
  .filter(f => /\.js$/.test(f) && !/\.(gen|test)\.js$|\/content\/|hls-/.test(f))
  .map(f => ({ f, lines: readFileSync(join(SRC, f), 'utf8').split('\n') }))

/** The lines of code, without comments. @param {string[]} lines */
const code = lines => lines.map(l => (/^\s*(\/\/|\*|\/\*)/.test(l) ? '' : l))

/** The page text of a line: its strings that begin with a capital letter. @param {string} line */
const texts = line => [...line.matchAll(/'([^']*)'|"([^"]*)"|`([^`]*)`/g)].map(m => m[1] ?? m[2] ?? m[3] ?? '').filter(t => /^[A-Z]/.test(t))

/** Strings that say "opens" but are no lock: what a first count gives, how a form begins, and
 * the one-tab notice. */
const NOT_LOCKS = [
  'Your first count opens rated games, right or wrong.',
  'The next form of this kind opens with its worked example.',
  'That tab holds your record. Switch to it, or close it, and this page opens.'
]

const waits = files.flatMap(({ f, lines }) =>
  code(lines).flatMap((l, i) =>
    [...l.matchAll(/'([^']*)'|"([^"]*)"|`([^`]*)`/g)]
      .map(m => m[1] ?? m[2] ?? m[3] ?? '')
      .filter(t => /\bopens\b/i.test(t) && /\s/.test(t) && !NOT_LOCKS.includes(t))
      .map(t => ({ at: `${f}:${i + 1}`, t }))
  )
)

/**
 * The text a `why:` value names: its strings, or those of the constant or function it names.
 * @param {string[]} lines the file's code
 * @param {string} value what follows `why:`
 * @returns {string[]}
 */
function named(lines, value) {
  const found = texts(value)
  if (found.length) return found
  const name = value.match(/^\(?(\w+)/)?.[1] ?? 'why'
  const at = lines.findIndex(l => new RegExp(`\\bconst ${name}\\b\\s*=`).test(l))
  if (at < 0) return []
  const own = texts(lines[at] ?? '')
  if (own.length) return own
  // A constant worked out by a function of the file: that function's strings.
  const call = (lines[at] ?? '').match(/(\w+)\(/)?.[1]
  const from = lines.findIndex(l => new RegExp(`function ${call}\\b`).test(l))
  const to = lines.findIndex((l, i) => i > from && /^}/.test(l))
  return from < 0 ? [] : lines.slice(from, to).flatMap(texts)
}

const orders = files.flatMap(({ f, lines }) => {
  const c = code(lines)
  return c.flatMap((l, i) => {
    const why = l.match(/\bwhy\b(?::\s*(.+)|\s*\}\s*:)/)
    if (!why || !c.slice(Math.max(0, i - 4), i + 5).some(x => /\bdisabled:/.test(x))) return []
    // The value ends where the next property of the object begins.
    const value = (why[1] ?? 'why').split(/,\s*\w+:/)[0] ?? ''
    return named(c, value).map(t => ({ at: `${f}:${i + 1}`, t }))
  })
})

/** The verbs a reason's order begins with. */
const VERB =
  /^(Choose|Enter|Fill|Finish|Mark|Pick|Place|Play|Put|Record|Stop|Store|Try|Type|Use|Wait|Write)\b/

const WAIT = /\bopens\b.*\b(once|after|when)\b|\b(once|after|when)\b.*\bopens\b/i

test('the reasons are found: waits on rows, parts and pages, and locked buttons', () => {
  assert.ok(waits.length >= 10, `${waits.length} waits`)
  assert.ok(orders.length >= 15, `${orders.length} button reasons`)
})

test('a wait says "opens" with "once", "after" or "when"', () => {
  assert.deepEqual(waits.filter(({ t }) => !WAIT.test(t)), [])
})

test('a locked button says the missing act as an order ending in a full stop, or a wait', () => {
  const wrong = orders.filter(({ t }) => {
    const first = t.split(/(?<=\.)\s+/)[0] ?? ''
    return !WAIT.test(first) && !(VERB.test(first) && /\.$/.test(first))
  })
  assert.deepEqual(wrong, [])
})
