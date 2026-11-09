# 8.37 Two kernels in one stream run in order
Part: the order of two kernels in one stream
Clause: CUDA C++ Programming Guide: Asynchronous Concurrent Execution, Streams, CUDA C++ Programming Guide: Default Stream
After: 8.30
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Asynchronous Concurrent Execution, Streams (a stream is a sequence of commands that execute in order)

## Example
```cuda
#include <cuda/std/span>
#include <print>

__global__ void square(cuda::std::span<int> v)
{
    v[threadIdx.x] *= v[threadIdx.x];
}

__global__ void add_one(cuda::std::span<int> v)
{
    v[threadIdx.x] += 1;
}

int main()
{
    //: Make one stream and copy 3 values to the device.
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int host[3] {1, 2, 3};
    int* d {nullptr};
    cudaMalloc(&d, 3 * sizeof(int));
    cudaMemcpy(d, host, 3 * sizeof(int),
               cudaMemcpyHostToDevice);
    //: Launch two kernels into it with no wait between them.
    square<<<1, 3, 0, s>>>({d, 3});
    add_one<<<1, 3, 0, s>>>({d, 3});
    //: The second runs after the first ends and sees its writes.
    cudaStreamSynchronize(s);
    cudaMemcpy(host, d, 3 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    cudaStreamDestroy(s);
    std::println("{} {} {}", host[0], host[1], host[2]);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 5;
}

__global__ void twice(cuda::std::span<int> x)
{
    x[0] *= 2;
}

int main()
{
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    set<<<1, 1, 0, s>>>({d, 1});
    twice<<<1, 1, 0, s>>>({d, 1});
    twice<<<1, 1, 0, s>>>({d, 1});
    int x {0};
    cudaMemcpyAsync(&x, d, sizeof(int), cudaMemcpyDeviceToHost,
                    s);
    cudaStreamSynchronize(s);
    cudaFree(d);
    cudaStreamDestroy(s);
    std::println("{}", x);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = static_cast<int>(threadIdx.x);
}

__global__ void total(cuda::std::span<int> v)
{
    int sum {0};
    for (int x : v) {
        sum += x;
    }
    v[0] = sum;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 64 * sizeof(int));
    fill<<<1, 64>>>({d, 64});
    total<<<1, 1>>>({d, 64});
    int sum {0};
    cudaMemcpy(&sum, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", sum);
}
```
Answer: c++23 defined
Sanitizer: initcheck

## Alone 1
Form: run
Write a program that reads n integers and copies them to the device.
In one stream, a first kernel sets each negative integer to 0, then a second kernel adds 1 to each integer.
Launch the two kernels with nothing between them, then copy the integers back and print them.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the n integers after both kernels, separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
0 4 9
```
```out
1 5 10
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void clamp(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size() && v[i] < 0) {
        v[i] = 0;
    }
}

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
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    int blocks {(n + 255) / 256};
    clamp<<<blocks, 256, 0, s>>>({d, v.size()});
    add_one<<<blocks, 256, 0, s>>>({d, v.size()});
    cudaStreamSynchronize(s);
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    cudaStreamDestroy(s);
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

__global__ void clamp(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size() && v[i] < 0) {
        v[i] = 0;
    }
}

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
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    int blocks {(n + 255) / 256};
    add_one<<<blocks, 256, 0, s>>>({d, v.size()});
    clamp<<<blocks, 256, 0, s>>>({d, v.size()});
    cudaStreamSynchronize(s);
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    cudaStreamDestroy(s);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1
-1000
```
```in
1
1000
```
```in
5
-1 0 1 -2 2
```
```in
300
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
```
### Witness
```in
2
-5 5
```

## Alone 2
Form: run
Write a program that reads n integers and copies them to the device.
In one stream, a first kernel finds the largest integer with `atomicMax` into one device int that starts at the first integer.
A second kernel then subtracts that largest integer from each integer. Copy the integers back and print them.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the n integers after both kernels, separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
5 1 3
```
```out
0 -4 -2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void top(cuda::std::span<const int> v,
                    cuda::std::span<int> m)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        atomicMax(&m[0], v[i]);
    }
}

__global__ void less(cuda::std::span<int> v,
                     cuda::std::span<const int> m)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] -= m[0];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    int* m {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&m, sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemcpy(m, v.data(), sizeof(int),
               cudaMemcpyHostToDevice);
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int blocks {(n + 255) / 256};
    top<<<blocks, 256, 0, s>>>({d, v.size()}, {m, 1});
    less<<<blocks, 256, 0, s>>>({d, v.size()}, {m, 1});
    cudaStreamSynchronize(s);
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(m);
    cudaFree(d);
    cudaStreamDestroy(s);
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

__global__ void top(cuda::std::span<const int> v,
                    cuda::std::span<int> m)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        atomicMax(&m[0], v[i]);
    }
}

__global__ void less(cuda::std::span<int> v,
                     cuda::std::span<const int> m)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] -= m[0];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    int* m {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&m, sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemcpy(m, v.data(), sizeof(int),
               cudaMemcpyHostToDevice);
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int blocks {(n + 255) / 256};
    less<<<blocks, 256, 0, s>>>({d, v.size()}, {m, 1});
    top<<<blocks, 256, 0, s>>>({d, v.size()}, {m, 1});
    cudaStreamSynchronize(s);
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(m);
    cudaFree(d);
    cudaStreamDestroy(s);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1
-1000
```
```in
2
-1000 1000
```
```in
4
7 7 7 7
```
```in
5
-3 -2 -1 -4 -5
```
### Witness
```in
3
1 2 3
```
