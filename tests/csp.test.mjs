import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { hostsOf, withCsp } from '../scripts/lib/csp.mjs'
import { UNITS } from '../src/shell/registry.js'

// The page's policy allows its inline script by its hash: a changed script with an old policy
// would not run, and the page would open in the wrong theme.
test("the page's Content-Security-Policy is written for its inline script as it is", () => {
  const html = readFileSync(new URL('../src/index.html', import.meta.url), 'utf8')
  assert.match(html, /<meta http-equiv="Content-Security-Policy"/)
  assert.equal(html, withCsp(html, hostsOf(UNITS)), 'run node scripts/gen/csp.mjs')
})
