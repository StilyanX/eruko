# 8.05 The registers per thread of a kernel
Part: the registers per thread of a kernel, the same by `cudaFuncGetAttributes` and by `--resource-usage`
Clause: CUDA C++ Programming Guide §7.2, CUDA C++ Programming Guide §5.6
After: 8.01
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §7.2 Hardware Multithreading

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Write a kernel whose loop adds K numbers for each thread.
template <int K>
__global__ void sum(cuda::std::span<const float> a,
                    cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < out.size()) {
        float s {0.0f};
        for (int j {0}; j < K; ++j) {
            s += a[t * K + j];
        }
        out[t] = s;
    }
}

int main()
{
    //: Ask for the attributes of two instantiations.
    cudaFuncAttributes one {};
    cudaFuncAttributes many {};
    cudaFuncGetAttributes(&one, sum<1>);
    cudaFuncGetAttributes(&many, sum<16>);
    //: Print the registers, as --resource-usage does.
    std::println("{} {}", one.numRegs, many.numRegs);
}
```

## Verdict 1
```cuda
#include <print>

template <int K>
__global__ void sum(const float* a, float* out, unsigned n)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < n) {
        float s {0.0f};
        for (int j {0}; j < K; ++j) {
            s += a[t * K + j];
        }
        out[t] = s;
    }
}

int main()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sum<8>);
    std::println("{}", attr.numRegs > 0);
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <print>

template <int K>
__global__ void sum(const float* a, float* out, unsigned n)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < n) {
        float s {0.0f};
        for (int j {0}; j < K; ++j) {
            s += a[t * K + j];
        }
        out[t] = s;
    }
}

int main()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sum);
    std::println("{}", attr.numRegs > 0);
}
```
Answer: c++23 ill-formed 19

## Alone 1
Form: run
Write a program with a kernel template `sum<K>(cuda::std::span<const float> a, cuda::std::span<float> out)`.
The thread with global index t below out.size() keeps a float s, starting at 0.0f.
A loop on j from 0 to K − 1 adds a[t · K + j] to s; then the thread writes s to out[t].
Read K and print the registers per thread of `sum<K>`, read with cudaFuncGetAttributes.
Input: one line, K.
Output: one line, the registers per thread of `sum<K>`.
Limits: K is 1, 2, 4, 8 or 16.
### Examples
```in
1
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int K>
__global__ void sum(cuda::std::span<const float> a,
                    cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < out.size()) {
        float s {0.0f};
        for (int j {0}; j < K; ++j) {
            s += a[t * K + j];
        }
        out[t] = s;
    }
}

template <int K>
int registers()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sum<K>);
    return attr.numRegs;
}

int main()
{
    int k {1};
    std::cin >> k;
    int count {0};
    switch (k) {
    case 1:
        count = registers<1>();
        break;
    case 2:
        count = registers<2>();
        break;
    case 4:
        count = registers<4>();
        break;
    case 8:
        count = registers<8>();
        break;
    case 16:
        count = registers<16>();
        break;
    }
    std::println("{}", count);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

template <int K>
__global__ void sum(cuda::std::span<const float> a,
                    cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < out.size()) {
        float s {0.0f};
        for (int j {0}; j < K; ++j) {
            s += a[t * K + j];
        }
        out[t] = s;
    }
}

template <int K>
int registers()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sum<1>);
    return attr.numRegs;
}

int main()
{
    int k {1};
    std::cin >> k;
    int count {0};
    switch (k) {
    case 1:
        count = registers<1>();
        break;
    case 2:
        count = registers<2>();
        break;
    case 4:
        count = registers<4>();
        break;
    case 8:
        count = registers<8>();
        break;
    case 16:
        count = registers<16>();
        break;
    }
    std::println("{}", count);
}
```
### Tests
```in
2
```
```in
4
```
```in
8
```
```in
16
```
### Witness
```in
16
```

## Alone 2
Form: run
Write a program with a kernel template `sum<T>(cuda::std::span<const float> a, cuda::std::span<float> out)`.
The thread with global index t below out.size() keeps a sum s of type T, starting at 0.
A loop on j from 0 to 15 adds a[16t + j] to s; then the thread writes s to out[t].
Read the name of T and print the registers per thread of `sum<T>`, read with cudaFuncGetAttributes.
Input: one line, the word float or the word double.
Output: one line, the registers per thread of `sum<T>`.
Limits: the word is float or double.
### Examples
```in
float
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <string>

template <typename T>
__global__ void sum(cuda::std::span<const float> a,
                    cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < out.size()) {
        T s {0};
        for (int j {0}; j < 16; ++j) {
            s += a[t * 16 + j];
        }
        out[t] = s;
    }
}

template <typename T>
int registers()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sum<T>);
    return attr.numRegs;
}

int main()
{
    std::string type;
    std::cin >> type;
    int count {type == "double" ? registers<double>()
                                : registers<float>()};
    std::println("{}", count);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <string>

template <typename T>
__global__ void sum(cuda::std::span<const float> a,
                    cuda::std::span<float> out)
{
    unsigned t {blockIdx.x * blockDim.x + threadIdx.x};
    if (t < out.size()) {
        float s {0};
        for (int j {0}; j < 16; ++j) {
            s += a[t * 16 + j];
        }
        out[t] = s;
    }
}

template <typename T>
int registers()
{
    cudaFuncAttributes attr {};
    cudaFuncGetAttributes(&attr, sum<T>);
    return attr.numRegs;
}

int main()
{
    std::string type;
    std::cin >> type;
    int count {type == "double" ? registers<double>()
                                : registers<float>()};
    std::println("{}", count);
}
```
### Tests
```in
float
```
```in
double
```
### Witness
```in
double
```
