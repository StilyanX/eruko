// Hides: how the app finds its units. Every folder of src/units/ with a manifest.js is a unit;
// this writes their names, in the order their entries give (`order`), into
// src/shell/units.gen.js, which the registry reads. A unit is added or removed with its folder
// alone: run node scripts/gen/units.mjs (npm run gen runs it).
import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { generated } from '../lib/generated.mjs'

const UNITS = path.resolve(import.meta.dirname, '..', '..', 'src', 'units')
const OUT = path.resolve(UNITS, '..', 'shell', 'units.gen.js')

/** @type {{ folder: string, order: number }[]} */
const found = []
for (const folder of readdirSync(UNITS).sort()) {
  const manifest = path.join(UNITS, folder, 'manifest.js')
  if (!existsSync(manifest)) continue
  const { UNIT } = await import(pathToFileURL(manifest).href)
  found.push({ folder, order: UNIT.order })
}
found.sort((a, b) => a.order - b.order)
const body = `// FOLDERS: every unit's folder under units/, in the order Explore lists the units.
// prettier-ignore
export const FOLDERS = ${JSON.stringify(found.map(u => u.folder))}
`
writeFileSync(OUT, generated('scripts/gen/units.mjs', body))
console.log(`gen-units: ${found.length} units`)
