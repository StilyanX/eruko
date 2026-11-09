// Hides: a unit's study page, the same for every unit: the title, the contents of a page with more
// than one section, the sections, the rest of Review at the foot of a page done every session, and
// the page's turn. From 80em the contents stand in the rail beside the text. It holds the page's
// one polite live region, Enter for the step's primary control, focus kept in a step whose control
// a press removed, and the scroll to a section the address names. The maths font, Latin Modern, in
// which the browser sets every formula's MathML, and the page's sheet are linked from index.html
// (src/style/maths.css, src/parts/study-page.css).
import { courseSlot } from '../kernel/pages.logic.js'
import { pageAt } from './page-index.dom.js'
import { EVENTS, emit } from './events.dom.js'
import { clock, today } from './clock.dom.js'
import { alsoToday, watchDated } from './dated.dom.js'
import { linkTo } from './links.dom.js'
import { hashTo } from './study.dom.js'
import { Screen, h } from './view.dom.js'

/** @typedef {{ label: string, to: string }} Way */
/**
 * @typedef {object} StudyPageConfig
 * @property {string} [title]  the page's title where it is not the registry's (a text in hand)
 * @property {string} [lang]  the title's language where it is not English
 * @property {boolean} [named]  show the one section's heading too
 * @property {{ id: string, title: string, content: import('./view.dom.js').Child }[]} sections
 *   each under its own heading; `id` is the anchor the contents list goes to
 * @property {{ previous?: Way, next?: Way }} [turn]  the pages before and after this one where
 *   they are not the registry's (a unit's texts)
 */

/**
 * The pages a page's end turns to: from a page of a course whose sections number its pages (a
 * topic), the lessons before and after it, named "lesson" since the sections above them carry
 * Previous and Next of their own; from the last lesson and from every other page, the unit's page.
 * @param {import('../kernel/pages.logic.js').PageEntry} page
 * @returns {{ previous?: Way | undefined, next?: Way | undefined }}
 */
function turnOf(page) {
  const u = page.unit
  const home = { label: `Go to ${u.title}`, to: `/${u.slug}` }
  const slot = page.start || page.review ? null : courseSlot(u, page.slug)
  if (!slot) return { next: home }
  const { course, at } = slot
  /**
   * @param {{ slug: string } | undefined} p
   * @param {string} label
   */
  const way = (p, label) => (p ? { label, to: `/${u.slug}/${p.slug}` } : undefined)
  return {
    previous: way(course[at - 1], 'Previous lesson'),
    next: way(course[at + 1], 'Next lesson') ?? home
  }
}

/**
 * One end of the page's turn: a link in a button's form, never a step's primary, so Enter in a
 * step never leaves the page.
 * @param {Way} way
 */
const wayLink = way =>
  h('a', { class: 'btn', href: linkTo(way.to), onclick: () => scrollTo(0, 0) }, way.label)

/**
 * Bring a section into view the way the contents list does: a section to its heading, and
 * anything smaller to itself; both clear the sticky top bar by their scroll-margin.
 * @param {string} id
 */
function reveal(id) {
  const el =
    document.querySelector(`[data-anchor="${CSS.escape(id)}"]`) ?? document.getElementById(id)
  if (!el) return
  ;(el.classList.contains('lrn-section') ? el.querySelector('h2') : el)?.scrollIntoView({
    block: 'start'
  })
}

// Every Start page names the device's own read-aloud, under its first section; the app has none.
const READ_ALOUD =
  "To hear any text read aloud, turn on your device's reader: Android, Select to Speak; iPhone and iPad, Spoken Content; Windows, Narrator, or Read aloud in Edge; Mac, Spoken Content; Chromebook, Select-to-speak."

/** The fields and buttons focus may go to once a press removed its control. */
const CONTROL = 'input:not([type=hidden]), textarea, select, button'

/**
 * Whether a control can be pressed: on the page, shown, and not marked disabled.
 * @param {Element} el
 */
const live = el =>
  el instanceof HTMLElement &&
  el.offsetParent !== null &&
  el.getAttribute('aria-disabled') !== 'true'

/**
 * Whether a control is shown: on the page and not hidden, locked or not.
 * @param {Element} el
 */
const shown = el => el instanceof HTMLElement && el.offsetParent !== null

/**
 * Enter on the page: the step the learner is in (focus is inside it, on its heading or text)
 * decides, wherever its primary stands; its primary, if locked, says why, and a step with no
 * primary takes nothing. Outside every step, the page's first live primary is pressed, below the
 * fold too, and brought into view.
 * @param {KeyboardEvent} e
 */
function enter(e) {
  if (e.key !== 'Enter' || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return
  if (
    e.repeat ||
    (e.target instanceof Element &&
      e.target.closest('input, textarea, select, button, a, summary, math'))
  )
    return
  const step = document.activeElement?.closest('.lrn-ss')
  const own = step ? [...step.querySelectorAll('.lrn-ss-primary')] : []
  const el = step
    ? (own.find(live) ?? own.find(shown))
    : [...document.querySelectorAll('.lrn-ss-primary')].find(live)
  if (!(el instanceof HTMLElement)) return
  e.preventDefault()
  el.scrollIntoView({ block: 'nearest' })
  // Focus stays where Enter was pressed, so the press moves it on as if the control had held it.
  pressedFrom = document.activeElement
  el.click()
}

/** The fields focus may go to once a press removed its control. */
const FIELD = 'input:not([type=hidden]), textarea, select'

/**
 * The control a step hands focus to: its live primary, else its first field, else its first live
 * button, either outside a mark (Enter or a key on a focused Wrong would mark by habit), else
 * none. A locked control is never the one.
 * @param {Element} st
 */
const handOf = st =>
  [...st.querySelectorAll('.lrn-ss-primary')].find(live) ??
  [...st.querySelectorAll(FIELD)].find(el => live(el) && !el.closest('fieldset.mark')) ??
  [...st.querySelectorAll(CONTROL)].find(el => live(el) && !el.closest('fieldset.mark'))

/** Where focus stood when Enter pressed a primary, so the press moves it on from there. @type {Element | null} */
let pressedFrom = null

/**
 * After a press that removed its own control, when focus was left on the page (or where Enter was
 * pressed, `from`): the control the step hands focus to (`handOf`), else its section's, else its
 * mark, read before Wrong or Right is chosen, else the step's heading (or the step itself), where
 * the answer or verdict just shown is read from.
 * @param {{ step: Element, section: Element | null }} at
 * @param {Element | null} [from]
 */
function focusAfter(at, from = null) {
  const now = document.activeElement
  if (now && now !== document.body && now !== from) return
  const steps = [
    ...(at.step.isConnected ? [at.step] : []),
    ...(at.section && at.section !== at.step ? at.section.querySelectorAll('.lrn-ss') : [])
  ]
  const to = steps.map(handOf).find(Boolean)
  // A step with nothing left to press (Proved on …) takes focus on its mark, else its heading, or
  // on itself if it has none.
  const head = to
    ? null
    : (steps.map(st => st.querySelector('fieldset.mark')).find(Boolean) ??
      steps[0]?.querySelector('h3, h2') ??
      steps[0] ??
      // The pressed step's box itself is gone, with no other in its section: the section's heading.
      at.section?.querySelector('h2'))
  if (head instanceof HTMLElement && !head.hasAttribute('tabindex')) head.tabIndex = -1
  const target = to ?? head
  if (target instanceof HTMLElement) {
    target.focus({ preventScroll: true })
    target.scrollIntoView({ block: 'nearest' })
  }
}

/**
 * Focus as a press in `root` leaves it: for a unit's own step whose press redraws it whole.
 * @param {Element} root
 */
export const focusIn = root => focusAfter({ step: root, section: null }, document.activeElement)

/**
 * Enter presses the primary control of the step that holds focus, or else the page's first; a
 * press that removes its own control leaves focus in its step. Typing in a field, and Enter on a
 * focused control or scrollable maths, keep their own meaning. No other key is taken from the
 * page. Returns the function that stops it.
 */
function shortcuts() {
  /** @param {MouseEvent} e */
  const onClick = e => {
    // A step not drawn in a box of its own is its section.
    const on = e.target instanceof Element ? e.target : null
    const step = on?.closest('.lrn-ss') ?? on?.closest('.lrn-section')
    if (!step) return
    const at = { step, section: step.closest('.lrn-section') }
    const from = pressedFrom
    pressedFrom = null
    requestAnimationFrame(() => requestAnimationFrame(() => focusAfter(at, from)))
  }
  document.addEventListener('keydown', enter)
  document.addEventListener('click', onClick, true)
  return () => {
    document.removeEventListener('keydown', enter)
    document.removeEventListener('click', onClick, true)
  }
}

// How long a page waits for its sections before it scrolls to the one its address names, when the
// page's ready event does not come first.
const HASH_WAIT_MS = 900

export class AeStudyPage extends Screen {
  /** The page's slug, as the registry keys it. */
  slug = ''
  /** @type {StudyPageConfig} */
  config = { sections: [] }
  /** What the live region says now: plain strings and words of the language being learned. @type {(string | { de: string })[]} */
  said = []
  /** The words of the last line, and whether it carries the trailing space that makes a repeat change the region. */
  #saidWords = ''
  #padded = false
  #ready = false

  setup() {
    // A repeated message gets a trailing space, so the region changes and is spoken again.
    /** @param {Event} e */
    const hear = e => {
      const parts = [e instanceof CustomEvent ? e.detail : '']
        .flat()
        .map(p => (typeof p === 'object' ? p : String(p)))
      const words = parts.map(p => (typeof p === 'string' ? p : p.de)).join('')
      this.#padded = words === this.#saidWords && !this.#padded
      this.#saidWords = words
      this.said = this.#padded ? [...parts, ' '] : parts
      this.update()
    }
    addEventListener(EVENTS.say, hear)
    this.onLeave(() => removeEventListener(EVENTS.say, hear))
    this.onLeave(shortcuts())
    // Scroll to the section named by the address's hash once the page has drawn its sections.
    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let wait
    const to = () => {
      if (location.hash) reveal(decodeURIComponent(location.hash.slice(1)))
    }
    const scroll = () => {
      clearTimeout(wait)
      if (location.hash) wait = setTimeout(to, HASH_WAIT_MS)
    }
    scroll()
    addEventListener('hashchange', scroll)
    addEventListener(EVENTS.pageReady, to)
    this.onLeave(() => {
      clearTimeout(wait)
      removeEventListener('hashchange', scroll)
      removeEventListener(EVENTS.pageReady, to)
    })
    if (pageAt(this.slug)?.repeats) {
      watchDated(this)
      this.watch(clock)
    }
  }

  connectedCallback() {
    super.connectedCallback()
    // The page's maths arrives set, so its sections are ready at the first paint: say so before
    // it, so a link to a section (#id) can scroll to it.
    if (this.#ready) return
    this.#ready = true
    emit(EVENTS.pageReady)
  }

  view() {
    const page = pageAt(this.slug)
    if (!page) throw new Error(`No page at ${this.slug}.`)
    const { sections, title, lang, named = false, turn } = this.config
    const many = sections.length > 1
    const { previous, next: on } = turn ?? turnOf(page)
    return h(
      'main',
      {
        id: 'main',
        tabindex: '-1',
        class: page.unit.className ? `page study ${page.unit.className}` : 'page study'
      },
      h(
        'article',
        { class: 'page-col lrn', 'aria-labelledby': 'lrn-title' },
        h(
          'header',
          { class: 'lrn-page-header' },
          h('h1', { id: 'lrn-title', lang }, title ?? page.title)
        ),
        h(
          'p',
          { role: 'status', class: 'sr-only' },
          this.said.map(p => (typeof p === 'string' ? p : h('span', { lang: 'de' }, p.de)))
        ),
        many &&
          h(
            'nav',
            { class: 'contents', 'aria-labelledby': 'contents-title' },
            h('h2', { class: 'contents-title', id: 'contents-title' }, 'Contents'),
            h(
              'ol',
              null,
              sections.map(s => h('li', { key: s.id }, h('a', { href: hashTo(s.id) }, s.title)))
            )
          ),
        sections.map((s, i) =>
          h(
            'section',
            { key: s.id, id: s.id, 'data-anchor': s.id, class: 'lrn-section' },
            h('h2', { class: many || named ? undefined : 'sr-only' }, s.title),
            s.content,
            page.start && i === 0 && h('p', null, READ_ALOUD)
          )
        ),
        page.repeats && alsoToday(page.slug, today()),
        // The page's end: Previous at the left, Next at the right, as every run of items turns.
        (previous || on) &&
          h(
            'nav',
            { class: 'lrn-section lrn-ss-pager', 'aria-label': 'Pages' },
            previous && wayLink(previous),
            on && h('span', { class: 'lrn-ss-next' }, wayLink(on))
          )
      )
    )
  }
}
customElements.define('ae-study-page', AeStudyPage)
