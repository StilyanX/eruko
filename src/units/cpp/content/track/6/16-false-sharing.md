# 6.16 False sharing, against `std::hardware_destructive_interference_size`
Part: false sharing, against `std::hardware_destructive_interference_size`
Clause: [hardware.interference], [intro.memory], [intro.races], [dcl.align]
After: 6.04
Levels: c++17

## Example
```cpp
#include <atomic>
#include <cstddef>
#include <new>
#include <print>

//: Start each counter at its own block of the interference size.
struct Apart {
    alignas(std::hardware_destructive_interference_size)
        std::atomic<int> left {0};
    alignas(std::hardware_destructive_interference_size)
        std::atomic<int> right {0};
};

int main()
{
    //: Read the size the implementation gives.
    std::println("{}",
                 std::hardware_destructive_interference_size);
    //: Print where each counter starts, and the size of the struct.
    std::println("{}", offsetof(Apart, left));
    std::println("{}", offsetof(Apart, right));
    std::println("{}", sizeof(Apart));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <new>

int main()
{
    std::printf("%zu\n",
                std::hardware_destructive_interference_size);
}
```
Answer: c++17..c++23 implementation
Derivation 1: [hardware.interference]/1 declares hardware_destructive_interference_size as implementation-defined and only bounds it below by alignof(max_align_t), so the number printed is the implementation's.
Derivation 2: The header <new> gives the constant the value implementation-defined, and printf prints that value unchanged, so the output is implementation-defined.

## Verdict 2
```cpp
#include <cstdio>
#include <thread>

struct Pair {
    int left {0};
    int right {0};
};

int main()
{
    Pair p {};
    std::thread first([&] {
        for (int i {0}; i < 1000; ++i) {
            ++p.left;
        }
    });
    std::thread second([&] {
        for (int i {0}; i < 1000; ++i) {
            ++p.right;
        }
    });
    first.join();
    second.join();
    std::printf("%d %d\n", p.left, p.right);
}
```
Answer: c++17..c++23 defined
Sanitizer: thread
Flags: -pthread

## Alone 1
Form: run
Write a program that reads n and makes a std::vector of n counters, each a std::atomic<int> held in a struct. Each counter starts a multiple of std::hardware_destructive_interference_size bytes after the first, as close to the first as it can. Print each counter's byte offset from the first.
Input: one line, n.
Output: one line, the n offsets in order, separated by spaces.
Limits: 1 ≤ n ≤ 64; x86-64 with g++ 16, where std::hardware_destructive_interference_size is 64.
### Examples
```in
1
```
```out
0
```
### Reference
```cpp
#include <atomic>
#include <iostream>
#include <new>
#include <print>
#include <vector>

using std::hardware_destructive_interference_size;

struct alignas(hardware_destructive_interference_size) Slot {
    std::atomic<int> count {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<Slot> slots(n);
    char* start {reinterpret_cast<char*>(slots.data())};
    for (int i {0}; i < n; ++i) {
        char* at {reinterpret_cast<char*>(&slots[i])};
        std::print("{}{}", i ? " " : "", at - start);
    }
    std::println();
}
```
### Wrong
```cpp
#include <atomic>
#include <iostream>
#include <new>
#include <print>
#include <vector>

using std::hardware_destructive_interference_size;

struct Slot {
    std::atomic<int> count {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    alignas(hardware_destructive_interference_size)
    std::vector<Slot> slots(n);
    char* start {reinterpret_cast<char*>(slots.data())};
    for (int i {0}; i < n; ++i) {
        char* at {reinterpret_cast<char*>(&slots[i])};
        std::print("{}{}", i ? " " : "", at - start);
    }
    std::println();
}
```
### Tests
```in
2
```
```in
64
```
```in
5
```
### Witness
```in
3
```

## Alone 2
Form: probes
Write a struct `Apart` with two std::atomic<int> members, `left` and `right`, each starting at 0. The member `right` starts at least std::hardware_destructive_interference_size bytes after `left`.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
constexpr std::size_t block {std::hardware_destructive_interference_size};
static_assert(offsetof(Apart, right) - offsetof(Apart, left) >= block);
void touch(Apart& a) { a.left.store(1); a.right.store(2); }
static_assert(offsetof(Apart, right) < block);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <atomic>
#include <cstddef>
#include <new>

using std::hardware_destructive_interference_size;

struct Apart {
    alignas(hardware_destructive_interference_size)
        std::atomic<int> left {0};
    alignas(hardware_destructive_interference_size)
        std::atomic<int> right {0};
};

int main()
{
}
```
### Wrong
```cpp
#include <atomic>
#include <cstddef>
#include <new>

using std::hardware_destructive_interference_size;

struct alignas(hardware_destructive_interference_size) Apart {
    std::atomic<int> left {0};
    std::atomic<int> right {0};
};

int main()
{
}
```
### Witness
```cpp
static_assert(offsetof(Apart, right) % alignof(Apart) == 0);
```
