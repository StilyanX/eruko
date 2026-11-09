# 8.48 A compare-and-swap loop that keeps the largest absolute value
Part: a compare-and-swap loop that makes a floating-point maximum of absolute values
Clause: CUDA C++ Programming Guide §10.14 Atomic Functions, CUDA C++ Programming Guide: atomicCAS(), libcu++ cuda::atomic_ref, [atomics.ref.ops], [intro.races]
After: 8.46
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §10.14 Atomic Functions; libcu++ cuda::atomic_ref

## Example
```cuda
#include <print>
#include <vector>
#include <cuda/atomic>
#include <cuda/std/cmath>
#include <cuda/std/span>

using Ref = cuda::atomic_ref<float, cuda::thread_scope_device>;

//: Let each thread fold the size of its float into one largest.
__global__ void largest(cuda::std::span<const float> v,
                        cuda::std::span<float> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i >= v.size()) {
        return;
    }
    float a {cuda::std::fabs(v[i])};
    Ref m {out[0]};
    //: Read the largest so far.
    float seen {m.load(cuda::memory_order_relaxed)};
    //: Swap a in while it is larger; a failed swap reloads seen.
    while (seen < a && !m.compare_exchange_weak(seen, a,
               cuda::memory_order_relaxed)) {
    }
}

int main()
{
    //: Make 300 floats whose largest size belongs to a negative.
    std::vector<float> h(300);
    for (int i {0}; i < 300; ++i) {
        h[i] = static_cast<float>(i % 17) - 8.5f;
    }
    h[123] = -40.25f;
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, 300 * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), 300 * sizeof(float),
               cudaMemcpyHostToDevice);
    //: Start the largest at 0, which every size reaches.
    cudaMemset(out, 0, sizeof(float));
    largest<<<2, 256>>>(cuda::std::span<const float> {v, 300},
                        cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```

## Verdict 1
```cuda
#include <print>
#include <vector>
#include <cuda/atomic>
#include <cuda/std/cmath>
#include <cuda/std/span>

using Ref = cuda::atomic_ref<float, cuda::thread_scope_device>;

__global__ void largest(cuda::std::span<const float> v,
                        cuda::std::span<float> out)
{
    float a {cuda::std::fabs(v[threadIdx.x])};
    Ref m {out[0]};
    float seen {m.load(cuda::memory_order_relaxed)};
    while (seen < a && !m.compare_exchange_weak(seen, a,
               cuda::memory_order_relaxed)) {
    }
}

int main()
{
    std::vector<float> h(64);
    for (int i {0}; i < 64; ++i) {
        h[i] = static_cast<float>(i) * -0.5f;
    }
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, 64 * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), 64 * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(out, 0, sizeof(float));
    largest<<<1, 64>>>(cuda::std::span<const float> {v, 64},
                       cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <print>
#include <vector>
#include <cuda/std/cmath>
#include <cuda/std/span>

__global__ void largest(cuda::std::span<const float> v,
                        cuda::std::span<float> out)
{
    float a {cuda::std::fabs(v[threadIdx.x])};
    if (out[0] < a) {
        out[0] = a;
    }
}

int main()
{
    std::vector<float> h(64);
    for (int i {0}; i < 64; ++i) {
        h[i] = static_cast<float>(i) * -0.5f;
    }
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, 64 * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), 64 * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(out, 0, sizeof(float));
    largest<<<1, 64>>>(cuda::std::span<const float> {v, 64},
                       cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```
Answer: c++23 undefined stored
Derivation 1: [intro.races]/21, which the CUDA C++ memory model keeps for device threads: the 64 threads read out[0] and some write it with no atomic and no happens-before between them, so the conflicting accesses are a data race and the behaviour is undefined.
Derivation 2: the CUDA C++ Programming Guide's memory model calls two accesses to one location a data race when one is a write, one is not atomic at a scope that holds the other thread, and neither happens before the other; the plain read and write of out[0] in each thread are such a pair, and a data race is undefined behaviour.

## Alone 1
Form: run
Write a program that reads n floats and prints the largest absolute value among them.
⌈n/256⌉ blocks of 256 threads do the work, thread i taking float i, and each thread updates one float in global memory.
Input: the first line holds n; the second line holds the n floats.
Output: one line, the largest absolute value, written as std::println writes a float with {}.
Limits: 1 ≤ n ≤ 512; each float x has |x| ≤ 10⁹.
### Examples
```in
4
1.5 -2 3 0.25
```
```out
3
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/atomic>
#include <cuda/std/cmath>
#include <cuda/std/span>

using Ref = cuda::atomic_ref<float, cuda::thread_scope_device>;

__global__ void largest(cuda::std::span<const float> v,
                        cuda::std::span<float> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i >= v.size()) {
        return;
    }
    float a {cuda::std::fabs(v[i])};
    Ref m {out[0]};
    float seen {m.load(cuda::memory_order_relaxed)};
    while (seen < a && !m.compare_exchange_weak(seen, a,
               cuda::memory_order_relaxed)) {
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<float> h(n);
    for (float& x : h) {
        std::cin >> x;
    }
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, n * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(out, 0, sizeof(float));
    largest<<<(n + 255) / 256, 256>>>(
        cuda::std::span<const float> {v, n},
        cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/atomic>
#include <cuda/std/cmath>
#include <cuda/std/span>

using Ref = cuda::atomic_ref<float, cuda::thread_scope_device>;

__global__ void largest(cuda::std::span<const float> v,
                        cuda::std::span<float> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i >= v.size()) {
        return;
    }
    float a {v[i]};
    Ref m {out[0]};
    float seen {m.load(cuda::memory_order_relaxed)};
    while (seen < a && !m.compare_exchange_weak(seen, a,
               cuda::memory_order_relaxed)) {
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<float> h(n);
    for (float& x : h) {
        std::cin >> x;
    }
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, n * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(out, 0, sizeof(float));
    largest<<<(n + 255) / 256, 256>>>(
        cuda::std::span<const float> {v, n},
        cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```
### Tests
```in
1
-3.5
```
```in
1
0
```
```in
5
-1000000000 5 -2 7 1
```
```in
6
-0.5 -0.25 -0.125 -2 -1 -4
```
```in
3
0.1 -0.3 0.2
```
```in
512
-125 -115.75 -106.5 -97.25 -88 -78.75 -69.5 -60.25 -51 -41.75 -32.5 -23.25 -14 -4.75 4.5 13.75 23 32.25 41.5 50.75 60 69.25 78.5 87.75 97 106.25 115.5 124.75 -116.25 -107 -97.75 -88.5 -79.25 -70 -60.75 -51.5 -42.25 -33 -23.75 -14.5 -5.25 4 13.25 22.5 31.75 41 50.25 59.5 68.75 78 87.25 96.5 105.75 115 124.25 -116.75 -107.5 -98.25 -89 -79.75 -70.5 -61.25 -52 -42.75 -33.5 -24.25 -15 -5.75 3.5 12.75 22 31.25 40.5 49.75 59 68.25 77.5 86.75 96 105.25 114.5 123.75 -117.25 -108 -98.75 -89.5 -80.25 -71 -61.75 -52.5 -43.25 -34 -24.75 -15.5 -6.25 3 12.25 21.5 30.75 40 49.25 58.5 67.75 77 86.25 95.5 104.75 114 123.25 -117.75 -108.5 -99.25 -90 -80.75 -71.5 -62.25 -53 -43.75 -34.5 -25.25 -16 -6.75 2.5 11.75 21 30.25 39.5 48.75 58 67.25 76.5 85.75 95 104.25 113.5 122.75 -118.25 -109 -99.75 -90.5 -81.25 -72 -62.75 -53.5 -44.25 -35 -25.75 -16.5 -7.25 2 11.25 20.5 29.75 39 48.25 57.5 66.75 76 85.25 94.5 103.75 113 122.25 -118.75 -109.5 -100.25 -91 -81.75 -72.5 -63.25 -54 -44.75 -35.5 -26.25 -17 -7.75 1.5 10.75 20 29.25 38.5 47.75 57 66.25 75.5 84.75 94 103.25 112.5 121.75 -119.25 -110 -100.75 -91.5 -82.25 -73 -63.75 -54.5 -45.25 -36 -26.75 -17.5 -8.25 1 10.25 19.5 28.75 38 47.25 56.5 65.75 75 84.25 93.5 102.75 112 121.25 -119.75 -110.5 -101.25 -92 -82.75 -73.5 -64.25 -55 -45.75 -36.5 -27.25 -18 -8.75 0.5 9.75 19 28.25 37.5 46.75 56 65.25 74.5 83.75 93 102.25 111.5 120.75 -120.25 -111 -101.75 -92.5 -83.25 -74 -64.75 -55.5 -46.25 -37 -27.75 -18.5 -9.25 0 9.25 18.5 27.75 37 46.25 55.5 64.75 74 83.25 92.5 101.75 111 120.25 -120.75 -111.5 -102.25 -93 -83.75 -74.5 -65.25 -56 -46.75 -37.5 -28.25 -19 -9.75 -0.5 8.75 18 27.25 36.5 45.75 55 64.25 73.5 82.75 92 101.25 110.5 119.75 -121.25 -112 -102.75 -93.5 -84.25 -75 -65.75 -56.5 -47.25 -38 -28.75 -19.5 -10.25 -1 8.25 17.5 26.75 36 45.25 54.5 63.75 73 82.25 91.5 100.75 110 119.25 -121.75 -112.5 -103.25 -94 -84.75 -75.5 -66.25 -57 -47.75 -38.5 -29.25 -20 -10.75 -1.5 7.75 17 26.25 35.5 44.75 54 63.25 72.5 81.75 91 100.25 109.5 118.75 -122.25 -113 -103.75 -94.5 -85.25 -76 -66.75 -57.5 -48.25 -39 -29.75 -20.5 -11.25 -2 7.25 16.5 25.75 35 44.25 53.5 62.75 72 81.25 90.5 99.75 109 118.25 -122.75 -113.5 -104.25 -95 -85.75 -76.5 -67.25 -58 -48.75 -39.5 -30.25 -21 -11.75 -2.5 6.75 16 25.25 34.5 43.75 53 62.25 71.5 80.75 90 99.25 108.5 117.75 -123.25 -114 -104.75 -95.5 -86.25 -77 -67.75 -58.5 -49.25 -40 -30.75 -21.5 -12.25 -3 6.25 15.5 24.75 34 43.25 52.5 61.75 71 80.25 89.5 98.75 108 117.25 -123.75 -114.5 -105.25 -96 -86.75 -77.5 -68.25 -59 -49.75 -40.5 -31.25 -22 -12.75 -3.5 5.75 15 24.25 33.5 42.75 52 61.25 70.5 79.75 89 98.25 107.5 116.75 -124.25 -115 -105.75 -96.5 -87.25 -78 -68.75 -59.5 -50.25 -41 -31.75 -22.5 -13.25 -4 5.25 14.5 23.75 33 42.25 51.5 60.75 70 79.25 88.5 97.75 107 116.25 -124.75 -115.5 -106.25 -97 -87.75 -78.5 -69.25 -60 -50.75 -41.5 -32.25 -23 -13.75 -4.5 4.75 14 23.25 32.5 41.75 51 60.25 69.5 78.75 88 97.25
```
### Witness
```in
3
1 -7.5 2
```

## Alone 2
Form: run
Write a program that reads n floats and prints the one whose absolute value is largest, with its sign.
When a float and its negative tie for the largest, print the positive one.
⌈n/256⌉ blocks of 256 threads do the work, thread i taking float i, and each thread updates one float in global memory.
Input: the first line holds n; the second line holds the n floats.
Output: one line, that float, written as std::println writes a float with {}.
Limits: 1 ≤ n ≤ 512; each float x has |x| ≤ 10⁹.
### Examples
```in
3
1 4 2
```
```out
4
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/atomic>
#include <cuda/std/cmath>
#include <cuda/std/span>

using Ref = cuda::atomic_ref<float, cuda::thread_scope_device>;

__device__ bool beats(float x, float y)
{
    float ax {cuda::std::fabs(x)};
    float ay {cuda::std::fabs(y)};
    return ax > ay || (ax == ay && x > y);
}

__global__ void widest(cuda::std::span<const float> v,
                       cuda::std::span<float> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i >= v.size()) {
        return;
    }
    float x {v[i]};
    Ref m {out[0]};
    float seen {m.load(cuda::memory_order_relaxed)};
    while (beats(x, seen) && !m.compare_exchange_weak(seen, x,
               cuda::memory_order_relaxed)) {
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<float> h(n);
    for (float& x : h) {
        std::cin >> x;
    }
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, n * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(out, 0, sizeof(float));
    widest<<<(n + 255) / 256, 256>>>(
        cuda::std::span<const float> {v, n},
        cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/atomic>
#include <cuda/std/cmath>
#include <cuda/std/span>

using Ref = cuda::atomic_ref<float, cuda::thread_scope_device>;

__device__ bool beats(float x, float y)
{
    float ax {cuda::std::fabs(x)};
    float ay {cuda::std::fabs(y)};
    return ax > ay || (ax == ay && x > y);
}

__global__ void widest(cuda::std::span<const float> v,
                       cuda::std::span<float> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i >= v.size()) {
        return;
    }
    float x {v[i]};
    Ref m {out[0]};
    float seen {m.load(cuda::memory_order_relaxed)};
    while (x > seen && !m.compare_exchange_weak(seen, x,
               cuda::memory_order_relaxed)) {
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    std::vector<float> h(n);
    for (float& x : h) {
        std::cin >> x;
    }
    float* v {nullptr};
    float* out {nullptr};
    cudaMalloc(&v, n * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(v, h.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(out, 0, sizeof(float));
    widest<<<(n + 255) / 256, 256>>>(
        cuda::std::span<const float> {v, n},
        cuda::std::span<float> {out, 1});
    float got {0.0f};
    cudaMemcpy(&got, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(out);
    std::println("{}", got);
}
```
### Tests
```in
1
-3.5
```
```in
4
-5 5 1 2
```
```in
3
-2 -8 -8
```
```in
2
0.5 -0.5
```
```in
5
1000000000 -1000000000 3 -4 0
```
```in
512
-125 -115.75 -106.5 -97.25 -88 -78.75 -69.5 -60.25 -51 -41.75 -32.5 -23.25 -14 -4.75 4.5 13.75 23 32.25 41.5 50.75 60 69.25 78.5 87.75 97 106.25 115.5 124.75 -116.25 -107 -97.75 -88.5 -79.25 -70 -60.75 -51.5 -42.25 -33 -23.75 -14.5 -5.25 4 13.25 22.5 31.75 41 50.25 59.5 68.75 78 87.25 96.5 105.75 115 124.25 -116.75 -107.5 -98.25 -89 -79.75 -70.5 -61.25 -52 -42.75 -33.5 -24.25 -15 -5.75 3.5 12.75 22 31.25 40.5 49.75 59 68.25 77.5 86.75 96 105.25 114.5 123.75 -117.25 -108 -98.75 -89.5 -80.25 -71 -61.75 -52.5 -43.25 -34 -24.75 -15.5 -6.25 3 12.25 21.5 30.75 40 49.25 58.5 67.75 77 86.25 95.5 104.75 114 123.25 -117.75 -108.5 -99.25 -90 -80.75 -71.5 -62.25 -53 -43.75 -34.5 -25.25 -16 -6.75 2.5 11.75 21 30.25 39.5 48.75 58 67.25 76.5 85.75 95 104.25 113.5 122.75 -118.25 -109 -99.75 -90.5 -81.25 -72 -62.75 -53.5 -44.25 -35 -25.75 -16.5 -7.25 2 11.25 20.5 29.75 39 48.25 57.5 66.75 76 85.25 94.5 103.75 113 122.25 -118.75 -109.5 -100.25 -91 -81.75 -72.5 -63.25 -54 -44.75 -35.5 -26.25 -17 -7.75 1.5 10.75 20 29.25 38.5 47.75 57 66.25 75.5 84.75 94 103.25 112.5 121.75 -119.25 -110 -100.75 -91.5 -82.25 -73 -63.75 -54.5 -45.25 -36 -26.75 -17.5 -8.25 1 10.25 19.5 28.75 38 47.25 56.5 65.75 75 84.25 93.5 102.75 112 121.25 -119.75 -110.5 -101.25 -92 -82.75 -73.5 -64.25 -55 -45.75 -36.5 -27.25 -18 -8.75 0.5 9.75 19 28.25 37.5 46.75 56 65.25 74.5 83.75 93 102.25 111.5 120.75 -120.25 -111 -101.75 -92.5 -83.25 -74 -64.75 -55.5 -46.25 -37 -27.75 -18.5 -9.25 0 9.25 18.5 27.75 37 46.25 55.5 64.75 74 83.25 92.5 101.75 111 120.25 -120.75 -111.5 -102.25 -93 -83.75 -74.5 -65.25 -56 -46.75 -37.5 -28.25 -19 -9.75 -0.5 8.75 18 27.25 36.5 45.75 55 64.25 73.5 82.75 92 101.25 110.5 119.75 -121.25 -112 -102.75 -93.5 -84.25 -75 -65.75 -56.5 -47.25 -38 -28.75 -19.5 -10.25 -1 8.25 17.5 26.75 36 45.25 54.5 63.75 73 82.25 91.5 100.75 110 119.25 -121.75 -112.5 -103.25 -94 -84.75 -75.5 -66.25 -57 -47.75 -38.5 -29.25 -20 -10.75 -1.5 7.75 17 26.25 35.5 44.75 54 63.25 72.5 81.75 91 100.25 109.5 118.75 -122.25 -113 -103.75 -94.5 -85.25 -76 -66.75 -57.5 -48.25 -39 -29.75 -20.5 -11.25 -2 7.25 16.5 25.75 35 44.25 53.5 62.75 72 81.25 90.5 99.75 109 118.25 -122.75 -113.5 -104.25 -95 -85.75 -76.5 -67.25 -58 -48.75 -39.5 -30.25 -21 -11.75 -2.5 6.75 16 25.25 34.5 43.75 53 62.25 71.5 80.75 90 99.25 108.5 117.75 -123.25 -114 -104.75 -95.5 -86.25 -77 -67.75 -58.5 -49.25 -40 -30.75 -21.5 -12.25 -3 6.25 15.5 24.75 34 43.25 52.5 61.75 71 80.25 89.5 98.75 108 117.25 -123.75 -114.5 -105.25 -96 -86.75 -77.5 -68.25 -59 -49.75 -40.5 -31.25 -22 -12.75 -3.5 5.75 15 24.25 33.5 42.75 52 61.25 70.5 79.75 89 98.25 107.5 116.75 -124.25 -115 -105.75 -96.5 -87.25 -78 -68.75 -59.5 -50.25 -41 -31.75 -22.5 -13.25 -4 5.25 14.5 23.75 33 42.25 51.5 60.75 70 79.25 88.5 97.75 107 116.25 -124.75 -115.5 -106.25 -97 -87.75 -78.5 -69.25 -60 -50.75 -41.5 -32.25 -23 -13.75 -4.5 4.75 14 23.25 32.5 41.75 51 60.25 69.5 78.75 88 97.25
```
### Witness
```in
2
3 -9
```
