# 0.03 The operator split into an interior kernel and a face kernel
Task: the same operator split into an interior kernel and a face kernel, the face gathered into a buffer and applied after the interior in a second stream, the sum equal to the result of task 2
Shape: QUDA include/kernels/laplace.cuh and include/dslash_helper.cuh (the interior and exterior kernel types), include/kernels/dslash_pack.cuh (the face packed into a buffer), include/dslash.h (bytes of the exterior kernel)
Device: yes
Write the operator of the task before as two kernels: an interior kernel and a face kernel.
The interior kernel adds every term that stays inside the lattice in t; a gather kernel copies the face vectors into buffers.
The face kernel runs in a second stream, after the interior, and adds the terms that wrap around in t.
The sum equals the result of the task before.

## Bound
Tag: 9.12
Count: the bytes the face kernel moves per face site in single precision, each matrix kept whole as 18 reals
Answer: 144
Source: QUDA include/dslash.h, bytes(): an exterior kernel moves ghost_bytes = (proj_spinor_bytes + gauge_bytes) + 2·spinor_bytes per face site, with gauge_bytes = 18·4, spinor_bytes = 2·Nc·Ns·4 = 24 for Nc = 3, Ns = 1, and proj_spinor_bytes = spinor_bytes when Ns is not 4
Derivation 1: one matrix, 18 · 4 = 72, and one buffer vector, 6 · 4 = 24, for the term; the partial result loaded, 24, and stored, 24: 72 + 24 + 24 + 24 = 144.
Derivation 2: the term costs a matrix and a vector, 72 + 24 = 96; adding into the output reads and writes one vector, 2 · 24 = 48; 96 + 48 = 144.

## Verdict 1
Tag: 9.13
```cuda
constexpr int interior(int x, int y, int z, int t)
{
    int count {0};
    for (int s {0}; s < x * y * z * t; ++s) {
        int c[4] {s % x, s / x % y, s / (x * y) % z,
                  s / (x * y * z)};
        bool even {(c[0] + c[1] + c[2] + c[3]) % 2 == 0};
        if (even && c[3] != 0 && c[3] != t - 1) {
            ++count;
        }
    }
    return count;
}

static_assert(interior(4, 4, 4, 8) == 224);

int main()
{
}
```
Answer: c++23 ill-formed 15

## Verdict 2
Tag: 9.12
```cuda
#include <cuda/std/array>

using Extents = cuda::std::array<int, 4>;

constexpr int face_site(int k, int t, int p, Extents n)
{
    int f {n[0] * n[1] * n[2]};
    int s {2 * k + f * t};
    int c[4] {s % n[0], s / n[0] % n[1],
              s / (n[0] * n[1]) % n[2], t};
    return s + (c[1] + c[2] + c[3] + p) % 2;
}

static_assert(face_site(3, 1, 1, {2, 2, 2, 4}) == 14);

int main()
{
}
```
Answer: c++23 defined

## Alone 1
Tag: 9.13
Newer: 223, 227, 229
Form: run
Write a program that computes the operator of the task before in two parts, in two streams, and prints the result at some sites.
The lattice, the links, the input field, the output field and the operator are those of the task before.
The interior kernel, one thread per even site, adds every term except two: the +1 term in t at sites with t = T − 1, and the -1 term in t at sites with t = 0.
Its block size is chosen as in the task before.
A gather kernel in a second stream copies the input at the odd sites with t = 0 into one buffer, and at the odd sites with t = T − 1 into another.
Each buffer holds X·Y·Z / 2 vectors; the vector of site s goes to place (s mod X·Y·Z) / 2, rounded down.
After the interior kernel ends, a face kernel in the second stream adds the two missing terms, taking the input from the buffers.
Input: one line, X Y Z T and q; then one line of q site indices.
Output: q lines, each the site index, then the real and imaginary parts of the three output entries there, as whole numbers, all separated by spaces.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; 1 ≤ q ≤ 16; each site is even and 0 ≤ s < X·Y·Z·T.
### Examples
```in
2 2 2 4 4
9 12 19 22
```
```out
9 3 -5 -16 4 38 -7
12 -17 -16 5 -11 15 24
19 -5 -13 2 14 -13 -10
22 22 -16 -2 -3 7 -8
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/complex>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Complex = cuda::std::complex<float>;
using Extents = cuda::std::array<int, 4>;

struct Link {
    Complex e[3][3] {};
};

struct Vector {
    Complex c[3] {};
};

__host__ __device__ Extents coords(int s, Extents n)
{
    Extents c {};
    for (int mu {0}; mu < 4; ++mu) {
        c[mu] = s % n[mu];
        s /= n[mu];
    }
    return c;
}

__host__ __device__ int index(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__device__ int step(int s, int mu, int by, Extents n)
{
    Extents c {coords(s, n)};
    c[mu] = (c[mu] + n[mu] + by) % n[mu];
    return index(c, n);
}

__device__ Vector times(const Link& u, const Vector& v)
{
    Vector r {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            r.c[i] += u.e[i][j] * v.c[j];
        }
    }
    return r;
}

__device__ Vector adjoint_times(const Link& u, const Vector& v)
{
    Vector r {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            r.c[i] += cuda::std::conj(u.e[j][i]) * v.c[j];
        }
    }
    return r;
}

__device__ int thread()
{
    unsigned k {blockIdx.x * blockDim.x + threadIdx.x};
    return static_cast<int>(k);
}

__device__ int site(int k, int t, int p, Extents n)
{
    int f {n[0] * n[1] * n[2]};
    Extents c {coords(2 * k + f * t, n)};
    return 2 * k + f * t + (c[1] + c[2] + c[3] + p) % 2;
}

__global__ void interior(Extents n,
                         cuda::std::span<const Link> u,
                         cuda::std::span<const Vector> in,
                         cuda::std::span<Vector> out)
{
    int h {thread()};
    if (h < static_cast<int>(out.size())) {
        int v {n[0] * n[1] * n[2] * n[3]};
        Extents c {coords(2 * h, n)};
        int s {2 * h + (c[1] + c[2] + c[3]) % 2};
        Vector r {};
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(s, mu, 1, n)};
            int b {step(s, mu, -1, n)};
            if (mu != 3 || c[3] != n[3] - 1) {
                Vector a {times(u[mu * v + s], in[f / 2])};
                for (int i {0}; i < 3; ++i) {
                    r.c[i] += a.c[i];
                }
            }
            if (mu != 3 || c[3] != 0) {
                const Link& w {u[mu * v + b]};
                Vector d {adjoint_times(w, in[b / 2])};
                for (int i {0}; i < 3; ++i) {
                    r.c[i] += d.c[i];
                }
            }
        }
        out[h] = r;
    }
}

__global__ void gather(Extents n,
                       cuda::std::span<const Vector> in,
                       cuda::std::span<Vector> front,
                       cuda::std::span<Vector> back)
{
    int k {thread()};
    if (k < static_cast<int>(front.size())) {
        front[k] = in[site(k, 0, 1, n) / 2];
        back[k] = in[site(k, n[3] - 1, 1, n) / 2];
    }
}

__global__ void face(Extents n, cuda::std::span<const Link> u,
                     cuda::std::span<const Vector> front,
                     cuda::std::span<const Vector> back,
                     cuda::std::span<Vector> out)
{
    int k {thread()};
    if (k < static_cast<int>(front.size())) {
        int v {n[0] * n[1] * n[2] * n[3]};
        int top {site(k, n[3] - 1, 0, n)};
        Vector a {times(u[3 * v + top], front[k])};
        int low {site(k, 0, 0, n)};
        int r {step(low, 3, -1, n)};
        Vector d {adjoint_times(u[3 * v + r], back[k])};
        for (int i {0}; i < 3; ++i) {
            out[top / 2].c[i] += a.c[i];
            out[low / 2].c[i] += d.c[i];
        }
    }
}

int block_size()
{
    int best {64};
    int most {0};
    for (int b : {64, 128, 256, 512}) {
        int k {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(
            &k, interior, b, 0);
        if (k * b >= most) {
            most = k * b;
            best = b;
        }
    }
    return best;
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t sites {static_cast<std::size_t>(v)};
    Link* u {nullptr};
    Vector* in {nullptr};
    Vector* out {nullptr};
    cudaMallocManaged(&u, 4 * sites * sizeof(Link));
    cudaMallocManaged(&in, sites / 2 * sizeof(Vector));
    cudaMallocManaged(&out, sites / 2 * sizeof(Vector));
    for (int k {0}; k < 4 * v; ++k) {
        int mu {k / v};
        int s {k % v};
        for (int i {0}; i < 3; ++i) {
            for (int j {0}; j < 3; ++j) {
                int re {(s + 2 * mu + 3 * i + j) % 5 - 2};
                int im {(3 * s + mu + i + 2 * j) % 3 - 1};
                u[k].e[i][j] = Complex(static_cast<float>(re),
                                       static_cast<float>(im));
            }
        }
    }
    for (int s {0}; s < v; ++s) {
        Extents c {coords(s, n)};
        if ((c[0] + c[1] + c[2] + c[3]) % 2 == 1) {
            for (int i {0}; i < 3; ++i) {
                int re {(s + i) % 7 - 3};
                int im {(2 * s + 3 * i) % 5 - 2};
                in[s / 2].c[i] = Complex(static_cast<float>(re),
                    static_cast<float>(im));
            }
        }
    }
    std::size_t faces {sites / n[3] / 2};
    Vector* front {nullptr};
    Vector* back {nullptr};
    cudaMalloc(&front, faces * sizeof(Vector));
    cudaMalloc(&back, faces * sizeof(Vector));
    cudaStream_t first {};
    cudaStream_t second {};
    cudaStreamCreate(&first);
    cudaStreamCreate(&second);
    cudaEvent_t done {};
    cudaEventCreateWithFlags(&done, cudaEventDisableTiming);
    int b {block_size()};
    int half {v / 2};
    int f {static_cast<int>(faces)};
    interior<<<(half + b - 1) / b, b, 0, first>>>(
        n, {u, 4 * sites}, {in, sites / 2}, {out, sites / 2});
    cudaEventRecord(done, first);
    gather<<<(f + 63) / 64, 64, 0, second>>>(
        n, {in, sites / 2}, {front, faces}, {back, faces});
    cudaStreamWaitEvent(second, done);
    face<<<(f + 63) / 64, 64, 0, second>>>(
        n, {u, 4 * sites}, {front, faces}, {back, faces},
        {out, sites / 2});
    cudaStreamSynchronize(second);
    cudaEventDestroy(done);
    cudaStreamDestroy(second);
    cudaStreamDestroy(first);
    cudaFree(back);
    cudaFree(front);
    for (int k {0}; k < q; ++k) {
        int s {0};
        std::cin >> s;
        std::print("{}", s);
        for (Complex z : out[s / 2].c) {
            int re {static_cast<int>(z.real())};
            int im {static_cast<int>(z.imag())};
            std::print(" {} {}", re, im);
        }
        std::println();
    }
    cudaFree(out);
    cudaFree(in);
    cudaFree(u);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/complex>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Complex = cuda::std::complex<float>;
using Extents = cuda::std::array<int, 4>;

struct Link {
    Complex e[3][3] {};
};

struct Vector {
    Complex c[3] {};
};

__host__ __device__ Extents coords(int s, Extents n)
{
    Extents c {};
    for (int mu {0}; mu < 4; ++mu) {
        c[mu] = s % n[mu];
        s /= n[mu];
    }
    return c;
}

__host__ __device__ int index(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__device__ int step(int s, int mu, int by, Extents n)
{
    Extents c {coords(s, n)};
    c[mu] = (c[mu] + n[mu] + by) % n[mu];
    return index(c, n);
}

__device__ Vector times(const Link& u, const Vector& v)
{
    Vector r {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            r.c[i] += u.e[i][j] * v.c[j];
        }
    }
    return r;
}

__device__ Vector adjoint_times(const Link& u, const Vector& v)
{
    Vector r {};
    for (int i {0}; i < 3; ++i) {
        for (int j {0}; j < 3; ++j) {
            r.c[i] += cuda::std::conj(u.e[j][i]) * v.c[j];
        }
    }
    return r;
}

__device__ int thread()
{
    unsigned k {blockIdx.x * blockDim.x + threadIdx.x};
    return static_cast<int>(k);
}

__device__ int site(int k, int t, int p, Extents n)
{
    int f {n[0] * n[1] * n[2]};
    Extents c {coords(2 * k + f * t, n)};
    return 2 * k + f * t + (c[1] + c[2] + c[3] + p) % 2;
}

__global__ void interior(Extents n,
                         cuda::std::span<const Link> u,
                         cuda::std::span<const Vector> in,
                         cuda::std::span<Vector> out)
{
    int h {thread()};
    if (h < static_cast<int>(out.size())) {
        int v {n[0] * n[1] * n[2] * n[3]};
        Extents c {coords(2 * h, n)};
        int s {2 * h + (c[1] + c[2] + c[3]) % 2};
        Vector r {};
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(s, mu, 1, n)};
            int b {step(s, mu, -1, n)};
            if (mu != 3 || c[3] != n[3] - 1) {
                Vector a {times(u[mu * v + s], in[f / 2])};
                for (int i {0}; i < 3; ++i) {
                    r.c[i] += a.c[i];
                }
            }
            if (mu != 3 || c[3] != n[3] - 1) {
                const Link& w {u[mu * v + b]};
                Vector d {adjoint_times(w, in[b / 2])};
                for (int i {0}; i < 3; ++i) {
                    r.c[i] += d.c[i];
                }
            }
        }
        out[h] = r;
    }
}

__global__ void gather(Extents n,
                       cuda::std::span<const Vector> in,
                       cuda::std::span<Vector> front,
                       cuda::std::span<Vector> back)
{
    int k {thread()};
    if (k < static_cast<int>(front.size())) {
        front[k] = in[site(k, 0, 1, n) / 2];
        back[k] = in[site(k, n[3] - 1, 1, n) / 2];
    }
}

__global__ void face(Extents n, cuda::std::span<const Link> u,
                     cuda::std::span<const Vector> front,
                     cuda::std::span<const Vector> back,
                     cuda::std::span<Vector> out)
{
    int k {thread()};
    if (k < static_cast<int>(front.size())) {
        int v {n[0] * n[1] * n[2] * n[3]};
        int top {site(k, n[3] - 1, 0, n)};
        Vector a {times(u[3 * v + top], front[k])};
        int low {site(k, 0, 0, n)};
        int r {step(low, 3, -1, n)};
        Vector d {adjoint_times(u[3 * v + r], back[k])};
        for (int i {0}; i < 3; ++i) {
            out[top / 2].c[i] += a.c[i];
            out[low / 2].c[i] += d.c[i];
        }
    }
}

int block_size()
{
    int best {64};
    int most {0};
    for (int b : {64, 128, 256, 512}) {
        int k {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(
            &k, interior, b, 0);
        if (k * b >= most) {
            most = k * b;
            best = b;
        }
    }
    return best;
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t sites {static_cast<std::size_t>(v)};
    Link* u {nullptr};
    Vector* in {nullptr};
    Vector* out {nullptr};
    cudaMallocManaged(&u, 4 * sites * sizeof(Link));
    cudaMallocManaged(&in, sites / 2 * sizeof(Vector));
    cudaMallocManaged(&out, sites / 2 * sizeof(Vector));
    for (int k {0}; k < 4 * v; ++k) {
        int mu {k / v};
        int s {k % v};
        for (int i {0}; i < 3; ++i) {
            for (int j {0}; j < 3; ++j) {
                int re {(s + 2 * mu + 3 * i + j) % 5 - 2};
                int im {(3 * s + mu + i + 2 * j) % 3 - 1};
                u[k].e[i][j] = Complex(static_cast<float>(re),
                                       static_cast<float>(im));
            }
        }
    }
    for (int s {0}; s < v; ++s) {
        Extents c {coords(s, n)};
        if ((c[0] + c[1] + c[2] + c[3]) % 2 == 1) {
            for (int i {0}; i < 3; ++i) {
                int re {(s + i) % 7 - 3};
                int im {(2 * s + 3 * i) % 5 - 2};
                in[s / 2].c[i] = Complex(static_cast<float>(re),
                    static_cast<float>(im));
            }
        }
    }
    std::size_t faces {sites / n[3] / 2};
    Vector* front {nullptr};
    Vector* back {nullptr};
    cudaMalloc(&front, faces * sizeof(Vector));
    cudaMalloc(&back, faces * sizeof(Vector));
    cudaStream_t first {};
    cudaStream_t second {};
    cudaStreamCreate(&first);
    cudaStreamCreate(&second);
    cudaEvent_t done {};
    cudaEventCreateWithFlags(&done, cudaEventDisableTiming);
    int b {block_size()};
    int half {v / 2};
    int f {static_cast<int>(faces)};
    interior<<<(half + b - 1) / b, b, 0, first>>>(
        n, {u, 4 * sites}, {in, sites / 2}, {out, sites / 2});
    cudaEventRecord(done, first);
    gather<<<(f + 63) / 64, 64, 0, second>>>(
        n, {in, sites / 2}, {front, faces}, {back, faces});
    cudaStreamWaitEvent(second, done);
    face<<<(f + 63) / 64, 64, 0, second>>>(
        n, {u, 4 * sites}, {front, faces}, {back, faces},
        {out, sites / 2});
    cudaStreamSynchronize(second);
    cudaEventDestroy(done);
    cudaStreamDestroy(second);
    cudaStreamDestroy(first);
    cudaFree(back);
    cudaFree(front);
    for (int k {0}; k < q; ++k) {
        int s {0};
        std::cin >> s;
        std::print("{}", s);
        for (Complex z : out[s / 2].c) {
            int re {static_cast<int>(z.real())};
            int im {static_cast<int>(z.imag())};
            std::print(" {} {}", re, im);
        }
        std::println();
    }
    cudaFree(out);
    cudaFree(in);
    cudaFree(u);
}
```
### Tests
```in
2 2 2 2 3
0 3 15
```
```in
4 2 2 2 4
0 7 9 31
```
```in
2 4 6 8 5
0 3 100 188 383
```
```in
8 8 8 8 6
0 9 510 1001 2730 4095
```
### Witness
```in
2 2 2 4 2
0 25
```
