# 3.19 A pack held in a `std::tuple` and read by `std::apply`
Part: a pack held in a `std::tuple` and read by `std::apply`
Clause: [tuple.apply], [tuple.creation], [temp.variadic], [class.temporary], [basic.life]
After: 3.11, 3.12
Levels: c++17

## Example
```cpp
#include <print>
#include <tuple>

//: Keep a pack of arguments as values in a tuple.
template <typename... Ts>
struct Deferred {
    std::tuple<Ts...> args;

    //: Hand every element to the function, in order.
    template <typename F>
    auto call(F f) const
    {
        return std::apply(f, args);
    }
};

int main()
{
    //: Store three arguments now and call later.
    Deferred<int, int, int> later {{7, 2, 3}};
    auto result = later.call([](int a, int b, int c) {
        return a - b * c;
    });
    //: Print the result of the call.
    std::println("{}", result);
}
```

## Verdict 1
```cpp
#include <cstdio>
#include <string>
#include <tuple>

void show(const std::string& text, int count)
{
    std::printf("%zu %d\n", text.size(), count);
}

int main()
{
    auto args = std::forward_as_tuple(std::string(40, 'x'), 3);
    std::apply(show, args);
}
```
Answer: c++17 undefined sanitizer

## Verdict 2
```cpp
#include <cstdio>
#include <string>
#include <tuple>

void show(const std::string& text, int count)
{
    std::printf("%zu %d\n", text.size(), count);
}

int main()
{
    std::string text(40, 'x');
    int count {3};
    auto args = std::tie(text, count);
    std::apply(show, args);
}
```
Answer: c++17 defined

## Alone 1
Form: probes
Write a class template `Deferred<Ts...>` with a constexpr constructor that takes one argument of each type in `Ts` and keeps them in a member `std::tuple`, and a constexpr member function template `call(f)` that returns f called with the kept arguments in order.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
#include <tuple>

template <typename... Ts>
struct Deferred {
    std::tuple<Ts...> args;

    constexpr Deferred(Ts... values) : args {values...}
    {
    }

    template <typename F>
    constexpr auto call(F f) const
    {
        return std::apply(f, args);
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <tuple>

template <typename... Ts>
struct Deferred {
    std::tuple<Ts&...> args;

    constexpr Deferred(Ts... values) : args {values...}
    {
    }

    template <typename F>
    constexpr auto call(F f) const
    {
        return std::apply(f, args);
    }
};

int main()
{
}
```
### Probes
```cpp
constexpr auto minus = [](int a, int b) { return a - b; };
static_assert(Deferred<int, int> {7, 2}.call(minus) == 5, "");
static_assert(Deferred<> {}.call([] { return 1; }) == 1, "");
static_assert(Deferred<int, int> {7, 2}.call(minus) == -5, "");
```
Accept: 1, 2, 3
Reject: 4
### Witness
```cpp
constexpr auto take = [](int a, int b) { return a - b; };
static_assert(Deferred<int, int> {9, 4}.call(take) == 5, "");
```

## Alone 2
Form: probes
Write a class template `Counters<Ts...>` with a public member `std::tuple<Ts...> values`, so that it can be built as `Counters<int, long> {{1, 5}}`, and a constexpr member function `bump()` that adds 1 to every element of `values`, through `std::apply`.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
#include <tuple>

template <typename... Ts>
struct Counters {
    std::tuple<Ts...> values;

    constexpr void bump()
    {
        std::apply([](auto&... x) { ((x += 1), ...); }, values);
    }
};

int main()
{
}
```
### Wrong
```cpp
#include <tuple>

template <typename... Ts>
struct Counters {
    std::tuple<Ts...> values;

    constexpr void bump()
    {
        std::apply([](auto... x) { ((x += 1), ...); }, values);
    }
};

int main()
{
}
```
### Probes
```cpp
constexpr Counters<int, long> twice()
{
    Counters<int, long> c {{1, 5}};
    c.bump();
    c.bump();
    return c;
}
static_assert(std::get<0>(twice().values) == 3, "");
static_assert(std::get<1>(twice().values) == 7, "");
static_assert(std::get<1>(twice().values) == 5, "");
```
Accept: 1, 2, 3, 4, 5, 6, 7, 8, 9
Reject: 10
### Witness
```cpp
constexpr int once()
{
    Counters<int> c {{4}};
    c.bump();
    return std::get<0>(c.values);
}
static_assert(once() == 5, "");
```
