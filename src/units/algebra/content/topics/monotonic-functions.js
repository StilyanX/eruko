export default {
  "number": 218,
  "title": "Monotonic functions",
  "section": 14,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "497-503"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Decide whether $f(x) = 4x^3 + 9x - 5$ gives a greater output for every greater input.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 4x^3 + 9x - 5$ gives a greater output for every greater input.",
      "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(4(x + c)^3 + 9(x + c) - 5\\right) - \\left(4x^3 + 9x - 5\\right)$.",
      "$f(x + c) - f(x) = 12cx^2 + 12c^2x + 4c^3 + 9c$",
      "$f(x + c) - f(x) = c\\left(12x^2 + 12cx + 4c^2 + 9\\right)$",
      "$12x^2 + 12cx + 4c^2 + 9 = 12\\left(x + \\dfrac{c}{2}\\right)^2 + c^2 + 9$",
      "For every $x$ and every $c > 0$ the bracket is positive.",
      "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
      "Yes: a greater input always gives a greater output."
    ]
  },
  "ideas": [
    {
      "name": "Monotonically increasing",
      "concrete": "For $f(x) = 4x - 9$, the inputs $2$ and $5$ give $f(2) = -1$ and $f(5) = 11$: the greater input gives the greater output.",
      "general": "A function $f$ is **monotonically increasing** when $f(a) > f(b)$ for all numbers $a$ and $b$ in its domain with $a > b$. It is monotonically increasing on a part of its domain, such as an interval, when this holds for all $a > b$ in that part. The word \"increasing\" alone means the same. The graph of such a function rises from left to right."
    },
    {
      "name": "Monotonically decreasing",
      "concrete": "For $f(x) = 7 - 3x$, the inputs $1$ and $4$ give $f(1) = 4$ and $f(4) = -5$: the greater input gives the smaller output.",
      "general": "A function $f$ is **monotonically decreasing** when $f(a) < f(b)$ for all numbers $a$ and $b$ in its domain with $a > b$. It is monotonically decreasing on a part of its domain when this holds for all $a > b$ in that part. The word \"decreasing\" alone means the same. The graph of such a function falls from left to right."
    },
    {
      "name": "Difference test",
      "concrete": "For $f(x) = x^2$ on the domain $x \\ge 0$ and a number $c > 0$, the difference $f(x + c) - f(x) = 2cx + c^2$ is positive for every $x \\ge 0$. Moving an input to the right by $c$ always raises the output, so $f$ is monotonically increasing on $x \\ge 0$.",
      "general": "Let $f$ be a function. If $f(x + c) - f(x) > 0$ for every number $c > 0$ and all numbers $x$ and $x + c$ in the domain of $f$, then $f$ is monotonically increasing. If $f(x + c) - f(x) < 0$ for every number $c > 0$ and all such $x$ and $x + c$, then $f$ is monotonically decreasing. On a part of the domain the test reads the same, with $x$ and $x + c$ in that part. This is the **Difference test**."
    },
    {
      "name": "Monotonic functions are one-to-one",
      "concrete": "The function $f(x) = 5^x + x$ is monotonically increasing, and $f(2) = 27$. An input above $2$ gives an output above $27$, and an input below $2$ gives an output below $27$, so $2$ is the only solution of $5^x + x = 27$.",
      "general": "A function that is monotonically increasing or monotonically decreasing is **monotonic**. A monotonic function $f$ never gives one output for two different inputs: if $a$ and $b$ are in its domain and $a \\ne b$, then $f(a) \\ne f(b)$. So for each number $d$ the equation $f(x) = d$ has at most one solution, and a solution that is found is the only one. Since no two inputs share an output, a monotonic function has an inverse function, whose domain is the range of $f$."
    },
    {
      "name": "Exponential function is increasing",
      "concrete": "Since $2^3 = 8$ and $2^5 = 32$, the greater exponent gives the greater power.",
      "general": "For a number $a$ greater than 1 and real numbers $m$ and $n$ with $m > n$, $a^m > a^n$: the exponential function $a^x$ is monotonically increasing."
    },
    {
      "name": "Logarithm is increasing",
      "concrete": "The numbers $25$ and $625$ have the logarithms $\\log_{5}{25} = 2$ and $\\log_{5}{625} = 4$: the greater number has the greater logarithm.",
      "general": "For a number $a$ greater than 1, the function $\\log_a x$ is monotonically increasing on the positive numbers: if $x > y > 0$, then $\\log_a x > \\log_a y$. So for a positive expression $u$, the logarithm $\\log_a u$ is greatest where $u$ is greatest and least where $u$ is least."
    }
  ],
  "kinds": [
    {
      "id": "t218-k1",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $f(x) = 2x^3 + 5x - 1$ is monotonically increasing.",
            "lines": [
              {
                "step": "Decide whether $f(x) = 2x^3 + 5x - 1$ is monotonically increasing.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(2(x + c)^3 + 5(x + c) - 1\\right) - \\left(2x^3 + 5x - 1\\right)$.",
                "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
              },
              {
                "step": "$f(x + c) - f(x) = 6cx^2 + 6c^2x + 2c^3 + 5c$",
                "reason": "Multiplying out: $(x + c)^3 = x^3 + 3cx^2 + 3c^2x + c^3$, and the terms without $c$ cancel."
              },
              {
                "step": "$f(x + c) - f(x) = c\\left(6x^2 + 6cx + 2c^2 + 5\\right)$",
                "reason": "Factoring: each term has the factor $c$."
              },
              {
                "step": "$6x^2 + 6cx + 2c^2 + 5 = 6\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{c^2}{2} + 5$",
                "reason": "Completing the square: the terms $6x^2 + 6cx$ are $6\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{3c^2}{2}$."
              },
              {
                "step": "For every $x$ and every $c > 0$ the bracket is positive.",
                "reason": "Trivial Inequality: the square is at least $0$, so the first term is at least $0$, and $\\dfrac{c^2}{2}$ and $5$ are positive."
              },
              {
                "step": "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: the factor $c$ is positive, and the bracket is positive."
              },
              {
                "step": "Yes: $f$ is monotonically increasing.",
                "reason": "Difference test: the difference $f(x + c) - f(x)$ is positive for every $x$ and every $c > 0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $f(x) = -3x^3 - 4x + 6$ is monotonically decreasing.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $f(x) = -3x^3 - 4x + 6$ is monotonically decreasing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-3(x + c)^3 - 4(x + c) + 6\\right) - \\left(-3x^3 - 4x + 6\\right)$.",
                  "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
                },
                {
                  "step": "$f(x + c) - f(x) = -9cx^2 - 9c^2x - 3c^3 - 4c$",
                  "reason": "Multiplying out: $(x + c)^3 = x^3 + 3cx^2 + 3c^2x + c^3$, and the terms without $c$ cancel."
                },
                {
                  "step": "$f(x + c) - f(x) = c\\left(-9x^2 - 9cx - 3c^2 - 4\\right)$",
                  "reason": "Factoring: each term has the factor $c$."
                },
                {
                  "step": "$-9x^2 - 9cx - 3c^2 - 4 = -9\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{3c^2}{4} - 4$",
                  "reason": "Completing the square: the terms $-9x^2 - 9cx$ are $-9\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{9c^2}{4}$."
                },
                {
                  "step": "For every $x$ and every $c > 0$ the bracket is negative.",
                  "reason": "Trivial Inequality: the square is at least $0$, so the first term is at most $0$, and $-\\dfrac{3c^2}{4}$ and $-4$ are negative."
                },
                {
                  "step": "So $f(x + c) - f(x) < 0$ for every $x$ and every $c > 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the factor $c$ is positive, and the bracket is negative."
                },
                {
                  "step": "Yes: $f$ is monotonically decreasing.",
                  "reason": "Difference test: the difference $f(x + c) - f(x)$ is negative for every $x$ and every $c > 0$."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = 2x^3 - 18x + 7$ is monotonically increasing.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 2x^3 - 18x + 7$ is monotonically increasing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(2(x + c)^3 - 18(x + c) + 7\\right) - \\left(2x^3 - 18x + 7\\right)$.",
                  "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
                },
                {
                  "step": "$f(x + c) - f(x) = 6cx^2 + 6c^2x + 2c^3 - 18c$",
                  "reason": "Multiplying out: $(x + c)^3 = x^3 + 3cx^2 + 3c^2x + c^3$, and the terms without $c$ cancel."
                },
                {
                  "step": "$f(x + c) - f(x) = c\\left(6x^2 + 6cx + 2c^2 - 18\\right)$",
                  "reason": "Factoring: each term has the factor $c$."
                },
                {
                  "step": "$6x^2 + 6cx + 2c^2 - 18 = 6\\left(x + \\dfrac{c}{2}\\right)^2 + \\dfrac{c^2}{2} - 18$",
                  "reason": "Completing the square: the terms $6x^2 + 6cx$ are $6\\left(x + \\dfrac{c}{2}\\right)^2 - \\dfrac{3c^2}{2}$."
                },
                {
                  "step": "At $x = 0$ the bracket is $2c^2 - 18$, which is $0$ at $c = 3$.",
                  "reason": "Substituting a value: $2 \\cdot 3^2 - 18 = 0$."
                },
                {
                  "step": "So $f(3) - f(0) = 0$: the inputs $0$ and $3$ give the same output, $7$.",
                  "reason": "Substituting a value: the difference is $c$ times the bracket, with $x = 0$ and $c = 3$."
                },
                {
                  "step": "No: the greater input $3$ does not give a greater output than the input $0$.",
                  "reason": "Monotonically increasing: a greater input must give a greater output."
                }
              ]
            },
            {
              "prompt": "Decide whether $f(x) = 4x^3 + 7x + 3$ is monotonically decreasing.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $f(x) = 4x^3 + 7x + 3$ is monotonically decreasing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(4(x + c)^3 + 7(x + c) + 3\\right) - \\left(4x^3 + 7x + 3\\right)$.",
                  "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
                },
                {
                  "step": "$f(x + c) - f(x) = 12cx^2 + 12c^2x + 4c^3 + 7c$",
                  "reason": "Multiplying out: $(x + c)^3 = x^3 + 3cx^2 + 3c^2x + c^3$, and the terms without $c$ cancel."
                },
                {
                  "step": "$f(x + c) - f(x) = c\\left(12x^2 + 12cx + 4c^2 + 7\\right)$",
                  "reason": "Factoring: each term has the factor $c$."
                },
                {
                  "step": "$12x^2 + 12cx + 4c^2 + 7 = 12\\left(x + \\dfrac{c}{2}\\right)^2 + c^2 + 7$",
                  "reason": "Completing the square: the terms $12x^2 + 12cx$ are $12\\left(x + \\dfrac{c}{2}\\right)^2 - 3c^2$."
                },
                {
                  "step": "For every $x$ and every $c > 0$ the bracket is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, so the first term is at least $0$, and $c^2$ and $7$ are positive."
                },
                {
                  "step": "So $f(x + c) - f(x) > 0$ for every $x$ and every $c > 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the factor $c$ is positive, and the bracket is positive."
                },
                {
                  "step": "No: $f$ is monotonically increasing, so a greater input gives a greater output.",
                  "reason": "Difference test: the difference $f(x + c) - f(x)$ is positive for every $x$ and every $c > 0$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t218-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the largest interval on which $f(x) = 3x^2 - 12x + 5$ is monotonically increasing.",
            "lines": [
              {
                "step": "Find the largest interval on which $f(x) = 3x^2 - 12x + 5$ is monotonically increasing.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(3(x + c)^2 - 12(x + c) + 5\\right) - \\left(3x^2 - 12x + 5\\right)$.",
                "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
              },
              {
                "step": "$f(x + c) - f(x) = 6cx + 3c^2 - 12c$",
                "reason": "Multiplying out: $(x + c)^2 = x^2 + 2cx + c^2$, and the terms without $c$ cancel."
              },
              {
                "step": "$f(x + c) - f(x) = c(6x + 3c - 12)$",
                "reason": "Factoring: each term has the factor $c$."
              },
              {
                "step": "$6x + 3c - 12 = 3\\left(x - 2\\right) + 3\\left(x + c - 2\\right)$",
                "reason": "Multiplying out: the right side multiplies out to the left side."
              },
              {
                "step": "For $x \\ge 2$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x - 2 \\ge 0$ and $x + c - 2 > 0$, the number $3$ is positive and $c$ is positive."
              },
              {
                "step": "For $x + c \\le 2$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x - 2 < 0$ and $x + c - 2 \\le 0$, the number $3$ is positive and $c$ is positive."
              },
              {
                "step": "The largest interval is $[2, \\infty)$.",
                "reason": "Difference test: $f$ is monotonically increasing on $x \\ge 2$ and monotonically decreasing on $x \\le 2$, so no larger interval will do."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the largest interval on which $f(x) = -2x^2 - 12x + 7$ is monotonically increasing.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -3]",
              "lines": [
                {
                  "step": "Find the largest interval on which $f(x) = -2x^2 - 12x + 7$ is monotonically increasing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-2(x + c)^2 - 12(x + c) + 7\\right) - \\left(-2x^2 - 12x + 7\\right)$.",
                  "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
                },
                {
                  "step": "$f(x + c) - f(x) = -4cx - 2c^2 - 12c$",
                  "reason": "Multiplying out: $(x + c)^2 = x^2 + 2cx + c^2$, and the terms without $c$ cancel."
                },
                {
                  "step": "$f(x + c) - f(x) = c(-4x - 2c - 12)$",
                  "reason": "Factoring: each term has the factor $c$."
                },
                {
                  "step": "$-4x - 2c - 12 = -2\\left(x + 3\\right) - 2\\left(x + c + 3\\right)$",
                  "reason": "Multiplying out: the right side multiplies out to the left side."
                },
                {
                  "step": "For $x \\ge -3$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x + 3 \\ge 0$ and $x + c + 3 > 0$, the number $-2$ is negative and $c$ is positive."
                },
                {
                  "step": "For $x + c \\le -3$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x + 3 < 0$ and $x + c + 3 \\le 0$, the number $-2$ is negative and $c$ is positive."
                },
                {
                  "step": "The largest interval is $(-\\infty, -3]$.",
                  "reason": "Difference test: $f$ is monotonically decreasing on $x \\ge -3$ and monotonically increasing on $x \\le -3$, so no larger interval will do."
                }
              ]
            },
            {
              "prompt": "Find the largest interval on which $f(x) = 4x^2 + 20x - 3$ is monotonically decreasing.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -5/2]",
              "lines": [
                {
                  "step": "Find the largest interval on which $f(x) = 4x^2 + 20x - 3$ is monotonically decreasing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(4(x + c)^2 + 20(x + c) - 3\\right) - \\left(4x^2 + 20x - 3\\right)$.",
                  "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
                },
                {
                  "step": "$f(x + c) - f(x) = 8cx + 4c^2 + 20c$",
                  "reason": "Multiplying out: $(x + c)^2 = x^2 + 2cx + c^2$, and the terms without $c$ cancel."
                },
                {
                  "step": "$f(x + c) - f(x) = c(8x + 4c + 20)$",
                  "reason": "Factoring: each term has the factor $c$."
                },
                {
                  "step": "$8x + 4c + 20 = 4\\left(x + \\dfrac{5}{2}\\right) + 4\\left(x + c + \\dfrac{5}{2}\\right)$",
                  "reason": "Multiplying out: the right side multiplies out to the left side."
                },
                {
                  "step": "For $x \\ge -\\dfrac{5}{2}$ and $c > 0$, the first part is at least $0$ and the second is positive, so the difference is positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x + \\dfrac{5}{2} \\ge 0$ and $x + c + \\dfrac{5}{2} > 0$, the number $4$ is positive and $c$ is positive."
                },
                {
                  "step": "For $x + c \\le -\\dfrac{5}{2}$ and $c > 0$, the first part is negative and the second is at most $0$, so the difference is negative.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x + \\dfrac{5}{2} < 0$ and $x + c + \\dfrac{5}{2} \\le 0$, the number $4$ is positive and $c$ is positive."
                },
                {
                  "step": "The largest interval is $(-\\infty, -\\dfrac{5}{2}]$.",
                  "reason": "Difference test: $f$ is monotonically increasing on $x \\ge -\\dfrac{5}{2}$ and monotonically decreasing on $x \\le -\\dfrac{5}{2}$, so no larger interval will do."
                }
              ]
            },
            {
              "prompt": "Find the largest interval on which $f(x) = -5x^2 + 30x + 2$ is monotonically decreasing.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[3, inf)",
              "lines": [
                {
                  "step": "Find the largest interval on which $f(x) = -5x^2 + 30x + 2$ is monotonically decreasing.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For a number $c > 0$, the difference is $f(x + c) - f(x) = \\left(-5(x + c)^2 + 30(x + c) + 2\\right) - \\left(-5x^2 + 30x + 2\\right)$.",
                  "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$."
                },
                {
                  "step": "$f(x + c) - f(x) = -10cx - 5c^2 + 30c$",
                  "reason": "Multiplying out: $(x + c)^2 = x^2 + 2cx + c^2$, and the terms without $c$ cancel."
                },
                {
                  "step": "$f(x + c) - f(x) = c(-10x - 5c + 30)$",
                  "reason": "Factoring: each term has the factor $c$."
                },
                {
                  "step": "$-10x - 5c + 30 = -5\\left(x - 3\\right) - 5\\left(x + c - 3\\right)$",
                  "reason": "Multiplying out: the right side multiplies out to the left side."
                },
                {
                  "step": "For $x \\ge 3$ and $c > 0$, the first part is at most $0$ and the second is negative, so the difference is negative.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x - 3 \\ge 0$ and $x + c - 3 > 0$, the number $-5$ is negative and $c$ is positive."
                },
                {
                  "step": "For $x + c \\le 3$ and $c > 0$, the first part is positive and the second is at least $0$, so the difference is positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: then $x - 3 < 0$ and $x + c - 3 \\le 0$, the number $-5$ is negative and $c$ is positive."
                },
                {
                  "step": "The largest interval is $[3, \\infty)$.",
                  "reason": "Difference test: $f$ is monotonically decreasing on $x \\ge 3$ and monotonically increasing on $x \\le 3$, so no larger interval will do."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t218-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the least value of $\\sqrt{2x - 6} + \\sqrt{x + 13}$.",
            "lines": [
              {
                "step": "Find the least value of $\\sqrt{2x - 6} + \\sqrt{x + 13}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both roots are defined exactly when $x \\ge 3$.",
                "reason": "The square-root function: the number under a root is at least $0$; $2x - 6 \\ge 0$ gives $x \\ge 3$, and then $x + 13 \\ge 16$."
              },
              {
                "step": "For numbers $a > b \\ge 3$, $\\sqrt{2a - 6} > \\sqrt{2b - 6}$ and $\\sqrt{a + 13} > \\sqrt{b + 13}$.",
                "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
              },
              {
                "step": "So $\\sqrt{2a - 6} + \\sqrt{a + 13} > \\sqrt{2b - 6} + \\sqrt{b + 13}$.",
                "reason": "Adding two inequalities: the two inequalities of the line above are added."
              },
              {
                "step": "So the sum is monotonically increasing on $x \\ge 3$, and its least value is at $x = 3$.",
                "reason": "Monotonically increasing: a greater input gives a greater output, so the least input gives the least output."
              },
              {
                "step": "The least value is $\\sqrt{0} + \\sqrt{16} = 4$.",
                "reason": "Substituting a value: $x = 3$ goes into both roots."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $\\sqrt{x - 5} + \\sqrt{2x - 1}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least value of $\\sqrt{x - 5} + \\sqrt{2x - 1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both roots are defined exactly when $x \\ge 5$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x - 5 \\ge 0$ gives $x \\ge 5$, and then $2x - 1 \\ge 9$."
                },
                {
                  "step": "For numbers $a > b \\ge 5$, $\\sqrt{a - 5} > \\sqrt{b - 5}$ and $\\sqrt{2a - 1} > \\sqrt{2b - 1}$.",
                  "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
                },
                {
                  "step": "So $\\sqrt{a - 5} + \\sqrt{2a - 1} > \\sqrt{b - 5} + \\sqrt{2b - 1}$.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So the sum is monotonically increasing on $x \\ge 5$, and its least value is at $x = 5$.",
                  "reason": "Monotonically increasing: a greater input gives a greater output, so the least input gives the least output."
                },
                {
                  "step": "The least value is $\\sqrt{0} + \\sqrt{9} = 3$.",
                  "reason": "Substituting a value: $x = 5$ goes into both roots."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\sqrt{3x + 6} + \\sqrt{x + 27}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the least value of $\\sqrt{3x + 6} + \\sqrt{x + 27}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both roots are defined exactly when $x \\ge -2$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $3x + 6 \\ge 0$ gives $x \\ge -2$, and then $x + 27 \\ge 25$."
                },
                {
                  "step": "For numbers $a > b \\ge -2$, $\\sqrt{3a + 6} > \\sqrt{3b + 6}$ and $\\sqrt{a + 27} > \\sqrt{b + 27}$.",
                  "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
                },
                {
                  "step": "So $\\sqrt{3a + 6} + \\sqrt{a + 27} > \\sqrt{3b + 6} + \\sqrt{b + 27}$.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So the sum is monotonically increasing on $x \\ge -2$, and its least value is at $x = -2$.",
                  "reason": "Monotonically increasing: a greater input gives a greater output, so the least input gives the least output."
                },
                {
                  "step": "The least value is $\\sqrt{0} + \\sqrt{25} = 5$.",
                  "reason": "Substituting a value: $x = -2$ goes into both roots."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\sqrt{4x - 4} + \\sqrt{3x + 33}$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the least value of $\\sqrt{4x - 4} + \\sqrt{3x + 33}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both roots are defined exactly when $x \\ge 1$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $4x - 4 \\ge 0$ gives $x \\ge 1$, and then $3x + 33 \\ge 36$."
                },
                {
                  "step": "For numbers $a > b \\ge 1$, $\\sqrt{4a - 4} > \\sqrt{4b - 4}$ and $\\sqrt{3a + 33} > \\sqrt{3b + 33}$.",
                  "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
                },
                {
                  "step": "So $\\sqrt{4a - 4} + \\sqrt{3a + 33} > \\sqrt{4b - 4} + \\sqrt{3b + 33}$.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So the sum is monotonically increasing on $x \\ge 1$, and its least value is at $x = 1$.",
                  "reason": "Monotonically increasing: a greater input gives a greater output, so the least input gives the least output."
                },
                {
                  "step": "The least value is $\\sqrt{0} + \\sqrt{36} = 6$.",
                  "reason": "Substituting a value: $x = 1$ goes into both roots."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value of $\\sqrt{x + 9} - \\sqrt{x - 7}$.",
            "lines": [
              {
                "step": "Find the greatest value of $\\sqrt{x + 9} - \\sqrt{x - 7}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Both roots are defined exactly when $x \\ge 7$.",
                "reason": "The square-root function: the number under a root is at least $0$; $x - 7 \\ge 0$ gives $x \\ge 7$, and then $x + 9 \\ge 16$."
              },
              {
                "step": "$\\sqrt{x + 9} - \\sqrt{x - 7} = \\dfrac{(x + 9) - (x - 7)}{\\sqrt{x + 9} + \\sqrt{x - 7}}$",
                "reason": "Conjugate of $a + b\\sqrt{c}$: the expression is multiplied and divided by the sum of the two roots, and the top is a difference of squares."
              },
              {
                "step": "$\\sqrt{x + 9} - \\sqrt{x - 7} = \\dfrac{16}{\\sqrt{x + 9} + \\sqrt{x - 7}}$",
                "reason": "Subtracting a bracket: every sign in the bracket taken away changes, so the top is $9 + 7 = 16$."
              },
              {
                "step": "The denominator is positive and monotonically increasing on $x \\ge 7$.",
                "reason": "Powers and roots of positive numbers keep the order: each root is greater for a greater $x$, and so is their sum."
              },
              {
                "step": "So the fraction is monotonically decreasing on $x \\ge 7$.",
                "reason": "Reciprocals of numbers of the same sign reverse the order: under the same positive top, a greater positive denominator gives a smaller fraction."
              },
              {
                "step": "The greatest value is at the least input, $x = 7$.",
                "reason": "Monotonically decreasing: a greater input gives a smaller output."
              },
              {
                "step": "The greatest value is $\\dfrac{16}{\\sqrt{16} + \\sqrt{0}} = 4$.",
                "reason": "Substituting a value: $x = 7$ goes into both roots."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $\\sqrt{x + 5} - \\sqrt{x - 4}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the greatest value of $\\sqrt{x + 5} - \\sqrt{x - 4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both roots are defined exactly when $x \\ge 4$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x - 4 \\ge 0$ gives $x \\ge 4$, and then $x + 5 \\ge 9$."
                },
                {
                  "step": "$\\sqrt{x + 5} - \\sqrt{x - 4} = \\dfrac{(x + 5) - (x - 4)}{\\sqrt{x + 5} + \\sqrt{x - 4}}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the expression is multiplied and divided by the sum of the two roots, and the top is a difference of squares."
                },
                {
                  "step": "$\\sqrt{x + 5} - \\sqrt{x - 4} = \\dfrac{9}{\\sqrt{x + 5} + \\sqrt{x - 4}}$",
                  "reason": "Subtracting a bracket: every sign in the bracket taken away changes, so the top is $5 + 4 = 9$."
                },
                {
                  "step": "The denominator is positive and monotonically increasing on $x \\ge 4$.",
                  "reason": "Powers and roots of positive numbers keep the order: each root is greater for a greater $x$, and so is their sum."
                },
                {
                  "step": "So the fraction is monotonically decreasing on $x \\ge 4$.",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: under the same positive top, a greater positive denominator gives a smaller fraction."
                },
                {
                  "step": "The greatest value is at the least input, $x = 4$.",
                  "reason": "Monotonically decreasing: a greater input gives a smaller output."
                },
                {
                  "step": "The greatest value is $\\dfrac{9}{\\sqrt{9} + \\sqrt{0}} = 3$.",
                  "reason": "Substituting a value: $x = 4$ goes into both roots."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $\\sqrt{x + 22} - \\sqrt{x - 3}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the greatest value of $\\sqrt{x + 22} - \\sqrt{x - 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both roots are defined exactly when $x \\ge 3$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x - 3 \\ge 0$ gives $x \\ge 3$, and then $x + 22 \\ge 25$."
                },
                {
                  "step": "$\\sqrt{x + 22} - \\sqrt{x - 3} = \\dfrac{(x + 22) - (x - 3)}{\\sqrt{x + 22} + \\sqrt{x - 3}}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the expression is multiplied and divided by the sum of the two roots, and the top is a difference of squares."
                },
                {
                  "step": "$\\sqrt{x + 22} - \\sqrt{x - 3} = \\dfrac{25}{\\sqrt{x + 22} + \\sqrt{x - 3}}$",
                  "reason": "Subtracting a bracket: every sign in the bracket taken away changes, so the top is $22 + 3 = 25$."
                },
                {
                  "step": "The denominator is positive and monotonically increasing on $x \\ge 3$.",
                  "reason": "Powers and roots of positive numbers keep the order: each root is greater for a greater $x$, and so is their sum."
                },
                {
                  "step": "So the fraction is monotonically decreasing on $x \\ge 3$.",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: under the same positive top, a greater positive denominator gives a smaller fraction."
                },
                {
                  "step": "The greatest value is at the least input, $x = 3$.",
                  "reason": "Monotonically decreasing: a greater input gives a smaller output."
                },
                {
                  "step": "The greatest value is $\\dfrac{25}{\\sqrt{25} + \\sqrt{0}} = 5$.",
                  "reason": "Substituting a value: $x = 3$ goes into both roots."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $\\sqrt{x + 2} - \\sqrt{x - 34}$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the greatest value of $\\sqrt{x + 2} - \\sqrt{x - 34}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Both roots are defined exactly when $x \\ge 34$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x - 34 \\ge 0$ gives $x \\ge 34$, and then $x + 2 \\ge 36$."
                },
                {
                  "step": "$\\sqrt{x + 2} - \\sqrt{x - 34} = \\dfrac{(x + 2) - (x - 34)}{\\sqrt{x + 2} + \\sqrt{x - 34}}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the expression is multiplied and divided by the sum of the two roots, and the top is a difference of squares."
                },
                {
                  "step": "$\\sqrt{x + 2} - \\sqrt{x - 34} = \\dfrac{36}{\\sqrt{x + 2} + \\sqrt{x - 34}}$",
                  "reason": "Subtracting a bracket: every sign in the bracket taken away changes, so the top is $2 + 34 = 36$."
                },
                {
                  "step": "The denominator is positive and monotonically increasing on $x \\ge 34$.",
                  "reason": "Powers and roots of positive numbers keep the order: each root is greater for a greater $x$, and so is their sum."
                },
                {
                  "step": "So the fraction is monotonically decreasing on $x \\ge 34$.",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: under the same positive top, a greater positive denominator gives a smaller fraction."
                },
                {
                  "step": "The greatest value is at the least input, $x = 34$.",
                  "reason": "Monotonically decreasing: a greater input gives a smaller output."
                },
                {
                  "step": "The greatest value is $\\dfrac{36}{\\sqrt{36} + \\sqrt{0}} = 6$.",
                  "reason": "Substituting a value: $x = 34$ goes into both roots."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $\\log_{2}{(x^2 - 10x + 33)}$.",
            "lines": [
              {
                "step": "Find the least value of $\\log_{2}{(x^2 - 10x + 33)}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 10x + 33 = (x - 5)^2 + 8$",
                "reason": "Completing the square: the square of $x - 5$ is $x^2 - 10x + 25$, and multiplying out the right side gives the left side."
              },
              {
                "step": "The least value of $x^2 - 10x + 33$ is $8$, at $x = 5$, and every value of it is positive.",
                "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = 5$."
              },
              {
                "step": "So the least value of the logarithm is at $x = 5$.",
                "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
              },
              {
                "step": "The least value is $\\log_{2}{8} = 3$.",
                "reason": "Logarithm: $2^{3} = 8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value of $\\log_{3}{(-2x^2 - 4x + 79)}$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the greatest value of $\\log_{3}{(-2x^2 - 4x + 79)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x^2 - 4x + 79 = -2(x + 1)^2 + 81$",
                  "reason": "Completing the square: the square of $x + 1$ is $x^2 + 2x + 1$, and multiplying out the right side gives the left side."
                },
                {
                  "step": "The greatest value of $-2x^2 - 4x + 79$ is $81$, at $x = -1$, and the logarithm is defined wherever the quadratic is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = -1$."
                },
                {
                  "step": "So the greatest value of the logarithm is at $x = -1$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
                },
                {
                  "step": "The greatest value is $\\log_{3}{81} = 4$.",
                  "reason": "Logarithm: $3^{4} = 81$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\log_{5}{(2x^2 - 16x + 57)}$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the least value of $\\log_{5}{(2x^2 - 16x + 57)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 16x + 57 = 2(x - 4)^2 + 25$",
                  "reason": "Completing the square: the square of $x - 4$ is $x^2 - 8x + 16$, and multiplying out the right side gives the left side."
                },
                {
                  "step": "The least value of $2x^2 - 16x + 57$ is $25$, at $x = 4$, and every value of it is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = 4$."
                },
                {
                  "step": "So the least value of the logarithm is at $x = 4$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
                },
                {
                  "step": "The least value is $\\log_{5}{25} = 2$.",
                  "reason": "Logarithm: $5^{2} = 25$."
                }
              ]
            },
            {
              "prompt": "Find the greatest value of $\\log_{2}{(-x^2 + 8x + 16)}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the greatest value of $\\log_{2}{(-x^2 + 8x + 16)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-x^2 + 8x + 16 = -(x - 4)^2 + 32$",
                  "reason": "Completing the square: the square of $x - 4$ is $x^2 - 8x + 16$, and multiplying out the right side gives the left side."
                },
                {
                  "step": "The greatest value of $-x^2 + 8x + 16$ is $32$, at $x = 4$, and the logarithm is defined wherever the quadratic is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = 4$."
                },
                {
                  "step": "So the greatest value of the logarithm is at $x = 4$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
                },
                {
                  "step": "The greatest value is $\\log_{2}{32} = 5$.",
                  "reason": "Logarithm: $2^{5} = 32$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $\\log_{3}{(x^3 - 3x^2 - 15x + 125)} - \\log_{3}{(x + 5)}$.",
            "lines": [
              {
                "step": "Find the least value of $\\log_{3}{(x^3 - 3x^2 - 15x + 125)} - \\log_{3}{(x + 5)}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\log_{3}{(x^3 - 3x^2 - 15x + 125)} - \\log_{3}{(x + 5)} = \\log_{3}{\\dfrac{x^3 - 3x^2 - 15x + 125}{x + 5}}$",
                "reason": "Log of a quotient: a difference of logarithms to one base is the logarithm of the quotient, wherever both logarithms are defined."
              },
              {
                "step": "$\\dfrac{x^3 - 3x^2 - 15x + 125}{x + 5} = x^2 - 8x + 25$",
                "reason": "Long division of polynomials: the division leaves no remainder, since $(x + 5)(x^2 - 8x + 25)$ multiplies out to $x^3 - 3x^2 - 15x + 125$."
              },
              {
                "step": "$x^2 - 8x + 25 = (x - 4)^2 + 9$",
                "reason": "Completing the square: the square of $x - 4$ is $x^2 - 8x + 16$."
              },
              {
                "step": "The least value of $x^2 - 8x + 25$ is $9$, at $x = 4$, and every value of it is positive.",
                "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = 4$."
              },
              {
                "step": "Both logarithms are defined exactly when $x > -5$, and $x = 4$ is such a number.",
                "reason": "Logarithm: a logarithm is defined only for a positive number, and $x^3 - 3x^2 - 15x + 125$ is $x + 5$ times a positive number."
              },
              {
                "step": "So the least value of the difference is at $x = 4$.",
                "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
              },
              {
                "step": "The least value is $\\log_{3}{9} = 2$.",
                "reason": "Logarithm: $3^{2} = 9$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $\\log_{2}{(x^3 - 7x^2 + 11x + 123)} - \\log_{2}{(x + 3)}$.",
              "form": "Answer as an integer.",
              "answer": "4",
              "lines": [
                {
                  "step": "Find the least value of $\\log_{2}{(x^3 - 7x^2 + 11x + 123)} - \\log_{2}{(x + 3)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{(x^3 - 7x^2 + 11x + 123)} - \\log_{2}{(x + 3)} = \\log_{2}{\\dfrac{x^3 - 7x^2 + 11x + 123}{x + 3}}$",
                  "reason": "Log of a quotient: a difference of logarithms to one base is the logarithm of the quotient, wherever both logarithms are defined."
                },
                {
                  "step": "$\\dfrac{x^3 - 7x^2 + 11x + 123}{x + 3} = x^2 - 10x + 41$",
                  "reason": "Long division of polynomials: the division leaves no remainder, since $(x + 3)(x^2 - 10x + 41)$ multiplies out to $x^3 - 7x^2 + 11x + 123$."
                },
                {
                  "step": "$x^2 - 10x + 41 = (x - 5)^2 + 16$",
                  "reason": "Completing the square: the square of $x - 5$ is $x^2 - 10x + 25$."
                },
                {
                  "step": "The least value of $x^2 - 10x + 41$ is $16$, at $x = 5$, and every value of it is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = 5$."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > -3$, and $x = 5$ is such a number.",
                  "reason": "Logarithm: a logarithm is defined only for a positive number, and $x^3 - 7x^2 + 11x + 123$ is $x + 3$ times a positive number."
                },
                {
                  "step": "So the least value of the difference is at $x = 5$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
                },
                {
                  "step": "The least value is $\\log_{2}{16} = 4$.",
                  "reason": "Logarithm: $2^{4} = 16$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\log_{5}{(x^3 + 13x^2 + 76x + 238)} - \\log_{5}{(x + 7)}$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find the least value of $\\log_{5}{(x^3 + 13x^2 + 76x + 238)} - \\log_{5}{(x + 7)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{5}{(x^3 + 13x^2 + 76x + 238)} - \\log_{5}{(x + 7)} = \\log_{5}{\\dfrac{x^3 + 13x^2 + 76x + 238}{x + 7}}$",
                  "reason": "Log of a quotient: a difference of logarithms to one base is the logarithm of the quotient, wherever both logarithms are defined."
                },
                {
                  "step": "$\\dfrac{x^3 + 13x^2 + 76x + 238}{x + 7} = x^2 + 6x + 34$",
                  "reason": "Long division of polynomials: the division leaves no remainder, since $(x + 7)(x^2 + 6x + 34)$ multiplies out to $x^3 + 13x^2 + 76x + 238$."
                },
                {
                  "step": "$x^2 + 6x + 34 = (x + 3)^2 + 25$",
                  "reason": "Completing the square: the square of $x + 3$ is $x^2 + 6x + 9$."
                },
                {
                  "step": "The least value of $x^2 + 6x + 34$ is $25$, at $x = -3$, and every value of it is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = -3$."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > -7$, and $x = -3$ is such a number.",
                  "reason": "Logarithm: a logarithm is defined only for a positive number, and $x^3 + 13x^2 + 76x + 238$ is $x + 7$ times a positive number."
                },
                {
                  "step": "So the least value of the difference is at $x = -3$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
                },
                {
                  "step": "The least value is $\\log_{5}{25} = 2$.",
                  "reason": "Logarithm: $5^{2} = 25$."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\log_{2}{(x^3 - 8x^2 - 4x + 176)} - \\log_{2}{(x + 4)}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the least value of $\\log_{2}{(x^3 - 8x^2 - 4x + 176)} - \\log_{2}{(x + 4)}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\log_{2}{(x^3 - 8x^2 - 4x + 176)} - \\log_{2}{(x + 4)} = \\log_{2}{\\dfrac{x^3 - 8x^2 - 4x + 176}{x + 4}}$",
                  "reason": "Log of a quotient: a difference of logarithms to one base is the logarithm of the quotient, wherever both logarithms are defined."
                },
                {
                  "step": "$\\dfrac{x^3 - 8x^2 - 4x + 176}{x + 4} = x^2 - 12x + 44$",
                  "reason": "Long division of polynomials: the division leaves no remainder, since $(x + 4)(x^2 - 12x + 44)$ multiplies out to $x^3 - 8x^2 - 4x + 176$."
                },
                {
                  "step": "$x^2 - 12x + 44 = (x - 6)^2 + 8$",
                  "reason": "Completing the square: the square of $x - 6$ is $x^2 - 12x + 36$."
                },
                {
                  "step": "The least value of $x^2 - 12x + 44$ is $8$, at $x = 6$, and every value of it is positive.",
                  "reason": "Trivial Inequality: the square is at least $0$, and is $0$ only at $x = 6$."
                },
                {
                  "step": "Both logarithms are defined exactly when $x > -4$, and $x = 6$ is such a number.",
                  "reason": "Logarithm: a logarithm is defined only for a positive number, and $x^3 - 8x^2 - 4x + 176$ is $x + 4$ times a positive number."
                },
                {
                  "step": "So the least value of the difference is at $x = 6$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm."
                },
                {
                  "step": "The least value is $\\log_{2}{8} = 3$.",
                  "reason": "Logarithm: $2^{3} = 8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t218-k4",
      "forms": [
        {
          "example": {
            "problem": "Find every real solution of $2^x + 3x = 17$.",
            "lines": [
              {
                "step": "Find every real solution of $2^x + 3x = 17$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $x = 3$ the left side is $2^{3} + 3 \\cdot 3 = 17$, so $3$ is a solution.",
                "reason": "Substituting a value: $2^{3} = 8$."
              },
              {
                "step": "For numbers $a > b$, $2^a > 2^b$ and $3a > 3b$.",
                "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power; and multiplying by a positive number keeps the order."
              },
              {
                "step": "So $2^a + 3a > 2^b + 3b$: the left side is monotonically increasing.",
                "reason": "Adding two inequalities: the two inequalities of the line above are added."
              },
              {
                "step": "So no other number gives $17$.",
                "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
              },
              {
                "step": "$x = 3$",
                "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real solution of $3^x + 2x = 13$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 2",
              "lines": [
                {
                  "step": "Find every real solution of $3^x + 2x = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = 2$ the left side is $3^{2} + 2 \\cdot 2 = 13$, so $2$ is a solution.",
                  "reason": "Substituting a value: $3^{2} = 9$."
                },
                {
                  "step": "For numbers $a > b$, $3^a > 3^b$ and $2a > 2b$.",
                  "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power; and multiplying by a positive number keeps the order."
                },
                {
                  "step": "So $3^a + 2a > 3^b + 2b$: the left side is monotonically increasing.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So no other number gives $13$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = 2$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $4^x + 2x = 3$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/2",
              "lines": [
                {
                  "step": "Find every real solution of $4^x + 2x = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = \\dfrac{1}{2}$ the left side is $4^{\\frac{1}{2}} + 2 \\cdot \\dfrac{1}{2} = 3$, so $\\dfrac{1}{2}$ is a solution.",
                  "reason": "Substituting a value: $4^{\\frac{1}{2}} = 2$."
                },
                {
                  "step": "For numbers $a > b$, $4^a > 4^b$ and $2a > 2b$.",
                  "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power; and multiplying by a positive number keeps the order."
                },
                {
                  "step": "So $4^a + 2a > 4^b + 2b$: the left side is monotonically increasing.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So no other number gives $3$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = \\dfrac{1}{2}$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $5^x + 4x = -\\dfrac{19}{5}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1",
              "lines": [
                {
                  "step": "Find every real solution of $5^x + 4x = -\\dfrac{19}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $x = -1$ the left side is $5^{-1} + 4 \\cdot (-1) = -\\dfrac{19}{5}$, so $-1$ is a solution.",
                  "reason": "Substituting a value: $5^{-1} = \\dfrac{1}{5}$."
                },
                {
                  "step": "For numbers $a > b$, $5^a > 5^b$ and $4a > 4b$.",
                  "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power; and multiplying by a positive number keeps the order."
                },
                {
                  "step": "So $5^a + 4a > 5^b + 4b$: the left side is monotonically increasing.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So no other number gives $-\\dfrac{19}{5}$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = -1$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every real solution of $\\log_{3}{x} + 2x = 20$.",
            "lines": [
              {
                "step": "Find every real solution of $\\log_{3}{x} + 2x = 20$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side is defined for $x > 0$.",
                "reason": "Logarithm: a logarithm is defined only for a positive number."
              },
              {
                "step": "At $x = 9$ the left side is $\\log_{3}{9} + 2 \\cdot 9 = 20$, so $9$ is a solution.",
                "reason": "Substituting a value: $3^{2} = 9$, so $\\log_{3}{9} = 2$."
              },
              {
                "step": "For numbers $a > b > 0$, $\\log_{3}{a} > \\log_{3}{b}$ and $2a > 2b$.",
                "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm; and multiplying by a positive number keeps the order."
              },
              {
                "step": "So $\\log_{3}{a} + 2a > \\log_{3}{b} + 2b$: the left side is monotonically increasing on $x > 0$.",
                "reason": "Adding two inequalities: the two inequalities of the line above are added."
              },
              {
                "step": "So no other positive number gives $20$.",
                "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
              },
              {
                "step": "$x = 9$",
                "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real solution of $\\log_{2}{x} + 3x = 27$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 8",
              "lines": [
                {
                  "step": "Find every real solution of $\\log_{2}{x} + 3x = 27$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is defined for $x > 0$.",
                  "reason": "Logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "At $x = 8$ the left side is $\\log_{2}{8} + 3 \\cdot 8 = 27$, so $8$ is a solution.",
                  "reason": "Substituting a value: $2^{3} = 8$, so $\\log_{2}{8} = 3$."
                },
                {
                  "step": "For numbers $a > b > 0$, $\\log_{2}{a} > \\log_{2}{b}$ and $3a > 3b$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm; and multiplying by a positive number keeps the order."
                },
                {
                  "step": "So $\\log_{2}{a} + 3a > \\log_{2}{b} + 3b$: the left side is monotonically increasing on $x > 0$.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So no other positive number gives $27$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = 8$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $\\log_{5}{x} + 2x = 11$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 5",
              "lines": [
                {
                  "step": "Find every real solution of $\\log_{5}{x} + 2x = 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is defined for $x > 0$.",
                  "reason": "Logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "At $x = 5$ the left side is $\\log_{5}{5} + 2 \\cdot 5 = 11$, so $5$ is a solution.",
                  "reason": "Substituting a value: $5^{1} = 5$, so $\\log_{5}{5} = 1$."
                },
                {
                  "step": "For numbers $a > b > 0$, $\\log_{5}{a} > \\log_{5}{b}$ and $2a > 2b$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm; and multiplying by a positive number keeps the order."
                },
                {
                  "step": "So $\\log_{5}{a} + 2a > \\log_{5}{b} + 2b$: the left side is monotonically increasing on $x > 0$.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So no other positive number gives $11$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $\\log_{2}{x} + 4x = 1$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 1/2",
              "lines": [
                {
                  "step": "Find every real solution of $\\log_{2}{x} + 4x = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is defined for $x > 0$.",
                  "reason": "Logarithm: a logarithm is defined only for a positive number."
                },
                {
                  "step": "At $x = \\dfrac{1}{2}$ the left side is $\\log_{2}{\\dfrac{1}{2}} + 4 \\cdot \\dfrac{1}{2} = 1$, so $\\dfrac{1}{2}$ is a solution.",
                  "reason": "Substituting a value: $2^{-1} = \\dfrac{1}{2}$, so $\\log_{2}{\\dfrac{1}{2}} = -1$."
                },
                {
                  "step": "For numbers $a > b > 0$, $\\log_{2}{a} > \\log_{2}{b}$ and $4a > 4b$.",
                  "reason": "Logarithm is increasing: for a base greater than 1, a greater positive number has a greater logarithm; and multiplying by a positive number keeps the order."
                },
                {
                  "step": "So $\\log_{2}{a} + 4a > \\log_{2}{b} + 4b$: the left side is monotonically increasing on $x > 0$.",
                  "reason": "Adding two inequalities: the two inequalities of the line above are added."
                },
                {
                  "step": "So no other positive number gives $1$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = \\dfrac{1}{2}$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every real solution of $\\sqrt{x + 1} + \\sqrt{x + 6} + \\sqrt{x + 13} = 9$.",
            "lines": [
              {
                "step": "Find every real solution of $\\sqrt{x + 1} + \\sqrt{x + 6} + \\sqrt{x + 13} = 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side is defined exactly when $x \\ge -1$.",
                "reason": "The square-root function: the number under a root is at least $0$; $x + 1 \\ge 0$ gives $x \\ge -1$, and then the numbers under the other two roots are positive."
              },
              {
                "step": "At $x = 3$ the left side is $\\sqrt{4} + \\sqrt{9} + \\sqrt{16} = 2 + 3 + 4 = 9$, so $3$ is a solution.",
                "reason": "Substituting a value: $x = 3$ goes into the three roots."
              },
              {
                "step": "For numbers $a > b \\ge -1$, $\\sqrt{a + 1} > \\sqrt{b + 1}$, $\\sqrt{a + 6} > \\sqrt{b + 6}$ and $\\sqrt{a + 13} > \\sqrt{b + 13}$.",
                "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
              },
              {
                "step": "So $\\sqrt{a + 1} + \\sqrt{a + 6} + \\sqrt{a + 13} > \\sqrt{b + 1} + \\sqrt{b + 6} + \\sqrt{b + 13}$: the left side is monotonically increasing on $x \\ge -1$.",
                "reason": "Adding two inequalities: the first two inequalities of the line above are added, and then the third."
              },
              {
                "step": "So no other number in the domain gives $9$.",
                "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
              },
              {
                "step": "$x = 3$",
                "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real solution of $\\sqrt{x - 4} + \\sqrt{x + 4} + \\sqrt{x + 20} = 9$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 5",
              "lines": [
                {
                  "step": "Find every real solution of $\\sqrt{x - 4} + \\sqrt{x + 4} + \\sqrt{x + 20} = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is defined exactly when $x \\ge 4$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x - 4 \\ge 0$ gives $x \\ge 4$, and then the numbers under the other two roots are positive."
                },
                {
                  "step": "At $x = 5$ the left side is $\\sqrt{1} + \\sqrt{9} + \\sqrt{25} = 1 + 3 + 5 = 9$, so $5$ is a solution.",
                  "reason": "Substituting a value: $x = 5$ goes into the three roots."
                },
                {
                  "step": "For numbers $a > b \\ge 4$, $\\sqrt{a - 4} > \\sqrt{b - 4}$, $\\sqrt{a + 4} > \\sqrt{b + 4}$ and $\\sqrt{a + 20} > \\sqrt{b + 20}$.",
                  "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
                },
                {
                  "step": "So $\\sqrt{a - 4} + \\sqrt{a + 4} + \\sqrt{a + 20} > \\sqrt{b - 4} + \\sqrt{b + 4} + \\sqrt{b + 20}$: the left side is monotonically increasing on $x \\ge 4$.",
                  "reason": "Adding two inequalities: the first two inequalities of the line above are added, and then the third."
                },
                {
                  "step": "So no other number in the domain gives $9$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = 5$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $\\sqrt{x + 6} + \\sqrt{x + 18} + \\sqrt{x + 27} = 11$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -2",
              "lines": [
                {
                  "step": "Find every real solution of $\\sqrt{x + 6} + \\sqrt{x + 18} + \\sqrt{x + 27} = 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is defined exactly when $x \\ge -6$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x + 6 \\ge 0$ gives $x \\ge -6$, and then the numbers under the other two roots are positive."
                },
                {
                  "step": "At $x = -2$ the left side is $\\sqrt{4} + \\sqrt{16} + \\sqrt{25} = 2 + 4 + 5 = 11$, so $-2$ is a solution.",
                  "reason": "Substituting a value: $x = -2$ goes into the three roots."
                },
                {
                  "step": "For numbers $a > b \\ge -6$, $\\sqrt{a + 6} > \\sqrt{b + 6}$, $\\sqrt{a + 18} > \\sqrt{b + 18}$ and $\\sqrt{a + 27} > \\sqrt{b + 27}$.",
                  "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
                },
                {
                  "step": "So $\\sqrt{a + 6} + \\sqrt{a + 18} + \\sqrt{a + 27} > \\sqrt{b + 6} + \\sqrt{b + 18} + \\sqrt{b + 27}$: the left side is monotonically increasing on $x \\ge -6$.",
                  "reason": "Adding two inequalities: the first two inequalities of the line above are added, and then the third."
                },
                {
                  "step": "So no other number in the domain gives $11$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = -2$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            },
            {
              "prompt": "Find every real solution of $\\sqrt{x + 2} + \\sqrt{x + 9} + \\sqrt{x + 29} = 13$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 7",
              "lines": [
                {
                  "step": "Find every real solution of $\\sqrt{x + 2} + \\sqrt{x + 9} + \\sqrt{x + 29} = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side is defined exactly when $x \\ge -2$.",
                  "reason": "The square-root function: the number under a root is at least $0$; $x + 2 \\ge 0$ gives $x \\ge -2$, and then the numbers under the other two roots are positive."
                },
                {
                  "step": "At $x = 7$ the left side is $\\sqrt{9} + \\sqrt{16} + \\sqrt{36} = 3 + 4 + 6 = 13$, so $7$ is a solution.",
                  "reason": "Substituting a value: $x = 7$ goes into the three roots."
                },
                {
                  "step": "For numbers $a > b \\ge -2$, $\\sqrt{a + 2} > \\sqrt{b + 2}$, $\\sqrt{a + 9} > \\sqrt{b + 9}$ and $\\sqrt{a + 29} > \\sqrt{b + 29}$.",
                  "reason": "Powers and roots of positive numbers keep the order: a greater number under the root gives a greater root, and $\\sqrt{0} = 0$ is below every other root."
                },
                {
                  "step": "So $\\sqrt{a + 2} + \\sqrt{a + 9} + \\sqrt{a + 29} > \\sqrt{b + 2} + \\sqrt{b + 9} + \\sqrt{b + 29}$: the left side is monotonically increasing on $x \\ge -2$.",
                  "reason": "Adding two inequalities: the first two inequalities of the line above are added, and then the third."
                },
                {
                  "step": "So no other number in the domain gives $13$.",
                  "reason": "Monotonic functions are one-to-one: different inputs give different outputs."
                },
                {
                  "step": "$x = 7$",
                  "reason": "Substituting a value and Monotonic functions are one-to-one: the number found is a solution, and the only one."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t218-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the largest interval on which $f(x) = 3x^2 - 18x + 4$ is monotonically increasing, and write that line right.",
            "given": [
              "$f(x + c) - f(x) = \\left(3(x + c)^2 - 18(x + c) + 4\\right) - \\left(3x^2 - 18x + 4\\right)$",
              "$f(x + c) - f(x) = 6cx + 3c^2 + 18c$",
              "$f(x + c) - f(x) = c(6x + 3c + 18)$",
              "The bracket is positive for every $c > 0$ exactly when $6x + 18 \\ge 0$.",
              "$x \\ge -3$",
              "The largest interval is $[-3, \\infty)$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the largest interval on which $f(x) = 3x^2 - 18x + 4$ is monotonically increasing, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 loses a sign: $-18$ times $(x + c)$ gives the term $-18c$, and line 2 has $18c$.",
                "reason": "A sign lost: the term $-18c$ is written as $18c$. Multiplying out sets it right: $-18(x + c) = -18x - 18c$."
              },
              {
                "step": "Line 2 written right is $f(x + c) - f(x) = 6cx + 3c^2 - 18c$.",
                "reason": "Difference test: each line after it then gives the interval on which $f$ is monotonically increasing."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 2x^2 + 12x - 5$ is monotonically increasing, and write that line right.",
              "given": [
                "$f(x + c) - f(x) = \\left(2(x + c)^2 + 12(x + c) - 5\\right) - \\left(2x^2 + 12x - 5\\right)$",
                "$f(x + c) - f(x) = 4cx + 2c^2 + 12c$",
                "$f(x + c) - f(x) = c(4x + 2c + 12)$",
                "The bracket is positive for every $c > 0$ exactly when $4x + 12 \\ge 0$.",
                "$x \\ge 3$",
                "The largest interval is $[3, \\infty)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x >= -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the largest interval on which $f(x) = 2x^2 + 12x - 5$ is monotonically increasing, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 loses a sign: adding $-12$ to both sides of $4x + 12 \\ge 0$ gives $4x \\ge -12$, so $x \\ge -3$; line 5 keeps the sign of $12$.",
                  "reason": "A sign lost: the number $12$ keeps its sign when it moves to the other side. Adding the same number to both sides sets it right: the number $-12$ is added to both sides."
                },
                {
                  "step": "Line 5 written right is $x \\ge -3$.",
                  "reason": "Difference test: each line after it then gives the interval on which $f$ is monotonically increasing."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = 5x^2 + 20x + 3$ is monotonically increasing, and write that line right.",
              "given": [
                "$f(x + c) - f(x) = \\left(5(x + c)^2 + 20(x + c) + 3\\right) - \\left(5x^2 + 20x + 3\\right)$",
                "$f(x + c) - f(x) = 10cx + 5c^2 + 20c$",
                "$f(x + c) - f(x) = c(10x + 5c - 20)$",
                "The bracket is positive for every $c > 0$ exactly when $10x - 20 \\ge 0$.",
                "$x \\ge 2$",
                "The largest interval is $[2, \\infty)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(x+c)-f(x) = c*(10*x+5*c+20)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the largest interval on which $f(x) = 5x^2 + 20x + 3$ is monotonically increasing, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 loses a sign: taking the factor $c$ out of $20c$ leaves $20$, and line 3 has $-20$.",
                  "reason": "A sign lost: the number $20$ in the bracket is written as $-20$. Factoring sets it right: $10cx + 5c^2 + 20c = c(10x + 5c + 20)$."
                },
                {
                  "step": "Line 3 written right is $f(x + c) - f(x) = c(10x + 5c + 20)$.",
                  "reason": "Difference test: each line after it then gives the interval on which $f$ is monotonically increasing."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the largest interval on which $f(x) = -4x^2 - 40x + 7$ is monotonically decreasing, and write that line right.",
              "given": [
                "$f(x + c) - f(x) = \\left(-4(x + c)^2 - 40(x + c) + 7\\right) - \\left(-4x^2 - 40x + 7\\right)$",
                "$f(x + c) - f(x) = -8cx - 4c^2 - 40c$",
                "$f(x + c) - f(x) = c(-8x - 4c + 40)$",
                "The bracket is negative for every $c > 0$ exactly when $-8x + 40 \\le 0$.",
                "$x \\ge 5$",
                "The largest interval is $[5, \\infty)$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(x+c)-f(x) = c*(-8*x-4*c-40)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the largest interval on which $f(x) = -4x^2 - 40x + 7$ is monotonically decreasing, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 loses a sign: taking the factor $c$ out of $-40c$ leaves $-40$, and line 3 has $40$.",
                  "reason": "A sign lost: the number $-40$ in the bracket is written as $40$. Factoring sets it right: $-8cx - 4c^2 - 40c = c(-8x - 4c - 40)$."
                },
                {
                  "step": "Line 3 written right is $f(x + c) - f(x) = c(-8x - 4c - 40)$.",
                  "reason": "Difference test: each line after it then gives the interval on which $f$ is monotonically decreasing."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 16} - \\sqrt{x - 9}$, and write that line right.",
            "given": [
              "$\\sqrt{x + 16} - \\sqrt{x - 9} = \\dfrac{(x + 16) - (x - 9)}{\\sqrt{x + 16} + \\sqrt{x - 9}}$",
              "$\\sqrt{x + 16} - \\sqrt{x - 9} = \\dfrac{25}{\\sqrt{x + 16} + \\sqrt{x - 9}}$",
              "The denominator is positive and monotonically increasing on $x \\ge 9$, so the fraction is monotonically decreasing there and is greatest at $x = 9$, where the denominator is $\\sqrt{9 + 16} + \\sqrt{9 - 9}$.",
              "$\\sqrt{9 + 16} + \\sqrt{9 - 9} = 7$",
              "The greatest value is $\\dfrac{25}{7}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 16} - \\sqrt{x - 9}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 takes the root of the sum $9 + 16$ term by term, as $3 + 4$; the sum is $25$, and its root is $5$.",
                "reason": "A root taken term by term over a sum: $\\sqrt{9 + 16}$ is taken as $\\sqrt{9} + \\sqrt{16}$. Order of operations sets it right: the sum under the root is worked out first, and $\\sqrt{25} = 5$."
              },
              {
                "step": "Line 4 written right is $\\sqrt{9 + 16} + \\sqrt{9 - 9} = 5$.",
                "reason": "Monotonically decreasing: each line after it then gives the greatest value, at the least input."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 17} - \\sqrt{x - 8}$, and write that line right.",
              "given": [
                "$\\sqrt{x + 17} - \\sqrt{x - 8} = \\dfrac{(x + 17) - (x - 8)}{\\sqrt{x + 17} + \\sqrt{x - 8}}$",
                "$\\sqrt{x + 17} - \\sqrt{x - 8} = \\dfrac{9}{\\sqrt{x + 17} + \\sqrt{x - 8}}$",
                "The denominator is positive and monotonically increasing on $x \\ge 8$, so the fraction is monotonically decreasing there and is greatest at $x = 8$, where the denominator is $\\sqrt{8 + 17} + \\sqrt{8 - 8}$.",
                "$\\sqrt{8 + 17} + \\sqrt{8 - 8} = 5$",
                "The greatest value is $\\dfrac{9}{5}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: sqrt(x+17)-sqrt(x-8) = 25/(sqrt(x+17)+sqrt(x-8))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 17} - \\sqrt{x - 8}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 loses a sign: taking away the bracket $(x - 8)$ adds $8$, so the top is $17 + 8 = 25$; line 2 has $17 - 8$.",
                  "reason": "A sign lost: the number $-8$ in the bracket taken away keeps its minus sign. Subtracting a bracket sets it right: every sign in the bracket taken away changes."
                },
                {
                  "step": "Line 2 written right is $\\sqrt{x + 17} - \\sqrt{x - 8} = \\dfrac{25}{\\sqrt{x + 17} + \\sqrt{x - 8}}$.",
                  "reason": "Monotonically decreasing: each line after it then gives the greatest value, at the least input."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 144} - \\sqrt{x - 25}$, and write that line right.",
              "given": [
                "$\\sqrt{x + 144} - \\sqrt{x - 25} = \\dfrac{(x + 144) - (x - 25)}{\\sqrt{x + 144} + \\sqrt{x - 25}}$",
                "$\\sqrt{x + 144} - \\sqrt{x - 25} = \\dfrac{169}{\\sqrt{x + 144} + \\sqrt{x - 25}}$",
                "The denominator is positive and monotonically increasing on $x \\ge 25$, so the fraction is monotonically decreasing there and is greatest at $x = 25$, where the denominator is $\\sqrt{25 + 144} + \\sqrt{25 - 25}$.",
                "$\\sqrt{25 + 144} + \\sqrt{25 - 25} = 17$",
                "The greatest value is $\\dfrac{169}{17}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: sqrt(25+144)+sqrt(25-25) = 13",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 144} - \\sqrt{x - 25}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes the root of the sum $25 + 144$ term by term, as $5 + 12$; the sum is $169$, and its root is $13$.",
                  "reason": "A root taken term by term over a sum: $\\sqrt{25 + 144}$ is taken as $\\sqrt{25} + \\sqrt{144}$. Order of operations sets it right: the sum under the root is worked out first, and $\\sqrt{169} = 13$."
                },
                {
                  "step": "Line 4 written right is $\\sqrt{25 + 144} + \\sqrt{25 - 25} = 13$.",
                  "reason": "Monotonically decreasing: each line after it then gives the greatest value, at the least input."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 29} - \\sqrt{x - 20}$, and write that line right.",
              "given": [
                "$\\sqrt{x + 29} - \\sqrt{x - 20} = \\dfrac{(x + 29) - (x - 20)}{\\sqrt{x + 29} + \\sqrt{x - 20}}$",
                "$\\sqrt{x + 29} - \\sqrt{x - 20} = \\dfrac{9}{\\sqrt{x + 29} + \\sqrt{x - 20}}$",
                "The denominator is positive and monotonically increasing on $x \\ge 20$, so the fraction is monotonically decreasing there and is greatest at $x = 20$, where the denominator is $\\sqrt{20 + 29} + \\sqrt{20 - 20}$.",
                "$\\sqrt{20 + 29} + \\sqrt{20 - 20} = 7$",
                "The greatest value is $\\dfrac{9}{7}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: sqrt(x+29)-sqrt(x-20) = 49/(sqrt(x+29)+sqrt(x-20))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the greatest value of $\\sqrt{x + 29} - \\sqrt{x - 20}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 loses a sign: taking away the bracket $(x - 20)$ adds $20$, so the top is $29 + 20 = 49$; line 2 has $29 - 20$.",
                  "reason": "A sign lost: the number $-20$ in the bracket taken away keeps its minus sign. Subtracting a bracket sets it right: every sign in the bracket taken away changes."
                },
                {
                  "step": "Line 2 written right is $\\sqrt{x + 29} - \\sqrt{x - 20} = \\dfrac{49}{\\sqrt{x + 29} + \\sqrt{x - 20}}$.",
                  "reason": "Monotonically decreasing: each line after it then gives the greatest value, at the least input."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t218-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(1, -2)$, $B(2, -3)$ and $C(3, -2)$, and the graph keeps its direction beyond the edges of the figure.",
            "figure": {
              "file": "monotonic-functions-1.svg",
              "alt": "A curve through the marked points A(1, −2), B(2, −3) and C(3, −2)."
            },
            "lines": [
              {
                "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(1, -2)$, $B(2, -3)$ and $C(3, -2)$, and the graph keeps its direction beyond the edges of the figure.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In the figure the graph falls from left to right as far as the marked point $B(2, -3)$ and rises from there on.",
                "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
              },
              {
                "step": "The graph rises from $x = 2$ on.",
                "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
              },
              {
                "step": "$x \\ge 2$",
                "reason": "Strict and nonstrict inequality: the turning point itself belongs to the interval, so the sign is nonstrict."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-3, 0)$, $B(-2, 3)$ and $C(-1, 4)$, and the graph keeps its direction beyond the edges of the figure.",
              "figure": {
                "file": "monotonic-functions-2.svg",
                "alt": "A curve through the marked points A(−3, 0), B(−2, 3) and C(−1, 4)."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x <= -1",
              "lines": [
                {
                  "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-3, 0)$, $B(-2, 3)$ and $C(-1, 4)$, and the graph keeps its direction beyond the edges of the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the figure the graph rises from left to right as far as the marked point $C(-1, 4)$ and falls from there on.",
                  "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
                },
                {
                  "step": "The graph rises as far as $x = -1$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "$x \\le -1$",
                  "reason": "Strict and nonstrict inequality: the turning point itself belongs to the interval, so the sign is nonstrict."
                }
              ]
            },
            {
              "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(3, -2)$, $B(4, 0)$ and $C(5, 2)$, and the graph keeps its direction beyond the edges of the figure.",
              "figure": {
                "file": "monotonic-functions-3.svg",
                "alt": "A curve through the marked points A(3, −2), B(4, 0) and C(5, 2)."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x <= 3",
              "lines": [
                {
                  "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(3, -2)$, $B(4, 0)$ and $C(5, 2)$, and the graph keeps its direction beyond the edges of the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the figure the graph falls from left to right as far as the marked point $A(3, -2)$ and rises from there on.",
                  "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
                },
                {
                  "step": "The graph falls as far as $x = 3$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "$x \\le 3$",
                  "reason": "Strict and nonstrict inequality: the turning point itself belongs to the interval, so the sign is nonstrict."
                }
              ]
            },
            {
              "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(0, 3)$, $B(1, 5)$ and $C(2, 3)$, and the graph keeps its direction beyond the edges of the figure.",
              "figure": {
                "file": "monotonic-functions-4.svg",
                "alt": "A curve through the marked points A(0, 3), B(1, 5) and C(2, 3)."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x >= 1",
              "lines": [
                {
                  "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(0, 3)$, $B(1, 5)$ and $C(2, 3)$, and the graph keeps its direction beyond the edges of the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the figure the graph rises from left to right as far as the marked point $B(1, 5)$ and falls from there on.",
                  "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
                },
                {
                  "step": "The graph falls from $x = 1$ on.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "$x \\ge 1$",
                  "reason": "Strict and nonstrict inequality: the turning point itself belongs to the interval, so the sign is nonstrict."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-1, -2)$, $B(0, 2)$, $C(1, 0)$ and $D(2, -2)$, and the graph keeps its direction beyond the edges of the figure.",
            "figure": {
              "file": "monotonic-functions-13.svg",
              "alt": "A curve through the marked points A(−1, −2), B(0, 2), C(1, 0) and D(2, −2)."
            },
            "lines": [
              {
                "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-1, -2)$, $B(0, 2)$, $C(1, 0)$ and $D(2, -2)$, and the graph keeps its direction beyond the edges of the figure.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In the figure the graph rises from left to right as far as the marked point $B(0, 2)$, falls from $B$ to the marked point $D(2, -2)$, and rises from $D$ on.",
                "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
              },
              {
                "step": "The part that falls starts at $B$: there $x \\ge 0$.",
                "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
              },
              {
                "step": "The part that falls ends at $D$: there $x \\le 2$.",
                "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
              },
              {
                "step": "The interval is $x \\ge 0$ and $x \\le 2$.",
                "reason": "Strict and nonstrict inequality: both turning points belong to the interval, so both signs are nonstrict."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-4, 3)$, $B(-3, -1)$, $C(-1, 3)$ and $D(0, -1)$, and the graph keeps its direction beyond the edges of the figure.",
              "figure": {
                "file": "monotonic-functions-14.svg",
                "alt": "A curve through the marked points A(−4, 3), B(−3, −1), C(−1, 3) and D(0, −1)."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x >= -3 and x <= -1",
              "lines": [
                {
                  "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically increasing. The marked points are $A(-4, 3)$, $B(-3, -1)$, $C(-1, 3)$ and $D(0, -1)$, and the graph keeps its direction beyond the edges of the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the figure the graph falls from left to right as far as the marked point $B(-3, -1)$, rises from $B$ to the marked point $C(-1, 3)$, and falls from $C$ on.",
                  "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
                },
                {
                  "step": "The part that rises starts at $B$: there $x \\ge -3$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "The part that rises ends at $C$: there $x \\le -1$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "The interval is $x \\ge -3$ and $x \\le -1$.",
                  "reason": "Strict and nonstrict inequality: both turning points belong to the interval, so both signs are nonstrict."
                }
              ]
            },
            {
              "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-3, -4)$, $B(-1, 4)$, $C(1, 0)$, $D(3, -4)$ and $E(5, 4)$, and the graph keeps its direction beyond the edges of the figure.",
              "figure": {
                "file": "monotonic-functions-15.svg",
                "alt": "A curve through the marked points A(−3, −4), B(−1, 4), C(1, 0), D(3, −4) and E(5, 4)."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x >= -1 and x <= 3",
              "lines": [
                {
                  "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(-3, -4)$, $B(-1, 4)$, $C(1, 0)$, $D(3, -4)$ and $E(5, 4)$, and the graph keeps its direction beyond the edges of the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the figure the graph rises from left to right as far as the marked point $B(-1, 4)$, falls from $B$ to the marked point $D(3, -4)$, and rises from $D$ on.",
                  "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
                },
                {
                  "step": "The part that falls starts at $B$: there $x \\ge -1$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "The part that falls ends at $D$: there $x \\le 3$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "The interval is $x \\ge -1$ and $x \\le 3$.",
                  "reason": "Strict and nonstrict inequality: both turning points belong to the interval, so both signs are nonstrict."
                }
              ]
            },
            {
              "prompt": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(2, 3)$, $B(3, -1)$, $C(4, -5)$ and $D(5, 3)$, and the graph keeps its direction beyond the edges of the figure.",
              "figure": {
                "file": "monotonic-functions-16.svg",
                "alt": "A curve through the marked points A(2, 3), B(3, −1), C(4, −5) and D(5, 3)."
              },
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x >= 2 and x <= 4",
              "lines": [
                {
                  "step": "Write, as an inequality for $x$, or two joined by and, the largest interval on which the function graphed in the figure is monotonically decreasing. The marked points are $A(2, 3)$, $B(3, -1)$, $C(4, -5)$ and $D(5, 3)$, and the graph keeps its direction beyond the edges of the figure.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the figure the graph rises from left to right as far as the marked point $A(2, 3)$, falls from $A$ to the marked point $C(4, -5)$, and rises from $C$ on.",
                  "reason": "Graph of a function: the height of the graph over $x$ is the output $f(x)$."
                },
                {
                  "step": "The part that falls starts at $A$: there $x \\ge 2$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "The part that falls ends at $C$: there $x \\le 4$.",
                  "reason": "Monotonically increasing and Monotonically decreasing: a rising graph gives a greater output for a greater input, and a falling graph a smaller one."
                },
                {
                  "step": "The interval is $x \\ge 2$ and $x \\le 4$.",
                  "reason": "Strict and nonstrict inequality: both turning points belong to the interval, so both signs are nonstrict."
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
      "id": "t218-p1",
      "method": "direct proof",
      "statement": "Let $f$ be a function with $f(x + c) - f(x) > 0$ for every number $c > 0$ and all numbers $x$ and $x + c$ in the domain of $f$. Then $f$ is monotonically increasing.",
      "idea": "Of two inputs, the greater is the smaller plus a positive number, so the hypothesis compares their outputs.",
      "lines": [
        {
          "line": "Let $a$ and $b$ be numbers in the domain of $f$ with $a > b$.",
          "reason": "Monotonically increasing: the definition speaks of two such inputs."
        },
        {
          "line": "The number $c = a - b$ is positive.",
          "reason": "Adding the same number, from arithmetic: $-b$ is added to both sides of $a > b$."
        },
        {
          "line": "With $x = b$, the number $x + c$ is $a$.",
          "reason": "Substituting a value: $b + (a - b) = a$."
        },
        {
          "line": "So $f(a) - f(b) > 0$.",
          "reason": "The hypothesis: it holds for $x = b$ and $c = a - b$, since $b$ and $a$ are in the domain and $c > 0$."
        },
        {
          "line": "So $f(a) > f(b)$.",
          "reason": "Adding the same number, from arithmetic: $f(b)$ is added to both sides."
        },
        {
          "line": "So $f$ is monotonically increasing.",
          "reason": "Monotonically increasing: the line above holds for all $a > b$ in the domain."
        }
      ]
    },
    {
      "id": "t218-p2",
      "method": "direct proof",
      "statement": "The function $f(x) = x^3$ is monotonically increasing.",
      "idea": "The difference $(x + c)^3 - x^3$ is $c$ times a quadratic in $x$ that has no real root.",
      "lines": [
        {
          "line": "Let $x$ be a real number and $c$ a positive number. Then $(x + c)^3 - x^3 = 3cx^2 + 3c^2x + c^3$.",
          "reason": "Multiplying out: $(x + c)^3 = x^3 + 3cx^2 + 3c^2x + c^3$."
        },
        {
          "line": "So $(x + c)^3 - x^3 = c(3x^2 + 3cx + c^2)$.",
          "reason": "Factoring: each term has the factor $c$."
        },
        {
          "line": "As a quadratic in $x$, the bracket $3x^2 + 3cx + c^2$ has the discriminant $(3c)^2 - 4 \\cdot 3 \\cdot c^2 = -3c^2$.",
          "reason": "The discriminant: the square of the coefficient of $x$, less four times the product of the coefficient of $x^2$ and the constant term."
        },
        {
          "line": "The number $c^2$ is positive.",
          "reason": "Trivial Inequality: a square is at least $0$, and is $0$ only when the number squared is $0$; here $c$ is not $0$."
        },
        {
          "line": "So the discriminant $-3c^2$ is negative.",
          "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides of $c^2 > 0$ are multiplied by $-3$."
        },
        {
          "line": "So $3x^2 + 3cx + c^2$ has no real root.",
          "reason": "Negative discriminant: a quadratic with a negative discriminant has no real root."
        },
        {
          "line": "At $x = 0$ the value of $3x^2 + 3cx + c^2$ is $c^2$, which is positive.",
          "reason": "Substituting a value: $0$ goes in for $x$, and $c^2$ is positive by the fourth line."
        },
        {
          "line": "So $3x^2 + 3cx + c^2$ is positive for every real $x$.",
          "reason": "A quadratic with no real root keeps one sign: its value at one number gives its sign at every number."
        },
        {
          "line": "So $(x + c)^3 - x^3$ is positive.",
          "reason": "A product is positive when its factors have the same sign and negative when they differ: both $c$ and the bracket are positive."
        },
        {
          "line": "So $f(x) = x^3$ is monotonically increasing.",
          "reason": "Difference test: $f(x + c) - f(x) > 0$ for every real $x$ and every $c > 0$."
        }
      ]
    },
    {
      "id": "t218-p3",
      "method": "proof by cases",
      "statement": "Let $f$ be a monotonically increasing function, and let $a$ and $b$ be different numbers in its domain. Then $f(a) \\ne f(b)$.",
      "idea": "Of two different inputs one is the greater, and the greater input has the greater output.",
      "lines": [
        {
          "line": "Since $a \\ne b$, either $a > b$ or $b > a$.",
          "reason": "Strict and nonstrict inequality: of two different numbers one is the greater."
        },
        {
          "line": "In the first case, $f(a) > f(b)$.",
          "reason": "Monotonically increasing: here $a > b$."
        },
        {
          "line": "In the second case, $f(b) > f(a)$.",
          "reason": "Monotonically increasing: here $b > a$."
        },
        {
          "line": "In each case, $f(a) \\ne f(b)$.",
          "reason": "Strict and nonstrict inequality: a number greater than another is not equal to it."
        }
      ]
    },
    {
      "id": "t218-p4",
      "method": "direct proof",
      "statement": "Let $a$ be a number greater than 1. Then the function $f(x) = \\log_a x$ is monotonically increasing on the positive numbers.",
      "idea": "The difference of two logarithms is the logarithm of a number above 1, and only a positive power of $a$ is above 1.",
      "lines": [
        {
          "line": "Let $x$ and $c$ be positive numbers. Then $\\log_a (x + c) - \\log_a x = \\log_a \\dfrac{x + c}{x}$.",
          "reason": "Log of a quotient: a difference of logarithms to one base is the logarithm of the quotient."
        },
        {
          "line": "The quotient is $\\dfrac{x + c}{x} = 1 + \\dfrac{c}{x}$.",
          "reason": "Adding fractions with the same denominator, from arithmetic: $\\dfrac{x}{x} + \\dfrac{c}{x}$ has the top $x + c$, and $\\dfrac{x}{x} = 1$."
        },
        {
          "line": "Here $1 + \\dfrac{c}{x} > 1$.",
          "reason": "Adding the same number, from arithmetic: $\\dfrac{c}{x}$ is positive, and $1$ is added to both sides of $\\dfrac{c}{x} > 0$."
        },
        {
          "line": "Write $y$ for $\\log_a \\left(1 + \\dfrac{c}{x}\\right)$. Then $a^y = 1 + \\dfrac{c}{x}$.",
          "reason": "Logarithm: $\\log_a b = y$ means $a^y = b$."
        },
        {
          "line": "So $a^y > a^0$.",
          "reason": "Zero exponent: $a^0 = 1$, and $a^y > 1$ by the two lines above."
        },
        {
          "line": "If $y \\le 0$, then $a^y \\le a^0$.",
          "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power, so an exponent below $0$ gives a power below $a^0$; and the exponent $0$ gives $a^0$ itself."
        },
        {
          "line": "So $y > 0$.",
          "reason": "Strict and nonstrict inequality: $a^y \\le a^0$ and $a^y > a^0$ cannot both hold, so $y \\le 0$ is false."
        },
        {
          "line": "So $\\log_a (x + c) - \\log_a x > 0$.",
          "reason": "Substituting a value: by the first, second and fourth lines the difference is $y$."
        },
        {
          "line": "So $f(x) = \\log_a x$ is monotonically increasing on the positive numbers.",
          "reason": "Difference test: the difference $f(x + c) - f(x)$ is positive for all positive $x$ and $c$."
        }
      ]
    },
    {
      "id": "t218-p5",
      "method": "direct proof",
      "statement": "Let $a$ be a number greater than 1, and let $m$ and $n$ be real numbers with $a^m = a^n$. Then $m = n$.",
      "idea": "The exponential function is monotonically increasing, so it never gives one output for two different inputs.",
      "lines": [
        {
          "line": "The function $f(x) = a^x$ is monotonically increasing.",
          "reason": "Exponential function is increasing: for a base greater than 1, a greater exponent gives a greater power."
        },
        {
          "line": "So $f$ gives different outputs for different inputs.",
          "reason": "Monotonic functions are one-to-one: $f$ is monotonically increasing."
        },
        {
          "line": "The inputs $m$ and $n$ give the same output.",
          "reason": "The hypothesis: $a^m = a^n$ says $f(m) = f(n)$."
        },
        {
          "line": "So $m = n$.",
          "reason": "Monotonic functions are one-to-one: by the second line, inputs with the same output are not different."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t218-s1",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are monotonically increasing functions with the same domain, then $h(x) = f(x) + g(x)$ is monotonically increasing. Facts it may use: Monotonically increasing, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be numbers in the domain with $a > b$.",
            "reason": "Monotonically increasing: the definition speaks of two such inputs."
          },
          {
            "line": "Then $f(a) > f(b)$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing."
          },
          {
            "line": "Also $g(a) > g(b)$.",
            "reason": "Monotonically increasing: $g$ is monotonically increasing."
          },
          {
            "line": "So $f(a) + g(a) > f(b) + g(b)$.",
            "reason": "Adding two inequalities, from arithmetic: the two lines above are added."
          },
          {
            "line": "So $h(a) > h(b)$.",
            "reason": "Substituting a value: $h(a) = f(a) + g(a)$ and $h(b) = f(b) + g(b)$."
          },
          {
            "line": "So $h$ is monotonically increasing.",
            "reason": "Monotonically increasing: the line above holds for all $a > b$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t218-s2",
      "method": "direct proof",
      "statement": "Prove that if $f$ and $g$ are monotonically increasing functions and every output of $g$ is in the domain of $f$, then $h(x) = f(g(x))$ is monotonically increasing. Facts it may use: Monotonically increasing, composition.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be numbers in the domain of $g$ with $a > b$.",
            "reason": "Monotonically increasing: the definition speaks of two such inputs."
          },
          {
            "line": "Then $g(a) > g(b)$.",
            "reason": "Monotonically increasing: $g$ is monotonically increasing."
          },
          {
            "line": "So $f(g(a)) > f(g(b))$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing, and $g(a)$ and $g(b)$ are in its domain with $g(a) > g(b)$."
          },
          {
            "line": "So $h(a) > h(b)$.",
            "reason": "Composition $f(g(x))$: $h(a) = f(g(a))$ and $h(b) = f(g(b))$."
          },
          {
            "line": "So $h$ is monotonically increasing.",
            "reason": "Monotonically increasing: the line above holds for all $a > b$ in the domain of $g$."
          }
        ]
      }
    },
    {
      "id": "t218-s3",
      "method": "direct proof",
      "statement": "Prove that if $f$ is a monotonically increasing function, then $g(x) = -f(x)$ is monotonically decreasing. Facts it may use: Monotonically increasing, Monotonically decreasing, multiplying by a negative number reverses the sign.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be numbers in the domain of $f$ with $a > b$.",
            "reason": "Monotonically decreasing: the definition speaks of two such inputs."
          },
          {
            "line": "Then $f(a) > f(b)$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing."
          },
          {
            "line": "So $-f(a) < -f(b)$.",
            "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
          },
          {
            "line": "So $g(a) < g(b)$.",
            "reason": "Substituting a value: $g(a) = -f(a)$ and $g(b) = -f(b)$."
          },
          {
            "line": "So $g$ is monotonically decreasing.",
            "reason": "Monotonically decreasing: the line above holds for all $a > b$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t218-s4",
      "method": "direct proof",
      "statement": "Prove that $f(x) = x - \\dfrac{1}{x}$ is monotonically increasing on the positive numbers. Facts it may use: Difference test, reciprocals of numbers of the same sign reverse the order, adding the same number to both sides, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ and $c$ be positive numbers. Then $f(x + c) - f(x) = c + \\dfrac{1}{x} - \\dfrac{1}{x + c}$.",
            "reason": "Substituting a value: $x + c$ goes where $x$ stands in $f(x)$, and $(x + c) - x = c$."
          },
          {
            "line": "Here $x + c > x$.",
            "reason": "Adding the same number, from arithmetic: $x$ is added to both sides of $c > 0$."
          },
          {
            "line": "So $\\dfrac{1}{x + c} < \\dfrac{1}{x}$.",
            "reason": "Reciprocals of numbers of the same sign reverse the order: $x + c$ and $x$ are both positive."
          },
          {
            "line": "So $\\dfrac{1}{x} - \\dfrac{1}{x + c} > 0$.",
            "reason": "Adding the same number, from arithmetic: $-\\dfrac{1}{x + c}$ is added to both sides."
          },
          {
            "line": "So $c + \\dfrac{1}{x} - \\dfrac{1}{x + c} > 0$.",
            "reason": "Adding two inequalities, from arithmetic: $c > 0$ and the line above are added."
          },
          {
            "line": "So $f(x + c) - f(x) > 0$.",
            "reason": "Substituting a value: by the first line the difference is the sum of the line above."
          },
          {
            "line": "So $f$ is monotonically increasing on the positive numbers.",
            "reason": "Difference test: the line above holds for all positive numbers $x$ and $c$, and then $x$ and $x + c$ are both positive."
          }
        ]
      }
    },
    {
      "id": "t218-s5",
      "method": "proof by cases",
      "statement": "Prove that a function $f$ whose domain is all real numbers, and which is monotonically increasing on $x \\le 0$ and on $x \\ge 0$, is monotonically increasing. Facts it may use: Monotonically increasing, transitivity, strict and nonstrict inequality.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers with $a > b$.",
            "reason": "Monotonically increasing: the definition speaks of two such inputs."
          },
          {
            "line": "Then $b \\ge 0$, or $a \\le 0$, or $b < 0 < a$.",
            "reason": "Strict and nonstrict inequality: where $b \\ge 0$ is false, $b < 0$; where $a \\le 0$ is false, $a > 0$."
          },
          {
            "line": "In the first case, $a > 0$.",
            "reason": "Transitivity, from arithmetic: $a > b$ and $b \\ge 0$."
          },
          {
            "line": "So $f(a) > f(b)$ in the first case.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing on $x \\ge 0$, and $a$ and $b$ are both in that part."
          },
          {
            "line": "In the second case, $b < 0$.",
            "reason": "Transitivity, from arithmetic: $b < a$ and $a \\le 0$."
          },
          {
            "line": "So $f(a) > f(b)$ in the second case.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing on $x \\le 0$, and $a$ and $b$ are both in that part."
          },
          {
            "line": "In the third case, $f(a) > f(0)$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing on $x \\ge 0$, and $a > 0$."
          },
          {
            "line": "Also $f(0) > f(b)$ in the third case.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing on $x \\le 0$, and $0 > b$."
          },
          {
            "line": "So $f(a) > f(b)$ in the third case.",
            "reason": "Transitivity, from arithmetic: the two lines above."
          },
          {
            "line": "So $f$ is monotonically increasing.",
            "reason": "Monotonically increasing: $f(a) > f(b)$ in each of the three cases, for all real numbers $a > b$."
          }
        ]
      }
    },
    {
      "id": "t218-s6",
      "method": "proof of the contrapositive",
      "statement": "Prove that if $f$ is a monotonically increasing function and $a$ and $b$ are numbers in its domain with $f(a) < f(b)$, then $a < b$. Facts it may use: Monotonically increasing, strict and nonstrict inequality.",
      "check": {
        "proof": [
          {
            "line": "The contrapositive reads: if $a \\ge b$, then $f(a) \\ge f(b)$. Assume that $a \\ge b$.",
            "reason": "Proof of the contrapositive: \"if not $a < b$, then not $f(a) < f(b)$\" says the same as the statement."
          },
          {
            "line": "Then $a = b$ or $a > b$.",
            "reason": "Strict and nonstrict inequality: this is what $a \\ge b$ says."
          },
          {
            "line": "If $a = b$, then $f(a) = f(b)$.",
            "reason": "Function: one input has one output."
          },
          {
            "line": "If $a > b$, then $f(a) > f(b)$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing."
          },
          {
            "line": "In both cases $f(a) \\ge f(b)$.",
            "reason": "Strict and nonstrict inequality: $f(a) \\ge f(b)$ says that $f(a) = f(b)$ or $f(a) > f(b)$."
          },
          {
            "line": "So if $f(a) < f(b)$, then $a < b$.",
            "reason": "Proof of the contrapositive: the contrapositive is proved, and it says the same as the statement."
          }
        ]
      }
    },
    {
      "id": "t218-s7",
      "method": "direct proof",
      "statement": "Prove that for a number $a$ with $0 < a < 1$, the function $f(x) = \\log_a x$ is monotonically decreasing on the positive numbers. Facts it may use: Logarithm is increasing, Change of base, logarithm, negative exponent, reciprocals of numbers of the same sign reverse the order, multiplying by a negative number reverses the sign.",
      "check": {
        "proof": [
          {
            "line": "Write $b$ for $\\dfrac{1}{a}$. Then $b > 1$.",
            "reason": "Reciprocals of numbers of the same sign reverse the order: $0 < a < 1$ gives $\\dfrac{1}{a} > \\dfrac{1}{1}$."
          },
          {
            "line": "For every positive number $x$, $\\log_a x = \\dfrac{\\log_b x}{\\log_b a}$.",
            "reason": "Change of base: a logarithm to base $a$ is a quotient of two logarithms to base $b$."
          },
          {
            "line": "Here $\\log_b a = -1$.",
            "reason": "Logarithm and Negative exponent: $b^{-1} = \\dfrac{1}{b} = a$."
          },
          {
            "line": "So $\\log_a x = -\\log_b x$ for every positive number $x$.",
            "reason": "Substituting a value: $-1$ goes in for $\\log_b a$."
          },
          {
            "line": "Let $x$ and $y$ be numbers with $x > y > 0$. Then $\\log_b x > \\log_b y$.",
            "reason": "Logarithm is increasing: the base $b$ is greater than 1."
          },
          {
            "line": "So $-\\log_b x < -\\log_b y$.",
            "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
          },
          {
            "line": "So $\\log_a x < \\log_a y$.",
            "reason": "Substituting a value: by the fourth line, $-\\log_b x$ is $\\log_a x$ and $-\\log_b y$ is $\\log_a y$."
          },
          {
            "line": "So $f$ is monotonically decreasing on the positive numbers.",
            "reason": "Monotonically decreasing: the line above holds for all $x > y > 0$."
          }
        ]
      }
    },
    {
      "id": "t218-s8",
      "method": "direct proof",
      "statement": "Prove that if $f$ is a monotonically increasing function and every output of $f$ is positive, then $g(x) = \\dfrac{1}{f(x)}$ is monotonically decreasing. Facts it may use: Monotonically increasing, Monotonically decreasing, reciprocals of numbers of the same sign reverse the order.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be numbers in the domain of $f$ with $a > b$.",
            "reason": "Monotonically decreasing: the definition speaks of two such inputs."
          },
          {
            "line": "Then $f(a) > f(b)$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing."
          },
          {
            "line": "So $\\dfrac{1}{f(a)} < \\dfrac{1}{f(b)}$.",
            "reason": "Reciprocals of numbers of the same sign reverse the order: $f(a)$ and $f(b)$ are both positive."
          },
          {
            "line": "So $g(a) < g(b)$.",
            "reason": "Substituting a value: $g(a) = \\dfrac{1}{f(a)}$ and $g(b) = \\dfrac{1}{f(b)}$."
          },
          {
            "line": "So $g$ is monotonically decreasing.",
            "reason": "Monotonically decreasing: the line above holds for all $a > b$ in the domain."
          }
        ]
      }
    },
    {
      "id": "t218-s9",
      "method": "direct proof",
      "statement": "Prove that if $f$ is a monotonically increasing function and $g$ is a monotonically decreasing function with the same domain, then the equation $f(x) = g(x)$ has at most one solution. Facts it may use: Monotonically increasing, Monotonically decreasing, Monotonic functions are one-to-one, multiplying by a negative number reverses the sign, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be numbers in the domain with $a > b$.",
            "reason": "Monotonically increasing: the definition speaks of two such inputs."
          },
          {
            "line": "Then $f(a) > f(b)$.",
            "reason": "Monotonically increasing: $f$ is monotonically increasing."
          },
          {
            "line": "Also $g(a) < g(b)$.",
            "reason": "Monotonically decreasing: $g$ is monotonically decreasing."
          },
          {
            "line": "So $-g(a) > -g(b)$.",
            "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides are multiplied by $-1$."
          },
          {
            "line": "So $f(a) - g(a) > f(b) - g(b)$.",
            "reason": "Adding two inequalities, from arithmetic: the second and fourth lines are added."
          },
          {
            "line": "Write $h(x)$ for $f(x) - g(x)$. Then $h(a) > h(b)$.",
            "reason": "Substituting a value: $h(a) = f(a) - g(a)$ and $h(b) = f(b) - g(b)$."
          },
          {
            "line": "So $h$ is monotonically increasing.",
            "reason": "Monotonically increasing: the line above holds for all $a > b$ in the domain."
          },
          {
            "line": "So the equation $h(x) = 0$ has at most one solution.",
            "reason": "Monotonic functions are one-to-one: different inputs give different outputs, so at most one input gives the output $0$."
          },
          {
            "line": "Every solution of $f(x) = g(x)$ is a solution of $h(x) = 0$.",
            "reason": "Adding the same number to both sides, from arithmetic: $-g(x)$ is added to both sides of $f(x) = g(x)$, and $f(x) - g(x)$ is $h(x)$."
          },
          {
            "line": "So the equation $f(x) = g(x)$ has at most one solution.",
            "reason": "Monotonic functions are one-to-one: by the line above each of its solutions is a solution of $h(x) = 0$, and by the line before that there is at most one."
          }
        ]
      }
    }
  ]
}
