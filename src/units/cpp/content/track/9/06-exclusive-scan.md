# 9.06 An exclusive scan
Part: an exclusive scan
Clause: PMPP 5th ed. §11.1 Background (an exclusive scan is the inclusive scan shifted right, with the identity in front), PMPP 5th ed. §11.2 Parallel scan with the Kogge-Stone algorithm
After: 9.05
Levels: c++23
Device: yes
Source: Programming Massively Parallel Processors, 5th ed. (Hwu, Kirk, El Hajj), ch. 11, §11.1 and §11.2; the down-sweep of the second item alone's reference is Blelloch's (Prefix sums and their applications, 1990), which the book does not give

## Example
```cuda
#include <print>

__global__ void scan(const int* x, int* y)
{
    __shared__ int s[8];
    unsigned t {threadIdx.x};
    //: Shift the input right by one place, with 0 in front.
    s[t] = t > 0 ? x[t - 1] : 0;
    __syncthreads();
    //: Run the inclusive scan steps on the shifted values.
    for (unsigned d {1}; d < 8; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    y[t] = s[t];
}

int main()
{
    //: Fill eight integers, 1 to 8.
    int* x {nullptr};
    int* y {nullptr};
    cudaMallocManaged(&x, 8 * sizeof(int));
    cudaMallocManaged(&y, 8 * sizeof(int));
    for (int i {0}; i < 8; ++i) {
        x[i] = i + 1;
    }
    //: Print y: element i holds the sum of x[0] to x[i - 1].
    scan<<<1, 8>>>(x, y);
    cudaDeviceSynchronize();
    for (int i {0}; i < 8; ++i) {
        std::print("{} ", y[i]);
    }
    std::println();
    cudaFree(x);
    cudaFree(y);
}
```

## Verdict 1
```cuda
#include <print>
#include <vector>

__global__ void scan(const int* x, int* y)
{
    __shared__ int s[8];
    unsigned t {threadIdx.x};
    s[t] = x[t - 1];
    __syncthreads();
    for (unsigned d {1}; d < 8; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    y[t] = s[t];
}

int main()
{
    std::vector<int> h(8, 1);
    int* x {nullptr};
    int* y {nullptr};
    cudaMalloc(&x, 8 * sizeof(int));
    cudaMalloc(&y, 8 * sizeof(int));
    cudaMemcpy(x, h.data(), 8 * sizeof(int),
               cudaMemcpyHostToDevice);
    scan<<<1, 8>>>(x, y);
    cudaMemcpy(h.data(), y, 8 * sizeof(int),
               cudaMemcpyDeviceToHost);
    std::println("{}", h[7]);
    cudaFree(x);
    cudaFree(y);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cuda
#include <print>
#include <vector>

__global__ void scan(const int* x, int* y)
{
    __shared__ int s[8];
    unsigned t {threadIdx.x};
    s[t] = t > 0 ? x[t - 1] : 0;
    __syncthreads();
    for (unsigned d {1}; d < 8; d *= 2) {
        int add {t >= d ? s[t - d] : 0};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    y[t] = s[t];
}

int main()
{
    std::vector<int> h(8, 1);
    int* x {nullptr};
    int* y {nullptr};
    cudaMalloc(&x, 8 * sizeof(int));
    cudaMalloc(&y, 8 * sizeof(int));
    cudaMemcpy(x, h.data(), 8 * sizeof(int),
               cudaMemcpyHostToDevice);
    scan<<<1, 8>>>(x, y);
    cudaMemcpy(h.data(), y, 8 * sizeof(int),
               cudaMemcpyDeviceToHost);
    std::println("{}", h[7]);
    cudaFree(x);
    cudaFree(y);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n numbers and prints their exclusive scan as floats: output i is the sum of numbers 0 to i − 1, and output 0 is 0. Scan on the device in one block of n threads, in this order. First shift the numbers right by one place, with 0 in front. Then for s = 1, 2, 4, and so on while s < n, each element i ≥ s adds the value element i − s holds before that step. This fixes the order of the additions, so each float is exact text.
Input: one line, n, then one line of n integers, each read into a float.
Output: one line, the n sums separated by spaces, each printed as std::print("{:.0f}", sum) prints it.
Limits: 1 ≤ n ≤ 1024; each integer is between -1000000000 and 1000000000.
### Examples
```in
4
1 2 3 4
```
```out
0 1 3 6
```
```in
6
7 -2 5 0 -1 3
```
```out
0 7 5 10 10 9
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<const float> x,
                     cuda::std::span<float> y)
{
    __shared__ float s[1024];
    unsigned t {threadIdx.x};
    s[t] = t > 0 ? x[t - 1] : 0.0f;
    __syncthreads();
    for (unsigned d {1}; d < blockDim.x; d *= 2) {
        float add {t >= d ? s[t - d] : 0.0f};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    y[t] = s[t];
}

int main()
{
    int n {0};
    std::cin >> n;
    float* x {nullptr};
    float* y {nullptr};
    cudaMallocManaged(&x, n * sizeof(float));
    cudaMallocManaged(&y, n * sizeof(float));
    for (int i {0}; i < n; ++i) {
        std::cin >> x[i];
    }
    std::size_t m {static_cast<std::size_t>(n)};
    scan<<<1, n>>>({x, m}, {y, m});
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{:.0f}", i == 0 ? "" : " ", y[i]);
    }
    std::println();
    cudaFree(x);
    cudaFree(y);
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<const float> x,
                     cuda::std::span<float> y)
{
    __shared__ float s[1024];
    unsigned t {threadIdx.x};
    s[t] = x[t];
    __syncthreads();
    for (unsigned d {1}; d < blockDim.x; d *= 2) {
        float add {t >= d ? s[t - d] : 0.0f};
        __syncthreads();
        s[t] += add;
        __syncthreads();
    }
    y[t] = s[t] - x[t];
}

int main()
{
    int n {0};
    std::cin >> n;
    float* x {nullptr};
    float* y {nullptr};
    cudaMallocManaged(&x, n * sizeof(float));
    cudaMallocManaged(&y, n * sizeof(float));
    for (int i {0}; i < n; ++i) {
        std::cin >> x[i];
    }
    std::size_t m {static_cast<std::size_t>(n)};
    scan<<<1, n>>>({x, m}, {y, m});
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{:.0f}", i == 0 ? "" : " ", y[i]);
    }
    std::println();
    cudaFree(x);
    cudaFree(y);
}
```
### Tests
```in
1
5
```
```in
3
1000000000 -1000000000 1000000000
```
```in
8
1 100000000 -100000000 1 1 100000000 -100000000 1
```
```in
1024
-2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 100000000 -100000000 0 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 100000000 -100000000 1 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 100000000 -100000000 2 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 100000000 -100000000 -2 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1 100000000 -100000000 -1 0 1 2 -2 -1 0 1 2 -2 -1 0 1
```
### Witness
```in
4
1 100000000 -100000000 1
```

## Alone 2
Form: run
Write a program that reads n integers and prints their exclusive scan: output i is the sum of integers 0 to i − 1, and output 0 is 0. Scan them on the device in one block of 256 threads.
Input: one line, n, then one line of n integers.
Output: one line, the n sums separated by spaces.
Limits: 1 ≤ n ≤ 256; each integer is between -1000 and 1000.
### Examples
```in
4
3 -1 -2 0
```
```out
0 3 2 0
```
```in
6
5 -5 2 -2 1 -1
```
```out
0 5 0 2 0 1
```
### Reference
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<int> a, unsigned n)
{
    __shared__ int s[256];
    unsigned t {threadIdx.x};
    s[t] = t < n ? a[t] : 0;
    __syncthreads();
    for (unsigned d {1}; d < 256; d *= 2) {
        if ((t + 1) % (2 * d) == 0) {
            s[t] += s[t - d];
        }
        __syncthreads();
    }
    if (t == 255) {
        s[t] = 0;
    }
    __syncthreads();
    for (unsigned d {128}; d > 0; d /= 2) {
        if ((t + 1) % (2 * d) == 0) {
            int left {s[t - d]};
            s[t - d] = s[t];
            s[t] += left;
        }
        __syncthreads();
    }
    if (t < n) {
        a[t] = s[t];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* a {nullptr};
    cudaMallocManaged(&a, n * sizeof(int));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    scan<<<1, 256>>>({a, static_cast<std::size_t>(n)}, n);
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", a[i]);
    }
    std::println();
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cstddef>
#include <cuda/std/span>
#include <iostream>
#include <print>

__global__ void scan(cuda::std::span<int> a, unsigned n)
{
    __shared__ int s[256];
    unsigned t {threadIdx.x};
    s[t] = t < n ? a[t] : 0;
    __syncthreads();
    for (unsigned d {1}; d < 256; d *= 2) {
        if ((t + 1) % (2 * d) == 0) {
            s[t] += s[t - d];
        }
        __syncthreads();
    }
    __syncthreads();
    for (unsigned d {128}; d > 0; d /= 2) {
        if ((t + 1) % (2 * d) == 0) {
            int left {s[t - d]};
            s[t - d] = s[t];
            s[t] += left;
        }
        __syncthreads();
    }
    if (t < n) {
        a[t] = s[t];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* a {nullptr};
    cudaMallocManaged(&a, n * sizeof(int));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    scan<<<1, 256>>>({a, static_cast<std::size_t>(n)}, n);
    cudaDeviceSynchronize();
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", a[i]);
    }
    std::println();
    cudaFree(a);
}
```
### Tests
```in
1
7
```
```in
5
1 1 1 1 1
```
```in
256
-1000 -963 -926 -889 -852 -815 -778 -741 -704 -667 -630 -593 -556 -519 -482 -445 -408 -371 -334 -297 -260 -223 -186 -149 -112 -75 -38 -1 36 73 110 147 184 221 258 295 332 369 406 443 480 517 554 591 628 665 702 739 776 813 850 887 924 961 998 -966 -929 -892 -855 -818 -781 -744 -707 -670 -633 -596 -559 -522 -485 -448 -411 -374 -337 -300 -263 -226 -189 -152 -115 -78 -41 -4 33 70 107 144 181 218 255 292 329 366 403 440 477 514 551 588 625 662 699 736 773 810 847 884 921 958 995 -969 -932 -895 -858 -821 -784 -747 -710 -673 -636 -599 -562 -525 -488 -451 -414 -377 -340 -303 -266 -229 -192 -155 -118 -81 -44 -7 30 67 104 141 178 215 252 289 326 363 400 437 474 511 548 585 622 659 696 733 770 807 844 881 918 955 992 -972 -935 -898 -861 -824 -787 -750 -713 -676 -639 -602 -565 -528 -491 -454 -417 -380 -343 -306 -269 -232 -195 -158 -121 -84 -47 -10 27 64 101 138 175 212 249 286 323 360 397 434 471 508 545 582 619 656 693 730 767 804 841 878 915 952 989 -975 -938 -901 -864 -827 -790 -753 -716 -679 -642 -605 -568 -531 -494 -457 -420 -383 -346 -309 -272 -235 -198 -161 -124 -87 -50 -13 24 61 98 135 172 209 246 283 320 357 394 431
```
```in
200
0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1 2 -3 4 -5 6 -7 8 0 1 -2 3 -4 5 -6 7 -8 0 -1
```
### Witness
```in
3
1 2 3
```
