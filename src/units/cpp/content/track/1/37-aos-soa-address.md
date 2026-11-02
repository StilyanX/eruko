# 1.37 The address of element i in an array of structs and in a struct of arrays
Part: the address of element i of an array of structs and of a struct of arrays
Clause: [dcl.array], [expr.add], [expr.sizeof], [support.types.layout]
After: 1.35, 1.36
Levels: c++23

## Example
```cpp
#include <cstddef>
#include <print>

//: Keep each particle's x, y and z together.
struct Particle {
    float x;
    float y;
    float z;
};

//: Keep all the x values together, then all y, then all z.
struct Particles {
    float x[100];
    float y[100];
    float z[100];
};

int main()
{
    //: Find y of element i of an array of structs, i structs in.
    std::size_t i {5};
    std::size_t step {sizeof(Particle)};
    std::size_t aos {i * step + offsetof(Particle, y)};
    //: Find y of element i of a struct of arrays, past all of x.
    std::size_t start {offsetof(Particles, y)};
    std::size_t soa {start + i * sizeof(float)};
    //: Measure both from the real addresses.
    static Particle a[100] {};
    static Particles s {};
    auto* a0 {reinterpret_cast<const char*>(&a)};
    auto* ay {reinterpret_cast<const char*>(&a[i].y)};
    auto* s0 {reinterpret_cast<const char*>(&s)};
    auto* sy {reinterpret_cast<const char*>(&s.y[i])};
    std::println("{} {}", aos, ay - a0);
    std::println("{} {}", soa, sy - s0);
}
```

## Verdict 1
```cpp
struct Columns {
    int x[4];
    int y[4];
};

constexpr int first_y()
{
    Columns c {{1, 2, 3, 4}, {5, 6, 7, 8}};
    return c.x[4];
}

int counts[first_y()];

int main()
{
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <print>

struct Particle {
    float x;
    float y;
    float z;
};

int main()
{
    Particle a[8] {};
    auto* base {reinterpret_cast<const char*>(&a)};
    auto* at {reinterpret_cast<const char*>(&a[3].y)};
    std::println("{}", at - base);
}
```
Answer: c++23 implementation
Derivation 1: [dcl.array]/6 puts a[3] three times sizeof(Particle) bytes past a, and [expr.sizeof]/1 leaves sizeof(float), so that size and y's offset, to the implementation.
Derivation 2: [support.types.layout] and [class.mem] place y after x at an offset that may include padding of the implementation's choosing, and the size of float is implementation-defined, so the printed distance is implementation-defined.

## Alone 1
Form: run
Write a program that reads i and prints the byte offset of x of element i, first in an array of 1000 structs each holding a double mass and then a float x, then in one struct holding an array of 1000 doubles mass and then an array of 1000 floats x.
Input: one line, i.
Output: one line, the two offsets separated by a space.
Limits: 0 ≤ i < 1000; x86-64 with g++ 16, where a double takes 8 bytes and a float 4.
### Examples
```in
0
```
```out
8 8000
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>

struct Body {
    double mass;
    float x;
};

struct Bodies {
    double mass[1000];
    float x[1000];
};

int main()
{
    std::size_t i {0};
    std::cin >> i;
    std::size_t step {sizeof(Body)};
    std::size_t aos {i * step + offsetof(Body, x)};
    std::size_t soa {offsetof(Bodies, x) + i * sizeof(float)};
    std::println("{} {}", aos, soa);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>

struct Body {
    double mass;
    float x;
};

struct Bodies {
    double mass[1000];
    float x[1000];
};

int main()
{
    std::size_t i {0};
    std::cin >> i;
    std::size_t step {sizeof(double) + sizeof(float)};
    std::size_t aos {i * step + offsetof(Body, x)};
    std::size_t soa {offsetof(Bodies, x) + i * sizeof(float)};
    std::println("{} {}", aos, soa);
}
```
### Tests
```in
1
```
```in
7
```
```in
999
```
### Witness
```in
2
```

## Alone 2
Form: run
Write a program that reads a byte offset b into an array of structs, each holding an int id and then a double value, and prints the index of the element whose bytes include b, then `id`, `value` or `padding` for the byte b stands in.
Input: one line, b.
Output: one line, the index and the word separated by a space.
Limits: 0 ≤ b < 16000; x86-64 with g++ 16, where an int takes 4 bytes and a double 8.
### Examples
```in
0
```
```out
0 id
```
```in
10
```
```out
0 value
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>

struct Sample {
    int id;
    double value;
};

int main()
{
    std::size_t b {0};
    std::cin >> b;
    std::size_t size {sizeof(Sample)};
    std::size_t rest {b % size};
    if (rest < offsetof(Sample, id) + sizeof(int)) {
        std::println("{} id", b / size);
    } else if (rest >= offsetof(Sample, value)) {
        std::println("{} value", b / size);
    } else {
        std::println("{} padding", b / size);
    }
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>

struct Sample {
    int id;
    double value;
};

int main()
{
    std::size_t b {0};
    std::cin >> b;
    std::size_t size {sizeof(int) + sizeof(double)};
    std::size_t rest {b % size};
    if (rest < offsetof(Sample, id) + sizeof(int)) {
        std::println("{} id", b / size);
    } else if (rest >= offsetof(Sample, value)) {
        std::println("{} value", b / size);
    } else {
        std::println("{} padding", b / size);
    }
}
```
### Tests
```in
4
```
```in
7
```
```in
31
```
```in
15999
```
### Witness
```in
16
```
