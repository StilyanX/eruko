# 5.17 The conversion rank of the `<stdfloat>` types
Part: the conversion rank of the extended floating-point types of `<stdfloat>`
Clause: [conv.rank], [basic.extended.fp], [conv.double], [expr.arith.conv], [dcl.init.list]
After: 1.13
Levels: c++23

## Example
```cpp
#include <concepts>
#include <iostream>
#include <print>
#include <stdfloat>

int main()
{
    //: Read a number into a float.
    float f {0.5f};
    std::cin >> f;
    //: Turn it into float32_t, which has the same rank.
    std::float32_t a {f};
    //: Add a float16_t; the sum takes the type of greater rank.
    std::float16_t h {0.25f16};
    auto sum {a + h};
    static_assert(std::same_as<decltype(sum), std::float32_t>);
    //: Add a float; at equal rank, float32_t has the greater subrank.
    auto same {a + f};
    static_assert(std::same_as<decltype(same), std::float32_t>);
    //: Go down to the lower rank only with a cast.
    std::float16_t back {static_cast<std::float16_t>(sum)};
    std::println("{} {} {}", sum, same, back);
}
```

## Verdict 1
```cpp
#include <print>
#include <stdfloat>

int main()
{
    std::float16_t h {1.5f16};
    std::bfloat16_t b {2.5bf16};
    auto s {h + b};
    std::println("{}", static_cast<double>(s));
}
```
Answer: c++23 ill-formed 8

## Verdict 2
```cpp
#include <print>
#include <stdfloat>
#include <type_traits>

int main()
{
    std::float64_t x {1.5f64};
    double d {2.5};
    auto s {x + d};
    static_assert(std::is_same_v<decltype(s), std::float64_t>);
    double back {s};
    std::println("{}", back);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a type alias `real` for std::float32_t and a constexpr function `mean(real a, real b)` that returns (a + b) / 2 as a `real`.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(mean(1.0f32, 3.0f32) == 2.0f32);
std::float32_t m1 {mean(1.0f, 3.0f)};
std::float32_t m2 {mean(1.0f16, 3.0f16)};
std::float32_t m3 {mean(1.0, 3.0)};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <stdfloat>

using real = std::float32_t;

constexpr real mean(real a, real b)
{
    return (a + b) / 2;
}

int main()
{
}
```
### Wrong
```cpp
#include <stdfloat>

using real = float;

constexpr real mean(real a, real b)
{
    return (a + b) / 2;
}

int main()
{
}
```
### Witness
```cpp
float w {mean(2.0, 4.0)};
```

## Alone 2
Form: probes
Write a constexpr function `total(std::float64_t a, double b)` that returns a + b. Write its return type out: the type that a + b has.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(total(1.0f64, 2.0) == 3.0f64);
using T = decltype(total(1.0f64, 2.0));
static_assert(std::is_same_v<T, std::float64_t>);
double d {total(1.0f64, 2.0)};
float f {total(1.0f64, 2.0)};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <stdfloat>
#include <type_traits>

constexpr std::float64_t total(std::float64_t a, double b)
{
    return a + b;
}

int main()
{
}
```
### Wrong
```cpp
#include <stdfloat>
#include <type_traits>

constexpr double total(std::float64_t a, double b)
{
    return a + b;
}

int main()
{
}
```
### Witness
```cpp
using W = decltype(total(0.0f64, 0.0));
static_assert(std::is_same_v<W, std::float64_t>);
```
