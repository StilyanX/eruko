# 8.30 An out-of-bounds access in a kernel
Part: an out-of-bounds access in a kernel
Clause: [expr.add], [basic.compound], CUDA C++ Programming Guide: Thread Hierarchy, Compute Sanitizer: Memcheck Tool
After: 8.01
Levels: c++23
Device: yes
Source: Compute Sanitizer User Manual, Memcheck Tool (Memcheck Reporting Errors: Memory access error)

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Find the thread's element, and touch it only when it is inside.
__global__ void twice(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] = 2 * v[i];
    }
}

int main()
{
    //: Copy 10 values to the device.
    std::vector<int> v {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::size_t n {v.size()};
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    //: Launch 3 blocks of 4: the last 2 threads have no element.
    twice<<<3, 4>>>({d, n});
    //: Copy the values back and print them.
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i <= v.size()) {
        v[i] = static_cast<int>(i);
    }
}

int main()
{
    std::size_t n {8};
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    fill<<<3, 4>>>({d, n});
    int last {0};
    cudaMemcpy(&last, d + n - 1, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", last);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] = static_cast<int>(i);
    }
}

int main()
{
    std::size_t n {9};
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    fill<<<3, 4>>>({d, n});
    int last {0};
    cudaMemcpy(&last, d + n - 1, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", last);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: sanitizer
Sanitizer: memcheck
Write a program that reads n, b and n integers, and copies the integers to an array of n ints that `cudaMalloc` gives.
Launch blocks of b threads, as few as cover the n integers, and let each thread add 1 to its own integer.
Print the integers after the kernel.
Input: one line, n and b; then one line, n integers separated by spaces.
Output: one line, the n integers after the kernel, separated by spaces.
Limits: 1 ≤ n ≤ 1000; 1 ≤ b ≤ 1024; each integer is between -1000 and 1000.
### Examples
```in
4 4
1 2 3 4
```
```out
2 3 4 5
```
```in
6 2
0 0 0 0 0 0
```
```out
1 1 1 1 1 1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void add_one(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] += 1;
    }
}

int main()
{
    int n {0};
    int b {0};
    std::cin >> n >> b;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    add_one<<<(n + b - 1) / b, b>>>({d, v.size()});
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void add_one(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    v[i] += 1;
}

int main()
{
    int n {0};
    int b {0};
    std::cin >> n >> b;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    add_one<<<(n + b - 1) / b, b>>>({d, v.size()});
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1 1
-1000
```
```in
1 1024
7
```
```in
5 4
1 2 3 4 5
```
```in
10 3
9 8 7 6 5 4 3 2 1 0
```
### Witness
```in
3 2
1 2 3
```

## Alone 2
Form: sanitizer
Sanitizer: memcheck
Write a program that reads a grid of r rows and c columns of integers into an array of r · c ints that `cudaMalloc` gives, row after row.
Launch one block of 32 × 32 threads; thread (x, y) doubles the integer in row y, column x, where there is one.
Print the grid after the kernel.
Input: one line, r and c; then r lines of c integers separated by spaces.
Output: r lines of c integers separated by spaces.
Limits: 1 ≤ r ≤ 32; 1 ≤ c ≤ 32; each integer is between -1000 and 1000.
### Examples
```in
2 2
1 2
3 4
```
```out
2 4
6 8
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void twice(cuda::std::span<int> g, int r, int c)
{
    int x {static_cast<int>(threadIdx.x)};
    int y {static_cast<int>(threadIdx.y)};
    if (x < c && y < r) {
        g[y * c + x] *= 2;
    }
}

int main()
{
    int r {0};
    int c {0};
    std::cin >> r >> c;
    std::vector<int> g(r * c);
    for (int& x : g) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, r * c * sizeof(int));
    cudaMemcpy(d, g.data(), r * c * sizeof(int),
               cudaMemcpyHostToDevice);
    twice<<<1, dim3 {32, 32}>>>({d, g.size()}, r, c);
    cudaMemcpy(g.data(), d, r * c * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int y {0}; y < r; ++y) {
        for (int x {0}; x < c; ++x) {
            std::print("{} ", g[y * c + x]);
        }
        std::println();
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void twice(cuda::std::span<int> g, int r, int c)
{
    int x {static_cast<int>(threadIdx.x)};
    int y {static_cast<int>(threadIdx.y)};
    if (x < c && y < c) {
        g[y * c + x] *= 2;
    }
}

int main()
{
    int r {0};
    int c {0};
    std::cin >> r >> c;
    std::vector<int> g(r * c);
    for (int& x : g) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, r * c * sizeof(int));
    cudaMemcpy(d, g.data(), r * c * sizeof(int),
               cudaMemcpyHostToDevice);
    twice<<<1, dim3 {32, 32}>>>({d, g.size()}, r, c);
    cudaMemcpy(g.data(), d, r * c * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int y {0}; y < r; ++y) {
        for (int x {0}; x < c; ++x) {
            std::print("{} ", g[y * c + x]);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
-1000
```
```in
1 32
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
```
```in
3 2
1 2
3 4
5 6
```
```in
3 3
1 2 3
4 5 6
7 8 9
```
### Witness
```in
2 3
1 2 3
4 5 6
```
