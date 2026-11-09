# 3.03 Type traits as compile-time functions
Part: type traits as compile-time functions
Clause: [meta.rqmts], [meta.unary.cat], [meta.trans.cv], [meta.trans.ref], [meta.trans.other]
After: none
Levels: c++11

## Example
```cpp
#include <print>
#include <type_traits>

//: Ask a trait a question about a type; value holds the answer.
static_assert(std::is_integral_v<long>);
static_assert(!std::is_integral_v<double>);

//: Ask a trait for a new type; type holds the answer.
static_assert(std::is_same_v<std::remove_cv_t<const int>, int>);
static_assert(std::is_same_v<std::decay_t<const int&>, int>);

//: Use the answers inside a template, while it compiles.
template <typename T>
bool is_whole(T)
{
    return std::is_integral_v<std::decay_t<T>>;
}

int main()
{
    //: Print what the trait said for each argument.
    std::println("{} {}", is_whole(3), is_whole(2.5));
}
```

## Verdict 1
```cpp
#include <type_traits>

using A = std::decay<const int&>::type;
using B = std::remove_reference<const int&>::type;

static_assert(std::is_same<A, int>::value, "decay");
static_assert(std::is_same<B, int>::value, "reference");

int main()
{
}
```
Answer: c++11..c++23 ill-formed 7

## Verdict 2
```cpp
#include <type_traits>

using P = std::remove_const<const int*>::type;
using Q = std::remove_const<int* const>::type;

static_assert(std::is_same<Q, int*>::value, "top");
static_assert(std::is_same<P, const int*>::value, "pointee");

int main()
{
}
```
Answer: c++11..c++23 defined

## Alone 1
Form: probes
Write a class template `is_number<T>` with a static constexpr bool member `value` that is true when T, once its references and its const are dropped, is an integer or floating-point type, and false otherwise.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(is_number<int>::value);
static_assert(is_number<const double&>::value);
static_assert(!is_number<int*>::value);
static_assert(is_number<int*>::value);
static_assert(is_number<void>::value);
```
Accept: 1, 2, 3
Reject: 4, 5
### Reference
```cpp
#include <type_traits>

template <typename T>
struct is_number {
    using U = std::remove_cvref_t<T>;
    static constexpr bool value {std::is_arithmetic_v<U>};
};

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename T>
struct is_number {
    using U = std::remove_cv_t<T>;
    static constexpr bool value {std::is_arithmetic_v<U>};
};

int main()
{
}
```
### Witness
```cpp
static_assert(is_number<long&>::value);
```

## Alone 2
Form: probes
Write a class template `wider<A, B>` with a member type `type` that is B when sizeof B is larger than sizeof A, and A otherwise.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
#include <type_traits>
using W1 = wider<char, long long>::type;
using W2 = wider<double, float>::type;
using W3 = wider<int, unsigned>::type;
static_assert(std::is_same_v<W1, long long>);
static_assert(std::is_same_v<W2, double>);
static_assert(std::is_same_v<W3, int>);
static_assert(std::is_same_v<W3, unsigned>);
```
Accept: 1, 2, 3, 4, 5, 6, 7
Reject: 8
### Reference
```cpp
#include <type_traits>

template <typename A, typename B>
struct wider {
    static constexpr bool b_larger {sizeof(B) > sizeof(A)};
    using type = std::conditional_t<b_larger, B, A>;
};

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <typename A, typename B>
struct wider {
    using type = std::common_type_t<A, B>;
};

int main()
{
}
```
### Witness
```cpp
#include <type_traits>
using W = wider<signed char, char>::type;
static_assert(std::is_same_v<W, signed char>);
```
