// Hides: how every formula in the units' topic and bank files is turned from TeX into MathML by
// Temml, so the app sets maths with no maths engine of its own:
//   src/units/<unit>/content/mathml/<topics|bank>/<name>.gen.js   one file for each topic and bank file:
//                                                           { [piece's TeX]: its MathML }; a
//                                                           display formula's key opens with $$
// A unit with maths is one with content/topics/; the maths its screens set from its problems'
// text, beyond the TeX its content writes, comes from its core/typeset.logic.js (`typesetOf`).
// The pieces are those the screens set (src/kernel/maths-text.logic.js). Each file's header
// carries the SHA-256 of the file it was made from, and tests/maths-generated.test.mjs fails when
// a source changed after it. Run after changing a topic or bank file: node scripts/gen/mathml.mjs
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import temml from 'temml'
import { SRC } from '../lib/fs.mjs'
import { piecesIn } from '../../src/kernel/maths-text.logic.js'
import { mathsUnits } from '../lib/maths-units.mjs'
import { generated } from '../lib/generated.mjs'

const KINDS = ['topics', 'bank']
// Commands the content uses that Temml spells differently.
const MACROS = { '\\cdotp': '\\cdot' }
// The radical sign shown bare, written as a root over a space: set over the room of one digit,
// which a screen reader passes over, so the sign stands on the line as every root does and does
// not hang below it.
const BARE_ROOT = /\\sqrt\{\\ \}/g

/**
 * Every string inside a value, at any depth.
 * @param {unknown} v
 * @returns {string[]}
 */
const strings = v =>
  typeof v === 'string'
    ? [v]
    : Array.isArray(v)
      ? v.flatMap(strings)
      : v !== null && typeof v === 'object'
        ? Object.values(v).flatMap(strings)
        : []

/**
 * The line under a generated file's header that names its source and the source's SHA-256.
 * @param {string} source path from the unit folder
 * @param {string} text the source file's text
 */
const sourceLine = (source, text) =>
  `// From ${source}, sha256 ${createHash('sha256').update(text).digest('hex')}.`

/** @type {string[]} */
const failed = []
let files = 0
let pieces = 0
for (const unit of mathsUnits()) {
  const hook = path.join(SRC, 'units', unit, 'core', 'typeset.logic.js')
  /** @type {(mod: unknown) => string[]} */
  const typesetOf = existsSync(hook) ? (await import(pathToFileURL(hook).href)).typesetOf : () => []
  const out = path.join(SRC, 'units', unit, 'content', 'mathml')
  rmSync(out, { recursive: true, force: true })
  for (const kind of KINDS) {
    const dir = path.join(SRC, 'units', unit, 'content', kind)
    mkdirSync(path.join(out, kind), { recursive: true })
    for (const name of readdirSync(dir)
      .filter(n => n.endsWith('.js') && n !== 'index.js')
      .sort()) {
      const file = path.join(dir, name)
      const mod = await import(pathToFileURL(file).href)
      /** @type {Record<string, string>} */
      const map = {}
      // A piece of an answer Temml cannot set is left out: the screen then shows that answer as
      // typed.
      const typed = new Set(typesetOf(mod).flatMap(piecesIn))
      const written = new Set(strings(Object.values(mod)).flatMap(piecesIn))
      for (const tex of new Set([...written, ...typed])) {
        try {
          const display = tex.startsWith('$$')
          // Temml marks a slash up as an identifier; a screen reader needs it as the operator it
          // is (MathCAT), spaced as Temml set it.
          map[tex] = temml
            .renderToString(
              (display ? tex.slice(2) : tex).replace(BARE_ROOT, '\\sqrt{\\phantom{0}}'),
              {
                displayMode: display,
                throwOnError: true,
                macros: { ...MACROS }
              }
            )
            .replaceAll('<mi>/</mi>', '<mo lspace="0em" rspace="0em">/</mo>')
        } catch (err) {
          if (!written.has(tex)) continue
          failed.push(
            `${unit}/content/${kind}/${name}: ${JSON.stringify(tex)}: ${err instanceof Error ? err.message : String(err)}`
          )
        }
      }
      const sorted = Object.fromEntries(
        Object.entries(map).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
      )
      const body = generated(
        'scripts/gen/mathml.mjs',
        `${sourceLine(`content/${kind}/${name}`, readFileSync(file, 'utf8'))}\n// prettier-ignore\nexport default ${JSON.stringify(sorted)}\n`
      )
      writeFileSync(path.join(out, kind, name.replace(/\.js$/, '.gen.js')), body)
      files++
      pieces += Object.keys(sorted).length
    }
  }
}
console.log(`gen-mathml: ${pieces} formula pieces in ${files} files`)
if (failed.length) {
  console.error(`gen-mathml: ${failed.length} piece(s) Temml could not set:\n${failed.join('\n')}`)
  process.exit(1)
}
