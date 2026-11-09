# 7.04 Return a value, not a T&&
Part: F.45 Don't return a T&&
Clause: C++ Core Guidelines F.45, [class.temporary], [basic.life], [expr.const]
After: 2.03, 2.05, 1.40
Levels: c++14

## Scan
Rule: F.45
Pattern: /[\w>]&&\s+(?!move\b|forward\b)\w+\s*\((?:[^()]|\([^()]*\))*\)\s*(?:const\s*|noexcept\s*)*(?:\{|;|->)|->\s*[\w:<>]+&&(?=\s*[{;])/
### Bad
```cpp
#include <typeinfo>

void log_call(const std::type_info&)
{
}

template<class F>
auto&& wrapper(F f)
{
    log_call(typeid(f));
    return f();
}
```
### Good
```cpp
#include <typeinfo>

void log_call(const std::type_info&)
{
}

template<class F>
auto wrapper(F f)
{
    log_call(typeid(f));
    return f();
}
```

## Example
```cpp
#include <print>
#include <string>
#include <utility>

//: Hand the result back by value, so the caller owns it.
template <class F>
auto call(F f)
{
    return f();
}

std::string word()
{
    return "ready";
}

int main()
{
    //: Keep the returned value; it lives as long as the name.
    std::string w {call(word)};
    //: Let std::move be the one function that returns a T&&.
    std::string moved {std::move(w)};
    std::println("{}", moved);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <utility>

constexpr int&& pick(int&& a)
{
    return std::move(a);
}

constexpr int read()
{
    int&& x {pick(1)};
    return x;
}

int main()
{
    constexpr int r {read()};
    std::printf("%d\n", r);
}
```
Answer: c++14..c++23 undefined constant

## Verdict 2
```cpp
#include <cstdio>

int one()
{
    return 1;
}

template <class F>
auto wrapper(F f)
{
    return f();
}

int main()
{
    auto&& x = wrapper(one);
    std::printf("%d\n", x);
}
```
Answer: c++14..c++23 defined

## Alone 1
Form: run
Write a program that reads two words and prints the longer one. If both have the same length, print the first.
Input: one line, two words.
Output: one line, the longer word.
Limits: each word has 1 to 30 letters.
### Examples
```in
cat horse
```
```out
horse
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

std::string longer(const std::string& a, const std::string& b)
{
    return a.size() >= b.size() ? a : b;
}

int main()
{
    std::string x;
    std::string y;
    std::cin >> x >> y;
    std::println("{}", longer(x, y));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <utility>

std::string&& longer(std::string&& a, std::string&& b)
{
    return a.size() >= b.size() ? std::move(a) : std::move(b);
}

int main()
{
    std::string x;
    std::string y;
    std::cin >> x >> y;
    std::println("{}", longer(std::move(x), std::move(y)));
}
```
### Tests
```in
a b
```
```in
abcdefghijklmnopqrstuvwxyzabcd z
```
```in
z abcdefghijklmnopqrstuvwxyzabcd
```
```in
dog cat
```
### Witness
```cpp
#include <print>
#include <typeinfo>

template <class F>
auto wrapper(F f)
{
    std::println("{}", typeid(f) == typeid(f));
    return f();
}

int seven()
{
    return 7;
}

int main()
{
    auto&& x = wrapper(seven);
    std::println("{}", x);
}
```

## Alone 2
Form: run
Write a program that reads n integers and prints them sorted from the smallest to the largest.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the n integers in order, separated by spaces.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
4
3 1 4 1
```
```out
1 1 3 4
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <vector>

std::vector<int> sorted(std::vector<int> v)
{
    std::ranges::sort(v);
    return v;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::vector<int> s {sorted(v)};
    for (std::size_t i {0}; i < s.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", s[i]);
    }
    std::println("");
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <utility>
#include <vector>

std::vector<int>&& sorted(std::vector<int>&& v)
{
    std::ranges::sort(v);
    return std::move(v);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::vector<int> s {sorted(std::move(v))};
    for (std::size_t i {0}; i < s.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", s[i]);
    }
    std::println("");
}
```
### Tests
```in
1
-1000
```
```in
5
1000 -1000 0 999 -999
```
```in
6
6 5 4 3 2 1
```
### Witness
```cpp
#include <print>
#include <string>

std::string join(std::string a, const std::string& b)
{
    a += b;
    return a;
}

int main()
{
    std::println("{}", join("to", "gether"));
}
```
