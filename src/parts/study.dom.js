// Hides: what every unit's study screens share, so a move looks, reads and behaves the same in
// every unit: the unit's record for the page, a row of buttons, a step's box, marking your own
// work, the verdict, a count of where you are, turning through items, and wide maths made a scroll
// region. What every unit's screens share is one control for each move a step makes (a button,
// marking right or wrong, the verdict, a count of where you are, turning through items).
import { persistedStore } from '../record/store.js'
import { normalizeSlug } from '../kernel/slug.logic.js'
import { BASE } from './links.dom.js'
import { pageAt } from './page-index.dom.js'
import { Screen, h } from './view.dom.js'
import { PRIMARY } from './choice.element.js'

export { PRIMARY }
export { say } from './say.dom.js'

/** The page's path inside the app, as the app's routes write it: "/explore/…". */
export const pathNow = () =>
  location.pathname.startsWith(BASE)
    ? `/${location.pathname.slice(BASE.length)}`
    : location.pathname

/** The page's slug, as the registry keys it. */
export const slugNow = () => normalizeSlug(pathNow())

/**
 * A link to a part of this page by its id. The app's base address is not this page's, so a bare
 * "#id" would lead to the app's root.
 * @param {string} id
 */
export const hashTo = id => `${location.pathname}${location.search}#${id}`

/** The record of the unit the page belongs to: the first of its parts. */
export function studyStore() {
  const part = pageAt(slugNow())?.unit.parts[0]
  if (!part) throw new Error(`The page at ${slugNow()} belongs to no unit with a record.`)
  return persistedStore(part.key)
}

/**
 * Mark maths wider than its line as a scrollable, focusable region (WCAG 1.4.10, 2.1.1), read as
 * the formula it holds and described as scrolling sideways.
 * @param {Element | null | undefined} el
 */
export function markWide(el) {
  el?.querySelectorAll('math:not([tabindex])').forEach(m => {
    const line = m.closest('p, li, div')
    if (m instanceof MathMLElement && line && m.getBoundingClientRect().width > line.clientWidth) {
      m.tabIndex = 0
      m.setAttribute('aria-description', 'Formula, scrolls sideways')
    }
  })
}

/**
 * A screen of a study step. After each draw it marks the maths wider than its line (`drawn`),
 * before the paint, so a wide formula is a scroll region from its first frame.
 */
export class StepScreen extends Screen {
  #after = false

  connectedCallback() {
    super.connectedCallback()
    this.drawn()
  }

  update() {
    super.update()
    if (this.#after || !this.isConnected) return
    this.#after = true
    queueMicrotask(() => {
      this.#after = false
      if (this.isConnected) this.drawn()
    })
  }

  /** Runs after each draw. */
  drawn() {
    markWide(this)
  }

  /**
   * Redraw, then run `then` on what was drawn.
   * @param {() => void} then
   */
  afterDraw(then) {
    this.update()
    queueMicrotask(() => {
      if (this.isConnected) then()
    })
  }

  /**
   * Put focus, at the next frame, on the first element `selector` finds here: the control that
   * held it is gone.
   * @param {string} selector
   */
  focusSoon(selector) {
    requestAnimationFrame(() => {
      const el = this.querySelector(selector)
      if (el instanceof HTMLElement) el.focus()
    })
  }
}

/**
 * A row of buttons: the primary last.
 * @param {...import('./view.dom.js').Child} children
 */
export const actions = (...children) => h('div', { class: 'actions' }, children)

/**
 * A row of buttons that is a new row, never the nodes of another branch's row: a node kept across branches changes where the browser anchors the
 * scroll when the step changes size above the reader.
 * @param {string} key
 * @param {...import('./view.dom.js').Child} children
 */
export const actionsAs = (key, ...children) => h('div', { class: 'actions', key }, children)

/**
 * One step's box; `bare`, for a step already laid out in boxes of its own, the content alone.
 * `key` makes a new box, never the last one's nodes.
 * @param {import('./view.dom.js').Child} children
 * @param {{ bare?: boolean, key?: string }} [how]
 */
export const step = (children, how = {}) =>
  how.bare ? children : h('div', { class: 'lrn-ss', key: how.key }, children)

/**
 * A button of a step (choice.element.js).
 * @param {{
 *   label: import('./view.dom.js').Child,
 *   onPress?: (e: MouseEvent) => void,
 *   onIntent?: () => void,
 *   disabled?: boolean,
 *   why?: string,
 *   type?: 'button' | 'submit',
 *   primary?: boolean,
 *   key?: string
 * }} p
 */
export const choice = p =>
  h('ae-choice', {
    key: p.key,
    '.label': p.label,
    '.disabled': p.disabled ?? false,
    '.why': p.why ?? '',
    '.type': p.type ?? 'button',
    '.primary': p.primary ?? false,
    'on:press': (/** @type {Event} */ e) => {
      if (e instanceof CustomEvent && e.detail instanceof MouseEvent) p.onPress?.(e.detail)
    },
    'on:intent': () => p.onIntent?.()
  })

/**
 * Marking your own work right or wrong, after the answer is shown: Wrong on the left, Right on
 * the right, under the one sentence that says what counts as right. Given `onWrong`/`onRight`,
 * one press marks. Given `value`/`onChange`, the mark is one of many kept until a later Done: a
 * pair of choices named `name`, arrow keys moving between them. `labels` names the pair where
 * the step's own words differ (a witness that is contested or agrees). `labelledBy` names the
 * pair by the ids of what it marks, where many marks stand on one page, its sentence then its
 * description.
 * @param {{
 *   when: string,
 *   onWrong?: () => void,
 *   onRight?: () => void,
 *   value?: boolean | null,
 *   onChange?: (right: boolean) => void,
 *   name?: string,
 *   labelledBy?: string,
 *   disabled?: boolean,
 *   why?: string,
 *   labels?: [string, string]
 * }} p
 */
export function mark(p) {
  const [no, yes] = p.labels ?? ['Wrong', 'Right']
  const by = p.labelledBy && p.name ? `${p.name}-when` : undefined
  const legend = h('legend', { class: 'label', id: by }, p.when)
  /** @type {[string, boolean][]} */
  const pair = [
    [no, false],
    [yes, true]
  ]
  const onChange = p.onChange
  if (onChange)
    return h(
      'fieldset',
      by
        ? { class: 'mark', 'aria-labelledby': p.labelledBy, 'aria-describedby': by }
        : { class: 'mark' },
      legend,
      h(
        'div',
        { class: 'mark-options' },
        pair.map(([label, right]) =>
          h(
            'label',
            { key: label, class: 'radio' },
            h('input', {
              type: 'radio',
              name: p.name ?? 'mark',
              '.checked': p.value === right,
              onchange: () => onChange(right)
            }),
            label
          )
        )
      )
    )
  /** @type {{ disabled?: boolean, why?: string }} */
  const lock = {}
  if (p.disabled !== undefined) lock.disabled = p.disabled
  if (p.why !== undefined) lock.why = p.why
  return h(
    'fieldset',
    { class: 'mark' },
    legend,
    actions(
      choice({ ...lock, label: no, onPress: () => p.onWrong?.() }),
      choice({ ...lock, label: yes, onPress: () => p.onRight?.() })
    )
  )
}

/**
 * The verdict on an answer the app checked: its word, then what follows from it.
 * @param {boolean} right
 * @param {import('./view.dom.js').Child} [children]
 * @param {string} [key] a new paragraph, never another branch's
 */
export const verdict = (right, children, key = 'verdict') =>
  h('p', { key }, right ? 'Right.' : 'Wrong.', children && [' ', children])

/**
 * Where you are in a run of items, alone on its line: "Proof 2 of 5".
 * @param {string} noun
 * @param {number} n
 * @param {number} of
 */
export const whereIn = (noun, n, of) =>
  h('p', { class: 'lrn-ss-note', tabindex: '-1' }, noun, ' ', n, ' of ', of)

/**
 * Previous and Next through `count` items. Next keeps its place at the end of the row whether or
 * not Previous shows. `last` replaces Next on the last item, and `back` false hides Previous.
 * The words stay "Previous" and "Next" because the count above each item already names it.
 * `primary` makes Next the step's forward action, which Enter presses (a run read in order).
 * @param {{
 *   label: string,
 *   at: number,
 *   count: number,
 *   onTurn: (n: number) => void,
 *   last?: import('./view.dom.js').Child,
 *   back?: boolean,
 *   primary?: boolean
 * }} p
 */
export const turn = ({ label, at, count, onTurn, last, back = true, primary = false }) =>
  h(
    'nav',
    { class: 'lrn-ss-pager', 'aria-label': label },
    back && at > 0 && choice({ key: 'previous', label: 'Previous', onPress: () => onTurn(at - 1) }),
    h(
      'span',
      { class: 'lrn-ss-next' },
      at < count - 1
        ? choice({ key: 'next', primary, label: 'Next', onPress: () => onTurn(at + 1) })
        : last
    )
  )
