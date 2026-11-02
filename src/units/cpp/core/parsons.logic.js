// Hides: how a faded Parsons problem is cut from a problem's reference solution ("A Self-Study
// System", Programming, The material: Parsons problem, Decoy lines): the frame (the includes,
// `int main() {` and its `}`) and the empty lines stay whole and in place; every other line is
// shuffled by the shuffle given, keeps its indentation, since C++ does not set its blocks by
// indentation, and has the part of its group that carries the plan's step left as an empty
// field. No line is added that the program does not use.

/** @typedef {string | Readonly<{ blank: number }>} Piece A piece of a Parsons line: its text, or the empty field of the solution's blank by its index */
/** @typedef {Readonly<{ at: number, pieces: readonly Piece[] }>} ParsonsLine A line to put in order: its index in the solution, and its pieces */
/**
 * A Parsons problem: the frame's lines with their indices in the program, and the other lines
 * shuffled, each to be put back in one of the places the frame leaves.
 * @typedef {Readonly<{ id: import('./decode.logic.js').ProblemId, kind: import('./decode.logic.js').KindId, source: string, length: number, frame: readonly Readonly<{ at: number, text: string }>[], lines: readonly ParsonsLine[] }>} Parsons
 */
/** @typedef {<T>(items: readonly T[]) => T[]} Shuffle An order of the items given, the same for the same seed */

/**
 * Whether a line of the solution stays in place: a frame line, or an empty line.
 * @param {import('./decode.logic.js').Code} code
 * @param {number} at
 */
export const staysInPlace = (code, at) => code.frame.includes(at) || !code.lines[at]?.trim()

/**
 * A line of the solution in pieces: its text, with each of its blanks as an empty field.
 * @param {import('./decode.logic.js').Code} code
 * @param {number} at
 * @returns {Piece[]}
 */
export function piecesOf(code, at) {
  const line = code.lines[at] ?? ''
  const blanks = code.blanks
    .map((b, blank) => ({ ...b, blank }))
    .filter(b => b.line === at)
    .sort((a, b) => a.from - b.from)
  /** @type {Piece[]} */
  const pieces = []
  let from = 0
  for (const b of blanks) {
    if (b.from > from) pieces.push(line.slice(from, b.from))
    pieces.push({ blank: b.blank })
    from = b.to
  }
  if (from < line.length) pieces.push(line.slice(from))
  return pieces
}

/**
 * A whole number from a text, the same for the same text.
 * @param {string} text
 */
function hash(text) {
  let h = 2166136261
  for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  return h >>> 0
}

/**
 * A shuffle seeded by a text (mulberry32 drawn into Fisher-Yates): the same order for the same
 * seed, so a Parsons problem opened again shows its lines as before.
 * @param {string} seed
 * @returns {Shuffle}
 */
export const shuffleBy = seed => items => {
  let s = hash(seed)
  const draw = () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(draw() * (i + 1))
    const [a, b] = [out[i], out[j]]
    if (a !== undefined && b !== undefined) [out[i], out[j]] = [b, a]
  }
  return out
}

/**
 * The Parsons problem cut from a problem's reference solution. An order that leaves every line
 * where it stood is no order to find, so it is turned by one line.
 * @param {import('./decode.logic.js').Problem} problem
 * @param {Shuffle} shuffle
 * @returns {Parsons}
 */
export function cutParsons(problem, shuffle) {
  const code = problem.solution
  const all = code.lines.map((_, at) => at)
  const moved = all.filter(at => !staysInPlace(code, at))
  let order = shuffle(moved)
  if (order.length > 1 && order.every((at, i) => at === moved[i]))
    order = [...order.slice(1), ...order.slice(0, 1)]
  return {
    id: problem.id,
    kind: problem.kind,
    source: problem.source,
    length: code.lines.length,
    frame: all.filter(at => staysInPlace(code, at)).map(at => ({ at, text: code.lines[at] ?? '' })),
    lines: order.map(at => ({ at, pieces: piecesOf(code, at) }))
  }
}
