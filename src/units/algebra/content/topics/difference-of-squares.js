export default {
  "number": 138,
  "title": "Difference of squares",
  "section": 7,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "332-338, 352-356"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Factor $18x^4 - 8x^2$ completely.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "2*x^2*(3*x-2)*(3*x+2)",
    "solution": [
      "Factor $18x^4 - 8x^2$ completely.",
      "$18x^4 - 8x^2 = 2x^2(9x^2 - 4)$",
      "$2x^2(9x^2 - 4) = 2x^2\\left((3x)^2 - 2^2\\right)$",
      "$2x^2\\left((3x)^2 - 2^2\\right) = 2x^2(3x - 2)(3x + 2)$"
    ]
  },
  "ideas": [
    {
      "name": "Difference of squares",
      "concrete": "The product $(x - 12)(x + 12)$ is $x^2 + 12x - 12x - 144$: the two middle products cancel, so $(x - 12)(x + 12) = x^2 - 144$, and read from right to left, $x^2 - 144 = (x - 12)(x + 12)$.",
      "general": "For all numbers $a$ and $b$, $a^2 - b^2 = (a - b)(a + b)$: a **difference of squares** is the difference of the two numbers times their sum."
    },
    {
      "name": "Consecutive squares differ by $2n + 1$",
      "concrete": "Taking $82^2$ from $83^2$ gives $83^2 - 82^2 = 6889 - 6724 = 165$, and $165 = 82 + 83$: the gap between two consecutive squares is the sum of the two numbers squared.",
      "general": "For every whole number $n$, $(n + 1)^2 - n^2 = 2n + 1$."
    },
    {
      "name": "Factor pairs of the constant",
      "concrete": "For whole numbers $m$ and $n$ with $m^2 - n^2 = 112$, the product $(m - n)(m + n)$ is $112$, so $m - n$ and $m + n$ are one of the pairs $1 \\cdot 112$, $2 \\cdot 56$, $4 \\cdot 28$, $7 \\cdot 16$, $8 \\cdot 14$. Only $2 \\cdot 56$, $4 \\cdot 28$, $8 \\cdot 14$ hold two numbers of the same parity, and each gives one pair $(m, n)$.",
      "general": "A **Diophantine equation** is an equation for which only whole-number solutions are sought. When one side is a product of whole numbers and the other side is a constant, the factors are one of the **factor pairs of the constant**, and each pair gives a small system to solve."
    },
    {
      "name": "Adding and subtracting a square",
      "concrete": "The sum $x^4 + 64$ is not a difference, but $(x^2 + 8)^2 = x^4 + 16x^2 + 64$, so $x^4 + 64 = (x^2 + 8)^2 - 16x^2 = (x^2 + 8)^2 - (4x)^2 = (x^2 - 4x + 8)(x^2 + 4x + 8)$.",
      "general": "For numbers $a$ and $b$, a sum $a^2 + b^2$ in which $2ab$ is the square of $c$ is $(a + b)^2 - c^2$, so $a^2 + b^2 = (a + b - c)(a + b + c)$: **adding and subtracting a square** makes the sum a difference of squares."
    }
  ],
  "kinds": [
    {
      "id": "t138-k1",
      "forms": [
        {
          "example": {
            "problem": "Factor $9 - 64z^2$.",
            "lines": [
              {
                "step": "Factor $9 - 64z^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$9 - 64z^2 = 3^2 - (8z)^2$",
                "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $9 = 3^2$ and $64z^2 = (8z)^2$."
              },
              {
                "step": "$3^2 - (8z)^2 = (3 - 8z)(3 + 8z)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 3$ and $b = 8z$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $49x^2 - 16y^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(7*x-4*y)*(7*x+4*y)",
              "lines": [
                {
                  "step": "Factor $49x^2 - 16y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$49x^2 - 16y^2 = (7x)^2 - (4y)^2$",
                  "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $49x^2 = (7x)^2$ and $16y^2 = (4y)^2$."
                },
                {
                  "step": "$(7x)^2 - (4y)^2 = (7x - 4y)(7x + 4y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 7x$ and $b = 4y$."
                }
              ]
            },
            {
              "prompt": "Factor $121z^2 - 36$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(11*z-6)*(11*z+6)",
              "lines": [
                {
                  "step": "Factor $121z^2 - 36$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$121z^2 - 36 = (11z)^2 - 6^2$",
                  "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $121z^2 = (11z)^2$ and $36 = 6^2$."
                },
                {
                  "step": "$(11z)^2 - 6^2 = (11z - 6)(11z + 6)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 11z$ and $b = 6$."
                }
              ]
            },
            {
              "prompt": "Factor $36x^2 - 169$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(6*x-13)*(6*x+13)",
              "lines": [
                {
                  "step": "Factor $36x^2 - 169$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$36x^2 - 169 = (6x)^2 - 13^2$",
                  "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $36x^2 = (6x)^2$ and $169 = 13^2$."
                },
                {
                  "step": "$(6x)^2 - 13^2 = (6x - 13)(6x + 13)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 6x$ and $b = 13$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $75x^2 - 48$ completely.",
            "lines": [
              {
                "step": "Factor $75x^2 - 48$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$75x^2 - 48 = 3(25x^2 - 16)$",
                "reason": "Factoring by the distributive law, read from right to left: $3$ is the highest common factor of the two terms, and the bracket left is a difference of two squares."
              },
              {
                "step": "$3(25x^2 - 16) = 3\\left((5x)^2 - 4^2\\right)$",
                "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $25x^2 = (5x)^2$ and $16 = 4^2$."
              },
              {
                "step": "$3\\left((5x)^2 - 4^2\\right) = 3(5x - 4)(5x + 4)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, used on the bracket, with $a = 5x$ and $b = 4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $100 - 144x^2$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "4*(5-6*x)*(5+6*x)",
              "lines": [
                {
                  "step": "Factor $100 - 144x^2$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$100 - 144x^2 = 4(25 - 36x^2)$",
                  "reason": "Factoring by the distributive law, read from right to left: $4$ is the highest common factor of the two terms, and the bracket left is a difference of two squares."
                },
                {
                  "step": "$4(25 - 36x^2) = 4\\left(5^2 - (6x)^2\\right)$",
                  "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $25 = 5^2$ and $36x^2 = (6x)^2$."
                },
                {
                  "step": "$4\\left(5^2 - (6x)^2\\right) = 4(5 - 6x)(5 + 6x)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, used on the bracket, with $a = 5$ and $b = 6x$."
                }
              ]
            },
            {
              "prompt": "Factor $45x^2 - 125$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "5*(3*x-5)*(3*x+5)",
              "lines": [
                {
                  "step": "Factor $45x^2 - 125$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$45x^2 - 125 = 5(9x^2 - 25)$",
                  "reason": "Factoring by the distributive law, read from right to left: $5$ is the highest common factor of the two terms, and the bracket left is a difference of two squares."
                },
                {
                  "step": "$5(9x^2 - 25) = 5\\left((3x)^2 - 5^2\\right)$",
                  "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $9x^2 = (3x)^2$ and $25 = 5^2$."
                },
                {
                  "step": "$5\\left((3x)^2 - 5^2\\right) = 5(3x - 5)(3x + 5)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, used on the bracket, with $a = 3x$ and $b = 5$."
                }
              ]
            },
            {
              "prompt": "Factor $343x^3 - 175x$ completely.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "7*x*(7*x-5)*(7*x+5)",
              "lines": [
                {
                  "step": "Factor $343x^3 - 175x$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$343x^3 - 175x = 7x(49x^2 - 25)$",
                  "reason": "Factoring by the distributive law, read from right to left: $7x$ is the highest common factor of the two terms, and the bracket left is a difference of two squares."
                },
                {
                  "step": "$7x(49x^2 - 25) = 7x\\left((7x)^2 - 5^2\\right)$",
                  "reason": "The definition of a power, from arithmetic, and power of a product write each term as a square: $49x^2 = (7x)^2$ and $25 = 5^2$."
                },
                {
                  "step": "$7x\\left((7x)^2 - 5^2\\right) = 7x(7x - 5)(7x + 5)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, used on the bracket, with $a = 7x$ and $b = 5$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $81x^4 - 625y^4$ completely.",
            "lines": [
              {
                "step": "Factor $81x^4 - 625y^4$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$81x^4 - 625y^4 = (9x^2)^2 - (25y^2)^2$",
                "reason": "Power of a product and the power law write each term as a square: $81x^4 = (9x^2)^2$ and $625y^4 = (25y^2)^2$."
              },
              {
                "step": "$(9x^2)^2 - (25y^2)^2 = (9x^2 - 25y^2)(9x^2 + 25y^2)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 9x^2$ and $b = 25y^2$."
              },
              {
                "step": "$9x^2 - 25y^2 = (3x - 5y)(3x + 5y)$",
                "reason": "Difference of squares again, on the first bracket: $9x^2 = (3x)^2$ and $25y^2 = (5y)^2$, so $a = 3x$ and $b = 5y$."
              },
              {
                "step": "$81x^4 - 625y^4 = (3x - 5y)(3x + 5y)(9x^2 + 25y^2)$",
                "reason": "Line 3, with the first bracket replaced by the product equal to it in line 4. The bracket $9x^2 + 25y^2$ is a sum of two squares, not a difference, so the difference of squares does not split it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $16x^4 - 2401$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*x-7)*(2*x+7)*(4*x^2+49)",
              "lines": [
                {
                  "step": "Factor $16x^4 - 2401$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16x^4 - 2401 = (4x^2)^2 - 49^2$",
                  "reason": "Power of a product and the power law write each term as a square: $16x^4 = (4x^2)^2$ and $2401 = 49^2$."
                },
                {
                  "step": "$(4x^2)^2 - 49^2 = (4x^2 - 49)(4x^2 + 49)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 4x^2$ and $b = 49$."
                },
                {
                  "step": "$4x^2 - 49 = (2x - 7)(2x + 7)$",
                  "reason": "Difference of squares again, on the first bracket: $4x^2 = (2x)^2$ and $49 = 7^2$, so $a = 2x$ and $b = 7$."
                },
                {
                  "step": "$16x^4 - 2401 = (2x - 7)(2x + 7)(4x^2 + 49)$",
                  "reason": "Line 3, with the first bracket replaced by the product equal to it in line 4. The bracket $4x^2 + 49$ is a sum of two squares, not a difference, so the difference of squares does not split it."
                }
              ]
            },
            {
              "prompt": "Factor $256x^4 - 6561$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(4*x-9)*(4*x+9)*(16*x^2+81)",
              "lines": [
                {
                  "step": "Factor $256x^4 - 6561$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$256x^4 - 6561 = (16x^2)^2 - 81^2$",
                  "reason": "Power of a product and the power law write each term as a square: $256x^4 = (16x^2)^2$ and $6561 = 81^2$."
                },
                {
                  "step": "$(16x^2)^2 - 81^2 = (16x^2 - 81)(16x^2 + 81)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 16x^2$ and $b = 81$."
                },
                {
                  "step": "$16x^2 - 81 = (4x - 9)(4x + 9)$",
                  "reason": "Difference of squares again, on the first bracket: $16x^2 = (4x)^2$ and $81 = 9^2$, so $a = 4x$ and $b = 9$."
                },
                {
                  "step": "$256x^4 - 6561 = (4x - 9)(4x + 9)(16x^2 + 81)$",
                  "reason": "Line 3, with the first bracket replaced by the product equal to it in line 4. The bracket $16x^2 + 81$ is a sum of two squares, not a difference, so the difference of squares does not split it."
                }
              ]
            },
            {
              "prompt": "Factor $10\\,000x^4 - 14\\,641y^4$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(10*x-11*y)*(10*x+11*y)*(100*x^2+121*y^2)",
              "lines": [
                {
                  "step": "Factor $10\\,000x^4 - 14\\,641y^4$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10\\,000x^4 - 14\\,641y^4 = (100x^2)^2 - (121y^2)^2$",
                  "reason": "Power of a product and the power law write each term as a square: $10\\,000x^4 = (100x^2)^2$ and $14\\,641y^4 = (121y^2)^2$."
                },
                {
                  "step": "$(100x^2)^2 - (121y^2)^2 = (100x^2 - 121y^2)(100x^2 + 121y^2)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 100x^2$ and $b = 121y^2$."
                },
                {
                  "step": "$100x^2 - 121y^2 = (10x - 11y)(10x + 11y)$",
                  "reason": "Difference of squares again, on the first bracket: $100x^2 = (10x)^2$ and $121y^2 = (11y)^2$, so $a = 10x$ and $b = 11y$."
                },
                {
                  "step": "$10\\,000x^4 - 14\\,641y^4 = (10x - 11y)(10x + 11y)(100x^2 + 121y^2)$",
                  "reason": "Line 3, with the first bracket replaced by the product equal to it in line 4. The bracket $100x^2 + 121y^2$ is a sum of two squares, not a difference, so the difference of squares does not split it."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $(x - 9)^2 - 4y^2$.",
            "lines": [
              {
                "step": "Factor $(x - 9)^2 - 4y^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 9)^2 - 4y^2 = (x - 9)^2 - (2y)^2$",
                "reason": "Power of a product: $4y^2 = (2y)^2$, so both terms are squares."
              },
              {
                "step": "$(x - 9)^2 - (2y)^2 = \\left((x - 9) - 2y\\right)\\left((x - 9) + 2y\\right)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with the bracket $a = x - 9$ and $b = 2y$."
              },
              {
                "step": "$\\left((x - 9) - 2y\\right)\\left((x - 9) + 2y\\right) = (x - 9 - 2y)(x - 9 + 2y)$",
                "reason": "The associative law of addition, from arithmetic: the bracket $x - 9$ is added or has $2y$ added to it or taken from it, so its brackets can go."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $(x - 4)^2 - 144y^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x-4-12*y)*(x-4+12*y)",
              "lines": [
                {
                  "step": "Factor $(x - 4)^2 - 144y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 4)^2 - 144y^2 = (x - 4)^2 - (12y)^2$",
                  "reason": "Power of a product: $144y^2 = (12y)^2$, so both terms are squares."
                },
                {
                  "step": "$(x - 4)^2 - (12y)^2 = \\left((x - 4) - 12y\\right)\\left((x - 4) + 12y\\right)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with the bracket $a = x - 4$ and $b = 12y$."
                },
                {
                  "step": "$\\left((x - 4) - 12y\\right)\\left((x - 4) + 12y\\right) = (x - 4 - 12y)(x - 4 + 12y)$",
                  "reason": "The associative law of addition, from arithmetic: the bracket $x - 4$ is added or has $12y$ added to it or taken from it, so its brackets can go."
                }
              ]
            },
            {
              "prompt": "Factor $(y - 3)^2 - 49z^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(y-3-7*z)*(y-3+7*z)",
              "lines": [
                {
                  "step": "Factor $(y - 3)^2 - 49z^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(y - 3)^2 - 49z^2 = (y - 3)^2 - (7z)^2$",
                  "reason": "Power of a product: $49z^2 = (7z)^2$, so both terms are squares."
                },
                {
                  "step": "$(y - 3)^2 - (7z)^2 = \\left((y - 3) - 7z\\right)\\left((y - 3) + 7z\\right)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with the bracket $a = y - 3$ and $b = 7z$."
                },
                {
                  "step": "$\\left((y - 3) - 7z\\right)\\left((y - 3) + 7z\\right) = (y - 3 - 7z)(y - 3 + 7z)$",
                  "reason": "The associative law of addition, from arithmetic: the bracket $y - 3$ is added or has $7z$ added to it or taken from it, so its brackets can go."
                }
              ]
            },
            {
              "prompt": "Factor $(x + 8)^2 - 81y^2$.",
              "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
              "answer": "(x+8-9*y)*(x+8+9*y)",
              "lines": [
                {
                  "step": "Factor $(x + 8)^2 - 81y^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x + 8)^2 - 81y^2 = (x + 8)^2 - (9y)^2$",
                  "reason": "Power of a product: $81y^2 = (9y)^2$, so both terms are squares."
                },
                {
                  "step": "$(x + 8)^2 - (9y)^2 = \\left((x + 8) - 9y\\right)\\left((x + 8) + 9y\\right)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with the bracket $a = x + 8$ and $b = 9y$."
                },
                {
                  "step": "$\\left((x + 8) - 9y\\right)\\left((x + 8) + 9y\\right) = (x + 8 - 9y)(x + 8 + 9y)$",
                  "reason": "The associative law of addition, from arithmetic: the bracket $x + 8$ is added or has $9y$ added to it or taken from it, so its brackets can go."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k2",
      "forms": [
        {
          "example": {
            "problem": "Factor $x^4 - 70x^2 + 9$ into two brackets.",
            "lines": [
              {
                "step": "Factor $x^4 - 70x^2 + 9$ into two brackets.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x^2 - 3)^2 = x^4 - 6x^2 + 9$",
                "reason": "Square of a binomial, with $a = x^2$ and $b = -3$, and power of a product for each square."
              },
              {
                "step": "$x^4 - 70x^2 + 9 = (x^2 - 3)^2 - 64x^2$",
                "reason": "Adding and subtracting a square: $x^4 - 70x^2 + 9$ is the square of line 2 with $64x^2$ taken away, since $-6 - 64 = -70$, and $64x^2 = (8x)^2$ is a square."
              },
              {
                "step": "$(x^2 - 3)^2 - 64x^2 = (x^2 - 3 - 8x)(x^2 - 3 + 8x)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2 - 3$ and $b = 8x$."
              },
              {
                "step": "$(x^2 - 3 - 8x)(x^2 - 3 + 8x) = (x^2 - 8x - 3)(x^2 + 8x - 3)$",
                "reason": "The commutative law of addition puts the terms of each bracket in descending order of powers of $x$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $9x^4 - x^2y^2 + 64y^4$ into two brackets.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(3*x^2-7*x*y+8*y^2)*(3*x^2+7*x*y+8*y^2)",
              "lines": [
                {
                  "step": "Factor $9x^4 - x^2y^2 + 64y^4$ into two brackets.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x^2 + 8y^2)^2 = 9x^4 + 48x^2y^2 + 64y^4$",
                  "reason": "Square of a binomial, with $a = 3x^2$ and $b = 8y^2$, and power of a product for each square."
                },
                {
                  "step": "$9x^4 - x^2y^2 + 64y^4 = (3x^2 + 8y^2)^2 - 49x^2y^2$",
                  "reason": "Adding and subtracting a square: $9x^4 - x^2y^2 + 64y^4$ is the square of line 2 with $49x^2y^2$ taken away, since $48 - 49 = -1$, and $49x^2y^2 = (7xy)^2$ is a square."
                },
                {
                  "step": "$(3x^2 + 8y^2)^2 - 49x^2y^2 = (3x^2 + 8y^2 - 7xy)(3x^2 + 8y^2 + 7xy)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 3x^2 + 8y^2$ and $b = 7xy$."
                },
                {
                  "step": "$(3x^2 + 8y^2 - 7xy)(3x^2 + 8y^2 + 7xy) = (3x^2 - 7xy + 8y^2)(3x^2 + 7xy + 8y^2)$",
                  "reason": "The commutative law of addition puts the terms of each bracket in descending order of powers of $x$."
                }
              ]
            },
            {
              "prompt": "Factor $16x^4 - 33x^2y^2 + 16y^4$ into two brackets.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(4*x^2-x*y-4*y^2)*(4*x^2+x*y-4*y^2)",
              "lines": [
                {
                  "step": "Factor $16x^4 - 33x^2y^2 + 16y^4$ into two brackets.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x^2 - 4y^2)^2 = 16x^4 - 32x^2y^2 + 16y^4$",
                  "reason": "Square of a binomial, with $a = 4x^2$ and $b = -4y^2$, and power of a product for each square."
                },
                {
                  "step": "$16x^4 - 33x^2y^2 + 16y^4 = (4x^2 - 4y^2)^2 - x^2y^2$",
                  "reason": "Adding and subtracting a square: $16x^4 - 33x^2y^2 + 16y^4$ is the square of line 2 with $x^2y^2$ taken away, since $-32 - 1 = -33$, and $x^2y^2 = (xy)^2$ is a square."
                },
                {
                  "step": "$(4x^2 - 4y^2)^2 - x^2y^2 = (4x^2 - 4y^2 - xy)(4x^2 - 4y^2 + xy)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 4x^2 - 4y^2$ and $b = xy$."
                },
                {
                  "step": "$(4x^2 - 4y^2 - xy)(4x^2 - 4y^2 + xy) = (4x^2 - xy - 4y^2)(4x^2 + xy - 4y^2)$",
                  "reason": "The commutative law of addition puts the terms of each bracket in descending order of powers of $x$."
                }
              ]
            },
            {
              "prompt": "Factor $x^4 - 76x^2 + 36$ into two brackets.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(x^2-8*x-6)*(x^2+8*x-6)",
              "lines": [
                {
                  "step": "Factor $x^4 - 76x^2 + 36$ into two brackets.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x^2 - 6)^2 = x^4 - 12x^2 + 36$",
                  "reason": "Square of a binomial, with $a = x^2$ and $b = -6$, and power of a product for each square."
                },
                {
                  "step": "$x^4 - 76x^2 + 36 = (x^2 - 6)^2 - 64x^2$",
                  "reason": "Adding and subtracting a square: $x^4 - 76x^2 + 36$ is the square of line 2 with $64x^2$ taken away, since $-12 - 64 = -76$, and $64x^2 = (8x)^2$ is a square."
                },
                {
                  "step": "$(x^2 - 6)^2 - 64x^2 = (x^2 - 6 - 8x)(x^2 - 6 + 8x)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2 - 6$ and $b = 8x$."
                },
                {
                  "step": "$(x^2 - 6 - 8x)(x^2 - 6 + 8x) = (x^2 - 8x - 6)(x^2 + 8x - 6)$",
                  "reason": "The commutative law of addition puts the terms of each bracket in descending order of powers of $x$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find two whole numbers, each greater than 70, whose product is $21^4 + 1024$, and give the larger one.",
            "lines": [
              {
                "step": "Find two whole numbers, each greater than 70, whose product is $21^4 + 1024$, and give the larger one.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(21^2 + 32)^2 = 21^4 + 2 \\cdot 32 \\cdot 21^2 + 32^2 = 21^4 + 28\\,224 + 1024$",
                "reason": "Square of a binomial, with $a = 21^2$ and $b = 32$, and the definition of a power, from arithmetic, for $32^2 = 1024$."
              },
              {
                "step": "$21^4 + 1024 = (21^2 + 32)^2 - 28\\,224 = (21^2 + 32)^2 - 168^2$",
                "reason": "Adding and subtracting a square: line 2 is $21^4 + 1024$ with $28\\,224$ added, so taking $28\\,224$ away again gives $21^4 + 1024$, and $28\\,224 = 168^2$."
              },
              {
                "step": "$(21^2 + 32)^2 - 168^2 = (21^2 + 32 - 168)(21^2 + 32 + 168)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 21^2 + 32$ and $b = 168$."
              },
              {
                "step": "$(21^2 + 32 - 168)(21^2 + 32 + 168) = 305 \\cdot 641$",
                "reason": "The definition of a power and the addition and subtraction of integers, from arithmetic."
              },
              {
                "step": "The two factors $305$ and $641$ are each greater than 70, and the larger is $641$.",
                "reason": "Answering the question asked: the product of the two factors is the given number, by lines 3 to 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find two whole numbers, each greater than 340, whose product is $22^4 + 4$, and give the larger one.",
              "form": "Answer as an integer.",
              "answer": "530",
              "lines": [
                {
                  "step": "Find two whole numbers, each greater than 340, whose product is $22^4 + 4$, and give the larger one.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(22^2 + 2)^2 = 22^4 + 2 \\cdot 2 \\cdot 22^2 + 2^2 = 22^4 + 1936 + 4$",
                  "reason": "Square of a binomial, with $a = 22^2$ and $b = 2$, and the definition of a power, from arithmetic, for $2^2 = 4$."
                },
                {
                  "step": "$22^4 + 4 = (22^2 + 2)^2 - 1936 = (22^2 + 2)^2 - 44^2$",
                  "reason": "Adding and subtracting a square: line 2 is $22^4 + 4$ with $1936$ added, so taking $1936$ away again gives $22^4 + 4$, and $1936 = 44^2$."
                },
                {
                  "step": "$(22^2 + 2)^2 - 44^2 = (22^2 + 2 - 44)(22^2 + 2 + 44)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 22^2 + 2$ and $b = 44$."
                },
                {
                  "step": "$(22^2 + 2 - 44)(22^2 + 2 + 44) = 442 \\cdot 530$",
                  "reason": "The definition of a power and the addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "The two factors $442$ and $530$ are each greater than 340, and the larger is $530$.",
                  "reason": "Answering the question asked: the product of the two factors is the given number, by lines 3 to 5."
                }
              ]
            },
            {
              "prompt": "Find two whole numbers, each greater than 290, whose product is $37^4 + 4$, and give the larger one.",
              "form": "Answer as an integer.",
              "answer": "1445",
              "lines": [
                {
                  "step": "Find two whole numbers, each greater than 290, whose product is $37^4 + 4$, and give the larger one.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(37^2 + 2)^2 = 37^4 + 2 \\cdot 2 \\cdot 37^2 + 2^2 = 37^4 + 5476 + 4$",
                  "reason": "Square of a binomial, with $a = 37^2$ and $b = 2$, and the definition of a power, from arithmetic, for $2^2 = 4$."
                },
                {
                  "step": "$37^4 + 4 = (37^2 + 2)^2 - 5476 = (37^2 + 2)^2 - 74^2$",
                  "reason": "Adding and subtracting a square: line 2 is $37^4 + 4$ with $5476$ added, so taking $5476$ away again gives $37^4 + 4$, and $5476 = 74^2$."
                },
                {
                  "step": "$(37^2 + 2)^2 - 74^2 = (37^2 + 2 - 74)(37^2 + 2 + 74)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 37^2 + 2$ and $b = 74$."
                },
                {
                  "step": "$(37^2 + 2 - 74)(37^2 + 2 + 74) = 1297 \\cdot 1445$",
                  "reason": "The definition of a power and the addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "The two factors $1297$ and $1445$ are each greater than 290, and the larger is $1445$.",
                  "reason": "Answering the question asked: the product of the two factors is the given number, by lines 3 to 5."
                }
              ]
            },
            {
              "prompt": "Find two whole numbers, each greater than 430, whose product is $28^4 + 4$, and give the larger one.",
              "form": "Answer as an integer.",
              "answer": "842",
              "lines": [
                {
                  "step": "Find two whole numbers, each greater than 430, whose product is $28^4 + 4$, and give the larger one.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(28^2 + 2)^2 = 28^4 + 2 \\cdot 2 \\cdot 28^2 + 2^2 = 28^4 + 3136 + 4$",
                  "reason": "Square of a binomial, with $a = 28^2$ and $b = 2$, and the definition of a power, from arithmetic, for $2^2 = 4$."
                },
                {
                  "step": "$28^4 + 4 = (28^2 + 2)^2 - 3136 = (28^2 + 2)^2 - 56^2$",
                  "reason": "Adding and subtracting a square: line 2 is $28^4 + 4$ with $3136$ added, so taking $3136$ away again gives $28^4 + 4$, and $3136 = 56^2$."
                },
                {
                  "step": "$(28^2 + 2)^2 - 56^2 = (28^2 + 2 - 56)(28^2 + 2 + 56)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 28^2 + 2$ and $b = 56$."
                },
                {
                  "step": "$(28^2 + 2 - 56)(28^2 + 2 + 56) = 730 \\cdot 842$",
                  "reason": "The definition of a power and the addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "The two factors $730$ and $842$ are each greater than 430, and the larger is $842$.",
                  "reason": "Answering the question asked: the product of the two factors is the given number, by lines 3 to 5."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k3",
      "forms": [
        {
          "example": {
            "problem": "Compute $485^2 - 315^2$.",
            "lines": [
              {
                "step": "Compute $485^2 - 315^2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$485^2 - 315^2 = (485 - 315)(485 + 315)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 485$ and $b = 315$."
              },
              {
                "step": "$(485 - 315)(485 + 315) = 170 \\cdot 800$",
                "reason": "The addition and subtraction of integers, from arithmetic."
              },
              {
                "step": "$170 \\cdot 800 = 136\\,000$",
                "reason": "The multiplication of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $275^2 - 25^2$.",
              "form": "Answer as an integer.",
              "answer": "75000",
              "lines": [
                {
                  "step": "Compute $275^2 - 25^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$275^2 - 25^2 = (275 - 25)(275 + 25)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 275$ and $b = 25$."
                },
                {
                  "step": "$(275 - 25)(275 + 25) = 250 \\cdot 300$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "$250 \\cdot 300 = 75\\,000$",
                  "reason": "The multiplication of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $738^2 - 62^2$.",
              "form": "Answer as an integer.",
              "answer": "540800",
              "lines": [
                {
                  "step": "Compute $738^2 - 62^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$738^2 - 62^2 = (738 - 62)(738 + 62)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 738$ and $b = 62$."
                },
                {
                  "step": "$(738 - 62)(738 + 62) = 676 \\cdot 800$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "$676 \\cdot 800 = 540\\,800$",
                  "reason": "The multiplication of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $505^2 - 495^2$.",
              "form": "Answer as an integer.",
              "answer": "10000",
              "lines": [
                {
                  "step": "Compute $505^2 - 495^2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$505^2 - 495^2 = (505 - 495)(505 + 495)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 505$ and $b = 495$."
                },
                {
                  "step": "$(505 - 495)(505 + 495) = 10 \\cdot 1000$",
                  "reason": "The addition and subtraction of integers, from arithmetic."
                },
                {
                  "step": "$10 \\cdot 1000 = 10\\,000$",
                  "reason": "The multiplication of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $613^2$, given that $614^2 = 376\\,996$.",
            "lines": [
              {
                "step": "Compute $613^2$, given that $614^2 = 376\\,996$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$614^2 - 613^2 = 2 \\cdot 613 + 1$",
                "reason": "Consecutive squares differ by $2n + 1$, with $n = 613$."
              },
              {
                "step": "$613^2 = 614^2 - (2 \\cdot 613 + 1)$",
                "reason": "Adding $613^2 - (2 \\cdot 613 + 1)$ to both sides."
              },
              {
                "step": "$613^2 = 376\\,996 - (2 \\cdot 613 + 1)$",
                "reason": "Substituting a value: $614^2$ is replaced by $376\\,996$."
              },
              {
                "step": "$376\\,996 - (2 \\cdot 613 + 1) = 375\\,769$",
                "reason": "The multiplication and subtraction of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $54^2$, given that $55^2 = 3025$.",
              "form": "Answer as an integer.",
              "answer": "2916",
              "lines": [
                {
                  "step": "Compute $54^2$, given that $55^2 = 3025$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$55^2 - 54^2 = 2 \\cdot 54 + 1$",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 54$."
                },
                {
                  "step": "$54^2 = 55^2 - (2 \\cdot 54 + 1)$",
                  "reason": "Adding $54^2 - (2 \\cdot 54 + 1)$ to both sides."
                },
                {
                  "step": "$54^2 = 3025 - (2 \\cdot 54 + 1)$",
                  "reason": "Substituting a value: $55^2$ is replaced by $3025$."
                },
                {
                  "step": "$3025 - (2 \\cdot 54 + 1) = 2916$",
                  "reason": "The multiplication and subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $286^2$, given that $287^2 = 82\\,369$.",
              "form": "Answer as an integer.",
              "answer": "81796",
              "lines": [
                {
                  "step": "Compute $286^2$, given that $287^2 = 82\\,369$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$287^2 - 286^2 = 2 \\cdot 286 + 1$",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 286$."
                },
                {
                  "step": "$286^2 = 287^2 - (2 \\cdot 286 + 1)$",
                  "reason": "Adding $286^2 - (2 \\cdot 286 + 1)$ to both sides."
                },
                {
                  "step": "$286^2 = 82\\,369 - (2 \\cdot 286 + 1)$",
                  "reason": "Substituting a value: $287^2$ is replaced by $82\\,369$."
                },
                {
                  "step": "$82\\,369 - (2 \\cdot 286 + 1) = 81\\,796$",
                  "reason": "The multiplication and subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $741^2$, given that $742^2 = 550\\,564$.",
              "form": "Answer as an integer.",
              "answer": "549081",
              "lines": [
                {
                  "step": "Compute $741^2$, given that $742^2 = 550\\,564$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$742^2 - 741^2 = 2 \\cdot 741 + 1$",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 741$."
                },
                {
                  "step": "$741^2 = 742^2 - (2 \\cdot 741 + 1)$",
                  "reason": "Adding $741^2 - (2 \\cdot 741 + 1)$ to both sides."
                },
                {
                  "step": "$741^2 = 550\\,564 - (2 \\cdot 741 + 1)$",
                  "reason": "Substituting a value: $742^2$ is replaced by $550\\,564$."
                },
                {
                  "step": "$550\\,564 - (2 \\cdot 741 + 1) = 549\\,081$",
                  "reason": "The multiplication and subtraction of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $439^2$, given that $438^2 = 191\\,844$.",
            "lines": [
              {
                "step": "Compute $439^2$, given that $438^2 = 191\\,844$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$439^2 - 438^2 = 2 \\cdot 438 + 1$",
                "reason": "Consecutive squares differ by $2n + 1$, with $n = 438$."
              },
              {
                "step": "$439^2 = 438^2 + 2 \\cdot 438 + 1$",
                "reason": "Adding $438^2$ to both sides."
              },
              {
                "step": "$439^2 = 191\\,844 + 2 \\cdot 438 + 1$",
                "reason": "Substituting a value: $438^2$ is replaced by $191\\,844$."
              },
              {
                "step": "$191\\,844 + 2 \\cdot 438 + 1 = 192\\,721$",
                "reason": "The multiplication and addition of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $75^2$, given that $74^2 = 5476$.",
              "form": "Answer as an integer.",
              "answer": "5625",
              "lines": [
                {
                  "step": "Compute $75^2$, given that $74^2 = 5476$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$75^2 - 74^2 = 2 \\cdot 74 + 1$",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 74$."
                },
                {
                  "step": "$75^2 = 74^2 + 2 \\cdot 74 + 1$",
                  "reason": "Adding $74^2$ to both sides."
                },
                {
                  "step": "$75^2 = 5476 + 2 \\cdot 74 + 1$",
                  "reason": "Substituting a value: $74^2$ is replaced by $5476$."
                },
                {
                  "step": "$5476 + 2 \\cdot 74 + 1 = 5625$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $655^2$, given that $654^2 = 427\\,716$.",
              "form": "Answer as an integer.",
              "answer": "429025",
              "lines": [
                {
                  "step": "Compute $655^2$, given that $654^2 = 427\\,716$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$655^2 - 654^2 = 2 \\cdot 654 + 1$",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 654$."
                },
                {
                  "step": "$655^2 = 654^2 + 2 \\cdot 654 + 1$",
                  "reason": "Adding $654^2$ to both sides."
                },
                {
                  "step": "$655^2 = 427\\,716 + 2 \\cdot 654 + 1$",
                  "reason": "Substituting a value: $654^2$ is replaced by $427\\,716$."
                },
                {
                  "step": "$427\\,716 + 2 \\cdot 654 + 1 = 429\\,025$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $473^2$, given that $472^2 = 222\\,784$.",
              "form": "Answer as an integer.",
              "answer": "223729",
              "lines": [
                {
                  "step": "Compute $473^2$, given that $472^2 = 222\\,784$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$473^2 - 472^2 = 2 \\cdot 472 + 1$",
                  "reason": "Consecutive squares differ by $2n + 1$, with $n = 472$."
                },
                {
                  "step": "$473^2 = 472^2 + 2 \\cdot 472 + 1$",
                  "reason": "Adding $472^2$ to both sides."
                },
                {
                  "step": "$473^2 = 222\\,784 + 2 \\cdot 472 + 1$",
                  "reason": "Substituting a value: $472^2$ is replaced by $222\\,784$."
                },
                {
                  "step": "$222\\,784 + 2 \\cdot 472 + 1 = 223\\,729$",
                  "reason": "The multiplication and addition of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $7011 \\cdot 6989 - 7005 \\cdot 6995$.",
            "lines": [
              {
                "step": "Compute $7011 \\cdot 6989 - 7005 \\cdot 6995$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7011 \\cdot 6989 = (7000 + 11)(7000 - 11) = 7000^2 - 11^2$",
                "reason": "Difference of squares, read from right to left, with $a = 7000$ and $b = 11$, and the commutative law of multiplication."
              },
              {
                "step": "$7005 \\cdot 6995 = (7000 + 5)(7000 - 5) = 7000^2 - 5^2$",
                "reason": "Difference of squares, read from right to left, with $a = 7000$ and $b = 5$, and the commutative law of multiplication."
              },
              {
                "step": "$(7000^2 - 11^2) - (7000^2 - 5^2) = 5^2 - 11^2$",
                "reason": "Subtracting a bracket changes every sign in it, and the two terms $7000^2$ cancel."
              },
              {
                "step": "$5^2 - 11^2 = -96$",
                "reason": "The definition of a power and the subtraction of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $30\\,005 \\cdot 29\\,995 - 30\\,004 \\cdot 29\\,996$.",
              "form": "Answer as an integer.",
              "answer": "-9",
              "lines": [
                {
                  "step": "Compute $30\\,005 \\cdot 29\\,995 - 30\\,004 \\cdot 29\\,996$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$30\\,005 \\cdot 29\\,995 = (30\\,000 + 5)(30\\,000 - 5) = 30\\,000^2 - 5^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 30\\,000$ and $b = 5$, and the commutative law of multiplication."
                },
                {
                  "step": "$30\\,004 \\cdot 29\\,996 = (30\\,000 + 4)(30\\,000 - 4) = 30\\,000^2 - 4^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 30\\,000$ and $b = 4$, and the commutative law of multiplication."
                },
                {
                  "step": "$(30\\,000^2 - 5^2) - (30\\,000^2 - 4^2) = 4^2 - 5^2$",
                  "reason": "Subtracting a bracket changes every sign in it, and the two terms $30\\,000^2$ cancel."
                },
                {
                  "step": "$4^2 - 5^2 = -9$",
                  "reason": "The definition of a power and the subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $3004 \\cdot 2996 - 3010 \\cdot 2990$.",
              "form": "Answer as an integer.",
              "answer": "84",
              "lines": [
                {
                  "step": "Compute $3004 \\cdot 2996 - 3010 \\cdot 2990$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3004 \\cdot 2996 = (3000 + 4)(3000 - 4) = 3000^2 - 4^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 3000$ and $b = 4$, and the commutative law of multiplication."
                },
                {
                  "step": "$3010 \\cdot 2990 = (3000 + 10)(3000 - 10) = 3000^2 - 10^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 3000$ and $b = 10$, and the commutative law of multiplication."
                },
                {
                  "step": "$(3000^2 - 4^2) - (3000^2 - 10^2) = 10^2 - 4^2$",
                  "reason": "Subtracting a bracket changes every sign in it, and the two terms $3000^2$ cancel."
                },
                {
                  "step": "$10^2 - 4^2 = 84$",
                  "reason": "The definition of a power and the subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Compute $80\\,003 \\cdot 79\\,997 - 80\\,002 \\cdot 79\\,998$.",
              "form": "Answer as an integer.",
              "answer": "-5",
              "lines": [
                {
                  "step": "Compute $80\\,003 \\cdot 79\\,997 - 80\\,002 \\cdot 79\\,998$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$80\\,003 \\cdot 79\\,997 = (80\\,000 + 3)(80\\,000 - 3) = 80\\,000^2 - 3^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 80\\,000$ and $b = 3$, and the commutative law of multiplication."
                },
                {
                  "step": "$80\\,002 \\cdot 79\\,998 = (80\\,000 + 2)(80\\,000 - 2) = 80\\,000^2 - 2^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 80\\,000$ and $b = 2$, and the commutative law of multiplication."
                },
                {
                  "step": "$(80\\,000^2 - 3^2) - (80\\,000^2 - 2^2) = 2^2 - 3^2$",
                  "reason": "Subtracting a bracket changes every sign in it, and the two terms $80\\,000^2$ cancel."
                },
                {
                  "step": "$2^2 - 3^2 = -5$",
                  "reason": "The definition of a power and the subtraction of integers, from arithmetic."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k4",
      "forms": [
        {
          "example": {
            "problem": "Find every positive whole number $m$ for which $m^2 - n^2 = 24$ for some positive whole number $n$.",
            "lines": [
              {
                "step": "Find every positive whole number $m$ for which $m^2 - n^2 = 24$ for some positive whole number $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(m - n)(m + n) = 24$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = m$ and $b = n$."
              },
              {
                "step": "With $m - n$ smaller than $m + n$, the factor pairs of $24$ are $1 \\cdot 24$, $2 \\cdot 12$, $3 \\cdot 8$, $4 \\cdot 6$.",
                "reason": "Diophantine equation and factor pairs of the constant: only whole numbers are sought, so $m - n$ and $m + n$ are whole numbers whose product is $24$, and $m - n < m + n$ because $n$ is positive."
              },
              {
                "step": "The pairs $2 \\cdot 12$, $4 \\cdot 6$ hold two even numbers; the pairs $1 \\cdot 24$, $3 \\cdot 8$ hold one odd and one even number and are discarded.",
                "reason": "Even whole numbers, from arithmetic: $(m + n) - (m - n) = 2n$ is even, so $m - n$ and $m + n$ are both even or both odd."
              },
              {
                "step": "Each kept pair $m - n = d$, $m + n = e$ gives $2m = d + e$ and $2n = e - d$.",
                "reason": "Adding the two equations, and taking the first from the second."
              },
              {
                "step": "So $m = \\dfrac{d + e}{2}$ and $n = \\dfrac{e - d}{2}$, and the pairs $(m, n)$ are $(7, 5)$, $(5, 1)$.",
                "reason": "Dividing both sides of each equation by $2$."
              },
              {
                "step": "The values of $m$ are $5$, $7$.",
                "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every positive whole number $m$ for which $m^2 - n^2 = 72$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{9, 11, 19}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $m^2 - n^2 = 72$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(m - n)(m + n) = 72$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = m$ and $b = n$."
                },
                {
                  "step": "With $m - n$ smaller than $m + n$, the factor pairs of $72$ are $1 \\cdot 72$, $2 \\cdot 36$, $3 \\cdot 24$, $4 \\cdot 18$, $6 \\cdot 12$, $8 \\cdot 9$.",
                  "reason": "Diophantine equation and factor pairs of the constant: only whole numbers are sought, so $m - n$ and $m + n$ are whole numbers whose product is $72$, and $m - n < m + n$ because $n$ is positive."
                },
                {
                  "step": "The pairs $2 \\cdot 36$, $4 \\cdot 18$, $6 \\cdot 12$ hold two even numbers; the pairs $1 \\cdot 72$, $3 \\cdot 24$, $8 \\cdot 9$ hold one odd and one even number and are discarded.",
                  "reason": "Even whole numbers, from arithmetic: $(m + n) - (m - n) = 2n$ is even, so $m - n$ and $m + n$ are both even or both odd."
                },
                {
                  "step": "Each kept pair $m - n = d$, $m + n = e$ gives $2m = d + e$ and $2n = e - d$.",
                  "reason": "Adding the two equations, and taking the first from the second."
                },
                {
                  "step": "So $m = \\dfrac{d + e}{2}$ and $n = \\dfrac{e - d}{2}$, and the pairs $(m, n)$ are $(19, 17)$, $(11, 7)$, $(9, 3)$.",
                  "reason": "Dividing both sides of each equation by $2$."
                },
                {
                  "step": "The values of $m$ are $9$, $11$, $19$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            },
            {
              "prompt": "Find every positive whole number $m$ for which $m^2 - n^2 = 184$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{25, 47}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $m^2 - n^2 = 184$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(m - n)(m + n) = 184$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = m$ and $b = n$."
                },
                {
                  "step": "With $m - n$ smaller than $m + n$, the factor pairs of $184$ are $1 \\cdot 184$, $2 \\cdot 92$, $4 \\cdot 46$, $8 \\cdot 23$.",
                  "reason": "Diophantine equation and factor pairs of the constant: only whole numbers are sought, so $m - n$ and $m + n$ are whole numbers whose product is $184$, and $m - n < m + n$ because $n$ is positive."
                },
                {
                  "step": "The pairs $2 \\cdot 92$, $4 \\cdot 46$ hold two even numbers; the pairs $1 \\cdot 184$, $8 \\cdot 23$ hold one odd and one even number and are discarded.",
                  "reason": "Even whole numbers, from arithmetic: $(m + n) - (m - n) = 2n$ is even, so $m - n$ and $m + n$ are both even or both odd."
                },
                {
                  "step": "Each kept pair $m - n = d$, $m + n = e$ gives $2m = d + e$ and $2n = e - d$.",
                  "reason": "Adding the two equations, and taking the first from the second."
                },
                {
                  "step": "So $m = \\dfrac{d + e}{2}$ and $n = \\dfrac{e - d}{2}$, and the pairs $(m, n)$ are $(47, 45)$, $(25, 21)$.",
                  "reason": "Dividing both sides of each equation by $2$."
                },
                {
                  "step": "The values of $m$ are $25$, $47$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            },
            {
              "prompt": "Find every positive whole number $m$ for which $m^2 - n^2 = 140$ for some positive whole number $n$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{12, 36}",
              "lines": [
                {
                  "step": "Find every positive whole number $m$ for which $m^2 - n^2 = 140$ for some positive whole number $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(m - n)(m + n) = 140$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = m$ and $b = n$."
                },
                {
                  "step": "With $m - n$ smaller than $m + n$, the factor pairs of $140$ are $1 \\cdot 140$, $2 \\cdot 70$, $4 \\cdot 35$, $5 \\cdot 28$, $7 \\cdot 20$, $10 \\cdot 14$.",
                  "reason": "Diophantine equation and factor pairs of the constant: only whole numbers are sought, so $m - n$ and $m + n$ are whole numbers whose product is $140$, and $m - n < m + n$ because $n$ is positive."
                },
                {
                  "step": "The pairs $2 \\cdot 70$, $10 \\cdot 14$ hold two even numbers; the pairs $1 \\cdot 140$, $4 \\cdot 35$, $5 \\cdot 28$, $7 \\cdot 20$ hold one odd and one even number and are discarded.",
                  "reason": "Even whole numbers, from arithmetic: $(m + n) - (m - n) = 2n$ is even, so $m - n$ and $m + n$ are both even or both odd."
                },
                {
                  "step": "Each kept pair $m - n = d$, $m + n = e$ gives $2m = d + e$ and $2n = e - d$.",
                  "reason": "Adding the two equations, and taking the first from the second."
                },
                {
                  "step": "So $m = \\dfrac{d + e}{2}$ and $n = \\dfrac{e - d}{2}$, and the pairs $(m, n)$ are $(36, 34)$, $(12, 2)$.",
                  "reason": "Dividing both sides of each equation by $2$."
                },
                {
                  "step": "The values of $m$ are $12$, $36$.",
                  "reason": "Answering the question asked: each value of $m$ comes with a positive whole number $n$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a whole number $n$ whose square is 217 less than the square of $n + 7$.",
            "lines": [
              {
                "step": "Find a whole number $n$ whose square is 217 less than the square of $n + 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(n + 7)^2 - n^2 = 217$",
                "reason": "Writing a sentence as an equation: \"less than\" makes $217$ the gap between the two squares, the square of $n + 7$ being the larger."
              },
              {
                "step": "$(n + 7 - n)(n + 7 + n) = 217$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = n + 7$ and $b = n$."
              },
              {
                "step": "$7(2n + 7) = 217$",
                "reason": "Collecting like terms in each bracket."
              },
              {
                "step": "$2n + 7 = 31$",
                "reason": "Dividing both sides by $7$, a nonzero number."
              },
              {
                "step": "$2n = 24$",
                "reason": "Taking $7$ from both sides."
              },
              {
                "step": "$n = 12$",
                "reason": "Dividing both sides by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a whole number $n$ whose square is 135 less than the square of $n + 9$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find a whole number $n$ whose square is 135 less than the square of $n + 9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(n + 9)^2 - n^2 = 135$",
                  "reason": "Writing a sentence as an equation: \"less than\" makes $135$ the gap between the two squares, the square of $n + 9$ being the larger."
                },
                {
                  "step": "$(n + 9 - n)(n + 9 + n) = 135$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = n + 9$ and $b = n$."
                },
                {
                  "step": "$9(2n + 9) = 135$",
                  "reason": "Collecting like terms in each bracket."
                },
                {
                  "step": "$2n + 9 = 15$",
                  "reason": "Dividing both sides by $9$, a nonzero number."
                },
                {
                  "step": "$2n = 6$",
                  "reason": "Taking $9$ from both sides."
                },
                {
                  "step": "$n = 3$",
                  "reason": "Dividing both sides by $2$."
                }
              ]
            },
            {
              "prompt": "Find a whole number $n$ whose square is 195 less than the square of $n + 5$.",
              "form": "Answer as an integer.",
              "answer": "17",
              "lines": [
                {
                  "step": "Find a whole number $n$ whose square is 195 less than the square of $n + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(n + 5)^2 - n^2 = 195$",
                  "reason": "Writing a sentence as an equation: \"less than\" makes $195$ the gap between the two squares, the square of $n + 5$ being the larger."
                },
                {
                  "step": "$(n + 5 - n)(n + 5 + n) = 195$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = n + 5$ and $b = n$."
                },
                {
                  "step": "$5(2n + 5) = 195$",
                  "reason": "Collecting like terms in each bracket."
                },
                {
                  "step": "$2n + 5 = 39$",
                  "reason": "Dividing both sides by $5$, a nonzero number."
                },
                {
                  "step": "$2n = 34$",
                  "reason": "Taking $5$ from both sides."
                },
                {
                  "step": "$n = 17$",
                  "reason": "Dividing both sides by $2$."
                }
              ]
            },
            {
              "prompt": "Find a whole number $n$ whose square is 80 less than the square of $n + 2$.",
              "form": "Answer as an integer.",
              "answer": "19",
              "lines": [
                {
                  "step": "Find a whole number $n$ whose square is 80 less than the square of $n + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(n + 2)^2 - n^2 = 80$",
                  "reason": "Writing a sentence as an equation: \"less than\" makes $80$ the gap between the two squares, the square of $n + 2$ being the larger."
                },
                {
                  "step": "$(n + 2 - n)(n + 2 + n) = 80$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = n + 2$ and $b = n$."
                },
                {
                  "step": "$2(2n + 2) = 80$",
                  "reason": "Collecting like terms in each bracket."
                },
                {
                  "step": "$2n + 2 = 40$",
                  "reason": "Dividing both sides by $2$, a nonzero number."
                },
                {
                  "step": "$2n = 38$",
                  "reason": "Taking $2$ from both sides."
                },
                {
                  "step": "$n = 19$",
                  "reason": "Dividing both sides by $2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k5",
      "forms": [
        {
          "example": {
            "problem": "Find $x$, given that $x = z - \\sqrt{z^2 - 3}$, $7y = z + \\sqrt{z^2 - 3}$ and $y = 7$.",
            "lines": [
              {
                "step": "Find $x$, given that $x = z - \\sqrt{z^2 - 3}$, $7y = z + \\sqrt{z^2 - 3}$ and $y = 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$7xy = (z - \\sqrt{z^2 - 3})(z + \\sqrt{z^2 - 3})$",
                "reason": "Multiplying two equations: the left sides give $x \\cdot 7y = 7xy$, and the right sides are multiplied."
              },
              {
                "step": "$(z - \\sqrt{z^2 - 3})(z + \\sqrt{z^2 - 3}) = z^2 - (\\sqrt{z^2 - 3})^2$",
                "reason": "Difference of squares, read from right to left, with $a = z$ and $b = \\sqrt{z^2 - 3}$."
              },
              {
                "step": "$z^2 - (\\sqrt{z^2 - 3})^2 = z^2 - (z^2 - 3)$",
                "reason": "The definition of the positive square root: the square of $\\sqrt{z^2 - 3}$ is $z^2 - 3$."
              },
              {
                "step": "$z^2 - (z^2 - 3) = 3$",
                "reason": "Subtracting a bracket changes every sign in it, and the two terms $z^2$ cancel."
              },
              {
                "step": "$7xy = 3$",
                "reason": "Lines 2 to 5 and the transitive property."
              },
              {
                "step": "$7x \\cdot 7 = 3$",
                "reason": "Substituting a value: $y$ is replaced by $7$."
              },
              {
                "step": "$x = \\dfrac{3}{49}$",
                "reason": "Dividing both sides by $49$, a nonzero number, and writing the fraction in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x$, given that $x = z - \\sqrt{z^2 - 6}$, $8y = z + \\sqrt{z^2 - 6}$ and $y = \\dfrac{3}{7}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/4",
              "lines": [
                {
                  "step": "Find $x$, given that $x = z - \\sqrt{z^2 - 6}$, $8y = z + \\sqrt{z^2 - 6}$ and $y = \\dfrac{3}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$8xy = (z - \\sqrt{z^2 - 6})(z + \\sqrt{z^2 - 6})$",
                  "reason": "Multiplying two equations: the left sides give $x \\cdot 8y = 8xy$, and the right sides are multiplied."
                },
                {
                  "step": "$(z - \\sqrt{z^2 - 6})(z + \\sqrt{z^2 - 6}) = z^2 - (\\sqrt{z^2 - 6})^2$",
                  "reason": "Difference of squares, read from right to left, with $a = z$ and $b = \\sqrt{z^2 - 6}$."
                },
                {
                  "step": "$z^2 - (\\sqrt{z^2 - 6})^2 = z^2 - (z^2 - 6)$",
                  "reason": "The definition of the positive square root: the square of $\\sqrt{z^2 - 6}$ is $z^2 - 6$."
                },
                {
                  "step": "$z^2 - (z^2 - 6) = 6$",
                  "reason": "Subtracting a bracket changes every sign in it, and the two terms $z^2$ cancel."
                },
                {
                  "step": "$8xy = 6$",
                  "reason": "Lines 2 to 5 and the transitive property."
                },
                {
                  "step": "$8x \\cdot \\dfrac{3}{7} = 6$",
                  "reason": "Substituting a value: $y$ is replaced by $\\dfrac{3}{7}$."
                },
                {
                  "step": "$x = \\dfrac{7}{4}$",
                  "reason": "Dividing both sides by $\\dfrac{24}{7}$, a nonzero number, and writing the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $x = z - \\sqrt{z^2 - 11}$, $3y = z + \\sqrt{z^2 - 11}$ and $y = \\dfrac{7}{5}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "55/21",
              "lines": [
                {
                  "step": "Find $x$, given that $x = z - \\sqrt{z^2 - 11}$, $3y = z + \\sqrt{z^2 - 11}$ and $y = \\dfrac{7}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3xy = (z - \\sqrt{z^2 - 11})(z + \\sqrt{z^2 - 11})$",
                  "reason": "Multiplying two equations: the left sides give $x \\cdot 3y = 3xy$, and the right sides are multiplied."
                },
                {
                  "step": "$(z - \\sqrt{z^2 - 11})(z + \\sqrt{z^2 - 11}) = z^2 - (\\sqrt{z^2 - 11})^2$",
                  "reason": "Difference of squares, read from right to left, with $a = z$ and $b = \\sqrt{z^2 - 11}$."
                },
                {
                  "step": "$z^2 - (\\sqrt{z^2 - 11})^2 = z^2 - (z^2 - 11)$",
                  "reason": "The definition of the positive square root: the square of $\\sqrt{z^2 - 11}$ is $z^2 - 11$."
                },
                {
                  "step": "$z^2 - (z^2 - 11) = 11$",
                  "reason": "Subtracting a bracket changes every sign in it, and the two terms $z^2$ cancel."
                },
                {
                  "step": "$3xy = 11$",
                  "reason": "Lines 2 to 5 and the transitive property."
                },
                {
                  "step": "$3x \\cdot \\dfrac{7}{5} = 11$",
                  "reason": "Substituting a value: $y$ is replaced by $\\dfrac{7}{5}$."
                },
                {
                  "step": "$x = \\dfrac{55}{21}$",
                  "reason": "Dividing both sides by $\\dfrac{21}{5}$, a nonzero number, and writing the fraction in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $x$, given that $x = z - \\sqrt{z^2 - 12}$, $3y = z + \\sqrt{z^2 - 12}$ and $y = \\dfrac{7}{2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "8/7",
              "lines": [
                {
                  "step": "Find $x$, given that $x = z - \\sqrt{z^2 - 12}$, $3y = z + \\sqrt{z^2 - 12}$ and $y = \\dfrac{7}{2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3xy = (z - \\sqrt{z^2 - 12})(z + \\sqrt{z^2 - 12})$",
                  "reason": "Multiplying two equations: the left sides give $x \\cdot 3y = 3xy$, and the right sides are multiplied."
                },
                {
                  "step": "$(z - \\sqrt{z^2 - 12})(z + \\sqrt{z^2 - 12}) = z^2 - (\\sqrt{z^2 - 12})^2$",
                  "reason": "Difference of squares, read from right to left, with $a = z$ and $b = \\sqrt{z^2 - 12}$."
                },
                {
                  "step": "$z^2 - (\\sqrt{z^2 - 12})^2 = z^2 - (z^2 - 12)$",
                  "reason": "The definition of the positive square root: the square of $\\sqrt{z^2 - 12}$ is $z^2 - 12$."
                },
                {
                  "step": "$z^2 - (z^2 - 12) = 12$",
                  "reason": "Subtracting a bracket changes every sign in it, and the two terms $z^2$ cancel."
                },
                {
                  "step": "$3xy = 12$",
                  "reason": "Lines 2 to 5 and the transitive property."
                },
                {
                  "step": "$3x \\cdot \\dfrac{7}{2} = 12$",
                  "reason": "Substituting a value: $y$ is replaced by $\\dfrac{7}{2}$."
                },
                {
                  "step": "$x = \\dfrac{8}{7}$",
                  "reason": "Dividing both sides by $\\dfrac{21}{2}$, a nonzero number, and writing the fraction in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Compute $\\sqrt{102 \\cdot 106 \\cdot 110 \\cdot 114 + 256}$.",
            "lines": [
              {
                "step": "Compute $\\sqrt{102 \\cdot 106 \\cdot 110 \\cdot 114 + 256}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The outer pair gives $102 \\cdot 114 = 11\\,628$, and the inner pair gives $106 \\cdot 110 = 11\\,660$.",
                "reason": "The commutative law of multiplication pairs the outer two numbers and the inner two; then the multiplication of integers, from arithmetic."
              },
              {
                "step": "So $11\\,628 = 11\\,644 - 16$ and $11\\,660 = 11\\,644 + 16$.",
                "reason": "The addition of integers, from arithmetic: the two products differ by $32$, so $11\\,644$ is halfway between them."
              },
              {
                "step": "$(11\\,644 - 16)(11\\,644 + 16) = 11\\,644^2 - 16^2$",
                "reason": "Difference of squares, read from right to left, with $a = 11\\,644$ and $b = 16$."
              },
              {
                "step": "$11\\,644^2 - 16^2 + 256 = 11\\,644^2$",
                "reason": "The definition of a power, from arithmetic: $16^2 = 256$, so the last two terms cancel."
              },
              {
                "step": "$\\sqrt{11\\,644^2} = 11\\,644$",
                "reason": "The definition of the positive square root: $11\\,644$ is not negative and its square is $11\\,644^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Compute $\\sqrt{147 \\cdot 148 \\cdot 149 \\cdot 150 + 1}$.",
              "form": "Answer as an integer.",
              "answer": "22051",
              "lines": [
                {
                  "step": "Compute $\\sqrt{147 \\cdot 148 \\cdot 149 \\cdot 150 + 1}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The outer pair gives $147 \\cdot 150 = 22\\,050$, and the inner pair gives $148 \\cdot 149 = 22\\,052$.",
                  "reason": "The commutative law of multiplication pairs the outer two numbers and the inner two; then the multiplication of integers, from arithmetic."
                },
                {
                  "step": "So $22\\,050 = 22\\,051 - 1$ and $22\\,052 = 22\\,051 + 1$.",
                  "reason": "The addition of integers, from arithmetic: the two products differ by $2$, so $22\\,051$ is halfway between them."
                },
                {
                  "step": "$(22\\,051 - 1)(22\\,051 + 1) = 22\\,051^2 - 1^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 22\\,051$ and $b = 1$."
                },
                {
                  "step": "$22\\,051^2 - 1^2 + 1 = 22\\,051^2$",
                  "reason": "The definition of a power, from arithmetic: $1^2 = 1$, so the last two terms cancel."
                },
                {
                  "step": "$\\sqrt{22\\,051^2} = 22\\,051$",
                  "reason": "The definition of the positive square root: $22\\,051$ is not negative and its square is $22\\,051^2$."
                }
              ]
            },
            {
              "prompt": "Compute $\\sqrt{122 \\cdot 127 \\cdot 132 \\cdot 137 + 625}$.",
              "form": "Answer as an integer.",
              "answer": "16739",
              "lines": [
                {
                  "step": "Compute $\\sqrt{122 \\cdot 127 \\cdot 132 \\cdot 137 + 625}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The outer pair gives $122 \\cdot 137 = 16\\,714$, and the inner pair gives $127 \\cdot 132 = 16\\,764$.",
                  "reason": "The commutative law of multiplication pairs the outer two numbers and the inner two; then the multiplication of integers, from arithmetic."
                },
                {
                  "step": "So $16\\,714 = 16\\,739 - 25$ and $16\\,764 = 16\\,739 + 25$.",
                  "reason": "The addition of integers, from arithmetic: the two products differ by $50$, so $16\\,739$ is halfway between them."
                },
                {
                  "step": "$(16\\,739 - 25)(16\\,739 + 25) = 16\\,739^2 - 25^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 16\\,739$ and $b = 25$."
                },
                {
                  "step": "$16\\,739^2 - 25^2 + 625 = 16\\,739^2$",
                  "reason": "The definition of a power, from arithmetic: $25^2 = 625$, so the last two terms cancel."
                },
                {
                  "step": "$\\sqrt{16\\,739^2} = 16\\,739$",
                  "reason": "The definition of the positive square root: $16\\,739$ is not negative and its square is $16\\,739^2$."
                }
              ]
            },
            {
              "prompt": "Compute $\\sqrt{158 \\cdot 160 \\cdot 162 \\cdot 164 + 16}$.",
              "form": "Answer as an integer.",
              "answer": "25916",
              "lines": [
                {
                  "step": "Compute $\\sqrt{158 \\cdot 160 \\cdot 162 \\cdot 164 + 16}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The outer pair gives $158 \\cdot 164 = 25\\,912$, and the inner pair gives $160 \\cdot 162 = 25\\,920$.",
                  "reason": "The commutative law of multiplication pairs the outer two numbers and the inner two; then the multiplication of integers, from arithmetic."
                },
                {
                  "step": "So $25\\,912 = 25\\,916 - 4$ and $25\\,920 = 25\\,916 + 4$.",
                  "reason": "The addition of integers, from arithmetic: the two products differ by $8$, so $25\\,916$ is halfway between them."
                },
                {
                  "step": "$(25\\,916 - 4)(25\\,916 + 4) = 25\\,916^2 - 4^2$",
                  "reason": "Difference of squares, read from right to left, with $a = 25\\,916$ and $b = 4$."
                },
                {
                  "step": "$25\\,916^2 - 4^2 + 16 = 25\\,916^2$",
                  "reason": "The definition of a power, from arithmetic: $4^2 = 16$, so the last two terms cancel."
                },
                {
                  "step": "$\\sqrt{25\\,916^2} = 25\\,916$",
                  "reason": "The definition of the positive square root: $25\\,916$ is not negative and its square is $25\\,916^2$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k6",
      "forms": [
        {
          "example": {
            "problem": "Find $x - y$, given that $x + y = 22$ and $x^2 - y^2 = 118$.",
            "lines": [
              {
                "step": "Find $x - y$, given that $x + y = 22$ and $x^2 - y^2 = 118$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - y^2 = (x - y)(x + y)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$, and the commutative law of multiplication."
              },
              {
                "step": "$118 = (x - y) \\cdot 22$",
                "reason": "Substituting a value: $x^2 - y^2$ is replaced by $118$ and $x + y$ by $22$."
              },
              {
                "step": "$x - y = \\dfrac{118}{22}$",
                "reason": "Dividing both sides by $22$, a nonzero number."
              },
              {
                "step": "$\\dfrac{118}{22} = \\dfrac{59}{11}$",
                "reason": "Fractions in lowest terms and the gcd, from arithmetic: the top and the bottom are divided by their greatest common divisor, $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x - y$, given that $x + y = 6$ and $x^2 - y^2 = 40$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "20/3",
              "lines": [
                {
                  "step": "Find $x - y$, given that $x + y = 6$ and $x^2 - y^2 = 40$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$, and the commutative law of multiplication."
                },
                {
                  "step": "$40 = (x - y) \\cdot 6$",
                  "reason": "Substituting a value: $x^2 - y^2$ is replaced by $40$ and $x + y$ by $6$."
                },
                {
                  "step": "$x - y = \\dfrac{40}{6}$",
                  "reason": "Dividing both sides by $6$, a nonzero number."
                },
                {
                  "step": "$\\dfrac{40}{6} = \\dfrac{20}{3}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the top and the bottom are divided by their greatest common divisor, $2$."
                }
              ]
            },
            {
              "prompt": "Find $x - y$, given that $x + y = 20$ and $x^2 - y^2 = 76$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "19/5",
              "lines": [
                {
                  "step": "Find $x - y$, given that $x + y = 20$ and $x^2 - y^2 = 76$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$, and the commutative law of multiplication."
                },
                {
                  "step": "$76 = (x - y) \\cdot 20$",
                  "reason": "Substituting a value: $x^2 - y^2$ is replaced by $76$ and $x + y$ by $20$."
                },
                {
                  "step": "$x - y = \\dfrac{76}{20}$",
                  "reason": "Dividing both sides by $20$, a nonzero number."
                },
                {
                  "step": "$\\dfrac{76}{20} = \\dfrac{19}{5}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the top and the bottom are divided by their greatest common divisor, $4$."
                }
              ]
            },
            {
              "prompt": "Find $x + y$, given that $x - y = 18$ and $x^2 - y^2 = -76$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-38/9",
              "lines": [
                {
                  "step": "Find $x + y$, given that $x - y = 18$ and $x^2 - y^2 = -76$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - y^2 = (x + y)(x - y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$, and the commutative law of multiplication."
                },
                {
                  "step": "$-76 = (x + y) \\cdot 18$",
                  "reason": "Substituting a value: $x^2 - y^2$ is replaced by $-76$ and $x - y$ by $18$."
                },
                {
                  "step": "$x + y = -\\dfrac{76}{18}$",
                  "reason": "Dividing both sides by $18$, a nonzero number."
                },
                {
                  "step": "$-\\dfrac{76}{18} = -\\dfrac{38}{9}$",
                  "reason": "Fractions in lowest terms and the gcd, from arithmetic: the top and the bottom are divided by their greatest common divisor, $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x^2 - y^2$, given that $x = 11^{5} + 11^{-3}$ and $y = 11^{5} - 11^{-3}$.",
            "lines": [
              {
                "step": "Find $x^2 - y^2$, given that $x = 11^{5} + 11^{-3}$ and $y = 11^{5} - 11^{-3}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - y^2 = (x - y)(x + y)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$."
              },
              {
                "step": "$x - y = 2 \\cdot 11^{-3}$",
                "reason": "Subtracting a bracket changes every sign in it: the two terms $11^{5}$ cancel and the two terms in $11^{-3}$ collect."
              },
              {
                "step": "$x + y = 2 \\cdot 11^{5}$",
                "reason": "Collecting like terms: the two terms in $11^{-3}$ cancel."
              },
              {
                "step": "$x^2 - y^2 = 4 \\cdot 11^{2}$",
                "reason": "Product law: $11^{-3} \\cdot 11^{5} = 11^{2}$, and $2 \\cdot 2 = 4$."
              },
              {
                "step": "$4 \\cdot 11^{2} = 484$",
                "reason": "The definition of a power and the multiplication of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^2 - y^2$, given that $x = 7^{6} - 7^{-3}$ and $y = 7^{6} + 7^{-3}$.",
              "form": "Answer as an integer.",
              "answer": "-1372",
              "lines": [
                {
                  "step": "Find $x^2 - y^2$, given that $x = 7^{6} - 7^{-3}$ and $y = 7^{6} + 7^{-3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x - y = -2 \\cdot 7^{-3}$",
                  "reason": "Subtracting a bracket changes every sign in it: the two terms $7^{6}$ cancel and the two terms in $7^{-3}$ collect."
                },
                {
                  "step": "$x + y = 2 \\cdot 7^{6}$",
                  "reason": "Collecting like terms: the two terms in $7^{-3}$ cancel."
                },
                {
                  "step": "$x^2 - y^2 = -4 \\cdot 7^{3}$",
                  "reason": "Product law: $7^{-3} \\cdot 7^{6} = 7^{3}$, and $-2 \\cdot 2 = -4$."
                },
                {
                  "step": "$-4 \\cdot 7^{3} = -1372$",
                  "reason": "The definition of a power and the multiplication of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find $x^2 - y^2$, given that $x = 5^{7} - 5^{-4}$ and $y = 5^{7} + 5^{-4}$.",
              "form": "Answer as an integer.",
              "answer": "-500",
              "lines": [
                {
                  "step": "Find $x^2 - y^2$, given that $x = 5^{7} - 5^{-4}$ and $y = 5^{7} + 5^{-4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x - y = -2 \\cdot 5^{-4}$",
                  "reason": "Subtracting a bracket changes every sign in it: the two terms $5^{7}$ cancel and the two terms in $5^{-4}$ collect."
                },
                {
                  "step": "$x + y = 2 \\cdot 5^{7}$",
                  "reason": "Collecting like terms: the two terms in $5^{-4}$ cancel."
                },
                {
                  "step": "$x^2 - y^2 = -4 \\cdot 5^{3}$",
                  "reason": "Product law: $5^{-4} \\cdot 5^{7} = 5^{3}$, and $-2 \\cdot 2 = -4$."
                },
                {
                  "step": "$-4 \\cdot 5^{3} = -500$",
                  "reason": "The definition of a power and the multiplication of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Find $x^2 - y^2$, given that $x = 5^{4} - 5^{-2}$ and $y = 5^{4} + 5^{-2}$.",
              "form": "Answer as an integer.",
              "answer": "-100",
              "lines": [
                {
                  "step": "Find $x^2 - y^2$, given that $x = 5^{4} - 5^{-2}$ and $y = 5^{4} + 5^{-2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x - y = -2 \\cdot 5^{-2}$",
                  "reason": "Subtracting a bracket changes every sign in it: the two terms $5^{4}$ cancel and the two terms in $5^{-2}$ collect."
                },
                {
                  "step": "$x + y = 2 \\cdot 5^{4}$",
                  "reason": "Collecting like terms: the two terms in $5^{-2}$ cancel."
                },
                {
                  "step": "$x^2 - y^2 = -4 \\cdot 5^{2}$",
                  "reason": "Product law: $5^{-2} \\cdot 5^{4} = 5^{2}$, and $-2 \\cdot 2 = -4$."
                },
                {
                  "step": "$-4 \\cdot 5^{2} = -100$",
                  "reason": "The definition of a power and the multiplication of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x - y$, given that $x^4 - y^4 = -1295$, $x^2 + y^2 = 37$ and $x + y = 7$.",
            "lines": [
              {
                "step": "Find $x - y$, given that $x^4 - y^4 = -1295$, $x^2 + y^2 = 37$ and $x + y = 7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = y^2$, since $(x^2)^2 = x^4$ by the power law."
              },
              {
                "step": "$x^2 - y^2 = (x - y)(x + y)$",
                "reason": "Difference of squares again, with $a = x$ and $b = y$."
              },
              {
                "step": "$x^4 - y^4 = (x - y)(x + y)(x^2 + y^2)$",
                "reason": "Line 2, with $x^2 - y^2$ replaced by the product equal to it in line 3."
              },
              {
                "step": "$-1295 = (x - y) \\cdot 7 \\cdot 37$",
                "reason": "Substituting a value: $x^4 - y^4$ is replaced by $-1295$, $x + y$ by $7$ and $x^2 + y^2$ by $37$."
              },
              {
                "step": "$(x - y) \\cdot 7 = -35$",
                "reason": "Dividing both sides by $37$, a nonzero number."
              },
              {
                "step": "$x - y = -5$",
                "reason": "Dividing both sides by $7$, a nonzero number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x - y$, given that $x^4 - y^4 = 9919$, $x^2 + y^2 = 109$ and $x + y = 13$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find $x - y$, given that $x^4 - y^4 = 9919$, $x^2 + y^2 = 109$ and $x + y = 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = y^2$, since $(x^2)^2 = x^4$ by the power law."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares again, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^4 - y^4 = (x - y)(x + y)(x^2 + y^2)$",
                  "reason": "Line 2, with $x^2 - y^2$ replaced by the product equal to it in line 3."
                },
                {
                  "step": "$9919 = (x - y) \\cdot 13 \\cdot 109$",
                  "reason": "Substituting a value: $x^4 - y^4$ is replaced by $9919$, $x + y$ by $13$ and $x^2 + y^2$ by $109$."
                },
                {
                  "step": "$(x - y) \\cdot 13 = 91$",
                  "reason": "Dividing both sides by $109$, a nonzero number."
                },
                {
                  "step": "$x - y = 7$",
                  "reason": "Dividing both sides by $13$, a nonzero number."
                }
              ]
            },
            {
              "prompt": "Find $x - y$, given that $x^4 - y^4 = 4080$, $x^2 + y^2 = 68$ and $x + y = 10$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find $x - y$, given that $x^4 - y^4 = 4080$, $x^2 + y^2 = 68$ and $x + y = 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = y^2$, since $(x^2)^2 = x^4$ by the power law."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares again, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^4 - y^4 = (x - y)(x + y)(x^2 + y^2)$",
                  "reason": "Line 2, with $x^2 - y^2$ replaced by the product equal to it in line 3."
                },
                {
                  "step": "$4080 = (x - y) \\cdot 10 \\cdot 68$",
                  "reason": "Substituting a value: $x^4 - y^4$ is replaced by $4080$, $x + y$ by $10$ and $x^2 + y^2$ by $68$."
                },
                {
                  "step": "$(x - y) \\cdot 10 = 60$",
                  "reason": "Dividing both sides by $68$, a nonzero number."
                },
                {
                  "step": "$x - y = 6$",
                  "reason": "Dividing both sides by $10$, a nonzero number."
                }
              ]
            },
            {
              "prompt": "Find $x - y$, given that $x^4 - y^4 = 240$, $x^2 + y^2 = 20$ and $x + y = 6$.",
              "form": "Answer as an integer.",
              "answer": "2",
              "lines": [
                {
                  "step": "Find $x - y$, given that $x^4 - y^4 = 240$, $x^2 + y^2 = 20$ and $x + y = 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = y^2$, since $(x^2)^2 = x^4$ by the power law."
                },
                {
                  "step": "$x^2 - y^2 = (x - y)(x + y)$",
                  "reason": "Difference of squares again, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^4 - y^4 = (x - y)(x + y)(x^2 + y^2)$",
                  "reason": "Line 2, with $x^2 - y^2$ replaced by the product equal to it in line 3."
                },
                {
                  "step": "$240 = (x - y) \\cdot 6 \\cdot 20$",
                  "reason": "Substituting a value: $x^4 - y^4$ is replaced by $240$, $x + y$ by $6$ and $x^2 + y^2$ by $20$."
                },
                {
                  "step": "$(x - y) \\cdot 6 = 12$",
                  "reason": "Dividing both sides by $20$, a nonzero number."
                },
                {
                  "step": "$x - y = 2$",
                  "reason": "Dividing both sides by $6$, a nonzero number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k7",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this factoring of $6561x^4 - 2401y^4$, and write that line right.",
            "given": [
              "$6561x^4 - 2401y^4$",
              "$(81x^2 - 49y^2)^2$",
              "$\\left((9x - 7y)(9x + 7y)\\right)^2$",
              "$(9x - 7y)^2(9x + 7y)^2$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factoring of $6561x^4 - 2401y^4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 writes $6561x^4 - 2401y^4$ as $(81x^2 - 49y^2)^2$.",
                "reason": "A power taken term by term over a sum: square of a binomial gives $(81x^2 - 49y^2)^2 = 6561x^4 - 7938x^2y^2 + 2401y^4$, which has a middle term, while difference of squares gives $a^2 - b^2 = (a - b)(a + b)$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $(81x^2 - 49y^2)(81x^2 + 49y^2)$.",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 81x^2$ and $b = 49y^2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factoring of $32x^4 - 1250$, and write that line right.",
              "given": [
                "$32x^4 - 1250$",
                "$2(16x^4 - 625)$",
                "$2(4x^2 - 25)^2$",
                "$2(2x - 5)^2(2x + 5)^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 2*(4*x^2-25)*(4*x^2+25)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $32x^4 - 1250$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $16x^4 - 625$ as $(4x^2 - 25)^2$.",
                  "reason": "A power taken term by term over a sum: square of a binomial gives $(4x^2 - 25)^2 = 16x^4 - 200x^2 + 625$, which has a middle term, while difference of squares gives $a^2 - b^2 = (a - b)(a + b)$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $2(4x^2 - 25)(4x^2 + 25)$.",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 4x^2$ and $b = 25$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $x^4 - 20\\,736y^4$, and write that line right.",
              "given": [
                "$x^4 - 20\\,736y^4$",
                "$(x^2 - 144y^2)^2$",
                "$\\left((x - 12y)(x + 12y)\\right)^2$",
                "$(x - 12y)^2(x + 12y)^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (x^2-144*y^2)*(x^2+144*y^2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $x^4 - 20\\,736y^4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $x^4 - 20\\,736y^4$ as $(x^2 - 144y^2)^2$.",
                  "reason": "A power taken term by term over a sum: square of a binomial gives $(x^2 - 144y^2)^2 = x^4 - 288x^2y^2 + 20\\,736y^4$, which has a middle term, while difference of squares gives $a^2 - b^2 = (a - b)(a + b)$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $(x^2 - 144y^2)(x^2 + 144y^2)$.",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = x^2$ and $b = 144y^2$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $768x^4 - 3$, and write that line right.",
              "given": [
                "$768x^4 - 3$",
                "$3(256x^4 - 1)$",
                "$3(16x^2 - 1)(16x^2 + 1)$",
                "$3(4x - 1)^2(16x^2 + 1)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 3*(4*x-1)*(4*x+1)*(16*x^2+1)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $768x^4 - 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes $16x^2 - 1$ as $(4x - 1)^2$.",
                  "reason": "A power taken term by term over a sum: square of a binomial gives $(4x - 1)^2 = 16x^2 - 8x + 1$, which has a middle term, while difference of squares gives $a^2 - b^2 = (a - b)(a + b)$."
                },
                {
                  "step": "Line 4 written right is $3(4x - 1)(4x + 1)(16x^2 + 1)$.",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, used on the first bracket, with $a = 4x$ and $b = 1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this factoring of $81 - (x - 4)^2$, and write that line right.",
            "given": [
              "$81 - (x - 4)^2$",
              "$(9 - x - 4)(9 + x - 4)$",
              "$(5 - x)(5 + x)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factoring of $81 - (x - 4)^2$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 writes $9 - (x - 4)$ as $9 - x - 4$.",
                "reason": "A sign lost: subtracting a bracket changes every sign in it, so $9 - (x - 4) = 9 - x + 4$."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $(9 - x + 4)(9 + x - 4)$.",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 9$ and $b = x - 4$, and the minus sign in front of the bracket changing both of its signs."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factoring of $169 - (x + 7)^2$, and write that line right.",
              "given": [
                "$169 - (x + 7)^2$",
                "$\\left(13 - (x + 7)\\right)\\left(13 + (x + 7)\\right)$",
                "$(13 - x + 7)(13 + x + 7)$",
                "$(20 - x)(20 + x)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (13-x-7)*(13+x+7)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $169 - (x + 7)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $13 - (x + 7)$ as $13 - x + 7$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $13 - (x + 7) = 13 - x - 7$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $(13 - x - 7)(13 + x + 7)$.",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 13$ and $b = x + 7$, and the minus sign in front of the bracket changing both of its signs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $36 - (x - 5)^2$, and write that line right.",
              "given": [
                "$36 - (x - 5)^2$",
                "$(6 - x - 5)(6 + x - 5)$",
                "$(1 - x)(1 + x)$",
                "$1 - x^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (6-x+5)*(6+x-5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $36 - (x - 5)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 writes $6 - (x - 5)$ as $6 - x - 5$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $6 - (x - 5) = 6 - x + 5$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $(6 - x + 5)(6 + x - 5)$.",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 6$ and $b = x - 5$, and the minus sign in front of the bracket changing both of its signs."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factoring of $121 - (x - 9)^2$, and write that line right.",
              "given": [
                "$121 - (x - 9)^2$",
                "$\\left(11 - (x - 9)\\right)\\left(11 + (x - 9)\\right)$",
                "$(11 - x - 9)(11 + x - 9)$",
                "$(2 - x)(2 + x)$",
                "$4 - x^2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (11-x+9)*(11+x-9)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factoring of $121 - (x - 9)^2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $11 - (x - 9)$ as $11 - x - 9$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $11 - (x - 9) = 11 - x + 9$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $(11 - x + 9)(11 + x - 9)$.",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 11$ and $b = x - 9$, and the minus sign in front of the bracket changing both of its signs."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t138-k8",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ equals 33 more than the square of $y$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ equals 33 more than the square of $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of $x$ is $x^2$, and the square of $y$ is $y^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" raises the number to the power 2."
              },
              {
                "step": "33 more than that is $y^2 + 33$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "$x^2 = y^2 + 33$",
                "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ equals 17 more than the square of $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2 = y^2+17",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ equals 17 more than the square of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x$ is $x^2$, and the square of $y$ is $y^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the number to the power 2."
                },
                {
                  "step": "17 more than that is $y^2 + 17$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$x^2 = y^2 + 17$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ is 20 less than the square of $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2 = y^2-20",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ is 20 less than the square of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x$ is $x^2$, and the square of $y$ is $y^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the number to the power 2."
                },
                {
                  "step": "20 less than that is $y^2 - 20$.",
                  "reason": "Writing a sentence as an equation: \"less than\" takes the amount away from what follows the words."
                },
                {
                  "step": "$x^2 = y^2 - 20$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ equals 12 more than the square of $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2 = y^2+12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the square of $x$ on the left: The square of $x$ equals 12 more than the square of $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of $x$ is $x^2$, and the square of $y$ is $y^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the number to the power 2."
                },
                {
                  "step": "12 more than that is $y^2 + 12$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$x^2 = y^2 + 12$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the whole number $n$, the square of the next whole number minus the square of $n$ is 75.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the whole number $n$, the square of the next whole number minus the square of $n$ is 75.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The next whole number after $n$ is $n + 1$.",
                "reason": "Writing a sentence as an equation: consecutive whole numbers differ by $1$."
              },
              {
                "step": "Its square is $(n + 1)^2$, and the square of $n$ is $n^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
              },
              {
                "step": "The first square minus the second is $(n + 1)^2 - n^2$.",
                "reason": "Writing a sentence as an equation: \"minus\" subtracts what follows the word, in the sentence's order."
              },
              {
                "step": "$(n + 1)^2 - n^2 = 75$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the whole number $n$, the square of the next whole number minus the square of $n$ is 7.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(n+1)^2-n^2 = 7",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the whole number $n$, the square of the next whole number minus the square of $n$ is 7.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The next whole number after $n$ is $n + 1$.",
                  "reason": "Writing a sentence as an equation: consecutive whole numbers differ by $1$."
                },
                {
                  "step": "Its square is $(n + 1)^2$, and the square of $n$ is $n^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
                },
                {
                  "step": "The first square minus the second is $(n + 1)^2 - n^2$.",
                  "reason": "Writing a sentence as an equation: \"minus\" subtracts what follows the word, in the sentence's order."
                },
                {
                  "step": "$(n + 1)^2 - n^2 = 7$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the odd number $n$, the square of the next odd number minus the square of $n$ is 192.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(n+2)^2-n^2 = 192",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the odd number $n$, the square of the next odd number minus the square of $n$ is 192.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The next odd number after $n$ is $n + 2$.",
                  "reason": "Writing a sentence as an equation: consecutive odd numbers differ by $2$."
                },
                {
                  "step": "Its square is $(n + 2)^2$, and the square of $n$ is $n^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
                },
                {
                  "step": "The first square minus the second is $(n + 2)^2 - n^2$.",
                  "reason": "Writing a sentence as an equation: \"minus\" subtracts what follows the word, in the sentence's order."
                },
                {
                  "step": "$(n + 2)^2 - n^2 = 192$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the odd number $n$, the square of the next odd number minus the square of $n$ is 120.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(n+2)^2-n^2 = 120",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $n$, with the squares not multiplied out: for the odd number $n$, the square of the next odd number minus the square of $n$ is 120.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The next odd number after $n$ is $n + 2$.",
                  "reason": "Writing a sentence as an equation: consecutive odd numbers differ by $2$."
                },
                {
                  "step": "Its square is $(n + 2)^2$, and the square of $n$ is $n^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" raises the whole number, kept in a bracket, to the power 2."
                },
                {
                  "step": "The first square minus the second is $(n + 2)^2 - n^2$.",
                  "reason": "Writing a sentence as an equation: \"minus\" subtracts what follows the word, in the sentence's order."
                },
                {
                  "step": "$(n + 2)^2 - n^2 = 120$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
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
      "id": "t138-p1",
      "method": "direct proof",
      "statement": "For all numbers $a$ and $b$, $a^2 - b^2 = (a - b)(a + b)$.",
      "idea": "Multiply out the right side: of its four products, $ab$ and $-ba$ cancel, and $a^2 - b^2$ is left.",
      "lines": [
        {
          "line": "The product $(a - b)(a + b)$ equals $a \\cdot a + ab - ba - b \\cdot b$.",
          "reason": "Every term of one bracket times every term of the other, with the signs of products, from arithmetic."
        },
        {
          "line": "The product $ba$ equals $ab$.",
          "reason": "The commutative law of multiplication."
        },
        {
          "line": "The sum $ab - ab$ equals $0$.",
          "reason": "Collecting like terms: $(1 - 1)ab = 0$."
        },
        {
          "line": "So $(a - b)(a + b) = a \\cdot a - b \\cdot b$.",
          "reason": "Line 1, with $ba$ written $ab$ by line 2 and the two middle terms replaced by $0$ by line 3."
        },
        {
          "line": "The products $a \\cdot a$ and $b \\cdot b$ equal $a^2$ and $b^2$.",
          "reason": "The definition of a power, from arithmetic."
        },
        {
          "line": "Therefore $a^2 - b^2 = (a - b)(a + b)$.",
          "reason": "Line 4, with each product replaced by the power equal to it in line 5, and the symmetric property."
        }
      ]
    },
    {
      "id": "t138-p2",
      "method": "direct proof",
      "statement": "For every whole number $n$, $(n + 1)^2 - n^2 = 2n + 1$.",
      "idea": "The two squares are a difference of squares: the difference of $n + 1$ and $n$ is $1$, and their sum is $2n + 1$.",
      "lines": [
        {
          "line": "The difference $(n + 1)^2 - n^2$ equals $\\left((n + 1) - n\\right)\\left((n + 1) + n\\right)$.",
          "reason": "Difference of squares, with $a = n + 1$ and $b = n$."
        },
        {
          "line": "The difference $(n + 1) - n$ equals $1$.",
          "reason": "Subtracting a bracket changes every sign in it, and $n - n = 0$."
        },
        {
          "line": "The sum $(n + 1) + n$ equals $2n + 1$.",
          "reason": "Collecting like terms."
        },
        {
          "line": "Therefore $(n + 1)^2 - n^2 = 2n + 1$.",
          "reason": "Line 1, with each bracket replaced by the expression equal to it in lines 2 and 3, and one times a number is the number, from arithmetic."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t138-s2",
      "method": "proof of existence by construction",
      "statement": "Prove that every odd whole number is the difference of the squares of two whole numbers. Facts it may use: even whole numbers (from arithmetic), consecutive squares differ by $2n + 1$.",
      "check": {
        "proof": [
          {
            "line": "Let $m$ be an odd whole number.",
            "reason": "The statement is about every odd whole number, so one of them is named."
          },
          {
            "line": "The number $m - 1$ is even.",
            "reason": "Even whole numbers, from arithmetic: $m$ is odd, so $m - 1$ is even."
          },
          {
            "line": "So $m - 1 = 2k$ for a whole number $k$.",
            "reason": "Even whole numbers, from arithmetic: $2$ divides every even number."
          },
          {
            "line": "So $m = 2k + 1$.",
            "reason": "Adding $1$ to both sides of line 3."
          },
          {
            "line": "The difference $(k + 1)^2 - k^2$ equals $2k + 1$.",
            "reason": "Consecutive squares differ by $2n + 1$, with $n = k$."
          },
          {
            "line": "So $m = (k + 1)^2 - k^2$, where $k + 1$ and $k$ are whole numbers.",
            "reason": "Lines 4 and 5 and the transitive property."
          },
          {
            "line": "Therefore every odd whole number is the difference of the squares of two whole numbers.",
            "reason": "Line 6 builds the two whole numbers for the odd number named in line 1, and that number was chosen with no condition beyond being odd."
          }
        ]
      }
    },
    {
      "id": "t138-s3",
      "method": "proof by cases",
      "statement": "Prove that no whole number of the form $4k + 2$, with $k$ a whole number, is the difference of the squares of two whole numbers. Facts it may use: difference of squares, even whole numbers and divisibility (from arithmetic), the divisibility of a sum (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "Suppose that $m^2 - n^2 = 4k + 2$ for whole numbers $m$, $n$ and $k$.",
            "reason": "The two cases below show that this cannot happen."
          },
          {
            "line": "Then $(m - n)(m + n) = 4k + 2$.",
            "reason": "Difference of squares, with $a = m$ and $b = n$."
          },
          {
            "line": "The difference $(m + n) - (m - n)$ equals $2n$, which is even.",
            "reason": "Subtracting a bracket changes every sign in it, then collecting like terms."
          },
          {
            "line": "So $m - n$ and $m + n$ are both even or both odd.",
            "reason": "The divisibility of a sum, from arithmetic, used with line 3."
          },
          {
            "line": "Case 1: both are even. Then $m - n = 2r$ and $m + n = 2s$ for integers $r$ and $s$.",
            "reason": "Even whole numbers, from arithmetic."
          },
          {
            "line": "In case 1, $(m - n)(m + n) = 4rs$.",
            "reason": "The commutative and associative laws of multiplication, used on line 5."
          },
          {
            "line": "In case 1, $4$ divides $4k + 2$.",
            "reason": "Lines 2 and 6."
          },
          {
            "line": "In case 1, $4$ also divides $4k$, so $4$ divides $2$, which is false.",
            "reason": "The fact from arithmetic that a number dividing two of $A = B + C$ divides the third, used on line 7."
          },
          {
            "line": "Case 2: both are odd. Then $m - n = 2r + 1$ and $m + n = 2s + 1$ for integers $r$ and $s$.",
            "reason": "Even whole numbers, from arithmetic."
          },
          {
            "line": "In case 2, $(m - n)(m + n) = 2(2rs + r + s) + 1$.",
            "reason": "Every term of one bracket times every term of the other, used on line 9."
          },
          {
            "line": "In case 2, $4k + 2 = 2(2k + 1)$ is even and $2(2rs + r + s) + 1$ is odd, so lines 2 and 10 set an even number equal to an odd one, which is false.",
            "reason": "Even whole numbers, from arithmetic: $2$ divides $2(2rs + r + s)$, so it does not divide that number plus $1$."
          },
          {
            "line": "Therefore no whole number of the form $4k + 2$ is the difference of the squares of two whole numbers.",
            "reason": "Line 4 leaves only the two cases, and each of them is false."
          }
        ]
      }
    },
    {
      "id": "t138-s4",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$ and $b$, $a^4 + 4b^4 = (a^2 - 2ab + 2b^2)(a^2 + 2ab + 2b^2)$. Facts it may use: square of a binomial, power of a product, adding and subtracting a square, difference of squares, the commutative law of addition.",
      "check": {
        "proof": [
          {
            "line": "The square $(a^2 + 2b^2)^2$ equals $a^4 + 4a^2b^2 + 4b^4$.",
            "reason": "Square of a binomial, with $a^2$ and $2b^2$ as the two terms, and power of a product."
          },
          {
            "line": "So $a^4 + 4b^4 = (a^2 + 2b^2)^2 - 4a^2b^2$.",
            "reason": "Adding and subtracting a square: taking $4a^2b^2$ from both sides of line 1."
          },
          {
            "line": "The term $4a^2b^2$ equals $(2ab)^2$.",
            "reason": "Power of a product."
          },
          {
            "line": "So $a^4 + 4b^4 = (a^2 + 2b^2 - 2ab)(a^2 + 2b^2 + 2ab)$.",
            "reason": "Difference of squares, with $a^2 + 2b^2$ as the first square and $2ab$ as the second, used on line 2 after line 3."
          },
          {
            "line": "Therefore $a^4 + 4b^4 = (a^2 - 2ab + 2b^2)(a^2 + 2ab + 2b^2)$.",
            "reason": "The commutative law of addition puts the terms of each bracket in order."
          }
        ]
      }
    }
  ]
}
