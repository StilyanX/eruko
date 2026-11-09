# 9.12 The face of one direction gathered in order
Part: the face sites of one direction gathered into a contiguous buffer, in order
Clause: QUDA include/index_helper.cuh (the face index of a site), QUDA lib/dslash_pack (packing a face), PMPP 5th ed. §3.2 Mapping threads to multidimensional data, PMPP 5th ed. §23.1 Stencil as a running example (halo data that is not contiguous)
After: 9.10
Levels: c++23
Device: yes
Source: the source of QUDA, include/index_helper.cuh and include/kernels/dslash_pack.cuh (read for the shape of a face and its packing, not copied); Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 3, §3.2, and ch. 23, §23.1

## Example
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <print>

//: Keep the four extents X, Y, Z, T of a lattice together.
using Extents = cuda::std::array<int, 4>;

//: Split face index f at the stride of mu and put x_mu = L_mu - 1 between.
__device__ int face_site(int f, Extents n, int mu)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    int low {f % stride};
    int high {f / stride};
    return low + stride * (n[mu] - 1) + stride * n[mu] * high;
}

//: Give each face index one thread, which copies its site's value.
__global__ void gather(Extents n, int mu,
                       cuda::std::span<const int> field,
                       cuda::std::span<int> buffer)
{
    int f {static_cast<int>(blockIdx.x * blockDim.x)};
    f += static_cast<int>(threadIdx.x);
    if (f < static_cast<int>(buffer.size())) {
        buffer[f] = field[face_site(f, n, mu)];
    }
}

int main()
{
    //: Fill a field of 4 by 2 by 2 by 2 sites with 100 plus each index.
    Extents n {4, 2, 2, 2};
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMallocManaged(&field, size * sizeof(int));
    cudaMallocManaged(&buffer, size * sizeof(int));
    for (int s {0}; s < v; ++s) {
        field[s] = 100 + s;
    }
    //: Gather the face of each direction, V / L_mu values, and print it.
    for (int mu {0}; mu < 4; ++mu) {
        int faces {v / n[mu]};
        std::size_t count {static_cast<std::size_t>(faces)};
        gather<<<1, 64>>>(n, mu, {field, size},
                          {buffer, count});
        cudaDeviceSynchronize();
        std::print("direction {}:", mu);
        for (int f {0}; f < faces; ++f) {
            std::print(" {}", buffer[f]);
        }
        std::println();
    }
    cudaFree(buffer);
    cudaFree(field);
}
```

## Verdict 1
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void gather_y(cuda::std::span<const int> field,
                         cuda::std::span<int> buffer)
{
    int f {static_cast<int>(threadIdx.x)};
    int x {f % 4};
    int zt {f / 4};
    buffer[f] = field[x + 4 * 1 + 8 * zt];
}

int main()
{
    int v {4 * 2 * 2 * 2};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t faces {size / 4};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMalloc(&field, size * sizeof(int));
    cudaMalloc(&buffer, faces * sizeof(int));
    cudaMemset(field, 0, size * sizeof(int));
    gather_y<<<1, v / 2>>>({field, size}, {buffer, faces});
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(buffer);
    cudaFree(field);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void gather_y(cuda::std::span<const int> field,
                         cuda::std::span<int> buffer)
{
    int f {static_cast<int>(threadIdx.x)};
    int x {f % 2};
    int zt {f / 2};
    buffer[f] = field[x + 2 * 3 + 8 * zt];
}

int main()
{
    int v {2 * 4 * 2 * 2};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t faces {size / 2};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMalloc(&field, size * sizeof(int));
    cudaMalloc(&buffer, faces * sizeof(int));
    cudaMemset(field, 0, size * sizeof(int));
    gather_y<<<1, v / 4>>>({field, size}, {buffer, faces});
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(buffer);
    cudaFree(field);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads the extents X, Y, Z, T of a lattice and a direction mu (0 for x, 1 for y, 2 for z, 3 for t).
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), and a field holds 1000 + s at site s.
The face of mu is every site whose coordinate in mu is its largest, its extent minus 1.
A kernel with one thread per face site copies the field's values on the face into a buffer, in order of site index.
Print the buffer.
Input: one line, X Y Z T and mu.
Output: one line, the buffer's values separated by spaces.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; mu is 0, 1, 2 or 3.
### Examples
```in
4 2 2 2 3
```
```out
1016 1017 1018 1019 1020 1021 1022 1023 1024 1025 1026 1027 1028 1029 1030 1031
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ int face_site(int f, Extents n, int mu)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    int low {f % stride};
    int high {f / stride};
    return low + stride * (n[mu] - 1) + stride * n[mu] * high;
}

__global__ void gather(Extents n, int mu,
                       cuda::std::span<const int> field,
                       cuda::std::span<int> buffer)
{
    int f {static_cast<int>(blockIdx.x * blockDim.x)};
    f += static_cast<int>(threadIdx.x);
    if (f < static_cast<int>(buffer.size())) {
        buffer[f] = field[face_site(f, n, mu)];
    }
}

int main()
{
    Extents n {};
    int mu {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> mu;
    int v {n[0] * n[1] * n[2] * n[3]};
    int faces {v / n[mu]};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t count {static_cast<std::size_t>(faces)};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMallocManaged(&field, size * sizeof(int));
    cudaMallocManaged(&buffer, count * sizeof(int));
    for (int s {0}; s < v; ++s) {
        field[s] = 1000 + s;
    }
    int blocks {(faces + 127) / 128};
    gather<<<blocks, 128>>>(n, mu, {field, size},
                            {buffer, count});
    cudaDeviceSynchronize();
    for (int f {0}; f < faces; ++f) {
        std::print("{} ", buffer[f]);
    }
    std::println();
    cudaFree(buffer);
    cudaFree(field);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ int face_site(int f, Extents n, int mu)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    return f + stride * (n[mu] - 1);
}

__global__ void gather(Extents n, int mu,
                       cuda::std::span<const int> field,
                       cuda::std::span<int> buffer)
{
    int f {static_cast<int>(blockIdx.x * blockDim.x)};
    f += static_cast<int>(threadIdx.x);
    if (f < static_cast<int>(buffer.size())) {
        buffer[f] = field[face_site(f, n, mu)];
    }
}

int main()
{
    Extents n {};
    int mu {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> mu;
    int v {n[0] * n[1] * n[2] * n[3]};
    int faces {v / n[mu]};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t count {static_cast<std::size_t>(faces)};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMallocManaged(&field, size * sizeof(int));
    cudaMallocManaged(&buffer, count * sizeof(int));
    for (int s {0}; s < v; ++s) {
        field[s] = 1000 + s;
    }
    int blocks {(faces + 127) / 128};
    gather<<<blocks, 128>>>(n, mu, {field, size},
                            {buffer, count});
    cudaDeviceSynchronize();
    for (int f {0}; f < faces; ++f) {
        std::print("{} ", buffer[f]);
    }
    std::println();
    cudaFree(buffer);
    cudaFree(field);
}
```
### Tests
```in
2 2 2 2 0
```
```in
8 8 8 8 1
```
```in
4 2 6 2 2
```
```in
2 4 2 8 3
```
```in
4 4 2 2 0
```
### Witness
```in
4 2 2 2 1
```

## Alone 2
Form: run
Write a program that reads the extents X, Y, Z, T of a lattice, a direction mu (0 for x, 1 for y, 2 for z, 3 for t) and a depth d.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), and a field holds 1000 + s at site s.
The face of depth d is every site whose coordinate in mu is one of the d largest: its extent minus d, up to its extent minus 1.
A kernel with one thread per face site copies the field's values on the face into a buffer, in order of site index.
Print the buffer.
Input: one line, X Y Z T, mu and d.
Output: one line, the buffer's values separated by spaces.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; mu is 0, 1, 2 or 3; 1 ≤ d ≤ the extent in mu.
### Examples
```in
4 2 2 2 1 1
```
```out
1004 1005 1006 1007 1012 1013 1014 1015 1020 1021 1022 1023 1028 1029 1030 1031
```
```in
2 2 2 4 3 2
```
```out
1016 1017 1018 1019 1020 1021 1022 1023 1024 1025 1026 1027 1028 1029 1030 1031
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ int face_site(int f, Extents n, int mu, int d)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    int low {f % stride};
    int layer {f / stride % d};
    int high {f / stride / d};
    int at {n[mu] - d + layer};
    return low + stride * at + stride * n[mu] * high;
}

__global__ void gather(Extents n, int mu, int d,
                       cuda::std::span<const int> field,
                       cuda::std::span<int> buffer)
{
    int f {static_cast<int>(blockIdx.x * blockDim.x)};
    f += static_cast<int>(threadIdx.x);
    if (f < static_cast<int>(buffer.size())) {
        buffer[f] = field[face_site(f, n, mu, d)];
    }
}

int main()
{
    Extents n {};
    int mu {0};
    int d {1};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> mu >> d;
    int v {n[0] * n[1] * n[2] * n[3]};
    int faces {d * (v / n[mu])};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t count {static_cast<std::size_t>(faces)};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMallocManaged(&field, size * sizeof(int));
    cudaMallocManaged(&buffer, count * sizeof(int));
    for (int s {0}; s < v; ++s) {
        field[s] = 1000 + s;
    }
    int blocks {(faces + 127) / 128};
    gather<<<blocks, 128>>>(n, mu, d, {field, size},
                            {buffer, count});
    cudaDeviceSynchronize();
    for (int f {0}; f < faces; ++f) {
        std::print("{} ", buffer[f]);
    }
    std::println();
    cudaFree(buffer);
    cudaFree(field);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ int face_site(int f, Extents n, int mu, int d)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    int per_layer {n[0] * n[1] * n[2] * n[3] / n[mu]};
    int low {f % per_layer % stride};
    int layer {f / per_layer};
    int high {f % per_layer / stride};
    int at {n[mu] - d + layer};
    return low + stride * at + stride * n[mu] * high;
}

__global__ void gather(Extents n, int mu, int d,
                       cuda::std::span<const int> field,
                       cuda::std::span<int> buffer)
{
    int f {static_cast<int>(blockIdx.x * blockDim.x)};
    f += static_cast<int>(threadIdx.x);
    if (f < static_cast<int>(buffer.size())) {
        buffer[f] = field[face_site(f, n, mu, d)];
    }
}

int main()
{
    Extents n {};
    int mu {0};
    int d {1};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> mu >> d;
    int v {n[0] * n[1] * n[2] * n[3]};
    int faces {d * (v / n[mu])};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t count {static_cast<std::size_t>(faces)};
    int* field {nullptr};
    int* buffer {nullptr};
    cudaMallocManaged(&field, size * sizeof(int));
    cudaMallocManaged(&buffer, count * sizeof(int));
    for (int s {0}; s < v; ++s) {
        field[s] = 1000 + s;
    }
    int blocks {(faces + 127) / 128};
    gather<<<blocks, 128>>>(n, mu, d, {field, size},
                            {buffer, count});
    cudaDeviceSynchronize();
    for (int f {0}; f < faces; ++f) {
        std::print("{} ", buffer[f]);
    }
    std::println();
    cudaFree(buffer);
    cudaFree(field);
}
```
### Tests
```in
2 2 2 2 0 2
```
```in
8 8 8 8 2 3
```
```in
4 2 6 2 2 4
```
```in
2 4 2 8 3 8
```
```in
4 4 2 2 1 1
```
### Witness
```in
4 2 2 2 0 2
```
