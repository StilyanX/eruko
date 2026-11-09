# 8.17 The sectors one warp touches in an array of structs
Part: the sectors one warp touches in an array of structs
Clause: CUDA C++ Best Practices Guide 10.2.1 Coalesced Access to Global Memory, [expr.sizeof], [support.types.layout], [class.mem]
After: 8.16
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.1 (32-byte transactions); the sectors are counted from the item's own addresses, not read from the hardware

## Example
```cuda
#include <print>
#include <set>

//: Keep three floats per body, one body after another.
struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

//: Let each lane load the x of its own body.
__global__ void touch(const Body* b, unsigned long long* at,
                      float* out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&b[lane].x};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    Body* b {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&b, 32 * sizeof(Body));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(b, 0, 32 * sizeof(Body));
    touch<<<1, 32>>>(b, at, out);
    cudaDeviceSynchronize();
    //: Count the sectors: 12 bytes apart, three times as many.
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{} {}", sizeof(Body), seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(b);
}
```

## Verdict 1
```cuda
#include <cstddef>

struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

constexpr int sectors(int size, int offset)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {(size * lane + offset) / 32};
        int before {(size * (lane - 1) + offset) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

static_assert(sectors(sizeof(Body), offsetof(Body, y)) == 12);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <cstddef>

struct Cell {
    double v {0.0};
    float w {0.0f};
};

constexpr int sectors(int size, int offset)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {(size * lane + offset) / 32};
        int before {(size * (lane - 1) + offset) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

static_assert(sectors(sizeof(Cell), offsetof(Cell, w)) == 12);

int main()
{
}
```
Answer: c++23 ill-formed 21

## Count
Columns: sectors
```cuda
#include <cstdio>

struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

__device__ float load(const float* p,
                      int line = __builtin_LINE())
{
    auto sector {reinterpret_cast<unsigned long long>(p) / 32};
    unsigned same {__match_any_sync(0xffffffffu, sector)};
    if (static_cast<int>(threadIdx.x) == __ffs(same) - 1) {
        printf("@%d sectors\n", line);
    }
    return *p;
}

__global__ void warp(const Body* b, float* out)
{
    int lane {static_cast<int>(threadIdx.x)};
    float s {load(&b[lane].x)};
    s += load(&b[lane].z);
    s += load(&b[lane / 8].y);
    s += load(&b[3 * lane].x);
    out[lane] = s;
}

int main()
{
    Body* b {nullptr};
    float* out {nullptr};
    cudaMalloc(&b, 96 * sizeof(Body));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(b, 0, 96 * sizeof(Body));
    warp<<<1, 32>>>(b, out);
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(b);
}
```

## Alone 1
Form: run
Write a program that reads t and f and launches one warp of 32 threads on an array of `struct Body { float x; float y; float z; };` that `cudaMalloc` gives.
Lane l, for l < t, loads field f of body l: x when f is 0, y when f is 1, z when f is 2; the other lanes load nothing.
Print the number of 32-byte sectors of global memory that the warp's loads touch, counted from their addresses.
Input: one line, t and f.
Output: one line, the number of sectors.
Limits: 1 ≤ t ≤ 32; f is 0, 1 or 2.
### Examples
```in
32 0
```
```out
12
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

__global__ void touch(cuda::std::span<const Body> b, int t,
                      int f,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    if (lane < t) {
        const Body& body {b[lane]};
        const float* p {f == 0 ? &body.x : f == 1 ? &body.y
                                                  : &body.z};
        at[lane] = reinterpret_cast<unsigned long long>(p);
        out[lane] = *p;
    }
}

int main()
{
    int t {1};
    int f {0};
    std::cin >> t >> f;
    Body* b {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&b, 32 * sizeof(Body));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(b, 0, 32 * sizeof(Body));
    touch<<<1, 32>>>({b, 32}, t, f, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < t; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(b);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

__global__ void touch(cuda::std::span<const Body> b, int t,
                      int f,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    if (lane < t) {
        const Body& body {b[lane]};
        const float* p {f == 0 ? &body.x : f == 1 ? &body.y
                                                  : &body.z};
        at[lane] = reinterpret_cast<unsigned long long>(p);
        out[lane] = *p;
    }
}

int main()
{
    int t {1};
    int f {0};
    std::cin >> t >> f;
    Body* b {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&b, 32 * sizeof(Body));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(b, 0, 32 * sizeof(Body));
    touch<<<1, 32>>>({b, 32}, t, f, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < t; ++lane) {
        seen.insert((at[lane] - at[0]) / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(b);
}
```
### Tests
```in
1 0
```
```in
32 2
```
```in
6 1
```
```in
8 2
```
### Witness
```in
3 2
```

## Alone 2
Form: run
Write a program that reads t and launches one warp of 32 threads on an array of `struct Body { float x; float y; float z; };` that `cudaMalloc` gives.
Lane l, for l < t, loads x of body l, then y, then z, three loads; the other lanes load nothing.
For each of the three loads, print the number of 32-byte sectors of global memory that the warp's load touches, counted from its addresses.
Input: one line, t.
Output: three lines, the sectors of the load of x, of y, then of z.
Limits: 1 ≤ t ≤ 32.
### Examples
```in
32
```
```out
12
12
12
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

using Address = unsigned long long;

__global__ void touch(cuda::std::span<const Body> b, int t,
                      cuda::std::span<Address> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    if (lane < t) {
        const float* p[3] {&b[lane].x, &b[lane].y, &b[lane].z};
        for (int k {0}; k < 3; ++k) {
            at[32 * k + lane] = reinterpret_cast<Address>(p[k]);
            out[lane] += *p[k];
        }
    }
}

int main()
{
    int t {1};
    std::cin >> t;
    Body* b {nullptr};
    float* out {nullptr};
    Address* at {nullptr};
    cudaMalloc(&b, 32 * sizeof(Body));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 96 * sizeof(Address));
    cudaMemset(b, 0, 32 * sizeof(Body));
    cudaMemset(out, 0, 32 * sizeof(float));
    touch<<<1, 32>>>({b, 32}, t, {at, 96}, {out, 32});
    cudaDeviceSynchronize();
    for (int k {0}; k < 3; ++k) {
        std::set<Address> seen {};
        for (int lane {0}; lane < t; ++lane) {
            Address first {at[32 * k + lane]};
            Address last {first + sizeof(float) - 1};
            for (Address s {first / 32}; s <= last / 32; ++s) {
                seen.insert(s);
            }
        }
        std::println("{}", seen.size());
    }
    cudaFree(at);
    cudaFree(out);
    cudaFree(b);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

struct Body {
    float x {0.0f};
    float y {0.0f};
    float z {0.0f};
};

using Address = unsigned long long;

__global__ void touch(cuda::std::span<const Body> b, int t,
                      cuda::std::span<Address> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    if (lane < t) {
        const float* p[3] {&b[lane].x, &b[lane].y, &b[lane].z};
        for (int k {0}; k < 3; ++k) {
            at[32 * k + lane] = reinterpret_cast<Address>(p[k]);
            out[lane] += *p[k];
        }
    }
}

int main()
{
    int t {1};
    std::cin >> t;
    Body* b {nullptr};
    float* out {nullptr};
    Address* at {nullptr};
    cudaMalloc(&b, 32 * sizeof(Body));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 96 * sizeof(Address));
    cudaMemset(b, 0, 32 * sizeof(Body));
    cudaMemset(out, 0, 32 * sizeof(float));
    touch<<<1, 32>>>({b, 32}, t, {at, 96}, {out, 32});
    cudaDeviceSynchronize();
    for (int k {0}; k < 3; ++k) {
        std::set<Address> seen {};
        for (int lane {0}; lane < t; ++lane) {
            Address first {at[lane]};
            Address last {first + sizeof(Body) - 1};
            for (Address s {first / 32}; s <= last / 32; ++s) {
                seen.insert(s);
            }
        }
        std::println("{}", seen.size());
    }
    cudaFree(at);
    cudaFree(out);
    cudaFree(b);
}
```
### Tests
```in
1
```
```in
2
```
```in
11
```
```in
16
```
### Witness
```in
3
```
