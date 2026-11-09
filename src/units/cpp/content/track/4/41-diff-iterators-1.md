# 4.41 The `iterator_traits` of a function pointer
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.iterators] ¶1
Clause: [diff.cpp17.iterators], [iterator.traits]
After: none
Levels: c++17

## Example
```cpp
#include <cstddef>
#include <iterator>
#include <print>

int twice(int n)
{
    return 2 * n;
}

int triple(int n)
{
    return 3 * n;
}

using Op = int (*)(int);

int main()
{
    Op ops[] {twice, triple};
    //: Ask iterator_traits about Op*, a pointer into the array.
    std::iterator_traits<Op*>::difference_type k {1};
    //: Never ask it about Op, which is no iterator from C++20 on.
    Op op {ops[k]};
    std::println("{}", op(5));
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <iterator>

int twice(int n)
{
    return 2 * n;
}

using Op = int (*)(int);
using Traits = std::iterator_traits<Op>;

int main()
{
    std::printf("%d\n", Traits::reference(twice)(4));
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 14

## Verdict 2
```cpp
#include <cstdio>
#include <iterator>
#include <type_traits>

using Op = void (*)();
using Traits = std::iterator_traits<Op>;

int main()
{
    std::printf("%zu\n", sizeof(Traits::difference_type));
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 10

## Alone 1
Form: flag
Write a program that reads an integer and prints it, holding it in a variable whose type is the difference_type that std::iterator_traits gives for a pointer type that does not point to an object. The program is accepted at c++17 and rejected at c++20 and c++23.
Input: one line, one integer.
Output: one line, the integer.
Limits: the integer is between -1000 and 1000.
Expect:
- c++20..c++23: reject
- c++17..c++17: accept
### Reference
```cpp
#include <iostream>
#include <iterator>

using Callback = void (*)();

int main()
{
    std::iterator_traits<Callback>::difference_type n {0};
    std::cin >> n;
    std::cout << n << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <iterator>

using Callback = void*;

int main()
{
    std::iterator_traits<Callback>::difference_type n {0};
    std::cin >> n;
    std::cout << n << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program with an array of two pointers to functions that take an int and return an int, the first doubling and the second tripling; it reads k and x, holds k in the difference_type that std::iterator_traits gives for iterators over the array, and prints the function at index k applied to x. The program is accepted at c++17, c++20 and c++23.
Input: one line, two integers k and x.
Output: one line, the result.
Limits: 0 ≤ k ≤ 1; -1000 ≤ x ≤ 1000.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <iostream>
#include <iterator>

int twice(int n)
{
    return 2 * n;
}

int triple(int n)
{
    return 3 * n;
}

using Op = int (*)(int);

int main()
{
    Op ops[] {twice, triple};
    std::iterator_traits<Op*>::difference_type k {0};
    int x {0};
    std::cin >> k >> x;
    std::cout << ops[k](x) << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <iterator>

int twice(int n)
{
    return 2 * n;
}

int triple(int n)
{
    return 3 * n;
}

using Op = int (*)(int);

int main()
{
    Op ops[] {twice, triple};
    std::iterator_traits<Op>::difference_type k {0};
    int x {0};
    std::cin >> k >> x;
    std::cout << ops[k](x) << '\n';
}
```
### Witness
```cpp
int probe {0};
```
