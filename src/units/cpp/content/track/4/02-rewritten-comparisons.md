# 4.02 Rewritten comparison operators
Part: rewritten comparison operators
Clause: [over.match.oper], [over.match.best], [class.compare.default], [diff.cpp17.over]
After: 4.01
Levels: c++17

## Example
```cpp
#include <compare>
#include <print>

//: Declare == alone; != and the reversed order come from it.
struct Mass
{
    int grams;
    bool operator==(int g) const
    {
        return grams == g;
    }
};

//: Declare <=> alone; <, <=, > and >= come from it.
struct Depth
{
    int metres;
    std::strong_ordering operator<=>(int m) const
    {
        return metres <=> m;
    }
};

int main()
{
    Mass m {5};
    Depth d {3};
    //: Write != and put the int first; both use the one ==.
    std::println("{} {}", m != 4, 5 == m);
    //: Write > with the int first; it becomes 0 < (d <=> 2).
    std::println("{} {}", d < 4, 2 > d);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct A
{
    int v;
    operator int() const
    {
        return v;
    }
};

bool operator==(A, int)
{
    return true;
}

int main()
{
    A x {1};
    A y {2};
    std::printf("%d\n", x == y);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 21

## Verdict 2
```cpp
struct Mass
{
    int grams;
    bool operator==(int g) const
    {
        return grams == g;
    }
};

int main()
{
    Mass m {5};
    bool a {5 == m};
    bool b {m != 4};
    bool c {4 < m};
    return a && b && c ? 0 : 1;
}
```
Levels: c++20
Answer: c++20..c++23 ill-formed 15

## Alone 1
Form: probes
Write a struct `Celsius` holding an int `degrees`, made by `Celsius {3}`, whose objects the compiler can compare at compile time with an int by == and by !=, the int on either side.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(Celsius {3} == 3);
static_assert(3 == Celsius {3});
static_assert(Celsius {3} != 4);
static_assert(4 != Celsius {3});
static_assert(Celsius {3} < 4);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
struct Celsius
{
    int degrees;
    constexpr bool operator==(int d) const
    {
        return degrees == d;
    }
};

int main()
{
}
```
### Wrong
```cpp
struct Celsius
{
    int degrees;
    constexpr bool operator!=(int d) const
    {
        return degrees != d;
    }
};

int main()
{
}
```
### Witness
```cpp
static_assert(7 == Celsius {7});
```

## Alone 2
Form: probes
Write a struct `Length` holding an int `metres`, made by `Length {2}`, whose objects the compiler can compare at compile time with an int by <, <=, > and >=, the int on either side.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(Length {2} < 3);
static_assert(3 > Length {2});
static_assert(1 <= Length {2});
static_assert(2 >= Length {2});
static_assert(Length {2} >= 2);
static_assert(Length {2} == 2);
```
Accept: 1, 2, 3, 4, 5
Reject: 6
### Reference
```cpp
#include <compare>

struct Length
{
    int metres;
    constexpr std::strong_ordering operator<=>(int m) const
    {
        return metres <=> m;
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <compare>

struct Length
{
    int metres;
    constexpr bool operator<(int m) const
    {
        return metres < m;
    }
};

int main()
{
}
```
### Witness
```cpp
static_assert(5 >= Length {4});
```
