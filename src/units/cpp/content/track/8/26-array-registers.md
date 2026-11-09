# 8.26 The registers of a thread's array, its index known or not
Part: the registers a thread's array takes when its index is known at compile time and when it is not
Clause: CUDA C++ Programming Guide: Device Memory Accesses (Local Memory), CUDA C++ Best Practices Guide 10.2.4 Local Memory, CUDA C++ Programming Guide: cudaFuncGetAttributes
After: 8.05, 8.06
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory Accesses, Local Memory (an array the compiler cannot tell is indexed with constant quantities is placed in local memory); the registers and bytes are read on this machine, the pin

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Count with indices known at compile time: h stays in registers.
__global__ void known(cuda::std::span<const int> a,
                      cuda::std::span<int> out)
{
    int h[8] {};
    for (int x : a) {
        for (int b {0}; b < 8; ++b) {
            if (x % 8 == b) {
                ++h[b];
            }
        }
    }
    for (int b {0}; b < 8; ++b) {
        out[b] = h[b];
    }
}

//: Count with an index read at run time: h goes to local memory.
__global__ void unknown(cuda::std::span<const int> a,
                        cuda::std::span<int> out)
{
    int h[8] {};
    for (int x : a) {
        ++h[x % 8];
    }
    for (int b {0}; b < 8; ++b) {
        out[b] = h[b];
    }
}

int main()
{
    //: Ask for the attributes of both kernels.
    cudaFuncAttributes k {};
    cudaFuncAttributes u {};
    cudaFuncGetAttributes(&k, known);
    cudaFuncGetAttributes(&u, unknown);
    //: Print the registers and the local bytes of each.
    std::println("{} {}", k.numRegs, k.localSizeBytes);
    std::println("{} {}", u.numRegs, u.localSizeBytes);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void hist(cuda::std::span<const int> a,
                     cuda::std::span<int> out)
{
    int h[8] {};
    for (int x : a) {
        ++h[x];
    }
    for (int b {0}; b < 8; ++b) {
        out[b] = h[b];
    }
}

int main()
{
    int data[4] {1, 7, 3, 7};
    int* a {nullptr};
    int* out {nullptr};
    cudaMalloc(&a, sizeof(data));
    cudaMalloc(&out, 8 * sizeof(int));
    cudaMemcpy(a, data, sizeof(data), cudaMemcpyHostToDevice);
    hist<<<1, 1>>>({a, 4}, {out, 8});
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(out);
    cudaFree(a);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void hist(cuda::std::span<const int> a,
                     cuda::std::span<int> out)
{
    int h[8] {};
    for (int x : a) {
        ++h[x];
    }
    for (int b {0}; b < 8; ++b) {
        out[b] = h[b];
    }
}

int main()
{
    int data[4] {1, 7, 8, 7};
    int* a {nullptr};
    int* out {nullptr};
    cudaMalloc(&a, sizeof(data));
    cudaMalloc(&out, 8 * sizeof(int));
    cudaMemcpy(a, data, sizeof(data), cudaMemcpyHostToDevice);
    hist<<<1, 1>>>({a, 4}, {out, 8});
    cudaDeviceSynchronize();
    std::println("done");
    cudaFree(out);
    cudaFree(a);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Alone 1
Form: run
Write a program with a kernel template `hist<K>(cuda::std::span<const int> a, cuda::std::span<int> out)` that runs on one thread.
It counts in an int array h[K], starting at zeros, how many values x of a have each remainder x % K.
Then it writes h[b] to out[b] for b from 0 to K − 1. The kernel takes no local memory.
Read K and the values. Print the local memory per thread of `hist<K>` in bytes, read with cudaFuncGetAttributes, then the K counts.
Input: one line, K and n; one line, the n values separated by spaces.
Output: one line, the local memory in bytes; one line, the K counts separated by spaces.
Limits: K is 1, 2, 4, 8 or 16; 1 ≤ n ≤ 1000; each value is between 0 and 1000000.
### Examples
```in
2 5
1 2 3 4 5
```
```out
0
2 3
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

template <int K>
__global__ void hist(cuda::std::span<const int> a,
                     cuda::std::span<int> out)
{
    int h[K] {};
    for (int x : a) {
        for (int b {0}; b < K; ++b) {
            if (x % K == b) {
                ++h[b];
            }
        }
    }
    for (int b {0}; b < K; ++b) {
        out[b] = h[b];
    }
}

template <int K>
void run(const std::vector<int>& v)
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hist<K>);
    std::println("{}", attr.localSizeBytes);
    int* a {nullptr};
    int* out {nullptr};
    cudaMalloc(&a, v.size() * sizeof(int));
    cudaMalloc(&out, K * sizeof(int));
    cudaMemcpy(a, v.data(), v.size() * sizeof(int),
               cudaMemcpyHostToDevice);
    hist<K><<<1, 1>>>({a, v.size()}, {out, K});
    std::vector<int> h(K);
    cudaMemcpy(h.data(), out, K * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int c : h) {
        std::print("{} ", c);
    }
    std::println();
    cudaFree(out);
    cudaFree(a);
}

int main()
{
    int k {1};
    std::size_t n {1};
    std::cin >> k >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    switch (k) {
    case 1:
        run<1>(v);
        break;
    case 2:
        run<2>(v);
        break;
    case 4:
        run<4>(v);
        break;
    case 8:
        run<8>(v);
        break;
    case 16:
        run<16>(v);
        break;
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

template <int K>
__global__ void hist(cuda::std::span<const int> a,
                     cuda::std::span<int> out)
{
    int h[K] {};
    for (int x : a) {
        ++h[x % K];
    }
    for (int b {0}; b < K; ++b) {
        out[b] = h[b];
    }
}

template <int K>
void run(const std::vector<int>& v)
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, hist<K>);
    std::println("{}", attr.localSizeBytes);
    int* a {nullptr};
    int* out {nullptr};
    cudaMalloc(&a, v.size() * sizeof(int));
    cudaMalloc(&out, K * sizeof(int));
    cudaMemcpy(a, v.data(), v.size() * sizeof(int),
               cudaMemcpyHostToDevice);
    hist<K><<<1, 1>>>({a, v.size()}, {out, K});
    std::vector<int> h(K);
    cudaMemcpy(h.data(), out, K * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int c : h) {
        std::print("{} ", c);
    }
    std::println();
    cudaFree(out);
    cudaFree(a);
}

int main()
{
    int k {1};
    std::size_t n {1};
    std::cin >> k >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    switch (k) {
    case 1:
        run<1>(v);
        break;
    case 2:
        run<2>(v);
        break;
    case 4:
        run<4>(v);
        break;
    case 8:
        run<8>(v);
        break;
    case 16:
        run<16>(v);
        break;
    }
}
```
### Tests
```in
1 1
0
```
```in
4 4
1 2 3 5
```
```in
16 3
1 2 3
```
```in
8 6
1000000 1 9 17 8 3
```
### Witness
```in
8 6
0 1 9 17 8 3
```

## Alone 2
Form: run
Write a program with a kernel template `sort<W>(cuda::std::span<int> a)` that runs on one thread.
It copies the W values of a into an int array v[W], sorts v from smallest to largest, and copies v back to a.
The kernel takes no local memory.
Read W and the values. Print the local memory per thread of `sort<W>` in bytes, read with cudaFuncGetAttributes, then the sorted values.
Input: one line, W and then the W values, separated by spaces.
Output: one line, the local memory in bytes; one line, the W sorted values separated by spaces.
Limits: W is 1, 2, 4 or 8; each value is between -1000 and 1000.
### Examples
```in
4 3 1 4 1
```
```out
0
1 1 3 4
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

template <int W>
__global__ void sort(cuda::std::span<int> a)
{
    int v[W] {};
    for (int j {0}; j < W; ++j) {
        v[j] = a[j];
    }
    for (int i {0}; i + 1 < W; ++i) {
        for (int j {0}; j + 1 < W - i; ++j) {
            if (v[j] > v[j + 1]) {
                int x {v[j]};
                v[j] = v[j + 1];
                v[j + 1] = x;
            }
        }
    }
    for (int j {0}; j < W; ++j) {
        a[j] = v[j];
    }
}

template <int W>
void run(std::vector<int>& v)
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sort<W>);
    std::println("{}", attr.localSizeBytes);
    int* a {nullptr};
    cudaMalloc(&a, W * sizeof(int));
    cudaMemcpy(a, v.data(), W * sizeof(int),
               cudaMemcpyHostToDevice);
    sort<W><<<1, 1>>>({a, W});
    cudaMemcpy(v.data(), a, W * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
    cudaFree(a);
}

int main()
{
    std::size_t w {1};
    std::cin >> w;
    std::vector<int> v(w);
    for (int& x : v) {
        std::cin >> x;
    }
    switch (w) {
    case 1:
        run<1>(v);
        break;
    case 2:
        run<2>(v);
        break;
    case 4:
        run<4>(v);
        break;
    case 8:
        run<8>(v);
        break;
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

template <int W>
__global__ void sort(cuda::std::span<int> a)
{
    int v[W] {};
    for (int j {0}; j < W; ++j) {
        v[j] = a[j];
    }
    for (int i {1}; i < W; ++i) {
        int x {v[i]};
        int j {i};
        while (j > 0 && v[j - 1] > x) {
            v[j] = v[j - 1];
            --j;
        }
        v[j] = x;
    }
    for (int j {0}; j < W; ++j) {
        a[j] = v[j];
    }
}

template <int W>
void run(std::vector<int>& v)
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sort<W>);
    std::println("{}", attr.localSizeBytes);
    int* a {nullptr};
    cudaMalloc(&a, W * sizeof(int));
    cudaMemcpy(a, v.data(), W * sizeof(int),
               cudaMemcpyHostToDevice);
    sort<W><<<1, 1>>>({a, W});
    cudaMemcpy(v.data(), a, W * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
    cudaFree(a);
}

int main()
{
    std::size_t w {1};
    std::cin >> w;
    std::vector<int> v(w);
    for (int& x : v) {
        std::cin >> x;
    }
    switch (w) {
    case 1:
        run<1>(v);
        break;
    case 2:
        run<2>(v);
        break;
    case 4:
        run<4>(v);
        break;
    case 8:
        run<8>(v);
        break;
    }
}
```
### Tests
```in
1 6
```
```in
2 9 -9
```
```in
8 1000 -1000 3 3 0 2 1 -5
```
```in
4 -1 -2 -3 -4
```
### Witness
```in
8 5 -1 3 9 0 2 2 7
```
