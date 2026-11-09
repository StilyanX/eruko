# 9.24 The unit roundoff of a floating-point type
Part: the unit roundoff of a floating-point type, read from `std::numeric_limits`
Clause: [numeric.limits.members], [basic.fundamental], [dcl.pre]
After: none
Levels: c++23
Source: Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §2.1 (the unit roundoff u, Theorem 2.2) and §3.1 (Lemma 3.1: γₙ = nu/(1 − nu), for nu < 1); IEEE 754-2019 §4.3

## Example
```cpp
#include <limits>
#include <print>

int main()
{
    //: Read the gap from 1 to the next float.
    float eps {std::numeric_limits<float>::epsilon()};
    //: Halve it to get the unit roundoff u.
    float u {eps / 2};
    //: Add u to 1, a tie that rounds to the even float 1.
    float tie {1.0f + u};
    //: Add twice u, which gives the next float exactly.
    float next {1.0f + 2 * u};
    //: Print u and both sums.
    std::println("{:a} {:a} {:a}", u, tie, next);
}
```

## Verdict 1
```cpp
#include <limits>

int main()
{
    constexpr float eps {std::numeric_limits<float>::epsilon()};
    constexpr float u {eps / 2};
    static_assert(1.0f + u == 1.0f);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <limits>

int main()
{
    constexpr float eps {std::numeric_limits<float>::epsilon()};
    constexpr float u {eps / 2};
    static_assert(1.0 + u == 1.0);
}
```
Answer: c++23 ill-formed 7

## Alone 1
Form: run
Write a program that reads a type name and a whole number k. It prints the type's unit roundoff u, read from std::numeric_limits, and says whether 1 + 2^−k rounds to 1 in that type.
Input: one line, the type name (float or double), then k.
Output: two lines: u as std::format prints it with {:a}, such as 1p-24; then yes if 1 + 2^−k rounds to 1, or no if it does not.
Limits: 1 ≤ k ≤ 60; every rounding is to nearest, ties to even.
### Examples
```in
float 30
```
```out
1p-24
yes
```
```in
double 10
```
```out
1p-53
no
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <limits>
#include <print>
#include <string>

template <typename T>
void report(int k)
{
    T u {std::numeric_limits<T>::epsilon() / 2};
    T step {std::ldexp(T {1}, -k)};
    std::println("{:a}", u);
    std::println("{}", step <= u ? "yes" : "no");
}

int main()
{
    std::string type {};
    int k {0};
    std::cin >> type >> k;
    if (type == "float") {
        report<float>(k);
    } else {
        report<double>(k);
    }
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <limits>
#include <print>
#include <string>

template <typename T>
void report(int k)
{
    T u {std::numeric_limits<T>::epsilon() / 2};
    T step {std::ldexp(T {1}, -k)};
    std::println("{:a}", u);
    std::println("{}", step < u ? "yes" : "no");
}

int main()
{
    std::string type {};
    int k {0};
    std::cin >> type >> k;
    if (type == "float") {
        report<float>(k);
    } else {
        report<double>(k);
    }
}
```
### Tests
```in
float 23
```
```in
double 53
```
```in
double 52
```
```in
float 1
```
```in
double 60
```
### Witness
```in
float 24
```

## Alone 2
Form: run
Write a program that reads a type name and a count n. It prints whether n × u < 1, where u is the type's unit roundoff, read from std::numeric_limits.
Input: one line, the type name (float or double), then n.
Output: one line, yes if n × u < 1, or no if it is not.
Limits: 1 ≤ n ≤ 10^18; n × u < 1 is the condition under which Higham's γₙ = nu/(1 − nu) is defined (§3.1).
### Examples
```in
float 1000
```
```out
yes
```
```in
float 20000000
```
```out
no
```
### Reference
```cpp
#include <iostream>
#include <limits>
#include <print>
#include <string>

template <typename T>
bool fits(long long n)
{
    long double u {std::numeric_limits<T>::epsilon() / 2};
    return n * u < 1;
}

int main()
{
    std::string type {};
    long long n {0};
    std::cin >> type >> n;
    bool yes {fits<double>(n)};
    if (type == "float") {
        yes = fits<float>(n);
    }
    std::println("{}", yes ? "yes" : "no");
}
```
### Wrong
```cpp
#include <iostream>
#include <limits>
#include <print>
#include <string>

template <typename T>
bool fits(long long n)
{
    long double u {std::numeric_limits<T>::epsilon()};
    return n * u < 1;
}

int main()
{
    std::string type {};
    long long n {0};
    std::cin >> type >> n;
    bool yes {fits<double>(n)};
    if (type == "float") {
        yes = fits<float>(n);
    }
    std::println("{}", yes ? "yes" : "no");
}
```
### Tests
```in
float 1
```
```in
float 16777215
```
```in
float 16777216
```
```in
double 9007199254740991
```
```in
double 9007199254740992
```
```in
double 1000000000000000000
```
### Witness
```in
float 10000000
```
