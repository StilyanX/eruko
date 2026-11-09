# 8.16 The sectors of global memory that the loads of one warp touch
Part: the sectors of global memory that the loads of one warp touch
Clause: CUDA C++ Best Practices Guide 10.2.1 Coalesced Access to Global Memory, CUDA C++ Programming Guide: Device Memory Accesses, [expr.const]
After: none
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.1 (32-byte transactions for compute capability 6.0 and higher); the sectors are counted from the item's own addresses, not read from the hardware

## Example
```cuda
#include <print>
#include <set>

//: Record the address each lane of one warp loads from.
__global__ void touch(const float* a, int stride,
                      unsigned long long* at, float* out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&a[stride * lane]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

//: Count the 32-byte sectors that hold those addresses.
int sectors(const unsigned long long* at)
{
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    return static_cast<int>(seen.size());
}

int main()
{
    //: Make the array, the addresses and the outputs.
    float* a {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, 64 * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(a, 0, 64 * sizeof(float));
    //: Load with stride 1, then stride 2, and count each.
    for (int stride {1}; stride <= 2; ++stride) {
        touch<<<1, 32>>>(a, stride, at, out);
        cudaDeviceSynchronize();
        std::println("{}", sectors(at));
    }
    cudaFree(at);
    cudaFree(out);
    cudaFree(a);
}
```

## Verdict 1
```cuda
constexpr int sectors(int stride, int size)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {stride * size * lane / 32};
        int before {stride * size * (lane - 1) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

static_assert(sectors(2, 4) == 8);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
constexpr int sectors(int stride, int size)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        int now {stride * size * lane / 32};
        int before {stride * size * (lane - 1) / 32};
        if (now != before) {
            ++count;
        }
    }
    return count;
}

static_assert(sectors(1, 8) == 4);

int main()
{
}
```
Answer: c++23 ill-formed 14

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

__global__ void warp(const float* a, float* out)
{
    int lane {static_cast<int>(threadIdx.x)};
    float s {load(&a[lane])};
    s += load(&a[2 * lane]);
    s += load(&a[lane / 4]);
    s += load(&a[8 * lane + 1]);
    s += load(&a[0]);
    out[lane] = s;
}

int main()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 256 * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(a, 0, 256 * sizeof(float));
    warp<<<1, 32>>>(a, out);
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(a);
}
```

## Alone 1
Form: run
Write a program that reads s and launches one warp of 32 threads.
Lane l loads the float a[s * l] from an array that `cudaMalloc` gives.
Print the number of 32-byte sectors of global memory that the warp's loads touch, counted from their addresses.
Input: one line, s.
Output: one line, the number of sectors.
Limits: 1 ≤ s ≤ 64.
### Examples
```in
2
```
```out
8
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__global__ void touch(cuda::std::span<const float> a, int s,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&a[s * lane]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    int s {1};
    std::cin >> s;
    float* a {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, 32 * s * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(a, 0, 32 * s * sizeof(float));
    touch<<<1, 32>>>({a, 32u * s}, s, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__global__ void touch(cuda::std::span<const float> a, int s,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&a[s * lane]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    int s {1};
    std::cin >> s;
    float* a {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, 32 * s * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(a, 0, 32 * s * sizeof(float));
    touch<<<1, 32>>>({a, 32u * s}, s, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (auto k {at[0] / 32}; k <= (at[31] + 3) / 32; ++k) {
        seen.insert(k);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(a);
}
```
### Tests
```in
1
```
```in
3
```
```in
8
```
```in
64
```
### Witness
```in
16
```

## Alone 2
Form: run
Write a program that reads k and launches one warp of 32 threads.
Lane l loads the float a[l + k] from an array that `cudaMalloc` gives, which starts on a 256-byte boundary.
Print the number of 32-byte sectors of global memory that the warp's loads touch, counted from their addresses.
Input: one line, k.
Output: one line, the number of sectors.
Limits: 0 ≤ k ≤ 1000.
### Examples
```in
8
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

__global__ void touch(cuda::std::span<const float> a, int k,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&a[lane + k]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    int k {0};
    std::cin >> k;
    float* a {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, (32 + k) * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(a, 0, (32 + k) * sizeof(float));
    touch<<<1, 32>>>({a, 32u + k}, k, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__global__ void touch(cuda::std::span<const float> a, int k,
                      cuda::std::span<unsigned long long> at,
                      cuda::std::span<float> out)
{
    int lane {static_cast<int>(threadIdx.x)};
    const float* p {&a[lane + k]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    int k {0};
    std::cin >> k;
    float* a {nullptr};
    float* out {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, (32 + k) * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(a, 0, (32 + k) * sizeof(float));
    touch<<<1, 32>>>({a, 32u + k}, k, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert((at[lane] - at[0]) / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(out);
    cudaFree(a);
}
```
### Tests
```in
0
```
```in
7
```
```in
999
```
```in
1000
```
### Witness
```in
1
```
