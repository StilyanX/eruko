// Hides: the bar on top of every page: the path from the Eruko wordmark down to this page's
// parent, each step a link, then Settings. The page's own name is its title, right below. On the
// home page the wordmark is the page itself and links nowhere.
import { pathTo } from './registry.js'
import { Screen, h } from '../parts/view.dom.js'
import { chevronRight } from '../parts/icons.dom.js'
import { linkTo, slugOf } from './router.js'

export class ShellTopBar extends Screen {
  view() {
    const path = pathTo(slugOf(location))
    return h(
      'header',
      { class: 'lv-topbar' },
      h(
        'nav',
        { class: 'lv-crumb', 'aria-label': 'Path' },
        h(
          'ol',
          null,
          path.length === 0
            ? h('li', null, h('span', { class: 'lv-mark', 'aria-current': 'page' }, 'Eruko'))
            : path.map(([label, to], i) =>
                h(
                  'li',
                  { key: to },
                  i > 0 && chevronRight(),
                  h('a', { href: linkTo(to), class: i ? undefined : 'lv-mark' }, label)
                )
              )
        )
      ),
      h(
        'button',
        { type: 'button', class: 'lv-topbar-button', popovertarget: 'settings' },
        'Settings'
      )
    )
  }
}
customElements.define('shell-top-bar', ShellTopBar)
