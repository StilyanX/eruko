# 8.41 The threads an atomic's scope covers
Part: the threads whose view an atomic of a stated scope orders
Clause: [intro.races], [atomics.order], PTX ISA: Memory Consistency Model, Scope, PTX ISA: Morally strong operations, libcu++: cuda::thread_scope, cuda::atomic_ref
After: 8.38
Levels: c++23
Device: yes
Source: PTX ISA, Memory Consistency Model (Scope: .cta, .gpu, .sys; two operations are morally strong only when each one's scope holds the other's thread); libcu++ thread_scope

## Example
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <print>

__global__ void count(cuda::std::span<int> total)
{
    //: Count this block's threads at block scope.
    __shared__ int mine;
    if (threadIdx.x == 0) {
        mine = 0;
    }
    __syncthreads();
    cuda::atomic_ref<int, cuda::thread_scope_block> in_block {
        mine};
    in_block.fetch_add(1, cuda::memory_order_relaxed);
    __syncthreads();
    //: Add the blocks' counts in global memory at device scope.
    if (threadIdx.x == 0) {
        cuda::atomic_ref<int, cuda::thread_scope_device> all {
            total[0]};
        all.fetch_add(mine, cuda::memory_order_relaxed);
    }
}

int main()
{
    //: Launch 4 blocks of 64 threads and print the count.
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    cudaMemset(d, 0, sizeof(int));
    count<<<4, 64>>>({d, 1});
    int got {0};
    cudaMemcpy(&got, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
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
    cuda::atomic_ref<int, cuda::thread_scope_block> f {
        flag[0]};
    if (blockIdx.x == 0) {
        data[0] = 42;
        f.store(1, cuda::memory_order_release);
    } else {
        while (f.load(cuda::memory_order_acquire) == 0) {
        }
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
Derivation 1: The store and the load are at block scope but run in two blocks, so neither's scope holds the other's thread; they are not morally strong, no release pattern synchronizes, and data[0] races, undefined.
Derivation 2: A block-scope atomic orders only the views of threads in its own block; block 1's acquire gives it no order against block 0's write of 42, so the plain write and read of data[0] form a data race, undefined.

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
        f.store(1, cuda::memory_order_release);
    } else {
        while (f.load(cuda::memory_order_acquire) == 0) {
        }
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
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads the threads per block b, a scope, and two global thread indices i and j of one launch on one device.
The scope is `thread`, `block`, `device` or `system`, as in `cuda::thread_scope_…`.
Print `yes` if an atomic of that scope in thread i orders its view against thread j's, that is, if thread j lies inside the scope as seen from thread i; else print `no`.
Input: one line, b, the scope, i and j.
Output: one line, `yes` or `no`.
Limits: b is 32, 64, 128, 256, 512 or 1024; 0 ≤ i, j < 1000000.
### Examples
```in
32 block 3 31
```
```out
yes
```
```in
32 block 3 32
```
```out
no
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    int b {0};
    std::string scope {};
    int i {0};
    int j {0};
    std::cin >> b >> scope >> i >> j;
    bool inside {true};
    if (scope == "thread") {
        inside = i == j;
    }
    if (scope == "block") {
        inside = i / b == j / b;
    }
    std::println("{}", inside ? "yes" : "no");
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    int b {0};
    std::string scope {};
    int i {0};
    int j {0};
    std::cin >> b >> scope >> i >> j;
    bool inside {true};
    if (scope == "thread") {
        inside = i == j;
    }
    if (scope == "block") {
        inside = i / 32 == j / 32;
    }
    std::println("{}", inside ? "yes" : "no");
}
```
### Tests
```in
1024 thread 5 5
```
```in
1024 thread 5 6
```
```in
256 block 255 256
```
```in
512 block 0 511
```
```in
32 device 0 999999
```
```in
64 system 999999 0
```
### Witness
```in
64 block 0 40
```

## Alone 2
Form: run
Write a program that reads the threads per block b and the m parties to an atomic, and prints the narrowest scope that orders the views of all of them.
A party is `t i`, the thread with global index i of one launch on one device, or `h`, a host thread.
Print `thread`, `block`, `device` or `system`, as in `cuda::thread_scope_…`.
Input: one line, b and m; then m lines, one party each.
Output: one line, the scope.
Limits: b is 32, 64, 128, 256, 512 or 1024; 1 ≤ m ≤ 10; 0 ≤ i < 1000000.
### Examples
```in
64 2
t 3
t 60
```
```out
block
```
```in
64 2
t 3
t 64
```
```out
device
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <set>

int main()
{
    int b {0};
    int m {0};
    std::cin >> b >> m;
    std::set<int> threads {};
    std::set<int> blocks {};
    bool host {false};
    for (int k {0}; k < m; ++k) {
        char kind {' '};
        std::cin >> kind;
        if (kind == 'h') {
            host = true;
        } else {
            int i {0};
            std::cin >> i;
            threads.insert(i);
            blocks.insert(i / b);
        }
    }
    if (host) {
        std::println("system");
    } else if (threads.size() == 1) {
        std::println("thread");
    } else if (blocks.size() == 1) {
        std::println("block");
    } else {
        std::println("device");
    }
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <set>

int main()
{
    int b {0};
    int m {0};
    std::cin >> b >> m;
    std::set<int> threads {};
    std::set<int> blocks {};
    bool host {false};
    for (int k {0}; k < m; ++k) {
        char kind {' '};
        std::cin >> kind;
        if (kind == 'h') {
            host = true;
        } else {
            int i {0};
            std::cin >> i;
            threads.insert(i);
            blocks.insert(i / b);
        }
    }
    if (threads.size() == 1 && !host) {
        std::println("thread");
    } else if (blocks.size() == 1) {
        std::println("block");
    } else {
        std::println("device");
    }
}
```
### Tests
```in
32 1
t 7
```
```in
32 1
h
```
```in
1024 3
t 0
t 1023
t 512
```
```in
128 2
t 127
t 128
```
```in
256 3
t 1
h
t 900000
```
### Witness
```in
64 2
t 0
h
```
