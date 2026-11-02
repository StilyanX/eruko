# 1.16 Storage duration
Part: storage duration
Clause: [basic.stc.general], [basic.stc.static], [basic.stc.auto], [stmt.dcl]
After: none
Levels: c++23

## Example
```cpp
#include <print>

int ticket()
{
    //: Keep the count in static storage, so it lasts between calls.
    static int issued {0};
    //: Keep this value in automatic storage, made anew each call.
    int fresh {0};
    //: Add one to both and print them.
    ++issued;
    ++fresh;
    std::println("{} {}", issued, fresh);
    return issued;
}

int main()
{
    //: Call the function three times.
    ticket();
    ticket();
    ticket();
}
```

## Verdict 1
```cpp
#include <print>

int* counter()
{
    static int calls {0};
    ++calls;
    return &calls;
}

int main()
{
    counter();
    int* calls {counter()};
    std::println("{}", *calls);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <print>

int main()
{
    int* kept {nullptr};
    {
        int value {7};
        kept = &value;
    }
    std::println("{}", *kept);
}
```
Answer: c++23 undefined sanitizer

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

void visit()
{
    static Noisy kept;
    Noisy local;
}

int main()
{
    visit();
    visit();
    visit();
}
```

## Alone 1
Form: run
Write a program that reads n integers and, after each one, prints the largest integer read so far.
Input: first line n, then one line of n integers separated by spaces.
Output: n lines, the largest integer read up to that point.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000000 and 1000000.
### Examples
```in
3
1 4 9
```
```out
1
4
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

int largest(int value)
{
    static int best {value};
    if (value > best) {
        best = value;
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        std::println("{}", largest(value));
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int largest(int value)
{
    int best {value};
    if (value > best) {
        best = value;
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        std::println("{}", largest(value));
    }
}
```
### Tests
```in
4
5 3 8 1
```
```in
3
-1 -7 -2
```
```in
5
2 2 2 2 2
```
```in
6
10 9 8 7 6 11
```
### Witness
```in
2
9 1
```

## Alone 2
Form: run
Write a program that reads n and, for each k from 1 to n, prints the line open k and then the line close k.
Input: one line, n.
Output: 2n lines: open 1, close 1, open 2, close 2, and so on up to close n.
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
    ~Session()
    {
        std::println("close {}", number);
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    for (int k {1}; k <= n; ++k) {
        Session session {k};
        std::println("open {}", session.number);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

struct Session
{
    int number;
    ~Session()
    {
        std::println("close {}", number);
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    for (int k {1}; k <= n; ++k) {
        static Session session {k};
        std::println("open {}", session.number);
    }
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
10
```
### Witness
```in
2
```
