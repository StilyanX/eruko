# 4.34 Reversed candidates for == between a type and what it converts to
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.over] ¶1
Clause: [diff.cpp17.over], [over.match.oper], [over.match.best]
After: none
Levels: c++17

## Example
```cpp
#include <print>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, int b)
{
    return a.value == b;
}

int main()
{
    Level x {3};
    Level y {3};
    //: Turn both sides to int, so the built-in == compares them.
    bool same {static_cast<int>(x) == static_cast<int>(y)};
    //: Put the Level on the left to call the operator you wrote.
    bool three {x == 3};
    std::println("{} {}", same, three);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, int b)
{
    return a.value == b;
}

int main()
{
    Level x {3};
    Level y {4};
    std::printf("%d\n", x == y);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 21

## Verdict 2
```cpp
#include <cstdio>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, int b)
{
    return a.value == b;
}

int main()
{
    Level x {3};
    Level y {4};
    std::printf("%d\n", x != y);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 21

## Alone 1
Form: flag
Write a program with a struct Level that holds an int and converts to int, and a function operator== that compares a Level with an int; main reads two Levels and prints 1 if they are equal and 0 if not. The program is accepted at c++17, c++20 and c++23.
Input: one line, two integers.
Output: one line, 1 or 0.
Limits: each integer is between -1000 and 1000.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, int b)
{
    return a.value == b;
}

int main()
{
    Level x {0};
    Level y {0};
    std::cin >> x.value >> y.value;
    bool same {static_cast<int>(x) == static_cast<int>(y)};
    std::cout << same << '\n';
}
```
### Wrong
```cpp
#include <iostream>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, int b)
{
    return a.value == b;
}

int main()
{
    Level x {0};
    Level y {0};
    std::cin >> x.value >> y.value;
    bool same {x == y};
    std::cout << same << '\n';
}
```
### Witness
```cpp
bool probe {Level {1} == 1};
```

## Alone 2
Form: flag
Write a program with a struct Level that holds an int and converts to int, and a function operator== that takes a Level and an int; main reads two Levels and prints 1 if they differ and 0 if not, comparing the two Levels with != directly. The program is accepted at c++17 and rejected at c++20 and c++23.
Input: one line, two integers.
Output: one line, 1 or 0.
Limits: each integer is between -1000 and 1000.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <iostream>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, int b)
{
    return a.value == b;
}

int main()
{
    Level x {0};
    Level y {0};
    std::cin >> x.value >> y.value;
    bool differ {x != y};
    std::cout << differ << '\n';
}
```
### Wrong
```cpp
#include <iostream>

struct Level
{
    int value;
    operator int() const
    {
        return value;
    }
};

bool operator==(Level a, Level b)
{
    return a.value == b.value;
}

int main()
{
    Level x {0};
    Level y {0};
    std::cin >> x.value >> y.value;
    bool differ {x != y};
    std::cout << differ << '\n';
}
```
### Witness
```cpp
int probe {0};
```
