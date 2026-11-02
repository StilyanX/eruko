// Hides: the number-facts gate. Every fact of one operation, first untimed until each fact is
// right, then timed with no clock shown. A sheet with errors is followed by a sheet of only its
// missed facts, until each is right. The sheet in hand is kept in the facts record (`sheet`), so a
// reload or a break returns to it. A timed sheet's time is the time worked, and a pause over a
// minute counts as a minute.
import { count, dayName } from '../../../kernel/days.logic.js'
import {
  FACT_KEYS,
  SHEET_PAGE,
  allFactsPassed,
  factNext,
  factStep,
  factsPassed,
  sheetHeld,
  sheetMisses,
  slowSheet
} from '../../../kernel/facts.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import {
  PRIMARY,
  StepScreen,
  actionsAs,
  choice,
  whereIn,
  step,
  turn,
  verdict
} from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { facts, factsNow, send } from '../core/session.dom.js'

/** @type {Readonly<Record<import('../../../kernel/facts.logic.js').Operation, string>>} */
const OPS = {
  addition: 'Addition',
  subtraction: 'Subtraction',
  multiplication: 'Multiplication',
  division: 'Division'
}

/** @param {number} seconds */
const minSec = seconds => `${Math.floor(seconds / 60)} min ${seconds % 60} s`

/**
 * What follows a checked sheet, read from the record it left.
 * @param {import('../../../kernel/facts.logic.js').FactRecord | undefined} rec
 */
function nextSheet(rec) {
  if (rec?.misses?.length)
    return rec.missFrom === 'return'
      ? 'Tomorrow: only the facts you missed. Get them right and it stays passed.'
      : 'Next: only the facts you missed, until each is right.'
  if (rec?.clean && !factsPassed(rec))
    return rec.cleanSeconds === undefined
      ? 'Next: the timed sheet.'
      : `Next: the timed sheet. It must take no longer than your untimed sheet: ${minSec(rec.cleanSeconds)}.`
  return ''
}

/**
 * Where one operation stands, in the plan.
 * @param {import('../../../kernel/facts.logic.js').FactsRecord} all
 * @param {import('../../../kernel/facts.logic.js').Operation} op
 * @param {string} day
 */
function standing(all, op, day) {
  const rec = all[op] ?? {}
  const step = factStep(all, op, day)
  if (rec.misses?.length) {
    const missed = count(rec.misses.length, 'fact', 'facts')
    const next = factNext(rec)
    return step === 'misses'
      ? `${missed} you missed next.`
      : `${missed} you missed${next ? `, on ${dayName(next)}` : ''}.`
  }
  if (factsPassed(rec)) {
    const next = factNext(rec)
    if (step === 'return') return 'Passed. The sheet is due today.'
    return next ? `Passed. Next sheet on ${dayName(next)}.` : 'Passed.'
  }
  if (!rec.clean) return 'Untimed sheet next.'
  const slow = slowSheet(rec)
  return (
    'Untimed sheet done. Timed sheet next.' +
    (slow !== null && rec.cleanSeconds !== undefined
      ? ` Your timed sheet was slower than the untimed one: ${minSec(slow)} against ${minSec(rec.cleanSeconds)}.`
      : '')
  )
}

/** Typing continues from the new page's first field. */
const firstField = () =>
  requestAnimationFrame(() => {
    const el = document.querySelector('.lrn-ss-sheet input')
    if (el instanceof HTMLElement) el.focus()
  })

export class ArithmeticFactDrill extends StepScreen {
  /** Whether the stored sheet could not be worked, at the last draw. @type {boolean | undefined} */
  #stale = undefined

  setup() {
    this.watch(facts)
    this.watch(clock)
  }

  /** The sheet in hand, or null when there is none that can be worked today. */
  #sheet() {
    const all = factsNow()
    return sheetHeld(all.sheet, all, today()) ? all.sheet : null
  }

  // A stored sheet that cannot be worked is dropped. A sheet in hand restarts its clock on return.
  drawn() {
    super.drawn()
    const sheet = this.#sheet()
    const stale = Boolean(factsNow().sheet) && !sheet
    if (stale === this.#stale) return
    const first = this.#stale === undefined
    this.#stale = stale
    if (stale) send({ t: 'sheet-drop' })
    else if (sheet && first && !sheet.result) send({ t: 'sheet-return', nowMs: Date.now() })
  }

  /** @param {import('../../../kernel/facts.logic.js').Operation} op */
  #begin(op) {
    const draws = Array.from({ length: 121 }, Math.random)
    send({ t: 'sheet-begin', op, draws, nowMs: Date.now(), day: today() })
    this.focusSoon('h3')
  }

  #check() {
    send({ t: 'sheet-check', nowMs: Date.now(), day: today() })
    this.focusSoon('h3')
  }

  /** @param {number} page */
  #page(page) {
    send({ t: 'sheet-page', page, nowMs: Date.now() })
    firstField()
  }

  /**
   * Enter in a field goes to the next field or the next page; on the sheet's last field it checks.
   * @param {KeyboardEvent} e
   * @param {number} page
   * @param {number} pages
   */
  #enter(e, page, pages) {
    if (e.key !== 'Enter') return
    e.preventDefault()
    // A held Enter moves no further: it would run through the fields and check the sheet.
    if (e.repeat) return
    const li = e.currentTarget instanceof Element ? e.currentTarget.closest('li') : null
    const nextInput = li?.nextElementSibling?.querySelector('input')
    if (nextInput) nextInput.focus()
    else if (page + 1 < pages) this.#page(page + 1)
    else this.#check()
  }

  /**
   * One fact of the sheet and its field.
   * @param {import('../../../kernel/facts.logic.js').Sheet} sheet
   * @param {number} i its place on the sheet
   * @param {number} pages
   */
  #fact(sheet, i, pages) {
    const [q] = sheet.rows[i] ?? ['']
    return h(
      'li',
      { key: i },
      h(
        'label',
        null,
        h('span', { class: 'lrn-ss-n' }, i + 1, '.'),
        h('span', null, q, ' ='),
        h('input', {
          class: 'field field-num',
          inputmode: 'numeric',
          autocomplete: 'off',
          '.value': sheet.answers[i] ?? '',
          oninput: (/** @type {Event} */ e) => {
            if (e.target instanceof HTMLInputElement)
              send({ t: 'sheet-answer', index: i, value: e.target.value.trim(), nowMs: Date.now() })
          },
          onkeydown: (/** @type {KeyboardEvent} */ e) => this.#enter(e, sheet.page, pages)
        })
      )
    )
  }

  /**
   * A sheet in hand: one page of its facts, and the turn to the next page or Check.
   * @param {import('../../../kernel/facts.logic.js').Sheet} sheet
   */
  #working(sheet) {
    const { rows, answers, page } = sheet
    const from = page * SHEET_PAGE
    const pages = Math.ceil(rows.length / SHEET_PAGE)
    const blanks = rows.filter((_, i) => !(answers[i] ?? '').trim()).length
    return [
      whereIn('Page', page + 1, pages),
      h(
        'p',
        { class: 'lrn-ss-note' },
        sheet.timed
          ? 'Work as fast as you can. The time appears after the sheet. A pause over a minute counts as a minute.'
          : 'Get every fact right.'
      ),
      h(
        'ol',
        { class: 'lrn-ss-sheet', start: from + 1 },
        rows.slice(from, from + SHEET_PAGE).map((_, k) => this.#fact(sheet, from + k, pages))
      ),
      page === pages - 1 &&
        blanks > 0 &&
        h(
          'p',
          { class: 'lrn-ss-note' },
          count(blanks, 'fact is', 'facts are'),
          ' blank. A blank counts as an error.'
        ),
      turn({
        label: 'Sheet pages',
        at: page,
        count: pages,
        onTurn: n => this.#page(n),
        last: h(
          'button',
          { type: 'button', class: PRIMARY, onclick: () => this.#check() },
          'Check'
        )
      })
    ]
  }

  /**
   * A checked sheet: its errors, its time and rate against the last, its missed facts, and what is next.
   * @param {import('../../../kernel/facts.logic.js').Sheet} sheet
   * @param {import('../../../kernel/facts.logic.js').SheetResult} r
   */
  #checked(sheet, r) {
    const rec = factsNow()[sheet.op]
    const perMin = sheet.timed ? rec?.timed?.at(-1)?.perMin : undefined
    const lastSeconds = r.last?.seconds
    const lastRate = r.last?.perMin
    const next = nextSheet(rec)
    return [
      verdict(r.errors === 0, r.errors === 0 ? 'No errors.' : `${count(r.errors, 'error', 'errors')}.`),
      sheet.timed && [
        h(
          'p',
          null,
          'Time: ',
          minSec(r.seconds),
          '.',
          lastSeconds === undefined ? '' : ` Last time: ${minSec(lastSeconds)}.`
        ),
        h(
          'p',
          null,
          'Rate: ',
          perMin,
          ' a minute.',
          lastRate === undefined ? '' : ` Last time: ${lastRate} a minute.`
        )
      ],
      r.errors > 0 &&
        h(
          'ul',
          { key: 'misses', class: 'lrn-ss-plan' },
          sheetMisses(sheet.rows, sheet.answers).map(([i, q, a]) =>
            h(
              'li',
              { key: i },
              q,
              ' = ',
              a,
              h('span', null, 'you wrote ', (sheet.answers[i] ?? '').trim() || 'nothing')
            )
          )
        ),
      next && h('p', { key: 'next' }, next),
      actionsAs('done', choice({ primary: true, label: 'Done', onPress: () => send({ t: 'sheet-done' }) }))
    ]
  }

  /** @param {import('../../../kernel/facts.logic.js').Sheet} sheet */
  #sheetView(sheet) {
    const { rows, result } = sheet
    return step([
      h(
        'h3',
        { tabindex: '-1' },
        OPS[sheet.op],
        ': ',
        sheet.misses
          ? `the ${count(rows.length, 'fact', 'facts')} you missed`
          : `${sheet.timed ? 'timed' : 'untimed'} sheet, ${rows.length} facts`
      ),
      result ? this.#checked(sheet, result) : this.#working(sheet)
    ])
  }

  view() {
    const sheet = this.#sheet()
    if (sheet) return this.#sheetView(sheet)
    const all = factsNow()
    const day = today()
    const first = FACT_KEYS.flatMap(op => {
      const s = factStep(all, op, day)
      return s ? [{ op, step: s }] : []
    })[0]
    return step([
      h(
        'ul',
        { key: 'plan', class: 'lrn-ss-plan' },
        FACT_KEYS.map(op =>
          h('li', { key: op }, h('span', null, OPS[op]), h('span', null, standing(all, op, day)))
        )
      ),
      first
        ? actionsAs(
            'start',
            choice({
              primary: true,
              label:
                first.step === 'misses'
                  ? `Drill the ${OPS[first.op].toLowerCase()} facts you missed`
                  : `Start the ${first.step === 'untimed' ? 'untimed' : 'timed'} ${OPS[first.op].toLowerCase()} sheet`,
              onPress: () => this.#begin(first.op)
            })
          )
        : h(
            'p',
            { class: 'lrn-ss-note' },
            allFactsPassed(all)
              ? 'Every sheet passed. Each comes back on its date.'
              : 'Nothing left today. Number facts continue tomorrow.'
          )
    ])
  }
}
customElements.define('arithmetic-fact-drill', ArithmeticFactDrill)
