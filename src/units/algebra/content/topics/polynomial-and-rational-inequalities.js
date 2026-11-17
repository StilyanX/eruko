export default {
  "number": 155,
  "title": "Inequalities with several factors or a quotient",
  "section": 9,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "431-434, 446-450"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $(x + 13)(x + 2)(2x - 5) \\ge 0$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-13 <= x <= -2 or x >= 5/2",
    "solution": [
      "Solve $(x + 13)(x + 2)(2x - 5) \\ge 0$.",
      "The factors are $0$ at $x = -13$, $x = -2$ and $x = \\dfrac{5}{2}$.",
      "On $x < -13$, $-13 < x < -2$, $-2 < x < \\dfrac{5}{2}$ and $x > \\dfrac{5}{2}$ the product is negative, positive, negative and positive.",
      "The product is $0$ at $-13$, $-2$ and $\\dfrac{5}{2}$, so these numbers are taken in.",
      "The solutions are the numbers with $-13 \\le x \\le -2$ or $x \\ge \\dfrac{5}{2}$."
    ]
  },
  "ideas": [
    {
      "name": "Sign table",
      "concrete": "The factors of $(x + 6)(x - 2)(x - 9)$ are $0$ at $-6$, $2$ and $9$, which cut the number line into four intervals. For $x > 9$ all three factors are positive. For $2 < x < 9$ only $x - 9$ is negative, for $-6 < x < 2$ two factors are, and for $x < -6$ all three are. So the product is negative, positive, negative, positive from left to right, and $(x + 6)(x - 2)(x - 9) > 0$ holds exactly when $-6 < x < 2$ or $x > 9$.",
      "general": "For a product or quotient of factors $ax + b$, each with $a$ above $0$, a **sign table** lists the intervals between the zeros of the factors and, on each, the sign of every factor and of the whole. On each interval every factor keeps one sign: negative to the left of its zero and positive to the right. The whole is positive where an even number of factors are negative and negative where an odd number are. A factor that is positive for every $x$, as a square away from its zero or a quadratic with no real root, leaves the sign as it is."
    },
    {
      "name": "Values that make a denominator zero are never solutions",
      "concrete": "In $\\dfrac{x + 11}{x - 6} \\ge 0$ the top is $0$ at $-11$, so $-11$ is a solution, since $0 \\ge 0$. The bottom is $0$ at $6$, where the quotient has no value, so $6$ is not a solution. The solutions are the numbers with $x \\le -11$ or $x > 6$.",
      "general": "For a quotient $\\dfrac{p}{q}$ of two expressions in $x$, every number that makes $q$ zero is left out of the solutions of $\\dfrac{p}{q} > 0$, $\\dfrac{p}{q} \\ge 0$, $\\dfrac{p}{q} < 0$ and $\\dfrac{p}{q} \\le 0$, since the quotient is not defined there. A number that makes $p$ zero and $q$ not zero is a solution of the nonstrict inequalities and not of the strict ones."
    },
    {
      "name": "Never multiply an inequality by an expression of unknown sign",
      "concrete": "Multiplying $\\dfrac{3}{x + 10} < \\dfrac{2}{x - 7}$ by $(x + 10)(x - 7)$ would need the sign reversed for $-10 < x < 7$, where that product is negative, and kept elsewhere. Taking $\\dfrac{2}{x - 7}$ from both sides instead gives $\\dfrac{3}{x + 10} - \\dfrac{2}{x - 7} < 0$, and the single fraction $\\dfrac{x - 41}{(x + 10)(x - 7)} < 0$ is solved with a sign table.",
      "general": "Multiplying both sides of an inequality by an expression in $x$ keeps the sign only where the expression is positive and reverses it where the expression is negative. So an inequality with $x$ in a denominator is never multiplied through; instead every term is taken to one side, the side is written as a single fraction, and the sign of that fraction is read from a sign table."
    }
  ],
  "kinds": [
    {
      "id": "t155-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $(x + 4)(x - 9)(x + 13) \\le 0$.",
            "lines": [
              {
                "step": "Solve $(x + 4)(x - 9)(x + 13) \\le 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The factors are $0$ at $x = -4$, $x = 9$ and $x = -13$.",
                "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 4$ is $0$ at $-4$, $x - 9$ is $0$ at $9$ and $x + 13$ is $0$ at $-13$."
              },
              {
                "step": "On $x < -13$, $-13 < x < -4$, $-4 < x < 9$ and $x > 9$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-13$, $-4$ and $9$, so these numbers are taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
              },
              {
                "step": "The solutions are the numbers with $x \\le -13$ or $-4 \\le x \\le 9$.",
                "reason": "Union of intervals: the solutions are the numbers where the product is negative or $0$, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x + 4)(x - 11)(x - 13) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -4/3 or 11 < x < 13",
              "lines": [
                {
                  "step": "Solve $(3x + 4)(x - 11)(x - 13) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factors are $0$ at $x = -\\dfrac{4}{3}$, $x = 11$ and $x = 13$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $3x + 4$ is $0$ at $-\\dfrac{4}{3}$, $x - 11$ is $0$ at $11$ and $x - 13$ is $0$ at $13$."
                },
                {
                  "step": "On $x < -\\dfrac{4}{3}$, $-\\dfrac{4}{3} < x < 11$, $11 < x < 13$ and $x > 13$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-\\dfrac{4}{3}$, $11$ and $13$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -\\dfrac{4}{3}$ or $11 < x < 13$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is negative, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x + 14)(x + 10)(3x + 2) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-14 < x < -10 or x > -2/3",
              "lines": [
                {
                  "step": "Solve $(x + 14)(x + 10)(3x + 2) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factors are $0$ at $x = -14$, $x = -10$ and $x = -\\dfrac{2}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 14$ is $0$ at $-14$, $x + 10$ is $0$ at $-10$ and $3x + 2$ is $0$ at $-\\dfrac{2}{3}$."
                },
                {
                  "step": "On $x < -14$, $-14 < x < -10$, $-10 < x < -\\dfrac{2}{3}$ and $x > -\\dfrac{2}{3}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-14$, $-10$ and $-\\dfrac{2}{3}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-14 < x < -10$ or $x > -\\dfrac{2}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is positive, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x - 4)(x + 14)(x + 13) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -14 or -13 < x < 4",
              "lines": [
                {
                  "step": "Solve $(x - 4)(x + 14)(x + 13) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factors are $0$ at $x = 4$, $x = -14$ and $x = -13$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x - 4$ is $0$ at $4$, $x + 14$ is $0$ at $-14$ and $x + 13$ is $0$ at $-13$."
                },
                {
                  "step": "On $x < -14$, $-14 < x < -13$, $-13 < x < 4$ and $x > 4$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-14$, $-13$ and $4$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -14$ or $-13 < x < 4$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is negative, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(x + 7)^2(2x + 11)(x + 2) \\le 0$.",
            "lines": [
              {
                "step": "Solve $(x + 7)^2(2x + 11)(x + 2) \\le 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The factors are $0$ at $x = -7$, $x = -\\dfrac{11}{2}$ and $x = -2$.",
                "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 7$ is $0$ at $-7$, $2x + 11$ is $0$ at $-\\dfrac{11}{2}$ and $x + 2$ is $0$ at $-2$."
              },
              {
                "step": "For $x \\ne -7$ the square $(x + 7)^2$ is positive, so there the product has the sign of $(2x + 11)(x + 2)$.",
                "reason": "Trivial Inequality: a square is never negative, and it is $0$ only where $x + 7$ is $0$; a positive factor leaves the sign of a product as it is."
              },
              {
                "step": "On $x < -\\dfrac{11}{2}$, $-\\dfrac{11}{2} < x < -2$ and $x > -2$ the product $(2x + 11)(x + 2)$ is positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The whole product is $0$ at $-7$, $-\\dfrac{11}{2}$ and $-2$, so these numbers are taken in, and $-7$ is taken in by itself, since the product is positive on both sides of it.",
                "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
              },
              {
                "step": "The solutions are the numbers with $x = -7$ or $-\\dfrac{11}{2} \\le x \\le -2$.",
                "reason": "Union of intervals: the solutions are the numbers where the whole product is negative or $0$, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(x - 9)^2(2x - 9) \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x >= 9/2",
              "lines": [
                {
                  "step": "Solve $(x - 9)^2(2x - 9) \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factors are $0$ at $x = 9$ and $x = \\dfrac{9}{2}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x - 9$ is $0$ at $9$ and $2x - 9$ is $0$ at $\\dfrac{9}{2}$."
                },
                {
                  "step": "For $x \\ne 9$ the square $(x - 9)^2$ is positive, so there the product has the sign of $(2x - 9)$.",
                  "reason": "Trivial Inequality: a square is never negative, and it is $0$ only where $x - 9$ is $0$; a positive factor leaves the sign of a product as it is."
                },
                {
                  "step": "On $x < \\dfrac{9}{2}$ and $x > \\dfrac{9}{2}$ the factor $2x - 9$ is negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The whole product is $0$ at $\\dfrac{9}{2}$ and $9$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x \\ge \\dfrac{9}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the whole product is positive or $0$, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x + 8)^2(x + 10) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-10 < x < -8 or x > -8",
              "lines": [
                {
                  "step": "Solve $(x + 8)^2(x + 10) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factors are $0$ at $x = -8$ and $x = -10$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 8$ is $0$ at $-8$ and $x + 10$ is $0$ at $-10$."
                },
                {
                  "step": "For $x \\ne -8$ the square $(x + 8)^2$ is positive, so there the product has the sign of $(x + 10)$.",
                  "reason": "Trivial Inequality: a square is never negative, and it is $0$ only where $x + 8$ is $0$; a positive factor leaves the sign of a product as it is."
                },
                {
                  "step": "On $x < -10$ and $x > -10$ the factor $x + 10$ is negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The whole product is $0$ at $-10$ and $-8$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-10 < x < -8$ or $x > -8$.",
                  "reason": "Union of intervals: the solutions are the numbers where the whole product is positive, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x + 13)^2(3x - 2) \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x = -13 or x >= 2/3",
              "lines": [
                {
                  "step": "Solve $(x + 13)^2(3x - 2) \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factors are $0$ at $x = -13$ and $x = \\dfrac{2}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 13$ is $0$ at $-13$ and $3x - 2$ is $0$ at $\\dfrac{2}{3}$."
                },
                {
                  "step": "For $x \\ne -13$ the square $(x + 13)^2$ is positive, so there the product has the sign of $(3x - 2)$.",
                  "reason": "Trivial Inequality: a square is never negative, and it is $0$ only where $x + 13$ is $0$; a positive factor leaves the sign of a product as it is."
                },
                {
                  "step": "On $x < \\dfrac{2}{3}$ and $x > \\dfrac{2}{3}$ the factor $3x - 2$ is negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The whole product is $0$ at $-13$ and $\\dfrac{2}{3}$, so these numbers are taken in, and $-13$ is taken in by itself, since the product is negative on both sides of it.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $x = -13$ or $x \\ge \\dfrac{2}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the whole product is positive or $0$, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(x^2 + 4x + 9)(2x + 3)(x - 1) > 0$.",
            "lines": [
              {
                "step": "Solve $(x^2 + 4x + 9)(2x + 3)(x - 1) > 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4^2 - 4 \\cdot 1 \\cdot 9 = -20$",
                "reason": "Discriminant $b^2 - 4ac$: the quadratic $x^2 + 4x + 9$ has $a = 1$, $b = 4$ and $c = 9$."
              },
              {
                "step": "The quadratic $x^2 + 4x + 9$ is positive for every $x$, since it is $9$ at $x = 0$.",
                "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
              },
              {
                "step": "The factors are $0$ at $x = -\\dfrac{3}{2}$ and $x = 1$.",
                "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $2x + 3$ is $0$ at $-\\dfrac{3}{2}$ and $x - 1$ is $0$ at $1$."
              },
              {
                "step": "On $x < -\\dfrac{3}{2}$, $-\\dfrac{3}{2} < x < 1$ and $x > 1$ the product is positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-\\dfrac{3}{2}$ and $1$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
              },
              {
                "step": "The solutions are the numbers with $x < -\\dfrac{3}{2}$ or $x > 1$.",
                "reason": "Union of intervals: the solutions are the numbers where the product is positive, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(2x^2 - 3x + 10)(x + 10)(x - 3) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -10 or x > 3",
              "lines": [
                {
                  "step": "Solve $(2x^2 - 3x + 10)(x + 10)(x - 3) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-3)^2 - 4 \\cdot 2 \\cdot 10 = -71$",
                  "reason": "Discriminant $b^2 - 4ac$: the quadratic $2x^2 - 3x + 10$ has $a = 2$, $b = -3$ and $c = 10$."
                },
                {
                  "step": "The quadratic $2x^2 - 3x + 10$ is positive for every $x$, since it is $10$ at $x = 0$.",
                  "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
                },
                {
                  "step": "The factors are $0$ at $x = -10$ and $x = 3$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 10$ is $0$ at $-10$ and $x - 3$ is $0$ at $3$."
                },
                {
                  "step": "On $x < -10$, $-10 < x < 3$ and $x > 3$ the product is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-10$ and $3$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -10$ or $x > 3$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is positive, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x^2 + x + 8)(x + 13)(x - 7) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-13 < x < 7",
              "lines": [
                {
                  "step": "Solve $(x^2 + x + 8)(x + 13)(x - 7) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1^2 - 4 \\cdot 1 \\cdot 8 = -31$",
                  "reason": "Discriminant $b^2 - 4ac$: the quadratic $x^2 + x + 8$ has $a = 1$, $b = 1$ and $c = 8$."
                },
                {
                  "step": "The quadratic $x^2 + x + 8$ is positive for every $x$, since it is $8$ at $x = 0$.",
                  "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
                },
                {
                  "step": "The factors are $0$ at $x = -13$ and $x = 7$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 13$ is $0$ at $-13$ and $x - 7$ is $0$ at $7$."
                },
                {
                  "step": "On $x < -13$, $-13 < x < 7$ and $x > 7$ the product is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-13$ and $7$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-13 < x < 7$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is negative, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(2x^2 - 6x + 11)(x + 6)(x - 11) \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-6 <= x <= 11",
              "lines": [
                {
                  "step": "Solve $(2x^2 - 6x + 11)(x + 6)(x - 11) \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-6)^2 - 4 \\cdot 2 \\cdot 11 = -52$",
                  "reason": "Discriminant $b^2 - 4ac$: the quadratic $2x^2 - 6x + 11$ has $a = 2$, $b = -6$ and $c = 11$."
                },
                {
                  "step": "The quadratic $2x^2 - 6x + 11$ is positive for every $x$, since it is $11$ at $x = 0$.",
                  "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
                },
                {
                  "step": "The factors are $0$ at $x = -6$ and $x = 11$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 6$ is $0$ at $-6$ and $x - 11$ is $0$ at $11$."
                },
                {
                  "step": "On $x < -6$, $-6 < x < 11$ and $x > 11$ the product is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-6$ and $11$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $-6 \\le x \\le 11$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is negative or $0$, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(3x + 5)(2x^2 - 7x - 130) > 0$.",
            "lines": [
              {
                "step": "Solve $(3x + 5)(2x^2 - 7x - 130) > 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(3x + 5)(2x + 13)(x - 10) > 0$",
                "reason": "Factoring a quadratic: $(2x + 13)(x - 10)$ multiplies out to $2x^2 - 7x - 130$, since $2 \\cdot 1 = 2$, $13 \\cdot (-10) = -130$ and $2 \\cdot (-10) + 13 \\cdot 1 = -7$."
              },
              {
                "step": "The factors are $0$ at $x = -\\dfrac{5}{3}$, $x = -\\dfrac{13}{2}$ and $x = 10$.",
                "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $3x + 5$ is $0$ at $-\\dfrac{5}{3}$, $2x + 13$ is $0$ at $-\\dfrac{13}{2}$ and $x - 10$ is $0$ at $10$."
              },
              {
                "step": "On $x < -\\dfrac{13}{2}$, $-\\dfrac{13}{2} < x < -\\dfrac{5}{3}$, $-\\dfrac{5}{3} < x < 10$ and $x > 10$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-\\dfrac{13}{2}$, $-\\dfrac{5}{3}$ and $10$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
              },
              {
                "step": "The solutions are the numbers with $-\\dfrac{13}{2} < x < -\\dfrac{5}{3}$ or $x > 10$.",
                "reason": "Union of intervals: the solutions are the numbers where the product is positive, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x + 13)(3x^2 + 56x + 196) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-14 < x < -14/3 or x > -13/3",
              "lines": [
                {
                  "step": "Solve $(3x + 13)(3x^2 + 56x + 196) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x + 13)(x + 14)(3x + 14) > 0$",
                  "reason": "Factoring a quadratic: $(x + 14)(3x + 14)$ multiplies out to $3x^2 + 56x + 196$, since $1 \\cdot 3 = 3$, $14 \\cdot 14 = 196$ and $1 \\cdot 14 + 14 \\cdot 3 = 56$."
                },
                {
                  "step": "The factors are $0$ at $x = -\\dfrac{13}{3}$, $x = -14$ and $x = -\\dfrac{14}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $3x + 13$ is $0$ at $-\\dfrac{13}{3}$, $x + 14$ is $0$ at $-14$ and $3x + 14$ is $0$ at $-\\dfrac{14}{3}$."
                },
                {
                  "step": "On $x < -14$, $-14 < x < -\\dfrac{14}{3}$, $-\\dfrac{14}{3} < x < -\\dfrac{13}{3}$ and $x > -\\dfrac{13}{3}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-14$, $-\\dfrac{14}{3}$ and $-\\dfrac{13}{3}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-14 < x < -\\dfrac{14}{3}$ or $x > -\\dfrac{13}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is positive, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x + 3)(3x^2 - 32x - 91) \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-3 <= x <= -7/3 or x >= 13",
              "lines": [
                {
                  "step": "Solve $(x + 3)(3x^2 - 32x - 91) \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 3)(x - 13)(3x + 7) \\ge 0$",
                  "reason": "Factoring a quadratic: $(x - 13)(3x + 7)$ multiplies out to $3x^2 - 32x - 91$, since $1 \\cdot 3 = 3$, $(-13) \\cdot 7 = -91$ and $1 \\cdot 7 + (-13) \\cdot 3 = -32$."
                },
                {
                  "step": "The factors are $0$ at $x = -3$, $x = 13$ and $x = -\\dfrac{7}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 3$ is $0$ at $-3$, $x - 13$ is $0$ at $13$ and $3x + 7$ is $0$ at $-\\dfrac{7}{3}$."
                },
                {
                  "step": "On $x < -3$, $-3 < x < -\\dfrac{7}{3}$, $-\\dfrac{7}{3} < x < 13$ and $x > 13$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-3$, $-\\dfrac{7}{3}$ and $13$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $-3 \\le x \\le -\\dfrac{7}{3}$ or $x \\ge 13$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is positive or $0$, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x + 12)(3x^2 + 52x + 169) \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-13 <= x <= -12 or x >= -13/3",
              "lines": [
                {
                  "step": "Solve $(x + 12)(3x^2 + 52x + 169) \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 12)(x + 13)(3x + 13) \\ge 0$",
                  "reason": "Factoring a quadratic: $(x + 13)(3x + 13)$ multiplies out to $3x^2 + 52x + 169$, since $1 \\cdot 3 = 3$, $13 \\cdot 13 = 169$ and $1 \\cdot 13 + 13 \\cdot 3 = 52$."
                },
                {
                  "step": "The factors are $0$ at $x = -12$, $x = -13$ and $x = -\\dfrac{13}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 12$ is $0$ at $-12$, $x + 13$ is $0$ at $-13$ and $3x + 13$ is $0$ at $-\\dfrac{13}{3}$."
                },
                {
                  "step": "On $x < -13$, $-13 < x < -12$, $-12 < x < -\\dfrac{13}{3}$ and $x > -\\dfrac{13}{3}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-13$, $-12$ and $-\\dfrac{13}{3}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "The solutions are the numbers with $-13 \\le x \\le -12$ or $x \\ge -\\dfrac{13}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is positive or $0$, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(2x + 11)(-3x^2 + 47x - 104) \\le 0$.",
            "lines": [
              {
                "step": "Solve $(2x + 11)(-3x^2 + 47x - 104) \\le 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x + 11)(3x^2 - 47x + 104) \\ge 0$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $-3x^2 + 47x - 104$ into $3x^2 - 47x + 104$, and $\\le$ becomes $\\ge$."
              },
              {
                "step": "$(2x + 11)(x - 13)(3x - 8) \\ge 0$",
                "reason": "Factoring a quadratic: $(x - 13)(3x - 8)$ multiplies out to $3x^2 - 47x + 104$, since $1 \\cdot 3 = 3$, $(-13) \\cdot (-8) = 104$ and $1 \\cdot (-8) + (-13) \\cdot 3 = -47$."
              },
              {
                "step": "The factors are $0$ at $x = -\\dfrac{11}{2}$, $x = 13$ and $x = \\dfrac{8}{3}$.",
                "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $2x + 11$ is $0$ at $-\\dfrac{11}{2}$, $x - 13$ is $0$ at $13$ and $3x - 8$ is $0$ at $\\dfrac{8}{3}$."
              },
              {
                "step": "On $x < -\\dfrac{11}{2}$, $-\\dfrac{11}{2} < x < \\dfrac{8}{3}$, $\\dfrac{8}{3} < x < 13$ and $x > 13$ the product is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
              },
              {
                "step": "The product is $0$ at $-\\dfrac{11}{2}$, $\\dfrac{8}{3}$ and $13$, so these numbers are taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
              },
              {
                "step": "The solutions are the numbers with $-\\dfrac{11}{2} \\le x \\le \\dfrac{8}{3}$ or $x \\ge 13$.",
                "reason": "Union of intervals: the solutions are the numbers where the product is positive or $0$, ends included or left out as the line before says, and the parts are joined by or."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x - 13)(-3x^2 - 38x - 99) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-9 < x < -11/3 or x > 13/3",
              "lines": [
                {
                  "step": "Solve $(3x - 13)(-3x^2 - 38x - 99) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x - 13)(3x^2 + 38x + 99) > 0$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $-3x^2 - 38x - 99$ into $3x^2 + 38x + 99$, and $<$ becomes $>$."
                },
                {
                  "step": "$(3x - 13)(x + 9)(3x + 11) > 0$",
                  "reason": "Factoring a quadratic: $(x + 9)(3x + 11)$ multiplies out to $3x^2 + 38x + 99$, since $1 \\cdot 3 = 3$, $9 \\cdot 11 = 99$ and $1 \\cdot 11 + 9 \\cdot 3 = 38$."
                },
                {
                  "step": "The factors are $0$ at $x = \\dfrac{13}{3}$, $x = -9$ and $x = -\\dfrac{11}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $3x - 13$ is $0$ at $\\dfrac{13}{3}$, $x + 9$ is $0$ at $-9$ and $3x + 11$ is $0$ at $-\\dfrac{11}{3}$."
                },
                {
                  "step": "On $x < -9$, $-9 < x < -\\dfrac{11}{3}$, $-\\dfrac{11}{3} < x < \\dfrac{13}{3}$ and $x > \\dfrac{13}{3}$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-9$, $-\\dfrac{11}{3}$ and $\\dfrac{13}{3}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $-9 < x < -\\dfrac{11}{3}$ or $x > \\dfrac{13}{3}$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is positive, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x - 7)(-2x^2 + 5x + 52) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -4 or 13/2 < x < 7",
              "lines": [
                {
                  "step": "Solve $(x - 7)(-2x^2 + 5x + 52) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 7)(2x^2 - 5x - 52) < 0$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $-2x^2 + 5x + 52$ into $2x^2 - 5x - 52$, and $>$ becomes $<$."
                },
                {
                  "step": "$(x - 7)(2x - 13)(x + 4) < 0$",
                  "reason": "Factoring a quadratic: $(2x - 13)(x + 4)$ multiplies out to $2x^2 - 5x - 52$, since $2 \\cdot 1 = 2$, $(-13) \\cdot 4 = -52$ and $2 \\cdot 4 + (-13) \\cdot 1 = -5$."
                },
                {
                  "step": "The factors are $0$ at $x = 7$, $x = \\dfrac{13}{2}$ and $x = -4$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x - 7$ is $0$ at $7$, $2x - 13$ is $0$ at $\\dfrac{13}{2}$ and $x + 4$ is $0$ at $-4$."
                },
                {
                  "step": "On $x < -4$, $-4 < x < \\dfrac{13}{2}$, $\\dfrac{13}{2} < x < 7$ and $x > 7$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-4$, $\\dfrac{13}{2}$ and $7$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -4$ or $\\dfrac{13}{2} < x < 7$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is negative, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            },
            {
              "prompt": "Solve $(x + 13)(-3x^2 - 17x - 14) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -13 or -14/3 < x < -1",
              "lines": [
                {
                  "step": "Solve $(x + 13)(-3x^2 - 17x - 14) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 13)(3x^2 + 17x + 14) < 0$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $-3x^2 - 17x - 14$ into $3x^2 + 17x + 14$, and $>$ becomes $<$."
                },
                {
                  "step": "$(x + 13)(x + 1)(3x + 14) < 0$",
                  "reason": "Factoring a quadratic: $(x + 1)(3x + 14)$ multiplies out to $3x^2 + 17x + 14$, since $1 \\cdot 3 = 3$, $1 \\cdot 14 = 14$ and $1 \\cdot 14 + 1 \\cdot 3 = 17$."
                },
                {
                  "step": "The factors are $0$ at $x = -13$, $x = -1$ and $x = -\\dfrac{14}{3}$.",
                  "reason": "Zero-product property: the product is $0$ only when one of its factors is $0$, and $x + 13$ is $0$ at $-13$, $x + 1$ is $0$ at $-1$ and $3x + 14$ is $0$ at $-\\dfrac{14}{3}$."
                },
                {
                  "step": "On $x < -13$, $-13 < x < -\\dfrac{14}{3}$, $-\\dfrac{14}{3} < x < -1$ and $x > -1$ the product is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the product is positive where that number is even."
                },
                {
                  "step": "The product is $0$ at $-13$, $-\\dfrac{14}{3}$ and $-1$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "The solutions are the numbers with $x < -13$ or $-\\dfrac{14}{3} < x < -1$.",
                  "reason": "Union of intervals: the solutions are the numbers where the product is negative, ends included or left out as the line before says, and the parts are joined by or."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t155-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $\\dfrac{(x - 3)(x - 14)}{2x + 11} < 0$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{(x - 3)(x - 14)}{2x + 11} < 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The top is $0$ at $x = 3$ and $x = 14$, and the bottom is $0$ at $x = -\\dfrac{11}{2}$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x - 3$ is $0$ at $3$, $x - 14$ is $0$ at $14$ and $2x + 11$ is $0$ at $-\\dfrac{11}{2}$."
              },
              {
                "step": "On $x < -\\dfrac{11}{2}$, $-\\dfrac{11}{2} < x < 3$, $3 < x < 14$ and $x > 14$ the quotient is negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
              },
              {
                "step": "The bottom is $0$ at $-\\dfrac{11}{2}$, so this number is never a solution.",
                "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
              },
              {
                "step": "The top is $0$ at $3$ and $14$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
              },
              {
                "step": "$(-\\infty, -\\dfrac{11}{2}) \\cup (3, 14)$",
                "reason": "Union of intervals: the solutions are the numbers where the quotient is negative, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{(2x - 11)(x - 6)}{x - 13} \\le 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, 11/2] U [6, 13)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{(2x - 11)(x - 6)}{x - 13} \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top is $0$ at $x = \\dfrac{11}{2}$ and $x = 6$, and the bottom is $0$ at $x = 13$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x - 11$ is $0$ at $\\dfrac{11}{2}$, $x - 6$ is $0$ at $6$ and $x - 13$ is $0$ at $13$."
                },
                {
                  "step": "On $x < \\dfrac{11}{2}$, $\\dfrac{11}{2} < x < 6$, $6 < x < 13$ and $x > 13$ the quotient is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $13$, so this number is never a solution.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $\\dfrac{11}{2}$ and $6$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$(-\\infty, \\dfrac{11}{2}] \\cup [6, 13)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x + 4}{(x + 8)(x + 5)} \\le 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -8) U (-5, -4]",
              "lines": [
                {
                  "step": "Solve $\\dfrac{x + 4}{(x + 8)(x + 5)} \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top is $0$ at $x = -4$, and the bottom is $0$ at $x = -8$ and $x = -5$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 4$ is $0$ at $-4$, $x + 8$ is $0$ at $-8$ and $x + 5$ is $0$ at $-5$."
                },
                {
                  "step": "On $x < -8$, $-8 < x < -5$, $-5 < x < -4$ and $x > -4$ the quotient is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-8$ and $-5$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-4$, so this number is taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$(-\\infty, -8) \\cup (-5, -4]$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{x - 5}{(x + 12)(x + 8)} \\le 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -12) U (-8, 5]",
              "lines": [
                {
                  "step": "Solve $\\dfrac{x - 5}{(x + 12)(x + 8)} \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The top is $0$ at $x = 5$, and the bottom is $0$ at $x = -12$ and $x = -8$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x - 5$ is $0$ at $5$, $x + 12$ is $0$ at $-12$ and $x + 8$ is $0$ at $-8$."
                },
                {
                  "step": "On $x < -12$, $-12 < x < -8$, $-8 < x < 5$ and $x > 5$ the quotient is negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-12$ and $-8$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $5$, so this number is taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$(-\\infty, -12) \\cup (-8, 5]$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{5x - 6}{x - 11} \\le 3$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{5x - 6}{x - 11} \\le 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{5x - 6}{x - 11} - 3 \\le 0$",
                "reason": "Never multiply an inequality by an expression of unknown sign: the bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
              },
              {
                "step": "$\\dfrac{5x - 6 - 3(x - 11)}{x - 11} \\le 0$",
                "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
              },
              {
                "step": "$\\dfrac{2x + 27}{x - 11} \\le 0$",
                "reason": "Subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree one."
              },
              {
                "step": "The top is $0$ at $x = -\\dfrac{27}{2}$, and the bottom is $0$ at $x = 11$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x + 27$ is $0$ at $-\\dfrac{27}{2}$ and $x - 11$ is $0$ at $11$."
              },
              {
                "step": "On $x < -\\dfrac{27}{2}$, $-\\dfrac{27}{2} < x < 11$ and $x > 11$ the quotient is positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
              },
              {
                "step": "The bottom is $0$ at $11$, so this number is never a solution.",
                "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
              },
              {
                "step": "The top is $0$ at $-\\dfrac{27}{2}$, so this number is taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
              },
              {
                "step": "$[-\\dfrac{27}{2}, 11)$",
                "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{7x + 13}{x + 12} \\le 5$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-12, 47/2]",
              "lines": [
                {
                  "step": "Solve $\\dfrac{7x + 13}{x + 12} \\le 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7x + 13}{x + 12} - 5 \\le 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: the bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{7x + 13 - 5(x + 12)}{x + 12} \\le 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{2x - 47}{x + 12} \\le 0$",
                  "reason": "Subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree one."
                },
                {
                  "step": "The top is $0$ at $x = \\dfrac{47}{2}$, and the bottom is $0$ at $x = -12$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x - 47$ is $0$ at $\\dfrac{47}{2}$ and $x + 12$ is $0$ at $-12$."
                },
                {
                  "step": "On $x < -12$, $-12 < x < \\dfrac{47}{2}$ and $x > \\dfrac{47}{2}$ the quotient is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-12$, so this number is never a solution.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $\\dfrac{47}{2}$, so this number is taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$(-12, \\dfrac{47}{2}]$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{7x + 4}{x - 13} \\le 5$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-69/2, 13)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{7x + 4}{x - 13} \\le 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7x + 4}{x - 13} - 5 \\le 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: the bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{7x + 4 - 5(x - 13)}{x - 13} \\le 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{2x + 69}{x - 13} \\le 0$",
                  "reason": "Subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree one."
                },
                {
                  "step": "The top is $0$ at $x = -\\dfrac{69}{2}$, and the bottom is $0$ at $x = 13$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x + 69$ is $0$ at $-\\dfrac{69}{2}$ and $x - 13$ is $0$ at $13$."
                },
                {
                  "step": "On $x < -\\dfrac{69}{2}$, $-\\dfrac{69}{2} < x < 13$ and $x > 13$ the quotient is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $13$, so this number is never a solution.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-\\dfrac{69}{2}$, so this number is taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$[-\\dfrac{69}{2}, 13)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{8x + 15}{x - 10} > 5$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -65/3) U (10, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{8x + 15}{x - 10} > 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8x + 15}{x - 10} - 5 > 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: the bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{8x + 15 - 5(x - 10)}{x - 10} > 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{3x + 65}{x - 10} > 0$",
                  "reason": "Subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree one."
                },
                {
                  "step": "The top is $0$ at $x = -\\dfrac{65}{3}$, and the bottom is $0$ at $x = 10$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $3x + 65$ is $0$ at $-\\dfrac{65}{3}$ and $x - 10$ is $0$ at $10$."
                },
                {
                  "step": "On $x < -\\dfrac{65}{3}$, $-\\dfrac{65}{3} < x < 10$ and $x > 10$ the quotient is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $10$, so this number is never a solution.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-\\dfrac{65}{3}$, so this number is left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "$(-\\infty, -\\dfrac{65}{3}) \\cup (10, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{(x - 6)(-6 - 5x)}{(x + 8)(x - 12)} \\le 0$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{(x - 6)(-6 - 5x)}{(x + 8)(x - 12)} \\le 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{(x - 6)(5x + 6)}{(x + 8)(x - 12)} \\ge 0$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $-6 - 5x$ into $5x + 6$, and $\\le$ becomes $\\ge$."
              },
              {
                "step": "The top is $0$ at $x = 6$ and $x = -\\dfrac{6}{5}$, and the bottom is $0$ at $x = -8$ and $x = 12$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x - 6$ is $0$ at $6$, $5x + 6$ is $0$ at $-\\dfrac{6}{5}$, $x + 8$ is $0$ at $-8$ and $x - 12$ is $0$ at $12$."
              },
              {
                "step": "On $x < -8$, $-8 < x < -\\dfrac{6}{5}$, $-\\dfrac{6}{5} < x < 6$, $6 < x < 12$ and $x > 12$ the quotient is positive, negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
              },
              {
                "step": "The bottom is $0$ at $-8$ and $12$, so these numbers are never solutions.",
                "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
              },
              {
                "step": "The top is $0$ at $-\\dfrac{6}{5}$ and $6$, so these numbers are taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
              },
              {
                "step": "$(-\\infty, -8) \\cup [-\\dfrac{6}{5}, 6] \\cup (12, \\infty)$",
                "reason": "Union of intervals: the solutions are the numbers where the quotient is positive or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{(2x - 13)(-7 - 4x)}{(x + 2)(x - 7)} > 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-2, -7/4) U (13/2, 7)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{(2x - 13)(-7 - 4x)}{(x + 2)(x - 7)} > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(2x - 13)(4x + 7)}{(x + 2)(x - 7)} < 0$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $-7 - 4x$ into $4x + 7$, and $>$ becomes $<$."
                },
                {
                  "step": "The top is $0$ at $x = \\dfrac{13}{2}$ and $x = -\\dfrac{7}{4}$, and the bottom is $0$ at $x = -2$ and $x = 7$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x - 13$ is $0$ at $\\dfrac{13}{2}$, $4x + 7$ is $0$ at $-\\dfrac{7}{4}$, $x + 2$ is $0$ at $-2$ and $x - 7$ is $0$ at $7$."
                },
                {
                  "step": "On $x < -2$, $-2 < x < -\\dfrac{7}{4}$, $-\\dfrac{7}{4} < x < \\dfrac{13}{2}$, $\\dfrac{13}{2} < x < 7$ and $x > 7$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-2$ and $7$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-\\dfrac{7}{4}$ and $\\dfrac{13}{2}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "$(-2, -\\dfrac{7}{4}) \\cup (\\dfrac{13}{2}, 7)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{(2x + 3)(11 - 4x)}{(x + 14)(x - 6)} \\le 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -14) U [-3/2, 11/4] U (6, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{(2x + 3)(11 - 4x)}{(x + 14)(x - 6)} \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(2x + 3)(4x - 11)}{(x + 14)(x - 6)} \\ge 0$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $11 - 4x$ into $4x - 11$, and $\\le$ becomes $\\ge$."
                },
                {
                  "step": "The top is $0$ at $x = -\\dfrac{3}{2}$ and $x = \\dfrac{11}{4}$, and the bottom is $0$ at $x = -14$ and $x = 6$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x + 3$ is $0$ at $-\\dfrac{3}{2}$, $4x - 11$ is $0$ at $\\dfrac{11}{4}$, $x + 14$ is $0$ at $-14$ and $x - 6$ is $0$ at $6$."
                },
                {
                  "step": "On $x < -14$, $-14 < x < -\\dfrac{3}{2}$, $-\\dfrac{3}{2} < x < \\dfrac{11}{4}$, $\\dfrac{11}{4} < x < 6$ and $x > 6$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-14$ and $6$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-\\dfrac{3}{2}$ and $\\dfrac{11}{4}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "$(-\\infty, -14) \\cup [-\\dfrac{3}{2}, \\dfrac{11}{4}] \\cup (6, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{(x + 2)(5 - 3x)}{(x - 7)(x - 12)} \\ge 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-2, 5/3] U (7, 12)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{(x + 2)(5 - 3x)}{(x - 7)(x - 12)} \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x + 2)(3x - 5)}{(x - 7)(x - 12)} \\le 0$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, which turns $5 - 3x$ into $3x - 5$, and $\\ge$ becomes $\\le$."
                },
                {
                  "step": "The top is $0$ at $x = -2$ and $x = \\dfrac{5}{3}$, and the bottom is $0$ at $x = 7$ and $x = 12$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 2$ is $0$ at $-2$, $3x - 5$ is $0$ at $\\dfrac{5}{3}$, $x - 7$ is $0$ at $7$ and $x - 12$ is $0$ at $12$."
                },
                {
                  "step": "On $x < -2$, $-2 < x < \\dfrac{5}{3}$, $\\dfrac{5}{3} < x < 7$, $7 < x < 12$ and $x > 12$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $7$ and $12$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-2$ and $\\dfrac{5}{3}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$[-2, \\dfrac{5}{3}] \\cup (7, 12)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{2x^2 + 19x + 39}{x^2 + 6x - 112} > 0$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{2x^2 + 19x + 39}{x^2 + 6x - 112} > 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{(2x + 13)(x + 3)}{(x + 14)(x - 8)} > 0$",
                "reason": "Factoring a quadratic: $(2x + 13)(x + 3)$ multiplies out to $2x^2 + 19x + 39$, and $(x + 14)(x - 8)$ multiplies out to $x^2 + 6x - 112$."
              },
              {
                "step": "The top is $0$ at $x = -\\dfrac{13}{2}$ and $x = -3$, and the bottom is $0$ at $x = -14$ and $x = 8$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $2x + 13$ is $0$ at $-\\dfrac{13}{2}$, $x + 3$ is $0$ at $-3$, $x + 14$ is $0$ at $-14$ and $x - 8$ is $0$ at $8$."
              },
              {
                "step": "On $x < -14$, $-14 < x < -\\dfrac{13}{2}$, $-\\dfrac{13}{2} < x < -3$, $-3 < x < 8$ and $x > 8$ the quotient is positive, negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
              },
              {
                "step": "The bottom is $0$ at $-14$ and $8$, so these numbers are never solutions.",
                "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
              },
              {
                "step": "The top is $0$ at $-\\dfrac{13}{2}$ and $-3$, so these numbers are left out.",
                "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
              },
              {
                "step": "$(-\\infty, -14) \\cup (-\\dfrac{13}{2}, -3) \\cup (8, \\infty)$",
                "reason": "Union of intervals: the solutions are the numbers where the quotient is positive, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{x^2 + 7x - 144}{x^2 - 25x + 150} > 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -16) U (9, 10) U (15, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{x^2 + 7x - 144}{x^2 - 25x + 150} > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x + 16)(x - 9)}{(x - 10)(x - 15)} > 0$",
                  "reason": "Factoring a quadratic: $(x + 16)(x - 9)$ multiplies out to $x^2 + 7x - 144$, and $(x - 10)(x - 15)$ multiplies out to $x^2 - 25x + 150$."
                },
                {
                  "step": "The top is $0$ at $x = -16$ and $x = 9$, and the bottom is $0$ at $x = 10$ and $x = 15$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 16$ is $0$ at $-16$, $x - 9$ is $0$ at $9$, $x - 10$ is $0$ at $10$ and $x - 15$ is $0$ at $15$."
                },
                {
                  "step": "On $x < -16$, $-16 < x < 9$, $9 < x < 10$, $10 < x < 15$ and $x > 15$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $10$ and $15$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-16$ and $9$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "$(-\\infty, -16) \\cup (9, 10) \\cup (15, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{2x^2 - 27x + 90}{x^2 + 13x + 36} \\le 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-9, -4) U [6, 15/2]",
              "lines": [
                {
                  "step": "Solve $\\dfrac{2x^2 - 27x + 90}{x^2 + 13x + 36} \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x - 6)(2x - 15)}{(x + 9)(x + 4)} \\le 0$",
                  "reason": "Factoring a quadratic: $(x - 6)(2x - 15)$ multiplies out to $2x^2 - 27x + 90$, and $(x + 9)(x + 4)$ multiplies out to $x^2 + 13x + 36$."
                },
                {
                  "step": "The top is $0$ at $x = 6$ and $x = \\dfrac{15}{2}$, and the bottom is $0$ at $x = -9$ and $x = -4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x - 6$ is $0$ at $6$, $2x - 15$ is $0$ at $\\dfrac{15}{2}$, $x + 9$ is $0$ at $-9$ and $x + 4$ is $0$ at $-4$."
                },
                {
                  "step": "On $x < -9$, $-9 < x < -4$, $-4 < x < 6$, $6 < x < \\dfrac{15}{2}$ and $x > \\dfrac{15}{2}$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-9$ and $-4$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $6$ and $\\dfrac{15}{2}$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$(-9, -4) \\cup [6, \\dfrac{15}{2}]$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{2x^2 + x - 153}{x^2 + 26x + 165} < 0$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-15, -11) U (-9, 17/2)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{2x^2 + x - 153}{x^2 + 26x + 165} < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{(x + 9)(2x - 17)}{(x + 15)(x + 11)} < 0$",
                  "reason": "Factoring a quadratic: $(x + 9)(2x - 17)$ multiplies out to $2x^2 + x - 153$, and $(x + 15)(x + 11)$ multiplies out to $x^2 + 26x + 165$."
                },
                {
                  "step": "The top is $0$ at $x = -9$ and $x = \\dfrac{17}{2}$, and the bottom is $0$ at $x = -15$ and $x = -11$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 9$ is $0$ at $-9$, $2x - 17$ is $0$ at $\\dfrac{17}{2}$, $x + 15$ is $0$ at $-15$ and $x + 11$ is $0$ at $-11$."
                },
                {
                  "step": "On $x < -15$, $-15 < x < -11$, $-11 < x < -9$, $-9 < x < \\dfrac{17}{2}$ and $x > \\dfrac{17}{2}$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-15$ and $-11$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-9$ and $\\dfrac{17}{2}$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $<$ is strict, and $0 < 0$ is false."
                },
                {
                  "step": "$(-15, -11) \\cup (-9, \\dfrac{17}{2})$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{9}{x - 12} + 1 \\le \\dfrac{2}{x - 20}$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{9}{x - 12} + 1 \\le \\dfrac{2}{x - 20}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{9}{x - 12} + 1 - \\dfrac{2}{x - 20} \\le 0$",
                "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
              },
              {
                "step": "$\\dfrac{9(x - 20) + (x - 12)(x - 20) - 2(x - 12)}{(x - 12)(x - 20)} \\le 0$",
                "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
              },
              {
                "step": "$\\dfrac{x^2 - 25x + 84}{(x - 12)(x - 20)} \\le 0$",
                "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
              },
              {
                "step": "$\\dfrac{(x - 4)(x - 21)}{(x - 12)(x - 20)} \\le 0$",
                "reason": "Factoring a quadratic: $(x - 4)(x - 21)$ multiplies out to $x^2 - 25x + 84$."
              },
              {
                "step": "The top is $0$ at $x = 4$ and $x = 21$, and the bottom is $0$ at $x = 12$ and $x = 20$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x - 4$ is $0$ at $4$, $x - 21$ is $0$ at $21$, $x - 12$ is $0$ at $12$ and $x - 20$ is $0$ at $20$."
              },
              {
                "step": "On $x < 4$, $4 < x < 12$, $12 < x < 20$, $20 < x < 21$ and $x > 21$ the quotient is positive, negative, positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
              },
              {
                "step": "The bottom is $0$ at $12$ and $20$, so these numbers are never solutions.",
                "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
              },
              {
                "step": "The top is $0$ at $4$ and $21$, so these numbers are taken in.",
                "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
              },
              {
                "step": "$[4, 12) \\cup (20, 21]$",
                "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{3}{x + 19} + 1 \\ge \\dfrac{2}{x + 17}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -21] U (-19, -17) U [-16, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{3}{x + 19} + 1 \\ge \\dfrac{2}{x + 17}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{x + 19} + 1 - \\dfrac{2}{x + 17} \\ge 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{3(x + 17) + (x + 19)(x + 17) - 2(x + 19)}{(x + 19)(x + 17)} \\ge 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{x^2 + 37x + 336}{(x + 19)(x + 17)} \\ge 0$",
                  "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
                },
                {
                  "step": "$\\dfrac{(x + 21)(x + 16)}{(x + 19)(x + 17)} \\ge 0$",
                  "reason": "Factoring a quadratic: $(x + 21)(x + 16)$ multiplies out to $x^2 + 37x + 336$."
                },
                {
                  "step": "The top is $0$ at $x = -21$ and $x = -16$, and the bottom is $0$ at $x = -19$ and $x = -17$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 21$ is $0$ at $-21$, $x + 16$ is $0$ at $-16$, $x + 19$ is $0$ at $-19$ and $x + 17$ is $0$ at $-17$."
                },
                {
                  "step": "On $x < -21$, $-21 < x < -19$, $-19 < x < -17$, $-17 < x < -16$ and $x > -16$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-19$ and $-17$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-21$ and $-16$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\ge$ allows equality, and $0 \\ge 0$ is true."
                },
                {
                  "step": "$(-\\infty, -21] \\cup (-19, -17) \\cup [-16, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{10}{x + 17} + 1 > \\dfrac{9}{x + 13}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -22) U (-17, -13) U (-9, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{10}{x + 17} + 1 > \\dfrac{9}{x + 13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10}{x + 17} + 1 - \\dfrac{9}{x + 13} > 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{10(x + 13) + (x + 17)(x + 13) - 9(x + 17)}{(x + 17)(x + 13)} > 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{x^2 + 31x + 198}{(x + 17)(x + 13)} > 0$",
                  "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
                },
                {
                  "step": "$\\dfrac{(x + 22)(x + 9)}{(x + 17)(x + 13)} > 0$",
                  "reason": "Factoring a quadratic: $(x + 22)(x + 9)$ multiplies out to $x^2 + 31x + 198$."
                },
                {
                  "step": "The top is $0$ at $x = -22$ and $x = -9$, and the bottom is $0$ at $x = -17$ and $x = -13$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 22$ is $0$ at $-22$, $x + 9$ is $0$ at $-9$, $x + 17$ is $0$ at $-17$ and $x + 13$ is $0$ at $-13$."
                },
                {
                  "step": "On $x < -22$, $-22 < x < -17$, $-17 < x < -13$, $-13 < x < -9$ and $x > -9$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $-17$ and $-13$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-22$ and $-9$, so these numbers are left out.",
                  "reason": "Strict and nonstrict inequality: the sign $>$ is strict, and $0 > 0$ is false."
                },
                {
                  "step": "$(-\\infty, -22) \\cup (-17, -13) \\cup (-9, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{11}{x - 6} + 1 \\le \\dfrac{8}{x - 13}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "[-1, 6) U (13, 17]",
              "lines": [
                {
                  "step": "Solve $\\dfrac{11}{x - 6} + 1 \\le \\dfrac{8}{x - 13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{11}{x - 6} + 1 - \\dfrac{8}{x - 13} \\le 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{11(x - 13) + (x - 6)(x - 13) - 8(x - 6)}{(x - 6)(x - 13)} \\le 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{x^2 - 16x - 17}{(x - 6)(x - 13)} \\le 0$",
                  "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
                },
                {
                  "step": "$\\dfrac{(x + 1)(x - 17)}{(x - 6)(x - 13)} \\le 0$",
                  "reason": "Factoring a quadratic: $(x + 1)(x - 17)$ multiplies out to $x^2 - 16x - 17$."
                },
                {
                  "step": "The top is $0$ at $x = -1$ and $x = 17$, and the bottom is $0$ at $x = 6$ and $x = 13$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 1$ is $0$ at $-1$, $x - 17$ is $0$ at $17$, $x - 6$ is $0$ at $6$ and $x - 13$ is $0$ at $13$."
                },
                {
                  "step": "On $x < -1$, $-1 < x < 6$, $6 < x < 13$, $13 < x < 17$ and $x > 17$ the quotient is positive, negative, positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 4, 3, 2, 1 and 0, and the quotient is positive where that number is even. A quotient has the sign of the product of the same factors, since dividing by a negative number changes the sign in the same way as multiplying by one."
                },
                {
                  "step": "The bottom is $0$ at $6$ and $13$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "The top is $0$ at $-1$ and $17$, so these numbers are taken in.",
                  "reason": "Strict and nonstrict inequality: the sign $\\le$ allows equality, and $0 \\le 0$ is true."
                },
                {
                  "step": "$[-1, 6) \\cup (13, 17]$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $\\dfrac{7}{x - 22} + 1 < \\dfrac{4}{x - 14}$.",
            "lines": [
              {
                "step": "Solve $\\dfrac{7}{x - 22} + 1 < \\dfrac{4}{x - 14}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{7}{x - 22} + 1 - \\dfrac{4}{x - 14} < 0$",
                "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
              },
              {
                "step": "$\\dfrac{7(x - 14) + (x - 22)(x - 14) - 4(x - 22)}{(x - 22)(x - 14)} < 0$",
                "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
              },
              {
                "step": "$\\dfrac{x^2 - 33x + 298}{(x - 22)(x - 14)} < 0$",
                "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
              },
              {
                "step": "$(-33)^2 - 4 \\cdot 1 \\cdot 298 = -103$",
                "reason": "Discriminant $b^2 - 4ac$: the quadratic $x^2 - 33x + 298$ has $a = 1$, $b = -33$ and $c = 298$."
              },
              {
                "step": "The top $x^2 - 33x + 298$ is positive for every $x$, since it is $298$ at $x = 0$.",
                "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
              },
              {
                "step": "The bottom is $0$ at $x = 14$ and $x = 22$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x - 14$ is $0$ at $14$ and $x - 22$ is $0$ at $22$."
              },
              {
                "step": "On $x < 14$, $14 < x < 22$ and $x > 22$ the quotient is positive, negative and positive.",
                "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A positive top leaves the sign as it is, so the quotient has the sign of the bottom."
              },
              {
                "step": "The bottom is $0$ at $14$ and $22$, so these numbers are never solutions.",
                "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
              },
              {
                "step": "$(14, 22)$",
                "reason": "Union of intervals: the solutions are the numbers where the quotient is negative, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $\\dfrac{7}{x + 1} + 1 \\ge \\dfrac{4}{x + 22}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -22) U (-1, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{7}{x + 1} + 1 \\ge \\dfrac{4}{x + 22}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{7}{x + 1} + 1 - \\dfrac{4}{x + 22} \\ge 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{7(x + 22) + (x + 1)(x + 22) - 4(x + 1)}{(x + 1)(x + 22)} \\ge 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{x^2 + 26x + 172}{(x + 1)(x + 22)} \\ge 0$",
                  "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
                },
                {
                  "step": "$26^2 - 4 \\cdot 1 \\cdot 172 = -12$",
                  "reason": "Discriminant $b^2 - 4ac$: the quadratic $x^2 + 26x + 172$ has $a = 1$, $b = 26$ and $c = 172$."
                },
                {
                  "step": "The top $x^2 + 26x + 172$ is positive for every $x$, since it is $172$ at $x = 0$.",
                  "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
                },
                {
                  "step": "The bottom is $0$ at $x = -22$ and $x = -1$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 22$ is $0$ at $-22$ and $x + 1$ is $0$ at $-1$."
                },
                {
                  "step": "On $x < -22$, $-22 < x < -1$ and $x > -1$ the quotient is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A positive top leaves the sign as it is, so the quotient has the sign of the bottom."
                },
                {
                  "step": "The bottom is $0$ at $-22$ and $-1$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "$(-\\infty, -22) \\cup (-1, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{9}{x + 19} + 1 \\le \\dfrac{5}{x + 22}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-22, -19)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{9}{x + 19} + 1 \\le \\dfrac{5}{x + 22}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9}{x + 19} + 1 - \\dfrac{5}{x + 22} \\le 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{9(x + 22) + (x + 19)(x + 22) - 5(x + 19)}{(x + 19)(x + 22)} \\le 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{x^2 + 45x + 521}{(x + 19)(x + 22)} \\le 0$",
                  "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
                },
                {
                  "step": "$45^2 - 4 \\cdot 1 \\cdot 521 = -59$",
                  "reason": "Discriminant $b^2 - 4ac$: the quadratic $x^2 + 45x + 521$ has $a = 1$, $b = 45$ and $c = 521$."
                },
                {
                  "step": "The top $x^2 + 45x + 521$ is positive for every $x$, since it is $521$ at $x = 0$.",
                  "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
                },
                {
                  "step": "The bottom is $0$ at $x = -22$ and $x = -19$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 22$ is $0$ at $-22$ and $x + 19$ is $0$ at $-19$."
                },
                {
                  "step": "On $x < -22$, $-22 < x < -19$ and $x > -19$ the quotient is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A positive top leaves the sign as it is, so the quotient has the sign of the bottom."
                },
                {
                  "step": "The bottom is $0$ at $-22$ and $-19$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "$(-22, -19)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is negative or $0$, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            },
            {
              "prompt": "Solve $\\dfrac{5}{x + 4} + 1 > \\dfrac{11}{x + 20}$.",
              "form": "Answer as an interval, as in [-2, 5).",
              "answer": "(-inf, -20) U (-4, inf)",
              "lines": [
                {
                  "step": "Solve $\\dfrac{5}{x + 4} + 1 > \\dfrac{11}{x + 20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5}{x + 4} + 1 - \\dfrac{11}{x + 20} > 0$",
                  "reason": "Never multiply an inequality by an expression of unknown sign: each bottom is negative for some $x$, so the right side is taken from both sides instead, and taking the same number from both sides keeps the sign as it is."
                },
                {
                  "step": "$\\dfrac{5(x + 20) + (x + 4)(x + 20) - 11(x + 4)}{(x + 4)(x + 20)} > 0$",
                  "reason": "Single fraction: each term is written over the simplest common denominator, and the tops are combined over it."
                },
                {
                  "step": "$\\dfrac{x^2 + 18x + 136}{(x + 4)(x + 20)} > 0$",
                  "reason": "Multiplying out: each bracket is multiplied out, subtracting a bracket changes every sign in it, and collecting like terms leaves a top of degree two."
                },
                {
                  "step": "$18^2 - 4 \\cdot 1 \\cdot 136 = -220$",
                  "reason": "Discriminant $b^2 - 4ac$: the quadratic $x^2 + 18x + 136$ has $a = 1$, $b = 18$ and $c = 136$."
                },
                {
                  "step": "The top $x^2 + 18x + 136$ is positive for every $x$, since it is $136$ at $x = 0$.",
                  "reason": "A quadratic with no real root keeps one sign: the discriminant is negative, so the quadratic is never $0$, and its sign at one number is its sign everywhere."
                },
                {
                  "step": "The bottom is $0$ at $x = -20$ and $x = -4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and $x + 20$ is $0$ at $-20$ and $x + 4$ is $0$ at $-4$."
                },
                {
                  "step": "On $x < -20$, $-20 < x < -4$ and $x > -4$ the quotient is positive, negative and positive.",
                  "reason": "Sign table: each factor $ax + b$ with $a$ above $0$ is negative to the left of its zero and positive to the right, so from left to right the number of negative factors is 2, 1 and 0, and the quotient is positive where that number is even. A positive top leaves the sign as it is, so the quotient has the sign of the bottom."
                },
                {
                  "step": "The bottom is $0$ at $-20$ and $-4$, so these numbers are never solutions.",
                  "reason": "Values that make a denominator zero are never solutions: the quotient is not defined there, whatever the sign."
                },
                {
                  "step": "$(-\\infty, -20) \\cup (-4, \\infty)$",
                  "reason": "Union of intervals: the solutions are the numbers where the quotient is positive, ends included or left out as the lines before say; in interval notation a square bracket takes its end in, a round bracket leaves it out, and the parts are joined by $\\cup$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t155-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\dfrac{4}{x - 5} \\le \\dfrac{9}{x + 6}$, and write that line right by taking the right side from both sides.",
            "given": [
              "$\\dfrac{4}{x - 5} \\le \\dfrac{9}{x + 6}$",
              "$4(x + 6) \\le 9(x - 5)$",
              "$4x + 24 \\le 9x - 45$",
              "$-5x \\le -69$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\dfrac{4}{x - 5} \\le \\dfrac{9}{x + 6}$, and write that line right by taking the right side from both sides.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 multiplies both sides of line 1 by $(x - 5)(x + 6)$ and keeps the sign $\\le$.",
                "reason": "Never multiply an inequality by an expression of unknown sign: $(x - 5)(x + 6)$ is negative for some $x$, and there the sign would have to be reversed."
              },
              {
                "step": "Taking the right side of line 1 from both sides keeps every fraction and the sign $\\le$ as they are.",
                "reason": "Adding the same number: for each $x$ the right side is a number, and taking it from both sides keeps the sign as it is."
              },
              {
                "step": "Line 2 written right is $\\dfrac{4}{x - 5} - \\dfrac{9}{x + 6} \\le 0$.",
                "reason": "Each side of the line before it has the same thing done to it, and no side is multiplied by an expression of unknown sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{5x + 11}{x - 5} < 7$, and write that line right by taking the right side from both sides.",
              "given": [
                "$\\dfrac{5x + 11}{x - 5} < 7$",
                "$5x + 11 < 7(x - 5)$",
                "$5x + 11 < 7x - 35$",
                "$-2x < -46$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (5*x+11)/(x-5)-7 < 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{5x + 11}{x - 5} < 7$, and write that line right by taking the right side from both sides.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies both sides of line 1 by $x - 5$ and keeps the sign $<$.",
                  "reason": "Never multiply an inequality by an expression of unknown sign: $x - 5$ is negative for some $x$, and there the sign would have to be reversed."
                },
                {
                  "step": "Taking the right side of line 1 from both sides keeps every fraction and the sign $<$ as they are.",
                  "reason": "Adding the same number: for each $x$ the right side is a number, and taking it from both sides keeps the sign as it is."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{5x + 11}{x - 5} - 7 < 0$.",
                  "reason": "Each side of the line before it has the same thing done to it, and no side is multiplied by an expression of unknown sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{19}{x^2 - 81} \\le \\dfrac{5}{x - 9}$, and write that line right by taking the right side from both sides.",
              "given": [
                "$\\dfrac{19}{x^2 - 81} \\le \\dfrac{5}{x - 9}$",
                "$\\dfrac{19}{(x - 9)(x + 9)} \\le \\dfrac{5}{x - 9}$",
                "$19 \\le 5(x + 9)$",
                "$5x + 45 \\ge 19$",
                "$5x \\ge -26$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 19/((x-9)*(x+9))-5/(x-9) <= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{19}{x^2 - 81} \\le \\dfrac{5}{x - 9}$, and write that line right by taking the right side from both sides.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 multiplies both sides of line 2 by $(x - 9)(x + 9)$ and keeps the sign $\\le$.",
                  "reason": "Never multiply an inequality by an expression of unknown sign: $(x - 9)(x + 9)$ is negative for some $x$, and there the sign would have to be reversed."
                },
                {
                  "step": "Taking the right side of line 2 from both sides keeps every fraction and the sign $\\le$ as they are.",
                  "reason": "Adding the same number: for each $x$ the right side is a number, and taking it from both sides keeps the sign as it is."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{19}{(x - 9)(x + 9)} - \\dfrac{5}{x - 9} \\le 0$.",
                  "reason": "Each side of the line before it has the same thing done to it, and no side is multiplied by an expression of unknown sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{7}{x + 7} \\ge \\dfrac{11}{x - 7}$, and write that line right by taking the right side from both sides.",
              "given": [
                "$\\dfrac{7}{x + 7} \\ge \\dfrac{11}{x - 7}$",
                "$7(x - 7) \\ge 11(x + 7)$",
                "$7x - 49 \\ge 11x + 77$",
                "$-4x \\ge 126$",
                "$x \\le -\\dfrac{63}{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 7/(x+7)-11/(x-7) >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{7}{x + 7} \\ge \\dfrac{11}{x - 7}$, and write that line right by taking the right side from both sides.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 multiplies both sides of line 1 by $(x + 7)(x - 7)$ and keeps the sign $\\ge$.",
                  "reason": "Never multiply an inequality by an expression of unknown sign: $(x + 7)(x - 7)$ is negative for some $x$, and there the sign would have to be reversed."
                },
                {
                  "step": "Taking the right side of line 1 from both sides keeps every fraction and the sign $\\ge$ as they are.",
                  "reason": "Adding the same number: for each $x$ the right side is a number, and taking it from both sides keeps the sign as it is."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{7}{x + 7} - \\dfrac{11}{x - 7} \\ge 0$.",
                  "reason": "Each side of the line before it has the same thing done to it, and no side is multiplied by an expression of unknown sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $\\dfrac{7}{x + 5} > \\dfrac{6}{x + 2}$, and write that line right.",
            "given": [
              "$\\dfrac{7}{x + 5} > \\dfrac{6}{x + 2}$",
              "$\\dfrac{7}{x + 5} - \\dfrac{6}{x + 2} > 0$",
              "$\\dfrac{7x + 14 - 6x + 30}{(x + 5)(x + 2)} > 0$",
              "$\\dfrac{x + 44}{(x + 5)(x + 2)} > 0$",
              "The top is $0$ at $x = -44$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $\\dfrac{7}{x + 5} > \\dfrac{6}{x + 2}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 takes away $6(x + 5)$ but changes the sign of its first term only.",
                "reason": "Subtracting a bracket changes every sign in it, so the number term of the bracket changes sign too."
              },
              {
                "step": "Taking away $6(x + 5)$ with every sign changed gives the top $7x + 14 - 6x - 30$.",
                "reason": "Multiplying out: the number in front multiplies each term of the bracket, and the minus sign in front changes each sign."
              },
              {
                "step": "Line 3 written right is $\\dfrac{7x + 14 - 6x - 30}{(x + 5)(x + 2)} > 0$.",
                "reason": "Subtracting a bracket changes every sign in it, and the rest of the line is kept as it is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{8}{x - 2} > \\dfrac{7}{x + 9}$, and write that line right.",
              "given": [
                "$\\dfrac{8}{x - 2} > \\dfrac{7}{x + 9}$",
                "$\\dfrac{8}{x - 2} - \\dfrac{7}{x + 9} > 0$",
                "$\\dfrac{8(x + 9) - 7(x - 2)}{(x - 2)(x + 9)} > 0$",
                "$\\dfrac{8x + 72 - 7x - 14}{(x - 2)(x + 9)} > 0$",
                "$\\dfrac{x + 58}{(x - 2)(x + 9)} > 0$",
                "The top is $0$ at $x = -58$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (8*x+72-7*x+14)/((x-2)*(x+9)) > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{8}{x - 2} > \\dfrac{7}{x + 9}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes away $7(x - 2)$ but changes the sign of its first term only.",
                  "reason": "Subtracting a bracket changes every sign in it, so the number term of the bracket changes sign too."
                },
                {
                  "step": "Taking away $7(x - 2)$ with every sign changed gives the top $8x + 72 - 7x + 14$.",
                  "reason": "Multiplying out: the number in front multiplies each term of the bracket, and the minus sign in front changes each sign."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{8x + 72 - 7x + 14}{(x - 2)(x + 9)} > 0$.",
                  "reason": "Subtracting a bracket changes every sign in it, and the rest of the line is kept as it is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{8}{x - 6} > \\dfrac{3}{x - 5}$, and write that line right.",
              "given": [
                "$\\dfrac{8}{x - 6} > \\dfrac{3}{x - 5}$",
                "$\\dfrac{8}{x - 6} - \\dfrac{3}{x - 5} > 0$",
                "$\\dfrac{8x - 40 - 3x - 18}{(x - 6)(x - 5)} > 0$",
                "$\\dfrac{5x - 58}{(x - 6)(x - 5)} > 0$",
                "The top is $0$ at $x = \\dfrac{58}{5}$.",
                "The bottom is $0$ at $x = 6$ and $x = 5$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (8*x-40-3*x+18)/((x-6)*(x-5)) > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{8}{x - 6} > \\dfrac{3}{x - 5}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes away $3(x - 6)$ but changes the sign of its first term only.",
                  "reason": "Subtracting a bracket changes every sign in it, so the number term of the bracket changes sign too."
                },
                {
                  "step": "Taking away $3(x - 6)$ with every sign changed gives the top $8x - 40 - 3x + 18$.",
                  "reason": "Multiplying out: the number in front multiplies each term of the bracket, and the minus sign in front changes each sign."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{8x - 40 - 3x + 18}{(x - 6)(x - 5)} > 0$.",
                  "reason": "Subtracting a bracket changes every sign in it, and the rest of the line is kept as it is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $\\dfrac{11}{x - 1} \\ge \\dfrac{5}{x + 7}$, and write that line right.",
              "given": [
                "$\\dfrac{11}{x - 1} \\ge \\dfrac{5}{x + 7}$",
                "$\\dfrac{11}{x - 1} - \\dfrac{5}{x + 7} \\ge 0$",
                "$\\dfrac{11(x + 7) - 5(x - 1)}{(x - 1)(x + 7)} \\ge 0$",
                "$\\dfrac{11x + 77 - 5x - 5}{(x - 1)(x + 7)} \\ge 0$",
                "$\\dfrac{6x + 72}{(x - 1)(x + 7)} \\ge 0$",
                "The top is $0$ at $x = -12$.",
                "The bottom is $0$ at $x = 1$ and $x = -7$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (11*x+77-5*x+5)/((x-1)*(x+7)) >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $\\dfrac{11}{x - 1} \\ge \\dfrac{5}{x + 7}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 takes away $5(x - 1)$ but changes the sign of its first term only.",
                  "reason": "Subtracting a bracket changes every sign in it, so the number term of the bracket changes sign too."
                },
                {
                  "step": "Taking away $5(x - 1)$ with every sign changed gives the top $11x + 77 - 5x + 5$.",
                  "reason": "Multiplying out: the number in front multiplies each term of the bracket, and the minus sign in front changes each sign."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{11x + 77 - 5x + 5}{(x - 1)(x + 7)} \\ge 0$.",
                  "reason": "Subtracting a bracket changes every sign in it, and the rest of the line is kept as it is."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t155-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the numbers $x$ with $x \\le -20$ or $x \\ge -18$ on a number line.",
            "lines": [
              {
                "step": "Sketch the numbers $x$ with $x \\le -20$ or $x \\ge -18$ on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The end $-20$ takes a filled dot and the end $-18$ takes a filled dot.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
              },
              {
                "step": "The line is shaded to the left of $-20$ and to the right of $-18$.",
                "reason": "Union of intervals: a number is in the set when it makes one of the inequalities true, so each part is shaded.",
                "figure": {
                  "file": "polynomial-and-rational-inequalities-1.svg",
                  "alt": "A number line with a filled dot at −20 and a filled dot at −18, and the line shaded to the left of −20 and to the right of −18."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the numbers $x$ with $x < -32$ or $x > -22$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-32$",
                  "shaded to the left of $-32$",
                  "open circle at $-22$",
                  "shaded to the right of $-22$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers $x$ with $x < -32$ or $x > -22$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-32$ takes an open circle and the end $-22$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
                },
                {
                  "step": "The line is shaded to the left of $-32$ and to the right of $-22$.",
                  "reason": "Union of intervals: a number is in the set when it makes one of the inequalities true, so each part is shaded.",
                  "figure": {
                    "file": "polynomial-and-rational-inequalities-2.svg",
                    "alt": "A number line with an open circle at −32 and an open circle at −22, and the line shaded to the left of −32 and to the right of −22."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the numbers $x$ with $x < -34$ or $-26 \\le x < -22$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-34$",
                  "shaded to the left of $-34$",
                  "filled dot at $-26$",
                  "open circle at $-22$",
                  "shaded between $-26$ and $-22$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers $x$ with $x < -34$ or $-26 \\le x < -22$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-34$ takes an open circle and the end $-26$ takes a filled dot and the end $-22$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
                },
                {
                  "step": "The line is shaded to the left of $-34$ and between $-26$ and $-22$.",
                  "reason": "Union of intervals: a number is in the set when it makes one of the inequalities true, so each part is shaded.",
                  "figure": {
                    "file": "polynomial-and-rational-inequalities-3.svg",
                    "alt": "A number line with an open circle at −34, a filled dot at −26 and an open circle at −22, and the line shaded to the left of −34 and between −26 and −22."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the numbers $x$ with $0 < x \\le 6$ or $10 \\le x \\le 14$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $0$",
                  "filled dot at $6$",
                  "shaded between $0$ and $6$",
                  "filled dot at $10$",
                  "filled dot at $14$",
                  "shaded between $10$ and $14$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers $x$ with $0 < x \\le 6$ or $10 \\le x \\le 14$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $0$ takes an open circle and the end $6$ takes a filled dot and the end $10$ takes a filled dot and the end $14$ takes a filled dot.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
                },
                {
                  "step": "The line is shaded between $0$ and $6$ and between $10$ and $14$.",
                  "reason": "Union of intervals: a number is in the set when it makes one of the inequalities true, so each part is shaded.",
                  "figure": {
                    "file": "polynomial-and-rational-inequalities-4.svg",
                    "alt": "A number line with an open circle at 0, a filled dot at 6, a filled dot at 10 and a filled dot at 14, and the line shaded between 0 and 6 and between 10 and 14."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the numbers of the set $(-26, -24] \\cup [-14, \\infty)$ on a number line.",
            "lines": [
              {
                "step": "Sketch the numbers of the set $(-26, -24] \\cup [-14, \\infty)$ on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The set holds the numbers $x$ with $-26 < x \\le -24$ or $x \\ge -14$.",
                "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins the parts."
              },
              {
                "step": "The end $-26$ takes an open circle and the end $-24$ takes a filled dot and the end $-14$ takes a filled dot.",
                "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
              },
              {
                "step": "The line is shaded between $-26$ and $-24$ and to the right of $-14$.",
                "reason": "Union of intervals: a number is in the set when it lies in one of the parts, so each part is shaded.",
                "figure": {
                  "file": "polynomial-and-rational-inequalities-12.svg",
                  "alt": "A number line with an open circle at −26, a filled dot at −24 and a filled dot at −14, and the line shaded between −26 and −24 and to the right of −14."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the numbers of the set $(-\\infty, -22) \\cup [-20, -14)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-22$",
                  "shaded to the left of $-22$",
                  "filled dot at $-20$",
                  "open circle at $-14$",
                  "shaded between $-20$ and $-14$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers of the set $(-\\infty, -22) \\cup [-20, -14)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The set holds the numbers $x$ with $x < -22$ or $-20 \\le x < -14$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins the parts."
                },
                {
                  "step": "The end $-22$ takes an open circle and the end $-20$ takes a filled dot and the end $-14$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
                },
                {
                  "step": "The line is shaded to the left of $-22$ and between $-20$ and $-14$.",
                  "reason": "Union of intervals: a number is in the set when it lies in one of the parts, so each part is shaded.",
                  "figure": {
                    "file": "polynomial-and-rational-inequalities-13.svg",
                    "alt": "A number line with an open circle at −22, a filled dot at −20 and an open circle at −14, and the line shaded to the left of −22 and between −20 and −14."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the numbers of the set $(18, 24) \\cup [26, 28)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $18$",
                  "open circle at $24$",
                  "shaded between $18$ and $24$",
                  "filled dot at $26$",
                  "open circle at $28$",
                  "shaded between $26$ and $28$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers of the set $(18, 24) \\cup [26, 28)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The set holds the numbers $x$ with $18 < x < 24$ or $26 \\le x < 28$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins the parts."
                },
                {
                  "step": "The end $18$ takes an open circle and the end $24$ takes an open circle and the end $26$ takes a filled dot and the end $28$ takes an open circle.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
                },
                {
                  "step": "The line is shaded between $18$ and $24$ and between $26$ and $28$.",
                  "reason": "Union of intervals: a number is in the set when it lies in one of the parts, so each part is shaded.",
                  "figure": {
                    "file": "polynomial-and-rational-inequalities-14.svg",
                    "alt": "A number line with an open circle at 18, an open circle at 24, a filled dot at 26 and an open circle at 28, and the line shaded between 18 and 24 and between 26 and 28."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the numbers of the set $[24, 28) \\cup [36, \\infty)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $24$",
                  "open circle at $28$",
                  "shaded between $24$ and $28$",
                  "filled dot at $36$",
                  "shaded to the right of $36$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the numbers of the set $[24, 28) \\cup [36, \\infty)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The set holds the numbers $x$ with $24 \\le x < 28$ or $x \\ge 36$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins the parts."
                },
                {
                  "step": "The end $24$ takes a filled dot and the end $28$ takes an open circle and the end $36$ takes a filled dot.",
                  "reason": "Open circle and filled dot on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not; a sign with \"or equal\" or a square bracket takes the end in."
                },
                {
                  "step": "The line is shaded between $24$ and $28$ and to the right of $36$.",
                  "reason": "Union of intervals: a number is in the set when it lies in one of the parts, so each part is shaded.",
                  "figure": {
                    "file": "polynomial-and-rational-inequalities-15.svg",
                    "alt": "A number line with a filled dot at 24, an open circle at 28 and a filled dot at 36, and the line shaded between 24 and 28 and to the right of 36."
                  }
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
