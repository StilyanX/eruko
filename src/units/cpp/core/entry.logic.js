// Hides: the C++ course's entry in the app's list of units: its title, address, description,
// sources, pages and the sections of its unit page.
// The shell lists every unit's entry (shell/registry.js), through the unit's manifest.
import { reviewPage, startPage } from '../../../kernel/pages.logic.js'
import { KINDS, SECTIONS } from './course.gen.js'
import { STAGES, TRACK } from './track.gen.js'

/**
 * The language track's stages on the unit page, each a run of the track's kinds numbered on from
 * the course's kinds, under the part "The language track". A stage with no kind yet shows none.
 */
const TRACK_SECTIONS = STAGES.flatMap(st => {
  const first = TRACK.findIndex(k => k.stage === st.n)
  if (first < 0) return []
  const last = TRACK.map(k => k.stage).lastIndexOf(st.n)
  return [
    {
      title: `Stage ${st.n}: ${st.title}`,
      first: KINDS.length + first + 1,
      last: KINDS.length + last + 1,
      part: 'The language track'
    }
  ]
})

/**
 * The unit's own part of the record.
 * @type {import('../../../kernel/pages.logic.js').RecordPart}
 */
export const CPP_PART = { name: 'cpp', key: 'aether-cpp', title: 'C++' }

/** The Start page, which the unit page's first row opens. */
export const START = startPage('cpp')

/** The runner on this computer, which compiles and runs every program. */
export const RUNNER = 'http://127.0.0.1:8767'

/** @type {import('../../../kernel/pages.logic.js').Unit} */
export const UNIT = {
  // not "C++": a crumb or a link reading "Programming › C++" names the language, not the course
  title: 'C++ course',
  slug: 'explore/programming/cpp',
  discipline: { id: 'programming', name: 'Programming' },
  order: 6,
  parts: [CPP_PART],
  // The contest record is pasted, so the page never reads AtCoder itself.
  hosts: { connect: [RUNNER] },
  description:
    'Write C++ programs that do what a statement asks, one kind of program at a time. For each kind, read a worked example, fill the state table of a traced program, put a Parsons problem in order, then write a problem alone. Write each program whole in C++23 and press Check once; the hidden tests run. Sit one rated AtCoder contest a week. Each problem comes back on its date.',
  sources: [
    {
      title: 'Beginning C++23, for the order of the parts of the language',
      author: 'Ivor Horton and Peter Van Weert'
    },
    { title: 'C++ Core Guidelines, the style', author: 'Bjarne Stroustrup and Herb Sutter' },
    {
      title: 'N4950, the C++23 working draft, to check each fact',
      author: 'ISO/IEC JTC1/SC22/WG21'
    },
    { title: 'AtCoder Beginner Contest, the rated contests', author: 'AtCoder' },
    { title: 'GCC, the compiler', author: 'GNU Project' },
    {
      title: "Exercism's C++ track, the kinds after the twelve and their tests",
      author: 'Exercism and its contributors'
    },
    { title: 'Catch2 v2, the test runner of function problems', author: 'the Catch2 authors' },
    {
      title: "C++ Move Semantics – The Complete Guide, the order of the track's stage 2",
      author: 'Nicolai M. Josuttis'
    },
    {
      title: 'C++ Templates: The Complete Guide, 2nd ed., the order of stage 3',
      author: 'David Vandevoorde, Nicolai M. Josuttis and Douglas Gregor'
    },
    { title: 'C++20 – The Complete Guide, the order of stage 4', author: 'Nicolai M. Josuttis' },
    {
      title: 'C++23 – The Complete Guide, its table of contents for the order of stage 5',
      author: 'Nicolai M. Josuttis'
    },
    { title: 'Concurrency with Modern C++, the order of stage 6', author: 'Rainer Grimm' },
    {
      title: 'CUDA C++ Programming Guide and Best Practices Guide, stages 8 and 9',
      author: 'NVIDIA'
    },
    { title: 'PTX ISA, its memory consistency model, and the libcu++ reference', author: 'NVIDIA' },
    { title: 'CUDA, nvcc and compute-sanitizer, the device checks', author: 'NVIDIA' },
    {
      title:
        'Accuracy and Stability of Numerical Algorithms, 2nd ed., the bounds of stages 6 and 9',
      author: 'Nicholas J. Higham'
    },
    { title: 'IEEE 754-2019, the floating-point formats and roundings', author: 'IEEE' },
    {
      title: 'Programming Massively Parallel Processors, reduction, scan, stencil and sparse kinds',
      author: 'Wen-mei W. Hwu, David B. Kirk and Izzat El Hajj'
    },
    {
      title: 'Iterative Methods for Sparse Linear Systems, the solver kinds',
      author: 'Yousef Saad'
    },
    {
      title:
        'Solving Lattice QCD systems of equations using mixed precision solvers on GPUs, reliable updates',
      author: 'M. A. Clark, R. Babich, K. Barros, R. C. Brower and C. Rebbi'
    },
    {
      title: 'Roofline: an insightful visual performance model, arithmetic intensity',
      author: 'Samuel Williams, Andrew Waterman and David Patterson'
    },
    { title: 'CuTe layout documentation of CUTLASS, layouts of your own', author: 'NVIDIA' },
    { title: 'QUDA, the shapes of the reading', author: 'the QUDA developers' }
  ],
  pages: [
    START,
    reviewPage('cpp'),
    { title: 'Work list', slug: 'work', file: 'cpp/work', repeats: true }
  ],
  // The twelve whole-program kinds, then the kinds after them, by the runs the course file names; then
  // the language track's stages.
  sections: [...SECTIONS, ...TRACK_SECTIONS]
}
