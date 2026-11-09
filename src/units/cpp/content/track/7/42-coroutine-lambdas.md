# 7.42 CP.51: a coroutine lambda takes parameters, not captures
Part: CP.51 Do not use capturing lambdas that are coroutines
Clause: C++ Core Guidelines CP.51, [dcl.fct.def.coroutine], [expr.prim.lambda.closure]
After: none
Levels: c++20

## Scan
Rule: CP.51
Pattern: /(?<![\w)\]&*>]\s*)\[\s*[^\]\[\s][^\]\[]*\]\s*(?:\([^)]*\))?[^{;]*\{(?:[^{}]|\{[^{}]*\})*?(?:\{[^{}]*?)?\bco_(?:await|yield|return)\b/
### Bad
```cpp
#include <future>
#include <memory>

struct Foo {
};

int get_value();
std::shared_ptr<Foo> get_foo();
std::future<void> something();

void use()
{
    int value = get_value();
    std::shared_ptr<Foo> sharedFoo = get_foo();
    {
        const auto lambda = [value, sharedFoo]()
            -> std::future<void>
        {
            co_await something();
        };
        lambda();
    }
}
```
### Good
```cpp
#include <future>
#include <memory>

struct Foo {
};

int get_value();
std::shared_ptr<Foo> get_foo();
std::future<void> something();

void use()
{
    int value = get_value();
    std::shared_ptr<Foo> sharedFoo = get_foo();
    {
        const auto lambda = [](auto sharedFoo, auto value)
            -> std::future<void>
        {
            co_await something();
        };
        lambda(sharedFoo, value);
    }
}
```

## Example
```cpp
#include <generator>
#include <print>

int main()
{
    int start {3};
    //: Give the coroutine lambda what it needs as parameters.
    auto from = [](int first) -> std::generator<int> {
        for (int i {first}; i < first + 3; ++i) {
            co_yield i;
        }
    };
    //: Let the frame keep its own copy of each parameter.
    std::generator<int> counting {from(start)};
    //: Resume it as often as you like, the copies stay valid.
    for (int x : counting) {
        std::println("{}", x);
    }
}
```

## Verdict 1
```cpp
#include <coroutine>
#include <cstdio>

struct Task {
    struct promise_type {
        Task get_return_object()
        {
            return Task {Handle::from_promise(*this)};
        }
        std::suspend_always initial_suspend() { return {}; }
        std::suspend_always final_suspend() noexcept
        {
            return {};
        }
        void return_void() {}
        void unhandled_exception() {}
    };
    using Handle = std::coroutine_handle<promise_type>;
    Handle h {};
};

int main()
{
    Task t {};
    {
        int value {7};
        auto lambda = [value]() -> Task {
            std::printf("%d\n", value);
            co_return;
        };
        t = lambda();
    }
    t.h.resume();
    t.h.destroy();
}
```
Answer: c++20..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <coroutine>
#include <cstdio>

struct Task {
    struct promise_type {
        Task get_return_object()
        {
            return Task {Handle::from_promise(*this)};
        }
        std::suspend_always initial_suspend() { return {}; }
        std::suspend_always final_suspend() noexcept
        {
            return {};
        }
        void return_void() {}
        void unhandled_exception() {}
    };
    using Handle = std::coroutine_handle<promise_type>;
    Handle h {};
};

int main()
{
    Task t {};
    {
        int value {7};
        auto lambda = [](int v) -> Task {
            std::printf("%d\n", v);
            co_return;
        };
        t = lambda(value);
    }
    t.h.resume();
    t.h.destroy();
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: run
Write a program that reads n and prints the first n square numbers, made one at a time by a coroutine.
Input: one line, n.
Output: n lines: 1, 4, 9, … up to n², one a line.
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
3
```
```out
1
4
9
```
### Reference
```cpp
#include <generator>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    auto squares = [](int count) -> std::generator<int> {
        for (int i {1}; i <= count; ++i) {
            co_yield i * i;
        }
    };
    for (int x : squares(n)) {
        std::println("{}", x);
    }
}
```
### Wrong
```cpp
#include <generator>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    auto squares = [n]() -> std::generator<int> {
        for (int i {1}; i <= n; ++i) {
            co_yield i * i;
        }
    };
    for (int x : squares()) {
        std::println("{}", x);
    }
}
```
### Tests
```in
1
```
```in
1000
```
```in
5
```
### Witness
```cpp
#include <generator>
#include <memory>

struct Foo {
    int n {0};
};

int get_value();
std::shared_ptr<Foo> get_foo();

void use()
{
    int value {get_value()};
    std::shared_ptr<Foo> sharedFoo {get_foo()};
    {
        auto lambda = [](auto foo, auto v) -> std::generator<int> {
            co_yield foo->n + v;
        };
        auto numbers {lambda(sharedFoo, value)};
    }
}
```

## Alone 2
Form: run
Write a program that reads n whole numbers and prints their running totals, made one at a time by a coroutine.
Input: one line, n, then a line of n whole numbers.
Output: n lines: the sum of the first number, of the first two, and so on up to all n.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
3
4 -1 10
```
```out
4
3
13
```
### Reference
```cpp
#include <cstddef>
#include <generator>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    auto sums = [](std::vector<int> w) -> std::generator<int> {
        int sum {0};
        for (int x : w) {
            sum += x;
            co_yield sum;
        }
    };
    for (int t : sums(v)) {
        std::println("{}", t);
    }
}
```
### Wrong
```cpp
#include <cstddef>
#include <generator>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    auto sums = [&v]() -> std::generator<int> {
        int sum {0};
        for (int x : v) {
            sum += x;
            co_yield sum;
        }
    };
    for (int t : sums()) {
        std::println("{}", t);
    }
}
```
### Tests
```in
1
-1000
```
```in
4
1000 1000 1000 1000
```
```in
5
5 -5 5 -5 0
```
### Witness
```cpp
#include <generator>

std::generator<int> from(int first)
{
    for (int i {first}; i < first + 3; ++i) {
        co_yield i;
    }
}

int main()
{
    int value {7};
    for (int x : from(value)) {
        static_cast<void>(x);
    }
}
```
