# 6.02 Joining a thread
Part: joining a thread
Clause: [thread.thread.member], [thread.thread.destr], [intro.races]
After: 6.01
Levels: c++11

## Example
```cpp
#include <print>
#include <thread>

int main()
{
    //: Let the thread write a result that main will read.
    int result {0};
    std::thread t {[&] { result = 6 * 7; }};
    //: Wait with join; the thread's writes are then seen.
    t.join();
    std::println("{}", result);
    //: Join only a thread that is still joinable.
    std::println("{}", t.joinable());
}
```

## Verdict 1
```cpp
#include <iostream>
#include <thread>

int main()
{
    int result {0};
    std::thread t {[&] { result = 42; }};
    t.join();
    std::cout << result << '\n';
}
```
Answer: c++11..c++23 defined
Flags: -pthread
Sanitizer: thread

## Verdict 2
```cpp
#include <iostream>
#include <thread>

int main()
{
    int result {0};
    std::thread t {[&] { result = 42; }};
    std::cout << result << '\n';
    t.join();
}
```
Answer: c++11..c++23 undefined sanitizer
Flags: -pthread
Sanitizer: thread

## Alone 1
Form: run
Flags: -pthread
Write a program that reads n and then n numbers. A second thread adds up the numbers while main looks for a negative one. If any number is negative, print `negative`; else print the sum.
Input: one line, n, then n numbers.
Output: one line, `negative` or the sum.
Limits: 1 ≤ n ≤ 1000; −1000 ≤ each number ≤ 1000.
### Examples
```in
3 4 5 6
```
```out
15
```
### Reference
```cpp
#include <iostream>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    long long sum {0};
    std::thread t {[&] {
        for (int x : v) {
            sum += x;
        }
    }};
    bool negative {false};
    for (int x : v) {
        if (x < 0) {
            negative = true;
        }
    }
    t.join();
    if (negative) {
        std::cout << "negative\n";
        return 0;
    }
    std::cout << sum << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    long long sum {0};
    std::thread t {[&] {
        for (int x : v) {
            sum += x;
        }
    }};
    bool negative {false};
    for (int x : v) {
        if (x < 0) {
            negative = true;
        }
    }
    if (negative) {
        std::cout << "negative\n";
        return 0;
    }
    t.join();
    std::cout << sum << '\n';
}
```
### Tests
```in
1 0
```
```in
1 -1
```
```in
5 1000 1000 1000 1000 1000
```
```in
4 3 -2 7 1
```
### Witness
```in
2 5 -5
```

## Alone 2
Form: run
Flags: -pthread
Write a program that reads n and then n numbers and prints their sum. When n is more than 4, a second thread adds the second half, from place n / 2 on, while main adds the first half. When n is 4 or less, main adds them all and starts no thread.
Input: one line, n, then n numbers.
Output: one line, the sum.
Limits: 1 ≤ n ≤ 1000; −1000 ≤ each number ≤ 1000.
### Examples
```in
6 1 2 3 4 5 6
```
```out
21
```
### Reference
```cpp
#include <iostream>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    long long first {0};
    long long second {0};
    int mid {n};
    std::thread helper {};
    if (n > 4) {
        mid = n / 2;
        helper = std::thread {[&] {
            for (int i {mid}; i < n; ++i) {
                second += v[i];
            }
        }};
    }
    for (int i {0}; i < mid; ++i) {
        first += v[i];
    }
    if (helper.joinable()) {
        helper.join();
    }
    std::cout << first + second << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(n, 0);
    for (int& x : v) {
        std::cin >> x;
    }
    long long first {0};
    long long second {0};
    int mid {n};
    std::thread helper {};
    if (n > 4) {
        mid = n / 2;
        helper = std::thread {[&] {
            for (int i {mid}; i < n; ++i) {
                second += v[i];
            }
        }};
    }
    for (int i {0}; i < mid; ++i) {
        first += v[i];
    }
    helper.join();
    std::cout << first + second << '\n';
}
```
### Tests
```in
1 7
```
```in
4 1 2 3 4
```
```in
5 1 2 3 4 5
```
```in
8 -1000 1000 -1000 1000 5 5 5 5
```
### Witness
```in
3 1 2 3
```
