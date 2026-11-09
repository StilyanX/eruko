# 7.32 ES.70: compare one value against constants with a switch
Part: ES.70 Prefer a switch-statement to an if-statement when there is a choice
Clause: C++ Core Guidelines ES.70, [stmt.switch], [stmt.if]
After: none
Levels: c++11

## Scan
Rule: ES.70
Pattern: /\bif\s*\(\s*(\w+)\s*==\s*(?:\d[\w']*|'[^'\n]*'|\w+::\w+)\s*\)\s*(?:\{[^{}]*\}|[^;{}]*;)\s*else\s+if\s*\(\s*\1\s*==\s*(?:\d[\w']*|'[^'\n]*'|\w+::\w+)\s*\)/
### Bad
```cpp
void use2(int n)
{
    if (n == 0)
        ;
    else if (n == 7)
        ;
}
```
### Good
```cpp
void use(int n)
{
    switch (n) {
    case 0:
        break;
    case 7:
        break;
    default:
        break;
    }
}
```

## Example
```cpp
#include <print>

int main()
{
    //: Hold an operator and two numbers.
    char op {'*'};
    int a {6};
    int b {7};
    //: Compare the one value against fixed cases with a switch.
    switch (op) {
    //: Give each case its own result and leave it with break.
    case '+':
        std::println("{}", a + b);
        break;
    case '*':
        std::println("{}", a * b);
        break;
    //: Say what happens for every other value.
    default:
        std::println("unknown");
        break;
    }
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int n {7};
    switch (n) {
    case 0:
        std::puts("zero");
        break;
    case 7:
        std::puts("seven");
        break;
    case 7:
        std::puts("again");
        break;
    }
}
```
Answer: c++11..c++23 ill-formed 13

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int n {7};
    if (n == 0) {
        std::puts("zero");
    } else if (n == 7) {
        std::puts("seven");
    } else if (n == 7) {
        std::puts("again");
    }
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads a sum a op b, where op is +, - or *, and prints its result.
Input: one line, a, op and b separated by spaces.
Output: one line, one integer.
Limits: −10 000 ≤ a, b ≤ 10 000, op is one of + - *.
### Examples
```in
6 * 7
```
```out
42
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    long long a {0};
    char op {' '};
    long long b {0};
    std::cin >> a >> op >> b;
    long long r {0};
    switch (op) {
    case '+':
        r = a + b;
        break;
    case '-':
        r = a - b;
        break;
    case '*':
        r = a * b;
        break;
    }
    std::println("{}", r);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    long long a {0};
    char op {' '};
    long long b {0};
    std::cin >> a >> op >> b;
    long long r {0};
    if (op == '+') {
        r = a + b;
    } else if (op == '-') {
        r = a - b;
    } else if (op == '*') {
        r = a * b;
    }
    std::println("{}", r);
}
```
### Tests
```in
-10000 * 10000
```
```in
3 - -4
```
```in
10000 + 10000
```
```in
0 * -5
```
### Witness
```cpp
void use2(int n)
{
    switch (n) {
    case 0:
        break;
    case 7:
        break;
    default:
        break;
    }
}
```

## Alone 2
Form: run
Write a program that reads a day number d, 0 for Monday up to 6 for Sunday, and prints work for Monday to Friday and rest for Saturday and Sunday.
Input: one line, d.
Output: one line, work or rest.
Limits: 0 ≤ d ≤ 6.
### Examples
```in
5
```
```out
rest
```
### Reference
```cpp
#include <iostream>
#include <print>

enum class Day { mon, tue, wed, thu, fri, sat, sun };

int main()
{
    int d {0};
    std::cin >> d;
    Day day {static_cast<Day>(d)};
    switch (day) {
    case Day::sat:
    case Day::sun:
        std::println("rest");
        break;
    default:
        std::println("work");
        break;
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

enum class Day { mon, tue, wed, thu, fri, sat, sun };

int main()
{
    int d {0};
    std::cin >> d;
    Day day {static_cast<Day>(d)};
    if (day == Day::sat) {
        std::println("rest");
    } else if (day == Day::sun) {
        std::println("rest");
    } else {
        std::println("work");
    }
}
```
### Tests
```in
0
```
```in
6
```
```in
4
```
### Witness
```cpp
#include <cstdio>

void answer(char c)
{
    switch (c) {
    case 'y':
        std::puts("yes");
        break;
    case 'n':
        std::puts("no");
        break;
    default:
        std::puts("unknown");
        break;
    }
}
```
