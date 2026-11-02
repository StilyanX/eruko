// Hides: how a unit's page is found and loaded. The registry names each page's unit and file; the
// unit's manifest gives the module that draws it, loaded when its page is opened, or earlier when
// a link to it is pointed at. The title is set here, from the registry, so it is right while the
// page loads and if it fails.
import { MANIFESTS, pageBySlug } from './registry.js'
import { provideDated } from '../parts/dated.dom.js'
import { providePages } from '../parts/page-index.dom.js'
import { recordsNow, watchRecords } from './records.js'
import { setTitle } from './title.js'
import { viewOf } from './views.js'

// A study page reads its unit's dated list and every unit's record from here: the rest of Review at the foot of a page done every session, and the Review page.
providePages(pageBySlug)
provideDated({ datedOf: slug => viewOf(slug).dated, records: recordsNow, watch: watchRecords })

const BY_FOLDER = MANIFESTS

/**
 * The module that draws a page, from the registry's `file` ("<unit>/topic": the unit's folder
 * and the name of its loader in the unit's manifest).
 * @param {import('../kernel/pages.logic.js').Page} page
 */
function moduleOf(page) {
  const [unit = '', name = ''] = page.file.split('/')
  const load = BY_FOLDER[unit]?.PAGES[name]
  if (!load) throw new Error(`No manifest has a loader for the page file ${page.file}.`)
  return load()
}

/** Each unit's stylesheet, by the unit's folder, once linked: whether it loaded. @type {Map<string, { link: HTMLLinkElement, loaded: Promise<boolean> }>} */
const sheets = new Map()

/**
 * The folders whose stylesheets a page is drawn with: the folder of the module that draws it, and
 * its own unit's (a page may be drawn by another unit's module).
 * @param {import('../kernel/pages.logic.js').PageEntry} page
 */
const foldersOf = page => [
  ...new Set([
    page.file.split('/')[0] ?? '',
    ...Object.keys(BY_FOLDER).filter(f => BY_FOLDER[f]?.UNIT.slug === page.unit.slug)
  ])
]

/**
 * Link the stylesheets of the open unit, `folders`, and turn off every other unit's, so only the
 * open unit's styles apply. A unit's unit.css imports each of its
 * elements' sheets (Feature folder), so its link brings them all in, and a link's load waits for
 * them. Resolves once they are in.
 * @param {string[]} folders
 */
export function openUnitSheets(folders) {
  for (const f of folders)
    if (!sheets.has(f)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = `units/${f}/unit.css`
      const loaded = new Promise(done => {
        link.onload = () => done(true)
        // A sheet that did not load leaves the page drawn without it, as a missing file would.
        link.onerror = () => done(false)
      })
      document.head.append(link)
      sheets.set(f, { link, loaded })
    }
  for (const [f, { link }] of sheets) link.disabled = !folders.includes(f)
  return Promise.all(folders.map(f => sheets.get(f)?.loaded ?? Promise.resolve(false)))
}

/**
 * Start loading a page's code and data, by its slug; nothing when the slug is no page.
 * @param {string} slug
 */
export function warmPage(slug) {
  const page = pageBySlug[slug]
  if (!page) return
  void moduleOf(page).then(
    m => m.warm?.(slug.split('/').pop() ?? ''),
    // A page that cannot load now says so when it is opened.
    () => false
  )
}

/**
 * The element that draws the page at `slug`.
 * @param {string} slug
 * @returns {Promise<HTMLElement>}
 */
export async function pageElement(slug) {
  const page = pageBySlug[slug]
  if (!page) throw new Error(`No page at ${slug}.`)
  setTitle(page.title, page.unit.title)
  const [mod] = await Promise.all([moduleOf(page), openUnitSheets(foldersOf(page))])
  await mod.warm?.(slug.split('/').pop() ?? '')
  const el = document.createElement(mod.TAG)
  return Object.assign(el, { slug })
}
