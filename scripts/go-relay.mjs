#!/usr/bin/env node
// The relay between Eruko's Go unit and KataGo's analysis engine, on the computer Eruko runs
// on. The engine reads one line of JSON per query and answers on its own output; a page cannot
// start a program, so this passes those lines to and from one fixed local address and lets only
// Eruko's own address call it.
//
//   npm run go-relay -- --katago <the katago program> --model <the network file>
//                        --config <analysis_example.cfg from the release>
//                        [--origin <the address Eruko is open at>]… [--port 8766]
//   npm run go-relay     after that: the three files are kept, and need not be named again
//
//   GET  /about   the network file's name and SHA-256 checksum
//   POST /query   one query as the analysis engine reads it; its answer, as the engine gives it
//
// The engine is started so that every lead it reports is Black's, and keeps its own log in the
// computer's temporary folder, not where the relay was started. When the engine stops,
// the relay says why and stops with it: a relay that answers with no engine behind it hides
// the fault.
import { spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { createReadStream, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { homedir, tmpdir } from 'node:os'
import { basename, dirname, join, resolve as pathOf } from 'node:path'
import { createInterface } from 'node:readline'

const args = process.argv.slice(2)
/**
 * Every value given after `--name`; undefined where the flag ends the line.
 * @param {string} name
 * @returns {(string | undefined)[]}
 */
const all = name => args.flatMap((a, i) => (a === `--${name}` ? [args[i + 1]] : []))
/** @param {string} name */
const one = name => all(name)[0]
const port = Number(one('port') ?? 8766)
const origins = new Set(['http://127.0.0.1:9999', 'http://localhost:9999', ...all('origin')])
/**
 * @param {string} text
 * @param {number} [code]
 * @returns {never}
 */
const quit = (text, code = 2) => {
  console.error(text)
  process.exit(code)
}

// The three files, named once and kept for this user, so that later starts name nothing.
const KEPT = join(process.env.XDG_CONFIG_HOME ?? join(homedir(), '.config'), 'eruko', 'go-relay.json')
const standIn = process.env.GO_RELAY_ENGINE
const NAMES = ['katago', 'model', 'config']
/** @type {Record<string, string | undefined>} */
let files = Object.fromEntries(
  NAMES.map(n => {
    const given = one(n)
    return [n, given && pathOf(given)]
  })
)
if (!standIn) {
  const named = NAMES.filter(n => files[n])
  if (named.length === 0 && existsSync(KEPT)) {
    try {
      // The file this relay wrote at an earlier start: the three file names.
      files = JSON.parse(readFileSync(KEPT, 'utf8'))
    } catch {
      quit(`The relay cannot read the kept file names in ${KEPT}. Name the three files again:\n  npm run go-relay -- --katago <program> --model <network file> --config <analysis config>`)
    }
  } else if (named.length < NAMES.length) {
    quit('Name the three files once, and the relay keeps them:\n  npm run go-relay -- --katago <the katago program> --model <the network file> --config <analysis_example.cfg>\nIf Eruko is open at an address other than http://127.0.0.1:9999 or http://localhost:9999, add --origin <that address>.')
  }
  /** @type {Record<string, string>} */
  const WHAT = { katago: 'The katago program', model: 'The network file', config: 'The analysis config' }
  for (const n of NAMES) if (!existsSync(files[n] ?? '')) quit(`${WHAT[n]} is not there: ${files[n]}`)
  if (named.length === NAMES.length) {
    mkdirSync(dirname(KEPT), { recursive: true })
    writeFileSync(KEPT, `${JSON.stringify(files, null, 2)}\n`)
  }
}
/**
 * A file name checked above to be given and on disk.
 * @param {string} name
 */
const fileNamed = name => {
  const file = files[name]
  if (!file) throw new Error(`the ${name} file is not named`)
  return file
}
const model = standIn ? one('model') : fileNamed('model')
// tests/go-engine.test.mjs puts a stand-in engine here (scripts/go-stand-in-engine.mjs).
/** @type {string[]} */
const command = standIn
  ? JSON.parse(standIn)
  : [fileNamed('katago'), 'analysis', '-model', model ?? '', '-config', fileNamed('config'), '-override-config', `reportAnalysisWinratesAs=BLACK,logDir=${join(tmpdir(), 'aether-go-relay')}`]

/** @type {Promise<string>} */
const checksum = model
  ? new Promise((resolve, reject) => {
      const hash = createHash('sha256')
      createReadStream(model)
        .on('data', d => hash.update(d))
        .on('end', () => resolve(hash.digest('hex')))
        .on('error', reject)
    })
  : Promise.resolve('')
checksum.catch(() => quit(`The relay cannot read the network file: ${model}`))

const [program, ...programArgs] = command
if (!program) throw new Error('the engine command is empty')
const engine = spawn(program, programArgs, { stdio: ['pipe', 'pipe', 'inherit'] })
// Each query's askers by its id: the same query asked twice is sent to the engine once.
/**
 * @typedef {object} Answer What the engine writes for a query, or the relay writes in its place.
 * @property {string} [id]
 * @property {unknown} [error]
 * @property {unknown} [warning]
 * @property {boolean} [isDuringSearch]
 * @property {boolean} [refused]
 */
/** @type {Map<string, { give: (answer: Answer) => void, timer: NodeJS.Timeout }[]>} */
const waiting = new Map()
/**
 * @param {string | undefined} id
 * @param {Answer} answer
 */
const answerTo = (id, answer) => {
  if (id === undefined) return
  for (const { give, timer } of waiting.get(id) ?? []) {
    clearTimeout(timer)
    give(answer)
  }
  waiting.delete(id)
}
let stopping = false
/** @param {string} [why] */
const gone = why => {
  if (stopping) return
  for (const id of [...waiting.keys()]) answerTo(id, { error: 'The engine stopped.' })
  quit(`The engine stopped${why ? `: ${why}` : ''}. What it wrote stands above. The relay stops with it.`, 1)
}
engine.on('exit', code => gone(code === null ? '' : `exit code ${code}`))
engine.on('error', e => gone(e.message))
// A query the engine has not answered in this long is given up, so no asker waits for ever.
const LONGEST = 30 * 60000
createInterface({ input: engine.stdout }).on('line', line => {
  // One line of the engine's own output.
  /** @type {Answer} */
  let answer
  try {
    answer = JSON.parse(line)
  } catch {
    return
  }
  // A search still running reports as it goes, and a warning comes before the answer it is
  // about; the answer kept is the finished one.
  if (answer.isDuringSearch || answer.warning) return
  if (answer.error) {
    console.error(`The engine refused a query: ${typeof answer.error === 'string' ? answer.error : JSON.stringify(answer.error)}`)
    // an error that names its query goes to its asker, marked as one asking again does not mend
    if (answer.id !== undefined) answerTo(answer.id, { ...answer, refused: true })
    return
  }
  answerTo(answer.id, answer)
})

/**
 * @param {import('node:http').IncomingMessage} req
 * @returns {Promise<string>}
 */
const body = req =>
  new Promise(resolve => {
    let text = ''
    req.on('data', d => (text += d)).on('end', () => resolve(text))
  })

/** @type {Set<string>} */
const refused = new Set()
/**
 * @param {import('node:http').IncomingMessage} req
 * @param {import('node:http').ServerResponse} res
 */
const serve = async (req, res) => {
  const origin = req.headers.origin
  // A call from a page that is not Eruko's is refused, and a call with no origin comes from
  // this computer itself. The refusal is printed once for each address, with the way to allow it.
  if (origin && !origins.has(origin)) {
    if (!refused.has(origin)) {
      refused.add(origin)
      console.error(`The relay refused a call from ${origin}. To allow it, stop the relay and start it again with --origin ${origin}`)
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
  if (req.method === 'OPTIONS') return res.writeHead(204, { ...head, 'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Headers': 'Content-Type' }).end()
  if (req.method === 'GET' && req.url === '/about') return send(200, { network: model ? basename(model) : '', checksum: await checksum })
  if (req.method === 'POST' && req.url === '/query') {
    // The page's query, in the engine's own form; the relay reads only its id.
    /** @type {{ id: string }} */
    let query
    try {
      query = JSON.parse(await body(req))
    } catch {
      return send(400, { error: 'The query is not JSON.' })
    }
    /** @type {Promise<Answer>} */
    const pending = new Promise(give => {
      const timer = setTimeout(() => answerTo(query.id, { error: 'The engine took too long.' }), LONGEST)
      const asked = waiting.get(query.id)
      if (asked) return asked.push({ give, timer })
      waiting.set(query.id, [{ give, timer }])
      engine.stdin.write(`${JSON.stringify(query)}\n`)
    })
    const answer = await pending
    return send(answer.error ? 502 : 200, answer)
  }
  send(404, { error: 'No such address.' })
}
const server = createServer((req, res) => void serve(req, res))
server.on('error', (/** @type {NodeJS.ErrnoException} */ e) =>
  quit(
    e.code === 'EADDRINUSE'
      ? `Something already answers at http://127.0.0.1:${port}. If it is the relay, leave it running.`
      : `The relay cannot answer at http://127.0.0.1:${port}: ${e.message}`,
    1
  )
)
const said = () => console.log(`The relay answers at http://127.0.0.1:${port} for ${[...origins].join(', ')}.`)
// Started by the computer's own service manager, the relay answers on the socket it is handed.
if (process.env.LISTEN_FDS === '1') server.listen({ fd: 3 }, said)
else server.listen(port, '127.0.0.1', said)
const stop = () => {
  stopping = true
  engine.kill()
  server.close()
  process.exit(0)
}
process.on('SIGINT', stop)
process.on('SIGTERM', stop)
