// Hides: the track's Setup ("A Self-Study System", Programming, The track's material: Setup, for
// the track; Pin; Determinism gate): the fixed program each check form runs with its known
// outcome, how each outcome is read from the runner's replies, and the pin stored once every form
// gives its known outcome. A form that does not ends Setup with its name, and the track does not
// open.
import { TOOLS, deviceReport } from './check.logic.js'
import { countOf } from './track.logic.js'

/**
 * One fixed check: what it runs, whether the replies give its known outcome, and what it shows.
 * @typedef {Readonly<{ name: string, asks: readonly import('./track.logic.js').RunAsk[], ok: (r: readonly import('./track.logic.js').Reply[]) => boolean, said: (r: readonly import('./track.logic.js').Reply[]) => string }>} Check
 */

/** @param {readonly string[]} lines */
const text = lines => `${lines.join('\n')}\n`

/** One program per level: a feature the level brings, which the level before rejects. */
const FEATURES = {
  'c++11': 'int main() { auto f = [](int x) { return x; }; return f(0); }',
  'c++14': 'int main() { auto f = [](auto x) { return x; }; return f(0); }',
  'c++17': 'int main() { if constexpr (true) { return 0; } }',
  'c++20': 'consteval int f() { return 0; } int main() { return f(); }',
  'c++23':
    'constexpr int f() { if consteval { return 0; } else { return 1; } }\nint main() { return f(); }',
  'c++26': 'void f() = delete("no");\nint main() {}'
}
const LEVELS = /** @type {const} */ (['c++11', 'c++14', 'c++17', 'c++20', 'c++23'])

/** @param {import('./track.logic.js').Reply | undefined} r */
const built = r => Boolean(r?.compiled)
/** @param {import('./track.logic.js').Reply | undefined} r @param {number} [i] */
const out = (r, i = 0) => (r?.compiled ? (r.runs[i]?.stdout ?? '') : '')
/** @param {import('./track.logic.js').Reply | undefined} r @param {number} [i] */
const err = (r, i = 0) =>
  r?.compiled ? `${r.runs[i]?.stdout ?? ''}${r.runs[i]?.stderr ?? ''}` : ''

const KERNEL = text([
  '#include <cstdio>',
  '__global__ void twice(int* a)',
  '{',
  '    a[threadIdx.x] = 2 * threadIdx.x;',
  '}',
  'int main()',
  '{',
  '    int* a = nullptr;',
  '    cudaMalloc(&a, 32 * sizeof(int));',
  '    twice<<<1, 32>>>(a);',
  '    int h[32] {};',
  '    cudaMemcpy(h, a, sizeof h, cudaMemcpyDeviceToHost);',
  '    cudaFree(a);',
  '    std::printf("%d\\n", h[31]);',
  '}'
])

/** A kernel for each compute-sanitizer tool, wrong where `bad`: out of bounds, unwritten, a race, a barrier some threads skip. */
const TOOL_KERNELS = {
  memcheck: (/** @type {boolean} */ bad) =>
    text([
      '__global__ void k(int* a) { a[threadIdx.x] = 1; }',
      'int main()',
      '{',
      '    int* a = nullptr;',
      `    cudaMalloc(&a, ${bad ? 16 : 32} * sizeof(int));`,
      '    k<<<1, 32>>>(a);',
      '    cudaDeviceSynchronize();',
      '    cudaFree(a);',
      '}'
    ]),
  initcheck: (/** @type {boolean} */ bad) =>
    text([
      '__global__ void k(const int* a, int* b) { b[threadIdx.x] = a[threadIdx.x]; }',
      'int main()',
      '{',
      '    int* a = nullptr;',
      '    int* b = nullptr;',
      '    cudaMalloc(&a, 32 * sizeof(int));',
      '    cudaMalloc(&b, 32 * sizeof(int));',
      ...(bad ? [] : ['    cudaMemset(a, 0, 32 * sizeof(int));']),
      '    k<<<1, 32>>>(a, b);',
      '    cudaDeviceSynchronize();',
      '    cudaFree(a);',
      '    cudaFree(b);',
      '}'
    ]),
  racecheck: (/** @type {boolean} */ bad) =>
    text([
      '__global__ void k(int* out)',
      '{',
      '    __shared__ int s[64];',
      '    s[threadIdx.x] = threadIdx.x;',
      ...(bad ? [] : ['    __syncthreads();']),
      '    out[threadIdx.x] = s[63 - threadIdx.x];',
      '}',
      'int main()',
      '{',
      '    int* a = nullptr;',
      '    cudaMalloc(&a, 64 * sizeof(int));',
      '    k<<<1, 64>>>(a);',
      '    cudaDeviceSynchronize();',
      '    cudaFree(a);',
      '}'
    ]),
  synccheck: (/** @type {boolean} */ bad) =>
    text([
      '__global__ void k(int* out)',
      '{',
      '    __shared__ int s[64];',
      '    s[threadIdx.x] = 1;',
      `    if (${bad ? 'threadIdx.x < 16' : 'true'}) {`,
      '        __syncthreads();',
      '    }',
      '    out[threadIdx.x] = s[threadIdx.x];',
      '}',
      'int main()',
      '{',
      '    int* a = nullptr;',
      '    cudaMalloc(&a, 64 * sizeof(int));',
      '    k<<<1, 64>>>(a);',
      '    cudaDeviceSynchronize();',
      '    cudaFree(a);',
      '}'
    ])
}

/** The device's attributes, read by cudaDeviceGetAttribute, and its memory and driver. */
const DEVICE = text([
  '#include <cstdio>',
  'int main()',
  '{',
  '    cudaDeviceProp p {};',
  '    cudaGetDeviceProperties(&p, 0);',
  '    auto at = [](cudaDeviceAttr a) {',
  '        int v {0};',
  '        cudaDeviceGetAttribute(&v, a, 0);',
  '        return v;',
  '    };',
  '    std::size_t free {0};',
  '    std::size_t total {0};',
  '    cudaMemGetInfo(&free, &total);',
  '    int driver {0};',
  '    cudaDriverGetVersion(&driver);',
  '    std::printf("name=%s\\n", p.name);',
  '    std::printf("cc=%d.%d\\n", at(cudaDevAttrComputeCapabilityMajor),',
  '                at(cudaDevAttrComputeCapabilityMinor));',
  '    std::printf("sms=%d\\n", at(cudaDevAttrMultiProcessorCount));',
  '    std::printf("registers=%d\\n",',
  '                at(cudaDevAttrMaxRegistersPerMultiprocessor));',
  '    std::printf("shared=%d\\n",',
  '                at(cudaDevAttrMaxSharedMemoryPerMultiprocessor));',
  '    std::printf("warp=%d\\n", at(cudaDevAttrWarpSize));',
  '    std::printf("memclock=%d\\n", at(cudaDevAttrMemoryClockRate));',
  '    std::printf("bus=%d\\n", at(cudaDevAttrGlobalMemoryBusWidth));',
  '    std::printf("clock=%d\\n", at(cudaDevAttrClockRate));',
  '    std::printf("memory=%zu\\n", total);',
  '    std::printf("driver=%d\\n", driver);',
  '}'
])

/** The registers of a kernel by cudaFuncGetAttributes, beside what --resource-usage prints. */
const REGISTERS = text([
  '#include <cstdio>',
  '__global__ void axpy(float a, const float* x, float* y)',
  '{',
  '    int i = blockIdx.x * blockDim.x + threadIdx.x;',
  '    y[i] = a * x[i] + y[i];',
  '}',
  'int main()',
  '{',
  '    cudaFuncAttributes f {};',
  '    cudaFuncGetAttributes(&f, axpy);',
  '    std::printf("%d\\n", f.numRegs);',
  '}'
])

/** A reduction in a fixed order: the same bits on every run. */
const FIXED_SUM = text([
  '#include <cstdio>',
  '#include <cstring>',
  '__global__ void sum(const float* x, float* out)',
  '{',
  '    __shared__ float s[256];',
  '    s[threadIdx.x] = x[threadIdx.x];',
  '    __syncthreads();',
  '    for (int w = 128; w > 0; w /= 2) {',
  '        if (threadIdx.x < w) {',
  '            s[threadIdx.x] += s[threadIdx.x + w];',
  '        }',
  '        __syncthreads();',
  '    }',
  '    if (threadIdx.x == 0) {',
  '        *out = s[0];',
  '    }',
  '}',
  'int main()',
  '{',
  '    float h[256] {};',
  '    for (int i = 0; i < 256; ++i) {',
  '        h[i] = 1.0f / (i + 1);',
  '    }',
  '    float* x = nullptr;',
  '    float* r = nullptr;',
  '    cudaMalloc(&x, sizeof h);',
  '    cudaMalloc(&r, sizeof(float));',
  '    cudaMemcpy(x, h, sizeof h, cudaMemcpyHostToDevice);',
  '    sum<<<1, 256>>>(x, r);',
  '    float s {0};',
  '    cudaMemcpy(&s, r, sizeof s, cudaMemcpyDeviceToHost);',
  '    unsigned bits {0};',
  '    std::memcpy(&bits, &s, sizeof bits);',
  '    std::printf("%08x\\n", bits);',
  '}'
])

const HOST_OOB = text([
  '#include <cstdio>',
  '#include <vector>',
  'int main()',
  '{',
  '    std::vector<int> v(3);',
  '    std::printf("%d\\n", v.data()[3]);',
  '}'
])
const HOST_CLEAN = text([
  '#include <cstdio>',
  '#include <vector>',
  'int main()',
  '{',
  '    std::vector<int> v(3);',
  '    std::printf("%d\\n", v.data()[2]);',
  '}'
])
/** @param {boolean} bad */
const THREADS = bad =>
  text([
    '#include <atomic>',
    '#include <cstdio>',
    '#include <thread>',
    `${bad ? 'volatile int' : 'std::atomic<int>'} n {0};`,
    'int main()',
    '{',
    '    std::thread t([] { for (int i = 0; i < 100000; ++i) { n += 1; } });',
    '    for (int i = 0; i < 100000; ++i) {',
    '        n += 1;',
    '    }',
    '    t.join();',
    `    std::printf("%d\\n", ${bad ? 'n' : 'n.load()'});`,
    '}'
  ])
const PARALLEL = text([
  '#include <algorithm>',
  '#include <cstdio>',
  '#include <execution>',
  '#include <numeric>',
  '#include <vector>',
  'int main()',
  '{',
  '    std::vector<long> v(100000, 1);',
  '    long s = std::reduce(std::execution::par, v.begin(), v.end());',
  '    std::printf("%ld\\n", s);',
  '}'
])
const GDB = text([
  '#include <iostream>',
  '',
  'int main()',
  '{',
  '    int n {0};',
  '    std::cin >> n;',
  '    int twice {n * 2};',
  '    std::cout << twice << "\\n";',
  '}'
])

/** @param {string} code @param {Partial<import('./track.logic.js').RunAsk>} [more] @returns {import('./track.logic.js').RunAsk} */
const host = (code, more = {}) => ({ files: { 'main.cpp': code }, tests: [{ input: '' }], ...more })
/** @param {string} code @param {Partial<import('./track.logic.js').RunAsk>} [more] @returns {import('./track.logic.js').RunAsk} */
const device = (code, more = {}) => ({
  files: { 'main.cu': code },
  tests: [{ input: '' }],
  device: true,
  ...more
})

/** The fixed checks, in the paper's order. @type {readonly Check[]} */
export const CHECKS = [
  ...LEVELS.map((lv, i) => ({
    name: `g++ at -std=${lv}`,
    asks: [
      host(FEATURES[lv], { std: lv, flags: ['-c'] }),
      host(FEATURES[i < 4 ? (LEVELS[i + 1] ?? 'c++26') : 'c++26'], { std: lv, flags: ['-c'] })
    ],
    ok: (/** @type {readonly import('./track.logic.js').Reply[]} */ r) =>
      built(r[0]) && !built(r[1]),
    said: (/** @type {readonly import('./track.logic.js').Reply[]} */ r) =>
      `accepts its program: ${built(r[0]) ? 'yes' : 'no'}; rejects the next level's: ${built(r[1]) ? 'no' : 'yes'}.`
  })),
  {
    name: 'nvcc with g++ 16 as its host compiler',
    asks: [
      device(KERNEL),
      device(KERNEL.replace('a[threadIdx.x] = 2 * threadIdx.x;', 'a[threadIdx.x] = undeclared;'), {
        flags: ['-c']
      }),
      device(KERNEL, { std: 'c++17', flags: ['-c'] }),
      device(KERNEL, { std: 'c++20', flags: ['-c'] }),
      device(KERNEL, { std: 'c++23', flags: ['-c'] })
    ],
    ok: r => out(r[0]) === '62\n' && !built(r[1]) && built(r[2]) && built(r[3]),
    said: r =>
      `runs a kernel: ${out(r[0]).trim() || 'no'}; rejects a wrong one: ${built(r[1]) ? 'no' : 'yes'}; levels it accepts: ${['c++17', 'c++20', 'c++23'].filter((_, i) => built(r[i + 2])).join(', ')}.`
  },
  {
    name: "The device's memory and attributes",
    asks: [device(DEVICE)],
    ok: r => /^memory=\d+$/m.test(out(r[0])) && /^warp=32$/m.test(out(r[0])),
    said: r => out(r[0]).trim().split('\n').join('; ')
  },
  {
    name: '-fsanitize=address,undefined',
    asks: [host(HOST_OOB, { sanitize: 'address' }), host(HOST_CLEAN, { sanitize: 'address' })],
    ok: r => /AddressSanitizer/.test(err(r[0])) && !/Sanitizer/.test(err(r[1])),
    said: r =>
      `loud on an out-of-bounds read: ${/AddressSanitizer/.test(err(r[0])) ? 'yes' : 'no'}; silent on a clean program: ${/Sanitizer/.test(err(r[1])) ? 'no' : 'yes'}.`
  },
  {
    name: '-fsanitize=thread',
    asks: [
      host(THREADS(true), { sanitize: 'thread', flags: ['-pthread'] }),
      host(THREADS(false), { sanitize: 'thread', flags: ['-pthread'] })
    ],
    ok: r => /data race/.test(err(r[0])) && !/ThreadSanitizer/.test(err(r[1])),
    said: r =>
      `loud on a race: ${/data race/.test(err(r[0])) ? 'yes' : 'no'}; silent on a clean program: ${/ThreadSanitizer/.test(err(r[1])) ? 'no' : 'yes'}.`
  },
  ...TOOLS.map(tool => ({
    name: `compute-sanitizer --tool ${tool}`,
    asks: [device(TOOL_KERNELS[tool](true), { tool }), device(TOOL_KERNELS[tool](false), { tool })],
    ok: (/** @type {readonly import('./track.logic.js').Reply[]} */ r) =>
      built(r[0]) &&
      built(r[1]) &&
      deviceReport(err(r[0]), tool) !== null &&
      deviceReport(err(r[1]), tool) === null,
    said: (/** @type {readonly import('./track.logic.js').Reply[]} */ r) =>
      `loud on its wrong kernel: ${deviceReport(err(r[0]), tool) ? 'yes' : 'no'}; silent on a clean one: ${built(r[1]) && !deviceReport(err(r[1]), tool) ? 'yes' : 'no'}.`
  })),
  {
    name: 'cudaFuncGetAttributes against --resource-usage',
    asks: [device(REGISTERS, { report: ['resource-usage'] })],
    ok: r =>
      out(r[0]).trim() !== '' &&
      Number(out(r[0])) === countOf('registers axpy', r[0]?.compiled ? (r[0].reports ?? {}) : {}),
    said: r =>
      `cudaFuncGetAttributes: ${out(r[0]).trim()}; --resource-usage: ${countOf('registers axpy', r[0]?.compiled ? (r[0].reports ?? {}) : {})}.`
  },
  {
    name: 'cuobjdump lists the machine code of a kernel',
    asks: [device(KERNEL, { report: ['sass'] })],
    ok: r => countOf('sass ^STG', r[0]?.compiled ? (r[0].reports ?? {}) : {}) > 0,
    said: r => `stores listed: ${countOf('sass ^STG', r[0]?.compiled ? (r[0].reports ?? {}) : {})}.`
  },
  {
    name: 'gdb reads a name after a stated line',
    asks: [
      { files: { 'main.cpp': GDB }, tests: [{ input: '21\n' }], gdb: { line: 7, name: 'twice' } }
    ],
    ok: r => out(r[0]).trim() === '42',
    said: r => `twice after line 7: ${out(r[0]).trim() || 'nothing'}.`
  },
  {
    name: 'Threads with -pthread, and a parallel algorithm with TBB',
    asks: [host(THREADS(false), { flags: ['-pthread'] }), host(PARALLEL, { flags: ['-ltbb'] })],
    ok: r => out(r[0]) === '200000\n' && out(r[1]) === '100000\n',
    said: r => `threads: ${out(r[0]).trim() || 'no'}; parallel reduce: ${out(r[1]).trim() || 'no'}.`
  },
  {
    name: 'The same fixed kernel twice: the same bits',
    asks: [device(FIXED_SUM), device(FIXED_SUM)],
    ok: r => out(r[0]) !== '' && out(r[0]) === out(r[1]),
    said: r => `${out(r[0]).trim()} then ${out(r[1]).trim()}.`
  }
]

/**
 * The pin, from the runner's word of itself and the device check's output: the versions of g++,
 * nvcc and gdb, the driver, the device's name and compute capability, its memory, and the
 * highest level nvcc accepts. Null while g++ is not 16.
 * @param {import('./decode.logic.js').About} about
 * @param {string} deviceOut
 * @returns {import('./track-decode.logic.js').Pin | null}
 */
export function pinOf(about, deviceOut) {
  if (!/ 16\.\d/.test(about.version)) return null
  const field = (/** @type {string} */ k) =>
    deviceOut.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1] ?? ''
  return {
    gcc: about.version,
    nvcc: about.cuda ?? '',
    gdb: about.gdb ?? '',
    level: about.device ?? '',
    driver: field('driver'),
    device: field('name'),
    cc: field('cc'),
    memory: Number(field('memory')) || 0
  }
}

/** The index of the device check in CHECKS, whose output gives the pin. */
export const DEVICE_CHECK = CHECKS.findIndex(c => c.name.startsWith("The device's"))
