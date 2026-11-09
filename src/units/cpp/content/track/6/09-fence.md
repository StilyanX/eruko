# 6.09 A fence
Part: a fence
Clause: [atomics.fences], [atomics.order], [intro.races]
After: 6.07, 6.08
Levels: c++11

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
    //: Write, fence with release, then raise the flag relaxed.
    std::thread writer {[&] {
        data = 42;
        std::atomic_thread_fence(std::memory_order_release);
        ready.store(true, std::memory_order_relaxed);
    }};
    //: See the flag relaxed, then fence with acquire.
    while (!ready.load(std::memory_order_relaxed)) {
    }
    std::atomic_thread_fence(std::memory_order_acquire);
    //: Read the data: the two fences order it after the write.
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
    std::atomic<bool> ready {false};
    std::thread writer {[&] {
        data = 42;
        std::atomic_thread_fence(std::memory_order_release);
        ready.store(true, std::memory_order_relaxed);
    }};
    while (!ready.load(std::memory_order_relaxed)) {
    }
    std::atomic_thread_fence(std::memory_order_acquire);
    std::printf("%d\n", data);
    writer.join();
}
```
Answer: c++11..c++23 defined
Flags: -pthread

## Verdict 2
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    std::atomic<int> data {0};
    std::atomic<bool> ready {false};
    std::thread writer {[&] {
        data.store(42, std::memory_order_relaxed);
        std::atomic_thread_fence(std::memory_order_release);
        ready.store(true, std::memory_order_relaxed);
    }};
    std::atomic_thread_fence(std::memory_order_acquire);
    while (!ready.load(std::memory_order_relaxed)) {
    }
    std::printf("%d\n", data.load(std::memory_order_relaxed));
    writer.join();
}
```
Answer: c++11..c++23 unspecified
Flags: -pthread
```out
0
```
```out
42
```

## Alone 1
Form: orders
Settled: stored
Flags: -pthread
Orders:
- 1: fence release
- 2: fence acquire
Forbidden: 1, 2
Derivation 1: The flag's store and load are relaxed, so by [atomics.fences] only a release fence before the store and an acquire fence after the load make the writer's store of n happen before main's load; with either fence relaxed nothing synchronizes, and by [intro.races] the relaxed load may read the 0 that data held first.
Derivation 2: Without the release fence in the writer, or without the acquire fence in main, no fence pair of [atomics.fences] exists; data's modification order is 0 then n, and a relaxed load not ordered after the store of n may take either, so 0 is a permitted result.
Write a program that reads n and prints it, handed from a second thread.
The second thread stores n in an atomic int with a relaxed store, fences, then raises a flag with a relaxed store.
Main waits for the flag with relaxed loads, fences, then reads the int with a relaxed load and prints it.
Type the order of each `std::atomic_thread_fence`.
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
#include <thread>

int main()
{
    int n {0};
    std::cin >> n;
    std::atomic<int> data {0};
    std::atomic<bool> ready {false};
    std::thread writer {[&] {
        data.store(n, std::memory_order_relaxed);
        std::atomic_thread_fence(ORDER_1);
        ready.store(true, std::memory_order_relaxed);
    }};
    while (!ready.load(std::memory_order_relaxed)) {
    }
    std::atomic_thread_fence(ORDER_2);
    std::cout << data.load(std::memory_order_relaxed) << '\n';
    writer.join();
}
```
### Wrong
Orders:
- 1: fence relaxed
- 2: fence acquire
```out
0
```
### Tests
```in
0
```
```in
1000
```
```in
1
```
### Witness
```in
7
```

## Alone 2
Form: orders
Settled: stored
Flags: -pthread
Orders:
- 1: fence release
- 2: fence acquire
- 3: fence release
- 4: fence acquire
Forbidden: 1, 2, 3, 4
Derivation 1: Each hand-over is a relaxed store of a flag and a relaxed load of it, so by [atomics.fences] each needs a release fence before the store and an acquire fence after the load; with fence 1 or 2 relaxed the helper's relaxed load may read the first 0 and hand back 1, and with fence 3 or 4 relaxed main's relaxed load may read the first 0 of the answer.
Derivation 2: A relaxed load ordered after no store may read any value of its object's modification order; dropping one fence of a pair leaves the store of n, or of n + 1, not happening before its load by [intro.races], so the helper may compute 0 + 1, or main may print the answer's first 0.
Write a program that reads n and prints n + 1, computed by a second thread.
Main stores n in an atomic int with a relaxed store, fences, then raises a first flag with a relaxed store.
The second thread waits for the first flag with relaxed loads, fences, reads n with a relaxed load, stores n + 1 in a second atomic int with a relaxed store, fences, then raises a second flag with a relaxed store.
Main waits for the second flag with relaxed loads, fences, then reads the second int with a relaxed load and prints it.
Type the order of each `std::atomic_thread_fence`.
Input: one line, n.
Output: one line, n + 1.
Limits: 0 ≤ n ≤ 1000.
### Examples
```in
5
```
```out
6
```
### Reference
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    int n {0};
    std::cin >> n;
    std::atomic<int> in {0};
    std::atomic<int> out {0};
    std::atomic<bool> asked {false};
    std::atomic<bool> answered {false};
    std::thread helper {[&] {
        while (!asked.load(std::memory_order_relaxed)) {
        }
        std::atomic_thread_fence(ORDER_2);
        int x {in.load(std::memory_order_relaxed)};
        out.store(x + 1, std::memory_order_relaxed);
        std::atomic_thread_fence(ORDER_3);
        answered.store(true, std::memory_order_relaxed);
    }};
    in.store(n, std::memory_order_relaxed);
    std::atomic_thread_fence(ORDER_1);
    asked.store(true, std::memory_order_relaxed);
    while (!answered.load(std::memory_order_relaxed)) {
    }
    std::atomic_thread_fence(ORDER_4);
    std::cout << out.load(std::memory_order_relaxed) << '\n';
    helper.join();
}
```
### Wrong
Orders:
- 1: fence release
- 2: fence relaxed
- 3: fence release
- 4: fence acquire
```out
1
```
### Tests
```in
0
```
```in
1000
```
```in
41
```
### Witness
```in
9
```
