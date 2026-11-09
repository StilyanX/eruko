# 8.52 Library functions a device function may call
Part: which library functions a device function may call, with and without `--expt-relaxed-constexpr`
Clause: CUDA C++ Programming Guide: Constexpr Functions and Function Templates, CUDA C++ Programming Guide: Mathematical Functions, CUDA C++ Programming Guide: Function Execution Space Specifiers, NVCC: --expt-relaxed-constexpr, libcu++ cuda::std, [alg.clamp], [alg.min.max]
After: 8.51
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Constexpr Functions and Mathematical Functions; libcu++

## Example
```cuda
#include <cmath>
#include <print>
#include <vector>
#include <cuda/std/algorithm>
#include <cuda/std/span>

__global__ void shape(cuda::std::span<float> v)
{
    unsigned i {threadIdx.x};
    //: Call the maths functions: CUDA gives each a device version.
    float r {std::sqrt(std::fmax(v[i], 0.0f))};
    //: Take the rest from cuda::std, whose functions run on the device.
    v[i] = cuda::std::clamp(r, 0.5f, 2.0f);
}

int main()
{
    //: Leave std::clamp out: a device call to it needs a flag.
    std::vector<float> h {-1.0f, 0.36f, 9.0f};
    float* d {nullptr};
    cudaMalloc(&d, 3 * sizeof(float));
    cudaMemcpy(d, h.data(), 3 * sizeof(float),
               cudaMemcpyHostToDevice);
    shape<<<1, 3>>>({d, 3});
    cudaMemcpy(h.data(), d, 3 * sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {} {}", h[0], h[1], h[2]);
}
```

## Verdict 1
```cuda
#include <algorithm>
#include <cstdio>
#include <vector>
#include <cuda/std/span>

__global__ void shape(cuda::std::span<float> v)
{
    unsigned i {threadIdx.x};
    v[i] = std::clamp(v[i], 0.5f, 2.0f);
}

int main()
{
    std::vector<float> h {-1.0f, 0.75f, 9.0f};
    float* d {nullptr};
    cudaMalloc(&d, 3 * sizeof(float));
    cudaMemcpy(d, h.data(), 3 * sizeof(float),
               cudaMemcpyHostToDevice);
    shape<<<1, 3>>>({d, 3});
    cudaMemcpy(h.data(), d, 3 * sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::printf("%g %g %g\n", h[0], h[1], h[2]);
}
```
Answer: c++23 ill-formed 9

## Verdict 2
```cuda
#include <algorithm>
#include <cstdio>
#include <vector>
#include <cuda/std/span>

__global__ void shape(cuda::std::span<float> v)
{
    unsigned i {threadIdx.x};
    v[i] = std::clamp(v[i], 0.5f, 2.0f);
}

int main()
{
    std::vector<float> h {-1.0f, 0.75f, 9.0f};
    float* d {nullptr};
    cudaMalloc(&d, 3 * sizeof(float));
    cudaMemcpy(d, h.data(), 3 * sizeof(float),
               cudaMemcpyHostToDevice);
    shape<<<1, 3>>>({d, 3});
    cudaMemcpy(h.data(), d, 3 * sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::printf("%g %g %g\n", h[0], h[1], h[2]);
}
```
Answer: c++23 defined
Flags: --expt-relaxed-constexpr

## Alone 1
Form: flag
Write a program with a kernel `limit(cuda::std::span<float> v, float lo, float hi)` in which thread i sets v[i] to the nearest value to v[i] from lo to hi. Its main launches `limit` on 4 floats.
Input: none.
Output: none.
Limits: nvcc at c++23 with no flag added; lo ≤ hi.
Expect:
- c++23: accept
### Reference
```cuda
#include <algorithm>
#include <cmath>
#include <cuda/std/span>

__global__ void limit(cuda::std::span<float> v, float lo,
                      float hi)
{
    unsigned i {threadIdx.x};
    v[i] = std::fmin(std::fmax(v[i], lo), hi);
}

int main()
{
    float* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(float));
    cudaMemset(d, 0, 4 * sizeof(float));
    limit<<<1, 4>>>({d, 4}, -1.0f, 1.0f);
    cudaFree(d);
}
```
### Wrong
```cuda
#include <algorithm>
#include <cmath>
#include <cuda/std/span>

__global__ void limit(cuda::std::span<float> v, float lo,
                      float hi)
{
    unsigned i {threadIdx.x};
    v[i] = std::clamp(v[i], lo, hi);
}

int main()
{
    float* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(float));
    cudaMemset(d, 0, 4 * sizeof(float));
    limit<<<1, 4>>>({d, 4}, -1.0f, 1.0f);
    cudaFree(d);
}
```
### Witness
```cuda
__global__ void floor_at(cuda::std::span<float> v, float lo)
{
    v[threadIdx.x] = std::fmax(v[threadIdx.x], lo);
}
```

## Alone 2
Form: flag
Flags: --expt-relaxed-constexpr
Write a program with a kernel `length(cuda::std::span<const float3> p, cuda::std::span<float> out, float low)` in which thread i writes to out[i] the length of the vector p[i], or low when the length is smaller than low. Take the larger of the two with `std::max`. Its main launches `length` on 4 vectors.
Input: none.
Output: none.
Limits: nvcc at c++23 with the flag --expt-relaxed-constexpr.
Expect:
- c++23: accept
### Reference
```cuda
#include <algorithm>
#include <cmath>
#include <cuda/std/span>

__global__ void length(cuda::std::span<const float3> p,
                       cuda::std::span<float> out, float low)
{
    unsigned i {threadIdx.x};
    float3 q {p[i]};
    float r {std::sqrt(q.x * q.x + q.y * q.y + q.z * q.z)};
    out[i] = std::max(r, low);
}

int main()
{
    float3* p {nullptr};
    float* out {nullptr};
    cudaMalloc(&p, 4 * sizeof(float3));
    cudaMalloc(&out, 4 * sizeof(float));
    cudaMemset(p, 0, 4 * sizeof(float3));
    length<<<1, 4>>>({p, 4}, {out, 4}, 0.5f);
    cudaFree(p);
    cudaFree(out);
}
```
### Wrong
```cuda
#include <algorithm>
#include <cmath>
#include <cuda/std/span>

__global__ void length(cuda::std::span<const float3> p,
                       cuda::std::span<float> out, float low)
{
    unsigned i {threadIdx.x};
    float3 q {p[i]};
    float r {std::hypot(q.x, q.y, q.z)};
    out[i] = std::max(r, low);
}

int main()
{
    float3* p {nullptr};
    float* out {nullptr};
    cudaMalloc(&p, 4 * sizeof(float3));
    cudaMalloc(&out, 4 * sizeof(float));
    cudaMemset(p, 0, 4 * sizeof(float3));
    length<<<1, 4>>>({p, 4}, {out, 4}, 0.5f);
    cudaFree(p);
    cudaFree(out);
}
```
### Witness
```cuda
__global__ void bigger(cuda::std::span<float> v, float low)
{
    v[threadIdx.x] = std::max(v[threadIdx.x], low);
}
```
