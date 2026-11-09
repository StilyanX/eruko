# 8.04 The warp of a thread in a block of a stated shape
Part: the warp of a thread in a block of a stated shape
Clause: CUDA C++ Programming Guide §7.1, CUDA C++ Programming Guide §5.2
After: 8.02, 8.03
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §7.1 SIMT Architecture

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

//: Number the thread x + y times the width, as the guide does.
__global__ void warps(cuda::std::span<unsigned> out)
{
    unsigned t {threadIdx.y * blockDim.x + threadIdx.x};
    //: Divide that number by the warp size to find its warp.
    out[t] = t / warpSize;
}

int main()
{
    //: Launch one block 16 threads wide and 4 rows high.
    unsigned bx {16};
    unsigned by {4};
    unsigned* out {nullptr};
    cudaMalloc(&out, bx * by * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, bx * by};
    warps<<<1, dim3 {bx, by}>>>(view);
    //: Print the warps row by row; two rows share one warp.
    std::vector<unsigned> host(bx * by);
    cudaMemcpy(host.data(), out, bx * by * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned y {0}; y < by; ++y) {
        for (unsigned x {0}; x < bx; ++x) {
            std::print("{} ", host[y * bx + x]);
        }
        std::println();
    }
}
```

## Verdict 1
```cuda
#include <print>

__global__ void heads(unsigned* out)
{
    unsigned t {threadIdx.y * blockDim.x + threadIdx.x};
    if (t % warpSize == 0) {
        out[t / warpSize] = t;
    }
}

int main()
{
    dim3 block {16, 3};
    unsigned threads {block.x * block.y};
    unsigned count {(threads + 31) / 32};
    unsigned* out {nullptr};
    cudaMalloc(&out, count * sizeof(unsigned));
    heads<<<1, block>>>(out);
    unsigned last {0};
    cudaMemcpy(&last, out + count - 1, sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", last);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <print>

__global__ void heads(unsigned* out)
{
    unsigned t {threadIdx.y * blockDim.x + threadIdx.x};
    if (t % warpSize == 0) {
        out[t / warpSize] = t;
    }
}

int main()
{
    dim3 block {16, 3};
    unsigned threads {block.x * block.y};
    unsigned count {threads / 32};
    unsigned* out {nullptr};
    cudaMalloc(&out, count * sizeof(unsigned));
    heads<<<1, block>>>(out);
    unsigned last {0};
    cudaMemcpy(&last, out + count - 1, sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    std::println("{}", last);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads bx and by and launches one block bx threads wide and by rows high.
Print the warp of each thread of the block.
Input: one line, bx and by.
Output: by lines of bx numbers, separated by spaces; line y holds the threads of row y, from x = 0 up.
Limits: 1 ≤ bx; 1 ≤ by; bx · by ≤ 1024.
### Examples
```in
32 2
```
```out
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void warps(cuda::std::span<unsigned> out)
{
    unsigned t {threadIdx.y * blockDim.x + threadIdx.x};
    out[t] = t / warpSize;
}

int main()
{
    unsigned bx {0};
    unsigned by {0};
    std::cin >> bx >> by;
    unsigned* out {nullptr};
    cudaMalloc(&out, bx * by * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, bx * by};
    warps<<<1, dim3 {bx, by}>>>(view);
    std::vector<unsigned> host(bx * by);
    cudaMemcpy(host.data(), out, bx * by * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned y {0}; y < by; ++y) {
        for (unsigned x {0}; x < bx; ++x) {
            std::print("{} ", host[y * bx + x]);
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

__global__ void warps(cuda::std::span<unsigned> out)
{
    unsigned t {threadIdx.y * blockDim.x + threadIdx.x};
    out[t] = threadIdx.y * ((blockDim.x + 31) / 32)
             + threadIdx.x / 32;
}

int main()
{
    unsigned bx {0};
    unsigned by {0};
    std::cin >> bx >> by;
    unsigned* out {nullptr};
    cudaMalloc(&out, bx * by * sizeof(unsigned));
    cuda::std::span<unsigned> view {out, bx * by};
    warps<<<1, dim3 {bx, by}>>>(view);
    std::vector<unsigned> host(bx * by);
    cudaMemcpy(host.data(), out, bx * by * sizeof(unsigned),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    for (unsigned y {0}; y < by; ++y) {
        for (unsigned x {0}; x < bx; ++x) {
            std::print("{} ", host[y * bx + x]);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
```
```in
1024 1
```
```in
1 1024
```
```in
48 3
```
```in
33 2
```
### Witness
```in
16 4
```

## Alone 2
Form: run
Write a program that reads bx, by and bz and launches one block of bx by by by bz threads.
For each warp of the block, print how many of the block's threads it holds.
Input: one line, bx, by and bz.
Output: one line, one number for each warp from warp 0 up, separated by spaces.
Limits: 1 ≤ bx; 1 ≤ by; 1 ≤ bz ≤ 64; bx · by · bz ≤ 1024.
### Examples
```in
20 3 1
```
```out
32 28
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void tally(cuda::std::span<unsigned> count)
{
    unsigned plane {threadIdx.z * blockDim.y + threadIdx.y};
    unsigned t {plane * blockDim.x + threadIdx.x};
    atomicAdd(&count[t / warpSize], 1u);
}

int main()
{
    unsigned bx {0};
    unsigned by {0};
    unsigned bz {0};
    std::cin >> bx >> by >> bz;
    unsigned warps {(bx * by * bz + 31) / 32};
    unsigned* count {nullptr};
    cudaMalloc(&count, warps * sizeof(unsigned));
    cudaMemset(count, 0, warps * sizeof(unsigned));
    cuda::std::span<unsigned> view {count, warps};
    tally<<<1, dim3 {bx, by, bz}>>>(view);
    std::vector<unsigned> host(warps);
    cudaMemcpy(host.data(), count, warps * sizeof(unsigned),
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
    unsigned plane {threadIdx.y};
    unsigned t {plane * blockDim.x + threadIdx.x};
    atomicAdd(&count[t / warpSize], 1u);
}

int main()
{
    unsigned bx {0};
    unsigned by {0};
    unsigned bz {0};
    std::cin >> bx >> by >> bz;
    unsigned warps {(bx * by * bz + 31) / 32};
    unsigned* count {nullptr};
    cudaMalloc(&count, warps * sizeof(unsigned));
    cudaMemset(count, 0, warps * sizeof(unsigned));
    cuda::std::span<unsigned> view {count, warps};
    tally<<<1, dim3 {bx, by, bz}>>>(view);
    std::vector<unsigned> host(warps);
    cudaMemcpy(host.data(), count, warps * sizeof(unsigned),
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
1 1 1
```
```in
32 32 1
```
```in
4 4 64
```
```in
10 10 10
```
```in
3 5 7
```
### Witness
```in
8 2 4
```
