# 3.05 Explicit specialisation
Part: explicit specialisation
Clause: [temp.expl.spec], [temp.over], [temp.arg.explicit]
After: none
Levels: c++11

## Example
```cpp
#include <print>

//: Write the general template for every type.
template <typename T>
struct Bits {
    static constexpr int count {8 * sizeof(T)};
};

//: Replace the whole class for bool with template <>.
template <>
struct Bits<bool> {
    static constexpr int count {1};
};

//: Write a function template and one replacement for double.
template <typename T>
int code(T)
{
    return 0;
}

template <>
int code<double>(double)
{
    return 1;
}

int main()
{
    //: Use the general class, then the one for bool.
    std::println("{} {}", Bits<int>::count, Bits<bool>::count);
    //: Call the function for an int, then for a double.
    std::println("{} {}", code(5), code(2.5));
}
```

## Verdict 1
```cpp
template <typename T>
struct Box {
    T value;
    int size() const
    {
        return 1;
    }
};

template <>
struct Box<bool> {
    bool value;
};

int main()
{
    Box<bool> b {true};
    return b.size();
}
```
Answer: c++11..c++23 ill-formed 18

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
int f(T)
{
    return 1;
}

template <>
int f(int*)
{
    return 2;
}

template <typename T>
int f(T*)
{
    return 3;
}

int main()
{
    int n {0};
    std::printf("%d\n", f(&n));
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: probes
Write a class template `Bits<T>` with two static constexpr int members, `bytes` equal to sizeof T and `count` equal to 8 times bytes, and an explicit specialisation for bool in which `bytes` is still sizeof bool but `count` is 1.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(Bits<char>::count == 8);
static_assert(Bits<double>::bytes == sizeof(double));
static_assert(Bits<bool>::count == 1);
static_assert(Bits<bool>::bytes == sizeof(bool));
static_assert(Bits<bool>::count == 8 * sizeof(bool));
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename T>
struct Bits {
    static constexpr int bytes {sizeof(T)};
    static constexpr int count {8 * bytes};
};

template <>
struct Bits<bool> {
    static constexpr int bytes {sizeof(bool)};
    static constexpr int count {1};
};

int main()
{
}
```
### Wrong
```cpp
template <typename T>
struct Bits {
    static constexpr int bytes {sizeof(T)};
    static constexpr int count {8 * bytes};
};

template <>
struct Bits<bool> {
    static constexpr int count {1};
};

int main()
{
}
```
### Witness
```cpp
static_assert(Bits<bool>::bytes > 0);
```

## Alone 2
Form: probes
Write a constexpr function template `code(x)` that returns 0, and an explicit specialisation of it for double that returns 1.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(code(5) == 0);
static_assert(code(2.5) == 1);
static_assert(code(2.5f) == 0);
static_assert(code<double>(1) == 1);
static_assert(code<double>(1) == 0);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename T>
constexpr int code(T)
{
    return 0;
}

template <>
constexpr int code<double>(double)
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
constexpr int code(T)
{
    return 0;
}

constexpr int code(double)
{
    return 1;
}

int main()
{
}
```
### Witness
```cpp
static_assert(code<double>(7) == 1);
```
