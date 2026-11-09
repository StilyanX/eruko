# 8.39 A copy and a kernel in two streams, joined by an event
Part: a copy and a kernel in two streams joined by an event: the result
Clause: [intro.races], CUDA C++ Programming Guide: Asynchronous Concurrent Execution, Streams, CUDA C++ Programming Guide: Events, CUDA Runtime API: cudaEventRecord, cudaStreamWaitEvent, cudaMemcpyAsync
After: 8.38
Levels: c++23
Device: yes
Source: CUDA Runtime API, cudaStreamWaitEvent (work submitted to the stream after the call waits for the work the event captured)

## Example
```cuda
#include <cuda/std/span>
#include <print>
#include <span>

__global__ void twice(cuda::std::span<int> v)
{
    v[threadIdx.x] *= 2;
}

int main()
{
    //: Keep the host values in pinned memory for an async copy.
    int* h {nullptr};
    cudaMallocHost(&h, 4 * sizeof(int));
    std::span<int> hv {h, 4};
    for (int i {0}; i < 4; ++i) {
        hv[i] = i + 1;
    }
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaStream_t copy {};
    cudaStream_t work {};
    cudaStreamCreate(&copy);
    cudaStreamCreate(&work);
    cudaEvent_t copied {};
    cudaEventCreate(&copied);
    //: Copy in one stream and record an event after the copy.
    cudaMemcpyAsync(d, h, 4 * sizeof(int),
                    cudaMemcpyHostToDevice, copy);
    cudaEventRecord(copied, copy);
    //: Make the other stream wait for the event, then launch.
    cudaStreamWaitEvent(work, copied);
    twice<<<1, 4, 0, work>>>({d, 4});
    //: Wait for both streams, then read the result.
    cudaDeviceSynchronize();
    cudaMemcpy(h, d, 4 * sizeof(int), cudaMemcpyDeviceToHost);
    std::println("{} {} {} {}", hv[0], hv[1], hv[2], hv[3]);
    cudaEventDestroy(copied);
    cudaStreamDestroy(work);
    cudaStreamDestroy(copy);
    cudaFree(d);
    cudaFreeHost(h);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void add_one(cuda::std::span<int> v)
{
    v[0] += 1;
}

int main()
{
    int* h {nullptr};
    cudaMallocHost(&h, sizeof(int));
    *h = 41;
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    cudaStream_t copy {};
    cudaStream_t work {};
    cudaStreamCreate(&copy);
    cudaStreamCreate(&work);
    cudaEvent_t copied {};
    cudaEventCreate(&copied);
    cudaMemcpyAsync(d, h, sizeof(int), cudaMemcpyHostToDevice,
                    copy);
    cudaEventRecord(copied, copy);
    cudaStreamWaitEvent(work, copied);
    add_one<<<1, 1, 0, work>>>({d, 1});
    cudaDeviceSynchronize();
    cudaMemcpy(h, d, sizeof(int), cudaMemcpyDeviceToHost);
    std::println("{}", *h);
    cudaEventDestroy(copied);
    cudaStreamDestroy(work);
    cudaStreamDestroy(copy);
    cudaFree(d);
    cudaFreeHost(h);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void add_one(cuda::std::span<int> v)
{
    v[0] += 1;
}

int main()
{
    int* h {nullptr};
    cudaMallocHost(&h, sizeof(int));
    *h = 41;
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    cudaMemset(d, 0, sizeof(int));
    cudaDeviceSynchronize();
    cudaStream_t copy {};
    cudaStream_t work {};
    cudaStreamCreate(&copy);
    cudaStreamCreate(&work);
    cudaEvent_t copied {};
    cudaEventCreate(&copied);
    cudaEventRecord(copied, copy);
    cudaMemcpyAsync(d, h, sizeof(int), cudaMemcpyHostToDevice,
                    copy);
    cudaStreamWaitEvent(work, copied);
    add_one<<<1, 1, 0, work>>>({d, 1});
    cudaDeviceSynchronize();
    cudaMemcpy(h, d, sizeof(int), cudaMemcpyDeviceToHost);
    std::println("{}", *h);
    cudaEventDestroy(copied);
    cudaStreamDestroy(work);
    cudaStreamDestroy(copy);
    cudaFree(d);
    cudaFreeHost(h);
}
```
Answer: c++23 undefined stored
Derivation 1: The event is recorded before the copy is sent, so it captures no work; the kernel waits for nothing, and its read and write of d race with the copy's write, undefined.
Derivation 2: cudaStreamWaitEvent orders only the work recorded before cudaEventRecord; the copy comes after the record, so the copy and add_one touch d with no order, a data race, undefined.

## Alone 1
Form: run
Write a program that reads n integers into pinned host memory from `cudaMallocHost`, and has device memory for n ints set to 0.
Copy the integers to the device with `cudaMemcpyAsync` in one stream. In a second stream, a kernel sets each integer over 100 to 100.
Join the two streams with an event, so the kernel sees the copied integers. Then copy the integers back and print them.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the n integers after the kernel, separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
1 2 3
```
```out
1 2 3
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <span>

__global__ void cap(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size() && v[i] > 100) {
        v[i] = 100;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* h {nullptr};
    cudaMallocHost(&h, n * sizeof(int));
    std::span<int> hv {h, static_cast<std::size_t>(n)};
    for (int& x : hv) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemset(d, 0, n * sizeof(int));
    cudaStream_t copy {};
    cudaStream_t work {};
    cudaStreamCreate(&copy);
    cudaStreamCreate(&work);
    cudaEvent_t done {};
    cudaEventCreate(&done);
    cudaMemcpyAsync(d, h, n * sizeof(int),
                    cudaMemcpyHostToDevice, copy);
    cudaEventRecord(done, copy);
    cudaStreamWaitEvent(work, done);
    cap<<<(n + 255) / 256, 256, 0, work>>>({d, hv.size()});
    cudaDeviceSynchronize();
    cudaMemcpy(h, d, n * sizeof(int), cudaMemcpyDeviceToHost);
    for (int x : hv) {
        std::print("{} ", x);
    }
    std::println();
    cudaEventDestroy(done);
    cudaStreamDestroy(work);
    cudaStreamDestroy(copy);
    cudaFree(d);
    cudaFreeHost(h);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <span>

__global__ void cap(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size() && v[i] > 100) {
        v[i] = 100;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* h {nullptr};
    cudaMallocHost(&h, n * sizeof(int));
    std::span<int> hv {h, static_cast<std::size_t>(n)};
    for (int& x : hv) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemset(d, 0, n * sizeof(int));
    cudaStream_t copy {};
    cudaStream_t work {};
    cudaStreamCreate(&copy);
    cudaStreamCreate(&work);
    cudaEvent_t done {};
    cudaEventCreate(&done);
    cap<<<(n + 255) / 256, 256, 0, work>>>({d, hv.size()});
    cudaEventRecord(done, work);
    cudaStreamWaitEvent(copy, done);
    cudaMemcpyAsync(d, h, n * sizeof(int),
                    cudaMemcpyHostToDevice, copy);
    cudaDeviceSynchronize();
    cudaMemcpy(h, d, n * sizeof(int), cudaMemcpyDeviceToHost);
    for (int x : hv) {
        std::print("{} ", x);
    }
    std::println();
    cudaEventDestroy(done);
    cudaStreamDestroy(work);
    cudaStreamDestroy(copy);
    cudaFree(d);
    cudaFreeHost(h);
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
100 101 99 -101
```
```in
6
500 0 -500 100 200 7
```
### Witness
```in
2
150 5
```

## Alone 2
Form: run
Write a program that reads n integers and copies them to device memory with `cudaMemcpy`.
In one stream, a kernel replaces each integer by its absolute value.
In a second stream, `cudaMemcpyAsync` copies the integers back to pinned host memory from `cudaMallocHost`.
Join the two streams with an event, so the copy takes the kernel's result. Print the integers after both streams end.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the n integers copied back, separated by spaces.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
### Examples
```in
3
4 0 9
```
```out
4 0 9
```
### Reference
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <span>

__global__ void absolute(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size() && v[i] < 0) {
        v[i] = -v[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* h {nullptr};
    cudaMallocHost(&h, n * sizeof(int));
    std::span<int> hv {h, static_cast<std::size_t>(n)};
    for (int& x : hv) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h, n * sizeof(int), cudaMemcpyHostToDevice);
    cudaStream_t work {};
    cudaStream_t back {};
    cudaStreamCreate(&work);
    cudaStreamCreate(&back);
    cudaEvent_t done {};
    cudaEventCreate(&done);
    absolute<<<(n + 255) / 256, 256, 0, work>>>({d, hv.size()});
    cudaEventRecord(done, work);
    cudaStreamWaitEvent(back, done);
    cudaMemcpyAsync(h, d, n * sizeof(int),
                    cudaMemcpyDeviceToHost, back);
    cudaDeviceSynchronize();
    for (int x : hv) {
        std::print("{} ", x);
    }
    std::println();
    cudaEventDestroy(done);
    cudaStreamDestroy(back);
    cudaStreamDestroy(work);
    cudaFree(d);
    cudaFreeHost(h);
}
```
### Wrong
```cuda
#include <cuda/std/span>
#include <iostream>
#include <print>
#include <span>

__global__ void absolute(cuda::std::span<int> v)
{
    std::size_t i {blockIdx.x * blockDim.x + threadIdx.x};
    if (i < v.size() && v[i] < 0) {
        v[i] = -v[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    int* h {nullptr};
    cudaMallocHost(&h, n * sizeof(int));
    std::span<int> hv {h, static_cast<std::size_t>(n)};
    for (int& x : hv) {
        std::cin >> x;
    }
    int* d {nullptr};
    cudaMalloc(&d, n * sizeof(int));
    cudaMemcpy(d, h, n * sizeof(int), cudaMemcpyHostToDevice);
    cudaStream_t work {};
    cudaStream_t back {};
    cudaStreamCreate(&work);
    cudaStreamCreate(&back);
    cudaEvent_t done {};
    cudaEventCreate(&done);
    cudaMemcpyAsync(h, d, n * sizeof(int),
                    cudaMemcpyDeviceToHost, back);
    cudaEventRecord(done, back);
    cudaStreamWaitEvent(work, done);
    absolute<<<(n + 255) / 256, 256, 0, work>>>({d, hv.size()});
    cudaDeviceSynchronize();
    for (int x : hv) {
        std::print("{} ", x);
    }
    std::println();
    cudaEventDestroy(done);
    cudaStreamDestroy(back);
    cudaStreamDestroy(work);
    cudaFree(d);
    cudaFreeHost(h);
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
5
-1 2 -3 4 -5
```
```in
3
0 0 -7
```
### Witness
```in
2
-6 6
```
