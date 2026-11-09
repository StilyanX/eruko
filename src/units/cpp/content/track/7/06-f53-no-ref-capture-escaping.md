# 7.06 Capture by value in a lambda that outlives its scope
Part: F.53 Avoid capturing by reference in lambdas that will be used non-locally, including returned, stored on the heap, or passed to another thread
Clause: C++ Core Guidelines F.53, [expr.prim.lambda.capture], [basic.life], [expr.const]
After: 1.41
Levels: c++11

## Scan
Rule: F.53
Pattern: /(?:\.|->)\s*(?!(?:transform|and_then|or_else|transform_error)\b)\w+\s*\(\s*\[\s*(?:[^\]]*,\s*)?&|\breturn\s+\[\s*(?:[^\]]*,\s*)?&/
### Bad
```cpp
#include <functional>
#include <vector>

struct Pool {
    std::vector<std::function<void()>> work;
    void queue_work(std::function<void()> f)
    {
        work.push_back(f);
    }
};

Pool thread_pool;

void process(int)
{
}

void f()
{
    int local = 42;
    thread_pool.queue_work([&] { process(local); });
}
```
### Good
```cpp
#include <functional>
#include <vector>

struct Pool {
    std::vector<std::function<void()>> work;
    void queue_work(std::function<void()> f)
    {
        work.push_back(f);
    }
};

Pool thread_pool;

void process(int)
{
}

void f()
{
    int local = 42;
    thread_pool.queue_work([=] { process(local); });
}
```

## Example
```cpp
#include <functional>
#include <print>

//: Return a lambda that keeps its own copy of the local.
std::function<int()> make()
{
    int local {42};
    return [local] { return local; };
}

int main()
{
    //: Call it after make has returned; the copy is still there.
    std::function<int()> f {make()};
    std::println("{}", f());
    //: Capture by reference only where the lambda runs at once.
    int total {0};
    auto add = [&total](int x) { total += x; };
    add(5);
    std::println("{}", total);
}
```

## Verdict 1
Levels: c++17
```cpp
#include <cstdio>

constexpr auto make()
{
    int local {42};
    return [&] { return local; };
}

int main()
{
    constexpr int r {make()()};
    std::printf("%d\n", r);
}
```
Answer: c++17..c++23 undefined constant

## Verdict 2
```cpp
#include <cstdio>
#include <functional>

std::function<int()> make()
{
    int local {42};
    return [=] { return local; };
}

int main()
{
    std::function<int()> f {make()};
    std::printf("%d\n", f());
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads k, then n integers, and only after it has read them all prints each integer times k, one per line, in the order read.
Input: one line, k and n, then one line, n integers separated by spaces.
Output: n lines, each integer times k.
Limits: -100 ≤ k ≤ 100; 1 ≤ n ≤ 50; each integer is between -1000 and 1000.
### Examples
```in
3 2
1 -4
```
```out
3
-12
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <print>
#include <vector>

struct Tasks {
    std::vector<std::function<void()>> list;
    void add(std::function<void()> f)
    {
        list.push_back(f);
    }
    void run()
    {
        for (auto& f : list) {
            f();
        }
    }
};

int main()
{
    int k {0};
    int n {0};
    std::cin >> k >> n;
    Tasks tasks;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        tasks.add([k, x] { std::println("{}", k * x); });
    }
    tasks.run();
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <print>
#include <vector>

struct Tasks {
    std::vector<std::function<void()>> list;
    void add(std::function<void()> f)
    {
        list.push_back(f);
    }
    void run()
    {
        for (auto& f : list) {
            f();
        }
    }
};

int main()
{
    int k {0};
    int n {0};
    std::cin >> k >> n;
    Tasks tasks;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        tasks.add([&k, x] { std::println("{}", k * x); });
    }
    tasks.run();
}
```
### Tests
```in
0 1
5
```
```in
-100 3
1000 -1000 0
```
```in
100 4
1 2 3 4
```
### Witness
```cpp
#include <functional>
#include <print>
#include <vector>

struct Pool {
    std::vector<std::function<void()>> work;
    void queue_work(std::function<void()> f)
    {
        work.push_back(f);
    }
};

int main()
{
    Pool thread_pool;
    int local {42};
    thread_pool.queue_work([=] { std::println("{}", local); });
    for (auto& w : thread_pool.work) {
        w();
    }
}
```

## Alone 2
Form: run
Write a program that reads a and b, then n integers x, and prints a·x + b for each x, one per line.
Input: one line, a, b and n, then one line, n integers separated by spaces.
Output: n lines, a·x + b for each x in the order read.
Limits: -100 ≤ a, b ≤ 100; 1 ≤ n ≤ 50; -1000 ≤ x ≤ 1000.
### Examples
```in
2 3 2
1 5
```
```out
5
13
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <print>

std::function<int(int)> line(int a, int b)
{
    return [a, b](int x) { return a * x + b; };
}

int main()
{
    int a {0};
    int b {0};
    int n {0};
    std::cin >> a >> b >> n;
    std::function<int(int)> f {line(a, b)};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::println("{}", f(x));
    }
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <print>

std::function<int(int)> line(const int& a, const int& b)
{
    return [&a, &b](int x) { return a * x + b; };
}

int main()
{
    int a {0};
    int b {0};
    int n {0};
    std::cin >> a >> b >> n;
    std::function<int(int)> f {line(a, b)};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::println("{}", f(x));
    }
}
```
### Tests
```in
0 0 1
7
```
```in
-100 100 3
1000 -1000 0
```
```in
100 -100 2
1000 -1000
```
### Witness
```cpp
#include <functional>
#include <print>

std::function<int()> counter_from(int start)
{
    return [start] { return start + 1; };
}

int main()
{
    std::function<int()> next {counter_from(41)};
    std::println("{}", next());
}
```
