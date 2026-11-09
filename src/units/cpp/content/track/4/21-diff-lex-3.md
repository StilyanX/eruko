# 4.21 The new keywords of C++20
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.lex] ¶3
Clause: [diff.cpp17.lex], [lex.key], [lex.name]
After: none
Levels: c++17

## Example
```cpp
#include <print>

int main()
{
    //: Pick names that are not requires, concept or co_yield.
    int needed {3};
    int idea {2};
    int yielded {needed * idea};
    //: Use constinit in its own role, on a static variable.
    static constinit int start {10};
    //: Print the result.
    std::println("{} {}", yielded, start);
}
```

## Verdict 1
```cpp
#include <cstdio>

int main()
{
    int requires {2};
    int total {requires * 5};
    std::printf("%d\n", total);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 5, 6

## Verdict 2
```cpp
#include <cstdio>

struct Task
{
    int co_return;
};

int main()
{
    Task task {4};
    std::printf("%d\n", task.co_return);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 5, 10, 11

## Alone 1
Form: flag
Write a program that declares an int variable, gives it 1 and prints it, where the name of the variable is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, 1.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <cstdio>

int main()
{
    int consteval {1};
    std::printf("%d\n", consteval);
}
```
### Wrong
```cpp
#include <cstdio>

int main()
{
    int module {1};
    std::printf("%d\n", module);
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that declares an int with static storage and the value 5 using a keyword that C++20 added, so that it is rejected at c++17 and accepted at c++20 and c++23, then adds 1 to it and prints it.
Input: none.
Output: one line, 6.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++20..c++23: accept
- c++17..c++17: reject
### Reference
```cpp
#include <cstdio>

constinit int count {5};

int main()
{
    count = count + 1;
    std::printf("%d\n", count);
}
```
### Wrong
```cpp
#include <cstdio>

int count {5};

int main()
{
    count = count + 1;
    std::printf("%d\n", count);
}
```
### Witness
```cpp
int probe {0};
```
