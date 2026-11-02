# 1.29 Overload resolution
Part: overload resolution
Clause: [over.match], [over.match.best], [over.best.ics], [over.ics.rank], [conv.prom]
After: 1.26
Levels: c++23

## Example
```cpp
#include <print>

void show(int x)
{
    std::println("int {}", x);
}

void show(double x)
{
    std::println("double {}", x);
}

int main()
{
    //: Pass an int, which matches show(int) exactly.
    show(4);
    //: Pass a char; a promotion to int beats a conversion.
    show('A');
    //: Pass a float; a promotion to double beats a conversion.
    show(1.5f);
}
```

## Verdict 1
```cpp
#include <print>

void bump(int x)
{
    std::println("copy {}", x + 1);
}

void bump(int& x)
{
    x += 1;
}

int main()
{
    int n {3};
    bump(4);
    bump(n);
    std::println("{}", n);
}
```
Answer: c++23 ill-formed 17

## Verdict 2
```cpp
#include <print>

void show(long x)
{
    std::println("long {}", x);
}

void show(double x)
{
    std::println("double {}", x);
}

int main()
{
    show(5L);
    show(2.5f);
    show(7);
    show('a');
}
```
Answer: c++23 ill-formed 17, 18

## Alone 1
Form: probes
Write two functions named `kind`, which the compiler can call at compile time: one that returns 1 for an int argument, and one that returns 2 for a double argument.
Input: none.
Output: none.
Limits: each takes one argument and returns an int.
### Probes
```cpp
static_assert(kind(1) == 1);
static_assert(kind(1.0) == 2);
static_assert(kind('a') == 1);
static_assert(kind(1.0f) == 2);
static_assert(kind(true) == 1);
constexpr int u {kind(1u)};
constexpr int l {kind(1L)};
```
Accept: 1, 2, 3, 4, 5
Reject: 6, 7
### Reference
```cpp
constexpr int kind(int)
{
    return 1;
}

constexpr int kind(double)
{
    return 2;
}

int main()
{
}
```
### Wrong
```cpp
constexpr int kind(int)
{
    return 1;
}

constexpr int kind(float)
{
    return 2;
}

int main()
{
}
```
### Witness
```cpp
static_assert(kind(2.5) == 2);
```

## Alone 2
Form: run
Write a program that reads n integers and prints each one that is positive, the word none in place of each one that is not, and then true or false: whether every integer was positive.
Input: first line n, then one line of n integers separated by spaces.
Output: n + 1 lines: one for each integer in order, then true or false.
Limits: 1 ≤ n ≤ 1000; each integer fits in an int.
### Examples
```in
3
4 1 9
```
```out
4
1
9
true
```
```in
1
12
```
```out
12
true
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

void put(int x)
{
    std::println("{}", x);
}

void put(bool b)
{
    std::println("{}", b);
}

void put(const std::string& s)
{
    std::println("{}", s);
}

int main()
{
    int n {0};
    std::cin >> n;
    bool all {true};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (x > 0) {
            put(x);
        } else {
            put(std::string {"none"});
            all = false;
        }
    }
    put(all);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

void put(int x)
{
    std::println("{}", x);
}

void put(bool b)
{
    std::println("{}", b);
}

void put(const std::string& s)
{
    std::println("{}", s);
}

int main()
{
    int n {0};
    std::cin >> n;
    bool all {true};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        if (x > 0) {
            put(x);
        } else {
            put("none");
            all = false;
        }
    }
    put(all);
}
```
### Tests
```in
3
1 0 2
```
```in
2
-5 -6
```
```in
4
7 7 -1 7
```
### Witness
```in
2
3 0
```
