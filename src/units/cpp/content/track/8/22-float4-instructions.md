# 8.22 One float4 load against four float loads
Part: one `float4` load against four `float` loads: the instructions each leaves
Clause: CUDA C++ Programming Guide: Device Memory Accesses, CUDA C++ Programming Guide: Built-in Vector Types, CUDA Binary Utilities: cuobjdump, [basic.align], [dcl.align]
After: 8.21
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Device Memory Accesses (one instruction reads or writes 16 bytes when the type has that size and alignment) and Built-in Vector Types (`float4` is aligned to 16 bytes); CUDA Binary Utilities, cuobjdump -sass; the counts are read on this machine, the pin

## Example
```cuda
#include <cuda/std/span>
#include <print>

//: Add four floats read one by one: cuobjdump lists four LDG.E.
__global__ void four(cuda::std::span<const float> a,
                     cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    out[i] = a[4 * i] + a[4 * i + 1]
             + a[4 * i + 2] + a[4 * i + 3];
}

//: Add the same four as one float4: one LDG.E.128 reads them.
__global__ void one(cuda::std::span<const float4> a,
                    cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    float4 v {a[i]};
    out[i] = v.x + v.y + v.z + v.w;
}

int main()
{
    //: Print the size and alignment that allow one load.
    std::println("{} {}", sizeof(float4), alignof(float4));
}
```

## Verdict 1
```cuda
static_assert(sizeof(float4) == 16);
static_assert(alignof(float4) == 16);

int main()
{
}
```
Answer: c++23 defined

## Verdict 2
```cuda
struct Four {
    float x;
    float y;
    float z;
    float w;
};

static_assert(sizeof(Four) == 16);
static_assert(alignof(Four) == 16);

int main()
{
}
```
Answer: c++23 ill-formed 9

## Alone 1
Form: run
Result: sass ^LDG\.E\.128$
Write a program with a kernel `sum4` over a float array a of 4n values and a float array out of n values.
The thread with index i below n sets out[i] to a[4i] + a[4i + 1] + a[4i + 2] + a[4i + 3].
The kernel reads the four values of a thread with one load of 16 bytes.
The program runs `sum4` once with n = 32 on zeros, with 32 threads, and prints nothing.
The result is how many instructions named LDG.E.128 `cuobjdump -sass` lists for the program.
Input: none.
Output: nothing.
Limits: none.
### Examples
```in

```
### Reference
```cuda
#include <cuda/std/span>

__global__ void sum4(cuda::std::span<const float4> a,
                     cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    if (i < out.size()) {
        float4 v {a[i]};
        out[i] = v.x + v.y + v.z + v.w;
    }
}

int main()
{
    float4* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 32 * sizeof(float4));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(a, 0, 32 * sizeof(float4));
    sum4<<<1, 32>>>({a, 32}, {out, 32});
    cudaDeviceSynchronize();
    cudaFree(out);
    cudaFree(a);
}
```
### Wrong
```cuda
#include <cuda/std/span>

__global__ void sum4(cuda::std::span<const float> a,
                     cuda::std::span<float> out)
{
    std::size_t i {threadIdx.x};
    if (i < out.size()) {
        out[i] = a[4 * i] + a[4 * i + 1]
                 + a[4 * i + 2] + a[4 * i + 3];
    }
}

int main()
{
    float* a {nullptr};
    float* out {nullptr};
    cudaMalloc(&a, 128 * sizeof(float));
    cudaMalloc(&out, 32 * sizeof(float));
    cudaMemset(a, 0, 128 * sizeof(float));
    sum4<<<1, 32>>>({a, 128}, {out, 32});
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

## Alone 2
Form: run
Result: sass ^STG
Write a program with a struct `Quad` of four floats x, y, z and w, and a kernel `scale` over an array of Quads in global memory.
The thread with index i below the array's size doubles each member of the i-th Quad.
The kernel writes each Quad with one store of 16 bytes.
The program runs `scale` once on 32 Quads of zeros, with 32 threads, and prints nothing.
The result is how many instructions whose name starts with STG `cuobjdump -sass` lists for the program.
Input: none.
Output: nothing.
Limits: none.
### Examples
```in

```
### Reference
```cuda
#include <cuda/std/span>

struct alignas(16) Quad {
    float x;
    float y;
    float z;
    float w;
};

__global__ void scale(cuda::std::span<Quad> v)
{
    std::size_t i {threadIdx.x};
    if (i < v.size()) {
        Quad q {v[i]};
        v[i] = Quad {2.0f * q.x, 2.0f * q.y,
                     2.0f * q.z, 2.0f * q.w};
    }
}

int main()
{
    Quad* v {nullptr};
    cudaMalloc(&v, 32 * sizeof(Quad));
    cudaMemset(v, 0, 32 * sizeof(Quad));
    scale<<<1, 32>>>({v, 32});
    cudaDeviceSynchronize();
    cudaFree(v);
}
```
### Wrong
```cuda
#include <cuda/std/span>

struct Quad {
    float x;
    float y;
    float z;
    float w;
};

__global__ void scale(cuda::std::span<Quad> v)
{
    std::size_t i {threadIdx.x};
    if (i < v.size()) {
        Quad q {v[i]};
        v[i] = Quad {2.0f * q.x, 2.0f * q.y,
                     2.0f * q.z, 2.0f * q.w};
    }
}

int main()
{
    Quad* v {nullptr};
    cudaMalloc(&v, 32 * sizeof(Quad));
    cudaMemset(v, 0, 32 * sizeof(Quad));
    scale<<<1, 32>>>({v, 32});
    cudaDeviceSynchronize();
    cudaFree(v);
}
```
### Tests
```in

```
### Witness
```in

```
