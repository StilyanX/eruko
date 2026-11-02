# 1.28 Temporaries
Part: temporaries
Clause: [class.temporary], [dcl.init.ref], [expr.call], [intro.execution]
After: 1.26
Levels: c++23

## Example
```cpp
#include <print>

double half(const double& x)
{
    return x / 2;
}

int main()
{
    //: Pass an int where a const double& is asked.
    int count {7};
    //: A temporary double holds 7.0 while the call runs.
    double result {half(count)};
    //: Print the result; the temporary is gone by now.
    std::println("{}", result);
}
```

## Verdict 1
```cpp
#include <print>

const int& pick(const int& x)
{
    return x;
}

int main()
{
    const int& kept {pick(5)};
    std::println("{}", kept);
}
```
Answer: c++23 undefined sanitizer

## Verdict 2
```cpp
#include <print>

const int& pick(const int& x)
{
    return x;
}

int main()
{
    std::println("{}", pick(5) + 1);
}
```
Answer: c++23 defined

## Count
Columns: constructions, copies
```cpp
#include <print>
#include <source_location>

using Where = std::source_location;

struct Value
{
    int v;
    Value(int x, Where at = Where::current()) : v {x}
    {
        std::println("@{} constructions", at.line());
    }
    Value(const Value& o, Where at = Where::current()) : v {o.v}
    {
        std::println("@{} copies", at.line());
    }
};

void by_ref(const Value&)
{
}

void by_value(Value)
{
}

int main()
{
    Value a {1};
    by_ref(a);
    by_ref(2);
    by_value(a);
    by_value(3);
    by_ref(Value {4});
}
```

## Alone 1
Form: sanitizer
Sanitizer: address
Write a program that reads a level v, a drop k and a lowest level low, and prints the level after the drop, never below low.
Input: one line, three integers v, k and low.
Output: one line, the larger of v - k and low.
Limits: -1000000 ≤ v, k, low ≤ 1000000.
### Examples
```in
5 9 0
```
```out
0
```
```in
10 10 3
```
```out
3
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <print>

int main()
{
    int v {0};
    int k {0};
    int low {0};
    std::cin >> v >> k >> low;
    int level {std::max(low, v - k)};
    std::println("{}", level);
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <print>

int main()
{
    int v {0};
    int k {0};
    int low {0};
    std::cin >> v >> k >> low;
    const int& level {std::max(low, v - k)};
    std::println("{}", level);
}
```
### Tests
```in
9 2 3
```
```in
0 0 0
```
```in
-5 -10 -100
```
```in
1 1 1
```
### Witness
```in
20 5 1
```

## Alone 2
Form: sanitizer
Sanitizer: address
Write a program that reads n words and prints each one; a word longer than 5 letters is cut to its first 5 letters followed by a full stop.
Input: first line n, then n words, one per line.
Output: n lines, the words in order, each one cut where needed.
Limits: 1 ≤ n ≤ 100; each word has 1 to 20 lowercase letters.
### Examples
```in
3
cat
house
tree
```
```out
cat
house
tree
```
```in
1
a
```
```out
a
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <string_view>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string word;
        std::cin >> word;
        std::string shown {word};
        if (word.size() > 5) {
            shown = word.substr(0, 5) + ".";
        }
        std::println("{}", shown);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <string_view>

int main()
{
    int n {0};
    std::cin >> n;
    for (int i {0}; i < n; ++i) {
        std::string word;
        std::cin >> word;
        std::string_view shown {word};
        if (word.size() > 5) {
            shown = word.substr(0, 5) + ".";
        }
        std::println("{}", shown);
    }
}
```
### Tests
```in
2
garden
sun
```
```in
1
abcdefghijklmnopqrst
```
```in
3
abcde
abcdef
ab
```
### Witness
```in
1
window
```
