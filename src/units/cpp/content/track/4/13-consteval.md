# 4.13 Functions only the compiler may call
Part: `consteval` functions
Clause: [dcl.constexpr], [expr.const], [expr.prim.lambda.closure], [diff.cpp17.lex]
After: none
Levels: c++17

## Example
```cpp
#include <array>
#include <print>

//: Build a table of squares that only the compiler may build.
consteval std::array<int, 8> squares()
{
    std::array<int, 8> t {};
    for (int i {0}; i < 8; ++i) {
        t[i] = i * i;
    }
    return t;
}

//: Call a consteval function from another, on its parameter.
consteval int twice_square(int n)
{
    return 2 * squares()[n];
}

int main()
{
    //: Keep the table the compiler built, and read it at run time.
    constexpr std::array<int, 8> table {squares()};
    std::println("{} {}", table[5], twice_square(3));
    //: Mark a lambda consteval so that it too runs only then.
    auto cube = [](int n) consteval {
        return n * n * n;
    };
    constexpr int c {cube(3)};
    std::println("{}", c);
}
```

## Verdict 1
```cpp
consteval int twice(int n)
{
    return 2 * n;
}

constexpr int four_times(int n)
{
    return twice(twice(n));
}

int main()
{
    return four_times(1) - 4;
}
```
Answer:
- c++17: ill-formed 1, 8
- c++20..c++23: ill-formed 8

## Verdict 2
```cpp
consteval int twice(int n)
{
    return 2 * n;
}

int main()
{
    int (*f)(int) {twice};
    return f(2) - 4;
}
```
Answer:
- c++17: ill-formed 1, 8
- c++20..c++23: ill-formed 8

## Alone 1
Form: probes
Write a function `checked_index(i, n)` that returns i when 0 ≤ i < n, and that the compiler must run while it compiles, so that an index outside the range is rejected while compiling.
Input: none.
Output: none.
Limits: 1 ≤ n ≤ 1000.
### Probes
```cpp
constexpr int a {checked_index(2, 4)};
static_assert(a == 2);
int b {checked_index(0, 1)};
int c {checked_index(4, 4)};
int d {checked_index(-1, 4)};
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
consteval int checked_index(int i, int n)
{
    if (i < 0 || i >= n) {
        throw i;
    }
    return i;
}

int main()
{
}
```
### Wrong
```cpp
constexpr int checked_index(int i, int n)
{
    if (i < 0 || i >= n) {
        throw i;
    }
    return i;
}

int main()
{
}
```
### Witness
```cpp
int e {checked_index(7, 3)};
```

## Alone 2
Form: probes
Write a function `ten(n)` that returns 10 · n and that the compiler must run while it compiles, and a function `hundred(n)` that returns ten(ten(n)), for any n known while compiling.
Input: none.
Output: none.
Limits: −1000 ≤ n ≤ 1000.
### Probes
```cpp
static_assert(ten(4) == 40);
static_assert(hundred(3) == 300);
constexpr int h {hundred(-2)};
int r {4};
int s {hundred(r)};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
consteval int ten(int n)
{
    return 10 * n;
}

consteval int hundred(int n)
{
    return ten(ten(n));
}

int main()
{
}
```
### Wrong
```cpp
consteval int ten(int n)
{
    return 10 * n;
}

constexpr int hundred(int n)
{
    return ten(ten(n));
}

int main()
{
}
```
### Witness
```cpp
static_assert(hundred(1) == 100);
```
