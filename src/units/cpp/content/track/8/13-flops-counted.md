# 8.13 The operations a kernel does per element, counted by its scalar type
Part: the floating-point operations a kernel does per element, counted by a scalar type that counts itself
Clause: CUDA C++ Programming Guide: Function Execution Space Specifiers, [over.oper]
After: none
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Function Execution Space Specifiers; Williams, Waterman and Patterson, Roofline (2009), the operations a kernel does

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Keep one total of operations on the device.
__device__ unsigned long long ops {0};

//: Wrap a float so that each add and multiply counts itself.
struct Num {
    float v {0.0f};
};

__device__ Num operator+(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v + b.v};
}

__device__ Num operator*(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v * b.v};
}

__device__ Num operator-(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v - b.v};
}

__device__ Num& operator+=(Num& a, Num b)
{
    a = a + b;
    return a;
}

//: Write the kernel with Num: three multiplies and three adds.
__global__ void cubic(cuda::std::span<const float> x,
                      cuda::std::span<float> y)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < x.size()) {
        Num t {x[i]};
        Num p {(Num {2.0f} * t + Num {1.0f}) * t + Num {3.0f}};
        y[i] = (p * t + Num {4.0f}).v;
    }
}

int main()
{
    //: Make the arrays, run the kernel, read the total back.
    std::size_t n {1000};
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMemset(x, 0, n * sizeof(float));
    cubic<<<(n + 255) / 256, 256>>>({x, n}, {y, n});
    unsigned long long total {0};
    cudaMemcpyFromSymbol(&total, ops, sizeof(total));
    //: Print the operations per element.
    std::println("{}", total / n);
    cudaFree(y);
    cudaFree(x);
}
```

## Verdict 1
```cuda
#include <print>

struct Num {
    float v {0.0f};
    int* ops {nullptr};
};

Num operator*(Num a, Num b)
{
    ++*a.ops;
    return Num {a.v * b.v, a.ops};
}

__global__ void cube(float* y, int* counts)
{
    int ops {0};
    Num t {y[threadIdx.x], &ops};
    y[threadIdx.x] = (t * t * t).v;
    counts[threadIdx.x] = ops;
}

int main()
{
    float* y {nullptr};
    int* counts {nullptr};
    cudaMalloc(&y, 32 * sizeof(float));
    cudaMallocManaged(&counts, 32 * sizeof(int));
    cudaMemset(y, 0, 32 * sizeof(float));
    cube<<<1, 32>>>(y, counts);
    cudaDeviceSynchronize();
    std::println("{}", counts[31]);
    cudaFree(counts);
    cudaFree(y);
}
```
Answer: c++23 ill-formed 18

## Verdict 2
```cuda
#include <print>

struct Num {
    float v {0.0f};
    int* ops {nullptr};
};

__device__ Num operator*(Num a, Num b)
{
    ++*a.ops;
    return Num {a.v * b.v, a.ops};
}

__global__ void cube(float* y, int* counts)
{
    int ops {0};
    Num t {y[threadIdx.x], &ops};
    y[threadIdx.x] = (t * t * t).v;
    counts[threadIdx.x] = ops;
}

int main()
{
    float* y {nullptr};
    int* counts {nullptr};
    cudaMalloc(&y, 32 * sizeof(float));
    cudaMallocManaged(&counts, 32 * sizeof(int));
    cudaMemset(y, 0, 32 * sizeof(float));
    cube<<<1, 32>>>(y, counts);
    cudaDeviceSynchronize();
    std::println("{}", counts[31]);
    cudaFree(counts);
    cudaFree(y);
}
```
Answer: c++23 defined

## Count
Columns: adds, muls
```cuda
#include <cstdio>

__device__ int adds {0};
__device__ int muls {0};

struct Num {
    float v {0.0f};
};

__device__ Num operator+(Num a, Num b)
{
    ++adds;
    return Num {a.v + b.v};
}

__device__ Num operator*(Num a, Num b)
{
    ++muls;
    return Num {a.v * b.v};
}

__device__ Num at(Num v, int line = __builtin_LINE())
{
    for (; adds > 0; --adds) {
        printf("@%d adds\n", line);
    }
    for (; muls > 0; --muls) {
        printf("@%d muls\n", line);
    }
    return v;
}

__global__ void step(float* out)
{
    Num x {out[0]};
    Num y {at(x * x + x)};
    Num z {at((y + x) * (y + x))};
    out[1] = at(z * z * z + y * Num {2.0f}).v;
}

int main()
{
    float* out {nullptr};
    cudaMalloc(&out, 2 * sizeof(float));
    cudaMemset(out, 0, 2 * sizeof(float));
    step<<<1, 1>>>(out);
    cudaDeviceSynchronize();
    cudaFree(out);
}
```

## Alone 1
Form: run
Write a program that reads n and d, and runs a kernel on a float array x of n zeros.
Each element's thread starts with t = 1 and repeats t = t * x[i] + 1 d times, then stores t in y[i].
The arithmetic uses a scalar type that counts each float add and each float multiply on the device.
Print the operations counted, then the operations per element.
Input: one line, n and d.
Output: one line, two integers separated by a space: the operations, then the operations divided by n.
Limits: 1 ≤ n ≤ 100000; 0 ≤ d ≤ 100.
### Examples
```in
256 3
```
```out
1536 6
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__device__ unsigned long long ops {0};

struct Num {
    float v {0.0f};
};

__device__ Num operator+(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v + b.v};
}

__device__ Num operator*(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v * b.v};
}

__device__ Num operator-(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v - b.v};
}

__device__ Num& operator+=(Num& a, Num b)
{
    a = a + b;
    return a;
}

__global__ void horner(cuda::std::span<const float> x,
                       cuda::std::span<float> y, int d)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < x.size()) {
        Num t {1.0f};
        for (int k {0}; k < d; ++k) {
            t = t * Num {x[i]} + Num {1.0f};
        }
        y[i] = t.v;
    }
}

int main()
{
    std::size_t n {0};
    int d {0};
    std::cin >> n >> d;
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMemset(x, 0, n * sizeof(float));
    unsigned blocks {static_cast<unsigned>((n + 255) / 256)};
    horner<<<blocks, 256>>>({x, n}, {y, n}, d);
    unsigned long long total {0};
    cudaMemcpyFromSymbol(&total, ops, sizeof(total));
    std::println("{} {}", total, total / n);
    cudaFree(y);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>

__device__ unsigned long long ops {0};

struct Num {
    float v {0.0f};
};

__device__ Num operator+(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v + b.v};
}

__device__ Num operator*(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v * b.v};
}

__device__ Num operator-(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v - b.v};
}

__device__ Num& operator+=(Num& a, Num b)
{
    a = a + b;
    return a;
}

__global__ void horner(cuda::std::span<const float> x,
                       cuda::std::span<float> y, int d)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    Num t {1.0f};
    for (int k {0}; k < d; ++k) {
        t = t * Num {i < x.size() ? x[i] : 0.0f} + Num {1.0f};
    }
    if (i < x.size()) {
        y[i] = t.v;
    }
}

int main()
{
    std::size_t n {0};
    int d {0};
    std::cin >> n >> d;
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMemset(x, 0, n * sizeof(float));
    unsigned blocks {static_cast<unsigned>((n + 255) / 256)};
    horner<<<blocks, 256>>>({x, n}, {y, n}, d);
    unsigned long long total {0};
    cudaMemcpyFromSymbol(&total, ops, sizeof(total));
    std::println("{} {}", total, total / n);
    cudaFree(y);
    cudaFree(x);
}
```
### Tests
```in
1 0
```
```in
1 1
```
```in
100000 100
```
```in
512 7
```
### Witness
```in
100 3
```

## Alone 2
Form: run
Write a program that reads n integers into a float array x on the device.
For each element, a kernel thread sets y = x[i] and, while y > 1, sets y = y * 0.5.
The arithmetic uses a scalar type that counts each float multiply on the device; a comparison is not counted.
Print the multiplies counted over all elements.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the number of multiplies.
Limits: 1 ≤ n ≤ 1000; each value is between -1000 and 1000000.
### Examples
```in
3
8 8 8
```
```out
9
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__device__ unsigned long long ops {0};

struct Num {
    float v {0.0f};
};

__device__ Num operator*(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v * b.v};
}

__global__ void halve(cuda::std::span<const float> x)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < x.size()) {
        Num y {x[i]};
        while (y.v > 1.0f) {
            y = y * Num {0.5f};
        }
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> v(n);
    for (float& e : v) {
        int k {0};
        std::cin >> k;
        e = static_cast<float>(k);
    }
    float* x {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMemcpy(x, v.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    halve<<<(n + 255) / 256, 256>>>({x, v.size()});
    unsigned long long total {0};
    cudaMemcpyFromSymbol(&total, ops, sizeof(total));
    std::println("{}", total);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__device__ unsigned long long ops {0};

struct Num {
    float v {0.0f};
};

__device__ Num operator*(Num a, Num b)
{
    atomicAdd(&ops, 1ull);
    return Num {a.v * b.v};
}

__global__ void halve(cuda::std::span<const float> x)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < x.size()) {
        Num y {x[i]};
        while (y.v > 1.0f) {
            y = y * Num {0.5f};
        }
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> v(n);
    for (float& e : v) {
        int k {0};
        std::cin >> k;
        e = static_cast<float>(k);
    }
    float* x {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMemcpy(x, v.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    halve<<<1, 1>>>({x, 1});
    unsigned long long total {0};
    cudaMemcpyFromSymbol(&total, ops, sizeof(total));
    std::println("{}", total * n);
    cudaFree(x);
}
```
### Tests
```in
1
1
```
```in
1
1000000
```
```in
4
-1000 0 2 3
```
```in
5
16 1 1000000 5 -3
```
### Witness
```in
3
8 1 2
```
