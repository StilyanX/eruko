// Hides: the work list, one item at a time, in the order of the four steps: what each item shows,
// which event each answer sends (session.dom.js), and what waits beside it (the engine down, a
// challenge posted, the engine's pass). The page's sheet reads each item
// among the step's siblings (.lrn-ss > :first-child, .lrn p:last-child),
// so each item is drawn by a method here, and its typed text, its refusal and its wait live in
// this element, cleared when the item changes.
import { assert, unreachable } from '../../../kernel/invariant.logic.js'
import { askEngine } from '../core/engine.dom.js'
import { isRulesItem, readCount, readGameNumber, readMove } from '../core/decode.logic.js'
import { areaParts, boardBefore, colours, diagramOf, gameOf, ratedCount } from '../core/game.logic.js'
import { RESULT_WORDS, formLack, gameToday, isRight, nextAction, noKindBegun, pointLack, restOf, sameAnswer } from '../core/next.logic.js'
import { endLevelLines, readingLines, readingSummary } from '../core/readings.logic.js'
import { lossOf, points, queryFor, typedLoss } from '../core/review.logic.js'
import { BLACK, WHITE, parseCoord, place as placeStone } from '../core/rules.logic.js'
import { readEnded, readGame, readPlayer, serverSays } from '../core/server.dom.js'
import { dayName, studyDay } from '../../../kernel/days.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { linkTo } from '../../../parts/links.dom.js'
import { actions, choice, step, verdict } from '../../../parts/study.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { Background, ServerRead, afterRedraw } from '../core/background.dom.js'
import { board } from '../core/board.dom.js'
import {
  RESULTS,
  HOME,
  POINT_WHY,
  READING_SERVER,
  SIDE,
  answering,
  asked,
  bankOf,
  busy,
  field,
  goStore,
  goView,
  judged,
  named,
  next,
  ogs,
  passLine,
  solution,
  stuck,
  toggled,
  why
} from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'
import { postedText, practiceText, rankText, ratedList, ratedText } from './game.dom.js'

/** @typedef {{ why: string, busy: boolean }} Wait a refusal said and a read under way: "Game ended" */
/**
 * What the item open holds while it is answered: the fields typed, the refusal, the engine's
 * read of a typed review move ('' not asked, 'reading', 'failed'), and "Game ended"'s own
 * state. `key` names the item: a new item starts it afresh.
 * @typedef {{ key: string, move: string, result: string, typed: string, number: string, why: string, loss: '' | 'reading' | 'failed', ended: Wait }} Form
 */

/** @param {string} key @returns {Form} */
const blank = key => ({ key, move: '', result: '', typed: '', number: '', why: '', loss: '', ended: { why: '', busy: false } })

/**
 * The name of the item open: a new item starts its form afresh.
 * @param {import('../core/decode.logic.js').Item} item
 */
const keyOf = item =>
  `${item.step}${'id' in item ? item.id : 'game' in item ? item.game : ''}${'index' in item ? item.index : ''}`

/**
 * "Right." or "Wrong." said and kept, for the item open.
 * @param {import('../core/decode.logic.js').Asked} item
 * @param {string} day
 */
const judger = (item, day) => (/** @type {boolean} */ right, /** @type {string} */ given) =>
  send({ t: 'answer', item, right, given, day })

/** The work list. `problems` is the bank and `items` the rules items, each by id. */
export class GoWorkList extends Screen {
  /** @type {Readonly<Record<string, import('../core/decode.logic.js').Problem>>} */
  problems = {}
  /** @type {Readonly<Record<string, import('../core/decode.logic.js').RulesItem>>} */
  items = {}
  /** The item open's own state. */
  #f = blank('')
  /** A posted challenge's "Game ended", while it shows. @type {Wait | null} */
  #posted = null
  #bg = new Background(() => this.update())
  #server = new ServerRead(() => this.update())
  #sync = afterRedraw(this, () => {
    this.#server.sync(today())
    this.#bg.sync()
  })

  setup() {
    this.watch(goStore())
    this.watch(clock)
    this.onLeave(() => {
      this.#bg.stop()
      this.#server.stop()
    })
  }

  connectedCallback() {
    super.connectedCallback()
    this.#sync()
  }

  update() {
    super.update()
    this.#sync()
  }

  /**
   * Change the item open's state, and redraw.
   * @param {object} state
   * @param {object} change
   */
  #set(state, change) {
    Object.assign(state, change)
    this.update()
  }

  view() {
    const { record, course } = goView()
    const day = today()
    const item = nextAction(course, record, day)
    const key = keyOf(item)
    // A new item starts with nothing typed.
    if (this.#f.key !== key) this.#f = blank(key)
    const posting = Boolean(gameToday(course, record, day)?.waiting && item.step !== 'game')
    if (!posting) this.#posted = null
    else this.#posted ??= { why: '', busy: false }
    const posted = this.#posted
    return [
      step(this.#screen(item, record, course, day), { key: `item ${key}` }),
      posted && step(this.#postedScreen(posted, day), { key: 'posted' }),
      passLine(record, this.#bg.stalled)
    ]
  }

  /**
   * What the item open shows.
   * @param {import('../core/decode.logic.js').Item} item
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/own.logic.js').Course} course
   * @param {string} day
   * @returns {import('../../../parts/view.dom.js').Child}
   */
  #screen(item, record, course, day) {
    switch (item.step) {
      case 'nothing':
        return nothingLeft(record, day)
      case 'review':
        return this.#review(record, item)
      case 'game':
        return this.#game(record, item, day)
      case 'count':
        return this.#count(record, item, day)
      case 'reading':
        // a reading after 15 rated games: one plain line, the end level's lines, its numbers behind Details
        return [
          h('p', { key: 'summary' }, readingSummary(record)),
          ...endLevelLines(record).map(line => h('p', { key: line }, line)),
          h(
            'details',
            { class: 'lrn-ss-list', key: 'details' },
            h('summary', null, 'Details'),
            readingLines(record).map(line => h('p', { key: line }, line))
          ),
          next(() => send({ t: 'next' }))
        ]
      case 'note':
        return [h('p', { key: 'note' }, item.text), next(() => send({ t: 'next' }))]
      case 'example':
        return example(this.#problem(record, item.id), item, day, course, record)
      case 'recall':
      case 'mixed':
      case 'new':
      case 'rules':
        return isRulesItem(item.id)
          ? this.#rules(this.#entry(item.id), record, item, day)
          : this.#problemScreen(this.#problem(record, item.id), record, item, day, course)
      default:
        return unreachable(item)
    }
  }

  /**
   * A rules item by its id; the course holds every rules item the record names.
   * @param {string} id
   */
  #entry(id) {
    const entry = this.items[id]
    assert(entry, `The course holds every rules item the record names: ${id}`)
    return entry
  }

  /**
   * A problem by its id, from the bank or the learner's own games.
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {string} id
   */
  #problem(record, id) {
    const problem = bankOf(this.problems, record)[id]
    assert(problem, `The bank holds every problem the record names: ${id}`)
    return problem
  }

  /**
   * A problem asked, then its verdict and solution. Nothing of the solution shows until an answer is given.
   * @param {import('../core/decode.logic.js').Problem} problem
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/decode.logic.js').Asked | import('../core/decode.logic.js').Judged} item
   * @param {string} day
   * @param {import('../core/own.logic.js').Course} course
   */
  #problemScreen(problem, record, item, day, course) {
    const f = this.#f
    if ('right' in item)
      return [asked(problem), judged(item), solution(problem, course), next(() => send({ t: 'next' }))]
    const judge = judger(item, day)
    /** @param {SubmitEvent} e */
    const submit = e => {
      e.preventDefault()
      const m = readMove(f.move)
      const r = f.result.trim().toLowerCase()
      if (!m) return this.#set(f, { why: POINT_WHY })
      const lack = pointLack(problem, m)
      if (lack) return this.#set(f, { why: lack })
      if (!RESULT_WORDS.some(w => w === r))
        return this.#set(f, { why: 'Type the result as one word: lives, dies, ko, or seki.' })
      judge(isRight(problem, m, r), `${m}, ${r}`)
    }
    /** @param {string} at */
    const pick = at => {
      if (problem.black.includes(at) || problem.white.includes(at)) return
      this.#set(f, { move: at, why: '' })
    }
    return [
      asked(problem, { onPoint: pick, chosen: named(f.move, problem).slice(0, 1) }),
      h(
        'form',
        { key: 'form', onsubmit: submit, novalidate: true },
        h(
          'div',
          { class: 'go-fields' },
          field({
            id: 'go-move',
            label: 'The first move: click its point, or type it, such as D4',
            value: f.move,
            onChange: v => this.#set(f, { move: v }),
            why: f.why,
            capitals: true
          }),
          field({
            id: 'go-result',
            label: 'The result: lives, dies, ko, or seki',
            value: f.result,
            onChange: v => this.#set(f, { result: v }),
            why: f.why
          })
        ),
        why(f.why),
        stuck(record),
        answering(() => judge(false, ''))
      )
    ]
  }

  /**
   * A rules item: the diagram, the question, a typed answer, then the answer and the rule's words.
   * @param {import('../core/decode.logic.js').RulesItem} entry
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/decode.logic.js').Asked | import('../core/decode.logic.js').Judged} item
   * @param {string} day
   */
  #rules(entry, record, item, day) {
    const f = this.#f
    // an answer of points may be given by clicking them, each click adding a point or taking it out
    const pointed = !/^\d+$/.test(entry.answer) && entry.answer !== 'yes' && entry.answer !== 'no'
    const open = !('right' in item) && pointed
    const question = [
      h('p', null, entry.question),
      board({
        diagram: entry.position,
        ...(open
          ? {
              onPoint: (/** @type {string} */ at) => this.#set(f, { typed: toggled(f.typed, at) }),
              chosen: named(f.typed, entry.position)
            }
          : {})
      })
    ]
    if ('right' in item)
      return [
        question,
        judged(item),
        h('p', { key: 'answer' }, 'Answer: ', entry.answer, '.'),
        h('p', { key: 'rule' }, entry.rule),
        next(() => send({ t: 'next' }))
      ]
    const judge = judger(item, day)
    /** @param {SubmitEvent} e */
    const submit = e => {
      e.preventDefault()
      if (!f.typed.trim()) return this.#set(f, { why: 'Type the answer.' })
      const lack = formLack(f.typed, entry.answer)
      if (lack) return this.#set(f, { why: lack })
      judge(sameAnswer(f.typed, entry.answer), f.typed.trim())
    }
    return [
      question,
      h(
        'form',
        { key: 'form', onsubmit: submit, novalidate: true },
        h(
          'div',
          { class: 'go-fields' },
          field({
            id: 'go-rule',
            label: pointed ? 'Your answer: click the points, or type them' : 'Your answer',
            value: f.typed,
            onChange: v => this.#set(f, { typed: v }),
            why: f.why
          })
        ),
        why(f.why),
        stuck(record),
        answering(() => judge(false, ''))
      )
    ]
  }

  /**
   * The engine's loss for a typed review move, asked once its line shows and kept when the
   * answer comes, on this page or after it.
   * @param {Form} f
   * @param {import('../core/decode.logic.js').Game} game
   * @param {number} index
   * @param {import('../core/decode.logic.js').Entry} entry
   */
  async #lossOf(f, game, index, entry) {
    const { engine } = goView().record
    const answer = engine && (await askEngine(engine.address, queryFor(engine, game, entry.move - 1, entry.typed)))
    if (answer && answer.ok) {
      const lossPts = typedLoss(game, entry, entry.typed, answer.value.scoreLead)
      send({ t: 'review-loss', game: game.id, index, typed: entry.typed, lossPts })
    } else if (this.#f === f) this.#set(f, { loss: 'failed' })
  }

  /**
   * A review position: the whole board before the learner's move, a field for the move, and only
   * then the engine's line as a still diagram with the points each move loses. The line shows at
   * once; the typed move's own loss follows when the engine has read it.
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/decode.logic.js').Review | import('../core/decode.logic.js').Reviewed} item
   */
  #review(record, item) {
    const { index } = item
    const game = record.games.find(g => g.id === item.game)
    const entry = game?.list?.[index]
    const before = entry && game ? boardBefore(game, entry.move - 1) : null
    // A position whose game does not replay is left out, and the list moves on.
    if (!before || !game || !entry)
      return [
        h('p', null, 'The game record does not replay, so Eruko leaves this position out.'),
        next(() => send(entry && game ? { t: 'review-left-out', game: game.id, index } : { t: 'next' }))
      ]
    const mover = colours(game)[entry.move - 1]
    const head = h(
      'p',
      null,
      'Game of ',
      dayName(game.date),
      ' · move ',
      entry.move,
      ' · ',
      SIDE[mover ?? ''],
      ' plays.',
      !('shown' in item) && ' Click or type your move.'
    )
    return 'shown' in item
      ? this.#reviewLine(head, game, index, entry, diagramOf(before), mover)
      : this.#reviewAsk(head, item, game, entry, before, mover)
  }

  /**
   * A review position answered: the engine's line on a still diagram, the typed move's loss once
   * read, and the game move's.
   * @param {import('../../../parts/view.dom.js').Child} head
   * @param {import('../core/decode.logic.js').Game} game
   * @param {number} index
   * @param {import('../core/decode.logic.js').Entry} entry
   * @param {import('../core/diagram.logic.js').Diagram} diagram the board before the learner's move
   * @param {import('../core/decode.logic.js').Colour | undefined} mover
   */
  #reviewLine(head, game, index, entry, diagram, mover) {
    const f = this.#f
    /** @type {{ side: 'B' | 'W', at: string | null }[]} */
    const line = entry.line.map((at, i) => {
      const colour = i % 2 ? (mover === 'black' ? 'white' : 'black') : mover
      return { side: colour === 'black' ? 'B' : 'W', at: at === 'pass' ? null : at }
    })
    const loss = lossOf(entry)
    if (entry.typed !== 'none' && loss === null && !f.loss) {
      f.loss = 'reading'
      void this.#lossOf(f, game, index, entry)
    }
    return [
      head,
      h('go-line-pages', {
        key: `line ${game.id} ${entry.move}`,
        '.position': diagram,
        '.moves': line,
        '.lines': line.map((m, i) => `${i + 1}. ${SIDE[m.side]} ${m.at ?? 'passes'}.`)
      }),
      h(
        'p',
        { key: 'typed' },
        entry.typed === 'none'
          ? 'You skipped this position.'
          : loss !== null
            ? `Your move ${entry.typed}: ${points(loss)} points lost.`
            : f.loss === 'failed'
              ? `Your move ${entry.typed}: the engine did not answer, so the move's loss is not known.`
              : `Your move ${entry.typed}: the engine is reading it.`
      ),
      h('p', { key: 'game' }, 'Game move ', entry.game, ': ', points(entry.gameLoss), ' points lost.'),
      next(() => send({ t: 'next' }))
    ]
  }

  /**
   * A review position asked: the board before the learner's move, the last move marked, and the
   * field for the move, which must be legal there.
   * @param {import('../../../parts/view.dom.js').Child} head
   * @param {import('../core/decode.logic.js').Review} item
   * @param {import('../core/decode.logic.js').Game} game
   * @param {import('../core/decode.logic.js').Entry} entry
   * @param {import('../core/rules.logic.js').Board} before
   * @param {import('../core/decode.logic.js').Colour | undefined} mover
   */
  #reviewAsk(head, item, game, entry, before, mover) {
    const f = this.#f
    const diagram = diagramOf(before)
    // the opponent's move just played, marked and said first
    const previous = game.moves[entry.move - 2]
    const last = previous && previous !== 'pass' ? previous : undefined
    /**
     * @param {string} typed
     * @param {number | null} lossPts
     */
    const keep = (typed, lossPts) => send({ t: 'review-move', item, typed, lossPts })
    /** @param {SubmitEvent} e */
    const submit = e => {
      e.preventDefault()
      const m = readMove(f.typed)
      const p = m && parseCoord(m)
      if (!m || !p) return this.#set(f, { why: POINT_WHY })
      const [x, y] = p
      if (x >= before.w || y >= before.h) return this.#set(f, { why: 'That point is not on this board.' })
      const at = y * before.w + x
      if (before.cells[at]) return this.#set(f, { why: 'A stone stands on that point.' })
      if (!placeStone(before, mover === 'black' ? BLACK : WHITE, at))
        return this.#set(f, { why: 'That move is not legal, because the stone would have no liberty.' })
      // the engine's own move loses nothing; any other is read once its line shows
      keep(m, m === entry.best ? 0 : null)
    }
    /** @param {string} at */
    const pick = at => {
      const p = parseCoord(at)
      if (!p || before.cells[p[1] * before.w + p[0]]) return
      this.#set(f, { typed: at, why: '' })
    }
    return [
      head,
      board({ diagram, plays: `${SIDE[mover ?? '']} plays.`, onPoint: pick, chosen: named(f.typed, diagram).slice(0, 1), last }),
      h(
        'form',
        { key: 'form', onsubmit: submit, novalidate: true },
        h(
          'div',
          { class: 'go-fields' },
          field({
            id: 'go-review',
            label: 'Your move: click its point, or type it',
            value: f.typed,
            onChange: v => this.#set(f, { typed: v }),
            why: f.why,
            capitals: true
          })
        ),
        why(f.why),
        actions(
          choice({ label: 'Skip this position', onPress: () => keep('none', null) }),
          choice({ primary: true, type: 'submit', label: 'Check' })
        )
      )
    ]
  }

  /**
   * The games "Game ended" reads: a practice game by its number, else every game of the player's
   * ended since set-up that the record does not hold. A sentence when none can be read.
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/decode.logic.js').Server} server
   * @param {import('../core/decode.logic.js').GameId | null} number
   * @returns {Promise<import('../core/decode.logic.js').GameDetail[] | string>}
   */
  async #endedGames(record, server, number) {
    const known = new Set(record.games.map(g => g.id))
    // Only games ended since set-up are read: what the account played before is not this course's.
    const ended = number === null ? await readEnded(server.id) : null
    if (ended && !ended.ok) return serverSays(ended.error)
    const wanted = ended
      ? ended.value.filter(g => !known.has(g.id) && (!server.since || studyDay(Date.parse(g.ended)) >= server.since)).map(g => g.id)
      : number === null
        ? []
        : [number]
    const details = await Promise.all(wanted.map(n => readGame(n)))
    const failed = details.find(d => !d.ok)
    if (failed && !failed.ok) return serverSays(failed.error)
    return details.flatMap(d => (d.ok && d.value.ended && (d.value.black === server.id || d.value.white === server.id) ? [d.value] : []))
  }

  /**
   * "Game ended": the server's record is read, and the game kept. `number` is a practice game's own.
   * @param {Wait} wait
   * @param {string} day
   * @param {boolean} practice
   * @param {string} [typed]
   */
  async #ended(wait, day, practice, typed = '') {
    this.#set(wait, { why: '' })
    const number = readGameNumber(typed)
    if (practice && number === null)
      return this.#set(wait, {
        why: "Type the game number, or paste the game's address. The number is the digits at the end of the address."
      })
    this.#set(wait, { busy: true })
    const read = await this.#readEnded(practice ? number : null)
    if (typeof read === 'string') this.#set(wait, { why: read })
    else if (!read.games.length)
      this.#set(wait, {
        why: practice
          ? 'The server shows no ended game of yours with that number.'
          : 'Eruko has read every game of yours that has ended since set-up. Press again once the game has ended.'
      })
    else send({ t: 'games-ended', games: read.games, player: read.player, day, practice })
    this.#set(wait, { busy: false })
  }

  /**
   * The player and the games "Game ended" reads, or why they cannot be read.
   * @param {import('../core/decode.logic.js').GameId | null} number a practice game's number
   * @returns {Promise<string | { player: import('../core/decode.logic.js').Player, games: import('../core/decode.logic.js').Game[] }>}
   */
  async #readEnded(number) {
    const { record } = goView()
    const { server } = record
    if (!server) return 'No server is set up.'
    const player = await readPlayer(server.user)
    if (!player.ok) return serverSays(player.error)
    const mine = await this.#endedGames(record, server, number)
    return typeof mine === 'string' ? mine : { player: player.value, games: mine.map(d => gameOf(d, server.id)) }
  }

  /**
   * The settings of a rated game, as the server's challenge form names them: listed in full
   * until one rated game is on the record, and after it folded behind the rank range, which
   * moves with the rating while the server keeps the rest from the last challenge.
   * @param {import('../core/decode.logic.js').GoRecord} record
   */
  #ratedSettings(record) {
    const server = this.#server
    const { read } = record.position
    const first = ratedCount(record) === 0
    const rank = rankText(read, server.busy)
    const ranged = read && Number.isFinite(read.rating)
    return [
      first
        ? ratedList(rank, first)
        : [
            h('p', { key: 'same' }, `Same settings as last time, with the ${rank}.`),
            h('details', { class: 'lrn-ss-list', key: 'all' }, h('summary', null, 'All the settings'), ratedList(rank, first))
          ],
      !ranged &&
        !server.busy &&
        h('div', { class: 'actions', key: 'again' }, choice({ label: 'Read the server again', onPress: server.again }))
    ]
  }

  /**
   * The game: what to post, then "Game ended", which reads the record.
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/decode.logic.js').GameStep} item
   * @param {string} day
   */
  #game(record, item, day) {
    const f = this.#f
    const wait = f.ended
    const skip = choice({ label: 'Skip the game today', onPress: () => send({ t: 'skip-game', day }) })
    /** @param {string} number */
    const ended = number =>
      choice({
        primary: true,
        onPress: () => void this.#ended(wait, day, item.practice, number),
        disabled: wait.busy,
        why: READING_SERVER,
        label: 'Game ended'
      })
    if (item.practice)
      return [
        practiceText(),
        h(
          'div',
          { class: 'go-fields' },
          field({
            id: 'go-number',
            label: "The game's number or address, when the game has ended",
            value: f.number,
            onChange: v => this.#set(f, { number: v }),
            why: wait.why
          })
        ),
        why(wait.why),
        busy(wait.busy && READING_SERVER),
        actions(skip, ended(f.number))
      ]
    const first = ratedCount(record) === 0
    return [
      h('p', null, 'Play one rated game on ', ogs(), ' when you have an hour free. Post an open challenge', first ? ' with these settings:' : '.'),
      this.#ratedSettings(record),
      ratedText(first),
      why(wait.why),
      busy(wait.busy && READING_SERVER),
      h(
        'div',
        { class: 'actions', key: 'ways' },
        skip,
        choice({ label: 'Challenge posted', onPress: () => send({ t: 'post-game', day }) }),
        ended('')
      )
    ]
  }

  /**
   * A posted challenge no one has accepted: the list goes on, and this stays under the item open.
   * @param {Wait} wait
   * @param {string} day
   */
  #postedScreen(wait, day) {
    return [
      postedText(),
      why(wait.why, 'go-posted-why'),
      busy(wait.busy && READING_SERVER),
      actions(
        choice({ label: 'Challenge withdrawn', onPress: () => send({ t: 'skip-game', day }) }),
        choice({
          onPress: () => void this.#ended(wait, day, false),
          disabled: wait.busy,
          why: READING_SERVER,
          label: 'Game ended'
        })
      )
    ]
  }

  /**
   * The practice game's count: the final board, a field for the learner's area count, then
   * Eruko's count of the server's final board. A wrong count may be counted again on the same
   * board, or Eruko's count shown.
   * @param {import('../core/decode.logic.js').GoRecord} record
   * @param {import('../core/decode.logic.js').Count | import('../core/decode.logic.js').Counted | import('../core/decode.logic.js').CountShown} item
   * @param {string} day
   */
  #count(record, item, day) {
    const game = record.games.find(g => g.id === item.game)
    // the decoder keeps a count open only on a game the record holds
    if (!game) return [h('p', null, 'That game is no longer on the record.'), next(() => send({ t: 'next' }))]
    if ('right' in item) return counted(game, item)
    const f = this.#f
    /** @param {SubmitEvent} e */
    const submit = e => {
      e.preventDefault()
      const typed = readCount(f.typed)
      if (typed === null) return this.#set(f, { why: 'Type your count as a whole number.' })
      send({ t: 'counted', game: game.id, typed, day })
    }
    return h(
      'form',
      { key: 'form', onsubmit: submit, novalidate: true },
      h(
        'p',
        null,
        'Game ',
        game.id,
        ' · you played ',
        SIDE[game.colour],
        '. Count the final board below by area. The crossed stones are dead, so take them off first. Your area is your stones on the board plus the empty points that reach only your colour.'
      ),
      finalBoard(game),
      h(
        'div',
        { class: 'go-fields' },
        field({ id: 'go-count', label: 'Your area count', value: f.typed, onChange: v => this.#set(f, { typed: v }), why: f.why })
      ),
      why(f.why),
      actions(choice({ primary: true, type: 'submit', label: 'Check' }))
    )
  }
}
customElements.define('go-work-list', GoWorkList)

/**
 * A practice game's count judged: the verdict, the count typed, and Eruko's count, kept back
 * after a wrong count until the learner asks for it.
 * @param {import('../core/decode.logic.js').Game} game
 * @param {import('../core/decode.logic.js').Counted | import('../core/decode.logic.js').CountShown} item
 */
function counted(game, item) {
  const checked = item.count !== null
  const hidden = checked && !item.right && !('shown' in item)
  return [
    checked && verdict(item.right),
    h('p', { key: 'count' }, 'Your count: ', item.typed, '.'),
    hidden
      ? [
          finalBoard(game),
          actions(
            choice({ label: "Show Eruko's count", onPress: () => send({ t: 'open', item: { ...item, shown: true } }) }),
            choice({
              primary: true,
              label: 'Count again',
              onPress: () => send({ t: 'open', item: { n: 3, step: 'count', game: game.id } })
            })
          )
        ]
      : [
          h(
            'p',
            { key: 'aether' },
            checked
              ? `Eruko's count of the server's final board: ${item.count}.`
              : 'Eruko cannot check this count because the game record does not replay.'
          ),
          checked && !item.right && parts(game),
          next(() => send({ t: 'next' }))
        ]
  ]
}

/**
 * The final board of a practice game, with the stones the server took off as dead marked;
 * nothing when the record does not replay.
 * @param {import('../core/decode.logic.js').Game} game
 */
function finalBoard(game) {
  const before = boardBefore(game)
  return before && board({ diagram: diagramOf(before), dead: game.removed.filter(p => p !== 'pass') })
}

/**
 * Eruko's count in its two parts, so a wrong count shows whether the stones or the empty points
 * were off; nothing when the record does not replay.
 * @param {import('../core/decode.logic.js').Game} game
 */
function parts(game) {
  const p = areaParts(game)
  return (
    p &&
    h(
      'p',
      { key: 'parts' },
      `That is ${p.stones} of your stones on the board and ${p.empty} empty points that reach only your colour.`
    )
  )
}

/**
 * The open kind's first problem, shown solved: a worked example, read and never asked.
 * @param {import('../core/decode.logic.js').Problem} problem
 * @param {import('../core/decode.logic.js').Example} item
 * @param {string} day
 * @param {import('../core/own.logic.js').Course} course
 * @param {import('../core/decode.logic.js').GoRecord} record
 */
function example(problem, item, day, course, record) {
  const kind = course.kinds.find(k => k.id === item.kind)
  const first = noKindBegun(course, record)
  return [
    first && h('p', { class: 'lrn-ss-note', key: 'how' }, 'Read the first problem of each kind with its solution.'),
    asked(problem),
    solution(problem, course),
    kind?.term && h('p', { key: 'term' }, kind.term),
    first && RESULTS.map(line => h('p', { key: line }, line)),
    next(() => send({ t: 'example-read', kind: item.kind, day }))
  ]
}

/**
 * Nothing left: the sentence, then why, and where to go.
 * @param {import('../core/decode.logic.js').GoRecord} record
 * @param {string} day
 */
function nothingLeft(record, day) {
  const { later } = restOf(record, day)
  return [
    h('p', null, 'Nothing left.'),
    later && h('p', { key: 'later' }, 'The next item comes back on ', dayName(later), '.'),
    !(record.engine && record.server) &&
      h('p', { key: 'start' }, 'Games and their review wait on ', h('a', { href: linkTo(`${HOME}/start`) }, 'Start'), '.'),
    h('p', { key: 'home' }, h('a', { href: linkTo(HOME) }, 'Go to Go course'))
  ]
}
