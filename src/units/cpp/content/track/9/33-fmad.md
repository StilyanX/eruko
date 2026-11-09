# 9.33 The contraction of multiply and add on the device
Part: the contraction of multiply and add on the device, `-fmad`
Clause: CUDA C++ Programming Guide, Floating-Point Standard; Intrinsic Functions (__fmul_rn, __fmaf_rn); CUDA C++ Best Practices Guide, Fused Multiply-Add (-fmad)
After: 1.09, 9.32
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide and CUDA C++ Best Practices Guide; IEEE 754-2019 §5.4.1

## Example
```cuda
#include <print>

//: Compute a * b + c three ways in one thread.
__global__ void three(float a, float b, float c, float* r)
{
    //: Let nvcc choose; with -fmad=true it fuses into one FMA.
    r[0] = a * b + c;
    //: Round the product first: __fmul_rn is never fused.
    r[1] = __fmul_rn(a, b) + c;
    //: Round once, always: __fmaf_rn is one fused step.
    r[2] = __fmaf_rn(a, b, c);
}

int main()
{
    //: Run it on 0.1, 10 and -1, whose product rounds to 1.
    float* d {nullptr};
    cudaMallocManaged(&d, 3 * sizeof(float));
    three<<<1, 1>>>(0.1f, 10.0f, -1.0f, d);
    cudaDeviceSynchronize();
    //: Print the three results.
    std::println("{:a} {:a} {:a}", d[0], d[1], d[2]);
    cudaFree(d);
}
```

## Verdict 1
Flags: -fmad=true
```cuda
#include <print>

__global__ void madd(float a, float b, float c, float* r)
{
    *r = a * b + c;
}

int main()
{
    float* d {nullptr};
    cudaMallocManaged(&d, sizeof(float));
    madd<<<1, 1>>>(0.1f, 10.0f, -1.0f, d);
    cudaDeviceSynchronize();
    std::println("{:a}", *d);
    cudaFree(d);
}
```
Answer: unspecified
```out
1p-26
```
```out
0p+0
```

## Verdict 2
Flags: -fmad=true
```cuda
#include <print>

__global__ void madd(float a, float b, float c, float* r)
{
    *r = __fmul_rn(a, b) + c;
}

int main()
{
    float* d {nullptr};
    cudaMallocManaged(&d, sizeof(float));
    madd<<<1, 1>>>(0.1f, 10.0f, -1.0f, d);
    cudaDeviceSynchronize();
    std::println("{:a}", *d);
    cudaFree(d);
}
```
Answer: defined

## Alone 1
Form: run
Flags: -fmad=true
Write a kernel that computes cᵢ = aᵢ × bᵢ + cᵢ in float for every i, one thread each. Round the product to float, then round the sum, even though the program is built with -fmad=true.
Input: n on the first line, then n lines, each with aᵢ, bᵢ and cᵢ, read as floats.
Output: n lines, the new cᵢ in order, each as std::format prints it with {:a}.
Limits: 1 ≤ n ≤ 1000; each number is 0 or between 0.001 and 1000 in size; nvcc with -fmad=true.
### Examples
```in
2
1 2 3
0.5 4 1
```
```out
1.4p+2
1.8p+1
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void madd(cuda::std::span<const float> a,
                     cuda::std::span<const float> b,
                     cuda::std::span<float> c)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < c.size()) {
        c[i] = __fmul_rn(a[i], b[i]) + c[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(3 * n);
    for (int i {0}; i < n; ++i) {
        std::cin >> h[i] >> h[n + i] >> h[2 * n + i];
    }
    std::size_t bytes {h.size() * sizeof(float)};
    float* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, h.data(), bytes, cudaMemcpyHostToDevice);
    std::size_t m {h.size() / 3};
    madd<<<(n + 127) / 128, 128>>>({d, m}, {d + m, m},
                                   {d + 2 * m, m});
    cudaMemcpy(h.data(), d, bytes, cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int i {0}; i < n; ++i) {
        std::println("{:a}", h[2 * n + i]);
    }
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void madd(cuda::std::span<const float> a,
                     cuda::std::span<const float> b,
                     cuda::std::span<float> c)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < c.size()) {
        c[i] = a[i] * b[i] + c[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(3 * n);
    for (int i {0}; i < n; ++i) {
        std::cin >> h[i] >> h[n + i] >> h[2 * n + i];
    }
    std::size_t bytes {h.size() * sizeof(float)};
    float* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, h.data(), bytes, cudaMemcpyHostToDevice);
    std::size_t m {h.size() / 3};
    madd<<<(n + 127) / 128, 128>>>({d, m}, {d + m, m},
                                   {d + 2 * m, m});
    cudaMemcpy(h.data(), d, bytes, cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int i {0}; i < n; ++i) {
        std::println("{:a}", h[2 * n + i]);
    }
}
```
### Tests
```in
1
1.1 1.1 -1.21
```
```in
3
0.1 0.1 -0.01
3 0.1 -0.3
1000 1000 0.001
```
```in
2
0 5 -2
-7 0.25 1
```
### Witness
```in
1
0.1 10 -1
```

## Alone 2
Form: run
Flags: -fmad=false
Write a kernel that computes cᵢ = aᵢ × bᵢ + cᵢ in float for every i, one thread each. Round only once: give the exact aᵢ × bᵢ + cᵢ rounded to float, even though the program is built with -fmad=false.
Input: n on the first line, then n lines, each with aᵢ, bᵢ and cᵢ, read as floats.
Output: n lines, the new cᵢ in order, each as std::format prints it with {:a}.
Limits: 1 ≤ n ≤ 1000; each number is 0 or between 0.001 and 1000 in size; nvcc with -fmad=false.
### Examples
```in
2
1 2 3
0.5 4 1
```
```out
1.4p+2
1.8p+1
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void madd(cuda::std::span<const float> a,
                     cuda::std::span<const float> b,
                     cuda::std::span<float> c)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < c.size()) {
        c[i] = __fmaf_rn(a[i], b[i], c[i]);
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(3 * n);
    for (int i {0}; i < n; ++i) {
        std::cin >> h[i] >> h[n + i] >> h[2 * n + i];
    }
    std::size_t bytes {h.size() * sizeof(float)};
    float* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, h.data(), bytes, cudaMemcpyHostToDevice);
    std::size_t m {h.size() / 3};
    madd<<<(n + 127) / 128, 128>>>({d, m}, {d + m, m},
                                   {d + 2 * m, m});
    cudaMemcpy(h.data(), d, bytes, cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int i {0}; i < n; ++i) {
        std::println("{:a}", h[2 * n + i]);
    }
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void madd(cuda::std::span<const float> a,
                     cuda::std::span<const float> b,
                     cuda::std::span<float> c)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < c.size()) {
        c[i] = a[i] * b[i] + c[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(3 * n);
    for (int i {0}; i < n; ++i) {
        std::cin >> h[i] >> h[n + i] >> h[2 * n + i];
    }
    std::size_t bytes {h.size() * sizeof(float)};
    float* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, h.data(), bytes, cudaMemcpyHostToDevice);
    std::size_t m {h.size() / 3};
    madd<<<(n + 127) / 128, 128>>>({d, m}, {d + m, m},
                                   {d + 2 * m, m});
    cudaMemcpy(h.data(), d, bytes, cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int i {0}; i < n; ++i) {
        std::println("{:a}", h[2 * n + i]);
    }
}
```
### Tests
```in
1
0.1 10 -1
```
```in
3
0.1 0.1 -0.01
3 0.1 -0.3
1000 1000 0.001
```
```in
2
0 5 -2
-7 0.25 1
```
### Witness
```in
1
1.1 1.1 -1.21
```
