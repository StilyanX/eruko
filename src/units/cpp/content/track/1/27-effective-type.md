# 1.27 The effective type of an object
Part: the effective type of an object: reading a `float` through an `int` lvalue
Clause: [basic.lval], [expr.reinterpret.cast], [basic.types.general], [bit.cast], [expr.const]
After: 1.26
Levels: c++23

## Example
```cpp
#include <bit>
#include <cstdint>
#include <cstring>
#include <print>

int main()
{
    //: Keep a float whose bits you want to see.
    float x {1.0f};
    //: Copy its bytes into an unsigned int of the same size.
    std::uint32_t copied {0};
    std::memcpy(&copied, &x, sizeof copied);
    //: Or let std::bit_cast make the same copy.
    std::uint32_t cast {std::bit_cast<std::uint32_t>(x)};
    //: Print both; neither reads the float through an int.
    std::println("{:08x} {:08x}", copied, cast);
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    float x {1.0f};
    int* bits {reinterpret_cast<int*>(&x)};
    std::println("{:x}", *bits);
}
```
Answer: c++23 undefined stored
Derivation 1: [basic.lval]/11: *bits is an int glvalue that reads x, whose type is float; int is not float, not similar to it, not its signed or unsigned type, and not char, unsigned char or std::byte, so the read is undefined.
Derivation 2: [expr.reinterpret.cast]/7 only converts the pointer, which still points to the float x; reading a float object through an lvalue of type int is an access [basic.lval]/11 does not allow, so the behaviour is undefined.

## Verdict 2
```cpp
#include <print>

int main()
{
    int n {-1};
    unsigned int* u {reinterpret_cast<unsigned int*>(&n)};
    std::println("{}", *u + 1u);
}
```
Answer: c++23 defined

## Alone 1
Form: flag
Write a program that defines a constexpr function `bits_of(x)` that returns the bits of the float x as a std::uint32_t, and checks at compile time that `bits_of(1.0f)` is 0x3f800000.
Input: none.
Output: none.
Limits: a float holds the 32 bits of IEEE 754 binary32.
Expect:
- c++23: accept
### Reference
```cpp
#include <bit>
#include <cstdint>

constexpr std::uint32_t bits_of(float x)
{
    return std::bit_cast<std::uint32_t>(x);
}

static_assert(bits_of(1.0f) == 0x3f800000u);

int main()
{
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>

constexpr std::uint32_t bits_of(float x)
{
    return *reinterpret_cast<const std::uint32_t*>(&x);
}

static_assert(bits_of(1.0f) == 0x3f800000u);

int main()
{
}
```
### Witness
```cpp
static_assert(bits_of(2.0f) == 0x40000000u);
```

## Alone 2
Form: probes
Write a function `exponent_of(x)` that returns the 8 exponent bits of the float x as an int, and that the compiler can call at compile time.
Input: none.
Output: none.
Limits: a float holds the 32 bits of IEEE 754 binary32: 1 sign bit, 8 exponent bits, 23 fraction bits.
### Probes
```cpp
static_assert(exponent_of(1.0f) == 127);
static_assert(exponent_of(0.5f) == 126);
static_assert(exponent_of(-8.0f) == 130);
static_assert(exponent_of(1.0f) == 0);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <bit>
#include <cstdint>

constexpr int exponent_of(float x)
{
    std::uint32_t bits {std::bit_cast<std::uint32_t>(x)};
    return static_cast<int>((bits >> 23) & 0xffu);
}

int main()
{
}
```
### Wrong
```cpp
#include <bit>
#include <cstdint>

constexpr int exponent_of(float x)
{
    std::uint32_t bits {*reinterpret_cast<std::uint32_t*>(&x)};
    return static_cast<int>((bits >> 23) & 0xffu);
}

int main()
{
}
```
### Witness
```cpp
static_assert(exponent_of(4.0f) == 129);
```
