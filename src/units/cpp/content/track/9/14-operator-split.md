# 9.14 The operator split into an interior part and a face part
Part: the operator split into an interior part and a face part, summed, against the whole operator
Clause: [expr.mul], PMPP 5th ed. §23.1 Stencil as a running example (halo points), PMPP 5th ed. §23.3 Overlapping computation and communication (boundary points and internal points computed apart)
After: 9.11, 9.12, 9.13
Levels: c++23
Device: yes
Source: Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 23, §23.1 and §23.3

## Example
```cuda
#include <cuda/std/array>
#include <cuda/std/span>
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

__device__ int join(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

//: Find the site of face index k in layer at of direction mu.
__device__ int face_site(int k, Extents n, int mu, int at)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    return k % stride + stride * (at + n[mu] * (k / stride));
}

//: Add f forward and subtract f backward; wrap only if whole.
__global__ void apply(Extents n, bool whole,
                      cuda::std::span<const int> f,
                      cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        Extents c {coords(s, n)};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            bool up {whole || c[mu] + 1 < n[mu]};
            bool down {whole || c[mu] > 0};
            Extents e {c};
            e[mu] = (c[mu] + 1) % n[mu];
            sum += up ? f[join(e, n)] : 0;
            e[mu] = (c[mu] - 1 + n[mu]) % n[mu];
            sum -= down ? f[join(e, n)] : 0;
        }
        out[s] = sum;
    }
}

//: Copy one layer of direction mu into a buffer, in face order.
__global__ void gather(Extents n, int mu, int at,
                       cuda::std::span<const int> f,
                       cuda::std::span<int> buffer)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(buffer.size())) {
        buffer[k] = f[face_site(k, n, mu, at)];
    }
}

//: Add the wrapped terms, reading only the two buffers.
__global__ void face(Extents n, int mu,
                     cuda::std::span<const int> low,
                     cuda::std::span<const int> high,
                     cuda::std::span<int> out)
{
    int k {static_cast<int>(threadIdx.x)};
    if (k < static_cast<int>(low.size())) {
        out[face_site(k, n, mu, n[mu] - 1)] += low[k];
        out[face_site(k, n, mu, 0)] -= high[k];
    }
}

int main()
{
    Extents n {4, 2, 4, 2};
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* whole {nullptr};
    int* split {nullptr};
    int* low {nullptr};
    int* high {nullptr};
    cudaMallocManaged(&f, size * sizeof(int));
    cudaMallocManaged(&whole, size * sizeof(int));
    cudaMallocManaged(&split, size * sizeof(int));
    cudaMallocManaged(&low, size * sizeof(int));
    cudaMallocManaged(&high, size * sizeof(int));
    for (int s {0}; s < v; ++s) {
        f[s] = s * s % 1000;
    }
    //: Apply the whole operator, then only its interior part.
    apply<<<1, 64>>>(n, true, {f, size}, {whole, size});
    apply<<<1, 64>>>(n, false, {f, size}, {split, size});
    //: For each direction, gather both faces, then add them.
    for (int mu {0}; mu < 4; ++mu) {
        std::size_t faces {static_cast<std::size_t>(v / n[mu])};
        gather<<<1, 64>>>(n, mu, 0, {f, size}, {low, faces});
        gather<<<1, 64>>>(n, mu, n[mu] - 1, {f, size},
                          {high, faces});
        face<<<1, 64>>>(n, mu, {low, faces}, {high, faces},
                        {split, size});
    }
    cudaDeviceSynchronize();
    //: Count the sites where the two parts sum to the whole.
    int same {0};
    for (int s {0}; s < v; ++s) {
        same += split[s] == whole[s] ? 1 : 0;
    }
    std::println("{} of {} sites agree", same, v);
    cudaFree(high);
    cudaFree(low);
    cudaFree(split);
    cudaFree(whole);
    cudaFree(f);
}
```

## Verdict 1
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void face_t(cuda::std::span<const int> low,
                       cuda::std::span<int> out, int n, int nt)
{
    int s {static_cast<int>(threadIdx.x)};
    int t {s / (n * n * n)};
    if (t == nt - 1) {
        out[s] += low[s];
    }
}

int main()
{
    int n {2};
    int nt {4};
    int v {n * n * n * nt};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t faces {size / static_cast<std::size_t>(nt)};
    int* low {nullptr};
    int* out {nullptr};
    cudaMalloc(&low, faces * sizeof(int));
    cudaMalloc(&out, size * sizeof(int));
    cudaMemset(low, 0, faces * sizeof(int));
    cudaMemset(out, 0, size * sizeof(int));
    face_t<<<1, v>>>({low, faces}, {out, size}, n, nt);
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(out);
    cudaFree(low);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: memcheck
```cuda
#include <cuda/std/span>
#include <print>

__global__ void face_t(cuda::std::span<const int> low,
                       cuda::std::span<int> out, int n, int nt)
{
    int s {static_cast<int>(threadIdx.x)};
    int t {s / (n * n * n)};
    if (t == nt - 1) {
        out[s] += low[s % (n * n * n)];
    }
}

int main()
{
    int n {2};
    int nt {4};
    int v {n * n * n * nt};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t faces {size / static_cast<std::size_t>(nt)};
    int* low {nullptr};
    int* out {nullptr};
    cudaMalloc(&low, faces * sizeof(int));
    cudaMalloc(&out, size * sizeof(int));
    cudaMemset(low, 0, faces * sizeof(int));
    cudaMemset(out, 0, size * sizeof(int));
    face_t<<<1, v>>>({low, faces}, {out, size}, n, nt);
    cudaDeviceSynchronize();
    std::println("{} sites", v);
    cudaFree(out);
    cudaFree(low);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads the extents X, Y, Z, T of a periodic lattice and which of its four directions are split.
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), and a field f holds (s·s) mod 1000 at site s.
The operator gives each site the sum, over the four directions, of f one step forward minus f one step back; past either end a step wraps to the other end.
In a split direction, a step that wraps reaches a face; in a direction that is not split, it stays on this lattice.
The interior part sums the terms whose step reaches no face. The face part sums the others: for each split direction, gather the two end layers of f into two buffers, and a kernel reads only those buffers.
Print the interior part, the face part and the whole operator, each at every site in order of site index.
Input: one line, X Y Z T; then one line of four numbers, each 1 if the direction x, y, z or t is split and 0 if not.
Output: three lines, each X·Y·Z·T values separated by spaces: the interior part, the face part, the whole operator.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 6.
### Examples
```in
4 2 2 2
1 1 1 1
```
```out
337 399 468 527 569 629 700 709 801 829 908 845 873 787 820 595 1265 1133 1228 925 953 611 628 67 1089 571 580 -197 -279 -1119 -1236 -2383
-345 -395 -460 -531 -593 -609 -676 -729 -841 -793 -868 -881 -929 -735 -764 -647 -1337 -1065 -1156 -993 -1041 -527 -540 -151 -1193 -471 -476 97 159 1235 1356 2267
-8 4 8 -4 -24 20 24 -20 -40 36 40 -36 -56 52 56 -52 -72 68 72 -68 -88 84 88 -84 -104 100 104 -100 -120 116 120 -116
```
```in
2 4 2 2
1 1 1 1
```
```out
325 379 449 502 601 634 713 693 757 681 873 708 1033 776 945 547 1189 729 1177 548 1369 584 993 -13 981 -217 513 -942 521 -1162 -503 -2495
-357 -419 -433 -478 -569 -594 -729 -717 -853 -785 -793 -620 -937 -672 -1025 -635 -1349 -897 -1033 -396 -1209 -416 -1137 -139 -1205 -15 -305 1158 -297 1394 295 2279
-32 -40 16 24 32 40 -16 -24 -96 -104 80 88 96 104 -80 -88 -160 -168 144 152 160 168 -144 -152 -224 -232 208 216 224 232 -208 -216
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

__device__ int join(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__device__ int face_site(int k, Extents n, int mu, int at)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    return k % stride + stride * (at + n[mu] * (k / stride));
}

__global__ void apply(Extents n, Extents split,
                      cuda::std::span<const int> f,
                      cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        Extents c {coords(s, n)};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            int cut {split[mu]};
            Extents e {c};
            e[mu] = (c[mu] + 1) % n[mu];
            if (cut == 0 || c[mu] + 1 < n[mu]) {
                sum += f[join(e, n)];
            }
            e[mu] = (c[mu] - 1 + n[mu]) % n[mu];
            if (cut == 0 || c[mu] > 0) {
                sum -= f[join(e, n)];
            }
        }
        out[s] = sum;
    }
}

__global__ void gather(Extents n, int mu, int at,
                       cuda::std::span<const int> f,
                       cuda::std::span<int> buffer)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(buffer.size())) {
        buffer[k] = f[face_site(k, n, mu, at)];
    }
}

__global__ void face(Extents n, int mu,
                     cuda::std::span<const int> low,
                     cuda::std::span<const int> high,
                     cuda::std::span<int> out)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(low.size())) {
        out[face_site(k, n, mu, n[mu] - 1)] += low[k];
        out[face_site(k, n, mu, 0)] -= high[k];
    }
}

void print_all(cuda::std::span<const int> a)
{
    for (int x : a) {
        std::print("{} ", x);
    }
    std::println();
}

int main()
{
    Extents n {};
    Extents split {};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3];
    std::cin >> split[0] >> split[1] >> split[2] >> split[3];
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* inner {nullptr};
    int* outer {nullptr};
    int* whole {nullptr};
    int* low {nullptr};
    int* high {nullptr};
    cudaMallocManaged(&f, size * sizeof(int));
    cudaMallocManaged(&inner, size * sizeof(int));
    cudaMallocManaged(&outer, size * sizeof(int));
    cudaMallocManaged(&whole, size * sizeof(int));
    cudaMallocManaged(&low, size * sizeof(int));
    cudaMallocManaged(&high, size * sizeof(int));
    for (int s {0}; s < v; ++s) {
        f[s] = s * s % 1000;
        outer[s] = 0;
    }
    int blocks {(v + 127) / 128};
    apply<<<blocks, 128>>>(n, split, {f, size}, {inner, size});
    apply<<<blocks, 128>>>(n, Extents {}, {f, size},
                           {whole, size});
    for (int mu {0}; mu < 4; ++mu) {
        if (split[mu] == 1) {
            int count {v / n[mu]};
            std::size_t faces {static_cast<std::size_t>(count)};
            gather<<<blocks, 128>>>(n, mu, 0, {f, size},
                                    {low, faces});
            gather<<<blocks, 128>>>(n, mu, n[mu] - 1, {f, size},
                                    {high, faces});
            face<<<blocks, 128>>>(n, mu, {low, faces},
                                  {high, faces}, {outer, size});
        }
    }
    cudaDeviceSynchronize();
    print_all({inner, size});
    print_all({outer, size});
    print_all({whole, size});
    cudaFree(high);
    cudaFree(low);
    cudaFree(whole);
    cudaFree(outer);
    cudaFree(inner);
    cudaFree(f);
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

__device__ int join(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__device__ int face_site(int k, Extents n, int mu, int at)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    return k % stride + stride * (at + n[mu] * (k / stride));
}

__global__ void apply(Extents n, Extents split,
                      cuda::std::span<const int> f,
                      cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        Extents c {coords(s, n)};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            int cut {split[mu]};
            Extents e {c};
            e[mu] = (c[mu] + 1) % n[mu];
            if (cut == 0 || c[mu] + 1 < n[mu]) {
                sum += f[join(e, n)];
            }
            e[mu] = (c[mu] - 1 + n[mu]) % n[mu];
            if (cut == 0 || c[mu] > 0) {
                sum -= f[join(e, n)];
            }
        }
        out[s] = sum;
    }
}

__global__ void gather(Extents n, int mu, int at,
                       cuda::std::span<const int> f,
                       cuda::std::span<int> buffer)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(buffer.size())) {
        buffer[k] = f[face_site(k, n, mu, at)];
    }
}

__global__ void face(Extents n, int mu,
                     cuda::std::span<const int> low,
                     cuda::std::span<const int> high,
                     cuda::std::span<int> out)
{
    int k {static_cast<int>(blockIdx.x * blockDim.x)};
    k += static_cast<int>(threadIdx.x);
    if (k < static_cast<int>(low.size())) {
        out[face_site(k, n, mu, n[mu] - 1)] += low[k];
        out[face_site(k, n, mu, 0)] -= high[k];
    }
}

void print_all(cuda::std::span<const int> a)
{
    for (int x : a) {
        std::print("{} ", x);
    }
    std::println();
}

int main()
{
    Extents n {};
    Extents split {};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3];
    std::cin >> split[0] >> split[1] >> split[2] >> split[3];
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    int* f {nullptr};
    int* inner {nullptr};
    int* outer {nullptr};
    int* whole {nullptr};
    int* low {nullptr};
    int* high {nullptr};
    cudaMallocManaged(&f, size * sizeof(int));
    cudaMallocManaged(&inner, size * sizeof(int));
    cudaMallocManaged(&outer, size * sizeof(int));
    cudaMallocManaged(&whole, size * sizeof(int));
    cudaMallocManaged(&low, size * sizeof(int));
    cudaMallocManaged(&high, size * sizeof(int));
    for (int s {0}; s < v; ++s) {
        f[s] = s * s % 1000;
        outer[s] = 0;
    }
    int blocks {(v + 127) / 128};
    apply<<<blocks, 128>>>(n, Extents {1, 1, 1, 1}, {f, size},
                           {inner, size});
    apply<<<blocks, 128>>>(n, Extents {}, {f, size},
                           {whole, size});
    for (int mu {0}; mu < 4; ++mu) {
        if (split[mu] == 1) {
            int count {v / n[mu]};
            std::size_t faces {static_cast<std::size_t>(count)};
            gather<<<blocks, 128>>>(n, mu, 0, {f, size},
                                    {low, faces});
            gather<<<blocks, 128>>>(n, mu, n[mu] - 1, {f, size},
                                    {high, faces});
            face<<<blocks, 128>>>(n, mu, {low, faces},
                                  {high, faces}, {outer, size});
        }
    }
    cudaDeviceSynchronize();
    print_all({inner, size});
    print_all({outer, size});
    print_all({whole, size});
    cudaFree(high);
    cudaFree(low);
    cudaFree(whole);
    cudaFree(outer);
    cudaFree(inner);
    cudaFree(f);
}
```
### Tests
```in
2 2 2 2
0 0 0 0
```
```in
2 4 2 4
0 0 0 0
```
```in
6 6 6 6
1 1 1 1
```
```in
4 6 2 4
1 0 1 0
```
```in
6 4 4 2
0 0 0 1
```
```in
4 4 4 4
0 1 1 0
```
### Witness
```in
4 2 2 2
0 0 0 1
```

## Alone 2
Form: run
Write a program that reads the extents X, Y, Z, T of a periodic lattice and the one direction mu that is split (0 for x, 1 for y, 2 for z, 3 for t).
A site (x, y, z, t) has the index s = x + X·(y + Y·(z + Z·t)), and a field f holds (s·s) mod 1000 at site s.
The operator gives each site the sum of f at its 8 neighbours, one step forward and one step back in each direction; past either end a step wraps to the other end.
A step in mu that wraps reaches a face; every other step stays on this lattice.
The face part sums the terms whose step reaches a face. Gather the two end layers of f in mu into two buffers, each in order of site index; a kernel with one thread per site then reads only those buffers.
Print the face part and the whole operator, each at every site in order of site index.
Input: one line, X Y Z T and mu.
Output: two lines, each X·Y·Z·T values separated by spaces: the face part, the whole operator.
Limits: X, Y, Z and T are even, 2 ≤ each ≤ 6; mu is 0, 1, 2 or 3.
### Examples
```in
4 2 2 2 0
```
```out
9 0 0 0 49 0 0 16 121 0 0 64 225 0 0 144 361 0 0 256 529 0 0 400 729 0 0 576 961 0 0 784
682 794 930 1066 1162 1274 1442 1578 1642 1754 1954 2090 2122 2234 2466 2602 2602 2714 2978 3114 3082 3194 3490 3626 3562 3674 4002 4138 4042 4154 4514 4650
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

__device__ int join(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__device__ int stride_of(Extents n, int mu)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    return stride;
}

__device__ int face_index(int s, Extents n, int mu)
{
    int stride {stride_of(n, mu)};
    return s % stride + stride * (s / (stride * n[mu]));
}

__global__ void whole(Extents n, cuda::std::span<const int> f,
                      cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        Extents c {coords(s, n)};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            Extents e {c};
            e[mu] = (c[mu] + 1) % n[mu];
            sum += f[join(e, n)];
            e[mu] = (c[mu] - 1 + n[mu]) % n[mu];
            sum += f[join(e, n)];
        }
        out[s] = sum;
    }
}

__global__ void gather(Extents n, int mu, int at,
                       cuda::std::span<const int> f,
                       cuda::std::span<int> buffer)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    bool inside {s < static_cast<int>(f.size())};
    if (inside && coords(s, n)[mu] == at) {
        buffer[face_index(s, n, mu)] = f[s];
    }
}

__global__ void face(Extents n, int mu,
                     cuda::std::span<const int> low,
                     cuda::std::span<const int> high,
                     cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        int c {coords(s, n)[mu]};
        int k {face_index(s, n, mu)};
        int sum {0};
        if (c == n[mu] - 1) {
            sum += low[k];
        }
        if (c == 0) {
            sum += high[k];
        }
        out[s] = sum;
    }
}

int main()
{
    Extents n {};
    int mu {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> mu;
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t faces {size / static_cast<std::size_t>(n[mu])};
    int* f {nullptr};
    int* outer {nullptr};
    int* all {nullptr};
    int* low {nullptr};
    int* high {nullptr};
    cudaMallocManaged(&f, size * sizeof(int));
    cudaMallocManaged(&outer, size * sizeof(int));
    cudaMallocManaged(&all, size * sizeof(int));
    cudaMallocManaged(&low, faces * sizeof(int));
    cudaMallocManaged(&high, faces * sizeof(int));
    for (int s {0}; s < v; ++s) {
        f[s] = s * s % 1000;
    }
    int blocks {(v + 127) / 128};
    whole<<<blocks, 128>>>(n, {f, size}, {all, size});
    gather<<<blocks, 128>>>(n, mu, 0, {f, size}, {low, faces});
    gather<<<blocks, 128>>>(n, mu, n[mu] - 1, {f, size},
                            {high, faces});
    face<<<blocks, 128>>>(n, mu, {low, faces}, {high, faces},
                          {outer, size});
    cudaDeviceSynchronize();
    for (int s {0}; s < v; ++s) {
        std::print("{} ", outer[s]);
    }
    std::println();
    for (int s {0}; s < v; ++s) {
        std::print("{} ", all[s]);
    }
    std::println();
    cudaFree(high);
    cudaFree(low);
    cudaFree(all);
    cudaFree(outer);
    cudaFree(f);
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

__device__ int join(Extents c, Extents n)
{
    return c[0] + n[0] * (c[1] + n[1] * (c[2] + n[2] * c[3]));
}

__device__ int stride_of(Extents n, int mu)
{
    int stride {1};
    for (int nu {0}; nu < mu; ++nu) {
        stride *= n[nu];
    }
    return stride;
}

__device__ int face_index(int s, Extents n, int mu)
{
    int stride {stride_of(n, mu)};
    return s / n[mu];
}

__global__ void whole(Extents n, cuda::std::span<const int> f,
                      cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        Extents c {coords(s, n)};
        int sum {0};
        for (int mu {0}; mu < 4; ++mu) {
            Extents e {c};
            e[mu] = (c[mu] + 1) % n[mu];
            sum += f[join(e, n)];
            e[mu] = (c[mu] - 1 + n[mu]) % n[mu];
            sum += f[join(e, n)];
        }
        out[s] = sum;
    }
}

__global__ void gather(Extents n, int mu, int at,
                       cuda::std::span<const int> f,
                       cuda::std::span<int> buffer)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    bool inside {s < static_cast<int>(f.size())};
    if (inside && coords(s, n)[mu] == at) {
        buffer[face_index(s, n, mu)] = f[s];
    }
}

__global__ void face(Extents n, int mu,
                     cuda::std::span<const int> low,
                     cuda::std::span<const int> high,
                     cuda::std::span<int> out)
{
    int s {static_cast<int>(blockIdx.x * blockDim.x)};
    s += static_cast<int>(threadIdx.x);
    if (s < static_cast<int>(out.size())) {
        int c {coords(s, n)[mu]};
        int k {face_index(s, n, mu)};
        int sum {0};
        if (c == n[mu] - 1) {
            sum += low[k];
        }
        if (c == 0) {
            sum += high[k];
        }
        out[s] = sum;
    }
}

int main()
{
    Extents n {};
    int mu {0};
    std::cin >> n[0] >> n[1] >> n[2] >> n[3] >> mu;
    int v {n[0] * n[1] * n[2] * n[3]};
    std::size_t size {static_cast<std::size_t>(v)};
    std::size_t faces {size / static_cast<std::size_t>(n[mu])};
    int* f {nullptr};
    int* outer {nullptr};
    int* all {nullptr};
    int* low {nullptr};
    int* high {nullptr};
    cudaMallocManaged(&f, size * sizeof(int));
    cudaMallocManaged(&outer, size * sizeof(int));
    cudaMallocManaged(&all, size * sizeof(int));
    cudaMallocManaged(&low, faces * sizeof(int));
    cudaMallocManaged(&high, faces * sizeof(int));
    for (int s {0}; s < v; ++s) {
        f[s] = s * s % 1000;
    }
    int blocks {(v + 127) / 128};
    whole<<<blocks, 128>>>(n, {f, size}, {all, size});
    gather<<<blocks, 128>>>(n, mu, 0, {f, size}, {low, faces});
    gather<<<blocks, 128>>>(n, mu, n[mu] - 1, {f, size},
                            {high, faces});
    face<<<blocks, 128>>>(n, mu, {low, faces}, {high, faces},
                          {outer, size});
    cudaDeviceSynchronize();
    for (int s {0}; s < v; ++s) {
        std::print("{} ", outer[s]);
    }
    std::println();
    for (int s {0}; s < v; ++s) {
        std::print("{} ", all[s]);
    }
    std::println();
    cudaFree(high);
    cudaFree(low);
    cudaFree(all);
    cudaFree(outer);
    cudaFree(f);
}
```
### Tests
```in
2 2 2 2 3
```
```in
6 6 6 6 1
```
```in
4 6 2 4 2
```
```in
6 4 4 2 3
```
```in
2 4 6 4 0
```
### Witness
```in
4 2 2 2 3
```
