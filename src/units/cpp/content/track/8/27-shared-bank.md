# 8.27 The bank of each shared-memory word
Part: the bank of each shared-memory word
Clause: CUDA C++ Programming Guide: Compute Capabilities, Shared Memory (32 banks, successive 32-bit words in successive banks), CUDA C++ Best Practices Guide 10.2.3 Shared Memory, CUDA C++ Programming Guide: __cvta_generic_to_shared
After: 8.16
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 10.2.3.1 Shared Memory and Memory Banks (32 banks of 32-bit words for compute capability 5.x and higher); the bank is found from the item's own addresses, not read from the hardware

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Record the bank of the word each lane takes in column 0.
__global__ void column(cuda::std::span<unsigned> plain,
                       cuda::std::span<unsigned> padded)
{
    __shared__ float a[32][32];
    __shared__ float b[32][33];
    unsigned lane {threadIdx.x};
    //: Divide the byte offset by 4, then take it mod 32.
    auto x {__cvta_generic_to_shared(&a[lane][0])};
    auto y {__cvta_generic_to_shared(&b[lane][0])};
    plain[lane] = static_cast<unsigned>(x / 4 % 32);
    padded[lane] = static_cast<unsigned>(y / 4 % 32);
}

//: Print the 32 banks on one line.
void show(cuda::std::span<const unsigned> bank)
{
    for (unsigned b : bank) {
        std::print("{} ", b);
    }
    std::println();
}

int main()
{
    //: Run one warp and print both columns' banks.
    unsigned* plain {nullptr};
    unsigned* padded {nullptr};
    cudaMallocManaged(&plain, 32 * sizeof(unsigned));
    cudaMallocManaged(&padded, 32 * sizeof(unsigned));
    column<<<1, 32>>>({plain, 32}, {padded, 32});
    cudaDeviceSynchronize();
    show({plain, 32});
    show({padded, 32});
    cudaFree(padded);
    cudaFree(plain);
}
```

## Verdict 1
```cuda
constexpr int bank(int byte)
{
    return byte / 4 % 32;
}

static_assert(bank(3 * sizeof(double)) == 6);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
constexpr int bank(int byte)
{
    return byte / 4 % 32;
}

static_assert(bank(17 * sizeof(double)) == 17);

int main()
{
}
```
Answer: c++23 ill-formed 6

## Alone 1
Form: run
Write a program that reads n indices into a `__shared__` float array s of 1024 elements.
A kernel of one warp finds, for each thread t below n, the shared-memory bank of the word s[idx[t]], from its address.
Print the n banks in the order of the indices.
Input: one line, n and then the n indices, separated by spaces.
Output: one line, the n banks separated by spaces.
Limits: 1 ≤ n ≤ 32; each index is between 0 and 1023.
### Examples
```in
3 0 32 64
```
```out
0 0 0
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void where(cuda::std::span<const int> idx,
                      cuda::std::span<unsigned> bank)
{
    __shared__ float s[1024];
    std::size_t t {threadIdx.x};
    if (t < idx.size()) {
        auto at {__cvta_generic_to_shared(&s[idx[t]])};
        bank[t] = static_cast<unsigned>(at / 4 % 32);
    }
}

int main()
{
    std::size_t n {1};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* idx {nullptr};
    unsigned* bank {nullptr};
    cudaMalloc(&idx, n * sizeof(int));
    cudaMallocManaged(&bank, n * sizeof(unsigned));
    cudaMemcpy(idx, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    where<<<1, 32>>>({idx, n}, {bank, n});
    cudaDeviceSynchronize();
    for (std::size_t t {0}; t < n; ++t) {
        std::print("{} ", bank[t]);
    }
    std::println();
    cudaFree(bank);
    cudaFree(idx);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void where(cuda::std::span<const int> idx,
                      cuda::std::span<unsigned> bank)
{
    __shared__ float s[1024];
    std::size_t t {threadIdx.x};
    if (t < idx.size()) {
        auto at {__cvta_generic_to_shared(&s[idx[t]])};
        bank[t] = static_cast<unsigned>(at % 32);
    }
}

int main()
{
    std::size_t n {1};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* idx {nullptr};
    unsigned* bank {nullptr};
    cudaMalloc(&idx, n * sizeof(int));
    cudaMallocManaged(&bank, n * sizeof(unsigned));
    cudaMemcpy(idx, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    where<<<1, 32>>>({idx, n}, {bank, n});
    cudaDeviceSynchronize();
    for (std::size_t t {0}; t < n; ++t) {
        std::print("{} ", bank[t]);
    }
    std::println();
    cudaFree(bank);
    cudaFree(idx);
}
```
### Tests
```in
1 1023
```
```in
4 5 37 100 1000
```
```in
32 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
```
```in
2 31 63
```
### Witness
```in
2 1 33
```

## Alone 2
Form: run
Write a program that reads n indices into a `__shared__` double array s of 512 elements.
A kernel of one warp finds, for each thread t below n, the shared-memory bank of the first word that s[idx[t]] covers, from its address.
Print the n banks in the order of the indices.
Input: one line, n and then the n indices, separated by spaces.
Output: one line, the n banks separated by spaces.
Limits: 1 ≤ n ≤ 32; each index is between 0 and 511.
### Examples
```in
2 0 32
```
```out
0 0
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void where(cuda::std::span<const int> idx,
                      cuda::std::span<unsigned> bank)
{
    __shared__ double s[512];
    std::size_t t {threadIdx.x};
    if (t < idx.size()) {
        auto at {__cvta_generic_to_shared(&s[idx[t]])};
        bank[t] = static_cast<unsigned>(at / 4 % 32);
    }
}

int main()
{
    std::size_t n {1};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* idx {nullptr};
    unsigned* bank {nullptr};
    cudaMalloc(&idx, n * sizeof(int));
    cudaMallocManaged(&bank, n * sizeof(unsigned));
    cudaMemcpy(idx, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    where<<<1, 32>>>({idx, n}, {bank, n});
    cudaDeviceSynchronize();
    for (std::size_t t {0}; t < n; ++t) {
        std::print("{} ", bank[t]);
    }
    std::println();
    cudaFree(bank);
    cudaFree(idx);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void where(cuda::std::span<const int> idx,
                      cuda::std::span<unsigned> bank)
{
    __shared__ double s[512];
    std::size_t t {threadIdx.x};
    if (t < idx.size()) {
        auto at {__cvta_generic_to_shared(&s[idx[t]])};
        bank[t] = static_cast<unsigned>(at / 8 % 32);
    }
}

int main()
{
    std::size_t n {1};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* idx {nullptr};
    unsigned* bank {nullptr};
    cudaMalloc(&idx, n * sizeof(int));
    cudaMallocManaged(&bank, n * sizeof(unsigned));
    cudaMemcpy(idx, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    where<<<1, 32>>>({idx, n}, {bank, n});
    cudaDeviceSynchronize();
    for (std::size_t t {0}; t < n; ++t) {
        std::print("{} ", bank[t]);
    }
    std::println();
    cudaFree(bank);
    cudaFree(idx);
}
```
### Tests
```in
1 511
```
```in
3 15 16 17
```
```in
32 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
```
```in
4 100 200 300 400
```
### Witness
```in
1 1
```
