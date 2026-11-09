# 8.15 Whether a counted kernel is limited by memory or by arithmetic
Part: whether a counted kernel is limited by memory or by arithmetic: its intensity against the operations per byte that the device allows, from its memory clock, bus width, multiprocessors and the guide's throughput table
Clause: CUDA C++ Best Practices Guide 9.2.1 Theoretical Bandwidth Calculation, CUDA C++ Best Practices Guide 12.1.1 Throughput of Native Arithmetic Instructions, Williams Waterman and Patterson: Roofline (2009) ridge point, [expr.const]
After: 8.14
Levels: c++23
Device: yes
Source: CUDA C++ Best Practices Guide 9.2.1 and 12.1.1 (Table 5); Williams, Waterman and Patterson, Roofline, CACM 52(4), 2009

## Example
```cuda
#include <print>

//: Read one attribute of device 0 as a double.
double attribute(cudaDeviceAttr which)
{
    int value {0};
    cudaDeviceGetAttribute(&value, which, 0);
    return value;
}

int main()
{
    //: Take the counts of a kernel: 2 operations, 12 bytes.
    double intensity {2.0 / 12.0};
    //: Read the multiprocessors, the clocks and the bus width.
    double sms {attribute(cudaDevAttrMultiProcessorCount)};
    double core_khz {attribute(cudaDevAttrClockRate)};
    double memory_khz {attribute(cudaDevAttrMemoryClockRate)};
    double bus {attribute(cudaDevAttrGlobalMemoryBusWidth)};
    //: Take 128 float results per clock per multiprocessor.
    double ops {sms * 128.0 * core_khz};
    //: Move two words per memory clock, bus width over 8 bytes.
    double bytes {2.0 * memory_khz * bus / 8.0};
    //: Compare the intensity with the operations per byte.
    double ridge {ops / bytes};
    bool by_memory {intensity < ridge};
    std::println("{:.4f} {:.4f}", intensity, ridge);
    std::println("{}", by_memory ? "memory" : "arithmetic");
}
```

## Verdict 1
```cuda
constexpr int d {8};

__global__ void horner(const float* x, float* y)
{
    float s {x[threadIdx.x]};
    float t {1.0f};
    for (int k {0}; k < d; ++k) {
        t = t * s + 1.0f;
    }
    y[threadIdx.x] = t;
}

constexpr double sms {20.0};
constexpr double core_khz {2370000.0};
constexpr double memory_khz {8001000.0};
constexpr double bus {96.0};
constexpr double per_clock {128.0};

constexpr double ops {2.0 * d};
constexpr double bytes {8.0};

constexpr double ridge()
{
    double peak {sms * per_clock * core_khz};
    double bandwidth {2.0 * memory_khz * bus / 8.0};
    return peak / bandwidth;
}

static_assert(ops / bytes < ridge());

int main()
{
}
```
Answer: c++23 defined
Derivation 1: Roofline: the intensity is 16 operations over 8 bytes, 2 per byte; the device allows 20 × 128 × 2 370 000 over 2 × 8 001 000 × 96 / 8, about 31.6 operations per byte; 2 < 31.6, so the kernel is limited by memory, the assertion holds and the program is well-formed.
Derivation 2: Best Practices 9.2.1 gives 192.0 GB/s, which times 2 operations per byte allows 384 G operations per second, below the 6 067 G that 20 multiprocessors at 128 float results per clock (Table 5, 8.9) and 2.37 GHz give; memory is the bound, so the static_assert is true.

## Verdict 2
```cuda
constexpr int d {8};

__global__ void horner(const double* x, double* y)
{
    double s {x[threadIdx.x]};
    double t {1.0};
    for (int k {0}; k < d; ++k) {
        t = t * s + 1.0;
    }
    y[threadIdx.x] = t;
}

constexpr double sms {20.0};
constexpr double core_khz {2370000.0};
constexpr double memory_khz {8001000.0};
constexpr double bus {96.0};
constexpr double per_clock {2.0};

constexpr double ops {2.0 * d};
constexpr double bytes {16.0};

constexpr double ridge()
{
    double peak {sms * per_clock * core_khz};
    double bandwidth {2.0 * memory_khz * bus / 8.0};
    return peak / bandwidth;
}

static_assert(ops / bytes < ridge());

int main()
{
}
```
Answer: c++23 ill-formed 29
Derivation 1: Roofline: 16 operations over 16 bytes is 1 per byte; at 2 double results per clock per multiprocessor (Table 5, 8.9) the device allows 20 × 2 × 2 370 000 over 2 × 8 001 000 × 96 / 8, about 0.49 per byte; 1 is not below 0.49, so the kernel is limited by arithmetic and the static_assert on line 29 fails.
Derivation 2: 192.0 GB/s (Best Practices 9.2.1) at 1 operation per byte asks for 192 G double operations per second, more than the 94.8 G that 20 multiprocessors at 2 per clock and 2.37 GHz give; arithmetic is the bound, so the assertion is false and the compiler must reject line 29.

## Alone 1
Form: run
Write a program that reads d and runs a kernel on one float element.
The thread loads s = x[0], starts with t = 1, repeats t = t * s + 1 d times, and stores t in y[0].
A scalar type counts each float add and multiply, and an accessor counts the 4 bytes of each load and store.
Read the device's multiprocessors, core clock, memory clock and memory bus width with `cudaDeviceGetAttribute`.
The device allows its peak float operations per second, from the throughput table of the Best Practices Guide (12.1.1) for compute capability 8.9, over its theoretical bandwidth (9.2.1).
The kernel is limited by memory when its intensity, operations over bytes, is below that ratio, and by arithmetic otherwise.
Input: one line, d.
Output: one line, the intensity with 4 digits after the point, a space, then `memory` or `arithmetic`.
Limits: 0 ≤ d ≤ 1000.
### Examples
```in
4
```
```out
1.0000 memory
```
### Reference
```cuda
#include <iostream>
#include <print>

__device__ unsigned long long ops {0};
__device__ unsigned long long bytes {0};

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

struct Counted {
    float* data {nullptr};

    __device__ Num load(int i) const
    {
        atomicAdd(&bytes, 4ull);
        return Num {data[i]};
    }

    __device__ void store(int i, Num v) const
    {
        atomicAdd(&bytes, 4ull);
        data[i] = v.v;
    }
};

__global__ void horner(Counted x, Counted y, int d)
{
    Num s {x.load(0)};
    Num t {1.0f};
    for (int k {0}; k < d; ++k) {
        t = t * s + Num {1.0f};
    }
    y.store(0, t);
}

double attribute(cudaDeviceAttr which)
{
    int value {0};
    cudaDeviceGetAttribute(&value, which, 0);
    return value;
}

int main()
{
    int d {0};
    std::cin >> d;
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, sizeof(float));
    cudaMalloc(&y, sizeof(float));
    cudaMemset(x, 0, sizeof(float));
    horner<<<1, 1>>>({x}, {y}, d);
    unsigned long long o {0};
    unsigned long long b {0};
    cudaMemcpyFromSymbol(&o, ops, sizeof(o));
    cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
    double intensity {static_cast<double>(o)};
    intensity /= static_cast<double>(b);
    double sms {attribute(cudaDevAttrMultiProcessorCount)};
    double core_khz {attribute(cudaDevAttrClockRate)};
    double memory_khz {attribute(cudaDevAttrMemoryClockRate)};
    double bus {attribute(cudaDevAttrGlobalMemoryBusWidth)};
    double peak {sms * 128.0 * core_khz};
    double bandwidth {2.0 * memory_khz * bus / 8.0};
    bool by_memory {intensity < peak / bandwidth};
    std::println("{:.4f} {}", intensity,
                 by_memory ? "memory" : "arithmetic");
    cudaFree(y);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>

__device__ unsigned long long ops {0};
__device__ unsigned long long bytes {0};

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

struct Counted {
    float* data {nullptr};

    __device__ Num load(int i) const
    {
        atomicAdd(&bytes, 4ull);
        return Num {data[i]};
    }

    __device__ void store(int i, Num v) const
    {
        atomicAdd(&bytes, 4ull);
        data[i] = v.v;
    }
};

__global__ void horner(Counted x, Counted y, int d)
{
    Num s {x.load(0)};
    Num t {1.0f};
    for (int k {0}; k < d; ++k) {
        t = t * s + Num {1.0f};
    }
    y.store(0, t);
}

double attribute(cudaDeviceAttr which)
{
    int value {0};
    cudaDeviceGetAttribute(&value, which, 0);
    return value;
}

int main()
{
    int d {0};
    std::cin >> d;
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, sizeof(float));
    cudaMalloc(&y, sizeof(float));
    cudaMemset(x, 0, sizeof(float));
    horner<<<1, 1>>>({x}, {y}, d);
    unsigned long long o {0};
    unsigned long long b {0};
    cudaMemcpyFromSymbol(&o, ops, sizeof(o));
    cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
    double intensity {static_cast<double>(o)};
    intensity /= static_cast<double>(b);
    double sms {attribute(cudaDevAttrMultiProcessorCount)};
    double core_khz {attribute(cudaDevAttrClockRate)};
    double memory_khz {attribute(cudaDevAttrMemoryClockRate)};
    double bus {attribute(cudaDevAttrGlobalMemoryBusWidth)};
    double peak {sms * 128.0 * core_khz};
    double bandwidth {memory_khz * bus / 8.0};
    bool by_memory {intensity < peak / bandwidth};
    std::println("{:.4f} {}", intensity,
                 by_memory ? "memory" : "arithmetic");
    cudaFree(y);
    cudaFree(x);
}
```
### Tests
```in
0
```
```in
126
```
```in
127
```
```in
252
```
```in
1000
```
### Witness
```in
200
```

## Alone 2
Form: run
Write a program that reads a type name and m, and prints the smallest d at which a kernel on one element is limited by arithmetic.
The kernel's thread loads x[0], …, x[m - 1] of that type and adds them in that order into s.
It then starts with t = 1, repeats t = t * s + 1 d times, and stores t in y[0].
A scalar type counts each add and multiply, and an accessor counts the bytes of each load and store.
Read the device's multiprocessors, core clock, memory clock and memory bus width with `cudaDeviceGetAttribute`.
The device allows its peak operations per second for that type, from the throughput table of the Best Practices Guide (12.1.1) for compute capability 8.9, over its theoretical bandwidth (9.2.1).
The kernel is limited by arithmetic when its intensity, operations over bytes, is that ratio or more.
Input: one line, `float` or `double`, then m.
Output: one line, the smallest such d.
Limits: 1 ≤ m ≤ 8.
### Examples
```in
float 1
```
```out
127
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <string>

__device__ unsigned long long ops {0};
__device__ unsigned long long bytes {0};

template <typename T>
struct Num {
    T v {};
};

template <typename T>
__device__ Num<T> operator+(Num<T> a, Num<T> b)
{
    atomicAdd(&ops, 1ull);
    return Num<T> {a.v + b.v};
}

template <typename T>
__device__ Num<T> operator*(Num<T> a, Num<T> b)
{
    atomicAdd(&ops, 1ull);
    return Num<T> {a.v * b.v};
}

template <typename T>
__device__ Num<T> operator-(Num<T> a, Num<T> b)
{
    atomicAdd(&ops, 1ull);
    return Num<T> {a.v - b.v};
}

template <typename T>
__device__ Num<T>& operator+=(Num<T>& a, Num<T> b)
{
    a = a + b;
    return a;
}

template <typename T>
struct Counted {
    static constexpr unsigned long long size {sizeof(T)};
    T* data {nullptr};

    __device__ Num<T> load(int i) const
    {
        atomicAdd(&bytes, size);
        return Num<T> {data[i]};
    }

    __device__ void store(int i, Num<T> v) const
    {
        atomicAdd(&bytes, size);
        data[i] = v.v;
    }
};

template <typename T>
__global__ void sum_horner(Counted<T> x, Counted<T> y, int m,
                           int d)
{
    Num<T> s {x.load(0)};
    for (int j {1}; j < m; ++j) {
        s = s + x.load(j);
    }
    Num<T> t {T {1}};
    for (int k {0}; k < d; ++k) {
        t = t * s + Num<T> {T {1}};
    }
    y.store(0, t);
}

double attribute(cudaDeviceAttr which)
{
    int value {0};
    cudaDeviceGetAttribute(&value, which, 0);
    return value;
}

template <typename T>
int smallest(int m, double per_clock)
{
    double sms {attribute(cudaDevAttrMultiProcessorCount)};
    double core_khz {attribute(cudaDevAttrClockRate)};
    double memory_khz {attribute(cudaDevAttrMemoryClockRate)};
    double bus {attribute(cudaDevAttrGlobalMemoryBusWidth)};
    double peak {sms * per_clock * core_khz};
    double bandwidth {2.0 * memory_khz * bus / 8.0};
    T* x {nullptr};
    T* y {nullptr};
    cudaMalloc(&x, m * sizeof(T));
    cudaMalloc(&y, sizeof(T));
    cudaMemset(x, 0, m * sizeof(T));
    int d {0};
    while (true) {
        unsigned long long o {0};
        unsigned long long b {0};
        cudaMemcpyToSymbol(ops, &o, sizeof(o));
        cudaMemcpyToSymbol(bytes, &b, sizeof(b));
        sum_horner<T><<<1, 1>>>({x}, {y}, m, d);
        cudaMemcpyFromSymbol(&o, ops, sizeof(o));
        cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
        if (static_cast<double>(o) / static_cast<double>(b) >=
            peak / bandwidth) {
            break;
        }
        ++d;
    }
    cudaFree(y);
    cudaFree(x);
    return d;
}

int main()
{
    std::string type {};
    int m {0};
    std::cin >> type >> m;
    if (type == "float") {
        std::println("{}", smallest<float>(m, 128.0));
    } else {
        std::println("{}", smallest<double>(m, 2.0));
    }
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <string>

__device__ unsigned long long ops {0};
__device__ unsigned long long bytes {0};

template <typename T>
struct Num {
    T v {};
};

template <typename T>
__device__ Num<T> operator+(Num<T> a, Num<T> b)
{
    atomicAdd(&ops, 1ull);
    return Num<T> {a.v + b.v};
}

template <typename T>
__device__ Num<T> operator*(Num<T> a, Num<T> b)
{
    atomicAdd(&ops, 1ull);
    return Num<T> {a.v * b.v};
}

template <typename T>
__device__ Num<T> operator-(Num<T> a, Num<T> b)
{
    atomicAdd(&ops, 1ull);
    return Num<T> {a.v - b.v};
}

template <typename T>
__device__ Num<T>& operator+=(Num<T>& a, Num<T> b)
{
    a = a + b;
    return a;
}

template <typename T>
struct Counted {
    static constexpr unsigned long long size {sizeof(T)};
    T* data {nullptr};

    __device__ Num<T> load(int i) const
    {
        atomicAdd(&bytes, size);
        return Num<T> {data[i]};
    }

    __device__ void store(int i, Num<T> v) const
    {
        atomicAdd(&bytes, size);
        data[i] = v.v;
    }
};

template <typename T>
__global__ void sum_horner(Counted<T> x, Counted<T> y, int m,
                           int d)
{
    Num<T> s {x.load(0)};
    for (int j {1}; j < m; ++j) {
        s = s + x.load(j);
    }
    Num<T> t {T {1}};
    for (int k {0}; k < d; ++k) {
        t = t * s + Num<T> {T {1}};
    }
    y.store(0, t);
}

double attribute(cudaDeviceAttr which)
{
    int value {0};
    cudaDeviceGetAttribute(&value, which, 0);
    return value;
}

template <typename T>
int smallest(int m, double per_clock)
{
    double sms {attribute(cudaDevAttrMultiProcessorCount)};
    double core_khz {attribute(cudaDevAttrClockRate)};
    double memory_khz {attribute(cudaDevAttrMemoryClockRate)};
    double bus {attribute(cudaDevAttrGlobalMemoryBusWidth)};
    double peak {sms * per_clock * core_khz};
    double bandwidth {2.0 * memory_khz * bus / 8.0};
    T* x {nullptr};
    T* y {nullptr};
    cudaMalloc(&x, m * sizeof(T));
    cudaMalloc(&y, sizeof(T));
    cudaMemset(x, 0, m * sizeof(T));
    int d {0};
    while (true) {
        unsigned long long o {0};
        unsigned long long b {0};
        cudaMemcpyToSymbol(ops, &o, sizeof(o));
        cudaMemcpyToSymbol(bytes, &b, sizeof(b));
        sum_horner<T><<<1, 1>>>({x}, {y}, m, d);
        cudaMemcpyFromSymbol(&o, ops, sizeof(o));
        cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
        if (static_cast<double>(o) / static_cast<double>(b) >=
            peak / bandwidth) {
            break;
        }
        ++d;
    }
    cudaFree(y);
    cudaFree(x);
    return d;
}

int main()
{
    std::string type {};
    int m {0};
    std::cin >> type >> m;
    if (type == "float") {
        std::println("{}", smallest<float>(m, 128.0));
    } else {
        std::println("{}", smallest<double>(m, 128.0));
    }
}
```
### Tests
```in
double 1
```
```in
float 8
```
```in
double 8
```
```in
float 3
```
```in
double 2
```
### Witness
```in
double 4
```
