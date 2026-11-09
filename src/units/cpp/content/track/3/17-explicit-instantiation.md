# 3.17 Explicit instantiation
Part: explicit instantiation
Clause: [temp.explicit], [temp.spec.general], [temp.expl.spec], [temp.inst]
After: 3.05
Levels: c++11

## Example
```cpp
#include <print>

//: Define a class template and a function template.
template <typename T>
struct Pair {
    T first;
    T second;
    T sum() const
    {
        return first + second;
    }
};

template <typename T>
T twice(T value)
{
    return value + value;
}

//: Promise that another place instantiates these.
extern template struct Pair<long>;
extern template int twice<int>(int);

//: Instantiate them here, with every member of the class.
template struct Pair<long>;
template int twice<int>(int);

//: Use the instantiations.
int main()
{
    Pair<long> pair {2, 3};
    std::println("{} {}", pair.sum(), twice(4));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>

template <typename T>
struct Box {
    T value;
    T half() const
    {
        return value / 2;
    }
};

template struct Box<std::string>;

int main()
{
    Box<std::string> box {"ab"};
    std::printf("%zu\n", box.value.size());
}
```
Answer: c++11 ill-formed 9

## Verdict 2
```cpp
#include <cstdio>

template <typename T>
struct Cell;

template struct Cell<int>;

template <typename T>
struct Cell {
    T value;
};

int main()
{
    Cell<int> cell {4};
    std::printf("%d\n", cell.value);
}
```
Answer: c++11 ill-formed 6

## Alone 1
Form: probes
Write a class template `Pair<T>` with two members `first` and `second` of type T and a member function `sum()` that returns their sum, then an explicit instantiation definition of `Pair<int>`.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
template <typename T>
struct Pair {
    T first;
    T second;
    T sum() const
    {
        return first + second;
    }
};

template struct Pair<int>;

int main()
{
}
```
### Wrong
```cpp
template <typename T>
struct Pair {
    T first;
    T second;
    T sum() const
    {
        return first + second;
    }
};

extern template struct Pair<int>;

int main()
{
}
```
### Probes
```cpp
int s {Pair<int> {1, 2}.sum()};
template struct Pair<long>;
template struct Pair<int>;
template <> struct Pair<int> {};
```
Accept: 1, 2
Reject: 3, 4
### Witness
```cpp
template struct Pair<int>;
```

## Alone 2
Form: probes
Write a function template `largest(a, b)` that returns the larger of two values of the same type, then make the program hold its instantiation for double by an explicit instantiation definition.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
template <typename T>
T largest(T a, T b)
{
    return a < b ? b : a;
}

template double largest<double>(double, double);

int main()
{
}
```
### Wrong
```cpp
template <typename T>
T largest(T a, T b)
{
    return a < b ? b : a;
}

template <> double largest<double>(double a, double b)
{
    return a < b ? b : a;
}

int main()
{
}
```
### Probes
```cpp
double d {largest(1.5, 2.5)};
int i {largest(3, 2)};
template int largest<int>(int, int);
template <> double largest<double>(double, double);
template double largest<double>(double, double);
```
Accept: 1, 2, 3
Reject: 4, 5
### Witness
```cpp
template <> double largest<double>(double, double);
```
