# 1.09 Fused multiply-add
Part: the contraction of `a * b + c` into one fused multiply-add under `-ffp-contract`
Clause: [expr.pre], [expr.static.cast], [cmath.syn]
After: none
Levels: c++23

## Example
```cpp
#include <cmath>
#include <print>

int main()
{
    //: Pick a product that rounds to exactly 1.
    double a {0.1};
    double b {10.0};
    double c {-1.0};
    //: Round the product with a cast, then round the sum.
    double twice {static_cast<double>(a * b) + c};
    //: Round only once, with std::fma.
    double once {std::fma(a, b, c)};
    //: Leave the choice to the compiler, which may fuse.
    double either {a * b + c};
    //: Print all three results.
    std::println("{} {} {}", twice, once, either);
}
```

## Verdict 1
Flags: -ffp-contract=fast
```cpp
#include <print>

int main()
{
    double a {0.1};
    double b {10.0};
    double c {-1.0};
    double r {a * b + c};
    std::println("{}", r);
}
```
Answer: c++23 unspecified
```out
0
```
```out
5.551115123125783e-17
```

## Verdict 2
```cpp
#include <print>

int main()
{
    double a {0.1};
    double b {10.0};
    double c {-1.0};
    double r {static_cast<double>(a * b) + c};
    std::println("{}", r);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads three numbers a, b and c and prints a × b + c with one rounding only.
Input: one line, three numbers a, b and c.
Output: one line, the exact value of a × b + c rounded once to a double.
Limits: 0.001 ≤ |a|, |b|, |c| ≤ 1000.
### Examples
```in
2 3 1
```
```out
7
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double a {0.0};
    double b {0.0};
    double c {0.0};
    std::cin >> a >> b >> c;
    std::println("{}", std::fma(a, b, c));
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double a {0.0};
    double b {0.0};
    double c {0.0};
    std::cin >> a >> b >> c;
    std::println("{}", a * b + c);
}
```
### Tests
```in
0.1 0.1 -0.01
```
```in
1.1 1.1 -1.21
```
```in
3 0.1 -0.3
```
### Witness
```in
0.1 10 -1
```

## Alone 2
Form: run
Write a program that reads two numbers a and b and prints the double p nearest to a × b, then the exact difference a × b − p.
Input: one line, two numbers a and b.
Output: one line, p and the difference, separated by a space.
Limits: 0.001 ≤ |a|, |b| ≤ 1000.
### Examples
```in
3 4
```
```out
12 0
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double a {0.0};
    double b {0.0};
    std::cin >> a >> b;
    double p {a * b};
    double e {std::fma(a, b, -p)};
    std::println("{} {}", p, e);
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    double a {0.0};
    double b {0.0};
    std::cin >> a >> b;
    double p {a * b};
    double e {a * b - p};
    std::println("{} {}", p, e);
}
```
### Tests
```in
0.1 0.3
```
```in
1.1 1.1
```
```in
-0.7 3.3
```
### Witness
```in
0.1 0.1
```
