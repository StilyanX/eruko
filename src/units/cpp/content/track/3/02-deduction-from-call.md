# 3.02 Template argument deduction from a call
Part: template argument deduction from a call
Clause: [temp.deduct.call], [temp.deduct.type], [temp.arg.explicit]
After: none
Levels: c++11

## Example
```cpp
#include <print>

//: Take two arguments of one type T by value.
template <typename T>
T larger(T a, T b)
{
    return a > b ? a : b;
}

//: Take a built-in array by reference, so its length is deduced.
template <typename T, int N>
int length(const T (&a)[N])
{
    return N;
}

int main()
{
    //: Let both ints deduce T as int.
    std::println("{}", larger(3, 4));
    //: Name T yourself when the two arguments differ.
    std::println("{}", larger<double>(3, 4.5));
    //: Let the array's type give both T and N.
    int values[5] {1, 2, 3, 4, 5};
    std::println("{}", length(values));
}
```

## Verdict 1
```cpp
template <typename T>
T larger(T a, T b)
{
    return a > b ? a : b;
}

int main()
{
    return larger(3, 4.5) > 0 ? 0 : 1;
}
```
Answer: c++11..c++23 ill-formed 9

## Verdict 2
```cpp
template <typename T>
void reset(T& x)
{
    x = 0;
}

int main()
{
    const int n {5};
    reset(n);
}
```
Answer: c++11..c++23 ill-formed 4

## Alone 1
Form: probes
Write a constexpr function template `larger(a, b)` that takes two arguments of one type T by value and returns the larger.
Input: none.
Output: none.
Limits: T has the operator >.
### Probes
```cpp
static_assert(larger(3, 4) == 4);
static_assert(larger(2.5, 1.5) == 2.5);
static_assert(larger<double>(1, 2.5) == 2.5);
constexpr auto m {larger(1, 2.5)};
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
template <typename T>
constexpr T larger(T a, T b)
{
    return a > b ? a : b;
}

int main()
{
}
```
### Wrong
```cpp
template <typename T, typename U>
constexpr T larger(T a, U b)
{
    return a > b ? a : b;
}

int main()
{
}
```
### Witness
```cpp
constexpr auto w {larger(2, 'a')};
```

## Alone 2
Form: probes
Write a constexpr function template `count(a)` that takes a built-in array and returns its number of elements.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
constexpr int a[4] {};
static_assert(count(a) == 4);
static_assert(count("abc") == 4);
constexpr const int* p {a};
static_assert(count(p) == 4);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename T, int N>
constexpr int count(const T (&a)[N])
{
    return N;
}

int main()
{
}
```
### Wrong
```cpp
template <typename T, int N>
constexpr int count(const T a[N])
{
    return N;
}

int main()
{
}
```
### Witness
```cpp
constexpr double d[2] {};
static_assert(count(d) == 2);
```
