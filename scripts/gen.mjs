// Hides: which generators `npm run gen` runs, and in what order. First each unit's own generator
// (scripts/gen/<unit>.mjs, for every folder of src/units/ that has one), then the generators every
// unit shares: the maths and the figures read the units' content, the unit list reads their
// entries, the preload list and the page's policy read the unit list, and the service worker's
// list of files comes last, since it hashes every file the others write. ERUKO_GEN_SKIP names unit
// generators to leave out (CI leaves out cpp: it records g++ and gdb runs, which only the
// maintainer's toolchain reproduces byte for byte).
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const GEN = path.join(ROOT, 'scripts', 'gen')
const SHARED = ['mathml', 'figures', 'units', 'preload', 'csp', 'sw-manifest']

const skip = (process.env.ERUKO_GEN_SKIP ?? '').split(',')
const units = readdirSync(path.join(ROOT, 'src', 'units')).filter(
  u => existsSync(path.join(GEN, `${u}.mjs`)) && !skip.includes(u)
)
for (const name of [...units.sort(), ...SHARED])
  execFileSync(process.execPath, [path.join(GEN, `${name}.mjs`)], { cwd: ROOT, stdio: 'inherit' })
