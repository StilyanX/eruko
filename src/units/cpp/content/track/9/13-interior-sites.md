# 9.13 The interior sites, which need no face
Part: the interior sites, which need no face
Clause: [expr.mul], PMPP 5th ed. §23.1 Stencil as a running example (halo points), PMPP 5th ed. §23.3 Overlapping computation and communication (the internal points need no halo)
After: 9.12
Levels: c++23
Device: yes
Source: Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 23, §23.1 and §23.3

## Example
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <print>

//: Keep the four extents X, Y, Z, T of a lattice together.
using Extents = cuda::std::array<int, 4>;

//: Read i over the extents L - 2, add 1 to each, and rejoin.
__device__ int interior_site(int i, Extents n)
{
    int s {0};
    int stride {1};
    for (int mu {0}; mu < 4; ++mu) {
        int inner {n[mu] - 2};
        s += stride * (i % inner + 1);
        i /= inner;
        stride *= n[mu];
    }
    return s;
}

//: Give each interior site one thread, which writes its index.
__global__ void interior(Extents n, cuda::std::span<int> sites)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < static_cast<int>(sites.size())) {
        sites[i] = interior_site(i, n);
    }
}

int main()
{
    //: Count the sites whose coordinates run from 1 to L - 2.
    Extents n {4, 4, 4, 6};
    int count {1};
    for (int mu {0}; mu < 4; ++mu) {
        count *= n[mu] - 2;
    }
    std::size_t size {static_cast<std::size_t>(count)};
    int* sites {nullptr};
    cudaMallocManaged(&sites, size * sizeof(int));
    interior<<<1, 64>>>(n, {sites, size});
    cudaDeviceSynchronize();
    //: Print them: no step from one of them leaves the lattice.
    std::print("{} sites need no face:", count);
    for (int i {0}; i < count; ++i) {
        std::print(" {}", sites[i]);
    }
    std::println();
    cudaFree(sites);
}
```

## Verdict 1
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void hop(cuda::std::span<const int> f,
                    cuda::std::span<int> g, int n)
{
    int s {static_cast<int>(threadIdx.x)};
    int sum {0};
    for (int step {1}; step < n * n * n * n; step *= n) {
        sum += f[s + step] + f[s - step];
    }
    g[s] = sum;
}

int main()
{
    int n {3};
    int v {n * n * n * n};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* g {nullptr};
    cudaMalloc(&f, size * sizeof(int));
    cudaMalloc(&g, size * sizeof(int));
    cudaMemset(f, 0, size * sizeof(int));
    hop<<<1, v>>>({f, size}, {g, size}, n);
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

__global__ void hop(cuda::std::span<const int> f,
                    cuda::std::span<int> g, int n)
{
    int i {static_cast<int>(threadIdx.x)};
    int s {0};
    for (int step {1}; step < n * n * n * n; step *= n) {
        s += step * (i % (n - 2) + 1);
        i /= n - 2;
    }
    int sum {0};
    for (int step {1}; step < n * n * n * n; step *= n) {
        sum += f[s + step] + f[s - step];
    }
    g[s] = sum;
}

int main()
{
    int n {3};
    int v {n * n * n * n};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* g {nullptr};
    cudaMalloc(&f, size * sizeof(int));
    cudaMalloc(&g, size * sizeof(int));
    cudaMemset(f, 0, size * sizeof(int));
    hop<<<1, 1>>>({f, size}, {g, size}, n);
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(g);
    cudaFree(f);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads the extents X, Y, Z, T of a lattice and which of its four directions are split.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)).
A site needs a face when, in some split direction, its coordinate is 0 or its extent minus 1.
A direction that is not split needs no face: its steps stay on this lattice.
A kernel with one thread per interior site, a site that needs no face, writes the interior sites in order of site index.
Print their number, then the sites.
Input: one line, X Y Z T; then one line of four numbers, each 1 if the direction x, y, z or t is split and 0 if not.
Output: two lines: the number of interior sites; their indices in increasing order, separated by spaces.
Limits: X, Y, Z and T are even, 4 ≤ each ≤ 8.
### Examples
```in
4 4 4 4
1 1 1 1
```
```out
16
85 86 89 90 101 102 105 106 149 150 153 154 165 166 169 170
```
```in
6 4 4 4
1 1 1 1
```
```out
32
127 128 129 130 133 134 135 136 151 152 153 154 157 158 159 160 223 224 225 226 229 230 231 232 247 248 249 250 253 254 255 256
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void interior(Extents n, Extents split,
                         cuda::std::span<int> sites)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(sites.size())) {
        int i {k};
        int s {0};
        int stride {1};
        for (int mu {0}; mu < 4; ++mu) {
            int lo {split[mu]};
            int inner {n[mu] - 2 * lo};
            s += stride * (i % inner + lo);
            i /= inner;
            stride *= n[mu];
        }
        sites[k] = s;
    }
}

int main()
{
    Extents n {};
    Extents split {};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3];
    std::cin >> split[0] >> split[1] >> split[2] >> split[3];
    int count {1};
    for (int mu {0}; mu < 4; ++mu) {
        count *= n[mu] - 2 * split[mu];
    }
    std::size_t size {static_cast<std::size_t>(count)};
    int* sites {nullptr};
    cudaMallocManaged(&sites, size * sizeof(int));
    int blocks {(count + 127) / 128};
    interior<<<blocks, 128>>>(n, split, {sites, size});
    cudaDeviceSynchronize();
    std::println("{}", count);
    for (int k {0}; k < count; ++k) {
        std::print("{} ", sites[k]);
    }
    std::println();
    cudaFree(sites);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void interior(Extents n, Extents split,
                         cuda::std::span<int> sites)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(sites.size())) {
        int i {k};
        int s {0};
        int stride {1};
        for (int mu {0}; mu < 4; ++mu) {
            int lo {1};
            int inner {n[mu] - 2 * lo};
            s += stride * (i % inner + lo);
            i /= inner;
            stride *= n[mu];
        }
        sites[k] = s;
    }
}

int main()
{
    Extents n {};
    Extents split {};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3];
    std::cin >> split[0] >> split[1] >> split[2] >> split[3];
    int count {1};
    for (int mu {0}; mu < 4; ++mu) {
        count *= n[mu] - 2 * split[mu];
    }
    std::size_t size {static_cast<std::size_t>(count)};
    int* sites {nullptr};
    cudaMallocManaged(&sites, size * sizeof(int));
    int blocks {(count + 127) / 128};
    interior<<<blocks, 128>>>(n, split, {sites, size});
    cudaDeviceSynchronize();
    std::println("{}", count);
    for (int k {0}; k < count; ++k) {
        std::print("{} ", sites[k]);
    }
    std::println();
    cudaFree(sites);
}
```
### Tests
```in
4 4 4 4
0 0 0 0
```
```in
8 8 8 8
1 1 1 1
```
```in
4 6 8 4
1 0 1 0
```
```in
6 4 4 8
0 0 0 1
```
```in
4 4 4 4
0 1 0 0
```
### Witness
```in
4 4 4 4
0 0 0 1
```

## Alone 2
Form: run
Write a program that reads the extents X, Y, Z, T of a lattice, split in all four directions, and a reach d.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)).
An operator at a site reads the sites up to d steps away in each direction, so the faces are d sites deep.
A site needs a face when one of its coordinates is below d, or above its extent minus 1 minus d.
A kernel with one thread per interior site, a site that needs no face, writes the interior sites in order of site index.
Print their number, then the sites.
Input: one line, X Y Z T and d.
Output: two lines: the number of interior sites; their indices in increasing order, separated by spaces. When no site is interior, the second line is empty.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; 1 ≤ d ≤ 3.
### Examples
```in
4 4 4 4 1
```
```out
16
85 86 89 90 101 102 105 106 149 150 153 154 165 166 169 170
```
```in
2 4 4 4 1
```
```out
0
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void interior(Extents n, int d,
                         cuda::std::span<int> sites)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(sites.size())) {
        int i {k};
        int s {0};
        int stride {1};
        for (int mu {0}; mu < 4; ++mu) {
            int inner {n[mu] - 2 * d};
            s += stride * (i % inner + d);
            i /= inner;
            stride *= n[mu];
        }
        sites[k] = s;
    }
}

int main()
{
    Extents n {};
    int d {1};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> d;
    int count {1};
    for (int mu {0}; mu < 4; ++mu) {
        count *= n[mu] > 2 * d ? n[mu] - 2 * d : 0;
    }
    std::size_t size {static_cast<std::size_t>(count)};
    int* sites {nullptr};
    cudaMallocManaged(&sites, (size + 1) * sizeof(int));
    if (count > 0) {
        int blocks {(count + 127) / 128};
        interior<<<blocks, 128>>>(n, d, {sites, size});
    }
    cudaDeviceSynchronize();
    std::println("{}", count);
    for (int k {0}; k < count; ++k) {
        std::print("{} ", sites[k]);
    }
    std::println();
    cudaFree(sites);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void interior(Extents n, int d,
                         cuda::std::span<int> sites)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(sites.size())) {
        int i {k};
        int s {0};
        int stride {1};
        for (int mu {0}; mu < 4; ++mu) {
            int inner {n[mu] - 2 * d};
            s += stride * (i % inner + 1);
            i /= inner;
            stride *= n[mu];
        }
        sites[k] = s;
    }
}

int main()
{
    Extents n {};
    int d {1};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> d;
    int count {1};
    for (int mu {0}; mu < 4; ++mu) {
        count *= n[mu] > 2 * d ? n[mu] - 2 * d : 0;
    }
    std::size_t size {static_cast<std::size_t>(count)};
    int* sites {nullptr};
    cudaMallocManaged(&sites, (size + 1) * sizeof(int));
    if (count > 0) {
        int blocks {(count + 127) / 128};
        interior<<<blocks, 128>>>(n, d, {sites, size});
    }
    cudaDeviceSynchronize();
    std::println("{}", count);
    for (int k {0}; k < count; ++k) {
        std::print("{} ", sites[k]);
    }
    std::println();
    cudaFree(sites);
}
```
### Tests
```in
2 2 2 2 1
```
```in
8 8 8 8 1
```
```in
8 8 8 8 3
```
```in
6 8 6 8 2
```
```in
8 6 8 4 2
```
```in
4 8 8 8 2
```
### Witness
```in
8 8 8 8 2
```
