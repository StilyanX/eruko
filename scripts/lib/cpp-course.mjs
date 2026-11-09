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
import { callOf, catch2Cases } from '../../src/units/cpp/core/judge.logic.js'

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
// Exercism's C++ track, its test files at one commit (content/exercism/, NOTICE), and Catch2 v2,
// the test runner they are written for, vendored beside the runner.
const EXERCISM_COMMIT = '8d139cb0'
const CATCH = path.join(ROOT, 'scripts', 'vendor', 'catch2-2.13.6', 'catch.hpp')

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
 * @property {'aether' | 'exercism' | 'contest'} source  aether for a problem Eruko writes
 * @property {{ contest: string, year: number, problem: string, licence: string }} [found] a contest problem's archive, year and licence
 * @property {string[]} statement
 * @property {Test[]} examples
 * @property {Test[]} tests
 * @property {Code} solution
 * @property {Fn} [fn] a function problem's own: its exercise, header, test file and example calls
 */
/**
 * @typedef {object} Fn A function problem (Exercism's track): you write the header the test file
 *   includes; its tests are the test file's cases, the first the example (`examples[0].input` and
 *   each test's `input` is a case's name).
 * @property {string} slug     the exercise
 * @property {string} commit   the track's commit the test file is taken at
 * @property {string} header   the file name the test file includes, "leap.h"
 * @property {string} name     the test file's name, "leap_test.cpp"
 * @property {string} test     the test file, with the cases an open report names as missing added
 * @property {string[]} setup  the example case's lines before its first assertion
 * @property {{ call: string, expected: string }[]} calls the example case's assertions as calls with the value each must give
 */
/** @typedef {{ text: string, file: string, line: number }} Program A program's source as written, where its fence opens. */
/**
 * @typedef {object} ProblemSource A problem file, parsed and checked.
 * @property {Problem} problem  its tests' outputs still empty
 * @property {string} file
 * @property {Program} solution
 * @property {Program | null} slow  null for a found problem, whose tests are its own
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
    if (!m) fail(file, t.line, 'Format', 'a section is "- <title>: <first kind>-<last kind>", e.g. "- Whole programs: 1-12".')
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
 * @property {boolean} [header]    it is a function problem's header: no main; its frame is `#pragma once`, the #include lines and its namespaces' opening and closing lines
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
 * @property {number[]} ns    a header's open namespaces: the depth before each one's opening line
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
  // a member function's { stands alone too, on the line after its header inside the class
  const before = (s.code.lines.at(-2) ?? '').trim()
  const member = /\)(\s+(const|noexcept|override))*$/.test(before) && !/^(if|for|while|switch|else|do)\b/.test(before)
  if (s.depth > 0 && t === '{' && !member)
    fail(s.file, at, 'Braces', 'a control statement\'s { ends its own line: "if (number < 0) {", "for (...) {".')
  return false
}

/**
 * Whether a line is one of a header's frame lines: `#pragma once`, a namespace's opening line, or
 * the line that closes it ("}" or "}  // namespace name"). Its functions and classes stand in
 * labelled groups, as the functions above main do in a whole program.
 * @param {Parse} s
 * @param {string} t the line, trimmed
 * @param {boolean} closes it closes the innermost namespace
 */
function headerFrame(s, t, closes) {
  if (t === '#pragma once') return true
  // a class's closing line, at the depth of the namespace it stands in, stands in place
  if (t === '};' && s.depth - 1 === s.ns.length) return true
  if (closes) {
    s.ns.pop()
    return true
  }
  if (s.depth === s.ns.length && /^namespace [\w:]+ \{$/.test(t)) {
    s.ns.push(s.depth)
    return true
  }
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
  const closesNs = Boolean(options.header) && s.ns.length > 0 && s.depth - 1 === s.ns.at(-1) && /^\}( {2}\/\/ namespace [\w:]+)?$/.test(trimmed)
  if (!closesNs && (/^\/\/|^\/\*/.test(trimmed) || (options.shown && /\s\/\/\s/.test(codeOnly(source)))))
    fail(file, at, 'Comment', 'a program holds no comments: the labels say what each group does. A label line is "//: ", "//:: " or "//@ " then the label.')
  if (/\t/.test(source)) fail(file, at, 'Indentation', 'indent with 4 spaces per level, never a tab.')
  const { line, cut } = cutBlanks(source, file, at)
  if (cut.length && !options.blanks) fail(file, at, 'Blank', 'only a problem\'s ## Solution holds [[ ]] blanks.')
  if (options.shown && line.length > WIDTH)
    fail(file, at, 'Line', `this line is ${line.length} characters; no code line is wider than ${WIDTH}.`)
  const index = code.lines.length
  code.lines.push(line)
  const { low, end } = depths(line, s.depth)
  const ofMain = options.header ? headerFrame(s, trimmed, closesNs) : options.shown && mainFrame(s, line.trim(), end, at)
  const placed = s.waiting.splice(0)
  for (const w of placed) code.labels.push({ at: index, level: w.level, text: w.text })
  if (options.groups && !trimmed) {
    if (s.depth > s.ns.length) fail(file, at, 'Format', 'a blank line stands only between top-level parts (the includes, functions, main), never inside a block.')
    if (placed.some(w => w.level > 0)) fail(file, at, 'Label', 'a label stands right above the first line of its group, not above a blank line.')
    s.open.length = 0
  } else if (options.groups && (/^#include\s/.test(trimmed) || ofMain)) {
    if (cut.length) fail(file, at, 'Blank', 'the frame (the #include lines, int main(), its { and its closing }, a header\'s #pragma once and namespace lines) is given whole: it holds no blank.')
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
  const s = { file, known, options, code: { lines: [], frame: [], labels: [], blanks: [] }, open: [], groups: [], waiting: [], depth: 0, main: 'before', ns: [] }
  program.text
    .replace(/\n$/, '')
    .split('\n')
    .forEach((source, i) => readLine(s, source, program.line + 1 + i))
  const left = s.waiting[0]
  if (left) fail(file, left.line, 'Label', `"${left.text}" stands above no line.`)
  if (s.depth !== 0) fail(file, program.line, 'Format', 'the braces of this program do not balance.')
  if (options.shown && !options.header && s.main !== 'after') fail(file, program.line, 'Braces', 'the program has one main: "int main()" on its own line, "{" alone on the next, and a "}" alone on its own line to close it.')
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
function checkStatement(lines, file, line, words, fn = false) {
  if (lines.length === 0) fail(file, line, 'Statement', fn ? 'the statement is missing: "Write a function `name(…)` that returns …", then the Limits: line.' : 'the statement is missing: "Write a program that reads ... and prints ...", then the Input:, Output: and Limits: lines.')
  const first = lines[0]
  if (first && fn && !/^Write an? (function|class|struct) `[^`]+` /.test(first.text))
    fail(file, first.line, 'Statement', 'a function problem\'s statement opens "Write a function `name(…)` that returns …" (or "Write a class `name` whose …"), with the names the test file calls.')
  if (first && !fn && !first.text.startsWith('Write a program that '))
    fail(file, first.line, 'Statement', 'the statement opens "Write a program that reads ... and prints ...".')
  let after = 0
  for (const key of fn ? ['Limits:'] : ['Input:', 'Output:', 'Limits:']) {
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
  const found = foundProblem(r, { file, course, kind, plan, id: want, line: head.line })
  if (found) return found
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
    if (t.input.length > MAX_INPUT) fail(file, testLines[i] ?? 0, 'Tests', `this input is ${t.input.length} characters; the whole-program kinds keep every input to ${MAX_INPUT}.`)
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
 * The test cases of a Catch2 test file in order: each one's name and body.
 * @param {string} full
 * @param {string} file
 */
function testCases(full, file) {
  // a benchmark the track keeps behind EXERCISM_INCLUDE_BENCHMARK is never built, so it is no case
  const text = full.replace(/#if defined\(EXERCISM_INCLUDE_BENCHMARK\)[\s\S]*?#endif/g, (/** @type {string} */ m) => m.replace(/[^\n]/g, ' '))
  const cases = []
  for (const m of text.matchAll(/TEST_CASE\(\s*(?:\/\/[^\n]*\n\s*)*"((?:[^"\\]|\\.)*)"(?:\s|\/\/[^\n]*\n)*(?:,(?:\s|\/\/[^\n]*\n)*"[^"]*"\s*)?\)\s*\{/g)) {
    let depth = 1
    let i = (m.index ?? 0) + m[0].length
    const from = i
    for (; i < text.length && depth > 0; i++) {
      const c = text[i]
      if (c === '"' || c === "'") {
        for (i++; i < text.length && text[i] !== c; i++) if (text[i] === '\\') i++
      } else if (c === '{') depth++
      else if (c === '}') depth--
    }
    if (depth) fail(file, 0, 'Tests', `the test case "${m[1]}" never closes.`)
    cases.push({ name: (m[1] ?? '').replace(/\\(.)/g, '$1'), body: text.slice(from, i - 1), at: m.index ?? 0 })
  }
  return cases
}

/**
 * A test file with `#if defined(EXERCISM_RUN_ALL_TESTS)` standing right after its first case and
 * its `#endif` at the end: as the track writes it, or with the guard moved there (an
 * `#ifdef EXERCISM_RUN_ALL_TESTS`, a guard after the last case, or none). Nothing else changes.
 * @param {string} text
 * @param {string} file
 */
function guardAfterFirst(text, file) {
  const cases = testCases(text, file)
  const guard = /^#if(?:def EXERCISM_RUN_ALL_TESTS| defined\(EXERCISM_RUN_ALL_TESTS\))\s*$/m.exec(text)
  const second = cases[1]?.at ?? -1
  if (guard && guard.index > (cases[0]?.at ?? 0) && (second < 0 || guard.index < second) && /^#if defined/.test(guard[0])) return text
  let body = text
  if (guard) {
    const end = body.indexOf('#endif', guard.index)
    if (end < 0) fail(file, 0, 'Tests', 'the EXERCISM_RUN_ALL_TESTS guard has no #endif.')
    body = body.slice(0, guard.index) + body.slice(guard.index + guard[0].length, end) + body.slice(end + '#endif'.length)
  }
  if (cases.length < 2) return body
  const again = testCases(body, file)
  const at = again[1]?.at ?? body.length
  return `${body.slice(0, at)}#if defined(EXERCISM_RUN_ALL_TESTS)\n${body.slice(at).replace(/\n*$/, '\n')}#endif\n`
}

/**
 * The statements of a case's body, each on one line, split at the semicolons outside brackets
 * and strings.
 * @param {string} body
 */
function statementsOf(body) {
  const out = []
  let depth = 0
  let cur = ''
  for (let i = 0; i < body.length; i++) {
    const c = body[i] ?? ''
    if (c === '"' || c === "'") {
      let j = i + 1
      for (; j < body.length && body[j] !== c; j++) if (body[j] === '\\') j++
      cur += body.slice(i, j + 1)
      i = j
      continue
    }
    if ('([{'.includes(c)) depth++
    if (')]}'.includes(c)) depth--
    cur += c
    // a statement ends at a semicolon outside brackets, or at the brace that closes a block
    if ((c === ';' && depth === 0) || (c === '}' && depth === 0 && !/^\s*[;,)]/.test(body.slice(i + 1)))) {
      if (cur.trim()) out.push(cur.replace(/\s+/g, ' ').trim())
      cur = ''
    }
  }
  if (cur.trim()) out.push(cur.replace(/\s+/g, ' ').trim())
  return out
}

/**
 * The example case as the paper shows it: its lines before its first assertion, then each
 * assertion as a call with the value it must give (judge.logic.js `callOf`).
 * @param {string} source
 */
function exampleOf(source) {
  // a comment of the test file is no line of the example
  const body = source.replace(/("(?:[^"\\\n]|\\.)*")|\/\/[^\n]*/g, (/** @type {string} */ _m, /** @type {string | undefined} */ str) => str ?? '')
  /** @type {string[]} */
  const setup = []
  /** @type {{ call: string, expected: string }[]} */
  const calls = []
  for (const st of statementsOf(body).flatMap(x => {
    const sec = /^SECTION\s*\("[^"]*"\)\s*\{([\s\S]*)\}$/.exec(x)
    return sec ? statementsOf(sec[1] ?? '') : [x]
  })) {
    const m = /^(REQUIRE|CHECK)(_FALSE|_THROWS_AS|_THROWS|_NOTHROW)?\s*\(([\s\S]*)\)\s*;$/.exec(st)
    if (m) {
      const { call, expected } = callOf(`${m[1]}${m[2] ?? ''}`, (m[3] ?? '').trim())
      calls.push({ call, expected })
    } else setup.push(st)
  }
  return { setup, calls }
}

/**
 * A function problem: `Source: exercism <slug>`, its statement, `## Solution` the header you
 * write; its tests are content/exercism/<slug>_test.cpp's cases (plus <slug>_test.added.cpp's,
 * the cases an open report names as missing, put before the file's last #endif).
 * @param {Reader} r
 * @param {{ file: string, course: { kindNames: string[], planWords: string[], labels: Set<string> }, kind: number, plan: string[], id: string, slug: string, line: number }} at
 * @returns {ProblemSource}
 */
function readFunctionProblem(r, { file, course, kind, plan, id, slug, line }) {
  const statement = checkStatement(r.texts(), file, line + 1, course, true)
  r.heading(2, /^Solution$/, 'the heading "## Solution"')
  const fence = r.fence(['cpp'], 'a ```cpp block holding the reference solution, the header the test file includes')
  if (!slug) return readWrittenFunction(r, { file, course, kind, plan, id, line, statement, fence })
  r.end('the end of the file')
  const solution = { text: fence.body.replace(/\[\[|\]\]/g, ''), file, line: fence.line }
  const { code, plan: own } = parseCode({ text: fence.body, file, line: fence.line }, course.labels, { groups: true, blanks: true, frameLabels: false, shown: true, header: true })
  if (JSON.stringify(own) !== JSON.stringify(plan))
    fail(file, fence.line, 'Kind', `the first-level labels are ${JSON.stringify(own)}; kind ${kind}'s plan is ${JSON.stringify(plan)}, its worked example's //: labels in order.`)
  const dir = path.join(path.dirname(path.dirname(path.dirname(file))), 'exercism')
  // the track's file names turn each dash into _: collatz-conjecture's is collatz_conjecture_test.cpp
  const name = `${slug.replaceAll('-', '_')}_test.cpp`
  if (!existsSync(path.join(dir, name))) fail(file, line, 'Source', `content/exercism/${name} is missing: copy it from exercism/cpp at ${EXERCISM_COMMIT}.`)
  // the first case is the example and every other is hidden, so the copy served puts the track's
  // `#if defined(EXERCISM_RUN_ALL_TESTS)` right after the first case where the file puts it elsewhere
  let test = guardAfterFirst(readFileSync(path.join(dir, name), 'utf8'), path.join(dir, name))
  const added = path.join(dir, `${slug.replaceAll('-', '_')}_test.added.cpp`)
  if (existsSync(added)) {
    const end = test.lastIndexOf('#endif')
    if (end < 0) fail(added, 0, 'Tests', `${name} has no #endif to put the added cases before.`)
    test = `${test.slice(0, end)}${readFileSync(added, 'utf8').replace(/\n*$/, '\n')}${test.slice(end)}`
  }
  const header = /#include "([\w.-]+\.h)"/.exec(test)?.[1]
  if (!header) fail(path.join(dir, name), 1, 'Tests', 'the test file includes no "<name>.h".')
  const cases = testCases(test, path.join(dir, name))
  if (!cases.length) fail(path.join(dir, name), 1, 'Tests', 'the test file holds no test case.')
  if (new Set(cases.map(c => c.name)).size !== cases.length) fail(path.join(dir, name), 1, 'Tests', 'two test cases share a name.')
  const { setup, calls } = exampleOf(cases[0]?.body ?? '')
  if (!calls.length && !setup.length) fail(path.join(dir, name), 1, 'Examples and tests', 'the example case is empty.')
  return {
    problem: {
      id,
      kind,
      source: 'exercism',
      statement,
      examples: [{ input: cases[0]?.name ?? '', output: '' }],
      tests: cases.slice(1).map(c => ({ input: c.name, output: '' })),
      solution: code,
      fn: { slug, commit: EXERCISM_COMMIT, header, name, test, setup, calls }
    },
    file,
    solution,
    slow: null,
    large: null,
    testLines: []
  }
}

/**
 * A contest problem (`Source: nwerc 2022 a`, then `Licence: <the licence its archive names in its
 * own files>`): its statement rewritten bare, `## Solution` the jury's solution rewritten as the
 * kind's worked example writes it; its examples are the archive's sample tests and its hidden
 * tests the secret ones, copied whole to content/contests/<contest>-<year>/<problem>/{sample,secret}/
 * as NAME.in and NAME.ans. Output is compared as text, so a problem the archive checks any other
 * way does not enter.
 * @param {Reader} r
 * @param {{ file: string, course: { kindNames: string[], planWords: string[], labels: Set<string> }, kind: number, plan: string[], id: string, line: number, contest: string, year: number, problem: string }} at
 * @returns {ProblemSource}
 */
function readContestProblem(r, { file, course, kind, plan, id, line, contest, year, problem }) {
  // BY-SA 4.0 itself, or a licence Creative Commons lists as compatible with it
  const licence = r.text(/^Licence: (CC BY-SA 4\.0|Free Art License 1\.3|GPLv3) \(.+\)$/, 'the line "Licence: CC BY-SA 4.0 (<the archive\'s own file that names it>)"').m[1] ?? ''
  const statement = checkStatement(r.texts(), file, line + 2, course)
  r.heading(2, /^Solution$/, 'the heading "## Solution"')
  const fence = r.fence(['cpp'], 'a ```cpp block holding the reference solution')
  r.end('the end of the file')
  const { code, plan: own } = parseCode({ text: fence.body, file, line: fence.line }, course.labels, { groups: true, blanks: true, frameLabels: false, shown: true })
  if (JSON.stringify(own) !== JSON.stringify(plan))
    fail(file, fence.line, 'Kind', `the first-level labels are ${JSON.stringify(own)}; kind ${kind}'s plan is ${JSON.stringify(plan)}, its worked example's //: labels in order.`)
  const dir = path.join(path.dirname(path.dirname(path.dirname(file))), 'contests', `${contest}-${year}`, problem)
  /** @param {string} part */
  const tests = part => {
    const at = path.join(dir, part)
    if (!existsSync(at)) fail(file, line, 'Source', `content/contests/${contest}-${year}/${problem}/${part}/ is missing: copy the archive's ${part} tests there.`)
    return readdirSync(at)
      .filter(f => f.endsWith('.in'))
      .sort()
      .map(f => {
        const ans = path.join(at, f.replace(/\.in$/, '.ans'))
        if (!existsSync(ans)) fail(file, line, 'Tests', `${part}/${f} has no .ans beside it.`)
        return { input: readFileSync(path.join(at, f), 'utf8'), output: readFileSync(ans, 'utf8') }
      })
  }
  const examples = tests('sample')
  const hidden = tests('secret')
  if (!examples.length || !hidden.length) fail(file, line, 'Tests', 'a contest problem holds the archive\'s sample tests as examples and its secret tests as hidden tests.')
  return {
    problem: { id, kind, source: 'contest', statement, examples, tests: hidden, solution: code, found: { contest, year, problem, licence } },
    file,
    solution: { text: fence.body.replace(/\[\[|\]\]/g, ''), file, line: fence.line },
    slow: null,
    large: null,
    testLines: []
  }
}

/**
 * A function problem Eruko writes (`Source: written`): its header as the reference, `## Slow` a
 * second header written apart, the slowest correct one, and `## Tests` its Catch2 test cases, the
 * first the example; both headers must pass every case. The header is <namespace>.h.
 * @param {Reader} r
 * @param {{ file: string, course: { kindNames: string[], planWords: string[], labels: Set<string> }, kind: number, plan: string[], id: string, line: number, statement: string[], fence: { body: string, line: number } }} at
 * @returns {ProblemSource}
 */
function readWrittenFunction(r, { file, course, kind, plan, id, line, statement, fence }) {
  r.heading(2, /^Slow$/, 'the heading "## Slow"')
  const slowFence = r.fence(['cpp'], 'a ```cpp block holding the slow solution, written apart')
  r.heading(2, /^Tests$/, 'the heading "## Tests"')
  const testFence = r.fence(['cpp'], 'a ```cpp block holding the Catch2 test cases, the first the example')
  r.end('the end of the file')
  const solution = { text: fence.body.replace(/\[\[|\]\]/g, ''), file, line: fence.line }
  const { code, plan: own } = parseCode({ text: fence.body, file, line: fence.line }, course.labels, { groups: true, blanks: true, frameLabels: false, shown: true, header: true })
  if (JSON.stringify(own) !== JSON.stringify(plan))
    fail(file, fence.line, 'Kind', `the first-level labels are ${JSON.stringify(own)}; kind ${kind}'s plan is ${JSON.stringify(plan)}, its worked example's //: labels in order.`)
  const ns = /^namespace (\w+) \{$/m.exec(solution.text)?.[1]
  if (!ns) fail(file, fence.line, 'Format', 'a written function problem\'s header opens a namespace; the header is <namespace>.h.')
  const cases = testCases(testFence.body, file)
  if (cases.length < 2) fail(file, testFence.line, 'Tests', 'a written function problem holds at least two test cases: the example, then the hidden tests.')
  const at = cases[1]?.at ?? 0
  const test = `#include "${ns}.h"\n#include "test/catch.hpp"\n\n${testFence.body.slice(0, at)}#if defined(EXERCISM_RUN_ALL_TESTS)\n${testFence.body.slice(at)}#endif\n`
  const { setup, calls } = exampleOf(cases[0]?.body ?? '')
  if (!calls.length) fail(file, testFence.line, 'Examples and tests', 'the example case holds no REQUIRE or CHECK to show as a call with its value.')
  return {
    problem: {
      id,
      kind,
      source: 'aether',
      statement,
      examples: [{ input: cases[0]?.name ?? '', output: '' }],
      tests: cases.slice(1).map(c => ({ input: c.name, output: '' })),
      solution: code,
      fn: { slug: ns, commit: '', header: `${ns}.h`, name: `${ns}_test.cpp`, test, setup, calls }
    },
    file,
    solution,
    slow: { text: slowFence.body, file, line: slowFence.line },
    large: null,
    testLines: [line]
  }
}

/**
 * A problem whose `Source:` line names where it came from: a function problem (Exercism's, or
 * one Eruko writes) or a contest problem; null for a whole program Eruko writes.
 * @param {Reader} r
 * @param {{ file: string, course: { kindNames: string[], planWords: string[], labels: Set<string> }, kind: number, plan: string[], id: string, line: number }} at
 * @returns {ProblemSource | null}
 */
function foundProblem(r, at) {
  const src = r.peek()
  const text = src?.type === 'text' ? src.text : ''
  const fn = /^Source: (?:exercism ([a-z0-9-]+)|(written))$/.exec(text)
  const contest = /^Source: (nwerc|bapc|bapc-prelims) (\d{4}) ([a-z0-9]+)$/.exec(text)
  if (fn) r.at++
  if (fn) return readFunctionProblem(r, { ...at, slug: fn[1] ?? '' })
  if (contest) r.at++
  if (contest) return readContestProblem(r, { ...at, contest: contest[1] ?? '', year: Number(contest[2]), problem: contest[3] ?? '' })
  return null
}

/**
 * @param {string} folder
 * @param {{ id: number, name: string }[]} names
 * @param {{ kindNames: string[], planWords: string[], labels: Set<string> }} course
 * @returns {KindSource}
 */
function readKind(folder, names, course) {
  const file = path.join(folder, 'kind.md')
  const id = Number(/^(\d{2,3})-/.exec(path.basename(folder))?.[1])
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
  const texts = r.texts()
  const header = /^Write an? (function|class|struct) `/.test(texts[0]?.text ?? '')
  const statement = checkStatement(texts, file, statementStart, course, header)
  const fence = r.fence(['cpp'], 'a ```cpp block holding the worked example\'s program')
  const exampleProgram = { text: fence.body, file, line: fence.line }
  const { code, plan } = parseCode(exampleProgram, course.labels, { groups: true, blanks: false, frameLabels: true, shown: true, header })
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
    const id = Number(/^(\d{2,3})-[a-z0-9-]+$/.exec(f)?.[1])
    if (!names.some(n => n.id === id)) fail(path.join(kindsDir, f), 0, 'Format', 'a kind folder is named NN-slug (e.g. 07-count), NN a kind of unit.md written with two digits.')
  }
  const kinds = folders.map(f => readKind(path.join(kindsDir, f), names, course))
  // the twelve built kinds hold 10 problems each; a kind after them holds, before it opens, a
  // problem for each part of its first run (one to cut the Parsons problem from, one alone)
  for (const k of kinds) {
    const least = k.id <= 12 ? PROBLEMS : 2
    if (!draft && k.problems.length < least)
      fail(k.file, 0, 'Problems per kind', `kind ${k.id} holds ${k.problems.length} problems; it holds at least ${least}. While you write, node scripts/gen/cpp.mjs --draft (or CPP_DRAFT=1) skips this one check.`)
  }
  courseOrder(dir, kinds)
  // a kind is the set of problems one plan solves: two kinds never share their first-level labels
  for (const [i, k] of kinds.entries()) {
    const twin = kinds.slice(0, i).find(o => JSON.stringify(o.plan) === JSON.stringify(k.plan))
    if (twin) fail(k.file, 0, 'Kind', `kind ${k.id}'s plan is kind ${twin.id}'s: problems whose first-level labels match a kind join it.`)
  }
  const present = new Set(kinds.map(k => k.id))
  const cut = sections
    .map(s => ({ title: s.title, first: s.first, last: Math.max(...[...present].filter(id => id >= s.first && id <= s.last)) }))
    .filter(s => s.last >= s.first)
  return { sections: cut, names, kinds }
}

/**
 * The kinds after the twelve in course order: each exercise after the kinds its listed concepts
 * need, then by its difficulty tag (the track's config.json at the same commit, beside its test
 * files). Every concept the track lists is taught by the twelve, so the order is the difficulty
 * tag, then the track's own order: kinds in the order of their first exercise, and the exercises
 * of a kind in that order.
 * @param {string} dir
 * @param {KindSource[]} kinds
 */
function courseOrder(dir, kinds) {
  const file = path.join(dir, 'exercism', 'config.json')
  if (!existsSync(file)) return
  /** @type {{ slug: string, difficulty: number }[]} */
  const list = JSON.parse(readFileSync(file, 'utf8')).exercises.practice
  const rank = (/** @type {string} */ slug) => {
    const at = list.findIndex(e => e.slug === slug)
    return [list[at]?.difficulty ?? 0, at]
  }
  const before = (/** @type {number[]} */ a, /** @type {number[]} */ b) => (a[0] ?? 0) < (b[0] ?? 0) || (a[0] === b[0] && (a[1] ?? 0) < (b[1] ?? 0))
  /** @type {number[]} */
  let kindLast = [0, -1]
  for (const k of kinds) {
    const found = k.problems.flatMap(p => (p.problem.source === 'exercism' && p.problem.fn ? [{ p, r: rank(p.problem.fn.slug) }] : []))
    const first = found[0]
    if (!first) continue
    if (before(first.r, kindLast)) fail(k.file, 0, 'Kind order', `kind ${k.id} opens with ${first.p.problem.fn?.slug} (difficulty ${first.r[0]}), before the kind ahead of it: kinds come in the order of their first exercise's difficulty tag, then the track's order.`)
    kindLast = first.r
    found.forEach(({ p, r }, i) => {
      const prev = found[i - 1]
      if (prev && before(r, prev.r)) fail(p.file, 0, 'Kind order', `${p.problem.fn?.slug} (difficulty ${r[0]}) stands after ${prev.p.problem.fn?.slug} (difficulty ${prev.r[0]}) in its kind.`)
    })
  }
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
  if (p.problem.fn) return checkFunctionProblem(p, p.problem.fn)
  if (p.problem.found) return checkContestProblem(p)
  if (!p.slow) fail(p.file, 0, 'Written problems', 'a problem Eruko writes holds its slow solution.')
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
      if (r.stdout.length > MAX_INPUT) fail(p.file, p.large.program.line, 'Tests', `seed ${p.large.seeds[i]} makes an input of ${r.stdout.length} characters; the whole-program kinds keep every input to ${MAX_INPUT}.`)
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
 * A contest problem's Entry check: the reference passes every sample and secret test of the archive.
 * @param {ProblemSource} p
 * @returns {Promise<Problem>}
 */
async function checkContestProblem(p) {
  const solution = await compile(p.solution, ['-O2'], 'reference solution')
  const all = [...p.problem.examples, ...p.problem.tests]
  const runs = await Promise.all(all.map(t => output(solution.binary, t.input, SLOW_MS * 6)))
  for (const [i, r] of runs.entries()) {
    const t = all[i] ?? { input: '', output: '' }
    if (!r.ok) fail(p.file, p.solution.line, 'Entry check', `the reference solution fails or does not end on test ${i + 1}:\n${r.stderr.slice(0, 2000)}`)
    if (compared(r.stdout) !== compared(t.output)) fail(p.file, p.solution.line, 'Entry check', `on test ${i + 1} the reference solution prints ${shown(r.stdout.slice(0, 200))}; the archive's answer is ${shown(t.output.slice(0, 200))}.`)
  }
  return p.problem
}

/** Catch2's main, compiled once per compiler into an object every test build links. @type {Promise<string> | null} */
let catchMain = null
const catchObject = () =>
  (catchMain ??= (async () => {
    const dir = path.join(CACHE, `catch2-${sha(JSON.stringify([versionOf(), readFileSync(CATCH, 'utf8').length]))}`)
    const object = path.join(dir, 'main.o')
    if (existsSync(object)) return object
    mkdirSync(path.join(dir, 'test'), { recursive: true })
    writeFileSync(path.join(dir, 'test', 'catch.hpp'), readFileSync(CATCH))
    writeFileSync(path.join(dir, 'main.cpp'), '#define CATCH_CONFIG_MAIN\n#include "test/catch.hpp"\n')
    const part = `main.${process.pid}.part`
    const made = await run(COMPILER, ['-std=c++23', '-O2', '-c', '-I.', '-o', part, 'main.cpp'], { cwd: dir })
    if (made.code !== 0) throw new Error(`Catch2's main does not compile with ${COMPILER}:\n${made.stderr}`)
    renameSync(path.join(dir, part), object)
    return object
  })())

/**
 * A function problem's Entry check: its reference, as the header the test file includes, built
 * with the test file and Catch2 the way the runner builds it, passes every test case; built
 * without EXERCISM_RUN_ALL_TESTS it runs the example case alone.
 * @param {ProblemSource} p
 * @param {Fn} fn
 * @returns {Promise<Problem>}
 */
async function checkFunctionProblem(p, fn) {
  const main = await catchObject()
  const names = [...p.problem.examples, ...p.problem.tests].map(t => t.input)
  // a written problem's slow solution, written apart, passes every case too
  const builds = [
    { program: p.solution, all: true, what: 'reference solution' },
    { program: p.solution, all: false, what: 'reference solution' },
    ...(p.slow ? [{ program: p.slow, all: true, what: 'slow solution' }] : [])
  ]
  for (const { program, all, what } of builds) {
    const dir = path.join(CACHE, sha(JSON.stringify([versionOf(), all, fn.test, program.text, 'catch2'])))
    const binary = path.join(dir, 'program')
    if (!existsSync(binary)) {
      mkdirSync(path.join(dir, 'test'), { recursive: true })
      writeFileSync(path.join(dir, 'test', 'catch.hpp'), readFileSync(CATCH))
      writeFileSync(path.join(dir, fn.header), program.text)
      writeFileSync(path.join(dir, fn.name), fn.test)
      const part = `program.${process.pid}.part`
      const made = await run(COMPILER, ['-std=c++23', '-O2', '-pipe', '-fdiagnostics-color=never', ...(all ? ['-DEXERCISM_RUN_ALL_TESTS'] : []), '-I.', '-o', part, fn.name, main], { cwd: dir, env: { ...process.env, LANG: 'C', LC_ALL: 'C' } })
      if (made.code !== 0) fail(p.file, program.line, 'Entry check', `the ${what} does not build as ${fn.header} with ${fn.name} and Catch2:\n${made.stderr.slice(0, 3000)}`)
      renameSync(path.join(dir, part), binary)
    }
    const r = await run(binary, ['-r', 'xml'], { cwd: dir, ms: SLOW_MS, env: { LANG: 'C' } })
    const cases = catch2Cases(r.stdout)
    const want = all ? names : names.slice(0, 1)
    if (JSON.stringify(cases.map(c => c.name)) !== JSON.stringify(want))
      fail(p.file, p.solution.line, 'Entry check', `${all ? 'every test' : 'the example alone'} ran the cases ${JSON.stringify(cases.map(c => c.name))}, not ${JSON.stringify(want)}.`)
    const bad = cases.find(c => !c.success)
    if (bad) fail(p.file, program.line, what === 'slow solution' ? 'Written problems' : 'Entry check', `the ${what} fails the test case "${bad.name}": ${bad.failed ? `${bad.failed.original} gave ${bad.failed.expanded}` : bad.error}`)
  }
  return p.problem
}

/**
 * The names a program declares, in the order it declares them: a returning trace's columns.
 * Every variable is given its value where it is declared (Style), so a name stands before `{`,
 * `=`, or a range for's `:`.
 * @param {string[]} lines
 */
const declared = lines => [
  ...new Set(
    [...lines.join('\n').matchAll(/[\w:>&*]+[ \t]+&?([a-z_]\w*)\s*(?:\{|=[^=]|:[^:])/g)]
      .map(m => m[1] ?? '')
      .filter(n => !['else', 'do', 'return', 'const'].includes(n))
  )
]

/**
 * A kind's returning traces (Trace per kind): each reference solution of a problem that reads
 * its input, run on its first two examples, recorded as the kind's own trace is, and kept when
 * its lines and its table fit the screen together. A function problem has no input to run on,
 * so a kind whose problems are all function problems has only its own trace.
 * @param {KindSource} kind
 * @param {Problem[]} problems
 */
async function returningTraces(kind, problems) {
  const traces = await Promise.all(
    problems.map(async p => {
      const [first, second] = p.examples
      const columns = declared(p.solution.lines)
      if (p.fn || !first || !second || !columns.length || p.solution.lines.length > TRACE_LINES) return null
      const program = { text: `${p.solution.lines.join('\n')}\n`, file: kind.file, line: 0 }
      try {
        return await recordTrace(kind, { id: kind.trace.id, columns, inputs: [first.input, second.input], program })
      } catch (e) {
        // a table that does not fit, or a name with no value in any row, is no returning trace
        if (/: Trace( length)?: /.test(String(e))) return null
        throw e
      }
    })
  )
  return traces.flatMap(t => (t ? [t] : []))
}

/**
 * One kind, every program checked: what k<NN>.gen.js holds.
 * @param {KindSource} kind
 */
async function buildKind(kind) {
  const [, trace, start, problems] = await Promise.all([
    compile(kind.exampleProgram, kind.example.statement[0]?.startsWith('Write a program') ? ['-O2'] : ['-O2', '-c'], 'worked example'),
    recordTrace(kind, kind.trace),
    kind.start ? recordTrace(kind, kind.start) : null,
    Promise.all(kind.problems.map(checkProblem))
  ])
  const traces = await returningTraces(kind, problems)
  const built = { id: kind.id, example: kind.example, trace, traces, problems: Object.fromEntries(problems.map(p => [p.id, p])) }
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
