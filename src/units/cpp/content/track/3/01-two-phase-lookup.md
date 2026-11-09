# 3.01 Two-phase lookup of dependent names
Part: two-phase lookup of dependent names
Clause: [temp.res.general], [temp.dep.general], [temp.dep.candidate], [temp.dep.type]
After: none
Levels: c++11

## Example
```cpp
#include <print>
#include <vector>

//: Give a class template a member function size.
template <typename T>
struct Store {
    int size() const
    {
        return 3;
    }
};

//: Reach the member of the dependent base through this.
template <typename T>
struct Shelf : Store<T> {
    int twice() const
    {
        return 2 * this->size();
    }
};

//: Mark a name inside T as a type with typename.
template <typename C>
typename C::value_type first(const C& c)
{
    typename C::value_type x {c[0]};
    return x;
}

int main()
{
    //: Check both names only when the templates are used.
    Shelf<int> s {};
    std::println("{}", s.twice());
    std::vector<int> v {7, 8, 9};
    std::println("{}", first(v));
}
```

## Verdict 1
```cpp
template <typename T>
int twice(T x)
{
    return helper(2) * x;
}

int helper(int n)
{
    return n;
}

int main()
{
}
```
Answer: c++11..c++23 ill-formed 4

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
int run(T x)
{
    return step(x);
}

int step(int n)
{
    return n + 1;
}

int main()
{
    std::printf("%d\n", run(4));
}
```
Answer: c++11..c++23 ill-formed 6

## Alone 1
Form: probes
Write a constexpr function `get()` that returns 1, a class template `Base<T>` with a constexpr member function `get()` that returns 7, and a class template `Derived<T>` derived from `Base<T>` with a constexpr member function `twice()` that returns twice the value of the member `get()`.
Input: none.
Output: none.
Limits: none.
### Probes
```cpp
static_assert(get() == 1);
static_assert(Derived<int> {}.twice() == 14);
static_assert(Derived<char> {}.twice() == 14);
static_assert(Derived<int> {}.twice() == 2);
```
Accept: 1, 2, 3
Reject: 4
### Reference
```cpp
constexpr int get()
{
    return 1;
}

template <typename T>
struct Base {
    constexpr int get() const
    {
        return 7;
    }
};

template <typename T>
struct Derived : Base<T> {
    constexpr int twice() const
    {
        return 2 * this->get();
    }
};

int main()
{
}
```
### Wrong
```cpp
constexpr int get()
{
    return 1;
}

template <typename T>
struct Base {
    constexpr int get() const
    {
        return 7;
    }
};

template <typename T>
struct Derived : Base<T> {
    constexpr int twice() const
    {
        return 2 * get();
    }
};

int main()
{
}
```
### Witness
```cpp
static_assert(Derived<long> {}.twice() == 14);
```

## Alone 2
Form: probes
Exempt: T.42
Write a constexpr function template `sum(c)` that takes a container c by const reference and returns the sum of its elements, as a value of the container's `value_type`, starting from a local variable of that type set to 0. Write that type as `typename C::value_type`.
Input: none.
Output: none.
Limits: the container has begin and end.
### Probes
```cpp
#include <array>
constexpr std::array<int, 3> a {1, 2, 3};
static_assert(sum(a) == 6);
static_assert(sum(std::array<double, 2> {0.5, 0.25}) == 0.75);
static_assert(sum(5) == 5);
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
template <typename C>
constexpr typename C::value_type sum(const C& c)
{
    typename C::value_type total {0};
    for (const auto& x : c) {
        total += x;
    }
    return total;
}

int main()
{
}
```
### Wrong
```cpp
template <typename C>
constexpr typename C::value_type sum(const C& c)
{
    C::value_type total {0};
    for (const auto& x : c) {
        total += x;
    }
    return total;
}

int main()
{
}
```
### Witness
```cpp
#include <array>
static_assert(sum(std::array<long, 1> {4}) == 4);
```
