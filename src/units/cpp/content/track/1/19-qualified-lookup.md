# 1.19 Qualified name lookup
Part: qualified name lookup
Clause: [basic.lookup.qual.general], [namespace.qual], [expr.prim.id.qual], [basic.scope.pdecl]
After: 1.18
Levels: c++23

## Example
```cpp
#include <print>

int limit {10};

namespace shop
{
int limit {5};
}

int main()
{
    //: Declare a local limit; it hides the global one.
    int limit {3};
    std::println("{}", limit);
    //: Write :: before the name to reach the global limit.
    std::println("{}", ::limit);
    //: Write the namespace and :: to reach the limit inside it.
    std::println("{}", shop::limit);
}
```

## Verdict 1
```cpp
#include <print>

namespace outer
{
int value {1};

namespace inner
{
int other {2};
}
}

int main()
{
    std::println("{}", outer::inner::value);
}
```
Answer: c++23 ill-formed 15

## Verdict 2
```cpp
#include <print>

int n {1};

int main()
{
    int n {2};
    {
        int n {3};
        std::println("{}", ::n);
    }
}
```
Answer: c++23 defined

## Alone 1
Form: flag
Write a program that defines a function area that takes two ints and returns their product, and whose main defines a local int named area set to the value area returns for 3 and 4, then prints it.
Input: none.
Output: one line, 12.
Limits: none.
Expect:
- c++23: accept
### Reference
```cpp
#include <print>

int area(int width, int height)
{
    return width * height;
}

int main()
{
    int area {::area(3, 4)};
    std::println("{}", area);
}
```
### Wrong
```cpp
#include <print>

int area(int width, int height)
{
    return width * height;
}

int main()
{
    int area {area(3, 4)};
    std::println("{}", area);
}
```
### Witness
```cpp
int probe {::area(2, 5)};
```

## Alone 2
Form: run
Write a program that reads n integers and prints how many of them are even.
Input: first line n, then one line of n integers separated by spaces.
Output: one line, the count.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000000 and 1000000.
### Examples
```in
3
2 4 6
```
```out
3
```
### Reference
```cpp
#include <iostream>
#include <print>

int count {0};

void record(int value)
{
    if (value % 2 == 0) {
        ++count;
    }
}

int main()
{
    int count {0};
    std::cin >> count;
    for (int i {0}; i < count; ++i) {
        int value {0};
        std::cin >> value;
        record(value);
    }
    std::println("{}", ::count);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int count {0};

void record(int value)
{
    if (value % 2 == 0) {
        ++count;
    }
}

int main()
{
    int count {0};
    std::cin >> count;
    for (int i {0}; i < count; ++i) {
        int value {0};
        std::cin >> value;
        record(value);
    }
    std::println("{}", count);
}
```
### Tests
```in
4
1 2 3 4
```
```in
3
1 3 5
```
```in
5
-2 0 7 8 -9
```
### Witness
```in
2
1 2
```
