# 5.32 A substring taken from an rvalue string may empty it
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.strings] ¶1
Clause: [diff.cpp20.strings], [string.substr], [string.cons], [defns.valid]
After: 2.06
Levels: c++20

## Example
```cpp
#include <print>
#include <string>
#include <utility>

int main()
{
    std::string line {"a line long enough to need the heap"};
    //: Call substr on an lvalue: the string stays as it was.
    std::string part {line.substr(2, 20)};
    std::println("{}|{}", part, line);
    //: Move from line only when you need it no more.
    std::string last {std::move(line).substr(2, 20)};
    std::println("{}", last);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>
#include <utility>

int main()
{
    std::string s1 {"some long string that forces allocation"};
    std::string s2 {s1};
    std::string part {std::move(s1).substr(5, 20)};
    std::printf("%d\n", s1 == s2);
}
```
Answer:
- c++20: defined
- c++23: unspecified
```out
1
```
```out
0
```

## Verdict 2
```cpp
#include <cstdio>
#include <string>
#include <utility>

int main()
{
    std::string text {"the constructor takes part of a string"};
    std::string copy {text};
    std::string part {std::move(text), 4, 25};
    std::printf("%s|%d\n", part.c_str(), text == copy);
}
```
Answer:
- c++20: defined
- c++23: unspecified
```out
constructor takes part of|1
```
```out
constructor takes part of|0
```

## Alone 1
Form: run
Write a program that reads a line s and two numbers p and n. It prints the part of s that starts at place p (counting from 0) and holds n characters, or fewer if s ends first. Then it prints s.
Input: line 1, the text s; line 2, p and n.
Output: line 1, the part; line 2, s.
Limits: 1 ≤ length of s ≤ 100; 0 ≤ p ≤ length of s; 0 ≤ n ≤ 100.
### Examples
```in
hello world
6 5
```
```out
world
hello world
```
```in
abcdef
2 10
```
```out
cdef
abcdef
```
### Reference
```cpp
#include <iostream>
#include <string>

int main()
{
    std::string s;
    std::getline(std::cin, s);
    std::size_t p {0};
    std::size_t n {0};
    std::cin >> p >> n;
    std::string part {s.substr(p, n)};
    std::cout << part << '\n' << s << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <string>
#include <utility>

int main()
{
    std::string s;
    std::getline(std::cin, s);
    std::size_t p {0};
    std::size_t n {0};
    std::cin >> p >> n;
    std::string part {std::move(s).substr(p, n)};
    std::cout << part << '\n' << s << '\n';
}
```
### Tests
```in
x
0 1
```
```in
x
1 0
```
```in
the quick brown fox jumps over the lazy dog
4 30
```
```in
a line that is long enough to leave the small buffer
0 100
```
```in
short text
3 4
```
### Witness
```in
twenty six letters a to z here
0 20
```

## Alone 2
Form: run
Write a program that reads a line s and prints it with its two halves swapped. With h the length of s divided by 2, rounded down, it prints the characters from place h to the end, then the first h characters.
Input: one line, the text s.
Output: one line, the swapped text.
Limits: 1 ≤ length of s ≤ 100.
### Examples
```in
abcdef
```
```out
defabc
```
```in
hello
```
```out
llohe
```
### Reference
```cpp
#include <iostream>
#include <string>

int main()
{
    std::string s;
    std::getline(std::cin, s);
    std::size_t h {s.size() / 2};
    std::string back {s, h};
    std::string front {s, 0, h};
    std::cout << back << front << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <string>
#include <utility>

int main()
{
    std::string s;
    std::getline(std::cin, s);
    std::size_t h {s.size() / 2};
    std::string back {std::move(s), h};
    std::string front {s, 0, h};
    std::cout << back << front << '\n';
}
```
### Tests
```in
a
```
```in
ab
```
```in
abcdefghijklmnopqrstuvwxyz0123456789
```
```in
this line has forty characters in it ok
```
```in
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX
```
### Witness
```in
a line of more than thirty characters here
```
