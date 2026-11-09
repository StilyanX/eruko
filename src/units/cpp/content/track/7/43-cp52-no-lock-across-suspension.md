# 7.43 Release every lock before a coroutine suspends
Part: CP.52 Do not hold locks or other synchronization primitives across suspension points
Clause: C++ Core Guidelines CP.52, [dcl.fct.def.coroutine], [expr.yield], [thread.lock.guard], [thread.mutex.requirements.mutex.general], [structure.specifications]
After: none
Levels: c++23

## Scan
Rule: CP.52
Pattern: /(?<!=\s*(?:std::\s*)?)(?<!::\s*)\b(?:std::\s*)?(?:lock_guard|unique_lock|scoped_lock|shared_lock)(?=\s*<|\s+[A-Za-z_])(?:[^;{}]|\{[^{}]*\})*;(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)*\bco_(?:await|yield)\b/
### Bad
```cpp
std::mutex g_lock;

std::future<void> Class::do_something()
{
    std::lock_guard<std::mutex> guard(g_lock);
    co_await something(); // DANGER: coroutine has suspended
                          // execution while holding a lock
    co_await somethingElse();
}
```
### Good
```cpp
std::mutex g_lock;

std::future<void> Class::do_something()
{
    {
        std::lock_guard<std::mutex> guard(g_lock);
        // modify data protected by lock
    }
    co_await something(); // OK: lock has been released
                          // before coroutine suspends
    co_await somethingElse();
}
```

## Example
```cpp
#include <generator>
#include <mutex>
#include <print>

//: Keep a total that a mutex guards.
std::mutex total_lock;
int total {0};

std::generator<int> running(int n)
{
    for (int i {1}; i <= n; ++i) {
        //: Change the total in an inner block that holds the lock.
        int now {0};
        {
            std::lock_guard<std::mutex> guard {total_lock};
            total += i;
            now = total;
        }
        //: Yield after the block ends, so the lock is released.
        co_yield now;
    }
}

int main()
{
    //: Lock the same mutex while the coroutine is suspended.
    for (int t : running(3)) {
        std::lock_guard<std::mutex> guard {total_lock};
        std::println("{} {}", t, total);
    }
}
```

## Verdict 1
```cpp
#include <generator>
#include <mutex>
#include <print>

std::mutex count_lock;
int count {0};

std::generator<int> counts(int n)
{
    std::lock_guard<std::mutex> guard {count_lock};
    for (int i {0}; i < n; ++i) {
        ++count;
        co_yield count;
    }
}

int main()
{
    for (int c : counts(2)) {
        bool got {count_lock.try_lock()};
        std::println("{} {}", c, got);
    }
}
```
Answer: c++23 undefined stored
Derivation 1: guard lives until the coroutine body ends, so at each co_yield main's thread still owns count_lock, and try_lock on a std::mutex the caller owns breaks its precondition ([thread.mutex.requirements.mutex.general]), which is undefined ([structure.specifications]).
Derivation 2: a suspended coroutine keeps its locals alive ([dcl.fct.def.coroutine]); the one thread locked the mutex through guard and calls try_lock on it again while guard lives, and a std::mutex requires that the calling thread not own it, so the behaviour is undefined.

## Verdict 2
```cpp
#include <generator>
#include <mutex>
#include <print>

std::mutex count_lock;
int count {0};

std::generator<int> counts(int n)
{
    for (int i {0}; i < n; ++i) {
        int now {0};
        {
            std::lock_guard<std::mutex> guard {count_lock};
            ++count;
            now = count;
        }
        co_yield now;
    }
}

int main()
{
    for (int c : counts(2)) {
        std::lock_guard<std::mutex> guard {count_lock};
        count += 10;
        std::println("{} {}", c, count);
    }
}
```
Answer: c++23 defined

## Alone 1
Form: run
Write a program that reads n numbers and prints the running total after each one.
A function `running(std::vector<int> v)` returns a std::generator<int> that makes the totals.
For each number it adds the number to a global int total under a global std::mutex, then yields the new total.
Input: the first line holds n, the second line holds the n numbers.
Output: n lines, the running total after each number.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
4 -1 7
```
```out
4
3
10
```
### Reference
```cpp
#include <generator>
#include <iostream>
#include <mutex>
#include <print>
#include <vector>

std::mutex total_lock;
int total {0};

std::generator<int> running(std::vector<int> v)
{
    for (int x : v) {
        int now {0};
        {
            std::lock_guard<std::mutex> guard {total_lock};
            total += x;
            now = total;
        }
        co_yield now;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    for (int t : running(v)) {
        std::println("{}", t);
    }
}
```
### Wrong
```cpp
#include <generator>
#include <iostream>
#include <mutex>
#include <print>
#include <vector>

std::mutex total_lock;
int total {0};

std::generator<int> running(std::vector<int> v)
{
    for (int x : v) {
        int now {0};
        std::lock_guard<std::mutex> guard {total_lock};
        total += x;
        now = total;
        co_yield now;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    for (int t : running(v)) {
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
20
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000 -1000
```
```in
4
0 5 -5 0
```
### Witness
```cpp
#include <generator>
#include <mutex>

std::mutex g_lock;
int shared {0};

std::generator<int> do_something()
{
    {
        std::lock_guard<std::mutex> guard(g_lock);
        ++shared;
    }
    co_yield shared;
    co_yield shared + 1;
}

int main()
{
    for (int x : do_something()) {
        shared += x;
    }
}
```

## Alone 2
Form: run
Write a program that reads n numbers into a global std::vector<int> guarded by a global std::mutex, then prints them through a generator.
A function `snapshot()` returns a std::generator<int>; it copies the global vector while it holds the mutex, then yields each number of the copy.
Input: the first line holds n, the second line holds the n numbers.
Output: n lines, the numbers in the order read.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
8 -2 5
```
```out
8
-2
5
```
### Reference
```cpp
#include <generator>
#include <iostream>
#include <mutex>
#include <print>
#include <vector>

std::mutex shared_lock;
std::vector<int> shared {};

std::generator<int> snapshot()
{
    std::vector<int> copy {};
    {
        std::scoped_lock guard {shared_lock};
        copy = shared;
    }
    for (int x : copy) {
        co_yield x;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::scoped_lock guard {shared_lock};
        shared.push_back(x);
    }
    for (int x : snapshot()) {
        std::println("{}", x);
    }
}
```
### Wrong
```cpp
#include <generator>
#include <iostream>
#include <mutex>
#include <print>
#include <vector>

std::mutex shared_lock;
std::vector<int> shared {};

std::generator<int> snapshot()
{
    std::vector<int> copy {};
    std::scoped_lock guard {shared_lock};
    copy = shared;
    for (int x : copy) {
        co_yield x;
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        std::scoped_lock guard {shared_lock};
        shared.push_back(x);
    }
    for (int x : snapshot()) {
        std::println("{}", x);
    }
}
```
### Tests
```in
1
0
```
```in
20
1 2 3 4 5 6 7 8 9 10 -1000 -999 -998 -997 -996 -995 -994 -993 -992 1000
```
```in
2
-5 -5
```
### Witness
```cpp
#include <generator>
#include <mutex>
#include <vector>

std::mutex g_lock;
std::vector<int> items {3, 4};

std::generator<int> do_something()
{
    std::vector<int> mine {};
    {
        std::scoped_lock guard {g_lock};
        mine = items;
    }
    for (int x : mine) {
        co_yield x;
    }
}

int main()
{
    for (int x : do_something()) {
        items.push_back(x);
    }
}
```
