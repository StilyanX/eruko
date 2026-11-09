# 8.11 The call that reports the error of an asynchronous launch
Part: the call that reports the error of an asynchronous launch
Clause: CUDA C++ Programming Guide: Error Checking, CUDA C++ Programming Guide: Device Memory Accesses
After: none
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Error Checking

## Example
```cuda
#include <cassert>
#include <print>

//: Write a kernel that fails an assert while it runs.
__global__ void check(int n)
{
    assert(n > 0);
}

int main()
{
    //: Launch the kernel so that its assert fails.
    check<<<1, 1>>>(0);
    //: Ask right after the launch: the launch itself was fine.
    cudaError_t launched {cudaGetLastError()};
    //: Wait for the kernel: the wait reports the failure.
    cudaError_t finished {cudaDeviceSynchronize()};
    std::println("{}", cudaGetErrorName(launched));
    std::println("{}", cudaGetErrorName(finished));
}
```

## Verdict 1
```cuda
#include <print>

__global__ void fill(int* p)
{
    p[threadIdx.x] = 1;
}

int main()
{
    int* p {nullptr};
    cudaMalloc(&p, 4 * sizeof(int));
    fill<<<1, 8>>>(p);
    cudaError_t launched {cudaGetLastError()};
    cudaError_t finished {cudaDeviceSynchronize()};
    std::println("{}", cudaGetErrorName(launched));
    std::println("{}", cudaGetErrorName(finished));
    cudaFree(p);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Verdict 2
```cuda
#include <print>

__global__ void fill(int* p, int n)
{
    int i {static_cast<int>(threadIdx.x)};
    if (i < n) {
        p[i] = 1;
    }
}

int main()
{
    int* p {nullptr};
    cudaMalloc(&p, 4 * sizeof(int));
    fill<<<1, 8>>>(p, 4);
    cudaError_t launched {cudaGetLastError()};
    cudaError_t finished {cudaDeviceSynchronize()};
    std::println("{}", cudaGetErrorName(launched));
    std::println("{}", cudaGetErrorName(finished));
    cudaFree(p);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n and launches a kernel of one thread that checks n > 0 with `assert`.
Print the error name that the kernel's run gives, as `cudaGetErrorName` writes it.
Input: one line, n.
Output: one line, `cudaSuccess` or `cudaErrorAssert`.
Limits: -1000 ≤ n ≤ 1000.
### Examples
```in
5
```
```out
cudaSuccess
```
### Reference
```cuda
#include <cassert>
#include <iostream>
#include <print>

__global__ void check(int n)
{
    assert(n > 0);
}

int main()
{
    int n {0};
    std::cin >> n;
    check<<<1, 1>>>(n);
    cudaError_t finished {cudaDeviceSynchronize()};
    std::println("{}", cudaGetErrorName(finished));
}
```
### Wrong
```cuda
#include <cassert>
#include <iostream>
#include <print>

__global__ void check(int n)
{
    assert(n > 0);
}

int main()
{
    int n {0};
    std::cin >> n;
    check<<<1, 1>>>(n);
    cudaError_t finished {cudaGetLastError()};
    std::println("{}", cudaGetErrorName(finished));
}
```
### Tests
```in
1
```
```in
1000
```
```in
0
```
```in
-1000
```
### Witness
```in
-1
```

## Alone 2
Form: run
Write a program that reads n integers and copies them to the device.
A kernel of n threads doubles each one and checks with `assert` that its value is not negative.
Copy the values back with `cudaMemcpy`, and print the error name that this copy returns, as `cudaGetErrorName` writes it.
When the name is `cudaSuccess`, print the doubled values on a second line.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, `cudaSuccess` or `cudaErrorAssert`; after `cudaSuccess`, one more line, the n doubled values separated by spaces.
Limits: 1 ≤ n ≤ 1000; each value is between -1000 and 1000.
### Examples
```in
3
1 2 3
```
```out
cudaSuccess
2 4 6
```
### Reference
```cuda
#include <cassert>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void double_each(cuda::std::span<int> v)
{
    int i {static_cast<int>(threadIdx.x)};
    assert(v[i] >= 0);
    v[i] = 2 * v[i];
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    std::size_t bytes {n * sizeof(int)};
    int* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, v.data(), bytes, cudaMemcpyHostToDevice);
    double_each<<<1, n>>>({d, v.size()});
    cudaError_t copied {cudaMemcpy(v.data(), d, bytes,
                                   cudaMemcpyDeviceToHost)};
    std::println("{}", cudaGetErrorName(copied));
    if (copied == cudaSuccess) {
        for (int x : v) {
            std::print("{} ", x);
        }
        std::println();
    }
    cudaFree(d);
}
```
### Wrong
```cuda
#include <cassert>
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void double_each(cuda::std::span<int> v)
{
    int i {static_cast<int>(threadIdx.x)};
    assert(v[i] >= 0);
    v[i] = 2 * v[i];
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    std::size_t bytes {n * sizeof(int)};
    int* d {nullptr};
    cudaMalloc(&d, bytes);
    cudaMemcpy(d, v.data(), bytes, cudaMemcpyHostToDevice);
    double_each<<<1, n>>>({d, v.size()});
    cudaError_t copied {cudaGetLastError()};
    cudaMemcpy(v.data(), d, bytes, cudaMemcpyDeviceToHost);
    std::println("{}", cudaGetErrorName(copied));
    if (copied == cudaSuccess) {
        for (int x : v) {
            std::print("{} ", x);
        }
        std::println();
    }
    cudaFree(d);
}
```
### Tests
```in
1
0
```
```in
1
-1000
```
```in
4
1000 0 7 -5
```
```in
5
9 8 7 6 5
```
### Witness
```in
3
1 -2 3
```
