# 5.22 Temporaries in a range-based for live until the loop ends
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.stmt] ¶1
Clause: [diff.cpp20.stmt], [stmt.ranged], [class.temporary], [expr.const]
After: 5.01
Levels: c++20

## Example
```cpp
#include <print>
#include <vector>

struct Bag {
    std::vector<int> items {4, 5, 6};
    const std::vector<int>& get() const
    {
        return items;
    }
};

int main()
{
    //: Loop over a member of a temporary: it lives until the loop ends.
    for (int x : Bag {}.get()) {
        std::println("{}", x);
    }
    //: Name the object first where the code must also run at c++20.
    Bag bag;
    for (int x : bag.get()) {
        std::println("{}", x);
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <optional>
#include <vector>

std::optional<std::vector<int>> make()
{
    return std::vector {1, 2, 3};
}

int main()
{
    int total {0};
    for (int x : make().value()) {
        total += x;
    }
    std::printf("%d\n", total);
}
```
Answer:
- c++20: undefined sanitizer
- c++23: defined

## Verdict 2
```cpp
#include <array>
#include <cstdio>

struct Box {
    std::array<int, 3> items {1, 2, 3};
    constexpr const std::array<int, 3>& get() const
    {
        return items;
    }
};

constexpr int sum()
{
    int total {0};
    for (int x : Box {}.get()) {
        total += x;
    }
    return total;
}

int main()
{
    constexpr int s {sum()};
    std::printf("%d\n", s);
}
```
Answer:
- c++20: undefined constant
- c++23: defined

## Alone 1
Form: flag
Write a program that sums, in a constexpr function `total()`, the ints of a temporary `Box` with a range-based for loop. `Box` is a struct that holds `std::array<int, 4> items` with 1, 2, 3, 4. Its constexpr member function `get()` returns a const reference to `items`. The loop runs over `get()` of the temporary. The program checks `static_assert(total() == 10);`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors rejects the program at c++20 and accepts it at c++23.
Expect:
- c++20: reject
- c++23: accept
### Reference
```cpp
#include <array>

struct Box {
    std::array<int, 4> items {1, 2, 3, 4};
    constexpr const std::array<int, 4>& get() const
    {
        return items;
    }
};

constexpr int total()
{
    int sum {0};
    for (int x : Box {}.get()) {
        sum += x;
    }
    return sum;
}

static_assert(total() == 10);

int main()
{
}
```
### Wrong
```cpp
#include <array>

struct Box {
    std::array<int, 4> items {1, 2, 3, 4};
    constexpr const std::array<int, 4>& get() const
    {
        return items;
    }
};

constexpr int total()
{
    int sum {0};
    const std::array<int, 4>& items {Box {}.get()};
    for (int x : items) {
        sum += x;
    }
    return sum;
}

static_assert(total() == 10);

int main()
{
}
```
### Witness
```cpp
static_assert(total() > 0);
```

## Alone 2
Form: flag
Write a program that sums, in a constexpr function `total()`, the ints of the larger of two temporary arrays with a range-based for loop. A constexpr function `longest(a, b)` takes two `const std::array<int, 3>&` and returns a reference to the one whose first int is larger, `a` on a tie. The loop runs over `longest` called on the temporaries `std::array {1, 2, 3}` and `std::array {4, 5, 6}`. The program checks `static_assert(total() == 15);`.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors rejects the program at c++20 and accepts it at c++23.
Expect:
- c++20: reject
- c++23: accept
### Reference
```cpp
#include <array>

using Three = std::array<int, 3>;

constexpr const Three& longest(const Three& a, const Three& b)
{
    if (b[0] > a[0]) {
        return b;
    }
    return a;
}

constexpr int total()
{
    int sum {0};
    for (int x : longest(Three {1, 2, 3}, Three {4, 5, 6})) {
        sum += x;
    }
    return sum;
}

static_assert(total() == 15);

int main()
{
}
```
### Wrong
```cpp
#include <array>

using Three = std::array<int, 3>;

constexpr const Three& longest(const Three& a, const Three& b)
{
    if (b[0] > a[0]) {
        return b;
    }
    return a;
}

constexpr int total()
{
    int sum {0};
    auto&& best {longest(Three {1, 2, 3}, Three {4, 5, 6})};
    for (int x : best) {
        sum += x;
    }
    return sum;
}

static_assert(total() == 15);

int main()
{
}
```
### Witness
```cpp
static_assert(total() != 0);
```
