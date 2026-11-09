# 7.17 ES.6: declare a loop's names in its for statement
Part: ES.6 Declare names in for-statement initializers and conditions to limit scope
Clause: C++ Core Guidelines ES.6, [stmt.for], [stmt.if], [stmt.pre], [basic.scope.block]
After: 1.18
Levels: c++11

## Scan
Rule: ES.6
Pattern: /\bfor\s*\(\s*(\w+)\s*=(?!=)[^;]*;[^;]*;(?:[^()]|\([^()]*\))*\)\s*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|[^;{}]*;)(?:(?!\b\1\b|^\})[\s\S])*(?:^\}|(?![\s\S])|\b(?:int|long|short|char|bool|unsigned|float|double|auto|std::size_t)\s*[*&]*\s*\1\b)|\bfor\s*\(\s*;[^;]*;\s*(?:\+\+|--)\s*(\w+)\s*\)\s*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|[^;{}]*;)(?:(?!\b\2\b|^\})[\s\S])*(?:^\}|(?![\s\S])|\b(?:int|long|short|char|bool|unsigned|float|double|auto|std::size_t)\s*[*&]*\s*\2\b)|\bfor\s*\(\s*;[^;]*;\s*(\w+)\s*(?:\+\+|--|[-+]=)[^)]*\)\s*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|[^;{}]*;)(?:(?!\b\3\b|^\})[\s\S])*(?:^\}|(?![\s\S])|\b(?:int|long|short|char|bool|unsigned|float|double|auto|std::size_t)\s*[*&]*\s*\3\b)/m
### Bad
```cpp
void use()
{
    int j;
    for (j = 0; j < 100; ++j) {
    }
}
```
### Good
```cpp
#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::string;
using std::vector;

struct Shape {
    virtual ~Shape() = default;
};

struct Circle : Shape {
};

void use(vector<string>& v, Shape* ps)
{
    for (string s; cin >> s;)
        v.push_back(s);

    for (int i = 0; i < 20; ++i) {
    }

    if (auto pc = dynamic_cast<Circle*>(ps)) {
    }
    else {
    }
}
```

## Example
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    int words {0};
    //: Declare the word in the for statement that reads it.
    for (std::string w {}; std::cin >> w;) {
        ++words;
    }
    //: Declare the step in the for statement that counts down.
    for (int k {3}; k > 0; --k) {
        std::print("{} ", k);
    }
    std::println("{}", words);
}
```

## Verdict 1
Levels: c++17
```cpp
#include <cstdio>
#include <map>

int main()
{
    std::map<int, int> m {};
    if (auto r = m.insert({1, 2}); r.second) {
        std::printf("%d\n", r.first->second);
    }
    std::printf("%d\n", r.first->first);
}
```
Answer: c++17..c++23 ill-formed 10

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    for (int i {3}; int k = i; --i) {
        std::printf("%d", k);
    }
    std::printf("\n");
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: run
Write a program that reads n and prints the numbers from n down to 1 on one line, separated by one space, counting down in a for loop.
Input: one line, n.
Output: one line, n, n - 1, …, 1.
Limits: 1 ≤ n ≤ 1000.
### Examples
```in
3
```
```out
3 2 1
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    std::print("{}", n);
    for (int k {n - 1}; k > 0; --k) {
        std::print(" {}", k);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    std::print("{}", n);
    int k {n - 1};
    for (; k > 0; --k) {
        std::print(" {}", k);
    }
    std::println();
}
```
### Tests
```in
1
```
```in
1000
```
```in
2
```
### Witness
```cpp
void use()
{
    for (int j = 0; j < 100; ++j) {
    }
}
```

## Alone 2
Form: run
Write a program that reads a word and prints its letters in the other order, walking the word with a reverse iterator in a for loop.
Input: one line, one word.
Output: one line, the word from its last letter to its first.
Limits: the word has 1 to 50 letters.
### Examples
```in
abc
```
```out
cba
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string w {};
    std::cin >> w;
    for (auto it {w.rbegin()}; it != w.rend(); ++it) {
        std::print("{}", *it);
    }
    std::println();
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string w {};
    std::cin >> w;
    auto it {w.rbegin()};
    for (; it != w.rend(); ++it) {
        std::print("{}", *it);
    }
    std::println();
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
level
```
### Witness
```cpp
#include <string>

int vowels(const std::string& w)
{
    int n {0};
    for (auto it {w.begin()}; it != w.end(); ++it) {
        if (*it == 'a' || *it == 'e') {
            ++n;
        }
    }
    return n;
}
```
