# 7.05 F.48: return a local by name, never by std::move
Part: F.48
Clause: C++ Core Guidelines F.48, [class.copy.elision]
After: 2.04
Levels: c++17

## Scan
Rule: F.48
Warning: -Wpessimizing-move, -Wredundant-move
### Bad
```cpp
#include <utility>

struct S {
    int v {0};
};

S bad()
{
    S result;
    return std::move(result);
}
```
### Good
```cpp
struct S {
    int v {0};
};

S good()
{
    S result;
    return result;
}
```

## Example
```cpp
#include <print>
#include <string>

std::string greeting(int n)
{
    //: Build the local that the function hands back.
    std::string text(static_cast<std::size_t>(n), 'a');
    //: Return the local by its name, so it is elided or moved.
    return text;
}

int main()
{
    std::println("{}", greeting(3));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <utility>

struct S {
    int v {4};
};

S make()
{
    S s;
    return std::move(s);
}

int main()
{
    std::printf("%d\n", make().v);
}
```
Answer: c++17..c++23 defined

## Alone 1
Form: run
Write a program that reads n and prints a line of n letters x, built in a function that returns a std::string.
Input: one line, n.
Output: one line of n letters x.
Limits: 0 ≤ n ≤ 50.
### Examples
```in
3
```
```out
xxx
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

std::string row(int n)
{
    std::string text(static_cast<std::size_t>(n), 'x');
    return text;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", row(n));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <utility>

std::string row(int n)
{
    std::string text(static_cast<std::size_t>(n), 'x');
    return std::move(text);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::println("{}", row(n));
}
```
### Tests
```in
0
```
```in
50
```
### Witness
```cpp
#include <string>

std::string again()
{
    std::string s {"ab"};
    return s;
}
```
