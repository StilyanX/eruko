# 7.39 CP.21: take several mutexes in one step
Part: CP.21 Use std::lock() or std::scoped_lock to acquire multiple mutexes
Clause: C++ Core Guidelines CP.21, [thread.lock.scoped], [thread.lock.algorithm], [thread.lock.guard]
After: 6.10
Levels: c++17

## Scan
Rule: CP.21
Pattern: /\b(?:lock_guard|unique_lock|scoped_lock)\b[^;{}()]*[({]\s*([\w.>-]+)\s*[)}]\s*;[^{}]*?\b(?:lock_guard|unique_lock|scoped_lock)\b[^;{}()]*[({]\s*(?!\1\s*[)}])[\w.>-]+\s*[)}]\s*;/
### Bad
```cpp
#include <mutex>

std::mutex m1;
std::mutex m2;

void thread1()
{
    std::lock_guard<std::mutex> lck1(m1);
    std::lock_guard<std::mutex> lck2(m2);
}

void thread2()
{
    std::lock_guard<std::mutex> lck2(m2);
    std::lock_guard<std::mutex> lck1(m1);
}
```
### Good
```cpp
#include <mutex>

std::mutex m1;
std::mutex m2;

void thread1()
{
    std::lock(m1, m2);
    std::lock_guard<std::mutex> lck1(m1, std::adopt_lock);
    std::lock_guard<std::mutex> lck2(m2, std::adopt_lock);
}

void thread2()
{
    std::lock(m2, m1);
    std::lock_guard<std::mutex> lck2(m2, std::adopt_lock);
    std::lock_guard<std::mutex> lck1(m1, std::adopt_lock);
}
```

## Example
```cpp
#include <mutex>
#include <print>
#include <thread>

std::mutex left_m;
std::mutex right_m;
int left {10};
int right {10};

int main()
{
    //: Take both mutexes in one step with std::scoped_lock.
    std::thread a {[] {
        std::scoped_lock both {left_m, right_m};
        --left;
        ++right;
    }};
    //: Name them in any order, and no deadlock follows.
    std::thread b {[] {
        std::scoped_lock both {right_m, left_m};
        --right;
        ++left;
    }};
    a.join();
    b.join();
    std::println("{} {}", left, right);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <mutex>
#include <thread>

std::mutex m1;
std::mutex m2;
int total {0};

void add(int x)
{
    std::scoped_lock both {m2, m1};
    total += x;
}

int main()
{
    std::thread a {[] {
        std::scoped_lock both {m1, m2};
        total += 1;
    }};
    std::thread b {add, 2};
    a.join();
    b.join();
    std::printf("%d\n", total);
}
```
Answer: c++17..c++23 defined
Sanitizer: thread
Flags: -pthread

## Verdict 2
```cpp
#include <cstdio>
#include <mutex>

std::mutex m1;
std::mutex m2;
int total {0};

int main()
{
    std::lock_guard<std::mutex> both {m1, m2};
    total += 1;
    std::printf("%d\n", total);
}
```
Answer: c++17..c++23 ill-formed 10

## Alone 1
Form: run
Flags: -pthread
Write a program that moves tokens between two piles in two threads.
Input: one line, four whole numbers: the sizes a and b of the left and right piles, then k and j.
Output: one line, the sizes of the left and right piles at the end. One thread moves one token from left to right k times; the other moves one token from right to left j times. Each pile has its own mutex, and each move holds both.
Limits: 0 ≤ a, b, k, j ≤ 1000.
### Examples
```in
5 5 3 1
```
```out
3 7
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <thread>

std::mutex left_m;
std::mutex right_m;
int left {0};
int right {0};

int main()
{
    int k {0};
    int j {0};
    std::cin >> left >> right >> k >> j;
    std::thread a {[k] {
        for (int i {0}; i < k; ++i) {
            std::scoped_lock both {left_m, right_m};
            --left;
            ++right;
        }
    }};
    for (int i {0}; i < j; ++i) {
        std::scoped_lock both {right_m, left_m};
        --right;
        ++left;
    }
    a.join();
    std::println("{} {}", left, right);
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <thread>

std::mutex left_m;
std::mutex right_m;
int left {0};
int right {0};

int main()
{
    int k {0};
    int j {0};
    std::cin >> left >> right >> k >> j;
    std::thread a {[k] {
        for (int i {0}; i < k; ++i) {
            std::scoped_lock both {left_m, right_m};
            --left;
            ++right;
        }
    }};
    for (int i {0}; i < j; ++i) {
        std::lock_guard<std::mutex> hold_left {left_m};
        std::lock_guard<std::mutex> hold_right {right_m};
        --right;
        ++left;
    }
    a.join();
    std::println("{} {}", left, right);
}
```
### Tests
```in
0 0 0 0
```
```in
1000 1000 1000 1000
```
```in
0 10 0 10
```
```in
7 2 1000 3
```
### Witness
```cpp
#include <mutex>

std::mutex m1;
std::mutex m2;

void thread1()
{
    std::scoped_lock<std::mutex, std::mutex> lck1(m1, m2);
}

void thread2()
{
    std::scoped_lock<std::mutex, std::mutex> lck2(m2, m1);
}
```

## Alone 2
Form: run
Flags: -pthread
Write a program that moves tokens from one pile to another in a second thread while the main thread checks the total.
Input: one line, four whole numbers: the sizes a and b of the left and right piles, then k and j.
Output: one line, the sizes of the left and right piles at the end, then how many of the main thread's j checks saw a total other than a + b. The second thread moves one token from left to right k times. Each pile has its own mutex; each move and each check holds both.
Limits: 0 ≤ a, b, k, j ≤ 1000.
### Examples
```in
4 0 2 3
```
```out
2 2 0
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <thread>

std::mutex left_m;
std::mutex right_m;
int left {0};
int right {0};

int main()
{
    int k {0};
    int j {0};
    std::cin >> left >> right >> k >> j;
    int start {left + right};
    std::thread mover {[k] {
        for (int i {0}; i < k; ++i) {
            std::scoped_lock both {left_m, right_m};
            --left;
            ++right;
        }
    }};
    int odd {0};
    for (int i {0}; i < j; ++i) {
        std::lock(left_m, right_m);
        std::lock_guard l {left_m, std::adopt_lock};
        std::lock_guard r {right_m, std::adopt_lock};
        if (left + right != start) {
            ++odd;
        }
    }
    mover.join();
    std::println("{} {} {}", left, right, odd);
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <thread>

std::mutex left_m;
std::mutex right_m;
int left {0};
int right {0};

int main()
{
    int k {0};
    int j {0};
    std::cin >> left >> right >> k >> j;
    int start {left + right};
    std::thread mover {[k] {
        for (int i {0}; i < k; ++i) {
            std::scoped_lock both {left_m, right_m};
            --left;
            ++right;
        }
    }};
    int odd {0};
    for (int i {0}; i < j; ++i) {
        std::lock_guard<std::mutex> l {left_m};
        std::lock_guard<std::mutex> r {right_m};
        if (left + right != start) {
            ++odd;
        }
    }
    mover.join();
    std::println("{} {} {}", left, right, odd);
}
```
### Tests
```in
0 0 0 0
```
```in
1000 1000 1000 1000
```
```in
5 9 0 1000
```
```in
1000 0 1000 1
```
### Witness
```cpp
#include <mutex>

std::mutex m1;
std::mutex m2;
int total {0};

int main()
{
    std::scoped_lock both {m1, m2};
    total += 1;
}
```
