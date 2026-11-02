# 2.02 Value categories
Part: value categories
Clause: [basic.lval], [expr.call], [expr.ass], [expr.pre.incr], [expr.cond], [expr.unary.op]
After: none
Levels: c++11

## Example
```cpp
#include <print>

int total {0};

//: Return a reference, so a call names an object: an lvalue.
int& slot()
{
    return total;
}

//: Return an int, so a call gives a value with no name: a prvalue.
int copy()
{
    return total;
}

int main()
{
    //: Assign through the call that names an object.
    slot() = 5;
    //: Take the address of a prefix increment, which is an lvalue.
    int* p {&++total};
    //: Read the prvalue the other call gives.
    int n {copy() + 1};
    std::println("{} {} {}", total, *p, n);
}
```

## Verdict 1
```cpp
#include <cstdio>

int n {1};

int& pick()
{
    return n;
}

int copy()
{
    return n;
}

int main()
{
    pick() = 5;
    copy() = 3;
    std::printf("%d\n", n);
}
```
Answer: c++11..c++23 ill-formed 18

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int a {1};
    int b {2};
    (a < b ? a : b) = 9;
    int* p {&++a};
    *p += 1;
    std::printf("%d %d\n", a, b);
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: probes
Write a function `first(v)` that gives the first int of a std::vector<int> variable v, so that a call can stand on the left of `=` and change v.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors; v holds at least one int.
### Probes
```cpp
std::vector<int> v {1, 2};
void p1() { first(v) = 5; }
void p2() { int k {first(v)}; }
void p3() { first(std::vector<int> {3}) = 1; }
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <vector>

int& first(std::vector<int>& v)
{
    return v[0];
}

int main()
{
}
```
### Wrong
```cpp
#include <vector>

int first(std::vector<int>& v)
{
    return v[0];
}

int main()
{
}
```
### Witness
```cpp
std::vector<int> w {4};
void again() { first(w) += 2; }
```

## Alone 2
Form: probes
Write a function `top(v)` that returns a copy of the largest int of a std::vector<int> v.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors; v holds at least one int.
### Probes
```cpp
std::vector<int> v {4, 9, 2};
int k {top(v)};
void p3() { top(v) = 1; }
const int* p {&top(v)};
```
Accept: 1, 2
Reject: 3, 4
### Reference
```cpp
#include <algorithm>
#include <vector>

int top(const std::vector<int>& v)
{
    return *std::max_element(v.begin(), v.end());
}

int main()
{
}
```
### Wrong
```cpp
#include <algorithm>
#include <vector>

const int& top(const std::vector<int>& v)
{
    return *std::max_element(v.begin(), v.end());
}

int main()
{
}
```
### Witness
```cpp
std::vector<int> w {1};
const int* q {&top(w)};
```
