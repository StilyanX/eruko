# 9.39 The bytes per matrix in 18 reals and in 12 reals
Part: the bytes per matrix stored as 18 reals (nine complex numbers) and as 12 reals (two rows)
Clause: [expr.sizeof], [complex.numbers.general], [dcl.align], [basic.align], [class.mem]
After: 9.38
Levels: c++23
Source: QUDA include/gauge_field_order.h (a link matrix stored whole, 18 reals, or as two rows, 12 reals)

## Example
```cpp
#include <complex>
#include <print>

//: Hold all nine complex numbers: 18 floats.
struct Full {
    std::complex<float> e[3][3] {};
};

//: Hold the first two rows only: 12 floats.
struct Rows {
    std::complex<float> e[2][3] {};
};

//: Align a matrix to 16 bytes, so four floats load at once.
struct alignas(16) Packed {
    float e[18] {};
};

int main()
{
    //: Print the bytes of each form; 18 floats pad up to 80.
    std::println("{} {}", sizeof(Full), sizeof(Rows));
    std::println("{}", sizeof(Packed));
}
```

## Verdict 1
```cpp
#include <complex>

struct Rows {
    std::complex<float> e[2][3] {};
};

int main()
{
    static_assert(sizeof(Rows) == 48);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
struct alignas(16) Full {
    float e[18] {};
};

int main()
{
    static_assert(sizeof(Full) == 72);
}
```
Answer: c++23 ill-formed 7

## Alone 1
Form: run
Write a program that reads b and n, and prints the bytes that n matrices of 3 by 3 complex numbers take in two forms. In the first form a matrix keeps all 18 reals. In the second it keeps 12 reals, its first two rows. Each matrix sits in its own struct, declared alignas(16), that holds its reals in an array of the real type. The n structs of a form sit in one array.
Input: one line, b and n; b is the bytes of one real: 2 for std::float16_t, 4 for float, 8 for double.
Output: one line: the bytes of the n matrices in the 18-real form, then in the 12-real form, separated by a space.
Limits: b is 2, 4 or 8; 1 ≤ n ≤ 1000000.
### Examples
```in
8 1
```
```out
144 96
```
```in
8 10
```
```out
1440 960
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <stdfloat>

template <typename T>
struct alignas(16) Full {
    T e[18] {};
};

template <typename T>
struct alignas(16) Rows {
    T e[12] {};
};

template <typename T>
void report(long long n)
{
    long long full {static_cast<long long>(sizeof(Full<T>))};
    long long rows {static_cast<long long>(sizeof(Rows<T>))};
    std::println("{} {}", n * full, n * rows);
}

int main()
{
    int b {0};
    long long n {0};
    std::cin >> b >> n;
    switch (b) {
    case 2:
        report<std::float16_t>(n);
        break;
    case 4:
        report<float>(n);
        break;
    default:
        report<double>(n);
        break;
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <stdfloat>

template <typename T>
struct Full {
    T e[18] {};
};

template <typename T>
struct alignas(16) Rows {
    T e[12] {};
};

template <typename T>
void report(long long n)
{
    long long full {static_cast<long long>(sizeof(Full<T>))};
    long long rows {static_cast<long long>(sizeof(Rows<T>))};
    std::println("{} {}", n * full, n * rows);
}

int main()
{
    int b {0};
    long long n {0};
    std::cin >> b >> n;
    switch (b) {
    case 2:
        report<std::float16_t>(n);
        break;
    case 4:
        report<float>(n);
        break;
    default:
        report<double>(n);
        break;
    }
}
```
### Tests
```in
2 1
```
```in
4 1
```
```in
4 1000000
```
```in
2 1000000
```
```in
8 1000000
```
### Witness
```in
4 1
```

## Alone 2
Form: run
Write a program that reads b, g and m, and prints how many whole matrices of 3 by 3 complex numbers fit in m bytes, in two forms. In the first form a matrix keeps all 18 reals; in the second it keeps 12 reals, its first two rows. The matrices lie one after another, and each is padded with unused reals up to a whole number of groups of g reals, so that every group can be loaded at once.
Input: one line, b, g and m; b is the bytes of one real.
Output: one line: the count of matrices in the 18-real form, then in the 12-real form, separated by a space.
Limits: b is 2, 4 or 8; g is 1, 2 or 4; 1 ≤ m ≤ 10^12.
### Examples
```in
4 2 1000
```
```out
13 20
```
```in
2 1 72
```
```out
2 3
```
### Reference
```cpp
#include <iostream>
#include <print>

long long padded(long long reals, long long g)
{
    return (reals + g - 1) / g * g;
}

int main()
{
    long long b {0};
    long long g {0};
    long long m {0};
    std::cin >> b >> g >> m;
    long long full {padded(18, g) * b};
    long long rows {padded(12, g) * b};
    std::println("{} {}", m / full, m / rows);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

long long padded(long long reals, long long g)
{
    return reals / g * g;
}

int main()
{
    long long b {0};
    long long g {0};
    long long m {0};
    std::cin >> b >> g >> m;
    long long full {padded(18, g) * b};
    long long rows {padded(12, g) * b};
    std::println("{} {}", m / full, m / rows);
}
```
### Tests
```in
8 4 1
```
```in
4 4 1000
```
```in
2 4 1000000000000
```
```in
8 2 144
```
```in
8 1 1000000000000
```
### Witness
```in
4 4 1000
```
