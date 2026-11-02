// One worker thread of scripts/lib/go-pool.mjs: it loads the job module it is given and answers
// one item at a time.
import { parentPort, workerData } from 'node:worker_threads'

const { default: job } = await import(workerData.module)
if (parentPort === null) throw new Error('go-pool-worker must run as a worker thread')
const port = parentPort
port.on('message', m => {
  if (m === null) process.exit(0)
  void Promise.resolve(m.item)
    .then(job)
    .then(result => port.postMessage({ k: m.k, result }))
})
