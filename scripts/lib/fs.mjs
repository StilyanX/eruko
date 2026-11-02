// Helpers the check-*.mjs scripts share: walk src/, resolve relative import specifiers,
// list the specifiers a file imports, and list the class selectors of a stylesheet.
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
export const SRC = path.resolve(ROOT, 'src')

/**
 * Every file under `dir` whose name matches `match` (.js by default), recursively.
 * @param {string} dir
 * @param {RegExp} [match]
 * @returns {string[]}
 */
export const walk = (dir, match = /\.js$/) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) return walk(p, match)
    return match.test(e.name) ? [p] : []
  })

/**
 * The class names a stylesheet defines, with comments and url()s left out.
 * @param {string} css
 */
export const classesIn = css =>
  [
    ...css
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/url\([^)]*\)/g, '')
      .matchAll(/\.(-?[A-Za-z_][A-Za-z0-9_-]*)/g)
  ].map(m => m[1] ?? '')

/**
 * Resolves an import specifier from `fromFile` to an absolute file path. It takes relative paths
 * and returns null for a bare package or a path that is not on disk.
 * @param {string} fromFile
 * @param {string} spec
 * @returns {string | null}
 */
export function resolve(fromFile, spec) {
  if (!spec.startsWith('.')) return null
  const base = path.resolve(path.dirname(fromFile), spec)
  const candidates = [base, base + '.js', path.join(base, 'index.js')]
  return candidates.find(c => fs.existsSync(c) && fs.statSync(c).isFile()) ?? null
}

/** Match static, dynamic and side-effect imports; yields the specifier. */
const IMPORT_RE =
  /(?:import|export)[^'"]*?from\s*['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|^\s*import\s*['"]([^'"]+)['"]/gm

/**
 * @param {string} src
 * @returns {Generator<string>}
 */
export function* importsOf(src) {
  for (const m of src.matchAll(IMPORT_RE)) {
    const spec = m[1] || m[2] || m[3]
    if (spec) yield spec
  }
}
