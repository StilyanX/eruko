# 9.34 Subnormals and flush to zero on the device
Part: subnormals and flush to zero on the device, `-ftz`
Clause: CUDA C++ Programming Guide, Floating-Point Standard (-ftz); PTX ISA, Floating-Point Instructions (.ftz: subnormal inputs and results flushed to sign-preserving zero); IEEE 754-2019 §3.4 (subnormal numbers)
After: 9.24, 9.33
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide and CUDA C++ Best Practices Guide (-ftz); PTX ISA, mul.f32 and fma.f32 (.ftz); IEEE 754-2019 §3.4

## Example
```cuda
#include <cstddef>
#include <cstring>
#include <cuda/std/span>
#include <print>

//: Multiply two normal floats whose product is below 2^-126.
__global__ void tiny(cuda::std::span<float> r)
{
    r[0] = r[0] * r[1];
}

int main()
{
    //: Take 2^-100 and 2^-30: the exact product is 2^-130.
    float* d {nullptr};
    cudaMallocManaged(&d, 2 * sizeof(float));
    d[0] = 0x1p-100f;
    d[1] = 0x1p-30f;
    //: Build with -ftz=false, the default: it keeps 2^-130.
    tiny<<<1, 1>>>({d, 2});
    cudaDeviceSynchronize();
    //: Read the bits: exponent 0 and fraction not 0: subnormal.
    unsigned bits {0};
    std::memcpy(&bits, d, sizeof(float));
    unsigned exponent {(bits >> 23) & 0xffu};
    std::println("{:a} exponent {}", d[0], exponent);
    //: Under -ftz=true the device would store 0 here instead.
    cudaFree(d);
}
```

## Verdict 1
Flags: -ftz=true
```cuda
#include <print>

__global__ void times(float a, float b, float* r)
{
    *r = a * b;
}

int main()
{
    float* d {nullptr};
    cudaMallocManaged(&d, sizeof(float));
    times<<<1, 1>>>(0x1p-100f, 0x1p-30f, d);
    cudaDeviceSynchronize();
    std::println("{:a}", *d);
    cudaFree(d);
}
```
Answer: defined

## Verdict 2
Flags: -ftz=true -fmad=true
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
    madd<<<1, 1>>>(0x1p-100f, 0x1p-30f, 0x1p-120f, d);
    cudaDeviceSynchronize();
    std::println("{:a}", *d);
    cudaFree(d);
}
```
Answer: unspecified
```out
1p-120
```
```out
1.004p-120
```

## Alone 1
Form: run
Flags: -ftz=false
Write a kernel that computes pᵢ = xᵢ × yᵢ in float for every i, one thread each, and gives what a build with -ftz=true gives: a subnormal input, or a subnormal result, becomes a zero of the same sign. The program is built with -ftz=false.
Input: n on the first line, then n lines, each with four whole numbers a, b, c and d: xᵢ = a × 2^b and yᵢ = c × 2^d, each made with std::ldexp on a float.
Output: n lines, pᵢ in order, each as std::format prints it with {:a}.
Limits: 1 ≤ n ≤ 1000; |a| and |c| are below 2^24; −170 ≤ b, d ≤ 30.
### Examples
```in
2
3 0 5 0
1 -100 1 -30
```
```out
1.ep+3
0p+0
```
```in
1
-3 -2 5 1
```
```out
-1.ep+2
```
### Reference
```cuda
#include <cfloat>
#include <cmath>
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__device__ float flush(float v)
{
    return fabsf(v) < FLT_MIN ? copysignf(0.0f, v) : v;
}

__global__ void times(cuda::std::span<const float> x,
                      cuda::std::span<const float> y,
                      cuda::std::span<float> p)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < p.size()) {
        p[i] = flush(flush(x[i]) * flush(y[i]));
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(3 * n, 0.0f);
    for (int i {0}; i < n; ++i) {
        int m {0};
        int e {0};
        int q {0};
        int f {0};
        std::cin >> m >> e >> q >> f;
        h[i] = std::ldexp(static_cast<float>(m), e);
        h[n + i] = std::ldexp(static_cast<float>(q), f);
    }
    std::size_t bytes {h.size() * sizeof(float)};
    float* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, h.data(), bytes, cudaMemcpyHostToDevice);
    std::size_t k {h.size() / 3};
    times<<<(n + 127) / 128, 128>>>({d, k}, {d + k, k},
                                    {d + 2 * k, k});
    cudaMemcpy(h.data(), d, bytes, cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int i {0}; i < n; ++i) {
        std::println("{:a}", h[2 * n + i]);
    }
}
```
### Wrong
```cuda
#include <cfloat>
#include <cmath>
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__device__ float flush(float v)
{
    return fabsf(v) < FLT_MIN ? copysignf(0.0f, v) : v;
}

__global__ void times(cuda::std::span<const float> x,
                      cuda::std::span<const float> y,
                      cuda::std::span<float> p)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < p.size()) {
        p[i] = flush(x[i] * y[i]);
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(3 * n, 0.0f);
    for (int i {0}; i < n; ++i) {
        int m {0};
        int e {0};
        int q {0};
        int f {0};
        std::cin >> m >> e >> q >> f;
        h[i] = std::ldexp(static_cast<float>(m), e);
        h[n + i] = std::ldexp(static_cast<float>(q), f);
    }
    std::size_t bytes {h.size() * sizeof(float)};
    float* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, h.data(), bytes, cudaMemcpyHostToDevice);
    std::size_t k {h.size() / 3};
    times<<<(n + 127) / 128, 128>>>({d, k}, {d + k, k},
                                    {d + 2 * k, k});
    cudaMemcpy(h.data(), d, bytes, cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int i {0}; i < n; ++i) {
        std::println("{:a}", h[2 * n + i]);
    }
}
```
### Tests
```in
4
1 -140 1 30
-1 -140 3 0
3 -70 5 -70
7 -127 1 0
```
```in
3
1 -149 1 30
-5 -100 -3 -20
8388607 -149 2 0
```
```in
1
0 0 0 0
```
### Witness
```in
1
1 -140 1 30
```

## Alone 2
Form: run
Flags: -ftz=true
Write a kernel that counts the subnormal numbers among n floats, one thread each. The program is built with -ftz=true, and the count must still be right.
Input: n on the first line, then n lines, each with two whole numbers a and b: the float is a × 2^b, made with std::ldexp on a float.
Output: one line, the count of subnormal floats.
Limits: 1 ≤ n ≤ 1000; |a| is below 2^24; −170 ≤ b ≤ 30.
### Examples
```in
3
1 0
0 0
-5 -3
```
```out
0
```
```in
2
1 -126
-1 -126
```
```out
0
```
### Reference
```cuda
#include <cfloat>
#include <cmath>
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void count(cuda::std::span<const float> x,
                      cuda::std::span<int> found)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < x.size()) {
        unsigned bits {__float_as_uint(x[i])};
        unsigned exponent {(bits >> 23) & 0xffu};
        unsigned fraction {bits & 0x7fffffu};
        if (exponent == 0 && fraction != 0) {
            atomicAdd(&found[0], 1);
        }
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(n, 0.0f);
    for (float& v : h) {
        int m {0};
        int e {0};
        std::cin >> m >> e;
        v = std::ldexp(static_cast<float>(m), e);
    }
    float* d {nullptr};
    cudaMalloc(&d, h.size() * sizeof(float));
    cudaMemcpy(d, h.data(), h.size() * sizeof(float),
               cudaMemcpyHostToDevice);
    int* c {nullptr};
    cudaMalloc(&c, sizeof(int));
    cudaMemset(c, 0, sizeof(int));
    std::size_t k {h.size()};
    count<<<(n + 127) / 128, 128>>>({d, k}, {c, 1});
    int found {0};
    cudaMemcpy(&found, c, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(c);
    cudaFree(d);
    std::println("{}", found);
}
```
### Wrong
```cuda
#include <cfloat>
#include <cmath>
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void count(cuda::std::span<const float> x,
                      cuda::std::span<int> found)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < x.size()) {
        float v {x[i]};
        if (v != 0.0f && fabsf(v) < FLT_MIN) {
            atomicAdd(&found[0], 1);
        }
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> h(n, 0.0f);
    for (float& v : h) {
        int m {0};
        int e {0};
        std::cin >> m >> e;
        v = std::ldexp(static_cast<float>(m), e);
    }
    float* d {nullptr};
    cudaMalloc(&d, h.size() * sizeof(float));
    cudaMemcpy(d, h.data(), h.size() * sizeof(float),
               cudaMemcpyHostToDevice);
    int* c {nullptr};
    cudaMalloc(&c, sizeof(int));
    cudaMemset(c, 0, sizeof(int));
    std::size_t k {h.size()};
    count<<<(n + 127) / 128, 128>>>({d, k}, {c, 1});
    int found {0};
    cudaMemcpy(&found, c, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(c);
    cudaFree(d);
    std::println("{}", found);
}
```
### Tests
```in
4
1 -127
1 -149
0 0
-3 -140
```
```in
1
8388607 -149
```
```in
1
0 0
```
```in
5
16777215 -150
1 -126
-1 -127
1 30
1 -170
```
### Witness
```in
1
1 -130
```
