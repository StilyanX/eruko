# 7.49 Write a general template and a constrained one, not C and not C
Part: T.25 Avoid complementary constraints
Clause: C++ Core Guidelines T.25, [temp.constr.order], [temp.constr.op], [temp.func.order], [over.match.best]
After: 4.03, 4.06
Levels: c++20

## Scan
Rule: T.25
Pattern: /(?:\brequires\s*\(?\s*|\benable_if(?:_t)?\s*<\s*)!\s*\(?\s*((?:\w+::)*\w+)\s*<[\s\S]*?(?:(?:\brequires\s*\(?\s*|\benable_if(?:_t)?\s*<\s*)\1\s*<|\btemplate\s*<\s*\1\s+\w)|(?:(?:\brequires\s*\(?\s*|\benable_if(?:_t)?\s*<\s*)((?:\w+::)*\w+)\s*<|\btemplate\s*<\s*((?:\w+::)*\w+)\s+\w)[\s\S]*?(?:\brequires\s*\(?\s*|\benable_if(?:_t)?\s*<\s*)!\s*\(?\s*\2\3\s*</
### Bad
```cpp
template<typename T>
    requires !C<T>         // bad
void f();

template<typename T>
    requires C<T>
void f();
```
### Good
```cpp
template<typename T>        // general template
    void f();

template<typename T>        // specialization by concept
    requires C<T>
void f();
```

## Example
```cpp
#include <concepts>
#include <print>

//: Write the general template, with no constraint at all.
template <typename T>
const char* kind(T)
{
    return "other";
}

//: Add the special case, constrained by the concept alone.
template <typename T>
    requires std::integral<T>
const char* kind(T)
{
    return "integral";
}

int main()
{
    //: Let overload resolution pick the more constrained one.
    std::println("{} {}", kind(5), kind(2.5));
}
```

## Verdict 1
```cpp
#include <concepts>
#include <cstdio>

template <typename T>
    requires (!std::integral<T>)
const char* kind(T)
{
    return "other";
}

template <typename T>
    requires std::copyable<T>
const char* kind(T)
{
    return "copyable";
}

int main()
{
    std::printf("%s\n", kind(2.5));
}
```
Answer: c++20..c++23 ill-formed 20

## Verdict 2
```cpp
#include <concepts>
#include <cstdio>

template <typename T>
const char* kind(T)
{
    return "other";
}

template <typename T>
    requires std::integral<T>
const char* kind(T)
{
    return "integral";
}

int main()
{
    std::printf("%s %s\n", kind(5), kind(2.5));
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: run
Write a function template `describe(x)` that returns the word whole when x has an integer type and the word other for any other type.
Then write a program that reads an int, a double and a word, and prints what `describe` returns for each.
Input: one line, an int, a double and a word.
Output: three lines, what `describe` returns for the int, the double and the word, in that order.
Limits: the int is between -1000 and 1000; the double is between -1000 and 1000; the word has 1 to 10 letters, a to z.
### Examples
```in
7 2.5 cat
```
```out
whole
other
other
```
### Reference
```cpp
#include <concepts>
#include <iostream>
#include <print>
#include <string>

template <typename T>
std::string describe(T)
{
    return "other";
}

template <typename T>
    requires std::integral<T>
std::string describe(T)
{
    return "whole";
}

int main()
{
    int i {0};
    double d {0.0};
    std::string w {};
    std::cin >> i >> d >> w;
    std::println("{}", describe(i));
    std::println("{}", describe(d));
    std::println("{}", describe(w));
}
```
### Wrong
```cpp
#include <concepts>
#include <iostream>
#include <print>
#include <string>

template <typename T>
    requires (!std::integral<T>)
std::string describe(T)
{
    return "other";
}

template <typename T>
    requires std::integral<T>
std::string describe(T)
{
    return "whole";
}

int main()
{
    int i {0};
    double d {0.0};
    std::string w {};
    std::cin >> i >> d >> w;
    std::println("{}", describe(i));
    std::println("{}", describe(d));
    std::println("{}", describe(w));
}
```
### Tests
```in
0 0 a
```
```in
-1000 1000 abcdefghij
```
```in
1000 -0.5 zz
```
### Witness
```cpp
#include <concepts>

template <typename T>
concept C = std::integral<T>;

template <typename T>
int f()
{
    return 0;
}

template <typename T>
    requires C<T>
int f()
{
    return 1;
}

int main()
{
    return f<int>() - f<double>() - 1;
}
```

## Alone 2
Form: run
Write a function template `show(x)` that prints an integer x in hexadecimal with a leading 0x, and prints a value of any other type as std::println prints it with {}.
Then write a program that reads an int, a double and a word, and calls `show` on each.
Input: one line, an int, a double and a word.
Output: three lines, the int in hexadecimal, then the double, then the word.
Limits: the int is between 0 and 100000; the double is between -1000 and 1000; the word has 1 to 10 letters, a to z.
### Examples
```in
255 0.5 tea
```
```out
0xff
0.5
tea
```
### Reference
```cpp
#include <concepts>
#include <iostream>
#include <print>
#include <string>

template <typename T>
void show(T x)
{
    std::println("{}", x);
}

template <typename T>
    requires std::integral<T>
void show(T x)
{
    std::println("{:#x}", x);
}

int main()
{
    int i {0};
    double d {0.0};
    std::string w {};
    std::cin >> i >> d >> w;
    show(i);
    show(d);
    show(w);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <type_traits>

template <typename T>
std::enable_if_t<!std::is_integral_v<T>> show(T x)
{
    std::println("{}", x);
}

template <typename T>
std::enable_if_t<std::is_integral_v<T>> show(T x)
{
    std::println("{:#x}", x);
}

int main()
{
    int i {0};
    double d {0.0};
    std::string w {};
    std::cin >> i >> d >> w;
    show(i);
    show(d);
    show(w);
}
```
### Tests
```in
0 0 a
```
```in
100000 -1000 abcdefghij
```
```in
16 2.25 zz
```
### Witness
```cpp
#include <print>
#include <type_traits>

template <typename T>
void f(T x)
{
    std::println("{}", x);
}

template <typename T>
    requires std::is_integral_v<T>
void f(T x)
{
    std::println("{:#x}", x);
}

int main()
{
    f(255);
    f(0.5);
}
```
