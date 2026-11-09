// The C++ unit's decoders (src/units/cpp/core/decode.logic.js): the record as stored, the runner's
// replies, the pasted AtCoder record and the fields typed.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  NOT_RECORD,
  contestRows,
  formText,
  zoneDay,
  parsonsForm,
  traceForm,
  courseFrom,
  decodeRecord,
  isTrace,
  itemId,
  kindContentOf,
  readNext,
  readSeries,
  readAccountName,
  readZone,
  runnerAbout,
  runnerResult
} from './decode.logic.js'
import { studyDay } from '../../../kernel/days.logic.js'

const course = courseFrom(
  [{ title: 'Whole programs', first: 1, last: 2 }],
  [
    { id: 1, name: 'a', after: [], plan: [], problems: ['1.01', '1.02'], trace: 'T1' },
    { id: 2, name: 'b', after: [1], plan: [], problems: ['2.01'], trace: 'T2' }
  ]
)

test('ids: a trace item by its T, a problem otherwise; a kind content module read as it is, its filled trace or none', () => {
  assert.equal(isTrace(itemId('T7')), true)
  assert.equal(isTrace(itemId('7.03')), false)
  const KIND = { id: 1 }
  assert.deepEqual(
    kindContentOf({ KIND }),
    { start: null, traces: [], id: 1 },
    'a kind with no filled trace and no returning trace'
  )
  const start = { id: 'S1', lines: [], columns: [], input: '', rows: [] }
  assert.deepEqual(kindContentOf({ KIND: { ...KIND, start } }).start, start)
})

test('an empty or odd record reads as a fresh one, the first kind at its filled trace', () => {
  const fresh = decodeRecord({}, course)
  assert.deepEqual(fresh, {
    runtime: null,
    server: null,
    course: [
      { kind: 1, opened: '', retired: '', part: 'start' },
      { kind: 2, opened: '', retired: '', part: 'example' }
    ],
    recall: {},
    tries: [],
    runs: [],
    contests: [],
    practice: '',
    readings: [],
    position: { open: null, pasted: '', shown: 1 },
    sessions: [],
    turn: null,
    track: [],
    trackTries: [],
    trackTurn: null,
    trackReading: { round: 0, task: 0, at: 0, wrong: [], done: '', reopened: [] },
    side: null,
    pin: null
  })
  for (const odd of [null, undefined, 3, 'x', []])
    assert.deepEqual(decodeRecord(odd, course), fresh)
})

test('a stored record keeps what the course holds and leaves out what it does not', () => {
  const lines = [{ date: '2026-10-01', right: true, next: '2026-10-02' }]
  const r = decodeRecord(
    {
      runtime: { language: 'C++23', name: 'g++', version: '16.1' },
      server: { user: 'learner', series: 'abc' },
      course: [
        { kind: 1, opened: '2026-10-01', retired: '', part: 'alone' },
        { kind: 2, part: 'nonsense' },
        'x'
      ],
      recall: { 1.01: [...lines, 'x'], 9.01: lines, T2: 'x' },
      tries: [{ id: '1.01' }, { id: '9.01' }, 3],
      runs: [{ id: '2.01' }, { id: 'T9' }],
      contests: [{ contest: 'ABC 400', performance: 700 }, { contest: 'ABC 401' }],
      readings: [{ date: '2026-10-01' }, 'x'],
      sessions: ['2026-10-01', 4],
      turn: 4
    },
    course
  )
  assert.deepEqual(r.runtime, { language: 'C++23', name: 'g++', version: '16.1', refused: [] })
  assert.deepEqual(r.server, {
    name: '',
    user: 'learner',
    series: 'abc',
    language: '',
    zone: '',
    next: '',
    from: ''
  })
  assert.deepEqual(r.course, [
    { kind: 1, opened: '2026-10-01', retired: '', part: 'alone' },
    { kind: 2, opened: '', retired: '', part: 'example' }
  ])
  assert.deepEqual(r.recall, { 1.01: lines })
  assert.deepEqual(r.tries, [{ id: '1.01' }])
  assert.deepEqual(r.runs, [{ id: '2.01' }])
  assert.deepEqual(r.contests, [{ contest: 'ABC 400', performance: 700 }])
  assert.deepEqual(r.readings, [{ date: '2026-10-01' }])
  assert.deepEqual(r.sessions, ['2026-10-01'])
  assert.equal(r.turn, 4)
  assert.equal(decodeRecord({ turn: 6 }, course).turn, null)
  assert.equal(
    decodeRecord({ runtime: { name: 'g++' }, server: { user: 'x' } }, course).runtime,
    null
  )
})

test("a retired kind is dated: its line kept; a record from before kinds were dated gets one, right, the day it retired, its problems' lines kept", () => {
  const k1 = [{ date: '2026-10-03', right: false, next: '2026-10-04' }]
  const old = {
    course: [
      { kind: 1, opened: '2026-10-01', retired: '2026-10-01', part: 'alone' },
      { kind: 2, opened: '2026-10-01', retired: '2026-10-02', part: 'alone' }
    ],
    recall: {
      1.02: [{ date: '2026-10-01', right: true, next: '2026-10-09' }],
      2.01: [{ date: '2026-10-02', right: false, next: '2026-10-03' }]
    }
  }
  const r = decodeRecord(old, course)
  // kind 1 comes back when its problem dated right would have; kind 2 the day after it retired
  assert.deepEqual(r.recall.K1, [{ date: '2026-10-01', right: true, next: '2026-10-09' }])
  assert.deepEqual(r.recall.K2, [{ date: '2026-10-02', right: true, next: '2026-10-03' }])
  assert.deepEqual(r.recall['2.01'], old.recall['2.01'])
  assert.deepEqual(decodeRecord({ ...old, recall: { K1: k1 } }, course).recall.K1, k1)
  assert.deepEqual(decodeRecord({ recall: { K1: k1, K9: k1 } }, course).recall, { K1: k1 })
})

test('the item left open is reopened as it stood, its run and its last run kept; one the course no longer holds is not', () => {
  /** @param {unknown} open */
  const reopen = open => decodeRecord({ position: { open, pasted: '2026-10-06' } }, course).position
  const asked = { n: 4, step: 'mixed', id: '1.02', kind: 1 }
  assert.deepEqual(
    reopen({ ...asked, code: 'x', running: 'submit', ran: { compiled: true, runs: [] } }),
    {
      open: { ...asked, code: 'x', running: 'submit', ran: { compiled: true, runs: [] } },
      pasted: '2026-10-06',
      shown: 1
    }
  )
  assert.deepEqual(reopen({ ...asked, code: 'x', running: 'x', ran: { compiled: 3 } }).open, {
    ...asked,
    code: 'x',
    running: null,
    ran: null
  })
  assert.deepEqual(reopen({ ...asked, code: 'x', right: false }).open, {
    verdict: null,
    ...asked,
    code: 'x',
    right: false
  })
  assert.deepEqual(reopen({ n: 1, step: 'reading' }).open, { n: 1, step: 'reading' })
  assert.equal(reopen({ ...asked, id: '9.01', code: '' }).open, null)
  assert.equal(reopen({ ...asked, step: 'game', code: '' }).open, null)
  assert.equal(reopen({ ...asked }).open, null, 'an item with no program typed')
  assert.equal(reopen('x').open, null)
})

test("the runner's word of itself, and its reply to a program", () => {
  assert.deepEqual(
    runnerAbout({ ok: true, compiler: 'g++', version: 'g++ 16.1', standard: 'c++23' }),
    {
      ok: true,
      value: {
        compiler: 'g++',
        version: 'g++ 16.1',
        standard: 'c++23',
        cuda: '',
        gdb: '',
        device: ''
      }
    }
  )
  for (const no of [null, { ok: false, version: 'x' }, { ok: true }])
    assert.deepEqual(runnerAbout(no), { ok: false, error: 'unanswered' })
  const run = { stdout: '5\n', stderr: '', exit: 0, signal: null, finished: true }
  assert.deepEqual(
    runnerResult({ compiled: true, runs: [run, { stdout: '', signal: 'SIGKILL' }] }),
    {
      ok: true,
      value: {
        compiled: true,
        runs: [run, { stdout: '', stderr: '', exit: null, signal: 'SIGKILL', finished: false }]
      }
    }
  )
  assert.deepEqual(runnerResult({ compiled: false, error: 'main.cpp:3:5: error: x' }), {
    ok: true,
    value: { compiled: false, error: 'main.cpp:3:5: error: x' }
  })
  for (const no of [
    'x',
    { compiled: true },
    { compiled: 'yes', runs: [] },
    { compiled: true, runs: [{ stdout: 3 }] }
  ])
    assert.deepEqual(runnerResult(no), { ok: false, error: 'unanswered' })
})

test('the pasted record: the rated rows of the stored series, each its name, its day and its inner performance', () => {
  const row = {
    IsRated: true,
    Place: 1200,
    OldRating: 600,
    NewRating: 640,
    Performance: 712,
    InnerPerformance: 712,
    ContestScreenName: 'abc400.contest.atcoder.jp',
    ContestName: 'AtCoder Beginner Contest 400',
    EndTime: '2026-04-05T22:40:00+09:00'
  }
  const rows = [
    row,
    { ...row, IsRated: false, ContestName: 'AtCoder Beginner Contest 401' },
    {
      ...row,
      ContestScreenName: 'arc190.contest.atcoder.jp',
      ContestName: 'AtCoder Regular Contest 190'
    }
  ]
  assert.deepEqual(contestRows(JSON.stringify(rows), 'abc', 'Asia/Tokyo'), {
    ok: true,
    value: [
      {
        contest: 'AtCoder Beginner Contest 400',
        date: '2026-04-05',
        performance: 712
      }
    ]
  })
  assert.deepEqual(contestRows('[]', 'abc', 'UTC'), { ok: true, value: [] })
  const refused = { ok: false, error: NOT_RECORD }
  assert.equal(NOT_RECORD, 'That is not an AtCoder contest record.')
  for (const text of [
    '',
    'not json',
    '{"a":1}',
    '[3]',
    JSON.stringify([{ ...row, IsRated: 'yes' }])
  ])
    assert.deepEqual(contestRows(text, 'abc', 'UTC'), refused, text)
  for (const odd of [{ ContestName: 3 }, { EndTime: 'never' }, { InnerPerformance: undefined }])
    assert.deepEqual(contestRows(JSON.stringify([{ ...row, ...odd }]), 'abc', 'UTC'), refused)
})

test('the fields typed: a user name, a series prefix, a time zone, a contest date and start time', () => {
  assert.deepEqual(readAccountName(' learner_1 '), { ok: true, value: 'learner_1' })
  for (const no of ['', 'ab', 'a b c', 'x'.repeat(17)])
    assert.deepEqual(readAccountName(no), {
      ok: false,
      error: 'Type the user name of your AtCoder account.'
    })
  assert.deepEqual(readSeries(' ABC '), { ok: true, value: 'abc' })
  for (const no of ['', 'abc400', 'a-b']) assert.equal(readSeries(no).ok, false)
  assert.deepEqual(readZone(' Europe/Copenhagen '), { ok: true, value: 'Europe/Copenhagen' })
  assert.deepEqual(readZone('UTC'), { ok: true, value: 'UTC' })
  for (const no of ['', 'Mars/Olympus'])
    assert.deepEqual(readZone(no), {
      ok: false,
      error: 'Type a time zone such as Europe/Copenhagen.'
    })
  assert.deepEqual(readNext('2026-11-07', '13:00'), { ok: true, value: '2026-11-07T13:00' })
  for (const no of ['', '2026-02-30', '7 Nov'])
    assert.deepEqual(readNext(no, '13:00'), { ok: false, error: 'Type the date of the contest.' })
  for (const no of ['', '24:00', '1300', '13:60'])
    assert.deepEqual(readNext('2026-11-07', no), {
      ok: false,
      error: 'Type the start time of the contest.'
    })
})

test('what is typed on a trace item or a Parsons problem is kept as text and read back; odd text reads as nothing typed', () => {
  const trace = { cells: [['6', '3', '']], output: '30\n' }
  assert.deepEqual(traceForm(formText(trace)), trace)
  const parsons = { order: [5, 7], fills: ['0', 'first'] }
  assert.deepEqual(parsonsForm(formText(parsons)), parsons)
  for (const odd of ['', 'int main() {}', '3', '[1]']) {
    assert.deepEqual(traceForm(odd), { cells: [], output: '' })
    assert.deepEqual(parsonsForm(odd), { order: [], fills: [] })
  }
  assert.deepEqual(traceForm('{"cells":[["1",2]],"output":4}'), { cells: [['1', '']], output: '' })
  assert.deepEqual(parsonsForm('{"order":[1,"x",2.5],"fills":"x"}'), { order: [1], fills: [] })
  const r = decodeRecord({ runtime: { name: 'g++', version: '16', refused: ['1.02', 3] } }, course)
  assert.deepEqual(r.runtime?.refused, ['1.02'])
})

test("a study day in the stored time zone, turning at 04:00 there; an unknown zone reads as the device's", () => {
  const ms = Date.parse('2026-11-07T20:30:00Z')
  assert.equal(zoneDay(ms, 'Asia/Tokyo'), '2026-11-08')
  assert.equal(zoneDay(ms, 'America/New_York'), '2026-11-07')
  assert.equal(
    zoneDay(Date.parse('2026-11-07T18:30:00Z'), 'Asia/Tokyo'),
    '2026-11-07',
    'before 04:00 there'
  )
  assert.equal(zoneDay(ms, 'Nowhere/None'), studyDay(ms))
})
