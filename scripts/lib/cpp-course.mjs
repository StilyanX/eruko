// Hides: how the C++ unit's Markdown sources become its course: the source format of unit.md,
// labels.md, each kinds/NN-slug/kind.md and its problem files, and every check a kind passes
// before it is written (A Self-Study System, Programming: The material, The wording, Visuals;
// the build's checks). readCourse parses and runs the checks that need no compiler; buildCourse
// then compiles every program with g++, runs the tests, checks the slow solution against the
// reference, and records each trace under gdb. Read by scripts/gen/cpp.mjs and
// tests/cpp-course.test.mjs. A failing check throws "<file> line <n>: <rule>: <what to fix>".
import { execFileSync, spawn, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, realpathSync, renameSync, writeFileSync } from 'node:fs'
import { availableParallelism, homedir } from 'node:os'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..', '..')
export const CONTENT = path.join(ROOT, 'src', 'units', 'cpp', 'content')
const TRACER = path.join(import.meta.dirname, 'cpp-trace.py')
const CACHE = process.env.ERUKO_CPP_GEN_CACHE ?? path.join(homedir(), '.cache', 'eruko-cpp-gen')
const COMPILER = process.env.ERUKO_CPP_COMPILER ?? 'g++'
const WIDTH = 64
const TRACE_LINES = 18
// A trace's table, rows for its first input: at most this many, so the program and the whole
// table show together on a screen (Trace length).
const TRACE_ROWS = 15
const SLOW_MS = 10000
const MAX_INPUT = 2000
const PROBLEMS = 10

/**
 * @typedef {object} Label A label standing above line `at` of a program. Level 1 opens a group,
 *   level 2 a group inside one, level 0 is a part label (a worked example only): it names a part of C++ used for the first time.
 * @property {number} at
 * @property {0 | 1 | 2} level
 * @property {string} text
 */
/** @typedef {{ line: number, from: number, to: number }} Blank The [[ ]] part of a group: its line and columns, `to` past the end. */
/** @typedef {{ lines: string[], frame: number[], labels: Label[], blanks: Blank[] }} Code */
/** @typedef {{ input: string, output: string }} Test */
/**
 * @typedef {object} Problem
 * @property {string} id
 * @property {number} kind
 * @property {'aether'} source
 * @property {string[]} statement
 * @property {Test[]} examples
 * @property {Test[]} tests
 * @property {Code} solution
 */
/** @typedef {{ text: string, file: string, line: number }} Program A program's source as written, where its fence opens. */
/**
 * @typedef {object} ProblemSource A problem file, parsed and checked.
 * @property {Problem} problem  its tests' outputs still empty
 * @property {string} file
 * @property {Program} solution
 * @property {Program} slow
 * @property {{ program: Program, seeds: number[] } | null} large
 * @property {number[]} testLines the file line of each fenced test, in order
 */
/**
 * @typedef {object} TraceSource
 * @property {string} id
 * @property {string[]} columns
 * @property {string[]} inputs
 * @property {Program} program
 */
/**
 * @typedef {object} KindSource A kind folder, parsed and checked.
 * @property {number} id
 * @property {string} name
 * @property {number[]} after
 * @property {string[]} plan
 * @property {string} file kind.md's path
 * @property {Problem} example
 * @property {Program} exampleProgram
 * @property {TraceSource} trace
 * @property {TraceSource | null} start the Start screen's filled trace (kind 1 only)
 * @property {ProblemSource[]} problems
 */
/**
 * @typedef {object} Course
 * @property {{ title: string, first: number, last: number }[]} sections the sections of unit.md, cut to the kinds that have a folder
 * @property {{ id: number, name: string }[]} names every kind unit.md lists
 * @property {KindSource[]} kinds the kinds that have a folder, in course order
 */

/**
 * @param {string} file
 * @param {number} line
 * @param {string} rule
 * @param {string} what
 * @returns {never}
 */
function fail(file, line, rule, what) {
  const near = path.relative(process.cwd(), file)
  throw new Error(`${near.startsWith('..') ? file : near}${line ? ` line ${line}` : ''}: ${rule}: ${what}`)
}

// ---------------------------------------------------------------- Markdown blocks

/**
 * @typedef {{ type: 'heading', level: number, text: string, line: number }
 *   | { type: 'text', text: string, line: number }
 *   | { type: 'fence', info: string, body: string, line: number }} Block
 */

/**
 * A file's blocks: headings, non-empty text lines (one block per line), fenced blocks.
 * @param {string} file
 * @returns {Block[]}
 */
function blocksOf(file) {
  const lines = readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n')
  /** @type {Block[]} */
  const blocks = []
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i] ?? ''
    const fence = /^```(\S*)\s*$/.exec(raw)
    if (fence) {
      const end = lines.findIndex((l, j) => j > i && /^```\s*$/.test(l))
      if (end < 0) fail(file, i + 1, 'Format', 'this ``` block is never closed: end it with a line holding only ```.')
      const body = lines.slice(i + 1, end)
      blocks.push({ type: 'fence', info: fence[1] ?? '', body: body.length ? `${body.join('\n')}\n` : '', line: i + 1 })
      i = end
      continue
    }
    const heading = /^(#{1,6}) (.+)$/.exec(raw)
    if (heading) blocks.push({ type: 'heading', level: (heading[1] ?? '').length, text: (heading[2] ?? '').trim(), line: i + 1 })
    else if (raw.trim()) blocks.push({ type: 'text', text: raw.trim(), line: i + 1 })
  }
  return blocks
}

/** A reader over a file's blocks that names the file and line of whatever it does not expect. */
class Reader {
  /** @param {string} file */
  constructor(file) {
    this.file = file
    this.blocks = blocksOf(file)
    this.at = 0
  }

  peek() {
    return this.blocks[this.at]
  }

  /** @param {string} what */
  where(what) {
    const b = this.peek()
    return fail(this.file, b?.line ?? 0, 'Format', b ? `expected ${what}, found ${describe(b)}.` : `expected ${what}, found the end of the file.`)
  }

  /**
   * The next block, a heading of this level whose text matches.
   * @param {number} level
   * @param {RegExp} pattern
   * @param {string} what
   */
  heading(level, pattern, what) {
    const b = this.peek()
    if (b?.type !== 'heading' || b.level !== level) return this.where(what)
    const m = pattern.exec(b.text)
    if (!m) return this.where(what)
    this.at++
    return { m, line: b.line }
  }

  /**
   * The next block, a text line that matches.
   * @param {RegExp} pattern
   * @param {string} what
   */
  text(pattern, what) {
    const b = this.peek()
    const m = b?.type === 'text' ? pattern.exec(b.text) : null
    if (!b || !m) return this.where(what)
    this.at++
    return { m, line: b.line }
  }

  /**
   * The next block, a fence whose info is one of `infos`.
   * @param {string[]} infos
   * @param {string} what
   */
  fence(infos, what) {
    const b = this.peek()
    if (b?.type !== 'fence' || !infos.includes(b.info)) return this.where(what)
    this.at++
    return b
  }

  /** Every text line up to the next heading or fence. */
  texts() {
    /** @type {{ text: string, line: number }[]} */
    const out = []
    for (let b = this.peek(); b?.type === 'text'; b = this.peek()) {
      out.push(b)
      this.at++
    }
    return out
  }

  /** @param {string} what */
  end(what) {
    if (this.peek()) this.where(what)
  }
}

/** @param {Block} b */
const describe = b =>
  b.type === 'heading' ? `the heading "${'#'.repeat(b.level)} ${b.text}"` : b.type === 'fence' ? `a \`\`\`${b.info} block` : `the line "${b.text}"`

// ---------------------------------------------------------------- unit.md and labels.md

/**
 * @param {string} dir
 * @returns {{ sections: { title: string, first: number, last: number, line: number }[], names: { id: number, name: string }[] }}
 */
function readUnit(dir) {
  const file = path.join(dir, 'unit.md')
  const r = new Reader(file)
  r.heading(1, /^Sections$/, 'the heading "# Sections"')
  const sections = []
  for (const t of r.texts()) {
    const m = /^- (.+): (\d+)-(\d+)$/.exec(t.text)
    if (!m) fail(file, t.line, 'Format', 'a section is "- <title>: <first kind>-<last kind>", e.g. "- First kinds: 1-12".')
    sections.push({ title: m[1] ?? '', first: Number(m[2]), last: Number(m[3]), line: t.line })
  }
  r.heading(1, /^Kinds$/, 'the heading "# Kinds"')
  const names = []
  for (const t of r.texts()) {
    const m = /^(\d+) (.+)$/.exec(t.text)
    if (!m) fail(file, t.line, 'Format', 'a kind is "<number> <name>", e.g. "7 Count the items that pass a test".')
    const id = Number(m[1])
    const name = m[2] ?? ''
    if (id !== names.length + 1) fail(file, t.line, 'Kind order', `kind ${id} stands where kind ${names.length + 1} is due: number the kinds 1, 2, 3, ... in course order.`)
    if (!/^[A-Z][a-z]/.test(name) || /\.$/.test(name)) fail(file, t.line, 'Kind name', `"${name}" is written in sentence case with no full stop: "Count the items that pass a test".`)
    names.push({ id, name })
  }
  r.end('a kind line or the end of the file')
  if (names.length === 0) fail(file, 0, 'Format', 'the "# Kinds" list is empty.')
  let next = 1
  for (const s of sections) {
    if (s.first !== next || s.last < s.first)
      fail(file, s.line, 'Sections', `the sections run over the kinds in order with no gap: this one starts at kind ${next}.`)
    next = s.last + 1
  }
  if (next !== names.length + 1) fail(file, 0, 'Sections', `the sections cover kinds 1 to ${next - 1}, and the course holds ${names.length}.`)
  return { sections, names }
}

/**
 * @param {string} text
 * @returns {string | null} what is wrong with a label's form, or null
 */
const labelFault = text =>
  !/^[A-Z]/.test(text)
    ? 'starts with a capital letter'
    : !/\.$/.test(text)
      ? 'ends with a full stop'
      : /[.!?]\s/.test(text)
        ? 'is one sentence'
        : null

/**
 * The course's one list of labels, and its plan words.
 * @param {string} dir
 */
function readLabels(dir) {
  const file = path.join(dir, 'labels.md')
  /** @type {Set<string>} */
  const labels = new Set()
  /** @type {string[]} */
  let planWords = []
  for (const b of blocksOf(file)) {
    if (b.type === 'heading') continue
    const item = b.type === 'text' ? /^- (.+)$/.exec(b.text) : null
    const words = b.type === 'text' ? /^Plan words: (.+)$/.exec(b.text) : null
    if (item) {
      const text = item[1] ?? ''
      const fault = labelFault(text)
      if (fault) fail(file, b.line, 'Label', `"${text}": a label is one sentence in the imperative that ${fault}.`)
      if (labels.has(text)) fail(file, b.line, 'Same label', `"${text}" is listed twice: the list holds every label once.`)
      labels.add(text)
    } else if (words) {
      planWords = (words[1] ?? '').split(',').map(w => w.trim().toLowerCase()).filter(Boolean)
    } else fail(file, b.line, 'Format', `labels.md holds headings, "- <label>" lines and one "Plan words: a, b, c" line; found ${describe(b)}.`)
  }
  if (planWords.length === 0) fail(file, 0, 'Format', 'labels.md has no "Plan words: counter, accumulator, ..." line.')
  return { labels, planWords }
}

// ---------------------------------------------------------------- programs

/** @param {string} line the line with strings and characters blanked, so their braces do not count */
const codeOnly = line => line.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, '""')

/**
 * The lowest brace depth inside a line and the depth after it.
 * @param {string} line
 * @param {number} depth before the line
 */
function depths(line, depth) {
  let low = depth
  for (const c of codeOnly(line)) {
    if (c === '{') depth++
    else if (c === '}') low = Math.min(low, --depth)
  }
  return { low, end: depth }
}

/**
 * @typedef {object} ParseOptions What a program may hold.
 * @property {boolean} groups      it is a labelled program: every line other than the frame is in a group
 * @property {boolean} blanks      each group holds exactly one [[ ]] (a problem's solution)
 * @property {boolean} frameLabels it may hold //@ part labels (a worked example)
 * @property {boolean} [shown]     it is shown to the learner: lines at most 64 characters, no comments
 */

/**
 * @typedef {{ level: 1 | 2, depth: number, text: string, line: number, own: number, blanks: number }} Group
 * @typedef {{ level: 0 | 1 | 2, text: string, line: number }} Marker a label line not yet placed above its line
 * @typedef {object} Parse What parseCode has read so far.
 * @property {string} file
 * @property {Set<string>} known
 * @property {ParseOptions} options
 * @property {Code} code
 * @property {Group[]} open   the groups the next line may belong to, outermost first
 * @property {Group[]} groups every group, in order
 * @property {Marker[]} waiting
 * @property {number} depth   the brace depth before the next line
 * @property {'before' | 'header' | 'in' | 'after'} main where the line stands to main: before it, after `int main()`, inside it, after it
 */

/**
 * A label line, checked, or null when the line is none.
 * @param {Parse} s
 * @param {string} trimmed
 * @param {number} at
 * @returns {Marker | null}
 */
function markerOf(s, trimmed, at) {
  const marker = /^\/\/(::|:|@) (.+)$/.exec(trimmed)
  if (!marker) return null
  const kind = marker[1]
  const text = (marker[2] ?? '').trim()
  if (!s.options.groups) fail(s.file, at, 'Format', 'this program holds no labels: take out the //: , //:: and //@ lines.')
  if (kind === '@' && !s.options.frameLabels) fail(s.file, at, 'Frame label', '//@ labels stand in a worked example only.')
  const fault = labelFault(text)
  if (fault) fail(s.file, at, 'Label', `"${text}": a label is one sentence in the imperative that ${fault}.`)
  if (!s.known.has(text)) fail(s.file, at, 'Label', `"${text}" is not in labels.md: add it there, or use the label the list already holds for this part of the plan.`)
  return { level: kind === '::' ? 2 : kind === ':' ? 1 : 0, text, line: at }
}

/**
 * The line with its [[ ]] brackets taken out, and the columns of each part they held.
 * @param {string} source
 * @param {string} file
 * @param {number} at
 */
function cutBlanks(source, file, at) {
  let line = ''
  /** @type {{ from: number, to: number }[]} */
  const cut = []
  for (let rest = source; rest; ) {
    const open = rest.indexOf('[[')
    const close = rest.indexOf(']]')
    if (open < 0) {
      if (close >= 0) fail(file, at, 'Blank', 'a "]]" with no "[[" before it: a blank is written [[part]] on one line.')
      line += rest
      break
    }
    const end = rest.indexOf(']]', open + 2)
    const again = rest.indexOf('[[', open + 2)
    if (end < 0 || (again >= 0 && again < end) || (close >= 0 && close < open))
      fail(file, at, 'Blank', 'a blank is written [[part]] on one line, opened and closed once.')
    const part = rest.slice(open + 2, end)
    if (!part) fail(file, at, 'Blank', 'this blank is empty: put the part left blank between [[ and ]].')
    if (part.trim() !== part) fail(file, at, 'Blank', `write the blank tight, [[${part.trim()}]], with no spaces inside the brackets.`)
    line += rest.slice(0, open)
    cut.push({ from: line.length, to: line.length + part.length })
    line += part
    rest = rest.slice(end + 2)
  }
  if (cut.length && line.trim() === line.slice(cut[0]?.from ?? 0, cut[0]?.to ?? 0).trim())
    fail(file, at, 'Blank', 'a blank is never a whole line: leave blank only the part that carries the plan\'s step.')
  return { line, cut }
}

/**
 * Puts a code line that is no frame line in its group, opening the groups its labels name.
 * @param {Parse} s
 * @param {Marker[]} placed the labels right above the line
 * @param {number} low the lowest brace depth inside the line
 * @param {number} blanks how many [[ ]] the line holds
 * @param {number} at
 */
function intoGroup(s, placed, low, blanks, at) {
  const { open } = s
  while (open.length && (open.at(-1)?.depth ?? 0) > low) open.pop()
  for (const w of placed) {
    if (w.level === 0) continue
    while (open.length && (open.at(-1)?.level ?? 0) >= w.level) open.pop()
    if (w.level === 2 && open.length === 0)
      fail(s.file, w.line, 'Label', `"${w.text}" is a //:: label with no //: group around it: a //:: group stands inside a //: group.`)
    /** @type {Group} */
    const group = { level: w.level, depth: s.depth, text: w.text, line: w.line, own: 0, blanks: 0 }
    open.push(group)
    s.groups.push(group)
  }
  const top = open.at(-1)
  if (!top) fail(s.file, at, 'Label', 'this line is in no group: put a //: label above the group it belongs to.')
  top.own++
  top.blanks += blanks
}

/**
 * Whether a line is one of main's frame lines, after the brace layout of the C++ Core Guidelines
 * (NL.17, K&R): a function's { stands alone on the line after its header, a control statement's
 * { ends the statement's own line.
 * @param {Parse} s
 * @param {string} t the line, trimmed
 * @param {number} end the brace depth after the line
 * @param {number} at
 */
function mainFrame(s, t, end, at) {
  if (s.main === 'header') {
    if (t !== '{') fail(s.file, at, 'Braces', 'main\'s { stands alone on the line right after "int main()".')
    s.main = 'in'
    return true
  }
  if (s.depth === 0 && t === 'int main()') {
    if (s.main !== 'before') fail(s.file, at, 'Braces', 'a program has one main.')
    s.main = 'header'
    return true
  }
  if (s.main === 'in' && s.depth === 1 && end === 0) {
    s.main = 'after'
    return true
  }
  if (s.depth === 0 && /\S\s*\{$/.test(t))
    fail(s.file, at, 'Braces', 'a function\'s { stands alone on the next line (Core Guidelines NL.17): "int main()" or "std::string grade(int score)", then "{".')
  if (s.depth > 0 && t === '{')
    fail(s.file, at, 'Braces', 'a control statement\'s { ends its own line: "if (number < 0) {", "for (...) {".')
  return false
}

/**
 * Reads one line of a program into the parse.
 * @param {Parse} s
 * @param {string} source
 * @param {number} at the line's number in the Markdown file
 */
function readLine(s, source, at) {
  const { file, options, code } = s
  const trimmed = source.trim()
  const marker = markerOf(s, trimmed, at)
  if (marker) return void s.waiting.push(marker)
  if (/^\/\/|^\/\*/.test(trimmed) || (options.shown && /\s\/\/\s/.test(codeOnly(source))))
    fail(file, at, 'Comment', 'a program holds no comments: the labels say what each group does. A label line is "//: ", "//:: " or "//@ " then the label.')
  if (/\t/.test(source)) fail(file, at, 'Indentation', 'indent with 4 spaces per level, never a tab.')
  const { line, cut } = cutBlanks(source, file, at)
  if (cut.length && !options.blanks) fail(file, at, 'Blank', 'only a problem\'s ## Solution holds [[ ]] blanks.')
  if (options.shown && line.length > WIDTH)
    fail(file, at, 'Line', `this line is ${line.length} characters; no code line is wider than ${WIDTH}.`)
  const index = code.lines.length
  code.lines.push(line)
  const { low, end } = depths(line, s.depth)
  const ofMain = options.shown && mainFrame(s, line.trim(), end, at)
  const placed = s.waiting.splice(0)
  for (const w of placed) code.labels.push({ at: index, level: w.level, text: w.text })
  if (options.groups && !trimmed) {
    if (s.depth > 0) fail(file, at, 'Format', 'a blank line stands only between top-level parts (the includes, functions, main), never inside a block.')
    if (placed.some(w => w.level > 0)) fail(file, at, 'Label', 'a label stands right above the first line of its group, not above a blank line.')
    s.open.length = 0
  } else if (options.groups && (/^#include\s/.test(trimmed) || ofMain)) {
    if (cut.length) fail(file, at, 'Blank', 'the frame (the #include lines, int main(), its { and its closing }) is given whole: it holds no blank.')
    const misplaced = placed.find(w => w.level > 0)
    if (misplaced) fail(file, misplaced.line, 'Label', `"${misplaced.text}" stands above a frame line (#include, int main(), its { or its closing }); a group label stands above the group's first line.`)
    s.open.length = 0
    code.frame.push(index)
  } else if (options.groups) intoGroup(s, placed, low, cut.length, at)
  for (const c of cut) code.blanks.push({ line: index, ...c })
  s.depth = end
}

/**
 * A program's lines, frame, labels and blanks, by the label rules of the source format.
 * @param {Program} program
 * @param {Set<string>} known the labels of labels.md
 * @param {ParseOptions} options
 * @returns {{ code: Code, plan: string[] }}
 */
function parseCode(program, known, options) {
  const { file } = program
  /** @type {Parse} */
  const s = { file, known, options, code: { lines: [], frame: [], labels: [], blanks: [] }, open: [], groups: [], waiting: [], depth: 0, main: 'before' }
  program.text
    .replace(/\n$/, '')
    .split('\n')
    .forEach((source, i) => readLine(s, source, program.line + 1 + i))
  const left = s.waiting[0]
  if (left) fail(file, left.line, 'Label', `"${left.text}" stands above no line.`)
  if (s.depth !== 0) fail(file, program.line, 'Format', 'the braces of this program do not balance.')
  if (options.shown && s.main !== 'after') fail(file, program.line, 'Braces', 'the program has one main: "int main()" on its own line, "{" alone on the next, and a "}" alone on its own line to close it.')
  for (const g of s.groups) {
    if (g.own === 0)
      fail(file, g.line, 'Label', `the group "${g.text}" has no line of its own: a //: group holds lines outside its //:: groups, or its steps belong one level up.`)
    if (options.blanks && g.blanks !== 1)
      fail(file, g.line, 'Blank', `the group "${g.text}" holds ${g.blanks} blanks outside its inner groups; each group holds exactly one [[ ]].`)
  }
  return { code: s.code, plan: s.groups.filter(g => g.level === 1).map(g => g.text) }
}

// ---------------------------------------------------------------- statements

/** @param {string} s */
const escaped = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/**
 * @param {{ text: string, line: number }[]} lines
 * @param {string} file
 * @param {number} line where the statement should start
 * @param {{ kindNames: string[], planWords: string[] }} words
 * @returns {string[]}
 */
function checkStatement(lines, file, line, words) {
  if (lines.length === 0) fail(file, line, 'Statement', 'the statement is missing: "Write a program that reads ... and prints ...", then the Input:, Output: and Limits: lines.')
  const first = lines[0]
  if (first && !first.text.startsWith('Write a program that '))
    fail(file, first.line, 'Statement', 'the statement opens "Write a program that reads ... and prints ...".')
  let after = 0
  for (const key of ['Input:', 'Output:', 'Limits:']) {
    const found = lines.filter(l => l.text.startsWith(`${key} `))
    if (found.length !== 1) fail(file, line, 'Statement', `the statement holds one line that starts "${key} ", found ${found.length}.`)
    const at = lines.indexOf(found[0] ?? lines[0] ?? { text: '', line: 0 })
    if (at < after) fail(file, found[0]?.line ?? line, 'Statement', 'the lines come in the order Input:, Output:, Limits:.')
    after = at
  }
  for (const l of lines) {
    for (const name of words.kindNames)
      if (l.text.toLowerCase().includes(name.toLowerCase())) fail(file, l.line, 'Statement', `the statement names the kind "${name}"; it never names the plan or the kind.`)
    for (const w of words.planWords) {
      const m = new RegExp(`\\b${escaped(w)}(s|es)?\\b`, 'i').exec(l.text)
      if (m) fail(file, l.line, 'Statement', `"${m[0]}" is a plan word (labels.md, Plan words); the statement never names the plan.`)
    }
  }
  return lines.map(l => l.text)
}

// ---------------------------------------------------------------- kind and problem files

/**
 * @param {string} file
 * @param {{ kindNames: string[], planWords: string[], labels: Set<string> }} course
 * @param {number} kind
 * @param {string[]} plan
 * @returns {ProblemSource}
 */
function readProblem(file, course, kind, plan) {
  const r = new Reader(file)
  const want = path.basename(file, '.md')
  const head = r.heading(1, /^(\d+)\.(\d{2})$/, `the heading "# ${want}"`)
  if (head.m[0] !== want) fail(file, head.line, 'Format', `the heading is "# ${want}", the file's own name.`)
  const statement = checkStatement(r.texts(), file, head.line + 1, course)
  r.heading(2, /^Examples$/, 'the heading "## Examples"')
  /** @type {Test[]} */
  const examples = []
  for (let b = r.peek(); b?.type === 'fence' && b.info === 'in'; b = r.peek()) {
    const input = r.fence(['in'], 'a ```in block').body
    const output = r.fence(['out'], 'a ```out block after the ```in block').body
    examples.push({ input, output })
  }
  if (examples.length < 1 || examples.length > 2) fail(file, head.line, 'Examples', `a problem shows one or two examples, each a \`\`\`in block then a \`\`\`out block; found ${examples.length}.`)
  r.heading(2, /^Solution$/, 'the heading "## Solution"')
  const fence = r.fence(['cpp'], 'a ```cpp block holding the reference solution')
  const solution = { text: fence.body.replace(/\[\[|\]\]/g, ''), file, line: fence.line }
  const { code, plan: own } = parseCode({ text: fence.body, file, line: fence.line }, course.labels, { groups: true, blanks: true, frameLabels: false, shown: true })
  if (JSON.stringify(own) !== JSON.stringify(plan))
    fail(file, fence.line, 'Kind', `the first-level labels are ${JSON.stringify(own)}; kind ${kind}'s plan is ${JSON.stringify(plan)}, its worked example's //: labels in order.`)
  r.heading(2, /^Slow$/, 'the heading "## Slow"')
  const slowFence = r.fence(['cpp'], 'a ```cpp block holding the slow solution, written apart')
  const slow = { text: slowFence.body, file, line: slowFence.line }
  r.heading(2, /^Tests$/, 'the heading "## Tests"')
  /** @type {Test[]} */
  const tests = []
  /** @type {number[]} */
  const testLines = []
  while (r.peek()?.type === 'fence') {
    const b = r.fence(['in'], 'a ```in block (one per hidden test)')
    tests.push({ input: b.body, output: '' })
    testLines.push(b.line)
  }
  if (tests.length === 0) fail(file, 0, 'Tests', 'the ## Tests section holds at least one ```in block.')
  let large = null
  if (r.peek()?.type === 'heading') {
    r.heading(2, /^Large$/, 'the heading "## Large" or the end of the file')
    const gen = r.fence(['cpp'], 'a ```cpp block holding the generator: it reads a seed and prints one input')
    const seeds = r.text(/^Seeds: (\d+(?:, \d+)*)$/, 'the line "Seeds: 1, 2, 3"')
    large = { program: { text: gen.body, file, line: gen.line }, seeds: (seeds.m[1] ?? '').split(', ').map(Number) }
  }
  r.end('the end of the file')
  for (const [i, t] of tests.entries())
    if (t.input.length > MAX_INPUT) fail(file, testLines[i] ?? 0, 'Tests', `this input is ${t.input.length} characters; the first kinds keep every input to ${MAX_INPUT}.`)
  return {
    problem: { id: want, kind, source: 'aether', statement, examples, tests, solution: code },
    file,
    solution,
    slow,
    large,
    testLines
  }
}

/**
 * @param {string} folder
 * @param {{ id: number, name: string }[]} names
 * @param {{ kindNames: string[], planWords: string[], labels: Set<string> }} course
 * @returns {KindSource}
 */
function readKind(folder, names, course) {
  const file = path.join(folder, 'kind.md')
  const id = Number(/^(\d{2})-/.exec(path.basename(folder))?.[1])
  if (!existsSync(file)) fail(file, 0, 'Format', 'every kind folder holds a kind.md.')
  const r = new Reader(file)
  const head = r.heading(1, /^Kind (\d+): (.+)$/, `the heading "# Kind ${id}: <its name in unit.md>"`)
  const listed = names.find(n => n.id === id)
  if (Number(head.m[1]) !== id || head.m[2] !== listed?.name)
    fail(file, head.line, 'Format', `the heading is "# Kind ${id}: ${listed?.name}", the folder's number and unit.md's name for it.`)
  const afterLine = r.text(/^After: (none|\d+(?:, \d+)*)$/, 'the line "After: none" or "After: 3, 4"')
  const after = afterLine.m[1] === 'none' ? [] : (afterLine.m[1] ?? '').split(', ').map(Number)
  for (const a of after)
    if (!(a < id && names.some(n => n.id === a))) fail(file, afterLine.line, 'Kind order', `kind ${a} is no earlier kind of unit.md: a kind comes after the kinds its plan uses.`)
  r.heading(2, /^Example$/, 'the heading "## Example"')
  const statementStart = r.peek()?.line ?? 0
  const statement = checkStatement(r.texts(), file, statementStart, course)
  const fence = r.fence(['cpp'], 'a ```cpp block holding the worked example\'s program')
  const exampleProgram = { text: fence.body, file, line: fence.line }
  const { code, plan } = parseCode(exampleProgram, course.labels, { groups: true, blanks: false, frameLabels: true, shown: true })
  if (plan.length === 0) fail(file, fence.line, 'Kind', 'the worked example has no //: labels; its //: labels in order are the kind\'s plan.')
  r.heading(2, /^Trace$/, 'the heading "## Trace"')
  const cols = r.text(/^Columns: ([a-z_][a-z0-9_]*(?:, [a-z_][a-z0-9_]*)*)$/, 'the line "Columns: name, name" naming the program\'s variables')
  /** @type {string[]} */
  const inputs = []
  for (const n of [1, 2]) {
    r.text(new RegExp(`^Input ${n}:$`), `the line "Input ${n}:"`)
    inputs.push(r.fence(['', 'in'], `a \`\`\` block holding input ${n}`).body)
  }
  const traceFence = r.fence(['cpp'], 'a ```cpp block holding the trace program')
  const program = traceProgram(traceFence, cols, file, course)
  const columns = (cols.m[1] ?? '').split(', ')
  const start = id === 1 ? readStart(r, file, course, program) : null
  r.end('the end of the file')

  const files = readdirSync(folder).filter(f => f !== 'kind.md').sort()
  for (const f of files)
    if (!new RegExp(`^${id}\\.\\d{2}\\.md$`).test(f)) fail(path.join(folder, f), 0, 'Format', `a kind folder holds kind.md and its problems, each named ${id}.NN.md (e.g. ${id}.01.md).`)
  const problems = files.map(f => readProblem(path.join(folder, f), course, id, plan))
  return {
    id,
    name: listed?.name ?? '',
    after,
    plan,
    file,
    example: { id: `E${id}`, kind: id, source: 'aether', statement, examples: [], tests: [], solution: code },
    exampleProgram,
    trace: { id: `T${id}`, columns, inputs, program },
    start,
    problems
  }
}

/**
 * Kind 1's Start section: the Start screen's filled trace (Running it, Start from zero), a
 * program of its own, so the trace item the first run asks is never shown filled before it is
 * asked.
 * @param {Reader} r
 * @param {string} file
 * @param {{ labels: Set<string> }} course
 * @param {{ text: string }} traced the trace item's program
 * @returns {TraceSource}
 */
function readStart(r, file, course, traced) {
  r.heading(2, /^Start$/, 'the heading "## Start" (kind 1 holds the Start screen\'s filled trace)')
  const cols = r.text(/^Columns: ([a-z_][a-z0-9_]*(?:, [a-z_][a-z0-9_]*)*)$/, 'the line "Columns: name, name" naming the program\'s variables')
  r.text(/^Input:$/, 'the line "Input:"')
  const input = r.fence(['', 'in'], 'a ``` block holding the input').body
  const program = traceProgram(r.fence(['cpp'], 'a ```cpp block holding the Start program'), cols, file, course)
  if (program.text === traced.text) fail(file, program.line, 'Start', 'the Start program is the trace item\'s own program: write another.')
  return { id: 'S1', columns: (cols.m[1] ?? '').split(', '), inputs: [input, input], program }
}

/**
 * A trace program, checked: no labels, at most TRACE_LINES lines, and every column a name in it.
 * @param {{ body: string, line: number }} fence
 * @param {{ m: RegExpExecArray, line: number }} cols
 * @param {string} file
 * @param {{ labels: Set<string> }} course
 */
function traceProgram(fence, cols, file, course) {
  const program = { text: fence.body, file, line: fence.line }
  const code = parseCode(program, course.labels, { groups: false, blanks: false, frameLabels: false, shown: true }).code
  if (code.lines.length > TRACE_LINES)
    fail(file, fence.line, 'Trace length', `the trace program is ${code.lines.length} lines; it fits ${TRACE_LINES}, so its lines and its table show together.`)
  for (const c of (cols.m[1] ?? '').split(', '))
    if (!new RegExp(`\\b${c}\\b`).test(program.text)) fail(file, cols.line, 'Trace', `the column "${c}" is no name in the trace program.`)
  return program
}

/**
 * The course as its sources write it, after every check that needs no compiler.
 * @param {string} [dir] the content folder
 * @param {{ draft?: boolean }} [options] draft: skip only the check that a kind holds 10 problems
 * @returns {Course}
 */
export function readCourse(dir = CONTENT, { draft = false } = {}) {
  const { sections, names } = readUnit(dir)
  const { labels, planWords } = readLabels(dir)
  const course = { kindNames: names.map(n => n.name), planWords, labels }
  const kindsDir = path.join(dir, 'kinds')
  const folders = existsSync(kindsDir) ? readdirSync(kindsDir).sort() : []
  for (const f of folders) {
    const id = Number(/^(\d{2})-[a-z0-9-]+$/.exec(f)?.[1])
    if (!names.some(n => n.id === id)) fail(path.join(kindsDir, f), 0, 'Format', 'a kind folder is named NN-slug (e.g. 07-count), NN a kind of unit.md written with two digits.')
  }
  const kinds = folders.map(f => readKind(path.join(kindsDir, f), names, course))
  for (const k of kinds)
    if (!draft && k.problems.length < PROBLEMS)
      fail(k.file, 0, 'Problems per kind', `kind ${k.id} holds ${k.problems.length} problems; a kind holds at least ${PROBLEMS}. While you write, node scripts/gen/cpp.mjs --draft (or CPP_DRAFT=1) skips this one check.`)
  const present = new Set(kinds.map(k => k.id))
  const cut = sections
    .map(s => ({ title: s.title, first: s.first, last: Math.max(...[...present].filter(id => id >= s.first && id <= s.last)) }))
    .filter(s => s.last >= s.first)
  return { sections: cut, names, kinds }
}

/**
 * The small course file's data: SECTIONS and KINDS.
 * @param {Course} course
 */
export const courseShape = course => ({
  sections: course.sections,
  kinds: course.kinds.map(k => ({ id: k.id, name: k.name, after: k.after, plan: k.plan, problems: k.problems.map(p => p.problem.id), trace: k.trace.id }))
})

// ---------------------------------------------------------------- compiling and running

/** @param {string} text */
const sha = text => createHash('sha256').update(text).digest('hex')

let compilerVersion = ''
/** The compiler's version, read once; throws when it does not start. */
const versionOf = () => {
  if (!compilerVersion) {
    try {
      compilerVersion = execFileSync(COMPILER, ['--version'], { encoding: 'utf8' }).split('\n')[0] ?? ''
    } catch {
      throw new Error(`The C++ generator needs ${COMPILER} (GCC 14 or later) on the PATH, and it does not start.`)
    }
  }
  return compilerVersion
}

/**
 * A promise queue that runs at most `n` jobs at once.
 * @param {number} n
 */
const pool = n => {
  let active = 0
  /** @type {(() => void)[]} */
  const queue = []
  /**
   * @template T
   * @param {() => Promise<T>} job
   * @returns {Promise<T>}
   */
  return job =>
    new Promise((resolve, reject) => {
      const start = () => {
        active++
        job()
          .then(resolve, reject)
          .finally(() => {
            active--
            queue.shift()?.()
          })
      }
      if (active < n) start()
      else queue.push(start)
    })
}
const limit = pool(Math.max(1, availableParallelism()))

/**
 * @param {string} command
 * @param {string[]} args
 * @param {{ cwd?: string, env?: NodeJS.ProcessEnv, input?: string, ms?: number }} [options]
 * @returns {Promise<{ stdout: string, stderr: string, code: number | null, finished: boolean }>}
 */
const run = (command, args, options = {}) =>
  limit(
    () =>
      new Promise(resolve => {
        const child = spawn(command, args, { cwd: options.cwd, env: options.env ?? process.env })
        let stdout = ''
        let stderr = ''
        let finished = true
        child.stdout.on('data', d => (stdout += d))
        child.stderr.on('data', d => (stderr += d))
        child.stdin.on('error', () => {})
        child.stdin.end(options.input ?? '')
        const timer = options.ms
          ? setTimeout(() => {
              finished = false
              child.kill('SIGKILL')
            }, options.ms)
          : null
        child.on('error', e => {
          stderr += e.message
        })
        child.on('close', code => {
          if (timer) clearTimeout(timer)
          resolve({ stdout, stderr, code, finished })
        })
      })
  )

/**
 * The program compiled, from the cache when its text and flags are unchanged.
 * @param {Program} program
 * @param {string[]} flags
 * @param {string} what what the program is, for the error
 * @returns {Promise<{ binary: string, source: string }>}
 */
async function compile(program, flags, what) {
  const all = ['-std=c++23', ...flags, '-pipe', '-fdiagnostics-color=never']
  const dir = path.join(CACHE, sha(JSON.stringify([versionOf(), all, program.text])))
  const binary = path.join(dir, 'program')
  const source = path.join(dir, 'main.cpp')
  if (existsSync(binary)) return { binary, source }
  mkdirSync(dir, { recursive: true })
  writeFileSync(source, program.text)
  // Two runs may compile the same program at once: each writes its own part file, and the
  // rename that finishes it is atomic.
  const part = `program.${process.pid}.${Math.random().toString(36).slice(2)}.part`
  const made = await run(COMPILER, [...all, '-o', part, 'main.cpp'], { cwd: dir, env: { ...process.env, LANG: 'C', LC_ALL: 'C' } })
  if (made.code !== 0) fail(program.file, program.line, 'Entry check', `the ${what} does not compile with ${COMPILER} -std=c++23 (main.cpp line 1 is line ${program.line + 1} of this file):\n${made.stderr}`)
  renameSync(path.join(dir, part), binary)
  return { binary, source }
}

/**
 * What a program prints for one input; throws when it fails or does not end in `ms`.
 * @param {string} binary
 * @param {string} input
 * @param {number} ms
 */
const output = async (binary, input, ms) => {
  const r = await run(binary, [], { input, ms, env: { LANG: 'C' } })
  return { ...r, ok: r.finished && r.code === 0 }
}

/** The text compared by "a test passes": end-of-line spaces and final blank lines dropped. @param {string} text */
export const compared = text =>
  text
    .split('\n')
    .map(l => l.replace(/[ \t\r]+$/, ''))
    .join('\n')
    .replace(/\n+$/, '')

/** @param {string} text */
const shown = text => JSON.stringify(text)

let gdbPath = ''
/** The gdb program: on the PATH, or through nix-shell. */
const gdb = () => {
  if (gdbPath) return gdbPath
  if (spawnSync('gdb', ['--version']).status === 0) return (gdbPath = 'gdb')
  const found = spawnSync('nix-shell', ['-p', 'gdb', '--run', 'command -v gdb'], { encoding: 'utf8' })
  const named = found.status === 0 ? found.stdout.trim().split('\n').at(-1) : ''
  if (!named) throw new Error('The trace recorder needs gdb: put it on the PATH, or make nix-shell -p gdb work.')
  return (gdbPath = named)
}

/** The folder of libstdc++'s gdb printers that match the compiler, or '' to let the recorder look. */
const printers = () => {
  try {
    const lib = realpathSync(execFileSync(COMPILER, ['-print-file-name=libstdc++.so.6'], { encoding: 'utf8' }).trim())
    const version = execFileSync(COMPILER, ['-dumpfullversion'], { encoding: 'utf8' }).trim()
    const folder = path.join(path.dirname(path.dirname(lib)), 'share', `gcc-${version}`, 'python')
    return existsSync(folder) ? folder : ''
  } catch {
    return ''
  }
}

/**
 * A trace: its rows recorded under gdb for the first input, its output for the second.
 * @param {KindSource} kind
 * @param {TraceSource} trace
 */
async function recordTrace(kind, trace) {
  const { file } = kind
  const { binary, source } = await compile(trace.program, ['-g', '-O0'], 'trace program')
  const dir = path.dirname(binary)
  for (const [i, input] of trace.inputs.entries()) {
    const r = await output(binary, input, SLOW_MS)
    if (!r.ok) fail(file, trace.program.line, 'Trace', `the trace program fails or does not end in 10 s on input ${i + 1}:\n${r.stderr}`)
  }
  const second = await output(binary, trace.inputs[1] ?? '', SLOW_MS)
  const inputFile = path.join(dir, 'trace-input.txt')
  const rowsFile = path.join(dir, `trace-${sha(JSON.stringify([readFileSync(TRACER, 'utf8'), trace.columns, trace.inputs[0]]))}.json`)
  if (!existsSync(rowsFile)) {
    writeFileSync(inputFile, trace.inputs[0] ?? '')
    const r = await run(gdb(), ['-q', '-batch', '-iex', 'set auto-load safe-path /nix/store', '-x', TRACER, binary], {
      cwd: dir,
      ms: 60000,
      env: {
        ...process.env,
        TRACE_SRC: 'main.cpp',
        TRACE_SRC_PATH: source,
        TRACE_COLS: JSON.stringify(trace.columns),
        TRACE_IN: inputFile,
        TRACE_OUT: `${rowsFile}.${process.pid}.part`,
        TRACE_PRINTERS: printers()
      }
    })
    if (!existsSync(`${rowsFile}.${process.pid}.part`)) fail(file, trace.program.line, 'Trace', `gdb wrote no table:\n${r.stderr.slice(-2000)}`)
    renameSync(`${rowsFile}.${process.pid}.part`, rowsFile)
  }
  /** @type {{ rows?: { line: number, values: string[] }[], error?: string }} */
  const recorded = JSON.parse(readFileSync(rowsFile, 'utf8'))
  if (recorded.error) fail(file, trace.program.line, 'Trace', recorded.error)
  const rows = recorded.rows ?? []
  if (rows.length === 0) fail(file, trace.program.line, 'Trace', 'the recorder found no line to record.')
  if (rows.length > TRACE_ROWS)
    fail(file, trace.program.line, 'Trace length', `the table for input 1 has ${rows.length} rows; it fits ${TRACE_ROWS}, so the program and the whole table show together: shorten input 1.`)
  for (const [i, c] of trace.columns.entries())
    if (rows.every(r => r.values[i] === '')) fail(file, trace.program.line, 'Trace', `the column "${c}" is empty in every row: name a variable the program declares.`)
  return {
    id: trace.id,
    lines: trace.program.text.replace(/\n$/, '').split('\n'),
    columns: trace.columns,
    inputs: trace.inputs,
    rows,
    output: second.stdout
  }
}

/**
 * A problem with its tests' outputs, after the Entry check and the slow solution's agreement.
 * @param {ProblemSource} p
 * @returns {Promise<Problem>}
 */
async function checkProblem(p) {
  const [solution, slow, generator] = await Promise.all([
    compile(p.solution, ['-O2'], 'reference solution'),
    compile(p.slow, ['-O2'], 'slow solution'),
    p.large ? compile(p.large.program, ['-O2'], 'large-input generator') : null
  ])
  const tests = [...p.problem.tests]
  if (p.large && generator) {
    const made = await Promise.all(p.large.seeds.map(seed => output(generator.binary, `${seed}\n`, SLOW_MS)))
    for (const [i, r] of made.entries()) {
      if (!r.ok) fail(p.file, p.large.program.line, 'Tests', `the generator fails on seed ${p.large.seeds[i]}:\n${r.stderr}`)
      if (r.stdout.length > MAX_INPUT) fail(p.file, p.large.program.line, 'Tests', `seed ${p.large.seeds[i]} makes an input of ${r.stdout.length} characters; the first kinds keep every input to ${MAX_INPUT}.`)
      tests.push({ input: r.stdout, output: '' })
    }
  }
  const all = [...p.problem.examples, ...tests]
  const fast = await Promise.all(all.map(t => output(solution.binary, t.input, SLOW_MS)))
  for (const [i, r] of fast.entries()) {
    const t = all[i] ?? { input: '', output: '' }
    if (!r.ok) fail(p.file, p.solution.line, 'Entry check', `the reference solution fails or does not end in 10 s on the input ${shown(t.input)}:\n${r.stderr}`)
    if (i < p.problem.examples.length && compared(r.stdout) !== compared(t.output))
      fail(p.file, p.solution.line, 'Entry check', `on example ${i + 1} the reference solution prints ${shown(r.stdout)}; the example expects ${shown(t.output)}.`)
  }
  const slowRuns = await Promise.all(all.map(t => output(slow.binary, t.input, SLOW_MS)))
  let agreed = 0
  for (const [i, r] of slowRuns.entries()) {
    if (!r.finished) continue
    const t = all[i] ?? { input: '', output: '' }
    if (r.code !== 0 || compared(r.stdout) !== compared(fast[i]?.stdout ?? ''))
      fail(p.file, p.slow.line, 'Written problems', `on the input ${shown(t.input)} the slow solution prints ${shown(r.stdout)} and the reference ${shown(fast[i]?.stdout ?? '')}.${r.stderr ? `\n${r.stderr}` : ''}`)
    agreed++
  }
  if (agreed === 0) fail(p.file, p.slow.line, 'Written problems', 'the slow solution finishes no test in 10 s, so nothing checks the reference.')
  const shownCount = p.problem.examples.length
  return { ...p.problem, tests: tests.map((t, i) => ({ input: t.input, output: fast[shownCount + i]?.stdout ?? '' })) }
}

/**
 * One kind, every program checked: what k<NN>.gen.js holds.
 * @param {KindSource} kind
 */
async function buildKind(kind) {
  const [, trace, start, problems] = await Promise.all([
    compile(kind.exampleProgram, ['-O2'], 'worked example'),
    recordTrace(kind, kind.trace),
    kind.start ? recordTrace(kind, kind.start) : null,
    Promise.all(kind.problems.map(checkProblem))
  ])
  const built = { id: kind.id, example: kind.example, trace, problems: Object.fromEntries(problems.map(p => [p.id, p])) }
  return start ? { ...built, start: { id: start.id, lines: start.lines, columns: start.columns, input: start.inputs[0], rows: start.rows } } : built
}

/**
 * The whole course, every check run.
 * @param {string} [dir] the content folder
 * @param {{ draft?: boolean }} [options] as readCourse
 */
export async function buildCourse(dir = CONTENT, options = {}) {
  const course = readCourse(dir, options)
  const kinds = await Promise.all(course.kinds.map(buildKind))
  return { course, kinds }
}
