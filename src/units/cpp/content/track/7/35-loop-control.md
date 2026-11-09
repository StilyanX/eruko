# 7.35 ES.86: leave a for loop's counter to its head
Part: ES.86 Avoid modifying loop control variables inside the body of raw for-loops
Clause: C++ Core Guidelines ES.86, [stmt.for], [basic.scope.block]
After: none
Levels: c++11

## Scan
Rule: ES.86
Pattern: /\bfor\s*\(\s*(?:[\w:<>]+\s+)?(\w+)\s*(?:=|\{)[^;]*;[^;]*;\s*(?:(?:\+\+|--)\s*\1\b|\b\1\s*(?:\+\+|--|[-+]=))[^)]*\)\s*\{(?:[^{}]|\{[^{}]*\})*?(?:\{[^{}]*?)?(?:(?:\+\+|--)\s*\1\b|\b\1\s*(?:\+\+|--|(?:[-+*\/%&|^]|<<|>>)?=(?!=)))/
### Bad
```cpp
bool something(int i);

void f()
{
    for (int i = 0; i < 10; ++i) {
        if (something(i)) ++i;
    }
}
```
### Good
```cpp
bool something(int i);

void f()
{
    bool skip = false;
    for (int i = 0; i < 10; ++i) {
        if (skip) { skip = false; continue; }
        if (something(i)) skip = true;
    }
}
```

## Example
```cpp
#include <print>

int main()
{
    //: Step the counter only in the loop's head.
    bool skip {false};
    for (int i {0}; i < 6; ++i) {
        //: Keep the wish to skip in a second variable.
        if (skip) {
            skip = false;
            continue;
        }
        if (i % 2 == 0) {
            skip = true;
        }
        std::println("{}", i);
    }
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int sum {0};
    for (int i {0}; i < 6; ++i) {
        if (i == 1) {
            ++i;
        }
        sum += i;
    }
    std::printf("%d\n", sum);
}
```
Answer: c++11..c++23 defined

## Verdict 2
```cpp
#include <cstdio>

int main()
{
    int sum {0};
    for (int i {0}; i < 3; ++i) {
        int i {5};
        sum += i;
    }
    std::printf("%d\n", sum);
}
```
Answer: c++11..c++23 ill-formed 7

## Count
Columns: times
```cpp
#include <print>

int main()
{
    for (int i {0}; i < 10; ++i) {
        std::println("@{} times", __LINE__);
        if (i % 3 == 0) {
            ++i;
            std::println("@{} times", __LINE__);
        }
    }
}
```

## Alone 1
Form: run
Write a program that reads n whole numbers and adds them up, but skips the number right after each 0.
Input: one line, n, then a line of n whole numbers.
Output: one line, the sum. A skipped number is not added and does not count as a 0, even when it is a 0.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
5
4 0 7 2 1
```
```out
7
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    int sum {0};
    bool skip {false};
    for (std::size_t i {0}; i < v.size(); ++i) {
        if (skip) {
            skip = false;
            continue;
        }
        if (v[i] == 0) {
            skip = true;
        }
        sum += v[i];
    }
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    int sum {0};
    for (std::size_t i {0}; i < v.size(); ++i) {
        if (v[i] == 0) {
            ++i;
            continue;
        }
        sum += v[i];
    }
    std::println("{}", sum);
}
```
### Tests
```in
1
-5
```
```in
1
0
```
```in
5
0 0 3 0 9
```
```in
4
1000 1000 0 -1000
```
### Witness
```cpp
bool something(int i);

void f()
{
    bool skip {false};
    for (int i {0}; i < 10; ++i) {
        if (skip) {
            skip = false;
            continue;
        }
        if (something(i)) {
            skip = true;
        }
    }
}
```

## Alone 2
Form: run
Write a program that reads a word and prints it with every run of one letter shrunk to a single letter.
Input: one line, a word of lower-case letters.
Output: one line, the word with each run of equal letters written once.
Limits: the word has 1 to 100 letters.
### Examples
```in
aaabcca
```
```out
abca
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string s {};
    std::cin >> s;
    std::string out {};
    for (std::size_t i {0}; i < s.size(); ++i) {
        if (i == 0 || s[i] != s[i - 1]) {
            out += s[i];
        }
    }
    std::println("{}", out);
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <string>

int main()
{
    std::string s {};
    std::cin >> s;
    std::string out {};
    for (std::size_t i {0}; i < s.size(); ++i) {
        out += s[i];
        while (i + 1 < s.size() && s[i + 1] == s[i]) {
            ++i;
        }
    }
    std::println("{}", out);
}
```
### Tests
```in
a
```
```in
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
```
```in
abc
```
```in
aabbaa
```
### Witness
```cpp
#include <cstdio>

int main()
{
    int sum {0};
    bool skip {false};
    for (int i {0}; i < 6; ++i) {
        if (skip) {
            skip = false;
            continue;
        }
        if (i == 1) {
            skip = true;
        }
        sum += i;
    }
    std::printf("%d\n", sum);
}
```
