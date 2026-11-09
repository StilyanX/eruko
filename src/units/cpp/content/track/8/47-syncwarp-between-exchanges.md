# 8.47 A __syncwarp between two exchanges in one warp
Part: a `__syncwarp` between two warp-level exchanges
Clause: CUDA C++ Programming Guide: Warp Synchronization Function (__syncwarp), CUDA C++ Programming Guide: Independent Thread Scheduling, Compute Sanitizer: Racecheck Tool
After: 8.32
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Warp Synchronization Function; Compute Sanitizer User Manual, Racecheck Tool

## Example
```cuda
#include <print>
#include <vector>
#include <cuda/std/span>

//: Trade with the next lane, then with the lane two away.
__global__ void trade(cuda::std::span<int> v)
{
    __shared__ int s[32];
    unsigned t {threadIdx.x};
    //: Write, wait for the warp, then read a word another lane wrote.
    s[t] = v[t];
    __syncwarp();
    int a {s[t ^ 1]};
    //: Wait again before any lane writes over a word others read.
    __syncwarp();
    s[t] = a;
    __syncwarp();
    v[t] = s[t ^ 2];
}

int main()
{
    //: Run one warp on the lanes' own numbers.
    std::vector<int> h(32);
    for (int i {0}; i < 32; ++i) {
        h[i] = i;
    }
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    cudaMemcpy(d, h.data(), 32 * sizeof(int),
               cudaMemcpyHostToDevice);
    trade<<<1, 32>>>({d, 32});
    cudaMemcpy(h.data(), d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", h[0], h[31]);
}
```

## Verdict 1
```cuda
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void trade(cuda::std::span<int> v)
{
    __shared__ int s[32];
    unsigned t {threadIdx.x};
    s[t] = v[t];
    __syncwarp();
    int a {s[t ^ 1]};
    s[t] = a;
    __syncwarp();
    v[t] = s[t ^ 2];
}

int main()
{
    std::vector<int> h(32);
    for (int i {0}; i < 32; ++i) {
        h[i] = i;
    }
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    cudaMemcpy(d, h.data(), 32 * sizeof(int),
               cudaMemcpyHostToDevice);
    trade<<<1, 32>>>({d, 32});
    cudaMemcpy(h.data(), d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", h[0], h[31]);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: racecheck

## Verdict 2
```cuda
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void trade(cuda::std::span<int> v)
{
    __shared__ int s[32];
    __shared__ int u[32];
    unsigned t {threadIdx.x};
    s[t] = v[t];
    __syncwarp();
    int a {s[t ^ 1]};
    u[t] = a;
    __syncwarp();
    v[t] = u[t ^ 2];
}

int main()
{
    std::vector<int> h(32);
    for (int i {0}; i < 32; ++i) {
        h[i] = i;
    }
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    cudaMemcpy(d, h.data(), 32 * sizeof(int),
               cudaMemcpyHostToDevice);
    trade<<<1, 32>>>({d, 32});
    cudaMemcpy(h.data(), d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", h[0], h[31]);
}
```
Answer: c++23 defined
Sanitizer: racecheck

## Alone 1
Form: sanitizer
Sanitizer: racecheck
Write a program that reads k and 32 integers, one for each lane of one warp of 32 threads.
In round r, for r from 0 to k − 1, lane i adds the value that lane i XOR 2^r held after the round before.
The lanes pass values to each other through one array of 32 ints in shared memory.
Print the 32 values after round k − 1.
Input: the first line holds k; the second line holds the 32 integers, for lanes 0 to 31.
Output: one line, the values of lanes 0 to 31 separated by spaces.
Limits: 1 ≤ k ≤ 5; each integer is between -1000 and 1000.
### Examples
```in
1
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
```
```out
1 1 5 5 9 9 13 13 17 17 21 21 25 25 29 29 33 33 37 37 41 41 45 45 49 49 53 53 57 57 61 61
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void butterfly(cuda::std::span<int> v, unsigned k)
{
    __shared__ int s[32];
    unsigned t {threadIdx.x};
    int x {v[t]};
    for (unsigned r {0}; r < k; ++r) {
        s[t] = x;
        __syncwarp();
        x += s[t ^ (1u << r)];
        __syncwarp();
    }
    v[t] = x;
}

int main()
{
    unsigned k {0};
    std::cin >> k;
    std::vector<int> h(32);
    for (int& x : h) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    cudaMemcpy(d, h.data(), 32 * sizeof(int),
               cudaMemcpyHostToDevice);
    butterfly<<<1, 32>>>({d, 32}, k);
    cudaMemcpy(h.data(), d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : h) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void butterfly(cuda::std::span<int> v, unsigned k)
{
    __shared__ int s[32];
    unsigned t {threadIdx.x};
    int x {v[t]};
    for (unsigned r {0}; r < k; ++r) {
        s[t] = x;
        __syncwarp();
        x += s[t ^ (1u << r)];
    }
    v[t] = x;
}

int main()
{
    unsigned k {0};
    std::cin >> k;
    std::vector<int> h(32);
    for (int& x : h) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    cudaMemcpy(d, h.data(), 32 * sizeof(int),
               cudaMemcpyHostToDevice);
    butterfly<<<1, 32>>>({d, 32}, k);
    cudaMemcpy(h.data(), d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : h) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1
-1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000
```
```in
5
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
```
```in
2
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
```
```in
3
5 -3 0 7 -8 2 9 -1 4 4 -6 3 0 0 1 -2 8 -7 6 5 -4 3 2 -1 0 9 -9 1 1 -5 7 2
```
```in
5
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
```
### Witness
```in
2
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
```

## Alone 2
Form: sanitizer
Sanitizer: racecheck
Write a program that reads n integers and prints their running sums: sum i is the sum of integers 0 to i.
One block of n threads does the work in one array of n ints in shared memory, thread i holding integer i.
Input: the first line holds n; the second line holds the n integers.
Output: one line, the n running sums separated by spaces.
Limits: 1 ≤ n ≤ 32; each integer is between -1000 and 1000.
### Examples
```in
3
1 2 3
```
```out
1 3 6
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void running(cuda::std::span<int> v)
{
    __shared__ int s[32];
    unsigned t {threadIdx.x};
    s[t] = v[t];
    __syncwarp();
    for (unsigned d {1}; d < blockDim.x; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncwarp();
        if (t >= d) {
            s[t] += add;
        }
        __syncwarp();
    }
    v[t] = s[t];
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> h(n);
    for (int& x : h) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    running<<<1, n>>>({d, h.size()});
    cudaMemcpy(h.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : h) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void running(cuda::std::span<int> v)
{
    __shared__ int s[32];
    unsigned t {threadIdx.x};
    s[t] = v[t];
    __syncwarp();
    for (unsigned d {1}; d < blockDim.x; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncwarp();
        if (t >= d) {
            s[t] += add;
        }
    }
    v[t] = s[t];
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> h(n);
    for (int& x : h) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    running<<<1, n>>>({d, h.size()});
    cudaMemcpy(h.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    for (int x : h) {
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
5 -7
```
```in
32
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
```
```in
7
3 -1 4 -1 5 -9 2
```
```in
16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
```
### Witness
```in
4
1 2 3 4
```
