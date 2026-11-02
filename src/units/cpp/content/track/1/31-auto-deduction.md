# 1.31 `auto` and `decltype(auto)` deduction
Part: `auto` and `decltype(auto)` deduction
Clause: [dcl.spec.auto], [dcl.type.auto.deduct], [dcl.type.decltype], [temp.deduct.call]
After: none
Levels: c++23

## Example
```cpp
#include <print>
#include <type_traits>

//: Keep three numbers in an array.
int values[3] {4, 5, 6};

//: Return a copy of an element, since auto drops the reference.
auto copy_at(int i)
{
    return values[i];
}

//: Return the element itself, since decltype(auto) keeps it.
decltype(auto) ref_at(int i)
{
    return values[i];
}

int main()
{
    //: Check the two return types while the program compiles.
    static_assert(std::is_same_v<decltype(copy_at(0)), int>);
    static_assert(std::is_same_v<decltype(ref_at(0)), int&>);
    //: Write through the reference and print the element.
    ref_at(1) = 50;
    std::println("{}", values[1]);
    //: Let auto drop const from a copy, while auto& keeps it.
    const int limit {10};
    auto a {limit};
    auto& r {limit};
    static_assert(std::is_same_v<decltype(a), int>);
    static_assert(std::is_same_v<decltype(r), const int&>);
}
```

## Verdict 1
```cpp
#include <type_traits>

int total {0};

decltype(auto) get()
{
    return (total);
}

static_assert(std::is_same_v<decltype(get()), int>);

int main()
{
}
```
Answer: c++23 ill-formed 10

## Verdict 2
```cpp
#include <type_traits>

int main()
{
    const int n {5};
    const int& r {n};
    auto a {r};
    decltype(auto) b = r;
    static_assert(std::is_same_v<decltype(a), int>);
    static_assert(std::is_same_v<decltype(b), const int&>);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a function template `larger(a, b)` that takes two variables of one type and returns the larger one itself, not a copy, with its return type deduced from its return statement.
Input: none.
Output: none.
Limits: the type has the operator >.
### Probes
```cpp
int x {1};
int y {2};
int& z {larger(x, y)};
static_assert(std::is_same_v<decltype(larger(x, y)), int&>);
static_assert(std::is_same_v<decltype(larger(x, y)), int>);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <type_traits>

template <typename T>
decltype(auto) larger(T& a, T& b)
{
    return a > b ? a : b;
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T>
auto larger(T& a, T& b)
{
    return a > b ? a : b;
}

int main()
{
}
```
### Witness
```cpp
double p {1.5};
double q {0.5};
double& m {larger(p, q)};
```

## Alone 2
Form: run
Write a program that reads n numbers, adds to each number its position, counting from 0, and then prints the numbers.
Input: one line, n; then one line, n integers separated by spaces.
Output: one line, the n new numbers separated by spaces.
Limits: 1 ≤ n ≤ 1000; each number is between −10000 and 10000.
### Examples
```in
1
7
```
```out
7
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(n);
    for (auto& v : values) {
        std::cin >> v;
    }
    int position {0};
    for (auto& v : values) {
        v += position;
        ++position;
    }
    for (auto v : values) {
        std::print("{} ", v);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> values(n);
    for (auto& v : values) {
        std::cin >> v;
    }
    int position {0};
    for (auto v : values) {
        v += position;
        ++position;
    }
    for (auto v : values) {
        std::print("{} ", v);
    }
    std::println();
}
```
### Tests
```in
3
1 1 1
```
```in
5
-4 0 9 2 -1
```
```in
2
10000 -10000
```
### Witness
```in
2
5 5
```
