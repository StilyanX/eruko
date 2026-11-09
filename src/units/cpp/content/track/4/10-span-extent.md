# 4.10 A span and its fixed extent
Part: `std::span` and its fixed extent
Clause: [span.overview], [span.cons], [span.sub], [over.match.list]
After: none
Levels: c++20

## Example
```cpp
#include <array>
#include <print>
#include <span>
#include <vector>

//: Take exactly three values, the length fixed by the type.
double norm2(std::span<const double, 3> v)
{
    return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}

int main()
{
    //: Pass an array of three, which converts by itself.
    std::array<double, 3> p {1.0, 2.0, 2.0};
    std::println("{}", norm2(p));
    //: Name the fixed span to take three values from a vector.
    std::vector<double> q {3.0, 4.0, 0.0};
    std::println("{}", norm2(std::span<const double, 3> {q}));
    //: Take the last two as a span whose type fixes two.
    std::span<const double, 3> all {p};
    std::span<const double, 2> tail {all.last<2>()};
    std::println("{} {}", tail[0], tail.extent);
}
```

## Verdict 1
```cpp
#include <array>
#include <span>

int sum(std::span<const int, 3> s)
{
    return s[0] + s[1] + s[2];
}

int main()
{
    std::array<int, 4> a {1, 2, 3, 4};
    return sum(a) - 6;
}
```
Answer: c++20..c++23 ill-formed 12

## Verdict 2
```cpp
#include <span>
#include <vector>

int first(std::span<const int, 3> s)
{
    return s[0];
}

int main()
{
    std::vector<int> v {7, 8, 9};
    std::span<const int, 3> s {v};
    return first(s) + first(v) - 14;
}
```
Answer: c++20..c++23 ill-formed 13

## Alone 1
Form: probes
Write a function `dot3(a, b)` that takes two spans of exactly three const doubles each and returns their dot product, so that a call with a sequence of another fixed length is rejected.
Input: none.
Output: none.
Limits: the values are finite doubles.
### Probes
```cpp
std::array<double, 3> u {1.0, 2.0, 3.0};
double d {dot3(u, u)};
double raw[3] {1.0, 0.0, 0.0};
double e {dot3(raw, u)};
std::array<double, 4> w {};
double f {dot3(w, w)};
```
Accept: 1, 2, 3, 4, 5
Reject: 6
### Reference
```cpp
#include <array>
#include <span>

double dot3(std::span<const double, 3> a,
            std::span<const double, 3> b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

int main()
{
}
```
### Wrong
```cpp
#include <array>
#include <span>

double dot3(std::span<const double> a,
            std::span<const double> b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

int main()
{
}
```
### Witness
```cpp
double two[2] {1.0, 2.0};
double g {dot3(two, two)};
```

## Alone 2
Form: probes
Write a function `head2(s)` that takes a span of ints and returns a span of its first two elements whose type fixes the length 2.
Input: none.
Output: none.
Limits: the span holds at least two elements.
### Probes
```cpp
std::array<int, 5> a {1, 2, 3, 4, 5};
auto h {head2(a)};
static_assert(decltype(h)::extent == 2);
std::span<int, 2> g {head2(a)};
std::span<int, 3> k {head2(a)};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <array>
#include <span>

std::span<int, 2> head2(std::span<int> s)
{
    return s.first<2>();
}

int main()
{
}
```
### Wrong
```cpp
#include <array>
#include <span>

std::span<int> head2(std::span<int> s)
{
    return s.first(2);
}

int main()
{
}
```
### Witness
```cpp
std::array<int, 6> b {};
std::span<int, 4> z {head2(b)};
```
