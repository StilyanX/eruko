export default {
  "number": 136,
  "title": "Sum and product of the roots of a quadratic",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "307-311, 392-397"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the sum and the product of the roots of $3x^2 + 41x - 14 = 0$, as the ordered pair (sum, product).",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(-41/3, -14/3)",
    "solution": [
      "Find the sum and the product of the roots of $3x^2 + 41x - 14 = 0$, as the ordered pair (sum, product).",
      "$3x^2 + 41x - 14 = (3x - 1)(x + 14)$",
      "Either $x = \\dfrac{1}{3}$ or $x = -14$.",
      "The sum is $\\dfrac{1}{3} + (-14) = -\\dfrac{41}{3}$.",
      "The product is $\\dfrac{1}{3} \\cdot (-14) = -\\dfrac{14}{3}$.",
      "The ordered pair is $\\left(-\\dfrac{41}{3}, -\\dfrac{14}{3}\\right)$."
    ]
  },
  "ideas": [
    {
      "name": "The roots read off the coefficients",
      "concrete": "The quadratic $x^2 - 16x + 39$ factors as $(x - 3)(x - 13)$, so its roots are 3 and 13. Their sum 16 is minus the coefficient of $x$, and their product 39 is the constant term. For $2x^2 - 32x + 78 = 2(x - 3)(x - 13)$ the roots are the same, and the sum and product are $-\\dfrac{-32}{2}$ and $\\dfrac{78}{2}$.",
      "general": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, if $r$ and $s$ are the roots of $ax^2 + bx + c = 0$, a double root counted twice, then $ax^2 + bx + c = a(x - r)(x - s)$ for every $x$: the **factored form**. Multiplying it out and comparing coefficients gives the **sum of roots** $r + s = -\\dfrac{b}{a}$ and the **product of roots** $rs = \\dfrac{c}{a}$. An expression in $r$ and $s$ that stays the same when $r$ and $s$ swap, such as $r^2 + s^2$ or $\\dfrac{1}{r} + \\dfrac{1}{s}$, can be written with $r + s$ and $rs$ alone, so its value comes from the coefficients without the roots."
    }
  ],
  "kinds": [
    {
      "id": "t136-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the sum and the product of the roots of $x^2 - 13x + 22 = 0$, as the ordered pair (sum, product).",
            "lines": [
              {
                "step": "Find the sum and the product of the roots of $x^2 - 13x + 22 = 0$, as the ordered pair (sum, product).",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the roots is $13$.",
                "reason": "Sum of roots $-b/a$: here $a = 1$ and $b = -13$, so the sum is $13$."
              },
              {
                "step": "The product of the roots is $22$.",
                "reason": "Product of roots $c/a$: here $a = 1$ and $c = 22$, so the product is $22$."
              },
              {
                "step": "The ordered pair (sum, product) is $\\left(13, 22\\right)$.",
                "reason": "Answering the question asked: the sum comes first and the product second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum and the product of the roots of $x^2 + 8x - 33 = 0$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-8, -33)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $x^2 + 8x - 33 = 0$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $-8$.",
                  "reason": "Sum of roots $-b/a$: here $a = 1$ and $b = 8$, so the sum is $-8$."
                },
                {
                  "step": "The product of the roots is $-33$.",
                  "reason": "Product of roots $c/a$: here $a = 1$ and $c = -33$, so the product is $-33$."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(-8, -33\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            },
            {
              "prompt": "Find the sum and the product of the roots of $x^2 - 5x - 15 = 0$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5, -15)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $x^2 - 5x - 15 = 0$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $5$.",
                  "reason": "Sum of roots $-b/a$: here $a = 1$ and $b = -5$, so the sum is $5$."
                },
                {
                  "step": "The product of the roots is $-15$.",
                  "reason": "Product of roots $c/a$: here $a = 1$ and $c = -15$, so the product is $-15$."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(5, -15\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            },
            {
              "prompt": "Find the sum and the product of the roots of $x^2 + 17x + 61 = 0$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-17, 61)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $x^2 + 17x + 61 = 0$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $-17$.",
                  "reason": "Sum of roots $-b/a$: here $a = 1$ and $b = 17$, so the sum is $-17$."
                },
                {
                  "step": "The product of the roots is $61$.",
                  "reason": "Product of roots $c/a$: here $a = 1$ and $c = 61$, so the product is $61$."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(-17, 61\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum and the product of the roots of $6x^2 + 9x - 5 = 0$, as the ordered pair (sum, product).",
            "lines": [
              {
                "step": "Find the sum and the product of the roots of $6x^2 + 9x - 5 = 0$, as the ordered pair (sum, product).",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the roots is $-\\dfrac{9}{6}$.",
                "reason": "Sum of roots $-b/a$: here $a = 6$ and $b = 9$, so the sum is $-\\dfrac{9}{6}$."
              },
              {
                "step": "In lowest terms the sum is $-\\dfrac{3}{2}$.",
                "reason": "Reduced fraction: top and bottom are divided by their common factor $3$."
              },
              {
                "step": "The product of the roots is $-\\dfrac{5}{6}$.",
                "reason": "Product of roots $c/a$: here $a = 6$ and $c = -5$, so the product is $-\\dfrac{5}{6}$. This fraction is already in lowest terms."
              },
              {
                "step": "The ordered pair (sum, product) is $\\left(-\\dfrac{3}{2}, -\\dfrac{5}{6}\\right)$.",
                "reason": "Answering the question asked: the sum comes first and the product second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum and the product of the roots of $4x^2 - 10x + 1 = 0$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(5/2, 1/4)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $4x^2 - 10x + 1 = 0$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $\\dfrac{10}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = -10$, so the sum is $-\\dfrac{-10}{4}$."
                },
                {
                  "step": "In lowest terms the sum is $\\dfrac{5}{2}$.",
                  "reason": "Reduced fraction: top and bottom are divided by their common factor $2$."
                },
                {
                  "step": "The product of the roots is $\\dfrac{1}{4}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = 1$, so the product is $\\dfrac{1}{4}$. This fraction is already in lowest terms."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(\\dfrac{5}{2}, \\dfrac{1}{4}\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            },
            {
              "prompt": "Find the sum and the product of the roots of $9x^2 - 12x - 5 = 0$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4/3, -5/9)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $9x^2 - 12x - 5 = 0$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $\\dfrac{12}{9}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 9$ and $b = -12$, so the sum is $-\\dfrac{-12}{9}$."
                },
                {
                  "step": "In lowest terms the sum is $\\dfrac{4}{3}$.",
                  "reason": "Reduced fraction: top and bottom are divided by their common factor $3$."
                },
                {
                  "step": "The product of the roots is $-\\dfrac{5}{9}$.",
                  "reason": "Product of roots $c/a$: here $a = 9$ and $c = -5$, so the product is $-\\dfrac{5}{9}$. This fraction is already in lowest terms."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(\\dfrac{4}{3}, -\\dfrac{5}{9}\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            },
            {
              "prompt": "Find the sum and the product of the roots of $10x^2 - 4x - 3 = 0$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2/5, -3/10)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $10x^2 - 4x - 3 = 0$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $\\dfrac{4}{10}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 10$ and $b = -4$, so the sum is $-\\dfrac{-4}{10}$."
                },
                {
                  "step": "In lowest terms the sum is $\\dfrac{2}{5}$.",
                  "reason": "Reduced fraction: top and bottom are divided by their common factor $2$."
                },
                {
                  "step": "The product of the roots is $-\\dfrac{3}{10}$.",
                  "reason": "Product of roots $c/a$: here $a = 10$ and $c = -3$, so the product is $-\\dfrac{3}{10}$. This fraction is already in lowest terms."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(\\dfrac{2}{5}, -\\dfrac{3}{10}\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum and the product of the roots of $4x^2 = 7x + 15$, as the ordered pair (sum, product).",
            "lines": [
              {
                "step": "Find the sum and the product of the roots of $4x^2 = 7x + 15$, as the ordered pair (sum, product).",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x^2 - 7x - 15 = 0$",
                "reason": "Adding the same number to both sides: $-7x - 15$ is added to each side, which leaves 0 on the right and the shape $ax^2 + bx + c = 0$."
              },
              {
                "step": "The sum of the roots is $\\dfrac{7}{4}$.",
                "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = -7$, so the sum is $-\\dfrac{-7}{4}$."
              },
              {
                "step": "The product of the roots is $-\\dfrac{15}{4}$.",
                "reason": "Product of roots $c/a$: here $a = 4$ and $c = -15$, so the product is $-\\dfrac{15}{4}$."
              },
              {
                "step": "The ordered pair (sum, product) is $\\left(\\dfrac{7}{4}, -\\dfrac{15}{4}\\right)$.",
                "reason": "Answering the question asked: the sum comes first and the product second."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum and the product of the roots of $3x^2 = -8x + 5$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-8/3, -5/3)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $3x^2 = -8x + 5$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 + 8x - 5 = 0$",
                  "reason": "Adding the same number to both sides: $8x - 5$ is added to each side, which leaves 0 on the right and the shape $ax^2 + bx + c = 0$."
                },
                {
                  "step": "The sum of the roots is $-\\dfrac{8}{3}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = 8$, so the sum is $-\\dfrac{8}{3}$."
                },
                {
                  "step": "The product of the roots is $-\\dfrac{5}{3}$.",
                  "reason": "Product of roots $c/a$: here $a = 3$ and $c = -5$, so the product is $-\\dfrac{5}{3}$."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(-\\dfrac{8}{3}, -\\dfrac{5}{3}\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            },
            {
              "prompt": "Find the sum and the product of the roots of $5x^2 + 3x = 11$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-3/5, -11/5)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $5x^2 + 3x = 11$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x^2 + 3x - 11 = 0$",
                  "reason": "Adding the same number to both sides: $-11$ is added to each side, which leaves 0 on the right and the shape $ax^2 + bx + c = 0$."
                },
                {
                  "step": "The sum of the roots is $-\\dfrac{3}{5}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = 3$, so the sum is $-\\dfrac{3}{5}$."
                },
                {
                  "step": "The product of the roots is $-\\dfrac{11}{5}$.",
                  "reason": "Product of roots $c/a$: here $a = 5$ and $c = -11$, so the product is $-\\dfrac{11}{5}$."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(-\\dfrac{3}{5}, -\\dfrac{11}{5}\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            },
            {
              "prompt": "Find the sum and the product of the roots of $2x^2 = 9x - 3$, as the ordered pair (sum, product).",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(9/2, 3/2)",
              "lines": [
                {
                  "step": "Find the sum and the product of the roots of $2x^2 = 9x - 3$, as the ordered pair (sum, product).",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 9x + 3 = 0$",
                  "reason": "Adding the same number to both sides: $-9x + 3$ is added to each side, which leaves 0 on the right and the shape $ax^2 + bx + c = 0$."
                },
                {
                  "step": "The sum of the roots is $\\dfrac{9}{2}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = -9$, so the sum is $-\\dfrac{-9}{2}$."
                },
                {
                  "step": "The product of the roots is $\\dfrac{3}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 2$ and $c = 3$, so the product is $\\dfrac{3}{2}$."
                },
                {
                  "step": "The ordered pair (sum, product) is $\\left(\\dfrac{9}{2}, \\dfrac{3}{2}\\right)$.",
                  "reason": "Answering the question asked: the sum comes first and the product second."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t136-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the quadratic $x^2 + bx + c$ whose roots are $4$ and $-12$.",
            "lines": [
              {
                "step": "Find the quadratic $x^2 + bx + c$ whose roots are $4$ and $-12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the roots is $4 + \\left(-12\\right) = -8$, so $b = 8$.",
                "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$."
              },
              {
                "step": "The product of the roots is $4 \\cdot \\left(-12\\right) = -48$, so $c = -48$.",
                "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
              },
              {
                "step": "The quadratic is $x^2 + 8x - 48$.",
                "reason": "Substituting a value: $b$ and $c$ are replaced by their values."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quadratic $x^2 + bx + c$ whose roots are $-6$ and $-8$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+14*x+48",
              "lines": [
                {
                  "step": "Find the quadratic $x^2 + bx + c$ whose roots are $-6$ and $-8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $-6 + \\left(-8\\right) = -14$, so $b = 14$.",
                  "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$."
                },
                {
                  "step": "The product of the roots is $-6 \\cdot \\left(-8\\right) = 48$, so $c = 48$.",
                  "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
                },
                {
                  "step": "The quadratic is $x^2 + 14x + 48$.",
                  "reason": "Substituting a value: $b$ and $c$ are replaced by their values."
                }
              ]
            },
            {
              "prompt": "Find the quadratic $x^2 + bx + c$ whose roots are $8$ and $-1$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2-7*x-8",
              "lines": [
                {
                  "step": "Find the quadratic $x^2 + bx + c$ whose roots are $8$ and $-1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $8 + \\left(-1\\right) = 7$, so $b = -7$.",
                  "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$."
                },
                {
                  "step": "The product of the roots is $8 \\cdot \\left(-1\\right) = -8$, so $c = -8$.",
                  "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
                },
                {
                  "step": "The quadratic is $x^2 - 7x - 8$.",
                  "reason": "Substituting a value: $b$ and $c$ are replaced by their values."
                }
              ]
            },
            {
              "prompt": "Find the quadratic $x^2 + bx + c$ whose roots are $-2$ and $-14$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^2+16*x+28",
              "lines": [
                {
                  "step": "Find the quadratic $x^2 + bx + c$ whose roots are $-2$ and $-14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $-2 + \\left(-14\\right) = -16$, so $b = 16$.",
                  "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$."
                },
                {
                  "step": "The product of the roots is $-2 \\cdot \\left(-14\\right) = 28$, so $c = 28$.",
                  "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
                },
                {
                  "step": "The quadratic is $x^2 + 16x + 28$.",
                  "reason": "Substituting a value: $b$ and $c$ are replaced by their values."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the other root of $3x^2 + bx - 20 = 0$, given that $x = 2$ is one of its roots.",
            "lines": [
              {
                "step": "Find the other root of $3x^2 + bx - 20 = 0$, given that $x = 2$ is one of its roots.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $s$ the other root, $2s = -\\dfrac{20}{3}$.",
                "reason": "Product of roots $c/a$: here $a = 3$ and $c = -20$, so the product of the two roots is $-\\dfrac{20}{3}$."
              },
              {
                "step": "The other root is $x = -\\dfrac{10}{3}$.",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other root of $2x^2 + bx - 15 = 0$, given that $x = -3$ is one of its roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5/2",
              "lines": [
                {
                  "step": "Find the other root of $2x^2 + bx - 15 = 0$, given that $x = -3$ is one of its roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $s$ the other root, $-3s = -\\dfrac{15}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 2$ and $c = -15$, so the product of the two roots is $-\\dfrac{15}{2}$."
                },
                {
                  "step": "The other root is $x = \\dfrac{5}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-3$."
                }
              ]
            },
            {
              "prompt": "Find the other root of $4x^2 + bx - 15 = 0$, given that $x = 5$ is one of its roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -3/4",
              "lines": [
                {
                  "step": "Find the other root of $4x^2 + bx - 15 = 0$, given that $x = 5$ is one of its roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $s$ the other root, $5s = -\\dfrac{15}{4}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = -15$, so the product of the two roots is $-\\dfrac{15}{4}$."
                },
                {
                  "step": "The other root is $x = -\\dfrac{3}{4}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                }
              ]
            },
            {
              "prompt": "Find the other root of $5x^2 + bx + 14 = 0$, given that $x = -2$ is one of its roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -7/5",
              "lines": [
                {
                  "step": "Find the other root of $5x^2 + bx + 14 = 0$, given that $x = -2$ is one of its roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $s$ the other root, $-2s = \\dfrac{14}{5}$.",
                  "reason": "Product of roots $c/a$: here $a = 5$ and $c = 14$, so the product of the two roots is $\\dfrac{14}{5}$."
                },
                {
                  "step": "The other root is $x = -\\dfrac{7}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the other root of $2x^2 - 9x + c = 0$, given that $x = 5$ is one of its roots.",
            "lines": [
              {
                "step": "Find the other root of $2x^2 - 9x + c = 0$, given that $x = 5$ is one of its roots.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $s$ the other root, $5 + s = \\dfrac{9}{2}$.",
                "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = -9$, so the sum of the two roots is $\\dfrac{9}{2}$."
              },
              {
                "step": "The other root is $x = -\\dfrac{1}{2}$.",
                "reason": "Adding the same number to both sides: $-5$ is added to each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the other root of $3x^2 + 5x + c = 0$, given that $x = -4$ is one of its roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 7/3",
              "lines": [
                {
                  "step": "Find the other root of $3x^2 + 5x + c = 0$, given that $x = -4$ is one of its roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $s$ the other root, $-4 + s = -\\dfrac{5}{3}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = 5$, so the sum of the two roots is $-\\dfrac{5}{3}$."
                },
                {
                  "step": "The other root is $x = \\dfrac{7}{3}$.",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Find the other root of $4x^2 - 7x + c = 0$, given that $x = -2$ is one of its roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 15/4",
              "lines": [
                {
                  "step": "Find the other root of $4x^2 - 7x + c = 0$, given that $x = -2$ is one of its roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $s$ the other root, $-2 + s = \\dfrac{7}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = -7$, so the sum of the two roots is $\\dfrac{7}{4}$."
                },
                {
                  "step": "The other root is $x = \\dfrac{15}{4}$.",
                  "reason": "Adding the same number to both sides: $2$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Find the other root of $5x^2 + 8x + c = 0$, given that $x = 3$ is one of its roots.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = -23/5",
              "lines": [
                {
                  "step": "Find the other root of $5x^2 + 8x + c = 0$, given that $x = 3$ is one of its roots.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $s$ the other root, $3 + s = -\\dfrac{8}{5}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = 8$, so the sum of the two roots is $-\\dfrac{8}{5}$."
                },
                {
                  "step": "The other root is $x = -\\dfrac{23}{5}$.",
                  "reason": "Adding the same number to both sides: $-3$ is added to each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{7}{15}$ and product $-\\dfrac{2}{15}$.",
            "lines": [
              {
                "step": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{7}{15}$ and product $-\\dfrac{2}{15}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The roots are the roots of $x^2 - \\dfrac{7}{15}x - \\dfrac{2}{15} = 0$.",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum and the constant term is the product."
              },
              {
                "step": "$15x^2 - 7x - 2 = 0$",
                "reason": "Clearing fractions: both sides are multiplied by $15$."
              },
              {
                "step": "$(3x - 2)(5x + 1) = 0$",
                "reason": "Factoring a quadratic: the brackets multiply out to $15x^2 - 7x - 2$, since $3 \\cdot 5 = 15$, $3 \\cdot 1 + \\left(-2\\right) \\cdot 5 = -7$ and $\\left(-2\\right) \\cdot 1 = -2$."
              },
              {
                "step": "Either $3x - 2 = 0$ or $5x + 1 = 0$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "Either $3x = 2$ or $5x = -1$.",
                "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
              },
              {
                "step": "Either $x = \\dfrac{2}{3}$ or $x = -\\dfrac{1}{5}$.",
                "reason": "Dividing both sides by a nonzero number: the first equation is divided by $3$ and the second by $5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{7}{20}$ and product $-\\dfrac{3}{10}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3/4, x = -2/5",
              "lines": [
                {
                  "step": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{7}{20}$ and product $-\\dfrac{3}{10}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The roots are the roots of $x^2 - \\dfrac{7}{20}x - \\dfrac{3}{10} = 0$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum and the constant term is the product."
                },
                {
                  "step": "$20x^2 - 7x - 6 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $20$."
                },
                {
                  "step": "$(4x - 3)(5x + 2) = 0$",
                  "reason": "Factoring a quadratic: the brackets multiply out to $20x^2 - 7x - 6$, since $4 \\cdot 5 = 20$, $4 \\cdot 2 + \\left(-3\\right) \\cdot 5 = -7$ and $\\left(-3\\right) \\cdot 2 = -6$."
                },
                {
                  "step": "Either $4x - 3 = 0$ or $5x + 2 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $4x = 3$ or $5x = -2$.",
                  "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
                },
                {
                  "step": "Either $x = \\dfrac{3}{4}$ or $x = -\\dfrac{2}{5}$.",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided by $4$ and the second by $5$."
                }
              ]
            },
            {
              "prompt": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{13}{6}$ and product $-\\dfrac{5}{6}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1/3, x = 5/2",
              "lines": [
                {
                  "step": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{13}{6}$ and product $-\\dfrac{5}{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The roots are the roots of $x^2 - \\dfrac{13}{6}x - \\dfrac{5}{6} = 0$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum and the constant term is the product."
                },
                {
                  "step": "$6x^2 - 13x - 5 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $6$."
                },
                {
                  "step": "$(3x + 1)(2x - 5) = 0$",
                  "reason": "Factoring a quadratic: the brackets multiply out to $6x^2 - 13x - 5$, since $3 \\cdot 2 = 6$, $3 \\cdot \\left(-5\\right) + 1 \\cdot 2 = -13$ and $1 \\cdot \\left(-5\\right) = -5$."
                },
                {
                  "step": "Either $3x + 1 = 0$ or $2x - 5 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $3x = -1$ or $2x = 5$.",
                  "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
                },
                {
                  "step": "Either $x = -\\dfrac{1}{3}$ or $x = \\dfrac{5}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided by $3$ and the second by $2$."
                }
              ]
            },
            {
              "prompt": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{11}{6}$ and product $\\dfrac{2}{3}$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4/3, x = 1/2",
              "lines": [
                {
                  "step": "Find the roots of the equation $x^2 + bx + c = 0$, given that its roots have sum $\\dfrac{11}{6}$ and product $\\dfrac{2}{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The roots are the roots of $x^2 - \\dfrac{11}{6}x + \\dfrac{2}{3} = 0$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum and the constant term is the product."
                },
                {
                  "step": "$6x^2 - 11x + 4 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $6$."
                },
                {
                  "step": "$(3x - 4)(2x - 1) = 0$",
                  "reason": "Factoring a quadratic: the brackets multiply out to $6x^2 - 11x + 4$, since $3 \\cdot 2 = 6$, $3 \\cdot \\left(-1\\right) + \\left(-4\\right) \\cdot 2 = -11$ and $\\left(-4\\right) \\cdot \\left(-1\\right) = 4$."
                },
                {
                  "step": "Either $3x - 4 = 0$ or $2x - 1 = 0$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "Either $3x = 4$ or $2x = 1$.",
                  "reason": "Adding the same number to both sides: the constant of each bracket is taken from each side of its equation."
                },
                {
                  "step": "Either $x = \\dfrac{4}{3}$ or $x = \\dfrac{1}{2}$.",
                  "reason": "Dividing both sides by a nonzero number: the first equation is divided by $3$ and the second by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t136-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $(r - 2)(s - 2)$, where $r$ and $s$ are the roots of $2x^2 - 7x - 3 = 0$.",
            "lines": [
              {
                "step": "Find $(r - 2)(s - 2)$, where $r$ and $s$ are the roots of $2x^2 - 7x - 3 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(r - 2)(s - 2) = rs - 2r - 2s + 4$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$(r - 2)(s - 2) = rs - 2(r + s) + 4$",
                "reason": "Taking out a common factor: $2$ is a factor of the two middle terms."
              },
              {
                "step": "The sum of the roots is $r + s = \\dfrac{7}{2}$.",
                "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = -7$, so the sum is $-\\dfrac{-7}{2}$."
              },
              {
                "step": "The product of the roots is $rs = -\\dfrac{3}{2}$.",
                "reason": "Product of roots $c/a$: here $a = 2$ and $c = -3$, so the product is $-\\dfrac{3}{2}$."
              },
              {
                "step": "$(r - 2)(s - 2) = \\left(-\\dfrac{3}{2}\\right) - 2 \\cdot \\left(\\dfrac{7}{2}\\right) + 4$",
                "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
              },
              {
                "step": "$(r - 2)(s - 2) = -\\dfrac{9}{2}$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $(r + 2)(s + 2)$, where $r$ and $s$ are the roots of $3x^2 + 5x - 4 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-2/3",
              "lines": [
                {
                  "step": "Find $(r + 2)(s + 2)$, where $r$ and $s$ are the roots of $3x^2 + 5x - 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + 2)(s + 2) = rs + 2r + 2s + 4$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + 2)(s + 2) = rs + 2(r + s) + 4$",
                  "reason": "Taking out a common factor: $2$ is a factor of the two middle terms."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{5}{3}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = 5$, so the sum is $-\\dfrac{5}{3}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{4}{3}$.",
                  "reason": "Product of roots $c/a$: here $a = 3$ and $c = -4$, so the product is $-\\dfrac{4}{3}$."
                },
                {
                  "step": "$(r + 2)(s + 2) = \\left(-\\dfrac{4}{3}\\right) + 2 \\cdot \\left(-\\dfrac{5}{3}\\right) + 4$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$(r + 2)(s + 2) = -\\dfrac{2}{3}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
                }
              ]
            },
            {
              "prompt": "Find $(r - 3)(s - 3)$, where $r$ and $s$ are the roots of $5x^2 - 6x - 2 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find $(r - 3)(s - 3)$, where $r$ and $s$ are the roots of $5x^2 - 6x - 2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r - 3)(s - 3) = rs - 3r - 3s + 9$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r - 3)(s - 3) = rs - 3(r + s) + 9$",
                  "reason": "Taking out a common factor: $3$ is a factor of the two middle terms."
                },
                {
                  "step": "The sum of the roots is $r + s = \\dfrac{6}{5}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = -6$, so the sum is $-\\dfrac{-6}{5}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{2}{5}$.",
                  "reason": "Product of roots $c/a$: here $a = 5$ and $c = -2$, so the product is $-\\dfrac{2}{5}$."
                },
                {
                  "step": "$(r - 3)(s - 3) = \\left(-\\dfrac{2}{5}\\right) - 3 \\cdot \\left(\\dfrac{6}{5}\\right) + 9$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$(r - 3)(s - 3) = 5$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
                }
              ]
            },
            {
              "prompt": "Find $(r + 3)(s + 3)$, where $r$ and $s$ are the roots of $4x^2 + 9x + 2 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11/4",
              "lines": [
                {
                  "step": "Find $(r + 3)(s + 3)$, where $r$ and $s$ are the roots of $4x^2 + 9x + 2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + 3)(s + 3) = rs + 3r + 3s + 9$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + 3)(s + 3) = rs + 3(r + s) + 9$",
                  "reason": "Taking out a common factor: $3$ is a factor of the two middle terms."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{9}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = 9$, so the sum is $-\\dfrac{9}{4}$."
                },
                {
                  "step": "The product of the roots is $rs = \\dfrac{1}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = 2$, so the product is $\\dfrac{2}{4}$."
                },
                {
                  "step": "$(r + 3)(s + 3) = \\left(\\dfrac{1}{2}\\right) + 3 \\cdot \\left(-\\dfrac{9}{4}\\right) + 9$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$(r + 3)(s + 3) = \\dfrac{11}{4}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $2x^2 - 5x - 6 = 0$.",
            "lines": [
              {
                "step": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $2x^2 - 5x - 6 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(r + s)(r + s) = r^2 + rs + sr + s^2$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$(r + s)(r + s) = r^2 + 2rs + s^2$",
                "reason": "Collecting like terms: $rs + sr = 2rs$."
              },
              {
                "step": "$r^2 + s^2 = (r + s)(r + s) - 2rs$",
                "reason": "Adding the same number to both sides: $-2rs$ is added to each side, and the two sides are read from right to left."
              },
              {
                "step": "The sum of the roots is $r + s = \\dfrac{5}{2}$.",
                "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = -5$, so the sum is $-\\dfrac{-5}{2}$."
              },
              {
                "step": "The product of the roots is $rs = -3$.",
                "reason": "Product of roots $c/a$: here $a = 2$ and $c = -6$, so the product is $-\\dfrac{6}{2}$."
              },
              {
                "step": "$r^2 + s^2 = \\left(\\dfrac{5}{2}\\right) \\cdot \\left(\\dfrac{5}{2}\\right) - 2 \\cdot \\left(-3\\right)$",
                "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
              },
              {
                "step": "$r^2 + s^2 = \\dfrac{49}{4}$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $3x^2 + 4x - 2 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "28/9",
              "lines": [
                {
                  "step": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $3x^2 + 4x - 2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + s)(r + s) = r^2 + rs + sr + s^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + s)(r + s) = r^2 + 2rs + s^2$",
                  "reason": "Collecting like terms: $rs + sr = 2rs$."
                },
                {
                  "step": "$r^2 + s^2 = (r + s)(r + s) - 2rs$",
                  "reason": "Adding the same number to both sides: $-2rs$ is added to each side, and the two sides are read from right to left."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{4}{3}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = 4$, so the sum is $-\\dfrac{4}{3}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{2}{3}$.",
                  "reason": "Product of roots $c/a$: here $a = 3$ and $c = -2$, so the product is $-\\dfrac{2}{3}$."
                },
                {
                  "step": "$r^2 + s^2 = \\left(-\\dfrac{4}{3}\\right) \\cdot \\left(-\\dfrac{4}{3}\\right) - 2 \\cdot \\left(-\\dfrac{2}{3}\\right)$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$r^2 + s^2 = \\dfrac{28}{9}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
                }
              ]
            },
            {
              "prompt": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $4x^2 - 3x - 5 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "49/16",
              "lines": [
                {
                  "step": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $4x^2 - 3x - 5 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + s)(r + s) = r^2 + rs + sr + s^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + s)(r + s) = r^2 + 2rs + s^2$",
                  "reason": "Collecting like terms: $rs + sr = 2rs$."
                },
                {
                  "step": "$r^2 + s^2 = (r + s)(r + s) - 2rs$",
                  "reason": "Adding the same number to both sides: $-2rs$ is added to each side, and the two sides are read from right to left."
                },
                {
                  "step": "The sum of the roots is $r + s = \\dfrac{3}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = -3$, so the sum is $-\\dfrac{-3}{4}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{5}{4}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = -5$, so the product is $-\\dfrac{5}{4}$."
                },
                {
                  "step": "$r^2 + s^2 = \\left(\\dfrac{3}{4}\\right) \\cdot \\left(\\dfrac{3}{4}\\right) - 2 \\cdot \\left(-\\dfrac{5}{4}\\right)$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$r^2 + s^2 = \\dfrac{49}{16}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
                }
              ]
            },
            {
              "prompt": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $5x^2 + 2x - 6 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "64/25",
              "lines": [
                {
                  "step": "Find $r^2 + s^2$, where $r$ and $s$ are the roots of $5x^2 + 2x - 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + s)(r + s) = r^2 + rs + sr + s^2$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + s)(r + s) = r^2 + 2rs + s^2$",
                  "reason": "Collecting like terms: $rs + sr = 2rs$."
                },
                {
                  "step": "$r^2 + s^2 = (r + s)(r + s) - 2rs$",
                  "reason": "Adding the same number to both sides: $-2rs$ is added to each side, and the two sides are read from right to left."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{2}{5}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = 2$, so the sum is $-\\dfrac{2}{5}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{6}{5}$.",
                  "reason": "Product of roots $c/a$: here $a = 5$ and $c = -6$, so the product is $-\\dfrac{6}{5}$."
                },
                {
                  "step": "$r^2 + s^2 = \\left(-\\dfrac{2}{5}\\right) \\cdot \\left(-\\dfrac{2}{5}\\right) - 2 \\cdot \\left(-\\dfrac{6}{5}\\right)$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$r^2 + s^2 = \\dfrac{64}{25}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added over the common denominator."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $3x^2 - 8x + 2 = 0$.",
            "lines": [
              {
                "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $3x^2 - 8x + 2 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{s + r}{rs}$",
                "reason": "Single fraction: over the simplest common denominator $rs$, which is not 0 because the product of the roots is not 0."
              },
              {
                "step": "The sum of the roots is $r + s = \\dfrac{8}{3}$.",
                "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = -8$, so the sum is $-\\dfrac{-8}{3}$."
              },
              {
                "step": "The product of the roots is $rs = \\dfrac{2}{3}$.",
                "reason": "Product of roots $c/a$: here $a = 3$ and $c = 2$, so the product is $\\dfrac{2}{3}$."
              },
              {
                "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\left(\\dfrac{8}{3}\\right) \\div \\left(\\dfrac{2}{3}\\right)$",
                "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
              },
              {
                "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = 4$",
                "reason": "Complex fraction: top and bottom are multiplied by $3$, which leaves $8$ over $2$, and the fraction is then written in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $4x^2 + 7x - 3 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/3",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $4x^2 + 7x - 3 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{s + r}{rs}$",
                  "reason": "Single fraction: over the simplest common denominator $rs$, which is not 0 because the product of the roots is not 0."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{7}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = 7$, so the sum is $-\\dfrac{7}{4}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{3}{4}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = -3$, so the product is $-\\dfrac{3}{4}$."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\left(-\\dfrac{7}{4}\\right) \\div \\left(-\\dfrac{3}{4}\\right)$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{7}{3}$",
                  "reason": "Complex fraction: top and bottom are multiplied by $4$, which leaves $-7$ over $-3$, and the fraction is then written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $2x^2 - 11x + 6 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11/6",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $2x^2 - 11x + 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{s + r}{rs}$",
                  "reason": "Single fraction: over the simplest common denominator $rs$, which is not 0 because the product of the roots is not 0."
                },
                {
                  "step": "The sum of the roots is $r + s = \\dfrac{11}{2}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = -11$, so the sum is $-\\dfrac{-11}{2}$."
                },
                {
                  "step": "The product of the roots is $rs = 3$.",
                  "reason": "Product of roots $c/a$: here $a = 2$ and $c = 6$, so the product is $\\dfrac{6}{2}$."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\left(\\dfrac{11}{2}\\right) \\div 3$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{11}{6}$",
                  "reason": "Complex fraction: top and bottom are multiplied by $2$, which leaves $11$ over $6$, and the fraction is then written in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $5x^2 + 9x - 4 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/4",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{r} + \\dfrac{1}{s}$, where $r$ and $s$ are the roots of $5x^2 + 9x - 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{s + r}{rs}$",
                  "reason": "Single fraction: over the simplest common denominator $rs$, which is not 0 because the product of the roots is not 0."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{9}{5}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = 9$, so the sum is $-\\dfrac{9}{5}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{4}{5}$.",
                  "reason": "Product of roots $c/a$: here $a = 5$ and $c = -4$, so the product is $-\\dfrac{4}{5}$."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\left(-\\dfrac{9}{5}\\right) \\div \\left(-\\dfrac{4}{5}\\right)$",
                  "reason": "Substituting a value: $r + s$ and $rs$ are replaced by their values, in brackets."
                },
                {
                  "step": "$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{9}{4}$",
                  "reason": "Complex fraction: top and bottom are multiplied by $5$, which leaves $-9$ over $-4$, and the fraction is then written in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t136-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $3x^2 - 11x + 2 = 0$.",
            "lines": [
              {
                "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $3x^2 - 11x + 2 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the roots is $r + s = \\dfrac{11}{3}$.",
                "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = -11$, so the sum is $-\\dfrac{-11}{3}$."
              },
              {
                "step": "The product of the roots is $rs = \\dfrac{2}{3}$.",
                "reason": "Product of roots $c/a$: here $a = 3$ and $c = 2$, so the product is $\\dfrac{2}{3}$."
              },
              {
                "step": "The new roots have sum $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{r + s}{rs} = \\dfrac{11}{2}$.",
                "reason": "Single fraction: over the common denominator $rs$, and lines 2 and 3 give its top and its bottom."
              },
              {
                "step": "The new roots have product $\\dfrac{1}{r} \\cdot \\dfrac{1}{s} = \\dfrac{1}{rs} = \\dfrac{3}{2}$.",
                "reason": "The product formula, from arithmetic: tops multiply and bottoms multiply, and line 3 gives $rs$."
              },
              {
                "step": "$x^2 - \\dfrac{11}{2}x + \\dfrac{3}{2} = 0$",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
              },
              {
                "step": "$2x^2 - 11x + 3 = 0$",
                "reason": "Clearing fractions: both sides are multiplied by $2$."
              },
              {
                "step": "The quadratic asked for is $2x^2 - 11x + 3$.",
                "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $2x^2 + 9x + 7 = 0$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "7*x^2+9*x+2",
              "lines": [
                {
                  "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $2x^2 + 9x + 7 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{9}{2}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = 9$, so the sum is $-\\dfrac{9}{2}$."
                },
                {
                  "step": "The product of the roots is $rs = \\dfrac{7}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 2$ and $c = 7$, so the product is $\\dfrac{7}{2}$."
                },
                {
                  "step": "The new roots have sum $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{r + s}{rs} = -\\dfrac{9}{7}$.",
                  "reason": "Single fraction: over the common denominator $rs$, and lines 2 and 3 give its top and its bottom."
                },
                {
                  "step": "The new roots have product $\\dfrac{1}{r} \\cdot \\dfrac{1}{s} = \\dfrac{1}{rs} = \\dfrac{2}{7}$.",
                  "reason": "The product formula, from arithmetic: tops multiply and bottoms multiply, and line 3 gives $rs$."
                },
                {
                  "step": "$x^2 + \\dfrac{9}{7}x + \\dfrac{2}{7} = 0$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
                },
                {
                  "step": "$7x^2 + 9x + 2 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $7$."
                },
                {
                  "step": "The quadratic asked for is $7x^2 + 9x + 2$.",
                  "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
                }
              ]
            },
            {
              "prompt": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $6x^2 - 11x + 3 = 0$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^2-11*x+6",
              "lines": [
                {
                  "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $6x^2 - 11x + 3 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $r + s = \\dfrac{11}{6}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 6$ and $b = -11$, so the sum is $-\\dfrac{-11}{6}$."
                },
                {
                  "step": "The product of the roots is $rs = \\dfrac{1}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 6$ and $c = 3$, so the product is $\\dfrac{3}{6}$."
                },
                {
                  "step": "The new roots have sum $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{r + s}{rs} = \\dfrac{11}{3}$.",
                  "reason": "Single fraction: over the common denominator $rs$, and lines 2 and 3 give its top and its bottom."
                },
                {
                  "step": "The new roots have product $\\dfrac{1}{r} \\cdot \\dfrac{1}{s} = \\dfrac{1}{rs} = 2$.",
                  "reason": "The product formula, from arithmetic: tops multiply and bottoms multiply, and line 3 gives $rs$."
                },
                {
                  "step": "$x^2 - \\dfrac{11}{3}x + 2 = 0$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
                },
                {
                  "step": "$3x^2 - 11x + 6 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $3$."
                },
                {
                  "step": "The quadratic asked for is $3x^2 - 11x + 6$.",
                  "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
                }
              ]
            },
            {
              "prompt": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $4x^2 + 13x + 6 = 0$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*x^2+13*x+4",
              "lines": [
                {
                  "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $\\dfrac{1}{r}$ and $\\dfrac{1}{s}$, where $r$ and $s$ are the roots of $4x^2 + 13x + 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{13}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = 13$, so the sum is $-\\dfrac{13}{4}$."
                },
                {
                  "step": "The product of the roots is $rs = \\dfrac{3}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = 6$, so the product is $\\dfrac{6}{4}$."
                },
                {
                  "step": "The new roots have sum $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{r + s}{rs} = -\\dfrac{13}{6}$.",
                  "reason": "Single fraction: over the common denominator $rs$, and lines 2 and 3 give its top and its bottom."
                },
                {
                  "step": "The new roots have product $\\dfrac{1}{r} \\cdot \\dfrac{1}{s} = \\dfrac{1}{rs} = \\dfrac{2}{3}$.",
                  "reason": "The product formula, from arithmetic: tops multiply and bottoms multiply, and line 3 gives $rs$."
                },
                {
                  "step": "$x^2 + \\dfrac{13}{6}x + \\dfrac{2}{3} = 0$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
                },
                {
                  "step": "$6x^2 + 13x + 4 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $6$."
                },
                {
                  "step": "The quadratic asked for is $6x^2 + 13x + 4$.",
                  "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $2r$ and $2s$, where $r$ and $s$ are the roots of $3x^2 + 7x - 4 = 0$.",
            "lines": [
              {
                "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $2r$ and $2s$, where $r$ and $s$ are the roots of $3x^2 + 7x - 4 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the roots is $r + s = -\\dfrac{7}{3}$.",
                "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = 7$, so the sum is $-\\dfrac{7}{3}$."
              },
              {
                "step": "The product of the roots is $rs = -\\dfrac{4}{3}$.",
                "reason": "Product of roots $c/a$: here $a = 3$ and $c = -4$, so the product is $-\\dfrac{4}{3}$."
              },
              {
                "step": "The new roots have sum $2r + 2s = 2(r + s) = -\\dfrac{14}{3}$.",
                "reason": "Taking out a common factor: $2$ is a factor of both terms, and line 2 gives $r + s$."
              },
              {
                "step": "The new roots have product $(2r)(2s) = 4rs = -\\dfrac{16}{3}$.",
                "reason": "The commutative and associative laws of multiplication, from arithmetic: the numbers are multiplied together, and line 3 gives $rs$."
              },
              {
                "step": "$x^2 + \\dfrac{14}{3}x - \\dfrac{16}{3} = 0$",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
              },
              {
                "step": "$3x^2 + 14x - 16 = 0$",
                "reason": "Clearing fractions: both sides are multiplied by $3$."
              },
              {
                "step": "The quadratic asked for is $3x^2 + 14x - 16$.",
                "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $3r$ and $3s$, where $r$ and $s$ are the roots of $2x^2 - 13x + 6 = 0$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^2-39*x+54",
              "lines": [
                {
                  "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $3r$ and $3s$, where $r$ and $s$ are the roots of $2x^2 - 13x + 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $r + s = \\dfrac{13}{2}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = -13$, so the sum is $-\\dfrac{-13}{2}$."
                },
                {
                  "step": "The product of the roots is $rs = 3$.",
                  "reason": "Product of roots $c/a$: here $a = 2$ and $c = 6$, so the product is $\\dfrac{6}{2}$."
                },
                {
                  "step": "The new roots have sum $3r + 3s = 3(r + s) = \\dfrac{39}{2}$.",
                  "reason": "Taking out a common factor: $3$ is a factor of both terms, and line 2 gives $r + s$."
                },
                {
                  "step": "The new roots have product $(3r)(3s) = 9rs = 27$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the numbers are multiplied together, and line 3 gives $rs$."
                },
                {
                  "step": "$x^2 - \\dfrac{39}{2}x + 27 = 0$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
                },
                {
                  "step": "$2x^2 - 39x + 54 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $2$."
                },
                {
                  "step": "The quadratic asked for is $2x^2 - 39x + 54$.",
                  "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
                }
              ]
            },
            {
              "prompt": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $2r$ and $2s$, where $r$ and $s$ are the roots of $5x^2 - 3x - 1 = 0$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5*x^2-6*x-4",
              "lines": [
                {
                  "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $2r$ and $2s$, where $r$ and $s$ are the roots of $5x^2 - 3x - 1 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $r + s = \\dfrac{3}{5}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = -3$, so the sum is $-\\dfrac{-3}{5}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{1}{5}$.",
                  "reason": "Product of roots $c/a$: here $a = 5$ and $c = -1$, so the product is $-\\dfrac{1}{5}$."
                },
                {
                  "step": "The new roots have sum $2r + 2s = 2(r + s) = \\dfrac{6}{5}$.",
                  "reason": "Taking out a common factor: $2$ is a factor of both terms, and line 2 gives $r + s$."
                },
                {
                  "step": "The new roots have product $(2r)(2s) = 4rs = -\\dfrac{4}{5}$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the numbers are multiplied together, and line 3 gives $rs$."
                },
                {
                  "step": "$x^2 - \\dfrac{6}{5}x - \\dfrac{4}{5} = 0$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
                },
                {
                  "step": "$5x^2 - 6x - 4 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $5$."
                },
                {
                  "step": "The quadratic asked for is $5x^2 - 6x - 4$.",
                  "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
                }
              ]
            },
            {
              "prompt": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $3r$ and $3s$, where $r$ and $s$ are the roots of $4x^2 + 7x - 2 = 0$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "4*x^2+21*x-18",
              "lines": [
                {
                  "step": "Find the quadratic with whole-number coefficients, no common factor and $x^2$-coefficient above 0 whose roots are $3r$ and $3s$, where $r$ and $s$ are the roots of $4x^2 + 7x - 2 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the roots is $r + s = -\\dfrac{7}{4}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 4$ and $b = 7$, so the sum is $-\\dfrac{7}{4}$."
                },
                {
                  "step": "The product of the roots is $rs = -\\dfrac{1}{2}$.",
                  "reason": "Product of roots $c/a$: here $a = 4$ and $c = -2$, so the product is $-\\dfrac{2}{4}$."
                },
                {
                  "step": "The new roots have sum $3r + 3s = 3(r + s) = -\\dfrac{21}{4}$.",
                  "reason": "Taking out a common factor: $3$ is a factor of both terms, and line 2 gives $r + s$."
                },
                {
                  "step": "The new roots have product $(3r)(3s) = 9rs = -\\dfrac{9}{2}$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the numbers are multiplied together, and line 3 gives $rs$."
                },
                {
                  "step": "$x^2 + \\dfrac{21}{4}x - \\dfrac{9}{2} = 0$",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: with $a = 1$, the coefficient of $x$ is minus the sum of the new roots and the constant term is their product."
                },
                {
                  "step": "$4x^2 + 21x - 18 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $4$."
                },
                {
                  "step": "The quadratic asked for is $4x^2 + 21x - 18$.",
                  "reason": "Answering the question asked: the left side, with whole-number coefficients, no common factor and $x^2$-coefficient above 0."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t136-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $5x^2 - 8x - 3 = 0$, and write that line right.",
            "given": [
              "$5x^2 - 8x - 3 = 0$",
              "$r + s = -\\dfrac{8}{5}$",
              "$rs = -\\dfrac{3}{5}$",
              "$(r + s, rs) = \\left(-\\dfrac{8}{5}, -\\dfrac{3}{5}\\right)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $5x^2 - 8x - 3 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 2 gives the sum of the roots as $\\dfrac{b}{a} = -\\dfrac{8}{5}$.",
                "reason": "A sign lost: the sum of the roots is $-\\dfrac{b}{a}$, so the sign in front is dropped."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
              },
              {
                "step": "Line 2 written right is $r + s = \\dfrac{8}{5}$.",
                "reason": "Sum of roots $-b/a$: here $a = 5$ and $b = -8$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $3x^2 + 10x - 4 = 0$, and write that line right.",
              "given": [
                "$3x^2 + 10x - 4 = 0$",
                "$rs = -\\dfrac{4}{3}$",
                "$r + s = \\dfrac{10}{3}$",
                "$(r + s, rs) = \\left(\\dfrac{10}{3}, -\\dfrac{4}{3}\\right)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: r+s = -10/3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $3x^2 + 10x - 4 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 gives the sum of the roots as $\\dfrac{b}{a} = \\dfrac{10}{3}$.",
                  "reason": "A sign lost: the sum of the roots is $-\\dfrac{b}{a}$, so the sign in front is dropped."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 3 written right is $r + s = -\\dfrac{10}{3}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 3$ and $b = 10$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $7x^2 - 10x + 2 = 0$, and write that line right.",
              "given": [
                "$7x^2 - 10x + 2 = 0$",
                "$rs = \\dfrac{2}{7}$",
                "$r + s = -\\dfrac{10}{7}$",
                "$(r + s, rs) = \\left(-\\dfrac{10}{7}, \\dfrac{2}{7}\\right)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: r+s = 10/7",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $7x^2 - 10x + 2 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 gives the sum of the roots as $\\dfrac{b}{a} = -\\dfrac{10}{7}$.",
                  "reason": "A sign lost: the sum of the roots is $-\\dfrac{b}{a}$, so the sign in front is dropped."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 3 written right is $r + s = \\dfrac{10}{7}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 7$ and $b = -10$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $2x^2 + 13x - 9 = 0$, and write that line right.",
              "given": [
                "$2x^2 + 13x - 9 = 0$",
                "$r + s = \\dfrac{13}{2}$",
                "$rs = -\\dfrac{9}{2}$",
                "$(r + s, rs) = \\left(\\dfrac{13}{2}, -\\dfrac{9}{2}\\right)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: r+s = -13/2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $2x^2 + 13x - 9 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 gives the sum of the roots as $\\dfrac{b}{a} = \\dfrac{13}{2}$.",
                  "reason": "A sign lost: the sum of the roots is $-\\dfrac{b}{a}$, so the sign in front is dropped."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 2 written right is $r + s = -\\dfrac{13}{2}$.",
                  "reason": "Sum of roots $-b/a$: here $a = 2$ and $b = 13$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $3x^2 - 7x - 1 = 0$, and write that line right.",
            "given": [
              "$3x^2 - 7x - 1 = 0$",
              "$r + s = \\dfrac{7}{3}$",
              "$rs = -\\dfrac{1}{3}$",
              "$r^2 + s^2 = \\left(\\dfrac{7}{3}\\right)^2$",
              "$r^2 + s^2 = \\dfrac{49}{9}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $3x^2 - 7x - 1 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1, 2 and 3 are right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 4 gives $r^2 + s^2$ as the square of the sum, $\\left(\\dfrac{7}{3}\\right)^2$.",
                "reason": "A power taken term by term over a sum: by every term of one bracket times every term of the other, $(r + s)(r + s) = r^2 + 2rs + s^2$, so the square of the sum is $2rs$ more than the two squares."
              },
              {
                "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
              },
              {
                "step": "Line 4 written right is $r^2 + s^2 = \\left(\\dfrac{7}{3}\\right)^2 - 2 \\cdot \\left(-\\dfrac{1}{3}\\right)$.",
                "reason": "Every term of one bracket times every term of the other: $(r + s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r + s)^2 - 2rs$, with the values of $r + s$ and $rs$ put in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $2x^2 + 5x - 4 = 0$, and write that line right.",
              "given": [
                "$2x^2 + 5x - 4 = 0$",
                "$r + s = -\\dfrac{5}{2}$ and $rs = -2$",
                "$r^2 + s^2 = \\left(-\\dfrac{5}{2}\\right)^2$",
                "$r^2 + s^2 = \\dfrac{25}{4}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: r^2+s^2 = (-5/2)^2-2*(-2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $2x^2 + 5x - 4 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 gives $r^2 + s^2$ as the square of the sum, $\\left(-\\dfrac{5}{2}\\right)^2$.",
                  "reason": "A power taken term by term over a sum: by every term of one bracket times every term of the other, $(r + s)(r + s) = r^2 + 2rs + s^2$, so the square of the sum is $2rs$ more than the two squares."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 3 written right is $r^2 + s^2 = \\left(-\\dfrac{5}{2}\\right)^2 - 2 \\cdot \\left(-2\\right)$.",
                  "reason": "Every term of one bracket times every term of the other: $(r + s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r + s)^2 - 2rs$, with the values of $r + s$ and $rs$ put in."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $5x^2 - 9x + 3 = 0$, and write that line right.",
              "given": [
                "$5x^2 - 9x + 3 = 0$",
                "$r + s = \\dfrac{9}{5}$ and $rs = \\dfrac{3}{5}$",
                "$r^2 + s^2 = \\left(\\dfrac{9}{5}\\right)^2$",
                "$r^2 + s^2 = \\dfrac{81}{25}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: r^2+s^2 = (9/5)^2-2*(3/5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $5x^2 - 9x + 3 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 gives $r^2 + s^2$ as the square of the sum, $\\left(\\dfrac{9}{5}\\right)^2$.",
                  "reason": "A power taken term by term over a sum: by every term of one bracket times every term of the other, $(r + s)(r + s) = r^2 + 2rs + s^2$, so the square of the sum is $2rs$ more than the two squares."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 3 written right is $r^2 + s^2 = \\left(\\dfrac{9}{5}\\right)^2 - 2 \\cdot \\left(\\dfrac{3}{5}\\right)$.",
                  "reason": "Every term of one bracket times every term of the other: $(r + s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r + s)^2 - 2rs$, with the values of $r + s$ and $rs$ put in."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $7x^2 + 4x - 2 = 0$, and write that line right.",
              "given": [
                "$7x^2 + 4x - 2 = 0$",
                "$r + s = -\\dfrac{4}{7}$",
                "$rs = -\\dfrac{2}{7}$",
                "$r^2 + s^2 = \\left(-\\dfrac{4}{7}\\right)^2$",
                "$r^2 + s^2 = \\dfrac{16}{49}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: r^2+s^2 = (-4/7)^2-2*(-2/7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $r^2 + s^2$, where $r$ and $s$ are the roots of $7x^2 + 4x - 2 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1, 2 and 3 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 4 gives $r^2 + s^2$ as the square of the sum, $\\left(-\\dfrac{4}{7}\\right)^2$.",
                  "reason": "A power taken term by term over a sum: by every term of one bracket times every term of the other, $(r + s)(r + s) = r^2 + 2rs + s^2$, so the square of the sum is $2rs$ more than the two squares."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 4 written right is $r^2 + s^2 = \\left(-\\dfrac{4}{7}\\right)^2 - 2 \\cdot \\left(-\\dfrac{2}{7}\\right)$.",
                  "reason": "Every term of one bracket times every term of the other: $(r + s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r + s)^2 - 2rs$, with the values of $r + s$ and $rs$ put in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $4x^2 = 9x + 5$, and write that line right.",
            "given": [
              "$4x^2 = 9x + 5$",
              "$4x^2 + 9x - 5 = 0$",
              "$r + s = -\\dfrac{9}{4}$",
              "$rs = -\\dfrac{5}{4}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $4x^2 = 9x + 5$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 2 moves $9x$ to the left side and keeps its sign.",
                "reason": "A sign lost: adding $-9x$ to both sides leaves $-9x$ on the left, so the term changes sign as it moves."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
              },
              {
                "step": "Line 2 written right is $4x^2 - 9x - 5 = 0$.",
                "reason": "Adding the same number to both sides: each term that moves changes its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $6x^2 = -17x - 4$, and write that line right.",
              "given": [
                "$6x^2 = -17x - 4$",
                "$6x^2 + 17x = -4$",
                "$6x^2 + 17x - 4 = 0$",
                "$r + s = -\\dfrac{17}{6}$",
                "$rs = -\\dfrac{2}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 6*x^2+17*x+4 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $6x^2 = -17x - 4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 moves $-4$ to the left side and keeps its sign.",
                  "reason": "A sign lost: adding $4$ to both sides leaves $4$ on the left, so the term changes sign as it moves."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 3 written right is $6x^2 + 17x + 4 = 0$.",
                  "reason": "Adding the same number to both sides: each term that moves changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $3x^2 = 2x + 11$, and write that line right.",
              "given": [
                "$3x^2 = 2x + 11$",
                "$3x^2 + 2x - 11 = 0$",
                "$r + s = -\\dfrac{2}{3}$",
                "$rs = -\\dfrac{11}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 3*x^2-2*x-11 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $3x^2 = 2x + 11$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 moves $2x$ to the left side and keeps its sign.",
                  "reason": "A sign lost: adding $-2x$ to both sides leaves $-2x$ on the left, so the term changes sign as it moves."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 2 written right is $3x^2 - 2x - 11 = 0$.",
                  "reason": "Adding the same number to both sides: each term that moves changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $7x^2 = 13x - 3$, and write that line right.",
              "given": [
                "$7x^2 = 13x - 3$",
                "$7x^2 - 13x = -3$",
                "$7x^2 - 13x - 3 = 0$",
                "$r + s = \\dfrac{13}{7}$",
                "$rs = -\\dfrac{3}{7}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 7*x^2-13*x+3 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum and the product of the roots $r$ and $s$ of $7x^2 = 13x - 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the equation as given, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 3 moves $-3$ to the left side and keeps its sign.",
                  "reason": "A sign lost: adding $3$ to both sides leaves $3$ on the left, so the term changes sign as it moves."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line follows from the lines before it by a rule that holds, and carries the wrong value with it."
                },
                {
                  "step": "Line 3 written right is $7x^2 - 13x + 3 = 0$.",
                  "reason": "Adding the same number to both sides: each term that moves changes its sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t136-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: Two numbers add up to $14$ and multiply to $31$.",
            "lines": [
              {
                "step": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: Two numbers add up to $14$ and multiply to $31$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The coefficient of $x$ is minus the sum, $-14$.",
                "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$, so $b = -14$."
              },
              {
                "step": "The constant term is the product, $31$.",
                "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
              },
              {
                "step": "$x^2 - 14x + 31 = 0$",
                "reason": "Writing a sentence as an equation: $x^2$ comes first, then the term in $x$ and the constant term, and 0 stands on the right."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: The sum of two numbers is $-3$, and their product is $-11$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+3*x-11 = 0",
              "lines": [
                {
                  "step": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: The sum of two numbers is $-3$, and their product is $-11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficient of $x$ is minus the sum, $3$.",
                  "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$, so $b = 3$."
                },
                {
                  "step": "The constant term is the product, $-11$.",
                  "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
                },
                {
                  "step": "$x^2 + 3x - 11 = 0$",
                  "reason": "Writing a sentence as an equation: $x^2$ comes first, then the term in $x$ and the constant term, and 0 stands on the right."
                }
              ]
            },
            {
              "prompt": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: Two numbers have product $-17$ and sum $6$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2-6*x-17 = 0",
              "lines": [
                {
                  "step": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: Two numbers have product $-17$ and sum $6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficient of $x$ is minus the sum, $-6$.",
                  "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$, so $b = -6$."
                },
                {
                  "step": "The constant term is the product, $-17$.",
                  "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
                },
                {
                  "step": "$x^2 - 6x - 17 = 0$",
                  "reason": "Writing a sentence as an equation: $x^2$ comes first, then the term in $x$ and the constant term, and 0 stands on the right."
                }
              ]
            },
            {
              "prompt": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: One number times another is $14$, and the two numbers together make $-9$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+9*x+14 = 0",
              "lines": [
                {
                  "step": "Write a quadratic equation in $x$ whose two roots are the numbers in this sentence, with $x^2$ as its first term and 0 on the right: One number times another is $14$, and the two numbers together make $-9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The coefficient of $x$ is minus the sum, $9$.",
                  "reason": "Sum of roots $-b/a$: with $a = 1$ the sum of the roots is $-b$, so $b = 9$."
                },
                {
                  "step": "The constant term is the product, $14$.",
                  "reason": "Product of roots $c/a$: with $a = 1$ the product of the roots is $c$."
                },
                {
                  "step": "$x^2 + 9x + 14 = 0$",
                  "reason": "Writing a sentence as an equation: $x^2$ comes first, then the term in $x$ and the constant term, and 0 stands on the right."
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
      "id": "t136-p1",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, if $r$ and $s$ are the roots of $ax^2 + bx + c = 0$, then $r + s = -\\dfrac{b}{a}$ and $rs = \\dfrac{c}{a}$.",
      "idea": "Write the quadratic in factored form, multiply the brackets out, and compare the coefficient of $x$ and the constant term on the two sides.",
      "lines": [
        {
          "line": "For every $x$, $ax^2 + bx + c = a(x - r)(x - s)$.",
          "reason": "Factored form $a(x-r)(x-s)$: $r$ and $s$ are the roots."
        },
        {
          "line": "The product $(x - r)(x - s)$ equals $x^2 - sx - rx + rs$.",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "The sum $x^2 - sx - rx + rs$ equals $x^2 - (r + s)x + rs$.",
          "reason": "Collecting like terms: $-sx - rx = -(r + s)x$."
        },
        {
          "line": "So $a(x - r)(x - s) = ax^2 - a(r + s)x + ars$.",
          "reason": "Multiplying out: $a$ multiplies each term of the sum in line 3."
        },
        {
          "line": "So $ax^2 + bx + c = ax^2 - a(r + s)x + ars$ for every $x$.",
          "reason": "Transitive property: lines 1 to 4."
        },
        {
          "line": "So $b = -a(r + s)$.",
          "reason": "Equal for all $x$ means equal coefficients: the coefficients of $x$ agree."
        },
        {
          "line": "And $c = ars$.",
          "reason": "Equal for all $x$ means equal coefficients: the constant terms agree."
        },
        {
          "line": "So $-\\dfrac{b}{a} = r + s$.",
          "reason": "Dividing both sides by a nonzero number: both sides of line 6 are divided by $-a$, which is not 0."
        },
        {
          "line": "And $\\dfrac{c}{a} = rs$.",
          "reason": "Dividing both sides by a nonzero number: both sides of line 7 are divided by $a$."
        },
        {
          "line": "Therefore $r + s = -\\dfrac{b}{a}$ and $rs = \\dfrac{c}{a}$.",
          "reason": "Symmetric property: lines 8 and 9 read from right to left."
        }
      ]
    },
    {
      "id": "t136-p2",
      "method": "direct proof",
      "statement": "For numbers $a$, $b$ and $c$ with $a \\ne 0$, if $r$ and $s$ are two different roots of $ax^2 + bx + c = 0$, then the roots of $x^2 + bx + ac = 0$ are $ar$ and $as$.",
      "idea": "Put $x = ar$ into the new quadratic: the result is $a$ times the old quadratic at $r$, which is 0. The same holds for $s$, and a quadratic has no third root.",
      "lines": [
        {
          "line": "The root $r$ gives $ar^2 + br + c = 0$.",
          "reason": "Root of an equation: $r$ makes the equation true."
        },
        {
          "line": "With $x = ar$, the left side of $x^2 + bx + ac = 0$ is $(ar)^2 + b(ar) + ac$.",
          "reason": "Substituting a value: $x$ is replaced by $ar$, in brackets."
        },
        {
          "line": "The power $(ar)^2$ equals $a^2r^2$.",
          "reason": "Power of a product $(ab)^n=a^nb^n$, with $n = 2$."
        },
        {
          "line": "So the left side is $a^2r^2 + abr + ac$.",
          "reason": "Line 3, and the commutative and associative laws of multiplication, from arithmetic, for $b(ar) = abr$."
        },
        {
          "line": "The sum $a^2r^2 + abr + ac$ equals $a(ar^2 + br + c)$.",
          "reason": "Taking out a common factor: $a$ is a factor of all three terms."
        },
        {
          "line": "The product $a(ar^2 + br + c)$ equals $a \\cdot 0$.",
          "reason": "Substituting a value: line 1 gives the value of the bracket."
        },
        {
          "line": "The product $a \\cdot 0$ equals 0.",
          "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
        },
        {
          "line": "So $x = ar$ is a root of $x^2 + bx + ac = 0$.",
          "reason": "Transitive property: lines 2 to 7 give the left side the value 0."
        },
        {
          "line": "In the same way, $x = as$ is a root of $x^2 + bx + ac = 0$.",
          "reason": "Lines 1 to 8 with $s$ in place of $r$."
        },
        {
          "line": "The numbers $ar$ and $as$ are different.",
          "reason": "Dividing both sides by a nonzero number: $ar = as$ would give $r = s$, and $r$ and $s$ are different."
        },
        {
          "line": "Therefore the roots of $x^2 + bx + ac = 0$ are $ar$ and $as$.",
          "reason": "A quadratic has at most two roots: lines 8, 9 and 10 give two different roots, so there is no other."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t136-s1",
      "method": "proof of existence by construction",
      "statement": "Prove that for all numbers $b$, $c$ and $x$, if $x^2 - bx + c = 0$, then there is a number $y$ with $y^2 - by + c = 0$, $x + y = b$ and $xy = c$. Facts it may use: adding the same number to both sides, taking out a common factor, collecting like terms, substituting a value, transitive property, the assumptions on multiplication.",
      "check": {
        "proof": [
          {
            "line": "Suppose that $x^2 - bx + c = 0$.",
            "reason": "The hypothesis."
          },
          {
            "line": "Then $c = bx - x^2$.",
            "reason": "Adding the same number to both sides: $bx - x^2$ is added to each side, and the sides are read from right to left."
          },
          {
            "line": "The difference $bx - x^2$ equals $x(b - x)$.",
            "reason": "Taking out a common factor: $x$ is a factor of both terms."
          },
          {
            "line": "So $c = x(b - x)$.",
            "reason": "Transitive property: lines 2 and 3."
          },
          {
            "line": "Take $y = b - x$.",
            "reason": "Proof of existence by construction: the number is named, and lines 6 to 15 check it."
          },
          {
            "line": "Then $x + y = x + (b - x)$.",
            "reason": "Substituting a value: $y$ is replaced by $b - x$, in brackets."
          },
          {
            "line": "The sum $x + (b - x)$ equals $b$.",
            "reason": "Collecting like terms: $x - x = 0$."
          },
          {
            "line": "And $xy = x(b - x)$.",
            "reason": "Substituting a value: $y$ is replaced by $b - x$, in brackets."
          },
          {
            "line": "So $xy = c$.",
            "reason": "Transitive property: lines 8 and 4."
          },
          {
            "line": "Then $y^2 - by + c = y^2 - by + xy$.",
            "reason": "Substituting a value: line 9 gives $c = xy$."
          },
          {
            "line": "The sum $y^2 - by + xy$ equals $y(y - b + x)$.",
            "reason": "Taking out a common factor: $y$ is a factor of all three terms."
          },
          {
            "line": "The sum $y - b + x$ equals $(b - x) - b + x$.",
            "reason": "Substituting a value: $y$ is replaced by $b - x$, in brackets."
          },
          {
            "line": "The sum $(b - x) - b + x$ equals 0.",
            "reason": "Collecting like terms: $b - b = 0$ and $-x + x = 0$."
          },
          {
            "line": "So $y^2 - by + c = y \\cdot 0$.",
            "reason": "Transitive property: lines 10 to 13."
          },
          {
            "line": "The product $y \\cdot 0$ equals 0.",
            "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
          },
          {
            "line": "Therefore $y = b - x$ has $y^2 - by + c = 0$, $x + y = b$ and $xy = c$.",
            "reason": "Lines 7, 9, 14 and 15."
          }
        ]
      }
    },
    {
      "id": "t136-s2",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$ with $a \\ne 0$, if $r$ and $s$ are two different roots of $ax^2 + bx + c = 0$, then $ax^2 + bx + c = a(x - r)(x - s)$ for every $x$. Facts it may use: root of an equation, multiplying both sides by the same number, adding two equations, every term of one bracket times every term of the other, collecting like terms, the zero-product property, adding the same number to both sides, substituting a value, multiplying out, transitive property.",
      "check": {
        "proof": [
          {
            "line": "The root $r$ gives $ar^2 + br + c = 0$.",
            "reason": "Root of an equation: $r$ makes the equation true."
          },
          {
            "line": "The root $s$ gives $as^2 + bs + c = 0$.",
            "reason": "Root of an equation: $s$ makes the equation true."
          },
          {
            "line": "So $-as^2 - bs - c = 0$.",
            "reason": "Multiplying both sides by the same number: both sides of line 2 are multiplied by $-1$."
          },
          {
            "line": "So $ar^2 - as^2 + br - bs = 0$.",
            "reason": "Adding two equations: line 3 is added to line 1, and $c$ and $-c$ cancel."
          },
          {
            "line": "The product $(r - s)(ar + as + b)$ equals $ar^2 + ars + br - asr - as^2 - bs$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "The sum $ar^2 + ars + br - asr - as^2 - bs$ equals $ar^2 - as^2 + br - bs$.",
            "reason": "Collecting like terms: $ars - asr = 0$."
          },
          {
            "line": "So $(r - s)(ar + as + b) = 0$.",
            "reason": "Transitive property: lines 4, 5 and 6."
          },
          {
            "line": "So $r - s = 0$ or $ar + as + b = 0$.",
            "reason": "The zero-product property."
          },
          {
            "line": "The difference $r - s$ is not 0.",
            "reason": "The hypothesis: $r$ and $s$ are different."
          },
          {
            "line": "So $ar + as + b = 0$.",
            "reason": "Lines 8 and 9: the first case is ruled out."
          },
          {
            "line": "So $b = -ar - as$.",
            "reason": "Adding the same number to both sides: $-ar - as$ is added to each side."
          },
          {
            "line": "And $c = -ar^2 - br$.",
            "reason": "Adding the same number to both sides: $-ar^2 - br$ is added to each side of line 1."
          },
          {
            "line": "So $c = -ar^2 - (-ar - as)r$.",
            "reason": "Substituting a value: line 11 gives $b$, in brackets."
          },
          {
            "line": "The product $(-ar - as)r$ equals $-ar^2 - asr$.",
            "reason": "Multiplying out: $r$ multiplies each term of the bracket."
          },
          {
            "line": "So $-ar^2 - (-ar - as)r = -ar^2 + ar^2 + asr$.",
            "reason": "Subtracting a bracket changes every sign in it: line 14 gives the bracket."
          },
          {
            "line": "The sum $-ar^2 + ar^2 + asr$ equals $ars$.",
            "reason": "Collecting like terms: $-ar^2 + ar^2 = 0$."
          },
          {
            "line": "So $ax^2 + bx + c = ax^2 + (-ar - as)x + ars$.",
            "reason": "Substituting a value: lines 11, 13, 15 and 16 give $b$ and $c$."
          },
          {
            "line": "The product $(x - r)(x - s)$ equals $x^2 - sx - rx + rs$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "So $a(x - r)(x - s) = ax^2 - asx - arx + ars$.",
            "reason": "Multiplying out: $a$ multiplies each term of line 18."
          },
          {
            "line": "The sum $ax^2 + (-ar - as)x + ars$ equals $ax^2 - arx - asx + ars$.",
            "reason": "Multiplying out: $x$ multiplies each term of the bracket."
          },
          {
            "line": "Therefore $ax^2 + bx + c = a(x - r)(x - s)$ for every $x$.",
            "reason": "Transitive property: lines 17, 20 and 19, whose terms agree in another order."
          }
        ]
      }
    },
    {
      "id": "t136-s3",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$ with $a \\ne 0$ and $c \\ne 0$, if $r$ and $s$ are the roots of $ax^2 + bx + c = 0$, then $\\dfrac{1}{r} + \\dfrac{1}{s} = -\\dfrac{b}{c}$. Facts it may use: sum of roots, product of roots, the zero-product property, single fraction, complex fraction, substituting a value, transitive property.",
      "check": {
        "proof": [
          {
            "line": "The product $rs$ equals $\\dfrac{c}{a}$.",
            "reason": "Product of roots $c/a$."
          },
          {
            "line": "So $rs$ is not 0, and neither $r$ nor $s$ is 0.",
            "reason": "The zero-product property: $c \\ne 0$, and a product with a factor 0 is 0."
          },
          {
            "line": "The sum $\\dfrac{1}{r} + \\dfrac{1}{s}$ equals $\\dfrac{s + r}{rs}$.",
            "reason": "Single fraction: over the simplest common denominator $rs$, which line 2 shows is not 0."
          },
          {
            "line": "The sum $r + s$ equals $-\\dfrac{b}{a}$.",
            "reason": "Sum of roots $-b/a$."
          },
          {
            "line": "So $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{-\\frac{b}{a}}{\\frac{c}{a}}$.",
            "reason": "Substituting a value: lines 1 and 4 give the top and the bottom."
          },
          {
            "line": "The complex fraction $\\dfrac{-\\frac{b}{a}}{\\frac{c}{a}}$ equals $-\\dfrac{b}{c}$.",
            "reason": "Complex fraction: top and bottom are multiplied by $a$."
          },
          {
            "line": "Therefore $\\dfrac{1}{r} + \\dfrac{1}{s} = -\\dfrac{b}{c}$.",
            "reason": "Transitive property: lines 3, 5 and 6."
          }
        ]
      }
    },
    {
      "id": "t136-s4",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$ with $a \\ne 0$, if $r$ and $s$ are the roots of $ax^2 + bx + c = 0$, then $r^2 + s^2 = \\dfrac{b^2 - 2ac}{a^2}$. Facts it may use: sum of roots, product of roots, every term of one bracket times every term of the other, collecting like terms, adding the same number to both sides, substituting a value, fraction rules from arithmetic, transitive property.",
      "check": {
        "proof": [
          {
            "line": "The product $(r + s)(r + s)$ equals $r^2 + rs + sr + s^2$.",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "The sum $r^2 + rs + sr + s^2$ equals $r^2 + 2rs + s^2$.",
            "reason": "Collecting like terms: $rs + sr = 2rs$."
          },
          {
            "line": "So $(r + s)(r + s) = r^2 + 2rs + s^2$.",
            "reason": "Transitive property: lines 1 and 2."
          },
          {
            "line": "So $r^2 + s^2 = (r + s)(r + s) - 2rs$.",
            "reason": "Adding the same number to both sides: $-2rs$ is added to each side of line 3, read from right to left."
          },
          {
            "line": "The sum $r + s$ equals $-\\dfrac{b}{a}$, and the product $rs$ equals $\\dfrac{c}{a}$.",
            "reason": "Sum of roots $-b/a$ and product of roots $c/a$."
          },
          {
            "line": "So $r^2 + s^2 = \\left(-\\dfrac{b}{a}\\right)\\left(-\\dfrac{b}{a}\\right) - 2 \\cdot \\dfrac{c}{a}$.",
            "reason": "Substituting a value: line 5 gives the values, in brackets."
          },
          {
            "line": "The product $\\left(-\\dfrac{b}{a}\\right)\\left(-\\dfrac{b}{a}\\right)$ equals $\\dfrac{b^2}{a^2}$.",
            "reason": "The product formula, from arithmetic, with the signs of products: two negatives give a positive."
          },
          {
            "line": "The product $2 \\cdot \\dfrac{c}{a}$ equals $\\dfrac{2ac}{a^2}$.",
            "reason": "Equivalent fraction pairs: top and bottom are multiplied by $a$."
          },
          {
            "line": "So $r^2 + s^2 = \\dfrac{b^2 - 2ac}{a^2}$.",
            "reason": "Subtracting fractions with the same denominator: lines 6, 7 and 8."
          }
        ]
      }
    }
  ]
}
