# 6.05 The single total order of one atomic
Part: the single total order of one atomic
Clause: [intro.races], [atomics.order], [atomics.types.operations]
After: 6.04
Levels: c++11

## Example
```cpp
#include <atomic>
#include <functional>
#include <print>
#include <thread>

//: Add one k times; each fetch_add is one step on the atomic.
void add(std::atomic<int>& count, int k)
{
    for (int i {0}; i < k; ++i) {
        count.fetch_add(1);
    }
}

int main()
{
    //: Keep one atomic counter; all its changes fall in one order.
    std::atomic<int> count {0};
    //: Add from two threads; each add reads the value just before.
    std::thread a {add, std::ref(count), 1000};
    std::thread b {add, std::ref(count), 1000};
    a.join();
    b.join();
    //: No add is lost, so the count is 2000.
    std::println("{}", count.load());
}
```

## Verdict 1
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    std::atomic<int> x {0};
    std::thread w {[&] {
        x.store(1);
        x.store(2);
    }};
    int r1 {x.load()};
    int r2 {x.load()};
    w.join();
    std::cout << r1 << ' ' << r2 << '\n';
}
```
Answer: c++11..c++23 unspecified
Flags: -pthread
```out
0 0
```
```out
0 1
```
```out
0 2
```
```out
1 1
```
```out
1 2
```
```out
2 2
```

## Verdict 2
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>

void bump(std::atomic<int>& x)
{
    x.store(x.load() + 1);
}

int main()
{
    std::atomic<int> x {0};
    std::thread a {bump, std::ref(x)};
    std::thread b {bump, std::ref(x)};
    a.join();
    b.join();
    std::cout << x.load() << '\n';
}
```
Answer: c++11..c++23 unspecified
Flags: -pthread
```out
1
```
```out
2
```

## Alone 1
Form: run
Flags: -pthread
Write a program that reads t and k. Start t threads; each adds 1 to one shared counter k times. Print the counter after all the threads end.
Input: one line, t and k.
Output: one line, the counter.
Limits: 1 ≤ t ≤ 8; 0 ≤ k ≤ 100000.
### Examples
```in
1 5
```
```out
5
```
### Reference
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void add(std::atomic<long long>& count, int k)
{
    for (int i {0}; i < k; ++i) {
        count.fetch_add(1);
    }
}

int main()
{
    int t {0};
    int k {0};
    std::cin >> t >> k;
    std::atomic<long long> count {0};
    std::vector<std::thread> pool {};
    for (int i {0}; i < t; ++i) {
        pool.emplace_back(add, std::ref(count), k);
    }
    for (std::thread& th : pool) {
        th.join();
    }
    std::cout << count.load() << '\n';
}
```
### Wrong
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void add(std::atomic<long long>& count, int k)
{
    for (int i {0}; i < k; ++i) {
        count.store(count.load() + 1);
    }
}

int main()
{
    int t {0};
    int k {0};
    std::cin >> t >> k;
    std::atomic<long long> count {0};
    std::vector<std::thread> pool {};
    for (int i {0}; i < t; ++i) {
        pool.emplace_back(add, std::ref(count), k);
    }
    for (std::thread& th : pool) {
        th.join();
    }
    std::cout << count.load() << '\n';
}
```
### Tests
```in
1 0
```
```in
2 1
```
```in
4 3
```
```in
8 100000
```
### Witness
```in
4 100000
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads t and k. Start t threads, with indexes 0 to t − 1. Each thread takes k tickets, one at a time, from one shared counter that starts at 0. A thread that takes ticket m writes its own index into place m of a vector of t · k numbers. After all the threads end, print how many places hold each index.
Input: one line, t and k.
Output: one line, t counts separated by spaces, for index 0 to t − 1.
Limits: 1 ≤ t ≤ 8; 0 ≤ k ≤ 20000.
### Examples
```in
1 3
```
```out
3
```
### Reference
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void take(std::atomic<int>& next, std::vector<int>& slot,
          int me, int k)
{
    for (int i {0}; i < k; ++i) {
        int m {next.fetch_add(1)};
        slot[m] = me;
    }
}

int main()
{
    int t {0};
    int k {0};
    std::cin >> t >> k;
    std::atomic<int> next {0};
    std::vector<int> slot(t * k, -1);
    std::vector<std::thread> pool {};
    for (int i {0}; i < t; ++i) {
        pool.emplace_back(take, std::ref(next), std::ref(slot),
                          i, k);
    }
    for (std::thread& th : pool) {
        th.join();
    }
    std::vector<int> held(t, 0);
    for (int s : slot) {
        if (s >= 0) {
            ++held[s];
        }
    }
    for (int h : held) {
        std::cout << h << ' ';
    }
    std::cout << '\n';
}
```
### Wrong
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void take(std::atomic<int>& next, std::vector<int>& slot,
          int me, int k)
{
    for (int i {0}; i < k; ++i) {
        int m {next.load()};
        next.store(m + 1);
        slot[m] = me;
    }
}

int main()
{
    int t {0};
    int k {0};
    std::cin >> t >> k;
    std::atomic<int> next {0};
    std::vector<int> slot(t * k, -1);
    std::vector<std::thread> pool {};
    for (int i {0}; i < t; ++i) {
        pool.emplace_back(take, std::ref(next), std::ref(slot),
                          i, k);
    }
    for (std::thread& th : pool) {
        th.join();
    }
    std::vector<int> held(t, 0);
    for (int s : slot) {
        if (s >= 0) {
            ++held[s];
        }
    }
    for (int h : held) {
        std::cout << h << ' ';
    }
    std::cout << '\n';
}
```
### Tests
```in
1 0
```
```in
2 1
```
```in
3 5
```
```in
8 20000
```
### Witness
```in
4 20000
```
