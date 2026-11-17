export default {
  "number": 154,
  "title": "Quadratic inequalities",
  "section": 9,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "280-285, 425-430, 446-450"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Solve $3x^2 + 13x + 9 \\le 2x + 23$.",
    "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
    "answer": "-14/3 <= x <= 1",
    "solution": [
      "Solve $3x^2 + 13x + 9 \\le 2x + 23$.",
      "$3x^2 + 11x - 14 \\le 0$",
      "$(3x + 14)(x - 1) \\le 0$",
      "The factor $3x + 14$ is $0$ at $x = -\\dfrac{14}{3}$, and $x - 1$ is $0$ at $x = 1$.",
      "For $x < -\\dfrac{14}{3}$ both factors are negative, for $-\\dfrac{14}{3} < x < 1$ only $3x + 14$ is positive, and for $x > 1$ both are positive.",
      "$-\\dfrac{14}{3} \\le x \\le 1$"
    ]
  },
  "ideas": [
    {
      "name": "A product is positive when its factors have the same sign and negative when they differ",
      "concrete": "At $x = 6$ the factors of $(3x + 10)(x - 4)$ are $28$ and $2$, both positive, and the product is $56$; at $x = 0$ they are $10$ and $-4$, of different signs, and the product is $-40$; at $x = -5$ they are $-5$ and $-9$, both negative, and the product is $45$.",
      "general": "For real numbers $a$ and $b$, the product $ab$ is positive when $a$ and $b$ are both positive or both negative, and negative when one is positive and the other negative. A quadratic compared with $0$ is solved by moving every term to one side, factoring, and reading the sign of each factor on each side of its root."
    },
    {
      "name": "Union of intervals",
      "concrete": "The numbers with $x \\le -6$ or $x > 1$ form two rays, $(-\\infty, -6]$ and $(1, \\infty)$; together they are $(-\\infty, -6] \\cup (1, \\infty)$, and $-6$ is in it while $1$ is not.",
      "general": "The **union** of two intervals is the set of numbers in one interval or the other, or both, written with $\\cup$ between them. A solution set made of two parts is written as a union, or as two inequalities joined by \"or\"."
    },
    {
      "name": "A quadratic with no real root keeps one sign",
      "concrete": "The quadratic $x^2 + 8x + 19$ has discriminant $64 - 76 = -12$, so it has no real root. Completing the square gives $(x + 4)^2 + 3$, which is at least $3$, so the quadratic is positive for every real $x$.",
      "general": "For real numbers $a$, $b$ and $c$ with $a \\ne 0$ and $b^2 - 4ac < 0$, the quadratic $ax^2 + bx + c$ has the sign of $a$ for every real $x$: positive for every $x$ when $a > 0$, negative for every $x$ when $a < 0$."
    }
  ],
  "kinds": [
    {
      "id": "t154-k1",
      "forms": [
        {
          "example": {
            "problem": "Solve $(5x + 2)(x + 11) \\le 0$.",
            "lines": [
              {
                "step": "Solve $(5x + 2)(x + 11) \\le 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The factor $x + 11$ is $0$ at $x = -11$, and $5x + 2$ is $0$ at $x = -\\dfrac{2}{5}$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "For $x < -11$ both factors are negative, for $-11 < x < -\\dfrac{2}{5}$ only $x + 11$ is positive, and for $x > -\\dfrac{2}{5}$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(5x + 2)(x + 11)$ is negative between the roots."
              },
              {
                "step": "$-11 \\le x \\le -\\dfrac{2}{5}$",
                "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-11$ and $-\\dfrac{2}{5}$, and the sign allows equality, so the roots are taken in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x + 10)(3x - 8) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-10/3 < x < 8/3",
              "lines": [
                {
                  "step": "Solve $(3x + 10)(3x - 8) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factor $3x + 10$ is $0$ at $x = -\\dfrac{10}{3}$, and $3x - 8$ is $0$ at $x = \\dfrac{8}{3}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -\\dfrac{10}{3}$ both factors are negative, for $-\\dfrac{10}{3} < x < \\dfrac{8}{3}$ only $3x + 10$ is positive, and for $x > \\dfrac{8}{3}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(3x + 10)(3x - 8)$ is negative between the roots."
                },
                {
                  "step": "$-\\dfrac{10}{3} < x < \\dfrac{8}{3}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-\\dfrac{10}{3}$ and $\\dfrac{8}{3}$, and the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $(4x + 9)(5x + 14) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-14/5 < x < -9/4",
              "lines": [
                {
                  "step": "Solve $(4x + 9)(5x + 14) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factor $5x + 14$ is $0$ at $x = -\\dfrac{14}{5}$, and $4x + 9$ is $0$ at $x = -\\dfrac{9}{4}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -\\dfrac{14}{5}$ both factors are negative, for $-\\dfrac{14}{5} < x < -\\dfrac{9}{4}$ only $5x + 14$ is positive, and for $x > -\\dfrac{9}{4}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(4x + 9)(5x + 14)$ is negative between the roots."
                },
                {
                  "step": "$-\\dfrac{14}{5} < x < -\\dfrac{9}{4}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-\\dfrac{14}{5}$ and $-\\dfrac{9}{4}$, and the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $(2x - 15)(5x - 2) < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "2/5 < x < 15/2",
              "lines": [
                {
                  "step": "Solve $(2x - 15)(5x - 2) < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factor $5x - 2$ is $0$ at $x = \\dfrac{2}{5}$, and $2x - 15$ is $0$ at $x = \\dfrac{15}{2}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < \\dfrac{2}{5}$ both factors are negative, for $\\dfrac{2}{5} < x < \\dfrac{15}{2}$ only $5x - 2$ is positive, and for $x > \\dfrac{15}{2}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(2x - 15)(5x - 2)$ is negative between the roots."
                },
                {
                  "step": "$\\dfrac{2}{5} < x < \\dfrac{15}{2}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $\\dfrac{2}{5}$ and $\\dfrac{15}{2}$, and the sign is strict, so the roots are left out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $(3x - 14)(5x + 8) > 0$.",
            "lines": [
              {
                "step": "Solve $(3x - 14)(5x + 8) > 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The factor $5x + 8$ is $0$ at $x = -\\dfrac{8}{5}$, and $3x - 14$ is $0$ at $x = \\dfrac{14}{3}$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "For $x < -\\dfrac{8}{5}$ both factors are negative, for $-\\dfrac{8}{5} < x < \\dfrac{14}{3}$ only $5x + 8$ is positive, and for $x > \\dfrac{14}{3}$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(3x - 14)(5x + 8)$ is positive below the smaller root and above the larger one."
              },
              {
                "step": "So $x < -\\dfrac{8}{5}$ or $x > \\dfrac{14}{3}$.",
                "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $(3x - 10)(x - 14) \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= 10/3 or x >= 14",
              "lines": [
                {
                  "step": "Solve $(3x - 10)(x - 14) \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factor $3x - 10$ is $0$ at $x = \\dfrac{10}{3}$, and $x - 14$ is $0$ at $x = 14$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < \\dfrac{10}{3}$ both factors are negative, for $\\dfrac{10}{3} < x < 14$ only $3x - 10$ is positive, and for $x > 14$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(3x - 10)(x - 14)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le \\dfrac{10}{3}$ or $x \\ge 14$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Solve $(2x + 5)(x - 9) > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -5/2 or x > 9",
              "lines": [
                {
                  "step": "Solve $(2x + 5)(x - 9) > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factor $2x + 5$ is $0$ at $x = -\\dfrac{5}{2}$, and $x - 9$ is $0$ at $x = 9$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -\\dfrac{5}{2}$ both factors are negative, for $-\\dfrac{5}{2} < x < 9$ only $2x + 5$ is positive, and for $x > 9$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(2x + 5)(x - 9)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x < -\\dfrac{5}{2}$ or $x > 9$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $(5x - 4)(x + 15) \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -15 or x >= 4/5",
              "lines": [
                {
                  "step": "Solve $(5x - 4)(x + 15) \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The factor $x + 15$ is $0$ at $x = -15$, and $5x - 4$ is $0$ at $x = \\dfrac{4}{5}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -15$ both factors are negative, for $-15 < x < \\dfrac{4}{5}$ only $x + 15$ is positive, and for $x > \\dfrac{4}{5}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(5x - 4)(x + 15)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le -15$ or $x \\ge \\dfrac{4}{5}$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $6x^2 - 62x + 106 < -7x + 2$.",
            "lines": [
              {
                "step": "Solve $6x^2 - 62x + 106 < -7x + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$6x^2 - 55x + 104 < 0$",
                "reason": "Adding the same number to both sides: $-7x$ and $2$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
              },
              {
                "step": "$(2x - 13)(3x - 8) < 0$",
                "reason": "Factoring a quadratic: $(2x - 13)(3x - 8)$ multiplied out gives $6x^2$, $-16x + (-39)x = -55x$ and $104$."
              },
              {
                "step": "The factor $3x - 8$ is $0$ at $x = \\dfrac{8}{3}$, and $2x - 13$ is $0$ at $x = \\dfrac{13}{2}$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "For $x < \\dfrac{8}{3}$ both factors are negative, for $\\dfrac{8}{3} < x < \\dfrac{13}{2}$ only $3x - 8$ is positive, and for $x > \\dfrac{13}{2}$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(2x - 13)(3x - 8)$ is negative between the roots."
              },
              {
                "step": "$\\dfrac{8}{3} < x < \\dfrac{13}{2}$",
                "reason": "Strict and nonstrict inequality: the solutions are the numbers between $\\dfrac{8}{3}$ and $\\dfrac{13}{2}$, and the sign is strict, so the roots are left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $8x^2 + 15x - 49 \\le 9x - 22$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-9/4 <= x <= 3/2",
              "lines": [
                {
                  "step": "Solve $8x^2 + 15x - 49 \\le 9x - 22$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8x^2 + 6x - 27 \\le 0$",
                  "reason": "Adding the same number to both sides: $9x$ and $-22$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
                },
                {
                  "step": "$(4x + 9)(2x - 3) \\le 0$",
                  "reason": "Factoring a quadratic: $(4x + 9)(2x - 3)$ multiplied out gives $8x^2$, $-12x + 18x = 6x$ and $-27$."
                },
                {
                  "step": "The factor $4x + 9$ is $0$ at $x = -\\dfrac{9}{4}$, and $2x - 3$ is $0$ at $x = \\dfrac{3}{2}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -\\dfrac{9}{4}$ both factors are negative, for $-\\dfrac{9}{4} < x < \\dfrac{3}{2}$ only $4x + 9$ is positive, and for $x > \\dfrac{3}{2}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(4x + 9)(2x - 3)$ is negative between the roots."
                },
                {
                  "step": "$-\\dfrac{9}{4} \\le x \\le \\dfrac{3}{2}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-\\dfrac{9}{4}$ and $\\dfrac{3}{2}$, and the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Solve $2x^2 + 31x + 54 < -2x + 9$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-15 < x < -3/2",
              "lines": [
                {
                  "step": "Solve $2x^2 + 31x + 54 < -2x + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 + 33x + 45 < 0$",
                  "reason": "Adding the same number to both sides: $-2x$ and $9$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
                },
                {
                  "step": "$(2x + 3)(x + 15) < 0$",
                  "reason": "Factoring a quadratic: $(2x + 3)(x + 15)$ multiplied out gives $2x^2$, $30x + 3x = 33x$ and $45$."
                },
                {
                  "step": "The factor $x + 15$ is $0$ at $x = -15$, and $2x + 3$ is $0$ at $x = -\\dfrac{3}{2}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -15$ both factors are negative, for $-15 < x < -\\dfrac{3}{2}$ only $x + 15$ is positive, and for $x > -\\dfrac{3}{2}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(2x + 3)(x + 15)$ is negative between the roots."
                },
                {
                  "step": "$-15 < x < -\\dfrac{3}{2}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-15$ and $-\\dfrac{3}{2}$, and the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $9x^2 - 23x + 49 < 4x + 29$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "4/3 < x < 5/3",
              "lines": [
                {
                  "step": "Solve $9x^2 - 23x + 49 < 4x + 29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x^2 - 27x + 20 < 0$",
                  "reason": "Adding the same number to both sides: $4x$ and $29$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
                },
                {
                  "step": "$(3x - 5)(3x - 4) < 0$",
                  "reason": "Factoring a quadratic: $(3x - 5)(3x - 4)$ multiplied out gives $9x^2$, $-12x + (-15)x = -27x$ and $20$."
                },
                {
                  "step": "The factor $3x - 4$ is $0$ at $x = \\dfrac{4}{3}$, and $3x - 5$ is $0$ at $x = \\dfrac{5}{3}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < \\dfrac{4}{3}$ both factors are negative, for $\\dfrac{4}{3} < x < \\dfrac{5}{3}$ only $3x - 4$ is positive, and for $x > \\dfrac{5}{3}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(3x - 5)(3x - 4)$ is negative between the roots."
                },
                {
                  "step": "$\\dfrac{4}{3} < x < \\dfrac{5}{3}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $\\dfrac{4}{3}$ and $\\dfrac{5}{3}$, and the sign is strict, so the roots are left out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $10x^2 + 9x - 52 \\ge -16$.",
            "lines": [
              {
                "step": "Solve $10x^2 + 9x - 52 \\ge -16$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$10x^2 + 9x - 36 \\ge 0$",
                "reason": "Adding the same number to both sides: $-16$ is taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
              },
              {
                "step": "$(2x - 3)(5x + 12) \\ge 0$",
                "reason": "Factoring a quadratic: $(2x - 3)(5x + 12)$ multiplied out gives $10x^2$, $24x + (-15)x = 9x$ and $-36$."
              },
              {
                "step": "The factor $5x + 12$ is $0$ at $x = -\\dfrac{12}{5}$, and $2x - 3$ is $0$ at $x = \\dfrac{3}{2}$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "For $x < -\\dfrac{12}{5}$ both factors are negative, for $-\\dfrac{12}{5} < x < \\dfrac{3}{2}$ only $5x + 12$ is positive, and for $x > \\dfrac{3}{2}$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(2x - 3)(5x + 12)$ is positive below the smaller root and above the larger one."
              },
              {
                "step": "So $x \\le -\\dfrac{12}{5}$ or $x \\ge \\dfrac{3}{2}$.",
                "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $6x^2 - 12x - 38 > 5x + 7$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -5/3 or x > 9/2",
              "lines": [
                {
                  "step": "Solve $6x^2 - 12x - 38 > 5x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x^2 - 17x - 45 > 0$",
                  "reason": "Adding the same number to both sides: $5x$ and $7$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
                },
                {
                  "step": "$(2x - 9)(3x + 5) > 0$",
                  "reason": "Factoring a quadratic: $(2x - 9)(3x + 5)$ multiplied out gives $6x^2$, $10x + (-27)x = -17x$ and $-45$."
                },
                {
                  "step": "The factor $3x + 5$ is $0$ at $x = -\\dfrac{5}{3}$, and $2x - 9$ is $0$ at $x = \\dfrac{9}{2}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -\\dfrac{5}{3}$ both factors are negative, for $-\\dfrac{5}{3} < x < \\dfrac{9}{2}$ only $3x + 5$ is positive, and for $x > \\dfrac{9}{2}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(2x - 9)(3x + 5)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x < -\\dfrac{5}{3}$ or $x > \\dfrac{9}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $2x^2 - 18x + 39 > -7x + 30$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < 1 or x > 9/2",
              "lines": [
                {
                  "step": "Solve $2x^2 - 18x + 39 > -7x + 30$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 11x + 9 > 0$",
                  "reason": "Adding the same number to both sides: $-7x$ and $30$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
                },
                {
                  "step": "$(x - 1)(2x - 9) > 0$",
                  "reason": "Factoring a quadratic: $(x - 1)(2x - 9)$ multiplied out gives $2x^2$, $-9x + (-2)x = -11x$ and $9$."
                },
                {
                  "step": "The factor $x - 1$ is $0$ at $x = 1$, and $2x - 9$ is $0$ at $x = \\dfrac{9}{2}$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < 1$ both factors are negative, for $1 < x < \\dfrac{9}{2}$ only $x - 1$ is positive, and for $x > \\dfrac{9}{2}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - 1)(2x - 9)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x < 1$ or $x > \\dfrac{9}{2}$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $5x^2 - 22x - 117 \\ge 7x - 29$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -11/5 or x >= 8",
              "lines": [
                {
                  "step": "Solve $5x^2 - 22x - 117 \\ge 7x - 29$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x^2 - 29x - 88 \\ge 0$",
                  "reason": "Adding the same number to both sides: $7x$ and $-29$ are taken from both sides and like terms collected, so every term stands on the left and the sign stays as it is."
                },
                {
                  "step": "$(5x + 11)(x - 8) \\ge 0$",
                  "reason": "Factoring a quadratic: $(5x + 11)(x - 8)$ multiplied out gives $5x^2$, $-40x + 11x = -29x$ and $-88$."
                },
                {
                  "step": "The factor $5x + 11$ is $0$ at $x = -\\dfrac{11}{5}$, and $x - 8$ is $0$ at $x = 8$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -\\dfrac{11}{5}$ both factors are negative, for $-\\dfrac{11}{5} < x < 8$ only $5x + 11$ is positive, and for $x > 8$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(5x + 11)(x - 8)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le -\\dfrac{11}{5}$ or $x \\ge 8$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $5x^2 - 2x + 33 < 0$.",
            "lines": [
              {
                "step": "Solve $5x^2 - 2x + 33 < 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-2)^2 - 4 \\cdot 5 \\cdot 33 = -656$",
                "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
              },
              {
                "step": "The quadratic has no real root.",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
              },
              {
                "step": "At $x = 0$ the quadratic is $33$, which is positive, so $5x^2 - 2x + 33$ is positive for every real $x$.",
                "reason": "A quadratic with no real root keeps one sign: its value at one number gives its sign at every number."
              },
              {
                "step": "So no real number is a solution.",
                "reason": "Answering the question asked: the inequality asks for a negative value, and the quadratic is positive everywhere."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $2x^2 + 14x + 29 > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "All",
              "lines": [
                {
                  "step": "Solve $2x^2 + 14x + 29 > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$14^2 - 4 \\cdot 2 \\cdot 29 = -36$",
                  "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
                },
                {
                  "step": "The quadratic has no real root.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "At $x = 0$ the quadratic is $29$, which is positive, so $2x^2 + 14x + 29$ is positive for every real $x$.",
                  "reason": "A quadratic with no real root keeps one sign: its value at one number gives its sign at every number."
                },
                {
                  "step": "So every real number is a solution.",
                  "reason": "Answering the question asked: the inequality asks for a positive value, and the quadratic is positive everywhere."
                }
              ]
            },
            {
              "prompt": "Solve $-5x^2 - 3x - 38 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "All",
              "lines": [
                {
                  "step": "Solve $-5x^2 - 3x - 38 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-3)^2 - 4 \\cdot (-5) \\cdot (-38) = -751$",
                  "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
                },
                {
                  "step": "The quadratic has no real root.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "At $x = 0$ the quadratic is $-38$, which is negative, so $-5x^2 - 3x - 38$ is negative for every real $x$.",
                  "reason": "A quadratic with no real root keeps one sign: its value at one number gives its sign at every number."
                },
                {
                  "step": "So every real number is a solution.",
                  "reason": "Answering the question asked: the inequality asks for a negative value or $0$, and the quadratic is negative everywhere."
                }
              ]
            },
            {
              "prompt": "Solve $-5x^2 + 12x - 37 > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "None",
              "lines": [
                {
                  "step": "Solve $-5x^2 + 12x - 37 > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$12^2 - 4 \\cdot (-5) \\cdot (-37) = -596$",
                  "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
                },
                {
                  "step": "The quadratic has no real root.",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "At $x = 0$ the quadratic is $-37$, which is negative, so $-5x^2 + 12x - 37$ is negative for every real $x$.",
                  "reason": "A quadratic with no real root keeps one sign: its value at one number gives its sign at every number."
                },
                {
                  "step": "So no real number is a solution.",
                  "reason": "Answering the question asked: the inequality asks for a positive value, and the quadratic is negative everywhere."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $49x^2 - 140x + 100 > 0$.",
            "lines": [
              {
                "step": "Solve $49x^2 - 140x + 100 > 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$49x^2 - 140x + 100 = (7x - 10)^2$",
                "reason": "Square of a binomial: $(7x)^2 = 49x^2$, $10^2 = 100$ and $2 \\cdot 7x \\cdot 10 = 140x$, so the quadratic is a perfect square."
              },
              {
                "step": "The square $(7x - 10)^2$ is above $0$ for every $x$ except $x = \\dfrac{10}{7}$, where $7x - 10 = 0$.",
                "reason": "Trivial Inequality: a square is at least $0$, and is $0$ only when the number squared is $0$."
              },
              {
                "step": "So $x < \\dfrac{10}{7}$ or $x > \\dfrac{10}{7}$.",
                "reason": "Answering the question asked: the inequality asks for a value above $0$, and the square is $0$ at $x = \\dfrac{10}{7}$ and positive at every other number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $25x^2 + 160x + 256 \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "All",
              "lines": [
                {
                  "step": "Solve $25x^2 + 160x + 256 \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$25x^2 + 160x + 256 = (5x + 16)^2$",
                  "reason": "Square of a binomial: $(5x)^2 = 25x^2$, $16^2 = 256$ and $2 \\cdot 5x \\cdot 16 = 160x$, so the quadratic is a perfect square."
                },
                {
                  "step": "The square $(5x + 16)^2$ is above $0$ for every $x$ except $x = -\\dfrac{16}{5}$, where $5x + 16 = 0$.",
                  "reason": "Trivial Inequality: a square is at least $0$, and is $0$ only when the number squared is $0$."
                },
                {
                  "step": "So every real number is a solution.",
                  "reason": "Answering the question asked: the inequality asks for a value of at least $0$, and the square is $0$ at $x = -\\dfrac{16}{5}$ and positive at every other number."
                }
              ]
            },
            {
              "prompt": "Solve $144x^2 + 456x + 361 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "None",
              "lines": [
                {
                  "step": "Solve $144x^2 + 456x + 361 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$144x^2 + 456x + 361 = (12x + 19)^2$",
                  "reason": "Square of a binomial: $(12x)^2 = 144x^2$, $19^2 = 361$ and $2 \\cdot 12x \\cdot 19 = 456x$, so the quadratic is a perfect square."
                },
                {
                  "step": "The square $(12x + 19)^2$ is above $0$ for every $x$ except $x = -\\dfrac{19}{12}$, where $12x + 19 = 0$.",
                  "reason": "Trivial Inequality: a square is at least $0$, and is $0$ only when the number squared is $0$."
                },
                {
                  "step": "So no real number is a solution.",
                  "reason": "Answering the question asked: the inequality asks for a value below $0$, and the square is $0$ at $x = -\\dfrac{19}{12}$ and positive at every other number."
                }
              ]
            },
            {
              "prompt": "Solve $16x^2 - 136x + 289 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x = 17/4",
              "lines": [
                {
                  "step": "Solve $16x^2 - 136x + 289 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16x^2 - 136x + 289 = (4x - 17)^2$",
                  "reason": "Square of a binomial: $(4x)^2 = 16x^2$, $17^2 = 289$ and $2 \\cdot 4x \\cdot 17 = 136x$, so the quadratic is a perfect square."
                },
                {
                  "step": "The square $(4x - 17)^2$ is above $0$ for every $x$ except $x = \\dfrac{17}{4}$, where $4x - 17 = 0$.",
                  "reason": "Trivial Inequality: a square is at least $0$, and is $0$ only when the number squared is $0$."
                },
                {
                  "step": "So $x = \\dfrac{17}{4}$ is the only solution.",
                  "reason": "Answering the question asked: the inequality asks for a value of at most $0$, and the square is $0$ at $x = \\dfrac{17}{4}$ and positive at every other number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^2 + 30x + 192 < 0$.",
            "lines": [
              {
                "step": "Solve $x^2 + 30x + 192 < 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$b^2 - 4ac = 132$",
                "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 30$ and $c = 192$, it is $30^2 - 4 \\cdot 192 = 132$."
              },
              {
                "step": "$x = \\dfrac{-30 \\pm \\sqrt{132}}{2}$",
                "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
              },
              {
                "step": "The roots are $x = -15 + \\sqrt{33}$ and $x = -15 - \\sqrt{33}$.",
                "reason": "Simplest radical form: $\\sqrt{132} = 2\\sqrt{33}$, and each term of the top is halved."
              },
              {
                "step": "$(x - (-15 + \\sqrt{33}))(x - (-15 - \\sqrt{33})) < 0$",
                "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
              },
              {
                "step": "For $x < -15 - \\sqrt{33}$ both factors are negative, for $-15 - \\sqrt{33} < x < -15 + \\sqrt{33}$ only $x - (-15 - \\sqrt{33})$ is positive, and for $x > -15 + \\sqrt{33}$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-15 + \\sqrt{33}))(x - (-15 - \\sqrt{33}))$ is negative between the roots."
              },
              {
                "step": "$-15 - \\sqrt{33} < x < -15 + \\sqrt{33}$",
                "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-15 - \\sqrt{33}$ and $-15 + \\sqrt{33}$, and the sign is strict, so the roots are left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^2 - 24x + 125 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "12-sqrt(19) <= x <= 12+sqrt(19)",
              "lines": [
                {
                  "step": "Solve $x^2 - 24x + 125 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 76$",
                  "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = -24$ and $c = 125$, it is $(-24)^2 - 4 \\cdot 125 = 76$."
                },
                {
                  "step": "$x = \\dfrac{24 \\pm \\sqrt{76}}{2}$",
                  "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
                },
                {
                  "step": "The roots are $x = 12 + \\sqrt{19}$ and $x = 12 - \\sqrt{19}$.",
                  "reason": "Simplest radical form: $\\sqrt{76} = 2\\sqrt{19}$, and each term of the top is halved."
                },
                {
                  "step": "$(x - (12 + \\sqrt{19}))(x - (12 - \\sqrt{19})) \\le 0$",
                  "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
                },
                {
                  "step": "For $x < 12 - \\sqrt{19}$ both factors are negative, for $12 - \\sqrt{19} < x < 12 + \\sqrt{19}$ only $x - (12 - \\sqrt{19})$ is positive, and for $x > 12 + \\sqrt{19}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (12 + \\sqrt{19}))(x - (12 - \\sqrt{19}))$ is negative between the roots."
                },
                {
                  "step": "$12 - \\sqrt{19} \\le x \\le 12 + \\sqrt{19}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $12 - \\sqrt{19}$ and $12 + \\sqrt{19}$, and the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Solve $x^2 + 28x + 179 < 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-14-sqrt(17) < x < -14+sqrt(17)",
              "lines": [
                {
                  "step": "Solve $x^2 + 28x + 179 < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 68$",
                  "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 28$ and $c = 179$, it is $28^2 - 4 \\cdot 179 = 68$."
                },
                {
                  "step": "$x = \\dfrac{-28 \\pm \\sqrt{68}}{2}$",
                  "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
                },
                {
                  "step": "The roots are $x = -14 + \\sqrt{17}$ and $x = -14 - \\sqrt{17}$.",
                  "reason": "Simplest radical form: $\\sqrt{68} = 2\\sqrt{17}$, and each term of the top is halved."
                },
                {
                  "step": "$(x - (-14 + \\sqrt{17}))(x - (-14 - \\sqrt{17})) < 0$",
                  "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
                },
                {
                  "step": "For $x < -14 - \\sqrt{17}$ both factors are negative, for $-14 - \\sqrt{17} < x < -14 + \\sqrt{17}$ only $x - (-14 - \\sqrt{17})$ is positive, and for $x > -14 + \\sqrt{17}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-14 + \\sqrt{17}))(x - (-14 - \\sqrt{17}))$ is negative between the roots."
                },
                {
                  "step": "$-14 - \\sqrt{17} < x < -14 + \\sqrt{17}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-14 - \\sqrt{17}$ and $-14 + \\sqrt{17}$, and the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $x^2 + 32x + 233 \\le 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-16-sqrt(23) <= x <= -16+sqrt(23)",
              "lines": [
                {
                  "step": "Solve $x^2 + 32x + 233 \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 92$",
                  "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 32$ and $c = 233$, it is $32^2 - 4 \\cdot 233 = 92$."
                },
                {
                  "step": "$x = \\dfrac{-32 \\pm \\sqrt{92}}{2}$",
                  "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
                },
                {
                  "step": "The roots are $x = -16 + \\sqrt{23}$ and $x = -16 - \\sqrt{23}$.",
                  "reason": "Simplest radical form: $\\sqrt{92} = 2\\sqrt{23}$, and each term of the top is halved."
                },
                {
                  "step": "$(x - (-16 + \\sqrt{23}))(x - (-16 - \\sqrt{23})) \\le 0$",
                  "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
                },
                {
                  "step": "For $x < -16 - \\sqrt{23}$ both factors are negative, for $-16 - \\sqrt{23} < x < -16 + \\sqrt{23}$ only $x - (-16 - \\sqrt{23})$ is positive, and for $x > -16 + \\sqrt{23}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-16 + \\sqrt{23}))(x - (-16 - \\sqrt{23}))$ is negative between the roots."
                },
                {
                  "step": "$-16 - \\sqrt{23} \\le x \\le -16 + \\sqrt{23}$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-16 - \\sqrt{23}$ and $-16 + \\sqrt{23}$, and the sign allows equality, so the roots are taken in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $x^2 + 20x + 62 > 0$.",
            "lines": [
              {
                "step": "Solve $x^2 + 20x + 62 > 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$b^2 - 4ac = 152$",
                "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 20$ and $c = 62$, it is $20^2 - 4 \\cdot 62 = 152$."
              },
              {
                "step": "$x = \\dfrac{-20 \\pm \\sqrt{152}}{2}$",
                "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
              },
              {
                "step": "The roots are $x = -10 + \\sqrt{38}$ and $x = -10 - \\sqrt{38}$.",
                "reason": "Simplest radical form: $\\sqrt{152} = 2\\sqrt{38}$, and each term of the top is halved."
              },
              {
                "step": "$(x - (-10 + \\sqrt{38}))(x - (-10 - \\sqrt{38})) > 0$",
                "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
              },
              {
                "step": "For $x < -10 - \\sqrt{38}$ both factors are negative, for $-10 - \\sqrt{38} < x < -10 + \\sqrt{38}$ only $x - (-10 - \\sqrt{38})$ is positive, and for $x > -10 + \\sqrt{38}$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-10 + \\sqrt{38}))(x - (-10 - \\sqrt{38}))$ is positive below the smaller root and above the larger one."
              },
              {
                "step": "So $x < -10 - \\sqrt{38}$ or $x > -10 + \\sqrt{38}$.",
                "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^2 + 26x + 152 \\ge 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -13-sqrt(17) or x >= -13+sqrt(17)",
              "lines": [
                {
                  "step": "Solve $x^2 + 26x + 152 \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 68$",
                  "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 26$ and $c = 152$, it is $26^2 - 4 \\cdot 152 = 68$."
                },
                {
                  "step": "$x = \\dfrac{-26 \\pm \\sqrt{68}}{2}$",
                  "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
                },
                {
                  "step": "The roots are $x = -13 + \\sqrt{17}$ and $x = -13 - \\sqrt{17}$.",
                  "reason": "Simplest radical form: $\\sqrt{68} = 2\\sqrt{17}$, and each term of the top is halved."
                },
                {
                  "step": "$(x - (-13 + \\sqrt{17}))(x - (-13 - \\sqrt{17})) \\ge 0$",
                  "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
                },
                {
                  "step": "For $x < -13 - \\sqrt{17}$ both factors are negative, for $-13 - \\sqrt{17} < x < -13 + \\sqrt{17}$ only $x - (-13 - \\sqrt{17})$ is positive, and for $x > -13 + \\sqrt{17}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-13 + \\sqrt{17}))(x - (-13 - \\sqrt{17}))$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le -13 - \\sqrt{17}$ or $x \\ge -13 + \\sqrt{17}$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Solve $x^2 + 18x + 42 > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -9-sqrt(39) or x > -9+sqrt(39)",
              "lines": [
                {
                  "step": "Solve $x^2 + 18x + 42 > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 156$",
                  "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 18$ and $c = 42$, it is $18^2 - 4 \\cdot 42 = 156$."
                },
                {
                  "step": "$x = \\dfrac{-18 \\pm \\sqrt{156}}{2}$",
                  "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
                },
                {
                  "step": "The roots are $x = -9 + \\sqrt{39}$ and $x = -9 - \\sqrt{39}$.",
                  "reason": "Simplest radical form: $\\sqrt{156} = 2\\sqrt{39}$, and each term of the top is halved."
                },
                {
                  "step": "$(x - (-9 + \\sqrt{39}))(x - (-9 - \\sqrt{39})) > 0$",
                  "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
                },
                {
                  "step": "For $x < -9 - \\sqrt{39}$ both factors are negative, for $-9 - \\sqrt{39} < x < -9 + \\sqrt{39}$ only $x - (-9 - \\sqrt{39})$ is positive, and for $x > -9 + \\sqrt{39}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-9 + \\sqrt{39}))(x - (-9 - \\sqrt{39}))$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x < -9 - \\sqrt{39}$ or $x > -9 + \\sqrt{39}$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Solve $x^2 + 44x + 458 > 0$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -22-sqrt(26) or x > -22+sqrt(26)",
              "lines": [
                {
                  "step": "Solve $x^2 + 44x + 458 > 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$b^2 - 4ac = 104$",
                  "reason": "Discriminant $b^2 - 4ac$: with $a = 1$, $b = 44$ and $c = 458$, it is $44^2 - 4 \\cdot 458 = 104$."
                },
                {
                  "step": "$x = \\dfrac{-44 \\pm \\sqrt{104}}{2}$",
                  "reason": "Quadratic formula: the roots are $\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, here with $a = 1$."
                },
                {
                  "step": "The roots are $x = -22 + \\sqrt{26}$ and $x = -22 - \\sqrt{26}$.",
                  "reason": "Simplest radical form: $\\sqrt{104} = 2\\sqrt{26}$, and each term of the top is halved."
                },
                {
                  "step": "$(x - (-22 + \\sqrt{26}))(x - (-22 - \\sqrt{26})) > 0$",
                  "reason": "Factored form $a(x - r)(x - s)$: with $a = 1$ and the two roots $r$ and $s$, the quadratic is the product of $x - r$ and $x - s$."
                },
                {
                  "step": "For $x < -22 - \\sqrt{26}$ both factors are negative, for $-22 - \\sqrt{26} < x < -22 + \\sqrt{26}$ only $x - (-22 - \\sqrt{26})$ is positive, and for $x > -22 + \\sqrt{26}$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - (-22 + \\sqrt{26}))(x - (-22 - \\sqrt{26}))$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x < -22 - \\sqrt{26}$ or $x > -22 + \\sqrt{26}$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every real number $x$ for which $x$ times the number $41$ more than $x$ is at most $-408$.",
            "lines": [
              {
                "step": "Find every real number $x$ for which $x$ times the number $41$ more than $x$ is at most $-408$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x(x + 41) \\le -408$",
                "reason": "Writing a sentence as an equation: the number $41$ more than $x$ is $x + 41$, \"times\" multiplies, and the words \"at most\" give the sign $\\le$."
              },
              {
                "step": "$x^2 + 41x \\le -408$",
                "reason": "Multiplying out: $x$ times each term of $x + 41$ gives $x^2 + 41x$."
              },
              {
                "step": "$x^2 + 41x + 408 \\le 0$",
                "reason": "Adding the same number to both sides: $-408$ is taken from both sides, so the sign stays as it is."
              },
              {
                "step": "$(x + 17)(x + 24) \\le 0$",
                "reason": "Factoring a quadratic: $17$ and $24$ have sum $41$ and product $408$."
              },
              {
                "step": "The factor $x + 24$ is $0$ at $x = -24$, and $x + 17$ is $0$ at $x = -17$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "For $x < -24$ both factors are negative, for $-24 < x < -17$ only $x + 24$ is positive, and for $x > -17$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 17)(x + 24)$ is negative between the roots."
              },
              {
                "step": "$-24 \\le x \\le -17$",
                "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-24$ and $-17$, and the sign allows equality, so the roots are taken in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real number $x$ for which $x$ times the number $37$ more than $x$ is less than $-340$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-20 < x < -17",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $x$ times the number $37$ more than $x$ is less than $-340$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 37) < -340$",
                  "reason": "Writing a sentence as an equation: the number $37$ more than $x$ is $x + 37$, \"times\" multiplies, and the words \"less than\" give the sign $<$."
                },
                {
                  "step": "$x^2 + 37x < -340$",
                  "reason": "Multiplying out: $x$ times each term of $x + 37$ gives $x^2 + 37x$."
                },
                {
                  "step": "$x^2 + 37x + 340 < 0$",
                  "reason": "Adding the same number to both sides: $-340$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "$(x + 17)(x + 20) < 0$",
                  "reason": "Factoring a quadratic: $17$ and $20$ have sum $37$ and product $340$."
                },
                {
                  "step": "The factor $x + 20$ is $0$ at $x = -20$, and $x + 17$ is $0$ at $x = -17$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -20$ both factors are negative, for $-20 < x < -17$ only $x + 20$ is positive, and for $x > -17$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 17)(x + 20)$ is negative between the roots."
                },
                {
                  "step": "$-20 < x < -17$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-20$ and $-17$, and the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Find every real number $x$ for which $x$ times the number $16$ more than $x$ is less than $225$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-25 < x < 9",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $x$ times the number $16$ more than $x$ is less than $225$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 16) < 225$",
                  "reason": "Writing a sentence as an equation: the number $16$ more than $x$ is $x + 16$, \"times\" multiplies, and the words \"less than\" give the sign $<$."
                },
                {
                  "step": "$x^2 + 16x < 225$",
                  "reason": "Multiplying out: $x$ times each term of $x + 16$ gives $x^2 + 16x$."
                },
                {
                  "step": "$x^2 + 16x - 225 < 0$",
                  "reason": "Adding the same number to both sides: $225$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "$(x + 25)(x - 9) < 0$",
                  "reason": "Factoring a quadratic: $25$ and $-9$ have sum $16$ and product $-225$."
                },
                {
                  "step": "The factor $x + 25$ is $0$ at $x = -25$, and $x - 9$ is $0$ at $x = 9$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -25$ both factors are negative, for $-25 < x < 9$ only $x + 25$ is positive, and for $x > 9$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 25)(x - 9)$ is negative between the roots."
                },
                {
                  "step": "$-25 < x < 9$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-25$ and $9$, and the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Find every real number $x$ for which $x$ times the number $43$ more than $x$ is at most $-450$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-25 <= x <= -18",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $x$ times the number $43$ more than $x$ is at most $-450$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 43) \\le -450$",
                  "reason": "Writing a sentence as an equation: the number $43$ more than $x$ is $x + 43$, \"times\" multiplies, and the words \"at most\" give the sign $\\le$."
                },
                {
                  "step": "$x^2 + 43x \\le -450$",
                  "reason": "Multiplying out: $x$ times each term of $x + 43$ gives $x^2 + 43x$."
                },
                {
                  "step": "$x^2 + 43x + 450 \\le 0$",
                  "reason": "Adding the same number to both sides: $-450$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "$(x + 18)(x + 25) \\le 0$",
                  "reason": "Factoring a quadratic: $18$ and $25$ have sum $43$ and product $450$."
                },
                {
                  "step": "The factor $x + 25$ is $0$ at $x = -25$, and $x + 18$ is $0$ at $x = -18$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -25$ both factors are negative, for $-25 < x < -18$ only $x + 25$ is positive, and for $x > -18$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 18)(x + 25)$ is negative between the roots."
                },
                {
                  "step": "$-25 \\le x \\le -18$",
                  "reason": "Strict and nonstrict inequality: the solutions are the numbers between $-25$ and $-18$, and the sign allows equality, so the roots are taken in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every real number $x$ for which $x$ times the number $17$ less than $x$ is greater than $84$.",
            "lines": [
              {
                "step": "Find every real number $x$ for which $x$ times the number $17$ less than $x$ is greater than $84$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x(x - 17) > 84$",
                "reason": "Writing a sentence as an equation: the number $17$ less than $x$ is $x - 17$, \"times\" multiplies, and the words \"greater than\" give the sign $>$."
              },
              {
                "step": "$x^2 - 17x > 84$",
                "reason": "Multiplying out: $x$ times each term of $x - 17$ gives $x^2 - 17x$."
              },
              {
                "step": "$x^2 - 17x - 84 > 0$",
                "reason": "Adding the same number to both sides: $84$ is taken from both sides, so the sign stays as it is."
              },
              {
                "step": "$(x - 21)(x + 4) > 0$",
                "reason": "Factoring a quadratic: $-21$ and $4$ have sum $-17$ and product $-84$."
              },
              {
                "step": "The factor $x + 4$ is $0$ at $x = -4$, and $x - 21$ is $0$ at $x = 21$.",
                "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
              },
              {
                "step": "For $x < -4$ both factors are negative, for $-4 < x < 21$ only $x + 4$ is positive, and for $x > 21$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - 21)(x + 4)$ is positive below the smaller root and above the larger one."
              },
              {
                "step": "So $x < -4$ or $x > 21$.",
                "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real number $x$ for which $x$ times the number $48$ less than $x$ is at least $-575$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= 23 or x >= 25",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $x$ times the number $48$ less than $x$ is at least $-575$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x - 48) \\ge -575$",
                  "reason": "Writing a sentence as an equation: the number $48$ less than $x$ is $x - 48$, \"times\" multiplies, and the words \"at least\" give the sign $\\ge$."
                },
                {
                  "step": "$x^2 - 48x \\ge -575$",
                  "reason": "Multiplying out: $x$ times each term of $x - 48$ gives $x^2 - 48x$."
                },
                {
                  "step": "$x^2 - 48x + 575 \\ge 0$",
                  "reason": "Adding the same number to both sides: $-575$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "$(x - 23)(x - 25) \\ge 0$",
                  "reason": "Factoring a quadratic: $-23$ and $-25$ have sum $-48$ and product $575$."
                },
                {
                  "step": "The factor $x - 23$ is $0$ at $x = 23$, and $x - 25$ is $0$ at $x = 25$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < 23$ both factors are negative, for $23 < x < 25$ only $x - 23$ is positive, and for $x > 25$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - 23)(x - 25)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le 23$ or $x \\ge 25$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Find every real number $x$ for which $x$ times the number $31$ more than $x$ is greater than $-210$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x < -21 or x > -10",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $x$ times the number $31$ more than $x$ is greater than $-210$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 31) > -210$",
                  "reason": "Writing a sentence as an equation: the number $31$ more than $x$ is $x + 31$, \"times\" multiplies, and the words \"greater than\" give the sign $>$."
                },
                {
                  "step": "$x^2 + 31x > -210$",
                  "reason": "Multiplying out: $x$ times each term of $x + 31$ gives $x^2 + 31x$."
                },
                {
                  "step": "$x^2 + 31x + 210 > 0$",
                  "reason": "Adding the same number to both sides: $-210$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "$(x + 21)(x + 10) > 0$",
                  "reason": "Factoring a quadratic: $21$ and $10$ have sum $31$ and product $210$."
                },
                {
                  "step": "The factor $x + 21$ is $0$ at $x = -21$, and $x + 10$ is $0$ at $x = -10$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -21$ both factors are negative, for $-21 < x < -10$ only $x + 21$ is positive, and for $x > -10$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 21)(x + 10)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x < -21$ or $x > -10$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign is strict, so the roots are left out."
                }
              ]
            },
            {
              "prompt": "Find every real number $x$ for which $x$ times the number $9$ more than $x$ is at least $220$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -20 or x >= 11",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $x$ times the number $9$ more than $x$ is at least $220$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x + 9) \\ge 220$",
                  "reason": "Writing a sentence as an equation: the number $9$ more than $x$ is $x + 9$, \"times\" multiplies, and the words \"at least\" give the sign $\\ge$."
                },
                {
                  "step": "$x^2 + 9x \\ge 220$",
                  "reason": "Multiplying out: $x$ times each term of $x + 9$ gives $x^2 + 9x$."
                },
                {
                  "step": "$x^2 + 9x - 220 \\ge 0$",
                  "reason": "Adding the same number to both sides: $220$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "$(x - 11)(x + 20) \\ge 0$",
                  "reason": "Factoring a quadratic: $-11$ and $20$ have sum $9$ and product $-220$."
                },
                {
                  "step": "The factor $x + 20$ is $0$ at $x = -20$, and $x - 11$ is $0$ at $x = 11$.",
                  "reason": "Zero-product property: the product is $0$ exactly when one factor is $0$, so these two numbers split the line into three parts."
                },
                {
                  "step": "For $x < -20$ both factors are negative, for $-20 < x < 11$ only $x + 20$ is positive, and for $x > 11$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - 11)(x + 20)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le -20$ or $x \\ge 11$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t154-k2",
      "forms": [
        {
          "example": {
            "problem": "Find every number $c$ for which $12x^2 + 7x + c > 0$ for every real number $x$.",
            "lines": [
              {
                "step": "Find every number $c$ for which $12x^2 + 7x + c > 0$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $12$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
              },
              {
                "step": "$7^2 - 4 \\cdot 12 \\cdot c < 0$",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
              },
              {
                "step": "$49 - 48c < 0$",
                "reason": "Multiplying out: $7^2 = 49$ and $4 \\cdot 12 = 48$."
              },
              {
                "step": "$-48c < -49$",
                "reason": "Adding the same number to both sides: $49$ is taken from both sides."
              },
              {
                "step": "$c > \\dfrac{49}{48}$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-48$, so $<$ becomes $>$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $c$ for which $8x^2 - 27x + c > 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c > 729/32",
              "lines": [
                {
                  "step": "Find every number $c$ for which $8x^2 - 27x + c > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $8$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$(-27)^2 - 4 \\cdot 8 \\cdot c < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$729 - 32c < 0$",
                  "reason": "Multiplying out: $(-27)^2 = 729$ and $4 \\cdot 8 = 32$."
                },
                {
                  "step": "$-32c < -729$",
                  "reason": "Adding the same number to both sides: $729$ is taken from both sides."
                },
                {
                  "step": "$c > \\dfrac{729}{32}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-32$, so $<$ becomes $>$."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which $3x^2 + 16x + c > 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c > 64/3",
              "lines": [
                {
                  "step": "Find every number $c$ for which $3x^2 + 16x + c > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $3$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$16^2 - 4 \\cdot 3 \\cdot c < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$256 - 12c < 0$",
                  "reason": "Multiplying out: $16^2 = 256$ and $4 \\cdot 3 = 12$."
                },
                {
                  "step": "$-12c < -256$",
                  "reason": "Adding the same number to both sides: $256$ is taken from both sides."
                },
                {
                  "step": "$c > \\dfrac{64}{3}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-12$, so $<$ becomes $>$."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which $6x^2 - 23x + c > 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c > 529/24",
              "lines": [
                {
                  "step": "Find every number $c$ for which $6x^2 - 23x + c > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $6$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$(-23)^2 - 4 \\cdot 6 \\cdot c < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$529 - 24c < 0$",
                  "reason": "Multiplying out: $(-23)^2 = 529$ and $4 \\cdot 6 = 24$."
                },
                {
                  "step": "$-24c < -529$",
                  "reason": "Adding the same number to both sides: $529$ is taken from both sides."
                },
                {
                  "step": "$c > \\dfrac{529}{24}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-24$, so $<$ becomes $>$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $c$ for which $4x^2 + 29x + c \\ge 0$ for every real number $x$.",
            "lines": [
              {
                "step": "Find every number $c$ for which $4x^2 + 29x + c \\ge 0$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                "reason": "Trivial Inequality: at a double root $r$ the quadratic is $4(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $4$; two roots put it below $0$ between them."
              },
              {
                "step": "$29^2 - 4 \\cdot 4 \\cdot c \\le 0$",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
              },
              {
                "step": "$841 - 16c \\le 0$",
                "reason": "Multiplying out: $29^2 = 841$ and $4 \\cdot 4 = 16$."
              },
              {
                "step": "$-16c \\le -841$",
                "reason": "Adding the same number to both sides: $841$ is taken from both sides."
              },
              {
                "step": "$c \\ge \\dfrac{841}{16}$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-16$, so $\\le$ becomes $\\ge$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $c$ for which $11x^2 + 20x + c \\ge 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c >= 100/11",
              "lines": [
                {
                  "step": "Find every number $c$ for which $11x^2 + 20x + c \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                  "reason": "Trivial Inequality: at a double root $r$ the quadratic is $11(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $11$; two roots put it below $0$ between them."
                },
                {
                  "step": "$20^2 - 4 \\cdot 11 \\cdot c \\le 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
                },
                {
                  "step": "$400 - 44c \\le 0$",
                  "reason": "Multiplying out: $20^2 = 400$ and $4 \\cdot 11 = 44$."
                },
                {
                  "step": "$-44c \\le -400$",
                  "reason": "Adding the same number to both sides: $400$ is taken from both sides."
                },
                {
                  "step": "$c \\ge \\dfrac{100}{11}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-44$, so $\\le$ becomes $\\ge$."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which $7x^2 - 8x + c \\ge 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c >= 16/7",
              "lines": [
                {
                  "step": "Find every number $c$ for which $7x^2 - 8x + c \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                  "reason": "Trivial Inequality: at a double root $r$ the quadratic is $7(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $7$; two roots put it below $0$ between them."
                },
                {
                  "step": "$(-8)^2 - 4 \\cdot 7 \\cdot c \\le 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
                },
                {
                  "step": "$64 - 28c \\le 0$",
                  "reason": "Multiplying out: $(-8)^2 = 64$ and $4 \\cdot 7 = 28$."
                },
                {
                  "step": "$-28c \\le -64$",
                  "reason": "Adding the same number to both sides: $64$ is taken from both sides."
                },
                {
                  "step": "$c \\ge \\dfrac{16}{7}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-28$, so $\\le$ becomes $\\ge$."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which $10x^2 + 3x + c \\ge 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c >= 9/40",
              "lines": [
                {
                  "step": "Find every number $c$ for which $10x^2 + 3x + c \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                  "reason": "Trivial Inequality: at a double root $r$ the quadratic is $10(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $10$; two roots put it below $0$ between them."
                },
                {
                  "step": "$3^2 - 4 \\cdot 10 \\cdot c \\le 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
                },
                {
                  "step": "$9 - 40c \\le 0$",
                  "reason": "Multiplying out: $3^2 = 9$ and $4 \\cdot 10 = 40$."
                },
                {
                  "step": "$-40c \\le -9$",
                  "reason": "Adding the same number to both sides: $9$ is taken from both sides."
                },
                {
                  "step": "$c \\ge \\dfrac{9}{40}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-40$, so $\\le$ becomes $\\ge$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $c$ for which $16x^2 + 9x + c > -18$ for every real number $x$.",
            "lines": [
              {
                "step": "Find every number $c$ for which $16x^2 + 9x + c > -18$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$16x^2 + 9x + (c + 18) > 0$",
                "reason": "Adding the same number to both sides: $-18$ is taken from both sides, so the sign stays as it is."
              },
              {
                "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $16$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
              },
              {
                "step": "$9^2 - 4 \\cdot 16 \\cdot (c + 18) < 0$",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
              },
              {
                "step": "$81 - 64c - 1152 < 0$",
                "reason": "Multiplying out: $9^2 = 81$, and $-4 \\cdot 16$ times each term of the bracket."
              },
              {
                "step": "$-64c < 1071$",
                "reason": "Adding the same number to both sides: $81$ and $-1152$ are taken from both sides."
              },
              {
                "step": "$c > -\\dfrac{1071}{64}$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-64$, so $<$ becomes $>$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $c$ for which $15x^2 + 40x + c > -6$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c > 62/3",
              "lines": [
                {
                  "step": "Find every number $c$ for which $15x^2 + 40x + c > -6$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15x^2 + 40x + (c + 6) > 0$",
                  "reason": "Adding the same number to both sides: $-6$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $15$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$40^2 - 4 \\cdot 15 \\cdot (c + 6) < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$1600 - 60c - 360 < 0$",
                  "reason": "Multiplying out: $40^2 = 1600$, and $-4 \\cdot 15$ times each term of the bracket."
                },
                {
                  "step": "$-60c < -1240$",
                  "reason": "Adding the same number to both sides: $1600$ and $-360$ are taken from both sides."
                },
                {
                  "step": "$c > \\dfrac{62}{3}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-60$, so $<$ becomes $>$."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which $21x^2 - 45x + c > 19$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c > 1207/28",
              "lines": [
                {
                  "step": "Find every number $c$ for which $21x^2 - 45x + c > 19$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$21x^2 - 45x + (c - 19) > 0$",
                  "reason": "Adding the same number to both sides: $19$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $21$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$(-45)^2 - 4 \\cdot 21 \\cdot (c - 19) < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$2025 - 84c + 1596 < 0$",
                  "reason": "Multiplying out: $(-45)^2 = 2025$, and $-4 \\cdot 21$ times each term of the bracket."
                },
                {
                  "step": "$-84c < -3621$",
                  "reason": "Adding the same number to both sides: $2025$ and $1596$ are taken from both sides."
                },
                {
                  "step": "$c > \\dfrac{1207}{28}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-84$, so $<$ becomes $>$."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which $29x^2 - 5x + c > -29$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "c > -3339/116",
              "lines": [
                {
                  "step": "Find every number $c$ for which $29x^2 - 5x + c > -29$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$29x^2 - 5x + (c + 29) > 0$",
                  "reason": "Adding the same number to both sides: $-29$ is taken from both sides, so the sign stays as it is."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $29$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$(-5)^2 - 4 \\cdot 29 \\cdot (c + 29) < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$25 - 116c - 3364 < 0$",
                  "reason": "Multiplying out: $(-5)^2 = 25$, and $-4 \\cdot 29$ times each term of the bracket."
                },
                {
                  "step": "$-116c < 3339$",
                  "reason": "Adding the same number to both sides: $25$ and $-3364$ are taken from both sides."
                },
                {
                  "step": "$c > -\\dfrac{3339}{116}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are divided by $-116$, so $<$ becomes $>$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $b$ for which $24x^2 + bx + 6 > 0$ for every real number $x$.",
            "lines": [
              {
                "step": "Find every number $b$ for which $24x^2 + bx + 6 > 0$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $24$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
              },
              {
                "step": "$b^2 - 4 \\cdot 24 \\cdot 6 < 0$",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
              },
              {
                "step": "$b^2 - 576 < 0$",
                "reason": "Multiplying out: $4 \\cdot 24 \\cdot 6 = 576$."
              },
              {
                "step": "$(b - 24)(b + 24) < 0$",
                "reason": "Difference of squares: $576 = 24^2$."
              },
              {
                "step": "$-24 < b < 24$",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 24$ is the larger factor, so the product is negative only for $b$ between $-24$ and $24$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $b$ for which $13x^2 + bx + 13 > 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-26 < b < 26",
              "lines": [
                {
                  "step": "Find every number $b$ for which $13x^2 + bx + 13 > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $13$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$b^2 - 4 \\cdot 13 \\cdot 13 < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$b^2 - 676 < 0$",
                  "reason": "Multiplying out: $4 \\cdot 13 \\cdot 13 = 676$."
                },
                {
                  "step": "$(b - 26)(b + 26) < 0$",
                  "reason": "Difference of squares: $676 = 26^2$."
                },
                {
                  "step": "$-26 < b < 26$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 26$ is the larger factor, so the product is negative only for $b$ between $-26$ and $26$."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $8x^2 + bx + 98 > 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-56 < b < 56",
              "lines": [
                {
                  "step": "Find every number $b$ for which $8x^2 + bx + 98 > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $8$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$b^2 - 4 \\cdot 8 \\cdot 98 < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$b^2 - 3136 < 0$",
                  "reason": "Multiplying out: $4 \\cdot 8 \\cdot 98 = 3136$."
                },
                {
                  "step": "$(b - 56)(b + 56) < 0$",
                  "reason": "Difference of squares: $3136 = 56^2$."
                },
                {
                  "step": "$-56 < b < 56$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 56$ is the larger factor, so the product is negative only for $b$ between $-56$ and $56$."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $4x^2 + bx + 169 > 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-52 < b < 52",
              "lines": [
                {
                  "step": "Find every number $b$ for which $4x^2 + bx + 169 > 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is positive for every real $x$ exactly when it has no real root.",
                  "reason": "A quadratic with no real root keeps one sign: the coefficient of $x^2$, $4$, is positive, so with no real root the quadratic is positive everywhere, and a real root would give it the value $0$."
                },
                {
                  "step": "$b^2 - 4 \\cdot 4 \\cdot 169 < 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root."
                },
                {
                  "step": "$b^2 - 2704 < 0$",
                  "reason": "Multiplying out: $4 \\cdot 4 \\cdot 169 = 2704$."
                },
                {
                  "step": "$(b - 52)(b + 52) < 0$",
                  "reason": "Difference of squares: $2704 = 52^2$."
                },
                {
                  "step": "$-52 < b < 52$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 52$ is the larger factor, so the product is negative only for $b$ between $-52$ and $52$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $b$ for which $3x^2 + bx + 192 \\ge 0$ for every real number $x$.",
            "lines": [
              {
                "step": "Find every number $b$ for which $3x^2 + bx + 192 \\ge 0$ for every real number $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                "reason": "Trivial Inequality: at a double root $r$ the quadratic is $3(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $3$; two roots put it below $0$ between them."
              },
              {
                "step": "$b^2 - 4 \\cdot 3 \\cdot 192 \\le 0$",
                "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
              },
              {
                "step": "$b^2 - 2304 \\le 0$",
                "reason": "Multiplying out: $4 \\cdot 3 \\cdot 192 = 2304$."
              },
              {
                "step": "$(b - 48)(b + 48) \\le 0$",
                "reason": "Difference of squares: $2304 = 48^2$."
              },
              {
                "step": "$-48 \\le b \\le 48$",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 48$ is the larger factor, so the product is negative only for $b$ between $-48$ and $48$, and it is $0$ at the two ends."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $b$ for which $20x^2 + bx + 45 \\ge 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-60 <= b <= 60",
              "lines": [
                {
                  "step": "Find every number $b$ for which $20x^2 + bx + 45 \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                  "reason": "Trivial Inequality: at a double root $r$ the quadratic is $20(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $20$; two roots put it below $0$ between them."
                },
                {
                  "step": "$b^2 - 4 \\cdot 20 \\cdot 45 \\le 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
                },
                {
                  "step": "$b^2 - 3600 \\le 0$",
                  "reason": "Multiplying out: $4 \\cdot 20 \\cdot 45 = 3600$."
                },
                {
                  "step": "$(b - 60)(b + 60) \\le 0$",
                  "reason": "Difference of squares: $3600 = 60^2$."
                },
                {
                  "step": "$-60 \\le b \\le 60$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 60$ is the larger factor, so the product is negative only for $b$ between $-60$ and $60$, and it is $0$ at the two ends."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $16x^2 + bx + 25 \\ge 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-40 <= b <= 40",
              "lines": [
                {
                  "step": "Find every number $b$ for which $16x^2 + bx + 25 \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                  "reason": "Trivial Inequality: at a double root $r$ the quadratic is $16(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $16$; two roots put it below $0$ between them."
                },
                {
                  "step": "$b^2 - 4 \\cdot 16 \\cdot 25 \\le 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
                },
                {
                  "step": "$b^2 - 1600 \\le 0$",
                  "reason": "Multiplying out: $4 \\cdot 16 \\cdot 25 = 1600$."
                },
                {
                  "step": "$(b - 40)(b + 40) \\le 0$",
                  "reason": "Difference of squares: $1600 = 40^2$."
                },
                {
                  "step": "$-40 \\le b \\le 40$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 40$ is the larger factor, so the product is negative only for $b$ between $-40$ and $40$, and it is $0$ at the two ends."
                }
              ]
            },
            {
              "prompt": "Find every number $b$ for which $2x^2 + bx + 162 \\ge 0$ for every real number $x$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "-36 <= b <= 36",
              "lines": [
                {
                  "step": "Find every number $b$ for which $2x^2 + bx + 162 \\ge 0$ for every real number $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The quadratic is at least $0$ for every real $x$ exactly when it has no real root or a double root.",
                  "reason": "Trivial Inequality: at a double root $r$ the quadratic is $2(x - r)^2$, a positive number times a square, so at least $0$; with no real root it keeps the sign of $2$; two roots put it below $0$ between them."
                },
                {
                  "step": "$b^2 - 4 \\cdot 2 \\cdot 162 \\le 0$",
                  "reason": "Positive, zero, negative discriminant: a negative discriminant gives no real root, and $0$ gives a double root."
                },
                {
                  "step": "$b^2 - 1296 \\le 0$",
                  "reason": "Multiplying out: $4 \\cdot 2 \\cdot 162 = 1296$."
                },
                {
                  "step": "$(b - 36)(b + 36) \\le 0$",
                  "reason": "Difference of squares: $1296 = 36^2$."
                },
                {
                  "step": "$-36 \\le b \\le 36$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: $b + 36$ is the larger factor, so the product is negative only for $b$ between $-36$ and $36$, and it is $0$ at the two ends."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every real number $x$ for which $y^2 + 2xy + 20x - 19 = 0$ has a real solution $y$.",
            "lines": [
              {
                "step": "Find every real number $x$ for which $y^2 + 2xy + 20x - 19 = 0$ has a real solution $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x)^2 - 4 \\cdot (20x - 19) \\ge 0$",
                "reason": "Positive, zero, negative discriminant: a quadratic in $y$ has a real root exactly when its discriminant is at least $0$; here the coefficients are $1$, $2x$ and $20x - 19$."
              },
              {
                "step": "$4x^2 - 80x + 76 \\ge 0$",
                "reason": "Multiplying out: the square of the middle coefficient, and $-4$ times each term of the last one."
              },
              {
                "step": "$x^2 - 20x + 19 \\ge 0$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$, so the sign stays as it is."
              },
              {
                "step": "$(x - 1)(x - 19) \\ge 0$",
                "reason": "Factoring a quadratic: $-1$ and $-19$ have sum $-20$ and product $19$."
              },
              {
                "step": "For $x < 1$ both factors are negative, for $1 < x < 19$ only $x - 1$ is positive, and for $x > 19$ both are positive.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - 1)(x - 19)$ is positive below the smaller root and above the larger one."
              },
              {
                "step": "So $x \\le 1$ or $x \\ge 19$.",
                "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every real number $x$ for which $y^2 + 2xy + 15x + 34 = 0$ has a real solution $y$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -2 or x >= 17",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $y^2 + 2xy + 15x + 34 = 0$ has a real solution $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x)^2 - 4 \\cdot (15x + 34) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: a quadratic in $y$ has a real root exactly when its discriminant is at least $0$; here the coefficients are $1$, $2x$ and $15x + 34$."
                },
                {
                  "step": "$4x^2 - 60x - 136 \\ge 0$",
                  "reason": "Multiplying out: the square of the middle coefficient, and $-4$ times each term of the last one."
                },
                {
                  "step": "$x^2 - 15x - 34 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$, so the sign stays as it is."
                },
                {
                  "step": "$(x + 2)(x - 17) \\ge 0$",
                  "reason": "Factoring a quadratic: $2$ and $-17$ have sum $-15$ and product $-34$."
                },
                {
                  "step": "For $x < -2$ both factors are negative, for $-2 < x < 17$ only $x + 2$ is positive, and for $x > 17$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 2)(x - 17)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le -2$ or $x \\ge 17$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Find every real number $x$ for which $y^2 + 6xy + 135x - 126 = 0$ has a real solution $y$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= 1 or x >= 14",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $y^2 + 6xy + 135x - 126 = 0$ has a real solution $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(6x)^2 - 4 \\cdot (135x - 126) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: a quadratic in $y$ has a real root exactly when its discriminant is at least $0$; here the coefficients are $1$, $6x$ and $135x - 126$."
                },
                {
                  "step": "$36x^2 - 540x + 504 \\ge 0$",
                  "reason": "Multiplying out: the square of the middle coefficient, and $-4$ times each term of the last one."
                },
                {
                  "step": "$x^2 - 15x + 14 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{36}$, so the sign stays as it is."
                },
                {
                  "step": "$(x - 1)(x - 14) \\ge 0$",
                  "reason": "Factoring a quadratic: $-1$ and $-14$ have sum $-15$ and product $14$."
                },
                {
                  "step": "For $x < 1$ both factors are negative, for $1 < x < 14$ only $x - 1$ is positive, and for $x > 14$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x - 1)(x - 14)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le 1$ or $x \\ge 14$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            },
            {
              "prompt": "Find every real number $x$ for which $y^2 + 4xy - 24x + 748 = 0$ has a real solution $y$.",
              "form": "Answer as an inequality, parts joined by or, or as All or None, as in x < -1 or x >= 4.",
              "answer": "x <= -17 or x >= 11",
              "lines": [
                {
                  "step": "Find every real number $x$ for which $y^2 + 4xy - 24x + 748 = 0$ has a real solution $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x)^2 - 4 \\cdot (-24x + 748) \\ge 0$",
                  "reason": "Positive, zero, negative discriminant: a quadratic in $y$ has a real root exactly when its discriminant is at least $0$; here the coefficients are $1$, $4x$ and $-24x + 748$."
                },
                {
                  "step": "$16x^2 + 96x - 2992 \\ge 0$",
                  "reason": "Multiplying out: the square of the middle coefficient, and $-4$ times each term of the last one."
                },
                {
                  "step": "$x^2 + 6x - 187 \\ge 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{16}$, so the sign stays as it is."
                },
                {
                  "step": "$(x + 17)(x - 11) \\ge 0$",
                  "reason": "Factoring a quadratic: $17$ and $-11$ have sum $6$ and product $-187$."
                },
                {
                  "step": "For $x < -17$ both factors are negative, for $-17 < x < 11$ only $x + 17$ is positive, and for $x > 11$ both are positive.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: so $(x + 17)(x - 11)$ is positive below the smaller root and above the larger one."
                },
                {
                  "step": "So $x \\le -17$ or $x \\ge 11$.",
                  "reason": "Union of intervals: the solutions are the numbers of the two outer parts, joined by \"or\"; the sign allows equality, so the roots are taken in."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t154-k3",
      "forms": [
        {
          "example": {
            "problem": "Sketch the region $y > 3x^2 - 22x + 35$.",
            "lines": [
              {
                "step": "Sketch the region $y > 3x^2 - 22x + 35$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Completing the square gives $y = 3\\left(x - \\dfrac{11}{3}\\right)^2 - \\dfrac{16}{3}$, so the vertex is $(\\dfrac{11}{3}, -\\dfrac{16}{3})$.",
                "reason": "Vertex: completing the square gives the standard form, whose vertex has $x = \\dfrac{11}{3}$ and $y = -\\dfrac{16}{3}$."
              },
              {
                "step": "Factoring gives $3x^2 - 22x + 35 = (3x - 7)(x - 5)$, so the parabola crosses the $x$-axis at $(\\dfrac{7}{3}, 0)$ and $(5, 0)$.",
                "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and the zero-product property gives $x = \\dfrac{7}{3}$ or $x = 5$."
              },
              {
                "step": "At $x = 0$, $y = 35$, so it crosses the $y$-axis at $(0, 35)$.",
                "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
              },
              {
                "step": "The parabola is drawn dashed.",
                "reason": "Boundary line, solid or dashed: the sign is strict, so the points of the parabola are left out."
              },
              {
                "step": "At $(0, 0)$ the inequality reads $0 > 35$, which is false.",
                "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
              },
              {
                "step": "So the side above the parabola, away from $(0, 0)$, is shaded.",
                "reason": "Test point: the origin is off the parabola, and it lies outside the region, which is the side above the parabola.",
                "figure": {
                  "file": "quadratic-inequalities-1.svg",
                  "alt": "A dashed parabola with vertex (11/3, −16/3) through (7/3, 0), (5, 0), (0, 35), the side above it shaded, with the origin marked as the test point."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region $y \\le -2x^2 + 15x - 25$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid parabola $y = -2x^2 + 15x - 25$",
                  "vertex $(\\dfrac{15}{4}, \\dfrac{25}{8})$",
                  "crosses the axes at $(\\dfrac{5}{2}, 0)$ and $(5, 0)$ and $(0, -25)$",
                  "shaded below the parabola",
                  "test point $(0, 0)$ does not satisfy the inequality"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $y \\le -2x^2 + 15x - 25$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Completing the square gives $y = -2\\left(x - \\dfrac{15}{4}\\right)^2 + \\dfrac{25}{8}$, so the vertex is $(\\dfrac{15}{4}, \\dfrac{25}{8})$.",
                  "reason": "Vertex: completing the square gives the standard form, whose vertex has $x = \\dfrac{15}{4}$ and $y = \\dfrac{25}{8}$."
                },
                {
                  "step": "Factoring gives $-2x^2 + 15x - 25 = -(2x - 5)(x - 5)$, so the parabola crosses the $x$-axis at $(\\dfrac{5}{2}, 0)$ and $(5, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and the zero-product property gives $x = \\dfrac{5}{2}$ or $x = 5$."
                },
                {
                  "step": "At $x = 0$, $y = -25$, so it crosses the $y$-axis at $(0, -25)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The parabola is drawn solid.",
                  "reason": "Boundary line, solid or dashed: the sign allows equality, so the points of the parabola are taken in."
                },
                {
                  "step": "At $(0, 0)$ the inequality reads $0 \\le -25$, which is false.",
                  "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
                },
                {
                  "step": "So the side below the parabola, away from $(0, 0)$, is shaded.",
                  "reason": "Test point: the origin is off the parabola, and it lies outside the region, which is the side below the parabola.",
                  "figure": {
                    "file": "quadratic-inequalities-2.svg",
                    "alt": "A solid parabola with vertex (15/4, 25/8) through (5/2, 0), (5, 0), (0, −25), the side below it shaded, with the origin marked as the test point."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $y < -3x^2 + 5x + 8$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed parabola $y = -3x^2 + 5x + 8$",
                  "vertex $(\\dfrac{5}{6}, \\dfrac{121}{12})$",
                  "crosses the axes at $(-1, 0)$ and $(\\dfrac{8}{3}, 0)$ and $(0, 8)$",
                  "shaded below the parabola",
                  "test point $(0, 0)$ satisfies the inequality"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $y < -3x^2 + 5x + 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Completing the square gives $y = -3\\left(x - \\dfrac{5}{6}\\right)^2 + \\dfrac{121}{12}$, so the vertex is $(\\dfrac{5}{6}, \\dfrac{121}{12})$.",
                  "reason": "Vertex: completing the square gives the standard form, whose vertex has $x = \\dfrac{5}{6}$ and $y = \\dfrac{121}{12}$."
                },
                {
                  "step": "Factoring gives $-3x^2 + 5x + 8 = -(x + 1)(3x - 8)$, so the parabola crosses the $x$-axis at $(-1, 0)$ and $(\\dfrac{8}{3}, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and the zero-product property gives $x = -1$ or $x = \\dfrac{8}{3}$."
                },
                {
                  "step": "At $x = 0$, $y = 8$, so it crosses the $y$-axis at $(0, 8)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The parabola is drawn dashed.",
                  "reason": "Boundary line, solid or dashed: the sign is strict, so the points of the parabola are left out."
                },
                {
                  "step": "At $(0, 0)$ the inequality reads $0 < 8$, which is true.",
                  "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
                },
                {
                  "step": "So the side below the parabola, towards $(0, 0)$, is shaded.",
                  "reason": "Test point: the origin is off the parabola, and it lies in the region, which is the side below the parabola.",
                  "figure": {
                    "file": "quadratic-inequalities-3.svg",
                    "alt": "A dashed parabola with vertex (5/6, 121/12) through (−1, 0), (8/3, 0), (0, 8), the side below it shaded, with the origin marked as the test point."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $y \\ge -6x^2 + 31x - 40$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid parabola $y = -6x^2 + 31x - 40$",
                  "vertex $(\\dfrac{31}{12}, \\dfrac{1}{24})$",
                  "crosses the axes at $(\\dfrac{5}{2}, 0)$ and $(\\dfrac{8}{3}, 0)$ and $(0, -40)$",
                  "shaded above the parabola",
                  "test point $(0, 0)$ satisfies the inequality"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $y \\ge -6x^2 + 31x - 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Completing the square gives $y = -6\\left(x - \\dfrac{31}{12}\\right)^2 + \\dfrac{1}{24}$, so the vertex is $(\\dfrac{31}{12}, \\dfrac{1}{24})$.",
                  "reason": "Vertex: completing the square gives the standard form, whose vertex has $x = \\dfrac{31}{12}$ and $y = \\dfrac{1}{24}$."
                },
                {
                  "step": "Factoring gives $-6x^2 + 31x - 40 = -(3x - 8)(2x - 5)$, so the parabola crosses the $x$-axis at $(\\dfrac{5}{2}, 0)$ and $(\\dfrac{8}{3}, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and the zero-product property gives $x = \\dfrac{5}{2}$ or $x = \\dfrac{8}{3}$."
                },
                {
                  "step": "At $x = 0$, $y = -40$, so it crosses the $y$-axis at $(0, -40)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "The parabola is drawn solid.",
                  "reason": "Boundary line, solid or dashed: the sign allows equality, so the points of the parabola are taken in."
                },
                {
                  "step": "At $(0, 0)$ the inequality reads $0 \\ge -40$, which is true.",
                  "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
                },
                {
                  "step": "So the side above the parabola, towards $(0, 0)$, is shaded.",
                  "reason": "Test point: the origin is off the parabola, and it lies in the region, which is the side above the parabola.",
                  "figure": {
                    "file": "quadratic-inequalities-4.svg",
                    "alt": "A solid parabola with vertex (31/12, 1/24) through (5/2, 0), (8/3, 0), (0, −40), the side above it shaded, with the origin marked as the test point."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the region $x < 4y^2 + 8y - 21$.",
            "lines": [
              {
                "step": "Sketch the region $x < 4y^2 + 8y - 21$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Completing the square gives $x = 4\\left(y + 1\\right)^2 - 25$, so the vertex is $(-25, -1)$.",
                "reason": "Vertex: completing the square gives the standard form, whose vertex has $y = -1$ and $x = -25$."
              },
              {
                "step": "Factoring gives $4y^2 + 8y - 21 = (2y - 3)(2y + 7)$, so the parabola crosses the $y$-axis at $(0, -\\dfrac{7}{2})$ and $(0, \\dfrac{3}{2})$.",
                "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$, and the zero-product property gives $y = -\\dfrac{7}{2}$ or $y = \\dfrac{3}{2}$."
              },
              {
                "step": "At $y = 0$, $x = -21$, so it crosses the $x$-axis at $(-21, 0)$.",
                "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$."
              },
              {
                "step": "The parabola is drawn dashed.",
                "reason": "Boundary line, solid or dashed: the sign is strict, so the points of the parabola are left out."
              },
              {
                "step": "At $(0, 0)$ the inequality reads $0 < -21$, which is false.",
                "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
              },
              {
                "step": "So the side to the left of the parabola, away from $(0, 0)$, is shaded.",
                "reason": "Test point: the origin is off the parabola, and it lies outside the region, which is the side to the left of the parabola.",
                "figure": {
                  "file": "quadratic-inequalities-5.svg",
                  "alt": "A dashed parabola with vertex (−25, −1) through (0, −7/2), (0, 3/2), (−21, 0), the side to the left of it shaded, with the origin marked as the test point."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the region $x \\ge -3y^2 + 8y + 11$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid parabola $x = -3y^2 + 8y + 11$",
                  "vertex $(\\dfrac{49}{3}, \\dfrac{4}{3})$",
                  "crosses the axes at $(0, -1)$ and $(0, \\dfrac{11}{3})$ and $(11, 0)$",
                  "shaded to the right of the parabola",
                  "test point $(0, 0)$ does not satisfy the inequality"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $x \\ge -3y^2 + 8y + 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Completing the square gives $x = -3\\left(y - \\dfrac{4}{3}\\right)^2 + \\dfrac{49}{3}$, so the vertex is $(\\dfrac{49}{3}, \\dfrac{4}{3})$.",
                  "reason": "Vertex: completing the square gives the standard form, whose vertex has $y = \\dfrac{4}{3}$ and $x = \\dfrac{49}{3}$."
                },
                {
                  "step": "Factoring gives $-3y^2 + 8y + 11 = -(3y - 11)(y + 1)$, so the parabola crosses the $y$-axis at $(0, -1)$ and $(0, \\dfrac{11}{3})$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$, and the zero-product property gives $y = -1$ or $y = \\dfrac{11}{3}$."
                },
                {
                  "step": "At $y = 0$, $x = 11$, so it crosses the $x$-axis at $(11, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The parabola is drawn solid.",
                  "reason": "Boundary line, solid or dashed: the sign allows equality, so the points of the parabola are taken in."
                },
                {
                  "step": "At $(0, 0)$ the inequality reads $0 \\ge 11$, which is false.",
                  "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
                },
                {
                  "step": "So the side to the right of the parabola, away from $(0, 0)$, is shaded.",
                  "reason": "Test point: the origin is off the parabola, and it lies outside the region, which is the side to the right of the parabola.",
                  "figure": {
                    "file": "quadratic-inequalities-6.svg",
                    "alt": "A solid parabola with vertex (49/3, 4/3) through (0, −1), (0, 11/3), (11, 0), the side to the right of it shaded, with the origin marked as the test point."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $x > -6y^2 + 23y - 7$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "dashed parabola $x = -6y^2 + 23y - 7$",
                  "vertex $(\\dfrac{361}{24}, \\dfrac{23}{12})$",
                  "crosses the axes at $(0, \\dfrac{1}{3})$ and $(0, \\dfrac{7}{2})$ and $(-7, 0)$",
                  "shaded to the right of the parabola",
                  "test point $(0, 0)$ satisfies the inequality"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $x > -6y^2 + 23y - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Completing the square gives $x = -6\\left(y - \\dfrac{23}{12}\\right)^2 + \\dfrac{361}{24}$, so the vertex is $(\\dfrac{361}{24}, \\dfrac{23}{12})$.",
                  "reason": "Vertex: completing the square gives the standard form, whose vertex has $y = \\dfrac{23}{12}$ and $x = \\dfrac{361}{24}$."
                },
                {
                  "step": "Factoring gives $-6y^2 + 23y - 7 = -(2y - 7)(3y - 1)$, so the parabola crosses the $y$-axis at $(0, \\dfrac{1}{3})$ and $(0, \\dfrac{7}{2})$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$, and the zero-product property gives $y = \\dfrac{1}{3}$ or $y = \\dfrac{7}{2}$."
                },
                {
                  "step": "At $y = 0$, $x = -7$, so it crosses the $x$-axis at $(-7, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The parabola is drawn dashed.",
                  "reason": "Boundary line, solid or dashed: the sign is strict, so the points of the parabola are left out."
                },
                {
                  "step": "At $(0, 0)$ the inequality reads $0 > -7$, which is true.",
                  "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
                },
                {
                  "step": "So the side to the right of the parabola, towards $(0, 0)$, is shaded.",
                  "reason": "Test point: the origin is off the parabola, and it lies in the region, which is the side to the right of the parabola.",
                  "figure": {
                    "file": "quadratic-inequalities-7.svg",
                    "alt": "A dashed parabola with vertex (361/24, 23/12) through (0, 1/3), (0, 7/2), (−7, 0), the side to the right of it shaded, with the origin marked as the test point."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the region $x \\le 2y^2 + 5y - 25$.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "shaded": [
                  "solid parabola $x = 2y^2 + 5y - 25$",
                  "vertex $(-\\dfrac{225}{8}, -\\dfrac{5}{4})$",
                  "crosses the axes at $(0, -5)$ and $(0, \\dfrac{5}{2})$ and $(-25, 0)$",
                  "shaded to the left of the parabola",
                  "test point $(0, 0)$ does not satisfy the inequality"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the region $x \\le 2y^2 + 5y - 25$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Completing the square gives $x = 2\\left(y + \\dfrac{5}{4}\\right)^2 - \\dfrac{225}{8}$, so the vertex is $(-\\dfrac{225}{8}, -\\dfrac{5}{4})$.",
                  "reason": "Vertex: completing the square gives the standard form, whose vertex has $y = -\\dfrac{5}{4}$ and $x = -\\dfrac{225}{8}$."
                },
                {
                  "step": "Factoring gives $2y^2 + 5y - 25 = (2y - 5)(y + 5)$, so the parabola crosses the $y$-axis at $(0, -5)$ and $(0, \\dfrac{5}{2})$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$, and the zero-product property gives $y = -5$ or $y = \\dfrac{5}{2}$."
                },
                {
                  "step": "At $y = 0$, $x = -25$, so it crosses the $x$-axis at $(-25, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$."
                },
                {
                  "step": "The parabola is drawn solid.",
                  "reason": "Boundary line, solid or dashed: the sign allows equality, so the points of the parabola are taken in."
                },
                {
                  "step": "At $(0, 0)$ the inequality reads $0 \\le -25$, which is false.",
                  "reason": "Substituting a value: $x = 0$ and $y = 0$ are put in the inequality."
                },
                {
                  "step": "So the side to the left of the parabola, away from $(0, 0)$, is shaded.",
                  "reason": "Test point: the origin is off the parabola, and it lies outside the region, which is the side to the left of the parabola.",
                  "figure": {
                    "file": "quadratic-inequalities-8.svg",
                    "alt": "A solid parabola with vertex (−225/8, −5/4) through (0, −5), (0, 5/2), (−25, 0), the side to the left of it shaded, with the origin marked as the test point."
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t154-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $(x + 11)(x + 18) > 78$, and write that line right, multiplied out with every term on the left.",
            "given": [
              "$(x + 11)(x + 18) > 78$",
              "$x + 11 > 78$ or $x + 18 > 78$",
              "$x > 67$ or $x > 60$",
              "$x > 60$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $(x + 11)(x + 18) > 78$, and write that line right, multiplied out with every term on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 sets each factor of line 1 against $78$, as if the product were already worked out.",
                "reason": "The equals sign read as \"work out the answer\": a product above a number other than $0$ says nothing about each factor alone; only a product compared with $0$ splits by the signs of its factors."
              },
              {
                "step": "Line 2 written right is $x^2 + 29x + 120 > 0$.",
                "reason": "Adding the same number to both sides: $78$ is taken from both sides and the product multiplied out, so the quadratic is compared with $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $x^2 - 33x + 266 \\ge 84$, and write that line right, multiplied out with every term on the left.",
              "given": [
                "$x^2 - 33x + 266 \\ge 84$",
                "$(x - 19)(x - 14) \\ge 84$",
                "$x - 19 \\ge 84$ or $x - 14 \\ge 84$",
                "$x \\ge 103$ or $x \\ge 98$",
                "$x \\ge 98$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-33*x+182 >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x^2 - 33x + 266 \\ge 84$, and write that line right, multiplied out with every term on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 sets each factor of line 2 against $84$, as if the product were already worked out.",
                  "reason": "The equals sign read as \"work out the answer\": a product above a number other than $0$ says nothing about each factor alone; only a product compared with $0$ splits by the signs of its factors."
                },
                {
                  "step": "Line 3 written right is $x^2 - 33x + 182 \\ge 0$.",
                  "reason": "Adding the same number to both sides: $84$ is taken from both sides and the product multiplied out, so the quadratic is compared with $0$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $(x - 18)(x - 17) > 812$, and write that line right, multiplied out with every term on the left.",
              "given": [
                "$(x - 18)(x - 17) > 812$",
                "$x - 18 > 812$ or $x - 17 > 812$",
                "$x > 830$ or $x > 829$",
                "$x > 829$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2-35*x-506 > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $(x - 18)(x - 17) > 812$, and write that line right, multiplied out with every term on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 sets each factor of line 1 against $812$, as if the product were already worked out.",
                  "reason": "The equals sign read as \"work out the answer\": a product above a number other than $0$ says nothing about each factor alone; only a product compared with $0$ splits by the signs of its factors."
                },
                {
                  "step": "Line 2 written right is $x^2 - 35x - 506 > 0$.",
                  "reason": "Adding the same number to both sides: $812$ is taken from both sides and the product multiplied out, so the quadratic is compared with $0$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $x^2 - 28x + 195 > 15$, and write that line right, multiplied out with every term on the left.",
              "given": [
                "$x^2 - 28x + 195 > 15$",
                "$(x - 15)(x - 13) > 15$",
                "$x - 15 > 15$ or $x - 13 > 15$",
                "$x > 30$ or $x > 28$",
                "$x > 28$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-28*x+180 > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x^2 - 28x + 195 > 15$, and write that line right, multiplied out with every term on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 sets each factor of line 2 against $15$, as if the product were already worked out.",
                  "reason": "The equals sign read as \"work out the answer\": a product above a number other than $0$ says nothing about each factor alone; only a product compared with $0$ splits by the signs of its factors."
                },
                {
                  "step": "Line 3 written right is $x^2 - 28x + 180 > 0$.",
                  "reason": "Adding the same number to both sides: $15$ is taken from both sides and the product multiplied out, so the quadratic is compared with $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $x^2 \\le -29x - 138$, and write that line right, multiplied out with every term on the left.",
            "given": [
              "$x^2 \\le -29x - 138$",
              "$x^2 - 29x + 138 \\le 0$",
              "$(x - 6)(x - 23) \\le 0$",
              "$6 \\le x \\le 23$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $x^2 \\le -29x - 138$, and write that line right, multiplied out with every term on the left.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes $-29x - 138$ from both sides of line 1 but keeps the sign of the term in $x$.",
                "reason": "A sign is lost: taking $-29x$ from both sides leaves $29x$ on the left."
              },
              {
                "step": "Line 2 written right is $x^2 + 29x + 138 \\le 0$.",
                "reason": "Adding the same number to both sides: each term taken from the right changes its sign on the left, and the sign stays as it is."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $x(x + 15) > -2x + 168$, and write that line right, multiplied out with every term on the left.",
              "given": [
                "$x(x + 15) > -2x + 168$",
                "$x^2 + 15x > -2x + 168$",
                "$x^2 + 13x - 168 > 0$",
                "$(x + 21)(x - 8) > 0$",
                "$x < -21$ or $x > 8$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2+17*x-168 > 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x(x + 15) > -2x + 168$, and write that line right, multiplied out with every term on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $-2x$ from both sides of line 2 but writes $-2x$ on the left with its sign kept.",
                  "reason": "A sign is lost: taking $-2x$ from both sides leaves $2x$ on the left."
                },
                {
                  "step": "Line 3 written right is $x^2 + 17x - 168 > 0$.",
                  "reason": "Adding the same number to both sides: each term taken from the right changes its sign on the left, and the sign stays as it is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $x(x + 6) < 45x - 378$, and write that line right, multiplied out with every term on the left.",
              "given": [
                "$x(x + 6) < 45x - 378$",
                "$x^2 + 6x < 45x - 378$",
                "$x^2 + 51x + 378 < 0$",
                "$(x + 42)(x + 9) < 0$",
                "$-42 < x < -9$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-39*x+378 < 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x(x + 6) < 45x - 378$, and write that line right, multiplied out with every term on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $45x$ from both sides of line 2 but writes $45x$ on the left with its sign kept.",
                  "reason": "A sign is lost: taking $45x$ from both sides leaves $-45x$ on the left."
                },
                {
                  "step": "Line 3 written right is $x^2 - 39x + 378 < 0$.",
                  "reason": "Adding the same number to both sides: each term taken from the right changes its sign on the left, and the sign stays as it is."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $x^2 < -11x + 102$, and write that line right, multiplied out with every term on the left.",
              "given": [
                "$x^2 < -11x + 102$",
                "$x^2 - 11x - 102 < 0$",
                "$(x + 6)(x - 17) < 0$",
                "$-6 < x < 17$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2+11*x-102 < 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x^2 < -11x + 102$, and write that line right, multiplied out with every term on the left.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 takes $-11x + 102$ from both sides of line 1 but keeps the sign of the term in $x$.",
                  "reason": "A sign is lost: taking $-11x$ from both sides leaves $11x$ on the left."
                },
                {
                  "step": "Line 2 written right is $x^2 + 11x - 102 < 0$.",
                  "reason": "Adding the same number to both sides: each term taken from the right changes its sign on the left, and the sign stays as it is."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t154-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the set of real numbers $x$ with $x \\le 30$ or $x \\ge 34$ on a number line.",
            "lines": [
              {
                "step": "Sketch the set of real numbers $x$ with $x \\le 30$ or $x \\ge 34$ on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The end $30$ takes a filled dot, and the end $34$ takes a filled dot.",
                "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not. A sign with \"or equal\" takes its end in, and a strict sign does not."
              },
              {
                "step": "The line is shaded to the left of $30$ and to the right of $34$.",
                "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                "figure": {
                  "file": "quadratic-inequalities-9.svg",
                  "alt": "A number line with a filled dot at 30 and a filled dot at 34, the line shaded to the left of 30 and to the right of 34."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the set of real numbers $x$ with $x \\le -24$ or $x \\ge -22$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $-24$",
                  "shaded to the left of $-24$",
                  "filled dot at $-22$",
                  "shaded to the right of $-22$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the set of real numbers $x$ with $x \\le -24$ or $x \\ge -22$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-24$ takes a filled dot, and the end $-22$ takes a filled dot.",
                  "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not. A sign with \"or equal\" takes its end in, and a strict sign does not."
                },
                {
                  "step": "The line is shaded to the left of $-24$ and to the right of $-22$.",
                  "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                  "figure": {
                    "file": "quadratic-inequalities-10.svg",
                    "alt": "A number line with a filled dot at −24 and a filled dot at −22, the line shaded to the left of −24 and to the right of −22."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the set of real numbers $x$ with $x < -39$ or $x > -35$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-39$",
                  "shaded to the left of $-39$",
                  "open circle at $-35$",
                  "shaded to the right of $-35$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the set of real numbers $x$ with $x < -39$ or $x > -35$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $-39$ takes an open circle, and the end $-35$ takes an open circle.",
                  "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not. A sign with \"or equal\" takes its end in, and a strict sign does not."
                },
                {
                  "step": "The line is shaded to the left of $-39$ and to the right of $-35$.",
                  "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                  "figure": {
                    "file": "quadratic-inequalities-11.svg",
                    "alt": "A number line with an open circle at −39 and an open circle at −35, the line shaded to the left of −39 and to the right of −35."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the set of real numbers $x$ with $x < 23$ or $x \\ge 27$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $23$",
                  "shaded to the left of $23$",
                  "filled dot at $27$",
                  "shaded to the right of $27$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the set of real numbers $x$ with $x < 23$ or $x \\ge 27$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The end $23$ takes an open circle, and the end $27$ takes a filled dot.",
                  "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not. A sign with \"or equal\" takes its end in, and a strict sign does not."
                },
                {
                  "step": "The line is shaded to the left of $23$ and to the right of $27$.",
                  "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                  "figure": {
                    "file": "quadratic-inequalities-12.svg",
                    "alt": "A number line with an open circle at 23 and a filled dot at 27, the line shaded to the left of 23 and to the right of 27."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the set $(-\\infty, -26] \\cup [-23, \\infty)$ on a number line.",
            "lines": [
              {
                "step": "Sketch the set $(-\\infty, -26] \\cup [-23, \\infty)$ on a number line.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The set holds the numbers $x$ with $x \\le -26$ or $x \\ge -23$.",
                "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins two intervals by \"or\"."
              },
              {
                "step": "The end $-26$ takes a filled dot, and the end $-23$ takes a filled dot.",
                "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not."
              },
              {
                "step": "The line is shaded to the left of $-26$ and to the right of $-23$.",
                "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                "figure": {
                  "file": "quadratic-inequalities-13.svg",
                  "alt": "A number line with a filled dot at −26 and a filled dot at −23, the line shaded to the left of −26 and to the right of −23."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the set $(-\\infty, 14] \\cup (18, \\infty)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $14$",
                  "shaded to the left of $14$",
                  "open circle at $18$",
                  "shaded to the right of $18$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the set $(-\\infty, 14] \\cup (18, \\infty)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The set holds the numbers $x$ with $x \\le 14$ or $x > 18$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins two intervals by \"or\"."
                },
                {
                  "step": "The end $14$ takes a filled dot, and the end $18$ takes an open circle.",
                  "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the left of $14$ and to the right of $18$.",
                  "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                  "figure": {
                    "file": "quadratic-inequalities-14.svg",
                    "alt": "A number line with a filled dot at 14 and an open circle at 18, the line shaded to the left of 14 and to the right of 18."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the set $(-\\infty, 10] \\cup (12, \\infty)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "filled dot at $10$",
                  "shaded to the left of $10$",
                  "open circle at $12$",
                  "shaded to the right of $12$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the set $(-\\infty, 10] \\cup (12, \\infty)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The set holds the numbers $x$ with $x \\le 10$ or $x > 12$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins two intervals by \"or\"."
                },
                {
                  "step": "The end $10$ takes a filled dot, and the end $12$ takes an open circle.",
                  "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the left of $10$ and to the right of $12$.",
                  "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                  "figure": {
                    "file": "quadratic-inequalities-15.svg",
                    "alt": "A number line with a filled dot at 10 and an open circle at 12, the line shaded to the left of 10 and to the right of 12."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the set $(-\\infty, -12) \\cup (-8, \\infty)$ on a number line.",
              "form": "Sketch the set on a number line.",
              "features": {
                "shaded": [
                  "open circle at $-12$",
                  "shaded to the left of $-12$",
                  "open circle at $-8$",
                  "shaded to the right of $-8$"
                ]
              },
              "lines": [
                {
                  "step": "Sketch the set $(-\\infty, -12) \\cup (-8, \\infty)$ on a number line.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The set holds the numbers $x$ with $x < -12$ or $x > -8$.",
                  "reason": "Interval notation: a square bracket takes its end in, a round bracket leaves it out, $\\infty$ and $-\\infty$ mean the numbers go on without end, and $\\cup$ joins two intervals by \"or\"."
                },
                {
                  "step": "The end $-12$ takes an open circle, and the end $-8$ takes an open circle.",
                  "reason": "Open and closed circle on the number line: a filled dot marks an end that is in the set, and an open circle marks an end that is not."
                },
                {
                  "step": "The line is shaded to the left of $-12$ and to the right of $-8$.",
                  "reason": "Union of intervals: the set holds the numbers of both rays, so both are shaded.",
                  "figure": {
                    "file": "quadratic-inequalities-16.svg",
                    "alt": "A number line with an open circle at −12 and an open circle at −8, the line shaded to the left of −12 and to the right of −8."
                  }
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
      "id": "t154-p1",
      "method": "proof by cases",
      "statement": "Let $a$ and $b$ be real numbers. Then $ab > 0$ exactly when $a > 0$ and $b > 0$, or $a < 0$ and $b < 0$.",
      "idea": "One direction works out the product in the two cases of equal signs; the other splits on the sign of $a$ and rules out every case but the two of equal signs.",
      "lines": [
        {
          "line": "Let $a$ and $b$ be real numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "If $a > 0$ and $b > 0$, then $ab > 0$.",
          "reason": "arithmetic's order: the product of two positive numbers is positive"
        },
        {
          "line": "If $a < 0$ and $b < 0$, then $ab > 0$.",
          "reason": "arithmetic's order: the product of two negative numbers is positive"
        },
        {
          "line": "Now suppose $ab > 0$.",
          "reason": "the other direction: the product is taken to be positive"
        },
        {
          "line": "Then $a \\ne 0$ and $b \\ne 0$.",
          "reason": "zero-product property: a factor $0$ would make the product $0$"
        },
        {
          "line": "Then $a > 0$ or $a < 0$.",
          "reason": "arithmetic's order: a real number other than $0$ is positive or negative"
        },
        {
          "line": "If $a > 0$ and $b < 0$, then $ab < 0$.",
          "reason": "arithmetic's order: the product of a positive and a negative number is negative"
        },
        {
          "line": "That contradicts $ab > 0$, so with $a > 0$, $b < 0$ is false.",
          "reason": "line 4"
        },
        {
          "line": "With $b \\ne 0$ (line 5), $a > 0$ gives $b > 0$.",
          "reason": "arithmetic's order: a real number other than $0$ is positive or negative"
        },
        {
          "line": "If $a < 0$ and $b > 0$, then $ab < 0$.",
          "reason": "arithmetic's order: the product of a negative and a positive number is negative"
        },
        {
          "line": "That contradicts $ab > 0$, so with $a < 0$, $b > 0$ is false.",
          "reason": "line 4"
        },
        {
          "line": "With $b \\ne 0$ (line 5), $a < 0$ gives $b < 0$.",
          "reason": "arithmetic's order: a real number other than $0$ is positive or negative"
        },
        {
          "line": "Therefore $ab > 0$ exactly when $a > 0$ and $b > 0$, or $a < 0$ and $b < 0$.",
          "reason": "both directions hold: lines 2 and 3 give one, lines 6 to 12 the other"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t154-s1",
      "method": "direct proof",
      "statement": "Prove that for real numbers $a$ and $b$, $ab < 0$ exactly when $a > 0$ and $b < 0$, or $a < 0$ and $b > 0$.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "The product $ab$ is below $0$ exactly when $-(ab) > 0$.",
            "reason": "multiplying by a negative number reverses the sign: both sides times $-1$"
          },
          {
            "line": "Also $-(ab) = a(-b)$.",
            "reason": "signs of products (arithmetic's): a minus sign may be moved onto one factor"
          },
          {
            "line": "The product $a(-b)$ is above $0$ exactly when $a > 0$ and $-b > 0$, or $a < 0$ and $-b < 0$.",
            "reason": "the proof read, for $a$ and $-b$: a product is above $0$ exactly when its factors are both positive or both negative"
          },
          {
            "line": "Also $-b > 0$ exactly when $b < 0$, and $-b < 0$ exactly when $b > 0$.",
            "reason": "multiplying by a negative number reverses the sign: both sides times $-1$"
          },
          {
            "line": "Therefore $ab < 0$ exactly when $a > 0$ and $b < 0$, or $a < 0$ and $b > 0$.",
            "reason": "lines 2 to 5 put together, each step an \"exactly when\""
          }
        ]
      }
    },
    {
      "id": "t154-s2",
      "method": "proof by cases",
      "statement": "Prove that for real numbers $a$ and $b$, $ab \\ge 0$ exactly when $a \\ge 0$ and $b \\ge 0$, or $a \\le 0$ and $b \\le 0$.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers.",
            "reason": "the hypothesis"
          },
          {
            "line": "Case $a = 0$ or $b = 0$: $ab = 0$.",
            "reason": "zero-product property"
          },
          {
            "line": "Case $a > 0$ and $b > 0$: $ab > 0$.",
            "reason": "arithmetic's order: the product of two positive numbers is positive"
          },
          {
            "line": "Case $a < 0$ and $b < 0$: $ab > 0$.",
            "reason": "arithmetic's order: the product of two negative numbers is positive"
          },
          {
            "line": "So when $a \\ge 0$ and $b \\ge 0$, or $a \\le 0$ and $b \\le 0$, $ab \\ge 0$.",
            "reason": "strict and nonstrict inequality: lines 2 to 4 cover every such pair, and $0$ or above is at least $0$"
          },
          {
            "line": "Now suppose $ab \\ge 0$; then $ab = 0$ or $ab > 0$.",
            "reason": "strict and nonstrict inequality"
          },
          {
            "line": "If $ab = 0$, then $a = 0$ or $b = 0$.",
            "reason": "zero-product property"
          },
          {
            "line": "A factor $0$ is both at least $0$ and at most $0$, so the pair lies in one of the two cases.",
            "reason": "strict and nonstrict inequality: $0 \\ge 0$ and $0 \\le 0$"
          },
          {
            "line": "If $ab > 0$, then $a > 0$ and $b > 0$, or $a < 0$ and $b < 0$.",
            "reason": "the proof read: $ab > 0$ exactly when $a$ and $b$ are both positive or both negative"
          },
          {
            "line": "Therefore $ab \\ge 0$ exactly when $a \\ge 0$ and $b \\ge 0$, or $a \\le 0$ and $b \\le 0$.",
            "reason": "lines 2 to 5 give one direction, lines 6 to 9 the other"
          }
        ]
      }
    },
    {
      "id": "t154-s3",
      "method": "direct proof",
      "statement": "Prove that if $a > 0$ and $ax^2 + bx + c \\ge 0$ for every real number $x$, then $b^2 - 4ac \\le 0$.",
      "check": {
        "proof": [
          {
            "line": "Let $a > 0$, and let $ax^2 + bx + c \\ge 0$ for every real number $x$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Also $ax^2 + bx + c = a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$.",
            "reason": "completing the square in letters"
          },
          {
            "line": "At $x = -\\dfrac{b}{2a}$ the quadratic is $c - \\dfrac{b^2}{4a}$.",
            "reason": "substituting a value: the bracket becomes $0$"
          },
          {
            "line": "So $c - \\dfrac{b^2}{4a} \\ge 0$.",
            "reason": "the hypothesis, at the number $x = -\\dfrac{b}{2a}$"
          },
          {
            "line": "So $4ac - b^2 \\ge 0$.",
            "reason": "multiplying by a positive number: both sides times $4a$, which is positive"
          },
          {
            "line": "Therefore $b^2 - 4ac \\le 0$.",
            "reason": "multiplying by a negative number reverses the sign: both sides times $-1$"
          }
        ]
      }
    },
    {
      "id": "t154-s4",
      "method": "direct proof",
      "statement": "Prove that if $a > 0$ and $b^2 - 4ac < 0$, then $ax^2 + bx + c > 0$ for every real number $x$.",
      "check": {
        "proof": [
          {
            "line": "Let $a > 0$ and $b^2 - 4ac < 0$, and let $x$ be a real number.",
            "reason": "the hypothesis"
          },
          {
            "line": "Also $ax^2 + bx + c = a\\left(x + \\dfrac{b}{2a}\\right)^2 + \\dfrac{4ac - b^2}{4a}$.",
            "reason": "completing the square in letters, with $c - \\dfrac{b^2}{4a}$ written over $4a$"
          },
          {
            "line": "$\\left(x + \\dfrac{b}{2a}\\right)^2 \\ge 0$.",
            "reason": "Trivial Inequality"
          },
          {
            "line": "$a\\left(x + \\dfrac{b}{2a}\\right)^2 \\ge 0$.",
            "reason": "multiplying by a positive number: both sides times $a$"
          },
          {
            "line": "$4ac - b^2 > 0$.",
            "reason": "multiplying by a negative number reverses the sign: the hypothesis times $-1$"
          },
          {
            "line": "$\\dfrac{4ac - b^2}{4a} > 0$.",
            "reason": "multiplying by a positive number: both sides times $\\dfrac{1}{4a}$, positive since $a$ is"
          },
          {
            "line": "Therefore $ax^2 + bx + c > 0$.",
            "reason": "adding two inequalities: a number at least $0$ plus a positive number is positive"
          }
        ]
      }
    }
  ]
}
