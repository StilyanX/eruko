// Hides: the Go course's entry in the app's list of units: its title, address, description,
// sources, pages and the sections of its unit page.
// The shell lists every unit's entry (shell/registry.js), through the unit's manifest.
import { reviewPage, startPage } from '../../../kernel/pages.logic.js'
import { SECTIONS as GO_SECTIONS } from './course.gen.js'

/**
 * The unit's own part of the record.
 * @type {import('../../../kernel/pages.logic.js').RecordPart}
 */
export const GO_PART = { name: 'go', key: 'aether-go', title: 'Go' }

/** The Start page, which the unit page's first row opens. */
export const START = startPage('go')

/** @type {import('../../../kernel/pages.logic.js').Unit} */
export const UNIT = {
  // not "Go": the discipline is Go, and a crumb or a link reading "Go › Go" or "Go to Go" says nothing
  title: 'Go course',
  slug: 'explore/go/go',
  discipline: { id: 'go', name: 'Go' },
  order: 5,
  parts: [GO_PART],
  // OGS serves the games, and the relay (port 8766) reaches the engine on this computer.
  hosts: { connect: ['https://online-go.com', 'http://127.0.0.1:8766'] },
  description:
    'Answer rules items and problems about one group. Type the first move and what happens to the group, then read the full solution. Review your own games with the engine, your move first. Play one rated game a session. Each answer comes back on its date.',
  sources: [
    { title: 'Official AGA Rules of Go (1991)', author: 'American Go Association' },
    { title: 'The game of Go, a definition of the score', author: 'John Tromp' },
    {
      title: 'Graded Go Problems for Beginners, volume 1, for the order of the kinds',
      author: 'Kano Yoshinori'
    },
    { title: 'Weekly Go Problems, CC BY-NC-SA 4.0', author: 'An Younggil and David Ormerod' },
    {
      title: 'Gokyo Shumyo and Guanzi Pu, positions only',
      author: 'Transcribed by Ulrich Goertz'
    },
    { title: 'KataGo, release 1.18, the review engine', author: 'David J. Wu' },
    { title: 'OGS, online-go.com, the server of the games', author: 'Online Go Server' }
  ],
  pages: [
    START,
    reviewPage('go'),
    { title: 'Work list', slug: 'work', file: 'go/work', repeats: true }
  ],
  // The five rules parts, then the kinds of problem, grouped by where the problems come from.
  sections: GO_SECTIONS
}
