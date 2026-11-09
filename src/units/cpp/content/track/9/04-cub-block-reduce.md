# 9.04 A reduction by cub::BlockReduce against the tree
Part: a reduction by `cub::BlockReduce`, against the tree of the part before
Clause: CUB BlockReduce (CCCL), PMPP 5th ed. §10.4 Reducing control divergence
After: 9.03
Levels: c++23
Device: yes
Source: CCCL cub::BlockReduce documentation, https://nvidia.github.io/cccl/cub/api/classcub_1_1BlockReduce.html

## Example
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <print>

//: Name cub's reduction for a block of 32 floats.
using Reduce = cub::BlockReduce<float, 32>;

__global__ void sums(cuda::std::span<const float> x,
                     cuda::std::span<float> out)
{
    //: Give cub its scratch space in shared memory.
    __shared__ Reduce::TempStorage temp;
    float v {x[threadIdx.x]};
    //: Sum by cub; only thread 0 gets the block's sum.
    float by_cub {Reduce(temp).Sum(v)};
    //: Sum by the shuffle tree, d = 16, 8, 4, 2, 1.
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    if (threadIdx.x == 0) {
        out[0] = by_cub;
        out[1] = v;
    }
}

int main()
{
    //: Fill 32 floats: 1e8, fifteen 1s, -1e8, fifteen 1s.
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, 2 * sizeof(float));
    for (int i {0}; i < 32; ++i) {
        x[i] = i == 0 ? 1e8f : i == 16 ? -1e8f : 1.0f;
    }
    //: Print both sums: cub adds in another order.
    sums<<<1, 32>>>({x, 32}, {out, 2});
    cudaDeviceSynchronize();
    std::println("{:.0f} {:.0f}", out[0], out[1]);
    cudaFree(x);
    cudaFree(out);
}
```

## Verdict 1
Sanitizer: racecheck
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <cuda/functional>
#include <print>

using Reduce = cub::BlockReduce<int, 256>;

__global__ void both(cuda::std::span<int> out)
{
    __shared__ Reduce::TempStorage temp;
    int t {static_cast<int>(threadIdx.x)};
    int s {Reduce(temp).Sum(t)};
    int m {Reduce(temp).Reduce(t, cuda::maximum<> {})};
    if (t == 0) {
        out[0] = s;
        out[1] = m;
    }
}

int main()
{
    int* out {nullptr};
    cudaMallocManaged(&out, 2 * sizeof(int));
    both<<<1, 256>>>({out, 2});
    cudaDeviceSynchronize();
    std::println("{} {}", out[0], out[1]);
    cudaFree(out);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
Sanitizer: racecheck
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <cuda/functional>
#include <print>

using Reduce = cub::BlockReduce<int, 256>;

__global__ void both(cuda::std::span<int> out)
{
    __shared__ Reduce::TempStorage temp;
    int t {static_cast<int>(threadIdx.x)};
    int s {Reduce(temp).Sum(t)};
    __syncthreads();
    int m {Reduce(temp).Reduce(t, cuda::maximum<> {})};
    if (t == 0) {
        out[0] = s;
        out[1] = m;
    }
}

int main()
{
    int* out {nullptr};
    cudaMallocManaged(&out, 2 * sizeof(int));
    both<<<1, 256>>>({out, 2});
    cudaDeviceSynchronize();
    std::println("{} {}", out[0], out[1]);
    cudaFree(out);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads 32 numbers and sums them as floats in one block of 32 threads on the device, in two ways. First, sum them with cub::BlockReduce<float, 32> and its Sum, in cub's default algorithm. Second, sum them by the shuffle tree: lane i starts with number i; for d = 16, 8, 4, 2, 1, lane i adds the value lane i + d holds before that step; the sum is lane 0's value. cub's order of additions is fixed by its code in the toolkit, so both sums are exact text.
Input: one line of 32 integers, each read into a float.
Output: two lines: cub's sum, then the tree's sum, each printed with no digits after the point, as std::println("{:.0f}", sum) prints it.
Limits: each integer is between -1000000000 and 1000000000.
### Examples
```in
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
```
```out
528
528
```
```in
-2 -1 0 1 -2 -1 0 1 -2 -1 0 1 -2 -1 0 1 -2 -1 0 1 -2 -1 0 1 -2 -1 0 1 -2 -1 0 1
```
```out
-16
-16
```
### Reference
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Reduce = cub::BlockReduce<float, 32>;

__global__ void sums(cuda::std::span<const float> x,
                     cuda::std::span<float> out)
{
    __shared__ Reduce::TempStorage temp;
    float v {x[threadIdx.x]};
    float by_cub {Reduce(temp).Sum(v)};
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    if (threadIdx.x == 0) {
        out[0] = by_cub;
        out[1] = v;
    }
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, 2 * sizeof(float));
    for (int i {0}; i < 32; ++i) {
        std::cin >> x[i];
    }
    sums<<<1, 32>>>({x, 32}, {out, 2});
    cudaDeviceSynchronize();
    std::println("{:.0f}", out[0]);
    std::println("{:.0f}", out[1]);
    cudaFree(x);
    cudaFree(out);
}
```
### Wrong
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <iostream>
#include <print>

using Reduce = cub::BlockReduce<float, 32>;

__global__ void sums(cuda::std::span<const float> x,
                     cuda::std::span<float> out)
{
    __shared__ Reduce::TempStorage temp;
    float v {x[threadIdx.x]};
    float by_cub {Reduce(temp).Sum(v)};
    for (int d {16}; d > 0; d /= 2) {
        v += __shfl_down_sync(0xffffffffu, v, d);
    }
    if (threadIdx.x == 0) {
        out[0] = v;
        out[1] = v;
    }
}

int main()
{
    float* x {nullptr};
    float* out {nullptr};
    cudaMallocManaged(&x, 32 * sizeof(float));
    cudaMallocManaged(&out, 2 * sizeof(float));
    for (int i {0}; i < 32; ++i) {
        std::cin >> x[i];
    }
    sums<<<1, 32>>>({x, 32}, {out, 2});
    cudaDeviceSynchronize();
    std::println("{:.0f}", out[0]);
    std::println("{:.0f}", out[1]);
    cudaFree(x);
    cudaFree(out);
}
```
### Tests
```in
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
```
```in
-1000000000 -999999999 -999999998 -999999997 -999999996 -999999995 -999999994 -999999993 -999999992 -999999991 -999999990 -999999989 -999999988 -999999987 -999999986 -999999985 -999999984 -999999983 -999999982 -999999981 -999999980 -999999979 -999999978 -999999977 -999999976 -999999975 -999999974 -999999973 -999999972 -999999971 -999999970 1000000000
```
```in
100000000 3 3 3 -100000000 3 3 3 100000000 3 3 3 -100000000 3 3 3 100000000 3 3 3 -100000000 3 3 3 100000000 3 3 3 -100000000 3 3 3
```
```in
100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```
### Witness
```in
100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -100000000 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

## Alone 2
Form: run
Write a program that reads n integers and prints the largest. Find it on the device in one block of 128 threads, where thread t holds integer t, with cub::BlockReduce<int, 128>. Threads t ≥ n hold no integer.
Input: one line, n, then one line of n integers.
Output: one line, the largest integer.
Limits: 1 ≤ n ≤ 128; each integer is between -1000000000 and 1000000000.
### Examples
```in
5
3 9 -2 9 1
```
```out
9
```
```in
128
-50 -13 24 -40 -3 34 -30 7 44 -20 17 -47 -10 27 -37 0 37 -27 10 47 -17 20 -44 -7 30 -34 3 40 -24 13 50 -14 23 -41 -4 33 -31 6 43 -21 16 -48 -11 26 -38 -1 36 -28 9 46 -18 19 -45 -8 29 -35 2 39 -25 12 49 -15 22 -42 -5 32 -32 5 42 -22 15 -49 -12 25 -39 -2 35 -29 8 45 -19 18 -46 -9 28 -36 1 38 -26 11 48 -16 21 -43 -6 31 -33 4 41 -23 14 -50 -13 24 -40 -3 34 -30 7 44 -20 17 -47 -10 27 -37 0 37 -27 10 47 -17 20 -44 -7 30 -34 3
```
```out
50
```
### Reference
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <cuda/functional>
#include <iostream>
#include <print>

using Reduce = cub::BlockReduce<int, 128>;

__global__ void largest(cuda::std::span<const int> x,
                        cuda::std::span<int> out)
{
    __shared__ Reduce::TempStorage temp;
    unsigned t {threadIdx.x};
    int n {static_cast<int>(x.size())};
    int v {t < x.size() ? x[t] : 0};
    int m {Reduce(temp).Reduce(v, cuda::maximum<> {}, n)};
    if (t == 0) {
        out[0] = m;
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    int* x {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&x, n * sizeof(int));
    cudaMallocManaged(&out, sizeof(int));
    for (unsigned i {0}; i < n; ++i) {
        std::cin >> x[i];
    }
    largest<<<1, 128>>>({x, n}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
### Wrong
```cuda
#include <cub/block/block_reduce.cuh>
#include <cuda/std/span>
#include <cuda/functional>
#include <iostream>
#include <print>

using Reduce = cub::BlockReduce<int, 128>;

__global__ void largest(cuda::std::span<const int> x,
                        cuda::std::span<int> out)
{
    __shared__ Reduce::TempStorage temp;
    unsigned t {threadIdx.x};
    int n {static_cast<int>(x.size())};
    int v {t < x.size() ? x[t] : 0};
    int m {Reduce(temp).Reduce(v, cuda::maximum<> {})};
    if (t == 0) {
        out[0] = m;
    }
}

int main()
{
    unsigned n {0};
    std::cin >> n;
    int* x {nullptr};
    int* out {nullptr};
    cudaMallocManaged(&x, n * sizeof(int));
    cudaMallocManaged(&out, sizeof(int));
    for (unsigned i {0}; i < n; ++i) {
        std::cin >> x[i];
    }
    largest<<<1, 128>>>({x, n}, {out, 1});
    cudaDeviceSynchronize();
    std::println("{}", *out);
    cudaFree(x);
    cudaFree(out);
}
```
### Tests
```in
1
-1000000000
```
```in
128
-1000000000 -999999999 -999999998 -999999997 -999999996 -999999995 -999999994 -999999993 -999999992 -999999991 -999999990 -999999989 -999999988 -999999987 -999999986 -999999985 -999999984 -999999983 -999999982 -999999981 -999999980 -999999979 -999999978 -999999977 -999999976 -999999975 -999999974 -999999973 -999999972 -999999971 -999999970 -999999969 -999999968 -999999967 -999999966 -999999965 -999999964 -999999963 -999999962 -999999961 -999999960 -999999959 -999999958 -999999957 -999999956 -999999955 -999999954 -999999953 -999999952 -999999951 -999999950 -999999949 -999999948 -999999947 -999999946 -999999945 -999999944 -999999943 -999999942 -999999941 -999999940 -999999939 -999999938 -999999937 -999999936 -999999935 -999999934 -999999933 -999999932 -999999931 -999999930 -999999929 -999999928 -999999927 -999999926 -999999925 -999999924 -999999923 -999999922 -999999921 -999999920 -999999919 -999999918 -999999917 -999999916 -999999915 -999999914 -999999913 -999999912 -999999911 -999999910 -999999909 -999999908 -999999907 -999999906 -999999905 -999999904 -999999903 -999999902 -999999901 -999999900 -999999899 -999999898 -999999897 -999999896 -999999895 -999999894 -999999893 -999999892 -999999891 -999999890 -999999889 -999999888 -999999887 -999999886 -999999885 -999999884 -999999883 -999999882 -999999881 -999999880 -999999879 -999999878 -999999877 -999999876 -999999875 -999999874 -999999873
```
```in
3
0 -5 -7
```
```in
100
-100 -47 6 59 -89 -36 17 70 -78 -25 28 81 -67 -14 39 92 -56 -3 50 -98 -45 8 61 -87 -34 19 72 -76 -23 30 83 -65 -12 41 94 -54 -1 52 -96 -43 10 63 -85 -32 21 74 -74 -21 32 85 -63 -10 43 96 -52 1 54 -94 -41 12 65 -83 -30 23 76 -72 -19 34 87 -61 -8 45 98 -50 3 56 -92 -39 14 67 -81 -28 25 78 -70 -17 36 89 -59 -6 47 100 -48 5 58 -90 -37 16 69 -79
```
### Witness
```in
3
-4 -8 -6
```
