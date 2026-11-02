// Hides: how a maths unit's text is cut into words, bold terms and formulas, and how an inline
// formula is cut into pieces that can wrap. The screens draw these pieces (parts/maths-screens.dom.js)
// and the generator turns each piece's TeX into MathML (scripts/gen/mathml.mjs), so the two always
// cut the same text the same way.

// The signs an inline formula may wrap before, outside any bracket: relations first, then + and −.
const RELATION = /^(=|<|>|\\(?:le|ge|leq|geq|ne|neq|approx)(?![a-zA-Z]))/
const TERM = /^(\+|-|\\(?:pm|mp)(?![a-zA-Z]))/

/**
 * TeX cut before each sign `at` matches outside brackets. A sign that opens it, or follows another
 * sign, an opening bracket, ^ or _, is unary and stays.
 * @param {string} tex
 * @param {RegExp} at
 */
function cut(tex, at) {
  /** @type {string[]} */
  const pieces = []
  let depth = 0
  let start = 0
  let afterSign = true
  for (let i = 0; i < tex.length; i++) {
    const rest = tex.slice(i)
    const sized = rest.match(/^\\(left|right)(?![a-zA-Z])\s*(\\[a-zA-Z]+|\\.|.)/)
    if (sized) {
      depth += sized[1] === 'left' ? 1 : -1
      i += sized[0].length - 1 // past \left or \right and the bracket it sizes
      afterSign = sized[1] === 'left'
      continue
    }
    const c = tex.charAt(i)
    if (c === '\\' && /^\\[{}()[\]]/.test(rest)) {
      i++
      afterSign = false
      continue
    }
    if ('{(['.includes(c)) depth++
    else if ('})]'.includes(c)) depth--
    if (/\s/.test(c)) continue
    const sign = depth === 0 ? (rest.match(RELATION) ?? rest.match(TERM)) : null
    if (sign) {
      if (!afterSign && at.test(rest)) {
        pieces.push(tex.slice(start, i).trim())
        start = i
      }
      afterSign = true
      i += sign[0].length - 1
      continue
    }
    // A sign after ^ or _ is the script itself, as in 0^+: it never starts a piece.
    afterSign = '{([^_'.includes(c)
  }
  pieces.push(tex.slice(start).trim())
  return pieces
}

/**
 * An inline formula as the pieces it is set in: each side of a relation is a block that moves to a
 * new line whole, and wraps before its own + and − only when it is still wider than the line.
 * Each piece after the first opens with {} so its sign keeps the spacing of a binary sign. A
 * formula with no such sign, or one that holds an environment, is one piece, itself.
 * @param {string} tex
 * @returns {string[][]} the sides, each a list of pieces' TeX
 */
export function formulaPieces(tex) {
  // An environment (a table) is one block: cutting it at a sign leaves \begin without its \end.
  if (tex.includes('\\begin{')) return [[tex]]
  let n = 0
  return cut(tex, RELATION).map(side => cut(side, TERM).map(piece => `${n++ ? '{}' : ''}${piece}`))
}

// Closing punctuation that must not start a line after an inline formula: it is set inside the
// formula's last block, so the line never breaks between them.
export const CLOSE_PUNCT = /^[.,;:!?)\]}%’”"'…‰]+/

/**
 * A text as the screens draw it: plain runs, inline formulas between single $, and formulas
 * between $$ set on a line of their own. A **bold** term may hold a formula too.
 * @typedef {{ kind: 'text', text: string } | { kind: 'maths', tex: string } | { kind: 'display', tex: string }} Run
 * @param {string} text
 * @returns {{ bold: boolean, runs: Run[] }[]} each part between the bold marks, in order
 */
export function textRuns(text) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => ({ bold: i % 2 === 1, runs: mathsRuns(part) }))
}

/**
 * The key a display formula's MathML is kept under, apart from the same TeX set inline.
 * @param {string} tex
 */
export const displayKey = tex => `$$${tex}`

/**
 * Plain runs and inline formulas, found the way TeX's own scanner finds them: a single `$` opens a
 * formula and the next `$` outside braces closes it, so a `$k$` inside \text{…} stays inside its
 * formula. `\$` is a dollar sign, shown as one, and `$$` opens and closes a display formula.
 * @param {string} s
 * @returns {Run[]}
 */
function mathsRuns(s) {
  /** @type {Run[]} */
  const runs = []
  let plain = ''
  let i = 0
  while (i < s.length) {
    const c = s.charAt(i)
    if (c === '\\' && s.charAt(i + 1) === '$') {
      plain += '$'
      i += 2
      continue
    }
    if (c !== '$') {
      plain += c
      i++
      continue
    }
    const delim = s.charAt(i + 1) === '$' ? '$$' : '$'
    let depth = 0
    let j = i + delim.length
    for (; j < s.length; j++) {
      const d = s.charAt(j)
      if (d === '\\') j++
      else if (d === '{') depth++
      else if (d === '}') depth--
      else if (depth === 0 && s.startsWith(delim, j)) break
    }
    if (j >= s.length) {
      plain += s.slice(i)
      break
    }
    const tex = s.slice(i + delim.length, j).trim()
    runs.push({ kind: 'text', text: plain })
    runs.push(delim === '$$' ? { kind: 'display', tex } : { kind: 'maths', tex })
    plain = ''
    i = j + delim.length
  }
  runs.push({ kind: 'text', text: plain })
  return runs
}

/**
 * Every piece of TeX the screens set for `text`, for the generator: an inline formula's pieces,
 * and each display formula under its display key.
 * @param {string} text
 * @returns {string[]}
 */
export const piecesIn = text =>
  textRuns(text)
    .flatMap(part => part.runs)
    .flatMap(run =>
      run.kind === 'maths'
        ? formulaPieces(run.tex).flat()
        : run.kind === 'display'
          ? [displayKey(run.tex)]
          : []
    )

/**
 * Every problem in a content module's value, at any depth: an object with a `form` and an
 * `answer`, both text. The units' typesetters read the maths their screens set from them.
 * @param {unknown} v
 * @returns {{ form: string, answer: string }[]}
 */
export const problemsIn = v =>
  Array.isArray(v)
    ? v.flatMap(problemsIn)
    : v !== null && typeof v === 'object'
      ? [
          ...('form' in v &&
          'answer' in v &&
          typeof v.form === 'string' &&
          typeof v.answer === 'string'
            ? [{ form: v.form, answer: v.answer }]
            : []),
          ...Object.values(v).flatMap(problemsIn)
        ]
      : []
