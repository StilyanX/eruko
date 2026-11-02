# 2.07 Overloading on value category
Part: overloading on value category
Clause: [over.ics.rank], [over.match.funcs.general], [over.ics.ref], [dcl.init.ref], [over.match.best]
After: 2.02
Levels: c++11

## Example
```cpp
#include <print>
#include <string>

//: Take a string variable by const reference, to read it in place.
void show(const std::string& s)
{
    std::println("named {}", s);
}

//: Take a string with no name by rvalue reference.
void show(std::string&& s)
{
    std::println("unnamed {}", s);
}

int main()
{
    //: Call show with a variable, then with a value with no name.
    std::string word {"cat"};
    show(word);
    show(word + "s");
}
```

## Verdict 1
```cpp
#include <cstdio>

void f(int x)
{
    std::printf("value %d\n", x);
}

void f(int&& x)
{
    std::printf("rvalue %d\n", x);
}

int main()
{
    int n {1};
    f(n);
    f(n + 1);
}
```
Answer: c++11..c++23 ill-formed 17

## Verdict 2
```cpp
#include <cstdio>
#include <utility>

struct Box {
    int n;
    int& get() &
    {
        return n;
    }
    int get() &&
    {
        return n + 100;
    }
};

int main()
{
    Box b {1};
    b.get() = 5;
    int k {std::move(b).get()};
    std::printf("%d %d\n", b.n, k);
}
```
Answer: c++11..c++23 defined

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>
#include <utility>

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

void store(const Tally& t, Where at = Where::current())
{
    Tally kept {t, at};
}

void store(Tally&& t, Where at = Where::current())
{
    Tally kept {std::move(t), at};
}

int main()
{
    Tally a;
    const Tally c {};
    store(a);
    store(Tally {});
    store(c);
    store(std::move(a));
    store(std::move(c));
}
```

## Alone 1
Form: probes
Write a function `pick(s)` that, given a std::string variable, returns a reference to that variable, and, given a std::string with no name, returns a std::string that holds its text.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
std::string word {"a"};
void p1() { pick(word) = "b"; }
std::string* where {&pick(word)};
std::string kept {pick(word + "c")};
const std::string* lost {&pick(word + "c")};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <string>

std::string& pick(std::string& s)
{
    return s;
}

std::string pick(std::string&& s)
{
    return s;
}

int main()
{
}
```
### Wrong
```cpp
#include <string>

std::string& pick(std::string& s)
{
    return s;
}

const std::string& pick(std::string&& s)
{
    return s;
}

int main()
{
}
```
### Witness
```cpp
const std::string* gone {&pick(std::string {"x"})};
```

## Alone 2
Form: probes
Write a struct `Bag` with a std::vector<int> member `items` and a member function `take()` that, called on a Bag variable, returns a const reference to `items`, and, called on a Bag with no name, returns a std::vector<int> that takes over the items.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
Bag bag {{1, 2}};
const std::vector<int>* seen {&bag.take()};
std::vector<int> all {Bag {{3}}.take()};
const std::vector<int>* gone {&Bag {{4}}.take()};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
#include <utility>
#include <vector>

struct Bag {
    std::vector<int> items;
    const std::vector<int>& take() const&
    {
        return items;
    }
    std::vector<int> take() &&
    {
        return std::move(items);
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <utility>
#include <vector>

struct Bag {
    std::vector<int> items;
    const std::vector<int>& take() const&
    {
        return items;
    }
    const std::vector<int>& take() &&
    {
        return std::move(items);
    }
};

int main()
{
}
```
### Witness
```cpp
const std::vector<int>* lost {&Bag {}.take()};
```
