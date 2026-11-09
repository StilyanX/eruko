# 9.11 The neighbour of a site on a periodic lattice
Part: the neighbour of a site on a periodic lattice
Clause: [expr.mul], QUDA include/index_helper.cuh linkIndexShift (a step on the periodic lattice), PMPP 5th ed. §8.2 Parallel stencil – a basic kernel, PMPP 5th ed. §23.2 Multi-GPU stencil with MPI (the periodic boundary condition)
After: 9.10
Levels: c++23
Device: yes
Source: the source of QUDA, include/index_helper.cuh (read for the shape of a periodic step, not copied); Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 8, §8.2, and ch. 23, §23.2

## Example
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <print>

//: Keep the four extents X, Y, Z, T of a lattice together.
using Extents = cuda::std::array<int, 4>;

//: Read x, y, z, t from s, step one of them by d, wrap it, and rejoin.
__device__ int neighbour(int s, Extents n, int mu, int d)
{
    Extents c {};
    for (int nu {0}; nu < 4; ++nu) {
        c[nu] = s % n[nu];
        s /= n[nu];
    }
    c[mu] = (c[mu] + d + n[mu]) % n[mu];
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

//: Step each site forward in mu, then back, and keep where it lands.
__global__ void there_and_back(Extents n, int mu,
                               cuda::std::span<int> lands)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(lands.size())) {
        lands[s] = neighbour(neighbour(s, n, mu, 1), n, mu, -1);
    }
}

int main()
{
    //: Make a lattice of 4 by 2 by 6 by 2 sites.
    Extents n {4, 2, 6, 2};
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    int* lands {nullptr};
    cudaMallocManaged(&lands, size * sizeof(int));
    //: Count, for each direction, the sites that land where they began.
    for (int mu {0}; mu < 4; ++mu) {
        there_and_back<<<(v + 127) / 128, 128>>>(n, mu,
                                                 {lands, size});
        cudaDeviceSynchronize();
        int home {0};
        for (int s {0}; s < v; ++s) {
            home += lands[s] == s ? 1 : 0;
        }
        std::println("direction {}: {} of {}", mu, home, v);
    }
    cudaFree(lands);
}
```

## Verdict 1
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void shift(cuda::std::span<const int> f,
                      cuda::std::span<int> g, int n)
{
    int s {static_cast<int>(threadIdx.x)};
    int t {s / (n * n * n)};
    int back {s + n * n * n * ((t - 1) % n - t)};
    g[s] = f[back];
}

int main()
{
    int n {2};
    int v {n * n * n * n};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* g {nullptr};
    cudaMalloc(&f, size * sizeof(int));
    cudaMalloc(&g, size * sizeof(int));
    cudaMemset(f, 0, size * sizeof(int));
    shift<<<1, v>>>({f, size}, {g, size}, n);
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(g);
    cudaFree(f);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void shift(cuda::std::span<const int> f,
                      cuda::std::span<int> g, int n)
{
    int s {static_cast<int>(threadIdx.x)};
    int t {s / (n * n * n)};
    int back {s + n * n * n * ((t - 1 + n) % n - t)};
    g[s] = f[back];
}

int main()
{
    int n {2};
    int v {n * n * n * n};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* g {nullptr};
    cudaMalloc(&f, size * sizeof(int));
    cudaMalloc(&g, size * sizeof(int));
    cudaMemset(f, 0, size * sizeof(int));
    shift<<<1, v>>>({f, size}, {g, size}, n);
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(g);
    cudaFree(f);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads the extents X, Y, Z, T of a periodic lattice and q queries.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)).
A query is a site index s, a direction mu (0 for x, 1 for y, 2 for z, 3 for t) and a step d of 1 or -1.
The step moves that one coordinate by d; past either end it wraps to the other end.
A kernel with one thread per query finds the index of the site the step reaches.
Input: one line, X Y Z T and q; then q lines, each s, mu and d.
Output: q lines, each the index of the site reached.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; 1 ≤ q ≤ 100; 0 ≤ s < X·Y·Z·T.
### Examples
```in
4 4 2 2 4
5 0 1
5 1 -1
3 0 1
31 3 1
```
```out
6
1
0
63
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ int neighbour(int s, Extents n, int mu, int d)
{
    Extents c {};
    for (int nu {0}; nu < 4; ++nu) {
        c[nu] = s % n[nu];
        s /= n[nu];
    }
    c[mu] = (c[mu] + d + n[mu]) % n[mu];
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__global__ void step(Extents n, cuda::std::span<int> queries,
                     cuda::std::span<int> reached)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(reached.size())) {
        int s {queries[3 * k]};
        int mu {queries[3 * k + 1]};
        int d {queries[3 * k + 2]};
        reached[k] = neighbour(s, n, mu, d);
    }
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    std::size_t size {static_cast<std::size_t>(q)};
    int* queries {nullptr};
    int* reached {nullptr};
    cudaMallocManaged(&queries, 3 * size * sizeof(int));
    cudaMallocManaged(&reached, size * sizeof(int));
    for (int i {0}; i < 3 * q; ++i) {
        std::cin >> queries[i];
    }
    step<<<1, 128>>>(n, {queries, 3 * size}, {reached, size});
    cudaDeviceSynchronize();
    for (int k {0}; k < q; ++k) {
        std::println("{}", reached[k]);
    }
    cudaFree(reached);
    cudaFree(queries);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ int neighbour(int s, Extents n, int mu, int d)
{
    Extents c {};
    for (int nu {0}; nu < 4; ++nu) {
        c[nu] = s % n[nu];
        s /= n[nu];
    }
    c[mu] = (c[mu] + d) % n[mu];
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__global__ void step(Extents n, cuda::std::span<int> queries,
                     cuda::std::span<int> reached)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(reached.size())) {
        int s {queries[3 * k]};
        int mu {queries[3 * k + 1]};
        int d {queries[3 * k + 2]};
        reached[k] = neighbour(s, n, mu, d);
    }
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    std::size_t size {static_cast<std::size_t>(q)};
    int* queries {nullptr};
    int* reached {nullptr};
    cudaMallocManaged(&queries, 3 * size * sizeof(int));
    cudaMallocManaged(&reached, size * sizeof(int));
    for (int i {0}; i < 3 * q; ++i) {
        std::cin >> queries[i];
    }
    step<<<1, 128>>>(n, {queries, 3 * size}, {reached, size});
    cudaDeviceSynchronize();
    for (int k {0}; k < q; ++k) {
        std::println("{}", reached[k]);
    }
    cudaFree(reached);
    cudaFree(queries);
}
```
### Tests
```in
2 2 2 2 8
0 0 -1
0 1 -1
0 2 -1
0 3 -1
15 0 1
15 1 1
15 2 1
15 3 1
```
```in
8 8 8 8 4
0 3 -1
4095 3 1
4095 0 1
2048 2 -1
```
```in
2 4 6 8 4
5 1 -1
40 2 -1
47 2 1
383 3 1
```
```in
4 4 2 2 1
17 1 1
```
### Witness
```in
4 4 2 2 1
0 0 -1
```

## Alone 2
Form: run
Write a program that reads the extents X, Y, Z, T of a periodic lattice.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), the parity (x + y + z + t) mod 2 and the half index s / 2, rounded down.
A step moves one coordinate by 1 or by -1; past either end it wraps to the other end.
A kernel with one thread per even site finds the 8 sites one step away; each is odd.
Print, for each even site in order of half index, the half indices of those 8 sites.
Input: one line, X Y Z T.
Output: X·Y·Z·T / 2 lines, each 8 half indices separated by spaces: x + 1, x - 1, y + 1, y - 1, z + 1, z - 1, t + 1, t - 1.
Limits: X, Y, Z and T are each 2 or 4.
### Examples
```in
2 2 2 2
```
```out
0 0 1 1 2 2 4 4
1 1 0 0 3 3 5 5
2 2 3 3 0 0 6 6
3 3 2 2 1 1 7 7
4 4 5 5 6 6 0 0
5 5 4 4 7 7 1 1
6 6 7 7 4 4 2 2
7 7 6 6 5 5 3 3
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void hops(Extents n, cuda::std::span<int> out)
{
    int h {static_cast<int>(blockIdx.x * blockDim.x)};
    h += static_cast<int>(threadIdx.x);
    if (h < static_cast<int>(out.size() / 8)) {
        Extents c {};
        int r {2 * h};
        for (int nu {0}; nu < 4; ++nu) {
            c[nu] = r % n[nu];
            r /= n[nu];
        }
        c[0] += (c[1] + c[2] + c[3]) % 2;
        for (int k {0}; k < 8; ++k) {
            Extents e {c};
            int mu {k / 2};
            int d {k % 2 == 0 ? 1 : -1};
            e[mu] = (e[mu] + d + n[mu]) % n[mu];
            int s {e[2] + n[2] * e[3]};
            s = e[0] + n[0] * (e[1] + n[1] * s);
            out[8 * h + k] = s / 2;
        }
    }
}

int main()
{
    Extents n {};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3];
    int half {n[0] * n[1] * n[2] * n[3] / 2};
    std::size_t size {static_cast<std::size_t>(8 * half)};
    int* out {nullptr};
    cudaMallocManaged(&out, size * sizeof(int));
    hops<<<(half + 63) / 64, 64>>>(n, {out, size});
    cudaDeviceSynchronize();
    for (int h {0}; h < half; ++h) {
        for (int k {0}; k < 8; ++k) {
            std::print("{} ", out[8 * h + k]);
        }
        std::println();
    }
    cudaFree(out);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void hops(Extents n, cuda::std::span<int> out)
{
    int h {static_cast<int>(blockIdx.x * blockDim.x)};
    h += static_cast<int>(threadIdx.x);
    if (h < static_cast<int>(out.size() / 8)) {
        Extents c {};
        int r {2 * h};
        for (int nu {0}; nu < 4; ++nu) {
            c[nu] = r % n[nu];
            r /= n[nu];
        }
        c[0] += (c[1] + c[2] + c[3]) % 2;
        for (int k {0}; k < 8; ++k) {
            Extents e {c};
            int mu {k / 2};
            int d {k % 2 == 0 ? 1 : -1};
            e[mu] = (e[mu] + d + n[0]) % n[0];
            int s {e[2] + n[2] * e[3]};
            s = e[0] + n[0] * (e[1] + n[1] * s);
            out[8 * h + k] = s / 2;
        }
    }
}

int main()
{
    Extents n {};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3];
    int half {n[0] * n[1] * n[2] * n[3] / 2};
    std::size_t size {static_cast<std::size_t>(8 * half)};
    int* out {nullptr};
    cudaMallocManaged(&out, size * sizeof(int));
    hops<<<(half + 63) / 64, 64>>>(n, {out, size});
    cudaDeviceSynchronize();
    for (int h {0}; h < half; ++h) {
        for (int k {0}; k < 8; ++k) {
            std::print("{} ", out[8 * h + k]);
        }
        std::println();
    }
    cudaFree(out);
}
```
### Tests
```in
4 4 4 4
```
```in
4 2 2 2
```
```in
2 2 4 2
```
```in
2 4 2 4
```
```in
4 2 4 2
```
### Witness
```in
4 2 2 2
```
