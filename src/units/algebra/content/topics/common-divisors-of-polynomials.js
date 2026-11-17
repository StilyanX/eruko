export default {
  "number": 237,
  "title": "Common divisors and common roots of polynomials",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "655-658"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the monic quadratic that is a factor of both $f(x) = x^4 + 3x^3 - 32x^2 + 82x - 60$ and $g(x) = 3x^4 + 9x^3 - 111x^2 + 141x - 30$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^2+7*x-10",
    "solution": [
      "Find the monic quadratic that is a factor of both $f(x) = x^4 + 3x^3 - 32x^2 + 82x - 60$ and $g(x) = 3x^4 + 9x^3 - 111x^2 + 141x - 30$.",
      "A common factor of $f(x)$ and $g(x)$ is a factor of $3f(x) - g(x)$.",
      "$3f(x) - g(x) = 3(x^4 + 3x^3 - 32x^2 + 82x - 60) - (3x^4 + 9x^3 - 111x^2 + 141x - 30) = 15x^2 + 105x - 150$",
      "$15x^2 + 105x - 150 = 15(x^2 + 7x - 10)$",
      "So the only monic quadratic that can divide both is $x^2 + 7x - 10$.",
      "$f(x) = (x^2 + 7x - 10)(x^2 - 4x + 6)$",
      "$g(x) = (x^2 + 7x - 10)(3x^2 - 12x + 3)$",
      "So $x^2 + 7x - 10$ is a factor of both."
    ]
  },
  "ideas": [
    {
      "name": "Common divisor of polynomials",
      "concrete": "The polynomials $x^2 - 7x + 10 = (x - 5)(x - 2)$ and $2x^2 - 3x - 35 = (x - 5)(2x + 7)$ both have the factor $x - 5$, so $x - 5$ is a common divisor of the two, and $x = 5$ is a root of each.",
      "general": "A **common divisor** of two polynomials $f(x)$ and $g(x)$ is a polynomial that is a factor of both. By the Factor Theorem, $x - r$ is a common divisor of $f(x)$ and $g(x)$ exactly when the number $r$ is a root of both, so finding the common roots of two polynomials and finding their common divisors are one task."
    },
    {
      "name": "Common divisor divides every combination",
      "concrete": "Taking $2x^2 - 3x - 35$ from 2 times $x^2 - 7x + 10$ cancels the terms in $x^2$ and leaves $-11x + 55 = -11(x - 5)$, which the common divisor $x - 5$ still divides.",
      "general": "If a polynomial $h(x)$ divides the polynomials $f(x)$ and $g(x)$, then $h(x)$ divides $a(x)f(x) + b(x)g(x)$ for every pair of polynomials $a(x)$ and $b(x)$. Choosing $a(x)$ and $b(x)$ so that the leading terms cancel gives a polynomial of lower degree that every common divisor of $f(x)$ and $g(x)$ still divides."
    }
  ],
  "kinds": [
    {
      "id": "t237-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the monic quadratic that is a factor of both $f(x) = 2x^4 - 14x^3 - 32x^2 + 20x + 24$ and $g(x) = 3x^4 - 21x^3 - 50x^2 + 46x + 48$.",
            "lines": [
              {
                "step": "Find the monic quadratic that is a factor of both $f(x) = 2x^4 - 14x^3 - 32x^2 + 20x + 24$ and $g(x) = 3x^4 - 21x^3 - 50x^2 + 46x + 48$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "A common factor of $f(x)$ and $g(x)$ is a factor of $3f(x) - 2g(x)$.",
                "reason": "Common divisor divides every combination: a polynomial that divides $f(x)$ and $g(x)$ divides $a(x)f(x) + b(x)g(x)$; here $a(x) = 3$ and $b(x) = -2$, chosen so the terms in $x^4$ cancel."
              },
              {
                "step": "$3f(x) - 2g(x) = 3(2x^4 - 14x^3 - 32x^2 + 20x + 24) - 2(3x^4 - 21x^3 - 50x^2 + 46x + 48) = 4x^2 - 32x - 24$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^4$ and $x^3$ cancel."
              },
              {
                "step": "$4x^2 - 32x - 24 = 4(x^2 - 8x - 6)$",
                "reason": "Taking out a common factor: $4$ divides each coefficient."
              },
              {
                "step": "So the only monic quadratic that can divide both is $x^2 - 8x - 6$.",
                "reason": "Common divisor of polynomials: a monic quadratic that divides $4(x^2 - 8x - 6)$, a number times a monic quadratic, is that quadratic."
              },
              {
                "step": "$f(x) = (x^2 - 8x - 6)(2x^2 + 2x - 4)$",
                "reason": "Long division of polynomials: $f(x)$ divided by $x^2 - 8x - 6$ leaves the remainder $0$."
              },
              {
                "step": "$g(x) = (x^2 - 8x - 6)(3x^2 + 3x - 8)$",
                "reason": "Long division of polynomials: $g(x)$ divided by $x^2 - 8x - 6$ leaves the remainder $0$."
              },
              {
                "step": "So $x^2 - 8x - 6$ is a factor of both.",
                "reason": "Common divisor of polynomials: lines 6 and 7 write each polynomial as $x^2 - 8x - 6$ times a polynomial."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the monic quadratic that is a factor of both $f(x) = 3x^4 + 21x^3 + 36x^2 - 63x - 135$ and $g(x) = 2x^4 + 14x^3 + 23x^2 - 49x - 105$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+7*x+15",
              "lines": [
                {
                  "step": "Find the monic quadratic that is a factor of both $f(x) = 3x^4 + 21x^3 + 36x^2 - 63x - 135$ and $g(x) = 2x^4 + 14x^3 + 23x^2 - 49x - 105$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A common factor of $f(x)$ and $g(x)$ is a factor of $2f(x) - 3g(x)$.",
                  "reason": "Common divisor divides every combination: a polynomial that divides $f(x)$ and $g(x)$ divides $a(x)f(x) + b(x)g(x)$; here $a(x) = 2$ and $b(x) = -3$, chosen so the terms in $x^4$ cancel."
                },
                {
                  "step": "$2f(x) - 3g(x) = 2(3x^4 + 21x^3 + 36x^2 - 63x - 135) - 3(2x^4 + 14x^3 + 23x^2 - 49x - 105) = 3x^2 + 21x + 45$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^4$ and $x^3$ cancel."
                },
                {
                  "step": "$3x^2 + 21x + 45 = 3(x^2 + 7x + 15)$",
                  "reason": "Taking out a common factor: $3$ divides each coefficient."
                },
                {
                  "step": "So the only monic quadratic that can divide both is $x^2 + 7x + 15$.",
                  "reason": "Common divisor of polynomials: a monic quadratic that divides $3(x^2 + 7x + 15)$, a number times a monic quadratic, is that quadratic."
                },
                {
                  "step": "$f(x) = (x^2 + 7x + 15)(3x^2 - 9)$",
                  "reason": "Long division of polynomials: $f(x)$ divided by $x^2 + 7x + 15$ leaves the remainder $0$."
                },
                {
                  "step": "$g(x) = (x^2 + 7x + 15)(2x^2 - 7)$",
                  "reason": "Long division of polynomials: $g(x)$ divided by $x^2 + 7x + 15$ leaves the remainder $0$."
                },
                {
                  "step": "So $x^2 + 7x + 15$ is a factor of both.",
                  "reason": "Common divisor of polynomials: lines 6 and 7 write each polynomial as $x^2 + 7x + 15$ times a polynomial."
                }
              ]
            },
            {
              "prompt": "Find the monic quadratic that is a factor of both $f(x) = 3x^4 + 9x^3 - 37x^2 + 5x + 28$ and $g(x) = 5x^4 + 15x^3 - 48x^2 + 63x - 49$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+4*x-7",
              "lines": [
                {
                  "step": "Find the monic quadratic that is a factor of both $f(x) = 3x^4 + 9x^3 - 37x^2 + 5x + 28$ and $g(x) = 5x^4 + 15x^3 - 48x^2 + 63x - 49$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A common factor of $f(x)$ and $g(x)$ is a factor of $5f(x) - 3g(x)$.",
                  "reason": "Common divisor divides every combination: a polynomial that divides $f(x)$ and $g(x)$ divides $a(x)f(x) + b(x)g(x)$; here $a(x) = 5$ and $b(x) = -3$, chosen so the terms in $x^4$ cancel."
                },
                {
                  "step": "$5f(x) - 3g(x) = 5(3x^4 + 9x^3 - 37x^2 + 5x + 28) - 3(5x^4 + 15x^3 - 48x^2 + 63x - 49) = -41x^2 - 164x + 287$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^4$ and $x^3$ cancel."
                },
                {
                  "step": "$-41x^2 - 164x + 287 = -41(x^2 + 4x - 7)$",
                  "reason": "Taking out a common factor: $-41$ divides each coefficient."
                },
                {
                  "step": "So the only monic quadratic that can divide both is $x^2 + 4x - 7$.",
                  "reason": "Common divisor of polynomials: a monic quadratic that divides $-41(x^2 + 4x - 7)$, a number times a monic quadratic, is that quadratic."
                },
                {
                  "step": "$f(x) = (x^2 + 4x - 7)(3x^2 - 3x - 4)$",
                  "reason": "Long division of polynomials: $f(x)$ divided by $x^2 + 4x - 7$ leaves the remainder $0$."
                },
                {
                  "step": "$g(x) = (x^2 + 4x - 7)(5x^2 - 5x + 7)$",
                  "reason": "Long division of polynomials: $g(x)$ divided by $x^2 + 4x - 7$ leaves the remainder $0$."
                },
                {
                  "step": "So $x^2 + 4x - 7$ is a factor of both.",
                  "reason": "Common divisor of polynomials: lines 6 and 7 write each polynomial as $x^2 + 4x - 7$ times a polynomial."
                }
              ]
            },
            {
              "prompt": "Find the monic quadratic that is a factor of both $f(x) = x^4 - 8x^3 + 18x^2 - 23x - 28$ and $g(x) = 2x^4 - 16x^3 + 30x^2 - 16x - 32$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2-5*x-4",
              "lines": [
                {
                  "step": "Find the monic quadratic that is a factor of both $f(x) = x^4 - 8x^3 + 18x^2 - 23x - 28$ and $g(x) = 2x^4 - 16x^3 + 30x^2 - 16x - 32$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A common factor of $f(x)$ and $g(x)$ is a factor of $2f(x) - g(x)$.",
                  "reason": "Common divisor divides every combination: a polynomial that divides $f(x)$ and $g(x)$ divides $a(x)f(x) + b(x)g(x)$; here $a(x) = 2$ and $b(x) = -1$, chosen so the terms in $x^4$ cancel."
                },
                {
                  "step": "$2f(x) - g(x) = 2(x^4 - 8x^3 + 18x^2 - 23x - 28) - (2x^4 - 16x^3 + 30x^2 - 16x - 32) = 6x^2 - 30x - 24$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^4$ and $x^3$ cancel."
                },
                {
                  "step": "$6x^2 - 30x - 24 = 6(x^2 - 5x - 4)$",
                  "reason": "Taking out a common factor: $6$ divides each coefficient."
                },
                {
                  "step": "So the only monic quadratic that can divide both is $x^2 - 5x - 4$.",
                  "reason": "Common divisor of polynomials: a monic quadratic that divides $6(x^2 - 5x - 4)$, a number times a monic quadratic, is that quadratic."
                },
                {
                  "step": "$f(x) = (x^2 - 5x - 4)(x^2 - 3x + 7)$",
                  "reason": "Long division of polynomials: $f(x)$ divided by $x^2 - 5x - 4$ leaves the remainder $0$."
                },
                {
                  "step": "$g(x) = (x^2 - 5x - 4)(2x^2 - 6x + 8)$",
                  "reason": "Long division of polynomials: $g(x)$ divided by $x^2 - 5x - 4$ leaves the remainder $0$."
                },
                {
                  "step": "So $x^2 - 5x - 4$ is a factor of both.",
                  "reason": "Common divisor of polynomials: lines 6 and 7 write each polynomial as $x^2 - 5x - 4$ times a polynomial."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t237-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every number $b$ for which the equations $7x^2 + bx - 22 = 0$ and $-5x^2 + bx + 26 = 0$ have a root in common.",
            "lines": [
              {
                "step": "Find every number $b$ for which the equations $7x^2 + bx - 22 = 0$ and $-5x^2 + bx + 26 = 0$ have a root in common.",
                "reason": "This is the problem as given."
              },
              {
                "step": "A common root $x$ gives $7x^2 + bx - 22 = 0$ and $-5x^2 + bx + 26 = 0$ at once.",
                "reason": "A root satisfies its equation."
              },
              {
                "step": "$12x^2 - 48 = 0$",
                "reason": "Adding two equations: the second is taken from the first; subtracting a bracket changes every sign in it, and the terms in $bx$ cancel."
              },
              {
                "step": "$12x^2 = 48$",
                "reason": "Adding the same number to both sides: $48$ is added to each side."
              },
              {
                "step": "$x^2 = 4$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
              },
              {
                "step": "So $x = 2$ or $x = -2$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $a = 2$."
              },
              {
                "step": "$7 \\cdot 2^2 + 2b - 22 = 0$",
                "reason": "Substituting a value: $x = 2$ in the first equation."
              },
              {
                "step": "$b = -3$",
                "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
              },
              {
                "step": "$7 \\cdot (-2)^2 - 2b - 22 = 0$",
                "reason": "Substituting a value: $x = -2$ in the first equation."
              },
              {
                "step": "$b = 3$",
                "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
              },
              {
                "step": "So $b = -3$ or $b = 3$.",
                "reason": "Adding two equations: line 3 holds at both roots, so where the first equation holds, the second holds too."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $b$ for which the equations $6x^2 + bx + 17 = 0$ and $4x^2 + bx + 49 = 0$ have a root in common.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-113/4, 113/4}",
              "lines": [
                {
                  "step": "Find every number $b$ for which the equations $6x^2 + bx + 17 = 0$ and $4x^2 + bx + 49 = 0$ have a root in common.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A common root $x$ gives $6x^2 + bx + 17 = 0$ and $4x^2 + bx + 49 = 0$ at once.",
                  "reason": "A root satisfies its equation."
                },
                {
                  "step": "$2x^2 - 32 = 0$",
                  "reason": "Adding two equations: the second is taken from the first; subtracting a bracket changes every sign in it, and the terms in $bx$ cancel."
                },
                {
                  "step": "$2x^2 = 32$",
                  "reason": "Adding the same number to both sides: $32$ is added to each side."
                },
                {
                  "step": "$x^2 = 16$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "So $x = 4$ or $x = -4$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $a = 4$."
                },
                {
                  "step": "$6 \\cdot 4^2 + 4b + 17 = 0$",
                  "reason": "Substituting a value: $x = 4$ in the first equation."
                },
                {
                  "step": "$b = -\\dfrac{113}{4}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "$6 \\cdot (-4)^2 - 4b + 17 = 0$",
                  "reason": "Substituting a value: $x = -4$ in the first equation."
                },
                {
                  "step": "$b = \\dfrac{113}{4}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "So $b = -\\dfrac{113}{4}$ or $b = \\dfrac{113}{4}$.",
                  "reason": "Adding two equations: line 3 holds at both roots, so where the first equation holds, the second holds too."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which the equations $8x^2 + bx - 29 = 0$ and $-4x^2 + bx + 79 = 0$ have a root in common.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-43/3, 43/3}",
              "lines": [
                {
                  "step": "Find every number $b$ for which the equations $8x^2 + bx - 29 = 0$ and $-4x^2 + bx + 79 = 0$ have a root in common.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A common root $x$ gives $8x^2 + bx - 29 = 0$ and $-4x^2 + bx + 79 = 0$ at once.",
                  "reason": "A root satisfies its equation."
                },
                {
                  "step": "$12x^2 - 108 = 0$",
                  "reason": "Adding two equations: the second is taken from the first; subtracting a bracket changes every sign in it, and the terms in $bx$ cancel."
                },
                {
                  "step": "$12x^2 = 108$",
                  "reason": "Adding the same number to both sides: $108$ is added to each side."
                },
                {
                  "step": "$x^2 = 9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
                },
                {
                  "step": "So $x = 3$ or $x = -3$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $a = 3$."
                },
                {
                  "step": "$8 \\cdot 3^2 + 3b - 29 = 0$",
                  "reason": "Substituting a value: $x = 3$ in the first equation."
                },
                {
                  "step": "$b = -\\dfrac{43}{3}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "$8 \\cdot (-3)^2 - 3b - 29 = 0$",
                  "reason": "Substituting a value: $x = -3$ in the first equation."
                },
                {
                  "step": "$b = \\dfrac{43}{3}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "So $b = -\\dfrac{43}{3}$ or $b = \\dfrac{43}{3}$.",
                  "reason": "Adding two equations: line 3 holds at both roots, so where the first equation holds, the second holds too."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which the equations $5x^2 + bx - 36 = 0$ and $-2x^2 + bx + 139 = 0$ have a root in common.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-89/5, 89/5}",
              "lines": [
                {
                  "step": "Find every number $b$ for which the equations $5x^2 + bx - 36 = 0$ and $-2x^2 + bx + 139 = 0$ have a root in common.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A common root $x$ gives $5x^2 + bx - 36 = 0$ and $-2x^2 + bx + 139 = 0$ at once.",
                  "reason": "A root satisfies its equation."
                },
                {
                  "step": "$7x^2 - 175 = 0$",
                  "reason": "Adding two equations: the second is taken from the first; subtracting a bracket changes every sign in it, and the terms in $bx$ cancel."
                },
                {
                  "step": "$7x^2 = 175$",
                  "reason": "Adding the same number to both sides: $175$ is added to each side."
                },
                {
                  "step": "$x^2 = 25$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
                },
                {
                  "step": "So $x = 5$ or $x = -5$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, with $a = 5$."
                },
                {
                  "step": "$5 \\cdot 5^2 + 5b - 36 = 0$",
                  "reason": "Substituting a value: $x = 5$ in the first equation."
                },
                {
                  "step": "$b = -\\dfrac{89}{5}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "$5 \\cdot (-5)^2 - 5b - 36 = 0$",
                  "reason": "Substituting a value: $x = -5$ in the first equation."
                },
                {
                  "step": "$b = \\dfrac{89}{5}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "So $b = -\\dfrac{89}{5}$ or $b = \\dfrac{89}{5}$.",
                  "reason": "Adding two equations: line 3 holds at both roots, so where the first equation holds, the second holds too."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $b$ for which the equations $2x^2 + bx - 23 = 0$ and $2x^2 - 4x - 2b - 31 = 0$ have a root in common, real or not.",
            "lines": [
              {
                "step": "Find every number $b$ for which the equations $2x^2 + bx - 23 = 0$ and $2x^2 - 4x - 2b - 31 = 0$ have a root in common, real or not.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x^2 + bx - 23) - (2x^2 - 4x - 2b - 31) = 0$",
                "reason": "A root satisfies its equation: a common root makes both left sides $0$, so their difference is $0$."
              },
              {
                "step": "$bx + 4x + 2b + 8 = 0$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^2$ cancel."
              },
              {
                "step": "$(b + 4)(x + 2) = 0$",
                "reason": "Factoring by grouping: $bx + 4x = x(b + 4)$ and $2b + 8 = 2(b + 4)$."
              },
              {
                "step": "Either $b = -4$ or $x = -2$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "$-2 \\cdot (-4) - 31 = -23$",
                "reason": "Substituting a value: $b = -4$ in the terms $-2b - 31$ of the second equation."
              },
              {
                "step": "So at $b = -4$ the two equations are the same and share both roots.",
                "reason": "Equal for all $x$ means equal coefficients: line 6 makes each coefficient of the second equation the first's."
              },
              {
                "step": "$2 \\cdot (-2)^2 - 2b - 23 = 0$",
                "reason": "Substituting a value: $x = -2$ in the first equation."
              },
              {
                "step": "$b = -\\dfrac{15}{2}$",
                "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
              },
              {
                "step": "So $b = -4$ or $b = -\\dfrac{15}{2}$.",
                "reason": "Adding two equations: line 3 is $0$ at $x = -2$, so $x = -2$ is a root of the second equation as well as the first."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $b$ for which the equations $2x^2 + bx - 25 = 0$ and $2x^2 + 3x - 3b - 16 = 0$ have a root in common, real or not.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7/3, 3}",
              "lines": [
                {
                  "step": "Find every number $b$ for which the equations $2x^2 + bx - 25 = 0$ and $2x^2 + 3x - 3b - 16 = 0$ have a root in common, real or not.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x^2 + bx - 25) - (2x^2 + 3x - 3b - 16) = 0$",
                  "reason": "A root satisfies its equation: a common root makes both left sides $0$, so their difference is $0$."
                },
                {
                  "step": "$bx - 3x + 3b - 9 = 0$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^2$ cancel."
                },
                {
                  "step": "$(b - 3)(x + 3) = 0$",
                  "reason": "Factoring by grouping: $bx - 3x = x(b - 3)$ and $3b - 9 = 3(b - 3)$."
                },
                {
                  "step": "Either $b = 3$ or $x = -3$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "$-3 \\cdot 3 - 16 = -25$",
                  "reason": "Substituting a value: $b = 3$ in the terms $-3b - 16$ of the second equation."
                },
                {
                  "step": "So at $b = 3$ the two equations are the same and share both roots.",
                  "reason": "Equal for all $x$ means equal coefficients: line 6 makes each coefficient of the second equation the first's."
                },
                {
                  "step": "$2 \\cdot (-3)^2 - 3b - 25 = 0$",
                  "reason": "Substituting a value: $x = -3$ in the first equation."
                },
                {
                  "step": "$b = -\\dfrac{7}{3}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "So $b = 3$ or $b = -\\dfrac{7}{3}$.",
                  "reason": "Adding two equations: line 3 is $0$ at $x = -3$, so $x = -3$ is a root of the second equation as well as the first."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which the equations $7x^2 + bx + 19 = 0$ and $7x^2 - 5x - 5b - 6 = 0$ have a root in common, real or not.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5, 194/5}",
              "lines": [
                {
                  "step": "Find every number $b$ for which the equations $7x^2 + bx + 19 = 0$ and $7x^2 - 5x - 5b - 6 = 0$ have a root in common, real or not.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7x^2 + bx + 19) - (7x^2 - 5x - 5b - 6) = 0$",
                  "reason": "A root satisfies its equation: a common root makes both left sides $0$, so their difference is $0$."
                },
                {
                  "step": "$bx + 5x + 5b + 25 = 0$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^2$ cancel."
                },
                {
                  "step": "$(b + 5)(x + 5) = 0$",
                  "reason": "Factoring by grouping: $bx + 5x = x(b + 5)$ and $5b + 25 = 5(b + 5)$."
                },
                {
                  "step": "Either $b = -5$ or $x = -5$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "$-5 \\cdot (-5) - 6 = 19$",
                  "reason": "Substituting a value: $b = -5$ in the terms $-5b - 6$ of the second equation."
                },
                {
                  "step": "So at $b = -5$ the two equations are the same and share both roots.",
                  "reason": "Equal for all $x$ means equal coefficients: line 6 makes each coefficient of the second equation the first's."
                },
                {
                  "step": "$7 \\cdot (-5)^2 - 5b + 19 = 0$",
                  "reason": "Substituting a value: $x = -5$ in the first equation."
                },
                {
                  "step": "$b = \\dfrac{194}{5}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "So $b = -5$ or $b = \\dfrac{194}{5}$.",
                  "reason": "Adding two equations: line 3 is $0$ at $x = -5$, so $x = -5$ is a root of the second equation as well as the first."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which the equations $7x^2 + bx - 18 = 0$ and $7x^2 + 6x + 5b - 48 = 0$ have a root in common, real or not.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-157/5, 6}",
              "lines": [
                {
                  "step": "Find every number $b$ for which the equations $7x^2 + bx - 18 = 0$ and $7x^2 + 6x + 5b - 48 = 0$ have a root in common, real or not.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7x^2 + bx - 18) - (7x^2 + 6x + 5b - 48) = 0$",
                  "reason": "A root satisfies its equation: a common root makes both left sides $0$, so their difference is $0$."
                },
                {
                  "step": "$bx - 6x - 5b + 30 = 0$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^2$ cancel."
                },
                {
                  "step": "$(b - 6)(x - 5) = 0$",
                  "reason": "Factoring by grouping: $bx - 6x = x(b - 6)$ and $-5b + 30 = -5(b - 6)$."
                },
                {
                  "step": "Either $b = 6$ or $x = 5$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "$5 \\cdot 6 - 48 = -18$",
                  "reason": "Substituting a value: $b = 6$ in the terms $5b - 48$ of the second equation."
                },
                {
                  "step": "So at $b = 6$ the two equations are the same and share both roots.",
                  "reason": "Equal for all $x$ means equal coefficients: line 6 makes each coefficient of the second equation the first's."
                },
                {
                  "step": "$7 \\cdot 5^2 + 5b - 18 = 0$",
                  "reason": "Substituting a value: $x = 5$ in the first equation."
                },
                {
                  "step": "$b = -\\dfrac{157}{5}$",
                  "reason": "Isolating the variable: the terms without $b$ go to the right, and both sides are divided by the coefficient of $b$."
                },
                {
                  "step": "So $b = 6$ or $b = -\\dfrac{157}{5}$.",
                  "reason": "Adding two equations: line 3 is $0$ at $x = 5$, so $x = 5$ is a root of the second equation as well as the first."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t237-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 + 51x - 40 = 0$ and $x^3 + bx^2 + 23x - 20 = 0$ have two different common roots.",
            "lines": [
              {
                "step": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 + 51x - 40 = 0$ and $x^3 + bx^2 + 23x - 20 = 0$ have two different common roots.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Write $f(x) = x^3 + ax^2 + 51x - 40$ and $g(x) = x^3 + bx^2 + 23x - 20$; their two common roots $r$ and $s$ make $(x - r)(x - s)$ a common divisor of the two.",
                "reason": "Factored form: a polynomial with the different roots $r$ and $s$ has $(x - r)(x - s)$ as a factor."
              },
              {
                "step": "$f(x) - g(x) = (a - b)x^2 + 28x - 20$",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^3$ cancel."
              },
              {
                "step": "$-20f(x) + 40g(x) = x\\left(20x^2 + (-20a + 40b)x - 100\\right)$",
                "reason": "Multiplying out and collecting like terms: the constant terms cancel, and $x$ is taken out of what is left."
              },
              {
                "step": "So $(x - r)(x - s)$ divides both lines 3 and 4.",
                "reason": "Common divisor divides every combination: each line is a combination of $f(x)$ and $g(x)$."
              },
              {
                "step": "Neither $r$ nor $s$ is $0$, since $f(0) = -40$.",
                "reason": "A root satisfies its equation: a root of $f(x)$ makes it $0$, and $f(0)$ is not $0$."
              },
              {
                "step": "So $(x - r)(x - s)$ divides the bracket of line 4.",
                "reason": "Zero-product property: $x$ times the bracket is $0$ at $x = r$ and at $x = s$, while $x$ is not, so the bracket is $0$ there."
              },
              {
                "step": "Here $a \\ne b$, since otherwise line 3 is linear and has at most one root.",
                "reason": "At most n roots: a nonzero polynomial of degree at most $1$ has at most one root, and line 3 has the two roots $r$ and $s$."
              },
              {
                "step": "The bracket of line 4 is a number times the quadratic of line 3, and the constant terms give that number: $-100 = 5 \\cdot (-20)$.",
                "reason": "Factored form: two quadratics with the roots $r$ and $s$ are each their leading coefficient times $(x - r)(x - s)$."
              },
              {
                "step": "$20 = 5(a - b)$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^2$."
              },
              {
                "step": "$-20a + 40b = 5 \\cdot 28$",
                "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$."
              },
              {
                "step": "$a - b = 4$",
                "reason": "Dividing both sides by a nonzero number: line 10 divided by $5$."
              },
              {
                "step": "$b = 11$",
                "reason": "Elimination: $a = b + 4$ from line 12 is put into line 11."
              },
              {
                "step": "$a = 15$",
                "reason": "Substituting a value: line 13 in line 12."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 - 3x + 11 = 0$ and $x^3 + bx^2 - 67x - 77 = 0$ have two different common roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -9",
              "lines": [
                {
                  "step": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 - 3x + 11 = 0$ and $x^3 + bx^2 - 67x - 77 = 0$ have two different common roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $f(x) = x^3 + ax^2 - 3x + 11$ and $g(x) = x^3 + bx^2 - 67x - 77$; their two common roots $r$ and $s$ make $(x - r)(x - s)$ a common divisor of the two.",
                  "reason": "Factored form: a polynomial with the different roots $r$ and $s$ has $(x - r)(x - s)$ as a factor."
                },
                {
                  "step": "$f(x) - g(x) = (a - b)x^2 + 64x + 88$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^3$ cancel."
                },
                {
                  "step": "$-77f(x) - 11g(x) = x\\left(-88x^2 + (-77a - 11b)x + 968\\right)$",
                  "reason": "Multiplying out and collecting like terms: the constant terms cancel, and $x$ is taken out of what is left."
                },
                {
                  "step": "So $(x - r)(x - s)$ divides both lines 3 and 4.",
                  "reason": "Common divisor divides every combination: each line is a combination of $f(x)$ and $g(x)$."
                },
                {
                  "step": "Neither $r$ nor $s$ is $0$, since $f(0) = 11$.",
                  "reason": "A root satisfies its equation: a root of $f(x)$ makes it $0$, and $f(0)$ is not $0$."
                },
                {
                  "step": "So $(x - r)(x - s)$ divides the bracket of line 4.",
                  "reason": "Zero-product property: $x$ times the bracket is $0$ at $x = r$ and at $x = s$, while $x$ is not, so the bracket is $0$ there."
                },
                {
                  "step": "Here $a \\ne b$, since otherwise line 3 is linear and has at most one root.",
                  "reason": "At most n roots: a nonzero polynomial of degree at most $1$ has at most one root, and line 3 has the two roots $r$ and $s$."
                },
                {
                  "step": "The bracket of line 4 is a number times the quadratic of line 3, and the constant terms give that number: $968 = 11 \\cdot 88$.",
                  "reason": "Factored form: two quadratics with the roots $r$ and $s$ are each their leading coefficient times $(x - r)(x - s)$."
                },
                {
                  "step": "$-88 = 11(a - b)$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^2$."
                },
                {
                  "step": "$-77a - 11b = 11 \\cdot 64$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$."
                },
                {
                  "step": "$a - b = -8$",
                  "reason": "Dividing both sides by a nonzero number: line 10 divided by $11$."
                },
                {
                  "step": "$b = -1$",
                  "reason": "Elimination: $a = b - 8$ from line 12 is put into line 11."
                },
                {
                  "step": "$a = -9$",
                  "reason": "Substituting a value: line 13 in line 12."
                }
              ]
            },
            {
              "prompt": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 - 15x + 10 = 0$ and $x^3 + bx^2 - 20x + 20 = 0$ have two different common roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 4",
              "lines": [
                {
                  "step": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 - 15x + 10 = 0$ and $x^3 + bx^2 - 20x + 20 = 0$ have two different common roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $f(x) = x^3 + ax^2 - 15x + 10$ and $g(x) = x^3 + bx^2 - 20x + 20$; their two common roots $r$ and $s$ make $(x - r)(x - s)$ a common divisor of the two.",
                  "reason": "Factored form: a polynomial with the different roots $r$ and $s$ has $(x - r)(x - s)$ as a factor."
                },
                {
                  "step": "$f(x) - g(x) = (a - b)x^2 + 5x - 10$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^3$ cancel."
                },
                {
                  "step": "$20f(x) - 10g(x) = x\\left(10x^2 + (20a - 10b)x - 100\\right)$",
                  "reason": "Multiplying out and collecting like terms: the constant terms cancel, and $x$ is taken out of what is left."
                },
                {
                  "step": "So $(x - r)(x - s)$ divides both lines 3 and 4.",
                  "reason": "Common divisor divides every combination: each line is a combination of $f(x)$ and $g(x)$."
                },
                {
                  "step": "Neither $r$ nor $s$ is $0$, since $f(0) = 10$.",
                  "reason": "A root satisfies its equation: a root of $f(x)$ makes it $0$, and $f(0)$ is not $0$."
                },
                {
                  "step": "So $(x - r)(x - s)$ divides the bracket of line 4.",
                  "reason": "Zero-product property: $x$ times the bracket is $0$ at $x = r$ and at $x = s$, while $x$ is not, so the bracket is $0$ there."
                },
                {
                  "step": "Here $a \\ne b$, since otherwise line 3 is linear and has at most one root.",
                  "reason": "At most n roots: a nonzero polynomial of degree at most $1$ has at most one root, and line 3 has the two roots $r$ and $s$."
                },
                {
                  "step": "The bracket of line 4 is a number times the quadratic of line 3, and the constant terms give that number: $-100 = 10 \\cdot (-10)$.",
                  "reason": "Factored form: two quadratics with the roots $r$ and $s$ are each their leading coefficient times $(x - r)(x - s)$."
                },
                {
                  "step": "$10 = 10(a - b)$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^2$."
                },
                {
                  "step": "$20a - 10b = 10 \\cdot 5$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$."
                },
                {
                  "step": "$a - b = 1$",
                  "reason": "Dividing both sides by a nonzero number: line 10 divided by $10$."
                },
                {
                  "step": "$b = 3$",
                  "reason": "Elimination: $a = b + 1$ from line 12 is put into line 11."
                },
                {
                  "step": "$a = 4$",
                  "reason": "Substituting a value: line 13 in line 12."
                }
              ]
            },
            {
              "prompt": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 - 12x + 8 = 0$ and $x^3 + bx^2 - 20x + 24 = 0$ have two different common roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 3",
              "lines": [
                {
                  "step": "Find $a$, where for some number $b$ the equations $x^3 + ax^2 - 12x + 8 = 0$ and $x^3 + bx^2 - 20x + 24 = 0$ have two different common roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Write $f(x) = x^3 + ax^2 - 12x + 8$ and $g(x) = x^3 + bx^2 - 20x + 24$; their two common roots $r$ and $s$ make $(x - r)(x - s)$ a common divisor of the two.",
                  "reason": "Factored form: a polynomial with the different roots $r$ and $s$ has $(x - r)(x - s)$ as a factor."
                },
                {
                  "step": "$f(x) - g(x) = (a - b)x^2 + 8x - 16$",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $x^3$ cancel."
                },
                {
                  "step": "$24f(x) - 8g(x) = x\\left(16x^2 + (24a - 8b)x - 128\\right)$",
                  "reason": "Multiplying out and collecting like terms: the constant terms cancel, and $x$ is taken out of what is left."
                },
                {
                  "step": "So $(x - r)(x - s)$ divides both lines 3 and 4.",
                  "reason": "Common divisor divides every combination: each line is a combination of $f(x)$ and $g(x)$."
                },
                {
                  "step": "Neither $r$ nor $s$ is $0$, since $f(0) = 8$.",
                  "reason": "A root satisfies its equation: a root of $f(x)$ makes it $0$, and $f(0)$ is not $0$."
                },
                {
                  "step": "So $(x - r)(x - s)$ divides the bracket of line 4.",
                  "reason": "Zero-product property: $x$ times the bracket is $0$ at $x = r$ and at $x = s$, while $x$ is not, so the bracket is $0$ there."
                },
                {
                  "step": "Here $a \\ne b$, since otherwise line 3 is linear and has at most one root.",
                  "reason": "At most n roots: a nonzero polynomial of degree at most $1$ has at most one root, and line 3 has the two roots $r$ and $s$."
                },
                {
                  "step": "The bracket of line 4 is a number times the quadratic of line 3, and the constant terms give that number: $-128 = 8 \\cdot (-16)$.",
                  "reason": "Factored form: two quadratics with the roots $r$ and $s$ are each their leading coefficient times $(x - r)(x - s)$."
                },
                {
                  "step": "$16 = 8(a - b)$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x^2$."
                },
                {
                  "step": "$24a - 8b = 8 \\cdot 8$",
                  "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$."
                },
                {
                  "step": "$a - b = 2$",
                  "reason": "Dividing both sides by a nonzero number: line 10 divided by $8$."
                },
                {
                  "step": "$b = 1$",
                  "reason": "Elimination: $a = b + 2$ from line 12 is put into line 11."
                },
                {
                  "step": "$a = 3$",
                  "reason": "Substituting a value: line 13 in line 12."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t237-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which looks for every number $b$ for which $20x^2 + bx - 11 = 0$ and $16x^2 + bx + 133 = 0$ have a root in common, and write that line right.",
            "given": [
              "$20x^2 + bx - 11 = 0$ and $16x^2 + bx + 133 = 0$",
              "A common root $x$ makes both left sides $0$.",
              "$36x^2 - 144 = 0$",
              "$x^2 = 4$",
              "So $x = 2$ or $x = -2$.",
              "At $x = 2$, $b = -\\dfrac{69}{2}$; at $x = -2$, $b = \\dfrac{69}{2}$.",
              "So $b = -\\dfrac{69}{2}$ or $b = \\dfrac{69}{2}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which looks for every number $b$ for which $20x^2 + bx - 11 = 0$ and $16x^2 + bx + 133 = 0$ have a root in common, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes the second equation from the first, but the term $16x^2$ of the second equation keeps its sign.",
                "reason": "Subtracting a bracket changes every sign in it: each term of the second left side changes sign."
              },
              {
                "step": "Line 3 written right is $4x^2 - 144 = 0$.",
                "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $bx$ cancel."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which looks for every number $b$ for which $15x^2 + bx + 68 = 0$ and $-9x^2 + bx + 164 = 0$ have a root in common, and write that line right.",
              "given": [
                "$15x^2 + bx + 68 = 0$ and $-9x^2 + bx + 164 = 0$",
                "A common root $x$ makes both left sides $0$.",
                "$(15x^2 + bx + 68) - (-9x^2 + bx + 164) = 0$",
                "$6x^2 - 96 = 0$",
                "$x^2 = 16$",
                "So $x = 4$ or $x = -4$.",
                "At $x = 4$, $b = -77$; at $x = -4$, $b = 77$.",
                "So $b = -77$ or $b = 77$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 24*x^2-96 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which looks for every number $b$ for which $15x^2 + bx + 68 = 0$ and $-9x^2 + bx + 164 = 0$ have a root in common, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes the second equation from the first, but the term $-9x^2$ of the second equation keeps its sign.",
                  "reason": "Subtracting a bracket changes every sign in it: each term of the second left side changes sign."
                },
                {
                  "step": "Line 4 written right is $24x^2 - 96 = 0$.",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $bx$ cancel."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which looks for every number $b$ for which $13x^2 + bx + 45 = 0$ and $-5x^2 + bx + 333 = 0$ have a root in common, and write that line right.",
              "given": [
                "$13x^2 + bx + 45 = 0$ and $-5x^2 + bx + 333 = 0$",
                "$8x^2 - 288 = 0$",
                "$x^2 = 36$",
                "So $x = 6$ or $x = -6$.",
                "At $x = 6$, $b = -\\dfrac{171}{2}$; at $x = -6$, $b = \\dfrac{171}{2}$.",
                "So $b = -\\dfrac{171}{2}$ or $b = \\dfrac{171}{2}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 18*x^2-288 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which looks for every number $b$ for which $13x^2 + bx + 45 = 0$ and $-5x^2 + bx + 333 = 0$ have a root in common, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes the second equation from the first, but the term $-5x^2$ of the second equation keeps its sign.",
                  "reason": "Subtracting a bracket changes every sign in it: each term of the second left side changes sign."
                },
                {
                  "step": "Line 2 written right is $18x^2 - 288 = 0$.",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $bx$ cancel."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which looks for every number $b$ for which $5x^2 + bx + 112 = 0$ and $3x^2 + bx + 184 = 0$ have a root in common, and write that line right.",
              "given": [
                "$5x^2 + bx + 112 = 0$ and $3x^2 + bx + 184 = 0$",
                "A common root $x$ makes both left sides $0$.",
                "$8x^2 - 72 = 0$",
                "$x^2 = 9$",
                "So $x = 3$ or $x = -3$.",
                "At $x = 3$, $b = -\\dfrac{157}{3}$; at $x = -3$, $b = \\dfrac{157}{3}$.",
                "So $b = -\\dfrac{157}{3}$ or $b = \\dfrac{157}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*x^2-72 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which looks for every number $b$ for which $5x^2 + bx + 112 = 0$ and $3x^2 + bx + 184 = 0$ have a root in common, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes the second equation from the first, but the term $3x^2$ of the second equation keeps its sign.",
                  "reason": "Subtracting a bracket changes every sign in it: each term of the second left side changes sign."
                },
                {
                  "step": "Line 3 written right is $2x^2 - 72 = 0$.",
                  "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms in $bx$ cancel."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, which looks for every number $b$ for which $4x^2 + bx + 11 = 0$ and $4x^2 - 8x + 6b + 59 = 0$ have a root in common, real or not, and write that line right.",
            "given": [
              "$4x^2 + bx + 11 = 0$ and $4x^2 - 8x + 6b + 59 = 0$",
              "$(4x^2 + bx + 11) - (4x^2 - 8x + 6b + 59) = 0$",
              "$bx + 8x - 6b - 48 = 0$",
              "$(b + 8)(x - 6) = 0$",
              "Either $b = -8$ or $x = 6$.",
              "$4 \\cdot 6^2 - 6b + 11 = 0$",
              "$b = \\dfrac{155}{6}$",
              "So $b = -8$ or $b = \\dfrac{155}{6}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which looks for every number $b$ for which $4x^2 + bx + 11 = 0$ and $4x^2 - 8x + 6b + 59 = 0$ have a root in common, real or not, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 6 puts $x = 6$ into the first equation, but the term $bx$ loses its sign: it is written $-6b$.",
                "reason": "Substituting a value: $x$ is replaced by $6$, so $bx$ is $6 \\cdot b = 6b$."
              },
              {
                "step": "Line 6 written right is $4 \\cdot 6^2 + 6b + 11 = 0$.",
                "reason": "Substituting a value: $x = 6$ in the first equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which looks for every number $b$ for which $6x^2 + bx - 5 = 0$ and $6x^2 - 12x + 5b + 55 = 0$ have a root in common, real or not, and write that line right.",
              "given": [
                "$6x^2 + bx - 5 = 0$ and $6x^2 - 12x + 5b + 55 = 0$",
                "$bx + 12x - 5b - 60 = 0$",
                "$(b + 12)(x - 5) = 0$",
                "Either $b = -12$ or $x = 5$.",
                "$6 \\cdot 5^2 - 5b - 5 = 0$",
                "$b = 29$",
                "So $b = -12$ or $b = 29$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 6*5^2+5*b-5 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which looks for every number $b$ for which $6x^2 + bx - 5 = 0$ and $6x^2 - 12x + 5b + 55 = 0$ have a root in common, real or not, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 puts $x = 5$ into the first equation, but the term $bx$ loses its sign: it is written $-5b$.",
                  "reason": "Substituting a value: $x$ is replaced by $5$, so $bx$ is $5 \\cdot b = 5b$."
                },
                {
                  "step": "Line 5 written right is $6 \\cdot 5^2 + 5b - 5 = 0$.",
                  "reason": "Substituting a value: $x = 5$ in the first equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which looks for every number $b$ for which $7x^2 + bx + 23 = 0$ and $7x^2 + 2x + 4b + 15 = 0$ have a root in common, real or not, and write that line right.",
              "given": [
                "$7x^2 + bx + 23 = 0$ and $7x^2 + 2x + 4b + 15 = 0$",
                "$(7x^2 + bx + 23) - (7x^2 + 2x + 4b + 15) = 0$",
                "$bx - 2x - 4b + 8 = 0$",
                "$(b - 2)(x - 4) = 0$",
                "Either $b = 2$ or $x = 4$.",
                "At $b = 2$ the two equations are the same.",
                "$7 \\cdot 4^2 - 4b + 23 = 0$",
                "$b = \\dfrac{135}{4}$",
                "So $b = 2$ or $b = \\dfrac{135}{4}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 7: 7*4^2+4*b+23 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which looks for every number $b$ for which $7x^2 + bx + 23 = 0$ and $7x^2 + 2x + 4b + 15 = 0$ have a root in common, real or not, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 7 puts $x = 4$ into the first equation, but the term $bx$ loses its sign: it is written $-4b$.",
                  "reason": "Substituting a value: $x$ is replaced by $4$, so $bx$ is $4 \\cdot b = 4b$."
                },
                {
                  "step": "Line 7 written right is $7 \\cdot 4^2 + 4b + 23 = 0$.",
                  "reason": "Substituting a value: $x = 4$ in the first equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which looks for every number $b$ for which $5x^2 + bx - 23 = 0$ and $5x^2 - 9x - 3b - 50 = 0$ have a root in common, real or not, and write that line right.",
              "given": [
                "$5x^2 + bx - 23 = 0$ and $5x^2 - 9x - 3b - 50 = 0$",
                "$bx + 9x + 3b + 27 = 0$",
                "$(b + 9)(x + 3) = 0$",
                "Either $b = -9$ or $x = -3$.",
                "At $b = -9$ the two equations are the same.",
                "$5 \\cdot (-3)^2 + 3b - 23 = 0$",
                "$b = -\\dfrac{22}{3}$",
                "So $b = -9$ or $b = -\\dfrac{22}{3}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 6: 5*(-3)^2-3*b-23 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which looks for every number $b$ for which $5x^2 + bx - 23 = 0$ and $5x^2 - 9x - 3b - 50 = 0$ have a root in common, real or not, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 6 puts $x = -3$ into the first equation, but the term $bx$ loses its sign: it is written $3b$.",
                  "reason": "Substituting a value: $x$ is replaced by $(-3)$, so $bx$ is $(-3) \\cdot b = -3b$."
                },
                {
                  "step": "Line 6 written right is $5 \\cdot (-3)^2 - 3b - 23 = 0$.",
                  "reason": "Substituting a value: $x = -3$ in the first equation."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t237-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: A number $y$ is 7 times $2x^3 + 3x^2 - 7x + 4$, less 6 times $6x^3 - 5x^2 - 7x + 6$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: A number $y$ is 7 times $2x^3 + 3x^2 - 7x + 4$, less 6 times $6x^3 - 5x^2 - 7x + 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "7 times $2x^3 + 3x^2 - 7x + 4$ is $7(2x^3 + 3x^2 - 7x + 4)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
              },
              {
                "step": "6 times $6x^3 - 5x^2 - 7x + 6$ is $6(6x^3 - 5x^2 - 7x + 6)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
              },
              {
                "step": "Together they make $7(2x^3 + 3x^2 - 7x + 4) - 6(6x^3 - 5x^2 - 7x + 6)$.",
                "reason": "Writing a sentence as an equation: \"less\" means the second is taken away."
              },
              {
                "step": "$y = 7(2x^3 + 3x^2 - 7x + 4) - 6(6x^3 - 5x^2 - 7x + 6)$",
                "reason": "Writing a sentence as an equation: \"is\", \"equals\" and \"gives\" each stand where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: A number $y$ equals the sum of 6 times $5x^3 + 5x^2 - 7x + 3$ and 3 times $5x^3 + 6x^2 + 3x + 7$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6*(5*x^3+5*x^2-7*x+3)+3*(5*x^3+6*x^2+3*x+7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: A number $y$ equals the sum of 6 times $5x^3 + 5x^2 - 7x + 3$ and 3 times $5x^3 + 6x^2 + 3x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "6 times $5x^3 + 5x^2 - 7x + 3$ is $6(5x^3 + 5x^2 - 7x + 3)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
                },
                {
                  "step": "3 times $5x^3 + 6x^2 + 3x + 7$ is $3(5x^3 + 6x^2 + 3x + 7)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
                },
                {
                  "step": "Together they make $6(5x^3 + 5x^2 - 7x + 3) + 3(5x^3 + 6x^2 + 3x + 7)$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" means the second is added."
                },
                {
                  "step": "$y = 6(5x^3 + 5x^2 - 7x + 3) + 3(5x^3 + 6x^2 + 3x + 7)$",
                  "reason": "Writing a sentence as an equation: \"is\", \"equals\" and \"gives\" each stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Taking 2 times $7x^2 - 6x - 3$ from 3 times $2x^3 + 4x - 7$ gives a number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 3*(2*x^3+4*x-7)-2*(7*x^2-6*x-3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Taking 2 times $7x^2 - 6x - 3$ from 3 times $2x^3 + 4x - 7$ gives a number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "3 times $2x^3 + 4x - 7$ is $3(2x^3 + 4x - 7)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
                },
                {
                  "step": "2 times $7x^2 - 6x - 3$ is $2(7x^2 - 6x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
                },
                {
                  "step": "Together they make $3(2x^3 + 4x - 7) - 2(7x^2 - 6x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"taking from\" means the second is taken away."
                },
                {
                  "step": "$y = 3(2x^3 + 4x - 7) - 2(7x^2 - 6x - 3)$",
                  "reason": "Writing a sentence as an equation: \"is\", \"equals\" and \"gives\" each stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: A number $y$ equals the sum of 5 times $5x^2 + 7x - 2$ and 7 times $2x^3 - 2x^2 - 7x + 4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 5*(5*x^2+7*x-2)+7*(2*x^3-2*x^2-7*x+4)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: A number $y$ equals the sum of 5 times $5x^2 + 7x - 2$ and 7 times $2x^3 - 2x^2 - 7x + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "5 times $5x^2 + 7x - 2$ is $5(5x^2 + 7x - 2)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
                },
                {
                  "step": "7 times $2x^3 - 2x^2 - 7x + 4$ is $7(2x^3 - 2x^2 - 7x + 4)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the whole polynomial."
                },
                {
                  "step": "Together they make $5(5x^2 + 7x - 2) + 7(2x^3 - 2x^2 - 7x + 4)$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" means the second is added."
                },
                {
                  "step": "$y = 5(5x^2 + 7x - 2) + 7(2x^3 - 2x^2 - 7x + 4)$",
                  "reason": "Writing a sentence as an equation: \"is\", \"equals\" and \"gives\" each stand where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $5x^2 + 4x + 5$ and $6x^3 + 7x^2 - 7x - 4$ take equal values.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $5x^2 + 4x + 5$ and $6x^3 + 7x^2 - 7x - 4$ take equal values.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The two values at $x$ are $5x^2 + 4x + 5$ and $6x^3 + 7x^2 - 7x - 4$.",
                "reason": "Writing a sentence as an equation: \"at a number $x$\" means each polynomial is written in that one letter $x$."
              },
              {
                "step": "Equal values are joined by an equals sign.",
                "reason": "Writing a sentence as an equation: \"equal\" stands where the equals sign goes."
              },
              {
                "step": "$5x^2 + 4x + 5 = 6x^3 + 7x^2 - 7x - 4$",
                "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $4x^2 - 4x + 7$ and $6x^2 - 2x + 7$ take equal values.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "4*x^2-4*x+7 = 6*x^2-2*x+7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $4x^2 - 4x + 7$ and $6x^2 - 2x + 7$ take equal values.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two values at $x$ are $4x^2 - 4x + 7$ and $6x^2 - 2x + 7$.",
                  "reason": "Writing a sentence as an equation: \"at a number $x$\" means each polynomial is written in that one letter $x$."
                },
                {
                  "step": "Equal values are joined by an equals sign.",
                  "reason": "Writing a sentence as an equation: \"equal\" stands where the equals sign goes."
                },
                {
                  "step": "$4x^2 - 4x + 7 = 6x^2 - 2x + 7$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $7x^3 + 6x^2 + 4x + 7$ and $3x^2 - 2x - 4$ take equal values.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "7*x^3+6*x^2+4*x+7 = 3*x^2-2*x-4",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $7x^3 + 6x^2 + 4x + 7$ and $3x^2 - 2x - 4$ take equal values.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two values at $x$ are $7x^3 + 6x^2 + 4x + 7$ and $3x^2 - 2x - 4$.",
                  "reason": "Writing a sentence as an equation: \"at a number $x$\" means each polynomial is written in that one letter $x$."
                },
                {
                  "step": "Equal values are joined by an equals sign.",
                  "reason": "Writing a sentence as an equation: \"equal\" stands where the equals sign goes."
                },
                {
                  "step": "$7x^3 + 6x^2 + 4x + 7 = 3x^2 - 2x - 4$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $5x^3 - 6x + 7$ and $7x^2 - 2x - 6$ take equal values.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*x^3-6*x+7 = 7*x^2-2*x-6",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the first polynomial on the left: At a number $x$, the polynomials $5x^3 - 6x + 7$ and $7x^2 - 2x - 6$ take equal values.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The two values at $x$ are $5x^3 - 6x + 7$ and $7x^2 - 2x - 6$.",
                  "reason": "Writing a sentence as an equation: \"at a number $x$\" means each polynomial is written in that one letter $x$."
                },
                {
                  "step": "Equal values are joined by an equals sign.",
                  "reason": "Writing a sentence as an equation: \"equal\" stands where the equals sign goes."
                },
                {
                  "step": "$5x^3 - 6x + 7 = 7x^2 - 2x - 6$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $4x^3 - 2x^2 + 5$ and $7x^3 + 3x + 4$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $4x^3 - 2x^2 + 5$ and $7x^3 + 3x + 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The difference of the two is $(4x^3 - 2x^2 + 5) - (7x^3 + 3x + 4)$.",
                "reason": "Writing a sentence as an equation: \"the difference of\" means the second is taken from the first."
              },
              {
                "step": "A root makes it $0$.",
                "reason": "Root of an equation: a number that makes the polynomial $0$ is a root."
              },
              {
                "step": "$(4x^3 - 2x^2 + 5) - (7x^3 + 3x + 4) = 0$",
                "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $5x^3 + 6x^2 - 2x + 4$ and $3x^3 + 6x^2 + 6x + 5$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(5*x^3+6*x^2-2*x+4)-(3*x^3+6*x^2+6*x+5) = 0",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $5x^3 + 6x^2 - 2x + 4$ and $3x^3 + 6x^2 + 6x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of the two is $(5x^3 + 6x^2 - 2x + 4) - (3x^3 + 6x^2 + 6x + 5)$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" means the second is taken from the first."
                },
                {
                  "step": "A root makes it $0$.",
                  "reason": "Root of an equation: a number that makes the polynomial $0$ is a root."
                },
                {
                  "step": "$(5x^3 + 6x^2 - 2x + 4) - (3x^3 + 6x^2 + 6x + 5) = 0$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $5x^3 - 2x^2 + 4$ and $2x^3 + 7x^2 + 2x - 4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(5*x^3-2*x^2+4)-(2*x^3+7*x^2+2*x-4) = 0",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $5x^3 - 2x^2 + 4$ and $2x^3 + 7x^2 + 2x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of the two is $(5x^3 - 2x^2 + 4) - (2x^3 + 7x^2 + 2x - 4)$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" means the second is taken from the first."
                },
                {
                  "step": "A root makes it $0$.",
                  "reason": "Root of an equation: a number that makes the polynomial $0$ is a root."
                },
                {
                  "step": "$(5x^3 - 2x^2 + 4) - (2x^3 + 7x^2 + 2x - 4) = 0$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $4x^2 - 2x + 7$ and $2x^2 - 3x - 3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(4*x^2-2*x+7)-(2*x^2-3*x-3) = 0",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the difference on the left: A number $x$ is a root of the difference of $4x^2 - 2x + 7$ and $2x^2 - 3x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The difference of the two is $(4x^2 - 2x + 7) - (2x^2 - 3x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"the difference of\" means the second is taken from the first."
                },
                {
                  "step": "A root makes it $0$.",
                  "reason": "Root of an equation: a number that makes the polynomial $0$ is a root."
                },
                {
                  "step": "$(4x^2 - 2x + 7) - (2x^2 - 3x - 3) = 0$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $6x^3 + 2x^2 - 7x + 7$ and $5x^3 - 6x^2 + 6x + 3$ add to $0$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $6x^3 + 2x^2 - 7x + 7$ and $5x^3 - 6x^2 + 6x + 3$ add to $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the two is $(6x^3 + 2x^2 - 7x + 7) + (5x^3 - 6x^2 + 6x + 3)$.",
                "reason": "Writing a sentence as an equation: \"add\" means the two are added."
              },
              {
                "step": "The sum is $0$.",
                "reason": "Writing a sentence as an equation: \"to $0$\" gives the right side."
              },
              {
                "step": "$(6x^3 + 2x^2 - 7x + 7) + (5x^3 - 6x^2 + 6x + 3) = 0$",
                "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $2x^3 + 7x^2 + 7x + 7$ and $4x^3 - 6x^2 + 7x - 3$ add to $0$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*x^3+7*x^2+7*x+7)+(4*x^3-6*x^2+7*x-3) = 0",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $2x^3 + 7x^2 + 7x + 7$ and $4x^3 - 6x^2 + 7x - 3$ add to $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the two is $(2x^3 + 7x^2 + 7x + 7) + (4x^3 - 6x^2 + 7x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"add\" means the two are added."
                },
                {
                  "step": "The sum is $0$.",
                  "reason": "Writing a sentence as an equation: \"to $0$\" gives the right side."
                },
                {
                  "step": "$(2x^3 + 7x^2 + 7x + 7) + (4x^3 - 6x^2 + 7x - 3) = 0$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $2x^3 - 4x^2 - 5$ and $6x^3 - 5x^2 + 6x - 3$ add to $0$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(2*x^3-4*x^2-5)+(6*x^3-5*x^2+6*x-3) = 0",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $2x^3 - 4x^2 - 5$ and $6x^3 - 5x^2 + 6x - 3$ add to $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the two is $(2x^3 - 4x^2 - 5) + (6x^3 - 5x^2 + 6x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"add\" means the two are added."
                },
                {
                  "step": "The sum is $0$.",
                  "reason": "Writing a sentence as an equation: \"to $0$\" gives the right side."
                },
                {
                  "step": "$(2x^3 - 4x^2 - 5) + (6x^3 - 5x^2 + 6x - 3) = 0$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $5x^3 - 2x^2 + 3x - 2$ and $2x^3 - 6x^2 + 5x - 3$ add to $0$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(5*x^3-2*x^2+3*x-2)+(2*x^3-6*x^2+5*x-3) = 0",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$, with the sum on the left: At a number $x$, the polynomials $5x^3 - 2x^2 + 3x - 2$ and $2x^3 - 6x^2 + 5x - 3$ add to $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the two is $(5x^3 - 2x^2 + 3x - 2) + (2x^3 - 6x^2 + 5x - 3)$.",
                  "reason": "Writing a sentence as an equation: \"add\" means the two are added."
                },
                {
                  "step": "The sum is $0$.",
                  "reason": "Writing a sentence as an equation: \"to $0$\" gives the right side."
                },
                {
                  "step": "$(5x^3 - 2x^2 + 3x - 2) + (2x^3 - 6x^2 + 5x - 3) = 0$",
                  "reason": "Writing a sentence as an equation: the two sides are joined by an equals sign."
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
      "id": "t237-p1",
      "method": "direct proof",
      "statement": "If a polynomial $h(x)$ is a factor of both $f(x)$ and $g(x)$, then $h(x)$ is a factor of $a(x)f(x) + b(x)g(x)$ for every pair of polynomials $a(x)$ and $b(x)$.",
      "idea": "Write each of $f(x)$ and $g(x)$ as a polynomial times $h(x)$, then take $h(x)$ out of the combination.",
      "lines": [
        {
          "line": "There is a polynomial $q_1(x)$ with $f(x) = q_1(x)h(x)$.",
          "reason": "Common divisor of polynomials: $h(x)$ is a factor of $f(x)$."
        },
        {
          "line": "There is a polynomial $q_2(x)$ with $g(x) = q_2(x)h(x)$.",
          "reason": "Common divisor of polynomials: $h(x)$ is a factor of $g(x)$."
        },
        {
          "line": "So $a(x)f(x) + b(x)g(x) = a(x)q_1(x)h(x) + b(x)q_2(x)h(x)$.",
          "reason": "Substituting a value: lines 1 and 2 are put in."
        },
        {
          "line": "So $a(x)f(x) + b(x)g(x) = \\left(a(x)q_1(x) + b(x)q_2(x)\\right)h(x)$.",
          "reason": "Taking out a common factor: $h(x)$ is in both terms."
        },
        {
          "line": "The bracket $a(x)q_1(x) + b(x)q_2(x)$ is a polynomial.",
          "reason": "Multiplying out: products and sums of polynomials, multiplied out and collected, are polynomials."
        },
        {
          "line": "So $h(x)$ is a factor of $a(x)f(x) + b(x)g(x)$.",
          "reason": "Division statement: line 4 divides the combination by $h(x)$ with the quotient of line 5 and the remainder $0$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t237-s1",
      "method": "direct proof",
      "statement": "Prove that if the equations $x^2 + bx + c = 0$ and $x^2 + dx + e = 0$, with $b \\ne d$, have a common root, then that root is $\\dfrac{e - c}{b - d}$. Facts it may use: a root satisfies its equation, adding two equations, subtracting a bracket changes every sign in it, adding the same number to both sides, dividing both sides by a nonzero number.",
      "check": {
        "proof": [
          {
            "line": "Let $r$ be a common root; then $r^2 + br + c = 0$.",
            "reason": "A root satisfies its equation: $r$ is a root of the first."
          },
          {
            "line": "And $r^2 + dr + e = 0$.",
            "reason": "A root satisfies its equation: $r$ is a root of the second."
          },
          {
            "line": "So $(r^2 + br + c) - (r^2 + dr + e) = 0$.",
            "reason": "Adding two equations: line 2 is taken from line 1."
          },
          {
            "line": "So $(b - d)r + c - e = 0$.",
            "reason": "Subtracting a bracket changes every sign in it, and like terms are collected: the terms $r^2$ cancel."
          },
          {
            "line": "So $(b - d)r = e - c$.",
            "reason": "Adding the same number to both sides: $c - e$ is taken from each side."
          },
          {
            "line": "So $r = \\dfrac{e - c}{b - d}$.",
            "reason": "Dividing both sides by a nonzero number: $b - d$ is not $0$, since $b \\ne d$."
          }
        ]
      }
    },
    {
      "id": "t237-s2",
      "method": "direct proof",
      "statement": "Prove that if two different monic cubics $f(x)$ and $g(x)$ have two different common roots $r$ and $s$, then $f(x) - g(x) = c(x - r)(x - s)$ for a nonzero number $c$. Facts it may use: monic, degree, zero polynomial, a root satisfies its equation, at most n roots, factored form.",
      "check": {
        "proof": [
          {
            "line": "The terms $x^3$ of $f(x)$ and $g(x)$ cancel in $f(x) - g(x)$, so its degree is at most $2$.",
            "reason": "Monic: both cubics have the leading term $x^3$."
          },
          {
            "line": "The polynomial $f(x) - g(x)$ is not the zero polynomial.",
            "reason": "Zero polynomial: $f(x)$ and $g(x)$ are different, so some coefficient differs."
          },
          {
            "line": "At $r$ and $s$: $f(r) - g(r) = 0 - 0 = 0$ and $f(s) - g(s) = 0 - 0 = 0$.",
            "reason": "A root satisfies its equation: $r$ and $s$ are roots of both."
          },
          {
            "line": "So $f(x) - g(x)$ has the two different roots $r$ and $s$.",
            "reason": "Root of an equation: line 3."
          },
          {
            "line": "So the degree of $f(x) - g(x)$ is $2$.",
            "reason": "At most n roots: a nonzero polynomial of degree $0$ or $1$ has at most one root, and line 4 gives two."
          },
          {
            "line": "So $f(x) - g(x) = c(x - r)(x - s)$, with $c$ its leading coefficient, which is not $0$.",
            "reason": "Factored form: a quadratic with the roots $r$ and $s$ is its leading coefficient times $(x - r)(x - s)$."
          }
        ]
      }
    }
  ]
}
