export default {
  "number": 196,
  "title": "The Factor Theorem",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "193-198"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find a number $b$ for which $x - 6$ is a factor of $f(x) = -4x^3 + bx^2 + 7x - 2$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "b = 206/9",
    "solution": [
      "Find a number $b$ for which $x - 6$ is a factor of $f(x) = -4x^3 + bx^2 + 7x - 2$.",
      "$f(6) = 0$",
      "$-4 \\cdot 6^3 + b \\cdot 6^2 + 7 \\cdot 6 - 2 = 0$",
      "$36b - 824 = 0$",
      "$36b = 824$",
      "$b = \\dfrac{206}{9}$"
    ]
  },
  "ideas": [
    {
      "name": "Factor Theorem",
      "concrete": "For $f(x) = 2x^3 - 10x^2 + 3x + 27$, the value $f(3) = 2 \\cdot 27 - 10 \\cdot 9 + 3 \\cdot 3 + 27 = 0$. Dividing $f(x)$ by $x - 3$ leaves the remainder $0$: $2x^3 - 10x^2 + 3x + 27 = (x - 3)(2x^2 - 4x - 9)$, so $x - 3$ is a factor of $f(x)$.",
      "general": "A polynomial $d(x)$ is a **factor** of a polynomial $f(x)$ when $f(x)$ is divisible by $d(x)$, so that $f(x) = d(x)q(x)$ for a polynomial $q(x)$. A number $a$ is a **root** of $f(x)$ when $f(a) = 0$. For a polynomial $f(x)$ and a number $a$, the polynomial $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$. This is the **Factor Theorem**."
    },
    {
      "name": "Factored form",
      "concrete": "The polynomial $f(x) = 2x^3 - 8x^2 - 34x + 120$ has degree $3$, leading coefficient $2$ and the three roots $3$, $-4$ and $5$: for instance $f(3) = 54 - 72 - 102 + 120 = 0$. Its factored form is $f(x) = 2(x - 3)(x + 4)(x - 5)$.",
      "general": "If a polynomial $f(x)$ of degree $n \\ge 1$ with leading coefficient $a_n$ has $n$ different roots $r_1, r_2, \\dots, r_n$, then $f(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$. This is the **factored form** of $f(x)$. So a polynomial of degree $n$ is fixed by $n$ different roots and its leading coefficient."
    },
    {
      "name": "Multiplicity",
      "concrete": "In $f(x) = 2(x - 2)^3(x + 5)$ the root $2$ has multiplicity $3$ and the root $-5$ has multiplicity $1$. The polynomial $g(x) = (x - 2)^2(x + 5)$ is a factor of $f(x)$, since $f(x) = g(x) \\cdot 2(x - 2)$, but $(x - 2)^4$ is not.",
      "general": "A root $r$ of a polynomial $f(x)$ has **multiplicity** $k$ when $(x - r)^k$ is a factor of $f(x)$ and $(x - r)^{k + 1}$ is not; a number that is not a root has multiplicity $0$. When $f(x) = (x - r)^kh(x)$ for a whole number $k$ and a polynomial $h(x)$ with $h(r) \\ne 0$, the root $r$ has multiplicity $k$. So for polynomials $f(x)$ and $g(x)$, each a nonzero number times brackets $x - r$, the polynomial $g(x)$ is a factor of $f(x)$ exactly when each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$."
    }
  ],
  "kinds": [
    {
      "id": "t196-k1",
      "forms": [
        {
          "example": {
            "problem": "Find a number $b$ for which $x - 7$ is a factor of $f(x) = -5x^3 + bx^2 + bx + 35$.",
            "lines": [
              {
                "step": "Find a number $b$ for which $x - 7$ is a factor of $f(x) = -5x^3 + bx^2 + bx + 35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(7) = 0$",
                "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 7$."
              },
              {
                "step": "$-5 \\cdot 7^3 + b \\cdot 7^2 + b \\cdot 7 + 35 = 0$",
                "reason": "Function notation: $7$ goes where $x$ stands."
              },
              {
                "step": "$56b - 1680 = 0$",
                "reason": "Collecting like terms: each power is worked out before its product and the terms in $b$ and the number terms are each added."
              },
              {
                "step": "$56b = 1680$",
                "reason": "Adding the same number to both sides: $1680$ is added to both sides."
              },
              {
                "step": "$b = 30$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $56$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $b$ for which $x - 2$ is a factor of $f(x) = -4x^4 + 4x^3 + bx^2 + 7x + 7$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 11/4",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x - 2$ is a factor of $f(x) = -4x^4 + 4x^3 + bx^2 + 7x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 2$."
                },
                {
                  "step": "$-4 \\cdot 2^4 + 4 \\cdot 2^3 + b \\cdot 2^2 + 7 \\cdot 2 + 7 = 0$",
                  "reason": "Function notation: $2$ goes where $x$ stands."
                },
                {
                  "step": "$4b - 11 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product and the terms in $b$ and the number terms are each added."
                },
                {
                  "step": "$4b = 11$",
                  "reason": "Adding the same number to both sides: $11$ is added to both sides."
                },
                {
                  "step": "$b = \\dfrac{11}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which $x - 3$ is a factor of $f(x) = 3x^4 + 6x^3 + bx^2 + 7x - 7$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -419/9",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x - 3$ is a factor of $f(x) = 3x^4 + 6x^3 + bx^2 + 7x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(3) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 3$."
                },
                {
                  "step": "$3 \\cdot 3^4 + 6 \\cdot 3^3 + b \\cdot 3^2 + 7 \\cdot 3 - 7 = 0$",
                  "reason": "Function notation: $3$ goes where $x$ stands."
                },
                {
                  "step": "$9b + 419 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product and the terms in $b$ and the number terms are each added."
                },
                {
                  "step": "$9b = -419$",
                  "reason": "Adding the same number to both sides: $-419$ is added to both sides."
                },
                {
                  "step": "$b = -\\dfrac{419}{9}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which $x - 4$ is a factor of $f(x) = -3x^3 + 5x^2 + bx + 9$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 103/4",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x - 4$ is a factor of $f(x) = -3x^3 + 5x^2 + bx + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 4$."
                },
                {
                  "step": "$-3 \\cdot 4^3 + 5 \\cdot 4^2 + b \\cdot 4 + 9 = 0$",
                  "reason": "Function notation: $4$ goes where $x$ stands."
                },
                {
                  "step": "$4b - 103 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product and the terms in $b$ and the number terms are each added."
                },
                {
                  "step": "$4b = 103$",
                  "reason": "Adding the same number to both sides: $103$ is added to both sides."
                },
                {
                  "step": "$b = \\dfrac{103}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $b$ for which $x + 3$ is a factor of $f(x) = 2x^4 - 3x^2 + bx - 3$.",
            "lines": [
              {
                "step": "Find a number $b$ for which $x + 3$ is a factor of $f(x) = 2x^4 - 3x^2 + bx - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + 3 = x - (-3)$",
                "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
              },
              {
                "step": "$f(-3) = 0$",
                "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = -3$."
              },
              {
                "step": "$2(-3)^4 - 3(-3)^2 + b(-3) - 3 = 0$",
                "reason": "Function notation: $-3$ goes, in brackets, where $x$ stands."
              },
              {
                "step": "$-3b + 132 = 0$",
                "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the terms in $b$ and the number terms are each added."
              },
              {
                "step": "$-3b = -132$",
                "reason": "Adding the same number to both sides: $-132$ is added to both sides."
              },
              {
                "step": "$b = 44$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $b$ for which $x + 4$ is a factor of $f(x) = 3x^4 + 7x^3 + bx^2 + 4x - 4$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = -75/4",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x + 4$ is a factor of $f(x) = 3x^4 + 7x^3 + bx^2 + 4x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 4 = x - (-4)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
                },
                {
                  "step": "$f(-4) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = -4$."
                },
                {
                  "step": "$3(-4)^4 + 7(-4)^3 + b(-4)^2 + 4(-4) - 4 = 0$",
                  "reason": "Function notation: $-4$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$16b + 300 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the terms in $b$ and the number terms are each added."
                },
                {
                  "step": "$16b = -300$",
                  "reason": "Adding the same number to both sides: $-300$ is added to both sides."
                },
                {
                  "step": "$b = -\\dfrac{75}{4}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which $x + 5$ is a factor of $f(x) = -4x^3 - 9x^2 + bx - 7$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 268/5",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x + 5$ is a factor of $f(x) = -4x^3 - 9x^2 + bx - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 5 = x - (-5)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
                },
                {
                  "step": "$f(-5) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = -5$."
                },
                {
                  "step": "$-4(-5)^3 - 9(-5)^2 + b(-5) - 7 = 0$",
                  "reason": "Function notation: $-5$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$-5b + 268 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the terms in $b$ and the number terms are each added."
                },
                {
                  "step": "$-5b = -268$",
                  "reason": "Adding the same number to both sides: $-268$ is added to both sides."
                },
                {
                  "step": "$b = \\dfrac{268}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-5$."
                }
              ]
            },
            {
              "prompt": "Find a number $b$ for which $x + 2$ is a factor of $f(x) = -6x^3 + 5x^2 + bx - 7$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "b = 61/2",
              "lines": [
                {
                  "step": "Find a number $b$ for which $x + 2$ is a factor of $f(x) = -6x^3 + 5x^2 + bx - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 2 = x - (-2)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
                },
                {
                  "step": "$f(-2) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = -2$."
                },
                {
                  "step": "$-6(-2)^3 + 5(-2)^2 + b(-2) - 7 = 0$",
                  "reason": "Function notation: $-2$ goes, in brackets, where $x$ stands."
                },
                {
                  "step": "$-2b + 61 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, with the sign of a power of a negative number, and the terms in $b$ and the number terms are each added."
                },
                {
                  "step": "$-2b = -61$",
                  "reason": "Adding the same number to both sides: $-61$ is added to both sides."
                },
                {
                  "step": "$b = \\dfrac{61}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $b$ for which $x - 3$ is a factor of $f(x) = -x^3 + b^2x^2 + 2bx + 19$.",
            "lines": [
              {
                "step": "Find every number $b$ for which $x - 3$ is a factor of $f(x) = -x^3 + b^2x^2 + 2bx + 19$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(3) = 0$",
                "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 3$."
              },
              {
                "step": "$-3^3 + b^2 \\cdot 3^2 + 2b \\cdot 3 + 19 = 0$",
                "reason": "Function notation: $3$ goes where $x$ stands."
              },
              {
                "step": "$9b^2 + 6b - 8 = 0$",
                "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
              },
              {
                "step": "$(3b - 2)(3b + 4) = 0$",
                "reason": "Factoring a quadratic: $(3b - 2)(3b + 4)$ multiplies out to $9b^2 + 6b - 8$."
              },
              {
                "step": "Either $3b - 2 = 0$ or $3b + 4 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "Either $3b = 2$ or $3b = -4$.",
                "reason": "Adding the same number to both sides: the number term of each bracket is taken from both sides of its equation."
              },
              {
                "step": "Either $b = \\dfrac{2}{3}$ or $b = -\\dfrac{4}{3}$.",
                "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $b$ for which $x - 5$ is a factor of $f(x) = -3x^3 + b^2x^2 - 3bx - 3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{21/5, -18/5}",
              "lines": [
                {
                  "step": "Find every number $b$ for which $x - 5$ is a factor of $f(x) = -3x^3 + b^2x^2 - 3bx - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(5) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 5$."
                },
                {
                  "step": "$-3 \\cdot 5^3 + b^2 \\cdot 5^2 - 3b \\cdot 5 - 3 = 0$",
                  "reason": "Function notation: $5$ goes where $x$ stands."
                },
                {
                  "step": "$25b^2 - 15b - 378 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
                },
                {
                  "step": "$(5b - 21)(5b + 18) = 0$",
                  "reason": "Factoring a quadratic: $(5b - 21)(5b + 18)$ multiplies out to $25b^2 - 15b - 378$."
                },
                {
                  "step": "Either $5b - 21 = 0$ or $5b + 18 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "Either $5b = 21$ or $5b = -18$.",
                  "reason": "Adding the same number to both sides: the number term of each bracket is taken from both sides of its equation."
                },
                {
                  "step": "Either $b = \\dfrac{21}{5}$ or $b = -\\dfrac{18}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $x - 2$ is a factor of $f(x) = -2x^4 - bx^3 + b^2x^2 - 5x - 3$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{9/2, -5/2}",
              "lines": [
                {
                  "step": "Find every number $b$ for which $x - 2$ is a factor of $f(x) = -2x^4 - bx^3 + b^2x^2 - 5x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(2) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 2$."
                },
                {
                  "step": "$-2 \\cdot 2^4 - b \\cdot 2^3 + b^2 \\cdot 2^2 - 5 \\cdot 2 - 3 = 0$",
                  "reason": "Function notation: $2$ goes where $x$ stands."
                },
                {
                  "step": "$4b^2 - 8b - 45 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
                },
                {
                  "step": "$(2b - 9)(2b + 5) = 0$",
                  "reason": "Factoring a quadratic: $(2b - 9)(2b + 5)$ multiplies out to $4b^2 - 8b - 45$."
                },
                {
                  "step": "Either $2b - 9 = 0$ or $2b + 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "Either $2b = 9$ or $2b = -5$.",
                  "reason": "Adding the same number to both sides: the number term of each bracket is taken from both sides of its equation."
                },
                {
                  "step": "Either $b = \\dfrac{9}{2}$ or $b = -\\dfrac{5}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $x - 4$ is a factor of $f(x) = 4x^3 - 4bx^2 + b^2x - 9$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{19/2, 13/2}",
              "lines": [
                {
                  "step": "Find every number $b$ for which $x - 4$ is a factor of $f(x) = 4x^3 - 4bx^2 + b^2x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(4) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 4$."
                },
                {
                  "step": "$4 \\cdot 4^3 - 4b \\cdot 4^2 + b^2 \\cdot 4 - 9 = 0$",
                  "reason": "Function notation: $4$ goes where $x$ stands."
                },
                {
                  "step": "$4b^2 - 64b + 247 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
                },
                {
                  "step": "$(2b - 19)(2b - 13) = 0$",
                  "reason": "Factoring a quadratic: $(2b - 19)(2b - 13)$ multiplies out to $4b^2 - 64b + 247$."
                },
                {
                  "step": "Either $2b - 19 = 0$ or $2b - 13 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "Either $2b = 19$ or $2b = 13$.",
                  "reason": "Adding the same number to both sides: the number term of each bracket is taken from both sides of its equation."
                },
                {
                  "step": "Either $b = \\dfrac{19}{2}$ or $b = \\dfrac{13}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides of each equation are divided by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t196-k2",
      "forms": [
        {
          "example": {
            "problem": "Factor $f(x) = 3x^3 - 8x^2 - 52x - 48$ completely, given that $6$ is a root of $f(x)$.",
            "lines": [
              {
                "step": "Factor $f(x) = 3x^3 - 8x^2 - 52x - 48$ completely, given that $6$ is a root of $f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $x - 6$ is a factor of $f(x)$.",
                "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 6$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 6 & 3 & -8 & -52 & -48 \\\\ & & 18 & 60 & 48 \\\\ \\hline & 3 & 10 & 8 & 0 \\end{array}$",
                "reason": "Synthetic division: $6$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $6$ times the bottom number before it."
              },
              {
                "step": "$f(x) = (x - 6)(3x^2 + 10x + 8)$",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
              },
              {
                "step": "$3x^2 + 10x + 8 = (x + 2)(3x + 4)$",
                "reason": "Factoring a quadratic: $(x + 2)(3x + 4)$ multiplies out to $3x^2 + 10x + 8$."
              },
              {
                "step": "$f(x) = (x - 6)(x + 2)(3x + 4)$",
                "reason": "Substitution: the factored quotient from line 5 takes its place in line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = 6x^3 - 37x^2 + 30x + 25$ completely, given that $5$ is a root of $f(x)$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-5)*(2*x+1)*(3*x-5)",
              "lines": [
                {
                  "step": "Factor $f(x) = 6x^3 - 37x^2 + 30x + 25$ completely, given that $5$ is a root of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $x - 5$ is a factor of $f(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 5$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 5 & 6 & -37 & 30 & 25 \\\\ & & 30 & -35 & -25 \\\\ \\hline & 6 & -7 & -5 & 0 \\end{array}$",
                  "reason": "Synthetic division: $5$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $5$ times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 5)(6x^2 - 7x - 5)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$6x^2 - 7x - 5 = (2x + 1)(3x - 5)$",
                  "reason": "Factoring a quadratic: $(2x + 1)(3x - 5)$ multiplies out to $6x^2 - 7x - 5$."
                },
                {
                  "step": "$f(x) = (x - 5)(2x + 1)(3x - 5)$",
                  "reason": "Substitution: the factored quotient from line 5 takes its place in line 4."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 2x^3 - 19x^2 + 59x - 60$ completely, given that $4$ is a root of $f(x)$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-4)*(x-3)*(2*x-5)",
              "lines": [
                {
                  "step": "Factor $f(x) = 2x^3 - 19x^2 + 59x - 60$ completely, given that $4$ is a root of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $x - 4$ is a factor of $f(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 4$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 4 & 2 & -19 & 59 & -60 \\\\ & & 8 & -44 & 60 \\\\ \\hline & 2 & -11 & 15 & 0 \\end{array}$",
                  "reason": "Synthetic division: $4$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $4$ times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 4)(2x^2 - 11x + 15)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$2x^2 - 11x + 15 = (x - 3)(2x - 5)$",
                  "reason": "Factoring a quadratic: $(x - 3)(2x - 5)$ multiplies out to $2x^2 - 11x + 15$."
                },
                {
                  "step": "$f(x) = (x - 4)(x - 3)(2x - 5)$",
                  "reason": "Substitution: the factored quotient from line 5 takes its place in line 4."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 2x^3 + 9x^2 - 5x - 42$ completely, given that $f(2) = 0$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-2)*(2*x+7)*(x+3)",
              "lines": [
                {
                  "step": "Factor $f(x) = 2x^3 + 9x^2 - 5x - 42$ completely, given that $f(2) = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $x - 2$ is a factor of $f(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 2$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 2 & 2 & 9 & -5 & -42 \\\\ & & 4 & 26 & 42 \\\\ \\hline & 2 & 13 & 21 & 0 \\end{array}$",
                  "reason": "Synthetic division: $2$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $2$ times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 2)(2x^2 + 13x + 21)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$2x^2 + 13x + 21 = (2x + 7)(x + 3)$",
                  "reason": "Factoring a quadratic: $(2x + 7)(x + 3)$ multiplies out to $2x^2 + 13x + 21$."
                },
                {
                  "step": "$f(x) = (x - 2)(2x + 7)(x + 3)$",
                  "reason": "Substitution: the factored quotient from line 5 takes its place in line 4."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $f(x) = 3x^4 - 38x^3 + 137x^2 - 118x - 56$ completely, given that $f(4) = 0$ and $f\\left(-\\dfrac{1}{3}\\right) = 0$.",
            "lines": [
              {
                "step": "Factor $f(x) = 3x^4 - 38x^3 + 137x^2 - 118x - 56$ completely, given that $f(4) = 0$ and $f\\left(-\\dfrac{1}{3}\\right) = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial $x - 4$ is a factor of $f(x)$.",
                "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 4$."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} 4 & 3 & -38 & 137 & -118 & -56 \\\\ & & 12 & -104 & 132 & 56 \\\\ \\hline & 3 & -26 & 33 & 14 & 0 \\end{array}$",
                "reason": "Synthetic division: $4$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $4$ times the bottom number before it."
              },
              {
                "step": "The quotient is $q(x) = 3x^3 - 26x^2 + 33x + 14$, so $f(x) = (x - 4)q(x)$.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
              },
              {
                "step": "$f\\left(-\\dfrac{1}{3}\\right) = \\left(-\\dfrac{1}{3} - 4\\right)q\\left(-\\dfrac{1}{3}\\right)$",
                "reason": "Substituting a value: $-\\dfrac{1}{3}$ goes in place of $x$ in line 4."
              },
              {
                "step": "$q\\left(-\\dfrac{1}{3}\\right) = 0$",
                "reason": "Zero-product property: the left side of line 5 is $0$ by the problem, and $-\\dfrac{1}{3} - 4 = -\\dfrac{13}{3}$ is not $0$."
              },
              {
                "step": "$x + \\dfrac{1}{3} = x - \\left(-\\dfrac{1}{3}\\right)$",
                "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
              },
              {
                "step": "The polynomial $x + \\dfrac{1}{3}$ is a factor of $q(x)$.",
                "reason": "Factor Theorem: $x - a$ is a factor of $q(x)$ exactly when $q(a) = 0$; here $a = -\\dfrac{1}{3}$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{3} & 3 & -26 & 33 & 14 \\\\ & & -1 & 9 & -14 \\\\ \\hline & 3 & -27 & 42 & 0 \\end{array}$",
                "reason": "Synthetic division: $-\\dfrac{1}{3}$ stands on the left and the coefficients of $q(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $-\\dfrac{1}{3}$ times the bottom number before it."
              },
              {
                "step": "$q(x) = \\left(x + \\dfrac{1}{3}\\right)(3x^2 - 27x + 42)$",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
              },
              {
                "step": "$3x^2 - 27x + 42 = 3(x^2 - 9x + 14)$",
                "reason": "Taking out a common factor: $3$ divides each coefficient of $3x^2 - 27x + 42$."
              },
              {
                "step": "$3\\left(x + \\dfrac{1}{3}\\right) = 3x + 1$",
                "reason": "Multiplying out: $3$ multiplies each term of the bracket."
              },
              {
                "step": "$x^2 - 9x + 14 = (x - 2)(x - 7)$",
                "reason": "Factoring a quadratic: $(x - 2)(x - 7)$ multiplies out to $x^2 - 9x + 14$."
              },
              {
                "step": "$f(x) = (x - 4)(3x + 1)(x - 2)(x - 7)$",
                "reason": "Substitution: lines 10 to 13 put $q(x)$ in factors, which take its place in line 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = 6x^4 + 35x^3 + 18x^2 - 144x - 160$ completely, given that $f(2) = 0$ and $f\\left(-\\dfrac{5}{2}\\right) = 0$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-2)*(2*x+5)*(3*x+4)*(x+4)",
              "lines": [
                {
                  "step": "Factor $f(x) = 6x^4 + 35x^3 + 18x^2 - 144x - 160$ completely, given that $f(2) = 0$ and $f\\left(-\\dfrac{5}{2}\\right) = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $x - 2$ is a factor of $f(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 2$."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 2 & 6 & 35 & 18 & -144 & -160 \\\\ & & 12 & 94 & 224 & 160 \\\\ \\hline & 6 & 47 & 112 & 80 & 0 \\end{array}$",
                  "reason": "Synthetic division: $2$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $2$ times the bottom number before it."
                },
                {
                  "step": "The quotient is $q(x) = 6x^3 + 47x^2 + 112x + 80$, so $f(x) = (x - 2)q(x)$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{2}\\right) = \\left(-\\dfrac{5}{2} - 2\\right)q\\left(-\\dfrac{5}{2}\\right)$",
                  "reason": "Substituting a value: $-\\dfrac{5}{2}$ goes in place of $x$ in line 4."
                },
                {
                  "step": "$q\\left(-\\dfrac{5}{2}\\right) = 0$",
                  "reason": "Zero-product property: the left side of line 5 is $0$ by the problem, and $-\\dfrac{5}{2} - 2 = -\\dfrac{9}{2}$ is not $0$."
                },
                {
                  "step": "$x + \\dfrac{5}{2} = x - \\left(-\\dfrac{5}{2}\\right)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
                },
                {
                  "step": "The polynomial $x + \\dfrac{5}{2}$ is a factor of $q(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $q(x)$ exactly when $q(a) = 0$; here $a = -\\dfrac{5}{2}$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{5}{2} & 6 & 47 & 112 & 80 \\\\ & & -15 & -80 & -80 \\\\ \\hline & 6 & 32 & 32 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{5}{2}$ stands on the left and the coefficients of $q(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $-\\dfrac{5}{2}$ times the bottom number before it."
                },
                {
                  "step": "$q(x) = \\left(x + \\dfrac{5}{2}\\right)(6x^2 + 32x + 32)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$6x^2 + 32x + 32 = 2(3x^2 + 16x + 16)$",
                  "reason": "Taking out a common factor: $2$ divides each coefficient of $6x^2 + 32x + 32$."
                },
                {
                  "step": "$2\\left(x + \\dfrac{5}{2}\\right) = 2x + 5$",
                  "reason": "Multiplying out: $2$ multiplies each term of the bracket."
                },
                {
                  "step": "$3x^2 + 16x + 16 = (3x + 4)(x + 4)$",
                  "reason": "Factoring a quadratic: $(3x + 4)(x + 4)$ multiplies out to $3x^2 + 16x + 16$."
                },
                {
                  "step": "$f(x) = (x - 2)(2x + 5)(3x + 4)(x + 4)$",
                  "reason": "Substitution: lines 10 to 13 put $q(x)$ in factors, which take its place in line 4."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 3x^4 - 31x^3 + 80x^2 - 4x - 48$ completely, given that $f(6) = 0$ and $f\\left(-\\dfrac{2}{3}\\right) = 0$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-6)*(3*x+2)*(x-1)*(x-4)",
              "lines": [
                {
                  "step": "Factor $f(x) = 3x^4 - 31x^3 + 80x^2 - 4x - 48$ completely, given that $f(6) = 0$ and $f\\left(-\\dfrac{2}{3}\\right) = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $x - 6$ is a factor of $f(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 6$."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 6 & 3 & -31 & 80 & -4 & -48 \\\\ & & 18 & -78 & 12 & 48 \\\\ \\hline & 3 & -13 & 2 & 8 & 0 \\end{array}$",
                  "reason": "Synthetic division: $6$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $6$ times the bottom number before it."
                },
                {
                  "step": "The quotient is $q(x) = 3x^3 - 13x^2 + 2x + 8$, so $f(x) = (x - 6)q(x)$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$f\\left(-\\dfrac{2}{3}\\right) = \\left(-\\dfrac{2}{3} - 6\\right)q\\left(-\\dfrac{2}{3}\\right)$",
                  "reason": "Substituting a value: $-\\dfrac{2}{3}$ goes in place of $x$ in line 4."
                },
                {
                  "step": "$q\\left(-\\dfrac{2}{3}\\right) = 0$",
                  "reason": "Zero-product property: the left side of line 5 is $0$ by the problem, and $-\\dfrac{2}{3} - 6 = -\\dfrac{20}{3}$ is not $0$."
                },
                {
                  "step": "$x + \\dfrac{2}{3} = x - \\left(-\\dfrac{2}{3}\\right)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
                },
                {
                  "step": "The polynomial $x + \\dfrac{2}{3}$ is a factor of $q(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $q(x)$ exactly when $q(a) = 0$; here $a = -\\dfrac{2}{3}$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{2}{3} & 3 & -13 & 2 & 8 \\\\ & & -2 & 10 & -8 \\\\ \\hline & 3 & -15 & 12 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{2}{3}$ stands on the left and the coefficients of $q(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $-\\dfrac{2}{3}$ times the bottom number before it."
                },
                {
                  "step": "$q(x) = \\left(x + \\dfrac{2}{3}\\right)(3x^2 - 15x + 12)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$3x^2 - 15x + 12 = 3(x^2 - 5x + 4)$",
                  "reason": "Taking out a common factor: $3$ divides each coefficient of $3x^2 - 15x + 12$."
                },
                {
                  "step": "$3\\left(x + \\dfrac{2}{3}\\right) = 3x + 2$",
                  "reason": "Multiplying out: $3$ multiplies each term of the bracket."
                },
                {
                  "step": "$x^2 - 5x + 4 = (x - 1)(x - 4)$",
                  "reason": "Factoring a quadratic: $(x - 1)(x - 4)$ multiplies out to $x^2 - 5x + 4$."
                },
                {
                  "step": "$f(x) = (x - 6)(3x + 2)(x - 1)(x - 4)$",
                  "reason": "Substitution: lines 10 to 13 put $q(x)$ in factors, which take its place in line 4."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 9x^4 + 9x^3 - 91x^2 - 81x + 90$ completely, given that $f(3) = 0$ and $f\\left(-\\dfrac{5}{3}\\right) = 0$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-3)*(3*x+5)*(3*x-2)*(x+3)",
              "lines": [
                {
                  "step": "Factor $f(x) = 9x^4 + 9x^3 - 91x^2 - 81x + 90$ completely, given that $f(3) = 0$ and $f\\left(-\\dfrac{5}{3}\\right) = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial $x - 3$ is a factor of $f(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 3$."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 3 & 9 & 9 & -91 & -81 & 90 \\\\ & & 27 & 108 & 51 & -90 \\\\ \\hline & 9 & 36 & 17 & -30 & 0 \\end{array}$",
                  "reason": "Synthetic division: $3$ stands on the left and the coefficients of $f(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $3$ times the bottom number before it."
                },
                {
                  "step": "The quotient is $q(x) = 9x^3 + 36x^2 + 17x - 30$, so $f(x) = (x - 3)q(x)$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$f\\left(-\\dfrac{5}{3}\\right) = \\left(-\\dfrac{5}{3} - 3\\right)q\\left(-\\dfrac{5}{3}\\right)$",
                  "reason": "Substituting a value: $-\\dfrac{5}{3}$ goes in place of $x$ in line 4."
                },
                {
                  "step": "$q\\left(-\\dfrac{5}{3}\\right) = 0$",
                  "reason": "Zero-product property: the left side of line 5 is $0$ by the problem, and $-\\dfrac{5}{3} - 3 = -\\dfrac{14}{3}$ is not $0$."
                },
                {
                  "step": "$x + \\dfrac{5}{3} = x - \\left(-\\dfrac{5}{3}\\right)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
                },
                {
                  "step": "The polynomial $x + \\dfrac{5}{3}$ is a factor of $q(x)$.",
                  "reason": "Factor Theorem: $x - a$ is a factor of $q(x)$ exactly when $q(a) = 0$; here $a = -\\dfrac{5}{3}$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{5}{3} & 9 & 36 & 17 & -30 \\\\ & & -15 & -35 & 30 \\\\ \\hline & 9 & 21 & -18 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-\\dfrac{5}{3}$ stands on the left and the coefficients of $q(x)$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $-\\dfrac{5}{3}$ times the bottom number before it."
                },
                {
                  "step": "$q(x) = \\left(x + \\dfrac{5}{3}\\right)(9x^2 + 21x - 18)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$9x^2 + 21x - 18 = 3(3x^2 + 7x - 6)$",
                  "reason": "Taking out a common factor: $3$ divides each coefficient of $9x^2 + 21x - 18$."
                },
                {
                  "step": "$3\\left(x + \\dfrac{5}{3}\\right) = 3x + 5$",
                  "reason": "Multiplying out: $3$ multiplies each term of the bracket."
                },
                {
                  "step": "$3x^2 + 7x - 6 = (3x - 2)(x + 3)$",
                  "reason": "Factoring a quadratic: $(3x - 2)(x + 3)$ multiplies out to $3x^2 + 7x - 6$."
                },
                {
                  "step": "$f(x) = (x - 3)(3x + 5)(3x - 2)(x + 3)$",
                  "reason": "Substitution: lines 10 to 13 put $q(x)$ in factors, which take its place in line 4."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $f(x) = 4x^3 - 12x^2 + bx + 30$ completely, where $b$ is the number for which $x - 2$ is a factor of $f(x)$.",
            "lines": [
              {
                "step": "Factor $f(x) = 4x^3 - 12x^2 + bx + 30$ completely, where $b$ is the number for which $x - 2$ is a factor of $f(x)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f(2) = 0$",
                "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 2$."
              },
              {
                "step": "$4 \\cdot 2^3 - 12 \\cdot 2^2 + b \\cdot 2 + 30 = 0$",
                "reason": "Function notation: $2$ goes where $x$ stands."
              },
              {
                "step": "$2b + 14 = 0$",
                "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
              },
              {
                "step": "$2b = -14$",
                "reason": "Adding the same number to both sides: $-14$ is added to both sides."
              },
              {
                "step": "$b = -7$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 2 & 4 & -12 & -7 & 30 \\\\ & & 8 & -8 & -30 \\\\ \\hline & 4 & -4 & -15 & 0 \\end{array}$",
                "reason": "Synthetic division: $2$ stands on the left and the coefficients of $f(x)$ with $b = -7$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $2$ times the bottom number before it."
              },
              {
                "step": "$f(x) = (x - 2)(4x^2 - 4x - 15)$",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
              },
              {
                "step": "$4x^2 - 4x - 15 = (2x - 5)(2x + 3)$",
                "reason": "Factoring a quadratic: $(2x - 5)(2x + 3)$ multiplies out to $4x^2 - 4x - 15$."
              },
              {
                "step": "$f(x) = (x - 2)(2x - 5)(2x + 3)$",
                "reason": "Substitution: the factored quotient from line 9 takes its place in line 8."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $f(x) = 3x^3 - 32x^2 + bx - 42$ completely, where $b$ is the number for which $x - 3$ is a factor of $f(x)$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-3)*(x-7)*(3*x-2)",
              "lines": [
                {
                  "step": "Factor $f(x) = 3x^3 - 32x^2 + bx - 42$ completely, where $b$ is the number for which $x - 3$ is a factor of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(3) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 3$."
                },
                {
                  "step": "$3 \\cdot 3^3 - 32 \\cdot 3^2 + b \\cdot 3 - 42 = 0$",
                  "reason": "Function notation: $3$ goes where $x$ stands."
                },
                {
                  "step": "$3b - 249 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
                },
                {
                  "step": "$3b = 249$",
                  "reason": "Adding the same number to both sides: $249$ is added to both sides."
                },
                {
                  "step": "$b = 83$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 3 & 3 & -32 & 83 & -42 \\\\ & & 9 & -69 & 42 \\\\ \\hline & 3 & -23 & 14 & 0 \\end{array}$",
                  "reason": "Synthetic division: $3$ stands on the left and the coefficients of $f(x)$ with $b = 83$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $3$ times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 3)(3x^2 - 23x + 14)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$3x^2 - 23x + 14 = (x - 7)(3x - 2)$",
                  "reason": "Factoring a quadratic: $(x - 7)(3x - 2)$ multiplies out to $3x^2 - 23x + 14$."
                },
                {
                  "step": "$f(x) = (x - 3)(x - 7)(3x - 2)$",
                  "reason": "Substitution: the factored quotient from line 9 takes its place in line 8."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 9x^3 - 63x^2 + bx + 60$ completely, where $b$ is the number for which $x - 6$ is a factor of $f(x)$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-6)*(3*x+2)*(3*x-5)",
              "lines": [
                {
                  "step": "Factor $f(x) = 9x^3 - 63x^2 + bx + 60$ completely, where $b$ is the number for which $x - 6$ is a factor of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(6) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 6$."
                },
                {
                  "step": "$9 \\cdot 6^3 - 63 \\cdot 6^2 + b \\cdot 6 + 60 = 0$",
                  "reason": "Function notation: $6$ goes where $x$ stands."
                },
                {
                  "step": "$6b - 264 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
                },
                {
                  "step": "$6b = 264$",
                  "reason": "Adding the same number to both sides: $264$ is added to both sides."
                },
                {
                  "step": "$b = 44$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 6 & 9 & -63 & 44 & 60 \\\\ & & 54 & -54 & -60 \\\\ \\hline & 9 & -9 & -10 & 0 \\end{array}$",
                  "reason": "Synthetic division: $6$ stands on the left and the coefficients of $f(x)$ with $b = 44$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $6$ times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 6)(9x^2 - 9x - 10)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$9x^2 - 9x - 10 = (3x + 2)(3x - 5)$",
                  "reason": "Factoring a quadratic: $(3x + 2)(3x - 5)$ multiplies out to $9x^2 - 9x - 10$."
                },
                {
                  "step": "$f(x) = (x - 6)(3x + 2)(3x - 5)$",
                  "reason": "Substitution: the factored quotient from line 9 takes its place in line 8."
                }
              ]
            },
            {
              "prompt": "Factor $f(x) = 6x^3 + bx^2 + 48x + 35$ completely, where $b$ is the number for which $x - 5$ is a factor of $f(x)$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-5)*(3*x-7)*(2*x+1)",
              "lines": [
                {
                  "step": "Factor $f(x) = 6x^3 + bx^2 + 48x + 35$ completely, where $b$ is the number for which $x - 5$ is a factor of $f(x)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f(5) = 0$",
                  "reason": "Factor Theorem: $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$; here $a = 5$."
                },
                {
                  "step": "$6 \\cdot 5^3 + b \\cdot 5^2 + 48 \\cdot 5 + 35 = 0$",
                  "reason": "Function notation: $5$ goes where $x$ stands."
                },
                {
                  "step": "$25b + 1025 = 0$",
                  "reason": "Collecting like terms: each power is worked out before its product, and the number terms are added."
                },
                {
                  "step": "$25b = -1025$",
                  "reason": "Adding the same number to both sides: $-1025$ is added to both sides."
                },
                {
                  "step": "$b = -41$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $25$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 5 & 6 & -41 & 48 & 35 \\\\ & & 30 & -55 & -35 \\\\ \\hline & 6 & -11 & -7 & 0 \\end{array}$",
                  "reason": "Synthetic division: $5$ stands on the left and the coefficients of $f(x)$ with $b = -41$ in the top row, with $0$ for a missing power; each bottom number after the first is the top number above it plus $5$ times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 5)(6x^2 - 11x - 7)$",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last, $0$, is the remainder."
                },
                {
                  "step": "$6x^2 - 11x - 7 = (3x - 7)(2x + 1)$",
                  "reason": "Factoring a quadratic: $(3x - 7)(2x + 1)$ multiplies out to $6x^2 - 11x - 7$."
                },
                {
                  "step": "$f(x) = (x - 5)(3x - 7)(2x + 1)$",
                  "reason": "Substitution: the factored quotient from line 9 takes its place in line 8."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t196-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the polynomial $f(x)$ of degree $3$ whose roots are $3$, $2$ and $-2$ and for which $f(7) = -540$.",
            "lines": [
              {
                "step": "Find the polynomial $f(x)$ of degree $3$ whose roots are $3$, $2$ and $-2$ and for which $f(7) = -540$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial is $f(x) = a(x - 3)(x - 2)(x - (-2))$, with $a$ its leading coefficient.",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$f(x) = a(x - 3)(x - 2)(x + 2)$",
                "reason": "Subtraction as addition, from arithmetic: taking away $-2$ adds $2$."
              },
              {
                "step": "$f(7) = a(7 - 3)(7 - 2)(7 + 2)$",
                "reason": "Substituting a value: $7$ goes in place of $x$ in line 3."
              },
              {
                "step": "$f(7) = 180a$",
                "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
              },
              {
                "step": "$180a = -540$",
                "reason": "Transitive property: line 5 and the problem both give $f(7)$."
              },
              {
                "step": "$a = -3$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $180$."
              },
              {
                "step": "$f(x) = -3(x - 3)(x - 2)(x + 2)$",
                "reason": "Substituting a value: $a = -3$ goes into line 3."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the polynomial $f(x)$ of degree $3$ whose roots are $2$, $-1$ and $3$ and for which $f(-6) = -720$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "2*(x-2)*(x+1)*(x-3)",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree $3$ whose roots are $2$, $-1$ and $3$ and for which $f(-6) = -720$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is $f(x) = a(x - 2)(x - (-1))(x - 3)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = a(x - 2)(x + 1)(x - 3)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-1$ adds $1$."
                },
                {
                  "step": "$f(-6) = a(-6 - 2)(-6 + 1)(-6 - 3)$",
                  "reason": "Substituting a value: $-6$ goes in place of $x$ in line 3."
                },
                {
                  "step": "$f(-6) = -360a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$-360a = -720$",
                  "reason": "Transitive property: line 5 and the problem both give $f(-6)$."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-360$."
                },
                {
                  "step": "$f(x) = 2(x - 2)(x + 1)(x - 3)$",
                  "reason": "Substituting a value: $a = 2$ goes into line 3."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree $3$ whose roots are $-6$, $2$ and $7$ and for which $f(-3) = 750$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "5*(x+6)*(x-2)*(x-7)",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree $3$ whose roots are $-6$, $2$ and $7$ and for which $f(-3) = 750$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is $f(x) = a(x - (-6))(x - 2)(x - 7)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = a(x + 6)(x - 2)(x - 7)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-6$ adds $6$."
                },
                {
                  "step": "$f(-3) = a(-3 + 6)(-3 - 2)(-3 - 7)$",
                  "reason": "Substituting a value: $-3$ goes in place of $x$ in line 3."
                },
                {
                  "step": "$f(-3) = 150a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$150a = 750$",
                  "reason": "Transitive property: line 5 and the problem both give $f(-3)$."
                },
                {
                  "step": "$a = 5$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $150$."
                },
                {
                  "step": "$f(x) = 5(x + 6)(x - 2)(x - 7)$",
                  "reason": "Substituting a value: $a = 5$ goes into line 3."
                }
              ]
            },
            {
              "prompt": "Find the polynomial $f(x)$ of degree $3$ whose roots are $7$, $-2$ and $-1$ and for which $f(4) = 360$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "-4*(x-7)*(x+2)*(x+1)",
              "lines": [
                {
                  "step": "Find the polynomial $f(x)$ of degree $3$ whose roots are $7$, $-2$ and $-1$ and for which $f(4) = 360$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is $f(x) = a(x - 7)(x - (-2))(x - (-1))$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = a(x - 7)(x + 2)(x + 1)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-2$ adds $2$ and taking away $-1$ adds $1$."
                },
                {
                  "step": "$f(4) = a(4 - 7)(4 + 2)(4 + 1)$",
                  "reason": "Substituting a value: $4$ goes in place of $x$ in line 3."
                },
                {
                  "step": "$f(4) = -90a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$-90a = 360$",
                  "reason": "Transitive property: line 5 and the problem both give $f(4)$."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-90$."
                },
                {
                  "step": "$f(x) = -4(x - 7)(x + 2)(x + 1)$",
                  "reason": "Substituting a value: $a = -4$ goes into line 3."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(-3)$ for the polynomial $f(x)$ of degree $3$ whose roots are $2$, $-6$ and $6$ and whose constant term is $-360$.",
            "lines": [
              {
                "step": "Find $f(-3)$ for the polynomial $f(x)$ of degree $3$ whose roots are $2$, $-6$ and $6$ and whose constant term is $-360$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The polynomial is $f(x) = a(x - 2)(x - (-6))(x - 6)$, with $a$ its leading coefficient.",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$f(x) = a(x - 2)(x + 6)(x - 6)$",
                "reason": "Subtraction as addition, from arithmetic: taking away $-6$ adds $6$."
              },
              {
                "step": "$f(0) = -360$",
                "reason": "Function notation: $f(0)$ is the constant term of $f(x)$, since each other term has a factor $x$."
              },
              {
                "step": "$f(0) = a(0 - 2)(0 + 6)(0 - 6)$",
                "reason": "Substituting a value: $0$ goes in place of $x$ in line 3."
              },
              {
                "step": "$f(0) = 72a$",
                "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
              },
              {
                "step": "$72a = -360$",
                "reason": "Transitive property: lines 4 and 6 both give $f(0)$."
              },
              {
                "step": "$a = -5$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $72$."
              },
              {
                "step": "$f(x) = -5(x - 2)(x + 6)(x - 6)$",
                "reason": "Substituting a value: $a = -5$ goes into line 3."
              },
              {
                "step": "$f(-3) = -5(-3 - 2)(-3 + 6)(-3 - 6)$",
                "reason": "Substituting a value: $-3$ goes in place of $x$ in line 9."
              },
              {
                "step": "$f(-3) = -675$",
                "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(1)$ for the polynomial $f(x)$ of degree $3$ whose roots are $-7$, $-4$ and $7$ and whose constant term is $-588$.",
              "form": "Answer as an integer.",
              "answer": "-720",
              "lines": [
                {
                  "step": "Find $f(1)$ for the polynomial $f(x)$ of degree $3$ whose roots are $-7$, $-4$ and $7$ and whose constant term is $-588$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is $f(x) = a(x - (-7))(x - (-4))(x - 7)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = a(x + 7)(x + 4)(x - 7)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-7$ adds $7$ and taking away $-4$ adds $4$."
                },
                {
                  "step": "$f(0) = -588$",
                  "reason": "Function notation: $f(0)$ is the constant term of $f(x)$, since each other term has a factor $x$."
                },
                {
                  "step": "$f(0) = a(0 + 7)(0 + 4)(0 - 7)$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in line 3."
                },
                {
                  "step": "$f(0) = -196a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$-196a = -588$",
                  "reason": "Transitive property: lines 4 and 6 both give $f(0)$."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-196$."
                },
                {
                  "step": "$f(x) = 3(x + 7)(x + 4)(x - 7)$",
                  "reason": "Substituting a value: $a = 3$ goes into line 3."
                },
                {
                  "step": "$f(1) = 3(1 + 7)(1 + 4)(1 - 7)$",
                  "reason": "Substituting a value: $1$ goes in place of $x$ in line 9."
                },
                {
                  "step": "$f(1) = -720$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                }
              ]
            },
            {
              "prompt": "Find $f(6)$ for the polynomial $f(x)$ of degree $4$ whose roots are $4$, $2$, $-2$ and $3$ and whose constant term is $-96$.",
              "form": "Answer as an integer.",
              "answer": "384",
              "lines": [
                {
                  "step": "Find $f(6)$ for the polynomial $f(x)$ of degree $4$ whose roots are $4$, $2$, $-2$ and $3$ and whose constant term is $-96$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is $f(x) = a(x - 4)(x - 2)(x - (-2))(x - 3)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = a(x - 4)(x - 2)(x + 2)(x - 3)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-2$ adds $2$."
                },
                {
                  "step": "$f(0) = -96$",
                  "reason": "Function notation: $f(0)$ is the constant term of $f(x)$, since each other term has a factor $x$."
                },
                {
                  "step": "$f(0) = a(0 - 4)(0 - 2)(0 + 2)(0 - 3)$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in line 3."
                },
                {
                  "step": "$f(0) = -48a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$-48a = -96$",
                  "reason": "Transitive property: lines 4 and 6 both give $f(0)$."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-48$."
                },
                {
                  "step": "$f(x) = 2(x - 4)(x - 2)(x + 2)(x - 3)$",
                  "reason": "Substituting a value: $a = 2$ goes into line 3."
                },
                {
                  "step": "$f(6) = 2(6 - 4)(6 - 2)(6 + 2)(6 - 3)$",
                  "reason": "Substituting a value: $6$ goes in place of $x$ in line 9."
                },
                {
                  "step": "$f(6) = 384$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                }
              ]
            },
            {
              "prompt": "Find $f(-2)$ for the polynomial $f(x)$ of degree $4$ whose roots are $5$, $-5$, $3$ and $4$ and whose constant term is $1200$.",
              "form": "Answer as an integer.",
              "answer": "2520",
              "lines": [
                {
                  "step": "Find $f(-2)$ for the polynomial $f(x)$ of degree $4$ whose roots are $5$, $-5$, $3$ and $4$ and whose constant term is $1200$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The polynomial is $f(x) = a(x - 5)(x - (-5))(x - 3)(x - 4)$, with $a$ its leading coefficient.",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = a(x - 5)(x + 5)(x - 3)(x - 4)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-5$ adds $5$."
                },
                {
                  "step": "$f(0) = 1200$",
                  "reason": "Function notation: $f(0)$ is the constant term of $f(x)$, since each other term has a factor $x$."
                },
                {
                  "step": "$f(0) = a(0 - 5)(0 + 5)(0 - 3)(0 - 4)$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in line 3."
                },
                {
                  "step": "$f(0) = -300a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$-300a = 1200$",
                  "reason": "Transitive property: lines 4 and 6 both give $f(0)$."
                },
                {
                  "step": "$a = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-300$."
                },
                {
                  "step": "$f(x) = -4(x - 5)(x + 5)(x - 3)(x - 4)$",
                  "reason": "Substituting a value: $a = -4$ goes into line 3."
                },
                {
                  "step": "$f(-2) = -4(-2 - 5)(-2 + 5)(-2 - 3)(-2 - 4)$",
                  "reason": "Substituting a value: $-2$ goes in place of $x$ in line 9."
                },
                {
                  "step": "$f(-2) = 2520$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t196-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $3$ whose roots are $-6$, $4$ and $5$ and for which $f(2) = -192$, with $a$ its leading coefficient, and write that line right.",
            "given": [
              "$f(x) = a(x - 6)(x - 4)(x - 5)$",
              "$f(2) = a(2 - 6)(2 - 4)(2 - 5) = a \\cdot (-4) \\cdot (-2) \\cdot (-3)$",
              "$f(2) = -24a = -192$",
              "$a = -192 \\div (-24) = 8$",
              "$f(x) = 8(x - 6)(x - 4)(x - 5)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $3$ whose roots are $-6$, $4$ and $5$ and for which $f(2) = -192$, with $a$ its leading coefficient, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 writes the root $-6$ as the bracket $x - 6$, so the minus sign of $-6$ is lost.",
                "reason": "A sign lost: the root $-6$ gives the bracket $x + 6$, which is $0$ at $x = -6$."
              },
              {
                "step": "No line comes before line 1, and each later line carries the fault of line 1, so line 1 is the first wrong line.",
                "reason": "Transitive property: each later line takes its values from the line before it."
              },
              {
                "step": "Line 1 written right is $f(x) = a(x + 6)(x - 4)(x - 5)$.",
                "reason": "Factored form: each root $r$ gives the bracket $x - r$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $4$ whose roots are $-1$, $-4$, $5$ and $-5$ and for which $f(1) = -960$, with $a$ its leading coefficient, and write that line right.",
              "given": [
                "$f(x) = a(x + 1)(x + 4)(x - 5)(x + 5)$",
                "$f(1) = a(1 + 1)(1 + 4)(1 - 5)(1 + 5) = a \\cdot 2 \\cdot 5 \\cdot (-4) \\cdot 6$",
                "$f(1) = 240a = -960$",
                "$a = -960 \\div 240 = -4$",
                "$f(x) = -4(x + 1)(x + 4)(x - 5)(x + 5)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f(1) = -240*a = -960",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $4$ whose roots are $-1$, $-4$, $5$ and $-5$ and for which $f(1) = -960$, with $a$ its leading coefficient, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 gives the product $2 \\cdot 5 \\cdot (-4) \\cdot 6$ the value $240$, but its value is $-240$.",
                  "reason": "A sign lost: the product has one negative factor, so it is negative."
                },
                {
                  "step": "Lines 1 and 2 agree with the problem, and each later line carries the fault of line 3, so line 3 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 3 written right is $f(1) = -240a = -960$.",
                  "reason": "Signs of products, from arithmetic: an even number of negative factors gives a positive product, and an odd number a negative one."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $4$ whose roots are $-5$, $5$, $1$ and $-1$ and for which $f(3) = 640$, with $a$ its leading coefficient, and write that line right.",
              "given": [
                "$f(x) = a(x + 5)(x - 5)(x - 1)(x + 1)$",
                "$f(3) = a(3 + 5)(3 - 5)(3 - 1)(3 + 1) = a \\cdot 8 \\cdot (-2) \\cdot 2 \\cdot 4$",
                "$f(3) = -128a = 640$",
                "$a = 640 \\div (-128) = 5$",
                "$f(x) = 5(x + 5)(x - 5)(x - 1)(x + 1)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: a = 640/(-128) = -5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $4$ whose roots are $-5$, $5$, $1$ and $-1$ and for which $f(3) = 640$, with $a$ its leading coefficient, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 gives $640 \\div (-128)$ the value $5$, but its value is $-5$.",
                  "reason": "A sign lost: the quotient of two numbers of opposite signs is negative."
                },
                {
                  "step": "Lines 1 to 3 agree with the problem, and each later line carries the fault of line 4, so line 4 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 4 written right is $a = 640 \\div (-128) = -5$.",
                  "reason": "Signs of products, from arithmetic: a quotient is negative exactly when its two numbers have opposite signs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $3$ whose roots are $4$, $2$ and $-5$ and for which $f(-3) = 420$, with $a$ its leading coefficient, and write that line right.",
              "given": [
                "$f(x) = a(x - 4)(x - 2)(x + 5)$",
                "$f(-3) = a(-3 - 4)(-3 - 2)(-3 + 5) = a \\cdot 7 \\cdot (-5) \\cdot 2$",
                "$f(-3) = -70a = 420$",
                "$a = 420 \\div (-70) = -6$",
                "$f(x) = -6(x - 4)(x - 2)(x + 5)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f(-3) = a*(-3-4)*(-3-2)*(-3+5) = a*(-7)*(-5)*2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the polynomial $f(x)$ of degree $3$ whose roots are $4$, $2$ and $-5$ and for which $f(-3) = 420$, with $a$ its leading coefficient, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives the bracket $(-3 - 4)$ the value $7$, but its value is $-7$.",
                  "reason": "A sign lost: by subtraction as addition, $-3 - 4 = -7$."
                },
                {
                  "step": "Line 1 agrees with the problem, and each later line carries the fault of line 2, so line 2 is the first wrong line.",
                  "reason": "Transitive property: each later line takes its values from the line before it."
                },
                {
                  "step": "Line 2 written right is $f(-3) = a(-3 - 4)(-3 - 2)(-3 + 5) = a \\cdot (-7) \\cdot (-5) \\cdot 2$.",
                  "reason": "Order of operations: each bracket is worked out first."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t196-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree $3$, leading coefficient $-3$ and roots $-8$, $8$ and $-3$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree $3$, leading coefficient $-3$ and roots $-8$, $8$ and $-3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The degree is $3$, the leading coefficient is $-3$, and the roots are $-8$, $8$ and $-3$.",
                "reason": "Writing a sentence as an equation: the sentence names the degree, the leading coefficient and the roots."
              },
              {
                "step": "$f(x) = -3(x - (-8))(x - 8)(x - (-3))$",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$f(x) = -3(x + 8)(x - 8)(x + 3)$",
                "reason": "Subtraction as addition, from arithmetic: taking away $-8$ adds $8$ and taking away $-3$ adds $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The roots of the polynomial $f(x)$ of degree $3$ are $7$, $5$ and $-1$, and its leading coefficient is $9$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x) = 9*(x-7)*(x-5)*(x+1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The roots of the polynomial $f(x)$ of degree $3$ are $7$, $5$ and $-1$, and its leading coefficient is $9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The degree is $3$, the leading coefficient is $9$, and the roots are $7$, $5$ and $-1$.",
                  "reason": "Writing a sentence as an equation: the sentence names the degree, the leading coefficient and the roots."
                },
                {
                  "step": "$f(x) = 9(x - 7)(x - 5)(x - (-1))$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = 9(x - 7)(x - 5)(x + 1)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-1$ adds $1$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ of degree $4$ has leading coefficient $-7$, and its roots are $-4$, $1$, $5$ and $6$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x) = -7*(x+4)*(x-1)*(x-5)*(x-6)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ of degree $4$ has leading coefficient $-7$, and its roots are $-4$, $1$, $5$ and $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The degree is $4$, the leading coefficient is $-7$, and the roots are $-4$, $1$, $5$ and $6$.",
                  "reason": "Writing a sentence as an equation: the sentence names the degree, the leading coefficient and the roots."
                },
                {
                  "step": "$f(x) = -7(x - (-4))(x - 1)(x - 5)(x - 6)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = -7(x + 4)(x - 1)(x - 5)(x - 6)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-4$ adds $4$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree $4$, leading coefficient $4$ and roots $-8$, $-6$, $-7$ and $7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x) = 4*(x+8)*(x+6)*(x+7)*(x-7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $f(x)$ alone on the left: The polynomial $f(x)$ has degree $4$, leading coefficient $4$ and roots $-8$, $-6$, $-7$ and $7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The degree is $4$, the leading coefficient is $4$, and the roots are $-8$, $-6$, $-7$ and $7$.",
                  "reason": "Writing a sentence as an equation: the sentence names the degree, the leading coefficient and the roots."
                },
                {
                  "step": "$f(x) = 4(x - (-8))(x - (-6))(x - (-7))(x - 7)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$f(x) = 4(x + 8)(x + 6)(x + 7)(x - 7)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-8$ adds $8$, taking away $-6$ adds $6$ and taking away $-7$ adds $7$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(-5, 96)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
            "figure": {
              "file": "the-factor-theorem-1.svg",
              "alt": "A cubic curve crossing the x-axis at three marked points A, B and C, and passing through the marked point P(−5, 96)."
            },
            "lines": [
              {
                "step": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(-5, 96)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The marked points are $A(-3, 0)$, $B(-1, 0)$, $C(1, 0)$ and $P(-5, 96)$.",
                "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
              },
              {
                "step": "The roots of the cubic are $-3$, $-1$ and $1$.",
                "reason": "Graph of a function: the height of the graph at each of these $x$-values is $0$."
              },
              {
                "step": "$y = a(x - (-3))(x - (-1))(x - 1)$",
                "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
              },
              {
                "step": "$y = a(x + 3)(x + 1)(x - 1)$",
                "reason": "Subtraction as addition, from arithmetic: taking away $-3$ adds $3$ and taking away $-1$ adds $1$."
              },
              {
                "step": "$96 = a(-5 + 3)(-5 + 1)(-5 - 1)$",
                "reason": "Substituting a value: $P$ lies on the graph, so $x = -5$ and $y = 96$ go into line 5."
              },
              {
                "step": "$96 = -48a$",
                "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
              },
              {
                "step": "$a = -2$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-48$."
              },
              {
                "step": "$y = -2(x + 3)(x + 1)(x - 1)$",
                "reason": "Substituting a value: $a = -2$ goes into line 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(3, 80)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -2*(x+2)*(x+1)*(x-5)",
              "lines": [
                {
                  "step": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(3, 80)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The marked points are $A(-2, 0)$, $B(-1, 0)$, $C(5, 0)$ and $P(3, 80)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "The roots of the cubic are $-2$, $-1$ and $5$.",
                  "reason": "Graph of a function: the height of the graph at each of these $x$-values is $0$."
                },
                {
                  "step": "$y = a(x - (-2))(x - (-1))(x - 5)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$y = a(x + 2)(x + 1)(x - 5)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-2$ adds $2$ and taking away $-1$ adds $1$."
                },
                {
                  "step": "$80 = a(3 + 2)(3 + 1)(3 - 5)$",
                  "reason": "Substituting a value: $P$ lies on the graph, so $x = 3$ and $y = 80$ go into line 5."
                },
                {
                  "step": "$80 = -40a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = -2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-40$."
                },
                {
                  "step": "$y = -2(x + 2)(x + 1)(x - 5)$",
                  "reason": "Substituting a value: $a = -2$ goes into line 5."
                }
              ],
              "figure": {
                "file": "the-factor-theorem-2.svg",
                "alt": "A cubic curve crossing the x-axis at three marked points A, B and C, and passing through the marked point P(3, 80)."
              }
            },
            {
              "prompt": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(1, 48)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*(x+1)*(x-3)*(x-5)",
              "lines": [
                {
                  "step": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(1, 48)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The marked points are $A(-1, 0)$, $B(3, 0)$, $C(5, 0)$ and $P(1, 48)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "The roots of the cubic are $-1$, $3$ and $5$.",
                  "reason": "Graph of a function: the height of the graph at each of these $x$-values is $0$."
                },
                {
                  "step": "$y = a(x - (-1))(x - 3)(x - 5)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$y = a(x + 1)(x - 3)(x - 5)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-1$ adds $1$."
                },
                {
                  "step": "$48 = a(1 + 1)(1 - 3)(1 - 5)$",
                  "reason": "Substituting a value: $P$ lies on the graph, so $x = 1$ and $y = 48$ go into line 5."
                },
                {
                  "step": "$48 = 16a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $16$."
                },
                {
                  "step": "$y = 3(x + 1)(x - 3)(x - 5)$",
                  "reason": "Substituting a value: $a = 3$ goes into line 5."
                }
              ],
              "figure": {
                "file": "the-factor-theorem-3.svg",
                "alt": "A cubic curve crossing the x-axis at three marked points A, B and C, and passing through the marked point P(1, 48)."
              }
            },
            {
              "prompt": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(4, 60)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*(x+1)*(x-1)*(x-2)",
              "lines": [
                {
                  "step": "Write the equation of the cubic polynomial whose graph is in the figure, with $y$ alone on the left. The graph passes through the marked point $P(4, 60)$; read the marked points A, B and C, where it crosses the $x$-axis, from the grid.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The marked points are $A(-1, 0)$, $B(1, 0)$, $C(2, 0)$ and $P(4, 60)$.",
                  "reason": "Coordinates: the $x$-coordinate is written first and the $y$-coordinate second."
                },
                {
                  "step": "The roots of the cubic are $-1$, $1$ and $2$.",
                  "reason": "Graph of a function: the height of the graph at each of these $x$-values is $0$."
                },
                {
                  "step": "$y = a(x - (-1))(x - 1)(x - 2)$",
                  "reason": "Factored form: a polynomial of degree $n$ with leading coefficient $a$ and $n$ different roots $r_1, \\dots, r_n$ is $a(x - r_1)\\cdots(x - r_n)$."
                },
                {
                  "step": "$y = a(x + 1)(x - 1)(x - 2)$",
                  "reason": "Subtraction as addition, from arithmetic: taking away $-1$ adds $1$."
                },
                {
                  "step": "$60 = a(4 + 1)(4 - 1)(4 - 2)$",
                  "reason": "Substituting a value: $P$ lies on the graph, so $x = 4$ and $y = 60$ go into line 5."
                },
                {
                  "step": "$60 = 30a$",
                  "reason": "Order of operations: each bracket is worked out first, and the signs of products give the product its sign."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $30$."
                },
                {
                  "step": "$y = 2(x + 1)(x - 1)(x - 2)$",
                  "reason": "Substituting a value: $a = 2$ goes into line 5."
                }
              ],
              "figure": {
                "file": "the-factor-theorem-4.svg",
                "alt": "A cubic curve crossing the x-axis at three marked points A, B and C, and passing through the marked point P(4, 60)."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "t196-k6",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $g(x) = (x + 5)(x + 6)^3$ is a factor of $f(x) = -4(x + 5)^2(x + 6)^2(x + 7)^2$.",
            "lines": [
              {
                "step": "Decide whether $g(x) = (x + 5)(x + 6)^3$ is a factor of $f(x) = -4(x + 5)^2(x + 6)^2(x + 7)^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In $g(x)$ the root $-5$ has multiplicity $1$ and the root $-6$ has multiplicity $3$.",
                "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
              },
              {
                "step": "In $f(x)$ the root $-5$ has multiplicity $2$ and the root $-6$ has multiplicity $2$.",
                "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
              },
              {
                "step": "The root $-6$ has multiplicity $3$ in $g(x)$ but only $2$ in $f(x)$.",
                "reason": "Multiplicity: $g(x)$ is a factor of $f(x)$ exactly when each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$."
              },
              {
                "step": "So $g(x)$ is not a factor of $f(x)$, and the answer is No.",
                "reason": "Answering the question asked: line 4 settles whether $g(x)$ is a factor of $f(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $g(x) = (x - 3)(x + 1)^2(x - 1)^2$ is a factor of $f(x) = 5(x + 1)^2(x - 1)^2(x - 5)(x - 3)$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $g(x) = (x - 3)(x + 1)^2(x - 1)^2$ is a factor of $f(x) = 5(x + 1)^2(x - 1)^2(x - 5)(x - 3)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $g(x)$ the root $3$ has multiplicity $1$, the root $-1$ has multiplicity $2$ and the root $1$ has multiplicity $2$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
                },
                {
                  "step": "In $f(x)$ the root $3$ has multiplicity $1$, the root $-1$ has multiplicity $2$ and the root $1$ has multiplicity $2$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
                },
                {
                  "step": "Each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$: $1$ against $1$ for $3$, $2$ against $2$ for $-1$ and $2$ against $2$ for $1$.",
                  "reason": "Multiplicity: $g(x)$ is a factor of $f(x)$ exactly when each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$."
                },
                {
                  "step": "So $g(x)$ is a factor of $f(x)$, and the answer is Yes.",
                  "reason": "Answering the question asked: line 4 settles whether $g(x)$ is a factor of $f(x)$."
                }
              ]
            },
            {
              "prompt": "Decide whether $g(x) = (x - 2)(x + 3)(x - 3)^3$ is a factor of $f(x) = -3(x + 4)(x + 3)^2(x - 2)^2$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $g(x) = (x - 2)(x + 3)(x - 3)^3$ is a factor of $f(x) = -3(x + 4)(x + 3)^2(x - 2)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $g(x)$ the root $2$ has multiplicity $1$, the root $-3$ has multiplicity $1$ and the root $3$ has multiplicity $3$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
                },
                {
                  "step": "In $f(x)$ the root $2$ has multiplicity $2$, the root $-3$ has multiplicity $2$ and the number $3$ is not a root, so its multiplicity is $0$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
                },
                {
                  "step": "The root $3$ has multiplicity $3$ in $g(x)$ but $0$ in $f(x)$.",
                  "reason": "Multiplicity: $g(x)$ is a factor of $f(x)$ exactly when each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$."
                },
                {
                  "step": "So $g(x)$ is not a factor of $f(x)$, and the answer is No.",
                  "reason": "Answering the question asked: line 4 settles whether $g(x)$ is a factor of $f(x)$."
                }
              ]
            },
            {
              "prompt": "Decide whether $g(x) = (x - 3)^2(x - 2)^2$ is a factor of $f(x) = 3(x - 5)(x - 3)^2(x - 2)^2$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $g(x) = (x - 3)^2(x - 2)^2$ is a factor of $f(x) = 3(x - 5)(x - 3)^2(x - 2)^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In $g(x)$ the root $3$ has multiplicity $2$ and the root $2$ has multiplicity $2$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
                },
                {
                  "step": "In $f(x)$ the root $3$ has multiplicity $2$ and the root $2$ has multiplicity $2$.",
                  "reason": "Multiplicity: in a nonzero number times brackets $x - r$, the multiplicity of a root $r$ is the power of its bracket, and a number with no bracket is not a root and has multiplicity $0$."
                },
                {
                  "step": "Each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$: $2$ against $2$ for $3$ and $2$ against $2$ for $2$.",
                  "reason": "Multiplicity: $g(x)$ is a factor of $f(x)$ exactly when each root of $g(x)$ has in $f(x)$ a multiplicity at least its multiplicity in $g(x)$."
                },
                {
                  "step": "So $g(x)$ is a factor of $f(x)$, and the answer is Yes.",
                  "reason": "Answering the question asked: line 4 settles whether $g(x)$ is a factor of $f(x)$."
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
      "id": "t196-p1",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial and $a$ a number. Then $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$.",
      "idea": "If $x - a$ is a factor, put $x = a$ in $f(x) = (x - a)q(x)$; if $f(a) = 0$, the Remainder Theorem makes the remainder on division by $x - a$ equal to $0$.",
      "lines": [
        {
          "line": "Suppose first that $x - a$ is a factor of $f(x)$.",
          "reason": "The first direction starts from its hypothesis."
        },
        {
          "line": "Then $f(x) = (x - a)q(x)$ for a polynomial $q(x)$.",
          "reason": "Division statement: a factor divides $f(x)$ with remainder $0$, so $f(x)$ is the factor times the quotient $q(x)$."
        },
        {
          "line": "$f(a) = (a - a)q(a)$",
          "reason": "Substituting a value: $a$ goes in place of $x$ in line 2."
        },
        {
          "line": "$f(a) = 0 \\cdot q(a)$",
          "reason": "Subtraction as addition, from arithmetic: $a - a = a + (-a) = 0$."
        },
        {
          "line": "$f(a) = 0$",
          "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
        },
        {
          "line": "Suppose now that $f(a) = 0$.",
          "reason": "The second direction starts from its hypothesis."
        },
        {
          "line": "The remainder when $f(x)$ is divided by $x - a$ is $f(a)$.",
          "reason": "Remainder Theorem: when a polynomial $f(x)$ is divided by $x - a$, the remainder is $f(a)$."
        },
        {
          "line": "The remainder when $f(x)$ is divided by $x - a$ is $0$.",
          "reason": "Transitive property: lines 6 and 7."
        },
        {
          "line": "The polynomial $f(x)$ is divisible by $x - a$.",
          "reason": "Division statement: the remainder is $0$."
        },
        {
          "line": "So $x - a$ is a factor of $f(x)$.",
          "reason": "Factor Theorem, its definition of a factor: a polynomial that divides $f(x)$ is a factor of $f(x)$."
        },
        {
          "line": "So $x - a$ is a factor of $f(x)$ exactly when $f(a) = 0$.",
          "reason": "Lines 1 to 5 give the first direction and lines 6 to 10 the second."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t196-s1",
      "method": "direct proof",
      "statement": "Prove that if a polynomial $g(x)$ is a factor of a polynomial $f(x)$ and $a$ is a number with $g(a) = 0$, then $f(a) = 0$. Facts it may use: division statement, substituting a value, the assumptions on multiplication.",
      "check": {
        "proof": [
          {
            "line": "Then $f(x) = g(x)q(x)$ for a polynomial $q(x)$.",
            "reason": "Division statement: $g(x)$ is a factor, so $f(x)$ divided by $g(x)$ leaves the remainder $0$, and $f(x)$ is $g(x)$ times the quotient $q(x)$."
          },
          {
            "line": "$f(a) = g(a)q(a)$",
            "reason": "Substituting a value: $a$ goes in place of $x$ in line 1."
          },
          {
            "line": "$f(a) = 0 \\cdot q(a)$",
            "reason": "Substituting a value: by the hypothesis, $g(a) = 0$."
          },
          {
            "line": "$f(a) = 0$",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          }
        ]
      }
    },
    {
      "id": "t196-s2",
      "method": "direct proof",
      "statement": "Prove that if $a$ is a number and $x - a$ is a factor of the product $f(x)g(x)$ of two polynomials, then $x - a$ is a factor of $f(x)$ or of $g(x)$. Facts it may use: Factor Theorem, substituting a value, zero-product property.",
      "check": {
        "proof": [
          {
            "line": "The product $f(x)g(x)$ takes the value $0$ at $x = a$.",
            "reason": "Factor Theorem: $x - a$ is a factor of $f(x)g(x)$."
          },
          {
            "line": "$f(a)g(a) = 0$",
            "reason": "Substituting a value: $a$ goes in place of $x$ in $f(x)g(x)$."
          },
          {
            "line": "So $f(a) = 0$ or $g(a) = 0$.",
            "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
          },
          {
            "line": "So $x - a$ is a factor of $f(x)$ or of $g(x)$.",
            "reason": "Factor Theorem: whichever of $f(a)$ and $g(a)$ is $0$ makes $x - a$ a factor of that polynomial."
          }
        ]
      }
    },
    {
      "id": "t196-s3",
      "method": "proof by contradiction",
      "statement": "Prove that if a polynomial $f(x)$ of degree $n \\ge 1$ with leading coefficient $a_n$ has $n$ different roots $r_1, r_2, \\dots, r_n$, then $f(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$. Facts it may use: Factor Theorem, division statement, substituting a value, zero-product property, a nonempty set of whole numbers has a least member, degree, degree of a product is the sum of the degrees, the leading term of a product is the product of the leading terms.",
      "check": {
        "proof": [
          {
            "line": "Suppose that the product $(x - r_1)(x - r_2)\\cdots(x - r_n)$ is not a factor of $f(x)$.",
            "reason": "Proof by contradiction: the opposite of the claim that the product is a factor is assumed."
          },
          {
            "line": "Then the whole numbers $k$ from $1$ to $n$ for which $(x - r_1)\\cdots(x - r_k)$ is not a factor of $f(x)$ form a set that holds $n$.",
            "reason": "Line 1 is the case $k = n$."
          },
          {
            "line": "Let $k$ be the least member of this set.",
            "reason": "A nonempty set of whole numbers has a least member, from arithmetic."
          },
          {
            "line": "The number $k$ is not $1$.",
            "reason": "Factor Theorem: $f(r_1) = 0$, so $x - r_1$ is a factor of $f(x)$ and $1$ is not in the set."
          },
          {
            "line": "The number $k - 1$ is a whole number from $1$ to $n$.",
            "reason": "Lines 3 and 4: $k$ is a whole number from $2$ to $n$."
          },
          {
            "line": "So $k - 1$ is not in the set, and $(x - r_1)\\cdots(x - r_{k-1})$ is a factor of $f(x)$.",
            "reason": "Line 3: $k - 1$ is below the least member."
          },
          {
            "line": "Then $f(x) = (x - r_1)\\cdots(x - r_{k-1})q(x)$ for a polynomial $q(x)$.",
            "reason": "Division statement: a factor divides $f(x)$ with remainder $0$, so $f(x)$ is the factor times the quotient."
          },
          {
            "line": "$f(r_k) = (r_k - r_1)\\cdots(r_k - r_{k-1})q(r_k)$",
            "reason": "Substituting a value: $r_k$ goes in place of $x$ in line 7."
          },
          {
            "line": "$(r_k - r_1)\\cdots(r_k - r_{k-1})q(r_k) = 0$",
            "reason": "Transitive property: $r_k$ is a root, so $f(r_k) = 0$."
          },
          {
            "line": "None of the numbers $r_k - r_1, \\dots, r_k - r_{k-1}$ is $0$.",
            "reason": "The hypothesis: the roots are different."
          },
          {
            "line": "$q(r_k) = 0$",
            "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and by line 10 no other factor is."
          },
          {
            "line": "The polynomial $x - r_k$ is a factor of $q(x)$.",
            "reason": "Factor Theorem: by line 11, $q(r_k) = 0$."
          },
          {
            "line": "Then $q(x) = (x - r_k)g(x)$ for a polynomial $g(x)$.",
            "reason": "Division statement: a factor divides $q(x)$ with remainder $0$."
          },
          {
            "line": "$f(x) = (x - r_1)\\cdots(x - r_k)g(x)$",
            "reason": "Substitution: line 13 takes the place of $q(x)$ in line 7."
          },
          {
            "line": "So $(x - r_1)\\cdots(x - r_k)$ is a factor of $f(x)$, and $k$ is not in the set, which contradicts line 3.",
            "reason": "Division statement: line 14 writes $f(x)$ as this product times a polynomial."
          },
          {
            "line": "So the product $(x - r_1)\\cdots(x - r_n)$ is a factor of $f(x)$.",
            "reason": "Proof by contradiction: the assumption of line 1 leads to a false statement."
          },
          {
            "line": "Then $f(x) = (x - r_1)\\cdots(x - r_n)h(x)$ for a polynomial $h(x)$.",
            "reason": "Division statement: a factor divides $f(x)$ with remainder $0$, so $f(x)$ is the factor times the quotient $h(x)$."
          },
          {
            "line": "The polynomial $h(x)$ is not the zero polynomial.",
            "reason": "Degree: $f(x)$ has degree $n$, and the zero polynomial has no degree."
          },
          {
            "line": "The polynomial $h(x)$ has degree $0$, so it is a nonzero number $c$.",
            "reason": "Degree of a product is the sum of the degrees: the $n$ brackets have degree $1$ each, so $n = n + m$ for the degree $m$ of $h(x)$, and $m = 0$."
          },
          {
            "line": "$c = a_n$",
            "reason": "The leading term of a product is the product of the leading terms: the leading term of $f(x)$ is $cx^n$, and it is $a_nx^n$."
          },
          {
            "line": "So $f(x) = a_n(x - r_1)(x - r_2)\\cdots(x - r_n)$.",
            "reason": "Substituting a value: $c = a_n$ goes into line 17."
          }
        ]
      }
    },
    {
      "id": "t196-s4",
      "method": "proof by contradiction",
      "statement": "Prove that if $f(x) = (x - a)^kh(x)$, where $k$ is a whole number, $a$ is a number and $h(x)$ is a polynomial with $h(a) \\ne 0$, then $(x - a)^{k+1}$ is not a factor of $f(x)$. Facts it may use: division statement, product law, the distributive law, substituting a value, degree, degree of a product is the sum of the degrees, the assumptions on multiplication.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $(x - a)^{k+1}$ is a factor of $f(x)$.",
            "reason": "Proof by contradiction: the opposite of the claim is assumed."
          },
          {
            "line": "Then $f(x) = (x - a)^{k+1}g(x)$ for a polynomial $g(x)$.",
            "reason": "Division statement: a factor divides $f(x)$ with remainder $0$, so $f(x)$ is the factor times the quotient."
          },
          {
            "line": "$(x - a)^kh(x) = (x - a)^{k+1}g(x)$",
            "reason": "Transitive property: the hypothesis and line 2 both give $f(x)$."
          },
          {
            "line": "$(x - a)^kh(x) = (x - a)^k(x - a)g(x)$",
            "reason": "Product law: $(x - a)^{k+1} = (x - a)^k(x - a)$."
          },
          {
            "line": "$(x - a)^kh(x) - (x - a)^k(x - a)g(x) = 0$",
            "reason": "Adding the same number to both sides: the right side is taken from both sides."
          },
          {
            "line": "$(x - a)^k\\left(h(x) - (x - a)g(x)\\right) = 0$",
            "reason": "The distributive law, from arithmetic: $(x - a)^k$ is taken out of both terms."
          },
          {
            "line": "The polynomial $(x - a)^k$ is not the zero polynomial: it has degree $k$.",
            "reason": "Degree of a product is the sum of the degrees: each of the $k$ brackets has degree $1$."
          },
          {
            "line": "So $h(x) - (x - a)g(x)$ is the zero polynomial.",
            "reason": "Degree of a product is the sum of the degrees: were it not the zero polynomial, the product in line 6 would have a degree, and the zero polynomial has none."
          },
          {
            "line": "$h(x) = (x - a)g(x)$",
            "reason": "Adding the same number to both sides: $(x - a)g(x)$ is added to both sides of line 8."
          },
          {
            "line": "$h(a) = (a - a)g(a)$",
            "reason": "Substituting a value: $a$ goes in place of $x$ in line 9."
          },
          {
            "line": "$h(a) = 0 \\cdot g(a)$",
            "reason": "Subtraction as addition, from arithmetic: $a - a = 0$."
          },
          {
            "line": "$h(a) = 0$",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "So $(x - a)^{k+1}$ is not a factor of $f(x)$.",
            "reason": "Proof by contradiction: line 12 contradicts the hypothesis $h(a) \\ne 0$, so the assumption of line 1 is false."
          }
        ]
      }
    }
  ]
}
