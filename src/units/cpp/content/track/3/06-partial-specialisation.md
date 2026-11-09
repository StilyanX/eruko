# 3.06 Partial specialisation
Part: partial specialisation
Clause: [temp.spec.partial.general], [temp.spec.partial.match], [temp.spec.partial.order], [temp.fct.general]
After: 3.05
Levels: c++11

## Example
```cpp
#include <print>

//: Write the general template: a type is not a pointer.
template <typename T>
struct is_ptr {
    static constexpr bool value {false};
};

//: Specialise it for every pointer type T* at once.
template <typename T>
struct is_ptr<T*> {
    static constexpr bool value {true};
};

//: Specialise a two-type template when its second type is int.
template <typename A, typename B>
struct ends_in_int {
    static constexpr bool value {false};
};

template <typename A>
struct ends_in_int<A, int> {
    static constexpr bool value {true};
};

int main()
{
    //: Let the pattern pick the class for each type.
    std::println("{}", is_ptr<int>::value);
    std::println("{}", is_ptr<int*>::value);
    std::println("{}", ends_in_int<int, long>::value);
    std::println("{}", ends_in_int<double, int>::value);
}
```

## Verdict 1
```cpp
template <typename T>
int kind(T)
{
    return 0;
}

template <typename T>
int kind<T*>(T*)
{
    return 1;
}

int main()
{
    int n {0};
    return kind(&n);
}
```
Answer: c++11..c++23 ill-formed 8

## Verdict 2
```cpp
template <typename A, typename B>
struct Pair {
    static constexpr int value {0};
};

template <typename T>
struct Pair<T, int> {
    static constexpr int value {1};
};

template <typename T>
struct Pair<int, T> {
    static constexpr int value {2};
};

int main()
{
    return Pair<int, int>::value;
}
```
Answer: c++11..c++23 ill-formed 18

## Alone 1
Form: probes
Write a class template `depth<T>` with a static constexpr int member `value` that is 0 when T is not a pointer, and, when T is a pointer to U, one more than the `value` of `depth<U>`.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(depth<int>::value == 0);
static_assert(depth<int*>::value == 1);
static_assert(depth<double**>::value == 2);
static_assert(depth<double**>::value == 1);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
template <typename T>
struct depth {
    static constexpr int value {0};
};

template <typename U>
struct depth<U*> {
    static constexpr int value {depth<U>::value + 1};
};

int main()
{
}
```
### Wrong
```cpp
template <typename T>
struct depth {
    static constexpr int value {0};
};

template <typename U>
struct depth<U*> {
    static constexpr int value {1};
};

int main()
{
}
```
### Witness
```cpp
static_assert(depth<char***>::value == 3);
```

## Alone 2
Form: probes
Write a class template `same<A, B>` with a static constexpr bool member `value` that is true when A and B are one type, and false otherwise.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(same<int, int>::value);
static_assert(same<double, double>::value);
static_assert(!same<int, long>::value);
static_assert(same<int, const int>::value);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
template <typename A, typename B>
struct same {
    static constexpr bool value {false};
};

template <typename T>
struct same<T, T> {
    static constexpr bool value {true};
};

int main()
{
}
```
### Wrong
```cpp
template <typename A, typename B>
struct same {
    static constexpr bool value {false};
};

template <>
struct same<int, int> {
    static constexpr bool value {true};
};

int main()
{
}
```
### Witness
```cpp
static_assert(same<char, char>::value);
```
