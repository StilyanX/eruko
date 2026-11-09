# 4.18 Reading the bits of one type as another
Part: `std::bit_cast`
Clause: [bit.cast], [basic.types.general], [basic.fundamental], [conv.fpint]
After: 4.17
Levels: c++20

## Example
```cpp
#include <bit>
#include <cstdint>
#include <print>

int main()
{
    //: Read the bits of a float as an unsigned int of its size.
    float x {1.0f};
    std::uint32_t bits {std::bit_cast<std::uint32_t>(x)};
    std::println("{:08x}", bits);
    //: Compare a value conversion, which keeps the number.
    std::println("{}", static_cast<std::uint32_t>(x));
    //: Take the exponent field from bits 23 to 30.
    std::uint32_t exponent {(bits >> 23) & 0xffu};
    std::println("{}", exponent);
    //: Turn the next bit pattern back into a float.
    float next {std::bit_cast<float>(bits + 1)};
    std::println("{}", next > x);
    //: Cast while compiling too, since bit_cast is constexpr.
    static_assert(std::bit_cast<std::uint64_t>(2.0)
                  == 0x4000000000000000u);
}
```

## Verdict 1
```cpp
#include <bit>
#include <cstdint>

int main()
{
    double d {1.0};
    std::uint32_t b {std::bit_cast<std::uint32_t>(d)};
    return b == 0 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 7

## Verdict 2
```cpp
#include <bit>
#include <cstdint>

int main()
{
    float z {-0.0f};
    std::uint32_t b {std::bit_cast<std::uint32_t>(z)};
    return b == 0x80000000u && z == 0.0f ? 0 : 1;
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: run
Write a program that reads a float x and prints the three fields of its 32 bits, which hold x as IEEE 754 single precision: the sign bit (bit 31), the exponent field (bits 23 to 30) and the fraction field (bits 0 to 22).
Input: one line, x, read as a float.
Output: one line, three integers separated by spaces: the sign bit, the exponent field and the fraction field.
Limits: x is 0, or 1e-30 ≤ |x| ≤ 3e38.
### Examples
```in
0
```
```out
0 0 0
```
### Reference
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    float x {0.0f};
    std::cin >> x;
    std::uint32_t bits {std::bit_cast<std::uint32_t>(x)};
    std::uint32_t sign {bits >> 31};
    std::uint32_t exponent {(bits >> 23) & 0xffu};
    std::uint32_t fraction {bits & 0x7fffffu};
    std::println("{} {} {}", sign, exponent, fraction);
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    float x {0.0f};
    std::cin >> x;
    std::uint32_t bits {static_cast<std::uint32_t>(x)};
    std::uint32_t sign {bits >> 31};
    std::uint32_t exponent {(bits >> 23) & 0xffu};
    std::uint32_t fraction {bits & 0x7fffffu};
    std::println("{} {} {}", sign, exponent, fraction);
}
```
### Tests
```in
1
```
```in
-2.5
```
```in
0.1
```
```in
3e38
```
```in
-1e-30
```
### Witness
```in
1
```

## Alone 2
Form: run
Write a program that reads two floats a and b with 0 < a ≤ b and prints how many floats x there are with a < x ≤ b.
Input: one line, a and b, each read as a float.
Output: one line, the count.
Limits: 1e-30 ≤ a ≤ b ≤ 3e38.
### Examples
```in
1 1
```
```out
0
```
### Reference
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    float a {1.0f};
    float b {1.0f};
    std::cin >> a >> b;
    std::uint32_t low {std::bit_cast<std::uint32_t>(a)};
    std::uint32_t high {std::bit_cast<std::uint32_t>(b)};
    std::println("{}", high - low);
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    float a {1.0f};
    float b {1.0f};
    std::cin >> a >> b;
    std::uint32_t low {static_cast<std::uint32_t>(a)};
    std::uint32_t high {static_cast<std::uint32_t>(b)};
    std::println("{}", high - low);
}
```
### Tests
```in
1 2
```
```in
0.1 0.2
```
```in
1e-30 3e38
```
```in
2 2.0000002
```
### Witness
```in
1 2
```
