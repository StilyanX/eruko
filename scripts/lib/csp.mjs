// Hides: the app's Content-Security-Policy, the browser rule that lets the page run only its own
// code and contact only itself and the hosts its units name (each unit's entry, `hosts`), and how
// it is written into src/index.html as a <meta>, for scripts/gen/csp.mjs and tests/csp.test.mjs
// alike. The page's one inline script (the theme, set before the first paint) is allowed by its
// SHA-256, so a changed script needs the policy written again. style-src keeps 'unsafe-inline':
// the MathML Temml writes sets display and math-depth in style attributes, and a unit's element
// may set a custom property in its style attribute through the view kit.

import { createHash } from 'node:crypto'

const META = /^ *<meta http-equiv="Content-Security-Policy"[^>]*>\n/m
const CHARSET = '<meta charset="UTF-8" />\n'

/**
 * The outside hosts the units connect to and play sound from, each once.
 * @typedef {{ connect: string[], media: string[] }} Hosts
 */

/**
 * The hosts every unit names, merged.
 * @param {readonly { hosts?: { connect?: readonly string[], media?: readonly string[] } }[]} units
 * @returns {Hosts}
 */
export const hostsOf = units => ({
  connect: [...new Set(units.flatMap(u => u.hosts?.connect ?? []))],
  media: [...new Set(units.flatMap(u => u.hosts?.media ?? []))]
})

/**
 * The policy for a page with these inline scripts.
 * @param {string[]} inline
 * @param {Hosts} hosts
 */
function policyOf(inline, hosts) {
  const sha256 = (/** @type {string} */ s) =>
    `'sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}'`
  return [
    "default-src 'self'",
    // 'wasm-unsafe-eval' lets the record's SQLite compile its WebAssembly; nothing else is eval'd.
    `script-src 'self' 'wasm-unsafe-eval' ${inline.map(sha256).join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    ["connect-src 'self'", ...hosts.connect].join(' '),
    ["media-src 'self' blob:", ...hosts.media].join(' '),
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'"
  ].join('; ')
}

/**
 * The page with its policy written in, right after its charset.
 * @param {string} html
 * @param {Hosts} hosts
 */
export function withCsp(html, hosts) {
  const bare = html.replace(META, '')
  const inline = [...bare.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)]
    .map(m => m[1] ?? '')
    .filter(s => s.trim())
  const at = bare.indexOf(CHARSET)
  if (at < 0) throw new Error('src/index.html has no <meta charset="UTF-8" />')
  const indent = /([ \t]*)$/.exec(bare.slice(0, at))?.[1] ?? ''
  const meta = `${indent}<meta http-equiv="Content-Security-Policy" content="${policyOf(inline, hosts)}" />\n`
  return bare.slice(0, at + CHARSET.length) + meta + bare.slice(at + CHARSET.length)
}
