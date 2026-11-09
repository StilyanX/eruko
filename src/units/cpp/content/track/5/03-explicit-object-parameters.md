# 5.03 Explicit object parameters
Part: explicit object parameters
Clause: [dcl.fct], [over.match.funcs], [expr.prim.this], [expr.unary.op]
After: none
Levels: c++23

## Example
```cpp
#include <print>

struct Total {
    int sum {0};
    //: Name the object as a first parameter marked this; a reference changes it.
    void add(this Total& self, int k)
    {
        self.sum += k;
    }
    //: Take the object by value instead; the function changes a copy.
    int plus(this Total self, int k)
    {
        self.sum += k;
        return self.sum;
    }
    //: Deduce the object's type, so a const object gets a const reference.
    auto& get(this auto& self)
    {
        return self.sum;
    }
};

int main()
{
    //: Call each function as usual; the object binds to self.
    Total t {};
    t.add(3);
    const Total c {t};
    std::println("{} {} {}", t.plus(4), t.get(), c.get());
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Box {
    int v {7};
    int get(this const Box& self)
    {
        return this->v;
    }
};

int main()
{
    Box b {};
    std::printf("%d\n", b.get());
}
```
Answer: c++23 ill-formed 7

## Verdict 2
```cpp
#include <cstdio>

struct Box {
    int v {7};
    int get(this const Box& self)
    {
        return self.v;
    }
};

int main()
{
    Box b {};
    auto p {&Box::get};
    std::printf("%d\n", p(b));
}
```
Answer: c++23 defined

## Alone 1
Form: probes
Exempt: F.45
Write a struct `Text` with a `std::string` member `s` and one member function `get()` with an explicit object parameter. `get()` returns `s` as the object is: a `std::string&` for a `Text` lvalue, a `const std::string&` for a const one, and a `std::string&&` for a `Text` rvalue.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
Text t {"ab"};
const Text c {"cd"};
std::string& a {t.get()};
const std::string& b {c.get()};
static_assert(std::is_same_v<decltype(Text {}.get()), std::string&&>);
std::string& e {c.get()};
std::string& f {Text {}.get()};
```
Accept: 1, 2, 3, 4, 5
Reject: 6, 7
### Reference
```cpp
#include <string>
#include <type_traits>
#include <utility>

struct Text {
    std::string s;
    template <typename Self>
    auto&& get(this Self&& self)
    {
        return std::forward<Self>(self).s;
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <string>
#include <type_traits>
#include <utility>

struct Text {
    std::string s;
    template <typename Self>
    auto&& get(this Self&& self)
    {
        return self.s;
    }
};

int main()
{
}
```
### Witness
```cpp
std::string&& w {Text {}.get()};
```

## Alone 2
Form: run
Write a program that reads q numbers and prints the running total after each one. Keep the total in a struct `Total` with a member function `add(k)` that adds k to the total and returns the new total. Write `add` with an explicit object parameter.
Input: one line, q; one line, q integers.
Output: q lines, the total after each number.
Limits: 1 ≤ q ≤ 100; each integer is between -1000 and 1000.
### Examples
```in
1
5
```
```out
5
```
```in
2
0 4
```
```out
0
4
```
### Reference
```cpp
#include <iostream>
#include <print>

struct Total {
    int sum {0};
    int add(this Total& self, int k)
    {
        self.sum += k;
        return self.sum;
    }
};

int main()
{
    int q {0};
    std::cin >> q;
    Total t {};
    for (int i {0}; i < q; ++i) {
        int k {0};
        std::cin >> k;
        std::println("{}", t.add(k));
    }
}
```
### Wrong
```cpp
#include <iostream>
#include <print>

struct Total {
    int sum {0};
    int add(this Total self, int k)
    {
        self.sum += k;
        return self.sum;
    }
};

int main()
{
    int q {0};
    std::cin >> q;
    Total t {};
    for (int i {0}; i < q; ++i) {
        int k {0};
        std::cin >> k;
        std::println("{}", t.add(k));
    }
}
```
### Tests
```in
1
-1000
```
```in
3
1 2 3
```
```in
4
10 -20 30 -40
```
```in
5
1000 1000 1000 1000 1000
```
### Witness
```in
2
3 4
```
