# 6.12 A latch
Part: a latch
Clause: [thread.latch], [thread.latch.class], [intro.races]
After: 6.10
Levels: c++20

## Example
```cpp
#include <latch>
#include <print>
#include <thread>
#include <vector>

int main()
{
    //: Give each thread its own slot for its result.
    int n {4};
    std::vector<int> part(n, 0);
    //: Make a latch that opens after n count-downs.
    std::latch done {n};
    std::vector<std::jthread> workers;
    //: Store a result, then count the latch down.
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([&, i] {
            part[i] = i * i;
            done.count_down();
        });
    }
    //: Wait for the latch, then read every slot.
    done.wait();
    int sum {0};
    for (int x : part) {
        sum += x;
    }
    std::println("{}", sum);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <latch>
#include <thread>

int main()
{
    int total {0};
    std::latch start {1};
    auto bump = [&] { total += 1; };
    std::thread worker([&] {
        start.wait();
        bump();
    });
    bump();
    start.count_down();
    worker.join();
    std::printf("%d\n", total);
}
```
Answer: c++20..c++23 defined
Flags: -pthread

## Verdict 2
```cpp
#include <cstdio>
#include <latch>
#include <thread>

int main()
{
    int total {0};
    std::latch start {1};
    auto bump = [&] { total += 1; };
    std::thread worker([&] {
        start.wait();
        bump();
    });
    start.count_down();
    bump();
    worker.join();
    std::printf("%d\n", total);
}
```
Answer: c++20..c++23 undefined sanitizer
Sanitizer: thread
Flags: -pthread

## Alone 1
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n numbers and starts n threads. Thread i stores number i in its slot. It then waits on one std::latch until every thread has stored its number. Then it takes the number in the slot of thread (i + 1) mod n. Print what each thread took.
Input: line 1, n; line 2, the n numbers.
Output: one line, the numbers the threads took, in thread order, separated by spaces.
Limits: 1 ≤ n ≤ 8; every number between −1000 and 1000.
### Examples
```in
1
5
```
```out
5
```
### Reference
```cpp
#include <iostream>
#include <latch>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> input(n, 0);
    for (int& x : input) {
        std::cin >> x;
    }
    std::vector<int> slot(n, 0);
    std::vector<int> took(n, 0);
    std::latch stored {n};
    std::span<int> slots {slot};
    std::span<int> taken {took};
    std::latch* done {&stored};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=, x = input[i]] {
            slots[i] = x;
            done->arrive_and_wait();
            taken[i] = slots[(i + 1) % n];
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", took[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <latch>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> input(n, 0);
    for (int& x : input) {
        std::cin >> x;
    }
    std::vector<int> slot(n, 0);
    std::vector<int> took(n, 0);
    std::latch stored {n};
    std::span<int> slots {slot};
    std::span<int> taken {took};
    std::latch* done {&stored};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=, x = input[i]] {
            slots[i] = x;
            done->count_down();
            taken[i] = slots[(i + 1) % n];
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", took[i]);
    }
    std::println();
}
```
### Tests
```in
1
-1000
```
```in
8
1 2 3 4 5 6 7 8
```
```in
3
-4 0 9
```
### Witness
```in
2
3 4
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n numbers and starts n threads. Thread i stores number i in its slot. It then waits on one std::latch until every thread has stored its number. Then it counts how many slots hold a number larger than number i. Print each thread's count.
Input: line 1, n; line 2, the n numbers.
Output: one line, the counts in thread order, separated by spaces.
Limits: 1 ≤ n ≤ 8; every number between −1000 and 1000.
### Examples
```in
1
7
```
```out
0
```
### Reference
```cpp
#include <iostream>
#include <latch>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> input(n, 0);
    for (int& x : input) {
        std::cin >> x;
    }
    std::vector<int> slot(n, 0);
    std::vector<int> above(n, 0);
    std::latch stored {n};
    std::span<int> slots {slot};
    std::span<int> counts {above};
    std::latch* done {&stored};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=, mine = input[i]] {
            slots[i] = mine;
            done->arrive_and_wait();
            for (int x : slots) {
                if (x > mine) {
                    ++counts[i];
                }
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", above[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <latch>
#include <print>
#include <span>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> input(n, 0);
    for (int& x : input) {
        std::cin >> x;
    }
    std::vector<int> slot(n, 0);
    std::vector<int> above(n, 0);
    std::latch stored {n};
    std::span<int> slots {slot};
    std::span<int> counts {above};
    std::latch* done {&stored};
    std::vector<std::thread> workers;
    for (int i {0}; i < n; ++i) {
        workers.emplace_back([=, mine = input[i]] {
            slots[i] = mine;
            done->count_down();
            for (int x : slots) {
                if (x > mine) {
                    ++counts[i];
                }
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", above[i]);
    }
    std::println();
}
```
### Tests
```in
1
-1000
```
```in
8
5 1 8 3 3 1000 -1000 0
```
```in
4
2 2 2 2
```
### Witness
```in
3
9 4 6
```
