# 8.45 The results of a floating-point atomicAdd from three threads
Part: the set of results of a floating-point `atomicAdd` from three threads
Clause: CUDA C++ Programming Guide §10.14 Atomic Functions, CUDA C++ Programming Guide §10.14.1.1 atomicAdd(), IEEE 754-2019 §4.3 Rounding-direction attributes
After: 8.03
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide §10.14 Atomic Functions

## Example
```cuda
#include <algorithm>
#include <array>
#include <print>
#include <cuda/std/span>

//: Let each of three threads add its float to one sum.
__global__ void add(cuda::std::span<const float> v,
                    cuda::std::span<float> sum)
{
    atomicAdd(&sum[0], v[threadIdx.x]);
}

int main()
{
    //: Pick three floats whose sum depends on the order.
    std::array<float, 3> host {1e8f, -1e8f, 1.0f};
    float* v {nullptr};
    float* sum {nullptr};
    cudaMalloc(&v, 3 * sizeof(float));
    cudaMalloc(&sum, sizeof(float));
    cudaMemcpy(v, host.data(), 3 * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(sum, 0, sizeof(float));
    add<<<1, 3>>>(cuda::std::span<const float> {v, 3},
                  cuda::std::span<float> {sum, 1});
    float got {0.0f};
    cudaMemcpy(&got, sum, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(sum);
    //: Print this run's sum; another run may leave another.
    std::println("this run: {}", got);
    //: Add the floats in all six orders to find every result.
    std::array<int, 3> order {0, 1, 2};
    do {
        float s {0.0f};
        for (int k : order) {
            s += host[k];
        }
        std::print("{} ", s);
    } while (std::next_permutation(order.begin(), order.end()));
    std::println();
}
```

## Verdict 1
```cuda
#include <array>
#include <print>
#include <cuda/std/span>

__global__ void add(cuda::std::span<const float> v,
                    cuda::std::span<float> sum)
{
    atomicAdd(&sum[0], v[threadIdx.x]);
}

int main()
{
    std::array<float, 3> host {1e8f, -1e8f, 1.0f};
    float* v {nullptr};
    float* sum {nullptr};
    cudaMalloc(&v, 3 * sizeof(float));
    cudaMalloc(&sum, sizeof(float));
    cudaMemcpy(v, host.data(), 3 * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(sum, 0, sizeof(float));
    add<<<1, 3>>>(cuda::std::span<const float> {v, 3},
                  cuda::std::span<float> {sum, 1});
    float got {0.0f};
    cudaMemcpy(&got, sum, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(sum);
    std::println("{}", got);
}
```
Answer: c++23 unspecified
```out
0
```
```out
1
```

## Verdict 2
```cuda
#include <array>
#include <print>
#include <cuda/std/span>

__global__ void add(cuda::std::span<const float> v,
                    cuda::std::span<float> sum)
{
    atomicAdd(&sum[0], v[threadIdx.x]);
}

int main()
{
    std::array<float, 3> host {1.0f, 2.0f, 0.5f};
    float* v {nullptr};
    float* sum {nullptr};
    cudaMalloc(&v, 3 * sizeof(float));
    cudaMalloc(&sum, sizeof(float));
    cudaMemcpy(v, host.data(), 3 * sizeof(float),
               cudaMemcpyHostToDevice);
    cudaMemset(sum, 0, sizeof(float));
    add<<<1, 3>>>(cuda::std::span<const float> {v, 3},
                  cuda::std::span<float> {sum, 1});
    float got {0.0f};
    cudaMemcpy(&got, sum, sizeof(float),
               cudaMemcpyDeviceToHost);
    cudaFree(v);
    cudaFree(sum);
    std::println("{}", got);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads three floats a, b and c.
Three threads each add one of them with atomicAdd to a float sum that starts at 0.
Each addition rounds to the nearest float.
Print every sum the three additions can leave, smallest first, each sum once.
Input: one line, a, b and c.
Output: one line, the sums separated by spaces, each written as std::println writes a float with {}.
Limits: each of a, b and c is a float with |x| ≤ 10⁹.
### Examples
```in
1 2 4
```
```out
7
```
### Reference
```cuda
#include <algorithm>
#include <iostream>
#include <print>
#include <set>
#include <vector>

int main()
{
    std::vector<float> v(3);
    for (float& x : v) {
        std::cin >> x;
    }
    std::ranges::sort(v);
    std::set<float> sums {};
    do {
        float s {0.0f};
        for (float x : v) {
            s += x;
        }
        sums.insert(s);
    } while (std::ranges::next_permutation(v).found);
    for (float s : sums) {
        std::print("{} ", s);
    }
    std::println();
}
```
### Wrong
```cuda
#include <algorithm>
#include <iostream>
#include <print>
#include <set>
#include <vector>

int main()
{
    std::vector<float> v(3);
    for (float& x : v) {
        std::cin >> x;
    }
    std::set<float> sums {};
    float s {0.0f};
    for (float x : v) {
        s += x;
    }
    sums.insert(s);
    for (float s : sums) {
        std::print("{} ", s);
    }
    std::println();
}
```
### Tests
```in
0 0 0
```
```in
100000000 -100000000 1
```
```in
16777216 1 1
```
```in
0.1 0.2 0.3
```
```in
1000000000 -1000000000 -0.5
```
### Witness
```in
100000000 1 -100000000
```

## Alone 2
Form: run
Write a program that reads n floats.
n threads each add one of them with atomicAdd to a float sum that starts at 0.
Each addition rounds to the nearest float.
Print the smallest and the largest sum the n additions can leave.
Input: the first line holds n; the second line holds the n floats.
Output: one line, the smallest sum and the largest sum, each written as std::println writes a float with {}.
Limits: 2 ≤ n ≤ 6; each float x has |x| ≤ 10⁹.
### Examples
```in
2
0.1 0.2
```
```out
0.3 0.3
```
### Reference
```cuda
#include <algorithm>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> v(n);
    for (float& x : v) {
        std::cin >> x;
    }
    std::ranges::sort(v);
    float low {0.0f};
    float high {0.0f};
    bool first {true};
    do {
        float s {0.0f};
        for (float x : v) {
            s += x;
        }
        low = first ? s : std::min(low, s);
        high = first ? s : std::max(high, s);
        first = false;
    } while (std::ranges::next_permutation(v).found);
    std::println("{} {}", low, high);
}
```
### Wrong
```cuda
#include <algorithm>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<float> v(n);
    for (float& x : v) {
        std::cin >> x;
    }
    float forward {0.0f};
    for (float x : v) {
        forward += x;
    }
    std::ranges::reverse(v);
    float backward {0.0f};
    for (float x : v) {
        backward += x;
    }
    float low {std::min(forward, backward)};
    float high {std::max(forward, backward)};
    std::println("{} {}", low, high);
}
```
### Tests
```in
2
1 2
```
```in
3
100000000 -100000000 1
```
```in
6
16777216 1 1 1 1 1
```
```in
4
0.1 0.2 0.3 0.4
```
```in
6
1000000000 -1000000000 3 -0.25 0.5 7
```
### Witness
```in
3
100000000 1 -100000000
```
