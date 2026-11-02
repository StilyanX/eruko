// Hides: how the app's Content-Security-Policy is written into src/index.html (scripts/lib/csp.mjs), with the
// SHA-256 of its inline script. tests/csp.test.mjs fails when the page changed after it. Run after
// changing the page's inline script: node scripts/gen/csp.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { hostsOf, withCsp } from '../lib/csp.mjs'
import { UNITS } from '../../src/shell/registry.js'

const PAGE = new URL('../../src/index.html', import.meta.url)
writeFileSync(PAGE, withCsp(readFileSync(PAGE, 'utf8'), hostsOf(UNITS)))
console.log('gen-csp: src/index.html')
