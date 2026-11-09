# 8.35 The leak of device memory that nothing frees
Part: the leak of device memory that nothing frees
Clause: [basic.stc.dynamic], [basic.life], CUDA Runtime API: cudaMalloc, cudaFree, Compute Sanitizer: Memcheck Tool (Leak Checking)
After: 8.30
Levels: c++23
Device: yes
Source: Compute Sanitizer User Manual, Memcheck Tool, Leak Checking (--leak-check full)

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Write each thread's index to its int.
__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = static_cast<int>(threadIdx.x);
}

int main()
{
    //: Take memory for 4 ints: it stays taken until cudaFree.
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    fill<<<1, 4>>>({d, 4});
    int last {0};
    cudaMemcpy(&last, d + 3, sizeof(int),
               cudaMemcpyDeviceToHost);
    //: Free it once, after its last use, on every way out.
    cudaFree(d);
    std::println("{}", last);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = 7;
}

int main()
{
    int total {0};
    for (int round {0}; round < 3; ++round) {
        int* d {nullptr};
        cudaMalloc(&d, 4 * sizeof(int));
        fill<<<1, 4>>>({d, 4});
        int first {0};
        cudaMemcpy(&first, d, sizeof(int),
                   cudaMemcpyDeviceToHost);
        cudaFree(d);
        total += first;
    }
    std::println("{}", total);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    v[threadIdx.x] = 7;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaFree(d);
    fill<<<1, 4>>>({d, 4});
    cudaDeviceSynchronize();
    std::println("done");
}
```
Answer: c++23 undefined sanitizer
Sanitizer: memcheck

## Alone 1
Form: sanitizer
Sanitizer: memcheck
Write a program that reads n integers and copies them to device memory that `cudaMalloc` gives.
A kernel doubles each one, and the program copies them back.
If a doubled value is over 1000, print `too big` and end the program at once; else print the doubled values.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, `too big` or the n doubled values separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
1 2 3
```
```out
2 4 6
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void twice(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] *= 2;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    twice<<<(n + 255) / 256, 256>>>({d, v.size()});
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : v) {
        if (x > 1000) {
            std::println("too big");
            cudaFree(d);
            return 0;
        }
    }
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
    cudaFree(d);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void twice(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] *= 2;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n);
    for (int& x : v) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, v.data(), n * sizeof(int),
               cudaMemcpyHostToDevice);
    twice<<<(n + 255) / 256, 256>>>({d, v.size()});
    cudaMemcpy(v.data(), d, n * sizeof(int),
               cudaMemcpyDeviceToHost);
    for (int x : v) {
        if (x > 1000) {
            std::println("too big");
            return 0;
        }
    }
    for (int x : v) {
        std::print("{} ", x);
    }
    std::println();
    cudaFree(d);
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
500 -500 499 0
```
```in
5
1 2 3 4 501
```
### Witness
```in
2
600 1
```

## Alone 2
Form: sanitizer
Sanitizer: memcheck
Write a program that reads r and n, and runs r rounds.
In round k, from 1 up, take new device memory for n ints, let a kernel set each int to k, copy the ints back, and print their sum.
Input: one line, r and n.
Output: r lines; line k holds the sum of round k.
Limits: 1 ≤ r ≤ 20; 1 ≤ n ≤ 1000.
### Examples
```in
1 3
```
```out
3
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void set(cuda::std::span<int> v, int k)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] = k;
    }
}

int main()
{
    int r {0};
    int n {0};
    std::cin >> r >> n;
    std::vector<int> v(n);
    int* d {nullptr};
    for (int k {1}; k <= r; ++k) {
        cudaMalloc(&d, n * sizeof(int));
        set<<<(n + 255) / 256, 256>>>({d, v.size()}, k);
        cudaMemcpy(v.data(), d, n * sizeof(int),
                   cudaMemcpyDeviceToHost);
        cudaFree(d);
        int sum {0};
        for (int x : v) {
            sum += x;
        }
        std::println("{}", sum);
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void set(cuda::std::span<int> v, int k)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size()) {
        v[i] = k;
    }
}

int main()
{
    int r {0};
    int n {0};
    std::cin >> r >> n;
    std::vector<int> v(n);
    int* d {nullptr};
    for (int k {1}; k <= r; ++k) {
        cudaMalloc(&d, n * sizeof(int));
        set<<<(n + 255) / 256, 256>>>({d, v.size()}, k);
        cudaMemcpy(v.data(), d, n * sizeof(int),
                   cudaMemcpyDeviceToHost);
        int sum {0};
        for (int x : v) {
            sum += x;
        }
        std::println("{}", sum);
    }
    cudaFree(d);
}
```
### Tests
```in
1 1
```
```in
2 1000
```
```in
20 1
```
```in
3 7
```
### Witness
```in
3 2
```
