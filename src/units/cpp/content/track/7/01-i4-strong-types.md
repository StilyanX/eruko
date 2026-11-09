# 7.01 Give a function one typed setting, not two bools side by side
Part: I.4 Make interfaces precisely and strongly typed
Clause: C++ Core Guidelines I.4, [dcl.init.list], [conv.bool], [dcl.init.aggr]
After: 1.04, 1.21
Levels: c++11

## Scan
Rule: I.4
Pattern: /(?:\b\w+|\])\s*\(\s*(?:[^()]*?,\s*)?(?:const\s+)?bool(?:\s+\w+)?\s*(?:=[^(),]*)?,\s*(?:[^()]*?,\s*)?(?:const\s+)?bool(?:\s+\w+)?\s*(?:=[^(),]*)?[,)]/
### Bad
```cpp
void set_settings(bool enabled, bool spinning, int frequency)
{
}

int main()
{
    set_settings(true, false, 42);
}
```
### Good
```cpp
struct alarm_settings {
    enum class mode { steady, spinning_light };
    static constexpr int every_10_seconds = 10;
    bool enabled;
    mode displayMode;
    int frequency;
};

void set_settings(alarm_settings s)
{
}

int main()
{
    alarm_settings s{};
    s.enabled = true;
    s.displayMode = alarm_settings::mode::spinning_light;
    s.frequency = alarm_settings::every_10_seconds;
    set_settings(s);
}
```

## Example
```cpp
#include <print>

//: Name each setting in a struct, so each value has its own field.
struct Settings {
    bool enabled;
    bool spinning;
    int frequency;
};

//: Take the whole struct, so no two bools stand side by side.
void show(Settings s)
{
    std::println("{} {} {}", s.enabled, s.spinning,
                 s.frequency);
}

int main()
{
    //: Fill the fields by name, then hand the struct over.
    Settings s {};
    s.enabled = true;
    s.frequency = 10;
    show(s);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Settings {
    bool enabled;
    bool spinning;
    int frequency;
};

void show(Settings s)
{
    std::printf("%d %d ", s.enabled, s.spinning);
    std::printf("%d\n", s.frequency);
}

int main()
{
    show({true, 42, false});
}
```
Answer: c++11..c++23 ill-formed 17

## Verdict 2
```cpp
#include <cstdio>

void show(bool enabled, bool spinning, int frequency)
{
    std::printf("%d %d %d\n", enabled, spinning, frequency);
}

int main()
{
    show(true, 42, false);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and two switches r and s, each 0 or 1, and prints the numbers 1 to n on one line. If r is 1, print them from n down to 1. If s is 1, print the square of each number instead of the number.
Input: one line, n, r and s.
Output: one line, the n numbers separated by spaces.
Limits: 1 ≤ n ≤ 30; r and s are 0 or 1.
### Examples
```in
3 1 0
```
```out
3 2 1
```
```in
3 0 1
```
```out
1 4 9
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Order {
    bool reverse;
    bool squares;
};

void list(int n, Order order)
{
    for (int i {1}; i <= n; ++i) {
        int k {order.reverse ? n + 1 - i : i};
        int shown {order.squares ? k * k : k};
        std::print("{}{}", i > 1 ? " " : "", shown);
    }
    std::println("");
}

int main()
{
    int n {0};
    int r {0};
    int s {0};
    std::cin >> n >> r >> s;
    Order order {};
    order.reverse = r == 1;
    order.squares = s == 1;
    list(n, order);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

void list(int n, bool reverse, bool squares)
{
    for (int i {1}; i <= n; ++i) {
        int k {reverse ? n + 1 - i : i};
        int shown {squares ? k * k : k};
        std::print("{}{}", i > 1 ? " " : "", shown);
    }
    std::println("");
}

int main()
{
    int n {0};
    int r {0};
    int s {0};
    std::cin >> n >> r >> s;
    list(n, r == 1, s == 1);
}
```
### Tests
```in
1 0 0
```
```in
1 1 1
```
```in
30 1 1
```
```in
5 0 0
```
```in
4 1 0
```
### Witness
```cpp
#include <print>

struct alarm_settings {
    bool enabled;
    bool spinning_light;
    int frequency;
};

void set_settings(alarm_settings s)
{
    std::println("{} {} {}", s.enabled, s.spinning_light,
                 s.frequency);
}

int main()
{
    alarm_settings s {};
    s.enabled = true;
    s.frequency = 42;
    set_settings(s);
}
```

## Alone 2
Form: run
Write a program that reads an integer x and two switches p and z, each 0 or 1, and prints x. If p is 1, put a + before a number above 0. If z is 1, pad the number with zeros to 5 digits.
Input: one line, x, p and z.
Output: one line, x as the switches ask.
Limits: -9999 ≤ x ≤ 9999; p and z are 0 or 1.
### Examples
```in
42 1 1
```
```out
+00042
```
```in
-7 0 1
```
```out
-00007
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

enum Style { plain = 0, plus = 1, zeros = 2 };

std::string shown(int x, int style)
{
    std::string digits {std::to_string(x < 0 ? -x : x)};
    if (style & zeros) {
        digits.insert(0, 5 - digits.size(), '0');
    }
    if (x < 0) {
        return "-" + digits;
    }
    if ((style & plus) && x > 0) {
        return "+" + digits;
    }
    return digits;
}

int main()
{
    int x {0};
    int p {0};
    int z {0};
    std::cin >> x >> p >> z;
    int style {plain};
    if (p == 1) {
        style |= plus;
    }
    if (z == 1) {
        style |= zeros;
    }
    std::println("{}", shown(x, style));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

std::string shown(int x, bool plus, bool zeros)
{
    std::string digits {std::to_string(x < 0 ? -x : x)};
    if (zeros) {
        digits.insert(0, 5 - digits.size(), '0');
    }
    if (x < 0) {
        return "-" + digits;
    }
    if (plus && x > 0) {
        return "+" + digits;
    }
    return digits;
}

int main()
{
    int x {0};
    int p {0};
    int z {0};
    std::cin >> x >> p >> z;
    std::println("{}", shown(x, p == 1, z == 1));
}
```
### Tests
```in
0 1 0
```
```in
0 1 1
```
```in
-9999 1 1
```
```in
9999 1 0
```
```in
5 0 0
```
```in
-12 1 0
```
### Witness
```cpp
#include <print>

enum Lamp { off = 0, on = 1, animate = 2 };

void enable_lamp_options(int options)
{
    std::println("{} {}", (options & on) != 0,
                 (options & animate) != 0);
}

int main()
{
    enable_lamp_options(on | animate);
}
```
