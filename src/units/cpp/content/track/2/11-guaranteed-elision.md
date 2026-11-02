# 2.11 Guaranteed copy elision
Part: guaranteed copy elision
Clause: [dcl.init.general], [class.copy.elision], [basic.lval], [conv.rval], [stmt.return], [expr.call]
After: none
Levels: c++11

## Example
```cpp
#include <print>

//: Forbid copies and moves of a Gate.
struct Gate {
    int id;
    Gate(int i) : id {i}
    {
    }
    Gate(const Gate& other) = delete;
};

//: Return a prvalue, so the caller's Gate is made in place.
Gate open(int i)
{
    return Gate {i};
}

//: Take a Gate by value, made straight from a prvalue.
int id_of(Gate g)
{
    return g.id;
}

int main()
{
    //: Make Gates from prvalues; no copy or move is called.
    Gate a = open(7);
    std::println("{} {}", a.id, id_of(Gate {8}));
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Lock {
    int id;
    Lock(int i) : id {i}
    {
    }
    Lock(Lock&& other) = delete;
};

Lock make(int i)
{
    return Lock {i};
}

int main()
{
    Lock a = make(7);
    std::printf("%d\n", a.id);
}
```
Answer:
- c++11..c++14: ill-formed 13, 18
- c++17..c++23: defined

## Verdict 2
```cpp
#include <cstdio>

struct Lock {
    int id;
    Lock(int i) : id {i}
    {
    }
    Lock(Lock&& other) = delete;
};

Lock make(int i)
{
    Lock kept {i};
    return kept;
}

int main()
{
    Lock a = make(7);
    std::printf("%d\n", a.id);
}
```
Answer:
- c++11..c++14: ill-formed 14, 19
- c++17..c++23: ill-formed 14

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>
#include <utility>

using Where = std::source_location;

struct Probe {
    Probe() = default;
    Probe(const Probe& other, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
    Probe(Probe&& other, Where at = Where::current())
    {
        std::println("@{} moves", at.line());
    }
};

Probe make()
{
    return Probe {};
}

void take(Probe p)
{
}

int main()
{
    Probe a = Probe {};
    Probe b = make();
    Probe c = std::move(a);
    take(Probe {});
    take(make());
    take(b);
    take(std::move(c));
}
```

## Alone 1
Form: flag
Write a program with a struct `Gate` that holds an int and can be neither copied nor moved, a function `make(int)` that returns a Gate holding the int, and a `main` that initialises a Gate with `make(5)`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors: rejected at c++11 and c++14, accepted at c++17 to c++23.
Expect:
- c++11..c++14: reject
- c++17..c++23: accept
### Reference
```cpp
struct Gate {
    int id;
    Gate(int i) : id {i}
    {
    }
    Gate(const Gate& other) = delete;
};

Gate make(int i)
{
    return Gate {i};
}

int main()
{
    Gate g = make(5);
}
```
### Wrong
```cpp
struct Gate {
    int id;
    Gate(int i) : id {i}
    {
    }
    Gate(const Gate& other) = delete;
};

Gate make(int i)
{
    Gate g {i};
    return g;
}

int main()
{
    Gate g = make(5);
}
```
### Witness
```cpp
Gate kept = make(1);
```

## Alone 2
Form: probes
Write a struct `Gate`, made from an int, that holds the int and can be neither copied nor moved, and a function `id_of(Gate g)` that takes a Gate by value and returns its int.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
int a {id_of(Gate {4})};
Gate b {5};
int c {id_of(std::move(b))};
int d {id_of(b)};
```
Accept: 1, 2
Reject: 3, 4
### Reference
```cpp
#include <utility>

struct Gate {
    int id;
    Gate(int i) : id {i}
    {
    }
    Gate(const Gate& other) = delete;
};

int id_of(Gate g)
{
    return g.id;
}

int main()
{
}
```
### Wrong
```cpp
#include <utility>

struct Gate {
    int id;
    Gate(int i) : id {i}
    {
    }
    Gate(Gate&& other) = default;
};

int id_of(Gate g)
{
    return g.id;
}

int main()
{
}
```
### Witness
```cpp
Gate e {6};
int f {id_of(std::move(e))};
```
