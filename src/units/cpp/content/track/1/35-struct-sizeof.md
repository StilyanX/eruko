# 1.35 The `sizeof` of a struct, padding included
Part: the `sizeof` of a struct, padding included
Clause: [expr.sizeof], [basic.align], [class.mem]
After: none
Levels: c++23

## Example
```cpp
#include <print>

//: Order the members large to small to leave no gaps.
struct Tight {
    double d;
    int i;
    char c;
};

//: Put a small member before a large one to leave a gap.
struct Loose {
    char c;
    double d;
    int i;
};

int main()
{
    //: Print each size: the same members, different padding.
    std::println("{} {}", sizeof(Tight), sizeof(Loose));
    //: Count the padding at the end of a struct in an array too.
    std::println("{}", sizeof(Tight[3]));
}
```

## Verdict 1
```cpp
#include <print>

struct Sample {
    char tag;
    int value;
};

int main()
{
    std::println("{}", sizeof(Sample));
}
```
Answer: c++23 implementation
Derivation 1: [expr.sizeof]/1 makes the sizeof of int implementation-defined, and [class.mem] lets padding of the implementation's choosing stand after tag, so the printed size is the implementation's.
Derivation 2: [basic.align]/1 leaves the alignment of int to the implementation, so the gap before value and with it sizeof(Sample), which [expr.sizeof]/2 counts with padding, are implementation-defined.

## Verdict 2
```cpp
struct Entry {
    int value;
    char tag;
};

static_assert(sizeof(Entry[4]) == 4 * sizeof(Entry));
static_assert(sizeof(Entry) > sizeof(int));

int main()
{
}
```
Answer: c++23 defined

## Count
Columns: bytes
```cpp
#include <cstddef>
#include <print>

struct Small {
    char a;
    char b;
};

struct Mixed {
    char a;
    int b;
    char c;
};

void bytes(int line, std::size_t n)
{
    for (std::size_t i {0}; i < n; ++i) {
        std::println("@{} bytes", line);
    }
}

int main()
{
    bytes(__LINE__, sizeof(Small));
    bytes(__LINE__, sizeof(Mixed));
    bytes(__LINE__, sizeof(Mixed[2]));
}
```

## Alone 1
Form: probes
Write a struct `Spread` holding exactly a char tag, a double value and an int count, in the order that makes it take 24 bytes.
Input: none.
Output: none.
Limits: x86-64 with g++ 16, where an int takes 4 bytes and a double 8.
### Probes
```cpp
static_assert(sizeof(Spread) == 24);
static_assert(sizeof(Spread::value) == 8);
static_assert(sizeof(Spread) == 16);
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
struct Spread {
    char tag;
    double value;
    int count;
};

int main()
{
}
```
### Wrong
```cpp
struct Spread {
    double value;
    int count;
    char tag;
};

int main()
{
}
```
### Witness
```cpp
static_assert(sizeof(Spread) > 16);
```

## Alone 2
Form: probes
Write a struct `Packet` holding exactly a char kind, an int length, a char flag and a short port, in the order that makes it as small as it can be.
Input: none.
Output: none.
Limits: x86-64 with g++ 16, where a short takes 2 bytes and an int 4.
### Probes
```cpp
static_assert(sizeof(Packet) == 8);
static_assert(sizeof(Packet::port) == 2);
static_assert(sizeof(Packet) == 12);
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
struct Packet {
    int length;
    short port;
    char kind;
    char flag;
};

int main()
{
}
```
### Wrong
```cpp
struct Packet {
    char kind;
    int length;
    char flag;
    short port;
};

int main()
{
}
```
### Witness
```cpp
static_assert(sizeof(Packet) < 12);
```
