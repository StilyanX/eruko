# 0.07 The last block to arrive adds the partial sums
Task: the last block to arrive reduces the partial sums of the others, through a counter and a fence, with the order and scope of each atomic typed
Shape: QUDA include/targets/cuda/reduce_helper.h (reduce: each block stores its partial sum, adds one to a device counter, and the block that sees the count of the others adds the partial sums), include/tunable_reduction.h, lib/reduce_helper.cu (the grid and the buffer of partial sums)
Device: yes
Write a reduction on the device in which each block leaves one partial sum in global memory and adds one to a counter.
The block that finds the counter at the number of the other blocks is the last to arrive: it adds the partial sums.
Say the order and the scope that each atomic and each fence needs, and no stronger.

## Bound
Tag: 8.08
Count: the partial sums one reduction of the library keeps on this machine, one for each block of its largest grid
Answer: 40
Source: QUDA include/tunable_reduction.h: maxGridSize() returns 2 · device::processor_count(); lib/reduce_helper.cu: reducer::init sizes the buffer for max_reduce_blocks = 2 · device::processor_count() partial sums per reduction; the RTX 4050 Laptop GPU of this machine has 20 multiprocessors
Derivation 1: the grid of a reduction holds at most 2 · 20 = 40 blocks, and each block leaves one partial sum: 40.
Derivation 2: the buffer takes max_reduce_blocks · n_reduce · reduce_size bytes; for one reduction of one word that is 2 · 20 = 40 words, one partial sum each.

## Verdict 1
Tag: 8.44
```cuda
#include <print>
#include <cuda/atomic>
#include <cuda/std/span>

using Count =
    cuda::atomic_ref<unsigned, cuda::thread_scope_device>;

__global__ void total(cuda::std::span<int> part,
                      cuda::std::span<unsigned> count,
                      cuda::std::span<int> out)
{
    unsigned b {blockIdx.x};
    part[b] = static_cast<int>(b) + 1;
    cuda::atomic_thread_fence(cuda::memory_order_release,
                              cuda::thread_scope_device);
    Count c {count[0]};
    unsigned seen {c.fetch_add(1u, cuda::memory_order_relaxed)};
    if (seen == gridDim.x - 1) {
        cuda::atomic_thread_fence(cuda::memory_order_acquire,
                                  cuda::thread_scope_device);
        int sum {0};
        for (int p : part) {
            sum += p;
        }
        out[0] = sum;
    }
}

int main()
{
    int* part {nullptr};
    unsigned* count {nullptr};
    int* out {nullptr};
    cudaMalloc(&part, 8 * sizeof(int));
    cudaMalloc(&count, sizeof(unsigned));
    cudaMalloc(&out, sizeof(int));
    cudaMemset(count, 0, sizeof(unsigned));
    total<<<8, 1>>>(cuda::std::span<int> {part, 8},
                    cuda::std::span<unsigned> {count, 1},
                    cuda::std::span<int> {out, 1});
    int got {0};
    cudaMemcpy(&got, out, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(part);
    cudaFree(count);
    cudaFree(out);
    std::println("{}", got);
}
```
Answer: c++23 defined

## Verdict 2
Tag: 8.41
```cuda
#include <print>
#include <cuda/atomic>
#include <cuda/std/span>

using Count =
    cuda::atomic_ref<unsigned, cuda::thread_scope_block>;

__global__ void total(cuda::std::span<int> part,
                      cuda::std::span<unsigned> count,
                      cuda::std::span<int> out)
{
    unsigned b {blockIdx.x};
    part[b] = static_cast<int>(b) + 1;
    cuda::atomic_thread_fence(cuda::memory_order_release,
                              cuda::thread_scope_block);
    Count c {count[0]};
    unsigned seen {c.fetch_add(1u, cuda::memory_order_relaxed)};
    if (seen == gridDim.x - 1) {
        cuda::atomic_thread_fence(cuda::memory_order_acquire,
                                  cuda::thread_scope_block);
        int sum {0};
        for (int p : part) {
            sum += p;
        }
        out[0] = sum;
    }
}

int main()
{
    int* part {nullptr};
    unsigned* count {nullptr};
    int* out {nullptr};
    cudaMalloc(&part, 8 * sizeof(int));
    cudaMalloc(&count, sizeof(unsigned));
    cudaMalloc(&out, sizeof(int));
    cudaMemset(count, 0, sizeof(unsigned));
    cudaMemset(out, 0, sizeof(int));
    total<<<8, 1>>>(cuda::std::span<int> {part, 8},
                    cuda::std::span<unsigned> {count, 1},
                    cuda::std::span<int> {out, 1});
    int got {0};
    cudaMemcpy(&got, out, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(part);
    cudaFree(count);
    cudaFree(out);
    std::println("{}", got);
}
```
Answer: c++23 undefined stored
Derivation 1: in the CUDA C++ memory model (libcu++ thread scopes) an atomic or a fence of block scope orders only the threads of its own block; the fetch_add and the two fences of different blocks are not morally strong to each other, so no fence of another block synchronizes with the last block's acquire fence, and the plain write of part[b] and the last block's read of it are a data race, which is undefined behaviour.
Derivation 2: by the PTX memory consistency model, operations of .cta scope in different CTAs are not morally strong, so they form no release pattern, no synchronization and no causality order between the blocks; the counter's additions may then lose counts and each part[b] is written and read with no order between the two accesses, a data race, and a data race is undefined behaviour.


## Alone 1
Tag: 8.44
Form: orders
Sanitizer: memcheck
Orders:
- 1: rmw release device
- 2: fence acquire device
Forbidden: 1, 2
Derivation 1: A block's partial sum reaches the last block only through a release on the counter's fetch_add and an acquire fence after it in the last block, both at device scope since the blocks differ; with the fetch_add relaxed or at block scope, or the fence relaxed or at block scope, the last block may read an integer from before another block wrote its sum there, and the total is wrong.
Derivation 2: By the PTX memory consistency model the release rmw and the acquire pattern (the atomic, then fence.acquire) synchronize only when both are morally strong, each at a scope holding both blocks; one step weaker on either and the plain write of a block's sum and the last block's plain read of it form a data race, so the integer from before is a permitted result.
Write a program that reads n sites of six integers each and prints the sum of the squares of all 6n integers, with k blocks of 1 thread each; the device holds them all at once.
Number the 6n integers from 0 in the order read. Block b adds the squares of the integers at positions b, b + k, b + 2k, … and writes its sum over the integer at position b.
Then block b adds 1 to a counter. The block that finds k − 1 in the counter arrives last: it fences, then adds the integers at positions 0 to k − 1 and writes the total out.
Type the order and the scope of the counter's `fetch_add` and of the last block's `cuda::atomic_thread_fence`, each no stronger than it needs.
Input: the first line holds n and k; then n lines follow, six integers on each.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 100; 1 ≤ k ≤ 40, the partial sums the library keeps on this machine, and k ≤ 6n; each integer x has |x| ≤ 1000.
### Examples
```in
1 1
1 2 3 4 5 6
```
```out
91
```
```in
2 1
1 2 3 4 5 6
-1 0 0 0 0 1
```
```out
93
```
### Reference
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void total(cuda::std::span<int> v,
                      cuda::std::span<unsigned> count,
                      cuda::std::span<int> out)
{
    std::size_t b {blockIdx.x};
    std::size_t k {gridDim.x};
    int sum {0};
    for (std::size_t i {b}; i < v.size(); i += k) {
        sum += v[i] * v[i];
    }
    v[b] = sum;
    cuda::atomic_ref<unsigned, SCOPE_1> c {count[0]};
    unsigned seen {c.fetch_add(1u, ORDER_1)};
    if (seen == k - 1) {
        cuda::atomic_thread_fence(ORDER_2, SCOPE_2);
        int all {0};
        for (std::size_t i {0}; i < k; ++i) {
            all += v[i];
        }
        out[0] = all;
    }
}

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<int> v(6 * n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    unsigned* count {nullptr};
    int* out {nullptr};
    cudaMalloc(&d, v.size() * sizeof(int));
    cudaMalloc(&count, sizeof(unsigned));
    cudaMalloc(&out, sizeof(int));
    cudaMemcpy(d, v.data(), v.size() * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(count, 0, sizeof(unsigned));
    total<<<k, 1>>>({d, v.size()}, {count, 1}, {out, 1});
    int got {0};
    cudaMemcpy(&got, out, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(out);
    cudaFree(count);
    cudaFree(d);
    std::println("{}", got);
}
```
### Wrong
Orders:
- 1: rmw release device
- 2: fence acquire block
### Tests
```in
1 1
0 0 0 0 0 0
```
```in
1 3
-1000 1000 -1000 1000 -1000 1000
```
```in
3 2
1 1 1 1 1 1
2 2 2 2 2 2
-3 0 0 0 0 0
```
```in
5 30
1 0 0 0 0 0
0 2 0 0 0 0
0 0 3 0 0 0
0 0 0 4 0 0
0 0 0 0 5 0
```
```in
7 40
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
```
### Witness
```in
2 2
1 2 3 4 5 6
6 5 4 3 2 1
```
