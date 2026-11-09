# 8.07 The spill bytes when `__launch_bounds__` caps the registers
Part: the spill bytes that appear when `__launch_bounds__` caps the registers below what the kernel takes
Clause: CUDA C++ Programming Guide §10.38, CUDA C++ Programming Guide §20.2
After: 8.05, 8.06
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §10.38 Launch Bounds

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Ask for blocks of 256, at least B on each multiprocessor.
template <int B>
__global__ void __launch_bounds__(256, B)
    hold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    //: Keep 48 values live, which takes more than 40 registers.
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[48] {};
    for (int j {0}; j < 48; ++j) {
        v[j] = a[t * 48 + j];
    }
    float s {0.0f};
    for (int j {0}; j < 48; ++j) {
        s += v[j] * v[47 - j];
    }
    out[t] = s;
}

int main()
{
    //: Read both; 6 blocks of 256 leave 40 registers each.
    cudaFuncAttributes one {};
    cudaFuncAttributes six {};
    cudaFuncGetAttributes(&one, hold<1>);
    cudaFuncGetAttributes(&six, hold<6>);
    //: Print registers and local bytes; the capped one spills.
    std::println("{} {}", one.numRegs, one.localSizeBytes);
    std::println("{} {}", six.numRegs, six.localSizeBytes);
}
```

## Verdict 1
```cuda
#include <print>

__global__ void __launch_bounds__(256) mark(unsigned* out)
{
    out[threadIdx.x] = threadIdx.x;
}

int main()
{
    unsigned* out {nullptr};
    cudaMalloc(&out, 128 * sizeof(unsigned));
    mark<<<1, 128>>>(out);
    unsigned last {0};
    cudaMemcpy(&last, out + 127, sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", last);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <print>

__global__ void __launch_bounds__(256, 6) __maxnreg__(40)
    mark(unsigned* out)
{
    out[threadIdx.x] = threadIdx.x;
}

int main()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, mark);
    std::println("{}", attr.numRegs);
}
```
Answer: c++23 ill-formed 4

## Alone 1
Form: run
Write a program with a kernel template `hold<B>(cuda::std::span<const float> a, cuda::std::span<float> out)`.
The thread with global index t copies a[48t + j] into v[j] of a float array v[48], for j from 0 to 47.
A second loop on j from 0 to 47 adds v[j] · v[47 − j] to a float s that starts at 0.0f; then the thread writes s to out[t].
Declare with `__launch_bounds__` that `hold<B>` runs in blocks of 256 threads, at least B blocks on each multiprocessor.
Read B and print the registers per thread and the local memory per thread of `hold<B>`, read with cudaFuncGetAttributes.
Input: one line, B.
Output: one line, the registers per thread and the local memory per thread in bytes, separated by a space.
Limits: 1 ≤ B ≤ 6.
### Examples
```in
1
```
```in
2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int B>
__global__ void __launch_bounds__(256, B)
    hold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[48] {};
    for (int j {0}; j < 48; ++j) {
        v[j] = a[t * 48 + j];
    }
    float s {0.0f};
    for (int j {0}; j < 48; ++j) {
        s += v[j] * v[47 - j];
    }
    out[t] = s;
}

template <int B>
cudaFuncAttributes attributes()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hold<B>);
    return attr;
}

int main()
{
    int b {1};
    std::cin >> b;
    cudaFuncAttributes attr {};
    switch (b) {
    case 1:
        attr = attributes<1>();
        break;
    case 2:
        attr = attributes<2>();
        break;
    case 3:
        attr = attributes<3>();
        break;
    case 4:
        attr = attributes<4>();
        break;
    case 5:
        attr = attributes<5>();
        break;
    case 6:
        attr = attributes<6>();
        break;
    }
    std::println("{} {}", attr.numRegs, attr.localSizeBytes);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int B>
__global__ void __launch_bounds__(256, 1)
    hold(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[48] {};
    for (int j {0}; j < 48; ++j) {
        v[j] = a[t * 48 + j];
    }
    float s {0.0f};
    for (int j {0}; j < 48; ++j) {
        s += v[j] * v[47 - j];
    }
    out[t] = s;
}

template <int B>
cudaFuncAttributes attributes()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hold<B>);
    return attr;
}

int main()
{
    int b {1};
    std::cin >> b;
    cudaFuncAttributes attr {};
    switch (b) {
    case 1:
        attr = attributes<1>();
        break;
    case 2:
        attr = attributes<2>();
        break;
    case 3:
        attr = attributes<3>();
        break;
    case 4:
        attr = attributes<4>();
        break;
    case 5:
        attr = attributes<5>();
        break;
    case 6:
        attr = attributes<6>();
        break;
    }
    std::println("{} {}", attr.numRegs, attr.localSizeBytes);
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
4
```
```in
5
```
```in
6
```
### Witness
```in
6
```

## Alone 2
Form: run
Write a program with a kernel template `wide<N>(cuda::std::span<const float> a, cuda::std::span<float> out)` that must run in blocks of N threads.
The thread with global index t copies a[64t + j] into v[j] of a float array v[64], for j from 0 to 63.
A second loop on j from 0 to 63 adds v[j] · v[63 − j] to a float s that starts at 0.0f; then the thread writes s to out[t].
Read N and launch `wide<N>` once on one block of N threads, with every value of a set to 0.
Then print the registers per thread and the local memory per thread of `wide<N>`, read with cudaFuncGetAttributes.
Input: one line, N.
Output: one line, the registers per thread and the local memory per thread in bytes, separated by a space.
Limits: N is 256, 512 or 1024.
### Examples
```in
256
```
```in
512
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int N>
__global__ void __launch_bounds__(N)
    wide(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[64] {};
    for (int j {0}; j < 64; ++j) {
        v[j] = a[t * 64 + j];
    }
    float s {0.0f};
    for (int j {0}; j < 64; ++j) {
        s += v[j] * v[63 - j];
    }
    out[t] = s;
}

template <int N>
cudaFuncAttributes run()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 64 * N * sizeof(float));
    cudaMalloc(&out, N * sizeof(float));
    cudaMemset(a, 0, 64 * N * sizeof(float));
    cuda::std::span<const float> in {a, 64 * N};
    wide<N><<<1, N>>>(in, cuda::std::span<float> {out, N});
    cudaDeviceSynchronize();
    cudaFree(a);
    cudaFree(out);
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, wide<N>);
    return attr;
}

int main()
{
    int n {256};
    std::cin >> n;
    cudaFuncAttributes attr {};
    switch (n) {
    case 256:
        attr = run<256>();
        break;
    case 512:
        attr = run<512>();
        break;
    case 1024:
        attr = run<1024>();
        break;
    }
    std::println("{} {}", attr.numRegs, attr.localSizeBytes);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int N>
__global__ void
    wide(cuda::std::span<const float> a,
         cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    float v[64] {};
    for (int j {0}; j < 64; ++j) {
        v[j] = a[t * 64 + j];
    }
    float s {0.0f};
    for (int j {0}; j < 64; ++j) {
        s += v[j] * v[63 - j];
    }
    out[t] = s;
}

template <int N>
cudaFuncAttributes run()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 64 * N * sizeof(float));
    cudaMalloc(&out, N * sizeof(float));
    cudaMemset(a, 0, 64 * N * sizeof(float));
    cuda::std::span<const float> in {a, 64 * N};
    wide<N><<<1, N>>>(in, cuda::std::span<float> {out, N});
    cudaDeviceSynchronize();
    cudaFree(a);
    cudaFree(out);
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, wide<N>);
    return attr;
}

int main()
{
    int n {256};
    std::cin >> n;
    cudaFuncAttributes attr {};
    switch (n) {
    case 256:
        attr = run<256>();
        break;
    case 512:
        attr = run<512>();
        break;
    case 1024:
        attr = run<1024>();
        break;
    }
    std::println("{} {}", attr.numRegs, attr.localSizeBytes);
}
```
### Tests
```in
256
```
```in
512
```
```in
1024
```
### Witness
```in
1024
```
