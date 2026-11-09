# 8.09 The block size that fits the most blocks on a multiprocessor
Part: the block size, among stated sizes, that gives the most blocks per multiprocessor for a kernel's registers and shared bytes
Clause: CUDA C++ Programming Guide §8.2.3.1, CUDA C++ Programming Guide §8.2.3, CUDA C++ Programming Guide §20.2
After: 8.08
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §8.2.3.1 Occupancy Calculator

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Write a kernel that takes 32 shared bytes for each thread.
__global__ void work(cuda::std::span<float> out)
{
    extern __shared__ float tile[];
    tile[threadIdx.x] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = tile[blockDim.x - 1 - threadIdx.x];
}

int main()
{
    //: Ask about each size, with its own shared bytes.
    int sizes[] {64, 128, 256, 512};
    int best {0};
    int most {0};
    for (int b : sizes) {
        int n {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
            b, 32 * b);
        //: Keep the size with most blocks, the larger on a tie.
        if (n >= most) {
            most = n;
            best = b;
        }
    }
    std::println("{} {}", best, most);
}
```

## Verdict 1
```cuda
#include <print>

__global__ void work(float* out)
{
    extern __shared__ float tile[];
    tile[threadIdx.x] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = tile[blockDim.x - 1 - threadIdx.x];
}

int main()
{
    int sizes[] {128, 256, 512};
    int best {0};
    int most {0};
    for (int b : sizes) {
        int n {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
            b, 0);
        if (n > most) {
            most = n;
            best = b;
        }
    }
    std::println("{}", best);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <print>

template <int B>
__global__ void __launch_bounds__(B) work(float* out)
{
    out[threadIdx.x] = B;
}

int main()
{
    int n {0};
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
                                                  256, 0);
    std::println("{}", n);
}
```
Answer: c++23 ill-formed 12

## Alone 1
Form: run
Write a program with a kernel `work(cuda::std::span<float> out)` that uses a shared float array `tile` whose bytes come at launch.
Each thread writes threadIdx.x to tile[threadIdx.x], waits at `__syncthreads`, then writes tile[blockDim.x − 1 − threadIdx.x] to out[threadIdx.x].
A launch with blocks of b threads gives each block p · b shared bytes. Read p and a list of block sizes.
Print the size that fits the most blocks on one multiprocessor at once, and that count; on a tie, the largest such size.
Use cudaOccupancyMaxActiveBlocksPerMultiprocessor.
Input: the first line holds p and m; the second holds m block sizes in increasing order.
Output: one line, the size and its blocks per multiprocessor.
Limits: 0 ≤ p ≤ 40; 1 ≤ m ≤ 32; each size is a multiple of 32 from 32 to 1024.
### Examples
```in
0 3
64 128 256
```
```out
64 24
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void work(cuda::std::span<float> out)
{
    extern __shared__ float tile[];
    tile[threadIdx.x] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = tile[blockDim.x - 1 - threadIdx.x];
}

int main()
{
    std::size_t p {0};
    int m {0};
    std::cin >> p >> m;
    int best {0};
    int most {0};
    for (int i {0}; i < m; ++i) {
        int b {32};
        std::cin >> b;
        int n {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
            b, p * b);
        if (n >= most) {
            most = n;
            best = b;
        }
    }
    std::println("{} {}", best, most);
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void work(cuda::std::span<float> out)
{
    extern __shared__ float tile[];
    tile[threadIdx.x] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = tile[blockDim.x - 1 - threadIdx.x];
}

int main()
{
    std::size_t p {0};
    int m {0};
    std::cin >> p >> m;
    int best {0};
    int most {0};
    for (int i {0}; i < m; ++i) {
        int b {32};
        std::cin >> b;
        int n {0};
        cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
            b, p);
        if (n >= most) {
            most = n;
            best = b;
        }
    }
    std::println("{} {}", best, most);
}
```
### Tests
```in
0 1
1024
```
```in
0 5
32 64 96 128 256
```
```in
40 4
32 64 128 1024
```
```in
16 3
256 512 1024
```
```in
8 6
32 64 96 128 160 192
```
### Witness
```in
64 3
32 64 128
```

## Alone 2
Form: run
Write a program that reads r, s and a list of block sizes, for a kernel whose threads take r registers each and whose blocks take s shared bytes each.
Print the size that fits the most blocks on one multiprocessor of this device at once, and that count; on a tie, the largest such size.
Read the device's numbers with cudaGetDeviceProperties. A block takes ⌈t/32⌉ warps for t threads.
Registers go to each warp in whole units of 256, and the warps that fit by registers are rounded down to a multiple of 4.
Shared bytes go to each block in whole units of 128, plus the bytes the device reserves for each block.
Threads per multiprocessor and blocks per multiprocessor are limits too; the blocks that fit are the least of the four limits.
Input: the first line holds r, s and m; the second holds m block sizes in increasing order.
Output: one line, the size and its blocks per multiprocessor.
Limits: 1 ≤ r ≤ 255; 0 ≤ s ≤ 48000; 1 ≤ m ≤ 32; each size is a multiple of 32 from 32 to 1024; r times each size is at most 65536.
### Examples
```in
32 8192 3
128 256 512
```
```out
128 11
```
### Reference
```cuda
#include <algorithm>
#include <iostream>
#include <print>

int blocks(int r, int s, int t, const cudaDeviceProp& p)
{
    int warps {(t + 31) / 32};
    int byThreads {p.maxThreadsPerMultiProcessor / 32 / warps};
    int perWarp {(r * 32 + 255) / 256 * 256};
    int regWarps {p.regsPerMultiprocessor / perWarp / 4 * 4};
    int byRegs {regWarps / warps};
    int kept {static_cast<int>(p.reservedSharedMemPerBlock)};
    int perBlock {(s + 127) / 128 * 128 + kept};
    int shared {static_cast<int>(p.sharedMemPerMultiprocessor)};
    int bySmem {shared / perBlock};
    int most {p.maxBlocksPerMultiProcessor};
    return std::min({most, byThreads, byRegs, bySmem});
}

int main()
{
    int r {1};
    int s {0};
    int m {0};
    std::cin >> r >> s >> m;
    cudaDeviceProp p {};
    cudaGetDeviceProperties(&p, 0);
    int best {0};
    int most {0};
    for (int i {0}; i < m; ++i) {
        int b {32};
        std::cin >> b;
        int n {blocks(r, s, b, p)};
        if (n >= most) {
            most = n;
            best = b;
        }
    }
    std::println("{} {}", best, most);
}
```
### Wrong
```cuda
#include <algorithm>
#include <iostream>
#include <print>

int blocks(int r, int s, int t, const cudaDeviceProp& p)
{
    int warps {(t + 31) / 32};
    int byThreads {p.maxThreadsPerMultiProcessor / 32 / warps};
    int perWarp {(r * 32 + 255) / 256 * 256};
    int regWarps {p.regsPerMultiprocessor / perWarp / 4 * 4};
    int byRegs {regWarps / warps};
    int kept {static_cast<int>(p.reservedSharedMemPerBlock)};
    int perBlock {(s + 127) / 128 * 128 + kept};
    int shared {static_cast<int>(p.sharedMemPerMultiprocessor)};
    int bySmem {shared / perBlock};
    int most {byThreads};
    return std::min({most, byThreads, byRegs, bySmem});
}

int main()
{
    int r {1};
    int s {0};
    int m {0};
    std::cin >> r >> s >> m;
    cudaDeviceProp p {};
    cudaGetDeviceProperties(&p, 0);
    int best {0};
    int most {0};
    for (int i {0}; i < m; ++i) {
        int b {32};
        std::cin >> b;
        int n {blocks(r, s, b, p)};
        if (n >= most) {
            most = n;
            best = b;
        }
    }
    std::println("{} {}", best, most);
}
```
### Tests
```in
1 0 1
1024
```
```in
255 0 1
256
```
```in
48 8192 4
32 64 96 128
```
```in
40 4096 5
64 128 256 512 1024
```
```in
16 0 6
32 64 96 128 192 256
```
### Witness
```in
16 0 2
32 64
```
