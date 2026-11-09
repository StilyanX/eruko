# 8.01 The global index of a thread in a one-dimensional launch
Part: the global index of each thread in a one-dimensional launch
Clause: CUDA C++ Programming Guide §5.1, CUDA C++ Programming Guide §5.2
After: none
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §5.2 Thread Hierarchy

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Add the thread's place to its block times the block size.
__global__ void place(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    //: Leave the threads past the end alone.
    if (i < out.size()) {
        out[i] = i;
    }
}

int main()
{
    //: Launch enough blocks of 4 threads to cover 10 elements.
    unsigned n {10};
    unsigned block {4};
    unsigned blocks {(n + block - 1) / block};
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    place<<<blocks, block>>>(view);
    //: Copy the indices back and print them.
    std::vector<unsigned> host(n);
    cudaMemcpy(host.data(), out, n * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned v : host) {
        std::print("{} ", v);
    }
    std::println();
}
```

## Verdict 1
```cuda
#include <print>
#include <vector>

__global__ void place(unsigned* out, unsigned n)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < n) {
        out[i] = i;
    }
}

int main()
{
    unsigned n {10};
    unsigned block {4};
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cudaMemset(out, 0, n * sizeof(unsigned));
    place<<<n / block, block>>>(out, n);
    std::vector<unsigned> host(n);
    cudaMemcpy(host.data(), out, n * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned v : host) {
        std::print("{} ", v);
    }
    std::println();
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <print>

__global__ void place(unsigned* out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    out[i] = i;
}

int main()
{
    unsigned n {10};
    unsigned block {4};
    unsigned blocks {(n + block - 1) / block};
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    place<<<blocks, block>>>(out);
    cudaDeviceSynchronize();
    cudaFree(out);
    std::println("{}", blocks);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads n and b and launches a kernel on ⌈n/b⌉ blocks of b threads.
Each thread whose global index i is below n writes the number of its block into element i of an array of n numbers.
The array starts at 0. Print the array.
Input: one line, n and b.
Output: one line, the n numbers of the array, separated by spaces.
Limits: 1 ≤ n ≤ 1000; 1 ≤ b ≤ 1024.
### Examples
```in
16 4
```
```out
0 0 0 0 1 1 1 1 2 2 2 2 3 3 3 3
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void owner(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < out.size()) {
        out[i] = blockIdx.x;
    }
}

int main()
{
    unsigned n {0};
    unsigned b {0};
    std::cin >> n >> b;
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cudaMemset(out, 0, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    owner<<<(n + b - 1) / b, b>>>(view);
    std::vector<unsigned> host(n);
    cudaMemcpy(host.data(), out, n * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned v : host) {
        std::print("{} ", v);
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

__global__ void owner(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * gridDim.x + threadIdx.x};
    if (i < out.size()) {
        out[i] = blockIdx.x;
    }
}

int main()
{
    unsigned n {0};
    unsigned b {0};
    std::cin >> n >> b;
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cudaMemset(out, 0, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    owner<<<(n + b - 1) / b, b>>>(view);
    std::vector<unsigned> host(n);
    cudaMemcpy(host.data(), out, n * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned v : host) {
        std::print("{} ", v);
    }
    std::println();
}
```
### Tests
```in
1 1
```
```in
1000 1024
```
```in
1000 32
```
```in
7 3
```
```in
5 1
```
### Witness
```in
10 4
```

## Alone 2
Form: run
Write a program that reads n, b and g and launches a kernel on g blocks of b threads.
The threads take the n elements of an array in turns: the thread with global index i takes elements i, i + gb, i + 2gb and so on, below n.
Each thread adds its global index to every element it takes. The array starts at 0. Print the array.
Input: one line, n, b and g.
Output: one line, the n numbers of the array, separated by spaces.
Limits: 1 ≤ n ≤ 1000; 1 ≤ b ≤ 1024; 1 ≤ g ≤ 64.
### Examples
```in
6 2 1
```
```out
0 1 0 1 0 1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void share(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned step {blockDim.x * gridDim.x};
    for (unsigned j {i}; j < out.size(); j += step) {
        atomicAdd(&out[j], i);
    }
}

int main()
{
    unsigned n {0};
    unsigned b {0};
    unsigned g {0};
    std::cin >> n >> b >> g;
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cudaMemset(out, 0, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    share<<<g, b>>>(view);
    std::vector<unsigned> host(n);
    cudaMemcpy(host.data(), out, n * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned v : host) {
        std::print("{} ", v);
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

__global__ void share(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    unsigned step {blockDim.x};
    for (unsigned j {i}; j < out.size(); j += step) {
        atomicAdd(&out[j], i);
    }
}

int main()
{
    unsigned n {0};
    unsigned b {0};
    unsigned g {0};
    std::cin >> n >> b >> g;
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cudaMemset(out, 0, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    share<<<g, b>>>(view);
    std::vector<unsigned> host(n);
    cudaMemcpy(host.data(), out, n * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned v : host) {
        std::print("{} ", v);
    }
    std::println();
}
```
### Tests
```in
1 1 1
```
```in
1000 1024 64
```
```in
1000 32 2
```
```in
10 4 8
```
### Witness
```in
20 4 2
```
