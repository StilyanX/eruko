// Runs one job per item on worker threads, for the Go unit's authoring searches, which are slow
// and independent of one another. A job module exports `default`, a function from an item to
// something that can be sent between threads; `runPool` gives back the results in item order.
import { Worker } from 'node:worker_threads'
import { availableParallelism } from 'node:os'

/**
 * Every item through the job in `module` (a file URL), two fewer than the computer's cores at a
 * time; `seen` is told each result as it lands, with how many are done and how many there are.
 * The result type is the one `seen`'s first parameter is annotated with.
 * @template Item
 * @template Result
 * @param {string | URL} module
 * @param {Item[]} items
 * @param {{ seen?: (result: Result, done: number, all: number) => void }} [options]
 * @returns {Promise<Result[]>}
 */
export function runPool(module, items, { seen = () => {} } = {}) {
  const threads = Math.max(1, availableParallelism() - 2)
  return new Promise((resolve, reject) => {
    /** @type {Result[]} */
    const out = new Array(items.length)
    let next = 0
    let live = 0
    let done = 0
    if (!items.length) resolve(out)
    const start = () => {
      const worker = new Worker(new URL('go-pool-worker.mjs', import.meta.url), {
        workerData: { module: String(module) }
      })
      live++
      const give = () => {
        if (next < items.length) worker.postMessage({ k: next, item: items[next++] })
        else worker.postMessage(null)
      }
      worker.on('message', (/** @type {{ k: number, result: Result }} */ { k, result }) => {
        out[k] = result
        seen(result, ++done, items.length)
        give()
      })
      worker.on('error', reject)
      worker.on('exit', () => {
        if (--live > 0) return
        if (done < items.length)
          reject(new Error(`the workers stopped with ${items.length - done} items left`))
        else resolve(out)
      })
      give()
    }
    for (let t = 0; t < Math.min(threads, items.length); t++) start()
  })
}
