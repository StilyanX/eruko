# 7.18 ES.20: give every object its value where it is declared
Part: ES.20 Always initialize an object
Clause: C++ Core Guidelines ES.20, [dcl.init], [basic.indet], [expr.const]
After: 1.02, 1.05, 1.30
Levels: c++11

## Scan
Rule: ES.20
Pattern: /^(?<!\b(?:struct|class|union)\s+(?:alignas\s*\([^()]*\)\s*)?\w+[^{};()]*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)[ \t]+(?:const\s+)?(?:(?:unsigned|signed|short|long)\s+)*(?:int|long|short|char|bool|float|double|unsigned|signed|wchar_t|char8_t|char16_t|char32_t|std::size_t|std::ptrdiff_t|std::u?int(?:8|16|32|64)_t|std::byte)\b\s*\**\s*\w+(?:\s*,\s*\**\s*\w+)*\s*;|^(?<!\b(?:struct|class|union)\s+(?:alignas\s*\([^()]*\)\s*)?\w+[^{};()]*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)[ \t]+(?!(?:return|co_return|co_yield|throw|delete|case|else|do|goto)\b)(?:const\s+)?[\w:]+(?:<[^;\n]*>)?(?:\*+\s*|\s+\*+)\w+\s*;/m
### Bad
```cpp
void use(int arg)
{
    int i;
    i = 7;
}
```
### Good
```cpp
#include <string>

using std::string;

void use(int arg)
{
    int i = 7;
    string s;
}
```

## Example
```cpp
#include <iostream>
#include <print>
#include <string>

struct Tally {
    //: Give each member its value where it is declared.
    int count {0};
};

int main()
{
    //: Give a number its value even when input will overwrite it.
    int n {0};
    std::cin >> n;
    //: Give a struct and a string empty braces.
    Tally t {};
    std::string word {};
    t.count += n;
    std::println("{} {}", t.count, word.size());
}
```

## Verdict 1
Levels: c++20
```cpp
constexpr int f()
{
    int i;
    return i;
}

int main()
{
    constexpr int x {f()};
    return x;
}
```
Answer: c++20..c++23 undefined constant

## Verdict 2
```cpp
#include <cstdio>

struct S {
    int a {7};
    int b;
};

int main()
{
    S s {};
    std::printf("%d %d\n", s.a, s.b);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads two whole numbers and prints the larger one.
Input: one line, two numbers.
Output: one line, the larger number.
Limits: each number is from -1000 to 1000.
### Examples
```in
3 8
```
```out
8
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::println("{}", a > b ? a : b);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int a;
    int b {0};
    std::cin >> a >> b;
    std::println("{}", a > b ? a : b);
}
```
### Tests
```in
-1000 -1000
```
```in
1000 -1000
```
```in
-5 1000
```
```in
4 4
```
### Witness
```cpp
void use(int arg)
{
    int i {7};
    i += arg;
}
```

## Alone 2
Form: run
Write a program that reads words until the input ends and prints how many of them have more than three letters.
Input: words separated by spaces or line breaks.
Output: one line, the count.
Limits: 1 to 100 words, each of 1 to 20 letters.
### Examples
```in
the quick brown fox
```
```out
2
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    int count {0};
    for (std::string w {}; std::cin >> w;) {
        if (w.size() > 3) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    int count;
    count = 0;
    for (std::string w {}; std::cin >> w;) {
        if (w.size() > 3) {
            ++count;
        }
    }
    std::println("{}", count);
}
```
### Tests
```in
a
```
```in
abcd
```
```in
one two six
```
```in
four
five
sixty seven
```
### Witness
```cpp
#include <iostream>

int read_one()
{
    int i2 = 0;
    std::cin >> i2;
    return i2;
}
```
