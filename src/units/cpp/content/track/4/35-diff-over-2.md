# 4.35 A non-const operator== compared with its own reverse
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.over] ¶2
Clause: [diff.cpp17.over], [over.match.oper], [over.match.best], [expr.eq]
After: none
Levels: c++17

## Example
```cpp
#include <print>

struct Point
{
    int x;
    int y;
    //: Make the member operator== const, so a == b has one best match.
    bool operator==(const Point& other) const
    {
        return x == other.x && y == other.y;
    }
};

int main()
{
    //: Compare two points; every level calls the same operator.
    Point a {1, 2};
    Point b {1, 2};
    std::println("{}", a == b);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Point
{
    int x;
    int y;
    bool operator==(const Point& other)
    {
        return x == other.x && y == other.y;
    }
};

int main()
{
    Point a {1, 2};
    Point b {1, 2};
    std::printf("%d\n", a == b);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 17

## Verdict 2
```cpp
#include <cstdio>

struct Point
{
    int x;
    int y;
};

bool operator==(Point& a, const Point& b)
{
    return a.x == b.x && a.y == b.y;
}

int main()
{
    Point a {1, 2};
    Point b {3, 4};
    std::printf("%d\n", a == b);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 18

## Alone 1
Form: flag
Write a program with a struct Point of two ints that has a member function operator==; main reads two Points and prints 1 if they are equal and 0 if not. The program is accepted at c++17, c++20 and c++23.
Input: one line, four integers: x and y of the first point, then of the second.
Output: one line, 1 or 0.
Limits: each integer is between -1000 and 1000.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>

struct Point
{
    int x;
    int y;
    bool operator==(const Point& other) const
    {
        return x == other.x && y == other.y;
    }
};

int main()
{
    Point a {0, 0};
    Point b {0, 0};
    std::cin >> a.x >> a.y >> b.x >> b.y;
    std::cout << (a == b) << '\n';
}
```
### Wrong
```cpp
#include <iostream>

struct Point
{
    int x;
    int y;
    bool operator==(const Point& other)
    {
        return x == other.x && y == other.y;
    }
};

int main()
{
    Point a {0, 0};
    Point b {0, 0};
    std::cin >> a.x >> a.y >> b.x >> b.y;
    std::cout << (a == b) << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program with a struct Point of two ints and a function operator== that is not a member and takes two Points by reference; main reads two Points and prints 1 if they are equal and 0 if not. The program is accepted at c++17, c++20 and c++23.
Input: one line, four integers: x and y of the first point, then of the second.
Output: one line, 1 or 0.
Limits: each integer is between -1000 and 1000.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>

struct Point
{
    int x;
    int y;
};

bool operator==(const Point& a, const Point& b)
{
    return a.x == b.x && a.y == b.y;
}

int main()
{
    Point a {0, 0};
    Point b {0, 0};
    std::cin >> a.x >> a.y >> b.x >> b.y;
    std::cout << (a == b) << '\n';
}
```
### Wrong
```cpp
#include <iostream>

struct Point
{
    int x;
    int y;
};

bool operator==(Point& a, const Point& b)
{
    return a.x == b.x && a.y == b.y;
}

int main()
{
    Point a {0, 0};
    Point b {0, 0};
    std::cin >> a.x >> a.y >> b.x >> b.y;
    std::cout << (a == b) << '\n';
}
```
### Witness
```cpp
int probe {0};
```
