# 4.29 A declared constructor ends aggregate initialisation in C++20
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.dcl.dcl] ¶3
Clause: [diff.cpp17.dcl.dcl], [dcl.init.aggr], [dcl.init.list], [class.ctor]
After: 1.21
Levels: c++17

## Example
```cpp
#include <print>

struct Pixel
{
    Pixel(int x, int y) : x {x}, y {y}
    {
    }
    Pixel(const Pixel&) = default;
    int x;
    int y;
};

int main()
{
    //: Let the braces call the constructor at both levels.
    Pixel pixel {3, 4};
    std::println("{} {}", pixel.x, pixel.y);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Pair
{
    Pair() = delete;
    int first;
    int second;
};

int main()
{
    Pair pair {1, 2};
    std::printf("%d %d\n", pair.first, pair.second);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 12

## Verdict 2
```cpp
#include <cstdio>

struct Size
{
    Size(const Size&) = default;
    int width;
    int height;
};

int main()
{
    Size size {3, 4};
    std::printf("%d\n", size.width * size.height);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 12

## Alone 1
Form: flag
Write a program that defines a struct Pair with the int members first and second and a defaulted copy constructor, makes a Pair from the braces {1, 2} and prints both members, so that the program is accepted at every level from c++17 to c++23.
Input: none.
Output: one line, 1 2.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <cstdio>

struct Pair
{
    Pair(int first, int second) : first {first}, second {second}
    {
    }
    Pair(const Pair&) = default;
    int first;
    int second;
};

int main()
{
    Pair pair {1, 2};
    std::printf("%d %d\n", pair.first, pair.second);
}
```
### Wrong
```cpp
#include <cstdio>

struct Pair
{
    Pair(const Pair&) = default;
    int first;
    int second;
};

int main()
{
    Pair pair {1, 2};
    std::printf("%d %d\n", pair.first, pair.second);
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that makes a struct from braces that list its members, so that the program is accepted at c++17 and rejected at c++20 and c++23 only because of a declaration inside the struct.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
struct Range
{
    Range() = default;
    int low;
    int high;
};

int main()
{
    Range range {1, 9};
}
```
### Wrong
```cpp
struct Range
{
    int low;
    int high;
};

int main()
{
    Range range {1, 9};
}
```
### Witness
```cpp
int probe {0};
```
