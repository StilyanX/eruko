# 3.07 Alias templates
Part: alias templates
Clause: [temp.alias], [temp.deduct.type], [temp.expl.spec]
After: none
Levels: c++11

## Example
```cpp
#include <print>
#include <vector>

//: Give a name with a parameter to a family of types.
template <typename T>
using Grid = std::vector<std::vector<T>>;

//: Take the alias as a parameter; T is still deduced.
template <typename T>
T corner(const Grid<T>& g)
{
    return g[0][0];
}

int main()
{
    //: Write Grid<int> where you mean the long vector type.
    Grid<int> g {{1, 2}, {3, 4}};
    std::vector<std::vector<int>>* p {&g};
    //: Pass the grid to the template.
    std::println("{} {}", corner(g), (*p)[1][1]);
}
```

## Verdict 1
```cpp
template <typename T>
using Ptr = T*;

template <>
using Ptr<void> = char*;

int main()
{
}
```
Answer: c++11..c++23 ill-formed 5

## Verdict 2
```cpp
template <typename T>
struct Same {
    using type = T;
};

template <typename T>
using same_t = typename Same<T>::type;

template <typename T>
T keep(same_t<T> x)
{
    return x;
}

int main()
{
    return keep(0);
}
```
Answer: c++11..c++23 ill-formed 17

## Alone 1
Form: probes
Write an alias template `Matrix<T>` that names a `std::vector` of `std::vector` of T.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
std::vector<std::vector<int>> v {{1, 2}, {3, 4}};
Matrix<int>* p {&v};
Matrix<double> d {};
std::vector<std::vector<double>>* q {&d};
Matrix<int>* r {&d};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <vector>

template <typename T>
using Matrix = std::vector<std::vector<T>>;

int main()
{
}
```
### Wrong
```cpp
#include <vector>

template <typename T>
struct Matrix : std::vector<std::vector<T>> {};

int main()
{
}
```
### Witness
```cpp
std::vector<std::vector<char>> w {};
Matrix<char>* pw {&w};
```

## Alone 2
Form: probes
Write a class template `Pair<A, B>` with members `first` of type A and `second` of type B, and an alias template `Twin<T>` that names a `Pair` of two T.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
template <typename T>
constexpr T sum(Twin<T> p) { return p.first + p.second; }
static_assert(sum(Pair<int, int> {1, 2}) == 3);
static_assert(sum(Twin<double> {0.5, 1.5}) == 2.0);
static_assert(sum(Pair<int, long> {1, 2}) == 3);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename A, typename B>
struct Pair {
    A first;
    B second;
};

template <typename T>
using Twin = Pair<T, T>;

int main()
{
}
```
### Wrong
```cpp
template <typename A, typename B>
struct Pair {
    A first;
    B second;
};

template <typename T>
struct Twin : Pair<T, T> {};

int main()
{
}
```
### Witness
```cpp
template <typename T>
constexpr T total(Twin<T> p) { return p.first + p.second; }
static_assert(total(Pair<long, long> {2, 3}) == 5);
```
