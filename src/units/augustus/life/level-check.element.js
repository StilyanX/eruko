// Hides: the level check once a life's last lesson is done: the life's forecast scores against the
// last check, and whether the level of the pair of lives is raised, lowered or unchanged. It is
// recorded the moment it is reached, so it asks for no press; its result stays above the
// next-life checklist. Under it, while Judgment of the end level has not held, its reading.
import { today } from '../../../parts/clock.dom.js'
import { lifeId } from '../core/decode.logic.js'
import { judgment } from '../core/end.logic.js'
import { LIVES } from '../core/lives.logic.js'
import { levelResult, recordLevel, shown } from '../core/next.logic.js'
import { record, send } from '../core/session.dom.js'
import { step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen } from '../core/screens.dom.js'

const WHY = {
  first: "This is the first life. Eruko compares the next life's score with this one's.",
  few: 'Too few forecasts to compare with the last life, so nothing changes.',
  noise: "Your score is too close to the last life's to tell a real change, so nothing changes.",
  raised:
    'Your forecasts are better than in the last life, so from now on you compare three lives side by side.',
  lowered:
    'Your forecasts are worse than in the last life, so from now on you compare two lives side by side.'
}

export class AugustusLevelCheck extends LifeScreen {
  /** The life's id. */
  life = lifeId('')

  setup() {
    super.setup()
    // Recorded on arrival, after this first draw: the work list then moves on to the next life.
    queueMicrotask(() => send({ t: 'reach-level', life: this.life }))
  }

  view() {
    const life = this.life
    const result = levelResult(recordLevel(record(), life, today()), life)
    if (!result) return null
    return step([
      h('h3', { tabindex: '-1' }, 'How your forecasts went'),
      result.lines.map((t, i) => h('p', { key: i }, t)),
      h(
        'p',
        { class: 'lrn-ss-note' },
        result.first &&
          'Your average score is the mean of your forecast scores, where 0 is best and 2 is worst. ',
        'If your average chance of yes is above how often yes came true, you said yes too often. If it is below, you said yes too rarely.'
      ),
      h('p', null, WHY[result.why]),
      this.#judgment()
    ])
  }

  /**
   * Judgment of the end level, read at this last lesson over every life with a check, as plain
   * numbers, while it has not held before this reading.
   */
  #judgment() {
    const s = recordLevel(record(), this.life, today())
    const first = lifeId(LIVES[0]?.id ?? '')
    const judged = s.lives[first]?.end?.judged
    if (judged && judged !== today()) return null
    const j = judgment(s)
    return [
      h('h4', { key: 'j' }, 'Judgment'),
      h(
        'p',
        { key: 'jd', class: 'lrn-ss-note' },
        'Your ',
        h('strong', null, 'lean'),
        ' is your average chance of yes minus how often yes came true. The ',
        h('strong', null, 'lean line'),
        ' is twice how far that lean can stray by chance alone. Judgment holds with 30 or more scored, an average score under 0.478, and a lean inside the lean line.'
      ),
      [
        `Scored ${j.n}.`,
        `Average score ${shown(j.mean)}.`,
        `Lean ${j.lean > 0 ? '+' : ''}${Math.round(j.lean * 100)}%.`.replace('-', '−'),
        `Lean line ${Math.round(j.line * 100)}%.`,
        j.holds ? 'Judgment holds.' : 'Judgment does not hold yet.'
      ].map((t, i) => h('p', { key: `j${i}` }, t))
    ]
  }
}
customElements.define('augustus-level-check', AugustusLevelCheck)
