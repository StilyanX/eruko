// Hides: the language track's screens on the work list ("A Self-Study System", Programming, The
// track's material, The track's steps; Track submit screen): the worked example, the verdict item
// with a verdict for each level, the count item's table, the item alone and the witness, and what
// each shows once answered: the course's two lines with "levels" or "counts" in place of "tests",
// the first wrong level or count with your answer and the stored one, and the clause under it.
// What is typed is held by the work list's form; each press sends one event (session.dom.js).
import { actionsAs, choice } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import {
  NOT_LOADED,
  busy,
  codeBlock,
  errorText,
  examples,
  heading,
  label,
  printed,
  trackItemNow,
  trackKindNow,
  why
} from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'
import { RUNNER_DOWN } from '../core/session.logic.js'
import { VERDICTS, aloneAsks, slotsTyped, witnessAsks } from '../core/track.logic.js'
import { firstOf, partsOf } from '../core/track-decode.logic.js'

/**
 * What the track's form holds while an item is answered: the verdict typed at each level, the
 * count table's cells, the program or witness typed.
 * @typedef {{ levels: Record<string, import('../core/track.logic.js').LevelAnswer>, cells: string[][], code: string }} TrackForm
 */

/**
 * The track's form, from what the record kept of the item open.
 * @param {string} kept
 * @param {import('../core/track-decode.logic.js').Unit | ''} unit
 * @returns {TrackForm}
 */
export function trackFormOf(kept, unit) {
  /** @type {TrackForm} */
  const form = { levels: {}, cells: [], code: '' }
  if (unit === 'alone' || unit === 'witness') return { ...form, code: kept }
  try {
    const raw = JSON.parse(kept || 'null')
    if (unit === 'verdict' && raw && typeof raw === 'object') form.levels = raw
    if (unit === 'count' && Array.isArray(raw))
      form.cells = raw.map(r => (Array.isArray(r) ? r.map(String) : []))
  } catch {
    return form
  }
  return form
}

/**
 * The text the record keeps of what is typed on a track item.
 * @param {TrackForm} f
 * @param {import('../core/track-decode.logic.js').Unit} unit
 */
export const trackKept = (f, unit) =>
  unit === 'alone' || unit === 'witness'
    ? f.code
    : unit === 'verdict'
      ? Object.keys(f.levels).length
        ? JSON.stringify(f.levels)
        : ''
      : f.cells.some(r => r.some(Boolean))
        ? JSON.stringify(f.cells)
        : ''

/** @param {() => void} onPress */
const next = onPress => actionsAs('next', choice({ primary: true, label: 'Next', onPress }))

/**
 * The clause a verdict rests on, by its stable names: each N4950 name links to the draft at it,
 * since its text is not stored; a guide's section is shown by its name.
 * @param {readonly string[]} names
 */
const clause = names =>
  h(
    'div',
    { key: 'clause' },
    label('The clause'),
    h(
      'p',
      null,
      names.map((n, i) => [
        i > 0 && ', ',
        /^\[[\w.:-]+\]$/.test(n)
          ? h(
              'a',
              {
                href: `https://timsong-cpp.github.io/cppwp/n4950/${n.slice(1, -1)}`,
                target: '_blank',
                rel: 'noreferrer',
                key: n
              },
              n
            )
          : n
      ])
    )
  )

/**
 * A track kind's place, as one line above its screens.
 * @param {import('../core/decode.logic.js').Course} course
 * @param {string} kind
 */
const kindLine = (course, kind) => {
  const k = course.track.find(t => t.id === kind)
  return (
    k &&
    h(
      'p',
      { class: 'lrn-ss-note', key: 'kind' },
      `Track kind ${course.track.indexOf(k) + 1} of ${course.track.length}: ${k.name}.`
    )
  )
}

/**
 * The open track kind's worked example: its lines in groups under their labels, and its clause.
 * @param {import('../core/decode.logic.js').Course} course
 * @param {string} kind
 * @param {string} day
 */
export function trackExample(course, kind, day) {
  const content = trackKindNow(kind)
  const k = course.track.find(t => t.id === kind)
  if (content === 'failed' || !k) return h('p', null, NOT_LOADED)
  if (!content) return null
  return [
    heading('Worked example'),
    kindLine(course, kind),
    codeBlock({
      lines: content.example.lines,
      labels: content.example.labels,
      name: 'The worked example'
    }),
    clause(k.clause),
    next(() => send({ t: 'track-example-read', kind, day }))
  ]
}

/**
 * The open track kind waits for a fresh item Eruko has not written yet.
 * @param {import('../core/decode.logic.js').Course} course
 * @param {string} kind
 */
export const trackWaits = (course, kind) =>
  h('p', null, `${course.track.find(t => t.id === kind)?.name ?? 'This kind'} waits for new items.`)

/** @typedef {{ form: TrackForm, set: (change: Partial<TrackForm>) => void, running: boolean, day: string }} Ctx */

/**
 * A track item: asked, or judged until "Next".
 * @param {import('../core/decode.logic.js').Course} course
 * @param {import('../core/track-decode.logic.js').TrackAsked | import('../core/decode.logic.js').TrackJudged | import('../core/decode.logic.js').TrackWorking} item
 * @param {Ctx} ctx
 */
export function trackItem(course, item, ctx) {
  const content = trackItemNow(item)
  const k = course.track.find(t => t.id === item.kind)
  if (!k) return h('p', null, NOT_LOADED)
  if (!content) return trackKindNow(item.kind) === 'failed' ? h('p', null, NOT_LOADED) : null
  const judged = 'right' in item ? item : null
  const head = [heading(TITLES[item.unit]), kindLine(course, item.kind)]
  if (item.unit === 'verdict' && 'levels' in content)
    return [head, judged ? verdictJudged(judged, content, k) : verdictAsked(item, content, ctx)]
  if (item.unit === 'count' && 'rows' in content)
    return [head, judged ? countJudged(judged, content, k) : countAsked(item, content, ctx)]
  if ('reference' in content)
    return [head, judged ? aloneJudged(judged, content, k) : aloneAsked(item, content, ctx)]
  return h('p', null, NOT_LOADED)
}

/** The screens' names, by unit. */
const TITLES = {
  verdict: 'Verdict item',
  count: 'Count item',
  alone: 'Item alone',
  witness: 'Witness'
}

/** The six verdicts, in the paper's order. */
const SIX = Object.entries(VERDICTS)

/**
 * A verdict item asked: the numbered program, then for each level a verdict, with the lines of
 * the diagnostics for an ill-formed one and the set of results for an unspecified one.
 * @param {import('../core/track-decode.logic.js').TrackAsked} item
 * @param {import('../core/track-decode.logic.js').VerdictItem} v
 * @param {Ctx} ctx
 */
function verdictAsked(item, v, ctx) {
  const f = ctx.form
  const at = (/** @type {string} */ lv) => f.levels[lv] ?? { verdict: '', lines: [], results: [] }
  const put = (
    /** @type {string} */ lv,
    /** @type {Partial<import('../core/track.logic.js').LevelAnswer>} */ change
  ) => ctx.set({ levels: { ...f.levels, [lv]: { ...at(lv), ...change } } })
  return [
    h(
      'p',
      { key: 'how' },
      v.device
        ? 'Say the verdict on this program, its launch and the pin before any run.'
        : 'Say the verdict at each level before any run. g++ 16 compiles every level with -pedantic-errors.'
    ),
    codeBlock({ lines: v.lines, numbered: true, name: 'The program' }),
    v.levels.map(lv => levelField(lv, at(lv), v.device, change => put(lv, change))),
    actionsAs(
      'answer',
      choice({
        primary: true,
        label: 'Answer',
        onPress: () => send({ t: 'track-verdict', item, content: v, typed: f.levels, day: ctx.day })
      })
    )
  ]
}

/**
 * One level's verdict, with the lines of the diagnostics for an ill-formed one and the set of
 * results for an unspecified one.
 * @param {string} lv
 * @param {import('../core/track.logic.js').LevelAnswer} a
 * @param {boolean} device
 * @param {(change: Partial<import('../core/track.logic.js').LevelAnswer>) => void} put
 */
function levelField(lv, a, device, put) {
  const id = `cpp-v-${lv.replaceAll('+', 'p')}`
  return h(
    'div',
    { class: 'cpp-level', key: lv },
    h('label', { class: 'label', for: id }, device ? 'The verdict' : `Level ${lv}`),
    h(
      'select',
      {
        id,
        class: 'field',
        '.value': a.verdict,
        onchange: (/** @type {Event} */ e) =>
          e.target instanceof HTMLSelectElement && put({ verdict: e.target.value })
      },
      h('option', { value: '' }, 'Choose a verdict'),
      SIX.map(([s, words]) => h('option', { value: s, key: s }, words))
    ),
    a.verdict === 'ill-formed' && linesField(id, a, put),
    a.verdict === 'unspecified' && setField(id, a, put)
  )
}

/**
 * The lines of an ill-formed verdict's diagnostics.
 * @param {string} id
 * @param {import('../core/track.logic.js').LevelAnswer} a
 * @param {(change: Partial<import('../core/track.logic.js').LevelAnswer>) => void} put
 */
const linesField = (id, a, put) =>
  h(
    'div',
    { key: 'lines' },
    h(
      'label',
      { class: 'label', for: `${id}-lines` },
      'The lines of the diagnostics, such as 7, 9'
    ),
    h('input', {
      id: `${id}-lines`,
      class: 'field',
      inputmode: 'numeric',
      '.value': a.lines.join(', '),
      oninput: (/** @type {Event} */ e) =>
        e.target instanceof HTMLInputElement &&
        put({
          lines: e.target.value
            .split(/[\s,]+/)
            .filter(Boolean)
            .map(Number)
        })
    })
  )

/**
 * The set of results an unspecified verdict permits, one on each line.
 * @param {string} id
 * @param {import('../core/track.logic.js').LevelAnswer} a
 * @param {(change: Partial<import('../core/track.logic.js').LevelAnswer>) => void} put
 */
const setField = (id, a, put) =>
  h(
    'div',
    { key: 'set' },
    h(
      'label',
      { class: 'label', for: `${id}-set` },
      'Every result the clause permits, one on each line'
    ),
    h('textarea', {
      id: `${id}-set`,
      class: 'field cpp-editor',
      rows: 3,
      '.value': a.results.join('\n'),
      oninput: (/** @type {Event} */ e) =>
        e.target instanceof HTMLTextAreaElement &&
        put({ results: e.target.value.split('\n').filter(l => l.trim()) })
    })
  )

/**
 * What g++ and the sanitizer gave at one level when the item entered, in plain words.
 * @param {import('../core/track-decode.logic.js').Seen} s
 */
const seenLine = s =>
  !s.compiled
    ? `Rejected, errors at ${s.errors.map(e => `line ${e}`).join(', ') || 'no line of the program'}.`
    : s.report
      ? `Accepted. The sanitizer reports ${s.report.kind} at line ${s.report.line}.`
      : `Accepted. It runs clean${s.stdout ? ' and prints what is shown' : ''}.`

/**
 * The course's two lines, with `noun` in place of "tests".
 * @param {boolean} right
 * @param {number} passed
 * @param {number} total
 * @param {string} noun
 */
const twoLines = (right, passed, total, noun) => [
  h('p', { key: 'verdict' }, right ? 'Right.' : 'Wrong.'),
  h('p', { key: 'count' }, `${passed} of ${total} ${noun} right.`)
]

/**
 * A field of a judged item's verdict, as text.
 * @param {Readonly<Record<string, unknown>> | null} v
 * @param {string} name
 */
const field = (v, name) => (v && typeof v[name] === 'number' ? Number(v[name]) : 0)

/**
 * A verdict item judged: the two lines, the first wrong level with your answer and the stored
 * one, what the compiler gave at each level, and the clause.
 * @param {import('../core/decode.logic.js').TrackJudged} item
 * @param {import('../core/track-decode.logic.js').VerdictItem} v
 * @param {import('../core/track-decode.logic.js').TrackKind} k
 */
function verdictJudged(item, v, k) {
  const r = item.verdict
  const first = firstOf(r)
  return [
    twoLines(item.right, field(r, 'passed'), field(r, 'total'), 'levels'),
    first && [
      h('p', { key: 'first' }, v.device ? 'The verdict.' : `Level ${first.level}.`),
      h('p', { key: 'given' }, `Your answer: ${first.given}.`),
      h('p', { key: 'stored' }, `Stored: ${first.stored}.`)
    ],
    codeBlock({ lines: v.lines, numbered: true, name: 'The program' }),
    label('The check'),
    v.levels.map(lv => {
      const s = v.seen[lv]
      return (
        s &&
        h(
          'div',
          { key: `seen ${lv}` },
          h('p', null, `${v.device ? 'nvcc' : `g++ at ${lv}`}: ${seenLine(s)}`),
          s.compiled && s.stdout && printed(s.stdout, `What it prints at ${lv}`),
          !s.compiled && errorText(s.said, `Error text at ${lv}`)
        )
      )
    }),
    v.derivations && [
      label('Two derivations, written apart'),
      v.derivations.map((d, i) => h('p', { key: `d${i}` }, d))
    ],
    clause(k.clause),
    next(() => send({ t: 'next' }))
  ]
}

/**
 * A count item asked: the numbered program and the table, one row for each line that moves a
 * count, filled before the program runs.
 * @param {import('../core/track-decode.logic.js').TrackAsked} item
 * @param {import('../core/track-decode.logic.js').CountItem} c
 * @param {Ctx} ctx
 */
function countAsked(item, c, ctx) {
  const f = ctx.form
  f.cells = c.rows.map((_, r) => c.columns.map((__, j) => f.cells[r]?.[j] ?? ''))
  return [
    h(
      'p',
      { key: 'how' },
      'Fill each row before the program runs: how many times its line moves each count.'
    ),
    codeBlock({ lines: c.lines, numbered: true, name: 'The program' }),
    countTable(c, f.cells, (r, j, value) => {
      const row = f.cells[r]
      if (row) row[j] = value
    }),
    actionsAs(
      'answer',
      choice({
        primary: true,
        label: 'Answer',
        onPress: () => send({ t: 'track-count', item, content: c, typed: f.cells, day: ctx.day })
      })
    )
  ]
}

/**
 * The count table: the line, then a cell per count, each a field where `edit` is given.
 * @param {import('../core/track-decode.logic.js').CountItem} c
 * @param {readonly (readonly string[])[]} cells
 * @param {(row: number, column: number, value: string) => void} [edit]
 * @param {string} [name]
 */
const countTable = (c, cells, edit, name = 'Your table') =>
  h(
    'div',
    { class: 'cpp-table cpp-scroll', 'data-name': name, key: `table ${name}` },
    h(
      'table',
      null,
      h('caption', { class: 'sr-only' }, name),
      h(
        'thead',
        null,
        h(
          'tr',
          null,
          h('th', { scope: 'col' }, 'Line'),
          c.columns.map(col => h('th', { scope: 'col', key: col }, h('code', null, col)))
        )
      ),
      h(
        'tbody',
        null,
        c.rows.map((row, r) =>
          h(
            'tr',
            { key: r },
            h('th', { scope: 'row' }, row.line),
            c.columns.map((col, j) =>
              h(
                'td',
                { key: col },
                edit
                  ? h('input', {
                      class: 'field cpp-cell',
                      inputmode: 'numeric',
                      'aria-label': `Line ${row.line}, ${col}`,
                      '.value': cells[r]?.[j] ?? '',
                      oninput: (/** @type {Event} */ e) =>
                        e.target instanceof HTMLInputElement && edit(r, j, e.target.value)
                    })
                  : h('code', null, cells[r]?.[j] ?? '')
              )
            )
          )
        )
      )
    )
  )

/**
 * A count item judged: the two lines, the first wrong count, your table beside the run's.
 * @param {import('../core/decode.logic.js').TrackJudged} item
 * @param {import('../core/track-decode.logic.js').CountItem} c
 * @param {import('../core/track-decode.logic.js').TrackKind} k
 */
function countJudged(item, c, k) {
  const r = item.verdict
  const first = firstOf(r)
  /** @type {string[][]} */
  let typed = []
  try {
    typed = JSON.parse(item.code || '[]')
  } catch {
    typed = []
  }
  return [
    twoLines(item.right, field(r, 'passed'), field(r, 'total'), 'counts'),
    first && [
      h('p', { key: 'first' }, `Line ${first.line}, ${first.column}.`),
      h('p', { key: 'given' }, `Your answer: ${first.given || 'nothing'}.`),
      h('p', { key: 'stored' }, `Stored: ${first.stored}.`)
    ],
    codeBlock({ lines: c.lines, numbered: true, name: 'The program' }),
    h(
      'div',
      { class: 'cpp-tables', key: 'tables' },
      h('div', null, label('Your table'), countTable(c, typed, undefined, 'Your table')),
      h(
        'div',
        null,
        label("The run's table"),
        countTable(
          c,
          c.rows.map(row => row.values.map(String)),
          undefined,
          "The run's table"
        )
      )
    ),
    clause(k.clause),
    next(() => send({ t: 'next' }))
  ]
}

/**
 * What the witness asks for, by its kind.
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 */
const witnessHow = a =>
  a.witness.kind === 'input'
    ? 'Write an input on which the right program and a program that gets this part wrong give different results.'
    : 'Write lines to add at the end of the program: the right version and a version that gets this part wrong must not both accept them, or both reject them.'

/**
 * An item alone or a witness asked: the statement, its examples, then the editor for the
 * program, or the field for the witness; "Submit", and "Stop" while it runs.
 * @param {import('../core/track-decode.logic.js').TrackAsked} item
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {Ctx} ctx
 */
function aloneAsked(item, a, ctx) {
  const witness = item.unit === 'witness'
  return [
    h(
      'div',
      { key: 'statement' },
      a.statement.map(line => h('p', { key: line }, line))
    ),
    examples(a.examples),
    probesShown(a),
    witness && [
      h('p', { key: 'witness-how' }, witnessHow(a)),
      label('The right version'),
      codeBlock({ lines: a.reference, numbered: true, name: 'The right version' })
    ],
    !witness && a.form === 'orders' ? ordersFields(a, ctx) : editorField(a, witness, ctx),
    submitRow(item, a, ctx)
  ]
}

/**
 * A probes item's probe lines and what each must do.
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 */
const probesShown = a =>
  a.form === 'probes' &&
  a.probes && [
    label('The probe lines'),
    codeBlock({ lines: a.probes.lines, numbered: true, name: 'The probe lines' }),
    h(
      'p',
      { key: 'probe-how' },
      `Lines ${a.probes.accept.join(', ')} must be accepted; lines ${a.probes.reject.join(', ')} must each be rejected at their own line.`
    )
  ]

/**
 * The field for the program or the witness, in the code face.
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {boolean} witness
 * @param {Ctx} ctx
 */
const editorField = (a, witness, ctx) =>
  h(
    'div',
    { key: 'editor' },
    h(
      'label',
      { class: 'label', for: 'cpp-track-editor' },
      witness ? (a.witness.kind === 'input' ? 'Your input' : 'Your lines') : 'Your program'
    ),
    h('textarea', {
      id: 'cpp-track-editor',
      class: 'field cpp-editor',
      '.value': ctx.form.code,
      wrap: 'off',
      rows: witness ? 4 : 14,
      spellcheck: 'false',
      autocomplete: 'off',
      autocapitalize: 'none',
      oninput: (/** @type {Event} */ e) => {
        if (e.target instanceof HTMLTextAreaElement) ctx.form.code = e.target.value
      }
    })
  )

/**
 * "Submit", or while the checks run, what runs and "Stop".
 * @param {import('../core/track-decode.logic.js').TrackAsked} item
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {Ctx} ctx
 */
function submitRow(item, a, ctx) {
  const witness = item.unit === 'witness'
  if (ctx.running)
    return [
      busy(witness ? 'Both versions run.' : 'The checks run.'),
      actionsAs(
        'stop',
        choice({ label: 'Stop', onPress: () => send({ t: 'track-stop', item, day: ctx.day }) })
      )
    ]
  const asks = () => (witness ? witnessAsks(a, ctx.form.code) : aloneAsks(a, ctx.form.code))
  return actionsAs(
    'answer',
    choice({
      primary: true,
      label: 'Submit',
      onPress: () => send({ t: 'track-submit', item, code: ctx.form.code, asks: asks() })
    })
  )
}

/** The memory orders and the thread scopes a slot may take, strongest first. */
const ORDERS = ['seq_cst', 'acq_rel', 'acquire', 'release', 'relaxed']
const SCOPES = ['system', 'device', 'block', 'thread']

/**
 * An orders item: its program with each atomic operation's order (and scope, on the device) left
 * as ORDER_n and SCOPE_n, and a choice for each.
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {Ctx} ctx
 */
function ordersFields(a, ctx) {
  const typed = slotsTyped(a, ctx.form.code)
  const put = (
    /** @type {number} */ n,
    /** @type {'order' | 'scope'} */ what,
    /** @type {string} */ value
  ) => {
    const next = Object.fromEntries(
      typed.map(t => [String(t.n), { order: t.order, scope: t.scope }])
    )
    next[String(n)] = { order: '', scope: '', ...next[String(n)], [what]: value }
    ctx.set({ code: JSON.stringify(next) })
  }
  /** @param {number} n @param {'order' | 'scope'} what @param {readonly string[]} options @param {string} value */
  const pick = (n, what, options, value) => {
    const id = `cpp-slot-${n}-${what}`
    return h(
      'div',
      { key: id },
      h('label', { class: 'label', for: id }, `${what === 'order' ? 'ORDER' : 'SCOPE'}_${n}`),
      h(
        'select',
        {
          id,
          class: 'field',
          '.value': value,
          onchange: (/** @type {Event} */ e) =>
            e.target instanceof HTMLSelectElement && put(n, what, e.target.value)
        },
        h('option', { value: '' }, `Choose the ${what}`),
        options.map(o => h('option', { value: o, key: o }, o))
      )
    )
  }
  return h(
    'div',
    { key: 'orders' },
    h(
      'p',
      null,
      a.device
        ? 'Type the weakest memory order and the narrowest thread scope each atomic operation needs.'
        : 'Type the weakest memory order each atomic operation needs.'
    ),
    codeBlock({ lines: a.template ?? [], numbered: true, name: 'The program' }),
    typed.map(t => [
      pick(t.n, 'order', ORDERS, t.order),
      a.device && pick(t.n, 'scope', SCOPES, t.scope)
    ])
  )
}

/**
 * An item alone or a witness judged: the two lines, the first failure, the reference, and after
 * the witness the wrong version beside it; the clause under them.
 * @param {import('../core/decode.logic.js').TrackJudged} item
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {import('../core/track-decode.logic.js').TrackKind} k
 */
function aloneJudged(item, a, k) {
  const r = item.verdict ?? {}
  const stopped = r.stopped === true
  if (item.unit === 'witness') return witnessJudgedView(item, a, k)
  return aloneResult(item, a, k, r, stopped)
}

/**
 * A witness judged: what each version gave, the witness, both versions, the clause.
 * @param {import('../core/decode.logic.js').TrackJudged} item
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {import('../core/track-decode.logic.js').TrackKind} k
 */
function witnessJudgedView(item, a, k) {
  const r = item.verdict ?? {}
  const stopped = r.stopped === true
  const show = (/** @type {string} */ t) => printed(typeof r[t] === 'string' ? r[t] : '', t)
  return [
    h('p', { key: 'verdict' }, item.right ? 'Right.' : 'Wrong.'),
    stopped
      ? h('p', { key: 'count' }, 'Stopped.')
      : h(
          'div',
          { class: 'cpp-pair', key: 'gave' },
          h('div', null, label('The right version gave'), show('right_gave')),
          h('div', null, label('The wrong version gave'), show('wrong_gave'))
        ),
    label('Your witness'),
    printed(item.code, 'Your witness'),
    h(
      'div',
      { class: 'cpp-pair', key: 'versions' },
      h(
        'div',
        null,
        label('The right version'),
        codeBlock({ lines: a.reference, numbered: true, name: 'The right version' })
      ),
      h(
        'div',
        null,
        label('The wrong version'),
        codeBlock({ lines: a.wrong, numbered: true, name: 'The wrong version' })
      )
    ),
    clause(k.clause),
    next(() => send({ t: 'next' }))
  ]
}

/**
 * An item alone judged: the two lines, the first failure, the reference and the clause.
 * @param {import('../core/decode.logic.js').TrackJudged} item
 * @param {import('../core/track-decode.logic.js').AloneItem} a
 * @param {import('../core/track-decode.logic.js').TrackKind} k
 * @param {Readonly<Record<string, unknown>>} r
 * @param {boolean} stopped
 */
function aloneResult(item, a, k, r, stopped) {
  const noun =
    a.form === 'flag'
      ? 'levels'
      : a.form === 'probes'
        ? 'probes'
        : a.result === 'output'
          ? 'tests'
          : 'counts'
  const first = firstOf(r)
  return [
    stopped
      ? [h('p', { key: 'verdict' }, 'Wrong.'), h('p', { key: 'count' }, 'Stopped.')]
      : [
          h('p', { key: 'verdict' }, item.right ? 'Right.' : 'Wrong.'),
          h('p', { key: 'count' }, `${field(r, 'passed')} of ${field(r, 'total')} ${noun} passed.`)
        ],
    typeof r.error === 'string' &&
      r.error && [
        label('Your program'),
        codeBlock({ lines: item.code.split('\n'), name: 'Your program' }),
        errorText(r.error)
      ],
    first && [
      first.input !== undefined && [label('Input'), printed(first.input, 'Input')],
      first.level && h('p', { key: 'level' }, `Level ${first.level}.`),
      first.probe && h('p', { key: 'probe' }, `Probe ${first.probe}.`),
      h(
        'div',
        { class: 'cpp-pair', key: 'failed' },
        h('div', null, label('Expected'), printed(first.expected ?? '', 'Expected')),
        h('div', null, label('Given'), printed(first.given ?? '', 'Given'))
      ),
      first.report && h('p', { key: 'report' }, `The sanitizer reports ${first.report}.`),
      first.error && errorText(first.error, 'Error text')
    ],
    label('The reference'),
    codeBlock({ lines: a.reference, numbered: true, name: 'The reference' }),
    clause(k.clause),
    next(() => send({ t: 'next' }))
  ]
}

/** What the screen says while the runner does not answer. */
export const trackRunnerDown = () => why(RUNNER_DOWN, 'cpp-runner-why')

/**
 * The unit of an action, or '' for one that is not a track item.
 * @param {import('../core/next.logic.js').Action} a
 * @returns {import('../core/track-decode.logic.js').Unit | ''}
 */
export const unitOf = a => (a.step === 'track' ? partsOf(a.id).unit : '')
