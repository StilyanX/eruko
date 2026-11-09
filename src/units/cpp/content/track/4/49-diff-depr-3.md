# 4.49 The members std::allocator lost
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.depr] ¶3
Clause: [diff.cpp17.depr], [default.allocator], [allocator.members], [allocator.traits]
After: none
Levels: c++17

## Example
```cpp
#include <cstdio>
#include <memory>

int main()
{
    //: Get room for one int from the allocator.
    std::allocator<int> alloc;
    using Traits = std::allocator_traits<std::allocator<int>>;
    Traits::pointer p {alloc.allocate(1)};
    //: Build and destroy the int through allocator_traits.
    Traits::construct(alloc, p, 7);
    std::printf("%d\n", *p);
    Traits::destroy(alloc, p);
    alloc.deallocate(p, 1);
    //: Ask allocator_traits for an allocator of double.
    Traits::rebind_alloc<double> other;
    double* q {other.allocate(1)};
    other.deallocate(q, 1);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <memory>

int main()
{
    std::allocator<int> alloc;
    int* p {alloc.allocate(1)};
    alloc.construct(p, 7);
    std::printf("%d\n", *p);
    alloc.deallocate(p, 1);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 8

## Verdict 2
```cpp
#include <cstdio>
#include <memory>

int main()
{
    std::allocator<int> alloc;
    int* p {alloc.allocate(2, nullptr)};
    p[0] = 3;
    std::printf("%d\n", p[0]);
    alloc.deallocate(p, 2);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 7

## Alone 1
Form: flag
Write a program that gets room for one int from a std::allocator<int>, builds the value 5 there and destroys it again by calling member functions of the allocator itself, and prints the value in between; the program is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, 5.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <cstdio>
#include <memory>

int main()
{
    std::allocator<int> alloc;
    int* p {alloc.allocate(1)};
    alloc.construct(p, 5);
    std::printf("%d\n", *p);
    alloc.destroy(p);
    alloc.deallocate(p, 1);
}
```
### Wrong
```cpp
#include <cstdio>
#include <memory>

int main()
{
    std::allocator<int> alloc;
    using Traits = std::allocator_traits<std::allocator<int>>;
    int* p {alloc.allocate(1)};
    Traits::construct(alloc, p, 5);
    std::printf("%d\n", *p);
    Traits::destroy(alloc, p);
    alloc.deallocate(p, 1);
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program with a function template that takes an allocator of any element type and returns an allocator of the same kind for double; main passes it a std::allocator<int>, gets room for one double from the result, stores 2.5 there and prints it. The program is accepted at c++17, c++20 and c++23.
Input: none.
Output: one line, 2.5.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <cstdio>
#include <memory>

template <typename A>
auto for_double(const A& alloc)
{
    using T = std::allocator_traits<A>;
    using Other = typename T::template rebind_alloc<double>;
    return Other {alloc};
}

int main()
{
    std::allocator<int> ints;
    auto doubles = for_double(ints);
    double* p {doubles.allocate(1)};
    *p = 2.5;
    std::printf("%.1f\n", *p);
    doubles.deallocate(p, 1);
}
```
### Wrong
```cpp
#include <cstdio>
#include <memory>

template <typename A>
auto for_double(const A& alloc)
{
    using Other = typename A::template rebind<double>::other;
    return Other {alloc};
}

int main()
{
    std::allocator<int> ints;
    auto doubles = for_double(ints);
    double* p {doubles.allocate(1)};
    *p = 2.5;
    std::printf("%.1f\n", *p);
    doubles.deallocate(p, 1);
}
```
### Witness
```cpp
int probe {0};
```
