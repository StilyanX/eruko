# 4.32 A constructor named with its template arguments
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.class] ¶2
Clause: [diff.cpp17.class], [class.ctor], [class.dtor], [class.pre]
After: none
Levels: c++17

## Example
```cpp
#include <print>

template <typename T>
struct Holder
{
    //: Name the constructor by the class name alone, with no <T>.
    Holder(T start) : value {start}
    {
        std::println("made {}", value);
    }
    //: Name the destructor the same way.
    ~Holder()
    {
        std::println("gone {}", value);
    }
    T value;
};

int main()
{
    //: Make one Holder; every level accepts this class.
    Holder<int> holder {7};
}
```

## Verdict 1
```cpp
#include <cstdio>

template <typename T>
struct Counter
{
    Counter<T>() : count {0}
    {
    }
    T count;
};

int main()
{
    Counter<int> counter;
    std::printf("%d\n", counter.count);
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 6

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
struct Box
{
    T value;
    ~Box<T>()
    {
        std::printf("%d\n", value);
    }
};

int main()
{
    Box<int> box {3};
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 7

## Alone 1
Form: flag
Write a program with a class template Pair that holds two values of type T, a constructor that takes both values, and a destructor that prints them; main makes a Pair<int> from the input. The program is accepted at c++17, c++20 and c++23.
Input: one line, two integers.
Output: one line, the two integers.
Limits: each integer is between -1000 and 1000.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>

template <typename T>
struct Pair
{
    Pair(T a, T b) : first {a}, second {b}
    {
    }
    ~Pair()
    {
        std::cout << first << ' ' << second << '\n';
    }
    T first;
    T second;
};

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    Pair<int> pair {a, b};
}
```
### Wrong
```cpp
#include <iostream>

template <typename T>
struct Pair
{
    Pair<T>(T a, T b) : first {a}, second {b}
    {
    }
    ~Pair()
    {
        std::cout << first << ' ' << second << '\n';
    }
    T first;
    T second;
};

int main()
{
    int a {0};
    int b {0};
    std::cin >> a >> b;
    Pair<int> pair {a, b};
}
```
### Witness
```cpp
Pair<long> probe {1, 2};
```

## Alone 2
Form: flag
Write a program with a class template Cell that holds one value of type T and has a destructor that prints the value; main makes a Cell<int> from the input. The program is accepted at c++17 and rejected at c++20 and c++23.
Input: one line, one integer.
Output: one line, the integer.
Limits: the integer is between -1000 and 1000.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <iostream>

template <typename T>
struct Cell
{
    T value;
    ~Cell<T>()
    {
        std::cout << value << '\n';
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    Cell<int> cell {n};
}
```
### Wrong
```cpp
#include <iostream>

template <typename T>
struct Cell
{
    T value;
    ~Cell()
    {
        std::cout << value << '\n';
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    Cell<int> cell {n};
}
```
### Witness
```cpp
Cell<long> probe {5};
```
