import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { blanked, scanFlags, scanHits } from './scan.logic.js'

test('comments and the insides of literals are blanked; lines and quotes stay', () => {
  const code =
    'int a {1\'000}; // new int\n/* delete\n p */ auto s {"new"};\nchar c {\'"\'};\nauto r {R"x(new)x"};\n'
  const b = blanked(code)
  assert.equal(b.split('\n').length, code.split('\n').length)
  assert.ok(!b.includes('new') && !b.includes('delete'))
  assert.ok(b.includes("int a {1'000};") && b.includes('auto s {"   "};'))
})

test('a pattern scan names its rule and the line of its first match; a word in a comment is no hit', () => {
  const scans = [{ rule: 'F.48', pattern: '\\breturn\\s+std::move\\s*\\(\\s*\\w+\\s*\\)' }]
  const bad = 'S f()\n{\n    S s;\n    return std::move(s);\n}\n'
  assert.deepEqual(scanHits(scans, bad), [{ rule: 'F.48', line: 4 }])
  assert.deepEqual(
    scanHits(scans, 'S f()\n{\n    // return std::move(s);\n    return S {};\n}\n'),
    []
  )
})

test('a warning scan is loud on its own warning at a line of the answer, silent on any other', () => {
  const scans = [{ rule: 'ES.49', warning: ['-Wold-style-cast'] }]
  const said =
    "main.cpp: In function 'int main()':\nmain.cpp:5:13: warning: use of old-style cast to 'int' [-Wold-style-cast]\n"
  assert.deepEqual(scanHits(scans, 'x', said), [{ rule: 'ES.49', line: 5 }])
  assert.deepEqual(
    scanHits(scans, 'x', 'main.cpp:5:13: warning: unused variable [-Wunused-variable]\n'),
    []
  )
  assert.deepEqual(scanHits(scans, 'x', said.replaceAll('main.cpp', 'other.h')), [])
  assert.deepEqual(scanFlags(scans, false), ['-Wold-style-cast'])
  assert.deepEqual(scanFlags(scans, true), ['-Xcompiler=-Wold-style-cast'])
})

test('a prefixed raw string and a u8 character literal are blanked too', () => {
  const b = blanked(
    'auto a {u8R"x(new int)x"};\nauto c {LR"(delete p)"};\nchar8_t d {u8\'n\'};\nint e {1\'000};\n'
  )
  assert.ok(!b.includes('new') && !b.includes('delete') && !b.includes("'n'"))
  assert.ok(b.includes('u8R"') && b.includes("1'000"))
})

/** A stage 7 kind's own scan, as its file holds it. @param {string} file */
const scanOf = file => {
  const s = readFileSync(new URL(`../content/track/7/${file}`, import.meta.url), 'utf8')
  const p = s.match(/^Pattern: \/(.*)\/(\w*)$/m)
  const w = s.match(/^Warning: (.*)$/m)
  return {
    rule: s.match(/^Rule: (.*)$/m)?.[1] ?? '',
    ...(p ? { pattern: p[1] ?? '', flags: p[2] ?? '' } : {}),
    ...(w ? { warning: (w[1] ?? '').split(/[\s,]+/) } : {})
  }
}
/** @param {string} file @param {string} code @param {string} [said] */
const loud = (file, code, said = '') => scanHits([scanOf(file)], code, said).length > 0

test('ES.41 flags an assignment that is not the leftmost operator, and no assignment that is', () => {
  const f = '24-es41-parenthesize.md'
  for (const c of [
    'if ((x = f()) != 0) {\n}\n',
    'a = b = 0;\n',
    'int y = (x = 3);\n',
    'if (!(ok = g())) {\n}\n',
    'x += y -= 2;\n'
  ])
    assert.ok(loud(f, c), c)
  for (const c of [
    'if (x = f()) {\n}\n',
    'while ((n = read())) {\n}\n',
    'for (i = 0; i < n; ++i) *p = 1;\n',
    'void f(int a = 1);\nS& operator=(const S& o) = default;\n',
    'template <class T = int, class U = T> struct X;\n',
    'auto f = [x = 1, y = 2]() { return x + y; };\n',
    'bool e = a == b;\nbool l = a <= b;\nbool n = a != b;\nx <<= 2;\n'
  ])
    assert.ok(!loud(f, c), c)
})

test('ES.46 reads -Wconversion too, so a narrowing long to char is a hit', () => {
  const said =
    "main.cpp:3:15: warning: conversion from 'long int' to 'char' may change value [-Wconversion]\n"
  assert.ok(loud('27-es46-lossy-conversions.md', 'x', said))
  assert.ok(scanOf('27-es46-lossy-conversions.md').warning?.includes('-Wfloat-conversion'))
})

test('R.3 flags new given to a raw pointer in any form, and new given to a smart pointer never', () => {
  const f = '10-r3-raw-pointer-non-owning.md'
  for (const c of [
    'struct C {\n    int* value;\n    C(int v) : value(new int {v})\n    {\n    }\n};\n',
    'struct C {\n    C(int v) : value(new int {v})\n    {\n    }\n    int* value;\n};\n',
    'int* p(new int);\n',
    'int* p {nullptr};\np = new int;\n',
    'auto p = new int {7};\n'
  ])
    assert.ok(loud(f, c), c)
  for (const c of [
    'struct C {\n    std::unique_ptr<int> value;\n    C(int v) : value(new int {v})\n    {\n    }\n    int get() { return *value; }\n};\n',
    'std::unique_ptr<int> p {new int {3}};\np.reset(new int);\n',
    'owner<int*> p = new int;\n'
  ])
    assert.ok(!loud(f, c), c)
})

test('ES.42 and F.22 flag a kernel that indexes its pointer parameter after a braced local', () => {
  const kernel =
    '__global__ void k(float* __restrict__ a, int n)\n{\n    int i {static_cast<int>(threadIdx.x)};\n    if (i < n) {\n        a[i] = 1.0f;\n    }\n}\n'
  assert.ok(loud('25-es42-simple-pointers.md', kernel))
  assert.ok(loud('03-f22-pointer-single-object.md', kernel))
  const apart =
    'struct S {\n    void f(int* p)\n    {\n        *p = 1;\n    }\n    void g(std::vector<int> p)\n    {\n        p[0] = 1;\n    }\n};\n'
  assert.ok(!loud('25-es42-simple-pointers.md', apart))
})

test("a warning on a kernel launch's line is nvcc's own code, never a hit", () => {
  const scan = { rule: 'ES.49', warning: ['-Wold-style-cast'] }
  const code = 'int main()\n{\n    k<<<1, 32>>>(p);\n    int x = (int)2.5;\n}\n'
  const said =
    'main.cu(3): warning: use of old-style cast [-Wold-style-cast]\nmain.cu(4): warning: use of old-style cast [-Wold-style-cast]\n'
  assert.deepEqual(scanHits([scan], code, said, 'main.cu'), [{ rule: 'ES.49', line: 4 }])
  assert.deepEqual(scanHits([scan], code, said.split('\n')[0], 'main.cu'), [])
  const braces = 'int main()\n{\n    cudaStream_t first {};\n}\n'
  assert.deepEqual(
    scanHits(
      [scan],
      braces,
      "main.cu(3): warning: old-style cast to 'struct CUstream_st*' [-Wold-style-cast]",
      'main.cu'
    ),
    []
  )
})
