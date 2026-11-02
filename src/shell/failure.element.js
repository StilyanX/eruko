// Hides: the system screens. Each says what happened, what to do and what is kept, then gives its
// action, and Reload the page unless reloading cannot help. A crash may come from a record this
// Eruko cannot run on, and a reload meets it again: it offers the records as a file, the one way
// out that needs no working page. It takes focus on its heading, so a screen reader starts there.
import { DISCIPLINES, UNITS } from './registry.js'
import { downloadBackup } from './download.js'
import { Screen, h } from '../parts/view.dom.js'
import { BASE, linkTo, slugOf } from './router.js'
import { setTitle } from './title.js'

/** @typedef {'app' | 'content' | 'chunk' | 'not-found'} Kind */

const HOME = () => h('a', { class: 'btn', href: BASE }, 'All units')

/**
 * Each kind's title, text, action, and whether it offers Reload and a backup file.
 * @param {Kind} kind
 * @returns {{ title: string, text: import('../parts/view.dom.js').Child, action?: import('../parts/view.dom.js').Child, reload: boolean, backup: boolean, crash?: boolean }}
 */
function screenOf(kind) {
  if (kind === 'app')
    return {
      title: 'Eruko stopped working',
      text: 'Reload the page. Work you saved is still in this browser.',
      action: HOME(),
      reload: true,
      backup: true,
      crash: true
    }
  if (kind === 'content')
    return {
      title: 'This page did not load',
      text: 'Reload the page. Work you saved is still in this browser.',
      reload: true,
      backup: true
    }
  if (kind === 'chunk')
    return navigator.onLine === false
      ? {
          title: 'This page needs a connection',
          text: 'This device is offline, and you have not opened this page here before. Reconnect, then reload. Work you saved is still in this browser.',
          action: HOME(),
          reload: true,
          backup: false
        }
      : {
          title: 'A new version of Eruko is ready',
          text: 'Reload to open this page. You lose the text you typed and did not save.',
          reload: true,
          backup: false
        }
  // Any address that names no page: says so, shows the address, and leads home; and to the unit
  // or the discipline the address starts with, when it names one (a page renamed or mistyped).
  const slug = slugOf(location)
  const unit = UNITS.find(u => slug.startsWith(`${u.slug}/`))
  const domain = !unit && DISCIPLINES.find(d => slug.startsWith(`explore/${d.id}/`))
  const near = unit
    ? { to: `/${unit.slug}`, name: unit.title }
    : domain
      ? { to: `/explore/${domain.id}`, name: domain.name }
      : null
  return {
    title: 'Page not found',
    text: [
      'There is no page at ',
      h('span', { class: 'sys-path' }, location.pathname),
      '. Check the address.'
    ],
    action: [
      h('a', { class: near ? 'btn' : 'btn btn-primary', href: BASE }, 'All units'),
      near && h('a', { class: 'btn btn-primary', href: linkTo(near.to) }, near.name)
    ],
    reload: false,
    backup: false
  }
}

export class ShellFailure extends Screen {
  /** @type {Kind} */
  kind = 'content'

  setup() {
    requestAnimationFrame(() => this.querySelector('h1')?.focus())
  }

  view() {
    const s = screenOf(this.kind)
    setTitle(s.title)
    return h(
      'main',
      { id: 'main', tabindex: '-1', class: s.crash ? 'page sys-crash' : 'page' },
      h(
        'div',
        { class: 'page-col sys' },
        h('h1', { class: 'page-title', tabindex: '-1' }, s.title),
        h('p', null, s.text),
        h(
          'div',
          { class: 'actions' },
          s.action,
          s.reload &&
            h(
              'button',
              { type: 'button', class: 'btn btn-primary', onclick: () => location.reload() },
              'Reload the page'
            )
        ),
        s.backup && [
          h('p', null, 'If it stops again after a reload, save your records as a file first.'),
          h(
            'div',
            { class: 'actions' },
            h(
              'button',
              { type: 'button', class: 'btn', onclick: downloadBackup },
              'Save a backup file'
            )
          )
        ]
      )
    )
  }
}
customElements.define('shell-failure', ShellFailure)

/**
 * A failure screen of `kind`.
 * @param {Kind} kind
 */
export function failure(kind) {
  const el = new ShellFailure()
  el.kind = kind
  return el
}
