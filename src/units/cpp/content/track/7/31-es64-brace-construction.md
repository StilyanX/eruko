# 7.31 ES.64: construct a value as T{e}, not T(e) or (T)e
Part: ES.64 Use the T{e}notation for construction
Clause: C++ Core Guidelines ES.64, [expr.type.conv], [expr.cast], [dcl.init.list]
After: 1.01, 1.04
Levels: c++11

## Scan
Rule: ES.64
Warning: -Wold-style-cast
Pattern: /(?<![<\w:.])(?<!\bnew\s+)(?:(?:std::)?(?:u?int(?:8|16|32|64)_t|size_t|ptrdiff_t)|bool|char(?:8_t|16_t|32_t)?|wchar_t|short|int|long|float|double|unsigned|signed)\s*\((?!\s*(?:\)|\*|&|const\b|volatile\b|void\b|bool\b|char\w*|wchar_t\b|short\b|int\b|long\b|float\b|double\b|unsigned\b|signed\b|auto\b|std::(?:u?int\w*_t|size_t)\b))/
### Bad
```cpp
void use(char ch, int i, double d, char* p, long long lng)
{
    int y1 = int(ch);
    int y2 = int(d);
    int y4 = int(lng);

    int z1 = (int)ch;
    int z2 = (int)d;
    int z4 = (int)lng;
}
```
### Good
```cpp
void use(char ch, int i, double d, char* p, long long lng)
{
    int x1 = int{ch};
}
```

## Example
```cpp
#include <print>

int main()
{
    //: Hold a character, which is a small integer.
    char ch {'A'};
    //: Construct the int as int{ch}, which refuses to narrow.
    int code {int{ch}};
    std::println("{}", code);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    double d {7.9};
    int x {int{d}};
    std::printf("%d\n", x);
}
```
Answer: c++11..c++23 ill-formed 6

## Verdict 2
```cpp
#include <cstdio>
#include <vector>

int main()
{
    std::vector<int> a {10};
    std::vector<int> b(10);
    std::printf("%zu %zu\n", a.size(), b.size());
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads one character and prints its character code.
Input: one line, one character that is not a space.
Output: one line, one integer.
Limits: the character is a printable ASCII character, code 33 to 126.
### Examples
```in
A
```
```out
65
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    char c {' '};
    std::cin >> c;
    std::println("{}", int{c});
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    char c {' '};
    std::cin >> c;
    std::println("{}", int(c));
}
```
### Tests
```in
!
```
```in
~
```
```in
z
```
### Witness
```cpp
int to_int(char ch)
{
    return int{ch};
}
```

## Alone 2
Form: run
Write a program that reads two integers a and b and prints their product.
Input: one line, a and b.
Output: one line, one integer.
Limits: −1 000 000 000 ≤ a, b ≤ 1 000 000 000.
### Examples
```in
3 -4
```
```out
-12
```
### Reference
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::println("{}", std::int64_t{a} * b);
}
```
### Wrong
```cpp
#include <cstdint>
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::println("{}", (std::int64_t)a * b);
}
```
### Tests
```in
0 0
```
```in
1000000000 1000000000
```
```in
-1000000000 1000000000
```
```in
-7 -8
```
### Witness
```cpp
int narrow(long long lng)
{
    return static_cast<int>(lng);
}
```
