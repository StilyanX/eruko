// Hides: the Go records a learner some way into the course holds, dated from today, for the
// screens' tests (go.spec.mjs) and for screenshots of the states a first visit never reaches. Each
// is built by the unit's own functions (next.js), worked day by day, then given the games, the
// engine and the server a case needs. Run as a script, it writes each as JSON into the folder
// given:
//   node e2e/go-records.mjs /tmp/records   (then --store aether-go=/tmp/records/<name>.json)
import { mkdirSync, writeFileSync } from 'node:fs'
import { addDays, studyDay } from '../src/kernel/days.logic.js'
import { answerItem, closeItem, exampleRead, nextAction, skipGame } from '../src/units/go/core/next.logic.js'
import { courseOf } from '../src/units/go/core/own.logic.js'
import { ENGINE, SERVER, recordOf } from '../src/units/go/core/record.logic.js'
import { NO_OWN, gameId, kindId, kindKey } from '../src/units/go/core/decode.logic.js'

/** @typedef {import('../src/units/go/core/decode.logic.js').GoRecord} GoRecord */
/** @typedef {import('../src/units/go/core/decode.logic.js').Game} Game */

const today = studyDay(Date.now())
/** @param {number} n */
const ago = n => addDays(today, -n)
const course = courseOf(NO_OWN)
const fresh = () => recordOf({}, course)

/** The steps the list answers by itself here: a problem, a rules item, a worked example. */
const ANSWERED = new Set(['recall', 'rules', 'example', 'new', 'mixed'])

/**
 * Work the list on `day`: answer up to `count` items, every fourth wrong, and stop at a game or
 * a review, which the records below set by hand.
 * @param {GoRecord} r
 * @param {string} day
 * @param {number} count
 * @param {(item: import('../src/units/go/core/decode.logic.js').Item) => boolean} [until]
 */
function work(r, day, count, until = () => false) {
  for (let i = 0; i < count; i++) {
    // a learner not yet set up skips the game owed each day, so the rest comes first
    const item = nextAction(course, r.server ? r : skipGame(day)(r), day)
    if (!ANSWERED.has(item.step) || until(item)) return r
    if (item.step === 'example') r = exampleRead(course, item.kind, day)(r)
    else if ('id' in item && !('right' in item))
      r = closeItem(answerItem(course, item, i % 4 !== 3, day, i % 4 === 3 ? 'D4, lives' : '')(r))
  }
  return r
}

/** The learner's account on the server, as the fakes in go-net.mjs know it. */
export const USER = { user: 'learner', id: 1234 }

/** What set-up stores once the engine and the server are checked. */
const SET_UP = {
  engine: { ...ENGINE, checksum: 'c0ffee' },
  server: { ...SERVER, ...USER, since: ago(40) }
}

// A game's ten moves from the empty board, Black first.
const MOVES = ['Q16', 'D4', 'Q4', 'D16', 'R10', 'C10', 'O17', 'F17', 'R6', 'C6']

/**
 * A game as the record keeps it, rated, 19×19, its pass done and its review list drawn.
 * @param {number} id
 * @param {string} date
 * @param {Partial<Game>} [over]
 * @returns {Game}
 */
const game = (id, date, over = {}) => ({
  id: gameId(id),
  date,
  ranked: true,
  bot: false,
  opponent: 'rival',
  size: 19,
  square: true,
  handicap: 0,
  rules: 'aga',
  main: 1800,
  time: 'absolute',
  cancelled: false,
  passed: false,
  colour: 'black',
  result: 'won by resignation',
  first: 'black',
  placed: 0,
  initial: { black: [], white: [] },
  removed: [],
  moves: MOVES,
  pass: Array.from({ length: MOVES.length + 1 }, () => ({
    lead: 0.5,
    best: 'Q16',
    bestLead: 0.5,
    line: ['Q16', 'D4']
  })),
  reviewed: false,
  list: [
    // a line through a pass
    {
      move: 5,
      game: 'R10',
      gameLoss: 4.26,
      best: 'R14',
      line: ['R14', 'pass', 'C14', 'C15'],
      typed: '',
      typedLoss: null
    },
    { move: 9, game: 'R6', gameLoss: 2.1, best: 'R7', line: ['R7', 'C7'], typed: '', typedLoss: null }
  ],
  ...over
})

/** A practice game against the bot, ended by two passes, as the server read it. */
const practiceGame = (/** @type {number} */ id, /** @type {string} */ date) =>
  game(id, date, {
    ranked: false,
    bot: true,
    opponent: '15k-kgs-humanlike-kata',
    time: 'byoyomi',
    main: 600,
    passed: true,
    moves: [...MOVES, 'pass', 'pass'],
    reviewed: true,
    list: []
  })

/**
 * Answer every item due today, so the list's later steps come first.
 * @param {GoRecord} r
 */
const dueDone = r => work(r, today, 80, item => item.step !== 'recall')

/** Every rules item met, answered right on two days, so the start gate's rules arm is met. */
function rulesKnown() {
  let r = fresh()
  for (const part of course.parts)
    for (const id of part.items)
      r = {
        ...r,
        recall: {
          ...r.recall,
          [id]: [
            { date: ago(40), right: true, next: ago(30) },
            { date: ago(30), right: true, next: addDays(today, 40) }
          ]
        }
      }
  return {
    ...r,
    course: r.course.map(c => ('kind' in c ? c : { ...c, done: ago(40) }))
  }
}

/**
 * Each retired kind's line, its next date to come, so no kind is due today.
 * @param {GoRecord} r
 */
const kindsAhead = r =>
  Object.fromEntries(
    r.course.flatMap(c =>
      'kind' in c && c.retired ? [[kindKey(c.kind), [{ date: ago(1), right: true, next: addDays(today, 40) }]]] : []
    )
  )

/** The first rules part answered two days ago: its items come back today. */
const firstRules = () => work(fresh(), ago(2), 5)

/** The first rules part and five items of the second answered today: an item answered by points is next. */
const pointsItem = () => work(fresh(), today, 10)

/** Some way in: the rules parts done, the first kinds opened and tried over four weeks, problems due today. */
function midCourse() {
  let r = fresh()
  for (let d = 28; d >= 1; d--) r = work(r, ago(d), 7)
  return r
}

/** The rules done, and the first kind's worked example next. */
const firstExample = () => rulesKnown()

/** A later kind's worked example next: the kinds before it retired. */
function laterExample() {
  const r = rulesKnown()
  const early = r.course.map(c => ('kind' in c && c.kind < 3 ? { ...c, opened: ago(20), retired: ago(10) } : c))
  return {
    ...r,
    course: early,
    recall: { ...r.recall, ...kindsAhead({ ...r, course: early }) },
    // every problem of kinds 1 and 2 tried, past the first, which is shown solved
    tries: course.kinds
      .filter(k => k.id < 3)
      .flatMap(k => k.problems.slice(1))
      .map(id => ({ id, date: ago(10), right: true, mixed: false }))
  }
}

/** A new problem next: the first kind's example read today. */
const firstProblem = () => exampleRead(course, kindId(1), today)(rulesKnown())

/** Set up, the start gate passed, a rated game reviewed with two positions waiting, and a game on the engine's pass. */
function reviewing() {
  const r = dueDone(midCourse())
  return {
    ...r,
    ...SET_UP,
    start: { counted: ago(20) },
    recall: { ...rulesKnown().recall, ...kindsAhead(r) },
    position: { ...r.position, read: { day: today, rating: 900, deviation: 120 } },
    games: [
      game(501, ago(3)),
      game(502, ago(1), {
        pass: game(0, '').pass.slice(0, 2),
        list: null
      })
    ]
  }
}

/** A review position's line shown, with the move typed and its loss. */
function reviewShown() {
  const r = reviewing()
  const first = r.games[0]
  if (!first?.list?.[0]) throw new Error('The game has a review list')
  return {
    ...r,
    games: [
      { ...first, list: [{ ...first.list[0], typed: 'R13', typedLoss: 1.84 }, ...first.list.slice(1)] },
      ...r.games.slice(1)
    ],
    position: { ...r.position, open: { n: 2, step: 'review', game: 501, index: 0, shown: true } }
  }
}

/** The rated game owed today: every review done, the start gate open. */
function ratedGame() {
  const r = reviewing()
  return {
    ...r,
    games: [game(501, ago(3), { reviewed: true, list: [] })]
  }
}

/** The first rated game owed: no rated game on the record yet, and the server not read today. */
function firstRated() {
  const r = ratedGame()
  return {
    ...r,
    games: [practiceGame(400, ago(20))],
    position: { ...r.position, read: null }
  }
}

/** A rated challenge posted today and not taken: the list goes on beneath it. */
function posted() {
  const r = dueDone(midCourse())
  const g = ratedGame()
  return { ...r, ...SET_UP, start: g.start, recall: { ...r.recall, ...g.recall }, games: g.games, position: { ...r.position, posted: today, read: g.position.read } }
}

/** The practice game owed: set up, no game counted yet. */
function practice() {
  const r = dueDone(midCourse())
  return { ...r, ...SET_UP }
}

/** A practice game just read, its count asked. */
function count() {
  const r = practice()
  return {
    ...r,
    games: [practiceGame(600, today)],
    position: { ...r.position, open: { n: 3, step: 'count', game: 600 } }
  }
}

/** The fifteenth rated game read: the reading's screen. */
function reading() {
  const r = ratedGame()
  return {
    ...r,
    readings: [
      { date: today, games: 15, rating: 912.4, deviation: 88.2, p: 0.64, n: 25, state: 'open' }
    ],
    position: { ...r.position, open: { n: 3, step: 'reading' } }
  }
}

/** A reading 48 readings after the first line, the end level passed at it: its lines outside Details. */
function endLevel() {
  const r = ratedGame()
  const at = (/** @type {number} */ i) => ({ date: ago(48 - i), games: 15 * (i + 1), p: 0.6, n: 20, state: 'open' })
  return {
    ...r,
    readings: [
      { ...at(0), rating: 2400, deviation: 65 },
      ...Array.from({ length: 48 }, (_, i) => ({ ...at(i + 1), rating: i < 24 ? 2496 : 2510, deviation: 60 }))
    ],
    first: { date: ago(48), rating: 2400, deviation: 65, games: 15 },
    position: { ...r.position, open: { n: 3, step: 'reading' } }
  }
}

/** A game that is no rated game: its note. */
function note() {
  const r = ratedGame()
  return {
    ...r,
    position: {
      ...r.position,
      open: {
        n: 3,
        step: 'note',
        text: 'That game is not ranked. Eruko reviews it and does not count it as a rated game.'
      }
    }
  }
}

/** The rules known, and the last reading marks a drop: the next kind still opens. */
function dropped() {
  const r = rulesKnown()
  return {
    ...r,
    readings: [
      { date: ago(2), games: 15, rating: 880, deviation: 90, p: 0.4, n: 20, state: 'held' }
    ]
  }
}

/**
 * Nothing left: every rules item and every kind's problem answered, each next date to come.
 */
function nothing() {
  const r = rulesKnown()
  const retired = r.course.map(c => ('kind' in c ? { ...c, opened: ago(30), retired: ago(20) } : c))
  return {
    ...r,
    course: retired,
    recall: { ...r.recall, ...kindsAhead({ ...r, course: retired }) },
    tries: course.kinds.flatMap(k =>
      (k.problems.length === 1 ? k.problems : k.problems.slice(1)).map(id => ({
        id,
        date: ago(20),
        right: true,
        mixed: false
      }))
    )
  }
}

/**
 * The whole course used, and a reviewed game whose one listed position is a walled white group
 * Black can kill: the page poses it as a problem of the learner's own, on its own thread.
 */
export function ownGames() {
  const r = rulesKnown()
  /** @type {string[]} */
  const black = []
  /** @type {string[]} */
  const white = []
  const rows = ['XXXXXXX', 'XOOOOOX', 'XO...OX', 'XOOOOOX', 'XXXXXXX']
  const cols = 'ABCDEFGHJKLMNOPQRST'
  rows.forEach((row, i) =>
    row.split('').forEach((ch, x) => {
      const at = `${cols[6 + x]}${6 + rows.length - i}`
      if (ch === 'X') black.push(at)
      if (ch === 'O') white.push(at)
    })
  )
  const retired = r.course.map(c => ('kind' in c ? { ...c, opened: ago(30), retired: ago(20) } : c))
  return {
    ...r,
    course: retired,
    recall: { ...r.recall, ...kindsAhead({ ...r, course: retired }) },
    tries: course.kinds.flatMap(k =>
      (k.problems.length === 1 ? k.problems : k.problems.slice(1)).map(id => ({
        id,
        date: ago(20),
        right: true,
        mixed: false
      }))
    ),
    games: [
      game(900, ago(5), {
        initial: { black, white },
        moves: ['A1', 'A19'],
        pass: [],
        reviewed: true,
        list: [{ move: 1, game: 'A1', gameLoss: 9, best: 'K9', line: ['K9'], typed: 'A1', typedLoss: 9 }]
      })
    ]
  }
}

/** Every record above, by name. */
/**
 * The record as its learner left it today: one not yet set up has skipped today's game, which
 * set-up waits on, so the screen a test wants comes first.
 * @template {{ server: unknown, position: object }} R
 * @param {R} r
 * @returns {R}
 */
const left = r => (r.server ? r : { ...r, position: { ...r.position, skipped: today } })

export const RECORDS = {
  firstRules: () => left(firstRules()),
  pointsItem: () => left(pointsItem()),
  midCourse: () => left(midCourse()),
  firstExample: () => left(firstExample()),
  laterExample: () => left(laterExample()),
  firstProblem: () => left(firstProblem()),
  reviewing: () => left(reviewing()),
  reviewShown: () => left(reviewShown()),
  ratedGame: () => left(ratedGame()),
  firstRated: () => left(firstRated()),
  posted: () => left(posted()),
  practice: () => left(practice()),
  count: () => left(count()),
  reading: () => left(reading()),
  endLevel: () => left(endLevel()),
  note: () => left(note()),
  dropped: () => left(dropped()),
  nothing: () => left(nothing())
}

if (process.argv[1]?.endsWith('go-records.mjs')) {
  const dir = process.argv[2] ?? '/tmp/go-records'
  mkdirSync(dir, { recursive: true })
  for (const [name, make] of Object.entries(RECORDS))
    writeFileSync(`${dir}/${name}.json`, JSON.stringify(make()))
  console.log(`wrote ${Object.keys(RECORDS).length} records to ${dir}`)
}
