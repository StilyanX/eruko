// Hides: the thread a problem from the learner's own game is posed and solved on, so that the page
// stays free while the search runs: it is sent a position (its stones and the side to move) and
// answers with the problem the search made of it, or null (pose.js).
import { pose } from './pose.logic.js'

self.onmessage = e => {
  const posed = pose(e.data)
  self.postMessage(posed.ok ? posed.value.problem : null)
}
