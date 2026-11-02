# 1.21 Aggregate initialisation
Part: aggregate initialisation
Clause: [dcl.init.aggr], [dcl.init.list], [diff.cpp17.dcl.dcl], [diff.cpp11.dcl.dcl]
After: none
Levels: c++11

## Example
```cpp
#include <print>

struct Box
{
    int width;
    int height;
    int depth {1};
};

int main()
{
    //: Give the first three elements; the other three start at 0.
    int heights[6] {80, 75, 90};
    std::println("{} {}", heights[2], heights[5]);
    //: Give the members in the order the struct declares them.
    Box box {4, 3};
    //: Let depth take its own default, since the braces skip it.
    std::println("{} {} {}", box.width, box.height, box.depth);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Point
{
    Point() = default;
    int x;
    int y;
};

int main()
{
    Point p {1, 2};
    std::printf("%d %d\n", p.x, p.y);
}
```
Answer:
- c++11..c++17: defined
- c++20..c++23: ill-formed 12

## Verdict 2
```cpp
#include <cstdio>

struct Range
{
    int low;
    int high {10};
};

int main()
{
    Range r {5};
    std::printf("%d %d\n", r.low, r.high);
}
```
Answer:
- c++11: ill-formed 11
- c++14..c++23: defined

## Alone 1
Form: run
Write a program that reads a time as hours and minutes and prints how many minutes have passed since midnight.
Input: one line, two integers hours and minutes.
Output: one line, the number of minutes.
Limits: 0 ≤ hours ≤ 23; 0 ≤ minutes ≤ 59.
### Examples
```in
1 1
```
```out
61
```
```in
0 0
```
```out
0
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Time
{
    int hours;
    int minutes;
};

int main()
{
    int hours {0};
    int minutes {0};
    std::cin >> hours >> minutes;
    Time time {hours, minutes};
    std::println("{}", time.hours * 60 + time.minutes);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

struct Time
{
    int minutes;
    int hours;
};

int main()
{
    int hours {0};
    int minutes {0};
    std::cin >> hours >> minutes;
    Time time {hours, minutes};
    std::println("{}", time.hours * 60 + time.minutes);
}
```
### Tests
```in
2 30
```
```in
23 59
```
```in
0 45
```
```in
12 0
```
### Witness
```in
2 5
```

## Alone 2
Form: flag
Write a program that defines a struct Range with the int members low and high, where high is 10 unless the braces give it, makes a Range from the braces {5}, and prints its low and high.
Input: none.
Output: one line, 5 10.
Limits: none.
Expect:
- c++14..c++23: accept
### Reference
```cpp
#include <cstdio>

struct Range
{
    int low;
    int high {10};
};

int main()
{
    Range range {5};
    std::printf("%d %d\n", range.low, range.high);
}
```
### Wrong
```cpp
#include <cstdio>

struct Range
{
    Range() = default;
    int low;
    int high {10};
};

int main()
{
    Range range {5};
    std::printf("%d %d\n", range.low, range.high);
}
```
### Witness
```cpp
Range probe {1, 2};
```
