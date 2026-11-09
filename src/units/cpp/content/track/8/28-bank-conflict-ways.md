# 8.28 The ways of conflict in one warp's access to shared memory
Part: the ways of conflict in one warp's access to shared memory
Clause: CUDA C++ Programming Guide: Compute Capabilities, Shared Memory (a request with n addresses in n distinct words of one bank is split into n requests; one word read by many threads is a broadcast), CUDA C++ Best Practices Guide 10.2.3.1 Shared Memory and Memory Banks
After: 8.27
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.3.1 (32 banks of 32-bit words; n distinct words in one bank make an n-way conflict; threads reading the same word do not conflict); the ways are counted from the item's own addresses for one warp, not read from the hardware

## Example
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <map>
#include <print>
#include <set>

//: Record the shared address each lane reads, at stride k.
__global__ void where(unsigned k,
                      cuda::std::span<unsigned long long> at)
{
    __shared__ float s[1024];
    unsigned lane {threadIdx.x};
    at[lane] = __cvta_generic_to_shared(&s[k * lane % 1024]);
}

//: Gather the distinct words of each bank; the most is the ways.
std::size_t ways(cuda::std::span<const unsigned long long> at)
{
    std::map<unsigned, std::set<unsigned>> banks {};
    for (unsigned long long a : at) {
        auto word {static_cast<unsigned>(a / 4)};
        banks[word % 32].insert(word);
    }
    std::size_t most {0};
    for (const auto& [bank, words] : banks) {
        most = std::max(most, words.size());
    }
    return most;
}

int main()
{
    //: Read at stride 0, 1, 2, 32 and 33, and print the ways.
    unsigned long long* at {nullptr};
    cudaMallocManaged(&at, 32 * sizeof(*at));
    for (unsigned k : {0u, 1u, 2u, 32u, 33u}) {
        where<<<1, 32>>>(k, {at, 32});
        cudaDeviceSynchronize();
        std::println("{} {}", k, ways({at, 32}));
    }
    cudaFree(at);
}
```

## Verdict 1
```cuda
constexpr int ways(int stride)
{
    int most {0};
    for (int bank {0}; bank < 32; ++bank) {
        int count {0};
        for (int lane {0}; lane < 32; ++lane) {
            if (stride * lane % 32 == bank) {
                ++count;
            }
        }
        most = count > most ? count : most;
    }
    return most;
}

static_assert(ways(2) == 2);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
constexpr int ways(int stride)
{
    int most {0};
    for (int bank {0}; bank < 32; ++bank) {
        int count {0};
        for (int lane {0}; lane < 32; ++lane) {
            if (stride * lane % 32 == bank) {
                ++count;
            }
        }
        most = count > most ? count : most;
    }
    return most;
}

static_assert(ways(16) == 2);

int main()
{
}
```
Answer: c++23 ill-formed 16

## Count
Columns: ways
```cuda
#include <cstdio>

__device__ void ways(const float* p,
                     int line = __builtin_LINE())
{
    auto at {__cvta_generic_to_shared(p)};
    auto word {static_cast<unsigned>(at / 4)};
    unsigned same {__match_any_sync(0xffffffffu, word)};
    int lane {static_cast<int>(threadIdx.x)};
    bool first {lane == __ffs(same) - 1};
    unsigned bank {first ? word % 32 : 32u};
    unsigned peers {__match_any_sync(0xffffffffu, bank)};
    unsigned n {bank < 32 ? __popc(peers) : 0u};
    unsigned most {__reduce_max_sync(0xffffffffu, n)};
    for (unsigned k {0}; k < most && lane == 0; ++k) {
        printf("@%d ways\n", line);
    }
}

__global__ void warp()
{
    __shared__ float s[1024];
    unsigned lane {threadIdx.x};
    ways(&s[lane]);
    ways(&s[2 * lane]);
    ways(&s[32 * lane]);
    ways(&s[lane / 4]);
    ways(&s[33 * lane]);
}

int main()
{
    warp<<<1, 32>>>();
    cudaDeviceSynchronize();
}
```

## Alone 1
Form: run
Write a program that reads 32 indices and launches one warp of 32 threads.
Lane l reads the float s[idx[l]] of a `__shared__` float array s of 1024 elements.
Print the ways of conflict of the warp's read, counted from the shared addresses of the 32 lanes.
Input: one line, the 32 indices, separated by spaces.
Output: one line, the ways of conflict.
Limits: each index is between 0 and 1023.
### Examples
```in
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
```
```out
1
```
### Reference
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <iostream>
#include <map>
#include <print>
#include <set>

__global__ void where(cuda::std::span<const int> idx,
                      cuda::std::span<unsigned long long> at)
{
    __shared__ float s[1024];
    unsigned lane {threadIdx.x};
    at[lane] = __cvta_generic_to_shared(&s[idx[lane]]);
}

int main()
{
    int* idx {nullptr};
    unsigned long long* at {nullptr};
    cudaMallocManaged(&idx, 32 * sizeof(int));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    for (int lane {0}; lane < 32; ++lane) {
        std::cin >> idx[lane];
    }
    where<<<1, 32>>>({idx, 32}, {at, 32});
    cudaDeviceSynchronize();
    std::map<unsigned, std::set<unsigned>> banks {};
    for (int lane {0}; lane < 32; ++lane) {
        auto word {static_cast<unsigned>(at[lane] / 4)};
        banks[word % 32].insert(word);
    }
    std::size_t ways {0};
    for (const auto& [bank, words] : banks) {
        ways = std::max(ways, words.size());
    }
    std::println("{}", ways);
    cudaFree(at);
    cudaFree(idx);
}
```
### Wrong
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <iostream>
#include <map>
#include <print>
#include <set>

__global__ void where(cuda::std::span<const int> idx,
                      cuda::std::span<unsigned long long> at)
{
    __shared__ float s[1024];
    unsigned lane {threadIdx.x};
    at[lane] = __cvta_generic_to_shared(&s[idx[lane]]);
}

int main()
{
    int* idx {nullptr};
    unsigned long long* at {nullptr};
    cudaMallocManaged(&idx, 32 * sizeof(int));
    cudaMallocManaged(&at, 32 * sizeof(*at));
    for (int lane {0}; lane < 32; ++lane) {
        std::cin >> idx[lane];
    }
    where<<<1, 32>>>({idx, 32}, {at, 32});
    cudaDeviceSynchronize();
    std::map<unsigned, std::multiset<unsigned>> banks {};
    for (int lane {0}; lane < 32; ++lane) {
        auto word {static_cast<unsigned>(at[lane] / 4)};
        banks[word % 32].insert(word);
    }
    std::size_t ways {0};
    for (const auto& [bank, words] : banks) {
        ways = std::max(ways, words.size());
    }
    std::println("{}", ways);
    cudaFree(at);
    cudaFree(idx);
}
```
### Tests
```in
0 32 64 96 128 160 192 224 256 288 320 352 384 416 448 480 512 544 576 608 640 672 704 736 768 800 832 864 896 928 960 992
```
```in
0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32 0 32
```
```in
1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023 1023
```
```in
5 37 69 5 37 69 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
```
### Witness
```in
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

## Alone 2
Form: run
Write a program that reads w and c and launches one warp of 32 threads.
A `__shared__` float array tile of 2048 elements holds rows of w floats; lane l reads the float in row l and column c, tile[l · w + c].
Print the ways of conflict of the warp's read, counted from the shared addresses of the 32 lanes.
Input: one line, w and c.
Output: one line, the ways of conflict.
Limits: 1 ≤ w ≤ 64; 0 ≤ c < w.
### Examples
```in
32 0
```
```out
32
```
### Reference
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <iostream>
#include <map>
#include <print>
#include <set>

__global__ void column(unsigned w, unsigned c,
                       cuda::std::span<unsigned long long> at)
{
    __shared__ float tile[32 * 64];
    unsigned lane {threadIdx.x};
    at[lane] = __cvta_generic_to_shared(&tile[lane * w + c]);
}

int main()
{
    unsigned w {1};
    unsigned c {0};
    std::cin >> w >> c;
    unsigned long long* at {nullptr};
    cudaMallocManaged(&at, 32 * sizeof(*at));
    column<<<1, 32>>>(w, c, {at, 32});
    cudaDeviceSynchronize();
    std::map<unsigned, std::set<unsigned>> banks {};
    for (int lane {0}; lane < 32; ++lane) {
        auto word {static_cast<unsigned>(at[lane] / 4)};
        banks[word % 32].insert(word);
    }
    std::size_t ways {0};
    for (const auto& [bank, words] : banks) {
        ways = std::max(ways, words.size());
    }
    std::println("{}", ways);
    cudaFree(at);
}
```
### Wrong
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <iostream>
#include <map>
#include <print>
#include <set>

__global__ void column(unsigned w, unsigned c,
                       cuda::std::span<unsigned long long> at)
{
    __shared__ float tile[32 * 64];
    unsigned lane {threadIdx.x};
    at[lane] = __cvta_generic_to_shared(&tile[lane * w + c]);
}

int main()
{
    unsigned w {1};
    unsigned c {0};
    std::cin >> w >> c;
    unsigned long long* at {nullptr};
    cudaMallocManaged(&at, 32 * sizeof(*at));
    column<<<1, 32>>>(w, c, {at, 32});
    cudaDeviceSynchronize();
    std::map<unsigned, std::set<unsigned>> banks {};
    for (int lane {0}; lane < 32; ++lane) {
        auto word {static_cast<unsigned>(at[lane] / 4)};
        banks[at[lane] % 32].insert(word);
    }
    std::size_t ways {0};
    for (const auto& [bank, words] : banks) {
        ways = std::max(ways, words.size());
    }
    std::println("{}", ways);
    cudaFree(at);
}
```
### Tests
```in
1 0
```
```in
64 63
```
```in
34 5
```
```in
40 1
```
```in
2 1
```
### Witness
```in
33 0
```
