# 8.33 A barrier that some threads of a block skip
Part: `__syncthreads` reached by some threads of a block only
Clause: CUDA C++ Programming Guide: Synchronization Functions, CUDA C++ Programming Guide: Independent Thread Scheduling, PTX ISA: bar.sync, PTX ISA: exit
After: 8.32
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Synchronization Functions (__syncthreads is allowed in conditional code only if the condition is the same across the whole block) and Independent Thread Scheduling (from compute capability 7.0 a barrier waits for every thread of the block that has not exited)

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <vector>

__global__ void flip(cuda::std::span<int> v)
{
    __shared__ int s[64];
    int t {static_cast<int>(threadIdx.x)};
    int n {static_cast<int>(v.size())};
    //: Let the threads past the end exit before the barrier.
    if (t >= n) {
        return;
    }
    s[t] = v[t];
    //: Every thread that has not exited reaches the barrier.
    __syncthreads();
    v[t] = s[n - 1 - t];
}

int main()
{
    //: Run one block of 64 threads on 40 values.
    std::vector<int> v(40);
    for (int i {0}; i < 40; ++i) {
        v[i] = i;
    }
    int* d {nullptr};
    cudaMalloc(&d, 40 * sizeof(int));
    cudaMemcpy(d, v.data(), 40 * sizeof(int),
               cudaMemcpyHostToDevice);
    flip<<<1, 64>>>({d, v.size()});
    cudaMemcpy(v.data(), d, 40 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", v[0], v[39]);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void flip(cuda::std::span<int> out)
{
    __shared__ int s[64];
    int t {static_cast<int>(threadIdx.x)};
    if (t < 64) {
        s[t] = t;
        __syncthreads();
        out[t] = s[63 - t];
    } else {
        out[t] = -1;
    }
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 128 * sizeof(int));
    flip<<<1, 128>>>({d, 128});
    int got[128] {};
    cudaMemcpy(got, d, 128 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", got[0], got[100]);
}
```
Answer: c++23 undefined stored
Derivation 1: The condition t < 64 differs across the block of 128, and __syncthreads is allowed in conditional code only when the condition is the same for the whole block; threads 64 to 127 have not exited when the others reach the barrier and never reach it, so the guide leaves the run undefined.
Derivation 2: From compute capability 7.0 a barrier completes only when every thread of the block that has not exited reaches it; threads 64 to 127 skip it and are still running, so the barrier's wait is the hang or the side effect the guide warns of, and nothing the guide defines.

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void flip(cuda::std::span<int> out)
{
    __shared__ int s[64];
    int t {static_cast<int>(threadIdx.x)};
    if (t >= 64) {
        return;
    }
    s[t] = t;
    __syncthreads();
    out[t] = s[63 - t];
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 64 * sizeof(int));
    flip<<<1, 128>>>({d, 64});
    int got[64] {};
    cudaMemcpy(got, d, 64 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", got[0], got[63]);
}
```
Answer: c++23 defined
Sanitizer: racecheck

## Alone 1
Form: run
Write a program that reads the path each thread of one block takes at a `__syncthreads`, and prints whether the run is defined on a device of compute capability 7.0 or more.
Each thread's path is one letter: `s` if it calls the `__syncthreads`, `r` if it returns before it, `k` if it skips it and goes on.
Print `defined` if the barrier is one the guide allows, else print `undefined`.
Input: one line, b; then one line, b letters, thread 0 first.
Output: one line, `defined` or `undefined`.
Limits: 1 ≤ b ≤ 1024; each letter is `s`, `r` or `k`.
### Examples
```in
4
ssss
```
```out
defined
```
```in
4
sskk
```
```out
undefined
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    int b {0};
    std::string path {};
    std::cin >> b >> path;
    bool calls {path.find('s') != std::string::npos};
    bool skips {path.find('k') != std::string::npos};
    std::println("{}", calls && skips ? "undefined"
                                      : "defined");
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
    std::string path {};
    std::cin >> b >> path;
    bool calls {path.find('s') != std::string::npos};
    bool skips {path.find_first_of("kr") != std::string::npos};
    std::println("{}", calls && skips ? "undefined"
                                      : "defined");
}
```
### Tests
```in
1
s
```
```in
3
rrr
```
```in
5
kkkkk
```
```in
6
srsrsr
```
```in
6
rrkkrr
```
```in
4
sksr
```
### Witness
```in
4
ssrr
```

## Alone 2
Form: run
Write a program that reads b, a and c for one block of b threads, and prints whether the run is defined on a device of compute capability 7.0 or more.
The threads with index below a return first. Of the rest, those with index below c call `__syncthreads`; the others skip it and go on.
Print `defined` if the barrier is one the guide allows, else print `undefined`.
Input: one line, b, a and c.
Output: one line, `defined` or `undefined`.
Limits: 1 ≤ b ≤ 1024; 0 ≤ a ≤ b; 0 ≤ c ≤ b.
### Examples
```in
64 0 32
```
```out
undefined
```
```in
64 0 64
```
```out
defined
```
### Reference
```cuda
#include <iostream>
#include <print>

int main()
{
    int b {0};
    int a {0};
    int c {0};
    std::cin >> b >> a >> c;
    bool calls {a < c};
    bool skips {c < b && a < b};
    std::println("{}", calls && skips ? "undefined"
                                      : "defined");
}
```
### Wrong
```cuda
#include <iostream>
#include <print>

int main()
{
    int b {0};
    int a {0};
    int c {0};
    std::cin >> b >> a >> c;
    bool calls {0 < c};
    bool skips {c < b && a < b};
    std::println("{}", calls && skips ? "undefined"
                                      : "defined");
}
```
### Tests
```in
1 0 0
```
```in
1 0 1
```
```in
128 64 64
```
```in
128 64 100
```
```in
1024 1024 512
```
```in
256 10 0
```
### Witness
```in
64 32 16
```
