# 4.24 A pseudo-destructor call ends a lifetime in C++20
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.basic] ¶1
Clause: [diff.cpp17.basic], [basic.life], [expr.prim.id.dtor], [expr.call]
After: 1.17
Levels: c++17

## Example
```cpp
#include <memory>
#include <print>

template<typename T>
T renew(T value, T fresh)
{
    //: End the lifetime of value, an int too at c++20.
    value.~T();
    //: Start a new object in the same place before any read.
    std::construct_at(&value, fresh);
    return value;
}

int main()
{
    //: Print the new value, which is defined at every level.
    std::println("{}", renew(123, 7));
}
```

## Verdict 1
```cpp
#include <cstdio>

template<typename T>
T reset(T value)
{
    value.~T();
    return value;
}

int main()
{
    std::printf("%d\n", reset(123));
}
```
Answer:
- c++17: defined
- c++20..c++23: undefined stored
Derivation 1: At c++20 [basic.life] says a pseudo-destructor call ends the int's lifetime, so return value reads an object outside its lifetime: undefined; at c++17 the call had no effect and 123 is returned.
Derivation 2: [expr.call] at c++20 makes value.~T() with T = int end the lifetime of value ([diff.cpp17.basic] ¶1), and the later read of value uses an int whose lifetime has ended, which [basic.life] leaves undefined; c++17 read a live int.

## Verdict 2
```cpp
#include <cstdio>
#include <new>

template<typename T>
T reset(T value)
{
    value.~T();
    ::new (&value) T {5};
    return value;
}

int main()
{
    std::printf("%d\n", reset(123));
}
```
Answer: c++17..c++23 defined

## Alone 1
Form: flag
Write a program with a constexpr function that makes an int with the value 1, ends its lifetime by a pseudo-destructor call, then gives it the value 7 and returns it; a static_assert checks that the call gives 7, so that the program is accepted at c++20 and c++23.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++20..c++23: accept
### Reference
```cpp
#include <memory>

constexpr int renew()
{
    int value {1};
    using T = int;
    value.~T();
    std::construct_at(&value, 7);
    return value;
}

static_assert(renew() == 7);

int main()
{
}
```
### Wrong
```cpp
#include <memory>

constexpr int renew()
{
    int value {1};
    using T = int;
    value.~T();
    value = 7;
    return value;
}

static_assert(renew() == 7);

int main()
{
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: probes
Write a function template `swap_in` that takes a `T&` slot and a T fresh. It ends the life of the object in the slot with a pseudo-destructor call, makes a new object from fresh in its place, and returns the old value. It must work in a constant expression.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
constexpr int old_of(int a) { int s {a}; return swap_in(s, 8); }
constexpr int new_of(int a) { int s {a}; swap_in(s, 8); return s; }
static_assert(old_of(3) == 3);
static_assert(new_of(3) == 8);
static_assert(old_of(3) == 8);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <memory>

template <typename T>
constexpr T swap_in(T& slot, T fresh)
{
    T old {slot};
    slot.~T();
    std::construct_at(&slot, fresh);
    return old;
}

int main()
{
}
```
### Wrong
```cpp
#include <memory>

template <typename T>
constexpr T swap_in(T& slot, T fresh)
{
    slot.~T();
    T old {slot};
    std::construct_at(&slot, fresh);
    return old;
}

int main()
{
}
```
### Witness
```cpp
constexpr int w(int a) { int s {a}; return swap_in(s, 1); }
static_assert(w(5) == 5);
```
