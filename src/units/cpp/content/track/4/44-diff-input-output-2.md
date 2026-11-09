# 4.44 Printing a u8 literal to std::cout
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.input.output] ¶2
Clause: [diff.cpp17.input.output], [diff.cpp17.lex], [ostream.inserters.character], [lex.string], [lex.ccon]
After: none
Levels: c++17

## Example
```cpp
#include <iostream>

int main()
{
    //: Print a plain string literal; it holds chars.
    std::cout << "north" << '\n';
    //: Turn a u8 string literal into chars, then print it.
    auto south = reinterpret_cast<const char*>(u8"south");
    std::cout << south << '\n';
    //: Turn a u8 character literal into a char to print it.
    std::cout << static_cast<char>(u8'E') << '\n';
}
```

## Verdict 1
```cpp
#include <iostream>

int main()
{
    std::cout << u8"west" << '\n';
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 5

## Verdict 2
```cpp
#include <iostream>

int main()
{
    auto letter = u8'Z';
    std::cout << letter << '\n';
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 6

## Alone 1
Form: flag
Write a program that prints the word ready with std::cout, written as a UTF-8 string literal with nothing around it; the program is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, ready.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <iostream>

int main()
{
    std::cout << u8"ready" << '\n';
}
```
### Wrong
```cpp
#include <iostream>

int main()
{
    auto word = reinterpret_cast<const char*>(u8"ready");
    std::cout << word << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that keeps the letter Q in a variable made from a UTF-8 character literal and prints it with std::cout; the program is accepted at c++17, c++20 and c++23 and prints Q at each.
Input: none.
Output: one line, Q.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>

int main()
{
    auto letter = u8'Q';
    std::cout << static_cast<char>(letter) << '\n';
}
```
### Wrong
```cpp
#include <iostream>

int main()
{
    auto letter = u8'Q';
    std::cout << letter << '\n';
}
```
### Witness
```cpp
int probe {0};
```
