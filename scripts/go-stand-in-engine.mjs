// A stand-in for KataGo's analysis engine in tests/go-engine.test.mjs: it reads one line of JSON
// per query and answers one line, in the engine's own form, with leads that follow from the
// moves alone so a test can foretell them.
import { createInterface } from 'node:readline'

createInterface({ input: process.stdin }).on('line', line => {
  // The tests write each query in the engine's own form.
  /** @type {{ id: string, moves: unknown[], analyzeTurns: number[], maxVisits: number }} */
  const q = JSON.parse(line)
  const lead = (q.moves.length % 5) - 2
  console.log(
    JSON.stringify({
      id: q.id,
      turnNumber: q.analyzeTurns[0],
      isDuringSearch: false,
      rootInfo: { scoreLead: lead, visits: q.maxVisits, currentPlayer: q.moves.length % 2 ? 'W' : 'B' },
      moveInfos: [
        { move: 'Q16', order: 1, scoreLead: lead - 1, visits: 10, pv: ['Q16'] },
        { move: 'D4', order: 0, scoreLead: lead + 0.5, visits: q.maxVisits - 10, pv: ['D4', 'Q16', 'D16'] }
      ]
    })
  )
})
