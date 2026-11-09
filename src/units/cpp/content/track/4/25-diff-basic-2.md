# 4.25 A relaxed store no longer extends a release sequence
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.basic] ¶2
Clause: [diff.cpp17.basic], [intro.races], [atomics.order]
After: none
Levels: c++17

## Example
```cpp
#include <atomic>
#include <print>
#include <thread>

int main()
{
    int data {0};
    std::atomic<int> stage {0};
    std::thread writer([&] {
        //: Write the data, then move the flag on twice.
        data = 42;
        stage.store(1, std::memory_order_relaxed);
        //: Release on the store the reader waits for.
        stage.store(2, std::memory_order_release);
    });
    //: Acquire the value 2, then read the data.
    while (stage.load(std::memory_order_acquire) != 2) {
    }
    std::println("{}", data);
    writer.join();
}
```

## Verdict 1
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    int data {0};
    std::atomic<int> stage {0};
    std::thread writer([&] {
        data = 42;
        stage.store(1, std::memory_order_release);
        stage.store(2, std::memory_order_relaxed);
    });
    while (stage.load(std::memory_order_acquire) != 2) {
    }
    std::printf("%d\n", data);
    writer.join();
}
```
Answer:
- c++17: defined
- c++20..c++23: undefined stored
Flags: -pthread
Derivation 1: At c++20 [intro.races] puts only the release store and later read-modify-write operations in its release sequence, so the acquire load that reads 2 synchronizes with nothing and the read of data races with the write: undefined; at c++17 the same thread's relaxed store 2 was in the sequence.
Derivation 2: The relaxed store of 2 is not a read-modify-write, so by c++20 [intro.races] it heads no release sequence and joins none; no happens-before links data = 42 to the read of data, a data race; c++17 counted later stores by the same thread in the release sequence, which made the read ordered.

## Verdict 2
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    int data {0};
    std::atomic<int> stage {0};
    std::thread writer([&] {
        data = 42;
        stage.store(1, std::memory_order_release);
        stage.fetch_add(1, std::memory_order_relaxed);
    });
    while (stage.load(std::memory_order_acquire) != 2) {
    }
    std::printf("%d\n", data);
    writer.join();
}
```
Answer: c++17..c++23 defined
Flags: -pthread

## Alone 1
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: store relaxed
- 2: store release
- 3: load acquire
Write a program that reads n and prints n, handed from a second thread that writes it and then sets a flag to 1 and then to 2, where the first thread waits for the value 2.
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
    std::atomic<int> stage {0};
    std::thread writer([&] {
        data = n;
        stage.store(1, ORDER_1);
        stage.store(2, ORDER_2);
    });
    while (stage.load(ORDER_3) != 2) {
    }
    std::println("{}", data);
    writer.join();
}
```
### Wrong
Orders:
- 1: store relaxed
- 2: store relaxed
- 3: load acquire
### Tests
```in
0
```
```in
1000
```
### Witness
```in
7
```
