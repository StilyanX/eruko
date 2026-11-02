# 1.03 Conversions between integer and floating types
Part: conversions between integer and floating types
Clause: [conv.fpint], [expr.static.cast], [expr.const]
After: none
Levels: c++23

## Example
```cpp
#include <print>

int main()
{
    //: Convert a double to int; the fraction is cut off.
    double price {7.9};
    int whole {static_cast<int>(price)};
    //: Cut a negative value toward zero too.
    double loss {-7.9};
    int lost {static_cast<int>(loss)};
    //: Convert an int to double; small values stay exact.
    int count {3};
    double share {static_cast<double>(count) / 2};
    //: Print the three results.
    std::println("{} {} {}", whole, lost, share);
}
```

## Verdict 1
```cpp
#include <print>

constexpr double change {-1.5};
constexpr unsigned left {static_cast<unsigned>(change)};

int main()
{
    std::println("{}", left);
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <print>

int main()
{
    double change {-0.5};
    unsigned left {static_cast<unsigned>(change)};
    std::println("{}", left);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads a number x and prints x rounded to the nearest integer, with halves rounded up.
Input: one line, x, with at most 2 digits after the decimal point.
Output: one line, the rounded integer.
Limits: 0 ≤ x ≤ 1000.
### Examples
```in
2.25
```
```out
2
```
```in
14
```
```out
14
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    double x {0.0};
    std::cin >> x;
    std::println("{}", static_cast<int>(x + 0.5));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    double x {0.0};
    std::cin >> x;
    std::println("{}", static_cast<int>(x));
}
```
### Tests
```in
2.75
```
```in
0.5
```
```in
999.5
```
```in
7.49
```
```in
0
```
### Witness
```in
2.75
```

## Alone 2
Form: run
Write a program that reads a number x and prints the largest integer that is not greater than x.
Input: one line, x, with at most 2 digits after the decimal point.
Output: one line, that integer.
Limits: -1000 ≤ x ≤ 1000.
### Examples
```in
3.7
```
```out
3
```
```in
5
```
```out
5
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double x {0.0};
    std::cin >> x;
    std::println("{}", static_cast<int>(std::floor(x)));
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double x {0.0};
    std::cin >> x;
    std::println("{}", static_cast<int>(x));
}
```
### Tests
```in
-3.7
```
```in
-0.5
```
```in
-2
```
```in
-999.99
```
```in
1000
```
### Witness
```in
-3.7
```
