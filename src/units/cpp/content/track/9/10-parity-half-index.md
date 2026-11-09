# 9.10 A site to its parity and half index and back
Part: the map from a site to its parity and half index and back, one-to-one on every small lattice
Clause: [expr.mul], QUDA include/index_helper.cuh getCoords (the even-odd site order), PMPP 5th ed. §3.2 Mapping threads to multidimensional data
After: none
Levels: c++23
Device: yes
Source: the source of QUDA, include/index_helper.cuh (read for the shape of the even-odd index, not copied); Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 3, §3.2

## Example
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <print>

//: Keep the four extents X, Y, Z, T of a lattice together.
using Extents = cuda::std::array<int, 4>;

//: Read x, y, z, t from the index s = x + X·(y + Y·(z + Z·t)).
__device__ Extents coords(int s, Extents n)
{
    Extents c {};
    for (int mu {0}; mu < 4; ++mu) {
        c[mu] = s % n[mu];
        s /= n[mu];
    }
    return c;
}

//: Put site s in slot p·V/2 + s/2, p its coordinate sum mod 2.
__global__ void forward(Extents n, cuda::std::span<int> table)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    int half {static_cast<int>(table.size() / 2)};
    if (s < 2 * half) {
        Extents c {coords(s, n)};
        int p {(c[0] + c[1] + c[2] + c[3]) % 2};
        table[p * half + s / 2] = s;
    }
}

//: Go back from 2h, whose x is even: add 1 if p differs.
__global__ void back(Extents n,
                     cuda::std::span<const int> table,
                     cuda::std::span<int> same)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    int half {static_cast<int>(table.size() / 2)};
    if (k < 2 * half) {
        int p {k / half};
        int h {k % half};
        Extents c {coords(2 * h, n)};
        int s {2 * h + (c[1] + c[2] + c[3] + p) % 2};
        same[k] = table[k] == s ? 1 : 0;
    }
}

int main()
{
    //: Try every lattice whose four extents are each 2 or 4.
    int lattices {0};
    int whole {0};
    for (int m {0}; m < 16; ++m) {
        Extents n {2 + 2 * (m % 2), 2 + 2 * (m / 2 % 2),
                   2 + 2 * (m / 4 % 2), 2 + 2 * (m / 8)};
        int v {n[0] * n[1] * n[2] * n[3]};
        std::size_t size {static_cast<std::size_t>(v)};
        int* table {nullptr};
        int* same {nullptr};
        cudaMallocManaged(&table, v * sizeof(int));
        cudaMallocManaged(&same, v * sizeof(int));
        int blocks {(v + 127) / 128};
        forward<<<blocks, 128>>>(n, {table, size});
        back<<<blocks, 128>>>(n, {table, size}, {same, size});
        cudaDeviceSynchronize();
        //: Count the lattices on which every site comes back.
        int back_count {0};
        for (int k {0}; k < v; ++k) {
            back_count += same[k];
        }
        lattices += 1;
        whole += back_count == v ? 1 : 0;
        cudaFree(same);
        cudaFree(table);
    }
    std::println("{} of {} lattices: every site comes back",
                 whole, lattices);
}
```

## Verdict 1
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void split(cuda::std::span<int> even,
                      cuda::std::span<int> odd, int n)
{
    int s {static_cast<int>(threadIdx.x)};
    int x {s % n};
    int y {s / n % n};
    int z {s / (n * n) % n};
    int t {s / (n * n * n)};
    if ((x + y + z + t) % 2 == 0) {
        even[s / 2] = s;
    } else {
        odd[s / 2] = s;
    }
}

int main()
{
    int n {3};
    int v {n * n * n * n};
    std::size_t half {static_cast<std::size_t>(v / 2)};
    int* even {nullptr};
    int* odd {nullptr};
    cudaMalloc(&even, half * sizeof(int));
    cudaMalloc(&odd, half * sizeof(int));
    split<<<1, v>>>({even, half}, {odd, half}, n);
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(odd);
    cudaFree(even);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void split(cuda::std::span<int> even,
                      cuda::std::span<int> odd)
{
    int s {static_cast<int>(threadIdx.x)};
    int x {s % 2};
    int y {s / 2 % 3};
    int z {s / 6 % 3};
    int t {s / 18};
    if ((x + y + z + t) % 2 == 0) {
        even[s / 2] = s;
    } else {
        odd[s / 2] = s;
    }
}

int main()
{
    int v {2 * 3 * 3 * 3};
    std::size_t half {static_cast<std::size_t>(v / 2)};
    int* even {nullptr};
    int* odd {nullptr};
    cudaMalloc(&even, half * sizeof(int));
    cudaMalloc(&odd, half * sizeof(int));
    split<<<1, v>>>({even, half}, {odd, half});
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(odd);
    cudaFree(even);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads the extents X, Y, Z, T of a lattice and q pairs, each a parity p and a half index h.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), the parity (x + y + z + t) mod 2 and the half index s / 2, rounded down.
A kernel with one thread per pair finds the one site with that parity and that half index.
Print, for each pair, the site index and its four coordinates.
Input: one line, X Y Z T and q; then q lines, each p and h.
Output: q lines, each s x y z t separated by spaces.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; 1 ≤ q ≤ 100; p is 0 or 1; 0 ≤ h < X·Y·Z·T / 2.
### Examples
```in
4 2 2 2 3
0 1
1 0
1 6
```
```out
2 2 0 0 0
1 1 0 0 0
13 1 1 1 0
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ Extents coords(int s, Extents n)
{
    Extents c {};
    for (int mu {0}; mu < 4; ++mu) {
        c[mu] = s % n[mu];
        s /= n[mu];
    }
    return c;
}

__global__ void back(Extents n,
                     cuda::std::span<const int> pairs,
                     cuda::std::span<int> sites)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(sites.size())) {
        int p {pairs[2 * k]};
        int h {pairs[2 * k + 1]};
        Extents c {coords(2 * h, n)};
        sites[k] = 2 * h + (c[1] + c[2] + c[3] + p) % 2;
    }
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    std::size_t size {static_cast<std::size_t>(q)};
    int* pairs {nullptr};
    int* sites {nullptr};
    cudaMallocManaged(&pairs, 2 * size * sizeof(int));
    cudaMallocManaged(&sites, size * sizeof(int));
    for (int i {0}; i < 2 * q; ++i) {
        std::cin >> pairs[i];
    }
    back<<<1, 128>>>(n, {pairs, 2 * size}, {sites, size});
    cudaDeviceSynchronize();
    for (int k {0}; k < q; ++k) {
        int s {sites[k]};
        int x {s % n[0]};
        int y {s / n[0] % n[1]};
        int z {s / (n[0] * n[1]) % n[2]};
        int t {s / (n[0] * n[1] * n[2])};
        std::println("{} {} {} {} {}", s, x, y, z, t);
    }
    cudaFree(sites);
    cudaFree(pairs);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__device__ Extents coords(int s, Extents n)
{
    Extents c {};
    for (int mu {0}; mu < 4; ++mu) {
        c[mu] = s % n[mu];
        s /= n[mu];
    }
    return c;
}

__global__ void back(Extents n,
                     cuda::std::span<const int> pairs,
                     cuda::std::span<int> sites)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(sites.size())) {
        int p {pairs[2 * k]};
        int h {pairs[2 * k + 1]};
        Extents c {coords(2 * h, n)};
        sites[k] = 2 * h + p;
    }
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    std::size_t size {static_cast<std::size_t>(q)};
    int* pairs {nullptr};
    int* sites {nullptr};
    cudaMallocManaged(&pairs, 2 * size * sizeof(int));
    cudaMallocManaged(&sites, size * sizeof(int));
    for (int i {0}; i < 2 * q; ++i) {
        std::cin >> pairs[i];
    }
    back<<<1, 128>>>(n, {pairs, 2 * size}, {sites, size});
    cudaDeviceSynchronize();
    for (int k {0}; k < q; ++k) {
        int s {sites[k]};
        int x {s % n[0]};
        int y {s / n[0] % n[1]};
        int z {s / (n[0] * n[1]) % n[2]};
        int t {s / (n[0] * n[1] * n[2])};
        std::println("{} {} {} {} {}", s, x, y, z, t);
    }
    cudaFree(sites);
    cudaFree(pairs);
}
```
### Tests
```in
2 2 2 2 2
0 0
1 7
```
```in
8 8 8 8 4
0 0
1 0
0 2047
1 2047
```
```in
4 2 2 2 4
0 3
1 3
0 4
1 5
```
```in
2 4 6 8 3
1 1
0 100
1 191
```
### Witness
```in
4 2 2 2 1
0 3
```

## Alone 2
Form: run
Write a program that reads the extents X, Y, Z, T of a lattice and q site indices.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), the parity (x + y + z + t) mod 2 and the half index s / 2, rounded down.
A kernel with one thread per site index finds the parity and the half index of that site.
Print, for each site, its parity and its half index.
Input: one line, X Y Z T and q; then one line, q site indices separated by spaces.
Output: q lines, each p and h separated by a space.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 8; 1 ≤ q ≤ 100; 0 ≤ each index < X·Y·Z·T.
### Examples
```in
4 2 2 2 4
0 1 2 13
```
```out
0 0
1 0
0 1
1 6
```
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Extents = cuda::std::array<int, 4>;

__global__ void forward(Extents n, cuda::std::span<int> sites,
                        cuda::std::span<int> parity)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(sites.size())) {
        int s {sites[k]};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            sum += s % n[mu];
            s /= n[mu];
        }
        parity[k] = sum % 2;
    }
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    std::size_t size {static_cast<std::size_t>(q)};
    int* sites {nullptr};
    int* parity {nullptr};
    cudaMallocManaged(&sites, size * sizeof(int));
    cudaMallocManaged(&parity, size * sizeof(int));
    for (int i {0}; i < q; ++i) {
        std::cin >> sites[i];
    }
    forward<<<1, 128>>>(n, {sites, size}, {parity, size});
    cudaDeviceSynchronize();
    for (int k {0}; k < q; ++k) {
        std::println("{} {}", parity[k], sites[k] / 2);
    }
    cudaFree(parity);
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

__global__ void forward(Extents n, cuda::std::span<int> sites,
                        cuda::std::span<int> parity)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(sites.size())) {
        int s {sites[k]};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            sum += s % n[mu];
            s /= n[mu];
        }
        parity[k] = sites[k] % 2;
    }
}

int main()
{
    Extents n {};
    int q {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> q;
    std::size_t size {static_cast<std::size_t>(q)};
    int* sites {nullptr};
    int* parity {nullptr};
    cudaMallocManaged(&sites, size * sizeof(int));
    cudaMallocManaged(&parity, size * sizeof(int));
    for (int i {0}; i < q; ++i) {
        std::cin >> sites[i];
    }
    forward<<<1, 128>>>(n, {sites, size}, {parity, size});
    cudaDeviceSynchronize();
    for (int k {0}; k < q; ++k) {
        std::println("{} {}", parity[k], sites[k] / 2);
    }
    cudaFree(parity);
    cudaFree(sites);
}
```
### Tests
```in
2 2 2 2 2
0 15
```
```in
8 8 8 8 4
0 1 4095 4088
```
```in
4 2 2 2 4
4 5 6 7
```
```in
2 4 6 8 3
2 47 383
```
### Witness
```in
4 2 2 2 1
4
```
