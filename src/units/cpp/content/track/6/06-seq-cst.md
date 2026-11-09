# 6.06 Sequentially consistent order
Part: sequentially consistent order
Clause: [atomics.order], [intro.races]
After: 6.05
Levels: c++11

## Example
```cpp
#include <atomic>
#include <print>
#include <thread>

int main()
{
    //: Keep two flags, each raised by one side.
    std::atomic<bool> x {false};
    std::atomic<bool> y {false};
    bool r1 {false};
    bool r2 {false};
    //: Raise your flag, then look at the other's, both seq_cst.
    std::thread a {[&] {
        x.store(true, std::memory_order_seq_cst);
        r1 = y.load(std::memory_order_seq_cst);
    }};
    std::thread b {[&] {
        y.store(true, std::memory_order_seq_cst);
        r2 = x.load(std::memory_order_seq_cst);
    }};
    a.join();
    b.join();
    //: One order holds all four, so one side sees the other.
    std::println("{}", r1 || r2);
}
```

## Verdict 1
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    std::atomic<int> x {0};
    std::atomic<int> y {0};
    int r1 {0};
    int r2 {0};
    std::thread a {[&] {
        x.store(1, std::memory_order_seq_cst);
        r1 = y.load(std::memory_order_seq_cst);
    }};
    std::thread b {[&] {
        y.store(1, std::memory_order_seq_cst);
        r2 = x.load(std::memory_order_seq_cst);
    }};
    a.join();
    b.join();
    std::cout << r1 << ' ' << r2 << '\n';
}
```
Answer: c++11..c++23 unspecified
Flags: -pthread
```out
0 1
```
```out
1 0
```
```out
1 1
```

## Verdict 2
```cpp
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    int data {0};
    std::atomic<bool> ready {false};
    std::thread writer {[&] {
        data = 42;
        ready.store(true, std::memory_order_seq_cst);
    }};
    while (!ready.load(std::memory_order_seq_cst)) {
    }
    std::cout << data << '\n';
    writer.join();
}
```
Answer: c++11..c++23 defined
Flags: -pthread
Sanitizer: thread

## Alone 1
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: store seq_cst
- 2: load seq_cst
- 3: store seq_cst
- 4: load seq_cst
Forbidden: 1, 2, 3, 4
Derivation 1: With any one slot one step weaker, that operation leaves the one total order S of [atomics.order], so nothing puts each store before the other side's load; both loads may read false, no result is written, and the program prints 0 where a + b > 0 is required.
Derivation 2: Only seq_cst operations are ordered in S ([atomics.order] p4); with one of the four made release or acquire, the outcome where neither side sees the other's raised flag is permitted, both results stay 0, and the output 0 is not a + b, which the item forbids.
Write a program that reads a and b. Main and a second thread each store their number, raise their own flag, then look at the other's flag. A side that sees the other's flag raised writes a + b into its own result. Both results start at 0. Print the larger result.
Input: one line, a and b.
Output: one line, a + b.
Limits: 0 ≤ a ≤ 1000; 0 ≤ b ≤ 1000.
### Examples
```in
3 4
```
```out
7
```
### Reference
```cpp
#include <algorithm>
#include <atomic>
#include <iostream>
#include <thread>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    int mine {0};
    int theirs {0};
    int main_result {0};
    int other_result {0};
    std::atomic<bool> main_up {false};
    std::atomic<bool> other_up {false};
    std::thread other {[&] {
        theirs = b;
        other_up.store(true, ORDER_1);
        if (main_up.load(ORDER_2)) {
            other_result = mine + theirs;
        }
    }};
    mine = a;
    main_up.store(true, ORDER_3);
    if (other_up.load(ORDER_4)) {
        main_result = mine + theirs;
    }
    other.join();
    std::cout << std::max(main_result, other_result) << '\n';
}
```
### Wrong
Orders:
- 1: store seq_cst
- 2: load seq_cst
- 3: store relaxed
- 4: load seq_cst
### Tests
```in
0 0
```
```in
0 5
```
```in
1000 1000
```
### Witness
```in
2 3
```

## Alone 2
Form: orders
Sanitizer: thread
Flags: -pthread
Orders:
- 1: store seq_cst
- 2: load seq_cst
Forbidden: 1, 2
Derivation 1: With slot 1 or slot 2 one step weaker, the store of a thread's own flag and its load of the other's flag are not both in S ([atomics.order] p4); each thread may read the other's flag as false, both reach ++count at once, and two unordered writes to count are a data race ([intro.races]), which the item forbids.
Derivation 2: Peterson's lock needs each thread's raise of its flag to come before the other thread's look in one order; a release store or an acquire load is outside S, so the store-buffering outcome lets both threads pass the loop together and race on the plain count, so the program has undefined behaviour, a result the item forbids.
Write a program that reads k. Two threads each add 1 to one shared int counter k times. A lock built from two flags and a turn keeps their adds apart. Print the counter after both threads end.
Input: one line, k.
Output: one line, the counter.
Limits: 0 ≤ k ≤ 1000.
### Examples
```in
1
```
```out
2
```
### Reference
```cpp
#include <atomic>
#include <functional>
#include <iostream>
#include <thread>

void add(std::atomic<bool>* wants, std::atomic<int>& turn,
         int& count, int me, int k)
{
    int other {1 - me};
    for (int i {0}; i < k; ++i) {
        wants[me].store(true, ORDER_1);
        turn.store(other);
        while (wants[other].load(ORDER_2)
               && turn.load() == other) {
        }
        ++count;
        wants[me].store(false);
    }
}

int main()
{
    int k {0};
    std::cin >> k;
    std::atomic<bool> wants[2] {};
    std::atomic<int> turn {0};
    int count {0};
    std::thread a {add, wants, std::ref(turn), std::ref(count),
                   0, k};
    std::thread b {add, wants, std::ref(turn), std::ref(count),
                   1, k};
    a.join();
    b.join();
    std::cout << count << '\n';
}
```
### Wrong
Orders:
- 1: store seq_cst
- 2: load relaxed
### Tests
```in
0
```
```in
2
```
```in
1000
```
### Witness
```in
1000
```
