# 1.41 The capture of a lambda by copy and by reference
Part: the capture of a lambda by copy and by reference, and the reference that dangles
Clause: [expr.prim.lambda.capture], [expr.prim.lambda.closure], [basic.life], [basic.stc.auto]
After: none
Levels: c++23

## Example
```cpp
#include <functional>
#include <print>

int main()
{
    int step {2};
    //: Capture step by copy: the lambda keeps the value 2.
    auto by_copy = [step](int x) { return x + step; };
    //: Capture step by reference: the lambda reads step each call.
    auto by_ref = [&step](int x) { return x + step; };
    step = 10;
    std::println("{} {}", by_copy(1), by_ref(1));
    //: Copy what the lambda must outlive into it.
    std::function<int()> later;
    {
        int local {7};
        later = [local] { return local * 2; };
    }
    std::println("{}", later());
}
```

## Verdict 1
```cpp
#include <functional>
#include <print>

int main()
{
    std::function<int()> later;
    {
        int local {7};
        later = [&local] { return local * 2; };
    }
    std::println("{}", later());
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

int main()
{
    int count {0};
    auto bump = [count] {
        ++count;
        return count;
    };
    std::println("{}", bump());
}
```
Answer: c++23 ill-formed 7

## Count
Columns: copies
```cpp
#include <print>
#include <source_location>

using Where = std::source_location;

struct Tally
{
    Tally() = default;

    Tally(const Tally&, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
};

int use(const Tally&)
{
    return 1;
}

int main()
{
    Tally a;
    Tally b;
    auto f = [a] { return use(a); };
    auto g = [&a] { return use(a); };
    auto h = [=] { return use(a) + use(b); };
    auto k = [=] { return use(b); };
    auto m = [&] { return use(a) + use(b); };
    std::println("{}", f() + g() + h() + k() + m());
}
```

## Alone 1
Form: run
Write a program that reads n numbers and makes, for each number a, a `std::function<int(int)>` that adds a to its argument, kept in one `std::vector` in input order. It then reads x and prints, for each function in order, the function called on x.
Input: one line, n; one line, n integers; one line, x.
Output: n lines.
Limits: 1 ≤ n ≤ 100, every number is between -1000 and 1000.
### Examples
```in
1
5
10
```
```out
15
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::function<int(int)>> adders;
    int a {0};
    for (int i {0}; i < n; ++i) {
        std::cin >> a;
        adders.push_back([a](int x) { return x + a; });
    }
    int x {0};
    std::cin >> x;
    for (const auto& f : adders) {
        std::println("{}", f(x));
    }
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::function<int(int)>> adders;
    int a {0};
    for (int i {0}; i < n; ++i) {
        std::cin >> a;
        adders.push_back([&a](int x) { return x + a; });
    }
    int x {0};
    std::cin >> x;
    for (const auto& f : adders) {
        std::println("{}", f(x));
    }
}
```
### Tests
```in
3
1 2 3
0
```
```in
2
-5 5
100
```
```in
4
7 7 7 1
-1
```
### Witness
```in
2
1 2
10
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n integers and keeps, for each, a `std::function<int()>` that returns its absolute value, in one `std::vector`. After all are read, it calls every function and prints the sum of what they return.
Input: one line, n; one line, n integers.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 100, every integer is between -1000 and 1000.
### Examples
```in
3
4 0 9
```
```out
13
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::function<int()>> parts;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        if (v < 0) {
            parts.push_back([v] { return -v; });
        } else {
            parts.push_back([v] { return v; });
        }
    }
    int sum {0};
    for (const auto& f : parts) {
        sum += f();
    }
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::function<int()>> parts;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        if (v < 0) {
            parts.push_back([&v] { return -v; });
        } else {
            parts.push_back([v] { return v; });
        }
    }
    int sum {0};
    for (const auto& f : parts) {
        sum += f();
    }
    std::println("{}", sum);
}
```
### Tests
```in
2
-3 3
```
```in
1
-1000
```
```in
4
5 -6 7 -8
```
### Witness
```in
2
1 -2
```
