# 6.03 The lifetime of a thread's arguments
Part: the lifetime of a thread's arguments
Clause: [thread.thread.constr], [refwrap], [basic.life], [intro.races]
After: 6.01, 6.02
Levels: c++11

## Example
```cpp
#include <functional>
#include <print>
#include <string>
#include <thread>

//: Take the string by reference in the thread's function.
void show(const std::string& s)
{
    std::println("{}", s);
}

int main()
{
    std::thread t {};
    {
        //: Pass the string; the thread gets its own copy of it.
        std::string word {"a copy made when the thread starts"};
        t = std::thread {show, word};
    }
    //: The copy lives with the thread, so the block may end first.
    t.join();
    //: Pass std::ref only for an object that outlives the join.
    std::string kept {"an object that outlives the thread"};
    std::thread u {show, std::ref(kept)};
    u.join();
}
```

## Verdict 1
```cpp
#include <iostream>
#include <string>
#include <thread>

void show(const std::string& s)
{
    std::cout << s << '\n';
}

int main()
{
    std::thread t {};
    {
        std::string word {"a word longer than fifteen"};
        t = std::thread {show, word};
    }
    t.join();
}
```
Answer: c++11..c++23 defined
Flags: -pthread

## Verdict 2
```cpp
#include <functional>
#include <iostream>
#include <string>
#include <thread>

void show(const std::string& s)
{
    std::cout << s << '\n';
}

int main()
{
    std::thread t {};
    {
        std::string word {"a word longer than fifteen"};
        t = std::thread {show, std::ref(word)};
    }
    t.join();
}
```
Answer: c++11..c++23 undefined sanitizer
Flags: -pthread

## Alone 1
Form: flag
Flags: -pthread
Write a program that reads n and then n numbers and prints their sum. A second thread runs a function `add_up(const std::vector<int>& v, long long& sum)`, which adds the numbers of v into sum. Main prints sum after the join.
Input: one line, n, then n numbers.
Output: one line, the sum.
Limits: g++ 16 with -pedantic-errors, at every level from c++11 to c++23.
Expect:
- c++11..c++23: accept
### Reference
```cpp
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void add_up(const std::vector<int>& v, long long& sum)
{
    for (int x : v) {
        sum += x;
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
    long long sum {0};
    std::thread t {add_up, std::cref(v), std::ref(sum)};
    t.join();
    std::cout << sum << '\n';
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void add_up(const std::vector<int>& v, long long& sum)
{
    for (int x : v) {
        sum += x;
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
    long long sum {0};
    std::thread t {add_up, std::cref(v), sum};
    t.join();
    std::cout << sum << '\n';
}
```
### Witness
```cpp
void twice(int& x)
{
    x *= 2;
}
```

## Alone 2
Form: sanitizer
Sanitizer: thread
Flags: -pthread
Write a program that reads n and then n numbers. For each place i, start a thread that writes the square of the sum of the first i + 1 numbers into place i of a results vector. Start all the threads, then join them all. Print the results on one line, separated by spaces.
Input: one line, n, then n numbers.
Output: one line, n results.
Limits: 1 ≤ n ≤ 50; −1000 ≤ each number ≤ 1000.
### Examples
```in
1 7
```
```out
49
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <thread>
#include <vector>

void square(const long long& total, long long& out)
{
    out = total * total;
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
    std::vector<std::thread> pool {};
    long long total {0};
    for (int i {0}; i < n; ++i) {
        total += v[i];
        pool.emplace_back(square, total, std::ref(out[i]));
    }
    for (std::thread& t : pool) {
        t.join();
    }
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

void square(const long long& total, long long& out)
{
    out = total * total;
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
    std::vector<std::thread> pool {};
    long long total {0};
    for (int i {0}; i < n; ++i) {
        total += v[i];
        pool.emplace_back(square, std::cref(total),
                          std::ref(out[i]));
    }
    for (std::thread& t : pool) {
        t.join();
    }
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
3 1 2 3
```
```in
5 1000 1000 1000 1000 1000
```
```in
4 5 -5 5 -5
```
### Witness
```in
2 3 4
```
