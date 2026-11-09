# 6.01 Starting a thread
Part: starting a thread
Clause: [thread.thread.constr], [thread.thread.class], [intro.multithread]
After: none
Levels: c++11

## Example
```cpp
#include <functional>
#include <print>
#include <thread>

//: Give a function object a member it adds into.
struct Tally {
    int total {0};
    void operator()(int n)
    {
        total += n;
    }
};

//: Write the work of the first thread as a function.
void greet()
{
    std::println("a function");
}

int main()
{
    //: Start a thread on the function; it runs from here on.
    std::thread first {greet};
    first.join();
    //: Start a thread on a lambda.
    std::thread second {[] { std::println("a lambda"); }};
    second.join();
    //: Hand the object by std::ref, so the thread runs it, not a copy.
    Tally tally {};
    std::thread third {std::ref(tally), 5};
    third.join();
    std::println("{}", tally.total);
}
```

## Verdict 1
```cpp
#include <iostream>
#include <thread>

int main()
{
    std::cout << 'a';
    std::thread t {[] { std::cout << 'b'; }};
    std::cout << 'c';
    t.join();
    std::cout << '\n';
}
```
Answer: c++11..c++23 unspecified
Flags: -pthread
```out
abc
```
```out
acb
```

## Verdict 2
```cpp
#include <thread>

void work()
{
}

int main()
{
    std::thread t {work};
    std::thread u {t};
    t.join();
}
```
Answer: c++11..c++23 ill-formed 10
Flags: -pthread

## Alone 1
Form: run
Flags: -pthread
Write a program that reads a word and a number k and prints the letter at place k of the word, counted from 0. A second thread reads the letter with `at` and prints it. When k is past the end, that thread prints `out of range` instead.
Input: one line, a word and k.
Output: one line, the letter or `out of range`.
Limits: the word has 1 to 20 letters; 0 ≤ k ≤ 100.
### Examples
```in
thread 1
```
```out
h
```
### Reference
```cpp
#include <cstddef>
#include <iostream>
#include <stdexcept>
#include <string>
#include <thread>

int main()
{
    std::string word {};
    std::size_t k {0};
    std::cin >> word >> k;
    std::thread t {[&] {
        try {
            std::cout << word.at(k) << '\n';
        } catch (const std::out_of_range&) {
            std::cout << "out of range\n";
        }
    }};
    t.join();
}
```
### Wrong
```cpp
#include <cstddef>
#include <iostream>
#include <stdexcept>
#include <string>
#include <thread>

int main()
{
    std::string word {};
    std::size_t k {0};
    std::cin >> word >> k;
    try {
        std::thread t {[&] {
            std::cout << word.at(k) << '\n';
        }};
        t.join();
    } catch (const std::out_of_range&) {
        std::cout << "out of range\n";
    }
}
```
### Tests
```in
a 0
```
```in
a 1
```
```in
abcdefghijklmnopqrst 19
```
```in
abcdefghijklmnopqrst 100
```
### Witness
```in
abc 5
```

## Alone 2
Form: run
Flags: -pthread
Write a program that reads n and prints 1 + 2 + … + n. Define a struct `Tally` with an int member `total` that starts at 0, and a call operator that takes n and adds 1, 2, …, n to `total`. Make one `Tally` in main, run that object on a second thread, then print its `total` from main.
Input: one line, n.
Output: one line, the total.
Limits: 0 ≤ n ≤ 1000.
### Examples
```in
0
```
```out
0
```
### Reference
```cpp
#include <functional>
#include <iostream>
#include <thread>

struct Tally {
    int total {0};
    void operator()(int n)
    {
        for (int i {1}; i <= n; ++i) {
            total += i;
        }
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    Tally tally {};
    std::thread t {std::ref(tally), n};
    t.join();
    std::cout << tally.total << '\n';
}
```
### Wrong
```cpp
#include <functional>
#include <iostream>
#include <thread>

struct Tally {
    int total {0};
    void operator()(int n)
    {
        for (int i {1}; i <= n; ++i) {
            total += i;
        }
    }
};

int main()
{
    int n {0};
    std::cin >> n;
    Tally tally {};
    std::thread t {tally, n};
    t.join();
    std::cout << tally.total << '\n';
}
```
### Tests
```in
1
```
```in
10
```
```in
1000
```
### Witness
```in
3
```
