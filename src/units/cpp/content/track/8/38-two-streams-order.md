# 8.38 Two kernels in two streams have no order
Part: the order of two kernels in two streams
Clause: [intro.races], CUDA C++ Programming Guide: Asynchronous Concurrent Execution, Streams, CUDA C++ Programming Guide: Explicit Synchronization, CUDA Runtime API: cudaStreamWaitEvent
After: 8.37
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Asynchronous Concurrent Execution, Streams and Explicit Synchronization

## Example
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 7;
}

__global__ void copy(cuda::std::span<const int> x,
                     cuda::std::span<int> y)
{
    y[0] = x[0];
}

int main()
{
    //: Make two streams: their work may run at once, in any order.
    cudaStream_t s1 {};
    cudaStream_t s2 {};
    cudaStreamCreate(&s1);
    cudaStreamCreate(&s2);
    int* x {nullptr};
    int* y {nullptr};
    cudaMalloc(&x, sizeof(int));
    cudaMalloc(&y, sizeof(int));
    cudaMemset(x, 0, sizeof(int));
    //: Record an event after the first kernel in stream 1.
    cudaEvent_t done {};
    cudaEventCreate(&done);
    set<<<1, 1, 0, s1>>>({x, 1});
    cudaEventRecord(done, s1);
    //: Let stream 2 wait for it, so its kernel sees the write.
    cudaStreamWaitEvent(s2, done);
    copy<<<1, 1, 0, s2>>>({x, 1}, {y, 1});
    cudaDeviceSynchronize();
    int got {0};
    cudaMemcpy(&got, y, sizeof(int), cudaMemcpyDeviceToHost);
    cudaEventDestroy(done);
    cudaFree(y);
    cudaFree(x);
    cudaStreamDestroy(s2);
    cudaStreamDestroy(s1);
    std::println("{}", got);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 7;
}

__global__ void copy(cuda::std::span<const int> x,
                     cuda::std::span<int> y)
{
    y[0] = x[0];
}

int main()
{
    cudaStream_t s1 {};
    cudaStream_t s2 {};
    cudaStreamCreate(&s1);
    cudaStreamCreate(&s2);
    int* x {nullptr};
    int* y {nullptr};
    cudaMalloc(&x, sizeof(int));
    cudaMalloc(&y, sizeof(int));
    cudaMemset(x, 0, sizeof(int));
    cudaDeviceSynchronize();
    set<<<1, 1, 0, s1>>>({x, 1});
    copy<<<1, 1, 0, s2>>>({x, 1}, {y, 1});
    cudaDeviceSynchronize();
    int got {0};
    cudaMemcpy(&got, y, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(y);
    cudaFree(x);
    cudaStreamDestroy(s2);
    cudaStreamDestroy(s1);
    std::println("{}", got);
}
```
Answer: c++23 undefined stored
Derivation 1: Work in two streams has no order unless an event joins them, so set's write and copy's read of x conflict with neither before the other: a data race, so undefined.
Derivation 2: Nothing between the launches makes stream 2 wait for stream 1, so copy may read x while set writes it; two unordered accesses, one a write, to one int are a race, undefined.

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void set(cuda::std::span<int> x)
{
    x[0] = 7;
}

__global__ void copy(cuda::std::span<const int> x,
                     cuda::std::span<int> y)
{
    y[0] = x[0];
}

int main()
{
    cudaStream_t s1 {};
    cudaStream_t s2 {};
    cudaStreamCreate(&s1);
    cudaStreamCreate(&s2);
    int* x {nullptr};
    int* y {nullptr};
    cudaMalloc(&x, sizeof(int));
    cudaMalloc(&y, sizeof(int));
    cudaMemset(x, 0, sizeof(int));
    cudaDeviceSynchronize();
    cudaEvent_t done {};
    cudaEventCreate(&done);
    set<<<1, 1, 0, s1>>>({x, 1});
    cudaEventRecord(done, s1);
    cudaStreamWaitEvent(s2, done);
    copy<<<1, 1, 0, s2>>>({x, 1}, {y, 1});
    cudaDeviceSynchronize();
    int got {0};
    cudaMemcpy(&got, y, sizeof(int), cudaMemcpyDeviceToHost);
    cudaEventDestroy(done);
    cudaFree(y);
    cudaFree(x);
    cudaStreamDestroy(s2);
    cudaStreamDestroy(s1);
    std::println("{}", got);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads q commands sent to streams 0 to 3, and two kernel numbers a and b.
A command is `k s` (launch the next kernel into stream s; kernels are numbered 1, 2, … in the order they come), `r s e` (record event e in stream s) or `w s e` (stream s waits for event e).
No stream is the default stream. An event that nothing recorded holds no work.
Print `before` if kernel a must end before kernel b starts, `after` if kernel b must end before kernel a starts, and `unordered` if neither must.
Input: one line, q; then q lines, one command each; then one line, a and b.
Output: one line, `before`, `after` or `unordered`.
Limits: 2 ≤ q ≤ 50; each s and e is from 0 to 3; a and b are different kernel numbers.
### Examples
```in
2
k 0
k 0
1 2
```
```out
before
```
```in
4
k 1
r 1 2
w 3 2
k 3
2 1
```
```out
after
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
    std::vector<std::set<int>> stream(4);
    std::vector<std::set<int>> event(4);
    std::vector<std::set<int>> before(1);
    for (int i {0}; i < q; ++i) {
        char op {' '};
        int s {0};
        int e {0};
        std::cin >> op >> s;
        switch (op) {
        case 'k': {
            int k {static_cast<int>(before.size())};
            before.push_back(stream[s]);
            stream[s].insert(k);
            break;
        }
        case 'r':
            std::cin >> e;
            event[e] = stream[s];
            break;
        default:
            std::cin >> e;
            stream[s].insert(event[e].begin(), event[e].end());
            break;
        }
    }
    int a {0};
    int b {0};
    std::cin >> a >> b;
    if (before[b].contains(a)) {
        std::println("before");
    } else if (before[a].contains(b)) {
        std::println("after");
    } else {
        std::println("unordered");
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
    std::vector<std::set<int>> stream(4);
    std::vector<std::set<int>> event(4);
    std::vector<std::set<int>> before(1);
    for (int i {0}; i < q; ++i) {
        char op {' '};
        int s {0};
        int e {0};
        std::cin >> op >> s;
        switch (op) {
        case 'k': {
            int k {static_cast<int>(before.size())};
            before.push_back(stream[s]);
            for (std::set<int>& t : stream) {
                t.insert(k);
            }
            break;
        }
        case 'r':
            std::cin >> e;
            event[e] = stream[s];
            break;
        default:
            std::cin >> e;
            stream[s].insert(event[e].begin(), event[e].end());
            break;
        }
    }
    int a {0};
    int b {0};
    std::cin >> a >> b;
    if (before[b].contains(a)) {
        std::println("before");
    } else if (before[a].contains(b)) {
        std::println("after");
    } else {
        std::println("unordered");
    }
}
```
### Tests
```in
2
k 0
k 1
1 2
```
```in
5
k 0
r 0 0
k 0
w 1 0
k 1
3 2
```
```in
6
k 2
r 2 1
k 2
r 2 1
w 0 1
k 0
1 3
```
```in
5
w 1 3
k 0
k 1
r 1 0
k 1
3 1
```
```in
7
k 0
r 0 0
w 1 0
k 1
r 1 1
w 2 1
k 2
3 1
```
### Witness
```in
2
k 0
k 1
2 1
```

## Alone 2
Form: run
Write a program that reads q commands sent to streams 0 to 3, and prints for each kernel how many kernels must end before it starts.
A command is `k s` (launch the next kernel into stream s; kernels are numbered 1, 2, … in the order they come), `r s e` (record event e in stream s) or `w s e` (stream s waits for event e).
No stream is the default stream. An event that nothing recorded holds no work.
Input: one line, q; then q lines, one command each.
Output: one line, for kernels 1, 2, … in order, the number of kernels that must end before it starts, separated by spaces.
Limits: 1 ≤ q ≤ 50; each s and e is from 0 to 3.
### Examples
```in
4
k 0
k 1
k 0
k 1
```
```out
0 0 1 1
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
    std::vector<std::set<int>> stream(4);
    std::vector<std::set<int>> event(4);
    std::vector<std::set<int>> before(1);
    for (int i {0}; i < q; ++i) {
        char op {' '};
        int s {0};
        int e {0};
        std::cin >> op >> s;
        switch (op) {
        case 'k': {
            int k {static_cast<int>(before.size())};
            before.push_back(stream[s]);
            stream[s].insert(k);
            break;
        }
        case 'r':
            std::cin >> e;
            event[e] = stream[s];
            break;
        default:
            std::cin >> e;
            stream[s].insert(event[e].begin(), event[e].end());
            break;
        }
    }
    for (std::size_t k {1}; k < before.size(); ++k) {
        std::print("{} ", before[k].size());
    }
    std::println();
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
    std::vector<std::set<int>> stream(4);
    std::vector<std::set<int>> event(4);
    std::vector<std::set<int>> before(1);
    for (int i {0}; i < q; ++i) {
        char op {' '};
        int s {0};
        int e {0};
        std::cin >> op >> s;
        switch (op) {
        case 'k': {
            int k {static_cast<int>(before.size())};
            before.push_back(stream[s]);
            stream[s].insert(k);
            break;
        }
        case 'r':
            std::cin >> e;
            event[e] = stream[s];
            break;
        default:
            std::cin >> e;
            break;
        }
    }
    for (std::size_t k {1}; k < before.size(); ++k) {
        std::print("{} ", before[k].size());
    }
    std::println();
}
```
### Tests
```in
1
k 3
```
```in
6
k 0
k 0
r 0 1
w 1 1
k 1
k 1
```
```in
7
k 0
r 0 0
k 0
w 1 0
k 1
r 1 0
k 2
```
```in
5
w 2 0
k 2
r 2 0
w 3 0
k 3
```
### Witness
```in
4
k 0
r 0 0
w 1 0
k 1
```
