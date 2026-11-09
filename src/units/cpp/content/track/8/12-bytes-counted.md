# 8.12 The bytes a kernel moves per element, counted by its accessor
Part: the bytes a kernel moves per element, counted by an accessor type that counts its own loads and stores
Clause: CUDA C++ Programming Guide: Device Memory Accesses, CUDA C++ Programming Guide: CUDA C++ Memory Model, [intro.races]
After: none
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory Accesses; CUDA C++ Best Practices Guide 9.2 Bandwidth

## Example
```cuda
#include <print>

//: Keep one total for the bytes loaded and one for those stored.
struct Bytes {
    unsigned long long loaded {0};
    unsigned long long stored {0};
};

//: Add the size of each element the accessor loads or stores.
template <typename T>
struct Counted {
    static constexpr unsigned long long size {sizeof(T)};
    T* data {nullptr};
    Bytes* bytes {nullptr};

    __device__ T load(int i) const
    {
        atomicAdd(&bytes->loaded, size);
        return data[i];
    }

    __device__ void store(int i, T v) const
    {
        atomicAdd(&bytes->stored, size);
        data[i] = v;
    }
};

//: Load x and y and store y: two loads and one store each.
__global__ void axpy(float a, Counted<float> x,
                     Counted<float> y, int n)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        y.store(i, a * x.load(i) + y.load(i));
    }
}

int main()
{
    //: Make the arrays and the totals, all set to zero.
    int n {1000};
    float* x {nullptr};
    float* y {nullptr};
    Bytes* bytes {nullptr};
    cudaMalloc(&x, n * sizeof(float));
    cudaMalloc(&y, n * sizeof(float));
    cudaMallocManaged(&bytes, sizeof(Bytes));
    cudaMemset(x, 0, n * sizeof(float));
    cudaMemset(y, 0, n * sizeof(float));
    *bytes = Bytes {0, 0};
    //: Run the kernel and print the bytes per element.
    int blocks {(n + 255) / 256};
    axpy<<<blocks, 256>>>(2.0f, {x, bytes}, {y, bytes}, n);
    cudaDeviceSynchronize();
    std::println("{} {}", bytes->loaded / n, bytes->stored / n);
    cudaFree(bytes);
    cudaFree(y);
    cudaFree(x);
}
```

## Verdict 1
```cuda
#include <print>

struct Counted {
    float* data {nullptr};
    unsigned long long* loaded {nullptr};

    __device__ float load(int i) const
    {
        *loaded += sizeof(float);
        return data[i];
    }
};

__global__ void sum(Counted x, float* out)
{
    int i {static_cast<int>(threadIdx.x)};
    out[i] = x.load(i) + 1.0f;
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    unsigned long long* loaded {nullptr};
    cudaMalloc(&x, 256 * sizeof(float));
    cudaMalloc(&out, 256 * sizeof(float));
    cudaMallocManaged(&loaded, sizeof(unsigned long long));
    cudaMemset(x, 0, 256 * sizeof(float));
    *loaded = 0;
    sum<<<1, 256>>>({x, loaded}, out);
    cudaDeviceSynchronize();
    std::println("{}", *loaded);
    cudaFree(loaded);
    cudaFree(out);
    cudaFree(x);
}
```
Answer: c++23 undefined stored
Derivation 1: [intro.races]/21, which the CUDA C++ memory model keeps for device threads: the 256 threads each read and write *loaded with no atomic and no happens-before between them, so the conflicting accesses are a data race and the behaviour is undefined.
Derivation 2: the CUDA C++ Programming Guide's memory model calls two accesses to one location a data race when one is a write, one is not atomic at a scope that holds the other thread, and neither happens before the other; *loaded += 4 in each thread of the block is such a pair, and a data race is undefined behaviour.

## Verdict 2
```cuda
#include <print>

struct Counted {
    float* data {nullptr};
    unsigned long long* loaded {nullptr};

    __device__ float load(int i) const
    {
        loaded[i] += sizeof(float);
        return data[i];
    }
};

__global__ void sum(Counted x, float* out)
{
    int i {static_cast<int>(threadIdx.x)};
    out[i] = x.load(i) + 1.0f;
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    unsigned long long* loaded {nullptr};
    cudaMalloc(&x, 256 * sizeof(float));
    cudaMalloc(&out, 256 * sizeof(float));
    cudaMallocManaged(&loaded, 256 * sizeof(*loaded));
    cudaMemset(x, 0, 256 * sizeof(float));
    cudaMemset(loaded, 0, 256 * sizeof(*loaded));
    sum<<<1, 256>>>({x, loaded}, out);
    cudaDeviceSynchronize();
    unsigned long long total {0};
    for (int i {0}; i < 256; ++i) {
        total += loaded[i];
    }
    std::println("{}", total);
    cudaFree(loaded);
    cudaFree(out);
    cudaFree(x);
}
```
Answer: c++23 defined

## Count
Columns: loaded, stored
```cuda
#include <cstdio>

__device__ void count(int bytes, const char* what, int line)
{
    for (int b {0}; b < bytes; ++b) {
        printf("@%d %s\n", line, what);
    }
}

template <typename T>
struct Counted {
    T* data {nullptr};

    __device__ T load(int i, int line = __builtin_LINE()) const
    {
        count(sizeof(T), "loaded", line);
        return data[i];
    }

    __device__ void store(int i, T v,
                          int line = __builtin_LINE()) const
    {
        count(sizeof(T), "stored", line);
        data[i] = v;
    }
};

__global__ void step(Counted<float> x, Counted<double> y)
{
    double a {y.load(0)};
    y.store(1, a + x.load(0));
    x.store(1, x.load(2) * x.load(3));
}

int main()
{
    float* x {nullptr};
    double* y {nullptr};
    cudaMalloc(&x, 4 * sizeof(float));
    cudaMalloc(&y, 2 * sizeof(double));
    cudaMemset(x, 0, 4 * sizeof(float));
    cudaMemset(y, 0, 2 * sizeof(double));
    step<<<1, 1>>>({x}, {y});
    cudaDeviceSynchronize();
    cudaFree(y);
    cudaFree(x);
}
```

## Alone 1
Form: run
Write a program that reads a type name and n, and runs a kernel on three arrays x, y and z of n elements of that type.
Each element's thread sets z[i] to x[i] + y[i].
Every load and store goes through an accessor type that adds the size of the element to a total of bytes loaded or stored.
Print the bytes loaded, the bytes stored and the bytes moved per element.
Input: one line, `float` or `double`, then n.
Output: one line, three integers separated by spaces: bytes loaded, bytes stored, (loaded + stored) / n.
Limits: 1 ≤ n ≤ 100000.
### Examples
```in
float 10
```
```out
80 40 12
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <string>

struct Bytes {
    unsigned long long loaded {0};
    unsigned long long stored {0};
};

template <typename T>
struct Counted {
    static constexpr unsigned long long size {sizeof(T)};
    T* data {nullptr};
    Bytes* bytes {nullptr};

    __device__ T load(int i) const
    {
        atomicAdd(&bytes->loaded, size);
        return data[i];
    }

    __device__ void store(int i, T v) const
    {
        atomicAdd(&bytes->stored, size);
        data[i] = v;
    }
};

template <typename T>
__global__ void add(Counted<T> x, Counted<T> y, Counted<T> z,
                    int n)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        z.store(i, x.load(i) + y.load(i));
    }
}

template <typename T>
void run(int n)
{
    T* a[3] {nullptr, nullptr, nullptr};
    for (T*& p : a) {
        cudaMalloc(&p, n * sizeof(T));
        cudaMemset(p, 0, n * sizeof(T));
    }
    Bytes* bytes {nullptr};
    cudaMallocManaged(&bytes, sizeof(Bytes));
    *bytes = Bytes {0, 0};
    int blocks {(n + 255) / 256};
    add<T><<<blocks, 256>>>({a[0], bytes}, {a[1], bytes},
                            {a[2], bytes}, n);
    cudaDeviceSynchronize();
    unsigned long long moved {bytes->loaded + bytes->stored};
    std::println("{} {} {}", bytes->loaded, bytes->stored,
                 moved / n);
    cudaFree(bytes);
    for (T* p : a) {
        cudaFree(p);
    }
}

int main()
{
    std::string type {};
    int n {0};
    std::cin >> type >> n;
    if (type == "float") {
        run<float>(n);
    } else {
        run<double>(n);
    }
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <string>

struct Bytes {
    unsigned long long loaded {0};
    unsigned long long stored {0};
};

template <typename T>
struct Counted {
    static constexpr unsigned long long size {sizeof(float)};
    T* data {nullptr};
    Bytes* bytes {nullptr};

    __device__ T load(int i) const
    {
        atomicAdd(&bytes->loaded, size);
        return data[i];
    }

    __device__ void store(int i, T v) const
    {
        atomicAdd(&bytes->stored, size);
        data[i] = v;
    }
};

template <typename T>
__global__ void add(Counted<T> x, Counted<T> y, Counted<T> z,
                    int n)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        z.store(i, x.load(i) + y.load(i));
    }
}

template <typename T>
void run(int n)
{
    T* a[3] {nullptr, nullptr, nullptr};
    for (T*& p : a) {
        cudaMalloc(&p, n * sizeof(T));
        cudaMemset(p, 0, n * sizeof(T));
    }
    Bytes* bytes {nullptr};
    cudaMallocManaged(&bytes, sizeof(Bytes));
    *bytes = Bytes {0, 0};
    int blocks {(n + 255) / 256};
    add<T><<<blocks, 256>>>({a[0], bytes}, {a[1], bytes},
                            {a[2], bytes}, n);
    cudaDeviceSynchronize();
    unsigned long long moved {bytes->loaded + bytes->stored};
    std::println("{} {} {}", bytes->loaded, bytes->stored,
                 moved / n);
    cudaFree(bytes);
    for (T* p : a) {
        cudaFree(p);
    }
}

int main()
{
    std::string type {};
    int n {0};
    std::cin >> type >> n;
    if (type == "float") {
        run<float>(n);
    } else {
        run<double>(n);
    }
}
```
### Tests
```in
float 1
```
```in
double 1
```
```in
float 100000
```
```in
double 100000
```
### Witness
```in
double 10
```

## Alone 2
Form: run
Write a program that reads n integers into a float array x on the device, and a limit.
A kernel with one thread per element loads x[i], and stores the limit into x[i] only when x[i] is greater than the limit.
Every load and store goes through an accessor type that adds the size of the element to a total of bytes loaded or stored.
Print the bytes loaded and the bytes stored.
Input: one line, n and the limit, then one line, n integers separated by spaces.
Output: one line, two integers separated by a space: bytes loaded, bytes stored.
Limits: 1 ≤ n ≤ 1000; the limit and each value are between -1000 and 1000.
### Examples
```in
3 0
5 6 7
```
```out
12 12
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <vector>

struct Bytes {
    unsigned long long loaded {0};
    unsigned long long stored {0};
};

struct Counted {
    static constexpr unsigned long long size {sizeof(float)};
    float* data {nullptr};
    Bytes* bytes {nullptr};

    __device__ float load(int i) const
    {
        atomicAdd(&bytes->loaded, size);
        return data[i];
    }

    __device__ void store(int i, float v) const
    {
        atomicAdd(&bytes->stored, size);
        data[i] = v;
    }
};

__global__ void clamp(Counted x, float limit, int n)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        float v {x.load(i)};
        if (v > limit) {
            x.store(i, limit);
        }
    }
}

int main()
{
    int n {0};
    int limit {0};
    std::cin >> n >> limit;
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
    Bytes* bytes {nullptr};
    cudaMallocManaged(&bytes, sizeof(Bytes));
    *bytes = Bytes {0, 0};
    int blocks {(n + 255) / 256};
    float top {static_cast<float>(limit)};
    clamp<<<blocks, 256>>>({x, bytes}, top, n);
    cudaDeviceSynchronize();
    std::println("{} {}", bytes->loaded, bytes->stored);
    cudaFree(bytes);
    cudaFree(x);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <vector>

struct Bytes {
    unsigned long long loaded {0};
    unsigned long long stored {0};
};

struct Counted {
    static constexpr unsigned long long size {sizeof(float)};
    float* data {nullptr};
    Bytes* bytes {nullptr};

    __device__ float load(int i) const
    {
        atomicAdd(&bytes->loaded, size);
        return data[i];
    }

    __device__ void store(int i, float v) const
    {
        atomicAdd(&bytes->stored, size);
        data[i] = v;
    }
};

__global__ void clamp(Counted x, float limit, int n)
{
    int i {static_cast<int>(blockIdx.x * blockDim.x)};
    i += static_cast<int>(threadIdx.x);
    if (i < n) {
        float v {x.load(i)};
        x.store(i, v > limit ? limit : v);
    }
}

int main()
{
    int n {0};
    int limit {0};
    std::cin >> n >> limit;
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
    Bytes* bytes {nullptr};
    cudaMallocManaged(&bytes, sizeof(Bytes));
    *bytes = Bytes {0, 0};
    int blocks {(n + 255) / 256};
    float top {static_cast<float>(limit)};
    clamp<<<blocks, 256>>>({x, bytes}, top, n);
    cudaDeviceSynchronize();
    std::println("{} {}", bytes->loaded, bytes->stored);
    cudaFree(bytes);
    cudaFree(x);
}
```
### Tests
```in
1 0
0
```
```in
1 -1000
1000
```
```in
4 10
1 20 3 40
```
```in
5 1000
-1000 0 1000 999 -1
```
### Witness
```in
3 4
1 5 9
```
