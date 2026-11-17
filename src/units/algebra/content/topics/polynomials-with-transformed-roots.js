export default {
  "number": 236,
  "title": "Polynomials whose roots are changed",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "649-655"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 + 9x - 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+13*x^2+49*x+45",
    "solution": [
      "Find the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 + 9x - 9$.",
      "A number $x$ is a root of $q$ exactly when $x + 2$ is a root of $p$, so $q(x) = p(x + 2)$.",
      "$q(x) = (x + 2)^3 + 7(x + 2)^2 + 9(x + 2) - 9$",
      "$q(x) = x^3 + 6x^2 + 12x + 8 + 7x^2 + 28x + 28 + 9x + 18 - 9$",
      "$q(x) = x^3 + 13x^2 + 49x + 45$"
    ]
  },
  "ideas": [
    {
      "name": "Substituting for the root",
      "concrete": "The roots of $x^2 - 20x + 51$ are $3$ and $17$. Replacing $x$ by $x - 4$ gives $(x - 4)^2 - 20(x - 4) + 51 = x^2 - 28x + 147$, whose roots are $7$ and $21$: each root has gone up by $4$.",
      "general": "Let $p(x)$ be a polynomial of degree $n$ with roots $r_1, r_2, \\ldots, r_n$, and let $a \\ne 0$ and $b$ be numbers. Then $a^np\\left(\\dfrac{x - b}{a}\\right)$ is a polynomial of degree $n$ with the same leading coefficient as $p$, and its roots are $ar_1 + b, ar_2 + b, \\ldots, ar_n + b$. For $a = 1$ it is $p(x - b)$, whose roots are those of $p$ moved by $b$."
    },
    {
      "name": "Reversing the coefficients",
      "concrete": "The roots of $2x^2 - 17x + 8$ are $\\dfrac{1}{2}$ and $8$. Its coefficients in reverse order give $8x^2 - 17x + 2$, whose roots are $2$ and $\\dfrac{1}{8}$, the reciprocals.",
      "general": "Let $p(x) = a_nx^n + a_{n - 1}x^{n - 1} + \\cdots + a_1x + a_0$ have $a_n \\ne 0$ and $a_0 \\ne 0$ and roots $r_1, r_2, \\ldots, r_n$. Then $x^np\\left(\\dfrac{1}{x}\\right) = a_0x^n + a_1x^{n - 1} + \\cdots + a_{n - 1}x + a_n$, the same coefficients in reverse order, and its roots are $\\dfrac{1}{r_1}, \\dfrac{1}{r_2}, \\ldots, \\dfrac{1}{r_n}$."
    }
  ],
  "kinds": [
    {
      "id": "t236-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the monic cubic $q(x)$ whose roots are $r + 4$, $s + 4$ and $t + 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 - 6x + 7$.",
            "lines": [
              {
                "step": "Find the monic cubic $q(x)$ whose roots are $r + 4$, $s + 4$ and $t + 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 9x^2 - 6x + 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "A number $x$ is a root of $q$ exactly when $x - 4$ is a root of $p$, so $q(x) = p(x - 4)$.",
                "reason": "Substituting for the root: each root goes up by $4$, so $x$ is replaced by $x - 4$; the leading term stays $x^3$."
              },
              {
                "step": "$q(x) = (x - 4)^3 + 9(x - 4)^2 - 6(x - 4) + 7$",
                "reason": "Substituting a value: $x - 4$ goes in place of $x$, in brackets."
              },
              {
                "step": "$q(x) = x^3 - 12x^2 + 48x - 64 + 9x^2 - 72x + 144 - 6x + 24 + 7$",
                "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
              },
              {
                "step": "$q(x) = x^3 - 3x^2 - 30x + 111$",
                "reason": "Collecting like terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $r + 4$, $s + 4$ and $t + 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 5x^2 + 5x + 6$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-7*x^2+13*x+2",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $r + 4$, $s + 4$ and $t + 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 5x^2 + 5x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A number $x$ is a root of $q$ exactly when $x - 4$ is a root of $p$, so $q(x) = p(x - 4)$.",
                  "reason": "Substituting for the root: each root goes up by $4$, so $x$ is replaced by $x - 4$; the leading term stays $x^3$."
                },
                {
                  "step": "$q(x) = (x - 4)^3 + 5(x - 4)^2 + 5(x - 4) + 6$",
                  "reason": "Substituting a value: $x - 4$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = x^3 - 12x^2 + 48x - 64 + 5x^2 - 40x + 80 + 5x - 20 + 6$",
                  "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
                },
                {
                  "step": "$q(x) = x^3 - 7x^2 + 13x + 2$",
                  "reason": "Collecting like terms."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 3x + 8$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-15*x^2+51*x-42",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 3x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A number $x$ is a root of $q$ exactly when $x - 2$ is a root of $p$, so $q(x) = p(x - 2)$.",
                  "reason": "Substituting for the root: each root goes up by $2$, so $x$ is replaced by $x - 2$; the leading term stays $x^3$."
                },
                {
                  "step": "$q(x) = (x - 2)^3 - 9(x - 2)^2 + 3(x - 2) + 8$",
                  "reason": "Substituting a value: $x - 2$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = x^3 - 6x^2 + 12x - 8 - 9x^2 + 36x - 36 + 3x - 6 + 8$",
                  "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
                },
                {
                  "step": "$q(x) = x^3 - 15x^2 + 51x - 42$",
                  "reason": "Collecting like terms."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 7x + 6$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-15*x^2+56*x-54",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 7x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A number $x$ is a root of $q$ exactly when $x - 3$ is a root of $p$, so $q(x) = p(x - 3)$.",
                  "reason": "Substituting for the root: each root goes up by $3$, so $x$ is replaced by $x - 3$; the leading term stays $x^3$."
                },
                {
                  "step": "$q(x) = (x - 3)^3 - 6(x - 3)^2 - 7(x - 3) + 6$",
                  "reason": "Substituting a value: $x - 3$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = x^3 - 9x^2 + 27x - 27 - 6x^2 + 36x - 54 - 7x + 21 + 6$",
                  "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
                },
                {
                  "step": "$q(x) = x^3 - 15x^2 + 56x - 54$",
                  "reason": "Collecting like terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the monic cubic $q(x)$ whose roots are $2r - 3$, $2s - 3$ and $2t - 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 2x - 6$.",
            "lines": [
              {
                "step": "Find the monic cubic $q(x)$ whose roots are $2r - 3$, $2s - 3$ and $2t - 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 2x - 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "A number $x$ is a root of $q$ exactly when $\\dfrac{x + 3}{2}$ is a root of $p$, so $q(x) = 8p\\left(\\dfrac{x + 3}{2}\\right)$.",
                "reason": "Substituting for the root: each root is multiplied by $2$ and then $3$ is taken away, so $x$ is replaced by $\\dfrac{x + 3}{2}$; the factor $8$, which is $2^3$, keeps the leading term $x^3$."
              },
              {
                "step": "$q(x) = 8\\left(\\left(\\dfrac{x + 3}{2}\\right)^3 - 9\\left(\\dfrac{x + 3}{2}\\right)^2 + 2 \\cdot \\dfrac{x + 3}{2} - 6\\right)$",
                "reason": "Substituting a value: $\\dfrac{x + 3}{2}$ goes in place of $x$, in brackets."
              },
              {
                "step": "$q(x) = (x + 3)^3 - 18(x + 3)^2 + 8(x + 3) - 48$",
                "reason": "Power of a quotient and multiplying out: $8$ times each term clears its denominator, $2^3$, $2^2$ or $2$."
              },
              {
                "step": "$q(x) = x^3 + 9x^2 + 27x + 27 - 18x^2 - 108x - 162 + 8x + 24 - 48$",
                "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
              },
              {
                "step": "$q(x) = x^3 - 9x^2 - 73x - 159$",
                "reason": "Collecting like terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $2r - 5$, $2s - 5$ and $2t - 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 4x + 5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3+27*x^2+179*x+385",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $2r - 5$, $2s - 5$ and $2t - 5$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 - 4x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A number $x$ is a root of $q$ exactly when $\\dfrac{x + 5}{2}$ is a root of $p$, so $q(x) = 8p\\left(\\dfrac{x + 5}{2}\\right)$.",
                  "reason": "Substituting for the root: each root is multiplied by $2$ and then $5$ is taken away, so $x$ is replaced by $\\dfrac{x + 5}{2}$; the factor $8$, which is $2^3$, keeps the leading term $x^3$."
                },
                {
                  "step": "$q(x) = 8\\left(\\left(\\dfrac{x + 5}{2}\\right)^3 + 6\\left(\\dfrac{x + 5}{2}\\right)^2 - 4 \\cdot \\dfrac{x + 5}{2} + 5\\right)$",
                  "reason": "Substituting a value: $\\dfrac{x + 5}{2}$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = (x + 5)^3 + 12(x + 5)^2 - 16(x + 5) + 40$",
                  "reason": "Power of a quotient and multiplying out: $8$ times each term clears its denominator, $2^3$, $2^2$ or $2$."
                },
                {
                  "step": "$q(x) = x^3 + 15x^2 + 75x + 125 + 12x^2 + 120x + 300 - 16x - 80 + 40$",
                  "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
                },
                {
                  "step": "$q(x) = x^3 + 27x^2 + 179x + 385$",
                  "reason": "Collecting like terms."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $2r + 3$, $2s + 3$ and $2t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 7x + 4$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-17*x^2+103*x-151",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $2r + 3$, $2s + 3$ and $2t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 7x + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A number $x$ is a root of $q$ exactly when $\\dfrac{x - 3}{2}$ is a root of $p$, so $q(x) = 8p\\left(\\dfrac{x - 3}{2}\\right)$.",
                  "reason": "Substituting for the root: each root is multiplied by $2$ and then $3$ is added, so $x$ is replaced by $\\dfrac{x - 3}{2}$; the factor $8$, which is $2^3$, keeps the leading term $x^3$."
                },
                {
                  "step": "$q(x) = 8\\left(\\left(\\dfrac{x - 3}{2}\\right)^3 - 4\\left(\\dfrac{x - 3}{2}\\right)^2 + 7 \\cdot \\dfrac{x - 3}{2} + 4\\right)$",
                  "reason": "Substituting a value: $\\dfrac{x - 3}{2}$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = (x - 3)^3 - 8(x - 3)^2 + 28(x - 3) + 32$",
                  "reason": "Power of a quotient and multiplying out: $8$ times each term clears its denominator, $2^3$, $2^2$ or $2$."
                },
                {
                  "step": "$q(x) = x^3 - 9x^2 + 27x - 27 - 8x^2 + 48x - 72 + 28x - 84 + 32$",
                  "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
                },
                {
                  "step": "$q(x) = x^3 - 17x^2 + 103x - 151$",
                  "reason": "Collecting like terms."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $3r + 4$, $3s + 4$ and $3t + 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 8x - 2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-30*x^2+120*x-118",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $3r + 4$, $3s + 4$ and $3t + 4$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 8x - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "A number $x$ is a root of $q$ exactly when $\\dfrac{x - 4}{3}$ is a root of $p$, so $q(x) = 27p\\left(\\dfrac{x - 4}{3}\\right)$.",
                  "reason": "Substituting for the root: each root is multiplied by $3$ and then $4$ is added, so $x$ is replaced by $\\dfrac{x - 4}{3}$; the factor $27$, which is $3^3$, keeps the leading term $x^3$."
                },
                {
                  "step": "$q(x) = 27\\left(\\left(\\dfrac{x - 4}{3}\\right)^3 - 6\\left(\\dfrac{x - 4}{3}\\right)^2 - 8 \\cdot \\dfrac{x - 4}{3} - 2\\right)$",
                  "reason": "Substituting a value: $\\dfrac{x - 4}{3}$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = (x - 4)^3 - 18(x - 4)^2 - 72(x - 4) - 54$",
                  "reason": "Power of a quotient and multiplying out: $27$ times each term clears its denominator, $3^3$, $3^2$ or $3$."
                },
                {
                  "step": "$q(x) = x^3 - 12x^2 + 48x - 64 - 18x^2 + 144x - 288 - 72x + 288 - 54$",
                  "reason": "Binomial Theorem for the cube, square of a binomial for the square, then multiplying out each bracket."
                },
                {
                  "step": "$q(x) = x^3 - 30x^2 + 120x - 118$",
                  "reason": "Collecting like terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 + 9x^2 + 4x - 3$.",
            "lines": [
              {
                "step": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 + 9x^2 + 4x - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number $0$ is not a root of $p$, since $p(0) = -3$.",
                "reason": "Substituting a value: $0$ goes in place of $x$."
              },
              {
                "step": "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
                "reason": "Substituting for the root: each root is replaced by its reciprocal, so $x$ is replaced by $\\dfrac{1}{x}$; the factor $x^3$ clears the denominators."
              },
              {
                "step": "$x^3p\\left(\\dfrac{1}{x}\\right) = 5 + 9x + 4x^2 - 3x^3$",
                "reason": "Reversing the coefficients: $p\\left(\\dfrac{1}{x}\\right) = \\dfrac{5}{x^3} + \\dfrac{9}{x^2} + \\dfrac{4}{x} - 3$, and times $x^3$ the coefficients $(5, 9, 4, -3)$ come back in reverse order."
              },
              {
                "step": "$q(x) = x^3 - \\dfrac{4}{3}x^2 - 3x - \\dfrac{5}{3}$",
                "reason": "Factored form: dividing by the leading coefficient $-3$ keeps the same factors $x - \\dfrac{1}{r}$, $x - \\dfrac{1}{s}$, $x - \\dfrac{1}{t}$ and makes the cubic monic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 4x^2 - 3x - 5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3+3/5*x^2+4/5*x-1",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 4x^2 - 3x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $0$ is not a root of $p$, since $p(0) = -5$.",
                  "reason": "Substituting a value: $0$ goes in place of $x$."
                },
                {
                  "step": "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
                  "reason": "Substituting for the root: each root is replaced by its reciprocal, so $x$ is replaced by $\\dfrac{1}{x}$; the factor $x^3$ clears the denominators."
                },
                {
                  "step": "$x^3p\\left(\\dfrac{1}{x}\\right) = 5 - 4x - 3x^2 - 5x^3$",
                  "reason": "Reversing the coefficients: $p\\left(\\dfrac{1}{x}\\right) = \\dfrac{5}{x^3} - \\dfrac{4}{x^2} - \\dfrac{3}{x} - 5$, and times $x^3$ the coefficients $(5, -4, -3, -5)$ come back in reverse order."
                },
                {
                  "step": "$q(x) = x^3 + \\dfrac{3}{5}x^2 + \\dfrac{4}{5}x - 1$",
                  "reason": "Factored form: dividing by the leading coefficient $-5$ keeps the same factors $x - \\dfrac{1}{r}$, $x - \\dfrac{1}{s}$, $x - \\dfrac{1}{t}$ and makes the cubic monic."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 4x^3 + 6x^2 + 8x - 7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-8/7*x^2-6/7*x-4/7",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 4x^3 + 6x^2 + 8x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $0$ is not a root of $p$, since $p(0) = -7$.",
                  "reason": "Substituting a value: $0$ goes in place of $x$."
                },
                {
                  "step": "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
                  "reason": "Substituting for the root: each root is replaced by its reciprocal, so $x$ is replaced by $\\dfrac{1}{x}$; the factor $x^3$ clears the denominators."
                },
                {
                  "step": "$x^3p\\left(\\dfrac{1}{x}\\right) = 4 + 6x + 8x^2 - 7x^3$",
                  "reason": "Reversing the coefficients: $p\\left(\\dfrac{1}{x}\\right) = \\dfrac{4}{x^3} + \\dfrac{6}{x^2} + \\dfrac{8}{x} - 7$, and times $x^3$ the coefficients $(4, 6, 8, -7)$ come back in reverse order."
                },
                {
                  "step": "$q(x) = x^3 - \\dfrac{8}{7}x^2 - \\dfrac{6}{7}x - \\dfrac{4}{7}$",
                  "reason": "Factored form: dividing by the leading coefficient $-7$ keeps the same factors $x - \\dfrac{1}{r}$, $x - \\dfrac{1}{s}$, $x - \\dfrac{1}{t}$ and makes the cubic monic."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 3x^2 + 7x - 2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-7/2*x^2+3/2*x-5/2",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$, where $r$, $s$ and $t$ are the roots of $p(x) = 5x^3 - 3x^2 + 7x - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $0$ is not a root of $p$, since $p(0) = -2$.",
                  "reason": "Substituting a value: $0$ goes in place of $x$."
                },
                {
                  "step": "So a number $x$ is a root of $q$ exactly when $\\dfrac{1}{x}$ is a root of $p$, and the roots of $x^3p\\left(\\dfrac{1}{x}\\right)$ are $\\dfrac{1}{r}$, $\\dfrac{1}{s}$ and $\\dfrac{1}{t}$.",
                  "reason": "Substituting for the root: each root is replaced by its reciprocal, so $x$ is replaced by $\\dfrac{1}{x}$; the factor $x^3$ clears the denominators."
                },
                {
                  "step": "$x^3p\\left(\\dfrac{1}{x}\\right) = 5 - 3x + 7x^2 - 2x^3$",
                  "reason": "Reversing the coefficients: $p\\left(\\dfrac{1}{x}\\right) = \\dfrac{5}{x^3} - \\dfrac{3}{x^2} + \\dfrac{7}{x} - 2$, and times $x^3$ the coefficients $(5, -3, 7, -2)$ come back in reverse order."
                },
                {
                  "step": "$q(x) = x^3 - \\dfrac{7}{2}x^2 + \\dfrac{3}{2}x - \\dfrac{5}{2}$",
                  "reason": "Factored form: dividing by the leading coefficient $-2$ keeps the same factors $x - \\dfrac{1}{r}$, $x - \\dfrac{1}{s}$, $x - \\dfrac{1}{t}$ and makes the cubic monic."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t236-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 10x + 2$.",
            "lines": [
              {
                "step": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 10x + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$p(x) = (x^3 - 10x) + (-2x^2 + 2)$",
                "reason": "Even and odd parts: the odd powers of $x$ and the even powers are grouped apart."
              },
              {
                "step": "So at a root $x$ of $p$, $x^3 - 10x = 2x^2 - 2$.",
                "reason": "A root satisfies its equation: $p(x) = 0$, and the even part is taken from both sides, which changes the sign of each of its terms."
              },
              {
                "step": "$x^2(x^2 - 10)^2 = (2x^2 - 2)^2$",
                "reason": "Raising both sides to a power: both sides of line 3 are squared, and $(x^3 - 10x)^2 = x^2(x^2 - 10)^2$ by the power of a product."
              },
              {
                "step": "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 10)^2 - (2x - 2)^2$.",
                "reason": "Substituting for the root: each root is squared, so $x^2$ in line 4 is written $x$; the cubic $q$ is monic."
              },
              {
                "step": "$q(x) = x^3 - 20x^2 + 100x - 4x^2 + 8x - 4$",
                "reason": "Square of a binomial, then multiplying out."
              },
              {
                "step": "$q(x) = x^3 - 24x^2 + 108x - 4$",
                "reason": "Collecting like terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 - 22x - 9$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-93*x^2+610*x-81",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 7x^2 - 22x - 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$p(x) = (x^3 - 22x) + (7x^2 - 9)$",
                  "reason": "Even and odd parts: the odd powers of $x$ and the even powers are grouped apart."
                },
                {
                  "step": "So at a root $x$ of $p$, $x^3 - 22x = -7x^2 + 9$.",
                  "reason": "A root satisfies its equation: $p(x) = 0$, and the even part is taken from both sides, which changes the sign of each of its terms."
                },
                {
                  "step": "$x^2(x^2 - 22)^2 = (-7x^2 + 9)^2$",
                  "reason": "Raising both sides to a power: both sides of line 3 are squared, and $(x^3 - 22x)^2 = x^2(x^2 - 22)^2$ by the power of a product."
                },
                {
                  "step": "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 22)^2 - (-7x + 9)^2$.",
                  "reason": "Substituting for the root: each root is squared, so $x^2$ in line 4 is written $x$; the cubic $q$ is monic."
                },
                {
                  "step": "$q(x) = x^3 - 44x^2 + 484x - 49x^2 + 126x - 81$",
                  "reason": "Square of a binomial, then multiplying out."
                },
                {
                  "step": "$q(x) = x^3 - 93x^2 + 610x - 81$",
                  "reason": "Collecting like terms."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 2x - 3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-8*x^2-8*x-9",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 2x^2 - 2x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$p(x) = (x^3 - 2x) + (-2x^2 - 3)$",
                  "reason": "Even and odd parts: the odd powers of $x$ and the even powers are grouped apart."
                },
                {
                  "step": "So at a root $x$ of $p$, $x^3 - 2x = 2x^2 + 3$.",
                  "reason": "A root satisfies its equation: $p(x) = 0$, and the even part is taken from both sides, which changes the sign of each of its terms."
                },
                {
                  "step": "$x^2(x^2 - 2)^2 = (2x^2 + 3)^2$",
                  "reason": "Raising both sides to a power: both sides of line 3 are squared, and $(x^3 - 2x)^2 = x^2(x^2 - 2)^2$ by the power of a product."
                },
                {
                  "step": "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x - 2)^2 - (2x + 3)^2$.",
                  "reason": "Substituting for the root: each root is squared, so $x^2$ in line 4 is written $x$; the cubic $q$ is monic."
                },
                {
                  "step": "$q(x) = x^3 - 4x^2 + 4x - 4x^2 - 12x - 9$",
                  "reason": "Square of a binomial, then multiplying out."
                },
                {
                  "step": "$q(x) = x^3 - 8x^2 - 8x - 9$",
                  "reason": "Collecting like terms."
                }
              ]
            },
            {
              "prompt": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 + 5x + 5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^3-15*x^2+75*x-25",
              "lines": [
                {
                  "step": "Find the monic cubic $q(x)$ whose roots are $r^2$, $s^2$ and $t^2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 + 5x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$p(x) = (x^3 + 5x) + (-5x^2 + 5)$",
                  "reason": "Even and odd parts: the odd powers of $x$ and the even powers are grouped apart."
                },
                {
                  "step": "So at a root $x$ of $p$, $x^3 + 5x = 5x^2 - 5$.",
                  "reason": "A root satisfies its equation: $p(x) = 0$, and the even part is taken from both sides, which changes the sign of each of its terms."
                },
                {
                  "step": "$x^2(x^2 + 5)^2 = (5x^2 - 5)^2$",
                  "reason": "Raising both sides to a power: both sides of line 3 are squared, and $(x^3 + 5x)^2 = x^2(x^2 + 5)^2$ by the power of a product."
                },
                {
                  "step": "So $r^2$, $s^2$ and $t^2$ are roots of $q(x) = x(x + 5)^2 - (5x - 5)^2$.",
                  "reason": "Substituting for the root: each root is squared, so $x^2$ in line 4 is written $x$; the cubic $q$ is monic."
                },
                {
                  "step": "$q(x) = x^3 + 10x^2 + 25x - 25x^2 + 50x - 25$",
                  "reason": "Square of a binomial, then multiplying out."
                },
                {
                  "step": "$q(x) = x^3 - 15x^2 + 75x - 25$",
                  "reason": "Collecting like terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t236-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $(r + 2)(s + 2)(t + 2)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 6x + 2$.",
            "lines": [
              {
                "step": "Find $(r + 2)(s + 2)(t + 2)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 6x + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The numbers $r + 2$, $s + 2$ and $t + 2$ are the roots of the monic cubic $q(x) = p(x - 2)$.",
                "reason": "Substituting for the root: each root goes up by $2$, so $x$ is replaced by $x - 2$."
              },
              {
                "step": "$(r + 2)(s + 2)(t + 2) = -q(0)$",
                "reason": "Vieta's formulas: the product of the roots of a monic cubic is minus its constant term, and the constant term is $q(0)$."
              },
              {
                "step": "$q(0) = p(-2) = (-2)^3 + 6 \\cdot (-2)^2 + 6 \\cdot (-2) + 2 = 6$",
                "reason": "Substituting a value: $0$ goes in place of $x$ in $p(x - 2)$, then $-2$ in place of $x$ in $p$."
              },
              {
                "step": "$(r + 2)(s + 2)(t + 2) = -6$",
                "reason": "Lines 3 and 4."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $(r - 3)(s - 3)(t - 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 7x + 3$.",
              "form": "Answer as an integer.",
              "answer": "45",
              "lines": [
                {
                  "step": "Find $(r - 3)(s - 3)(t - 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 7x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $r - 3$, $s - 3$ and $t - 3$ are the roots of the monic cubic $q(x) = p(x + 3)$.",
                  "reason": "Substituting for the root: each root goes down by $3$, so $x$ is replaced by $x + 3$."
                },
                {
                  "step": "$(r - 3)(s - 3)(t - 3) = -q(0)$",
                  "reason": "Vieta's formulas: the product of the roots of a monic cubic is minus its constant term, and the constant term is $q(0)$."
                },
                {
                  "step": "$q(0) = p(3) = 3^3 - 6 \\cdot 3^2 - 7 \\cdot 3 + 3 = -45$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in $p(x + 3)$, then $3$ in place of $x$ in $p$."
                },
                {
                  "step": "$(r - 3)(s - 3)(t - 3) = 45$",
                  "reason": "Lines 3 and 4."
                }
              ]
            },
            {
              "prompt": "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 4x + 7$.",
              "form": "Answer as an integer.",
              "answer": "-183",
              "lines": [
                {
                  "step": "Find $(r - 4)(s - 4)(t - 4)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 - 4x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $r - 4$, $s - 4$ and $t - 4$ are the roots of the monic cubic $q(x) = p(x + 4)$.",
                  "reason": "Substituting for the root: each root goes down by $4$, so $x$ is replaced by $x + 4$."
                },
                {
                  "step": "$(r - 4)(s - 4)(t - 4) = -q(0)$",
                  "reason": "Vieta's formulas: the product of the roots of a monic cubic is minus its constant term, and the constant term is $q(0)$."
                },
                {
                  "step": "$q(0) = p(4) = 4^3 + 8 \\cdot 4^2 - 4 \\cdot 4 + 7 = 183$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in $p(x + 4)$, then $4$ in place of $x$ in $p$."
                },
                {
                  "step": "$(r - 4)(s - 4)(t - 4) = -183$",
                  "reason": "Lines 3 and 4."
                }
              ]
            },
            {
              "prompt": "Find $(r - 3)(s - 3)(t - 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 - 6x - 8$.",
              "form": "Answer as an integer.",
              "answer": "26",
              "lines": [
                {
                  "step": "Find $(r - 3)(s - 3)(t - 3)$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 - 6x - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $r - 3$, $s - 3$ and $t - 3$ are the roots of the monic cubic $q(x) = p(x + 3)$.",
                  "reason": "Substituting for the root: each root goes down by $3$, so $x$ is replaced by $x + 3$."
                },
                {
                  "step": "$(r - 3)(s - 3)(t - 3) = -q(0)$",
                  "reason": "Vieta's formulas: the product of the roots of a monic cubic is minus its constant term, and the constant term is $q(0)$."
                },
                {
                  "step": "$q(0) = p(3) = 3^3 - 3 \\cdot 3^2 - 6 \\cdot 3 - 8 = -26$",
                  "reason": "Substituting a value: $0$ goes in place of $x$ in $p(x + 3)$, then $3$ in place of $x$ in $p$."
                },
                {
                  "step": "$(r - 3)(s - 3)(t - 3) = 26$",
                  "reason": "Lines 3 and 4."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $\\dfrac{1}{r + 2} + \\dfrac{1}{s + 2} + \\dfrac{1}{t + 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 + 9x + 6$.",
            "lines": [
              {
                "step": "Find $\\dfrac{1}{r + 2} + \\dfrac{1}{s + 2} + \\dfrac{1}{t + 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 + 9x + 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The numbers $r + 2$, $s + 2$ and $t + 2$ are the roots of $q(x) = p(x - 2)$.",
                "reason": "Substituting for the root: each root goes up by $2$, so $x$ is replaced by $x - 2$."
              },
              {
                "step": "$q(x) = (x - 2)^3 - 3(x - 2)^2 + 9(x - 2) + 6$",
                "reason": "Substituting a value: $x - 2$ goes in place of $x$, in brackets."
              },
              {
                "step": "$q(x) = x^3 - 9x^2 + 33x - 32$",
                "reason": "Binomial Theorem, square of a binomial, multiplying out and collecting like terms."
              },
              {
                "step": "The numbers $\\dfrac{1}{r + 2}$, $\\dfrac{1}{s + 2}$ and $\\dfrac{1}{t + 2}$ are the roots of $-32x^3 + 33x^2 - 9x + 1$.",
                "reason": "Reversing the coefficients: the constant term of $q$ is $-32$, not $0$, so no root of $q$ is $0$."
              },
              {
                "step": "$\\dfrac{1}{r + 2} + \\dfrac{1}{s + 2} + \\dfrac{1}{t + 2} = \\dfrac{33}{32}$",
                "reason": "Vieta's formulas: the sum of the roots is minus the coefficient of $x^2$ divided by the leading coefficient, $-33$ over $-32$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 8x^2 - 6x - 3$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2/3",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 8x^2 - 6x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $r - 2$, $s - 2$ and $t - 2$ are the roots of $q(x) = p(x + 2)$.",
                  "reason": "Substituting for the root: each root goes down by $2$, so $x$ is replaced by $x + 2$."
                },
                {
                  "step": "$q(x) = (x + 2)^3 - 8(x + 2)^2 - 6(x + 2) - 3$",
                  "reason": "Substituting a value: $x + 2$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = x^3 - 2x^2 - 26x - 39$",
                  "reason": "Binomial Theorem, square of a binomial, multiplying out and collecting like terms."
                },
                {
                  "step": "The numbers $\\dfrac{1}{r - 2}$, $\\dfrac{1}{s - 2}$ and $\\dfrac{1}{t - 2}$ are the roots of $-39x^3 - 26x^2 - 2x + 1$.",
                  "reason": "Reversing the coefficients: the constant term of $q$ is $-39$, not $0$, so no root of $q$ is $0$."
                },
                {
                  "step": "$\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2} = -\\dfrac{2}{3}$",
                  "reason": "Vieta's formulas: the sum of the roots is minus the coefficient of $x^2$ divided by the leading coefficient, $26$ over $-39$."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 - 5x + 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-29/34",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 - 5x + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $r - 2$, $s - 2$ and $t - 2$ are the roots of $q(x) = p(x + 2)$.",
                  "reason": "Substituting for the root: each root goes down by $2$, so $x$ is replaced by $x + 2$."
                },
                {
                  "step": "$q(x) = (x + 2)^3 - 9(x + 2)^2 - 5(x + 2) + 4$",
                  "reason": "Substituting a value: $x + 2$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = x^3 - 3x^2 - 29x - 34$",
                  "reason": "Binomial Theorem, square of a binomial, multiplying out and collecting like terms."
                },
                {
                  "step": "The numbers $\\dfrac{1}{r - 2}$, $\\dfrac{1}{s - 2}$ and $\\dfrac{1}{t - 2}$ are the roots of $-34x^3 - 29x^2 - 3x + 1$.",
                  "reason": "Reversing the coefficients: the constant term of $q$ is $-34$, not $0$, so no root of $q$ is $0$."
                },
                {
                  "step": "$\\dfrac{1}{r - 2} + \\dfrac{1}{s - 2} + \\dfrac{1}{t - 2} = -\\dfrac{29}{34}$",
                  "reason": "Vieta's formulas: the sum of the roots is minus the coefficient of $x^2$ divided by the leading coefficient, $29$ over $-34$."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 8x^2 + 8x + 8$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/9",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4}$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 8x^2 + 8x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $r + 4$, $s + 4$ and $t + 4$ are the roots of $q(x) = p(x - 4)$.",
                  "reason": "Substituting for the root: each root goes up by $4$, so $x$ is replaced by $x - 4$."
                },
                {
                  "step": "$q(x) = (x - 4)^3 - 8(x - 4)^2 + 8(x - 4) + 8$",
                  "reason": "Substituting a value: $x - 4$ goes in place of $x$, in brackets."
                },
                {
                  "step": "$q(x) = x^3 - 20x^2 + 120x - 216$",
                  "reason": "Binomial Theorem, square of a binomial, multiplying out and collecting like terms."
                },
                {
                  "step": "The numbers $\\dfrac{1}{r + 4}$, $\\dfrac{1}{s + 4}$ and $\\dfrac{1}{t + 4}$ are the roots of $-216x^3 + 120x^2 - 20x + 1$.",
                  "reason": "Reversing the coefficients: the constant term of $q$ is $-216$, not $0$, so no root of $q$ is $0$."
                },
                {
                  "step": "$\\dfrac{1}{r + 4} + \\dfrac{1}{s + 4} + \\dfrac{1}{t + 4} = \\dfrac{5}{9}$",
                  "reason": "Vieta's formulas: the sum of the roots is minus the coefficient of $x^2$ divided by the leading coefficient, $-120$ over $-216$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t236-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 6$, $s - 6$ and $t - 6$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 2x - 6$, and write that line right.",
            "given": [
              "$p(x) = (x - r)(x - s)(x - t)$",
              "$q(x) = p(x - 6)$",
              "$q(x) = (x - 6)^3 + 6(x - 6)^2 + 2(x - 6) - 6$",
              "$q(x) = x^3 - 18x^2 + 108x - 216 + 6x^2 - 72x + 216 + 2x - 12 - 6$",
              "$q(x) = x^3 - 12x^2 + 38x - 18$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 6$, $s - 6$ and $t - 6$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 2x - 6$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 replaces $x$ by $x - 6$: the sign of $6$ is lost, and the roots of $p(x - 6)$ are $6$ more than those of $p$.",
                "reason": "Substituting for the root: for roots that go down by $6$, $x$ is replaced by $x + 6$."
              },
              {
                "step": "Line 2 written right is $q(x) = p(x + 6)$.",
                "reason": "Substituting for the root: roots that go down by $6$ come from replacing $x$ by $x + 6$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 8x - 9$, and write that line right.",
              "given": [
                "$q(x) = p(x + 3)$",
                "$q(x) = (x + 3)^3 - 6(x + 3)^2 - 8(x + 3) - 9$",
                "$q(x) = x^3 + 9x^2 + 27x + 27 - 6x^2 - 36x - 54 - 8x - 24 - 9$",
                "$q(x) = x^3 + 3x^2 - 17x - 60$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: q(x) = p(x-3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 6x^2 - 8x - 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 replaces $x$ by $x + 3$: the sign of $3$ is lost, and the roots of $p(x + 3)$ are $3$ less than those of $p$.",
                  "reason": "Substituting for the root: for roots that go up by $3$, $x$ is replaced by $x - 3$."
                },
                {
                  "step": "Line 1 written right is $q(x) = p(x - 3)$.",
                  "reason": "Substituting for the root: roots that go up by $3$ come from replacing $x$ by $x - 3$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 - 4x + 4$, and write that line right.",
              "given": [
                "$p(x) = (x - r)(x - s)(x - t)$",
                "$q(x) = p(x + 3)$",
                "$q(x) = (x + 3)^3 - 5(x + 3)^2 - 4(x + 3) + 4$",
                "$q(x) = x^3 + 9x^2 + 27x + 27 - 5x^2 - 30x - 45 - 4x - 12 + 4$",
                "$q(x) = x^3 + 4x^2 - 7x - 26$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: q(x) = p(x-3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 - 4x + 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 replaces $x$ by $x + 3$: the sign of $3$ is lost, and the roots of $p(x + 3)$ are $3$ less than those of $p$.",
                  "reason": "Substituting for the root: for roots that go up by $3$, $x$ is replaced by $x - 3$."
                },
                {
                  "step": "Line 2 written right is $q(x) = p(x - 3)$.",
                  "reason": "Substituting for the root: roots that go up by $3$ come from replacing $x$ by $x - 3$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 + 9x - 2$, and write that line right.",
              "given": [
                "$q(x) = p(x + 2)$",
                "$q(x) = (x + 2)^3 - 5(x + 2)^2 + 9(x + 2) - 2$",
                "$q(x) = x^3 + 6x^2 + 12x + 8 - 5x^2 - 20x - 20 + 9x + 18 - 2$",
                "$q(x) = x^3 + x^2 + x + 4$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: q(x) = p(x-2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 5x^2 + 9x - 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 replaces $x$ by $x + 2$: the sign of $2$ is lost, and the roots of $p(x + 2)$ are $2$ less than those of $p$.",
                  "reason": "Substituting for the root: for roots that go up by $2$, $x$ is replaced by $x - 2$."
                },
                {
                  "step": "Line 1 written right is $q(x) = p(x - 2)$.",
                  "reason": "Substituting for the root: roots that go up by $2$ come from replacing $x$ by $x - 2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 9x + 4$, and write that line right.",
            "given": [
              "$q(x) = p(x - 3)$",
              "$q(x) = (x - 3)^3 + 4(x - 3)^2 + 9(x - 3) + 4$",
              "$q(x) = x^3 - 9x^2 + 27x - 27 + 4x^2 - 24x + 36 + 9x - 27 + 4$",
              "$q(x) = x^3 - 5x^2 + 12x - 14$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 4x^2 + 9x + 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $+4(x - 3)^2$ where $p$ has $-4x^2$: a sign is lost.",
                "reason": "Substituting a value: each term of $p$ keeps its coefficient, so $-4x^2$ becomes $-4(x - 3)^2$."
              },
              {
                "step": "Line 2 written right is $q(x) = (x - 3)^3 - 4(x - 3)^2 + 9(x - 3) + 4$.",
                "reason": "Substituting a value: each term of $p$ keeps its coefficient and its sign, with $x - 3$ in place of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 6x - 4$, and write that line right.",
              "given": [
                "$p(x) = (x - r)(x - s)(x - t)$",
                "$q(x) = p(x - 2)$",
                "$q(x) = (x - 2)^3 - 8(x - 2)^2 + 6(x - 2) - 4$",
                "$q(x) = x^3 - 6x^2 + 12x - 8 - 8x^2 + 32x - 32 + 6x - 12 - 4$",
                "$q(x) = x^3 - 14x^2 + 50x - 56$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: q(x) = (x-2)^3+8*(x-2)^2+6*(x-2)-4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 2$, $s + 2$ and $t + 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 8x^2 + 6x - 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $-8(x - 2)^2$ where $p$ has $8x^2$: a sign is lost.",
                  "reason": "Substituting a value: each term of $p$ keeps its coefficient, so $8x^2$ becomes $8(x - 2)^2$."
                },
                {
                  "step": "Line 3 written right is $q(x) = (x - 2)^3 + 8(x - 2)^2 + 6(x - 2) - 4$.",
                  "reason": "Substituting a value: each term of $p$ keeps its coefficient and its sign, with $x - 2$ in place of $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 6x - 7$, and write that line right.",
              "given": [
                "$q(x) = p(x + 2)$",
                "$q(x) = (x + 2)^3 - 2(x + 2)^2 + 6(x + 2) - 7$",
                "$q(x) = x^3 + 6x^2 + 12x + 8 - 2x^2 - 8x - 8 + 6x + 12 - 7$",
                "$q(x) = x^3 + 4x^2 + 10x + 5$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: q(x) = (x+2)^3+2*(x+2)^2+6*(x+2)-7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 2x^2 + 6x - 7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $-2(x + 2)^2$ where $p$ has $2x^2$: a sign is lost.",
                  "reason": "Substituting a value: each term of $p$ keeps its coefficient, so $2x^2$ becomes $2(x + 2)^2$."
                },
                {
                  "step": "Line 2 written right is $q(x) = (x + 2)^3 + 2(x + 2)^2 + 6(x + 2) - 7$.",
                  "reason": "Substituting a value: each term of $p$ keeps its coefficient and its sign, with $x + 2$ in place of $x$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 - 3x - 5$, and write that line right.",
              "given": [
                "$p(x) = (x - r)(x - s)(x - t)$",
                "$q(x) = p(x - 3)$",
                "$q(x) = (x - 3)^3 - 3(x - 3)^2 + 3(x - 3) - 5$",
                "$q(x) = x^3 - 9x^2 + 27x - 27 - 3x^2 + 18x - 27 + 3x - 9 - 5$",
                "$q(x) = x^3 - 12x^2 + 48x - 68$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: q(x) = (x-3)^3-3*(x-3)^2-3*(x-3)-5",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 3x^2 - 3x - 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $+3(x - 3)$ where $p$ has $-3x$: a sign is lost.",
                  "reason": "Substituting a value: each term of $p$ keeps its coefficient, so $-3x$ becomes $-3(x - 3)$."
                },
                {
                  "step": "Line 3 written right is $q(x) = (x - 3)^3 - 3(x - 3)^2 - 3(x - 3) - 5$.",
                  "reason": "Substituting a value: each term of $p$ keeps its coefficient and its sign, with $x - 3$ in place of $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 + 6x - 8$, and write that line right.",
            "given": [
              "$p(x) = (x - r)(x - s)(x - t)$",
              "$q(x) = p(x - 3)$",
              "$q(x) = (x - 3)^3 - 7(x - 3)^2 + 6(x - 3) - 8$",
              "$q(x) = x^3 - 9x^2 + 27x - 27 - 7x^2 - 42x - 63 + 6x - 18 - 8$",
              "$q(x) = x^3 - 16x^2 - 9x - 116$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 7x^2 + 6x - 8$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 writes $-42x$ where $-7(x - 3)^2$ gives $42x$: a sign is lost.",
                "reason": "Multiplying out: $-7 \\cdot (-6)x = 42x$."
              },
              {
                "step": "Line 4 written right is $q(x) = x^3 - 9x^2 + 27x - 27 - 7x^2 + 42x - 63 + 6x - 18 - 8$.",
                "reason": "Multiplying out: $-7 \\cdot (-6)x = 42x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 5x + 4$, and write that line right.",
              "given": [
                "$q(x) = p(x + 2)$",
                "$q(x) = (x + 2)^3 + 6(x + 2)^2 + 5(x + 2) + 4$",
                "$q(x) = x^3 + 6x^2 + 12x + 8 + 6x^2 + 24x + 24 + 5x - 10 + 4$",
                "$q(x) = x^3 + 12x^2 + 41x + 26$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: q(x) = x^3+6*x^2+12*x+8+6*x^2+24*x+24+5*x+10+4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 2$, $s - 2$ and $t - 2$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 6x^2 + 5x + 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $-10$ where $5(x + 2)$ gives $10$: a sign is lost.",
                  "reason": "Multiplying out: $5 \\cdot 2 = 10$."
                },
                {
                  "step": "Line 3 written right is $q(x) = x^3 + 6x^2 + 12x + 8 + 6x^2 + 24x + 24 + 5x + 10 + 4$.",
                  "reason": "Multiplying out: $5 \\cdot 2 = 10$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 5x^2 - 5x - 9$, and write that line right.",
              "given": [
                "$q(x) = p(x - 3)$",
                "$q(x) = (x - 3)^3 + 5(x - 3)^2 - 5(x - 3) - 9$",
                "$q(x) = x^3 - 9x^2 + 27x - 27 - 5x^2 - 30x + 45 - 5x + 15 - 9$",
                "$q(x) = x^3 - 14x^2 - 8x + 24$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: q(x) = x^3-9*x^2+27*x-27+5*x^2-30*x+45-5*x+15-9",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r + 3$, $s + 3$ and $t + 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 + 5x^2 - 5x - 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $-5x^2$ where $5(x - 3)^2$ gives $5x^2$: a sign is lost.",
                  "reason": "Multiplying out: $5 \\cdot x^2 = 5x^2$."
                },
                {
                  "step": "Line 3 written right is $q(x) = x^3 - 9x^2 + 27x - 27 + 5x^2 - 30x + 45 - 5x + 15 - 9$.",
                  "reason": "Multiplying out: $5 \\cdot x^2 = 5x^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 3$, $s - 3$ and $t - 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 8x - 4$, and write that line right.",
              "given": [
                "$p(x) = (x - r)(x - s)(x - t)$",
                "$q(x) = p(x + 3)$",
                "$q(x) = (x + 3)^3 - 9(x + 3)^2 + 8(x + 3) - 4$",
                "$q(x) = x^3 + 9x^2 + 27x + 27 + 9x^2 - 54x - 81 + 8x + 24 - 4$",
                "$q(x) = x^3 + 18x^2 - 19x - 34$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: q(x) = x^3+9*x^2+27*x+27-9*x^2-54*x-81+8*x+24-4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the monic cubic $q(x)$ whose roots are $r - 3$, $s - 3$ and $t - 3$, where $r$, $s$ and $t$ are the roots of $p(x) = x^3 - 9x^2 + 8x - 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $9x^2$ where $-9(x + 3)^2$ gives $-9x^2$: a sign is lost.",
                  "reason": "Multiplying out: $-9 \\cdot x^2 = -9x^2$."
                },
                {
                  "step": "Line 4 written right is $q(x) = x^3 + 9x^2 + 27x + 27 - 9x^2 - 54x - 81 + 8x + 24 - 4$.",
                  "reason": "Multiplying out: $-9 \\cdot x^2 = -9x^2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t236-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 2 times the value of $p$ at the number 28 less than $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 2 times the value of $p$ at the number 28 less than $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number 28 less than $x$ is $x - 28$.",
                "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away from $x$."
              },
              {
                "step": "The value of $p$ there is $p(x - 28)$.",
                "reason": "Function notation: the input goes in the brackets."
              },
              {
                "step": "2 times that is $2p(x - 28)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the value."
              },
              {
                "step": "$q(x) = 2p(x - 28)$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 25 times the value of $p$ at the number 26 less than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 25*p(x-26)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 25 times the value of $p$ at the number 26 less than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 26 less than $x$ is $x - 26$.",
                  "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away from $x$."
                },
                {
                  "step": "The value of $p$ there is $p(x - 26)$.",
                  "reason": "Function notation: the input goes in the brackets."
                },
                {
                  "step": "25 times that is $25p(x - 26)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the value."
                },
                {
                  "step": "$q(x) = 25p(x - 26)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 11 times the value of $p$ at the number 11 less than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 11*p(x-11)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 11 times the value of $p$ at the number 11 less than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 11 less than $x$ is $x - 11$.",
                  "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away from $x$."
                },
                {
                  "step": "The value of $p$ there is $p(x - 11)$.",
                  "reason": "Function notation: the input goes in the brackets."
                },
                {
                  "step": "11 times that is $11p(x - 11)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the value."
                },
                {
                  "step": "$q(x) = 11p(x - 11)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 13 times the value of $p$ at the number 18 less than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 13*p(x-18)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 13 times the value of $p$ at the number 18 less than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number 18 less than $x$ is $x - 18$.",
                  "reason": "Writing a sentence as an equation: \"less than\" means the amount is taken away from $x$."
                },
                {
                  "step": "The value of $p$ there is $p(x - 18)$.",
                  "reason": "Function notation: the input goes in the brackets."
                },
                {
                  "step": "13 times that is $13p(x - 18)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the value."
                },
                {
                  "step": "$q(x) = 13p(x - 18)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 31 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 7 by $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 31 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 7 by $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Dividing 7 by $x$ gives $\\dfrac{7}{x}$, and the value of $p$ there is $p\\left(\\dfrac{7}{x}\\right)$.",
                "reason": "Function notation: the input goes in the brackets."
              },
              {
                "step": "31 times the third power of $x$ is $31x^3$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the power."
              },
              {
                "step": "Multiplied by the value of $p$, that is $31x^3p\\left(\\dfrac{7}{x}\\right)$.",
                "reason": "Writing a sentence as an equation: \"multiplied by\" means the two are multiplied."
              },
              {
                "step": "$q(x) = 31x^3p\\left(\\dfrac{7}{x}\\right)$",
                "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 30 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 23 by $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 30*x^3*p(23/x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 30 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 23 by $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Dividing 23 by $x$ gives $\\dfrac{23}{x}$, and the value of $p$ there is $p\\left(\\dfrac{23}{x}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets."
                },
                {
                  "step": "30 times the third power of $x$ is $30x^3$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the power."
                },
                {
                  "step": "Multiplied by the value of $p$, that is $30x^3p\\left(\\dfrac{23}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"multiplied by\" means the two are multiplied."
                },
                {
                  "step": "$q(x) = 30x^3p\\left(\\dfrac{23}{x}\\right)$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 21 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 27 by $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 21*x^3*p(27/x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 21 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 27 by $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Dividing 27 by $x$ gives $\\dfrac{27}{x}$, and the value of $p$ there is $p\\left(\\dfrac{27}{x}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets."
                },
                {
                  "step": "21 times the third power of $x$ is $21x^3$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the power."
                },
                {
                  "step": "Multiplied by the value of $p$, that is $21x^3p\\left(\\dfrac{27}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"multiplied by\" means the two are multiplied."
                },
                {
                  "step": "$q(x) = 21x^3p\\left(\\dfrac{27}{x}\\right)$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 28 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 26 by $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 28*x^3*p(26/x)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ equals 28 times the third power of $x$, multiplied by the value of $p$ at the number found by dividing 26 by $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Dividing 26 by $x$ gives $\\dfrac{26}{x}$, and the value of $p$ there is $p\\left(\\dfrac{26}{x}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets."
                },
                {
                  "step": "28 times the third power of $x$ is $28x^3$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies the power."
                },
                {
                  "step": "Multiplied by the value of $p$, that is $28x^3p\\left(\\dfrac{26}{x}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"multiplied by\" means the two are multiplied."
                },
                {
                  "step": "$q(x) = 28x^3p\\left(\\dfrac{26}{x}\\right)$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 18 times the value of $p$ at the number found by taking 11 from $x$ and dividing the result by 3.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 18 times the value of $p$ at the number found by taking 11 from $x$ and dividing the result by 3.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Taking 11 from $x$ gives $x - 11$.",
                "reason": "Writing a sentence as an equation: taking a number from $x$ means it is taken away from $x$."
              },
              {
                "step": "Dividing the result by 3 gives $\\dfrac{x - 11}{3}$.",
                "reason": "Writing a sentence as an equation: the whole result is divided."
              },
              {
                "step": "The value of $p$ there, 18 times, is $18p\\left(\\dfrac{x - 11}{3}\\right)$.",
                "reason": "Function notation: the input goes in the brackets, and \"times\" means the number multiplies the value."
              },
              {
                "step": "$q(x) = 18p\\left(\\dfrac{x - 11}{3}\\right)$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 6 times the value of $p$ at the number found by taking 23 from $x$ and dividing the result by 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 6*p((x-23)/6)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 6 times the value of $p$ at the number found by taking 23 from $x$ and dividing the result by 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Taking 23 from $x$ gives $x - 23$.",
                  "reason": "Writing a sentence as an equation: taking a number from $x$ means it is taken away from $x$."
                },
                {
                  "step": "Dividing the result by 6 gives $\\dfrac{x - 23}{6}$.",
                  "reason": "Writing a sentence as an equation: the whole result is divided."
                },
                {
                  "step": "The value of $p$ there, 6 times, is $6p\\left(\\dfrac{x - 23}{6}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets, and \"times\" means the number multiplies the value."
                },
                {
                  "step": "$q(x) = 6p\\left(\\dfrac{x - 23}{6}\\right)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 13 times the value of $p$ at the number found by taking 11 from $x$ and dividing the result by 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 13*p((x-11)/2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 13 times the value of $p$ at the number found by taking 11 from $x$ and dividing the result by 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Taking 11 from $x$ gives $x - 11$.",
                  "reason": "Writing a sentence as an equation: taking a number from $x$ means it is taken away from $x$."
                },
                {
                  "step": "Dividing the result by 2 gives $\\dfrac{x - 11}{2}$.",
                  "reason": "Writing a sentence as an equation: the whole result is divided."
                },
                {
                  "step": "The value of $p$ there, 13 times, is $13p\\left(\\dfrac{x - 11}{2}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets, and \"times\" means the number multiplies the value."
                },
                {
                  "step": "$q(x) = 13p\\left(\\dfrac{x - 11}{2}\\right)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 21 times the value of $p$ at the number found by taking 5 from $x$ and dividing the result by 7.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "q(x) = 21*p((x-5)/7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $q(x)$ alone on the left: The value of $q$ at $x$ is 21 times the value of $p$ at the number found by taking 5 from $x$ and dividing the result by 7.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Taking 5 from $x$ gives $x - 5$.",
                  "reason": "Writing a sentence as an equation: taking a number from $x$ means it is taken away from $x$."
                },
                {
                  "step": "Dividing the result by 7 gives $\\dfrac{x - 5}{7}$.",
                  "reason": "Writing a sentence as an equation: the whole result is divided."
                },
                {
                  "step": "The value of $p$ there, 21 times, is $21p\\left(\\dfrac{x - 5}{7}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets, and \"times\" means the number multiplies the value."
                },
                {
                  "step": "$q(x) = 21p\\left(\\dfrac{x - 5}{7}\\right)$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
