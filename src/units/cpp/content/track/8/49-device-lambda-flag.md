# 8.49 A device lambda and the --extended-lambda flag
Part: a device lambda and the `--extended-lambda` flag
Clause: CUDA C++ Programming Guide: Extended Lambdas, CUDA C++ Programming Guide: Extended Lambda Restrictions, NVCC: --extended-lambda, [expr.prim.lambda]
After: 8.48
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Extended Lambdas; CUDA Compiler Driver NVCC, --extended-lambda

## Example
```cuda
#include <print>
#include <cuda/std/span>

//: Take the operation as a type, so one function runs any of them.
template <typename F>
__device__ void each(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

__global__ void scale(cuda::std::span<int> v, int k)
{
    //: Write the lambda inside the kernel: it is device code, unmarked.
    each(v, [k](int x) { return k * x; });
}

int main()
{
    //: Launch the kernel; a lambda written here would need a mark.
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    scale<<<1, 4>>>({d, 4}, 3);
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", h);
}
```

## Verdict 1
```cuda
#include <print>
#include <cuda/std/span>

template <typename F>
__global__ void apply(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    int k {3};
    apply<<<1, 4>>>({d, 4}, [k] __device__ (int x) {
        return x + k;
    });
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", h);
}
```
Answer: c++23 defined
Flags: --extended-lambda

## Verdict 2
```cuda
#include <print>
#include <cuda/std/span>

template <typename F>
__global__ void apply(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    int k {3};
    apply<<<1, 4>>>({d, 4}, [k](int x) {
        return x + k;
    });
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", h);
}
```
Answer: c++23 ill-formed 7, 16
Flags: --extended-lambda

## Alone 1
Form: flag
Flags: --extended-lambda
Write a program with a kernel template `apply(cuda::std::span<int> v, F f)` in which thread i sets v[i] to f(v[i]). Its main launches `apply` on 4 ints with a lambda written in main that captures an int k by copy and returns its argument plus k.
Input: none.
Output: none.
Limits: nvcc at c++23 with the flag --extended-lambda.
Expect:
- c++23: accept
### Reference
```cuda
#include <cuda/std/span>

template <typename F>
__global__ void apply(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    int k {5};
    apply<<<1, 4>>>({d, 4}, [k] __device__ (int x) {
        return x + k;
    });
    cudaFree(d);
}
```
### Wrong
```cuda
#include <cuda/std/span>

template <typename F>
__global__ void apply(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    int k {5};
    apply<<<1, 4>>>({d, 4}, [k](int x) {
        return x + k;
    });
    cudaFree(d);
}
```
### Witness
```cuda
void again(cuda::std::span<int> v)
{
    apply<<<1, 1>>>(v, [] __device__ (int x) { return 2 * x; });
}
```

## Alone 2
Form: flag
Write a program with a device function template `each(cuda::std::span<int> v, F f)` in which thread i sets v[i] to f(v[i]), and a kernel `scale(cuda::std::span<int> v, int k)` that calls `each` with a lambda written in the kernel that captures k by copy and returns k times its argument. Its main launches `scale` on 4 ints.
Input: none.
Output: none.
Limits: nvcc at c++23 with no flag added.
Expect:
- c++23: accept
### Reference
```cuda
#include <cuda/std/span>

template <typename F>
__device__ void each(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

__global__ void scale(cuda::std::span<int> v, int k)
{
    each(v, [k](int x) { return k * x; });
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    scale<<<1, 4>>>({d, 4}, 3);
    cudaFree(d);
}
```
### Wrong
```cuda
#include <cuda/std/span>

template <typename F>
__device__ void each(cuda::std::span<int> v, F f)
{
    v[threadIdx.x] = f(v[threadIdx.x]);
}

__global__ void scale(cuda::std::span<int> v, int k)
{
    each(v, [k] __device__ (int x) { return k * x; });
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 4 * sizeof(int));
    cudaMemset(d, 0, 4 * sizeof(int));
    scale<<<1, 4>>>({d, 4}, 3);
    cudaFree(d);
}
```
### Witness
```cuda
__global__ void more(cuda::std::span<int> v)
{
    each(v, [](int x) { return x + 1; });
}
```
