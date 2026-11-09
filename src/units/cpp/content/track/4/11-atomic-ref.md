# 4.11 Atomic access to a plain object
Part: `std::atomic_ref`
Clause: [atomics.ref.generic], [atomics.ref.int], [atomics.order], [intro.races]
After: none
Levels: c++20

## Example
```cpp
#include <atomic>
#include <print>
#include <thread>
#include <vector>

int main()
{
    //: Keep the counts in a plain vector of int.
    std::vector<int> hits(4, 0);
    //: Add to a count from two threads, each through an atomic_ref.
    auto count = [&hits] {
        for (int i {0}; i < 1000; ++i) {
            std::atomic_ref<int> cell {hits[i % 4]};
            cell.fetch_add(1);
        }
    };
    std::thread a {count};
    std::thread b {count};
    //: Join both threads, then read the counts as plain ints.
    a.join();
    b.join();
    std::println("{} {}", hits[0], hits[3]);
}
```

## Verdict 1
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    int total {0};
    std::atomic<int> step {0};
    std::thread a {[&] {
        std::atomic_ref<int> {total}.fetch_add(1);
        step.store(1, std::memory_order_relaxed);
    }};
    while (step.load(std::memory_order_relaxed) != 1) {
    }
    total = total + 1;
    a.join();
    std::printf("%d\n", total);
}
```
Answer: c++20..c++23 undefined sanitizer
Sanitizer: thread
Flags: -pthread

## Verdict 2
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    int total {0};
    auto add = [&total] {
        for (int i {0}; i < 100; ++i) {
            std::atomic_ref<int> {total}.fetch_add(1);
        }
    };
    std::thread a {add};
    std::thread b {add};
    a.join();
    b.join();
    std::printf("%d\n", total);
}
```
Answer: c++20..c++23 defined
Sanitizer: thread
Flags: -pthread

## Alone 1
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n and k, starts two threads, one testing the numbers 1 to n/2 and the other the numbers n/2 + 1 to n, adds 1 to one plain int counter both threads share for each number divisible by k, and prints the counter.
Input: one line, two integers n and k.
Output: one line, the counter.
Limits: 1 ≤ n ≤ 100000, 1 ≤ k ≤ 100000.
### Examples
```in
4 3
```
```out
1
```
### Reference
```cpp
#include <atomic>
#include <iostream>
#include <print>
#include <thread>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    int counter {0};
    auto test = [&counter, k](int from, int to) {
        for (int i {from}; i <= to; ++i) {
            if (i % k == 0) {
                std::atomic_ref<int> {counter}.fetch_add(1);
            }
        }
    };
    std::thread low {test, 1, n / 2};
    std::thread high {test, n / 2 + 1, n};
    low.join();
    high.join();
    std::println("{}", counter);
}
```
### Wrong
```cpp
#include <atomic>
#include <iostream>
#include <print>
#include <thread>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    int counter {0};
    auto test = [&counter, k](int from, int to) {
        for (int i {from}; i <= to; ++i) {
            if (i % k == 0) {
                ++counter;
            }
        }
    };
    std::thread low {test, 1, n / 2};
    std::thread high {test, n / 2 + 1, n};
    low.join();
    high.join();
    std::println("{}", counter);
}
```
### Tests
```in
100000 1
```
```in
10 2
```
```in
7 9
```
### Witness
```in
12 1
```

## Alone 2
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: store release
- 2: load acquire
Write a program that reads n, has a second thread write n into a plain int and then set a plain int flag to 1, waits in the first thread until the flag reads 1, and prints the plain int.
Input: one line, n.
Output: one line, n.
Limits: 0 ≤ n ≤ 1000.
### Examples
```in
5
```
```out
5
```
### Reference
```cpp
#include <atomic>
#include <iostream>
#include <print>
#include <thread>

int main()
{
    int n {0};
    std::cin >> n;
    int data {0};
    int flag {0};
    std::thread writer {[&] {
        data = n;
        std::atomic_ref<int> {flag}.store(1, ORDER_1);
    }};
    while (std::atomic_ref<int> {flag}.load(ORDER_2) != 1) {
    }
    std::println("{}", data);
    writer.join();
}
```
### Wrong
Orders:
- 1: store relaxed
- 2: load acquire
### Tests
```in
0
```
### Witness
```in
7
```
