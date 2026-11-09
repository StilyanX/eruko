# 3.21 A type-erased field interface against a template, counted by symbol
Part: a type-erased field interface against a template: the instantiations, counted by symbol
Clause: [temp.inst], [temp.mem], [class.virtual], [basic.def.odr]
After: 3.17, 3.18
Levels: c++11

## Example
```cpp
#include <print>
#include <vector>

//: Hide the element type behind a virtual interface.
struct Field {
    virtual ~Field() = default;
    virtual int size() const = 0;
    virtual double at(int i) const = 0;
};

//: Instantiate one model class for each element type.
template <typename T>
struct Values : Field {
    std::vector<T> items;
    int size() const override
    {
        return static_cast<int>(items.size());
    }
    double at(int i) const override
    {
        return items[i];
    }
};

//: Compile the sum once; it works on every model.
double total(const Field& field)
{
    double sum {0};
    for (int i {0}; i < field.size(); ++i) {
        sum += field.at(i);
    }
    return sum;
}

//: Sum a field of int and a field of double with one total.
int main()
{
    Values<int> counts;
    counts.items = {1, 2, 3};
    Values<double> weights;
    weights.items = {0.5, 0.25};
    std::println("{} {}", total(counts), total(weights));
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Field {
    template <typename T>
    virtual T at(int i) const = 0;
};

int main()
{
    std::printf("%zu\n", sizeof(Field));
}
```
Answer: c++11 ill-formed 5

## Verdict 2
```cpp
#include <cstdio>
#include <memory>

struct Concept {
    virtual ~Concept() = default;
    virtual int size() const = 0;
};

template <typename T>
struct Model : Concept {
    T field;
    explicit Model(T f) : field(f)
    {
    }
    int size() const override
    {
        return field.size();
    }
};

struct Plain {
    int length;
};

int main()
{
    std::unique_ptr<Concept> any(new Model<Plain>(Plain {3}));
    std::printf("%d\n", any != nullptr);
}
```
Answer: c++11 ill-formed 17

## Alone 1
Form: run
Flags: -c -O0
Result: nm ^double total
Write a program that reads n, then a line of n ints, a line of n floats and a line of n doubles, and prints the sum of each line, all three sums computed by one function `total`, so that the object file holds exactly one compiled `total` whatever the element type.
Input: one line n; then three lines of n numbers each.
Output: three lines, the sums of the ints, the floats and the doubles.
Limits: 1 ≤ n ≤ 100; every number between -1000 and 1000.
### Examples
```in
2
1 2
0.5 0.5
1.5 2.5
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Field {
    virtual ~Field() = default;
    virtual int size() const = 0;
    virtual double at(int i) const = 0;
};

template <typename T>
struct Values : Field {
    std::vector<T> items;
    int size() const override
    {
        return static_cast<int>(items.size());
    }
    double at(int i) const override
    {
        return items[i];
    }
};

template <typename T>
Values<T> read(int n)
{
    Values<T> field;
    field.items.resize(n);
    for (T& item : field.items) {
        std::cin >> item;
    }
    return field;
}

double total(const Field& field)
{
    double sum {0};
    for (int i {0}; i < field.size(); ++i) {
        sum += field.at(i);
    }
    return sum;
}

int main()
{
    int n {0};
    std::cin >> n;
    Values<int> ints {read<int>(n)};
    Values<float> floats {read<float>(n)};
    Values<double> doubles {read<double>(n)};
    std::println("{}", total(ints));
    std::println("{}", total(floats));
    std::println("{}", total(doubles));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Field {
    virtual ~Field() = default;
    virtual int size() const = 0;
    virtual double at(int i) const = 0;
};

template <typename T>
struct Values : Field {
    std::vector<T> items;
    int size() const override
    {
        return static_cast<int>(items.size());
    }
    double at(int i) const override
    {
        return items[i];
    }
};

template <typename T>
Values<T> read(int n)
{
    Values<T> field;
    field.items.resize(n);
    for (T& item : field.items) {
        std::cin >> item;
    }
    return field;
}

template <typename F>
double total(const F& field)
{
    double sum {0};
    for (int i {0}; i < field.size(); ++i) {
        sum += field.at(i);
    }
    return sum;
}

int main()
{
    int n {0};
    std::cin >> n;
    Values<int> ints {read<int>(n)};
    Values<float> floats {read<float>(n)};
    Values<double> doubles {read<double>(n)};
    std::println("{}", total(ints));
    std::println("{}", total(floats));
    std::println("{}", total(doubles));
}
```
### Tests
```in
1
5
0.25
-3
```
### Witness
```in
3
1 2 3
1 2 3
1 2 3
```

## Alone 2
Form: run
Flags: -c -O0
Result: nm ^Values<.*>::at\(
Write a program that reads n, then a line of n numbers that fit a short, a line of n numbers that fit an int and a line of n numbers that fit a long, keeps each line in a `Values<T>` field behind a type-erased interface `Field` with a virtual `at(i)`, and prints the sum of each line, so that the object file holds the code of `at` for one element type only.
Input: one line n; then three lines of n integers each.
Output: three lines, the sums of the three lines.
Limits: 1 ≤ n ≤ 100; every number between -1000 and 1000.
### Examples
```in
2
1 2
3 4
5 6
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Field {
    virtual ~Field() = default;
    virtual int size() const = 0;
    virtual long at(int i) const = 0;
};

template <typename T>
struct Values : Field {
    std::vector<T> items;
    int size() const override
    {
        return static_cast<int>(items.size());
    }
    long at(int i) const override
    {
        return items[i];
    }
};

template <typename T>
Values<T> read(int n)
{
    Values<T> field;
    field.items.resize(n);
    for (T& item : field.items) {
        std::cin >> item;
    }
    return field;
}

long total(const Field& field)
{
    long sum {0};
    for (int i {0}; i < field.size(); ++i) {
        sum += field.at(i);
    }
    return sum;
}

int main()
{
    int n {0};
    std::cin >> n;
    Values<long> shorts {read<long>(n)};
    Values<long> ints {read<long>(n)};
    Values<long> longs {read<long>(n)};
    std::println("{}", total(shorts));
    std::println("{}", total(ints));
    std::println("{}", total(longs));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

struct Field {
    virtual ~Field() = default;
    virtual int size() const = 0;
    virtual long at(int i) const = 0;
};

template <typename T>
struct Values : Field {
    std::vector<T> items;
    int size() const override
    {
        return static_cast<int>(items.size());
    }
    long at(int i) const override
    {
        return items[i];
    }
};

template <typename T>
Values<T> read(int n)
{
    Values<T> field;
    field.items.resize(n);
    for (T& item : field.items) {
        std::cin >> item;
    }
    return field;
}

long total(const Field& field)
{
    long sum {0};
    for (int i {0}; i < field.size(); ++i) {
        sum += field.at(i);
    }
    return sum;
}

int main()
{
    int n {0};
    std::cin >> n;
    Values<short> shorts {read<short>(n)};
    Values<int> ints {read<int>(n)};
    Values<long> longs {read<long>(n)};
    std::println("{}", total(shorts));
    std::println("{}", total(ints));
    std::println("{}", total(longs));
}
```
### Tests
```in
1
-7
8
9
```
### Witness
```in
1
1
1
1
```
