# 8.18 The sectors one warp touches in a struct of arrays
Part: the sectors one warp touches in a struct of arrays
Clause: CUDA C++ Best Practices Guide 10.2.1 Coalesced Access to Global Memory, CUDA C++ Programming Guide: Device Memory Accesses, [expr.add], [expr.sizeof]
After: 8.16, 8.17
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.1 (32-byte transactions); the sectors are counted from the item's own addresses, not read from the hardware

## Example
```cuda
#include <print>
#include <set>

//: Keep each field of the bodies in an array of its own.
struct Bodies {
    float* x {nullptr};
    float* y {nullptr};
    float* z {nullptr};
};

//: Let each lane load x of its own body.
__global__ void touch(Bodies b, unsigned long long* at,
                      float* out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&b.x[lane]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    //: Give each array its own allocation and start.
    Bodies b {nullptr, nullptr, nullptr};
    for (float** a : {&b.x, &b.y, &b.z}) {
        cudaMalloc(a, 32 * sizeof(float));
        cudaMemset(*a, 0, 32 * sizeof(float));
    }
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    touch<<<1, 32>>>(b, at, out);
    cudaDeviceSynchronize();
    //: Count the sectors: the x values lie side by side.
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    for (float* a : {b.x, b.y, b.z}) {
        cudaFree(a);
    }
}
```

## Verdict 1
```cuda
constexpr int sectors(int start)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {(start + 4 * lane) / 32};
        int before {(start + 4 * (lane - 1)) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

constexpr int n {64};

static_assert(sectors(n * sizeof(float)) == 4);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
constexpr int sectors(int start)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {(start + 4 * lane) / 32};
        int before {(start + 4 * (lane - 1)) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

constexpr int n {100};

static_assert(sectors(n * sizeof(float)) == 4);

int main()
{
}
```
Answer: c++23 ill-formed 16

## Count
Columns: sectors
```cuda
#include <cstdio>

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

__global__ void warp(const float* x, float* out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* y {x + 64};
    const float* z {x + 100};
    float s {load(&x[lane])};
    s += load(&y[lane]);
    s += load(&z[lane]);
    out[lane] = s;
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMalloc(&x, 132 * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(x, 0, 132 * sizeof(float));
    warp<<<1, 32>>>(x, out);
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(x);
}
```

## Alone 1
Form: run
Write a program that reads n and keeps three float arrays x, y and z of n elements back to back in one `cudaMalloc` allocation: x first, then y, then z.
One warp of 32 threads runs, and lane l loads y[l].
Print the number of 32-byte sectors of global memory that the warp's loads touch, counted from their addresses.
Input: one line, n.
Output: one line, the number of sectors.
Limits: 32 ≤ n ≤ 1000.
### Examples
```in
64
```
```out
4
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__global__ void touch(cuda::std::span<const float> y,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&y[lane]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    int n {32};
    std::cin >> n;
    float* x {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&x, 3 * n * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(x, 0, 3 * n * sizeof(float));
    float* y {x + n};
    touch<<<1, 32>>>({y, 32}, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__global__ void touch(cuda::std::span<const float> y,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&y[lane]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    int n {32};
    std::cin >> n;
    float* x {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&x, 3 * n * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(x, 0, 3 * n * sizeof(float));
    float* y {x + n};
    touch<<<1, 32>>>({y, 32}, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert((at[lane] - at[0]) / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(x);
}
```
### Tests
```in
32
```
```in
33
```
```in
999
```
```in
1000
```
### Witness
```in
100
```

## Alone 2
Form: run
Write a program that reads n and keeps a double array x of n elements and then a float array w of n elements back to back in one `cudaMalloc` allocation.
One warp of 32 threads runs; lane l loads x[l], then w[l].
Print the number of 32-byte sectors of global memory that the warp's load of x touches, then the number for its load of w, each counted from the addresses.
Input: one line, n.
Output: two lines, the sectors of the load of x, then of the load of w.
Limits: 32 ≤ n ≤ 1000.
### Examples
```in
64
```
```out
8
4
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

using Address = unsigned long long;

__global__ void touch(cuda::std::span<const double> x,
                      cuda::std::span<const float> w,
                      cuda::std::span<Address> at,
                      cuda::std::span<double> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    at[lane] = reinterpret_cast<Address>(&x[lane]);
    at[32 + lane] = reinterpret_cast<Address>(&w[lane]);
    out[lane] = x[lane] + w[lane];
}

int main()
{
    int n {32};
    std::cin >> n;
    std::size_t bytes {n * (sizeof(double) + sizeof(float))};
    double* x {nullptr};
    double* out {nullptr};
    Address* at {nullptr};
    cudaMalloc(&x, bytes);
    cudaMalloc(&out, 32 * sizeof(double));
    cudaMallocManaged(&at, 64 * sizeof(Address));
    cudaMemset(x, 0, bytes);
    float* w {reinterpret_cast<float*>(x + n)};
    touch<<<1, 32>>>({x, 32}, {w, 32}, {at, 64}, {out, 32});
    cudaDeviceSynchronize();
    for (int k {0}; k < 2; ++k) {
        std::set<Address> seen {};
        for (int lane {0}; lane < 32; ++lane) {
            seen.insert(at[32 * k + lane] / 32);
        }
        std::println("{}", seen.size());
    }
    cudaFree(at);
    cudaFree(out);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

using Address = unsigned long long;

__global__ void touch(cuda::std::span<const double> x,
                      cuda::std::span<const float> w,
                      cuda::std::span<Address> at,
                      cuda::std::span<double> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    at[lane] = reinterpret_cast<Address>(&x[lane]);
    at[32 + lane] = reinterpret_cast<Address>(&w[lane]);
    out[lane] = x[lane] + w[lane];
}

int main()
{
    int n {32};
    std::cin >> n;
    std::size_t bytes {n * (sizeof(double) + sizeof(float))};
    double* x {nullptr};
    double* out {nullptr};
    Address* at {nullptr};
    cudaMalloc(&x, bytes);
    cudaMalloc(&out, 32 * sizeof(double));
    cudaMallocManaged(&at, 64 * sizeof(Address));
    cudaMemset(x, 0, bytes);
    float* w {reinterpret_cast<float*>(x) + n};
    touch<<<1, 32>>>({x, 32}, {w, 32}, {at, 64}, {out, 32});
    cudaDeviceSynchronize();
    for (int k {0}; k < 2; ++k) {
        std::set<Address> seen {};
        for (int lane {0}; lane < 32; ++lane) {
            seen.insert(at[32 * k + lane] / 32);
        }
        std::println("{}", seen.size());
    }
    cudaFree(at);
    cudaFree(out);
    cudaFree(x);
}
```
### Tests
```in
32
```
```in
33
```
```in
36
```
```in
1000
```
### Witness
```in
44
```
