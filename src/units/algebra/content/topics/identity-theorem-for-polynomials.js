export default {
  "number": 201,
  "title": "The Identity Theorem for polynomials",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "219-225"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $f(1)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(k) = 2k^3 + 8k^2 - 6k$ for $k = -3$, $k = -1$, $k = 2$ and $k = 5$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "4",
    "solution": [
      "Find $f(1)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(k) = 2k^3 + 8k^2 - 6k$ for $k = -3$, $k = -1$, $k = 2$ and $k = 5$.",
      "The polynomial $h(x) = f(x) - (2x^3 + 8x^2 - 6x)$ is $0$ at $x = -3$, $x = -1$, $x = 2$ and $x = 5$.",
      "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
      "The polynomial $h(x)$ is the zero polynomial.",
      "$f(x) = 2x^3 + 8x^2 - 6x$",
      "$f(1) = 2 \\cdot 1^3 + 8 \\cdot 1^2 - 6 \\cdot 1$",
      "$f(1) = 4$"
    ]
  },
  "ideas": [
    {
      "name": "Zero polynomial",
      "concrete": "The polynomial $f(x) = ax^2 + bx + c$ is $0$ at $x = -2$, $x = 1$ and $x = 6$. If $a$, $b$ and $c$ were not all $0$, then $f(x)$ would have degree $2$ or less, and so at most $2$ different roots, not $3$. So $a = 0$, $b = 0$ and $c = 0$.",
      "general": "Let $n$ be a whole number and $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$, where the numbers $a_n, \\dots, a_0$ may be $0$. If $f(x) = 0$ at $n + 1$ different numbers, then $a_n = a_{n-1} = \\dots = a_1 = a_0 = 0$, so $f(x)$ is the zero polynomial. A polynomial written this way is the zero polynomial or has degree at most $n$."
    },
    {
      "name": "Identity Theorem",
      "concrete": "The polynomial $f(x)$ has degree at most $2$, and $f(-1) = -19$, $f(1) = -1$ and $f(2) = 17$. The polynomial $3x^2 + 9x - 13$ has the same three values, and both have degree at most $2$, so $f(x) = 3x^2 + 9x - 13$ at every number $x$.",
      "general": "Let $n$ be a whole number, and let $f(x)$ and $g(x)$ be polynomials, each the zero polynomial or of degree at most $n$. If $f(x) = g(x)$ at $n + 1$ different numbers, then $f(x) = g(x)$ at every number $x$. This is the **Identity Theorem**."
    }
  ],
  "kinds": [
    {
      "id": "t201-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $f(-1)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = 5k^2 + 12k - 8$ for $k = -3$, $k = 0$ and $k = 4$.",
            "lines": [
              {
                "step": "Find $f(-1)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = 5k^2 + 12k - 8$ for $k = -3$, $k = 0$ and $k = 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $h(x) = f(x) - (5x^2 + 12x - 8)$ is $0$ at $x = -3$, $x = 0$ and $x = 4$.",
                "reason": "Substituting a value: at each of these numbers $f(k) = 5k^2 + 12k - 8$, so $h(k) = 0$."
              },
              {
                "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
                "reason": "Degree: neither $f(x)$ nor $5x^2 + 12x - 8$ has a power of $x$ above $x^2$, so their difference has none."
              },
              {
                "step": "The polynomial $h(x)$ is the zero polynomial.",
                "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^2$ that is $0$ at $3$ different numbers has every coefficient $0$."
              },
              {
                "step": "$f(x) = 5x^2 + 12x - 8$",
                "reason": "Adding the same number to both sides: $5x^2 + 12x - 8$ is added to both sides of $h(x) = 0$."
              },
              {
                "step": "$f(-1) = 5 \\cdot (-1)^2 + 12 \\cdot (-1) - 8$",
                "reason": "Substituting a value: $-1$ goes in place of $x$ in the line above, in brackets."
              },
              {
                "step": "$f(-1) = -15$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-4)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = 7k^2 + 18k + 11$ for $k = -2$, $k = 4$ and $k = 5$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "51",
              "lines": [
                {
                  "step": "Find $f(-4)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = 7k^2 + 18k + 11$ for $k = -2$, $k = 4$ and $k = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (7x^2 + 18x + 11)$ is $0$ at $x = -2$, $x = 4$ and $x = 5$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 7k^2 + 18k + 11$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
                  "reason": "Degree: neither $f(x)$ nor $7x^2 + 18x + 11$ has a power of $x$ above $x^2$, so their difference has none."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial.",
                  "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^2$ that is $0$ at $3$ different numbers has every coefficient $0$."
                },
                {
                  "step": "$f(x) = 7x^2 + 18x + 11$",
                  "reason": "Adding the same number to both sides: $7x^2 + 18x + 11$ is added to both sides of $h(x) = 0$."
                },
                {
                  "step": "$f(-4) = 7 \\cdot (-4)^2 + 18 \\cdot (-4) + 11$",
                  "reason": "Substituting a value: $-4$ goes in place of $x$ in the line above, in brackets."
                },
                {
                  "step": "$f(-4) = 51$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            },
            {
              "prompt": "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(k) = 3k^3 + 7k^2$ for $k = -4$, $k = -1$, $k = 0$ and $k = 2$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-200",
              "lines": [
                {
                  "step": "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(k) = 3k^3 + 7k^2$ for $k = -4$, $k = -1$, $k = 0$ and $k = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (3x^3 + 7x^2)$ is $0$ at $x = -4$, $x = -1$, $x = 0$ and $x = 2$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 3k^3 + 7k^2$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
                  "reason": "Degree: neither $f(x)$ nor $3x^3 + 7x^2$ has a power of $x$ above $x^3$, so their difference has none."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial.",
                  "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^3$ that is $0$ at $4$ different numbers has every coefficient $0$."
                },
                {
                  "step": "$f(x) = 3x^3 + 7x^2$",
                  "reason": "Adding the same number to both sides: $3x^3 + 7x^2$ is added to both sides of $h(x) = 0$."
                },
                {
                  "step": "$f(-5) = 3 \\cdot (-5)^3 + 7 \\cdot (-5)^2$",
                  "reason": "Substituting a value: $-5$ goes in place of $x$ in the line above, in brackets."
                },
                {
                  "step": "$f(-5) = -200$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            },
            {
              "prompt": "Find $f(2)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = -9k^2 - 14k + 6$ for $k = -4$, $k = 1$ and $k = 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-58",
              "lines": [
                {
                  "step": "Find $f(2)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(k) = -9k^2 - 14k + 6$ for $k = -4$, $k = 1$ and $k = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (-9x^2 - 14x + 6)$ is $0$ at $x = -4$, $x = 1$ and $x = 4$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = -9k^2 - 14k + 6$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
                  "reason": "Degree: neither $f(x)$ nor $-9x^2 - 14x + 6$ has a power of $x$ above $x^2$, so their difference has none."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial.",
                  "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^2$ that is $0$ at $3$ different numbers has every coefficient $0$."
                },
                {
                  "step": "$f(x) = -9x^2 - 14x + 6$",
                  "reason": "Adding the same number to both sides: $-9x^2 - 14x + 6$ is added to both sides of $h(x) = 0$."
                },
                {
                  "step": "$f(2) = -9 \\cdot 2^2 - 14 \\cdot 2 + 6$",
                  "reason": "Substituting a value: $2$ goes in place of $x$ in the line above, in brackets."
                },
                {
                  "step": "$f(2) = -58$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-5$ and $f(k) = 8k^2 - 17k + 11$ for $k = -4$, $k = -2$ and $k = 6$.",
            "lines": [
              {
                "step": "Find $f(-3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-5$ and $f(k) = 8k^2 - 17k + 11$ for $k = -4$, $k = -2$ and $k = 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $h(x) = f(x) - (8x^2 - 17x + 11)$ is $0$ at $x = -4$, $x = -2$ and $x = 6$.",
                "reason": "Substituting a value: at each of these numbers $f(k) = 8k^2 - 17k + 11$, so $h(k) = 0$."
              },
              {
                "step": "The polynomial $h(x)$ has degree $3$ and leading coefficient $-5$.",
                "reason": "Leading term: $8x^2 - 17x + 11$ has degree below $3$, so taking it away leaves the leading term $-5x^3$ of $f(x)$."
              },
              {
                "step": "$h(x) = -5(x + 4)(x + 2)(x - 6)$",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$f(-3) - (8 \\cdot (-3)^2 - 17 \\cdot (-3) + 11) = -5(-3 + 4)(-3 + 2)(-3 - 6)$",
                "reason": "Substituting a value: $-3$ goes in place of $x$ in $h(x) = f(x) - (8x^2 - 17x + 11)$ and in the line above."
              },
              {
                "step": "$f(-3) - 134 = -45$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              },
              {
                "step": "$f(-3) = 89$",
                "reason": "Adding the same number to both sides: $134$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(-2)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $-2$ and $f(k) = 8k^3 - 12k - 17$ for $k = -5$, $k = -3$, $k = 2$ and $k = 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-177",
              "lines": [
                {
                  "step": "Find $f(-2)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $-2$ and $f(k) = 8k^3 - 12k - 17$ for $k = -5$, $k = -3$, $k = 2$ and $k = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (8x^3 - 12x - 17)$ is $0$ at $x = -5$, $x = -3$, $x = 2$ and $x = 3$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 8k^3 - 12k - 17$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $4$ and leading coefficient $-2$.",
                  "reason": "Leading term: $8x^3 - 12x - 17$ has degree below $4$, so taking it away leaves the leading term $-2x^4$ of $f(x)$."
                },
                {
                  "step": "$h(x) = -2(x + 5)(x + 3)(x - 2)(x - 3)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(-2) - (8 \\cdot (-2)^3 - 12 \\cdot (-2) - 17) = -2(-2 + 5)(-2 + 3)(-2 - 2)(-2 - 3)$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$ in $h(x) = f(x) - (8x^3 - 12x - 17)$ and in the line above."
                },
                {
                  "step": "$f(-2) + 57 = -120$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$f(-2) = -177$",
                  "reason": "Adding the same number to both sides: $-57$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $f(1)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $3$ and $f(k) = -3k^2 + 15k - 14$ for $k = -1$, $k = 4$, $k = 5$ and $k = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-362",
              "lines": [
                {
                  "step": "Find $f(1)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $3$ and $f(k) = -3k^2 + 15k - 14$ for $k = -1$, $k = 4$, $k = 5$ and $k = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (-3x^2 + 15x - 14)$ is $0$ at $x = -1$, $x = 4$, $x = 5$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = -3k^2 + 15k - 14$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $4$ and leading coefficient $3$.",
                  "reason": "Leading term: $-3x^2 + 15x - 14$ has degree below $4$, so taking it away leaves the leading term $3x^4$ of $f(x)$."
                },
                {
                  "step": "$h(x) = 3(x + 1)(x - 4)(x - 5)(x - 6)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(1) - (-3 \\cdot 1^2 + 15 \\cdot 1 - 14) = 3(1 + 1)(1 - 4)(1 - 5)(1 - 6)$",
                  "reason": "Substituting a value: $1$ goes in place of $x$ in $h(x) = f(x) - (-3x^2 + 15x - 14)$ and in the line above."
                },
                {
                  "step": "$f(1) + 2 = -360$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$f(1) = -362$",
                  "reason": "Adding the same number to both sides: $-2$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $f(-1)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $2$ and $f(k) = 5k^3 + 15k^2 + 7$ for $k = -3$, $k = 1$, $k = 3$ and $k = 5$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-175",
              "lines": [
                {
                  "step": "Find $f(-1)$, where $f(x)$ is a polynomial of degree $4$ with leading coefficient $2$ and $f(k) = 5k^3 + 15k^2 + 7$ for $k = -3$, $k = 1$, $k = 3$ and $k = 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (5x^3 + 15x^2 + 7)$ is $0$ at $x = -3$, $x = 1$, $x = 3$ and $x = 5$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 5k^3 + 15k^2 + 7$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $4$ and leading coefficient $2$.",
                  "reason": "Leading term: $5x^3 + 15x^2 + 7$ has degree below $4$, so taking it away leaves the leading term $2x^4$ of $f(x)$."
                },
                {
                  "step": "$h(x) = 2(x + 3)(x - 1)(x - 3)(x - 5)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(-1) - (5 \\cdot (-1)^3 + 15 \\cdot (-1)^2 + 7) = 2(-1 + 3)(-1 - 1)(-1 - 3)(-1 - 5)$",
                  "reason": "Substituting a value: $-1$ goes in place of $x$ in $h(x) = f(x) - (5x^3 + 15x^2 + 7)$ and in the line above."
                },
                {
                  "step": "$f(-1) - 17 = -192$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$f(-1) = -175$",
                  "reason": "Adding the same number to both sides: $17$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(1)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 3k^2 + 12k + 10$ for $k = -5$, $k = 2$ and $k = 4$, and $f(5) = 220$.",
            "lines": [
              {
                "step": "Find $f(1)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 3k^2 + 12k + 10$ for $k = -5$, $k = 2$ and $k = 4$, and $f(5) = 220$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $h(x) = f(x) - (3x^2 + 12x + 10)$ is $0$ at $x = -5$, $x = 2$ and $x = 4$.",
                "reason": "Substituting a value: at each of these numbers $f(k) = 3k^2 + 12k + 10$, so $h(k) = 0$."
              },
              {
                "step": "The polynomial $h(x)$ has degree $3$.",
                "reason": "Degree: $3x^2 + 12x + 10$ has degree below $3$, so taking it away leaves the term in $x^3$ of $f(x)$."
              },
              {
                "step": "The polynomial $h(x)$ is $a(x + 5)(x - 2)(x - 4)$, with $a$ its leading coefficient.",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$220 - (3 \\cdot 5^2 + 12 \\cdot 5 + 10) = a(5 + 5)(5 - 2)(5 - 4)$",
                "reason": "Substituting a value: $5$ goes in place of $x$ in $h(x) = f(x) - (3x^2 + 12x + 10)$ and in the line above, and $f(5) = 220$."
              },
              {
                "step": "$75 = 30a$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              },
              {
                "step": "$a = \\dfrac{5}{2}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $30$."
              },
              {
                "step": "$f(1) - (3 \\cdot 1^2 + 12 \\cdot 1 + 10) = \\dfrac{5}{2}(1 + 5)(1 - 2)(1 - 4)$",
                "reason": "Substituting a value: $1$ goes in place of $x$ in $h(x) = f(x) - (3x^2 + 12x + 10)$ and in line 4, with the value of $a$."
              },
              {
                "step": "$f(1) - 25 = 45$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              },
              {
                "step": "$f(1) = 70$",
                "reason": "Adding the same number to both sides: $25$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(3)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 5k^2 + 11k - 5$ for $k = -2$, $k = 5$ and $k = 6$, and $f(1) = 31$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "83",
              "lines": [
                {
                  "step": "Find $f(3)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 5k^2 + 11k - 5$ for $k = -2$, $k = 5$ and $k = 6$, and $f(1) = 31$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (5x^2 + 11x - 5)$ is $0$ at $x = -2$, $x = 5$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 5k^2 + 11k - 5$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $3$.",
                  "reason": "Degree: $5x^2 + 11x - 5$ has degree below $3$, so taking it away leaves the term in $x^3$ of $f(x)$."
                },
                {
                  "step": "The polynomial $h(x)$ is $a(x + 2)(x - 5)(x - 6)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$31 - (5 \\cdot 1^2 + 11 \\cdot 1 - 5) = a(1 + 2)(1 - 5)(1 - 6)$",
                  "reason": "Substituting a value: $1$ goes in place of $x$ in $h(x) = f(x) - (5x^2 + 11x - 5)$ and in the line above, and $f(1) = 31$."
                },
                {
                  "step": "$20 = 60a$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$a = \\dfrac{1}{3}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $60$."
                },
                {
                  "step": "$f(3) - (5 \\cdot 3^2 + 11 \\cdot 3 - 5) = \\dfrac{1}{3}(3 + 2)(3 - 5)(3 - 6)$",
                  "reason": "Substituting a value: $3$ goes in place of $x$ in $h(x) = f(x) - (5x^2 + 11x - 5)$ and in line 4, with the value of $a$."
                },
                {
                  "step": "$f(3) - 73 = 10$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$f(3) = 83$",
                  "reason": "Adding the same number to both sides: $73$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 8k^2 + 4k - 7$ for $k = -3$, $k = 1$ and $k = 6$, and $f(-1) = 81$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-45",
              "lines": [
                {
                  "step": "Find $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 8k^2 + 4k - 7$ for $k = -3$, $k = 1$ and $k = 6$, and $f(-1) = 81$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (8x^2 + 4x - 7)$ is $0$ at $x = -3$, $x = 1$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 8k^2 + 4k - 7$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $3$.",
                  "reason": "Degree: $8x^2 + 4x - 7$ has degree below $3$, so taking it away leaves the term in $x^3$ of $f(x)$."
                },
                {
                  "step": "The polynomial $h(x)$ is $a(x + 3)(x - 1)(x - 6)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$81 - (8 \\cdot (-1)^2 + 4 \\cdot (-1) - 7) = a(-1 + 3)(-1 - 1)(-1 - 6)$",
                  "reason": "Substituting a value: $-1$ goes in place of $x$ in $h(x) = f(x) - (8x^2 + 4x - 7)$ and in the line above, and $f(-1) = 81$."
                },
                {
                  "step": "$84 = 28a$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $28$."
                },
                {
                  "step": "$f(-4) - (8 \\cdot (-4)^2 + 4 \\cdot (-4) - 7) = 3(-4 + 3)(-4 - 1)(-4 - 6)$",
                  "reason": "Substituting a value: $-4$ goes in place of $x$ in $h(x) = f(x) - (8x^2 + 4x - 7)$ and in line 4, with the value of $a$."
                },
                {
                  "step": "$f(-4) - 105 = -150$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$f(-4) = -45$",
                  "reason": "Adding the same number to both sides: $105$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 7k^2 - 15k + 17$ for $k = -2$, $k = 1$ and $k = 4$, and $f(-4) = 229$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "34",
              "lines": [
                {
                  "step": "Find $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = 7k^2 - 15k + 17$ for $k = -2$, $k = 1$ and $k = 4$, and $f(-4) = 229$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (7x^2 - 15x + 17)$ is $0$ at $x = -2$, $x = 1$ and $x = 4$.",
                  "reason": "Substituting a value: at each of these numbers $f(k) = 7k^2 - 15k + 17$, so $h(k) = 0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $3$.",
                  "reason": "Degree: $7x^2 - 15x + 17$ has degree below $3$, so taking it away leaves the term in $x^3$ of $f(x)$."
                },
                {
                  "step": "The polynomial $h(x)$ is $a(x + 2)(x - 1)(x - 4)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$229 - (7 \\cdot (-4)^2 - 15 \\cdot (-4) + 17) = a(-4 + 2)(-4 - 1)(-4 - 4)$",
                  "reason": "Substituting a value: $-4$ goes in place of $x$ in $h(x) = f(x) - (7x^2 - 15x + 17)$ and in the line above, and $f(-4) = 229$."
                },
                {
                  "step": "$40 = -80a$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$a = -\\dfrac{1}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-80$."
                },
                {
                  "step": "$f(-1) - (7 \\cdot (-1)^2 - 15 \\cdot (-1) + 17) = -\\dfrac{1}{2}(-1 + 2)(-1 - 1)(-1 - 4)$",
                  "reason": "Substituting a value: $-1$ goes in place of $x$ in $h(x) = f(x) - (7x^2 - 15x + 17)$ and in line 4, with the value of $a$."
                },
                {
                  "step": "$f(-1) - 39 = -5$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$f(-1) = 34$",
                  "reason": "Adding the same number to both sides: $39$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{6}{k - 3}$ for $k = -2$, $k = 2$, $k = 4$ and $k = 5$.",
            "lines": [
              {
                "step": "Find $f(-4)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{6}{k - 3}$ for $k = -2$, $k = 2$, $k = 4$ and $k = 5$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For each of $k = -2$, $k = 2$, $k = 4$ and $k = 5$, the product $(k - 3)f(k)$ is $6$.",
                "reason": "Multiplying both sides by the same number: both sides of $f(k) = \\dfrac{6}{k - 3}$ are multiplied by $k - 3$, which is not $0$ at these numbers."
              },
              {
                "step": "The polynomial $h(x) = (x - 3)f(x) - 6$ is $0$ at $x = -2$, $x = 2$, $x = 4$ and $x = 5$.",
                "reason": "Substituting a value: at each of these numbers the line above makes the two parts of $h(x)$ equal, so their difference is $0$."
              },
              {
                "step": "The polynomial $h(x)$ has degree $4$.",
                "reason": "Degree of a product is the sum of the degrees: $x - 3$ has degree $1$ and $f(x)$ has degree $3$, and taking away $6$, of lower degree, leaves the leading term."
              },
              {
                "step": "The polynomial $h(x)$ is $a(x + 2)(x - 2)(x - 4)(x - 5)$, with $a$ its leading coefficient.",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$h(3) = -6$",
                "reason": "Substituting a value: at $x = 3$ the factor $x - 3$ is $0$, so $h(3) = 0 \\cdot f(3) - 6$."
              },
              {
                "step": "$-6 = a(3 + 2)(3 - 2)(3 - 4)(3 - 5)$",
                "reason": "Substituting a value: $3$ goes in place of $x$ in line 5."
              },
              {
                "step": "$-6 = 10a$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              },
              {
                "step": "$a = -\\dfrac{3}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
              },
              {
                "step": "$(-4 - 3)f(-4) - 6 = -\\dfrac{3}{5}(-4 + 2)(-4 - 2)(-4 - 4)(-4 - 5)$",
                "reason": "Substituting a value: $-4$ goes in place of $x$ in $h(x) = (x - 3)f(x) - 6$ and in line 5, with the value of $a$."
              },
              {
                "step": "$-7f(-4) - 6 = -\\dfrac{2592}{5}$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              },
              {
                "step": "$-7f(-4) = -\\dfrac{2562}{5}$",
                "reason": "Adding the same number to both sides: $6$ is added to both sides."
              },
              {
                "step": "$f(-4) = \\dfrac{366}{5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(0)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = \\dfrac{k - 4}{k + 5}$ for $k = -3$, $k = 5$ and $k = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-169/110",
              "lines": [
                {
                  "step": "Find $f(0)$, where $f(x)$ is a polynomial of degree $2$ with $f(k) = \\dfrac{k - 4}{k + 5}$ for $k = -3$, $k = 5$ and $k = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For each of $k = -3$, $k = 5$ and $k = 6$, the product $(k + 5)f(k)$ is $k - 4$.",
                  "reason": "Multiplying both sides by the same number: both sides of $f(k) = \\dfrac{k - 4}{k + 5}$ are multiplied by $k + 5$, which is not $0$ at these numbers."
                },
                {
                  "step": "The polynomial $h(x) = (x + 5)f(x) - (x - 4)$ is $0$ at $x = -3$, $x = 5$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers the line above makes the two parts of $h(x)$ equal, so their difference is $0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $3$.",
                  "reason": "Degree of a product is the sum of the degrees: $x + 5$ has degree $1$ and $f(x)$ has degree $2$, and taking away $x - 4$, of lower degree, leaves the leading term."
                },
                {
                  "step": "The polynomial $h(x)$ is $a(x + 3)(x - 5)(x - 6)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$h(-5) = 9$",
                  "reason": "Substituting a value: at $x = -5$ the factor $x + 5$ is $0$, so $h(-5) = 0 \\cdot f(-5) - (-5 - 4)$."
                },
                {
                  "step": "$9 = a(-5 + 3)(-5 - 5)(-5 - 6)$",
                  "reason": "Substituting a value: $-5$ goes in place of $x$ in line 5."
                },
                {
                  "step": "$9 = -220a$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$a = -\\dfrac{9}{220}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-220$."
                },
                {
                  "step": "$(0 + 5)f(0) - (0 - 4) = -\\dfrac{9}{220}(0 + 3)(0 - 5)(0 - 6)$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in $h(x) = (x + 5)f(x) - (x - 4)$ and in line 5, with the value of $a$."
                },
                {
                  "step": "$5f(0) + 4 = -\\dfrac{81}{22}$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$5f(0) = -\\dfrac{169}{22}$",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides."
                },
                {
                  "step": "$f(0) = -\\dfrac{169}{110}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find $f(3)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{4}{k - 1}$ for $k = -4$, $k = 4$, $k = 5$ and $k = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "43/25",
              "lines": [
                {
                  "step": "Find $f(3)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{4}{k - 1}$ for $k = -4$, $k = 4$, $k = 5$ and $k = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For each of $k = -4$, $k = 4$, $k = 5$ and $k = 6$, the product $(k - 1)f(k)$ is $4$.",
                  "reason": "Multiplying both sides by the same number: both sides of $f(k) = \\dfrac{4}{k - 1}$ are multiplied by $k - 1$, which is not $0$ at these numbers."
                },
                {
                  "step": "The polynomial $h(x) = (x - 1)f(x) - 4$ is $0$ at $x = -4$, $x = 4$, $x = 5$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers the line above makes the two parts of $h(x)$ equal, so their difference is $0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $4$.",
                  "reason": "Degree of a product is the sum of the degrees: $x - 1$ has degree $1$ and $f(x)$ has degree $3$, and taking away $4$, of lower degree, leaves the leading term."
                },
                {
                  "step": "The polynomial $h(x)$ is $a(x + 4)(x - 4)(x - 5)(x - 6)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$h(1) = -4$",
                  "reason": "Substituting a value: at $x = 1$ the factor $x - 1$ is $0$, so $h(1) = 0 \\cdot f(1) - 4$."
                },
                {
                  "step": "$-4 = a(1 + 4)(1 - 4)(1 - 5)(1 - 6)$",
                  "reason": "Substituting a value: $1$ goes in place of $x$ in line 5."
                },
                {
                  "step": "$-4 = -300a$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$a = \\dfrac{1}{75}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-300$."
                },
                {
                  "step": "$(3 - 1)f(3) - 4 = \\dfrac{1}{75}(3 + 4)(3 - 4)(3 - 5)(3 - 6)$",
                  "reason": "Substituting a value: $3$ goes in place of $x$ in $h(x) = (x - 1)f(x) - 4$ and in line 5, with the value of $a$."
                },
                {
                  "step": "$2f(3) - 4 = -\\dfrac{14}{25}$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$2f(3) = \\dfrac{86}{25}$",
                  "reason": "Adding the same number to both sides: $4$ is added to both sides."
                },
                {
                  "step": "$f(3) = \\dfrac{43}{25}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find $f(5)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{8}{k - 2}$ for $k = -4$, $k = -2$, $k = -1$ and $k = 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-5/6",
              "lines": [
                {
                  "step": "Find $f(5)$, where $f(x)$ is a polynomial of degree $3$ with $f(k) = \\dfrac{8}{k - 2}$ for $k = -4$, $k = -2$, $k = -1$ and $k = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For each of $k = -4$, $k = -2$, $k = -1$ and $k = 6$, the product $(k - 2)f(k)$ is $8$.",
                  "reason": "Multiplying both sides by the same number: both sides of $f(k) = \\dfrac{8}{k - 2}$ are multiplied by $k - 2$, which is not $0$ at these numbers."
                },
                {
                  "step": "The polynomial $h(x) = (x - 2)f(x) - 8$ is $0$ at $x = -4$, $x = -2$, $x = -1$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers the line above makes the two parts of $h(x)$ equal, so their difference is $0$."
                },
                {
                  "step": "The polynomial $h(x)$ has degree $4$.",
                  "reason": "Degree of a product is the sum of the degrees: $x - 2$ has degree $1$ and $f(x)$ has degree $3$, and taking away $8$, of lower degree, leaves the leading term."
                },
                {
                  "step": "The polynomial $h(x)$ is $a(x + 4)(x + 2)(x + 1)(x - 6)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$h(2) = -8$",
                  "reason": "Substituting a value: at $x = 2$ the factor $x - 2$ is $0$, so $h(2) = 0 \\cdot f(2) - 8$."
                },
                {
                  "step": "$-8 = a(2 + 4)(2 + 2)(2 + 1)(2 - 6)$",
                  "reason": "Substituting a value: $2$ goes in place of $x$ in line 5."
                },
                {
                  "step": "$-8 = -288a$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$a = \\dfrac{1}{36}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-288$."
                },
                {
                  "step": "$(5 - 2)f(5) - 8 = \\dfrac{1}{36}(5 + 4)(5 + 2)(5 + 1)(5 - 6)$",
                  "reason": "Substituting a value: $5$ goes in place of $x$ in $h(x) = (x - 2)f(x) - 8$ and in line 5, with the value of $a$."
                },
                {
                  "step": "$3f(5) - 8 = -\\dfrac{21}{2}$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                },
                {
                  "step": "$3f(5) = -\\dfrac{5}{2}$",
                  "reason": "Adding the same number to both sides: $8$ is added to both sides."
                },
                {
                  "step": "$f(5) = -\\dfrac{5}{6}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(-4)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-3) = -132$, $f(0) = 3$, $f(1) = 8$ and $f(3) = 138$.",
            "lines": [
              {
                "step": "Find $f(-4)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-3) = -132$, $f(0) = 3$, $f(1) = 8$ and $f(3) = 138$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The values are those of $g(x) = 5x^3 + 3$ at $x = -3$, $x = 0$, $x = 1$ and $x = 3$.",
                "reason": "Substituting a value: each number goes in place of $x$ in $5x^3 + 3$, in brackets, and gives the value the problem states."
              },
              {
                "step": "The polynomial $h(x) = f(x) - (5x^3 + 3)$ is $0$ at $x = -3$, $x = 0$, $x = 1$ and $x = 3$.",
                "reason": "Substituting a value: at each of these numbers $f(x)$ and $g(x)$ take the same value, so their difference is $0$."
              },
              {
                "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
                "reason": "Degree: neither $f(x)$ nor $5x^3 + 3$ has a power of $x$ above $x^3$, so their difference has none."
              },
              {
                "step": "The polynomial $h(x)$ is the zero polynomial.",
                "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^3$ that is $0$ at $4$ different numbers has every coefficient $0$."
              },
              {
                "step": "$f(x) = 5x^3 + 3$",
                "reason": "Adding the same number to both sides: $5x^3 + 3$ is added to both sides of $h(x) = 0$."
              },
              {
                "step": "$f(-4) = 5 \\cdot (-4)^3 + 3$",
                "reason": "Substituting a value: $-4$ goes in place of $x$ in the line above, in brackets."
              },
              {
                "step": "$f(-4) = -317$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(4)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-4) = -120$, $f(0) = 0$, $f(1) = 15$ and $f(2) = 36$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "120",
              "lines": [
                {
                  "step": "Find $f(4)$, where $f(x)$ is a polynomial of degree at most $3$ with $f(-4) = -120$, $f(0) = 0$, $f(1) = 15$ and $f(2) = 36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The values are those of $g(x) = x^3 + 14x$ at $x = -4$, $x = 0$, $x = 1$ and $x = 2$.",
                  "reason": "Substituting a value: each number goes in place of $x$ in $x^3 + 14x$, in brackets, and gives the value the problem states."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (x^3 + 14x)$ is $0$ at $x = -4$, $x = 0$, $x = 1$ and $x = 2$.",
                  "reason": "Substituting a value: at each of these numbers $f(x)$ and $g(x)$ take the same value, so their difference is $0$."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $3$.",
                  "reason": "Degree: neither $f(x)$ nor $x^3 + 14x$ has a power of $x$ above $x^3$, so their difference has none."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial.",
                  "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^3$ that is $0$ at $4$ different numbers has every coefficient $0$."
                },
                {
                  "step": "$f(x) = x^3 + 14x$",
                  "reason": "Adding the same number to both sides: $x^3 + 14x$ is added to both sides of $h(x) = 0$."
                },
                {
                  "step": "$f(4) = 4^3 + 14 \\cdot 4$",
                  "reason": "Substituting a value: $4$ goes in place of $x$ in the line above, in brackets."
                },
                {
                  "step": "$f(4) = 120$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            },
            {
              "prompt": "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(-4) = 21$, $f(0) = -11$ and $f(4) = 21$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "39",
              "lines": [
                {
                  "step": "Find $f(-5)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(-4) = 21$, $f(0) = -11$ and $f(4) = 21$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The values are those of $g(x) = 2x^2 - 11$ at $x = -4$, $x = 0$ and $x = 4$.",
                  "reason": "Substituting a value: each number goes in place of $x$ in $2x^2 - 11$, in brackets, and gives the value the problem states."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (2x^2 - 11)$ is $0$ at $x = -4$, $x = 0$ and $x = 4$.",
                  "reason": "Substituting a value: at each of these numbers $f(x)$ and $g(x)$ take the same value, so their difference is $0$."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
                  "reason": "Degree: neither $f(x)$ nor $2x^2 - 11$ has a power of $x$ above $x^2$, so their difference has none."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial.",
                  "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^2$ that is $0$ at $3$ different numbers has every coefficient $0$."
                },
                {
                  "step": "$f(x) = 2x^2 - 11$",
                  "reason": "Adding the same number to both sides: $2x^2 - 11$ is added to both sides of $h(x) = 0$."
                },
                {
                  "step": "$f(-5) = 2 \\cdot (-5)^2 - 11$",
                  "reason": "Substituting a value: $-5$ goes in place of $x$ in the line above, in brackets."
                },
                {
                  "step": "$f(-5) = 39$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            },
            {
              "prompt": "Find $f(-2)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(-1) = 7$, $f(0) = 13$ and $f(1) = 7$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-11",
              "lines": [
                {
                  "step": "Find $f(-2)$, where $f(x)$ is a polynomial of degree at most $2$ with $f(-1) = 7$, $f(0) = 13$ and $f(1) = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The values are those of $g(x) = -6x^2 + 13$ at $x = -1$, $x = 0$ and $x = 1$.",
                  "reason": "Substituting a value: each number goes in place of $x$ in $-6x^2 + 13$, in brackets, and gives the value the problem states."
                },
                {
                  "step": "The polynomial $h(x) = f(x) - (-6x^2 + 13)$ is $0$ at $x = -1$, $x = 0$ and $x = 1$.",
                  "reason": "Substituting a value: at each of these numbers $f(x)$ and $g(x)$ take the same value, so their difference is $0$."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial or has degree at most $2$.",
                  "reason": "Degree: neither $f(x)$ nor $-6x^2 + 13$ has a power of $x$ above $x^2$, so their difference has none."
                },
                {
                  "step": "The polynomial $h(x)$ is the zero polynomial.",
                  "reason": "Zero polynomial: a polynomial written with no power of $x$ above $x^2$ that is $0$ at $3$ different numbers has every coefficient $0$."
                },
                {
                  "step": "$f(x) = -6x^2 + 13$",
                  "reason": "Adding the same number to both sides: $-6x^2 + 13$ is added to both sides of $h(x) = 0$."
                },
                {
                  "step": "$f(-2) = -6 \\cdot (-2)^2 + 13$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$ in the line above, in brackets."
                },
                {
                  "step": "$f(-2) = -11$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t201-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f(-5)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $6$ that has the same values as $g(x) = 9x^2 + 17x + 7$ at $x = -1$, $x = 3$ and $x = 4$, and write that line right.",
            "given": [
              "$f(x) - (9x^2 + 17x + 7) = 6(x + 1)(x - 3)(x - 4)$",
              "$f(-5) - (9 \\cdot (-5)^2 + 17 \\cdot (-5) + 7) = 6(-5 + 1)(-5 - 3)(-5 - 4)$",
              "$f(-5) - 147 = 6 \\cdot 4 \\cdot (-8) \\cdot (-9)$",
              "$f(-5) - 147 = 1728$",
              "$f(-5) = 1875$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f(-5)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $6$ that has the same values as $g(x) = 9x^2 + 17x + 7$ at $x = -1$, $x = 3$ and $x = 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 gives the bracket $(-5 + 1)$ the value $4$, but its value is $-4$.",
                "reason": "A sign lost: by subtraction as addition, $-5 + 1 = -4$."
              },
              {
                "step": "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Transitive property: each line takes its values from the line before it, so the first line that breaks a rule is the first wrong line."
              },
              {
                "step": "Line 3 written right is $f(-5) - 147 = 6 \\cdot (-4) \\cdot (-8) \\cdot (-9)$.",
                "reason": "Subtraction as addition, from arithmetic: each bracket is worked out with its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f(3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $3$ that has the same values as $g(x) = -8x^2 + 13x + 15$ at $x = -1$, $x = 2$ and $x = 6$, and write that line right.",
              "given": [
                "$f(x) - (-8x^2 + 13x + 15) = 3(x - 1)(x - 2)(x - 6)$",
                "$f(3) - (-8 \\cdot 3^2 + 13 \\cdot 3 + 15) = 3(3 - 1)(3 - 2)(3 - 6)$",
                "$f(3) + 18 = 3 \\cdot 2 \\cdot 1 \\cdot (-3)$",
                "$f(3) + 18 = -18$",
                "$f(3) = -36$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: f(x)-(-8*x^2+13*x+15) = 3*(x+1)*(x-2)*(x-6)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(3)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $3$ that has the same values as $g(x) = -8x^2 + 13x + 15$ at $x = -1$, $x = 2$ and $x = 6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes the bracket for $-1$ as $x - 1$, so the minus sign of $-1$ is lost.",
                  "reason": "A sign lost: $f(x) - g(x)$ is $0$ at $x = -1$, so its bracket is $x - (-1) = x + 1$."
                },
                {
                  "step": "No line comes before line 1, and each later line follows from line 1 as it is written, so line 1 is the first wrong line.",
                  "reason": "Transitive property: each line takes its values from the line before it, so the first line that breaks a rule is the first wrong line."
                },
                {
                  "step": "Line 1 written right is $f(x) - (-8x^2 + 13x + 15) = 3(x + 1)(x - 2)(x - 6)$.",
                  "reason": "Factored form: each root $r$ of $f(x) - g(x)$ gives the bracket $x - r$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(5)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-3$ that has the same values as $g(x) = -4x^2 + 6x - 11$ at $x = -4$, $x = -3$ and $x = 4$, and write that line right.",
              "given": [
                "$f(x) - (-4x^2 + 6x - 11) = -3(x + 4)(x + 3)(x - 4)$",
                "$f(5) - (-4 \\cdot 5^2 + 6 \\cdot 5 - 11) = -3(5 + 4)(5 + 3)(5 - 4)$",
                "$f(5) + 81 = -3 \\cdot 9 \\cdot 8 \\cdot 1$",
                "$f(5) + 81 = 216$",
                "$f(5) = 135$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f(5)+81 = -216",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(5)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $-3$ that has the same values as $g(x) = -4x^2 + 6x - 11$ at $x = -4$, $x = -3$ and $x = 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 gives the product of line 3 the value $216$, but its value is $-216$.",
                  "reason": "A sign lost: the product has one negative factor, so it is negative."
                },
                {
                  "step": "The lines above line 4 are right, and each later line follows from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Transitive property: each line takes its values from the line before it, so the first line that breaks a rule is the first wrong line."
                },
                {
                  "step": "Line 4 written right is $f(5) + 81 = -216$.",
                  "reason": "Signs of products, from arithmetic: an odd number of negative factors gives a negative product."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $4$ that has the same values as $g(x) = -9x^2 + 9x + 14$ at $x = -5$, $x = -2$ and $x = 5$, and write that line right.",
              "given": [
                "$f(x) - (-9x^2 + 9x + 14) = 4(x + 5)(x + 2)(x - 5)$",
                "$f(-1) - (-9 \\cdot (-1)^2 + 9 \\cdot (-1) + 14) = 4(-1 + 5)(-1 + 2)(-1 - 5)$",
                "$f(-1) + 4 = 4 \\cdot 4 \\cdot 1 \\cdot (-6)$",
                "$f(-1) + 4 = -96$",
                "$f(-1) = -92$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: f(-1) = -100",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f(-1)$, where $f(x)$ is a polynomial of degree $3$ with leading coefficient $4$ that has the same values as $g(x) = -9x^2 + 9x + 14$ at $x = -5$, $x = -2$ and $x = 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 adds $4$ to $-96$, but $4$ is taken from both sides of line 4.",
                  "reason": "A sign lost: to leave $f(-1)$ alone, $-4$ is added to both sides, and $-96 + (-4) = -100$."
                },
                {
                  "step": "The lines above line 5 are right, so line 5 is the first wrong line.",
                  "reason": "Transitive property: each line takes its values from the line before it, so the first line that breaks a rule is the first wrong line."
                },
                {
                  "step": "Line 5 written right is $f(-1) = -100$.",
                  "reason": "Adding the same number to both sides: $-4$ is added to both sides of line 4."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t201-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $25a + 49b$, given that the numbers $a$, $b$ and $c$ satisfy $16a + 36b + c = 1$, $9a + 25b + 4c = 81$ and $4a + 16b + 9c = 289$.",
            "lines": [
              {
                "step": "Find $25a + 49b$, given that the numbers $a$, $b$ and $c$ satisfy $16a + 36b + c = 1$, $9a + 25b + 4c = 81$ and $4a + 16b + 9c = 289$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each equation is $a(x - 3)^2 + b(x - 5)^2 + c(x + 2)^2 = (8x + 9)^2$ at one of $x = -1$, $x = 0$ and $x = 1$.",
                "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
              },
              {
                "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
              },
              {
                "step": "The equation $a(x - 3)^2 + b(x - 5)^2 + c(x + 2)^2 = (8x + 9)^2$ holds at every number $x$.",
                "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
              },
              {
                "step": "At $x = -2$, the equation of the line above reads $a(-2 - 3)^2 + b(-2 - 5)^2 + c(-2 + 2)^2 = (8 \\cdot (-2) + 9)^2$.",
                "reason": "Substituting a value: $-2$ goes in place of $x$, in brackets."
              },
              {
                "step": "$25a + 49b = 49$",
                "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $64a + 4b + c$, given that the numbers $a$, $b$ and $c$ satisfy $a + 25b + 36c = 121$, $4a + 16b + 25c = 25$ and $9a + 9b + 16c = 1$.",
              "form": "Answer as an integer.",
              "answer": "961",
              "lines": [
                {
                  "step": "Find $64a + 4b + c$, given that the numbers $a$, $b$ and $c$ satisfy $a + 25b + 36c = 121$, $4a + 16b + 25c = 25$ and $9a + 9b + 16c = 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each equation is $a(x + 3)^2 + b(x - 3)^2 + c(x - 4)^2 = (6x + 1)^2$ at one of $x = -2$, $x = -1$ and $x = 0$.",
                  "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
                },
                {
                  "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                  "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
                },
                {
                  "step": "The equation $a(x + 3)^2 + b(x - 3)^2 + c(x - 4)^2 = (6x + 1)^2$ holds at every number $x$.",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
                },
                {
                  "step": "At $x = 5$, the equation of the line above reads $a(5 + 3)^2 + b(5 - 3)^2 + c(5 - 4)^2 = (6 \\cdot 5 + 1)^2$.",
                  "reason": "Substituting a value: $5$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$64a + 4b + c = 961$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            },
            {
              "prompt": "Find $36a + 64b + 49c$, given that the numbers $a$, $b$ and $c$ satisfy $9a + 25b + 16c = 49$, $16a + 36b + 25c = 25$ and $25a + 49b + 36c = 9$.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find $36a + 64b + 49c$, given that the numbers $a$, $b$ and $c$ satisfy $9a + 25b + 16c = 49$, $16a + 36b + 25c = 25$ and $25a + 49b + 36c = 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each equation is $a(x + 3)^2 + b(x + 5)^2 + c(x + 4)^2 = (2x - 7)^2$ at one of $x = 0$, $x = 1$ and $x = 2$.",
                  "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
                },
                {
                  "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                  "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
                },
                {
                  "step": "The equation $a(x + 3)^2 + b(x + 5)^2 + c(x + 4)^2 = (2x - 7)^2$ holds at every number $x$.",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
                },
                {
                  "step": "At $x = 3$, the equation of the line above reads $a(3 + 3)^2 + b(3 + 5)^2 + c(3 + 4)^2 = (2 \\cdot 3 - 7)^2$.",
                  "reason": "Substituting a value: $3$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$36a + 64b + 49c = 1$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            },
            {
              "prompt": "Find $16b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $4a + 36b + 16c = 361$, $9a + 49b + 25c = 441$ and $16a + 64b + 36c = 529$.",
              "form": "Answer as an integer.",
              "answer": "225",
              "lines": [
                {
                  "step": "Find $16b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $4a + 36b + 16c = 361$, $9a + 49b + 25c = 441$ and $16a + 64b + 36c = 529$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each equation is $a(x - 1)^2 + b(x + 3)^2 + c(x + 1)^2 = (2x + 13)^2$ at one of $x = 3$, $x = 4$ and $x = 5$.",
                  "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
                },
                {
                  "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                  "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
                },
                {
                  "step": "The equation $a(x - 1)^2 + b(x + 3)^2 + c(x + 1)^2 = (2x + 13)^2$ holds at every number $x$.",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
                },
                {
                  "step": "At $x = 1$, the equation of the line above reads $a(1 - 1)^2 + b(1 + 3)^2 + c(1 + 1)^2 = (2 \\cdot 1 + 13)^2$.",
                  "reason": "Substituting a value: $1$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$16b + 4c = 225$",
                  "reason": "Order of operations: each bracket is worked out first, then the powers and the products, with the signs of products."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $-8a - 4b + 10c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 16b + 9c = 1$, $25a + 9b + 16c = 4$ and $16a + 4b + 25c = 25$.",
            "lines": [
              {
                "step": "Find $-8a - 4b + 10c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 16b + 9c = 1$, $25a + 9b + 16c = 4$ and $16a + 4b + 25c = 25$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each equation is $a(x - 4)^2 + b(x - 2)^2 + c(x + 5)^2 = (3x + 5)^2$ at one of $x = -2$, $x = -1$ and $x = 0$.",
                "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
              },
              {
                "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
              },
              {
                "step": "The equation $a(x - 4)^2 + b(x - 2)^2 + c(x + 5)^2 = (3x + 5)^2$ holds at every number $x$.",
                "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
              },
              {
                "step": "The coefficient of $x$ on the left is $-8a - 4b + 10c$.",
                "reason": "Square of a binomial: the term in $x$ of $(dx + e)^2$ is $2dex$."
              },
              {
                "step": "The coefficient of $x$ on the right is $30$.",
                "reason": "Square of a binomial: the term in $x$ of $(3x + 5)^2$ is twice the product of $3x$ and $5$, which is $30x$."
              },
              {
                "step": "$-8a - 4b + 10c = 30$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $2a - 4b - 2c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + 4b + 9c = 16$, $36a + 9b + 16c = 49$ and $49a + 16b + 25c = 100$.",
              "form": "Answer as an integer.",
              "answer": "-48",
              "lines": [
                {
                  "step": "Find $2a - 4b - 2c$, given that the numbers $a$, $b$ and $c$ satisfy $25a + 4b + 9c = 16$, $36a + 9b + 16c = 49$ and $49a + 16b + 25c = 100$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each equation is $a(x + 1)^2 + b(x - 2)^2 + c(x - 1)^2 = (3x - 8)^2$ at one of $x = 4$, $x = 5$ and $x = 6$.",
                  "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
                },
                {
                  "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                  "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
                },
                {
                  "step": "The equation $a(x + 1)^2 + b(x - 2)^2 + c(x - 1)^2 = (3x - 8)^2$ holds at every number $x$.",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
                },
                {
                  "step": "The coefficient of $x$ on the left is $2a - 4b - 2c$.",
                  "reason": "Square of a binomial: the term in $x$ of $(dx + e)^2$ is $2dex$."
                },
                {
                  "step": "The coefficient of $x$ on the right is $-48$.",
                  "reason": "Square of a binomial: the term in $x$ of $(3x - 8)^2$ is twice the product of $3x$ and $-8$, which is $-48x$."
                },
                {
                  "step": "$2a - 4b - 2c = -48$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
                }
              ]
            },
            {
              "prompt": "Find $6a + 2b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 16b + 25c = 169$, $49a + 25b + 36c = 324$ and $64a + 36b + 49c = 529$.",
              "form": "Answer as an integer.",
              "answer": "-20",
              "lines": [
                {
                  "step": "Find $6a + 2b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 16b + 25c = 169$, $49a + 25b + 36c = 324$ and $64a + 36b + 49c = 529$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each equation is $a(x + 3)^2 + b(x + 1)^2 + c(x + 2)^2 = (5x - 2)^2$ at one of $x = 3$, $x = 4$ and $x = 5$.",
                  "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
                },
                {
                  "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                  "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
                },
                {
                  "step": "The equation $a(x + 3)^2 + b(x + 1)^2 + c(x + 2)^2 = (5x - 2)^2$ holds at every number $x$.",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
                },
                {
                  "step": "The coefficient of $x$ on the left is $6a + 2b + 4c$.",
                  "reason": "Square of a binomial: the term in $x$ of $(dx + e)^2$ is $2dex$."
                },
                {
                  "step": "The coefficient of $x$ on the right is $-20$.",
                  "reason": "Square of a binomial: the term in $x$ of $(5x - 2)^2$ is twice the product of $5x$ and $-2$, which is $-20x$."
                },
                {
                  "step": "$6a + 2b + 4c = -20$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
                }
              ]
            },
            {
              "prompt": "Find $-2a - 8b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 81b + 9c = 729$, $25a + 64b + 4c = 529$ and $16a + 49b + c = 361$.",
              "form": "Answer as an integer.",
              "answer": "-56",
              "lines": [
                {
                  "step": "Find $-2a - 8b + 4c$, given that the numbers $a$, $b$ and $c$ satisfy $36a + 81b + 9c = 729$, $25a + 64b + 4c = 529$ and $16a + 49b + c = 361$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each equation is $a(x - 1)^2 + b(x - 4)^2 + c(x + 2)^2 = (4x - 7)^2$ at one of $x = -5$, $x = -4$ and $x = -3$.",
                  "reason": "Substituting a value: at each of these numbers the brackets on the left give the coefficients of $a$, $b$ and $c$, and the bracket on the right gives the number on the right."
                },
                {
                  "step": "Both sides of this equation are polynomials in $x$ of degree at most $2$.",
                  "reason": "Degree: each bracket squared has degree $2$, and $a$, $b$ and $c$ are numbers."
                },
                {
                  "step": "The equation $a(x - 1)^2 + b(x - 4)^2 + c(x + 2)^2 = (4x - 7)^2$ holds at every number $x$.",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
                },
                {
                  "step": "The coefficient of $x$ on the left is $-2a - 8b + 4c$.",
                  "reason": "Square of a binomial: the term in $x$ of $(dx + e)^2$ is $2dex$."
                },
                {
                  "step": "The coefficient of $x$ on the right is $-56$.",
                  "reason": "Square of a binomial: the term in $x$ of $(4x - 7)^2$ is twice the product of $4x$ and $-7$, which is $-56x$."
                },
                {
                  "step": "$-2a - 8b + 4c = -56$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ on the two sides are equal."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t201-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $2$, and at $x = -5$, $x = -1$ and $x = 3$ its value is $8$ more than $9$ times the square of $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree at most $2$, and at $x = -5$, $x = -1$ and $x = 3$ its value is $8$ more than $9$ times the square of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In symbols, $8$ more than $9$ times the square of $x$ is $9x^2 + 8$.",
                "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
              },
              {
                "step": "The equation $f(x) = 9x^2 + 8$ holds at each of the $3$ different numbers $-5$, $-1$ and $3$.",
                "reason": "Writing a sentence as an equation: the words \"its value is\" stand where the equals sign goes."
              },
              {
                "step": "The polynomial $9x^2 + 8$ has degree $2$, so both sides have degree at most $2$.",
                "reason": "Degree: the sentence gives $f(x)$ degree at most $2$, and the highest power of $x$ in $9x^2 + 8$ is $x^2$."
              },
              {
                "step": "$f(x) = 9x^2 + 8$",
                "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $3$, takes the same value as the difference of $5$ times the cube of $x$ and $23$ times $x$ at each of $x = -5$, $x = -4$, $x = -2$ and $x = 2$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x) = 5*x^3-23*x",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$, of degree at most $3$, takes the same value as the difference of $5$ times the cube of $x$ and $23$ times $x$ at each of $x = -5$, $x = -4$, $x = -2$ and $x = 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols, the difference of $5$ times the cube of $x$ and $23$ times $x$ is $5x^3 - 23x$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The equation $f(x) = 5x^3 - 23x$ holds at each of the $4$ different numbers $-5$, $-4$, $-2$ and $2$.",
                  "reason": "Writing a sentence as an equation: the words \"takes the same value as\" stand where the equals sign goes."
                },
                {
                  "step": "The polynomial $5x^3 - 23x$ has degree $3$, so both sides have degree at most $3$.",
                  "reason": "Degree: the sentence gives $f(x)$ degree at most $3$, and the highest power of $x$ in $5x^3 - 23x$ is $x^3$."
                },
                {
                  "step": "$f(x) = 5x^3 - 23x$",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $3$, that are equal at $4$ different numbers are equal at every number."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = 1$, $x = 2$, $x = 4$ and $x = 6$, the polynomial $f(x)$ of degree at most $3$ is equal to $6$ less than the sum of $4$ times the square of $x$ and $15$ times $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x) = 4*x^2+15*x-6",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $f(x)$ alone on the left: At each of $x = 1$, $x = 2$, $x = 4$ and $x = 6$, the polynomial $f(x)$ of degree at most $3$ is equal to $6$ less than the sum of $4$ times the square of $x$ and $15$ times $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols, $6$ less than the sum of $4$ times the square of $x$ and $15$ times $x$ is $4x^2 + 15x - 6$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The equation $f(x) = 4x^2 + 15x - 6$ holds at each of the $4$ different numbers $1$, $2$, $4$ and $6$.",
                  "reason": "Writing a sentence as an equation: the words \"is equal to\" stand where the equals sign goes."
                },
                {
                  "step": "The polynomial $4x^2 + 15x - 6$ has degree $2$, so both sides have degree at most $3$.",
                  "reason": "Degree: the sentence gives $f(x)$ degree at most $3$, and the highest power of $x$ in $4x^2 + 15x - 6$ is $x^2$."
                },
                {
                  "step": "$f(x) = 4x^2 + 15x - 6$",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $3$, that are equal at $4$ different numbers are equal at every number."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $2$, and of the product of $x + 6$ and $x - 12$ are equal at $x = -3$, $x = 0$ and $x = 4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x) = (x+6)*(x-12)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The values of the polynomial $f(x)$, of degree at most $2$, and of the product of $x + 6$ and $x - 12$ are equal at $x = -3$, $x = 0$ and $x = 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In symbols, the product of $x + 6$ and $x - 12$ is $(x + 6)(x - 12)$.",
                  "reason": "Writing a sentence as an equation: each phrase becomes its operation, in the sentence's order."
                },
                {
                  "step": "The equation $f(x) = (x + 6)(x - 12)$ holds at each of the $3$ different numbers $-3$, $0$ and $4$.",
                  "reason": "Writing a sentence as an equation: the words \"are equal\" stand where the equals sign goes."
                },
                {
                  "step": "The polynomial $(x + 6)(x - 12)$ has degree $2$, so both sides have degree at most $2$.",
                  "reason": "Degree: the sentence gives $f(x)$ degree at most $2$, and the highest power of $x$ in $(x + 6)(x - 12)$ is $x^2$."
                },
                {
                  "step": "$f(x) = (x + 6)(x - 12)$",
                  "reason": "Identity Theorem: two polynomials, each zero or of degree at most $2$, that are equal at $3$ different numbers are equal at every number."
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
      "id": "t201-p1",
      "method": "proof by contradiction",
      "statement": "Let $n$ be a whole number and $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$, where the numbers $a_n, \\dots, a_0$ may be $0$. If $f(x) = 0$ at $n + 1$ different numbers, then $a_n = a_{n-1} = \\dots = a_1 = a_0 = 0$.",
      "idea": "A coefficient that is not $0$ would give $f(x)$ a degree of at most $n$, and so at most $n$ roots, fewer than the $n + 1$ it has.",
      "lines": [
        {
          "line": "Suppose that the coefficients $a_n, \\dots, a_0$ are not all $0$.",
          "reason": "Proof by contradiction: the conclusion is taken to be false."
        },
        {
          "line": "For the greatest $k$ with $a_k \\ne 0$, the polynomial $f(x)$ has degree $k$.",
          "reason": "Degree: the degree is the highest power of $x$ with a nonzero coefficient."
        },
        {
          "line": "The degree $k$ is at most $n$.",
          "reason": "General form: the powers of $x$ in $f(x)$ run from $x^n$ down to the constant term."
        },
        {
          "line": "The polynomial $f(x)$ has at most $k$ different roots.",
          "reason": "At most n roots: a nonzero polynomial of degree $k$, with $k \\ge 0$, has at most $k$ different roots."
        },
        {
          "line": "The polynomial $f(x)$ has at most $n$ different roots.",
          "reason": "Transitivity, from arithmetic: by lines 3 and 4, the number of roots is at most $k$, and $k \\le n$."
        },
        {
          "line": "The polynomial $f(x)$ has at least $n + 1$ different roots.",
          "reason": "The hypothesis: $f(x) = 0$ at $n + 1$ different numbers, and each of them is a root."
        },
        {
          "line": "Lines 5 and 6 cannot both hold, since $n + 1 > n$.",
          "reason": "Proof by contradiction: the assumption of line 1 leads to a false statement."
        },
        {
          "line": "So $a_n = a_{n-1} = \\dots = a_1 = a_0 = 0$.",
          "reason": "Proof by contradiction: the assumption of line 1 is false, so every coefficient is $0$."
        }
      ]
    },
    {
      "id": "t201-p2",
      "method": "direct proof",
      "statement": "Let $n$ be a whole number, and let $f(x)$ and $g(x)$ be polynomials, each the zero polynomial or of degree at most $n$. If $f(x) = g(x)$ at $n + 1$ different numbers $c_1, c_2, \\dots, c_{n+1}$, then $f(x) = g(x)$ at every number $x$.",
      "idea": "The difference $f(x) - g(x)$ has no power of $x$ above $x^n$ and $n + 1$ roots, so it is the zero polynomial.",
      "lines": [
        {
          "line": "Write $f(x) = a_nx^n + \\dots + a_1x + a_0$ and $g(x) = b_nx^n + \\dots + b_1x + b_0$, where some coefficients may be $0$.",
          "reason": "General form: a polynomial that is zero or has degree at most $n$ has one coefficient for each power of $x$ from $x^n$ down to the constant term."
        },
        {
          "line": "Let $h(x) = f(x) - g(x) = (a_n - b_n)x^n + \\dots + (a_1 - b_1)x + (a_0 - b_0)$.",
          "reason": "Collecting like terms: the terms of $f(x)$ and $g(x)$ with the same power of $x$ are subtracted."
        },
        {
          "line": "The value $h(c_i)$ is $f(c_i) - g(c_i)$ for each $i$ from $1$ to $n + 1$.",
          "reason": "Substituting a value: $c_i$ goes in place of $x$ in line 2."
        },
        {
          "line": "The value $h(c_i)$ is $0$ for each $i$ from $1$ to $n + 1$.",
          "reason": "The hypothesis: $f(c_i) = g(c_i)$, and a number taken from itself leaves $0$."
        },
        {
          "line": "Every coefficient of $h(x)$ is $0$: $a_n - b_n = 0$, and so on down to $a_0 - b_0 = 0$.",
          "reason": "Zero polynomial: $h(x)$ has no power of $x$ above $x^n$ and is $0$ at the $n + 1$ different numbers $c_1, \\dots, c_{n+1}$."
        },
        {
          "line": "The value $h(x)$ is $0$ at every number $x$.",
          "reason": "Assumptions on multiplication, from arithmetic: each term of $h(x)$ is $0$ times a power of $x$."
        },
        {
          "line": "So $f(x) = g(x)$ at every number $x$.",
          "reason": "Adding the same number to both sides: $g(x)$ is added to both sides of $f(x) - g(x) = 0$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t201-s1",
      "method": "direct proof",
      "statement": "Prove that if $a$, $b$ and $c$ are three different numbers and a polynomial $f(x)$ leaves the remainder $a$ when divided by $x - a$, the remainder $b$ when divided by $x - b$, and the remainder $c$ when divided by $x - c$, then it leaves the remainder $x$ when divided by $(x - a)(x - b)(x - c)$. Facts it may use: Remainder Theorem, division statement, degree of the remainder, substituting a value, transitive property, Identity Theorem, equal for all $x$ means equal coefficients.",
      "check": {
        "proof": [
          {
            "line": "The values $f(a)$, $f(b)$ and $f(c)$ are $a$, $b$ and $c$.",
            "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$, and so for $b$ and $c$."
          },
          {
            "line": "Write $f(x) = (x - a)(x - b)(x - c)q(x) + r(x)$, with $q(x)$ the quotient and $r(x)$ the remainder.",
            "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder."
          },
          {
            "line": "The remainder $r(x)$ is the zero polynomial or has degree at most $2$.",
            "reason": "Degree of the remainder: the remainder is $0$ or has degree below $3$, the degree of the divisor."
          },
          {
            "line": "The values $f(a)$, $f(b)$ and $f(c)$ are $r(a)$, $r(b)$ and $r(c)$.",
            "reason": "Substituting a value: at $x = a$, $x = b$ and $x = c$ the product $(x - a)(x - b)(x - c)$ is $0$."
          },
          {
            "line": "The values $r(a)$, $r(b)$ and $r(c)$ are $a$, $b$ and $c$.",
            "reason": "Transitive property: lines 1 and 4."
          },
          {
            "line": "The polynomials $r(x)$ and $x$ are equal at every number $x$.",
            "reason": "Identity Theorem: $r(x)$ is zero or of degree at most $2$ by line 3, $x$ has degree $1$, and the two are equal at the $3$ different numbers $a$, $b$ and $c$ by line 5."
          },
          {
            "line": "So the remainder when $f(x)$ is divided by $(x - a)(x - b)(x - c)$ is $x$.",
            "reason": "Equal for all $x$ means equal coefficients: $r(x)$ has the coefficients of $x$."
          }
        ]
      }
    },
    {
      "id": "t201-s2",
      "method": "proof by contradiction",
      "statement": "Prove that if a polynomial $g(x)$ of degree $n \\ge 1$ has $n$ different roots $r_1, r_2, \\dots, r_n$, and each of them is a root of a polynomial $f(x)$, then $g(x)$ is a factor of $f(x)$. Facts it may use: division statement, degree of the remainder, substituting a value, the assumptions on multiplication, symmetric property, Factor Theorem, At most n roots, transitivity.",
      "check": {
        "proof": [
          {
            "line": "Write $f(x) = g(x)q(x) + h(x)$, with $q(x)$ the quotient and $h(x)$ the remainder.",
            "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder."
          },
          {
            "line": "Suppose that $g(x)$ is not a factor of $f(x)$.",
            "reason": "Proof by contradiction: the conclusion is taken to be false."
          },
          {
            "line": "The remainder $h(x)$ is not the zero polynomial.",
            "reason": "Division statement: the division leaves no remainder exactly when $g(x)$ divides $f(x)$, and a factor is a polynomial that divides."
          },
          {
            "line": "The remainder $h(x)$ has a degree $k$ with $k < n$.",
            "reason": "Degree of the remainder: the remainder is $0$ or has degree below $n$, the degree of the divisor."
          },
          {
            "line": "For each $i$ from $1$ to $n$, the value $f(r_i)$ is $g(r_i)q(r_i) + h(r_i)$.",
            "reason": "Substituting a value: $r_i$ goes in place of $x$ in line 1."
          },
          {
            "line": "The values $f(r_i)$ and $g(r_i)$ are $0$ for each $i$ from $1$ to $n$.",
            "reason": "The hypothesis: each $r_i$ is a root of $g(x)$ and of $f(x)$."
          },
          {
            "line": "The equation $0 = 0 \\cdot q(r_i) + h(r_i)$ holds for each $i$ from $1$ to $n$.",
            "reason": "Substituting a value: line 6 goes into line 5."
          },
          {
            "line": "The equation $0 = h(r_i)$ holds for each $i$ from $1$ to $n$.",
            "reason": "Assumptions on multiplication, from arithmetic: $0 \\cdot q(r_i) = 0$, and adding $0$ leaves $h(r_i)$."
          },
          {
            "line": "The value $h(r_i)$ is $0$ for each $i$ from $1$ to $n$.",
            "reason": "Symmetric property: the two sides of line 8 change places."
          },
          {
            "line": "The polynomial $h(x)$ has the $n$ different roots $r_1, \\dots, r_n$.",
            "reason": "Factor Theorem, its definition of a root: a number $c$ is a root of $h(x)$ when $h(c) = 0$, and the $r_i$ are different by the hypothesis."
          },
          {
            "line": "The polynomial $h(x)$ has at most $k$ different roots.",
            "reason": "At most n roots: a nonzero polynomial of degree $k$, with $k \\ge 0$, has at most $k$ different roots."
          },
          {
            "line": "The polynomial $h(x)$ has fewer than $n$ different roots.",
            "reason": "Transitivity, from arithmetic: by lines 4 and 11, the number of roots is at most $k$, and $k < n$."
          },
          {
            "line": "Lines 10 and 12 cannot both hold.",
            "reason": "Proof by contradiction: the assumption of line 2 leads to a false statement."
          },
          {
            "line": "So $g(x)$ is a factor of $f(x)$.",
            "reason": "Proof by contradiction: the assumption of line 2 is false."
          }
        ]
      }
    },
    {
      "id": "t201-s3",
      "method": "direct proof",
      "statement": "Prove that if a polynomial $f(x) = c_nx^n + c_{n-1}x^{n-1} + \\dots + c_1x + c_0$ leaves the same remainder when divided by $x - a$ as when divided by $x + a$, for every number $a$, then every coefficient $c_j$ with $j$ odd is $0$. Facts it may use: Remainder Theorem, substituting a value, power of a product, the sign of a power of a negative number, collecting like terms, transitive property, Zero polynomial, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "The remainder when $f(x)$ is divided by $x - a$ is $f(a)$.",
            "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$."
          },
          {
            "line": "The remainder when $f(x)$ is divided by $x + a$ is $f(-a)$.",
            "reason": "Remainder Theorem: $x + a = x - (-a)$, so the remainder is $f(-a)$."
          },
          {
            "line": "The values $f(a)$ and $f(-a)$ are equal for every number $a$.",
            "reason": "The hypothesis: the two remainders of lines 1 and 2 are equal."
          },
          {
            "line": "$f(-x) = c_n(-x)^n + c_{n-1}(-x)^{n-1} + \\dots + c_1(-x) + c_0$",
            "reason": "Substituting a value: $-x$ goes in place of $x$, in brackets."
          },
          {
            "line": "$f(-x) = (-1)^nc_nx^n + (-1)^{n-1}c_{n-1}x^{n-1} + \\dots - c_1x + c_0$",
            "reason": "Power of a product: $(-x)^j = ((-1)x)^j = (-1)^jx^j$."
          },
          {
            "line": "In $h(x) = f(x) - f(-x)$ the coefficient of $x^j$ is $c_j - (-1)^jc_j$.",
            "reason": "Collecting like terms: the terms of $f(x)$ and of line 5 with the same power of $x$ are subtracted."
          },
          {
            "line": "The coefficient of $x^j$ in $h(x)$ is $2c_j$ for odd $j$ and $0$ for even $j$.",
            "reason": "The sign of a power of a negative number: $(-1)^j$ is $-1$ for odd $j$ and $1$ for even $j$."
          },
          {
            "line": "The polynomial $h(x)$ is $0$ at the $n + 1$ different numbers $0$, $1$, $2$, up to $n$.",
            "reason": "Substituting a value: by line 3, $h(a) = f(a) - f(-a) = 0$ for every number $a$."
          },
          {
            "line": "Every coefficient of $h(x)$ is $0$.",
            "reason": "Zero polynomial: $h(x)$ has no power of $x$ above $x^n$ and is $0$ at $n + 1$ different numbers."
          },
          {
            "line": "The number $2c_j$ is $0$ for each odd $j$.",
            "reason": "Transitive property: lines 7 and 9."
          },
          {
            "line": "So $c_j = 0$ for each odd $j$.",
            "reason": "Dividing both sides by a nonzero number: both sides of $2c_j = 0$ are divided by $2$."
          }
        ]
      }
    }
  ]
}
