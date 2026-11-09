// Hides: what the Start page holds once Setup is stored, at the one moment each applies: the first
// kind's filled trace, read once ("Next"); the practice submission once every first kind is
// retired ("Accepted"); and the next contest's date and start time once the start gate opens.
// The work list shows the same steps when they come up there.
import { today } from '../../../parts/clock.dom.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { StepScreen, say, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { firstKindsRetired, startGate } from '../core/next.logic.js'
import { kindLine } from '../core/record.logic.js'
import {
  NOT_LOADED,
  cppStore,
  cppView,
  filledTrace,
  kindNow,
  kindsLoaded,
  markScroll,
  practice,
  rowSaid
} from '../core/screens.dom.js'
import { send } from '../core/session.dom.js'
import '../core/next-contest.element.js'

/**
 * Which step the Start page holds now, or null when it holds none.
 * @param {import('../core/decode.logic.js').Course} course
 * @param {import('../core/decode.logic.js').CppRecord} record
 * @returns {'start' | 'practice' | 'next-contest' | null}
 */
export function beginStep(course, record) {
  const [first] = course.kinds
  if (!record.runtime || !record.server || !first) return null
  if (kindLine(record, first.id)?.part === 'start') return 'start'
  if (firstKindsRetired(course, record) && !record.practice) return 'practice'
  if (startGate(course, record) && !record.server.next) return 'next-contest'
  return null
}

export class CppBegin extends StepScreen {
  setup() {
    this.watch(cppStore())
    this.watch(kindsLoaded)
  }

  drawn() {
    super.drawn()
    markScroll(this)
  }

  view() {
    const { course, record } = cppView()
    const which = beginStep(course, record)
    if (!which) return null
    switch (which) {
      case 'start': {
        const [first] = course.kinds
        const content = first ? kindNow(first.id) : 'failed'
        if (content === 'failed' || content?.start === null) return h('p', null, NOT_LOADED)
        const start = content?.start
        if (!start) return null
        const onNext = () => send({ t: 'start-read', day: today() })
        const { shown } = record.position
        const onRow = () => {
          say(rowSaid(start, shown))
          send({ t: 'start-row' })
        }
        return step(filledTrace(start, shown, { onRow, onNext }), { key: 'start' })
      }
      case 'practice':
        return step(
          practice(() => send({ t: 'practice-accepted', day: today() })),
          { key: 'practice' }
        )
      case 'next-contest':
        return step(h('cpp-next-contest', null), { key: 'next' })
      default:
        return unreachable(which)
    }
  }
}
customElements.define('cpp-begin', CppBegin)
