# 1.02 Default initialisation
Part: default initialisation
Clause: [dcl.init.general], [basic.indet], [class.default.ctor], [expr.const]
After: none
Levels: c++23

## Example
```cpp
#include <print>
#include <string>

int main()
{
    //: Make a string with no initializer; it starts empty.
    std::string name;
    //: Make an int with no initializer and give it a value first.
    int count;
    count = 3;
    //: Print the size of the string and the count.
    std::println("{} {}", name.size(), count);
}
```

## Verdict 1
```cpp
#include <print>

constexpr int last_square(int n)
{
    int square;
    for (int i {1}; i < n; ++i) {
        square = i * i;
    }
    return square;
}

constexpr int result {last_square(1)};

int main()
{
    std::println("{}", result);
}
```
Answer: c++23 undefined constant

## Verdict 2
```cpp
#include <print>
#include <string>

int hits;

int main()
{
    std::string name;
    std::println("{} {}", hits, name.size());
}
```
Answer: c++23 defined

## Alone 1
Form: flag
Expect:
- c++23: accept
Write a program with a function `constexpr int digit_sum(int n)` that returns the sum of the decimal digits of n, and the line `static_assert(digit_sum(1234) == 10);` after it.
Input: none.
Output: none.
Limits: 0 ≤ n ≤ 1000000000.
### Reference
```cpp
constexpr int digit_sum(int n)
{
    int sum {0};
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

static_assert(digit_sum(1234) == 10);

int main()
{
}
```
### Wrong
```cpp
constexpr int digit_sum(int n)
{
    int sum;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

static_assert(digit_sum(1234) == 10);

int main()
{
}
```
### Witness
```cpp
static_assert(digit_sum(7) == 7);
```

## Alone 2
Form: probes
Write a struct Counter with one int member hits, such that a Counter made with no initializer holds 0 hits, a const one too.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
struct Counter
{
    int hits {0};
};

int main()
{
}
```
### Wrong
```cpp
struct Counter
{
    int hits;
};

int main()
{
}
```
### Probes
```cpp
const Counter first;
Counter second;
static_assert(Counter {}.hits == 1);
```
Accept: 1, 2
Reject: 3
### Witness
```cpp
const Counter third;
```
