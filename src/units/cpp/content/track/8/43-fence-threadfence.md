# 8.43 The fence call that equals __threadfence
Part: a fence: `cuda::atomic_thread_fence` against `__threadfence`
Clause: [atomics.fences], [intro.races], CUDA C++ Programming Guide: Memory Fence Functions, PTX ISA: Memory Consistency Model, Fence-SC and Release and Acquire Patterns, libcu++: cuda::atomic_thread_fence
After: 8.42
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Memory Fence Functions (__threadfence_block, __threadfence and __threadfence_system equal cuda::atomic_thread_fence with memory_order_seq_cst at block, device and system scope)

## Example
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void hand(cuda::std::span<int> data,
                     cuda::std::span<int> flag)
{
    cuda::atomic_ref<int, cuda::thread_scope_device> f {
        flag[0]};
    if (blockIdx.x == 0) {
        //: Write, fence at device scope, then raise a relaxed flag.
        data[0] = 42;
        __threadfence();
        f.store(1, cuda::memory_order_relaxed);
    } else {
        //: See the flag, then fence: the same as __threadfence.
        while (f.load(cuda::memory_order_relaxed) == 0) {
        }
        cuda::atomic_thread_fence(cuda::memory_order_seq_cst,
                                  cuda::thread_scope_device);
        data[1] = data[0] + 1;
    }
}

int main()
{
    //: Launch 2 blocks, which the device holds at once.
    int* data {nullptr};
    int* flag {nullptr};
    cudaMalloc(&data, 2 * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMemset(flag, 0, sizeof(int));
    hand<<<2, 1>>>({data, 2}, {flag, 1});
    int got {0};
    cudaMemcpy(&got, data + 1, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(flag);
    cudaFree(data);
    std::println("{}", got);
}
```

## Verdict 1
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void hand(cuda::std::span<int> data,
                     cuda::std::span<int> flag)
{
    cuda::atomic_ref<int, cuda::thread_scope_device> f {
        flag[0]};
    if (blockIdx.x == 0) {
        data[0] = 42;
        cuda::atomic_thread_fence(cuda::memory_order_release,
                                  cuda::thread_scope_device);
        f.store(1, cuda::memory_order_relaxed);
    } else {
        while (f.load(cuda::memory_order_relaxed) == 0) {
        }
        __threadfence();
        data[1] = data[0];
    }
}

int main()
{
    int* data {nullptr};
    int* flag {nullptr};
    cudaMalloc(&data, 2 * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMemset(flag, 0, sizeof(int));
    hand<<<2, 1>>>({data, 2}, {flag, 1});
    int got {0};
    cudaMemcpy(&got, data + 1, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(flag);
    cudaFree(data);
    std::println("{}", got);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void hand(cuda::std::span<int> data,
                     cuda::std::span<int> flag)
{
    cuda::atomic_ref<int, cuda::thread_scope_device> f {
        flag[0]};
    if (blockIdx.x == 0) {
        data[0] = 42;
        __threadfence_block();
        f.store(1, cuda::memory_order_relaxed);
    } else {
        while (f.load(cuda::memory_order_relaxed) == 0) {
        }
        __threadfence_block();
        data[1] = data[0];
    }
}

int main()
{
    int* data {nullptr};
    int* flag {nullptr};
    cudaMalloc(&data, 2 * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMemset(data, 0, 2 * sizeof(int));
    cudaMemset(flag, 0, sizeof(int));
    hand<<<2, 1>>>({data, 2}, {flag, 1});
    int got {0};
    cudaMemcpy(&got, data + 1, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(flag);
    cudaFree(data);
    std::println("{}", got);
}
```
Answer: c++23 undefined stored
Derivation 1: __threadfence_block is a seq_cst fence at block scope; the two fences run in two blocks, so neither's scope holds the other's thread, no fence pair synchronizes, and data[0]'s write and read race, undefined.
Derivation 2: A fence orders only the views of threads inside its scope; block 1 lies outside block 0's block-scope fence and the flag is relaxed, so nothing orders the write of 42 before the read, a data race, undefined.

## Alone 1
Form: orders
Sanitizer: memcheck
Orders:
- 1: fence release device
- 2: fence acquire device
Forbidden: 1, 2
Derivation 1: The flag's store and load are relaxed, so only a release fence before the store and an acquire fence after the load, each at a scope that holds both blocks, synchronize; relaxed or at block scope (as __threadfence_block), either fence orders nothing across blocks and block 1 may read the first integer from before block 0's write.
Derivation 2: A fence pair synchronizes through the relaxed flag only when both fences are morally strong with each other, which needs device scope for two blocks, and release and acquire are the weakest orders that do it; any one step weaker leaves the first integer's read unordered, so a total without block 0's sum is permitted.
Write a program that reads n integers and prints their sum, with 2 blocks of 1 thread each; the device holds both at once.
Block 0 adds the integers at even positions 0, 2, 4, …, writes its sum over the first integer, fences, then raises a flag with a relaxed store.
Block 1 adds the integers at odd positions, waits for the flag with relaxed loads, fences, then adds the first integer to its sum and writes the total out.
Type the order and the scope of each `cuda::atomic_thread_fence`.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
2
5 1
```
```out
6
```
```in
3
4 2 0
```
```out
6
```
### Reference
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sum(cuda::std::span<int> v,
                    cuda::std::span<int> flag,
                    cuda::std::span<int> out)
{
    cuda::atomic_ref<int, cuda::thread_scope_device> f {
        flag[0]};
    int part {0};
    if (blockIdx.x == 0) {
        for (std::size_t i {0}; i < v.size(); i += 2) {
            part += v[i];
        }
        v[0] = part;
        cuda::atomic_thread_fence(ORDER_1, SCOPE_1);
        f.store(1, cuda::memory_order_relaxed);
    } else {
        for (std::size_t i {1}; i < v.size(); i += 2) {
            part += v[i];
        }
        while (f.load(cuda::memory_order_relaxed) == 0) {
        }
        cuda::atomic_thread_fence(ORDER_2, SCOPE_2);
        out[0] = part + v[0];
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
    int* flag {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMalloc(&out, sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(flag, 0, sizeof(int));
    sum<<<2, 1>>>({d, v.size()}, {flag, 1}, {out, 1});
    int total {0};
    cudaMemcpy(&total, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(flag);
    cudaFree(d);
    std::println("{}", total);
}
```
### Wrong
Orders:
- 1: fence release device
- 2: fence acquire block
### Tests
```in
1
-1000
```
```in
4
1 2 3 4
```
```in
5
-1000 1000 -1000 1000 7
```
```in
6
0 0 0 0 0 9
```
### Witness
```in
4
10 20 30 40
```

## Alone 2
Form: orders
Sanitizer: memcheck
Orders:
- 1: fence release device
- 2: fence acquire device
Forbidden: 1, 2
Derivation 1: The flag is stored and loaded relaxed, so only a release fence in block 0 and an acquire fence in block 1, both at device scope since they sit in two blocks, order the doubling before block 1's reads; relaxed or at block scope, either fence leaves those reads free to see the integers not yet doubled.
Derivation 2: A fence pair synchronizes through a relaxed flag only when each fence is at least release (writer) or acquire (reader) and each scope holds the other thread; one step weaker on either fence and the reads of the even positions race with the doubling, so a sum with some integers counted once is permitted.
Write a program that reads n integers and prints the sum of the integers at odd positions plus twice the sum of those at even positions 0, 2, 4, …
Use 2 blocks of 1 thread each; the device holds both at once.
Block 0 doubles each integer at an even position in place, fences, then raises a flag with a relaxed store.
Block 1 adds the integers at odd positions, waits for the flag with relaxed loads, fences, then adds the integers at even positions and writes the total out.
Type the order and the scope of each `cuda::atomic_thread_fence`.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the total.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
4
0 3 0 4
```
```out
7
```
### Reference
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void weigh(cuda::std::span<int> v,
                      cuda::std::span<int> flag,
                      cuda::std::span<int> out)
{
    cuda::atomic_ref<int, cuda::thread_scope_device> f {
        flag[0]};
    if (blockIdx.x == 0) {
        for (std::size_t i {0}; i < v.size(); i += 2) {
            v[i] *= 2;
        }
        cuda::atomic_thread_fence(ORDER_1, SCOPE_1);
        f.store(1, cuda::memory_order_relaxed);
    } else {
        int total {0};
        for (std::size_t i {1}; i < v.size(); i += 2) {
            total += v[i];
        }
        while (f.load(cuda::memory_order_relaxed) == 0) {
        }
        cuda::atomic_thread_fence(ORDER_2, SCOPE_2);
        for (std::size_t i {0}; i < v.size(); i += 2) {
            total += v[i];
        }
        out[0] = total;
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
    int* flag {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMalloc(&out, sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(flag, 0, sizeof(int));
    weigh<<<2, 1>>>({d, v.size()}, {flag, 1}, {out, 1});
    int total {0};
    cudaMemcpy(&total, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(flag);
    cudaFree(d);
    std::println("{}", total);
}
```
### Wrong
Orders:
- 1: fence release device
- 2: fence acquire block
### Tests
```in
1
-1000
```
```in
2
1000 -1000
```
```in
5
1 1 1 1 1
```
```in
6
-3 5 0 7 2 -9
```
### Witness
```in
3
1 2 3
```
