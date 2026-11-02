// Hides: the work list, one item at a time, in the order of the one next action
// (next.logic.js): what each screen shows in the paper's fixed words (Worked example, Trace item,
// Parsons problem, Problem, Result, Contest, Reading), which event each press sends
// (session.dom.js), and what the learner has typed, held here while the item is open and written
// to the record when they press Run or Submit or leave the screen. Before the next item, a
// compiler the runner newly reports runs every reference solution (the runtime change step).
import { unreachable } from '../../../kernel/invariant.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import { StepScreen, actionsAs, choice, say, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import {
  contestRows,
  formText,
  isTrace,
  parsonsForm,
  traceForm,
  zoneDay
} from '../core/decode.logic.js'
import { parsonsProgram } from '../core/judge.logic.js'
import { contestToday, nextAction, startGate, waitsForProblems } from '../core/next.logic.js'
import { cutParsons, shuffleBy } from '../core/parsons.logic.js'
import { runtimeChanged } from '../core/record.logic.js'
import { RUNNER_DOWN } from '../core/session.logic.js'
import { aboutRunner } from '../core/runner.dom.js'
import {
  NOT_LOADED,
  busy,
  cellRule,
  codeBlock,
  cppStore,
  cppView,
  errorText,
  examples,
  filledTrace,
  heading,
  kindNow,
  kindsLoaded,
  label,
  markScroll,
  practice,
  printed,
  programBeside,
  rowSaid,
  stateTable,
  statement,
  why
} from '../core/screens.dom.js'
import { checkRuntime, runnerDown, send, settle } from '../core/session.dom.js'
import '../core/next-contest.element.js'
import './track-setup.element.js'
import { checking, contest, nothingLeft, pasteRecord, reading, setupFirst } from './contest.dom.js'
import { parsonsBoard } from './parsons.dom.js'
import {
  trackExample,
  trackFormOf,
  trackItem,
  trackKept,
  trackRunnerDown,
  trackWaits,
  unitOf
} from './track.dom.js'

/**
 * What the item open holds while it is answered: the program typed, the trace's cells and
 * output, the Parsons lines placed and blanks filled, a pasted record, and the refusal said.
 * `key` names the item: a new item starts it afresh from what the record kept.
 * `track` is what is typed on a track item.
 * @typedef {{ key: string, code: string, cells: string[][], output: string, order: number[], fills: string[], paste: string, why: string, shown: number, track: import('./track.dom.js').TrackForm }} Form
 */

/** @param {import('../core/next.logic.js').Action} a */
const keyOf = a =>
  `${a.step} ${'id' in a ? a.id : 'kind' in a ? a.kind : ''}${'right' in a ? ' judged' : ''}`

/**
 * The form of an item, from what the record kept of it.
 * @param {import('../core/next.logic.js').Action} a
 * @returns {Form}
 */
function formOf(a) {
  const kept = 'code' in a && !('right' in a) ? a.code : ''
  const trace = traceForm(kept)
  const parsons = parsonsForm(kept)
  return {
    key: keyOf(a),
    track: trackFormOf(kept, unitOf(a)),
    code: 'id' in a && a.step !== 'track' && !isTrace(a.id) && a.step !== 'parsons' ? kept : '',
    cells: trace.cells.map(r => [...r]),
    output: trace.output,
    order: [...parsons.order],
    fills: [...parsons.fills],
    paste: '',
    why: '',
    shown: 1
  }
}

/** @param {() => void} onPress */
const next = onPress => actionsAs('next', choice({ primary: true, label: 'Next', onPress }))

/**
 * The editor (Programming, Visuals: Editor): a plain text field in the code face. The tab key
 * indents one level, four spaces; Escape, then Tab, leaves the field. Nothing else is added.
 * @param {KeyboardEvent} e
 */
function tabKey(e) {
  const area = e.target
  if (!(area instanceof HTMLTextAreaElement)) return
  if (e.key === 'Escape') {
    area.dataset.leave = 'yes'
    return
  }
  const leave = area.dataset.leave === 'yes'
  delete area.dataset.leave
  if (e.key !== 'Tab' || leave || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return
  e.preventDefault()
  indent(area)
  area.dispatchEvent(new Event('input', { bubbles: true }))
}

/**
 * One level of indent: four spaces at the caret, or before each line of a selection that spans
 * lines, the selection kept over the same text.
 * @param {HTMLTextAreaElement} area
 */
function indent(area) {
  const { value, selectionStart: from, selectionEnd: to } = area
  if (!value.slice(from, to).includes('\n')) {
    area.setRangeText('    ', from, to, 'end')
    return
  }
  const start = value.lastIndexOf('\n', from - 1) + 1
  // a selection that ends at the start of a line leaves that line as it is
  const end = value[to - 1] === '\n' ? to - 1 : to
  const lines = value.slice(start, end).split('\n')
  area.setRangeText(lines.map(l => `    ${l}`).join('\n'), start, end)
  area.setSelectionRange(from + 4, to + 4 * lines.length)
}

/**
 * @param {string} value
 * @param {(v: string) => void} onChange
 */
const editor = (value, onChange) =>
  h(
    'div',
    { key: 'editor' },
    h('label', { class: 'label', for: 'cpp-editor' }, 'Your program'),
    h('textarea', {
      id: 'cpp-editor',
      class: 'field cpp-editor',
      '.value': value,
      wrap: 'off',
      rows: 14,
      spellcheck: 'false',
      autocomplete: 'off',
      autocapitalize: 'none',
      autocorrect: 'off',
      'aria-describedby': 'cpp-editor-how',
      onkeydown: tabKey,
      oninput: (/** @type {Event} */ e) => {
        if (e.target instanceof HTMLTextAreaElement) onChange(e.target.value)
      }
    }),
    h(
      'p',
      { id: 'cpp-editor-how', class: 'lrn-ss-note' },
      'Tab indents 4 spaces. To leave the field, press Escape, then Tab.'
    )
  )

/**
 * The field for what the program prints for the second input, in the code face.
 * @param {string} value
 * @param {(v: string) => void} onChange
 */
const printedField = (value, onChange) =>
  h(
    'div',
    { key: 'output' },
    h('label', { class: 'label', for: 'cpp-output' }, 'What the program prints for input 2'),
    h('textarea', {
      id: 'cpp-output',
      class: 'field cpp-editor cpp-printed',
      '.value': value,
      wrap: 'off',
      rows: 2,
      spellcheck: 'false',
      oninput: (/** @type {Event} */ e) => {
        if (e.target instanceof HTMLTextAreaElement) onChange(e.target.value)
      }
    })
  )

/**
 * What the program printed on each example, beside what the example expects.
 * @param {readonly import('../core/decode.logic.js').Test[]} tests
 * @param {readonly import('../core/decode.logic.js').Output[]} runs
 */
const ran = (tests, runs) =>
  tests.map((t, i) => {
    const run = runs[i]
    const n = `Example ${i + 1}`
    return h(
      'div',
      { class: 'cpp-pair', key: `ran ${i}` },
      h('div', null, label(`${n}: expected`), printed(t.output, `${n}: expected`)),
      h('div', null, label(`${n}: given`), printed(run?.stdout ?? '', `${n}: given`))
    )
  })

/**
 * What a run wrote to its error stream, or the signal that ended it, as the program's own text.
 * @param {import('../core/decode.logic.js').Output} run
 */
const runError = run => `${run.stderr}${run.signal && run.finished ? run.signal : ''}`

/**
 * Each example run's error text, under the program, named by its example.
 * @param {readonly import('../core/decode.logic.js').Output[]} runs
 */
const runErrors = runs =>
  runs.map((run, i) => runError(run) && errorText(runError(run), `Example ${i + 1}: error text`))

/**
 * The first failed test: its input, the output expected, the output given.
 * @param {import('../core/decode.logic.js').Failed} f
 */
const failed = f => [
  label('Input'),
  printed(f.input, 'Input'),
  h(
    'div',
    { class: 'cpp-pair', key: 'failed' },
    h('div', null, label('Expected'), printed(f.expected, 'Expected')),
    h('div', null, label('Given'), printed(f.given, 'Given'))
  )
]

/**
 * The Result screen: the verdict, the tests passed of how many, the first failed test or the
 * compiler's text under the program submitted, then the reference solution with its labels.
 * @param {import('../core/decode.logic.js').Judged} item
 * @param {import('../core/decode.logic.js').Problem} problem
 */
function result(item, problem) {
  const v = item.verdict
  const stopped = v && !v.failed && !v.error && !item.right
  const error = v?.error || v?.failed?.error
  return [
    heading('Result'),
    h('p', { key: 'verdict' }, item.right ? 'Right.' : 'Wrong.'),
    v && h('p', { key: 'count' }, stopped ? 'Stopped.' : `${v.passed} of ${v.total} tests passed.`),
    error && [
      label('Your program'),
      codeBlock({ lines: item.code.split('\n'), name: 'Your program' }),
      errorText(error, 'Error text')
    ],
    v?.failed && failed(v.failed),
    label('The reference solution'),
    codeBlock({
      lines: problem.solution.lines,
      labels: problem.solution.labels,
      name: 'The reference solution'
    }),
    next(() => send({ t: 'next' }))
  ]
}

/**
 * A trace item answered: the verdict, the table typed beside the run's own, and the output
 * typed beside what the program prints.
 * @param {import('../core/decode.logic.js').Judged} item
 * @param {import('../core/decode.logic.js').Trace} trace
 */
function traced(item, trace) {
  const typed = traceForm(item.code)
  const answered = item.code !== ''
  return [
    heading('Trace item'),
    h('p', { key: 'verdict' }, item.right ? 'Right.' : 'Wrong.'),
    codeBlock({ lines: trace.lines, numbered: true, name: 'The program' }),
    h(
      'div',
      { class: 'cpp-tables', key: 'tables' },
      answered &&
        h(
          'div',
          null,
          label('Your table'),
          stateTable({ columns: trace.columns, rows: typed.cells, name: 'Your table' })
        ),
      h(
        'div',
        null,
        label("The run's table"),
        stateTable({
          columns: trace.columns,
          rows: trace.rows.map(r => [String(r.line), ...r.values]),
          name: "The run's table"
        })
      )
    ),
    label('Input 2'),
    printed(trace.inputs[1] ?? '', 'Input 2'),
    h(
      'div',
      { class: 'cpp-pair', key: 'outputs' },
      answered && h('div', null, label('You typed'), printed(typed.output, 'You typed')),
      h('div', null, label('The program prints'), printed(trace.output, 'The program prints'))
    ),
    next(() => send({ t: 'next' }))
  ]
}

export class CppWorkList extends StepScreen {
  /** The item open's own state. */
  #f = formOf({ n: 6, step: 'nothing' })
  /** The item drawn last, whose typed text is kept when the screen is left. @type {import('../core/next.logic.js').Action | null} */
  #item = null
  /** The runtime change step: null when none runs, else how far it is or why it stopped. @type {{ version: string, at: { done: number, of: number } | string } | null} */
  #check = null

  setup() {
    this.watch(cppStore())
    this.watch(clock)
    this.watch(kindsLoaded)
    this.watch(runnerDown)
    const keep = () => {
      this.#keep()
      cppStore().flush()
    }
    const hidden = () => {
      if (document.visibilityState === 'hidden') keep()
    }
    addEventListener('pagehide', keep)
    document.addEventListener('visibilitychange', hidden)
    this.onLeave(() => {
      this.#keep()
      removeEventListener('pagehide', keep)
      document.removeEventListener('visibilitychange', hidden)
    })
    settle()
    void this.#runtime()
  }

  drawn() {
    super.drawn()
    markScroll(this)
  }

  /** The runtime change step, when the runner reports another compiler than the one stored. */
  async #runtime() {
    const { runtime } = cppView().record
    const about = await aboutRunner()
    if (!about.ok || !runtimeChanged(runtime, about.value)) return
    const version = about.value.version
    this.#check = { version, at: { done: 0, of: 0 } }
    this.update()
    const done = await checkRuntime(about.value, (n, of) => {
      this.#check = { version, at: { done: n, of } }
      this.update()
    })
    this.#check = done.ok
      ? null
      : { version, at: done.error === 'unanswered' ? RUNNER_DOWN : NOT_LOADED }
    this.update()
  }

  /** What is typed on the item open, written to the record when the screen is left. */
  #keep() {
    const item = this.#item
    if (!item || !('id' in item) || 'right' in item) return
    const f = this.#f
    if (item.step === 'track') {
      const typed = trackKept(f.track, item.unit)
      if (typed && typed !== ('code' in item ? item.code : ''))
        send({ t: 'track-kept', item, code: typed })
      return
    }
    const code =
      item.step === 'parsons'
        ? f.order.length || f.fills.some(Boolean)
          ? formText({ order: f.order, fills: f.fills })
          : ''
        : isTrace(item.id)
          ? f.cells.some(r => r.some(Boolean)) || f.output
            ? formText({ cells: f.cells, output: f.output })
            : ''
          : f.code
    const kept = 'code' in item ? item.code : ''
    if (code && code !== kept) send({ t: 'code-kept', item, code })
  }

  /**
   * Change the item open's state, and redraw.
   * @param {Partial<Form>} change
   */
  #set(change) {
    Object.assign(this.#f, change)
    this.update()
  }

  view() {
    const { course, record } = cppView()
    const day = today()
    if (this.#check) return step(checking(this.#check.version, this.#check.at), { key: 'check' })
    const server = record.server
    // the contest's day is read in the stored zone; on it the contest is the whole plan, and an
    // item open stays open for the next day
    const zoned = server ? zoneDay(clock.get(), server.zone) : day
    if (server && contestToday(course, record, zoned))
      return step(contest(server), { key: 'contest' })
    const item = nextAction(course, record, day, zoned)
    if (this.#f.key !== keyOf(item)) this.#f = formOf(item)
    this.#item = item
    const ahead = server && server.next.slice(0, 10) > zoned && startGate(course, record)
    const waits = waitsForProblems(course, record)
    return [
      ahead && step(contest(server), { key: 'contest' }),
      waits && step(h('p', null, `${waits.name} waits for new problems.`), { key: 'waits' }),
      step(this.#screen(item, record, day), { key: `item ${this.#f.key}` })
    ]
  }

  /**
   * What the item open shows.
   * @param {import('../core/next.logic.js').Action} item
   * @param {import('../core/decode.logic.js').CppRecord} record
   * @param {string} day
   * @returns {import('../../../parts/view.dom.js').Child}
   */
  #screen(item, record, day) {
    switch (item.step) {
      case 'setup':
        return setupFirst()
      case 'nothing':
        return nothingLeft(record, day)
      case 'reading':
        return reading(record, () => send({ t: 'next' }))
      case 'practice':
        return practice(() => send({ t: 'practice-accepted', day }))
      case 'next-contest':
        return h('cpp-next-contest', null)
      case 'record':
        return this.#record(record)
      case 'track-example':
        return trackExample(cppView().course, item.kind, day)
      case 'track-waits':
        return trackWaits(cppView().course, item.kind)
      case 'track-setup':
        return h('cpp-track-setup', null)
      case 'track': {
        const running = 'running' in item && item.running === 'submit'
        const set = (/** @type {Partial<import('./track.dom.js').TrackForm>} */ change) => {
          Object.assign(this.#f.track, change)
          this.update()
        }
        return [
          runnerDown.get() && trackRunnerDown(),
          trackItem(cppView().course, item, { form: this.#f.track, set, running, day })
        ]
      }
      case 'start':
      case 'example':
      case 'recall':
      case 'mixed':
      case 'trace':
      case 'parsons':
      case 'alone':
        return this.#study(item, day)
      default:
        return unreachable(item)
    }
  }

  /**
   * The record pasted the day after a contest, read for the rated contests of the series.
   * @param {import('../core/decode.logic.js').CppRecord} record
   */
  #record(record) {
    const { server } = record
    if (!server) return setupFirst()
    const f = this.#f
    return pasteRecord(server, {
      paste: f.paste,
      why: f.why,
      onPaste: text => this.#set({ paste: text }),
      onStore: e => {
        e.preventDefault()
        const rows = contestRows(f.paste, server.series, server.zone)
        if (!rows.ok) return this.#set({ why: rows.error })
        send({ t: 'record-pasted', rows: rows.value, day: today() })
      }
    })
  }

  /**
   * A study item: its kind's content, once its file has arrived, then its screen.
   * @param {Exclude<Extract<import('../core/next.logic.js').Action, { kind: unknown }>, { step: 'track' | 'track-example' | 'track-waits' }>} item
   * @param {string} day
   */
  #study(item, day) {
    const content = kindNow(item.kind)
    if (content === 'failed') return h('p', null, NOT_LOADED)
    if (!content) return null
    if (item.step === 'start') return this.#start(content.start, day)
    if (item.step === 'example')
      return [
        heading('Worked example'),
        statement(content.example),
        codeBlock({
          lines: content.example.solution.lines,
          labels: content.example.solution.labels,
          name: 'The worked example'
        }),
        next(() => send({ t: 'example-read', kind: item.kind, day }))
      ]
    if (!('id' in item)) return null
    if (isTrace(item.id))
      return 'right' in item ? traced(item, content.trace) : this.#trace(item, content.trace, day)
    const problem = content.problems[item.id]
    if (!problem) return h('p', null, NOT_LOADED)
    if ('right' in item) return result(item, problem)
    return item.step === 'parsons'
      ? this.#parsons(item, problem, day)
      : this.#problem(item, problem, day)
  }

  /**
   * The first kind's filled trace, its rows shown one a press, each said as it appears.
   * @param {import('../core/decode.logic.js').StartTrace | null} start
   * @param {string} day
   */
  #start(start, day) {
    if (!start) return h('p', null, NOT_LOADED)
    const f = this.#f
    const onRow = () => {
      say(rowSaid(start, f.shown))
      this.#set({ shown: f.shown + 1 })
    }
    return filledTrace(start, f.shown, { onRow, onNext: () => send({ t: 'start-read', day }) })
  }

  /**
   * A trace item asked: the numbered program beside the state table with its rows blank, the
   * first input, then the second input and a field for what the program prints for it.
   * @param {import('../core/decode.logic.js').Asked} item
   * @param {import('../core/decode.logic.js').Trace} trace
   * @param {string} day
   */
  #trace(item, trace, day) {
    const f = this.#f
    const width = trace.columns.length + 1
    f.cells = trace.rows.map((_, r) =>
      Array.from({ length: width }, (_, c) => f.cells[r]?.[c] ?? '')
    )
    return [
      heading('Trace item'),
      h('p', { key: 'how' }, 'Fill the state table for input 1, one row for each line as it runs.'),
      h('p', { key: 'row' }, "Type the line's number first, then the value of each name after it."),
      label('Input 1'),
      printed(trace.inputs[0] ?? '', 'Input 1'),
      cellRule(),
      programBeside(
        trace.lines,
        stateTable({
          columns: trace.columns,
          rows: f.cells,
          name: 'Your state table',
          edit: (r, c, v) => {
            const row = f.cells[r]
            if (row) row[c] = v
          }
        })
      ),
      label('Input 2'),
      printed(trace.inputs[1] ?? '', 'Input 2'),
      printedField(f.output, v => {
        f.output = v
      }),
      actionsAs(
        'answer',
        choice({
          label: 'No further step',
          onPress: () => send({ t: 'no-further-step', item, code: '', day })
        }),
        choice({
          primary: true,
          label: 'Answer',
          onPress: () =>
            send({ t: 'trace-answered', item, trace, cells: f.cells, output: f.output, day })
        })
      )
    ]
  }

  /**
   * The runs under way and the last run on the examples of the item open, as the record holds them.
   * @param {import('../core/decode.logic.js').Asked} item
   */
  #working(item) {
    const open = cppView().record.position.open
    return open && 'running' in open && open.step === item.step && open.id === item.id ? open : null
  }

  /**
   * A problem: the statement, its examples, the editor; "Run on the examples", "Submit", and
   * beside them "No further step"; while a program runs, "Stop". The compiler's text stands
   * under the program, and each example's output beside what it expects.
   * @param {import('../core/decode.logic.js').Asked} item
   * @param {import('../core/decode.logic.js').Problem} problem
   * @param {string} day
   */
  #problem(item, problem, day) {
    const f = this.#f
    const open = this.#working(item)
    const all = [...problem.examples, ...problem.tests]
    const last = open?.ran
    return [
      heading('Problem'),
      statement(problem),
      examples(problem.examples),
      editor(f.code, v => {
        f.code = v
      }),
      last && !last.compiled && errorText(last.error, 'Error text'),
      last && last.compiled && runErrors(last.runs),
      last && last.compiled && ran(problem.examples, last.runs),
      runnerDown.get() && why(RUNNER_DOWN, 'cpp-runner-why'),
      this.#running(item, open?.running ?? null, all.length, day) ??
        actionsAs(
          'answer',
          choice({
            label: 'No further step',
            onPress: () => send({ t: 'no-further-step', item, code: f.code, day })
          }),
          choice({
            label: 'Run on the examples',
            onPress: () => send({ t: 'run-examples', item, code: f.code, tests: problem.examples })
          }),
          choice({
            primary: true,
            label: 'Submit',
            onPress: () => send({ t: 'submit', item, code: f.code, tests: all })
          })
        )
    ]
  }

  /**
   * While a program runs: what runs, and "Stop"; else nothing.
   * @param {import('../core/decode.logic.js').Asked} item
   * @param {'examples' | 'submit' | null} running
   * @param {number} total
   * @param {string} day
   */
  #running(item, running, total, day) {
    if (!running) return null
    return [
      busy(running === 'submit' ? 'The hidden tests run.' : 'The program runs on the examples.'),
      actionsAs(
        'stop',
        choice({ label: 'Stop', onPress: () => send({ t: 'stop', item, total, day }) })
      )
    ]
  }

  /**
   * A Parsons problem: the statement, its examples, the shuffled lines to put in order with their
   * blanks to fill, and "Submit"; beside it "No further step".
   * @param {import('../core/decode.logic.js').Asked} item
   * @param {import('../core/decode.logic.js').Problem} problem
   * @param {string} day
   */
  #parsons(item, problem, day) {
    const f = this.#f
    const parsons = cutParsons(problem, shuffleBy(problem.id))
    const open = this.#working(item)
    const all = [...problem.examples, ...problem.tests]
    const submit = () => {
      if (f.order.length < parsons.lines.length)
        return this.#set({ why: 'Put every line in its place first.' })
      const code = parsonsProgram(problem.solution, f.order, f.fills)
      this.#set({ why: '' })
      send({ t: 'submit', item, code, tests: all })
    }
    return [
      heading('Parsons problem'),
      statement(problem),
      examples(problem.examples),
      h(
        'p',
        { key: 'how' },
        'Press each line in the order it runs: it goes to the next empty place. Then fill each blank.'
      ),
      parsonsBoard({
        parsons,
        order: f.order,
        fills: f.fills,
        onPlace: at => this.#set({ order: [...f.order, at], why: '' }),
        onTake: slot => this.#set({ order: f.order.filter((_, k) => k !== slot) }),
        onFill: (blank, text) => {
          f.fills[blank] = text
        }
      }),
      why(f.why, 'cpp-parsons-why'),
      runnerDown.get() && why(RUNNER_DOWN, 'cpp-runner-why'),
      this.#running(item, open?.running ?? null, all.length, day) ??
        actionsAs(
          'answer',
          choice({
            label: 'No further step',
            onPress: () => send({ t: 'no-further-step', item, code: '', day })
          }),
          choice({ primary: true, label: 'Submit', onPress: submit })
        )
    ]
  }
}
customElements.define('cpp-work-list', CppWorkList)
