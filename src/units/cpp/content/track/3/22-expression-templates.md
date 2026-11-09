# 3.22 The temporaries an expression template removes from `a + b + c`
Part: the temporaries an expression template removes from `a + b + c`
Clause: [class.temporary], [temp.inst], [over.match.oper], [basic.life]
After: 3.02, 3.06
Levels: c++11

## Example
```cpp
#include <cstddef>
#include <print>
#include <vector>

//: Describe a sum by its two operands; add nothing yet.
template <typename L, typename R>
struct Sum {
    const L& l;
    const R& r;
    double operator[](std::size_t i) const
    {
        return l[i] + r[i];
    }
    std::size_t size() const
    {
        return r.size();
    }
};

//: Fill a vector from any expression in one loop.
struct Vec {
    std::vector<double> v;
    explicit Vec(std::vector<double> values) : v(values)
    {
    }
    template <typename L, typename R>
    Vec(const Sum<L, R>& e) : v(e.size())
    {
        for (std::size_t i {0}; i < v.size(); ++i) {
            v[i] = e[i];
        }
    }
    double operator[](std::size_t i) const
    {
        return v[i];
    }
    std::size_t size() const
    {
        return v.size();
    }
};

//: Let each plus build a node, not a vector.
template <typename L, typename R>
Sum<L, R> operator+(const L& l, const R& r)
{
    return {l, r};
}

//: Build a + b + c with one vector, the result.
int main()
{
    Vec a {{1, 2}};
    Vec b {{3, 4}};
    Vec c {{5, 6}};
    Vec result = a + b + c;
    std::println("{} {}", result[0], result[1]);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <vector>

template <typename L, typename R>
struct Sum {
    const L& l;
    const R& r;
    double operator[](int i) const
    {
        return l[i] + r[i];
    }
};

struct Vec {
    std::vector<double> v;
    double operator[](int i) const
    {
        return v[i];
    }
};

template <typename L, typename R>
Sum<L, R> operator+(const L& l, const R& r)
{
    return {l, r};
}

int main()
{
    Vec a {{1, 2}};
    Vec b {{3, 4}};
    Vec c {{5, 6}};
    auto s = a + b + c;
    std::printf("%g\n", s[0]);
}
```
Answer: c++11 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <vector>

template <typename L, typename R>
struct Sum {
    const L& l;
    const R& r;
    double operator[](int i) const
    {
        return l[i] + r[i];
    }
};

struct Vec {
    std::vector<double> v;
    double operator[](int i) const
    {
        return v[i];
    }
};

template <typename L, typename R>
Sum<L, R> operator+(const L& l, const R& r)
{
    return {l, r};
}

int main()
{
    Vec a {{1, 2}};
    Vec b {{3, 4}};
    Vec c {{5, 6}};
    double first {(a + b + c)[0]};
    std::printf("%g\n", first);
}
```
Answer: c++11 defined

## Count
Columns: temporaries
```cpp
#include <print>
#include <source_location>

int made {0};

struct Vec {
    double x {0};
};

Vec operator+(const Vec& a, const Vec& b)
{
    ++made;
    return Vec {a.x + b.x};
}

void show(const Vec& v, std::source_location at =
                            std::source_location::current())
{
    for (; made > 0; --made) {
        std::println("@{} temporaries", at.line());
    }
    std::println("{}", v.x);
}

int main()
{
    Vec a {1};
    Vec b {2};
    show(a + b);
    show(a + b + a);
    show((a + b) + (b + a));
}
```

## Alone 1
Form: run
Exempt: T.21
Write a program that reads n, three vectors a, b and c of n numbers, and t, then stores a + b (t = 2) or a + b + c (t = 3) in a new vector of your vector type and prints it, then prints how many vectors were constructed after a, b and c were read; every constructor of your vector type adds 1 to that count, and the count must be 1 for both values of t. Define the operator + and no other arithmetic operator.
Input: one line n; three lines of n numbers each; one line t.
Output: one line, the n numbers of the sum; one line, the count.
Limits: 1 ≤ n ≤ 100; t is 2 or 3; every number is an integer between -1000 and 1000.
### Examples
```in
2
1 2
3 4
5 6
2
```
```out
4 6
1
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

int made {0};

template <typename L, typename R>
struct Sum {
    const L& l;
    const R& r;
    double operator[](std::size_t i) const
    {
        return l[i] + r[i];
    }
    std::size_t size() const
    {
        return r.size();
    }
};

struct Vec {
    std::vector<double> v;
    explicit Vec(std::size_t n) : v(n)
    {
        ++made;
    }
    template <typename L, typename R>
    Vec(const Sum<L, R>& e) : v(e.size())
    {
        ++made;
        for (std::size_t i {0}; i < v.size(); ++i) {
            v[i] = e[i];
        }
    }
    double operator[](std::size_t i) const
    {
        return v[i];
    }
    std::size_t size() const
    {
        return v.size();
    }
};

template <typename L, typename R>
Sum<L, R> operator+(const L& l, const R& r)
{
    return {l, r};
}

Vec read(std::size_t n)
{
    Vec x {n};
    for (double& value : x.v) {
        std::cin >> value;
    }
    return x;
}

void show(const Vec& x)
{
    for (std::size_t i {0}; i < x.size(); ++i) {
        std::print("{}{}", i == 0 ? "" : " ", x[i]);
    }
    std::println("");
    std::println("{}", made);
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    Vec a {read(n)};
    Vec b {read(n)};
    Vec c {read(n)};
    int t {2};
    std::cin >> t;
    made = 0;
    if (t == 2) {
        Vec sum = a + b;
        show(sum);
    } else {
        Vec sum = a + b + c;
        show(sum);
    }
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

int made {0};

template <typename L, typename R>
struct Sum {
    const L& l;
    const R& r;
    double operator[](std::size_t i) const
    {
        return l[i] + r[i];
    }
    std::size_t size() const
    {
        return r.size();
    }
};

struct Vec {
    std::vector<double> v;
    explicit Vec(std::size_t n) : v(n)
    {
        ++made;
    }
    template <typename L, typename R>
    Vec(const Sum<L, R>& e) : v(e.size())
    {
        ++made;
        for (std::size_t i {0}; i < v.size(); ++i) {
            v[i] = e[i];
        }
    }
    double operator[](std::size_t i) const
    {
        return v[i];
    }
    std::size_t size() const
    {
        return v.size();
    }
};

template <typename L, typename R>
Vec operator+(const L& l, const R& r)
{
    return Sum<L, R> {l, r};
}

Vec read(std::size_t n)
{
    Vec x {n};
    for (double& value : x.v) {
        std::cin >> value;
    }
    return x;
}

void show(const Vec& x)
{
    for (std::size_t i {0}; i < x.size(); ++i) {
        std::print("{}{}", i == 0 ? "" : " ", x[i]);
    }
    std::println("");
    std::println("{}", made);
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    Vec a {read(n)};
    Vec b {read(n)};
    Vec c {read(n)};
    int t {2};
    std::cin >> t;
    made = 0;
    if (t == 2) {
        Vec sum = a + b;
        show(sum);
    } else {
        Vec sum = a + b + c;
        show(sum);
    }
}
```
### Tests
```in
3
1 2 3
4 5 6
7 8 9
3
```
```in
1
-5
5
2
3
```
### Witness
```in
1
1
1
1
3
```

## Alone 2
Form: sanitizer
Sanitizer: address
Exempt: T.21
Write a program that reads n, three vectors a, b and c of n numbers, and t, then keeps a + b (t = 2) or a + b + c (t = 3) in a variable declared with `auto` that holds no vector of the sum, and after that line prints the n numbers of the sum read from that variable. Define the operator + and no other arithmetic operator.
Input: one line n; three lines of n numbers each; one line t.
Output: one line, the n numbers of the sum.
Limits: 1 ≤ n ≤ 100; t is 2 or 3; every number is an integer between -1000 and 1000.
### Examples
```in
2
1 2
3 4
5 6
2
```
```out
4 6
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

struct Vec {
    std::vector<double> v;
    double operator[](std::size_t i) const
    {
        return v[i];
    }
};

template <typename T>
struct Hold {
    using type = T;
};

template <>
struct Hold<Vec> {
    using type = const Vec&;
};

template <typename T>
using held = typename Hold<T>::type;

template <typename L, typename R>
struct Sum {
    held<L> l;
    held<R> r;
    double operator[](std::size_t i) const
    {
        return l[i] + r[i];
    }
};

template <typename L, typename R>
Sum<L, R> operator+(const L& l, const R& r)
{
    return {l, r};
}

Vec read(std::size_t n)
{
    Vec x {std::vector<double>(n)};
    for (double& value : x.v) {
        std::cin >> value;
    }
    return x;
}

template <typename E>
void show(const E& e, std::size_t n)
{
    for (std::size_t i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", e[i]);
    }
    std::println("");
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    Vec a {read(n)};
    Vec b {read(n)};
    Vec c {read(n)};
    int t {2};
    std::cin >> t;
    if (t == 2) {
        auto sum = a + b;
        show(sum, n);
    } else {
        auto sum = a + b + c;
        show(sum, n);
    }
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <print>
#include <vector>

struct Vec {
    std::vector<double> v;
    double operator[](std::size_t i) const
    {
        return v[i];
    }
};

template <typename T>
struct Hold {
    using type = const T&;
};

template <>
struct Hold<Vec> {
    using type = const Vec&;
};

template <typename T>
using held = typename Hold<T>::type;

template <typename L, typename R>
struct Sum {
    held<L> l;
    held<R> r;
    double operator[](std::size_t i) const
    {
        return l[i] + r[i];
    }
};

template <typename L, typename R>
Sum<L, R> operator+(const L& l, const R& r)
{
    return {l, r};
}

Vec read(std::size_t n)
{
    Vec x {std::vector<double>(n)};
    for (double& value : x.v) {
        std::cin >> value;
    }
    return x;
}

template <typename E>
void show(const E& e, std::size_t n)
{
    for (std::size_t i {0}; i < n; ++i) {
        std::print("{}{}", i == 0 ? "" : " ", e[i]);
    }
    std::println("");
}

int main()
{
    std::size_t n {0};
    std::cin >> n;
    Vec a {read(n)};
    Vec b {read(n)};
    Vec c {read(n)};
    int t {2};
    std::cin >> t;
    if (t == 2) {
        auto sum = a + b;
        show(sum, n);
    } else {
        auto sum = a + b + c;
        show(sum, n);
    }
}
```
### Tests
```in
3
1 2 3
4 5 6
7 8 9
3
```
```in
1
-4
2
2
2
```
### Witness
```in
1
1
2
3
3
```
