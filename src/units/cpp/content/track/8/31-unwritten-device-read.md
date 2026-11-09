# 8.31 A read of device memory that nothing wrote
Part: a read of device memory that nothing wrote
Clause: [basic.indet], [dcl.init.general], CUDA Runtime API: cudaMalloc, cudaMemset, Compute Sanitizer: Initcheck Tool
After: 8.30
Levels: c++23
Device: yes
Source: Compute Sanitizer User Manual, Initcheck Tool; CUDA Runtime API, cudaMalloc ("The memory is not cleared")

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Add every int of the array into one total.
__global__ void add(cuda::std::span<const int> v, int* total)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        atomicAdd(total, v[i]);
    }
}

int main()
{
    //: Take memory for 8 ints and a total, all of it unwritten.
    std::size_t n {8};
    int* d {nullptr};
    int* total {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&total, sizeof(int));
    //: Write every byte before a kernel reads it.
    cudaMemset(d, 0, n * sizeof(int));
    cudaMemset(total, 0, sizeof(int));
    int three {3};
    cudaMemcpy(d, &three, sizeof(int), cudaMemcpyHostToDevice);
    //: Add, then copy the total back and print it.
    add<<<1, 8>>>({d, n}, total);
    int sum {0};
    cudaMemcpy(&sum, total, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(total);
    cudaFree(d);
    std::println("{}", sum);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void largest(cuda::std::span<const int> v, int* top)
{
    int best {v[0]};
    for (int x : v) {
        best = x > best ? x : best;
    }
    *top = best;
}

int main()
{
    std::size_t n {4};
    int* d {nullptr};
    int* top {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&top, sizeof(int));
    int one {1};
    cudaMemcpy(d, &one, sizeof(int), cudaMemcpyHostToDevice);
    largest<<<1, 1>>>({d, n}, top);
    int best {0};
    cudaMemcpy(&best, top, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(top);
    cudaFree(d);
    std::println("{}", best);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: initcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void largest(cuda::std::span<const int> v, int* top)
{
    int best {v[0]};
    for (int x : v) {
        best = x > best ? x : best;
    }
    *top = best;
}

int main()
{
    std::size_t n {4};
    int* d {nullptr};
    int* top {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&top, sizeof(int));
    int one {1};
    cudaMemcpy(d, &one, sizeof(int), cudaMemcpyHostToDevice);
    largest<<<1, 1>>>({d, 1}, top);
    int best {0};
    cudaMemcpy(&best, top, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(top);
    cudaFree(d);
    std::println("{}", best);
}
```
Answer: c++23 defined
Sanitizer: initcheck

## Alone 1
Form: sanitizer
Sanitizer: initcheck
Write a program that reads n, m and m integers, and makes an array of n ints with `cudaMalloc`.
Put the m integers at the start of the array and 0 in each place after them.
A kernel of n threads adds the n ints into one total with `atomicAdd`. Print the total.
Input: one line, n and m; then one line, m integers separated by spaces.
Output: one line, the total.
Limits: 1 ≤ m ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3 3
1 2 3
```
```out
6
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void add(cuda::std::span<const int> v, int* total)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        atomicAdd(total, v[i]);
    }
}

int main()
{
    std::size_t n {0};
    std::size_t m {0};
    std::cin >> n >> m;
    std::vector<int> v(m);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    int* total {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&total, sizeof(int));
    cudaMemset(d, 0, n * sizeof(int));
    cudaMemset(total, 0, sizeof(int));
    cudaMemcpy(d, v.data(), m * sizeof(int),
               cudaMemcpyHostToDevice);
    unsigned blocks {static_cast<unsigned>((n + 255) / 256)};
    add<<<blocks, 256>>>({d, n}, total);
    int sum {0};
    cudaMemcpy(&sum, total, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(total);
    cudaFree(d);
    std::println("{}", sum);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void add(cuda::std::span<const int> v, int* total)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        atomicAdd(total, v[i]);
    }
}

int main()
{
    std::size_t n {0};
    std::size_t m {0};
    std::cin >> n >> m;
    std::vector<int> v(m);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    int* total {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&total, sizeof(int));
    cudaMemset(total, 0, sizeof(int));
    cudaMemcpy(d, v.data(), m * sizeof(int),
               cudaMemcpyHostToDevice);
    unsigned blocks {static_cast<unsigned>((n + 255) / 256)};
    add<<<blocks, 256>>>({d, n}, total);
    int sum {0};
    cudaMemcpy(&sum, total, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(total);
    cudaFree(d);
    std::println("{}", sum);
}
```
### Tests
```in
1 1
-1000
```
```in
1000 1
5
```
```in
4 2
7 -3
```
```in
5 5
1 1 1 1 1
```
### Witness
```in
3 1
4
```

## Alone 2
Form: sanitizer
Sanitizer: initcheck
Write a program that reads n, b and n integers, and copies the integers to the device.
A first kernel, in blocks of b threads, writes the square of each integer to a second device array of n ints.
A second kernel of one thread adds the n squares. Print their sum.
Input: one line, n and b; then one line, n integers separated by spaces.
Output: one line, the sum of the squares.
Limits: 1 ≤ n ≤ 1000; 1 ≤ b ≤ 1024; each integer is between -1000 and 1000.
### Examples
```in
4 2
1 2 3 4
```
```out
30
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void square(cuda::std::span<const int> v,
                       cuda::std::span<int> s)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        s[i] = v[i] * v[i];
    }
}

__global__ void add(cuda::std::span<const int> s, int* total)
{
    int sum {0};
    for (int x : s) {
        sum += x;
    }
    *total = sum;
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
    std::size_t bytes {v.size() * sizeof(int)};
    int* d {nullptr};
    int* s {nullptr};
    int* total {nullptr};
    cudaMalloc(&d, bytes);
    cudaMalloc(&s, bytes);
    cudaMalloc(&total, sizeof(int));
    cudaMemcpy(d, v.data(), bytes, cudaMemcpyHostToDevice);
    square<<<(n + b - 1) / b, b>>>({d, v.size()},
                                   {s, v.size()});
    add<<<1, 1>>>({s, v.size()}, total);
    int sum {0};
    cudaMemcpy(&sum, total, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(total);
    cudaFree(s);
    cudaFree(d);
    std::println("{}", sum);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void square(cuda::std::span<const int> v,
                       cuda::std::span<int> s)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        s[i] = v[i] * v[i];
    }
}

__global__ void add(cuda::std::span<const int> s, int* total)
{
    int sum {0};
    for (int x : s) {
        sum += x;
    }
    *total = sum;
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
    std::size_t bytes {v.size() * sizeof(int)};
    int* d {nullptr};
    int* s {nullptr};
    int* total {nullptr};
    cudaMalloc(&d, bytes);
    cudaMalloc(&s, bytes);
    cudaMalloc(&total, sizeof(int));
    cudaMemcpy(d, v.data(), bytes, cudaMemcpyHostToDevice);
    square<<<n / b, b>>>({d, v.size()},
                         {s, v.size()});
    add<<<1, 1>>>({s, v.size()}, total);
    int sum {0};
    cudaMemcpy(&sum, total, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(total);
    cudaFree(s);
    cudaFree(d);
    std::println("{}", sum);
}
```
### Tests
```in
1 1
-1000
```
```in
3 4
1 2 3
```
```in
6 3
1 -1 2 -2 3 -3
```
```in
7 2
1 1 1 1 1 1 1
```
### Witness
```in
5 2
1 2 3 4 5
```
