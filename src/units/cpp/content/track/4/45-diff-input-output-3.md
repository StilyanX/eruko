# 4.45 Printing a wide character to a narrow stream
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.input.output] ¶3
Clause: [diff.cpp17.input.output], [ostream.inserters.character], [ostream.inserters.arithmetic]
After: none
Levels: c++17

## Example
```cpp
#include <iostream>

int main()
{
    //: Turn a wchar_t into an int to print its number.
    wchar_t wide {L'A'};
    std::cout << static_cast<int>(wide) << '\n';
    //: Print the wchar_t itself through the wide stream.
    std::wcout << wide << L'\n';
    //: Turn a char32_t into an unsigned int to print its number.
    char32_t code {U'B'};
    std::wcout << static_cast<unsigned int>(code) << L'\n';
}
```

## Verdict 1
```cpp
#include <iostream>

int main()
{
    wchar_t letter {L'A'};
    std::cout << letter << '\n';
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 6

## Verdict 2
```cpp
#include <iostream>

int main()
{
    char16_t letter {u'C'};
    std::wcout << letter << L'\n';
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 6

## Alone 1
Form: flag
Write a program that holds the letter A in a variable of type char32_t and passes the variable as it is to std::cout; the program is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, 65.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <iostream>

int main()
{
    char32_t letter {U'A'};
    std::cout << letter << '\n';
}
```
### Wrong
```cpp
#include <iostream>

int main()
{
    char32_t letter {U'A'};
    std::cout << static_cast<unsigned int>(letter) << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that holds the letter z in a variable of type wchar_t and prints its number with std::cout; the program is accepted at c++17, c++20 and c++23 and prints 122 at each.
Input: none.
Output: one line, 122.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>

int main()
{
    wchar_t letter {L'z'};
    std::cout << static_cast<int>(letter) << '\n';
}
```
### Wrong
```cpp
#include <iostream>

int main()
{
    wchar_t letter {L'z'};
    std::cout << letter << '\n';
}
```
### Witness
```cpp
int probe {0};
```
