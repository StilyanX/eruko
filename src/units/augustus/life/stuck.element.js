// Hides: the stuck life (Biography, the one next action, case 3): the reviews say the life's main
// account does not show its setbacks. Another account is picked, loaded and built as for any job,
// by the builder outside the app; or the life ends here as stuck, and the next-life checklist runs.
import { lifeId } from '../core/decode.logic.js'
import { send } from '../core/session.dom.js'
import { actions, choice, step } from '../../../parts/study.dom.js'
import { h } from '../../../parts/view.dom.js'
import { LifeScreen, lifeOf } from '../core/screens.dom.js'

export class AugustusStuck extends LifeScreen {
  /** The life's id. */
  life = lifeId('')

  view() {
    const life = this.life
    return step([
      h('h3', { tabindex: '-1' }, 'This book does not show the setbacks'),
      h(
        'p',
        null,
        'Reviews of this book say it does not show the setbacks of ',
        lifeOf(life).name,
        '. Read another account of the life, or end the life here.'
      ),
      h('p', null, 'Once another account is built, this life opens on it.'),
      actions(
        choice({
          primary: true,
          label: 'End this life',
          onPress: () => send({ t: 'end-life', life })
        })
      )
    ])
  }
}
customElements.define('augustus-stuck', AugustusStuck)
