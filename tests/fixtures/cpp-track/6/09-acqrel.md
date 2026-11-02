# 6.09 Acquire and release
Part: acquire and release
Clause: [atomics.order], [intro.races]
After: none
Levels: c++23

## Example
```cpp
#include <atomic>
#include <print>
#include <thread>

int main()
{
    //: Keep the data plain and the flag atomic.
    int data {0};
    std::atomic<bool> ready {false};
    //: Write the data, then release the flag.
    std::thread writer([&] {
        data = 42;
        ready.store(true, std::memory_order_release);
    });
    //: Acquire the flag, then read the data.
    while (!ready.load(std::memory_order_acquire)) {
    }
    std::println("{}", data);
    writer.join();
}
```

## Verdict 1
```cpp
#include <atomic>
#include <print>
#include <thread>

int main()
{
    int data {0};
    std::atomic<bool> ready {false};
    std::thread writer([&] {
        data = 42;
        ready.store(true, std::memory_order_release);
    });
    while (!ready.load(std::memory_order_acquire)) {
    }
    std::println("{}", data);
    writer.join();
}
```
Answer: c++23 defined
Flags: -pthread

## Alone 1
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: store release
- 2: load acquire
Write a program that reads n and prints n, handed from a second thread through a flag.
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
    std::atomic<bool> ready {false};
    std::thread writer([&] {
        data = n;
        ready.store(true, ORDER_1);
    });
    while (!ready.load(ORDER_2)) {
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
