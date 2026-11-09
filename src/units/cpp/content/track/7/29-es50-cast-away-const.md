# 7.29 ES.50: change state behind const with mutable, never const_cast
Part: ES.50 Don't cast away const
Clause: C++ Core Guidelines ES.50, [expr.const.cast], [dcl.type.cv], [expr.const]
After: 1.26, 1.30
Levels: c++14

## Scan
Rule: ES.50
Pattern: /\bconst_cast\s*</
### Bad
```cpp
void f(const int& x)
{
    const_cast<int&>(x) = 42;
}

static int i = 0;
static const int j = 0;

void use()
{
    f(i);
    f(j);
}
```
### Good
```cpp
#include <utility>

using std::pair;

int compute(int x);

class Cache {
public:
    pair<bool, int> find(int x) const;
    void set(int x, int v);
};

class X {
public:
    int get_val(int x) const
    {
        auto p = cache.find(x);
        if (p.first) return p.second;
        int val = compute(x);
        cache.set(x, val);
        return val;
    }
private:
    mutable Cache cache;
};
```

## Example
```cpp
#include <print>

//: Mark the count mutable, so a const member function may change it.
class Store {
public:
    int item {7};
    mutable int reads {0};
    //: Count each read with no cast, in a const member function.
    int get() const
    {
        ++reads;
        return item;
    }
};

int main()
{
    //: Read a const object twice; its count still changes.
    const Store s;
    int sum {s.get() + s.get()};
    std::println("{} {}", sum, s.reads);
}
```

## Verdict 1
```cpp
#include <cstdio>

constexpr int g()
{
    const int j {0};
    const_cast<int&>(j) = 42;
    return j;
}

int main()
{
    constexpr int r {g()};
    std::printf("%d\n", r);
}
```
Answer: c++14..c++23 undefined constant

## Verdict 2
```cpp
#include <cstdio>

void f(const int& x)
{
    const_cast<int&>(x) = 42;
}

int main()
{
    int i {0};
    f(i);
    std::printf("%d\n", i);
}
```
Answer: c++14..c++23 defined

## Alone 1
Form: run
Write a program that reads n words and then q positions, and prints the word at each position, one per line. Keep the words in a class whose const member function `at(i)` returns word i and counts how many times it is called. After the words, print that count.
Input: the first line holds n; the second line holds n words; the third line holds q; the fourth line holds q positions, counted from 0.
Output: q lines, each one word, then one line with the count.
Limits: 1 ≤ n ≤ 20, 0 ≤ q ≤ 20, 0 ≤ position < n, each word has 1 to 10 lowercase letters.
### Examples
```in
3
red green blue
2
2 0
```
```out
blue
red
2
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

class Words {
public:
    std::vector<std::string> list;
    const std::string& at(int i) const
    {
        ++calls;
        return list[static_cast<std::size_t>(i)];
    }
    int count() const
    {
        return calls;
    }
private:
    mutable int calls {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    Words w;
    for (int i {0}; i < n; ++i) {
        std::string s;
        std::cin >> s;
        w.list.push_back(s);
    }
    int q {0};
    std::cin >> q;
    const Words& view {w};
    for (int k {0}; k < q; ++k) {
        int i {0};
        std::cin >> i;
        std::println("{}", view.at(i));
    }
    std::println("{}", view.count());
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <vector>

class Words {
public:
    std::vector<std::string> list;
    const std::string& at(int i) const
    {
        ++const_cast<int&>(calls);
        return list[static_cast<std::size_t>(i)];
    }
    int count() const
    {
        return calls;
    }
private:
    int calls {0};
};

int main()
{
    int n {0};
    std::cin >> n;
    Words w;
    for (int i {0}; i < n; ++i) {
        std::string s;
        std::cin >> s;
        w.list.push_back(s);
    }
    int q {0};
    std::cin >> q;
    const Words& view {w};
    for (int k {0}; k < q; ++k) {
        int i {0};
        std::cin >> i;
        std::println("{}", view.at(i));
    }
    std::println("{}", view.count());
}
```
### Tests
```in
1
a
0

```
```in
2
abcdefghij b
3
1 1 0
```
```in
4
w x y z
5
3 2 1 0 3
```
### Witness
```cpp
void f(int& x)
{
    x = 42;
}

static int i = 0;

void use()
{
    f(i);
}
```

## Alone 2
Form: run
Write a program that reads n and n integers and prints the smallest and the largest. Find them in a function that takes the numbers as a const reference to a std::vector<int> and sorts them.
Input: the first line holds n; the second line holds n integers separated by spaces.
Output: one line, the smallest, a space, then the largest.
Limits: 1 ≤ n ≤ 100, every integer is from −1 000 000 000 to 1 000 000 000.
### Examples
```in
3
4 9 2
```
```out
2 9
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <utility>
#include <vector>

std::pair<int, int> ends(const std::vector<int>& v)
{
    std::vector<int> s {v};
    std::ranges::sort(s);
    return {s.front(), s.back()};
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    auto [low, high] = ends(v);
    std::println("{} {}", low, high);
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>
#include <utility>
#include <vector>

std::pair<int, int> ends(const std::vector<int>& v)
{
    auto& s = const_cast<std::vector<int>&>(v);
    std::ranges::sort(s);
    return {s.front(), s.back()};
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v;
    for (int i {0}; i < n; ++i) {
        int x {0};
        std::cin >> x;
        v.push_back(x);
    }
    auto [low, high] = ends(v);
    std::println("{} {}", low, high);
}
```
### Tests
```in
1
-1000000000
```
```in
4
1000000000 -1000000000 0 5
```
```in
3
7 7 7
```
### Witness
```cpp
#include <algorithm>
#include <vector>

int smallest(const std::vector<int>& v)
{
    std::vector<int> s {v};
    std::ranges::sort(s);
    return s.front();
}
```
