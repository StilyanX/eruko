# 8.14 The arithmetic intensity of a kernel
Part: the arithmetic intensity of a kernel, the ratio of those two counts
Clause: Williams Waterman and Patterson: Roofline (2009) operational intensity, [expr.const], [expr.mul]
After: 8.12, 8.13
Levels: c++23
Device: yes
Source: Williams, Waterman and Patterson, Roofline: An Insightful Visual Performance Model for Multicore Architectures, CACM 52(4), 2009, the definition of operational intensity

## Example
```cuda
#include <print>

//: Keep a total of operations and a total of bytes.
__device__ unsigned long long ops {0};
__device__ unsigned long long bytes {0};

//: Count each add and multiply in the scalar type.
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

//: Count each load and store in the accessor.
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

__global__ void axpy(Counted x, Counted y, int n)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        y.store(i, Num {2.0f} * x.load(i) + y.load(i));
    }
}

int main()
{
    int n {1000};
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMemset(x, 0, n * sizeof(float));
    cudaMemset(y, 0, n * sizeof(float));
    axpy<<<(n + 255) / 256, 256>>>({x}, {y}, n);
    //: Read both totals back from the device.
    unsigned long long o {0};
    unsigned long long b {0};
    cudaMemcpyFromSymbol(&o, ops, sizeof(o));
    cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
    //: Divide operations by bytes, in double: the intensity.
    double intensity {1.0 * o / b};
    std::println("{} {} {:.4f}", o, b, intensity);
    cudaFree(y);
    cudaFree(x);
}
```

## Verdict 1
```cuda
struct Tally {
    int ops {0};
    int bytes {0};
};

struct Num {
    float v {0.0f};
    Tally* t {nullptr};
};

constexpr Num operator+(Num a, Num b)
{
    ++a.t->ops;
    return Num {a.v + b.v, a.t};
}

constexpr Num operator*(Num a, Num b)
{
    ++a.t->ops;
    return Num {a.v * b.v, a.t};
}

constexpr Num load(Tally& t)
{
    t.bytes += 4;
    return Num {1.0f, &t};
}

constexpr void store(Tally& t, Num)
{
    t.bytes += 4;
}

constexpr Tally axpy()
{
    Tally t {0, 0};
    Num a {2.0f, &t};
    store(t, a * load(t) + load(t));
    return t;
}

static_assert(6 * axpy().ops == axpy().bytes);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
struct Tally {
    int ops {0};
    int bytes {0};
};

struct Num {
    float v {0.0f};
    Tally* t {nullptr};
};

constexpr Num operator+(Num a, Num b)
{
    ++a.t->ops;
    return Num {a.v + b.v, a.t};
}

constexpr Num operator*(Num a, Num b)
{
    ++a.t->ops;
    return Num {a.v * b.v, a.t};
}

constexpr Num load(Tally& t)
{
    t.bytes += 4;
    return Num {1.0f, &t};
}

constexpr void store(Tally& t, Num)
{
    t.bytes += 4;
}

constexpr Tally madd()
{
    Tally t {0, 0};
    store(t, load(t) * load(t) + load(t));
    return t;
}

static_assert(4 * madd().ops == madd().bytes);

int main()
{
}
```
Answer: c++23 ill-formed 41

## Count
Columns: ops, bytes
```cuda
#include <cstdio>

__device__ void mark(const char* what, int times, int line)
{
    for (int k {0}; k < times; ++k) {
        printf("@%d %s\n", line, what);
    }
}

__device__ float load(const float* p,
                      int line = __builtin_LINE())
{
    mark("bytes", 4, line);
    return *p;
}

__device__ float times(float a, float b,
                      int line = __builtin_LINE())
{
    mark("ops", 1, line);
    return a * b;
}

__global__ void step(float* x)
{
    float a {load(&x[0])};
    float b {times(a, load(&x[1]))};
    float c {times(times(a, b), times(b, b))};
    mark("bytes", 4, __LINE__);
    x[2] = c;
}

int main()
{
    float* x {nullptr};
    cudaMalloc(&x, 3 * sizeof(float));
    cudaMemset(x, 0, 3 * sizeof(float));
    step<<<1, 1>>>(x);
    cudaDeviceSynchronize();
    cudaFree(x);
}
```

## Alone 1
Form: run
Write a program that reads n and d, and runs a kernel on float arrays x and y of n elements, x all zeros.
Each element's thread loads s = x[i], starts with t = 1, repeats t = t * s + 1 d times, and stores t in y[i].
A scalar type counts each float add and multiply, and an accessor counts the 4 bytes of each load and store.
Print the operations, the bytes, and the arithmetic intensity: operations divided by bytes.
Input: one line, n and d.
Output: one line: the operations, the bytes, and the intensity with 4 digits after the point, separated by spaces.
Limits: 1 ≤ n ≤ 10000; 0 ≤ d ≤ 100.
### Examples
```in
10 4
```
```out
80 80 1.0000
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

__global__ void horner(Counted x, Counted y, int n, int d)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        Num s {x.load(i)};
        Num t {1.0f};
        for (int k {0}; k < d; ++k) {
            t = t * s + Num {1.0f};
        }
        y.store(i, t);
    }
}

int main()
{
    int n {0};
    int d {0};
    std::cin >> n >> d;
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMemset(x, 0, n * sizeof(float));
    horner<<<(n + 255) / 256, 256>>>({x}, {y}, n, d);
    unsigned long long o {0};
    unsigned long long b {0};
    cudaMemcpyFromSymbol(&o, ops, sizeof(o));
    cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
    double intensity {static_cast<double>(o)};
    intensity /= static_cast<double>(b);
    std::println("{} {} {:.4f}", o, b, intensity);
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

__global__ void horner(Counted x, Counted y, int n, int d)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        Num s {x.load(i)};
        Num t {1.0f};
        for (int k {0}; k < d; ++k) {
            t = t * s + Num {1.0f};
        }
        y.store(i, t);
    }
}

int main()
{
    int n {0};
    int d {0};
    std::cin >> n >> d;
    float* x {nullptr};
    float* y {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMemset(x, 0, n * sizeof(float));
    horner<<<(n + 255) / 256, 256>>>({x}, {y}, n, d);
    unsigned long long o {0};
    unsigned long long b {0};
    cudaMemcpyFromSymbol(&o, ops, sizeof(o));
    cudaMemcpyFromSymbol(&b, bytes, sizeof(b));
    double intensity {1.0 * (o / b)};
    std::println("{} {} {:.4f}", o, b, intensity);
    cudaFree(y);
    cudaFree(x);
}
```
### Tests
```in
1 0
```
```in
10000 100
```
```in
7 1
```
```in
300 6
```
### Witness
```in
10 3
```

## Alone 2
Form: run
Write a program that reads n integers into a float array x on the device, and runs a kernel with one thread per element.
Each thread loads x[i]; when it is greater than 0, the thread stores x[i] * x[i] * x[i] into y[i], and stores nothing otherwise.
A scalar type counts each float multiply, and an accessor counts the 4 bytes of each load and store.
Print the arithmetic intensity of the whole run: all operations divided by all bytes.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the intensity with 4 digits after the point.
Limits: 1 ≤ n ≤ 1000; each value is between -1000 and 1000.
### Examples
```in
2
1 2
```
```out
0.2500
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

struct Tally {
    int ops {0};
    int bytes {0};
};

struct Num {
    float v {0.0f};
    Tally* t {nullptr};
};

__device__ Num operator*(Num a, Num b)
{
    ++a.t->ops;
    return Num {a.v * b.v, a.t};
}

struct Counted {
    float* data {nullptr};

    __device__ Num load(int i, Tally* t) const
    {
        t->bytes += 4;
        return Num {data[i], t};
    }

    __device__ void store(int i, Num v) const
    {
        v.t->bytes += 4;
        data[i] = v.v;
    }
};

__global__ void cube(Counted x, Counted y,
                     cuda::std::span<Tally> tallies)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < tallies.size()) {
        Tally t {0, 0};
        Num v {x.load(i, &t)};
        if (v.v > 0.0f) {
            y.store(i, v * v * v);
        }
        tallies[i] = t;
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
    float* y {nullptr};
    Tally* tallies {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMallocManaged(&tallies, n * sizeof(Tally));
    cudaMemcpy(x, v.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    int blocks {(n + 255) / 256};
    cube<<<blocks, 256>>>({x}, {y}, {tallies, v.size()});
    cudaDeviceSynchronize();
    double ops {0.0};
    double bytes {0.0};
    for (int i {0}; i < n; ++i) {
        ops += tallies[i].ops;
        bytes += tallies[i].bytes;
    }
    std::println("{:.4f}", ops / bytes);
    cudaFree(tallies);
    cudaFree(y);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

struct Tally {
    int ops {0};
    int bytes {0};
};

struct Num {
    float v {0.0f};
    Tally* t {nullptr};
};

__device__ Num operator*(Num a, Num b)
{
    ++a.t->ops;
    return Num {a.v * b.v, a.t};
}

struct Counted {
    float* data {nullptr};

    __device__ Num load(int i, Tally* t) const
    {
        t->bytes += 4;
        return Num {data[i], t};
    }

    __device__ void store(int i, Num v) const
    {
        v.t->bytes += 4;
        data[i] = v.v;
    }
};

__global__ void cube(Counted x, Counted y,
                     cuda::std::span<Tally> tallies)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < tallies.size()) {
        Tally t {0, 0};
        Num v {x.load(i, &t)};
        if (v.v > 0.0f) {
            y.store(i, v * v * v);
        }
        tallies[i] = t;
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
    float* y {nullptr};
    Tally* tallies {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMallocManaged(&tallies, n * sizeof(Tally));
    cudaMemcpy(x, v.data(), n * sizeof(float),
               cudaMemcpyHostToDevice);
    int blocks {(n + 255) / 256};
    cube<<<blocks, 256>>>({x}, {y}, {tallies, v.size()});
    cudaDeviceSynchronize();
    double sum {0.0};
    for (int i {0}; i < n; ++i) {
        sum += 1.0 * tallies[i].ops / tallies[i].bytes;
    }
    std::println("{:.4f}", sum / n);
    cudaFree(tallies);
    cudaFree(y);
    cudaFree(x);
}
```
### Tests
```in
1
-1000
```
```in
1
1000
```
```in
4
-1 0 1 2
```
```in
5
3 -3 3 -3 3
```
### Witness
```in
2
1 -1
```
