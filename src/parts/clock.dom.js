// Hides: the page's one clock. It ticks every 15 seconds while anything watches it, so a page left
// open past 04:00 turns with the study day, with no reload.
import { studyDay } from '../kernel/days.logic.js'

// The clock ticks this often while watched.
const TICK_MS = 15000

/** @type {Set<() => void>} */
const readers = new Set()
let nowMs = Date.now()
/** @type {ReturnType<typeof setInterval> | 0} */
let timer = 0

/** The clock, as a store a screen can watch. */
export const clock = {
  // Unwatched, the clock does not tick: it reads the time afresh.
  get: () => (timer ? nowMs : Date.now()),
  /** @param {() => void} read */
  subscribe(read) {
    readers.add(read)
    timer ||= setInterval(() => {
      nowMs = Date.now()
      readers.forEach(r => r())
    }, TICK_MS)
    return () => {
      readers.delete(read)
      if (!readers.size) {
        clearInterval(timer)
        timer = 0
      }
    }
  }
}

/** The study day now, turning at 04:00. */
export const today = () => studyDay(clock.get())
