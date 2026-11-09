// Hides: Augustus's entry in the app's list of units: its title, address, description, sources,
// and pages.
// The shell lists every unit's entry (shell/registry.js), through the unit's manifest.
import { reviewPage, startPage } from '../../../kernel/pages.logic.js'

/**
 * The unit's own part of the record.
 * @type {import('../../../kernel/pages.logic.js').RecordPart}
 */
export const LIVES_PART = { name: 'lives', key: 'aether-biography', title: 'Augustus' }

/** @type {import('../../../kernel/pages.logic.js').Unit} */
export const UNIT = {
  title: 'Augustus',
  slug: 'explore/biography/augustus',
  discipline: { id: 'biography', name: 'Biography' },
  order: 4,
  // The lives read under the Biography System: one record, every life.
  parts: [LIVES_PART],
  className: 'lrn-bio',
  description:
    'Read the life of Augustus once, one decision at a time, in the order he lived it. Forecast each outcome before you read it, then write his setbacks and the claims you keep. You keep only what you write, and later you tell it from memory.',
  sources: [
    { title: 'Augustus (2nd edition, 2012)', author: 'Klaus Bringmann' },
    {
      title: 'The Cambridge Ancient History X: The Augustan Empire, 43 B.C.–A.D. 69 (2nd ed.)',
      author: 'A. K. Bowman, E. Champlin and A. Lintott (eds.)'
    },
    { title: 'Res Gestae Divi Augusti', author: 'Augustus, translated by Thomas Bushnell' }
  ],
  pages: [
    startPage('augustus'),
    reviewPage('augustus'),
    {
      title: 'The life of Augustus',
      slug: 'life',
      file: 'augustus/life'
    }
  ]
}
