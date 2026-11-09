# 4.40 What list::remove and unique return
Part: one part for each difference Annex C lists between C++17 and C++20: [diff.cpp17.containers] ¶1
Clause: [diff.cpp17.containers], [list.ops], [forward.list.ops]
After: none
Levels: c++17

## Example
```cpp
#include <list>
#include <print>

int main()
{
    std::list<int> marks {4, 7, 4, 9, 4};
    //: Keep the size before you remove every 4.
    auto before {marks.size()};
    marks.remove(4);
    //: Take the difference; it means the same at every level.
    std::println("{}", before - marks.size());
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <list>

int main()
{
    std::list<int> marks {4, 7, 4, 9, 4};
    auto removed {marks.remove(4)};
    std::printf("%zu\n", removed);
}
```
Answer:
- c++17: ill-formed 7
- c++20..c++23: defined

## Verdict 2
```cpp
#include <cstdio>
#include <list>

void drop_fours(std::list<int>& marks)
{
    return marks.remove(4);
}

int main()
{
    std::list<int> marks {4, 7, 4, 9, 4};
    drop_fours(marks);
    std::printf("%zu\n", marks.size());
}
```
Answer:
- c++17: defined
- c++20..c++23: ill-formed 6

## Alone 1
Form: flag
Write a program that reads n integers into a std::list, removes every 0 from the list and prints how many it removed. The program is accepted at c++17, c++20 and c++23.
Input: n on the first line, then n integers.
Output: one line, the number of zeros removed.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
Expect:
- c++20..c++23: accept
- c++17..c++17: accept
### Reference
```cpp
#include <iostream>
#include <list>

int main()
{
    int n {0};
    std::cin >> n;
    std::list<int> values;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        values.push_back(v);
    }
    auto before {values.size()};
    values.remove(0);
    std::cout << before - values.size() << '\n';
}
```
### Wrong
```cpp
#include <iostream>
#include <list>

int main()
{
    int n {0};
    std::cin >> n;
    std::list<int> values;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        values.push_back(v);
    }
    auto removed {values.remove(0)};
    std::cout << removed << '\n';
}
```
### Witness
```cpp
int probe {0};
```

## Alone 2
Form: flag
Write a program that reads n integers into a std::forward_list, removes each run of equal neighbours down to one element with the list's own unique, and prints the number unique returns. The program is rejected at c++17 and accepted at c++20 and c++23.
Input: n on the first line, then n integers.
Output: one line, the number of elements removed.
Limits: 1 ≤ n ≤ 1000; each integer is between -1000 and 1000.
Expect:
- c++20..c++23: accept
- c++17..c++17: reject
### Reference
```cpp
#include <forward_list>
#include <iostream>

int main()
{
    int n {0};
    std::cin >> n;
    std::forward_list<int> values;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        values.push_front(v);
    }
    auto removed {values.unique()};
    std::cout << removed << '\n';
}
```
### Wrong
```cpp
#include <forward_list>
#include <iostream>
#include <iterator>

int main()
{
    int n {0};
    std::cin >> n;
    std::forward_list<int> values;
    for (int i {0}; i < n; ++i) {
        int v {0};
        std::cin >> v;
        values.push_front(v);
    }
    auto before {std::distance(values.begin(), values.end())};
    values.unique();
    auto after {std::distance(values.begin(), values.end())};
    std::cout << before - after << '\n';
}
```
### Witness
```cpp
int probe {0};
```
