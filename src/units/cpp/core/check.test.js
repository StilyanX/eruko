import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  badFlag,
  deviceArgs,
  deviceReport,
  errorLines,
  hostArgs,
  hostLibs,
  hostReport
} from './check.logic.js'

test('g++ always runs with -pedantic-errors at the stated level; a sanitizer adds its own flags; TBB is linked after the sources', () => {
  assert.deepEqual(hostArgs({}), [
    '-std=c++23',
    '-pedantic-errors',
    '-pipe',
    '-fdiagnostics-color=never',
    '-O2'
  ])
  const a = hostArgs({ std: 'c++17', sanitize: 'address', flags: ['-O0', '-ltbb'] })
  assert.equal(a[0], '-std=c++17')
  assert.ok(
    a.includes('-pedantic-errors') &&
      a.includes('-fsanitize=address,undefined') &&
      a.includes('-O0')
  )
  assert.ok(!a.includes('-O2') && !a.includes('-ltbb'))
  assert.deepEqual(hostLibs({ flags: ['-ltbb'] }, ''), ['-ltbb'])
  assert.deepEqual(hostLibs({ flags: ['-ltbb'] }, '/t').at(-1), '-ltbb')
  assert.deepEqual(hostLibs({}, '/t'), [])
  assert.ok(hostArgs({ debug: true }).includes('-g'))
  assert.ok(hostArgs({ sanitize: 'thread' }).includes('-fsanitize=thread'))
  assert.equal(badFlag(['-O2', '-ffp-contract=off']), null)
  assert.equal(badFlag(['-fpermissive']), '-fpermissive', 'no flag is added to make an item pass')
})

test('nvcc takes g++ as its host compiler, the toolkit headers, the device architecture and line information', () => {
  const a = deviceArgs({ flags: ['-fmad=false'] }, '/bin/g++', 'c++20', '/cuda')
  assert.deepEqual(a.slice(0, 3), ['-ccbin', '/bin/g++', '-I/cuda/include'])
  assert.ok(
    a.includes('-std=c++20') &&
      a.includes('-arch=sm_89') &&
      a.includes('-lineinfo') &&
      a.includes('-fmad=false')
  )
})

test("a host sanitizer's report: its tool, its kind and the program's line", () => {
  assert.deepEqual(
    hostReport(
      "main.cpp:7:21: runtime error: signed integer overflow: 50000 * 50000 cannot be represented in type 'int'\n"
    ),
    { tool: 'undefined', kind: 'signed integer overflow', line: 7 }
  )
  assert.deepEqual(
    hostReport('main.cpp:4:12: runtime error: shift exponent 40 is too large for 32-bit type\n'),
    { tool: 'undefined', kind: 'shift out of range', line: 4 }
  )
  const uaf =
    '==1==ERROR: AddressSanitizer: heap-use-after-free on address 0x1\n    #0 0x1 in main main.cpp:9\nSUMMARY: AddressSanitizer: heap-use-after-free main.cpp:9 in main\n'
  assert.deepEqual(hostReport(uaf), { tool: 'address', kind: 'heap-use-after-free', line: 9 })
  const leak =
    '==1==ERROR: LeakSanitizer: detected memory leaks\n    #1 0x1 in main main.cpp:5\nSUMMARY: AddressSanitizer: 4 byte(s) leaked in 1 allocation(s).\n'
  assert.deepEqual(hostReport(leak), { tool: 'address', kind: 'leak', line: 5 })
  assert.deepEqual(
    hostReport(
      'WARNING: ThreadSanitizer: data race\nSUMMARY: ThreadSanitizer: data race main.cpp:11 in main\n'
    ),
    { tool: 'thread', kind: 'data race', line: 11 }
  )
  assert.equal(hostReport('all fine\n'), null)
})

test("compute-sanitizer's report, by its tool; silent when it counts no error", () => {
  const mem =
    '========= Invalid __global__ write of size 4 bytes\n=========     at fill(int *, int)+0x90 in main.cu:5\n========= ERROR SUMMARY: 1 error\n'
  assert.deepEqual(deviceReport(mem, 'memcheck'), {
    tool: 'memcheck',
    kind: 'Invalid __global__ write',
    line: 5
  })
  const race =
    '========= Error: Race reported between Write access at k()+0x10 in main.cu:10\n=========     and Read access at k()+0x20 in main.cu:12\n========= RACECHECK SUMMARY: 1 hazard displayed\n========= ERROR SUMMARY: 1 error\n'
  assert.deepEqual(deviceReport(race, 'racecheck'), {
    tool: 'racecheck',
    kind: 'Race reported',
    line: 10
  })
  assert.equal(deviceReport('========= ERROR SUMMARY: 0 errors\n', 'initcheck'), null)
})

test('the lines g++ or nvcc reports an error at, in the program only', () => {
  const g =
    "main.cpp:6:23:   in 'constexpr' expansion of 'f()'\nmain.cpp:3:17: error: overflow in constant expression\nmain.cpp:9:1: error: x\nmain.cpp:9:4: error: y\n/usr/include/x.h:1:1: error: z\n"
  assert.deepEqual(errorLines(g), [3, 9])
  assert.deepEqual(errorLines('main.cu(12): error: identifier "x" is undefined\n', 'main.cu'), [12])
})
