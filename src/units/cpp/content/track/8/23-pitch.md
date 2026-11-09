# 8.23 The pitch of a padded field
Part: the pitch of a padded field
Clause: CUDA C++ Programming Guide: Device Memory, CUDA Runtime API: cudaMallocPitch, CUDA Runtime API: cudaMemcpy2D, CUDA C++ Best Practices Guide 10.2.1 Coalesced Access to Global Memory
After: 8.02, 8.16
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory (cudaMallocPitch pads each row so that it meets the alignment that coalescing needs; the row step is the pitch, in bytes); the pitch is read on this machine, the pin

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Write row r, column c at r times the step plus c.
__global__ void mark(cuda::std::span<float> f, std::size_t step)
{
    std::size_t r {blockIdx.x};
    std::size_t c {threadIdx.x};
    f[r * step + c] = static_cast<float>(10 * r + c);
}

int main()
{
    //: Ask for 4 rows of 100 floats, each row padded.
    float* f {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, 100 * sizeof(float), 4);
    //: Step from row to row by the pitch in floats.
    std::size_t step {pitch / sizeof(float)};
    std::println("{} {}", pitch, step);
    mark<<<4, 100>>>({f, 4 * step}, step);
    //: Copy the rows back packed, with the pitch on one side.
    std::size_t row {100 * sizeof(float)};
    std::vector<float> host(400);
    cudaMemcpy2D(host.data(), row, f, pitch, row, 4,
                 cudaMemcpyDeviceToHost);
    std::println("{}", host[399]);
    cudaFree(f);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void zero(cuda::std::span<float> f,
                     std::size_t pitch)
{
    std::size_t r {threadIdx.y};
    std::size_t c {threadIdx.x};
    f[r * (pitch / sizeof(float)) + c] = 0.0f;
}

int main()
{
    float* f {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, 8 * sizeof(float), 4);
    std::size_t n {4 * pitch / sizeof(float)};
    zero<<<1, dim3 {8, 4}>>>({f, n}, pitch);
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(f);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void zero(cuda::std::span<float> f,
                     std::size_t pitch)
{
    std::size_t r {threadIdx.y};
    std::size_t c {threadIdx.x};
    f[r * pitch + c] = 0.0f;
}

int main()
{
    float* f {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, 8 * sizeof(float), 4);
    std::size_t n {4 * pitch / sizeof(float)};
    zero<<<1, dim3 {8, 4}>>>({f, n}, pitch);
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(f);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads h and w and makes a field of h rows of w floats with `cudaMallocPitch`.
Set the field to zero with `cudaMemset2D`.
A kernel with one thread per element sets the element at row r and column c to r · w + c.
Copy the field back with `cudaMemcpy2D` into h · w floats, row after row.
Print the pitch in bytes, then the sum of the h · w values as an integer.
Input: one line, h and w.
Output: one line, the pitch; one line, the sum.
Limits: 1 ≤ h ≤ 50; 1 ≤ w ≤ 1000.
### Examples
```in
2 128
```
```out
512
32640
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void fill(cuda::std::span<float> f, std::size_t step,
                     std::size_t h, std::size_t w)
{
    std::size_t c {blockIdx.x * blockDim.x + threadIdx.x};
    std::size_t r {blockIdx.y * blockDim.y + threadIdx.y};
    if (r < h && c < w) {
        f[r * step + c] = static_cast<float>(r * w + c);
    }
}

int main()
{
    std::size_t h {1};
    std::size_t w {1};
    std::cin >> h >> w;
    std::size_t row {w * sizeof(float)};
    float* f {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, row, h);
    cudaMemset2D(f, pitch, 0, row, h);
    std::size_t step {pitch / sizeof(float)};
    dim3 grid {static_cast<unsigned>((w + 31) / 32),
               static_cast<unsigned>((h + 7) / 8)};
    fill<<<grid, dim3 {32, 8}>>>({f, h * step}, step, h, w);
    std::vector<float> v(h * w);
    cudaMemcpy2D(v.data(), row, f, pitch, row, h,
                 cudaMemcpyDeviceToHost);
    long long sum {0};
    for (float x : v) {
        sum += static_cast<long long>(x);
    }
    std::println("{}", pitch);
    std::println("{}", sum);
    cudaFree(f);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void fill(cuda::std::span<float> f, std::size_t step,
                     std::size_t h, std::size_t w)
{
    std::size_t c {blockIdx.x * blockDim.x + threadIdx.x};
    std::size_t r {blockIdx.y * blockDim.y + threadIdx.y};
    if (r < h && c < w) {
        f[r * w + c] = static_cast<float>(r * w + c);
    }
}

int main()
{
    std::size_t h {1};
    std::size_t w {1};
    std::cin >> h >> w;
    std::size_t row {w * sizeof(float)};
    float* f {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, row, h);
    cudaMemset2D(f, pitch, 0, row, h);
    std::size_t step {pitch / sizeof(float)};
    dim3 grid {static_cast<unsigned>((w + 31) / 32),
               static_cast<unsigned>((h + 7) / 8)};
    fill<<<grid, dim3 {32, 8}>>>({f, h * step}, step, h, w);
    std::vector<float> v(h * w);
    cudaMemcpy2D(v.data(), row, f, pitch, row, h,
                 cudaMemcpyDeviceToHost);
    long long sum {0};
    for (float x : v) {
        sum += static_cast<long long>(x);
    }
    std::println("{}", pitch);
    std::println("{}", sum);
    cudaFree(f);
}
```
### Tests
```in
1 1
```
```in
50 1000
```
```in
4 129
```
```in
7 3
```
```in
1 1000
```
### Witness
```in
3 3
```

## Alone 2
Form: run
Write a program that reads h and w and makes on the host h rows of w ints, the value at row r and column c being r · w + c.
Make a field of h rows of w ints with `cudaMallocPitch`, set it to zero with `cudaMemset2D`, and copy the host rows into it.
A kernel with one thread per row adds up the w ints of its row.
Print the h sums, one per line, row 0 first.
Input: one line, h and w.
Output: h lines, the sum of each row.
Limits: 1 ≤ h ≤ 40; 1 ≤ w ≤ 1000.
### Examples
```in
2 128
```
```out
8128
24512
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sums(cuda::std::span<const int> f,
                     std::size_t step, std::size_t w,
                     cuda::std::span<int> out)
{
    std::size_t r {threadIdx.x};
    if (r < out.size()) {
        int s {0};
        for (std::size_t c {0}; c < w; ++c) {
            s += f[r * step + c];
        }
        out[r] = s;
    }
}

int main()
{
    std::size_t h {1};
    std::size_t w {1};
    std::cin >> h >> w;
    std::vector<int> v(h * w);
    for (std::size_t i {0}; i < v.size(); ++i) {
        v[i] = static_cast<int>(i);
    }
    std::size_t row {w * sizeof(int)};
    int* f {nullptr};
    int* out {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, row, h);
    cudaMalloc(&out, h * sizeof(int));
    cudaMemset2D(f, pitch, 0, row, h);
    cudaMemcpy2D(f, pitch, v.data(), row, row, h,
                 cudaMemcpyHostToDevice);
    std::size_t step {pitch / sizeof(int)};
    sums<<<1, 64>>>({f, h * step}, step, w, {out, h});
    std::vector<int> s(h);
    cudaMemcpy(s.data(), out, h * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : s) {
        std::println("{}", x);
    }
    cudaFree(out);
    cudaFree(f);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sums(cuda::std::span<const int> f,
                     std::size_t step, std::size_t w,
                     cuda::std::span<int> out)
{
    std::size_t r {threadIdx.x};
    if (r < out.size()) {
        int s {0};
        for (std::size_t c {0}; c < w; ++c) {
            s += f[r * step + c];
        }
        out[r] = s;
    }
}

int main()
{
    std::size_t h {1};
    std::size_t w {1};
    std::cin >> h >> w;
    std::vector<int> v(h * w);
    for (std::size_t i {0}; i < v.size(); ++i) {
        v[i] = static_cast<int>(i);
    }
    std::size_t row {w * sizeof(int)};
    int* f {nullptr};
    int* out {nullptr};
    std::size_t pitch {0};
    cudaMallocPitch(&f, &pitch, row, h);
    cudaMalloc(&out, h * sizeof(int));
    cudaMemset2D(f, pitch, 0, row, h);
    cudaMemcpy(f, v.data(), h * row, cudaMemcpyHostToDevice);
    std::size_t step {pitch / sizeof(int)};
    sums<<<1, 64>>>({f, h * step}, step, w, {out, h});
    std::vector<int> s(h);
    cudaMemcpy(s.data(), out, h * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : s) {
        std::println("{}", x);
    }
    cudaFree(out);
    cudaFree(f);
}
```
### Tests
```in
1 1
```
```in
40 1000
```
```in
3 129
```
```in
5 7
```
### Witness
```in
3 3
```
