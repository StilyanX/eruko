export default {
  "number": 205,
  "title": "Powers of the roots",
  "section": 20,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "253-255, 658-664"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the value of $r^3 - 3r^2 + 19r + 16$, where $r$ is a root of $x^2 + 2x + 29 = 0$.",
    "form": "Answer as an integer.",
    "answer": "161",
    "solution": [
      "Find the value of $r^3 - 3r^2 + 19r + 16$, where $r$ is a root of $x^2 + 2x + 29 = 0$.",
      "$r^2 + 2r + 29 = 0$",
      "$r^2 = -2r - 29$",
      "$r^3 = -2r^2 - 29r$",
      "$r^3 = -2\\left(-2r - 29\\right) - 29r$",
      "$r^3 = 4r + 58 - 29r$",
      "$r^3 = -25r + 58$",
      "$r^3 - 3r^2 + 19r + 16 = \\left(-25r + 58\\right) - 3\\left(-2r - 29\\right) + 19r + 16$",
      "$r^3 - 3r^2 + 19r + 16 = -25r + 58 + 6r + 87 + 19r + 16$",
      "$r^3 - 3r^2 + 19r + 16 = 161$"
    ]
  },
  "ideas": [
    {
      "name": "A root satisfies its equation",
      "concrete": "Let $r$ be a root of $x^2 - 4x - 16 = 0$. Then $r^2 - 4r - 16 = 0$, so $r^2 = 4r + 16$: the square of $r$ is a number times $r$ plus a number. Multiplying both sides by $r$ gives $r^3 = 4r^2 + 16r$, and with $4r + 16$ in the place of $r^2$ this is $r^3 = 32r + 64$.",
      "general": "Let $r$ be a root of the equation $a_nx^n + a_{n-1}x^{n-1} + \\dots + a_1x + a_0 = 0$, with $n \\ge 1$ and $a_n \\ne 0$. Then $a_nr^n + a_{n-1}r^{n-1} + \\dots + a_1r + a_0 = 0$: **a root satisfies its equation**. Solved for $r^n$, this equation writes $r^n$ with lower powers of $r$ alone, and multiplying it by $r$ again and again does the same for every higher power."
    },
    {
      "name": "Power sum",
      "concrete": "For the numbers $2$ and $6$, the sum of the squares is $2^2 + 6^2 = 40$ and the sum of the cubes is $2^3 + 6^3 = 224$. These are the power sums of degree $2$ and of degree $3$ of the two numbers.",
      "general": "For numbers $r_1$ to $r_k$ and a whole number $n \\ge 1$, the sum $r_1^n + r_2^n + \\dots + r_k^n$ of their $n$th powers is their **power sum** of degree $n$. The power sum of degree $1$ is the sum of the numbers."
    },
    {
      "name": "Power-sum recursion",
      "concrete": "The numbers $2$ and $6$ have the sum $8$ and the product $12$, and the sum of their squares is $40$. The sum of their cubes, $224$, is $8 \\cdot 40 - 12 \\cdot 8$: the sum times the sum of the squares, less the product times the sum. The sum of their fourth powers, $2^4 + 6^4 = 1312$, is $8 \\cdot 224 - 12 \\cdot 40$.",
      "general": "For all numbers $a$ and $b$ and each whole number $n \\ge 3$, $a^n + b^n = (a + b)(a^{n-1} + b^{n-1}) - ab(a^{n-2} + b^{n-2})$. This is the **power-sum recursion**."
    }
  ],
  "kinds": [
    {
      "id": "t205-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the value of $r^3 - 3r^2 - 43r + 17$, where $r$ is a root of $x^2 + 7x + 27 = 0$.",
            "lines": [
              {
                "step": "Find the value of $r^3 - 3r^2 - 43r + 17$, where $r$ is a root of $x^2 + 7x + 27 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$r^2 + 7r + 27 = 0$",
                "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
              },
              {
                "step": "$r^2 = -7r - 27$",
                "reason": "Adding the same number to both sides: $-7r - 27$ is added to each side."
              },
              {
                "step": "$r^3 = -7r^2 - 27r$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $r$, and by the product law $r \\cdot r^2 = r^3$."
              },
              {
                "step": "$r^3 = -7\\left(-7r - 27\\right) - 27r$",
                "reason": "Substitution: line 3 gives $r^2$, which is put in brackets."
              },
              {
                "step": "$r^3 = 49r + 189 - 27r$",
                "reason": "Multiplying out: $-7$ multiplies each term in the bracket."
              },
              {
                "step": "$r^3 = 22r + 189$",
                "reason": "Collecting like terms: the two terms in $r$ are added."
              },
              {
                "step": "$r^3 - 3r^2 - 43r + 17 = \\left(22r + 189\\right) - 3\\left(-7r - 27\\right) - 43r + 17$",
                "reason": "Substitution: lines 7 and 3 give $r^3$ and $r^2$, each put in brackets."
              },
              {
                "step": "$r^3 - 3r^2 - 43r + 17 = 22r + 189 + 21r + 81 - 43r + 17$",
                "reason": "Multiplying out: $-3$ multiplies each term in its bracket."
              },
              {
                "step": "$r^3 - 3r^2 - 43r + 17 = 287$",
                "reason": "Collecting like terms: the terms in $r$ add up to $0$, and the numbers add up to $287$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $r^3 + 5r^2 - 3r + 14$, where $r$ is a root of $x^2 - 3x + 21 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-154",
              "lines": [
                {
                  "step": "Find the value of $r^3 + 5r^2 - 3r + 14$, where $r$ is a root of $x^2 - 3x + 21 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^2 - 3r + 21 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^2 = 3r - 21$",
                  "reason": "Adding the same number to both sides: $3r - 21$ is added to each side."
                },
                {
                  "step": "$r^3 = 3r^2 - 21r$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $r$, and by the product law $r \\cdot r^2 = r^3$."
                },
                {
                  "step": "$r^3 = 3\\left(3r - 21\\right) - 21r$",
                  "reason": "Substitution: line 3 gives $r^2$, which is put in brackets."
                },
                {
                  "step": "$r^3 = 9r - 63 - 21r$",
                  "reason": "Multiplying out: $3$ multiplies each term in the bracket."
                },
                {
                  "step": "$r^3 = -12r - 63$",
                  "reason": "Collecting like terms: the two terms in $r$ are added."
                },
                {
                  "step": "$r^3 + 5r^2 - 3r + 14 = \\left(-12r - 63\\right) + 5\\left(3r - 21\\right) - 3r + 14$",
                  "reason": "Substitution: lines 7 and 3 give $r^3$ and $r^2$, each put in brackets."
                },
                {
                  "step": "$r^3 + 5r^2 - 3r + 14 = -12r - 63 + 15r - 105 - 3r + 14$",
                  "reason": "Multiplying out: $5$ multiplies each term in its bracket."
                },
                {
                  "step": "$r^3 + 5r^2 - 3r + 14 = -154$",
                  "reason": "Collecting like terms: the terms in $r$ add up to $0$, and the numbers add up to $-154$."
                }
              ]
            },
            {
              "prompt": "Find the value of $r^3 + 8r^2 + 46r + 22$, where $r$ is a root of $x^2 + 5x + 31 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-71",
              "lines": [
                {
                  "step": "Find the value of $r^3 + 8r^2 + 46r + 22$, where $r$ is a root of $x^2 + 5x + 31 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^2 + 5r + 31 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^2 = -5r - 31$",
                  "reason": "Adding the same number to both sides: $-5r - 31$ is added to each side."
                },
                {
                  "step": "$r^3 = -5r^2 - 31r$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $r$, and by the product law $r \\cdot r^2 = r^3$."
                },
                {
                  "step": "$r^3 = -5\\left(-5r - 31\\right) - 31r$",
                  "reason": "Substitution: line 3 gives $r^2$, which is put in brackets."
                },
                {
                  "step": "$r^3 = 25r + 155 - 31r$",
                  "reason": "Multiplying out: $-5$ multiplies each term in the bracket."
                },
                {
                  "step": "$r^3 = -6r + 155$",
                  "reason": "Collecting like terms: the two terms in $r$ are added."
                },
                {
                  "step": "$r^3 + 8r^2 + 46r + 22 = \\left(-6r + 155\\right) + 8\\left(-5r - 31\\right) + 46r + 22$",
                  "reason": "Substitution: lines 7 and 3 give $r^3$ and $r^2$, each put in brackets."
                },
                {
                  "step": "$r^3 + 8r^2 + 46r + 22 = -6r + 155 - 40r - 248 + 46r + 22$",
                  "reason": "Multiplying out: $8$ multiplies each term in its bracket."
                },
                {
                  "step": "$r^3 + 8r^2 + 46r + 22 = -71$",
                  "reason": "Collecting like terms: the terms in $r$ add up to $0$, and the numbers add up to $-71$."
                }
              ]
            },
            {
              "prompt": "Find the value of $r^3 + 3r^2 + 36r + 13$, where $r$ is a root of $x^2 + 4x + 40 = 0$.",
              "form": "Answer as an integer.",
              "answer": "53",
              "lines": [
                {
                  "step": "Find the value of $r^3 + 3r^2 + 36r + 13$, where $r$ is a root of $x^2 + 4x + 40 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^2 + 4r + 40 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^2 = -4r - 40$",
                  "reason": "Adding the same number to both sides: $-4r - 40$ is added to each side."
                },
                {
                  "step": "$r^3 = -4r^2 - 40r$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $r$, and by the product law $r \\cdot r^2 = r^3$."
                },
                {
                  "step": "$r^3 = -4\\left(-4r - 40\\right) - 40r$",
                  "reason": "Substitution: line 3 gives $r^2$, which is put in brackets."
                },
                {
                  "step": "$r^3 = 16r + 160 - 40r$",
                  "reason": "Multiplying out: $-4$ multiplies each term in the bracket."
                },
                {
                  "step": "$r^3 = -24r + 160$",
                  "reason": "Collecting like terms: the two terms in $r$ are added."
                },
                {
                  "step": "$r^3 + 3r^2 + 36r + 13 = \\left(-24r + 160\\right) + 3\\left(-4r - 40\\right) + 36r + 13$",
                  "reason": "Substitution: lines 7 and 3 give $r^3$ and $r^2$, each put in brackets."
                },
                {
                  "step": "$r^3 + 3r^2 + 36r + 13 = -24r + 160 - 12r - 120 + 36r + 13$",
                  "reason": "Multiplying out: $3$ multiplies each term in its bracket."
                },
                {
                  "step": "$r^3 + 3r^2 + 36r + 13 = 53$",
                  "reason": "Collecting like terms: the terms in $r$ add up to $0$, and the numbers add up to $53$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $(r + 10)(r - 6)$, where $r$ is a root of $x^2 + 4x + 38 = 0$.",
            "lines": [
              {
                "step": "Find the value of $(r + 10)(r - 6)$, where $r$ is a root of $x^2 + 4x + 38 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(r + 10)(r - 6) = r^2 - 6r + 10r - 60$",
                "reason": "Every term of one bracket times every term of the other."
              },
              {
                "step": "$(r + 10)(r - 6) = r^2 + 4r - 60$",
                "reason": "Collecting like terms: the two terms in $r$ are added."
              },
              {
                "step": "$r^2 + 4r + 38 = 0$",
                "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
              },
              {
                "step": "$r^2 + 4r = -38$",
                "reason": "Adding the same number to both sides: $-38$ is added to each side."
              },
              {
                "step": "$(r + 10)(r - 6) = -38 - 60$",
                "reason": "Substitution: line 5 gives the value of $r^2 + 4r$ in line 3."
              },
              {
                "step": "$(r + 10)(r - 6) = -98$",
                "reason": "Order of operations, from arithmetic: the two numbers are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $(r - 8)(r + 11)$, where $r$ is a root of $x^2 + 3x + 17 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-105",
              "lines": [
                {
                  "step": "Find the value of $(r - 8)(r + 11)$, where $r$ is a root of $x^2 + 3x + 17 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r - 8)(r + 11) = r^2 + 11r - 8r - 88$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r - 8)(r + 11) = r^2 + 3r - 88$",
                  "reason": "Collecting like terms: the two terms in $r$ are added."
                },
                {
                  "step": "$r^2 + 3r + 17 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^2 + 3r = -17$",
                  "reason": "Adding the same number to both sides: $-17$ is added to each side."
                },
                {
                  "step": "$(r - 8)(r + 11) = -17 - 88$",
                  "reason": "Substitution: line 5 gives the value of $r^2 + 3r$ in line 3."
                },
                {
                  "step": "$(r - 8)(r + 11) = -105$",
                  "reason": "Order of operations, from arithmetic: the two numbers are added."
                }
              ]
            },
            {
              "prompt": "Find the value of $(r + 8)(r + 1)$, where $r$ is a root of $x^2 + 9x + 40 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-32",
              "lines": [
                {
                  "step": "Find the value of $(r + 8)(r + 1)$, where $r$ is a root of $x^2 + 9x + 40 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + 8)(r + 1) = r^2 + r + 8r + 8$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + 8)(r + 1) = r^2 + 9r + 8$",
                  "reason": "Collecting like terms: the two terms in $r$ are added."
                },
                {
                  "step": "$r^2 + 9r + 40 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^2 + 9r = -40$",
                  "reason": "Adding the same number to both sides: $-40$ is added to each side."
                },
                {
                  "step": "$(r + 8)(r + 1) = -40 + 8$",
                  "reason": "Substitution: line 5 gives the value of $r^2 + 9r$ in line 3."
                },
                {
                  "step": "$(r + 8)(r + 1) = -32$",
                  "reason": "Order of operations, from arithmetic: the two numbers are added."
                }
              ]
            },
            {
              "prompt": "Find the value of $(r + 4)(r + 9)$, where $r$ is a root of $x^2 + 13x - 15 = 0$.",
              "form": "Answer as an integer.",
              "answer": "51",
              "lines": [
                {
                  "step": "Find the value of $(r + 4)(r + 9)$, where $r$ is a root of $x^2 + 13x - 15 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(r + 4)(r + 9) = r^2 + 9r + 4r + 36$",
                  "reason": "Every term of one bracket times every term of the other."
                },
                {
                  "step": "$(r + 4)(r + 9) = r^2 + 13r + 36$",
                  "reason": "Collecting like terms: the two terms in $r$ are added."
                },
                {
                  "step": "$r^2 + 13r - 15 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^2 + 13r = 15$",
                  "reason": "Adding the same number to both sides: $15$ is added to each side."
                },
                {
                  "step": "$(r + 4)(r + 9) = 15 + 36$",
                  "reason": "Substitution: line 5 gives the value of $r^2 + 13r$ in line 3."
                },
                {
                  "step": "$(r + 4)(r + 9) = 51$",
                  "reason": "Order of operations, from arithmetic: the two numbers are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the value of $r^6 - 25r^2 + 190r + 35$, where $r$ is a root of $x^3 + 5x - 19 = 0$.",
            "lines": [
              {
                "step": "Find the value of $r^6 - 25r^2 + 190r + 35$, where $r$ is a root of $x^3 + 5x - 19 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$r^3 + 5r - 19 = 0$",
                "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
              },
              {
                "step": "$r^3 = -5r + 19$",
                "reason": "Adding the same number to both sides: $-5r + 19$ is added to each side."
              },
              {
                "step": "$r^6 = \\left(-5r + 19\\right)^2$",
                "reason": "Raising both sides to a power: both sides are squared, and by the power law $(r^3)^2 = r^6$."
              },
              {
                "step": "$r^6 = 25r^2 - 190r + 361$",
                "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = -5r$ and $b = 19$."
              },
              {
                "step": "$r^6 - 25r^2 + 190r + 35 = 25r^2 - 190r + 361 - 25r^2 + 190r + 35$",
                "reason": "Substitution: line 5 gives $r^6$."
              },
              {
                "step": "$r^6 - 25r^2 + 190r + 35 = 396$",
                "reason": "Collecting like terms: the terms in $r^2$ add up to $0$, the terms in $r$ add up to $0$, and the numbers add up to $396$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the value of $r^6 - 36r^2 + 192r + 14$, where $r$ is a root of $x^3 - 6x + 16 = 0$.",
              "form": "Answer as an integer.",
              "answer": "270",
              "lines": [
                {
                  "step": "Find the value of $r^6 - 36r^2 + 192r + 14$, where $r$ is a root of $x^3 - 6x + 16 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^3 - 6r + 16 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^3 = 6r - 16$",
                  "reason": "Adding the same number to both sides: $6r - 16$ is added to each side."
                },
                {
                  "step": "$r^6 = \\left(6r - 16\\right)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and by the power law $(r^3)^2 = r^6$."
                },
                {
                  "step": "$r^6 = 36r^2 - 192r + 256$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 6r$ and $b = -16$."
                },
                {
                  "step": "$r^6 - 36r^2 + 192r + 14 = 36r^2 - 192r + 256 - 36r^2 + 192r + 14$",
                  "reason": "Substitution: line 5 gives $r^6$."
                },
                {
                  "step": "$r^6 - 36r^2 + 192r + 14 = 270$",
                  "reason": "Collecting like terms: the terms in $r^2$ add up to $0$, the terms in $r$ add up to $0$, and the numbers add up to $270$."
                }
              ]
            },
            {
              "prompt": "Find the value of $r^6 - 100r^2 - 340r - 27$, where $r$ is a root of $x^3 - 10x - 17 = 0$.",
              "form": "Answer as an integer.",
              "answer": "262",
              "lines": [
                {
                  "step": "Find the value of $r^6 - 100r^2 - 340r - 27$, where $r$ is a root of $x^3 - 10x - 17 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^3 - 10r - 17 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^3 = 10r + 17$",
                  "reason": "Adding the same number to both sides: $10r + 17$ is added to each side."
                },
                {
                  "step": "$r^6 = \\left(10r + 17\\right)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and by the power law $(r^3)^2 = r^6$."
                },
                {
                  "step": "$r^6 = 100r^2 + 340r + 289$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 10r$ and $b = 17$."
                },
                {
                  "step": "$r^6 - 100r^2 - 340r - 27 = 100r^2 + 340r + 289 - 100r^2 - 340r - 27$",
                  "reason": "Substitution: line 5 gives $r^6$."
                },
                {
                  "step": "$r^6 - 100r^2 - 340r - 27 = 262$",
                  "reason": "Collecting like terms: the terms in $r^2$ add up to $0$, the terms in $r$ add up to $0$, and the numbers add up to $262$."
                }
              ]
            },
            {
              "prompt": "Find the value of $r^6 - 121r^2 - 396r + 3$, where $r$ is a root of $x^3 - 11x - 18 = 0$.",
              "form": "Answer as an integer.",
              "answer": "327",
              "lines": [
                {
                  "step": "Find the value of $r^6 - 121r^2 - 396r + 3$, where $r$ is a root of $x^3 - 11x - 18 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r^3 - 11r - 18 = 0$",
                  "reason": "A root satisfies its equation: $r$ is a root, so the equation holds with $r$ in the place of $x$."
                },
                {
                  "step": "$r^3 = 11r + 18$",
                  "reason": "Adding the same number to both sides: $11r + 18$ is added to each side."
                },
                {
                  "step": "$r^6 = \\left(11r + 18\\right)^2$",
                  "reason": "Raising both sides to a power: both sides are squared, and by the power law $(r^3)^2 = r^6$."
                },
                {
                  "step": "$r^6 = 121r^2 + 396r + 324$",
                  "reason": "Square of a binomial: $(a + b)^2 = a^2 + 2ab + b^2$, with $a = 11r$ and $b = 18$."
                },
                {
                  "step": "$r^6 - 121r^2 - 396r + 3 = 121r^2 + 396r + 324 - 121r^2 - 396r + 3$",
                  "reason": "Substitution: line 5 gives $r^6$."
                },
                {
                  "step": "$r^6 - 121r^2 - 396r + 3 = 327$",
                  "reason": "Collecting like terms: the terms in $r^2$ add up to $0$, the terms in $r$ add up to $0$, and the numbers add up to $327$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t205-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the sixth powers of the roots of $x^6 + 5x + 12 = 0$.",
            "lines": [
              {
                "step": "Find the sum of the sixth powers of the roots of $x^6 + 5x + 12 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let the roots be $r_1$ to $r_6$, each counted as often as its multiplicity.",
                "reason": "Fundamental Theorem of Algebra: a polynomial of degree $6$ has $6$ complex roots, each counted as often as its multiplicity."
              },
              {
                "step": "For each $k$ from $1$ to $6$, $r_k^6 + 5r_k + 12 = 0$.",
                "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
              },
              {
                "step": "For each $k$ from $1$ to $6$, $r_k^6 = -5r_k - 12$.",
                "reason": "Adding the same number to both sides: $-5r_k - 12$ is added to each side."
              },
              {
                "step": "$r_1^6 + r_2^6 + \\dots + r_6^6 = -5(r_1 + r_2 + \\dots + r_6) - 6 \\cdot 12$",
                "reason": "Adding two equations: the $6$ equations of line 4 are added, the common factor $-5$ is taken out of the terms with a root, and the number $-12$ comes $6$ times."
              },
              {
                "step": "$r_1 + r_2 + \\dots + r_6 = 0$",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^5$ over the leading coefficient, and that coefficient is $0$."
              },
              {
                "step": "$r_1^6 + r_2^6 + \\dots + r_6^6 = -5 \\cdot 0 - 6 \\cdot 12$",
                "reason": "Substituting a value: line 6 gives the sum of the roots."
              },
              {
                "step": "$r_1^6 + r_2^6 + \\dots + r_6^6 = -72$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the eleventh powers of the roots of $x^{11} - 17x + 6 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-66",
              "lines": [
                {
                  "step": "Find the sum of the eleventh powers of the roots of $x^{11} - 17x + 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $r_1$ to $r_{11}$, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $11$ has $11$ complex roots, each counted as often as its multiplicity."
                },
                {
                  "step": "For each $k$ from $1$ to $11$, $r_k^{11} - 17r_k + 6 = 0$.",
                  "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
                },
                {
                  "step": "For each $k$ from $1$ to $11$, $r_k^{11} = 17r_k - 6$.",
                  "reason": "Adding the same number to both sides: $17r_k - 6$ is added to each side."
                },
                {
                  "step": "$r_1^{11} + r_2^{11} + \\dots + r_{11}^{11} = 17(r_1 + r_2 + \\dots + r_{11}) - 11 \\cdot 6$",
                  "reason": "Adding two equations: the $11$ equations of line 4 are added, the common factor $17$ is taken out of the terms with a root, and the number $-6$ comes $11$ times."
                },
                {
                  "step": "$r_1 + r_2 + \\dots + r_{11} = 0$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^{10}$ over the leading coefficient, and that coefficient is $0$."
                },
                {
                  "step": "$r_1^{11} + r_2^{11} + \\dots + r_{11}^{11} = 17 \\cdot 0 - 11 \\cdot 6$",
                  "reason": "Substituting a value: line 6 gives the sum of the roots."
                },
                {
                  "step": "$r_1^{11} + r_2^{11} + \\dots + r_{11}^{11} = -66$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find the sum of the twelfth powers of the roots of $x^{12} + 4x - 16 = 0$.",
              "form": "Answer as an integer.",
              "answer": "192",
              "lines": [
                {
                  "step": "Find the sum of the twelfth powers of the roots of $x^{12} + 4x - 16 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $r_1$ to $r_{12}$, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $12$ has $12$ complex roots, each counted as often as its multiplicity."
                },
                {
                  "step": "For each $k$ from $1$ to $12$, $r_k^{12} + 4r_k - 16 = 0$.",
                  "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
                },
                {
                  "step": "For each $k$ from $1$ to $12$, $r_k^{12} = -4r_k + 16$.",
                  "reason": "Adding the same number to both sides: $-4r_k + 16$ is added to each side."
                },
                {
                  "step": "$r_1^{12} + r_2^{12} + \\dots + r_{12}^{12} = -4(r_1 + r_2 + \\dots + r_{12}) + 12 \\cdot 16$",
                  "reason": "Adding two equations: the $12$ equations of line 4 are added, the common factor $-4$ is taken out of the terms with a root, and the number $16$ comes $12$ times."
                },
                {
                  "step": "$r_1 + r_2 + \\dots + r_{12} = 0$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^{11}$ over the leading coefficient, and that coefficient is $0$."
                },
                {
                  "step": "$r_1^{12} + r_2^{12} + \\dots + r_{12}^{12} = -4 \\cdot 0 + 12 \\cdot 16$",
                  "reason": "Substituting a value: line 6 gives the sum of the roots."
                },
                {
                  "step": "$r_1^{12} + r_2^{12} + \\dots + r_{12}^{12} = 192$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find the sum of the fourth powers of the roots of $x^4 + 13x - 8 = 0$.",
              "form": "Answer as an integer.",
              "answer": "32",
              "lines": [
                {
                  "step": "Find the sum of the fourth powers of the roots of $x^4 + 13x - 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let the roots be $r_1$ to $r_4$, each counted as often as its multiplicity.",
                  "reason": "Fundamental Theorem of Algebra: a polynomial of degree $4$ has $4$ complex roots, each counted as often as its multiplicity."
                },
                {
                  "step": "For each $k$ from $1$ to $4$, $r_k^4 + 13r_k - 8 = 0$.",
                  "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
                },
                {
                  "step": "For each $k$ from $1$ to $4$, $r_k^4 = -13r_k + 8$.",
                  "reason": "Adding the same number to both sides: $-13r_k + 8$ is added to each side."
                },
                {
                  "step": "$r_1^4 + r_2^4 + \\dots + r_4^4 = -13(r_1 + r_2 + \\dots + r_4) + 4 \\cdot 8$",
                  "reason": "Adding two equations: the $4$ equations of line 4 are added, the common factor $-13$ is taken out of the terms with a root, and the number $8$ comes $4$ times."
                },
                {
                  "step": "$r_1 + r_2 + \\dots + r_4 = 0$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x^3$ over the leading coefficient, and that coefficient is $0$."
                },
                {
                  "step": "$r_1^4 + r_2^4 + \\dots + r_4^4 = -13 \\cdot 0 + 4 \\cdot 8$",
                  "reason": "Substituting a value: line 6 gives the sum of the roots."
                },
                {
                  "step": "$r_1^4 + r_2^4 + \\dots + r_4^4 = 32$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 - 2x^2 + 10x - 4 = 0$.",
            "lines": [
              {
                "step": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 - 2x^2 + 10x - 4 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The root $r$ gives $r^3 - 2r^2 + 10r - 4 = 0$, and the roots $s$ and $t$ give the same equation, each in its own letter.",
                "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
              },
              {
                "step": "So $r^3 = 2r^2 - 10r + 4$, and the same holds with $s$ and with $t$ in the place of $r$.",
                "reason": "Adding the same number to both sides: $2r^2 - 10r + 4$ is added to each side."
              },
              {
                "step": "$r^3 + s^3 + t^3 = 2(r^2 + s^2 + t^2) - 10(r + s + t) + 3 \\cdot 4$",
                "reason": "Adding two equations: the three equations of line 3 are added, the common factors $2$ and $-10$ are taken out, and the number $4$ comes three times."
              },
              {
                "step": "$r + s + t = 2$",
                "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$, $(-1)^1 \\cdot (-2) = 2$."
              },
              {
                "step": "$rs + st + tr = 10$",
                "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$, $(-1)^2 \\cdot 10 = 10$."
              },
              {
                "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
              },
              {
                "step": "$r^2 + s^2 + t^2 = \\left(2\\right)^2 - 2 \\cdot \\left(10\\right)$",
                "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
              },
              {
                "step": "$r^2 + s^2 + t^2 = -16$",
                "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
              },
              {
                "step": "$r^3 + s^3 + t^3 = 2 \\cdot \\left(-16\\right) - 10 \\cdot \\left(2\\right) + 3 \\cdot 4$",
                "reason": "Substituting a value: lines 9 and 5 give the sum of the squares and the sum of the roots, each put in brackets."
              },
              {
                "step": "$r^3 + s^3 + t^3 = -40$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 - 4x^2 + 12x + 9 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-107",
              "lines": [
                {
                  "step": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 - 4x^2 + 12x + 9 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $r$ gives $r^3 - 4r^2 + 12r + 9 = 0$, and the roots $s$ and $t$ give the same equation, each in its own letter.",
                  "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
                },
                {
                  "step": "So $r^3 = 4r^2 - 12r - 9$, and the same holds with $s$ and with $t$ in the place of $r$.",
                  "reason": "Adding the same number to both sides: $4r^2 - 12r - 9$ is added to each side."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = 4(r^2 + s^2 + t^2) - 12(r + s + t) - 3 \\cdot 9$",
                  "reason": "Adding two equations: the three equations of line 3 are added, the common factors $4$ and $-12$ are taken out, and the number $-9$ comes three times."
                },
                {
                  "step": "$r + s + t = 4$",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$, $(-1)^1 \\cdot (-4) = 4$."
                },
                {
                  "step": "$rs + st + tr = 12$",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$, $(-1)^2 \\cdot 12 = 12$."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                  "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\left(4\\right)^2 - 2 \\cdot \\left(12\\right)$",
                  "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = -8$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = 4 \\cdot \\left(-8\\right) - 12 \\cdot \\left(4\\right) - 3 \\cdot 9$",
                  "reason": "Substituting a value: lines 9 and 5 give the sum of the squares and the sum of the roots, each put in brackets."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = -107$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
                }
              ]
            },
            {
              "prompt": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 - 9x^2 + 5x - 13 = 0$.",
              "form": "Answer as an integer.",
              "answer": "633",
              "lines": [
                {
                  "step": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 - 9x^2 + 5x - 13 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $r$ gives $r^3 - 9r^2 + 5r - 13 = 0$, and the roots $s$ and $t$ give the same equation, each in its own letter.",
                  "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
                },
                {
                  "step": "So $r^3 = 9r^2 - 5r + 13$, and the same holds with $s$ and with $t$ in the place of $r$.",
                  "reason": "Adding the same number to both sides: $9r^2 - 5r + 13$ is added to each side."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = 9(r^2 + s^2 + t^2) - 5(r + s + t) + 3 \\cdot 13$",
                  "reason": "Adding two equations: the three equations of line 3 are added, the common factors $9$ and $-5$ are taken out, and the number $13$ comes three times."
                },
                {
                  "step": "$r + s + t = 9$",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$, $(-1)^1 \\cdot (-9) = 9$."
                },
                {
                  "step": "$rs + st + tr = 5$",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$, $(-1)^2 \\cdot 5 = 5$."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                  "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\left(9\\right)^2 - 2 \\cdot \\left(5\\right)$",
                  "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = 71$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = 9 \\cdot \\left(71\\right) - 5 \\cdot \\left(9\\right) + 3 \\cdot 13$",
                  "reason": "Substituting a value: lines 9 and 5 give the sum of the squares and the sum of the roots, each put in brackets."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = 633$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
                }
              ]
            },
            {
              "prompt": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 + 3x^2 - 5x - 14 = 0$.",
              "form": "Answer as an integer.",
              "answer": "-30",
              "lines": [
                {
                  "step": "Find $r^3 + s^3 + t^3$, where $r$, $s$ and $t$ are the roots of $x^3 + 3x^2 - 5x - 14 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The root $r$ gives $r^3 + 3r^2 - 5r - 14 = 0$, and the roots $s$ and $t$ give the same equation, each in its own letter.",
                  "reason": "A root satisfies its equation: each root, put in the place of $x$, makes the equation true."
                },
                {
                  "step": "So $r^3 = -3r^2 + 5r + 14$, and the same holds with $s$ and with $t$ in the place of $r$.",
                  "reason": "Adding the same number to both sides: $-3r^2 + 5r + 14$ is added to each side."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = -3(r^2 + s^2 + t^2) + 5(r + s + t) + 3 \\cdot 14$",
                  "reason": "Adding two equations: the three equations of line 3 are added, the common factors $-3$ and $5$ are taken out, and the number $14$ comes three times."
                },
                {
                  "step": "$r + s + t = -3$",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the roots is $(-1)^1$ times the coefficient of $x^2$, $(-1)^1 \\cdot 3 = -3$."
                },
                {
                  "step": "$rs + st + tr = -5$",
                  "reason": "Vieta's formulas: with leading coefficient $1$, the sum of the products of the roots taken two at a time is $(-1)^2$ times the coefficient of $x$, $(-1)^2 \\cdot (-5) = -5$."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = (r + s + t)^2 - 2(rs + st + tr)$",
                  "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = \\left(-3\\right)^2 - 2 \\cdot \\left(-5\\right)$",
                  "reason": "Substituting a value: lines 5 and 6 give the two sums, each put in brackets."
                },
                {
                  "step": "$r^2 + s^2 + t^2 = 19$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = -3 \\cdot \\left(19\\right) + 5 \\cdot \\left(-3\\right) + 3 \\cdot 14$",
                  "reason": "Substituting a value: lines 9 and 5 give the sum of the squares and the sum of the roots, each put in brackets."
                },
                {
                  "step": "$r^3 + s^3 + t^3 = -30$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the terms are added."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $5x^2 + 20x + 29 = 0$.",
            "lines": [
              {
                "step": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $5x^2 + 20x + 29 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$r + s = -4$",
                "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x$ over the leading coefficient, $(-1)^1 \\cdot \\dfrac{20}{5} = -4$."
              },
              {
                "step": "$rs = \\dfrac{29}{5}$",
                "reason": "Vieta's formulas: the product of the roots is $(-1)^2$ times the constant term over the leading coefficient, $(-1)^2 \\cdot \\dfrac{29}{5} = \\dfrac{29}{5}$."
              },
              {
                "step": "$r^2 + s^2 = (r + s)^2 - 2rs$",
                "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = r$ and $b = s$."
              },
              {
                "step": "$r^2 + s^2 = \\left(-4\\right)^2 - 2 \\cdot \\left(\\dfrac{29}{5}\\right)$",
                "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
              },
              {
                "step": "$r^2 + s^2 = \\dfrac{22}{5}$",
                "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
              },
              {
                "step": "$r^3 + s^3 = (r + s)(r^2 + s^2) - rs(r + s)$",
                "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
              },
              {
                "step": "$r^3 + s^3 = \\left(-4\\right) \\cdot \\left(\\dfrac{22}{5}\\right) - \\left(\\dfrac{29}{5}\\right) \\cdot \\left(-4\\right)$",
                "reason": "Substituting a value: line 6 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
              },
              {
                "step": "$r^3 + s^3 = \\dfrac{28}{5}$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
              },
              {
                "step": "$r^4 + s^4 = (r + s)(r^3 + s^3) - rs(r^2 + s^2)$",
                "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
              },
              {
                "step": "$r^4 + s^4 = \\left(-4\\right) \\cdot \\left(\\dfrac{28}{5}\\right) - \\left(\\dfrac{29}{5}\\right) \\cdot \\left(\\dfrac{22}{5}\\right)$",
                "reason": "Substituting a value: lines 9 and 6 give the sum of the cubes and the sum of the squares, each put in brackets."
              },
              {
                "step": "$r^4 + s^4 = -\\dfrac{1198}{25}$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $3x^2 - 21x - 8 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "26441/9",
              "lines": [
                {
                  "step": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $3x^2 - 21x - 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r + s = 7$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{21}{3}\\right) = 7$."
                },
                {
                  "step": "$rs = -\\dfrac{8}{3}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^2$ times the constant term over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{8}{3}\\right) = -\\dfrac{8}{3}$."
                },
                {
                  "step": "$r^2 + s^2 = (r + s)^2 - 2rs$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = r$ and $b = s$."
                },
                {
                  "step": "$r^2 + s^2 = \\left(7\\right)^2 - 2 \\cdot \\left(-\\dfrac{8}{3}\\right)$",
                  "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$r^2 + s^2 = \\dfrac{163}{3}$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$r^3 + s^3 = (r + s)(r^2 + s^2) - rs(r + s)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$r^3 + s^3 = \\left(7\\right) \\cdot \\left(\\dfrac{163}{3}\\right) - \\left(-\\dfrac{8}{3}\\right) \\cdot \\left(7\\right)$",
                  "reason": "Substituting a value: line 6 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$r^3 + s^3 = 399$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                },
                {
                  "step": "$r^4 + s^4 = (r + s)(r^3 + s^3) - rs(r^2 + s^2)$",
                  "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
                },
                {
                  "step": "$r^4 + s^4 = \\left(7\\right) \\cdot \\left(399\\right) - \\left(-\\dfrac{8}{3}\\right) \\cdot \\left(\\dfrac{163}{3}\\right)$",
                  "reason": "Substituting a value: lines 9 and 6 give the sum of the cubes and the sum of the squares, each put in brackets."
                },
                {
                  "step": "$r^4 + s^4 = \\dfrac{26{,}441}{9}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $5x^2 - 30x - 6 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "36792/25",
              "lines": [
                {
                  "step": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $5x^2 - 30x - 6 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r + s = 6$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{30}{5}\\right) = 6$."
                },
                {
                  "step": "$rs = -\\dfrac{6}{5}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^2$ times the constant term over the leading coefficient, $(-1)^2 \\cdot \\left(-\\dfrac{6}{5}\\right) = -\\dfrac{6}{5}$."
                },
                {
                  "step": "$r^2 + s^2 = (r + s)^2 - 2rs$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = r$ and $b = s$."
                },
                {
                  "step": "$r^2 + s^2 = \\left(6\\right)^2 - 2 \\cdot \\left(-\\dfrac{6}{5}\\right)$",
                  "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$r^2 + s^2 = \\dfrac{192}{5}$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$r^3 + s^3 = (r + s)(r^2 + s^2) - rs(r + s)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$r^3 + s^3 = \\left(6\\right) \\cdot \\left(\\dfrac{192}{5}\\right) - \\left(-\\dfrac{6}{5}\\right) \\cdot \\left(6\\right)$",
                  "reason": "Substituting a value: line 6 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$r^3 + s^3 = \\dfrac{1188}{5}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                },
                {
                  "step": "$r^4 + s^4 = (r + s)(r^3 + s^3) - rs(r^2 + s^2)$",
                  "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
                },
                {
                  "step": "$r^4 + s^4 = \\left(6\\right) \\cdot \\left(\\dfrac{1188}{5}\\right) - \\left(-\\dfrac{6}{5}\\right) \\cdot \\left(\\dfrac{192}{5}\\right)$",
                  "reason": "Substituting a value: lines 9 and 6 give the sum of the cubes and the sum of the squares, each put in brackets."
                },
                {
                  "step": "$r^4 + s^4 = \\dfrac{36{,}792}{25}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $3x^2 - 27x + 19 = 0$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "41303/9",
              "lines": [
                {
                  "step": "Find $r^4 + s^4$, where $r$ and $s$ are the roots of $3x^2 - 27x + 19 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$r + s = 9$",
                  "reason": "Vieta's formulas: the sum of the roots is $(-1)^1$ times the coefficient of $x$ over the leading coefficient, $(-1)^1 \\cdot \\left(-\\dfrac{27}{3}\\right) = 9$."
                },
                {
                  "step": "$rs = \\dfrac{19}{3}$",
                  "reason": "Vieta's formulas: the product of the roots is $(-1)^2$ times the constant term over the leading coefficient, $(-1)^2 \\cdot \\dfrac{19}{3} = \\dfrac{19}{3}$."
                },
                {
                  "step": "$r^2 + s^2 = (r + s)^2 - 2rs$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = r$ and $b = s$."
                },
                {
                  "step": "$r^2 + s^2 = \\left(9\\right)^2 - 2 \\cdot \\left(\\dfrac{19}{3}\\right)$",
                  "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$r^2 + s^2 = \\dfrac{205}{3}$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$r^3 + s^3 = (r + s)(r^2 + s^2) - rs(r + s)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$r^3 + s^3 = \\left(9\\right) \\cdot \\left(\\dfrac{205}{3}\\right) - \\left(\\dfrac{19}{3}\\right) \\cdot \\left(9\\right)$",
                  "reason": "Substituting a value: line 6 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$r^3 + s^3 = 558$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                },
                {
                  "step": "$r^4 + s^4 = (r + s)(r^3 + s^3) - rs(r^2 + s^2)$",
                  "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
                },
                {
                  "step": "$r^4 + s^4 = \\left(9\\right) \\cdot \\left(558\\right) - \\left(\\dfrac{19}{3}\\right) \\cdot \\left(\\dfrac{205}{3}\\right)$",
                  "reason": "Substituting a value: lines 9 and 6 give the sum of the cubes and the sum of the squares, each put in brackets."
                },
                {
                  "step": "$r^4 + s^4 = \\dfrac{41{,}303}{9}$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t205-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $x^4 + y^4$, given that $x + y = -11$ and $xy = 9$.",
            "lines": [
              {
                "step": "Find $x^4 + y^4$, given that $x + y = -11$ and $xy = 9$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
              },
              {
                "step": "$x^2 + y^2 = \\left(-11\\right)^2 - 2 \\cdot \\left(9\\right)$",
                "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
              },
              {
                "step": "$x^2 + y^2 = 103$",
                "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
              },
              {
                "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
              },
              {
                "step": "$x^3 + y^3 = \\left(-11\\right) \\cdot \\left(103\\right) - \\left(9\\right) \\cdot \\left(-11\\right)$",
                "reason": "Substituting a value: line 4 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
              },
              {
                "step": "$x^3 + y^3 = -1034$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
              },
              {
                "step": "$x^4 + y^4 = (x + y)(x^3 + y^3) - xy(x^2 + y^2)$",
                "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
              },
              {
                "step": "$x^4 + y^4 = \\left(-11\\right) \\cdot \\left(-1034\\right) - \\left(9\\right) \\cdot \\left(103\\right)$",
                "reason": "Substituting a value: lines 7 and 4 give the sum of the cubes and the sum of the squares, each put in brackets."
              },
              {
                "step": "$x^4 + y^4 = 10{,}447$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^4 + y^4$, given that $x + y = -12$ and $xy = -17$.",
              "form": "Answer as an integer.",
              "answer": "31106",
              "lines": [
                {
                  "step": "Find $x^4 + y^4$, given that $x + y = -12$ and $xy = -17$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^2 + y^2 = \\left(-12\\right)^2 - 2 \\cdot \\left(-17\\right)$",
                  "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$x^2 + y^2 = 178$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$x^3 + y^3 = \\left(-12\\right) \\cdot \\left(178\\right) - \\left(-17\\right) \\cdot \\left(-12\\right)$",
                  "reason": "Substituting a value: line 4 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$x^3 + y^3 = -2340$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                },
                {
                  "step": "$x^4 + y^4 = (x + y)(x^3 + y^3) - xy(x^2 + y^2)$",
                  "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
                },
                {
                  "step": "$x^4 + y^4 = \\left(-12\\right) \\cdot \\left(-2340\\right) - \\left(-17\\right) \\cdot \\left(178\\right)$",
                  "reason": "Substituting a value: lines 7 and 4 give the sum of the cubes and the sum of the squares, each put in brackets."
                },
                {
                  "step": "$x^4 + y^4 = 31{,}106$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $x^4 + y^4$, given that $x + y = -9$ and $xy = 16$.",
              "form": "Answer as an integer.",
              "answer": "1889",
              "lines": [
                {
                  "step": "Find $x^4 + y^4$, given that $x + y = -9$ and $xy = 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^2 + y^2 = \\left(-9\\right)^2 - 2 \\cdot \\left(16\\right)$",
                  "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$x^2 + y^2 = 49$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$x^3 + y^3 = \\left(-9\\right) \\cdot \\left(49\\right) - \\left(16\\right) \\cdot \\left(-9\\right)$",
                  "reason": "Substituting a value: line 4 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$x^3 + y^3 = -297$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                },
                {
                  "step": "$x^4 + y^4 = (x + y)(x^3 + y^3) - xy(x^2 + y^2)$",
                  "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
                },
                {
                  "step": "$x^4 + y^4 = \\left(-9\\right) \\cdot \\left(-297\\right) - \\left(16\\right) \\cdot \\left(49\\right)$",
                  "reason": "Substituting a value: lines 7 and 4 give the sum of the cubes and the sum of the squares, each put in brackets."
                },
                {
                  "step": "$x^4 + y^4 = 1889$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $x^4 + y^4$, given that $x + y = 12$ and $xy = 8$.",
              "form": "Answer as an integer.",
              "answer": "16256",
              "lines": [
                {
                  "step": "Find $x^4 + y^4$, given that $x + y = 12$ and $xy = 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$x^2 + y^2 = \\left(12\\right)^2 - 2 \\cdot \\left(8\\right)$",
                  "reason": "Substituting a value: the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$x^2 + y^2 = 128$",
                  "reason": "Order of operations, from arithmetic: the square and the product are worked out first, then the difference."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$x^3 + y^3 = \\left(12\\right) \\cdot \\left(128\\right) - \\left(8\\right) \\cdot \\left(12\\right)$",
                  "reason": "Substituting a value: line 4 gives the sum of the squares, and the sum and the product of the two numbers are put in, each in brackets."
                },
                {
                  "step": "$x^3 + y^3 = 1440$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                },
                {
                  "step": "$x^4 + y^4 = (x + y)(x^3 + y^3) - xy(x^2 + y^2)$",
                  "reason": "Power-sum recursion: with $n = 4$, the sum of the fourth powers is the sum of the two numbers times the sum of their cubes, less their product times the sum of their squares."
                },
                {
                  "step": "$x^4 + y^4 = \\left(12\\right) \\cdot \\left(1440\\right) - \\left(8\\right) \\cdot \\left(128\\right)$",
                  "reason": "Substituting a value: lines 7 and 4 give the sum of the cubes and the sum of the squares, each put in brackets."
                },
                {
                  "step": "$x^4 + y^4 = 16{,}256$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $x^3 + y^3$, given that $x + y = -6$ and $x^2 + y^2 = 86$.",
            "lines": [
              {
                "step": "Find $x^3 + y^3$, given that $x + y = -6$ and $x^2 + y^2 = 86$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
              },
              {
                "step": "$\\left(86\\right) = \\left(-6\\right)^2 - 2xy$",
                "reason": "Substituting a value: the problem gives $x^2 + y^2$ and $x + y$, each put in brackets."
              },
              {
                "step": "$2xy = -50$",
                "reason": "Adding the same number to both sides: $2xy - 86$ is added to both sides, and $(-6)^2 - 86 = -50$."
              },
              {
                "step": "$xy = -25$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
              },
              {
                "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
              },
              {
                "step": "$x^3 + y^3 = \\left(-6\\right) \\cdot \\left(86\\right) - \\left(-25\\right) \\cdot \\left(-6\\right)$",
                "reason": "Substituting a value: the problem gives $x + y$ and $x^2 + y^2$ and line 5 gives $xy$, each put in brackets."
              },
              {
                "step": "$x^3 + y^3 = -666$",
                "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $x^3 + y^3$, given that $x + y = 11$ and $x^2 + y^2 = 129$.",
              "form": "Answer as an integer.",
              "answer": "1463",
              "lines": [
                {
                  "step": "Find $x^3 + y^3$, given that $x + y = 11$ and $x^2 + y^2 = 129$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$\\left(129\\right) = \\left(11\\right)^2 - 2xy$",
                  "reason": "Substituting a value: the problem gives $x^2 + y^2$ and $x + y$, each put in brackets."
                },
                {
                  "step": "$2xy = -8$",
                  "reason": "Adding the same number to both sides: $2xy - 129$ is added to both sides, and $11^2 - 129 = -8$."
                },
                {
                  "step": "$xy = -4$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$x^3 + y^3 = \\left(11\\right) \\cdot \\left(129\\right) - \\left(-4\\right) \\cdot \\left(11\\right)$",
                  "reason": "Substituting a value: the problem gives $x + y$ and $x^2 + y^2$ and line 5 gives $xy$, each put in brackets."
                },
                {
                  "step": "$x^3 + y^3 = 1463$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $x^3 + y^3$, given that $x + y = 5$ and $x^2 + y^2 = 83$.",
              "form": "Answer as an integer.",
              "answer": "560",
              "lines": [
                {
                  "step": "Find $x^3 + y^3$, given that $x + y = 5$ and $x^2 + y^2 = 83$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$\\left(83\\right) = \\left(5\\right)^2 - 2xy$",
                  "reason": "Substituting a value: the problem gives $x^2 + y^2$ and $x + y$, each put in brackets."
                },
                {
                  "step": "$2xy = -58$",
                  "reason": "Adding the same number to both sides: $2xy - 83$ is added to both sides, and $5^2 - 83 = -58$."
                },
                {
                  "step": "$xy = -29$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$x^3 + y^3 = \\left(5\\right) \\cdot \\left(83\\right) - \\left(-29\\right) \\cdot \\left(5\\right)$",
                  "reason": "Substituting a value: the problem gives $x + y$ and $x^2 + y^2$ and line 5 gives $xy$, each put in brackets."
                },
                {
                  "step": "$x^3 + y^3 = 560$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            },
            {
              "prompt": "Find $x^3 + y^3$, given that $x + y = -5$ and $x^2 + y^2 = 43$.",
              "form": "Answer as an integer.",
              "answer": "-260",
              "lines": [
                {
                  "step": "Find $x^3 + y^3$, given that $x + y = -5$ and $x^2 + y^2 = 43$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 = (x + y)^2 - 2xy$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$."
                },
                {
                  "step": "$\\left(43\\right) = \\left(-5\\right)^2 - 2xy$",
                  "reason": "Substituting a value: the problem gives $x^2 + y^2$ and $x + y$, each put in brackets."
                },
                {
                  "step": "$2xy = -18$",
                  "reason": "Adding the same number to both sides: $2xy - 43$ is added to both sides, and $(-5)^2 - 43 = -18$."
                },
                {
                  "step": "$xy = -9$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$x^3 + y^3 = \\left(-5\\right) \\cdot \\left(43\\right) - \\left(-9\\right) \\cdot \\left(-5\\right)$",
                  "reason": "Substituting a value: the problem gives $x + y$ and $x^2 + y^2$ and line 5 gives $xy$, each put in brackets."
                },
                {
                  "step": "$x^3 + y^3 = -260$",
                  "reason": "Order of operations, from arithmetic: the products are worked out first, then the difference."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t205-k4",
      "forms": [
        {
          "example": {
            "problem": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -19$ and $x^2y + xy^2 = -120$.",
            "lines": [
              {
                "step": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -19$ and $x^2y + xy^2 = -120$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $u = x + y$ and $v = xy$.",
                "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
              },
              {
                "step": "$x^2y + xy^2 = xy(x + y)$",
                "reason": "Factoring: the common factor $xy$ is taken out."
              },
              {
                "step": "So $u + v = -19$ and $uv = -120$.",
                "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$ in the first equation and in line 3."
              },
              {
                "step": "So $u$ and $v$ are the two roots of $w^2 + 19w - 120 = 0$.",
                "reason": "Factored form: $(w - u)(w - v) = w^2 - (u + v)w + uv$, and line 4 gives $u + v$ and $uv$."
              },
              {
                "step": "$(w - 5)(w + 24) = 0$",
                "reason": "Factoring a quadratic: the numbers $-5$ and $24$ have the sum $19$ and the product $-120$."
              },
              {
                "step": "So $u = 5$ and $v = -24$, or $u = -24$ and $v = 5$.",
                "reason": "Zero-product property: the roots are $5$ and $-24$, and $u$ and $v$ are these two roots in one order or the other."
              },
              {
                "step": "For $u = 5$ and $v = -24$, the numbers $x$ and $y$ are the two roots of $z^2 - 5z - 24 = 0$.",
                "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
              },
              {
                "step": "$(z - 8)(z + 3) = 0$",
                "reason": "Factoring a quadratic: the numbers $-8$ and $3$ have the sum $-5$ and the product $-24$."
              },
              {
                "step": "So $x$ and $y$ are $8$ and $-3$, in one order or the other.",
                "reason": "Zero-product property: one of the two brackets is $0$."
              },
              {
                "step": "For $u = -24$ and $v = 5$, the numbers $x$ and $y$ are the two roots of $z^2 + 24z + 5 = 0$.",
                "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
              },
              {
                "step": "$(z + 12)^2 = 139$",
                "reason": "Completing the square: $z^2 + 24z + 144 = (z + 12)^2$, so $144$ is added to both sides and $5$ is taken from both sides, and $144 - 5 = 139$."
              },
              {
                "step": "So $x$ and $y$ are $-12 + \\sqrt{139}$ and $-12 - \\sqrt{139}$, in one order or the other.",
                "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here $a = \\sqrt{139}$, so $z + 12$ is $\\sqrt{139}$ or $-\\sqrt{139}$."
              },
              {
                "step": "The values of $x$ are $8$, $-3$, $-12 + \\sqrt{139}$ and $-12 - \\sqrt{139}$.",
                "reason": "Answering the question asked: lines 10 and 13 give every solution, and in each of them $x$ is one of the two numbers."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -21$ and $x^2y + xy^2 = 20$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4, -5, -10+sqrt(101), -10-sqrt(101)}",
              "lines": [
                {
                  "step": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -21$ and $x^2y + xy^2 = 20$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $u = x + y$ and $v = xy$.",
                  "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
                },
                {
                  "step": "$x^2y + xy^2 = xy(x + y)$",
                  "reason": "Factoring: the common factor $xy$ is taken out."
                },
                {
                  "step": "So $u + v = -21$ and $uv = 20$.",
                  "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$ in the first equation and in line 3."
                },
                {
                  "step": "So $u$ and $v$ are the two roots of $w^2 + 21w + 20 = 0$.",
                  "reason": "Factored form: $(w - u)(w - v) = w^2 - (u + v)w + uv$, and line 4 gives $u + v$ and $uv$."
                },
                {
                  "step": "$(w + 1)(w + 20) = 0$",
                  "reason": "Factoring a quadratic: the numbers $1$ and $20$ have the sum $21$ and the product $20$."
                },
                {
                  "step": "So $u = -1$ and $v = -20$, or $u = -20$ and $v = -1$.",
                  "reason": "Zero-product property: the roots are $-1$ and $-20$, and $u$ and $v$ are these two roots in one order or the other."
                },
                {
                  "step": "For $u = -1$ and $v = -20$, the numbers $x$ and $y$ are the two roots of $z^2 + z - 20 = 0$.",
                  "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
                },
                {
                  "step": "$(z - 4)(z + 5) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-4$ and $5$ have the sum $1$ and the product $-20$."
                },
                {
                  "step": "So $x$ and $y$ are $4$ and $-5$, in one order or the other.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "For $u = -20$ and $v = -1$, the numbers $x$ and $y$ are the two roots of $z^2 + 20z - 1 = 0$.",
                  "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
                },
                {
                  "step": "$(z + 10)^2 = 101$",
                  "reason": "Completing the square: $z^2 + 20z + 100 = (z + 10)^2$, so $100$ is added to both sides and $-1$ is taken from both sides, and $100 + 1 = 101$."
                },
                {
                  "step": "So $x$ and $y$ are $-10 + \\sqrt{101}$ and $-10 - \\sqrt{101}$, in one order or the other.",
                  "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here $a = \\sqrt{101}$, so $z + 10$ is $\\sqrt{101}$ or $-\\sqrt{101}$."
                },
                {
                  "step": "The values of $x$ are $4$, $-5$, $-10 + \\sqrt{101}$ and $-10 - \\sqrt{101}$.",
                  "reason": "Answering the question asked: lines 10 and 13 give every solution, and in each of them $x$ is one of the two numbers."
                }
              ]
            },
            {
              "prompt": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -41$ and $x^2y + xy^2 = 180$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4, -9, -18+sqrt(329), -18-sqrt(329)}",
              "lines": [
                {
                  "step": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -41$ and $x^2y + xy^2 = 180$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $u = x + y$ and $v = xy$.",
                  "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
                },
                {
                  "step": "$x^2y + xy^2 = xy(x + y)$",
                  "reason": "Factoring: the common factor $xy$ is taken out."
                },
                {
                  "step": "So $u + v = -41$ and $uv = 180$.",
                  "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$ in the first equation and in line 3."
                },
                {
                  "step": "So $u$ and $v$ are the two roots of $w^2 + 41w + 180 = 0$.",
                  "reason": "Factored form: $(w - u)(w - v) = w^2 - (u + v)w + uv$, and line 4 gives $u + v$ and $uv$."
                },
                {
                  "step": "$(w + 5)(w + 36) = 0$",
                  "reason": "Factoring a quadratic: the numbers $5$ and $36$ have the sum $41$ and the product $180$."
                },
                {
                  "step": "So $u = -5$ and $v = -36$, or $u = -36$ and $v = -5$.",
                  "reason": "Zero-product property: the roots are $-5$ and $-36$, and $u$ and $v$ are these two roots in one order or the other."
                },
                {
                  "step": "For $u = -5$ and $v = -36$, the numbers $x$ and $y$ are the two roots of $z^2 + 5z - 36 = 0$.",
                  "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
                },
                {
                  "step": "$(z - 4)(z + 9) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-4$ and $9$ have the sum $5$ and the product $-36$."
                },
                {
                  "step": "So $x$ and $y$ are $4$ and $-9$, in one order or the other.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "For $u = -36$ and $v = -5$, the numbers $x$ and $y$ are the two roots of $z^2 + 36z - 5 = 0$.",
                  "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
                },
                {
                  "step": "$(z + 18)^2 = 329$",
                  "reason": "Completing the square: $z^2 + 36z + 324 = (z + 18)^2$, so $324$ is added to both sides and $-5$ is taken from both sides, and $324 + 5 = 329$."
                },
                {
                  "step": "So $x$ and $y$ are $-18 + \\sqrt{329}$ and $-18 - \\sqrt{329}$, in one order or the other.",
                  "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here $a = \\sqrt{329}$, so $z + 18$ is $\\sqrt{329}$ or $-\\sqrt{329}$."
                },
                {
                  "step": "The values of $x$ are $4$, $-9$, $-18 + \\sqrt{329}$ and $-18 - \\sqrt{329}$.",
                  "reason": "Answering the question asked: lines 10 and 13 give every solution, and in each of them $x$ is one of the two numbers."
                }
              ]
            },
            {
              "prompt": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -25$ and $x^2y + xy^2 = -84$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{7, -4, -14+sqrt(193), -14-sqrt(193)}",
              "lines": [
                {
                  "step": "Find every value that $x$ takes in the solutions $(x, y)$ of the system $x + y + xy = -25$ and $x^2y + xy^2 = -84$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $u = x + y$ and $v = xy$.",
                  "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
                },
                {
                  "step": "$x^2y + xy^2 = xy(x + y)$",
                  "reason": "Factoring: the common factor $xy$ is taken out."
                },
                {
                  "step": "So $u + v = -25$ and $uv = -84$.",
                  "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$ in the first equation and in line 3."
                },
                {
                  "step": "So $u$ and $v$ are the two roots of $w^2 + 25w - 84 = 0$.",
                  "reason": "Factored form: $(w - u)(w - v) = w^2 - (u + v)w + uv$, and line 4 gives $u + v$ and $uv$."
                },
                {
                  "step": "$(w - 3)(w + 28) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-3$ and $28$ have the sum $25$ and the product $-84$."
                },
                {
                  "step": "So $u = 3$ and $v = -28$, or $u = -28$ and $v = 3$.",
                  "reason": "Zero-product property: the roots are $3$ and $-28$, and $u$ and $v$ are these two roots in one order or the other."
                },
                {
                  "step": "For $u = 3$ and $v = -28$, the numbers $x$ and $y$ are the two roots of $z^2 - 3z - 28 = 0$.",
                  "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
                },
                {
                  "step": "$(z - 7)(z + 4) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-7$ and $4$ have the sum $-3$ and the product $-28$."
                },
                {
                  "step": "So $x$ and $y$ are $7$ and $-4$, in one order or the other.",
                  "reason": "Zero-product property: one of the two brackets is $0$."
                },
                {
                  "step": "For $u = -28$ and $v = 3$, the numbers $x$ and $y$ are the two roots of $z^2 + 28z + 3 = 0$.",
                  "reason": "Factored form: $(z - x)(z - y) = z^2 - (x + y)z + xy$, which is $z^2 - uz + v$."
                },
                {
                  "step": "$(z + 14)^2 = 193$",
                  "reason": "Completing the square: $z^2 + 28z + 196 = (z + 14)^2$, so $196$ is added to both sides and $3$ is taken from both sides, and $196 - 3 = 193$."
                },
                {
                  "step": "So $x$ and $y$ are $-14 + \\sqrt{193}$ and $-14 - \\sqrt{193}$, in one order or the other.",
                  "reason": "If $x^2 = a^2$, then $x = a$ or $x = -a$: here $a = \\sqrt{193}$, so $z + 14$ is $\\sqrt{193}$ or $-\\sqrt{193}$."
                },
                {
                  "step": "The values of $x$ are $7$, $-4$, $-14 + \\sqrt{193}$ and $-14 - \\sqrt{193}$.",
                  "reason": "Answering the question asked: lines 10 and 13 give every solution, and in each of them $x$ is one of the two numbers."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 112$ and $x^3 + y^3 = -640$.",
            "lines": [
              {
                "step": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 112$ and $x^3 + y^3 = -640$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $u = x + y$ and $v = xy$.",
                "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
              },
              {
                "step": "$u^2 - 2v = 112$",
                "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$: the sum of the squares is $u^2 - 2v$, and the problem gives it as $112$."
              },
              {
                "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
              },
              {
                "step": "$-640 = 112u - uv$",
                "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$, and the problem gives $x^2 + y^2$ and $x^3 + y^3$."
              },
              {
                "step": "$v = \\dfrac{u^2 - 112}{2}$",
                "reason": "Solving for a letter in terms of the others: in line 3, $2v$ is added to both sides, $112$ is taken from both sides, and both sides are divided by $2$."
              },
              {
                "step": "$-640 = 112u - \\dfrac{u^2 - 112}{2} \\cdot u$",
                "reason": "Substitution: line 6 gives $v$."
              },
              {
                "step": "$-1280 = 224u - u^3 + 112u$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$, and $u$ multiplies each term of $u^2 - 112$."
              },
              {
                "step": "$u^3 - 336u - 1280 = 0$",
                "reason": "Adding the same number to both sides: $u^3 - 336u$ is added to both sides, the like terms are collected, and the sides are read from right to left."
              },
              {
                "step": "$(u + 4)\\left(u^2 - 4u - 320\\right) = 0$",
                "reason": "Factor Theorem: $u = -4$ makes the left side $0$, since $(-4)^3 - 336 \\cdot (-4) - 1280 = 0$, so $(u + 4)$ is a factor, and dividing by it gives the other factor."
              },
              {
                "step": "$(u + 4)(u + 16)(u - 20) = 0$",
                "reason": "Factoring a quadratic: the numbers $16$ and $-20$ have the sum $-4$ and the product $-320$."
              },
              {
                "step": "So $u$ is $-4$, $-16$ or $20$.",
                "reason": "Zero-product property: one of the three brackets is $0$."
              },
              {
                "step": "The values that $x + y$ can take are $-4$, $-16$ and $20$.",
                "reason": "Answering the question asked: for each of these values of $u$, line 6 gives $v$, and the two complex roots of $z^2 - uz + v = 0$ are numbers $x$ and $y$ with the sum $u$ and the product $v$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 67$ and $x^3 + y^3 = -440$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-5, -11, 16}",
              "lines": [
                {
                  "step": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 67$ and $x^3 + y^3 = -440$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $u = x + y$ and $v = xy$.",
                  "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
                },
                {
                  "step": "$u^2 - 2v = 67$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$: the sum of the squares is $u^2 - 2v$, and the problem gives it as $67$."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$-440 = 67u - uv$",
                  "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$, and the problem gives $x^2 + y^2$ and $x^3 + y^3$."
                },
                {
                  "step": "$v = \\dfrac{u^2 - 67}{2}$",
                  "reason": "Solving for a letter in terms of the others: in line 3, $2v$ is added to both sides, $67$ is taken from both sides, and both sides are divided by $2$."
                },
                {
                  "step": "$-440 = 67u - \\dfrac{u^2 - 67}{2} \\cdot u$",
                  "reason": "Substitution: line 6 gives $v$."
                },
                {
                  "step": "$-880 = 134u - u^3 + 67u$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$, and $u$ multiplies each term of $u^2 - 67$."
                },
                {
                  "step": "$u^3 - 201u - 880 = 0$",
                  "reason": "Adding the same number to both sides: $u^3 - 201u$ is added to both sides, the like terms are collected, and the sides are read from right to left."
                },
                {
                  "step": "$(u + 5)\\left(u^2 - 5u - 176\\right) = 0$",
                  "reason": "Factor Theorem: $u = -5$ makes the left side $0$, since $(-5)^3 - 201 \\cdot (-5) - 880 = 0$, so $(u + 5)$ is a factor, and dividing by it gives the other factor."
                },
                {
                  "step": "$(u + 5)(u + 11)(u - 16) = 0$",
                  "reason": "Factoring a quadratic: the numbers $11$ and $-16$ have the sum $-5$ and the product $-176$."
                },
                {
                  "step": "So $u$ is $-5$, $-11$ or $16$.",
                  "reason": "Zero-product property: one of the three brackets is $0$."
                },
                {
                  "step": "The values that $x + y$ can take are $-5$, $-11$ and $16$.",
                  "reason": "Answering the question asked: for each of these values of $u$, line 6 gives $v$, and the two complex roots of $z^2 - uz + v = 0$ are numbers $x$ and $y$ with the sum $u$ and the product $v$."
                }
              ]
            },
            {
              "prompt": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 39$ and $x^3 + y^3 = -162$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-3, -9, 12}",
              "lines": [
                {
                  "step": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 39$ and $x^3 + y^3 = -162$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $u = x + y$ and $v = xy$.",
                  "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
                },
                {
                  "step": "$u^2 - 2v = 39$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$: the sum of the squares is $u^2 - 2v$, and the problem gives it as $39$."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$-162 = 39u - uv$",
                  "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$, and the problem gives $x^2 + y^2$ and $x^3 + y^3$."
                },
                {
                  "step": "$v = \\dfrac{u^2 - 39}{2}$",
                  "reason": "Solving for a letter in terms of the others: in line 3, $2v$ is added to both sides, $39$ is taken from both sides, and both sides are divided by $2$."
                },
                {
                  "step": "$-162 = 39u - \\dfrac{u^2 - 39}{2} \\cdot u$",
                  "reason": "Substitution: line 6 gives $v$."
                },
                {
                  "step": "$-324 = 78u - u^3 + 39u$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$, and $u$ multiplies each term of $u^2 - 39$."
                },
                {
                  "step": "$u^3 - 117u - 324 = 0$",
                  "reason": "Adding the same number to both sides: $u^3 - 117u$ is added to both sides, the like terms are collected, and the sides are read from right to left."
                },
                {
                  "step": "$(u + 3)\\left(u^2 - 3u - 108\\right) = 0$",
                  "reason": "Factor Theorem: $u = -3$ makes the left side $0$, since $(-3)^3 - 117 \\cdot (-3) - 324 = 0$, so $(u + 3)$ is a factor, and dividing by it gives the other factor."
                },
                {
                  "step": "$(u + 3)(u + 9)(u - 12) = 0$",
                  "reason": "Factoring a quadratic: the numbers $9$ and $-12$ have the sum $-3$ and the product $-108$."
                },
                {
                  "step": "So $u$ is $-3$, $-9$ or $12$.",
                  "reason": "Zero-product property: one of the three brackets is $0$."
                },
                {
                  "step": "The values that $x + y$ can take are $-3$, $-9$ and $12$.",
                  "reason": "Answering the question asked: for each of these values of $u$, line 6 gives $v$, and the two complex roots of $z^2 - uz + v = 0$ are numbers $x$ and $y$ with the sum $u$ and the product $v$."
                }
              ]
            },
            {
              "prompt": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 109$ and $x^3 + y^3 = 323$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{2, 17, -19}",
              "lines": [
                {
                  "step": "Find every value that $x + y$ can take, where $x$ and $y$ are complex numbers with $x^2 + y^2 = 109$ and $x^3 + y^3 = 323$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $u = x + y$ and $v = xy$.",
                  "reason": "Substitution for a repeated expression: the sum and the product of $x$ and $y$ each take a letter of their own."
                },
                {
                  "step": "$u^2 - 2v = 109$",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$: the sum of the squares is $u^2 - 2v$, and the problem gives it as $109$."
                },
                {
                  "step": "$x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$",
                  "reason": "Power-sum recursion: with $n = 3$, the sum of the cubes is the sum of the two numbers times the sum of their squares, less their product times their sum."
                },
                {
                  "step": "$323 = 109u - uv$",
                  "reason": "Substitution: $u$ and $v$ take the places of $x + y$ and $xy$, and the problem gives $x^2 + y^2$ and $x^3 + y^3$."
                },
                {
                  "step": "$v = \\dfrac{u^2 - 109}{2}$",
                  "reason": "Solving for a letter in terms of the others: in line 3, $2v$ is added to both sides, $109$ is taken from both sides, and both sides are divided by $2$."
                },
                {
                  "step": "$323 = 109u - \\dfrac{u^2 - 109}{2} \\cdot u$",
                  "reason": "Substitution: line 6 gives $v$."
                },
                {
                  "step": "$646 = 218u - u^3 + 109u$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$, and $u$ multiplies each term of $u^2 - 109$."
                },
                {
                  "step": "$u^3 - 327u + 646 = 0$",
                  "reason": "Adding the same number to both sides: $u^3 - 327u$ is added to both sides, the like terms are collected, and the sides are read from right to left."
                },
                {
                  "step": "$(u - 2)\\left(u^2 + 2u - 323\\right) = 0$",
                  "reason": "Factor Theorem: $u = 2$ makes the left side $0$, since $2^3 - 327 \\cdot 2 + 646 = 0$, so $(u - 2)$ is a factor, and dividing by it gives the other factor."
                },
                {
                  "step": "$(u - 2)(u - 17)(u + 19) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-17$ and $19$ have the sum $2$ and the product $-323$."
                },
                {
                  "step": "So $u$ is $2$, $17$ or $-19$.",
                  "reason": "Zero-product property: one of the three brackets is $0$."
                },
                {
                  "step": "The values that $x + y$ can take are $2$, $17$ and $-19$.",
                  "reason": "Answering the question asked: for each of these values of $u$, line 6 gives $v$, and the two complex roots of $z^2 - uz + v = 0$ are numbers $x$ and $y$ with the sum $u$ and the product $v$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = -4$, $x^2 + y^2 + z^2 = 238$ and $xyz = 594$.",
            "lines": [
              {
                "step": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = -4$, $x^2 + y^2 + z^2 = 238$ and $xyz = 594$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + y^2 + z^2 = (x + y + z)^2 - 2(xy + yz + zx)$",
                "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
              },
              {
                "step": "$\\left(238\\right) = \\left(-4\\right)^2 - 2(xy + yz + zx)$",
                "reason": "Substituting a value: the problem gives $x^2 + y^2 + z^2$ and $x + y + z$, each put in brackets."
              },
              {
                "step": "$xy + yz + zx = -111$",
                "reason": "Isolating the variable: $2(xy + yz + zx)$ is added to both sides, $238$ is taken from both sides, and both sides are divided by $2$."
              },
              {
                "step": "So $x$, $y$ and $z$ are the three roots of $w^3 + 4w^2 - 111w - 594 = 0$.",
                "reason": "Vieta's formulas: in $(w - x)(w - y)(w - z)$, with leading coefficient $1$, the coefficient of $w^2$ is $(-1)^1$ times the sum of the roots, the coefficient of $w$ is $(-1)^2$ times the sum of their products two at a time, and the constant term is $(-1)^3$ times their product."
              },
              {
                "step": "$(w + 6)\\left(w^2 - 2w - 99\\right) = 0$",
                "reason": "Factor Theorem: $w = -6$ makes the left side $0$, since $(-6)^3 + 4 \\cdot (-6)^2 - 111 \\cdot (-6) - 594 = 0$, so $(w + 6)$ is a factor, and dividing by it gives the other factor."
              },
              {
                "step": "$(w + 6)(w + 9)(w - 11) = 0$",
                "reason": "Factoring a quadratic: the numbers $9$ and $-11$ have the sum $-2$ and the product $-99$."
              },
              {
                "step": "So $w$ is $-6$, $-9$ or $11$.",
                "reason": "Zero-product property: one of the three brackets is $0$."
              },
              {
                "step": "The values of $x$ are $-6$, $-9$ and $11$.",
                "reason": "Answering the question asked: the system is a symmetric system, so each of the three roots is the value of $x$ in a solution, with the other two roots as $y$ and $z$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = 13$, $x^2 + y^2 + z^2 = 165$ and $xyz = -280$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{-4, 7, 10}",
              "lines": [
                {
                  "step": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = 13$, $x^2 + y^2 + z^2 = 165$ and $xyz = -280$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 + z^2 = (x + y + z)^2 - 2(xy + yz + zx)$",
                  "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
                },
                {
                  "step": "$\\left(165\\right) = \\left(13\\right)^2 - 2(xy + yz + zx)$",
                  "reason": "Substituting a value: the problem gives $x^2 + y^2 + z^2$ and $x + y + z$, each put in brackets."
                },
                {
                  "step": "$xy + yz + zx = 2$",
                  "reason": "Isolating the variable: $2(xy + yz + zx)$ is added to both sides, $165$ is taken from both sides, and both sides are divided by $2$."
                },
                {
                  "step": "So $x$, $y$ and $z$ are the three roots of $w^3 - 13w^2 + 2w + 280 = 0$.",
                  "reason": "Vieta's formulas: in $(w - x)(w - y)(w - z)$, with leading coefficient $1$, the coefficient of $w^2$ is $(-1)^1$ times the sum of the roots, the coefficient of $w$ is $(-1)^2$ times the sum of their products two at a time, and the constant term is $(-1)^3$ times their product."
                },
                {
                  "step": "$(w + 4)\\left(w^2 - 17w + 70\\right) = 0$",
                  "reason": "Factor Theorem: $w = -4$ makes the left side $0$, since $(-4)^3 - 13 \\cdot (-4)^2 + 2 \\cdot (-4) + 280 = 0$, so $(w + 4)$ is a factor, and dividing by it gives the other factor."
                },
                {
                  "step": "$(w + 4)(w - 7)(w - 10) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-7$ and $-10$ have the sum $-17$ and the product $70$."
                },
                {
                  "step": "So $w$ is $-4$, $7$ or $10$.",
                  "reason": "Zero-product property: one of the three brackets is $0$."
                },
                {
                  "step": "The values of $x$ are $-4$, $7$ and $10$.",
                  "reason": "Answering the question asked: the system is a symmetric system, so each of the three roots is the value of $x$ in a solution, with the other two roots as $y$ and $z$."
                }
              ]
            },
            {
              "prompt": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = -19$, $x^2 + y^2 + z^2 = 281$ and $xyz = 528$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{4, -11, -12}",
              "lines": [
                {
                  "step": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = -19$, $x^2 + y^2 + z^2 = 281$ and $xyz = 528$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 + z^2 = (x + y + z)^2 - 2(xy + yz + zx)$",
                  "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
                },
                {
                  "step": "$\\left(281\\right) = \\left(-19\\right)^2 - 2(xy + yz + zx)$",
                  "reason": "Substituting a value: the problem gives $x^2 + y^2 + z^2$ and $x + y + z$, each put in brackets."
                },
                {
                  "step": "$xy + yz + zx = 40$",
                  "reason": "Isolating the variable: $2(xy + yz + zx)$ is added to both sides, $281$ is taken from both sides, and both sides are divided by $2$."
                },
                {
                  "step": "So $x$, $y$ and $z$ are the three roots of $w^3 + 19w^2 + 40w - 528 = 0$.",
                  "reason": "Vieta's formulas: in $(w - x)(w - y)(w - z)$, with leading coefficient $1$, the coefficient of $w^2$ is $(-1)^1$ times the sum of the roots, the coefficient of $w$ is $(-1)^2$ times the sum of their products two at a time, and the constant term is $(-1)^3$ times their product."
                },
                {
                  "step": "$(w - 4)\\left(w^2 + 23w + 132\\right) = 0$",
                  "reason": "Factor Theorem: $w = 4$ makes the left side $0$, since $4^3 + 19 \\cdot 4^2 + 40 \\cdot 4 - 528 = 0$, so $(w - 4)$ is a factor, and dividing by it gives the other factor."
                },
                {
                  "step": "$(w - 4)(w + 11)(w + 12) = 0$",
                  "reason": "Factoring a quadratic: the numbers $11$ and $12$ have the sum $23$ and the product $132$."
                },
                {
                  "step": "So $w$ is $4$, $-11$ or $-12$.",
                  "reason": "Zero-product property: one of the three brackets is $0$."
                },
                {
                  "step": "The values of $x$ are $4$, $-11$ and $-12$.",
                  "reason": "Answering the question asked: the system is a symmetric system, so each of the three roots is the value of $x$ in a solution, with the other two roots as $y$ and $z$."
                }
              ]
            },
            {
              "prompt": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = 2$, $x^2 + y^2 + z^2 = 190$ and $xyz = -270$.",
              "form": "Answer as the set of values, as in {-1, 3}.",
              "answer": "{3, 9, -10}",
              "lines": [
                {
                  "step": "Find every value that $x$ takes in the solutions $(x, y, z)$ of the system $x + y + z = 2$, $x^2 + y^2 + z^2 = 190$ and $xyz = -270$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + y^2 + z^2 = (x + y + z)^2 - 2(xy + yz + zx)$",
                  "reason": "Elementary symmetric sums: the sum of the squares of three numbers is the square of their sum, less twice the sum of their products two at a time."
                },
                {
                  "step": "$\\left(190\\right) = \\left(2\\right)^2 - 2(xy + yz + zx)$",
                  "reason": "Substituting a value: the problem gives $x^2 + y^2 + z^2$ and $x + y + z$, each put in brackets."
                },
                {
                  "step": "$xy + yz + zx = -93$",
                  "reason": "Isolating the variable: $2(xy + yz + zx)$ is added to both sides, $190$ is taken from both sides, and both sides are divided by $2$."
                },
                {
                  "step": "So $x$, $y$ and $z$ are the three roots of $w^3 - 2w^2 - 93w + 270 = 0$.",
                  "reason": "Vieta's formulas: in $(w - x)(w - y)(w - z)$, with leading coefficient $1$, the coefficient of $w^2$ is $(-1)^1$ times the sum of the roots, the coefficient of $w$ is $(-1)^2$ times the sum of their products two at a time, and the constant term is $(-1)^3$ times their product."
                },
                {
                  "step": "$(w - 3)\\left(w^2 + w - 90\\right) = 0$",
                  "reason": "Factor Theorem: $w = 3$ makes the left side $0$, since $3^3 - 2 \\cdot 3^2 - 93 \\cdot 3 + 270 = 0$, so $(w - 3)$ is a factor, and dividing by it gives the other factor."
                },
                {
                  "step": "$(w - 3)(w - 9)(w + 10) = 0$",
                  "reason": "Factoring a quadratic: the numbers $-9$ and $10$ have the sum $1$ and the product $-90$."
                },
                {
                  "step": "So $w$ is $3$, $9$ or $-10$.",
                  "reason": "Zero-product property: one of the three brackets is $0$."
                },
                {
                  "step": "The values of $x$ are $3$, $9$ and $-10$.",
                  "reason": "Answering the question asked: the system is a symmetric system, so each of the three roots is the value of $x$ in a solution, with the other two roots as $y$ and $z$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t205-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = -7$ and $xy = -22$, and write that line right.",
            "given": [
              "$x^2 + y^2 = \\left(-7\\right)^2$",
              "$x^2 + y^2 = 49$",
              "$x^4 + y^4 = \\left(49\\right)^2 - 2 \\cdot \\left(-22\\right)^2$",
              "$x^4 + y^4 = 1433$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = -7$ and $xy = -22$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 takes $x^2 + y^2$ to be $(x + y)^2$, the square of the sum $-7$.",
                "reason": "A power or a root taken term by term over a sum: by the square of a binomial, $(x + y)^2$ is $x^2 + 2xy + y^2$, which is $2xy$ more than $x^2 + y^2$, and here $2xy$ is $2 \\cdot \\left(-22\\right)$."
              },
              {
                "step": "Line 1 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 1 as it is written.",
                "reason": "Transitive property: the problem and the right lines above line 1 lead one to the next, and line 1 is the first step that does not."
              },
              {
                "step": "Line 1 written right is $x^2 + y^2 = \\left(-7\\right)^2 - 2 \\cdot \\left(-22\\right)$.",
                "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$, and the sum and the product put in, each in brackets."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = -11$ and $xy = -5$, and write that line right.",
              "given": [
                "$x^2 + y^2 = \\left(-11\\right)^2 - 2 \\cdot \\left(-5\\right)$",
                "$x^2 + y^2 = 131$",
                "$x^4 + y^4 = \\left(131\\right)^2$",
                "$x^4 + y^4 = 17{,}161$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^4+y^4 = (131)^2-2*(-5)^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = -11$ and $xy = -5$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $x^4 + y^4$ to be $(x^2 + y^2)^2$, the square of the sum $131$ from line 2.",
                  "reason": "A power or a root taken term by term over a sum: by the square of a binomial, $(x^2 + y^2)^2$ is $x^4 + 2x^2y^2 + y^4$, which is $2x^2y^2$ more than $x^4 + y^4$, and here $2x^2y^2$ is $2 \\cdot \\left(-5\\right)^2$."
                },
                {
                  "step": "Line 3 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 3 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 3 lead one to the next, and line 3 is the first step that does not."
                },
                {
                  "step": "Line 3 written right is $x^4 + y^4 = \\left(131\\right)^2 - 2 \\cdot \\left(-5\\right)^2$.",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x^2$ and $b = y^2$, and line 2 and the product put in, each in brackets."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = 13$ and $xy = -18$, and write that line right.",
              "given": [
                "$x^2 + y^2 = \\left(13\\right)^2$",
                "$x^2 + y^2 = 169$",
                "$x^4 + y^4 = \\left(169\\right)^2 - 2 \\cdot \\left(-18\\right)^2$",
                "$x^4 + y^4 = 27{,}913$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: x^2+y^2 = (13)^2-2*(-18)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = 13$ and $xy = -18$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 takes $x^2 + y^2$ to be $(x + y)^2$, the square of the sum $13$.",
                  "reason": "A power or a root taken term by term over a sum: by the square of a binomial, $(x + y)^2$ is $x^2 + 2xy + y^2$, which is $2xy$ more than $x^2 + y^2$, and here $2xy$ is $2 \\cdot \\left(-18\\right)$."
                },
                {
                  "step": "Line 1 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 1 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 1 lead one to the next, and line 1 is the first step that does not."
                },
                {
                  "step": "Line 1 written right is $x^2 + y^2 = \\left(13\\right)^2 - 2 \\cdot \\left(-18\\right)$.",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$, and the sum and the product put in, each in brackets."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = -15$ and $xy = 10$, and write that line right.",
              "given": [
                "$x^2 + y^2 = \\left(-15\\right)^2 - 2 \\cdot \\left(10\\right)$",
                "$x^2 + y^2 = 205$",
                "$x^4 + y^4 = \\left(205\\right)^2$",
                "$x^4 + y^4 = 42{,}025$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^4+y^4 = (205)^2-2*(10)^2",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^4 + y^4$, given that $x + y = -15$ and $xy = 10$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $x^4 + y^4$ to be $(x^2 + y^2)^2$, the square of the sum $205$ from line 2.",
                  "reason": "A power or a root taken term by term over a sum: by the square of a binomial, $(x^2 + y^2)^2$ is $x^4 + 2x^2y^2 + y^4$, which is $2x^2y^2$ more than $x^4 + y^4$, and here $2x^2y^2$ is $2 \\cdot \\left(10\\right)^2$."
                },
                {
                  "step": "Line 3 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 3 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 3 lead one to the next, and line 3 is the first step that does not."
                },
                {
                  "step": "Line 3 written right is $x^4 + y^4 = \\left(205\\right)^2 - 2 \\cdot \\left(10\\right)^2$.",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x^2$ and $b = y^2$, and line 2 and the product put in, each in brackets."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = 5$ and $xy = -15$, and write that line right.",
            "given": [
              "$x^2 + y^2 = \\left(5\\right)^2 - 2 \\cdot \\left(-15\\right)$",
              "$x^2 + y^2 = 55$",
              "$x^3 + y^3 = \\left(5\\right) \\cdot \\left(55\\right) + \\left(-15\\right) \\cdot \\left(5\\right)$",
              "$x^3 + y^3 = 200$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = 5$ and $xy = -15$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 adds the product term $\\left(-15\\right) \\cdot \\left(5\\right)$.",
                "reason": "A sign lost: $x^3 + y^3 = (x + y)(x^2 + y^2) - xy(x + y)$, so the product times the sum is taken away."
              },
              {
                "step": "Line 3 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 3 as it is written.",
                "reason": "Transitive property: the problem and the right lines above line 3 lead one to the next, and line 3 is the first step that does not."
              },
              {
                "step": "Line 3 written right is $x^3 + y^3 = \\left(5\\right) \\cdot \\left(55\\right) - \\left(-15\\right) \\cdot \\left(5\\right)$.",
                "reason": "Power-sum recursion: with $n = 3$, and the sum, the sum of the squares and the product put in, each in brackets."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = -3$ and $xy = -18$, and write that line right.",
              "given": [
                "$x^2 + y^2 = \\left(-3\\right)^2 + 2 \\cdot \\left(-18\\right)$",
                "$x^2 + y^2 = -27$",
                "$x^3 + y^3 = \\left(-3\\right) \\cdot \\left(-27\\right) - \\left(-18\\right) \\cdot \\left(-3\\right)$",
                "$x^3 + y^3 = 27$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: x^2+y^2 = (-3)^2-2*(-18)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = -3$ and $xy = -18$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 adds $2 \\cdot \\left(-18\\right)$ to the square of the sum.",
                  "reason": "A sign lost: $x^2 + y^2 = (x + y)^2 - 2xy$, so twice the product is taken away from the square of the sum."
                },
                {
                  "step": "Line 1 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 1 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 1 lead one to the next, and line 1 is the first step that does not."
                },
                {
                  "step": "Line 1 written right is $x^2 + y^2 = \\left(-3\\right)^2 - 2 \\cdot \\left(-18\\right)$.",
                  "reason": "The identity $a^2 + b^2 = (a + b)^2 - 2ab$, with $a = x$ and $b = y$, and the sum and the product put in, each in brackets."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = -11$ and $xy = -14$, and write that line right.",
              "given": [
                "$x^2 + y^2 = \\left(-11\\right)^2 - 2 \\cdot \\left(-14\\right)$",
                "$x^2 + y^2 = 149$",
                "$x^3 + y^3 = \\left(-11\\right) \\cdot \\left(149\\right) - \\left(-14\\right) \\cdot \\left(-11\\right)$",
                "$x^3 + y^3 = -1485$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: x^3+y^3 = -1793",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = -11$ and $xy = -14$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 works out $\\left(-14\\right) \\cdot \\left(-11\\right)$ as $-154$, with the minus sign of $-14$ dropped, and takes it from $-1639$.",
                  "reason": "A sign lost: $\\left(-14\\right) \\cdot \\left(-11\\right) = 154$, and taking $154$ away adds $-154$."
                },
                {
                  "step": "Line 4 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 4 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 4 lead one to the next, and line 4 is the first step that does not."
                },
                {
                  "step": "Line 4 written right is $x^3 + y^3 = -1793$.",
                  "reason": "Order of operations, from arithmetic: $\\left(-11\\right) \\cdot \\left(149\\right) = -1639$ and $\\left(-14\\right) \\cdot \\left(-11\\right) = 154$, and $-1639 - \\left(154\\right) = -1793$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = -7$ and $xy = -12$, and write that line right.",
              "given": [
                "$x^2 + y^2 = \\left(-7\\right)^2 - 2 \\cdot \\left(-12\\right)$",
                "$x^2 + y^2 = 25$",
                "$x^3 + y^3 = \\left(-7\\right) \\cdot \\left(25\\right) - \\left(-12\\right) \\cdot \\left(-7\\right)$",
                "$x^3 + y^3 = -259$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2+y^2 = 73",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $x^3 + y^3$, given that $x + y = -7$ and $xy = -12$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 works out $2 \\cdot \\left(-12\\right)$ as $24$, with the minus sign of $-12$ dropped, and takes it from $49$.",
                  "reason": "A sign lost: $2 \\cdot \\left(-12\\right) = -24$, and taking $-24$ away adds $24$."
                },
                {
                  "step": "Line 2 is the first line that does not follow from the problem and the lines above it, and each later line follows from line 2 as it is written.",
                  "reason": "Transitive property: the problem and the right lines above line 2 lead one to the next, and line 2 is the first step that does not."
                },
                {
                  "step": "Line 2 written right is $x^2 + y^2 = 73$.",
                  "reason": "Order of operations, from arithmetic: $(-7)^2 = 49$ and $2 \\cdot \\left(-12\\right) = -24$, and $49 - \\left(-24\\right) = 73$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t205-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the sum of the cubes alone on the left and nothing multiplied out: The sum of the cubes of $x$ and $y$ is 21 times the sum of their squares, less 16 times the sum of $x$ and $y$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the sum of the cubes alone on the left and nothing multiplied out: The sum of the cubes of $x$ and $y$ is 21 times the sum of their squares, less 16 times the sum of $x$ and $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the cubes of $x$ and $y$ is $x^3 + y^3$.",
                "reason": "Writing a sentence as an equation: the cubes of $x$ and $y$ are $x^3$ and $y^3$, and \"the sum of\" adds them."
              },
              {
                "step": "The sum of the squares of $x$ and $y$, taken 21 times, is $21(x^2 + y^2)$.",
                "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"21 times\" multiplies the whole sum."
              },
              {
                "step": "In the same way, the sum of $x$ and $y$, taken 16 times, is $16(x + y)$.",
                "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"16 times\" multiplies the whole sum."
              },
              {
                "step": "$x^3 + y^3 = 21(x^2 + y^2) - 16(x + y)$",
                "reason": "Writing a sentence as an equation: \"less\" takes away what follows it, and the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the sum of the fifth powers alone on the left and nothing multiplied out: For two numbers $x$ and $y$, the sum of the fifth powers equals 27 times the sum of the fourth powers, plus 38 times the sum of their cubes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^5+y^5 = 27*(x^4+y^4)+38*(x^3+y^3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the fifth powers alone on the left and nothing multiplied out: For two numbers $x$ and $y$, the sum of the fifth powers equals 27 times the sum of the fourth powers, plus 38 times the sum of their cubes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the fifth powers of $x$ and $y$ is $x^5 + y^5$.",
                  "reason": "Writing a sentence as an equation: the fifth powers of $x$ and $y$ are $x^5$ and $y^5$, and \"the sum of\" adds them."
                },
                {
                  "step": "The sum of the fourth powers of $x$ and $y$, taken 27 times, is $27(x^4 + y^4)$.",
                  "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"27 times\" multiplies the whole sum."
                },
                {
                  "step": "In the same way, the sum of the cubes of $x$ and $y$, taken 38 times, is $38(x^3 + y^3)$.",
                  "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"38 times\" multiplies the whole sum."
                },
                {
                  "step": "$x^5 + y^5 = 27(x^4 + y^4) + 38(x^3 + y^3)$",
                  "reason": "Writing a sentence as an equation: \"plus\" adds what follows it, and the word \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum of the fourth powers alone on the left and nothing multiplied out: Adding 31 times the sum of the squares of $x$ and $y$ to 18 times the sum of their cubes gives the sum of their fourth powers.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4+y^4 = 18*(x^3+y^3)+31*(x^2+y^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the fourth powers alone on the left and nothing multiplied out: Adding 31 times the sum of the squares of $x$ and $y$ to 18 times the sum of their cubes gives the sum of their fourth powers.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the fourth powers of $x$ and $y$ is $x^4 + y^4$.",
                  "reason": "Writing a sentence as an equation: the fourth powers of $x$ and $y$ are $x^4$ and $y^4$, and \"the sum of\" adds them."
                },
                {
                  "step": "The sum of the cubes of $x$ and $y$, taken 18 times, is $18(x^3 + y^3)$.",
                  "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"18 times\" multiplies the whole sum."
                },
                {
                  "step": "In the same way, the sum of the squares of $x$ and $y$, taken 31 times, is $31(x^2 + y^2)$.",
                  "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"31 times\" multiplies the whole sum."
                },
                {
                  "step": "$x^4 + y^4 = 18(x^3 + y^3) + 31(x^2 + y^2)$",
                  "reason": "Writing a sentence as an equation: \"adding\" one amount \"to\" another adds the first to the second, so $31(x^2 + y^2)$ is added to $18(x^3 + y^3)$, and the word \"gives\" marks the place of the equals sign, with the sum of the fourth powers on the left as the prompt asks."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum of the fourth powers alone on the left and nothing multiplied out: The sum of the fourth powers of $x$ and $y$ is 6 times the sum of their squares less than 10 times the sum of their cubes.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^4+y^4 = 10*(x^3+y^3)-6*(x^2+y^2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum of the fourth powers alone on the left and nothing multiplied out: The sum of the fourth powers of $x$ and $y$ is 6 times the sum of their squares less than 10 times the sum of their cubes.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the fourth powers of $x$ and $y$ is $x^4 + y^4$.",
                  "reason": "Writing a sentence as an equation: the fourth powers of $x$ and $y$ are $x^4$ and $y^4$, and \"the sum of\" adds them."
                },
                {
                  "step": "The sum of the cubes of $x$ and $y$, taken 10 times, is $10(x^3 + y^3)$.",
                  "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"10 times\" multiplies the whole sum."
                },
                {
                  "step": "In the same way, the sum of the squares of $x$ and $y$, taken 6 times, is $6(x^2 + y^2)$.",
                  "reason": "Writing a sentence as an equation: the sum is kept in a bracket, and \"6 times\" multiplies the whole sum."
                },
                {
                  "step": "$x^4 + y^4 = 10(x^3 + y^3) - 6(x^2 + y^2)$",
                  "reason": "Writing a sentence as an equation: \"less than\" takes what stands before it away from what follows it, so $6(x^2 + y^2)$ is taken from $10(x^3 + y^3)$, and the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t205-s1",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$ and $b$ and each whole number $n \\ge 3$, $a^n + b^n = (a + b)(a^{n-1} + b^{n-1}) - ab(a^{n-2} + b^{n-2})$. Facts it may use: every term of one bracket times every term of the other, product law, the commutative and associative laws of multiplication, substitution, factoring, adding the same number to both sides, symmetric property.",
      "check": {
        "proof": [
          {
            "line": "$(a + b)(a^{n-1} + b^{n-1}) = a \\cdot a^{n-1} + a \\cdot b^{n-1} + b \\cdot a^{n-1} + b \\cdot b^{n-1}$",
            "reason": "Every term of one bracket times every term of the other."
          },
          {
            "line": "Here $a \\cdot a^{n-1} = a^n$ and $b \\cdot b^{n-1} = b^n$.",
            "reason": "Product law: the exponents $1$ and $n - 1$ add up to $n$."
          },
          {
            "line": "Also $b^{n-1} = b \\cdot b^{n-2}$ and $a^{n-1} = a \\cdot a^{n-2}$.",
            "reason": "Product law: the exponents $1$ and $n - 2$ add up to $n - 1$, and $n - 2$ is a whole number that is at least $1$."
          },
          {
            "line": "So $a \\cdot b^{n-1} = a \\cdot b \\cdot b^{n-2}$ and $b \\cdot a^{n-1} = b \\cdot a \\cdot a^{n-2}$.",
            "reason": "Substitution: line 3 gives $b^{n-1}$ and $a^{n-1}$."
          },
          {
            "line": "So $a \\cdot b^{n-1} = ab \\cdot b^{n-2}$ and $b \\cdot a^{n-1} = ab \\cdot a^{n-2}$.",
            "reason": "The commutative and associative laws of multiplication, from arithmetic: in each product of line 4 the factors $a$ and $b$ are brought together."
          },
          {
            "line": "$(a + b)(a^{n-1} + b^{n-1}) = a^n + ab \\cdot b^{n-2} + ab \\cdot a^{n-2} + b^n$",
            "reason": "Substitution: lines 2 and 5 take the places of the four products in line 1."
          },
          {
            "line": "$(a + b)(a^{n-1} + b^{n-1}) = a^n + b^n + ab(a^{n-2} + b^{n-2})$",
            "reason": "Factoring: the common factor $ab$ is taken out of the two middle terms."
          },
          {
            "line": "$(a + b)(a^{n-1} + b^{n-1}) - ab(a^{n-2} + b^{n-2}) = a^n + b^n$",
            "reason": "Adding the same number to both sides: $ab(a^{n-2} + b^{n-2})$ is taken from both sides."
          },
          {
            "line": "$a^n + b^n = (a + b)(a^{n-1} + b^{n-1}) - ab(a^{n-2} + b^{n-2})$",
            "reason": "Symmetric property: the two sides of line 8 change places."
          }
        ]
      }
    },
    {
      "id": "t205-s2",
      "method": "direct proof",
      "statement": "Prove that for numbers $a$, $b$ and $c$, if $r$, $s$ and $t$ are the roots of $x^3 + ax^2 + bx + c = 0$, then for each whole number $n \\ge 4$, $r^n + s^n + t^n = -a(r^{n-1} + s^{n-1} + t^{n-1}) - b(r^{n-2} + s^{n-2} + t^{n-2}) - c(r^{n-3} + s^{n-3} + t^{n-3})$. Facts it may use: A root satisfies its equation, multiplying both sides by the same number, product law, adding the same number to both sides, adding two equations, factoring.",
      "check": {
        "proof": [
          {
            "line": "$r^3 + ar^2 + br + c = 0$",
            "reason": "A root satisfies its equation: $r$ is a root of $x^3 + ax^2 + bx + c = 0$."
          },
          {
            "line": "$r^{n-3}(r^3 + ar^2 + br + c) = 0$",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $r^{n-3}$, where $n - 3$ is a whole number that is at least $1$, and the right side stays $0$."
          },
          {
            "line": "$r^n + ar^{n-1} + br^{n-2} + cr^{n-3} = 0$",
            "reason": "Product law: $r^{n-3}$ multiplies each term in the bracket, and the exponents of $r$ are added."
          },
          {
            "line": "$r^n = -ar^{n-1} - br^{n-2} - cr^{n-3}$",
            "reason": "Adding the same number to both sides: $-ar^{n-1} - br^{n-2} - cr^{n-3}$ is added to each side."
          },
          {
            "line": "In the same way, $s^n = -as^{n-1} - bs^{n-2} - cs^{n-3}$ and $t^n = -at^{n-1} - bt^{n-2} - ct^{n-3}$.",
            "reason": "A root satisfies its equation: $s$ and $t$ are roots too, so lines 1 to 4 hold with $s$ and with $t$ in the place of $r$."
          },
          {
            "line": "$r^n + s^n + t^n = -ar^{n-1} - as^{n-1} - at^{n-1} - br^{n-2} - bs^{n-2} - bt^{n-2} - cr^{n-3} - cs^{n-3} - ct^{n-3}$",
            "reason": "Adding two equations: the three equations of lines 4 and 5 are added, and the terms on the right are put in the order of the powers."
          },
          {
            "line": "$r^n + s^n + t^n = -a(r^{n-1} + s^{n-1} + t^{n-1}) - b(r^{n-2} + s^{n-2} + t^{n-2}) - c(r^{n-3} + s^{n-3} + t^{n-3})$",
            "reason": "Factoring: the common factors $-a$, $-b$ and $-c$ are taken out."
          }
        ]
      }
    }
  ]
}
