# 2.08 When the move constructor is declared implicitly
Part: when the move constructor is declared implicitly
Clause: [class.copy.ctor], [dcl.fct.def.default], [over.match.ctor]
After: none
Levels: c++11

## Example
```cpp
#include <print>
#include <string>
#include <utility>

//: Declare no special member, so the compiler declares a move.
struct Note {
    std::string text;
};

//: Declare a destructor, so no move constructor is declared.
struct Logged {
    std::string text;
    ~Logged()
    {
    }
};

int main()
{
    //: Move a Note, which moves its text.
    Note a {"abc"};
    Note b {std::move(a)};
    //: Move a Logged, which copies its text instead.
    Logged c {"abc"};
    Logged d {std::move(c)};
    std::println("{} {}", b.text, d.text);
}
```

## Verdict 1
```cpp
#include <utility>

struct Handle {
    int id;
    Handle(int i) : id {i}
    {
    }
    Handle(const Handle& other) = delete;
};

int main()
{
    Handle a {1};
    Handle b {std::move(a)};
}
```
Answer: c++11..c++23 ill-formed 14

## Verdict 2
```cpp
#include <utility>

struct Pair {
    int a;
    int b;
    Pair& operator=(Pair&& other) = default;
};

int main()
{
    Pair x {1, 2};
    Pair y {std::move(x)};
}
```
Answer: c++11..c++23 ill-formed 12

## Count
Columns: copies, moves
```cpp
#include <print>
#include <utility>

int at {0};

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

struct Plain {
    Probe p;
};

struct Logged {
    Probe p;
    ~Logged() = default;
};

int main()
{
    Plain a;
    Logged b;
    at = __LINE__ + 1;
    Plain c {std::move(a)};
    at = __LINE__ + 1;
    Logged d {std::move(b)};
}
```

## Alone 1
Form: probes
Write a struct `Sensor`, made from an int, that keeps the int in a `std::unique_ptr<int>`, prints `closed` when it is destroyed, and can be moved.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
Sensor a {1};
Sensor b {std::move(a)};
Sensor c {b};
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <memory>
#include <print>
#include <utility>

struct Sensor {
    std::unique_ptr<int> value;
    Sensor(int v) : value {std::make_unique<int>(v)}
    {
    }
    Sensor(Sensor&& other) = default;
    ~Sensor()
    {
        std::println("closed");
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <memory>
#include <print>
#include <utility>

struct Sensor {
    std::unique_ptr<int> value;
    Sensor(int v) : value {std::make_unique<int>(v)}
    {
    }
    ~Sensor()
    {
        std::println("closed");
    }
};

int main()
{
}
```
### Witness
```cpp
Sensor d {4};
Sensor e {std::move(d)};
```

## Alone 2
Form: flag
Write a program with a struct `Cache` that keeps an int in a `std::unique_ptr<int>`, is made from an int, has its own copy assignment operator that copies the int, and can be moved, and a `main` that moves one Cache into a new Cache.
Input: none.
Output: none.
Limits: g++ 16 at c++11 to c++23 with -pedantic-errors.
Expect:
- c++11..c++23: accept
### Reference
```cpp
#include <memory>
#include <type_traits>
#include <utility>

struct Cache {
    std::unique_ptr<int> value;
    Cache(int v) : value {new int {v}}
    {
    }
    Cache(Cache&& other) = default;
    Cache& operator=(const Cache& other)
    {
        value.reset(new int {*other.value});
        return *this;
    }
};

int main()
{
    Cache a {3};
    Cache b {std::move(a)};
}
```
### Wrong
```cpp
#include <memory>
#include <type_traits>
#include <utility>

struct Cache {
    std::unique_ptr<int> value;
    Cache(int v) : value {new int {v}}
    {
    }
    Cache& operator=(const Cache& other)
    {
        value.reset(new int {*other.value});
        return *this;
    }
};

int main()
{
    Cache a {3};
    Cache b {std::move(a)};
}
```
### Witness
```cpp
static_assert(std::is_move_constructible<Cache>::value, "");
```
