#!/usr/bin/env node
// Fails on a breach of the code's structure rules, each failure naming its rule:
//   Ladder       imports run one way: shell/, a unit's manifest.js, its features, its core/, parts/,
//                record/, kernel/; a lower module never imports a higher one
//   Unit apart   a unit never imports another unit or shell/
//   Feature apart  a feature never imports another feature
//   No cycle     the import graph, type imports and import() included, has no cycle
//   Specifiers   every import is relative and ends in .js
//   File kinds   outside shell/ and record/, a module is .element.js, .dom.js, .logic.js or .gen.js;
//                a .test.js beside a logic file is its test, no module of the app: it is in no
//                ladder and no import graph (scripts/check/code.mjs holds it to its stem)
//   Banned names no folder or stem named util, helper, manager, common, misc, shared or lib;
//                index.js only in record/
// A unit's content/ is its content, changed only through its paper: it imports only its own
// content, and the file-kind rule leaves its data files as they are written.
// A folder holding a VENDOR.json is outside code, vendored as its makers ship it (Dependency):
// it is left out.
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import { SRC, walk, resolve, importsOf } from '../lib/fs.mjs'

/** @param {string} f */
const rel = f => relative(SRC, f).split(sep).join('/')

/** @param {string} f */
const vendored = f => {
  for (let dir = dirname(f); dir.startsWith(SRC + sep); dir = dirname(dir))
    if (existsSync(join(dir, 'VENDOR.json'))) return true
  return false
}

/**
 * Where a module stands: its layer, its unit and its feature.
 * @param {string} r
 * @returns {{ layer: string, rank: number, unit: string | null, feature: string | null }}
 */
function placeOf(r) {
  const unit = /^units\/([^/]+)\//.exec(r)?.[1] ?? null
  if (r.startsWith('shell/')) return { layer: 'shell', rank: 6, unit, feature: null }
  if (unit) {
    const rest = r.slice(`units/${unit}/`.length)
    if (rest === 'manifest.js') return { layer: 'manifest', rank: 5, unit, feature: null }
    const folder = rest.split('/')[0] ?? ''
    if (folder === 'core') return { layer: 'core', rank: 3, unit, feature: null }
    if (folder === 'content') return { layer: 'content', rank: 2.5, unit, feature: null }
    return { layer: 'feature', rank: 4, unit, feature: folder }
  }
  const top = r.split('/')[0] ?? ''
  const rank = { parts: 2, record: 1, kernel: 0 }[top]
  return { layer: top, rank: rank ?? -1, unit: null, feature: null }
}

const BANNED = /^(utils?|helpers?|managers?|common|misc|shared|lib)$/
const KIND = /\.(element|dom|logic|gen|test)\.js$/
const WORKER = /new URL\(\s*['"]([^'"]+\.js)['"]\s*,\s*import\.meta\.url/g

const files = walk(SRC, /\.js$/).filter(f => !vendored(f))
/** @type {string[]} */
const failures = []
/** @type {Map<string, string[]>} */
const graph = new Map()

for (const file of files) {
  const r = rel(file)
  const from = placeOf(r)
  const parts = r.split('/')
  const stem = (parts.at(-1) ?? '').split('.')[0] ?? ''
  if (parts.slice(0, -1).some(p => BANNED.test(p)) || BANNED.test(stem))
    failures.push(`Banned names: ${r}`)
  if (stem === 'index' && from.layer !== 'record')
    failures.push(`Banned names: ${r} (index.js lives only in record/)`)
  if (
    !['shell', 'record', 'content'].includes(from.layer) &&
    !KIND.test(r) &&
    r !== 'sw.js' &&
    !/^units\/[^/]+\/manifest\.js$/.test(r)
  )
    failures.push(`File kinds: ${r} is not .element.js, .dom.js, .logic.js or .gen.js`)
  if (r.endsWith('.test.js')) continue

  const src = readFileSync(file, 'utf8')
  // The code as it runs: comments (and the JSDoc type imports in them) taken out.
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
  const runs = new Set([...importsOf(code), ...[...code.matchAll(WORKER)].map(m => m[1] ?? '')])
  // A type named from a module counts as an import of it, so types follow the ladder too.
  const types = [...src.matchAll(/import\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1] ?? '')
  /** @type {string[]} */
  const edges = []
  for (const spec of new Set([...runs, ...types])) {
    if (from.layer !== 'content' && (!spec.startsWith('.') || !spec.endsWith('.js'))) {
      failures.push(`Specifiers: ${r} imports "${spec}" (relative, ending in .js)`)
      continue
    }
    const target = resolve(file, spec)
    if (!target || !target.startsWith(SRC + sep)) continue
    const t = rel(target)
    const to = placeOf(t)
    edges.push(target)
    if (from.layer === 'content') {
      if (to.layer !== 'content' || to.unit !== from.unit)
        failures.push(`Ladder: ${r} imports ${t} (content imports only its own content)`)
      continue
    }
    if (from.unit && to.unit && from.unit !== to.unit)
      failures.push(`Unit apart: ${r} imports ${t}`)
    else if (from.unit && to.layer === 'shell') failures.push(`Unit apart: ${r} imports ${t}`)
    else if (to.rank > from.rank)
      failures.push(`Ladder: ${r} (${from.layer}) imports ${t} (${to.layer})`)
    else if (from.feature && to.feature && from.feature !== to.feature)
      failures.push(`Feature apart: ${r} imports ${t}`)
  }
  graph.set(file, edges)
}

// No cycle: a depth-first walk that meets a module still on its path.
/** @type {Map<string, 'open' | 'done'>} */
const state = new Map()
/**
 * @param {string} f
 * @param {string[]} path
 */
function visit(f, path) {
  const s = state.get(f)
  if (s === 'done') return
  if (s === 'open') {
    const loop = path.slice(path.indexOf(f)).concat(f).map(rel)
    failures.push(`No cycle: ${loop.join(' -> ')}`)
    return
  }
  state.set(f, 'open')
  for (const t of graph.get(f) ?? []) visit(t, [...path, f])
  state.set(f, 'done')
}
for (const f of graph.keys()) visit(f, [])

if (failures.length === 0) {
  const units = new Set(files.map(f => placeOf(rel(f)).unit).filter(Boolean))
  console.log(
    `✓ Boundaries: ${graph.size} modules, ${units.size} units, the ladder holds, no cycle.`
  )
  process.exit(0)
}
console.error(`✗ ${failures.length} breach(es) of the structure rules:\n`)
for (const f of failures) console.error(`  ${f}`)
process.exit(1)
