# 8.50 An explicit object parameter in a member the device calls
Part: an explicit object parameter in a type whose member the device calls
Clause: [dcl.fct], [over.match.funcs.general], [expr.prim.this], CUDA C++ Programming Guide: Function Execution Space Specifiers, CUDA C++ Programming Guide: C++ Language Support
After: 8.49
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Function Execution Space Specifiers

## Example
```cuda
#include <print>
#include <cuda/std/span>

struct Counter {
    int n {0};
    //: Mark the member __device__, since a kernel calls it.
    __device__ void bump(this Counter& self, int by)
    {
        //: Reach the members through self, the explicit object.
        self.n += by;
    }
};

__global__ void run(cuda::std::span<int> out)
{
    //: Call it as any member: c becomes self.
    Counter c {};
    c.bump(3);
    c.bump(4);
    out[0] = c.n;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
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

struct Counter {
    int n {0};
    void bump(this Counter& self, int by)
    {
        self.n += by;
    }
};

__global__ void run(cuda::std::span<int> out)
{
    Counter c {};
    c.bump(3);
    out[0] = c.n;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", h);
}
```
Answer: c++23 ill-formed 15

## Verdict 2
```cuda
#include <print>
#include <cuda/std/span>

struct Counter {
    int n {0};
    __device__ void bump(this Counter self, int by)
    {
        self.n += by;
    }
};

__global__ void run(cuda::std::span<int> out)
{
    Counter c {};
    c.bump(3);
    c.bump(4);
    out[0] = c.n;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    int h {0};
    cudaMemcpy(&h, d, sizeof(int), cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{}", h);
}
```
Answer: c++23 defined

## Alone 1
Form: flag
Write a program with a struct `Counter` that holds an int `n`, starting at 0, and a member function `bump` that takes its object as an explicit object parameter of type `Counter&`, then an int, and adds the int to n. A kernel makes a Counter, calls bump on it, and writes n to global memory.
Input: none.
Output: none.
Limits: nvcc at c++23 with no flag added.
Expect:
- c++23: accept
### Reference
```cuda
#include <cuda/std/span>

struct Counter {
    int n {0};
    __device__ void bump(this Counter& self, int by)
    {
        self.n += by;
    }
};

__global__ void run(cuda::std::span<int> out)
{
    Counter c {};
    c.bump(5);
    out[0] = c.n;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    cudaFree(d);
}
```
### Wrong
```cuda
#include <cuda/std/span>

struct Counter {
    int n {0};
    void bump(this Counter& self, int by)
    {
        self.n += by;
    }
};

__global__ void run(cuda::std::span<int> out)
{
    Counter c {};
    c.bump(5);
    out[0] = c.n;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    run<<<1, 1>>>({d, 1});
    cudaFree(d);
}
```
### Witness
```cuda
__global__ void again(cuda::std::span<int> out)
{
    Counter c {};
    c.bump(1);
    out[0] = c.n;
}
```

## Alone 2
Form: flag
Write a program with a struct template `Row<T>` that holds a `cuda::std::array<T, 4>` named `v` and one member function template `at(i)`. Its explicit object parameter is a forwarding reference, and it returns a reference to v[i], so it serves a const Row and a Row you write through. A kernel calls at on a const Row<int> and on a Row<int>.
Input: none.
Output: none.
Limits: nvcc at c++23 with no flag added.
Expect:
- c++23: accept
### Reference
```cuda
#include <cuda/std/array>
#include <cuda/std/span>

template <typename T>
struct Row {
    cuda::std::array<T, 4> v {};
    template <typename Self>
    __device__ auto& at(this Self&& self, int i)
    {
        return self.v[i];
    }
};

__global__ void pass(cuda::std::span<int> out)
{
    const Row<int> r {{1, 2, 3, 4}};
    Row<int> w {};
    w.at(1) = r.at(2);
    out[0] = w.at(1);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    pass<<<1, 1>>>({d, 1});
    cudaFree(d);
}
```
### Wrong
```cuda
#include <cuda/std/array>
#include <cuda/std/span>

template <typename T>
struct Row {
    cuda::std::array<T, 4> v {};
    template <typename Self>
    __device__ auto& at(this Self&& self, int i)
    {
        return v[i];
    }
};

__global__ void pass(cuda::std::span<int> out)
{
    const Row<int> r {{1, 2, 3, 4}};
    Row<int> w {};
    w.at(1) = r.at(2);
    out[0] = w.at(1);
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, sizeof(int));
    pass<<<1, 1>>>({d, 1});
    cudaFree(d);
}
```
### Witness
```cuda
__global__ void again(cuda::std::span<int> out)
{
    const Row<int> r {};
    out[0] = r.at(0);
}
```
