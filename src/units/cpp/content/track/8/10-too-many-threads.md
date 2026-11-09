# 8.10 The error code of a launch with more threads per block than the device allows
Part: the error code of a launch with more threads per block than the device allows
Clause: CUDA C++ Programming Guide: Thread Hierarchy, CUDA C++ Programming Guide: Compute Capabilities (Technical Specifications), CUDA C++ Programming Guide: Error Checking
After: 8.02
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Thread Hierarchy (a block holds at most 1024 threads) and the table of technical specifications (1024 threads per block; x and y up to 1024, z up to 64); the error name is read on this machine, the pin

## Example
```cuda
#include <print>

//: Write a kernel that does nothing.
__global__ void idle()
{
}

//: Print the error the last launch left, and clear it.
void report()
{
    std::println("{}", cudaGetErrorName(cudaGetLastError()));
}

int main()
{
    //: Read the most threads a block may hold on this device.
    int most {0};
    cudaDeviceGetAttribute(&most,
                           cudaDevAttrMaxThreadsPerBlock, 0);
    std::println("{}", most);
    //: Launch a block of that many threads: the launch is fine.
    idle<<<1, most>>>();
    report();
    //: Launch a block of one thread more: the launch fails.
    idle<<<1, most + 1>>>();
    report();
    //: Launch 32 by 33 threads, more than 1024 in all.
    idle<<<1, dim3 {32, 33}>>>();
    report();
    cudaDeviceSynchronize();
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    v[i] = static_cast<int>(i);
}

__global__ void last(cuda::std::span<const int> v,
                     cuda::std::span<int> out)
{
    out[0] = v[v.size() - 1];
}

int main()
{
    int* v {nullptr};
    int* out {nullptr};
    cudaMalloc(&v, 2048 * sizeof(int));
    cudaMalloc(&out, sizeof(int));
    fill<<<2, 1024>>>({v, 2048});
    last<<<1, 1>>>({v, 2048}, {out, 1});
    int got {0};
    cudaMemcpy(&got, out, sizeof(int), cudaMemcpyDeviceToHost);
    std::println("{}", got);
    cudaFree(out);
    cudaFree(v);
}
```
Answer: c++23 defined
Sanitizer: initcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void fill(cuda::std::span<int> v)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    v[i] = static_cast<int>(i);
}

__global__ void last(cuda::std::span<const int> v,
                     cuda::std::span<int> out)
{
    out[0] = v[v.size() - 1];
}

int main()
{
    int* v {nullptr};
    int* out {nullptr};
    cudaMalloc(&v, 2048 * sizeof(int));
    cudaMalloc(&out, sizeof(int));
    fill<<<1, 2048>>>({v, 2048});
    last<<<1, 1>>>({v, 2048}, {out, 1});
    int got {0};
    cudaMemcpy(&got, out, sizeof(int), cudaMemcpyDeviceToHost);
    std::println("{}", got);
    cudaFree(out);
    cudaFree(v);
}
```
Answer: c++23 undefined sanitizer
Sanitizer: initcheck

## Alone 1
Form: run
Write a program that reads n and launches a kernel on n threads in all, in blocks of the size you choose.
The thread with global index i below n writes i to out[i], in an int array of n elements that starts filled with -1.
After the launch, print the error name that `cudaGetLastError` gives, as `cudaGetErrorName` writes it.
Then copy out back and print how many i have out[i] equal to i.
Input: one line, n.
Output: one line, the error name; one line, the count.
Limits: 1 ≤ n ≤ 100000.
### Examples
```in
1000
```
```out
cudaSuccess
1000
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void index(cuda::std::span<int> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < out.size()) {
        out[i] = static_cast<int>(i);
    }
}

int main()
{
    int n {1};
    std::cin >> n;
    std::size_t bytes {n * sizeof(int)};
    int* out {nullptr};
    cudaMalloc(&out, bytes);
    cudaMemset(out, 0xff, bytes);
    int block {256};
    index<<<(n + block - 1) / block, block>>>({out, bytes / 4});
    std::println("{}", cudaGetErrorName(cudaGetLastError()));
    std::vector<int> v(n);
    cudaMemcpy(v.data(), out, bytes, cudaMemcpyDeviceToHost);
    int count {0};
    for (int i {0}; i < n; ++i) {
        if (v[i] == i) {
            ++count;
        }
    }
    std::println("{}", count);
    cudaFree(out);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <vector>

__global__ void index(cuda::std::span<int> out)
{
    unsigned i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < out.size()) {
        out[i] = static_cast<int>(i);
    }
}

int main()
{
    int n {1};
    std::cin >> n;
    std::size_t bytes {n * sizeof(int)};
    int* out {nullptr};
    cudaMalloc(&out, bytes);
    cudaMemset(out, 0xff, bytes);
    int block {n};
    index<<<(n + block - 1) / block, block>>>({out, bytes / 4});
    std::println("{}", cudaGetErrorName(cudaGetLastError()));
    std::vector<int> v(n);
    cudaMemcpy(v.data(), out, bytes, cudaMemcpyDeviceToHost);
    int count {0};
    for (int i {0}; i < n; ++i) {
        if (v[i] == i) {
            ++count;
        }
    }
    std::println("{}", count);
    cudaFree(out);
}
```
### Tests
```in
1
```
```in
1024
```
```in
1025
```
```in
100000
```
### Witness
```in
2000
```

## Alone 2
Form: run
Write a program that reads a block shape x, y, z and prints the error name a launch of one block of that shape gives.
Launch nothing: work it out from the limits of device 0 that `cudaDeviceGetAttribute` reads.
On this machine a launch that fails gives `cudaErrorInvalidValue`.
Input: one line, x, y and z.
Output: one line, `cudaSuccess` or `cudaErrorInvalidValue`.
Limits: 1 ≤ x, y, z ≤ 2000.
### Examples
```in
8 8 8
```
```out
cudaSuccess
```
### Reference
```cuda
#include <iostream>
#include <print>

long long limit(cudaDeviceAttr what)
{
    int value {0};
    cudaDeviceGetAttribute(&value, what, 0);
    return value;
}

int main()
{
    long long x {1};
    long long y {1};
    long long z {1};
    std::cin >> x >> y >> z;
    long long most {limit(cudaDevAttrMaxThreadsPerBlock)};
    long long mx {limit(cudaDevAttrMaxBlockDimX)};
    long long my {limit(cudaDevAttrMaxBlockDimY)};
    long long mz {limit(cudaDevAttrMaxBlockDimZ)};
    bool sides {x <= mx && y <= my && z <= mz};
    bool fine {sides && x * y * z <= most};
    std::println("{}", fine ? "cudaSuccess"
                            : "cudaErrorInvalidValue");
}
```
### Wrong
```cuda
#include <iostream>
#include <print>

long long limit(cudaDeviceAttr what)
{
    int value {0};
    cudaDeviceGetAttribute(&value, what, 0);
    return value;
}

int main()
{
    long long x {1};
    long long y {1};
    long long z {1};
    std::cin >> x >> y >> z;
    long long most {limit(cudaDevAttrMaxThreadsPerBlock)};
    long long mx {limit(cudaDevAttrMaxBlockDimX)};
    long long my {limit(cudaDevAttrMaxBlockDimY)};
    long long mz {limit(cudaDevAttrMaxBlockDimZ)};
    bool sides {x <= mx && y <= my && z <= mz};
    bool fine {sides};
    std::println("{}", fine ? "cudaSuccess"
                            : "cudaErrorInvalidValue");
}
```
### Tests
```in
1 1 1
```
```in
32 32 1
```
```in
1 1 65
```
```in
2000 1 1
```
```in
1 1024 1
```
```in
16 16 8
```
### Witness
```in
32 33 1
```
