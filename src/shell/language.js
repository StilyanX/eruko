// Hides: the reader's one setting besides the theme: the language, a tag from lib/languages.js,
// kept in the record. What is stored may be anything (an older Eruko's value, a hand edit): only a
// language the list holds is taken.
import { createStore, persistedStore } from '../record/store.js'
import { KEYS } from '../kernel/storage.logic.js'
import { LANGUAGES } from './languages.logic.js'

const stored = persistedStore(KEYS.settings)
const kept = stored.get().language
const known = LANGUAGES.find(([tag]) => tag === kept)?.[0]

/** The language chosen, as a store. */
export const language = createStore(known ?? 'en')

/** @param {string} tag */
export function setLanguage(tag) {
  language.set(tag)
  stored.set({ language: tag })
}
