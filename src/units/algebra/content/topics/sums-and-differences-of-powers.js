export default {
  "number": 206,
  "title": "Differences and sums of nth powers",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "268-276"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Factor $32x^5 - 243$.",
    "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
    "answer": "(2*x-3)*(16*x^4+24*x^3+36*x^2+54*x+81)",
    "solution": [
      "Factor $32x^5 - 243$.",
      "$32x^5 - 243 = (2x)^5 - 3^5$",
      "$(2x)^5 - 3^5 = (2x - 3)\\left((2x)^4 + (2x)^3 \\cdot 3 + (2x)^2 \\cdot 3^2 + 2x \\cdot 3^3 + 3^4\\right)$",
      "$32x^5 - 243 = (2x - 3)(16x^4 + 24x^3 + 36x^2 + 54x + 81)$"
    ]
  },
  "ideas": [
    {
      "name": "Difference of nth powers",
      "concrete": "Multiplying out $(x - 7)(x^3 + 7x^2 + 49x + 343)$ gives $x^4 + 7x^3 + 49x^2 + 343x - 7x^3 - 49x^2 - 343x - 2401$: every term but the first and the last cancels, so $(x - 7)(x^3 + 7x^2 + 49x + 343) = x^4 - 2401$, and $x^4 - 2401$ has the factor $x - 7$.",
      "general": "For every whole number $n$ with $n \\ge 2$ and all numbers $x$ and $y$, $x^n - y^n = (x - y)(x^{n-1} + x^{n-2}y + \\dots + xy^{n-2} + y^{n-1})$. This is the **Difference of nth powers**. The second bracket has $n$ terms, each with the sign $+$: from each term to the next the power of $x$ falls by one and the power of $y$ rises by one."
    },
    {
      "name": "Sum of odd powers",
      "concrete": "Multiplying out $(x + 6)(x^4 - 6x^3 + 36x^2 - 216x + 1296)$ gives $x^5 - 6x^4 + 36x^3 - 216x^2 + 1296x + 6x^4 - 36x^3 + 216x^2 - 1296x + 7776$: every term but the first and the last cancels, so $(x + 6)(x^4 - 6x^3 + 36x^2 - 216x + 1296) = x^5 + 7776$.",
      "general": "For every odd whole number $n$ with $n \\ge 3$ and all numbers $x$ and $y$, $x^n + y^n = (x + y)(x^{n-1} - x^{n-2}y + \\dots - xy^{n-2} + y^{n-1})$. This is the **Sum of odd powers**. The signs of the second bracket alternate, and the first and the last are $+$. For an even whole number $n$ and a number $y$ other than $0$, putting $-y$ for $x$ in $x^n + y^n$ gives $2y^n$, which is not $0$, so by the Factor Theorem $x + y$ is not a factor of $x^n + y^n$."
    }
  ],
  "kinds": [
    {
      "id": "t206-k1",
      "forms": [
        {
          "example": {
            "problem": "Factor $1024x^5 - 3125$.",
            "lines": [
              {
                "step": "Factor $1024x^5 - 3125$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1024x^5 - 3125 = (4x)^5 - 5^5$",
                "reason": "Power of a product: $(4x)^5 = 4^5x^5 = 1024x^5$ and $5^5 = 3125$."
              },
              {
                "step": "$(4x)^5 - 5^5 = (4x - 5)\\left((4x)^4 + (4x)^3 \\cdot 5 + (4x)^2 \\cdot 5^2 + 4x \\cdot 5^3 + 5^4\\right)$",
                "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 4x$ and $b = 5$."
              },
              {
                "step": "$1024x^5 - 3125 = (4x - 5)(256x^4 + 320x^3 + 400x^2 + 500x + 625)$",
                "reason": "Power of a product and the multiplication of whole numbers, term by term: $(4x)^4 = 256x^4$, $(4x)^3 \\cdot 5 = 320x^3$, $(4x)^2 \\cdot 5^2 = 400x^2$, $4x \\cdot 5^3 = 500x$ and $5^4 = 625$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $243t^5 - 16\\,807$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(3*t-7)*(81*t^4+189*t^3+441*t^2+1029*t+2401)",
              "lines": [
                {
                  "step": "Factor $243t^5 - 16\\,807$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$243t^5 - 16\\,807 = (3t)^5 - 7^5$",
                  "reason": "Power of a product: $(3t)^5 = 3^5t^5 = 243t^5$ and $7^5 = 16\\,807$."
                },
                {
                  "step": "$(3t)^5 - 7^5 = (3t - 7)\\left((3t)^4 + (3t)^3 \\cdot 7 + (3t)^2 \\cdot 7^2 + 3t \\cdot 7^3 + 7^4\\right)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 3t$ and $b = 7$."
                },
                {
                  "step": "$243t^5 - 16\\,807 = (3t - 7)(81t^4 + 189t^3 + 441t^2 + 1029t + 2401)$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(3t)^4 = 81t^4$, $(3t)^3 \\cdot 7 = 189t^3$, $(3t)^2 \\cdot 7^2 = 441t^2$, $3t \\cdot 7^3 = 1029t$ and $7^4 = 2401$."
                }
              ]
            },
            {
              "prompt": "Factor $32z^5 - 3125$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*z-5)*(16*z^4+40*z^3+100*z^2+250*z+625)",
              "lines": [
                {
                  "step": "Factor $32z^5 - 3125$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$32z^5 - 3125 = (2z)^5 - 5^5$",
                  "reason": "Power of a product: $(2z)^5 = 2^5z^5 = 32z^5$ and $5^5 = 3125$."
                },
                {
                  "step": "$(2z)^5 - 5^5 = (2z - 5)\\left((2z)^4 + (2z)^3 \\cdot 5 + (2z)^2 \\cdot 5^2 + 2z \\cdot 5^3 + 5^4\\right)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 2z$ and $b = 5$."
                },
                {
                  "step": "$32z^5 - 3125 = (2z - 5)(16z^4 + 40z^3 + 100z^2 + 250z + 625)$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(2z)^4 = 16z^4$, $(2z)^3 \\cdot 5 = 40z^3$, $(2z)^2 \\cdot 5^2 = 100z^2$, $2z \\cdot 5^3 = 250z$ and $5^4 = 625$."
                }
              ]
            },
            {
              "prompt": "Factor $243y^5 - 1024$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(3*y-4)*(81*y^4+108*y^3+144*y^2+192*y+256)",
              "lines": [
                {
                  "step": "Factor $243y^5 - 1024$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$243y^5 - 1024 = (3y)^5 - 4^5$",
                  "reason": "Power of a product: $(3y)^5 = 3^5y^5 = 243y^5$ and $4^5 = 1024$."
                },
                {
                  "step": "$(3y)^5 - 4^5 = (3y - 4)\\left((3y)^4 + (3y)^3 \\cdot 4 + (3y)^2 \\cdot 4^2 + 3y \\cdot 4^3 + 4^4\\right)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 3y$ and $b = 4$."
                },
                {
                  "step": "$243y^5 - 1024 = (3y - 4)(81y^4 + 108y^3 + 144y^2 + 192y + 256)$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(3y)^4 = 81y^4$, $(3y)^3 \\cdot 4 = 108y^3$, $(3y)^2 \\cdot 4^2 = 144y^2$, $3y \\cdot 4^3 = 192y$ and $4^4 = 256$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Factor $1024x^{10} - 1$ completely.",
            "lines": [
              {
                "step": "Factor $1024x^{10} - 1$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$1024x^{10} - 1 = (32x^5)^2 - 1^2$",
                "reason": "Power law and power of a product: $(32x^5)^2 = 32^2(x^5)^2 = 1024x^{10}$, and $1^2 = 1$."
              },
              {
                "step": "$(32x^5)^2 - 1^2 = (32x^5 - 1)(32x^5 + 1)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 32x^5$ and $b = 1$."
              },
              {
                "step": "$32x^5 - 1 = (2x - 1)(16x^4 + 8x^3 + 4x^2 + 2x + 1)$",
                "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 2x$ and $b = 1$, since $(2x)^5 = 32x^5$ and $1^5 = 1$."
              },
              {
                "step": "$32x^5 + 1 = (2x + 1)(16x^4 - 8x^3 + 4x^2 - 2x + 1)$",
                "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 2x$ and $b = 1$, since $(2x)^5 = 32x^5$ and $1^5 = 1$."
              },
              {
                "step": "$1024x^{10} - 1 = (2x - 1)(16x^4 + 8x^3 + 4x^2 + 2x + 1)(2x + 1)(16x^4 - 8x^3 + 4x^2 - 2x + 1)$",
                "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $59\\,049t^{10} - 1$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(3*t-1)*(81*t^4+27*t^3+9*t^2+3*t+1)*(3*t+1)*(81*t^4-27*t^3+9*t^2-3*t+1)",
              "lines": [
                {
                  "step": "Factor $59\\,049t^{10} - 1$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$59\\,049t^{10} - 1 = (243t^5)^2 - 1^2$",
                  "reason": "Power law and power of a product: $(243t^5)^2 = 243^2(t^5)^2 = 59\\,049t^{10}$, and $1^2 = 1$."
                },
                {
                  "step": "$(243t^5)^2 - 1^2 = (243t^5 - 1)(243t^5 + 1)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 243t^5$ and $b = 1$."
                },
                {
                  "step": "$243t^5 - 1 = (3t - 1)(81t^4 + 27t^3 + 9t^2 + 3t + 1)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 3t$ and $b = 1$, since $(3t)^5 = 243t^5$ and $1^5 = 1$."
                },
                {
                  "step": "$243t^5 + 1 = (3t + 1)(81t^4 - 27t^3 + 9t^2 - 3t + 1)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 3t$ and $b = 1$, since $(3t)^5 = 243t^5$ and $1^5 = 1$."
                },
                {
                  "step": "$59\\,049t^{10} - 1 = (3t - 1)(81t^4 + 27t^3 + 9t^2 + 3t + 1)(3t + 1)(81t^4 - 27t^3 + 9t^2 - 3t + 1)$",
                  "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Factor $9\\,765\\,625x^{10} - 59\\,049$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(5*x-3)*(625*x^4+375*x^3+225*x^2+135*x+81)*(5*x+3)*(625*x^4-375*x^3+225*x^2-135*x+81)",
              "lines": [
                {
                  "step": "Factor $9\\,765\\,625x^{10} - 59\\,049$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9\\,765\\,625x^{10} - 59\\,049 = (3125x^5)^2 - 243^2$",
                  "reason": "Power law and power of a product: $(3125x^5)^2 = 3125^2(x^5)^2 = 9\\,765\\,625x^{10}$, and $243^2 = 59\\,049$."
                },
                {
                  "step": "$(3125x^5)^2 - 243^2 = (3125x^5 - 243)(3125x^5 + 243)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 3125x^5$ and $b = 243$."
                },
                {
                  "step": "$3125x^5 - 243 = (5x - 3)(625x^4 + 375x^3 + 225x^2 + 135x + 81)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 5x$ and $b = 3$, since $(5x)^5 = 3125x^5$ and $3^5 = 243$."
                },
                {
                  "step": "$3125x^5 + 243 = (5x + 3)(625x^4 - 375x^3 + 225x^2 - 135x + 81)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 5x$ and $b = 3$, since $(5x)^5 = 3125x^5$ and $3^5 = 243$."
                },
                {
                  "step": "$9\\,765\\,625x^{10} - 59\\,049 = (5x - 3)(625x^4 + 375x^3 + 225x^2 + 135x + 81)(5x + 3)(625x^4 - 375x^3 + 225x^2 - 135x + 81)$",
                  "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
                }
              ]
            },
            {
              "prompt": "Factor $16\\,384y^{14} - 1$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(2*y-1)*(64*y^6+32*y^5+16*y^4+8*y^3+4*y^2+2*y+1)*(2*y+1)*(64*y^6-32*y^5+16*y^4-8*y^3+4*y^2-2*y+1)",
              "lines": [
                {
                  "step": "Factor $16\\,384y^{14} - 1$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16\\,384y^{14} - 1 = (128y^7)^2 - 1^2$",
                  "reason": "Power law and power of a product: $(128y^7)^2 = 128^2(y^7)^2 = 16\\,384y^{14}$, and $1^2 = 1$."
                },
                {
                  "step": "$(128y^7)^2 - 1^2 = (128y^7 - 1)(128y^7 + 1)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = 128y^7$ and $b = 1$."
                },
                {
                  "step": "$128y^7 - 1 = (2y - 1)(64y^6 + 32y^5 + 16y^4 + 8y^3 + 4y^2 + 2y + 1)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 7$, $a = 2y$ and $b = 1$, since $(2y)^7 = 128y^7$ and $1^7 = 1$."
                },
                {
                  "step": "$128y^7 + 1 = (2y + 1)(64y^6 - 32y^5 + 16y^4 - 8y^3 + 4y^2 - 2y + 1)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 7$, $a = 2y$ and $b = 1$, since $(2y)^7 = 128y^7$ and $1^7 = 1$."
                },
                {
                  "step": "$16\\,384y^{14} - 1 = (2y - 1)(64y^6 + 32y^5 + 16y^4 + 8y^3 + 4y^2 + 2y + 1)(2y + 1)(64y^6 - 32y^5 + 16y^4 - 8y^3 + 4y^2 - 2y + 1)$",
                  "reason": "Line 3, with each bracket replaced by the product equal to it in lines 4 and 5."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t206-k2",
      "forms": [
        {
          "example": {
            "problem": "Factor $243x^5 + 3125$.",
            "lines": [
              {
                "step": "Factor $243x^5 + 3125$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$243x^5 + 3125 = (3x)^5 + 5^5$",
                "reason": "Power of a product: $(3x)^5 = 3^5x^5 = 243x^5$ and $5^5 = 3125$."
              },
              {
                "step": "$(3x)^5 + 5^5 = (3x + 5)\\left((3x)^4 - (3x)^3 \\cdot 5 + (3x)^2 \\cdot 5^2 - 3x \\cdot 5^3 + 5^4\\right)$",
                "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 3x$ and $b = 5$."
              },
              {
                "step": "$243x^5 + 3125 = (3x + 5)(81x^4 - 135x^3 + 225x^2 - 375x + 625)$",
                "reason": "Power of a product and the multiplication of whole numbers, term by term: $(3x)^4 = 81x^4$, $(3x)^3 \\cdot 5 = 135x^3$, $(3x)^2 \\cdot 5^2 = 225x^2$, $3x \\cdot 5^3 = 375x$ and $5^4 = 625$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $78\\,125t^7 + 1$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(5*t+1)*(15625*t^6-3125*t^5+625*t^4-125*t^3+25*t^2-5*t+1)",
              "lines": [
                {
                  "step": "Factor $78\\,125t^7 + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$78\\,125t^7 + 1 = (5t)^7 + 1^7$",
                  "reason": "Power of a product: $(5t)^7 = 5^7t^7 = 78\\,125t^7$ and $1^7 = 1$."
                },
                {
                  "step": "$(5t)^7 + 1^7 = (5t + 1)\\left((5t)^6 - (5t)^5 + (5t)^4 - (5t)^3 + (5t)^2 - 5t + 1\\right)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 7$, $a = 5t$ and $b = 1$."
                },
                {
                  "step": "$78\\,125t^7 + 1 = (5t + 1)(15\\,625t^6 - 3125t^5 + 625t^4 - 125t^3 + 25t^2 - 5t + 1)$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(5t)^6 = 15\\,625t^6$, $(5t)^5 = 3125t^5$, $(5t)^4 = 625t^4$, $(5t)^3 = 125t^3$ and $(5t)^2 = 25t^2$."
                }
              ]
            },
            {
              "prompt": "Factor $3125z^5 + 7776$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(5*z+6)*(625*z^4-750*z^3+900*z^2-1080*z+1296)",
              "lines": [
                {
                  "step": "Factor $3125z^5 + 7776$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3125z^5 + 7776 = (5z)^5 + 6^5$",
                  "reason": "Power of a product: $(5z)^5 = 5^5z^5 = 3125z^5$ and $6^5 = 7776$."
                },
                {
                  "step": "$(5z)^5 + 6^5 = (5z + 6)\\left((5z)^4 - (5z)^3 \\cdot 6 + (5z)^2 \\cdot 6^2 - 5z \\cdot 6^3 + 6^4\\right)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 5z$ and $b = 6$."
                },
                {
                  "step": "$3125z^5 + 7776 = (5z + 6)(625z^4 - 750z^3 + 900z^2 - 1080z + 1296)$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(5z)^4 = 625z^4$, $(5z)^3 \\cdot 6 = 750z^3$, $(5z)^2 \\cdot 6^2 = 900z^2$, $5z \\cdot 6^3 = 1080z$ and $6^4 = 1296$."
                }
              ]
            },
            {
              "prompt": "Factor $16\\,807y^5 + 1024$.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(7*y+4)*(2401*y^4-1372*y^3+784*y^2-448*y+256)",
              "lines": [
                {
                  "step": "Factor $16\\,807y^5 + 1024$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16\\,807y^5 + 1024 = (7y)^5 + 4^5$",
                  "reason": "Power of a product: $(7y)^5 = 7^5y^5 = 16\\,807y^5$ and $4^5 = 1024$."
                },
                {
                  "step": "$(7y)^5 + 4^5 = (7y + 4)\\left((7y)^4 - (7y)^3 \\cdot 4 + (7y)^2 \\cdot 4^2 - 7y \\cdot 4^3 + 4^4\\right)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 7y$ and $b = 4$."
                },
                {
                  "step": "$16\\,807y^5 + 1024 = (7y + 4)(2401y^4 - 1372y^3 + 784y^2 - 448y + 256)$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(7y)^4 = 2401y^4$, $(7y)^3 \\cdot 4 = 1372y^3$, $(7y)^2 \\cdot 4^2 = 784y^2$, $7y \\cdot 4^3 = 448y$ and $4^4 = 256$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t206-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the whole number $n$ for which $13^{8} = x^n$ and $5^{8} = y^n$ for whole numbers $x$ and $y$ with $x - y = 144$, which shows that $144$ divides $13^{8} - 5^{8}$.",
            "lines": [
              {
                "step": "Find the whole number $n$ for which $13^{8} = x^n$ and $5^{8} = y^n$ for whole numbers $x$ and $y$ with $x - y = 144$, which shows that $144$ divides $13^{8} - 5^{8}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number $144$ is $13^2 - 5^2$, since $13^2 = 169$ and $5^2 = 25$.",
                "reason": "The definition of a power, from arithmetic: the divisor is matched with a difference of equal powers of $13$ and $5$."
              },
              {
                "step": "$13^{8} - 5^{8} = (13^2)^4 - (5^2)^4$",
                "reason": "Power law: $(13^2)^4 = 13^{2 \\cdot 4} = 13^{8}$ and $(5^2)^4 = 5^{2 \\cdot 4} = 5^{8}$."
              },
              {
                "step": "$169^4 - 25^4 = (169 - 25)(169^3 + 169^2 \\cdot 25 + 169 \\cdot 25^2 + 25^3)$",
                "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 4$, $a = 169$ and $b = 25$."
              },
              {
                "step": "The number $13^{8} - 5^{8}$ is $144$ times an integer, so $144$ divides it.",
                "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
              },
              {
                "step": "$n = 4$",
                "reason": "Line 3 and line 2: $13^{8} = 169^4$ and $5^{8} = 25^4$, with $169 - 25 = 144$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number $n$ for which $7^{12} = x^n$ and $2^{12} = y^n$ for whole numbers $x$ and $y$ with $x - y = 45$, which shows that $45$ divides $7^{12} - 2^{12}$.",
              "form": "Answer as an integer.",
              "answer": "6",
              "lines": [
                {
                  "step": "Find the whole number $n$ for which $7^{12} = x^n$ and $2^{12} = y^n$ for whole numbers $x$ and $y$ with $x - y = 45$, which shows that $45$ divides $7^{12} - 2^{12}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $45$ is $7^2 - 2^2$, since $7^2 = 49$ and $2^2 = 4$.",
                  "reason": "The definition of a power, from arithmetic: the divisor is matched with a difference of equal powers of $7$ and $2$."
                },
                {
                  "step": "$7^{12} - 2^{12} = (7^2)^6 - (2^2)^6$",
                  "reason": "Power law: $(7^2)^6 = 7^{2 \\cdot 6} = 7^{12}$ and $(2^2)^6 = 2^{2 \\cdot 6} = 2^{12}$."
                },
                {
                  "step": "$49^6 - 4^6 = (49 - 4)(49^5 + 49^4 \\cdot 4 + \\dots + 49 \\cdot 4^4 + 4^5)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 6$, $a = 49$ and $b = 4$."
                },
                {
                  "step": "The number $7^{12} - 2^{12}$ is $45$ times an integer, so $45$ divides it.",
                  "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
                },
                {
                  "step": "$n = 6$",
                  "reason": "Line 3 and line 2: $7^{12} = 49^6$ and $2^{12} = 4^6$, with $49 - 4 = 45$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $n$ for which $12^{6} = x^n$ and $11^{6} = y^n$ for whole numbers $x$ and $y$ with $x - y = 23$, which shows that $23$ divides $12^{6} - 11^{6}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the whole number $n$ for which $12^{6} = x^n$ and $11^{6} = y^n$ for whole numbers $x$ and $y$ with $x - y = 23$, which shows that $23$ divides $12^{6} - 11^{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $23$ is $12^2 - 11^2$, since $12^2 = 144$ and $11^2 = 121$.",
                  "reason": "The definition of a power, from arithmetic: the divisor is matched with a difference of equal powers of $12$ and $11$."
                },
                {
                  "step": "$12^{6} - 11^{6} = (12^2)^3 - (11^2)^3$",
                  "reason": "Power law: $(12^2)^3 = 12^{2 \\cdot 3} = 12^{6}$ and $(11^2)^3 = 11^{2 \\cdot 3} = 11^{6}$."
                },
                {
                  "step": "$144^3 - 121^3 = (144 - 121)(144^2 + 144 \\cdot 121 + 121^2)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 3$, $a = 144$ and $b = 121$."
                },
                {
                  "step": "The number $12^{6} - 11^{6}$ is $23$ times an integer, so $23$ divides it.",
                  "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
                },
                {
                  "step": "$n = 3$",
                  "reason": "Line 3 and line 2: $12^{6} = 144^3$ and $11^{6} = 121^3$, with $144 - 121 = 23$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $n$ for which $5^{15} = x^n$ and $2^{15} = y^n$ for whole numbers $x$ and $y$ with $x - y = 117$, which shows that $117$ divides $5^{15} - 2^{15}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "Find the whole number $n$ for which $5^{15} = x^n$ and $2^{15} = y^n$ for whole numbers $x$ and $y$ with $x - y = 117$, which shows that $117$ divides $5^{15} - 2^{15}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $117$ is $5^3 - 2^3$, since $5^3 = 125$ and $2^3 = 8$.",
                  "reason": "The definition of a power, from arithmetic: the divisor is matched with a difference of equal powers of $5$ and $2$."
                },
                {
                  "step": "$5^{15} - 2^{15} = (5^3)^5 - (2^3)^5$",
                  "reason": "Power law: $(5^3)^5 = 5^{3 \\cdot 5} = 5^{15}$ and $(2^3)^5 = 2^{3 \\cdot 5} = 2^{15}$."
                },
                {
                  "step": "$125^5 - 8^5 = (125 - 8)(125^4 + 125^3 \\cdot 8 + 125^2 \\cdot 8^2 + 125 \\cdot 8^3 + 8^4)$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 5$, $a = 125$ and $b = 8$."
                },
                {
                  "step": "The number $5^{15} - 2^{15}$ is $117$ times an integer, so $117$ divides it.",
                  "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
                },
                {
                  "step": "$n = 5$",
                  "reason": "Line 3 and line 2: $5^{15} = 125^5$ and $2^{15} = 8^5$, with $125 - 8 = 117$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole number $n$ for which $11^{15} = x^n$ and $14^{15} = y^n$ for whole numbers $x$ and $y$ with $x + y = 4075$, which shows that $4075$ divides $11^{15} + 14^{15}$.",
            "lines": [
              {
                "step": "Find the whole number $n$ for which $11^{15} = x^n$ and $14^{15} = y^n$ for whole numbers $x$ and $y$ with $x + y = 4075$, which shows that $4075$ divides $11^{15} + 14^{15}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number $4075$ is $11^3 + 14^3$, since $11^3 = 1331$ and $14^3 = 2744$.",
                "reason": "The definition of a power, from arithmetic: the divisor is matched with a sum of equal powers of $11$ and $14$."
              },
              {
                "step": "$11^{15} + 14^{15} = (11^3)^5 + (14^3)^5$",
                "reason": "Power law: $(11^3)^5 = 11^{3 \\cdot 5} = 11^{15}$ and $(14^3)^5 = 14^{3 \\cdot 5} = 14^{15}$."
              },
              {
                "step": "$1331^5 + 2744^5 = (1331 + 2744)(1331^4 - 1331^3 \\cdot 2744 + 1331^2 \\cdot 2744^2 - 1331 \\cdot 2744^3 + 2744^4)$",
                "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 1331$ and $b = 2744$."
              },
              {
                "step": "The number $11^{15} + 14^{15}$ is $4075$ times an integer, so $4075$ divides it.",
                "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
              },
              {
                "step": "$n = 5$",
                "reason": "Line 3 and line 2: $11^{15} = 1331^5$ and $14^{15} = 2744^5$, with $1331 + 2744 = 4075$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number $n$ for which $6^{9} = x^n$ and $7^{9} = y^n$ for whole numbers $x$ and $y$ with $x + y = 559$, which shows that $559$ divides $6^{9} + 7^{9}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "Find the whole number $n$ for which $6^{9} = x^n$ and $7^{9} = y^n$ for whole numbers $x$ and $y$ with $x + y = 559$, which shows that $559$ divides $6^{9} + 7^{9}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $559$ is $6^3 + 7^3$, since $6^3 = 216$ and $7^3 = 343$.",
                  "reason": "The definition of a power, from arithmetic: the divisor is matched with a sum of equal powers of $6$ and $7$."
                },
                {
                  "step": "$6^{9} + 7^{9} = (6^3)^3 + (7^3)^3$",
                  "reason": "Power law: $(6^3)^3 = 6^{3 \\cdot 3} = 6^{9}$ and $(7^3)^3 = 7^{3 \\cdot 3} = 7^{9}$."
                },
                {
                  "step": "$216^3 + 343^3 = (216 + 343)(216^2 - 216 \\cdot 343 + 343^2)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 3$, $a = 216$ and $b = 343$."
                },
                {
                  "step": "The number $6^{9} + 7^{9}$ is $559$ times an integer, so $559$ divides it.",
                  "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
                },
                {
                  "step": "$n = 3$",
                  "reason": "Line 3 and line 2: $6^{9} = 216^3$ and $7^{9} = 343^3$, with $216 + 343 = 559$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $n$ for which $15^{21} = x^n$ and $2^{21} = y^n$ for whole numbers $x$ and $y$ with $x + y = 3383$, which shows that $3383$ divides $15^{21} + 2^{21}$.",
              "form": "Answer as an integer.",
              "answer": "7",
              "lines": [
                {
                  "step": "Find the whole number $n$ for which $15^{21} = x^n$ and $2^{21} = y^n$ for whole numbers $x$ and $y$ with $x + y = 3383$, which shows that $3383$ divides $15^{21} + 2^{21}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $3383$ is $15^3 + 2^3$, since $15^3 = 3375$ and $2^3 = 8$.",
                  "reason": "The definition of a power, from arithmetic: the divisor is matched with a sum of equal powers of $15$ and $2$."
                },
                {
                  "step": "$15^{21} + 2^{21} = (15^3)^7 + (2^3)^7$",
                  "reason": "Power law: $(15^3)^7 = 15^{3 \\cdot 7} = 15^{21}$ and $(2^3)^7 = 2^{3 \\cdot 7} = 2^{21}$."
                },
                {
                  "step": "$3375^7 + 8^7 = (3375 + 8)(3375^6 - 3375^5 \\cdot 8 + \\dots - 3375 \\cdot 8^5 + 8^6)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 7$, $a = 3375$ and $b = 8$."
                },
                {
                  "step": "The number $15^{21} + 2^{21}$ is $3383$ times an integer, so $3383$ divides it.",
                  "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
                },
                {
                  "step": "$n = 7$",
                  "reason": "Line 3 and line 2: $15^{21} = 3375^7$ and $2^{21} = 8^7$, with $3375 + 8 = 3383$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $n$ for which $12^{18} = x^n$ and $7^{18} = y^n$ for whole numbers $x$ and $y$ with $x + y = 193$, which shows that $193$ divides $12^{18} + 7^{18}$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the whole number $n$ for which $12^{18} = x^n$ and $7^{18} = y^n$ for whole numbers $x$ and $y$ with $x + y = 193$, which shows that $193$ divides $12^{18} + 7^{18}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number $193$ is $12^2 + 7^2$, since $12^2 = 144$ and $7^2 = 49$.",
                  "reason": "The definition of a power, from arithmetic: the divisor is matched with a sum of equal powers of $12$ and $7$."
                },
                {
                  "step": "$12^{18} + 7^{18} = (12^2)^9 + (7^2)^9$",
                  "reason": "Power law: $(12^2)^9 = 12^{2 \\cdot 9} = 12^{18}$ and $(7^2)^9 = 7^{2 \\cdot 9} = 7^{18}$."
                },
                {
                  "step": "$144^9 + 49^9 = (144 + 49)(144^8 - 144^7 \\cdot 49 + \\dots - 144 \\cdot 49^7 + 49^8)$",
                  "reason": "Sum of odd powers: $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 9$, $a = 144$ and $b = 49$."
                },
                {
                  "step": "The number $12^{18} + 7^{18}$ is $193$ times an integer, so $193$ divides it.",
                  "reason": "The definition of divides, from arithmetic: the second bracket of line 4 is an integer."
                },
                {
                  "step": "$n = 9$",
                  "reason": "Line 3 and line 2: $12^{18} = 144^9$ and $7^{18} = 49^9$, with $144 + 49 = 193$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t206-k4",
      "forms": [
        {
          "example": {
            "problem": "Factor $32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243$ completely.",
            "lines": [
              {
                "step": "Factor $32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243$ completely.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243 = (2x)^5 + (2x)^4 \\cdot 3 + (2x)^3 \\cdot 3^2 + (2x)^2 \\cdot 3^3 + 2x \\cdot 3^4 + 3^5$",
                "reason": "Power of a product and the multiplication of whole numbers, term by term: $(2x)^5 = 32x^5$, $(2x)^4 \\cdot 3 = 48x^4$, $(2x)^3 \\cdot 3^2 = 72x^3$, $(2x)^2 \\cdot 3^3 = 108x^2$, $2x \\cdot 3^4 = 162x$ and $3^5 = 243$. From each term to the next the power of $2x$ falls by one and the power of $3$ rises by one."
              },
              {
                "step": "$(2x - 3)(32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243) = (2x)^6 - 3^6$",
                "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 6$, $a = 2x$ and $b = 3$, read from right to left: by line 2 the polynomial is the second bracket."
              },
              {
                "step": "$(2x)^6 - 3^6 = \\left((2x)^3 - 3^3\\right)\\left((2x)^3 + 3^3\\right)$",
                "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = (2x)^3$ and $b = 3^3$, since by the power law $\\left((2x)^3\\right)^2 = (2x)^6$ and $(3^3)^2 = 3^6$."
              },
              {
                "step": "$(2x)^3 - 3^3 = (2x - 3)(4x^2 + 6x + 9)$",
                "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 2x$ and $b = 3$, where $(2x)^2 = 4x^2$, $2x \\cdot 3 = 6x$ and $3^2 = 9$."
              },
              {
                "step": "$(2x)^3 + 3^3 = (2x + 3)(4x^2 - 6x + 9)$",
                "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 2x$ and $b = 3$, where $(2x)^2 = 4x^2$, $2x \\cdot 3 = 6x$ and $3^2 = 9$."
              },
              {
                "step": "$(2x - 3)(32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243) = (2x - 3)(4x^2 + 6x + 9)(2x + 3)(4x^2 - 6x + 9)$",
                "reason": "Lines 3 and 4, with each bracket of line 4 replaced by the product equal to it in lines 5 and 6."
              },
              {
                "step": "At every number $x$ other than $\\dfrac{3}{2}$, $32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243 = (2x + 3)(4x^2 + 6x + 9)(4x^2 - 6x + 9)$.",
                "reason": "Dividing both sides by a nonzero number: at such a number the bracket $2x - 3$ is not zero and divides out of line 7."
              },
              {
                "step": "$32x^5 + 48x^4 + 72x^3 + 108x^2 + 162x + 243 = (2x + 3)(4x^2 + 6x + 9)(4x^2 - 6x + 9)$",
                "reason": "Identity Theorem: by line 8 the two sides are polynomials of degree $5$ that are equal at $6$ different numbers, so they are equal at every number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Factor $16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(7*t+3)*(49*t^2+21*t+9)*(49*t^2-21*t+9)",
              "lines": [
                {
                  "step": "Factor $16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243 = (7t)^5 + (7t)^4 \\cdot 3 + (7t)^3 \\cdot 3^2 + (7t)^2 \\cdot 3^3 + 7t \\cdot 3^4 + 3^5$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(7t)^5 = 16\\,807t^5$, $(7t)^4 \\cdot 3 = 7203t^4$, $(7t)^3 \\cdot 3^2 = 3087t^3$, $(7t)^2 \\cdot 3^3 = 1323t^2$, $7t \\cdot 3^4 = 567t$ and $3^5 = 243$. From each term to the next the power of $7t$ falls by one and the power of $3$ rises by one."
                },
                {
                  "step": "$(7t - 3)(16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243) = (7t)^6 - 3^6$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 6$, $a = 7t$ and $b = 3$, read from right to left: by line 2 the polynomial is the second bracket."
                },
                {
                  "step": "$(7t)^6 - 3^6 = \\left((7t)^3 - 3^3\\right)\\left((7t)^3 + 3^3\\right)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = (7t)^3$ and $b = 3^3$, since by the power law $\\left((7t)^3\\right)^2 = (7t)^6$ and $(3^3)^2 = 3^6$."
                },
                {
                  "step": "$(7t)^3 - 3^3 = (7t - 3)(49t^2 + 21t + 9)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 7t$ and $b = 3$, where $(7t)^2 = 49t^2$, $7t \\cdot 3 = 21t$ and $3^2 = 9$."
                },
                {
                  "step": "$(7t)^3 + 3^3 = (7t + 3)(49t^2 - 21t + 9)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 7t$ and $b = 3$, where $(7t)^2 = 49t^2$, $7t \\cdot 3 = 21t$ and $3^2 = 9$."
                },
                {
                  "step": "$(7t - 3)(16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243) = (7t - 3)(49t^2 + 21t + 9)(7t + 3)(49t^2 - 21t + 9)$",
                  "reason": "Lines 3 and 4, with each bracket of line 4 replaced by the product equal to it in lines 5 and 6."
                },
                {
                  "step": "At every number $t$ other than $\\dfrac{3}{7}$, $16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243 = (7t + 3)(49t^2 + 21t + 9)(49t^2 - 21t + 9)$.",
                  "reason": "Dividing both sides by a nonzero number: at such a number the bracket $7t - 3$ is not zero and divides out of line 7."
                },
                {
                  "step": "$16\\,807t^5 + 7203t^4 + 3087t^3 + 1323t^2 + 567t + 243 = (7t + 3)(49t^2 + 21t + 9)(49t^2 - 21t + 9)$",
                  "reason": "Identity Theorem: by line 8 the two sides are polynomials of degree $5$ that are equal at $6$ different numbers, so they are equal at every number."
                }
              ]
            },
            {
              "prompt": "Factor $7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(6*x+7)*(36*x^2+42*x+49)*(36*x^2-42*x+49)",
              "lines": [
                {
                  "step": "Factor $7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807 = (6x)^5 + (6x)^4 \\cdot 7 + (6x)^3 \\cdot 7^2 + (6x)^2 \\cdot 7^3 + 6x \\cdot 7^4 + 7^5$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $(6x)^5 = 7776x^5$, $(6x)^4 \\cdot 7 = 9072x^4$, $(6x)^3 \\cdot 7^2 = 10\\,584x^3$, $(6x)^2 \\cdot 7^3 = 12\\,348x^2$, $6x \\cdot 7^4 = 14\\,406x$ and $7^5 = 16\\,807$. From each term to the next the power of $6x$ falls by one and the power of $7$ rises by one."
                },
                {
                  "step": "$(6x - 7)(7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807) = (6x)^6 - 7^6$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 6$, $a = 6x$ and $b = 7$, read from right to left: by line 2 the polynomial is the second bracket."
                },
                {
                  "step": "$(6x)^6 - 7^6 = \\left((6x)^3 - 7^3\\right)\\left((6x)^3 + 7^3\\right)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = (6x)^3$ and $b = 7^3$, since by the power law $\\left((6x)^3\\right)^2 = (6x)^6$ and $(7^3)^2 = 7^6$."
                },
                {
                  "step": "$(6x)^3 - 7^3 = (6x - 7)(36x^2 + 42x + 49)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = 6x$ and $b = 7$, where $(6x)^2 = 36x^2$, $6x \\cdot 7 = 42x$ and $7^2 = 49$."
                },
                {
                  "step": "$(6x)^3 + 7^3 = (6x + 7)(36x^2 - 42x + 49)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = 6x$ and $b = 7$, where $(6x)^2 = 36x^2$, $6x \\cdot 7 = 42x$ and $7^2 = 49$."
                },
                {
                  "step": "$(6x - 7)(7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807) = (6x - 7)(36x^2 + 42x + 49)(6x + 7)(36x^2 - 42x + 49)$",
                  "reason": "Lines 3 and 4, with each bracket of line 4 replaced by the product equal to it in lines 5 and 6."
                },
                {
                  "step": "At every number $x$ other than $\\dfrac{7}{6}$, $7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807 = (6x + 7)(36x^2 + 42x + 49)(36x^2 - 42x + 49)$.",
                  "reason": "Dividing both sides by a nonzero number: at such a number the bracket $6x - 7$ is not zero and divides out of line 7."
                },
                {
                  "step": "$7776x^5 + 9072x^4 + 10\\,584x^3 + 12\\,348x^2 + 14\\,406x + 16\\,807 = (6x + 7)(36x^2 + 42x + 49)(36x^2 - 42x + 49)$",
                  "reason": "Identity Theorem: by line 8 the two sides are polynomials of degree $5$ that are equal at $6$ different numbers, so they are equal at every number."
                }
              ]
            },
            {
              "prompt": "Factor $z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807$ completely.",
              "form": "Answer as a product of brackets, a bracket may hold a square and none a common factor, as in (x^2+6)*(x-4).",
              "answer": "(z+7)*(z^2+7*z+49)*(z^2-7*z+49)",
              "lines": [
                {
                  "step": "Factor $z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807$ completely.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807 = z^5 + z^4 \\cdot 7 + z^3 \\cdot 7^2 + z^2 \\cdot 7^3 + z \\cdot 7^4 + 7^5$",
                  "reason": "Power of a product and the multiplication of whole numbers, term by term: $z^4 \\cdot 7 = 7z^4$, $z^3 \\cdot 7^2 = 49z^3$, $z^2 \\cdot 7^3 = 343z^2$, $z \\cdot 7^4 = 2401z$ and $7^5 = 16\\,807$. From each term to the next the power of $z$ falls by one and the power of $7$ rises by one."
                },
                {
                  "step": "$(z - 7)(z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807) = z^6 - 7^6$",
                  "reason": "Difference of nth powers: $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$, with $n = 6$, $a = z$ and $b = 7$, read from right to left: by line 2 the polynomial is the second bracket."
                },
                {
                  "step": "$z^6 - 7^6 = \\left(z^3 - 7^3\\right)\\left(z^3 + 7^3\\right)$",
                  "reason": "Difference of squares: $a^2 - b^2 = (a - b)(a + b)$, with $a = z^3$ and $b = 7^3$, since by the power law $\\left(z^3\\right)^2 = z^6$ and $(7^3)^2 = 7^6$."
                },
                {
                  "step": "$z^3 - 7^3 = (z - 7)(z^2 + 7z + 49)$",
                  "reason": "Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, with $a = z$ and $b = 7$, where $z \\cdot 7 = 7z$ and $7^2 = 49$."
                },
                {
                  "step": "$z^3 + 7^3 = (z + 7)(z^2 - 7z + 49)$",
                  "reason": "Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, with $a = z$ and $b = 7$, where $z \\cdot 7 = 7z$ and $7^2 = 49$."
                },
                {
                  "step": "$(z - 7)(z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807) = (z - 7)(z^2 + 7z + 49)(z + 7)(z^2 - 7z + 49)$",
                  "reason": "Lines 3 and 4, with each bracket of line 4 replaced by the product equal to it in lines 5 and 6."
                },
                {
                  "step": "At every number $z$ other than $7$, $z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807 = (z + 7)(z^2 + 7z + 49)(z^2 - 7z + 49)$.",
                  "reason": "Dividing both sides by a nonzero number: at such a number the bracket $z - 7$ is not zero and divides out of line 7."
                },
                {
                  "step": "$z^5 + 7z^4 + 49z^3 + 343z^2 + 2401z + 16\\,807 = (z + 7)(z^2 + 7z + 49)(z^2 - 7z + 49)$",
                  "reason": "Identity Theorem: by line 8 the two sides are polynomials of degree $5$ that are equal at $6$ different numbers, so they are equal at every number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t206-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this factorisation of $32\\,768x^5 + 3125$, and write that line right.",
            "given": [
              "$32\\,768x^5 + 3125$",
              "$(8x)^5 + 5^5$",
              "$(8x + 5)\\left((8x)^4 + (8x)^3 \\cdot 5 + (8x)^2 \\cdot 5^2 + 8x \\cdot 5^3 + 5^4\\right)$",
              "$(8x + 5)(4096x^4 + 2560x^3 + 1600x^2 + 1000x + 625)$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this factorisation of $32\\,768x^5 + 3125$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
              },
              {
                "step": "Line 3 gives every term of the second bracket the sign $+$.",
                "reason": "A sign lost: by Sum of odd powers the terms of the second bracket take the signs $+$ and $-$ in turn from the first term to the last, so the second and the fourth terms take $-$."
              },
              {
                "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line not equal to the line before it."
              },
              {
                "step": "Line 3 written right is $(8x + 5)\\left((8x)^4 - (8x)^3 \\cdot 5 + (8x)^2 \\cdot 5^2 - 8x \\cdot 5^3 + 5^4\\right)$.",
                "reason": "Sum of odd powers, $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 8x$ and $b = 5$: the signs of the second bracket alternate, and the first and the last are $+$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this factorisation of $2187t^7 + 16\\,384$, and write that line right.",
              "given": [
                "$2187t^7 + 16\\,384$",
                "$(3t)^7 + 4^7$",
                "$(3t + 4)\\left((3t)^6 - (3t)^5 \\cdot 4 + (3t)^4 \\cdot 4^2 - (3t)^3 \\cdot 4^3 + (3t)^2 \\cdot 4^4 - 3t \\cdot 4^5 + 4^6\\right)$",
                "$(3t + 4)(729t^6 - 972t^5 + 1296t^4 + 1728t^3 + 2304t^2 - 3072t + 4096)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (3*t+4)*(729*t^6-972*t^5+1296*t^4-1728*t^3+2304*t^2-3072*t+4096)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $2187t^7 + 16\\,384$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 gives the term $1728t^3$ the sign $+$.",
                  "reason": "A sign lost: by Sum of odd powers the terms of the second bracket take the signs $+$ and $-$ in turn from the first term to the last, so the fourth term takes $-$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 4 written right is $(3t + 4)(729t^6 - 972t^5 + 1296t^4 - 1728t^3 + 2304t^2 - 3072t + 4096)$.",
                  "reason": "Sum of odd powers, $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 7$, $a = 3t$ and $b = 4$: the signs of the second bracket alternate, and the first and the last are $+$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factorisation of $3125z^5 + 16\\,807$, and write that line right.",
              "given": [
                "$3125z^5 + 16\\,807$",
                "$(5z)^5 + 7^5$",
                "$(5z + 7)\\left((5z)^4 - (5z)^3 \\cdot 7 + (5z)^2 \\cdot 7^2 - 5z \\cdot 7^3 - 7^4\\right)$",
                "$(5z + 7)(625z^4 - 875z^3 + 1225z^2 - 1715z - 2401)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (5*z+7)*((5*z)^4-(5*z)^3*7+(5*z)^2*7^2-5*z*7^3+7^4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $3125z^5 + 16\\,807$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 gives the term $7^4$ the sign $-$.",
                  "reason": "A sign lost: by Sum of odd powers the terms of the second bracket take the signs $+$ and $-$ in turn from the first term to the last, so the fifth term takes $+$."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 3 written right is $(5z + 7)\\left((5z)^4 - (5z)^3 \\cdot 7 + (5z)^2 \\cdot 7^2 - 5z \\cdot 7^3 + 7^4\\right)$.",
                  "reason": "Sum of odd powers, $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 5z$ and $b = 7$: the signs of the second bracket alternate, and the first and the last are $+$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this factorisation of $16\\,807y^5 + 32$, and write that line right.",
              "given": [
                "$16\\,807y^5 + 32$",
                "$(7y)^5 + 2^5$",
                "$(7y + 2)\\left((7y)^4 - (7y)^3 \\cdot 2 + (7y)^2 \\cdot 2^2 - 7y \\cdot 2^3 + 2^4\\right)$",
                "$(7y + 2)(2401y^4 - 686y^3 + 196y^2 - 56y - 16)$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (7*y+2)*(2401*y^4-686*y^3+196*y^2-56*y+16)",
              "lines": [
                {
                  "step": "Find the first wrong line in this factorisation of $16\\,807y^5 + 32$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one is equal to the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 gives the term $16$ the sign $-$.",
                  "reason": "A sign lost: by Sum of odd powers the terms of the second bracket take the signs $+$ and $-$ in turn from the first term to the last, so the fifth term takes $+$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line not equal to the line before it."
                },
                {
                  "step": "Line 4 written right is $(7y + 2)(2401y^4 - 686y^3 + 196y^2 - 56y + 16)$.",
                  "reason": "Sum of odd powers, $a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$ for odd $n$, with $n = 5$, $a = 7y$ and $b = 2$: the signs of the second bracket alternate, and the first and the last are $+$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t206-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the difference of the fourth powers on the left and nothing multiplied out: The difference of the fourth powers of $x$ and $y$ is 37 times the difference of $x$ and $y$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the difference of the fourth powers on the left and nothing multiplied out: The difference of the fourth powers of $x$ and $y$ is 37 times the difference of $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The fourth powers of $x$ and $y$ are $x^4$ and $y^4$, and their difference is $x^4 - y^4$.",
                "reason": "Writing a sentence as an equation: \"the fourth powers of\" raises each number to the power 4, and \"the difference of\" takes the second from the first of the two powers."
              },
              {
                "step": "The difference of $x$ and $y$ is $x - y$, and 37 times it is $37(x - y)$.",
                "reason": "Writing a sentence as an equation: \"37 times\" multiplies the whole difference, kept in a bracket, by 37."
              },
              {
                "step": "$x^4 - y^4 = 37(x - y)$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum of the seventh powers on the left and nothing multiplied out: The sum of the seventh powers of $y$ and $z$ equals 28 times the sum of $y$ and $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y^7+z^7 = 28*(y+z)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the seventh powers on the left and nothing multiplied out: The sum of the seventh powers of $y$ and $z$ equals 28 times the sum of $y$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The seventh powers of $y$ and $z$ are $y^7$ and $z^7$, and their sum is $y^7 + z^7$.",
                  "reason": "Writing a sentence as an equation: \"the seventh powers of\" raises each number to the power 7, and \"the sum of\" adds the two powers."
                },
                {
                  "step": "The sum of $y$ and $z$ is $y + z$, and 28 times it is $28(y + z)$.",
                  "reason": "Writing a sentence as an equation: \"28 times\" multiplies the whole sum, kept in a bracket, by 28."
                },
                {
                  "step": "$y^7 + z^7 = 28(y + z)$",
                  "reason": "Writing a sentence as an equation: the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum of the fifth powers on the left and nothing multiplied out: The sum of the fifth powers of $x$ and $z$ is the same as 60 times the sum of $x$ and $z$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^5+z^5 = 60*(x+z)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the fifth powers on the left and nothing multiplied out: The sum of the fifth powers of $x$ and $z$ is the same as 60 times the sum of $x$ and $z$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fifth powers of $x$ and $z$ are $x^5$ and $z^5$, and their sum is $x^5 + z^5$.",
                  "reason": "Writing a sentence as an equation: \"the fifth powers of\" raises each number to the power 5, and \"the sum of\" adds the two powers."
                },
                {
                  "step": "The sum of $x$ and $z$ is $x + z$, and 60 times it is $60(x + z)$.",
                  "reason": "Writing a sentence as an equation: \"60 times\" multiplies the whole sum, kept in a bracket, by 60."
                },
                {
                  "step": "$x^5 + z^5 = 60(x + z)$",
                  "reason": "Writing a sentence as an equation: the words \"is the same as\" mark the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the difference of the fifth powers on the left and nothing multiplied out: The difference of the fifth powers of $x$ and $y$ comes to 56 times the difference of $x$ and $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^5-y^5 = 56*(x-y)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the difference of the fifth powers on the left and nothing multiplied out: The difference of the fifth powers of $x$ and $y$ comes to 56 times the difference of $x$ and $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fifth powers of $x$ and $y$ are $x^5$ and $y^5$, and their difference is $x^5 - y^5$.",
                  "reason": "Writing a sentence as an equation: \"the fifth powers of\" raises each number to the power 5, and \"the difference of\" takes the second from the first of the two powers."
                },
                {
                  "step": "The difference of $x$ and $y$ is $x - y$, and 56 times it is $56(x - y)$.",
                  "reason": "Writing a sentence as an equation: \"56 times\" multiplies the whole difference, kept in a bracket, by 56."
                },
                {
                  "step": "$x^5 - y^5 = 56(x - y)$",
                  "reason": "Writing a sentence as an equation: the words \"comes to\" mark the place of the equals sign."
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
      "id": "t206-p1",
      "method": "direct proof",
      "statement": "For every whole number $n$ with $n \\ge 2$ and all numbers $x$ and $y$, $x^n - y^n = (x - y)(x^{n-1} + x^{n-2}y + \\dots + xy^{n-2} + y^{n-1})$.",
      "idea": "Putting $y$ for $x$ in $x^n - y^n$ gives $0$, so the Factor Theorem names $x - y$ as a factor. Multiplying the two brackets out shows the other factor is right: $x$ times the second bracket and $y$ times the second bracket share every term but $x^n$ and $y^n$, and the shared terms cancel.",
      "lines": [
        {
          "line": "The second bracket is the sum of the $n$ products $x^{n-1-j}y^j$, one for each whole number $j$ from $0$ to $n - 1$.",
          "reason": "The terms as the statement lists them: the power of $x$ falls by one and the power of $y$ rises by one from each term to the next."
        },
        {
          "line": "The product $(x - y)(x^{n-1} + x^{n-2}y + \\dots + y^{n-1})$ equals $x(x^{n-1} + x^{n-2}y + \\dots + y^{n-1}) - y(x^{n-1} + x^{n-2}y + \\dots + y^{n-1})$.",
          "reason": "The distributive law: each term of the first bracket multiplies the second bracket."
        },
        {
          "line": "The product $x(x^{n-1} + x^{n-2}y + \\dots + y^{n-1})$ equals $x^n + x^{n-1}y + \\dots + x^2y^{n-2} + xy^{n-1}$.",
          "reason": "The distributive law, with the product law $x \\cdot x^{n-1-j}y^j = x^{n-j}y^j$ in each term."
        },
        {
          "line": "The product $y(x^{n-1} + x^{n-2}y + \\dots + y^{n-1})$ equals $x^{n-1}y + x^{n-2}y^2 + \\dots + xy^{n-1} + y^n$.",
          "reason": "The distributive law, with the product law $y \\cdot x^{n-1-j}y^j = x^{n-1-j}y^{j+1}$ in each term and the commutative law of multiplication."
        },
        {
          "line": "The terms of line 3 after $x^n$ and the terms of line 4 before $y^n$ are the same $n - 1$ products, $x^{n-j}y^j$ for each whole number $j$ from $1$ to $n - 1$.",
          "reason": "Lines 3 and 4: the term of line 4 that comes from $j - 1$ is $x^{n-1-(j-1)}y^{(j-1)+1} = x^{n-j}y^j$."
        },
        {
          "line": "So $x(x^{n-1} + \\dots + y^{n-1}) - y(x^{n-1} + \\dots + y^{n-1}) = (x^n + x^{n-1}y + \\dots + xy^{n-1}) - (x^{n-1}y + \\dots + xy^{n-1} + y^n)$.",
          "reason": "Lines 3 and 4: each product is replaced by the sum equal to it."
        },
        {
          "line": "The difference $(x^n + x^{n-1}y + \\dots + xy^{n-1}) - (x^{n-1}y + \\dots + xy^{n-1} + y^n)$ equals $x^n + x^{n-1}y + \\dots + xy^{n-1} - x^{n-1}y - \\dots - xy^{n-1} - y^n$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "The sum $x^n + x^{n-1}y + \\dots + xy^{n-1} - x^{n-1}y - \\dots - xy^{n-1} - y^n$ equals $x^n - y^n$.",
          "reason": "Collecting like terms: by line 5 each product between $x^n$ and $y^n$ is added once and taken away once."
        },
        {
          "line": "So $(x - y)(x^{n-1} + x^{n-2}y + \\dots + xy^{n-2} + y^{n-1}) = x^n - y^n$.",
          "reason": "Transitive property: lines 2, 6, 7 and 8."
        },
        {
          "line": "Therefore $x^n - y^n = (x - y)(x^{n-1} + x^{n-2}y + \\dots + xy^{n-2} + y^{n-1})$.",
          "reason": "Symmetric property: the two sides of line 9 change places."
        }
      ]
    },
    {
      "id": "t206-p2",
      "method": "direct proof",
      "statement": "For every odd whole number $n$ with $n \\ge 3$ and all numbers $x$ and $y$, $x^n + y^n = (x + y)(x^{n-1} - x^{n-2}y + \\dots - xy^{n-2} + y^{n-1})$.",
      "idea": "Put $-y$ in place of $y$ in the Difference of nth powers. An odd power of $-y$ is $-y^n$, so the difference turns into a sum, and in the second bracket each term with an odd power of $y$ changes sign.",
      "lines": [
        {
          "line": "For all numbers $x$ and $y$, $x^n - (-y)^n = \\left(x - (-y)\\right)\\left(x^{n-1} + x^{n-2}(-y) + \\dots + x(-y)^{n-2} + (-y)^{n-1}\\right)$.",
          "reason": "Difference of nth powers, with $-y$ in place of $y$."
        },
        {
          "line": "The power $(-y)^n$ equals $-y^n$.",
          "reason": "Sign of a power of a negative number: $n$ is odd, and an odd power keeps the minus sign."
        },
        {
          "line": "The difference $x^n - (-y^n)$ equals $x^n + y^n$.",
          "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
        },
        {
          "line": "The difference $x - (-y)$ equals $x + y$.",
          "reason": "Subtraction as addition, from arithmetic: taking away a negative number adds its opposite."
        },
        {
          "line": "For each whole number $j$ from $0$ to $n - 1$, the term $x^{n-1-j}(-y)^j$ equals $x^{n-1-j}y^j$ when $j$ is even and $-x^{n-1-j}y^j$ when $j$ is odd.",
          "reason": "Sign of a power of a negative number: an even power is positive and an odd power keeps the minus sign."
        },
        {
          "line": "The second bracket of line 1 equals $x^{n-1} - x^{n-2}y + \\dots - xy^{n-2} + y^{n-1}$.",
          "reason": "Line 5: the signs alternate from $j = 0$, and the last term has $j = n - 1$, which is even because $n$ is odd."
        },
        {
          "line": "Therefore $x^n + y^n = (x + y)(x^{n-1} - x^{n-2}y + \\dots - xy^{n-2} + y^{n-1})$.",
          "reason": "Line 1, with each piece replaced by the expression equal to it in lines 2, 3, 4 and 6."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t206-s1",
      "method": "direct proof",
      "statement": "Prove that for every whole number $n$ with $n \\ge 2$ and all integers $a$ and $b$ with $a \\ne b$, the integer $a - b$ divides $a^n - b^n$. Facts it may use: Difference of nth powers, the definition of divides (from arithmetic), a product of integers is an integer and a sum of integers is an integer (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \\dots + ab^{n-2} + b^{n-1})$",
            "reason": "Difference of nth powers."
          },
          {
            "line": "Each term $a^{n-1-j}b^j$ of the second bracket is an integer.",
            "reason": "A product of integers is an integer, from arithmetic."
          },
          {
            "line": "The second bracket is an integer.",
            "reason": "A sum of integers is an integer, from arithmetic, used on line 2."
          },
          {
            "line": "The integer $a - b$ is not zero.",
            "reason": "The hypothesis $a \\ne b$."
          },
          {
            "line": "Therefore $a - b$ divides $a^n - b^n$.",
            "reason": "The definition of divides, from arithmetic: by lines 1 and 3 the number $a^n - b^n$ is the nonzero integer $a - b$ times an integer."
          }
        ]
      }
    },
    {
      "id": "t206-s2",
      "method": "direct proof",
      "statement": "Prove that for every odd whole number $n$ with $n \\ge 3$ and all integers $a$ and $b$ with $a \\ne -b$, the integer $a + b$ divides $a^n + b^n$. Facts it may use: Sum of odd powers, the definition of divides (from arithmetic), a product of integers is an integer and a sum of integers is an integer (from arithmetic), the opposite of an integer is an integer (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "$a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + \\dots - ab^{n-2} + b^{n-1})$",
            "reason": "Sum of odd powers: $n$ is odd."
          },
          {
            "line": "Each product $a^{n-1-j}b^j$ is an integer.",
            "reason": "A product of integers is an integer, from arithmetic."
          },
          {
            "line": "Each term of the second bracket, with its sign, is an integer.",
            "reason": "The opposite of an integer is an integer, from arithmetic, used on line 2."
          },
          {
            "line": "The second bracket is an integer.",
            "reason": "A sum of integers is an integer, from arithmetic, used on line 3."
          },
          {
            "line": "The integer $a + b$ is not zero.",
            "reason": "The hypothesis $a \\ne -b$."
          },
          {
            "line": "Therefore $a + b$ divides $a^n + b^n$.",
            "reason": "The definition of divides, from arithmetic: by lines 1 and 4 the number $a^n + b^n$ is the nonzero integer $a + b$ times an integer."
          }
        ]
      }
    },
    {
      "id": "t206-s3",
      "method": "direct proof",
      "statement": "Prove that for all whole numbers $m \\ge 1$ and $n \\ge 2$ and all integers $a$ and $b$ with $a^m \\ne b^m$, the integer $a^m - b^m$ divides $a^{mn} - b^{mn}$. Facts it may use: power law, Difference of nth powers, the definition of divides (from arithmetic), a product of integers is an integer and a sum of integers is an integer (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "The numbers $a^m$ and $b^m$ are integers.",
            "reason": "A product of integers is an integer, from arithmetic: a power with a whole exponent is a product of equal factors."
          },
          {
            "line": "$a^{mn} - b^{mn} = (a^m)^n - (b^m)^n$",
            "reason": "Power law: $(a^m)^n = a^{mn}$ and $(b^m)^n = b^{mn}$."
          },
          {
            "line": "$(a^m)^n - (b^m)^n = (a^m - b^m)\\left((a^m)^{n-1} + (a^m)^{n-2}b^m + \\dots + a^m(b^m)^{n-2} + (b^m)^{n-1}\\right)$",
            "reason": "Difference of nth powers, with the numbers $a^m$ and $b^m$ in place of $x$ and $y$."
          },
          {
            "line": "Each term $(a^m)^{n-1-j}(b^m)^j$ of the second bracket of line 3 is an integer.",
            "reason": "A product of integers is an integer, from arithmetic, used on line 1."
          },
          {
            "line": "The second bracket of line 3 is an integer.",
            "reason": "A sum of integers is an integer, from arithmetic, used on line 4."
          },
          {
            "line": "The integer $a^m - b^m$ is not zero.",
            "reason": "The hypothesis $a^m \\ne b^m$."
          },
          {
            "line": "Therefore $a^m - b^m$ divides $a^{mn} - b^{mn}$.",
            "reason": "The definition of divides, from arithmetic: by lines 2, 3 and 5 the number $a^{mn} - b^{mn}$ is the nonzero integer $a^m - b^m$ times an integer."
          }
        ]
      }
    }
  ]
}
