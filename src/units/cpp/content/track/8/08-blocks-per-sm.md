# 8.08 The blocks per multiprocessor
Part: the blocks per multiprocessor from registers, shared bytes and threads per block, by the formula and by `cudaOccupancyMaxActiveBlocksPerMultiprocessor`
Clause: CUDA C++ Programming Guide §8.2.3.1, CUDA C++ Programming Guide §7.2, CUDA C++ Programming Guide §20.2
After: 8.05
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §8.2.3.1 Occupancy Calculator

## Example
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <print>

//: Write a small kernel whose shared bytes come at launch.
__global__ void work(cuda::std::span<float> out)
{
    extern __shared__ float tile[];
    tile[threadIdx.x] = threadIdx.x;
    __syncthreads();
    out[threadIdx.x] = tile[blockDim.x - 1 - threadIdx.x];
}

//: Take the least of the four limits.
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
    //: Read the device and the kernel's registers.
    cudaDeviceProp p {};
    cudaGetDeviceProperties(&p, 0);
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, work);
    //: Ask for blocks of 128 threads with 8192 shared bytes.
    int byCall {0};
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&byCall, work,
                                                  128, 8192);
    //: Print both counts; the shared bytes bind here.
    std::println("{} {}", blocks(attr.numRegs, 8192, 128, p),
                 byCall);
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
    int few {0};
    int many {0};
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&few, work,
                                                  256, 0);
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&many, work,
                                                  64, 0);
    std::println("{}", few <= many);
}
```
Answer: c++23 defined

## Verdict 2
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
    int n {0};
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
                                                  256);
    std::println("{}", n);
}
```
Answer: c++23 ill-formed 14

## Alone 1
Form: run
Write a program with a kernel `work(cuda::std::span<float> out)` that uses a shared float array `tile` whose bytes come at launch.
Each thread writes threadIdx.x to tile[threadIdx.x], waits at `__syncthreads`, then writes tile[blockDim.x − 1 − threadIdx.x] to out[threadIdx.x].
Read t and s and print how many blocks of t threads, each with s shared bytes, fit on one multiprocessor at once.
Use cudaOccupancyMaxActiveBlocksPerMultiprocessor.
Input: one line, t and s.
Output: one line, the blocks per multiprocessor.
Limits: t is a multiple of 32, 32 ≤ t ≤ 1024; 0 ≤ s ≤ 48000.
### Examples
```in
256 0
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
    int t {32};
    std::size_t s {0};
    std::cin >> t >> s;
    int n {0};
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
                                                  t, s);
    std::println("{}", n);
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
    int t {32};
    std::size_t s {0};
    std::cin >> t >> s;
    int n {0};
    cudaOccupancyMaxActiveBlocksPerMultiprocessor(&n, work,
                                                  t, 0);
    std::println("{}", n);
}
```
### Tests
```in
32 0
```
```in
1024 48000
```
```in
128 8192
```
```in
64 20000
```
```in
96 4096
```
### Witness
```in
64 8192
```

## Alone 2
Form: run
Write a program that reads r, s and t and prints how many blocks of t threads fit on one multiprocessor of this device at once, when each thread takes r registers and each block s shared bytes.
Read the device's numbers with cudaGetDeviceProperties. A block takes ⌈t/32⌉ warps.
Registers go to each warp in whole units of 256, and the warps that fit by registers are rounded down to a multiple of 4.
Shared bytes go to each block in whole units of 128, plus the bytes the device reserves for each block.
Threads per multiprocessor and blocks per multiprocessor are limits too; the answer is the least of the four limits.
Input: one line, r, s and t.
Output: one line, the blocks per multiprocessor.
Limits: 1 ≤ r ≤ 255; 0 ≤ s ≤ 49152; t is a multiple of 32, 32 ≤ t ≤ 1024; r · t ≤ 65536.
### Examples
```in
32 0 256
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
    int t {32};
    std::cin >> r >> s >> t;
    cudaDeviceProp p {};
    cudaGetDeviceProperties(&p, 0);
    std::println("{}", blocks(r, s, t, p));
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
    int perWarp {r * 32};
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
    int t {32};
    std::cin >> r >> s >> t;
    cudaDeviceProp p {};
    cudaGetDeviceProperties(&p, 0);
    std::println("{}", blocks(r, s, t, p));
}
```
### Tests
```in
1 0 32
```
```in
255 0 32
```
```in
64 49152 1024
```
```in
48 8192 64
```
```in
72 0 448
```
### Witness
```in
41 0 256
```
