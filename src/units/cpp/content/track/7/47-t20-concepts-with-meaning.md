# 7.47 Constrain with a concept that means something, not with one operation
Part: T.20 Avoid "concepts" without meaningful semantics
Clause: C++ Core Guidelines T.20, [temp.concept], [expr.prim.req.simple], [temp.constr.decl], [over.match.viable]
After: 4.03, 4.04
Levels: c++20

## Scan
Rule: T.20
Pattern: /\bconcept\s+(\w+)\s*=\s*requires\s*\([^()]*\)\s*\{\s*(?:\{[^{}]*\}[^{};]*|[^{};]+);\s*\}\s*;[\s\S]*?(?:<\s*\1\b|,\s*\1\s+\w|\brequires\s*\(?\s*\1\s*<|\b\1\s+auto\b)/
### Bad
```cpp
#include <string>
using std::string;

template<typename T>
// bad; insufficient
concept Addable = requires(T a, T b) { a + b; };

template<Addable N>
auto algo(const N& a, const N& b) // use two numbers
{
    // ...
    return a + b;
}

int x = 7;
int y = 9;
auto z = algo(x, y);        // z = 16

string xx = "7";
string yy = "9";
auto zz = algo(xx, yy);         // zz = "79"
```
### Good
```cpp
#include <string>
using std::string;

template<typename T>
// The operators +, -, *, and / for a number are assumed to
// follow the usual mathematical rules
concept Number = requires(T a, T b) { a + b; a - b; a * b;
                                      a / b; };

template<Number N>
auto algo(const N& a, const N& b)
{
    // ...
    return a + b;
}

int x = 7;
int y = 9;
auto z = algo(x, y);         // z = 16

string xx = "7";
string yy = "9";
// auto zz = algo(xx, yy);   // error: string is not a Number
```

## Example
```cpp
#include <print>
#include <string>

//: Name a concept by a set of operations that means a number.
template <typename T>
concept Number = requires(T a, T b) {
    a + b;
    a - b;
    a * b;
    a / b;
};

//: Constrain the algorithm by that concept.
template <Number N>
auto algo(const N& a, const N& b)
{
    return a + b;
}

int main()
{
    //: Call it with numbers; a std::string is not a Number.
    std::println("{} {}", algo(7, 9), algo(0.5, 0.25));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>

template <typename T>
concept Number = requires(T a, T b) {
    a + b;
    a - b;
    a * b;
    a / b;
};

template <Number N>
auto algo(const N& a, const N& b)
{
    return a + b;
}

int main()
{
    std::string xx {"7"};
    std::string yy {"9"};
    std::string zz {algo(xx, yy)};
    std::printf("%s\n", zz.c_str());
}
```
Answer: c++20..c++23 ill-formed 22

## Verdict 2
```cpp
#include <cstdio>
#include <string>

template <typename T>
concept Addable = requires(T a, T b) { a + b; };

template <Addable N>
auto algo(const N& a, const N& b)
{
    return a + b;
}

int main()
{
    std::string xx {"7"};
    std::string yy {"9"};
    std::string zz {algo(xx, yy)};
    std::printf("%s\n", zz.c_str());
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: run
Write a function template `squares_apart(a, b)`, constrained by a concept for number types, that returns (a + b) * (a - b).
Then write a program that reads two ints and two doubles and prints `squares_apart` of each pair.
Input: the first line holds two ints, the second line holds two doubles.
Output: two lines, the result for the ints, then the result for the doubles as std::println prints a double.
Limits: every int is between -1000 and 1000; every double is between -1000 and 1000 with at most two digits after the point.
### Examples
```in
5 3
2.5 1.5
```
```out
16
4
```
### Reference
```cpp
#include <iostream>
#include <print>

template <typename T>
concept Number = requires(T a, T b) {
    a + b;
    a - b;
    a * b;
    a / b;
};

template <Number N>
N squares_apart(N a, N b)
{
    return (a + b) * (a - b);
}

int main()
{
    int i {0};
    int j {0};
    double x {0.0};
    double y {0.0};
    std::cin >> i >> j >> x >> y;
    std::println("{}", squares_apart(i, j));
    std::println("{}", squares_apart(x, y));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

template <typename T>
concept Number = requires(T a, T b) {
    a + b;
};

template <Number N>
N squares_apart(N a, N b)
{
    return (a + b) * (a - b);
}

int main()
{
    int i {0};
    int j {0};
    double x {0.0};
    double y {0.0};
    std::cin >> i >> j >> x >> y;
    std::println("{}", squares_apart(i, j));
    std::println("{}", squares_apart(x, y));
}
```
### Tests
```in
0 0
0 0
```
```in
1000 -1000
-1000 999.99
```
```in
3 5
0.5 0.25
```
### Witness
```cpp
#include <string>

template <typename T>
concept Number = requires(T a, T b) {
    a + b;
    a - b;
    a * b;
    a / b;
};

template <Number N>
auto algo(const N& a, const N& b)
{
    return a + b;
}

int main()
{
    int z {algo(7, 9)};
    std::string zz {std::string {"7"} + std::string {"9"}};
    return z - static_cast<int>(zz.size());
}
```

## Alone 2
Form: run
Write a function template `largest(a, b, c)`, constrained by a concept for types whose values are ordered, that returns the largest of its three arguments.
Then write a program that reads three ints and three words and prints the largest of each.
Input: the first line holds three ints, the second line holds three words.
Output: two lines, the largest int, then the word that comes last in alphabetical order.
Limits: every int is between -1000 and 1000; every word has 1 to 10 letters, a to z.
### Examples
```in
4 9 2
pear apple plum
```
```out
9
plum
```
### Reference
```cpp
#include <concepts>
#include <iostream>
#include <print>
#include <string>

template <std::totally_ordered T>
T largest(T a, T b, T c)
{
    T best {a};
    if (best < b) {
        best = b;
    }
    if (best < c) {
        best = c;
    }
    return best;
}

int main()
{
    int i {0};
    int j {0};
    int k {0};
    std::string u {};
    std::string v {};
    std::string w {};
    std::cin >> i >> j >> k >> u >> v >> w;
    std::println("{}", largest(i, j, k));
    std::println("{}", largest(u, v, w));
}
```
### Wrong
```cpp
#include <concepts>
#include <iostream>
#include <print>
#include <string>

template <typename T>
concept Less = requires(T a, T b) { a < b; };

template <Less T>
T largest(T a, T b, T c)
{
    T best {a};
    if (best < b) {
        best = b;
    }
    if (best < c) {
        best = c;
    }
    return best;
}

int main()
{
    int i {0};
    int j {0};
    int k {0};
    std::string u {};
    std::string v {};
    std::string w {};
    std::cin >> i >> j >> k >> u >> v >> w;
    std::println("{}", largest(i, j, k));
    std::println("{}", largest(u, v, w));
}
```
### Tests
```in
0 0 0
a a a
```
```in
-1000 -999 -1000
zzzzzzzzzz zz z
```
```in
1000 3 7
bee ant cow
```
### Witness
```cpp
#include <concepts>
#include <string>

template <std::totally_ordered T>
T larger(const T& a, const T& b)
{
    if (a < b) {
        return b;
    }
    return a;
}

int main()
{
    int z {larger(7, 9)};
    std::string zz {larger(std::string {"7"}, std::string {"9"})};
    return z - static_cast<int>(zz.size());
}
```
