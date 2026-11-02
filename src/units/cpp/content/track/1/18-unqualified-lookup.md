# 1.18 Unqualified name lookup
Part: unqualified name lookup
Clause: [basic.lookup.unqual], [basic.lookup.general], [basic.scope.pdecl], [basic.scope.block], [basic.indet], [expr.const]
After: none
Levels: c++23

## Example
```cpp
#include <print>

int limit {10};

int main()
{
    //: Read the global limit, since no local one exists yet.
    std::println("{}", limit);
    //: Declare a local limit; from here on it hides the global one.
    int limit {3};
    std::println("{}", limit);
    //: Declare another inside a block; it hides both until the block ends.
    {
        int limit {1};
        std::println("{}", limit);
    }
    //: Find the local limit of main again after the block.
    std::println("{}", limit);
}
```

## Verdict 1
```cpp
#include <print>

int count(int n)
{
    return n + 1;
}

int main()
{
    int count {3};
    std::println("{}", count(4));
}
```
Answer: c++23 ill-formed 11

## Verdict 2
```cpp
constexpr int start {5};

constexpr int next()
{
    int start {start + 1};
    return start;
}

int cells[next()];

int main()
{
}
```
Answer: c++23 undefined constant

## Alone 1
Form: run
Write a program that reads n integers and prints the last negative one among them, or 0 if none is negative.
Input: first line n, then one line of n integers separated by spaces.
Output: one line, the last negative integer, or 0.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000000 and 1000000.
### Examples
```in
3
9 4 1
```
```out
0
```
```in
1
0
```
```out
0
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int last {0};
    for (int i {0}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        if (value < 0) {
            last = value;
        }
    }
    std::println("{}", last);
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
    int last {0};
    for (int i {0}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        if (value < 0) {
            int last {value};
        }
    }
    std::println("{}", last);
}
```
### Tests
```in
4
1 -5 3 2
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
-3 1
```
### Witness
```in
3
1 -9 4
```

## Alone 2
Form: run
Write a program that reads n integers and prints how many of them are larger than the integer just before them.
Input: first line n, then one line of n integers separated by spaces.
Output: one line, the count.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000000 and 1000000.
### Examples
```in
4
1 2 5 9
```
```out
3
```
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
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    int previous {0};
    std::cin >> previous;
    int count {0};
    for (int i {1}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        if (value > previous) {
            ++count;
        }
        previous = value;
    }
    std::println("{}", count);
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
    int previous {0};
    std::cin >> previous;
    int count {0};
    for (int i {1}; i < n; ++i) {
        int value {0};
        std::cin >> value;
        if (value > previous) {
            ++count;
        }
        int previous {value};
    }
    std::println("{}", count);
}
```
### Tests
```in
5
3 1 2 0 4
```
```in
3
9 8 7
```
```in
4
2 2 2 2
```
```in
6
1 3 2 4 3 5
```
### Witness
```in
4
1 5 3 4
```
