# 1.30 Constant evaluation
Part: constant evaluation
Clause: [expr.const], [dcl.constexpr], [dcl.static.assert]
After: none
Levels: c++23

## Example
```cpp
#include <print>

//: Write a function the compiler can run while it compiles.
constexpr int factorial(int n)
{
    int product {1};
    for (int i {2}; i <= n; ++i) {
        product *= i;
    }
    return product;
}

//: Write a function the compiler must run while it compiles.
consteval int square(int n)
{
    return n * n;
}

int main()
{
    //: Compute both values while the program compiles.
    constexpr int f5 {factorial(5)};
    constexpr int s9 {square(9)};
    //: Check the values while the program compiles.
    static_assert(f5 == 120);
    static_assert(s9 == 81);
    //: Call the constexpr function at run time too.
    int n {6};
    std::println("{} {} {}", f5, s9, factorial(n));
}
```

## Verdict 1
```cpp
constexpr int power(int base, int exponent)
{
    int result {1};
    for (int i {0}; i < exponent; ++i) {
        result *= base;
    }
    return result;
}

constexpr int big {power(10, 10)};

int main()
{
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <iostream>
#include <print>

consteval int square(int n)
{
    return n * n;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", square(n));
}
```
Answer: c++23 ill-formed 13

## Alone 1
Form: probes
Write a function `sum_to(n)` that returns 1 + 2 + … + n for an int n, which the compiler can run while it compiles.
Input: none.
Output: none.
Limits: 0 ≤ n ≤ 1000.
### Probes
```cpp
static_assert(sum_to(100) == 5050);
constexpr int ten {sum_to(4)};
static_assert(sum_to(0) == 0);
static_assert(sum_to(3) == 7);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
constexpr int sum_to(int n)
{
    int total {0};
    for (int i {1}; i <= n; ++i) {
        total += i;
    }
    return total;
}

int main()
{
}
```
### Wrong
```cpp
int sum_to(int n)
{
    int total {0};
    for (int i {1}; i <= n; ++i) {
        total += i;
    }
    return total;
}

int main()
{
}
```
### Witness
```cpp
static_assert(sum_to(10) == 55);
```

## Alone 2
Form: probes
Write a function `cube(n)` that returns n · n · n for an int n, which the compiler must run while it compiles, so that a call on a value known only at run time is rejected.
Input: none.
Output: none.
Limits: −1000 ≤ n ≤ 1000.
### Probes
```cpp
static_assert(cube(3) == 27);
constexpr int c {cube(-2)};
int read {2};
int d {cube(read)};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
consteval int cube(int n)
{
    return n * n * n;
}

int main()
{
}
```
### Wrong
```cpp
constexpr int cube(int n)
{
    return n * n * n;
}

int main()
{
}
```
### Witness
```cpp
int r {5};
int w {cube(r)};
```
