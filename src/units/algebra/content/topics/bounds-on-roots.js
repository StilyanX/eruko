export default {
  "number": 199,
  "title": "Bounds on the roots",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "212-215"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find every possible rational root of $f(x) = 2x^4 + 5x^3 + 8x^2 + 12x + 10$ that the signs of its coefficients do not rule out.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1, -2, -5, -10, -1/2, -5/2}",
    "solution": [
      "Find every possible rational root of $f(x) = 2x^4 + 5x^3 + 8x^2 + 12x + 10$ that the signs of its coefficients do not rule out.",
      "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $10$ and $m$ a divisor of $2$, so the possible rational roots are $1$, $-1$, $2$, $-2$, $5$, $-5$, $10$, $-10$, $\\dfrac{1}{2}$, $-\\dfrac{1}{2}$, $\\dfrac{5}{2}$ and $-\\dfrac{5}{2}$.",
      "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
      "The positive numbers of line 2 are left out, and the numbers left are $-1$, $-2$, $-5$, $-10$, $-\\dfrac{1}{2}$ and $-\\dfrac{5}{2}$."
    ]
  },
  "ideas": [
    {
      "name": "Same-sign coefficients",
      "concrete": "For $f(x) = 3x^3 + 2x^2 + 5x + 4$ and a positive number $x$, each of the terms $3x^3$, $2x^2$, $5x$ and $4$ is positive, so $f(x)$ is positive and never $0$: $f(x)$ has no positive root.",
      "general": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial with real coefficients, not all $0$. If every coefficient that is not $0$ is positive, or every coefficient that is not $0$ is negative, then $f(x)$ has no positive root. This is **Same-sign coefficients**. A coefficient $0$, as for a missing power of $x$, does not stop the rule."
    },
    {
      "name": "Alternating coefficients",
      "concrete": "For $f(x) = 2x^3 - 6x^2 + 3x - 4$ and a negative number $x$, the terms $2x^3$ and $3x$ are negative, since an odd power of a negative number is negative, and the terms $-6x^2$ and $-4$ are negative too, so $f(x)$ is negative and never $0$: $f(x)$ has no negative root.",
      "general": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial with real coefficients, not all $0$. If every coefficient of an odd power of $x$ is at least $0$ and every coefficient of an even power, the constant term $a_0$ among them, is at most $0$, or the other way round, then $f(x)$ has no negative root. This is **Alternating coefficients**. With no coefficient $0$, it says that the coefficients alternate in sign; with a coefficient $0$, it reads the powers of $x$, not the order of the coefficients."
    },
    {
      "name": "Upper bound test",
      "concrete": "Synthetic division of $f(x) = 2x^3 - 3x^2 - 6x - 5$ by $x - 3$ gives the bottom row $2$, $3$, $3$ and $4$, so $f(x) = (x - 3)(2x^2 + 3x + 3) + 4$. For a number $x$ greater than $3$, the factor $x - 3$ is positive, $2x^2 + 3x + 3$ is positive and $4$ is positive, so $f(x)$ is positive: no root of $f(x)$ is greater than $3$.",
      "general": "Let $f(x)$ be a polynomial with real coefficients and $a$ a positive number, and let $q(x)$ and $r$ be the quotient and the remainder of $f(x)$ divided by $x - a$, so that $f(x) = (x - a)q(x) + r$. If every coefficient of $q(x)$ is at least $0$ and $r$ is positive, then $f(x)$ has no root greater than $a$. This is the **Upper bound test**. Synthetic division with $a$ on the left gives the coefficients of $q(x)$ and $r$ as its bottom row. The test needs $a$ positive: for a negative $a$, a number greater than $a$ may be negative, and $q(x)$ may be negative there."
    }
  ],
  "kinds": [
    {
      "id": "t199-k1",
      "forms": [
        {
          "example": {
            "problem": "Find every possible rational root of $f(x) = 9x^3 + 2x^2 + 11x + 7$ that the signs of its coefficients do not rule out.",
            "lines": [
              {
                "step": "Find every possible rational root of $f(x) = 9x^3 + 2x^2 + 11x + 7$ that the signs of its coefficients do not rule out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $7$ and $m$ a divisor of $9$, so the possible rational roots are $1$, $-1$, $7$, $-7$, $\\dfrac{1}{3}$, $-\\dfrac{1}{3}$, $\\dfrac{7}{3}$, $-\\dfrac{7}{3}$, $\\dfrac{1}{9}$, $-\\dfrac{1}{9}$, $\\dfrac{7}{9}$ and $-\\dfrac{7}{9}$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
                "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
              },
              {
                "step": "The positive numbers of line 2 are left out, and the numbers left are $-1$, $-7$, $-\\dfrac{1}{3}$, $-\\dfrac{7}{3}$, $-\\dfrac{1}{9}$ and $-\\dfrac{7}{9}$.",
                "reason": "Answering the question asked: line 3 rules out every positive number of line 2, and nothing rules out the negative ones."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible rational root of $f(x) = 3x^3 + 9x^2 + 10x + 9$ that the signs of its coefficients do not rule out.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1, -3, -9, -1/3}",
              "lines": [
                {
                  "step": "Find every possible rational root of $f(x) = 3x^3 + 9x^2 + 10x + 9$ that the signs of its coefficients do not rule out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $9$ and $m$ a divisor of $3$, so the possible rational roots are $1$, $-1$, $3$, $-3$, $9$, $-9$, $\\dfrac{1}{3}$ and $-\\dfrac{1}{3}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
                  "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
                },
                {
                  "step": "The positive numbers of line 2 are left out, and the numbers left are $-1$, $-3$, $-9$ and $-\\dfrac{1}{3}$.",
                  "reason": "Answering the question asked: line 3 rules out every positive number of line 2, and nothing rules out the negative ones."
                }
              ]
            },
            {
              "prompt": "Find every possible rational root of $f(x) = -4x^3 - 4x^2 - 9x - 11$ that the signs of its coefficients do not rule out.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1, -11, -1/2, -11/2, -1/4, -11/4}",
              "lines": [
                {
                  "step": "Find every possible rational root of $f(x) = -4x^3 - 4x^2 - 9x - 11$ that the signs of its coefficients do not rule out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-11$ and $m$ a divisor of $-4$, so the possible rational roots are $1$, $-1$, $11$, $-11$, $\\dfrac{1}{2}$, $-\\dfrac{1}{2}$, $\\dfrac{11}{2}$, $-\\dfrac{11}{2}$, $\\dfrac{1}{4}$, $-\\dfrac{1}{4}$, $\\dfrac{11}{4}$ and $-\\dfrac{11}{4}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "Every coefficient of $f(x)$ is negative, so $f(x)$ has no positive root.",
                  "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
                },
                {
                  "step": "The positive numbers of line 2 are left out, and the numbers left are $-1$, $-11$, $-\\dfrac{1}{2}$, $-\\dfrac{11}{2}$, $-\\dfrac{1}{4}$ and $-\\dfrac{11}{4}$.",
                  "reason": "Answering the question asked: line 3 rules out every positive number of line 2, and nothing rules out the negative ones."
                }
              ]
            },
            {
              "prompt": "Find every possible rational root of $f(x) = 8x^3 + 8x + 2$ that the signs of its coefficients do not rule out.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1, -2, -1/2, -1/4, -1/8}",
              "lines": [
                {
                  "step": "Find every possible rational root of $f(x) = 8x^3 + 8x + 2$ that the signs of its coefficients do not rule out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $2$ and $m$ a divisor of $8$, so the possible rational roots are $1$, $-1$, $2$, $-2$, $\\dfrac{1}{2}$, $-\\dfrac{1}{2}$, $\\dfrac{1}{4}$, $-\\dfrac{1}{4}$, $\\dfrac{1}{8}$ and $-\\dfrac{1}{8}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "Every coefficient of $f(x)$ that is not $0$ is positive, and the coefficient of $x^2$ is $0$, so $f(x)$ has no positive root.",
                  "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
                },
                {
                  "step": "The positive numbers of line 2 are left out, and the numbers left are $-1$, $-2$, $-\\dfrac{1}{2}$, $-\\dfrac{1}{4}$ and $-\\dfrac{1}{8}$.",
                  "reason": "Answering the question asked: line 3 rules out every positive number of line 2, and nothing rules out the negative ones."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every possible rational root of $f(x) = -2x^4 + 2x^3 - 7x^2 + 7x - 6$ that the signs of its coefficients do not rule out.",
            "lines": [
              {
                "step": "Find every possible rational root of $f(x) = -2x^4 + 2x^3 - 7x^2 + 7x - 6$ that the signs of its coefficients do not rule out.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-6$ and $m$ a divisor of $-2$, so the possible rational roots are $1$, $-1$, $2$, $-2$, $3$, $-3$, $6$, $-6$, $\\dfrac{1}{2}$, $-\\dfrac{1}{2}$, $\\dfrac{3}{2}$ and $-\\dfrac{3}{2}$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "The coefficients of $x^3$ and $x$, the odd powers, are $2$ and $7$, all positive, and the coefficients of $x^4$ and $x^2$ and the constant term, the even powers, are $-2$, $-7$ and $-6$, all negative, so $f(x)$ has no negative root.",
                "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
              },
              {
                "step": "The negative numbers of line 2 are left out, and the numbers left are $1$, $2$, $3$, $6$, $\\dfrac{1}{2}$ and $\\dfrac{3}{2}$.",
                "reason": "Answering the question asked: line 3 rules out every negative number of line 2, and nothing rules out the positive ones."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every possible rational root of $f(x) = 3x^4 - 11x^3 + 10x^2 - 12x + 7$ that the signs of its coefficients do not rule out.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 7, 1/3, 7/3}",
              "lines": [
                {
                  "step": "Find every possible rational root of $f(x) = 3x^4 - 11x^3 + 10x^2 - 12x + 7$ that the signs of its coefficients do not rule out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $7$ and $m$ a divisor of $3$, so the possible rational roots are $1$, $-1$, $7$, $-7$, $\\dfrac{1}{3}$, $-\\dfrac{1}{3}$, $\\dfrac{7}{3}$ and $-\\dfrac{7}{3}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "The coefficients of $x^3$ and $x$, the odd powers, are $-11$ and $-12$, all negative, and the coefficients of $x^4$ and $x^2$ and the constant term, the even powers, are $3$, $10$ and $7$, all positive, so $f(x)$ has no negative root.",
                  "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
                },
                {
                  "step": "The negative numbers of line 2 are left out, and the numbers left are $1$, $7$, $\\dfrac{1}{3}$ and $\\dfrac{7}{3}$.",
                  "reason": "Answering the question asked: line 3 rules out every negative number of line 2, and nothing rules out the positive ones."
                }
              ]
            },
            {
              "prompt": "Find every possible rational root of $f(x) = 7x^3 - 3x^2 + 8x - 3$ that the signs of its coefficients do not rule out.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 3, 1/7, 3/7}",
              "lines": [
                {
                  "step": "Find every possible rational root of $f(x) = 7x^3 - 3x^2 + 8x - 3$ that the signs of its coefficients do not rule out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-3$ and $m$ a divisor of $7$, so the possible rational roots are $1$, $-1$, $3$, $-3$, $\\dfrac{1}{7}$, $-\\dfrac{1}{7}$, $\\dfrac{3}{7}$ and $-\\dfrac{3}{7}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "The coefficients of $x^3$ and $x$, the odd powers, are $7$ and $8$, all positive, and the coefficient of $x^2$ and the constant term, the even powers, are $-3$ and $-3$, all negative, so $f(x)$ has no negative root.",
                  "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
                },
                {
                  "step": "The negative numbers of line 2 are left out, and the numbers left are $1$, $3$, $\\dfrac{1}{7}$ and $\\dfrac{3}{7}$.",
                  "reason": "Answering the question asked: line 3 rules out every negative number of line 2, and nothing rules out the positive ones."
                }
              ]
            },
            {
              "prompt": "Find every possible rational root of $f(x) = 4x^3 - 12x^2 - 17$ that the signs of its coefficients do not rule out.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{1, 17, 1/2, 17/2, 1/4, 17/4}",
              "lines": [
                {
                  "step": "Find every possible rational root of $f(x) = 4x^3 - 12x^2 - 17$ that the signs of its coefficients do not rule out.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-17$ and $m$ a divisor of $4$, so the possible rational roots are $1$, $-1$, $17$, $-17$, $\\dfrac{1}{2}$, $-\\dfrac{1}{2}$, $\\dfrac{17}{2}$, $-\\dfrac{17}{2}$, $\\dfrac{1}{4}$, $-\\dfrac{1}{4}$, $\\dfrac{17}{4}$ and $-\\dfrac{17}{4}$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "The coefficients of $x^3$ and $x$, the odd powers, are $4$ and $0$, all at least $0$, and the coefficient of $x^2$ and the constant term, the even powers, are $-12$ and $-17$, all negative, so $f(x)$ has no negative root.",
                  "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
                },
                {
                  "step": "The negative numbers of line 2 are left out, and the numbers left are $1$, $17$, $\\dfrac{1}{2}$, $\\dfrac{17}{2}$, $\\dfrac{1}{4}$ and $\\dfrac{17}{4}$.",
                  "reason": "Answering the question asked: line 3 rules out every negative number of line 2, and nothing rules out the positive ones."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t199-k2",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: Every real root $x$ of $f(x)$ is at most $8$ and is not negative.",
            "lines": [
              {
                "step": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: Every real root $x$ of $f(x)$ is at most $8$ and is not negative.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The words \"is at most $8$\" give $x \\le 8$.",
                "reason": "Writing a sentence as an equation: the words \"at most\" stand where the sign $\\le$ goes."
              },
              {
                "step": "The words \"is not negative\" give $x \\ge 0$.",
                "reason": "Writing a sentence as an equation: a number that is not negative is $0$ or greater, so the sign $\\ge$ goes before $0$."
              },
              {
                "step": "Both hold at once: $x \\le 8$ and $x \\ge 0$",
                "reason": "Writing a sentence as an equation: the word \"and\" joins the two inequalities in the sentence's order, and both hold at once."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: The polynomial $f(x)$ has no positive root, and none of its real roots $x$ is less than $-6$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x <= 0 and x >= -6",
              "lines": [
                {
                  "step": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: The polynomial $f(x)$ has no positive root, and none of its real roots $x$ is less than $-6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"has no positive root\" give $x \\le 0$.",
                  "reason": "Writing a sentence as an equation: no positive real root leaves every real root at most $0$, so the sign $\\le$ goes before $0$."
                },
                {
                  "step": "The words \"none of its real roots $x$ is less than $-6$\" give $x \\ge -6$.",
                  "reason": "Writing a sentence as an equation: no real root less than $-6$ leaves every real root at least $-6$, so the sign $\\ge$ goes before $-6$."
                },
                {
                  "step": "Both hold at once: $x \\le 0$ and $x \\ge -6$",
                  "reason": "Writing a sentence as an equation: the word \"and\" joins the two inequalities in the sentence's order, and both hold at once."
                }
              ]
            },
            {
              "prompt": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: Every real root $x$ of $f(x)$ lies above $-9$ and below $3$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x > -9 and x < 3",
              "lines": [
                {
                  "step": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: Every real root $x$ of $f(x)$ lies above $-9$ and below $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"lies above $-9$\" give $x > -9$.",
                  "reason": "Writing a sentence as an equation: the word \"above\" stands where the sign $>$ goes."
                },
                {
                  "step": "The words \"below $3$\" give $x < 3$.",
                  "reason": "Writing a sentence as an equation: the word \"below\" stands where the sign $<$ goes."
                },
                {
                  "step": "Both hold at once: $x > -9$ and $x < 3$",
                  "reason": "Writing a sentence as an equation: the word \"and\" joins the two inequalities in the sentence's order, and both hold at once."
                }
              ]
            },
            {
              "prompt": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: No real root $x$ of $f(x)$ is greater than $13$, and none is less than $-14$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x <= 13 and x >= -14",
              "lines": [
                {
                  "step": "Write this sentence as two inequalities in $x$ joined by and, each with $x$ alone on the left, in the sentence's order: No real root $x$ of $f(x)$ is greater than $13$, and none is less than $-14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The words \"no real root $x$ of $f(x)$ is greater than $13$\" give $x \\le 13$.",
                  "reason": "Writing a sentence as an equation: no real root greater than $13$ leaves every real root at most $13$, so the sign $\\le$ goes before $13$."
                },
                {
                  "step": "The words \"none is less than $-14$\" give $x \\ge -14$.",
                  "reason": "Writing a sentence as an equation: no real root less than $-14$ leaves every real root at least $-14$, so the sign $\\ge$ goes before $-14$."
                },
                {
                  "step": "Both hold at once: $x \\le 13$ and $x \\ge -14$",
                  "reason": "Writing a sentence as an equation: the word \"and\" joins the two inequalities in the sentence's order, and both hold at once."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t199-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 2x^3 + 12x^2 - 83x - 6$ with synthetic division by $x - 3$, and write that line right.",
            "given": [
              "$3 \\cdot 2 + 12 = 6 + 12 = 18$",
              "$3 \\cdot 18 + (-83) = 54 + (-83) = 29$",
              "$3 \\cdot 29 + (-6) = 87 + (-6) = 81$",
              "$f(x) = (x - 3)(2x^2 + 18x + 29) + 81$",
              "Every coefficient of the quotient is at least $0$ and the remainder $81$ is positive, so $f(x)$ has no root greater than $3$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 2x^3 + 12x^2 - 83x - 6$ with synthetic division by $x - 3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 gives $54 + (-83)$ as $29$, but $54 + (-83) = -29$.",
                "reason": "A sign lost: $-83$ is negative and larger in size than $54$, so the sum is negative."
              },
              {
                "step": "The lines above line 2 are right, and each later line follows from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Synthetic division: each later bottom number is worked from the one before it, and the last two lines read the bottom row, so they carry the fault of line 2."
              },
              {
                "step": "Line 2 written right is $3 \\cdot 18 + (-83) = 54 + (-83) = -29$.",
                "reason": "Synthetic division: the number on the left times the bottom number before, plus the top number with its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 5x^3 + 8x^2 - 19x - 37$ with synthetic division by $x - 2$, and write that line right.",
              "given": [
                "$2 \\cdot 5 + 8 = 10 + 8 = 18$",
                "$2 \\cdot 18 + (-19) = 36 + (-19) = 17$",
                "$2 \\cdot 17 + 37 = 34 + 37 = 71$",
                "$f(x) = (x - 2)(5x^2 + 18x + 17) + 71$",
                "Every coefficient of the quotient is at least $0$ and the remainder $71$ is positive, so $f(x)$ has no root greater than $2$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*17+(-37) = 34+(-37) = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 5x^3 + 8x^2 - 19x - 37$ with synthetic division by $x - 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 adds $37$, but the top number above it is $-37$.",
                  "reason": "A sign lost: synthetic division adds the top number with its sign, and the minus sign of the top number is dropped."
                },
                {
                  "step": "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Synthetic division: each later bottom number is worked from the one before it, and the last two lines read the bottom row, so they carry the fault of line 3."
                },
                {
                  "step": "Line 3 written right is $2 \\cdot 17 + (-37) = 34 + (-37) = -3$.",
                  "reason": "Synthetic division: the number on the left times the bottom number before, plus the top number with its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 6x^3 - 43x^2 + 29x - 18$ with synthetic division by $x - 9$, and write that line right.",
              "given": [
                "$9 \\cdot 6 + 43 = 54 + 43 = 97$",
                "$9 \\cdot 97 + 29 = 873 + 29 = 902$",
                "$9 \\cdot 902 + (-18) = 8118 + (-18) = 8100$",
                "$f(x) = (x - 9)(6x^2 + 97x + 902) + 8100$",
                "Every coefficient of the quotient is at least $0$ and the remainder $8100$ is positive, so $f(x)$ has no root greater than $9$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 9*6+(-43) = 54+(-43) = 11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 6x^3 - 43x^2 + 29x - 18$ with synthetic division by $x - 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 adds $43$, but the top number above it is $-43$.",
                  "reason": "A sign lost: synthetic division adds the top number with its sign, and the minus sign of the top number is dropped."
                },
                {
                  "step": "Line 1 is the first line of the working, and each later line follows from it as it is written, so line 1 is the first wrong line.",
                  "reason": "Synthetic division: each later bottom number is worked from the one before it, and the last two lines read the bottom row, so they carry the fault of line 1."
                },
                {
                  "step": "Line 1 written right is $9 \\cdot 6 + (-43) = 54 + (-43) = 11$.",
                  "reason": "Synthetic division: the number on the left times the bottom number before, plus the top number with its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 3x^3 - 24x^2 - 77x - 19$ with synthetic division by $x - 10$, and write that line right.",
              "given": [
                "$10 \\cdot 3 + (-24) = 30 + (-24) = 6$",
                "$10 \\cdot 6 + 77 = 60 + 77 = 137$",
                "$10 \\cdot 137 + (-19) = 1370 + (-19) = 1351$",
                "$f(x) = (x - 10)(3x^2 + 6x + 137) + 1351$",
                "Every coefficient of the quotient is at least $0$ and the remainder $1351$ is positive, so $f(x)$ has no root greater than $10$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 10*6+(-77) = 60+(-77) = -17",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which applies the Upper bound test to $f(x) = 3x^3 - 24x^2 - 77x - 19$ with synthetic division by $x - 10$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 adds $77$, but the top number above it is $-77$.",
                  "reason": "A sign lost: synthetic division adds the top number with its sign, and the minus sign of the top number is dropped."
                },
                {
                  "step": "The lines above line 2 are right, and each later line follows from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Synthetic division: each later bottom number is worked from the one before it, and the last two lines read the bottom row, so they carry the fault of line 2."
                },
                {
                  "step": "Line 2 written right is $10 \\cdot 6 + (-77) = 60 + (-77) = -17$.",
                  "reason": "Synthetic division: the number on the left times the bottom number before, plus the top number with its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t199-k4",
      "forms": [
        {
          "example": {
            "problem": "Decide whether synthetic division of $f(x) = 5x^4 - 9x^3 - 32x^2 - 38x - 8$ by $x - 4$ shows, by the Upper bound test, that $f(x)$ has no root greater than $4$.",
            "lines": [
              {
                "step": "Decide whether synthetic division of $f(x) = 5x^4 - 9x^3 - 32x^2 - 38x - 8$ by $x - 4$ shows, by the Upper bound test, that $f(x)$ has no root greater than $4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} 4 & 5 & -9 & -32 & -38 & -8 \\\\ & & 20 & 44 & 48 & 40 \\\\ \\hline & 5 & 11 & 12 & 10 & 32 \\end{array}$",
                "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "The quotient is $5x^3 + 11x^2 + 12x + 10$ and the remainder is $32$.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
              },
              {
                "step": "The number $4$ is positive, every coefficient of the quotient is positive, and the remainder $32$ is positive, so $f(x)$ has no root greater than $4$, and the answer is Yes.",
                "reason": "Upper bound test: for a positive number $a$, a quotient by $x - a$ with no negative coefficient and a positive remainder show that $f(x)$ has no root greater than $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether synthetic division of $f(x) = 4x^4 - 17x^3 - 84x^2 + 51x - 20$ by $x - 7$ shows, by the Upper bound test, that $f(x)$ has no root greater than $7$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether synthetic division of $f(x) = 4x^4 - 17x^3 - 84x^2 + 51x - 20$ by $x - 7$ shows, by the Upper bound test, that $f(x)$ has no root greater than $7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 7 & 4 & -17 & -84 & 51 & -20 \\\\ & & 28 & 77 & -49 & 14 \\\\ \\hline & 4 & 11 & -7 & 2 & -6 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $4x^3 + 11x^2 - 7x + 2$ and the remainder is $-6$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
                },
                {
                  "step": "The quotient has the negative coefficient $-7$, so the Upper bound test does not apply, and the answer is No.",
                  "reason": "Upper bound test: the test needs every coefficient of the quotient to be at least $0$."
                }
              ]
            },
            {
              "prompt": "Decide whether synthetic division of $f(x) = 5x^3 - 33x^2 - 102x - 39$ by $x - 9$ shows, by the Upper bound test, that $f(x)$ has no root greater than $9$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether synthetic division of $f(x) = 5x^3 - 33x^2 - 102x - 39$ by $x - 9$ shows, by the Upper bound test, that $f(x)$ has no root greater than $9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 9 & 5 & -33 & -102 & -39 \\\\ & & 45 & 108 & 54 \\\\ \\hline & 5 & 12 & 6 & 15 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $5x^2 + 12x + 6$ and the remainder is $15$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
                },
                {
                  "step": "The number $9$ is positive, every coefficient of the quotient is positive, and the remainder $15$ is positive, so $f(x)$ has no root greater than $9$, and the answer is Yes.",
                  "reason": "Upper bound test: for a positive number $a$, a quotient by $x - a$ with no negative coefficient and a positive remainder show that $f(x)$ has no root greater than $a$."
                }
              ]
            },
            {
              "prompt": "Decide whether synthetic division of $f(x) = 3x^3 + 16x^2 + 29x + 54$ by $x + 2$ shows, by the Upper bound test, that $f(x)$ has no root greater than $-2$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether synthetic division of $f(x) = 3x^3 + 16x^2 + 29x + 54$ by $x + 2$ shows, by the Upper bound test, that $f(x)$ has no root greater than $-2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -2 & 3 & 16 & 29 & 54 \\\\ & & -6 & -20 & -18 \\\\ \\hline & 3 & 10 & 9 & 36 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $3x^2 + 10x + 9$ and the remainder is $36$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
                },
                {
                  "step": "The number $-2$ on the left is negative, so the Upper bound test does not apply, and the answer is No.",
                  "reason": "Upper bound test: the test needs a positive number on the left, since for a negative one a number greater than it may be negative, and the quotient may be negative there."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t199-k5",
      "forms": [
        {
          "example": {
            "problem": "Find every root of $f(x) = 12x^3 - 5x^2 - 44x + 28$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 12x^3 - 5x^2 - 44x + 28$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $28$ and $m$ a divisor of $12$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 4 & 12 & -5 & -44 & 28 \\\\ & & 48 & 172 & 512 \\\\ \\hline & 12 & 43 & 128 & 540 \\end{array}$",
                "reason": "Synthetic division: $4$ has numerator $4$, a divisor of $28$, and denominator $1$, a divisor of $12$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "No root of $f(x)$ is greater than $4$.",
                "reason": "Upper bound test: $4$ is positive, the bottom numbers before the last have no negative among them, and the remainder $540$ is positive."
              },
              {
                "step": "So $7$, $14$, $28$, $\\dfrac{14}{3}$ and $\\dfrac{28}{3}$, the numbers line 2 allows above $4$, are not roots and need no trial.",
                "reason": "Upper bound test: line 4 rules out every number greater than $4$."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -2 & 12 & -5 & -44 & 28 \\\\ & & -24 & 58 & -28 \\\\ \\hline & 12 & -29 & 14 & 0 \\end{array}$",
                "reason": "Synthetic division: $-2$ has numerator $-2$, a divisor of $28$, and denominator $1$, a divisor of $12$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = (x + 2)(12x^2 - 29x + 14)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 2$ is a factor, and the bottom numbers before it, $12$, $-29$ and $14$, are the coefficients of the quotient."
              },
              {
                "step": "$12x^2 - 29x + 14 = (4x - 7)(3x - 2)$",
                "reason": "Factoring a quadratic: $(4x - 7)(3x - 2)$ multiplies out to $12x^2 - 29x + 14$."
              },
              {
                "step": "$f(x) = (x + 2)(4x - 7)(3x - 2)$",
                "reason": "Substitution: line 8 takes the place of the quotient in line 7."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x + 2 = 0$, $4x - 7 = 0$ or $3x - 2 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "The set of roots is $\\left\\{-2, \\dfrac{7}{4}, \\dfrac{2}{3}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 5x^3 - 14x^2 - 167x + 140$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5, 4/5, 7}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 5x^3 - 14x^2 - 167x + 140$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $140$ and $m$ a divisor of $5$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 10 & 5 & -14 & -167 & 140 \\\\ & & 50 & 360 & 1930 \\\\ \\hline & 5 & 36 & 193 & 2070 \\end{array}$",
                  "reason": "Synthetic division: $10$ has numerator $10$, a divisor of $140$, and denominator $1$, a divisor of $5$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "No root of $f(x)$ is greater than $10$.",
                  "reason": "Upper bound test: $10$ is positive, the bottom numbers before the last have no negative among them, and the remainder $2070$ is positive."
                },
                {
                  "step": "So $14$, $20$, $28$, $35$, $70$ and $140$, the numbers line 2 allows above $10$, are not roots and need no trial.",
                  "reason": "Upper bound test: line 4 rules out every number greater than $10$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -5 & 5 & -14 & -167 & 140 \\\\ & & -25 & 195 & -140 \\\\ \\hline & 5 & -39 & 28 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-5$ has numerator $-5$, a divisor of $140$, and denominator $1$, a divisor of $5$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 5)(5x^2 - 39x + 28)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 5$ is a factor, and the bottom numbers before it, $5$, $-39$ and $28$, are the coefficients of the quotient."
                },
                {
                  "step": "$5x^2 - 39x + 28 = (5x - 4)(x - 7)$",
                  "reason": "Factoring a quadratic: $(5x - 4)(x - 7)$ multiplies out to $5x^2 - 39x + 28$."
                },
                {
                  "step": "$f(x) = (x + 5)(5x - 4)(x - 7)$",
                  "reason": "Substitution: line 8 takes the place of the quotient in line 7."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 5 = 0$, $5x - 4 = 0$ or $x - 7 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-5, \\dfrac{4}{5}, 7\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 10x^3 + 49x^2 - 139x + 56$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7, 8/5, 1/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 10x^3 + 49x^2 - 139x + 56$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $56$ and $m$ a divisor of $10$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 4 & 10 & 49 & -139 & 56 \\\\ & & 40 & 356 & 868 \\\\ \\hline & 10 & 89 & 217 & 924 \\end{array}$",
                  "reason": "Synthetic division: $4$ has numerator $4$, a divisor of $56$, and denominator $1$, a divisor of $10$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "No root of $f(x)$ is greater than $4$.",
                  "reason": "Upper bound test: $4$ is positive, the bottom numbers before the last have no negative among them, and the remainder $924$ is positive."
                },
                {
                  "step": "So $7$, $8$, $14$, $28$, $56$, $\\dfrac{28}{5}$ and $\\dfrac{56}{5}$, the numbers line 2 allows above $4$, are not roots and need no trial.",
                  "reason": "Upper bound test: line 4 rules out every number greater than $4$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -7 & 10 & 49 & -139 & 56 \\\\ & & -70 & 147 & -56 \\\\ \\hline & 10 & -21 & 8 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-7$ has numerator $-7$, a divisor of $56$, and denominator $1$, a divisor of $10$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 7)(10x^2 - 21x + 8)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 7$ is a factor, and the bottom numbers before it, $10$, $-21$ and $8$, are the coefficients of the quotient."
                },
                {
                  "step": "$10x^2 - 21x + 8 = (5x - 8)(2x - 1)$",
                  "reason": "Factoring a quadratic: $(5x - 8)(2x - 1)$ multiplies out to $10x^2 - 21x + 8$."
                },
                {
                  "step": "$f(x) = (x + 7)(5x - 8)(2x - 1)$",
                  "reason": "Substitution: line 8 takes the place of the quotient in line 7."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 7 = 0$, $5x - 8 = 0$ or $2x - 1 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-7, \\dfrac{8}{5}, \\dfrac{1}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 10x^3 + 11x^2 - 106x + 40$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, 2/5, 5/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 10x^3 + 11x^2 - 106x + 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $40$ and $m$ a divisor of $10$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 4 & 10 & 11 & -106 & 40 \\\\ & & 40 & 204 & 392 \\\\ \\hline & 10 & 51 & 98 & 432 \\end{array}$",
                  "reason": "Synthetic division: $4$ has numerator $4$, a divisor of $40$, and denominator $1$, a divisor of $10$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "No root of $f(x)$ is greater than $4$.",
                  "reason": "Upper bound test: $4$ is positive, the bottom numbers before the last have no negative among them, and the remainder $432$ is positive."
                },
                {
                  "step": "So $5$, $8$, $10$, $20$ and $40$, the numbers line 2 allows above $4$, are not roots and need no trial.",
                  "reason": "Upper bound test: line 4 rules out every number greater than $4$."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -4 & 10 & 11 & -106 & 40 \\\\ & & -40 & 116 & -40 \\\\ \\hline & 10 & -29 & 10 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-4$ has numerator $-4$, a divisor of $40$, and denominator $1$, a divisor of $10$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 4)(10x^2 - 29x + 10)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 4$ is a factor, and the bottom numbers before it, $10$, $-29$ and $10$, are the coefficients of the quotient."
                },
                {
                  "step": "$10x^2 - 29x + 10 = (5x - 2)(2x - 5)$",
                  "reason": "Factoring a quadratic: $(5x - 2)(2x - 5)$ multiplies out to $10x^2 - 29x + 10$."
                },
                {
                  "step": "$f(x) = (x + 4)(5x - 2)(2x - 5)$",
                  "reason": "Substitution: line 8 takes the place of the quotient in line 7."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 4 = 0$, $5x - 2 = 0$ or $2x - 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-4, \\dfrac{2}{5}, \\dfrac{5}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 10 is solved for $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every root of $f(x) = 12x^3 + 55x^2 + 29x + 4$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 12x^3 + 55x^2 + 29x + 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $4$ and $m$ a divisor of $12$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
                "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
              },
              {
                "step": "So the positive numbers that line 2 allows are not roots, and only the negative ones need a trial.",
                "reason": "Same-sign coefficients: line 3 rules out every positive number."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -4 & 12 & 55 & 29 & 4 \\\\ & & -48 & -28 & -4 \\\\ \\hline & 12 & 7 & 1 & 0 \\end{array}$",
                "reason": "Synthetic division: $-4$ has numerator $-4$, a divisor of $4$, and denominator $1$, a divisor of $12$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = (x + 4)(12x^2 + 7x + 1)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 4$ is a factor, and the bottom numbers before it, $12$, $7$ and $1$, are the coefficients of the quotient."
              },
              {
                "step": "$12x^2 + 7x + 1 = (4x + 1)(3x + 1)$",
                "reason": "Factoring a quadratic: $(4x + 1)(3x + 1)$ multiplies out to $12x^2 + 7x + 1$."
              },
              {
                "step": "$f(x) = (x + 4)(4x + 1)(3x + 1)$",
                "reason": "Substitution: line 7 takes the place of the quotient in line 6."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x + 4 = 0$, $4x + 1 = 0$ or $3x + 1 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "The set of roots is $\\left\\{-4, -\\dfrac{1}{4}, -\\dfrac{1}{3}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 2x^3 + 21x^2 + 64x + 60$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-6, -5/2, -2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 2x^3 + 21x^2 + 64x + 60$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $60$ and $m$ a divisor of $2$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
                  "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
                },
                {
                  "step": "So the positive numbers that line 2 allows are not roots, and only the negative ones need a trial.",
                  "reason": "Same-sign coefficients: line 3 rules out every positive number."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -6 & 2 & 21 & 64 & 60 \\\\ & & -12 & -54 & -60 \\\\ \\hline & 2 & 9 & 10 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-6$ has numerator $-6$, a divisor of $60$, and denominator $1$, a divisor of $2$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 6)(2x^2 + 9x + 10)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 6$ is a factor, and the bottom numbers before it, $2$, $9$ and $10$, are the coefficients of the quotient."
                },
                {
                  "step": "$2x^2 + 9x + 10 = (2x + 5)(x + 2)$",
                  "reason": "Factoring a quadratic: $(2x + 5)(x + 2)$ multiplies out to $2x^2 + 9x + 10$."
                },
                {
                  "step": "$f(x) = (x + 6)(2x + 5)(x + 2)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 6 = 0$, $2x + 5 = 0$ or $x + 2 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-6, -\\dfrac{5}{2}, -2\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 10x^3 + 89x^2 + 140x + 49$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-7, -7/5, -1/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 10x^3 + 89x^2 + 140x + 49$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $49$ and $m$ a divisor of $10$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
                  "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
                },
                {
                  "step": "So the positive numbers that line 2 allows are not roots, and only the negative ones need a trial.",
                  "reason": "Same-sign coefficients: line 3 rules out every positive number."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -7 & 10 & 89 & 140 & 49 \\\\ & & -70 & -133 & -49 \\\\ \\hline & 10 & 19 & 7 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-7$ has numerator $-7$, a divisor of $49$, and denominator $1$, a divisor of $10$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 7)(10x^2 + 19x + 7)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 7$ is a factor, and the bottom numbers before it, $10$, $19$ and $7$, are the coefficients of the quotient."
                },
                {
                  "step": "$10x^2 + 19x + 7 = (5x + 7)(2x + 1)$",
                  "reason": "Factoring a quadratic: $(5x + 7)(2x + 1)$ multiplies out to $10x^2 + 19x + 7$."
                },
                {
                  "step": "$f(x) = (x + 7)(5x + 7)(2x + 1)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 7 = 0$, $5x + 7 = 0$ or $2x + 1 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-7, -\\dfrac{7}{5}, -\\dfrac{1}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 6x^3 + 43x^2 + 99x + 72$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3, -8/3, -3/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 6x^3 + 43x^2 + 99x + 72$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $72$ and $m$ a divisor of $6$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "Every coefficient of $f(x)$ is positive, so $f(x)$ has no positive root.",
                  "reason": "Same-sign coefficients: a polynomial whose coefficients that are not $0$ all have one sign has no positive root."
                },
                {
                  "step": "So the positive numbers that line 2 allows are not roots, and only the negative ones need a trial.",
                  "reason": "Same-sign coefficients: line 3 rules out every positive number."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -3 & 6 & 43 & 99 & 72 \\\\ & & -18 & -75 & -72 \\\\ \\hline & 6 & 25 & 24 & 0 \\end{array}$",
                  "reason": "Synthetic division: $-3$ has numerator $-3$, a divisor of $72$, and denominator $1$, a divisor of $6$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x + 3)(6x^2 + 25x + 24)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x + 3$ is a factor, and the bottom numbers before it, $6$, $25$ and $24$, are the coefficients of the quotient."
                },
                {
                  "step": "$6x^2 + 25x + 24 = (3x + 8)(2x + 3)$",
                  "reason": "Factoring a quadratic: $(3x + 8)(2x + 3)$ multiplies out to $6x^2 + 25x + 24$."
                },
                {
                  "step": "$f(x) = (x + 3)(3x + 8)(2x + 3)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x + 3 = 0$, $3x + 8 = 0$ or $2x + 3 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{-3, -\\dfrac{8}{3}, -\\dfrac{3}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every root of $f(x) = 8x^3 - 62x^2 + 43x - 7$.",
            "lines": [
              {
                "step": "Find every root of $f(x) = 8x^3 - 62x^2 + 43x - 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-7$ and $m$ a divisor of $8$.",
                "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
              },
              {
                "step": "The coefficients of $x^3$ and $x$, $8$ and $43$, are positive, and the coefficient of $x^2$ and the constant term, $-62$ and $-7$, are negative, so $f(x)$ has no negative root.",
                "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
              },
              {
                "step": "So the negative numbers that line 2 allows are not roots, and only the positive ones need a trial.",
                "reason": "Alternating coefficients: line 3 rules out every negative number."
              },
              {
                "step": "$\\begin{array}{r|rrrr} 7 & 8 & -62 & 43 & -7 \\\\ & & 56 & -42 & 7 \\\\ \\hline & 8 & -6 & 1 & 0 \\end{array}$",
                "reason": "Synthetic division: $7$ has numerator $7$, a divisor of $-7$, and denominator $1$, a divisor of $8$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$f(x) = (x - 7)(8x^2 - 6x + 1)$",
                "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 7$ is a factor, and the bottom numbers before it, $8$, $-6$ and $1$, are the coefficients of the quotient."
              },
              {
                "step": "$8x^2 - 6x + 1 = (4x - 1)(2x - 1)$",
                "reason": "Factoring a quadratic: $(4x - 1)(2x - 1)$ multiplies out to $8x^2 - 6x + 1$."
              },
              {
                "step": "$f(x) = (x - 7)(4x - 1)(2x - 1)$",
                "reason": "Substitution: line 7 takes the place of the quotient in line 6."
              },
              {
                "step": "So $f(x) = 0$ exactly when $x - 7 = 0$, $4x - 1 = 0$ or $2x - 1 = 0$.",
                "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
              },
              {
                "step": "The set of roots is $\\left\\{7, \\dfrac{1}{4}, \\dfrac{1}{2}\\right\\}$.",
                "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every root of $f(x) = 12x^3 - 61x^2 + 55x - 12$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4, 3/4, 1/3}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 12x^3 - 61x^2 + 55x - 12$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-12$ and $m$ a divisor of $12$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "The coefficients of $x^3$ and $x$, $12$ and $55$, are positive, and the coefficient of $x^2$ and the constant term, $-61$ and $-12$, are negative, so $f(x)$ has no negative root.",
                  "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
                },
                {
                  "step": "So the negative numbers that line 2 allows are not roots, and only the positive ones need a trial.",
                  "reason": "Alternating coefficients: line 3 rules out every negative number."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 4 & 12 & -61 & 55 & -12 \\\\ & & 48 & -52 & 12 \\\\ \\hline & 12 & -13 & 3 & 0 \\end{array}$",
                  "reason": "Synthetic division: $4$ has numerator $4$, a divisor of $-12$, and denominator $1$, a divisor of $12$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 4)(12x^2 - 13x + 3)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 4$ is a factor, and the bottom numbers before it, $12$, $-13$ and $3$, are the coefficients of the quotient."
                },
                {
                  "step": "$12x^2 - 13x + 3 = (4x - 3)(3x - 1)$",
                  "reason": "Factoring a quadratic: $(4x - 3)(3x - 1)$ multiplies out to $12x^2 - 13x + 3$."
                },
                {
                  "step": "$f(x) = (x - 4)(4x - 3)(3x - 1)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - 4 = 0$, $4x - 3 = 0$ or $3x - 1 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{4, \\dfrac{3}{4}, \\dfrac{1}{3}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 10x^3 - 97x^2 + 244x - 45$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{5, 1/5, 9/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 10x^3 - 97x^2 + 244x - 45$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-45$ and $m$ a divisor of $10$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "The coefficients of $x^3$ and $x$, $10$ and $244$, are positive, and the coefficient of $x^2$ and the constant term, $-97$ and $-45$, are negative, so $f(x)$ has no negative root.",
                  "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
                },
                {
                  "step": "So the negative numbers that line 2 allows are not roots, and only the positive ones need a trial.",
                  "reason": "Alternating coefficients: line 3 rules out every negative number."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 5 & 10 & -97 & 244 & -45 \\\\ & & 50 & -235 & 45 \\\\ \\hline & 10 & -47 & 9 & 0 \\end{array}$",
                  "reason": "Synthetic division: $5$ has numerator $5$, a divisor of $-45$, and denominator $1$, a divisor of $10$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 5)(10x^2 - 47x + 9)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 5$ is a factor, and the bottom numbers before it, $10$, $-47$ and $9$, are the coefficients of the quotient."
                },
                {
                  "step": "$10x^2 - 47x + 9 = (5x - 1)(2x - 9)$",
                  "reason": "Factoring a quadratic: $(5x - 1)(2x - 9)$ multiplies out to $10x^2 - 47x + 9$."
                },
                {
                  "step": "$f(x) = (x - 5)(5x - 1)(2x - 9)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - 5 = 0$, $5x - 1 = 0$ or $2x - 9 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{5, \\dfrac{1}{5}, \\dfrac{9}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
                }
              ]
            },
            {
              "prompt": "Find every root of $f(x) = 6x^3 - 37x^2 + 75x - 50$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2, 5/3, 5/2}",
              "lines": [
                {
                  "step": "Find every root of $f(x) = 6x^3 - 37x^2 + 75x - 50$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In lowest terms, every rational root $\\dfrac{k}{m}$ of $f(x)$ has $k$ a divisor of $-50$ and $m$ a divisor of $6$.",
                  "reason": "Rational Root Theorem: the coefficients are integers, so the numerator of a rational root in lowest terms divides the constant term and its denominator divides the leading coefficient."
                },
                {
                  "step": "The coefficients of $x^3$ and $x$, $6$ and $75$, are positive, and the coefficient of $x^2$ and the constant term, $-37$ and $-50$, are negative, so $f(x)$ has no negative root.",
                  "reason": "Alternating coefficients: a polynomial whose coefficients of odd powers of $x$ are all at least $0$ and whose coefficients of even powers, the constant term among them, are all at most $0$, or the other way round, and whose coefficients are not all $0$, has no negative root."
                },
                {
                  "step": "So the negative numbers that line 2 allows are not roots, and only the positive ones need a trial.",
                  "reason": "Alternating coefficients: line 3 rules out every negative number."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 2 & 6 & -37 & 75 & -50 \\\\ & & 12 & -50 & 50 \\\\ \\hline & 6 & -25 & 25 & 0 \\end{array}$",
                  "reason": "Synthetic division: $2$ has numerator $2$, a divisor of $-50$, and denominator $1$, a divisor of $6$, so it is tried; the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$f(x) = (x - 2)(6x^2 - 25x + 25)$",
                  "reason": "Factor Theorem: the last bottom number, the remainder, is $0$, so $x - 2$ is a factor, and the bottom numbers before it, $6$, $-25$ and $25$, are the coefficients of the quotient."
                },
                {
                  "step": "$6x^2 - 25x + 25 = (3x - 5)(2x - 5)$",
                  "reason": "Factoring a quadratic: $(3x - 5)(2x - 5)$ multiplies out to $6x^2 - 25x + 25$."
                },
                {
                  "step": "$f(x) = (x - 2)(3x - 5)(2x - 5)$",
                  "reason": "Substitution: line 7 takes the place of the quotient in line 6."
                },
                {
                  "step": "So $f(x) = 0$ exactly when $x - 2 = 0$, $3x - 5 = 0$ or $2x - 5 = 0$.",
                  "reason": "Zero-product property: a product is $0$ exactly when one of its factors is $0$."
                },
                {
                  "step": "The set of roots is $\\left\\{2, \\dfrac{5}{3}, \\dfrac{5}{2}\\right\\}$.",
                  "reason": "Isolating the variable: each equation of line 9 is solved for $x$."
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
      "id": "t199-p1",
      "method": "proof by cases",
      "statement": "Let $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ be a polynomial with real coefficients, not all $0$. If every coefficient that is not $0$ is positive, or every coefficient that is not $0$ is negative, then $f(x)$ has no positive root.",
      "idea": "At a positive number every power of $x$ is positive, so each term has the sign of its coefficient or is $0$, and a sum of numbers of one sign, at least one of them not $0$, is not $0$.",
      "lines": [
        {
          "line": "For a positive number $c$, the value $f(c)$ is $a_nc^n + a_{n-1}c^{n-1} + \\dots + a_1c + a_0$.",
          "reason": "Function notation: $c$ goes where $x$ stands."
        },
        {
          "line": "Each power $c^j$, for $j$ from $0$ to $n$, is positive.",
          "reason": "A product is positive when its factors have the same sign and negative when they differ: $c^j$ is a product of $j$ factors $c$, each positive, and $c^0 = 1$."
        },
        {
          "line": "Each term $a_jc^j$ with $a_j = 0$ is $0$.",
          "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
        },
        {
          "line": "In the first case, each term $a_jc^j$ with $a_j \\ne 0$ is positive.",
          "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is positive, and $c^j$ is positive by line 2."
        },
        {
          "line": "In the first case, at least one term $a_jc^j$ is positive.",
          "reason": "The hypothesis: the coefficients are not all $0$, so some $a_j \\ne 0$, and line 4 makes its term positive."
        },
        {
          "line": "In the first case, the value $f(c)$ is positive.",
          "reason": "Adding two inequalities, from arithmetic: by lines 3 and 4 every term is positive or $0$, and by line 5 one of them is positive."
        },
        {
          "line": "In the second case, each term $a_jc^j$ with $a_j \\ne 0$ is negative.",
          "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is negative, and $c^j$ is positive by line 2."
        },
        {
          "line": "In the second case, at least one term $a_jc^j$ is negative.",
          "reason": "The hypothesis: the coefficients are not all $0$, so some $a_j \\ne 0$, and line 7 makes its term negative."
        },
        {
          "line": "In the second case, the value $f(c)$ is negative.",
          "reason": "Adding two inequalities, from arithmetic: by lines 3 and 7 every term is negative or $0$, and by line 8 one of them is negative."
        },
        {
          "line": "In both cases the value $f(c)$ is not $0$, so no positive number is a root of $f(x)$.",
          "reason": "Proof by cases: the hypothesis gives one of the two cases, and lines 6 and 9 cover both."
        }
      ]
    },
    {
      "id": "t199-p2",
      "method": "direct proof",
      "statement": "Let $f(x)$ be a polynomial with real coefficients and $a$ a positive number, and let $q(x) = b_mx^m + \\dots + b_1x + b_0$ and $r$ be the quotient and the remainder of $f(x)$ divided by $x - a$. If every coefficient $b_j$ is at least $0$ and $r > 0$, then $f(x)$ has no root greater than $a$.",
      "idea": "For a number greater than $a$, the division statement $f(x) = (x - a)q(x) + r$ writes $f(x)$ as a positive number times a number at least $0$, plus a positive number.",
      "lines": [
        {
          "line": "For a number $c$ greater than $a$, the value $f(c)$ is $(c - a)q(c) + r$.",
          "reason": "Division statement: $f(x) = (x - a)q(x) + r$ holds at every number, so it holds at $c$."
        },
        {
          "line": "$c - a > 0$",
          "reason": "Adding the same number, from arithmetic: $a$ is taken from both sides of $c > a$."
        },
        {
          "line": "$c > 0$",
          "reason": "Transitivity, from arithmetic: $c > a$ and $a > 0$."
        },
        {
          "line": "Each power $c^j$ is positive.",
          "reason": "A product is positive when its factors have the same sign and negative when they differ: $c^j$ is a product of $j$ factors $c$, each positive by line 3, and $c^0 = 1$."
        },
        {
          "line": "Each term $b_jc^j$ of $q(c)$ is at least $0$.",
          "reason": "Multiplying by a positive number, from arithmetic: $b_j \\ge 0$ is multiplied by the positive number $c^j$ of line 4."
        },
        {
          "line": "$q(c) \\ge 0$",
          "reason": "Adding two inequalities, from arithmetic: by line 5 each term of $q(c)$ is at least $0$, so their sum is at least $0$."
        },
        {
          "line": "$(c - a)q(c) \\ge 0$",
          "reason": "Multiplying by a positive number, from arithmetic: $q(c) \\ge 0$ is multiplied by the positive number $c - a$ of line 2."
        },
        {
          "line": "$(c - a)q(c) + r > 0$",
          "reason": "Adding two inequalities, from arithmetic: line 7 and $r > 0$ are added."
        },
        {
          "line": "So the value $f(c)$ is positive and not $0$ at every number $c$ greater than $a$, and $f(x)$ has no root greater than $a$.",
          "reason": "Substitution: by line 1, $f(c)$ takes the place of $(c - a)q(c) + r$ in line 8, and a positive number is not $0$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t199-s1",
      "method": "direct proof",
      "statement": "Prove that if $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ is a polynomial with real coefficients, not all $0$, in which every coefficient of an odd power of $x$ is at least $0$ and every coefficient of an even power of $x$, the constant term $a_0$ among them, is at most $0$, then $f(x)$ has no negative root. Facts it may use: function notation, the sign of a power of a negative number, the assumptions on multiplication, a product is positive when its factors have the same sign and negative when they differ, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "For a negative number $c$, the value $f(c)$ is $a_nc^n + a_{n-1}c^{n-1} + \\dots + a_1c + a_0$.",
            "reason": "Function notation: $c$ goes where $x$ stands."
          },
          {
            "line": "Each odd power $c^j$ is negative.",
            "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
          },
          {
            "line": "Each even power $c^j$ is positive.",
            "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $c^0 = 1$."
          },
          {
            "line": "Each term $a_jc^j$ with $a_j = 0$ is $0$.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "Each term $a_jc^j$ with $j$ odd and $a_j \\ne 0$ is negative.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is positive, and $c^j$ is negative by line 2."
          },
          {
            "line": "Each term $a_jc^j$ with $j$ even and $a_j \\ne 0$ is negative.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is negative, and $c^j$ is positive by line 3."
          },
          {
            "line": "At least one term $a_jc^j$ is negative.",
            "reason": "The hypothesis: the coefficients are not all $0$, so some $a_j \\ne 0$, and lines 5 and 6 make its term negative."
          },
          {
            "line": "The value $f(c)$ is negative.",
            "reason": "Adding two inequalities, from arithmetic: by lines 4, 5 and 6 every term is negative or $0$, and by line 7 one of them is negative."
          },
          {
            "line": "So the value $f(c)$ is never $0$ for a negative number $c$, and $f(x)$ has no negative root.",
            "reason": "Direct proof: line 8 holds for every negative number $c$, and a negative number is not $0$."
          }
        ]
      }
    },
    {
      "id": "t199-s2",
      "method": "proof by cases",
      "statement": "Prove that if $f(x) = a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0$ is a polynomial with real coefficients, not all $0$, in which every coefficient of an odd power of $x$ is at least $0$ and every coefficient of an even power, the constant term $a_0$ among them, is at most $0$, or every coefficient of an odd power is at most $0$ and every coefficient of an even power is at least $0$, then $f(x)$ has no negative root. Facts it may use: function notation, the sign of a power of a negative number, the assumptions on multiplication, a product is positive when its factors have the same sign and negative when they differ, adding two inequalities.",
      "check": {
        "proof": [
          {
            "line": "For a negative number $c$, the value $f(c)$ is $a_nc^n + a_{n-1}c^{n-1} + \\dots + a_1c + a_0$.",
            "reason": "Function notation: $c$ goes where $x$ stands."
          },
          {
            "line": "Each odd power $c^j$ is negative.",
            "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
          },
          {
            "line": "Each even power $c^j$ is positive.",
            "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $c^0 = 1$."
          },
          {
            "line": "Each term $a_jc^j$ with $a_j = 0$ is $0$.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "In the first case, each term $a_jc^j$ with $j$ odd and $a_j \\ne 0$ is negative.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is positive, and $c^j$ is negative by line 2."
          },
          {
            "line": "In the first case, each term $a_jc^j$ with $j$ even and $a_j \\ne 0$ is negative.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is negative, and $c^j$ is positive by line 3."
          },
          {
            "line": "In the first case, at least one term $a_jc^j$ is negative.",
            "reason": "The hypothesis: the coefficients are not all $0$, so some $a_j \\ne 0$, and lines 5 and 6 make its term negative."
          },
          {
            "line": "In the first case, the value $f(c)$ is negative.",
            "reason": "Adding two inequalities, from arithmetic: by lines 4, 5 and 6 every term is negative or $0$, and by line 7 one of them is negative."
          },
          {
            "line": "In the second case, each term $a_jc^j$ with $j$ odd and $a_j \\ne 0$ is positive.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is negative, and $c^j$ is negative by line 2."
          },
          {
            "line": "In the second case, each term $a_jc^j$ with $j$ even and $a_j \\ne 0$ is positive.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: $a_j$ is positive, and $c^j$ is positive by line 3."
          },
          {
            "line": "In the second case, at least one term $a_jc^j$ is positive.",
            "reason": "The hypothesis: the coefficients are not all $0$, so some $a_j \\ne 0$, and lines 9 and 10 make its term positive."
          },
          {
            "line": "In the second case, the value $f(c)$ is positive.",
            "reason": "Adding two inequalities, from arithmetic: by lines 4, 9 and 10 every term is positive or $0$, and by line 11 one of them is positive."
          },
          {
            "line": "In both cases the value $f(c)$ is not $0$, so no negative number is a root of $f(x)$.",
            "reason": "Proof by cases: the hypothesis gives one of the two cases, and lines 8 and 12 cover both."
          }
        ]
      }
    },
    {
      "id": "t199-s3",
      "method": "disproof by counterexample",
      "statement": "Prove that this claim is false: for every polynomial $f(x)$ and every number $a$, if the quotient of $f(x)$ divided by $x - a$ has no negative coefficient and the remainder is positive, then $f(x)$ has no root greater than $a$. Facts it may use: synthetic division, function notation, the number line.",
      "check": {
        "proof": [
          {
            "line": "Take $f(x) = 5x^2 + 17x + 14$ and $a = -3$.",
            "reason": "Disproof by counterexample: one polynomial and one number for which the hypothesis holds and the conclusion fails show that the claim is false."
          },
          {
            "line": "$\\begin{array}{r|rrr} -3 & 5 & 17 & 14 \\\\ & & -15 & -6 \\\\ \\hline & 5 & 2 & 8 \\end{array}$",
            "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
          },
          {
            "line": "The quotient is $5x + 2$, with no negative coefficient, and the remainder $8$ is positive.",
            "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, and the last bottom number is the remainder."
          },
          {
            "line": "$f(-2) = 5 \\cdot 4 + 17 \\cdot (-2) + 14 = 20 - 34 + 14 = 0$",
            "reason": "Function notation: $-2$ goes where $x$ stands."
          },
          {
            "line": "The number $-2$ is greater than $-3$, so $f(x)$ has a root greater than $a$.",
            "reason": "The number line, from arithmetic: $-2$ lies to the right of $-3$, and line 4 makes $-2$ a root."
          },
          {
            "line": "So the claim is false: the hypothesis holds by lines 2 and 3, and the conclusion fails by line 5.",
            "reason": "Disproof by counterexample: one case in which the claim fails is enough."
          }
        ]
      }
    }
  ]
}
