# 8.40 When the host sees the writes of a kernel
Part: when the host sees the writes of a kernel
Clause: [intro.races], CUDA C++ Programming Guide: Asynchronous Concurrent Execution, Explicit Synchronization, CUDA C++ Programming Guide: Unified Memory, Coherency and Concurrency, CUDA Runtime API: cudaStreamSynchronize, cudaEventSynchronize, cudaDeviceSynchronize
After: 8.39
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Asynchronous Concurrent Execution (a launch returns before the kernel ends) and Explicit Synchronization

## Example
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 42;
}

int main()
{
    //: Take memory that the host and the device both reach.
    int* x {nullptr};
    cudaMallocManaged(&x, sizeof(int));
    x[0] = 0;
    //: The launch returns at once, before the kernel ends.
    set<<<1, 1>>>({x, 1});
    //: Wait for the device; only then the host sees the write.
    cudaDeviceSynchronize();
    std::println("{}", x[0]);
    cudaFree(x);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 42;
}

int main()
{
    int* x {nullptr};
    cudaMallocManaged(&x, sizeof(int));
    x[0] = 0;
    set<<<1, 1>>>({x, 1});
    int got {x[0]};
    cudaDeviceSynchronize();
    std::println("{}", got);
    cudaFree(x);
}
```
Answer: c++23 undefined stored
Derivation 1: The launch returns before set ends and nothing makes the host wait, so the host's read of x[0] and the kernel's write are unordered conflicting accesses, a data race, undefined.
Derivation 2: Only a synchronizing call orders a kernel's writes before host code; the read comes before cudaDeviceSynchronize, so it races with the write of 42, undefined.

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 42;
}

int main()
{
    cudaStream_t s {};
    cudaStreamCreate(&s);
    int* x {nullptr};
    cudaMallocManaged(&x, sizeof(int));
    x[0] = 0;
    set<<<1, 1, 0, s>>>({x, 1});
    cudaStreamSynchronize(s);
    std::println("{}", x[0]);
    cudaFree(x);
    cudaStreamDestroy(s);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads q host calls and, for each query, says whether the host is sure to see the writes of a kernel.
A call is `k s` (launch the next kernel into stream s; kernels are numbered 1, 2, … in the order they come), `s s` (`cudaStreamSynchronize` on stream s), `d` (`cudaDeviceSynchronize`) or `q i` (the host reads what kernel i wrote).
No stream is the default stream, and no stream waits for another.
Input: one line, q; then q lines, one call each.
Output: one line per query, in order: `yes` if the host is sure to see the writes of kernel i, else `no`.
Limits: 1 ≤ q ≤ 50; each s is from 0 to 3; each i names a kernel launched before the query.
### Examples
```in
4
k 0
q 1
s 0
q 1
```
```out
no
yes
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <set>
#include <vector>

int main()
{
    int q {0};
    std::cin >> q;
    std::vector<std::vector<int>> stream(4);
    std::set<int> seen {};
    int kernels {0};
    for (int c {0}; c < q; ++c) {
        char op {' '};
        int x {0};
        std::cin >> op;
        switch (op) {
        case 'k':
            std::cin >> x;
            stream[x].push_back(++kernels);
            break;
        case 's':
            std::cin >> x;
            seen.insert(stream[x].begin(), stream[x].end());
            break;
        case 'd':
            for (const std::vector<int>& t : stream) {
                seen.insert(t.begin(), t.end());
            }
            break;
        default:
            std::cin >> x;
            std::println("{}", seen.contains(x) ? "yes" : "no");
            break;
        }
    }
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <set>
#include <vector>

int main()
{
    int q {0};
    std::cin >> q;
    std::vector<std::vector<int>> stream(4);
    std::set<int> seen {};
    int kernels {0};
    for (int c {0}; c < q; ++c) {
        char op {' '};
        int x {0};
        std::cin >> op;
        switch (op) {
        case 'k':
            std::cin >> x;
            stream[x].push_back(++kernels);
            break;
        case 's':
            std::cin >> x;
            for (const std::vector<int>& t : stream) {
                seen.insert(t.begin(), t.end());
            }
            break;
        case 'd':
            for (const std::vector<int>& t : stream) {
                seen.insert(t.begin(), t.end());
            }
            break;
        default:
            std::cin >> x;
            std::println("{}", seen.contains(x) ? "yes" : "no");
            break;
        }
    }
}
```
### Tests
```in
2
k 3
q 1
```
```in
6
k 0
k 1
d
q 1
q 2
k 0
```
```in
7
k 0
k 1
s 1
q 2
q 1
k 0
q 3
```
```in
8
k 2
k 2
s 2
k 2
q 2
q 3
s 3
q 3
```
### Witness
```in
4
k 0
k 1
s 1
q 1
```

## Alone 2
Form: run
Write a program that reads q host calls and, for each query, says whether the host is sure to see the writes of a kernel.
A call is `k s` (launch the next kernel into stream s; kernels are numbered 1, 2, … in the order they come), `r s e` (`cudaEventRecord` of event e in stream s), `e e` (`cudaEventSynchronize` on event e) or `q i` (the host reads what kernel i wrote).
No stream is the default stream, and no stream waits for another. Every event synchronized was recorded before.
Input: one line, q; then q lines, one call each.
Output: one line per query, in order: `yes` if the host is sure to see the writes of kernel i, else `no`.
Limits: 1 ≤ q ≤ 50; each s and e is from 0 to 3; each i names a kernel launched before the query.
### Examples
```in
5
k 0
r 0 1
q 1
e 1
q 1
```
```out
no
yes
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <set>
#include <utility>
#include <vector>

int main()
{
    int q {0};
    std::cin >> q;
    std::vector<std::vector<int>> stream(4);
    std::vector<std::pair<int, std::size_t>> event(4);
    std::set<int> seen {};
    int kernels {0};
    for (int c {0}; c < q; ++c) {
        char op {' '};
        int x {0};
        int e {0};
        std::cin >> op >> x;
        switch (op) {
        case 'k':
            stream[x].push_back(++kernels);
            break;
        case 'r':
            std::cin >> e;
            event[e] = {x, stream[x].size()};
            break;
        case 'e': {
            const std::vector<int>& t {stream[event[x].first]};
            seen.insert(t.begin(), t.begin() + event[x].second);
            break;
        }
        default:
            std::println("{}", seen.contains(x) ? "yes" : "no");
            break;
        }
    }
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <set>
#include <utility>
#include <vector>

int main()
{
    int q {0};
    std::cin >> q;
    std::vector<std::vector<int>> stream(4);
    std::vector<std::pair<int, std::size_t>> event(4);
    std::set<int> seen {};
    int kernels {0};
    for (int c {0}; c < q; ++c) {
        char op {' '};
        int x {0};
        int e {0};
        std::cin >> op >> x;
        switch (op) {
        case 'k':
            stream[x].push_back(++kernels);
            break;
        case 'r':
            std::cin >> e;
            event[e] = {x, stream[x].size()};
            break;
        case 'e': {
            const std::vector<int>& t {stream[event[x].first]};
            seen.insert(t.begin(), t.end());
            break;
        }
        default:
            std::println("{}", seen.contains(x) ? "yes" : "no");
            break;
        }
    }
}
```
### Tests
```in
2
k 1
q 1
```
```in
6
k 0
k 1
r 1 0
e 0
q 1
q 2
```
```in
7
k 2
r 2 3
k 2
r 2 2
e 3
q 1
q 2
```
```in
9
k 0
r 0 0
k 0
r 0 0
k 0
e 0
q 1
q 2
q 3
```
### Witness
```in
5
k 0
r 0 0
k 0
e 0
q 2
```
