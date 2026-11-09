# 8.29 A transpose through shared memory with one way of conflict
Part: a transpose through shared memory with one way of conflict
Clause: CUDA C++ Best Practices Guide 10.2.3.1 Shared Memory and Memory Banks, CUDA C++ Best Practices Guide 10.2.3.3 Shared Memory in Matrix Multiplication (C=AA^T), CUDA C++ Programming Guide: __syncthreads
After: 8.28
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.3.3 (a tile padded to 32 by 33 floats puts the words of one column in 32 different banks); the ways are counted from the item's own addresses for one warp, not read from the hardware

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Read a column of a 32 by 32 tile and of a 32 by 33 tile.
__global__ void column(cuda::std::span<unsigned> plain,
                       cuda::std::span<unsigned> padded)
{
    __shared__ float a[32][32];
    __shared__ float b[32][33];
    unsigned lane {threadIdx.x};
    auto x {__cvta_generic_to_shared(&a[lane][0])};
    auto y {__cvta_generic_to_shared(&b[lane][0])};
    //: Keep the bank of each word: one bank, then 32 banks.
    plain[lane] = static_cast<unsigned>(x / 4 % 32);
    padded[lane] = static_cast<unsigned>(y / 4 % 32);
}

int main()
{
    //: Run one warp and print the bank of each lane's word.
    unsigned* plain {nullptr};
    unsigned* padded {nullptr};
    cudaMallocManaged(&plain, 32 * sizeof(unsigned));
    cudaMallocManaged(&padded, 32 * sizeof(unsigned));
    column<<<1, 32>>>({plain, 32}, {padded, 32});
    cudaDeviceSynchronize();
    for (int lane {0}; lane < 32; ++lane) {
        std::println("{} {}", plain[lane], padded[lane]);
    }
    cudaFree(padded);
    cudaFree(plain);
}
```

## Verdict 1
```cuda
constexpr int column(int pitch)
{
    int most {0};
    for (int bank {0}; bank < 32; ++bank) {
        int count {0};
        for (int row {0}; row < 32; ++row) {
            if (row * pitch % 32 == bank) {
                ++count;
            }
        }
        most = count > most ? count : most;
    }
    return most;
}

static_assert(column(33) == 1);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
constexpr int column(int pitch)
{
    int most {0};
    for (int bank {0}; bank < 32; ++bank) {
        int count {0};
        for (int row {0}; row < 32; ++row) {
            if (row * pitch % 32 == bank) {
                ++count;
            }
        }
        most = count > most ? count : most;
    }
    return most;
}

static_assert(column(34) == 1);

int main()
{
}
```
Answer: c++23 ill-formed 16

## Alone 1
Form: run
Write a program that reads n and transposes the n × n float matrix a, with a[r][c] = r · n + c, into b, so that b[r][c] = a[c][r].
One kernel does it, in blocks of 32 × 32 threads; each block copies a 32 × 32 tile of a into a `__shared__` tile, row by row, waits, and writes b from the tile's columns.
The reads of the tile have one way of conflict.
The 32 threads of block (0, 0) with threadIdx.y equal to 0 record the shared address they read the tile at, those that read it.
Print the ways of conflict among those addresses, then row n − 1 of b.
Input: one line, n.
Output: one line, the ways of conflict; one line, the n values of row n − 1 of b, separated by spaces.
Limits: 1 ≤ n ≤ 64.
### Examples
```in
1
```
```out
1
0
```
### Reference
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <iostream>
#include <map>
#include <print>
#include <set>
#include <vector>

__global__ void flip(cuda::std::span<const float> a,
                     cuda::std::span<float> b, unsigned n,
                     cuda::std::span<unsigned long long> at)
{
    __shared__ float tile[32][33];
    unsigned x {blockIdx.x * 32 + threadIdx.x};
    unsigned y {blockIdx.y * 32 + threadIdx.y};
    if (x < n && y < n) {
        tile[threadIdx.y][threadIdx.x] = a[y * n + x];
    }
    __syncthreads();
    unsigned c {blockIdx.y * 32 + threadIdx.x};
    unsigned r {blockIdx.x * 32 + threadIdx.y};
    if (c < n && r < n) {
        const float* p {&tile[threadIdx.x][threadIdx.y]};
        if (blockIdx.x + blockIdx.y + threadIdx.y == 0) {
            at[threadIdx.x] = __cvta_generic_to_shared(p);
        }
        b[r * n + c] = *p;
    }
}

std::size_t ways(cuda::std::span<const unsigned long long> at)
{
    std::map<unsigned, std::set<unsigned>> banks {};
    for (unsigned long long a : at) {
        if (a != ~0ull) {
            auto word {static_cast<unsigned>(a / 4)};
            banks[word % 32].insert(word);
        }
    }
    std::size_t most {0};
    for (const auto& [bank, words] : banks) {
        most = std::max(most, words.size());
    }
    return most;
}

int main()
{
    unsigned n {1};
    std::cin >> n;
    std::vector<float> v(n * n);
    for (std::size_t i {0}; i < v.size(); ++i) {
        v[i] = static_cast<float>(i);
    }
    std::size_t bytes {v.size() * sizeof(float)};
    float* a {nullptr};
    float* b {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, bytes);
    cudaMalloc(&b, bytes);
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(at, 0xff, 32 * sizeof(*at));
    cudaMemcpy(a, v.data(), bytes, cudaMemcpyHostToDevice);
    unsigned g {(n + 31) / 32};
    flip<<<dim3 {g, g}, dim3 {32, 32}>>>(
        {a, v.size()}, {b, v.size()}, n, {at, 32});
    cudaMemcpy(v.data(), b, bytes, cudaMemcpyDeviceToHost);
    std::println("{}", ways({at, 32}));
    for (unsigned c {0}; c < n; ++c) {
        std::print("{} ", v[(n - 1) * n + c]);
    }
    std::println();
    cudaFree(at);
    cudaFree(b);
    cudaFree(a);
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
#include <vector>

__global__ void flip(cuda::std::span<const float> a,
                     cuda::std::span<float> b, unsigned n,
                     cuda::std::span<unsigned long long> at)
{
    __shared__ float tile[32][32];
    unsigned x {blockIdx.x * 32 + threadIdx.x};
    unsigned y {blockIdx.y * 32 + threadIdx.y};
    if (x < n && y < n) {
        tile[threadIdx.y][threadIdx.x] = a[y * n + x];
    }
    __syncthreads();
    unsigned c {blockIdx.y * 32 + threadIdx.x};
    unsigned r {blockIdx.x * 32 + threadIdx.y};
    if (c < n && r < n) {
        const float* p {&tile[threadIdx.x][threadIdx.y]};
        if (blockIdx.x + blockIdx.y + threadIdx.y == 0) {
            at[threadIdx.x] = __cvta_generic_to_shared(p);
        }
        b[r * n + c] = *p;
    }
}

std::size_t ways(cuda::std::span<const unsigned long long> at)
{
    std::map<unsigned, std::set<unsigned>> banks {};
    for (unsigned long long a : at) {
        if (a != ~0ull) {
            auto word {static_cast<unsigned>(a / 4)};
            banks[word % 32].insert(word);
        }
    }
    std::size_t most {0};
    for (const auto& [bank, words] : banks) {
        most = std::max(most, words.size());
    }
    return most;
}

int main()
{
    unsigned n {1};
    std::cin >> n;
    std::vector<float> v(n * n);
    for (std::size_t i {0}; i < v.size(); ++i) {
        v[i] = static_cast<float>(i);
    }
    std::size_t bytes {v.size() * sizeof(float)};
    float* a {nullptr};
    float* b {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, bytes);
    cudaMalloc(&b, bytes);
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(at, 0xff, 32 * sizeof(*at));
    cudaMemcpy(a, v.data(), bytes, cudaMemcpyHostToDevice);
    unsigned g {(n + 31) / 32};
    flip<<<dim3 {g, g}, dim3 {32, 32}>>>(
        {a, v.size()}, {b, v.size()}, n, {at, 32});
    cudaMemcpy(v.data(), b, bytes, cudaMemcpyDeviceToHost);
    std::println("{}", ways({at, 32}));
    for (unsigned c {0}; c < n; ++c) {
        std::print("{} ", v[(n - 1) * n + c]);
    }
    std::println();
    cudaFree(at);
    cudaFree(b);
    cudaFree(a);
}
```
### Tests
```in
3
```
```in
32
```
```in
33
```
```in
64
```
### Witness
```in
4
```

## Alone 2
Form: run
Write a program that reads h and w and transposes the h × w float matrix a, with a[r][c] = r · w + c, into the w × h matrix b, so that b[r][c] = a[c][r].
One kernel does it, in blocks of 32 × 32 threads; each block writes a 32 × 32 tile of a into the columns of a `__shared__` tile, waits, and writes b from the tile's rows.
The writes to the tile have one way of conflict.
The 32 threads of block (0, 0) with threadIdx.y equal to 0 record the shared address they write the tile at, those that write it.
Print the ways of conflict among those addresses, then row w − 1 of b.
Input: one line, h and w.
Output: one line, the ways of conflict; one line, the h values of row w − 1 of b, separated by spaces.
Limits: 1 ≤ h ≤ 100; 1 ≤ w ≤ 100.
### Examples
```in
3 1
```
```out
1
0 1 2
```
### Reference
```cuda
#include <algorithm>
#include <cuda/std/span>
#include <iostream>
#include <map>
#include <print>
#include <set>
#include <vector>

__global__ void flip(cuda::std::span<const float> a,
                     cuda::std::span<float> b,
                     unsigned h, unsigned w,
                     cuda::std::span<unsigned long long> at)
{
    __shared__ float tile[32][33];
    unsigned x {blockIdx.x * 32 + threadIdx.x};
    unsigned y {blockIdx.y * 32 + threadIdx.y};
    if (x < w && y < h) {
        float* p {&tile[threadIdx.x][threadIdx.y]};
        if (blockIdx.x + blockIdx.y + threadIdx.y == 0) {
            at[threadIdx.x] = __cvta_generic_to_shared(p);
        }
        *p = a[y * w + x];
    }
    __syncthreads();
    unsigned c {blockIdx.y * 32 + threadIdx.x};
    unsigned r {blockIdx.x * 32 + threadIdx.y};
    if (c < h && r < w) {
        b[r * h + c] = tile[threadIdx.y][threadIdx.x];
    }
}

std::size_t ways(cuda::std::span<const unsigned long long> at)
{
    std::map<unsigned, std::set<unsigned>> banks {};
    for (unsigned long long a : at) {
        if (a != ~0ull) {
            auto word {static_cast<unsigned>(a / 4)};
            banks[word % 32].insert(word);
        }
    }
    std::size_t most {0};
    for (const auto& [bank, words] : banks) {
        most = std::max(most, words.size());
    }
    return most;
}

int main()
{
    unsigned h {1};
    unsigned w {1};
    std::cin >> h >> w;
    std::vector<float> v(h * w);
    for (std::size_t i {0}; i < v.size(); ++i) {
        v[i] = static_cast<float>(i);
    }
    std::size_t bytes {v.size() * sizeof(float)};
    float* a {nullptr};
    float* b {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, bytes);
    cudaMalloc(&b, bytes);
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(at, 0xff, 32 * sizeof(*at));
    cudaMemcpy(a, v.data(), bytes, cudaMemcpyHostToDevice);
    dim3 grid {(w + 31) / 32, (h + 31) / 32};
    flip<<<grid, dim3 {32, 32}>>>(
        {a, v.size()}, {b, v.size()}, h, w, {at, 32});
    cudaMemcpy(v.data(), b, bytes, cudaMemcpyDeviceToHost);
    std::println("{}", ways({at, 32}));
    for (unsigned c {0}; c < h; ++c) {
        std::print("{} ", v[(w - 1) * h + c]);
    }
    std::println();
    cudaFree(at);
    cudaFree(b);
    cudaFree(a);
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
#include <vector>

__global__ void flip(cuda::std::span<const float> a,
                     cuda::std::span<float> b,
                     unsigned h, unsigned w,
                     cuda::std::span<unsigned long long> at)
{
    __shared__ float tile[33][32];
    unsigned x {blockIdx.x * 32 + threadIdx.x};
    unsigned y {blockIdx.y * 32 + threadIdx.y};
    if (x < w && y < h) {
        float* p {&tile[threadIdx.x][threadIdx.y]};
        if (blockIdx.x + blockIdx.y + threadIdx.y == 0) {
            at[threadIdx.x] = __cvta_generic_to_shared(p);
        }
        *p = a[y * w + x];
    }
    __syncthreads();
    unsigned c {blockIdx.y * 32 + threadIdx.x};
    unsigned r {blockIdx.x * 32 + threadIdx.y};
    if (c < h && r < w) {
        b[r * h + c] = tile[threadIdx.y][threadIdx.x];
    }
}

std::size_t ways(cuda::std::span<const unsigned long long> at)
{
    std::map<unsigned, std::set<unsigned>> banks {};
    for (unsigned long long a : at) {
        if (a != ~0ull) {
            auto word {static_cast<unsigned>(a / 4)};
            banks[word % 32].insert(word);
        }
    }
    std::size_t most {0};
    for (const auto& [bank, words] : banks) {
        most = std::max(most, words.size());
    }
    return most;
}

int main()
{
    unsigned h {1};
    unsigned w {1};
    std::cin >> h >> w;
    std::vector<float> v(h * w);
    for (std::size_t i {0}; i < v.size(); ++i) {
        v[i] = static_cast<float>(i);
    }
    std::size_t bytes {v.size() * sizeof(float)};
    float* a {nullptr};
    float* b {nullptr};
    unsigned long long* at {nullptr};
    cudaMalloc(&a, bytes);
    cudaMalloc(&b, bytes);
    cudaMallocManaged(&at, 32 * sizeof(*at));
    cudaMemset(at, 0xff, 32 * sizeof(*at));
    cudaMemcpy(a, v.data(), bytes, cudaMemcpyHostToDevice);
    dim3 grid {(w + 31) / 32, (h + 31) / 32};
    flip<<<grid, dim3 {32, 32}>>>(
        {a, v.size()}, {b, v.size()}, h, w, {at, 32});
    cudaMemcpy(v.data(), b, bytes, cudaMemcpyDeviceToHost);
    std::println("{}", ways({at, 32}));
    for (unsigned c {0}; c < h; ++c) {
        std::print("{} ", v[(w - 1) * h + c]);
    }
    std::println();
    cudaFree(at);
    cudaFree(b);
    cudaFree(a);
}
```
### Tests
```in
1 1
```
```in
2 3
```
```in
100 100
```
```in
5 40
```
```in
40 5
```
### Witness
```in
1 4
```
