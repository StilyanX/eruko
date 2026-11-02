// Step 2 ("A Self-Study System", Go, The steps and The review position; The build, Go, The
// engine and the server and The checks): the query at the stored setting, a move's loss in
// points, and the review list.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { courseOf } from './own.logic.js'
import { ENGINE, recordOf } from './record.logic.js'
import { NO_OWN, aboutOf, answerOf, gameId } from './decode.logic.js'
import { passAnswerOf, lossAt, lossOf, passAt, passDone, points, queryFor, reviewList, typedLoss, withAnswer, withLoss, withTyped, withUnread } from './review.logic.js'

const engine = { ...ENGINE, checksum: 'abc' }
/** @param {readonly import('./decode.logic.js').Game[]} games */
const recordWith = games => ({ ...recordOf({}, courseOf(NO_OWN)), games })
/**
 * A game of `n` moves with Black's lead at each position, and the lead after each position's best move.
 * @param {number[]} leads
 * @param {number[]} bests
 * @param {'black' | 'white'} [colour]
 * @returns {import('./decode.logic.js').Game}
 */
function game(leads, bests, colour = 'black') {
  const moves = leads.slice(1).map((_, i) => `${'ABCDEFGHJKLMNOPQRST'[i % 19]}${(i % 19) + 1}`)
  return {
    id: gameId(1),
    date: '2026-10-01',
    ranked: false,
    bot: false,
    opponent: undefined,
    colour,
    size: 19,
    square: true,
    handicap: 0,
    rules: 'aga',
    main: 1800,
    time: '',
    cancelled: false,
    passed: false,
    result: '',
    removed: [],
    first: 'black',
    placed: 0,
    initial: { black: [], white: [] },
    moves,
    pass: leads.map((lead, i) => ({ lead, best: 'Q16', bestLead: bests[i] ?? lead, line: ['Q16', 'D4'] })),
    reviewed: false,
    list: null
  }
}

test('every query uses the stored engine setting unchanged', () => {
  const g = game([0, 1, 0], [])
  const q = queryFor(engine, g, 2)
  assert.deepEqual(q.moves, [['B', 'A1'], ['W', 'B2']])
  assert.deepEqual([q.rules, q.komi, q.maxVisits, q.boardXSize, q.boardYSize], ['aga', 7.5, 500, 19, 19])
  assert.deepEqual(q.analyzeTurns, [2])
  // the learner's typed move is one more query, at the same setting
  const typed = queryFor(engine, g, 0, 'F5')
  assert.deepEqual(typed.moves, [['B', 'F5']])
  assert.deepEqual(typed.analyzeTurns, [1])
  assert.equal(typed.maxVisits, 500)
  assert.notEqual(typed.id, queryFor(engine, g, 0).id)
})

test('the engine\'s answer: its lead, its best move, the lead after it, and its line', () => {
  const a = answerOf({ rootInfo: { visits: 500, scoreLead: 1.5 }, moveInfos: [{ move: 'C3', order: 1, scoreLead: 0, pv: ['C3'] }, { move: 'D4', order: 0, scoreLead: 2, pv: ['D4', 'Q16'] }] })
  assert.ok(a.ok)
  assert.deepEqual(passAnswerOf(a.value), { lead: 1.5, best: 'D4', bestLead: 2, line: ['D4', 'Q16'] })
  // with no move read, the best is a pass that keeps the lead
  const none = answerOf({ rootInfo: { visits: 1, scoreLead: -3 } })
  assert.ok(none.ok)
  assert.deepEqual(passAnswerOf(none.value), { lead: -3, best: 'pass', bestLead: -3, line: [] })
  // a reply that is not an answer, or one the engine refused, is none
  assert.deepEqual(answerOf({ refused: true }), { ok: false, error: 'refused' })
  assert.deepEqual(answerOf({ error: 'bad query', rootInfo: { scoreLead: 0 } }), { ok: false, error: 'unanswered' })
  assert.deepEqual(answerOf(null), { ok: false, error: 'unanswered' })
})

test('the relay\'s word of itself names its network, or it is no answer', () => {
  assert.deepEqual(aboutOf({ network: 'kata1', checksum: 'abc' }), { ok: true, value: { network: 'kata1', checksum: 'abc' } })
  assert.deepEqual(aboutOf({ checksum: 'abc' }), { ok: false, error: 'unanswered' })
  assert.deepEqual(aboutOf('down'), { ok: false, error: 'unanswered' })
})

test('a move\'s loss: the lead for the mover after the best move minus the lead after the move played', () => {
  // Black to move at position 0: best keeps Black at +2, the move played leaves Black at −1.
  const g = game([0, -1, -4], [2, 3])
  assert.equal(lossAt(g, 0), 3)
  // White moved at position 1: Black's lead after its best move is 3, so White's is -3
  assert.equal(lossAt(g, 1), -3 - 4)
  assert.equal(points(lossAt(g, 0)), '3.0')
})

test('the review list: moves above the mean loss by more than twice the spread, largest first', () => {
  // Black's losses: twenty of 1 point, one of 9 and one of 12. Mean 1.86, spread 2.83: only 9 and 12 clear 7.53.
  const loss = [...Array(20).fill(1), 9, 12]
  const leads = [0]
  /** @type {number[]} */
  const bests = []
  loss.forEach(l => {
    const at = leads.at(-1)
    assert.ok(at !== undefined)
    bests.push(at, at - l)
    leads.push(at - l, at - l)
  })
  const g = game(leads, bests)
  assert.equal(passDone(g), true)
  const list = reviewList(g)
  assert.deepEqual(list.map((/** @type {{ gameLoss: number }} */ x) => x.gameLoss), [12, 9])
  assert.deepEqual(list.map((/** @type {{ move: number }} */ x) => x.move), [43, 41])
  assert.ok(list[0])
  assert.equal(list[0].typed, '')
  assert.deepEqual(list[0].line, ['Q16', 'D4'])
  // the other colour's moves are never listed, and a game of one move has no list
  assert.deepEqual(reviewList({ ...g, colour: 'white' }), [])
  assert.deepEqual(reviewList(game([0, 0], [])), [])
})

test('the typed move: 0.0 for the engine\'s own, never below 0.0', () => {
  const g = game([0, -5], [2])
  const entry = { move: 1, best: 'Q16' }
  assert.equal(typedLoss(g, entry, 'Q16', -99), 0)
  assert.equal(typedLoss(g, entry, 'F5', -0.1), 2.1)
  assert.equal(typedLoss(g, entry, 'F5', 3), 0)
  assert.equal(typedLoss({ ...g, colour: 'white' }, entry, 'F5', 0), 0)
})

test('the pass is kept answer by answer; when it is done the list is drawn, and an empty list is a game reviewed', () => {
  const g = { ...game([0, 0, 0], []), pass: [] }
  let r = recordWith([g])
  r = withAnswer(gameId(1), 0, { lead: 0, best: 'D4', bestLead: 0, line: [] })(r)
  assert.ok(r.games[0])
  assert.equal(r.games[0].list, null)
  r = withAnswer(gameId(1), 2, { lead: 0, best: 'D4', bestLead: 0, line: [] })(r)
  r = withAnswer(gameId(1), 1, { lead: 0, best: 'D4', bestLead: 0, line: [] })(r)
  assert.ok(r.games[0])
  assert.deepEqual(r.games[0].list, [])
  assert.equal(r.games[0].reviewed, true)
  // deliberate partial entries (a cast): only the typed fields are set, to show they are the only ones the typed move changes
  const entries = /** @type {import('./decode.logic.js').Entry[]} */ ([{ move: 3, typed: '' }, { move: 9, typed: '' }])
  const open = recordWith([{ ...game([0], []), list: entries, reviewed: false }])
  const one = withTyped(gameId(1), 0, 'F5', 2.1)(open)
  const shown = one.games[0]
  assert.ok(shown?.list)
  assert.equal(shown.reviewed, false)
  assert.deepEqual(shown.list[0], { move: 3, typed: 'F5', typedLoss: 2.1 })
  const closed = withTyped(gameId(1), 1, 'D4', 0)(one).games[0]
  assert.ok(closed)
  assert.equal(closed.reviewed, true)
  // the line shows at once with no loss; the engine's loss is kept when it comes, for that move only
  const waiting = withTyped(gameId(1), 0, 'F5', null)(open)
  /** @param {readonly import('./decode.logic.js').Game[]} games */
  const first = games => {
    const entry = games[0]?.list?.[0]
    assert.ok(entry)
    return lossOf(entry)
  }
  assert.equal(first(waiting.games), null)
  assert.equal(first(withLoss(gameId(1), 0, 'F5', 1.2)(waiting).games), 1.2)
  assert.equal(first(withLoss(gameId(1), 0, 'G5', 1.2)(waiting).games), null)
})

test('the pass says which game it is on and how far, and a game the engine will not read is left out', () => {
  const done = game([0, 1], [0, 1])
  const full = game([0, 1, 2], [0, 1, 2])
  const half = { ...full, id: gameId(2), pass: full.pass.slice(0, 1) }
  const fresh = { ...game([0, 1], [0, 1]), id: gameId(3), pass: [] }
  const record = recordWith([done, half, fresh])
  const at = passAt(record)
  assert.ok(at)
  assert.deepEqual([at.game.id, at.at, at.of], [2, 1, 3])
  const left = withUnread(gameId(2))(record)
  assert.equal(left.games[1]?.unread, true)
  const next = passAt(left)
  assert.ok(next)
  assert.deepEqual([next.game.id, next.at, next.of], [3, 0, 2])
  assert.equal(passAt(recordWith([done])), undefined)
})

test('a pass with a position never answered is not done, however long it is', () => {
  const g = game([0, 1, 0], [])
  // the answers came in for the last two positions only: the first is a hole
  /** @type {(import('./decode.logic.js').PassAnswer | null)[]} */
  const pass = new Array(g.pass.length)
  for (const k of [1, 2]) pass[k] = g.pass[k] ?? assert.fail('the game has three positions')
  assert.equal(pass.length, 3)
  assert.equal(passDone({ ...g, pass }), false)
  const r = withAnswer(gameId(1), 2, { lead: 0, best: 'Q16', bestLead: 0, line: [] })(recordWith([{ ...g, pass: [] }]))
  assert.equal(r.games[0]?.list, null)
  assert.equal(passAt(r)?.at, 0)
})

test('a game whose every position holds an answer waits on no engine, and its review list is drawn', () => {
  const g = game([0, 1, 0, 2, 0], [0, 1, 0, 2, 0])
  // one answer more than the game has positions: every position holds one
  const stored = { ...g, pass: [...g.pass, { lead: 0, best: 'pass', bestLead: 0, line: [] }] }
  const r = recordOf({ games: [stored] }, courseOf(NO_OWN))
  assert.equal(passAt(r), undefined)
  assert.ok(r.games[0]?.list)
})

test('a review position skipped keeps "none" and no loss', () => {
  const g = { ...game([0, 1, 0], []), list: [{ move: 1, game: 'A1', gameLoss: 1, best: 'Q16', line: [], typed: '', typedLoss: null }] }
  const entry = withTyped(gameId(1), 0, 'none', null)(recordWith([g])).games[0]?.list?.[0]
  assert.equal(entry?.typed, 'none')
  assert.equal(entry && 'typedLoss' in entry, false)
})
