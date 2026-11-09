# 7.11 Hand a resource to its manager in the same line that gets it
Part: R.12 Immediately give the result of an explicit resource allocation to a manager object
Clause: C++ Core Guidelines R.12, [expr.new], [c.malloc], [unique.ptr], [except.ctor]
After: 1.25, 7.10
Levels: c++17

## Scan
Rule: R.12
Pattern: /(?:\*\s*\w+|\bauto\s+\w+)\s*(?:=|\{)\s*(?:static_cast\s*<[^<>]*>\s*\(\s*)?(?:std::\s*)?(?:fopen|tmpfile|malloc|calloc|realloc|new)\b/
### Bad
```cpp
#include <cstdio>
#include <string>
#include <vector>

using std::string;
using std::vector;

template<class F>
struct final_action {
    F f;
    ~final_action()
    {
        f();
    }
};

template<class F>
final_action<F> finally(F f)
{
    return {f};
}

void func(const string& name)
{
    FILE* f = fopen(name.c_str(), "r");
    vector<char> buf(1024);
    auto _ = finally([f] { fclose(f); });
}
```
### Good
```cpp
#include <fstream>
#include <string>
#include <vector>

using std::ifstream;
using std::string;
using std::vector;

void func(const string& name)
{
    ifstream f{name};
    vector<char> buf(1024);
}
```

## Example
```cpp
#include <memory>
#include <print>
#include <stdexcept>

int main()
{
    try {
        //: Give the new int to its manager in the same statement.
        std::unique_ptr<int> p {std::make_unique<int>(5)};
        //: Throw; the manager frees the int on the way out.
        throw std::runtime_error {"stop"};
    } catch (const std::exception& e) {
        std::println("{}", e.what());
    }
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <cstdlib>

int main()
{
    int* p {new int {5}};
    std::printf("%d\n", *p);
    std::free(p);
}
```
Answer: c++17..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <memory>
#include <stdexcept>

int main()
{
    try {
        std::unique_ptr<int> p {new int {5}};
        throw std::runtime_error {"stop"};
    } catch (const std::exception& e) {
        std::printf("%s\n", e.what());
    }
}
```
Answer: c++17..c++23 defined

## Alone 1
Form: run
Write a program that reads n integers and prints their sum and the largest of them.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the sum and the largest separated by a space.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
3
4 -1 2
```
```out
5 4
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> a(static_cast<std::size_t>(n));
    for (int& x : a) {
        std::cin >> x;
    }
    int sum {0};
    int best {a[0]};
    for (int x : a) {
        sum += x;
        best = x > best ? x : best;
    }
    std::println("{} {}", sum, best);
}
```
### Wrong
```cpp
#include <cstdlib>
#include <iostream>
#include <print>

int main()
{
    int n {0};
    std::cin >> n;
    std::size_t count {static_cast<std::size_t>(n)};
    std::size_t bytes {count * sizeof(int)};
    int* a = static_cast<int*>(std::malloc(bytes));
    for (int i {0}; i < n; ++i) {
        std::cin >> a[i];
    }
    int sum {0};
    int best {a[0]};
    for (int i {0}; i < n; ++i) {
        sum += a[i];
        best = a[i] > best ? a[i] : best;
    }
    std::free(a);
    std::println("{} {}", sum, best);
}
```
### Tests
```in
1
-1000
```
```in
4
1000 1000 1000 1000
```
```in
5
-5 -4 -3 -2 -1
```
### Witness
```cpp
#include <fstream>
#include <print>
#include <string>
#include <vector>

void func(const std::string& name)
{
    std::ifstream f {name};
    std::vector<char> buf(1024);
    std::println("{} {}", f.is_open(), buf.size());
}

int main()
{
    func("no such file");
}
```

## Alone 2
Form: run
Write a program that reads n words and prints them in reverse order, one per line.
Input: one line, n, then one line, n words separated by spaces.
Output: n lines, the words from the last to the first.
Limits: 1 ≤ n ≤ 50; each word has 1 to 20 letters.
### Examples
```in
3
red green blue
```
```out
blue
green
red
```
### Reference
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <utility>

struct Node {
    std::string word;
    std::unique_ptr<Node> next;
};

int main()
{
    int n {0};
    std::cin >> n;
    std::unique_ptr<Node> top;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        top = std::make_unique<Node>(w, std::move(top));
    }
    for (Node* at {top.get()}; at; at = at->next.get()) {
        std::println("{}", at->word);
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <memory>
#include <print>
#include <string>
#include <utility>

struct Node {
    std::string word;
    std::unique_ptr<Node> next;
};

int main()
{
    int n {0};
    std::cin >> n;
    std::unique_ptr<Node> top;
    for (int i {0}; i < n; ++i) {
        std::string w;
        std::cin >> w;
        Node* fresh {new Node {w, std::move(top)}};
        top.reset(fresh);
    }
    for (Node* at {top.get()}; at; at = at->next.get()) {
        std::println("{}", at->word);
    }
}
```
### Tests
```in
1
a
```
```in
2
abcdefghijklmnopqrst b
```
```in
5
one two three four five
```
### Witness
```cpp
#include <memory>
#include <print>

struct Widget {
    int n;
};

int main()
{
    std::unique_ptr<Widget> w {std::make_unique<Widget>(4)};
    std::println("{}", w->n);
}
```
