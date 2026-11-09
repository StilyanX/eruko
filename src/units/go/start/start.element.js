// Hides: what Go needs before the first game, and where its set-up is done.
import { PRACTICE } from '../core/game.logic.js'
import { ENGINE } from '../core/record.logic.js'
import '../../../parts/study-page.element.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './set-up.element.js'

const needs = [
  h(
    'p',
    null,
    'You need no board and no book. Do these once, in order:'
  ),
  h(
    'ol',
    null,
    h(
      'li',
      null,
      'Make an account on OGS, online-go.com. When it asks how strong you are, answer that you are new to the game, whatever you know.'
    ),
    h(
      'li',
      null,
      "Download KataGo, release 1.18, from the releases page of github.com/lightvector/KataGo. Take the build for this computer's graphics card, or the CPU build if the computer has none. KataGo is the engine that reviews your games."
    ),
    h(
      'li',
      null,
      'Download the network file ',
      ENGINE.network,
      ' from katagotraining.org/networks.'
    ),
    h(
      'li',
      null,
      "Open a terminal in Eruko's folder. Start the engine with this command, with the place of each file filled in:",
      h('br', null),
      h(
        'code',
        null,
        'npm run go-relay -- --katago [the katago program] --model [the network file] --config [analysis_example.cfg]'
      ),
      h('br', null),
      'The command remembers the three files. From then on, before a session, start the engine with ',
      h('code', null, 'npm run go-relay'),
      ' and leave it running. If you open Eruko at an address other than http://127.0.0.1:9999 or http://localhost:9999, add ',
      h('code', null, '--origin'),
      ' and that address to the command.'
    ),
    h(
      'li',
      null,
      'Under Set-up below, choose the network file, press Check the engine, then type your OGS user name.'
    )
  ),
  h(
    'p',
    null,
    'A move is a point, named by a letter and a number such as D4. The columns run A to T from the left, with no I. The rows run 1 to 19 from the bottom.'
  ),
  h(
    'p',
    null,
    'Until you count one practice game right, the game of a session is a practice game against the bot ',
    PRACTICE.bot,
    ". If that account is gone or does not accept the game, play another bot. Pick the active bot that runs KataGo's human-like network and has the rating nearest 652, the server's 25 kyu. Ranks run from 30 kyu, the weakest, down to 1 kyu, then 1 dan and up."
  )
]

/** @type {import('../../../parts/study-page.element.js').StudyPageConfig} */
const config = {
  named: true,
  sections: [
    { id: 'go-needs', title: 'What you need', content: needs },
    { id: 'go-setup', title: 'Set-up', content: h('go-set-up', null) }
  ]
}

export class GoStart extends Screen {
  slug = ''

  view() {
    return h('ae-study-page', { '.slug': this.slug, '.config': config })
  }
}
customElements.define('go-start', GoStart)

export const TAG = 'go-start'
