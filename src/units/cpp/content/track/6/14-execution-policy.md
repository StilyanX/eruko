# 6.14 The execution policy of a parallel algorithm
Part: the execution policy of a parallel algorithm
Clause: [execpol], [algorithms.parallel.exec], [algorithms.parallel.overloads], [intro.races]
After: 6.04
Levels: c++17

## Example
```cpp
#include <algorithm>
#include <atomic>
#include <execution>
#include <print>
#include <vector>

int main()
{
    std::vector<int> x(1000, 1);
    //: Under seq, the calls run one at a time in this thread.
    int plain {0};
    std::for_each(std::execution::seq, x.begin(), x.end(),
                  [&](int v) { plain += v; });
    //: Under par, the calls may run at once: share an atomic.
    std::atomic<int> shared {0};
    std::for_each(std::execution::par, x.begin(), x.end(),
                  [&](int v) { shared += v; });
    //: Sort under par: the policy is the first argument.
    std::sort(std::execution::par, x.begin(), x.end());
    std::println("{} {}", plain, shared.load());
}
```

## Verdict 1
```cpp
#include <algorithm>
#include <cstdio>
#include <execution>
#include <vector>

int main()
{
    std::vector<int> x(100000, 1);
    int sum {0};
    std::for_each(std::execution::seq, x.begin(), x.end(),
                  [&](int v) { sum += v; });
    std::printf("%d\n", sum);
}
```
Answer: c++17..c++23 defined
Flags: -pthread -ltbb

## Verdict 2
```cpp
#include <algorithm>
#include <cstdio>
#include <execution>
#include <vector>

int main()
{
    std::vector<int> x(100000, 1);
    int sum {0};
    std::for_each(std::execution::par, x.begin(), x.end(),
                  [&](int v) { sum += v; });
    std::printf("%d\n", sum);
}
```
Answer: c++17..c++23 undefined stored
Derivation 1: [algorithms.parallel.exec]: under par the element access functions may run in several threads at once, so the unsynchronized sum += v from two calls is a data race ([intro.races]), undefined behaviour.
Derivation 2: [intro.races] p21: two conflicting actions in different threads, at least one not atomic, neither happening before the other, make a data race; std::for_each with par gives the lambda calls no order, so the int sum races and the behaviour is undefined.
Flags: -pthread -ltbb

## Alone 1
Form: probes
Write a function template `count_even(policy, v)` that returns, as an int, how many numbers of the std::vector<int> v are even. It counts them with std::count_if under the execution policy it is given. It takes part in overload resolution only when its first argument is an execution policy.
Input: none.
Output: none.
Limits: g++ 16 at c++23 with -pedantic-errors.
### Probes
```cpp
int a {count_even(std::execution::seq, std::vector<int> {1, 2})};
int b {count_even(std::execution::par, std::vector<int> {})};
int c {count_even(5, std::vector<int> {})};
```
Accept: 1, 2
Reject: 3
### Reference
```cpp
#include <algorithm>
#include <execution>
#include <type_traits>
#include <vector>

template <typename Policy>
    requires std::is_execution_policy_v<
        std::remove_cvref_t<Policy>>
int count_even(Policy&& policy, const std::vector<int>& v)
{
    auto even = [](int x) { return x % 2 == 0; };
    auto n {std::count_if(policy, v.begin(), v.end(), even)};
    return static_cast<int>(n);
}

int main()
{
}
```
### Wrong
```cpp
#include <algorithm>
#include <execution>
#include <type_traits>
#include <vector>

template <typename Policy>
int count_even(Policy&& policy, const std::vector<int>& v)
{
    auto even = [](int x) { return x % 2 == 0; };
    auto n {std::count_if(policy, v.begin(), v.end(), even)};
    return static_cast<int>(n);
}

int main()
{
}
```
### Witness
```cpp
int count_even(long, const std::vector<int>&) { return -1; }
int d {count_even(5, std::vector<int> {})};
```

## Alone 2
Form: flag
Flags: -pthread -ltbb
Write a program that reads n integers and prints their sum. Compute the sum with one standard algorithm called with std::execution::par.
Input: line 1, n; line 2, the n integers.
Output: one line, the sum.
Limits: g++ 16 with -pedantic-errors, at every level from c++17 to c++23; 0 ≤ n ≤ 1000.
Expect:
- c++17..c++23: accept
### Reference
```cpp
#include <execution>
#include <iostream>
#include <numeric>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<long long> x(n, 0);
    for (long long& v : x) {
        std::cin >> v;
    }
    long long sum {std::reduce(std::execution::par,
                                x.begin(), x.end(), 0LL)};
    std::cout << sum << '\n';
}
```
### Wrong
```cpp
#include <execution>
#include <iostream>
#include <numeric>
#include <vector>

int main()
{
    int n {0};
    std::cin >> n;
    std::vector<long long> x(n, 0);
    for (long long& v : x) {
        std::cin >> v;
    }
    long long sum {std::accumulate(std::execution::par,
                                x.begin(), x.end(), 0LL)};
    std::cout << sum << '\n';
}
```
### Witness
```cpp
long long twice(long long v)
{
    return 2 * v;
}
```
