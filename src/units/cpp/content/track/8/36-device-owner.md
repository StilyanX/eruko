# 8.36 Device memory owned by one type, freed once
Part: device memory owned by one type with a `cudaFree` deleter, freed once
Clause: [unique.ptr.single.ctor], [unique.ptr.single.dtor], [unique.ptr.single.asgn], [unique.ptr.single.modifiers], [class.copy.ctor], CUDA Runtime API: cudaMalloc, cudaFree, Compute Sanitizer: Memcheck Tool
After: 8.35
Levels: c++23
Device: yes
Source: CUDA Runtime API, cudaFree; Compute Sanitizer User Manual, Memcheck Tool

## Example
```cuda
#include <cuda/std/span>
#include <memory>
#include <print>

//: Give the owner a deleter that calls cudaFree.
struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

using Device = std::unique_ptr<int, Free>;

//: Take n ints with cudaMalloc and hand them to one owner.
Device take(std::size_t n)
{
    int* p {nullptr};
    cudaMalloc(&p, n * sizeof(int));
    return Device {p};
}

__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = 10 * static_cast<int>(threadIdx.x);
}

int main()
{
    //: Move the owner: the new one frees, the old one holds nothing.
    Device d {take(4)};
    Device keep {std::move(d)};
    fill<<<1, 4>>>({keep.get(), 4});
    int last {0};
    cudaMemcpy(&last, keep.get() + 3, sizeof(int),
               cudaMemcpyDeviceToHost);
    //: Free nothing by hand: the owner calls cudaFree once.
    std::println("{} {}", last, d == nullptr);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <memory>
#include <print>

struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

using Device = std::unique_ptr<int, Free>;

__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = 7;
}

int main()
{
    int* p {nullptr};
    cudaMalloc(&p, 4 * sizeof(int));
    Device a {p};
    {
        Device b {a.get()};
    }
    fill<<<1, 4>>>({a.get(), 4});
    int last {0};
    cudaMemcpy(&last, a.get() + 3, sizeof(int),
               cudaMemcpyDeviceToHost);
    std::println("{}", last);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <memory>
#include <print>

struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

using Device = std::unique_ptr<int, Free>;

Device take(std::size_t n)
{
    int* p {nullptr};
    cudaMalloc(&p, n * sizeof(int));
    return Device {p};
}

__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = 7;
}

int main()
{
    Device a {take(4)};
    Device b {take(4)};
    a = std::move(b);
    fill<<<1, 4>>>({a.get(), 4});
    int last {0};
    cudaMemcpy(&last, a.get() + 3, sizeof(int),
               cudaMemcpyDeviceToHost);
    std::println("{}", last);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: sanitizer
Sanitizer: memcheck
Write a program that reads m arrays of n integers each, and copies each array to new device memory as it reads it.
Keep on the device only the array with the largest sum so far; on a tie keep the earlier one.
Hold it in one `std::unique_ptr` whose deleter calls `cudaFree`, and free every other array at once.
At the end a kernel doubles each integer of the array kept. Print that array.
Input: one line, m and n; then m lines of n integers separated by spaces.
Output: one line, the n doubled integers of the array kept, separated by spaces.
Limits: 1 ≤ m ≤ 20; 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
2 3
5 5 5
1 2 3
```
```out
10 10 10
```
```in
1 1
-4
```
```out
-8
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <memory>
#include <print>
#include <vector>

struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

using Device = std::unique_ptr<int, Free>;

Device upload(const std::vector<int>& v)
{
    int* p {nullptr};
    cudaMalloc(&p, v.size() * sizeof(int));
    cudaMemcpy(p, v.data(), v.size() * sizeof(int),
               cudaMemcpyHostToDevice);
    return Device {p};
}

long long sum_of(const std::vector<int>& v)
{
    long long sum {0};
    for (int x : v) {
        sum += x;
    }
    return sum;
}

__global__ void twice(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] *= 2;
    }
}

int main()
{
    int m {0};
    int n {0};
    std::cin >> m >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    Device best {upload(v)};
    long long top {sum_of(v)};
    for (int k {1}; k < m; ++k) {
        for (int& x : v) {
            std::cin >> x;
        }
        Device cur {upload(v)};
        if (sum_of(v) > top) {
            top = sum_of(v);
            best = std::move(cur);
        }
    }
    twice<<<(n + 255) / 256, 256>>>({best.get(), v.size()});
    cudaMemcpy(v.data(), best.get(), n * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <memory>
#include <print>
#include <vector>

struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

using Device = std::unique_ptr<int, Free>;

Device upload(const std::vector<int>& v)
{
    int* p {nullptr};
    cudaMalloc(&p, v.size() * sizeof(int));
    cudaMemcpy(p, v.data(), v.size() * sizeof(int),
               cudaMemcpyHostToDevice);
    return Device {p};
}

long long sum_of(const std::vector<int>& v)
{
    long long sum {0};
    for (int x : v) {
        sum += x;
    }
    return sum;
}

__global__ void twice(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] *= 2;
    }
}

int main()
{
    int m {0};
    int n {0};
    std::cin >> m >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    Device best {upload(v)};
    long long top {sum_of(v)};
    for (int k {1}; k < m; ++k) {
        for (int& x : v) {
            std::cin >> x;
        }
        Device cur {upload(v)};
        if (sum_of(v) > top) {
            top = sum_of(v);
            best.reset(cur.get());
        }
    }
    twice<<<(n + 255) / 256, 256>>>({best.get(), v.size()});
    cudaMemcpy(v.data(), best.get(), n * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
}
```
### Tests
```in
1 1000
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
```in
3 2
4 4
-1000 -1000
1 7
```
```in
2 2
1 2
2 1
```
```in
4 1
9
8
7
-6
```
### Witness
```in
2 2
1 1
2 2
```

## Alone 2
Form: sanitizer
Sanitizer: memcheck
Write a program that reads m arrays of n integers each, and keeps each array in its own device memory.
Make a class `Buffer` that takes the memory in its constructor and frees it with `cudaFree` once, when it dies.
Keep every object in one `std::vector<Buffer>` until the program ends, adding each with `emplace_back(n)`.
After adding an object, fill it from its array; a kernel adds 1 to each integer, and you print the array.
Input: one line, m and n; then m lines of n integers separated by spaces.
Output: m lines; line k holds the n integers of array k after the kernel, separated by spaces.
Limits: 1 ≤ m ≤ 20; 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
1 3
1 2 3
```
```out
2 3 4
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <memory>
#include <print>
#include <vector>

struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

class Buffer
{
public:
    explicit Buffer(std::size_t n)
    {
        int* p {nullptr};
        cudaMalloc(&p, n * sizeof(int));
        p_.reset(p);
    }

    int* get() const
    {
        return p_.get();
    }

private:
    std::unique_ptr<int, Free> p_ {};
};

__global__ void add_one(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] += 1;
    }
}

int main()
{
    int m {0};
    int n {0};
    std::cin >> m >> n;
    std::vector<int> v(n);
    std::vector<Buffer> all {};
    for (int k {0}; k < m; ++k) {
        for (int& x : v) {
            std::cin >> x;
        }
        all.emplace_back(n);
        int* d {all.back().get()};
        cudaMemcpy(d, v.data(), n * sizeof(int),
                   cudaMemcpyHostToDevice);
        add_one<<<(n + 255) / 256, 256>>>({d, v.size()});
        cudaMemcpy(v.data(), d, n * sizeof(int),
                   cudaMemcpyDeviceToHost);
        for (int x : v) {
            std::print("{} ", x);
        }
        std::println();
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <memory>
#include <print>
#include <vector>

struct Free
{
    void operator()(int* p) const
    {
        cudaFree(p);
    }
};

class Buffer
{
public:
    explicit Buffer(std::size_t n)
    {
        cudaMalloc(&p_, n * sizeof(int));
    }

    ~Buffer()
    {
        cudaFree(p_);
    }

    int* get() const
    {
        return p_;
    }

private:
    int* p_ {nullptr};
};

__global__ void add_one(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] += 1;
    }
}

int main()
{
    int m {0};
    int n {0};
    std::cin >> m >> n;
    std::vector<int> v(n);
    std::vector<Buffer> all {};
    for (int k {0}; k < m; ++k) {
        for (int& x : v) {
            std::cin >> x;
        }
        all.emplace_back(n);
        int* d {all.back().get()};
        cudaMemcpy(d, v.data(), n * sizeof(int),
                   cudaMemcpyHostToDevice);
        add_one<<<(n + 255) / 256, 256>>>({d, v.size()});
        cudaMemcpy(v.data(), d, n * sizeof(int),
                   cudaMemcpyDeviceToHost);
        for (int x : v) {
            std::print("{} ", x);
        }
        std::println();
    }
}
```
### Tests
```in
1 1
-1000
```
```in
2 2
1 2
3 4
```
```in
3 1
5
6
7
```
```in
1 4
0 0 0 999
```
### Witness
```in
2 1
10
20
```
