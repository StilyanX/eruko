# 4.22 The token <=> in C++20
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.lex] ¶4
Clause: [diff.cpp17.lex], [lex.operators], [lex.pptoken], [over.oper]
After: none
Levels: c++17

## Example
```cpp
#include <print>

struct Weight
{
    int grams;
};

bool operator<=(Weight a, Weight b)
{
    return a.grams <= b.grams;
}

template<bool (*Compare)(Weight, Weight)>
bool fits(Weight item, Weight limit)
{
    return Compare(item, limit);
}

int main()
{
    //: Put a space after <=, so <=> is not read as one token.
    bool small {fits<operator<= >(Weight {300}, Weight {500})};
    //: Print the result.
    std::println("{}", small);
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Weight
{
    int grams;
};

bool operator<=(Weight a, Weight b)
{
    return a.grams <= b.grams;
}

template<bool (*Compare)(Weight, Weight)>
struct Scale
{
    Scale()
    {
        std::printf("%d\n", Compare(Weight {2}, Weight {3}));
    }
};

Scale<operator<=> scale;

int main()
{
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 22

## Verdict 2
```cpp
#include <cstdio>

struct Weight
{
    int grams;
};

bool operator<=(Weight a, Weight b)
{
    return a.grams <= b.grams;
}

template<bool (*Compare)(Weight, Weight)>
struct Scale
{
    Scale()
    {
        std::printf("%d\n", Compare(Weight {5}, Weight {3}));
    }
};

Scale<&operator<= > scale;

int main()
{
}
```
Answer: c++17..c++23 defined

## Alone 1
Form: flag
Exempt: T.21
Write a program that defines a struct Length with an int member, an operator<= for two Length values, and a class template that takes a pointer to such a function as its template argument; make one object of the template with operator<= as its argument, so that the program is accepted at every level from c++17 to c++23.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++23: accept
### Reference
```cpp
struct Length
{
    int metres;
};

bool operator<=(Length a, Length b)
{
    return a.metres <= b.metres;
}

template<bool (*Compare)(Length, Length)>
struct Sorter
{
};

int main()
{
    Sorter<operator<= > sorter;
}
```
### Wrong
```cpp
struct Length
{
    int metres;
};

bool operator<=(Length a, Length b)
{
    return a.metres <= b.metres;
}

template<bool (*Compare)(Length, Length)>
struct Sorter
{
};

int main()
{
    Sorter<operator<=> sorter;
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that is accepted at c++17 and rejected at c++20 and c++23 only because the characters <= followed by > form one token at c++20.
Input: none.
Output: none.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
struct Length
{
    int metres;
};

bool operator<=(Length a, Length b)
{
    return a.metres <= b.metres;
}

template<bool (*Compare)(Length, Length)>
struct Sorter
{
};

Sorter<operator<=> sorter;

int main()
{
}
```
### Wrong
```cpp
struct Length
{
    int metres;
};

bool operator<=(Length a, Length b)
{
    return a.metres <= b.metres;
}

template<bool (*Compare)(Length, Length)>
struct Sorter
{
};

Sorter<operator<= > sorter;

int main()
{
}
```
### Witness
```cpp
int probe {0};
```
