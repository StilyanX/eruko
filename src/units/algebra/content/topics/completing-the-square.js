export default {
  "number": 145,
  "title": "Completing the square",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "372-384"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Write $x^2 + 26x - 9$ in completed-square form.",
    "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
    "answer": "(x+13)^2-178",
    "solution": [
      "Write $x^2 + 26x - 9$ in completed-square form.",
      "$x^2 + 26x - 9 = (x^2 + 26x + 169) - 169 - 9$",
      "$x^2 + 26x + 169 = (x + 13)^2$",
      "$x^2 + 26x - 9 = (x + 13)^2 - 169 - 9$",
      "$x^2 + 26x - 9 = (x + 13)^2 - 178$"
    ]
  },
  "ideas": [
    {
      "name": "Completing the square",
      "concrete": "The sum $x^2 + 56x$ is not a square, but $(x + 28)^2 = x^2 + 56x + 784$, so adding $784$, the square of $28$, half the coefficient of $x$, makes it one: $x^2 + 56x + 784 = (x + 28)^2$.",
      "general": "For every number $b$ and every $x$, $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$. Adding the square of half the coefficient of $x$ to $x^2 + bx$, so that the sum is the square of a binomial, is **completing the square**. In an equation the number is added to both sides; in an expression it is added and taken away."
    },
    {
      "name": "The perfect-square test",
      "concrete": "For $x^2 + 31x + c$ to be $(x + e)^2 = x^2 + 2ex + e^2$, the number $2e$ must be $31$, so $e = \\dfrac{31}{2}$ and $c = \\dfrac{961}{4}$.",
      "general": "With $d = 1$, the perfect-square quadratic of t137 reads: for numbers $b$ and $c$, $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$, and then it is $\\left(x + \\dfrac{b}{2}\\right)^2$. The test reads only $b$ and $c$ when the coefficient of $x^2$ is $1$; with another coefficient, that coefficient is taken out first."
    }
  ],
  "kinds": [
    {
      "id": "t145-k1",
      "forms": [
        {
          "example": {
            "problem": "Write $x^2 - 4x - 14$ in completed-square form.",
            "lines": [
              {
                "step": "Write $x^2 - 4x - 14$ in completed-square form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 4x - 14 = (x^2 - 4x + 4) - 4 - 14$",
                "reason": "Completing the square: the square of half the coefficient of $x$, $(-2)^2 = 4$, is added and taken away, which leaves the value unchanged."
              },
              {
                "step": "$x^2 - 4x + 4 = (x - 2)^2$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -4$."
              },
              {
                "step": "$x^2 - 4x - 14 = (x - 2)^2 - 4 - 14$",
                "reason": "Line 2, with the bracket replaced by line 3."
              },
              {
                "step": "$x^2 - 4x - 14 = (x - 2)^2 - 18$",
                "reason": "Line 4, with the numbers collected: $-4 - 14 = -18$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $y^2 - 16y + 6$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(y-8)^2-58",
              "lines": [
                {
                  "step": "Write $y^2 - 16y + 6$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 - 16y + 6 = (y^2 - 16y + 64) - 64 + 6$",
                  "reason": "Completing the square: the square of half the coefficient of $y$, $(-8)^2 = 64$, is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$y^2 - 16y + 64 = (y - 8)^2$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -16$."
                },
                {
                  "step": "$y^2 - 16y + 6 = (y - 8)^2 - 64 + 6$",
                  "reason": "Line 2, with the bracket replaced by line 3."
                },
                {
                  "step": "$y^2 - 16y + 6 = (y - 8)^2 - 58$",
                  "reason": "Line 4, with the numbers collected: $-64 + 6 = -58$."
                }
              ]
            },
            {
              "prompt": "Write $z^2 + 20z + 13$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(z+10)^2-87",
              "lines": [
                {
                  "step": "Write $z^2 + 20z + 13$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 + 20z + 13 = (z^2 + 20z + 100) - 100 + 13$",
                  "reason": "Completing the square: the square of half the coefficient of $z$, $10^2 = 100$, is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$z^2 + 20z + 100 = (z + 10)^2$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 20$."
                },
                {
                  "step": "$z^2 + 20z + 13 = (z + 10)^2 - 100 + 13$",
                  "reason": "Line 2, with the bracket replaced by line 3."
                },
                {
                  "step": "$z^2 + 20z + 13 = (z + 10)^2 - 87$",
                  "reason": "Line 4, with the numbers collected: $-100 + 13 = -87$."
                }
              ]
            },
            {
              "prompt": "Write $x^2 - 22x + 40$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(x-11)^2-81",
              "lines": [
                {
                  "step": "Write $x^2 - 22x + 40$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 22x + 40 = (x^2 - 22x + 121) - 121 + 40$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $(-11)^2 = 121$, is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$x^2 - 22x + 121 = (x - 11)^2$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -22$."
                },
                {
                  "step": "$x^2 - 22x + 40 = (x - 11)^2 - 121 + 40$",
                  "reason": "Line 2, with the bracket replaced by line 3."
                },
                {
                  "step": "$x^2 - 22x + 40 = (x - 11)^2 - 81$",
                  "reason": "Line 4, with the numbers collected: $-121 + 40 = -81$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $y^2 - 7y - 13$ in completed-square form.",
            "lines": [
              {
                "step": "Write $y^2 - 7y - 13$ in completed-square form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Half the coefficient of $y$ is $-\\dfrac{7}{2}$.",
                "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
              },
              {
                "step": "$\\left(-\\dfrac{7}{2}\\right)^2 = \\dfrac{49}{4}$",
                "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
              },
              {
                "step": "$y^2 - 7y - 13 = y^2 - 7y + \\dfrac{49}{4} - \\dfrac{49}{4} - 13$",
                "reason": "Completing the square: $\\dfrac{49}{4}$ is added and taken away, which leaves the value unchanged."
              },
              {
                "step": "$y^2 - 7y + \\dfrac{49}{4} = \\left(y - \\dfrac{7}{2}\\right)^2$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -7$."
              },
              {
                "step": "$-\\dfrac{49}{4} - 13 = -\\dfrac{101}{4}$",
                "reason": "The general addition formula, from arithmetic: $13 = \\dfrac{52}{4}$ over the common denominator $4$."
              },
              {
                "step": "$y^2 - 7y - 13 = \\left(y - \\dfrac{7}{2}\\right)^2 - \\dfrac{101}{4}$",
                "reason": "Line 4, with the expressions equal to its pieces in lines 5 and 6 put in."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $z^2 - 13z + 4$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(z-13/2)^2-153/4",
              "lines": [
                {
                  "step": "Write $z^2 - 13z + 4$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half the coefficient of $z$ is $-\\dfrac{13}{2}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\left(-\\dfrac{13}{2}\\right)^2 = \\dfrac{169}{4}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$z^2 - 13z + 4 = z^2 - 13z + \\dfrac{169}{4} - \\dfrac{169}{4} + 4$",
                  "reason": "Completing the square: $\\dfrac{169}{4}$ is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$z^2 - 13z + \\dfrac{169}{4} = \\left(z - \\dfrac{13}{2}\\right)^2$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -13$."
                },
                {
                  "step": "$-\\dfrac{169}{4} + 4 = -\\dfrac{153}{4}$",
                  "reason": "The general addition formula, from arithmetic: $4 = \\dfrac{16}{4}$ over the common denominator $4$."
                },
                {
                  "step": "$z^2 - 13z + 4 = \\left(z - \\dfrac{13}{2}\\right)^2 - \\dfrac{153}{4}$",
                  "reason": "Line 4, with the expressions equal to its pieces in lines 5 and 6 put in."
                }
              ]
            },
            {
              "prompt": "Write $x^2 + \\dfrac{2}{3}x - 2$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(x+1/3)^2-19/9",
              "lines": [
                {
                  "step": "Write $x^2 + \\dfrac{2}{3}x - 2$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half the coefficient of $x$ is $\\dfrac{1}{3}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$x^2 + \\dfrac{2}{3}x - 2 = x^2 + \\dfrac{2}{3}x + \\dfrac{1}{9} - \\dfrac{1}{9} - 2$",
                  "reason": "Completing the square: $\\dfrac{1}{9}$ is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$x^2 + \\dfrac{2}{3}x + \\dfrac{1}{9} = \\left(x + \\dfrac{1}{3}\\right)^2$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = \\dfrac{2}{3}$."
                },
                {
                  "step": "$-\\dfrac{1}{9} - 2 = -\\dfrac{19}{9}$",
                  "reason": "The general addition formula, from arithmetic: $2 = \\dfrac{18}{9}$ over the common denominator $9$."
                },
                {
                  "step": "$x^2 + \\dfrac{2}{3}x - 2 = \\left(x + \\dfrac{1}{3}\\right)^2 - \\dfrac{19}{9}$",
                  "reason": "Line 4, with the expressions equal to its pieces in lines 5 and 6 put in."
                }
              ]
            },
            {
              "prompt": "Write $y^2 + 19y + 5$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "(y+19/2)^2-341/4",
              "lines": [
                {
                  "step": "Write $y^2 + 19y + 5$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half the coefficient of $y$ is $\\dfrac{19}{2}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\left(\\dfrac{19}{2}\\right)^2 = \\dfrac{361}{4}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$y^2 + 19y + 5 = y^2 + 19y + \\dfrac{361}{4} - \\dfrac{361}{4} + 5$",
                  "reason": "Completing the square: $\\dfrac{361}{4}$ is added and taken away, which leaves the value unchanged."
                },
                {
                  "step": "$y^2 + 19y + \\dfrac{361}{4} = \\left(y + \\dfrac{19}{2}\\right)^2$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 19$."
                },
                {
                  "step": "$-\\dfrac{361}{4} + 5 = -\\dfrac{341}{4}$",
                  "reason": "The general addition formula, from arithmetic: $5 = \\dfrac{20}{4}$ over the common denominator $4$."
                },
                {
                  "step": "$y^2 + 19y + 5 = \\left(y + \\dfrac{19}{2}\\right)^2 - \\dfrac{341}{4}$",
                  "reason": "Line 4, with the expressions equal to its pieces in lines 5 and 6 put in."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $2z^2 - 8z - 9$ in completed-square form.",
            "lines": [
              {
                "step": "Write $2z^2 - 8z - 9$ in completed-square form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2z^2 - 8z - 9 = 2(z^2 - 4z) - 9$",
                "reason": "Taking out a common factor: $2$ is taken out of the first two terms, and the distributive law read backwards writes them as $2$ times a bracket."
              },
              {
                "step": "$2(z^2 - 4z) = 2(z^2 - 4z + 4 - 4)$",
                "reason": "Completing the square: inside the bracket the square of half the coefficient of $z$, $4$, is added and taken away."
              },
              {
                "step": "$2(z^2 - 4z + 4 - 4) = 2\\left((z - 2)^2 - 4\\right)$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -4$."
              },
              {
                "step": "$2\\left((z - 2)^2 - 4\\right) = 2(z - 2)^2 - 8$",
                "reason": "The distributive law: $2$ multiplies each term of the bracket, and $2 \\cdot \\left(-4\\right) = -8$."
              },
              {
                "step": "$2z^2 - 8z - 9 = 2(z - 2)^2 - 8 - 9$",
                "reason": "Lines 2 to 5: each expression is replaced by the one equal to it."
              },
              {
                "step": "$2z^2 - 8z - 9 = 2(z - 2)^2 - 17$",
                "reason": "Line 6, with the numbers collected: $-8 - 9 = -17$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $3x^2 + 18x + 5$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "3*(x+3)^2-22",
              "lines": [
                {
                  "step": "Write $3x^2 + 18x + 5$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3x^2 + 18x + 5 = 3(x^2 + 6x) + 5$",
                  "reason": "Taking out a common factor: $3$ is taken out of the first two terms, and the distributive law read backwards writes them as $3$ times a bracket."
                },
                {
                  "step": "$3(x^2 + 6x) = 3(x^2 + 6x + 9 - 9)$",
                  "reason": "Completing the square: inside the bracket the square of half the coefficient of $x$, $9$, is added and taken away."
                },
                {
                  "step": "$3(x^2 + 6x + 9 - 9) = 3\\left((x + 3)^2 - 9\\right)$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 6$."
                },
                {
                  "step": "$3\\left((x + 3)^2 - 9\\right) = 3(x + 3)^2 - 27$",
                  "reason": "The distributive law: $3$ multiplies each term of the bracket, and $3 \\cdot \\left(-9\\right) = -27$."
                },
                {
                  "step": "$3x^2 + 18x + 5 = 3(x + 3)^2 - 27 + 5$",
                  "reason": "Lines 2 to 5: each expression is replaced by the one equal to it."
                },
                {
                  "step": "$3x^2 + 18x + 5 = 3(x + 3)^2 - 22$",
                  "reason": "Line 6, with the numbers collected: $-27 + 5 = -22$."
                }
              ]
            },
            {
              "prompt": "Write $-2y^2 - 16y - 7$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "-2*(y+4)^2+25",
              "lines": [
                {
                  "step": "Write $-2y^2 - 16y - 7$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-2y^2 - 16y - 7 = -2(y^2 + 8y) - 7$",
                  "reason": "Taking out a common factor: $-2$ is taken out of the first two terms, and the distributive law read backwards writes them as $-2$ times a bracket."
                },
                {
                  "step": "$-2(y^2 + 8y) = -2(y^2 + 8y + 16 - 16)$",
                  "reason": "Completing the square: inside the bracket the square of half the coefficient of $y$, $16$, is added and taken away."
                },
                {
                  "step": "$-2(y^2 + 8y + 16 - 16) = -2\\left((y + 4)^2 - 16\\right)$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 8$."
                },
                {
                  "step": "$-2\\left((y + 4)^2 - 16\\right) = -2(y + 4)^2 + 32$",
                  "reason": "The distributive law: $-2$ multiplies each term of the bracket, and $(-2) \\cdot \\left(-16\\right) = 32$."
                },
                {
                  "step": "$-2y^2 - 16y - 7 = -2(y + 4)^2 + 32 - 7$",
                  "reason": "Lines 2 to 5: each expression is replaced by the one equal to it."
                },
                {
                  "step": "$-2y^2 - 16y - 7 = -2(y + 4)^2 + 25$",
                  "reason": "Line 6, with the numbers collected: $32 - 7 = 25$."
                }
              ]
            },
            {
              "prompt": "Write $2z^2 + 6z + 1$ in completed-square form.",
              "form": "Answer in completed-square form, as in 2*(x-3)^2+5.",
              "answer": "2*(z+3/2)^2-7/2",
              "lines": [
                {
                  "step": "Write $2z^2 + 6z + 1$ in completed-square form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2z^2 + 6z + 1 = 2(z^2 + 3z) + 1$",
                  "reason": "Taking out a common factor: $2$ is taken out of the first two terms, and the distributive law read backwards writes them as $2$ times a bracket."
                },
                {
                  "step": "$2(z^2 + 3z) = 2(z^2 + 3z + \\dfrac{9}{4} - \\dfrac{9}{4})$",
                  "reason": "Completing the square: inside the bracket the square of half the coefficient of $z$, $\\dfrac{9}{4}$, is added and taken away."
                },
                {
                  "step": "$2(z^2 + 3z + \\dfrac{9}{4} - \\dfrac{9}{4}) = 2\\left(\\left(z + \\dfrac{3}{2}\\right)^2 - \\dfrac{9}{4}\\right)$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 3$."
                },
                {
                  "step": "$2\\left(\\left(z + \\dfrac{3}{2}\\right)^2 - \\dfrac{9}{4}\\right) = 2\\left(z + \\dfrac{3}{2}\\right)^2 - \\dfrac{9}{2}$",
                  "reason": "The distributive law: $2$ multiplies each term of the bracket, and $2 \\cdot \\left(-\\dfrac{9}{4}\\right) = -\\dfrac{9}{2}$."
                },
                {
                  "step": "$2z^2 + 6z + 1 = 2\\left(z + \\dfrac{3}{2}\\right)^2 - \\dfrac{9}{2} + 1$",
                  "reason": "Lines 2 to 5: each expression is replaced by the one equal to it."
                },
                {
                  "step": "$2z^2 + 6z + 1 = 2\\left(z + \\dfrac{3}{2}\\right)^2 - \\dfrac{7}{2}$",
                  "reason": "Line 6, with the numbers collected: $-\\dfrac{9}{2} + 1 = -\\dfrac{7}{2}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t145-k2",
      "forms": [
        {
          "example": {
            "problem": "Solve $x^2 - 6x - 15 = 0$.",
            "lines": [
              {
                "step": "Solve $x^2 - 6x - 15 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 - 6x = 15$",
                "reason": "Adding the same number to both sides: $15$ is added to each side."
              },
              {
                "step": "$x^2 - 6x + 9 = 24$",
                "reason": "Completing the square: the square of half the coefficient of $x$, $(-3)^2 = 9$, is added to both sides."
              },
              {
                "step": "$(x - 3)^2 = 24$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -6$."
              },
              {
                "step": "So $x - 3 = \\sqrt{24}$ or $x - 3 = -\\sqrt{24}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "So $x - 3 = 2\\sqrt{6}$ or $x - 3 = -2\\sqrt{6}$.",
                "reason": "Root of a product: $\\sqrt{24} = \\sqrt{4}\\sqrt{6} = 2\\sqrt{6}$."
              },
              {
                "step": "So $x = 3 + 2\\sqrt{6}$ or $x = 3 - 2\\sqrt{6}$.",
                "reason": "Adding the same number to both sides: $3$ is added to each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $y^2 + 16y + 8 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = -8+2*sqrt(14), y = -8-2*sqrt(14)",
              "lines": [
                {
                  "step": "Solve $y^2 + 16y + 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 + 16y = -8$",
                  "reason": "Adding the same number to both sides: $8$ is taken from each side."
                },
                {
                  "step": "$y^2 + 16y + 64 = 56$",
                  "reason": "Completing the square: the square of half the coefficient of $y$, $8^2 = 64$, is added to both sides."
                },
                {
                  "step": "$(y + 8)^2 = 56$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 16$."
                },
                {
                  "step": "So $y + 8 = \\sqrt{56}$ or $y + 8 = -\\sqrt{56}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $y + 8 = 2\\sqrt{14}$ or $y + 8 = -2\\sqrt{14}$.",
                  "reason": "Root of a product: $\\sqrt{56} = \\sqrt{4}\\sqrt{14} = 2\\sqrt{14}$."
                },
                {
                  "step": "So $y = -8 + 2\\sqrt{14}$ or $y = -8 - 2\\sqrt{14}$.",
                  "reason": "Adding the same number to both sides: $8$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Solve $z^2 + 6z - 11 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = -3+2*sqrt(5), z = -3-2*sqrt(5)",
              "lines": [
                {
                  "step": "Solve $z^2 + 6z - 11 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 + 6z = 11$",
                  "reason": "Adding the same number to both sides: $11$ is added to each side."
                },
                {
                  "step": "$z^2 + 6z + 9 = 20$",
                  "reason": "Completing the square: the square of half the coefficient of $z$, $3^2 = 9$, is added to both sides."
                },
                {
                  "step": "$(z + 3)^2 = 20$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 6$."
                },
                {
                  "step": "So $z + 3 = \\sqrt{20}$ or $z + 3 = -\\sqrt{20}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $z + 3 = 2\\sqrt{5}$ or $z + 3 = -2\\sqrt{5}$.",
                  "reason": "Root of a product: $\\sqrt{20} = \\sqrt{4}\\sqrt{5} = 2\\sqrt{5}$."
                },
                {
                  "step": "So $z = -3 + 2\\sqrt{5}$ or $z = -3 - 2\\sqrt{5}$.",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Solve $x^2 + 12x - 8 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -6+2*sqrt(11), x = -6-2*sqrt(11)",
              "lines": [
                {
                  "step": "Solve $x^2 + 12x - 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 12x = 8$",
                  "reason": "Adding the same number to both sides: $8$ is added to each side."
                },
                {
                  "step": "$x^2 + 12x + 36 = 44$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $6^2 = 36$, is added to both sides."
                },
                {
                  "step": "$(x + 6)^2 = 44$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 12$."
                },
                {
                  "step": "So $x + 6 = \\sqrt{44}$ or $x + 6 = -\\sqrt{44}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $x + 6 = 2\\sqrt{11}$ or $x + 6 = -2\\sqrt{11}$.",
                  "reason": "Root of a product: $\\sqrt{44} = \\sqrt{4}\\sqrt{11} = 2\\sqrt{11}$."
                },
                {
                  "step": "So $x = -6 + 2\\sqrt{11}$ or $x = -6 - 2\\sqrt{11}$.",
                  "reason": "Adding the same number to both sides: $6$ is taken from each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2y^2 + 16y + 3 = 0$.",
            "lines": [
              {
                "step": "Solve $2y^2 + 16y + 3 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y^2 + 8y + \\dfrac{3}{2} = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, the coefficient of $y^2$."
              },
              {
                "step": "$y^2 + 8y = -\\dfrac{3}{2}$",
                "reason": "Adding the same number to both sides: $\\dfrac{3}{2}$ is taken from each side."
              },
              {
                "step": "$y^2 + 8y + 16 = -\\dfrac{3}{2} + 16$",
                "reason": "Completing the square: $4^2 = 16$ is added to both sides."
              },
              {
                "step": "$y^2 + 8y + 16 = \\dfrac{29}{2}$",
                "reason": "The general addition formula, from arithmetic: $-\\dfrac{3}{2} + 16 = \\dfrac{29}{2}$."
              },
              {
                "step": "$(y + 4)^2 = \\dfrac{29}{2}$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 8$."
              },
              {
                "step": "So $y + 4 = \\sqrt{\\dfrac{29}{2}}$ or $y + 4 = -\\sqrt{\\dfrac{29}{2}}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "So $y + 4 = \\dfrac{\\sqrt{29}}{\\sqrt{2}}$ or $y + 4 = -\\dfrac{\\sqrt{29}}{\\sqrt{2}}$.",
                "reason": "Root of a quotient: $\\sqrt{\\dfrac{29}{2}} = \\dfrac{\\sqrt{29}}{\\sqrt{2}}$."
              },
              {
                "step": "So $y + 4 = \\dfrac{\\sqrt{58}}{2}$ or $y + 4 = -\\dfrac{\\sqrt{58}}{2}$.",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{2}$."
              },
              {
                "step": "So $y = -4 + \\dfrac{\\sqrt{58}}{2}$ or $y = -4 - \\dfrac{\\sqrt{58}}{2}$.",
                "reason": "Adding the same number to both sides: $4$ is taken from each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $5z^2 - 10z - 8 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 1+sqrt(65)/5, z = 1-sqrt(65)/5",
              "lines": [
                {
                  "step": "Solve $5z^2 - 10z - 8 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 - 2z - \\dfrac{8}{5} = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$, the coefficient of $z^2$."
                },
                {
                  "step": "$z^2 - 2z = \\dfrac{8}{5}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{8}{5}$ is added to each side."
                },
                {
                  "step": "$z^2 - 2z + 1 = \\dfrac{8}{5} + 1$",
                  "reason": "Completing the square: $(-1)^2 = 1$ is added to both sides."
                },
                {
                  "step": "$z^2 - 2z + 1 = \\dfrac{13}{5}$",
                  "reason": "The general addition formula, from arithmetic: $\\dfrac{8}{5} + 1 = \\dfrac{13}{5}$."
                },
                {
                  "step": "$(z - 1)^2 = \\dfrac{13}{5}$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -2$."
                },
                {
                  "step": "So $z - 1 = \\sqrt{\\dfrac{13}{5}}$ or $z - 1 = -\\sqrt{\\dfrac{13}{5}}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $z - 1 = \\dfrac{\\sqrt{13}}{\\sqrt{5}}$ or $z - 1 = -\\dfrac{\\sqrt{13}}{\\sqrt{5}}$.",
                  "reason": "Root of a quotient: $\\sqrt{\\dfrac{13}{5}} = \\dfrac{\\sqrt{13}}{\\sqrt{5}}$."
                },
                {
                  "step": "So $z - 1 = \\dfrac{\\sqrt{65}}{5}$ or $z - 1 = -\\dfrac{\\sqrt{65}}{5}$.",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{5}$."
                },
                {
                  "step": "So $z = 1 + \\dfrac{\\sqrt{65}}{5}$ or $z = 1 - \\dfrac{\\sqrt{65}}{5}$.",
                  "reason": "Adding the same number to both sides: $1$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Solve $3x^2 - 24x + 7 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 4+sqrt(123)/3, x = 4-sqrt(123)/3",
              "lines": [
                {
                  "step": "Solve $3x^2 - 24x + 7 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - 8x + \\dfrac{7}{3} = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, the coefficient of $x^2$."
                },
                {
                  "step": "$x^2 - 8x = -\\dfrac{7}{3}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{7}{3}$ is taken from each side."
                },
                {
                  "step": "$x^2 - 8x + 16 = -\\dfrac{7}{3} + 16$",
                  "reason": "Completing the square: $(-4)^2 = 16$ is added to both sides."
                },
                {
                  "step": "$x^2 - 8x + 16 = \\dfrac{41}{3}$",
                  "reason": "The general addition formula, from arithmetic: $-\\dfrac{7}{3} + 16 = \\dfrac{41}{3}$."
                },
                {
                  "step": "$(x - 4)^2 = \\dfrac{41}{3}$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -8$."
                },
                {
                  "step": "So $x - 4 = \\sqrt{\\dfrac{41}{3}}$ or $x - 4 = -\\sqrt{\\dfrac{41}{3}}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $x - 4 = \\dfrac{\\sqrt{41}}{\\sqrt{3}}$ or $x - 4 = -\\dfrac{\\sqrt{41}}{\\sqrt{3}}$.",
                  "reason": "Root of a quotient: $\\sqrt{\\dfrac{41}{3}} = \\dfrac{\\sqrt{41}}{\\sqrt{3}}$."
                },
                {
                  "step": "So $x - 4 = \\dfrac{\\sqrt{123}}{3}$ or $x - 4 = -\\dfrac{\\sqrt{123}}{3}$.",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{3}$."
                },
                {
                  "step": "So $x = 4 + \\dfrac{\\sqrt{123}}{3}$ or $x = 4 - \\dfrac{\\sqrt{123}}{3}$.",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Solve $3y^2 + 18y + 4 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = -3+sqrt(69)/3, y = -3-sqrt(69)/3",
              "lines": [
                {
                  "step": "Solve $3y^2 + 18y + 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 + 6y + \\dfrac{4}{3} = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, the coefficient of $y^2$."
                },
                {
                  "step": "$y^2 + 6y = -\\dfrac{4}{3}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{4}{3}$ is taken from each side."
                },
                {
                  "step": "$y^2 + 6y + 9 = -\\dfrac{4}{3} + 9$",
                  "reason": "Completing the square: $3^2 = 9$ is added to both sides."
                },
                {
                  "step": "$y^2 + 6y + 9 = \\dfrac{23}{3}$",
                  "reason": "The general addition formula, from arithmetic: $-\\dfrac{4}{3} + 9 = \\dfrac{23}{3}$."
                },
                {
                  "step": "$(y + 3)^2 = \\dfrac{23}{3}$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 6$."
                },
                {
                  "step": "So $y + 3 = \\sqrt{\\dfrac{23}{3}}$ or $y + 3 = -\\sqrt{\\dfrac{23}{3}}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $y + 3 = \\dfrac{\\sqrt{23}}{\\sqrt{3}}$ or $y + 3 = -\\dfrac{\\sqrt{23}}{\\sqrt{3}}$.",
                  "reason": "Root of a quotient: $\\sqrt{\\dfrac{23}{3}} = \\dfrac{\\sqrt{23}}{\\sqrt{3}}$."
                },
                {
                  "step": "So $y + 3 = \\dfrac{\\sqrt{69}}{3}$ or $y + 3 = -\\dfrac{\\sqrt{69}}{3}$.",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{3}$."
                },
                {
                  "step": "So $y = -3 + \\dfrac{\\sqrt{69}}{3}$ or $y = -3 - \\dfrac{\\sqrt{69}}{3}$.",
                  "reason": "Adding the same number to both sides: $3$ is taken from each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $z^2 + 4z + 13 = 0$.",
            "lines": [
              {
                "step": "Solve $z^2 + 4z + 13 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$z^2 + 4z = -13$",
                "reason": "Adding the same number to both sides: $13$ is taken from each side."
              },
              {
                "step": "$z^2 + 4z + 4 = -9$",
                "reason": "Completing the square: the square of half the coefficient of $z$, $2^2 = 4$, is added to both sides."
              },
              {
                "step": "$(z + 2)^2 = -9$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 4$."
              },
              {
                "step": "So $z + 2 = 3i$ or $z + 2 = -3i$.",
                "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$, here with $n = 9$."
              },
              {
                "step": "So $z = -2 + 3i$ or $z = -2 - 3i$.",
                "reason": "Adding the same number to both sides: $2$ is taken from each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $x^2 + 2x + 10 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = -1+3*i, x = -1-3*i",
              "lines": [
                {
                  "step": "Solve $x^2 + 2x + 10 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 2x = -10$",
                  "reason": "Adding the same number to both sides: $10$ is taken from each side."
                },
                {
                  "step": "$x^2 + 2x + 1 = -9$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $1^2 = 1$, is added to both sides."
                },
                {
                  "step": "$(x + 1)^2 = -9$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 2$."
                },
                {
                  "step": "So $x + 1 = 3i$ or $x + 1 = -3i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$, here with $n = 9$."
                },
                {
                  "step": "So $x = -1 + 3i$ or $x = -1 - 3i$.",
                  "reason": "Adding the same number to both sides: $1$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Solve $y^2 - 10y + 34 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 5+3*i, y = 5-3*i",
              "lines": [
                {
                  "step": "Solve $y^2 - 10y + 34 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 - 10y = -34$",
                  "reason": "Adding the same number to both sides: $34$ is taken from each side."
                },
                {
                  "step": "$y^2 - 10y + 25 = -9$",
                  "reason": "Completing the square: the square of half the coefficient of $y$, $(-5)^2 = 25$, is added to both sides."
                },
                {
                  "step": "$(y - 5)^2 = -9$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -10$."
                },
                {
                  "step": "So $y - 5 = 3i$ or $y - 5 = -3i$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$, here with $n = 9$."
                },
                {
                  "step": "So $y = 5 + 3i$ or $y = 5 - 3i$.",
                  "reason": "Adding the same number to both sides: $5$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Solve $z^2 - 18z + 86 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = 9+sqrt(5)*i, z = 9-sqrt(5)*i",
              "lines": [
                {
                  "step": "Solve $z^2 - 18z + 86 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 - 18z = -86$",
                  "reason": "Adding the same number to both sides: $86$ is taken from each side."
                },
                {
                  "step": "$z^2 - 18z + 81 = -5$",
                  "reason": "Completing the square: the square of half the coefficient of $z$, $(-9)^2 = 81$, is added to both sides."
                },
                {
                  "step": "$(z - 9)^2 = -5$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -18$."
                },
                {
                  "step": "So $z - 9 = i\\sqrt{5}$ or $z - 9 = -i\\sqrt{5}$.",
                  "reason": "Square root of a negative number: $x^2 = -n$ has the two solutions $x = i\\sqrt{n}$ and $x = -i\\sqrt{n}$, here with $n = 5$."
                },
                {
                  "step": "So $z = 9 + i\\sqrt{5}$ or $z = 9 - i\\sqrt{5}$.",
                  "reason": "Adding the same number to both sides: $9$ is added to each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $3x^2 - 8x - 19 = -2x^2 + 2x + 6$.",
            "lines": [
              {
                "step": "Solve $3x^2 - 8x - 19 = -2x^2 + 2x + 6$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5x^2 - 10x - 25 = 0$",
                "reason": "Adding the same number to both sides: $-2x^2 + 2x + 6$ is taken from each side, and like terms are collected."
              },
              {
                "step": "$x^2 - 2x - 5 = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$, a factor of every coefficient."
              },
              {
                "step": "$x^2 - 2x = 5$",
                "reason": "Adding the same number to both sides: $5$ is added to each side."
              },
              {
                "step": "$x^2 - 2x + 1 = 6$",
                "reason": "Completing the square: the square of half the coefficient of $x$, $(-1)^2 = 1$, is added to both sides."
              },
              {
                "step": "$(x - 1)^2 = 6$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -2$."
              },
              {
                "step": "So $x - 1 = \\sqrt{6}$ or $x - 1 = -\\sqrt{6}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and $\\sqrt{6}$ is already in simplest radical form."
              },
              {
                "step": "So $x = 1 + \\sqrt{6}$ or $x = 1 - \\sqrt{6}$.",
                "reason": "Adding the same number to both sides: $1$ is added to each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $4y^2 - 9y - 10 = 2y^2 + 7y + 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 4+sqrt(22), y = 4-sqrt(22)",
              "lines": [
                {
                  "step": "Solve $4y^2 - 9y - 10 = 2y^2 + 7y + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2y^2 - 16y - 12 = 0$",
                  "reason": "Adding the same number to both sides: $2y^2 + 7y + 2$ is taken from each side, and like terms are collected."
                },
                {
                  "step": "$y^2 - 8y - 6 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, a factor of every coefficient."
                },
                {
                  "step": "$y^2 - 8y = 6$",
                  "reason": "Adding the same number to both sides: $6$ is added to each side."
                },
                {
                  "step": "$y^2 - 8y + 16 = 22$",
                  "reason": "Completing the square: the square of half the coefficient of $y$, $(-4)^2 = 16$, is added to both sides."
                },
                {
                  "step": "$(y - 4)^2 = 22$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -8$."
                },
                {
                  "step": "So $y - 4 = \\sqrt{22}$ or $y - 4 = -\\sqrt{22}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and $\\sqrt{22}$ is already in simplest radical form."
                },
                {
                  "step": "So $y = 4 + \\sqrt{22}$ or $y = 4 - \\sqrt{22}$.",
                  "reason": "Adding the same number to both sides: $4$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Solve $4z^2 + 11z - 34 = 2z^2 - 5z + 2$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = -4+sqrt(34), z = -4-sqrt(34)",
              "lines": [
                {
                  "step": "Solve $4z^2 + 11z - 34 = 2z^2 - 5z + 2$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2z^2 + 16z - 36 = 0$",
                  "reason": "Adding the same number to both sides: $2z^2 - 5z + 2$ is taken from each side, and like terms are collected."
                },
                {
                  "step": "$z^2 + 8z - 18 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, a factor of every coefficient."
                },
                {
                  "step": "$z^2 + 8z = 18$",
                  "reason": "Adding the same number to both sides: $18$ is added to each side."
                },
                {
                  "step": "$z^2 + 8z + 16 = 34$",
                  "reason": "Completing the square: the square of half the coefficient of $z$, $4^2 = 16$, is added to both sides."
                },
                {
                  "step": "$(z + 4)^2 = 34$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 8$."
                },
                {
                  "step": "So $z + 4 = \\sqrt{34}$ or $z + 4 = -\\sqrt{34}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and $\\sqrt{34}$ is already in simplest radical form."
                },
                {
                  "step": "So $z = -4 + \\sqrt{34}$ or $z = -4 - \\sqrt{34}$.",
                  "reason": "Adding the same number to both sides: $4$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Solve $6x^2 - 11x - 5 = 4x^2 - 3x + 7$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 2+sqrt(10), x = 2-sqrt(10)",
              "lines": [
                {
                  "step": "Solve $6x^2 - 11x - 5 = 4x^2 - 3x + 7$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2x^2 - 8x - 12 = 0$",
                  "reason": "Adding the same number to both sides: $4x^2 - 3x + 7$ is taken from each side, and like terms are collected."
                },
                {
                  "step": "$x^2 - 4x - 6 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, a factor of every coefficient."
                },
                {
                  "step": "$x^2 - 4x = 6$",
                  "reason": "Adding the same number to both sides: $6$ is added to each side."
                },
                {
                  "step": "$x^2 - 4x + 4 = 10$",
                  "reason": "Completing the square: the square of half the coefficient of $x$, $(-2)^2 = 4$, is added to both sides."
                },
                {
                  "step": "$(x - 2)^2 = 10$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -4$."
                },
                {
                  "step": "So $x - 2 = \\sqrt{10}$ or $x - 2 = -\\sqrt{10}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$, and $\\sqrt{10}$ is already in simplest radical form."
                },
                {
                  "step": "So $x = 2 + \\sqrt{10}$ or $x = 2 - \\sqrt{10}$.",
                  "reason": "Adding the same number to both sides: $2$ is added to each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Solve $2x^2 + 7x - 5 = 0$.",
            "lines": [
              {
                "step": "Solve $2x^2 + 7x - 5 = 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + \\dfrac{7}{2}x - \\dfrac{5}{2} = 0$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, the coefficient of $x^2$."
              },
              {
                "step": "$x^2 + \\dfrac{7}{2}x = \\dfrac{5}{2}$",
                "reason": "Adding the same number to both sides: $\\dfrac{5}{2}$ is added to each side."
              },
              {
                "step": "Half the coefficient of $x$ is $\\dfrac{7}{4}$.",
                "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
              },
              {
                "step": "$\\left(\\dfrac{7}{4}\\right)^2 = \\dfrac{49}{16}$",
                "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
              },
              {
                "step": "$x^2 + \\dfrac{7}{2}x + \\dfrac{49}{16} = \\dfrac{5}{2} + \\dfrac{49}{16}$",
                "reason": "Completing the square: $\\dfrac{49}{16}$ is added to both sides."
              },
              {
                "step": "$x^2 + \\dfrac{7}{2}x + \\dfrac{49}{16} = \\dfrac{89}{16}$",
                "reason": "The general addition formula, from arithmetic: $\\dfrac{5}{2} + \\dfrac{49}{16} = \\dfrac{89}{16}$."
              },
              {
                "step": "$\\left(x + \\dfrac{7}{4}\\right)^2 = \\dfrac{89}{16}$",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = \\dfrac{7}{2}$."
              },
              {
                "step": "So $x + \\dfrac{7}{4} = \\sqrt{\\dfrac{89}{16}}$ or $x + \\dfrac{7}{4} = -\\sqrt{\\dfrac{89}{16}}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "So $x + \\dfrac{7}{4} = \\dfrac{\\sqrt{89}}{4}$ or $x + \\dfrac{7}{4} = -\\dfrac{\\sqrt{89}}{4}$.",
                "reason": "Root of a quotient: $\\sqrt{\\dfrac{89}{16}} = \\dfrac{\\sqrt{89}}{\\sqrt{16}}$, and $\\sqrt{16} = 4$."
              },
              {
                "step": "So $x = -\\dfrac{7}{4} + \\dfrac{\\sqrt{89}}{4}$ or $x = -\\dfrac{7}{4} - \\dfrac{\\sqrt{89}}{4}$.",
                "reason": "Adding the same number to both sides: $\\dfrac{7}{4}$ is taken from each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Solve $3y^2 - 5y - 3 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "y = 5/6+sqrt(61)/6, y = 5/6-sqrt(61)/6",
              "lines": [
                {
                  "step": "Solve $3y^2 - 5y - 3 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 - \\dfrac{5}{3}y - 1 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$, the coefficient of $y^2$."
                },
                {
                  "step": "$y^2 - \\dfrac{5}{3}y = 1$",
                  "reason": "Adding the same number to both sides: $1$ is added to each side."
                },
                {
                  "step": "Half the coefficient of $y$ is $-\\dfrac{5}{6}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\left(-\\dfrac{5}{6}\\right)^2 = \\dfrac{25}{36}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$y^2 - \\dfrac{5}{3}y + \\dfrac{25}{36} = 1 + \\dfrac{25}{36}$",
                  "reason": "Completing the square: $\\dfrac{25}{36}$ is added to both sides."
                },
                {
                  "step": "$y^2 - \\dfrac{5}{3}y + \\dfrac{25}{36} = \\dfrac{61}{36}$",
                  "reason": "The general addition formula, from arithmetic: $1 + \\dfrac{25}{36} = \\dfrac{61}{36}$."
                },
                {
                  "step": "$\\left(y - \\dfrac{5}{6}\\right)^2 = \\dfrac{61}{36}$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -\\dfrac{5}{3}$."
                },
                {
                  "step": "So $y - \\dfrac{5}{6} = \\sqrt{\\dfrac{61}{36}}$ or $y - \\dfrac{5}{6} = -\\sqrt{\\dfrac{61}{36}}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $y - \\dfrac{5}{6} = \\dfrac{\\sqrt{61}}{6}$ or $y - \\dfrac{5}{6} = -\\dfrac{\\sqrt{61}}{6}$.",
                  "reason": "Root of a quotient: $\\sqrt{\\dfrac{61}{36}} = \\dfrac{\\sqrt{61}}{\\sqrt{36}}$, and $\\sqrt{36} = 6$."
                },
                {
                  "step": "So $y = \\dfrac{5}{6} + \\dfrac{\\sqrt{61}}{6}$ or $y = \\dfrac{5}{6} - \\dfrac{\\sqrt{61}}{6}$.",
                  "reason": "Adding the same number to both sides: $\\dfrac{5}{6}$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Solve $4z^2 + 9z - 3 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "z = -9/8+sqrt(129)/8, z = -9/8-sqrt(129)/8",
              "lines": [
                {
                  "step": "Solve $4z^2 + 9z - 3 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$z^2 + \\dfrac{9}{4}z - \\dfrac{3}{4} = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$, the coefficient of $z^2$."
                },
                {
                  "step": "$z^2 + \\dfrac{9}{4}z = \\dfrac{3}{4}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{3}{4}$ is added to each side."
                },
                {
                  "step": "Half the coefficient of $z$ is $\\dfrac{9}{8}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\left(\\dfrac{9}{8}\\right)^2 = \\dfrac{81}{64}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$z^2 + \\dfrac{9}{4}z + \\dfrac{81}{64} = \\dfrac{3}{4} + \\dfrac{81}{64}$",
                  "reason": "Completing the square: $\\dfrac{81}{64}$ is added to both sides."
                },
                {
                  "step": "$z^2 + \\dfrac{9}{4}z + \\dfrac{81}{64} = \\dfrac{129}{64}$",
                  "reason": "The general addition formula, from arithmetic: $\\dfrac{3}{4} + \\dfrac{81}{64} = \\dfrac{129}{64}$."
                },
                {
                  "step": "$\\left(z + \\dfrac{9}{8}\\right)^2 = \\dfrac{129}{64}$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = \\dfrac{9}{4}$."
                },
                {
                  "step": "So $z + \\dfrac{9}{8} = \\sqrt{\\dfrac{129}{64}}$ or $z + \\dfrac{9}{8} = -\\sqrt{\\dfrac{129}{64}}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $z + \\dfrac{9}{8} = \\dfrac{\\sqrt{129}}{8}$ or $z + \\dfrac{9}{8} = -\\dfrac{\\sqrt{129}}{8}$.",
                  "reason": "Root of a quotient: $\\sqrt{\\dfrac{129}{64}} = \\dfrac{\\sqrt{129}}{\\sqrt{64}}$, and $\\sqrt{64} = 8$."
                },
                {
                  "step": "So $z = -\\dfrac{9}{8} + \\dfrac{\\sqrt{129}}{8}$ or $z = -\\dfrac{9}{8} - \\dfrac{\\sqrt{129}}{8}$.",
                  "reason": "Adding the same number to both sides: $\\dfrac{9}{8}$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Solve $2x^2 - 3x - 4 = 0$.",
              "form": "Answer as the solutions, as in x = -1, x = 3.",
              "answer": "x = 3/4+sqrt(41)/4, x = 3/4-sqrt(41)/4",
              "lines": [
                {
                  "step": "Solve $2x^2 - 3x - 4 = 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 - \\dfrac{3}{2}x - 2 = 0$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$, the coefficient of $x^2$."
                },
                {
                  "step": "$x^2 - \\dfrac{3}{2}x = 2$",
                  "reason": "Adding the same number to both sides: $2$ is added to each side."
                },
                {
                  "step": "Half the coefficient of $x$ is $-\\dfrac{3}{4}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\left(-\\dfrac{3}{4}\\right)^2 = \\dfrac{9}{16}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$x^2 - \\dfrac{3}{2}x + \\dfrac{9}{16} = 2 + \\dfrac{9}{16}$",
                  "reason": "Completing the square: $\\dfrac{9}{16}$ is added to both sides."
                },
                {
                  "step": "$x^2 - \\dfrac{3}{2}x + \\dfrac{9}{16} = \\dfrac{41}{16}$",
                  "reason": "The general addition formula, from arithmetic: $2 + \\dfrac{9}{16} = \\dfrac{41}{16}$."
                },
                {
                  "step": "$\\left(x - \\dfrac{3}{4}\\right)^2 = \\dfrac{41}{16}$",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -\\dfrac{3}{2}$."
                },
                {
                  "step": "So $x - \\dfrac{3}{4} = \\sqrt{\\dfrac{41}{16}}$ or $x - \\dfrac{3}{4} = -\\sqrt{\\dfrac{41}{16}}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "So $x - \\dfrac{3}{4} = \\dfrac{\\sqrt{41}}{4}$ or $x - \\dfrac{3}{4} = -\\dfrac{\\sqrt{41}}{4}$.",
                  "reason": "Root of a quotient: $\\sqrt{\\dfrac{41}{16}} = \\dfrac{\\sqrt{41}}{\\sqrt{16}}$, and $\\sqrt{16} = 4$."
                },
                {
                  "step": "So $x = \\dfrac{3}{4} + \\dfrac{\\sqrt{41}}{4}$ or $x = \\dfrac{3}{4} - \\dfrac{\\sqrt{41}}{4}$.",
                  "reason": "Adding the same number to both sides: $\\dfrac{3}{4}$ is added to each side."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t145-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the number $c$ for which $x^2 + 9x + c$ is the square of a binomial.",
            "lines": [
              {
                "step": "Find the number $c$ for which $x^2 + 9x + c$ is the square of a binomial.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Half the coefficient of $x$ is $\\dfrac{9}{2}$.",
                "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
              },
              {
                "step": "$c = \\left(\\dfrac{9}{2}\\right)^2$",
                "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
              },
              {
                "step": "$c = \\dfrac{81}{4}$",
                "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $y^2 - \\dfrac{10}{3}y + c$ is the square of a binomial.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/9",
              "lines": [
                {
                  "step": "Find the number $c$ for which $y^2 - \\dfrac{10}{3}y + c$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half the coefficient of $y$ is $-\\dfrac{5}{3}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$c = \\left(-\\dfrac{5}{3}\\right)^2$",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "$c = \\dfrac{25}{9}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $z^2 - 15z + c$ is the square of a binomial.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "225/4",
              "lines": [
                {
                  "step": "Find the number $c$ for which $z^2 - 15z + c$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half the coefficient of $z$ is $-\\dfrac{15}{2}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$c = \\left(-\\dfrac{15}{2}\\right)^2$",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "$c = \\dfrac{225}{4}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $x^2 + 17x + c$ is the square of a binomial.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "289/4",
              "lines": [
                {
                  "step": "Find the number $c$ for which $x^2 + 17x + c$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Half the coefficient of $x$ is $\\dfrac{17}{2}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "$c = \\left(\\dfrac{17}{2}\\right)^2$",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "$c = \\dfrac{289}{4}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the positive number $b$ for which $y^2 + by + 72$ is the square of a binomial.",
            "lines": [
              {
                "step": "Find the positive number $b$ for which $y^2 + by + 72$ is the square of a binomial.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\left(\\dfrac{b}{2}\\right)^2 = 72$",
                "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
              },
              {
                "step": "So $\\dfrac{b}{2} = \\sqrt{72}$ or $\\dfrac{b}{2} = -\\sqrt{72}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
              },
              {
                "step": "$\\dfrac{b}{2} = \\sqrt{72}$",
                "reason": "Answering the question asked: $b$ is positive, so half of it is positive."
              },
              {
                "step": "$\\dfrac{b}{2} = 6\\sqrt{2}$",
                "reason": "Root of a product: $\\sqrt{72} = \\sqrt{36}\\sqrt{2} = 6\\sqrt{2}$."
              },
              {
                "step": "$b = 12\\sqrt{2}$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the positive number $b$ for which $z^2 + bz + 68$ is the square of a binomial.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(17)",
              "lines": [
                {
                  "step": "Find the positive number $b$ for which $z^2 + bz + 68$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{b}{2}\\right)^2 = 68$",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "So $\\dfrac{b}{2} = \\sqrt{68}$ or $\\dfrac{b}{2} = -\\sqrt{68}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "$\\dfrac{b}{2} = \\sqrt{68}$",
                  "reason": "Answering the question asked: $b$ is positive, so half of it is positive."
                },
                {
                  "step": "$\\dfrac{b}{2} = 2\\sqrt{17}$",
                  "reason": "Root of a product: $\\sqrt{68} = \\sqrt{4}\\sqrt{17} = 2\\sqrt{17}$."
                },
                {
                  "step": "$b = 4\\sqrt{17}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                }
              ]
            },
            {
              "prompt": "Find the positive number $b$ for which $x^2 + bx + 270$ is the square of a binomial.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "6*sqrt(30)",
              "lines": [
                {
                  "step": "Find the positive number $b$ for which $x^2 + bx + 270$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{b}{2}\\right)^2 = 270$",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "So $\\dfrac{b}{2} = \\sqrt{270}$ or $\\dfrac{b}{2} = -\\sqrt{270}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "$\\dfrac{b}{2} = \\sqrt{270}$",
                  "reason": "Answering the question asked: $b$ is positive, so half of it is positive."
                },
                {
                  "step": "$\\dfrac{b}{2} = 3\\sqrt{30}$",
                  "reason": "Root of a product: $\\sqrt{270} = \\sqrt{9}\\sqrt{30} = 3\\sqrt{30}$."
                },
                {
                  "step": "$b = 6\\sqrt{30}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                }
              ]
            },
            {
              "prompt": "Find the positive number $b$ for which $y^2 + by + 92$ is the square of a binomial.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(23)",
              "lines": [
                {
                  "step": "Find the positive number $b$ for which $y^2 + by + 92$ is the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\left(\\dfrac{b}{2}\\right)^2 = 92$",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "So $\\dfrac{b}{2} = \\sqrt{92}$ or $\\dfrac{b}{2} = -\\sqrt{92}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$."
                },
                {
                  "step": "$\\dfrac{b}{2} = \\sqrt{92}$",
                  "reason": "Answering the question asked: $b$ is positive, so half of it is positive."
                },
                {
                  "step": "$\\dfrac{b}{2} = 2\\sqrt{23}$",
                  "reason": "Root of a product: $\\sqrt{92} = \\sqrt{4}\\sqrt{23} = 2\\sqrt{23}$."
                },
                {
                  "step": "$b = 4\\sqrt{23}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the number $c$ for which $-5z^2 + 7z + c$ is $-5$ times the square of a binomial.",
            "lines": [
              {
                "step": "Find the number $c$ for which $-5z^2 + 7z + c$ is $-5$ times the square of a binomial.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-5z^2 + 7z + c = -5\\left(z^2 - \\dfrac{7}{5}z - \\dfrac{c}{5}\\right)$",
                "reason": "Taking out a common factor: $-5$ is taken out of each term, so the constant inside the bracket is $c$ divided by $-5$."
              },
              {
                "step": "Half the coefficient of $z$ inside the bracket is $-\\dfrac{7}{10}$.",
                "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
              },
              {
                "step": "The bracket is the square of a binomial exactly when $-\\dfrac{c}{5} = \\left(-\\dfrac{7}{10}\\right)^2$.",
                "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
              },
              {
                "step": "$-\\dfrac{c}{5} = \\dfrac{49}{100}$",
                "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
              },
              {
                "step": "$c = -\\dfrac{49}{20}$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $-5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $c$ for which $6x^2 + 5x + c$ is $6$ times the square of a binomial.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/24",
              "lines": [
                {
                  "step": "Find the number $c$ for which $6x^2 + 5x + c$ is $6$ times the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6x^2 + 5x + c = 6\\left(x^2 + \\dfrac{5}{6}x + \\dfrac{c}{6}\\right)$",
                  "reason": "Taking out a common factor: $6$ is taken out of each term, so the constant inside the bracket is $c$ divided by $6$."
                },
                {
                  "step": "Half the coefficient of $x$ inside the bracket is $\\dfrac{5}{12}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "The bracket is the square of a binomial exactly when $\\dfrac{c}{6} = \\left(\\dfrac{5}{12}\\right)^2$.",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "$\\dfrac{c}{6} = \\dfrac{25}{144}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$c = \\dfrac{25}{24}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $6$."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $6y^2 - 7y + c$ is $6$ times the square of a binomial.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "49/24",
              "lines": [
                {
                  "step": "Find the number $c$ for which $6y^2 - 7y + c$ is $6$ times the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6y^2 - 7y + c = 6\\left(y^2 - \\dfrac{7}{6}y + \\dfrac{c}{6}\\right)$",
                  "reason": "Taking out a common factor: $6$ is taken out of each term, so the constant inside the bracket is $c$ divided by $6$."
                },
                {
                  "step": "Half the coefficient of $y$ inside the bracket is $-\\dfrac{7}{12}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "The bracket is the square of a binomial exactly when $\\dfrac{c}{6} = \\left(-\\dfrac{7}{12}\\right)^2$.",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "$\\dfrac{c}{6} = \\dfrac{49}{144}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$c = \\dfrac{49}{24}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $6$."
                }
              ]
            },
            {
              "prompt": "Find the number $c$ for which $4z^2 - 9z + c$ is $4$ times the square of a binomial.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "81/16",
              "lines": [
                {
                  "step": "Find the number $c$ for which $4z^2 - 9z + c$ is $4$ times the square of a binomial.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4z^2 - 9z + c = 4\\left(z^2 - \\dfrac{9}{4}z + \\dfrac{c}{4}\\right)$",
                  "reason": "Taking out a common factor: $4$ is taken out of each term, so the constant inside the bracket is $c$ divided by $4$."
                },
                {
                  "step": "Half the coefficient of $z$ inside the bracket is $-\\dfrac{9}{8}$.",
                  "reason": "Definition of fraction multiplication, from arithmetic: half of a number is the number times $\\dfrac{1}{2}$."
                },
                {
                  "step": "The bracket is the square of a binomial exactly when $\\dfrac{c}{4} = \\left(-\\dfrac{9}{8}\\right)^2$.",
                  "reason": "Perfect-square quadratic, from t137, with the coefficient of $x^2$ equal to $1$: $x^2 + bx + c$ is the square of a binomial exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$."
                },
                {
                  "step": "$\\dfrac{c}{4} = \\dfrac{81}{64}$",
                  "reason": "The product formula, from arithmetic: the tops are multiplied and the bottoms are multiplied, and a product of two numbers of the same sign is positive."
                },
                {
                  "step": "$c = \\dfrac{81}{16}$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $4$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t145-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $x^2 - 12x - 5 = 0$, and write that line right.",
            "given": [
              "$x^2 - 12x - 5 = 0$",
              "$x^2 - 12x = 5$",
              "$x^2 - 12x = 5 + 36 = 41$",
              "$(x - 6)^2 = 41$",
              "$x - 6 = \\sqrt{41}$ or $x - 6 = -\\sqrt{41}$",
              "$x = 6 + \\sqrt{41}$ or $x = 6 - \\sqrt{41}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $x^2 - 12x - 5 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 adds $36$ to the right side only and runs on with a second equals sign.",
                "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
              },
              {
                "step": "Line 3 written right is $x^2 - 12x + 36 = 41$.",
                "reason": "Completing the square: the number that completes the square is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $y^2 + 16y - 7 = 0$, and write that line right.",
              "given": [
                "$y^2 + 16y - 7 = 0$",
                "$y^2 + 16y = 7$",
                "$y^2 + 16y = 7 + 64 = 71$",
                "$(y + 8)^2 = 71$",
                "$y + 8 = \\sqrt{71}$ or $y + 8 = -\\sqrt{71}$",
                "$y = -8 + \\sqrt{71}$ or $y = -8 - \\sqrt{71}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y^2+16*y+64 = 71",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $y^2 + 16y - 7 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $64$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 3 written right is $y^2 + 16y + 64 = 71$.",
                  "reason": "Completing the square: the number that completes the square is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $z^2 + 10z = 8$, and write that line right.",
              "given": [
                "$z^2 + 10z = 8$",
                "$z^2 + 10z = 8 + 25 = 33$",
                "$(z + 5)^2 = 33$",
                "$z + 5 = \\sqrt{33}$ or $z + 5 = -\\sqrt{33}$",
                "$z = -5 + \\sqrt{33}$ or $z = -5 - \\sqrt{33}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: z^2+10*z+25 = 33",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $z^2 + 10z = 8$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 adds $25$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 2 written right is $z^2 + 10z + 25 = 33$.",
                  "reason": "Completing the square: the number that completes the square is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $y^2 - 10y - 4 = 0$, and write that line right.",
              "given": [
                "$y^2 - 10y - 4 = 0$",
                "$y^2 - 10y = 4$",
                "$y^2 - 10y = 4 + 25 = 29$",
                "$(y - 5)^2 = 29$",
                "$y - 5 = \\sqrt{29}$ or $y - 5 = -\\sqrt{29}$",
                "$y = 5 + \\sqrt{29}$ or $y = 5 - \\sqrt{29}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: y^2-10*y+25 = 29",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $y^2 - 10y - 4 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 adds $25$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 3 written right is $y^2 - 10y + 25 = 29$.",
                  "reason": "Completing the square: the number that completes the square is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $x^2 - 14x - 6 = 0$, and write that line right.",
            "given": [
              "$x^2 - 14x - 6 = 0$",
              "$x^2 - 14x = -6$",
              "$x^2 - 14x + 49 = 43$",
              "$(x - 7)^2 = 43$",
              "$x - 7 = \\sqrt{43}$ or $x - 7 = -\\sqrt{43}$",
              "$x = 7 + \\sqrt{43}$ or $x = 7 - \\sqrt{43}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $x^2 - 14x - 6 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 2 moves the number $6$ to the right side and keeps its sign as $-6$.",
                "reason": "A sign lost: adding $6$ to both sides leaves $6$ on the right, not $-6$."
              },
              {
                "step": "Line 2 written right is $x^2 - 14x = 6$.",
                "reason": "Adding the same number to both sides: $6$ is added to each side."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $y^2 + 16y + 5 = 0$, and write that line right.",
              "given": [
                "$y^2 + 16y + 5 = 0$",
                "$y^2 + 16y = 5$",
                "$y^2 + 16y + 64 = 69$",
                "$(y + 8)^2 = 69$",
                "$y + 8 = \\sqrt{69}$ or $y + 8 = -\\sqrt{69}$",
                "$y = -8 + \\sqrt{69}$ or $y = -8 - \\sqrt{69}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: y^2+16*y = -5",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $y^2 + 16y + 5 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 moves the number $5$ to the right side and keeps its sign as $5$.",
                  "reason": "A sign lost: taking $5$ from both sides leaves $-5$ on the right, not $5$."
                },
                {
                  "step": "Line 2 written right is $y^2 + 16y = -5$.",
                  "reason": "Adding the same number to both sides: $5$ is taken from each side."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $z^2 + 8z - 8 = 0$, and write that line right.",
              "given": [
                "$z^2 + 8z - 8 = 0$",
                "$z^2 + 8z = -8$",
                "$z^2 + 8z + 16 = 8$",
                "$(z + 4)^2 = 8$",
                "$z + 4 = 2\\sqrt{2}$ or $z + 4 = -2\\sqrt{2}$",
                "$z = -4 + 2\\sqrt{2}$ or $z = -4 - 2\\sqrt{2}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: z^2+8*z = 8",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $z^2 + 8z - 8 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 2 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 2 moves the number $8$ to the right side and keeps its sign as $-8$.",
                  "reason": "A sign lost: adding $8$ to both sides leaves $8$ on the right, not $-8$."
                },
                {
                  "step": "Line 2 written right is $z^2 + 8z = 8$.",
                  "reason": "Adding the same number to both sides: $8$ is added to each side."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2x^2 - 24x + 14 = 0$, and write that line right.",
              "given": [
                "$2x^2 - 24x + 14 = 0$",
                "$x^2 - 12x + 7 = 0$",
                "$x^2 - 12x = 7$",
                "$x^2 - 12x + 36 = 43$",
                "$(x - 6)^2 = 43$",
                "$x - 6 = \\sqrt{43}$ or $x - 6 = -\\sqrt{43}$",
                "$x = 6 + \\sqrt{43}$ or $x = 6 - \\sqrt{43}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-12*x = -7",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2x^2 - 24x + 14 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 moves the number $7$ to the right side and keeps its sign as $7$.",
                  "reason": "A sign lost: taking $7$ from both sides leaves $-7$ on the right, not $7$."
                },
                {
                  "step": "Line 3 written right is $x^2 - 12x = -7$.",
                  "reason": "Adding the same number to both sides: $7$ is taken from each side."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $3x^2 + 12x - 5 = 0$, and write that line right.",
            "given": [
              "$3x^2 + 12x - 5 = 0$",
              "$3(x^2 + 4x) - 5 = 0$",
              "$3(x^2 + 4x) = 5$",
              "$3(x^2 + 4x) = 5 + 4 = 9$",
              "$3(x + 2)^2 = 9$",
              "$(x + 2)^2 = 3$",
              "$x + 2 = \\sqrt{3}$ or $x + 2 = -\\sqrt{3}$",
              "$x = -2 + \\sqrt{3}$ or $x = -2 - \\sqrt{3}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $3x^2 + 12x - 5 = 0$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 adds $4$ to the right side only and runs on with a second equals sign.",
                "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
              },
              {
                "step": "Line 4 written right is $3(x^2 + 4x + 4) = 17$.",
                "reason": "Completing the square: $4$ inside a bracket multiplied by $3$ adds $3 \\cdot 4 = 12$ to the left side, so $12$ is added to the right side too."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $2y^2 + 12y - 11 = 0$, and write that line right.",
              "given": [
                "$2y^2 + 12y - 11 = 0$",
                "$2(y^2 + 6y) - 11 = 0$",
                "$2(y^2 + 6y) = 11$",
                "$2(y^2 + 6y) = 11 + 9 = 20$",
                "$2(y + 3)^2 = 20$",
                "$(y + 3)^2 = 10$",
                "$y + 3 = \\sqrt{10}$ or $y + 3 = -\\sqrt{10}$",
                "$y = -3 + \\sqrt{10}$ or $y = -3 - \\sqrt{10}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*(y^2+6*y+9) = 29",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2y^2 + 12y - 11 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $9$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $2(y^2 + 6y + 9) = 29$.",
                  "reason": "Completing the square: $9$ inside a bracket multiplied by $2$ adds $2 \\cdot 9 = 18$ to the left side, so $18$ is added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2x^2 - 8x - 2 = 0$, and write that line right.",
              "given": [
                "$2x^2 - 8x - 2 = 0$",
                "$2(x^2 - 4x) - 2 = 0$",
                "$2(x^2 - 4x) = 2$",
                "$2(x^2 - 4x) = 2 + 4 = 6$",
                "$2(x - 2)^2 = 6$",
                "$(x - 2)^2 = 3$",
                "$x - 2 = \\sqrt{3}$ or $x - 2 = -\\sqrt{3}$",
                "$x = 2 + \\sqrt{3}$ or $x = 2 - \\sqrt{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*(x^2-4*x+4) = 10",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2x^2 - 8x - 2 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $4$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $2(x^2 - 4x + 4) = 10$.",
                  "reason": "Completing the square: $4$ inside a bracket multiplied by $2$ adds $2 \\cdot 4 = 8$ to the left side, so $8$ is added to the right side too."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $2z^2 - 16z - 8 = 0$, and write that line right.",
              "given": [
                "$2z^2 - 16z - 8 = 0$",
                "$2(z^2 - 8z) - 8 = 0$",
                "$2(z^2 - 8z) = 8$",
                "$2(z^2 - 8z) = 8 + 16 = 24$",
                "$2(z - 4)^2 = 24$",
                "$(z - 4)^2 = 12$",
                "$z - 4 = 2\\sqrt{3}$ or $z - 4 = -2\\sqrt{3}$",
                "$z = 4 + 2\\sqrt{3}$ or $z = 4 - 2\\sqrt{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*(z^2-8*z+16) = 40",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $2z^2 - 16z - 8 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 adds $16$ to the right side only and runs on with a second equals sign.",
                  "reason": "The equals sign read as \"work out the answer\": the number is added to the right side only and the sum runs on with a second equals sign, but an equation stays true only when both sides change by the same number."
                },
                {
                  "step": "Line 4 written right is $2(z^2 - 8z + 16) = 40$.",
                  "reason": "Completing the square: $16$ inside a bracket multiplied by $2$ adds $2 \\cdot 16 = 32$ to the left side, so $32$ is added to the right side too."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $z^2 + 2z = 22$, and write that line right.",
            "given": [
              "$z^2 + 2z = 22$",
              "$z^2 + 2z + 1 = 23$",
              "$(z - 1)^2 = 23$",
              "$z - 1 = \\sqrt{23}$ or $z - 1 = -\\sqrt{23}$",
              "$z = 1 + \\sqrt{23}$ or $z = 1 - \\sqrt{23}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $z^2 + 2z = 22$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 3 writes $z^2 + 2z + 1$ as $(z - 1)^2$.",
                "reason": "A sign lost: $(z - 1)^2 = z^2 - 2z + 1$, whose middle term has the other sign."
              },
              {
                "step": "Line 3 written right is $(z + 1)^2 = 23$.",
                "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $x^2 - 18x = -4$, and write that line right.",
              "given": [
                "$x^2 - 18x = -4$",
                "$x^2 - 18x + 81 = 77$",
                "$(x + 9)^2 = 77$",
                "$x + 9 = \\sqrt{77}$ or $x + 9 = -\\sqrt{77}$",
                "$x = -9 + \\sqrt{77}$ or $x = -9 - \\sqrt{77}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x-9)^2 = 77",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x^2 - 18x = -4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 writes $x^2 - 18x + 81$ as $(x + 9)^2$.",
                  "reason": "A sign lost: $(x + 9)^2 = x^2 + 18x + 81$, whose middle term has the other sign."
                },
                {
                  "step": "Line 3 written right is $(x - 9)^2 = 77$.",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = -18$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $y^2 + 4y = 20$, and write that line right.",
              "given": [
                "$y^2 + 4y = 20$",
                "$y^2 + 4y + 4 = 24$",
                "$(y - 2)^2 = 24$",
                "$y - 2 = 2\\sqrt{6}$ or $y - 2 = -2\\sqrt{6}$",
                "$y = 2 + 2\\sqrt{6}$ or $y = 2 - 2\\sqrt{6}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (y+2)^2 = 24",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $y^2 + 4y = 20$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 3 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 3 writes $y^2 + 4y + 4$ as $(y - 2)^2$.",
                  "reason": "A sign lost: $(y - 2)^2 = y^2 - 4y + 4$, whose middle term has the other sign."
                },
                {
                  "step": "Line 3 written right is $(y + 2)^2 = 24$.",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $z^2 + 20z + 5 = 0$, and write that line right.",
              "given": [
                "$z^2 + 20z + 5 = 0$",
                "$z^2 + 20z = -5$",
                "$z^2 + 20z + 100 = 95$",
                "$(z - 10)^2 = 95$",
                "$z - 10 = \\sqrt{95}$ or $z - 10 = -\\sqrt{95}$",
                "$z = 10 + \\sqrt{95}$ or $z = 10 - \\sqrt{95}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (z+10)^2 = 95",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $z^2 + 20z + 5 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 writes $z^2 + 20z + 100$ as $(z - 10)^2$.",
                  "reason": "A sign lost: $(z - 10)^2 = z^2 - 20z + 100$, whose middle term has the other sign."
                },
                {
                  "step": "Line 4 written right is $(z + 10)^2 = 95$.",
                  "reason": "Completing the square: $x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2$, with $b = 20$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this solution of $y^2 - 28y = 2$, and write that line right.",
            "given": [
              "$y^2 - 28y = 2$",
              "$y^2 - 28y + 196 = 198$",
              "$(y - 14)^2 = 198$",
              "$y - 14 = 3\\sqrt{22}$",
              "$y = 14 + 3\\sqrt{22}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this solution of $y^2 - 28y = 2$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                "reason": "Each step is checked against the rule it uses."
              },
              {
                "step": "Line 4 keeps only the root $3\\sqrt{22}$ and drops $-3\\sqrt{22}$.",
                "reason": "A sign lost: the negative square root is dropped."
              },
              {
                "step": "Line 4 written right is $y - 14 = 3\\sqrt{22}$ or $y - 14 = -3\\sqrt{22}$.",
                "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: both roots are kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this solution of $x^2 + 22x + 3 = 0$, and write that line right.",
              "given": [
                "$x^2 + 22x + 3 = 0$",
                "$x^2 + 22x = -3$",
                "$x^2 + 22x + 121 = 118$",
                "$(x + 11)^2 = 118$",
                "$x + 11 = \\sqrt{118}$",
                "$x = -11 + \\sqrt{118}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: x+11 = sqrt(118) or x+11 = -sqrt(118)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $x^2 + 22x + 3 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 keeps only the root $\\sqrt{118}$ and drops $-\\sqrt{118}$.",
                  "reason": "A sign lost: the negative square root is dropped."
                },
                {
                  "step": "Line 5 written right is $x + 11 = \\sqrt{118}$ or $x + 11 = -\\sqrt{118}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: both roots are kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $z^2 - 4z - 15 = 0$, and write that line right.",
              "given": [
                "$z^2 - 4z - 15 = 0$",
                "$z^2 - 4z = 15$",
                "$z^2 - 4z + 4 = 19$",
                "$(z - 2)^2 = 19$",
                "$z - 2 = \\sqrt{19}$",
                "$z = 2 + \\sqrt{19}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: z-2 = sqrt(19) or z-2 = -sqrt(19)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $z^2 - 4z - 15 = 0$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 5 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 5 keeps only the root $\\sqrt{19}$ and drops $-\\sqrt{19}$.",
                  "reason": "A sign lost: the negative square root is dropped."
                },
                {
                  "step": "Line 5 written right is $z - 2 = \\sqrt{19}$ or $z - 2 = -\\sqrt{19}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: both roots are kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this solution of $y^2 + 24y = -26$, and write that line right.",
              "given": [
                "$y^2 + 24y = -26$",
                "$y^2 + 24y + 144 = 118$",
                "$(y + 12)^2 = 118$",
                "$y + 12 = \\sqrt{118}$",
                "$y = -12 + \\sqrt{118}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: y+12 = sqrt(118) or y+12 = -sqrt(118)",
              "lines": [
                {
                  "step": "Find the first wrong line in this solution of $y^2 + 24y = -26$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is the equation as given, and each line before line 4 follows from the line before it by a rule that holds.",
                  "reason": "Each step is checked against the rule it uses."
                },
                {
                  "step": "Line 4 keeps only the root $\\sqrt{118}$ and drops $-\\sqrt{118}$.",
                  "reason": "A sign lost: the negative square root is dropped."
                },
                {
                  "step": "Line 4 written right is $y + 12 = \\sqrt{118}$ or $y + 12 = -\\sqrt{118}$.",
                  "reason": "If $x^2 = a^2$ then $x = a$ or $x = -a$: both roots are kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t145-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the square of a number $x$, plus 15 times the number, is 7.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the square of a number $x$, plus 15 times the number, is 7.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square of the number is $x^2$, and 15 times the number is $15x$.",
                "reason": "Writing a sentence as an equation: \"the square of\" a number is the number times itself, and \"times\" multiplies."
              },
              {
                "step": "The square plus 15 times the number is $x^2 + 15x$.",
                "reason": "Writing a sentence as an equation: \"plus\" adds the amount after it."
              },
              {
                "step": "$x^2 + 15x = 7$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the square of a number $x$, minus 8 times the number, is 27.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2-8*x = 27",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of a number $x$, minus 8 times the number, is 27.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and 8 times the number is $8x$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" a number is the number times itself, and \"times\" multiplies."
                },
                {
                  "step": "The square minus 8 times the number is $x^2 - 8x$.",
                  "reason": "Writing a sentence as an equation: \"minus\" takes away the amount after it."
                },
                {
                  "step": "$x^2 - 8x = 27$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the square of a number $x$, plus 5 times the number, is 12.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+5*x = 12",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of a number $x$, plus 5 times the number, is 12.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and 5 times the number is $5x$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" a number is the number times itself, and \"times\" multiplies."
                },
                {
                  "step": "The square plus 5 times the number is $x^2 + 5x$.",
                  "reason": "Writing a sentence as an equation: \"plus\" adds the amount after it."
                },
                {
                  "step": "$x^2 + 5x = 12$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the square of a number $x$, plus 9 times the number, is 10.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "x^2+9*x = 10",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of a number $x$, plus 9 times the number, is 10.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square of the number is $x^2$, and 9 times the number is $9x$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" a number is the number times itself, and \"times\" multiplies."
                },
                {
                  "step": "The square plus 9 times the number is $x^2 + 9x$.",
                  "reason": "Writing a sentence as an equation: \"plus\" adds the amount after it."
                },
                {
                  "step": "$x^2 + 9x = 10$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$: the square of the sum of a number $x$ and 8 is 60.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $x$: the square of the sum of a number $x$ and 8 is 60.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The sum of the number and 8 is $x + 8$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
              },
              {
                "step": "The square of that amount is $(x + 8)^2$.",
                "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
              },
              {
                "step": "$(x + 8)^2 = 60$",
                "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$: the square of the number that is 4 less than a number $x$ is 26.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-4)^2 = 26",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of the number that is 4 less than a number $x$ is 26.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 4 less than the number $x$ is $x - 4$.",
                  "reason": "Writing a sentence as an equation: \"4 less than\" takes 4 away from the number."
                },
                {
                  "step": "The square of that amount is $(x - 4)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x - 4)^2 = 26$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the square of the sum of a number $x$ and 10 is 99.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x+10)^2 = 99",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of the sum of a number $x$ and 10 is 99.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of the number and 10 is $x + 10$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two amounts."
                },
                {
                  "step": "The square of that amount is $(x + 10)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x + 10)^2 = 99$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$: the square of the number that is 3 less than a number $x$ is 44.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "(x-3)^2 = 44",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $x$: the square of the number that is 3 less than a number $x$ is 44.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The number that is 3 less than the number $x$ is $x - 3$.",
                  "reason": "Writing a sentence as an equation: \"3 less than\" takes 3 away from the number."
                },
                {
                  "step": "The square of that amount is $(x - 3)^2$.",
                  "reason": "Writing a sentence as an equation: \"the square of\" an amount is that amount times itself, so the whole bracket is squared."
                },
                {
                  "step": "$(x - 3)^2 = 44$",
                  "reason": "Writing a sentence as an equation: the word \"is\" stands where the equals sign goes."
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
      "id": "t145-p1",
      "method": "direct proof",
      "statement": "For all numbers $b$ and $c$, $x^2 + bx + c$ equals $(x + d)^2$ for all $x$, for some number $d$, exactly when $c = \\left(\\dfrac{b}{2}\\right)^2$; and then $d = \\dfrac{b}{2}$.",
      "idea": "Multiply out $(x + d)^2$ and compare coefficients with $x^2 + bx + c$: the $x$ terms fix $d$ as half of $b$, and the constant terms then fix $c$ as the square of that half. Read backwards, the same identity shows the square exists.",
      "lines": [
        {
          "line": "The square $(x + d)^2$ equals $x^2 + 2dx + d^2$.",
          "reason": "Square of a binomial."
        },
        {
          "line": "Suppose $x^2 + bx + c = (x + d)^2$ for all $x$. Then $x^2 + bx + c = x^2 + 2dx + d^2$ for all $x$.",
          "reason": "Line 1: the square is replaced by the expression equal to it."
        },
        {
          "line": "The $x$ terms give $b = 2d$.",
          "reason": "Equal for all $x$ means equal coefficients."
        },
        {
          "line": "The constant terms give $c = d^2$.",
          "reason": "Equal for all $x$ means equal coefficients."
        },
        {
          "line": "So $d = \\dfrac{b}{2}$.",
          "reason": "Dividing both sides of line 3 by a nonzero number, $2$."
        },
        {
          "line": "So $c = \\left(\\dfrac{b}{2}\\right)^2$.",
          "reason": "Substituting a value: $d$ in line 4 is replaced by its value from line 5."
        },
        {
          "line": "Now suppose $c = \\left(\\dfrac{b}{2}\\right)^2$. Then $x^2 + bx + c = x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2$.",
          "reason": "Substituting a value: $c$ is replaced by its value."
        },
        {
          "line": "The right side of line 7 equals $x^2 + 2 \\cdot \\dfrac{b}{2} \\cdot x + \\left(\\dfrac{b}{2}\\right)^2$.",
          "reason": "The product formula, from arithmetic: $b = 2 \\cdot \\dfrac{b}{2}$."
        },
        {
          "line": "The right side of line 8 equals $\\left(x + \\dfrac{b}{2}\\right)^2$.",
          "reason": "Square of a binomial, read from right to left, with first term $x$ and second term $\\dfrac{b}{2}$."
        },
        {
          "line": "So $x^2 + bx + c = \\left(x + \\dfrac{b}{2}\\right)^2$ for all $x$, with $d = \\dfrac{b}{2}$.",
          "reason": "Lines 7, 8 and 9: expressions equal one after another are equal."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t145-s1",
      "method": "direct proof",
      "statement": "Prove that for all numbers $a$, $b$ and $c$ with $a \\ne 0$, and every $x$, $ax^2 + bx + c = a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$ (completing the square in letters). Facts it may use: completing the square, taking out a common factor, the distributive law, adding the same number to both sides, multiplying both sides by the same number, power of a quotient, cancelling a common factor, the product formula (from arithmetic).",
      "check": {
        "proof": [
          {
            "line": "The sum $ax^2 + bx$ equals $a\\left(x^2 + \\dfrac{b}{a}x\\right)$.",
            "reason": "Taking out a common factor: $a$ is not 0, and $bx = a \\cdot \\dfrac{b}{a}x$ by multiplication of fractions."
          },
          {
            "line": "The sum $x^2 + \\dfrac{b}{a}x + \\left(\\dfrac{b}{2a}\\right)^2$ equals $\\left(x + \\dfrac{b}{2a}\\right)^2$.",
            "reason": "Completing the square, with $\\dfrac{b}{a}$ as the coefficient of $x$: half of it is $\\dfrac{b}{2a}$."
          },
          {
            "line": "So $x^2 + \\dfrac{b}{a}x = \\left(x + \\dfrac{b}{2a}\\right)^2 - \\left(\\dfrac{b}{2a}\\right)^2$.",
            "reason": "Adding the same number to both sides of line 2: $\\left(\\dfrac{b}{2a}\\right)^2$ is taken from each side."
          },
          {
            "line": "So $a\\left(x^2 + \\dfrac{b}{a}x\\right) = a\\left(\\left(x + \\dfrac{b}{2a}\\right)^2 - \\left(\\dfrac{b}{2a}\\right)^2\\right)$.",
            "reason": "Multiplying both sides by the same number: both sides of line 3 are multiplied by $a$."
          },
          {
            "line": "The right side of line 4 equals $a\\left(x + \\dfrac{b}{2a}\\right)^2 - a\\left(\\dfrac{b}{2a}\\right)^2$.",
            "reason": "The distributive law."
          },
          {
            "line": "The product $a\\left(\\dfrac{b}{2a}\\right)^2$ equals $a \\cdot \\dfrac{b^2}{4a^2}$.",
            "reason": "Power of a quotient."
          },
          {
            "line": "The product $a \\cdot \\dfrac{b^2}{4a^2}$ equals $\\dfrac{b^2}{4a}$.",
            "reason": "Cancelling a common factor: $a$ is not 0."
          },
          {
            "line": "So $ax^2 + bx = a\\left(x + \\dfrac{b}{2a}\\right)^2 - \\dfrac{b^2}{4a}$.",
            "reason": "Lines 1, 4 and 5, with the product of lines 6 and 7 put in."
          },
          {
            "line": "Therefore $ax^2 + bx + c = a\\left(x + \\dfrac{b}{2a}\\right)^2 + c - \\dfrac{b^2}{4a}$.",
            "reason": "Adding the same number to both sides of line 8: $c$ is added to each side."
          }
        ]
      }
    }
  ]
}
