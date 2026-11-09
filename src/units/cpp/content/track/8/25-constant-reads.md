# 8.25 The serialised reads of constant memory by one warp
Part: the reads of constant memory by one warp at one address and at many addresses, the serialised reads counted
Clause: CUDA C++ Programming Guide: Device Memory Accesses (Constant Memory), CUDA C++ Best Practices Guide 10.2.5 Constant Memory, CUDA C++ Programming Guide: __constant__
After: 8.16
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory Accesses, Constant Memory (a request of a warp is split into as many separate requests as there are different addresses in it); the reads are counted from the item's own addresses, not read from the hardware

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <set>

__constant__ int c[32];

//: Record the constant address each lane of one warp reads.
__global__ void look(unsigned k,
                     cuda::std::span<unsigned long long> at,
                     cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    const int* p {&c[lane / k]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

//: Count the distinct addresses: each is a read of its own.
int reads(cuda::std::span<const unsigned long long> at)
{
    std::set<unsigned long long> seen {at.begin(), at.end()};
    return static_cast<int>(seen.size());
}

int main()
{
    //: Make the addresses and the outputs.
    unsigned long long* at {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMalloc(&out, 32 * sizeof(int));
    //: Read at one address, then at 4, then at 32.
    for (unsigned k : {32u, 8u, 1u}) {
        look<<<1, 32>>>(k, {at, 32}, {out, 32});
        cudaDeviceSynchronize();
        std::println("{}", reads({at, 32}));
    }
    cudaFree(out);
    cudaFree(at);
}
```

## Verdict 1
```cuda
constexpr int reads(int k)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        if (lane / k != (lane - 1) / k) {
            ++count;
        }
    }
    return count;
}

static_assert(reads(8) == 4);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
constexpr int reads(int k)
{
    int count {1};
    for (int lane {1}; lane < 32; ++lane) {
        if (lane / k != (lane - 1) / k) {
            ++count;
        }
    }
    return count;
}

static_assert(reads(32) == 32);

int main()
{
}
```
Answer: c++23 ill-formed 12

## Count
Columns: reads
```cuda
#include <cstdio>
#include <cuda/std/span>

__constant__ int c[32];

__device__ int load(const int* p, int line = __builtin_LINE())
{
    auto at {reinterpret_cast<unsigned long long>(p)};
    unsigned same {__match_any_sync(0xffffffffu, at)};
    if (static_cast<int>(threadIdx.x) == __ffs(same) - 1) {
        printf("@%d reads\n", line);
    }
    return *p;
}

__global__ void warp(cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    int s {load(&c[0])};
    s += load(&c[lane]);
    s += load(&c[lane / 8]);
    s += load(&c[lane % 2]);
    out[lane] = s;
}

int main()
{
    int* out {nullptr};
    cudaMalloc(&out, 32 * sizeof(int));
    warp<<<1, 32>>>({out, 32});
    cudaDeviceSynchronize();
    cudaFree(out);
}
```

## Alone 1
Form: run
Write a program that reads k and launches one warp of 32 threads.
Lane l reads the int c[l / k], with integer division, from a `__constant__` array c of 32 ints.
Print the number of serialised reads of constant memory that the warp's access makes, counted from the addresses.
Input: one line, k.
Output: one line, the number of reads.
Limits: 1 ≤ k ≤ 32.
### Examples
```in
32
```
```out
1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__constant__ int c[32];

__global__ void look(unsigned k,
                     cuda::std::span<unsigned long long> at,
                     cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    const int* p {&c[lane / k]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    unsigned k {1};
    std::cin >> k;
    unsigned long long* at {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMalloc(&out, 32 * sizeof(int));
    look<<<1, 32>>>(k, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane]);
    }
    std::println("{}", seen.size());
    cudaFree(out);
    cudaFree(at);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__constant__ int c[32];

__global__ void look(unsigned k,
                     cuda::std::span<unsigned long long> at,
                     cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    const int* p {&c[lane / k]};
    at[lane] = reinterpret_cast<unsigned long long>(p);
    out[lane] = *p;
}

int main()
{
    unsigned k {1};
    std::cin >> k;
    unsigned long long* at {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMalloc(&out, 32 * sizeof(int));
    look<<<1, 32>>>(k, {at, 32}, {out, 32});
    cudaDeviceSynchronize();
    std::set<unsigned long long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(out);
    cudaFree(at);
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
3
```
```in
5
```
```in
31
```
### Witness
```in
8
```

## Alone 2
Form: run
Write a program that reads n and k and launches one block of n threads.
Thread t reads the int c[t / k], with integer division, from a `__constant__` array c of 1024 ints.
Print the serialised reads of constant memory that the block's warps make, all warps added together, counted from the addresses.
Input: one line, n and k.
Output: one line, the number of reads.
Limits: n is a multiple of 32, 32 ≤ n ≤ 1024; 1 ≤ k ≤ 1024.
### Examples
```in
64 32
```
```out
2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__constant__ int c[1024];

__global__ void look(unsigned k,
                     cuda::std::span<unsigned long long> at,
                     cuda::std::span<int> out)
{
    unsigned t {threadIdx.x};
    const int* p {&c[t / k]};
    at[t] = reinterpret_cast<unsigned long long>(p);
    out[t] = *p;
}

int main()
{
    unsigned n {32};
    unsigned k {1};
    std::cin >> n >> k;
    unsigned long long* at {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&at, n * sizeof(*at));
    cudaMalloc(&out, n * sizeof(int));
    look<<<1, n>>>(k, {at, n}, {out, n});
    cudaDeviceSynchronize();
    std::size_t reads {0};
    for (unsigned w {0}; w < n / 32; ++w) {
        std::set<unsigned long long> seen {};
        for (unsigned lane {0}; lane < 32; ++lane) {
            seen.insert(at[32 * w + lane]);
        }
        reads += seen.size();
    }
    std::println("{}", reads);
    cudaFree(out);
    cudaFree(at);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__constant__ int c[1024];

__global__ void look(unsigned k,
                     cuda::std::span<unsigned long long> at,
                     cuda::std::span<int> out)
{
    unsigned t {threadIdx.x};
    const int* p {&c[t / k]};
    at[t] = reinterpret_cast<unsigned long long>(p);
    out[t] = *p;
}

int main()
{
    unsigned n {32};
    unsigned k {1};
    std::cin >> n >> k;
    unsigned long long* at {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&at, n * sizeof(*at));
    cudaMalloc(&out, n * sizeof(int));
    look<<<1, n>>>(k, {at, n}, {out, n});
    cudaDeviceSynchronize();
    std::size_t reads {0};
    std::set<unsigned long long> seen {};
    for (unsigned w {0}; w < n / 32; ++w) {
        for (unsigned lane {0}; lane < 32; ++lane) {
            seen.insert(at[32 * w + lane]);
        }
    }
    reads += seen.size();
    std::println("{}", reads);
    cudaFree(out);
    cudaFree(at);
}
```
### Tests
```in
32 1
```
```in
1024 1
```
```in
1024 1024
```
```in
96 48
```
```in
32 32
```
### Witness
```in
64 64
```
