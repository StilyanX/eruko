// Hides: how the language track's machine checks are asked of a compiler and read back ("A Self-Study
// System", Programming, The track's material: Check forms, Levels, Extensions, Races and memory
// errors): the five `-std` levels, the flags an item may add, the compiler's arguments for a host
// program and for a device program, and the report a sanitizer prints, read as its tool, its kind
// and its line. The runner (scripts/cpp-runner.mjs) and the generator (scripts/lib/cpp-track.mjs)
// both build their commands here, so a check runs the same in the app and at entry.

/** @typedef {'c++11' | 'c++14' | 'c++17' | 'c++20' | 'c++23'} Level */
/** The levels an item is asked at; c++26 never, since N4950 is the reference. @type {readonly Level[]} */
export const LEVELS = ['c++11', 'c++14', 'c++17', 'c++20', 'c++23']

/** @typedef {'address' | 'thread'} HostSanitizer `-fsanitize=address,undefined` or `-fsanitize=thread`, each in its own run */
/** @typedef {'memcheck' | 'initcheck' | 'racecheck'} DeviceTool The one tool of compute-sanitizer a device check runs */
/** @type {readonly DeviceTool[]} */
export const TOOLS = ['memcheck', 'initcheck', 'racecheck']

/**
 * The flags an item may add, each a part's own subject (`-ffp-contract`, `-fmad`, `-ftz`) or what
 * a part needs to build (`-pthread`, TBB, `--extended-lambda`); no flag is added to make an item pass.
 */
const EXTRA = new Set([
  '-O0',
  '-O2',
  '-ffp-contract=off',
  '-ffp-contract=fast',
  '-ffast-math',
  '-pthread',
  '-ltbb',
  '-fmad=true',
  '-fmad=false',
  '-ftz=true',
  '-ftz=false',
  '--extended-lambda',
  '--expt-relaxed-constexpr',
  '-maxrregcount=32',
  '-c'
])

/** The device's architecture: nvcc's `native`, the compute capability of the GPU present, which the pin stores. */
const ARCH = 'native'

/**
 * A run's settings as an item names them; `debug` builds for gdb (`-g -O0`).
 * @typedef {Readonly<{ std?: Level, sanitize?: HostSanitizer, device?: boolean, tool?: DeviceTool, flags?: readonly string[], debug?: boolean }>} Settings
 */

/**
 * The flags an item adds, each one the list allows; the first that it does not is named.
 * @param {readonly string[] | undefined} flags
 * @returns {string | null}
 */
export const badFlag = flags => (flags ?? []).find(f => !EXTRA.has(f) && !WARNING.test(f)) ?? null

/** A warning a Guidelines scan reads (`-Wold-style-cast`, `-Xcompiler=-W…` for nvcc's host compiler); a warning never fails a build, and `-Werror` is not one. */
const WARNING = /^(?:-Xcompiler=)?-W(?!error)[a-z][a-z0-9-]*(?:=\d+)?$/

/**
 * g++'s arguments for a host program: the level, `-pedantic-errors` always, so an extension is an
 * error and never an answer, line information for a sanitizer's report, then the item's flags.
 * Sources and output are added by the caller.
 * @param {Settings} s
 * @returns {string[]}
 */
export function hostArgs(s) {
  const flags = s.flags ?? []
  const opt = s.debug
    ? ['-g', '-O0']
    : flags.includes('-O0') || flags.includes('-O2')
      ? []
      : ['-O2']
  const san =
    s.sanitize === 'address'
      ? [
          '-g',
          '-fsanitize=address,undefined',
          '-fno-omit-frame-pointer',
          '-fno-sanitize-recover=all'
        ]
      : s.sanitize === 'thread'
        ? ['-g', '-fsanitize=thread']
        : []
  return [
    `-std=${s.std ?? 'c++23'}`,
    '-pedantic-errors',
    '-pipe',
    '-fdiagnostics-color=never',
    ...opt,
    ...san,
    ...flags.filter(f => f !== '-ltbb')
  ]
}

/**
 * The libraries linked after the sources: TBB when an item names it, from the tools' folder
 * (its headers, so the parallel algorithms run in parallel, and its library on the run path).
 * @param {Settings} s
 * @param {string} tools the folder holding tbb/ and tbb-dev/, or '' for the system's own
 */
export const hostLibs = (s, tools) => {
  if (!(s.flags ?? []).includes('-ltbb')) return []
  if (!tools) return ['-ltbb']
  return [
    `-isystem${tools}/tbb-dev/include`,
    `-L${tools}/tbb/lib`,
    `-Wl,-rpath,${tools}/tbb/lib`,
    '-ltbb'
  ]
}

/**
 * nvcc's arguments for a device program: g++ 16 as its host compiler, the level (nvcc's highest
 * it accepts, when the item names none), the device's architecture, line information for
 * compute-sanitizer, then the item's flags.
 * @param {Settings} s
 * @param {string} ccbin the host compiler
 * @param {Level} highest the highest level nvcc accepts, which Setup prints
 * @param {string} cuda the toolkit's folder, whose headers nvcc's own profile does not name
 * @returns {string[]}
 */
export const deviceArgs = (s, ccbin, highest, cuda) => [
  '-ccbin',
  ccbin,
  `-I${cuda}/include`,
  `-std=${s.std ?? highest}`,
  `-arch=${ARCH}`,
  '-lineinfo',
  '-O2',
  ...(s.flags ?? []).filter(f => f !== '-O2')
]

/**
 * The environment of a sanitized run: the first report ends it, so its kind and line are the
 * same on every run; leaks are reported.
 */
export const SANITIZER_ENV = {
  ASAN_OPTIONS: 'detect_leaks=1:halt_on_error=1:abort_on_error=0',
  UBSAN_OPTIONS: 'halt_on_error=1:print_stacktrace=0',
  TSAN_OPTIONS: 'halt_on_error=1'
}

/** @typedef {Readonly<{ tool: string, kind: string, line: number }>} Report A sanitizer's report: the tool, the kind of report and the line of the program it names (0 when it names none) */

/** The kinds of an undefined-behaviour report, by the words of its message. */
const UB_KINDS = [
  ['signed integer overflow', 'signed integer overflow'],
  ['out of bounds', 'index out of bounds'],
  ['shift exponent', 'shift out of range'],
  ['left shift of', 'shift out of range'],
  ['division by zero', 'division by zero'],
  ['outside the range of representable values', 'float-cast overflow'],
  ['misaligned', 'misaligned access'],
  ['null pointer', 'null pointer'],
  ['is not a valid value', 'invalid value'],
  ['reached the end of a value-returning function', 'missing return'],
  ['pointer overflow', 'pointer overflow']
]

/**
 * The line of `file` a report's text names first, or 0.
 * @param {string} text
 * @param {string} file
 */
function lineIn(text, file) {
  const m = text.match(new RegExp(`${file.replace('.', '\\.')}:(\\d+)`))
  return m ? Number(m[1]) : 0
}

/**
 * A host sanitizer's first report in what a run wrote to its error stream, or null when silent.
 * @param {string} stderr
 * @param {string} [file]
 * @returns {Report | null}
 */
export function hostReport(stderr, file = 'main.cpp') {
  const ub = stderr.match(/([\w.]+):(\d+):\d+: runtime error: (.*)/)
  if (ub && ub[1] === file) {
    const said = ub[3] ?? ''
    const kind =
      UB_KINDS.find(([words]) => said.includes(words ?? ''))?.[1] ??
      said.split(/[\d'"]/)[0]?.trim() ??
      ''
    return { tool: 'undefined', kind, line: Number(ub[2]) }
  }
  const leak = stderr.match(/SUMMARY: AddressSanitizer: \d+ byte\(s\) leaked/)
  if (leak) return { tool: 'address', kind: 'leak', line: lineIn(stderr, file) }
  const asan = stderr.match(/SUMMARY: AddressSanitizer: ([\w-]+)/)
  if (asan) {
    const at = stderr.slice(stderr.indexOf('ERROR: AddressSanitizer'))
    return { tool: 'address', kind: asan[1] ?? '', line: lineIn(at, file) }
  }
  const tsan = stderr.match(/SUMMARY: ThreadSanitizer: ([\w ()-]+?) \S*?:(\d+)/)
  if (tsan) return { tool: 'thread', kind: tsan[1] ?? '', line: Number(tsan[2]) }
  return null
}

/**
 * compute-sanitizer's first report in what it printed, or null when it reports no error.
 * @param {string} text
 * @param {DeviceTool} tool
 * @param {string} [file]
 * @returns {Report | null}
 */
export function deviceReport(text, tool, file = 'main.cu') {
  const errors = text.match(/(?:ERROR SUMMARY: (\d+) error|RACECHECK SUMMARY: (\d+) hazard)/)
  if (!errors || (errors[1] ?? errors[2]) === '0') return null
  const at = (/** @type {RegExp} */ re) => {
    const m = text.match(re)
    return m ? { kind: (m[1] ?? '').trim(), line: lineIn(text.slice(m.index ?? 0), file) } : null
  }
  const found = at(/=+ (Invalid __\w+__ (?:read|write)) of size/) ??
    at(/=+ (Uninitialized __\w+__ memory read) of size/) ??
    at(/=+ (?:Error|Warning): (Race reported) between/) ??
    at(/=+ (Invalid arguments)/) ??
    at(/=+ (Misaligned (?:address|shared or local address))/) ??
    at(/=+ (Leaked) \d+ bytes/) ??
    at(/=+ (Program hit [\w ]+?) \(/) ?? { kind: 'error', line: lineIn(text, file) }
  return { tool, ...found }
}

/**
 * The lines g++ or nvcc reports an error at, in `file`, in its own text.
 * @param {string} text
 * @param {string} [file]
 * @returns {number[]}
 */
export function errorLines(text, file = 'main.cpp') {
  const lines = new Set()
  const re = new RegExp(
    `(?:^|/)${file.replace('.', '\\.')}(?::(\\d+)(?::\\d+)?: error|\\((\\d+)\\): error)`,
    'gm'
  )
  for (const m of text.matchAll(re)) lines.add(Number(m[1] ?? m[2]))
  return [...lines].sort((a, b) => a - b)
}
