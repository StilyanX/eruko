// Hides: the languages a reader may choose, each a BCP 47 tag with its name in itself, in tag order:
// a fixed order, the same in every language, that needs no one script's alphabet. The pages are
// English whatever the choice until the translations come.

/** The languages the pages are written in. Settings shows the language list once there are two. */
export const TRANSLATED = ['en']

/** Whether Settings shows the language: only once the pages can be read in a second language. */
export const languageShown = () => TRANSLATED.length > 1

/** @type {[tag: string, name: string][]} */
export const LANGUAGES = [
  ['ar', 'العربية'],
  ['bg', 'Български'],
  ['de', 'Deutsch'],
  ['el', 'Ελληνικά'],
  ['en', 'English'],
  ['es', 'Español'],
  ['fr', 'Français'],
  ['it', 'Italiano'],
  ['ja', '日本語'],
  ['ko', '한국어'],
  ['pl', 'Polski'],
  ['pt-BR', 'Português'],
  ['ru', 'Русский'],
  ['uk', 'Українська'],
  ['zh-Hans', '简体中文'],
  ['zh-Hant', '繁體中文']
]
