# 2.01 Copy elision the clause leaves to the compiler
Part: copy elision the clause leaves to the compiler
Clause: [class.copy.elision], [stmt.return], [expr.const]
After: none
Levels: c++11

## Example
```cpp
#include <print>

//: Keep the number of copies and moves in two variables.
int copies {0};
int moves {0};

//: Count every copy and every move of a Tally.
struct Tally {
    Tally()
    {
    }
    Tally(const Tally&)
    {
        ++copies;
    }
    Tally(Tally&&)
    {
        ++moves;
    }
};

//: Return a local by name, so the compiler may skip the move.
Tally make()
{
    Tally t;
    return t;
}

//: Return a parameter by name, which the compiler may not skip.
Tally pass(Tally t)
{
    return t;
}

int main()
{
    //: Print the counts after each call.
    Tally a {make()};
    std::println("{} {}", copies, moves);
    Tally b {pass(a)};
    std::println("{} {}", copies, moves);
}
```

## Verdict 1
```cpp
#include <cstdio>

int copies {0};
int moves {0};

struct Tally {
    Tally()
    {
    }
    Tally(const Tally&)
    {
        ++copies;
    }
    Tally(Tally&&)
    {
        ++moves;
    }
};

Tally make()
{
    Tally t;
    return t;
}

int main()
{
    make();
    std::printf("%d %d\n", copies, moves);
}
```
Answer: c++11..c++23 unspecified
```out
0 0
```
```out
0 1
```

## Verdict 2
```cpp
struct Tally {
    int moves {0};
    constexpr Tally()
    {
    }
    constexpr Tally(const Tally& other) : moves {other.moves}
    {
    }
    constexpr Tally(Tally&& other) : moves {other.moves + 1}
    {
    }
};

constexpr Tally make()
{
    Tally t;
    return t;
}

static_assert(make().moves == 1, "");

int main()
{
}
```
Answer: c++14..c++23 defined
Levels: c++14

## Alone 1
Form: flag
Write a program with a struct `Slot` holding an int, which cannot be copied, and a function `make(n)` that makes a local Slot named `result` from n and returns `result`; `main` makes a Slot from `make(4)`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors, at every level from c++11 to c++23.
Expect:
- c++11..c++23: accept
### Reference
```cpp
struct Slot {
    int value;
    Slot(int n) : value {n}
    {
    }
    Slot(const Slot&) = delete;
    Slot(Slot&&) = default;
};

Slot make(int n)
{
    Slot result {n};
    return result;
}

int main()
{
    Slot s {make(4)};
}
```
### Wrong
```cpp
struct Slot {
    int value;
    Slot(int n) : value {n}
    {
    }
    Slot(const Slot&) = delete;
    Slot(Slot&&) = delete;
};

Slot make(int n)
{
    Slot result {n};
    return result;
}

int main()
{
    Slot s {make(4)};
}
```
### Witness
```cpp
Slot twice(int n)
{
    Slot s {2 * n};
    return s;
}
```

## Alone 2
Form: probes
Write a struct `Count` with an int member `moves` that starts at 0, whose move constructor makes the new object's `moves` one more than the source's, and a constexpr function `make()` that returns a Count whose `moves` is 0, also when `make()` runs in a constant expression.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
static_assert(make().moves == 0, "");
constexpr Count kept {make()};
static_assert(make().moves == 1, "");
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
struct Count {
    int moves {0};
    constexpr Count()
    {
    }
    constexpr Count(Count&& other) : moves {other.moves + 1}
    {
    }
};

constexpr Count make()
{
    return Count {};
}

int main()
{
}
```
### Wrong
```cpp
struct Count {
    int moves {0};
    constexpr Count()
    {
    }
    constexpr Count(Count&& other) : moves {other.moves + 1}
    {
    }
};

constexpr Count make()
{
    Count c;
    return c;
}

int main()
{
}
```
### Witness
```cpp
static_assert(make().moves == 0, "");
```
