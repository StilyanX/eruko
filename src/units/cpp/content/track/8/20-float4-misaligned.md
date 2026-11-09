# 8.20 A float4 load at an address without its alignment
Part: the report when a `float4` load meets an address that lacks its alignment
Clause: CUDA C++ Programming Guide: Device Memory Accesses, CUDA C++ Programming Guide: Built-in Vector Types, [basic.align], [expr.reinterpret.cast]
After: 8.18
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory Accesses (a global memory instruction reads words of 1, 2, 4, 8 or 16 bytes, naturally aligned); compute-sanitizer memcheck

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Sum each row of eight floats with two float4 loads.
__global__ void rows(cuda::std::span<const float> a,
                     cuda::std::span<float> out)
{
    std::size_t r {threadIdx.x};
    const float* row {&a[8 * r]};
    const float4* p {reinterpret_cast<const float4*>(row)};
    float4 u {p[0]};
    float4 v {p[1]};
    out[r] = u.x + u.y + u.z + u.w + v.x + v.y + v.z + v.w;
}

int main()
{
    //: Fill four rows of eight floats, 32 bytes each.
    std::vector<float> host(32, 1.0f);
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 32 * sizeof(float));
    cudaMalloc(&out, 4 * sizeof(float));
    cudaMemcpy(a, host.data(), 32 * sizeof(float),
               cudaMemcpyHostToDevice);
    //: Run a thread per row: each address is a multiple of 16.
    rows<<<1, 4>>>({a, 32}, {out, 4});
    std::vector<float> sums(4, 0.0f);
    cudaMemcpy(sums.data(), out, 4 * sizeof(float),
               cudaMemcpyDeviceToHost);
    std::println("{}", sums);
    cudaFree(out);
    cudaFree(a);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void head(cuda::std::span<const float> a,
                     cuda::std::span<float> out)
{
    std::size_t r {threadIdx.x};
    const float* row {&a[6 * r]};
    const float4* p {reinterpret_cast<const float4*>(row)};
    float4 v {*p};
    out[r] = v.x + v.y + v.z + v.w;
}

int main()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 12 * sizeof(float));
    cudaMalloc(&out, 2 * sizeof(float));
    cudaMemset(a, 0, 12 * sizeof(float));
    head<<<1, 2>>>({a, 12}, {out, 2});
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

__global__ void head(cuda::std::span<const float> a,
                     cuda::std::span<float> out)
{
    std::size_t r {threadIdx.x};
    const float* row {&a[12 * r]};
    const float4* p {reinterpret_cast<const float4*>(row)};
    float4 v {*p};
    out[r] = v.x + v.y + v.z + v.w;
}

int main()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 24 * sizeof(float));
    cudaMalloc(&out, 2 * sizeof(float));
    cudaMemset(a, 0, 24 * sizeof(float));
    head<<<1, 2>>>({a, 24}, {out, 2});
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(out);
    cudaFree(a);
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: memcheck
Write a program that reads a matrix of integers and prints the sum of each row.
Keep the matrix on the device as floats.
A kernel with one thread per row sums the row, loading it four floats at a time as float4 values.
Input: one line, h and w; then h lines, each w integers separated by spaces.
Output: h lines, the sum of each row as an integer.
Limits: 1 ≤ h ≤ 64, 1 ≤ w ≤ 64; each value is between -1000 and 1000.
### Examples
```in
2 4
1 2 3 4
5 6 7 8
```
```out
10
26
```
```in
1 8
1 1 1 1 1 1 1 -9
```
```out
-2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sums(cuda::std::span<const float> a,
                     cuda::std::span<float> out, int stride)
{
    int r {static_cast<int>(blockIdx.x * blockDim.x)};
    r += static_cast<int>(threadIdx.x);
    if (r < static_cast<int>(out.size())) {
        const float* row {&a[r * stride]};
        float s {0.0f};
        for (int j {0}; j < stride; j += 4) {
            const float* at {row + j};
            float4 v {*reinterpret_cast<const float4*>(at)};
            s += v.x + v.y + v.z + v.w;
        }
        out[r] = s;
    }
}

int main()
{
    int h {0};
    int w {0};
    std::cin >> h >> w;
    int stride {(w + 3) / 4 * 4};
    std::vector<float> host(h * stride, 0.0f);
    for (int r {0}; r < h; ++r) {
        for (int c {0}; c < w; ++c) {
            int v {0};
            std::cin >> v;
            host[r * stride + c] = static_cast<float>(v);
        }
    }
    std::size_t n {host.size()};
    std::size_t rows {static_cast<std::size_t>(h)};
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, n * sizeof(float));
    cudaMalloc(&out, rows * sizeof(float));
    cudaMemcpy(a, host.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    sums<<<(h + 63) / 64, 64>>>({a, n}, {out, rows}, stride);
    std::vector<float> s(rows, 0.0f);
    cudaMemcpy(s.data(), out, rows * sizeof(float),
               cudaMemcpyDeviceToHost);
    for (float v : s) {
        std::println("{}", static_cast<int>(v));
    }
    cudaFree(out);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sums(cuda::std::span<const float> a,
                     cuda::std::span<float> out, int stride)
{
    int r {static_cast<int>(blockIdx.x * blockDim.x)};
    r += static_cast<int>(threadIdx.x);
    if (r < static_cast<int>(out.size())) {
        const float* row {&a[r * stride]};
        float s {0.0f};
        for (int j {0}; j < stride; j += 4) {
            const float* at {row + j};
            float4 v {*reinterpret_cast<const float4*>(at)};
            s += v.x + v.y + v.z + v.w;
        }
        out[r] = s;
    }
}

int main()
{
    int h {0};
    int w {0};
    std::cin >> h >> w;
    int stride {w};
    std::vector<float> host(h * stride, 0.0f);
    for (int r {0}; r < h; ++r) {
        for (int c {0}; c < w; ++c) {
            int v {0};
            std::cin >> v;
            host[r * stride + c] = static_cast<float>(v);
        }
    }
    std::size_t n {host.size()};
    std::size_t rows {static_cast<std::size_t>(h)};
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, n * sizeof(float));
    cudaMalloc(&out, rows * sizeof(float));
    cudaMemcpy(a, host.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    sums<<<(h + 63) / 64, 64>>>({a, n}, {out, rows}, stride);
    std::vector<float> s(rows, 0.0f);
    cudaMemcpy(s.data(), out, rows * sizeof(float),
               cudaMemcpyDeviceToHost);
    for (float v : s) {
        std::println("{}", static_cast<int>(v));
    }
    cudaFree(out);
    cudaFree(a);
}
```
### Tests
```in
1 1
-1000
```
```in
3 2
1 2
3 4
5 6
```
```in
2 7
1 2 3 4 5 6 7
-1 -2 -3 -4 -5 -6 -7
```
```in
2 64
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
-1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000
```
### Witness
```in
2 2
1 2
3 4
```

## Alone 2
Form: sanitizer
Sanitizer: memcheck
Write a program that reads n integers into a float array a on the device, then a start s and a count c.
One thread sums a[s] to a[s + c − 1], and the program prints the sum.
The thread loads float4 values wherever the address allows it, and single floats elsewhere.
Input: one line, n; one line, n integers separated by spaces; one line, s and c.
Output: one line, the sum as an integer.
Limits: 1 ≤ n ≤ 1000; s ≥ 0, c ≥ 0, s + c ≤ n; each value is between -1000 and 1000.
### Examples
```in
8
1 2 3 4 5 6 7 8
0 8
```
```out
36
```
```in
10
1 2 3 4 5 6 7 8 9 10
4 6
```
```out
45
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void total(cuda::std::span<const float> a,
                      cuda::std::span<float> out, int s, int c)
{
    int i {s};
    int end {s + c};
    float sum {0.0f};
    while (i < end && i % 4 != 0) {
        sum += a[i];
        ++i;
    }
    while (i + 4 <= end) {
        float4 v {*reinterpret_cast<const float4*>(&a[i])};
        sum += v.x + v.y + v.z + v.w;
        i += 4;
    }
    while (i < end) {
        sum += a[i];
        ++i;
    }
    out[0] = sum;
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::vector<float> host(n, 0.0f);
    for (float& e : host) {
        int v {0};
        std::cin >> v;
        e = static_cast<float>(v);
    }
    int s {0};
    int c {0};
    std::cin >> s >> c;
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, n * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(a, host.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    total<<<1, 1>>>({a, n}, {out, 1}, s, c);
    float sum {0.0f};
    cudaMemcpy(&sum, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    std::println("{}", static_cast<int>(sum));
    cudaFree(out);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void total(cuda::std::span<const float> a,
                      cuda::std::span<float> out, int s, int c)
{
    int i {s};
    int end {s + c};
    float sum {0.0f};
    while (i + 4 <= end) {
        float4 v {*reinterpret_cast<const float4*>(&a[i])};
        sum += v.x + v.y + v.z + v.w;
        i += 4;
    }
    while (i < end) {
        sum += a[i];
        ++i;
    }
    out[0] = sum;
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    std::vector<float> host(n, 0.0f);
    for (float& e : host) {
        int v {0};
        std::cin >> v;
        e = static_cast<float>(v);
    }
    int s {0};
    int c {0};
    std::cin >> s >> c;
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, n * sizeof(float));
    cudaMalloc(&out, sizeof(float));
    cudaMemcpy(a, host.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    total<<<1, 1>>>({a, n}, {out, 1}, s, c);
    float sum {0.0f};
    cudaMemcpy(&sum, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    std::println("{}", static_cast<int>(sum));
    cudaFree(out);
    cudaFree(a);
}
```
### Tests
```in
1
-7
0 1
```
```in
3
1 2 3
1 0
```
```in
12
1 2 3 4 5 6 7 8 9 10 11 12
3 9
```
```in
9
-1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000
2 7
```
### Witness
```in
9
1 2 3 4 5 6 7 8 9
1 8
```
