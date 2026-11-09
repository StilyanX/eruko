# 6.04 A data race as [intro.races] defines it
Part: a data race as [intro.races] defines it
Clause: [intro.races], [intro.memory]
After: 6.03
Levels: c++11

## Example
```cpp
#include <functional>
#include <print>
#include <thread>
#include <vector>

//: Let each thread write only its own place of the vector.
void fill(std::vector<int>& out, int i)
{
    out[i] = i * i;
}

int main()
{
    //: Each place is its own memory location.
    std::vector<int> out(2, 0);
    std::thread a {fill, std::ref(out), 0};
    std::thread b {fill, std::ref(out), 1};
    //: Read them after the joins, which order the writes first.
    a.join();
    b.join();
    std::println("{} {}", out[0], out[1]);
}
```

## Verdict 1
```cpp
#include <functional>
#include <iostream>
#include <thread>

void bump(int& count)
{
    ++count;
}

int main()
{
    int count {0};
    std::thread a {bump, std::ref(count)};
    std::thread b {bump, std::ref(count)};
    a.join();
    b.join();
    std::cout << count << '\n';
}
```
Answer: c++11..c++23 undefined sanitizer
Flags: -pthread
Sanitizer: thread

## Verdict 2
```cpp
#include <iostream>
#include <thread>

struct Pair {
    char a {'0'};
    char b {'0'};
};

int main()
{
    Pair p {};
    std::thread one {[&] { p.a = 'x'; }};
    std::thread two {[&] { p.b = 'y'; }};
    one.join();
    two.join();
    std::cout << p.a << p.b << '\n';
}
```
Answer: c++11..c++23 defined
Flags: -pthread
Sanitizer: thread

## Alone 1
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n digits and prints how many times each digit from 0 to 9 occurs. Two threads count: one counts the first n / 2 digits, the other the rest. Print the counts after both threads end.
Input: one line, n, then n digits separated by spaces.
Output: one line, 10 counts separated by spaces, for 0 to 9.
Limits: 1 ≤ n ≤ 1000; each digit is 0 to 9.
### Examples
```in
4 1 2 3 4
```
```out
0 1 1 1 1 0 0 0 0 0
```
### Reference
```cpp
#include <array>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void tally(const std::vector<int>& v, int from, int to,
           std::array<int, 10>& count)
{
    for (int i {from}; i < to; ++i) {
        ++count[v[i]];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    std::array<int, 10> lo {};
    std::array<int, 10> hi {};
    int half {n / 2};
    std::thread a {tally, std::cref(v), 0, half, std::ref(lo)};
    std::thread b {tally, std::cref(v), half, n, std::ref(hi)};
    a.join();
    b.join();
    for (int d {0}; d < 10; ++d) {
        std::cout << lo[d] + hi[d] << ' ';
    }
    std::cout << '\n';
}
```
### Wrong
```cpp
#include <array>
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void tally(const std::vector<int>& v, int from, int to,
           std::array<int, 10>& count)
{
    for (int i {from}; i < to; ++i) {
        ++count[v[i]];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    std::array<int, 10> lo {};
    std::array<int, 10> hi {};
    int half {n / 2};
    std::thread a {tally, std::cref(v), 0, half, std::ref(lo)};
    std::thread b {tally, std::cref(v), half, n, std::ref(lo)};
    a.join();
    b.join();
    for (int d {0}; d < 10; ++d) {
        std::cout << lo[d] + hi[d] << ' ';
    }
    std::cout << '\n';
}
```
### Tests
```in
1 0
```
```in
3 9 9 9
```
```in
6 0 1 2 0 1 2
```
```in
10 0 1 2 3 4 5 6 7 8 9
```
### Witness
```in
2 5 5
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n numbers and prints their squares. Two threads compute the squares: one the first (n + 1) / 2 numbers, the other the rest. Print the squares after both threads end.
Input: one line, n, then n numbers.
Output: one line, n squares separated by spaces, in input order.
Limits: 1 ≤ n ≤ 1000; −1000 ≤ each number ≤ 1000.
### Examples
```in
4 1 2 3 4
```
```out
1 4 9 16
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void fill(const std::vector<int>& v, int from, int to,
          std::vector<long long>& out)
{
    for (int i {from}; i < to; ++i) {
        out[i] = 1LL * v[i] * v[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    std::vector<long long> out(n, 0);
    int half {(n + 1) / 2};
    std::thread a {fill, std::cref(v), 0, half, std::ref(out)};
    std::thread b {fill, std::cref(v), half, n, std::ref(out)};
    a.join();
    b.join();
    for (long long x : out) {
        std::cout << x << ' ';
    }
    std::cout << '\n';
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void fill(const std::vector<int>& v, int from, int to,
          std::vector<long long>& out)
{
    for (int i {from}; i < to; ++i) {
        out[i] = 1LL * v[i] * v[i];
    }
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    std::vector<long long> out(n, 0);
    int half {(n + 1) / 2};
    std::thread a {fill, std::cref(v), 0, half, std::ref(out)};
    std::thread b {fill, std::cref(v), n / 2, n, std::ref(out)};
    a.join();
    b.join();
    for (long long x : out) {
        std::cout << x << ' ';
    }
    std::cout << '\n';
}
```
### Tests
```in
1 -1000
```
```in
2 3 -3
```
```in
5 1 2 3 4 5
```
```in
6 1000 -1000 7 0 2 9
```
### Witness
```in
3 2 3 4
```
