# 9.37 Fixed-point storage with one scale per site
Part: fixed-point storage with one scale per site, round trip against the bound
Clause: [conv.fpint], [conv.integral], [expr.const], [c.math.abs]
After: 9.24
Levels: c++23
Source: QUDA include/color_spinor_field_order.h (a half-precision field: 16-bit integers with one float norm per site, the site's largest size); the bound s/2^15 is half a step s/32767 with room for the float roundings

## Example
```cpp
#include <array>
#include <cmath>
#include <cstdint>
#include <print>

int main()
{
    //: Give two sites three reals each, of very different sizes.
    std::array<float, 6> x {0.5f, -2.0f, 1.0f,
                            1e-3f, 3e-3f, -2e-3f};
    for (int i {0}; i < 2; ++i) {
        //: Take the site's scale s: the largest size of its reals.
        float s {0.0f};
        for (int j {0}; j < 3; ++j) {
            s = std::fmax(s, std::fabs(x[3 * i + j]));
        }
        for (int j {0}; j < 3; ++j) {
            //: Store x / s * 32767, rounded, in a 16-bit integer q.
            float v {x[3 * i + j]};
            float t {v / s * 32767.0f};
            auto q {static_cast<std::int16_t>(std::lround(t))};
            //: Read it back as q * s / 32767, within s/2^15 of x.
            float y {static_cast<float>(q) * s / 32767.0f};
            double e {std::fabs(static_cast<double>(v) - y)};
            //: Print q, y and whether the error is inside the bound.
            std::println("{} {:a} {}", q, y, e <= s / 32768.0);
        }
    }
}
```

## Verdict 1
```cpp
#include <cstdint>

constexpr std::int16_t store(float x, float s, float steps)
{
    return static_cast<std::int16_t>(x / s * steps);
}

int main()
{
    constexpr std::int16_t q {store(2.0f, 2.0f, 32767.0f)};
    static_assert(q > 0);
}
```
Answer: c++23 defined

## Verdict 2
```cpp
#include <cstdint>

constexpr std::int16_t store(float x, float s, float steps)
{
    return static_cast<std::int16_t>(x / s * steps);
}

int main()
{
    constexpr std::int16_t q {store(2.0f, 2.0f, 32768.0f)};
    static_assert(q > 0);
}
```
Answer: c++23 undefined constant

## Alone 1
Form: run
Write a program that reads n sites of k reals each and stores every real as a 16-bit integer, with one scale for each site. The scale s of a site is the largest size |x| among its own k reals. Store each real x as q: take t = x / s, then t · 32767, each step in float; then round t to the nearest whole number, halves away from 0, as std::lround does, and keep it in a std::int16_t.
Input: n and k on the first line, then n lines, each with the k reals of one site, read as floats.
Output: n lines, one for each site in order: s as std::format prints it with {:a}, then the k values q, separated by spaces.
Limits: 1 ≤ n ≤ 1000; 1 ≤ k ≤ 24; each real is 0 or between 1e-30 and 1e30 in size; every site holds a real that is not 0.
### Examples
```in
1 3
0.5 -2 1
```
```out
1p+1 8192 -32767 16384
```
```in
1 4
3 0.75 -1.5 0
```
```out
1.8p+1 32767 8192 -16384 0
```
### Reference
```cpp
#include <cmath>
#include <cstdint>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<float> x(static_cast<std::size_t>(n * k));
    for (float& v : x) {
        std::cin >> v;
    }
    for (int i {0}; i < n; ++i) {
        float s {0.0f};
        for (int j {0}; j < k; ++j) {
            s = std::fmax(s, std::fabs(x[i * k + j]));
        }
        std::print("{:a}", s);
        for (int j {0}; j < k; ++j) {
            float t {x[i * k + j] / s * 32767.0f};
            auto q {static_cast<std::int16_t>(std::lround(t))};
            std::print(" {}", q);
        }
        std::println();
    }
}
```
### Wrong
```cpp
#include <cmath>
#include <cstdint>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<float> x(static_cast<std::size_t>(n * k));
    for (float& v : x) {
        std::cin >> v;
    }
    float s {0.0f};
    for (float v : x) {
        s = std::fmax(s, std::fabs(v));
    }
    for (int i {0}; i < n; ++i) {
        std::print("{:a}", s);
        for (int j {0}; j < k; ++j) {
            float t {x[i * k + j] / s * 32767.0f};
            auto q {static_cast<std::int16_t>(std::lround(t))};
            std::print(" {}", q);
        }
        std::println();
    }
}
```
### Tests
```in
2 3
0.5 -2 1
0.001 0.003 -0.002
```
```in
3 2
1 1
-1 0.5
1e-30 -1e-30
```
```in
1 1
-7.25
```
```in
2 6
1 2 3 4 5 6
1e3 -2e3 3e3 -4e3 5e3 -6e3
```
### Witness
```in
2 3
0.5 -2 1
0.001 0.003 -0.002
```

## Alone 2
Form: run
Write a program that reads n sites of k reals each, stores every real as a 16-bit integer with one scale for each site, reads it back, and tests the error against its bound. The scale s of a site is the largest size |x| among its k reals. Store each real x as q: take t = x / s, then t · 32767, each step in float; then round t to the nearest whole number, halves away from 0, as std::lround does, and keep it in a std::int16_t. Read it back as y = q · s / 32767, from left to right, each step in float. The bound is |x − y| ≤ s / 2^15: half a step s / 32767, with room for the float roundings. Compute |x − y| and s / 2^15 in double.
Input: n and k on the first line, then n lines, each with the k reals of one site, read as floats.
Output: n lines, one for each site in order: the k values y, each as std::format prints it with {:a}, then yes if every real of the site is inside the bound or no if not, all separated by spaces.
Limits: 1 ≤ n ≤ 1000; 1 ≤ k ≤ 24; each real is 0 or between 1e-30 and 1e30 in size; every site holds a real that is not 0.
### Examples
```in
1 3
2 -2 0
```
```out
1p+1 -1p+1 0p+0 yes
```
```in
2 2
-4 4
1e-3 -1e-3
```
```out
-1p+2 1p+2 yes
1.0624dep-10 -1.0624dep-10 yes
```
### Reference
```cpp
#include <cmath>
#include <cstdint>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<float> x(static_cast<std::size_t>(n * k));
    for (float& v : x) {
        std::cin >> v;
    }
    for (int i {0}; i < n; ++i) {
        float s {0.0f};
        for (int j {0}; j < k; ++j) {
            s = std::fmax(s, std::fabs(x[i * k + j]));
        }
        bool inside {true};
        for (int j {0}; j < k; ++j) {
            float v {x[i * k + j]};
            float t {v / s * 32767.0f};
            auto q {static_cast<std::int16_t>(std::lround(t))};
            float y {static_cast<float>(q) * s / 32767.0f};
            double e {std::fabs(static_cast<double>(v) - y)};
            inside = inside && e <= s / 32768.0;
            std::print("{:a} ", y);
        }
        std::println("{}", inside ? "yes" : "no");
    }
}
```
### Wrong
```cpp
#include <cmath>
#include <cstdint>
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    std::vector<float> x(static_cast<std::size_t>(n * k));
    for (float& v : x) {
        std::cin >> v;
    }
    for (int i {0}; i < n; ++i) {
        float s {0.0f};
        for (int j {0}; j < k; ++j) {
            s = std::fmax(s, std::fabs(x[i * k + j]));
        }
        bool inside {true};
        for (int j {0}; j < k; ++j) {
            float v {x[i * k + j]};
            float t {v / s * 32767.0f};
            auto q {static_cast<std::int16_t>(t)};
            float y {static_cast<float>(q) * s / 32767.0f};
            double e {std::fabs(static_cast<double>(v) - y)};
            inside = inside && e <= s / 32768.0;
            std::print("{:a} ", y);
        }
        std::println("{}", inside ? "yes" : "no");
    }
}
```
### Tests
```in
1 3
0.5 -2 1
```
```in
2 3
0.1 0.2 0.3
1e20 -3e19 7e19
```
```in
1 1
-7.25
```
```in
3 2
1 1e-6
-1 0.5
1e-30 -0.7e-30
```
### Witness
```in
1 3
0.5 -2 1
```
