# 0.01 A field type with the accessor of one precision
Task: a field type with the accessor of one precision: the layout, the sectors one warp touches, the bytes per element
Shape: QUDA include/color_spinor_field_order.h (FloatNOrder and indexFloatN: a field of short vectors kept in planes of a few reals, one plane after another), include/dslash.h (bytes: the bytes of one vector)
Device: yes
Write a field type that holds three complex numbers at each site, in float, and an accessor that reads and writes them.
The field keeps the numbers in three planes, one per complex number, each plane a run of float2 values in site order.
Say how many 32-byte sectors one warp touches when its threads load one plane, and how many bytes one site takes.

## Bound
Tag: 8.12
Count: the bytes the accessor loads for the three complex numbers of one site, in single precision
Answer: 24
Source: QUDA include/color_spinor_field_order.h: FloatNOrder holds length = 2·Ns·Nc reals per site, with Ns = 1 and Nc = 3 for a vector of three complex numbers, each sizeof(float); include/dslash.h bytes() gives the same as spinor_bytes = 2·Nc·Ns·precision
Derivation 1: three complex numbers, two floats each, four bytes a float: 3 · 2 · 4 = 24.
Derivation 2: the accessor loads one float2 from each of the three planes, 8 bytes each: 3 · 8 = 24.

## Verdict 1
Tag: 8.18
```cuda
constexpr int sectors(int sites, int plane, int first)
{
    int start {plane * sites + first};
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {8 * (start + lane) / 32};
        int before {8 * (start + lane - 1) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

static_assert(sectors(64, 2, 0) == 8);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
Tag: 8.16
```cuda
constexpr int sectors(int sites, int plane, int first)
{
    int start {plane * sites + first};
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {8 * (start + lane) / 32};
        int before {8 * (start + lane - 1) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

static_assert(sectors(37, 1, 0) == 8);

int main()
{
}
```
Answer: c++23 ill-formed 15

## Count
Tag: 8.16
Columns: sectors
```cuda
#include <cstdio>
#include <cuda/std/span>

struct Field {
    cuda::std::span<const float2> data {};
    int sites {0};

    __device__ float2 load(int x, int plane,
                           int line = __builtin_LINE()) const
    {
        const float2* p {&data[plane * sites + x]};
        auto at {reinterpret_cast<unsigned long long>(p)};
        auto sector {at / 32};
        unsigned same {__match_any_sync(0xffffffffu, sector)};
        if (static_cast<int>(threadIdx.x) == __ffs(same) - 1) {
            printf("@%d sectors\n", line);
        }
        return *p;
    }
};

__global__ void warp(Field f, cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    float2 a {f.load(lane, 0)};
    float2 b {f.load(lane + 2, 1)};
    float2 c {f.load(2 * lane, 0)};
    float2 d {f.load(lane / 4, 2)};
    out[lane] = a.x + b.x + c.x + d.y;
}

int main()
{
    float2* data {nullptr};
    float* out {nullptr};
    cudaMalloc(&data, 3 * 64 * sizeof(float2));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(data, 0, 3 * 64 * sizeof(float2));
    warp<<<1, 32>>>({{data, 3 * 64}, 64}, {out, 32});
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(data);
}
```

## Alone 1
Tag: 8.18
Newer: 69, 71, 76
Form: run
Write a program that reads n and the reals of n sites, and stores them in a field of float in device memory.
Site x holds three complex numbers v0, v1 and v2, each a real part and an imaginary part.
The field keeps them in three planes, one per complex number, plane 0 first.
Plane c holds v_c of site 0, then v_c of site 1, and so on, the real part before the imaginary part.
A kernel with one thread per site, 32 threads a block, writes each site's numbers into the field.
A second kernel of the same shape loads v1 of each site.
Count the 32-byte sectors that the first warp's loads of v1 touch, from their addresses.
Input: one line, n; then n lines, each the six reals of a site: v0, v1, v2, real part first.
Output: one line, the field's 6n floats in memory order, separated by spaces; then one line, the number of sectors.
Limits: 1 ≤ n ≤ 64; each real is a whole number from -100 to 100.
### Examples
```in
1
1 2 3 4 5 6
```
```out
1 2 3 4 5 6
1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

using Address = unsigned long long;

struct Field {
    cuda::std::span<float2> data {};
    int sites {0};

    __device__ float2& at(int x, int c) const
    {
        return data[c * sites + x];
    }
};

__device__ int site()
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    return static_cast<int>(x);
}

__global__ void fill(Field f, cuda::std::span<const float> in)
{
    int x {site()};
    if (x < f.sites) {
        for (int c {0}; c < 3; ++c) {
            int k {6 * x + 2 * c};
            f.at(x, c) = float2 {in[k], in[k + 1]};
        }
    }
}

__global__ void touch(Field f, cuda::std::span<Address> at,
                      cuda::std::span<float> out)
{
    int x {site()};
    if (x < f.sites) {
        const float2& v {f.at(x, 1)};
        at[x] = reinterpret_cast<Address>(&v);
        out[x] = v.x + v.y;
    }
}

int main()
{
    int n {1};
    std::cin >> n;
    std::size_t size {static_cast<std::size_t>(n)};
    float* in {nullptr};
    float2* data {nullptr};
    Address* at {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&in, 6 * size * sizeof(float));
    for (std::size_t i {0}; i < 6 * size; ++i) {
        std::cin >> in[i];
    }
    cudaMallocManaged(&data, 3 * size * sizeof(float2));
    cudaMallocManaged(&at, size * sizeof(Address));
    cudaMalloc(&out, size * sizeof(float));
    Field f {{data, 3 * size}, n};
    int blocks {(n + 31) / 32};
    fill<<<blocks, 32>>>(f, {in, 6 * size});
    touch<<<blocks, 32>>>(f, {at, size}, {out, size});
    cudaDeviceSynchronize();
    const float* raw {reinterpret_cast<const float*>(data)};
    for (std::size_t i {0}; i < 6 * size; ++i) {
        std::print("{} ", raw[i]);
    }
    std::println();
    std::set<Address> seen {};
    for (int x {0}; x < n && x < 32; ++x) {
        seen.insert(at[x] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(out);
    cudaFree(at);
    cudaFree(data);
    cudaFree(in);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

using Address = unsigned long long;

struct Field {
    cuda::std::span<float2> data {};
    int sites {0};

    __device__ float2& at(int x, int c) const
    {
        return data[3 * x + c];
    }
};

__device__ int site()
{
    unsigned x {blockIdx.x * blockDim.x + threadIdx.x};
    return static_cast<int>(x);
}

__global__ void fill(Field f, cuda::std::span<const float> in)
{
    int x {site()};
    if (x < f.sites) {
        for (int c {0}; c < 3; ++c) {
            int k {6 * x + 2 * c};
            f.at(x, c) = float2 {in[k], in[k + 1]};
        }
    }
}

__global__ void touch(Field f, cuda::std::span<Address> at,
                      cuda::std::span<float> out)
{
    int x {site()};
    if (x < f.sites) {
        const float2& v {f.at(x, 1)};
        at[x] = reinterpret_cast<Address>(&v);
        out[x] = v.x + v.y;
    }
}

int main()
{
    int n {1};
    std::cin >> n;
    std::size_t size {static_cast<std::size_t>(n)};
    float* in {nullptr};
    float2* data {nullptr};
    Address* at {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&in, 6 * size * sizeof(float));
    for (std::size_t i {0}; i < 6 * size; ++i) {
        std::cin >> in[i];
    }
    cudaMallocManaged(&data, 3 * size * sizeof(float2));
    cudaMallocManaged(&at, size * sizeof(Address));
    cudaMalloc(&out, size * sizeof(float));
    Field f {{data, 3 * size}, n};
    int blocks {(n + 31) / 32};
    fill<<<blocks, 32>>>(f, {in, 6 * size});
    touch<<<blocks, 32>>>(f, {at, size}, {out, size});
    cudaDeviceSynchronize();
    const float* raw {reinterpret_cast<const float*>(data)};
    for (std::size_t i {0}; i < 6 * size; ++i) {
        std::print("{} ", raw[i]);
    }
    std::println();
    std::set<Address> seen {};
    for (int x {0}; x < n && x < 32; ++x) {
        seen.insert(at[x] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(out);
    cudaFree(at);
    cudaFree(data);
    cudaFree(in);
}
```
### Tests
```in
2
1 2 3 4 5 6
-1 -2 -3 -4 -5 -6
```
```in
5
0 1 2 3 4 5
10 11 12 13 14 15
20 21 22 23 24 25
30 31 32 33 34 35
40 41 42 43 44 45
```
```in
1
-100 100 0 0 7 -7
```
```in
33
-100 -63 -26 11 48 85
-79 -42 -5 32 69 -95
-58 -21 16 53 90 -74
-37 0 37 74 -90 -53
-16 21 58 95 -69 -32
5 42 79 -85 -48 -11
26 63 100 -64 -27 10
47 84 -80 -43 -6 31
68 -96 -59 -22 15 52
89 -75 -38 -1 36 73
-91 -54 -17 20 57 94
-70 -33 4 41 78 -86
-49 -12 25 62 99 -65
-28 9 46 83 -81 -44
-7 30 67 -97 -60 -23
14 51 88 -76 -39 -2
35 72 -92 -55 -18 19
56 93 -71 -34 3 40
77 -87 -50 -13 24 61
98 -66 -29 8 45 82
-82 -45 -8 29 66 -98
-61 -24 13 50 87 -77
-40 -3 34 71 -93 -56
-19 18 55 92 -72 -35
2 39 76 -88 -51 -14
23 60 97 -67 -30 7
44 81 -83 -46 -9 28
65 -99 -62 -25 12 49
86 -78 -41 -4 33 70
-94 -57 -20 17 54 91
-73 -36 1 38 75 -89
-52 -15 22 59 96 -68
-31 6 43 80 -84 -47
```
```in
64
-100 -47 6 59 -89 -36
17 70 -78 -25 28 81
-67 -14 39 92 -56 -3
50 -98 -45 8 61 -87
-34 19 72 -76 -23 30
83 -65 -12 41 94 -54
-1 52 -96 -43 10 63
-85 -32 21 74 -74 -21
32 85 -63 -10 43 96
-52 1 54 -94 -41 12
65 -83 -30 23 76 -72
-19 34 87 -61 -8 45
98 -50 3 56 -92 -39
14 67 -81 -28 25 78
-70 -17 36 89 -59 -6
47 100 -48 5 58 -90
-37 16 69 -79 -26 27
80 -68 -15 38 91 -57
-4 49 -99 -46 7 60
-88 -35 18 71 -77 -24
29 82 -66 -13 40 93
-55 -2 51 -97 -44 9
62 -86 -33 20 73 -75
-22 31 84 -64 -11 42
95 -53 0 53 -95 -42
11 64 -84 -31 22 75
-73 -20 33 86 -62 -9
44 97 -51 2 55 -93
-40 13 66 -82 -29 24
77 -71 -18 35 88 -60
-7 46 99 -49 4 57
-91 -38 15 68 -80 -27
26 79 -69 -16 37 90
-58 -5 48 -100 -47 6
59 -89 -36 17 70 -78
-25 28 81 -67 -14 39
92 -56 -3 50 -98 -45
8 61 -87 -34 19 72
-76 -23 30 83 -65 -12
41 94 -54 -1 52 -96
-43 10 63 -85 -32 21
74 -74 -21 32 85 -63
-10 43 96 -52 1 54
-94 -41 12 65 -83 -30
23 76 -72 -19 34 87
-61 -8 45 98 -50 3
56 -92 -39 14 67 -81
-28 25 78 -70 -17 36
89 -59 -6 47 100 -48
5 58 -90 -37 16 69
-79 -26 27 80 -68 -15
38 91 -57 -4 49 -99
-46 7 60 -88 -35 18
71 -77 -24 29 82 -66
-13 40 93 -55 -2 51
-97 -44 9 62 -86 -33
20 73 -75 -22 31 84
-64 -11 42 95 -53 0
53 -95 -42 11 64 -84
-31 22 75 -73 -20 33
86 -62 -9 44 97 -51
2 55 -93 -40 13 66
-82 -29 24 77 -71 -18
35 88 -60 -7 46 99
```
### Witness
```in
3
1 2 3 4 5 6
7 8 9 10 11 12
13 14 15 16 17 18
```
