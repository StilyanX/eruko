# 7.52 Initialize with braces in a template, so a declaration stays a variable
Part: T.68 Use {} rather than () within templates to avoid ambiguities
Clause: C++ Core Guidelines T.68, [dcl.ambig.res], [stmt.ambig], [dcl.init.list]
After: 1.01
Levels: c++11

## Scan
Rule: T.68
Warning: -Wvexing-parse
### Bad
```cpp
template<typename T, typename U>
void f(T t, U u)
{
    T v1(T(u));    // mistake: oops, v1 is a function, not a
                   // variable
}
```
### Good
```cpp
template<typename T, typename U>
void f(T t, U u)
{
    T v2{u};       // clear:   obviously a variable
}
```

## Example
```cpp
#include <print>
#include <string>

template <typename T, typename U>
T make(U u)
{
    //: Write the initializer in braces; the line declares a variable.
    T v2 {u};
    return v2;
}

int main()
{
    //: Make a std::string from a string literal through the template.
    std::println("{}", make<std::string>("asdf"));
}
```

## Verdict 1
```cpp
#include <cstdio>

template <typename T, typename U>
T make(U u)
{
    T v1(T(u));
    return v1;
}

int main()
{
    std::printf("%d\n", make<int>(7));
}
```
Answer: c++11..c++23 ill-formed 7

## Verdict 2
```cpp
#include <cstdio>
#include <string>

template <typename T, typename U>
T make(U u)
{
    T v2 {u};
    return v2;
}

int main()
{
    std::string s {make<std::string>("asdf")};
    std::printf("%s %d\n", s.c_str(), make<int>(7));
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a function template `add_under<Lock, M>(M& m, int& total, int x)` that makes a Lock from the mutex m, holds it while it adds x to total, and releases it when it returns.
Then write a program that reads n numbers and prints their total, adding each with `add_under<std::lock_guard<std::mutex>>` and one std::mutex.
Input: the first line holds n, the second line holds the n numbers.
Output: one line, the total.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
4 -1 7
```
```out
10
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>

template <typename Lock, typename M>
void add_under(M& m, int& total, int x)
{
    Lock guard {m};
    total += x;
}

int main()
{
    std::mutex m {};
    int n {0};
    std::cin >> n;
    int total {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        add_under<std::lock_guard<std::mutex>>(m, total, x);
    }
    std::println("{}", total);
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>

template <typename Lock, typename M>
void add_under(M& m, int& total, int x)
{
    Lock guard(Lock(m));
    total += x;
}

int main()
{
    std::mutex m {};
    int n {0};
    std::cin >> n;
    int total {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        add_under<std::lock_guard<std::mutex>>(m, total, x);
    }
    std::println("{}", total);
}
```
### Tests
```in
1
-1000
```
```in
20
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
```
```in
4
5 -5 0 2
```
### Witness
```cpp
#include <string>

template <typename T, typename U>
T f(T t, U u)
{
    T v2 {u};
    return v2;
}

int main()
{
    std::string s {f(std::string {}, "asdf")};
    return f(0, 1) - 1;
}
```

## Alone 2
Form: run
Write a function template `move_amount<M>(M& ma, M& mb, int& a, int& b, int x)` that takes x from a and gives it to b while it holds both mutexes ma and mb at once through one std::scoped_lock.
Then write a program that reads two balances and n amounts, and moves each amount from the first balance to the second with one std::mutex for each balance.
Input: the first line holds the two balances, the second line holds n, the third line holds the n amounts.
Output: one line, the two balances after every move, separated by a space.
Limits: every balance is between 0 and 10000; 1 ≤ n ≤ 10; every amount is between 0 and 100.
### Examples
```in
50 10
2
5 20
```
```out
25 35
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>

template <typename M>
void move_amount(M& ma, M& mb, int& a, int& b, int x)
{
    std::scoped_lock<M, M> both {ma, mb};
    a -= x;
    b += x;
}

int main()
{
    std::mutex ma {};
    std::mutex mb {};
    int a {0};
    int b {0};
    int n {0};
    std::cin >> a >> b >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        move_amount(ma, mb, a, b, x);
    }
    std::println("{} {}", a, b);
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>

template <typename M>
void move_amount(M& ma, M& mb, int& a, int& b, int x)
{
    std::scoped_lock<M, M> both(M(ma), M(mb));
    a -= x;
    b += x;
}

int main()
{
    std::mutex ma {};
    std::mutex mb {};
    int a {0};
    int b {0};
    int n {0};
    std::cin >> a >> b >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        move_amount(ma, mb, a, b, x);
    }
    std::println("{} {}", a, b);
}
```
### Tests
```in
0 0
1
0
```
```in
10000 10000
10
100 100 100 100 100 100 100 100 100 100
```
```in
7 0
3
1 2 3
```
### Witness
```cpp
#include <mutex>

template <typename T, typename U>
void f(T& t, U& u)
{
    std::scoped_lock<T, U> v2 {t, u};
}

int main()
{
    std::mutex a {};
    std::mutex b {};
    f(a, b);
}
```
