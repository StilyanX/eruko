# 7.28 ES.49: write a cast as a named cast
Part: ES.49 If you must use a cast, use a named cast
Clause: C++ Core Guidelines ES.49, [expr.cast], [expr.type.conv], [expr.static.cast], [expr.dynamic.cast]
After: 1.39
Levels: c++11

## Scan
Rule: ES.49
Warning: -Wold-style-cast
Pattern: /\(\s*void\s*\)\s*(?!const\b|noexcept\b|override\b|final\b|requires\b|try\b)[\w(*]|(?<![<\w:.])(?<!\bnew\s+)(?:(?:std::)?(?:u?int(?:8|16|32|64)_t|size_t|ptrdiff_t)|bool|char(?:8_t|16_t|32_t)?|wchar_t|short|int|long|float|double|unsigned|signed)\s*\((?!\s*(?:\)|\*|&|const\b|volatile\b|void\b|bool\b|char\w*|wchar_t\b|short\b|int\b|long\b|float\b|double\b|unsigned\b|signed\b|auto\b|std::(?:u?int\w*_t|size_t)\b))/
### Bad
```cpp
class B {
public:
    virtual ~B() = default;
};
class D {
};

D* downcast(B* pb)
{
    D* pd1 = (D*)pb;
    D* pd3 = reinterpret_cast<D*>(pb);
    D* pd4 = dynamic_cast<D*>(pb);
    return pd4;
}
```
### Good
```cpp
class B {
public:
    virtual ~B() = default;
};
class D {
};

D* downcast(B* pb)
{
    D* pd4 = dynamic_cast<D*>(pb);
    return pd4;
}
```

## Example
```cpp
#include <print>

int main()
{
    //: Keep a total and a count as integers.
    int total {7};
    int count {2};
    //: Convert with static_cast, which names the kind of change.
    double mean {static_cast<double>(total) / count};
    std::println("{}", mean);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct B {
    virtual ~B() = default;
};

struct D {
};

int main()
{
    B b;
    D* pd {static_cast<D*>(&b)};
    std::printf("%d\n", pd == nullptr);
}
```
Answer: c++11..c++23 ill-formed 13

## Verdict 2
```cpp
#include <cstdio>

struct B {
    virtual ~B() = default;
};

struct D {
};

int main()
{
    B b;
    D* pd {dynamic_cast<D*>(&b)};
    std::printf("%d\n", pd == nullptr);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and n integers and prints their mean with exactly two digits after the point.
Input: the first line holds n; the second line holds n integers separated by spaces.
Output: one line, the mean.
Limits: 1 ≤ n ≤ 100, every integer is from −1 000 000 to 1 000 000.
### Examples
```in
2
3 4
```
```out
3.50
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    long long sum {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        sum += x;
    }
    std::println("{:.2f}", static_cast<double>(sum) / n);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    long long sum {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        sum += x;
    }
    std::println("{:.2f}", (double)sum / n);
}
```
### Tests
```in
1
-1000000
```
```in
3
1000000 1000000 999999
```
```in
3
1 2 2
```
```in
4
-1 -2 3 7
```
### Witness
```cpp
class B {
public:
    virtual ~B() = default;
};
class D {
};

D* downcast(B* pb)
{
    return dynamic_cast<D*>(pb);
}
```

## Alone 2
Form: run
Write a program that reads a character code from 97 to 122 and prints the lowercase letter with that code.
Input: one line, the code.
Output: one line, one letter.
Limits: 97 ≤ code ≤ 122.
### Examples
```in
97
```
```out
a
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int code {0};
    std::cin >> code;
    std::println("{}", static_cast<char>(code));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int code {0};
    std::cin >> code;
    std::println("{}", char(code));
}
```
### Tests
```in
122
```
```in
109
```
```in
98
```
### Witness
```cpp
void ignore(int x)
{
    static_cast<void>(x);
}
```
