#!/usr/bin/env node
// Hides: how a C++ program typed in Eruko is compiled and run on the computer Eruko runs on. No
// maintained C++23 compiler runs inside a page, so this small program does it at one fixed local
// address and lets only Eruko's own address call it (A Self-Study System, Programming, Runner).
//
//   npm run cpp-runner [-- --origin <the address Eruko is open at>]… [--compiler g++] [--port 8767]
//                      [--cuda <the CUDA toolkit's folder, holding bin/nvcc>]
//                      [--tools <a folder holding tbb/, tbb-dev/ and gdb/>]
//   Without --cuda or --tools it takes ~/.cache/eruko-cuda/tk and ~/.cache/eruko-cpp-tools where
//   they exist, the folders the track's generator uses (scripts/lib/cpp-track.md).
//
//   GET  /      { ok, compiler, version, standard, cuda }: the compiler and the first line it
//               reports, and nvcc's version line ('' without a toolkit)
//   POST /run   { files: { 'main.cpp' or 'main.cu': text, … }, tests: [{ input }], kind: 'program' | 'catch2',
//                 (kind "catch2": files hold a function problem's .h, .cpp and the track's *_test.cpp, built
//                 with Catch2 v2's main and run once; runs[0].stdout is Catch2's XML report)
//                 std?, sanitize?: 'address' | 'thread', device?: true, tool?: compute-sanitizer's tool,
//                 flags?: [the item's flags], report?: ['nm' | 'sass' | 'resource-usage'],
//                 gdb?: { line, name } (built with -g -O0; runs[0].stdout is what gdb prints for
//                 the name after the line runs, on the first test's input) }
//               → { compiled: true, runs: [{ stdout, stderr, exit, signal, finished }], reports: { … } }
//               or { compiled: false, error: the compiler's own text }
//   POST /stop  stops every program running at once; { ok: true }
//
// The files are compiled once (g++ -std=c++23 -O2 by default; the language track names its level,
// sanitizer and flags, and a device program goes to nvcc with g++ as its host compiler, all built
// in src/units/cpp/core/check.logic.js), kept by the hash of their text and settings, and run once
// per test with the test's input on stdin, under compute-sanitizer when a tool is named. There is no time limit: a program runs until it ends or
// /stop is called. A run that prints more than 1 MB is stopped and is not finished. The program
// sees LANG=C and nothing else of the environment, so it runs the same every time. The compiler's
// text is passed on as it wrote it, with the temporary folder taken out of every path.
import { execFileSync, spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { homedir, tmpdir } from 'node:os'
import { basename, join } from 'node:path'
import {
  SANITIZER_ENV,
  TOOLS,
  badFlag,
  deviceArgs,
  hostArgs,
  hostLibs,
  LEVELS
} from '../src/units/cpp/core/check.logic.js'

const args = process.argv.slice(2)
/**
 * Every value given after `--name`.
 * @param {string} name
 * @returns {(string | undefined)[]}
 */
const all = name => args.flatMap((a, i) => (a === `--${name}` ? [args[i + 1]] : []))
/** @param {string} name */
const one = name => all(name)[0]
const port = Number(one('port') ?? 8767)
const compiler = one('compiler') ?? 'g++'
/** The host compiler nvcc is given: the same g++, by its full path. */
const compilerPath = compiler.includes('/') ? compiler : (() => { try { return execFileSync('sh', ['-c', `command -v ${compiler}`], { encoding: 'utf8' }).trim() } catch { return compiler } })()
const origins = new Set(['http://127.0.0.1:9999', 'http://localhost:9999', ...all('origin')])
const FLAGS = ['-std=c++23', '-O2', '-pipe', '-fdiagnostics-color=never']
/** @param {string} dir */
const ifThere = dir => (existsSync(dir) ? dir : '')
const cuda = one('cuda') ?? ifThere(join(homedir(), '.cache', 'eruko-cuda', 'tk'))
const tools = one('tools') ?? ifThere(join(homedir(), '.cache', 'eruko-cpp-tools'))
const gdbProgram = tools ? join(tools, 'gdb', 'bin', 'gdb') : 'gdb'

/** Catch2 v2, the test runner the Exercism track's tests are written for, vendored beside the runner. */
const CATCH = join(import.meta.dirname, 'vendor', 'catch2-2.13.6', 'catch.hpp')
const CAP = 1024 * 1024
const ROOT = join(tmpdir(), 'aether-cpp')
// The compiler writes its messages in plain English with plain quotes.
const COMPILE_ENV = { ...process.env, LANG: 'C', LC_ALL: 'C' }

/**
 * @param {string} text
 * @returns {never}
 */
const quit = text => {
  console.error(text)
  process.exit(2)
}

let version = ''
try {
  version = execFileSync(compiler, ['--version'], { encoding: 'utf8', env: COMPILE_ENV }).split('\n')[0] ?? ''
} catch {
  quit(`The runner needs the C++ compiler ${compiler}, and it does not start. Install GCC 14 or later, or name the compiler with --compiler <program>.`)
}

let cudaVersion = ''
if (cuda)
  try {
    cudaVersion = execFileSync(join(cuda, 'bin', 'nvcc'), ['--version'], { encoding: 'utf8' }).split('\n').filter(l => l.startsWith('Cuda compilation tools'))[0] ?? ''
  } catch {
    quit(`The runner finds no nvcc in ${cuda}/bin. Name the CUDA toolkit's folder with --cuda <folder>.`)
  }

let gdbVersion = ''
try {
  gdbVersion = execFileSync(gdbProgram, ['--version'], { encoding: 'utf8' }).split('\n')[0] ?? ''
} catch {
  gdbVersion = ''
}

/** The highest level nvcc accepts, tried from c++23 down at start. @type {import('../src/units/cpp/core/check.logic.js').Level} */
let deviceLevel = 'c++20'
if (cuda)
  for (const level of [...LEVELS].reverse()) {
    try {
      execFileSync(join(cuda, 'bin', 'nvcc'), ['-ccbin', compilerPath, `-I${cuda}/include`, `-std=${level}`, '-x', 'cu', '-E', '-o', '/dev/null', '-'], { input: 'int main() {}\n', stdio: ['pipe', 'ignore', 'ignore'] })
      deviceLevel = level
      break
    } catch {
      continue
    }
  }

/** @typedef {{ stdout: string, stderr: string, exit: number | null, signal: string | null, finished: boolean }} Run */
/** @typedef {{ compiled: true, binary: string } | { compiled: false, error: string }} Built */

/** Every program running now, so /stop reaches them all. @type {Set<import('node:child_process').ChildProcess>} */
const running = new Set()
/** Each /stop adds one; a request started before it runs no further test. */
let stops = 0
/** Compiles under way, by hash, so two requests for the same files compile once. @type {Map<string, Promise<Built>>} */
const building = new Map()

/**
 * The compiler and its arguments for the files under the settings an item names, or the course's
 * own command when it names none.
 * @param {import('../src/units/cpp/core/check.logic.js').Settings | null} settings
 * @param {string[]} sources
 */
const commandOf = (settings, sources, main = '', all = true) => {
  // the track's test files run their first test alone unless EXERCISM_RUN_ALL_TESTS is defined
  if (main) return { program: compiler, argv: [...FLAGS, ...(all ? ['-DEXERCISM_RUN_ALL_TESTS'] : []), '-I.', '-o', 'program.part', ...sources, main] }
  if (!settings) return { program: compiler, argv: [...FLAGS, '-o', 'program.part', ...sources] }
  if (settings.device)
    return {
      program: join(cuda, 'bin', 'nvcc'),
      argv: [...deviceArgs(settings, compilerPath, deviceLevel, cuda), '--resource-usage', '-o', 'program.part', ...sources]
    }
  const compileOnly = (settings.flags ?? []).includes('-c')
  return {
    program: compiler,
    argv: [...hostArgs(settings), '-o', compileOnly ? 'program.o' : 'program.part', ...sources, ...hostLibs(settings, tools)]
  }
}

/**
 * The files compiled, from the folder kept for their hash or freshly.
 * @param {Record<string, string>} files
 * @param {import('../src/units/cpp/core/check.logic.js').Settings | null} [settings]
 * @param {string} [main] Catch2's main, compiled once, linked to a test file's build
 * @param {boolean} [all] every test of the test file, or its first alone (the example)
 * @returns {Promise<Built>}
 */
const build = (files, settings = null, main = '', all = true) => {
  const names = Object.keys(files).sort()
  const hash = createHash('sha256')
    .update(JSON.stringify([version, cudaVersion, FLAGS, settings, main, all, names.map(n => [n, files[n]])]))
    .digest('hex')
  const dir = join(ROOT, hash)
  const binary = join(dir, 'program')
  const failed = join(dir, 'error.txt')
  if (existsSync(binary)) return Promise.resolve({ compiled: true, binary })
  if (existsSync(failed)) return Promise.resolve({ compiled: false, error: readFileSync(failed, 'utf8') })
  const under = building.get(hash)
  if (under) return under
  mkdirSync(dir, { recursive: true })
  for (const n of names) writeFileSync(join(dir, n), files[n] ?? '')
  // a test file includes "test/catch.hpp", as the track lays it out
  if (main) {
    mkdirSync(join(dir, 'test'), { recursive: true })
    writeFileSync(join(dir, 'test', 'catch.hpp'), readFileSync(CATCH))
  }
  /** @type {Promise<Built>} */
  const made = new Promise(resolve => {
    const sources = names.filter(n => /\.(cpp|cc|cxx|cu)$/.test(n))
    const { program, argv } = commandOf(settings, sources, main, all)
    const child = spawn(program, argv, { cwd: dir, env: COMPILE_ENV })
    let error = ''
    child.stdout.on('data', d => (error += d))
    child.stderr.on('data', d => (error += d))
    child.on('error', e => resolve({ compiled: false, error: e.message }))
    child.on('close', code => {
      building.delete(hash)
      // Paths the compiler or linker wrote with the folder in them are cut to the file's name.
      error = error.split(`${dir}/`).join('')
      if (code === 0) {
        // nvcc's --resource-usage lines are kept for the report; a compile alone (-c) leaves an object
        writeFileSync(join(dir, 'compile.txt'), error)
        if (existsSync(join(dir, 'program.o'))) writeFileSync(join(dir, 'program.part'), '')
        renameSync(join(dir, 'program.part'), binary)
        resolve({ compiled: true, binary })
      } else {
        writeFileSync(failed, error)
        resolve({ compiled: false, error })
      }
    })
  })
  building.set(hash, made)
  return made
}

/**
 * A run ended with every process it started: a program runs in its own process group, so "Stop"
 * reaches what compute-sanitizer launched too.
 * @param {import('node:child_process').ChildProcess} child
 */
const killed = child => {
  try {
    process.kill(-(child.pid ?? 0), 'SIGKILL')
  } catch {
    child.kill('SIGKILL')
  }
}

/**
 * One run of the program with `input` on stdin, under compute-sanitizer when a tool is named.
 * @param {string} binary
 * @param {string} input
 * @param {import('../src/units/cpp/core/check.logic.js').Settings | null} [settings]
 * @returns {Promise<Run>}
 */
const runOnce = (binary, input, settings = null, args = /** @type {string[]} */ ([])) =>
  new Promise(resolve => {
    const tool = settings?.tool
    const env = settings?.sanitize ? { LANG: 'C', ...SANITIZER_ENV } : { LANG: 'C' }
    const child = tool
      ? spawn(join(cuda, 'compute-sanitizer', 'compute-sanitizer'), ['--tool', tool, ...(tool === 'memcheck' ? ['--leak-check', 'full'] : []), binary], { env: { ...env, LD_LIBRARY_PATH: '/run/opengl-driver/lib' }, cwd: tmpdir(), detached: true })
      : spawn(binary, args, { env: settings?.device ? { ...env, LD_LIBRARY_PATH: '/run/opengl-driver/lib' } : env, cwd: tmpdir(), detached: true })
    running.add(child)
    /** @type {Buffer[]} */
    const out = []
    /** @type {Buffer[]} */
    const err = []
    let size = 0
    let over = false
    /** @param {Buffer[]} into */
    const take = into => (/** @type {Buffer} */ d) => {
      size += d.length
      if (size > CAP) {
        over = true
        killed(child)
        return
      }
      into.push(d)
    }
    child.stdout.on('data', take(out))
    child.stderr.on('data', take(err))
    // A program that ends before reading all its input closes the pipe; that is no fault.
    child.stdin.on('error', () => {})
    child.stdin.end(input)
    child.on('close', (code, signal) => {
      running.delete(child)
      resolve({
        stdout: Buffer.concat(out).toString('utf8'),
        stderr: Buffer.concat(err).toString('utf8'),
        exit: code,
        signal,
        finished: !over && signal !== 'SIGKILL'
      })
    })
  })

/**
 * What gdb prints for a name after a line of main.cpp runs, the program reading `input`.
 * @param {string} binary
 * @param {string} input
 * @param {number} line
 * @param {string} name
 * @returns {Promise<Run>}
 */
const gdbRead = (binary, input, line, name) =>
  new Promise(resolve => {
    const dir = join(binary, '..')
    writeFileSync(join(dir, 'input.txt'), input)
    const child = spawn(gdbProgram, ['-batch', '-nx', '-ex', `break main.cpp:${line}`, '-ex', 'run < input.txt', '-ex', 'next', '-ex', `print ${name}`, binary], { cwd: dir, env: { LANG: 'C' } })
    running.add(child)
    let out = ''
    let err = ''
    child.stdout.on('data', d => (out += d))
    child.stderr.on('data', d => (err += d))
    child.on('error', e => (err += e.message))
    child.on('close', code => {
      running.delete(child)
      const printed = out.split('\n').filter(l => /^\$\d+ = /.test(l)).map(l => l.replace(/^\$\d+ = /, ''))
      resolve({ stdout: printed.length ? `${printed.join('\n')}\n` : '', stderr: err, exit: code, signal: null, finished: true })
    })
  })

/** @type {Run} */
const NOT_RUN = { stdout: '', stderr: '', exit: null, signal: null, finished: false }

/**
 * The reports asked of a built program: the symbols `nm` lists, the machine code `cuobjdump`
 * lists, and the registers and spills nvcc printed.
 * @param {string} binary
 * @param {readonly string[]} asked
 */
const reportsOf = (binary, asked) => {
  /** @type {Record<string, string>} */
  const out = {}
  const dir = join(binary, '..')
  const object = existsSync(join(dir, 'program.o')) ? join(dir, 'program.o') : binary
  /** @param {string} program @param {string[]} argv @param {Record<string, string>} [env] */
  const text = (program, argv, env = {}) => {
    try {
      return execFileSync(program, argv, { encoding: 'utf8', env: { ...COMPILE_ENV, ...env }, maxBuffer: 16 * CAP })
    } catch (e) {
      return String(/** @type {{ stdout?: string }} */ (e).stdout ?? '')
    }
  }
  for (const a of asked) {
    if (a === 'nm') out.nm = text('nm', ['-C', object])
    if (a === 'sass' && cuda) out.sass = text(join(cuda, 'bin', 'cuobjdump'), ['-sass', binary], { PATH: join(cuda, 'bin') })
    if (a === 'resource-usage') out['resource-usage'] = readFileSync(join(dir, 'compile.txt'), 'utf8')
  }
  return out
}

/**
 * The settings an ask names, or null for the course's own command; a setting the list does not
 * allow is named.
 * @param {Record<string, unknown>} ask
 * @returns {{ settings: import('../src/units/cpp/core/check.logic.js').Settings | null } | { refused: string }}
 */
const settingsOf = ask => {
  const { std, sanitize, device, tool, flags, gdb } = ask
  if (std === undefined && sanitize === undefined && device === undefined && tool === undefined && flags === undefined && gdb === undefined)
    return { settings: null }
  if (std !== undefined && !LEVELS.includes(/** @type {never} */ (std))) return { refused: `std is one of ${LEVELS.join(', ')}.` }
  if (sanitize !== undefined && sanitize !== 'address' && sanitize !== 'thread') return { refused: 'sanitize is "address" or "thread".' }
  if (tool !== undefined && !TOOLS.includes(/** @type {never} */ (tool))) return { refused: `tool is one of ${TOOLS.join(', ')}.` }
  if (flags !== undefined && (!Array.isArray(flags) || flags.some(f => typeof f !== 'string'))) return { refused: 'flags is a list of text.' }
  const bad = badFlag(/** @type {string[] | undefined} */ (flags))
  if (bad) return { refused: `The flag ${bad} is not one an item may add.` }
  if ((device || tool) && !cuda) return { refused: 'The runner was started without a CUDA toolkit; start it again with --cuda <folder>.' }
  return {
    settings: /** @type {import('../src/units/cpp/core/check.logic.js').Settings} */ (/** @type {unknown} */ ({
      ...(std ? { std } : {}),
      ...(sanitize ? { sanitize } : {}),
      ...(device || tool ? { device: true } : {}),
      ...(tool ? { tool } : {}),
      ...(flags ? { flags } : {}),
      ...(gdb ? { debug: true } : {})
    }))
  }
}

/**
 * @typedef {object} RunAsk What the page sends to /run.
 * @property {Record<string, string>} files
 * @property {{ input: string }[]} tests
 * @property {'program' | 'catch2'} kind
 */

/**
 * The answer to /run, or the reason the ask is refused.
 * @param {unknown} ask
 */
const answer = async ask => {
  if (typeof ask !== 'object' || ask === null) return { status: 400, value: { error: 'The body is not an object.' } }
  const { files, tests, kind } = /** @type {Partial<RunAsk>} */ (ask)
  if (kind === 'catch2') return catch2(files, /** @type {{ examples?: unknown }} */ (ask).examples !== true)
  if (kind !== 'program') return { status: 400, value: { error: 'kind is "program" or "catch2".' } }
  if (typeof files !== 'object' || files === null || (typeof files['main.cpp'] !== 'string' && typeof files['main.cu'] !== 'string'))
    return { status: 400, value: { error: 'files holds main.cpp or main.cu as text.' } }
  for (const [name, text] of Object.entries(files))
    if (!/^[A-Za-z0-9_][A-Za-z0-9_.-]*$/.test(name) || typeof text !== 'string')
      return { status: 400, value: { error: `The file name ${JSON.stringify(name)} is not a bare file name with text.` } }
  if (!Array.isArray(tests) || tests.some(t => typeof t?.input !== 'string'))
    return { status: 400, value: { error: 'tests is a list of { input } with text inputs.' } }
  const set = settingsOf(/** @type {Record<string, unknown>} */ (/** @type {unknown} */ (ask)))
  if ('refused' in set) return { status: 400, value: { error: set.refused } }
  const report = /** @type {{ report?: unknown }} */ (ask).report
  const reports = Array.isArray(report) ? report.filter(r => typeof r === 'string') : []
  const asked = stops
  const built = await build(files, set.settings)
  if (!built.compiled) return { status: 200, value: built }
  /** @type {Run[]} */
  const runs = []
  // a compile alone (-c) runs nothing: its object is read by its report
  const runnable = !(set.settings?.flags ?? []).includes('-c')
  const gdb = /** @type {{ gdb?: { line?: unknown, name?: unknown } }} */ (ask).gdb
  if (gdb && Number.isInteger(gdb.line) && typeof gdb.name === 'string' && /^\w+$/.test(gdb.name))
    return { status: 200, value: { compiled: true, runs: [await gdbRead(built.binary, tests[0]?.input ?? '', Number(gdb.line), gdb.name)], reports: {} } }
  for (const t of tests) runs.push(stops === asked && runnable ? await runOnce(built.binary, t.input, set.settings) : NOT_RUN)
  return { status: 200, value: { compiled: true, runs, ...(reports.length ? { reports: reportsOf(built.binary, reports) } : {}) } }
}

/** Catch2's main, compiled once per compiler into an object every test build links. @type {Promise<string> | null} */
let catchMain = null
const mainObject = () =>
  (catchMain ??= new Promise((resolve, reject) => {
    const dir = join(ROOT, `catch2-${createHash('sha256').update(version).digest('hex').slice(0, 16)}`)
    const object = join(dir, 'main.o')
    if (existsSync(object)) return resolve(object)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'main.cpp'), `#define CATCH_CONFIG_MAIN\n#include "${CATCH}"\n`)
    const child = spawn(compiler, [...FLAGS, '-c', '-o', 'main.part', 'main.cpp'], { cwd: dir, env: COMPILE_ENV })
    child.on('close', code => (code === 0 ? (renameSync(join(dir, 'main.part'), object), resolve(object)) : reject(new Error('Catch2 does not compile with this compiler.'))))
  }))

/**
 * A function problem: its files (the solution's .h and .cpp and the track's *_test.cpp) built with
 * Catch2's main and run once; runs[0].stdout is Catch2's XML report, every assertion with what it
 * expanded to, which the page reads as Call, Expected and Given.
 * `examples: true` builds the test file's first test alone, the example "Run on the examples" shows.
 * @param {unknown} files
 * @param {boolean} all
 */
const catch2 = async (files, all) => {
  if (typeof files !== 'object' || files === null || !Object.keys(files).some(n => n.endsWith('_test.cpp')))
    return { status: 400, value: { error: 'files holds the track\'s *_test.cpp and the solution\'s files as text.' } }
  for (const [name, text] of Object.entries(files))
    if (!/^[A-Za-z0-9_][A-Za-z0-9_.-]*$/.test(name) || typeof text !== 'string')
      return { status: 400, value: { error: `The file name ${JSON.stringify(name)} is not a bare file name with text.` } }
  let main = ''
  try {
    main = await mainObject()
  } catch (e) {
    catchMain = null
    return { status: 200, value: { compiled: false, error: e instanceof Error ? e.message : String(e) } }
  }
  const built = await build(/** @type {Record<string, string>} */ (files), null, main, all)
  if (!built.compiled) return { status: 200, value: built }
  // the example alone reports its passed assertions too (-s), so "Run on the examples" shows what
  // each call gave; a check of every test reports its failures alone
  return { status: 200, value: { compiled: true, runs: [await runOnce(built.binary, '', null, all ? ['-r', 'xml'] : ['-r', 'xml', '-s'])] } }
}

/**
 * @param {import('node:http').IncomingMessage} req
 * @returns {Promise<string | null>} the body, or null when it is larger than 16 MB
 */
const body = req =>
  new Promise(resolve => {
    let text = ''
    req.on('data', d => {
      text += d
      if (text.length > 16 * CAP) {
        resolve(null)
        req.destroy()
      }
    })
    req.on('end', () => resolve(text))
  })

/** @type {Set<string>} */
const refused = new Set()
/**
 * @param {import('node:http').IncomingMessage} req
 * @param {import('node:http').ServerResponse} res
 */
const serve = async (req, res) => {
  const origin = req.headers.origin
  // A call from a page that is not Eruko's is refused; a call with no origin comes from this
  // computer itself. Each refused address is named once, with the way to allow it.
  if (origin && !origins.has(origin)) {
    if (!refused.has(origin)) {
      refused.add(origin)
      console.error(`The runner refused a call from ${origin}. To allow it, stop the runner and start it again with --origin ${origin}`)
    }
    res.writeHead(403).end()
    return
  }
  const head = {
    'Content-Type': 'application/json',
    ...(origin ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin', 'Access-Control-Allow-Private-Network': 'true' } : {})
  }
  /**
   * @param {number} status
   * @param {unknown} value
   */
  const send = (status, value) => res.writeHead(status, head).end(JSON.stringify(value))
  if (req.method === 'OPTIONS')
    return res.writeHead(204, { ...head, 'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Headers': 'Content-Type' }).end()
  // The compiler by its program's name, wherever it is installed, so the same GCC reads the same.
  if (req.method === 'GET' && req.url === '/') return send(200, { ok: true, compiler: basename(compiler), version, standard: 'c++23', cuda: cudaVersion, device: deviceLevel, gdb: gdbVersion })
  if (req.method === 'POST' && req.url === '/stop') {
    stops += 1
    for (const child of running) killed(child)
    return send(200, { ok: true })
  }
  if (req.method === 'POST' && req.url === '/run') {
    const text = await body(req)
    if (text === null) return send(413, { error: 'The body is larger than 16 MB.' })
    /** @type {unknown} */
    let ask
    try {
      ask = JSON.parse(text)
    } catch {
      return send(400, { error: 'The body is not JSON.' })
    }
    const { status, value } = await answer(ask)
    return send(status, value)
  }
  send(404, { error: 'No such address.' })
}

const server = createServer((req, res) => void serve(req, res))
server.on('error', (/** @type {NodeJS.ErrnoException} */ e) =>
  quit(
    e.code === 'EADDRINUSE'
      ? `Something already answers at http://127.0.0.1:${port}. If it is the runner, leave it running.`
      : `The runner cannot answer at http://127.0.0.1:${port}: ${e.message}`
  )
)
server.listen(port, '127.0.0.1', () => {
  const at = server.address()
  console.log(`The runner answers at http://127.0.0.1:${typeof at === 'object' && at ? at.port : port}`)
})
const stop = () => {
  for (const child of running) killed(child)
  server.close()
  process.exit(0)
}
process.on('SIGINT', stop)
process.on('SIGTERM', stop)
