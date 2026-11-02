// Hides: how a study step speaks to a screen reader: one window event, heard by the study page's
// one polite live region (study-page.element.js). Every step speaks through it.
import { EVENTS, emit } from './events.dom.js'

/**
 * Say `text` through the page's live region. A line that mixes languages is an array: plain
 * strings, and `{ de }` for words of the language being learned, which the region marks `lang="de"`.
 * @param {string | (string | { de: string })[]} text
 */
export const say = text => emit(EVENTS.say, text)
