# 2.09 When the move assignment is declared implicitly
Part: when the move assignment is declared implicitly
Clause: [class.copy.assign], [class.copy.ctor], [dcl.fct.def.default], [over.match.oper]
After: 2.08
Levels: c++11

## Example
```cpp
#include <print>
#include <string>
#include <utility>

//: Declare no special member, so a move assignment is declared.
struct Note {
    std::string text;
};

//: Declare a destructor, so no move assignment is declared.
struct Logged {
    std::string text;
    ~Logged()
    {
    }
};

int main()
{
    //: Move-assign a Note, which moves its text.
    Note a {"abc"};
    Note b {"x"};
    b = std::move(a);
    //: Move-assign a Logged, which copies its text instead.
    Logged c {"abc"};
    Logged d {"x"};
    d = std::move(c);
    std::println("{} {}", b.text, d.text);
}
```

## Verdict 1
```cpp
#include <utility>

struct Slot {
    int value;
    Slot(int v) : value {v}
    {
    }
    Slot(Slot&& other) = default;
};

int main()
{
    Slot a {1};
    Slot b {2};
    b = std::move(a);
}
```
Answer: c++11..c++23 ill-formed 15

## Verdict 2
```cpp
#include <cstdio>
#include <string>
#include <utility>

struct Name {
    std::string text;
    Name(const char* t) : text {t}
    {
    }
    Name(const Name& other) : text {other.text}
    {
        std::puts("copy");
    }
};

int main()
{
    Name a {"abc"};
    Name b {"x"};
    b = std::move(a);
    std::puts(b.text.c_str());
}
```
Answer: c++11..c++23 defined

## Count
Columns: copies, moves
```cpp
#include <print>
#include <utility>

int at {0};

struct Probe {
    Probe& operator=(const Probe& other)
    {
        std::println("@{} copies", at);
        return *this;
    }
    Probe& operator=(Probe&& other)
    {
        std::println("@{} moves", at);
        return *this;
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
    Plain b;
    Logged c;
    Logged d;
    at = __LINE__ + 1;
    b = std::move(a);
    at = __LINE__ + 1;
    d = std::move(c);
}
```

## Alone 1
Form: flag
Write a program with a struct `Buffer` that keeps an int in a `std::unique_ptr<int>`, prints `freed` when it is destroyed, and can be moved and move-assigned, and a `main` that move-assigns one Buffer to another.
Input: none.
Output: none.
Limits: g++ 16 at c++11 to c++23 with -pedantic-errors.
Expect:
- c++11..c++23: accept
### Reference
```cpp
#include <cstdio>
#include <memory>
#include <type_traits>
#include <utility>

struct Buffer {
    std::unique_ptr<int> value;
    Buffer(int v) : value {new int {v}}
    {
    }
    Buffer(Buffer&& other) = default;
    Buffer& operator=(Buffer&& other) = default;
    ~Buffer()
    {
        std::puts("freed");
    }
};

int main()
{
    Buffer a {1};
    Buffer b {2};
    b = std::move(a);
}
```
### Wrong
```cpp
#include <cstdio>
#include <memory>
#include <type_traits>
#include <utility>

struct Buffer {
    std::unique_ptr<int> value;
    Buffer(int v) : value {new int {v}}
    {
    }
    Buffer(Buffer&& other) = default;
    ~Buffer()
    {
        std::puts("freed");
    }
};

int main()
{
    Buffer a {1};
    Buffer b {2};
    b = std::move(a);
}
```
### Witness
```cpp
static_assert(std::is_move_assignable<Buffer>::value, "");
```

## Alone 2
Form: probes
Write a struct `Lock`, made from an int, that can be move-assigned but cannot be copied or copy-assigned. Declare no more special member functions than you need.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
Lock a {1};
Lock b {2};
Lock& r {b = Lock {3}};
Lock& s {b = a};
Lock c {a};
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
struct Lock {
    int value;
    Lock& operator=(Lock&& other) = default;
};

int main()
{
}
```
### Wrong
```cpp
struct Lock {
    int value;
    ~Lock() = default;
};

int main()
{
}
```
### Witness
```cpp
Lock d {4};
Lock e {d};
```
