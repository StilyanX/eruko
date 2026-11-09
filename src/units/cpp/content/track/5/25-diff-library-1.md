# 5.25 The headers new in C++23
Part: one part for each difference Annex C lists between C++20 and C++23: [diff.cpp20.library] ¶1
Clause: [diff.cpp20.library], [headers], [print.syn], [expected.syn], [spanstream.syn]
After: none
Levels: c++20

## Example
```cpp
#include <cstdio>
#include <expected>
#include <print>

int main()
{
    //: Print with <print>, a header C++23 adds.
    std::println("{}", 6 * 7);
    //: Hold a value or an error with <expected>, also new in C++23.
    std::expected<int, char> got {std::unexpected {'e'}};
    std::println("{}", got.has_value());
    //: Print with <cstdio> where the code must build at c++20 too.
    std::printf("%d\n", 6 * 7);
}
```

## Verdict 1
```cpp
#include <print>

int main()
{
    int n {6};
    std::println("{}", n * 7);
}
```
Answer:
- c++20: ill-formed 6
- c++23: defined

## Verdict 2
```cpp
#include <cstdio>
#include <expected>

int main()
{
    std::expected<int, char> got {5};
    std::printf("%d\n", got.value());
}
```
Answer:
- c++20: ill-formed 6, 7
- c++23: defined

## Alone 1
Form: flag
Write a program that reads two ints and prints their sum. The program is accepted at c++20 and at c++23.
Input: one line, two ints a and b.
Output: one line, a + b.
Limits: -1000000 ≤ a, b ≤ 1000000; g++ 16 with -pedantic-errors at c++20 and c++23.
Expect:
- c++23: accept
- c++20: accept
### Reference
```cpp
#include <iostream>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::cout << a + b << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    std::println("{}", a + b);
}
```
### Witness
```cpp
static_assert(sizeof(int) >= 2);
```

## Alone 2
Form: flag
Write a program that reads an int from a char array holding `42` without copying the chars into a string, through the stream that C++23 adds for a span of chars, and prints it. The program is rejected at c++20 and accepted at c++23.
Input: none.
Output: one line, 42.
Limits: g++ 16 with -pedantic-errors at c++20 and c++23.
Expect:
- c++20: reject
- c++23: accept
### Reference
```cpp
#include <iostream>
#include <span>
#include <spanstream>

int main()
{
    const char text[] {"42"};
    std::ispanstream in {std::span<const char> {text, 2}};
    int n {0};
    in >> n;
    std::cout << n << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <sstream>

int main()
{
    const char text[] {"42"};
    std::istringstream in {text};
    int n {0};
    in >> n;
    std::cout << n << '\n';
}
```
### Witness
```cpp
std::spanbuf probe;
```
