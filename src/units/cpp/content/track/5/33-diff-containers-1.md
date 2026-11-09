# 5.33 Erase and extract take any key a transparent comparator takes
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.containers] ¶1
Clause: [diff.cpp20.containers], [associative.reqmts.general], [over.match.best], [class.access.base]
After: 4.01
Levels: c++20

## Example
```cpp
#include <functional>
#include <print>
#include <set>
#include <string>
#include <string_view>

int main()
{
    std::set<std::string, std::less<>> names {"ann", "bob"};
    //: Erase by a string_view: with std::less<>, no string is made.
    std::string_view key {"ann"};
    names.erase(key);
    //: Convert first where the key type itself must be compared.
    names.erase(std::string {"bob"});
    std::println("{}", names.size());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <set>

struct B {
    int key;
};

struct Less {
    using is_transparent = void;
    template <typename T, typename U>
    bool operator()(const T& x, const U& y) const
    {
        return x.key < y.key;
    }
};

struct D : private B {
    D() : B {2}
    {
    }
    int drop(std::set<B, Less>& s) const
    {
        return s.erase(*this);
    }
};

int main()
{
    std::set<B, Less> s {B {1}, B {2}};
    D d;
    int n {d.drop(s)};
    std::printf("%d %zu\n", n, s.size());
}
```
Answer:
- c++20: defined
- c++23: ill-formed 13

## Verdict 2
```cpp
#include <cstdio>
#include <set>

struct Less {
    using is_transparent = void;
    template <typename T, typename U>
    bool operator()(const T& x, const U& y) const
    {
        return x.id < y.id;
    }
};

struct Key {
    int id;
};

struct Ticket {
    int number;
    operator Key() const
    {
        return Key {number};
    }
};

int main()
{
    std::set<Key, Less> keys {Key {1}, Key {2}};
    Ticket t {2};
    auto node {keys.extract(t)};
    std::printf("%zu %d\n", keys.size(), node.value().id);
}
```
Answer:
- c++20: defined
- c++23: ill-formed 9

## Alone 1
Form: flag
Write a program that has `struct B { int key; auto operator<=>(const B&) const = default; };`, a struct `D` that derives privately from `B`, and a member function `void D::forget(std::set<B, std::less<>>& s) const` that erases from `s` the element equal to the `B` inside the `D`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors accepts the program at c++20 and at c++23.
Expect:
- c++20: accept
- c++23: accept
### Reference
```cpp
#include <compare>
#include <functional>
#include <set>

struct B {
    int key;
    auto operator<=>(const B&) const = default;
};

struct D : private B {
    void forget(std::set<B, std::less<>>& s) const
    {
        s.erase(static_cast<const B&>(*this));
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <compare>
#include <functional>
#include <set>

struct B {
    int key;
    auto operator<=>(const B&) const = default;
};

struct D : private B {
    void forget(std::set<B, std::less<>>& s) const
    {
        s.erase(*this);
    }
};

int main()
{
}
```
### Witness
```cpp
void probe(const D& d, std::set<B, std::less<>>& s)
{
    d.forget(s);
}
```

## Alone 2
Form: flag
Write a function `remove(std::set<std::string, std::less<>>& names, std::string_view name)` that erases `name` from `names` and returns how many it erased, without making a `std::string`. The program is rejected at c++20 and accepted at c++23.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors at c++20 and c++23.
Expect:
- c++23: accept
- c++20..c++20: reject
### Reference
```cpp
#include <cstddef>
#include <functional>
#include <set>
#include <string>
#include <string_view>

using Names = std::set<std::string, std::less<>>;

std::size_t remove(Names& names, std::string_view name)
{
    return names.erase(name);
}

int main()
{
}
```
### Wrong
```cpp
#include <cstddef>
#include <functional>
#include <set>
#include <string>
#include <string_view>

using Names = std::set<std::string, std::less<>>;

std::size_t remove(Names& names, std::string_view name)
{
    return names.erase(std::string {name});
}

int main()
{
}
```
### Witness
```cpp
int probe {0};
```
