# 1.43 The one-definition rule
Part: the one-definition rule
Clause: [basic.def], [basic.def.odr], [class.static.data]
After: 1.29
Levels: c++23

## Example
```cpp
#include <print>

int area(int side);
extern int made;

struct Counter
{
    inline static int count {0};
    static const int limit {3};
};

int main()
{
    //: Declare a name as often as you like before you use it.
    int area(int side);
    //: Use a static member defined inside its class.
    ++Counter::count;
    //: Read a const static member by value: no definition needed.
    int top {Counter::limit};
    int sum {top + made};
    std::println("{} {} {}", area(4), Counter::count, sum);
}

//: Define each function and variable once.
int area(int side)
{
    return side * side;
}

int made {1};
```

## Verdict 1
```cpp
#include <print>

int total;

int add(int x)
{
    return total + x;
}

int total {3};

int main()
{
    std::println("{}", add(4));
}
```
Answer: c++23 ill-formed 10

## Verdict 2
```cpp
#include <print>

int twice(int x);

int twice(long x)
{
    return static_cast<int>(x * 2);
}

int main()
{
    std::println("{}", twice(21));
}
```
Answer: c++23 ndr
Derivation 1: the call twice(21) takes the int overload, an exact match, so it odr-uses twice(int) ([basic.def.odr]/7); the program holds only a declaration of it, and [basic.def.odr]/11 requires a definition of every odr-used function, with no diagnostic required.
Derivation 2: a function declaration without a body is not a definition ([basic.def]/2); twice(long) is another function, so twice(int), named by the call, has no definition anywhere in the program: ill-formed, no diagnostic required ([basic.def.odr]/11).

## Alone 1
Form: flag
Write a program in which a struct `Item` counts how many `Item` objects have been made in a static `int` data member `made` that starts at 0 and that every constructor increases by 1. `main` reads n, makes n items in a `std::vector<Item>`, and prints `Item::made`.
Input: one line, n.
Output: one line, the number of items made.
Limits: 0 ≤ n ≤ 1000.
Expect:
- c++23: accept
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Item
{
    static int made;

    Item()
    {
        ++made;
    }
};

int Item::made {0};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Item> items(n);
    std::println("{}", Item::made);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Item
{
    static int made {0};

    Item()
    {
        ++made;
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Item> items(n);
    std::println("{}", Item::made);
}
```
### Witness
```cpp
int item_count();
```

## Alone 2
Form: probes
Write a program that has, before `main`, a global `int` named `total` that starts at 0, a function `int area(int side)` that returns side times side, and a struct `Square` with one `int` member `side`. `main` reads n sides, makes a `Square` for each, adds its area to `total`, and prints `total`.
Input: one line, n; one line, n integers.
Output: one line, the total area.
Limits: 1 ≤ n ≤ 100, 1 ≤ side ≤ 1000.
### Probes
```cpp
extern int total;
int area(int side);
struct Square;
int total {0};
struct Square { int side; };
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <iostream>
#include <print>

int total {0};

int area(int side)
{
    return side * side;
}

struct Square
{
    int side {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        Square s;
        std::cin >> s.side;
        total += area(s.side);
    }
    std::println("{}", total);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

extern int total;

int area(int side)
{
    return side * side;
}

struct Square
{
    int side {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        Square s;
        std::cin >> s.side;
        total += area(s.side);
    }
    std::println("{}", total);
}
```
### Witness
```cpp
int total {0};
```
