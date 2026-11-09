# 8.24 The size of a kernel's argument struct against the limit
Part: the size of a kernel's argument struct against the limit the guide gives
Clause: CUDA C++ Programming Guide: Function Parameters (__global__ function parameters, 32764 bytes for compute capability 7.0 and higher), [expr.sizeof], [class.mem], [basic.align]
After: 8.01
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Function Parameters (the parameters of a `__global__` function, passed in constant memory, are limited to 32764 bytes from Volta on; padding counts)

## Example
```cuda
#include <cstdio>
#include <print>

//: Hold a char, then doubles: 7 bytes of padding follow the char.
struct Args {
    char tag;
    double v[4094];
};

//: Take the struct by value: its bytes count against the limit.
__global__ void first(Args a)
{
    printf("%d %.1f\n", a.tag, a.v[0]);
}

int main()
{
    //: Compare the size with the 32764 bytes the guide allows.
    std::println("{} {}", sizeof(Args), sizeof(Args) <= 32764);
    //: Launch with the struct: one more double would not compile.
    Args a {};
    a.tag = 1;
    a.v[0] = 2.5;
    first<<<1, 1>>>(a);
    cudaDeviceSynchronize();
}
```

## Verdict 1
```cuda
#include <cstdio>

struct Args {
    char tag;
    double v[4094];
};

static_assert(sizeof(Args) <= 32764);

__global__ void first(Args a)
{
    printf("%d\n", a.tag);
}

int main()
{
    Args a {};
    first<<<1, 1>>>(a);
    cudaDeviceSynchronize();
}
```
Answer: c++23 defined

## Verdict 2
```cuda
#include <cstdio>

struct Args {
    char tag;
    double v[4095];
};

static_assert(sizeof(Args) <= 32764);

__global__ void first(Args a)
{
    printf("%d\n", a.tag);
}

int main()
{
    Args a {};
    first<<<1, 1>>>(a);
    cudaDeviceSynchronize();
}
```
Answer: c++23 ill-formed 8

## Alone 1
Form: flag
Expect:
- c++23: accept
Write a struct `Table` that holds an array `v` of ints, and a kernel `pick(cuda::std::span<int> out, Table t)`.
In `pick`, the thread with index i below out.size() writes t.v[i] to out[i].
Give v the most elements for which the kernel still compiles, when a kernel may take 32764 bytes of parameters.
The program needs no `main`.
Input: none.
Output: none.
Limits: nvcc at c++23, for this machine's device (compute capability 8.9).
### Reference
```cuda
#include <cuda/std/span>

struct Table {
    int v[8187];
};

__global__ void pick(cuda::std::span<int> out, Table t)
{
    std::size_t i {threadIdx.x};
    if (i < out.size()) {
        out[i] = t.v[i];
    }
}
```
### Wrong
```cuda
#include <cuda/std/span>

struct Table {
    int v[8191];
};

__global__ void pick(cuda::std::span<int> out, Table t)
{
    std::size_t i {threadIdx.x};
    if (i < out.size()) {
        out[i] = t.v[i];
    }
}
```
### Witness
```cuda
static_assert(sizeof(Table) == 32748);
```

## Alone 2
Form: flag
Expect:
- c++23: accept
Write a struct `Args` that holds a char `tag` and, after it, an array `v` of doubles, and a kernel `run(Args a)`.
In `run`, thread 0 prints a.v[0] with `printf` when a.tag is 1.
Give v the most elements for which the kernel still compiles, when a kernel may take 32764 bytes of parameters.
The program needs no `main`.
Input: none.
Output: none.
Limits: nvcc at c++23, for this machine's device (compute capability 8.9).
### Reference
```cuda
#include <cstdio>

struct Args {
    char tag;
    double v[4094];
};

__global__ void run(Args a)
{
    if (a.tag == 1 && threadIdx.x == 0) {
        printf("%f\n", a.v[0]);
    }
}
```
### Wrong
```cuda
#include <cstdio>

struct Args {
    char tag;
    double v[4095];
};

__global__ void run(Args a)
{
    if (a.tag == 1 && threadIdx.x == 0) {
        printf("%f\n", a.v[0]);
    }
}
```
### Witness
```cuda
static_assert(sizeof(Args) <= 32764);
```
