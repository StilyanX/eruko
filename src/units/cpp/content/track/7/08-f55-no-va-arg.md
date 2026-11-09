# 7.08 Pass extra arguments through a variadic template, not through va_arg
Part: F.55 Don't use va_arg arguments
Clause: C++ Core Guidelines F.55, [cstdarg.syn], [expr.call], [temp.variadic], [expr.prim.fold]
After: 3.11, 3.12
Levels: c++17

## Scan
Rule: F.55
Pattern: /\b(?:std::\s*)?va_(?:list|start|arg)\b/
### Bad
```cpp
#include <cstdarg>

int sum(int count, ...)
{
    int result {0};
    std::va_list list;
    va_start(list, count);
    while (count-- > 0)
        result += va_arg(list, int);
    va_end(list);
    return result;
}

int main()
{
    sum(3, 2);
    sum(3.14159, 2.71828);
}
```
### Good
```cpp
template<class ...Args>
auto sum(Args... args)
{
    return (... + args);
}

int main()
{
    sum(3, 2);
    sum(3.14159, 2.71828);
}
```

## Example
```cpp
#include <print>

//: Take any number of arguments of any type as a pack.
template <class... Args>
auto sum(Args... args)
{
    //: Add them with a fold, each in its own type.
    return (... + args);
}

int main()
{
    //: Call it with ints, then with doubles.
    std::println("{}", sum(3, 2));
    std::println("{:.5f}", sum(3.14159, 2.71828));
}
```

## Verdict 1
```cpp
#include <cstdarg>
#include <cstdio>

unsigned sum(int count, ...)
{
    unsigned result {0};
    std::va_list list;
    va_start(list, count);
    for (int i {0}; i < count; ++i) {
        result += va_arg(list, unsigned);
    }
    va_end(list);
    return result;
}

int main()
{
    std::printf("%u\n", sum(2, 3.5, 2.5));
}
```
Answer: c++17..c++23 undefined stored
Derivation 1: [cstdarg.syn] takes va_arg from C, where va_arg(list, unsigned) on an argument passed as a double, a type not compatible with unsigned, is undefined.
Derivation 2: 3.5 and 2.5 reach the ... as double by the default argument promotions of [expr.call]; reading them as unsigned with va_arg is the C library's undefined case that [cstdarg.syn] imports.

## Verdict 2
```cpp
#include <cstdio>

template <class... Args>
auto sum(Args... args)
{
    return (... + args);
}

int main()
{
    std::printf("%.1f\n", sum(2, 3.5, 2.5));
}
```
Answer: c++17..c++23 defined

## Alone 1
Form: run
Write a program that reads four integers a, b, c and d and prints three sums: a + b, a + b + c and a + b + c + d.
Input: one line, four integers a, b, c and d.
Output: one line, the three sums separated by spaces.
Limits: -1000 ≤ a, b, c, d ≤ 1000.
### Examples
```in
1 2 3 4
```
```out
3 6 10
```
### Reference
```cpp
#include <iostream>
#include <print>

template <class... Args>
int sum(Args... args)
{
    return (0 + ... + args);
}

int main()
{
    int a {0};
    int b {0};
    int c {0};
    int d {0};
    std::cin >> a >> b >> c >> d;
    std::println("{} {} {}", sum(a, b), sum(a, b, c),
                 sum(a, b, c, d));
}
```
### Wrong
```cpp
#include <cstdarg>
#include <iostream>
#include <print>

int sum(int count, ...)
{
    int result {0};
    std::va_list list;
    va_start(list, count);
    for (int i {0}; i < count; ++i) {
        result += va_arg(list, int);
    }
    va_end(list);
    return result;
}

int main()
{
    int a {0};
    int b {0};
    int c {0};
    int d {0};
    std::cin >> a >> b >> c >> d;
    std::println("{} {} {}", sum(2, a, b), sum(3, a, b, c),
                 sum(4, a, b, c, d));
}
```
### Tests
```in
0 0 0 0
```
```in
-1000 -1000 -1000 -1000
```
```in
1000 1000 1000 1000
```
```in
5 -5 7 -7
```
### Witness
```cpp
#include <print>

template <class... Args>
auto sum(Args... args)
{
    return (... + args);
}

int main()
{
    std::println("{}", sum(3, 2));
    std::println("{:.5f}", sum(3.14159, 2.71828));
}
```

## Alone 2
Form: run
Write a program that reads an integer n and a word w and prints the line n=<n> w=<w>.
Input: one line, an integer n and a word w.
Output: one line, n= then n, a space, w= then w.
Limits: -1000 ≤ n ≤ 1000; w has 1 to 20 letters.
### Examples
```in
7 cat
```
```out
n=7 w=cat
```
### Reference
```cpp
#include <iostream>
#include <string>

template <class... Args>
void report(const Args&... args)
{
    (std::cout << ... << args) << '\n';
}

int main()
{
    int n {0};
    std::string w;
    std::cin >> n >> w;
    report("n=", n, " w=", w);
}
```
### Wrong
```cpp
#include <cstdarg>
#include <cstdio>
#include <iostream>
#include <string>

void report(const char* format, ...)
{
    std::va_list list;
    va_start(list, format);
    std::vprintf(format, list);
    va_end(list);
}

int main()
{
    int n {0};
    std::string w;
    std::cin >> n >> w;
    report("n=%d w=%s\n", n, w.c_str());
}
```
### Tests
```in
0 a
```
```in
-1000 abcdefghijklmnopqrst
```
```in
1000 z
```
### Witness
```cpp
#include <iostream>

template <class... Args>
void say(const Args&... args)
{
    (std::cout << ... << args) << '\n';
}

int main()
{
    say("sum ", 3 + 2, ' ', 3.14159 + 2.71828);
}
```
