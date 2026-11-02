// Hides: the life's page and which screen it shows. It shows the item the work list names, under
// the last telling's mark while it may still be changed, or a lesson already done when it is
// opened from its row (?lesson=<n>). The page keeps one title, the life's; its one section names
// the lesson in hand.
import { COURSE } from '../core/course.gen.js'
import { lessonAsked, lifeId } from '../core/decode.logic.js'
import { learningNow, lifeAction } from '../core/next.logic.js'
import { livesStore, record, send } from '../core/session.dom.js'
import { dayName } from '../../../kernel/days.logic.js'
import { unreachable } from '../../../kernel/invariant.logic.js'
import { clock, today } from '../../../parts/clock.dom.js'
import '../../../parts/study-page.element.js'
import { actions, choice } from '../../../parts/study.dom.js'
import { Screen, h } from '../../../parts/view.dom.js'
import './end-level.element.js'
import './lesson-again.element.js'
import './lesson.element.js'
import './level-check.element.js'
import './next-life.element.js'
import './pair.element.js'
import './recall.element.js'
import './stuck.element.js'

/**
 * The item in hand, on the life's page.
 * @param {import('../core/next.logic.js').Action} action
 */
function todayView(action) {
  switch (action.kind) {
    case 'recall':
      return h('augustus-recall', { key: `recall-${action.life}`, '.life': action.life })
    case 'end':
      return h('augustus-end-level', { key: `end-${action.life}`, '.life': action.life })
    case 'lesson':
      return h('augustus-lesson', {
        key: `${action.life}-${action.lesson}`,
        '.life': action.life,
        '.n': action.lesson
      })
    case 'pair':
      return h('augustus-pair', { key: `pair-${action.shape}`, '.shape': action.shape })
    case 'stuck':
      return h('augustus-stuck', { '.life': action.life })
    // The level check is recorded on arrival; its result stays above the next-life checklist.
    case 'level':
    case 'next-life':
      return [
        // A life closed as stuck has no last lesson, so no level check.
        !record().lives[action.life]?.stuck &&
          h('augustus-level-check', { key: `level-${action.life}`, '.life': action.life }),
        h('augustus-next-life', { key: `next-${action.life}`, '.life': action.life })
      ]
    case 'none':
      return h(
        'p',
        null,
        'No life is in hand, because your record names a life this course does not hold.'
      )
    default:
      return unreachable(action)
  }
}

/**
 * Over the next item, the telling last marked all right, with the date it set, and the way to
 * change the mark (session.logic.js), on its own day until the next item is answered. It is no
 * step of its own, so Enter and the focus after a press go to the item under it.
 * @param {import('../core/decode.logic.js').LivesRecord} s
 */
function lastMarkView(s) {
  const m = s.lastMark
  if (!m || m.day !== today()) return null
  const r = s.recall[m.life]
  const back = !learningNow(r) && r?.next ? ` It comes back on ${dayName(r.next)}.` : ''
  return h(
    'div',
    { key: 'last-mark' },
    h('p', null, 'Every item right.', back),
    actions(
      choice({
        label: 'Change the last mark to Wrong',
        onPress: () => send({ t: 'change-mark', life: m.life })
      })
    )
  )
}

/**
 * Over the next item, on the day it was done, the end level's round with its keys and its line.
 * @param {import('../core/decode.logic.js').LivesRecord} s
 * @param {import('../core/next.logic.js').Action} action
 */
function roundDoneView(s, action) {
  const life = lifeId(COURSE.lives[0]?.id ?? '')
  const round = s.lives[life]?.end?.round
  if (action.kind === 'end' || round?.done !== today()) return null
  return h('augustus-end-level', { key: `done-${life}`, '.life': life })
}

/**
 * The page's one section: a lesson done read again, or the item in hand.
 * @param {number | null} again the lesson asked for by the address, from 1
 * @returns {import('../../../parts/study-page.element.js').StudyPageConfig}
 */
function configOf(again) {
  if (again !== null)
    return {
      named: true,
      sections: [
        {
          id: 'au-lesson',
          title: `Lesson ${again}, read again`,
          content: h('augustus-lesson-again', {
            key: again,
            '.life': lifeId('augustus'),
            '.n': again - 1
          })
        }
      ]
    }
  const action = lifeAction(record(), COURSE, today())
  const name = action.kind === 'lesson' ? `Lesson ${action.lesson + 1}` : 'Today'
  return {
    named: true,
    sections: [
      {
        id: 'au-today',
        title: name,
        content: [lastMarkView(record()), roundDoneView(record(), action), todayView(action)]
      }
    ]
  }
}

export class AugustusLife extends Screen {
  slug = ''

  setup() {
    this.watch(livesStore())
    this.watch(clock)
  }

  /** Read the address again: ?lesson=<n> opens a lesson done. */
  reread() {
    this.update()
  }

  view() {
    const asked = new URL(location.href).searchParams.get('lesson')
    return h('ae-study-page', {
      '.slug': this.slug,
      '.config': configOf(lessonAsked(asked, COURSE.lessons.length))
    })
  }
}
customElements.define('augustus-life', AugustusLife)

export const TAG = 'augustus-life'
