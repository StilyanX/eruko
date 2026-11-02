# 2.03 Rvalue references
Part: rvalue references
Clause: [dcl.ref], [dcl.init.ref], [basic.lval], [class.temporary]
After: 2.02
Levels: c++11

## Example
```cpp
#include <print>

int twice(int x)
{
    return 2 * x;
}

int main()
{
    //: Bind an rvalue reference to the value a call gives.
    int&& r {twice(4)};
    //: Change that value through the reference, which keeps it alive.
    r += 1;
    //: Bind an lvalue reference to r, since the name r is an lvalue.
    int& alias {r};
    alias += 1;
    std::println("{}", r);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>

std::string name()
{
    return "abc";
}

int main()
{
    std::string&& s {name()};
    s += "d";
    std::printf("%s\n", s.c_str());
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
int main()
{
    int n {1};
    int&& r {n + 1};
    int&& s {r};
    s += n;
}
```
Answer: c++11..c++23 ill-formed 5

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>

using Where = std::source_location;

struct Tally {
    Tally() = default;
    Tally(const Tally&, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
    Tally(Tally&&, Where at = Where::current())
    {
        std::println("@{} moves", at.line());
    }
};

int main()
{
    Tally&& r {Tally {}};
    const Tally& c {r};
    Tally a {r};
    Tally b {static_cast<Tally&&>(r)};
    Tally d {c};
}
```

## Alone 1
Form: probes
Write a function `keep(s)` that takes a std::string with no name, such as the result of a call or of `+`, and returns its length; a call with a std::string variable must not compile.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
std::string word {"ab"};
std::size_t a {keep(word + "c")};
std::size_t b {keep(std::string {"xyz"})};
std::size_t c {keep(word)};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <cstddef>
#include <string>

std::size_t keep(std::string&& s)
{
    return s.size();
}

int main()
{
}
```
### Wrong
```cpp
#include <cstddef>
#include <string>

std::size_t keep(const std::string& s)
{
    return s.size();
}

int main()
{
}
```
### Witness
```cpp
std::string other {"q"};
std::size_t d {keep(other)};
```

## Alone 2
Form: flag
Write a program with a function `grow(v)` that takes a std::vector<int> made in the call, adds a 0 to its end and returns its new size, and a `main` that calls `grow(std::vector<int> {1, 2})`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors, at every level from c++11 to c++23.
Expect:
- c++11..c++23: accept
### Reference
```cpp
#include <cstddef>
#include <vector>

std::size_t grow(std::vector<int>&& v)
{
    v.push_back(0);
    return v.size();
}

int main()
{
    std::size_t n {grow(std::vector<int> {1, 2})};
    return n == 3 ? 0 : 1;
}
```
### Wrong
```cpp
#include <cstddef>
#include <vector>

std::size_t grow(std::vector<int>& v)
{
    v.push_back(0);
    return v.size();
}

int main()
{
    std::size_t n {grow(std::vector<int> {1, 2})};
    return n == 3 ? 0 : 1;
}
```
### Witness
```cpp
std::size_t again()
{
    return grow(std::vector<int> {});
}
```
