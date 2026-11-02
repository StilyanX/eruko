# 1.34 When the copy constructor is declared implicitly
Part: when the copy constructor is declared implicitly
Clause: [class.copy.ctor], [class.copy.assign], [dcl.fct.def.delete]
After: none
Levels: c++23

## Example
```cpp
#include <print>
#include <string>
#include <utility>

//: Declare no copy constructor, so the compiler declares one.
struct Point {
    int x;
    int y;
};

//: Declare a move constructor, so the copy constructor is deleted.
struct Buffer {
    std::string text;
    Buffer(std::string t) : text {std::move(t)}
    {
    }
    Buffer(Buffer&& other) = default;
};

int main()
{
    //: Copy a Point member by member.
    Point p {1, 2};
    Point q {p};
    //: Move a Buffer, since it cannot be copied.
    Buffer a {"abc"};
    Buffer b {std::move(a)};
    std::println("{} {} {}", q.x, q.y, b.text);
}
```

## Verdict 1
```cpp
#include <string>

struct Name {
    std::string text;
    Name(std::string t) : text {t}
    {
    }
    Name& operator=(Name&& other) = default;
};

int main()
{
    Name a {"x"};
    Name b {a};
}
```
Answer: c++23 ill-formed 14

## Verdict 2
```cpp
#include <print>

struct Counter {
    int n;
    Counter& operator=(const Counter& other)
    {
        n = other.n;
        return *this;
    }
};

int main()
{
    Counter a {3};
    Counter b {a};
    std::println("{}", b.n);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a struct `Ticket` holding an int number, made from an int, which can be moved but cannot be copied. Declare no more special member functions than you need.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
Ticket a {1};
Ticket b {std::move(a)};
Ticket c {b};
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <utility>

struct Ticket {
    int number;
    Ticket(int n) : number {n}
    {
    }
    Ticket(Ticket&& other) = default;
};

int main()
{
}
```
### Wrong
```cpp
#include <utility>

struct Ticket {
    int number;
    Ticket(int n) : number {n}
    {
    }
    ~Ticket() = default;
};

int main()
{
}
```
### Witness
```cpp
Ticket d {4};
Ticket e {d};
```

## Alone 2
Form: flag
Write a program with a struct `Pair` of two int members, which has its own assignment operator that prints `assign`, and a `main` that makes a new Pair as a copy of another Pair.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
Expect:
- c++23: accept
### Reference
```cpp
#include <print>
#include <type_traits>

struct Pair {
    int first;
    int second;
    Pair& operator=(const Pair& other)
    {
        std::println("assign");
        first = other.first;
        second = other.second;
        return *this;
    }
};

int main()
{
    Pair a {1, 2};
    Pair b {a};
    b = a;
}
```
### Wrong
```cpp
#include <print>
#include <type_traits>

struct Pair {
    int first;
    int second;
    Pair& operator=(Pair&& other)
    {
        std::println("assign");
        first = other.first;
        second = other.second;
        return *this;
    }
};

int main()
{
    Pair a {1, 2};
    Pair b {a};
    b = a;
}
```
### Witness
```cpp
static_assert(std::is_copy_constructible_v<Pair>);
```
