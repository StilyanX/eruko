# 7.38 CP.20: lock a mutex through a guard object
Part: CP.20 Use RAII, never plain lock()/unlock()
Clause: C++ Core Guidelines CP.20, [thread.mutex.requirements.mutex], [thread.lock.guard], [thread.lock.unique]
After: 6.10
Levels: c++11

## Scan
Rule: CP.20
Pattern: /(?<=\b(?:recursive_|timed_|recursive_timed_|shared_|shared_timed_)?mutex\s*&?\s*(\w+)\b[\s\S]*?)\b\1\s*(?:\.|->)\s*(?:lock|unlock)\s*\(\s*\)/
### Bad
```cpp
#include <mutex>

std::mutex mtx;

void do_stuff()
{
    mtx.lock();
    mtx.unlock();
}
```
### Good
```cpp
#include <mutex>

std::mutex mtx;

void do_stuff()
{
    std::unique_lock<std::mutex> lck {mtx};
}
```

## Example
```cpp
#include <mutex>
#include <print>
#include <thread>

std::mutex mtx;
int total {0};

void add(int x)
{
    //: Lock the mutex by making a guard object.
    std::lock_guard<std::mutex> hold {mtx};
    //: Leave early, and the guard still unlocks.
    if (x < 0) {
        return;
    }
    total += x;
}

int main()
{
    //: Let two threads add under the one mutex.
    std::thread a {add, 5};
    std::thread b {add, -2};
    a.join();
    b.join();
    std::println("{}", total);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <mutex>
#include <thread>

std::mutex mtx;
int calls {0};
int total {0};

void add(int x)
{
    mtx.lock();
    ++calls;
    mtx.unlock();
    total += x;
}

int main()
{
    std::thread a {add, 5};
    std::thread b {add, 7};
    a.join();
    b.join();
    std::printf("%d %d\n", calls, total);
}
```
Answer: c++11..c++23 undefined sanitizer
Sanitizer: thread
Flags: -pthread

## Verdict 2
```cpp
#include <cstdio>
#include <mutex>

std::mutex mtx;
int total {0};

void add(int x)
{
    std::lock_guard<std::mutex> hold {mtx};
    if (x < 0) {
        throw x;
    }
    total += x;
}

int main()
{
    try {
        add(5);
        add(-2);
    } catch (int) {
    }
    add(4);
    std::printf("%d\n", total);
}
```
Answer: c++11..c++23 defined
Sanitizer: thread
Flags: -pthread

## Alone 1
Form: run
Flags: -pthread
Write a program that reads n whole numbers and adds up the ones that are not negative, in two threads.
Input: one line, n, then a line of n whole numbers.
Output: one line, the sum of the numbers that are 0 or more. One thread takes the first half of the list, the other the rest, both into one total.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
4
3 -1 4 -5
```
```out
7
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

std::mutex mtx;
int total {0};

void add(int x)
{
    std::lock_guard<std::mutex> hold {mtx};
    if (x < 0) {
        return;
    }
    total += x;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::size_t half {v.size() / 2};
    std::thread a {[&] {
        for (std::size_t i {0}; i < half; ++i) {
            add(v[i]);
        }
    }};
    for (std::size_t i {half}; i < v.size(); ++i) {
        add(v[i]);
    }
    a.join();
    std::println("{}", total);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

std::mutex mtx;
int total {0};

void add(int x)
{
    mtx.lock();
    if (x < 0) {
        mtx.unlock();
        return;
    }
    total += x;
    mtx.unlock();
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::size_t half {v.size() / 2};
    std::thread a {[&] {
        for (std::size_t i {0}; i < half; ++i) {
            add(v[i]);
        }
    }};
    for (std::size_t i {half}; i < v.size(); ++i) {
        add(v[i]);
    }
    a.join();
    std::println("{}", total);
}
```
### Tests
```in
1
-1000
```
```in
1
1000
```
```in
6
-1 -2 -3 10 20 30
```
```in
5
0 7 -7 1000 -1000
```
### Witness
```cpp
#include <mutex>

std::mutex mtx;

void do_stuff()
{
    std::lock_guard<std::mutex> lck {mtx};
}
```

## Alone 2
Form: run
Flags: -pthread
Write a program that reads n whole numbers and finds the largest in two threads that share one best value.
Input: one line, n, then a line of n whole numbers.
Output: one line, the largest number. One thread offers the numbers at even positions, the other those at odd positions, each to an object that keeps the best value and its own mutex.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
3
4 9 -2
```
```out
9
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

struct Best {
    std::mutex m {};
    int value {-1000};

    void offer(int x)
    {
        std::lock_guard<std::mutex> hold {m};
        if (x > value) {
            value = x;
        }
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    Best best {};
    auto scan = [&](std::size_t first) {
        for (std::size_t i {first}; i < v.size(); i += 2) {
            best.offer(v[i]);
        }
    };
    std::thread a {scan, 0};
    std::thread b {scan, 1};
    a.join();
    b.join();
    std::println("{}", best.value);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

struct Best {
    std::mutex m {};
    int value {-1000};

    void offer(int x)
    {
        m.lock();
        if (x > value) {
            value = x;
        }
        m.unlock();
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    Best best {};
    auto scan = [&](std::size_t first) {
        for (std::size_t i {first}; i < v.size(); i += 2) {
            best.offer(v[i]);
        }
    };
    std::thread a {scan, 0};
    std::thread b {scan, 1};
    a.join();
    b.join();
    std::println("{}", best.value);
}
```
### Tests
```in
1
-1000
```
```in
2
1000 -1000
```
```in
5
-5 -4 -3 -2 -1
```
```in
6
7 7 3 8 8 1
```
### Witness
```cpp
#include <cstdio>
#include <mutex>

std::mutex mtx;
int total {0};

void add(int x)
{
    std::lock_guard<std::mutex> hold {mtx};
    if (x < 0) {
        return;
    }
    total += x;
}

int main()
{
    add(5);
    add(-2);
    std::printf("%d\n", total);
}
```
