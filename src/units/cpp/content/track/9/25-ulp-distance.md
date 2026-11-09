# 9.25 The distance in ulps between two floats
Part: the distance in ulps between two floats
Clause: [bit.cast], [basic.fundamental], [c.math.nextafter]
After: 9.24
Levels: c++23
Source: IEEE 754-2019 §3.4 and §5.3.1; Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §2.1

## Example
```cpp
#include <bit>
#include <cmath>
#include <cstdint>
#include <print>

using Bits = std::uint32_t;

//: Map a float to an integer that counts the floats in order.
std::int64_t key(float x)
{
    Bits bits {std::bit_cast<Bits>(x)};
    std::int64_t size {bits & 0x7fffffffu};
    return bits >> 31 ? -size : size;
}

int main()
{
    //: Step from 1 to the next float, one ulp away.
    float next {std::nextafter(1.0f, 2.0f)};
    std::println("{}", key(next) - key(1.0f));
    //: Count the floats from 1 to 2, one whole binade.
    std::println("{}", key(2.0f) - key(1.0f));
    //: Count across zero, where -0 and +0 share one key.
    std::println("{}", key(1.0f) - key(-1.0f));
}
```

## Verdict 1
```cpp
#include <bit>
#include <cstdint>
#include <limits>

using Bits = std::uint32_t;

int main()
{
    constexpr float eps {std::numeric_limits<float>::epsilon()};
    constexpr Bits b {std::bit_cast<Bits>(1.0f)};
    constexpr float up {std::bit_cast<float>(b + 1)};
    static_assert(up == 1.0f + eps);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <bit>
#include <cstdint>
#include <limits>

using Bits = std::uint32_t;

int main()
{
    constexpr float eps {std::numeric_limits<float>::epsilon()};
    constexpr Bits b {std::bit_cast<Bits>(1.0f)};
    constexpr float down {std::bit_cast<float>(b - 1)};
    static_assert(down == 1.0f - eps);
}
```
Answer: c++23 ill-formed 12

## Alone 1
Form: run
Write a program that reads two floats a and b and prints how many ulps apart they are. That is the number of steps from a to b, where each step moves to the next float. Count -0 and +0 as one float.
Input: one line, a and b, each read as a float.
Output: one line, the distance, a whole number.
Limits: a and b are finite; |a|, |b| ≤ 3.4e38.
### Examples
```in
1 1.0000001
```
```out
1
```
```in
0.5 1
```
```out
8388608
```
### Reference
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

using Bits = std::uint32_t;

std::int64_t key(float x)
{
    Bits bits {std::bit_cast<Bits>(x)};
    std::int64_t size {bits & 0x7fffffffu};
    return bits >> 31 ? -size : size;
}

int main()
{
    float a {0.0f};
    float b {0.0f};
    std::cin >> a >> b;
    std::int64_t d {key(b) - key(a)};
    std::println("{}", d < 0 ? -d : d);
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

using Bits = std::uint32_t;

std::int64_t key(float x)
{
    Bits bits {std::bit_cast<Bits>(x)};
    std::int64_t size {bits};
    return size;
}

int main()
{
    float a {0.0f};
    float b {0.0f};
    std::cin >> a >> b;
    std::int64_t d {key(b) - key(a)};
    std::println("{}", d < 0 ? -d : d);
}
```
### Tests
```in
-0 0
```
```in
1 2
```
```in
-0.5 0.25
```
```in
3.4e38 -3.4e38
```
```in
1e-45 -1e-45
```
### Witness
```in
-1 1
```

## Alone 2
Form: run
Write a program that reads a float x and a whole number k and prints the float k ulps away from x. It lies above x when k > 0 and below x when k < 0. Each step moves to the next float, and -0 and +0 count as one float.
Input: one line, x read as a float, then k.
Output: one line, the float as std::format prints it with {:a}, such as 1.000002p+0; print zero as 0p+0.
Limits: x is finite; |k| ≤ 10^9; the float k ulps away from x is finite.
### Examples
```in
1 1
```
```out
1.000002p+0
```
```in
1 -1
```
```out
1.fffffep-1
```
### Reference
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

using Bits = std::uint32_t;

std::int64_t key(float x)
{
    Bits bits {std::bit_cast<Bits>(x)};
    std::int64_t size {bits & 0x7fffffffu};
    return bits >> 31 ? -size : size;
}

float from(std::int64_t k)
{
    Bits size {static_cast<Bits>(k < 0 ? -k : k)};
    Bits sign {k < 0 ? 0x80000000u : 0u};
    return std::bit_cast<float>(size | sign);
}

int main()
{
    float x {0.0f};
    std::int64_t k {0};
    std::cin >> x >> k;
    std::println("{:a}", from(key(x) + k));
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

using Bits = std::uint32_t;

std::int64_t key(float x)
{
    Bits bits {std::bit_cast<Bits>(x)};
    std::int64_t size {bits};
    return size;
}

float from(std::int64_t k)
{
    Bits size {static_cast<Bits>(k < 0 ? -k : k)};
    Bits sign {k < 0 ? 0x80000000u : 0u};
    return std::bit_cast<float>(size | sign);
}

int main()
{
    float x {0.0f};
    std::int64_t k {0};
    std::cin >> x >> k;
    std::println("{:a}", from(key(x) + k));
}
```
### Tests
```in
-1 1
```
```in
1.5 -1069547520
```
```in
-1e-45 2
```
```in
3.4e38 1
```
```in
0.1 -5
```
### Witness
```in
-2 3
```
