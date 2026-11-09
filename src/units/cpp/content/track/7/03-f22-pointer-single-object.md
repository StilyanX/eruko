# 7.03 Keep a T* parameter for one object; pass a range as a span
Part: F.22 Use T* or owner<T*> to designate a single object
Clause: C++ Core Guidelines F.22, [expr.add], [expr.sub], [views.span]
After: 1.22, 4.10
Levels: c++20

## Scan
Rule: F.22
Pattern: /\b[\w:<>]+\*\s+(?:(?:const|__restrict__)\s+)*(\w+)\s*(?:,[^(){};]*)?\)\s*(?:const\s*)?\{(?:(?!^\}).)*?(?:(?<![*.>]\s*)\b\1\s*(?:\[|\+|-(?!>))|(?:\+\+|--)\s*\1\b|\bdelete\s*(?:\[\s*\]\s*)?\1\b)/ms
### Bad
```cpp
#include <iostream>

using std::cout;

void use(int* p, int n, char* s, int* q)
{
    p[n - 1] = 666;
    cout << s;
    delete q;
}
```
### Good
```cpp
#include <iostream>
#include <span>

using std::cout;
using std::span;
using zstring = char*;
template<class T> using owner = T;

void use2(span<int> p, zstring s, owner<int*> q)
{
    p[p.size() - 1] = 666;
    cout << s;
    delete q;
}
```

## Example
```cpp
#include <print>
#include <span>

//: Take one object through a pointer and change it.
void bump(int* p)
{
    *p += 1;
}

//: Take many objects through a span, which knows its size.
void set_last(std::span<int> p)
{
    p[p.size() - 1] = 666;
}

int main()
{
    int one {1};
    int many[3] {1, 2, 3};
    bump(&one);
    set_last(many);
    std::println("{} {}", one, many[2]);
}
```

## Verdict 1
```cpp
#include <cstdio>

void set_last(int* p, int n)
{
    p[n - 1] = 666;
}

int main()
{
    int x {0};
    set_last(&x, 2);
    std::printf("%d\n", x);
}
```
Answer: c++20..c++23 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <span>

void set_last(std::span<int> p)
{
    p[p.size() - 1] = 666;
}

int main()
{
    int a[3] {1, 2, 3};
    set_last(a);
    std::printf("%d %d\n", a[0], a[2]);
}
```
Answer: c++20..c++23 defined

## Alone 1
Form: run
Write a program that reads n integers and prints the largest.
Input: one line, n, then one line, n integers separated by spaces.
Output: one line, the largest integer.
Limits: 1 ≤ n ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
3
4 9 2
```
```out
9
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <span>
#include <vector>

int largest(std::span<const int> v)
{
    int best {v[0]};
    for (int x : v) {
        best = x > best ? x : best;
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::println("{}", largest(v));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <vector>

int largest(const int* p, int n)
{
    int best {p[0]};
    for (int i {1}; i < n; ++i) {
        best = p[i] > best ? p[i] : best;
    }
    return best;
}

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<int> v(static_cast<std::size_t>(n));
    for (int& x : v) {
        std::cin >> x;
    }
    std::println("{}", largest(v.data(), n));
}
```
### Tests
```in
1
-1000
```
```in
4
-5 -3 -9 -4
```
```in
5
1000 2 3 4 1000
```
```in
3
1 2 3
```
### Witness
```cpp
#include <iostream>
#include <span>

void use2(std::span<int> p, const char* s)
{
    p[p.size() - 1] = 666;
    std::cout << s << p[p.size() - 1] << '\n';
}

int main()
{
    int a[2] {0, 0};
    use2(a, "last ");
}
```

## Alone 2
Form: run
Write a program that reads a word and prints how many times the letter a stands in it.
Input: one line, a word of small letters.
Output: one line, the count.
Limits: the word has 1 to 50 letters.
### Examples
```in
banana
```
```out
3
```
### Reference
```cpp
#include <iostream>
#include <print>
#include <string>
#include <string_view>

int count_a(std::string_view s)
{
    int count {0};
    for (char c : s) {
        if (c == 'a') {
            ++count;
        }
    }
    return count;
}

int main()
{
    std::string w;
    std::cin >> w;
    std::println("{}", count_a(w));
}
```
### Wrong
```cpp
#include <iostream>
#include <print>
#include <string>

int count_a(const char* s)
{
    int count {0};
    while (*s != '\0') {
        if (*s == 'a') {
            ++count;
        }
        ++s;
    }
    return count;
}

int main()
{
    std::string w;
    std::cin >> w;
    std::println("{}", count_a(w.c_str()));
}
```
### Tests
```in
a
```
```in
b
```
```in
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```
```in
abracadabra
```
### Witness
```cpp
#include <print>
#include <string_view>

int count_char(std::string_view s, char wanted)
{
    int count {0};
    for (char c : s) {
        count += c == wanted ? 1 : 0;
    }
    return count;
}

int main()
{
    std::println("{}", count_char("banana", 'n'));
}
```
