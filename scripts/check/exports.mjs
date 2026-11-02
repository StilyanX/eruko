// Fails when a named import in src/ has no matching export. The linter's no-undef cannot see this:
// `import { Foo } from './bar'` is a valid binding even when ./bar never exports Foo, and a JSX
// element made from it throws "Element type is invalid" at run time.
import fs from 'node:fs'
import path from 'node:path'
import { SRC, walk, resolve } from '../lib/fs.mjs'

// The names a module exports, following each `export * from` to the names it passes on.
/** @type {Map<string, Set<string>>} */
const exportCache = new Map()
/**
 * @param {string} file
 * @param {Set<string>} [seen]
 * @returns {Set<string>}
 */
function exportsOf(file, seen = new Set()) {
  const cached = exportCache.get(file)
  if (cached) return cached
  if (seen.has(file)) return new Set()
  seen.add(file)

  const src = fs.readFileSync(file, 'utf8')
  const names = new Set()

  for (const m of src.matchAll(/^\s*export\s+(?:async\s+)?(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/gm))
    names.add(m[1] ?? '')
  for (const m of src.matchAll(/^\s*export\s*\{([^}]*)\}/gm))
    for (const part of (m[1] ?? '').split(','))
      names.add((part.trim().split(/\s+as\s+/).pop() ?? '').trim())
  if (/^\s*export\s+default\b/m.test(src)) names.add('default')

  for (const m of src.matchAll(/^\s*export\s*\*\s*from\s*['"]([^'"]+)['"]/gm)) {
    const target = resolve(file, m[1] ?? '')
    if (target) for (const n of exportsOf(target, seen)) names.add(n)
  }

  exportCache.set(file, names)
  return names
}

/** @type {{ file: string, name: string, from: string }[]} */
const problems = []
let checkedImports = 0

for (const file of walk(SRC)) {
  const src = fs.readFileSync(file, 'utf8')

  // `(?!['"])` stops a side-effect import (`import './x.css'`) from swallowing the code up to the next `from`.
  for (const m of src.matchAll(/import\s+(?!['"])([\s\S]*?)\s*from\s*['"]([^'"]+)['"]/g)) {
    const clause = m[1] ?? ''
    const spec = m[2] ?? ''
    const target = resolve(file, spec)
    if (!target) {
      // A bare package name is not checked. A relative specifier that resolves to no file is a
      // broken path, which is what a moved file leaves behind.
      if (spec.startsWith('.') && !/\.(css|svg|png|jpe?g|webp|json|woff2?)$/.test(spec)) {
        problems.push({ file: path.relative(process.cwd(), file), name: '*', from: spec })
      }
      continue
    }

    // Only named specifiers: { A, B as C }
    const braces = clause.match(/\{([^}]*)\}/)
    if (!braces) continue

    const exported = exportsOf(target)
    for (const raw of (braces[1] ?? '').split(',')) {
      const name = (raw.trim().split(/\s+as\s+/)[0] ?? '').trim()
      if (!name) continue
      checkedImports++
      if (!exported.has(name)) {
        problems.push({
          file: path.relative(process.cwd(), file),
          name,
          from: path.relative(process.cwd(), target)
        })
      }
    }
  }
}

if (problems.length) {
  console.error(`${problems.length} broken import(s):\n`)
  for (const p of problems)
    console.error(
      p.name === '*'
        ? `  ${p.file}\n    imports from '${p.from}', which resolves to no file\n`
        : `  ${p.file}\n    imports { ${p.name} } from ${p.from}\n`
    )
  process.exit(1)
}
console.log(`ok: ${checkedImports} named imports all resolve to real exports`)
