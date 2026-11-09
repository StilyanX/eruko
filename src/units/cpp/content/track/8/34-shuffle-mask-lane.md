# 8.34 A shuffle whose mask names a lane that does not call it
Part: a warp shuffle whose mask names a lane that does not take part
Clause: CUDA C++ Programming Guide: Warp Shuffle Functions, CUDA C++ Programming Guide: Warp Vote Functions, CUDA C++ Programming Guide: Independent Thread Scheduling
After: 8.03
Levels: c++23
Device: yes
Source: CUDA C++ Programming Guide, Warp Shuffle Functions (each calling thread has its own bit set in the mask, and every thread the mask names that has not exited calls the same intrinsic with the same mask, or the result is undefined)

## Example
```cuda
#include <cuda/std/span>
#include <print>

__global__ void swap(cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    int v {static_cast<int>(lane)};
    //: Name in the mask exactly the lanes that will call.
    unsigned mask {__ballot_sync(0xffffffffu, lane < 16)};
    //: Only those lanes swap with their neighbour.
    if (lane < 16) {
        v = __shfl_xor_sync(mask, v, 1);
    }
    out[lane] = v;
}

int main()
{
    //: Run one warp and print lanes 0 and 20.
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    swap<<<1, 32>>>({d, 32});
    int got[32] {};
    cudaMemcpy(got, d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", got[0], got[20]);
}
```

## Verdict 1
```cuda
#include <cuda/std/span>
#include <print>

__global__ void swap(cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    int v {static_cast<int>(lane)};
    if (lane < 16) {
        v = __shfl_xor_sync(0xffffffffu, v, 1);
    }
    out[lane] = v;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    swap<<<1, 32>>>({d, 32});
    int got[32] {};
    cudaMemcpy(got, d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", got[0], got[20]);
}
```
Answer: c++23 undefined stored
Derivation 1: The mask 0xffffffff names lanes 16 to 31, which have not exited and do not call __shfl_xor_sync; the guide requires every non-exited thread the mask names to call the same intrinsic with the same mask, or the result is undefined.
Derivation 2: A lane whose bit is set must reach the call so the named lanes converge before it runs; lanes 16 to 31 take the other path and stay alive, so the call's condition fails and the guide gives the values no meaning: undefined.

## Verdict 2
```cuda
#include <cuda/std/span>
#include <print>

__global__ void swap(cuda::std::span<int> out)
{
    unsigned lane {threadIdx.x};
    int v {static_cast<int>(lane)};
    if (lane < 16) {
        v = __shfl_xor_sync(0x0000ffffu, v, 1);
    }
    out[lane] = v;
}

int main()
{
    int* d {nullptr};
    cudaMalloc(&d, 32 * sizeof(int));
    swap<<<1, 32>>>({d, 32});
    int got[32] {};
    cudaMemcpy(got, d, 32 * sizeof(int),
               cudaMemcpyDeviceToHost);
    cudaFree(d);
    std::println("{} {}", got[0], got[20]);
}
```
Answer: c++23 defined
Sanitizer: memcheck

## Alone 1
Form: run
Write a program that reads the mask of one `__shfl_sync` call in a warp of 32 lanes and the path each lane takes, and prints whether the mask is one the call may take.
Each lane's path is one letter: `c` if it calls the shuffle, `e` if it has exited before it, `n` if it is still running and does not call it.
Print `yes` if every calling lane has its own bit set and every lane the mask names that has not exited calls it; else print `no`.
Input: one line, the mask as 8 hexadecimal digits; then one line, 32 letters, lane 0 first.
Output: one line, `yes` or `no`.
Limits: each letter is `c`, `e` or `n`.
### Examples
```in
ffffffff
cccccccccccccccccccccccccccccccc
```
```out
yes
```
```in
ffffffff
ccccccccccccccccnnnnnnnnnnnnnnnn
```
```out
no
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    unsigned mask {0};
    std::string path {};
    std::cin >> std::hex >> mask >> path;
    bool ok {true};
    for (unsigned lane {0}; lane < 32; ++lane) {
        bool named {((mask >> lane) & 1u) != 0};
        char p {path[lane]};
        if (p == 'c' && !named) {
            ok = false;
        }
        if (named && p == 'n') {
            ok = false;
        }
    }
    std::println("{}", ok ? "yes" : "no");
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    unsigned mask {0};
    std::string path {};
    std::cin >> std::hex >> mask >> path;
    bool ok {true};
    for (unsigned lane {0}; lane < 32; ++lane) {
        bool named {((mask >> lane) & 1u) != 0};
        char p {path[lane]};
        if (p == 'c' && !named) {
            ok = false;
        }
        if (named && p != 'c') {
            ok = false;
        }
    }
    std::println("{}", ok ? "yes" : "no");
}
```
### Tests
```in
0000ffff
ccccccccccccccccnnnnnnnnnnnnnnnn
```
```in
0000fffe
ccccccccccccccccnnnnnnnnnnnnnnnn
```
```in
00000003
cceeeeeeeeeeeeeeeeeeeeeeeeeeeeee
```
```in
55555555
cncncncncncncncncncncncncncncncn
```
```in
55555555
cecececececececececececececececn
```
```in
00000000
nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
```
### Witness
```in
ffffffff
cccccccccccccccceeeeeeeeeeeeeeee
```

## Alone 2
Form: run
Write a program that reads the path each lane of a warp of 32 lanes takes at one `__shfl_sync` call, and prints the widest mask the call may take.
Each lane's path is one letter: `c` if it calls the shuffle, `e` if it has exited before it, `n` if it is still running and does not call it.
The mask may name a lane only if the lane calls the shuffle or has exited, and it names every calling lane.
Input: one line, 32 letters, lane 0 first.
Output: one line, the mask as 8 hexadecimal digits in lower case.
Limits: each letter is `c`, `e` or `n`.
### Examples
```in
cccccccccccccccccccccccccccccccc
```
```out
ffffffff
```
```in
ccccccccccccccccnnnnnnnnnnnnnnnn
```
```out
0000ffff
```
### Reference
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string path {};
    std::cin >> path;
    unsigned mask {0};
    for (unsigned lane {0}; lane < 32; ++lane) {
        if (path[lane] != 'n') {
            mask |= 1u << lane;
        }
    }
    std::println("{:08x}", mask);
}
```
### Wrong
```cuda
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string path {};
    std::cin >> path;
    unsigned mask {0};
    for (unsigned lane {0}; lane < 32; ++lane) {
        if (path[lane] == 'c') {
            mask |= 1u << lane;
        }
    }
    std::println("{:08x}", mask);
}
```
### Tests
```in
nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
```
```in
cncncncncncncncncncncncncncncncn
```
```in
nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnc
```
```in
eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
```
```in
ccccnnnneeeeccccnnnneeeeccccnnnn
```
### Witness
```in
cccccccccccccccceeeeeeeeeeeeeeee
```
