# 4.43 Reading a word through a char pointer
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.input.output] ¶1
Clause: [diff.cpp17.input.output], [istream.extractors]
After: none
Levels: c++17

## Example
```cpp
#include <cstdio>
#include <iomanip>
#include <sstream>
#include <string>

int main()
{
    //: Read the first word of a text into a char array of 16.
    std::istringstream in {"lantern window"};
    char word[16] {};
    in >> std::setw(16) >> word;
    std::printf("%s\n", word);
    //: Read the next word into a std::string, which has no limit.
    std::string next;
    in >> next;
    std::printf("%s\n", next.c_str());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <iomanip>
#include <sstream>

int main()
{
    std::istringstream in {"lantern"};
    char* word {new char[16] {}};
    in >> std::setw(16) >> word;
    std::printf("%s\n", word);
    delete[] word;
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 9

## Verdict 2
```cpp
#include <cstdio>
#include <iomanip>
#include <sstream>

void read_word(std::istringstream& in, char word[16])
{
    in >> std::setw(16) >> word;
}

int main()
{
    std::istringstream in {"lantern"};
    char word[16] {};
    read_word(in, word);
    std::printf("%s\n", word);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 7

## Alone 1
Form: flag
Exempt: R.3, R.12, R.20, ES.24
Write a program that reads one word of input into a buffer of 16 chars it gets from new, through a char pointer, and prints the word; the program is accepted at c++17 and rejected at c++20 and c++23.
Input: one line, one word.
Output: one line, the word.
Limits: the word has 1 to 15 letters.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <cstdio>
#include <iomanip>
#include <iostream>

int main()
{
    char* word {new char[16] {}};
    std::cin >> std::setw(16) >> word;
    std::printf("%s\n", word);
    delete[] word;
}
```
### Wrong
```cpp
#include <cstdio>
#include <iomanip>
#include <iostream>

int main()
{
    char word[16] {};
    std::cin >> std::setw(16) >> word;
    std::printf("%s\n", word);
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program with a function read_word that takes a char array of 16 and reads one word of input into it; main calls read_word and prints the word. The program is accepted at c++17, c++20 and c++23.
Input: one line, one word.
Output: one line, the word.
Limits: the word has 1 to 15 letters.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <cstdio>
#include <iomanip>
#include <iostream>

void read_word(char (&word)[16])
{
    std::cin >> std::setw(16) >> word;
}

int main()
{
    char word[16] {};
    read_word(word);
    std::printf("%s\n", word);
}
```
### Wrong
```cpp
#include <cstdio>
#include <iomanip>
#include <iostream>

void read_word(char word[16])
{
    std::cin >> std::setw(16) >> word;
}

int main()
{
    char word[16] {};
    read_word(word);
    std::printf("%s\n", word);
}
```
### Witness
```cpp
int probe {0};
```
