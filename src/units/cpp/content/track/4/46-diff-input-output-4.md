# 4.46 The string a path's u8string returns
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.input.output] ¶4
Clause: [diff.cpp17.input.output], [fs.class.path], [fs.path.native.obs], [fs.path.generic.obs]
After: none
Levels: c++17

## Example
```cpp
#include <cstdio>
#include <filesystem>
#include <string>

int main()
{
    //: Make a path from a plain string.
    std::filesystem::path file {"docs/notes.txt"};
    //: Keep its UTF-8 form in auto; the type differs by level.
    auto bytes = file.u8string();
    //: Copy the bytes into a std::string, which works at each level.
    std::string text(bytes.begin(), bytes.end());
    std::printf("%s %zu\n", text.c_str(), text.size());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <filesystem>
#include <string>

int main()
{
    std::filesystem::path file {"docs/notes.txt"};
    std::string text = file.u8string();
    std::printf("%s\n", text.c_str());
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 8

## Verdict 2
```cpp
#include <filesystem>
#include <iostream>

int main()
{
    std::filesystem::path file {"docs/notes.txt"};
    std::cout << file.generic_u8string() << '\n';
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 7

## Alone 1
Form: flag
Write a program that makes a path from the text docs/plan.txt, keeps the result of its u8string in a variable of type std::string and prints it; the program is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, docs/plan.txt.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <cstdio>
#include <filesystem>
#include <string>

int main()
{
    std::filesystem::path file {"docs/plan.txt"};
    std::string text = file.u8string();
    std::printf("%s\n", text.c_str());
}
```
### Wrong
```cpp
#include <cstdio>
#include <filesystem>
#include <string>

int main()
{
    std::filesystem::path file {"docs/plan.txt"};
    auto bytes = file.u8string();
    std::string text(bytes.begin(), bytes.end());
    std::printf("%s\n", text.c_str());
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that reads a path, puts the UTF-8 form of its generic form in a std::string and prints that string; the program is accepted at c++17, c++20 and c++23.
Input: one line, a path.
Output: one line, the path in its generic form.
Limits: the path has 1 to 100 characters and no spaces.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <filesystem>
#include <iostream>
#include <string>

int main()
{
    std::string line;
    std::cin >> line;
    std::filesystem::path file {line};
    auto bytes = file.generic_u8string();
    std::string text(bytes.begin(), bytes.end());
    std::cout << text << '\n';
}
```
### Wrong
```cpp
#include <filesystem>
#include <iostream>
#include <string>

int main()
{
    std::string line;
    std::cin >> line;
    std::filesystem::path file {line};
    std::string text = file.generic_u8string();
    std::cout << text << '\n';
}
```
### Witness
```cpp
int probe {0};
```
