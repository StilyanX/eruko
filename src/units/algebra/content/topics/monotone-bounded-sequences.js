export default {
  "number": 240,
  "title": "Monotone bounded sequences and their limits",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "221-224"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{234 + 17a_n}$ for every whole number $n$.",
    "form": "Answer as an integer.",
    "answer": "26",
    "solution": [
      "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{234 + 17a_n}$ for every whole number $n$.",
      "$\\sqrt{234 + 17m} \\le m$",
      "$m^2 - 17m - 234 \\ge 0$",
      "$(m - 26)(m + 9) \\ge 0$",
      "$m \\ge 26$",
      "$m = 26$"
    ]
  },
  "ideas": [
    {
      "name": "Monotone bounded sequences converge",
      "concrete": "Take $a_0 = 1$ and $a_{n+1} = \\dfrac{a_n^2 + 10}{7}$ for every whole number $n$. Each step adds $a_{n+1} - a_n = \\dfrac{(a_n - 2)(a_n - 5)}{7}$, which is above $0$ while $a_n < 2$; and $a_n < 2$ gives $a_n^2 + 10 < 14$, so $a_{n+1} < 2$. The terms $1$, $\\dfrac{11}{7}$, $\\dfrac{611}{343}$ climb and never reach $2$. Their limit $y$ satisfies $y = \\dfrac{y^2 + 10}{7}$, with roots $2$ and $5$; the terms stay below $2$, so the limit is $2$.",
      "general": "A sequence $a_0$, $a_1$, $a_2$, … has the limit $y$, as arithmetic's decimals topic defines it for decimals, when for every distance above $0$ there is a whole number $m$ with $a_n$ closer to $y$ than that distance for every $n \\ge m$; a sequence has at most one limit. A sequence is **bounded** above when one number $b$ has $a_n \\le b$ for every whole number $n$, bounded below when one number $c$ has $a_n \\ge c$ for every $n$, and a **bounded sequence** is bounded above and below. A **monotone sequence** increases ($a_n \\le a_{n+1}$ for every $n$) or decreases ($a_n \\ge a_{n+1}$ for every $n$). **Monotone bounded sequences converge**: an increasing sequence bounded above, or a decreasing sequence bounded below, has a limit; the course states this fact with no proof. **Limit satisfies the recursion**: when $a_{n+1} = F(a_n)$ for every $n$, with $F$ built from $a_n$ by sums, products, quotients by a nonzero limit and square roots, and $a_n$ has the limit $y$, then $a_{n+1}$ has the limit $y$ too, so $y = F(y)$. **A limit passes through products and quotients of sequences**: if $s_n$ has the limit $b$ and $t_n$ has the limit $c$, then $s_nt_n$ has the limit $bc$, and $\\dfrac{s_n}{t_n}$ has the limit $\\dfrac{b}{c}$ when $c \\ne 0$ and no $t_n$ is $0$; the course states this fact with no proof. **A limit stays within a bound**: if $a_n \\le b$ for every whole number $n$ and $a_n$ has the limit $y$, then $y \\le b$; the same holds for a bound below. The **convergence rate** of a sequence with limit $y$ and no term equal to $y$ is the limit of $\\dfrac{a_{n+1} - y}{a_n - y}$: near $y$ the difference $a_n - y$ is multiplied by about that number at each step, so its sign says whether the terms alternate sides of $y$ and its size how fast they close in. Where the difference is squared at each step, the convergence is quadratic, and the limit of $\\dfrac{a_{n+1} - y}{(a_n - y)^2}$ takes the place of the rate."
    }
  ],
  "kinds": [
    {
      "id": "t240-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 9$ and $a_{n+1} = \\sqrt{50 + 5a_n}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 9$ and $a_{n+1} = \\sqrt{50 + 5a_n}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
              },
              {
                "step": "$\\sqrt{50 + 5m} \\le m$",
                "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{50 + 5m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
              },
              {
                "step": "$m^2 - 5m - 50 \\ge 0$",
                "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $50 + 5m$ is taken from both sides."
              },
              {
                "step": "$(m - 10)(m + 5) \\ge 0$",
                "reason": "Factoring a quadratic: $-10$ and $5$ have sum $-5$ and product $-50$."
              },
              {
                "step": "$m \\ge 10$",
                "reason": "A product is positive when its factors have the same sign: $m + 5 > 0$, so $m - 10$ is not below $0$."
              },
              {
                "step": "$m = 10$",
                "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{50 + 5 \\cdot 10} = 10$, so $m = 10$ satisfies line 2, and line 5 rules out every smaller $m$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 1$ and $a_{n+1} = \\sqrt{13 + 12a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "13",
              "lines": [
                {
                  "step": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 1$ and $a_{n+1} = \\sqrt{13 + 12a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$\\sqrt{13 + 12m} \\le m$",
                  "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{13 + 12m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
                },
                {
                  "step": "$m^2 - 12m - 13 \\ge 0$",
                  "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $13 + 12m$ is taken from both sides."
                },
                {
                  "step": "$(m - 13)(m + 1) \\ge 0$",
                  "reason": "Factoring a quadratic: $-13$ and $1$ have sum $-12$ and product $-13$."
                },
                {
                  "step": "$m \\ge 13$",
                  "reason": "A product is positive when its factors have the same sign: $m + 1 > 0$, so $m - 13$ is not below $0$."
                },
                {
                  "step": "$m = 13$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{13 + 12 \\cdot 13} = 13$, so $m = 13$ satisfies line 2, and line 5 rules out every smaller $m$."
                }
              ]
            },
            {
              "prompt": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 4$ and $a_{n+1} = \\sqrt{90 + 13a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "18",
              "lines": [
                {
                  "step": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 4$ and $a_{n+1} = \\sqrt{90 + 13a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$\\sqrt{90 + 13m} \\le m$",
                  "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{90 + 13m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
                },
                {
                  "step": "$m^2 - 13m - 90 \\ge 0$",
                  "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $90 + 13m$ is taken from both sides."
                },
                {
                  "step": "$(m - 18)(m + 5) \\ge 0$",
                  "reason": "Factoring a quadratic: $-18$ and $5$ have sum $-13$ and product $-90$."
                },
                {
                  "step": "$m \\ge 18$",
                  "reason": "A product is positive when its factors have the same sign: $m + 5 > 0$, so $m - 18$ is not below $0$."
                },
                {
                  "step": "$m = 18$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{90 + 13 \\cdot 18} = 18$, so $m = 18$ satisfies line 2, and line 5 rules out every smaller $m$."
                }
              ]
            },
            {
              "prompt": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 8$ and $a_{n+1} = \\sqrt{12 + 11a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "12",
              "lines": [
                {
                  "step": "Find the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$, where $a_0 = 8$ and $a_{n+1} = \\sqrt{12 + 11a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$\\sqrt{12 + 11m} \\le m$",
                  "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{12 + 11m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
                },
                {
                  "step": "$m^2 - 11m - 12 \\ge 0$",
                  "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $12 + 11m$ is taken from both sides."
                },
                {
                  "step": "$(m - 12)(m + 1) \\ge 0$",
                  "reason": "Factoring a quadratic: $-12$ and $1$ have sum $-11$ and product $-12$."
                },
                {
                  "step": "$m \\ge 12$",
                  "reason": "A product is positive when its factors have the same sign: $m + 1 > 0$, so $m - 12$ is not below $0$."
                },
                {
                  "step": "$m = 12$",
                  "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{12 + 11 \\cdot 12} = 12$, so $m = 12$ satisfies line 2, and line 5 rules out every smaller $m$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t240-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the limit of $a_n$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{2a_n^2 + 9}{9}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the limit of $a_n$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{2a_n^2 + 9}{9}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
              },
              {
                "step": "The numbers $a_n$ have a limit $y$.",
                "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $2$."
              },
              {
                "step": "$y = \\dfrac{2y^2 + 9}{9}$",
                "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
              },
              {
                "step": "$9y = 2y^2 + 9$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $9$."
              },
              {
                "step": "$2y^2 - 9y + 9 = 0$",
                "reason": "Adding the same number to both sides: $9y$ is taken from both sides."
              },
              {
                "step": "$(2y - 3)(y - 3) = 0$",
                "reason": "Factoring a quadratic: $(2y - 3)(y - 3) = 2y^2 - 9y + 9$."
              },
              {
                "step": "So $y = \\dfrac{3}{2}$ or $y = 3$.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "$y \\le 2$",
                "reason": "A limit stays within a bound: every term is below $2$."
              },
              {
                "step": "$y = \\dfrac{3}{2}$",
                "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{3}{2}$ is at most $2$ (line 8)."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the limit of $a_n$, where $a_0 = 2$ and $a_{n+1} = \\dfrac{3a_n^2 + 35}{22}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "7/3",
              "lines": [
                {
                  "step": "Find the limit of $a_n$, where $a_0 = 2$ and $a_{n+1} = \\dfrac{3a_n^2 + 35}{22}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "The numbers $a_n$ have a limit $y$.",
                  "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $4$."
                },
                {
                  "step": "$y = \\dfrac{3y^2 + 35}{22}$",
                  "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
                },
                {
                  "step": "$22y = 3y^2 + 35$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $22$."
                },
                {
                  "step": "$3y^2 - 22y + 35 = 0$",
                  "reason": "Adding the same number to both sides: $22y$ is taken from both sides."
                },
                {
                  "step": "$(3y - 7)(y - 5) = 0$",
                  "reason": "Factoring a quadratic: $(3y - 7)(y - 5) = 3y^2 - 22y + 35$."
                },
                {
                  "step": "So $y = \\dfrac{7}{3}$ or $y = 5$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$y \\le 4$",
                  "reason": "A limit stays within a bound: every term is below $4$."
                },
                {
                  "step": "$y = \\dfrac{7}{3}$",
                  "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{7}{3}$ is at most $4$ (line 8)."
                }
              ]
            },
            {
              "prompt": "Find the limit of $a_n$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{2a_n^2 + 2}{5}$ for every whole number $n$, the sequence increases, and $a_n < 1$ for every whole number $n$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "1/2",
              "lines": [
                {
                  "step": "Find the limit of $a_n$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{2a_n^2 + 2}{5}$ for every whole number $n$, the sequence increases, and $a_n < 1$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "The numbers $a_n$ have a limit $y$.",
                  "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $1$."
                },
                {
                  "step": "$y = \\dfrac{2y^2 + 2}{5}$",
                  "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
                },
                {
                  "step": "$5y = 2y^2 + 2$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $5$."
                },
                {
                  "step": "$2y^2 - 5y + 2 = 0$",
                  "reason": "Adding the same number to both sides: $5y$ is taken from both sides."
                },
                {
                  "step": "$(2y - 1)(y - 2) = 0$",
                  "reason": "Factoring a quadratic: $(2y - 1)(y - 2) = 2y^2 - 5y + 2$."
                },
                {
                  "step": "So $y = \\dfrac{1}{2}$ or $y = 2$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$y \\le 1$",
                  "reason": "A limit stays within a bound: every term is below $1$."
                },
                {
                  "step": "$y = \\dfrac{1}{2}$",
                  "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{1}{2}$ is at most $1$ (line 8)."
                }
              ]
            },
            {
              "prompt": "Find the limit of $a_n$, where $a_0 = 3$ and $a_{n+1} = \\dfrac{5a_n^2 + 128}{56}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "16/5",
              "lines": [
                {
                  "step": "Find the limit of $a_n$, where $a_0 = 3$ and $a_{n+1} = \\dfrac{5a_n^2 + 128}{56}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "The numbers $a_n$ have a limit $y$.",
                  "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $4$."
                },
                {
                  "step": "$y = \\dfrac{5y^2 + 128}{56}$",
                  "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
                },
                {
                  "step": "$56y = 5y^2 + 128$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $56$."
                },
                {
                  "step": "$5y^2 - 56y + 128 = 0$",
                  "reason": "Adding the same number to both sides: $56y$ is taken from both sides."
                },
                {
                  "step": "$(5y - 16)(y - 8) = 0$",
                  "reason": "Factoring a quadratic: $(5y - 16)(y - 8) = 5y^2 - 56y + 128$."
                },
                {
                  "step": "So $y = \\dfrac{16}{5}$ or $y = 8$.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "$y \\le 4$",
                  "reason": "A limit stays within a bound: every term is below $4$."
                },
                {
                  "step": "$y = \\dfrac{16}{5}$",
                  "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{16}{5}$ is at most $4$ (line 8)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t240-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 9}{a_n - 9}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n + 117}{a_n + 8}$ for every whole number $n$, $a_n$ has the limit $9$, and no term is $9$.",
            "lines": [
              {
                "step": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 9}{a_n - 9}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n + 117}{a_n + 8}$ for every whole number $n$, $a_n$ has the limit $9$, and no term is $9$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
              },
              {
                "step": "$a_{n+1} - 9 = \\dfrac{4a_n + 117}{a_n + 8} - 9$",
                "reason": "Adding the same number to both sides: $9$ is taken from both sides of the recursion."
              },
              {
                "step": "$a_{n+1} - 9 = \\dfrac{4a_n + 117 - 9a_n - 72}{a_n + 8}$",
                "reason": "Single fraction: $9 = \\dfrac{9(a_n + 8)}{a_n + 8}$, multiplied out on top."
              },
              {
                "step": "$a_{n+1} - 9 = \\dfrac{-5a_n + 45}{a_n + 8}$",
                "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
              },
              {
                "step": "$a_{n+1} - 9 = -\\dfrac{5(a_n - 9)}{a_n + 8}$",
                "reason": "Common factor: $-5$ is taken out, since $45 = -5 \\cdot \\left(-9\\right)$."
              },
              {
                "step": "$\\dfrac{a_{n+1} - 9}{a_n - 9} = -\\dfrac{5}{a_n + 8}$",
                "reason": "Dividing both sides by a nonzero number: $a_n - 9$ is not $0$, as no term is $9$."
              },
              {
                "step": "The limit of $-\\dfrac{5}{a_n + 8}$ is $-\\dfrac{5}{9 + 8} = -\\dfrac{5}{17}$.",
                "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $9$, and the limit of the bottom is not $0$."
              },
              {
                "step": "The convergence rate is $-\\dfrac{5}{17}$.",
                "reason": "Convergence rate: it is the limit of the quotient in line 6."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 8}{a_n - 8}$, where $a_0 = 6$ and $a_{n+1} = \\dfrac{13a_n + 8}{a_n + 6}$ for every whole number $n$, $a_n$ has the limit $8$, and no term is $8$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5/14",
              "lines": [
                {
                  "step": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 8}{a_n - 8}$, where $a_0 = 6$ and $a_{n+1} = \\dfrac{13a_n + 8}{a_n + 6}$ for every whole number $n$, $a_n$ has the limit $8$, and no term is $8$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{13a_n + 8}{a_n + 6} - 8$",
                  "reason": "Adding the same number to both sides: $8$ is taken from both sides of the recursion."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{13a_n + 8 - 8a_n - 48}{a_n + 6}$",
                  "reason": "Single fraction: $8 = \\dfrac{8(a_n + 6)}{a_n + 6}$, multiplied out on top."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{5a_n - 40}{a_n + 6}$",
                  "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{5(a_n - 8)}{a_n + 6}$",
                  "reason": "Common factor: $5$ is taken out, since $-40 = 5 \\cdot \\left(-8\\right)$."
                },
                {
                  "step": "$\\dfrac{a_{n+1} - 8}{a_n - 8} = \\dfrac{5}{a_n + 6}$",
                  "reason": "Dividing both sides by a nonzero number: $a_n - 8$ is not $0$, as no term is $8$."
                },
                {
                  "step": "The limit of $\\dfrac{5}{a_n + 6}$ is $\\dfrac{5}{8 + 6} = \\dfrac{5}{14}$.",
                  "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $8$, and the limit of the bottom is not $0$."
                },
                {
                  "step": "The convergence rate is $\\dfrac{5}{14}$.",
                  "reason": "Convergence rate: it is the limit of the quotient in line 6."
                }
              ]
            },
            {
              "prompt": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 8}{a_n - 8}$, where $a_0 = 5$ and $a_{n+1} = \\dfrac{2a_n + 56}{a_n + 1}$ for every whole number $n$, $a_n$ has the limit $8$, and no term is $8$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "-2/3",
              "lines": [
                {
                  "step": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 8}{a_n - 8}$, where $a_0 = 5$ and $a_{n+1} = \\dfrac{2a_n + 56}{a_n + 1}$ for every whole number $n$, $a_n$ has the limit $8$, and no term is $8$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{2a_n + 56}{a_n + 1} - 8$",
                  "reason": "Adding the same number to both sides: $8$ is taken from both sides of the recursion."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{2a_n + 56 - 8a_n - 8}{a_n + 1}$",
                  "reason": "Single fraction: $8 = \\dfrac{8(a_n + 1)}{a_n + 1}$, multiplied out on top."
                },
                {
                  "step": "$a_{n+1} - 8 = \\dfrac{-6a_n + 48}{a_n + 1}$",
                  "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
                },
                {
                  "step": "$a_{n+1} - 8 = -\\dfrac{6(a_n - 8)}{a_n + 1}$",
                  "reason": "Common factor: $-6$ is taken out, since $48 = -6 \\cdot \\left(-8\\right)$."
                },
                {
                  "step": "$\\dfrac{a_{n+1} - 8}{a_n - 8} = -\\dfrac{6}{a_n + 1}$",
                  "reason": "Dividing both sides by a nonzero number: $a_n - 8$ is not $0$, as no term is $8$."
                },
                {
                  "step": "The limit of $-\\dfrac{6}{a_n + 1}$ is $-\\dfrac{6}{8 + 1} = -\\dfrac{2}{3}$.",
                  "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $8$, and the limit of the bottom is not $0$."
                },
                {
                  "step": "The convergence rate is $-\\dfrac{2}{3}$.",
                  "reason": "Convergence rate: it is the limit of the quotient in line 6."
                }
              ]
            },
            {
              "prompt": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 4}{a_n - 4}$, where $a_0 = 7$ and $a_{n+1} = \\dfrac{2a_n + 12}{a_n + 1}$ for every whole number $n$, $a_n$ has the limit $4$, and no term is $4$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "-2/5",
              "lines": [
                {
                  "step": "Find the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 4}{a_n - 4}$, where $a_0 = 7$ and $a_{n+1} = \\dfrac{2a_n + 12}{a_n + 1}$ for every whole number $n$, $a_n$ has the limit $4$, and no term is $4$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{2a_n + 12}{a_n + 1} - 4$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides of the recursion."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{2a_n + 12 - 4a_n - 4}{a_n + 1}$",
                  "reason": "Single fraction: $4 = \\dfrac{4(a_n + 1)}{a_n + 1}$, multiplied out on top."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{-2a_n + 8}{a_n + 1}$",
                  "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
                },
                {
                  "step": "$a_{n+1} - 4 = -\\dfrac{2(a_n - 4)}{a_n + 1}$",
                  "reason": "Common factor: $-2$ is taken out, since $8 = -2 \\cdot \\left(-4\\right)$."
                },
                {
                  "step": "$\\dfrac{a_{n+1} - 4}{a_n - 4} = -\\dfrac{2}{a_n + 1}$",
                  "reason": "Dividing both sides by a nonzero number: $a_n - 4$ is not $0$, as no term is $4$."
                },
                {
                  "step": "The limit of $-\\dfrac{2}{a_n + 1}$ is $-\\dfrac{2}{4 + 1} = -\\dfrac{2}{5}$.",
                  "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $4$, and the limit of the bottom is not $0$."
                },
                {
                  "step": "The convergence rate is $-\\dfrac{2}{5}$.",
                  "reason": "Convergence rate: it is the limit of the quotient in line 6."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the limit of $\\dfrac{a_{n+1} - 8}{(a_n - 8)^2}$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{a_n^2 + 32}{2a_n - 4}$ for every whole number $n$, $a_n$ has the limit $8$, and no term is $8$.",
            "lines": [
              {
                "step": "Find the limit of $\\dfrac{a_{n+1} - 8}{(a_n - 8)^2}$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{a_n^2 + 32}{2a_n - 4}$ for every whole number $n$, $a_n$ has the limit $8$, and no term is $8$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
              },
              {
                "step": "$a_{n+1} - 8 = \\dfrac{a_n^2 + 32}{2a_n - 4} - 8$",
                "reason": "Adding the same number to both sides: $8$ is taken from both sides of the recursion."
              },
              {
                "step": "$a_{n+1} - 8 = \\dfrac{a_n^2 + 32 - 16a_n + 32}{2a_n - 4}$",
                "reason": "Single fraction: $8 = \\dfrac{8(2a_n - 4)}{2a_n - 4}$, multiplied out on top."
              },
              {
                "step": "$a_{n+1} - 8 = \\dfrac{a_n^2 - 16a_n + 64}{2a_n - 4}$",
                "reason": "Collecting like terms: the two numbers on top are joined."
              },
              {
                "step": "$a_{n+1} - 8 = \\dfrac{(a_n - 8)^2}{2a_n - 4}$",
                "reason": "Square of a binomial: $(a_n - 8)^2 = a_n^2 - 16a_n + 64$."
              },
              {
                "step": "$\\dfrac{a_{n+1} - 8}{(a_n - 8)^2} = \\dfrac{1}{2a_n - 4}$",
                "reason": "Dividing both sides by a nonzero number: $(a_n - 8)^2$ is not $0$, as no term is $8$."
              },
              {
                "step": "The limit of $\\dfrac{1}{2a_n - 4}$ is $\\dfrac{1}{2 \\cdot 8 - 4} = \\dfrac{1}{12}$.",
                "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $8$, and the limit of the bottom is not $0$."
              },
              {
                "step": "The limit of $\\dfrac{a_{n+1} - 8}{(a_n - 8)^2}$ is $\\dfrac{1}{12}$.",
                "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the limit of $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{a_n^2 + 54}{2a_n + 3}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "1/15",
              "lines": [
                {
                  "step": "Find the limit of $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{a_n^2 + 54}{2a_n + 3}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 + 54}{2a_n + 3} - 6$",
                  "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
                },
                {
                  "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 + 54 - 12a_n - 18}{2a_n + 3}$",
                  "reason": "Single fraction: $6 = \\dfrac{6(2a_n + 3)}{2a_n + 3}$, multiplied out on top."
                },
                {
                  "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 - 12a_n + 36}{2a_n + 3}$",
                  "reason": "Collecting like terms: the two numbers on top are joined."
                },
                {
                  "step": "$a_{n+1} - 6 = \\dfrac{(a_n - 6)^2}{2a_n + 3}$",
                  "reason": "Square of a binomial: $(a_n - 6)^2 = a_n^2 - 12a_n + 36$."
                },
                {
                  "step": "$\\dfrac{a_{n+1} - 6}{(a_n - 6)^2} = \\dfrac{1}{2a_n + 3}$",
                  "reason": "Dividing both sides by a nonzero number: $(a_n - 6)^2$ is not $0$, as no term is $6$."
                },
                {
                  "step": "The limit of $\\dfrac{1}{2a_n + 3}$ is $\\dfrac{1}{2 \\cdot 6 + 3} = \\dfrac{1}{15}$.",
                  "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
                },
                {
                  "step": "The limit of $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ is $\\dfrac{1}{15}$.",
                  "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
                }
              ]
            },
            {
              "prompt": "Find the limit of $\\dfrac{a_{n+1} - 4}{(a_n - 4)^2}$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{a_n^2 + 12}{2a_n - 1}$ for every whole number $n$, $a_n$ has the limit $4$, and no term is $4$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "1/7",
              "lines": [
                {
                  "step": "Find the limit of $\\dfrac{a_{n+1} - 4}{(a_n - 4)^2}$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{a_n^2 + 12}{2a_n - 1}$ for every whole number $n$, $a_n$ has the limit $4$, and no term is $4$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{a_n^2 + 12}{2a_n - 1} - 4$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides of the recursion."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{a_n^2 + 12 - 8a_n + 4}{2a_n - 1}$",
                  "reason": "Single fraction: $4 = \\dfrac{4(2a_n - 1)}{2a_n - 1}$, multiplied out on top."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{a_n^2 - 8a_n + 16}{2a_n - 1}$",
                  "reason": "Collecting like terms: the two numbers on top are joined."
                },
                {
                  "step": "$a_{n+1} - 4 = \\dfrac{(a_n - 4)^2}{2a_n - 1}$",
                  "reason": "Square of a binomial: $(a_n - 4)^2 = a_n^2 - 8a_n + 16$."
                },
                {
                  "step": "$\\dfrac{a_{n+1} - 4}{(a_n - 4)^2} = \\dfrac{1}{2a_n - 1}$",
                  "reason": "Dividing both sides by a nonzero number: $(a_n - 4)^2$ is not $0$, as no term is $4$."
                },
                {
                  "step": "The limit of $\\dfrac{1}{2a_n - 1}$ is $\\dfrac{1}{2 \\cdot 4 - 1} = \\dfrac{1}{7}$.",
                  "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $4$, and the limit of the bottom is not $0$."
                },
                {
                  "step": "The limit of $\\dfrac{a_{n+1} - 4}{(a_n - 4)^2}$ is $\\dfrac{1}{7}$.",
                  "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
                }
              ]
            },
            {
              "prompt": "Find the limit of $\\dfrac{a_{n+1} - 7}{(a_n - 7)^2}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{a_n^2 + 14}{2a_n - 5}$ for every whole number $n$, $a_n$ has the limit $7$, and no term is $7$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "1/9",
              "lines": [
                {
                  "step": "Find the limit of $\\dfrac{a_{n+1} - 7}{(a_n - 7)^2}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{a_n^2 + 14}{2a_n - 5}$ for every whole number $n$, $a_n$ has the limit $7$, and no term is $7$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_{n+1} - 7 = \\dfrac{a_n^2 + 14}{2a_n - 5} - 7$",
                  "reason": "Adding the same number to both sides: $7$ is taken from both sides of the recursion."
                },
                {
                  "step": "$a_{n+1} - 7 = \\dfrac{a_n^2 + 14 - 14a_n + 35}{2a_n - 5}$",
                  "reason": "Single fraction: $7 = \\dfrac{7(2a_n - 5)}{2a_n - 5}$, multiplied out on top."
                },
                {
                  "step": "$a_{n+1} - 7 = \\dfrac{a_n^2 - 14a_n + 49}{2a_n - 5}$",
                  "reason": "Collecting like terms: the two numbers on top are joined."
                },
                {
                  "step": "$a_{n+1} - 7 = \\dfrac{(a_n - 7)^2}{2a_n - 5}$",
                  "reason": "Square of a binomial: $(a_n - 7)^2 = a_n^2 - 14a_n + 49$."
                },
                {
                  "step": "$\\dfrac{a_{n+1} - 7}{(a_n - 7)^2} = \\dfrac{1}{2a_n - 5}$",
                  "reason": "Dividing both sides by a nonzero number: $(a_n - 7)^2$ is not $0$, as no term is $7$."
                },
                {
                  "step": "The limit of $\\dfrac{1}{2a_n - 5}$ is $\\dfrac{1}{2 \\cdot 7 - 5} = \\dfrac{1}{9}$.",
                  "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $7$, and the limit of the bottom is not $0$."
                },
                {
                  "step": "The limit of $\\dfrac{a_{n+1} - 7}{(a_n - 7)^2}$ is $\\dfrac{1}{9}$.",
                  "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t240-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 9$, $d_0 = 16$, $a_{n+1} = \\dfrac{7a_n + 5d_n}{12}$ and $d_{n+1} = \\dfrac{2a_n + 3d_n}{5}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 9$, $d_0 = 16$, $a_{n+1} = \\dfrac{7a_n + 5d_n}{12}$ and $d_{n+1} = \\dfrac{2a_n + 3d_n}{5}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
              },
              {
                "step": "$d_{n+1} - a_{n+1} = \\dfrac{2a_n + 3d_n}{5} - \\dfrac{7a_n + 5d_n}{12}$",
                "reason": "Recursion: the first recursion is taken from the second."
              },
              {
                "step": "$d_{n+1} - a_{n+1} = \\dfrac{11}{60}(d_n - a_n)$",
                "reason": "Single fraction: over the bottom $60$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{11}{60}$ times $d_n - a_n$."
              },
              {
                "step": "$d_n - a_n = 7\\left(\\dfrac{11}{60}\\right)^n$",
                "reason": "Geometric sequence: the differences have common ratio $\\dfrac{11}{60}$ and start at $d_0 - a_0 = 7$."
              },
              {
                "step": "The powers $\\left(\\dfrac{11}{60}\\right)^n$ have the limit $0$.",
                "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{11}{60}$ lies between $-1$ and $1$."
              },
              {
                "step": "The differences $d_n - a_n$ have the limit $0$.",
                "reason": "A limit passes through sums, products and quotients: line 4 is $7$ times the powers of line 5."
              },
              {
                "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{7}{12} + z \\cdot \\dfrac{2}{5} = x$, so $z = \\dfrac{25}{24}x$; take $x = 24$ and $z = 25$.",
                "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
              },
              {
                "step": "$24a_{n+1} + 25d_{n+1} = 24a_n + 25d_n$",
                "reason": "Collecting like terms: $24$ times the first recursion and $25$ times the second, multiplied out and added."
              },
              {
                "step": "For every whole number $n$, $24a_n + 25d_n = 24a_0 + 25d_0 = 616$.",
                "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
              },
              {
                "step": "$24a_n + 25a_n + 25(d_n - a_n) = 616$",
                "reason": "Multiplying out: $25(d_n - a_n) = 25d_n - 25a_n$, so this is line 9."
              },
              {
                "step": "$49a_n = 616 - 25(d_n - a_n)$",
                "reason": "Adding the same number to both sides: $25(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
              },
              {
                "step": "The limit of $a_n$ is $\\dfrac{616 - 25 \\cdot 0}{49} = \\dfrac{88}{7}$.",
                "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
              },
              {
                "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{88}{7}$.",
                "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 2$, $d_0 = 16$, $a_{n+1} = \\dfrac{8a_n + 9d_n}{17}$ and $d_{n+1} = \\dfrac{a_n + 10d_n}{11}$ for every whole number $n$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "809/58",
              "lines": [
                {
                  "step": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 2$, $d_0 = 16$, $a_{n+1} = \\dfrac{8a_n + 9d_n}{17}$ and $d_{n+1} = \\dfrac{a_n + 10d_n}{11}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
                },
                {
                  "step": "$d_{n+1} - a_{n+1} = \\dfrac{a_n + 10d_n}{11} - \\dfrac{8a_n + 9d_n}{17}$",
                  "reason": "Recursion: the first recursion is taken from the second."
                },
                {
                  "step": "$d_{n+1} - a_{n+1} = \\dfrac{71}{187}(d_n - a_n)$",
                  "reason": "Single fraction: over the bottom $187$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{71}{187}$ times $d_n - a_n$."
                },
                {
                  "step": "$d_n - a_n = 14\\left(\\dfrac{71}{187}\\right)^n$",
                  "reason": "Geometric sequence: the differences have common ratio $\\dfrac{71}{187}$ and start at $d_0 - a_0 = 14$."
                },
                {
                  "step": "The powers $\\left(\\dfrac{71}{187}\\right)^n$ have the limit $0$.",
                  "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{71}{187}$ lies between $-1$ and $1$."
                },
                {
                  "step": "The differences $d_n - a_n$ have the limit $0$.",
                  "reason": "A limit passes through sums, products and quotients: line 4 is $14$ times the powers of line 5."
                },
                {
                  "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{8}{17} + z \\cdot \\dfrac{1}{11} = x$, so $z = \\dfrac{99}{17}x$; take $x = 17$ and $z = 99$.",
                  "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
                },
                {
                  "step": "$17a_{n+1} + 99d_{n+1} = 17a_n + 99d_n$",
                  "reason": "Collecting like terms: $17$ times the first recursion and $99$ times the second, multiplied out and added."
                },
                {
                  "step": "For every whole number $n$, $17a_n + 99d_n = 17a_0 + 99d_0 = 1618$.",
                  "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
                },
                {
                  "step": "$17a_n + 99a_n + 99(d_n - a_n) = 1618$",
                  "reason": "Multiplying out: $99(d_n - a_n) = 99d_n - 99a_n$, so this is line 9."
                },
                {
                  "step": "$116a_n = 1618 - 99(d_n - a_n)$",
                  "reason": "Adding the same number to both sides: $99(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
                },
                {
                  "step": "The limit of $a_n$ is $\\dfrac{1618 - 99 \\cdot 0}{116} = \\dfrac{809}{58}$.",
                  "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
                },
                {
                  "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{809}{58}$.",
                  "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
                }
              ]
            },
            {
              "prompt": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 6$, $d_0 = 20$, $a_{n+1} = \\dfrac{9a_n + d_n}{10}$ and $d_{n+1} = \\dfrac{7a_n + 6d_n}{13}$ for every whole number $n$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "680/83",
              "lines": [
                {
                  "step": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 6$, $d_0 = 20$, $a_{n+1} = \\dfrac{9a_n + d_n}{10}$ and $d_{n+1} = \\dfrac{7a_n + 6d_n}{13}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
                },
                {
                  "step": "$d_{n+1} - a_{n+1} = \\dfrac{7a_n + 6d_n}{13} - \\dfrac{9a_n + d_n}{10}$",
                  "reason": "Recursion: the first recursion is taken from the second."
                },
                {
                  "step": "$d_{n+1} - a_{n+1} = \\dfrac{47}{130}(d_n - a_n)$",
                  "reason": "Single fraction: over the bottom $130$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{47}{130}$ times $d_n - a_n$."
                },
                {
                  "step": "$d_n - a_n = 14\\left(\\dfrac{47}{130}\\right)^n$",
                  "reason": "Geometric sequence: the differences have common ratio $\\dfrac{47}{130}$ and start at $d_0 - a_0 = 14$."
                },
                {
                  "step": "The powers $\\left(\\dfrac{47}{130}\\right)^n$ have the limit $0$.",
                  "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{47}{130}$ lies between $-1$ and $1$."
                },
                {
                  "step": "The differences $d_n - a_n$ have the limit $0$.",
                  "reason": "A limit passes through sums, products and quotients: line 4 is $14$ times the powers of line 5."
                },
                {
                  "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{9}{10} + z \\cdot \\dfrac{7}{13} = x$, so $z = \\dfrac{13}{70}x$; take $x = 70$ and $z = 13$.",
                  "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
                },
                {
                  "step": "$70a_{n+1} + 13d_{n+1} = 70a_n + 13d_n$",
                  "reason": "Collecting like terms: $70$ times the first recursion and $13$ times the second, multiplied out and added."
                },
                {
                  "step": "For every whole number $n$, $70a_n + 13d_n = 70a_0 + 13d_0 = 680$.",
                  "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
                },
                {
                  "step": "$70a_n + 13a_n + 13(d_n - a_n) = 680$",
                  "reason": "Multiplying out: $13(d_n - a_n) = 13d_n - 13a_n$, so this is line 9."
                },
                {
                  "step": "$83a_n = 680 - 13(d_n - a_n)$",
                  "reason": "Adding the same number to both sides: $13(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
                },
                {
                  "step": "The limit of $a_n$ is $\\dfrac{680 - 13 \\cdot 0}{83} = \\dfrac{680}{83}$.",
                  "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
                },
                {
                  "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{680}{83}$.",
                  "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
                }
              ]
            },
            {
              "prompt": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 15$, $d_0 = 6$, $a_{n+1} = \\dfrac{a_n + 5d_n}{6}$ and $d_{n+1} = \\dfrac{2a_n + 11d_n}{13}$ for every whole number $n$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "570/77",
              "lines": [
                {
                  "step": "Find the number that $a_n$ and $d_n$ both have as their limit, where $a_0 = 15$, $d_0 = 6$, $a_{n+1} = \\dfrac{a_n + 5d_n}{6}$ and $d_{n+1} = \\dfrac{2a_n + 11d_n}{13}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
                },
                {
                  "step": "$d_{n+1} - a_{n+1} = \\dfrac{2a_n + 11d_n}{13} - \\dfrac{a_n + 5d_n}{6}$",
                  "reason": "Recursion: the first recursion is taken from the second."
                },
                {
                  "step": "$d_{n+1} - a_{n+1} = \\dfrac{1}{78}(d_n - a_n)$",
                  "reason": "Single fraction: over the bottom $78$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{1}{78}$ times $d_n - a_n$."
                },
                {
                  "step": "$d_n - a_n = -9\\left(\\dfrac{1}{78}\\right)^n$",
                  "reason": "Geometric sequence: the differences have common ratio $\\dfrac{1}{78}$ and start at $d_0 - a_0 = -9$."
                },
                {
                  "step": "The powers $\\left(\\dfrac{1}{78}\\right)^n$ have the limit $0$.",
                  "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{1}{78}$ lies between $-1$ and $1$."
                },
                {
                  "step": "The differences $d_n - a_n$ have the limit $0$.",
                  "reason": "A limit passes through sums, products and quotients: line 4 is $-9$ times the powers of line 5."
                },
                {
                  "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{1}{6} + z \\cdot \\dfrac{2}{13} = x$, so $z = \\dfrac{65}{12}x$; take $x = 12$ and $z = 65$.",
                  "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
                },
                {
                  "step": "$12a_{n+1} + 65d_{n+1} = 12a_n + 65d_n$",
                  "reason": "Collecting like terms: $12$ times the first recursion and $65$ times the second, multiplied out and added."
                },
                {
                  "step": "For every whole number $n$, $12a_n + 65d_n = 12a_0 + 65d_0 = 570$.",
                  "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
                },
                {
                  "step": "$12a_n + 65a_n + 65(d_n - a_n) = 570$",
                  "reason": "Multiplying out: $65(d_n - a_n) = 65d_n - 65a_n$, so this is line 9."
                },
                {
                  "step": "$77a_n = 570 - 65(d_n - a_n)$",
                  "reason": "Adding the same number to both sides: $65(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
                },
                {
                  "step": "The limit of $a_n$ is $\\dfrac{570 - 65 \\cdot 0}{77} = \\dfrac{570}{77}$.",
                  "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
                },
                {
                  "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{570}{77}$.",
                  "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t240-p1",
      "method": "induction",
      "statement": "For a number $c > 0$, let $m$ be the positive root of $x^2 = x + c$. The sequence with $a_0 = 0$ and $a_{n+1} = \\sqrt{c + a_n}$ for every whole number $n$ increases, and $a_n < m$ for every whole number $n$.",
      "idea": "Each claim passes from one term to the next because adding $c$ and taking the square root both keep the order of two numbers; $m$ is the number the square root sends to itself.",
      "lines": [
        {
          "line": "$a_1 = \\sqrt{c} > 0 = a_0$",
          "reason": "Base case: $c > 0$, and the positive square root of a number above $0$ is above $0$."
        },
        {
          "line": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
          "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
        },
        {
          "line": "$c + a_k < c + a_{k+1}$",
          "reason": "Adding the same number: $c$ is added to both sides of line 2."
        },
        {
          "line": "$\\sqrt{c + a_k} < \\sqrt{c + a_{k+1}}$",
          "reason": "Powers and roots of positive numbers keep the order: both sides of line 3 are above $0$."
        },
        {
          "line": "$a_{k+1} < a_{k+2}$",
          "reason": "Recursion: the two sides of line 4 are $a_{k+1}$ and $a_{k+2}$."
        },
        {
          "line": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
          "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 5."
        },
        {
          "line": "$a_0 = 0 < m$",
          "reason": "Base case: $m$ is positive."
        },
        {
          "line": "Assume that $a_k < m$ for some whole number $k$.",
          "reason": "Inductive assumption: the claim $a_n < m$ for $n = k$."
        },
        {
          "line": "$c + a_k < c + m$",
          "reason": "Adding the same number: $c$ is added to both sides of line 8."
        },
        {
          "line": "$c + m = m^2$",
          "reason": "A root satisfies its equation: $m$ is a root of $x^2 = x + c$."
        },
        {
          "line": "$\\sqrt{c + a_k} < \\sqrt{m^2}$",
          "reason": "Powers and roots of positive numbers keep the order: lines 9 and 10."
        },
        {
          "line": "$a_{k+1} < m$",
          "reason": "Recursion: the left side of line 11 is $a_{k+1}$, and $\\sqrt{m^2} = m$ since $m > 0$."
        },
        {
          "line": "So $a_n < m$ for every whole number $n$.",
          "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 12."
        }
      ]
    },
    {
      "id": "t240-p2",
      "method": "direct proof",
      "statement": "For a number $c > 0$, let $m$ be the positive root of $x^2 = x + c$. The sequence with $a_0 = 0$ and $a_{n+1} = \\sqrt{c + a_n}$ for every whole number $n$ has the limit $m$ and the convergence rate $\\dfrac{1}{2m}$.",
      "idea": "The sequence increases and stays below $m$, so it has a limit; the limit satisfies the squared recursion, which leaves only $m$; the difference of squares then turns the distance to $m$ at one step into a multiple of the distance at the step before.",
      "lines": [
        {
          "line": "The numbers $a_n$ have a limit $y$.",
          "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $m$ (t240-p1)."
        },
        {
          "line": "$y = \\sqrt{c + y}$",
          "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
        },
        {
          "line": "$y^2 = c + y$",
          "reason": "Raising both sides to a power: both sides of line 2 are squared."
        },
        {
          "line": "$y \\ge 0$",
          "reason": "A limit stays within a bound: no term is below $0$."
        },
        {
          "line": "$y = m$",
          "reason": "A quadratic has at most two roots: the roots of $x^2 = x + c$ have the product $-c$, below $0$, so $m$ is the only one not below $0$."
        },
        {
          "line": "$a_{n+1}^2 = c + a_n$",
          "reason": "Raising both sides to a power: both sides of the recursion are squared."
        },
        {
          "line": "$a_{n+1} - m = \\dfrac{a_{n+1}^2 - m^2}{a_{n+1} + m}$",
          "reason": "Difference of squares: $(a_{n+1} - m)(a_{n+1} + m) = a_{n+1}^2 - m^2$, and $a_{n+1} + m > 0$."
        },
        {
          "line": "$a_{n+1} - m = \\dfrac{a_n - m}{a_{n+1} + m}$",
          "reason": "A root satisfies its equation: $m^2 = c + m$, and line 6 gives $a_{n+1}^2 - m^2 = a_n - m$."
        },
        {
          "line": "$\\dfrac{a_{n+1} - m}{a_n - m} = \\dfrac{1}{a_{n+1} + m}$",
          "reason": "Dividing both sides by a nonzero number: $a_n - m$ is not $0$, since $a_n < m$ (t240-p1)."
        },
        {
          "line": "The limit of $\\dfrac{1}{a_{n+1} + m}$ is $\\dfrac{1}{2m}$.",
          "reason": "A limit passes through products and quotients of sequences: $a_{n+1}$ has the limit $m$, and $2m \\ne 0$."
        },
        {
          "line": "So the convergence rate is $\\dfrac{1}{2m}$.",
          "reason": "Convergence rate: it is the limit of the quotient in line 9."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t240-s1",
      "method": "direct proof",
      "statement": "Prove that for a number $x \\ge 0$, a sequence with $a_n \\ge 0$ and $a_{n+1} = \\sqrt{x + a_n}$ for every whole number $n$ and with the limit $9$ has $x = 72$. Facts it may use: limit satisfies the recursion, raising both sides to a power, adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "$9 = \\sqrt{x + 9}$",
            "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $9$."
          },
          {
            "line": "$81 = x + 9$",
            "reason": "Raising both sides to a power: both sides of line 1 are squared."
          },
          {
            "line": "$x = 72$",
            "reason": "Adding the same number to both sides: $9$ is taken from both sides."
          }
        ]
      }
    },
    {
      "id": "t240-s2",
      "method": "induction",
      "statement": "Prove that for every whole number $n$, the equation $f_n(x) = 2x$ has the one solution $x = 4$, where $f_0(x) = 8$ and $f_{n+1}(x) = \\sqrt{x^2 + 6f_n(x)}$ for every whole number $n$ and every number $x$. Facts it may use: recursion, induction, base case, inductive assumption, inductive step, powers and roots of positive numbers keep the order, multiplying by a positive number, adding the same number, a product is positive when its factors have the same sign.",
      "check": {
        "proof": [
          {
            "line": "For every number $x$, $f_0(x) = 8 > 0$.",
            "reason": "Base case: $f_0$ is $8$ for every number $x$."
          },
          {
            "line": "Assume that $f_k(x) > 0$ for every number $x$, for some whole number $k$.",
            "reason": "Inductive assumption: the claim for $n = k$."
          },
          {
            "line": "For every number $x$, $f_{k+1}(x) = \\sqrt{x^2 + 6f_k(x)} > 0$.",
            "reason": "Powers and roots of positive numbers keep the order: $x^2 + 6f_k(x) > 0$ by line 2."
          },
          {
            "line": "For every whole number $n$ and every number $x$, $f_n(x) > 0$.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 and 3."
          },
          {
            "line": "For $x \\le 0$, $f_n(x) > 0 \\ge 2x$, so no number $x \\le 0$ is a solution.",
            "reason": "Multiplying by a positive number: $x \\le 0$ gives $2x \\le 0$, and line 4."
          },
          {
            "line": "Claim for $x > 0$: $f_n(x) < 2x$ when $x > 4$, $f_n(4) = 8$, and $f_n(x) > 2x$ when $x < 4$.",
            "reason": "Induction: the claim on $n$ that lines 7 to 18 prove."
          },
          {
            "line": "At $n = 0$, $f_0(x) = 8$, below $2x$ for $x > 4$ and above $2x$ for $x < 4$.",
            "reason": "Base case: $2x > 8$ exactly when $x > 4$."
          },
          {
            "line": "Assume the claim for $n = k$, for some whole number $k$.",
            "reason": "Inductive assumption: the three parts of line 6 for $f_k$."
          },
          {
            "line": "$f_{k+1}(4) = \\sqrt{16 + 6 \\cdot 8} = 8$",
            "reason": "Recursion: line 8 gives $f_k(4) = 8$, and $\\sqrt{64} = 8$."
          },
          {
            "line": "For $x > 4$, $6f_k(x) < 12x$.",
            "reason": "Multiplying by a positive number: $f_k(x) < 2x$ (line 8) is multiplied by $6$."
          },
          {
            "line": "For $x > 4$, $x^2 + 6f_k(x) < x^2 + 12x$.",
            "reason": "Adding the same number: $x^2$ is added to both sides."
          },
          {
            "line": "For $x > 4$, $x^2 + 12x < 4x^2$.",
            "reason": "A product is positive when its factors have the same sign: $4x^2 - x^2 - 12x = 3x(x - 4)$, with $3x > 0$ and $x - 4 > 0$."
          },
          {
            "line": "For $x > 4$, $f_{k+1}(x) < \\sqrt{4x^2} = 2x$.",
            "reason": "Powers and roots of positive numbers keep the order: lines 11 and 12, and $\\sqrt{4x^2} = 2x$ for $x > 0$."
          },
          {
            "line": "For $0 < x < 4$, $6f_k(x) > 12x$.",
            "reason": "Multiplying by a positive number: $f_k(x) > 2x$ (line 8) is multiplied by $6$."
          },
          {
            "line": "For $0 < x < 4$, $x^2 + 6f_k(x) > x^2 + 12x$.",
            "reason": "Adding the same number: $x^2$ is added to both sides."
          },
          {
            "line": "For $0 < x < 4$, $x^2 + 12x > 4x^2$.",
            "reason": "A product is positive when its factors have the same sign: $3x(x - 4) < 0$, its factors of opposite sign."
          },
          {
            "line": "For $0 < x < 4$, $f_{k+1}(x) > \\sqrt{4x^2} = 2x$.",
            "reason": "Powers and roots of positive numbers keep the order: lines 15 and 16."
          },
          {
            "line": "The claim holds for $n = k + 1$.",
            "reason": "Inductive step: lines 9, 13 and 17."
          },
          {
            "line": "So $f_n(x) = 2x$ exactly when $x = 4$, for every whole number $n$.",
            "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 18; line 5 covers $x \\le 0$."
          }
        ]
      }
    },
    {
      "id": "t240-s3",
      "method": "direct proof",
      "statement": "Prove that the sums $s_n = 1 + \\dfrac{1}{2^2} + \\dfrac{1}{3^2} + \\dots + \\dfrac{1}{n^2}$, for whole numbers $n$ from $1$ up, have a limit. Facts it may use: monotone sequence, bounded sequence, Monotone bounded sequences converge, partial fractions, telescoping sum, reciprocals of numbers of the same sign reverse the order, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "$s_{n+1} - s_n = \\dfrac{1}{(n + 1)^2} > 0$",
            "reason": "Monotone sequence: each sum adds one more positive term, so the sums increase."
          },
          {
            "line": "For each whole number $k$ from $2$ up, $\\dfrac{1}{k^2} < \\dfrac{1}{(k - 1)k}$.",
            "reason": "Reciprocals of numbers of the same sign reverse the order: $k^2 > (k - 1)k > 0$."
          },
          {
            "line": "$\\dfrac{1}{(k - 1)k} = \\dfrac{1}{k - 1} - \\dfrac{1}{k}$",
            "reason": "Partial fractions: $\\dfrac{1}{k - 1} - \\dfrac{1}{k} = \\dfrac{k - (k - 1)}{(k - 1)k}$."
          },
          {
            "line": "For $n \\ge 2$, $s_n < 1 + \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\dots + \\left(\\dfrac{1}{n - 1} - \\dfrac{1}{n}\\right)$.",
            "reason": "Adding two inequalities: lines 2 and 3 for $k$ from $2$ to $n$, added."
          },
          {
            "line": "For $n \\ge 2$, $s_n < 2 - \\dfrac{1}{n}$.",
            "reason": "Telescoping sum: each $\\dfrac{1}{k}$ is added once and taken once, leaving $1 + 1 - \\dfrac{1}{n}$."
          },
          {
            "line": "For every whole number $n$ from $1$ up, $s_n < 2$.",
            "reason": "Bounded sequence: line 5, and $s_1 = 1$."
          },
          {
            "line": "So the sums $s_n$ have a limit.",
            "reason": "Monotone bounded sequences converge: lines 1 and 6."
          }
        ]
      }
    },
    {
      "id": "t240-s4",
      "method": "induction",
      "statement": "Prove that the sequence with $a_0 = 5$ and $a_{n+1} = \\sqrt{2a_n + 3}$ for every whole number $n$ decreases, and that $a_n > 3$ for every whole number $n$. Facts it may use: recursion, induction, base case, inductive assumption, powers and roots of positive numbers keep the order, multiplying by a positive number, adding the same number, monotone sequence, bounded sequence.",
      "check": {
        "proof": [
          {
            "line": "$a_1 = \\sqrt{13} < \\sqrt{25} = 5 = a_0$",
            "reason": "Base case: $n = 0$, and powers and roots of positive numbers keep the order."
          },
          {
            "line": "Assume that $a_{k+1} < a_k$ for some whole number $k$.",
            "reason": "Inductive assumption: the claim $a_{n+1} < a_n$ for $n = k$."
          },
          {
            "line": "$2a_{k+1} < 2a_k$",
            "reason": "Multiplying by a positive number: line 2 is multiplied by $2$."
          },
          {
            "line": "$2a_{k+1} + 3 < 2a_k + 3$",
            "reason": "Adding the same number: $3$ is added to both sides."
          },
          {
            "line": "$a_{k+2} < a_{k+1}$",
            "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 4."
          },
          {
            "line": "So $a_{n+1} < a_n$ for every whole number $n$: the sequence decreases.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 5."
          },
          {
            "line": "$a_0 = 5 > 3$",
            "reason": "Base case: the bound $3$ at $n = 0$."
          },
          {
            "line": "Assume that $a_k > 3$ for some whole number $k$.",
            "reason": "Inductive assumption: the claim $a_n > 3$ for $n = k$."
          },
          {
            "line": "$2a_k > 6$",
            "reason": "Multiplying by a positive number: line 8 is multiplied by $2$."
          },
          {
            "line": "$2a_k + 3 > 6 + 3 = 9$",
            "reason": "Adding the same number: $3$ is added to both sides."
          },
          {
            "line": "$a_{k+1} > \\sqrt{9} = 3$",
            "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10."
          },
          {
            "line": "So $a_n > 3$ for every whole number $n$.",
            "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
          }
        ]
      }
    },
    {
      "id": "t240-s5",
      "method": "direct proof",
      "statement": "Prove that the sequence with $a_0 = 5$ and $a_{n+1} = \\sqrt{2a_n + 3}$ for every whole number $n$, which decreases and has $a_n > 3$ for every whole number $n$, has the limit $3$ and the convergence rate $\\dfrac{1}{3}$. Facts it may use: Monotone bounded sequences converge, limit satisfies the recursion, raising both sides to a power, recursion, common factor, dividing both sides by a nonzero number, convergence rate, A limit stays within a bound, factoring a quadratic, zero-product property, difference of squares, A limit passes through products and quotients of sequences.",
      "check": {
        "proof": [
          {
            "line": "The numbers $a_n$ have a limit $y$.",
            "reason": "Monotone bounded sequences converge: the sequence decreases and is bounded below by $3$."
          },
          {
            "line": "$y = \\sqrt{2y + 3}$",
            "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
          },
          {
            "line": "$y^2 = 2y + 3$",
            "reason": "Raising both sides to a power: both sides of line 2 are squared."
          },
          {
            "line": "$(y - 3)(y + 1) = 0$",
            "reason": "Factoring a quadratic: $y^2 - 2y - 3 = (y - 3)(y + 1)$."
          },
          {
            "line": "$y \\ge 3$",
            "reason": "A limit stays within a bound: every term is above $3$."
          },
          {
            "line": "$y = 3$",
            "reason": "Zero-product property: line 4 leaves $3$ and $-1$, and line 5 rules out $-1$."
          },
          {
            "line": "$a_{n+1}^2 = 2a_n + 3$",
            "reason": "Raising both sides to a power: both sides of the recursion are squared."
          },
          {
            "line": "$a_{n+1} - 3 = \\dfrac{a_{n+1}^2 - 9}{a_{n+1} + 3}$",
            "reason": "Difference of squares: $(a_{n+1} - 3)(a_{n+1} + 3) = a_{n+1}^2 - 9$, and $a_{n+1} + 3 > 0$."
          },
          {
            "line": "$a_{n+1} - 3 = \\dfrac{2a_n - 6}{a_{n+1} + 3}$",
            "reason": "Recursion: line 7 gives $a_{n+1}^2 - 9 = 2a_n - 6$."
          },
          {
            "line": "$a_{n+1} - 3 = \\dfrac{2(a_n - 3)}{a_{n+1} + 3}$",
            "reason": "Common factor: $2$ is taken out of $2a_n - 6$."
          },
          {
            "line": "$\\dfrac{a_{n+1} - 3}{a_n - 3} = \\dfrac{2}{a_{n+1} + 3}$",
            "reason": "Dividing both sides by a nonzero number: $a_n - 3 > 0$."
          },
          {
            "line": "The limit of $\\dfrac{2}{a_{n+1} + 3}$ is $\\dfrac{2}{3 + 3} = \\dfrac{1}{3}$.",
            "reason": "A limit passes through products and quotients of sequences: $a_{n+1}$ has the limit $3$, and $6 \\ne 0$."
          },
          {
            "line": "So the convergence rate is $\\dfrac{1}{3}$.",
            "reason": "Convergence rate: it is the limit of the quotient in line 11."
          }
        ]
      }
    }
  ]
}
