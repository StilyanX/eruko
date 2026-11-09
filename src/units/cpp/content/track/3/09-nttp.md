# 3.09 Non-type template parameters
Part: non-type template parameters
Clause: [temp.param], [temp.arg.nontype], [temp.type], [expr.const]
After: none
Levels: c++11

## Example
```cpp
#include <array>
#include <print>

//: Give a template a value as well as a type.
template <typename T, int N>
struct Grid
{
    std::array<T, N * N> cells {};
};

//: Read the value back from the type of the argument.
template <int N>
constexpr int side_of(const Grid<double, N>&)
{
    return N;
}

int main()
{
    //: Make two grids whose sides make two different types.
    Grid<double, 3> small;
    Grid<double, 4> large;
    //: Print each side and the number of cells it gives.
    std::println("{} {}", side_of(small), small.cells.size());
    std::println("{} {}", side_of(large), large.cells.size());
    //: Pass a constant, since the value is fixed while compiling.
    constexpr int side {5};
    Grid<double, side> other;
    std::println("{}", other.cells.size());
}
```

## Verdict 1
```cpp
template <int N>
int twice()
{
    return 2 * N;
}

int main()
{
    int n {3};
    return twice<n>() - 6;
}
```
Answer: c++11..c++23 ill-formed 10

## Verdict 2
```cpp
template <double X>
struct Scale
{
    static constexpr double factor {X};
};

int main()
{
    return Scale<2.0>::factor == 2.0 ? 0 : 1;
}
```
Answer:
- c++11..c++17: ill-formed 1
- c++20..c++23: defined

## Alone 1
Form: probes
Write a class template `Ring` whose parameters are an element type and a capacity of type `std::size_t`, and which holds exactly capacity elements of that type in an array member named `data`.
Input: none.
Output: none.
Limits: the capacity is at least 1.
### Probes
```cpp
static_assert(sizeof(Ring<int, 4>) == 4 * sizeof(int));
constexpr std::size_t k {3};
Ring<char, k> r {};
static_assert(sizeof(r.data) == 3);
std::size_t n {4};
Ring<int, n> s {};
using Bad = Ring<int, -1>;
```
Accept: 1, 2, 3, 4, 5
Reject: 6, 7
### Reference
```cpp
#include <cstddef>

template <typename T, std::size_t N>
struct Ring
{
    T data[N];
};

int main()
{
}
```
### Wrong
```cpp
#include <cstddef>

template <typename T, int N>
struct Ring
{
    T data[N];
};

int main()
{
}
```
### Witness
```cpp
using Wide = Ring<double, -2>;
```

## Alone 2
Form: probes
Write a class template `Constant` with one non-type parameter whose type is taken from the argument, and a static member `value` that is a constant of that type equal to the argument.
Input: none.
Output: none.
Limits: the argument is an integer, a character or a bool.
### Probes
```cpp
static_assert(Constant<5>::value == 5);
static_assert(Constant<'a'>::value == 'a');
using C = decltype(Constant<'a'>::value);
static_assert(std::is_same_v<C, const char>);
using U = decltype(Constant<7u>::value);
static_assert(std::is_same_v<U, const unsigned>);
int m {2};
int p {Constant<m>::value};
```
Accept: 1, 2, 3, 4, 5, 6, 7
Reject: 8
### Reference
```cpp
#include <type_traits>

template <auto V>
struct Constant
{
    static constexpr decltype(V) value {V};
};

int main()
{
}
```
### Wrong
```cpp
#include <type_traits>

template <int V>
struct Constant
{
    static constexpr decltype(V) value {V};
};

int main()
{
}
```
### Witness
```cpp
using B = decltype(Constant<true>::value);
static_assert(std::is_same_v<B, const bool>);
```
