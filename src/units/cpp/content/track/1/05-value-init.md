# 1.05 Value initialisation
Part: value initialisation
Clause: [dcl.init.general], [dcl.init.list], [dcl.init.aggr], [class.default.ctor], [expr.const]
After: none
Levels: c++23

## Example
```cpp
#include <print>
#include <vector>

int main()
{
    //: Write empty braces to start a number at zero.
    int count {};
    double sum {};
    //: Ask for 4 elements; each one starts at zero.
    std::vector<int> tally(4);
    //: Print the values.
    std::println("{} {} {}", count, sum, tally[3]);
}
```

## Verdict 1
```cpp
#include <print>

struct Tally
{
    int count;
    constexpr Tally()
    {
    }
};

constexpr Tally first {};

int main()
{
    std::println("{}", first.count);
}
```
Answer: c++23 ill-formed 11

## Verdict 2
```cpp
#include <print>

struct Tally
{
    int count;
    constexpr Tally() = default;
};

constexpr Tally first {};

int main()
{
    std::println("{}", first.count);
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Write a struct Tally with one int member count and a constexpr constructor that takes no arguments, so that `Tally {}` holds a count of 0 when it is made at compile time.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
struct Tally
{
    int count;
    constexpr Tally() : count {}
    {
    }
};

int main()
{
}
```
### Wrong
```cpp
struct Tally
{
    int count;
    constexpr Tally()
    {
    }
};

int main()
{
}
```
### Probes
```cpp
constexpr Tally t {};
static_assert(t.count == 0);
static_assert(t.count == 1);
```
Accept: 1, 2
Reject: 3
### Witness
```cpp
constexpr int w {Tally {}.count};
```

## Alone 2
Form: flag
Expect:
- c++23: accept
Write a program with a function `constexpr int distinct_digits(int n)` that returns how many different decimal digits n has, and the line `static_assert(distinct_digits(1231) == 3);` after it.
Input: none.
Output: none.
Limits: 1 ≤ n ≤ 1000000000.
### Reference
```cpp
constexpr int distinct_digits(int n)
{
    bool seen[10] {};
    int count {0};
    while (n > 0) {
        if (!seen[n % 10]) {
            seen[n % 10] = true;
            ++count;
        }
        n /= 10;
    }
    return count;
}

static_assert(distinct_digits(1231) == 3);

int main()
{
}
```
### Wrong
```cpp
constexpr int distinct_digits(int n)
{
    bool seen[10];
    int count {0};
    while (n > 0) {
        if (!seen[n % 10]) {
            seen[n % 10] = true;
            ++count;
        }
        n /= 10;
    }
    return count;
}

static_assert(distinct_digits(1231) == 3);

int main()
{
}
```
### Witness
```cpp
static_assert(distinct_digits(7) == 1);
```
