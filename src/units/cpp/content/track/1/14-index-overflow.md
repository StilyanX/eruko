# 1.14 Signed overflow in an index product
Part: signed overflow in an index product
Clause: [expr.pre], [expr.arith.conv], [expr.mul], [basic.fundamental], [expr.const]
After: 1.13
Levels: c++23

## Example
```cpp
#include <cstdint>
#include <print>

int main()
{
    //: Keep the shape of a 3-D grid and a point in it as int.
    int ny {70000};
    int nz {70000};
    int i {3};
    int j {69999};
    int k {5};
    //: Make the first factor 64-bit, so every step is 64-bit.
    std::int64_t at {(std::int64_t {i} * ny + j) * nz + k};
    //: Print the place of the point in the flat array.
    std::println("{}", at);
}
```

## Verdict 1
```cpp
#include <cstdint>
#include <print>

int main()
{
    volatile int row {40000};
    int width {60000};
    std::int64_t column {7};
    std::int64_t at = row * width + column;
    std::println("{}", at);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    unsigned row {70000};
    unsigned width {70000};
    unsigned column {0};
    std::println("{}", row * width + column);
}
```
Answer: c++23 defined

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads the sizes ny and nz of a 3-D grid and a point i, j, k and prints (i × ny + j) × nz + k, the place of the point in the flat array.
Input: one line, five integers ny, nz, i, j and k.
Output: one line, the place of the point.
Limits: 1 ≤ ny, nz ≤ 100000; 0 ≤ i < 100000; 0 ≤ j < ny; 0 ≤ k < nz.
### Examples
```in
4 5 1 2 3
```
```out
33
```
### Reference
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int ny {0};
    int nz {0};
    int i {0};
    int j {0};
    int k {0};
    std::cin >> ny >> nz >> i >> j >> k;
    std::int64_t at {(std::int64_t {i} * ny + j) * nz + k};
    std::println("{}", at);
}
```
### Wrong
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int ny {0};
    int nz {0};
    int i {0};
    int j {0};
    int k {0};
    std::cin >> ny >> nz >> i >> j >> k;
    std::int64_t at {(i * ny + j) * std::int64_t {nz} + k};
    std::println("{}", at);
}
```
### Tests
```in
100000 100000 99999 99999 99999
```
```in
70000 2 40000 0 1
```
```in
50000 50000 50000 0 0
```
### Witness
```in
65536 1 32768 0 0
```

## Alone 2
Form: probes
Write a function `constexpr std::int64_t offset(int r1, int c1, int r2, int c2, int width)` that returns how far the cell (r2, c2) lies after the cell (r1, c1) in a flat array of rows that are width long, in a program whose `main` does nothing.
Input: none.
Output: none.
Limits: 0 ≤ r1, r2 ≤ 100000; 0 ≤ c1, c2 < width ≤ 100000.
### Probes
```cpp
static_assert(offset(0, 0, 60000, 0, 60000) == 3600000000);
static_assert(offset(60000, 5, 0, 0, 60000) == -3600000005);
constexpr int fits {offset(0, 0, 60000, 0, 60000)};
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <cstdint>

constexpr std::int64_t offset(int r1, int c1, int r2, int c2,
                              int width)
{
    return std::int64_t {r2 - r1} * width + (c2 - c1);
}

int main()
{
}
```
### Wrong
```cpp
#include <cstdint>

constexpr std::int64_t offset(int r1, int c1, int r2, int c2,
                              int width)
{
    return std::int64_t {(r2 - r1) * width} + (c2 - c1);
}

int main()
{
}
```
### Witness
```cpp
static_assert(offset(1, 0, 50000, 0, 50000) == 2499950000);
```
