// The relay and the way to the engine ("A Self-Study System", The build, Go, The engine and the
// server): one line of JSON a query, passed to and from one local address, for Eruko's own
// address alone. A stand-in engine answers in KataGo's form.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { request } from 'node:http'
import { RELAY_DOWN, SERVES, aboutEngine, askEngine, visitsASecond } from '../src/units/go/core/engine.dom.js'
import { ENGINE } from '../src/units/go/core/record.logic.js'

const port = 18000 + (process.pid % 2000)
const address = `http://127.0.0.1:${port}`
// The stand-in engine reads only these fields, so the queries below carry no rules, komi or board size.
const query = (/** @type {object} */ q) => /** @type {import('../src/units/go/core/review.logic.js').Query} */ (q)

test('the relay passes a query to the engine and its answer back, and refuses another page', async t => {
  const relay = spawn(process.execPath, ['scripts/go-relay.mjs', '--port', String(port)], {
    env: { ...process.env, GO_RELAY_ENGINE: JSON.stringify([process.execPath, 'scripts/go-stand-in-engine.mjs']) },
    stdio: ['ignore', 'pipe', 'inherit']
  })
  t.after(() => relay.kill())
  await new Promise(resolve => relay.stdout.once('data', resolve))

  assert.deepEqual(await aboutEngine(address), { ok: true, value: { network: '', checksum: '' } })
  const answer = await askEngine(address, query({ id: 'a', moves: [['B', 'D4']], maxVisits: 500, analyzeTurns: [1] }))
  assert.ok(answer.ok)
  assert.equal(answer.value.scoreLead, -1)
  assert.equal(answer.value.moveInfos.find(m => m.order === 0)?.move, 'D4')
  // two queries at once come back each to its own asker
  const [x, y] = await Promise.all([
    askEngine(address, query({ id: 'x', moves: [], maxVisits: 500, analyzeTurns: [0] })),
    askEngine(address, query({ id: 'y', moves: [['B', 'D4'], ['W', 'Q16']], maxVisits: 500, analyzeTurns: [2] }))
  ])
  assert.deepEqual([x.ok && x.value.scoreLead, y.ok && y.value.scoreLead], [-2, 0])
  const speed = await visitsASecond({ ...ENGINE, address })
  assert.ok(speed.ok && speed.value > SERVES)
  // the same query asked twice at once is answered to both askers
  const twice = query({ id: 'same', moves: [], maxVisits: 500, analyzeTurns: [0] })
  const [p, q] = await Promise.all([askEngine(address, twice), askEngine(address, twice)])
  assert.deepEqual([p.ok, q.ok], [true, true])

  const from = /** @param {string} origin */ origin =>
    new Promise(resolve => {
      request(`${address}/about`, { headers: { Origin: origin } }, res => resolve([res.statusCode, res.headers['access-control-allow-origin']])).end()
    })
  assert.deepEqual(await from('http://127.0.0.1:9999'), [200, 'http://127.0.0.1:9999'])
  assert.deepEqual(await from('https://example.org'), [403, undefined])
})

test('with no engine answering, the call says so', async () => {
  assert.deepEqual(await askEngine('http://127.0.0.1:9', query({ id: 'q' })), { ok: false, error: 'down' })
  assert.deepEqual(await visitsASecond({ ...ENGINE, address: 'http://127.0.0.1:9' }), { ok: false, error: 'down' })
})

test('with no relay running, the check says where the Start page shows how to start it', async () => {
  assert.deepEqual(await aboutEngine('http://127.0.0.1:9'), { ok: false, error: 'down' })
  assert.match(RELAY_DOWN, /The engine did not answer\. Start it as step 4/)
})

test('the relay stops with its engine and says so, names a file that is not there, and says to name the three files when none are kept', async () => {
  const run = /** @param {string[]} args @param {Record<string, string>} env */ (args, env) =>
    new Promise(resolve => {
      const relay = spawn(process.execPath, ['scripts/go-relay.mjs', '--port', String(port + 1), ...args], {
        env: { ...process.env, XDG_CONFIG_HOME: '/nonexistent', ...env },
        stdio: ['ignore', 'ignore', 'pipe']
      })
      let said = ''
      relay.stderr.on('data', d => (said += d))
      relay.on('exit', code => resolve([code, said]))
    })
  const [code, said] = await run([], { GO_RELAY_ENGINE: JSON.stringify([process.execPath, '-e', 'process.exit(3)']) })
  assert.equal(code, 1)
  assert.match(said, /The engine stopped: exit code 3/)
  const [none, why] = await run(['--katago', '/not/there', '--model', '/nor/this', '--config', '/nor/that'], { GO_RELAY_ENGINE: '' })
  assert.equal(none, 2)
  assert.match(why, /The katago program is not there: \/not\/there/)
  const [bare, how] = await run([], { GO_RELAY_ENGINE: '' })
  assert.equal(bare, 2)
  assert.match(how, /Name the three files once/)
})
