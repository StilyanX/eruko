# 9.03 A reduction by warp shuffles
Part: a reduction by warp shuffles
Clause: CUDA C++ Programming Guide §7.22 Warp shuffle functions, PMPP 5th ed. §10.7 Reducing synchronization overhead with warp-level primitives, PMPP 5th ed. §10.8 Further reducing synchronization overhead with two-stage warp-wide reduction
After: 9.01
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §7.22; Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 10, §10.7 and §10.8

## Example
```cuda
#include <cuda/std/span>
#include <print>

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    //: Give each lane of the warp one value.
    float v {x[threadIdx.x]};
    //: Add the value of lane + d, for d = 16, 8, 4, 2, 1.
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    //: Keep lane 0's value, which holds the sum.
    if (threadIdx.x == 0) {
        out[0] = v;
    }
}

int main()
{
    //: Fill 32 floats: 1e8, fifteen 1s, -1e8, fifteen 1s.
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (int i {0}; i < 32; ++i) {
        x[i] = i == 0 ? 1e8f : i == 16 ? -1e8f : 1.0f;
    }
    //: Run one warp; lane 0 adds 1e8 to -1e8 first.
    sum<<<1, 32>>>({x, 32}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    float v {x[threadIdx.x]};
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    if (threadIdx.x == 0) {
        out[0] = v;
    }
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (int i {0}; i < 32; ++i) {
        x[i] = i % 2 == 0 ? 0.5f : 1e8f;
    }
    sum<<<1, 32>>>({x, 32}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
Answer: c++23 defined

## Verdict 2
Sanitizer: racecheck
```cuda
#include <cuda/std/span>
#include <print>

__device__ float warp_sum(float v)
{
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    return v;
}

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    __shared__ float s[2];
    unsigned t {threadIdx.x};
    float v {warp_sum(x[t])};
    if (t % 32 == 0) {
        s[t / 32] = v;
    }
    if (t == 0) {
        out[0] = s[0] + s[1];
    }
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 64 * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (int i {0}; i < 64; ++i) {
        x[i] = 1.0f;
    }
    sum<<<1, 64>>>({x, 64}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
Answer: c++23 undefined sanitizer

## Alone 1
Form: run
Write a program that reads 32 numbers and prints their sum, added as floats by one warp of 32 threads on the device. Lane i starts with number i. For d = 16, then 8, 4, 2 and 1, each lane adds the value lane i + d holds before that step. The sum is lane 0's value. This fixes the order of the additions, so the float sum is exact text.
Input: one line of 32 integers, each read into a float.
Output: one line, the sum printed with no digits after the point, as std::println("{:.0f}", sum) prints it.
Limits: each integer is between -1000000000 and 1000000000.
### Examples
```in
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
```
```out
528
```
```in
-1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0 1 -1 0
```
```out
-1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    float v {x[threadIdx.x]};
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    if (threadIdx.x == 0) {
        out[0] = v;
    }
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (int i {0}; i < 32; ++i) {
        std::cin >> x[i];
    }
    sum<<<1, 32>>>({x, 32}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    float v {x[threadIdx.x]};
    for (int d {1}; d < 32; d *= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    if (threadIdx.x == 0) {
        out[0] = v;
    }
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (int i {0}; i < 32; ++i) {
        std::cin >> x[i];
    }
    sum<<<1, 32>>>({x, 32}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
### Tests
```in
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```
```in
1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000 1000000000 -1000000000
```
```in
100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
```in
100000000 3 3 3 -100000000 3 3 3 100000000 3 3 3 -100000000 3 3 3 100000000 3 3 3 -100000000 3 3 3 100000000 3 3 3 -100000000 3 3 3
```
### Witness
```in
100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

## Alone 2
Form: run
Write a program that reads n numbers and prints their sum, added as floats by one block of n threads on the device. Thread t starts with number t. First each warp sums its 32 values: for d = 16, 8, 4, 2, 1, lane i adds the value lane i + d holds before that step. Lane 0 of warp w keeps the warp's sum as value w. Then warp 0 sums the warp sums the same way: lane i starts with value i, or 0 when there is no warp i. The sum is lane 0's value.
Input: one line, n, then one line of n integers, each read into a float.
Output: one line, the sum printed with no digits after the point, as std::println("{:.0f}", sum) prints it.
Limits: n is a multiple of 32, 32 ≤ n ≤ 1024; each integer is between -1000000000 and 1000000000.
### Examples
```in
64
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63
```
```out
2016
```
```in
96
-3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1 2 3 -3 -2 -1 0 1
```
```out
-5
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__device__ float warp_sum(float v)
{
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    return v;
}

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    __shared__ float s[32];
    unsigned t {threadIdx.x};
    float v {warp_sum(x[t])};
    if (t % 32 == 0) {
        s[t / 32] = v;
    }
    __syncthreads();
    if (t < 32) {
        v = warp_sum(t < blockDim.x / 32 ? s[t] : 0.0f);
        if (t == 0) {
            out[0] = v;
        }
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, n * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (unsigned i {0}; i < n; ++i) {
        std::cin >> x[i];
    }
    sum<<<1, n>>>({x, n}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__device__ float warp_sum(float v)
{
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    return v;
}

__global__ void sum(cuda::std::span<const float> x,
                    cuda::std::span<float> out)
{
    __shared__ float s[32];
    unsigned t {threadIdx.x};
    float v {warp_sum(x[t])};
    if (t % 32 == 0) {
        s[t / 32] = v;
    }
    __syncthreads();
    if (t == 0) {
        float total {0.0f};
        for (unsigned w {0}; w < blockDim.x / 32; ++w) {
            total += s[w];
        }
        out[0] = total;
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, n * sizeof(float));
    cudaMallocManaged(&out, sizeof(float));
    for (unsigned i {0}; i < n; ++i) {
        std::cin >> x[i];
    }
    sum<<<1, n>>>({x, n}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{:.0f}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
### Tests
```in
32
-16 -15 -14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
```
```in
1024
100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1
```
```in
128
100000000 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -100000000 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```
```in
256
100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
### Witness
```in
128
100000000 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -100000000 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```
