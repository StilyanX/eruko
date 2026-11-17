export default {
  "number": 153,
  "title": "Where two graphs meet",
  "section": 12,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "419-424"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the common point of the line $y = 5x + 5$ and the parabola $y = -4x^2 - 3x + 145$ with the larger $y$-coordinate.",
    "form": "Answer as an ordered pair, as in (2, -1).",
    "answer": "(5, 30)",
    "solution": [
      "Find the common point of the line $y = 5x + 5$ and the parabola $y = -4x^2 - 3x + 145$ with the larger $y$-coordinate.",
      "$-4x^2 - 3x + 145 = 5x + 5$",
      "$-4x^2 - 8x + 140 = 0$",
      "$x^2 + 2x - 35 = 0$",
      "$(x + 7)(x - 5) = 0$",
      "So $x = -7$ or $x = 5$.",
      "At $x = -7$, $y = 5 \\cdot (-7) + 5 = -30$; at $x = 5$, $y = 5 \\cdot 5 + 5 = 30$.",
      "The common point with the larger $y$-coordinate is $(5, 30)$."
    ]
  },
  "ideas": [
    {
      "name": "A common point of two graphs satisfies both equations",
      "concrete": "The parabola $y = x^2 - 11$ and the line $y = x + 1$ meet where both equations hold at once. So $x^2 - 11 = x + 1$, that is $x^2 - x - 12 = 0$, or $(x - 4)(x + 3) = 0$. The roots $x = 4$ and $x = -3$ give the common points $(4, 5)$ and $(-3, -2)$.",
      "general": "For two equations in $x$ and $y$, a point lies on both graphs exactly when its coordinates satisfy both equations. So the points where the two graphs meet are the solutions of the system made of the two equations."
    },
    {
      "name": "A sketch gives only approximate points",
      "concrete": "The lines $y = 4 - 3x$ and $y = 4x - 2$ meet where $4 - 3x = 4x - 2$, so at $x = \\dfrac{6}{7}$ and the point $\\left(\\dfrac{6}{7}, \\dfrac{10}{7}\\right)$. On a sketch the crossing sits a little to the left of $x = 1$ and a little below $y = \\dfrac{3}{2}$; no reading of the sketch gives the sevenths.",
      "general": "A sketch of two graphs shows roughly where they meet and how many times. The exact common points come from solving the two equations together, and a point read off a sketch counts only once its coordinates are checked in both equations."
    },
    {
      "name": "Tangent means exactly one common point",
      "concrete": "The line $y = 6x - 6$ meets the parabola $y = x^2 + 3$ where $x^2 + 3 = 6x - 6$, that is $x^2 - 6x + 9 = 0$, or $(x - 3)^2 = 0$. The one root $x = 3$ gives the one common point $(3, 12)$, so the line is tangent to the parabola there.",
      "general": "A line is **tangent** to a circle when the two have exactly one common point. A line that is not vertical is tangent to a parabola $y = ax^2 + bx + c$, with $a$ not $0$, when the two have exactly one common point. Once the equation of the line is put into the other equation, the line is tangent exactly when the quadratic that results has discriminant $0$."
    }
  ],
  "kinds": [
    {
      "id": "t153-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the common point of the line $y = -5x - 6$ and the parabola $y = -4x^2 + 35x - 102$ with the smaller $x$-coordinate.",
            "lines": [
              {
                "step": "Find the common point of the line $y = -5x - 6$ and the parabola $y = -4x^2 + 35x - 102$ with the smaller $x$-coordinate.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4x^2 + 35x - 102 = -5x - 6$",
                "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
              },
              {
                "step": "$-4x^2 + 40x - 96 = 0$",
                "reason": "Adding the same number to both sides: $-5x - 6$ is taken from both sides, and like terms are collected."
              },
              {
                "step": "$x^2 - 10x + 24 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
              },
              {
                "step": "$(x - 4)(x - 6) = 0$",
                "reason": "Factoring a quadratic: the two numbers with sum $-10$ and product $24$ are $-4$ and $-6$."
              },
              {
                "step": "So $x = 4$ or $x = 6$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "At $x = 4$, $y = -5 \\cdot 4 - 6 = -26$; at $x = 6$, $y = -5 \\cdot 6 - 6 = -36$.",
                "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
              },
              {
                "step": "The common point with the smaller $x$-coordinate is $(4, -26)$.",
                "reason": "Answering the question asked: of the two common points, the one with the smaller $x$-coordinate is kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common point of the line $y = 2x + 10$ and the parabola $y = -4x^2 - 10x + 26$ with the larger $x$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(1, 12)",
              "lines": [
                {
                  "step": "Find the common point of the line $y = 2x + 10$ and the parabola $y = -4x^2 - 10x + 26$ with the larger $x$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-4x^2 - 10x + 26 = 2x + 10$",
                  "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
                },
                {
                  "step": "$-4x^2 - 12x + 16 = 0$",
                  "reason": "Adding the same number to both sides: $2x + 10$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$x^2 + 3x - 4 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$(x + 4)(x - 1) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $3$ and product $-4$ are $4$ and $-1$."
                },
                {
                  "step": "So $x = -4$ or $x = 1$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -4$, $y = 2 \\cdot (-4) + 10 = 2$; at $x = 1$, $y = 2 \\cdot 1 + 10 = 12$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the larger $x$-coordinate is $(1, 12)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the larger $x$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the line $y = 2x - 10$ and the parabola $y = -2x^2 + 10x + 32$ with the smaller $y$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-3, -16)",
              "lines": [
                {
                  "step": "Find the common point of the line $y = 2x - 10$ and the parabola $y = -2x^2 + 10x + 32$ with the smaller $y$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x^2 + 10x + 32 = 2x - 10$",
                  "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
                },
                {
                  "step": "$-2x^2 + 8x + 42 = 0$",
                  "reason": "Adding the same number to both sides: $2x - 10$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$x^2 - 4x - 21 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-2$."
                },
                {
                  "step": "$(x + 3)(x - 7) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $-4$ and product $-21$ are $3$ and $-7$."
                },
                {
                  "step": "So $x = -3$ or $x = 7$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -3$, $y = 2 \\cdot (-3) - 10 = -16$; at $x = 7$, $y = 2 \\cdot 7 - 10 = 4$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the smaller $y$-coordinate is $(-3, -16)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the smaller $y$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the line $y = -5x + 6$ and the parabola $y = 4x^2 + 23x + 46$ with the larger $y$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-5, 31)",
              "lines": [
                {
                  "step": "Find the common point of the line $y = -5x + 6$ and the parabola $y = 4x^2 + 23x + 46$ with the larger $y$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4x^2 + 23x + 46 = -5x + 6$",
                  "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
                },
                {
                  "step": "$4x^2 + 28x + 40 = 0$",
                  "reason": "Adding the same number to both sides: $-5x + 6$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$x^2 + 7x + 10 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
                },
                {
                  "step": "$(x + 5)(x + 2) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $7$ and product $10$ are $5$ and $2$."
                },
                {
                  "step": "So $x = -5$ or $x = -2$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -5$, $y = -5 \\cdot (-5) + 6 = 31$; at $x = -2$, $y = -5 \\cdot (-2) + 6 = 16$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the larger $y$-coordinate is $(-5, 31)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the larger $y$-coordinate is kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $c$ for which the line $y = 4x + c$ is tangent to the parabola $y = -7x^2 + x - 11$.",
            "lines": [
              {
                "step": "Find the number $c$ for which the line $y = 4x + c$ is tangent to the parabola $y = -7x^2 + x - 11$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-7x^2 + x - 11 = 4x + c$",
                "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
              },
              {
                "step": "$-7x^2 - 3x - 11 - c = 0$",
                "reason": "Adding the same number to both sides: $4x + c$ is taken from both sides, and like terms are collected."
              },
              {
                "step": "$(-3)^2 - 4 \\cdot (-7) \\cdot (-11 - c) = 0$",
                "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
              },
              {
                "step": "$-299 - 28c = 0$",
                "reason": "Multiplying out: the square and the product are worked out, and the bracket is multiplied by the number in front of it."
              },
              {
                "step": "$-28c = 299$",
                "reason": "Adding the same number to both sides: $-299$ is taken from both sides."
              },
              {
                "step": "$c = -\\dfrac{299}{28}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-28$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which the line $y = -7x + c$ is tangent to the parabola $y = 5x^2 - 15x - 19$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-111/5",
              "lines": [
                {
                  "step": "Find the number $c$ for which the line $y = -7x + c$ is tangent to the parabola $y = 5x^2 - 15x - 19$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$5x^2 - 15x - 19 = -7x + c$",
                  "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
                },
                {
                  "step": "$5x^2 - 8x - 19 - c = 0$",
                  "reason": "Adding the same number to both sides: $-7x + c$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$(-8)^2 - 4 \\cdot 5 \\cdot (-19 - c) = 0$",
                  "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
                },
                {
                  "step": "$444 + 20c = 0$",
                  "reason": "Multiplying out: the square and the product are worked out, and the bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$20c = -444$",
                  "reason": "Adding the same number to both sides: $444$ is taken from both sides."
                },
                {
                  "step": "$c = -\\dfrac{111}{5}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $20$."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which the line $y = -8x + c$ is tangent to the parabola $y = 7x^2 + 2x + 23$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "136/7",
              "lines": [
                {
                  "step": "Find the number $c$ for which the line $y = -8x + c$ is tangent to the parabola $y = 7x^2 + 2x + 23$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7x^2 + 2x + 23 = -8x + c$",
                  "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
                },
                {
                  "step": "$7x^2 + 10x + 23 - c = 0$",
                  "reason": "Adding the same number to both sides: $-8x + c$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$10^2 - 4 \\cdot 7 \\cdot (23 - c) = 0$",
                  "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
                },
                {
                  "step": "$-544 + 28c = 0$",
                  "reason": "Multiplying out: the square and the product are worked out, and the bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$28c = 544$",
                  "reason": "Adding the same number to both sides: $-544$ is taken from both sides."
                },
                {
                  "step": "$c = \\dfrac{136}{7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $28$."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which the line $y = -3x + c$ is tangent to the parabola $y = 2x^2 - 5x - 26$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-53/2",
              "lines": [
                {
                  "step": "Find the number $c$ for which the line $y = -3x + c$ is tangent to the parabola $y = 2x^2 - 5x - 26$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 5x - 26 = -3x + c$",
                  "reason": "A common point of two graphs satisfies both equations: at a common point the two right sides give the same $y$, so they are equal."
                },
                {
                  "step": "$2x^2 - 2x - 26 - c = 0$",
                  "reason": "Adding the same number to both sides: $-3x + c$ is taken from both sides, and like terms are collected."
                },
                {
                  "step": "$(-2)^2 - 4 \\cdot 2 \\cdot (-26 - c) = 0$",
                  "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
                },
                {
                  "step": "$212 + 8c = 0$",
                  "reason": "Multiplying out: the square and the product are worked out, and the bracket is multiplied by the number in front of it."
                },
                {
                  "step": "$8c = -212$",
                  "reason": "Adding the same number to both sides: $212$ is taken from both sides."
                },
                {
                  "step": "$c = -\\dfrac{53}{2}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t153-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the common point of the line $y = -2x + 14$ and the circle $x^2 + y^2 - 30x - 8y = -156$ with the larger $x$-coordinate.",
            "lines": [
              {
                "step": "Find the common point of the line $y = -2x + 14$ and the circle $x^2 + y^2 - 30x - 8y = -156$ with the larger $x$-coordinate.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + (-2x + 14)^2 - 30x - 8(-2x + 14) = -156$",
                "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-2x + 14$, is put in place of $y$ in the equation of the circle."
              },
              {
                "step": "$5x^2 - 70x + 240 = 0$",
                "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-156$ is taken from both sides and like terms are collected."
              },
              {
                "step": "$x^2 - 14x + 48 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$(x - 6)(x - 8) = 0$",
                "reason": "Factoring a quadratic: the two numbers with sum $-14$ and product $48$ are $-6$ and $-8$."
              },
              {
                "step": "So $x = 6$ or $x = 8$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "At $x = 6$, $y = -2 \\cdot 6 + 14 = 2$; at $x = 8$, $y = -2 \\cdot 8 + 14 = -2$.",
                "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
              },
              {
                "step": "The common point with the larger $x$-coordinate is $(8, -2)$.",
                "reason": "Answering the question asked: of the two common points, the one with the larger $x$-coordinate is kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common point of the line $y = -2x - 2$ and the circle $x^2 + y^2 - 10x - 26y = -64$ with the smaller $y$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-4, 6)",
              "lines": [
                {
                  "step": "Find the common point of the line $y = -2x - 2$ and the circle $x^2 + y^2 - 10x - 26y = -64$ with the smaller $y$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (-2x - 2)^2 - 10x - 26(-2x - 2) = -64$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-2x - 2$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 + 50x + 120 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-64$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$x^2 + 10x + 24 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$(x + 6)(x + 4) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $10$ and product $24$ are $6$ and $4$."
                },
                {
                  "step": "So $x = -6$ or $x = -4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -6$, $y = -2 \\cdot (-6) - 2 = 10$; at $x = -4$, $y = -2 \\cdot (-4) - 2 = 6$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the smaller $y$-coordinate is $(-4, 6)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the smaller $y$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the line $y = 2x + 2$ and the circle $x^2 + y^2 + 32x + 30y = -431$ with the larger $y$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-9, -16)",
              "lines": [
                {
                  "step": "Find the common point of the line $y = 2x + 2$ and the circle $x^2 + y^2 + 32x + 30y = -431$ with the larger $y$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x + 2)^2 + 32x + 30(2x + 2) = -431$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x + 2$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 + 100x + 495 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-431$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$x^2 + 20x + 99 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$(x + 11)(x + 9) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $20$ and product $99$ are $11$ and $9$."
                },
                {
                  "step": "So $x = -11$ or $x = -9$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -11$, $y = 2 \\cdot (-11) + 2 = -20$; at $x = -9$, $y = 2 \\cdot (-9) + 2 = -16$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the larger $y$-coordinate is $(-9, -16)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the larger $y$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the line $y = 2x - 16$ and the circle $x^2 + y^2 + 8x - 2y = 128$ with the smaller $x$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(4, -8)",
              "lines": [
                {
                  "step": "Find the common point of the line $y = 2x - 16$ and the circle $x^2 + y^2 + 8x - 2y = 128$ with the smaller $x$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x - 16)^2 + 8x - 2(2x - 16) = 128$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x - 16$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 - 60x + 160 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $128$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$x^2 - 12x + 32 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$(x - 4)(x - 8) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $-12$ and product $32$ are $-4$ and $-8$."
                },
                {
                  "step": "So $x = 4$ or $x = 8$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = 4$, $y = 2 \\cdot 4 - 16 = -8$; at $x = 8$, $y = 2 \\cdot 8 - 16 = 0$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the smaller $x$-coordinate is $(4, -8)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the smaller $x$-coordinate is kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find how many common points the line $y = -2x - 10$ and the circle $x^2 + y^2 - 26x + 26y = -225$ have.",
            "lines": [
              {
                "step": "Find how many common points the line $y = -2x - 10$ and the circle $x^2 + y^2 - 26x + 26y = -225$ have.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + (-2x - 10)^2 - 26x + 26(-2x - 10) = -225$",
                "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-2x - 10$, is put in place of $y$ in the equation of the circle."
              },
              {
                "step": "$5x^2 - 38x + 65 = 0$",
                "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-225$ is taken from both sides and like terms are collected."
              },
              {
                "step": "$(-38)^2 - 4 \\cdot 5 \\cdot 65 = 144$",
                "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
              },
              {
                "step": "The discriminant is positive, so the quadratic has two roots.",
                "reason": "Positive, zero, negative discriminant: a positive discriminant gives two real roots, $0$ gives one, a negative one gives none."
              },
              {
                "step": "The line and the circle have $2$ common points.",
                "reason": "A common point of two graphs satisfies both equations: each real root $x$ gives one common point, its $y$ read from the line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many common points the line $y = 2x + 2$ and the circle $x^2 + y^2 + 28x - 4y = -107$ have.",
              "form": "Answer as an integer.",
              "answer": "0",
              "lines": [
                {
                  "step": "Find how many common points the line $y = 2x + 2$ and the circle $x^2 + y^2 + 28x - 4y = -107$ have.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x + 2)^2 + 28x - 4(2x + 2) = -107$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x + 2$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 + 28x + 103 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-107$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$28^2 - 4 \\cdot 5 \\cdot 103 = -1276$",
                  "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
                },
                {
                  "step": "The discriminant is negative, so the quadratic has no real root.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two real roots, $0$ gives one, a negative one gives none."
                },
                {
                  "step": "The line and the circle have $0$ common points.",
                  "reason": "A common point of two graphs satisfies both equations: each real root $x$ gives one common point, its $y$ read from the line."
                }
              ]
            },
            {
              "prompt": "Find how many common points the line $y = 2x - 34$ and the circle $x^2 + y^2 - 26x + 6y = -173$ have.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find how many common points the line $y = 2x - 34$ and the circle $x^2 + y^2 - 26x + 6y = -173$ have.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x - 34)^2 - 26x + 6(2x - 34) = -173$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x - 34$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 - 150x + 1125 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-173$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$(-150)^2 - 4 \\cdot 5 \\cdot 1125 = 0$",
                  "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
                },
                {
                  "step": "The discriminant is $0$, so the quadratic has exactly one root.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two real roots, $0$ gives one, a negative one gives none."
                },
                {
                  "step": "The line and the circle have $1$ common point.",
                  "reason": "A common point of two graphs satisfies both equations: each real root $x$ gives one common point, its $y$ read from the line."
                }
              ]
            },
            {
              "prompt": "Find how many common points the line $y = 2x - 20$ and the circle $x^2 + y^2 + 12x - 8y = 211$ have.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find how many common points the line $y = 2x - 20$ and the circle $x^2 + y^2 + 12x - 8y = 211$ have.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x - 20)^2 + 12x - 8(2x - 20) = 211$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x - 20$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 - 84x + 349 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $211$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$(-84)^2 - 4 \\cdot 5 \\cdot 349 = 76$",
                  "reason": "Discriminant $b^2 - 4ac$: the coefficients of the quadratic are put in for $a$, $b$ and $c$."
                },
                {
                  "step": "The discriminant is positive, so the quadratic has two roots.",
                  "reason": "Positive, zero, negative discriminant: a positive discriminant gives two real roots, $0$ gives one, a negative one gives none."
                },
                {
                  "step": "The line and the circle have $2$ common points.",
                  "reason": "A common point of two graphs satisfies both equations: each real root $x$ gives one common point, its $y$ read from the line."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every number $c$ for which the line $y = -3x + c$ is tangent to the circle $x^2 + y^2 + 18x + 20y = -141$.",
            "lines": [
              {
                "step": "Find every number $c$ for which the line $y = -3x + c$ is tangent to the circle $x^2 + y^2 + 18x + 20y = -141$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + (-3x + c)^2 + 18x + 20(-3x + c) = -141$",
                "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-3x + c$, is put in place of $y$ in the equation of the circle."
              },
              {
                "step": "$10x^2 + (-6c - 42)x + c^2 + 20c + 141 = 0$",
                "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-141$ is taken from both sides and like terms are collected, with $c$ kept as a letter."
              },
              {
                "step": "$(-6c - 42)^2 - 4 \\cdot 10 \\cdot (c^2 + 20c + 141) = 0$",
                "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
              },
              {
                "step": "$-4c^2 - 296c - 3876 = 0$",
                "reason": "Multiplying out: the square and the product are multiplied out, and like terms are collected."
              },
              {
                "step": "$c^2 + 74c + 969 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
              },
              {
                "step": "$(c + 57)(c + 17) = 0$",
                "reason": "Factoring a quadratic: the two numbers with sum $74$ and product $969$ are $57$ and $17$."
              },
              {
                "step": "So $c = -57$ or $c = -17$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and each value of $c$ gives one tangent line."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every number $c$ for which the line $y = 3x + c$ is tangent to the circle $x^2 + y^2 - 6x - 16y = -33$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-21, 19}",
              "lines": [
                {
                  "step": "Find every number $c$ for which the line $y = 3x + c$ is tangent to the circle $x^2 + y^2 - 6x - 16y = -33$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (3x + c)^2 - 6x - 16(3x + c) = -33$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $3x + c$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$10x^2 + (6c - 54)x + c^2 - 16c + 33 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-33$ is taken from both sides and like terms are collected, with $c$ kept as a letter."
                },
                {
                  "step": "$(6c - 54)^2 - 4 \\cdot 10 \\cdot (c^2 - 16c + 33) = 0$",
                  "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
                },
                {
                  "step": "$-4c^2 - 8c + 1596 = 0$",
                  "reason": "Multiplying out: the square and the product are multiplied out, and like terms are collected."
                },
                {
                  "step": "$c^2 + 2c - 399 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$(c + 21)(c - 19) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $2$ and product $-399$ are $21$ and $-19$."
                },
                {
                  "step": "So $c = -21$ or $c = 19$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and each value of $c$ gives one tangent line."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which the line $y = 2x + c$ is tangent to the circle $x^2 + y^2 - 4x + 26y = -168$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-22, -12}",
              "lines": [
                {
                  "step": "Find every number $c$ for which the line $y = 2x + c$ is tangent to the circle $x^2 + y^2 - 4x + 26y = -168$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x + c)^2 - 4x + 26(2x + c) = -168$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x + c$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 + (4c + 48)x + c^2 + 26c + 168 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-168$ is taken from both sides and like terms are collected, with $c$ kept as a letter."
                },
                {
                  "step": "$(4c + 48)^2 - 4 \\cdot 5 \\cdot (c^2 + 26c + 168) = 0$",
                  "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
                },
                {
                  "step": "$-4c^2 - 136c - 1056 = 0$",
                  "reason": "Multiplying out: the square and the product are multiplied out, and like terms are collected."
                },
                {
                  "step": "$c^2 + 34c + 264 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$(c + 22)(c + 12) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $34$ and product $264$ are $22$ and $12$."
                },
                {
                  "step": "So $c = -22$ or $c = -12$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and each value of $c$ gives one tangent line."
                }
              ]
            },
            {
              "prompt": "Find every number $c$ for which the line $y = 2x + c$ is tangent to the circle $x^2 + y^2 + 16x + 24y = -203$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-1, 9}",
              "lines": [
                {
                  "step": "Find every number $c$ for which the line $y = 2x + c$ is tangent to the circle $x^2 + y^2 + 16x + 24y = -203$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + (2x + c)^2 + 16x + 24(2x + c) = -203$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x + c$, is put in place of $y$ in the equation of the circle."
                },
                {
                  "step": "$5x^2 + (4c + 64)x + c^2 + 24c + 203 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-203$ is taken from both sides and like terms are collected, with $c$ kept as a letter."
                },
                {
                  "step": "$(4c + 64)^2 - 4 \\cdot 5 \\cdot (c^2 + 24c + 203) = 0$",
                  "reason": "Tangent means exactly one common point: so the quadratic in $x$ has exactly one root, and by Positive, zero, negative discriminant the discriminant of this quadratic in $x$ is $0$."
                },
                {
                  "step": "$-4c^2 + 32c + 36 = 0$",
                  "reason": "Multiplying out: the square and the product are multiplied out, and like terms are collected."
                },
                {
                  "step": "$c^2 - 8c - 9 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-4$."
                },
                {
                  "step": "$(c + 1)(c - 9) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $-8$ and product $-9$ are $1$ and $-9$."
                },
                {
                  "step": "So $c = -1$ or $c = 9$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and each value of $c$ gives one tangent line."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the common point of the line $3x + 9y = 30$ and the circle $x^2 + y^2 - 10x + 30y = 160$ with the larger $y$-coordinate.",
            "lines": [
              {
                "step": "Find the common point of the line $3x + 9y = 30$ and the circle $x^2 + y^2 - 10x + 30y = 160$ with the larger $y$-coordinate.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x = -3y + 10$",
                "reason": "Solving for a letter in terms of the others: $9y$ is taken from both sides and both sides are divided by $3$."
              },
              {
                "step": "$(-3y + 10)^2 + y^2 - 10(-3y + 10) + 30y = 160$",
                "reason": "A common point of two graphs satisfies both equations: the $x$ of the line, $-3y + 10$, is put in place of $x$ in the equation of the circle."
              },
              {
                "step": "$10y^2 - 160 = 0$",
                "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $160$ is taken from both sides and like terms are collected."
              },
              {
                "step": "$y^2 - 16 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
              },
              {
                "step": "$(y + 4)(y - 4) = 0$",
                "reason": "Factoring a quadratic: the two numbers with sum $0$ and product $-16$ are $4$ and $-4$."
              },
              {
                "step": "So $y = -4$ or $y = 4$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "At $y = -4$, $x = -3 \\cdot (-4) + 10 = 22$; at $y = 4$, $x = -3 \\cdot 4 + 10 = -2$.",
                "reason": "Substituting a value: each value of $y$ is put into the equation of the line, which gives the $x$ of that common point."
              },
              {
                "step": "The common point with the larger $y$-coordinate is $(-2, 4)$.",
                "reason": "Answering the question asked: of the two common points, the one with the larger $y$-coordinate is kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common point of the line $3x + 9y = 48$ and the circle $x^2 + y^2 + 14x + 18y = 210$ with the smaller $x$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-11, 9)",
              "lines": [
                {
                  "step": "Find the common point of the line $3x + 9y = 48$ and the circle $x^2 + y^2 + 14x + 18y = 210$ with the smaller $x$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -3y + 16$",
                  "reason": "Solving for a letter in terms of the others: $9y$ is taken from both sides and both sides are divided by $3$."
                },
                {
                  "step": "$(-3y + 16)^2 + y^2 + 14(-3y + 16) + 18y = 210$",
                  "reason": "A common point of two graphs satisfies both equations: the $x$ of the line, $-3y + 16$, is put in place of $x$ in the equation of the circle."
                },
                {
                  "step": "$10y^2 - 120y + 270 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $210$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$y^2 - 12y + 27 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$(y - 3)(y - 9) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $-12$ and product $27$ are $-3$ and $-9$."
                },
                {
                  "step": "So $y = 3$ or $y = 9$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $y = 3$, $x = -3 \\cdot 3 + 16 = 7$; at $y = 9$, $x = -3 \\cdot 9 + 16 = -11$.",
                  "reason": "Substituting a value: each value of $y$ is put into the equation of the line, which gives the $x$ of that common point."
                },
                {
                  "step": "The common point with the smaller $x$-coordinate is $(-11, 9)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the smaller $x$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the line $3x - 6y = 24$ and the circle $x^2 + y^2 + 22x + 24y = -215$ with the larger $x$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-6, -7)",
              "lines": [
                {
                  "step": "Find the common point of the line $3x - 6y = 24$ and the circle $x^2 + y^2 + 22x + 24y = -215$ with the larger $x$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = 2y + 8$",
                  "reason": "Solving for a letter in terms of the others: $-6y$ is taken from both sides and both sides are divided by $3$."
                },
                {
                  "step": "$(2y + 8)^2 + y^2 + 22(2y + 8) + 24y = -215$",
                  "reason": "A common point of two graphs satisfies both equations: the $x$ of the line, $2y + 8$, is put in place of $x$ in the equation of the circle."
                },
                {
                  "step": "$5y^2 + 100y + 455 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-215$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$y^2 + 20y + 91 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$(y + 13)(y + 7) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $20$ and product $91$ are $13$ and $7$."
                },
                {
                  "step": "So $y = -13$ or $y = -7$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $y = -13$, $x = 2 \\cdot (-13) + 8 = -18$; at $y = -7$, $x = 2 \\cdot (-7) + 8 = -6$.",
                  "reason": "Substituting a value: each value of $y$ is put into the equation of the line, which gives the $x$ of that common point."
                },
                {
                  "step": "The common point with the larger $x$-coordinate is $(-6, -7)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the larger $x$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the line $3x + 9y = -18$ and the circle $x^2 + y^2 + 4x - 24y = 52$ with the smaller $y$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(0, -2)",
              "lines": [
                {
                  "step": "Find the common point of the line $3x + 9y = -18$ and the circle $x^2 + y^2 + 4x - 24y = 52$ with the smaller $y$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x = -3y - 6$",
                  "reason": "Solving for a letter in terms of the others: $9y$ is taken from both sides and both sides are divided by $3$."
                },
                {
                  "step": "$(-3y - 6)^2 + y^2 + 4(-3y - 6) - 24y = 52$",
                  "reason": "A common point of two graphs satisfies both equations: the $x$ of the line, $-3y - 6$, is put in place of $x$ in the equation of the circle."
                },
                {
                  "step": "$10y^2 - 40 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $52$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$y^2 - 4 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$(y + 2)(y - 2) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $0$ and product $-4$ are $2$ and $-2$."
                },
                {
                  "step": "So $y = -2$ or $y = 2$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $y = -2$, $x = -3 \\cdot (-2) - 6 = 0$; at $y = 2$, $x = -3 \\cdot 2 - 6 = -12$.",
                  "reason": "Substituting a value: each value of $y$ is put into the equation of the line, which gives the $x$ of that common point."
                },
                {
                  "step": "The common point with the smaller $y$-coordinate is $(0, -2)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the smaller $y$-coordinate is kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t153-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the common point of the circles $x^2 + y^2 - 16x - 20y = -124$ and $x^2 + y^2 - 12x - 22y = -92$ with the smaller $y$-coordinate.",
            "lines": [
              {
                "step": "Find the common point of the circles $x^2 + y^2 - 16x - 20y = -124$ and $x^2 + y^2 - 12x - 22y = -92$ with the smaller $y$-coordinate.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4x + 2y = -32$",
                "reason": "A common point of two graphs satisfies both equations: so by Elimination the second equation is taken from the first, and $x^2$ and $y^2$ drop out."
              },
              {
                "step": "$y = 2x - 16$",
                "reason": "Solving for a letter in terms of the others: $-4x$ is taken from both sides and both sides are divided by $2$."
              },
              {
                "step": "$x^2 + (2x - 16)^2 - 16x - 20(2x - 16) = -124$",
                "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $2x - 16$, is put in place of $y$ in the equation of the first circle."
              },
              {
                "step": "$5x^2 - 120x + 700 = 0$",
                "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $-124$ is taken from both sides and like terms are collected."
              },
              {
                "step": "$x^2 - 24x + 140 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
              },
              {
                "step": "$(x - 10)(x - 14) = 0$",
                "reason": "Factoring a quadratic: the two numbers with sum $-24$ and product $140$ are $-10$ and $-14$."
              },
              {
                "step": "So $x = 10$ or $x = 14$.",
                "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
              },
              {
                "step": "At $x = 10$, $y = 2 \\cdot 10 - 16 = 4$; at $x = 14$, $y = 2 \\cdot 14 - 16 = 12$.",
                "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
              },
              {
                "step": "The common point with the smaller $y$-coordinate is $(10, 4)$.",
                "reason": "Answering the question asked: of the two common points, the one with the smaller $y$-coordinate is kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the common point of the circles $x^2 + y^2 + 2x + 2y = 158$ and $x^2 + y^2 - 22x - 10y = -46$ with the larger $y$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(3, 11)",
              "lines": [
                {
                  "step": "Find the common point of the circles $x^2 + y^2 + 2x + 2y = 158$ and $x^2 + y^2 - 22x - 10y = -46$ with the larger $y$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$24x + 12y = 204$",
                  "reason": "A common point of two graphs satisfies both equations: so by Elimination the second equation is taken from the first, and $x^2$ and $y^2$ drop out."
                },
                {
                  "step": "$y = -2x + 17$",
                  "reason": "Solving for a letter in terms of the others: $24x$ is taken from both sides and both sides are divided by $12$."
                },
                {
                  "step": "$x^2 + (-2x + 17)^2 + 2x + 2(-2x + 17) = 158$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-2x + 17$, is put in place of $y$ in the equation of the first circle."
                },
                {
                  "step": "$5x^2 - 70x + 165 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $158$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$x^2 - 14x + 33 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
                },
                {
                  "step": "$(x - 3)(x - 11) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $-14$ and product $33$ are $-3$ and $-11$."
                },
                {
                  "step": "So $x = 3$ or $x = 11$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = 3$, $y = -2 \\cdot 3 + 17 = 11$; at $x = 11$, $y = -2 \\cdot 11 + 17 = -5$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the larger $y$-coordinate is $(3, 11)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the larger $y$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the circles $x^2 + y^2 + 6x - 14y = 112$ and $x^2 + y^2 - 24x - 24y = 32$ with the smaller $x$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(-4, 20)",
              "lines": [
                {
                  "step": "Find the common point of the circles $x^2 + y^2 + 6x - 14y = 112$ and $x^2 + y^2 - 24x - 24y = 32$ with the smaller $x$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$30x + 10y = 80$",
                  "reason": "A common point of two graphs satisfies both equations: so by Elimination the second equation is taken from the first, and $x^2$ and $y^2$ drop out."
                },
                {
                  "step": "$y = -3x + 8$",
                  "reason": "Solving for a letter in terms of the others: $30x$ is taken from both sides and both sides are divided by $10$."
                },
                {
                  "step": "$x^2 + (-3x + 8)^2 + 6x - 14(-3x + 8) = 112$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-3x + 8$, is put in place of $y$ in the equation of the first circle."
                },
                {
                  "step": "$10x^2 - 160 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $112$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$x^2 - 16 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$(x + 4)(x - 4) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $0$ and product $-16$ are $4$ and $-4$."
                },
                {
                  "step": "So $x = -4$ or $x = 4$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -4$, $y = -3 \\cdot (-4) + 8 = 20$; at $x = 4$, $y = -3 \\cdot 4 + 8 = -4$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the smaller $x$-coordinate is $(-4, 20)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the smaller $x$-coordinate is kept."
                }
              ]
            },
            {
              "prompt": "Find the common point of the circles $x^2 + y^2 - 10x + 12y = 69$ and $x^2 + y^2 + 14x + 20y = -19$ with the larger $x$-coordinate.",
              "form": "Answer as an ordered pair, as in (2, -1).",
              "answer": "(2, -17)",
              "lines": [
                {
                  "step": "Find the common point of the circles $x^2 + y^2 - 10x + 12y = 69$ and $x^2 + y^2 + 14x + 20y = -19$ with the larger $x$-coordinate.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-24x - 8y = 88$",
                  "reason": "A common point of two graphs satisfies both equations: so by Elimination the second equation is taken from the first, and $x^2$ and $y^2$ drop out."
                },
                {
                  "step": "$y = -3x - 11$",
                  "reason": "Solving for a letter in terms of the others: $-24x$ is taken from both sides and both sides are divided by $-8$."
                },
                {
                  "step": "$x^2 + (-3x - 11)^2 - 10x + 12(-3x - 11) = 69$",
                  "reason": "A common point of two graphs satisfies both equations: the $y$ of the line, $-3x - 11$, is put in place of $y$ in the equation of the first circle."
                },
                {
                  "step": "$10x^2 + 20x - 80 = 0$",
                  "reason": "Square of a binomial: the square is multiplied out, the bracket is multiplied by its number, $69$ is taken from both sides and like terms are collected."
                },
                {
                  "step": "$x^2 + 2x - 8 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
                },
                {
                  "step": "$(x + 4)(x - 2) = 0$",
                  "reason": "Factoring a quadratic: the two numbers with sum $2$ and product $-8$ are $4$ and $-2$."
                },
                {
                  "step": "So $x = -4$ or $x = 2$.",
                  "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$."
                },
                {
                  "step": "At $x = -4$, $y = -3 \\cdot (-4) - 11 = 1$; at $x = 2$, $y = -3 \\cdot 2 - 11 = -17$.",
                  "reason": "Substituting a value: each value of $x$ is put into the equation of the line, which gives the $y$ of that common point."
                },
                {
                  "step": "The common point with the larger $x$-coordinate is $(2, -17)$.",
                  "reason": "Answering the question asked: of the two common points, the one with the larger $x$-coordinate is kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t153-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the common points of the parabola $y = -2x^2 + 4x + 11$ and the line $6x + y = -1$, and write that line right.",
            "given": [
              "$y = -2x^2 + 4x + 11$ and $6x + y = -1$",
              "$y = 6x - 1$",
              "$-2x^2 + 4x + 11 = 6x - 1$",
              "$-2x^2 - 2x + 12 = 0$",
              "$x^2 + x - 6 = 0$",
              "$(x + 3)(x - 2) = 0$",
              "$x = -3$ or $x = 2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the common points of the parabola $y = -2x^2 + 4x + 11$ and the line $6x + y = -1$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the system as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 takes $6x$ from both sides of $6x + y = -1$ but writes $6x$ on the right with its sign kept.",
                "reason": "A sign lost: taking $6x$ from both sides leaves $-6x$ on the right."
              },
              {
                "step": "Line 2 written right is $y = -6x - 1$.",
                "reason": "Adding the same number to both sides: the term in $x$ changes sign when it moves to the other side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the common points of the parabola $y = -2x^2 + 20x - 32$ and the line $-6x + y = -8$, and write that line right.",
              "given": [
                "$y = -2x^2 + 20x - 32$ and $-6x + y = -8$",
                "$y = 6x - 8$",
                "$-2x^2 + 20x - 32 = 6x - 8$",
                "$-2x^2 + 26x - 24 = 0$",
                "$x^2 - 13x + 12 = 0$",
                "$(x - 1)(x - 12) = 0$",
                "$x = 1$ or $x = 12$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -2*x^2+14*x-24 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the common points of the parabola $y = -2x^2 + 20x - 32$ and the line $-6x + y = -8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the system as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 takes $6x$ from both sides, but the term in $x$ on the left becomes $26x$, as if $6x$ were added.",
                  "reason": "A sign lost: $20x$ less $6x$ is $14x$."
                },
                {
                  "step": "Line 4 written right is $-2x^2 + 14x - 24 = 0$.",
                  "reason": "Adding the same number to both sides: each term of the right side is taken from both sides, so each changes sign as it moves."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the common points of the parabola $y = 2x^2 - 4x - 17$ and the line $-4x + y = -7$, and write that line right.",
              "given": [
                "$y = 2x^2 - 4x - 17$ and $-4x + y = -7$",
                "$y = 4x - 7$",
                "$2x^2 - 4x - 17 = 4x - 7$",
                "$2x^2 - 8x - 24 = 0$",
                "$x^2 - 4x - 12 = 0$",
                "$(x + 2)(x - 6) = 0$",
                "$x = -2$ or $x = 6$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*x^2-8*x-10 = 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the common points of the parabola $y = 2x^2 - 4x - 17$ and the line $-4x + y = -7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the system as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 takes $-7$ from both sides, but the number on the left becomes $-24$, as if $-7$ were added.",
                  "reason": "A sign lost: $-17$ less $(-7)$ is $-10$."
                },
                {
                  "step": "Line 4 written right is $2x^2 - 8x - 10 = 0$.",
                  "reason": "Adding the same number to both sides: each term of the right side is taken from both sides, so each changes sign as it moves."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the common points of the parabola $y = -2x^2 - 9x + 27$ and the line $5x + y = 11$, and write that line right.",
              "given": [
                "$y = -2x^2 - 9x + 27$ and $5x + y = 11$",
                "$y = 5x + 11$",
                "$-2x^2 - 9x + 27 = 5x + 11$",
                "$-2x^2 - 14x + 16 = 0$",
                "$x^2 + 7x - 8 = 0$",
                "$(x + 8)(x - 1) = 0$",
                "$x = -8$ or $x = 1$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y = -5*x+11",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the common points of the parabola $y = -2x^2 - 9x + 27$ and the line $5x + y = 11$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the system as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 takes $5x$ from both sides of $5x + y = 11$ but writes $5x$ on the right with its sign kept.",
                  "reason": "A sign lost: taking $5x$ from both sides leaves $-5x$ on the right."
                },
                {
                  "step": "Line 2 written right is $y = -5x + 11$.",
                  "reason": "Adding the same number to both sides: the term in $x$ changes sign when it moves to the other side."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t153-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Sketch the graphs of $y = x^2 + 6x - 40$ and $y = -4x - 40$ on one pair of axes.",
            "lines": [
              {
                "step": "Sketch the graphs of $y = x^2 + 6x - 40$ and $y = -4x - 40$ on one pair of axes.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $y = 0$: $(x + 10)(x - 4) = 0$, so the parabola crosses the $x$-axis at $(-10, 0)$ and $(4, 0)$.",
                "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
              },
              {
                "step": "At $x = 0$: $y = -40$, so the parabola crosses the $y$-axis at $(0, -40)$.",
                "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
              },
              {
                "step": "Completing the square gives $y = (x + 3)^2 - 49$, so the vertex is $(-3, -49)$ and the parabola opens up.",
                "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
              },
              {
                "step": "The line crosses the $y$-axis at $(0, -40)$ and the $x$-axis at $(-10, 0)$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -40$, and $y = 0$ gives $x = -10$."
              },
              {
                "step": "The points $(-10, 0)$ and $(0, -40)$ lie on both graphs, so they are the common points.",
                "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a parabola in at most two points, by Positive, zero, negative discriminant."
              },
              {
                "step": "The sketch shows the parabola and the line meeting at $(-10, 0)$ and $(0, -40)$, with these points marked.",
                "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                "figure": {
                  "file": "intersections-of-graphs-1.svg",
                  "alt": "The parabola y = x² + 6x − 40 with vertex (−3, −49), crossing the x−axis at −10 and 4, and the line y = −4x − 40 through (0, −40) and (−10, 0); they meet at (−10, 0) and (0, −40), marked."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graphs of $y = x^2 + 10x + 16$ and $y = 2x + 16$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-8, 0)$",
                  "$(-2, 0)$",
                  "$(0, 16)$"
                ],
                "turning": [
                  "$(-5, -9)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = x^2 + 10x + 16$ and $y = 2x + 16$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$: $(x + 8)(x + 2) = 0$, so the parabola crosses the $x$-axis at $(-8, 0)$ and $(-2, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
                },
                {
                  "step": "At $x = 0$: $y = 16$, so the parabola crosses the $y$-axis at $(0, 16)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Completing the square gives $y = (x + 5)^2 - 9$, so the vertex is $(-5, -9)$ and the parabola opens up.",
                  "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, 16)$ and the $x$-axis at $(-8, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = 16$, and $y = 0$ gives $x = -8$."
                },
                {
                  "step": "The points $(-8, 0)$ and $(0, 16)$ lie on both graphs, so they are the common points.",
                  "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a parabola in at most two points, by Positive, zero, negative discriminant."
                },
                {
                  "step": "The sketch shows the parabola and the line meeting at $(-8, 0)$ and $(0, 16)$, with these points marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-2.svg",
                    "alt": "The parabola y = x² + 10x + 16 with vertex (−5, −9), crossing the x−axis at −8 and −2, and the line y = 2x + 16 through (0, 16) and (−8, 0); they meet at (−8, 0) and (0, 16), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $y = x^2 - 6x - 16$ and $y = 2x - 16$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-2, 0)$",
                  "$(8, 0)$",
                  "$(0, -16)$"
                ],
                "turning": [
                  "$(3, -25)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = x^2 - 6x - 16$ and $y = 2x - 16$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$: $(x + 2)(x - 8) = 0$, so the parabola crosses the $x$-axis at $(-2, 0)$ and $(8, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
                },
                {
                  "step": "At $x = 0$: $y = -16$, so the parabola crosses the $y$-axis at $(0, -16)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Completing the square gives $y = (x - 3)^2 - 25$, so the vertex is $(3, -25)$ and the parabola opens up.",
                  "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -16)$ and the $x$-axis at $(8, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -16$, and $y = 0$ gives $x = 8$."
                },
                {
                  "step": "The points $(0, -16)$ and $(8, 0)$ lie on both graphs, so they are the common points.",
                  "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a parabola in at most two points, by Positive, zero, negative discriminant."
                },
                {
                  "step": "The sketch shows the parabola and the line meeting at $(0, -16)$ and $(8, 0)$, with these points marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-3.svg",
                    "alt": "The parabola y = x² − 6x − 16 with vertex (3, −25), crossing the x−axis at −2 and 8, and the line y = 2x − 16 through (0, −16) and (8, 0); they meet at (0, −16) and (8, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $y = x^2 - 10x - 24$ and $y = 2x - 24$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-2, 0)$",
                  "$(12, 0)$",
                  "$(0, -24)$"
                ],
                "turning": [
                  "$(5, -49)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = x^2 - 10x - 24$ and $y = 2x - 24$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$: $(x + 2)(x - 12) = 0$, so the parabola crosses the $x$-axis at $(-2, 0)$ and $(12, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
                },
                {
                  "step": "At $x = 0$: $y = -24$, so the parabola crosses the $y$-axis at $(0, -24)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Completing the square gives $y = (x - 5)^2 - 49$, so the vertex is $(5, -49)$ and the parabola opens up.",
                  "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -24)$ and the $x$-axis at $(12, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -24$, and $y = 0$ gives $x = 12$."
                },
                {
                  "step": "The points $(0, -24)$ and $(12, 0)$ lie on both graphs, so they are the common points.",
                  "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a parabola in at most two points, by Positive, zero, negative discriminant."
                },
                {
                  "step": "The sketch shows the parabola and the line meeting at $(0, -24)$ and $(12, 0)$, with these points marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-4.svg",
                    "alt": "The parabola y = x² − 10x − 24 with vertex (5, −49), crossing the x−axis at −2 and 12, and the line y = 2x − 24 through (0, −24) and (12, 0); they meet at (0, −24) and (12, 0), marked."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graphs of $x^2 + y^2 - 4x + 4y = 5$ and $y = -5x - 5$ on one pair of axes.",
            "lines": [
              {
                "step": "Sketch the graphs of $x^2 + y^2 - 4x + 4y = 5$ and $y = -5x - 5$ on one pair of axes.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 2)^2 + (y + 2)^2 = 13$",
                "reason": "Completing the square: $4$ and $4$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
              },
              {
                "step": "The centre is $(2, -2)$ and the radius is $\\sqrt{13}$.",
                "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
              },
              {
                "step": "At $y = 0$: $(x - 2)^2 = 9$, so the circle crosses the $x$-axis at $(-1, 0)$ and $(5, 0)$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $4$ is taken from both sides."
              },
              {
                "step": "At $x = 0$: $(y + 2)^2 = 9$, so the circle crosses the $y$-axis at $(0, -5)$ and $(0, 1)$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $4$ is taken from both sides."
              },
              {
                "step": "The line crosses the $y$-axis at $(0, -5)$ and the $x$-axis at $(-1, 0)$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -5$, and $y = 0$ gives $x = -1$."
              },
              {
                "step": "The points $(-1, 0)$ and $(0, -5)$ lie on both graphs, so they are the common points.",
                "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a circle in at most two points, by Positive, zero, negative discriminant."
              },
              {
                "step": "The sketch shows the circle and the line meeting at $(-1, 0)$ and $(0, -5)$, with these points marked.",
                "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                "figure": {
                  "file": "intersections-of-graphs-9.svg",
                  "alt": "A circle with centre (2, −2) crossing the x−axis at −1 and 5 and the y−axis at −5 and 1, and the line y = −5x − 5 through (0, −5) and (−1, 0); they meet at (−1, 0) and (0, −5), marked."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graphs of $x^2 + y^2 + 4x + 14y = 32$ and $y = 4x - 16$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-8, 0)$",
                  "$(4, 0)$",
                  "$(0, -16)$",
                  "$(0, 2)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $x^2 + y^2 + 4x + 14y = 32$ and $y = 4x - 16$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 2)^2 + (y + 7)^2 = 85$",
                  "reason": "Completing the square: $4$ and $49$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
                },
                {
                  "step": "The centre is $(-2, -7)$ and the radius is $\\sqrt{85}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "At $y = 0$: $(x + 2)^2 = 36$, so the circle crosses the $x$-axis at $(-8, 0)$ and $(4, 0)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $49$ is taken from both sides."
                },
                {
                  "step": "At $x = 0$: $(y + 7)^2 = 81$, so the circle crosses the $y$-axis at $(0, -16)$ and $(0, 2)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $4$ is taken from both sides."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -16)$ and the $x$-axis at $(4, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -16$, and $y = 0$ gives $x = 4$."
                },
                {
                  "step": "The points $(0, -16)$ and $(4, 0)$ lie on both graphs, so they are the common points.",
                  "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a circle in at most two points, by Positive, zero, negative discriminant."
                },
                {
                  "step": "The sketch shows the circle and the line meeting at $(0, -16)$ and $(4, 0)$, with these points marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-10.svg",
                    "alt": "A circle with centre (−2, −7) crossing the x−axis at −8 and 4 and the y−axis at −16 and 2, and the line y = 4x − 16 through (0, −16) and (4, 0); they meet at (0, −16) and (4, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $x^2 + y^2 - 12x - 18y = -32$ and $y = -2x + 16$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(4, 0)$",
                  "$(8, 0)$",
                  "$(0, 2)$",
                  "$(0, 16)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $x^2 + y^2 - 12x - 18y = -32$ and $y = -2x + 16$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 6)^2 + (y - 9)^2 = 85$",
                  "reason": "Completing the square: $36$ and $81$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
                },
                {
                  "step": "The centre is $(6, 9)$ and the radius is $\\sqrt{85}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "At $y = 0$: $(x - 6)^2 = 4$, so the circle crosses the $x$-axis at $(4, 0)$ and $(8, 0)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $81$ is taken from both sides."
                },
                {
                  "step": "At $x = 0$: $(y - 9)^2 = 49$, so the circle crosses the $y$-axis at $(0, 2)$ and $(0, 16)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $36$ is taken from both sides."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, 16)$ and the $x$-axis at $(8, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = 16$, and $y = 0$ gives $x = 8$."
                },
                {
                  "step": "The points $(0, 16)$ and $(8, 0)$ lie on both graphs, so they are the common points.",
                  "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a circle in at most two points, by Positive, zero, negative discriminant."
                },
                {
                  "step": "The sketch shows the circle and the line meeting at $(0, 16)$ and $(8, 0)$, with these points marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-11.svg",
                    "alt": "A circle with centre (6, 9) crossing the x−axis at 4 and 8 and the y−axis at 2 and 16, and the line y = −2x + 16 through (0, 16) and (8, 0); they meet at (0, 16) and (8, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $x^2 + y^2 + 18x + 14y = -45$ and $y = -3x - 9$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-15, 0)$",
                  "$(-3, 0)$",
                  "$(0, -9)$",
                  "$(0, -5)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $x^2 + y^2 + 18x + 14y = -45$ and $y = -3x - 9$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 9)^2 + (y + 7)^2 = 85$",
                  "reason": "Completing the square: $81$ and $49$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
                },
                {
                  "step": "The centre is $(-9, -7)$ and the radius is $\\sqrt{85}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "At $y = 0$: $(x + 9)^2 = 36$, so the circle crosses the $x$-axis at $(-15, 0)$ and $(-3, 0)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $49$ is taken from both sides."
                },
                {
                  "step": "At $x = 0$: $(y + 7)^2 = 4$, so the circle crosses the $y$-axis at $(0, -9)$ and $(0, -5)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $81$ is taken from both sides."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -9)$ and the $x$-axis at $(-3, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -9$, and $y = 0$ gives $x = -3$."
                },
                {
                  "step": "The points $(-3, 0)$ and $(0, -9)$ lie on both graphs, so they are the common points.",
                  "reason": "A common point of two graphs satisfies both equations: each point is put into both equations; a line meets a circle in at most two points, by Positive, zero, negative discriminant."
                },
                {
                  "step": "The sketch shows the circle and the line meeting at $(-3, 0)$ and $(0, -9)$, with these points marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-12.svg",
                    "alt": "A circle with centre (−9, −7) crossing the x−axis at −15 and −3 and the y−axis at −9 and −5, and the line y = −3x − 9 through (0, −9) and (−3, 0); they meet at (−3, 0) and (0, −9), marked."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graphs of $y = x^2 - 18x + 80$ and $y = 2x - 20$ on one pair of axes.",
            "lines": [
              {
                "step": "Sketch the graphs of $y = x^2 - 18x + 80$ and $y = 2x - 20$ on one pair of axes.",
                "reason": "This is the problem as given."
              },
              {
                "step": "At $y = 0$: $(x - 8)(x - 10) = 0$, so the parabola crosses the $x$-axis at $(8, 0)$ and $(10, 0)$.",
                "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
              },
              {
                "step": "At $x = 0$: $y = 80$, so the parabola crosses the $y$-axis at $(0, 80)$.",
                "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
              },
              {
                "step": "Completing the square gives $y = (x - 9)^2 - 1$, so the vertex is $(9, -1)$ and the parabola opens up.",
                "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
              },
              {
                "step": "The line crosses the $y$-axis at $(0, -20)$ and the $x$-axis at $(10, 0)$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -20$, and $y = 0$ gives $x = 10$."
              },
              {
                "step": "Setting the two equal, $x^2 - 18x + 80 = 2x - 20$ gives $x^2 - 20x + 100 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(10, 0)$, which lies on both graphs.",
                "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the parabola only there."
              },
              {
                "step": "The sketch shows the parabola and the line meeting at $(10, 0)$, with this point marked.",
                "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                "figure": {
                  "file": "intersections-of-graphs-17.svg",
                  "alt": "The parabola y = x² − 18x + 80 with vertex (9, −1), crossing the x−axis at 8 and 10, and the line y = 2x − 20 through (0, −20) and (10, 0); they meet at (10, 0), marked."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graphs of $y = x^2 - 2x - 15$ and $y = 8x - 40$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-3, 0)$",
                  "$(5, 0)$",
                  "$(0, -15)$",
                  "$(0, -40)$"
                ],
                "turning": [
                  "$(1, -16)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = x^2 - 2x - 15$ and $y = 8x - 40$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$: $(x + 3)(x - 5) = 0$, so the parabola crosses the $x$-axis at $(-3, 0)$ and $(5, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
                },
                {
                  "step": "At $x = 0$: $y = -15$, so the parabola crosses the $y$-axis at $(0, -15)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Completing the square gives $y = (x - 1)^2 - 16$, so the vertex is $(1, -16)$ and the parabola opens up.",
                  "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -40)$ and the $x$-axis at $(5, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -40$, and $y = 0$ gives $x = 5$."
                },
                {
                  "step": "Setting the two equal, $x^2 - 2x - 15 = 8x - 40$ gives $x^2 - 10x + 25 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(5, 0)$, which lies on both graphs.",
                  "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the parabola only there."
                },
                {
                  "step": "The sketch shows the parabola and the line meeting at $(5, 0)$, with this point marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-18.svg",
                    "alt": "The parabola y = x² − 2x − 15 with vertex (1, −16), crossing the x−axis at −3 and 5, and the line y = 8x − 40 through (0, −40) and (5, 0); they meet at (5, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $y = x^2 + 18x + 77$ and $y = 4x + 28$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-11, 0)$",
                  "$(-7, 0)$",
                  "$(0, 77)$",
                  "$(0, 28)$"
                ],
                "turning": [
                  "$(-9, -4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = x^2 + 18x + 77$ and $y = 4x + 28$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$: $(x + 11)(x + 7) = 0$, so the parabola crosses the $x$-axis at $(-11, 0)$ and $(-7, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
                },
                {
                  "step": "At $x = 0$: $y = 77$, so the parabola crosses the $y$-axis at $(0, 77)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Completing the square gives $y = (x + 9)^2 - 4$, so the vertex is $(-9, -4)$ and the parabola opens up.",
                  "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, 28)$ and the $x$-axis at $(-7, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = 28$, and $y = 0$ gives $x = -7$."
                },
                {
                  "step": "Setting the two equal, $x^2 + 18x + 77 = 4x + 28$ gives $x^2 + 14x + 49 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(-7, 0)$, which lies on both graphs.",
                  "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the parabola only there."
                },
                {
                  "step": "The sketch shows the parabola and the line meeting at $(-7, 0)$, with this point marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-19.svg",
                    "alt": "The parabola y = x² + 18x + 77 with vertex (−9, −4), crossing the x−axis at −11 and −7, and the line y = 4x + 28 through (0, 28) and (−7, 0); they meet at (−7, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $y = x^2 - 20x + 96$ and $y = -4x + 32$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(8, 0)$",
                  "$(12, 0)$",
                  "$(0, 96)$",
                  "$(0, 32)$"
                ],
                "turning": [
                  "$(10, -4)$"
                ],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $y = x^2 - 20x + 96$ and $y = -4x + 32$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "At $y = 0$: $(x - 8)(x - 12) = 0$, so the parabola crosses the $x$-axis at $(8, 0)$ and $(12, 0)$.",
                  "reason": "Definition of the $x$-intercept: the parabola meets the $x$-axis where $y = 0$, and by Factoring a quadratic and the Zero-product property the two values of $x$ follow."
                },
                {
                  "step": "At $x = 0$: $y = 96$, so the parabola crosses the $y$-axis at $(0, 96)$.",
                  "reason": "Definition of the $y$-intercept: the parabola meets the $y$-axis where $x = 0$."
                },
                {
                  "step": "Completing the square gives $y = (x - 10)^2 - 4$, so the vertex is $(10, -4)$ and the parabola opens up.",
                  "reason": "Completing the square: the square of half the coefficient of $x$ is added and taken away; by Standard form $y = a(x - h)^2 + k$ the vertex is $(h, k)$, and $a = 1$ is above $0$."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, 32)$ and the $x$-axis at $(8, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = 32$, and $y = 0$ gives $x = 8$."
                },
                {
                  "step": "Setting the two equal, $x^2 - 20x + 96 = -4x + 32$ gives $x^2 - 16x + 64 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(8, 0)$, which lies on both graphs.",
                  "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the parabola only there."
                },
                {
                  "step": "The sketch shows the parabola and the line meeting at $(8, 0)$, with this point marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-20.svg",
                    "alt": "The parabola y = x² − 20x + 96 with vertex (10, −4), crossing the x−axis at 8 and 12, and the line y = −4x + 32 through (0, 32) and (8, 0); they meet at (8, 0), marked."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Sketch the graphs of $x^2 + y^2 - 6x + 6y = 72$ and $y = 3x + 18$ on one pair of axes.",
            "lines": [
              {
                "step": "Sketch the graphs of $x^2 + y^2 - 6x + 6y = 72$ and $y = 3x + 18$ on one pair of axes.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 3)^2 + (y + 3)^2 = 90$",
                "reason": "Completing the square: $9$ and $9$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
              },
              {
                "step": "The centre is $(3, -3)$ and the radius is $3\\sqrt{10}$.",
                "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
              },
              {
                "step": "At $y = 0$: $(x - 3)^2 = 81$, so the circle crosses the $x$-axis at $(-6, 0)$ and $(12, 0)$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $9$ is taken from both sides."
              },
              {
                "step": "At $x = 0$: $(y + 3)^2 = 81$, so the circle crosses the $y$-axis at $(0, -12)$ and $(0, 6)$.",
                "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $9$ is taken from both sides."
              },
              {
                "step": "The line crosses the $y$-axis at $(0, 18)$ and the $x$-axis at $(-6, 0)$.",
                "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = 18$, and $y = 0$ gives $x = -6$."
              },
              {
                "step": "Putting $3x + 18$ in place of $y$ gives $10x^2 + 120x + 360 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(-6, 0)$, which lies on both graphs.",
                "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the circle only there."
              },
              {
                "step": "The sketch shows the circle and the line meeting at $(-6, 0)$, with this point marked.",
                "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                "figure": {
                  "file": "intersections-of-graphs-24.svg",
                  "alt": "A circle with centre (3, −3) crossing the x−axis at −6 and 12 and the y−axis at −12 and 6, and the line y = 3x + 18 through (0, 18) and (−6, 0); they meet at (−6, 0), marked."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Sketch the graphs of $x^2 + y^2 - 2x - 2y = 24$ and $y = -5x - 20$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-4, 0)$",
                  "$(6, 0)$",
                  "$(0, -4)$",
                  "$(0, 6)$",
                  "$(0, -20)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $x^2 + y^2 - 2x - 2y = 24$ and $y = -5x - 20$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 1)^2 + (y - 1)^2 = 26$",
                  "reason": "Completing the square: $1$ and $1$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
                },
                {
                  "step": "The centre is $(1, 1)$ and the radius is $\\sqrt{26}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "At $y = 0$: $(x - 1)^2 = 25$, so the circle crosses the $x$-axis at $(-4, 0)$ and $(6, 0)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $1$ is taken from both sides."
                },
                {
                  "step": "At $x = 0$: $(y - 1)^2 = 25$, so the circle crosses the $y$-axis at $(0, -4)$ and $(0, 6)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $1$ is taken from both sides."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -20)$ and the $x$-axis at $(-4, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -20$, and $y = 0$ gives $x = -4$."
                },
                {
                  "step": "Putting $-5x - 20$ in place of $y$ gives $26x^2 + 208x + 416 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(-4, 0)$, which lies on both graphs.",
                  "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the circle only there."
                },
                {
                  "step": "The sketch shows the circle and the line meeting at $(-4, 0)$, with this point marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-25.svg",
                    "alt": "A circle with centre (1, 1) crossing the x−axis at −4 and 6 and the y−axis at −4 and 6, and the line y = −5x − 20 through (0, −20) and (−4, 0); they meet at (−4, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $x^2 + y^2 + 16x - 16y = 192$ and $y = -2x - 48$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-24, 0)$",
                  "$(8, 0)$",
                  "$(0, -8)$",
                  "$(0, 24)$",
                  "$(0, -48)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $x^2 + y^2 + 16x - 16y = 192$ and $y = -2x - 48$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 8)^2 + (y - 8)^2 = 320$",
                  "reason": "Completing the square: $64$ and $64$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
                },
                {
                  "step": "The centre is $(-8, 8)$ and the radius is $8\\sqrt{5}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "At $y = 0$: $(x + 8)^2 = 256$, so the circle crosses the $x$-axis at $(-24, 0)$ and $(8, 0)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $64$ is taken from both sides."
                },
                {
                  "step": "At $x = 0$: $(y - 8)^2 = 256$, so the circle crosses the $y$-axis at $(0, -8)$ and $(0, 24)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $64$ is taken from both sides."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -48)$ and the $x$-axis at $(-24, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -48$, and $y = 0$ gives $x = -24$."
                },
                {
                  "step": "Putting $-2x - 48$ in place of $y$ gives $5x^2 + 240x + 2880 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(-24, 0)$, which lies on both graphs.",
                  "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the circle only there."
                },
                {
                  "step": "The sketch shows the circle and the line meeting at $(-24, 0)$, with this point marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-26.svg",
                    "alt": "A circle with centre (−8, 8) crossing the x−axis at −24 and 8 and the y−axis at −8 and 24, and the line y = −2x − 48 through (0, −48) and (−24, 0); they meet at (−24, 0), marked."
                  }
                }
              ]
            },
            {
              "prompt": "Sketch the graphs of $x^2 + y^2 + 22x - 10y = -21$ and $y = -2x - 42$ on one pair of axes.",
              "form": "Sketch the graph on your own axes.",
              "features": {
                "intercepts": [
                  "$(-21, 0)$",
                  "$(-1, 0)$",
                  "$(0, 3)$",
                  "$(0, 7)$",
                  "$(0, -42)$"
                ],
                "turning": [],
                "asymptotes": []
              },
              "lines": [
                {
                  "step": "Sketch the graphs of $x^2 + y^2 + 22x - 10y = -21$ and $y = -2x - 42$ on one pair of axes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 11)^2 + (y - 5)^2 = 125$",
                  "reason": "Completing the square: $121$ and $25$, the squares of half the coefficients of $x$ and of $y$, are added to both sides."
                },
                {
                  "step": "The centre is $(-11, 5)$ and the radius is $5\\sqrt{5}$.",
                  "reason": "Standard form of a circle: the centre is $(h, k)$ and the radius is the positive square root of the right side."
                },
                {
                  "step": "At $y = 0$: $(x + 11)^2 = 100$, so the circle crosses the $x$-axis at $(-21, 0)$ and $(-1, 0)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $x$-axis where $y = 0$, and $25$ is taken from both sides."
                },
                {
                  "step": "At $x = 0$: $(y - 5)^2 = 4$, so the circle crosses the $y$-axis at $(0, 3)$ and $(0, 7)$.",
                  "reason": "If $x^2=a^2$ then $x=a$ or $x=-a$: the circle meets the $y$-axis where $x = 0$, and $121$ is taken from both sides."
                },
                {
                  "step": "The line crosses the $y$-axis at $(0, -42)$ and the $x$-axis at $(-21, 0)$.",
                  "reason": "The line $y=mx+b$ has slope $m$ and $y$-intercept $(0,b)$: here $b = -42$, and $y = 0$ gives $x = -21$."
                },
                {
                  "step": "Putting $-2x - 42$ in place of $y$ gives $5x^2 + 210x + 2205 = 0$, whose discriminant is $0$, so the graphs meet at one point, $(-21, 0)$, which lies on both graphs.",
                  "reason": "A common point of two graphs satisfies both equations: the point is put into both equations, and by Positive, zero, negative discriminant the line meets the circle only there."
                },
                {
                  "step": "The sketch shows the circle and the line meeting at $(-21, 0)$, with this point marked.",
                  "reason": "A sketch gives only approximate points: the common points are marked at the exact coordinates worked out above.",
                  "figure": {
                    "file": "intersections-of-graphs-27.svg",
                    "alt": "A circle with centre (−11, 5) crossing the x−axis at −21 and −1 and the y−axis at 3 and 7, and the line y = −2x − 42 through (0, −42) and (−21, 0); they meet at (−21, 0), marked."
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
