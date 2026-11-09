# 3.08 Class template argument deduction
Part: class template argument deduction
Clause: [dcl.type.class.deduct], [over.match.class.deduct], [temp.deduct.guide], [temp.deduct.call]
After: 3.02
Levels: c++17

## Example
```cpp
#include <print>

//: Write a class template with a constructor that takes a T.
template <typename T>
struct Total {
    Total(T t) : sum {t}
    {
    }
    T sum;
};

//: Add a guide: an int makes a Total of long long.
Total(int) -> Total<long long>;

int main()
{
    //: Leave out <double>; the constructor's argument gives T.
    Total a {2.5};
    //: Let the guide choose long long for the int.
    Total b {5};
    b.sum *= 1'000'000'000'000;
    std::println("{} {}", a.sum, b.sum);
}
```

## Verdict 1
```cpp
template <typename T>
struct Box {
    Box(T v) : value {v}
    {
    }
    T value;
};

int main()
{
    return Box {3}.value - 3;
}
```
Levels: c++11
Answer:
- c++11..c++14: ill-formed 11
- c++17..c++23: defined

## Verdict 2
```cpp
template <typename T>
struct Point {
    T x;
    T y;
};

int main()
{
    return Point {1, 2}.x - 1;
}
```
Answer:
- c++17: ill-formed 9
- c++20..c++23: defined

## Alone 1
Form: probes
Write a class template `Range<T>` with members `low` and `high` of type T and a constructor from two values that sets them, so that `Range r {1, 5};` makes a `Range<int>`.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
Range r {1, 5};
Range<int>* p {&r};
Range d {0.5, 1.5};
Range<double>* q {&d};
Range m {1, 2.5};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename T>
struct Range {
    Range(T a, T b) : low {a}, high {b}
    {
    }
    T low;
    T high;
};

int main()
{
}
```
### Wrong
```cpp
template <typename T>
struct Range {
    template <typename U>
    Range(U a, U b) : low {a}, high {b}
    {
    }
    T low;
    T high;
};

int main()
{
}
```
### Witness
```cpp
Range c {'a', 'z'};
```

## Alone 2
Form: probes
Write a class template `Label<T>` with a member `text` of type T, a constructor from a T, and a deduction guide so that `Label a {"abc"};` holds its text as a `std::string`.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
Label a {"abc"};
std::string* pa {&a.text};
Label b {5};
int* pb {&b.text};
const char** pc {&a.text};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <string>

template <typename T>
struct Label {
    Label(T t) : text {t}
    {
    }
    T text;
};

Label(const char*) -> Label<std::string>;

int main()
{
}
```
### Wrong
```cpp
#include <string>

template <typename T>
struct Label {
    Label(T t) : text {t}
    {
    }
    T text;
};

int main()
{
}
```
### Witness
```cpp
Label w {"x"};
std::string* s {&w.text};
```
