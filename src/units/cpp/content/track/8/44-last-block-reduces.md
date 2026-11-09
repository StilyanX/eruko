# 8.44 The last block to arrive adds the sums of the others
Part: the last block to arrive reduces the partial sums of the others, through a counter and a fence
Clause: [atomics.order], [atomics.fences], [intro.races], PTX ISA: Memory Consistency Model, Release and Acquire Patterns, CUDA C++ Programming Guide: Memory Fence Functions, libcu++: cuda::atomic_ref, cuda::atomic_thread_fence
After: 8.43
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Memory Fence Functions (the sum of an array in one launch: each block stores its partial sum, the last block to arrive at a counter adds them)

## Example
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void sum(cuda::std::span<int> part,
                    cuda::std::span<int> counter,
                    cuda::std::span<int> out)
{
    //: Store this block's partial sum.
    unsigned b {blockIdx.x};
    part[b] = static_cast<int>(b) + 1;
    //: Count the block in with a release.
    cuda::atomic_ref<int, cuda::thread_scope_device> count {
        counter[0]};
    int arrived {
        count.fetch_add(1, cuda::memory_order_release)};
    //: The last to arrive fences with acquire, then adds.
    if (arrived == static_cast<int>(gridDim.x) - 1) {
        cuda::atomic_thread_fence(cuda::memory_order_acquire,
                                  cuda::thread_scope_device);
        int total {0};
        for (int x : part) {
            total += x;
        }
        out[0] = total;
    }
}

int main()
{
    //: Launch 4 blocks, which the device holds at once.
    int* part {nullptr};
    int* counter {nullptr};
    int* out {nullptr};
    cudaMalloc(&part, 4 * sizeof(int));
    cudaMalloc(&counter, sizeof(int));
    cudaMalloc(&out, sizeof(int));
    cudaMemset(counter, 0, sizeof(int));
    sum<<<4, 1>>>({part, 4}, {counter, 1}, {out, 1});
    int total {0};
    cudaMemcpy(&total, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(counter);
    cudaFree(part);
    std::println("{}", total);
}
```

## Verdict 1
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void sum(cuda::std::span<int> part,
                    cuda::std::span<int> counter,
                    cuda::std::span<int> out)
{
    unsigned b {blockIdx.x};
    part[b] = 10;
    cuda::atomic_ref<int, cuda::thread_scope_device> count {
        counter[0]};
    int arrived {
        count.fetch_add(1, cuda::memory_order_release)};
    if (arrived == static_cast<int>(gridDim.x) - 1) {
        cuda::atomic_thread_fence(cuda::memory_order_acquire,
                                  cuda::thread_scope_device);
        int total {0};
        for (int x : part) {
            total += x;
        }
        out[0] = total;
    }
}

int main()
{
    int* part {nullptr};
    int* counter {nullptr};
    int* out {nullptr};
    cudaMalloc(&part, 4 * sizeof(int));
    cudaMalloc(&counter, sizeof(int));
    cudaMalloc(&out, sizeof(int));
    cudaMemset(counter, 0, sizeof(int));
    sum<<<4, 1>>>({part, 4}, {counter, 1}, {out, 1});
    int total {0};
    cudaMemcpy(&total, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(counter);
    cudaFree(part);
    std::println("{}", total);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void sum(cuda::std::span<int> part,
                    cuda::std::span<int> counter,
                    cuda::std::span<int> out)
{
    unsigned b {blockIdx.x};
    part[b] = 10;
    cuda::atomic_ref<int, cuda::thread_scope_device> count {
        counter[0]};
    int arrived {
        count.fetch_add(1, cuda::memory_order_release)};
    if (arrived == static_cast<int>(gridDim.x) - 1) {
        cuda::atomic_thread_fence(cuda::memory_order_acquire,
                                  cuda::thread_scope_block);
        int total {0};
        for (int x : part) {
            total += x;
        }
        out[0] = total;
    }
}

int main()
{
    int* part {nullptr};
    int* counter {nullptr};
    int* out {nullptr};
    cudaMalloc(&part, 4 * sizeof(int));
    cudaMalloc(&counter, sizeof(int));
    cudaMalloc(&out, sizeof(int));
    cudaMemset(counter, 0, sizeof(int));
    sum<<<4, 1>>>({part, 4}, {counter, 1}, {out, 1});
    int total {0};
    cudaMemcpy(&total, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(counter);
    cudaFree(part);
    std::println("{}", total);
}
```
Answer: c++23 undefined stored
Derivation 1: The last block's fence is at block scope, so it is not morally strong with the other blocks' release fetch_adds; no acquire pattern meets their release, and its reads of their part[b] race with their writes, undefined.
Derivation 2: An acquire fence orders the last block after another block's release only when its scope holds that block; at block scope it holds only itself, so reading the other three sums is unordered with their stores, a data race, undefined.

## Alone 1
Form: orders
Sanitizer: memcheck
Orders:
- 1: rmw release device
- 2: fence acquire device
Forbidden: 1, 2
Derivation 1: Each block's partial sum reaches the last block only through a release on the counter's fetch_add and an acquire fence after it, both at device scope since the blocks differ; with the fetch_add relaxed or at block scope, or the fence relaxed or at block scope, the last block may read a first integer from before another block wrote its sum there, and the total is wrong.
Derivation 2: The release rmw and the acquire fence form a release and an acquire pattern that synchronize when the fence's block reads the counter value the other's rmw wrote and both scopes hold both blocks; one step weaker on either and the plain write of a block's sum and the last block's plain read are unordered, a race that permits the integer from before.
Write a program that reads g and n integers and prints their sum, with g blocks of 1 thread each; the device holds them all at once.
Block b adds the integers at positions b, b + g, b + 2g, …, writes its sum over the integer at position b, then adds 1 to a counter.
The block that finds g − 1 in the counter arrives last: it fences, then adds the integers at positions 0 to g − 1 and writes the total out.
Type the order and the scope of the counter's `fetch_add` and of the last block's `cuda::atomic_thread_fence`.
Input: one line, g and n; then one line, n integers separated by spaces.
Output: one line, the sum.
Limits: 1 ≤ g ≤ 8; g ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
2 2
3 4
```
```out
7
```
```in
3 3
-1 0 5
```
```out
4
```
### Reference
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sum(cuda::std::span<int> v,
                    cuda::std::span<int> counter,
                    cuda::std::span<int> out)
{
    std::size_t b {blockIdx.x};
    std::size_t g {gridDim.x};
    int part {0};
    for (std::size_t i {b}; i < v.size(); i += g) {
        part += v[i];
    }
    v[b] = part;
    cuda::atomic_ref<int, SCOPE_1> count {counter[0]};
    int arrived {count.fetch_add(1, ORDER_1)};
    if (arrived == static_cast<int>(g) - 1) {
        cuda::atomic_thread_fence(ORDER_2, SCOPE_2);
        int total {0};
        for (std::size_t i {0}; i < g; ++i) {
            total += v[i];
        }
        out[0] = total;
    }
}

int main()
{
    int g {0};
    int n {0};
    std::cin >> g >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    int* counter {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&counter, sizeof(int));
    cudaMalloc(&out, sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(counter, 0, sizeof(int));
    sum<<<g, 1>>>({d, v.size()}, {counter, 1}, {out, 1});
    int total {0};
    cudaMemcpy(&total, out, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(counter);
    cudaFree(d);
    std::println("{}", total);
}
```
### Wrong
Orders:
- 1: rmw release device
- 2: fence acquire block
### Tests
```in
1 1
-1000
```
```in
1 5
1 2 3 4 5
```
```in
8 8
1 2 3 4 5 6 7 8
```
```in
4 10
1000 -1000 7 0 3 3 3 3 -5 9
```
```in
8 20
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
### Witness
```in
2 4
1 2 3 4
```

## Alone 2
Form: orders
Sanitizer: memcheck
Orders:
- 1: rmw release device
- 2: fence acquire device
Forbidden: 1, 2
Derivation 1: The last block reads every other block's sum only after a release on the counter's fetch_add and its own acquire fence, both at device scope; relaxing either, or narrowing either to block scope, leaves those reads unordered with the other blocks' writes, so an integer from before a block wrote its sum is a permitted result.
Derivation 2: A block's sum is ordered before the last block's read only by a release pattern in the writer and an acquire pattern in the reader, morally strong, which needs device scope across blocks; any one step weaker and the read of position b races with the write, permitting the old integer in the output.
Write a program that reads g and n integers and prints the sums of g blocks of 1 thread each; the device holds them all at once.
Block b adds the integers at positions b, b + g, b + 2g, …, writes its sum over the integer at position b, then adds 1 to a counter.
The block that finds g − 1 in the counter arrives last: it fences, then copies the integers at positions 0 to g − 1 to an output array of g ints.
Type the order and the scope of the counter's `fetch_add` and of the last block's `cuda::atomic_thread_fence`.
Input: one line, g and n; then one line, n integers separated by spaces.
Output: one line, the g sums of blocks 0 to g − 1, separated by spaces.
Limits: 1 ≤ g ≤ 8; g ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3 3
4 5 6
```
```out
4 5 6
```
### Reference
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void sums(cuda::std::span<int> v,
                     cuda::std::span<int> counter,
                     cuda::std::span<int> out)
{
    std::size_t b {blockIdx.x};
    std::size_t g {gridDim.x};
    int part {0};
    for (std::size_t i {b}; i < v.size(); i += g) {
        part += v[i];
    }
    v[b] = part;
    cuda::atomic_ref<int, SCOPE_1> count {counter[0]};
    int arrived {count.fetch_add(1, ORDER_1)};
    if (arrived == static_cast<int>(g) - 1) {
        cuda::atomic_thread_fence(ORDER_2, SCOPE_2);
        for (std::size_t i {0}; i < g; ++i) {
            out[i] = v[i];
        }
    }
}

int main()
{
    int g {0};
    int n {0};
    std::cin >> g >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    std::vector<int> got(g);
    int* d {nullptr};
    int* counter {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&counter, sizeof(int));
    cudaMalloc(&out, g * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(counter, 0, sizeof(int));
    sums<<<g, 1>>>({d, v.size()}, {counter, 1},
                   {out, got.size()});
    cudaMemcpy(got.data(), out, g * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(counter);
    cudaFree(d);
    for (int x : got) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
Orders:
- 1: rmw release device
- 2: fence relaxed device
### Tests
```in
1 1
-1000
```
```in
2 6
1 2 3 4 5 6
```
```in
8 16
1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2
```
```in
5 9
1000 -1000 0 7 -7 3 3 3 3
```
### Witness
```in
2 4
1 2 3 4
```
