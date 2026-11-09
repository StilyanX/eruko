# 8.21 The loads of global memory in a kernel's machine code
Part: the machine instructions that load from global memory in a kernel, counted by `cuobjdump`, and the width of each
Clause: CUDA C++ Programming Guide: Device Memory Accesses, CUDA C++ Programming Guide: Read-Only Data Cache Load Function, CUDA Binary Utilities: cuobjdump, [basic.align], [dcl.align]
After: 8.20
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory Accesses (one instruction reads 1, 2, 4, 8 or 16 bytes when the type has that size and alignment); CUDA Binary Utilities, cuobjdump -sass; the counts are read on this machine, the pin

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Keep two floats with the alignment of one float.
struct Loose {
    float x;
    float y;
};

//: Keep two floats aligned to 8 bytes, the size of both.
struct alignas(8) Tight {
    float x;
    float y;
};

//: Copy a Loose: cuobjdump lists two LDG.E loads, 4 bytes each.
__global__ void loose(cuda::std::span<const Loose> a,
                      cuda::std::span<Loose> b)
{
    std::size_t i {threadIdx.x};
    b[i] = a[i];
}

//: Copy a Tight: cuobjdump lists one LDG.E.64 load, 8 bytes.
__global__ void tight(cuda::std::span<const Tight> a,
                      cuda::std::span<Tight> b)
{
    std::size_t i {threadIdx.x};
    b[i] = a[i];
}

int main()
{
    //: Print the size and the alignment that choose the width.
    std::println("{} {}", sizeof(Loose), alignof(Loose));
    std::println("{} {}", sizeof(Tight), alignof(Tight));
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

struct Pair {
    float x;
    float y;
};

__global__ void read(cuda::std::span<const Pair> a,
                     cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    Pair p {__ldg(&a[i])};
    out[i] = p.x + p.y;
}

int main()
{
    std::println("built");
}
```
Answer: c++23 ill-formed 13

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void read(cuda::std::span<const float2> a,
                     cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    float2 p {__ldg(&a[i])};
    out[i] = p.x + p.y;
}

int main()
{
    float2* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 32 * sizeof(float2));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(a, 0, 32 * sizeof(float2));
    read<<<1, 32>>>({a, 32}, {out, 32});
    float first {1.0f};
    cudaMemcpy(&first, out, sizeof(float),
               cudaMemcpyDeviceToHost);
    std::println("{}", first);
    cudaFree(out);
    cudaFree(a);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Result: sass ^LDG\.E\.64$
Write a program with a kernel `copy` that copies an array of 32 points from a to b, one point per thread.
A point is a struct of two floats, x and y.
The kernel loads each point with one load of 8 bytes.
The program fills a with zeros, runs `copy` once with 32 threads, and prints nothing.
The result is how many instructions named LDG.E.64 `cuobjdump -sass` lists for the program.
Input: none.
Output: nothing.
Limits: none.
### Examples
```in

```
### Reference
```cuda
#include <cuda/std/span>

struct alignas(8) Point {
    float x;
    float y;
};

__global__ void copy(cuda::std::span<const Point> a,
                     cuda::std::span<Point> b)
{
    std::size_t i {threadIdx.x};
    b[i] = a[i];
}

int main()
{
    Point* a {nullptr};
    Point* b {nullptr};
    cudaMalloc(&a, 32 * sizeof(Point));
    cudaMalloc(&b, 32 * sizeof(Point));
    cudaMemset(a, 0, 32 * sizeof(Point));
    copy<<<1, 32>>>({a, 32}, {b, 32});
    cudaDeviceSynchronize();
    cudaFree(b);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>

struct Point {
    float x;
    float y;
};

__global__ void copy(cuda::std::span<const Point> a,
                     cuda::std::span<Point> b)
{
    std::size_t i {threadIdx.x};
    b[i] = a[i];
}

int main()
{
    Point* a {nullptr};
    Point* b {nullptr};
    cudaMalloc(&a, 32 * sizeof(Point));
    cudaMalloc(&b, 32 * sizeof(Point));
    cudaMemset(a, 0, 32 * sizeof(Point));
    copy<<<1, 32>>>({a, 32}, {b, 32});
    cudaDeviceSynchronize();
    cudaFree(b);
    cudaFree(a);
}
```
### Tests
```in

```
### Witness
```in

```

## Alone 2
Form: run
Result: sass ^LDG
Write a program with a kernel `twice` over two float arrays a and out in global memory, where a holds n values and out holds 2n.
Each thread i below n sets out[i] to a[i], and then out[n + i] to 2 · a[i].
The kernel's machine code holds one load from global memory.
The program runs `twice` once on 32 zeros, with 32 threads, and prints nothing.
The result is how many instructions whose name starts with LDG `cuobjdump -sass` lists for the program.
Input: none.
Output: nothing.
Limits: none.
### Examples
```in

```
### Reference
```cuda
#include <cuda/std/span>

__global__ void twice(cuda::std::span<const float> a,
                      cuda::std::span<float> out)
{
    std::size_t n {a.size()};
    std::size_t i {threadIdx.x};
    if (i < n) {
        float v {a[i]};
        out[i] = v;
        out[n + i] = 2.0f * v;
    }
}

int main()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 32 * sizeof(float));
    cudaMalloc(&out, 64 * sizeof(float));
    cudaMemset(a, 0, 32 * sizeof(float));
    twice<<<1, 32>>>({a, 32}, {out, 64});
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>

__global__ void twice(cuda::std::span<const float> a,
                      cuda::std::span<float> out)
{
    std::size_t n {a.size()};
    std::size_t i {threadIdx.x};
    if (i < n) {
        out[i] = a[i];
        out[n + i] = 2.0f * a[i];
    }
}

int main()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 32 * sizeof(float));
    cudaMalloc(&out, 64 * sizeof(float));
    cudaMemset(a, 0, 32 * sizeof(float));
    twice<<<1, 32>>>({a, 32}, {out, 64});
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(a);
}
```
### Tests
```in

```
### Witness
```in

```
