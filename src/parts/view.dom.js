// Hides: how a screen's DOM is kept in step with its state. A custom element describes what it
// shows as a tree of `h()` nodes (`view()`); `update()` brings its children into line with that tree
// in place, so a field keeps its focus, its caret and its typed text, and nothing flickers. There is
// no framework: this file is the whole of it.

/**
 * A description of one element or text: what `view()` returns.
 * @typedef {{ tag: string, props: Props, children: Child[] }} Node
 * @typedef {Node | string | number | null | undefined | false | Child[]} Child
 * A node's props: an attribute by its name; an event handler as `on<event>` (onclick, oninput),
 * set as the element's own property, so each update replaces it; a handler for any other event,
 * a screen's own included, as `on:<event>`; a DOM property as `.name`
 * (`.value`, `.checked`, `.item`); `key` to match a node to the same element across updates; and
 * `ref`, called with the element once it exists.
 * @typedef {Record<string, unknown>} Props
 */

/**
 * An attribute's or a key's text: a string as it is, a number or yes/no as text, anything else as
 * JSON (a value no attribute should carry, kept readable when one does).
 * @param {unknown} v
 */
const textOf = v =>
  typeof v === 'string'
    ? v
    : typeof v === 'number' || typeof v === 'boolean'
      ? String(v)
      : JSON.stringify(v)

/**
 * One element's description.
 * @param {string} tag
 * @param {Props | null} [props]
 * @param {...Child} children
 * @returns {Node}
 */
export const h = (tag, props, ...children) => ({ tag, props: props ?? {}, children })

const SVG = 'http://www.w3.org/2000/svg'

/** The props each element was last drawn with. @type {WeakMap<Element, Props>} */
const drawn = new WeakMap()

/** Each element's current handler for each `on:` event, read by the one listener it has. @type {WeakMap<Element, Map<string, EventListener | null>>} */
const handlers = new WeakMap()

/**
 * The children a description lists, with lists flattened and nothing (null, false, an empty
 * string) left out. Each string is its own text node, as each of JSX's was: a line of text is
 * shaped run by run, so where its text nodes part can move a glyph by a pixel.
 * @param {Child[]} children
 * @returns {(Node | string)[]}
 */
function flat(children) {
  /** @type {(Node | string)[]} */
  const out = []
  for (const c of children) {
    if (c === null || c === undefined || c === false || c === '') continue
    if (Array.isArray(c)) out.push(...flat(c))
    else out.push(typeof c === 'number' ? String(c) : c)
  }
  return out
}

/**
 * A new element for a description.
 * @param {Node} node
 * @param {string | null} ns
 */
function create(node, ns) {
  const space = node.tag === 'svg' ? SVG : ns
  const el = space ? document.createElementNS(space, node.tag) : document.createElement(node.tag)
  patch(el, node, space)
  const ref = node.props.ref
  if (typeof ref === 'function') ref(el)
  return el
}

/**
 * Bring one element into line with its description: its props, then its children. A custom
 * element (a tag with a hyphen) owns its own children: only its props are set.
 * @param {Element} el
 * @param {Node} node
 * @param {string | null} ns
 */
function patch(el, node, ns) {
  const before = drawn.get(el) ?? {}
  for (const [name, value] of Object.entries(node.props)) {
    if (name === 'key' || name === 'ref' || before[name] === value) continue
    setProp(el, name, value)
  }
  for (const name of Object.keys(before))
    if (!(name in node.props) && name !== 'key' && name !== 'ref') setProp(el, name, undefined)
  drawn.set(el, node.props)
  // A screen inside a screen draws itself, from the props just set; an element given its raw HTML
  // (`.innerHTML`) holds that, not children.
  if (node.tag.includes('-')) {
    if (el instanceof Screen) el.update()
  } else if (!('.innerHTML' in node.props)) morph(el, node.children, node.tag === 'svg' ? SVG : ns)
}

/**
 * @param {Element} el
 * @param {string} name
 * @param {unknown} value
 */
function setProp(el, name, value) {
  if (name.startsWith('on:')) {
    const event = name.slice(3)
    let own = handlers.get(el)
    if (!own) handlers.set(el, (own = new Map()))
    if (!own.has(event)) el.addEventListener(event, e => own.get(event)?.(e))
    own.set(event, typeof value === 'function' ? e => void value(e) : null)
  } else if (name.startsWith('.')) {
    const prop = name.slice(1)
    // A field the learner is typing in keeps its own value.
    if (
      prop === 'value' &&
      el === document.activeElement &&
      'value' in el &&
      el.value === value
    )
      return
    Reflect.set(el, prop, value)
  } else if (name.startsWith('on')) {
    // The handler's return value is dropped: a handler property that returns false cancels its
    // event, so `e => e.key === 'Escape' && clear()` would swallow every other key.
    Reflect.set(
      el,
      name,
      typeof value === 'function' ? (/** @type {Event} */ e) => void value(e) : null
    )
  } else if (value === undefined || value === null || value === false) {
    el.removeAttribute(name)
  } else {
    el.setAttribute(name, value === true ? '' : textOf(value))
  }
}

/**
 * The key a node or element is matched by: its `key` prop, else its tag and place.
 * @param {Node | string} node
 */
const keyOf = node =>
  typeof node === 'string' ? '#text' : `${node.tag}|${textOf(node.props.key ?? '')}`

/**
 * @param {ChildNode} el
 */
const keyOfEl = el =>
  el instanceof Element ? `${el.localName}|${textOf(drawn.get(el)?.key ?? '')}` : '#text'

/**
 * Bring a parent's children into line with a list of descriptions, reusing each child that has
 * the same tag and key, in order, and moving or creating the rest. Exported for the kit's own
 * browser test (e2e/kit.spec.mjs), which imports it in the page.
 * @public
 * @param {Element | ShadowRoot} parent
 * @param {Child[]} children
 * @param {string | null} [ns]
 */
export function morph(
  parent,
  children,
  ns = parent instanceof Element && parent.namespaceURI === SVG ? SVG : null
) {
  const want = flat(children)
  const have = [...parent.childNodes]
  /** @type {Map<string, ChildNode[]>} */
  const pool = new Map()
  for (const el of have) {
    const k = keyOfEl(el)
    const list = pool.get(k)
    if (list) list.push(el)
    else pool.set(k, [el])
  }
  /** @type {ChildNode[]} */
  const next = []
  for (const node of want) {
    const reuse = pool.get(keyOf(node))?.shift()
    if (typeof node === 'string') {
      if (reuse) {
        if (reuse.nodeValue !== node) reuse.nodeValue = node
        next.push(reuse)
      } else next.push(document.createTextNode(node))
    } else if (reuse instanceof Element) {
      patch(reuse, node, ns)
      next.push(reuse)
    } else next.push(create(node, ns))
  }
  for (const list of pool.values()) for (const el of list) el.remove()
  // Put each child in its place, moving only those out of order.
  next.forEach((el, i) => {
    if (parent.childNodes[i] !== el) parent.insertBefore(el, parent.childNodes[i] ?? null)
  })
}

/**
 * A screen: a custom element whose DOM is a function of its state. `view()` returns what it shows;
 * `update()` redraws it, at most once a microtask however often it is asked; `watch(store)` redraws
 * it on each change to a store, until it leaves the page. `setup()` runs once it first joins the
 * page, before its first view.
 */
export class Screen extends HTMLElement {
  /** @type {(() => void)[]} */
  #unwatch = []
  #queued = false
  #ready = false

  /** A screen draws no box of its own, so the page's layout is that of what it shows. */
  static box = false

  connectedCallback() {
    if (!this.#ready) {
      this.#ready = true
      if (!Reflect.get(this.constructor, 'box')) this.style.display = 'contents'
      this.setup()
    }
    this.#draw()
  }

  // A screen that fails to draw says so to the page around it (shell/router.js shows the failure
  // in its place), never leaving half a screen.
  #draw() {
    try {
      morph(this, [this.view()])
    } catch (error) {
      this.dispatchEvent(
        new CustomEvent('screen-error', { bubbles: true, composed: true, detail: error })
      )
    }
  }

  disconnectedCallback() {
    for (const stop of this.#unwatch) stop()
    this.#unwatch = []
    this.#ready = false
  }

  /** Runs once the element first joins the page. */
  setup() {}

  /** @returns {Child} */
  view() {
    return null
  }

  /** Redraw at the end of the current task. */
  update() {
    if (this.#queued || !this.isConnected) return
    this.#queued = true
    queueMicrotask(() => {
      this.#queued = false
      if (this.isConnected) this.#draw()
    })
  }

  /**
   * Redraw on each change to `store` while on the page.
   * @template {{ subscribe: (listener: () => void) => () => void }} S
   * @param {S} store
   * @returns {S}
   */
  watch(store) {
    this.#unwatch.push(store.subscribe(() => this.update()))
    return store
  }

  /**
   * Run `stop` when the element leaves the page (a timer, a listener on window).
   * @param {() => void} stop
   */
  onLeave(stop) {
    this.#unwatch.push(stop)
  }
}
