import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CHECKS, DEVICE_CHECK, pinOf } from './track-setup.logic.js'

/** @param {string} stdout */
const ran = stdout => ({
  compiled: /** @type {const} */ (true),
  runs: [{ stdout, stderr: '', exit: 0, signal: null, finished: true }]
})
const refused = { compiled: /** @type {const} */ (false), error: 'main.cpp:1:1: error: x' }

test("Setup runs a fixed program for every form the paper lists, the device's before the pin", () => {
  const names = CHECKS.map(c => c.name)
  for (const lv of ['c++11', 'c++14', 'c++17', 'c++20', 'c++23'])
    assert.ok(names.includes(`g++ at -std=${lv}`))
  for (const tool of ['memcheck', 'initcheck', 'racecheck'])
    assert.ok(names.includes(`compute-sanitizer --tool ${tool}`))
  assert.ok(
    names.some(n => n.startsWith('gdb')) &&
      names.some(n => n.includes('TBB')) &&
      names.some(n => n.includes('same bits'))
  )
  assert.equal(CHECKS[DEVICE_CHECK]?.name, "The device's memory and attributes")
})

test('a level is right when it accepts its own program and rejects the next level’s', () => {
  const c17 = CHECKS.find(c => c.name === 'g++ at -std=c++17')
  assert.ok(c17)
  assert.equal(c17.ok([ran(''), refused]), true)
  assert.equal(c17.ok([ran(''), ran('')]), false)
  assert.equal(c17.ok([refused, refused]), false)
})

test('a device tool is right when it is loud on its wrong kernel and silent on its clean one', () => {
  const race = CHECKS.find(c => c.name === 'compute-sanitizer --tool racecheck')
  assert.ok(race)
  const loud = ran(
    '========= Error: Race reported between Write access at k()+0x50 in main.cu:4\n========= RACECHECK SUMMARY: 1 hazard displayed (1 error, 0 warnings)\n'
  )
  const quiet = ran('========= RACECHECK SUMMARY: 0 hazards displayed (0 errors, 0 warnings)\n')
  assert.equal(race.ok([loud, quiet]), true)
  assert.equal(race.ok([quiet, quiet]), false)
})

test('the same fixed kernel twice must give the same bits', () => {
  const det = CHECKS.find(c => c.name.includes('same bits'))
  assert.ok(det)
  assert.equal(det.ok([ran('40c3faa2\n'), ran('40c3faa2\n')]), true)
  assert.equal(det.ok([ran('40c3faa2\n'), ran('40c3faa3\n')]), false)
})

test('the pin: the versions, the driver, the device and its memory; none without g++ 16', () => {
  const about = {
    compiler: 'g++',
    version: 'g++ (GCC) 16.2.0',
    standard: 'c++23',
    cuda: 'Cuda 13.4',
    gdb: 'GNU gdb 17.2',
    device: 'c++23'
  }
  const out = 'name=RTX 4050\ncc=8.9\nmemory=6053232640\ndriver=13020\n'
  assert.deepEqual(pinOf(about, out), {
    gcc: 'g++ (GCC) 16.2.0',
    nvcc: 'Cuda 13.4',
    gdb: 'GNU gdb 17.2',
    level: 'c++23',
    driver: '13020',
    device: 'RTX 4050',
    cc: '8.9',
    memory: 6053232640
  })
  assert.equal(pinOf({ ...about, version: 'g++ (GCC) 15.3.0' }, out), null)
})
