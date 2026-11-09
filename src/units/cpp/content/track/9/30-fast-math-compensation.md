# 9.30 The compensated sum under -ffast-math
Part: the compensated sum under `-ffast-math`: the bits it prints
Clause: [intro.abstract], [expr.pre], [dcl.type.cv]
After: 9.29
Levels: c++23
Source: GCC 16 manual, Optimize Options (-ffast-math, -fassociative-math); Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §4.3 (the correction (4.7), and the corrections added up apart, as for (4.10))

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <initializer_list>
#include <print>

int main()
{
    //: Sum 1, u and u, where u is the unit roundoff of float.
    float u {0x1p-24f};
    float s {0.0f};
    float c {0.0f};
    for (float x : {1.0f, u, u}) {
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        //: Store t and a - t as volatile, so no flag can regroup them.
        volatile float t {a + b};
        volatile float d {a - t};
        //: Keep what the addition lost; -ffast-math would make it 0.
        c = c + (d + b);
        s = t;
    }
    //: Print the compensated sum, 1 + 2u, with or without the flag.
    std::println("{:a}", s + c);
}
```

## Verdict 1
Flags: -ffast-math
```cpp
#include <algorithm>
#include <cmath>
#include <initializer_list>
#include <print>

int main()
{
    float u {0x1p-24f};
    float s {0.0f};
    float c {0.0f};
    for (float x : {1.0f, u, u}) {
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
    }
    std::println("{:a}", s + c);
}
```
Answer: c++23 unspecified
```out
1p+0
```
```out
1.000002p+0
```

## Verdict 2
```cpp
#include <algorithm>
#include <cmath>
#include <initializer_list>
#include <print>

int main()
{
    float u {0x1p-24f};
    float s {0.0f};
    float c {0.0f};
    for (float x : {1.0f, u, u}) {
        float a {s};
        float b {x};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        c = c + ((a - t) + b);
        s = t;
    }
    std::println("{:a}", s + c);
}
```
Answer: c++23 defined

## Alone 1
Form: run
Flags: -ffast-math
Exempt: CP.200
Write a program that reads n and sums the n floats xᵢ = 1.0f / i, for i = 1, 2, …, n, by compensated summation in float, with the corrections added up apart. Each xᵢ is 1.0f divided by i converted to float. Start from s = 0 and c = 0. For each term in order, let a be whichever of s and xᵢ is larger in size, s when they are the same size, and b the other; compute t = a + b, then d = a − t, then e = d + b, then set c = c + e and s = t. At the end, the sum is s + c. Your program is built with -ffast-math, and it must print the bits these steps give without that flag. Use volatile to keep these steps as written.
Input: one line, n.
Output: one line, the sum as std::format prints it with {:a}, such as 1.d55556p+0.
Limits: 1 ≤ n ≤ 100000; g++ 16 at -O2 with -ffast-math.
### Examples
```in
1
```
```out
1p+0
```
```in
3
```
```out
1.d55556p+0
```
### Reference
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    float s {0.0f};
    float c {0.0f};
    for (int i {1}; i <= n; ++i) {
        float a {s};
        float b {1.0f / static_cast<float>(i)};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        volatile float t {a + b};
        volatile float d {a - t};
        c = c + (d + b);
        s = t;
    }
    std::println("{:a}", s + c);
}
```
### Wrong
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    float s {0.0f};
    float c {0.0f};
    for (int i {1}; i <= n; ++i) {
        float a {s};
        float b {1.0f / static_cast<float>(i)};
        if (std::fabs(a) < std::fabs(b)) {
            std::swap(a, b);
        }
        float t {a + b};
        float d {a - t};
        c = c + (d + b);
        s = t;
    }
    std::println("{:a}", s + c);
}
```
### Tests
```in
2
```
```in
1000
```
```in
100000
```
### Witness
```in
10
```

## Alone 2
Form: run
Flags: -ffast-math
Exempt: CP.200
Write a program that reads two floats a and b with |a| ≥ |b| and splits a + b into a rounded sum s and its error e. Compute s = a + b, then z = s − a, then e = b − z, all in float; then s + e = a + b exactly. Your program is built with -ffast-math, and it must print the bits these steps give without that flag. Use volatile to keep these steps as written.
Input: one line, a and b, each read as a float.
Output: one line, s and e, each as std::format prints it with {:a}, separated by a space.
Limits: |b| ≤ |a| ≤ 1e30; a and b are 0 or at least 1e-30 in size; g++ 16 at -O2 with -ffast-math.
### Examples
```in
1 2
```
```out
1.8p+1 0p+0
```
### Reference
```cpp
#include <iostream>
#include <print>

int main()
{
    float a {0.0f};
    float b {0.0f};
    std::cin >> a >> b;
    volatile float s {a + b};
    volatile float z {s - a};
    float e {b - z};
    float sum {s};
    std::println("{:a} {:a}", sum, e);
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

int main()
{
    float a {0.0f};
    float b {0.0f};
    std::cin >> a >> b;
    float s {a + b};
    float z {s - a};
    float e {b - z};
    float sum {s};
    std::println("{:a} {:a}", sum, e);
}
```
### Tests
```in
3 0.1
```
```in
0 0
```
```in
1e30 -1e22
```
```in
-1.5 1e-30
```
### Witness
```in
1 1e-8
```
