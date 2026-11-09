# 6.11 Deadlock by lock order
Part: deadlock by lock order
Clause: [thread.mutex.requirements.mutex.general], [thread.lock.algorithm], [thread.lock.scoped], [intro.progress]
After: 6.10
Levels: c++11

## Example
```cpp
#include <mutex>
#include <print>
#include <thread>

int main()
{
    int a {10};
    int b {20};
    std::mutex a_lock;
    std::mutex b_lock;
    //: Lock both mutexes at once, in either order you name them.
    std::thread first([&] {
        std::scoped_lock both {a_lock, b_lock};
        a -= 1;
        b += 1;
    });
    std::thread second([&] {
        std::scoped_lock both {b_lock, a_lock};
        b -= 2;
        a += 2;
    });
    //: Or lock one at a time, always in the same order.
    std::thread third([&] {
        std::lock_guard<std::mutex> one {a_lock};
        std::lock_guard<std::mutex> two {b_lock};
        a += b;
    });
    first.join();
    second.join();
    third.join();
    std::println("{}", a + b > 0);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <mutex>
#include <thread>

int main()
{
    int total {0};
    std::mutex a;
    std::mutex b;
    std::thread first([&] {
        std::lock_guard<std::mutex> one {a};
        std::lock_guard<std::mutex> two {b};
        total += 1;
    });
    first.join();
    std::thread second([&] {
        std::lock_guard<std::mutex> one {b};
        std::lock_guard<std::mutex> two {a};
        total += 2;
    });
    second.join();
    std::printf("%d\n", total);
}
```
Answer: c++11..c++23 defined
Flags: -pthread

## Verdict 2
```cpp
#include <cstdio>
#include <mutex>
#include <thread>

int main()
{
    int total {0};
    std::mutex a;
    std::mutex b;
    std::thread first([&] {
        std::unique_lock<std::mutex> one {a, std::defer_lock};
        std::unique_lock<std::mutex> two {b, std::defer_lock};
        std::lock(one, two);
        total += 1;
    });
    std::thread second([&] {
        std::unique_lock<std::mutex> one {b, std::defer_lock};
        std::unique_lock<std::mutex> two {a, std::defer_lock};
        std::lock(one, two);
        total += 2;
    });
    first.join();
    second.join();
    std::printf("%d\n", total);
}
```
Answer: c++11..c++23 defined
Flags: -pthread

## Alone 1
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n balances and m transfers, and runs each transfer in its own thread. Each account has its own std::mutex. A transfer holds the mutexes of both its accounts while it moves the amount. Print the balances after all transfers.
Input: line 1, n and m; line 2, the n balances; then m lines, each from, to and amount.
Output: one line, the n balances in order, separated by spaces.
Limits: 2 ≤ n ≤ 8; 1 ≤ m ≤ 16; 0 ≤ from, to < n; from ≠ to; every balance and amount between 0 and 1000.
### Examples
```in
3 2
10 20 30
0 1 5
1 2 7
```
```out
5 18 37
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int m {0};
    std::cin >> n >> m;
    std::vector<long long> balance(n, 0);
    for (long long& b : balance) {
        std::cin >> b;
    }
    std::vector<std::mutex> lock(n);
    std::span<long long> money {balance};
    std::span<std::mutex> locks {lock};
    std::vector<std::thread> workers;
    for (int t {0}; t < m; ++t) {
        int from {0};
        int to {0};
        long long amount {0};
        std::cin >> from >> to >> amount;
        workers.emplace_back([from, to, amount, money, locks] {
            std::scoped_lock both {locks[from], locks[to]};
            money[from] -= amount;
            money[to] += amount;
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", balance[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int m {0};
    std::cin >> n >> m;
    std::vector<long long> balance(n, 0);
    for (long long& b : balance) {
        std::cin >> b;
    }
    std::vector<std::mutex> lock(n);
    std::span<long long> money {balance};
    std::span<std::mutex> locks {lock};
    std::vector<std::thread> workers;
    for (int t {0}; t < m; ++t) {
        int from {0};
        int to {0};
        long long amount {0};
        std::cin >> from >> to >> amount;
        workers.emplace_back([from, to, amount, money, locks] {
            std::lock_guard<std::mutex> one {locks[from]};
            std::lock_guard<std::mutex> two {locks[to]};
            money[from] -= amount;
            money[to] += amount;
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", balance[i]);
    }
    std::println();
}
```
### Tests
```in
2 1
0 0
1 0 1000
```
```in
8 16
1 2 3 4 5 6 7 8
0 1 1
1 2 1
2 3 1
3 4 1
4 5 1
5 6 1
6 7 1
0 7 1
1 0 2
2 1 2
3 2 2
4 3 2
5 4 2
6 5 2
7 6 2
7 0 2
```
```in
3 3
100 100 100
0 1 10
1 2 10
2 0 10
```
### Witness
```in
2 2
50 50
0 1 10
1 0 20
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Exempt: CP.21
Write a program that reads x, y, w and r. Guard x and y with a std::mutex each. Start w threads that each take 1 from x and add 1 to y, holding both mutexes. Start r threads that each read x + y, holding both mutexes. Print x and y at the end, then each sum a reader read. Take the two mutexes one at a time, each with its own std::lock_guard.
Input: one line, x, y, w and r.
Output: line 1, x and y; then r lines, each a sum a reader read.
Limits: 0 ≤ x, y ≤ 1000; 0 ≤ w ≤ 8; 0 ≤ r ≤ 8.
### Examples
```in
5 0 2 0
```
```out
3 2
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    long long x {0};
    long long y {0};
    int w {0};
    int r {0};
    std::cin >> x >> y >> w >> r;
    std::mutex x_lock;
    std::mutex y_lock;
    std::vector<long long> seen(r, 0);
    long long* px {&x};
    long long* py {&y};
    std::mutex* lx {&x_lock};
    std::mutex* ly {&y_lock};
    std::span<long long> sums {seen};
    std::vector<std::thread> workers;
    for (int i {0}; i < w; ++i) {
        workers.emplace_back([px, py, lx, ly] {
            std::lock_guard<std::mutex> first {*lx};
            std::lock_guard<std::mutex> second {*ly};
            --*px;
            ++*py;
        });
    }
    for (int i {0}; i < r; ++i) {
        workers.emplace_back([i, px, py, lx, ly, sums] {
            std::lock_guard<std::mutex> first {*lx};
            std::lock_guard<std::mutex> second {*ly};
            sums[i] = *px + *py;
        });
    }
    for (std::thread& t : workers) {
        t.join();
    }
    std::println("{} {}", x, y);
    for (long long s : seen) {
        std::println("{}", s);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    long long x {0};
    long long y {0};
    int w {0};
    int r {0};
    std::cin >> x >> y >> w >> r;
    std::mutex x_lock;
    std::mutex y_lock;
    std::vector<long long> seen(r, 0);
    long long* px {&x};
    long long* py {&y};
    std::mutex* lx {&x_lock};
    std::mutex* ly {&y_lock};
    std::span<long long> sums {seen};
    std::vector<std::thread> workers;
    for (int i {0}; i < w; ++i) {
        workers.emplace_back([px, py, lx, ly] {
            std::lock_guard<std::mutex> first {*lx};
            std::lock_guard<std::mutex> second {*ly};
            --*px;
            ++*py;
        });
    }
    for (int i {0}; i < r; ++i) {
        workers.emplace_back([i, px, py, lx, ly, sums] {
            std::lock_guard<std::mutex> first {*ly};
            std::lock_guard<std::mutex> second {*lx};
            sums[i] = *px + *py;
        });
    }
    for (std::thread& t : workers) {
        t.join();
    }
    std::println("{} {}", x, y);
    for (long long s : seen) {
        std::println("{}", s);
    }
}
```
### Tests
```in
0 0 0 0
```
```in
1000 1000 8 8
```
```in
3 4 0 2
```
### Witness
```in
10 10 1 1
```
