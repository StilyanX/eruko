// Hides: the changes to the C++ record that are no study step ("A Self-Study System", Programming,
// Running it; The build, Programming, The record): what Setup stores once (the runtime and the
// server), the fixed program Setup runs to check the runner, the practice submission accepted,
// the next contest's start typed, and a change of series or method, which starts gate 2's windows
// again from the day it is typed. The record's fields are typed and decoded in decode.logic.js.
import { assert } from '../../../kernel/invariant.logic.js'
import { decodeRecord } from './decode.logic.js'

/** The language, named by the owner's ruling in place of the paper's language rule. */
export const LANGUAGE = 'C++23'

/**
 * The compiler every reference solution passed its tests under when the course was built (the
 * first line `g++ --version` printed there). A runner that reports another runs the runtime
 * change step before the first item.
 */
export const BUILT_WITH = { name: 'g++', version: 'g++ (GCC) 16.2.0' }

/** The server and the language as it names the one it rates in. */
export const SERVER = { name: 'AtCoder', language: 'C++23 (GCC 15.2.0)' }

/**
 * The fixed program Setup runs through the runner: it reads two numbers and prints their sum
 * with `std::println`, which only a C++23 compiler and library hold.
 */
export const CHECK = {
  code: [
    '#include <iostream>',
    '#include <print>',
    '',
    'int main() {',
    '    int a {0};',
    '    int b {0};',
    '    std::cin >> a >> b;',
    '    std::println("{}", a + b);',
    '}',
    ''
  ].join('\n'),
  tests: [{ input: '2 3\n', output: '5\n' }]
}

/**
 * The record as every function of the unit reads it (decode.logic.js).
 * @param {unknown} raw
 * @param {import('./decode.logic.js').Course} course
 */
export const recordOf = (raw, course) => decodeRecord(raw, course)

/**
 * @param {Pick<import('./decode.logic.js').CppRecord, 'course'>} record
 * @param {import('./decode.logic.js').KindId} id
 */
export const kindLine = (record, id) => record.course.find(c => c.kind === id)

/**
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').KindId} id
 * @param {Partial<Omit<import('./decode.logic.js').KindLine, 'kind'>>} change
 * @returns {import('./decode.logic.js').CppRecord}
 */
export const withKind = (record, id, change) => ({
  ...record,
  course: record.course.map(c => (c.kind === id ? { ...c, ...change } : c))
})

/**
 * Setup stored, once: the server with the user name, the series prefix and the time zone typed,
 * from the day typed, and the runtime the app's problems were checked in (`BUILT_WITH`). Where
 * the runner reports another compiler, the runtime change step runs before the first item. The
 * next contest's start is typed once the start gate opens.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Readonly<{ user: string, series: string, zone: string, day: string }>} typed
 * @returns {import('./decode.logic.js').CppRecord}
 */
export const setupStored = (record, { user, series, zone, day }) => ({
  ...record,
  runtime: { language: LANGUAGE, ...BUILT_WITH, refused: [] },
  server: { ...SERVER, user, series, zone, next: record.server?.next ?? '', from: day }
})

/**
 * Set-up changed once stored: the user name and the time zone typed again. The series changes
 * only through a change of series or method (`seriesTyped`), which restarts gate 2's windows;
 * the runtime, the next contest and the course stay.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Readonly<{ user: string, zone: string }>} typed
 */
export const setupChanged = (record, { user, zone }) => withServer(record, { user, zone })

/**
 * Whether the runner reports another compiler or version than the runtime stored: then every
 * reference solution is run against its tests under it before the next item.
 * @param {import('./decode.logic.js').Runtime | null} runtime
 * @param {import('./decode.logic.js').About} about
 */
export const runtimeChanged = (runtime, about) =>
  runtime !== null && (runtime.name !== about.compiler || runtime.version !== about.version)

/**
 * The runtime change step done: the runtime set to the one the runner reports, with the problems
 * whose reference solution failed its tests under it, which are not used. Dated lines stay.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {import('./decode.logic.js').About} about
 * @param {readonly import('./decode.logic.js').ProblemId[]} refused
 * @returns {import('./decode.logic.js').CppRecord}
 */
export function runtimeChecked(record, about, refused) {
  assert(record.runtime, 'A runtime changes only once one is stored')
  return {
    ...record,
    runtime: { language: LANGUAGE, name: about.compiler, version: about.version, refused }
  }
}

/**
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {Partial<import('./decode.logic.js').Server>} change
 * @returns {import('./decode.logic.js').CppRecord}
 */
function withServer(record, change) {
  assert(record.server, 'A contest is typed only once the server is stored')
  return { ...record, server: { ...record.server, ...change } }
}

/**
 * The next contest's date and start time, typed in the stored zone (decode.logic.js `readNext`).
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} next
 */
export const nextTyped = (record, next) => withServer(record, { next })

/**
 * A change of series or method: the series prefix typed again, the new one or the same one, and
 * the day typed stored as `from`, from which gate 2's windows start again.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} series
 * @param {string} day
 */
export const seriesTyped = (record, series, day) => withServer(record, { series, from: day })

/**
 * "Accepted": the practice submission the server accepted, once every first kind is retired.
 * @param {import('./decode.logic.js').CppRecord} record
 * @param {string} day
 * @returns {import('./decode.logic.js').CppRecord}
 */
export const practiceAccepted = (record, day) => ({ ...record, practice: record.practice || day })
