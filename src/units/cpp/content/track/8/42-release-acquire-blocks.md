# 8.42 Release and acquire between two blocks
Part: release and acquire between two blocks through `cuda::atomic_ref`, launched with no more blocks than the device holds at once
Clause: [atomics.order], [intro.races], [atomics.ref.generic], PTX ISA: Memory Consistency Model, Release and Acquire Patterns, libcu++: cuda::atomic_ref, cuda::thread_scope
After: 8.41
Levels: c++23
Device: yes
Source: PTX ISA, Memory Consistency Model (a release pattern and an acquire pattern, morally strong, synchronize); libcu++ cuda::atomic_ref

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
        //: Write the data, then raise the flag with release.
        data[0] = 42;
        f.store(1, cuda::memory_order_release);
    } else {
        //: Wait for the flag with acquire, then read the data.
        while (f.load(cuda::memory_order_acquire) == 0) {
        }
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
        f.store(1, cuda::memory_order_release);
    } else {
        while (f.load(cuda::memory_order_relaxed) == 0) {
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
Derivation 1: The relaxed load is no acquire pattern, so block 0's release synchronizes with nothing in block 1, and data[0]'s write and read are unordered: a data race, undefined.
Derivation 2: A release needs an acquire on the other side to order the plain write before the plain read; block 1 loads the flag relaxed, so its read of data[0] races with the write of 42, undefined.

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
    int b {static_cast<int>(blockIdx.x)};
    if (b > 0) {
        while (f.load(cuda::memory_order_acquire) != b) {
        }
    }
    data[b] = (b == 0 ? 1 : data[b - 1]) * 3;
    f.store(b + 1, cuda::memory_order_release);
}

int main()
{
    int* data {nullptr};
    int* flag {nullptr};
    cudaMalloc(&data, 4 * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMemset(flag, 0, sizeof(int));
    hand<<<4, 1>>>({data, 4}, {flag, 1});
    int got {0};
    cudaMemcpy(&got, data + 3, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(flag);
    cudaFree(data);
    std::println("{}", got);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: orders
Settled: stored
Orders:
- 1: store release device
- 2: load acquire device
Forbidden: 1, 2
Derivation 1: Slot 1 relaxed or at block scope is no release pattern morally strong with block 1's load, and slot 2 relaxed or at block scope is no acquire pattern; either way block 1 may see the flag and still read the cell from before block 0's write, a race in global memory that permits the 0 the cell was set to.
Derivation 2: Only a release store and an acquire load, each at a scope that holds both blocks (device), order block 0's write of the sum before block 1's read of the cell; weaken the order or narrow the scope of either and the read is unordered with the write, so the cell's first value, 0, is a permitted result whatever the integers.
Write a program that reads n integers and prints their sum, with 2 blocks of 1 thread each; the device holds both at once.
Block 0 adds the integers, writes the sum to a cell, then raises a flag.
Block 1 waits for the flag, then copies the cell to the output.
Type the order and the scope of the flag's store and of its load.
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
                    cuda::std::span<int> cell)
{
    if (blockIdx.x == 0) {
        int total {0};
        for (int x : v) {
            total += x;
        }
        cell[0] = total;
        cuda::atomic_ref<int, SCOPE_1> f {flag[0]};
        f.store(1, ORDER_1);
    } else {
        cuda::atomic_ref<int, SCOPE_2> f {flag[0]};
        while (f.load(ORDER_2) == 0) {
        }
        cell[1] = cell[0];
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
    int* cell {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&flag, sizeof(int));
    cudaMalloc(&cell, 2 * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(flag, 0, sizeof(int));
    cudaMemset(cell, 0, 2 * sizeof(int));
    sum<<<2, 1>>>({d, v.size()}, {flag, 1}, {cell, 2});
    int total {0};
    cudaMemcpy(&total, cell + 1, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(cell);
    cudaFree(flag);
    cudaFree(d);
    std::println("{}", total);
}
```
### Wrong
Orders:
- 1: store release device
- 2: load relaxed device
```out
0
```
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
Settled: stored
Orders:
- 1: store release device
- 2: load acquire device
- 3: load acquire device
- 4: store release device
Forbidden: 1, 2, 3, 4
Derivation 1: Each hand-over between the blocks needs a release store and an acquire load at device scope; with any one of the four relaxed or at block scope, the reader of that flag is not ordered after the writer's plain write, so block 1 may copy the first cell's 0 or block 0 may read the second cell's 0, and 0 is a permitted result.
Derivation 2: Slots 1 and 3 order the range from block 0 to block 1, slots 4 and 2 order the copy back to block 0; weakening the order or narrowing the scope of any one leaves its plain read unordered with the other block's write, a race in global memory whose permitted results include the 0 each cell was set to.
Write a program that reads n integers and prints the largest minus the smallest, with 2 blocks of 1 thread each; the device holds both at once.
Block 0 finds the largest minus the smallest, writes it to a first cell, raises a first flag, waits on a second flag, then copies a second cell to the output.
Block 1 waits on the first flag, copies the first cell to the second cell, then raises the second flag.
Type the order and the scope of each flag's store and load.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the largest integer minus the smallest.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
0 5 3
```
```out
5
```
### Reference
```cuda
#include <cuda/atomic>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void range(cuda::std::span<int> v,
                      cuda::std::span<int> flag,
                      cuda::std::span<int> cell)
{
    if (blockIdx.x == 0) {
        int low {v[0]};
        int high {v[0]};
        for (int x : v) {
            low = x < low ? x : low;
            high = x > high ? x : high;
        }
        cell[0] = high - low;
        cuda::atomic_ref<int, SCOPE_1> a {flag[0]};
        a.store(1, ORDER_1);
        cuda::atomic_ref<int, SCOPE_2> b {flag[1]};
        while (b.load(ORDER_2) == 0) {
        }
        cell[2] = cell[1];
    } else {
        cuda::atomic_ref<int, SCOPE_3> a {flag[0]};
        while (a.load(ORDER_3) == 0) {
        }
        cell[1] = cell[0];
        cuda::atomic_ref<int, SCOPE_4> b {flag[1]};
        b.store(1, ORDER_4);
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
    int* cell {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMalloc(&flag, 2 * sizeof(int));
    cudaMalloc(&cell, 3 * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    cudaMemset(flag, 0, 2 * sizeof(int));
    cudaMemset(cell, 0, 3 * sizeof(int));
    range<<<2, 1>>>({d, v.size()}, {flag, 2}, {cell, 3});
    int got {0};
    cudaMemcpy(&got, cell + 2, sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(cell);
    cudaFree(flag);
    cudaFree(d);
    std::println("{}", got);
}
```
### Wrong
Orders:
- 1: store release device
- 2: load relaxed device
- 3: load acquire device
- 4: store release device
```out
0
```
### Tests
```in
1
-1000
```
```in
2
-1000 1000
```
```in
4
7 7 7 7
```
```in
5
3 -2 8 0 -9
```
### Witness
```in
2
2 7
```
