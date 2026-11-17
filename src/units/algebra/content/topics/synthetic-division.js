export default {
  "number": 194,
  "title": "Synthetic division",
  "section": 11,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "177-184"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the quotient when $-2x^4 + 6x^3 + 2x^2 + 7x + 8$ is divided by $x - 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-2*x^3+2*x^2+6*x+19",
    "solution": [
      "Find the quotient when $-2x^4 + 6x^3 + 2x^2 + 7x + 8$ is divided by $x - 2$.",
      "The number on the left is $2$, and the top row is $-2$, $6$, $2$, $7$, $8$.",
      "$\\begin{array}{r|rrrrr} 2 & -2 & 6 & 2 & 7 & 8 \\\\ & & -4 & 4 & 12 & 38 \\\\ \\hline & -2 & 2 & 6 & 19 & 46 \\end{array}$",
      "The quotient is $-2x^3 + 2x^2 + 6x + 19$."
    ]
  },
  "ideas": [
    {
      "name": "Synthetic division",
      "concrete": "To divide $5x^3 - 2x^2 + 3x - 4$ by $x - 2$, the number $2$ goes on the left and the coefficients $5$, $-2$, $3$ and $-4$ go in the top row. The $5$ is brought down; then $-2 + 2 \\cdot 5 = 8$, $3 + 2 \\cdot 8 = 19$ and $-4 + 2 \\cdot 19 = 34$. The quotient is $5x^2 + 8x + 19$ and the remainder is $34$: $5x^3 - 2x^2 + 3x - 4 = (x - 2)(5x^2 + 8x + 19) + 34$.",
      "general": "For a polynomial $f(x) = a_nx^n + \\dots + a_1x + a_0$ of degree $n \\ge 1$ and a number $c$, **synthetic division** of $f$ by $x - c$ writes $c$ on the left and $a_n, \\dots, a_1, a_0$ in the top row, with $0$ for each missing power. It brings down $b_{n-1} = a_n$, then forms $b_{i-1} = a_i + cb_i$ for $i = n - 1$ down to $i = 1$, and last $r = a_0 + cb_0$. The quotient of $f$ by $x - c$ is $b_{n-1}x^{n-1} + \\dots + b_1x + b_0$ and the remainder is $r$. For a divisor $dx - e$ with $d \\ne 0$, synthetic division by $x - \\dfrac{e}{d}$ gives a quotient $q(x)$ and a remainder $r$; dividing $f$ by $dx - e$ then gives the quotient $\\dfrac{1}{d}q(x)$ and the same remainder $r$."
    }
  ],
  "kinds": [
    {
      "id": "t194-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the quotient when $-2x^4 - 5x^3 - 6x^2 - 4x + 7$ is divided by $x - 3$.",
            "lines": [
              {
                "step": "Find the quotient when $-2x^4 - 5x^3 - 6x^2 - 4x + 7$ is divided by $x - 3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The number on the left is $3$, and the top row is $-2$, $-5$, $-6$, $-4$, $7$.",
                "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} 3 & -2 & -5 & -6 & -4 & 7 \\\\ & & -6 & -33 & -117 & -363 \\\\ \\hline & -2 & -11 & -39 & -121 & -356 \\end{array}$",
                "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "The quotient is $-2x^3 - 11x^2 - 39x - 121$.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quotient when $-5x^3 + 8x^2 - 2x + 9$ is divided by $x - 5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-5*x^2-17*x-87",
              "lines": [
                {
                  "step": "Find the quotient when $-5x^3 + 8x^2 - 2x + 9$ is divided by $x - 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number on the left is $5$, and the top row is $-5$, $8$, $-2$, $9$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 5 & -5 & 8 & -2 & 9 \\\\ & & -25 & -85 & -435 \\\\ \\hline & -5 & -17 & -87 & -426 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $-5x^2 - 17x - 87$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $-2x^4 + 7x^2 + 9x + 2$ is divided by $x - 4$.",
              "form": "Answer as an integer.",
              "answer": "-362",
              "lines": [
                {
                  "step": "Find the remainder when $-2x^4 + 7x^2 + 9x + 2$ is divided by $x - 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number on the left is $4$, and the top row is $-2$, $0$, $7$, $9$, $2$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrrr} 4 & -2 & 0 & 7 & 9 & 2 \\\\ & & -8 & -32 & -100 & -364 \\\\ \\hline & -2 & -8 & -25 & -91 & -362 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The remainder is $-362$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                }
              ]
            },
            {
              "prompt": "Find the quotient when $-6x^3 - 3x^2 + 4x - 6$ is divided by $x - 2$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-6*x^2-15*x-26",
              "lines": [
                {
                  "step": "Find the quotient when $-6x^3 - 3x^2 + 4x - 6$ is divided by $x - 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number on the left is $2$, and the top row is $-6$, $-3$, $4$, $-6$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} 2 & -6 & -3 & 4 & -6 \\\\ & & -12 & -30 & -52 \\\\ \\hline & -6 & -15 & -26 & -58 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $-6x^2 - 15x - 26$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the quotient when $2x^4 - 2x^3 - 3x^2 + 9x + 8$ is divided by $x + 2$.",
            "lines": [
              {
                "step": "Find the quotient when $2x^4 - 2x^3 - 3x^2 + 9x + 8$ is divided by $x + 2$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x + 2 = x - (-2)$",
                "reason": "Subtraction as addition: taking away $-2$ adds $2$, so the divisor $x + 2$ is $x - c$ with $c = -2$."
              },
              {
                "step": "The number on the left is $-2$, and the top row is $2$, $-2$, $-3$, $9$, $8$.",
                "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
              },
              {
                "step": "$\\begin{array}{r|rrrrr} -2 & 2 & -2 & -3 & 9 & 8 \\\\ & & -4 & 12 & -18 & 18 \\\\ \\hline & 2 & -6 & 9 & -9 & 26 \\end{array}$",
                "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "The quotient is $2x^3 - 6x^2 + 9x - 9$.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quotient when $6x^3 + 2x^2 + 5x - 7$ is divided by $x + 3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*x^2-16*x+53",
              "lines": [
                {
                  "step": "Find the quotient when $6x^3 + 2x^2 + 5x - 7$ is divided by $x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 3 = x - (-3)$",
                  "reason": "Subtraction as addition: taking away $-3$ adds $3$, so the divisor $x + 3$ is $x - c$ with $c = -3$."
                },
                {
                  "step": "The number on the left is $-3$, and the top row is $6$, $2$, $5$, $-7$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -3 & 6 & 2 & 5 & -7 \\\\ & & -18 & 48 & -159 \\\\ \\hline & 6 & -16 & 53 & -166 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $6x^2 - 16x + 53$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $7x^3 + 3x^2 + 8$ is divided by $x + 4$.",
              "form": "Answer as an integer.",
              "answer": "-392",
              "lines": [
                {
                  "step": "Find the remainder when $7x^3 + 3x^2 + 8$ is divided by $x + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 4 = x - (-4)$",
                  "reason": "Subtraction as addition: taking away $-4$ adds $4$, so the divisor $x + 4$ is $x - c$ with $c = -4$."
                },
                {
                  "step": "The number on the left is $-4$, and the top row is $7$, $3$, $0$, $8$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -4 & 7 & 3 & 0 & 8 \\\\ & & -28 & 100 & -400 \\\\ \\hline & 7 & -25 & 100 & -392 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The remainder is $-392$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                }
              ]
            },
            {
              "prompt": "Find the quotient when $-5x^3 + 5x^2 - 8x - 5$ is divided by $x + 5$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-5*x^2+30*x-158",
              "lines": [
                {
                  "step": "Find the quotient when $-5x^3 + 5x^2 - 8x - 5$ is divided by $x + 5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x + 5 = x - (-5)$",
                  "reason": "Subtraction as addition: taking away $-5$ adds $5$, so the divisor $x + 5$ is $x - c$ with $c = -5$."
                },
                {
                  "step": "The number on the left is $-5$, and the top row is $-5$, $5$, $-8$, $-5$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -5 & -5 & 5 & -8 & -5 \\\\ & & 25 & -150 & 790 \\\\ \\hline & -5 & 30 & -158 & 785 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "The quotient is $-5x^2 + 30x - 158$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the quotient when $-20x^3 + 21x^2 - 24x - 4$ is divided by $4x - 1$.",
            "lines": [
              {
                "step": "Find the quotient when $-20x^3 + 21x^2 - 24x - 4$ is divided by $4x - 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$4x - 1 = 4\\left(x - \\dfrac{1}{4}\\right)$",
                "reason": "Taking out a common factor: $4$ is taken out of both terms, which leaves the divisor $x - \\dfrac{1}{4}$."
              },
              {
                "step": "The number on the left is $\\dfrac{1}{4}$, and the top row is $-20$, $21$, $-24$, $-4$.",
                "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
              },
              {
                "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{4} & -20 & 21 & -24 & -4 \\\\ & & -5 & 4 & -5 \\\\ \\hline & -20 & 16 & -20 & -9 \\end{array}$",
                "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$-20x^3 + 21x^2 - 24x - 4 = \\left(x - \\dfrac{1}{4}\\right)\\left(-20x^2 + 16x - 20\\right) - 9$",
                "reason": "Synthetic division and the division statement: the bottom row gives the quotient $-20x^2 + 16x - 20$ and the remainder $-9$ for the divisor $x - \\dfrac{1}{4}$, and the dividend is the divisor times the quotient, plus the remainder."
              },
              {
                "step": "$-20x^3 + 21x^2 - 24x - 4 = \\left(x - \\dfrac{1}{4}\\right) \\cdot 4\\left(-5x^2 + 4x - 5\\right) - 9$",
                "reason": "Taking out a common factor: $4$ is taken out of the second bracket, each coefficient divided by $4$."
              },
              {
                "step": "$-20x^3 + 21x^2 - 24x - 4 = \\left(4x - 1\\right)\\left(-5x^2 + 4x - 5\\right) - 9$",
                "reason": "Multiplying out: $\\left(x - \\dfrac{1}{4}\\right) \\cdot 4 = 4x - 1$."
              },
              {
                "step": "The quotient is $-5x^2 + 4x - 5$.",
                "reason": "Division statement and degree of the remainder: line 7 writes the dividend as $4x - 1$ times a polynomial plus the number $-9$, whose degree is below the degree $1$ of $4x - 1$, so line 7 is the division of the dividend by $4x - 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quotient when $10x^3 - 49x^2 + 55x - 23$ is divided by $-2x + 7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "-5*x^2+7*x-3",
              "lines": [
                {
                  "step": "Find the quotient when $10x^3 - 49x^2 + 55x - 23$ is divided by $-2x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x + 7 = -2\\left(x - \\dfrac{7}{2}\\right)$",
                  "reason": "Taking out a common factor: $-2$ is taken out of both terms, which leaves the divisor $x - \\dfrac{7}{2}$."
                },
                {
                  "step": "The number on the left is $\\dfrac{7}{2}$, and the top row is $10$, $-49$, $55$, $-23$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{7}{2} & 10 & -49 & 55 & -23 \\\\ & & 35 & -49 & 21 \\\\ \\hline & 10 & -14 & 6 & -2 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$10x^3 - 49x^2 + 55x - 23 = \\left(x - \\dfrac{7}{2}\\right)\\left(10x^2 - 14x + 6\\right) - 2$",
                  "reason": "Synthetic division and the division statement: the bottom row gives the quotient $10x^2 - 14x + 6$ and the remainder $-2$ for the divisor $x - \\dfrac{7}{2}$, and the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$10x^3 - 49x^2 + 55x - 23 = \\left(x - \\dfrac{7}{2}\\right) \\cdot (-2)\\left(-5x^2 + 7x - 3\\right) - 2$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the second bracket, each coefficient divided by $-2$."
                },
                {
                  "step": "$10x^3 - 49x^2 + 55x - 23 = \\left(-2x + 7\\right)\\left(-5x^2 + 7x - 3\\right) - 2$",
                  "reason": "Multiplying out: $\\left(x - \\dfrac{7}{2}\\right) \\cdot (-2) = -2x + 7$."
                },
                {
                  "step": "The quotient is $-5x^2 + 7x - 3$.",
                  "reason": "Division statement and degree of the remainder: line 7 writes the dividend as $-2x + 7$ times a polynomial plus the number $-2$, whose degree is below the degree $1$ of $-2x + 7$, so line 7 is the division of the dividend by $-2x + 7$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $15x^3 + 4x^2 + 18x - 16$ is divided by $1 - 3x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-9",
              "lines": [
                {
                  "step": "Find the remainder when $15x^3 + 4x^2 + 18x - 16$ is divided by $1 - 3x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 - 3x = -3\\left(x - \\dfrac{1}{3}\\right)$",
                  "reason": "Taking out a common factor: $-3$ is taken out of both terms, which leaves the divisor $x - \\dfrac{1}{3}$."
                },
                {
                  "step": "The number on the left is $\\dfrac{1}{3}$, and the top row is $15$, $4$, $18$, $-16$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} \\dfrac{1}{3} & 15 & 4 & 18 & -16 \\\\ & & 5 & 3 & 7 \\\\ \\hline & 15 & 9 & 21 & -9 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$15x^3 + 4x^2 + 18x - 16 = \\left(x - \\dfrac{1}{3}\\right)\\left(15x^2 + 9x + 21\\right) - 9$",
                  "reason": "Synthetic division and the division statement: the bottom row gives the quotient $15x^2 + 9x + 21$ and the remainder $-9$ for the divisor $x - \\dfrac{1}{3}$, and the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$15x^3 + 4x^2 + 18x - 16 = \\left(x - \\dfrac{1}{3}\\right) \\cdot (-3)\\left(-5x^2 - 3x - 7\\right) - 9$",
                  "reason": "Taking out a common factor: $-3$ is taken out of the second bracket, each coefficient divided by $-3$."
                },
                {
                  "step": "$15x^3 + 4x^2 + 18x - 16 = \\left(1 - 3x\\right)\\left(-5x^2 - 3x - 7\\right) - 9$",
                  "reason": "Multiplying out: $\\left(x - \\dfrac{1}{3}\\right) \\cdot (-3) = 1 - 3x$."
                },
                {
                  "step": "The remainder is $-9$.",
                  "reason": "Division statement and degree of the remainder: line 7 writes the dividend as $1 - 3x$ times a polynomial plus the number $-9$, whose degree is below the degree $1$ of $1 - 3x$, so line 7 is the division of the dividend by $1 - 3x$."
                }
              ]
            },
            {
              "prompt": "Find the quotient when $5x^2 + 8x - 6$ is divided by $2x - 3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "5*x/2+31/4",
              "lines": [
                {
                  "step": "Find the quotient when $5x^2 + 8x - 6$ is divided by $2x - 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x - 3 = 2\\left(x - \\dfrac{3}{2}\\right)$",
                  "reason": "Taking out a common factor: $2$ is taken out of both terms, which leaves the divisor $x - \\dfrac{3}{2}$."
                },
                {
                  "step": "The number on the left is $\\dfrac{3}{2}$, and the top row is $5$, $8$, $-6$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrr} \\dfrac{3}{2} & 5 & 8 & -6 \\\\ & & \\dfrac{15}{2} & \\dfrac{93}{4} \\\\ \\hline & 5 & \\dfrac{31}{2} & \\dfrac{69}{4} \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$5x^2 + 8x - 6 = \\left(x - \\dfrac{3}{2}\\right)\\left(5x + \\dfrac{31}{2}\\right) + \\dfrac{69}{4}$",
                  "reason": "Synthetic division and the division statement: the bottom row gives the quotient $5x + \\dfrac{31}{2}$ and the remainder $\\dfrac{69}{4}$ for the divisor $x - \\dfrac{3}{2}$, and the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$5x^2 + 8x - 6 = \\left(x - \\dfrac{3}{2}\\right) \\cdot 2\\left(\\dfrac{5}{2}x + \\dfrac{31}{4}\\right) + \\dfrac{69}{4}$",
                  "reason": "Taking out a common factor: $2$ is taken out of the second bracket, each coefficient divided by $2$."
                },
                {
                  "step": "$5x^2 + 8x - 6 = \\left(2x - 3\\right)\\left(\\dfrac{5}{2}x + \\dfrac{31}{4}\\right) + \\dfrac{69}{4}$",
                  "reason": "Multiplying out: $\\left(x - \\dfrac{3}{2}\\right) \\cdot 2 = 2x - 3$."
                },
                {
                  "step": "The quotient is $\\dfrac{5}{2}x + \\dfrac{31}{4}$.",
                  "reason": "Division statement and degree of the remainder: line 7 writes the dividend as $2x - 3$ times a polynomial plus the number $\\dfrac{69}{4}$, whose degree is below the degree $1$ of $2x - 3$, so line 7 is the division of the dividend by $2x - 3$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the quotient when $18x^3 + 12x^2 - 37x - 22$ is divided by $3x + 4$.",
            "lines": [
              {
                "step": "Find the quotient when $18x^3 + 12x^2 - 37x - 22$ is divided by $3x + 4$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3x + 4 = 3\\left(x + \\dfrac{4}{3}\\right)$",
                "reason": "Taking out a common factor: $3$ is taken out of both terms, which leaves the divisor $x + \\dfrac{4}{3}$."
              },
              {
                "step": "$x + \\dfrac{4}{3} = x - \\left(-\\dfrac{4}{3}\\right)$",
                "reason": "Subtraction as addition: taking away $-\\dfrac{4}{3}$ adds $\\dfrac{4}{3}$, so the divisor $x + \\dfrac{4}{3}$ is $x - c$ with $c = -\\dfrac{4}{3}$."
              },
              {
                "step": "The number on the left is $-\\dfrac{4}{3}$, and the top row is $18$, $12$, $-37$, $-22$.",
                "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
              },
              {
                "step": "$\\begin{array}{r|rrrr} -\\dfrac{4}{3} & 18 & 12 & -37 & -22 \\\\ & & -24 & 16 & 28 \\\\ \\hline & 18 & -12 & -21 & 6 \\end{array}$",
                "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
              },
              {
                "step": "$18x^3 + 12x^2 - 37x - 22 = \\left(x + \\dfrac{4}{3}\\right)\\left(18x^2 - 12x - 21\\right) + 6$",
                "reason": "Synthetic division and the division statement: the bottom row gives the quotient $18x^2 - 12x - 21$ and the remainder $6$ for the divisor $x + \\dfrac{4}{3}$, and the dividend is the divisor times the quotient, plus the remainder."
              },
              {
                "step": "$18x^3 + 12x^2 - 37x - 22 = \\left(x + \\dfrac{4}{3}\\right) \\cdot 3\\left(6x^2 - 4x - 7\\right) + 6$",
                "reason": "Taking out a common factor: $3$ is taken out of the second bracket, each coefficient divided by $3$."
              },
              {
                "step": "$18x^3 + 12x^2 - 37x - 22 = \\left(3x + 4\\right)\\left(6x^2 - 4x - 7\\right) + 6$",
                "reason": "Multiplying out: $\\left(x + \\dfrac{4}{3}\\right) \\cdot 3 = 3x + 4$."
              },
              {
                "step": "The quotient is $6x^2 - 4x - 7$.",
                "reason": "Division statement and degree of the remainder: line 8 writes the dividend as $3x + 4$ times a polynomial plus the number $6$, whose degree is below the degree $1$ of $3x + 4$, so line 8 is the division of the dividend by $3x + 4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the quotient when $-12x^3 - 52x^2 - 29x + 13$ is divided by $-2x - 7$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "6*x^2+5*x-3",
              "lines": [
                {
                  "step": "Find the quotient when $-12x^3 - 52x^2 - 29x + 13$ is divided by $-2x - 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2x - 7 = -2\\left(x + \\dfrac{7}{2}\\right)$",
                  "reason": "Taking out a common factor: $-2$ is taken out of both terms, which leaves the divisor $x + \\dfrac{7}{2}$."
                },
                {
                  "step": "$x + \\dfrac{7}{2} = x - \\left(-\\dfrac{7}{2}\\right)$",
                  "reason": "Subtraction as addition: taking away $-\\dfrac{7}{2}$ adds $\\dfrac{7}{2}$, so the divisor $x + \\dfrac{7}{2}$ is $x - c$ with $c = -\\dfrac{7}{2}$."
                },
                {
                  "step": "The number on the left is $-\\dfrac{7}{2}$, and the top row is $-12$, $-52$, $-29$, $13$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{7}{2} & -12 & -52 & -29 & 13 \\\\ & & 42 & 35 & -21 \\\\ \\hline & -12 & -10 & 6 & -8 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$-12x^3 - 52x^2 - 29x + 13 = \\left(x + \\dfrac{7}{2}\\right)\\left(-12x^2 - 10x + 6\\right) - 8$",
                  "reason": "Synthetic division and the division statement: the bottom row gives the quotient $-12x^2 - 10x + 6$ and the remainder $-8$ for the divisor $x + \\dfrac{7}{2}$, and the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$-12x^3 - 52x^2 - 29x + 13 = \\left(x + \\dfrac{7}{2}\\right) \\cdot (-2)\\left(6x^2 + 5x - 3\\right) - 8$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the second bracket, each coefficient divided by $-2$."
                },
                {
                  "step": "$-12x^3 - 52x^2 - 29x + 13 = \\left(-2x - 7\\right)\\left(6x^2 + 5x - 3\\right) - 8$",
                  "reason": "Multiplying out: $\\left(x + \\dfrac{7}{2}\\right) \\cdot (-2) = -2x - 7$."
                },
                {
                  "step": "The quotient is $6x^2 + 5x - 3$.",
                  "reason": "Division statement and degree of the remainder: line 8 writes the dividend as $-2x - 7$ times a polynomial plus the number $-8$, whose degree is below the degree $1$ of $-2x - 7$, so line 8 is the division of the dividend by $-2x - 7$."
                }
              ]
            },
            {
              "prompt": "Find the remainder when $20x^3 - 15x^2 - 29x - 18$ is divided by $1 + 4x$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-12",
              "lines": [
                {
                  "step": "Find the remainder when $20x^3 - 15x^2 - 29x - 18$ is divided by $1 + 4x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$1 + 4x = 4\\left(x + \\dfrac{1}{4}\\right)$",
                  "reason": "Taking out a common factor: $4$ is taken out of both terms, which leaves the divisor $x + \\dfrac{1}{4}$."
                },
                {
                  "step": "$x + \\dfrac{1}{4} = x - \\left(-\\dfrac{1}{4}\\right)$",
                  "reason": "Subtraction as addition: taking away $-\\dfrac{1}{4}$ adds $\\dfrac{1}{4}$, so the divisor $x + \\dfrac{1}{4}$ is $x - c$ with $c = -\\dfrac{1}{4}$."
                },
                {
                  "step": "The number on the left is $-\\dfrac{1}{4}$, and the top row is $20$, $-15$, $-29$, $-18$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrrr} -\\dfrac{1}{4} & 20 & -15 & -29 & -18 \\\\ & & -5 & 5 & 6 \\\\ \\hline & 20 & -20 & -24 & -12 \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$20x^3 - 15x^2 - 29x - 18 = \\left(x + \\dfrac{1}{4}\\right)\\left(20x^2 - 20x - 24\\right) - 12$",
                  "reason": "Synthetic division and the division statement: the bottom row gives the quotient $20x^2 - 20x - 24$ and the remainder $-12$ for the divisor $x + \\dfrac{1}{4}$, and the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$20x^3 - 15x^2 - 29x - 18 = \\left(x + \\dfrac{1}{4}\\right) \\cdot 4\\left(5x^2 - 5x - 6\\right) - 12$",
                  "reason": "Taking out a common factor: $4$ is taken out of the second bracket, each coefficient divided by $4$."
                },
                {
                  "step": "$20x^3 - 15x^2 - 29x - 18 = \\left(1 + 4x\\right)\\left(5x^2 - 5x - 6\\right) - 12$",
                  "reason": "Multiplying out: $\\left(x + \\dfrac{1}{4}\\right) \\cdot 4 = 1 + 4x$."
                },
                {
                  "step": "The remainder is $-12$.",
                  "reason": "Division statement and degree of the remainder: line 8 writes the dividend as $1 + 4x$ times a polynomial plus the number $-12$, whose degree is below the degree $1$ of $1 + 4x$, so line 8 is the division of the dividend by $1 + 4x$."
                }
              ]
            },
            {
              "prompt": "Find the quotient when $9x^2 - 2x + 8$ is divided by $2x + 3$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "9*x/2-31/4",
              "lines": [
                {
                  "step": "Find the quotient when $9x^2 - 2x + 8$ is divided by $2x + 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x + 3 = 2\\left(x + \\dfrac{3}{2}\\right)$",
                  "reason": "Taking out a common factor: $2$ is taken out of both terms, which leaves the divisor $x + \\dfrac{3}{2}$."
                },
                {
                  "step": "$x + \\dfrac{3}{2} = x - \\left(-\\dfrac{3}{2}\\right)$",
                  "reason": "Subtraction as addition: taking away $-\\dfrac{3}{2}$ adds $\\dfrac{3}{2}$, so the divisor $x + \\dfrac{3}{2}$ is $x - c$ with $c = -\\dfrac{3}{2}$."
                },
                {
                  "step": "The number on the left is $-\\dfrac{3}{2}$, and the top row is $9$, $-2$, $8$.",
                  "reason": "Synthetic division: the number $c$ of the divisor $x - c$ stands on the left, and the top row holds the coefficients of the dividend from its highest power down to its constant term, with $0$ for each missing power."
                },
                {
                  "step": "$\\begin{array}{r|rrr} -\\dfrac{3}{2} & 9 & -2 & 8 \\\\ & & -\\dfrac{27}{2} & \\dfrac{93}{4} \\\\ \\hline & 9 & -\\dfrac{31}{2} & \\dfrac{125}{4} \\end{array}$",
                  "reason": "Synthetic division: the first top number is brought down, and each later bottom number is the top number above it plus the number on the left times the bottom number before it."
                },
                {
                  "step": "$9x^2 - 2x + 8 = \\left(x + \\dfrac{3}{2}\\right)\\left(9x - \\dfrac{31}{2}\\right) + \\dfrac{125}{4}$",
                  "reason": "Synthetic division and the division statement: the bottom row gives the quotient $9x - \\dfrac{31}{2}$ and the remainder $\\dfrac{125}{4}$ for the divisor $x + \\dfrac{3}{2}$, and the dividend is the divisor times the quotient, plus the remainder."
                },
                {
                  "step": "$9x^2 - 2x + 8 = \\left(x + \\dfrac{3}{2}\\right) \\cdot 2\\left(\\dfrac{9}{2}x - \\dfrac{31}{4}\\right) + \\dfrac{125}{4}$",
                  "reason": "Taking out a common factor: $2$ is taken out of the second bracket, each coefficient divided by $2$."
                },
                {
                  "step": "$9x^2 - 2x + 8 = \\left(2x + 3\\right)\\left(\\dfrac{9}{2}x - \\dfrac{31}{4}\\right) + \\dfrac{125}{4}$",
                  "reason": "Multiplying out: $\\left(x + \\dfrac{3}{2}\\right) \\cdot 2 = 2x + 3$."
                },
                {
                  "step": "The quotient is $\\dfrac{9}{2}x - \\dfrac{31}{4}$.",
                  "reason": "Division statement and degree of the remainder: line 8 writes the dividend as $2x + 3$ times a polynomial plus the number $\\dfrac{125}{4}$, whose degree is below the degree $1$ of $2x + 3$, so line 8 is the division of the dividend by $2x + 3$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t194-k2",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this synthetic division of $-7x^3 - 8x^2 - 9$ by $x + 4$, and write that line right.",
            "given": [
              "$-7x^3 - 8x^2 - 9 = -7x^3 - 8x^2 + 0x - 9$",
              "$x + 4 = x - (-4)$",
              "$(-4) \\cdot (-7) + (-8) = -28 + (-8) = -36$",
              "$(-4) \\cdot (-36) + 0 = 144 + 0 = 144$",
              "$(-4) \\cdot 144 + (-9) = -576 + (-9) = -585$",
              "$-7x^3 - 8x^2 - 9 = (x + 4)(-7x^2 - 36x + 144) - 585$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this synthetic division of $-7x^3 - 8x^2 - 9$ by $x + 4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 writes the missing power with $0$, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 3 writes $(-4) \\cdot (-7) = -28$ where the rule gives $28$.",
                "reason": "A sign lost: by the signs of products, from arithmetic, a negative number times a negative number is positive."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Synthetic division: each later line follows from the line before it, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $(-4) \\cdot (-7) + (-8) = 28 + (-8) = 20$.",
                "reason": "Synthetic division, with every sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this synthetic division of $-4x^3 - 3x^2 + 3$ by $x + 3$, and write that line right.",
              "given": [
                "$-4x^3 - 3x^2 + 3 = -4x^3 - 3x^2 + 0x + 3$",
                "$x + 3 = x - 3$",
                "$3 \\cdot (-4) + (-3) = -12 + (-3) = -15$",
                "$3 \\cdot (-15) + 0 = -45 + 0 = -45$",
                "$3 \\cdot (-45) + 3 = -135 + 3 = -132$",
                "$-4x^3 - 3x^2 + 3 = (x + 3)(-4x^2 - 15x - 45) - 132$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x+3 = x-(-3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this synthetic division of $-4x^3 - 3x^2 + 3$ by $x + 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 writes the missing power with $0$, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 writes $x + 3 = x - 3$, so $3$ goes on the left where the rule puts $-3$.",
                  "reason": "A sign lost: by subtraction as addition, $x - (-3) = x + 3$, so the number on the left for the divisor $x + 3$ is $-3$."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Synthetic division: each later line follows from the line before it, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $x + 3 = x - (-3)$.",
                  "reason": "Synthetic division, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this synthetic division of $-5x^3 - 9x - 9$ by $x + 5$, and write that line right.",
              "given": [
                "$-5x^3 - 9x - 9 = -5x^3 + 0x^2 - 9x - 9$",
                "$x + 5 = x - (-5)$",
                "$(-5) \\cdot (-5) + 0 = 25 + 0 = 25$",
                "$(-5) \\cdot 25 + (-9) = 125 + (-9) = 116$",
                "$(-5) \\cdot 116 + (-9) = -580 + (-9) = -589$",
                "$-5x^3 - 9x - 9 = (x + 5)(-5x^2 + 25x + 116) - 589$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (-5)*25+(-9) = -125+(-9) = -134",
              "lines": [
                {
                  "step": "Find the first wrong line in this synthetic division of $-5x^3 - 9x - 9$ by $x + 5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1, 2 and 3 are right.",
                  "reason": "Line 1 writes the missing power with $0$, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 4 writes $(-5) \\cdot 25 = 125$ where the rule gives $-125$.",
                  "reason": "A sign lost: by the signs of products, from arithmetic, a negative number times a positive number is negative."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Synthetic division: each later line follows from the line before it, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $(-5) \\cdot 25 + (-9) = -125 + (-9) = -134$.",
                  "reason": "Synthetic division, with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this synthetic division of $-3x^3 + 8x^2 + 3$ by $x + 6$, and write that line right.",
              "given": [
                "$-3x^3 + 8x^2 + 3 = -3x^3 + 8x^2 + 0x + 3$",
                "$x + 6 = x - (-6)$",
                "$(-6) \\cdot (-3) + 8 = 18 + 8 = 26$",
                "$(-6) \\cdot 26 + 0 = -156 + 0 = -156$",
                "$(-6) \\cdot (-156) + 3 = -936 + 3 = -933$",
                "$-3x^3 + 8x^2 + 3 = (x + 6)(-3x^2 + 26x - 156) - 933$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: (-6)*(-156)+3 = 936+3 = 939",
              "lines": [
                {
                  "step": "Find the first wrong line in this synthetic division of $-3x^3 + 8x^2 + 3$ by $x + 6$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Line 1 writes the missing power with $0$, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 5 writes $(-6) \\cdot (-156) = -936$ where the rule gives $936$.",
                  "reason": "A sign lost: by the signs of products, from arithmetic, a negative number times a negative number is positive."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Synthetic division: each later line follows from the line before it, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 5 written right is $(-6) \\cdot (-156) + 3 = 936 + 3 = 939$.",
                  "reason": "Synthetic division, with every sign kept."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this synthetic division of $12x^3 - 20x^2 - 15x - 14$ by $2x - 5$, and write that line right.",
            "given": [
              "$2x - 5 = 2x - 2 \\cdot \\dfrac{5}{2} = 2\\left(x - \\dfrac{5}{2}\\right)$",
              "$\\dfrac{5}{2} \\cdot 12 + (-20) = 30 + (-20) = 10$",
              "$\\dfrac{5}{2} \\cdot 10 = 25 + (-15) = 10$",
              "$\\dfrac{5}{2} \\cdot 10 + (-14) = 25 + (-14) = 11$",
              "$12x^3 - 20x^2 - 15x - 14 = \\left(x - \\dfrac{5}{2}\\right)\\left(12x^2 + 10x + 10\\right) + 11 = (2x - 5)(6x^2 + 5x + 5) + 11$",
              "The quotient is $6x^2 + 5x + 5$ and the remainder is $11$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this synthetic division of $12x^3 - 20x^2 - 15x - 14$ by $2x - 5$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 takes out the common factor $2$, and each line before the wrong one follows by a rule that holds."
              },
              {
                "step": "Line 3 states $\\dfrac{5}{2} \\cdot 10 = 25 + (-15)$, which is false, since $\\dfrac{5}{2} \\cdot 10 = 25$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, so the $-15$ added on the right is added on the left as well."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Synthetic division: each later line follows from the line before it."
              },
              {
                "step": "Line 3 written right is $\\dfrac{5}{2} \\cdot 10 + (-15) = 25 + (-15) = 10$.",
                "reason": "Synthetic division, with each equals sign joining two sides that are the same."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this synthetic division of $24x^3 - 46x^2 + 37x - 2$ by $4x - 3$, and write that line right.",
              "given": [
                "$4x - 3 = 4x - 4 \\cdot \\dfrac{3}{4} = 4\\left(x - \\dfrac{3}{4}\\right)$",
                "$\\dfrac{3}{4} \\cdot 24 = 18 + (-46) = -28$",
                "$\\dfrac{3}{4} \\cdot (-28) + 37 = -21 + 37 = 16$",
                "$\\dfrac{3}{4} \\cdot 16 + (-2) = 12 + (-2) = 10$",
                "$24x^3 - 46x^2 + 37x - 2 = \\left(x - \\dfrac{3}{4}\\right)\\left(24x^2 - 28x + 16\\right) + 10 = (4x - 3)(6x^2 - 7x + 4) + 10$",
                "The quotient is $6x^2 - 7x + 4$ and the remainder is $10$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (3/4)*24+(-46) = 18+(-46) = -28",
              "lines": [
                {
                  "step": "Find the first wrong line in this synthetic division of $24x^3 - 46x^2 + 37x - 2$ by $4x - 3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 takes out the common factor $4$, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 2 states $\\dfrac{3}{4} \\cdot 24 = 18 + (-46)$, which is false, since $\\dfrac{3}{4} \\cdot 24 = 18$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, so the $-46$ added on the right is added on the left as well."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Synthetic division: each later line follows from the line before it."
                },
                {
                  "step": "Line 2 written right is $\\dfrac{3}{4} \\cdot 24 + (-46) = 18 + (-46) = -28$.",
                  "reason": "Synthetic division, with each equals sign joining two sides that are the same."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this synthetic division of $12x^3 - 46x^2 - 26x - 52$ by $2x - 9$, and write that line right.",
              "given": [
                "$2x - 9 = 2x - 2 \\cdot \\dfrac{9}{2} = 2\\left(x - \\dfrac{9}{2}\\right)$",
                "$\\dfrac{9}{2} \\cdot 12 + (-46) = 54 + (-46) = 8$",
                "$\\dfrac{9}{2} \\cdot 8 + (-26) = 36 + (-26) = 10$",
                "$\\dfrac{9}{2} \\cdot 10 = 45 + (-52) = -7$",
                "$12x^3 - 46x^2 - 26x - 52 = \\left(x - \\dfrac{9}{2}\\right)\\left(12x^2 + 8x + 10\\right) - 7 = (2x - 9)(6x^2 + 4x + 5) - 7$",
                "The quotient is $6x^2 + 4x + 5$ and the remainder is $-7$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (9/2)*10+(-52) = 45+(-52) = -7",
              "lines": [
                {
                  "step": "Find the first wrong line in this synthetic division of $12x^3 - 46x^2 - 26x - 52$ by $2x - 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1, 2 and 3 are right.",
                  "reason": "Line 1 takes out the common factor $2$, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 4 states $\\dfrac{9}{2} \\cdot 10 = 45 + (-52)$, which is false, since $\\dfrac{9}{2} \\cdot 10 = 45$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same number, so the $-52$ added on the right is added on the left as well."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Synthetic division: each later line follows from the line before it."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{9}{2} \\cdot 10 + (-52) = 45 + (-52) = -7$.",
                  "reason": "Synthetic division, with each equals sign joining two sides that are the same."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this synthetic division of $20x^3 - 17x^2 - 55x - 13$ by $4x - 9$, and write that line right.",
              "given": [
                "$4x - 9 = 4x - 4 \\cdot \\dfrac{9}{4} = 4\\left(x - \\dfrac{9}{4}\\right)$",
                "$\\dfrac{9}{4} \\cdot 20 + (-17) = 45 + (-17) = 28$",
                "$\\dfrac{9}{4} \\cdot 28 + (-55) = 63 + (-55) = 8$",
                "$\\dfrac{9}{4} \\cdot 8 + (-13) = 18 + (-13) = 5$",
                "$20x^3 - 17x^2 - 55x - 13 = \\left(x - \\dfrac{9}{4}\\right)\\left(20x^2 + 28x + 8\\right) + 5 = (4x - 9)(20x^2 + 28x + 8) + 5$",
                "The quotient is $20x^2 + 28x + 8$ and the remainder is $5$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 20*x^3-17*x^2-55*x-13 = (x-(9/4))*(20*x^2+28*x+8)+5 = (4*x-9)*(5*x^2+7*x+2)+5",
              "lines": [
                {
                  "step": "Find the first wrong line in this synthetic division of $20x^3 - 17x^2 - 55x - 13$ by $4x - 9$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right.",
                  "reason": "Line 1 takes out the common factor $4$, and each line before the wrong one follows by a rule that holds."
                },
                {
                  "step": "Line 5's second equals sign joins two sides that differ: $4x - 9$ is $4$ times $x - \\dfrac{9}{4}$, and the bracket $20x^2 + 28x + 8$ is left whole.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that its two sides are the same, so a factor multiplied by $4$ needs the other factor divided by $4$."
                },
                {
                  "step": "The later lines follow from line 5 as it is written, so line 5 is the first wrong line.",
                  "reason": "Synthetic division: each later line follows from the line before it."
                },
                {
                  "step": "Line 5 written right is $20x^3 - 17x^2 - 55x - 13 = \\left(x - \\dfrac{9}{4}\\right)\\left(20x^2 + 28x + 8\\right) + 5 = (4x - 9)(5x^2 + 7x + 2) + 5$.",
                  "reason": "Synthetic division, with each equals sign joining two sides that are the same."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t194-k3",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Synthetic division of a polynomial $y$ in $x$, with $7$ on the left, ends with the bottom row $3$, $5$, $-6$, $7$, $7$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Synthetic division of a polynomial $y$ in $x$, with $7$ on the left, ends with the bottom row $3$, $5$, $-6$, $7$, $7$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor is $x - 7$.",
                "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
              },
              {
                "step": "The quotient is $3x^3 + 5x^2 - 6x + 7$ and the remainder is $7$.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
              },
              {
                "step": "$y = (x - 7)(3x^3 + 5x^2 - 6x + 7) + 7$",
                "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: In a synthetic division of a polynomial $y$ in $x$, the bottom row is $-2$, $-9$, $8$, $-11$ and the number on the left is $3$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-3)*(-2*x^2-9*x+8)-11",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: In a synthetic division of a polynomial $y$ in $x$, the bottom row is $-2$, $-9$, $8$, $-11$ and the number on the left is $3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - 3$.",
                  "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
                },
                {
                  "step": "The quotient is $-2x^2 - 9x + 8$ and the remainder is $-11$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                },
                {
                  "step": "$y = (x - 3)(-2x^2 - 9x + 8) - 11$",
                  "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: A polynomial $y$ in $x$ is divided by synthetic division with $2$ on the left, and its bottom row reads $8$, $7$, $-5$, $6$, $11$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-2)*(8*x^3+7*x^2-5*x+6)+11",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: A polynomial $y$ in $x$ is divided by synthetic division with $2$ on the left, and its bottom row reads $8$, $7$, $-5$, $6$, $11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - 2$.",
                  "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
                },
                {
                  "step": "The quotient is $8x^3 + 7x^2 - 5x + 6$ and the remainder is $11$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                },
                {
                  "step": "$y = (x - 2)(8x^3 + 7x^2 - 5x + 6) + 11$",
                  "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Synthetic division of a polynomial $y$ in $x$, with $4$ on the left, ends with the bottom row $-7$, $-9$, $-5$, $3$, $5$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x-4)*(-7*x^3-9*x^2-5*x+3)+5",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Synthetic division of a polynomial $y$ in $x$, with $4$ on the left, ends with the bottom row $-7$, $-9$, $-5$, $3$, $5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - 4$.",
                  "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
                },
                {
                  "step": "The quotient is $-7x^3 - 9x^2 - 5x + 3$ and the remainder is $5$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                },
                {
                  "step": "$y = (x - 4)(-7x^3 - 9x^2 - 5x + 3) + 5$",
                  "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: In a synthetic division of a polynomial $y$ in $x$, the bottom row is $7$, $-2$, $9$, $-15$ and the number on the left is $-3$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: In a synthetic division of a polynomial $y$ in $x$, the bottom row is $7$, $-2$, $9$, $-15$ and the number on the left is $-3$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The divisor is $x - (-3)$.",
                "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
              },
              {
                "step": "$x - (-3) = x + 3$",
                "reason": "Subtraction as addition: taking away $-3$ adds $3$."
              },
              {
                "step": "The quotient is $7x^2 - 2x + 9$ and the remainder is $-15$.",
                "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
              },
              {
                "step": "$y = (x + 3)(7x^2 - 2x + 9) - 15$",
                "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: A polynomial $y$ in $x$ is divided by synthetic division with $-6$ on the left, and its bottom row reads $-2$, $-6$, $-2$, $5$, $-5$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+6)*(-2*x^3-6*x^2-2*x+5)-5",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: A polynomial $y$ in $x$ is divided by synthetic division with $-6$ on the left, and its bottom row reads $-2$, $-6$, $-2$, $5$, $-5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - (-6)$.",
                  "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
                },
                {
                  "step": "$x - (-6) = x + 6$",
                  "reason": "Subtraction as addition: taking away $-6$ adds $6$."
                },
                {
                  "step": "The quotient is $-2x^3 - 6x^2 - 2x + 5$ and the remainder is $-5$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                },
                {
                  "step": "$y = (x + 6)(-2x^3 - 6x^2 - 2x + 5) - 5$",
                  "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Synthetic division of a polynomial $y$ in $x$, with $-7$ on the left, ends with the bottom row $-4$, $7$, $3$, $9$, $9$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+7)*(-4*x^3+7*x^2+3*x+9)+9",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: Synthetic division of a polynomial $y$ in $x$, with $-7$ on the left, ends with the bottom row $-4$, $7$, $3$, $9$, $9$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - (-7)$.",
                  "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
                },
                {
                  "step": "$x - (-7) = x + 7$",
                  "reason": "Subtraction as addition: taking away $-7$ adds $7$."
                },
                {
                  "step": "The quotient is $-4x^3 + 7x^2 + 3x + 9$ and the remainder is $9$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                },
                {
                  "step": "$y = (x + 7)(-4x^3 + 7x^2 + 3x + 9) + 9$",
                  "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: In a synthetic division of a polynomial $y$ in $x$, the bottom row is $7$, $7$, $-8$, $3$ and the number on the left is $-5$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (x+5)*(7*x^2+7*x-8)+3",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and without multiplying out: In a synthetic division of a polynomial $y$ in $x$, the bottom row is $7$, $7$, $-8$, $3$ and the number on the left is $-5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The divisor is $x - (-5)$.",
                  "reason": "Synthetic division: the number $c$ on the left stands for the divisor $x - c$."
                },
                {
                  "step": "$x - (-5) = x + 5$",
                  "reason": "Subtraction as addition: taking away $-5$ adds $5$."
                },
                {
                  "step": "The quotient is $7x^2 + 7x - 8$ and the remainder is $3$.",
                  "reason": "Synthetic division: the bottom numbers before the last are the coefficients of the quotient, whose degree is one less than the dividend's, and the last bottom number is the remainder."
                },
                {
                  "step": "$y = (x + 5)(7x^2 + 7x - 8) + 3$",
                  "reason": "Writing a sentence as an equation and the division statement: the polynomial $y$ is the divisor times the quotient, plus the remainder, with $y$ alone on the left."
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
      "id": "t194-p1",
      "method": "direct proof",
      "statement": "Let $f(x) = a_nx^n + \\dots + a_1x + a_0$ be a polynomial of degree $n \\ge 1$, and $c$ a number. Let $b_{n-1} = a_n$, let $b_{i-1} = a_i + cb_i$ for $i = n - 1$ down to $i = 1$, and let $r = a_0 + cb_0$. Then $f(x) = (x - c)(b_{n-1}x^{n-1} + \\dots + b_1x + b_0) + r$, so dividing $f$ by $x - c$ gives the quotient $b_{n-1}x^{n-1} + \\dots + b_1x + b_0$ and the remainder $r$.",
      "idea": "Multiply the polynomial the bottom row gives by $x - c$, add $r$, and compare coefficients with $f$: the rule of the table is exactly the statement that each pair of coefficients agrees.",
      "lines": [
        {
          "line": "Let $q(x) = b_{n-1}x^{n-1} + \\dots + b_1x + b_0$.",
          "reason": "General form: the bottom numbers before the last are written as the coefficients of a polynomial, from $x^{n-1}$ down to the constant term."
        },
        {
          "line": "$(x - c)q(x) = xq(x) - cq(x)$",
          "reason": "Multiplying out: by the distributive law, $q(x)$ multiplies each term of $x - c$."
        },
        {
          "line": "$xq(x) = b_{n-1}x^n + \\dots + b_1x^2 + b_0x$",
          "reason": "Multiplying out, with the product law: each power of $x$ in $q(x)$ rises by $1$."
        },
        {
          "line": "$cq(x) = cb_{n-1}x^{n-1} + \\dots + cb_1x + cb_0$",
          "reason": "Multiplying out: $c$ multiplies each term of $q(x)$."
        },
        {
          "line": "In $(x - c)q(x) + r$, the coefficient of $x^n$ is $b_{n-1}$, the coefficient of $x^i$ for $i = 1, \\dots, n - 1$ is $b_{i-1} - cb_i$, and the constant term is $r - cb_0$.",
          "reason": "Collecting like terms: lines 2 to 4 give one term in each power of $x$ from $xq(x)$, one from $-cq(x)$, and the number $r$."
        },
        {
          "line": "$b_{n-1} = a_n$",
          "reason": "The hypothesis: the statement sets the first bottom number equal to the first top number."
        },
        {
          "line": "For $i = 1, \\dots, n - 1$, the numbers satisfy $b_{i-1} - cb_i = a_i$.",
          "reason": "Adding the same number to both sides: $cb_i$ is taken from both sides of $b_{i-1} = a_i + cb_i$."
        },
        {
          "line": "$r - cb_0 = a_0$",
          "reason": "Adding the same number to both sides: $cb_0$ is taken from both sides of $r = a_0 + cb_0$."
        },
        {
          "line": "$f(x) = (x - c)q(x) + r$",
          "reason": "General form: by lines 5 to 8 the two sides have the same coefficient for each power of $x$, and two polynomials with the same coefficients are the same polynomial."
        },
        {
          "line": "The number $r$ is $0$ or a polynomial of degree $0$, below the degree $1$ of $x - c$.",
          "reason": "Degree: a nonzero number is a polynomial of degree $0$."
        },
        {
          "line": "So dividing $f$ by $x - c$ gives the quotient $q(x)$ and the remainder $r$.",
          "reason": "Division statement and degree of the remainder: line 9 writes $f$ as the divisor times $q(x)$ plus $r$, and by line 10 the degree of $r$ is below that of the divisor."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t194-s1",
      "method": "direct proof",
      "statement": "Prove that if dividing a polynomial $f$ by $x - c$ gives the quotient $q(x)$ and the remainder $r$, and $d$ is a nonzero number, then dividing $f$ by $d(x - c)$ gives the quotient $\\dfrac{1}{d}q(x)$ and the remainder $r$. Facts it may use: division statement, degree of the remainder, degree, multiplicative inverse, commutative and associative laws of multiplication, transitive property, multiplying out.",
      "check": {
        "proof": [
          {
            "line": "$f(x) = (x - c)q(x) + r$",
            "reason": "Division statement: dividing $f$ by $x - c$ gives the quotient $q(x)$ and the remainder $r$."
          },
          {
            "line": "The remainder $r$ is $0$ or a number of degree $0$.",
            "reason": "Degree of the remainder: its degree is below the degree $1$ of $x - c$."
          },
          {
            "line": "$d \\cdot \\dfrac{1}{d} = 1$",
            "reason": "Multiplicative inverse: a nonzero number times its inverse is $1$, and $d \\ne 0$."
          },
          {
            "line": "$(x - c)q(x) = d \\cdot \\dfrac{1}{d} \\cdot (x - c)q(x)$",
            "reason": "Multiplicative inverse: by line 3 the factor $d \\cdot \\dfrac{1}{d}$ is $1$, and multiplying by $1$ leaves a number the same."
          },
          {
            "line": "$d \\cdot \\dfrac{1}{d} \\cdot (x - c)q(x) = d(x - c) \\cdot \\dfrac{1}{d}q(x)$",
            "reason": "The commutative and associative laws of multiplication, from arithmetic: the factors of a product may be grouped and taken in another order."
          },
          {
            "line": "$f(x) = d(x - c) \\cdot \\dfrac{1}{d}q(x) + r$",
            "reason": "Transitive property: lines 4 and 5 put an equal expression in place of $(x - c)q(x)$ in line 1."
          },
          {
            "line": "The divisor $d(x - c) = dx - dc$ has degree $1$.",
            "reason": "Degree: multiplied out, the coefficient $d$ of $x$ is not $0$, and no higher power of $x$ occurs."
          },
          {
            "line": "So dividing $f$ by $d(x - c)$ gives the quotient $\\dfrac{1}{d}q(x)$ and the remainder $r$.",
            "reason": "Division statement and degree of the remainder: line 6 writes $f$ as the divisor $d(x - c)$ times $\\dfrac{1}{d}q(x)$ plus $r$, and by lines 2 and 7 the degree of $r$ is below that of the divisor."
          }
        ]
      }
    }
  ]
}
