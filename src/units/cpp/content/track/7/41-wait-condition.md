# 7.41 CP.42: wait on a condition variable with a condition
Part: CP.42 Don't wait without a condition
Clause: C++ Core Guidelines CP.42, [thread.condition.condvar]
After: 6.10
Levels: c++11

## Scan
Rule: CP.42
Pattern: /(?<=\bcondition_variable(?:_any)?\s*&?\s*(\w+)\b[\s\S]*?)(?<!\bwhile\s*\((?:[^()]|\([^()]*\))*\)\s*\{?\s*)\b\1\s*(?:\.|->)\s*(?:wait\s*\(\s*[^,()]*\)|wait_(?:for|until)\s*\([^,()]*,[^,()]*\))/
### Bad
```cpp
#include <condition_variable>
#include <mutex>

std::condition_variable cv;
std::mutex mx;

void thread1()
{
    while (true) {
        std::unique_lock<std::mutex> lock(mx);
        cv.notify_one();
    }
}

void thread2()
{
    while (true) {
        std::unique_lock<std::mutex> lock(mx);
        cv.wait(lock);
    }
}
```
### Good
```cpp
#include <condition_variable>
#include <list>
#include <mutex>

template<typename T>
class Sync_queue {
public:
    void put(const T& val);
    void put(T&& val);
    void get(T& val);
private:
    std::mutex mtx;
    std::condition_variable cond;
    std::list<T> q;
};

template<typename T>
void Sync_queue<T>::put(const T& val)
{
    std::lock_guard<std::mutex> lck(mtx);
    q.push_back(val);
    cond.notify_one();
}

template<typename T>
void Sync_queue<T>::get(T& val)
{
    std::unique_lock<std::mutex> lck(mtx);
    cond.wait(lck, [this] { return !q.empty(); });
    val = q.front();
    q.pop_front();
}
```

## Example
```cpp
#include <condition_variable>
#include <mutex>
#include <print>
#include <thread>

int main()
{
    std::mutex mx;
    std::condition_variable cv;
    bool ready {false};
    int value {0};
    //: Change the state under the lock, then notify.
    std::thread writer {[&] {
        {
            std::lock_guard<std::mutex> hold {mx};
            value = 42;
            ready = true;
        }
        cv.notify_one();
    }};
    //: Wait with the condition, so a missed or false wakeup is safe.
    std::unique_lock<std::mutex> lock {mx};
    cv.wait(lock, [&ready] { return ready; });
    std::println("{}", value);
    lock.unlock();
    writer.join();
}
```

## Verdict 1
```cpp
#include <condition_variable>
#include <cstdio>
#include <mutex>

int main()
{
    std::mutex mx;
    std::condition_variable cv;
    bool ready {false};
    std::unique_lock<std::mutex> lock {mx};
    ready = true;
    cv.notify_one();
    cv.wait(lock, [&ready] { return ready; });
    std::printf("%d\n", ready ? 1 : 0);
}
```
Answer: c++11..c++23 defined
Flags: -pthread

## Verdict 2
```cpp
#include <condition_variable>
#include <cstdio>
#include <mutex>

int main()
{
    std::mutex mx;
    std::condition_variable cv;
    bool ready {true};
    std::lock_guard<std::mutex> lock {mx};
    cv.wait(lock, [&ready] { return ready; });
    std::printf("%d\n", ready ? 1 : 0);
}
```
Answer: c++11..c++23 ill-formed 11
Flags: -pthread

## Alone 1
Form: run
Flags: -pthread
Write a program that reads n whole numbers and adds them up in a second thread that takes them from a queue.
Input: one line, n, then a line of n whole numbers.
Output: one line, the sum. The main thread puts the numbers into the queue one at a time; the second thread takes them out and adds them.
Limits: 1 ≤ n ≤ 100; each number from -1000 to 1000.
### Examples
```in
3
4 -1 10
```
```out
13
```
### Reference
```cpp
#include <condition_variable>
#include <cstddef>
#include <deque>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::mutex mx;
    std::condition_variable cv;
    std::deque<int> q {};
    int sum {0};
    std::thread taker {[&] {
        for (int i {0}; i < n; ++i) {
            std::unique_lock<std::mutex> lock {mx};
            cv.wait(lock, [&q] { return !q.empty(); });
            sum += q.front();
            q.pop_front();
        }
    }};
    for (int x : v) {
        {
            std::lock_guard<std::mutex> hold {mx};
            q.push_back(x);
        }
        cv.notify_one();
    }
    taker.join();
    std::println("{}", sum);
}
```
### Wrong
```cpp
#include <condition_variable>
#include <cstddef>
#include <deque>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::mutex mx;
    std::condition_variable cv;
    std::deque<int> q {};
    int sum {0};
    std::thread taker {[&] {
        for (int i {0}; i < n; ++i) {
            std::unique_lock<std::mutex> lock {mx};
            if (q.empty()) {
                cv.wait(lock);
            }
            sum += q.front();
            q.pop_front();
        }
    }};
    for (int x : v) {
        {
            std::lock_guard<std::mutex> hold {mx};
            q.push_back(x);
        }
        cv.notify_one();
    }
    taker.join();
    std::println("{}", sum);
}
```
### Tests
```in
1
-1000
```
```in
5
1000 1000 1000 1000 1000
```
```in
4
0 0 0 0
```
```in
6
3 -3 5 -5 7 1
```
### Witness
```cpp
#include <condition_variable>
#include <mutex>

std::condition_variable cv;
std::mutex mx;
bool told {false};

void thread1()
{
    while (true) {
        std::unique_lock<std::mutex> lock(mx);
        told = true;
        cv.notify_one();
    }
}

void thread2()
{
    while (true) {
        std::unique_lock<std::mutex> lock(mx);
        cv.wait(lock, [] { return told; });
        told = false;
    }
}
```

## Alone 2
Form: run
Flags: -pthread
Write a program that reads n and finds the n-th Fibonacci number in a second thread while the main thread waits for it.
Input: one line, n.
Output: one line, F(n), where F(0) = 0, F(1) = 1 and each next one is the sum of the two before it.
Limits: 0 ≤ n ≤ 90.
### Examples
```in
10
```
```out
55
```
### Reference
```cpp
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>

int main()
{
    int n {0};
    std::cin >> n;
    std::mutex mx;
    std::condition_variable cv;
    bool ready {false};
    long long result {0};
    std::thread worker {[&] {
        long long a {0};
        long long b {1};
        for (int i {0}; i < n; ++i) {
            long long c {a + b};
            a = b;
            b = c;
        }
        {
            std::lock_guard<std::mutex> hold {mx};
            result = a;
            ready = true;
        }
        cv.notify_one();
    }};
    {
        std::unique_lock<std::mutex> lock {mx};
        cv.wait(lock, [&ready] { return ready; });
        std::println("{}", result);
    }
    worker.join();
}
```
### Wrong
```cpp
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <print>
#include <thread>

int main()
{
    int n {0};
    std::cin >> n;
    std::mutex mx;
    std::condition_variable cv;
    bool ready {false};
    long long result {0};
    std::thread worker {[&] {
        long long a {0};
        long long b {1};
        for (int i {0}; i < n; ++i) {
            long long c {a + b};
            a = b;
            b = c;
        }
        {
            std::lock_guard<std::mutex> hold {mx};
            result = a;
            ready = true;
        }
        cv.notify_one();
    }};
    {
        std::unique_lock<std::mutex> lock {mx};
        if (!ready) {
            cv.wait(lock);
        }
        std::println("{}", result);
    }
    worker.join();
}
```
### Tests
```in
0
```
```in
1
```
```in
90
```
```in
2
```
### Witness
```cpp
#include <condition_variable>
#include <cstdio>
#include <mutex>

int main()
{
    std::mutex mx;
    std::condition_variable cv;
    bool ready {true};
    std::unique_lock<std::mutex> lock {mx};
    cv.wait(lock, [&ready] { return ready; });
    std::printf("%d\n", ready ? 1 : 0);
}
```
