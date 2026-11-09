// Hides: the work list's screens that are no study item: the Contest screen (the next rated
// contest's name and start in the learner's own time, and on its day the whole plan), the record
// pasted the day after, the Reading screen of gate 2, Setup still to do, the runtime change step
// under way, and nothing left.
import { linkTo } from '../../../parts/links.dom.js'
import { actionsAs, choice } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { dayName } from '../../../kernel/days.logic.js'
import { laterDate } from '../core/next.logic.js'
import { readingLines } from '../core/readings.logic.js'
import { HOME, away, cppView, heading, seriesName, startText } from '../core/screens.dom.js'

/**
 * The Contest screen: the series, its start in the stored zone, and the server's list of
 * contests, where its page is (the record holds no contest number).
 * @param {import('../core/decode.logic.js').Server} server
 */
export const contest = server => [
  heading('Contest'),
  h(
    'p',
    { key: 'when' },
    `${seriesName(server.series)}: ${startText(server.next)}, in your time zone, ${server.zone}.`
  ),
  h(
    'p',
    { key: 'page' },
    'Its page is on ',
    away('https://atcoder.jp/contests/', "AtCoder's list of contests"),
    '.'
  )
]

/**
 * The record to paste: the server's public record of the learner's contests, opened in a new tab.
 * @param {import('../core/decode.logic.js').Server} server
 * @param {{ paste: string, why: string, onPaste: (text: string) => void, onStore: (e: SubmitEvent) => void }} p
 */
export const pasteRecord = (server, p) => [
  heading('Contest'),
  h(
    'p',
    { key: 'open' },
    'Open ',
    away(
      `https://atcoder.jp/users/${encodeURIComponent(server.user)}/history/json`,
      'your contest record'
    ),
    ', copy all of its text, and paste it here. Paste it also if you did not sit the contest.'
  ),
  h(
    'form',
    { class: 'form', key: 'paste', onsubmit: p.onStore, novalidate: true },
    h(
      'div',
      null,
      h('label', { class: 'label', for: 'cpp-paste' }, 'Paste your record'),
      h('textarea', {
        id: 'cpp-paste',
        class: 'field cpp-editor',
        '.value': p.paste,
        wrap: 'off',
        rows: 4,
        spellcheck: 'false',
        'aria-describedby': p.why ? 'cpp-paste-why' : undefined,
        oninput: (/** @type {Event} */ e) => {
          if (e.target instanceof HTMLTextAreaElement) p.onPaste(e.target.value)
        }
      })
    ),
    p.why && h('p', { class: 'why', id: 'cpp-paste-why', role: 'alert' }, p.why),
    actionsAs('store', choice({ primary: true, type: 'submit', label: 'Store' }))
  )
]

/**
 * The Reading screen: gate 2's two lines, each beside the last, and what they mean.
 * @param {import('../core/decode.logic.js').CppRecord} record
 * @param {() => void} onNext
 */
export const reading = (record, onNext) => [
  heading('Reading'),
  readingLines(record).map(line => h('p', { key: line }, line)),
  actionsAs('next', choice({ primary: true, label: 'Next', onPress: onNext }))
]

/** Setup still to do: the Start page, which stores it. */
export const setupFirst = () => [
  heading('Set-up'),
  h(
    'p',
    { key: 'setup' },
    'Store your AtCoder account and check the runner on the ',
    h('a', { href: linkTo(`${HOME}/start`) }, 'Start page'),
    ' first.'
  )
]

/**
 * The runtime change step under way, or stopped.
 * @param {string} version what the runner now reports
 * @param {{ done: number, of: number } | string} at how far it is, or why it stopped
 */
export const checking = (version, at) => [
  heading('New compiler'),
  h(
    'p',
    { key: 'new' },
    `The runner now reports ${version}. Each reference solution runs through it before the next item.`
  ),
  typeof at === 'string'
    ? h('p', { class: 'why', role: 'alert', key: 'why' }, at)
    : h('p', { class: 'lrn-ss-note', role: 'status', key: 'at' }, `${at.done} of ${at.of} done.`)
]

/**
 * Nothing left: the paper's words, the day the next item comes back, and where to go.
 * @param {import('../core/decode.logic.js').CppRecord} record
 * @param {string} day
 */
export function nothingLeft(record, day) {
  const later = laterDate(cppView().course, record, day)
  return [
    h('p', { key: 'none' }, 'Nothing left.'),
    later && h('p', { key: 'later' }, `The next item comes back on ${dayName(later)}.`),
    !(record.runtime && record.server) &&
      h(
        'p',
        { key: 'start' },
        'The runner and the contests wait on ',
        h('a', { href: linkTo(`${HOME}/start`) }, 'Start'),
        '.'
      )
  ]
}
