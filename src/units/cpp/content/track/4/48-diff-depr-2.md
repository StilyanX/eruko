# 4.48 The nested result_type and argument_type, removed
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.depr] ¶2
Clause: [diff.cpp17.depr], [unord.hash], [refwrap], [meta.trans.other]
After: none
Levels: c++17

## Example
```cpp
#include <cstdio>
#include <functional>
#include <string>
#include <type_traits>

int twice(int n)
{
    return 2 * n;
}

int main()
{
    //: Keep a string's hash in std::size_t, the type it has.
    std::hash<std::string> hasher;
    std::size_t hash {hasher("apple")};
    std::printf("%d\n", hash == hasher("apple"));
    //: Name the result of a call with invoke_result_t.
    std::reference_wrapper<int(int)> call {twice};
    std::invoke_result_t<decltype(call), int> result {call(21)};
    std::printf("%d\n", result);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <functional>

int main()
{
    std::hash<int> hasher;
    auto first = std::hash<int>::result_type {hasher(42)};
    std::printf("%d\n", first == hasher(42));
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 7

## Verdict 2
```cpp
#include <cstdio>
#include <functional>

int twice(int n)
{
    return 2 * n;
}

template <typename F>
typename F::result_type call_with(F f, int n)
{
    return f(n);
}

int main()
{
    std::reference_wrapper<int(int)> call {twice};
    std::printf("%d\n", call_with(call, 21));
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 18

## Alone 1
Form: flag
Write a program that hashes the word apple with std::hash<std::string>, keeps the hash in a variable whose type is std::hash<std::string>'s own nested type for its result, and prints 1 if hashing apple again gives the same value; the program is accepted at c++17 and rejected at c++20 and c++23.
Input: none.
Output: one line, 1.
Limits: g++ 16 with -pedantic-errors.
Expect:
- c++17..c++17: accept
- c++20..c++23: reject
### Reference
```cpp
#include <cstdio>
#include <functional>
#include <string>

int main()
{
    std::hash<std::string> hasher;
    std::hash<std::string>::result_type first {hasher("apple")};
    std::printf("%d\n", first == hasher("apple"));
}
```
### Wrong
```cpp
#include <cstdio>
#include <functional>
#include <string>

int main()
{
    std::hash<std::string> hasher;
    std::size_t first {hasher("apple")};
    std::printf("%d\n", first == hasher("apple"));
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program with a function template same_hash that takes a hasher and two values and returns whether their hashes are equal, keeping each hash in a variable of the type the hasher's call returns, named in the template; main reads two words and prints 1 if their std::hash<std::string> hashes are equal, else 0. The program is accepted at c++17, c++20 and c++23.
Input: one line, two words.
Output: one line, 1 or 0.
Limits: each word has 1 to 20 letters.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <cstdio>
#include <functional>
#include <iostream>
#include <string>
#include <type_traits>

template <typename Hash, typename Key>
bool same_hash(Hash hasher, const Key& a, const Key& b)
{
    using Result = std::invoke_result_t<Hash, const Key&>;
    Result first {hasher(a)};
    Result second {hasher(b)};
    return first == second;
}

int main()
{
    std::string a;
    std::string b;
    std::cin >> a >> b;
    std::hash<std::string> hasher;
    std::printf("%d\n", same_hash(hasher, a, b));
}
```
### Wrong
```cpp
#include <cstdio>
#include <functional>
#include <iostream>
#include <string>
#include <type_traits>

template <typename Hash, typename Key>
bool same_hash(Hash hasher, const Key& a, const Key& b)
{
    using Result = typename Hash::result_type;
    Result first {hasher(a)};
    Result second {hasher(b)};
    return first == second;
}

int main()
{
    std::string a;
    std::string b;
    std::cin >> a >> b;
    std::hash<std::string> hasher;
    std::printf("%d\n", same_hash(hasher, a, b));
}
```
### Witness
```cpp
int probe {0};
```
