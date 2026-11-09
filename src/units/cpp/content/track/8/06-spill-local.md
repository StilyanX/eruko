# 8.06 The local memory a kernel takes for a spill
Part: the local memory a kernel takes for a spill
Clause: CUDA C++ Programming Guide §8.3.2, CUDA C++ Programming Guide §10.39
After: 8.05
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §8.3.2 Device Memory Accesses

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Cap the kernel at 32 registers and keep K values live.
template <int K>
__global__ void __maxnreg__(32)
    hold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[K] {};
    for (int j {0}; j < K; ++j) {
        v[j] = a[t * K + j];
    }
    float s {0.0f};
    for (int j {0}; j < K; ++j) {
        s += v[j] * v[K - 1 - j];
    }
    out[t] = s;
}

//: Keep the loop rolled, so only a few values live at once.
__global__ void __maxnreg__(32)
    roll(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float s {0.0f};
#pragma unroll 1
    for (int j {0}; j < 32; ++j) {
        s += a[t * 32 + j] * a[t * 32 + 31 - j];
    }
    out[t] = s;
}

int main()
{
    //: Read the local memory per thread of each kernel.
    cudaFuncAttributes few {};
    cudaFuncAttributes many {};
    cudaFuncAttributes loop {};
    cudaFuncGetAttributes(&few, hold<16>);
    cudaFuncGetAttributes(&many, hold<32>);
    cudaFuncGetAttributes(&loop, roll);
    //: Print them; only the spilling kernel takes local memory.
    std::println("{} {} {}", few.localSizeBytes,
                 many.localSizeBytes, loop.localSizeBytes);
}
```

## Verdict 1
```cuda
#include <print>
#include <vector>

__global__ void __maxnreg__(32) hold(const float* a, float* out)
{
    float v[32] {};
    for (int j {0}; j < 32; ++j) {
        v[j] = a[j];
    }
    float s {0.0f};
    for (int j {0}; j < 32; ++j) {
        s += v[j] * v[31 - j];
    }
    out[0] = s;
}

int main()
{
    std::vector<float> host(32);
    for (int j {0}; j < 32; ++j) {
        host[j] = j;
    }
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 32 * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(a, host.data(), 32 * sizeof(float),
               cudaMemcpyHostToDevice);
    hold<<<1, 1>>>(a, out);
    float s {0.0f};
    cudaMemcpy(&s, out, sizeof(float), cudaMemcpyDeviceToHost);
    cudaFree(a);
    cudaFree(out);
    std::println("{}", s);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <print>

__device__ __maxnreg__(32) float pair(const float* v, int j)
{
    return v[j] * v[31 - j];
}

__global__ void hold(const float* a, float* out)
{
    float s {0.0f};
    for (int j {0}; j < 32; ++j) {
        s += pair(a, j);
    }
    out[0] = s;
}

int main()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hold);
    std::println("{}", attr.localSizeBytes);
}
```
Answer: c++23 ill-formed 3

## Alone 1
Form: run
Write a program with a kernel template `hold<K>(cuda::std::span<const float> a, cuda::std::span<float> out)` marked `__maxnreg__(32)`.
The thread with global index t copies a[t · K + j] into v[j] of a float array v[K], for j from 0 to K − 1.
A second loop on j from 0 to K − 1 adds v[j] · v[K − 1 − j] to a float s that starts at 0.0f; then the thread writes s to out[t].
Read K and print the local memory per thread of `hold<K>`, in bytes, read with cudaFuncGetAttributes.
Input: one line, K.
Output: one line, the local memory per thread of `hold<K>` in bytes.
Limits: K is 8, 16 or 32.
### Examples
```in
16
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int K>
__global__ void __maxnreg__(32)
    hold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[K] {};
    for (int j {0}; j < K; ++j) {
        v[j] = a[t * K + j];
    }
    float s {0.0f};
    for (int j {0}; j < K; ++j) {
        s += v[j] * v[K - 1 - j];
    }
    out[t] = s;
}

template <int K>
std::size_t local()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hold<K>);
    return attr.localSizeBytes;
}

int main()
{
    int k {8};
    std::cin >> k;
    std::size_t bytes {0};
    switch (k) {
    case 8:
        bytes = local<8>();
        break;
    case 16:
        bytes = local<16>();
        break;
    case 32:
        bytes = local<32>();
        break;
    }
    std::println("{}", bytes);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int K>
__global__ void __maxnreg__(32)
    hold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[K] {};
    for (int j {0}; j < K; ++j) {
        v[j] = a[t * K + j];
    }
    float s {0.0f};
    for (int j {0}; j < K; ++j) {
        s += v[j] * v[K - 1 - j];
    }
    out[t] = s;
}

template <int K>
std::size_t local()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hold<K>);
    return attr.sharedSizeBytes;
}

int main()
{
    int k {8};
    std::cin >> k;
    std::size_t bytes {0};
    switch (k) {
    case 8:
        bytes = local<8>();
        break;
    case 16:
        bytes = local<16>();
        break;
    case 32:
        bytes = local<32>();
        break;
    }
    std::println("{}", bytes);
}
```
### Tests
```in
8
```
```in
32
```
### Witness
```in
32
```

## Alone 2
Form: run
Write a program with a kernel template `fold<K>(cuda::std::span<const float> a, cuda::std::span<float> out)` marked `__maxnreg__(32)`.
The thread with global index t adds a[t · K + j] · a[t · K + K − 1 − j], for j from 0 to K − 1 in order, to a float s that starts at 0.0f, and writes s to out[t].
The kernel must take no local memory for a spill at any K. Read K and print the local memory per thread of `fold<K>`, read with cudaFuncGetAttributes.
Input: one line, K.
Output: one line, the local memory per thread of `fold<K>` in bytes.
Limits: K is 8, 16, 32 or 64.
### Examples
```in
8
```
```in
16
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int K>
__global__ void __maxnreg__(32)
    fold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float s {0.0f};
#pragma unroll 1
    for (int j {0}; j < K; ++j) {
        s += a[t * K + j] * a[t * K + K - 1 - j];
    }
    out[t] = s;
}

template <int K>
std::size_t local()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, fold<K>);
    return attr.localSizeBytes;
}

int main()
{
    int k {8};
    std::cin >> k;
    std::size_t bytes {0};
    switch (k) {
    case 8:
        bytes = local<8>();
        break;
    case 16:
        bytes = local<16>();
        break;
    case 32:
        bytes = local<32>();
        break;
    case 64:
        bytes = local<64>();
        break;
    }
    std::println("{}", bytes);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int K>
__global__ void __maxnreg__(32)
    fold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float s {0.0f};
    for (int j {0}; j < K; ++j) {
        s += a[t * K + j] * a[t * K + K - 1 - j];
    }
    out[t] = s;
}

template <int K>
std::size_t local()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, fold<K>);
    return attr.localSizeBytes;
}

int main()
{
    int k {8};
    std::cin >> k;
    std::size_t bytes {0};
    switch (k) {
    case 8:
        bytes = local<8>();
        break;
    case 16:
        bytes = local<16>();
        break;
    case 32:
        bytes = local<32>();
        break;
    case 64:
        bytes = local<64>();
        break;
    }
    std::println("{}", bytes);
}
```
### Tests
```in
8
```
```in
16
```
```in
32
```
```in
64
```
### Witness
```in
64
```
