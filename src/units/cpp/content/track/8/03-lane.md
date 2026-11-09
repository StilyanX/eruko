# 8.03 The lane of a thread in its warp
Part: the lane of a thread in its warp
Clause: CUDA C++ Programming Guide §7.1, CUDA C++ Programming Guide §5.2
After: 8.01, 8.02
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §7.1 SIMT Architecture

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Take the thread's place in its block modulo the warp size.
__global__ void lanes(cuda::std::span<unsigned> out)
{
    out[threadIdx.x] = threadIdx.x % warpSize;
}

int main()
{
    //: Launch one block of 40 threads: a full warp and 8 more.
    unsigned n {40};
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    lanes<<<1, n>>>(cuda::std::span<unsigned> {out, n});
    //: Print the lanes; the second warp starts again at 0.
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

__global__ void mark(unsigned* out)
{
    __shared__ unsigned seen[32];
    seen[threadIdx.x % 32] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = seen[threadIdx.x % 32];
}

int main()
{
    unsigned* out {nullptr};
    cudaMalloc(&out, 32 * sizeof(unsigned));
    mark<<<1, 32>>>(out);
    unsigned last {0};
    cudaMemcpy(&last, out + 31, sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", last);
}
```
Answer: c++23 defined
Sanitizer: racecheck

## Verdict 2
```cuda
#include <print>

__global__ void mark(unsigned* out)
{
    __shared__ unsigned seen[32];
    seen[threadIdx.x % 32] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = seen[threadIdx.x % 32];
}

int main()
{
    unsigned* out {nullptr};
    cudaMalloc(&out, 64 * sizeof(unsigned));
    mark<<<1, 64>>>(out);
    unsigned last {0};
    cudaMemcpy(&last, out + 63, sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", last);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: racecheck

## Alone 1
Form: run
Write a program that reads n and b and launches a kernel on ⌈n/b⌉ blocks of b threads.
For each global index i below n, print the lane of thread i in its warp.
Input: one line, n and b.
Output: one line, n numbers separated by spaces.
Limits: 1 ≤ n ≤ 1000; 1 ≤ b ≤ 1024.
### Examples
```in
40 32
```
```out
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 0 1 2 3 4 5 6 7
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void lanes(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < out.size()) {
        out[i] = threadIdx.x % warpSize;
    }
}

int main()
{
    unsigned n {0};
    unsigned b {0};
    std::cin >> n >> b;
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    lanes<<<(n + b - 1) / b, b>>>(view);
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

__global__ void lanes(cuda::std::span<unsigned> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < out.size()) {
        out[i] = i % warpSize;
    }
}

int main()
{
    unsigned n {0};
    unsigned b {0};
    std::cin >> n >> b;
    unsigned* out {nullptr};
    cudaMalloc(&out, n * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, n};
    lanes<<<(n + b - 1) / b, b>>>(view);
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
100 33
```
```in
1000 20
```
```in
70 64
```
### Witness
```in
50 48
```

## Alone 2
Form: run
Write a program that reads bx and by and launches one block of bx by by threads.
For each lane from 0 to 31, print how many threads of the block have that lane in their warp.
Input: one line, bx and by.
Output: one line, 32 numbers separated by spaces, for lanes 0 to 31 in order.
Limits: 1 ≤ bx; 1 ≤ by; bx · by ≤ 1024.
### Examples
```in
32 2
```
```out
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void tally(cuda::std::span<unsigned> count)
{
    unsigned t {threadIdx.y * blockDim.x + threadIdx.x};
    atomicAdd(&count[t % warpSize], 1u);
}

int main()
{
    unsigned bx {0};
    unsigned by {0};
    std::cin >> bx >> by;
    unsigned* count {nullptr};
    cudaMalloc(&count, 32 * sizeof(unsigned));
    cudaMemset(count, 0, 32 * sizeof(unsigned));
    cuda::std::span<unsigned> view {count, 32};
    tally<<<1, dim3 {bx, by}>>>(view);
    std::vector<unsigned> host(32);
    cudaMemcpy(host.data(), count, 32 * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(count);
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

__global__ void tally(cuda::std::span<unsigned> count)
{
    unsigned t {threadIdx.x};
    atomicAdd(&count[t % warpSize], 1u);
}

int main()
{
    unsigned bx {0};
    unsigned by {0};
    std::cin >> bx >> by;
    unsigned* count {nullptr};
    cudaMalloc(&count, 32 * sizeof(unsigned));
    cudaMemset(count, 0, 32 * sizeof(unsigned));
    cuda::std::span<unsigned> view {count, 32};
    tally<<<1, dim3 {bx, by}>>>(view);
    std::vector<unsigned> host(32);
    cudaMemcpy(host.data(), count, 32 * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(count);
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
32 32
```
```in
33 3
```
```in
16 2
```
```in
100 10
```
### Witness
```in
8 8
```
