# 7.37 CP.8: volatile does not synchronize
Part: CP.8 Don't try to use volatile for synchronization
Clause: C++ Core Guidelines CP.8, [intro.races], [dcl.type.cv], [atomics.types.generic]
After: 6.04
Levels: c++11

## Scan
Rule: CP.8
Pattern: /(?<=\bvolatile\s+(?:[\w:]+\s+)*?(\w+)\s*[={;[][\s\S]*?)(?:(?:\+\+|--)\s*\1\b|\b\1\s*(?:\+\+|--|(?:[-+*\/%&|^]|<<|>>)=))/
### Bad
```cpp
struct Pool {
    int id {0};
};

constexpr int max_slots = 8;
Pool pool[max_slots + 1];

volatile int free_slots = max_slots;

Pool* use()
{
    if (int n = free_slots--) return &pool[n];
    return nullptr;
}
```
### Good
```cpp
#include <atomic>

struct Pool {
    int id {0};
};

constexpr int max_slots = 8;
Pool pool[max_slots + 1];

std::atomic<int> free_slots = max_slots;

Pool* use()
{
    if (int n = free_slots--) return &pool[n];
    return nullptr;
}
```

## Example
```cpp
#include <atomic>
#include <print>
#include <thread>

int main()
{
    //: Make the shared counter atomic, never volatile.
    std::atomic<int> count {0};
    //: Let two threads add to it at once.
    auto add = [&count] {
        for (int i {0}; i < 1000; ++i) {
            ++count;
        }
    };
    std::thread a {add};
    std::thread b {add};
    //: Join both threads, then read the total.
    a.join();
    b.join();
    std::println("{}", count.load());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <thread>

int main()
{
    volatile int count {0};
    auto add = [&count] {
        for (int i {0}; i < 1000; ++i) {
            ++count;
        }
    };
    std::thread a {add};
    std::thread b {add};
    a.join();
    b.join();
    std::printf("%d\n", count);
}
```
Answer: c++11..c++23 undefined sanitizer
Sanitizer: thread
Flags: -pthread

## Verdict 2
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    std::atomic<int> count {0};
    std::thread a {[&] {
        for (int i {0}; i < 1000; ++i) {
            ++count;
        }
    }};
    for (int i {0}; i < 1000; ++i) {
        ++count;
    }
    a.join();
    std::printf("%d\n", count.load());
}
```
Answer: c++11..c++23 defined
Sanitizer: thread
Flags: -pthread

## Alone 1
Form: run
Flags: -pthread
Write a program that reads n whole numbers and counts the even ones in a second thread.
Input: one line, n, then a line of n whole numbers.
Output: one line, how many of the numbers are even. The main thread prints it after the second thread ends.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
4
2 7 -4 9
```
```out
2
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    int evens {0};
    std::thread counter {[&] {
        for (int x : v) {
            if (x % 2 == 0) {
                ++evens;
            }
        }
    }};
    counter.join();
    std::cout << evens << '\n';
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    volatile int evens {0};
    std::thread counter {[&] {
        for (int x : v) {
            if (x % 2 == 0) {
                ++evens;
            }
        }
    }};
    counter.join();
    std::cout << evens << '\n';
}
```
### Tests
```in
1
7
```
```in
1
0
```
```in
5
-1000 -3 1000 6 11
```
```in
3
2 4 6
```
### Witness
```cpp
#include <atomic>

struct Pool {
    int id {0};
};

constexpr int max_slots {8};
Pool pool[max_slots + 1];

std::atomic<int> free_slots {max_slots};

Pool* use()
{
    int n {free_slots--};
    if (n > 0) {
        return &pool[n];
    }
    return nullptr;
}
```

## Alone 2
Form: run
Flags: -pthread
Write a program that reads n whole numbers and adds them up in two threads at once.
Input: one line, n, then a line of n whole numbers.
Output: one line, the sum. One thread adds the numbers at even positions, the other those at odd positions, both into one total.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
3
5 -2 10
```
```out
13
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <mutex>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    int total {0};
    std::mutex m {};
    auto add = [&](std::size_t first) {
        for (std::size_t i {first}; i < v.size(); i += 2) {
            std::lock_guard<std::mutex> hold {m};
            total += v[i];
        }
    };
    std::thread a {add, 0};
    std::thread b {add, 1};
    a.join();
    b.join();
    std::cout << total << '\n';
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <mutex>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    volatile int total {0};
    std::mutex m {};
    auto add = [&](std::size_t first) {
        for (std::size_t i {first}; i < v.size(); i += 2) {
            std::lock_guard<std::mutex> hold {m};
            total += v[i];
        }
    };
    std::thread a {add, 0};
    std::thread b {add, 1};
    a.join();
    b.join();
    std::cout << total << '\n';
}
```
### Tests
```in
1
-1000
```
```in
2
1000 1000
```
```in
6
1 2 3 4 5 6
```
```in
5
-7 0 7 -1 1
```
### Witness
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    std::atomic<int> count {0};
    std::thread a {[&] {
        for (int i {0}; i < 1000; ++i) {
            ++count;
        }
    }};
    for (int i {0}; i < 1000; ++i) {
        ++count;
    }
    a.join();
    std::printf("%d\n", count.load());
}
```
