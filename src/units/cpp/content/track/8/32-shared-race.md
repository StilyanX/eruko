# 8.32 A race on shared memory
Part: a race on shared memory
Clause: [intro.races], CUDA C++ Programming Guide: Shared Memory, CUDA C++ Programming Guide: Synchronization Functions, Compute Sanitizer: Racecheck Tool
After: 8.30
Levels: c++23
Device: yes
Source: Compute Sanitizer User Manual, Racecheck Tool; CUDA C++ Programming Guide, Synchronization Functions (__syncthreads)

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Hand each value to the thread on its left, through shared memory.
__global__ void left(cuda::std::span<int> v)
{
    __shared__ int s[64];
    int t {static_cast<int>(threadIdx.x)};
    s[t] = v[t];
    //: Wait until every thread of the block has written.
    __syncthreads();
    //: Only then read a word that another thread wrote.
    v[t] = s[(t + 1) % 64];
}

int main()
{
    //: Run one block of 64 threads, two warps.
    std::vector<int> v(64);
    for (int i {0}; i < 64; ++i) {
        v[i] = i;
    }
    int* d {nullptr};
    cudaMalloc(&d, 64 * sizeof(int));
    cudaMemcpy(d, v.data(), 64 * sizeof(int),
               cudaMemcpyHostToDevice);
    left<<<1, 64>>>({d, v.size()});
    cudaMemcpy(v.data(), d, 64 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", v[0], v[63]);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void reverse(cuda::std::span<int> v)
{
    __shared__ int s[64];
    int t {static_cast<int>(threadIdx.x)};
    s[t] = t;
    v[t] = s[63 - t];
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 64 * sizeof(int));
    reverse<<<1, 64>>>({d, 64});
    int first {0};
    cudaMemcpy(&first, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", first);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: racecheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void reverse(cuda::std::span<int> v)
{
    __shared__ int s[64];
    int t {static_cast<int>(threadIdx.x)};
    s[t] = t;
    __syncthreads();
    v[t] = s[63 - t];
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 64 * sizeof(int));
    reverse<<<1, 64>>>({d, 64});
    int first {0};
    cudaMemcpy(&first, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", first);
}
```
Answer: c++23 defined
Sanitizer: racecheck

## Alone 1
Form: sanitizer
Sanitizer: racecheck
Write a program that reads b and b integers, where b is a power of two.
One block of b threads puts the integers in shared memory and adds them there into one sum. Print the sum.
Input: one line, b; then one line, b integers separated by spaces.
Output: one line, the sum.
Limits: b is 1, 2, 4, …, 1024; each integer is between -1000 and 1000.
### Examples
```in
4
1 2 3 4
```
```out
10
```
```in
32
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
```out
32
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sum(cuda::std::span<int> v)
{
    __shared__ int s[1024];
    unsigned t {threadIdx.x};
    s[t] = v[t];
    __syncthreads();
    for (unsigned h {blockDim.x / 2}; h > 0; h /= 2) {
        if (t < h) {
            s[t] += s[t + h];
        }
        __syncthreads();
    }
    if (t == 0) {
        v[0] = s[0];
    }
}

int main()
{
    int b {0};
    std::cin >> b;
    std::vector<int> v(b);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, b * sizeof(int));
    cudaMemcpy(d, v.data(), b * sizeof(int),
               cudaMemcpyHostToDevice);
    sum<<<1, b>>>({d, v.size()});
    int total {0};
    cudaMemcpy(&total, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", total);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sum(cuda::std::span<int> v)
{
    __shared__ int s[1024];
    unsigned t {threadIdx.x};
    s[t] = v[t];
    __syncwarp();
    for (unsigned h {blockDim.x / 2}; h > 0; h /= 2) {
        if (t < h) {
            s[t] += s[t + h];
        }
        __syncthreads();
    }
    if (t == 0) {
        v[0] = s[0];
    }
}

int main()
{
    int b {0};
    std::cin >> b;
    std::vector<int> v(b);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, b * sizeof(int));
    cudaMemcpy(d, v.data(), b * sizeof(int),
               cudaMemcpyHostToDevice);
    sum<<<1, b>>>({d, v.size()});
    int total {0};
    cudaMemcpy(&total, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", total);
}
```
### Tests
```in
1
-1000
```
```in
2
5 -7
```
```in
16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
```
```in
128
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
### Witness
```in
64
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64
```

## Alone 2
Form: sanitizer
Sanitizer: racecheck
Write a program that reads n integers, each from 0 to 7, and counts how many times each value comes.
One block of n threads keeps the 8 counts in shared memory; thread i counts integer i. Print the counts.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the 8 counts for the values 0 to 7, separated by spaces.
Limits: 1 ≤ n ≤ 1024; each integer is from 0 to 7.
### Examples
```in
3
0 5 7
```
```out
1 0 0 0 0 1 0 1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void count(cuda::std::span<const int> v,
                      cuda::std::span<int> out)
{
    __shared__ int bins[8];
    int t {static_cast<int>(threadIdx.x)};
    for (unsigned i {threadIdx.x}; i < 8; i += blockDim.x) {
        bins[i] = 0;
    }
    __syncthreads();
    atomicAdd(&bins[v[t]], 1);
    __syncthreads();
    for (unsigned i {threadIdx.x}; i < 8; i += blockDim.x) {
        out[i] = bins[i];
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
    std::vector<int> bins(8);
    int* d {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&out, 8 * sizeof(int));
    cudaMemset(out, 0, 8 * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    count<<<1, n>>>({d, v.size()}, {out, bins.size()});
    cudaMemcpy(bins.data(), out, 8 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(d);
    for (int c : bins) {
        std::print("{} ", c);
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

__global__ void count(cuda::std::span<const int> v,
                      cuda::std::span<int> out)
{
    __shared__ int bins[8];
    int t {static_cast<int>(threadIdx.x)};
    for (unsigned i {threadIdx.x}; i < 8; i += blockDim.x) {
        bins[i] = 0;
    }
    __syncthreads();
    bins[v[t]] += 1;
    __syncthreads();
    for (unsigned i {threadIdx.x}; i < 8; i += blockDim.x) {
        out[i] = bins[i];
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
    std::vector<int> bins(8);
    int* d {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&out, 8 * sizeof(int));
    cudaMemset(out, 0, 8 * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    count<<<1, n>>>({d, v.size()}, {out, bins.size()});
    cudaMemcpy(bins.data(), out, 8 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(d);
    for (int c : bins) {
        std::print("{} ", c);
    }
    std::println();
}
```
### Tests
```in
1
0
```
```in
8
7 6 5 4 3 2 1 0
```
```in
5
2 2 2 2 2
```
```in
40
0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
```
### Witness
```in
40
3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3
```
