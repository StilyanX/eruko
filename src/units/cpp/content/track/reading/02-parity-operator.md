# 0.02 A nearest-neighbour operator split by parity
Task: a nearest-neighbour operator on a periodic four-dimensional lattice split by parity: a 3 by 3 complex matrix times a 3-vector from each neighbour, in a kernel, with its block size chosen by the counts of blocks per multiprocessor
Shape: QUDA include/kernels/laplace.cuh (a matrix times the vector of each of the eight neighbours, the backward one through the conjugate transpose), include/dslash.h (bytes), include/index_helper.cuh (the even-odd index)
Device: yes
Write a kernel that, at each even site of a periodic lattice, adds a 3 by 3 complex matrix times the 3-vector of each of the eight neighbours.
The vectors live on the odd sites and the results on the even sites, each kept by half index.
Choose the kernel's block size from the blocks per multiprocessor of each size you may pick.

## Bound
Tag: 8.12
Count: the bytes the routine moves per site in single precision, each matrix kept whole as 18 reals: its loads and its one store
Answer: 792
Source: QUDA include/dslash.h, bytes(): per site num_dir·gauge_bytes + (num_dir − 2)·spinor_bytes + 2·proj_spinor_bytes + spinor_bytes, with num_dir = 8, gauge_bytes = 18·4 (reconstruct 18, float), spinor_bytes = 2·Nc·Ns·4 = 24 for Nc = 3, Ns = 1, and proj_spinor_bytes = spinor_bytes when Ns is not 4; the shape is include/kernels/laplace.cuh
Derivation 1: eight matrices of 18 floats, 8 · 72 = 576; eight neighbour vectors of 6 floats, 8 · 24 = 192; one stored vector, 24: 576 + 192 + 24 = 792.
Derivation 2: each of the four directions loads a matrix and a vector forward and backward, 2 · (72 + 24) = 192, so 4 · 192 = 768 loaded; with the 24 stored that is 792.

## Verdict 1
Tag: 9.11
```cuda
#include <cuda/std/array>

using Extents = cuda::std::array<int, 4>;

constexpr int forward(int s, int mu, Extents n)
{
    Extents c {};
    for (int nu {0}; nu < 4; ++nu) {
        c[nu] = s % n[nu];
        s /= n[nu];
    }
    c[mu] = (c[mu] + 1) % n[mu];
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

static_assert(forward(7, 0, {4, 2, 2, 2}) / 2 == 4);

int main()
{
}
```
Answer: c++23 ill-formed 16

## Verdict 2
Tag: 8.09
```cuda
#include <algorithm>

constexpr int blocks(int r, int t)
{
    int warps {t / 32};
    int perWarp {(r * 32 + 255) / 256 * 256};
    int byRegs {65536 / perWarp / 4 * 4 / warps};
    return std::min({24, 1536 / t, byRegs});
}

constexpr int best(int r)
{
    int size {64};
    int most {0};
    for (int t : {64, 128, 256, 512}) {
        if (blocks(r, t) * t >= most) {
            most = blocks(r, t) * t;
            size = t;
        }
    }
    return size;
}

static_assert(best(72) == 256);

int main()
{
}
```
Answer: c++23 ill-formed 24

## Count
Tag: 8.12
Columns: loaded, stored
```cuda
#include <cstdio>
#include <cuda/std/complex>

using Complex = cuda::std::complex<float>;

struct Link {
    Complex e[3][3] {};
};

struct Vector {
    Complex c[3] {};
};

template <typename T>
struct Counted {
    T* data {nullptr};

    __device__ T load(int i, int line = __builtin_LINE()) const
    {
        for (unsigned b {0}; b < sizeof(T); ++b) {
            printf("@%d loaded\n", line);
        }
        return data[i];
    }

    __device__ void store(int i, T v,
                          int line = __builtin_LINE()) const
    {
        for (unsigned b {0}; b < sizeof(T); ++b) {
            printf("@%d stored\n", line);
        }
        data[i] = v;
    }
};

__device__ int step(int s, int mu, int by)
{
    int stride {1 << (2 * mu)};
    int c {s / stride % 4};
    return s + stride * ((c + 4 + by) % 4 - c);
}

__global__ void apply(Counted<Link> u, Counted<Vector> in,
                      Counted<Vector> out)
{
    int s {0};
    Vector r {};
    for (int mu {0}; mu < 4; ++mu) {
        int f {step(s, mu, 1)};
        int b {step(s, mu, -1)};
        Link uf {u.load(mu * 256 + s)};
        Vector vf {in.load(f / 2)};
        Link ub {u.load(mu * 256 + b)};
        Vector vb {in.load(b / 2)};
        for (int i {0}; i < 3; ++i) {
            for (int j {0}; j < 3; ++j) {
                r.c[i] += uf.e[i][j] * vf.c[j];
                r.c[i] += cuda::std::conj(ub.e[j][i]) * vb.c[j];
            }
        }
    }
    out.store(s / 2, r);
}

int main()
{
    Link* u {nullptr};
    Vector* in {nullptr};
    Vector* out {nullptr};
    cudaMalloc(&u, 4 * 256 * sizeof(Link));
    cudaMalloc(&in, 128 * sizeof(Vector));
    cudaMalloc(&out, 128 * sizeof(Vector));
    cudaMemset(u, 0, 4 * 256 * sizeof(Link));
    cudaMemset(in, 0, 128 * sizeof(Vector));
    apply<<<1, 1>>>({u}, {in}, {out});
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(in);
    cudaFree(u);
}
```

## Alone 1
Tag: 9.11
Newer: 147, 151, 153
Form: run
Write a program that applies an operator to a field on a periodic lattice, in a kernel, and prints the result at some sites.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), the parity (x + y + z + t) mod 2 and the half index s / 2, rounded down.
A step from a site in direction mu (0 for x, 1 for y, 2 for z, 3 for t) by +1 or -1 changes that coordinate by 1 and wraps around, so it stays from 0 to its extent minus 1.
Each site s holds four links U_mu(s), each a 3 by 3 matrix of float complex numbers.
Entry (i, j) of U_mu(s) has the real part (s + 2·mu + 3·i + j) mod 5 − 2 and the imaginary part (3·s + mu + i + 2·j) mod 3 − 1.
The input field holds three float complex numbers at each odd site s, kept by half index.
Its entry i has the real part (s + i) mod 7 − 3 and the imaginary part (2·s + 3·i) mod 5 − 2.
The output field, kept by half index, holds at each even site s the sum over the four directions mu of two terms.
The first term is U_mu(s) times the input at the step from s by +1 in mu.
The second is the conjugate transpose of U_mu(r) times the input at r, where r is the step from s by -1 in mu.
A kernel with one thread per even site computes the output field.
Its block size is the one of 64, 128, 256 and 512 whose blocks per multiprocessor, from cudaOccupancyMaxActiveBlocksPerMultiprocessor with no shared bytes, times the size is largest; on a tie, the largest size.
Input: one line, X Y Z T and q; then one line of q site indices.
Output: q lines, each the site index, then the real and imaginary parts of the three output entries there, as whole numbers, all separated by spaces.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; 1 ≤ q ≤ 16; each site is even and 0 ≤ s < X·Y·Z·T.
### Examples
```in
2 2 2 2 3
0 3 15
```
```out
0 9 8 -5 -6 -6 9
3 -16 11 28 -14 -20 15
15 -11 -4 -2 21 -10 -17
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

__global__ void apply(Extents n, cuda::std::span<const Link> u,
                      cuda::std::span<const Vector> in,
                      cuda::std::span<Vector> out)
{
    unsigned k {blockIdx.x * blockDim.x + threadIdx.x};
    int h {static_cast<int>(k)};
    if (h < static_cast<int>(out.size())) {
        int v {n[0] * n[1] * n[2] * n[3]};
        Extents c {coords(2 * h, n)};
        int s {2 * h + (c[1] + c[2] + c[3]) % 2};
        Vector r {};
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(s, mu, 1, n)};
            int b {step(s, mu, -1, n)};
            Vector a {times(u[mu * v + s], in[f / 2])};
            Vector d {adjoint_times(u[mu * v + b], in[b / 2])};
            for (int i {0}; i < 3; ++i) {
                r.c[i] += a.c[i] + d.c[i];
            }
        }
        out[h] = r;
    }
}

int block_size()
{
    int best {64};
    int most {0};
    for (int b : {64, 128, 256, 512}) {
        int k {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(&k, apply,
                                                      b, 0);
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
    int b {block_size()};
    int half {v / 2};
    apply<<<(half + b - 1) / b, b>>>(n, {u, 4 * sites},
                                     {in, sites / 2},
                                     {out, sites / 2});
    cudaDeviceSynchronize();
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

__global__ void apply(Extents n, cuda::std::span<const Link> u,
                      cuda::std::span<const Vector> in,
                      cuda::std::span<Vector> out)
{
    unsigned k {blockIdx.x * blockDim.x + threadIdx.x};
    int h {static_cast<int>(k)};
    if (h < static_cast<int>(out.size())) {
        int v {n[0] * n[1] * n[2] * n[3]};
        Extents c {coords(2 * h, n)};
        int s {2 * h + (c[1] + c[2] + c[3]) % 2};
        Vector r {};
        for (int mu {0}; mu < 4; ++mu) {
            int f {step(s, mu, 1, n)};
            int b {step(s, mu, 1, n)};
            Vector a {times(u[mu * v + s], in[f / 2])};
            Vector d {adjoint_times(u[mu * v + b], in[b / 2])};
            for (int i {0}; i < 3; ++i) {
                r.c[i] += a.c[i] + d.c[i];
            }
        }
        out[h] = r;
    }
}

int block_size()
{
    int best {64};
    int most {0};
    for (int b : {64, 128, 256, 512}) {
        int k {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(&k, apply,
                                                      b, 0);
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
    int b {block_size()};
    int half {v / 2};
    apply<<<(half + b - 1) / b, b>>>(n, {u, 4 * sites},
                                     {in, sites / 2},
                                     {out, sites / 2});
    cudaDeviceSynchronize();
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
2 2 2 2 1
5
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
4 2 2 2 2
0 7
```
