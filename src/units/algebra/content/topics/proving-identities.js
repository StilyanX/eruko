export default {
  "number": 209,
  "title": "Proving an identity",
  "section": 18,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "338-343"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the expression, multiplied out with like terms collected, that $(2x + 5y)(3x + y) - (2x - 5y)(3x - y)$ equals for all numbers $x$ and $y$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "34*x*y",
    "solution": [
      "Find the expression, multiplied out with like terms collected, that $(2x + 5y)(3x + y) - (2x - 5y)(3x - y)$ equals for all numbers $x$ and $y$.",
      "$(2x + 5y)(3x + y) - (2x - 5y)(3x - y) = 6x^2 + 2xy + 15xy + 5y^2 - 6x^2 + 2xy + 15xy - 5y^2$",
      "$6x^2 + 2xy + 15xy + 5y^2 - 6x^2 + 2xy + 15xy - 5y^2 = 34xy$",
      "So $(2x + 5y)(3x + y) - (2x - 5y)(3x - y) = 34xy$ for all numbers $x$ and $y$."
    ]
  },
  "ideas": [
    {
      "name": "Identity",
      "concrete": "The equation $(x + 2)(x - 2) + 4 = x^2$ is true at $x = 5$, where it reads $7 \\cdot 3 + 4 = 25$, and at every other number, since the left side multiplied out is $x^2 - 4 + 4$. The equation $x^2 = 25$ is true at $x = 5$ and at $x = -5$ and at no other number.",
      "general": "An **identity** is an equation that is true for all values of its letters for which both sides are defined. An identity is proved by starting from one side alone and changing it, each step true for all values of the letters, until it is the other side, or by changing each side alone until the two are the same expression. The proof never starts from the equation to be proved, since that equation is not yet known. One set of values at which the two sides differ shows that an equation is not an identity."
    },
    {
      "name": "Sum of three cubes identity",
      "concrete": "With $1$, $2$ and $3$: $(1 + 2 + 3)(1 + 4 + 9 - 2 - 6 - 3) = 6 \\cdot 3 = 18$, and $1 + 8 + 27 - 3 \\cdot 6 = 18$.",
      "general": "For all numbers $a$, $b$ and $c$, $(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc$."
    },
    {
      "name": "Two-squares identity",
      "concrete": "With $1$, $2$, $3$ and $4$: $(1^2 + 2^2)(3^2 + 4^2) = 5 \\cdot 25 = 125$, and $(1 \\cdot 3 + 2 \\cdot 4)^2 + (1 \\cdot 4 - 2 \\cdot 3)^2 = 121 + 4 = 125$.",
      "general": "For all numbers $a$, $b$, $c$ and $d$, $(a^2 + b^2)(c^2 + d^2) = (ac + bd)^2 + (ad - bc)^2$."
    }
  ],
  "kinds": [
    {
      "id": "t209-k1",
      "forms": [
        {
          "example": {
            "problem": "Prove that $(x + 2)(y + 4) - (x - 2)(y - 4) = 8x + 4y$ for all numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Prove that $(x + 2)(y + 4) - (x - 2)(y - 4) = 8x + 4y$ for all numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + 2)(y + 4) - (x - 2)(y - 4) = xy + 4x + 2y + 8 - xy + 4x + 2y - 8$",
                "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other. Subtracting a bracket changes every sign in it: each sign of the second product changes."
              },
              {
                "step": "$xy + 4x + 2y + 8 - xy + 4x + 2y - 8 = 8x + 4y$",
                "reason": "Collecting like terms: the terms in $xy$ cancel, and so do the numbers, and the other like terms are added."
              },
              {
                "step": "So $(x + 2)(y + 4) - (x - 2)(y - 4) = 8x + 4y$ for all numbers $x$ and $y$.",
                "reason": "Transitive property: lines 2 and 3 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that $(x - 6y)(x - 2y) - (x - 5y)(x - 3y)$ equals for all numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-3*y^2",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that $(x - 6y)(x - 2y) - (x - 5y)(x - 3y)$ equals for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 6y)(x - 2y) - (x - 5y)(x - 3y) = x^2 - 2xy - 6xy + 12y^2 - x^2 + 3xy + 5xy - 15y^2$",
                  "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other. Subtracting a bracket changes every sign in it: each sign of the second product changes."
                },
                {
                  "step": "$x^2 - 2xy - 6xy + 12y^2 - x^2 + 3xy + 5xy - 15y^2 = -3y^2$",
                  "reason": "Collecting like terms: the terms in $x^2$ and $xy$ cancel, and the other like terms are added."
                },
                {
                  "step": "So $(x - 6y)(x - 2y) - (x - 5y)(x - 3y) = -3y^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2 and 3 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that $(x + 4y)(3x + y) - (x - 4y)(3x - y)$ equals for all numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "26*x*y",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that $(x + 4y)(3x + y) - (x - 4y)(3x - y)$ equals for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 4y)(3x + y) - (x - 4y)(3x - y) = 3x^2 + xy + 12xy + 4y^2 - 3x^2 + xy + 12xy - 4y^2$",
                  "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other. Subtracting a bracket changes every sign in it: each sign of the second product changes."
                },
                {
                  "step": "$3x^2 + xy + 12xy + 4y^2 - 3x^2 + xy + 12xy - 4y^2 = 26xy$",
                  "reason": "Collecting like terms: the terms in $x^2$ and $y^2$ cancel, and the other like terms are added."
                },
                {
                  "step": "So $(x + 4y)(3x + y) - (x - 4y)(3x - y) = 26xy$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2 and 3 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that $(x + y + 6)(x - y) - (x - y + 6)(x + y)$ equals for all numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-12*y",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that $(x + y + 6)(x - y) - (x - y + 6)(x + y)$ equals for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + y + 6)(x - y) - (x - y + 6)(x + y) = x^2 - xy + xy - y^2 + 6x - 6y - x^2 - xy + xy + y^2 - 6x - 6y$",
                  "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other. Subtracting a bracket changes every sign in it: each sign of the second product changes."
                },
                {
                  "step": "$x^2 - xy + xy - y^2 + 6x - 6y - x^2 - xy + xy + y^2 - 6x - 6y = -12y$",
                  "reason": "Collecting like terms: the terms in $x^2$, $xy$, $y^2$ and $x$ cancel, and the other like terms are added."
                },
                {
                  "step": "So $(x + y + 6)(x - y) - (x - y + 6)(x + y) = -12y$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2 and 3 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $(5x - 10y)(5x - 2y) + 16y^2 = (5x - 6y)^2$ for all numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Prove that $(5x - 10y)(5x - 2y) + 16y^2 = (5x - 6y)^2$ for all numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(5x - 10y)(5x - 2y) + 16y^2 = 25x^2 - 10xy - 50xy + 20y^2 + 16y^2$",
                "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other, and a number in front multiplies each term."
              },
              {
                "step": "$25x^2 - 10xy - 50xy + 20y^2 + 16y^2 = 25x^2 - 60xy + 36y^2$",
                "reason": "Collecting like terms: like terms are added."
              },
              {
                "step": "$25x^2 - 60xy + 36y^2 = (5x - 6y)^2$",
                "reason": "Square of a binomial, read from right to left: the first and last terms are the squares of $5x$ and $6y$, and the middle term is twice their product with a minus sign."
              },
              {
                "step": "So $(5x - 10y)(5x - 2y) + 16y^2 = (5x - 6y)^2$ for all numbers $x$ and $y$.",
                "reason": "Transitive property: lines 2, 3 and 4 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the square of a bracket that $(2x - 3y)(2x + 9y) + 36y^2$ equals for all numbers $x$ and $y$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(2*x+3*y)^2",
              "lines": [
                {
                  "step": "Find the square of a bracket that $(2x - 3y)(2x + 9y) + 36y^2$ equals for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x - 3y)(2x + 9y) + 36y^2 = 4x^2 + 18xy - 6xy - 27y^2 + 36y^2$",
                  "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other, and a number in front multiplies each term."
                },
                {
                  "step": "$4x^2 + 18xy - 6xy - 27y^2 + 36y^2 = 4x^2 + 12xy + 9y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "$4x^2 + 12xy + 9y^2 = (2x + 3y)^2$",
                  "reason": "Square of a binomial, read from right to left: the first and last terms are the squares of $2x$ and $3y$, and the middle term is twice their product."
                },
                {
                  "step": "So $(2x - 3y)(2x + 9y) + 36y^2 = (2x + 3y)^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2, 3 and 4 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find the square of a bracket that $4(x - 9y)(x - 6y) + 9y^2$ equals for all numbers $x$ and $y$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(2*x-15*y)^2",
              "lines": [
                {
                  "step": "Find the square of a bracket that $4(x - 9y)(x - 6y) + 9y^2$ equals for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4(x - 9y)(x - 6y) + 9y^2 = 4x^2 - 24xy - 36xy + 216y^2 + 9y^2$",
                  "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other, and a number in front multiplies each term."
                },
                {
                  "step": "$4x^2 - 24xy - 36xy + 216y^2 + 9y^2 = 4x^2 - 60xy + 225y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "$4x^2 - 60xy + 225y^2 = (2x - 15y)^2$",
                  "reason": "Square of a binomial, read from right to left: the first and last terms are the squares of $2x$ and $15y$, and the middle term is twice their product with a minus sign."
                },
                {
                  "step": "So $4(x - 9y)(x - 6y) + 9y^2 = (2x - 15y)^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2, 3 and 4 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find the square of a bracket that $(3x + 2y)(3x + 6y) + 4y^2$ equals for all numbers $x$ and $y$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(3*x+4*y)^2",
              "lines": [
                {
                  "step": "Find the square of a bracket that $(3x + 2y)(3x + 6y) + 4y^2$ equals for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x + 2y)(3x + 6y) + 4y^2 = 9x^2 + 18xy + 6xy + 12y^2 + 4y^2$",
                  "reason": "Identity: the working starts from the left side alone, and each step holds for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other, and a number in front multiplies each term."
                },
                {
                  "step": "$9x^2 + 18xy + 6xy + 12y^2 + 4y^2 = 9x^2 + 24xy + 16y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "$9x^2 + 24xy + 16y^2 = (3x + 4y)^2$",
                  "reason": "Square of a binomial, read from right to left: the first and last terms are the squares of $3x$ and $4y$, and the middle term is twice their product."
                },
                {
                  "step": "So $(3x + 2y)(3x + 6y) + 4y^2 = (3x + 4y)^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2, 3 and 4 join the left side to the right side. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Prove that $3(x + y)^2 - 25xy + 3y^2 = (3x - y)(x - 6y)$ for all numbers $x$ and $y$.",
            "lines": [
              {
                "step": "Prove that $3(x + y)^2 - 25xy + 3y^2 = (3x - y)(x - 6y)$ for all numbers $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3(x + y)^2 - 25xy + 3y^2 = 3x^2 + 6xy + 3y^2 - 25xy + 3y^2$",
                "reason": "Identity: each side is worked on alone, and each step holds for all numbers $x$ and $y$. Multiplying out: each bracket of the left side is multiplied out."
              },
              {
                "step": "$3x^2 + 6xy + 3y^2 - 25xy + 3y^2 = 3x^2 - 19xy + 6y^2$",
                "reason": "Collecting like terms: like terms are added."
              },
              {
                "step": "$(3x - y)(x - 6y) = 3x^2 - 18xy - xy + 6y^2$",
                "reason": "Multiplying out: each bracket of the right side is multiplied out."
              },
              {
                "step": "$3x^2 - 18xy - xy + 6y^2 = 3x^2 - 19xy + 6y^2$",
                "reason": "Collecting like terms: like terms are added."
              },
              {
                "step": "Both sides equal $3x^2 - 19xy + 6y^2$, so $3(x + y)^2 - 25xy + 3y^2 = (3x - y)(x - 6y)$ for all numbers $x$ and $y$.",
                "reason": "Transitive property: lines 3 and 5 give the same expression. Identity: each step holds for all numbers $x$ and $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that both sides of $(x - 3y)^2 + (x + y)^2 = 2(x - y)^2 + 8y^2$ equal for all numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^2-4*x*y+10*y^2",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that both sides of $(x - 3y)^2 + (x + y)^2 = 2(x - y)^2 + 8y^2$ equal for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 3y)^2 + (x + y)^2 = x^2 - 6xy + 9y^2 + x^2 + 2xy + y^2$",
                  "reason": "Identity: each side is worked on alone, and each step holds for all numbers $x$ and $y$. Multiplying out: each bracket of the left side is multiplied out."
                },
                {
                  "step": "$x^2 - 6xy + 9y^2 + x^2 + 2xy + y^2 = 2x^2 - 4xy + 10y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "$2(x - y)^2 + 8y^2 = 2x^2 - 4xy + 2y^2 + 8y^2$",
                  "reason": "Multiplying out: each bracket of the right side is multiplied out."
                },
                {
                  "step": "$2x^2 - 4xy + 2y^2 + 8y^2 = 2x^2 - 4xy + 10y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "Both sides equal $2x^2 - 4xy + 10y^2$, so $(x - 3y)^2 + (x + y)^2 = 2(x - y)^2 + 8y^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 3 and 5 give the same expression. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that both sides of $3(x + 2y)^2 - 2xy - 20y^2 = (x + 4y)(3x - 2y)$ equal for all numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^2+10*x*y-8*y^2",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that both sides of $3(x + 2y)^2 - 2xy - 20y^2 = (x + 4y)(3x - 2y)$ equal for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3(x + 2y)^2 - 2xy - 20y^2 = 3x^2 + 12xy + 12y^2 - 2xy - 20y^2$",
                  "reason": "Identity: each side is worked on alone, and each step holds for all numbers $x$ and $y$. Multiplying out: each bracket of the left side is multiplied out."
                },
                {
                  "step": "$3x^2 + 12xy + 12y^2 - 2xy - 20y^2 = 3x^2 + 10xy - 8y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "$(x + 4y)(3x - 2y) = 3x^2 - 2xy + 12xy - 8y^2$",
                  "reason": "Multiplying out: each bracket of the right side is multiplied out."
                },
                {
                  "step": "$3x^2 - 2xy + 12xy - 8y^2 = 3x^2 + 10xy - 8y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "Both sides equal $3x^2 + 10xy - 8y^2$, so $3(x + 2y)^2 - 2xy - 20y^2 = (x + 4y)(3x - 2y)$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 3 and 5 give the same expression. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that both sides of $2(x - 2y)^2 - 5xy + 12y^2 = (x - 4y)(2x - 5y)$ equal for all numbers $x$ and $y$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*x^2-13*x*y+20*y^2",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that both sides of $2(x - 2y)^2 - 5xy + 12y^2 = (x - 4y)(2x - 5y)$ equal for all numbers $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2(x - 2y)^2 - 5xy + 12y^2 = 2x^2 - 8xy + 8y^2 - 5xy + 12y^2$",
                  "reason": "Identity: each side is worked on alone, and each step holds for all numbers $x$ and $y$. Multiplying out: each bracket of the left side is multiplied out."
                },
                {
                  "step": "$2x^2 - 8xy + 8y^2 - 5xy + 12y^2 = 2x^2 - 13xy + 20y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "$(x - 4y)(2x - 5y) = 2x^2 - 5xy - 8xy + 20y^2$",
                  "reason": "Multiplying out: each bracket of the right side is multiplied out."
                },
                {
                  "step": "$2x^2 - 5xy - 8xy + 20y^2 = 2x^2 - 13xy + 20y^2$",
                  "reason": "Collecting like terms: like terms are added."
                },
                {
                  "step": "Both sides equal $2x^2 - 13xy + 20y^2$, so $2(x - 2y)^2 - 5xy + 12y^2 = (x - 4y)(2x - 5y)$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 3 and 5 give the same expression. Identity: each step holds for all numbers $x$ and $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t209-k2",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an identity in $x$ and $y$, with its two sides in the sentence's order: For all numbers $x$ and $y$, the square of the sum of $8x$ and $9y$ is the square of the difference of $8x$ and $9y$, increased by $288xy$.",
            "lines": [
              {
                "step": "Write this sentence as an identity in $x$ and $y$, with its two sides in the sentence's order: For all numbers $x$ and $y$, the square of the sum of $8x$ and $9y$ is the square of the difference of $8x$ and $9y$, increased by $288xy$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of the sum of $8x$ and $9y$ is $(8x + 9y)^2$.",
                "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
              },
              {
                "step": "The square of the difference of $8x$ and $9y$, increased by $288xy$, is $(8x - 9y)^2 + 288xy$.",
                "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
              },
              {
                "step": "$(8x + 9y)^2 = (8x - 9y)^2 + 288xy$",
                "reason": "Writing a sentence as an equation: the word \"is\" between the two phrases stands where the equals sign goes, and the words \"for all numbers\" say that the equation holds for all values of $x$ and $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an identity in $x$, with its two sides in the sentence's order: For all numbers $x$, the product of $5x - 6$ and $5x - 2$, increased by $4$, is the square of $5x - 4$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(5*x-6)*(5*x-2)+4 = (5*x-4)^2",
              "lines": [
                {
                  "step": "Write this sentence as an identity in $x$, with its two sides in the sentence's order: For all numbers $x$, the product of $5x - 6$ and $5x - 2$, increased by $4$, is the square of $5x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $5x - 6$ and $5x - 2$, increased by $4$, is $(5x - 6)(5x - 2) + 4$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The square of $5x - 4$ is $(5x - 4)^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$(5x - 6)(5x - 2) + 4 = (5x - 4)^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" between the two phrases stands where the equals sign goes, and the words \"for all numbers\" say that the equation holds for all values of $x$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an identity in $x$ and $y$, with its two sides in the sentence's order: For all numbers $x$ and $y$, the product of $x + 2y$ and $x + 9y$, less the product of $x - 2y$ and $x - 9y$, is the product of $22$, $x$ and $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+2*y)*(x+9*y)-(x-2*y)*(x-9*y) = 22*x*y",
              "lines": [
                {
                  "step": "Write this sentence as an identity in $x$ and $y$, with its two sides in the sentence's order: For all numbers $x$ and $y$, the product of $x + 2y$ and $x + 9y$, less the product of $x - 2y$ and $x - 9y$, is the product of $22$, $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x + 2y$ and $x + 9y$, less the product of $x - 2y$ and $x - 9y$, is $(x + 2y)(x + 9y) - (x - 2y)(x - 9y)$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The product of $22$, $x$ and $y$, is $22xy$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$(x + 2y)(x + 9y) - (x - 2y)(x - 9y) = 22xy$",
                  "reason": "Writing a sentence as an equation: the word \"is\" between the two phrases stands where the equals sign goes, and the words \"for all numbers\" say that the equation holds for all values of $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an identity in $x$ and $y$, with its two sides in the sentence's order: For all numbers $x$ and $y$, twice the sum of the squares of $3x$ and $8y$ is the square of $3x + 8y$ added to the square of $3x - 8y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*((3*x)^2+(8*y)^2) = (3*x+8*y)^2+(3*x-8*y)^2",
              "lines": [
                {
                  "step": "Write this sentence as an identity in $x$ and $y$, with its two sides in the sentence's order: For all numbers $x$ and $y$, twice the sum of the squares of $3x$ and $8y$ is the square of $3x + 8y$ added to the square of $3x - 8y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice the sum of the squares of $3x$ and $8y$ is $2\\left((3x)^2 + (8y)^2\\right)$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The square of $3x + 8y$ added to the square of $3x - 8y$ is $(3x + 8y)^2 + (3x - 8y)^2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$2\\left((3x)^2 + (8y)^2\\right) = (3x + 8y)^2 + (3x - 8y)^2$",
                  "reason": "Writing a sentence as an equation: the word \"is\" between the two phrases stands where the equals sign goes, and the words \"for all numbers\" say that the equation holds for all values of $x$ and $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t209-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working, which finds the expression that $(x + 3y)(x + y) - (3x - y)(4x + 3y)$ equals for all numbers $x$ and $y$, and write that line right.",
            "given": [
              "$(x + 3y)(x + y) - (3x - y)(4x + 3y) = (x^2 + 4xy + 3y^2) - (12x^2 + 5xy - 3y^2)$",
              "$(x^2 + 4xy + 3y^2) - (12x^2 + 5xy - 3y^2) = x^2 + 4xy + 3y^2 - 12x^2 + 5xy + 3y^2$",
              "$x^2 + 4xy + 3y^2 - 12x^2 + 5xy + 3y^2 = -11x^2 + 9xy + 6y^2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working, which finds the expression that $(x + 3y)(x + y) - (3x - y)(4x + 3y)$ equals for all numbers $x$ and $y$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 keeps the sign of $+5xy$ from inside the bracket.",
                "reason": "A sign lost: subtracting a bracket changes every sign in it, so $+5xy$ becomes $-5xy$."
              },
              {
                "step": "Line 2 written right is $(x^2 + 4xy + 3y^2) - (12x^2 + 5xy - 3y^2) = x^2 + 4xy + 3y^2 - 12x^2 - 5xy + 3y^2$.",
                "reason": "The same step worked with the sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working, which finds the expression that $(x - 3y)(2x + y) - (4x - 3y)(2x - 3y)$ equals for all numbers $x$ and $y$, and write that line right.",
              "given": [
                "$(x - 3y)(2x + y) - (4x - 3y)(2x - 3y) = (2x^2 + 5xy - 3y^2) - (8x^2 - 18xy + 9y^2)$",
                "$(2x^2 + 5xy - 3y^2) - (8x^2 - 18xy + 9y^2) = 2x^2 + 5xy - 3y^2 - 8x^2 + 18xy - 9y^2$",
                "$2x^2 + 5xy - 3y^2 - 8x^2 + 18xy - 9y^2 = -6x^2 + 23xy - 12y^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (x-3*y)*(2*x+y)-(4*x-3*y)*(2*x-3*y) = (2*x^2-5*x*y-3*y^2)-(8*x^2-18*x*y+9*y^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the expression that $(x - 3y)(2x + y) - (4x - 3y)(2x - 3y)$ equals for all numbers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 writes $+5xy$ for the $xy$ term of the first product.",
                  "reason": "A sign lost: the terms $+xy$ and $-6xy$ of that product together are $-5xy$."
                },
                {
                  "step": "Line 1 written right is $(x - 3y)(2x + y) - (4x - 3y)(2x - 3y) = (2x^2 - 5xy - 3y^2) - (8x^2 - 18xy + 9y^2)$.",
                  "reason": "The same step worked with the sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the expression that $(4x + y)(4x - 3y) - (x + 3y)(4x + 3y)$ equals for all numbers $x$ and $y$, and write that line right.",
              "given": [
                "$(4x + y)(4x - 3y) - (x + 3y)(4x + 3y) = (16x^2 - 8xy - 3y^2) - (4x^2 + 15xy + 9y^2)$",
                "$(16x^2 - 8xy - 3y^2) - (4x^2 + 15xy + 9y^2) = 16x^2 - 8xy - 3y^2 + 4x^2 - 15xy - 9y^2$",
                "$16x^2 - 8xy - 3y^2 + 4x^2 - 15xy - 9y^2 = 20x^2 - 23xy - 12y^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (16*x^2-8*x*y-3*y^2)-(4*x^2+15*x*y+9*y^2) = 16*x^2-8*x*y-3*y^2-4*x^2-15*x*y-9*y^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the expression that $(4x + y)(4x - 3y) - (x + 3y)(4x + 3y)$ equals for all numbers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 keeps the sign of $4x^2$ from inside the bracket.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $4x^2$ becomes $-4x^2$."
                },
                {
                  "step": "Line 2 written right is $(16x^2 - 8xy - 3y^2) - (4x^2 + 15xy + 9y^2) = 16x^2 - 8xy - 3y^2 - 4x^2 - 15xy - 9y^2$.",
                  "reason": "The same step worked with the sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working, which finds the expression that $(2x + 3y)(3x + y) - (4x + y)(x - 2y)$ equals for all numbers $x$ and $y$, and write that line right.",
              "given": [
                "$(2x + 3y)(3x + y) - (4x + y)(x - 2y) = (6x^2 + 11xy + 3y^2) - (4x^2 - 7xy - 2y^2)$",
                "$(6x^2 + 11xy + 3y^2) - (4x^2 - 7xy - 2y^2) = 6x^2 + 11xy + 3y^2 - 4x^2 + 7xy + 2y^2$",
                "$6x^2 + 11xy + 3y^2 - 4x^2 + 7xy + 2y^2 = 2x^2 + 18xy + y^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 6*x^2+11*x*y+3*y^2-4*x^2+7*x*y+2*y^2 = 2*x^2+18*x*y+5*y^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working, which finds the expression that $(2x + 3y)(3x + y) - (4x + y)(x - 2y)$ equals for all numbers $x$ and $y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 collects $3y^2$ and $+2y^2$ into $y^2$.",
                  "reason": "A sign lost: $3y^2$ and $+2y^2$ together are $5y^2$."
                },
                {
                  "step": "Line 3 written right is $6x^2 + 11xy + 3y^2 - 4x^2 + 7xy + 2y^2 = 2x^2 + 18xy + 5y^2$.",
                  "reason": "The same step worked with the sign kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t209-k4",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $394 \\cdot 407 - 395 \\cdot 404$.",
            "lines": [
              {
                "step": "Evaluate $394 \\cdot 407 - 395 \\cdot 404$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $x = 400$, the number is $(x - 6)(x + 7) - (x - 5)(x + 4)$.",
                "reason": "Variable: the letter $x$ stands for $400$, the round number that $394$, $407$, $395$ and $404$ are near."
              },
              {
                "step": "$(x - 6)(x + 7) - (x - 5)(x + 4) = x^2 + 7x - 6x - 42 - x^2 - 4x + 5x + 20$",
                "reason": "Identity: this step and the next hold for all numbers $x$. Multiplying out: every term of one bracket is multiplied by every term of the other. Subtracting a bracket changes every sign in it: each sign of the second product changes."
              },
              {
                "step": "$x^2 + 7x - 6x - 42 - x^2 - 4x + 5x + 20 = 2x - 22$",
                "reason": "Collecting like terms: the terms in $x^2$ cancel, and the other like terms are added."
              },
              {
                "step": "$394 \\cdot 407 - 395 \\cdot 404 = 2 \\cdot 400 - 22$",
                "reason": "Substituting a value: $x = 400$ in the identity of lines 3 and 4."
              },
              {
                "step": "$2 \\cdot 400 - 22 = 778$",
                "reason": "The multiplication and addition of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $86 \\cdot 88 + 74 \\cdot 72$.",
              "form": "Answer as an integer.",
              "answer": "12896",
              "lines": [
                {
                  "step": "Evaluate $86 \\cdot 88 + 74 \\cdot 72$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x = 80$, the number is $(x + 6)(x + 8) + (x - 6)(x - 8)$.",
                  "reason": "Variable: the letter $x$ stands for $80$, the round number that $86$, $88$, $74$ and $72$ are near."
                },
                {
                  "step": "$(x + 6)(x + 8) + (x - 6)(x - 8) = x^2 + 8x + 6x + 48 + x^2 - 8x - 6x + 48$",
                  "reason": "Identity: this step and the next hold for all numbers $x$. Multiplying out: every term of one bracket is multiplied by every term of the other."
                },
                {
                  "step": "$x^2 + 8x + 6x + 48 + x^2 - 8x - 6x + 48 = 2x^2 + 96$",
                  "reason": "Collecting like terms: the terms in $x$ cancel, and the other like terms are added."
                },
                {
                  "step": "$86 \\cdot 88 + 74 \\cdot 72 = 2 \\cdot 80^2 + 96$",
                  "reason": "Substituting a value: $x = 80$ in the identity of lines 3 and 4."
                },
                {
                  "step": "$2 \\cdot 80^2 + 96 = 12{,}896$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $82 \\cdot 74 - 78 \\cdot 86$.",
              "form": "Answer as an integer.",
              "answer": "-640",
              "lines": [
                {
                  "step": "Evaluate $82 \\cdot 74 - 78 \\cdot 86$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x = 80$, the number is $(x + 2)(x - 6) - (x - 2)(x + 6)$.",
                  "reason": "Variable: the letter $x$ stands for $80$, the round number that $82$, $74$, $78$ and $86$ are near."
                },
                {
                  "step": "$(x + 2)(x - 6) - (x - 2)(x + 6) = x^2 - 6x + 2x - 12 - x^2 - 6x + 2x + 12$",
                  "reason": "Identity: this step and the next hold for all numbers $x$. Multiplying out: every term of one bracket is multiplied by every term of the other. Subtracting a bracket changes every sign in it: each sign of the second product changes."
                },
                {
                  "step": "$x^2 - 6x + 2x - 12 - x^2 - 6x + 2x + 12 = -8x$",
                  "reason": "Collecting like terms: the terms in $x^2$ cancel, and so do the numbers, and the other like terms are added."
                },
                {
                  "step": "$82 \\cdot 74 - 78 \\cdot 86 = -8 \\cdot 80$",
                  "reason": "Substituting a value: $x = 80$ in the identity of lines 3 and 4."
                },
                {
                  "step": "$-8 \\cdot 80 = -640$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $309^2 + 291^2$.",
              "form": "Answer as an integer.",
              "answer": "180162",
              "lines": [
                {
                  "step": "Evaluate $309^2 + 291^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $x = 300$, the number is $(x + 9)^2 + (x - 9)^2$.",
                  "reason": "Variable: the letter $x$ stands for $300$, the round number that $309$ and $291$ are near."
                },
                {
                  "step": "$(x + 9)^2 + (x - 9)^2 = x^2 + 18x + 81 + x^2 - 18x + 81$",
                  "reason": "Identity: this step and the next hold for all numbers $x$. Multiplying out: every term of one bracket is multiplied by every term of the other."
                },
                {
                  "step": "$x^2 + 18x + 81 + x^2 - 18x + 81 = 2x^2 + 162$",
                  "reason": "Collecting like terms: the terms in $x$ cancel, and the other like terms are added."
                },
                {
                  "step": "$309^2 + 291^2 = 2 \\cdot 300^2 + 162$",
                  "reason": "Substituting a value: $x = 300$ in the identity of lines 3 and 4."
                },
                {
                  "step": "$2 \\cdot 300^2 + 162 = 180{,}162$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t209-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $(3x + 7y)^2 + (7x + 3y)^2 = 58(x^2 + y^2)$ is an identity.",
            "lines": [
              {
                "step": "Decide whether $(3x + 7y)^2 + (7x + 3y)^2 = 58(x^2 + y^2)$ is an identity.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(3x + 7y)^2 + (7x + 3y)^2 = 58x^2 + 84xy + 58y^2$",
                "reason": "Multiplying out and collecting like terms: the left side, for all numbers $x$ and $y$."
              },
              {
                "step": "$58(x^2 + y^2) = 58x^2 + 58y^2$",
                "reason": "Multiplying out and collecting like terms: the right side, for all numbers $x$ and $y$."
              },
              {
                "step": "At $x = 1$ and $y = 1$ the left side is $200$ and the right side is $116$.",
                "reason": "Substituting a value: $x = 1$ and $y = 1$ in lines 2 and 3, whose expressions differ in the term in $xy$."
              },
              {
                "step": "No, the equation is not an identity.",
                "reason": "Identity: an identity is true for all values of its letters, and line 4 gives values at which this equation is false."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $(x - 5y)(x + 9y) = (x + 2y)^2 - 49y^2$ is an identity.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $(x - 5y)(x + 9y) = (x + 2y)^2 - 49y^2$ is an identity.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 5y)(x + 9y) = x^2 + 4xy - 45y^2$",
                  "reason": "Multiplying out and collecting like terms: the left side, for all numbers $x$ and $y$."
                },
                {
                  "step": "$(x + 2y)^2 - 49y^2 = x^2 + 4xy - 45y^2$",
                  "reason": "Multiplying out and collecting like terms: the right side, for all numbers $x$ and $y$."
                },
                {
                  "step": "Both sides equal $x^2 + 4xy - 45y^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2 and 3 give the same expression."
                },
                {
                  "step": "Yes, the equation is an identity.",
                  "reason": "Identity: the equation is true for all numbers $x$ and $y$."
                }
              ]
            },
            {
              "prompt": "Decide whether $(x + 2)(x + 6) - (x + 3)(x + 8) = -3(x - 4)$ is an identity.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $(x + 2)(x + 6) - (x + 3)(x + 8) = -3(x - 4)$ is an identity.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 2)(x + 6) - (x + 3)(x + 8) = -3x - 12$",
                  "reason": "Multiplying out and collecting like terms: the left side, for all numbers $x$."
                },
                {
                  "step": "$-3(x - 4) = -3x + 12$",
                  "reason": "Multiplying out and collecting like terms: the right side, for all numbers $x$."
                },
                {
                  "step": "At $x = 1$ the left side is $-15$ and the right side is $9$.",
                  "reason": "Substituting a value: $x = 1$ in lines 2 and 3, whose expressions differ in the number."
                },
                {
                  "step": "No, the equation is not an identity.",
                  "reason": "Identity: an identity is true for all values of its letters, and line 4 gives values at which this equation is false."
                }
              ]
            },
            {
              "prompt": "Decide whether $x(x - 6y) + y(8x - 48y) = (x - 6y)(x + 8y)$ is an identity.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $x(x - 6y) + y(8x - 48y) = (x - 6y)(x + 8y)$ is an identity.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x(x - 6y) + y(8x - 48y) = x^2 + 2xy - 48y^2$",
                  "reason": "Multiplying out and collecting like terms: the left side, for all numbers $x$ and $y$."
                },
                {
                  "step": "$(x - 6y)(x + 8y) = x^2 + 2xy - 48y^2$",
                  "reason": "Multiplying out and collecting like terms: the right side, for all numbers $x$ and $y$."
                },
                {
                  "step": "Both sides equal $x^2 + 2xy - 48y^2$ for all numbers $x$ and $y$.",
                  "reason": "Transitive property: lines 2 and 3 give the same expression."
                },
                {
                  "step": "Yes, the equation is an identity.",
                  "reason": "Identity: the equation is true for all numbers $x$ and $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t209-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $(x + y)^2 + (y + z)^2 + (z + x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 29$ and $xy + xz + yz = -10$.",
            "lines": [
              {
                "step": "Find the value of $(x + y)^2 + (y + z)^2 + (z + x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 29$ and $xy + xz + yz = -10$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x + y)^2 + (y + z)^2 + (z + x)^2 = x^2 + 2xy + y^2 + y^2 + 2yz + z^2 + z^2 + 2xz + x^2$",
                "reason": "Identity: this step and the next two hold for all numbers $x$, $y$ and $z$. Multiplying out: each square is multiplied out."
              },
              {
                "step": "$x^2 + 2xy + y^2 + y^2 + 2yz + z^2 + z^2 + 2xz + x^2 = 2x^2 + 2y^2 + 2z^2 + 2xy + 2xz + 2yz$",
                "reason": "Collecting like terms: the squares of each letter are added."
              },
              {
                "step": "$2x^2 + 2y^2 + 2z^2 + 2xy + 2xz + 2yz = 2(x^2 + y^2 + z^2) + 2(xy + xz + yz)$",
                "reason": "Taking out a common factor: $2$ from the three squares and $2$ from the three products."
              },
              {
                "step": "The value is $2 \\cdot 29 + 2 \\cdot \\left(-10\\right)$.",
                "reason": "Substitution: the given values are put in place of the two brackets."
              },
              {
                "step": "$2 \\cdot 29 + 2 \\cdot \\left(-10\\right) = 38$",
                "reason": "The multiplication and addition of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $(3x - 7y)^2 + (3y - 7z)^2 + (3z - 7x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 11$ and $xy + xz + yz = 7$.",
              "form": "Answer as an integer.",
              "answer": "344",
              "lines": [
                {
                  "step": "Find the value of $(3x - 7y)^2 + (3y - 7z)^2 + (3z - 7x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 11$ and $xy + xz + yz = 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x - 7y)^2 + (3y - 7z)^2 + (3z - 7x)^2 = 9x^2 - 42xy + 49y^2 + 9y^2 - 42yz + 49z^2 + 9z^2 - 42xz + 49x^2$",
                  "reason": "Identity: this step and the next two hold for all numbers $x$, $y$ and $z$. Multiplying out: each square is multiplied out."
                },
                {
                  "step": "$9x^2 - 42xy + 49y^2 + 9y^2 - 42yz + 49z^2 + 9z^2 - 42xz + 49x^2 = 58x^2 + 58y^2 + 58z^2 - 42xy - 42xz - 42yz$",
                  "reason": "Collecting like terms: the squares of each letter are added."
                },
                {
                  "step": "$58x^2 + 58y^2 + 58z^2 - 42xy - 42xz - 42yz = 58(x^2 + y^2 + z^2) - 42(xy + xz + yz)$",
                  "reason": "Taking out a common factor: $58$ from the three squares and $-42$ from the three products."
                },
                {
                  "step": "The value is $58 \\cdot 11 - 42 \\cdot 7$.",
                  "reason": "Substitution: the given values are put in place of the two brackets."
                },
                {
                  "step": "$58 \\cdot 11 - 42 \\cdot 7 = 344$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the value of $(3x - 4y)^2 + (3y - 4z)^2 + (3z - 4x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 11$ and $xy + xz + yz = -1$.",
              "form": "Answer as an integer.",
              "answer": "299",
              "lines": [
                {
                  "step": "Find the value of $(3x - 4y)^2 + (3y - 4z)^2 + (3z - 4x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 11$ and $xy + xz + yz = -1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x - 4y)^2 + (3y - 4z)^2 + (3z - 4x)^2 = 9x^2 - 24xy + 16y^2 + 9y^2 - 24yz + 16z^2 + 9z^2 - 24xz + 16x^2$",
                  "reason": "Identity: this step and the next two hold for all numbers $x$, $y$ and $z$. Multiplying out: each square is multiplied out."
                },
                {
                  "step": "$9x^2 - 24xy + 16y^2 + 9y^2 - 24yz + 16z^2 + 9z^2 - 24xz + 16x^2 = 25x^2 + 25y^2 + 25z^2 - 24xy - 24xz - 24yz$",
                  "reason": "Collecting like terms: the squares of each letter are added."
                },
                {
                  "step": "$25x^2 + 25y^2 + 25z^2 - 24xy - 24xz - 24yz = 25(x^2 + y^2 + z^2) - 24(xy + xz + yz)$",
                  "reason": "Taking out a common factor: $25$ from the three squares and $-24$ from the three products."
                },
                {
                  "step": "The value is $25 \\cdot 11 - 24 \\cdot \\left(-1\\right)$.",
                  "reason": "Substitution: the given values are put in place of the two brackets."
                },
                {
                  "step": "$25 \\cdot 11 - 24 \\cdot \\left(-1\\right) = 299$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find the value of $(x + 7y)^2 + (y + 7z)^2 + (z + 7x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 14$ and $xy + xz + yz = -5$.",
              "form": "Answer as an integer.",
              "answer": "630",
              "lines": [
                {
                  "step": "Find the value of $(x + 7y)^2 + (y + 7z)^2 + (z + 7x)^2$ for numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 14$ and $xy + xz + yz = -5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 7y)^2 + (y + 7z)^2 + (z + 7x)^2 = x^2 + 14xy + 49y^2 + y^2 + 14yz + 49z^2 + z^2 + 14xz + 49x^2$",
                  "reason": "Identity: this step and the next two hold for all numbers $x$, $y$ and $z$. Multiplying out: each square is multiplied out."
                },
                {
                  "step": "$x^2 + 14xy + 49y^2 + y^2 + 14yz + 49z^2 + z^2 + 14xz + 49x^2 = 50x^2 + 50y^2 + 50z^2 + 14xy + 14xz + 14yz$",
                  "reason": "Collecting like terms: the squares of each letter are added."
                },
                {
                  "step": "$50x^2 + 50y^2 + 50z^2 + 14xy + 14xz + 14yz = 50(x^2 + y^2 + z^2) + 14(xy + xz + yz)$",
                  "reason": "Taking out a common factor: $50$ from the three squares and $14$ from the three products."
                },
                {
                  "step": "The value is $50 \\cdot 14 + 14 \\cdot \\left(-5\\right)$.",
                  "reason": "Substitution: the given values are put in place of the two brackets."
                },
                {
                  "step": "$50 \\cdot 14 + 14 \\cdot \\left(-5\\right) = 630$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $7x - 2y$ for numbers $x$ and $y$ with $2x - 7y = -11$, $x^2 + y^2 = 34$ and $xy = 15$.",
            "lines": [
              {
                "step": "Find the value of $7x - 2y$ for numbers $x$ and $y$ with $2x - 7y = -11$, $x^2 + y^2 = 34$ and $xy = 15$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(2x - 7y)(7x - 2y) = 14x^2 - 4xy - 49xy + 14y^2$",
                "reason": "Identity: the given expression is multiplied by the one asked for, and this step and the next two hold for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other."
              },
              {
                "step": "$14x^2 - 4xy - 49xy + 14y^2 = 14x^2 + 14y^2 - 53xy$",
                "reason": "Collecting like terms: the two terms in $xy$ are added."
              },
              {
                "step": "$14x^2 + 14y^2 - 53xy = 14(x^2 + y^2) - 53xy$",
                "reason": "Taking out a common factor: $14$ from the two squares."
              },
              {
                "step": "$-11(7x - 2y) = 14 \\cdot 34 - 53 \\cdot 15$",
                "reason": "Substitution: the given values are put in place of the first bracket, of $x^2 + y^2$ and of $xy$."
              },
              {
                "step": "$-11(7x - 2y) = -319$",
                "reason": "The multiplication and addition of integers, from arithmetic."
              },
              {
                "step": "$7x - 2y = 29$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-11$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $3x + 2y$ for numbers $x$ and $y$ with $2x + 3y = 15$, $x^2 + y^2 = 37$ and $xy = 6$.",
              "form": "Answer as an integer.",
              "answer": "20",
              "lines": [
                {
                  "step": "Find the value of $3x + 2y$ for numbers $x$ and $y$ with $2x + 3y = 15$, $x^2 + y^2 = 37$ and $xy = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x + 3y)(3x + 2y) = 6x^2 + 4xy + 9xy + 6y^2$",
                  "reason": "Identity: the given expression is multiplied by the one asked for, and this step and the next two hold for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other."
                },
                {
                  "step": "$6x^2 + 4xy + 9xy + 6y^2 = 6x^2 + 6y^2 + 13xy$",
                  "reason": "Collecting like terms: the two terms in $xy$ are added."
                },
                {
                  "step": "$6x^2 + 6y^2 + 13xy = 6(x^2 + y^2) + 13xy$",
                  "reason": "Taking out a common factor: $6$ from the two squares."
                },
                {
                  "step": "$15(3x + 2y) = 6 \\cdot 37 + 13 \\cdot 6$",
                  "reason": "Substitution: the given values are put in place of the first bracket, of $x^2 + y^2$ and of $xy$."
                },
                {
                  "step": "$15(3x + 2y) = 300$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                },
                {
                  "step": "$3x + 2y = 20$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
                }
              ]
            },
            {
              "prompt": "Find the value of $7x - y$ for numbers $x$ and $y$ with $x - 7y = -7$, $x^2 + y^2 = 53$ and $xy = 14$.",
              "form": "Answer as an integer.",
              "answer": "47",
              "lines": [
                {
                  "step": "Find the value of $7x - y$ for numbers $x$ and $y$ with $x - 7y = -7$, $x^2 + y^2 = 53$ and $xy = 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 7y)(7x - y) = 7x^2 - xy - 49xy + 7y^2$",
                  "reason": "Identity: the given expression is multiplied by the one asked for, and this step and the next two hold for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other."
                },
                {
                  "step": "$7x^2 - xy - 49xy + 7y^2 = 7x^2 + 7y^2 - 50xy$",
                  "reason": "Collecting like terms: the two terms in $xy$ are added."
                },
                {
                  "step": "$7x^2 + 7y^2 - 50xy = 7(x^2 + y^2) - 50xy$",
                  "reason": "Taking out a common factor: $7$ from the two squares."
                },
                {
                  "step": "$-7(7x - y) = 7 \\cdot 53 - 50 \\cdot 14$",
                  "reason": "Substitution: the given values are put in place of the first bracket, of $x^2 + y^2$ and of $xy$."
                },
                {
                  "step": "$-7(7x - y) = -329$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                },
                {
                  "step": "$7x - y = 47$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$."
                }
              ]
            },
            {
              "prompt": "Find the value of $5x + 4y$ for numbers $x$ and $y$ with $4x + 5y = 17$, $x^2 + y^2 = 10$ and $xy = 3$.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find the value of $5x + 4y$ for numbers $x$ and $y$ with $4x + 5y = 17$, $x^2 + y^2 = 10$ and $xy = 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x + 5y)(5x + 4y) = 20x^2 + 16xy + 25xy + 20y^2$",
                  "reason": "Identity: the given expression is multiplied by the one asked for, and this step and the next two hold for all numbers $x$ and $y$. Multiplying out: every term of one bracket is multiplied by every term of the other."
                },
                {
                  "step": "$20x^2 + 16xy + 25xy + 20y^2 = 20x^2 + 20y^2 + 41xy$",
                  "reason": "Collecting like terms: the two terms in $xy$ are added."
                },
                {
                  "step": "$20x^2 + 20y^2 + 41xy = 20(x^2 + y^2) + 41xy$",
                  "reason": "Taking out a common factor: $20$ from the two squares."
                },
                {
                  "step": "$17(5x + 4y) = 20 \\cdot 10 + 41 \\cdot 3$",
                  "reason": "Substitution: the given values are put in place of the first bracket, of $x^2 + y^2$ and of $xy$."
                },
                {
                  "step": "$17(5x + 4y) = 323$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                },
                {
                  "step": "$5x + 4y = 19$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $17$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t209-k7",
      "forms": [
        {
          "example": {
            "problem": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 1$, $n = 2$, $n = 3$ and $n = 4$ are $1 \\cdot 4 + 4 \\cdot 7 = 2 \\cdot 4^2$, $2 \\cdot 5 + 5 \\cdot 8 = 2 \\cdot 5^2$, $3 \\cdot 6 + 6 \\cdot 9 = 2 \\cdot 6^2$ and $4 \\cdot 7 + 7 \\cdot 10 = 2 \\cdot 7^2$.",
            "lines": [
              {
                "step": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 1$, $n = 2$, $n = 3$ and $n = 4$ are $1 \\cdot 4 + 4 \\cdot 7 = 2 \\cdot 4^2$, $2 \\cdot 5 + 5 \\cdot 8 = 2 \\cdot 5^2$, $3 \\cdot 6 + 6 \\cdot 9 = 2 \\cdot 6^2$ and $4 \\cdot 7 + 7 \\cdot 10 = 2 \\cdot 7^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In the case $n$, the first factor on the left side is $n$.",
                "reason": "Experiment, find the pattern, prove it: $1$, $2$, $3$ and $4$ are the numbers $n$ of the four cases."
              },
              {
                "step": "In the case $n$, the number squared on the right side is $n + 3$.",
                "reason": "Experiment, find the pattern, prove it: $4$, $5$, $6$ and $7$ are $1 + 3$, $2 + 3$, $3 + 3$ and $4 + 3$."
              },
              {
                "step": "In the case $n$, the last factor on the left side is $n + 6$.",
                "reason": "Experiment, find the pattern, prove it: $7$, $8$, $9$ and $10$ are $1 + 6$, $2 + 6$, $3 + 6$ and $4 + 6$."
              },
              {
                "step": "The identity is $n(n + 3) + (n + 3)(n + 6) = 2(n + 3)^2$.",
                "reason": "Identity: the three patterns are put into the equation in place of the numbers; it is still to be proved for all numbers $n$."
              },
              {
                "step": "$n(n + 3) + (n + 3)(n + 6) = 2n^2 + 12n + 18$",
                "reason": "Multiplying out and collecting like terms: the left side."
              },
              {
                "step": "$2(n + 3)^2 = 2n^2 + 12n + 18$",
                "reason": "Multiplying out and collecting like terms: the right side."
              },
              {
                "step": "Both sides equal $2n^2 + 12n + 18$, so $n(n + 3) + (n + 3)(n + 6) = 2(n + 3)^2$ for all numbers $n$.",
                "reason": "Transitive property: lines 6 and 7 give the same expression. Identity: each step holds for all numbers $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 7$, $n = 8$, $n = 9$ and $n = 10$ are $13^2 + 84^2 = 85^2$, $28^2 + 96^2 = 100^2$, $45^2 + 108^2 = 117^2$ and $64^2 + 120^2 = 136^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "n^4+72*n^2+1296",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 7$, $n = 8$, $n = 9$ and $n = 10$ are $13^2 + 84^2 = 85^2$, $28^2 + 96^2 = 100^2$, $45^2 + 108^2 = 117^2$ and $64^2 + 120^2 = 136^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the case $n$, the first number squared is $n^2 - 36$.",
                  "reason": "Experiment, find the pattern, prove it: $13$, $28$, $45$ and $64$ are $7^2 - 36$, $8^2 - 36$, $9^2 - 36$ and $10^2 - 36$."
                },
                {
                  "step": "In the case $n$, the second number squared is $12n$.",
                  "reason": "Experiment, find the pattern, prove it: $84$, $96$, $108$ and $120$ are $12 \\cdot 7$, $12 \\cdot 8$, $12 \\cdot 9$ and $12 \\cdot 10$."
                },
                {
                  "step": "In the case $n$, the number squared on the right side is $n^2 + 36$.",
                  "reason": "Experiment, find the pattern, prove it: $85$, $100$, $117$ and $136$ are $7^2 + 36$, $8^2 + 36$, $9^2 + 36$ and $10^2 + 36$."
                },
                {
                  "step": "The identity is $(n^2 - 36)^2 + (12n)^2 = (n^2 + 36)^2$.",
                  "reason": "Identity: the three patterns are put into the equation in place of the numbers; it is still to be proved for all numbers $n$."
                },
                {
                  "step": "$(n^2 - 36)^2 + (12n)^2 = n^4 + 72n^2 + 1296$",
                  "reason": "Multiplying out and collecting like terms: the left side."
                },
                {
                  "step": "$(n^2 + 36)^2 = n^4 + 72n^2 + 1296$",
                  "reason": "Multiplying out and collecting like terms: the right side."
                },
                {
                  "step": "Both sides equal $n^4 + 72n^2 + 1296$, so $(n^2 - 36)^2 + (12n)^2 = (n^2 + 36)^2$ for all numbers $n$.",
                  "reason": "Transitive property: lines 6 and 7 give the same expression. Identity: each step holds for all numbers $n$."
                }
              ]
            },
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 6$, $n = 7$, $n = 8$ and $n = 9$ are $11^2 + 60^2 = 61^2$, $24^2 + 70^2 = 74^2$, $39^2 + 80^2 = 89^2$ and $56^2 + 90^2 = 106^2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "n^4+50*n^2+625",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 6$, $n = 7$, $n = 8$ and $n = 9$ are $11^2 + 60^2 = 61^2$, $24^2 + 70^2 = 74^2$, $39^2 + 80^2 = 89^2$ and $56^2 + 90^2 = 106^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the case $n$, the first number squared is $n^2 - 25$.",
                  "reason": "Experiment, find the pattern, prove it: $11$, $24$, $39$ and $56$ are $6^2 - 25$, $7^2 - 25$, $8^2 - 25$ and $9^2 - 25$."
                },
                {
                  "step": "In the case $n$, the second number squared is $10n$.",
                  "reason": "Experiment, find the pattern, prove it: $60$, $70$, $80$ and $90$ are $10 \\cdot 6$, $10 \\cdot 7$, $10 \\cdot 8$ and $10 \\cdot 9$."
                },
                {
                  "step": "In the case $n$, the number squared on the right side is $n^2 + 25$.",
                  "reason": "Experiment, find the pattern, prove it: $61$, $74$, $89$ and $106$ are $6^2 + 25$, $7^2 + 25$, $8^2 + 25$ and $9^2 + 25$."
                },
                {
                  "step": "The identity is $(n^2 - 25)^2 + (10n)^2 = (n^2 + 25)^2$.",
                  "reason": "Identity: the three patterns are put into the equation in place of the numbers; it is still to be proved for all numbers $n$."
                },
                {
                  "step": "$(n^2 - 25)^2 + (10n)^2 = n^4 + 50n^2 + 625$",
                  "reason": "Multiplying out and collecting like terms: the left side."
                },
                {
                  "step": "$(n^2 + 25)^2 = n^4 + 50n^2 + 625$",
                  "reason": "Multiplying out and collecting like terms: the right side."
                },
                {
                  "step": "Both sides equal $n^4 + 50n^2 + 625$, so $(n^2 - 25)^2 + (10n)^2 = (n^2 + 25)^2$ for all numbers $n$.",
                  "reason": "Transitive property: lines 6 and 7 give the same expression. Identity: each step holds for all numbers $n$."
                }
              ]
            },
            {
              "prompt": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 3$, $n = 4$, $n = 5$ and $n = 6$ are $5^2 + 1^2 = 2 \\cdot 13$, $6^2 + 2^2 = 2 \\cdot 20$, $7^2 + 3^2 = 2 \\cdot 29$ and $8^2 + 4^2 = 2 \\cdot 40$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "2*n^2+8",
              "lines": [
                {
                  "step": "Find the expression, multiplied out with like terms collected, that both sides of the identity in $n$ equal, whose cases $n = 3$, $n = 4$, $n = 5$ and $n = 6$ are $5^2 + 1^2 = 2 \\cdot 13$, $6^2 + 2^2 = 2 \\cdot 20$, $7^2 + 3^2 = 2 \\cdot 29$ and $8^2 + 4^2 = 2 \\cdot 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In the case $n$, the first number squared is $n + 2$.",
                  "reason": "Experiment, find the pattern, prove it: $5$, $6$, $7$ and $8$ are $3 + 2$, $4 + 2$, $5 + 2$ and $6 + 2$."
                },
                {
                  "step": "In the case $n$, the second number squared is $n - 2$.",
                  "reason": "Experiment, find the pattern, prove it: $1$, $2$, $3$ and $4$ are $3 - 2$, $4 - 2$, $5 - 2$ and $6 - 2$."
                },
                {
                  "step": "In the case $n$, the number doubled on the right side is $n^2 + 4$.",
                  "reason": "Experiment, find the pattern, prove it: $13$, $20$, $29$ and $40$ are $3^2 + 4$, $4^2 + 4$, $5^2 + 4$ and $6^2 + 4$."
                },
                {
                  "step": "The identity is $(n + 2)^2 + (n - 2)^2 = 2(n^2 + 4)$.",
                  "reason": "Identity: the three patterns are put into the equation in place of the numbers; it is still to be proved for all numbers $n$."
                },
                {
                  "step": "$(n + 2)^2 + (n - 2)^2 = 2n^2 + 8$",
                  "reason": "Multiplying out and collecting like terms: the left side."
                },
                {
                  "step": "$2(n^2 + 4) = 2n^2 + 8$",
                  "reason": "Multiplying out and collecting like terms: the right side."
                },
                {
                  "step": "Both sides equal $2n^2 + 8$, so $(n + 2)^2 + (n - 2)^2 = 2(n^2 + 4)$ for all numbers $n$.",
                  "reason": "Transitive property: lines 6 and 7 give the same expression. Identity: each step holds for all numbers $n$."
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
      "id": "t209-p1",
      "method": "direct proof",
      "statement": "Sum of three cubes identity: for all numbers $a$, $b$ and $c$, $(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc$.",
      "idea": "Each term of the first bracket is multiplied into the second bracket in a line of its own. Every term with two different letters, such as $ab^2$, then appears once with a plus sign and once with a minus sign, and $-abc$ appears three times.",
      "lines": [
        {
          "line": "$(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a(a^2 + b^2 + c^2 - ab - bc - ca) + b(a^2 + b^2 + c^2 - ab - bc - ca) + c(a^2 + b^2 + c^2 - ab - bc - ca)$",
          "reason": "The distributive law: each term of the first bracket multiplies the second bracket."
        },
        {
          "line": "$a(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + ab^2 + ac^2 - a^2b - abc - a^2c$",
          "reason": "Multiplying out: the letter $a$ multiplies each term of the bracket."
        },
        {
          "line": "$b(a^2 + b^2 + c^2 - ab - bc - ca) = a^2b + b^3 + bc^2 - ab^2 - b^2c - abc$",
          "reason": "Multiplying out: the letter $b$ multiplies each term of the bracket."
        },
        {
          "line": "$c(a^2 + b^2 + c^2 - ab - bc - ca) = a^2c + b^2c + c^3 - abc - bc^2 - ac^2$",
          "reason": "Multiplying out: the letter $c$ multiplies each term of the bracket."
        },
        {
          "line": "The sum of the right sides of lines 2, 3 and 4 is $a^3 + b^3 + c^3 - 3abc$.",
          "reason": "Collecting like terms: each of $ab^2$, $ac^2$, $a^2b$, $a^2c$, $bc^2$ and $b^2c$ appears once with each sign, and $-abc$ appears three times."
        },
        {
          "line": "Therefore $(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) = a^3 + b^3 + c^3 - 3abc$ for all numbers $a$, $b$ and $c$.",
          "reason": "Substitution: the right sides of lines 2, 3 and 4 are put into line 1, and line 5 gives their sum. Each line holds for all numbers $a$, $b$ and $c$."
        }
      ]
    },
    {
      "id": "t209-p2",
      "method": "direct proof",
      "statement": "Two-squares identity: for all numbers $a$, $b$, $c$ and $d$, $(a^2 + b^2)(c^2 + d^2) = (ac + bd)^2 + (ad - bc)^2$.",
      "idea": "Each side is multiplied out alone. The two squares on the right side give the terms $2abcd$ and $-2abcd$, which cancel, and the four terms left are the four products of the left side.",
      "lines": [
        {
          "line": "$(a^2 + b^2)(c^2 + d^2) = a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$",
          "reason": "Every term of one bracket times every term of the other."
        },
        {
          "line": "$(ac + bd)^2 = a^2c^2 + 2abcd + b^2d^2$",
          "reason": "Square of a binomial, with the power of a product for the squares of $ac$ and $bd$."
        },
        {
          "line": "$(ad - bc)^2 = a^2d^2 - 2abcd + b^2c^2$",
          "reason": "Square of a binomial, with the power of a product for the squares of $ad$ and $bc$."
        },
        {
          "line": "So $(ac + bd)^2 + (ad - bc)^2 = a^2c^2 + a^2d^2 + b^2c^2 + b^2d^2$.",
          "reason": "Collecting like terms: lines 2 and 3 are added, and the terms $2abcd$ and $-2abcd$ cancel."
        },
        {
          "line": "Therefore $(a^2 + b^2)(c^2 + d^2) = (ac + bd)^2 + (ad - bc)^2$ for all numbers $a$, $b$, $c$ and $d$.",
          "reason": "Transitive property: lines 1 and 4 have the same right side. Each line holds for all numbers $a$, $b$, $c$ and $d$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t209-s1",
      "method": "direct proof",
      "statement": "Prove that $(a^2 + nb^2)(c^2 + nd^2) = (ac - nbd)^2 + n(ad + bc)^2$ for all numbers $a$, $b$, $c$ and $d$ and every whole number $n$. Facts it may use: Identity, every term of one bracket times every term of the other, square of a binomial, power of a product, multiplying out, collecting like terms, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "$(a^2 + nb^2)(c^2 + nd^2) = a^2c^2 + na^2d^2 + nb^2c^2 + n^2b^2d^2$",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "$(ac - nbd)^2 = a^2c^2 - 2nabcd + n^2b^2d^2$",
            "reason": "Square of a binomial, with the power of a product for the squares of $ac$ and $nbd$."
          },
          {
            "line": "$(ad + bc)^2 = a^2d^2 + 2abcd + b^2c^2$",
            "reason": "Square of a binomial, with the power of a product for the squares of $ad$ and $bc$."
          },
          {
            "line": "So $n(ad + bc)^2 = na^2d^2 + 2nabcd + nb^2c^2$.",
            "reason": "Multiplying out: the number $n$ multiplies each term of line 3."
          },
          {
            "line": "So $(ac - nbd)^2 + n(ad + bc)^2 = a^2c^2 + na^2d^2 + nb^2c^2 + n^2b^2d^2$.",
            "reason": "Collecting like terms: lines 2 and 4 are added, and the terms $-2nabcd$ and $2nabcd$ cancel."
          },
          {
            "line": "Therefore $(a^2 + nb^2)(c^2 + nd^2) = (ac - nbd)^2 + n(ad + bc)^2$ for all numbers $a$, $b$, $c$ and $d$ and every whole number $n$.",
            "reason": "Transitive property: lines 1 and 5 have the same right side. Identity: each line holds for all numbers $a$, $b$, $c$ and $d$ and every whole number $n$."
          }
        ]
      }
    },
    {
      "id": "t209-s2",
      "method": "direct proof",
      "statement": "Prove that $a^3 + b^3 + c^3 - 3abc = \\dfrac{1}{2}(a + b + c)\\left((a - b)^2 + (b - c)^2 + (c - a)^2\\right)$ for all numbers $a$, $b$ and $c$. Facts it may use: Sum of three cubes identity, square of a binomial, collecting like terms, multiplying both sides by the same number, the symmetric property, substitution.",
      "check": {
        "proof": [
          {
            "line": "$(a - b)^2 + (b - c)^2 + (c - a)^2 = a^2 - 2ab + b^2 + b^2 - 2bc + c^2 + c^2 - 2ca + a^2$",
            "reason": "Square of a binomial, once for each of the three squares."
          },
          {
            "line": "So $(a - b)^2 + (b - c)^2 + (c - a)^2 = 2a^2 + 2b^2 + 2c^2 - 2ab - 2bc - 2ca$.",
            "reason": "Collecting like terms: each of $a^2$, $b^2$ and $c^2$ appears twice."
          },
          {
            "line": "So $\\dfrac{1}{2}\\left((a - b)^2 + (b - c)^2 + (c - a)^2\\right) = a^2 + b^2 + c^2 - ab - bc - ca$.",
            "reason": "Multiplying both sides by the same number: both sides of line 2 are multiplied by $\\dfrac{1}{2}$."
          },
          {
            "line": "Also $a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$.",
            "reason": "Sum of three cubes identity, with the symmetric property: its two sides change places."
          },
          {
            "line": "Therefore $a^3 + b^3 + c^3 - 3abc = \\dfrac{1}{2}(a + b + c)\\left((a - b)^2 + (b - c)^2 + (c - a)^2\\right)$ for all numbers $a$, $b$ and $c$.",
            "reason": "Substitution: the left side of line 3 is put for the second bracket of line 4. Each line holds for all numbers $a$, $b$ and $c$."
          }
        ]
      }
    },
    {
      "id": "t209-s3",
      "method": "proof of existence by construction",
      "statement": "Prove that if each of the whole numbers $m$ and $n$ is a sum of two squares of integers, then $mn$ is a sum of two squares of integers. Facts it may use: Two-squares identity, substitution, and from arithmetic that sums, differences and products of integers are integers.",
      "check": {
        "proof": [
          {
            "line": "There are integers $a$ and $b$ with $m = a^2 + b^2$, and integers $c$ and $d$ with $n = c^2 + d^2$.",
            "reason": "The hypothesis: each of $m$ and $n$ is a sum of two squares of integers."
          },
          {
            "line": "So $mn = (a^2 + b^2)(c^2 + d^2)$.",
            "reason": "Substitution: the two sums of line 1 are put for $m$ and $n$."
          },
          {
            "line": "So $mn = (ac + bd)^2 + (ad - bc)^2$.",
            "reason": "Two-squares identity: it gives the right side of line 2 as a sum of two squares."
          },
          {
            "line": "The numbers $ac + bd$ and $ad - bc$ are integers.",
            "reason": "The multiplication and addition of integers, from arithmetic: sums, differences and products of integers are integers."
          },
          {
            "line": "Therefore $mn$ is a sum of two squares of integers.",
            "reason": "Lines 3 and 4 together: line 3 writes $mn$ as the sum of the squares of the two integers of line 4."
          }
        ]
      }
    }
  ]
}
