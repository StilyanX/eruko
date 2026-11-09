# 7.05 Return a local by its name, not through std::move
Part: F.48 Don't return std::move(local)
Clause: C++ Core Guidelines F.48, [class.copy.elision], [stmt.return]
After: 2.04
Levels: c++11

## Scan
Rule: F.48
Warning: -Wpessimizing-move, -Wredundant-move
### Bad
```cpp
#include <utility>

struct S {
    int v {0};
};

S bad()
{
  S result;
  return std::move(result);
}
```
### Good
```cpp
struct S {
    int v {0};
};

S good()
{
  S result;
  return result;
}
```

## Example
```cpp
#include <print>
#include <vector>

std::vector<int> squares(int n)
{
    //: Fill a local vector.
    std::vector<int> out;
    for (int i {1}; i <= n; ++i) {
        out.push_back(i * i);
    }
    //: Return it by its name, so it is elided or moved anyway.
    return out;
}

int main()
{
    std::println("{}", squares(4));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <utility>

struct Box {
    int v {5};
    Box() = default;
    Box(Box&& other) : v {other.v + 1}
    {
    }
};

Box make()
{
    Box b;
    return std::move(b);
}

int main()
{
    std::printf("%d\n", make().v);
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

struct Box {
    int v {5};
    Box() = default;
    Box(Box&& other) : v {other.v + 1}
    {
    }
};

Box make()
{
    Box b;
    return b;
}

int main()
{
    std::printf("%d\n", make().v);
}
```
Answer: c++11..c++23 unspecified
```out
5
```
```out
6
```

## Count
Columns: copies, moves
```cpp
#include <print>
#include <source_location>
#include <utility>

using Where = std::source_location;

struct Tally {
    Tally() = default;
    Tally(const Tally&, Where at = Where::current())
    {
        std::println("@{} copies", at.line());
    }
    Tally(Tally&&, Where at = Where::current())
    {
        std::println("@{} moves", at.line());
    }
};

Tally local()
{
    Tally t;
    return std::move(t);
}

Tally fixed()
{
    const Tally c;
    return std::move(c);
}

int main()
{
    Tally a {local()};
    Tally b {fixed()};
}
```

## Alone 1
Form: run
Write a program that reads n and then n integers, and prints them in reverse order.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the n integers in reverse order, separated by spaces.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
3
1 2 3
```
```out
3 2 1
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

std::vector<int> read_reversed(int n)
{
    std::vector<int> out(static_cast<std::size_t>(n));
    for (int i {n - 1}; i >= 0; --i) {
        std::cin >> out[static_cast<std::size_t>(i)];
    }
    return out;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v {read_reversed(n)};
    for (std::size_t i {0}; i < v.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", v[i]);
    }
    std::println("");
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <utility>
#include <vector>

std::vector<int> read_reversed(int n)
{
    std::vector<int> out(static_cast<std::size_t>(n));
    for (int i {n - 1}; i >= 0; --i) {
        std::cin >> out[static_cast<std::size_t>(i)];
    }
    return std::move(out);
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v {read_reversed(n)};
    for (std::size_t i {0}; i < v.size(); ++i) {
        std::print("{}{}", i > 0 ? " " : "", v[i]);
    }
    std::println("");
}
```
### Tests
```in
1
-1000
```
```in
4
5 -5 1000 0
```
```in
6
1 1 2 3 5 8
```
### Witness
```cpp
#include <print>
#include <string>

std::string build()
{
    std::string result {"made"};
    return result;
}

int main()
{
    std::println("{}", build());
}
```

## Alone 2
Form: run
Write a program that reads a word of small letters and prints it in capital letters.
Input: one line, a word.
Output: one line, the word in capital letters.
Limits: the word has 1 to 50 small letters a to z.
### Examples
```in
cat
```
```out
CAT
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

std::string upper(std::string s)
{
    for (char& c : s) {
        c = static_cast<char>(c - 'a' + 'A');
    }
    return s;
}

int main()
{
    std::string w;
    std::cin >> w;
    std::println("{}", upper(w));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>
#include <utility>

std::string upper(std::string s)
{
    for (char& c : s) {
        c = static_cast<char>(c - 'a' + 'A');
    }
    return std::move(s);
}

int main()
{
    std::string w;
    std::cin >> w;
    std::println("{}", upper(w));
}
```
### Tests
```in
a
```
```in
abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx
```
```in
zebra
```
### Witness
```cpp
#include <print>
#include <string>

std::string twice(std::string s)
{
    s += s;
    return s;
}

int main()
{
    std::println("{}", twice("ab"));
}
```
