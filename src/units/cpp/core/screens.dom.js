// Hides: the pieces every C++ screen shares and the one way a screen reads the C++ record (it
// writes it only by sending an event, session.dom.js): the course, a kind's content loaded when a
// screen first needs it, a program as text under its labels, a statement and its examples, a
// printed text, the state table, the filled trace of the Start screen, the practice submission,
// the contest by its series and start, and the lines that say why an answer was refused or what
// is being waited on. Code is set in the code face, in one text colour, and never wrapped: a box
// wider than its column scrolls sideways and is named so (`markScroll`).
import { CPP_PART, UNIT } from './entry.logic.js'
import { KINDS, SECTIONS } from './course.gen.js'
import { READING, READING_GAPS, STAGES, TRACK } from './track.gen.js'
import { partsOf, stageOf } from './track-decode.logic.js'
import { courseFrom, kindContentOf } from './decode.logic.js'
import { recordOf } from './record.logic.js'
import { createStore, persistedStore } from '../../../record/store.js'
import { actionsAs, choice } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'

/** The unit page's address. */
export const HOME = `/${UNIT.slug}`

/** The course the record is read against. */
const COURSE = courseFrom(SECTIONS, KINDS, TRACK, STAGES, READING, READING_GAPS)

/** The C++ record's store: one copy in memory for every screen. */
export const cppStore = () => persistedStore(CPP_PART.key)

/** The record as the unit's functions read it, with the course it runs on. */
export const cppView = () => ({ course: COURSE, record: recordOf(cppStore().get(), COURSE) })

/** @typedef {import('./decode.logic.js').KindContent | 'failed'} Loaded A kind's content, or 'failed' when its file did not arrive */

/** Each kind's content once its file has arrived. @type {Map<number, Loaded>} */
const loaded = new Map()
/** @type {Map<number, Promise<Loaded>>} */
const loading = new Map()

/** Changes each time a kind's file arrives, so a screen waiting on one draws again. */
export const kindsLoaded = createStore(0)

/**
 * A kind's content, from its own file (content/k<NN>.gen.js), loaded once.
 * @param {import('./decode.logic.js').KindId} id
 * @returns {Promise<Loaded>}
 */
export function loadKind(id) {
  const held = loading.get(id)
  if (held) return held
  /** @type {Promise<Loaded>} */
  const made = import(`../content/k${String(id).padStart(2, '0')}.gen.js`)
    .then(kindContentOf, () => /** @type {const} */ ('failed'))
    .then(k => {
      loaded.set(id, k)
      kindsLoaded.set(n => n + 1)
      return k
    })
  loading.set(id, made)
  return made
}

/**
 * A kind's content if its file has arrived, else null, its load begun.
 * @param {import('./decode.logic.js').KindId} id
 */
export function kindNow(id) {
  const k = loaded.get(id)
  if (!k) void loadKind(id)
  return k ?? null
}

/** @typedef {Readonly<Record<string, import('./track-decode.logic.js').TrackContent>> | 'failed'} StageLoaded A stage's kinds, or 'failed' */
/** @type {Map<number, StageLoaded>} */
const stages = new Map()
/** @type {Set<number>} */
const stageLoading = new Set()

/**
 * A track kind's content if its stage's file (content/t<stage>.gen.js) has arrived, else null,
 * its load begun; 'failed' when it did not arrive.
 * @param {string} kind
 * @returns {import('./track-decode.logic.js').TrackContent | 'failed' | null}
 */
export function trackKindNow(kind) {
  const stage = Number(kind.split('.')[0])
  const held = stages.get(stage)
  if (held === 'failed') return 'failed'
  if (held) return held[kind] ?? 'failed'
  if (!stageLoading.has(stage)) {
    stageLoading.add(stage)
    void import(`../content/t${stage}.gen.js`)
      .then(stageOf, () => /** @type {const} */ ('failed'))
      .then(k => {
        stages.set(stage, k)
        kindsLoaded.set(n => n + 1)
      })
  }
  return null
}

/**
 * A track item's content once its stage has arrived: the verdict item, the count item, or the
 * item alone (a witness is written against its item alone's wrong version).
 * @param {Readonly<{ id: string }>} item
 */
export function trackItemNow(item) {
  const { kind, unit, n } = partsOf(item.id)
  const k = trackKindNow(kind)
  if (!k || k === 'failed') return null
  if (unit === 'verdict') return k.verdicts[n - 1] ?? null
  if (unit === 'count') return k.count
  return k.alones[n - 1] ?? null
}

/** What a screen says when a kind's file did not arrive. */
export const NOT_LOADED =
  'This part of the course did not load. Check your connection, then reload the page.'

/**
 * Name each box of code wider than its column as a region the keyboard can reach, which
 * "scrolls sideways"; a box that fits is plain text.
 * @param {Element} root
 */
export function markScroll(root) {
  for (const box of root.querySelectorAll('.cpp-scroll')) {
    if (!(box instanceof HTMLElement)) continue
    if (box.scrollWidth > box.clientWidth) {
      box.setAttribute('role', 'region')
      box.setAttribute('aria-label', `${box.dataset.name ?? ''}, scrolls sideways`)
      box.tabIndex = 0
    } else {
      box.removeAttribute('role')
      box.removeAttribute('aria-label')
      box.removeAttribute('tabindex')
    }
  }
}

/**
 * A step's heading, the screen's name in the paper's fixed words; focus lands on it when the
 * step's control is gone.
 * @param {string} text
 */
export const heading = text => h('h3', { tabindex: '-1', key: `h ${text}` }, text)

/**
 * The name of the box under it.
 * @param {string} text
 */
export const label = text => h('p', { class: 'label cpp-name', key: `n ${text}` }, text)

/**
 * A link that opens the server's page in a new tab.
 * @param {string} href
 * @param {string} text
 */
export const away = (href, text) => h('a', { href, target: '_blank', rel: 'noreferrer' }, text)

/**
 * A label's text with each span between backticks in the code face.
 * @param {string} text
 */
export const codeSpans = text =>
  text.split('`').map((piece, i) => (i % 2 ? h('code', { key: `s${i}` }, piece) : piece))

/**
 * A program as text: each line in the code face, its number in the margin where a step cites its
 * lines, and each label above the line it stands over, a label inside a group one level in.
 * @param {{ lines: readonly string[], name: string, numbered?: boolean, labels?: readonly import('./decode.logic.js').Label[] }} p
 */
export const codeBlock = ({ lines, name, numbered = false, labels = [] }) =>
  h(
    'div',
    { class: 'cpp-code cpp-scroll', 'data-name': name, key: `code ${name}` },
    lines.map((line, at) => [
      labels
        .filter(l => l.at === at)
        .map((l, i) =>
          h(
            'p',
            { key: `l${at} ${i}`, class: l.level === 2 ? 'cpp-label cpp-label-in' : 'cpp-label' },
            codeSpans(l.text)
          )
        ),
      h(
        'code',
        { key: `c${at}`, class: 'cpp-line' },
        numbered && h('span', { class: 'cpp-num' }, at + 1),
        line
      )
    ])
  )

/**
 * A text a program reads or prints, as it stands, in the code face; its last line end dropped.
 * @param {string} text
 * @param {string} name
 */
export const printed = (text, name) =>
  text
    ? h(
        'pre',
        { class: 'cpp-out cpp-scroll', 'data-name': name, key: `out ${name}` },
        text.replace(/\n$/, '')
      )
    : h('p', { class: 'lrn-ss-note', key: `out ${name}` }, 'Nothing printed.')

/**
 * The compiler's or the program's error text, copied exactly, in the code face.
 * @param {string} text
 * @param {string} [name]
 */
export const errorText = (text, name = 'Error text') =>
  h('pre', { class: 'cpp-out cpp-scroll', 'data-name': name, key: `error ${name}` }, text)

/**
 * A problem's statement, one paragraph a line.
 * @param {import('./decode.logic.js').Problem} problem
 */
export const statement = problem =>
  h(
    'div',
    { key: 'statement' },
    problem.statement.map(line => h('p', { key: line }, codeSpans(line))),
    problem.found &&
      h(
        'p',
        { class: 'lrn-ss-note', key: 'found' },
        `From ${problem.found.contest === 'nwerc' ? 'NWERC' : problem.found.contest === 'bapc' ? 'BAPC' : 'the BAPC preliminaries'} ${problem.found.year}, problem ${problem.found.problem.toUpperCase()}, under ${problem.found.licence}; the statement is rewritten.`
      )
  )

/**
 * A problem's examples: a function problem's as calls with the value each must give, after the
 * example's own lines; else each an input and the output it must give.
 * @param {import('./decode.logic.js').Problem} problem
 */
export const examplesOf = problem =>
  problem.fn
    ? [
        h(
          'p',
          { key: 'whole' },
          `Type the whole file ${problem.fn.header}, as the tests include it.`
        ),
        problem.fn.setup.length > 0 && [
          label('Example'),
          codeBlock({ lines: problem.fn.setup, name: 'Example' })
        ],
        problem.fn.calls.map((c, i) =>
          h(
            'div',
            { class: 'cpp-pair', key: `call ${i}` },
            h('div', null, label('Call'), printed(c.call, 'Call')),
            h('div', null, label('Expected'), printed(c.expected, 'Expected'))
          )
        )
      ]
    : examples(problem.examples)

/**
 * A problem's examples, each an input and the output it must give.
 * @param {readonly import('./decode.logic.js').Test[]} examples
 */
export const examples = examples =>
  examples.map((t, i) =>
    h(
      'div',
      { class: 'cpp-example', key: `example ${i}` },
      label(`Example ${i + 1}: input`),
      printed(t.input, `Example ${i + 1}: input`),
      label(`Example ${i + 1}: output`),
      printed(t.output, `Example ${i + 1}: output`)
    )
  )

/**
 * The state table: one column per name, one row per line run, the line's number first. Given
 * `edit`, each cell is a field the learner types in; else each holds its value as text.
 * @param {{ columns: readonly string[], rows: readonly (readonly string[])[], name: string, edit?: (row: number, cell: number, value: string) => void }} p
 */
export const stateTable = ({ columns, rows, name, edit }) =>
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
          columns.map(c => h('th', { scope: 'col', key: c }, h('code', null, c)))
        )
      ),
      h(
        'tbody',
        null,
        rows.map((row, r) =>
          h(
            'tr',
            { key: r },
            row.map((cell, c) =>
              h(
                'td',
                { key: c },
                edit ? cellField(r, c, cell, columns, edit) : h('code', null, cell)
              )
            )
          )
        )
      )
    )
  )

/**
 * One cell of the state table as a field, named by its row and its column.
 * @param {number} r
 * @param {number} c
 * @param {string} value
 * @param {readonly string[]} columns
 * @param {(row: number, cell: number, value: string) => void} edit
 */
const cellField = (r, c, value, columns, edit) =>
  h('input', {
    class: c === 0 ? 'field cpp-cell cpp-cell-line' : 'field cpp-cell',
    'aria-label': `Row ${r + 1}, ${c === 0 ? 'line' : columns[c - 1]}`,
    '.value': value,
    autocomplete: 'off',
    autocapitalize: 'none',
    spellcheck: 'false',
    oninput: (/** @type {Event} */ e) => {
      if (e.target instanceof HTMLInputElement) edit(r, c, e.target.value)
    }
  })

/**
 * A traced program with its line numbers, as wide as its own longest line, and its state table
 * beside it where both fit the frame, else under it: so the whole program and the whole table
 * show together.
 * @param {readonly string[]} lines
 * @param {import('../../../parts/view.dom.js').Child} table
 */
export const programBeside = (lines, table) =>
  h(
    'div',
    { class: 'cpp-side', key: 'side' },
    h(
      'div',
      { style: `--cpp-columns: ${Math.max(0, ...lines.map(l => l.length))}` },
      codeBlock({ lines, numbered: true, name: 'The program' })
    ),
    h('div', null, table)
  )

/** What a cell of the state table holds, said once above every state table. */
const CELL_RULE =
  'Each cell holds what `std::println("{}", name)` prints for that name after its line runs; leave it empty while the name does not exist.'

/** The one fixed line above a state table, its code in the code face. */
export const cellRule = () => h('p', { key: 'cell-rule' }, codeSpans(CELL_RULE))

/**
 * The filled trace of the Start screen (Programming, Running it: Start from zero): the first
 * kind's own traced program, its input, and its state table, whose rows appear one at a time, each
 * as its line runs, by "Next" (SS: "row by row, read once"); once every row shows, the same
 * "Next" moves on. `shown` is how many rows show.
 * @param {import('./decode.logic.js').StartTrace} trace
 * @param {number} shown
 * @param {{ onRow: () => void, onNext: () => void }} p
 */
export const filledTrace = (trace, shown, { onRow, onNext }) => [
  heading('A program traced line by line'),
  h(
    'p',
    { key: 'how' },
    'Read the program and its input. Then read its state table, one row at a time.'
  ),
  h(
    'p',
    { key: 'rows' },
    'Each row is one line as it runs: its number, then the value of each name after it.'
  ),
  label('Input'),
  printed(trace.input, 'Input'),
  cellRule(),
  programBeside(
    trace.lines,
    stateTable({
      columns: trace.columns,
      rows: trace.rows.slice(0, shown).map(r => [String(r.line), ...r.values]),
      name: 'The state table'
    })
  ),
  // one control in one place: "Next" shows the next row until every row shows, then moves on
  actionsAs(
    'start',
    shown < trace.rows.length
      ? choice({ key: 'go', primary: true, label: 'Next', onPress: onRow })
      : choice({ key: 'go', primary: true, label: 'Next', onPress: onNext })
  )
]

/**
 * A row of the filled trace as a screen reader says it when it appears: "Line 6: price 0,
 * count empty, total empty."
 * @param {import('./decode.logic.js').StartTrace} trace
 * @param {number} at
 */
export function rowSaid(trace, at) {
  const row = trace.rows[at]
  if (!row) return ''
  const cells = trace.columns.map((c, i) => `${c} ${row.values[i] || 'empty'}`)
  return `Line ${row.line}: ${cells.join(', ')}.`
}

/**
 * The practice submission: one answer to the server's practice contest, then "Accepted".
 * @param {() => void} onAccepted
 */
export const practice = onAccepted => [
  heading('Practice contest'),
  h(
    'p',
    { key: 'what' },
    'Submit one answer to ',
    away('https://atcoder.jp/contests/practice', "AtCoder's practice contest"),
    ", which AtCoder never rates. Write it in the contest page's own editor."
  ),
  h('p', { key: 'when' }, 'Press Accepted once the page shows your submission accepted.'),
  actionsAs('practice', choice({ primary: true, label: 'Accepted', onPress: onAccepted }))
]

/** The contest series by their prefixes, as the server names them. @type {Readonly<Record<string, string>>} */
const SERIES = {
  abc: 'AtCoder Beginner Contest',
  arc: 'AtCoder Regular Contest',
  agc: 'AtCoder Grand Contest',
  ahc: 'AtCoder Heuristic Contest'
}

/**
 * A series by its prefix: its name where the server's list names it, else the prefix.
 * @param {string} series
 */
export const seriesName = series => SERIES[series] ?? `the AtCoder series ${series}`

/**
 * A start as typed in the stored zone ("2026-11-07T13:00"), as the learner reads it:
 * "Saturday 7 November, 13:00".
 * @param {string} next
 */
export const startText = next =>
  `${new Date(`${next.slice(0, 10)}T12:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })}, ${next.slice(11, 16)}`

/**
 * What is being waited on, in words, for as long as the wait lasts.
 * @param {import('../../../parts/view.dom.js').Child} children
 */
export const busy = children =>
  children ? h('p', { class: 'lrn-ss-note', role: 'status', key: 'busy' }, children) : null

/**
 * Why an answer was refused, said at once; nothing when there is no reason.
 * @param {string} text
 * @param {string} id
 */
export const why = (text, id) =>
  text ? h('p', { class: 'why', id, role: 'alert', key: id }, text) : null

/**
 * A field with its label above it.
 * @param {{ id: string, label: string, value: string, onChange: (v: string) => void, why?: string, whyId?: string, type?: string, short?: boolean }} p
 */
export const field = p =>
  h(
    'div',
    { key: p.id },
    h('label', { class: 'label', for: p.id }, p.label),
    h('input', {
      id: p.id,
      class: p.short ? 'field field-short' : 'field',
      type: p.type ?? 'text',
      '.value': p.value,
      oninput: (/** @type {Event} */ e) => {
        if (e.target instanceof HTMLInputElement) p.onChange(e.target.value)
      },
      autocomplete: 'off',
      autocapitalize: 'none',
      spellcheck: 'false',
      'aria-describedby': p.why ? p.whyId : undefined
    })
  )
