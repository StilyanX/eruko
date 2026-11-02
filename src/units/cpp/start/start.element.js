// Hides: what the C++ course needs before the first session, where its Setup is done, and the Start
// screen's steps that follow it on this page (begin.element.js).
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import { cppStore, cppView } from '../core/screens.dom.js'
import { beginStep } from './begin.element.js'
import './set-up.element.js'

const needs = [
  h(
    'p',
    null,
    'You need an AtCoder account and the compiler GCC on this computer. Do these once, in order:'
  ),
  h(
    'ol',
    null,
    h(
      'li',
      null,
      'Make an account on AtCoder, ',
      h(
        'a',
        { href: 'https://atcoder.jp/register', target: '_blank', rel: 'noreferrer' },
        'atcoder.jp'
      ),
      '.'
    ),
    h(
      'li',
      null,
      'Install GCC 14 or later. Eruko compiles every program you write with it, as C++23, the language AtCoder rates you in.'
    ),
    h(
      'li',
      null,
      "Open a terminal in Eruko's folder and start the runner with ",
      h('code', null, 'npm run cpp-runner'),
      '. Leave it running while you study. If you open Eruko at an address other than http://127.0.0.1:9999 or http://localhost:9999, add ',
      h('code', null, '-- --origin'),
      ' and that address to the command.'
    ),
    h(
      'li',
      null,
      'Under Set-up below, type your AtCoder user name, the series prefix and your time zone, then press Store. Eruko checks the runner with a fixed program.'
    )
  ),
  h('p', null, "To hear the page read aloud, turn on your device's own screen reader.")
]

export class CppStart extends Screen {
  slug = ''

  setup() {
    this.watch(cppStore())
  }

  view() {
    const { course, record } = cppView()
    /** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
    const config = {
      named: true,
      sections: [
        { id: 'cpp-needs', title: 'What you need', content: needs },
        { id: 'cpp-setup', title: 'Set-up', content: h('cpp-set-up', null) },
        ...(beginStep(course, record)
          ? [{ id: 'cpp-begin', title: 'Begin', content: h('cpp-begin', null) }]
          : [])
      ]
    }
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('cpp-start', CppStart)

export const TAG = 'cpp-start'
