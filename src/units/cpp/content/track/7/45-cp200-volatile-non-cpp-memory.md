# 7.45 Keep volatile for memory that C++ does not own
Part: CP.200 Use volatile only to talk to non-C++ memory
Clause: C++ Core Guidelines CP.200, [dcl.type.cv], [intro.execution], [intro.races], [atomics.types.generic]
After: none
Levels: c++11

## Scan
Rule: CP.200
Pattern: /(?<!\b(?:static|extern)\b[^;{}()]*)\bvolatile\b(?=[\w\s:<>,]*?\b[A-Za-z_]\w*\s*[=;{\[])(?=(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})/
### Bad
```cpp
void f()
{
    volatile int i = 0; // bad, volatile local variable
    // etc.
}

class My_type {
    volatile int i = 0; // suspicious, volatile data member
    // etc.
};
```
### Good
```cpp
const volatile long clock;

int volatile* get_hardware_memory_location();
void please_use_this(volatile long* p);

static volatile long vl;

void user()
{
    long t1 = clock;
    // ... no use of clock here ...
    long t2 = clock;

    int volatile* vi = get_hardware_memory_location();
    // note: we get a pointer to someone else's memory here
    // volatile says "treat this with extra respect"

    please_use_this(&vl);    // escape a reference to this to
                             // "elsewhere" (not C++)
}
```

## Example
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

//: Share a count between threads as an atomic, not as volatile.
std::atomic<int> hits {0};

void work()
{
    for (int i {0}; i < 1000; ++i) {
        hits.fetch_add(1);
    }
}

int main()
{
    //: Run two threads that both add to it.
    std::thread a {work};
    std::thread b {work};
    a.join();
    b.join();
    //: Read the total after both threads end.
    std::printf("%d\n", hits.load());
}
```

## Verdict 1
Sanitizer: thread
```cpp
#include <cstdio>
#include <thread>

int main()
{
    volatile int hits {0};
    auto work {[&hits] {
        for (int i {0}; i < 1000; ++i) {
            hits = hits + 1;
        }
    }};
    std::thread a {work};
    std::thread b {work};
    a.join();
    b.join();
    std::printf("%d\n", hits);
}
```
Answer: c++11..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <atomic>
#include <cstdio>
#include <thread>

int main()
{
    std::atomic<int> hits {0};
    auto work {[&hits] {
        for (int i {0}; i < 1000; ++i) {
            hits.fetch_add(1);
        }
    }};
    std::thread a {work};
    std::thread b {work};
    a.join();
    b.join();
    std::printf("%d\n", hits.load());
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n numbers and prints the sum of their squares.
Input: the first line holds n, the second line holds the n numbers.
Output: one line, the sum of the squares.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
1 -2 3
```
```out
14
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int sum {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        sum = sum + x * x;
    }
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    volatile int sum {0};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        sum = sum + x * x;
    }
    std::println("{}", static_cast<int>(sum));
}
```
### Tests
```in
1
0
```
```in
20
1000 -1000 1000 -1000 1000 -1000 1000 -1000 1000 -1000 1000 -1000 1000 -1000 1000 -1000 1000 -1000 1000 -1000
```
```in
2
-7 5
```
### Witness
```cpp
#include <cstdio>

void f()
{
    int i = 0;
    std::printf("%d\n", i);
}

class My_type {
    int i = 0;
};

int main()
{
    f();
    My_type t {};
}
```

## Alone 2
Form: run
Write a struct `Tally` with an int member `total` that starts at 0, a member function `add(int x)` that adds x to it, and a member function `get()` that returns it.
Then write a program that reads n numbers, adds each to one Tally, and prints what `get()` returns after each add.
Input: the first line holds n, the second line holds the n numbers.
Output: n lines, the total after each number.
Limits: 1 ≤ n ≤ 20; every number is between -1000 and 1000.
### Examples
```in
3
5 -2 10
```
```out
5
3
13
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Tally {
    int total {0};
    void add(int x)
    {
        total = total + x;
    }
    int get() const
    {
        return total;
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    Tally t {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        t.add(x);
        std::println("{}", t.get());
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

struct Tally {
    volatile int total {0};
    void add(int x)
    {
        total = total + x;
    }
    int get() const
    {
        return total;
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    Tally t {};
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        t.add(x);
        std::println("{}", t.get());
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
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
```
```in
4
3 -3 3 -3
```
### Witness
```cpp
#include <atomic>

class My_type {
    std::atomic<int> i {0};

public:
    void bump()
    {
        i.fetch_add(1);
    }
};

int main()
{
    My_type t {};
    t.bump();
}
```
