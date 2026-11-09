# 7.23 ES.34: take any number of arguments with a variadic template
Part: ES.34 Don't define a (C-style) variadic function
Clause: C++ Core Guidelines ES.34, [expr.call], [cstdarg.syn], [temp.variadic]
After: 3.11, 3.12
Levels: c++14

## Scan
Rule: ES.34
Pattern: /#\s*include\s*<(?:cstdarg|stdarg\.h)>|(?:,\s*|(?<!\bcatch\s*)\(\s*|\b\w+[\s*&]+\w+\s*)\.\.\.\s*\)\s*(?:const\s*)?(?:noexcept\s*)?\{/
### Bad
```cpp
#include <cstdarg>
#include <cstdlib>
#include <iostream>
#include <string>

using namespace std;

void error(int severity ...)
{
    va_list ap;
    va_start(ap, severity);

    for (;;) {
        char* p = va_arg(ap, char*);
        if (!p) break;
        cerr << p << ' ';
    }

    va_end(ap);

    cerr << '\n';
    if (severity) exit(severity);
}

void use()
{
    error(7, "this", "is", "an", "error", nullptr);
    error(7);
    error(7, "this", "is", "an", "error");
    const char* is = "is";
    string an = "an";
    error(7, "this", is, an, "error");
}
```
### Good
```cpp
#include <cstdlib>
#include <iostream>
#include <string>

void error(int severity)
{
    std::cerr << '\n';
    std::exit(severity);
}

template<typename T, typename... Ts>
constexpr void error(int severity, T head, Ts... tail)
{
    std::cerr << head;
    error(severity, tail...);
}

void use()
{
    error(7);
    error(5, "this", "is", "not", "an", "error");

    std::string an = "an";
    error(7, "this", "is", "not", an, "error");

    error(5, "oh", "no", nullptr);
}
```

## Example
```cpp
#include <print>

//: Take the numbers as a pack of any length, each with its type.
template<typename... Ts>
int total(Ts... values)
{
    //: Add them in a fold, which the compiler checks for each type.
    return (0 + ... + values);
}

int main()
{
    //: Call the one function with three numbers and with two.
    std::println("{}", total(4, 5, 6));
    std::println("{}", total(7, 8));
}
```

## Verdict 1
```cpp
#include <cstdarg>
#include <cstdio>

int sum(int n, ...)
{
    va_list ap;
    va_start(ap, n);
    int s {0};
    for (int i {0}; i < n; ++i) {
        s += va_arg(ap, int);
    }
    va_end(ap);
    return s;
}

int main()
{
    char c {'a'};
    short h {2};
    std::printf("%d\n", sum(3, c, h, 4));
}
```
Answer: c++14..c++23 defined

## Verdict 2
```cpp
#include <cstdarg>
#include <cstdio>

int sum(int n, ...)
{
    va_list ap;
    va_start(ap, n);
    int s {0};
    for (int i {0}; i < n; ++i) {
        s += va_arg(ap, int);
    }
    va_end(ap);
    return s;
}

int main()
{
    std::printf("%d\n", sum(3, 1, 2));
}
```
Answer: c++14..c++23 undefined stored
Derivation 1: [cstdarg.syn] takes va_arg from the C standard, where va_arg called when there is no actual next argument is undefined; the third va_arg here has none, since the call passes only 1 and 2 after n.
Derivation 2: [expr.call] passes exactly the arguments written, two after n; the loop asks for three, and C 7.16.1.1, which [cstdarg.syn] adopts, leaves a va_arg past the last argument undefined.

## Alone 1
Form: run
Write a program that reads four integers a, b, c and d and prints two lines: the sum of a, b and c, then the sum of all four. Compute both sums with one function that you call once with three arguments and once with four.
Input: one line, a b c d.
Output: two lines, each one integer.
Limits: −1 000 000 000 ≤ a, b, c, d ≤ 1 000 000 000.
### Examples
```in
1 2 3 4
```
```out
6
10
```
### Reference
```cpp
#include <iostream>
#include <print>

template<typename... Ts>
long long sum(Ts... values)
{
    return (0LL + ... + values);
}

int main()
{
    long long a {0};
    long long b {0};
    long long c {0};
    long long d {0};
    std::cin >> a >> b >> c >> d;
    std::println("{}", sum(a, b, c));
    std::println("{}", sum(a, b, c, d));
}
```
### Wrong
```cpp
#include <cstdarg>
#include <iostream>
#include <print>

long long sum(int count, ...)
{
    va_list args;
    va_start(args, count);
    long long total {0};
    for (int i {0}; i < count; ++i) {
        total += va_arg(args, long long);
    }
    va_end(args);
    return total;
}

int main()
{
    long long a {0};
    long long b {0};
    long long c {0};
    long long d {0};
    std::cin >> a >> b >> c >> d;
    std::println("{}", sum(3, a, b, c));
    std::println("{}", sum(4, a, b, c, d));
}
```
### Tests
```in
0 0 0 0
```
```in
1000000000 1000000000 1000000000 1000000000
```
```in
-1000000000 -1000000000 -1000000000 -1000000000
```
```in
5 -7 2 -9
```
### Witness
```cpp
#include <cstdlib>
#include <iostream>

void error(int severity)
{
    std::cerr << '\n';
    if (severity) {
        std::exit(severity);
    }
}

template<typename T, typename... Ts>
void error(int severity, T head, Ts... tail)
{
    std::cerr << head << ' ';
    error(severity, tail...);
}

void use()
{
    error(7, "this", "is", "an", "error");
}
```

## Alone 2
Form: run
Write a program that reads three words and prints two lines: the three words with one space between each two, then the first two words with one space between them. Print both lines with one function that takes the words as separate arguments.
Input: one line, three words.
Output: two lines of words.
Limits: each word has 1 to 20 lowercase letters.
### Examples
```in
red green blue
```
```out
red green blue
red green
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

void say(const std::string& first)
{
    std::println("{}", first);
}

template<typename... Ts>
void say(const std::string& first, const Ts&... rest)
{
    std::print("{} ", first);
    say(rest...);
}

int main()
{
    std::string a;
    std::string b;
    std::string c;
    std::cin >> a >> b >> c;
    say(a, b, c);
    say(a, b);
}
```
### Wrong
```cpp
#include <cstdarg>
#include <iostream>
#include <print>
#include <string>

void say(const char* first, ...)
{
    va_list args;
    va_start(args, first);
    std::string line {first};
    const char* word {va_arg(args, const char*)};
    while (word != nullptr) {
        line += ' ';
        line += word;
        word = va_arg(args, const char*);
    }
    va_end(args);
    std::println("{}", line);
}

int main()
{
    std::string a;
    std::string b;
    std::string c;
    std::cin >> a >> b >> c;
    say(a.c_str(), b.c_str(), c.c_str(), nullptr);
    say(a.c_str(), b.c_str(), nullptr);
}
```
### Tests
```in
a b c
```
```in
abcdefghijklmnopqrst uvwxyzabcdefghijklmn opqrstuvwxyzabcdefgh
```
```in
one one one
```
### Witness
```cpp
#include <iostream>
#include <string>

void error(int severity)
{
    std::cerr << severity << '\n';
}

template<typename T, typename... Ts>
void error(int severity, const T& head, const Ts&... tail)
{
    std::cerr << head << ' ';
    error(severity, tail...);
}

void use()
{
    const char* is = "is";
    std::string an = "an";
    error(7, "this", is, an, "error");
}
```
