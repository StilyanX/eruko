# 1.08 Floating-point underflow to zero or to a subnormal
Part: a floating-point operation that underflows to zero or to a subnormal
Clause: [basic.fundamental], [expr.pre], [numeric.limits.members], [c.math.fpclass], [cmath.syn]
After: none
Levels: c++23

## Example
```cpp
#include <cmath>
#include <limits>
#include <print>

int main()
{
    //: Take the smallest normal double.
    double smallest {std::numeric_limits<double>::min()};
    //: Halve it; the result is subnormal, not zero.
    double half {smallest / 2};
    //: Halve the smallest subnormal; it rounds to zero.
    double tiny {std::numeric_limits<double>::denorm_min()};
    double gone {tiny / 2};
    //: Print the values in hex-float form, then the classes.
    std::println("{:a} {:a}", smallest, half);
    std::println("{:a} {:a}", tiny, gone);
    std::println("{}", std::fpclassify(half) == FP_SUBNORMAL);
    std::println("{}", std::fpclassify(gone) == FP_ZERO);
}
```

## Verdict 1
```cpp
#include <limits>
#include <print>

int main()
{
    double smallest {std::numeric_limits<double>::min()};
    double x {smallest / 1024};
    std::println("{:a}", x);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <limits>
#include <print>

int main()
{
    float smallest {std::numeric_limits<float>::min()};
    float x {smallest * smallest};
    std::println("{}", x == 0.0f);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads k and prints whether 2 to the power -k, as a double, is normal, subnormal or zero.
Input: one line, k.
Output: one line, normal, subnormal or zero.
Limits: 1 ≤ k ≤ 1100.
### Examples
```in
3
```
```out
normal
```
```in
1100
```
```out
zero
```
### Reference
```cpp
#include <iostream>
#include <limits>
#include <print>

int main()
{
    int k {0};
    std::cin >> k;
    double x {1.0};
    for (int i {0}; i < k; ++i) {
        x /= 2;
    }
    if (x == 0.0) {
        std::println("zero");
    } else if (x < std::numeric_limits<double>::min()) {
        std::println("subnormal");
    } else {
        std::println("normal");
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <limits>
#include <print>

int main()
{
    int k {0};
    std::cin >> k;
    double x {1.0};
    for (int i {0}; i < k; ++i) {
        x /= 2;
    }
    if (x < std::numeric_limits<double>::min()) {
        std::println("zero");
    } else {
        std::println("normal");
    }
}
```
### Tests
```in
1022
```
```in
1023
```
```in
1074
```
```in
1075
```
```in
1050
```
### Witness
```in
1050
```

## Alone 2
Form: run
Write a program that reads k and prints, in hex-float form, the length of the vector whose two components are both 2 to the power -k.
Input: one line, k.
Output: one line, the length as a double in the form std::format gives with {:a}.
Limits: 1 ≤ k ≤ 1000.
### Examples
```in
1
```
```out
1.6a09e667f3bcdp-1
```
### Reference
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int k {0};
    std::cin >> k;
    double x {std::ldexp(1.0, -k)};
    std::println("{:a}", std::hypot(x, x));
}
```
### Wrong
```cpp
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int k {0};
    std::cin >> k;
    double x {std::ldexp(1.0, -k)};
    std::println("{:a}", std::sqrt(x * x + x * x));
}
```
### Tests
```in
537
```
```in
538
```
```in
1000
```
```in
200
```
### Witness
```in
600
```
