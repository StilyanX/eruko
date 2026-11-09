// Hides: how what comes from outside the Go unit's code enters it, and
// the types it is held in once in: the Go part of the record as stored, decoded once into its
// typed shape with what a hand edit or an older page left odd read as absent or empty, never as a
// crash; the server's replies; the relay's and the engine's replies; the work list's address; a
// problem posed on the page's own thread; a typed move, count or game number; the bank and the
// course as the generator wrote them; and the id types, each made by its one constructor here.
// The record's fields are described by the types below (src/record/FORMAT.md).
import { isRecord } from '../../../kernel/decode.logic.js'
import { fail, ok } from '../../../kernel/result.logic.js'
import { KINDS as BUILT_KINDS, PARTS as BUILT_PARTS, SECTIONS } from './course.gen.js'
import { parseCoord } from './rules.logic.js'

// The ids

/** @typedef {string & { readonly brand: 'ProblemId' }} ProblemId A problem's id, never reused and never shown: "3.2" in the bank (scripts/lib/go-ids.json keeps it), "o<key>" for a problem built in the browser. */
/** @typedef {string & { readonly brand: 'RuleId' }} RuleId A rules item's id: "R2.4". */
/** @typedef {ProblemId | RuleId} ItemId A problem's or a rules item's id. */
/** @typedef {number & { readonly brand: 'KindId' }} KindId A kind's number. */
/** @typedef {number & { readonly brand: 'GameId' }} GameId A game's number on the server. */
/** @typedef {string & { readonly brand: 'PositionKey' }} PositionKey A position of a reviewed game tried for a problem of the learner's own, "<game>-<move>", or a change to a seed tried for a written problem, "w<seed>-<point>-<act>". */

/** @param {string} text */
export const problemId = text => /** @type {ProblemId} */ (text)
/** @param {string} text */
const ruleId = text => /** @type {RuleId} */ (text)
/**
 * A rules item's id or a problem's, by its form: a rules item's starts with R.
 * @param {string} text
 * @returns {ItemId}
 */
export const itemId = text => (text.startsWith('R') ? ruleId(text) : problemId(text))
/**
 * @param {ItemId} id
 * @returns {id is RuleId}
 */
export const isRulesItem = id => id.startsWith('R')
/** @param {number} n */
export const kindId = n => /** @type {KindId} */ (n)
/**
 * The key a retired kind's lines are kept under in the dated list, beside the problems' and the
 * rules items' ids: "k3".
 * @param {KindId} id
 */
export const kindKey = id => `k${id}`
/** @param {number} n */
export const gameId = n => /** @type {GameId} */ (n)
/**
 * @param {GameId} game
 * @param {number} move
 */
export const positionKey = (game, move) => /** @type {PositionKey} */ (`${game}-${move}`)
/**
 * @param {ProblemId} seed
 * @param {string} at
 * @param {'black' | 'white' | 'off'} act
 */
export const changeKey = (seed, at, act) => /** @type {PositionKey} */ (`w${seed}-${at}-${act}`)

// The course and the bank

/** @typedef {'black' | 'white'} Colour */
/** @typedef {Readonly<{ n: number, name: string, items: readonly RuleId[], cases?: readonly number[] }>} Part A rules part with its items' ids and how many cases each holds, one where none is given */
/**
 * A kind: its number, name and problems, the kinds its answers use (`after`), where it comes
 * from, its term where it has one, and the sequences of reasons its problems give.
 * @typedef {Readonly<{ id: KindId, name: string, source: string, term?: string, problems: readonly ProblemId[], seqs: readonly string[], after: readonly KindId[] }>} Kind
 */
/** @typedef {Readonly<{ side: 'B' | 'W', at: string | null, reason: string }>} SolutionMove A move of a line with its reason; `at` is null for a pass */
/** @typedef {Readonly<{ at: number, moves: readonly SolutionMove[] }>} SolutionVariation */
/** @typedef {Readonly<{ first: string, moves: readonly SolutionMove[], variations: readonly SolutionVariation[] }>} SolutionLine */
/** @typedef {Readonly<{ black: number, white: number, result: import('./solve.logic.js').Fate }>} KoChange The ko threats at which a ko result changes, and the result there */
/**
 * A Go problem as the unit stores it: its diagram, region, side to move, the group asked about
 * (by the stone it is named by, `at`),
 * the ko field, every best first move, the result, and its solution.
 * @typedef {import('./diagram.logic.js').StoredDiagram & Readonly<{ id: ProblemId, kind: KindId, source: string, region: readonly string[], beyond?: 'both', toMove: Colour, group: Readonly<{ colour: Colour, at: string }>, ko: string, answers: readonly string[], result: import('./solve.logic.js').Fate, solution: Readonly<{ lines: readonly SolutionLine[], changes: readonly KoChange[] }> }>} Problem
 */
/**
 * A rules item: the rule, and its cases, each a stored position with one question with one exact
 * answer that the rule decides.
 * @typedef {Readonly<{ position: import('./diagram.logic.js').StoredDiagram, question: string, answer: string }>} RulesCase
 * @typedef {Readonly<{ id: RuleId, part: number, cases: readonly RulesCase[], rule: string }>} RulesItem
 */

/** The five rules parts, as the generator wrote them. @type {readonly Part[]} */
export const PARTS = /** @type {readonly Part[]} */ (/** @type {unknown} */ (BUILT_PARTS))
/** The bank's kinds in course order, as the generator wrote them. @type {readonly Kind[]} */
export const KINDS = /** @type {readonly Kind[]} */ (/** @type {unknown} */ (BUILT_KINDS))
export { SECTIONS }

/**
 * The bank's problems by id, from the file the generator wrote (content/problems.gen.js), whose
 * every field tests/go-data.test.mjs checks.
 * @param {readonly unknown[]} problems
 * @returns {Readonly<Record<string, Problem>>}
 */
export const bankOf = problems =>
  Object.fromEntries(
    problems.map(p => {
      const problem = /** @type {Problem} */ (p)
      return [problem.id, problem]
    })
  )

/**
 * The rules items by id, from the file the generator wrote (content/rules-items.gen.js).
 * @param {readonly unknown[]} items
 * @returns {Readonly<Record<string, RulesItem>>}
 */
export const rulesOf = items =>
  Object.fromEntries(
    items.map(i => {
      const item = /** @type {RulesItem} */ (i)
      return [item.id, item]
    })
  )

/**
 * A problem the page's own thread posed from a position of the learner's game (own-worker.dom.js),
 * or null: the thread sends the problem the search made, or null when it made none.
 * @param {unknown} data
 * @returns {Problem | null}
 */
export const posedOf = data =>
  isRecord(data) && typeof data.id === 'string' && isRecord(data.solution)
    ? /** @type {Problem} */ (/** @type {unknown} */ (data))
    : null

// The record

/** @typedef {Readonly<{ network: string, visits: number, rules: string, komi: number, address: string, checksum: string }>} Engine The engine as stored: the setting the first stage fixes and the network's checksum */
/** @typedef {Readonly<{ name: string, rules: string, main: number, overtime: number, size: number }>} ServerSetting What the first stage fixes for the server */
/** @typedef {ServerSetting & Readonly<{ user: string, id: number, since: string }>} Server The server as stored: the fixed setting, and the player and the day set up */
/** @typedef {Readonly<{ id: ProblemId, date: string, right: boolean, mixed: boolean }>} Try A problem's first try */
/** @typedef {import('../../../kernel/days.logic.js').Line & Readonly<{ case?: number }>} GoLine A dated line; a rules item's names the case asked, the first where none is named */
/** @typedef {Readonly<{ part: number, done: string }>} PartLine A rules part's state */
/** @typedef {Readonly<{ kind: KindId, opened: string, retired: string, after: readonly KindId[] }>} KindLine A kind's state */
/** @typedef {PartLine | KindLine} CourseLine */
/** @typedef {Readonly<{ day: string, rating: number, deviation: number }>} ServerRead The rating and deviation read from the server, and the day */
/** @typedef {Readonly<{ lead: number, best: string, bestLead: number, line: readonly string[] }>} PassAnswer What is kept of the engine's answer for one position: Black's lead in points there, the best move, Black's lead after it, and its line */
/**
 * One position of a review list: the move's number, the game move and its loss in points, the
 * engine's best move and line; then the move typed ('' before an answer) and its loss (null until
 * the engine reads it), or 'none' and no loss where it was skipped.
 * @typedef {Readonly<{ move: number, game: string, gameLoss: number, best: string, line: readonly string[] }> & (Readonly<{ typed: string, typedLoss: number | null }> | Readonly<{ typed: 'none' }>)} Entry
 */
/**
 * A game as the record keeps it: the paper's fields, and beside them what its checks read; `pass`
 * the engine's answer for each position (null where none came yet), `list` the review list once
 * the pass is done, `unread` once the engine would not read it.
 * @typedef {Readonly<{ id: GameId, date: string, ranked: boolean, bot: boolean, opponent: string | undefined, size: number, square: boolean, handicap: number, rules: string, main: number, time: string, cancelled: boolean, passed: boolean, colour: Colour, result: string, first: Colour, placed: number, initial: Readonly<{ black: readonly string[], white: readonly string[] }>, removed: readonly string[], moves: readonly string[], pass: readonly (PassAnswer | null)[], reviewed: boolean, list: readonly Entry[] | null, unread?: true }>} Game
 */
/** @typedef {Readonly<{ p: number, n: number }>} Share A share right out of n tries */
/** @typedef {Readonly<{ date: string, games: number, rating: number, deviation: number, p: number, n: number, then?: Share, state: 'held' | 'open', before?: true }>} Reading One reading of gate 2 */
/** @typedef {Readonly<{ date: string, rating: number, deviation: number, games: number }>} First The reading at which the first line was set */
/** @typedef {Readonly<{ problems: readonly Problem[], kinds: readonly Kind[], seen: readonly PositionKey[], attempts?: Readonly<Record<string, number>> }>} Own The problems built from the learner's own games and the problems Eruko wrote, the kinds they made, every position or change posed, and how often each was started */

/**
 * The one next action, or the item left open, `n` the case's number in the paper's list. An
 * answered item keeps its verdict (`right`) and what was typed (`given`); a review position its
 * line once `shown`; the practice game's count what was typed, Eruko's count, and the verdict.
 * @typedef {Readonly<{ n: 1, step: 'recall', id: ItemId, kind: KindId | null, case?: number }>} Recall
 * @typedef {Readonly<{ n: 4, step: 'mixed', id: ProblemId, kind: KindId }>} Mixed
 * @typedef {Readonly<{ n: 5, step: 'new', id: ProblemId, kind: KindId }>} New
 * @typedef {Readonly<{ n: 5, step: 'rules', id: RuleId, kind: null }>} Rules
 * @typedef {Recall | Mixed | New | Rules} Asked An item answered by gate 1
 * @typedef {Asked & Readonly<{ right: boolean, given: string }>} Judged
 * @typedef {Readonly<{ n: 5, step: 'example', id: ProblemId, kind: KindId }>} Example
 * @typedef {Readonly<{ n: 2, step: 'review', game: GameId, index: number }>} Review
 * @typedef {Review & Readonly<{ shown: true }>} Reviewed
 * @typedef {Readonly<{ n: 3, step: 'game', practice: boolean }>} GameStep
 * @typedef {Readonly<{ n: 3, step: 'count', game: GameId }>} Count
 * @typedef {Count & Readonly<{ typed: number, count: number | null, right: boolean }>} Counted
 * @typedef {Counted & Readonly<{ shown: true }>} CountShown
 * @typedef {Readonly<{ n: 3, step: 'note', text: string }>} Note
 * @typedef {Readonly<{ n: 3, step: 'reading' }>} ReadingStep
 * @typedef {Readonly<{ n: 6, step: 'nothing' }>} Nothing
 * @typedef {Asked | Judged | Example | Review | Reviewed | GameStep | Count | Counted | CountShown | Note | ReadingStep | Nothing} Item
 */

/**
 * Where the learner stands: the item open, the kind answered last, the days the game was
 * skipped, the challenge posted and the engine down, the last read of the server, after Set
 * up again the OGS account set up before (`was`), and what is typed for the item open (`draft`).
 * @typedef {Readonly<{ open: Item | null, last: KindId | null, skipped: string, posted: string, read: ServerRead | null, was?: number, draft?: Draft }>} Position
 */
/**
 * What is typed for the item open until it is answered: `key` names the item, so a draft of
 * another item is not shown.
 * @typedef {Readonly<{ key: string, move: string, result: string, typed: string, number: string }>} Draft
 */
/**
 * The Go record, with the fields "A Self-Study System" sets (The build, Go, The record).
 * @typedef {Readonly<{ engine: Engine | null, server: Server | null, course: readonly CourseLine[], recall: Readonly<Record<string, readonly GoLine[]>>, tries: readonly Try[], games: readonly Game[], readings: readonly Reading[], first: First | null, start: Readonly<{ counted: string, equal: string }>, position: Position, own: Own }>} GoRecord
 */

/** @param {unknown} x */
const text = x => (typeof x === 'string' ? x : '')
/** @param {unknown} x */
const list = x => (Array.isArray(x) ? x : [])
/** @param {unknown} x */
const number = x => (typeof x === 'number' && Number.isFinite(x) ? x : null)

/** What the record holds of the learner's own games before any. @type {Own} */
export const NO_OWN = { problems: [], kinds: [], seen: [] }

/**
 * The `own` field of the Go part of the record as stored: the problems, kinds and positions kept,
 * and the starts counted.
 * @param {unknown} part
 * @returns {Own}
 */
export function ownOf(part) {
  const raw = isRecord(part) ? part.own : undefined
  if (!isRecord(raw)) return NO_OWN
  const attempts = isRecord(raw.attempts)
    ? Object.fromEntries(
        Object.entries(raw.attempts).flatMap(([k, v]) => (typeof v === 'number' ? [[k, v]] : []))
      )
    : undefined
  return {
    problems: list(raw.problems).flatMap(p => posedOf(p) ?? []),
    kinds: list(raw.kinds).flatMap(k =>
      isRecord(k) && typeof k.id === 'number' && Array.isArray(k.problems)
        ? [
            /** @type {Kind} */ (
              /** @type {unknown} */ ({ seqs: [], after: [], source: 'own', ...k })
            )
          ]
        : []
    ),
    seen: list(raw.seen).flatMap(s =>
      typeof s === 'string' ? [/** @type {PositionKey} */ (s)] : []
    ),
    ...(attempts ? { attempts } : {})
  }
}

/**
 * A stored game, as the record keeps it once it holds its moves: an answer of its pass that is
 * not one is read as none come yet.
 * @param {unknown} raw
 * @returns {Game | null}
 */
function storedGame(raw) {
  if (!isRecord(raw) || typeof raw.id !== 'number' || !Array.isArray(raw.moves)) return null
  const pass = list(raw.pass).map(a => (isRecord(a) && typeof a.lead === 'number' ? a : null))
  return /** @type {Game} */ (/** @type {unknown} */ ({ ...raw, pass, list: raw.list ?? null }))
}

/**
 * The stored item left open, or null when it is not an item or what it names is gone: its
 * problem or rules item, its game, or its position in the game's review list.
 * @param {unknown} raw
 * @param {ReadonlySet<string>} held
 * @param {readonly Game[]} games
 * @returns {Item | null}
 */
function itemOf(raw, held, games) {
  if (!isRecord(raw) || typeof raw.step !== 'string') return null
  const item = /** @type {Item} */ (/** @type {unknown} */ (raw))
  if (ASKED.has(raw.step)) return typeof raw.id === 'string' && held.has(raw.id) ? item : null
  const game = games.find(g => g.id === raw.game)
  if (raw.step === 'review')
    return game && typeof raw.index === 'number' && game.list?.[raw.index] ? item : null
  if (raw.step === 'count') return game ? item : null
  return PLAIN.has(raw.step) ? item : null
}

/** The steps that name a problem or a rules item, and those that name nothing of the record. */
const ASKED = new Set(['recall', 'mixed', 'new', 'rules', 'example'])
const PLAIN = new Set(['game', 'note', 'reading', 'nothing'])

/**
 * The server as stored, or null when it does not name the player set up.
 * @param {unknown} raw
 * @returns {Server | null}
 */
const serverOf = raw =>
  isRecord(raw) && typeof raw.id === 'number' && typeof raw.user === 'string'
    ? /** @type {Server} */ (/** @type {unknown} */ ({ since: '', ...raw }))
    : null

/**
 * The engine as stored, or null when it names no network.
 * @param {unknown} raw
 * @returns {Engine | null}
 */
const engineOf = raw =>
  isRecord(raw) && typeof raw.network === 'string'
    ? /** @type {Engine} */ (/** @type {unknown} */ ({ checksum: '', ...raw }))
    : null

/**
 * Where the learner stands, as stored, each field defaulted.
 * @param {unknown} raw
 * @param {ReadonlySet<string>} held
 * @param {readonly Game[]} games
 * @returns {Position}
 */
function positionOf(raw, held, games) {
  const p = isRecord(raw) ? raw : {}
  const read = isRecord(p.read) && typeof p.read.rating === 'number' ? p.read : null
  return {
    open: itemOf(p.open, held, games),
    last: typeof p.last === 'number' ? kindId(p.last) : null,
    skipped: text(p.skipped),
    posted: text(p.posted),
    read: read && /** @type {ServerRead} */ (/** @type {unknown} */ (read)),
    ...(typeof p.was === 'number' ? { was: p.was } : {}),
    ...(isRecord(p.draft) && typeof p.draft.key === 'string'
      ? {
          draft: {
            key: p.draft.key,
            move: text(p.draft.move),
            result: text(p.draft.result),
            typed: text(p.draft.typed),
            number: text(p.draft.number)
          }
        }
      : {})
  }
}

/**
 * The course's state, in step with the course: the five rules parts, then one line per kind in
 * course order, each as stored or begun afresh.
 * @param {unknown} raw
 * @param {{ parts: readonly Part[], kinds: readonly Kind[] }} course
 * @returns {CourseLine[]}
 */
function courseOf(raw, course) {
  /** @type {Map<string, Record<string, unknown>>} */
  const had = new Map()
  for (const c of list(raw))
    if (isRecord(c)) had.set(typeof c.part === 'number' ? `p${c.part}` : `k${String(c.kind)}`, c)
  return [
    ...course.parts.map(p => ({ part: p.n, done: text(had.get(`p${p.n}`)?.done) })),
    ...course.kinds.map(k => {
      const was = had.get(`k${k.id}`)
      return { opened: text(was?.opened), retired: text(was?.retired), kind: k.id, after: k.after }
    })
  ]
}

/**
 * The Go part of the record as stored, as every function of the unit reads it: each field in
 * place, and the course's state in step with the course. A line that names a problem or a rules
 * item the course no longer holds (the bank was built again) is left out. A record from before
 * these fields (the first problems had other numbers, under `list`) starts again.
 * @param {unknown} raw
 * @param {{ parts: readonly Part[], kinds: readonly Kind[] }} course
 * @returns {GoRecord}
 */
export function decodeRecord(raw, course) {
  const r = isRecord(raw) && raw.list === undefined ? raw : {}
  /** @type {ReadonlySet<string>} */
  const held = new Set([
    ...course.parts.flatMap(p => p.items),
    ...course.kinds.flatMap(k => [kindKey(k.id), ...k.problems])
  ])
  const games = list(r.games).flatMap(g => storedGame(g) ?? [])
  const recall = isRecord(r.recall) ? r.recall : {}
  return {
    engine: engineOf(r.engine),
    server: serverOf(r.server),
    course: courseOf(r.course, course),
    recall: Object.fromEntries(
      Object.entries(recall).flatMap(([id, lines]) =>
        held.has(id) && Array.isArray(lines)
          ? [
              [
                id,
                /** @type {GoLine[]} */ (
                  lines.filter(isRecord)
                )
              ]
            ]
          : []
      )
    ),
    tries: /** @type {Try[]} */ (list(r.tries).filter(t => isRecord(t) && held.has(text(t.id)))),
    games,
    readings: /** @type {Reading[]} */ (list(r.readings).filter(isRecord)),
    first: isRecord(r.first) ? /** @type {First} */ (/** @type {unknown} */ (r.first)) : null,
    // a record from before `equal` reads it as empty
    start: isRecord(r.start) ? { counted: text(r.start.counted), equal: text(r.start.equal) } : { counted: '', equal: '' },
    position: positionOf(r.position, held, games),
    own: ownOf(r)
  }
}

// The server's replies

/**
 * One game's record as the server gives it, with the fields the unit reads, each in its type.
 * @typedef {Readonly<{ id: GameId, black: number, white: number, width: number, height: number, rules: string, handicap: number, ranked: boolean, annulled: boolean, outcome: string, blackLost: boolean, whiteLost: boolean, ended: string, players: Readonly<{ black: Side, white: Side }>, data: GameData }>} GameDetail
 * @typedef {Readonly<{ username: string | undefined, bot: boolean }>} Side
 * @typedef {Readonly<{ moves: readonly (readonly number[])[], initialPlayer: string, freePlacement: boolean, initialBlack: string, initialWhite: string, system: string, mainSeconds: number, removed: string }>} GameData
 * @typedef {Readonly<{ id: number, user: string, rating: number, deviation: number }>} Player A player as the server's search names one: an account with no game yet carries the server's own start, 1500 and 350
 * @typedef {'down' | 'none' | 'private' | 'no-player' | 'no-game'} ServerError Why the server's record was not read: it did not answer, it has no such record, it keeps it private, it knows no player of that name, or its reply is not a game's record
 */

/**
 * The players in a reply of the server's search.
 * @param {unknown} reply
 * @returns {Player[]}
 */
export const playersOf = reply =>
  (isRecord(reply) ? list(reply.results) : []).flatMap(p => {
    if (!isRecord(p) || typeof p.id !== 'number' || typeof p.username !== 'string') return []
    const overall = isRecord(p.ratings) && isRecord(p.ratings.overall) ? p.ratings.overall : {}
    return [
      {
        id: p.id,
        user: p.username,
        rating: number(overall.rating) ?? 1500,
        deviation: number(overall.deviation) ?? 350
      }
    ]
  })

/**
 * The ids of the games in a reply of a player's games, with the day each ended; a game with no
 * end date is left out.
 * @param {unknown} reply
 * @returns {{ id: GameId, ended: string }[]}
 */
export const endedOf = reply =>
  (isRecord(reply) ? list(reply.results) : []).flatMap(g =>
    isRecord(g) && typeof g.id === 'number' && typeof g.ended === 'string' && g.ended
      ? [{ id: gameId(g.id), ended: g.ended }]
      : []
  )

/** @param {unknown} side */
const sideOf = side => ({
  username: isRecord(side) && typeof side.username === 'string' ? side.username : undefined,
  bot: isRecord(side) && text(side.ui_class).includes('bot')
})

/**
 * A game's record from the server's reply, or why it cannot be read: the moves, both players
 * and the board's size are what the checks need.
 * @param {unknown} reply
 * @returns {import('../../../kernel/result.logic.js').Result<GameDetail, 'unreadable'>}
 */
export function detailOf(reply) {
  if (!isRecord(reply) || !isRecord(reply.gamedata) || !isRecord(reply.players))
    return fail('unreadable')
  const { gamedata: d, players } = reply
  const moves = list(d.moves)
  if (
    typeof reply.id !== 'number' ||
    typeof reply.black !== 'number' ||
    typeof reply.white !== 'number' ||
    typeof reply.width !== 'number' ||
    !reply.width ||
    !isRecord(players.black) ||
    !isRecord(players.white) ||
    !Array.isArray(d.moves) ||
    !moves.every(m => Array.isArray(m) && m.every(x => typeof x === 'number'))
  )
    return fail('unreadable')
  const time = isRecord(d.time_control) ? d.time_control : {}
  const initial = isRecord(d.initial_state) ? d.initial_state : {}
  return ok({
    id: gameId(reply.id),
    black: reply.black,
    white: reply.white,
    width: reply.width,
    height: number(reply.height) ?? reply.width,
    rules: text(reply.rules),
    handicap: number(reply.handicap) ?? 0,
    ranked: Boolean(reply.ranked),
    annulled: Boolean(reply.annulled),
    outcome: text(reply.outcome),
    blackLost: Boolean(reply.black_lost),
    whiteLost: Boolean(reply.white_lost),
    ended: text(reply.ended),
    players: { black: sideOf(players.black), white: sideOf(players.white) },
    data: {
      moves,
      initialPlayer: text(d.initial_player),
      freePlacement: Boolean(d.free_handicap_placement),
      initialBlack: text(initial.black),
      initialWhite: text(initial.white),
      system: text(time.system),
      mainSeconds:
        number(time.total_time) ?? number(time.main_time) ?? number(time.initial_time) ?? 0,
      removed: text(d.removed)
    }
  })
}

// The relay's and the engine's replies

/**
 * @typedef {Readonly<{ move: string, order: number, scoreLead: number, pv: readonly string[] }>} MoveInfo
 * @typedef {Readonly<{ visits: number, scoreLead: number, moveInfos: readonly MoveInfo[] }>} Answer The engine's answer for one position: its visits, Black's lead in points, and each move it read
 * @typedef {'down' | 'refused' | 'unanswered'} EngineError Why the engine gave no answer: nothing answers at the relay's address, the engine read the query and would not answer it (asking again does not help), or it was reached and gave no answer
 * @typedef {Readonly<{ network: string, checksum: string }>} About What the relay says of itself: the network file's name and checksum
 */

/**
 * The relay's word of itself.
 * @param {unknown} reply
 * @returns {import('../../../kernel/result.logic.js').Result<About, 'unanswered'>}
 */
export const aboutOf = reply =>
  isRecord(reply) && typeof reply.network === 'string'
    ? ok({ network: reply.network, checksum: text(reply.checksum) })
    : fail('unanswered')

/**
 * The engine's answer for a query, or why there is none.
 * @param {unknown} reply
 * @returns {import('../../../kernel/result.logic.js').Result<Answer, EngineError>}
 */
export function answerOf(reply) {
  if (!isRecord(reply)) return fail('unanswered')
  if (reply.refused) return fail('refused')
  const root = reply.rootInfo
  if (reply.error || !isRecord(root) || typeof root.scoreLead !== 'number')
    return fail('unanswered')
  return ok({
    visits: number(root.visits) ?? 0,
    scoreLead: root.scoreLead,
    moveInfos: list(reply.moveInfos).flatMap(m =>
      isRecord(m) && typeof m.move === 'string' && typeof m.scoreLead === 'number'
        ? [
            {
              move: m.move,
              order: number(m.order) ?? 0,
              scoreLead: m.scoreLead,
              pv: list(m.pv).map(text)
            }
          ]
        : []
    )
  })
}

// The address and the typed fields

/**
 * What the work list's address opens: the work list, a part read again (?part=<n>), or a kind's
 * own page (?kind=<id>).
 * @typedef {Readonly<{ t: 'list' }> | Readonly<{ t: 'part', n: number }> | Readonly<{ t: 'kind', id: KindId }>} WorkAddress
 */

/**
 * @param {{ get: (name: string) => string | null }} params the address's query, "?kind=3", as the page parses it
 * @returns {WorkAddress}
 */
export function workAddress(params) {
  const part = Number(params.get('part'))
  const kind = Number(params.get('kind'))
  if (Number.isInteger(part) && part > 0) return { t: 'part', n: part }
  if (Number.isInteger(kind) && kind > 0) return { t: 'kind', id: kindId(kind) }
  return { t: 'list' }
}

/**
 * A typed move as the paper writes one, "D4": a letter A to T without I and a number 1 to 19,
 * read in either case; null otherwise.
 * @param {string} typed
 * @returns {string | null}
 */
export function readMove(typed) {
  const t = typed.trim().toUpperCase()
  return parseCoord(t) ? t : null
}

/**
 * A typed count: a whole number in digits; null otherwise.
 * @param {string} typed
 */
export const readCount = typed => (/^\d+$/.test(typed.trim()) ? Number(typed.trim()) : null)

/**
 * A game's number from what is typed: the number itself, or the game's address on the server;
 * null otherwise.
 * @param {string} typed
 */
export function readGameNumber(typed) {
  const digits = /^(?:.*\/game\/(?:view\/)?)?(\d+)\/?$/.exec(typed.trim())?.[1]
  return digits === undefined ? null : gameId(Number(digits))
}
