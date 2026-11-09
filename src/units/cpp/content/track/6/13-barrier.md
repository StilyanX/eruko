# 6.13 A barrier
Part: a barrier
Clause: [thread.barrier], [thread.barrier.class], [intro.races]
After: 6.12
Levels: c++20

## Example
```cpp
#include <barrier>
#include <print>
#include <thread>
#include <vector>

int main()
{
    //: Give each thread a cell and a place for what it reads.
    int n {3};
    std::vector<int> cell {1, 2, 3};
    std::vector<int> got(n, 0);
    //: Print once per phase, in the step that ends the phase.
    auto done = []() noexcept { std::println("phase over"); };
    std::barrier sync {n, done};
    std::vector<std::jthread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([&, i] {
            //: Write your own cell, then meet the others.
            cell[i] *= 10;
            sync.arrive_and_wait();
            //: Read a neighbour's cell, then meet again.
            got[i] = cell[(i + 1) % n];
            sync.arrive_and_wait();
        });
    }
    workers.clear();
    std::println("{} {} {}", got[0], got[1], got[2]);
}
```

## Verdict 1
```cpp
#include <barrier>
#include <cstdio>
#include <thread>

int main()
{
    int cell[2] {3, 4};
    int got[2] {0, 0};
    std::barrier sync {2};
    auto work = [&](int i) {
        cell[i] *= 10;
        sync.arrive_and_wait();
        got[i] = cell[1 - i];
    };
    std::thread first {work, 0};
    std::thread second {work, 1};
    first.join();
    second.join();
    std::printf("%d %d\n", got[0], got[1]);
}
```
Answer: c++20..c++23 defined
Flags: -pthread

## Verdict 2
```cpp
#include <barrier>
#include <cstdio>
#include <thread>

thread_local int who {0};

int main()
{
    auto report = []() noexcept { std::printf("%d\n", who); };
    std::barrier sync {2, report};
    auto work = [&](int id) {
        who = id;
        sync.arrive_and_wait();
    };
    std::thread first {work, 1};
    std::thread second {work, 2};
    first.join();
    second.join();
}
```
Answer: c++20..c++23 unspecified
Flags: -pthread
```out
1
```
```out
2
```

## Alone 1
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n numbers and k, and starts n threads. In each of k rounds, thread i adds to number i the number that thread (i + 1) mod n held at the start of the round. The threads meet at one std::barrier. Print the numbers after k rounds.
Input: line 1, n and k; line 2, the n numbers.
Output: one line, the n numbers in thread order, separated by spaces.
Limits: 1 ≤ n ≤ 8; 1 ≤ k ≤ 20; every number between −1000 and 1000.
### Examples
```in
1 3
5
```
```out
40
```
### Reference
```cpp
#include <barrier>
#include <iostream>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<long long> cell(n, 0);
    for (long long& x : cell) {
        std::cin >> x;
    }
    std::barrier sync {n};
    std::span<long long> cells {cell};
    auto* meet {&sync};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=] {
            for (int r {0}; r < k; ++r) {
                long long next {cells[(i + 1) % n]};
                meet->arrive_and_wait();
                cells[i] += next;
                meet->arrive_and_wait();
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", cell[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <barrier>
#include <iostream>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<long long> cell(n, 0);
    for (long long& x : cell) {
        std::cin >> x;
    }
    std::barrier sync {n};
    std::span<long long> cells {cell};
    auto* meet {&sync};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=] {
            for (int r {0}; r < k; ++r) {
                long long next {cells[(i + 1) % n]};
                cells[i] += next;
                meet->arrive_and_wait();
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", cell[i]);
    }
    std::println();
}
```
### Tests
```in
1 1
-1000
```
```in
8 20
1000 -1000 1000 -1000 1000 -1000 1000 -1000
```
```in
8 20
1000 1000 1000 1000 1000 1000 1000 1000
```
```in
3 2
1 2 3
```
### Witness
```in
2 1
1 5
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n numbers and k, and starts n threads. In each of k rounds, thread i adds to number i the total of all n numbers at the start of the round. The threads meet at one std::barrier at the end of each round. Print the numbers after k rounds.
Input: line 1, n and k; line 2, the n numbers.
Output: one line, the n numbers in thread order, separated by spaces.
Limits: 1 ≤ n ≤ 8; 1 ≤ k ≤ 10; every number between −1000 and 1000.
### Examples
```in
1 3
5
```
```out
40
```
### Reference
```cpp
#include <barrier>
#include <iostream>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<long long> cell(n, 0);
    for (long long& x : cell) {
        std::cin >> x;
    }
    long long total {0};
    for (long long x : cell) {
        total += x;
    }
    auto sum_up = [&]() noexcept {
        total = 0;
        for (long long x : cell) {
            total += x;
        }
    };
    std::barrier sync {n, sum_up};
    std::span<long long> cells {cell};
    long long* sum {&total};
    auto* meet {&sync};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=] {
            for (int r {0}; r < k; ++r) {
                cells[i] += *sum;
                meet->arrive_and_wait();
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", cell[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <barrier>
#include <iostream>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<long long> cell(n, 0);
    for (long long& x : cell) {
        std::cin >> x;
    }
    long long total {0};
    for (long long x : cell) {
        total += x;
    }
    auto sum_up = [&]() noexcept {
        total = 0;
        for (long long x : cell) {
            total += x;
        }
    };
    std::barrier sync {n, sum_up};
    std::span<long long> cells {cell};
    long long* sum {&total};
    auto* meet {&sync};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=] {
            for (int r {0}; r < k; ++r) {
                cells[i] += *sum;
                auto token {meet->arrive()};
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", cell[i]);
    }
    std::println();
}
```
### Tests
```in
1 1
-1000
```
```in
8 10
1000 1000 1000 1000 1000 1000 1000 1000
```
```in
3 2
1 -2 0
```
### Witness
```in
3 4
1 2 3
```
