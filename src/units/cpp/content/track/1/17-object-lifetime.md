# 1.17 The lifetime of an object
Part: the lifetime of an object
Clause: [basic.life], [basic.stc.auto], [stmt.dcl], [stmt.jump], [class.temporary], [expr.const]
After: 1.16
Levels: c++23

## Example
```cpp
#include <print>

struct Guard
{
    int number;
    ~Guard()
    {
        std::println("end {}", number);
    }
};

int main()
{
    //: Start the life of the first object at its definition.
    Guard first {1};
    //: Start a second one inside a block; it ends at the block's end.
    {
        Guard second {2};
        std::println("in the block");
    }
    //: Start a third one; it ends before the first, in reverse order.
    Guard third {3};
    std::println("at the end of main");
}
```

## Verdict 1
```cpp
constexpr int previous_square()
{
    const int* last {nullptr};
    int sum {0};
    for (int i {1}; i <= 3; ++i) {
        if (last != nullptr) {
            sum += *last;
        }
        int square {i * i};
        last = &square;
    }
    return sum;
}

int cells[previous_square()];

int main()
{
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <print>

int main()
{
    const int* last {nullptr};
    for (int i {0}; i < 3; ++i) {
        int square {i * i};
        last = &square;
        std::println("{}", *last);
    }
}
```
Answer: c++23 defined

## Count
Columns: constructions, destructions
```cpp
#include <print>
#include <source_location>

struct Noisy
{
    int line;
    Noisy(std::source_location at =
              std::source_location::current())
        : line {static_cast<int>(at.line())}
    {
        std::println("@{} constructions", line);
    }
    ~Noisy()
    {
        std::println("@{} destructions", line);
    }
};

void step(int k)
{
    Noisy first;
    if (k == 0) {
        return;
    }
    Noisy second;
}

int main()
{
    step(0);
    step(1);
    step(2);
}
```

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads n integers and prints the largest of them.
Input: first line n, then one line of n integers separated by spaces.
Output: one line, the largest integer.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000000 and 1000000.
### Examples
```in
3
9 4 1
```
```out
9
```
```in
1
-5
```
```out
-5
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int first {0};
    std::cin >> first;
    int largest {first};
    for (int i {1}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        if (value > largest) {
            largest = value;
        }
    }
    std::println("{}", largest);
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
    int first {0};
    std::cin >> first;
    const int* largest {&first};
    for (int i {1}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        if (value > *largest) {
            largest = &value;
        }
    }
    std::println("{}", *largest);
}
```
### Tests
```in
4
1 5 3 2
```
```in
3
-7 -1 -9
```
```in
5
4 4 4 4 4
```
```in
2
0 1
```
### Witness
```in
3
1 9 4
```

## Alone 2
Form: run
Write a program that reads n and prints the lines open 1 to open n, and then the lines close n down to close 1.
Input: one line, n.
Output: 2n lines: open 1, open 2, up to open n, then close n, close n - 1, down to close 1.
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
1
```
```out
open 1
close 1
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Session
{
    int number;
    Session(int k) : number {k}
    {
        std::println("open {}", number);
    }
    ~Session()
    {
        std::println("close {}", number);
    }
};

void nest(int k, int n)
{
    if (k > n) {
        return;
    }
    Session session {k};
    nest(k + 1, n);
}

int main()
{
    int n {0};
    std::cin >> n;
    nest(1, n);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

struct Session
{
    int number;
    Session(int k) : number {k}
    {
        std::println("open {}", number);
    }
    ~Session()
    {
        std::println("close {}", number);
    }
};

void nest(int k, int n)
{
    if (k > n) {
        return;
    }
    Session {k};
    nest(k + 1, n);
}

int main()
{
    int n {0};
    std::cin >> n;
    nest(1, n);
}
```
### Tests
```in
2
```
```in
3
```
```in
1000
```
### Witness
```in
2
```
