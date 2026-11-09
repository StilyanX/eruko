// Hides: the screen of arithmetic's end level. Where each line stands; then the line in hand's
// sheet, one problem at a time, each entry locked by Enter, an estimate's product shown only once
// the estimate and the calculator's display are in; then every answer retyped, the retyping time
// taken off; then the errors, the time, the line's bar and what is next. The sheet in hand is kept
// in the unit's record (`end.sheet`), so a reload or a break returns to it.
import { count, dayName } from '../../../kernel/days.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { StepScreen, actionsAs, choice, step, verdict, whereIn } from '../../../parts/study.dom.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { h } from '../../../parts/view.dom.js'
import { drillToday } from '../../../kernel/facts.logic.js'
import {
  drillLine,
  lineInHand,
  lineNext,
  linePassed,
  problemTimes,
  sheetErrors,
  sheetHeld
} from '../core/end-level.logic.js'
import {
  LINES,
  answersOf,
  entriesOf,
  entriesRight,
  lineOf,
  productOf,
  questionOf
} from '../core/end-lines.logic.js'
import { facts, factsNow, math, mathNow, send } from '../core/session.dom.js'
import { endGate } from '../core/unit.logic.js'

/** The end level's gate today, from the unit's record and the number facts'. */
const gateNow = () => endGate({ math: math.get(), facts: facts.get() }, today())

/** @type {Readonly<Record<import('../core/end-level.logic.js').SheetKind, string>>} */
const KINDS = {
  untimed: 'untimed sheet',
  timed: 'timed sheet',
  return: 'check sheet',
  misses: 'the problems you missed'
}

/** @param {number} ms a time, in seconds to one place */
function time(ms) {
  const s = Math.round(ms / 100) / 10
  return s >= 60 ? `${Math.floor(s / 60)} min ${(s % 60).toFixed(1)} s` : `${s.toFixed(1)} s`
}

/**
 * What a line's sheet asks, said once above its problems.
 * @param {import('../core/end-lines.logic.js').LineKind} kind
 */
function howTo(kind) {
  switch (kind) {
    case 'pace':
      return 'Answer from memory. No calculator.'
    case 'product':
      return 'Work each product in your head by Vertically and Crosswise. Type each column total, units column first, then the product. No calculator.'
    case 'estimate':
      return 'Type your estimate first: it locks when you press Enter. Then key the product on your calculator and type what it shows.'
    case 'pi':
      return 'Multiply 3.14159 by the number in your head and type the result. No calculator.'
    case 'factor':
      return 'Factor by trial division. Type the prime factors from the smallest up, each as often as it divides, with spaces between. For a prime number, type prime. No calculator.'
    default:
      return unreachable(kind)
  }
}

/**
 * Where one line stands: what it opens on, the line it waits for, or its sheets.
 * @param {import('../core/end-level.logic.js').EndRecord} end
 * @param {import('../core/end-lines.logic.js').LineId} id
 * @param {import('../core/end-level.logic.js').Gate} gate
 */
function standing(end, id, gate) {
  const rec = end.lines?.[id]
  const next = lineNext(rec)
  const { opens } = lineOf(id)
  if (!gate.open.includes(id))
    return 'set' in opens
      ? `Opens once you pass the ${opens.set} facts.`
      : `Opens once you pass every set of number facts and finish ${opens.section}.`
  const hand = drillLine(end, gate)
  if (!linePassed(rec) && hand !== id && hand) return `Opens after you pass ${lineOf(hand).title}.`
  if (rec?.misses?.length)
    return `${count(rec.misses.length, 'problem', 'problems')} you missed${next ? `, on ${dayName(next)}` : ' next'}.`
  if (linePassed(rec)) return next ? `Passed. Back for a check on ${dayName(next)}.` : 'Passed.'
  if (!rec?.clean) return 'Untimed sheet next.'
  return `Timed sheet next: no longer than ${time(rec.cleanMs ?? 0)}.`
}

/**
 * A timed sheet's bars, each with its measure and whether it held.
 * @param {readonly import('../core/end-level.logic.js').Bar[]} bars
 */
const barList = bars =>
  h(
    'ul',
    { class: 'lrn-ss-plan', key: 'bars' },
    bars.map(b =>
      h(
        'li',
        { key: b.name },
        h('span', null, b.name),
        h(
          'span',
          null,
          b.ratio
            ? `a typical problem took ${Math.round(b.value * 100)}% of the time it allows, at most 100%: ${b.ok ? 'met' : 'too slow'}`
            : `${time(b.value)}${b.mean ? ' a problem' : ''}, at most ${time(b.limit)}: ${b.ok ? 'met' : 'too slow'}`
        )
      )
    )
  )

/**
 * The problems missed on a sheet, each wrong entry with its answer and what you wrote.
 * @param {import('../core/end-level.logic.js').EndSheet} s
 */
const missedList = s =>
  h(
    'ul',
    { class: 'lrn-ss-plan', key: 'missed' },
    s.problems.flatMap((p, i) => {
      const rights = entriesRight(s.line, p, s.typed[i] ?? [])
      if (rights.every(Boolean)) return []
      const answers = answersOf(s.line, p)
      const wrong = entriesOf(s.line, p).flatMap((label, j) =>
        rights[j] ? [] : [`${label}: ${answers[j]}, you wrote ${(s.typed[i]?.[j] ?? '').trim() || 'nothing'}`]
      )
      return [h('li', { key: i }, questionOf(s.line, p), h('span', null, wrong.join('; ')))]
    })
  )

/** Typing goes on in the entry in hand. */
const focusLive = () =>
  requestAnimationFrame(() => {
    const el = document.querySelector('arithmetic-end-sheet input[data-live]')
    if (el instanceof HTMLInputElement && document.activeElement !== el) el.focus()
  })

export class ArithmeticEndSheet extends StepScreen {
  /** Whether the stored sheet could not be worked, at the last draw. @type {boolean | undefined} */
  #stale = undefined
  /** What is typed in the retyping, and the entry it is for. */
  #draft = { at: '', text: '' }

  setup() {
    this.watch(math)
    this.watch(facts)
    this.watch(clock)
  }

  #end() {
    return mathNow().end ?? {}
  }

  /** The sheet in hand, or null. */
  #sheet() {
    const end = this.#end()
    return sheetHeld(end.sheet, end, today(), gateNow()) ? end.sheet : null
  }

  // A stored sheet that cannot be worked is dropped; a sheet in hand restarts its clock on return.
  drawn() {
    super.drawn()
    const sheet = this.#sheet()
    const stale = Boolean(this.#end().sheet) && !sheet
    if (sheet && !sheet.result) focusLive()
    if (stale === this.#stale) return
    const first = this.#stale === undefined
    this.#stale = stale
    if (stale) send({ t: 'end-drop' })
    else if (sheet && first && !sheet.result) send({ t: 'end-return', nowMs: Date.now() })
  }

  #begin() {
    send({ t: 'end-begin', seed: Math.floor(Math.random() * 2 ** 31), nowMs: Date.now(), day: today(), gate: gateNow() })
    this.focusSoon('h3')
  }

  /**
   * An entry field: the one in hand takes keys; Enter locks it.
   * @param {string} label
   * @param {string} value
   * @param {(value: string) => void} onType
   * @param {() => void} onEnter
   */
  #field(label, value, onType, onEnter) {
    return h(
      'label',
      { class: 'ar-end-entry', key: label },
      h('span', null, label),
      h('input', {
        class: 'field field-num',
        'data-live': '',
        autocomplete: 'off',
        spellcheck: 'false',
        '.value': value,
        oninput: (/** @type {Event} */ e) => {
          if (e.target instanceof HTMLInputElement) onType(e.target.value)
        },
        onkeydown: (/** @type {KeyboardEvent} */ e) => {
          if (e.key !== 'Enter') return
          e.preventDefault()
          onEnter()
        }
      })
    )
  }

  /**
   * The problem in hand: its question, its locked entries, the entry in hand.
   * @param {import('../core/end-level.logic.js').EndSheet} s
   */
  #working(s) {
    const p = s.problems[s.i] ?? []
    const labels = entriesOf(s.line, p)
    const typed = s.typed[s.i] ?? []
    const kind = lineOf(s.line).kind
    return [
      whereIn('Problem', s.i + 1, s.problems.length),
      h('p', { class: 'lrn-ss-note' }, howTo(kind)),
      h(
        'p',
        { class: 'lrn-ss-note' },
        s.kind === 'untimed'
          ? 'Get every answer right.'
          : s.kind === 'misses'
            ? 'Get each one right.'
            : 'Work as fast as you can. Each problem is timed from when it shows to your last key. The time shows after the sheet.'
      ),
      h('p', { class: 'ar-end-question', key: `q${s.i}` }, questionOf(s.line, p), kind === 'pace' ? ' =' : ''),
      h(
        'div',
        { class: 'ar-end-entries', key: `e${s.i}` },
        labels.map((label, j) =>
          j < s.j || s.reveal
            ? h('p', { key: label, class: 'ar-end-locked' }, label, ': ', typed[j] || '(blank)')
            : j === s.j
              ? this.#field(
                  label,
                  typed[j] ?? '',
                  value => send({ t: 'end-type', value, nowMs: Date.now() }),
                  () => send({ t: 'end-enter', nowMs: Date.now(), day: today() })
                )
              : null
        )
      ),
      s.reveal && [
        h('p', { key: 'product' }, 'The product: ', productOf(p), '.'),
        actionsAs(
          'next',
          choice({
            primary: true,
            label: s.i + 1 < s.problems.length ? 'Next' : 'Retype your answers',
            onPress: () => send({ t: 'end-next', nowMs: Date.now(), day: today() })
          })
        )
      ],
      !s.reveal && h('p', { class: 'lrn-ss-note', key: 'enter' }, 'Press Enter to lock each answer and go on.')
    ]
  }

  /**
   * The retyping: each answer you gave, shown to type again.
   * @param {import('../core/end-level.logic.js').EndSheet} s
   */
  #retyping(s) {
    const given = s.typed.flatMap((row, i) => row.flatMap((t, j) => (t.trim() ? [[i, j]] : [])))
    const at = given.findIndex(([i, j]) => i === s.ri && j === s.rj)
    const shown = s.typed[s.ri]?.[s.rj] ?? ''
    return [
      whereIn('Answer', at + 1, given.length),
      h(
        'p',
        { class: 'lrn-ss-note' },
        'Type each answer exactly as it shows. The time you take to type comes off the sheet.'
      ),
      h('p', { class: 'ar-end-question', key: `r${s.ri}-${s.rj}` }, shown),
      this.#field(
        'Retype',
        this.#draft.at === `${s.ri}-${s.rj}` ? this.#draft.text : '',
        value => {
          this.#draft = { at: `${s.ri}-${s.rj}`, text: value }
          send({ t: 'end-retype', value, nowMs: Date.now(), day: today() })
        },
        () => {}
      )
    ]
  }

  /**
   * A checked sheet: errors, time, bars, the problems missed, what is next.
   * @param {import('../core/end-level.logic.js').EndSheet} s
   * @param {import('../core/end-level.logic.js').SheetResult} r
   */
  #checked(s, r) {
    const times = problemTimes(s)
    const { missed } = sheetErrors(s)
    const rec = this.#end().lines?.[s.line]
    return [
      verdict(r.errors === 0, r.errors === 0 ? 'No errors.' : `${count(r.errors, 'error', 'errors')}.`),
      s.kind !== 'misses' && h('p', null, 'Time, with your typing taken off: ', time(r.ms), '.'),
      r.bar !== undefined &&
        h('p', null, 'Your untimed sheet took ', time(r.bar), r.ms <= r.bar ? ': this one was no slower.' : ': this one was slower.'),
      r.bars.length > 0 && barList(r.bars),
      missed.length > 0 && missedList(s),
      r.passed === true &&
        h('p', { key: 'passed' }, s.kind === 'return' ? 'Still passed.' : 'Passed.'),
      rec?.misses?.length
        ? h(
            'p',
            { key: 'next' },
            rec.missFrom === 'return'
              ? 'Tomorrow: only the problems you missed. Get them right and it stays passed.'
              : 'Next: only the problems you missed, until each is right.'
          )
        : s.kind === 'timed' && r.passed === false && h('p', { key: 'next' }, 'Next: another timed sheet.'),
      h('p', { class: 'lrn-ss-note', key: 'mean' }, `Average time a problem: ${time(times.reduce((a, b) => a + b, 0) / Math.max(1, times.length))}.`),
      actionsAs('done', choice({ primary: true, label: 'Done', onPress: () => send({ t: 'end-done' }) }))
    ]
  }

  /** @param {import('../core/end-level.logic.js').EndSheet} s */
  #sheetView(s) {
    const line = lineOf(s.line)
    return step([
      h(
        'h3',
        { tabindex: '-1' },
        line.title,
        ': ',
        s.kind === 'misses' ? `the ${count(s.problems.length, 'problem', 'problems')} you missed` : `${KINDS[s.kind]}, ${count(s.problems.length, 'problem', 'problems')}`
      ),
      s.result ? this.#checked(s, s.result) : s.phase === 'retype' ? this.#retyping(s) : this.#working(s)
    ])
  }

  view() {
    const gate = gateNow()
    if (!gate.open.length) return step(h('p', null, 'The end level opens once you pass the addition facts.'))
    const sheet = this.#sheet()
    if (sheet) return this.#sheetView(sheet)
    const end = this.#end()
    const hand = lineInHand(end, today(), gate)
    return step([
      h(
        'p',
        { key: 'about' },
        'Eleven kinds of problem, each passed the way the number facts are. You work one kind at a time, in the order below. First an untimed sheet: get every answer right. Then a timed sheet: no longer than the untimed one, and inside its own time limit. Problems show one at a time. After each sheet you retype your answers, and the typing time comes off.'
      ),
      h(
        'ul',
        { key: 'plan', class: 'lrn-ss-plan' },
        LINES.map(l => h('li', { key: l.id }, h('span', null, l.title), h('span', null, standing(end, l.id, gate))))
      ),
      hand
        ? actionsAs(
            'start',
            choice({
              primary: true,
              label:
                hand.kind === 'misses'
                  ? `Work the ${lineOf(hand.line).title} problems you missed`
                  : `Start ${lineOf(hand.line).title}: ${KINDS[hand.kind]}`,
              onPress: () => this.#begin()
            })
          )
        : h(
            'p',
            { class: 'lrn-ss-note', key: 'none' },
            LINES.every(l => linePassed(end.lines?.[l.id]))
              ? `All ${LINES.length} passed. Each comes back for a check on its date.`
              : drillLine(end, gate) && drillToday(factsNow(), today())
                ? "The number facts come first today. The end level gets any time left in their hour."
                : 'Nothing left today. The end level continues tomorrow.'
          )
    ])
  }
}
customElements.define('arithmetic-end-sheet', ArithmeticEndSheet)
