// Registry integrity: the mistakes that would otherwise crash when a page opens (a page `file`
// with no loader behind it in its unit's manifest, which shell/page.js cannot load). A
// pure function over the registry, so tests/registry.test.mjs runs it.

/** @type {('title' | 'slug' | 'description')[]} */
const UNIT_KEYS = ['title', 'slug', 'description']
/** @type {('title' | 'slug' | 'file')[]} */
const PAGE_KEYS = ['title', 'slug', 'file']

/**
 * @param {{ UNITS: import('../../src/kernel/pages.logic.js').Unit[], MANIFESTS: Record<string, { PAGES: Record<string, unknown> }> }} registry
 * @returns {string[]}
 */
export function checkRegistry({ UNITS, MANIFESTS }) {
  /** @type {string[]} */
  const problems = []
  const files = new Set()
  const unitSlugs = new Set()
  for (const unit of UNITS) {
    if (unitSlugs.has(unit.slug)) problems.push(`unit slug "${unit.slug}" is used twice`)
    unitSlugs.add(unit.slug)
    for (const key of UNIT_KEYS) if (!unit[key]) problems.push(`a unit has no ${key}`)
    if (!unit.sources?.length) problems.push(`${unit.title}: no sources`)
    // The unit's URL runs through its discipline, so the path up from it never dead-ends.
    if (!unit.slug.startsWith(`explore/${unit.discipline.id}/`))
      problems.push(`${unit.title}: slug is not under explore/${unit.discipline.id}/`)
    const slugs = new Set()
    for (const page of unit.pages) {
      const where = `${unit.title} / ${page.title ?? page.slug}`
      for (const key of PAGE_KEYS) if (!page[key]) problems.push(`${where}: no ${key}`)
      if (slugs.has(page.slug)) problems.push(`${where}: slug "${page.slug}" is used twice`)
      slugs.add(page.slug)
      files.add(page.file)
      const [folder = '', name = ''] = page.file?.split('/') ?? []
      if (page.file && !MANIFESTS[folder]?.PAGES[name])
        problems.push(`${where}: no manifest has a loader for ${page.file}`)
    }
  }
  // Every loader of a manifest is some page's.
  for (const [folder, manifest] of Object.entries(MANIFESTS))
    for (const name of Object.keys(manifest.PAGES))
      if (!files.has(`${folder}/${name}`)) problems.push(`${folder}'s loader ${name} is in no unit's pages`)
  return problems
}
