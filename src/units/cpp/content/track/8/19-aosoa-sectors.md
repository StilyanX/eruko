# 8.19 The sectors one warp touches in an array of blocks
Part: the sectors one warp touches in an array of blocks, each block a struct of arrays
Clause: CUDA C++ Best Practices Guide 10.2.1 Coalesced Access to Global Memory, CUDA C++ Programming Guide: Device Memory Accesses, [class.mem], [expr.sizeof], [expr.add]
After: 8.17, 8.18
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.1 (32-byte transactions); the sectors are counted from the item's own addresses, not read from the hardware

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <set>

//: Hold eight elements of each field in one block.
struct Block {
    float x[8];
    float y[8];
    float z[8];
};

//: Take the address lane i loads: y of element i, in block i / 8.
__global__ void touch(cuda::std::span<const Block> a,
                      cuda::std::span<long> at)
{
    int i {static_cast<int>(threadIdx.x)};
    const float* p {&a[i / 8].y[i % 8]};
    at[i] = reinterpret_cast<const char*>(p)
            - reinterpret_cast<const char*>(a.data());
}

int main()
{
    //: Make four blocks for the 32 elements of one warp.
    Block* a {nullptr};
    long* at {nullptr};
    cudaMalloc(&a, 4 * sizeof(Block));
    cudaMallocManaged(&at, 32 * sizeof(long));
    touch<<<1, 32>>>({a, 4}, {at, 32});
    cudaDeviceSynchronize();
    //: Count the 32-byte sectors: the y of each block fills one.
    std::set<long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(a);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

struct Block {
    float x[8];
    float y[8];
};

__global__ void sum(cuda::std::span<const Block> a,
                    cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    if (i < out.size()) {
        out[i] = a[i / 8].x[i % 8];
    }
}

int main()
{
    std::size_t n {36};
    std::size_t blocks {n / 8};
    Block* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, blocks * sizeof(Block));
    cudaMalloc(&out, n * sizeof(float));
    cudaMemset(a, 0, blocks * sizeof(Block));
    sum<<<1, 64>>>({a, blocks}, {out, n});
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(out);
    cudaFree(a);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

struct Block {
    float x[8];
    float y[8];
};

__global__ void sum(cuda::std::span<const Block> a,
                    cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    if (i < out.size()) {
        out[i] = a[i / 8].x[i % 8] + a[i / 8].y[i % 8];
    }
}

int main()
{
    std::size_t n {36};
    std::size_t blocks {(n + 7) / 8};
    Block* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, blocks * sizeof(Block));
    cudaMalloc(&out, n * sizeof(float));
    cudaMemset(a, 0, blocks * sizeof(Block));
    sum<<<1, 64>>>({a, blocks}, {out, n});
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(out);
    cudaFree(a);
}
```
Answer: c++23 defined

## Count
Columns: sectors
```cuda
#include <cstdio>
#include <set>

struct Block {
    float x[8];
    double y[8];
};

constexpr long size {sizeof(Block)};

void sectors(int line, long (*at)(int))
{
    std::set<long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        if (seen.insert(at(lane) / 32).second) {
            std::printf("@%d sectors\n", line);
        }
    }
}

int main()
{
    sectors(__LINE__, [](int i) {
        return i / 8 * size + 4 * (i % 8);
    });
    sectors(__LINE__, [](int i) {
        return i / 8 * size + 32 + 8 * (i % 8);
    });
    sectors(__LINE__, [](int i) {
        return i * size;
    });
}
```

## Alone 1
Form: run
Write a program that reads B and a field f, and prints how many 32-byte sectors one warp touches.
The array holds blocks of B elements.
Each block is a struct of three float arrays x, y and z, each of B elements, in that order.
Lane i of the warp loads field f of element i, which lies in block i / B at place i % B.
The array starts at an address that is a multiple of 256.
Input: one line, B and f, where f is 0 for x, 1 for y and 2 for z.
Output: one line, the number of distinct sectors the 32 loads touch.
Limits: B is 1, 2, 4, 8, 16, 32 or 64.
### Examples
```in
8 1
```
```out
4
```
```in
32 2
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

__global__ void touch(cuda::std::span<const float> a,
                      cuda::std::span<long> at, int b, int f)
{
    int i {static_cast<int>(threadIdx.x)};
    int k {i / b * 3 * b + f * b + i % b};
    at[i] = reinterpret_cast<const char*>(&a[k])
            - reinterpret_cast<const char*>(a.data());
}

int main()
{
    int b {1};
    int f {0};
    std::cin >> b >> f;
    int blocks {(32 + b - 1) / b};
    std::size_t n {static_cast<std::size_t>(blocks * 3 * b)};
    float* a {nullptr};
    long* at {nullptr};
    cudaMalloc(&a, n * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(long));
    touch<<<1, 32>>>({a, n}, {at, 32}, b, f);
    cudaDeviceSynchronize();
    std::set<long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <set>

__global__ void touch(cuda::std::span<const float> a,
                      cuda::std::span<long> at, int b, int f)
{
    int i {static_cast<int>(threadIdx.x)};
    int k {i / b * b + f * b + i % b};
    at[i] = reinterpret_cast<const char*>(&a[k])
            - reinterpret_cast<const char*>(a.data());
}

int main()
{
    int b {1};
    int f {0};
    std::cin >> b >> f;
    int blocks {(32 + b - 1) / b};
    std::size_t n {static_cast<std::size_t>(blocks * 3 * b)};
    float* a {nullptr};
    long* at {nullptr};
    cudaMalloc(&a, n * sizeof(float));
    cudaMallocManaged(&at, 32 * sizeof(long));
    touch<<<1, 32>>>({a, n}, {at, 32}, b, f);
    cudaDeviceSynchronize();
    std::set<long> seen {};
    for (int lane {0}; lane < 32; ++lane) {
        seen.insert(at[lane] / 32);
    }
    std::println("{}", seen.size());
    cudaFree(at);
    cudaFree(a);
}
```
### Tests
```in
1 0
```
```in
64 1
```
```in
2 2
```
```in
4 1
```
```in
16 0
```
### Witness
```in
4 0
```

## Alone 2
Form: run
Write a program that reads B and prints how many 32-byte sectors one warp touches in each of two loads.
The array holds blocks; each block is `struct Block { double x[B]; float y[B]; };`, laid out as C++ lays it out.
Lane i loads x of element i, then y of element i; element i lies in block i / B at place i % B.
The array starts at an address that is a multiple of 256.
Input: one line, B.
Output: one line, the sectors the 32 loads of x touch and the sectors the 32 loads of y touch, separated by a space.
Limits: B is 1, 2, 3, 4 or 8.
### Examples
```in
2
```
```out
12 12
```
```in
8
```
```out
8 4
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <set>

template <int B>
struct Block {
    double x[B];
    float y[B];
};

template <int B>
void count()
{
    long size {sizeof(Block<B>)};
    std::set<long> xs {};
    std::set<long> ys {};
    for (long i {0}; i < 32; ++i) {
        long start {i / B * size};
        xs.insert((start + 8 * (i % B)) / 32);
        ys.insert((start + 8 * B + 4 * (i % B)) / 32);
    }
    std::println("{} {}", xs.size(), ys.size());
}

int main()
{
    int b {1};
    std::cin >> b;
    switch (b) {
    case 1:
        count<1>();
        break;
    case 2:
        count<2>();
        break;
    case 3:
        count<3>();
        break;
    case 4:
        count<4>();
        break;
    default:
        count<8>();
        break;
    }
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <set>

template <int B>
struct Block {
    double x[B];
    float y[B];
};

template <int B>
void count()
{
    long size {12 * B};
    std::set<long> xs {};
    std::set<long> ys {};
    for (long i {0}; i < 32; ++i) {
        long start {i / B * size};
        xs.insert((start + 8 * (i % B)) / 32);
        ys.insert((start + 8 * B + 4 * (i % B)) / 32);
    }
    std::println("{} {}", xs.size(), ys.size());
}

int main()
{
    int b {1};
    std::cin >> b;
    switch (b) {
    case 1:
        count<1>();
        break;
    case 2:
        count<2>();
        break;
    case 3:
        count<3>();
        break;
    case 4:
        count<4>();
        break;
    default:
        count<8>();
        break;
    }
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
4
```
### Witness
```in
1
```
