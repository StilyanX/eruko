// The service worker's list of files, written by walking src/:
//   src/sw-manifest.gen.js   export const FILES = { [path inside the app]: start of its SHA-256 }
// tests/sw-manifest.test.mjs fails when a file changed after it. Run after changing any file under
// src/ (npm run gen runs it last): node scripts/gen/sw-manifest.mjs
import { writeFileSync } from 'node:fs'
import { OUT, filesOf, manifestOf } from '../lib/sw-manifest.mjs'

const files = filesOf()
writeFileSync(OUT, manifestOf(files))
console.log(`gen-sw-manifest: ${Object.keys(files).length} files`)
