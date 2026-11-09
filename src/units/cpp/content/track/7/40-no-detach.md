# 7.40 CP.26: join a thread, never detach it
Part: CP.26 Don't detach() a thread
Clause: C++ Core Guidelines CP.26, [thread.thread.member], [thread.jthread.class]
After: 6.02
Levels: c++20

## Scan
Rule: CP.26
Pattern: /(?:\.|->)\s*detach\s*\(\s*\)/
### Bad
```cpp
#include <thread>

void heartbeat();

void use()
{
    std::thread t(heartbeat);
    t.detach();
}
```
### Good
```cpp
#include <thread>

namespace gsl {
using joining_thread = std::jthread;
}

void heartbeat();

gsl::joining_thread t(heartbeat);
```

## Example
```cpp
#include <print>
#include <thread>

int main()
{
    int a {0};
    int b {0};
    {
        //: Let a std::jthread join itself at the end of its scope.
        std::jthread first {[&a] { a = 6; }};
        //: Join a std::thread by hand before it goes away.
        std::thread second {[&b] { b = 7; }};
        second.join();
    }
    //: Read what the threads wrote once both have ended.
    std::println("{}", a * b);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <future>
#include <thread>
#include <utility>

int main()
{
    std::promise<int> p;
    std::future<int> f {p.get_future()};
    std::thread t {[](std::promise<int> q) {
        q.set_value(42);
    }, std::move(p)};
    t.detach();
    std::printf("%d\n", f.get());
}
```
Answer: c++20..c++23 defined
Sanitizer: thread
Flags: -pthread

## Verdict 2
```cpp
#include <cstdio>
#include <system_error>
#include <thread>

int main()
{
    std::thread t {[] {}};
    t.detach();
    try {
        t.join();
        std::printf("joined\n");
    } catch (const std::system_error&) {
        std::printf("caught\n");
    }
}
```
Answer: c++20..c++23 defined
Flags: -pthread

## Alone 1
Form: run
Flags: -pthread
Write a program that reads n and adds up the squares from 1 to n in a second thread.
Input: one line, n.
Output: one line, 1 + 4 + … + n². The second thread hands the sum to the main thread, which prints it.
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
3
```
```out
14
```
### Reference
```cpp
#include <future>
#include <iostream>
#include <print>
#include <thread>
#include <utility>

int main()
{
    int n {0};
    std::cin >> n;
    std::promise<long long> result {};
    std::future<long long> sum {result.get_future()};
    std::thread worker {[n](std::promise<long long> out) {
        long long s {0};
        for (long long i {1}; i <= n; ++i) {
            s += i * i;
        }
        out.set_value(s);
    }, std::move(result)};
    worker.join();
    std::println("{}", sum.get());
}
```
### Wrong
```cpp
#include <future>
#include <iostream>
#include <print>
#include <thread>
#include <utility>

int main()
{
    int n {0};
    std::cin >> n;
    std::promise<long long> result {};
    std::future<long long> sum {result.get_future()};
    std::thread worker {[n](std::promise<long long> out) {
        long long s {0};
        for (long long i {1}; i <= n; ++i) {
            s += i * i;
        }
        out.set_value(s);
    }, std::move(result)};
    worker.detach();
    std::println("{}", sum.get());
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
10
```
### Witness
```cpp
#include <memory>
#include <thread>

void heartbeat();

std::unique_ptr<std::jthread> tick_tock {nullptr};

void use()
{
    tick_tock = std::make_unique<std::jthread>(heartbeat);
}
```

## Alone 2
Form: run
Flags: -pthread
Write a program that reads k whole numbers and finds the sum of the digits of each one, each in a thread of its own.
Input: one line, k, then a line of k whole numbers.
Output: one line per number, in the order read: the sum of its decimal digits.
Limits: 1 ≤ k ≤ 8; each number from 0 to 1000000000.
### Examples
```in
3
19 0 505
```
```out
10
0
10
```
### Reference
```cpp
#include <future>
#include <iostream>
#include <print>
#include <thread>
#include <utility>
#include <vector>

int main()
{
    int k {0};
    std::cin >> k;
    std::vector<std::future<int>> sums {};
    std::vector<std::thread> workers {};
    for (int i {0}; i < k; ++i) {
        int x {0};
        std::cin >> x;
        std::promise<int> p {};
        sums.push_back(p.get_future());
        workers.emplace_back([x](std::promise<int> out) {
            int s {0};
            for (int m {x}; m > 0; m /= 10) {
                s += m % 10;
            }
            out.set_value(s);
        }, std::move(p));
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (std::future<int>& s : sums) {
        std::println("{}", s.get());
    }
}
```
### Wrong
```cpp
#include <future>
#include <iostream>
#include <print>
#include <thread>
#include <utility>
#include <vector>

int main()
{
    int k {0};
    std::cin >> k;
    std::vector<std::future<int>> sums {};
    std::vector<std::thread> workers {};
    for (int i {0}; i < k; ++i) {
        int x {0};
        std::cin >> x;
        std::promise<int> p {};
        sums.push_back(p.get_future());
        workers.emplace_back([x](std::promise<int> out) {
            int s {0};
            for (int m {x}; m > 0; m /= 10) {
                s += m % 10;
            }
            out.set_value(s);
        }, std::move(p));
    }
    for (std::thread& w : workers) {
        w.detach();
    }
    for (std::future<int>& s : sums) {
        std::println("{}", s.get());
    }
}
```
### Tests
```in
1
0
```
```in
1
1000000000
```
```in
8
999999999 1 22 333 4444 55555 666666 7777777
```
### Witness
```cpp
#include <cstdio>
#include <thread>

int main()
{
    int a {0};
    std::jthread t {[&a] { a = 42; }};
    t.join();
    std::printf("%d\n", a);
}
```
