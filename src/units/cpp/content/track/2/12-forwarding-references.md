# 2.12 Forwarding references
Part: forwarding references
Clause: [temp.deduct.call], [dcl.ref], [dcl.init.ref], [over.ics.ref]
After: none
Levels: c++11

## Example
```cpp
#include <print>
#include <string>
#include <type_traits>

//: Take T&& with T deduced, so any argument binds.
template <typename T>
void show(T&& x)
{
    //: Find T a reference for an lvalue, a plain type for an rvalue.
    if (std::is_lvalue_reference_v<T>) {
        std::println("lvalue {}", x);
    } else {
        std::println("rvalue {}", x);
    }
}

int main()
{
    //: Pass an lvalue, then an rvalue, to the same template.
    std::string s {"abc"};
    show(s);
    show(std::string {"xyz"});
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <vector>

template <typename T>
std::size_t count(std::vector<T>&& v)
{
    return v.size();
}

int main()
{
    std::vector<int> v {1, 2, 3};
    std::printf("%zu\n", count(v));
}
```
Answer: c++11..c++23 ill-formed 13

## Verdict 2
```cpp
#include <string>
#include <type_traits>

template <typename T>
void take(T&& x)
{
    static_assert(std::is_reference<T>::value, "a reference");
}

int main()
{
    take(std::string {"a"});
}
```
Answer: c++11..c++23 ill-formed 7

## Alone 1
Form: probes
Write a function template `total(v)` that takes a `std::vector` of any number type, only when the vector is an rvalue, and returns the sum of its elements.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
std::vector<int> v {1, 2, 3};
int a {total(std::vector<int> {1, 2})};
double b {total(std::vector<double> {0.5})};
int c {total(std::move(v))};
int d {total(v)};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <type_traits>
#include <utility>
#include <vector>

template <typename T>
auto total(std::vector<T>&& v)
{
    std::remove_cvref_t<decltype(v[0])> sum {};
    for (const auto& x : v) {
        sum += x;
    }
    return sum;
}

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>
#include <utility>
#include <vector>

template <typename T>
auto total(T&& v)
{
    std::remove_cvref_t<decltype(v[0])> sum {};
    for (const auto& x : v) {
        sum += x;
    }
    return sum;
}

int main()
{
}
```
### Witness
```cpp
std::vector<int> w {4};
int e {total(w)};
```

## Alone 2
Form: run
Write a program that reads a word and prints it reversed, then prints the word itself, using a function template `reversed(T&& x)` that returns a reversed copy of its argument.
Input: one line, one word.
Output: two lines: the word reversed, then the word as read.
Limits: the word has 1 to 50 letters.
### Examples
```in
level
```
```out
level
level
```
```in
noon
```
```out
noon
noon
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <string>

template <typename T>
auto reversed(T&& x)
{
    auto copy = x;
    std::reverse(copy.begin(), copy.end());
    return copy;
}

int main()
{
    std::string word;
    std::cin >> word;
    std::println("{}", reversed(word));
    std::println("{}", word);
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <string>

template <typename T>
auto reversed(T&& x)
{
    T copy = x;
    std::reverse(copy.begin(), copy.end());
    return copy;
}

int main()
{
    std::string word;
    std::cin >> word;
    std::println("{}", reversed(word));
    std::println("{}", word);
}
```
### Tests
```in
abc
```
```in
stressed
```
```in
ab
```
### Witness
```in
cat
```
