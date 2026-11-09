# 4.23 The type of a UTF-8 literal in C++20
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.lex] ¶5
Clause: [diff.cpp17.lex], [lex.string], [lex.ccon], [basic.fundamental]
After: none
Levels: c++17

## Example
```cpp
#include <print>
#include <string>
#include <type_traits>

int main()
{
    //: See that u8'c' has the type char8_t, not char.
    auto letter {u8'c'};
    static_assert(std::is_same_v<decltype(letter), char8_t>);
    //: Cast the literal to const char*, valid at both levels.
    const char* text {reinterpret_cast<const char*>(u8"text")};
    std::string copy {text};
    //: Print the letter as a number, then the copy.
    std::println("{} {}", static_cast<int>(letter), copy);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>

int main()
{
    std::string word = u8"river";
    std::printf("%zu\n", word.size());
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 6

## Verdict 2
```cpp
#include <cstdio>

void show(const char* text)
{
    std::printf("%s\n", text);
}

int main()
{
    show(u8"stone");
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 10

## Alone 1
Form: flag
Write a program that copies the UTF-8 literal u8"bridge" into a std::string and prints the string, so that the program is accepted at every level from c++17 to c++23.
Input: none.
Output: one line, bridge.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <cstdio>
#include <string>

int main()
{
    auto text {reinterpret_cast<const char*>(u8"bridge")};
    std::string word {text};
    std::printf("%s\n", word.c_str());
}
```
### Wrong
```cpp
#include <cstdio>
#include <string>

int main()
{
    const char* text {u8"bridge"};
    std::string word {text};
    std::printf("%s\n", word.c_str());
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that points a pointer, declared without auto, at the first character of u8"abc" and prints that character as a number, so that the program is accepted at c++20 and c++23 and rejected at c++17.
Input: none.
Output: one line, 97.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: reject
- c++20..c++23: accept
### Reference
```cpp
#include <cstdio>

int main()
{
    const char8_t* text {u8"abc"};
    std::printf("%d\n", static_cast<int>(text[0]));
}
```
### Wrong
```cpp
#include <cstdio>

int main()
{
    const char* text {u8"abc"};
    std::printf("%d\n", static_cast<int>(text[0]));
}
```
### Witness
```cpp
int probe {0};
```
