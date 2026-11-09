# 7.27 ES.46: drop a fraction only through a named cast
Part: ES.46 Avoid lossy (narrowing, truncating) arithmetic conversions
Clause: C++ Core Guidelines ES.46, [conv.fpint], [conv.double], [expr.const]
After: 1.03, 1.04
Levels: c++11

## Scan
Rule: ES.46
Warning: -Wfloat-conversion, -Wconversion
### Bad
```cpp
void g()
{
    double d = 7.9;
    int i = d;
    i = (int) d;
}

void f(int x, long y, double d)
{
    char c1 = x;
    char c2 = y;
    char c3 = d;
}
```
### Good
```cpp
#include <utility>

namespace gsl {
template<class T, class U>
constexpr T narrow_cast(U&& u) noexcept
{
    return static_cast<T>(std::forward<U>(u));
}
}

void g()
{
    double d = 7.9;
    int i = 0;
    i = gsl::narrow_cast<int>(d);
}

void h()
{
    double d = -7.9;
    unsigned u = 0;
    u = gsl::narrow_cast<unsigned>(d);
}
```

## Example
```cpp
#include <print>

int main()
{
    //: Hold a value with a fraction part.
    double price {7.9};
    //: Say with a named cast that you want the fraction dropped.
    int whole {static_cast<int>(price)};
    std::println("{}", whole);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    double d {7.9};
    int i = d;
    std::printf("%d\n", i);
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

constexpr double d {-7.9};
constexpr unsigned u = d;

int main()
{
    std::printf("%u\n", u);
}
```
Answer: c++11..c++23 undefined constant

## Alone 1
Form: run
Write a program that reads a price and prints its whole part, the price with its fraction dropped.
Input: one line, the price as a decimal number.
Output: one line, one integer.
Limits: 0 ≤ price ≤ 1 000 000, with at most 2 digits after the point.
### Examples
```in
7.9
```
```out
7
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    double price {0};
    std::cin >> price;
    int whole {static_cast<int>(price)};
    std::println("{}", whole);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    double price {0};
    std::cin >> price;
    int whole = price;
    std::println("{}", whole);
}
```
### Tests
```in
0
```
```in
1000000
```
```in
0.99
```
```in
12.50
```
### Witness
```cpp
int whole()
{
    double d = 7.9;
    int i = static_cast<int>(d);
    return i;
}
```

## Alone 2
Form: run
Write a program that reads a decimal number x and prints one line of stars, as many as the whole part of x.
Input: one line, x.
Output: one line of stars; it is empty when the whole part is 0.
Limits: 0 ≤ x ≤ 50, with at most 2 digits after the point.
### Examples
```in
3.7
```
```out
***
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    double x {0};
    std::cin >> x;
    std::string row(static_cast<std::size_t>(x), '*');
    std::println("{}", row);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    double x {0};
    std::cin >> x;
    std::string row(x, '*');
    std::println("{}", row);
}
```
### Tests
```in
0.5
```
```in
50
```
```in
1
```
```in
9.99
```
### Witness
```cpp
char to_char(double d)
{
    char c3 = static_cast<char>(d);
    return c3;
}
```
