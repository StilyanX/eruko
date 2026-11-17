export default {
  "number": 193,
  "title": "Dividing one polynomial by another",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "166-176, 191"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the quotient when $-4x^3 - 28x^2 + 28x - 46$ is divided by $x + 8$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-4*x^2+4*x-4",
    "solution": [
      "Find the quotient when $-4x^3 - 28x^2 + 28x - 46$ is divided by $x + 8$.",
      "The divisor $x + 8$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(-4x^3 - 28x^2 + 28x - 46) - (-4x^2)(x + 8) = 4x^2 + 28x - 46$",
      "$(4x^2 + 28x - 46) - 4x(x + 8) = -4x - 46$",
      "$(-4x - 46) - (-4)(x + 8) = -14$",
      "$-4x^3 - 28x^2 + 28x - 46 = (x + 8)(-4x^2 + 4x - 4) - 14$",
      "The quotient is $-4x^2 + 4x - 4$."
    ]
  },
  "ideas": [
    {
      "name": "Long division of polynomials",
      "concrete": "To divide $6x^2 + x - 9$ by $2x - 3$: the leading term $6x^2$ divided by $2x$ is $3x$, and $(6x^2 + x - 9) - 3x(2x - 3) = 10x - 9$. Then $10x$ divided by $2x$ is $5$, and $(10x - 9) - 5(2x - 3) = 6$, which has degree below 1. The quotient is $3x + 5$ and the remainder is $6$.",
      "general": "To divide a polynomial $f$ by a polynomial $d$ that is not the zero polynomial, **long division of polynomials** divides the leading term of $f$ by the leading term of $d$ to get the first quotient term, and takes that term times $d$ away from $f$. The same step is done on what is left, again and again, until what is left is 0 or has degree below the degree of $d$. The **quotient** is the sum of the quotient terms, and what is left is the **remainder**. The polynomial $f$ is the **dividend** and $d$ the **divisor**. A power missing from $f$ is written with the coefficient 0, so that each power keeps its column."
    },
    {
      "name": "Division statement",
      "concrete": "Dividing $6x^2 - 13x - 23$ by $3x + 4$ gives the quotient $2x - 7$ and the remainder $5$, and $6x^2 - 13x - 23 = (3x + 4)(2x - 7) + 5$. The remainder $5$ has degree 0, below the degree 1 of $3x + 4$.",
      "general": "For polynomials $f$ and $d$, with $d$ not the zero polynomial, the quotient $q$ and the remainder $r$ of $f$ divided by $d$ satisfy $f = d \\cdot q + r$, the **division statement**, and $r = 0$ or the degree of $r$ is below the degree of $d$, the **degree of the remainder**. Exactly one pair of polynomials $q$ and $r$ does both. The polynomial $f$ is **divisible** by $d$ when $r = 0$."
    }
  ],
  "kinds": [
    {
      "id": "t193-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the remainder when $6x^3 + 15x^2 - 13x + 5$ is divided by $x + 3$.",
            "lines": [
              {
                "step": "Find the remainder when $6x^3 + 15x^2 - 13x + 5$ is divided by $x + 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor $x + 3$ has degree 1, so the remainder is 0 or has degree below 1.",
                "reason": "Degree of the remainder: the remainder is 0 or has degree below 1, the degree of the divisor."
              },
              {
                "step": "$(6x^3 + 15x^2 - 13x + 5) - 6x^2(x + 3) = -3x^2 - 13x + 5$",
                "reason": "Long division of polynomials: the leading term $6x^3$ divided by the leading term $x$ of the divisor gives the quotient term $6x^2$, and $6x^2$ times the divisor is taken away."
              },
              {
                "step": "$(-3x^2 - 13x + 5) - (-3x)(x + 3) = -4x + 5$",
                "reason": "Long division of polynomials: the leading term $-3x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-3x$, and $-3x$ times the divisor is taken away."
              },
              {
                "step": "$(-4x + 5) - (-4)(x + 3) = 17$",
                "reason": "Long division of polynomials: the leading term $-4x$ divided by the leading term $x$ of the divisor gives the quotient term $-4$, and $-4$ times the divisor is taken away. What is left, $17$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "$6x^3 + 15x^2 - 13x + 5 = (x + 3)(6x^2 - 3x - 4) + 17$",
                "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $6x^2 - 3x - 4$ is the sum of the quotient terms, and the remainder $17$ is what is left."
              },
              {
                "step": "The remainder is $17$.",
                "reason": "Answering the question asked."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quotient when $-12x^3 - 18x^2 + 42x + 2$ is divided by $2x + 5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*x^2+6*x+6",
              "lines": [
                {
                  "step": "Find the quotient when $-12x^3 - 18x^2 + 42x + 2$ is divided by $2x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor $2x + 5$ has degree 1, so the remainder is 0 or has degree below 1.",
                  "reason": "Degree of the remainder: the remainder is 0 or has degree below 1, the degree of the divisor."
                },
                {
                  "step": "$(-12x^3 - 18x^2 + 42x + 2) - (-6x^2)(2x + 5) = 12x^2 + 42x + 2$",
                  "reason": "Long division of polynomials: the leading term $-12x^3$ divided by the leading term $2x$ of the divisor gives the quotient term $-6x^2$, and $-6x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(12x^2 + 42x + 2) - 6x(2x + 5) = 12x + 2$",
                  "reason": "Long division of polynomials: the leading term $12x^2$ divided by the leading term $2x$ of the divisor gives the quotient term $6x$, and $6x$ times the divisor is taken away."
                },
                {
                  "step": "$(12x + 2) - 6(2x + 5) = -28$",
                  "reason": "Long division of polynomials: the leading term $12x$ divided by the leading term $2x$ of the divisor gives the quotient term $6$, and $6$ times the divisor is taken away. What is left, $-28$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$-12x^3 - 18x^2 + 42x + 2 = (2x + 5)(-6x^2 + 6x + 6) - 28$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $-6x^2 + 6x + 6$ is the sum of the quotient terms, and the remainder $-28$ is what is left."
                },
                {
                  "step": "The quotient is $-6x^2 + 6x + 6$.",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $7x^3 - 36x^2 - 31x - 59$ is divided by $x - 6$.",
              "form": "Answer as an integer.",
              "answer": "-29",
              "lines": [
                {
                  "step": "Find the remainder when $7x^3 - 36x^2 - 31x - 59$ is divided by $x - 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor $x - 6$ has degree 1, so the remainder is 0 or has degree below 1.",
                  "reason": "Degree of the remainder: the remainder is 0 or has degree below 1, the degree of the divisor."
                },
                {
                  "step": "$(7x^3 - 36x^2 - 31x - 59) - 7x^2(x - 6) = 6x^2 - 31x - 59$",
                  "reason": "Long division of polynomials: the leading term $7x^3$ divided by the leading term $x$ of the divisor gives the quotient term $7x^2$, and $7x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(6x^2 - 31x - 59) - 6x(x - 6) = 5x - 59$",
                  "reason": "Long division of polynomials: the leading term $6x^2$ divided by the leading term $x$ of the divisor gives the quotient term $6x$, and $6x$ times the divisor is taken away."
                },
                {
                  "step": "$(5x - 59) - 5(x - 6) = -29$",
                  "reason": "Long division of polynomials: the leading term $5x$ divided by the leading term $x$ of the divisor gives the quotient term $5$, and $5$ times the divisor is taken away. What is left, $-29$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$7x^3 - 36x^2 - 31x - 59 = (x - 6)(7x^2 + 6x + 5) - 29$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $7x^2 + 6x + 5$ is the sum of the quotient terms, and the remainder $-29$ is what is left."
                },
                {
                  "step": "The remainder is $-29$.",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $-7x^4 - 37x^3 - 6x^2 + 64x + 27$ is divided by $x^2 + 6x + 6$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-2*x-9",
              "lines": [
                {
                  "step": "Find the remainder when $-7x^4 - 37x^3 - 6x^2 + 64x + 27$ is divided by $x^2 + 6x + 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor $x^2 + 6x + 6$ has degree 2, so the remainder is 0 or has degree below 2.",
                  "reason": "Degree of the remainder: the remainder is 0 or has degree below 2, the degree of the divisor."
                },
                {
                  "step": "$(-7x^4 - 37x^3 - 6x^2 + 64x + 27) - (-7x^2)(x^2 + 6x + 6) = 5x^3 + 36x^2 + 64x + 27$",
                  "reason": "Long division of polynomials: the leading term $-7x^4$ divided by the leading term $x^2$ of the divisor gives the quotient term $-7x^2$, and $-7x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(5x^3 + 36x^2 + 64x + 27) - 5x(x^2 + 6x + 6) = 6x^2 + 34x + 27$",
                  "reason": "Long division of polynomials: the leading term $5x^3$ divided by the leading term $x^2$ of the divisor gives the quotient term $5x$, and $5x$ times the divisor is taken away."
                },
                {
                  "step": "$(6x^2 + 34x + 27) - 6(x^2 + 6x + 6) = -2x - 9$",
                  "reason": "Long division of polynomials: the leading term $6x^2$ divided by the leading term $x^2$ of the divisor gives the quotient term $6$, and $6$ times the divisor is taken away. What is left, $-2x - 9$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$-7x^4 - 37x^3 - 6x^2 + 64x + 27 = (x^2 + 6x + 6)(-7x^2 + 5x + 6) - 2x - 9$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $-7x^2 + 5x + 6$ is the sum of the quotient terms, and the remainder $-2x - 9$ is what is left."
                },
                {
                  "step": "The remainder is $-2x - 9$.",
                  "reason": "Answering the question asked."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the quotient when $-4x^3 + 14x^2 - 47$ is divided by $2x - 3$.",
            "lines": [
              {
                "step": "Find the quotient when $-4x^3 + 14x^2 - 47$ is divided by $2x - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-4x^3 + 14x^2 - 47 = -4x^3 + 14x^2 + 0x - 47$",
                "reason": "General form: the power $x$ is missing from the dividend, so its coefficient is 0, and the term $0x$ keeps its column in the long division."
              },
              {
                "step": "The divisor $2x - 3$ has degree 1, so the remainder is 0 or has degree below 1.",
                "reason": "Degree of the remainder: the remainder is 0 or has degree below 1, the degree of the divisor."
              },
              {
                "step": "$(-4x^3 + 14x^2 + 0x - 47) - (-2x^2)(2x - 3) = 8x^2 + 0x - 47$",
                "reason": "Long division of polynomials: the leading term $-4x^3$ divided by the leading term $2x$ of the divisor gives the quotient term $-2x^2$, and $-2x^2$ times the divisor is taken away."
              },
              {
                "step": "$(8x^2 + 0x - 47) - 4x(2x - 3) = 12x - 47$",
                "reason": "Long division of polynomials: the leading term $8x^2$ divided by the leading term $2x$ of the divisor gives the quotient term $4x$, and $4x$ times the divisor is taken away."
              },
              {
                "step": "$(12x - 47) - 6(2x - 3) = -29$",
                "reason": "Long division of polynomials: the leading term $12x$ divided by the leading term $2x$ of the divisor gives the quotient term $6$, and $6$ times the divisor is taken away. What is left, $-29$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "$-4x^3 + 14x^2 - 47 = (2x - 3)(-2x^2 + 4x + 6) - 29$",
                "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $-2x^2 + 4x + 6$ is the sum of the quotient terms, and the remainder $-29$ is what is left."
              },
              {
                "step": "The quotient is $-2x^2 + 4x + 6$.",
                "reason": "Answering the question asked."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the remainder when $-9x^3 + 30x^2 - 40$ is divided by $3x - 4$.",
              "form": "Answer as an integer.",
              "answer": "-8",
              "lines": [
                {
                  "step": "Find the remainder when $-9x^3 + 30x^2 - 40$ is divided by $3x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-9x^3 + 30x^2 - 40 = -9x^3 + 30x^2 + 0x - 40$",
                  "reason": "General form: the power $x$ is missing from the dividend, so its coefficient is 0, and the term $0x$ keeps its column in the long division."
                },
                {
                  "step": "The divisor $3x - 4$ has degree 1, so the remainder is 0 or has degree below 1.",
                  "reason": "Degree of the remainder: the remainder is 0 or has degree below 1, the degree of the divisor."
                },
                {
                  "step": "$(-9x^3 + 30x^2 + 0x - 40) - (-3x^2)(3x - 4) = 18x^2 + 0x - 40$",
                  "reason": "Long division of polynomials: the leading term $-9x^3$ divided by the leading term $3x$ of the divisor gives the quotient term $-3x^2$, and $-3x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(18x^2 + 0x - 40) - 6x(3x - 4) = 24x - 40$",
                  "reason": "Long division of polynomials: the leading term $18x^2$ divided by the leading term $3x$ of the divisor gives the quotient term $6x$, and $6x$ times the divisor is taken away."
                },
                {
                  "step": "$(24x - 40) - 8(3x - 4) = -8$",
                  "reason": "Long division of polynomials: the leading term $24x$ divided by the leading term $3x$ of the divisor gives the quotient term $8$, and $8$ times the divisor is taken away. What is left, $-8$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$-9x^3 + 30x^2 - 40 = (3x - 4)(-3x^2 + 6x + 8) - 8$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $-3x^2 + 6x + 8$ is the sum of the quotient terms, and the remainder $-8$ is what is left."
                },
                {
                  "step": "The remainder is $-8$.",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Find the quotient when $-18x^3 + 20x + 38$ is divided by $3x + 2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*x^2+4*x+4",
              "lines": [
                {
                  "step": "Find the quotient when $-18x^3 + 20x + 38$ is divided by $3x + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-18x^3 + 20x + 38 = -18x^3 + 0x^2 + 20x + 38$",
                  "reason": "General form: the power $x^2$ is missing from the dividend, so its coefficient is 0, and the term $0x^2$ keeps its column in the long division."
                },
                {
                  "step": "The divisor $3x + 2$ has degree 1, so the remainder is 0 or has degree below 1.",
                  "reason": "Degree of the remainder: the remainder is 0 or has degree below 1, the degree of the divisor."
                },
                {
                  "step": "$(-18x^3 + 0x^2 + 20x + 38) - (-6x^2)(3x + 2) = 12x^2 + 20x + 38$",
                  "reason": "Long division of polynomials: the leading term $-18x^3$ divided by the leading term $3x$ of the divisor gives the quotient term $-6x^2$, and $-6x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(12x^2 + 20x + 38) - 4x(3x + 2) = 12x + 38$",
                  "reason": "Long division of polynomials: the leading term $12x^2$ divided by the leading term $3x$ of the divisor gives the quotient term $4x$, and $4x$ times the divisor is taken away."
                },
                {
                  "step": "$(12x + 38) - 4(3x + 2) = 30$",
                  "reason": "Long division of polynomials: the leading term $12x$ divided by the leading term $3x$ of the divisor gives the quotient term $4$, and $4$ times the divisor is taken away. What is left, $30$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$-18x^3 + 20x + 38 = (3x + 2)(-6x^2 + 4x + 4) + 30$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $-6x^2 + 4x + 4$ is the sum of the quotient terms, and the remainder $30$ is what is left."
                },
                {
                  "step": "The quotient is $-6x^2 + 4x + 4$.",
                  "reason": "Answering the question asked."
                }
              ]
            },
            {
              "prompt": "Find the quotient when $9x^4 - 6x^3 + 10x + 70$ is divided by $3x^2 - 8x + 10$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "3*x^2+6*x+6",
              "lines": [
                {
                  "step": "Find the quotient when $9x^4 - 6x^3 + 10x + 70$ is divided by $3x^2 - 8x + 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9x^4 - 6x^3 + 10x + 70 = 9x^4 - 6x^3 + 0x^2 + 10x + 70$",
                  "reason": "General form: the power $x^2$ is missing from the dividend, so its coefficient is 0, and the term $0x^2$ keeps its column in the long division."
                },
                {
                  "step": "The divisor $3x^2 - 8x + 10$ has degree 2, so the remainder is 0 or has degree below 2.",
                  "reason": "Degree of the remainder: the remainder is 0 or has degree below 2, the degree of the divisor."
                },
                {
                  "step": "$(9x^4 - 6x^3 + 0x^2 + 10x + 70) - 3x^2(3x^2 - 8x + 10) = 18x^3 - 30x^2 + 10x + 70$",
                  "reason": "Long division of polynomials: the leading term $9x^4$ divided by the leading term $3x^2$ of the divisor gives the quotient term $3x^2$, and $3x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(18x^3 - 30x^2 + 10x + 70) - 6x(3x^2 - 8x + 10) = 18x^2 - 50x + 70$",
                  "reason": "Long division of polynomials: the leading term $18x^3$ divided by the leading term $3x^2$ of the divisor gives the quotient term $6x$, and $6x$ times the divisor is taken away."
                },
                {
                  "step": "$(18x^2 - 50x + 70) - 6(3x^2 - 8x + 10) = -2x + 10$",
                  "reason": "Long division of polynomials: the leading term $18x^2$ divided by the leading term $3x^2$ of the divisor gives the quotient term $6$, and $6$ times the divisor is taken away. What is left, $-2x + 10$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$9x^4 - 6x^3 + 10x + 70 = (3x^2 - 8x + 10)(3x^2 + 6x + 6) - 2x + 10$",
                  "reason": "Division statement: the dividend equals the divisor times the quotient, plus the remainder; the quotient $3x^2 + 6x + 6$ is the sum of the quotient terms, and the remainder $-2x + 10$ is what is left."
                },
                {
                  "step": "The quotient is $3x^2 + 6x + 6$.",
                  "reason": "Answering the question asked."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t193-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this long division of $8x^4 - 24x^3 - 48x^2 - 21x - 5$ by $2x - 9$, and write that line right.",
            "given": [
              "$(8x^4 - 24x^3 - 48x^2 - 21x - 5) - 4x^3(2x - 9) = 12x^3 - 48x^2 - 21x - 5$",
              "$(12x^3 - 48x^2 - 21x - 5) - 6x^2(2x - 9) = 6x^2 - 21x - 5$",
              "$(6x^2 - 21x - 5) - 3x(2x - 9) = -48x - 5$",
              "$(-48x - 5) - (-24)(2x - 9) = -221$",
              "$8x^4 - 24x^3 - 48x^2 - 21x - 5 = (2x - 9)(4x^3 + 6x^2 + 3x - 24) - 221$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this long division of $8x^4 - 24x^3 - 48x^2 - 21x - 5$ by $2x - 9$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Long division of polynomials: each line before the wrong one takes away the quotient term times the divisor, and works the difference out right."
              },
              {
                "step": "Line 3 takes away $3x(2x - 9) = 6x^2 - 27x$, and writes $-21x - (-27x)$ as $-48x$.",
                "reason": "A sign lost: subtracting a bracket changes every sign in it, so $-21x - (-27x) = 6x$."
              },
              {
                "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                "reason": "The first wrong line is the first line that does not follow from the lines before it."
              },
              {
                "step": "Line 3 written right is $(6x^2 - 21x - 5) - 3x(2x - 9) = 6x - 5$.",
                "reason": "Long division of polynomials: the difference takes away every term of the product, each with its sign changed."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this long division of $2x^4 + 7x^3 + 3x^2 - 4x - 24$ by $x + 2$, and write that line right.",
              "given": [
                "$(2x^4 + 7x^3 + 3x^2 - 4x - 24) - 2x^3(x + 2) = 3x^3 + 3x^2 - 4x - 24$",
                "$(3x^3 + 3x^2 - 4x - 24) - 3x^2(x + 2) = 9x^2 - 4x - 24$",
                "$(9x^2 - 4x - 24) - 9x(x + 2) = -22x - 24$",
                "$(-22x - 24) - (-22)(x + 2) = 20$",
                "$2x^4 + 7x^3 + 3x^2 - 4x - 24 = (x + 2)(2x^3 + 3x^2 + 9x - 22) + 20$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (3*x^3+3*x^2-4*x-24)-(3*x^2)*(x+2) = -3*x^2-4*x-24",
              "lines": [
                {
                  "step": "Find the first wrong line in this long division of $2x^4 + 7x^3 + 3x^2 - 4x - 24$ by $x + 2$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Long division of polynomials: each line before the wrong one takes away the quotient term times the divisor, and works the difference out right."
                },
                {
                  "step": "Line 2 takes away $3x^2(x + 2) = 3x^3 + 6x^2$, and writes $3x^2 - 6x^2$ as $9x^2$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $3x^2 - 6x^2 = -3x^2$."
                },
                {
                  "step": "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the lines before it."
                },
                {
                  "step": "Line 2 written right is $(3x^3 + 3x^2 - 4x - 24) - 3x^2(x + 2) = -3x^2 - 4x - 24$.",
                  "reason": "Long division of polynomials: the difference takes away every term of the product, each with its sign changed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this long division of $6x^4 - 32x^3 - 20x^2 - 30x + 6$ by $x - 6$, and write that line right.",
              "given": [
                "$(6x^4 - 32x^3 - 20x^2 - 30x + 6) - 6x^3(x - 6) = 4x^3 - 20x^2 - 30x + 6$",
                "$(4x^3 - 20x^2 - 30x + 6) - 4x^2(x - 6) = 4x^2 - 30x + 6$",
                "$(4x^2 - 30x + 6) - 4x(x - 6) = -6x + 6$",
                "$(-6x + 6) - (-6)(x - 6) = 42$",
                "$6x^4 - 32x^3 - 20x^2 - 30x + 6 = (x - 6)(6x^3 + 4x^2 + 4x - 6) + 42$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (-6*x+6)-(-6)*(x-6) = -30",
              "lines": [
                {
                  "step": "Find the first wrong line in this long division of $6x^4 - 32x^3 - 20x^2 - 30x + 6$ by $x - 6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Long division of polynomials: each line before the wrong one takes away the quotient term times the divisor, and works the difference out right."
                },
                {
                  "step": "Line 4 takes away $(-6)(x - 6) = -6x + 36$, and writes $6 - 36$ as $42$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $6 - 36 = -30$."
                },
                {
                  "step": "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the lines before it."
                },
                {
                  "step": "Line 4 written right is $(-6x + 6) - (-6)(x - 6) = -30$.",
                  "reason": "Long division of polynomials: the difference takes away every term of the product, each with its sign changed."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this long division of $12x^4 + 22x^3 - 23x^2 - 12x + 4$ by $3x + 7$, and write that line right.",
              "given": [
                "$(12x^4 + 22x^3 - 23x^2 - 12x + 4) - 4x^3(3x + 7) = -6x^3 - 23x^2 - 12x + 4$",
                "$(-6x^3 - 23x^2 - 12x + 4) - (-2x^2)(3x + 7) = -9x^2 - 12x + 4$",
                "$(-9x^2 - 12x + 4) - (-3x)(3x + 7) = -33x + 4$",
                "$(-33x + 4) - (-11)(3x + 7) = 81$",
                "$12x^4 + 22x^3 - 23x^2 - 12x + 4 = (3x + 7)(4x^3 - 2x^2 - 3x - 11) + 81$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (-9*x^2-12*x+4)-(-3*x)*(3*x+7) = 9*x+4",
              "lines": [
                {
                  "step": "Find the first wrong line in this long division of $12x^4 + 22x^3 - 23x^2 - 12x + 4$ by $3x + 7$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Long division of polynomials: each line before the wrong one takes away the quotient term times the divisor, and works the difference out right."
                },
                {
                  "step": "Line 3 takes away $(-3x)(3x + 7) = -9x^2 - 21x$, and writes $-12x - (-21x)$ as $-33x$.",
                  "reason": "A sign lost: subtracting a bracket changes every sign in it, so $-12x - (-21x) = 9x$."
                },
                {
                  "step": "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
                  "reason": "The first wrong line is the first line that does not follow from the lines before it."
                },
                {
                  "step": "Line 3 written right is $(-9x^2 - 12x + 4) - (-3x)(3x + 7) = 9x + 4$.",
                  "reason": "Long division of polynomials: the difference takes away every term of the product, each with its sign changed."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t193-k3",
      "forms": [
        {
          "example": {
            "problem": "Find a number $a$ for which the division of $-4x^3 + ax^2 - 12x + 25$ by $x + 5$ leaves the remainder $0$.",
            "lines": [
              {
                "step": "Find a number $a$ for which the division of $-4x^3 + ax^2 - 12x + 25$ by $x + 5$ leaves the remainder $0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(-4x^3 + ax^2 - 12x + 25) - (-4x^2)(x + 5) = (a + 20)x^2 - 12x + 25$",
                "reason": "Long division of polynomials: the leading term $-4x^3$ divided by the leading term $x$ of the divisor gives the quotient term $-4x^2$, and $-4x^2$ times the divisor is taken away."
              },
              {
                "step": "$((a + 20)x^2 - 12x + 25) - (a + 20)x(x + 5) = (-5a - 112)x + 25$",
                "reason": "Long division of polynomials: the leading term $(a + 20)x^2$ divided by the leading term $x$ of the divisor gives the quotient term $(a + 20)x$, and $(a + 20)x$ times the divisor is taken away."
              },
              {
                "step": "$((-5a - 112)x + 25) - (-5a - 112)(x + 5) = 25a + 585$",
                "reason": "Long division of polynomials: the leading term $(-5a - 112)x$ divided by the leading term $x$ of the divisor gives the quotient term $-5a - 112$, and $-5a - 112$ times the divisor is taken away. What is left, $25a + 585$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "$25a + 585 = 0$",
                "reason": "Division statement: the division leaves no remainder exactly when the remainder is $0$."
              },
              {
                "step": "$a = -\\dfrac{117}{5}$",
                "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which the division of $-5x^3 + 7x^2 + ax + 30$ by $x - 3$ leaves the remainder $0$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 14",
              "lines": [
                {
                  "step": "Find a number $a$ for which the division of $-5x^3 + 7x^2 + ax + 30$ by $x - 3$ leaves the remainder $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-5x^3 + 7x^2 + ax + 30) - (-5x^2)(x - 3) = -8x^2 + ax + 30$",
                  "reason": "Long division of polynomials: the leading term $-5x^3$ divided by the leading term $x$ of the divisor gives the quotient term $-5x^2$, and $-5x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(-8x^2 + ax + 30) - (-8x)(x - 3) = (a - 24)x + 30$",
                  "reason": "Long division of polynomials: the leading term $-8x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-8x$, and $-8x$ times the divisor is taken away."
                },
                {
                  "step": "$((a - 24)x + 30) - (a - 24)(x - 3) = 3a - 42$",
                  "reason": "Long division of polynomials: the leading term $(a - 24)x$ divided by the leading term $x$ of the divisor gives the quotient term $a - 24$, and $a - 24$ times the divisor is taken away. What is left, $3a - 42$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$3a - 42 = 0$",
                  "reason": "Division statement: the division leaves no remainder exactly when the remainder is $0$."
                },
                {
                  "step": "$a = 14$",
                  "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which the division of $-3x^3 + 7x^2 + 7x + a$ by $x - 4$ leaves the remainder $0$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 52",
              "lines": [
                {
                  "step": "Find a number $a$ for which the division of $-3x^3 + 7x^2 + 7x + a$ by $x - 4$ leaves the remainder $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-3x^3 + 7x^2 + 7x + a) - (-3x^2)(x - 4) = -5x^2 + 7x + a$",
                  "reason": "Long division of polynomials: the leading term $-3x^3$ divided by the leading term $x$ of the divisor gives the quotient term $-3x^2$, and $-3x^2$ times the divisor is taken away."
                },
                {
                  "step": "$(-5x^2 + 7x + a) - (-5x)(x - 4) = -13x + a$",
                  "reason": "Long division of polynomials: the leading term $-5x^2$ divided by the leading term $x$ of the divisor gives the quotient term $-5x$, and $-5x$ times the divisor is taken away."
                },
                {
                  "step": "$(-13x + a) - (-13)(x - 4) = a - 52$",
                  "reason": "Long division of polynomials: the leading term $-13x$ divided by the leading term $x$ of the divisor gives the quotient term $-13$, and $-13$ times the divisor is taken away. What is left, $a - 52$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$a - 52 = 0$",
                  "reason": "Division statement: the division leaves no remainder exactly when the remainder is $0$."
                },
                {
                  "step": "$a = 52$",
                  "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which the division of $6x^3 + ax^2 - 5x + 8$ by $x - 2$ leaves the remainder $0$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -23/2",
              "lines": [
                {
                  "step": "Find a number $a$ for which the division of $6x^3 + ax^2 - 5x + 8$ by $x - 2$ leaves the remainder $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(6x^3 + ax^2 - 5x + 8) - 6x^2(x - 2) = (a + 12)x^2 - 5x + 8$",
                  "reason": "Long division of polynomials: the leading term $6x^3$ divided by the leading term $x$ of the divisor gives the quotient term $6x^2$, and $6x^2$ times the divisor is taken away."
                },
                {
                  "step": "$((a + 12)x^2 - 5x + 8) - (a + 12)x(x - 2) = (2a + 19)x + 8$",
                  "reason": "Long division of polynomials: the leading term $(a + 12)x^2$ divided by the leading term $x$ of the divisor gives the quotient term $(a + 12)x$, and $(a + 12)x$ times the divisor is taken away."
                },
                {
                  "step": "$((2a + 19)x + 8) - (2a + 19)(x - 2) = 4a + 46$",
                  "reason": "Long division of polynomials: the leading term $(2a + 19)x$ divided by the leading term $x$ of the divisor gives the quotient term $2a + 19$, and $2a + 19$ times the divisor is taken away. What is left, $4a + 46$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$4a + 46 = 0$",
                  "reason": "Division statement: the division leaves no remainder exactly when the remainder is $0$."
                },
                {
                  "step": "$a = -\\dfrac{23}{2}$",
                  "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $a$ for which the division of $4x^3 + ax^2 - 4x + 27$ by $x^2 + 6x + 6$ leaves a remainder that is a number.",
            "lines": [
              {
                "step": "Find a number $a$ for which the division of $4x^3 + ax^2 - 4x + 27$ by $x^2 + 6x + 6$ leaves a remainder that is a number.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(4x^3 + ax^2 - 4x + 27) - 4x(x^2 + 6x + 6) = (a - 24)x^2 - 28x + 27$",
                "reason": "Long division of polynomials: the leading term $4x^3$ divided by the leading term $x^2$ of the divisor gives the quotient term $4x$, and $4x$ times the divisor is taken away."
              },
              {
                "step": "$((a - 24)x^2 - 28x + 27) - (a - 24)(x^2 + 6x + 6) = (-6a + 116)x - 6a + 171$",
                "reason": "Long division of polynomials: the leading term $(a - 24)x^2$ divided by the leading term $x^2$ of the divisor gives the quotient term $a - 24$, and $a - 24$ times the divisor is taken away. What is left, $(-6a + 116)x - 6a + 171$, has degree below the degree of the divisor, so the division stops."
              },
              {
                "step": "$-6a + 116 = 0$",
                "reason": "Equal for all $x$ means equal coefficients: a number has the coefficient 0 for $x$, so the coefficient of $x$ in the remainder is 0."
              },
              {
                "step": "$a = \\dfrac{58}{3}$",
                "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $a$ for which the division of $-4x^3 + ax^2 + 9x + 20$ by $x^2 - 7x + 7$ leaves a remainder that is a number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = 159/7",
              "lines": [
                {
                  "step": "Find a number $a$ for which the division of $-4x^3 + ax^2 + 9x + 20$ by $x^2 - 7x + 7$ leaves a remainder that is a number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(-4x^3 + ax^2 + 9x + 20) - (-4x)(x^2 - 7x + 7) = (a - 28)x^2 + 37x + 20$",
                  "reason": "Long division of polynomials: the leading term $-4x^3$ divided by the leading term $x^2$ of the divisor gives the quotient term $-4x$, and $-4x$ times the divisor is taken away."
                },
                {
                  "step": "$((a - 28)x^2 + 37x + 20) - (a - 28)(x^2 - 7x + 7) = (7a - 159)x - 7a + 216$",
                  "reason": "Long division of polynomials: the leading term $(a - 28)x^2$ divided by the leading term $x^2$ of the divisor gives the quotient term $a - 28$, and $a - 28$ times the divisor is taken away. What is left, $(7a - 159)x - 7a + 216$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$7a - 159 = 0$",
                  "reason": "Equal for all $x$ means equal coefficients: a number has the coefficient 0 for $x$, so the coefficient of $x$ in the remainder is 0."
                },
                {
                  "step": "$a = \\dfrac{159}{7}$",
                  "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which the division of $4x^3 + ax^2 + 10x + 3$ by $x^2 - 7x + 9$ leaves a remainder that is a number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -170/7",
              "lines": [
                {
                  "step": "Find a number $a$ for which the division of $4x^3 + ax^2 + 10x + 3$ by $x^2 - 7x + 9$ leaves a remainder that is a number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(4x^3 + ax^2 + 10x + 3) - 4x(x^2 - 7x + 9) = (a + 28)x^2 - 26x + 3$",
                  "reason": "Long division of polynomials: the leading term $4x^3$ divided by the leading term $x^2$ of the divisor gives the quotient term $4x$, and $4x$ times the divisor is taken away."
                },
                {
                  "step": "$((a + 28)x^2 - 26x + 3) - (a + 28)(x^2 - 7x + 9) = (7a + 170)x - 9a - 249$",
                  "reason": "Long division of polynomials: the leading term $(a + 28)x^2$ divided by the leading term $x^2$ of the divisor gives the quotient term $a + 28$, and $a + 28$ times the divisor is taken away. What is left, $(7a + 170)x - 9a - 249$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$7a + 170 = 0$",
                  "reason": "Equal for all $x$ means equal coefficients: a number has the coefficient 0 for $x$, so the coefficient of $x$ in the remainder is 0."
                },
                {
                  "step": "$a = -\\dfrac{170}{7}$",
                  "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
                }
              ]
            },
            {
              "prompt": "Find a number $a$ for which the division of $2x^3 + ax^2 + 12x - 27$ by $x^2 - 8x + 10$ leaves a remainder that is a number.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "a = -15",
              "lines": [
                {
                  "step": "Find a number $a$ for which the division of $2x^3 + ax^2 + 12x - 27$ by $x^2 - 8x + 10$ leaves a remainder that is a number.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x^3 + ax^2 + 12x - 27) - 2x(x^2 - 8x + 10) = (a + 16)x^2 - 8x - 27$",
                  "reason": "Long division of polynomials: the leading term $2x^3$ divided by the leading term $x^2$ of the divisor gives the quotient term $2x$, and $2x$ times the divisor is taken away."
                },
                {
                  "step": "$((a + 16)x^2 - 8x - 27) - (a + 16)(x^2 - 8x + 10) = (8a + 120)x - 10a - 187$",
                  "reason": "Long division of polynomials: the leading term $(a + 16)x^2$ divided by the leading term $x^2$ of the divisor gives the quotient term $a + 16$, and $a + 16$ times the divisor is taken away. What is left, $(8a + 120)x - 10a - 187$, has degree below the degree of the divisor, so the division stops."
                },
                {
                  "step": "$8a + 120 = 0$",
                  "reason": "Equal for all $x$ means equal coefficients: a number has the coefficient 0 for $x$, so the coefficient of $x$ in the remainder is 0."
                },
                {
                  "step": "$a = -15$",
                  "reason": "Isolating the variable: the number term moves to the right side, and both sides are divided by the coefficient of $a$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t193-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x - 4$, the quotient is $-6x - 7$ and the remainder is $28$.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x - 4$, the quotient is $-6x - 7$ and the remainder is $28$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The dividend is $y$, the divisor $x - 4$, the quotient $-6x - 7$ and the remainder $28$.",
                "reason": "Writing a sentence as an equation: \"divided by\" names the divisor, the polynomial divided is the dividend, and the sentence names the quotient and the remainder."
              },
              {
                "step": "The divisor times the quotient is $(x - 4)(-6x - 7)$.",
                "reason": "Division statement: the dividend is the divisor times the quotient, plus the remainder."
              },
              {
                "step": "$y = (x - 4)(-6x - 7) + 28$",
                "reason": "Writing a sentence as an equation: the remainder is added to the product, and the dividend stands alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $x - 5$ gives the quotient $-5x + 4$ and leaves the remainder $14$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-5)*(-5*x+4)+14",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $x - 5$ gives the quotient $-5x + 4$ and leaves the remainder $14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The dividend is $y$, the divisor $x - 5$, the quotient $-5x + 4$ and the remainder $14$.",
                  "reason": "Writing a sentence as an equation: \"divided by\" names the divisor, the polynomial divided is the dividend, and the sentence names the quotient and the remainder."
                },
                {
                  "step": "The divisor times the quotient is $(x - 5)(-5x + 4)$.",
                  "reason": "Division statement: the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$y = (x - 5)(-5x + 4) + 14$",
                  "reason": "Writing a sentence as an equation: the remainder is added to the product, and the dividend stands alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $8x^2 + 40x - 4$ is divided by $2x + 9$, the quotient is $y$ and the remainder is $-22$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "8*x^2+40*x-4 = (2*x+9)*y-22",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $8x^2 + 40x - 4$ is divided by $2x + 9$, the quotient is $y$ and the remainder is $-22$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The dividend is $8x^2 + 40x - 4$, the divisor $2x + 9$, the quotient $y$ and the remainder $-22$.",
                  "reason": "Writing a sentence as an equation: \"divided by\" names the divisor, the polynomial divided is the dividend, and the sentence names the quotient and the remainder."
                },
                {
                  "step": "The divisor times the quotient is $(2x + 9)y$.",
                  "reason": "Division statement: the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$8x^2 + 40x - 4 = (2x + 9)y - 22$",
                  "reason": "Writing a sentence as an equation: the remainder is added to the product, and the dividend stands alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-10x^3 - 35x^2 + 93x - 64$ is divided by $2x^2 + 9x - 11$, the quotient is $-5x + 5$ and the remainder is $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "-10*x^3-35*x^2+93*x-64 = (2*x^2+9*x-11)*(-5*x+5)+y",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-10x^3 - 35x^2 + 93x - 64$ is divided by $2x^2 + 9x - 11$, the quotient is $-5x + 5$ and the remainder is $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The dividend is $-10x^3 - 35x^2 + 93x - 64$, the divisor $2x^2 + 9x - 11$, the quotient $-5x + 5$ and the remainder $y$.",
                  "reason": "Writing a sentence as an equation: \"divided by\" names the divisor, the polynomial divided is the dividend, and the sentence names the quotient and the remainder."
                },
                {
                  "step": "The divisor times the quotient is $(2x^2 + 9x - 11)(-5x + 5)$.",
                  "reason": "Division statement: the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$-10x^3 - 35x^2 + 93x - 64 = (2x^2 + 9x - 11)(-5x + 5) + y$",
                  "reason": "Writing a sentence as an equation: the remainder is added to the product, and the dividend stands alone on the left."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t193-k5",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $-5x^2 + 5x - 2$ and $-4$ are the quotient and the remainder when $-5x^3 + 20x^2 - 13x - 10$ is divided by $x - 3$.",
            "lines": [
              {
                "step": "Decide whether $-5x^2 + 5x - 2$ and $-4$ are the quotient and the remainder when $-5x^3 + 20x^2 - 13x - 10$ is divided by $x - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(x - 3)(-5x^2 + 5x - 2) = -5x^3 + 20x^2 - 17x + 6$",
                "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, so the product comes first; each term of a product comes from one term of each factor."
              },
              {
                "step": "$-5x^3 + 20x^2 - 17x + 6 - 4 = -5x^3 + 20x^2 - 17x + 2$",
                "reason": "Collecting like terms: the remainder is added to the product."
              },
              {
                "step": "The sum $-5x^3 + 20x^2 - 17x + 2$ is not the dividend $-5x^3 + 20x^2 - 13x - 10$: the coefficients of $x$ are $-17$ and $-13$.",
                "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, term by term."
              },
              {
                "step": "The remainder $-4$ has degree 0, below the degree 1 of the divisor.",
                "reason": "Degree of the remainder: a remainder is 0 or has degree below the degree of the divisor."
              },
              {
                "step": "So the pair is not the quotient and the remainder: No.",
                "reason": "Division statement: the quotient and the remainder are the one pair with the dividend equal to the divisor times the quotient, plus the remainder, and the remainder 0 or of degree below the divisor's."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $7x^2 - 7x - 5$ and $-24$ are the quotient and the remainder when $21x^3 - 70x^2 + 34x + 11$ is divided by $3x - 7$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $7x^2 - 7x - 5$ and $-24$ are the quotient and the remainder when $21x^3 - 70x^2 + 34x + 11$ is divided by $3x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3x - 7)(7x^2 - 7x - 5) = 21x^3 - 70x^2 + 34x + 35$",
                  "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, so the product comes first; each term of a product comes from one term of each factor."
                },
                {
                  "step": "$21x^3 - 70x^2 + 34x + 35 - 24 = 21x^3 - 70x^2 + 34x + 11$",
                  "reason": "Collecting like terms: the remainder is added to the product."
                },
                {
                  "step": "The sum $21x^3 - 70x^2 + 34x + 11$ is the dividend.",
                  "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, term by term."
                },
                {
                  "step": "The remainder $-24$ has degree 0, below the degree 1 of the divisor.",
                  "reason": "Degree of the remainder: a remainder is 0 or has degree below the degree of the divisor."
                },
                {
                  "step": "So the pair is the quotient and the remainder: Yes.",
                  "reason": "Division statement: the quotient and the remainder are the one pair with the dividend equal to the divisor times the quotient, plus the remainder, and the remainder 0 or of degree below the divisor's."
                }
              ]
            },
            {
              "prompt": "Decide whether $7x^2 - 5x$ and $5x - 58$ are the quotient and the remainder when $7x^3 - 61x^2 + 45x - 58$ is divided by $x - 8$.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "Decide whether $7x^2 - 5x$ and $5x - 58$ are the quotient and the remainder when $7x^3 - 61x^2 + 45x - 58$ is divided by $x - 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(x - 8)(7x^2 - 5x) = 7x^3 - 61x^2 + 40x$",
                  "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, so the product comes first; each term of a product comes from one term of each factor."
                },
                {
                  "step": "$7x^3 - 61x^2 + 40x + 5x - 58 = 7x^3 - 61x^2 + 45x - 58$",
                  "reason": "Collecting like terms: the remainder is added to the product."
                },
                {
                  "step": "The sum $7x^3 - 61x^2 + 45x - 58$ is the dividend.",
                  "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, term by term."
                },
                {
                  "step": "The remainder $5x - 58$ has degree 1, not below the degree 1 of the divisor.",
                  "reason": "Degree of the remainder: a remainder is 0 or has degree below the degree of the divisor."
                },
                {
                  "step": "So the pair is not the quotient and the remainder: No.",
                  "reason": "Division statement: the quotient and the remainder are the one pair with the dividend equal to the divisor times the quotient, plus the remainder, and the remainder 0 or of degree below the divisor's."
                }
              ]
            },
            {
              "prompt": "Decide whether $-7x^2 + 7x + 6$ and $-12$ are the quotient and the remainder when $-14x^3 - 21x^2 + 47x + 18$ is divided by $2x + 5$.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "Decide whether $-7x^2 + 7x + 6$ and $-12$ are the quotient and the remainder when $-14x^3 - 21x^2 + 47x + 18$ is divided by $2x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2x + 5)(-7x^2 + 7x + 6) = -14x^3 - 21x^2 + 47x + 30$",
                  "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, so the product comes first; each term of a product comes from one term of each factor."
                },
                {
                  "step": "$-14x^3 - 21x^2 + 47x + 30 - 12 = -14x^3 - 21x^2 + 47x + 18$",
                  "reason": "Collecting like terms: the remainder is added to the product."
                },
                {
                  "step": "The sum $-14x^3 - 21x^2 + 47x + 18$ is the dividend.",
                  "reason": "Division statement: the dividend must be the divisor times the quotient, plus the remainder, term by term."
                },
                {
                  "step": "The remainder $-12$ has degree 0, below the degree 1 of the divisor.",
                  "reason": "Degree of the remainder: a remainder is 0 or has degree below the degree of the divisor."
                },
                {
                  "step": "So the pair is the quotient and the remainder: Yes.",
                  "reason": "Division statement: the quotient and the remainder are the one pair with the dividend equal to the divisor times the quotient, plus the remainder, and the remainder 0 or of degree below the divisor's."
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
      "id": "t193-p1",
      "method": "proof by contradiction",
      "statement": "For polynomials $f$ and $d$, with $d$ not the zero polynomial, there are polynomials $q$ and $r$ with $f = d \\cdot q + r$ and either $r = 0$ or the degree of $r$ below the degree of $d$.",
      "idea": "Suppose that no choice of $q$ makes $f - d \\cdot q$ either 0 or of degree below the degree of $d$. Take the choice that makes the degree of $f - d \\cdot q$ least. One step of long division then makes a difference of the same shape with a lower degree, which cannot be.",
      "lines": [
        {
          "line": "Let $m$ be the degree of $d$ and $b$ its leading coefficient, so $b \\ne 0$.",
          "reason": "Degree and leading coefficient: the leading coefficient of a polynomial with a degree is not 0."
        },
        {
          "line": "Suppose that no polynomial $q$ makes $f - d \\cdot q$ either 0 or of degree below $m$.",
          "reason": "The supposition of the proof by contradiction."
        },
        {
          "line": "Then for every polynomial $q$, the polynomial $f - d \\cdot q$ is not 0 and has degree $m$ or more.",
          "reason": "Line 2, read for each polynomial $q$."
        },
        {
          "line": "With $q = 0$, the polynomial $f - d \\cdot 0$ is $f$.",
          "reason": "Assumptions on multiplication, from arithmetic: a product with a factor $0$ is $0$."
        },
        {
          "line": "So $f$ is not 0 and has a degree $n$ with $n \\ge m$.",
          "reason": "Lines 3 and 4."
        },
        {
          "line": "Each polynomial $f - d \\cdot q$ of degree $n$ or less has a degree from $m$ to $n$.",
          "reason": "Line 3."
        },
        {
          "line": "The degree $n$ of $f = f - d \\cdot 0$ is one of these degrees.",
          "reason": "Lines 4 and 5."
        },
        {
          "line": "These degrees have a least one, $k$, with $m \\le k \\le n$.",
          "reason": "Lines 6 and 7, and a nonempty set of whole numbers has a least member, from arithmetic."
        },
        {
          "line": "Take a polynomial $q_0$ for which $g = f - d \\cdot q_0$ has degree $k$, and let $c$ be the leading coefficient of $g$, so $c \\ne 0$.",
          "reason": "Line 8, and degree and leading coefficient."
        },
        {
          "line": "The product $\\dfrac{c}{b}x^{k - m} \\cdot d$ has the leading term $\\dfrac{c}{b}x^{k - m} \\cdot bx^m = cx^k$.",
          "reason": "The leading term of a product is the product of the leading terms, with $k - m \\ge 0$ from line 8."
        },
        {
          "line": "The product $\\dfrac{c}{b}x^{k - m} \\cdot d$ has degree $(k - m) + m = k$.",
          "reason": "Degree of a product is the sum of the degrees."
        },
        {
          "line": "In $h = g - \\dfrac{c}{b}x^{k - m} \\cdot d$, the term in $x^k$ is $cx^k - cx^k = 0$.",
          "reason": "Collecting like terms, with the leading terms of lines 9 and 10."
        },
        {
          "line": "Every other term of $h$ has a power of $x$ below $k$.",
          "reason": "Degree: $g$ has degree $k$ by line 9, and the product has degree $k$ by line 11."
        },
        {
          "line": "So $h$ is 0 or has degree below $k$.",
          "reason": "Degree: lines 12 and 13 leave no term in $x^k$ or a higher power."
        },
        {
          "line": "The polynomial $h$ equals $f - d \\cdot \\left(q_0 + \\dfrac{c}{b}x^{k - m}\\right)$.",
          "reason": "The distributive law, from arithmetic, with $g = f - d \\cdot q_0$."
        },
        {
          "line": "So $h$ is not 0 and has degree $m$ or more.",
          "reason": "Lines 3 and 15, with $q_0 + \\dfrac{c}{b}x^{k - m}$ as the polynomial $q$."
        },
        {
          "line": "The degree of $h$ is below $k$ and at least $m$, so it is from $m$ to $n$.",
          "reason": "Lines 14 and 16, with $k \\le n$ from line 8."
        },
        {
          "line": "That degree is the degree of the polynomial $f - d \\cdot q$ with $q = q_0 + \\dfrac{c}{b}x^{k - m}$.",
          "reason": "Line 15."
        },
        {
          "line": "This degree is below the least such degree $k$, which cannot be.",
          "reason": "Lines 17 and 18, and line 8: $k$ is the least of these degrees."
        },
        {
          "line": "So the supposition of line 2 is false, and some polynomial $q$ makes $r = f - d \\cdot q$ either 0 or of degree below $m$.",
          "reason": "Proof by contradiction: the supposition led to a statement that cannot be true."
        },
        {
          "line": "For that $q$ and $r$, $f = d \\cdot q + r$.",
          "reason": "Adding the same number to both sides: $d \\cdot q$ is added to both sides of $r = f - d \\cdot q$."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t193-s1",
      "method": "direct proof",
      "statement": "Prove that for polynomials $f$ and $g$, where $f$ is not the zero polynomial and $g$ has degree 1 or more, the degree of $f(g(x))$ is the degree of $f$ times the degree of $g$. Facts it may use: general form, degree, leading coefficient, composition, degree of a product is the sum of the degrees, the leading term of a product is the product of the leading terms, collecting like terms, the distributive law, multiplying an inequality by a positive number.",
      "check": {
        "proof": [
          {
            "line": "Let $n$ be the degree of $f$ and $m$ the degree of $g$, and write $f(x) = a_nx^n + \\dots + a_1x + a_0$ with $a_n \\ne 0$.",
            "reason": "General form and degree."
          },
          {
            "line": "Let $b$ be the leading coefficient of $g$, so $g(x)$ has the leading term $bx^m$ with $b \\ne 0$.",
            "reason": "Leading coefficient."
          },
          {
            "line": "The composition is $f(g(x)) = a_ng(x)^n + \\dots + a_1g(x) + a_0$.",
            "reason": "Composition: $g(x)$ is put in place of $x$ in $f$."
          },
          {
            "line": "For each whole number $j$ from 1 to $n$, the power $g(x)^j$ is a product of $j$ factors of degree $m$, so it has degree $jm$.",
            "reason": "Degree of a product is the sum of the degrees: $m + m + \\dots + m = jm$."
          },
          {
            "line": "The power $g(x)^n$ has the leading term $b^nx^{nm}$.",
            "reason": "The leading term of a product is the product of the leading terms."
          },
          {
            "line": "So $a_ng(x)^n$ has the term $a_nb^nx^{nm}$.",
            "reason": "The distributive law, from arithmetic: line 5 multiplied by $a_n$."
          },
          {
            "line": "The coefficient $a_nb^n$ is not 0.",
            "reason": "A product of numbers that are not 0 is not 0, from arithmetic."
          },
          {
            "line": "For each $j$ below $n$, the polynomial $a_jg(x)^j$ is 0 or has degree $jm$.",
            "reason": "Line 4 for $j \\ge 1$; for $j = 0$ the term $a_0$ is a number, 0 or of degree $0 = 0 \\cdot m$."
          },
          {
            "line": "For each $j$ below $n$, $jm < nm$.",
            "reason": "Multiplying an inequality by a positive number: $j < n$ and $m \\ge 1$."
          },
          {
            "line": "So the only term in $x^{nm}$ of $f(g(x))$ is $a_nb^nx^{nm}$, and every other term has a power below $nm$.",
            "reason": "Collecting like terms, with lines 3 and 6 to 9."
          },
          {
            "line": "Therefore the degree of $f(g(x))$ is $nm$, the degree of $f$ times the degree of $g$.",
            "reason": "Degree: the greatest power with a coefficient that is not 0."
          }
        ]
      }
    },
    {
      "id": "t193-s2",
      "method": "proof by contradiction",
      "statement": "Prove that for polynomials $f$ and $d$, with $d$ not the zero polynomial, if $f = d \\cdot q_1 + r_1$ and $f = d \\cdot q_2 + r_2$, where each of $r_1$ and $r_2$ is 0 or has degree below the degree of $d$, then $q_1 = q_2$ and $r_1 = r_2$. Facts it may use: degree of the remainder, degree, degree of a product is the sum of the degrees, transitive property, adding the same number to both sides, the distributive law.",
      "check": {
        "proof": [
          {
            "line": "Both right sides equal $f$, so $d \\cdot q_1 + r_1 = d \\cdot q_2 + r_2$.",
            "reason": "Transitive property."
          },
          {
            "line": "So $d \\cdot q_2 - d \\cdot q_1 = r_1 - r_2$.",
            "reason": "Adding the same number to both sides: $-d \\cdot q_1 - r_2$ is added to both sides."
          },
          {
            "line": "So $d \\cdot (q_2 - q_1) = r_1 - r_2$.",
            "reason": "The distributive law, from arithmetic."
          },
          {
            "line": "The polynomial $r_1 - r_2$ is 0 or has degree below the degree of $d$.",
            "reason": "Degree of the remainder: neither $r_1$ nor $r_2$ has a term in a power of $x$ at or above the degree of $d$."
          },
          {
            "line": "Suppose that $q_2 - q_1$ is not the zero polynomial.",
            "reason": "The supposition of the proof by contradiction."
          },
          {
            "line": "Then $d \\cdot (q_2 - q_1)$ has degree equal to the degree of $d$ plus the degree of $q_2 - q_1$.",
            "reason": "Degree of a product is the sum of the degrees."
          },
          {
            "line": "So $d \\cdot (q_2 - q_1)$ is not 0 and has degree at least the degree of $d$.",
            "reason": "A degree is a whole number, so the degree of $q_2 - q_1$ is 0 or more."
          },
          {
            "line": "This contradicts line 4, since the two sides of line 3 are the same polynomial.",
            "reason": "Lines 3, 4 and 7."
          },
          {
            "line": "So $q_2 - q_1 = 0$, and $q_1 = q_2$.",
            "reason": "Proof by contradiction: the supposition of line 5 is false."
          },
          {
            "line": "Then $r_1 - r_2 = d \\cdot 0 = 0$, so $r_1 = r_2$.",
            "reason": "Line 3 with $q_2 - q_1 = 0$, and multiplying by 0 gives 0."
          }
        ]
      }
    },
    {
      "id": "t193-s3",
      "method": "direct proof",
      "statement": "Prove that if the polynomial $f$ has degree $n$, the polynomial $d$ has degree $m$, and $n \\ge m$, then the quotient of $f$ divided by $d$ has degree $n - m$. Facts it may use: division statement, degree of the remainder, degree, leading term, degree of a product is the sum of the degrees, collecting like terms, transitivity, adding the same number to both sides.",
      "check": {
        "proof": [
          {
            "line": "Let $q$ and $r$ be the quotient and the remainder, so $f = d \\cdot q + r$.",
            "reason": "Division statement."
          },
          {
            "line": "So $f - r = d \\cdot q$.",
            "reason": "Adding the same number to both sides: $r$ is taken from both sides."
          },
          {
            "line": "The remainder $r$ is 0 or has degree below $m$.",
            "reason": "Degree of the remainder."
          },
          {
            "line": "So every term of $r$ has a power of $x$ below $n$.",
            "reason": "Transitivity, from arithmetic: each such power is below $m$, and $m \\le n$."
          },
          {
            "line": "So $f - r$ has the same term in $x^n$ as $f$, its leading term, and degree $n$.",
            "reason": "Collecting like terms: by line 4, $r$ has no term in $x^n$ or a higher power."
          },
          {
            "line": "So $d \\cdot q$ has degree $n$.",
            "reason": "Lines 2 and 5."
          },
          {
            "line": "So $q$ is not the zero polynomial, since $d \\cdot 0 = 0$ has no degree.",
            "reason": "Line 6: the zero polynomial has no degree."
          },
          {
            "line": "The degree of $d \\cdot q$ is $m$ plus the degree of $q$.",
            "reason": "Degree of a product is the sum of the degrees."
          },
          {
            "line": "So $m$ plus the degree of $q$ equals $n$.",
            "reason": "Lines 6 and 8."
          },
          {
            "line": "Therefore the degree of $q$ is $n - m$.",
            "reason": "Adding the same number to both sides: $m$ is taken from both sides."
          }
        ]
      }
    }
  ]
}
