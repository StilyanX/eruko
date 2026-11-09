# 3.20 A policy class that picks a layout at compile time
Part: a policy class that picks a layout at compile time
Clause: [temp.param], [temp.inst], [expr.const], [dcl.constexpr]
After: 3.09
Levels: c++11

## Example
```cpp
#include <print>

//: Put the components of one site next to each other.
struct Aos {
    static constexpr int index(int site, int comp, int sites,
                               int comps)
    {
        return site * comps + comp;
    }
};

//: Put the values of one component next to each other.
struct Soa {
    static constexpr int index(int site, int comp, int sites,
                               int comps)
    {
        return comp * sites + site;
    }
};

//: Let the policy decide where an element lives.
template <typename Layout, int Sites, int Comps>
struct Field {
    double data[Sites * Comps];

    static constexpr int offset(int site, int comp)
    {
        return Layout::index(site, comp, Sites, Comps);
    }
};

//: Print where component 2 of site 1 lives under each policy.
int main()
{
    std::println("{}", Field<Aos, 4, 3>::offset(1, 2));
    std::println("{}", Field<Soa, 4, 3>::offset(1, 2));
}
```

## Verdict 1
```cpp
#include <cstdio>

struct Blocked {
};

template <typename Layout>
struct Field {
    double data[12];

    double at(int site, int comp) const
    {
        return data[Layout::index(site, comp)];
    }
};

int main()
{
    Field<Blocked> field {};
    std::printf("%zu\n", sizeof field.data);
}
```
Answer: c++11 defined

## Verdict 2
```cpp
#include <cstdio>

struct Aos {
    static int index(int site, int comp)
    {
        return site * 3 + comp;
    }
};

template <typename Layout>
struct Field {
    static constexpr int last {Layout::index(3, 2)};
};

int main()
{
    std::printf("%d\n", Field<Aos>::last);
}
```
Answer: c++11 ill-formed 12

## Alone 1
Form: probes
Write two policy classes `Aos` and `Soa`, each with a static constexpr member function `index(site, comp, sites, comps)` that returns the position of component comp of site site in one array of sites times comps numbers: `Aos` keeps the components of one site together, `Soa` keeps the values of one component together. Then write a class template `Field<Layout, Sites, Comps>` with a static constexpr member function `offset(site, comp)` that returns the position its policy gives.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
struct Aos {
    static constexpr int index(int site, int comp, int sites,
                               int comps)
    {
        return site * comps + comp;
    }
};

struct Soa {
    static constexpr int index(int site, int comp, int sites,
                               int comps)
    {
        return comp * sites + site;
    }
};

template <typename Layout, int Sites, int Comps>
struct Field {
    static constexpr int offset(int site, int comp)
    {
        return Layout::index(site, comp, Sites, Comps);
    }
};

int main()
{
}
```
### Wrong
```cpp
struct Aos {
    static constexpr int index(int site, int comp, int sites,
                               int comps)
    {
        return site * comps + comp;
    }
};

struct Soa {
    static constexpr int index(int site, int comp, int sites,
                               int comps)
    {
        return comp * sites + site;
    }
};

template <typename Layout, int Sites, int Comps>
struct Field {
    static constexpr int offset(int site, int comp)
    {
        return Aos::index(site, comp, Sites, Comps);
    }
};

int main()
{
}
```
### Probes
```cpp
static_assert(Field<Aos, 4, 3>::offset(1, 2) == 5, "");
static_assert(Field<Soa, 4, 3>::offset(1, 2) == 9, "");
static_assert(Field<Aos, 4, 3>::offset(3, 0) == 9, "");
static_assert(Field<Soa, 4, 3>::offset(1, 2) == 5, "");
```
Accept: 1, 2, 3
Reject: 4
### Witness
```cpp
static_assert(Field<Soa, 2, 2>::offset(0, 1) == 2, "");
```

## Alone 2
Form: probes
Write two policy classes `Padded` and `Packed`, each with a static constexpr member function `stride(comps)`: `Padded` returns comps rounded up to a multiple of 4, `Packed` returns comps. Then write a class template `Block<Layout, Sites, Comps>` whose only member is an array `data` of doubles, Sites times the policy's stride long.
Input: none.
Output: none.
Limits: none.
### Reference
```cpp
struct Padded {
    static constexpr int stride(int comps)
    {
        return (comps + 3) / 4 * 4;
    }
};

struct Packed {
    static constexpr int stride(int comps)
    {
        return comps;
    }
};

template <typename Layout, int Sites, int Comps>
struct Block {
    double data[Sites * Layout::stride(Comps)];
};

int main()
{
}
```
### Wrong
```cpp
struct Padded {
    static constexpr int stride(int comps)
    {
        return (comps + 3) / 4 * 4;
    }
};

struct Packed {
    static constexpr int stride(int comps)
    {
        return comps;
    }
};

template <typename Layout, int Sites, int Comps>
struct Block {
    double data[Sites * Comps];
};

int main()
{
}
```
### Probes
```cpp
static_assert(sizeof(Block<Packed, 2, 3>) == 6 * sizeof(double), "");
static_assert(sizeof(Block<Padded, 2, 3>) == 8 * sizeof(double), "");
static_assert(sizeof(Block<Padded, 1, 4>) == 4 * sizeof(double), "");
static_assert(sizeof(Block<Padded, 2, 3>) == 6 * sizeof(double), "");
```
Accept: 1, 2, 3
Reject: 4
### Witness
```cpp
static_assert(sizeof(Block<Padded, 1, 5>) == 8 * sizeof(double), "");
```
