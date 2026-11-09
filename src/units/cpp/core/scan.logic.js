// Hides: what a scan of a Core Guidelines rule finds in an answer ("A Self-Study System",
// Programming, The track's material: Scans). A scan is a fixed check written for one rule: a
// pattern over the answer's text, comments and the insides of literals blanked so a word in them
// is never a hit, or the g++ 16 warnings the rule's text names, read from what the compiler wrote.
// The generator checks each scan loud on the rule's own bad example and silent on its own good
// one with this same code, so a scan finds in the app what it found at entry.

/**
 * A scan as a stage 7 kind holds it: the rule's number, a pattern (a JavaScript regular
 * expression's source and its flags), or the warnings that make it loud.
 * @typedef {Readonly<{ rule: string, pattern?: string, flags?: string, warning?: readonly string[] }>} Scan
 */
/** @typedef {Readonly<{ rule: string, line: number }>} Hit A scan's first hit: the rule and the line */

/**
 * The text with every comment and the inside of every string and character literal turned into
 * spaces; the quotes and every line break stay, so a match's line is the line typed.
 * @param {string} code
 */
export function blanked(code) {
  let out = ''
  let i = 0
  const keep = (/** @type {string} */ c) => (c === '\n' ? '\n' : ' ')
  /** @param {number} stop */
  const blank = stop => {
    for (; i < stop; i++) out += keep(code[i] ?? '')
  }
  while (i < code.length) {
    const c = code[i] ?? ''
    // a raw string, prefixed or not: R"(…)", u8R"(…)", LR"(…)"
    const raw = /^(?:u8|u|U|L)?R"([^(\s"\\]{0,16})\(/.exec(code.slice(i, i + 24))
    if (code.startsWith('//', i))
      blank(code.indexOf('\n', i) < 0 ? code.length : code.indexOf('\n', i))
    else if (code.startsWith('/*', i))
      blank(code.indexOf('*/', i + 2) < 0 ? code.length : code.indexOf('*/', i + 2) + 2)
    else if (raw && !/\w/.test(code[i - 1] ?? '')) {
      const end = code.indexOf(`)${raw[1]}"`, i)
      const stop = end < 0 ? code.length : end + (raw[1] ?? '').length + 2
      const open = raw[0].length - (raw[1] ?? '').length - 1
      out += code.slice(i, i + open)
      i += open
      blank(stop - 1)
      out += '"'
      i = stop
    } else if (
      c === '"' ||
      (c === "'" &&
        (!/[0-9a-fA-F]/.test(code[i - 1] ?? '') ||
          /(?:^|\W)u8$/.test(code.slice(Math.max(0, i - 3), i))))
    ) {
      out += c
      for (i++; i < code.length && code[i] !== c && code[i] !== '\n'; i++) {
        if (code[i] === '\\') {
          out += ' '
          i++
        }
        out += ' '
      }
      if (code[i] === c) {
        out += c
        i++
      }
    } else {
      out += c
      i++
    }
  }
  return out
}

/**
 * The line a place in a text stands on, from 1.
 * @param {string} text
 * @param {number} at
 */
const lineAt = (text, at) => text.slice(0, at).split('\n').length

/**
 * Each scan's first hit in an answer: its pattern over the blanked text, or one of its warnings
 * at a line of the answer's own file in what the compiler wrote.
 * @param {readonly Scan[]} scans
 * @param {string} code
 * @param {string} [said] the compiler's text on the answer, with the warnings asked
 * @param {string} [file]
 * @returns {Hit[]}
 */
export function scanHits(scans, code, said = '', file = 'main.cpp') {
  const text = blanked(code)
  const lines = code.split('\n')
  const name = file.replace('.', '\\.')
  const warned = [
    ...said.matchAll(
      new RegExp(
        `(?:^|/)${name}(?::(\\d+):\\d+:|\\((\\d+)\\):) warning: .*\\[(-W[\\w+-]+)(?:=[^\\]]*)?\\]`,
        'gm'
      )
    )
  ]
    .map(m => ({ line: Number(m[1] ?? m[2]), flag: m[3] ?? '' }))
    // a kernel launch's <<< >>> is turned by nvcc into code of its own, whose warnings are not
    // the answer's: nothing the Guidelines' text calls a violation stands on that line
    .filter(w => !lines[w.line - 1]?.includes('<<<'))
    // nvcc writes `{}` on a pointer type as a cast in its own code; a cast you write has brackets
    .filter(w => w.flag !== '-Wold-style-cast' || (lines[w.line - 1] ?? '(').includes('('))
  /** @type {Hit[]} */
  const hits = []
  for (const s of scans) {
    if (s.pattern) {
      const m = new RegExp(s.pattern, (s.flags ?? '').replace(/[gy]/g, '')).exec(text)
      if (m) {
        hits.push({ rule: s.rule, line: lineAt(text, m.index) })
        continue
      }
    }
    const w = warned.find(x => (s.warning ?? []).includes(x.flag))
    if (w) hits.push({ rule: s.rule, line: w.line })
  }
  return hits
}

/**
 * The warning flags the scans need on a compile; nvcc passes each to its host compiler.
 * @param {readonly Scan[]} scans
 * @param {boolean} device
 */
export const scanFlags = (scans, device) =>
  [...new Set(scans.flatMap(s => s.warning ?? []))].map(w => (device ? `-Xcompiler=${w}` : w))
