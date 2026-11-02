# 2.13 Forwarding with std::forward
Part: `std::forward`
Clause: [forward], [temp.deduct.call], [dcl.ref], [basic.lval], [over.ics.ref]
After: 2.12
Levels: c++11

## Example
```cpp
#include <print>
#include <string>
#include <utility>
#include <vector>

//: Pass x on as it came: an lvalue is copied, an rvalue moved.
template <typename T>
void add(std::vector<std::string>& list, T&& x)
{
    list.push_back(std::forward<T>(x));
}

int main()
{
    //: Add a name that you keep, then a temporary.
    std::vector<std::string> list;
    std::string name {"ada"};
    add(list, name);
    add(list, std::string {"bob"});
    //: Print the list and the name, which was copied, not moved.
    std::println("{} {} {}", list[0], list[1], name);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>

void sink(std::string&& s)
{
    std::puts(s.c_str());
}

template <typename T>
void relay(T&& x)
{
    sink(x);
}

int main()
{
    relay(std::string {"a"});
}
```
Answer: c++11..c++23 ill-formed 12

## Verdict 2
```cpp
#include <cstdio>
#include <string>
#include <utility>

void sink(std::string&& s)
{
    std::puts(s.c_str());
}

template <typename T>
void relay(T&& x)
{
    sink(std::forward<T>(x));
}

int main()
{
    std::string s {"a"};
    relay(s);
}
```
Answer: c++11..c++23 ill-formed 13

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>
#include <utility>

using Where = std::source_location;

unsigned at {0};

struct Probe {
    Probe() = default;
    Probe(const Probe& other)
    {
        std::println("@{} copies", at);
    }
    Probe(Probe&& other)
    {
        std::println("@{} moves", at);
    }
};

template <typename T>
void keep(T&& x, Where w = Where::current())
{
    at = w.line();
    Probe kept {std::forward<T>(x)};
}

template <typename T>
void keep_plain(T&& x, Where w = Where::current())
{
    at = w.line();
    Probe kept {x};
}

int main()
{
    Probe a;
    keep(a);
    keep(Probe {});
    keep(std::move(a));
    keep_plain(Probe {});
}
```

## Alone 1
Form: probes
Write a function template `add(list, x)` that puts x at the end of a `std::vector` variable `list`, copying x when it is an lvalue and moving it when it is an rvalue, and returns the new size of `list`.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
std::vector<std::unique_ptr<int>> owners;
std::vector<std::string> names;
const std::string name {"a"};
std::size_t a {add(owners, std::make_unique<int>(1))};
std::size_t b {add(names, name)};
std::size_t c {add(names, std::string {"b"})};
std::size_t d {add(std::vector<int> {}, 1)};
```
Accept: 1, 2, 3, 4, 5, 6
Reject: 7
### Reference
```cpp
#include <cstddef>
#include <memory>
#include <string>
#include <utility>
#include <vector>

template <typename L, typename T>
std::size_t add(L& list, T&& x)
{
    list.push_back(std::forward<T>(x));
    return list.size();
}

int main()
{
}
```
### Wrong
```cpp
#include <cstddef>
#include <memory>
#include <string>
#include <utility>
#include <vector>

template <typename L, typename T>
std::size_t add(L& list, T&& x)
{
    list.push_back(x);
    return list.size();
}

int main()
{
}
```
### Witness
```cpp
std::vector<std::unique_ptr<int>> held;
std::size_t e {add(held, std::make_unique<int>(2))};
```

## Alone 2
Form: run
Write a program that reads n commands, each `keep v` or `give v`. For each, make a `std::shared_ptr<int>` holding v and add it to one `std::vector` with a function template `add(list, x)` that copies x when it is an lvalue and moves it when it is an rvalue: pass the pointer as an lvalue for `keep` and as an rvalue for `give`. After each command, print the use count of the pointer you made.
Input: one line, n, then n lines, each `keep v` or `give v`.
Output: n lines, one use count each.
Limits: 1 ≤ n ≤ 1000; 0 ≤ v ≤ 1000.
### Examples
```in
2
give 3
give 4
```
```out
0
0
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <utility>
#include <vector>

template <typename T>
void add(std::vector<std::shared_ptr<int>>& list, T&& x)
{
    list.push_back(std::forward<T>(x));
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::shared_ptr<int>> list;
    for (int i {0}; i < n; ++i) {
        std::string command;
        int v {0};
        std::cin >> command >> v;
        std::shared_ptr<int> p {std::make_shared<int>(v)};
        if (command == "keep") {
            add(list, p);
        } else {
            add(list, std::move(p));
        }
        std::println("{}", p.use_count());
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <utility>
#include <vector>

template <typename T>
void add(std::vector<std::shared_ptr<int>>& list, T&& x)
{
    list.push_back(std::move(x));
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<std::shared_ptr<int>> list;
    for (int i {0}; i < n; ++i) {
        std::string command;
        int v {0};
        std::cin >> command >> v;
        std::shared_ptr<int> p {std::make_shared<int>(v)};
        if (command == "keep") {
            add(list, p);
        } else {
            add(list, std::move(p));
        }
        std::println("{}", p.use_count());
    }
}
```
### Tests
```in
1
keep 5
```
```in
3
keep 1
give 2
keep 3
```
```in
4
give 0
give 9
keep 7
give 1
```
### Witness
```in
2
give 1
keep 2
```
