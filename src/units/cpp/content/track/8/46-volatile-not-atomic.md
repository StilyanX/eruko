# 8.46 A volatile counter is not an atomic one
Part: `volatile` is not an atomic
Clause: CUDA C++ Programming Guide §18.5.3.3 Volatile Qualifier, CUDA C++ Programming Guide §10.14 Atomic Functions, [intro.races]
After: 8.45
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §18.5.3.3 Volatile Qualifier

## Example
```cuda
#include <print>
#include <cuda/std/span>

__global__ void count(cuda::std::span<int> out)
{
    //: Keep one counter in shared memory and set it to 0 once.
    __shared__ int total;
    if (threadIdx.x == 0) {
        total = 0;
    }
    __syncthreads();
    //: Add with atomicAdd, so the read, the add and the write are one step.
    atomicAdd(&total, 1);
    __syncthreads();
    //: Write the count out once every thread has added.
    if (threadIdx.x == 0) {
        out[0] = total;
    }
}

int main()
{
    //: Launch 64 threads; the count is 64 on every run.
    int* out {nullptr};
    cudaMalloc(&out, sizeof(int));
    count<<<1, 64>>>(cuda::std::span<int> {out, 1});
    int result {0};
    cudaMemcpy(&result, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", result);
}
```

## Verdict 1
```cuda
#include <print>
#include <cuda/std/span>

__global__ void count(cuda::std::span<int> out)
{
    volatile __shared__ int total;
    if (threadIdx.x == 0) {
        total = 0;
    }
    __syncthreads();
    total = total + 1;
    __syncthreads();
    if (threadIdx.x == 0) {
        out[0] = total;
    }
}

int main()
{
    int* out {nullptr};
    cudaMalloc(&out, sizeof(int));
    count<<<1, 64>>>(cuda::std::span<int> {out, 1});
    int result {0};
    cudaMemcpy(&result, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", result);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: racecheck

## Verdict 2
```cuda
#include <print>
#include <cuda/std/span>

__global__ void count(cuda::std::span<int> out)
{
    __shared__ int total;
    if (threadIdx.x == 0) {
        total = 0;
    }
    __syncthreads();
    atomicAdd(&total, 1);
    __syncthreads();
    if (threadIdx.x == 0) {
        out[0] = total;
    }
}

int main()
{
    int* out {nullptr};
    cudaMalloc(&out, sizeof(int));
    count<<<1, 64>>>(cuda::std::span<int> {out, 1});
    int result {0};
    cudaMemcpy(&result, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", result);
}
```
Answer: c++23 defined
Sanitizer: racecheck

## Alone 1
Form: sanitizer
Sanitizer: racecheck
Write a program that reads n and k and launches one block of n threads.
Thread i adds one to a counter in shared memory when i is a multiple of k.
Thread 0 then writes the counter out, and the program prints it.
Input: one line, n and k.
Output: one line, the count.
Limits: 1 ≤ n ≤ 1024; 1 ≤ k ≤ 1024.
### Examples
```in
5 7
```
```out
1
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <cuda/std/span>

__global__ void count(cuda::std::span<int> out, unsigned k)
{
    __shared__ int total;
    if (threadIdx.x == 0) {
        total = 0;
    }
    __syncthreads();
    if (threadIdx.x % k == 0) {
        atomicAdd(&total, 1);
    }
    __syncthreads();
    if (threadIdx.x == 0) {
        out[0] = total;
    }
}

int main()
{
    unsigned n {0};
    unsigned k {0};
    std::cin >> n >> k;
    int* out {nullptr};
    cudaMalloc(&out, sizeof(int));
    count<<<1, n>>>(cuda::std::span<int> {out, 1}, k);
    int result {0};
    cudaMemcpy(&result, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", result);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <cuda/std/span>

__global__ void count(cuda::std::span<int> out, unsigned k)
{
    volatile __shared__ int total;
    if (threadIdx.x == 0) {
        total = 0;
    }
    __syncthreads();
    if (threadIdx.x % k == 0) {
        total = total + 1;
    }
    __syncthreads();
    if (threadIdx.x == 0) {
        out[0] = total;
    }
}

int main()
{
    unsigned n {0};
    unsigned k {0};
    std::cin >> n >> k;
    int* out {nullptr};
    cudaMalloc(&out, sizeof(int));
    count<<<1, n>>>(cuda::std::span<int> {out, 1}, k);
    int result {0};
    cudaMemcpy(&result, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", result);
}
```
### Tests
```in
1 1
```
```in
1024 3
```
```in
1024 1024
```
```in
1000 32
```
```in
64 1
```
### Witness
```in
64 2
```

## Alone 2
Form: run
Write a program that reads n and launches ⌈n/256⌉ blocks of 256 threads.
For each i below n, thread i adds one to counter i mod 4 of four counters in global memory.
Print the four counters.
Input: one line, n.
Output: one line, counters 0 to 3 separated by spaces.
Limits: 1 ≤ n ≤ 100000.
### Examples
```in
3
```
```out
1 1 1 0
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void tally(cuda::std::span<unsigned> bins,
           unsigned n)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < n) {
        atomicAdd(&bins[i % 4], 1u);
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    unsigned* bins {nullptr};
    cudaMalloc(&bins, 4 * sizeof(unsigned));
    cudaMemset(bins, 0, 4 * sizeof(unsigned));
    tally<<<(n + 255) / 256, 256>>>(
        cuda::std::span<unsigned> {bins, 4}, n);
    std::vector<unsigned> host(4);
    cudaMemcpy(host.data(), bins, 4 * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(bins);
    std::println("{} {} {} {}", host[0], host[1], host[2],
                 host[3]);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>
#include <cuda/std/span>

__global__ void tally(cuda::std::span<unsigned> bins,
           unsigned n)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < n) {
        volatile unsigned* bin {&bins[i % 4]};
        *bin = *bin + 1;
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    unsigned* bins {nullptr};
    cudaMalloc(&bins, 4 * sizeof(unsigned));
    cudaMemset(bins, 0, 4 * sizeof(unsigned));
    tally<<<(n + 255) / 256, 256>>>(
        cuda::std::span<unsigned> {bins, 4}, n);
    std::vector<unsigned> host(4);
    cudaMemcpy(host.data(), bins, 4 * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(bins);
    std::println("{} {} {} {}", host[0], host[1], host[2],
                 host[3]);
}
```
### Tests
```in
1
```
```in
4
```
```in
257
```
```in
100000
```
```in
1000
```
### Witness
```in
8
```
