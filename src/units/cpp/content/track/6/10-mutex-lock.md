# 6.10 A mutex and its lock
Part: a mutex and its lock
Clause: [thread.mutex.requirements.mutex.general], [thread.lock.guard], [intro.races]
After: 6.04
Levels: c++11

## Example
```cpp
#include <mutex>
#include <print>
#include <thread>

int main()
{
    //: Keep the shared total beside the mutex that guards it.
    int total {0};
    std::mutex guard;
    //: Lock the mutex for each change with a named lock_guard.
    auto add = [&] {
        for (int i {0}; i < 1000; ++i) {
            std::lock_guard<std::mutex> hold {guard};
            ++total;
        }
    };
    //: Run the work in two threads and join both.
    std::thread first {add};
    std::thread second {add};
    first.join();
    second.join();
    std::println("{}", total);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <mutex>
#include <thread>

int main()
{
    int total {0};
    std::mutex guard;
    auto add = [&] {
        for (int i {0}; i < 1000; ++i) {
            std::lock_guard<std::mutex> hold {guard};
            ++total;
        }
    };
    std::thread first {add};
    std::thread second {add};
    first.join();
    second.join();
    std::printf("%d\n", total);
}
```
Answer: c++11..c++23 defined
Sanitizer: thread
Flags: -pthread

## Verdict 2
```cpp
#include <cstdio>
#include <mutex>
#include <thread>

int main()
{
    int total {0};
    std::mutex guard;
    auto add = [&] {
        for (int i {0}; i < 1000; ++i) {
            std::lock_guard<std::mutex> {guard};
            ++total;
        }
    };
    std::thread first {add};
    std::thread second {add};
    first.join();
    second.join();
    std::printf("%d\n", total);
}
```
Answer: c++11..c++23 undefined sanitizer
Sanitizer: thread
Flags: -pthread

## Alone 1
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n and k, starts n threads that each add 1 to one shared int k times, and prints the int. Guard the int with one std::mutex.
Input: one line, n and k.
Output: one line, n times k.
Limits: 1 ≤ n ≤ 8; 1 ≤ k ≤ 10000.
### Examples
```in
1 5
```
```out
5
```
### Reference
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    int total {0};
    std::mutex guard;
    std::vector<std::thread> workers;
    for (int t {0}; t < n; ++t) {
        workers.emplace_back([k, sum = &total, lock = &guard] {
            for (int i {0}; i < k; ++i) {
                std::lock_guard<std::mutex> hold {*lock};
                ++*sum;
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    std::println("{}", total);
}
```
### Wrong
```cpp
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    int k {0};
    std::cin >> n >> k;
    int total {0};
    std::mutex guard;
    std::vector<std::thread> workers;
    for (int t {0}; t < n; ++t) {
        workers.emplace_back([k, sum = &total, lock = &guard] {
            for (int i {0}; i < k; ++i) {
                std::lock_guard<std::mutex> {*lock};
                ++*sum;
            }
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    std::println("{}", total);
}
```
### Tests
```in
1 1
```
```in
8 10000
```
```in
2 3
```
### Witness
```in
2 100
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n, starts n threads numbered 0 to n − 1, and has each thread append its number to one shared std::vector<int>. Guard the vector with a std::mutex. After all threads end, print the numbers from smallest to largest.
Input: one line, n.
Output: one line, the numbers 0 to n − 1 separated by spaces.
Limits: 1 ≤ n ≤ 16.
### Examples
```in
1
```
```out
0
```
### Reference
```cpp
#include <algorithm>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> seen;
    std::mutex guard;
    std::vector<std::thread> workers;
    for (int t {0}; t < n; ++t) {
        workers.emplace_back([t, seen = &seen, guard = &guard] {
            std::lock_guard<std::mutex> hold {*guard};
            seen->push_back(t);
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    std::ranges::sort(seen);
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", seen[i]);
    }
    std::println();
}
```
### Wrong
```cpp
#include <algorithm>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> seen;
    std::vector<std::thread> workers;
    for (int t {0}; t < n; ++t) {
        workers.emplace_back([t, seen = &seen] {
            std::mutex guard;
            std::lock_guard<std::mutex> hold {guard};
            seen->push_back(t);
        });
    }
    for (std::thread& w : workers) {
        w.join();
    }
    std::ranges::sort(seen);
    for (int i {0}; i < n; ++i) {
        std::print("{}{}", i ? " " : "", seen[i]);
    }
    std::println();
}
```
### Tests
```in
2
```
```in
16
```
```in
5
```
### Witness
```in
8
```
