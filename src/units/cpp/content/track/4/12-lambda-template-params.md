# 4.12 A lambda with its own template parameters
Part: the template parameter list of a lambda
Clause: [expr.prim.lambda.general], [expr.prim.lambda.closure], [temp.deduct.call], [temp.deduct.type]
After: none
Levels: c++20

## Example
```cpp
#include <print>
#include <vector>

int main()
{
    //: Name the element type of any vector the lambda takes.
    auto mean = []<typename T>(const std::vector<T>& v) {
        T sum {};
        for (const T& x : v) {
            sum += x;
        }
        return sum / static_cast<T>(v.size());
    };
    std::println("{} {}", mean(std::vector {2, 4, 9}),
                 mean(std::vector {2.0, 4.0, 9.0}));
    //: Ask for two arguments of one and the same type.
    auto larger = []<typename T>(T a, T b) {
        return a < b ? b : a;
    };
    std::println("{} {}", larger(3, 7), larger(2.5, 1.5));
    //: Take the length of an array as a value from its type.
    auto length = []<int N>(const int (&)[N]) {
        return N;
    };
    int cells[6] {};
    std::println("{}", length(cells));
}
```

## Verdict 1
```cpp
int main()
{
    auto larger = []<typename T>(T a, T b) {
        return a < b ? b : a;
    };
    double x {larger(3, 7.5)};
    return x == 7.5 ? 0 : 1;
}
```
Answer: c++20..c++23 ill-formed 6

## Verdict 2
```cpp
int main()
{
    auto count = []<int N>(const int (&)[N]) {
        return N;
    };
    int a[5] {};
    int* p {a};
    return count(a) - count(p);
}
```
Answer: c++20..c++23 ill-formed 8

## Alone 1
Form: probes
Write a lambda `same_sum` that takes two vectors with one and the same element type and returns the sum of all their elements as that type, so that two vectors of different element types are rejected.
Input: none.
Output: none.
Limits: the element type is an arithmetic type.
### Probes
```cpp
std::vector<int> i {1, 2};
std::vector<double> d {0.5};
int s {same_sum(i, i)};
double t {same_sum(d, d)};
int u {same_sum(i, d)};
```
Accept: 1, 2, 3, 4
Reject: 5
### Reference
```cpp
#include <vector>

auto same_sum = []<typename T>(const std::vector<T>& a,
                               const std::vector<T>& b) {
    T sum {};
    for (const T& x : a) {
        sum += x;
    }
    for (const T& x : b) {
        sum += x;
    }
    return sum;
};

int main()
{
}
```
### Wrong
```cpp
#include <vector>

auto same_sum = []<typename T, typename U>(
                    const std::vector<T>& a,
                    const std::vector<U>& b) {
    T sum {};
    for (const T& x : a) {
        sum += x;
    }
    for (const U& x : b) {
        sum += x;
    }
    return sum;
};

int main()
{
}
```
### Witness
```cpp
std::vector<long> k {3};
std::vector<int> m {4};
long w {same_sum(k, m)};
```

## Alone 2
Form: run
Write a program that reads n integers and then m decimal numbers, and prints the sum of the integers and the sum of the decimal numbers, both found by one lambda that takes a vector of any element type and returns a sum of that element type.
Input: line 1, n then n integers; line 2, m then m decimal numbers.
Output: one line, the two sums separated by a space, the second in its shortest exact form: 3.0 prints as 3, 1.75 as 1.75.
Limits: 1 ≤ n, m ≤ 100; each number is between −1000 and 1000; each decimal number is a multiple of 0.25.
### Examples
```in
3 1 2 3
2 1 2
```
```out
6 3
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    auto sum = []<typename T>(const std::vector<T>& v) {
        T total {};
        for (const T& x : v) {
            total += x;
        }
        return total;
    };
    int n {0};
    std::cin >> n;
    std::vector<int> whole(n);
    for (int& x : whole) {
        std::cin >> x;
    }
    int m {0};
    std::cin >> m;
    std::vector<double> parts(m);
    for (double& x : parts) {
        std::cin >> x;
    }
    std::println("{} {}", sum(whole), sum(parts));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    auto sum = []<typename T>(const std::vector<T>& v) {
        int total {};
        for (const T& x : v) {
            total += x;
        }
        return total;
    };
    int n {0};
    std::cin >> n;
    std::vector<int> whole(n);
    for (int& x : whole) {
        std::cin >> x;
    }
    int m {0};
    std::cin >> m;
    std::vector<double> parts(m);
    for (double& x : parts) {
        std::cin >> x;
    }
    std::println("{} {}", sum(whole), sum(parts));
}
```
### Tests
```in
1 5
3 0.25 0.25 0.5
```
```in
2 -4 4
1 -2.5
```
```in
1 7
2 1.75 2.5
```
### Witness
```in
1 1
2 0.5 0.5
```
