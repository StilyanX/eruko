// Hides: how a maths unit's topic page gets its topic. One page serves every topic, and the slug in
// the address picks the topic's content and problems. `load(slug)` resolves to the topic and its
// bank, decoded by the unit; `learning(topic, bank)` gives the page's config. The page loader
// (shell/page.js) awaits `warm(slug)` before the page is drawn, and shows the loading line while a
// topic loads; `config(slug)` then gives the config at once.
import { warmable } from './warmable.dom.js'

/**
 * @template Topic, Problem
 * @param {(slug: string) => Promise<{ topic: Topic, bank: readonly Problem[] }>} load
 * @param {(topic: Topic, bank: readonly Problem[]) => import('./study-page.element.js').StudyPageConfig} learning
 */
export function topicPage(load, learning) {
  /** @type {Map<string, { warm: () => Promise<import('./study-page.element.js').StudyPageConfig>, loaded: () => import('./study-page.element.js').StudyPageConfig }>} */
  const pages = new Map()
  /** @param {string} slug */
  const page = slug => {
    let held = pages.get(slug)
    if (!held) {
      held = warmable(() => load(slug).then(({ topic, bank }) => learning(topic, bank)))
      pages.set(slug, held)
    }
    return held
  }
  return {
    /** @param {string} slug */
    warm: slug => page(slug).warm(),
    /** @param {string} slug */
    config: slug => page(slug).loaded()
  }
}
