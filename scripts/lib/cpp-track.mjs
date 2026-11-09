// Hides: what the C++ language track's sources are and how each item passes its entry check
// ("A Self-Study System", Programming, The language track, The track's material). The format is
// written out in scripts/lib/cpp-track.md. Every check runs the machine: g++ 16 under
// -pedantic-errors at each level, the host sanitizers, nvcc and compute-sanitizer for a device
// program, nm and cuobjdump for a count; no check reads a clock. A failing check names its file,
// line and rule, and the generator writes nothing.
import { execFileSync, spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { availableParallelism, homedir } from 'node:os'
import path from 'node:path'
import {
  LEVELS,
  SANITIZER_ENV,
  TOOLS,
  badFlag,
  deviceArgs,
  deviceReport,
  errorLines,
  hostArgs,
  hostLibs,
  hostReport
} from '../../src/units/cpp/core/check.logic.js'
import { scanFlags, scanHits } from '../../src/units/cpp/core/scan.logic.js'
import { countOf, fillSlots } from '../../src/units/cpp/core/track.logic.js'

const ROOT = path.resolve(import.meta.dirname, '..', '..')
export const TRACK = path.join(ROOT, 'src', 'units', 'cpp', 'content', 'track')
const CACHE = process.env.ERUKO_CPP_GEN_CACHE ?? path.join(homedir(), '.cache', 'eruko-cpp-gen', 'track')
const COMPILER = process.env.ERUKO_CPP_COMPILER ?? 'g++'
const CUDA = process.env.ERUKO_CUDA ?? path.join(homedir(), '.cache', 'eruko-cuda', 'tk')
const DEVICE_LEVEL = 'c++23'
const TOOLS_DIR = process.env.ERUKO_CPP_TOOLS ?? path.join(homedir(), '.cache', 'eruko-cpp-tools')
const WIDTH = 64
const MS = 60000
const VERDICTS = ['defined', 'ill-formed', 'ndr', 'undefined', 'unspecified', 'implementation']
const FORMS = ['run', 'sanitizer', 'flag', 'probes', 'orders']

/**
 * @param {string} file
 * @param {number} line
 * @param {string} rule
 * @param {string} what
 * @returns {never}
 */
function fail(file, line, rule, what) {
  throw new Error(`${path.relative(ROOT, file)} line ${line}: ${rule}: ${what}`)
}

// Reading a source

/** @typedef {{ lang: string, text: string, line: number }} Fence A fenced block: its language, its text with a final newline, and the line of its opening fence */
/** @typedef {{ title: string, line: number, keys: Map<string, { value: string, line: number, list: string[] }>, text: { value: string, line: number }[], fences: Fence[], subs: Section[] }} Section */

/**
 * A file's sections: `##` sections, each with its `###` subsections, its `Key: value` lines (a key
 * with an empty value takes the `- ` lines under it), its other lines and its fences.
 * @param {string} file
 */
function sectionsOf(file) {
  const lines = readFileSync(file, 'utf8').split('\n')
  /** @type {Section} */
  const top = { title: '', line: 1, keys: new Map(), text: [], fences: [], subs: [] }
  /** @type {Section[]} */
  const all = [top]
  let at = top
  /** @type {Section | null} */
  let sub = null
  /** @type {{ value: string, line: number, list: string[] } | null} */
  let listing = null
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i] ?? ''
    const fence = l.match(/^```(\w*)\s*$/)
    if (fence) {
      const start = i
      const body = []
      for (i++; i < lines.length && !/^```\s*$/.test(lines[i] ?? ''); i++) body.push(lines[i])
      if (i >= lines.length) fail(file, start + 1, 'Fence', 'this fence is never closed')
      ;(sub ?? at).fences.push({ lang: fence[1] ?? '', text: body.length ? `${body.join('\n')}\n` : '', line: start + 1 })
      listing = null
      continue
    }
    const head = l.match(/^(#{1,3}) (.*)$/)
    if (head) {
      /** @type {Section} */
      const s = { title: (head[2] ?? '').trim(), line: i + 1, keys: new Map(), text: [], fences: [], subs: [] }
      if (head[1] === '###') {
        at.subs.push(s)
        sub = s
      } else {
        all.push(s)
        at = s
        sub = null
      }
      listing = null
      continue
    }
    const where = sub ?? at
    const item = l.match(/^- (.*)$/)
    if (item && listing) {
      listing.list.push((item[1] ?? '').trim())
      continue
    }
    const key = l.match(/^([A-Z][a-z]+(?: \d)?): ?(.*)$/)
    if (key && KEYS.has(key[1] ?? '')) {
      const entry = { value: (key[2] ?? '').trim(), line: i + 1, list: /** @type {string[]} */ ([]) }
      where.keys.set(key[1] ?? '', entry)
      listing = entry.value === '' ? entry : null
      continue
    }
    listing = null
    if (l.trim()) where.text.push({ value: l.trim(), line: i + 1 })
  }
  return all
}

const KEYS = new Set([
  'Part',
  'Clause',
  'After',
  'Levels',
  'Device',
  'Flags',
  'Sanitizer',
  'Result',
  'Form',
  'Answer',
  'Derivation 1',
  'Derivation 2',
  'Columns',
  'Expect',
  'Accept',
  'Reject',
  'Source',
  'Orders',
  'Forbidden',
  'Settled',
  'Rule',
  'Pattern',
  'Warning',
  'Exempt',
  'Task',
  'Shape',
  'Tag',
  'Count',
  'Newer'
])

/**
 * @param {Section} s
 * @param {string} name
 */
const keyOf = (s, name) => s.keys.get(name)

/**
 * The levels from a range: "c++17" for c++17 to c++23, "c++11..c++17" for those between.
 * @param {string} text
 * @param {string} file
 * @param {number} line
 */
function levelsOf(text, file, line) {
  const [from, to = 'c++23'] = text.split('..').map(t => t.trim())
  const a = LEVELS.indexOf(/** @type {never} */ (from))
  const b = LEVELS.indexOf(/** @type {never} */ (to))
  if (a < 0 || b < a) fail(file, line, 'Levels', `"${text}" is not a level or a range of levels such as c++11..c++17`)
  return LEVELS.slice(a, b + 1)
}

/**
 * A program shown on a screen: no line wider than the column, no tabs; its `//:` labels, each
 * standing above the first line of its group.
 * @param {Fence} fence
 * @param {string} file
 * @param {{ labels?: boolean }} [how]
 */
function shown(fence, file, how = {}) {
  /** @type {string[]} */
  const lines = []
  /** @type {{ at: number, level: 1, text: string }[]} */
  const labels = []
  fence.text
    .replace(/\n$/, '')
    .split('\n')
    .forEach((l, i) => {
      const at = fence.line + 1 + i
      if (l.includes('\t')) fail(file, at, 'Line', 'a tab: indent with 4 spaces')
      const label = l.match(/^\s*\/\/: (.*)$/)
      if (label) {
        if (!how.labels) fail(file, at, 'Label', 'labels stand only in a worked example')
        const text = (label[1] ?? '').trim()
        if (!/^[A-Z].*\.$/.test(text) || /[.!?] /.test(text)) fail(file, at, 'Label', `"${text}" is not one sentence with a capital and a full stop`)
        labels.push({ at: lines.length, level: 1, text })
        return
      }
      if (Array.from(new Intl.Segmenter().segment(l)).length > WIDTH) fail(file, at, 'Line', `wider than ${WIDTH} characters`)
      lines.push(l)
    })
  if (how.labels && !labels.length) fail(file, fence.line, 'Worked example', 'its lines stand in groups, each under a //: label')
  return { lines, labels, text: `${lines.join('\n')}\n` }
}

/**
 * The one fence of a language in a section.
 * @param {Section} s
 * @param {string} lang
 * @param {string} file
 */
function fenceOf(s, lang, file) {
  const f = s.fences.filter(x => x.lang === lang)
  if (f.length !== 1) fail(file, s.line, 'Section', `"${s.title}" holds one \`\`\`${lang} block, not ${f.length}`)
  return /** @type {Fence} */ (f[0])
}

/**
 * The run settings of an item from its section's keys.
 * @param {Section} s
 * @param {boolean} device
 * @param {string} file
 * @returns {import('../../src/units/cpp/core/check.logic.js').Settings}
 */
function settingsOf(s, device, file) {
  const flags = keyOf(s, 'Flags')?.value.split(/\s+/).filter(Boolean) ?? []
  const bad = badFlag(flags)
  if (bad) fail(file, keyOf(s, 'Flags')?.line ?? s.line, 'Flags', `${bad} is not a flag an item may add`)
  const san = keyOf(s, 'Sanitizer')?.value
  const dev = device || keyOf(s, 'Device')?.value === 'yes'
  if (san && !['address', 'thread', ...TOOLS].includes(san)) fail(file, keyOf(s, 'Sanitizer')?.line ?? s.line, 'Sanitizer', `"${san}" is address, thread, or a compute-sanitizer tool`)
  if (san && TOOLS.includes(/** @type {never} */ (san)) && !dev) fail(file, s.line, 'Sanitizer', 'a compute-sanitizer tool needs Device: yes')
  return {
    ...(dev ? { device: true } : {}),
    ...(san === 'address' || san === 'thread' ? { sanitize: san } : {}),
    ...(san && TOOLS.includes(/** @type {never} */ (san)) ? { tool: /** @type {import('../../src/units/cpp/core/check.logic.js').DeviceTool} */ (san) } : {}),
    ...(flags.length ? { flags } : {})
  }
}

/**
 * A verdict answer per level: "defined", "ill-formed 7, 9", "ndr", "undefined constant |
 * sanitizer | stored", "unspecified", "implementation".
 * @param {Section} s
 * @param {readonly string[]} levels
 * @param {string} file
 */
function answersOf(s, levels, file) {
  const key = keyOf(s, 'Answer')
  if (!key) fail(file, s.line, 'Verdict item', 'it has no Answer:')
  const rows = key.value ? [key.value.startsWith('c++') ? key.value : `${levels[0]}..c++23 ${key.value}`] : key.list.map(l => l.replace(':', ''))
  /** @type {Record<string, { verdict: string, lines?: number[], by?: string }>} */
  const out = {}
  for (const row of rows) {
    const [range = '', verdict = '', ...rest] = row.split(/\s+/)
    if (!VERDICTS.includes(verdict)) fail(file, key.line, 'Answer', `"${verdict}" is not one of ${VERDICTS.join(', ')}`)
    const tail = rest.join(' ')
    const answer =
      verdict === 'ill-formed'
        ? { verdict, lines: tail.split(/[\s,]+/).filter(Boolean).map(Number) }
        : verdict === 'undefined'
          ? { verdict, by: tail }
          : { verdict }
    if (verdict === 'ill-formed' && (!answer.lines?.length || answer.lines.some(n => !Number.isInteger(n) || n < 1))) fail(file, key.line, 'Answer', 'an ill-formed answer names the lines of its diagnostics')
    if (verdict === 'undefined' && !['constant', 'sanitizer', 'stored'].includes(tail)) fail(file, key.line, 'Answer', 'an undefined answer names what settles it: constant, sanitizer or stored')
    for (const lv of levelsOf(range, file, key.line)) out[lv] = answer
  }
  for (const lv of levels) if (!out[lv]) fail(file, key.line, 'Answer', `no answer at ${lv}`)
  return out
}

/**
 * The tests of a section: each ```in block, and the ```out block after it where there is one.
 * @param {readonly Fence[]} fences
 */
function testsOf(fences) {
  /** @type {{ input: string, output?: string }[]} */
  const out = []
  for (const f of fences) {
    if (f.lang === 'in') out.push({ input: f.text })
    else if (f.lang === 'out' && out.length) /** @type {{ output?: string }} */ (out[out.length - 1]).output = f.text
  }
  return out
}

/**
 * A statement: "Write a program that …" or "Write a function …", then one Input:, one Output:
 * and one Limits: line, in that order.
 * @param {Section} s
 * @param {string} file
 */
function statementOf(s, file) {
  const lines = s.text.map(t => t.value)
  if (!/^Write (a|an|one|two) /.test(lines[0] ?? '')) fail(file, s.line, 'Statement', 'it opens "Write a program that …" or "Write a function …"')
  const at = ['Input: ', 'Output: ', 'Limits: '].map(w => lines.findIndex(l => l.startsWith(w)))
  if (at.some(i => i < 0) || !((at[0] ?? 0) < (at[1] ?? 0) && (at[1] ?? 0) < (at[2] ?? 0))) fail(file, s.line, 'Statement', 'it holds one Input:, one Output: and one Limits: line, in that order')
  return lines
}

// Running the machine

const sha = (/** @type {string} */ t) => createHash('sha256').update(t).digest('hex')

/** @param {number} n */
const pool = n => {
  let active = 0
  /** @type {(() => void)[]} */
  const queue = []
  /** @template T @param {() => Promise<T>} job @returns {Promise<T>} */
  return job =>
    new Promise((resolve, reject) => {
      const start = () => {
        active++
        job().then(resolve, reject).finally(() => {
          active--
          queue.shift()?.()
        })
      }
      if (active < n) start()
      else queue.push(start)
    })
}
// ERUKO_CPP_JOBS caps the compiles at once, when several checks share the machine
const host = pool(Number(process.env.ERUKO_CPP_JOBS) || Math.max(1, availableParallelism()))
// the device runs one program at a time, so a count read from it is not shared with another
const gpu = pool(1)

/**
 * @param {string} command
 * @param {string[]} args
 * @param {{ cwd?: string, env?: NodeJS.ProcessEnv, input?: string }} [o]
 * @returns {Promise<{ stdout: string, stderr: string, code: number | null, finished: boolean }>}
 */
const spawned = (command, args, o = {}) =>
  new Promise(resolve => {
    // its own process group, so a timeout reaches compute-sanitizer's launched program too
    const child = spawn(command, args, { cwd: o.cwd, env: o.env ?? process.env, detached: true })
    let stdout = ''
    let stderr = ''
    let finished = true
    child.stdout.on('data', d => (stdout += d))
    child.stderr.on('data', d => (stderr += d))
    child.stdin.on('error', () => {})
    child.stdin.end(o.input ?? '')
    // a guard against a program that never ends, never a check: no answer reads it
    const timer = setTimeout(() => {
      finished = false
      try {
        process.kill(-(child.pid ?? 0), 'SIGKILL')
      } catch {
        child.kill('SIGKILL')
      }
    }, MS)
    child.on('error', e => (stderr += e.message))
    child.on('close', code => {
      clearTimeout(timer)
      resolve({ stdout, stderr, code, finished })
    })
  })

let versions = ''
const versionsOf = () => {
  if (!versions) {
    const g = execFileSync(COMPILER, ['--version'], { encoding: 'utf8' }).split('\n')[0] ?? ''
    if (!/ 16\./.test(g)) throw new Error(`The track's checks need g++ 16 (A Self-Study System, Setup, for the track); ${COMPILER} is ${g}.`)
    let n = ''
    try {
      n = execFileSync(path.join(CUDA, 'bin', 'nvcc'), ['--version'], { encoding: 'utf8' })
    } catch {
      n = ''
    }
    versions = `${g}|${n}`
  }
  return versions
}
const compilerPath = () => execFileSync('sh', ['-c', `command -v ${COMPILER}`], { encoding: 'utf8' }).trim()

/** @typedef {{ compiled: true, binary: string, reports: Record<string, string> } | { compiled: false, error: string, errors: number[] }} Built */

/**
 * A program built under settings, from the cache when nothing changed; `fresh` builds it again
 * in a folder of its own, for the second build of an entry check.
 * @param {string} text
 * @param {import('../../src/units/cpp/core/check.logic.js').Settings} s
 * @param {{ fresh?: boolean, extra?: Record<string, string> }} [o]
 * @returns {Promise<Built>}
 */
async function build(text, s, o = {}) {
  const file = s.device ? 'main.cu' : 'main.cpp'
  const dir = path.join(CACHE, sha(JSON.stringify([versionsOf(), s, text, o.extra ?? {}, o.fresh ? 'second' : ''])))
  const binary = path.join(dir, 'program')
  const done = path.join(dir, 'built.json')
  if (existsSync(done)) return JSON.parse(readFileSync(done, 'utf8'))
  mkdirSync(dir, { recursive: true })
  writeFileSync(path.join(dir, file), text)
  for (const [n, t] of Object.entries(o.extra ?? {})) writeFileSync(path.join(dir, n), t)
  const compileOnly = (s.flags ?? []).includes('-c')
  const out = compileOnly ? 'program.o' : 'program'
  const env = { ...process.env, LANG: 'C', LC_ALL: 'C' }
  const made = s.device
    ? await gpu(() => spawned(path.join(CUDA, 'bin', 'nvcc'), [...deviceArgs(s, compilerPath(), DEVICE_LEVEL, CUDA), '--resource-usage', '-o', out, file], { cwd: dir, env }))
    : await host(() => spawned(COMPILER, [...hostArgs(s), '-o', out, file, ...hostLibs(s, TOOLS_DIR)], { cwd: dir, env }))
  const said = `${made.stderr}${made.stdout}`.split(`${dir}/`).join('')
  /** @type {Built} */
  let built
  if (made.code !== 0) built = { compiled: false, error: said, errors: errorLines(said, file) }
  else {
    /** @type {Record<string, string>} */
    const reports = { 'resource-usage': said }
    const object = compileOnly ? path.join(dir, 'program.o') : binary
    reports.nm = (await spawned('nm', ['-C', object])).stdout
    if (s.device) reports.sass = (await spawned(path.join(CUDA, 'bin', 'cuobjdump'), ['-sass', binary], { env: { PATH: path.join(CUDA, 'bin') } })).stdout
    built = { compiled: true, binary, reports }
  }
  writeFileSync(done, JSON.stringify(built))
  return built
}

/** @typedef {{ stdout: string, stderr: string, code: number | null, finished: boolean, report: import('../../src/units/cpp/core/check.logic.js').Report | null }} Ran */

/**
 * One run of a built program on an input, under its sanitizer where it names one.
 * @param {Built & { compiled: true }} built
 * @param {string} input
 * @param {import('../../src/units/cpp/core/check.logic.js').Settings} s
 * @returns {Promise<Ran>}
 */
async function runOn(built, input, s) {
  if ((s.flags ?? []).includes('-c')) return { stdout: '', stderr: '', code: 0, finished: true, report: null }
  const env = { LANG: 'C', ...(s.sanitize ? SANITIZER_ENV : {}), ...(s.device ? { LD_LIBRARY_PATH: '/run/opengl-driver/lib' } : {}) }
  const r = s.tool
    ? await gpu(() => spawned(path.join(CUDA, 'compute-sanitizer', 'compute-sanitizer'), ['--tool', s.tool ?? '', ...(s.tool === 'memcheck' ? ['--leak-check', 'full'] : []), built.binary], { input, env }))
    : s.device
      ? await gpu(() => spawned(built.binary, [], { input, env }))
      : await host(() => spawned(built.binary, [], { input, env }))
  const report = s.tool ? deviceReport(`${r.stdout}${r.stderr}`, s.tool) : s.sanitize ? hostReport(r.stderr) : null
  // compute-sanitizer's own lines are not the program's output
  const stdout = s.tool ? r.stdout.split('\n').filter(l => !l.startsWith('=========')).join('\n') : r.stdout
  return { ...r, stdout, report }
}

/** The text compared by "a test passes": end-of-line spaces and final blank lines dropped. @param {string} t */
const compared = t =>
  t
    .split('\n')
    .map(l => l.replace(/[ \t\r]+$/, ''))
    .join('\n')
    .replace(/\n+$/, '')

/**
 * @param {Built} b
 * @param {string} file
 * @param {number} line
 * @param {string} what
 * @returns {asserts b is Built & { compiled: true }}
 */
function mustBuild(b, file, line, what) {
  if (!b.compiled) fail(file, line, 'Entry check', `the ${what} does not compile (main line 1 is line ${line + 1} of this file):\n${b.error}`)
}

// The entry checks, item by item

/**
 * The worked example: compiles at c++23 (nvcc's level for a device program) and runs clean.
 * @param {Fence} fence
 * @param {boolean} device
 * @param {string} file
 */
async function checkExample(fence, device, file) {
  const code = shown(fence, file, { labels: true })
  const s = device ? { device: true } : {}
  const b = await build(code.text, s)
  mustBuild(b, file, fence.line, 'worked example')
  const r = await runOn(b, '', s)
  if (!r.finished || r.code !== 0) fail(file, fence.line, 'Entry check', `the worked example ends with exit ${r.code}:\n${r.stderr}`)
  return { lines: code.lines, labels: code.labels }
}

/**
 * What the compiler and the run gave at one level, as the screen shows it after the answer.
 * @param {string} text
 * @param {import('../../src/units/cpp/core/check.logic.js').Settings} s
 */
async function seenAt(text, s) {
  const b = await build(text, s)
  if (!b.compiled) return { compiled: false, errors: b.errors, said: b.error.replace(/\/\S*\/eruko-cpp-gen\/\S*\//g, '').slice(0, 2000), stdout: '', report: null }
  const sanitized = s.tool || s.sanitize ? s : s.device ? { ...s, tool: /** @type {const} */ ('memcheck') } : { ...s, sanitize: /** @type {const} */ ('address') }
  const sb = await build(text, sanitized)
  mustBuild(sb, '', 0, 'program')
  const plain = await runOn(b, '', s)
  const san = await runOn(sb, '', sanitized)
  return { compiled: true, errors: [], said: '', stdout: plain.stdout, exit: plain.code, report: san.report }
}

/**
 * A verdict item: the stored answer at each level holds by the form that settles it. What a run
 * prints is kept only where the verdict fixes it, so the generated file is the same on every build.
 * @param {Section} s
 * @param {readonly string[]} kindLevels
 * @param {boolean} device
 * @param {string} file
 */
async function checkVerdict(s, kindLevels, device, file) {
  const fence = fenceOf(s, device || keyOf(s, 'Device')?.value === 'yes' ? 'cuda' : 'cpp', file)
  const code = shown(fence, file)
  const dev = device || keyOf(s, 'Device')?.value === 'yes'
  const levels = dev ? [DEVICE_LEVEL] : keyOf(s, 'Levels') ? levelsOf(keyOf(s, 'Levels')?.value ?? '', file, keyOf(s, 'Levels')?.line ?? 0) : kindLevels
  const answers = answersOf(s, levels, file)
  const base = settingsOf(s, dev, file)
  const results = s.fences.filter(f => f.lang === 'out').map(f => f.text.replace(/\n$/, ''))
  const d1 = keyOf(s, 'Derivation 1')?.value ?? ''
  const d2 = keyOf(s, 'Derivation 2')?.value ?? ''
  /** @type {Record<string, unknown>} */
  const seen = {}
  for (const lv of levels) {
    const set = dev ? base : { ...base, std: /** @type {import('../../src/units/cpp/core/check.logic.js').Level} */ (lv) }
    const a = /** @type {{ verdict: string, lines?: number[], by?: string }} */ (answers[lv])
    const at = await seenAt(code.text, set)
    seen[lv] = a.verdict === 'defined' ? at : { ...at, stdout: '', exit: null }
    const where = `at ${lv}`
    const stored = a.verdict === 'ndr' || a.verdict === 'implementation' || (a.verdict === 'undefined' && a.by === 'stored')
    if (stored && (!d1 || !d2)) fail(file, s.line, 'Verdict form', `a stored verdict ${where} needs Derivation 1: and Derivation 2:, written apart`)
    if (a.verdict === 'defined') {
      if (!at.compiled) fail(file, fence.line, 'Entry check', `"defined" ${where}, but the compiler rejects it:\n${at.said}`)
      // a leak is no undefined behaviour ([basic.stc.dynamic]): LeakSanitizer's report leaves "defined" standing
      if (at.report && at.report.kind !== 'leak') fail(file, fence.line, 'Entry check', `"defined" ${where}, but the sanitizer reports ${at.report.kind} at line ${at.report.line}`)
      if (at.exit !== 0) fail(file, fence.line, 'Entry check', `"defined" ${where}, but the program exits ${at.exit}`)
    }
    if (a.verdict === 'ill-formed') {
      const want = (a.lines ?? []).join(', ')
      if (at.compiled) fail(file, fence.line, 'Entry check', `"ill-formed" ${where}, but the compiler accepts it`)
      if (at.errors.join(', ') !== want) fail(file, fence.line, 'Entry check', `"ill-formed ${want}" ${where}, but the compiler reports errors at lines ${at.errors.join(', ') || 'none'}:\n${at.said}`)
    }
    // g++ words a rejection by constant evaluation several ways; each names the constant context
    if (a.verdict === 'undefined' && a.by === 'constant' && (at.compiled || !/constant[- ]expression|constexpr|consteval|outside its lifetime|uninitialized|outside the bounds/.test(at.said))) fail(file, fence.line, 'Entry check', `"undefined constant" ${where}, but constant evaluation does not reject it`)
    if (a.verdict === 'undefined' && a.by === 'sanitizer') {
      if (!at.compiled || !at.report) fail(file, fence.line, 'Entry check', `"undefined sanitizer" ${where}, but the sanitizer is silent`)
      const sanitized = set.tool || set.sanitize ? set : dev ? { ...set, tool: /** @type {const} */ ('memcheck') } : { ...set, sanitize: /** @type {const} */ ('address') }
      const again = await runOn(/** @type {Built & { compiled: true }} */ (await build(code.text, sanitized)), '', sanitized)
      if (JSON.stringify(again.report) !== JSON.stringify(at.report)) fail(file, fence.line, 'Entry check', `the sanitizer's report changes between runs ${where}`)
    }
    if (a.verdict === 'unspecified') {
      if (!results.length) fail(file, s.line, 'Verdict form', 'an unspecified answer stores the set of results, one ```out block each')
      if (!at.compiled || !results.includes(compared(at.stdout))) fail(file, fence.line, 'Entry check', `"unspecified" ${where}, but g++ prints ${JSON.stringify(at.stdout)}, which is not in the set`)
      const o0 = await build(code.text, { ...set, flags: [...(set.flags ?? []), '-O0'] })
      if (o0.compiled) {
        const r0 = await runOn(o0, '', set)
        if (!results.includes(compared(r0.stdout))) fail(file, fence.line, 'Entry check', `"unspecified" ${where}, but g++ -O0 prints ${JSON.stringify(r0.stdout)}, which is not in the set`)
      }
    }
  }
  return {
    lines: code.lines,
    device: dev,
    levels,
    answers,
    ...(results.length ? { results } : {}),
    seen,
    ...(d1 ? { derivations: [d1, d2] } : {})
  }
}

/**
 * The count item: the program's `@<line> <column>` lines, counted by line, the same in a second
 * run and a second build; every column moves in some row.
 * @param {Section} s
 * @param {boolean} device
 * @param {string} file
 */
async function checkCount(s, device, file) {
  const dev = device || keyOf(s, 'Device')?.value === 'yes'
  const fence = fenceOf(s, dev ? 'cuda' : 'cpp', file)
  const code = shown(fence, file)
  const columns = keyOf(s, 'Columns')?.value.split(/,\s*/).filter(Boolean) ?? []
  if (!columns.length) fail(file, s.line, 'Count item', 'it names its Columns:')
  const set = settingsOf(s, dev, file)
  const tables = []
  for (const fresh of [false, true]) {
    const b = await build(code.text, set, { fresh })
    mustBuild(b, file, fence.line, 'count program')
    const r = await runOn(b, '', set)
    if (!r.finished || r.code !== 0) fail(file, fence.line, 'Entry check', `the count program exits ${r.code}:\n${r.stderr}`)
    tables.push(JSON.stringify(rowsOf(r.stdout, columns, file, fence.line)))
  }
  if (tables[0] !== tables[1]) fail(file, fence.line, 'Entry check', 'the counts differ between a run and a second build')
  const rows = JSON.parse(tables[0] ?? '[]')
  if (!rows.length) fail(file, fence.line, 'Count item', 'no line moves a count')
  columns.forEach((c, i) => {
    if (!rows.some((/** @type {{ values: number[] }} */ r) => r.values[i])) fail(file, s.line, 'Count item', `the column ${c} moves in no row`)
  })
  return { lines: code.lines, device: dev, columns, rows, settings: set }
}

/**
 * The table a count program's output gives: one row per line that moves a count, in line order.
 * @param {string} stdout
 * @param {readonly string[]} columns
 * @param {string} file
 * @param {number} line
 */
function rowsOf(stdout, columns, file, line) {
  /** @type {Map<number, number[]>} */
  const by = new Map()
  for (const l of stdout.split('\n')) {
    const m = l.match(/^@(\d+) (\w+)$/)
    if (!m) continue
    const at = columns.indexOf(m[2] ?? '')
    if (at < 0) fail(file, line, 'Count item', `the program counts "${m[2]}", which is not a column`)
    const row = by.get(Number(m[1])) ?? columns.map(() => 0)
    row[at] = (row[at] ?? 0) + 1
    by.set(Number(m[1]), row)
  }
  return [...by.entries()].sort((a, b) => a[0] - b[0]).map(([l, values]) => ({ line: l, values }))
}

/**
 * The result a program gives on an input by the item's form: its output (or the count its report
 * holds, by `Result:`), and its sanitizer's report.
 * @param {string} text
 * @param {import('../../src/units/cpp/core/check.logic.js').Settings} set
 * @param {string} input
 * @param {string} result
 * @param {{ fresh?: boolean }} [o]
 */
async function resultOf(text, set, input, result, o = {}) {
  const b = await build(text, set, o)
  if (!b.compiled) return { compiled: false, out: '', report: null, finished: true, code: null, error: b.error, errors: b.errors }
  const r = await runOn(b, input, set)
  const out = result === 'output' ? compared(r.stdout) : String(countOf(result, b.reports))
  return { compiled: true, out, printed: compared(r.stdout), report: r.report, finished: r.finished, code: r.code, error: r.stderr, errors: [] }
}

/**
 * An item alone with its wrong version and its sample witness. Run: the reference passes every
 * example, gives the same result in a second run and a second build; the wrong version passes
 * the examples and fails a test or the witness. Sanitizer: the reference is silent and the wrong
 * version loud with the same report twice. Flag: the reference gets the stated verdict at every
 * level and the wrong one does not. Probes: every accepted line compiles, each rejected line
 * fails at its own line, and the wrong version fails a probe. A stage 7 kind's item alone also
 * passes its kind's scan: the reference silent, the wrong version loud with the same output.
 * `Exempt: R.3` names a rule the statement asks to break; the statement then says so.
 * @param {Section} s
 * @param {boolean} device
 * @param {string} file
 * @param {import('../../src/units/cpp/core/scan.logic.js').Scan | null} [scan] the kind's own scan
 */
async function checkAlone(s, device, file, scan = null) {
  const form = keyOf(s, 'Form')?.value ?? 'run'
  if (!FORMS.includes(form)) fail(file, s.line, 'Item alone', `Form: is one of ${FORMS.join(', ')}`)
  const dev = device || keyOf(s, 'Device')?.value === 'yes'
  const lang = dev ? 'cuda' : 'cpp'
  const exempt = (keyOf(s, 'Exempt')?.value ?? '').split(/[\s,]+/).filter(Boolean)
  if (exempt.some(r => !/^(P|I|F|R|ES|Con|T|Per|CP)\.\d+$/.test(r))) fail(file, keyOf(s, 'Exempt')?.line ?? s.line, 'Exempt', 'it names Guidelines rules, as R.3, F.22')
  const statement = [...statementOf(s, file), ...exempt.map(r => `This program breaks Core Guidelines rule ${r} on purpose, so the check of that rule skips it.`)]
  const sub = (/** @type {string} */ t) => s.subs.find(x => x.title === t)
  const ref = sub('Reference')
  const wrongS = sub('Wrong')
  const wit = sub('Witness')
  if (!ref || !wrongS || !wit) fail(file, s.line, 'Item alone', 'it holds ### Reference, ### Wrong and ### Witness')
  const witness = wit.fences[0]
  if (!witness) fail(file, wit.line, 'Witness', 'it holds one block: the input (```in) or the probe lines (```cpp)')
  /** @type {Alone} */
  const a = {
    s,
    file,
    form,
    dev,
    lang,
    set: settingsOf(s, dev, file),
    result: keyOf(s, 'Result')?.value ?? 'output',
    reference: form === 'orders' ? ordered(s, keyOf(s, 'Orders'), fenceOf(ref, lang, file), dev, file) : shown(fenceOf(ref, lang, file), file),
    wrong: form === 'orders' ? ordered(s, keyOf(wrongS, 'Orders'), fenceOf(ref, lang, file), dev, file) : shown(fenceOf(wrongS, lang, file), file),
    ref,
    wrongS,
    wit,
    witness,
    sub
  }
  if (form === 'sanitizer' && !a.set.sanitize && !a.set.tool) fail(file, s.line, 'Item alone', 'a sanitizer item names its Sanitizer: address, thread, or a compute-sanitizer tool')
  const base = { id: '', form, statement, device: dev, settings: a.set, result: a.result, reference: a.reference.lines, wrong: a.wrong.lines, ...(exempt.length ? { exempt } : {}) }
  if (scan) {
    if (form !== 'run') fail(file, s.line, 'Item alone', 'a stage 7 item alone is a run item, judged by its output and its scan')
    return { ...base, ...(await checkScanAlone(a, scan)) }
  }
  if (form === 'run' || form === 'sanitizer') return { ...base, ...(await checkRunAlone(a)) }
  if (form === 'flag') return { ...base, ...(await checkFlagAlone(a)) }
  if (form === 'orders') return { ...base, ...(await checkOrdersAlone(a)) }
  return { ...base, ...(await checkProbesAlone(a)) }
}

/** @typedef {{ n: number, op: string, order: string, scope: string }} Slot An atomic operation's order and scope, left for the learner to type */

/**
 * The slots of an orders item: `- 1: store release` (and a scope after it on the device,
 * `- 1: store release device`), one per ORDER_n in the program.
 * @param {{ value: string, line: number, list: string[] } | undefined} key
 * @param {boolean} dev
 * @param {string} file
 * @param {number} line
 * @returns {Slot[]}
 */
function slotsOf(key, dev, file, line) {
  if (!key?.list.length) fail(file, line, 'Orders', 'an orders item lists its slots, "- 1: store release" (and the scope on the device)')
  return key.list.map(row => {
    const m = row.match(/^(\d+):\s*(load|store|rmw|fence)\s+(seq_cst|acq_rel|acquire|release|relaxed)(?:\s+(system|device|block|thread))?$/)
    if (!m) fail(file, key.line, 'Orders', `"${row}" is "<n>: <load|store|rmw|fence> <order>${dev ? ' <scope>' : ''}"`)
    if (dev && !m[4]) fail(file, key.line, 'Orders', `slot ${m[1]} names no scope; a device item names one`)
    return { n: Number(m[1]), op: m[2] ?? '', order: m[3] ?? '', scope: m[4] ?? '' }
  })
}

/**
 * An orders item's program, filled with the slots its section (or its wrong version's) lists.
 * @param {Section} s
 * @param {{ value: string, line: number, list: string[] } | undefined} key
 * @param {Fence} fence
 * @param {boolean} dev
 * @param {string} file
 */
function ordered(s, key, fence, dev, file) {
  const code = shown(fence, file)
  const lines = fillSlots(code.lines, slotsOf(key, dev, file, s.line), dev)
  return { lines, text: `${lines.join('\n')}\n`, template: code.lines }
}

/**
 * One step weaker, as the paper's ladder sets it: seq_cst to acquire for a load, release for a
 * store, acq_rel for a read-modify-write or a fence; each of those to relaxed. A scope: system to
 * device, device to block, block to thread. Null at the bottom.
 * @param {Slot} slot
 * @param {'order' | 'scope'} what
 * @returns {Slot | null}
 */
function weaker(slot, what) {
  if (what === 'scope') {
    const down = { system: 'device', device: 'block', block: 'thread' }[slot.scope]
    return down ? { ...slot, scope: down } : null
  }
  if (slot.order === 'seq_cst') return { ...slot, order: { load: 'acquire', store: 'release', rmw: 'acq_rel', fence: 'acq_rel' }[slot.op] ?? 'relaxed' }
  return slot.order === 'relaxed' ? null : { ...slot, order: 'relaxed' }
}

/**
 * An orders item: the reference, its slots filled, passes as a sanitizer item (silent on every
 * test, loud wrong version on the witness); and each slot weakened one step, its order and then
 * its scope, is loud under the sanitizer or listed in Forbidden: with two derivations, its
 * permitted results holding one the item forbids. `Settled: stored` names an item whose fence no
 * sanitizer models (a host fence: ThreadSanitizer does not model one): it runs none, every slot is
 * in Forbidden:, and its ### Wrong stores the results its weaker slot adds, one out block each,
 * by which its witness is judged.
 * @param {Alone} a
 */
async function checkOrdersAlone(a) {
  const { s, file, dev, set } = a
  const settled = keyOf(s, 'Settled')
  const stored = settled?.value === 'stored'
  if (settled && !stored) fail(file, settled.line, 'Settled', 'its one value is "stored": the stored verdict alone settles the item')
  if (stored && (set.sanitize || set.tool)) fail(file, s.line, 'Orders', 'an item settled by its stored verdict runs no sanitizer, so it names none')
  if (!dev && !stored && set.sanitize !== 'thread') fail(file, s.line, 'Orders', 'a host orders item runs under Sanitizer: thread, or is Settled: stored')
  const slots = slotsOf(keyOf(s, 'Orders'), dev, file, s.line)
  const forbidden = (keyOf(s, 'Forbidden')?.value ?? '').split(/[\s,]+/).filter(Boolean).map(Number)
  if (forbidden.length && (!keyOf(s, 'Derivation 1') || !keyOf(s, 'Derivation 2'))) fail(file, s.line, 'Orders', 'a slot in Forbidden: needs Derivation 1: and Derivation 2:, written apart')
  const forbids = stored ? a.wrongS.fences.filter(f => f.lang === 'out').map(f => compared(f.text)) : undefined
  if (forbids && !forbids.length) fail(file, a.wrongS.line, 'Wrong version', 'an item settled by its stored verdict stores the results its weaker slot permits and the item forbids, one ```out block each')
  const run = await checkRunAlone({ ...a, form: 'sanitizer', byOutput: true, ...(forbids ? { forbids } : {}) })
  const template = /** @type {{ template: string[] }} */ (/** @type {unknown} */ (a.reference)).template
  const inputs = [...run.examples, ...run.tests].map(t => t.input).concat(a.witness.text)
  for (const slot of slots)
    for (const what of /** @type {const} */ (['order', 'scope'])) {
      const down = weaker(slot, what)
      if (!down || (what === 'scope' && !dev)) continue
      if (stored) {
        if (!forbidden.includes(slot.n)) fail(file, s.line, 'Orders', `slot ${slot.n} is settled by the stored verdict alone, so it is in Forbidden: with two derivations, or its stored ${what} is stronger than needed`)
        continue
      }
      const text = `${fillSlots(template, slots.map(x => (x.n === slot.n ? down : x)), dev).join('\n')}\n`
      let loud = false
      for (const input of inputs) if (!loud) loud = Boolean((await resultOf(text, set, input, 'output')).report)
      if (!loud && !forbidden.includes(slot.n)) fail(file, s.line, 'Orders', `slot ${slot.n} with its ${what} one step weaker (${what === 'order' ? down.order : down.scope}) is silent under the sanitizer and is not in Forbidden:; the stored ${what} is stronger than needed, or the slot needs two derivations`)
    }
  return { ...run, form: 'orders', template, slots, forbidden, ...(forbids ? { forbids } : {}) }
}

/**
 * What the checks of an item alone share.
 * @typedef {{ s: Section, file: string, form: string, dev: boolean, lang: string, set: import('../../src/units/cpp/core/check.logic.js').Settings, result: string, reference: { lines: string[], text: string }, wrong: { lines: string[], text: string }, ref: Section, wrongS: Section, wit: Section, witness: Fence, sub: (t: string) => Section | undefined, byOutput?: boolean, forbids?: string[] }} Alone
 */

/**
 * A run or sanitizer item: the reference passes every example, the same in a second build, and
 * (sanitizer) is silent; the wrong version passes the examples and differs on the witness.
 * @param {Alone} a
 */
async function checkRunAlone({ s, file, form, set, result, reference, wrong, ref, wrongS, wit, witness, sub, byOutput = false, forbids }) {
  const examples = testsOf(sub('Examples')?.fences ?? [])
  const hidden = testsOf(sub('Tests')?.fences ?? [])
  if (!examples.length) fail(file, s.line, 'Item alone', 'a run or sanitizer item shows one example or more')
  if (witness.lang !== 'in') fail(file, wit.line, 'Witness', 'the witness of a run or sanitizer item is an input, ```in')
  const tests = []
  for (const t of [...examples, ...hidden]) {
    const x = await resultOf(reference.text, set, t.input, result)
    const y = await resultOf(reference.text, set, t.input, result, { fresh: true })
    if (!x.compiled) fail(file, ref.line, 'Entry check', `the reference does not compile:\n${x.error}`)
    if (!x.finished || (form === 'run' && x.code !== 0)) fail(file, ref.line, 'Entry check', `the reference fails on ${JSON.stringify(t.input)}:\n${x.error}`)
    if (x.out !== y.out || JSON.stringify(x.report) !== JSON.stringify(y.report)) fail(file, ref.line, 'Entry check', `the reference gives another result in a second build on ${JSON.stringify(t.input)}`)
    if (form === 'sanitizer' && x.report) fail(file, ref.line, 'Entry check', `the reference is loud: ${x.report.kind} at line ${x.report.line}`)
    if (t.output !== undefined && compared(t.output) !== x.out) fail(file, ref.line, 'Entry check', `the reference prints ${JSON.stringify(x.out)} on an example that expects ${JSON.stringify(compared(t.output))}`)
    tests.push({ input: t.input, output: x.out })
  }
  const verdictOn = async (/** @type {string} */ text, /** @type {string} */ input, /** @type {string} */ want) => {
    const r = await resultOf(text, set, input, result)
    if (!r.compiled) return 'rejected'
    if (form === 'sanitizer' && r.report) return `loud ${r.report.kind} ${r.report.line}`
    return r.finished && (form === 'sanitizer' || r.code === 0) && r.out === want ? 'same' : 'other'
  }
  // an orders item's weaker order is loud on any run, so its wrong version passes the examples by its output
  const { sanitize: _s, tool: _t, ...plain } = set
  const passes = async (/** @type {string} */ input, /** @type {string} */ want) => (byOutput ? (await resultOf(wrong.text, plain, input, result)).out === want : (await verdictOn(wrong.text, input, want)) === 'same')
  // an output holds the wrong version to the examples here; a count, below
  for (const [i, t] of result === 'output' ? examples.entries() : [])
    if (!(await passes(t.input, tests[i]?.output ?? ''))) fail(file, wrongS.line, 'Wrong version', `it does not pass example ${i + 1}; a wrong version passes the item's examples`)
  // a count no input moves (nm, sass, registers): the wrong version passes the examples by what it
  // prints, and gives another count
  if (result !== 'output')
    for (const [i, t] of examples.entries()) {
      const r = await resultOf(reference.text, set, t.input, result)
      const w = await resultOf(wrong.text, set, t.input, result)
      if (w.compiled && r.printed !== w.printed) fail(file, wrongS.line, 'Wrong version', `it prints ${JSON.stringify(w.printed)} on example ${i + 1}, not the reference's ${JSON.stringify(r.printed)}; a wrong version passes the item's examples`)
    }
  const want = await resultOf(reference.text, set, witness.text, result)
  if (form === 'sanitizer' && want.report) fail(file, wit.line, 'Witness', 'the reference is loud on the witness')
  // settled by the stored verdict: the wrong version gives its stored results, the reference's and those it adds
  if (forbids) {
    if (!want.finished || !forbids.some(f => f !== want.out)) fail(file, wit.line, 'Witness', "the wrong version's stored results on the witness hold none but the reference's")
    return { examples: tests.slice(0, examples.length), tests: tests.slice(examples.length), witness: { kind: 'input', text: witness.text } }
  }
  const w1 = await verdictOn(wrong.text, witness.text, want.out)
  const w2 = await verdictOn(wrong.text, witness.text, want.out)
  if (w1 === 'same') fail(file, wit.line, 'Witness', "the wrong version gives the reference's result on the witness")
  // a sanitizer item's wrong version is loud, on the witness or on a hidden test
  if (form === 'sanitizer' && !byOutput && !w1.startsWith('loud')) {
    let loud = false
    for (const t of hidden)
      if (!loud) {
        const v1 = await verdictOn(wrong.text, t.input, '')
        // the same kind of report on the same line in a second run
        loud = v1.startsWith('loud') && v1 === (await verdictOn(wrong.text, t.input, ''))
      }
    if (!loud) fail(file, wrongS.line, 'Wrong version', 'a sanitizer item\'s wrong version is loud under the sanitizer, on the witness or a hidden test')
  }
  if (w1 !== w2) fail(file, wit.line, 'Entry check', `the wrong version's result on the witness changes between runs (${w1}, then ${w2})`)
  return { examples: tests.slice(0, examples.length), tests: tests.slice(examples.length), witness: { kind: 'input', text: witness.text } }
}

/**
 * A stage 7 item alone: the reference passes every test, the same in a second build, its scan
 * silent; the wrong version gives the same output on every test and its scan is loud; the witness
 * is a program that compiles and on which the scan is silent, as the rule's bad example is not.
 * @param {Alone} a
 * @param {import('../../src/units/cpp/core/scan.logic.js').Scan} scan
 */
async function checkScanAlone({ s, file, set, result, reference, wrong, ref, wrongS, wit, witness, sub, dev }, scan) {
  const examples = testsOf(sub('Examples')?.fences ?? [])
  const hidden = testsOf(sub('Tests')?.fences ?? [])
  if (!examples.length) fail(file, s.line, 'Item alone', 'a run item shows one example or more')
  const tests = []
  for (const t of [...examples, ...hidden]) {
    const x = await resultOf(reference.text, set, t.input, result)
    const y = await resultOf(reference.text, set, t.input, result, { fresh: true })
    if (!x.compiled || !x.finished || x.code !== 0) fail(file, ref.line, 'Entry check', `the reference fails on ${JSON.stringify(t.input)}:\n${x.error}`)
    if (x.out !== y.out) fail(file, ref.line, 'Entry check', `the reference gives another result in a second build on ${JSON.stringify(t.input)}`)
    if (t.output !== undefined && compared(t.output) !== x.out) fail(file, ref.line, 'Entry check', `the reference prints ${JSON.stringify(x.out)} on an example that expects ${JSON.stringify(compared(t.output))}`)
    const w = await resultOf(wrong.text, set, t.input, result)
    if (!w.compiled || w.code !== 0 || w.out !== x.out) fail(file, wrongS.line, 'Wrong version', `it does not give the reference's output on ${JSON.stringify(t.input)}; a stage 7 wrong version breaks the rule, not the result`)
    tests.push({ input: t.input, output: x.out })
  }
  const r = await hitsOf([scan], reference.text, dev, file, ref.line)
  if (r.length) fail(file, ref.line, 'Entry check', `the scan of ${scan.rule} is loud on the reference, at its line ${r[0]?.line}`)
  if (!(await hitsOf([scan], wrong.text, dev, file, wrongS.line)).length) fail(file, wrongS.line, 'Wrong version', `the scan of ${scan.rule} is silent on it; the wrong version breaks the rule`)
  if (witness.lang !== (dev ? 'cuda' : 'cpp')) fail(file, wit.line, 'Witness', 'a stage 7 witness is a program, ```cpp')
  const wb = await build(witness.text, compileOnly(dev ? { device: true } : {}))
  if (!wb.compiled) fail(file, wit.line, 'Witness', `the witness does not compile:\n${wb.error}`)
  if ((await hitsOf([scan], witness.text, dev, file, wit.line)).length) fail(file, wit.line, 'Witness', `the scan of ${scan.rule} is loud on the witness`)
  return { examples: tests.slice(0, examples.length), tests: tests.slice(examples.length), witness: { kind: 'scan', text: witness.text } }
}

/**
 * A flag item: the reference gets every stated verdict, the wrong version misses one, and the
 * witness's probe lines are accepted by one and rejected by the other at the last level.
 * @param {Alone} a
 */
async function checkFlagAlone({ s, file, dev, lang, set, reference, wrong, ref, wrongS, wit, witness }) {
  const exp = keyOf(s, 'Expect')
  if (!exp?.list.length) fail(file, s.line, 'Item alone', 'a flag item lists Expect: lines, "- c++17: reject" or "- c++20..c++23: accept"')
  /** @type {Record<string, 'accept' | 'reject'>} */
  const expect = {}
  for (const row of exp.list) {
    const [range = '', what = ''] = row.split(/:\s*/)
    if (what !== 'accept' && what !== 'reject') fail(file, exp.line, 'Expect', `"${row}" ends in accept or reject`)
    for (const lv of levelsOf(range, file, exp.line)) expect[lv] = what
  }
  const built = (/** @type {string} */ text, /** @type {string} */ lv) =>
    build(text, compileOnly(dev ? set : { ...set, std: /** @type {import('../../src/units/cpp/core/check.logic.js').Level} */ (lv) }))
  const at = async (/** @type {string} */ text, /** @type {string} */ lv) => ((await built(text, lv)).compiled ? 'accept' : 'reject')
  // the lines where the reference is rejected: the same at every level that rejects it, stored
  /** @type {string | null} */
  let lines = null
  let differs = false
  for (const [lv, want] of Object.entries(expect)) {
    const b = await built(reference.text, lv)
    if ((b.compiled ? 'accept' : 'reject') !== want) fail(file, ref.line, 'Entry check', `the reference does not ${want} at ${lv}`)
    if (!b.compiled) {
      const here = b.errors.join(', ')
      if (lines !== null && lines !== here) fail(file, ref.line, 'Entry check', `the reference is rejected at lines ${here} at ${lv} but at ${lines} at another level`)
      lines = here
    }
    if ((await at(wrong.text, lv)) !== want) differs = true
  }
  if (!differs) fail(file, wrongS.line, 'Wrong version', 'it gets the stated verdict at every level; a wrong version misses one')
  const top = /** @type {string} */ (Object.keys(expect).at(-1))
  if (witness.lang !== lang) fail(file, wit.line, 'Witness', `the witness of a flag item is probe lines, \`\`\`${lang}`)
  const r = await at(`${reference.text}${witness.text}`, top)
  const w = await at(`${wrong.text}${witness.text}`, top)
  if (r === w) fail(file, wit.line, 'Witness', `the reference and the wrong version both ${r} the witness at ${top}`)
  return { examples: [], tests: [], expect, ...(lines ? { rejects: lines.split(', ').map(Number) } : {}), witness: { kind: 'probe', text: witness.text, level: top } }
}

/**
 * A probes item: the reference passes every probe, the wrong version fails one, and the witness's
 * probe lines are accepted by one version and rejected by the other.
 * @param {Alone} a
 */
async function checkProbesAlone({ s, file, dev, lang, set, reference, wrong, ref, wrongS, wit, witness, sub }) {
  const pr = sub('Probes')
  if (!pr) fail(file, s.line, 'Item alone', 'a probes item holds ### Probes: a block of probe lines, Accept: and Reject:')
  const probeLines = fenceOf(pr, lang, file).text.replace(/\n$/, '').split('\n')
  const nums = (/** @type {string} */ k) => (keyOf(pr, k)?.value ?? '').split(/[\s,]+/).filter(Boolean).map(Number)
  const accept = nums('Accept')
  const reject = nums('Reject')
  if (!accept.length || !reject.length) fail(file, pr.line, 'Probes', 'it names Accept: lines and Reject: lines of its block')
  const probed = probeRun(set, dev)
  const ok = await probed(reference.text, probeLines, accept, reject)
  if (ok !== true) fail(file, ref.line, 'Entry check', `the reference fails the probes: ${ok}`)
  if ((await probed(wrong.text, probeLines, accept, reject)) === true) fail(file, wrongS.line, 'Wrong version', 'it passes every probe; a wrong version fails one')
  if (witness.lang !== lang) fail(file, wit.line, 'Witness', `the witness of a probes item is probe lines, \`\`\`${lang}`)
  const r = await build(`${reference.text}${witness.text}`, compileOnly(set))
  const w = await build(`${wrong.text}${witness.text}`, compileOnly(set))
  if (r.compiled === w.compiled) fail(file, wit.line, 'Witness', 'the reference and the wrong version give the same verdict on the witness')
  return { examples: [], tests: [], probes: { lines: probeLines, accept, reject }, witness: { kind: 'probe', text: witness.text } }
}

/**
 * A compile alone, as the app asks it of a flag or probes item: no main needed, nothing run.
 * @param {import('../../src/units/cpp/core/check.logic.js').Settings} set
 */
const compileOnly = set => ({ ...set, flags: [...(set.flags ?? []).filter(f => f !== '-c'), '-c'] })

/**
 * The probe check: the answer with every accepted line compiles; the answer with each rejected
 * line alone fails at that line's own line. True, or what failed.
 * @param {import('../../src/units/cpp/core/check.logic.js').Settings} set
 * @param {boolean} dev
 */
const probeRun = (set, dev) => async (/** @type {string} */ answer, /** @type {string[]} */ lines, /** @type {number[]} */ accept, /** @type {number[]} */ reject) => {
  const offset = answer.split('\n').length - 1
  const pick = (/** @type {number[]} */ keep) => lines.map((l, i) => (keep.includes(i + 1) ? l : '')).join('\n')
  const all = await build(`${answer}${pick(accept)}\n`, compileOnly(set))
  if (!all.compiled) return `an accepted line is rejected:\n${all.error}`
  for (const n of reject) {
    const b = await build(`${answer}${pick([...accept, n])}\n`, compileOnly(set))
    if (b.compiled) return `probe line ${n} is accepted`
    if (!b.errors.includes(offset + n)) return `probe line ${n} fails at lines ${b.errors.map(e => e - offset).join(', ')}, not its own`
  }
  void dev
  return true
}

// The scans of stage 7

/**
 * A stage 7 kind's scan: `Rule:` its number, `Pattern: /source/flags` over the answer's blanked
 * text or `Warning: -Wname, …`, and the rule's own bad and good examples under `### Bad` and
 * `### Good`. Entry check: loud on the bad example, silent on the good one.
 * @param {Section} sec
 * @param {boolean} device
 * @param {string} file
 */
async function checkScan(sec, device, file) {
  const rule = keyOf(sec, 'Rule')?.value ?? ''
  if (!/^(P|I|F|R|ES|Con|T|Per|CP)\.\d+$/.test(rule)) fail(file, sec.line, 'Scan', 'Rule: names a Guidelines rule of P, I, F, R, ES, Con, T, Per or CP, as F.48')
  const pat = keyOf(sec, 'Pattern')?.value.match(/^\/(.+)\/([ims]*)$/)
  if (keyOf(sec, 'Pattern') && !pat) fail(file, keyOf(sec, 'Pattern')?.line ?? sec.line, 'Scan', 'Pattern: is /source/flags, a JavaScript regular expression')
  const warning = (keyOf(sec, 'Warning')?.value ?? '').split(/[\s,]+/).filter(Boolean)
  if (!pat && !warning.length) fail(file, sec.line, 'Scan', 'it names a Pattern: or a Warning:')
  if (badFlag(warning)) fail(file, keyOf(sec, 'Warning')?.line ?? sec.line, 'Scan', `${badFlag(warning)} is not a warning flag`)
  /** @type {import('../../src/units/cpp/core/scan.logic.js').Scan} */
  const scan = { rule, ...(pat ? { pattern: pat[1] ?? '', ...(pat[2] ? { flags: pat[2] } : {}) } : {}), ...(warning.length ? { warning } : {}) }
  const lang = device ? 'cuda' : 'cpp'
  const sub = (/** @type {string} */ t) => sec.subs.find(x => x.title === t)
  const badS = sub('Bad')
  const goodS = sub('Good')
  if (!badS || !goodS) fail(file, sec.line, 'Scan', 'it holds ### Bad and ### Good, the rule\'s own examples')
  const bad = shown(fenceOf(badS, lang, file), file)
  const good = shown(fenceOf(goodS, lang, file), file)
  if (!(await hitsOf([scan], bad.text, device, file, badS.line)).length) fail(file, badS.line, 'Entry check', `the scan of ${rule} is silent on the rule's own bad example`)
  const g = await hitsOf([scan], good.text, device, file, goodS.line)
  if (g.length) fail(file, goodS.line, 'Entry check', `the scan of ${rule} is loud on the rule's own good example, at its line ${g[0]?.line}`)
  return { scan, bad: bad.lines, good: good.lines }
}

/**
 * The scans' hits on a program: a pattern over its text, a warning from g++ (nvcc's host compiler
 * on the device) compiling it alone at c++23 with the warnings the scans read.
 * @param {readonly import('../../src/units/cpp/core/scan.logic.js').Scan[]} scans
 * @param {string} text
 * @param {boolean} device
 * @param {string} file
 * @param {number} line
 * @param {boolean} [lenient] a program that does not build at c++23 (an item alone asked to be
 *   rejected there) is read by the patterns alone, as the app reads it
 */
async function hitsOf(scans, text, device, file, line, lenient = false) {
  const flags = scanFlags(scans, device)
  let said = ''
  if (flags.length) {
    const b = await build(text, compileOnly({ ...(device ? { device: true } : {}), flags }))
    if (!b.compiled && !lenient) fail(file, line, 'Scan', `a warning scan reads the compiler, and this program does not compile:\n${b.error}`)
    said = b.compiled ? (b.reports['resource-usage'] ?? '') : ''
  }
  return scanHits(scans, text, said, device ? 'main.cu' : 'main.cpp')
}

// The track

/**
 * The stages: content/track/stages.md, one line "<n> <title>: <book>" each.
 * @param {string} dir
 */
function readStages(dir) {
  const file = path.join(dir, 'stages.md')
  return readFileSync(file, 'utf8')
    .split('\n')
    .flatMap((l, i) => {
      if (!l.trim() || l.startsWith('#')) return []
      const m = l.match(/^(\d) ([^:]+): (.+)$/)
      if (!m) fail(file, i + 1, 'Stages', 'a line is "<n> <title>: <book or sources>"')
      return [{ n: Number(m[1]), title: m[2] ?? '', book: m[3] ?? '' }]
    })
}

/**
 * One kind's file, every item checked.
 * @param {string} file
 * @param {number} stage
 * @param {number} place
 * @param {ReadonlySet<string>} earlier the kinds before it in the track
 */
async function readKind(file, stage, place, earlier) {
  const [top, ...secs] = sectionsOf(file)
  const id = `${stage}.${String(place).padStart(2, '0')}`
  const head = secs[0]
  if (!head || !head.title.startsWith(`${id} `)) fail(file, 1, 'Kind', `the file opens "# ${id} <name>", its stage and place`)
  void top
  const name = head.title.slice(id.length + 1)
  if (!/^[A-Z`]/.test(name) || name.endsWith('.')) fail(file, head.line, 'Kind', 'its name starts with a capital and has no full stop')
  const part = keyOf(head, 'Part')?.value
  const clause = keyOf(head, 'Clause')?.value.split(/,\s*/).filter(Boolean) ?? []
  if (!part) fail(file, head.line, 'Kind', 'it names its Part:, as the paper lists it')
  if (!clause.length) fail(file, head.line, 'Kind', 'it names its Clause:, the stable names or sections its verdicts rest on')
  const after = (keyOf(head, 'After')?.value ?? 'none') === 'none' ? [] : (keyOf(head, 'After')?.value ?? '').split(/,\s*/)
  for (const a of after) if (!earlier.has(a)) fail(file, keyOf(head, 'After')?.line ?? head.line, 'Kind order', `${a} is not a kind before this one`)
  const levels = levelsOf(keyOf(head, 'Levels')?.value ?? 'c++11', file, keyOf(head, 'Levels')?.line ?? head.line)
  const device = keyOf(head, 'Device')?.value === 'yes'
  const source = keyOf(head, 'Source')?.value ?? ''
  const sec = (/** @type {RegExp} */ re) => secs.filter(s => re.test(s.title))
  const ex = sec(/^Example$/)[0]
  if (!ex) fail(file, head.line, 'Kind', 'it holds ## Example')
  const verdicts = sec(/^Verdict \d+$/)
  const alones = sec(/^Alone \d+$/)
  const counts = sec(/^Count$/)
  const scans = sec(/^Scan$/)
  if (stage === 7 && scans.length !== 1) fail(file, head.line, 'Kind', 'a stage 7 kind holds one ## Scan, its rule\'s scan')
  if (stage !== 7 && scans.length) fail(file, head.line, 'Kind', 'only a stage 7 kind holds a ## Scan')
  if (!verdicts.length) fail(file, head.line, 'Kind', 'it holds ## Verdict 1')
  if (!alones.length) fail(file, head.line, 'Kind', 'it holds ## Alone 1')
  const tid = `t${id}`
  const scan = scans[0] ? await checkScan(scans[0], device, file) : null
  const example = await checkExample(fenceOf(ex, device ? 'cuda' : 'cpp', file), device, file)
  const vs = await Promise.all(verdicts.map(async (v, i) => ({ id: `${tid}v${i + 1}`, ...(await checkVerdict(v, levels, device, file)) })))
  const count = counts[0] ? { id: `${tid}c`, ...(await checkCount(counts[0], device, file)) } : null
  const as = await Promise.all(alones.map(async (a, i) => ({ ...(await checkAlone(a, device, file, scan?.scan ?? null)), id: `${tid}a${i + 1}` })))
  return {
    shape: { id, stage, name, part, after, clause, levels, device, verdicts: vs.map(v => v.id), count: count?.id ?? null, alones: as.map(a => a.id), ...(scan ? { scan: scan.scan } : {}) },
    content: { id, source, example, verdicts: vs, count, alones: as, ...(scan ? { scan: { bad: scan.bad, good: scan.good } } : {}) }
  }
}

// The reading

/**
 * One task of the track's reading (The track's reading): `# 0.NN <name>`, `Task:` the paper's
 * wording of the task, `Shape:` the QUDA files whose routine was read to choose its shape, its
 * statement lines; `## Bound`, the count the task bounds (`Count:` what, `Answer:` the number,
 * `Source:` the library's file and how it gives it, two derivations); its verdict items, its count
 * item where it has one, and one item alone with its witness. Every item names with `Tag:` the
 * track kind whose part its check tests. `Newer: 12, 30` on the item alone names the lines of the
 * reference that need c++23: g++ (nvcc on the device) rejects it at c++20 at exactly those lines.
 * @param {string} file
 * @param {number} place
 * @param {ReadonlySet<string>} kinds the track's kinds, which a tag names
 * @param {ReadonlyMap<string, readonly string[]>} [clauses] each kind's clauses: a task shows the clauses of the parts its checks test
 */
async function readTask(file, place, kinds, clauses = new Map()) {
  const [, ...secs] = sectionsOf(file)
  const id = `0.${String(place).padStart(2, '0')}`
  const head = secs[0]
  if (!head || !head.title.startsWith(`${id} `)) fail(file, 1, 'Task', `the file opens "# ${id} <name>", the task's place`)
  const name = head.title.slice(id.length + 1)
  const task = keyOf(head, 'Task')?.value ?? ''
  const shape = keyOf(head, 'Shape')?.value ?? ''
  if (!task || !shape) fail(file, head.line, 'Task', 'it names its Task:, as the paper words it, and its Shape:, the QUDA files read to choose it')
  const intro = head.text.map(t => t.value)
  if (!intro.length) fail(file, head.line, 'Task', 'its statement stands under the header, in plain words')
  const device = keyOf(head, 'Device')?.value === 'yes'
  const levels = levelsOf(keyOf(head, 'Levels')?.value ?? 'c++23', file, keyOf(head, 'Levels')?.line ?? head.line)
  const sec = (/** @type {RegExp} */ re) => secs.filter(x => re.test(x.title))
  const b = sec(/^Bound$/)[0]
  if (!b) fail(file, head.line, 'Task', 'it holds ## Bound, the count the task bounds')
  const answer = Number(keyOf(b, 'Answer')?.value)
  const bound = {
    count: keyOf(b, 'Count')?.value ?? '',
    answer,
    source: keyOf(b, 'Source')?.value ?? '',
    derivations: [keyOf(b, 'Derivation 1')?.value ?? '', keyOf(b, 'Derivation 2')?.value ?? '']
  }
  if (!bound.count || !Number.isInteger(answer) || answer < 0 || !bound.source) fail(file, b.line, 'Bound', 'it names its Count:, its Answer: (a whole number) and its Source:, the library file that gives it')
  if (!bound.derivations.every(Boolean)) fail(file, b.line, 'Bound', 'the bound is derived twice: Derivation 1: and Derivation 2:, written apart')
  const verdicts = sec(/^Verdict \d+$/)
  const counts = sec(/^Count$/)
  const alones = sec(/^Alone \d+$/)
  if (alones.length !== 1) fail(file, head.line, 'Task', 'it holds one ## Alone 1, the item alone with its witness')
  /** @type {Record<string, string>} */
  const tags = {}
  const tagOf = (/** @type {Section} */ x, /** @type {string} */ item) => {
    const t = keyOf(x, 'Tag')?.value ?? ''
    if (!kinds.has(t)) fail(file, x.line, 'Tag', `"${t}" is not a kind of the track; each check names the kind whose part it tests`)
    tags[item] = t
  }
  const tid = `t${id}`
  tagOf(b, `${tid}b`)
  verdicts.forEach((v, i) => tagOf(v, `${tid}v${i + 1}`))
  if (counts[0]) tagOf(counts[0], `${tid}c`)
  tagOf(/** @type {Section} */ (alones[0]), `${tid}a1`)
  tags[`${tid}w1`] = tags[`${tid}a1`] ?? ''
  const vs = await Promise.all(verdicts.map(async (v, i) => ({ id: `${tid}v${i + 1}`, ...(await checkVerdict(v, levels, device, file)) })))
  const count = counts[0] ? { id: `${tid}c`, ...(await checkCount(counts[0], device, file)) } : null
  const a = { ...(await checkAlone(/** @type {Section} */ (alones[0]), device, file)), id: `${tid}a1` }
  const newer = (keyOf(/** @type {Section} */ (alones[0]), 'Newer')?.value ?? '').split(/[\s,]+/).filter(Boolean).map(Number)
  if (newer.length) {
    const old = await build(`${a.reference.join('\n')}\n`, compileOnly({ ...a.settings, std: 'c++20' }))
    if (old.compiled || old.errors.join(', ') !== newer.join(', ')) fail(file, alones[0]?.line ?? 1, 'Newer', `at c++20 ${a.device ? 'nvcc' : 'g++'} rejects the reference at lines ${old.compiled ? 'none' : old.errors.join(', ')}, not exactly at ${newer.join(', ')}`)
  }
  return {
    shape: { id, stage: 0, name, part: task, after: [], clause: [...new Set(Object.values(tags).flatMap(t => clauses.get(t) ?? []))], levels, device, verdicts: vs.map(v => v.id), count: count?.id ?? null, alones: [a.id], task, shape, intro, bound, tags, ...(newer.length ? { newer } : {}) },
    content: { id, source: shape, example: { lines: [], labels: [] }, verdicts: vs, count, alones: [{ ...a, ...(newer.length ? { newer, statement: [...a.statement, `Your program uses C++23 where the reference does: ${a.device ? 'nvcc' : 'g++'} must accept it at c++23 and reject it at c++20.`] } : {}) }] }
  }
}

/**
 * The reading's tasks, each checked; none when the folder is missing. The first reading is
 * `reading/NN-slug.md`; the reading written after the r-th wrong one is `reading/<r>/NN-slug.md`.
 * NN is the task's number of the nine, and a task's id is 0.<r><n> (the first reading's 0.0<n>).
 * @param {string} dir
 * @param {ReadonlySet<string>} kinds
 * @param {ReadonlyMap<string, readonly string[]>} [clauses]
 */
async function readReading(dir, kinds, clauses = new Map()) {
  const folder = path.join(dir, 'reading')
  if (!existsSync(folder)) return { tasks: [], gaps: [] }
  // tasks.txt: the paper's nine tasks, "<n> <wording>"; a task file is NN-slug.md, NN its number
  const listed = readFileSync(path.join(folder, 'tasks.txt'), 'utf8').split('\n').flatMap(l => {
    const m = l.match(/^(\d) (.+)$/)
    return m ? [{ n: Number(m[1]), task: m[2] ?? '' }] : []
  })
  const rounds = [0, ...readdirSync(folder).filter(f => /^[1-9]$/.test(f)).map(Number).sort((a, b) => a - b)]
  const tasks = []
  const gaps = []
  for (const round of rounds) {
    const here = round ? path.join(folder, String(round)) : folder
    const files = readdirSync(here).filter(f => /^0[1-9]-.*\.md$/.test(f)).sort()
    // the gap rule: a task for which nothing passes its entry check is shown by name and not read;
    // its reason is printed for whoever builds it
    const read = await Promise.all(
      files.map(async f => {
        const n = Number(f.slice(0, 2))
        if (!listed.some(t => t.n === n)) fail(path.join(here, f), 1, 'Task', 'its number is not one of the nine tasks of tasks.txt')
        try {
          const t = await readTask(path.join(here, f), round * 10 + n, kinds, clauses)
          return round ? { ...t, shape: { ...t.shape, round } } : t
        } catch (e) {
          console.error(`The reading leaves out task ${n}${round ? ` of reading ${round + 1}` : ''}: ${e instanceof Error ? e.message : String(e)}`)
          return null
        }
      })
    )
    tasks.push(...read.flatMap(t => (t ? [t] : [])))
    const built = new Set(files.filter((_, i) => read[i]).map(f => Number(f.slice(0, 2))))
    gaps.push(...listed.filter(t => !built.has(t.n)).map(t => (round ? { ...t, round } : t)))
  }
  return { tasks, gaps }
}

/**
 * The ids of every kind file of the track, read from the file names alone.
 * @param {string} dir
 */
const kindIdsIn = dir =>
  new Set(
    readStages(dir).flatMap(st => {
      const folder = path.join(dir, String(st.n))
      return existsSync(folder) ? readdirSync(folder).filter(f => /^\d\d-.*\.md$/.test(f)).map(f => `${st.n}.${f.slice(0, 2)}`) : []
    })
  )

/**
 * One kind file checked alone, while its stage is being written: its id from its folder and file
 * name, every kind it names in After: taken as earlier when its number is lower. Writes nothing.
 * @param {string} file
 */
export async function checkKindFile(file) {
  const up = path.basename(path.dirname(file))
  if (up === 'reading') return readTask(file, Number(path.basename(file).slice(0, 2)), kindIdsIn(path.dirname(path.dirname(file))))
  if (/^[1-9]$/.test(up) && path.basename(path.dirname(path.dirname(file))) === 'reading')
    return readTask(file, Number(up) * 10 + Number(path.basename(file).slice(0, 2)), kindIdsIn(path.dirname(path.dirname(path.dirname(file)))))
  const stage = Number(path.basename(path.dirname(file)))
  const place = Number(path.basename(file).slice(0, 2))
  if (!stage || !place) throw new Error(`${file}: a kind file is content/track/<stage>/NN-slug.md`)
  const id = (/** @type {string} */ k) => k.split('.').map(Number)
  const before = new Set([...kindIdsIn(path.dirname(path.dirname(file)))].filter(k => { const [s = 0, n = 0] = id(k); return s < stage || (s === stage && n < place) }))
  return readKind(file, stage, place, before)
}

/**
 * The track: its stages and, stage by stage in order, its kinds, each kind file named
 * `NN-slug.md` in content/track/<stage>/.
 * @param {string} [dir]
 */
export async function buildTrack(dir = TRACK) {
  if (!existsSync(dir)) return { stages: [], kinds: [], content: {}, reading: [], gaps: [] }
  // a stage's rules.txt (stage 7: the Guidelines rules a scan settles, and those left out and why) is
  // shown when the stage opens
  const stages = readStages(dir).map(st => {
    const list = path.join(dir, String(st.n), 'rules.txt')
    return existsSync(list) ? { ...st, rules: readFileSync(list, 'utf8').split('\n').filter(l => l.trim() && !l.startsWith('#')) } : st
  })
  /** @type {Set<string>} */
  const earlier = new Set()
  const kinds = []
  /** @type {Record<number, Record<string, unknown>>} */
  const content = {}
  // while a later stage is written, ERUKO_TRACK_UPTO=<n> builds the stages up to n alone
  const upto = Number(process.env.ERUKO_TRACK_UPTO ?? 9)
  for (const st of stages) {
    const folder = path.join(dir, String(st.n))
    if (!existsSync(folder) || st.n > upto) continue
    const files = readdirSync(folder).filter(f => f.endsWith('.md')).sort()
    const built = []
    // a kind's number is its part's place in the paper's list (cpp-order.md), so a part that has
    // no kind leaves its number unused and every other id stays as the paper numbers it
    const places = files.map(f => Number(f.match(/^(\d\d)-/)?.[1] ?? 0))
    for (const [i, f] of files.entries()) {
      const place = places[i] ?? 0
      if (!place || places.indexOf(place) !== i) fail(path.join(folder, f), 1, 'Kind', 'a kind file is NN-slug.md, its part\'s number in the stage, used once')
      built.push(readKind(path.join(folder, f), st.n, place, new Set([...earlier, ...places.slice(0, i).map(n => `${st.n}.${String(n).padStart(2, '0')}`)])))
    }
    const done = await Promise.all(built)
    for (const k of done) {
      earlier.add(k.shape.id)
      kinds.push(k.shape)
      content[st.n] = { ...(content[st.n] ?? {}), [k.shape.id]: k.content }
    }
  }
  const { tasks: reading, gaps } = upto >= 9 ? await readReading(dir, new Set(kinds.map(k => k.id)), new Map(kinds.map(k => [k.id, k.clause]))) : { tasks: [], gaps: [] }
  if (reading.length) content[0] = Object.fromEntries(reading.map(t => [t.shape.id, t.content]))
  await scansOverReferences(kinds, content)
  return { stages, kinds, content, reading: reading.map(t => t.shape), gaps }
}

/**
 * Every scan of stage 7 runs over every answer written once its kind is retired, so every item
 * alone's reference, in every stage, is silent under every scan its statement does not exempt:
 * a learner who writes the reference is never marked wrong by a scan.
 * @param {readonly { id: string, scan?: import('../../src/units/cpp/core/scan.logic.js').Scan }[]} kinds
 * @param {Record<number, Record<string, any>>} content
 */
async function scansOverReferences(kinds, content) {
  const scans = kinds.flatMap(k => (k.scan ? [k.scan] : []))
  if (!scans.length) return
  const jobs = []
  for (const [stage, ks] of Object.entries(content))
    for (const k of Object.values(ks))
      for (const a of k.alones) {
        if (a.form === 'orders') continue
        const own = scans.filter(x => !(a.exempt ?? []).includes(x.rule))
        const file = path.join(TRACK, stage, `${k.id}`)
        jobs.push(
          hitsOf(own, `${a.reference.join('\n')}\n`, a.device, file, 1, true).then(hits => {
            if (hits[0]) fail(file, 1, 'Scan', `${a.id}'s reference breaks rule ${hits[0].rule} at its line ${hits[0].line}; write it so the scan is silent, or ask for the break in the statement with Exempt: ${hits[0].rule}`)
          })
        )
      }
  await Promise.all(jobs)
}
