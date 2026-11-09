# 3.04 Partial ordering of function templates
Part: partial ordering of function templates
Clause: [temp.func.order], [temp.deduct.partial], [over.match.best]
After: 3.02
Levels: c++11

## Example
```cpp
#include <print>

//: Write a template that takes any argument.
template <typename T>
int kind(T)
{
    return 0;
}

//: Write a template that takes only pointers.
template <typename T>
int kind(T*)
{
    return 1;
}

int main()
{
    //: Let an int match only the first template.
    std::println("{}", kind(5));
    //: Let a pointer match both, and win with the narrower one.
    double d {2.5};
    std::println("{}", kind(&d));
}
```

## Verdict 1
```cpp
template <typename T>
int place(T, int)
{
    return 1;
}

template <typename T>
int place(int, T)
{
    return 2;
}

int main()
{
    return place(1, 1) - 1;
}
```
Answer: c++11..c++23 ill-formed 15

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
int kind(T)
{
    return 0;
}

template <typename T>
int kind(T*)
{
    return 1;
}

int main()
{
    int n {0};
    int* p {&n};
    std::printf("%d\n", kind(p));
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: probes
Write a constexpr function template `kind(x)` with two overloads: one that takes an argument of any type and returns 0, and one that takes a pointer to any type and returns 1.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
constexpr int n {1};
constexpr double d {2.5};
static_assert(kind(5) == 0);
static_assert(kind(&n) == 1);
static_assert(kind(&d) == 1);
static_assert(kind(&d) == 0);
```
Accept: 1, 2, 3, 4, 5
Reject: 6
### Reference
```cpp
template <typename T>
constexpr int kind(T)
{
    return 0;
}

template <typename T>
constexpr int kind(T*)
{
    return 1;
}

int main()
{
}
```
### Wrong
```cpp
template <typename T>
constexpr int kind(T)
{
    return 0;
}

constexpr int kind(const int*)
{
    return 1;
}

int main()
{
}
```
### Witness
```cpp
constexpr char c {'a'};
static_assert(kind(&c) == 1);
```

## Alone 2
Form: probes
Write a constexpr function template `edge(a, b)` with three overloads: one whose first parameter is a pointer and whose second has any type, returning 1; one whose first parameter has any type and whose second is a pointer, returning 2; and one whose two parameters are pointers, to any two types, returning 3.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
constexpr int i {1};
constexpr double d {2.5};
static_assert(edge(&i, 0) == 1);
static_assert(edge(0, &i) == 2);
static_assert(edge(&i, &i) == 3);
static_assert(edge(&i, &d) == 3);
static_assert(edge(0, 0) == 0);
```
Accept: 1, 2, 3, 4, 5, 6
Reject: 7
### Reference
```cpp
template <typename T, typename U>
constexpr int edge(T*, U)
{
    return 1;
}

template <typename T, typename U>
constexpr int edge(T, U*)
{
    return 2;
}

template <typename T, typename U>
constexpr int edge(T*, U*)
{
    return 3;
}

int main()
{
}
```
### Wrong
```cpp
template <typename T, typename U>
constexpr int edge(T*, U)
{
    return 1;
}

template <typename T, typename U>
constexpr int edge(T, U*)
{
    return 2;
}

template <typename T>
constexpr int edge(T*, T*)
{
    return 3;
}

int main()
{
}
```
### Witness
```cpp
constexpr char c {'a'};
constexpr long l {2};
static_assert(edge(&c, &l) == 3);
```
