# 4.36 A function name followed by < read as a template name
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.temp] ¶1
Clause: [diff.cpp17.temp], [temp.names], [basic.lookup.argdep]
After: none
Levels: c++17

## Example
```cpp
#include <print>

namespace shapes {
struct Square
{
    int side;
};

template <typename T>
T area(Square s)
{
    return static_cast<T>(s.side) * s.side;
}
}

int main()
{
    shapes::Square square {3};
    //: Name the namespace, so every level finds the template.
    std::println("{}", shapes::area<long>(square));
}
```

## Verdict 1
```cpp
#include <cstdio>

struct A
{
};

bool operator<(void (*)(), A)
{
    return true;
}

void f()
{
}

int main()
{
    A a;
    std::printf("%d\n", f < a);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 19

## Verdict 2
```cpp
#include <cstdio>

namespace shapes {
struct Square
{
    int side;
};

template <typename T>
T area(Square s)
{
    return static_cast<T>(s.side) * s.side;
}
}

int main()
{
    shapes::Square square {3};
    std::printf("%ld\n", area<long>(square));
}
```
Answer:
- c++17: ill-formed 19
- c++20..c++23: defined

## Alone 1
Form: flag
Write a program with a namespace shapes that holds a struct Square with an int side and a function template area<T> that takes a Square and returns its area as a T; main reads a side and prints area<long> of a Square with that side. The program is accepted at c++17, c++20 and c++23.
Input: one line, one integer, the side.
Output: one line, the area.
Limits: 1 ≤ side ≤ 100000.
Expect:
- c++20..c++23: accept
- c++17..c++17: accept
### Reference
```cpp
#include <iostream>

namespace shapes {
struct Square
{
    int side;
};

template <typename T>
T area(Square s)
{
    return static_cast<T>(s.side) * s.side;
}
}

int main()
{
    shapes::Square square {0};
    std::cin >> square.side;
    std::cout << shapes::area<long>(square) << '\n';
}
```
### Wrong
```cpp
#include <iostream>

namespace shapes {
struct Square
{
    int side;
};

template <typename T>
T area(Square s)
{
    return static_cast<T>(s.side) * s.side;
}
}

int main()
{
    shapes::Square square {0};
    std::cin >> square.side;
    std::cout << area<long>(square) << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Exempt: T.21
Write a program with a struct Token, a function operator< that takes a pointer to a function with no parameters that returns void and a Token, a function tick of that kind, and a main that compares tick with a Token by < and prints the result as 1 or 0. The program is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, 1.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <iostream>

struct Token
{
};

bool operator<(void (*)(), Token)
{
    return true;
}

void tick()
{
}

int main()
{
    bool less {tick < Token {}};
    std::cout << less << '\n';
}
```
### Wrong
```cpp
#include <iostream>

struct Token
{
};

bool operator<(void (*)(), Token)
{
    return true;
}

void tick()
{
}

int main()
{
    bool less {(tick) < Token {}};
    std::cout << less << '\n';
}
```
### Witness
```cpp
int probe {0};
```
